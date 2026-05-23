import { z } from "zod";

export const animalSchema = z.object({
  nome: z.string().min(2, "Nome obrigatório"),
  especie: z.string().min(2, "Espécie obrigatória"),
  sexo: z.string().min(1, "Informe o sexo"),
  idade: z.coerce.number().min(0, "Idade inválida"),
  raca: z.string().optional(),
  historia: z.string().min(10, "Descreva melhor o animal"),
});
