import { CardIcon } from "../atomos/cardIcon";
import { Title } from "../atomos/title";
import { Description } from "../atomos/description";

interface CardAnimalProps {
    image: string;
    title: string;
    imageAlt: string;
    description: string;
    especie:string;
    sexo: string;
    idade: string;
    raca: string;

}

export const CardAnimal = ({ image, title, description, imageAlt, especie, sexo, idade, raca }: CardAnimalProps) => {
  return (
    <div className="flex flex-col items-center justify-between bg-backgroundClaro w-80 min-h-[400px] rounded-sm p-6 text-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
  
        <CardIcon src={image} alt={imageAlt} />

        <Title className="text-background">{title}</Title>

        <div className="flex items-center justify-between gap-3">
            <h6 className="text-background">Espécie:</h6>
            <Description className="text-background">{especie}</Description>
        </div>

        <div className="flex items-center justify-between gap-3">
            <h6 className="text-background">Sexo:</h6>
            <Description className="text-background">{sexo}</Description>
        </div>

        <div className="flex items-center justify-between gap-3">
            <h6 className="text-background">Idade:</h6>
            <Description className="text-background">{idade}</Description>
        </div>

        <div className="flex items-center justify-between gap-3">
            <h6 className="text-background">Raça:</h6>
            <Description className="text-background">{raca}</Description>
        </div>

        

  </div>

  );
};