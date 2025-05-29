import { create } from 'zustand/react';
import { Credentials, Usuario } from '@/lib/types/auth.type';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { createJSONStorage, persist } from 'zustand/middleware';

type AuthState = {
  isAuth: boolean;
  user: Usuario | null;
  isLoading: boolean;
  error: string | null;
  login: (credentials: Credentials) => Promise<boolean>;
  logout: () => Promise<void>;
  checkAuth: (cookie: RequestCookie) => Promise<boolean>;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useAuth = create<AuthState>()(persist((set) => ({
  isAuth: false,
  user: null,
  isLoading: true,
  error: null,

  login: async (credentials) => {
    return false;
  },

  logout: async () => {
    return;
  },

  checkAuth: async (cookie) => {
    return false;
  },

  setLoading: (loading) => {
    return;
  },

  setError: (error) => {
    return;
  }
}), {
  name: 'auth',
  storage: createJSONStorage(() => localStorage),
  partialize: (store) => ({ user: store.user, isAuthenticated: store.isAuth })
}));