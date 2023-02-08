import {Customer} from "../../Customer/model/customer";
import {Facility} from "../../Facility/model/facility";

export interface Contract {
  id?:number,
  customer?: Customer,
  facility?: Facility,
  starDay?: string,
  endDay?: string,
  deposit?: number,
}
