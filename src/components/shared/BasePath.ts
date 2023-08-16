const BASE_PATH_FORAPI = process.env.NODE_ENV === "development" ?
    "http://localhost:3000"
    : "https://ecommerce-hackathon-ar.vercel.app"

export default BASE_PATH_FORAPI
