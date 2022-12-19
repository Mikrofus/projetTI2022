export interface DtoOutputCreateAuction {
  id_user: number;
  title: string;
  category: string;
  descri: string;
  img: string;
  price: number;
  idUserBid : number;
  timer: Date ;
}
