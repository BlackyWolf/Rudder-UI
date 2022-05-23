import { Home } from '@/pages';
import { Route, Routes } from 'react-router-dom';
import { appRoutes } from './routes';


export const AppRoutes = () => {
    return (
        <Routes>
            {appRoutes.map(({ element, path }) => (
                <Route path={path} element={element} />
            ))}
        </Routes>
    );
}
