"use client";

import { Input } from "../atomos/input";
import { Button } from "../atomos/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cadastroProdutoSchema } from "../../lib/cadastroProdutoSchema";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { getToken } from "../../services/authService";
import { useRef } from "react";

type FormData = z.input<typeof cadastroProdutoSchema>;

export const CadastroProdutos = () => {
  const router = useRouter();
  const imageRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(cadastroProdutoSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const token = getToken();

      const formData = new FormData();
      formData.append("name", data.nome);
      formData.append("description", data.descricao);
      formData.append("price", String(data.preco));
      formData.append("category", data.categoria);

      if (imageRef.current?.files?.[0]) {
        formData.append("image", imageRef.current.files[0]);
      }

      const response = await fetch("http://localhost:3000/menu", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (!response.ok) throw new Error("Erro ao cadastrar produto");

      alert("Produto cadastrado com sucesso!");
      reset();
      router.push("/cardapio");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-around rounded-sm gap-6 p-16 bg-backgroundClaro"
    >
      <div className="flex flex-col">
        <Input placeholder="Nome do Produto" {...register("nome")} />
        {errors.nome && <span className="text-red-500 text-sm">{errors.nome.message}</span>}
      </div>

      <div className="flex flex-col">
        <Input placeholder="Descrição" {...register("descricao")} />
        {errors.descricao && <span className="text-red-500 text-sm">{errors.descricao.message}</span>}
      </div>

      <div className="flex flex-col">
        <Input type="number" step="0.01" placeholder="Preço (ex: 12.90)" {...register("preco")} />
        {errors.preco && <span className="text-red-500 text-sm">{errors.preco.message as string}</span>}
      </div>

      <div className="flex flex-col">
        <Input placeholder="Categoria (ex: Bebidas, Doces)" {...register("categoria")} />
        {errors.categoria && <span className="text-red-500 text-sm">{errors.categoria.message as string}</span>}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-600">Foto do produto</label>
        <input type="file" accept="image/*" ref={imageRef} className="text-sm text-background" />
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Cadastrando..." : "Cadastrar"}
      </Button>
    </form>
  );
};