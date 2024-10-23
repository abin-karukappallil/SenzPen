import Image from 'next/image'
//import { button } from "@/components/ui/button"

const products = [
  {
    name: "AirPods 4",
    title: "Iconic. Now supersonic.",
    description: "Available with Active Noise Cancellation.²",
    image: "/placeholder.svg?height=600&width=800",
    background: "bg-gradient-to-br from-blue-300 to-purple-300",
    textColor: "text-black",
  },
  {
    name: "AirPods Pro 2",
    title: "Hearing Aid and Hearing Test features coming",
    description: "with a free software update this fall.*",
    image: "/placeholder.svg?height=600&width=800",
    background: "bg-black",
    textColor: "text-white",
  },
  {
    name: "iPad mini",
    title: "Hello, Apple Intelligence.",
    description: "Available starting 10.23",
    image: "/placeholder.svg?height=600&width=800",
    background: "bg-white",
    textColor: "text-black",
  },
  {
    name: "WATCH ULTRA 2",
    title: "New finish. Never quit.",
    description: "",
    image: "/placeholder.svg?height=600&width=800",
    background: "bg-black",
    textColor: "text-white",
  },
]

export default function Card() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {products.map((product, index) => (
        <div key={index} className={`${product.background} ${product.textColor} p-6 rounded-2xl flex flex-col justify-between min-h-[400px]`}>
          <div>
            <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
            <p className="text-xl mb-2">{product.title}</p>
            <p className="text-sm mb-4">{product.description}</p>
          </div>
          <div className="relative flex-grow">
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <div className="flex space-x-4 mt-4">
            <button  className="bg-blue-600 hover:bg-blue-700 text-white">
              Learn more
            </button>
            <button className="border-current hover:bg-white/10">
              {product.name === "iPad mini" ? "Pre-order" : "Buy"}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}