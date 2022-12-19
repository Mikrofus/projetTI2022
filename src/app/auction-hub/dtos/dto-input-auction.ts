export interface DtoInputAuction {
  id: number;
  id_user: number;
  title: string;
  category: string;
  descri: string;
  img: string;
  price: number;
  idUserBid : number;
  timer: Date;
}
