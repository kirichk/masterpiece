import Link from "next/link";
import Image from "next/image";

const Navigation = ({ locale, locales, defaultLocale }) => {
  const resolveHome = {
    en: "Home",
    ru: "Главная",
  };
  const resolveAbout = {
    en: "About",
    ru: "О проекте",
  };
  const resolveBlog = {
    en: "Blog",
    ru: "Блог",
  };

  const defaultRoot = locale === defaultLocale ? "/" : `/${locale}/`;
  return (
    <header className="w-full bg-white">
      <nav className="" role="navigation">
        <div className="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">
          <div className="mr-4 md:mr-8">
            <Link href="/">
              <a>
                <Image
                  src="/logo.png"
                  alt="My cat"
                  width={100}
                  height={80}
                />
              </a>
            </Link>
          </div>
          <div className="text-black">
            <p className="text-lg">The Storyblok Herald</p>
          </div>
          <div className="ml-auto md:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded"
              type="button"
            >
              <svg
                className="h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="w-full md:w-auto md:flex-grow md:flex md:items-center">
            <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 md:ml-auto lg:mr-8 md:border-0">
              <li>
                <Link href={`${defaultRoot}`}>
                  <a className="block px-4 py-1 md:p-2 lg:px-8">
                    {resolveHome[locale]}
                  </a>
                </Link>
              </li>
              <li>
                <Link href={`${defaultRoot}blog`}>
                  <a className="block px-4 py-1 md:p-2 lg:px-8">
                    {resolveBlog[locale]}
                  </a>
                </Link>
              </li>
              <li>
                <Link href={`${defaultRoot}about`}>
                  <a className="block px-4 py-1 md:p-2 lg:px-8">
                    {resolveAbout[locale]}
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:border-0">
              {locales.map((loc) => {
                return (
                  <li key={loc}>
                    <Link
                      href={`/${loc === defaultLocale ? "" : loc}`}
                      locale={false}
                    >
                      <a
                        className={`block px-4 py-1 md:p-2 rounded-lg lg:px-4 ${
                          locale === loc ? "bg-black text-white" : ""
                        }`}
                      >
                        {loc}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
