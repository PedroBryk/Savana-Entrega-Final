"use client";

export const LogoutButton = () => {
  const handleLogout = () => {

    localStorage.removeItem("user");

    window.dispatchEvent(new Event("storage"));
  };

  return (
    <button
      onClick={handleLogout}
      className="cursor-pointer text-sm text-red-500"
    >
      Sair
    </button>
  );
};
