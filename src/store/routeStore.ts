// store/routeStore.ts
import { create } from 'zustand';

type Route = 'main' | 'pageOne' | 'pageTwo';

interface RouteState {
  currentPage: Route;
  setPage: (page: Route) => void;
}

export const useRouteStore = create<RouteState>((set) => ({ 
  currentPage: 'main',
  setPage: (page) => set({ currentPage: page }),
}));
