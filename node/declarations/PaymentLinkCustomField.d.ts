


export type PaymentLinkCustomField = { "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea" | (string & {}); "key": string; "label": string; /** Format: int32. */ "max_length"?: number; "options"?: Array<string>; "payment_link_custom_field_id": string; "placeholder"?: string; /** Format: int32. */ "position"?: number; "required"?: boolean; };
