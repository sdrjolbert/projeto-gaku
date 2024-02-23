import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <header className={styles.header__area}>
        <div className={`${styles.header__container} ${styles.align__center}`}>
          <section className={styles.title__section}>
            <span className={styles.span__title}>GakuWeb</span>

            <div className={styles.logo__container}>
              <Image
                src="/inmetro.svg"
                width={32}
                height={32}
                alt="Logo do Inmetro"
                className={styles.logo__component}
              />
            </div>
          </section>

          <section className={styles.buttons__section}>
            <ul className={styles.buttons__list}>
              <li className={styles.login__button}>
                <a
                  className={styles.login__anchor}
                  target="_blank"
                  href="#"
                >
                  Log In
                </a>
              </li>

              <li className={styles.signup__button}>
                <a
                  className={styles.signup__anchor}
                  target="_blank"
                  href="#"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </section>
        </div>
      </header>

      <main className={`${styles.main__area} ${styles.align__center}`}>
        <p className={styles.main__description}>
          O Projeto Gaku é um projeto cujo objetivo é criar uma réplica acadêmica do Anki, uma aplicação usada
          para estudar utilizando o método da repetição espaçada com flash cards. O Gaku tem o mesmo objetivo!
          Ser uma aplicação para estudos de repetição espaçada utilizando flash cards e que tenha compatibilidade
          total com os decks do próprio Anki, tendo a possibilidade para importar e exportar decks do Anki para o
          Gaku e vice-versa, mantendo ainda suas estatísticas, como o quanto você revisou, a sua quantidade de
          tempo gasto no deck e todas as outras estatísticas tragas do Anki.
        </p>

        <p className={styles.main__disclaimer}>
          Infelizmente, no momento, o Gaku está disponível somente em português e na sua forma web, mas num
          futuro não muito distante pode ser que haja uma atualização para a criação de um app desktop e uma
          mudança de idioma, para, ao menos, o inglês.
        </p>
      </main>

      <footer className={styles.footer__area}>
        <div className={`${styles.footer__container} ${styles.align__center}`}>
          <span className={styles.span__footer}>Todos os direitos reservados ao <a
            className={styles.footer__anchor}
            target="_blank"
            href="https://www.gov.br/inmetro/pt-br"
          >
            Inmetro
          </a></span>
        </div>
      </footer>
    </div>
  );
}