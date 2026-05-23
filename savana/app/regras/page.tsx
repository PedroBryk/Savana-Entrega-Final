import { Title } from "../../app/components/atomos/title";
import { Description } from "../../app/components/atomos/description";

export default function DoacoesPage() {
  return (
    <main className="flex flex-col items-center gap-10 p-12 text-center">
      
      <div className="flex flex-col gap-3 max-w-xl">
        <Title>Horários</Title>
        <Description className="text-backgroundClaro">
          Sexta-feira: 14h às 20h — Perfeito para um café relaxante após o trabalho. <br /><br />
          Sábado: 10h às 20h — O dia oficial da bagunça e das adoções <br /><br />
          Domingo: 10h às 18h — Tarde de aconchego e encontro com seu novo melhor amigo.
        </Description>
      </div>

      <div className="flex flex-col gap-3 max-w-xl">
        <Title>Regras da Casa</Title>
        <Description className="text-backgroundClaro">
          Respeite o sono dos animais <br />
          Fotos sem flash <br />
          Colinho por vontade deles <br />
          Nada de comida de humano <br />
          Voz suave e movimentos calmos <br />
          Crianças sempre acompanhadas
        </Description>
      </div>

    </main>
  );
}
