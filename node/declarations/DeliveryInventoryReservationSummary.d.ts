


export type DeliveryInventoryReservationSummary = { /** RFC3339 timestamp. Format: date-time. */ "expires_at": string; "inventory_reservation_id": string; "owner_type": "delivery_selection" | "payment_attempt" | "order_balance_hold" | (string & {}); "required_next_action"?: "none" | "retry_payment" | "replace_selection" | "contact_merchant" | (string & {}); "status": "active" | "closed" | (string & {}); };
