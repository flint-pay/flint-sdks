


export type NextActionMerchantAccountSession = { /** Recommended verification collection breadth. */ "collection_strategy"?: "upfront" | "incremental" | (string & {}); /** Resolver-recommended component to send to POST /v1/merchant-account-sessions. */ "component": "account_onboarding" | "account_management" | "payouts" | "balances" | "tax_documents" | "notification_banner" | (string & {}); /** Recommended future-requirement collection behavior. */ "future_requirements"?: "omit" | "include" | (string & {}); };
