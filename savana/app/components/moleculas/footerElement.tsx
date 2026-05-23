import { Title } from "../atomos/title";
import Link from "next/link";

interface FooterElementProps {
    title: string;
    href: string;
    src: string;
    alt: string;
}

export const FooterElement = ({title, href, src, alt }: FooterElementProps) => {
  return (
    <Link href={href}>
        <div className="flex flex items-center justify-center basis-64 p-6 text-center gap-2">
            <img src={src} alt={alt} />
            <Title className="text-backgroundClaro text-sm ">{title}</Title>
        </div>
    </Link>
  );
};