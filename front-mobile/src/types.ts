
  export type Order =  {
        id: number;
        address: string;
        latitude: number;
        longitude: number;
        moment: string;
        status: string;
        total: number;
        products: Produtc[];
        
    }

    export type Produtc = {
          id:number;
          name:string;
          price:number;
          description:string;
          imageUri:string;

    }
  
   