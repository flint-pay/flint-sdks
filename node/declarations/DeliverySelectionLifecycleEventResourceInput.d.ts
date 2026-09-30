


export type DeliverySelectionLifecycleEventResourceInput = { /** RFC3339 timestamp. Format: date-time. */ "created_at": string | globalThis.Date; "delivery_selection_id": string; "delivery_selection_lifecycle_event_id": string; "reason": string; "status": "selected" | "locked_for_payment" | "committed" | "superseded" | "expired" | "released"; };
