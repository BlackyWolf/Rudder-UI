import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHouse } from '@fortawesome/pro-duotone-svg-icons';
import { ReactElement } from 'react';

import {
    Home
} from '../pages';

interface AppRoute {
    element: ReactElement;
    path: string;
}

interface NavLink {
    icon: IconDefinition;
    name: string;
    to: string;
}

export const appRoutes: AppRoute[] = [
    { path: '/', element: <Home /> }
];

export const navigation: NavLink[] = [
    { icon: faHouse, name: 'Home', to: '/' }
];
