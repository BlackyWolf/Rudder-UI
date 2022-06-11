import { PropsWithChildren } from 'react';
import { MainLayoutProvider } from './MainLayoutProvider';
import { TopNav } from './TopNav';

type Properties = PropsWithChildren<{

}>;

export const MainLayout = ({ children }: Properties) => {
    return (
        <MainLayoutProvider>
            <TopNav />

            <main className="flex p-8">
                <ul>

                </ul>

                {children}
            </main>
        </MainLayoutProvider>
    );
}
