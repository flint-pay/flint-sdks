


export type PaymentLinkCustomFieldRequestInput = { "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea"; "key": string; "label": string; /** Format: int32. */ "max_length"?: number; "options"?: Array<string>; "placeholder"?: string; /** Format: int32. */ "position"?: number; "required"?: boolean; };
