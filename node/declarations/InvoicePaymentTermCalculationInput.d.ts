


export type InvoicePaymentTermCalculationInput = ({ /** Format: int32. */ "day"?: number; /** Format: int32. */ "days"?: number; "type": "on_receipt" | "net_days" | "day_of_month" | "day_of_next_month" | "days_after_month_end"; }) & ((({ "type": "on_receipt"; }) & (({ "days"?: never }) & ({ "day"?: never }))) | (({ "type": "net_days"; "days": unknown; }) & ({ "day"?: never })) | (({ "type": "days_after_month_end"; "days": unknown; }) & ({ "day"?: never })) | (({ "type": "day_of_month"; "day": unknown; }) & ({ "days"?: never })) | (({ "type": "day_of_next_month"; "day": unknown; }) & ({ "days"?: never })));
