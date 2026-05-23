import { Title } from "../atomos/title";
import { FooterElement } from "../moleculas/footerElement";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex justify-center items-center gap-8 py-8 bg-background">
  
  <FooterElement
    title="Rua Dos Desempregados, 001 Bairro:Vila Rica"
    href="/adocao"
    src="/images/location.png"
    alt="Localização"
  />

  <FooterElement
    title="(42) 9999-9999"
    href="/cardapio"
    src="/images/phone.png"
    alt="Telefone"
  />

  <FooterElement
    title="contato@savana.com"
    href="/doacoes"
    src="/images/mail.png"
    alt="E-mail"
  />

</footer>

  );
};