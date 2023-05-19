export default function Footer() {
  return (
    <footer className="container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        Desenvolvido por{" "}
        <a
          className="font-medium"
          href="https://pavanmg.in"
          target="_blank"
          rel="noreferrer noopener"
        >
          Leonardo <span className="text-gradient font-medium">{'"Funa"'}</span> Funabashi
        </a>{" "}
      </p>
    </footer>
  );
}
