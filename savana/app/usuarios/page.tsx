"use client";

import { useEffect, useState } from "react";
import { getToken } from "../services/authService";
import { useRouter } from "next/navigation";
import Link from "next/link";

type User = {
  id: number;
  name: string;
  cpf: string;
  email: string;
  createdAt: string;
};

export default function UsuariosPage() {
  const router = useRouter();
  const [usuarios, setUsuarios] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsuarios = async () => {
    const response = await fetch("http://localhost:3000/users");
    const data = await response.json();
    setUsuarios(data);
    setLoading(false);
  };

  const handleDelete = async (id: number) => {
    const confirmar = confirm("Tem certeza que deseja excluir este usuário?");
    if (!confirmar) return;

    const token = getToken();
    await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    setUsuarios((prev) => prev.filter((u) => u.id !== id));
  };

  useEffect(() => {
    if (!getToken()) {
      router.push("/login");
      return;
    }
    fetchUsuarios();
  }, []);

  return (
    <main className="flex flex-col items-center min-h-screen bg-background gap-6 p-10">
      <h1 className="text-2xl font-bold text-white">Usuários Cadastrados</h1>

      {loading ? (
        <p className="text-white">Carregando...</p>
      ) : usuarios.length === 0 ? (
        <p className="text-white">Nenhum usuário cadastrado.</p>
      ) : (
        <div className="flex flex-col gap-4 w-full max-w-2xl">
          {usuarios.map((user) => (
            <div
              key={user.id}
              className="bg-background border border-white rounded-sm p-6 flex justify-between items-center"
            >
              <div>
                <p className="font-bold text-white">{user.name}</p>
                <p className="text-sm text-white">{user.email}</p>
                <p className="text-sm text-white">{user.cpf}</p>
              </div>
              <button
                onClick={() => handleDelete(user.id)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm"
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
      )}

      <Link href="/gerenciamento">
        <button className="text-white border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition text-sm">
          Voltar ao Gerenciamento
        </button>
      </Link>
    </main>
  );
}