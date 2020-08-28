import {Deserializable} from "./deserializable.model";

export class Ticket implements Deserializable {
    date: Date;
    client: String;
    type: Boolean;
    value: Number;
    status: Boolean;
    category: String;
    description: String;
    account: String;
    
  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}