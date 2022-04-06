export interface IDestination {
  id: number;
  title: string;
  img: string;
  description: string;
  distance: string;
  time: string;
}

export interface ICrew {
  id: number,
  full_name: string,
  job_title: string,
  history: string,
  img: string,
}

export interface ITech {
  id: number;
  imgDesktop: string,
  imgMobile: string,
  heading:string;
  body:string;
}
