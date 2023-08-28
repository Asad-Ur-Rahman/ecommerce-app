import CartComp from "@/components/views/CartParent/cartChild"
import ContextWrapper from "@/global/context"

async function fatchAllStoreProducts() {
  let res = await fetch(`https://wdxu2yyw.api.sanity.io/v2023-08-10/data/query/production?query=*%5B_type+%3D%3D+%27products%27%5D`, {
    cache: "no-store",
  })
  return res.json();
};

const Cart = async () => {
  let allProductsOfStore = await fatchAllStoreProducts();
  return (
    <ContextWrapper>
      <CartComp allProductsOfStore={allProductsOfStore.result} />
    </ContextWrapper>
  )
}

export default Cart