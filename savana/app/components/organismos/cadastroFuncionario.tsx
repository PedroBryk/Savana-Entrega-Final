"use client";

import { Input } from "../atomos/input";
import { Button } from "../atomos/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cadastroFuncionarioSchema } from "../../lib/cadastroFuncionarioSchema";
import { z } from "zod";
import { useRouter } from "next/navigation";

type FormData = z.input<typeof cadastroFuncionarioSchema>;

export const CadastroFuncionario = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(cadastroFuncionarioSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.nome,
          cpf: data.cpf,
          email: data.email,
          password: data.senha,
        }),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || 'Erro ao cadastrar');
      }

      alert('Cadastro realizado com sucesso!');
      reset();
      router.push('/login');
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
        <Input placeholder="CPF" {...register("cpf")} />
        {errors.cpf && <span className="text-red-500 text-sm">{errors.cpf.message}</span>}
      </div>

      <div className="flex flex-col">
        <Input placeholder="Nome Completo" {...register("nome")} />
        {errors.nome && <span className="text-red-500 text-sm">{errors.nome.message}</span>}
      </div>

      <div className="flex flex-col">
        <Input type="email" placeholder="Email" {...register("email")} />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
      </div>

      <div className="flex flex-col">
        <Input type="password" placeholder="Senha" {...register("senha")} />
        {errors.senha && <span className="text-red-500 text-sm">{errors.senha.message}</span>}
      </div>

      <div className="flex flex-col">
        <Input type="password" placeholder="Confirmar Senha" {...register("confirmarSenha")} />
        {errors.confirmarSenha && <span className="text-red-500 text-sm">{errors.confirmarSenha.message}</span>}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Cadastrando..." : "Cadastrar"}
      </Button>
    </form>
  );
};