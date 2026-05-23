const API_URL = 'http://localhost:3000';

export const login = async (email: string, senha: string) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password: senha }),
  });

  if (!response.ok) throw new Error('Email ou senha inválidos');

  const data = await response.json();
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', data.access_token);
  }
  return data;
};

export const logout = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token');
  }
};

export const getToken = () => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('token');
};