
export interface ResponseBuildinProject {
    data: Data;
    status:string;
  }

  export interface Data {
    list: BuildinProject[];
  }
  
  export interface BuildinProject {
    _id: string
    name: string
    dateEnd: string
    dateStart: string
    unitValue: string
    items: Item[]
    imagesReference: ImagesReference[]
  }
  
  export interface Item {
    description: string
  }
  
  export interface ImagesReference {
    image: string
  }
  