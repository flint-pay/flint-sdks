


/** Creates an embedded account session for a non-empty unique set of Flint components. At most one component may use onboarding policy fields. */ export type MerchantAccountSessionCreateRequest = { "collection_strategy"?: "upfront" | "incremental" | (string & {}); /** minItems: 1. maxItems: 6. */ "components": Array<"account_onboarding" | "account_management" | "payouts" | "balances" | "tax_documents" | "notification_banner" | (string & {})>; "future_requirements"?: "omit" | "include" | (string & {}); "sandbox_id"?: string; "targeted_requirement_ids"?: Array<string>; };
