


export type InvoicePaymentTermCalculation = ({ /** Format: int32. */ "day"?: number; /** Format: int32. */ "days"?: number; "type": "on_receipt" | "net_days" | "day_of_month" | "day_of_next_month" | "days_after_month_end" | (string & {}); }) & ((({ "type": "on_receipt"; })) | (({ "type": "net_days"; "days": unknown; })) | (({ "type": "days_after_month_end"; "days": unknown; })) | (({ "type": "day_of_month"; "day": unknown; })) | (({ "type": "day_of_next_month"; "day": unknown; })) | (object));
