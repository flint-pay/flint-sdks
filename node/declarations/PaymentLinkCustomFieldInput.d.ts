


export type PaymentLinkCustomFieldInput = { "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea"; "key": string; "label": string; /** Format: int32. */ "max_length"?: number; "options"?: Array<string>; "payment_link_custom_field_id"?: never; "placeholder"?: string; /** Format: int32. */ "position"?: number; "required"?: boolean; };
