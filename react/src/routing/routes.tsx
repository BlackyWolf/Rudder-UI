import { ReactNode } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHouse } from '@fortawesome/pro-duotone-svg-icons';
import { Home } from '@/pages';

export interface AppRoute {
    element: ReactNode;
    path: string;
}

export interface NavLink {
    icon: IconDefinition;
    name: string;
    to: string;
}

export const appRoutes: AppRoute[] = [
    { path: '/', element: <Home /> }
];

export const navigation: NavLink[] = [
    { to: '/', name: 'Home', icon: faHouse }
];

export const userMenu: NavLink[] = [
    { to: '/user/settings', name: 'Settings', icon: faHouse }
];
