export interface ILeague{
  _id: string
  name: string
  createdAt: string
  updatedAt: string
  __v: number
}


export interface IMatch{
  _id: string
  title: string
  league: string
  date: number
  createdAt: string
  updatedAt: string
}



export interface ISportBlog{
  images: string[];
  title: string;
  desc: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}
