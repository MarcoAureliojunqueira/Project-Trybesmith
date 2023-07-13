export type OrderId = {
  id: number;

};

export type Order = {
  id: number;
  userId: number;
  productIds?: OrderId[];
};

export type OrderTiparRetorno = {
  id: number;
  userId: number;
  productIds?: number[];
};
