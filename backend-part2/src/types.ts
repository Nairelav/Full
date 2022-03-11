export interface Vehicule {
  id?: string;
  immatriculationPlate: string;
  fleets: string;
}

export interface Fleet {
  id?: string;
  name: string;
  coordinate: string;
  userId: string;
}

export interface User {
  id?: string;
  name: string;
}

export interface Response {
  status: boolean;
  message: string;
}
