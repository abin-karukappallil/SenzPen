import Image from 'next/image';
import { Search, ShoppingBag } from 'lucide-react';

const products = [
  {
    name: "Powered by LLM",
    title: "Faster and Accurate",
    description: "Text-to-Speech (TTS) & Audio Books:The tablet converts written text into speech. This is useful for content that isn’t available in Braille, allowing users to listen to textbooks, web content, and emails. Users can also download and listen to audiobooks.",
    image: "/placeholder.svg?height=600&width=800",
    background: "bg-gradient-to-br from-blue-300 to-purple-300",
    textColor: "text-black",
  },
  {
    name: "Using VLM",
    title: "Clear and Real",
    description: "Image Recognition, Integrates with a camera to capture images of diagrams or text, using a Vision-Language Model (VLM) to describe visual content and provide contextual explanations through the LLM",
    image: "/placeholder.svg?height=600&width=800",
    background: "bg-black",
    textColor: "text-white",
  },
  {
    name: "Using Voice Assistent",
    title: "Includes voice-activated commands and haptic feedback, ensuring that visually impaired students can navigate the device easily and interact with educational content effectively.",
    description: "Available starting 10.23",
    image: "/placeholder.svg?height=600&width=800",
    background: "bg-white",
    textColor: "text-black",
  },
  {
    name:"Productive",
    title: "High battery life provided. Low latency and highly accurate sensor and its data",
    description: "",
    image: "/placeholder.svg?height=600&width=800",
    background: "bg-black",
    textColor: "text-white",
  },
  {
    name: "Cost efficiency",
    title: "Everyone needs to be happy..So we designed it with a very cost efficent method.",
    description: "",
    image: "/placeholder.svg?height=600&width=800",
    background: "bg-black",
    textColor: "text-white",
  },
];

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <header className="bg-[#1d1d1f] py-3 px-4 md:px-8">
          <nav className="flex items-center justify-between max-w-7xl mx-auto">
            {/* <Image src="/th.png" alt="Apple Logo" width={20} height={20} /> */}
            <ul className="hidden md:flex space-x-6 text-sm">
              {['Home', 'Coming soon'].map((item) => (
                <li key={item} className="hover:text-gray-300 cursor-pointer">{item}</li>
              ))}
            </ul>
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5" />
              <ShoppingBag className="w-5 h-5" />
            </div>
          </nav>
        </header>

        <main className="flex flex-col items-center justify-center text-center px-4 py-16 md:py-32">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">SenzPen</h1>
          <h2 className="text-2xl md:text-4xl mb-8">New! Hey SenzPen.</h2>
          <div className="relative w-full max-w-3xl aspect-[3/2] mb-8">
            <Image
              src="/th.png"
              alt="Senzpen"
              width={500}
              height={500}
              objectFit="contain"
              className="z-10 pl-12 ml-28"
            />
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <span className="text-8xl md:text-9xl font-bold text-[#8e8e8e] opacity-50">SenzPen</span>
            </div>
          </div>
          <div className="flex space-x-4 mb-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
              Learn more
            </button>
            <button className="text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full">
              Buy
            </button>
          </div>
          <p className="text-gray-500">Apple Intelligence coming this fall*</p>
        </main>
      </div>

      <section className="px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product, index) => (
            <div key={index} className={`${product.background} ${product.textColor} p-6 rounded-2xl flex flex-col justify-between min-h-[400px]`}>
              <div>
                <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
                <p className="text-xl mb-2">{product.title}</p>
                <p className="text-sm mb-4">{product.description}</p>
              </div>
              <div className="relative h-56 w-full mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={800}
                  height={600}
                  className="rounded-xl object-cover"
                />
              </div>
              <div className="flex space-x-4 mt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">
                  Learn more
                </button>
                <button className="border border-current hover:bg-white/10 px-6 py-2 rounded-full">
                  {product.name === "iPad mini" ? "Pre-order" : "Buy"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
