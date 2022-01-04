export interface ApiBeer {
    id: number
    name: string
    tagline: string
    description: string
    image_url: string | null
    food_pairing?: string[]
    ingredients: Ingredients
}
interface Ingredients {
    malt: Malt[]
    hops: Hops[]
    yeast: string
}

interface Malt {
    name: string
    amount: Amount
}

interface Hops extends Malt {
    add: Step
    attribute: Attribute
}

export interface Amount {
    value: number
    unit: Unit
}

type Unit = "kilograms" | "celsius" | "grams" | "litres" | string
type Step = "start" | "middle" | "end" | string
type Attribute = "flavour" | "bitter" | string