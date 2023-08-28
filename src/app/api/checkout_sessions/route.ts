import Stripe from "stripe"
import { NextRequest, NextResponse } from "next/server";
import { oneProductType } from "@/components/utils/ProductsDataArrayAndType";


interface typeOfData {
    price: string,
    name: string,
    quantity: number,
}

let orignalData: Array<typeOfData> = [
    {
        price: 'price_1Njqh5BZuL0xE5ZFXLdG20Ta',
        name: 'Cameryn Sash Tie Dress',
        quantity: 1,
    },
    {
        price: 'price_1NjqilBZuL0xE5ZFL0qjZzC6',
        name: 'Raglan Sweatshirt',
        quantity: 1,
    },
    {
        price: 'price_1NjqkeBZuL0xE5ZFWoZLDSDQ',
        name: 'Pink Fleece Sweatpants',
        quantity: 1,
    },
    {
        price: 'price_1NjqljBZuL0xE5ZFoDqRW9mW',
        name: 'Imperial Alpaca Hoodie',
        quantity: 1,
    },
    {
        price: 'price_1NjqfZBZuL0xE5ZF7CLM5a7s',
        name: 'Muscle Tank',
        quantity: 1,
    },
    {
        price: 'price_1NjqnCBZuL0xE5ZFIhhcz0IW',
        name: 'Flex Sweatpants',
        quantity: 1,
    },
    {
        price: 'price_1NjqoABZuL0xE5ZFfRPJm5eA',
        name: 'Brushed Raglan Sweatshirt',
        quantity: 1,
    },
    {
        price: 'price_1Njqp0BZuL0xE5ZFcvZTD50H',
        name: 'Flex Push Button Bomber',
        quantity: 1,
    },
    {
        price: 'price_1NjqpwBZuL0xE5ZFMb3p4Q3k',
        name: 'Flex Sweatshirt',
        quantity: 1,
    },
    {
        price: 'price_1NjqqkBZuL0xE5ZFWn7ujuoI',
        name: 'Lite Sweatpants',
        quantity: 1,
    },
    {
        price: 'price_1NjqreBZuL0xE5ZFTOboN4kP',
        name: 'Brushed Bomber',
        quantity: 1,
    }
]

// @ts-ignore
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
    let cartItemsArray = await req.json();

    try {
        let line_item = orignalData.filter((item: typeOfData) => {
            for (let index = 0; index < cartItemsArray.length; index++) {
                const element: oneProductType = cartItemsArray[index];
                if (element.productName === item.name) {
                    return true
                }
            }
        })
        let line_itemToSend: any = line_item.map((item: typeOfData) => {
            for (let index = 0; index < cartItemsArray.length; index++) {
                const element: oneProductType = cartItemsArray[index];
                if (element.productName === item.name) {
                    return {
                        price: item.price,
                        quantity: element.quantity
                    }
                }
            }
        })

        let session = await stripe.checkout.sessions.create({
            line_items: line_itemToSend,
            mode: "payment",
            success_url: `${req.nextUrl.origin}/?success=true`,
            cancel_url: `${req.nextUrl.origin}/?success=false`
        })
        return NextResponse.json({ link: session.url });
    } catch (error) {
        console.log((error as { message: string }).message)
        return NextResponse.json({ error })
    }

}