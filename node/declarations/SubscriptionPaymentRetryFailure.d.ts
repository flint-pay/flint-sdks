


export type SubscriptionPaymentRetryFailure = { "code": "card_declined" | "insufficient_funds" | "bank_account_closed" | "bank_account_not_found" | "bank_debit_not_authorized" | "bank_account_restricted" | "bank_debit_limit_exceeded" | "authentication_required" | "payment_blocked" | "expired_card" | "incorrect_cvc" | "processing_error" | "payment_method_unavailable" | "payment_method_declined" | "payment_not_completed" | "payment_action_expired" | "payment_method_temporarily_unavailable" | "payment_failed" | (string & {}); "message": string; };
