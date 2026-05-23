"use client";

import { Input } from "../atomos/input";
import { Button } from "../atomos/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { animalSchema } from "../../lib/animalSchema";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { getToken } from "../../services/authService";
import { useRef } from "react";

type AnimalFormData = z.input<typeof animalSchema>;

export const CadastroAnimal = () => {
  const router = useRouter();
  const imageRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AnimalFormData>({
    resolver: zodResolver(animalSchema),
  });

  const onSubmit = async (data: AnimalFormData) => {
    try {
      const token = getToken();

      const formData = new FormData();
      formData.append("name", data.nome);
      formData.append("species", data.especie);
      formData.append("age", String(data.idade));
      formData.append("breed", data.raca || "Não informada");
      formData.append("description", data.historia);

      if (imageRef.current?.files?.[0]) {
        formData.append("image", imageRef.current.files[0]);
      }

      const response = await fetch("http://localhost:3000/pets", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (!response.ok) throw new Error("Erro ao cadastrar animal");

      alert("Animal cadastrado com sucesso!");
      reset();
      router.push("/adocao");
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
        <Input placeholder="Nome do Animal" {...register("nome")} />
        {errors.nome && <span className="text-red-500 text-sm">{errors.nome.message}</span>}
      </div>

      <div className="flex flex-col">
        <Input placeholder="Espécie" {...register("especie")} />
        {errors.especie && <span className="text-red-500 text-sm">{errors.especie.message}</span>}
      </div>

      <div className="flex flex-col">
        <Input placeholder="Sexo" {...register("sexo")} />
        {errors.sexo && <span className="text-red-500 text-sm">{errors.sexo.message}</span>}
      </div>

      <div className="flex flex-col">
        <Input type="number" placeholder="Idade Aproximada" {...register("idade")} />
        {errors.idade && <span className="text-red-500 text-sm">{errors.idade.message}</span>}
      </div>

      <div className="flex flex-col">
        <Input placeholder="Raça" {...register("raca")} />
      </div>

      <div className="flex flex-col">
        <textarea
          placeholder="História e Perfil Comportamental"
          {...register("historia")}
          className="border p-2 rounded text-background placeholder:text-background"
        />
        {errors.historia && <span className="text-red-500 text-sm">{errors.historia.message}</span>}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-background">Foto do animal</label>
        <input
          type="file"
          accept="image/*"
          ref={imageRef}
          className="text-sm text-background"
        />
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Cadastrando..." : "Cadastrar"}
      </Button>
    </form>
  );
};