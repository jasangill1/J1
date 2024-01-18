export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <main className="min-h-screen flex flex-col items-center justify-center py-20">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-blue-600">Kiddah Ladies</span>
        </h1>
        <p className="mt-3 text-2xl">
          This is i intent to create something that will help people adn save
          teh world to imporve adn make better to the youth
        </p>
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="shadow-lg rounded-lg overflow-hidden">
              <div className="p-4">
                <h2 className="text-2xl font-bold">Jay</h2>
                <p className="mt-2">Project J</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <div>
          <a
            href="https://www.linkedin.com/in/your-linkedin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="linkedin-icon.png" alt="LinkedIn" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="twitter-icon.png" alt="Twitter" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="github-icon.png" alt="GitHub" />
          </a>
        </div>
        <p>
          Powered by Yours Truly Jay Babi 12 n all is well n along with the lies
          comes from there thighs 3
        </p>
      </footer>
    </div>
  );
}
