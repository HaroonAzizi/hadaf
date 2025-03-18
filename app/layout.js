import "./globals.css";

export const metadata = {
  title: 'Hadaf - Revolutionizing Education for Afghans',
  description: 'Hadaf is revolutionizing education for Afghans with innovative learning solutions.',
  icons: {
    icon: '/vercel.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
