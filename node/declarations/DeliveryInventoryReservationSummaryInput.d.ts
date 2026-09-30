


export type DeliveryInventoryReservationSummaryInput = { /** RFC3339 timestamp. Format: date-time. */ "expires_at": string | globalThis.Date; "inventory_reservation_id": string; "owner_type": "delivery_selection" | "payment_attempt" | "order_balance_hold"; "required_next_action"?: "none" | "retry_payment" | "replace_selection" | "contact_merchant"; "status": "active" | "closed"; };
