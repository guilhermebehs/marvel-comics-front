





interface IDateComic{
    type: string,
    price: number
}

interface IPriceComic{
    type: string,
    price: number
}

interface ImageComic{
    path: string,
    extension: string
}

interface IUrlDetails{ 
    "type": string,
    "url": string,
}

export interface IComic{
    id: number,
    title: string,
    description: string,
    dates: Array<IDateComic>,
    prices: Array<IPriceComic>,
    images: Array<ImageComic>,
    urls: Array<IUrlDetails>,
}