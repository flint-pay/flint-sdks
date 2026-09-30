


export type PaymentLinkCustomFieldRequest = { "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea" | (string & {}); "key": string; "label": string; /** Format: int32. */ "max_length"?: number; "options"?: Array<string>; "placeholder"?: string; /** Format: int32. */ "position"?: number; "required"?: boolean; };
