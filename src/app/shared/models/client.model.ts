import {Deserializable} from "./deserializable.model";

export class Client implements Deserializable {
  type: Boolean;
  nickname: String;
  name: String;
  cnpj: Number;
  cpf: Number;
  rg: Number;
  date_of_birthy: Date;
  phone_number: Number;
  email: String;
  website: String;
  instagram: String;
  reference: String;
  createdAt: Date  
    
  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}