export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <main className="min-h-screen flex flex-col items-center justify-center py-20">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-blue-600">Kiddah Ladies</span>
        </h1>
        <p className="mt-3 text-2xl">
          This is i intent to create something that will help people adn save
          teh world
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
        Powered by Yours Truly
      </footer>
    </div>
  );
}
