import {AddressInterface} from "./address.interface";

export interface UserInterface {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressInterface;
    geo: {
      lat: string,
      lng: string
    }
  }



