export const metadata = {
  title: "Panier Perdu",
  description: "Récupère les paniers abandonnés de ta boutique.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
