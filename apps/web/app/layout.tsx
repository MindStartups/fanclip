import './global.css';
import ThemeRegistry from './registry';
import { Roboto } from 'next/font/google';

export const metadata = {
  title: 'FanClip',
  description: 'FanClip',
};

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={roboto.className}>
      <body>
        <ThemeRegistry options={{ key: 'mui' }}>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
