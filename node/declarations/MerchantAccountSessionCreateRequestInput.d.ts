


/** Creates an embedded account session for a non-empty unique set of Flint components. At most one component may use onboarding policy fields. */ export type MerchantAccountSessionCreateRequestInput = { "collection_strategy"?: "upfront" | "incremental"; /** minItems: 1. maxItems: 6. */ "components": Array<"account_onboarding" | "account_management" | "payouts" | "balances" | "tax_documents" | "notification_banner">; "future_requirements"?: "omit" | "include"; "sandbox_id"?: string; "targeted_requirement_ids"?: Array<string>; };
