import type { Metadata } from "next";
import { Poppins } from "next/font/google"; 
import "./globals.css";
import GradientMeshBackground from "@/components/GradientMeshBackground"; 

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Nivela | Avaliação de Proficiência",
  description: "Teste de nivelamento interativo com uma experiência moderna.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      {/* O body agora só precisa da classe da Poppins */}
      <body className={`${poppins.className} antialiased bg-transparent text-white`}>
        <GradientMeshBackground />
        {children}
      </body>
    </html>
  );
}