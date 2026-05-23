import { CadastroProdutos } from "../../components/organismos/cadastroProdutos";
import { CardIcon } from "../../components/atomos/cardIcon";
import { Title } from "../../components/atomos/title";

export default function cadastroProdutos() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background gap-6">
          <img src="/images/pata.png" alt="pata de cachorro" />
          <Title>Cadastrar Produtos</Title>
          <CadastroProdutos />
    </main>
  );
}