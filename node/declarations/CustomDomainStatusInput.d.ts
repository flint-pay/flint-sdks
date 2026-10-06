


export type CustomDomainStatusInput = { /** Payment attempts in progress whose hosted checkout started on this hostname. Present for checkout domains. Use an exact numeric string, not a floating-point number. Format: int64. */ "active_payment_attempt_count"?: never; "dns_records"?: never; "domain_status"?: never; "hostname"?: never; /** RFC3339 timestamp. Format: date-time. */ "last_checked_at"?: never; "payment_method_domain_id"?: never; /** End of the 30 day redirect window for a removed hostname. Format: date-time. */ "redirect_expires_at"?: never; "status_reason"?: never; };
