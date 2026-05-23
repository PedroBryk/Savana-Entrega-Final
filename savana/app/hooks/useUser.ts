"use client";

import { useEffect, useState } from "react";

export const useUser = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const loadUser = () => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    loadUser();
    setLoading(false);

    window.addEventListener("storage", loadUser);

    return () => {
      window.removeEventListener("storage", loadUser);
    };
  }, []);

  return { user, loading };
};
