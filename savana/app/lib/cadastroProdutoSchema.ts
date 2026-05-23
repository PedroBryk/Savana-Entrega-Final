import { z } from "zod";

export const cadastroProdutoSchema = z.object({
  nome: z.string().min(2, "Nome do produto é obrigatório"),
  descricao: z.string().min(5, "Descrição muito curta"),
  preco: z.coerce.number().min(0.01, "Preço obrigatório"),
  categoria: z.string().min(2, "Categoria obrigatória"),
  imagem: z.any().optional(),
});