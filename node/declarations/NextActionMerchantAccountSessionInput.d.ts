


export type NextActionMerchantAccountSessionInput = { /** Recommended verification collection breadth. */ "collection_strategy"?: "upfront" | "incremental"; /** Resolver-recommended component to send to POST /v1/merchant-account-sessions. */ "component": "account_onboarding" | "account_management" | "payouts" | "balances" | "tax_documents" | "notification_banner"; /** Recommended future-requirement collection behavior. */ "future_requirements"?: "omit" | "include"; };
