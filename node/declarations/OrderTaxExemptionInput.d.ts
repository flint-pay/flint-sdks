


export type OrderTaxExemptionInput = { "customer_id"?: string; /** The source of the tax exemption assessment. Omitted when the source has not been established. */ "source"?: "none" | "customer"; "tax_exempt": boolean; };
