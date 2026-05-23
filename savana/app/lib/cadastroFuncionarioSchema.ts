import { z } from "zod";

export const cadastroFuncionarioSchema = z
  .object({
    cpf: z
      .string()
      .min(11, "CPF deve ter 11 dígitos")
      .max(11, "CPF deve ter 11 dígitos"),

    nome: z.string().min(3, "Nome obrigatório"),

    email: z.string().email("Email inválido"),

    senha: z.string().min(6, "Mínimo 6 caracteres"),

    confirmarSenha: z.string(),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    message: "As senhas não coincidem",
    path: ["confirmarSenha"],
  });
