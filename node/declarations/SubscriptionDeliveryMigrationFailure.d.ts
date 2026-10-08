


export type SubscriptionDeliveryMigrationFailure = { "message": string; "reason": "method_not_offered" | "destination_not_served" | "rate_unavailable" | "method_unavailable" | "no_longer_applicable" | "not_movable" | (string & {}); "subscription_id": string; };
