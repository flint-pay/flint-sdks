import type { CreatePackageItemRequest, CreatePackageItemRequestInput, CreatePackageRequestInput } from './types-11.js';
import type { Dimensions, DimensionsRequestInput } from './types-23.js';
import type { MetadataMap, MetadataRequestInput, MerchantWebhookEnvelope } from './types-38.js';
import type { ReturnResolutionLineItemRequest, ReturnShipmentLineItemAllocationRequestInput } from './types-57.js';
import type {
    Weight,
    WeightRequestInput,
    WorkloadIdentityClaimCondition,
    WorkloadIdentityClaimConditionRequest,
    WorkloadIdentityClaimConditionRequestInput
} from './types-70.js';
import type { ExpandedOrderSummary } from './types-24.js';
import type {
    PartnerWebhookEnvelope,
    PartnerAppPermissionManifestEntry,
    PartnerAppPlatform,
    PartnerAppPlatformProfile,
    PartnerEnvironmentGrant
} from './types-44.js';
import type { ReturnHandoffRequirementLineItem } from './types-55.js';
import type { ResponseMeta } from './types-54.js';
import type { Package } from './types-42.js';
import type { InputValue } from '../runtime.js';
import type { FulfillmentEventsGetParams } from './types-25.js';
import type { MarkPackageDeliveredRequestInput } from './types-35.js';
import type {
    MarkPackageDeliveryAttemptedRequestInput,
    MarkPackageExceptionRequestInput,
    MarkPackageInTransitRequestInput,
    MarkPackageOutForDeliveryRequestInput,
    MarkPackagePackedRequestInput,
    MarkPackageReturnedRequestInput,
    MarkPackageShippedRequestInput
} from './types-36.js';
import type { UpdatePackageItemRequestInput, UpdatePackageRequestInput } from './types-67.js';
import type { VoidPackageRequestInput } from './types-69.js';
import type { PlatformFeeCap } from './types-49.js';
/**
 * Package to create inline with its enclosing shipment or fulfillment. Set status to created
 * before handoff, or shipped to report handoff during creation.
 */
export type PackageCreateInputCreated = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Carrier that handles the package. minLength: 1. */
    "carrier"?: string;
    /**
     * Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`.
     */
    "dimensions"?: Dimensions;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Independent package-item collection. Inline creation uses the child-create shape and commits
     * atomically; edit items through the package item routes after creation. Each order line and
     * bundle component pair may appear once. minItems: 1. maxItems: 100. [] (Value): {@link
     * CreatePackageItemRequest}. The request body for: Create package item.
     */
    "items"?: Array<CreatePackageItemRequest>;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Required for a package on a return shipment: allocates quantities from the shipment's
     * return_line_items to this parcel. Rejected on outbound shipments. [] (Value): {@link
     * ReturnResolutionLineItemRequest}. A Return line and the quantity to place in a return
     * shipment or package. The enclosing Return or shipment determines its parent.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "created".
     */
    "status": "created" | (string & {});
    /** minLength: 1. */
    "status_reason"?: string;
    /** Carrier tracking number for the package. minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "weight"?: Weight;
});
/**
 * Package to create inline with its enclosing shipment or fulfillment. Set status to created
 * before handoff, or shipped to report handoff during creation.
 */
export type PackageCreateInputCreatedInput = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Carrier that handles the package. minLength: 1. */
    "carrier"?: string;
    /**
     * Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`.
     */
    "dimensions"?: DimensionsRequestInput;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Independent package-item collection. Inline creation uses the child-create shape and commits
     * atomically; edit items through the package item routes after creation. Each order line and
     * bundle component pair may appear once. minItems: 1. maxItems: 100. [] (Value): {@link
     * CreatePackageItemRequestInput}. The request body for: Create package item.
     */
    "items"?: Array<CreatePackageItemRequestInput>;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Required for a package on a return shipment: allocates quantities from the shipment's
     * return_line_items to this parcel. Rejected on outbound shipments. [] (Value): {@link
     * ReturnShipmentLineItemAllocationRequestInput}. A Return line and the quantity to place in a
     * return shipment or package. The enclosing Return or shipment determines its parent.
     */
    "return_line_items"?: Array<ReturnShipmentLineItemAllocationRequestInput>;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string | globalThis.Date;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "created".
     */
    "status": "created";
    /** minLength: 1. */
    "status_reason"?: string;
    /** Carrier tracking number for the package. minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "weight"?: WeightRequestInput;
})
    & (({
    "shipped_at"?: never;
}))
    & (({
    "buyer_notification_behavior"?: never;
}));
/**
 * Package to create inline with its enclosing shipment or fulfillment. Set status to created
 * before handoff, or shipped to report handoff during creation.
 */
export type PackageCreateInputShipped = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Carrier that handles the package. minLength: 1. */
    "carrier"?: string;
    /**
     * Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`.
     */
    "dimensions"?: Dimensions;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Independent package-item collection. Inline creation uses the child-create shape and commits
     * atomically; edit items through the package item routes after creation. Each order line and
     * bundle component pair may appear once. minItems: 1. maxItems: 100. [] (Value): {@link
     * CreatePackageItemRequest}. The request body for: Create package item.
     */
    "items"?: Array<CreatePackageItemRequest>;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Required for a package on a return shipment: allocates quantities from the shipment's
     * return_line_items to this parcel. Rejected on outbound shipments. [] (Value): {@link
     * ReturnResolutionLineItemRequest}. A Return line and the quantity to place in a return
     * shipment or package. The enclosing Return or shipment determines its parent.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "shipped".
     */
    "status": "shipped" | (string & {});
    /** minLength: 1. */
    "status_reason"?: string;
    /** Carrier tracking number for the package. minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "weight"?: Weight;
});
/**
 * Package to create inline with its enclosing shipment or fulfillment. Set status to created
 * before handoff, or shipped to report handoff during creation.
 */
export type PackageCreateInputShippedInput = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Carrier that handles the package. minLength: 1. */
    "carrier"?: string;
    /**
     * Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`.
     */
    "dimensions"?: DimensionsRequestInput;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Independent package-item collection. Inline creation uses the child-create shape and commits
     * atomically; edit items through the package item routes after creation. Each order line and
     * bundle component pair may appear once. minItems: 1. maxItems: 100. [] (Value): {@link
     * CreatePackageItemRequestInput}. The request body for: Create package item.
     */
    "items"?: Array<CreatePackageItemRequestInput>;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Required for a package on a return shipment: allocates quantities from the shipment's
     * return_line_items to this parcel. Rejected on outbound shipments. [] (Value): {@link
     * ReturnShipmentLineItemAllocationRequestInput}. A Return line and the quantity to place in a
     * return shipment or package. The enclosing Return or shipment determines its parent.
     */
    "return_line_items"?: Array<ReturnShipmentLineItemAllocationRequestInput>;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string | globalThis.Date;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "shipped".
     */
    "status": "shipped";
    /** minLength: 1. */
    "status_reason"?: string;
    /** Carrier tracking number for the package. minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "weight"?: WeightRequestInput;
})
    & (({
    "return_line_items"?: never;
}));
/**
 * Package to create inline with its enclosing shipment or fulfillment. Set status to created
 * before handoff, or shipped to report handoff during creation.
 */
export type PackageCreateRequest = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Carrier that handles the package. minLength: 1. */
    "carrier"?: string;
    /**
     * Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`.
     */
    "dimensions"?: Dimensions;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Independent package-item collection. Inline creation uses the child-create shape and commits
     * atomically; edit items through the package item routes after creation. Each order line and
     * bundle component pair may appear once. minItems: 1. maxItems: 100. [] (Value): {@link
     * CreatePackageItemRequest}. The request body for: Create package item.
     */
    "items"?: Array<CreatePackageItemRequest>;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Required for a package on a return shipment: allocates quantities from the shipment's
     * return_line_items to this parcel. Rejected on outbound shipments. [] (Value): {@link
     * ReturnResolutionLineItemRequest}. A Return line and the quantity to place in a return
     * shipment or package. The enclosing Return or shipment determines its parent.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "created", "shipped".
     */
    "status": "created" | "shipped" | (string & {});
    /** Additional explanation of the package's starting status. minLength: 1. */
    "status_reason"?: string;
    /** Carrier tracking number for the package. minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "weight"?: Weight;
})
    & ((Exclude<PackageCreateInputCreated & object, readonly unknown[]>)
    | (Exclude<PackageCreateInputShipped & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Package to create inline with its enclosing shipment or fulfillment. Set status to created
 * before handoff, or shipped to report handoff during creation.
 */
export type PackageCreateRequestInput = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Carrier that handles the package. minLength: 1. */
    "carrier"?: string;
    /**
     * Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`.
     */
    "dimensions"?: DimensionsRequestInput;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Independent package-item collection. Inline creation uses the child-create shape and commits
     * atomically; edit items through the package item routes after creation. Each order line and
     * bundle component pair may appear once. minItems: 1. maxItems: 100. [] (Value): {@link
     * CreatePackageItemRequestInput}. The request body for: Create package item.
     */
    "items"?: Array<CreatePackageItemRequestInput>;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Required for a package on a return shipment: allocates quantities from the shipment's
     * return_line_items to this parcel. Rejected on outbound shipments. [] (Value): {@link
     * ReturnShipmentLineItemAllocationRequestInput}. A Return line and the quantity to place in a
     * return shipment or package. The enclosing Return or shipment determines its parent.
     */
    "return_line_items"?: Array<ReturnShipmentLineItemAllocationRequestInput>;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string | globalThis.Date;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "created", "shipped".
     */
    "status": "created" | "shipped";
    /** Additional explanation of the package's starting status. minLength: 1. */
    "status_reason"?: string;
    /** Carrier tracking number for the package. minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "weight"?: WeightRequestInput;
})
    & ((Exclude<PackageCreateInputCreatedInput & object, readonly unknown[]>)
    | (Exclude<PackageCreateInputShippedInput & object, readonly unknown[]>));
export type PackageCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "carrier"?: string;
            "created_at": string;
            "delivered_at"?: string;
            "dimensions"?: Dimensions;
            "expected_delivery_at"?: string | null;
            "external_reference_id"?: string;
            "external_system"?: string;
            "fulfillment_id": string;
            "label_url"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "package_id": string;
            "return_id"?: string;
            "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
            "service_code"?: string;
            "shipment_id": string;
            "shipped_at"?: string;
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            "status_reason"?: string;
            "supported_actions": Array<"mark_delivered"
                | "mark_delivery_attempted"
                | "mark_exception"
                | "mark_in_transit"
                | "mark_out_for_delivery"
                | "mark_packed"
                | "mark_returned"
                | "mark_shipped"
                | "void"
                | (string & {})>;
            "tracking_number"?: string;
            "tracking_url"?: string;
            "updated_at": string;
            "version": number;
            "weight"?: Weight;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "package.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "carrier"?: string;
            "created_at": string;
            "delivered_at"?: string;
            "dimensions"?: Dimensions;
            "expected_delivery_at"?: string | null;
            "external_reference_id"?: string;
            "external_system"?: string;
            "fulfillment_id": string;
            "label_url"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "package_id": string;
            "return_id"?: string;
            "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
            "service_code"?: string;
            "shipment_id": string;
            "shipped_at"?: string;
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            "status_reason"?: string;
            "supported_actions": Array<"mark_delivered"
                | "mark_delivery_attempted"
                | "mark_exception"
                | "mark_in_transit"
                | "mark_out_for_delivery"
                | "mark_packed"
                | "mark_returned"
                | "mark_shipped"
                | "void"
                | (string & {})>;
            "tracking_number"?: string;
            "tracking_url"?: string;
            "updated_at": string;
            "version": number;
            "weight"?: Weight;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "package.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "package.created";
});
/**
 * The `package.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type PackageCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.carrier (Optional): string. Carrier transporting the package.
     * object.created_at (Required): string. Creation timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.delivered_at (Optional): string. Package delivery timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.dimensions (Optional): {@link
     * Dimensions}. Physical length, width, and height of the package. Package or item dimensions
     * as `length`, `width`, and `height` in the given `unit`. object.expected_delivery_at
     * (Optional): string or null. When the carrier or merchant expects this package to arrive.
     * Null when no estimate is set. Retained after delivery as history. This estimate is separate
     * from the fulfillment's promised shipment window. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. Requires external_system. External
     * references are not unique. Use Idempotency-Key for retries. maxLength: 255. Example:
     * "warehouse-1842". object.external_system (Optional): string. Name of the external system
     * that external_reference_id belongs to. External references are not unique. Use
     * Idempotency-Key for retries. object.fulfillment_id (Required): string. Fulfillment whose
     * items are in the package. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.label_url
     * (Optional): string. HTTPS shipping-label URL supplied by your integration. Non-Flint URLs
     * require external_system for provenance. Flint does not host the label file. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified.
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned key-value metadata associated
     * with the package. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.order (Optional): {@link ExpandedOrderSummary} or null. Order summary returned when
     * the order relationship is expanded. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * are in the package. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.package_id (Required):
     * string. Stable identifier of the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R".
     * object.return_id (Optional): string. Return this package belongs to. Present only on
     * packages of return shipments. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_line_items (Optional): Array of {@link ReturnHandoffRequirementLineItem}.
     * Return line quantities allocated to this parcel. Present only on packages of return
     * shipments. object.return_line_items[] (Value): {@link ReturnHandoffRequirementLineItem}. A
     * return line and the quantity placed in a return shipment or package. object.service_code
     * (Optional): string. Carrier service used for the package. object.shipment_id (Required):
     * string. Shipment carrying this package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     * object.shipped_at (Optional): string. Package handoff timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Current package lifecycle state.
     * Package states are the source used to derive shipment status. - `created`: The package
     * record exists but has not been packed or handed off. - `packed`: The package is packed and
     * awaiting carrier handoff. - `shipped`: The package was handed to the carrier. -
     * `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`:
     * The package is on its final delivery route. - `delivered`: The carrier reported successful
     * delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it.
     * Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception
     * is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package
     * was returned toward or to its origin. - `voided`: The package was voided and will not
     * continue through delivery. Value enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * object.status_reason (Optional): string. Additional explanation of the package's current
     * status. object.supported_actions (Required): Array of string. Lifecycle actions Flint
     * accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. []
     * enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
     * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void".
     * object.supported_actions[] (Value): string. Value enum: "mark_delivered",
     * "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery",
     * "mark_packed", "mark_returned", "mark_shipped", "void". object.tracking_number (Optional):
     * string. Omitted for a checkout session credential that doesn't act for the customer the
     * buyer verified. object.tracking_url (Optional): string. Absolute HTTPS carrier tracking URL.
     * Embedded URL credentials are rejected. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. object.updated_at (Required): string. Last
     * update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Monotonic package version for expected_version checks. Format: uint64.
     * minimum: 1. object.weight (Optional): {@link Weight}. Physical weight of the package. A
     * weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. carrier
         * (Optional): string. Carrier transporting the package. created_at (Required): string.
         * Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". delivered_at
         * (Optional): string. Package delivery timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". dimensions (Optional): {@link Dimensions}. Physical length,
         * width, and height of the package. Package or item dimensions as `length`, `width`, and
         * `height` in the given `unit`. expected_delivery_at (Optional): string or null. When the
         * carrier or merchant expects this package to arrive. Null when no estimate is set.
         * Retained after delivery as history. This estimate is separate from the fulfillment's
         * promised shipment window. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. Requires external_system. External references are not unique. Use
         * Idempotency-Key for retries. maxLength: 255. Example: "warehouse-1842". external_system
         * (Optional): string. Name of the external system that external_reference_id belongs to.
         * External references are not unique. Use Idempotency-Key for retries. fulfillment_id
         * (Required): string. Fulfillment whose items are in the package. Example:
         * "ful_01KEZF7C00F24WVSTTWR1FQX5T". label_url (Optional): string. HTTPS shipping-label URL
         * supplied by your integration. Non-Flint URLs require external_system for provenance.
         * Flint does not host the label file. Omitted for a checkout session credential that
         * doesn't act for the customer the buyer verified. metadata (Optional): {@link
         * MetadataMap}. Caller-owned key-value metadata associated with the package. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. order (Optional): {@link
         * ExpandedOrderSummary} or null. Order summary returned when the order relationship is
         * expanded. Present only when `expand` includes `order`; `null` when expanded and there is
         * no related order. order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's
         * summary fields, including status, payment and refund status, and pricing and settlement
         * amounts, returned when the order is expanded. order.anyOf[2] (Value): null. order_id
         * (Required): string. Order whose items are in the package. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". package_id (Required): string. Stable identifier of
         * the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". return_id (Optional): string.
         * Return this package belongs to. Present only on packages of return shipments. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_line_items (Optional): Array of {@link
         * ReturnHandoffRequirementLineItem}. Return line quantities allocated to this parcel.
         * Present only on packages of return shipments. return_line_items[] (Value): {@link
         * ReturnHandoffRequirementLineItem}. A return line and the quantity placed in a return
         * shipment or package. service_code (Optional): string. Carrier service used for the
         * package. shipment_id (Required): string. Shipment carrying this package. Example:
         * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipped_at (Optional): string. Package handoff
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required):
         * string. Current package lifecycle state. Package states are the source used to derive
         * shipment status. - `created`: The package record exists but has not been packed or
         * handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`:
         * The package was handed to the carrier. - `in_transit`: The carrier is moving the package
         * through its network. - `out_for_delivery`: The package is on its final delivery route. -
         * `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The
         * carrier attempted delivery but did not complete it. Follow the carrier instructions
         * before retrying delivery. - `exception`: A carrier exception is blocking normal
         * progress. Resolve the carrier-reported issue. - `returned`: The package was returned
         * toward or to its origin. - `voided`: The package was voided and will not continue
         * through delivery. Value enum: "created", "packed", "shipped", "in_transit",
         * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned",
         * "voided". status_reason (Optional): string. Additional explanation of the package's
         * current status. supported_actions (Required): Array of string. Lifecycle actions Flint
         * accepts now. mark_in_transit can repeat while in transit to refresh
         * expected_delivery_at. [] enum: "mark_delivered", "mark_delivery_attempted",
         * "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed",
         * "mark_returned", "mark_shipped", "void". supported_actions[] (Value): string. Value
         * enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
         * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void".
         * tracking_number (Optional): string. Omitted for a checkout session credential that
         * doesn't act for the customer the buyer verified. tracking_url (Optional): string.
         * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for
         * a checkout session credential that doesn't act for the customer the buyer verified.
         * updated_at (Required): string. Last update timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Monotonic package version for
         * expected_version checks. Format: uint64. minimum: 1. weight (Optional): {@link Weight}.
         * Physical weight of the package. A weight value in grams, kilograms, ounces, or pounds,
         * used in delivery profile configuration.
         */
        "object": {
            /** Carrier transporting the package. */
            "carrier"?: string;
            /** Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** Package delivery timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "delivered_at"?: string;
            /**
             * Physical length, width, and height of the package. Package or item dimensions as
             * `length`, `width`, and `height` in the given `unit`.
             */
            "dimensions"?: Dimensions;
            /**
             * When the carrier or merchant expects this package to arrive. Null when no estimate
             * is set. Retained after delivery as history. This estimate is separate from the
             * fulfillment's promised shipment window. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expected_delivery_at"?: string | null;
            /**
             * Caller-owned identifier for this resource in an external system. Requires
             * external_system. External references are not unique. Use Idempotency-Key for
             * retries. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Name of the external system that external_reference_id belongs to. External
             * references are not unique. Use Idempotency-Key for retries.
             */
            "external_system"?: string;
            /**
             * Fulfillment whose items are in the package. Example:
             * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
             */
            "fulfillment_id": string;
            /**
             * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
             * external_system for provenance. Flint does not host the label file. Omitted for a
             * checkout session credential that doesn't act for the customer the buyer verified.
             */
            "label_url"?: string;
            /**
             * Caller-owned key-value metadata associated with the package. Caller-owned key-value
             * data stored on a resource. Keys starting with flint_ are reserved for Flint and are
             * not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** Order whose items are in the package. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /** Stable identifier of the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". */
            "package_id": string;
            /**
             * Return this package belongs to. Present only on packages of return shipments.
             * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * Return line quantities allocated to this parcel. Present only on packages of return
             * shipments. [] (Value): {@link ReturnHandoffRequirementLineItem}. A return line and
             * the quantity placed in a return shipment or package.
             */
            "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
            /** Carrier service used for the package. */
            "service_code"?: string;
            /** Shipment carrying this package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
            "shipment_id": string;
            /** Package handoff timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "shipped_at"?: string;
            /**
             * Current package lifecycle state. Package states are the source used to derive
             * shipment status. - `created`: The package record exists but has not been packed or
             * handed off. - `packed`: The package is packed and awaiting carrier handoff. -
             * `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is
             * moving the package through its network. - `out_for_delivery`: The package is on its
             * final delivery route. - `delivered`: The carrier reported successful delivery. -
             * `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow
             * the carrier instructions before retrying delivery. - `exception`: A carrier
             * exception is blocking normal progress. Resolve the carrier-reported issue. -
             * `returned`: The package was returned toward or to its origin. - `voided`: The
             * package was voided and will not continue through delivery. Value enum: "created",
             * "packed", "shipped", "in_transit", "out_for_delivery", "delivered",
             * "delivery_attempted", "exception", "returned", "voided".
             */
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            /** Additional explanation of the package's current status. */
            "status_reason"?: string;
            /**
             * Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to
             * refresh expected_delivery_at. [] enum: "mark_delivered", "mark_delivery_attempted",
             * "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed",
             * "mark_returned", "mark_shipped", "void". [] (Value): string. Value enum:
             * "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
             * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void".
             */
            "supported_actions": Array<"mark_delivered"
                | "mark_delivery_attempted"
                | "mark_exception"
                | "mark_in_transit"
                | "mark_out_for_delivery"
                | "mark_packed"
                | "mark_returned"
                | "mark_shipped"
                | "void"
                | (string & {})>;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified.
             */
            "tracking_number"?: string;
            /**
             * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted
             * for a checkout session credential that doesn't act for the customer the buyer
             * verified.
             */
            "tracking_url"?: string;
            /** Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Monotonic package version for expected_version checks. Format: uint64. minimum: 1.
             */
            "version": number;
            /**
             * Physical weight of the package. A weight value in grams, kilograms, ounces, or
             * pounds, used in delivery profile configuration.
             */
            "weight"?: Weight;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "package.created". */
    "event_type"?: "package.created";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `package.created` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type PackageCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.carrier (Optional): string. Carrier transporting the package.
     * object.created_at (Required): string. Creation timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.delivered_at (Optional): string. Package delivery timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.dimensions (Optional): {@link
     * Dimensions}. Physical length, width, and height of the package. Package or item dimensions
     * as `length`, `width`, and `height` in the given `unit`. object.expected_delivery_at
     * (Optional): string or null. When the carrier or merchant expects this package to arrive.
     * Null when no estimate is set. Retained after delivery as history. This estimate is separate
     * from the fulfillment's promised shipment window. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. Requires external_system. External
     * references are not unique. Use Idempotency-Key for retries. maxLength: 255. Example:
     * "warehouse-1842". object.external_system (Optional): string. Name of the external system
     * that external_reference_id belongs to. External references are not unique. Use
     * Idempotency-Key for retries. object.fulfillment_id (Required): string. Fulfillment whose
     * items are in the package. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.label_url
     * (Optional): string. HTTPS shipping-label URL supplied by your integration. Non-Flint URLs
     * require external_system for provenance. Flint does not host the label file. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified.
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned key-value metadata associated
     * with the package. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.order (Optional): {@link ExpandedOrderSummary} or null. Order summary returned when
     * the order relationship is expanded. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * are in the package. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.package_id (Required):
     * string. Stable identifier of the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R".
     * object.return_id (Optional): string. Return this package belongs to. Present only on
     * packages of return shipments. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_line_items (Optional): Array of {@link ReturnHandoffRequirementLineItem}.
     * Return line quantities allocated to this parcel. Present only on packages of return
     * shipments. object.return_line_items[] (Value): {@link ReturnHandoffRequirementLineItem}. A
     * return line and the quantity placed in a return shipment or package. object.service_code
     * (Optional): string. Carrier service used for the package. object.shipment_id (Required):
     * string. Shipment carrying this package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     * object.shipped_at (Optional): string. Package handoff timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Current package lifecycle state.
     * Package states are the source used to derive shipment status. - `created`: The package
     * record exists but has not been packed or handed off. - `packed`: The package is packed and
     * awaiting carrier handoff. - `shipped`: The package was handed to the carrier. -
     * `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`:
     * The package is on its final delivery route. - `delivered`: The carrier reported successful
     * delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it.
     * Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception
     * is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package
     * was returned toward or to its origin. - `voided`: The package was voided and will not
     * continue through delivery. Value enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * object.status_reason (Optional): string. Additional explanation of the package's current
     * status. object.supported_actions (Required): Array of string. Lifecycle actions Flint
     * accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. []
     * enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
     * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void".
     * object.supported_actions[] (Value): string. Value enum: "mark_delivered",
     * "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery",
     * "mark_packed", "mark_returned", "mark_shipped", "void". object.tracking_number (Optional):
     * string. Omitted for a checkout session credential that doesn't act for the customer the
     * buyer verified. object.tracking_url (Optional): string. Absolute HTTPS carrier tracking URL.
     * Embedded URL credentials are rejected. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. object.updated_at (Required): string. Last
     * update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Monotonic package version for expected_version checks. Format: uint64.
     * minimum: 1. object.weight (Optional): {@link Weight}. Physical weight of the package. A
     * weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. carrier
         * (Optional): string. Carrier transporting the package. created_at (Required): string.
         * Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". delivered_at
         * (Optional): string. Package delivery timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". dimensions (Optional): {@link Dimensions}. Physical length,
         * width, and height of the package. Package or item dimensions as `length`, `width`, and
         * `height` in the given `unit`. expected_delivery_at (Optional): string or null. When the
         * carrier or merchant expects this package to arrive. Null when no estimate is set.
         * Retained after delivery as history. This estimate is separate from the fulfillment's
         * promised shipment window. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. Requires external_system. External references are not unique. Use
         * Idempotency-Key for retries. maxLength: 255. Example: "warehouse-1842". external_system
         * (Optional): string. Name of the external system that external_reference_id belongs to.
         * External references are not unique. Use Idempotency-Key for retries. fulfillment_id
         * (Required): string. Fulfillment whose items are in the package. Example:
         * "ful_01KEZF7C00F24WVSTTWR1FQX5T". label_url (Optional): string. HTTPS shipping-label URL
         * supplied by your integration. Non-Flint URLs require external_system for provenance.
         * Flint does not host the label file. Omitted for a checkout session credential that
         * doesn't act for the customer the buyer verified. metadata (Optional): {@link
         * MetadataMap}. Caller-owned key-value metadata associated with the package. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. order (Optional): {@link
         * ExpandedOrderSummary} or null. Order summary returned when the order relationship is
         * expanded. Present only when `expand` includes `order`; `null` when expanded and there is
         * no related order. order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's
         * summary fields, including status, payment and refund status, and pricing and settlement
         * amounts, returned when the order is expanded. order.anyOf[2] (Value): null. order_id
         * (Required): string. Order whose items are in the package. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". package_id (Required): string. Stable identifier of
         * the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". return_id (Optional): string.
         * Return this package belongs to. Present only on packages of return shipments. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_line_items (Optional): Array of {@link
         * ReturnHandoffRequirementLineItem}. Return line quantities allocated to this parcel.
         * Present only on packages of return shipments. return_line_items[] (Value): {@link
         * ReturnHandoffRequirementLineItem}. A return line and the quantity placed in a return
         * shipment or package. service_code (Optional): string. Carrier service used for the
         * package. shipment_id (Required): string. Shipment carrying this package. Example:
         * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipped_at (Optional): string. Package handoff
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required):
         * string. Current package lifecycle state. Package states are the source used to derive
         * shipment status. - `created`: The package record exists but has not been packed or
         * handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`:
         * The package was handed to the carrier. - `in_transit`: The carrier is moving the package
         * through its network. - `out_for_delivery`: The package is on its final delivery route. -
         * `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The
         * carrier attempted delivery but did not complete it. Follow the carrier instructions
         * before retrying delivery. - `exception`: A carrier exception is blocking normal
         * progress. Resolve the carrier-reported issue. - `returned`: The package was returned
         * toward or to its origin. - `voided`: The package was voided and will not continue
         * through delivery. Value enum: "created", "packed", "shipped", "in_transit",
         * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned",
         * "voided". status_reason (Optional): string. Additional explanation of the package's
         * current status. supported_actions (Required): Array of string. Lifecycle actions Flint
         * accepts now. mark_in_transit can repeat while in transit to refresh
         * expected_delivery_at. [] enum: "mark_delivered", "mark_delivery_attempted",
         * "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed",
         * "mark_returned", "mark_shipped", "void". supported_actions[] (Value): string. Value
         * enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
         * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void".
         * tracking_number (Optional): string. Omitted for a checkout session credential that
         * doesn't act for the customer the buyer verified. tracking_url (Optional): string.
         * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for
         * a checkout session credential that doesn't act for the customer the buyer verified.
         * updated_at (Required): string. Last update timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Monotonic package version for
         * expected_version checks. Format: uint64. minimum: 1. weight (Optional): {@link Weight}.
         * Physical weight of the package. A weight value in grams, kilograms, ounces, or pounds,
         * used in delivery profile configuration.
         */
        "object": {
            /** Carrier transporting the package. */
            "carrier"?: string;
            /** Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** Package delivery timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "delivered_at"?: string;
            /**
             * Physical length, width, and height of the package. Package or item dimensions as
             * `length`, `width`, and `height` in the given `unit`.
             */
            "dimensions"?: Dimensions;
            /**
             * When the carrier or merchant expects this package to arrive. Null when no estimate
             * is set. Retained after delivery as history. This estimate is separate from the
             * fulfillment's promised shipment window. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expected_delivery_at"?: string | null;
            /**
             * Caller-owned identifier for this resource in an external system. Requires
             * external_system. External references are not unique. Use Idempotency-Key for
             * retries. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Name of the external system that external_reference_id belongs to. External
             * references are not unique. Use Idempotency-Key for retries.
             */
            "external_system"?: string;
            /**
             * Fulfillment whose items are in the package. Example:
             * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
             */
            "fulfillment_id": string;
            /**
             * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
             * external_system for provenance. Flint does not host the label file. Omitted for a
             * checkout session credential that doesn't act for the customer the buyer verified.
             */
            "label_url"?: string;
            /**
             * Caller-owned key-value metadata associated with the package. Caller-owned key-value
             * data stored on a resource. Keys starting with flint_ are reserved for Flint and are
             * not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** Order whose items are in the package. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /** Stable identifier of the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". */
            "package_id": string;
            /**
             * Return this package belongs to. Present only on packages of return shipments.
             * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * Return line quantities allocated to this parcel. Present only on packages of return
             * shipments. [] (Value): {@link ReturnHandoffRequirementLineItem}. A return line and
             * the quantity placed in a return shipment or package.
             */
            "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
            /** Carrier service used for the package. */
            "service_code"?: string;
            /** Shipment carrying this package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
            "shipment_id": string;
            /** Package handoff timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "shipped_at"?: string;
            /**
             * Current package lifecycle state. Package states are the source used to derive
             * shipment status. - `created`: The package record exists but has not been packed or
             * handed off. - `packed`: The package is packed and awaiting carrier handoff. -
             * `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is
             * moving the package through its network. - `out_for_delivery`: The package is on its
             * final delivery route. - `delivered`: The carrier reported successful delivery. -
             * `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow
             * the carrier instructions before retrying delivery. - `exception`: A carrier
             * exception is blocking normal progress. Resolve the carrier-reported issue. -
             * `returned`: The package was returned toward or to its origin. - `voided`: The
             * package was voided and will not continue through delivery. Value enum: "created",
             * "packed", "shipped", "in_transit", "out_for_delivery", "delivered",
             * "delivery_attempted", "exception", "returned", "voided".
             */
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            /** Additional explanation of the package's current status. */
            "status_reason"?: string;
            /**
             * Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to
             * refresh expected_delivery_at. [] enum: "mark_delivered", "mark_delivery_attempted",
             * "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed",
             * "mark_returned", "mark_shipped", "void". [] (Value): string. Value enum:
             * "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
             * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void".
             */
            "supported_actions": Array<"mark_delivered"
                | "mark_delivery_attempted"
                | "mark_exception"
                | "mark_in_transit"
                | "mark_out_for_delivery"
                | "mark_packed"
                | "mark_returned"
                | "mark_shipped"
                | "void"
                | (string & {})>;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified.
             */
            "tracking_number"?: string;
            /**
             * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted
             * for a checkout session credential that doesn't act for the customer the buyer
             * verified.
             */
            "tracking_url"?: string;
            /** Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Monotonic package version for expected_version checks. Format: uint64. minimum: 1.
             */
            "version": number;
            /**
             * Physical weight of the package. A weight value in grams, kilograms, ounces, or
             * pounds, used in delivery profile configuration.
             */
            "weight"?: Weight;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "package.created". */
    "event_type"?: "package.created";
});
/** An order item assigned to a package. */
export type PackageItem = {
    /**
     * Bundle component this item counts, in component units. `null` when the line isn't a bundle
     * component or a legacy allocation has no component recorded. Look the component up in the
     * order line's bundle_components. Example: "bunc_01KEZF7C00CQASEZGAPEANTGD1".
     */
    "bundle_component_id": string | null;
    /** Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Fulfillment containing this package item. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
    "fulfillment_id": string;
    /**
     * Caller-owned metadata for this package item. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Present only when `expand` includes `order`; `null` when expanded and there is no related
     * order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
     * status, payment and refund status, and pricing and settlement amounts, returned when the
     * order is expanded. anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** Order containing the allocated line item. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /**
     * Order line whose quantity this package item allocates. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /** Package containing this item. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". */
    "package_id": string;
    /** Unique identifier for this package allocation. Example: "pki_01KEZF7C00CEFTYV5RD7XVYQ7B". */
    "package_item_id": string;
    /**
     * Whole-number quantity in component units for a bundle component, or line units otherwise;
     * fractional quantities are not supported. Format: int64.
     */
    "quantity": number;
    /** Shipment containing the package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
    "shipment_id": string;
    /** Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Persisted item version, independent of package shipment and capacity guards. Format: uint64.
     * minimum: 1.
     */
    "version": number;
};
/** A page of `PackageItem` objects. */
export type PackageItemListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PackageItem}. An order item assigned to a package.
     */
    "data": Array<PackageItem>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `PackageItem` data. */
export type PackageItemResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An order item assigned
     * to a package.
     */
    "data": PackageItem;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A page of `Package` objects. */
export type PackageListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * Package}. A package within a shipment.
     */
    "data": Array<Package>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `Package` data. */
export type PackageResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A package within a
     * shipment.
     */
    "data": Package;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type PackageUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "carrier"?: string;
            "created_at": string;
            "delivered_at"?: string;
            "dimensions"?: Dimensions;
            "expected_delivery_at"?: string | null;
            "external_reference_id"?: string;
            "external_system"?: string;
            "fulfillment_id": string;
            "label_url"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "package_id": string;
            "return_id"?: string;
            "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
            "service_code"?: string;
            "shipment_id": string;
            "shipped_at"?: string;
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            "status_reason"?: string;
            "supported_actions": Array<"mark_delivered"
                | "mark_delivery_attempted"
                | "mark_exception"
                | "mark_in_transit"
                | "mark_out_for_delivery"
                | "mark_packed"
                | "mark_returned"
                | "mark_shipped"
                | "void"
                | (string & {})>;
            "tracking_number"?: string;
            "tracking_url"?: string;
            "updated_at": string;
            "version": number;
            "weight"?: Weight;
        };
        "previous_attributes"?: Partial<Package>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "package.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "carrier"?: string;
            "created_at": string;
            "delivered_at"?: string;
            "dimensions"?: Dimensions;
            "expected_delivery_at"?: string | null;
            "external_reference_id"?: string;
            "external_system"?: string;
            "fulfillment_id": string;
            "label_url"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "package_id": string;
            "return_id"?: string;
            "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
            "service_code"?: string;
            "shipment_id": string;
            "shipped_at"?: string;
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            "status_reason"?: string;
            "supported_actions": Array<"mark_delivered"
                | "mark_delivery_attempted"
                | "mark_exception"
                | "mark_in_transit"
                | "mark_out_for_delivery"
                | "mark_packed"
                | "mark_returned"
                | "mark_shipped"
                | "void"
                | (string & {})>;
            "tracking_number"?: string;
            "tracking_url"?: string;
            "updated_at": string;
            "version": number;
            "weight"?: Weight;
        };
        "previous_attributes"?: Partial<Package>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "package.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "package.updated";
});
/**
 * The `package.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type PackageUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.carrier (Optional): string. Carrier transporting the package.
     * object.created_at (Required): string. Creation timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.delivered_at (Optional): string. Package delivery timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.dimensions (Optional): {@link
     * Dimensions}. Physical length, width, and height of the package. Package or item dimensions
     * as `length`, `width`, and `height` in the given `unit`. object.expected_delivery_at
     * (Optional): string or null. When the carrier or merchant expects this package to arrive.
     * Null when no estimate is set. Retained after delivery as history. This estimate is separate
     * from the fulfillment's promised shipment window. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. Requires external_system. External
     * references are not unique. Use Idempotency-Key for retries. maxLength: 255. Example:
     * "warehouse-1842". object.external_system (Optional): string. Name of the external system
     * that external_reference_id belongs to. External references are not unique. Use
     * Idempotency-Key for retries. object.fulfillment_id (Required): string. Fulfillment whose
     * items are in the package. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.label_url
     * (Optional): string. HTTPS shipping-label URL supplied by your integration. Non-Flint URLs
     * require external_system for provenance. Flint does not host the label file. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified.
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned key-value metadata associated
     * with the package. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.order (Optional): {@link ExpandedOrderSummary} or null. Order summary returned when
     * the order relationship is expanded. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * are in the package. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.package_id (Required):
     * string. Stable identifier of the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R".
     * object.return_id (Optional): string. Return this package belongs to. Present only on
     * packages of return shipments. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_line_items (Optional): Array of {@link ReturnHandoffRequirementLineItem}.
     * Return line quantities allocated to this parcel. Present only on packages of return
     * shipments. object.return_line_items[] (Value): {@link ReturnHandoffRequirementLineItem}. A
     * return line and the quantity placed in a return shipment or package. object.service_code
     * (Optional): string. Carrier service used for the package. object.shipment_id (Required):
     * string. Shipment carrying this package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     * object.shipped_at (Optional): string. Package handoff timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Current package lifecycle state.
     * Package states are the source used to derive shipment status. - `created`: The package
     * record exists but has not been packed or handed off. - `packed`: The package is packed and
     * awaiting carrier handoff. - `shipped`: The package was handed to the carrier. -
     * `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`:
     * The package is on its final delivery route. - `delivered`: The carrier reported successful
     * delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it.
     * Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception
     * is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package
     * was returned toward or to its origin. - `voided`: The package was voided and will not
     * continue through delivery. Value enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * object.status_reason (Optional): string. Additional explanation of the package's current
     * status. object.supported_actions (Required): Array of string. Lifecycle actions Flint
     * accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. []
     * enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
     * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void".
     * object.supported_actions[] (Value): string. Value enum: "mark_delivered",
     * "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery",
     * "mark_packed", "mark_returned", "mark_shipped", "void". object.tracking_number (Optional):
     * string. Omitted for a checkout session credential that doesn't act for the customer the
     * buyer verified. object.tracking_url (Optional): string. Absolute HTTPS carrier tracking URL.
     * Embedded URL credentials are rejected. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. object.updated_at (Required): string. Last
     * update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Monotonic package version for expected_version checks. Format: uint64.
     * minimum: 1. object.weight (Optional): {@link Weight}. Physical weight of the package. A
     * weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. carrier
         * (Optional): string. Carrier transporting the package. created_at (Required): string.
         * Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". delivered_at
         * (Optional): string. Package delivery timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". dimensions (Optional): {@link Dimensions}. Physical length,
         * width, and height of the package. Package or item dimensions as `length`, `width`, and
         * `height` in the given `unit`. expected_delivery_at (Optional): string or null. When the
         * carrier or merchant expects this package to arrive. Null when no estimate is set.
         * Retained after delivery as history. This estimate is separate from the fulfillment's
         * promised shipment window. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. Requires external_system. External references are not unique. Use
         * Idempotency-Key for retries. maxLength: 255. Example: "warehouse-1842". external_system
         * (Optional): string. Name of the external system that external_reference_id belongs to.
         * External references are not unique. Use Idempotency-Key for retries. fulfillment_id
         * (Required): string. Fulfillment whose items are in the package. Example:
         * "ful_01KEZF7C00F24WVSTTWR1FQX5T". label_url (Optional): string. HTTPS shipping-label URL
         * supplied by your integration. Non-Flint URLs require external_system for provenance.
         * Flint does not host the label file. Omitted for a checkout session credential that
         * doesn't act for the customer the buyer verified. metadata (Optional): {@link
         * MetadataMap}. Caller-owned key-value metadata associated with the package. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. order (Optional): {@link
         * ExpandedOrderSummary} or null. Order summary returned when the order relationship is
         * expanded. Present only when `expand` includes `order`; `null` when expanded and there is
         * no related order. order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's
         * summary fields, including status, payment and refund status, and pricing and settlement
         * amounts, returned when the order is expanded. order.anyOf[2] (Value): null. order_id
         * (Required): string. Order whose items are in the package. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". package_id (Required): string. Stable identifier of
         * the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". return_id (Optional): string.
         * Return this package belongs to. Present only on packages of return shipments. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_line_items (Optional): Array of {@link
         * ReturnHandoffRequirementLineItem}. Return line quantities allocated to this parcel.
         * Present only on packages of return shipments. return_line_items[] (Value): {@link
         * ReturnHandoffRequirementLineItem}. A return line and the quantity placed in a return
         * shipment or package. service_code (Optional): string. Carrier service used for the
         * package. shipment_id (Required): string. Shipment carrying this package. Example:
         * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipped_at (Optional): string. Package handoff
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required):
         * string. Current package lifecycle state. Package states are the source used to derive
         * shipment status. - `created`: The package record exists but has not been packed or
         * handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`:
         * The package was handed to the carrier. - `in_transit`: The carrier is moving the package
         * through its network. - `out_for_delivery`: The package is on its final delivery route. -
         * `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The
         * carrier attempted delivery but did not complete it. Follow the carrier instructions
         * before retrying delivery. - `exception`: A carrier exception is blocking normal
         * progress. Resolve the carrier-reported issue. - `returned`: The package was returned
         * toward or to its origin. - `voided`: The package was voided and will not continue
         * through delivery. Value enum: "created", "packed", "shipped", "in_transit",
         * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned",
         * "voided". status_reason (Optional): string. Additional explanation of the package's
         * current status. supported_actions (Required): Array of string. Lifecycle actions Flint
         * accepts now. mark_in_transit can repeat while in transit to refresh
         * expected_delivery_at. [] enum: "mark_delivered", "mark_delivery_attempted",
         * "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed",
         * "mark_returned", "mark_shipped", "void". supported_actions[] (Value): string. Value
         * enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
         * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void".
         * tracking_number (Optional): string. Omitted for a checkout session credential that
         * doesn't act for the customer the buyer verified. tracking_url (Optional): string.
         * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for
         * a checkout session credential that doesn't act for the customer the buyer verified.
         * updated_at (Required): string. Last update timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Monotonic package version for
         * expected_version checks. Format: uint64. minimum: 1. weight (Optional): {@link Weight}.
         * Physical weight of the package. A weight value in grams, kilograms, ounces, or pounds,
         * used in delivery profile configuration.
         */
        "object": {
            /** Carrier transporting the package. */
            "carrier"?: string;
            /** Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** Package delivery timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "delivered_at"?: string;
            /**
             * Physical length, width, and height of the package. Package or item dimensions as
             * `length`, `width`, and `height` in the given `unit`.
             */
            "dimensions"?: Dimensions;
            /**
             * When the carrier or merchant expects this package to arrive. Null when no estimate
             * is set. Retained after delivery as history. This estimate is separate from the
             * fulfillment's promised shipment window. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expected_delivery_at"?: string | null;
            /**
             * Caller-owned identifier for this resource in an external system. Requires
             * external_system. External references are not unique. Use Idempotency-Key for
             * retries. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Name of the external system that external_reference_id belongs to. External
             * references are not unique. Use Idempotency-Key for retries.
             */
            "external_system"?: string;
            /**
             * Fulfillment whose items are in the package. Example:
             * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
             */
            "fulfillment_id": string;
            /**
             * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
             * external_system for provenance. Flint does not host the label file. Omitted for a
             * checkout session credential that doesn't act for the customer the buyer verified.
             */
            "label_url"?: string;
            /**
             * Caller-owned key-value metadata associated with the package. Caller-owned key-value
             * data stored on a resource. Keys starting with flint_ are reserved for Flint and are
             * not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** Order whose items are in the package. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /** Stable identifier of the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". */
            "package_id": string;
            /**
             * Return this package belongs to. Present only on packages of return shipments.
             * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * Return line quantities allocated to this parcel. Present only on packages of return
             * shipments. [] (Value): {@link ReturnHandoffRequirementLineItem}. A return line and
             * the quantity placed in a return shipment or package.
             */
            "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
            /** Carrier service used for the package. */
            "service_code"?: string;
            /** Shipment carrying this package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
            "shipment_id": string;
            /** Package handoff timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "shipped_at"?: string;
            /**
             * Current package lifecycle state. Package states are the source used to derive
             * shipment status. - `created`: The package record exists but has not been packed or
             * handed off. - `packed`: The package is packed and awaiting carrier handoff. -
             * `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is
             * moving the package through its network. - `out_for_delivery`: The package is on its
             * final delivery route. - `delivered`: The carrier reported successful delivery. -
             * `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow
             * the carrier instructions before retrying delivery. - `exception`: A carrier
             * exception is blocking normal progress. Resolve the carrier-reported issue. -
             * `returned`: The package was returned toward or to its origin. - `voided`: The
             * package was voided and will not continue through delivery. Value enum: "created",
             * "packed", "shipped", "in_transit", "out_for_delivery", "delivered",
             * "delivery_attempted", "exception", "returned", "voided".
             */
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            /** Additional explanation of the package's current status. */
            "status_reason"?: string;
            /**
             * Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to
             * refresh expected_delivery_at. [] enum: "mark_delivered", "mark_delivery_attempted",
             * "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed",
             * "mark_returned", "mark_shipped", "void". [] (Value): string. Value enum:
             * "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
             * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void".
             */
            "supported_actions": Array<"mark_delivered"
                | "mark_delivery_attempted"
                | "mark_exception"
                | "mark_in_transit"
                | "mark_out_for_delivery"
                | "mark_packed"
                | "mark_returned"
                | "mark_shipped"
                | "void"
                | (string & {})>;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified.
             */
            "tracking_number"?: string;
            /**
             * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted
             * for a checkout session credential that doesn't act for the customer the buyer
             * verified.
             */
            "tracking_url"?: string;
            /** Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Monotonic package version for expected_version checks. Format: uint64. minimum: 1.
             */
            "version": number;
            /**
             * Physical weight of the package. A weight value in grams, kilograms, ounces, or
             * pounds, used in delivery profile configuration.
             */
            "weight"?: Weight;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Package>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "package.updated". */
    "event_type"?: "package.updated";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `package.updated` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type PackageUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.carrier (Optional): string. Carrier transporting the package.
     * object.created_at (Required): string. Creation timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.delivered_at (Optional): string. Package delivery timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.dimensions (Optional): {@link
     * Dimensions}. Physical length, width, and height of the package. Package or item dimensions
     * as `length`, `width`, and `height` in the given `unit`. object.expected_delivery_at
     * (Optional): string or null. When the carrier or merchant expects this package to arrive.
     * Null when no estimate is set. Retained after delivery as history. This estimate is separate
     * from the fulfillment's promised shipment window. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. Requires external_system. External
     * references are not unique. Use Idempotency-Key for retries. maxLength: 255. Example:
     * "warehouse-1842". object.external_system (Optional): string. Name of the external system
     * that external_reference_id belongs to. External references are not unique. Use
     * Idempotency-Key for retries. object.fulfillment_id (Required): string. Fulfillment whose
     * items are in the package. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.label_url
     * (Optional): string. HTTPS shipping-label URL supplied by your integration. Non-Flint URLs
     * require external_system for provenance. Flint does not host the label file. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified.
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned key-value metadata associated
     * with the package. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.order (Optional): {@link ExpandedOrderSummary} or null. Order summary returned when
     * the order relationship is expanded. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * are in the package. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.package_id (Required):
     * string. Stable identifier of the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R".
     * object.return_id (Optional): string. Return this package belongs to. Present only on
     * packages of return shipments. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_line_items (Optional): Array of {@link ReturnHandoffRequirementLineItem}.
     * Return line quantities allocated to this parcel. Present only on packages of return
     * shipments. object.return_line_items[] (Value): {@link ReturnHandoffRequirementLineItem}. A
     * return line and the quantity placed in a return shipment or package. object.service_code
     * (Optional): string. Carrier service used for the package. object.shipment_id (Required):
     * string. Shipment carrying this package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     * object.shipped_at (Optional): string. Package handoff timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Current package lifecycle state.
     * Package states are the source used to derive shipment status. - `created`: The package
     * record exists but has not been packed or handed off. - `packed`: The package is packed and
     * awaiting carrier handoff. - `shipped`: The package was handed to the carrier. -
     * `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`:
     * The package is on its final delivery route. - `delivered`: The carrier reported successful
     * delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it.
     * Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception
     * is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package
     * was returned toward or to its origin. - `voided`: The package was voided and will not
     * continue through delivery. Value enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * object.status_reason (Optional): string. Additional explanation of the package's current
     * status. object.supported_actions (Required): Array of string. Lifecycle actions Flint
     * accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. []
     * enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
     * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void".
     * object.supported_actions[] (Value): string. Value enum: "mark_delivered",
     * "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery",
     * "mark_packed", "mark_returned", "mark_shipped", "void". object.tracking_number (Optional):
     * string. Omitted for a checkout session credential that doesn't act for the customer the
     * buyer verified. object.tracking_url (Optional): string. Absolute HTTPS carrier tracking URL.
     * Embedded URL credentials are rejected. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. object.updated_at (Required): string. Last
     * update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Monotonic package version for expected_version checks. Format: uint64.
     * minimum: 1. object.weight (Optional): {@link Weight}. Physical weight of the package. A
     * weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. carrier
         * (Optional): string. Carrier transporting the package. created_at (Required): string.
         * Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". delivered_at
         * (Optional): string. Package delivery timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". dimensions (Optional): {@link Dimensions}. Physical length,
         * width, and height of the package. Package or item dimensions as `length`, `width`, and
         * `height` in the given `unit`. expected_delivery_at (Optional): string or null. When the
         * carrier or merchant expects this package to arrive. Null when no estimate is set.
         * Retained after delivery as history. This estimate is separate from the fulfillment's
         * promised shipment window. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. Requires external_system. External references are not unique. Use
         * Idempotency-Key for retries. maxLength: 255. Example: "warehouse-1842". external_system
         * (Optional): string. Name of the external system that external_reference_id belongs to.
         * External references are not unique. Use Idempotency-Key for retries. fulfillment_id
         * (Required): string. Fulfillment whose items are in the package. Example:
         * "ful_01KEZF7C00F24WVSTTWR1FQX5T". label_url (Optional): string. HTTPS shipping-label URL
         * supplied by your integration. Non-Flint URLs require external_system for provenance.
         * Flint does not host the label file. Omitted for a checkout session credential that
         * doesn't act for the customer the buyer verified. metadata (Optional): {@link
         * MetadataMap}. Caller-owned key-value metadata associated with the package. Caller-owned
         * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint
         * and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
         * maps written before those limits may not satisfy them. order (Optional): {@link
         * ExpandedOrderSummary} or null. Order summary returned when the order relationship is
         * expanded. Present only when `expand` includes `order`; `null` when expanded and there is
         * no related order. order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's
         * summary fields, including status, payment and refund status, and pricing and settlement
         * amounts, returned when the order is expanded. order.anyOf[2] (Value): null. order_id
         * (Required): string. Order whose items are in the package. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". package_id (Required): string. Stable identifier of
         * the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". return_id (Optional): string.
         * Return this package belongs to. Present only on packages of return shipments. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_line_items (Optional): Array of {@link
         * ReturnHandoffRequirementLineItem}. Return line quantities allocated to this parcel.
         * Present only on packages of return shipments. return_line_items[] (Value): {@link
         * ReturnHandoffRequirementLineItem}. A return line and the quantity placed in a return
         * shipment or package. service_code (Optional): string. Carrier service used for the
         * package. shipment_id (Required): string. Shipment carrying this package. Example:
         * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipped_at (Optional): string. Package handoff
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required):
         * string. Current package lifecycle state. Package states are the source used to derive
         * shipment status. - `created`: The package record exists but has not been packed or
         * handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`:
         * The package was handed to the carrier. - `in_transit`: The carrier is moving the package
         * through its network. - `out_for_delivery`: The package is on its final delivery route. -
         * `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The
         * carrier attempted delivery but did not complete it. Follow the carrier instructions
         * before retrying delivery. - `exception`: A carrier exception is blocking normal
         * progress. Resolve the carrier-reported issue. - `returned`: The package was returned
         * toward or to its origin. - `voided`: The package was voided and will not continue
         * through delivery. Value enum: "created", "packed", "shipped", "in_transit",
         * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned",
         * "voided". status_reason (Optional): string. Additional explanation of the package's
         * current status. supported_actions (Required): Array of string. Lifecycle actions Flint
         * accepts now. mark_in_transit can repeat while in transit to refresh
         * expected_delivery_at. [] enum: "mark_delivered", "mark_delivery_attempted",
         * "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed",
         * "mark_returned", "mark_shipped", "void". supported_actions[] (Value): string. Value
         * enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
         * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void".
         * tracking_number (Optional): string. Omitted for a checkout session credential that
         * doesn't act for the customer the buyer verified. tracking_url (Optional): string.
         * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for
         * a checkout session credential that doesn't act for the customer the buyer verified.
         * updated_at (Required): string. Last update timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Monotonic package version for
         * expected_version checks. Format: uint64. minimum: 1. weight (Optional): {@link Weight}.
         * Physical weight of the package. A weight value in grams, kilograms, ounces, or pounds,
         * used in delivery profile configuration.
         */
        "object": {
            /** Carrier transporting the package. */
            "carrier"?: string;
            /** Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** Package delivery timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "delivered_at"?: string;
            /**
             * Physical length, width, and height of the package. Package or item dimensions as
             * `length`, `width`, and `height` in the given `unit`.
             */
            "dimensions"?: Dimensions;
            /**
             * When the carrier or merchant expects this package to arrive. Null when no estimate
             * is set. Retained after delivery as history. This estimate is separate from the
             * fulfillment's promised shipment window. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expected_delivery_at"?: string | null;
            /**
             * Caller-owned identifier for this resource in an external system. Requires
             * external_system. External references are not unique. Use Idempotency-Key for
             * retries. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Name of the external system that external_reference_id belongs to. External
             * references are not unique. Use Idempotency-Key for retries.
             */
            "external_system"?: string;
            /**
             * Fulfillment whose items are in the package. Example:
             * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
             */
            "fulfillment_id": string;
            /**
             * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
             * external_system for provenance. Flint does not host the label file. Omitted for a
             * checkout session credential that doesn't act for the customer the buyer verified.
             */
            "label_url"?: string;
            /**
             * Caller-owned key-value metadata associated with the package. Caller-owned key-value
             * data stored on a resource. Keys starting with flint_ are reserved for Flint and are
             * not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** Order whose items are in the package. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /** Stable identifier of the package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". */
            "package_id": string;
            /**
             * Return this package belongs to. Present only on packages of return shipments.
             * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * Return line quantities allocated to this parcel. Present only on packages of return
             * shipments. [] (Value): {@link ReturnHandoffRequirementLineItem}. A return line and
             * the quantity placed in a return shipment or package.
             */
            "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
            /** Carrier service used for the package. */
            "service_code"?: string;
            /** Shipment carrying this package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
            "shipment_id": string;
            /** Package handoff timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "shipped_at"?: string;
            /**
             * Current package lifecycle state. Package states are the source used to derive
             * shipment status. - `created`: The package record exists but has not been packed or
             * handed off. - `packed`: The package is packed and awaiting carrier handoff. -
             * `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is
             * moving the package through its network. - `out_for_delivery`: The package is on its
             * final delivery route. - `delivered`: The carrier reported successful delivery. -
             * `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow
             * the carrier instructions before retrying delivery. - `exception`: A carrier
             * exception is blocking normal progress. Resolve the carrier-reported issue. -
             * `returned`: The package was returned toward or to its origin. - `voided`: The
             * package was voided and will not continue through delivery. Value enum: "created",
             * "packed", "shipped", "in_transit", "out_for_delivery", "delivered",
             * "delivery_attempted", "exception", "returned", "voided".
             */
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            /** Additional explanation of the package's current status. */
            "status_reason"?: string;
            /**
             * Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to
             * refresh expected_delivery_at. [] enum: "mark_delivered", "mark_delivery_attempted",
             * "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed",
             * "mark_returned", "mark_shipped", "void". [] (Value): string. Value enum:
             * "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit",
             * "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void".
             */
            "supported_actions": Array<"mark_delivered"
                | "mark_delivery_attempted"
                | "mark_exception"
                | "mark_in_transit"
                | "mark_out_for_delivery"
                | "mark_packed"
                | "mark_returned"
                | "mark_shipped"
                | "void"
                | (string & {})>;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified.
             */
            "tracking_number"?: string;
            /**
             * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted
             * for a checkout session credential that doesn't act for the customer the buyer
             * verified.
             */
            "tracking_url"?: string;
            /** Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Monotonic package version for expected_version checks. Format: uint64. minimum: 1.
             */
            "version": number;
            /**
             * Physical weight of the package. A weight value in grams, kilograms, ounces, or
             * pounds, used in delivery profile configuration.
             */
            "weight"?: Weight;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Package>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "package.updated". */
    "event_type"?: "package.updated";
});
export type PackagesCreateItemParams = (InputValue<CreatePackageItemRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type PackagesCreateParams = (CreatePackageRequestInput)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type PackagesDeleteItemParams = {
    /**
     * Optional item version last read by the caller. Format: uint64. minimum: 1. maximum:
     * 9007199254740991.
     */
    "expected_version"?: InputValue<number>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type PackagesGetItemParams = FulfillmentEventsGetParams;
export type PackagesGetParams = FulfillmentEventsGetParams;
export type PackagesListPackageItemsParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Include related objects in the response. Supported expansions: order. Include the requested
     * related resources using scoped batch reads for this page. Each relationship requires its
     * existing target read scopes. Expansion changes the representation without changing
     * pagination tokens. Limits: at most 10 unique expand paths per request. [] enum: "order".
     * Value enum: "order". anyOf[1] (Value): Array of string. [] enum: "order". anyOf[1][]
     * (Value): string. Value enum: "order". anyOf[2] (Value): string. Value enum: "order".
     */
    "expand"?: InputValue<("order") | readonly ("order")[]>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type PackagesListParams = {
    /**
     * Optional shipment ID filter. pattern: ^shp_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     */
    "shipment_id"?: InputValue<string>;
    /**
     * Optional fulfillment ID filter. pattern: ^ful_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id"?: InputValue<string>;
    /**
     * Optional order ID filter. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Filter by external system identifier. */
    "external_system"?: InputValue<string>;
    /**
     * Exact match on the package's `external_reference_id`. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across package ID, external reference ID, and tracking number. Text fields match any
     * part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the
     * start and need the type prefix, such as pkg_01.
     */
    "query"?: InputValue<string>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by package status. Values within this filter are combined with OR. Values are trimmed
     * and deduplicated in first-seen order; empty or unknown entries are rejected. Values within
     * this filter are ORed; separate filters are ANDed. [] enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". Value enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". anyOf[1][] (Value): string. Value enum: "created", "packed",
     * "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". anyOf[2] (Value): string. Value enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided".
     */
    "status"?: InputValue<("created"
        | "packed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided")
        | readonly ("created"
        | "packed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided")[]>;
    /**
     * Byte-sensitive full tracking-number match. Whitespace and commas are literal; combine with
     * carrier to identify a carrier-specific tracking number. minLength: 1. maxLength: 255.
     */
    "tracking_number"?: InputValue<string>;
    /**
     * Byte-sensitive full carrier match. Whitespace and commas are literal. minLength: 1.
     * maxLength: 255.
     */
    "carrier"?: InputValue<string>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Include related objects in the response. Supported expansions: order. Include the requested
     * related resources using scoped batch reads for this page. Each relationship requires its
     * existing target read scopes. Expansion changes the representation without changing
     * pagination tokens. Limits: at most 10 unique expand paths per request. [] enum: "order".
     * Value enum: "order". anyOf[1] (Value): Array of string. [] enum: "order". anyOf[1][]
     * (Value): string. Value enum: "order". anyOf[2] (Value): string. Value enum: "order".
     */
    "expand"?: InputValue<("order") | readonly ("order")[]>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type PackagesMarkDeliveredParams = (InputValue<MarkPackageDeliveredRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
})
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type PackagesMarkDeliveryAttemptedParams = (InputValue<MarkPackageDeliveryAttemptedRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
})
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type PackagesMarkExceptionParams = (InputValue<MarkPackageExceptionRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
})
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type PackagesMarkInTransitParams = (InputValue<MarkPackageInTransitRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_delivery_at"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
})
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type PackagesMarkOutForDeliveryParams = (InputValue<MarkPackageOutForDeliveryRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_delivery_at"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
})
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type PackagesMarkPackedParams = (InputValue<MarkPackagePackedRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
})
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type PackagesMarkReturnedParams = (InputValue<MarkPackageReturnedRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
})
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type PackagesMarkShippedParams = (InputValue<MarkPackageShippedRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "carrier"?: never;
    "expected_delivery_at"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
    "service_code"?: never;
    "tracking_number"?: never;
    "tracking_url"?: never;
})
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type PackagesUpdateItemParams = (InputValue<UpdatePackageItemRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type PackagesUpdateParams = (InputValue<UpdatePackageRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type PackagesVoidParams = (InputValue<VoidPackageRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
})
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
/** An application that merchants can authorize to access their accounts. */
export type PartnerApp = {
    /**
     * Every Flint scope the app can hold: the union of required_scopes across the manifest. An
     * install grants only the scopes of the permissions the merchant approves. [] (Value): string.
     */
    "allowed_scopes": Array<string>;
    /**
     * Default API version for requests without a Flint-Version header. Shared across live and test
     * environments.
     */
    "api_version": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "api_version_changed_at"?: string;
    /** Previous API version, present while a supported rollback is available. */
    "api_version_previous"?: string;
    /**
     * When the 72-hour rollback offer expires. Explicit changes to any supported version remain
     * available afterward. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "api_version_rollback_expires_at"?: string;
    /**
     * Public identifier the app sends as client_id in OAuth authorization and token requests.
     * Doesn't change. Example: "fpc_00112233445566778899aabbccddeeff".
     */
    "client_id": string;
    /**
     * Whether the app can authenticate with a client secret. When false, it authenticates with a
     * registered credential.
     */
    "client_secret_enabled": boolean;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "client_secret_last_used_at": string | null;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * IDs of the permissions requested when an authorization request sends no scope. Defaults to
     * every permission in the manifest that isn't optional. [] (Value): string.
     */
    "default_requested_permissions": Array<string>;
    /**
     * Present only while a change to merchant_action_url or platform_profile.website_url is
     * waiting to move routing to another registrable domain; omitted otherwise. url is the
     * previous destination emails still use, and expires_at is when routing switches to the
     * current merchant_action_url. While the app had no merchant action URL before the change,
     * this is Flint's own page. The destination merchant emails keep using while a move to another
     * registrable domain is pending.
     */
    "merchant_action_routing"?: PartnerAppMerchantActionRouting;
    /**
     * Where Flint sends an owner of a merchant this app created through a merchant signup when an
     * email asks them to act, such as to finish verification. Flint adds `flint_*` query
     * parameters. Setting it requests the `create_merchants` platform capability, which merchant
     * signups need. Absent until set. Format: uri. minLength: 1. maxLength: 2048. pattern:
     * ^https://. Example: "https://example.com/receipt".
     */
    "merchant_action_url"?: string;
    /** The app's name, shown to merchants on the consent screen. */
    "name": string;
    /**
     * Unique identifier for this partner app, prefixed `papp_`. Example:
     * "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id": string;
    /**
     * The app's declaration that its owner sends splits of the payments it collects to sellers
     * that install the app. Every authorization of the app asks the merchant to approve receiving
     * split funds under these seller terms, and the environment grant records the approval.
     * Declaring it requests the payment_splits platform capability, which live splits need. Absent
     * when the app sends no splits. The app's declaration that its owner sends splits of the
     * payments it collects to sellers: merchants that installed the app and approved receiving
     * split funds from it. Merchants see it on the consent screen.
     */
    "payment_splits"?: PartnerAppPaymentSplits;
    /**
     * Permissions the app can request from merchants. Each lists the Flint scopes it grants. []
     * (Value): {@link PartnerAppPermissionManifestEntry}. One permission a partner app can
     * request, with a title, a description, and the Flint scopes it grants.
     */
    "permission_manifest": Array<PartnerAppPermissionManifestEntry>;
    /**
     * The app's platform onboarding: status, outstanding requirements, platform capabilities,
     * terms acceptance, and once Flint approves or limits it, the platform's limits and reserve.
     * The app's platform onboarding. Platform capabilities apply in live mode only; test mode
     * never checks them. requirements and capability readiness that depend on the owning
     * merchant's live onboarding are read when Flint serves the app, so a change there alone
     * doesn't advance the app's version or send a partner_app event.
     */
    "platform": PartnerAppPlatform;
    /**
     * The most a platform fee can take from one payment the app creates with a partner app token.
     * Merchants see it on the consent screen and approve it for each mode they install. Absent
     * when the app charges no platform fees. The most a platform fee can take from one payment.
     * The largest platform fee on a payment is percent of the amount it collects, rounded half up
     * to the minor unit, plus the currency's fixed part if it has one, and never more than the
     * currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on
     * a 100.00 USD payment. A currency without a maximum can't carry a platform fee.
     */
    "platform_fee_cap"?: PlatformFeeCap;
    /**
     * What the app told Flint for its platform review. Absent until set. What the platform tells
     * Flint for its review. It is one value: a write replaces it whole.
     */
    "platform_profile"?: PartnerAppPlatformProfile;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "previous_secret_expires_at"?: string;
    /**
     * Redirect URIs the app can use after authorization. Each is an absolute HTTPS URL, or HTTP on
     * localhost or a loopback address, with no fragment. [] (Value): string.
     */
    "redirect_uris": Array<string>;
    /** Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /**
     * Lifecycle actions Flint accepts now: accept_platform_terms while the current platform terms
     * version isn't accepted, `[]` otherwise and for a deleted app. rotate-secret is an operation,
     * not a lifecycle action, so it is never listed. [] enum: "accept_platform_terms". [] (Value):
     * string. Value enum: "accept_platform_terms".
     */
    "supported_actions": Array<"accept_platform_terms" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Starts at 1 and increases by 1 each time the app is updated, its client secret is rotated,
     * its platform terms are accepted, Flint decides on its platform review or changes its
     * platform terms, or it is deleted. Usage in platform.limits.usage and the owning merchant's
     * own onboarding don't change it. Send it as expected_version to apply an update only to the
     * version you read. Format: uint64. minimum: 1.
     */
    "version": number;
};
/** Non-secret metadata for the calling credential, selected by auth_type. */
export type PartnerAppAuthContext = ({
    /**
     * Access level; scoped tokens always have restricted access. Value enum: "full", "read_only",
     * "restricted".
     */
    "access": "full" | "read_only" | "restricted" | (string & {});
    /** Credential type that selects this object's fields. Value enum: "partner_app". */
    "auth_type": "partner_app" | (string & {});
    /**
     * Time the credential expires; absent for keys without an expiry. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /** Merchant the credential acts for. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /** Whether the credential acts in test or live mode. Value enum: "test", "live". */
    "mode": "test" | "live" | (string & {});
    /** ID of the partner app. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV". */
    "partner_app_id": string;
    /**
     * ID of the partner app install. Null when the API key is not linked to an install. Example:
     * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id": string | null;
    /**
     * Sandbox the credential is bound to, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "sandbox_id"?: string;
    /**
     * Current granted API scopes, resolved at request time for full and read_only keys. []
     * (Value): string.
     */
    "scopes": Array<string>;
})
    & ({
    /** Value enum: "restricted". */
    "access"?: unknown;
    /** Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". */
    "partner_app_install_id"?: string;
});
/**
 * An immutable partner app credential, including its authentication status and usage timestamps.
 */
export type PartnerAppCredential = ({
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** A registered JWKS URL and its most recent successful fetch. */
    "jwks_url"?: PartnerAppCredentialJWKSURL;
    /**
     * When the credential last authenticated the app. Updated at most once an hour, so it can lag
     * the latest use by up to an hour. `null` when the credential has never been used. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "last_used_at": string | null;
    /**
     * Modes this credential can mint partner app tokens for, in the order live, test. A mint for
     * another mode returns 400 unauthorized_client. Set at creation and never changed. minItems:
     * 1. maxItems: 2. uniqueItems: true. [] enum: "live", "test". [] (Value): string. Value enum:
     * "live", "test".
     */
    "modes": Array<"live" | "test" | (string & {})>;
    /** Name given to the credential when it was created. `null` when it has no name. */
    "name": string | null;
    /**
     * Unique identifier for this partner app credential, prefixed `pacr_`. Example:
     * "pacr_01KEZF7C005RDK44XFG5WF94BB".
     */
    "partner_app_credential_id": string;
    /** Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV". */
    "partner_app_id": string;
    /** A registered public JSON Web Key and its RFC 7638 SHA-256 thumbprint. */
    "public_key"?: PartnerAppCredentialPublicKey;
    /** Value enum: "active", "removed". */
    "status": "active" | "removed" | (string & {});
    /**
     * Credential type. Currently public_key, jwks_url, or workload_identity. Value enum:
     * "public_key", "jwks_url", "workload_identity".
     */
    "type": "public_key" | "jwks_url" | "workload_identity" | (string & {});
    /** The registered external OIDC issuer, exact subject, audience, and claim conditions. */
    "workload_identity"?: PartnerAppCredentialWorkloadIdentity;
});
/** A registered JWKS URL and its most recent successful fetch. */
export type PartnerAppCredentialJWKSURL = {
    /**
     * Most recent successful fetch of this URL by Flint. Updated at most once per minute. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "last_fetched_at": string;
    "url": string;
};
/**
 * A public HTTPS JSON Web Key Set URL. Flint validates and fetches it before registering the
 * credential.
 */
export type PartnerAppCredentialJWKSURLRequestInput = {
    /**
     * HTTPS URL with a DNS host, optional port 443, no userinfo or fragment, and an optional
     * query. Flint API hosts and nonpublic destinations are rejected. The URL must serve a JSON
     * Web Key Set with 1 to 10 supported public signing keys; unusable keys are ignored and don't
     * count. minLength: 1. maxLength: 2048.
     */
    "url": string;
};
/** A page of `PartnerAppCredential` objects. */
export type PartnerAppCredentialListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PartnerAppCredential}. An immutable partner app credential, including its authentication
     * status and usage timestamps.
     */
    "data": Array<PartnerAppCredential>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A registered public JSON Web Key and its RFC 7638 SHA-256 thumbprint. */
export type PartnerAppCredentialPublicKey = {
    "jwk": {
        [key: string]: unknown;
    };
    /** RFC 7638 SHA-256 JWK thumbprint. */
    "jwk_thumbprint": string;
};
/** The public JSON Web Key to register for client authentication. */
export type PartnerAppCredentialPublicKeyRequest = {
    /** A public JSON Web Key. Private key and symmetric key members are rejected. */
    "jwk": {
        [key: string]: unknown;
    };
};
/** The public JSON Web Key to register for client authentication. */
export type PartnerAppCredentialPublicKeyRequestInput = PartnerAppCredentialPublicKeyRequest;
/** A response containing `PartnerAppCredential` data. */
export type PartnerAppCredentialResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An immutable partner app
     * credential, including its authentication status and usage timestamps.
     */
    "data": PartnerAppCredential;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** The registered external OIDC issuer, exact subject, audience, and claim conditions. */
export type PartnerAppCredentialWorkloadIdentity = {
    "audience": string;
    /**
     * Bounded value array of top-level scalar conditions checked for every assertion. [] (Value):
     * {@link WorkloadIdentityClaimCondition}. A condition matching one top-level scalar claim in
     * the workload's identity token.
     */
    "claim_conditions": Array<WorkloadIdentityClaimCondition>;
    "issuer": string;
    /**
     * The platform Flint recognizes from the issuer. New platform values may be added. Value enum:
     * "generic", "github_actions", "gitlab_ci", "google_cloud", "aws", "azure", "kubernetes",
     * "circleci", "buildkite", "vercel", "fly_io".
     */
    "platform": "generic"
        | "github_actions"
        | "gitlab_ci"
        | "google_cloud"
        | "aws"
        | "azure"
        | "kubernetes"
        | "circleci"
        | "buildkite"
        | "vercel"
        | "fly_io"
        | (string & {});
    "subject": string;
};
/**
 * An external OIDC identity whose subject and claim conditions must match exactly the registered
 * policy.
 */
export type PartnerAppCredentialWorkloadIdentityRequest = {
    /**
     * Token audience. Defaults to Flint's configured issuer URL when omitted. minLength: 1.
     * maxLength: 255.
     */
    "audience"?: string;
    /**
     * Bounded value array of at most 10 top-level scalar claim conditions. Defaults to []. A glob
     * requires an exact condition; shared issuers require tenant pinning. maxItems: 10.
     * uniqueItems: true. [] (Value): {@link WorkloadIdentityClaimConditionRequest}. A condition to
     * match one top-level scalar claim in the workload's identity token. Omitted match defaults to
     * exact.
     */
    "claim_conditions"?: Array<WorkloadIdentityClaimConditionRequest>;
    /**
     * Immutable public HTTPS issuer with a DNS host, optional port 443, and no userinfo, query, or
     * fragment. Compared exactly. Must publish valid OIDC discovery metadata. minLength: 1.
     * maxLength: 255.
     */
    "issuer": string;
    /**
     * Exact token subject. Google Cloud subjects must be numeric. minLength: 1. maxLength: 1024.
     */
    "subject": string;
};
/**
 * An external OIDC identity whose subject and claim conditions must match exactly the registered
 * policy.
 */
export type PartnerAppCredentialWorkloadIdentityRequestInput = {
    /**
     * Token audience. Defaults to Flint's configured issuer URL when omitted. minLength: 1.
     * maxLength: 255.
     */
    "audience"?: string;
    /**
     * Bounded value array of at most 10 top-level scalar claim conditions. Defaults to []. A glob
     * requires an exact condition; shared issuers require tenant pinning. maxItems: 10.
     * uniqueItems: true. [] (Value): {@link WorkloadIdentityClaimConditionRequestInput}. A
     * condition to match one top-level scalar claim in the workload's identity token. Omitted
     * match defaults to exact.
     */
    "claim_conditions"?: Array<WorkloadIdentityClaimConditionRequestInput>;
    /**
     * Immutable public HTTPS issuer with a DNS host, optional port 443, and no userinfo, query, or
     * fragment. Compared exactly. Must publish valid OIDC discovery metadata. minLength: 1.
     * maxLength: 255.
     */
    "issuer": string;
    /**
     * Exact token subject. Google Cloud subjects must be numeric. minLength: 1. maxLength: 1024.
     */
    "subject": string;
};
/** A merchant's authorization of a partner application. */
export type PartnerAppInstall = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     *  [] (Value): {@link PartnerEnvironmentGrant}. A partner application's authorization to
     * access an environment.
     */
    "environment_grants"?: Array<PartnerEnvironmentGrant>;
    /** Example: "usr_01KEZF7C00YC8757ZYP9727JM0". */
    "installed_by_user_id"?: string;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * The merchant signup that created the merchant and this install, when one did. The installing
     * merchant reads it too. A merchant has at most one such install. It stays after a revoke, as
     * history, but Flint's emails lead to the app only until the install's first revoke. Example:
     * "msu_01KEZF7C00SRGYRMBPKRKW8V9J".
     */
    "merchant_signup_id"?: string;
    /** Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV". */
    "partner_app_id": string;
    /**
     * Unique identifier for this partner app install, prefixed `pinst_`. Example:
     * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id": string;
    /** The app’s current name. */
    "partner_app_name": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "revoked_at"?: string;
    /** Value enum: "merchant", "partner_app". */
    "revoked_by"?: "merchant" | "partner_app" | (string & {});
    /** Example: "usr_01KEZF7C00YC8757ZYP9727JM0". */
    "revoked_by_user_id"?: string;
    /** Value enum: "pending_exchange", "active", "revoked". */
    "status": "pending_exchange" | "active" | "revoked" | (string & {});
    /**
     * Lifecycle actions Flint accepts now. Revoke is accepted for pending and active installations
     * and returns the current installation when it is already revoked. [] enum: "revoke". []
     * (Value): string. Value enum: "revoke".
     */
    "supported_actions": Array<"revoke" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
};
export type PartnerAppInstallCreatedEvent = ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "environment_grants"?: Array<PartnerEnvironmentGrant>;
            "installed_by_user_id"?: string;
            "merchant_id": string;
            "merchant_signup_id"?: string;
            "partner_app_id": string;
            "partner_app_install_id": string;
            "partner_app_name": string;
            "revoked_at"?: string;
            "revoked_by"?: "merchant" | "partner_app" | (string & {});
            "revoked_by_user_id"?: string;
            "status": "pending_exchange" | "active" | "revoked" | (string & {});
            "supported_actions": Array<"revoke" | (string & {})>;
            "updated_at": string;
        };
    };
    "event_source"?: "partner_app" | (string & {});
    "event_type"?: "partner_app_install.created";
    "source"?: {
        "merchant_id": string;
        "partner_app_install_id": string;
    };
})
    & {
    "event_type": "partner_app_install.created";
});
/** A page of `PartnerAppInstall` objects. */
export type PartnerAppInstallListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PartnerAppInstall}. A merchant's authorization of a partner application.
     */
    "data": Array<PartnerAppInstall>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type PartnerAppInstallPermissionsUpdatedEvent = ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "environment_grants"?: Array<PartnerEnvironmentGrant>;
            "installed_by_user_id"?: string;
            "merchant_id": string;
            "merchant_signup_id"?: string;
            "partner_app_id": string;
            "partner_app_install_id": string;
            "partner_app_name": string;
            "revoked_at"?: string;
            "revoked_by"?: "merchant" | "partner_app" | (string & {});
            "revoked_by_user_id"?: string;
            "status": "pending_exchange" | "active" | "revoked" | (string & {});
            "supported_actions": Array<"revoke" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<PartnerAppInstall>;
    };
    "event_source"?: "partner_app" | (string & {});
    "event_type"?: "partner_app_install.permissions_updated";
    "source"?: {
        "merchant_id": string;
        "partner_app_install_id": string;
    };
})
    & {
    "event_type": "partner_app_install.permissions_updated";
});
/** A response containing `PartnerAppInstall` data. */
export type PartnerAppInstallResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A merchant's
     * authorization of a partner application.
     */
    "data": PartnerAppInstall;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type PartnerAppInstallRevokedEvent = ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "environment_grants"?: Array<PartnerEnvironmentGrant>;
            "installed_by_user_id"?: string;
            "merchant_id": string;
            "merchant_signup_id"?: string;
            "partner_app_id": string;
            "partner_app_install_id": string;
            "partner_app_name": string;
            "revoked_at"?: string;
            "revoked_by"?: "merchant" | "partner_app" | (string & {});
            "revoked_by_user_id"?: string;
            "status": "pending_exchange" | "active" | "revoked" | (string & {});
            "supported_actions": Array<"revoke" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<PartnerAppInstall>;
    };
    "event_source"?: "partner_app" | (string & {});
    "event_type"?: "partner_app_install.revoked";
    "source"?: {
        "merchant_id": string;
        "partner_app_install_id": string;
    };
})
    & {
    "event_type": "partner_app_install.revoked";
});
export type PartnerAppInstallUpdatedEvent = ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "environment_grants"?: Array<PartnerEnvironmentGrant>;
            "installed_by_user_id"?: string;
            "merchant_id": string;
            "merchant_signup_id"?: string;
            "partner_app_id": string;
            "partner_app_install_id": string;
            "partner_app_name": string;
            "revoked_at"?: string;
            "revoked_by"?: "merchant" | "partner_app" | (string & {});
            "revoked_by_user_id"?: string;
            "status": "pending_exchange" | "active" | "revoked" | (string & {});
            "supported_actions": Array<"revoke" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<PartnerAppInstall>;
    };
    "event_source"?: "partner_app" | (string & {});
    "event_type"?: "partner_app_install.updated";
    "source"?: {
        "merchant_id": string;
        "partner_app_install_id": string;
    };
})
    & {
    "event_type": "partner_app_install.updated";
});
/**
 * The connected app install and the API keys and webhook endpoints ended by this request. A
 * merchant's authorization of a partner application.
 */
export type PartnerAppInstallWithEndedAccess = ({})
    & (Exclude<PartnerAppInstall & object, readonly unknown[]>)
    & ({
    /**
     * Webhook endpoints this request deleted because they were linked to this install. Sandbox
     * endpoints stop receiving events immediately and are removed within seconds. Empty when no
     * endpoints ended. maxItems: 50. [] (Value): string. pattern: ^whep_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "whep_01KEZF7C006FXYTAJRZCGCBJTN".
     */
    "deleted_webhook_endpoint_ids": Array<string>;
    /**
     * API keys this request revoked because they were linked to this install, live keys first.
     * Empty when no keys ended or a previous request already revoked them. maxItems: 50. []
     * (Value): string. pattern: ^key_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "key_01KEZF7C008CTC2G5V6J08M6S7".
     */
    "revoked_api_key_ids": Array<string>;
});
/** A partner app install revoke result and request metadata. */
export type PartnerAppInstallWithEndedAccessResponse = {
    /**
     * The connected app install and the linked API key and webhook endpoint IDs ended by this
     * revoke request. The connected app install and the API keys and webhook endpoints ended by
     * this request. A merchant's authorization of a partner application.
     */
    "data": PartnerAppInstallWithEndedAccess;
    /**
     * Response metadata, including the API version, trace ID, warnings, and whether this result
     * was replayed, when present. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, useful when contacting Flint support. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type PartnerAppInstallsListParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by app ID. pattern: ^papp_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: InputValue<string>;
    /**
     * Filter by install status. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "pending_exchange", "active", "revoked". Value enum: "pending_exchange",
     * "active", "revoked". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "pending_exchange", "active", "revoked". anyOf[1][] (Value): string. Value enum:
     * "pending_exchange", "active", "revoked". anyOf[2] (Value): string. Value enum:
     * "pending_exchange", "active", "revoked".
     */
    "status"?: InputValue<("pending_exchange" | "active" | "revoked") | readonly ("pending_exchange" | "active" | "revoked")[]>;
};
export type PartnerAppInstallsRevokeParams = {};
/** A page of `PartnerApp` objects. */
export type PartnerAppListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PartnerApp}. An application that merchants can authorize to access their accounts.
     */
    "data": Array<PartnerApp>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * The destination merchant emails keep using while a move to another registrable domain is
 * pending.
 */
export type PartnerAppMerchantActionRouting = {
    /**
     * When routing switches to the current merchant_action_url. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * The previous merchant action URL that Flint's merchant emails still use, and whose host code
     * emails still show. While the app had no merchant action URL before the change, this is
     * Flint's own page.
     */
    "url": string;
};
/**
 * An installed merchant's payments and payouts readiness in one environment, summarized for the
 * partner app's owner.
 */
export type PartnerAppMerchantReadiness = {
    /**
     * How many distinct requirements in the merchant's `readiness.requirements.currently_due` and
     * `past_due` are open. 0 when nothing is due now. Read the merchant with a partner app token
     * in this grant's mode for the requirement names. Format: int64. minimum: 0.
     */
    "blocking_requirement_count": number;
    /**
     * When Flint last observed the merchant's account, which the statuses come from. The
     * merchant's own `readiness.observed_at` can be later, because it also covers capability
     * observations. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "observed_at": string;
    /**
     * Whether the merchant can take payments in this environment, with the `status` and
     * `status_reason` of `readiness.payments` on the merchant. The status of one readiness area
     * and the reason for it, as on the merchant's `readiness`.
     */
    "payments": PartnerAppMerchantReadinessAxis;
    /**
     * Whether the merchant can receive payouts in this environment, with the `status` and
     * `status_reason` of `readiness.payouts` on the merchant. The status of one readiness area and
     * the reason for it, as on the merchant's `readiness`.
     */
    "payouts": PartnerAppMerchantReadinessAxis;
};
/** The status of one readiness area and the reason for it, as on the merchant's `readiness`. */
export type PartnerAppMerchantReadinessAxis = {
    /**
     * Whether this area works now, with the same value as on the merchant's `readiness`. Value
     * enum: "ready", "pending", "blocked", "not_requested", "not_available".
     */
    "status": "ready" | "pending" | "blocked" | "not_requested" | "not_available" | (string & {});
    /**
     * Why the status isn't `ready`. Absent when the status is `ready` or `not_requested`. Value
     * enum: "provisioning", "onboarding_not_started", "requirements_due", "requirements_past_due",
     * "pending_verification", "account_rejected", "disabled_by_platform_policy",
     * "billing_suspended", "platform_review", "processing_not_enabled",
     * "platform_funding_unavailable", "tax_category_required", "service_unavailable",
     * "payment_option_access_not_provisioned", "payment_option_activation_pending",
     * "payment_option_not_in_plan", "payment_option_not_available", "capability_not_active",
     * "other".
     */
    "status_reason"?: "provisioning"
        | "onboarding_not_started"
        | "requirements_due"
        | "requirements_past_due"
        | "pending_verification"
        | "account_rejected"
        | "disabled_by_platform_policy"
        | "billing_suspended"
        | "platform_review"
        | "processing_not_enabled"
        | "platform_funding_unavailable"
        | "tax_category_required"
        | "service_unavailable"
        | "payment_option_access_not_provisioned"
        | "payment_option_activation_pending"
        | "payment_option_not_in_plan"
        | "payment_option_not_available"
        | "capability_not_active"
        | "other"
        | (string & {});
};
/**
 * The app's declaration that its owner sends splits of the payments it collects to sellers:
 * merchants that installed the app and approved receiving split funds from it. Merchants see it on
 * the consent screen.
 */
export type PartnerAppPaymentSplits = {
    /**
     * The marketplace's terms for its sellers, as an HTTPS URL of at most 2,048 characters. The
     * consent screen links it. Format: uri. maxLength: 2048. pattern: ^https://. Example:
     * "https://example.com/receipt".
     */
    "seller_terms_url": string;
};
