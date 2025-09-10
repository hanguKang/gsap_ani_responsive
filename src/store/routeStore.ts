// store/routeStore.ts
import { create } from 'zustand';

export type Route = 'main' | 'pageOne' | 'pageTwo';

interface RouteState {
  currentPage: Route;
  setPage: (page: Route) => void;
}



export const useRouteStore = create<RouteState>((set) => ({ 
  currentPage: 'main',
  setPage: (page) => set({ currentPage: page }),
}));
