"use client";

import { Title } from "../atomos/title";
import Link from "next/link";
import { useUser } from "../../hooks/useUser";
import { LogoutButton } from "../atomos/logoutButton";

interface LoginButtonProps {
  title: string;
  href: string;
}

export const LoginButton = ({ title, href }: LoginButtonProps) => {
  const { user, loading } = useUser();

  if (loading) return null;

  if (user) {
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <img src="/images/pata.png" alt="" />

        <Title className="p-2 text-sm font-bold">Olá, {user.nome}</Title>

        <LogoutButton />
      </div>
    );
  }

  return (
    <Link href={href}>
      <div className="flex flex-col items-center justify-center p-4">
        <img src="/images/pata.png" alt="" />

        <Title>{title}</Title>
      </div>
    </Link>
  );
};
