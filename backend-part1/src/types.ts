export interface Vehicule {
  id?: string;
  name: string;
  type: string;
  price: number;
  fleets: Array<string>;
}

export interface Fleet {
  id?: string;
  name: string;
}

export interface Type {
  id?: string;
  name: string;
}