import { Title } from "../../app/components/atomos/title";
import { Description } from "../../app/components/atomos/description";

export default function DoacoesPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background p-6">
      
      <div className="bg-backgroundClaro rounded-2xl shadow-xl p-8 flex flex-col items-center text-center gap-6 max-w-md w-full hover:scale-105 transition-all duration-300">
        
        <Title className="text-xl font-bold text-background">
          Não pode adotar agora?
        </Title>

        <Description className="text-background">
          Você ainda pode transformar uma vida doando pelo QR Code abaixo 
        </Description>

        {/* QR Code */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <img
            src="/images/animais/qrcode.png"
            alt="QR Code para doação"
            className="w-48 h-48 object-contain"
          />
        </div>

        <Description className="text-backgroundClaro">
          Sua contribuição garante vacinas, remédios e barriguinhas cheias 
        </Description>

      </div>

    </main>
  );
}
