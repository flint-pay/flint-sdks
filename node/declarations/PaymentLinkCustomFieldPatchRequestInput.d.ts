


export type PaymentLinkCustomFieldPatchRequestInput = { "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea"; "key": string; "label": string; /** Format: int32. */ "max_length"?: number; "options"?: Array<string>; /** Stable ID of an existing custom field. Omit it to create a new custom field. */ "payment_link_custom_field_id"?: string; "placeholder"?: string; /** Format: int32. */ "position"?: number; "required"?: boolean; };
