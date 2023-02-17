import {Patient} from "./patient";

export interface Medical {
  id?: number,
  medicalCode?: string,
  hospitalizedDay?: string,
  hospitalDischargeDate?: string,
  reason?: string,
  treatments?: string,
  doctor?: string
  patient?: Patient
}
