


export type CheckoutDeliveryPinnedDependency = { "delivery_dependency_id": string; "delivery_dependency_role": "assigned_method" | "eligibility" | "method_origin" | "pickup_collection" | "pricing_callback" | "evaluation" | "origin" | (string & {}); "delivery_dependency_type": "delivery_method" | "delivery_zone" | "delivery_location_set_revision" | "delivery_rate_callback" | "location_geography" | "evaluation_schema" | "other" | (string & {}); /** Use an exact numeric string, not a floating-point number. Format: int64. */ "geography_revision"?: string; "revision_id"?: string; };
