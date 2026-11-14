import type {
    InventoryAdjustmentConditionChangeLineRequestInput,
    InventoryAdjustmentSetLineRequest,
    InventoryAdjustmentSetLineRequestInput,
    InventoryAdjustmentQuantityLineRequest,
    InventoryAdjustmentQuantityLineRequestInput,
    InventoryAllocationConfigurationValue,
    InventoryAllocationPolicyConfigurationRequestInput,
    InventoryBackorderPolicyRequest
} from './types-28.js';
import type {
    InventorySourceSystemRequestInput,
    InventorySourceSystemRequest,
    InventoryReservationOwnerRequest,
    InventoryRoutingDemand,
    InventoryRoutingSourceRequest,
    InventoryReservationOwnerRequestInput,
    InventoryRoutingDemandInput,
    InventoryRoutingSourceRequestInput
} from './types-30.js';
import type { CreateInventoryAdjustmentConditionChangeRequest, CreateInlineModifierGroupRequestInput } from './types-9.js';
import type { MetadataMap, MetadataRequestInput, ModifierOverride, ModifierOverrideRequestInput } from './types-38.js';
import type { InventoryReceiptLineRequest, InventoryReceiptLineRequestInput } from './types-29.js';
import type {
    InventoryTransferLineRequest,
    InventoryTransferLineRequestInput,
    InvoiceCollectionRequest,
    InvoiceCollectionRequestInput
} from './types-31.js';
import type { MoneyValue, MoneyValueInput } from './types-39.js';
import type { InvoiceLateFeePolicy, InvoiceLateFeePolicyRequestInput } from './types-32.js';
import type {
    InvoicePaymentTermCalculation,
    InvoicePaymentTermCalculationRequestInput,
    InvoicePaymentDueRequest,
    InvoicePaymentDueRequestInput
} from './types-33.js';
import type {
    CreateOrderDiscount,
    CreateOrderLineItemRequest,
    CreateOrderTip,
    CreateOrderDiscountInput,
    CreateOrderLineItemRequestInput,
    CreateOrderTipInput
} from './types-11.js';
import type { OrderDeliveryDestinationRequest, OrderDeliveryDestinationRequestInput } from './types-40.js';
import type { OrderTaxRequest, OrderTaxRequestInput } from './types-42.js';
import type { AddressRequest, AddressRequestInput } from './types-0.js';
import type { InvoiceScheduleEntryWrite, InvoiceScheduleEntryWriteInput } from './types-34.js';
import type { LocationCoordinate, LocationCoordinateRequestInput } from './types-35.js';
import type { CheckoutRedirects, CheckoutRedirectsRequestInput } from './types-6.js';
import type {
    SubscriptionServiceLocationRequest,
    SubscriptionSwapPreviewRequest,
    SubscriptionSwapPreviewRequestInput,
    SubscriptionQuantityChangeLineItemRequest,
    SubscriptionQuantityChangeLineItemRequestInput
} from './types-63.js';
import type {
    SubscriptionDeliveryDestinationRequestInput,
    SubscriptionDeliveryRequest,
    SubscriptionDeliveryRequestInput
} from './types-61.js';
import type { MerchantSignupOwner, MerchantSignupOwnerRequestInput } from './types-37.js';
import type { TextModifierConfigRequest } from './types-65.js';
/** The `condition_changed` variant of `CreateInventoryAdjustmentRequest`. */
export type CreateInventoryAdjustmentConditionChangeRequestInput = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Stock changes, one for each inventory item and Location, from 1 to 100 lines. minItems: 1.
     * maxItems: 100. [] (Value): {@link InventoryAdjustmentConditionChangeLineRequestInput}. One
     * line of an inventory condition change: moves a `quantity` of an item at a Location from one
     * condition to another.
     */
    "lines": Array<InventoryAdjustmentConditionChangeLineRequestInput>;
    /**
     * Free-text note explaining the change. Required when `reason` is `correction`. minLength: 1.
     */
    "note"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Why the stock changed. It decides which fields each line takes. Value enum:
     * "condition_changed".
     */
    "reason": "condition_changed";
    /**
     * System the change came from, such as a point-of-sale or warehouse system. The source system
     * you report for an inventory event, such as manual, pos, wms, erp, or other, with your
     * identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequestInput;
});
/** The `correction` variant of `CreateInventoryAdjustmentRequest`. */
export type CreateInventoryAdjustmentCorrectionRequest = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Stock changes, one for each inventory item and Location, from 1 to 100 lines. minItems: 1.
     * maxItems: 100. [] (Value): {@link InventoryAdjustmentSetLineRequest}. One line of an
     * inventory adjustment that sets absolute quantities for an item at a Location. Omitted
     * quantities stay unchanged.
     */
    "lines": Array<InventoryAdjustmentSetLineRequest>;
    /**
     * Free-text note explaining the change. Required when `reason` is `correction`. minLength: 1.
     * pattern: \S.
     */
    "note": string;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string;
    /** Why the stock changed. It decides which fields each line takes. Value enum: "correction". */
    "reason": "correction" | (string & {});
    /**
     * System the change came from, such as a point-of-sale or warehouse system. The source system
     * you report for an inventory event, such as manual, pos, wms, erp, or other, with your
     * identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequest;
})
    & (({
    /**
     * System the change came from, such as a point-of-sale or warehouse system. type (Required):
     * string. Value enum: "pos", "wms", "erp", "other".
     */
    "source_system": null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Value enum: "pos", "wms", "erp", "other". */
        "type": "pos" | "wms" | "erp" | "other" | (string & {});
        "external_source_id": unknown;
    });
})
    | ({
    /**
     * Stock changes, one for each inventory item and Location, from 1 to 100 lines. [] (Value):
     * any.
     */
    "lines"?: unknown;
})
    | (Record<string, unknown>));
/** The `correction` variant of `CreateInventoryAdjustmentRequest`. */
export type CreateInventoryAdjustmentCorrectionRequestInput = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Stock changes, one for each inventory item and Location, from 1 to 100 lines. minItems: 1.
     * maxItems: 100. [] (Value): {@link InventoryAdjustmentSetLineRequestInput}. One line of an
     * inventory adjustment that sets absolute quantities for an item at a Location. Omitted
     * quantities stay unchanged.
     */
    "lines": Array<InventoryAdjustmentSetLineRequestInput>;
    /**
     * Free-text note explaining the change. Required when `reason` is `correction`. minLength: 1.
     * pattern: \S.
     */
    "note": string;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string | globalThis.Date;
    /** Why the stock changed. It decides which fields each line takes. Value enum: "correction". */
    "reason": "correction";
    /**
     * System the change came from, such as a point-of-sale or warehouse system. The source system
     * you report for an inventory event, such as manual, pos, wms, erp, or other, with your
     * identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequestInput;
})
    & (({
    /**
     * System the change came from, such as a point-of-sale or warehouse system. type (Required):
     * string. Value enum: "pos", "wms", "erp", "other".
     */
    "source_system": null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Value enum: "pos", "wms", "erp", "other". */
        "type": "pos" | "wms" | "erp" | "other";
        "external_source_id": unknown;
    });
})
    | ({
    /**
     * Stock changes, one for each inventory item and Location, from 1 to 100 lines. [] (Value):
     * any.
     */
    "lines"?: unknown;
}));
/** The `counted` variant of `CreateInventoryAdjustmentRequest`. */
export type CreateInventoryAdjustmentCountedRequest = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Stock changes, one for each inventory item and Location, from 1 to 100 lines. minItems: 1.
     * maxItems: 100. [] (Value): {@link InventoryAdjustmentSetLineRequest}. One line of an
     * inventory adjustment that sets absolute quantities for an item at a Location. Omitted
     * quantities stay unchanged.
     */
    "lines": Array<InventoryAdjustmentSetLineRequest>;
    /**
     * Free-text note explaining the change. Required when `reason` is `correction`. minLength: 1.
     */
    "note"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string;
    /** Why the stock changed. It decides which fields each line takes. Value enum: "counted". */
    "reason": "counted" | (string & {});
    /**
     * System the change came from, such as a point-of-sale or warehouse system. The source system
     * you report for an inventory event, such as manual, pos, wms, erp, or other, with your
     * identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequest;
})
    & (({
    /**
     * System the change came from, such as a point-of-sale or warehouse system. type (Required):
     * string. Value enum: "pos", "wms", "erp", "other".
     */
    "source_system": null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Value enum: "pos", "wms", "erp", "other". */
        "type": "pos" | "wms" | "erp" | "other" | (string & {});
        "external_source_id": unknown;
    });
})
    | ({
    /**
     * Stock changes, one for each inventory item and Location, from 1 to 100 lines. [] (Value):
     * any.
     */
    "lines"?: unknown;
})
    | (Record<string, unknown>));
/** The `counted` variant of `CreateInventoryAdjustmentRequest`. */
export type CreateInventoryAdjustmentCountedRequestInput = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Stock changes, one for each inventory item and Location, from 1 to 100 lines. minItems: 1.
     * maxItems: 100. [] (Value): {@link InventoryAdjustmentSetLineRequestInput}. One line of an
     * inventory adjustment that sets absolute quantities for an item at a Location. Omitted
     * quantities stay unchanged.
     */
    "lines": Array<InventoryAdjustmentSetLineRequestInput>;
    /**
     * Free-text note explaining the change. Required when `reason` is `correction`. minLength: 1.
     */
    "note"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string | globalThis.Date;
    /** Why the stock changed. It decides which fields each line takes. Value enum: "counted". */
    "reason": "counted";
    /**
     * System the change came from, such as a point-of-sale or warehouse system. The source system
     * you report for an inventory event, such as manual, pos, wms, erp, or other, with your
     * identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequestInput;
})
    & (({
    /**
     * System the change came from, such as a point-of-sale or warehouse system. type (Required):
     * string. Value enum: "pos", "wms", "erp", "other".
     */
    "source_system": null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Value enum: "pos", "wms", "erp", "other". */
        "type": "pos" | "wms" | "erp" | "other";
        "external_source_id": unknown;
    });
})
    | ({
    /**
     * Stock changes, one for each inventory item and Location, from 1 to 100 lines. [] (Value):
     * any.
     */
    "lines"?: unknown;
}));
/**
 * The `loss` variant of `CreateInventoryAdjustmentRequest`. The `received` variant of
 * `CreateInventoryAdjustmentRequest`. The `returned` variant of
 * `CreateInventoryAdjustmentRequest`. The `sold` variant of `CreateInventoryAdjustmentRequest`.
 * The `theft` variant of `CreateInventoryAdjustmentRequest`.
 */
export type CreateInventoryAdjustmentQuantityRequest = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Stock changes, one for each inventory item and Location, from 1 to 100 lines. minItems: 1.
     * maxItems: 100. [] (Value): {@link InventoryAdjustmentQuantityLineRequest}. One line of an
     * inventory quantity adjustment: a `quantity` of an item at a Location, in the given
     * `condition`.
     */
    "lines": Array<InventoryAdjustmentQuantityLineRequest>;
    /**
     * Free-text note explaining the change. Required when `reason` is `correction`. minLength: 1.
     */
    "note"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string;
    /**
     * Why the stock changed. It decides which fields each line takes. Value enum: "received",
     * "returned", "sold", "theft", "loss".
     */
    "reason": "received" | "returned" | "sold" | "theft" | "loss" | (string & {});
    /**
     * System the change came from, such as a point-of-sale or warehouse system. The source system
     * you report for an inventory event, such as manual, pos, wms, erp, or other, with your
     * identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequest;
});
/**
 * The `loss` variant of `CreateInventoryAdjustmentRequest`. The `received` variant of
 * `CreateInventoryAdjustmentRequest`. The `returned` variant of
 * `CreateInventoryAdjustmentRequest`. The `sold` variant of `CreateInventoryAdjustmentRequest`.
 * The `theft` variant of `CreateInventoryAdjustmentRequest`.
 */
export type CreateInventoryAdjustmentQuantityRequestInput = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Stock changes, one for each inventory item and Location, from 1 to 100 lines. minItems: 1.
     * maxItems: 100. [] (Value): {@link InventoryAdjustmentQuantityLineRequestInput}. One line of
     * an inventory quantity adjustment: a `quantity` of an item at a Location, in the given
     * `condition`.
     */
    "lines": Array<InventoryAdjustmentQuantityLineRequestInput>;
    /**
     * Free-text note explaining the change. Required when `reason` is `correction`. minLength: 1.
     */
    "note"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Why the stock changed. It decides which fields each line takes. Value enum: "received",
     * "returned", "sold", "theft", "loss".
     */
    "reason": "received" | "returned" | "sold" | "theft" | "loss";
    /**
     * System the change came from, such as a point-of-sale or warehouse system. The source system
     * you report for an inventory event, such as manual, pos, wms, erp, or other, with your
     * identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequestInput;
});
/** The request body for: Create inventory adjustment. */
export type CreateInventoryAdjustmentRequest = ((CreateInventoryAdjustmentQuantityRequest)
    | (CreateInventoryAdjustmentConditionChangeRequest)
    | (CreateInventoryAdjustmentCountedRequest)
    | (CreateInventoryAdjustmentCorrectionRequest)
    | (Record<string, unknown>));
/** The request body for: Create inventory adjustment. */
export type CreateInventoryAdjustmentRequestInput = ((CreateInventoryAdjustmentQuantityRequestInput)
    | (CreateInventoryAdjustmentConditionChangeRequestInput)
    | (CreateInventoryAdjustmentCountedRequestInput)
    | (CreateInventoryAdjustmentCorrectionRequestInput));
/** The request body for: Create inventory allocation policy. */
export type CreateInventoryAllocationPolicyRequest = {
    /**
     * Routing rules: ranked groups of Locations, whether demand can be split, and the most
     * Locations one assignment may use. Routing rules for an inventory allocation policy: ranked
     * groups of Locations, whether demand can be split, and how many Locations one assignment may
     * use.
     */
    "configuration": InventoryAllocationConfigurationValue;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Merchant-facing policy name. minLength: 1. */
    "name": string;
    /**
     * Status the allocation policy starts in. Defaults to `active`. Default: "active". Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
};
/** The request body for: Create inventory allocation policy. */
export type CreateInventoryAllocationPolicyRequestInput = {
    /**
     * Routing rules: ranked groups of Locations, whether demand can be split, and the most
     * Locations one assignment may use. Routing rules for an inventory allocation policy: ranked
     * groups of Locations, whether demand can be split, and how many Locations one assignment may
     * use.
     */
    "configuration": InventoryAllocationPolicyConfigurationRequestInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Merchant-facing policy name. minLength: 1. */
    "name": string;
    /**
     * Status the allocation policy starts in. Defaults to `active`. Default: "active". Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive";
};
/** Patch object: fields you send are applied, fields you omit are unchanged. minProperties: 1. */
export type CreateInventoryBackorderPolicyRequestInput = {
    /** Whether this inventory item allows backorders. Default: false. */
    "enabled"?: boolean;
    /**
     * Expected shipping date. Send null to clear it. Format: date. minLength: 1. pattern:
     * ^[0-9]{4}-[0-9]{2}-[0-9]{2}$. Example: "2026-08-02".
     */
    "expected_ship_date"?: string | null;
    /**
     * Maximum units on backorder across the item's levels. Send null for no cap. Format: int64.
     * minimum: 1. maximum: 9007199254740991.
     */
    "limit_quantity"?: number | null;
};
/** The request body for: Create inventory count. */
export type CreateInventoryCountRequest = {
    /**
     * IDs of the inventory items to count at the Location, from 1 to 100. minItems: 1. maxItems:
     * 100. [] (Value): string. minLength: 1. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_ids": Array<string>;
    /**
     * ID of the Location whose stock is counted. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
};
/** The request body for: Create inventory count. */
export type CreateInventoryCountRequestInput = CreateInventoryCountRequest;
/** The request body for: Create inventory item. */
export type CreateInventoryItemRequest = {
    /**
     * Backorder settings to apply to this inventory item. Patch object: fields you send are
     * applied, fields you omit are unchanged. minProperties: 1.
     */
    "backorder"?: InventoryBackorderPolicyRequest;
    /** Optional searchable barcode. minLength: 1. */
    "barcode"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Merchant-facing inventory item name. minLength: 1. */
    "name": string;
    /** Optional searchable stock-keeping unit. minLength: 1. */
    "sku"?: string;
    /**
     * Status the inventory item starts in. Defaults to `active`. Default: "active". Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
};
/** The request body for: Create inventory item. */
export type CreateInventoryItemRequestInput = {
    /**
     * Backorder settings to apply to this inventory item. Patch object: fields you send are
     * applied, fields you omit are unchanged. minProperties: 1.
     */
    "backorder"?: CreateInventoryBackorderPolicyRequestInput;
    /** Optional searchable barcode. minLength: 1. */
    "barcode"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Merchant-facing inventory item name. minLength: 1. */
    "name": string;
    /** Optional searchable stock-keeping unit. minLength: 1. */
    "sku"?: string;
    /**
     * Status the inventory item starts in. Defaults to `active`. Default: "active". Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive";
};
/**
 * Record returned stock against consumed inventory reservations. For supplier deliveries, use POST
 * /v1/inventory-adjustments with reason: received.
 */
export type CreateInventoryReceiptRequest = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Received lines, each with the item, receiving Location, quantity, and disposition. []
     * (Value): {@link InventoryReceiptLineRequest}. One line of an inventory receipt you supply: a
     * quantity of an item received at a Location with its disposition.
     */
    "lines": Array<InventoryReceiptLineRequest>;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string;
    /**
     * System the change came from, such as a point-of-sale or warehouse system. The source system
     * you report for an inventory event, such as manual, pos, wms, erp, or other, with your
     * identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequest;
});
/**
 * Record returned stock against consumed inventory reservations. For supplier deliveries, use POST
 * /v1/inventory-adjustments with reason: received.
 */
export type CreateInventoryReceiptRequestInput = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Received lines, each with the item, receiving Location, quantity, and disposition. []
     * (Value): {@link InventoryReceiptLineRequestInput}. One line of an inventory receipt you
     * supply: a quantity of an item received at a Location with its disposition.
     */
    "lines": Array<InventoryReceiptLineRequestInput>;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string | globalThis.Date;
    /**
     * System the change came from, such as a point-of-sale or warehouse system. The source system
     * you report for an inventory event, such as manual, pos, wms, erp, or other, with your
     * identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequestInput;
});
/** The request body for: Create inventory reservation. */
export type CreateInventoryReservationRequest = {
    /**
     * Items and quantities to reserve. minItems: 1. maxItems: 100. [] (Value): {@link
     * InventoryRoutingDemand}. Stock you ask to reserve for one item: the item and quantity, plus
     * optional Location limits and splitting behavior.
     */
    "demands": Array<InventoryRoutingDemand>;
    /**
     * Hold deadline, after now and at most 24 hours from now. Defaults to 15 minutes after
     * creation. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string;
    /**
     * How Flint chooses the Locations that serve the reservation: one fixed Location, an
     * allocation policy, or a specific policy revision. When omitted, the reservation uses and
     * stores `settings.inventory.default_routing_source`; without that default the request returns
     * `400 INVALID_REQUEST` at `inventory_routing_source`. Where you want inventory routed from: a
     * fixed Location, an inventory allocation policy, or one policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequest;
    /**
     * Who holds the reservation: a `key` you choose, or an order Flint holds the stock for. The
     * owner of a merchant inventory reservation you create: your `key` for what holds the stock.
     */
    "owner": InventoryReservationOwnerRequest;
};
/** The request body for: Create inventory reservation. */
export type CreateInventoryReservationRequestInput = {
    /**
     * Items and quantities to reserve. minItems: 1. maxItems: 100. [] (Value): {@link
     * InventoryRoutingDemandInput}. Stock you ask to reserve for one item: the item and quantity,
     * plus optional Location limits and splitting behavior.
     */
    "demands": Array<InventoryRoutingDemandInput>;
    /**
     * Hold deadline, after now and at most 24 hours from now. Defaults to 15 minutes after
     * creation. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string | globalThis.Date;
    /**
     * How Flint chooses the Locations that serve the reservation: one fixed Location, an
     * allocation policy, or a specific policy revision. When omitted, the reservation uses and
     * stores `settings.inventory.default_routing_source`; without that default the request returns
     * `400 INVALID_REQUEST` at `inventory_routing_source`. Where you want inventory routed from: a
     * fixed Location, an inventory allocation policy, or one policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequestInput;
    /**
     * Who holds the reservation: a `key` you choose, or an order Flint holds the stock for. The
     * owner of a merchant inventory reservation you create: your `key` for what holds the stock.
     */
    "owner": InventoryReservationOwnerRequestInput;
};
/** The request body for: Create inventory transfer. */
export type CreateInventoryTransferRequest = {
    /**
     * ID of the Location the stock goes to. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "destination_location_id": string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Items to transfer, from 1 to 100 lines. minItems: 1. maxItems: 100. [] (Value): {@link
     * InventoryTransferLineRequest}. One line of an inventory transfer you create: an item and the
     * requested quantity.
     */
    "lines": Array<InventoryTransferLineRequest>;
    /** Free-text note about the transfer. minLength: 1. */
    "note"?: string;
    /**
     * ID of the Location the stock leaves. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "origin_location_id": string;
};
/** The request body for: Create inventory transfer. */
export type CreateInventoryTransferRequestInput = {
    /**
     * ID of the Location the stock goes to. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "destination_location_id": string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Items to transfer, from 1 to 100 lines. minItems: 1. maxItems: 100. [] (Value): {@link
     * InventoryTransferLineRequestInput}. One line of an inventory transfer you create: an item
     * and the requested quantity.
     */
    "lines": Array<InventoryTransferLineRequestInput>;
    /** Free-text note about the transfer. minLength: 1. */
    "note"?: string;
    /**
     * ID of the Location the stock leaves. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "origin_location_id": string;
};
/**
 * Options for issuing an invoice as you create it. `delivery_mode` chooses how the invoice reaches
 * its recipient.
 */
export type CreateInvoiceIssueRequest = {
    /**
     * How the invoice reaches its recipient. Omit it to use merchant_default. Default:
     * "merchant_default". Value enum: "merchant_default", "email", "caller_managed".
     */
    "delivery_mode"?: "merchant_default" | "email" | "caller_managed" | (string & {});
};
/**
 * Options for issuing an invoice as you create it. `delivery_mode` chooses how the invoice reaches
 * its recipient.
 */
export type CreateInvoiceIssueRequestInput = {
    /**
     * How the invoice reaches its recipient. Omit it to use merchant_default. Default:
     * "merchant_default". Value enum: "merchant_default", "email", "caller_managed".
     */
    "delivery_mode"?: "merchant_default" | "email" | "caller_managed";
};
/** The request body for: Create invoice manual payment. */
export type CreateInvoiceManualPaymentRequest = {
    /**
     * Positive amount received outside Flint, in the invoice currency, no more than
     * outstanding_money for an open invoice or written_off_money for an uncollectible invoice.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Expected version of the invoice. Format: int64. minimum: 1. */
    "expected_invoice_version"?: number;
    /** Note about the offline payment, up to 4096 characters. minLength: 1. maxLength: 4096. */
    "note"?: string;
    /**
     * Caller-owned check, wire, or bank reference, stored unmodified. minLength: 1. maxLength:
     * 255.
     */
    "payment_reference"?: string;
    /**
     * When the payment was received. Defaults to now. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "received_at"?: string;
};
/** The request body for: Create invoice manual payment. */
export type CreateInvoiceManualPaymentRequestInput = {
    /**
     * Positive amount received outside Flint, in the invoice currency, no more than
     * outstanding_money for an open invoice or written_off_money for an uncollectible invoice.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /** Expected version of the invoice. Format: int64. minimum: 1. */
    "expected_invoice_version"?: number;
    /** Note about the offline payment, up to 4096 characters. minLength: 1. maxLength: 4096. */
    "note"?: string;
    /**
     * Caller-owned check, wire, or bank reference, stored unmodified. minLength: 1. maxLength:
     * 255.
     */
    "payment_reference"?: string;
    /**
     * When the payment was received. Defaults to now. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "received_at"?: string | globalThis.Date;
};
/** The request body for: Create invoice payment term. */
export type CreateInvoicePaymentTermRequest = {
    /**
     * Rule used to calculate the invoice's due date when it is issued. Required on create; omit it
     * on update to preserve the current rule. How an invoice due date is calculated from payment
     * terms, such as on receipt, net days, or a day of the month.
     */
    "calculation": InvoicePaymentTermCalculation;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * One-time late fee policy for unpaid invoices using this term. Omit it to use no late fee on
     * create or preserve the current policy on update; send null on update to remove it. A late
     * fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and
     * whether Flint applies it automatically.
     */
    "late_fee_policy"?: InvoiceLateFeePolicy;
    /**
     * Name of the payment term shown on invoices. Required on create; omit it on update to
     * preserve the current name. minLength: 1.
     */
    "name": string;
};
/** The request body for: Create invoice payment term. */
export type CreateInvoicePaymentTermRequestInput = {
    /**
     * Rule used to calculate the invoice's due date when it is issued. Required on create; omit it
     * on update to preserve the current rule. How an invoice due date is calculated from payment
     * terms, such as on receipt, net days, or a day of the month.
     */
    "calculation": InvoicePaymentTermCalculationRequestInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * One-time late fee policy for unpaid invoices using this term. Omit it to use no late fee on
     * create or preserve the current policy on update; send null on update to remove it. A late
     * fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and
     * whether Flint applies it automatically.
     */
    "late_fee_policy"?: InvoiceLateFeePolicyRequestInput;
    /**
     * Name of the payment term shown on invoices. Required on create; omit it on update to
     * preserve the current name. minLength: 1.
     */
    "name": string;
};
/**
 * Inline order details for creating an invoice as `quick_pay`: line items, discounts, notes,
 * customer, tip, and inventory routing.
 */
export type CreateInvoiceQuickPayRequest = {
    /** A note to the buyer on the backing order, captured in snapshot.buyer_note. minLength: 1. */
    "buyer_note"?: string;
    /**
     * The customer to bill. The invoice shows their name and billing details, and GET
     * /v1/invoices?customer_id= finds it. minLength: 1. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Where the backing order's items are shipped or delivered, the same as order creation
     * accepts. The delivery destination you set when creating or updating an order, with an
     * address and an optional recipient.
     */
    "delivery_destination"?: OrderDeliveryDestinationRequest;
    /**
     * Discounts to apply to the backing order, in the shape order creation accepts. [] (Value):
     * {@link CreateOrderDiscount}. A discount to apply when creating an order: either a manual
     * discount or a reference to a promotion.
     */
    "discounts"?: Array<CreateOrderDiscount>;
    /** A note for your team on the backing order. Buyer reads leave it out. minLength: 1. */
    "internal_note"?: string;
    /**
     * Where this invoice backing order's tracked demand is routed: a fixed Location, an allocation
     * policy, or an immutable policy revision. Required when any line tracks inventory. Where you
     * want inventory routed from: a fixed Location, an inventory allocation policy, or one policy
     * revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequest;
    /**
     * The items to bill, at least one, in the shape order creation accepts. A custom line without
     * variant_id or bundle_id must set fulfillment.requirement. minItems: 1. [] (Value): {@link
     * CreateOrderLineItemRequest}. A line item to add to an order: a catalog variant, a bundle, or
     * a custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItemRequest>;
    /**
     * A tip to request from the buyer on the backing order. Requested tip expressed as either a
     * flat amount or a percentage. Send exactly one of amount_money or percent.
     */
    "requested_tip"?: CreateOrderTip;
    /**
     * Tax inputs for the backing order, the same as order creation accepts. Validation errors name
     * fields under quick_pay.tax. Tax settings for a new order: whether tax is enabled, its
     * calculation, location, and exemption selection.
     */
    "tax"?: OrderTaxRequest;
};
/**
 * Inline order details for creating an invoice as `quick_pay`: line items, discounts, notes,
 * customer, tip, and inventory routing.
 */
export type CreateInvoiceQuickPayRequestInput = {
    /** A note to the buyer on the backing order, captured in snapshot.buyer_note. minLength: 1. */
    "buyer_note"?: string;
    /**
     * The customer to bill. The invoice shows their name and billing details, and GET
     * /v1/invoices?customer_id= finds it. minLength: 1. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Where the backing order's items are shipped or delivered, the same as order creation
     * accepts. The delivery destination you set when creating or updating an order, with an
     * address and an optional recipient.
     */
    "delivery_destination"?: OrderDeliveryDestinationRequestInput;
    /**
     * Discounts to apply to the backing order, in the shape order creation accepts. [] (Value):
     * {@link CreateOrderDiscountInput}. A discount to apply when creating an order: either a
     * manual discount or a reference to a promotion.
     */
    "discounts"?: Array<CreateOrderDiscountInput>;
    /** A note for your team on the backing order. Buyer reads leave it out. minLength: 1. */
    "internal_note"?: string;
    /**
     * Where this invoice backing order's tracked demand is routed: a fixed Location, an allocation
     * policy, or an immutable policy revision. Required when any line tracks inventory. Where you
     * want inventory routed from: a fixed Location, an inventory allocation policy, or one policy
     * revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequestInput;
    /**
     * The items to bill, at least one, in the shape order creation accepts. A custom line without
     * variant_id or bundle_id must set fulfillment.requirement. minItems: 1. [] (Value): {@link
     * CreateOrderLineItemRequestInput}. A line item to add to an order: a catalog variant, a
     * bundle, or a custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItemRequestInput>;
    /**
     * A tip to request from the buyer on the backing order. Requested tip expressed as either a
     * flat amount or a percentage. Send exactly one of amount_money or percent.
     */
    "requested_tip"?: CreateOrderTipInput;
    /**
     * Tax inputs for the backing order, the same as order creation accepts. Validation errors name
     * fields under quick_pay.tax. Tax settings for a new order: whether tax is enabled, its
     * calculation, location, and exemption selection.
     */
    "tax"?: OrderTaxRequestInput;
};
/** The request body for: Create invoice. */
export type CreateInvoiceRequest = ({
    /**
     * Additional addresses copied on the invoice email and every reminder. [] (Value): string.
     * minLength: 1.
     */
    "cc_emails"?: Array<string>;
    /**
     * How the invoice is collected. Omit it to use merchant_default. The invoice's collection
     * object returns the resolved mode, and you can send it back unchanged on update. How an
     * invoice is collected, used when creating or updating an invoice: a `mode`, an optional saved
     * payment method, and a payment policy.
     */
    "collection"?: InvoiceCollectionRequest;
    /**
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice, and GET /v1/invoices filters on it by exact match. minLength:
     * 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Fine print at the bottom of the invoice and PDF. Omit it to use the invoice settings
     * default_footer. minLength: 1.
     */
    "footer"?: string;
    /**
     * Issue the invoice immediately after creating it. An empty object uses merchant_default
     * delivery. Cannot be combined with a scheduled_issue_at timestamp. Options for issuing an
     * invoice as you create it. `delivery_mode` chooses how the invoice reaches its recipient.
     */
    "issue"?: CreateInvoiceIssueRequest;
    /**
     * Message to the customer, printed on the invoice and PDF. Omit it to use the invoice settings
     * default_memo. minLength: 1.
     */
    "memo"?: string;
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
     * The open order to bill. It must have no payments, refunds, or other active invoice. Send
     * exactly one of order_id or quick_pay. minLength: 1. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * When the invoice is due. Omit it to use merchant_default. The invoice's payment_due object
     * returns the resolved type, and you can send it back unchanged on update. Default:
     * {"type":"merchant_default"}. When an invoice is due, used when creating or updating an
     * invoice: no due date, a calendar date, payment terms, or a default.
     */
    "payment_due"?: InvoicePaymentDueRequest;
    /** The buyer's purchase order number, printed on the invoice and PDF. minLength: 1. */
    "po_number"?: string;
    /**
     * Order details for an invoice with no existing order. Flint creates the backing order from
     * them. Send exactly one of order_id or quick_pay. Inline order details for creating an
     * invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.
     */
    "quick_pay"?: CreateInvoiceQuickPayRequest;
    /**
     * Where Flint emails the invoice and its reminders. Defaults to the linked customer's email
     * when omitted at creation. Send null to leave it unset at creation; PATCH null clears it.
     * Required at issue when delivery resolves to email, and when you schedule the issue.
     * minLength: 1.
     */
    "recipient_email"?: string | null;
    /**
     * Your reference for the invoice, printed on the invoice and PDF. Put the buyer's purchase
     * order number in po_number instead. minLength: 1.
     */
    "reference"?: string;
    /**
     * Where the buyer sends offline payments, printed on the invoice. Omit it to use the invoice
     * settings remit-to address. A complete postal address. State and postal_code are required for
     * US addresses and optional for other countries. Send null or omit line2, state, and
     * postal_code when the address has none.
     */
    "remit_to_address"?: AddressRequest;
    /**
     * Complete draft payment schedule with at most 14 entries. Validation errors identify the
     * entry by index, such as schedule_entries[3].kind. Enum values are case-sensitive and must
     * not contain surrounding whitespace. Omission preserves the current or default schedule; []
     * clears the authored schedule. Null is not accepted. On PATCH, include
     * invoice_schedule_entry_id to retain an entry and expected_version to detect concurrent
     * edits. maxItems: 14. [] (Value): {@link InvoiceScheduleEntryWrite}. One payment schedule
     * entry you supply when creating or updating an invoice. Set its kind, how much it collects,
     * and when it is due.
     */
    "schedule_entries"?: Array<InvoiceScheduleEntryWrite>;
    /**
     * When Flint issues and delivers this draft, as an RFC 3339 timestamp in the future. A
     * scheduled issue delivers by email, so the draft needs recipient_email. Cannot be combined
     * with issue. null is the same as omitting it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "scheduled_issue_at"?: string | null;
    /**
     * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it
     * as written, without timezone conversion. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "service_date"?: string;
    /** Selects the type branch. Value enum: "order", "quick_pay". */
    "type": "order" | "quick_pay" | (string & {});
})
    & ((Exclude<CreateInvoiceRequestOrder & object, readonly unknown[]>)
    | (Exclude<CreateInvoiceRequestQuickPay & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The request body for: Create invoice. */
export type CreateInvoiceRequestInput = ({
    /**
     * Additional addresses copied on the invoice email and every reminder. [] (Value): string.
     * minLength: 1.
     */
    "cc_emails"?: Array<string>;
    /**
     * How the invoice is collected. Omit it to use merchant_default. The invoice's collection
     * object returns the resolved mode, and you can send it back unchanged on update. How an
     * invoice is collected, used when creating or updating an invoice: a `mode`, an optional saved
     * payment method, and a payment policy.
     */
    "collection"?: InvoiceCollectionRequestInput;
    /**
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice, and GET /v1/invoices filters on it by exact match. minLength:
     * 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Fine print at the bottom of the invoice and PDF. Omit it to use the invoice settings
     * default_footer. minLength: 1.
     */
    "footer"?: string;
    /**
     * Issue the invoice immediately after creating it. An empty object uses merchant_default
     * delivery. Cannot be combined with a scheduled_issue_at timestamp. Options for issuing an
     * invoice as you create it. `delivery_mode` chooses how the invoice reaches its recipient.
     */
    "issue"?: CreateInvoiceIssueRequestInput;
    /**
     * Message to the customer, printed on the invoice and PDF. Omit it to use the invoice settings
     * default_memo. minLength: 1.
     */
    "memo"?: string;
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
     * The open order to bill. It must have no payments, refunds, or other active invoice. Send
     * exactly one of order_id or quick_pay. minLength: 1. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * When the invoice is due. Omit it to use merchant_default. The invoice's payment_due object
     * returns the resolved type, and you can send it back unchanged on update. Default:
     * {"type":"merchant_default"}. When an invoice is due, used when creating or updating an
     * invoice: no due date, a calendar date, payment terms, or a default.
     */
    "payment_due"?: InvoicePaymentDueRequestInput;
    /** The buyer's purchase order number, printed on the invoice and PDF. minLength: 1. */
    "po_number"?: string;
    /**
     * Order details for an invoice with no existing order. Flint creates the backing order from
     * them. Send exactly one of order_id or quick_pay. Inline order details for creating an
     * invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.
     */
    "quick_pay"?: CreateInvoiceQuickPayRequestInput;
    /**
     * Where Flint emails the invoice and its reminders. Defaults to the linked customer's email
     * when omitted at creation. Send null to leave it unset at creation; PATCH null clears it.
     * Required at issue when delivery resolves to email, and when you schedule the issue.
     * minLength: 1.
     */
    "recipient_email"?: string | null;
    /**
     * Your reference for the invoice, printed on the invoice and PDF. Put the buyer's purchase
     * order number in po_number instead. minLength: 1.
     */
    "reference"?: string;
    /**
     * Where the buyer sends offline payments, printed on the invoice. Omit it to use the invoice
     * settings remit-to address. A complete postal address. State and postal_code are required for
     * US addresses and optional for other countries. Send null or omit line2, state, and
     * postal_code when the address has none.
     */
    "remit_to_address"?: AddressRequestInput;
    /**
     * Complete draft payment schedule with at most 14 entries. Validation errors identify the
     * entry by index, such as schedule_entries[3].kind. Enum values are case-sensitive and must
     * not contain surrounding whitespace. Omission preserves the current or default schedule; []
     * clears the authored schedule. Null is not accepted. On PATCH, include
     * invoice_schedule_entry_id to retain an entry and expected_version to detect concurrent
     * edits. maxItems: 14. [] (Value): {@link InvoiceScheduleEntryWriteInput}. One payment
     * schedule entry you supply when creating or updating an invoice. Set its kind, how much it
     * collects, and when it is due.
     */
    "schedule_entries"?: Array<InvoiceScheduleEntryWriteInput>;
    /**
     * When Flint issues and delivers this draft, as an RFC 3339 timestamp in the future. A
     * scheduled issue delivers by email, so the draft needs recipient_email. Cannot be combined
     * with issue. null is the same as omitting it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "scheduled_issue_at"?: string | globalThis.Date | null;
    /**
     * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it
     * as written, without timezone conversion. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "service_date"?: string;
    /** Selects the type branch. Value enum: "order", "quick_pay". */
    "type": "order" | "quick_pay";
})
    & ((Exclude<CreateInvoiceRequestOrderInput & object, readonly unknown[]>)
    | (Exclude<CreateInvoiceRequestQuickPayInput & object, readonly unknown[]>));
/** The `order` variant of `CreateInvoiceRequest`. */
export type CreateInvoiceRequestOrder = ({
    /**
     * Additional addresses copied on the invoice email and every reminder. [] (Value): string.
     * minLength: 1.
     */
    "cc_emails"?: Array<string>;
    /**
     * How the invoice is collected. Omit it to use merchant_default. The invoice's collection
     * object returns the resolved mode, and you can send it back unchanged on update. How an
     * invoice is collected, used when creating or updating an invoice: a `mode`, an optional saved
     * payment method, and a payment policy.
     */
    "collection"?: InvoiceCollectionRequest;
    /**
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice, and GET /v1/invoices filters on it by exact match. minLength:
     * 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Fine print at the bottom of the invoice and PDF. Omit it to use the invoice settings
     * default_footer. minLength: 1.
     */
    "footer"?: string;
    /**
     * Issue the invoice immediately after creating it. An empty object uses merchant_default
     * delivery. Cannot be combined with a scheduled_issue_at timestamp. Options for issuing an
     * invoice as you create it. `delivery_mode` chooses how the invoice reaches its recipient.
     */
    "issue"?: CreateInvoiceIssueRequest;
    /**
     * Message to the customer, printed on the invoice and PDF. Omit it to use the invoice settings
     * default_memo. minLength: 1.
     */
    "memo"?: string;
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
     * The open order to bill. It must have no payments, refunds, or other active invoice. Send
     * exactly one of order_id or quick_pay. minLength: 1. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * When the invoice is due. Omit it to use merchant_default. The invoice's payment_due object
     * returns the resolved type, and you can send it back unchanged on update. Default:
     * {"type":"merchant_default"}. When an invoice is due, used when creating or updating an
     * invoice: no due date, a calendar date, payment terms, or a default.
     */
    "payment_due"?: InvoicePaymentDueRequest;
    /** The buyer's purchase order number, printed on the invoice and PDF. minLength: 1. */
    "po_number"?: string;
    /**
     * Order details for an invoice with no existing order. Flint creates the backing order from
     * them. Send exactly one of order_id or quick_pay. Inline order details for creating an
     * invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.
     */
    "quick_pay"?: CreateInvoiceQuickPayRequest;
    /**
     * Where Flint emails the invoice and its reminders. Defaults to the linked customer's email
     * when omitted at creation. Send null to leave it unset at creation; PATCH null clears it.
     * Required at issue when delivery resolves to email, and when you schedule the issue.
     * minLength: 1.
     */
    "recipient_email"?: string | null;
    /**
     * Your reference for the invoice, printed on the invoice and PDF. Put the buyer's purchase
     * order number in po_number instead. minLength: 1.
     */
    "reference"?: string;
    /**
     * Where the buyer sends offline payments, printed on the invoice. Omit it to use the invoice
     * settings remit-to address. A complete postal address. State and postal_code are required for
     * US addresses and optional for other countries. Send null or omit line2, state, and
     * postal_code when the address has none.
     */
    "remit_to_address"?: AddressRequest;
    /**
     * Complete draft payment schedule with at most 14 entries. Validation errors identify the
     * entry by index, such as schedule_entries[3].kind. Enum values are case-sensitive and must
     * not contain surrounding whitespace. Omission preserves the current or default schedule; []
     * clears the authored schedule. Null is not accepted. On PATCH, include
     * invoice_schedule_entry_id to retain an entry and expected_version to detect concurrent
     * edits. maxItems: 14. [] (Value): {@link InvoiceScheduleEntryWrite}. One payment schedule
     * entry you supply when creating or updating an invoice. Set its kind, how much it collects,
     * and when it is due.
     */
    "schedule_entries"?: Array<InvoiceScheduleEntryWrite>;
    /**
     * When Flint issues and delivers this draft, as an RFC 3339 timestamp in the future. A
     * scheduled issue delivers by email, so the draft needs recipient_email. Cannot be combined
     * with issue. null is the same as omitting it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "scheduled_issue_at"?: string | null;
    /**
     * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it
     * as written, without timezone conversion. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "service_date"?: string;
    /** Selects the type branch. Value enum: "order". */
    "type": "order" | (string & {});
})
    & (({
    /** Value enum: "order". */
    "type": "order" | (string & {});
    /**
     * The open order to bill. It must have no payments, refunds, or other active invoice. Send
     * exactly one of order_id or quick_pay. minLength: 1. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
}));
/** The `order` variant of `CreateInvoiceRequest`. */
export type CreateInvoiceRequestOrderInput = ({
    /**
     * Additional addresses copied on the invoice email and every reminder. [] (Value): string.
     * minLength: 1.
     */
    "cc_emails"?: Array<string>;
    /**
     * How the invoice is collected. Omit it to use merchant_default. The invoice's collection
     * object returns the resolved mode, and you can send it back unchanged on update. How an
     * invoice is collected, used when creating or updating an invoice: a `mode`, an optional saved
     * payment method, and a payment policy.
     */
    "collection"?: InvoiceCollectionRequestInput;
    /**
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice, and GET /v1/invoices filters on it by exact match. minLength:
     * 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Fine print at the bottom of the invoice and PDF. Omit it to use the invoice settings
     * default_footer. minLength: 1.
     */
    "footer"?: string;
    /**
     * Issue the invoice immediately after creating it. An empty object uses merchant_default
     * delivery. Cannot be combined with a scheduled_issue_at timestamp. Options for issuing an
     * invoice as you create it. `delivery_mode` chooses how the invoice reaches its recipient.
     */
    "issue"?: CreateInvoiceIssueRequestInput;
    /**
     * Message to the customer, printed on the invoice and PDF. Omit it to use the invoice settings
     * default_memo. minLength: 1.
     */
    "memo"?: string;
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
     * The open order to bill. It must have no payments, refunds, or other active invoice. Send
     * exactly one of order_id or quick_pay. minLength: 1. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * When the invoice is due. Omit it to use merchant_default. The invoice's payment_due object
     * returns the resolved type, and you can send it back unchanged on update. Default:
     * {"type":"merchant_default"}. When an invoice is due, used when creating or updating an
     * invoice: no due date, a calendar date, payment terms, or a default.
     */
    "payment_due"?: InvoicePaymentDueRequestInput;
    /** The buyer's purchase order number, printed on the invoice and PDF. minLength: 1. */
    "po_number"?: string;
    /**
     * Order details for an invoice with no existing order. Flint creates the backing order from
     * them. Send exactly one of order_id or quick_pay. Inline order details for creating an
     * invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.
     */
    "quick_pay"?: CreateInvoiceQuickPayRequestInput;
    /**
     * Where Flint emails the invoice and its reminders. Defaults to the linked customer's email
     * when omitted at creation. Send null to leave it unset at creation; PATCH null clears it.
     * Required at issue when delivery resolves to email, and when you schedule the issue.
     * minLength: 1.
     */
    "recipient_email"?: string | null;
    /**
     * Your reference for the invoice, printed on the invoice and PDF. Put the buyer's purchase
     * order number in po_number instead. minLength: 1.
     */
    "reference"?: string;
    /**
     * Where the buyer sends offline payments, printed on the invoice. Omit it to use the invoice
     * settings remit-to address. A complete postal address. State and postal_code are required for
     * US addresses and optional for other countries. Send null or omit line2, state, and
     * postal_code when the address has none.
     */
    "remit_to_address"?: AddressRequestInput;
    /**
     * Complete draft payment schedule with at most 14 entries. Validation errors identify the
     * entry by index, such as schedule_entries[3].kind. Enum values are case-sensitive and must
     * not contain surrounding whitespace. Omission preserves the current or default schedule; []
     * clears the authored schedule. Null is not accepted. On PATCH, include
     * invoice_schedule_entry_id to retain an entry and expected_version to detect concurrent
     * edits. maxItems: 14. [] (Value): {@link InvoiceScheduleEntryWriteInput}. One payment
     * schedule entry you supply when creating or updating an invoice. Set its kind, how much it
     * collects, and when it is due.
     */
    "schedule_entries"?: Array<InvoiceScheduleEntryWriteInput>;
    /**
     * When Flint issues and delivers this draft, as an RFC 3339 timestamp in the future. A
     * scheduled issue delivers by email, so the draft needs recipient_email. Cannot be combined
     * with issue. null is the same as omitting it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "scheduled_issue_at"?: string | globalThis.Date | null;
    /**
     * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it
     * as written, without timezone conversion. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "service_date"?: string;
    /** Selects the type branch. Value enum: "order". */
    "type": "order";
})
    & (({
    /** Value enum: "order". */
    "type": ("order") & ("order");
    /**
     * The open order to bill. It must have no payments, refunds, or other active invoice. Send
     * exactly one of order_id or quick_pay. minLength: 1. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
})
    & (({
    "quick_pay"?: never;
})));
/** The `quick_pay` variant of `CreateInvoiceRequest`. */
export type CreateInvoiceRequestQuickPay = ({
    /**
     * Additional addresses copied on the invoice email and every reminder. [] (Value): string.
     * minLength: 1.
     */
    "cc_emails"?: Array<string>;
    /**
     * How the invoice is collected. Omit it to use merchant_default. The invoice's collection
     * object returns the resolved mode, and you can send it back unchanged on update. How an
     * invoice is collected, used when creating or updating an invoice: a `mode`, an optional saved
     * payment method, and a payment policy.
     */
    "collection"?: InvoiceCollectionRequest;
    /**
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice, and GET /v1/invoices filters on it by exact match. minLength:
     * 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Fine print at the bottom of the invoice and PDF. Omit it to use the invoice settings
     * default_footer. minLength: 1.
     */
    "footer"?: string;
    /**
     * Issue the invoice immediately after creating it. An empty object uses merchant_default
     * delivery. Cannot be combined with a scheduled_issue_at timestamp. Options for issuing an
     * invoice as you create it. `delivery_mode` chooses how the invoice reaches its recipient.
     */
    "issue"?: CreateInvoiceIssueRequest;
    /**
     * Message to the customer, printed on the invoice and PDF. Omit it to use the invoice settings
     * default_memo. minLength: 1.
     */
    "memo"?: string;
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
     * The open order to bill. It must have no payments, refunds, or other active invoice. Send
     * exactly one of order_id or quick_pay. minLength: 1. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * When the invoice is due. Omit it to use merchant_default. The invoice's payment_due object
     * returns the resolved type, and you can send it back unchanged on update. Default:
     * {"type":"merchant_default"}. When an invoice is due, used when creating or updating an
     * invoice: no due date, a calendar date, payment terms, or a default.
     */
    "payment_due"?: InvoicePaymentDueRequest;
    /** The buyer's purchase order number, printed on the invoice and PDF. minLength: 1. */
    "po_number"?: string;
    /**
     * Order details for an invoice with no existing order. Flint creates the backing order from
     * them. Send exactly one of order_id or quick_pay. Inline order details for creating an
     * invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.
     */
    "quick_pay": CreateInvoiceQuickPayRequest;
    /**
     * Where Flint emails the invoice and its reminders. Defaults to the linked customer's email
     * when omitted at creation. Send null to leave it unset at creation; PATCH null clears it.
     * Required at issue when delivery resolves to email, and when you schedule the issue.
     * minLength: 1.
     */
    "recipient_email"?: string | null;
    /**
     * Your reference for the invoice, printed on the invoice and PDF. Put the buyer's purchase
     * order number in po_number instead. minLength: 1.
     */
    "reference"?: string;
    /**
     * Where the buyer sends offline payments, printed on the invoice. Omit it to use the invoice
     * settings remit-to address. A complete postal address. State and postal_code are required for
     * US addresses and optional for other countries. Send null or omit line2, state, and
     * postal_code when the address has none.
     */
    "remit_to_address"?: AddressRequest;
    /**
     * Complete draft payment schedule with at most 14 entries. Validation errors identify the
     * entry by index, such as schedule_entries[3].kind. Enum values are case-sensitive and must
     * not contain surrounding whitespace. Omission preserves the current or default schedule; []
     * clears the authored schedule. Null is not accepted. On PATCH, include
     * invoice_schedule_entry_id to retain an entry and expected_version to detect concurrent
     * edits. maxItems: 14. [] (Value): {@link InvoiceScheduleEntryWrite}. One payment schedule
     * entry you supply when creating or updating an invoice. Set its kind, how much it collects,
     * and when it is due.
     */
    "schedule_entries"?: Array<InvoiceScheduleEntryWrite>;
    /**
     * When Flint issues and delivers this draft, as an RFC 3339 timestamp in the future. A
     * scheduled issue delivers by email, so the draft needs recipient_email. Cannot be combined
     * with issue. null is the same as omitting it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "scheduled_issue_at"?: string | null;
    /**
     * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it
     * as written, without timezone conversion. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "service_date"?: string;
    /** Selects the type branch. Value enum: "quick_pay". */
    "type": "quick_pay" | (string & {});
})
    & (({
    /** Value enum: "quick_pay". */
    "type": "quick_pay" | (string & {});
    /**
     * Order details for an invoice with no existing order. Flint creates the backing order from
     * them. Send exactly one of order_id or quick_pay. Inline order details for creating an
     * invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.
     */
    "quick_pay": CreateInvoiceQuickPayRequest;
}));
/** The `quick_pay` variant of `CreateInvoiceRequest`. */
export type CreateInvoiceRequestQuickPayInput = ({
    /**
     * Additional addresses copied on the invoice email and every reminder. [] (Value): string.
     * minLength: 1.
     */
    "cc_emails"?: Array<string>;
    /**
     * How the invoice is collected. Omit it to use merchant_default. The invoice's collection
     * object returns the resolved mode, and you can send it back unchanged on update. How an
     * invoice is collected, used when creating or updating an invoice: a `mode`, an optional saved
     * payment method, and a payment policy.
     */
    "collection"?: InvoiceCollectionRequestInput;
    /**
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice, and GET /v1/invoices filters on it by exact match. minLength:
     * 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Fine print at the bottom of the invoice and PDF. Omit it to use the invoice settings
     * default_footer. minLength: 1.
     */
    "footer"?: string;
    /**
     * Issue the invoice immediately after creating it. An empty object uses merchant_default
     * delivery. Cannot be combined with a scheduled_issue_at timestamp. Options for issuing an
     * invoice as you create it. `delivery_mode` chooses how the invoice reaches its recipient.
     */
    "issue"?: CreateInvoiceIssueRequestInput;
    /**
     * Message to the customer, printed on the invoice and PDF. Omit it to use the invoice settings
     * default_memo. minLength: 1.
     */
    "memo"?: string;
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
     * The open order to bill. It must have no payments, refunds, or other active invoice. Send
     * exactly one of order_id or quick_pay. minLength: 1. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * When the invoice is due. Omit it to use merchant_default. The invoice's payment_due object
     * returns the resolved type, and you can send it back unchanged on update. Default:
     * {"type":"merchant_default"}. When an invoice is due, used when creating or updating an
     * invoice: no due date, a calendar date, payment terms, or a default.
     */
    "payment_due"?: InvoicePaymentDueRequestInput;
    /** The buyer's purchase order number, printed on the invoice and PDF. minLength: 1. */
    "po_number"?: string;
    /**
     * Order details for an invoice with no existing order. Flint creates the backing order from
     * them. Send exactly one of order_id or quick_pay. Inline order details for creating an
     * invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.
     */
    "quick_pay": CreateInvoiceQuickPayRequestInput;
    /**
     * Where Flint emails the invoice and its reminders. Defaults to the linked customer's email
     * when omitted at creation. Send null to leave it unset at creation; PATCH null clears it.
     * Required at issue when delivery resolves to email, and when you schedule the issue.
     * minLength: 1.
     */
    "recipient_email"?: string | null;
    /**
     * Your reference for the invoice, printed on the invoice and PDF. Put the buyer's purchase
     * order number in po_number instead. minLength: 1.
     */
    "reference"?: string;
    /**
     * Where the buyer sends offline payments, printed on the invoice. Omit it to use the invoice
     * settings remit-to address. A complete postal address. State and postal_code are required for
     * US addresses and optional for other countries. Send null or omit line2, state, and
     * postal_code when the address has none.
     */
    "remit_to_address"?: AddressRequestInput;
    /**
     * Complete draft payment schedule with at most 14 entries. Validation errors identify the
     * entry by index, such as schedule_entries[3].kind. Enum values are case-sensitive and must
     * not contain surrounding whitespace. Omission preserves the current or default schedule; []
     * clears the authored schedule. Null is not accepted. On PATCH, include
     * invoice_schedule_entry_id to retain an entry and expected_version to detect concurrent
     * edits. maxItems: 14. [] (Value): {@link InvoiceScheduleEntryWriteInput}. One payment
     * schedule entry you supply when creating or updating an invoice. Set its kind, how much it
     * collects, and when it is due.
     */
    "schedule_entries"?: Array<InvoiceScheduleEntryWriteInput>;
    /**
     * When Flint issues and delivers this draft, as an RFC 3339 timestamp in the future. A
     * scheduled issue delivers by email, so the draft needs recipient_email. Cannot be combined
     * with issue. null is the same as omitting it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "scheduled_issue_at"?: string | globalThis.Date | null;
    /**
     * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it
     * as written, without timezone conversion. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "service_date"?: string;
    /** Selects the type branch. Value enum: "quick_pay". */
    "type": "quick_pay";
})
    & (({
    /** Value enum: "quick_pay". */
    "type": ("quick_pay") & ("quick_pay");
    /**
     * Order details for an invoice with no existing order. Flint creates the backing order from
     * them. Send exactly one of order_id or quick_pay. Inline order details for creating an
     * invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.
     */
    "quick_pay": CreateInvoiceQuickPayRequestInput;
})
    & (({
    "order_id"?: never;
})));
/** The request body for: Create location. */
export type CreateLocationRequest = {
    /**
     * Postal address of the Location. A complete postal address. State and postal_code are
     * required for US addresses and optional for other countries. Send null or omit line2, state,
     * and postal_code when the address has none.
     */
    "address": AddressRequest;
    /**
     * Latitude and longitude of the Location. Send it with `coordinate_source`. A latitude and
     * longitude for a merchant location.
     */
    "coordinate"?: LocationCoordinate;
    /**
     * Where `coordinate` came from: `merchant_supplied` if you chose or measured it, `geocoded` if
     * you got it by geocoding the address. Send it with `coordinate`: it is required when
     * `coordinate` is present and rejected when `coordinate` is absent. `null` counts as omitted,
     * so it is accepted only when `coordinate` is also omitted. Value enum: "merchant_supplied",
     * "geocoded", null.
     */
    "coordinate_source"?: "merchant_supplied" | "geocoded" | null | (string & {}) | null;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Whether this Location accepts inventory allocation. Sending this field requires
     * commerce.inventory.allocation.write in addition to the route scope. Default: false.
     */
    "inventory_allocation_enabled"?: boolean;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Merchant-facing Location name, from 1 to 255 characters. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Status the Location starts in. Defaults to `active`. Default: "active". Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * IANA time zone for the Location's local schedules, such as `America/New_York`. Defaults to
     * the merchant's timezone, then UTC, and is saved on the Location at creation. minLength: 1.
     */
    "timezone"?: string;
};
/** The request body for: Create location. */
export type CreateLocationRequestInput = {
    /**
     * Postal address of the Location. A complete postal address. State and postal_code are
     * required for US addresses and optional for other countries. Send null or omit line2, state,
     * and postal_code when the address has none.
     */
    "address": AddressRequestInput;
    /**
     * Latitude and longitude of the Location. Send it with `coordinate_source`. A latitude and
     * longitude for a merchant location.
     */
    "coordinate"?: LocationCoordinateRequestInput;
    /**
     * Where `coordinate` came from: `merchant_supplied` if you chose or measured it, `geocoded` if
     * you got it by geocoding the address. Send it with `coordinate`: it is required when
     * `coordinate` is present and rejected when `coordinate` is absent. `null` counts as omitted,
     * so it is accepted only when `coordinate` is also omitted. Value enum: "merchant_supplied",
     * "geocoded", null.
     */
    "coordinate_source"?: "merchant_supplied" | "geocoded" | null;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Whether this Location accepts inventory allocation. Sending this field requires
     * commerce.inventory.allocation.write in addition to the route scope. Default: false.
     */
    "inventory_allocation_enabled"?: boolean;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Merchant-facing Location name, from 1 to 255 characters. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Status the Location starts in. Defaults to `active`. Default: "active". Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * IANA time zone for the Location's local schedules, such as `America/New_York`. Defaults to
     * the merchant's timezone, then UTC, and is saved on the Location at creation. minLength: 1.
     */
    "timezone"?: string;
};
/** The `invoice` variant of `CreateMeCheckoutSessionRequest`. */
export type CreateMeCheckoutSessionInvoice = ({
    /**
     * The open invoice whose balance due now this checkout collects. An open session for the
     * invoice's current collection is reused and returned with 200. With an invoice access token,
     * it must be the token's invoice; another invoice returns 404 RESOURCE_NOT_FOUND, and an
     * invalid, expired or revoked token returns 401 INVALID_CREDENTIAL. With a customer session,
     * it must be one of the buyer's invoices. minLength: 1. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id": string;
    /**
     * Optional. The schedule entry to collect. Only the earliest entry that is due and still has
     * an outstanding balance can be collected; omit it to collect that entry. Not allowed on an
     * invoice without a schedule. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * Origin of the page where you render this headless checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is headless. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "payment_return_url"?: string;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is headless; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * One of the buyer's return resolutions with a buyer payment pending on its replacement order.
     * Another buyer's resolution, or an unknown one, returns 404 RESOURCE_NOT_FOUND. An open
     * session with the same surface is reused and returned with 200. minLength: 1. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id"?: string;
    /**
     * Where the checkout sends the buyer after paying, such as the invoice's or Return's page in
     * the customer account. Limited to 2048 characters (Unicode code points) before trimming
     * surrounding whitespace. It must be an HTTPS address of the merchant's customer account:
     * /{merchant_id} on Flint's account host, the merchant's active custom account domain, or the
     * host of customer_account.merchant_account_url when the merchant hosts the account. In test
     * mode, any URL on localhost or a loopback IP address (such as 127.0.0.1 or [::1]) is also
     * accepted, over HTTP or HTTPS and on any port. Anything else returns 400 INVALID_REQUEST with
     * an INVALID_VALUE detail on return_url. An alias for redirects.success_url on hosted checkout
     * or payment_return_url on headless checkout; keep them consistent when sending both. Format:
     * uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "return_url"?: string;
    /**
     * Defaults to hosted. The same surface reuses the open checkout. A different surface replaces
     * it only while no payment is in progress; otherwise the request returns 409
     * ACTION_NOT_ALLOWED with reason in_progress. Default: "hosted". Value enum: "hosted",
     * "headless".
     */
    "surface"?: "hosted" | "headless" | (string & {});
    /**
     * What the checkout collects payment for. return_resolution: the buyer's balance on one of
     * their return resolutions; send return_resolution_id. invoice: what is due now on one of the
     * buyer's invoices; send invoice_id. Value enum: "invoice".
     */
    "type": "invoice" | (string & {});
})
    & (({
    /** Value enum: "invoice". */
    "type": "invoice" | (string & {});
    /**
     * The open invoice whose balance due now this checkout collects. An open session for the
     * invoice's current collection is reused and returned with 200. With an invoice access token,
     * it must be the token's invoice; another invoice returns 404 RESOURCE_NOT_FOUND, and an
     * invalid, expired or revoked token returns 401 INVALID_CREDENTIAL. With a customer session,
     * it must be one of the buyer's invoices. minLength: 1. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id": string;
}));
/** The `invoice` variant of `CreateMeCheckoutSessionRequest`. */
export type CreateMeCheckoutSessionInvoiceInput = ({
    /**
     * The open invoice whose balance due now this checkout collects. An open session for the
     * invoice's current collection is reused and returned with 200. With an invoice access token,
     * it must be the token's invoice; another invoice returns 404 RESOURCE_NOT_FOUND, and an
     * invalid, expired or revoked token returns 401 INVALID_CREDENTIAL. With a customer session,
     * it must be one of the buyer's invoices. minLength: 1. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id": string;
    /**
     * Optional. The schedule entry to collect. Only the earliest entry that is due and still has
     * an outstanding balance can be collected; omit it to collect that entry. Not allowed on an
     * invoice without a schedule. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * Origin of the page where you render this headless checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is headless. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "payment_return_url"?: string;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is headless; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirectsRequestInput;
    /**
     * One of the buyer's return resolutions with a buyer payment pending on its replacement order.
     * Another buyer's resolution, or an unknown one, returns 404 RESOURCE_NOT_FOUND. An open
     * session with the same surface is reused and returned with 200. minLength: 1. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id"?: string;
    /**
     * Where the checkout sends the buyer after paying, such as the invoice's or Return's page in
     * the customer account. Limited to 2048 characters (Unicode code points) before trimming
     * surrounding whitespace. It must be an HTTPS address of the merchant's customer account:
     * /{merchant_id} on Flint's account host, the merchant's active custom account domain, or the
     * host of customer_account.merchant_account_url when the merchant hosts the account. In test
     * mode, any URL on localhost or a loopback IP address (such as 127.0.0.1 or [::1]) is also
     * accepted, over HTTP or HTTPS and on any port. Anything else returns 400 INVALID_REQUEST with
     * an INVALID_VALUE detail on return_url. An alias for redirects.success_url on hosted checkout
     * or payment_return_url on headless checkout; keep them consistent when sending both. Format:
     * uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "return_url"?: string;
    /**
     * Defaults to hosted. The same surface reuses the open checkout. A different surface replaces
     * it only while no payment is in progress; otherwise the request returns 409
     * ACTION_NOT_ALLOWED with reason in_progress. Default: "hosted". Value enum: "hosted",
     * "headless".
     */
    "surface"?: "hosted" | "headless";
    /**
     * What the checkout collects payment for. return_resolution: the buyer's balance on one of
     * their return resolutions; send return_resolution_id. invoice: what is due now on one of the
     * buyer's invoices; send invoice_id. Value enum: "invoice".
     */
    "type": "invoice";
})
    & (({
    /** Value enum: "invoice". */
    "type": "invoice";
    /**
     * The open invoice whose balance due now this checkout collects. An open session for the
     * invoice's current collection is reused and returned with 200. With an invoice access token,
     * it must be the token's invoice; another invoice returns 404 RESOURCE_NOT_FOUND, and an
     * invalid, expired or revoked token returns 401 INVALID_CREDENTIAL. With a customer session,
     * it must be one of the buyer's invoices. minLength: 1. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id": string;
})
    & (({
    "return_resolution_id"?: never;
})));
/** The request body for: Create a checkout session for the current buyer. */
export type CreateMeCheckoutSessionRequest = ({
    /**
     * The open invoice whose balance due now this checkout collects. An open session for the
     * invoice's current collection is reused and returned with 200. With an invoice access token,
     * it must be the token's invoice; another invoice returns 404 RESOURCE_NOT_FOUND, and an
     * invalid, expired or revoked token returns 401 INVALID_CREDENTIAL. With a customer session,
     * it must be one of the buyer's invoices. minLength: 1. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id"?: string;
    /**
     * Optional. The schedule entry to collect. Only the earliest entry that is due and still has
     * an outstanding balance can be collected; omit it to collect that entry. Not allowed on an
     * invoice without a schedule. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * Origin of the page where you render this headless checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is headless. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "payment_return_url"?: string;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is headless; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * One of the buyer's return resolutions with a buyer payment pending on its replacement order.
     * Another buyer's resolution, or an unknown one, returns 404 RESOURCE_NOT_FOUND. An open
     * session with the same surface is reused and returned with 200. minLength: 1. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id"?: string;
    /**
     * Where the checkout sends the buyer after paying, such as the invoice's or Return's page in
     * the customer account. Limited to 2048 characters (Unicode code points) before trimming
     * surrounding whitespace. It must be an HTTPS address of the merchant's customer account:
     * /{merchant_id} on Flint's account host, the merchant's active custom account domain, or the
     * host of customer_account.merchant_account_url when the merchant hosts the account. In test
     * mode, any URL on localhost or a loopback IP address (such as 127.0.0.1 or [::1]) is also
     * accepted, over HTTP or HTTPS and on any port. Anything else returns 400 INVALID_REQUEST with
     * an INVALID_VALUE detail on return_url. An alias for redirects.success_url on hosted checkout
     * or payment_return_url on headless checkout; keep them consistent when sending both. Format:
     * uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "return_url"?: string;
    /**
     * Defaults to hosted. The same surface reuses the open checkout. A different surface replaces
     * it only while no payment is in progress; otherwise the request returns 409
     * ACTION_NOT_ALLOWED with reason in_progress. Default: "hosted". Value enum: "hosted",
     * "headless".
     */
    "surface"?: "hosted" | "headless" | (string & {});
    /**
     * What the checkout collects payment for. return_resolution: the buyer's balance on one of
     * their return resolutions; send return_resolution_id. invoice: what is due now on one of the
     * buyer's invoices; send invoice_id. Value enum: "return_resolution", "invoice".
     */
    "type": "return_resolution" | "invoice" | (string & {});
})
    & ((Exclude<CreateMeCheckoutSessionReturnResolution & object, readonly unknown[]>)
    | (Exclude<CreateMeCheckoutSessionInvoice & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The request body for: Create a checkout session for the current buyer. */
export type CreateMeCheckoutSessionRequestInput = ({
    /**
     * The open invoice whose balance due now this checkout collects. An open session for the
     * invoice's current collection is reused and returned with 200. With an invoice access token,
     * it must be the token's invoice; another invoice returns 404 RESOURCE_NOT_FOUND, and an
     * invalid, expired or revoked token returns 401 INVALID_CREDENTIAL. With a customer session,
     * it must be one of the buyer's invoices. minLength: 1. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id"?: string;
    /**
     * Optional. The schedule entry to collect. Only the earliest entry that is due and still has
     * an outstanding balance can be collected; omit it to collect that entry. Not allowed on an
     * invoice without a schedule. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * Origin of the page where you render this headless checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is headless. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "payment_return_url"?: string;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is headless; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirectsRequestInput;
    /**
     * One of the buyer's return resolutions with a buyer payment pending on its replacement order.
     * Another buyer's resolution, or an unknown one, returns 404 RESOURCE_NOT_FOUND. An open
     * session with the same surface is reused and returned with 200. minLength: 1. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id"?: string;
    /**
     * Where the checkout sends the buyer after paying, such as the invoice's or Return's page in
     * the customer account. Limited to 2048 characters (Unicode code points) before trimming
     * surrounding whitespace. It must be an HTTPS address of the merchant's customer account:
     * /{merchant_id} on Flint's account host, the merchant's active custom account domain, or the
     * host of customer_account.merchant_account_url when the merchant hosts the account. In test
     * mode, any URL on localhost or a loopback IP address (such as 127.0.0.1 or [::1]) is also
     * accepted, over HTTP or HTTPS and on any port. Anything else returns 400 INVALID_REQUEST with
     * an INVALID_VALUE detail on return_url. An alias for redirects.success_url on hosted checkout
     * or payment_return_url on headless checkout; keep them consistent when sending both. Format:
     * uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "return_url"?: string;
    /**
     * Defaults to hosted. The same surface reuses the open checkout. A different surface replaces
     * it only while no payment is in progress; otherwise the request returns 409
     * ACTION_NOT_ALLOWED with reason in_progress. Default: "hosted". Value enum: "hosted",
     * "headless".
     */
    "surface"?: "hosted" | "headless";
    /**
     * What the checkout collects payment for. return_resolution: the buyer's balance on one of
     * their return resolutions; send return_resolution_id. invoice: what is due now on one of the
     * buyer's invoices; send invoice_id. Value enum: "return_resolution", "invoice".
     */
    "type": "return_resolution" | "invoice";
})
    & ((Exclude<CreateMeCheckoutSessionReturnResolutionInput & object, readonly unknown[]>)
    | (Exclude<CreateMeCheckoutSessionInvoiceInput & object, readonly unknown[]>));
/** The `return_resolution` variant of `CreateMeCheckoutSessionRequest`. */
export type CreateMeCheckoutSessionReturnResolution = ({
    /**
     * The open invoice whose balance due now this checkout collects. An open session for the
     * invoice's current collection is reused and returned with 200. With an invoice access token,
     * it must be the token's invoice; another invoice returns 404 RESOURCE_NOT_FOUND, and an
     * invalid, expired or revoked token returns 401 INVALID_CREDENTIAL. With a customer session,
     * it must be one of the buyer's invoices. minLength: 1. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id"?: string;
    /**
     * Optional. The schedule entry to collect. Only the earliest entry that is due and still has
     * an outstanding balance can be collected; omit it to collect that entry. Not allowed on an
     * invoice without a schedule. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * Origin of the page where you render this headless checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is headless. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "payment_return_url"?: string;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is headless; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * One of the buyer's return resolutions with a buyer payment pending on its replacement order.
     * Another buyer's resolution, or an unknown one, returns 404 RESOURCE_NOT_FOUND. An open
     * session with the same surface is reused and returned with 200. minLength: 1. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id": string;
    /**
     * Where the checkout sends the buyer after paying, such as the invoice's or Return's page in
     * the customer account. Limited to 2048 characters (Unicode code points) before trimming
     * surrounding whitespace. It must be an HTTPS address of the merchant's customer account:
     * /{merchant_id} on Flint's account host, the merchant's active custom account domain, or the
     * host of customer_account.merchant_account_url when the merchant hosts the account. In test
     * mode, any URL on localhost or a loopback IP address (such as 127.0.0.1 or [::1]) is also
     * accepted, over HTTP or HTTPS and on any port. Anything else returns 400 INVALID_REQUEST with
     * an INVALID_VALUE detail on return_url. An alias for redirects.success_url on hosted checkout
     * or payment_return_url on headless checkout; keep them consistent when sending both. Format:
     * uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "return_url"?: string;
    /**
     * Defaults to hosted. The same surface reuses the open checkout. A different surface replaces
     * it only while no payment is in progress; otherwise the request returns 409
     * ACTION_NOT_ALLOWED with reason in_progress. Default: "hosted". Value enum: "hosted",
     * "headless".
     */
    "surface"?: "hosted" | "headless" | (string & {});
    /**
     * What the checkout collects payment for. return_resolution: the buyer's balance on one of
     * their return resolutions; send return_resolution_id. invoice: what is due now on one of the
     * buyer's invoices; send invoice_id. Value enum: "return_resolution".
     */
    "type": "return_resolution" | (string & {});
})
    & (({
    /** Value enum: "return_resolution". */
    "type": "return_resolution" | (string & {});
    /**
     * One of the buyer's return resolutions with a buyer payment pending on its replacement order.
     * Another buyer's resolution, or an unknown one, returns 404 RESOURCE_NOT_FOUND. An open
     * session with the same surface is reused and returned with 200. minLength: 1. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id": string;
}));
/** The `return_resolution` variant of `CreateMeCheckoutSessionRequest`. */
export type CreateMeCheckoutSessionReturnResolutionInput = ({
    /**
     * The open invoice whose balance due now this checkout collects. An open session for the
     * invoice's current collection is reused and returned with 200. With an invoice access token,
     * it must be the token's invoice; another invoice returns 404 RESOURCE_NOT_FOUND, and an
     * invalid, expired or revoked token returns 401 INVALID_CREDENTIAL. With a customer session,
     * it must be one of the buyer's invoices. minLength: 1. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id"?: string;
    /**
     * Optional. The schedule entry to collect. Only the earliest entry that is due and still has
     * an outstanding balance can be collected; omit it to collect that entry. Not allowed on an
     * invoice without a schedule. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * Origin of the page where you render this headless checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is headless. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "payment_return_url"?: string;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is headless; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirectsRequestInput;
    /**
     * One of the buyer's return resolutions with a buyer payment pending on its replacement order.
     * Another buyer's resolution, or an unknown one, returns 404 RESOURCE_NOT_FOUND. An open
     * session with the same surface is reused and returned with 200. minLength: 1. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id": string;
    /**
     * Where the checkout sends the buyer after paying, such as the invoice's or Return's page in
     * the customer account. Limited to 2048 characters (Unicode code points) before trimming
     * surrounding whitespace. It must be an HTTPS address of the merchant's customer account:
     * /{merchant_id} on Flint's account host, the merchant's active custom account domain, or the
     * host of customer_account.merchant_account_url when the merchant hosts the account. In test
     * mode, any URL on localhost or a loopback IP address (such as 127.0.0.1 or [::1]) is also
     * accepted, over HTTP or HTTPS and on any port. Anything else returns 400 INVALID_REQUEST with
     * an INVALID_VALUE detail on return_url. An alias for redirects.success_url on hosted checkout
     * or payment_return_url on headless checkout; keep them consistent when sending both. Format:
     * uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "return_url"?: string;
    /**
     * Defaults to hosted. The same surface reuses the open checkout. A different surface replaces
     * it only while no payment is in progress; otherwise the request returns 409
     * ACTION_NOT_ALLOWED with reason in_progress. Default: "hosted". Value enum: "hosted",
     * "headless".
     */
    "surface"?: "hosted" | "headless";
    /**
     * What the checkout collects payment for. return_resolution: the buyer's balance on one of
     * their return resolutions; send return_resolution_id. invoice: what is due now on one of the
     * buyer's invoices; send invoice_id. Value enum: "return_resolution".
     */
    "type": "return_resolution";
})
    & (({
    /** Value enum: "return_resolution". */
    "type": "return_resolution";
    /**
     * One of the buyer's return resolutions with a buyer payment pending on its replacement order.
     * Another buyer's resolution, or an unknown one, returns 404 RESOURCE_NOT_FOUND. An open
     * session with the same surface is reused and returned with 200. minLength: 1. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id": string;
})
    & (({
    "invoice_id"?: never;
}) & ({
    "invoice_schedule_entry_id"?: never;
})));
/** The request body for: Preview subscription. */
export type CreateMeSubscriptionPreviewRequest = ((CreateMeSubscriptionPreviewRequestDeliveryOptions)
    | (CreateMeSubscriptionPreviewRequestNextRenewal)
    | (CreateMeSubscriptionPreviewRequestPlanChange)
    | (CreateMeSubscriptionPreviewRequestQuantityChange)
    | (Record<string, unknown>));
/** The `delivery_options` variant of `CreateMeSubscriptionPreviewRequest`. */
export type CreateMeSubscriptionPreviewRequestDeliveryOptions = {
    /**
     * Address to evaluate each method against: one of the customer's saved addresses or a new
     * address. Where to deliver a subscription: a saved customer address by ID, or a new address.
     */
    "destination"?: SubscriptionServiceLocationRequest;
    /** Selects the delivery options preview. Value enum: "delivery_options". */
    "mode": "delivery_options" | (string & {});
    /**
     * ID of the subscription to list delivery methods for. minLength: 1. pattern:
     * ^sub_[0-9A-HJKMNP-TV-Z]{26}$. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id": string;
};
/** The `delivery_options` variant of `CreateMeSubscriptionPreviewRequest`. */
export type CreateMeSubscriptionPreviewRequestDeliveryOptionsInput = {
    /**
     * Address to evaluate each method against: one of the customer's saved addresses or a new
     * address. Where to deliver a subscription: a saved customer address by ID, or a new address.
     */
    "destination"?: SubscriptionDeliveryDestinationRequestInput;
    /** Selects the delivery options preview. Value enum: "delivery_options". */
    "mode": "delivery_options";
    /**
     * ID of the subscription to list delivery methods for. minLength: 1. pattern:
     * ^sub_[0-9A-HJKMNP-TV-Z]{26}$. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id": string;
};
/** The request body for: Preview subscription. */
export type CreateMeSubscriptionPreviewRequestInput = ((CreateMeSubscriptionPreviewRequestDeliveryOptionsInput)
    | (CreateMeSubscriptionPreviewRequestNextRenewalInput)
    | (CreateMeSubscriptionPreviewRequestPlanChangeInput)
    | (CreateMeSubscriptionPreviewRequestQuantityChangeInput));
/** The `next_renewal` variant of `CreateMeSubscriptionPreviewRequest`. */
export type CreateMeSubscriptionPreviewRequestNextRenewal = ({
    /**
     * Proposed complete delivery preference, as accepted by subscription PATCH. Prices the next
     * paid renewal as if this delivery were saved. A held delivery with
     * remaining_prepaid_deliveries greater than zero is already paid: fixing it charges nothing,
     * while this preview still prices the next paid cycle. Nothing is saved, no stock is reserved,
     * and no rate is guaranteed. Refusals match PATCH. The delivery preference to set on a
     * subscription: delivery method, type, destination, and recipient.
     */
    "delivery"?: SubscriptionDeliveryRequest;
    /** Value enum: "next_renewal". */
    "mode": "next_renewal" | (string & {});
    /**
     * minLength: 1. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id": string;
    "swap"?: SubscriptionSwapPreviewRequest;
});
/** The `next_renewal` variant of `CreateMeSubscriptionPreviewRequest`. */
export type CreateMeSubscriptionPreviewRequestNextRenewalInput = ({
    /**
     * Proposed complete delivery preference, as accepted by subscription PATCH. Prices the next
     * paid renewal as if this delivery were saved. A held delivery with
     * remaining_prepaid_deliveries greater than zero is already paid: fixing it charges nothing,
     * while this preview still prices the next paid cycle. Nothing is saved, no stock is reserved,
     * and no rate is guaranteed. Refusals match PATCH. The delivery preference to set on a
     * subscription: delivery method, type, destination, and recipient.
     */
    "delivery"?: SubscriptionDeliveryRequestInput;
    /** Value enum: "next_renewal". */
    "mode": "next_renewal";
    /**
     * minLength: 1. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id": string;
    "swap"?: SubscriptionSwapPreviewRequestInput;
})
    & ({
    "swap"?: never;
} | {
    "delivery"?: never;
});
/** The `plan_change` variant of `CreateMeSubscriptionPreviewRequest`. */
export type CreateMeSubscriptionPreviewRequestPlanChange = ({
    /**
     * Send with billing_interval_count to choose a target plan option. Omit both to keep the
     * current interval if the target offers that pair, otherwise use the target plan's default
     * interval and count. Value enum: "daily", "weekly", "monthly", "yearly".
     */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /**
     * Required when billing_interval is sent; billing_interval is required when this field is
     * sent. minimum: 1. maximum: 365.
     */
    "billing_interval_count"?: number;
    /** The subscription change to preview. Value enum: "plan_change". */
    "mode": "plan_change" | (string & {});
    /**
     * Legacy subscription multiplier. Only 1 is accepted; omission keeps the current quantity. Use
     * line_items for multiple units. Whole-number quantity; fractional quantities are not
     * supported. minimum: 1. maximum: 1.
     */
    "quantity"?: number;
    /**
     * The buyer's subscription to preview a plan change for. minLength: 1. pattern:
     * ^sub_[0-9A-HJKMNP-TV-Z]{26}$. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id": string;
    /**
     * The target subscription plan. minLength: 1. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id": string;
});
/** The `plan_change` variant of `CreateMeSubscriptionPreviewRequest`. */
export type CreateMeSubscriptionPreviewRequestPlanChangeInput = ({
    /**
     * Send with billing_interval_count to choose a target plan option. Omit both to keep the
     * current interval if the target offers that pair, otherwise use the target plan's default
     * interval and count. Value enum: "daily", "weekly", "monthly", "yearly".
     */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly";
    /**
     * Required when billing_interval is sent; billing_interval is required when this field is
     * sent. minimum: 1. maximum: 365.
     */
    "billing_interval_count"?: number;
    /** The subscription change to preview. Value enum: "plan_change". */
    "mode": "plan_change";
    /**
     * Legacy subscription multiplier. Only 1 is accepted; omission keeps the current quantity. Use
     * line_items for multiple units. Whole-number quantity; fractional quantities are not
     * supported. minimum: 1. maximum: 1.
     */
    "quantity"?: number;
    /**
     * The buyer's subscription to preview a plan change for. minLength: 1. pattern:
     * ^sub_[0-9A-HJKMNP-TV-Z]{26}$. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id": string;
    /**
     * The target subscription plan. minLength: 1. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id": string;
});
/** The `quantity_change` variant of `CreateMeSubscriptionPreviewRequest`. */
export type CreateMeSubscriptionPreviewRequestQuantityChange = {
    /**
     * When the quantity change is billed. Previews price only prorated_now; period_end changes are
     * billed at the next renewal. Value enum: "prorated_now".
     */
    "billing_starts": "prorated_now" | (string & {});
    /**
     * Reject the preview if the subscription version has changed. Send the same value to
     * change-quantity. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * The frozen adjustable subscription line and its quantity, within min_quantity and
     * max_quantity. Omitted lines keep their quantities. minItems: 1. maxItems: 50. [] (Value):
     * {@link SubscriptionQuantityChangeLineItemRequest}. Quantity for an existing subscription
     * line.
     */
    "line_items": Array<SubscriptionQuantityChangeLineItemRequest>;
    /** The subscription change to preview. Value enum: "quantity_change". */
    "mode": "quantity_change" | (string & {});
    /**
     * The buyer's subscription to preview a quantity change for. minLength: 1. pattern:
     * ^sub_[0-9A-HJKMNP-TV-Z]{26}$. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id": string;
};
/** The `quantity_change` variant of `CreateMeSubscriptionPreviewRequest`. */
export type CreateMeSubscriptionPreviewRequestQuantityChangeInput = {
    /**
     * When the quantity change is billed. Previews price only prorated_now; period_end changes are
     * billed at the next renewal. Value enum: "prorated_now".
     */
    "billing_starts": "prorated_now";
    /**
     * Reject the preview if the subscription version has changed. Send the same value to
     * change-quantity. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * The frozen adjustable subscription line and its quantity, within min_quantity and
     * max_quantity. Omitted lines keep their quantities. minItems: 1. maxItems: 50. [] (Value):
     * {@link SubscriptionQuantityChangeLineItemRequestInput}. Quantity for an existing
     * subscription line.
     */
    "line_items": Array<SubscriptionQuantityChangeLineItemRequestInput>;
    /** The subscription change to preview. Value enum: "quantity_change". */
    "mode": "quantity_change";
    /**
     * The buyer's subscription to preview a quantity change for. minLength: 1. pattern:
     * ^sub_[0-9A-HJKMNP-TV-Z]{26}$. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id": string;
};
/** The request body for: Create a merchant signup. */
export type CreateMerchantSignupRequest = {
    /**
     * The new merchant's display name until onboarding sets its legal name, 1 to 100 characters,
     * without links or email addresses: the code email shows it. Without it, Flint names the
     * merchant from the owner's email. minLength: 1. maxLength: 100.
     */
    "business_name"?: string;
    /**
     * The PKCE S256 challenge: base64url SHA-256 of a verifier you keep. The authorization codes
     * verify returns are bound to it. minLength: 43. maxLength: 43. pattern: ^[A-Za-z0-9_-]{43}$.
     */
    "code_challenge": string;
    /** Must be `S256`. Value enum: "S256". */
    "code_challenge_method": "S256" | (string & {});
    /**
     * Your identifier for this business, such as your account ID. List signups by it. minLength:
     * 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The modes to install the app in. `live` needs the app's live `create_merchants` capability.
     * Until it is active, a signup may install only in `test`, and only for an owner on your
     * merchant's team (plus-addresses included). minItems: 1. maxItems: 2. uniqueItems: true. []
     * enum: "test", "live". [] (Value): string. Value enum: "test", "live".
     */
    "modes": Array<"test" | "live" | (string & {})>;
    /**
     * The owner Flint emails the code to. The person who will own the new merchant. Flint emails
     * the code to this address.
     */
    "owner": MerchantSignupOwner;
    /**
     * Your partner app to install on the new merchant. It must be active and have a
     * `merchant_action_url`. minLength: 1. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id": string;
    /**
     * Optional manifest permissions to request besides the required ones. Defaults to the app's
     * `default_requested_permissions`. Send `[]` to request only the required permissions.
     * uniqueItems: true. [] (Value): string. minLength: 1. Example: "manage_orders".
     */
    "requested_permission_ids"?: Array<string>;
    /**
     * The onboarding state of the new merchant's default sandbox, which the test grant points at.
     * Send `not_started` to rehearse verification in test mode. Default: "complete". Value enum:
     * "complete", "not_started".
     */
    "sandbox_initial_onboarding"?: "complete" | "not_started" | (string & {});
};
/** The request body for: Create a merchant signup. */
export type CreateMerchantSignupRequestInput = {
    /**
     * The new merchant's display name until onboarding sets its legal name, 1 to 100 characters,
     * without links or email addresses: the code email shows it. Without it, Flint names the
     * merchant from the owner's email. minLength: 1. maxLength: 100.
     */
    "business_name"?: string;
    /**
     * The PKCE S256 challenge: base64url SHA-256 of a verifier you keep. The authorization codes
     * verify returns are bound to it. minLength: 43. maxLength: 43. pattern: ^[A-Za-z0-9_-]{43}$.
     */
    "code_challenge": string;
    /** Must be `S256`. Value enum: "S256". */
    "code_challenge_method": "S256";
    /**
     * Your identifier for this business, such as your account ID. List signups by it. minLength:
     * 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The modes to install the app in. `live` needs the app's live `create_merchants` capability.
     * Until it is active, a signup may install only in `test`, and only for an owner on your
     * merchant's team (plus-addresses included). minItems: 1. maxItems: 2. uniqueItems: true. []
     * enum: "test", "live". [] (Value): string. Value enum: "test", "live".
     */
    "modes": Array<"test" | "live">;
    /**
     * The owner Flint emails the code to. The person who will own the new merchant. Flint emails
     * the code to this address.
     */
    "owner": MerchantSignupOwnerRequestInput;
    /**
     * Your partner app to install on the new merchant. It must be active and have a
     * `merchant_action_url`. minLength: 1. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id": string;
    /**
     * Optional manifest permissions to request besides the required ones. Defaults to the app's
     * `default_requested_permissions`. Send `[]` to request only the required permissions.
     * uniqueItems: true. [] (Value): string. minLength: 1. Example: "manage_orders".
     */
    "requested_permission_ids"?: Array<string>;
    /**
     * The onboarding state of the new merchant's default sandbox, which the test grant points at.
     * Send `not_started` to rehearse verification in test mode. Default: "complete". Value enum:
     * "complete", "not_started".
     */
    "sandbox_initial_onboarding"?: "complete" | "not_started";
};
/** The request body for: Create modifier group. */
export type CreateModifierGroupRequest = {
    /** Whether buyers can select more than one unit of a list modifier. Default: false. */
    "allow_quantities"?: boolean;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Maximum whole-number quantity for each selected list modifier when allow_quantities is true;
     * fractional quantities are not supported. Format: int64.
     */
    "max_quantity"?: number;
    /**
     * Maximum number of distinct modifiers buyers can select from a list group. Omit it for no
     * limit. A modifier set can override this value. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Maximum combined whole-number quantity across selected list modifiers; fractional quantities
     * are not supported. Format: int64.
     */
    "max_total_quantity"?: number;
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
     * Minimum whole-number quantity for each selected list modifier when allow_quantities is true;
     * fractional quantities are not supported. Format: int64.
     */
    "min_quantity"?: number;
    /**
     * Minimum number of distinct modifiers buyers must select from a list group. Omit it to
     * require no selections. A modifier set can override this value. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Whether buyers choose from a list of modifiers or enter text. On create, inferred as text
     * when text configuration is supplied, otherwise list. Value enum: "list", "text".
     */
    "modifier_group_type"?: "list" | "text" | (string & {});
    /**
     * Choices in a list group. Only active modifiers whose set override's available is not false
     * are offered to buyers. Text groups do not have choices. [] (Value): {@link
     * CreateModifierRequest}. A modifier to create in a modifier group, with its name, price
     * change, tax category, and default selection.
     */
    "modifiers"?: Array<CreateModifierRequest>;
    /** Name of the modifier group shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Whether selections from this group appear in fulfillment details unless overridden for a
     * modifier set.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Whether selections from this group appear on buyer receipts unless overridden for a modifier
     * set.
     */
    "show_on_receipt"?: boolean;
    /**
     * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
     * archived groups remain readable and cannot be edited. Default: "active". Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Text entry rules for a text group. Use text.required to require a value; list groups use
     * min_selected instead. Settings for a text modifier group when creating or updating one:
     * required, multiline, and length limits.
     */
    "text"?: TextModifierConfigRequest;
};
/** The request body for: Create modifier group. */
export type CreateModifierGroupRequestInput = CreateInlineModifierGroupRequestInput;
/**
 * A modifier to create in a modifier group, with its name, price change, tax category, and default
 * selection.
 */
export type CreateModifierRequest = {
    /**
     * Whole-number quantity selected by default. Used only when the choice is available and
     * selected_by_default is true. A modifier set can override this value; fractional quantities
     * are not supported. Format: int64.
     */
    "default_quantity"?: number;
    /**
     * Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods",
     * "software", "saas", "services", "professional_services", "food", "prepared_food",
     * "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission"
        | (string & {});
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Name of the choice shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Display position of the choice within its group; lower values appear first. Format: int32.
     */
    "position"?: number;
    /**
     * Whether this choice is selected when the buyer has not supplied selections for the group. A
     * modifier set can override this value; unavailable choices are never selected by default.
     * Default: false.
     */
    "selected_by_default"?: boolean;
    /** Whether this modifier appears in fulfillment details. */
    "show_on_fulfillment"?: boolean;
    /** Whether this modifier appears on buyer receipts. */
    "show_on_receipt"?: boolean;
    /**
     * Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Default:
     * "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /** Whether this modifier's price is taxable. A modifier set can override this value. */
    "taxable"?: boolean;
    /**
     * Amount added to the item's unit price for each unit of this modifier. A modifier set can
     * override this value. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_delta_money"?: MoneyValue;
};
/**
 * A modifier to create in a modifier group, with its name, price change, tax category, and default
 * selection.
 */
export type CreateModifierRequestInput = {
    /**
     * Whole-number quantity selected by default. Used only when the choice is available and
     * selected_by_default is true. A modifier set can override this value; fractional quantities
     * are not supported. Format: int64.
     */
    "default_quantity"?: number;
    /**
     * Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods",
     * "software", "saas", "services", "professional_services", "food", "prepared_food",
     * "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission";
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Name of the choice shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Display position of the choice within its group; lower values appear first. Format: int32.
     */
    "position"?: number;
    /**
     * Whether this choice is selected when the buyer has not supplied selections for the group. A
     * modifier set can override this value; unavailable choices are never selected by default.
     * Default: false.
     */
    "selected_by_default"?: boolean;
    /** Whether this modifier appears in fulfillment details. */
    "show_on_fulfillment"?: boolean;
    /** Whether this modifier appears on buyer receipts. */
    "show_on_receipt"?: boolean;
    /**
     * Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Default:
     * "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /** Whether this modifier's price is taxable. A modifier set can override this value. */
    "taxable"?: boolean;
    /**
     * Amount added to the item's unit price for each unit of this modifier. A modifier set can
     * override this value. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_delta_money"?: MoneyValueInput;
};
/** The `existing` variant of `CreateModifierSetGroupInput`. */
export type CreateModifierSetGroupInputExisting = ({
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when creating a modifier set, with its selection limits, modifiers or text
     * rules, and display flags.
     */
    "modifier_group"?: CreateModifierGroupRequest;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id": string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverride}. Settings for one modifier that apply only within a modifier set group,
     * overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position"?: number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Use inline for a modifier group owned by this modifier set, or existing to reference an
     * independent modifier group. Value enum: "existing".
     */
    "source": "existing" | (string & {});
})
    & (({
    /** References an independent modifier group. Value enum: "existing". */
    "source": "existing" | (string & {});
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id": string;
}));
/** The `existing` variant of `CreateModifierSetGroupInput`. */
export type CreateModifierSetGroupInputExistingInput = ({
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when creating a modifier set, with its selection limits, modifiers or text
     * rules, and display flags.
     */
    "modifier_group"?: CreateInlineModifierGroupRequestInput;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id": string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverrideRequestInput}. Settings for one modifier that apply only within a modifier
     * set group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverrideRequestInput>;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position"?: number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Use inline for a modifier group owned by this modifier set, or existing to reference an
     * independent modifier group. Value enum: "existing".
     */
    "source": "existing";
})
    & (({
    /** References an independent modifier group. Value enum: "existing". */
    "source": "existing";
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id": string;
})
    & ({
    "modifier_group"?: never;
}));
/** The `inline` variant of `CreateModifierSetGroupInput`. */
export type CreateModifierSetGroupInputInline = ({
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when creating a modifier set, with its selection limits, modifiers or text
     * rules, and display flags.
     */
    "modifier_group": CreateModifierGroupRequest;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id"?: string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverride}. Settings for one modifier that apply only within a modifier set group,
     * overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position"?: number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Use inline for a modifier group owned by this modifier set, or existing to reference an
     * independent modifier group. Value enum: "inline".
     */
    "source": "inline" | (string & {});
})
    & (({
    /** Defines a modifier group owned by this modifier set. Value enum: "inline". */
    "source": "inline" | (string & {});
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when creating a modifier set, with its selection limits, modifiers or text
     * rules, and display flags.
     */
    "modifier_group": CreateModifierGroupRequest;
}));
/** The `inline` variant of `CreateModifierSetGroupInput`. */
export type CreateModifierSetGroupInputInlineInput = ({
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when creating a modifier set, with its selection limits, modifiers or text
     * rules, and display flags.
     */
    "modifier_group": CreateInlineModifierGroupRequestInput;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id"?: string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverrideRequestInput}. Settings for one modifier that apply only within a modifier
     * set group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverrideRequestInput>;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position"?: number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Use inline for a modifier group owned by this modifier set, or existing to reference an
     * independent modifier group. Value enum: "inline".
     */
    "source": "inline";
})
    & (({
    /** Defines a modifier group owned by this modifier set. Value enum: "inline". */
    "source": "inline";
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when creating a modifier set, with its selection limits, modifiers or text
     * rules, and display flags.
     */
    "modifier_group": CreateInlineModifierGroupRequestInput;
})
    & ({
    "modifier_group_id"?: never;
}));
