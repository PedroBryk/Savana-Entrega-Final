import { CardIcon } from "../atomos/cardIcon";
import { Title } from "../atomos/title";
import { Description } from "../atomos/description";

interface CardProdutoProps {
    image: string;
    title: string;
    imageAlt: string;
    description: string;

}

export const CardProduto = ({ image, title, description, imageAlt}: CardProdutoProps) => {
  return (
    <div className="flex flex-col items-center justify-between bg-backgroundClaro w-80 min-h-[400px] rounded-sm p-6 text-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
  
        <CardIcon src={image} alt={imageAlt} />

        <Title className="text-background">{title}</Title>

        <Description className="text-background">{description}</Description>

  </div>

  );
};