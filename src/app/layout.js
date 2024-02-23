import "./globals.css";

export const metadata = {
  title: "Projeto Gaku",
  description: "Projeto de repetição espaçada utilizando flashcards",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
