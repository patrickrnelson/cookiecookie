export type Cookie = {
  _id: any;
  name: string;
  description: string;
  image: string;
  contains: {
    egg: boolean;
    milk: boolean;
    peanut: boolean;
    soy: boolean;
    treenut: boolean;
    wheat: boolean;
  }
  calories: {
    perServing: number;
    perCookie: number;
  }
}