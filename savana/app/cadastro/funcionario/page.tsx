import { CadastroFuncionario } from "../../components/organismos/cadastroFuncionario";
import { CardIcon } from "../../components/atomos/cardIcon";
import { Title } from "../../components/atomos/title";

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background gap-6">
      <img src="/images/pata.png" alt="pata de cachorro" />
      <Title>Cadastro de Funcionários</Title>
      <CadastroFuncionario />
    </main>
  );
}
