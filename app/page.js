export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-end bg-cover bg-center bg-bg-main" style={{backgroundImage: 'url("your-background-image.jpg")'}}>
      <div className="flex justify-center pb-10">
        <button className="bg-white hover:bg-gray-100 transition-colors py-3 px-24 rounded-lg shadow-lg focus:outline-none focus:shadow-outline">Get Started</button>
      </div>
    </main>
  );
}
