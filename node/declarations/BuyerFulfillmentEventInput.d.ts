


export type BuyerFulfillmentEventInput = { /** RFC3339 timestamp. Format: date-time. */ "created_at": string | globalThis.Date; "current_status"?: never; "event_type": "status_changed" | "shipped" | "in_transit" | "out_for_delivery" | "delivered" | "delivery_attempted" | "tracking_updated" | "exception" | "returned" | "custom"; "fulfillment_event_id": string; "fulfillment_id": string; "location_description"?: string; /** RFC3339 timestamp. Format: date-time. */ "occurred_at": string | globalThis.Date; "order_id": string; "package_id"?: string; "previous_status"?: never; "shipment_id"?: string; };
