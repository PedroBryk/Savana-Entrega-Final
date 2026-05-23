import { CardIcon } from "../atomos/cardIcon";
import { Title } from "../atomos/title";
import { Description } from "../atomos/description";
import { Button } from "../atomos/button";
import Link from "next/link";

interface CardProps {
    image: string;
    title: string;
    imageAlt: string;
    description: string;
    buttonText: string;
    href: string;
}

export const Card = ({ image, title, description, buttonText, imageAlt, href }: CardProps) => {
  return (
    <div className="flex flex-col items-center justify-between bg-backgroundClaro w-80 min-h-[400px] rounded-sm p-6 text-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
  
  <CardIcon src={image} alt={imageAlt} />

  <Title className="text-background">{title}</Title>

  <Description className="text-background">{description}</Description>

  <div className="flex justify-center mt-4">
    <Link href={href}>
      <Button className="bg-background text-white px-4 py-2 cursor-pointer hover:bg-header transition-colors">
        {buttonText}
      </Button>
    </Link>
  </div>

</div>
  );
};