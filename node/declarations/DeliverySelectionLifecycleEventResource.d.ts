


export type DeliverySelectionLifecycleEventResource = { /** RFC3339 timestamp. Format: date-time. */ "created_at": string; "delivery_selection_id": string; "delivery_selection_lifecycle_event_id": string; "reason": "replacement_selected" | "buyer_selected" | "payment_started" | "payment_failed_selection_restored" | "payment_settled" | "payment_failed_selection_expired" | "calculation_expired" | "selection_expired" | "selection_not_current" | "dependency_revoked" | "buyer_cleared" | "eligibility_context_refreshed" | "checkout_replaced" | "checkout_terminal" | "order_mutated" | "quote_basis_changed" | "calculation_changed" | (string & {}); "status": "selected" | "locked_for_payment" | "committed" | "superseded" | "expired" | "released" | (string & {}); };
