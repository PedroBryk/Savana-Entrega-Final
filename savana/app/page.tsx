import { Card } from "../app/components/moleculas/card"
import { Description } from "../app/components/atomos/description"
import Image from "next/image";

export default function ComunidadePage() {
  return (

    <main>
        <section className="relative w-full h-[250px] md:h-[400px] lg:h-[500px]">
            <Image
                src="/images/background-new.png"
                alt="Background"
                fill
                className="object-cover"
                priority
            />
        </section>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 py-16">
        <Card
            image="/images/adocao.png"
            imageAlt="Foto de um cachorro triste no canto de um abrigo"
            title="Adoção"
            description="Confira os animais disponíveis para adoção!"
            buttonText="Conferir Animais"
            href= "/adocao"
        />

        <Card
            image="/images/cardapio.png"
            imageAlt="Foto de uma xícara de café"
            title="Cardápio"
            description="Confira nosso delicioso cardápio"
            buttonText="Conferir Cardápio"
            href= "/cardapio"
        />

        <Card
            image="/images/doacoes.png"
            imageAlt="Foto de um cachorro com a pata amputada"
            title="Doações"
            description="Descubra como realizar uma doação"
            buttonText="Realizar Doações"
            href= "/doacoes"
        />

        <Card
            image="/images/regras.png"
            imageAlt="Foto de vários anmais brincando"
            title="Horários e Regras"
            description="Confira os nossos horários e regras para visitação"
            buttonText="Conferir"
            href= "/regras"
        />
        </div>
        <section className="flex justify-center py-16">
            <Description className="text-center max-w-2xl text-lg font-bold text-backgroundClaro">
                O Savana é um refúgio que une café de alta qualidade e amor pelos animais. 
                Todo o nosso lucro é revertido para o cuidado e a adoção dos pets que vivem aqui. 
                No Savana, cada xícara ajuda a mudar o destino de um melhor amigo.
            </Description>
        </section>
    </main>

  );
}