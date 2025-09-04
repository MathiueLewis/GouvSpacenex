// app/layout.tsx ou app/_app.tsx selon ton projet
import { FronteggBaseProvider } from '@frontegg/nextjs';
import './globals.css';

const contextOptions = {
  baseUrl: 'https://app-cu96hhoyvz1e.frontegg.com',
  clientId: 'da6907d6-849b-4ed8-8a94-370f432d4918',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <FronteggBaseProvider contextOptions={contextOptions} router={undefined} envAppUrl={''} envBaseUrl={''} envClientId={''}>
      {children}
    </FronteggBaseProvider>
  );
}
