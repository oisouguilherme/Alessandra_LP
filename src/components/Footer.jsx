export function Footer() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-[#5E0583]">
      <div className="text-center text-white max-w-6xl mx-auto pb-2">
        <h2 className="text-xl sm:text-2xl font-black pt-4">
          ALESSANDRA <br /> PALMA
        </h2>
        <div className="flex flex-wrap justify-center sm:justify-between text-sm px-4 gap-2">
          <p>Todos os direitos reservados © 2023</p>
          <a
            href="https://guilherme-portfolio-frontend.netlify.app/"
            target="_blank"
            className="flex items-center gap-2 text-xs"
          >
            Desenvolvido por DevMilitão
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-code-slash"
              viewBox="0 0 16 16"
            >
              <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
