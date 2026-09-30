


export type PackageItemInput = { /** Creation timestamp. Format: date-time. */ "created_at"?: never; "fulfillment_id"?: never; "metadata"?: Record<string, string>; "order"?: never; "order_id"?: never; "order_line_item_id": string; "package_id"?: never; "package_item_id"?: never; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity": string; "shipment_id"?: never; /** Last update timestamp. Format: date-time. */ "updated_at"?: never; };
