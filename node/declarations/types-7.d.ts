import type {
    InventoryAdjustmentSetLineRequest,
    InventoryAdjustmentSetLineRequestInput,
    InventoryAllocationConfigurationValue,
    InventoryAllocationConfigurationValueInput
} from './types-24.js';
import type {
    InventorySourceSystemRequest,
    InventorySourceSystemRequestInput,
    InventoryReceiptLineRequest,
    InventoryReceiptLineRequestInput,
    InventoryReservationOwnerRequest,
    InventoryRoutingDemand,
    InventoryRoutingSourceRequest,
    InventoryReservationOwnerRequestInput,
    InventoryRoutingDemandInput,
    InventoryRoutingSourceRequestInput,
    InventoryTransferLineRequest,
    InventoryTransferLineRequestInput,
    InventoryRoutingSource
} from './types-25.js';
import type { InventoryAdjustmentQuantityLineRequest, InventoryAdjustmentQuantityLineRequestInput } from './types-23.js';
import type {
    CreateInventoryAdjustmentConditionChangeRequest,
    CreateInventoryAdjustmentConditionChangeRequestInput,
    CreateInlineModifierGroupRequestInput
} from './types-6.js';
import type { MoneyValue, MoneyValueInput, ModifierOverride, ModifierOverrideInput } from './types-31.js';
import type {
    InvoiceLateFeePolicy,
    InvoiceLateFeePolicyInput,
    InvoiceCollectionRequest,
    InvoiceCollectionRequestInput
} from './types-26.js';
import type {
    InvoicePaymentTermCalculation,
    InvoicePaymentTermCalculationInput,
    InvoicePaymentDueRequest,
    InvoicePaymentDueRequestInput
} from './types-27.js';
import type {
    OrderDeliveryDestinationRequest,
    OrderDeliveryDestinationRequestInput,
    OrderInventoryRoutingSourceRequestInput,
    OrderCalculatedLineItemTax,
    OrderDraftLineItemInventoryDemandRequest,
    OrderLineItemModifierRequest,
    OrderDraftLineItemInventoryDemandRequestInput,
    OrderDraftLineItemTaxRequestInput,
    OrderLineItemModifierRequestInput
} from './types-32.js';
import type {
    OrderTaxRequest,
    OrderTaxRequestInput,
    OrderPaymentSourceSelection,
    OrderPaymentSourceSelectionInput
} from './types-33.js';
import type { AddressRequest, AddressRequestInput } from './types-0.js';
import type {
    InvoiceScheduleEntryWrite,
    InvoiceScheduleEntryWriteInput,
    LineItemFulfillmentRequest,
    LineItemFulfillmentRequestInput
} from './types-28.js';
import type {
    LocationAddressRequest,
    LocationCoordinate,
    LocationAddressRequestInput,
    LocationCoordinateInput,
    ManualDiscountRequest,
    ManualDiscountRequestInput
} from './types-29.js';
import type { SubscriptionDeliveryDestinationRequest, SubscriptionDeliveryDestinationRequestInput } from './types-45.js';
import type { TextModifierConfigRequest } from './types-47.js';
import type { PromotionRefRequest, PromotionRefRequestInput } from './types-38.js';
import type { Dimensions, DimensionsInput } from './types-16.js';
import type {
    GiftCardPurchaseRequest,
    ImageReferenceRequest,
    GiftCardPurchaseDetailsRequestInput,
    ImageReferenceRequestInput
} from './types-19.js';
import type { SubscribedLineRequest, SubscribedLineRequestInput } from './types-44.js';
import type { Weight, WeightInput } from './types-61.js';
import type { PartnerAppPermissionManifestEntry } from './types-34.js';
import type { PartnerAppPermissionManifestEntryInput } from './types-35.js';
/**
 * Shape $ (Value): {@link CreateInventoryAdjustmentCorrectionRequest}. The `correction` variant of
 * `CreateInventoryAdjustmentRequest`.
 */
export type CreateInventoryAdjustmentCorrectionRequest = ({
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): Array of {@link InventoryAdjustmentSetLineRequest}. minItems: 1. maxItems:
     * 100. Shape $[] (Value): {@link InventoryAdjustmentSetLineRequest}. One line of an inventory
     * adjustment that sets absolute quantities for an item at a Location. Omitted quantities stay
     * unchanged.
     */
    "lines": Array<InventoryAdjustmentSetLineRequest>;
    /** Shape $ (Value): string. minLength: 1. pattern: \S. */
    "note": string;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Required
     * when source_system.type is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string;
    /** Shape $ (Value): string.  Value enum: "correction". */
    "reason": "correction" | (string & {});
    /**
     * Shape $ (Value): {@link InventorySourceSystemRequest}. The source system you report for an
     * inventory event, such as manual, pos, wms, erp, or other, with your identifier when it
     * applies.
     */
    "source_system"?: InventorySourceSystemRequest;
})
    & (({
    /**
     * Shape $ (Value): any. Shape $.type (Required): string. Value enum: "pos", "wms", "erp",
     * "other".
     */
    "source_system": null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Shape $ (Value): string.  Value enum: "pos", "wms", "erp", "other". */
        "type": "pos" | "wms" | "erp" | "other" | (string & {});
        /** Shape $ (Value): any. */
        "external_source_id": unknown;
    });
})
    | ({
    /** Shape $ (Value): Array of any or null. Shape $[] (Value): any. */
    "lines"?: unknown;
})
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateInventoryAdjustmentCorrectionRequestInput}. The `correction`
 * variant of `CreateInventoryAdjustmentRequest`.
 */
export type CreateInventoryAdjustmentCorrectionRequestInput = ({
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): Array of {@link InventoryAdjustmentSetLineRequestInput}. minItems: 1.
     * maxItems: 100. Shape $[] (Value): {@link InventoryAdjustmentSetLineRequestInput}. One line
     * of an inventory adjustment that sets absolute quantities for an item at a Location. Omitted
     * quantities stay unchanged.
     */
    "lines": Array<InventoryAdjustmentSetLineRequestInput>;
    /** Shape $ (Value): string. minLength: 1. pattern: \S. */
    "note": string;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Required
     * when source_system.type is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string | globalThis.Date;
    /** Shape $ (Value): string.  Value enum: "correction". */
    "reason": "correction";
    /**
     * Shape $ (Value): {@link InventorySourceSystemRequestInput}. The source system you report for
     * an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it
     * applies.
     */
    "source_system"?: InventorySourceSystemRequestInput;
})
    & (({
    /**
     * Shape $ (Value): any. Shape $.type (Required): string. Value enum: "pos", "wms", "erp",
     * "other".
     */
    "source_system": null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Shape $ (Value): string.  Value enum: "pos", "wms", "erp", "other". */
        "type": "pos" | "wms" | "erp" | "other";
        /** Shape $ (Value): any. */
        "external_source_id": unknown;
    });
})
    | ({
    /** Shape $ (Value): Array of any or null. Shape $[] (Value): any. */
    "lines"?: unknown;
}));
/**
 * Shape $ (Value): {@link CreateInventoryAdjustmentCountedRequest}. The `counted` variant of
 * `CreateInventoryAdjustmentRequest`.
 */
export type CreateInventoryAdjustmentCountedRequest = ({
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): Array of {@link InventoryAdjustmentSetLineRequest}. minItems: 1. maxItems:
     * 100. Shape $[] (Value): {@link InventoryAdjustmentSetLineRequest}. One line of an inventory
     * adjustment that sets absolute quantities for an item at a Location. Omitted quantities stay
     * unchanged.
     */
    "lines": Array<InventoryAdjustmentSetLineRequest>;
    /** Shape $ (Value): string. minLength: 1. */
    "note"?: string;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Required
     * when source_system.type is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string;
    /** Shape $ (Value): string.  Value enum: "counted". */
    "reason": "counted" | (string & {});
    /**
     * Shape $ (Value): {@link InventorySourceSystemRequest}. The source system you report for an
     * inventory event, such as manual, pos, wms, erp, or other, with your identifier when it
     * applies.
     */
    "source_system"?: InventorySourceSystemRequest;
})
    & (({
    /**
     * Shape $ (Value): any. Shape $.type (Required): string. Value enum: "pos", "wms", "erp",
     * "other".
     */
    "source_system": null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Shape $ (Value): string.  Value enum: "pos", "wms", "erp", "other". */
        "type": "pos" | "wms" | "erp" | "other" | (string & {});
        /** Shape $ (Value): any. */
        "external_source_id": unknown;
    });
})
    | ({
    /** Shape $ (Value): Array of any or null. Shape $[] (Value): any. */
    "lines"?: unknown;
})
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateInventoryAdjustmentCountedRequestInput}. The `counted` variant of
 * `CreateInventoryAdjustmentRequest`.
 */
export type CreateInventoryAdjustmentCountedRequestInput = ({
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): Array of {@link InventoryAdjustmentSetLineRequestInput}. minItems: 1.
     * maxItems: 100. Shape $[] (Value): {@link InventoryAdjustmentSetLineRequestInput}. One line
     * of an inventory adjustment that sets absolute quantities for an item at a Location. Omitted
     * quantities stay unchanged.
     */
    "lines": Array<InventoryAdjustmentSetLineRequestInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "note"?: string;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Required
     * when source_system.type is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string | globalThis.Date;
    /** Shape $ (Value): string.  Value enum: "counted". */
    "reason": "counted";
    /**
     * Shape $ (Value): {@link InventorySourceSystemRequestInput}. The source system you report for
     * an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it
     * applies.
     */
    "source_system"?: InventorySourceSystemRequestInput;
})
    & (({
    /**
     * Shape $ (Value): any. Shape $.type (Required): string. Value enum: "pos", "wms", "erp",
     * "other".
     */
    "source_system": null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Shape $ (Value): string.  Value enum: "pos", "wms", "erp", "other". */
        "type": "pos" | "wms" | "erp" | "other";
        /** Shape $ (Value): any. */
        "external_source_id": unknown;
    });
})
    | ({
    /** Shape $ (Value): Array of any or null. Shape $[] (Value): any. */
    "lines"?: unknown;
}));
/**
 * Shape $ (Value): {@link CreateInventoryAdjustmentQuantityRequest}. The `loss` variant of
 * `CreateInventoryAdjustmentRequest`. The `received` variant of
 * `CreateInventoryAdjustmentRequest`. The `returned` variant of
 * `CreateInventoryAdjustmentRequest`. The `sold` variant of `CreateInventoryAdjustmentRequest`.
 * The `theft` variant of `CreateInventoryAdjustmentRequest`.
 */
export type CreateInventoryAdjustmentQuantityRequest = ({
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): Array of {@link InventoryAdjustmentQuantityLineRequest}. minItems: 1.
     * maxItems: 100. Shape $[] (Value): {@link InventoryAdjustmentQuantityLineRequest}. One line
     * of an inventory quantity adjustment: a `quantity` of an item at a Location, in the given
     * `condition`.
     */
    "lines": Array<InventoryAdjustmentQuantityLineRequest>;
    /** Shape $ (Value): string. minLength: 1. */
    "note"?: string;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Required
     * when source_system.type is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string;
    /** Shape $ (Value): string.  Value enum: "received", "returned", "sold", "theft", "loss". */
    "reason": "received" | "returned" | "sold" | "theft" | "loss" | (string & {});
    /**
     * Shape $ (Value): {@link InventorySourceSystemRequest}. The source system you report for an
     * inventory event, such as manual, pos, wms, erp, or other, with your identifier when it
     * applies.
     */
    "source_system"?: InventorySourceSystemRequest;
});
/**
 * Shape $ (Value): {@link CreateInventoryAdjustmentQuantityRequestInput}. The `loss` variant of
 * `CreateInventoryAdjustmentRequest`. The `received` variant of
 * `CreateInventoryAdjustmentRequest`. The `returned` variant of
 * `CreateInventoryAdjustmentRequest`. The `sold` variant of `CreateInventoryAdjustmentRequest`.
 * The `theft` variant of `CreateInventoryAdjustmentRequest`.
 */
export type CreateInventoryAdjustmentQuantityRequestInput = ({
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): Array of {@link InventoryAdjustmentQuantityLineRequestInput}. minItems: 1.
     * maxItems: 100. Shape $[] (Value): {@link InventoryAdjustmentQuantityLineRequestInput}. One
     * line of an inventory quantity adjustment: a `quantity` of an item at a Location, in the
     * given `condition`.
     */
    "lines": Array<InventoryAdjustmentQuantityLineRequestInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "note"?: string;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Required
     * when source_system.type is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string | globalThis.Date;
    /** Shape $ (Value): string.  Value enum: "received", "returned", "sold", "theft", "loss". */
    "reason": "received" | "returned" | "sold" | "theft" | "loss";
    /**
     * Shape $ (Value): {@link InventorySourceSystemRequestInput}. The source system you report for
     * an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it
     * applies.
     */
    "source_system"?: InventorySourceSystemRequestInput;
});
/**
 * Shape $ (Value): {@link CreateInventoryAdjustmentRequest}. The request body for: Create
 * inventory adjustment.
 */
export type CreateInventoryAdjustmentRequest = ((CreateInventoryAdjustmentQuantityRequest)
    | (CreateInventoryAdjustmentConditionChangeRequest)
    | (CreateInventoryAdjustmentCountedRequest)
    | (CreateInventoryAdjustmentCorrectionRequest)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateInventoryAdjustmentRequestInput}. The request body for: Create
 * inventory adjustment.
 */
export type CreateInventoryAdjustmentRequestInput = ((CreateInventoryAdjustmentQuantityRequestInput)
    | (CreateInventoryAdjustmentConditionChangeRequestInput)
    | (CreateInventoryAdjustmentCountedRequestInput)
    | (CreateInventoryAdjustmentCorrectionRequestInput));
/**
 * Shape $ (Value): {@link CreateInventoryAllocationPolicyRequest}. The request body for: Create
 * inventory allocation policy.
 */
export type CreateInventoryAllocationPolicyRequest = {
    /**
     * Shape $ (Value): {@link InventoryAllocationConfigurationValue}. Routing rules for an
     * inventory allocation policy: ranked groups of Locations, whether demand can be split, and
     * how many Locations one assignment may use.
     */
    "configuration": InventoryAllocationConfigurationValue;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /** Shape $ (Value): string. Default: "active". Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateInventoryAllocationPolicyRequestInput}. The request body for:
 * Create inventory allocation policy.
 */
export type CreateInventoryAllocationPolicyRequestInput = {
    /**
     * Shape $ (Value): {@link InventoryAllocationConfigurationValueInput}. Routing rules for an
     * inventory allocation policy: ranked groups of Locations, whether demand can be split, and
     * how many Locations one assignment may use.
     */
    "configuration": InventoryAllocationConfigurationValueInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /** Shape $ (Value): string. Default: "active". Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
};
/**
 * Shape $ (Value): {@link CreateInventoryCountRequest}. The request body for: Create inventory
 * count.
 */
export type CreateInventoryCountRequest = {
    /**
     * Shape $ (Value): Array of string. minItems: 1. maxItems: 100. Shape $[] (Value): string.
     * minLength: 1.
     */
    "inventory_item_ids": Array<string>;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id": string;
};
/**
 * Shape $ (Value): {@link CreateInventoryCountRequestInput}. The request body for: Create
 * inventory count.
 */
export type CreateInventoryCountRequestInput = CreateInventoryCountRequest;
/**
 * Shape $ (Value): {@link CreateInventoryItemRequest}. The request body for: Create inventory
 * item.
 */
export type CreateInventoryItemRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "barcode"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /** Shape $ (Value): string. minLength: 1. */
    "sku"?: string;
    /** Shape $ (Value): string. Default: "active". Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateInventoryItemRequestInput}. The request body for: Create inventory
 * item.
 */
export type CreateInventoryItemRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "barcode"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /** Shape $ (Value): string. minLength: 1. */
    "sku"?: string;
    /** Shape $ (Value): string. Default: "active". Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
};
/**
 * Shape $ (Value): {@link CreateInventoryReceiptRequest}. The request body for: Create inventory
 * receipt.
 */
export type CreateInventoryReceiptRequest = ({
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): Array of {@link InventoryReceiptLineRequest}. Shape $[] (Value): {@link
     * InventoryReceiptLineRequest}. One line of an inventory receipt you supply: a quantity of an
     * item received at a Location with its disposition.
     */
    "lines": Array<InventoryReceiptLineRequest>;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Required
     * when source_system.type is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): {@link InventorySourceSystemRequest}. The source system you report for an
     * inventory event, such as manual, pos, wms, erp, or other, with your identifier when it
     * applies.
     */
    "source_system"?: InventorySourceSystemRequest;
});
/**
 * Shape $ (Value): {@link CreateInventoryReceiptRequestInput}. The request body for: Create
 * inventory receipt.
 */
export type CreateInventoryReceiptRequestInput = ({
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): Array of {@link InventoryReceiptLineRequestInput}. Shape $[] (Value):
     * {@link InventoryReceiptLineRequestInput}. One line of an inventory receipt you supply: a
     * quantity of an item received at a Location with its disposition.
     */
    "lines": Array<InventoryReceiptLineRequestInput>;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Required
     * when source_system.type is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): {@link InventorySourceSystemRequestInput}. The source system you report for
     * an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it
     * applies.
     */
    "source_system"?: InventorySourceSystemRequestInput;
});
/**
 * Shape $ (Value): {@link CreateInventoryReservationRequest}. The request body for: Create
 * inventory reservation.
 */
export type CreateInventoryReservationRequest = {
    /**
     * Shape $ (Value): Array of {@link InventoryRoutingDemand}. Shape $[] (Value): {@link
     * InventoryRoutingDemand}. Stock you ask to reserve for one item: the item and quantity, plus
     * optional Location limits and splitting behavior.
     */
    "demands": Array<InventoryRoutingDemand>;
    /**
     * Shape $ (Value): string. Hold deadline, after now and at most 24 hours from now. Defaults to
     * 15 minutes after creation. Format: date-time. minLength: 1.
     */
    "expires_at"?: string;
    /**
     * Shape $ (Value): {@link InventoryRoutingSourceRequest}. Where you want inventory routed
     * from: a fixed Location, an inventory allocation policy, or one policy revision, selected by
     * `type`.
     */
    "inventory_routing_source": InventoryRoutingSourceRequest;
    /**
     * Shape $ (Value): {@link InventoryReservationOwnerRequest}. The owner of a merchant inventory
     * reservation you create: your `key` for what holds the stock.
     */
    "owner": InventoryReservationOwnerRequest;
};
/**
 * Shape $ (Value): {@link CreateInventoryReservationRequestInput}. The request body for: Create
 * inventory reservation.
 */
export type CreateInventoryReservationRequestInput = {
    /**
     * Shape $ (Value): Array of {@link InventoryRoutingDemandInput}. Shape $[] (Value): {@link
     * InventoryRoutingDemandInput}. Stock you ask to reserve for one item: the item and quantity,
     * plus optional Location limits and splitting behavior.
     */
    "demands": Array<InventoryRoutingDemandInput>;
    /**
     * Shape $ (Value): string. Hold deadline, after now and at most 24 hours from now. Defaults to
     * 15 minutes after creation. Format: date-time. minLength: 1.
     */
    "expires_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): {@link InventoryRoutingSourceRequestInput}. Where you want inventory routed
     * from: a fixed Location, an inventory allocation policy, or one policy revision, selected by
     * `type`.
     */
    "inventory_routing_source": InventoryRoutingSourceRequestInput;
    /**
     * Shape $ (Value): {@link InventoryReservationOwnerRequestInput}. The owner of a merchant
     * inventory reservation you create: your `key` for what holds the stock.
     */
    "owner": InventoryReservationOwnerRequestInput;
};
/**
 * Shape $ (Value): {@link CreateInventoryTransferRequest}. The request body for: Create inventory
 * transfer.
 */
export type CreateInventoryTransferRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "destination_location_id": string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link InventoryTransferLineRequest}. minItems: 1. maxItems: 100.
     * Shape $[] (Value): {@link InventoryTransferLineRequest}. One line of an inventory transfer
     * you create: an item and the requested quantity.
     */
    "lines": Array<InventoryTransferLineRequest>;
    /** Shape $ (Value): string. minLength: 1. */
    "note"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "origin_location_id": string;
};
/**
 * Shape $ (Value): {@link CreateInventoryTransferRequestInput}. The request body for: Create
 * inventory transfer.
 */
export type CreateInventoryTransferRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "destination_location_id": string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link InventoryTransferLineRequestInput}. minItems: 1. maxItems:
     * 100. Shape $[] (Value): {@link InventoryTransferLineRequestInput}. One line of an inventory
     * transfer you create: an item and the requested quantity.
     */
    "lines": Array<InventoryTransferLineRequestInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "note"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "origin_location_id": string;
};
/**
 * Shape $ (Value): {@link CreateInvoiceIssueRequest}. Options for issuing an invoice as you create
 * it. `delivery_mode` chooses how the invoice reaches its recipient.
 */
export type CreateInvoiceIssueRequest = {
    /**
     * Shape $ (Value): string. merchant_default uses the merchant invoice delivery setting; email
     * sends the invoice to its recipient; caller_managed returns the buyer-access link for you to
     * deliver. Default: "merchant_default". Value enum: "merchant_default", "email",
     * "caller_managed".
     */
    "delivery_mode"?: "merchant_default" | "email" | "caller_managed" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateInvoiceIssueRequestInput}. Options for issuing an invoice as you
 * create it. `delivery_mode` chooses how the invoice reaches its recipient.
 */
export type CreateInvoiceIssueRequestInput = {
    /**
     * Shape $ (Value): string. merchant_default uses the merchant invoice delivery setting; email
     * sends the invoice to its recipient; caller_managed returns the buyer-access link for you to
     * deliver. Default: "merchant_default". Value enum: "merchant_default", "email",
     * "caller_managed".
     */
    "delivery_mode"?: "merchant_default" | "email" | "caller_managed";
};
/**
 * Shape $ (Value): {@link CreateInvoiceManualPaymentRequest}. The request body for: Create invoice
 * manual payment.
 */
export type CreateInvoiceManualPaymentRequest = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): integer string. Expected version of the invoice. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. maxLength: 4096. */
    "note"?: string;
    /**
     * Shape $ (Value): string. Caller-owned check, wire, or bank reference, stored unmodified.
     * minLength: 1. maxLength: 255.
     */
    "payment_reference"?: string;
    /**
     * Shape $ (Value): string. When the payment was received. Defaults to now. Format: date-time.
     * minLength: 1.
     */
    "received_at"?: string;
};
/**
 * Shape $ (Value): {@link CreateInvoiceManualPaymentRequestInput}. The request body for: Create
 * invoice manual payment.
 */
export type CreateInvoiceManualPaymentRequestInput = {
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Shape $ (Value): integer string. Expected version of the invoice. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. maxLength: 4096. */
    "note"?: string;
    /**
     * Shape $ (Value): string. Caller-owned check, wire, or bank reference, stored unmodified.
     * minLength: 1. maxLength: 255.
     */
    "payment_reference"?: string;
    /**
     * Shape $ (Value): string. When the payment was received. Defaults to now. Format: date-time.
     * minLength: 1.
     */
    "received_at"?: string | globalThis.Date;
};
/**
 * Shape $ (Value): {@link CreateInvoicePaymentTermRequest}. The request body for: Create invoice
 * payment term.
 */
export type CreateInvoicePaymentTermRequest = {
    /**
     * Shape $ (Value): {@link InvoicePaymentTermCalculation}. How an invoice due date is
     * calculated from payment terms, such as on receipt, net days, or a day of the month.
     */
    "calculation": InvoicePaymentTermCalculation;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link InvoiceLateFeePolicy}. A late fee for overdue invoices: a fixed
     * amount or a percentage, a grace period in days, and whether Flint applies it automatically.
     */
    "late_fee_policy"?: InvoiceLateFeePolicy;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
};
/**
 * Shape $ (Value): {@link CreateInvoicePaymentTermRequestInput}. The request body for: Create
 * invoice payment term.
 */
export type CreateInvoicePaymentTermRequestInput = {
    /**
     * Shape $ (Value): {@link InvoicePaymentTermCalculationInput}. How an invoice due date is
     * calculated from payment terms, such as on receipt, net days, or a day of the month.
     */
    "calculation": InvoicePaymentTermCalculationInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link InvoiceLateFeePolicyInput}. A late fee for overdue invoices: a fixed
     * amount or a percentage, a grace period in days, and whether Flint applies it automatically.
     */
    "late_fee_policy"?: InvoiceLateFeePolicyInput;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
};
/**
 * Shape $ (Value): {@link CreateInvoiceQuickPayRequest}. Inline order details for creating an
 * invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.
 */
export type CreateInvoiceQuickPayRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "buyer_note"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): {@link OrderDeliveryDestinationRequest}. The delivery destination you set
     * when creating or updating an order, with an address and an optional recipient.
     */
    "delivery_destination"?: OrderDeliveryDestinationRequest;
    /**
     * Shape $ (Value): Array of {@link CreateOrderDiscount}. Shape $[] (Value): {@link
     * CreateOrderDiscount}. A discount to apply when creating an order: either a manual discount
     * or a reference to a promotion.
     */
    "discounts"?: Array<CreateOrderDiscount>;
    /** Shape $ (Value): string. minLength: 1. */
    "internal_note"?: string;
    /**
     * Shape $ (Value): {@link InventoryRoutingSource}. Where this invoice backing order's tracked
     * demand is routed: a fixed Location, or an allocation policy. Required when any line tracks
     * inventory. Where inventory for an order is allocated from: a fixed location, an allocation
     * policy, or a specific policy revision.
     */
    "inventory_routing_source"?: InventoryRoutingSource;
    /**
     * Shape $ (Value): Array of {@link CreateOrderLineItem}. minItems: 1. Shape $[] (Value):
     * {@link CreateOrderLineItem}. A line item to add to an order: a catalog variant, a bundle, or
     * a custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItem>;
    /**
     * Shape $ (Value): {@link CreateOrderTip}. Requested tip expressed as either a flat amount or
     * a percentage. Send exactly one of amount_money or percent.
     */
    "requested_tip"?: CreateOrderTip;
    /**
     * Shape $ (Value): {@link OrderTaxRequest}. Tax settings you supply when creating an order:
     * whether tax is enabled, how it is calculated, and the tax location.
     */
    "tax"?: OrderTaxRequest;
};
/**
 * Shape $ (Value): {@link CreateInvoiceQuickPayRequestInput}. Inline order details for creating an
 * invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.
 */
export type CreateInvoiceQuickPayRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "buyer_note"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): {@link OrderDeliveryDestinationRequestInput}. The delivery destination you
     * set when creating or updating an order, with an address and an optional recipient.
     */
    "delivery_destination"?: OrderDeliveryDestinationRequestInput;
    /**
     * Shape $ (Value): Array of {@link CreateOrderDiscountInput}. Shape $[] (Value): {@link
     * CreateOrderDiscountInput}. A discount to apply when creating an order: either a manual
     * discount or a reference to a promotion.
     */
    "discounts"?: Array<CreateOrderDiscountInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "internal_note"?: string;
    /**
     * Shape $ (Value): {@link OrderInventoryRoutingSourceRequestInput}. Where this invoice backing
     * order's tracked demand is routed: a fixed Location, or an allocation policy. Required when
     * any line tracks inventory. Where inventory for an order is allocated from: a fixed location,
     * an allocation policy, or a specific policy revision.
     */
    "inventory_routing_source"?: OrderInventoryRoutingSourceRequestInput;
    /**
     * Shape $ (Value): Array of {@link CreateOrderLineItemRequestInput}. minItems: 1. Shape $[]
     * (Value): {@link CreateOrderLineItemRequestInput}. A line item to add to an order: a catalog
     * variant, a bundle, or a custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItemRequestInput>;
    /**
     * Shape $ (Value): {@link CreateOrderTipInput}. Requested tip expressed as either a flat
     * amount or a percentage. Send exactly one of amount_money or percent.
     */
    "requested_tip"?: CreateOrderTipInput;
    /**
     * Shape $ (Value): {@link OrderTaxRequestInput}. Tax settings you supply when creating an
     * order: whether tax is enabled, how it is calculated, and the tax location.
     */
    "tax"?: OrderTaxRequestInput;
};
/** Shape $ (Value): {@link CreateInvoiceRequest}. The request body for: Create invoice. */
export type CreateInvoiceRequest = ({
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "cc_emails"?: Array<string>;
    /**
     * Shape $ (Value): {@link InvoiceCollectionRequest}. How an invoice is collected, used when
     * creating or updating an invoice: a `mode`, an optional saved payment method, and a payment
     * policy.
     */
    "collection"?: InvoiceCollectionRequest;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "footer"?: string;
    /**
     * Shape $ (Value): {@link CreateInvoiceIssueRequest}. Issue the invoice immediately after
     * creating it. An empty object uses merchant_default delivery. Cannot be combined with a
     * scheduled_issue_at timestamp. Options for issuing an invoice as you create it.
     * `delivery_mode` chooses how the invoice reaches its recipient.
     */
    "issue"?: CreateInvoiceIssueRequest;
    /** Shape $ (Value): string. minLength: 1. */
    "memo"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "order_id"?: string;
    /**
     * Shape $ (Value): {@link InvoicePaymentDueRequest}. When an invoice is due, used when
     * creating or updating an invoice: no due date, a fixed time, payment terms, or a default.
     * Default: {"type":"merchant_default"}. When an invoice is due, used when creating or updating
     * an invoice: no due date, a fixed time, payment terms, or a default.
     */
    "payment_due"?: InvoicePaymentDueRequest;
    /** Shape $ (Value): string. minLength: 1. */
    "po_number"?: string;
    /**
     * Shape $ (Value): {@link CreateInvoiceQuickPayRequest}. Inline order details for creating an
     * invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.
     */
    "quick_pay"?: CreateInvoiceQuickPayRequest;
    /** Shape $ (Value): string. minLength: 1. */
    "recipient_email"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "reference"?: string;
    /**
     * Shape $ (Value): {@link AddressRequest}. A postal address you supply when creating or
     * updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to
     * clear it.
     */
    "remit_to_address"?: AddressRequest;
    /**
     * Shape $ (Value): Array of {@link InvoiceScheduleEntryWrite}. Complete draft payment schedule
     * with at most 14 entries. Validation errors identify the entry by index, such as
     * schedule_entries[3].kind. Enum values are case-sensitive and must not contain surrounding
     * whitespace. Omission preserves the current or default schedule; [] clears the authored
     * schedule. Null is not accepted. On PATCH, include invoice_schedule_entry_id to retain an
     * entry and expected_version to detect concurrent edits. maxItems: 14. Shape $[] (Value):
     * {@link InvoiceScheduleEntryWrite}. One payment schedule entry you supply when creating or
     * updating an invoice. Set its kind, how much it collects, and when it is due.
     */
    "schedule_entries"?: Array<InvoiceScheduleEntryWrite>;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "scheduled_issue_at"?: string | null;
    /** Shape $ (Value): string. Calendar date in YYYY-MM-DD format. Format: date. minLength: 1. */
    "service_date"?: string;
})
    & ((({
    /** Shape $ (Value): string. minLength: 1. */
    "order_id": string;
}))
    | (({
    /**
     * Shape $ (Value): {@link CreateInvoiceQuickPayRequest}. Inline order details for creating an
     * invoice as `quick_pay`: line items, discounts, notes, customer, tip, and inventory routing.
     */
    "quick_pay": CreateInvoiceQuickPayRequest;
}))
    | (Record<string, unknown>));
/** Shape $ (Value): {@link CreateInvoiceRequestInput}. The request body for: Create invoice. */
export type CreateInvoiceRequestInput = ({
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "cc_emails"?: Array<string>;
    /**
     * Shape $ (Value): {@link InvoiceCollectionRequestInput}. How an invoice is collected, used
     * when creating or updating an invoice: a `mode`, an optional saved payment method, and a
     * payment policy.
     */
    "collection"?: InvoiceCollectionRequestInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "footer"?: string;
    /**
     * Shape $ (Value): {@link CreateInvoiceIssueRequestInput}. Issue the invoice immediately after
     * creating it. An empty object uses merchant_default delivery. Cannot be combined with a
     * scheduled_issue_at timestamp. Options for issuing an invoice as you create it.
     * `delivery_mode` chooses how the invoice reaches its recipient.
     */
    "issue"?: CreateInvoiceIssueRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "memo"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "order_id"?: string;
    /**
     * Shape $ (Value): {@link InvoicePaymentDueRequestInput}. When an invoice is due, used when
     * creating or updating an invoice: no due date, a fixed time, payment terms, or a default.
     * Default: {"type":"merchant_default"}. When an invoice is due, used when creating or updating
     * an invoice: no due date, a fixed time, payment terms, or a default.
     */
    "payment_due"?: InvoicePaymentDueRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "po_number"?: string;
    /**
     * Shape $ (Value): {@link CreateInvoiceQuickPayRequestInput}. Inline order details for
     * creating an invoice as `quick_pay`: line items, discounts, notes, customer, tip, and
     * inventory routing.
     */
    "quick_pay"?: CreateInvoiceQuickPayRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "recipient_email"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "reference"?: string;
    /**
     * Shape $ (Value): {@link AddressRequestInput}. A postal address you supply when creating or
     * updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to
     * clear it.
     */
    "remit_to_address"?: AddressRequestInput;
    /**
     * Shape $ (Value): Array of {@link InvoiceScheduleEntryWriteInput}. Complete draft payment
     * schedule with at most 14 entries. Validation errors identify the entry by index, such as
     * schedule_entries[3].kind. Enum values are case-sensitive and must not contain surrounding
     * whitespace. Omission preserves the current or default schedule; [] clears the authored
     * schedule. Null is not accepted. On PATCH, include invoice_schedule_entry_id to retain an
     * entry and expected_version to detect concurrent edits. maxItems: 14. Shape $[] (Value):
     * {@link InvoiceScheduleEntryWriteInput}. One payment schedule entry you supply when creating
     * or updating an invoice. Set its kind, how much it collects, and when it is due.
     */
    "schedule_entries"?: Array<InvoiceScheduleEntryWriteInput>;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "scheduled_issue_at"?: string | globalThis.Date | null;
    /** Shape $ (Value): string. Calendar date in YYYY-MM-DD format. Format: date. minLength: 1. */
    "service_date"?: string;
})
    & ((({
    /** Shape $ (Value): string. minLength: 1. */
    "order_id": string;
})
    & (({
    "quick_pay"?: never;
})))
    | (({
    /**
     * Shape $ (Value): {@link CreateInvoiceQuickPayRequestInput}. Inline order details for
     * creating an invoice as `quick_pay`: line items, discounts, notes, customer, tip, and
     * inventory routing.
     */
    "quick_pay": CreateInvoiceQuickPayRequestInput;
})
    & (({
    "order_id"?: never;
}))));
/** Shape $ (Value): {@link CreateLocationRequest}. The request body for: Create location. */
export type CreateLocationRequest = {
    /**
     * Shape $ (Value): {@link LocationAddressRequest}. The street address you supply when creating
     * or updating a merchant location. Send null on an optional field to clear it.
     */
    "address": LocationAddressRequest;
    /**
     * Shape $ (Value): {@link LocationCoordinate}. A latitude and longitude for a merchant
     * location.
     */
    "coordinate"?: LocationCoordinate;
    /**
     * Shape $ (Value): string or null. Send null to clear it. Value enum: "merchant_supplied",
     * "geocoded", null.
     */
    "coordinate_source"?: "merchant_supplied" | "geocoded" | null | (string & {}) | null;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): boolean. Whether this Location accepts inventory allocation. Sending this
     * field requires commerce.inventory_locations.write in addition to the route scope. Default:
     * false.
     */
    "inventory_allocation_enabled"?: boolean;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. maxProperties: 50. Shape $.* (Value): string. minLength: 1. maxLength: 4096.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
    /** Shape $ (Value): string. Default: "active". Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "timezone": string;
};
/** Shape $ (Value): {@link CreateLocationRequestInput}. The request body for: Create location. */
export type CreateLocationRequestInput = {
    /**
     * Shape $ (Value): {@link LocationAddressRequestInput}. The street address you supply when
     * creating or updating a merchant location. Send null on an optional field to clear it.
     */
    "address": LocationAddressRequestInput;
    /**
     * Shape $ (Value): {@link LocationCoordinateInput}. A latitude and longitude for a merchant
     * location.
     */
    "coordinate"?: LocationCoordinateInput;
    /**
     * Shape $ (Value): string or null. Send null to clear it. Value enum: "merchant_supplied",
     * "geocoded", null.
     */
    "coordinate_source"?: "merchant_supplied" | "geocoded" | null;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): boolean. Whether this Location accepts inventory allocation. Sending this
     * field requires commerce.inventory_locations.write in addition to the route scope. Default:
     * false.
     */
    "inventory_allocation_enabled"?: boolean;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. maxProperties: 50. Shape $.* (Value): string. minLength: 1. maxLength: 4096.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
    /** Shape $ (Value): string. Default: "active". Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
    /** Shape $ (Value): string. minLength: 1. */
    "timezone": string;
};
/**
 * Shape $ (Value): {@link CreateMeSubscriptionPreviewRequest}. The request body for: Preview
 * subscription.
 */
export type CreateMeSubscriptionPreviewRequest = (({
    /**
     * Shape $ (Value): {@link SubscriptionDeliveryDestinationRequest}. Where to deliver a
     * subscription: a saved customer address by ID, or a new address.
     */
    "destination": SubscriptionDeliveryDestinationRequest;
    /** Shape $ (Value): string.  Value enum: "delivery_options". */
    "mode": "delivery_options";
    /** Shape $ (Value): string. minLength: 1. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_id": string;
})
    | ({
    /** Shape $ (Value): string.  Value enum: "next_renewal". */
    "mode": "next_renewal";
    /** Shape $ (Value): string. minLength: 1. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_id": string;
})
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateMeSubscriptionPreviewRequestInput}. The request body for: Preview
 * subscription.
 */
export type CreateMeSubscriptionPreviewRequestInput = (({
    /**
     * Shape $ (Value): {@link SubscriptionDeliveryDestinationRequestInput}. Where to deliver a
     * subscription: a saved customer address by ID, or a new address.
     */
    "destination": SubscriptionDeliveryDestinationRequestInput;
    /** Shape $ (Value): string.  Value enum: "delivery_options". */
    "mode": "delivery_options";
    /** Shape $ (Value): string. minLength: 1. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_id": string;
})
    | ({
    /** Shape $ (Value): string.  Value enum: "next_renewal". */
    "mode": "next_renewal";
    /** Shape $ (Value): string. minLength: 1. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_id": string;
}));
/**
 * Shape $ (Value): {@link CreateModifierGroupRequest}. The request body for: Create modifier
 * group.
 */
export type CreateModifierGroupRequest = {
    /**
     * Shape $ (Value): boolean. Whether buyers can select more than one unit of a list modifier.
     * Default: false.
     */
    "allow_quantities"?: boolean;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): integer string. Maximum whole-number quantity for each selected list
     * modifier when allow_quantities is true; fractional quantities are not supported. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "max_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): integer. Maximum number of distinct modifiers buyers can select from a list
     * group. Omit it for no limit. A modifier set can override this value. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer string. Maximum combined whole-number quantity across selected list
     * modifiers; fractional quantities are not supported. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64.
     */
    "max_total_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): integer string. Minimum whole-number quantity for each selected list
     * modifier when allow_quantities is true; fractional quantities are not supported. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "min_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): integer. Minimum number of distinct modifiers buyers must select from a
     * list group. Omit it to require no selections. A modifier set can override this value.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): string. Whether buyers choose from a list of modifiers or enter text. On
     * create, inferred as text when text configuration is supplied, otherwise list. Value enum:
     * "list", "text".
     */
    "modifier_group_type"?: "list" | "text" | (string & {});
    /**
     * Shape $ (Value): Array of {@link CreateModifierRequest}. Choices in a list group. Only
     * active modifiers whose set override's available is not false are offered to buyers. Text
     * groups do not have choices. Shape $[] (Value): {@link CreateModifierRequest}. A modifier to
     * create in a modifier group, with its name, price change, tax category, and default
     * selection.
     */
    "modifiers"?: Array<CreateModifierRequest>;
    /**
     * Shape $ (Value): string. Name of the modifier group shown to buyers. minLength: 1.
     * maxLength: 255.
     */
    "name": string;
    /**
     * Shape $ (Value): boolean. Whether selections from this group appear in fulfillment details
     * unless overridden for a modifier set.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Whether selections from this group appear on buyer receipts unless
     * overridden for a modifier set.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Lifecycle status of the modifier group. Only active groups can be
     * offered to buyers; archived groups remain readable and cannot be edited. Default: "active".
     * Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Shape $ (Value): {@link TextModifierConfigRequest}. Text entry rules for a text group. Use
     * text.required to require a value; list groups use min_selected instead. Settings for a text
     * modifier group when creating or updating one: required, multiline, and length limits.
     */
    "text"?: TextModifierConfigRequest;
};
/**
 * Shape $ (Value): {@link CreateModifierGroupRequestInput}. The request body for: Create modifier
 * group.
 */
export type CreateModifierGroupRequestInput = CreateInlineModifierGroupRequestInput;
/**
 * Shape $ (Value): {@link CreateModifierRequest}. A modifier to create in a modifier group, with
 * its name, price change, tax category, and default selection.
 */
export type CreateModifierRequest = {
    /**
     * Shape $ (Value): integer string. Whole-number quantity selected by default. Used only when
     * the choice is available and selected_by_default is true. A modifier set can override this
     * value; fractional quantities are not supported. Use an integer string (decimal digits), not
     * a floating-point number. Format: int64.
     */
    "default_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Flint line-item tax category. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission".
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
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Name of the choice shown to buyers. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Shape $ (Value): integer. Display position of the choice within its group; lower values
     * appear first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Whether this choice is selected when the buyer has not supplied
     * selections for the group. A modifier set can override this value; unavailable choices are
     * never selected by default. Default: false.
     */
    "selected_by_default"?: boolean;
    /** Shape $ (Value): boolean. Whether this modifier appears in fulfillment details. */
    "show_on_fulfillment"?: boolean;
    /** Shape $ (Value): boolean. Whether this modifier appears on buyer receipts. */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Lifecycle status of the modifier. Only active modifiers can be
     * offered to buyers. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Shape $ (Value): boolean. Whether this modifier's price is taxable. A modifier set can
     * override this value.
     */
    "taxable"?: boolean;
    /**
     * Shape $ (Value): {@link MoneyValue}. Amount added to the item's unit price for each unit of
     * this modifier. A modifier set can override this value. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_delta_money"?: MoneyValue;
};
/**
 * Shape $ (Value): {@link CreateModifierRequestInput}. A modifier to create in a modifier group,
 * with its name, price change, tax category, and default selection.
 */
export type CreateModifierRequestInput = {
    /**
     * Shape $ (Value): integer string. Whole-number quantity selected by default. Used only when
     * the choice is available and selected_by_default is true. A modifier set can override this
     * value; fractional quantities are not supported. Use an integer string (decimal digits), not
     * a floating-point number. Format: int64.
     */
    "default_quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Flint line-item tax category. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission".
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
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Name of the choice shown to buyers. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Shape $ (Value): integer. Display position of the choice within its group; lower values
     * appear first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Whether this choice is selected when the buyer has not supplied
     * selections for the group. A modifier set can override this value; unavailable choices are
     * never selected by default. Default: false.
     */
    "selected_by_default"?: boolean;
    /** Shape $ (Value): boolean. Whether this modifier appears in fulfillment details. */
    "show_on_fulfillment"?: boolean;
    /** Shape $ (Value): boolean. Whether this modifier appears on buyer receipts. */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Lifecycle status of the modifier. Only active modifiers can be
     * offered to buyers. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Shape $ (Value): boolean. Whether this modifier's price is taxable. A modifier set can
     * override this value.
     */
    "taxable"?: boolean;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Amount added to the item's unit price for each
     * unit of this modifier. A modifier set can override this value. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_delta_money"?: MoneyValueInput;
};
/**
 * Shape $ (Value): {@link CreateModifierSetGroupInputExisting}. The `existing` variant of
 * `CreateModifierSetGroupInput`.
 */
export type CreateModifierSetGroupInputExisting = ({
    /**
     * Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's
     * name. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, there is no
     * limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, the minimum is 0.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): {@link CreateModifierGroupRequest}. Modifier group owned by this set when
     * source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when creating a
     * modifier set, with its selection limits, modifiers or text rules, and display flags.
     */
    "modifier_group"?: CreateModifierGroupRequest;
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id": string;
    /**
     * Shape $ (Value): Array of {@link ModifierOverride}. Overrides for individual list modifiers
     * in this set. A choice is offered only when its status is active and its override's available
     * is not false. Shape $[] (Value): {@link ModifierOverride}. Settings for one modifier that
     * apply only within a modifier set group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Shape $ (Value): integer. Display position of this group within the set; lower values appear
     * first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use
     * the group's value. Accepted only for text groups; list groups use min_selected.
     */
    "required"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to
     * use the group's value.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use
     * the group's value.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Use inline for a modifier group owned by this modifier set, or
     * existing to reference an independent modifier group. Value enum: "existing".
     */
    "source": "existing" | (string & {});
})
    & (({
    /**
     * Shape $ (Value): string. References an independent modifier group. Value enum: "existing".
     */
    "source": "existing" | (string & {});
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id": string;
}));
/**
 * Shape $ (Value): {@link CreateModifierSetGroupInputExistingInput}. The `existing` variant of
 * `CreateModifierSetGroupInput`.
 */
export type CreateModifierSetGroupInputExistingInput = ({
    /**
     * Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's
     * name. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, there is no
     * limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, the minimum is 0.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): {@link CreateInlineModifierGroupRequestInput}. Modifier group owned by this
     * set when source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when creating a
     * modifier set, with its selection limits, modifiers or text rules, and display flags.
     */
    "modifier_group"?: CreateInlineModifierGroupRequestInput;
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id": string;
    /**
     * Shape $ (Value): Array of {@link ModifierOverrideInput}. Overrides for individual list
     * modifiers in this set. A choice is offered only when its status is active and its override's
     * available is not false. Shape $[] (Value): {@link ModifierOverrideInput}. Settings for one
     * modifier that apply only within a modifier set group, overriding the modifier group's own
     * values.
     */
    "modifier_overrides"?: Array<ModifierOverrideInput>;
    /**
     * Shape $ (Value): integer. Display position of this group within the set; lower values appear
     * first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use
     * the group's value. Accepted only for text groups; list groups use min_selected.
     */
    "required"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to
     * use the group's value.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use
     * the group's value.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Use inline for a modifier group owned by this modifier set, or
     * existing to reference an independent modifier group. Value enum: "existing".
     */
    "source": "existing";
})
    & (({
    /**
     * Shape $ (Value): string. References an independent modifier group. Value enum: "existing".
     */
    "source": "existing";
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id": string;
})
    & ({
    "modifier_group"?: never;
}));
/**
 * Shape $ (Value): {@link CreateModifierSetGroupInputInline}. The `inline` variant of
 * `CreateModifierSetGroupInput`.
 */
export type CreateModifierSetGroupInputInline = ({
    /**
     * Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's
     * name. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, there is no
     * limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, the minimum is 0.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): {@link CreateModifierGroupRequest}. Modifier group owned by this set when
     * source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when creating a
     * modifier set, with its selection limits, modifiers or text rules, and display flags.
     */
    "modifier_group": CreateModifierGroupRequest;
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ModifierOverride}. Overrides for individual list modifiers
     * in this set. A choice is offered only when its status is active and its override's available
     * is not false. Shape $[] (Value): {@link ModifierOverride}. Settings for one modifier that
     * apply only within a modifier set group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Shape $ (Value): integer. Display position of this group within the set; lower values appear
     * first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use
     * the group's value. Accepted only for text groups; list groups use min_selected.
     */
    "required"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to
     * use the group's value.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use
     * the group's value.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Use inline for a modifier group owned by this modifier set, or
     * existing to reference an independent modifier group. Value enum: "inline".
     */
    "source": "inline" | (string & {});
})
    & (({
    /**
     * Shape $ (Value): string. Defines a modifier group owned by this modifier set. Value enum:
     * "inline".
     */
    "source": "inline" | (string & {});
    /**
     * Shape $ (Value): {@link CreateModifierGroupRequest}. Modifier group owned by this set when
     * source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when creating a
     * modifier set, with its selection limits, modifiers or text rules, and display flags.
     */
    "modifier_group": CreateModifierGroupRequest;
}));
/**
 * Shape $ (Value): {@link CreateModifierSetGroupInputInlineInput}. The `inline` variant of
 * `CreateModifierSetGroupInput`.
 */
export type CreateModifierSetGroupInputInlineInput = ({
    /**
     * Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's
     * name. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, there is no
     * limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, the minimum is 0.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): {@link CreateInlineModifierGroupRequestInput}. Modifier group owned by this
     * set when source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when creating a
     * modifier set, with its selection limits, modifiers or text rules, and display flags.
     */
    "modifier_group": CreateInlineModifierGroupRequestInput;
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ModifierOverrideInput}. Overrides for individual list
     * modifiers in this set. A choice is offered only when its status is active and its override's
     * available is not false. Shape $[] (Value): {@link ModifierOverrideInput}. Settings for one
     * modifier that apply only within a modifier set group, overriding the modifier group's own
     * values.
     */
    "modifier_overrides"?: Array<ModifierOverrideInput>;
    /**
     * Shape $ (Value): integer. Display position of this group within the set; lower values appear
     * first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use
     * the group's value. Accepted only for text groups; list groups use min_selected.
     */
    "required"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to
     * use the group's value.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use
     * the group's value.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Use inline for a modifier group owned by this modifier set, or
     * existing to reference an independent modifier group. Value enum: "inline".
     */
    "source": "inline";
})
    & (({
    /**
     * Shape $ (Value): string. Defines a modifier group owned by this modifier set. Value enum:
     * "inline".
     */
    "source": "inline";
    /**
     * Shape $ (Value): {@link CreateInlineModifierGroupRequestInput}. Modifier group owned by this
     * set when source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when creating a
     * modifier set, with its selection limits, modifiers or text rules, and display flags.
     */
    "modifier_group": CreateInlineModifierGroupRequestInput;
})
    & ({
    "modifier_group_id"?: never;
}));
/**
 * Shape $ (Value): {@link CreateModifierSetGroupRequest}. A modifier group to add to a modifier
 * set, either an existing group by ID or one defined inline, chosen by `source`.
 */
export type CreateModifierSetGroupRequest = ({
    /**
     * Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's
     * name. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, there is no
     * limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, the minimum is 0.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): {@link CreateModifierGroupRequest}. Modifier group owned by this set when
     * source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when creating a
     * modifier set, with its selection limits, modifiers or text rules, and display flags.
     */
    "modifier_group"?: CreateModifierGroupRequest;
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ModifierOverride}. Overrides for individual list modifiers
     * in this set. A choice is offered only when its status is active and its override's available
     * is not false. Shape $[] (Value): {@link ModifierOverride}. Settings for one modifier that
     * apply only within a modifier set group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Shape $ (Value): integer. Display position of this group within the set; lower values appear
     * first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use
     * the group's value. Accepted only for text groups; list groups use min_selected.
     */
    "required"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to
     * use the group's value.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use
     * the group's value.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Use inline for a modifier group owned by this modifier set, or
     * existing to reference an independent modifier group. Value enum: "existing", "inline".
     */
    "source": "existing" | "inline" | (string & {});
})
    & ((Exclude<CreateModifierSetGroupInputExisting & object, readonly unknown[]>)
    | (Exclude<CreateModifierSetGroupInputInline & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateModifierSetGroupRequestInput}. A modifier group to add to a
 * modifier set, either an existing group by ID or one defined inline, chosen by `source`.
 */
export type CreateModifierSetGroupRequestInput = ({
    /**
     * Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's
     * name. minLength: 1. maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, there is no
     * limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use
     * the group's value. Accepted only for list groups; if neither value is set, the minimum is 0.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): {@link CreateInlineModifierGroupRequestInput}. Modifier group owned by this
     * set when source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id};
     * /v1/modifier-groups doesn't return it. A modifier group defined inline when creating a
     * modifier set, with its selection limits, modifiers or text rules, and display flags.
     */
    "modifier_group"?: CreateInlineModifierGroupRequestInput;
    /**
     * Shape $ (Value): string. Identifier of the independent modifier group referenced when source
     * is existing. minLength: 1.
     */
    "modifier_group_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ModifierOverrideInput}. Overrides for individual list
     * modifiers in this set. A choice is offered only when its status is active and its override's
     * available is not false. Shape $[] (Value): {@link ModifierOverrideInput}. Settings for one
     * modifier that apply only within a modifier set group, overriding the modifier group's own
     * values.
     */
    "modifier_overrides"?: Array<ModifierOverrideInput>;
    /**
     * Shape $ (Value): integer. Display position of this group within the set; lower values appear
     * first. Format: int32.
     */
    "position"?: number;
    /**
     * Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use
     * the group's value. Accepted only for text groups; list groups use min_selected.
     */
    "required"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to
     * use the group's value.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use
     * the group's value.
     */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): string. Use inline for a modifier group owned by this modifier set, or
     * existing to reference an independent modifier group. Value enum: "existing", "inline".
     */
    "source": "existing" | "inline";
})
    & ((Exclude<CreateModifierSetGroupInputExistingInput & object, readonly unknown[]>)
    | (Exclude<CreateModifierSetGroupInputInlineInput & object, readonly unknown[]>));
/** Shape $ (Value): {@link CreateModifierSetRequest}. The request body for: Create modifier set. */
export type CreateModifierSetRequest = {
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): Array of {@link CreateModifierSetGroupRequest}. Ordered group entries in
     * this set, including references to reusable groups and groups owned by the set. Shape $[]
     * (Value): {@link CreateModifierSetGroupRequest}. A modifier group to add to a modifier set,
     * either an existing group by ID or one defined inline, chosen by `source`.
     */
    "modifier_groups"?: Array<CreateModifierSetGroupRequest>;
    /**
     * Shape $ (Value): string. Name used to identify this modifier set. minLength: 1. maxLength:
     * 255.
     */
    "name": string;
    /**
     * Shape $ (Value): string. Lifecycle status of the modifier set. Only active sets can be
     * offered to buyers; archived sets remain readable and cannot be edited. Default: "active".
     * Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateModifierSetRequestInput}. The request body for: Create modifier
 * set.
 */
export type CreateModifierSetRequestInput = {
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): Array of {@link CreateModifierSetGroupRequestInput}. Ordered group entries
     * in this set, including references to reusable groups and groups owned by the set. Shape $[]
     * (Value): {@link CreateModifierSetGroupRequestInput}. A modifier group to add to a modifier
     * set, either an existing group by ID or one defined inline, chosen by `source`.
     */
    "modifier_groups"?: Array<CreateModifierSetGroupRequestInput>;
    /**
     * Shape $ (Value): string. Name used to identify this modifier set. minLength: 1. maxLength:
     * 255.
     */
    "name": string;
    /**
     * Shape $ (Value): string. Lifecycle status of the modifier set. Only active sets can be
     * offered to buyers; archived sets remain readable and cannot be edited. Default: "active".
     * Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
};
/**
 * Shape $ (Value): {@link CreateOrderDiscount}. A discount to apply when creating an order: either
 * a manual discount or a reference to a promotion.
 */
export type CreateOrderDiscount = ({
    /**
     * Shape $ (Value): {@link ManualDiscountRequest}. A discount you apply by hand to an order,
     * with a name, an amount, and the order, line items, or charges it applies to.
     */
    "manual"?: ManualDiscountRequest;
    /**
     * Shape $ (Value): {@link PromotionRefRequest}. Identifies the promotion to apply, by
     * promotion code or by promotion ID.
     */
    "promotion"?: PromotionRefRequest;
})
    & ((({
    /**
     * Shape $ (Value): {@link PromotionRefRequest}. Identifies the promotion to apply, by
     * promotion code or by promotion ID.
     */
    "promotion": PromotionRefRequest;
}))
    | (({
    /**
     * Shape $ (Value): {@link ManualDiscountRequest}. A discount you apply by hand to an order,
     * with a name, an amount, and the order, line items, or charges it applies to.
     */
    "manual": ManualDiscountRequest;
}))
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateOrderDiscountInput}. A discount to apply when creating an order:
 * either a manual discount or a reference to a promotion.
 */
export type CreateOrderDiscountInput = ({
    /**
     * Shape $ (Value): {@link ManualDiscountRequestInput}. A discount you apply by hand to an
     * order, with a name, an amount, and the order, line items, or charges it applies to.
     */
    "manual"?: ManualDiscountRequestInput;
    /**
     * Shape $ (Value): {@link PromotionRefRequestInput}. Identifies the promotion to apply, by
     * promotion code or by promotion ID.
     */
    "promotion"?: PromotionRefRequestInput;
})
    & ((({
    /**
     * Shape $ (Value): {@link PromotionRefRequestInput}. Identifies the promotion to apply, by
     * promotion code or by promotion ID.
     */
    "promotion": PromotionRefRequestInput;
})
    & (({
    "manual"?: never;
})))
    | (({
    /**
     * Shape $ (Value): {@link ManualDiscountRequestInput}. A discount you apply by hand to an
     * order, with a name, an amount, and the order, line items, or charges it applies to.
     */
    "manual": ManualDiscountRequestInput;
})
    & (({
    "promotion"?: never;
}))));
/**
 * Shape $ (Value): {@link CreateOrderLineItem}. A line item in a delivery preview: a catalog
 * variant, a bundle, or a custom item with a name and unit price.
 */
export type CreateOrderLineItem = ({
    /** Shape $ (Value): string. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link LineItemFulfillmentRequest}. Required on line items without
     * variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery
     * settings. Send {"requirement": "none"} for services, digital goods, and items handed over at
     * the point of sale. Fulfillment requirements you supply for an order line item, such as
     * allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequest;
    /**
     * Shape $ (Value): {@link GiftCardPurchaseRequest}. Buyer-selected face value and recipient
     * for a gift_card variant. The server freezes the offer and resolves consideration per unit.
     * Omit to purchase the reference denomination without a recipient. Gift card details for an
     * order line item: the `face_value_money` and the `recipient` who receives the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseRequest;
    /**
     * Shape $ (Value): {@link ImageReferenceRequest}. A reference to an image by `url`, with
     * optional `alt` text, used on an order line item.
     */
    "image"?: ImageReferenceRequest;
    /**
     * Shape $ (Value): Array of {@link OrderDraftLineItemInventoryDemandRequest}. Shape $[]
     * (Value): {@link OrderDraftLineItemInventoryDemandRequest}. The quantity of one inventory
     * item that each unit of a draft order line item uses, supplied when creating the line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequest>;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): Array of {@link OrderLineItemModifierRequest}. Shape $[] (Value): {@link
     * OrderLineItemModifierRequest}. A modifier selection you supply on a line item: a catalog
     * modifier by ID or a text modifier, with a quantity. Shape $[].metadata (Optional): Map of
     * string. Shape $[].metadata.* (Value): string. minLength: 1. Shape $[].modifier_id
     * (Optional): string. ID of the existing modifier. Treated as an opaque resource reference;
     * accepted spellings follow resource ID validation. minLength: 1. Shape
     * $[].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during
     * replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Shape $[].quantity
     * (Optional): integer string. Whole-number quantity; fractional quantities are not supported.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape
     * $[].text (Optional): {@link TextModifierRequest}. Text a buyer entered for a text modifier
     * group on an order line item. Shape $[].oneOf[1] (Value): any. Shape $[].oneOf[2] (Value):
     * any.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    /** Shape $ (Value): string. */
    "name"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link SubscribedLineRequest}. Selected recurring terms for this variant.
     * Lines with the same cadence start one subscription after payment. Makes an order line a
     * subscription purchase, with the subscription offer and billing interval.
     */
    "subscription"?: SubscribedLineRequest;
    /**
     * Shape $ (Value): {@link OrderCalculatedLineItemTax}. Tax settings you supply for a draft
     * order line item: its tax category, whether it is taxable, and an optional tax calculation.
     */
    "tax"?: OrderCalculatedLineItemTax;
    /**
     * Shape $ (Value): {@link Dimensions}. Dimensions of one unit. Accepted only for custom lines
     * without variant_id or bundle_id. Package or item dimensions as `length`, `width`, and
     * `height` in the given `unit`.
     */
    "unit_dimensions"?: Dimensions;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link Weight}. Weight of one unit. Accepted only for custom lines without
     * variant_id or bundle_id. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "unit_weight"?: Weight;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
})
    & ((({
    /** Shape $ (Value): any. */
    "tax"?: unknown;
    /** Shape $ (Value): string. */
    "variant_id": string;
}))
    | (({
    /** Shape $ (Value): any. */
    "tax"?: unknown;
    /** Shape $ (Value): string. */
    "bundle_id": string;
}))
    | (({
    /** Shape $ (Value): string. */
    "name": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * Shape $ (Value): {@link LineItemFulfillmentRequest}. Required on line items without
     * variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery
     * settings. Send {"requirement": "none"} for services, digital goods, and items handed over at
     * the point of sale. Fulfillment requirements you supply for an order line item, such as
     * allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment": LineItemFulfillmentRequest;
}))
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateOrderLineItemRequestInput}. A line item to add to an order: a
 * catalog variant, a bundle, or a custom item with a name and unit price.
 */
export type CreateOrderLineItemRequestInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link LineItemFulfillmentRequestInput}. Required on line items without
     * variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery
     * settings. Send {"requirement": "none"} for services, digital goods, and items handed over at
     * the point of sale. Fulfillment requirements you supply for an order line item, such as
     * allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequestInput;
    /**
     * Shape $ (Value): {@link GiftCardPurchaseDetailsRequestInput}. Buyer-selected face value and
     * recipient for a gift_card variant. The server freezes the offer and resolves consideration
     * per unit. Omit to purchase the reference denomination without a recipient. Gift card details
     * you supply for an order line item: the `face_value_money` and the `recipient` who receives
     * the card.
     */
    "gift_card_purchase"?: GiftCardPurchaseDetailsRequestInput;
    /**
     * Shape $ (Value): {@link ImageReferenceRequestInput}. A reference to an image by `url`, with
     * optional `alt` text, used on an order line item.
     */
    "image"?: ImageReferenceRequestInput;
    /**
     * Shape $ (Value): Array of {@link OrderDraftLineItemInventoryDemandRequestInput}. Shape $[]
     * (Value): {@link OrderDraftLineItemInventoryDemandRequestInput}. The quantity of one
     * inventory item that each unit of a draft order line item uses, supplied when creating the
     * line item.
     */
    "inventory_demands"?: Array<OrderDraftLineItemInventoryDemandRequestInput>;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): Array of {@link OrderLineItemModifierRequestInput}. Shape $[] (Value):
     * {@link OrderLineItemModifierRequestInput}. A modifier selection you supply on a line item: a
     * catalog modifier by ID or a text modifier, with a quantity. Shape $[].metadata (Optional):
     * Map of string. Shape $[].metadata.* (Value): string. minLength: 1. Shape $[].modifier_id
     * (Optional): string. ID of the existing modifier. Treated as an opaque resource reference;
     * accepted spellings follow resource ID validation. minLength: 1. Shape
     * $[].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during
     * replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Shape $[].quantity
     * (Optional): integer string. Whole-number quantity; fractional quantities are not supported.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape
     * $[].text (Optional): {@link TextModifierRequestInput}. Text a buyer entered for a text
     * modifier group on an order line item. Shape $[].oneOf[1] (Value): any. Shape $[].oneOf[2]
     * (Value): any.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link SubscribedLineRequestInput}. Selected recurring terms for this
     * variant. Lines with the same cadence start one subscription after payment. Makes an order
     * line a subscription purchase, with the subscription offer and billing interval.
     */
    "subscription"?: SubscribedLineRequestInput;
    /**
     * Shape $ (Value): {@link OrderDraftLineItemTaxRequestInput}. Tax settings you supply for a
     * draft order line item: its tax category, whether it is taxable, and an optional tax
     * calculation.
     */
    "tax"?: OrderDraftLineItemTaxRequestInput;
    /**
     * Shape $ (Value): {@link DimensionsInput}. Dimensions of one unit. Accepted only for custom
     * lines without variant_id or bundle_id. Package or item dimensions as `length`, `width`, and
     * `height` in the given `unit`.
     */
    "unit_dimensions"?: DimensionsInput;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): {@link WeightInput}. Weight of one unit. Accepted only for custom lines
     * without variant_id or bundle_id. A weight value in grams, kilograms, ounces, or pounds, used
     * in delivery profile configuration.
     */
    "unit_weight"?: WeightInput;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & ((({
    /** Shape $ (Value): any. */
    "tax"?: (({
        "taxable"?: never;
    }) & ({
        "line_item_tax_category"?: never;
    }));
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
})
    & (({
    "bundle_id"?: never;
})
    & ({
    "name"?: never;
})
    & ({
    "unit_price_money"?: never;
})
    & ({
    "unit_weight"?: never;
})
    & ({
    "unit_dimensions"?: never;
})
    & ({
    "description"?: never;
})
    & ({
    "image"?: never;
})
    & ({
    "inventory_demands"?: never;
})
    & ({
    "fulfillment"?: never;
})))
    | (({
    /** Shape $ (Value): any. */
    "tax"?: (({
        "taxable"?: never;
    }) & ({
        "line_item_tax_category"?: never;
    }));
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
})
    & (({
    "variant_id"?: never;
})
    & ({
    "name"?: never;
})
    & ({
    "unit_price_money"?: never;
})
    & ({
    "unit_weight"?: never;
})
    & ({
    "unit_dimensions"?: never;
})
    & ({
    "description"?: never;
})
    & ({
    "image"?: never;
})
    & ({
    "inventory_demands"?: never;
})
    & ({
    "fulfillment"?: never;
})
    & ({
    "gift_card_purchase"?: never;
})))
    | (({
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValueInput;
    /**
     * Shape $ (Value): {@link LineItemFulfillmentRequestInput}. Required on line items without
     * variant_id or bundle_id, and rejected on catalog lines, which use the catalog's delivery
     * settings. Send {"requirement": "none"} for services, digital goods, and items handed over at
     * the point of sale. Fulfillment requirements you supply for an order line item, such as
     * allowed fulfillment types, package size and weight, and origin.
     */
    "fulfillment": LineItemFulfillmentRequestInput;
})
    & (({
    "variant_id"?: never;
})
    & ({
    "bundle_id"?: never;
})
    & ({
    "gift_card_purchase"?: never;
}))));
/**
 * Shape $ (Value): {@link CreateOrderPaymentIntentRequest}. The request body for: Create order
 * payment intent.
 */
export type CreateOrderPaymentIntentRequest = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. automatic collects the payment when it is confirmed. manual places
     * a hold at confirmation that you capture or cancel later. Defaults to automatic. Value enum:
     * "automatic", "manual".
     */
    "capture_method"?: "automatic" | "manual" | (string & {});
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit". Shape $[] (Value): string. Value enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit".
     */
    "payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /** Shape $ (Value): string. minLength: 1. */
    "payment_return_url"?: string;
    /**
     * Shape $ (Value): {@link OrderPaymentSourceSelection}. The payment source options you choose
     * when creating an order payment intent.
     */
    "payment_source_selection"?: OrderPaymentSourceSelection;
};
/**
 * Shape $ (Value): {@link CreateOrderPaymentIntentRequestInput}. The request body for: Create
 * order payment intent.
 */
export type CreateOrderPaymentIntentRequestInput = {
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): string. automatic collects the payment when it is confirmed. manual places
     * a hold at confirmation that you capture or cancel later. Defaults to automatic. Value enum:
     * "automatic", "manual".
     */
    "capture_method"?: "automatic" | "manual";
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit". Shape $[] (Value): string. Value enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit".
     */
    "payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit">;
    /** Shape $ (Value): string. minLength: 1. */
    "payment_return_url"?: string;
    /**
     * Shape $ (Value): {@link OrderPaymentSourceSelectionInput}. The payment source options you
     * choose when creating an order payment intent.
     */
    "payment_source_selection"?: OrderPaymentSourceSelectionInput;
};
/** Shape $ (Value): {@link CreateOrderRequest}. The request body for: Create order. */
export type CreateOrderRequest = {
    /** Shape $ (Value): string. minLength: 1. maxLength: 1000. */
    "buyer_note"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): {@link OrderDeliveryDestinationRequest}. Shipment or local-delivery
     * destination for an order created without a delivery selection. The delivery destination you
     * set when creating or updating an order, with an address and an optional recipient.
     */
    "delivery_destination"?: OrderDeliveryDestinationRequest;
    /**
     * Shape $ (Value): Array of {@link CreateOrderDiscount}. Shape $[] (Value): {@link
     * CreateOrderDiscount}. A discount to apply when creating an order: either a manual discount
     * or a reference to a promotion.
     */
    "discounts"?: Array<CreateOrderDiscount>;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 1000. */
    "internal_note"?: string;
    /**
     * Shape $ (Value): {@link InventoryRoutingSource}. Where inventory for an order is allocated
     * from: a fixed location, an allocation policy, or a specific policy revision.
     */
    "inventory_routing_source"?: InventoryRoutingSource;
    /**
     * Shape $ (Value): Array of {@link CreateOrderLineItem}. minItems: 1. Shape $[] (Value):
     * {@link CreateOrderLineItem}. A line item to add to an order: a catalog variant, a bundle, or
     * a custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItem>;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): {@link CreateOrderTip}. Optional requested tip. Its effective amount must
     * satisfy the CreateOrderTip limit. Requested tip expressed as either a flat amount or a
     * percentage. Send exactly one of amount_money or percent.
     */
    "requested_tip"?: CreateOrderTip;
    /**
     * Shape $ (Value): {@link OrderTaxRequest}. Tax settings you supply when creating an order:
     * whether tax is enabled, how it is calculated, and the tax location.
     */
    "tax"?: OrderTaxRequest;
};
/** Shape $ (Value): {@link CreateOrderRequestInput}. The request body for: Create order. */
export type CreateOrderRequestInput = {
    /** Shape $ (Value): string. minLength: 1. maxLength: 1000. */
    "buyer_note"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): {@link OrderDeliveryDestinationRequestInput}. Shipment or local-delivery
     * destination for an order created without a delivery selection. The delivery destination you
     * set when creating or updating an order, with an address and an optional recipient.
     */
    "delivery_destination"?: OrderDeliveryDestinationRequestInput;
    /**
     * Shape $ (Value): Array of {@link CreateOrderDiscountInput}. Shape $[] (Value): {@link
     * CreateOrderDiscountInput}. A discount to apply when creating an order: either a manual
     * discount or a reference to a promotion.
     */
    "discounts"?: Array<CreateOrderDiscountInput>;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 1000. */
    "internal_note"?: string;
    /**
     * Shape $ (Value): {@link OrderInventoryRoutingSourceRequestInput}. Where inventory for an
     * order is allocated from: a fixed location, an allocation policy, or a specific policy
     * revision.
     */
    "inventory_routing_source"?: OrderInventoryRoutingSourceRequestInput;
    /**
     * Shape $ (Value): Array of {@link CreateOrderLineItemRequestInput}. minItems: 1. Shape $[]
     * (Value): {@link CreateOrderLineItemRequestInput}. A line item to add to an order: a catalog
     * variant, a bundle, or a custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItemRequestInput>;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): {@link CreateOrderTipInput}. Optional requested tip. Its effective amount
     * must satisfy the CreateOrderTip limit. Requested tip expressed as either a flat amount or a
     * percentage. Send exactly one of amount_money or percent.
     */
    "requested_tip"?: CreateOrderTipInput;
    /**
     * Shape $ (Value): {@link OrderTaxRequestInput}. Tax settings you supply when creating an
     * order: whether tax is enabled, how it is calculated, and the tax location.
     */
    "tax"?: OrderTaxRequestInput;
};
/**
 * Shape $ (Value): {@link CreateOrderTip}. Requested tip expressed as either a flat amount or a
 * percentage. Send exactly one of amount_money or percent.
 */
export type CreateOrderTip = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Flat requested tip in the order currency. The amount
     * must be at least 1 minor unit; otherwise, Flint returns INVALID_REQUEST with param
     * requested_tip.amount_money.amount. For USD orders, the maximum is the larger of $1,000 or
     * the post-discount merchandise subtotal. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in
     * the currency's minor unit, such as cents for USD. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string.
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money"?: ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "description"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Shape $ (Value): number. Requested tip percentage from 1 through 100, calculated from the
     * post-discount merchandise subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent"?: number;
})
    & ((({
    /**
     * Shape $ (Value): {@link MoneyValue}. Flat requested tip in the order currency. The amount
     * must be at least 1 minor unit; otherwise, Flint returns INVALID_REQUEST with param
     * requested_tip.amount_money.amount. For USD orders, the maximum is the larger of $1,000 or
     * the post-discount merchandise subtotal. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in
     * the currency's minor unit, such as cents for USD. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string.
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
}))
    | (({
    /**
     * Shape $ (Value): number. Requested tip percentage from 1 through 100, calculated from the
     * post-discount merchandise subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent": number;
}))
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateOrderTipInput}. Requested tip expressed as either a flat amount or
 * a percentage. Send exactly one of amount_money or percent.
 */
export type CreateOrderTipInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Flat requested tip in the order currency. The
     * amount must be at least 1 minor unit; otherwise, Flint returns INVALID_REQUEST with param
     * requested_tip.amount_money.amount. For USD orders, the maximum is the larger of $1,000 or
     * the post-discount merchandise subtotal. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in
     * the currency's minor unit, such as cents for USD. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string.
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money"?: ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "description"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Shape $ (Value): number. Requested tip percentage from 1 through 100, calculated from the
     * post-discount merchandise subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent"?: number;
})
    & ((({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Flat requested tip in the order currency. The
     * amount must be at least 1 minor unit; otherwise, Flint returns INVALID_REQUEST with param
     * requested_tip.amount_money.amount. For USD orders, the maximum is the larger of $1,000 or
     * the post-discount merchandise subtotal. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in
     * the currency's minor unit, such as cents for USD. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string.
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
})
    & (({
    "percent"?: never;
})))
    | (({
    /**
     * Shape $ (Value): number. Requested tip percentage from 1 through 100, calculated from the
     * post-discount merchandise subtotal. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "percent": number;
})
    & (({
    "amount_money"?: never;
}))));
/**
 * Shape $ (Value): {@link CreateOrganizationRequest}. The request body for: Create organization.
 */
export type CreateOrganizationRequest = {
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /** Shape $ (Value): string. minLength: 1. */
    "parent_organization_id"?: string;
};
/**
 * Shape $ (Value): {@link CreateOrganizationRequestInput}. The request body for: Create
 * organization.
 */
export type CreateOrganizationRequestInput = CreateOrganizationRequest;
/** Shape $ (Value): {@link CreatePackageItemRequest}. The request body for: Create package item. */
export type CreatePackageItemRequest = {
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "order_line_item_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
};
/**
 * Shape $ (Value): {@link CreatePackageItemRequestInput}. The request body for: Create package
 * item.
 */
export type CreatePackageItemRequestInput = {
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. minLength: 1. */
    "order_line_item_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}` | bigint;
};
/** Shape $ (Value): {@link CreatePartnerAppRequest}. The request body for: Create partner app. */
export type CreatePartnerAppRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "api_version"?: string;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "default_requested_permissions"?: Array<string>;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): Array of {@link PartnerAppPermissionManifestEntry}. Shape $[] (Value):
     * {@link PartnerAppPermissionManifestEntry}. One permission a partner app can request, with a
     * title, a description, and the Flint scopes it grants.
     */
    "permission_manifest": Array<PartnerAppPermissionManifestEntry>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "redirect_uris": Array<string>;
};
/**
 * Shape $ (Value): {@link CreatePartnerAppRequestInput}. The request body for: Create partner app.
 */
export type CreatePartnerAppRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "api_version"?: string;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "default_requested_permissions"?: Array<string>;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): Array of {@link PartnerAppPermissionManifestEntryInput}. Shape $[] (Value):
     * {@link PartnerAppPermissionManifestEntryInput}. One permission a partner app can request,
     * with a title, a description, and the Flint scopes it grants.
     */
    "permission_manifest": Array<PartnerAppPermissionManifestEntryInput>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "redirect_uris": Array<string>;
};
/**
 * Shape $ (Value): {@link CreatePaymentIntentRequest}. The request body for: Create standalone
 * payment intent.
 */
export type CreatePaymentIntentRequest = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Amount to request from the buyer, including any
     * tip_money. With capture_method manual, this is the hold amount, and you can capture less of
     * it later. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. automatic collects the payment when it is confirmed. manual places
     * a hold at confirmation that you capture or cancel later. Defaults to automatic. Default:
     * "automatic". Value enum: "automatic", "manual".
     */
    "capture_method"?: "automatic" | "manual" | (string & {});
    /** Shape $ (Value): string. Customer to link to this payment intent. minLength: 1. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): Array of string. Payment options the buyer can use. Name at least one.
     * minItems: 1. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". Shape $[]
     * (Value): string. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /**
     * Shape $ (Value): string. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm. Required when payment_options includes affirm. It can't
     * contain credentials, a query string, or a fragment. Test mode also accepts http loopback
     * URLs. minLength: 1. pattern: \S.
     */
    "payment_return_url"?: string;
    /**
     * Shape $ (Value): string. Email address for this payment's receipt. When omitted, Flint uses
     * the customer's email. Format: email. minLength: 1. maxLength: 255.
     */
    "receipt_email"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Portion of amount_money that is a tip. Uses
     * amount_money's currency and is at most amount_money. Not accepted on order-linked payment
     * intents. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tip_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Why the bank debit is taken. Required when payment_options includes
     * ach_debit, and rejected with INVALID_REQUEST and NOT_ALLOWED on transaction_purpose
     * otherwise. Value enum: "goods", "services", "other".
     */
    "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
});
/**
 * Shape $ (Value): {@link CreatePaymentIntentRequestInput}. The request body for: Create
 * standalone payment intent.
 */
export type CreatePaymentIntentRequestInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Amount to request from the buyer, including any
     * tip_money. With capture_method manual, this is the hold amount, and you can capture less of
     * it later. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Shape $ (Value): string. automatic collects the payment when it is confirmed. manual places
     * a hold at confirmation that you capture or cancel later. Defaults to automatic. Default:
     * "automatic". Value enum: "automatic", "manual".
     */
    "capture_method"?: "automatic" | "manual";
    /** Shape $ (Value): string. Customer to link to this payment intent. minLength: 1. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Shape $.* (Value): string. minLength: 1.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): Array of string. Payment options the buyer can use. Name at least one.
     * minItems: 1. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". Shape $[]
     * (Value): string. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit">;
    /**
     * Shape $ (Value): string. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm. Required when payment_options includes affirm. It can't
     * contain credentials, a query string, or a fragment. Test mode also accepts http loopback
     * URLs. minLength: 1. pattern: \S.
     */
    "payment_return_url"?: string;
    /**
     * Shape $ (Value): string. Email address for this payment's receipt. When omitted, Flint uses
     * the customer's email. Format: email. minLength: 1. maxLength: 255.
     */
    "receipt_email"?: string;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Portion of amount_money that is a tip. Uses
     * amount_money's currency and is at most amount_money. Not accepted on order-linked payment
     * intents. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tip_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): string. Why the bank debit is taken. Required when payment_options includes
     * ach_debit, and rejected with INVALID_REQUEST and NOT_ALLOWED on transaction_purpose
     * otherwise. Value enum: "goods", "services", "other".
     */
    "transaction_purpose"?: "goods" | "services" | "other";
});
