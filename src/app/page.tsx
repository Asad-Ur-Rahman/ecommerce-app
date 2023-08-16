import Hero from "@/components/views/Hero";
import ProductsTypes from "@/components/views/ProductTypes";

async function fetchAllProductsData() {
  let res = await fetch("/api/products");

  if (!res.ok) {
    throw new Error("Failed to fetch")
  }

  return res.json();
}


export default async function Home() {
  let response = await fetchAllProductsData();
  console.log("response :", response)
  return (
    <div>
      <Hero />
      <ProductsTypes />
    </div>
  )
}
