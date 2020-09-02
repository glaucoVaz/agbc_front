import {Deserializable} from "./deserializable.model";
import * as moment from 'moment';

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

  get transactionDate() {
    return moment(this.date).format("DD/MM/yy");
  }

  get formatedType() {
    if (this.type) {
      return "Receita";
    }
    return "Despesa";
  }

  get formatedStatus() {
    if (this.status) {
      return "Pago";
    }
    return "Não Pago";
  }
}