import type { CreatePackageItemRequest, CreatePackageItemRequestInput } from './types-12.js';
import type {
    FulfillmentItemizedPackagesRequest,
    FulfillmentItemizedPackagesRequestInput,
    FulfillmentChargeLinkPreviousAttributes,
    FulfillmentHoldPreviousAttributes,
    FulfillmentLineItemPreviousAttributes,
    Fulfillment,
    FulfillmentChargeLink,
    FulfillmentHold,
    FulfillmentLineItem,
    FailFulfillmentRequestInput
} from './types-27.js';
import type { MetadataMap, MetadataRequestInput, MerchantWebhookEnvelope } from './types-43.js';
import type { PackageCreateRequest, PackageCreateRequestInput } from './types-48.js';
import type {
    SinglePackageCreateRequest,
    SinglePackageCreateRequestInput,
    ServiceFulfillmentDetailsPreviousAttributes,
    ShipmentFulfillmentDetailsPreviousAttributes,
    ServiceFulfillmentDetails,
    ShipmentFulfillmentDetails,
    StartFulfillmentRequestInput
} from './types-68.js';
import type { DeliveryFulfillmentDetailsPreviousAttributes, DeliveryFulfillmentDetails } from './types-19.js';
import type {
    DigitalFulfillmentDetailsPreviousAttributes,
    DigitalFulfillmentDetails,
    DispatchFulfillmentRequestInput
} from './types-25.js';
import type {
    ExpandedOrderSummaryPreviousAttributes,
    ExpandedPackageSummaryPreviousAttributes,
    ExpandedShipmentSummaryPreviousAttributes,
    ExpandedOrderSummary,
    ExpandedPackageSummary,
    ExpandedShipmentSummary,
    DisputesAcceptParams
} from './types-26.js';
import type { PickupFulfillmentDetailsPreviousAttributes, PickupFulfillmentDetails } from './types-55.js';
import type {
    Address,
    AddressPreviousAttributes,
    AddressRequest,
    AddressRequestInput,
    AcceptFulfillmentRequestInput
} from './types-0.js';
import type { ResponseMeta } from './types-62.js';
import type { PartnerWebhookEnvelope } from './types-50.js';
import type { InputValue } from '../runtime.js';
import type { CancelFulfillmentRequestInput } from './types-4.js';
import type { CompleteFulfillmentRequestInput } from './types-7.js';
import type { CreateFulfillmentRequestInput, CreateGiftCardFundingDispositionRequestInput } from './types-10.js';
import type { HoldFulfillmentRequestInput } from './types-31.js';
import type {
    MarkFulfillmentNoShowRequestInput,
    MarkFulfillmentPackedRequestInput,
    MarkFulfillmentPickedRequestInput,
    MarkFulfillmentPreparingRequestInput,
    MarkFulfillmentReadyRequestInput
} from './types-40.js';
import type { ReleaseFulfillmentHoldRequestInput } from './types-61.js';
import type { ScheduleFulfillmentRequestInput } from './types-67.js';
import type { UpdateFulfillmentRequestInput } from './types-76.js';
import type { ReturnDisposition, ReturnInspection, ReturnLineItem } from './types-63.js';
import type { ReturnPolicy, ReturnPolicyRevision, ReturnReason, ReturnReceipt } from './types-64.js';
import type { ReturnResolution, ReturnResource } from './types-65.js';
import type { GiftCardRestriction } from './types-30.js';
import type { MoneyValue, MoneyValuePreviousAttributes, MoneyValueInput } from './types-44.js';
import type { GiftCardFundingLossResolutionPreviousAttributes } from './types-29.js';
/**
 * The terminal outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and
 * when it occurred.
 */
export type FulfillmentOutcome = {
    /** Additional notes about the fulfillment outcome. */
    "notes"?: string;
    /** Time the terminal outcome occurred. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /**
     * Recorded fulfillment outcome, such as a missed service appointment. Value enum: "no_show".
     */
    "outcome_type": "no_show" | (string & {});
    /**
     * Machine-readable reason for the recorded outcome. Value enum: "customer_no_show",
     * "provider_no_show", "location_unavailable", "scheduling_error", "other".
     */
    "reason": "customer_no_show"
        | "provider_no_show"
        | "location_unavailable"
        | "scheduling_error"
        | "other"
        | (string & {});
};
export type FulfillmentOutcomePreviousAttributes = {
    /**
     * Additional notes about the fulfillment outcome. anyOf[1] (Value): string. Additional notes
     * about the fulfillment outcome. anyOf[2] (Value): null.
     */
    "notes"?: ((string) | (null));
    /**
     * Time the terminal outcome occurred. anyOf[1] (Value): string. Time the terminal outcome
     * occurred. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "occurred_at"?: ((string) | (null));
    /**
     * Recorded fulfillment outcome, such as a missed service appointment. Value enum: "no_show".
     * anyOf[1] (Value): string. Recorded fulfillment outcome, such as a missed service
     * appointment. Value enum: "no_show". anyOf[2] (Value): null.
     */
    "outcome_type"?: (("no_show" | (string & {})) | (null));
    /**
     * Machine-readable reason for the recorded outcome. Value enum: "customer_no_show",
     * "provider_no_show", "location_unavailable", "scheduling_error", "other". anyOf[1] (Value):
     * string. Machine-readable reason for the recorded outcome. Value enum: "customer_no_show",
     * "provider_no_show", "location_unavailable", "scheduling_error", "other". anyOf[2] (Value):
     * null.
     */
    "reason"?: (("customer_no_show"
        | "provider_no_show"
        | "location_unavailable"
        | "scheduling_error"
        | "other"
        | (string & {}))
        | (null));
};
/**
 * Creates an outbound shipment with one package using `packaging: single_package`, or 1 to 20
 * packages with explicit items using `packaging: itemized`. External reference and metadata are
 * optional.
 */
export type FulfillmentPackagingRequest = ({
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** Name of the external system that `external_reference_id` belongs to. minLength: 1. */
    "external_system"?: string;
    /**
     * Caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * The one package that holds every submitted line quantity. The single package created with a
     * shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to
     * created or shipped; items and return_line_items are not accepted.
     */
    "package"?: SinglePackageCreateRequest;
    /**
     * Packages for an itemized shipment, from 1 to 20, each listing the items it holds. minItems:
     * 1. maxItems: 20. [] (Value): {@link PackageCreateRequest}. Package to create inline with its
     * enclosing shipment or fulfillment. Set status to created before handoff, or shipped to
     * report handoff during creation. [].buyer_notification_behavior (Optional): string. Controls
     * buyer email handling. Omit or use send to send when recipient, template, and deduplication
     * rules allow it. Use suppress when another system owns buyer messaging. Value enum: "send",
     * "suppress". [].carrier (Optional): string. Carrier that handles the package. minLength: 1.
     * [].dimensions (Optional): {@link Dimensions}. Dimensions of the package. Package or item
     * dimensions as `length`, `width`, and `height` in the given `unit`. [].expected_delivery_at
     * (Optional): string or null. When the carrier or merchant expects this package to arrive.
     * Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates and
     * transitions. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     * [].external_reference_id (Optional): string. Caller-owned identifier for this resource in an
     * external system. Requires external_system. External references are not unique. Use
     * Idempotency-Key for retries. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * [].external_system (Optional): string. Name of the external system that
     * external_reference_id belongs to. External references are not unique. Use Idempotency-Key
     * for retries. minLength: 1. [].items (Required): Array of {@link CreatePackageItemRequest}.
     * Independent package-item collection. Required when status is shipped unless
     * pack_fulfillment_items is true. Inline creation uses the child-create shape and commits
     * atomically; edit items through the package item routes after creation. Each order line and
     * bundle component pair may appear once. minItems: 1. maxItems: 100. [].items[] (Value):
     * {@link CreatePackageItemRequest}. The request body for: Create package item. [].label_url
     * (Optional): string. HTTPS shipping-label URL supplied by your integration. Non-Flint URLs
     * require external_system for provenance. Flint does not host the label file. minLength: 1.
     * [].metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50. [].pack_fulfillment_items (Optional): boolean. Put every item in the
     * fulfillment into this outbound package. Use with status shipped and a single package. Omit
     * items. Value enum: true. [].return_line_items (Optional): Array of {@link
     * ReturnResolutionLineItemRequest}. Required for a package on a return shipment: allocates
     * quantities from the shipment's return_line_items to this parcel. Rejected on outbound
     * shipments. [].return_line_items[] (Value): {@link ReturnResolutionLineItemRequest}. A Return
     * line and the quantity to place in a return shipment or package. The enclosing Return or
     * shipment determines its parent. [].service_code (Optional): string. Carrier's code for the
     * shipping service used. minLength: 1. [].shipped_at (Optional): string. Package handoff time.
     * Defaults to request time. Only allowed with status shipped. Format: date-time. minLength: 1.
     * Example: "2026-08-02T16:00:00Z". [].status (Required): string. Outbound packages can start
     * as created or shipped. Return packages must start as created, omit items, and include
     * return_line_items. Use mark_shipped after the buyer hands over the return package. Value
     * enum: "created", "shipped". [].status_reason (Optional): string. Additional explanation of
     * the package's starting status. minLength: 1. [].tracking_number (Optional): string. Carrier
     * tracking number for the package. minLength: 1. [].tracking_url (Optional): string. Absolute
     * HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. [].weight
     * (Optional): {@link Weight}. Weight of the package. A weight value in grams, kilograms,
     * ounces, or pounds, used in delivery profile configuration. [].oneOf[1] (Value): {@link
     * PackageCreateInputCreated}. Package to create inline with its enclosing shipment or
     * fulfillment. Set status to created before handoff, or shipped to report handoff during
     * creation. [].oneOf[2] (Value): {@link PackageCreateInputShipped}. Package to create inline
     * with its enclosing shipment or fulfillment. Set status to created before handoff, or shipped
     * to report handoff during creation.
     */
    "packages"?: Array<({
        /**
         * Independent package-item collection. Required when status is shipped unless
         * pack_fulfillment_items is true. Inline creation uses the child-create shape and commits
         * atomically; edit items through the package item routes after creation. Each order line
         * and bundle component pair may appear once. minItems: 1. maxItems: 100. [] (Value):
         * {@link CreatePackageItemRequest}. The request body for: Create package item.
         */
        "items": Array<CreatePackageItemRequest>;
    })
        & (Exclude<PackageCreateRequest & object, readonly unknown[]>)>;
    /** How the shipment's packages are described. Value enum: "single_package", "itemized". */
    "packaging": "single_package" | "itemized" | (string & {});
})
    & ((Exclude<FulfillmentSinglePackageRequest & object, readonly unknown[]>)
    | (Exclude<FulfillmentItemizedPackagesRequest & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Creates an outbound shipment with one package using `packaging: single_package`, or 1 to 20
 * packages with explicit items using `packaging: itemized`. External reference and metadata are
 * optional.
 */
export type FulfillmentPackagingRequestInput = ({
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** Name of the external system that `external_reference_id` belongs to. minLength: 1. */
    "external_system"?: string;
    /**
     * Caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * The one package that holds every submitted line quantity. The single package created with a
     * shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to
     * created or shipped; items and return_line_items are not accepted.
     */
    "package"?: SinglePackageCreateRequestInput;
    /**
     * Packages for an itemized shipment, from 1 to 20, each listing the items it holds. minItems:
     * 1. maxItems: 20. [] (Value): {@link PackageCreateRequestInput}. Package to create inline
     * with its enclosing shipment or fulfillment. Set status to created before handoff, or shipped
     * to report handoff during creation. [].buyer_notification_behavior (Optional): string.
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress". [].carrier (Optional): string. Carrier that handles the package.
     * minLength: 1. [].dimensions (Optional): {@link DimensionsRequestInput}. Dimensions of the
     * package. Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     * [].expected_delivery_at (Optional): string or null. When the carrier or merchant expects
     * this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it
     * unchanged on updates and transitions. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z". [].external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. Requires external_system. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". [].external_system (Optional): string. Name of the external system that
     * external_reference_id belongs to. External references are not unique. Use Idempotency-Key
     * for retries. minLength: 1. [].items (Required): Array of {@link
     * CreatePackageItemRequestInput}. Independent package-item collection. Required when status is
     * shipped unless pack_fulfillment_items is true. Inline creation uses the child-create shape
     * and commits atomically; edit items through the package item routes after creation. Each
     * order line and bundle component pair may appear once. minItems: 1. maxItems: 100. [].items[]
     * (Value): {@link CreatePackageItemRequestInput}. The request body for: Create package item.
     * [].label_url (Optional): string. HTTPS shipping-label URL supplied by your integration.
     * Non-Flint URLs require external_system for provenance. Flint does not host the label file.
     * minLength: 1. [].metadata (Optional): {@link MetadataRequestInput}. Caller-owned metadata.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Caller-owned key-value data for a
     * new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256
     * Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at
     * most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are
     * reserved for Flint. maxProperties: 50. [].pack_fulfillment_items (Optional): boolean. Put
     * every item in the fulfillment into this outbound package. Use with status shipped and a
     * single package. Omit items. Value enum: true. [].return_line_items (Optional): Array of
     * {@link ReturnShipmentLineItemAllocationRequestInput}. Required for a package on a return
     * shipment: allocates quantities from the shipment's return_line_items to this parcel.
     * Rejected on outbound shipments. [].return_line_items[] (Value): {@link
     * ReturnShipmentLineItemAllocationRequestInput}. A Return line and the quantity to place in a
     * return shipment or package. The enclosing Return or shipment determines its parent.
     * [].service_code (Optional): string. Carrier's code for the shipping service used. minLength:
     * 1. [].shipped_at (Optional): string. Package handoff time. Defaults to request time. Only
     * allowed with status shipped. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z". [].status (Required): string. Outbound packages can start as created
     * or shipped. Return packages must start as created, omit items, and include
     * return_line_items. Use mark_shipped after the buyer hands over the return package. Value
     * enum: "created", "shipped". [].status_reason (Optional): string. Additional explanation of
     * the package's starting status. minLength: 1. [].tracking_number (Optional): string. Carrier
     * tracking number for the package. minLength: 1. [].tracking_url (Optional): string. Absolute
     * HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. [].weight
     * (Optional): {@link WeightRequestInput}. Weight of the package. A weight value in grams,
     * kilograms, ounces, or pounds, used in delivery profile configuration. [].oneOf[1] (Value):
     * {@link PackageCreateInputCreatedInput}. Package to create inline with its enclosing shipment
     * or fulfillment. Set status to created before handoff, or shipped to report handoff during
     * creation. [].oneOf[2] (Value): {@link PackageCreateInputShippedInput}. Package to create
     * inline with its enclosing shipment or fulfillment. Set status to created before handoff, or
     * shipped to report handoff during creation.
     */
    "packages"?: Array<({
        /**
         * Independent package-item collection. Required when status is shipped unless
         * pack_fulfillment_items is true. Inline creation uses the child-create shape and commits
         * atomically; edit items through the package item routes after creation. Each order line
         * and bundle component pair may appear once. minItems: 1. maxItems: 100. [] (Value):
         * {@link CreatePackageItemRequestInput}. The request body for: Create package item.
         */
        "items": Array<CreatePackageItemRequestInput>;
    })
        & (Exclude<PackageCreateRequestInput & object, readonly unknown[]>)>;
    /** How the shipment's packages are described. Value enum: "single_package", "itemized". */
    "packaging": "single_package" | "itemized";
})
    & ((Exclude<FulfillmentSinglePackageRequestInput & object, readonly unknown[]>)
    | (Exclude<FulfillmentItemizedPackagesRequestInput & object, readonly unknown[]>));
export type FulfillmentPreviousAttributes = {
    /**
     * Current hold details. Present exactly when status is on_hold. anyOf[1] (Value): {@link
     * FulfillmentHoldPreviousAttributes}. anyOf[2] (Value): null.
     */
    "active_hold"?: ((FulfillmentHoldPreviousAttributes) | (null));
    /**
     * Order charges associated with this fulfillment. anyOf[1] (Value): Array of {@link
     * FulfillmentChargeLinkPreviousAttributes}. Order charges associated with this fulfillment.
     * anyOf[1][] (Value): {@link FulfillmentChargeLinkPreviousAttributes}. anyOf[2] (Value): null.
     */
    "charges"?: ((Array<FulfillmentChargeLinkPreviousAttributes>) | (null));
    /**
     * When the fulfillment was completed. Mirrors the completion time for its type: delivered_at
     * for shipment, local delivery, and digital fulfillments, picked_up_at for pickup,
     * service_details.completed_at for service fulfillments, and the order's paid_at for handovers
     * completed at payment. Omitted until a completion time is recorded. anyOf[1] (Value): string.
     * When the fulfillment was completed. Mirrors the completion time for its type: delivered_at
     * for shipment, local delivery, and digital fulfillments, picked_up_at for pickup,
     * service_details.completed_at for service fulfillments, and the order's paid_at for handovers
     * completed at payment. Omitted until a completion time is recorded. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "completed_at"?: ((string) | (null));
    /**
     * When the fulfillment was created, in RFC3339 format. anyOf[1] (Value): string. When the
     * fulfillment was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "created_at"?: ((string) | (null));
    /**
     * Customer receiving this fulfillment, when one is set. anyOf[1] (Value): string. Customer
     * receiving this fulfillment, when one is set. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * anyOf[2] (Value): null.
     */
    "customer_id"?: ((string) | (null));
    /**
     * Delivery choice group that created this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Always present with merchant
     * credentials. anyOf[1] (Value): string. Delivery choice group that created this fulfillment.
     * `null` when the merchant created the fulfillment or checkout created it without a delivery
     * quote. Always present with merchant credentials. Example:
     * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". anyOf[2] (Value): null.
     */
    "delivery_choice_group_id"?: ((string) | (null));
    /**
     * Execution leg of the selected delivery option that created this fulfillment. `null` when the
     * merchant created the fulfillment or checkout created it without a delivery quote. Always
     * present with merchant credentials. anyOf[1] (Value): string. Execution leg of the selected
     * delivery option that created this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Always present with merchant
     * credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M". anyOf[2] (Value): null.
     */
    "delivery_execution_leg_id"?: ((string) | (null));
    /**
     * Delivery method chosen for this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Also `null` when it was created
     * before this field was added. Always present with merchant credentials. anyOf[1] (Value):
     * string. Delivery method chosen for this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Also `null` when it was created
     * before this field was added. Always present with merchant credentials. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2] (Value): null.
     */
    "delivery_method_id"?: ((string) | (null));
    /**
     * Delivery selection that created this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Always present with merchant
     * credentials. anyOf[1] (Value): string. Delivery selection that created this fulfillment.
     * `null` when the merchant created the fulfillment or checkout created it without a delivery
     * quote. Always present with merchant credentials. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     * anyOf[2] (Value): null.
     */
    "delivery_selection_id"?: ((string) | (null));
    /**
     * Device associated with the fulfillment, when one is recorded. anyOf[1] (Value): string.
     * Device associated with the fulfillment, when one is recorded. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6". anyOf[2] (Value): null.
     */
    "device_id"?: ((string) | (null));
    /**
     * Delivery URL and completion time for a digital fulfillment. anyOf[1] (Value): {@link
     * DigitalFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
     */
    "digital_details"?: ((DigitalFulfillmentDetailsPreviousAttributes) | (null));
    /**
     * First time this fulfillment reached dispatched. anyOf[1] (Value): string. First time this
     * fulfillment reached dispatched. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
     * (Value): null.
     */
    "dispatched_at"?: ((string) | (null));
    /**
     * Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". anyOf[2] (Value): null.
     */
    "external_reference_id"?: ((string) | (null));
    /**
     * Stable identifier of the fulfillment. anyOf[1] (Value): string. Stable identifier of the
     * fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". anyOf[2] (Value): null.
     */
    "fulfillment_id"?: ((string) | (null));
    /**
     * The Idempotency-Key of the request that created this resource. `null` when that request sent
     * no key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource. Buyer sessions on routes
     * shared with merchants get `null`. `/v1/me` responses do not include this field. anyOf[1]
     * (Value): string. The Idempotency-Key of the request that created this resource. `null` when
     * that request sent no key, Flint created the resource, the reader isn't the caller that
     * created it (another app install, a buyer, or the merchant reading an app's or buyer's
     * record), or the caller that created an older record is unknown. Filter its list with
     * `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook
     * events, can return `null`. To find a key that a replay returns as `null`, read the resource.
     * Buyer sessions on routes shared with merchants get `null`. `/v1/me` responses do not include
     * this field. anyOf[2] (Value): null.
     */
    "idempotency_key"?: ((string) | (null));
    /**
     * Order lines and quantities allocated to this fulfillment. anyOf[1] (Value): Array of {@link
     * FulfillmentLineItemPreviousAttributes}. Order lines and quantities allocated to this
     * fulfillment. anyOf[1][] (Value): {@link FulfillmentLineItemPreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "line_items"?: ((Array<FulfillmentLineItemPreviousAttributes>) | (null));
    /**
     * Courier, delivery window, and handoff details for a local delivery fulfillment. anyOf[1]
     * (Value): {@link DeliveryFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
     */
    "local_delivery_details"?: ((DeliveryFulfillmentDetailsPreviousAttributes) | (null));
    /**
     * Merchant location responsible for this fulfillment. anyOf[1] (Value): string. Merchant
     * location responsible for this fulfillment. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * anyOf[2] (Value): null.
     */
    "location_id"?: ((string) | (null));
    /**
     * Caller-owned key-value metadata associated with the fulfillment. anyOf[1] (Value): {@link
     * MetadataMap}. anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataMap) | (null));
    /**
     * Order summary returned when the order relationship is expanded. Present only when `expand`
     * includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value):
     * {@link ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
    /**
     * Order whose items this fulfillment delivers. anyOf[1] (Value): string. Order whose items
     * this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value):
     * null.
     */
    "order_id"?: ((string) | (null));
    /**
     * Human-readable number of the order this fulfillment belongs to. Omitted when the order has
     * no number. anyOf[1] (Value): string. Human-readable number of the order this fulfillment
     * belongs to. Omitted when the order has no number. anyOf[2] (Value): null.
     */
    "order_number"?: ((string) | (null));
    /**
     * Terminal outcome details. Present exactly when status is no_show. anyOf[1] (Value): {@link
     * FulfillmentOutcomePreviousAttributes}. anyOf[2] (Value): null.
     */
    "outcome"?: ((FulfillmentOutcomePreviousAttributes) | (null));
    /**
     * Packages associated with this fulfillment. anyOf[1] (Value): Array of {@link
     * ExpandedPackageSummaryPreviousAttributes}. Packages associated with this fulfillment.
     * anyOf[1][] (Value): {@link ExpandedPackageSummaryPreviousAttributes}. anyOf[2] (Value):
     * null.
     */
    "packages"?: ((Array<ExpandedPackageSummaryPreviousAttributes>) | (null));
    /**
     * First time this fulfillment reached packed. anyOf[1] (Value): string. First time this
     * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
     * (Value): null.
     */
    "packed_at"?: ((string) | (null));
    /**
     * First time this fulfillment reached picked. anyOf[1] (Value): string. First time this
     * fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
     * (Value): null.
     */
    "picked_at"?: ((string) | (null));
    /**
     * Pickup window, pickup mode, and handoff times for a pickup fulfillment. anyOf[1] (Value):
     * {@link PickupFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
     */
    "pickup_details"?: ((PickupFulfillmentDetailsPreviousAttributes) | (null));
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. anyOf[1] (Value): {@link FulfillmentRecipientPreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "recipient"?: ((FulfillmentRecipientPreviousAttributes) | (null));
    /**
     * Derived start of the service schedule or pickup, local delivery, or shipment window. Null
     * when no schedule is booked, including digital fulfillments. Details remain the authoritative
     * schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last
     * descending. Sorting by due_at compares this same value with nulls last ascending and first
     * descending. Ties use fulfillment_id in the same direction. anyOf[1] (Value): string. Derived
     * start of the service schedule or pickup, local delivery, or shipment window. Null when no
     * schedule is booked, including digital fulfillments. Details remain the authoritative
     * schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last
     * descending. Sorting by due_at compares this same value with nulls last ascending and first
     * descending. Ties use fulfillment_id in the same direction. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "scheduled_start_at"?: ((string) | (null));
    /**
     * Schedule and completion details for a service fulfillment. anyOf[1] (Value): {@link
     * ServiceFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
     */
    "service_details"?: ((ServiceFulfillmentDetailsPreviousAttributes) | (null));
    /**
     * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
     * fulfillments with at least one value. anyOf[1] (Value): {@link
     * ShipmentFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
     */
    "shipment_details"?: ((ShipmentFulfillmentDetailsPreviousAttributes) | (null));
    /**
     * Shipments associated with this fulfillment. anyOf[1] (Value): Array of {@link
     * ExpandedShipmentSummaryPreviousAttributes}. Shipments associated with this fulfillment.
     * anyOf[1][] (Value): {@link ExpandedShipmentSummaryPreviousAttributes}. anyOf[2] (Value):
     * null.
     */
    "shipments"?: ((Array<ExpandedShipmentSummaryPreviousAttributes>) | (null));
    /**
     * Current fulfillment lifecycle status. Read supported_actions for available transitions. -
     * `pending`: Work has not started and has not been accepted. Approval may be required before
     * work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. -
     * `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a
     * supported forward action. - `in_progress`: Work has started and is not yet ready or
     * complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
     * `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was
     * intentionally canceled and will not continue. - `failed`: The fulfillment could not be
     * completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The
     * fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or
     * provider preparation is underway. - `picked`: The assigned items have been picked. -
     * `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its
     * origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome
     * for the recorded reason. Value enum: "pending", "accepted", "on_hold", "in_progress",
     * "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
     * "dispatched", "no_show". anyOf[1] (Value): string. Current fulfillment lifecycle status.
     * Read supported_actions for available transitions. - `pending`: Work has not started and has
     * not been accepted. Approval may be required before work can begin. - `accepted`: The
     * provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused.
     * Release the hold to restore active_hold.previous_status, or use a supported forward action.
     * - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
     * fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work
     * completed successfully. - `canceled`: The fulfillment was intentionally canceled and will
     * not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
     * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its
     * recorded service window. - `preparing`: Warehouse or provider preparation is underway. -
     * `picked`: The assigned items have been picked. - `packed`: The assigned items have been
     * packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. -
     * `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value
     * enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show". anyOf[2]
     * (Value): null.
     */
    "status"?: (("pending"
        | "accepted"
        | "on_hold"
        | "in_progress"
        | "ready"
        | "completed"
        | "canceled"
        | "failed"
        | "scheduled"
        | "preparing"
        | "picked"
        | "packed"
        | "dispatched"
        | "no_show"
        | (string & {}))
        | (null));
    /**
     * Read-only lifecycle actions accepted now, based on the fulfillment, its order payment
     * status, holds, and shipment progress. Empty when none are available. Values name the verb
     * route with hyphens replaced by underscores. Always present with merchant credentials. []
     * enum: "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
     * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule",
     * "start". anyOf[1] (Value): Array of string. Read-only lifecycle actions accepted now, based
     * on the fulfillment, its order payment status, holds, and shipment progress. Empty when none
     * are available. Values name the verb route with hyphens replaced by underscores. Always
     * present with merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch",
     * "fail", "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
     * "mark_ready", "release_hold", "schedule", "start". anyOf[1][] (Value): string. Value enum:
     * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed",
     * "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start". anyOf[2]
     * (Value): null.
     */
    "supported_actions"?: ((Array<"accept"
        | "cancel"
        | "complete"
        | "dispatch"
        | "fail"
        | "hold"
        | "mark_no_show"
        | "mark_packed"
        | "mark_picked"
        | "mark_preparing"
        | "mark_ready"
        | "release_hold"
        | "schedule"
        | "start"
        | (string & {})>)
        | (null));
    /**
     * When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This
     * records the state transition; completed_at records completion evidence supplied for the
     * fulfillment. anyOf[1] (Value): string. When the fulfillment entered a terminal state:
     * completed, canceled, failed, or no_show. This records the state transition; completed_at
     * records completion evidence supplied for the fulfillment. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "terminal_at"?: ((string) | (null));
    /**
     * How the items are delivered: shipment, pickup, local delivery, digital delivery, or service.
     * Value enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover".
     * anyOf[1] (Value): string. How the items are delivered: shipment, pickup, local delivery,
     * digital delivery, or service. Value enum: "shipment", "pickup", "local_delivery", "digital",
     * "service", "handover". anyOf[2] (Value): null.
     */
    "type"?: (("shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {}))
        | (null));
    /**
     * When the fulfillment was last updated, in RFC3339 format. anyOf[1] (Value): string. When the
     * fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "updated_at"?: ((string) | (null));
    /**
     * Monotonic fulfillment version for expected_version checks. anyOf[1] (Value): integer.
     * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum: 1.
     * anyOf[2] (Value): null.
     */
    "version"?: ((number) | (null));
};
/** The recipient of a fulfillment, with name, email, phone, address, and handling instructions. */
export type FulfillmentRecipient = {
    /**
     * Postal address where the recipient receives the items. A postal address. Every address has
     * country. Addresses Flint checked as complete (customer and saved addresses, merchant,
     * location, invoice, order delivery destination, tax identity, fulfillment recipient and
     * pickup addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country.
     */
    "address"?: Address;
    /** Recipient's contact email address. */
    "email"?: string;
    /**
     * Instructions for handling the recipient's order. For a pickup that checkout creates, this is
     * the note the buyer left for the store, such as the car to look for.
     */
    "instructions"?: string;
    /** Recipient's name for delivery or pickup. */
    "name"?: string;
    /** Recipient's contact phone number. */
    "phone"?: string;
};
export type FulfillmentRecipientPreviousAttributes = {
    /**
     * Postal address where the recipient receives the items. anyOf[1] (Value): {@link
     * AddressPreviousAttributes}. anyOf[2] (Value): null.
     */
    "address"?: ((AddressPreviousAttributes) | (null));
    /**
     * Recipient's contact email address. anyOf[1] (Value): string. Recipient's contact email
     * address. anyOf[2] (Value): null.
     */
    "email"?: ((string) | (null));
    /**
     * Instructions for handling the recipient's order. For a pickup that checkout creates, this is
     * the note the buyer left for the store, such as the car to look for. anyOf[1] (Value):
     * string. Instructions for handling the recipient's order. For a pickup that checkout creates,
     * this is the note the buyer left for the store, such as the car to look for. anyOf[2]
     * (Value): null.
     */
    "instructions"?: ((string) | (null));
    /**
     * Recipient's name for delivery or pickup. anyOf[1] (Value): string. Recipient's name for
     * delivery or pickup. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * Recipient's contact phone number. anyOf[1] (Value): string. Recipient's contact phone
     * number. anyOf[2] (Value): null.
     */
    "phone"?: ((string) | (null));
};
/**
 * Recipient details you supply when creating or updating a fulfillment: name, email, phone,
 * address, and handling instructions.
 */
export type FulfillmentRecipientRequest = {
    /**
     * Postal address where the recipient receives the items. A complete postal address. State and
     * postal_code are required for US addresses and optional for other countries. Send null or
     * omit line2, state, and postal_code when the address has none.
     */
    "address"?: AddressRequest;
    /** Recipient's contact email address. minLength: 1. */
    "email"?: string;
    /**
     * Instructions for handling the recipient's order. For a pickup that checkout creates, this is
     * the note the buyer left for the store, such as the car to look for. minLength: 1.
     */
    "instructions"?: string;
    /**
     * Recipient's name for delivery or pickup. Surrounding whitespace is trimmed before length
     * validation. A supplied value cannot be blank; use null where clearing is supported.
     * minLength: 1.
     */
    "name"?: string;
    /** Recipient's contact phone number. minLength: 1. */
    "phone"?: string;
};
/**
 * Recipient details you supply when creating or updating a fulfillment: name, email, phone,
 * address, and handling instructions.
 */
export type FulfillmentRecipientRequestInput = {
    /**
     * Postal address where the recipient receives the items. A complete postal address. State and
     * postal_code are required for US addresses and optional for other countries. Send null or
     * omit line2, state, and postal_code when the address has none.
     */
    "address"?: AddressRequestInput;
    /** Recipient's contact email address. minLength: 1. */
    "email"?: string;
    /**
     * Instructions for handling the recipient's order. For a pickup that checkout creates, this is
     * the note the buyer left for the store, such as the car to look for. minLength: 1.
     */
    "instructions"?: string;
    /**
     * Recipient's name for delivery or pickup. Surrounding whitespace is trimmed before length
     * validation. A supplied value cannot be blank; use null where clearing is supported.
     * minLength: 1.
     */
    "name"?: string;
    /** Recipient's contact phone number. minLength: 1. */
    "phone"?: string;
};
/** A response containing `Fulfillment` data. */
export type FulfillmentResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Work required to deliver
     * an order's items.
     */
    "data": Fulfillment;
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
/**
 * Merchant fulfillment settings, including whether fulfillments require approval
 * (`approval_required`).
 */
export type FulfillmentSettings = {
    /**
     * Whether a new fulfillment must be accepted before it can move into preparation, movement, or
     * completion. Defaults to false.
     */
    "approval_required"?: boolean;
};
/**
 * Merchant fulfillment settings, including whether fulfillments require approval
 * (`approval_required`).
 */
export type FulfillmentSettingsRequestInput = FulfillmentSettings;
/** The `single_package` variant of `FulfillmentPackagingInput`. */
export type FulfillmentSinglePackageRequest = ({
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** Name of the external system that `external_reference_id` belongs to. minLength: 1. */
    "external_system"?: string;
    /**
     * Caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * The one package that holds every submitted line quantity. The single package created with a
     * shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to
     * created or shipped; items and return_line_items are not accepted.
     */
    "package": SinglePackageCreateRequest;
    /**
     * Packages for an itemized shipment, from 1 to 20, each listing the items it holds. minItems:
     * 1. maxItems: 20. [] (Value): {@link PackageCreateRequest}. Package to create inline with its
     * enclosing shipment or fulfillment. Set status to created before handoff, or shipped to
     * report handoff during creation. [].buyer_notification_behavior (Optional): string. Controls
     * buyer email handling. Omit or use send to send when recipient, template, and deduplication
     * rules allow it. Use suppress when another system owns buyer messaging. Value enum: "send",
     * "suppress". [].carrier (Optional): string. Carrier that handles the package. minLength: 1.
     * [].dimensions (Optional): {@link Dimensions}. Dimensions of the package. Package or item
     * dimensions as `length`, `width`, and `height` in the given `unit`. [].expected_delivery_at
     * (Optional): string or null. When the carrier or merchant expects this package to arrive.
     * Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates and
     * transitions. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     * [].external_reference_id (Optional): string. Caller-owned identifier for this resource in an
     * external system. Requires external_system. External references are not unique. Use
     * Idempotency-Key for retries. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * [].external_system (Optional): string. Name of the external system that
     * external_reference_id belongs to. External references are not unique. Use Idempotency-Key
     * for retries. minLength: 1. [].items (Required): Array of {@link CreatePackageItemRequest}.
     * Independent package-item collection. Required when status is shipped unless
     * pack_fulfillment_items is true. Inline creation uses the child-create shape and commits
     * atomically; edit items through the package item routes after creation. Each order line and
     * bundle component pair may appear once. minItems: 1. maxItems: 100. [].items[] (Value):
     * {@link CreatePackageItemRequest}. The request body for: Create package item. [].label_url
     * (Optional): string. HTTPS shipping-label URL supplied by your integration. Non-Flint URLs
     * require external_system for provenance. Flint does not host the label file. minLength: 1.
     * [].metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50. [].pack_fulfillment_items (Optional): boolean. Put every item in the
     * fulfillment into this outbound package. Use with status shipped and a single package. Omit
     * items. Value enum: true. [].return_line_items (Optional): Array of {@link
     * ReturnResolutionLineItemRequest}. Required for a package on a return shipment: allocates
     * quantities from the shipment's return_line_items to this parcel. Rejected on outbound
     * shipments. [].return_line_items[] (Value): {@link ReturnResolutionLineItemRequest}. A Return
     * line and the quantity to place in a return shipment or package. The enclosing Return or
     * shipment determines its parent. [].service_code (Optional): string. Carrier's code for the
     * shipping service used. minLength: 1. [].shipped_at (Optional): string. Package handoff time.
     * Defaults to request time. Only allowed with status shipped. Format: date-time. minLength: 1.
     * Example: "2026-08-02T16:00:00Z". [].status (Required): string. Outbound packages can start
     * as created or shipped. Return packages must start as created, omit items, and include
     * return_line_items. Use mark_shipped after the buyer hands over the return package. Value
     * enum: "created", "shipped". [].status_reason (Optional): string. Additional explanation of
     * the package's starting status. minLength: 1. [].tracking_number (Optional): string. Carrier
     * tracking number for the package. minLength: 1. [].tracking_url (Optional): string. Absolute
     * HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. [].weight
     * (Optional): {@link Weight}. Weight of the package. A weight value in grams, kilograms,
     * ounces, or pounds, used in delivery profile configuration. [].oneOf[1] (Value): {@link
     * PackageCreateInputCreated}. Package to create inline with its enclosing shipment or
     * fulfillment. Set status to created before handoff, or shipped to report handoff during
     * creation. [].oneOf[2] (Value): {@link PackageCreateInputShipped}. Package to create inline
     * with its enclosing shipment or fulfillment. Set status to created before handoff, or shipped
     * to report handoff during creation.
     */
    "packages"?: Array<({
        /**
         * Independent package-item collection. Required when status is shipped unless
         * pack_fulfillment_items is true. Inline creation uses the child-create shape and commits
         * atomically; edit items through the package item routes after creation. Each order line
         * and bundle component pair may appear once. minItems: 1. maxItems: 100. [] (Value):
         * {@link CreatePackageItemRequest}. The request body for: Create package item.
         */
        "items": Array<CreatePackageItemRequest>;
    })
        & (Exclude<PackageCreateRequest & object, readonly unknown[]>)>;
    /** How the shipment's packages are described. Value enum: "single_package". */
    "packaging": "single_package" | (string & {});
});
/** The `single_package` variant of `FulfillmentPackagingInput`. */
export type FulfillmentSinglePackageRequestInput = ({
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** Name of the external system that `external_reference_id` belongs to. minLength: 1. */
    "external_system"?: string;
    /**
     * Caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * The one package that holds every submitted line quantity. The single package created with a
     * shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to
     * created or shipped; items and return_line_items are not accepted.
     */
    "package": SinglePackageCreateRequestInput;
    /**
     * Packages for an itemized shipment, from 1 to 20, each listing the items it holds. minItems:
     * 1. maxItems: 20. [] (Value): {@link PackageCreateRequestInput}. Package to create inline
     * with its enclosing shipment or fulfillment. Set status to created before handoff, or shipped
     * to report handoff during creation. [].buyer_notification_behavior (Optional): string.
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress". [].carrier (Optional): string. Carrier that handles the package.
     * minLength: 1. [].dimensions (Optional): {@link DimensionsRequestInput}. Dimensions of the
     * package. Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     * [].expected_delivery_at (Optional): string or null. When the carrier or merchant expects
     * this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it
     * unchanged on updates and transitions. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z". [].external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. Requires external_system. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". [].external_system (Optional): string. Name of the external system that
     * external_reference_id belongs to. External references are not unique. Use Idempotency-Key
     * for retries. minLength: 1. [].items (Required): Array of {@link
     * CreatePackageItemRequestInput}. Independent package-item collection. Required when status is
     * shipped unless pack_fulfillment_items is true. Inline creation uses the child-create shape
     * and commits atomically; edit items through the package item routes after creation. Each
     * order line and bundle component pair may appear once. minItems: 1. maxItems: 100. [].items[]
     * (Value): {@link CreatePackageItemRequestInput}. The request body for: Create package item.
     * [].label_url (Optional): string. HTTPS shipping-label URL supplied by your integration.
     * Non-Flint URLs require external_system for provenance. Flint does not host the label file.
     * minLength: 1. [].metadata (Optional): {@link MetadataRequestInput}. Caller-owned metadata.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Caller-owned key-value data for a
     * new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256
     * Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at
     * most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are
     * reserved for Flint. maxProperties: 50. [].pack_fulfillment_items (Optional): boolean. Put
     * every item in the fulfillment into this outbound package. Use with status shipped and a
     * single package. Omit items. Value enum: true. [].return_line_items (Optional): Array of
     * {@link ReturnShipmentLineItemAllocationRequestInput}. Required for a package on a return
     * shipment: allocates quantities from the shipment's return_line_items to this parcel.
     * Rejected on outbound shipments. [].return_line_items[] (Value): {@link
     * ReturnShipmentLineItemAllocationRequestInput}. A Return line and the quantity to place in a
     * return shipment or package. The enclosing Return or shipment determines its parent.
     * [].service_code (Optional): string. Carrier's code for the shipping service used. minLength:
     * 1. [].shipped_at (Optional): string. Package handoff time. Defaults to request time. Only
     * allowed with status shipped. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z". [].status (Required): string. Outbound packages can start as created
     * or shipped. Return packages must start as created, omit items, and include
     * return_line_items. Use mark_shipped after the buyer hands over the return package. Value
     * enum: "created", "shipped". [].status_reason (Optional): string. Additional explanation of
     * the package's starting status. minLength: 1. [].tracking_number (Optional): string. Carrier
     * tracking number for the package. minLength: 1. [].tracking_url (Optional): string. Absolute
     * HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. [].weight
     * (Optional): {@link WeightRequestInput}. Weight of the package. A weight value in grams,
     * kilograms, ounces, or pounds, used in delivery profile configuration. [].oneOf[1] (Value):
     * {@link PackageCreateInputCreatedInput}. Package to create inline with its enclosing shipment
     * or fulfillment. Set status to created before handoff, or shipped to report handoff during
     * creation. [].oneOf[2] (Value): {@link PackageCreateInputShippedInput}. Package to create
     * inline with its enclosing shipment or fulfillment. Set status to created before handoff, or
     * shipped to report handoff during creation.
     */
    "packages"?: Array<({
        /**
         * Independent package-item collection. Required when status is shipped unless
         * pack_fulfillment_items is true. Inline creation uses the child-create shape and commits
         * atomically; edit items through the package item routes after creation. Each order line
         * and bundle component pair may appear once. minItems: 1. maxItems: 100. [] (Value):
         * {@link CreatePackageItemRequestInput}. The request body for: Create package item.
         */
        "items": Array<CreatePackageItemRequestInput>;
    })
        & (Exclude<PackageCreateRequestInput & object, readonly unknown[]>)>;
    /** How the shipment's packages are described. Value enum: "single_package". */
    "packaging": "single_package";
})
    & (({
    "packages"?: never;
}));
export type FulfillmentUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_hold"?: FulfillmentHold;
            "charges"?: Array<FulfillmentChargeLink>;
            "completed_at"?: string;
            "created_at": string;
            "customer_id"?: string;
            "delivery_choice_group_id"?: string | null;
            "delivery_execution_leg_id"?: string | null;
            "delivery_method_id"?: string | null;
            "delivery_selection_id"?: string | null;
            "device_id"?: string;
            "digital_details"?: DigitalFulfillmentDetails;
            "dispatched_at"?: string;
            "external_reference_id"?: string;
            "fulfillment_id": string;
            "idempotency_key": string | null;
            "line_items": Array<FulfillmentLineItem>;
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            "location_id"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "order_number"?: string;
            "outcome"?: FulfillmentOutcome;
            "packages"?: Array<ExpandedPackageSummary>;
            "packed_at"?: string;
            "picked_at"?: string;
            "pickup_details"?: PickupFulfillmentDetails;
            "recipient"?: FulfillmentRecipient;
            "scheduled_start_at": string | null;
            "service_details"?: ServiceFulfillmentDetails;
            "shipment_details"?: ShipmentFulfillmentDetails;
            "shipments"?: Array<ExpandedShipmentSummary>;
            "status": "pending"
                | "accepted"
                | "on_hold"
                | "in_progress"
                | "ready"
                | "completed"
                | "canceled"
                | "failed"
                | "scheduled"
                | "preparing"
                | "picked"
                | "packed"
                | "dispatched"
                | "no_show"
                | (string & {});
            "supported_actions"?: Array<"accept"
                | "cancel"
                | "complete"
                | "dispatch"
                | "fail"
                | "hold"
                | "mark_no_show"
                | "mark_packed"
                | "mark_picked"
                | "mark_preparing"
                | "mark_ready"
                | "release_hold"
                | "schedule"
                | "start"
                | (string & {})>;
            "terminal_at"?: string;
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "active_hold"?: ((FulfillmentHoldPreviousAttributes) | (null));
            "charges"?: ((Array<FulfillmentChargeLinkPreviousAttributes>) | (null));
            "completed_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "customer_id"?: ((string) | (null));
            "delivery_choice_group_id"?: ((string) | (null));
            "delivery_execution_leg_id"?: ((string) | (null));
            "delivery_method_id"?: ((string) | (null));
            "delivery_selection_id"?: ((string) | (null));
            "device_id"?: ((string) | (null));
            "digital_details"?: ((DigitalFulfillmentDetailsPreviousAttributes) | (null));
            "dispatched_at"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "fulfillment_id"?: ((string) | (null));
            "idempotency_key"?: ((string) | (null));
            "line_items"?: ((Array<FulfillmentLineItemPreviousAttributes>) | (null));
            "local_delivery_details"?: ((DeliveryFulfillmentDetailsPreviousAttributes) | (null));
            "location_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "order_number"?: ((string) | (null));
            "outcome"?: ((FulfillmentOutcomePreviousAttributes) | (null));
            "packages"?: ((Array<ExpandedPackageSummaryPreviousAttributes>) | (null));
            "packed_at"?: ((string) | (null));
            "picked_at"?: ((string) | (null));
            "pickup_details"?: ((PickupFulfillmentDetailsPreviousAttributes) | (null));
            "recipient"?: ((FulfillmentRecipientPreviousAttributes) | (null));
            "scheduled_start_at"?: ((string) | (null));
            "service_details"?: ((ServiceFulfillmentDetailsPreviousAttributes) | (null));
            "shipment_details"?: ((ShipmentFulfillmentDetailsPreviousAttributes) | (null));
            "shipments"?: ((Array<ExpandedShipmentSummaryPreviousAttributes>) | (null));
            "status"?: (("pending"
                | "accepted"
                | "on_hold"
                | "in_progress"
                | "ready"
                | "completed"
                | "canceled"
                | "failed"
                | "scheduled"
                | "preparing"
                | "picked"
                | "packed"
                | "dispatched"
                | "no_show"
                | (string & {}))
                | (null));
            "supported_actions"?: ((Array<"accept"
                | "cancel"
                | "complete"
                | "dispatch"
                | "fail"
                | "hold"
                | "mark_no_show"
                | "mark_packed"
                | "mark_picked"
                | "mark_preparing"
                | "mark_ready"
                | "release_hold"
                | "schedule"
                | "start"
                | (string & {})>)
                | (null));
            "terminal_at"?: ((string) | (null));
            "type"?: (("shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {}))
                | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "fulfillment.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_hold"?: FulfillmentHold;
            "charges"?: Array<FulfillmentChargeLink>;
            "completed_at"?: string;
            "created_at": string;
            "customer_id"?: string;
            "delivery_choice_group_id"?: string | null;
            "delivery_execution_leg_id"?: string | null;
            "delivery_method_id"?: string | null;
            "delivery_selection_id"?: string | null;
            "device_id"?: string;
            "digital_details"?: DigitalFulfillmentDetails;
            "dispatched_at"?: string;
            "external_reference_id"?: string;
            "fulfillment_id": string;
            "idempotency_key": string | null;
            "line_items": Array<FulfillmentLineItem>;
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            "location_id"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "order_number"?: string;
            "outcome"?: FulfillmentOutcome;
            "packages"?: Array<ExpandedPackageSummary>;
            "packed_at"?: string;
            "picked_at"?: string;
            "pickup_details"?: PickupFulfillmentDetails;
            "recipient"?: FulfillmentRecipient;
            "scheduled_start_at": string | null;
            "service_details"?: ServiceFulfillmentDetails;
            "shipment_details"?: ShipmentFulfillmentDetails;
            "shipments"?: Array<ExpandedShipmentSummary>;
            "status": "pending"
                | "accepted"
                | "on_hold"
                | "in_progress"
                | "ready"
                | "completed"
                | "canceled"
                | "failed"
                | "scheduled"
                | "preparing"
                | "picked"
                | "packed"
                | "dispatched"
                | "no_show"
                | (string & {});
            "supported_actions"?: Array<"accept"
                | "cancel"
                | "complete"
                | "dispatch"
                | "fail"
                | "hold"
                | "mark_no_show"
                | "mark_packed"
                | "mark_picked"
                | "mark_preparing"
                | "mark_ready"
                | "release_hold"
                | "schedule"
                | "start"
                | (string & {})>;
            "terminal_at"?: string;
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "active_hold"?: ((FulfillmentHoldPreviousAttributes) | (null));
            "charges"?: ((Array<FulfillmentChargeLinkPreviousAttributes>) | (null));
            "completed_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "customer_id"?: ((string) | (null));
            "delivery_choice_group_id"?: ((string) | (null));
            "delivery_execution_leg_id"?: ((string) | (null));
            "delivery_method_id"?: ((string) | (null));
            "delivery_selection_id"?: ((string) | (null));
            "device_id"?: ((string) | (null));
            "digital_details"?: ((DigitalFulfillmentDetailsPreviousAttributes) | (null));
            "dispatched_at"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "fulfillment_id"?: ((string) | (null));
            "idempotency_key"?: ((string) | (null));
            "line_items"?: ((Array<FulfillmentLineItemPreviousAttributes>) | (null));
            "local_delivery_details"?: ((DeliveryFulfillmentDetailsPreviousAttributes) | (null));
            "location_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "order_number"?: ((string) | (null));
            "outcome"?: ((FulfillmentOutcomePreviousAttributes) | (null));
            "packages"?: ((Array<ExpandedPackageSummaryPreviousAttributes>) | (null));
            "packed_at"?: ((string) | (null));
            "picked_at"?: ((string) | (null));
            "pickup_details"?: ((PickupFulfillmentDetailsPreviousAttributes) | (null));
            "recipient"?: ((FulfillmentRecipientPreviousAttributes) | (null));
            "scheduled_start_at"?: ((string) | (null));
            "service_details"?: ((ServiceFulfillmentDetailsPreviousAttributes) | (null));
            "shipment_details"?: ((ShipmentFulfillmentDetailsPreviousAttributes) | (null));
            "shipments"?: ((Array<ExpandedShipmentSummaryPreviousAttributes>) | (null));
            "status"?: (("pending"
                | "accepted"
                | "on_hold"
                | "in_progress"
                | "ready"
                | "completed"
                | "canceled"
                | "failed"
                | "scheduled"
                | "preparing"
                | "picked"
                | "packed"
                | "dispatched"
                | "no_show"
                | (string & {}))
                | (null));
            "supported_actions"?: ((Array<"accept"
                | "cancel"
                | "complete"
                | "dispatch"
                | "fail"
                | "hold"
                | "mark_no_show"
                | "mark_packed"
                | "mark_picked"
                | "mark_preparing"
                | "mark_ready"
                | "release_hold"
                | "schedule"
                | "start"
                | (string & {})>)
                | (null));
            "terminal_at"?: ((string) | (null));
            "type"?: (("shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {}))
                | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "fulfillment.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "fulfillment.updated";
});
/**
 * The `fulfillment.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type FulfillmentUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.active_hold (Optional): {@link FulfillmentHold}. Current hold
     * details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason,
     * who placed it, and when it became active. object.charges (Optional): Array of {@link
     * FulfillmentChargeLink}. Order charges associated with this fulfillment. object.charges[]
     * (Value): {@link FulfillmentChargeLink}. Links a fulfillment to an order charge by
     * `order_charge_id`. object.completed_at (Optional): string. When the fulfillment was
     * completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, service_details.completed_at
     * for service fulfillments, and the order's paid_at for handovers completed at payment.
     * Omitted until a completion time is recorded. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.created_at (Required): string. When the fulfillment was
     * created, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer_id (Optional): string. Customer receiving this fulfillment, when one is set.
     * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.delivery_choice_group_id (Optional):
     * string or null. Delivery choice group that created this fulfillment. `null` when the
     * merchant created the fulfillment or checkout created it without a delivery quote. Always
     * present with merchant credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     * object.delivery_execution_leg_id (Optional): string or null. Execution leg of the selected
     * delivery option that created this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Always present with merchant
     * credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M". object.delivery_method_id
     * (Optional): string or null. Delivery method chosen for this fulfillment. `null` when the
     * merchant created the fulfillment or checkout created it without a delivery quote. Also
     * `null` when it was created before this field was added. Always present with merchant
     * credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". object.delivery_selection_id
     * (Optional): string or null. Delivery selection that created this fulfillment. `null` when
     * the merchant created the fulfillment or checkout created it without a delivery quote. Always
     * present with merchant credentials. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     * object.device_id (Optional): string. Device associated with the fulfillment, when one is
     * recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6". object.digital_details (Optional):
     * {@link DigitalFulfillmentDetails}. Delivery URL and completion time for a digital
     * fulfillment. Details of a digital fulfillment: when it was delivered (`delivered_at`) and
     * its `delivery_url`. object.dispatched_at (Optional): string. First time this fulfillment
     * reached dispatched. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.fulfillment_id
     * (Required): string. Stable identifier of the fulfillment. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.idempotency_key (Required): string or null. The
     * Idempotency-Key of the request that created this resource. `null` when that request sent no
     * key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource. Buyer sessions on routes
     * shared with merchants get `null`. `/v1/me` responses do not include this field.
     * object.line_items (Required): Array of {@link FulfillmentLineItem}. Order lines and
     * quantities allocated to this fulfillment. object.line_items[] (Value): {@link
     * FulfillmentLineItem}. An order line item and quantity included in a fulfillment, with the
     * modifiers applied to it. object.local_delivery_details (Optional): {@link
     * DeliveryFulfillmentDetails}. Courier, delivery window, and handoff details for a local
     * delivery fulfillment. Details of a local delivery fulfillment: courier, timing window,
     * instructions, and tracking. Some fields are omitted for credentials that don't act for the
     * verified customer. object.location_id (Optional): string. Merchant location responsible for
     * this fulfillment. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". object.metadata (Optional):
     * {@link MetadataMap}. Caller-owned key-value metadata associated with the fulfillment.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order
     * (Optional): {@link ExpandedOrderSummary} or null. Order summary returned when the order
     * relationship is expanded. Present only when `expand` includes `order`; `null` when expanded
     * and there is no related order. object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}.
     * An order's summary fields, including status, payment and refund status, and pricing and
     * settlement amounts, returned when the order is expanded. object.order.anyOf[2] (Value):
     * null. object.order_id (Required): string. Order whose items this fulfillment delivers.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.order_number (Optional): string.
     * Human-readable number of the order this fulfillment belongs to. Omitted when the order has
     * no number. object.outcome (Optional): {@link FulfillmentOutcome}. Terminal outcome details.
     * Present exactly when status is no_show. The terminal outcome recorded for a fulfillment,
     * such as a no-show, with its reason, notes, and when it occurred. object.packages (Optional):
     * Array of {@link ExpandedPackageSummary}. Packages associated with this fulfillment.
     * object.packages[] (Value): {@link ExpandedPackageSummary}. A package's summary fields,
     * including carrier, tracking, status, and supported actions, returned when the package is
     * expanded. object.packed_at (Optional): string. First time this fulfillment reached packed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.picked_at (Optional): string.
     * First time this fulfillment reached picked. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.pickup_details (Optional): {@link PickupFulfillmentDetails}.
     * Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup details. For
     * a pickup that checkout creates, location_name, address, and instructions name the store the
     * buyer chose and the delivery method's pickup instructions. The note the buyer left for the
     * store is in recipient.instructions. object.recipient (Optional): {@link
     * FulfillmentRecipient}. Omitted for a checkout session credential that doesn't act for the
     * customer the buyer verified. The recipient of a fulfillment, with name, email, phone,
     * address, and handling instructions. object.scheduled_start_at (Required): string or null.
     * Derived start of the service schedule or pickup, local delivery, or shipment window. Null
     * when no schedule is booked, including digital fulfillments. Details remain the authoritative
     * schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last
     * descending. Sorting by due_at compares this same value with nulls last ascending and first
     * descending. Ties use fulfillment_id in the same direction. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.service_details (Optional): {@link
     * ServiceFulfillmentDetails}. Schedule and completion details for a service fulfillment.
     * Details of a service fulfillment: the scheduled start and end, timezone, completion time,
     * and notes. object.shipment_details (Optional): {@link ShipmentFulfillmentDetails}. Shipping
     * schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments
     * with at least one value. Details of a shipment fulfillment: the shipping window, timezone,
     * and when the shipment was handed to the carrier. object.shipments (Optional): Array of
     * {@link ExpandedShipmentSummary}. Shipments associated with this fulfillment.
     * object.shipments[] (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields,
     * including direction, status, and package count, returned when the shipment is expanded.
     * object.status (Required): string. Current fulfillment lifecycle status. Read
     * supported_actions for available transitions. - `pending`: Work has not started and has not
     * been accepted. Approval may be required before work can begin. - `accepted`: The provider
     * accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the
     * hold to restore active_hold.previous_status, or use a supported forward action. -
     * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment
     * is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed
     * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
     * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason
     * before creating replacement work. - `scheduled`: The fulfillment is scheduled for its
     * recorded service window. - `preparing`: Warehouse or provider preparation is underway. -
     * `picked`: The assigned items have been picked. - `packed`: The assigned items have been
     * packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. -
     * `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value
     * enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     * object.supported_actions (Optional): Array of string. Read-only lifecycle actions accepted
     * now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty
     * when none are available. Values name the verb route with hyphens replaced by underscores.
     * Always present with merchant credentials. [] enum: "accept", "cancel", "complete",
     * "dispatch", "fail", "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
     * "mark_ready", "release_hold", "schedule", "start". object.supported_actions[] (Value):
     * string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". object.terminal_at (Optional): string. When the
     * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records
     * the state transition; completed_at records completion evidence supplied for the fulfillment.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string. How the
     * items are delivered: shipment, pickup, local delivery, digital delivery, or service. Value
     * enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover".
     * object.updated_at (Required): string. When the fulfillment was last updated, in RFC3339
     * format. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Monotonic fulfillment version for expected_version checks. Format: uint64. minimum:
     * 1. previous_attributes (Optional): object and {@link FulfillmentPreviousAttributes}.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.active_hold (Optional): {@link
     * FulfillmentHoldPreviousAttributes} or null. Current hold details. Present exactly when
     * status is on_hold. previous_attributes.active_hold.anyOf[1] (Value): {@link
     * FulfillmentHoldPreviousAttributes}. previous_attributes.active_hold.anyOf[2] (Value): null.
     * previous_attributes.charges (Optional): Array of {@link
     * FulfillmentChargeLinkPreviousAttributes} or null. Order charges associated with this
     * fulfillment. previous_attributes.charges.anyOf[1] (Value): Array of {@link
     * FulfillmentChargeLinkPreviousAttributes}. Order charges associated with this fulfillment.
     * previous_attributes.charges.anyOf[1][] (Value): {@link
     * FulfillmentChargeLinkPreviousAttributes}. previous_attributes.charges.anyOf[2] (Value):
     * null. previous_attributes.completed_at (Optional): string or null. When the fulfillment was
     * completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, service_details.completed_at
     * for service fulfillments, and the order's paid_at for handovers completed at payment.
     * Omitted until a completion time is recorded. previous_attributes.completed_at.anyOf[1]
     * (Value): string. When the fulfillment was completed. Mirrors the completion time for its
     * type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for
     * pickup, service_details.completed_at for service fulfillments, and the order's paid_at for
     * handovers completed at payment. Omitted until a completion time is recorded. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.completed_at.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. When the
     * fulfillment was created, in RFC3339 format. previous_attributes.created_at.anyOf[1] (Value):
     * string. When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.customer_id (Optional): string or null. Customer receiving this
     * fulfillment, when one is set. previous_attributes.customer_id.anyOf[1] (Value): string.
     * Customer receiving this fulfillment, when one is set. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". previous_attributes.customer_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_choice_group_id (Optional): string or null. Delivery choice
     * group that created this fulfillment. `null` when the merchant created the fulfillment or
     * checkout created it without a delivery quote. Always present with merchant credentials.
     * previous_attributes.delivery_choice_group_id.anyOf[1] (Value): string. Delivery choice group
     * that created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials. Example:
     * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". previous_attributes.delivery_choice_group_id.anyOf[2]
     * (Value): null. previous_attributes.delivery_execution_leg_id (Optional): string or null.
     * Execution leg of the selected delivery option that created this fulfillment. `null` when the
     * merchant created the fulfillment or checkout created it without a delivery quote. Always
     * present with merchant credentials. previous_attributes.delivery_execution_leg_id.anyOf[1]
     * (Value): string. Execution leg of the selected delivery option that created this
     * fulfillment. `null` when the merchant created the fulfillment or checkout created it without
     * a delivery quote. Always present with merchant credentials. Example:
     * "dleg_01KEZF7C00VB59BKTRC8W4KR4M". previous_attributes.delivery_execution_leg_id.anyOf[2]
     * (Value): null. previous_attributes.delivery_method_id (Optional): string or null. Delivery
     * method chosen for this fulfillment. `null` when the merchant created the fulfillment or
     * checkout created it without a delivery quote. Also `null` when it was created before this
     * field was added. Always present with merchant credentials.
     * previous_attributes.delivery_method_id.anyOf[1] (Value): string. Delivery method chosen for
     * this fulfillment. `null` when the merchant created the fulfillment or checkout created it
     * without a delivery quote. Also `null` when it was created before this field was added.
     * Always present with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * previous_attributes.delivery_method_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_selection_id (Optional): string or null. Delivery selection
     * that created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials.
     * previous_attributes.delivery_selection_id.anyOf[1] (Value): string. Delivery selection that
     * created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". previous_attributes.delivery_selection_id.anyOf[2]
     * (Value): null. previous_attributes.device_id (Optional): string or null. Device associated
     * with the fulfillment, when one is recorded. previous_attributes.device_id.anyOf[1] (Value):
     * string. Device associated with the fulfillment, when one is recorded. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6". previous_attributes.device_id.anyOf[2] (Value): null.
     * previous_attributes.digital_details (Optional): {@link
     * DigitalFulfillmentDetailsPreviousAttributes} or null. Delivery URL and completion time for a
     * digital fulfillment. previous_attributes.digital_details.anyOf[1] (Value): {@link
     * DigitalFulfillmentDetailsPreviousAttributes}. previous_attributes.digital_details.anyOf[2]
     * (Value): null. previous_attributes.dispatched_at (Optional): string or null. First time this
     * fulfillment reached dispatched. previous_attributes.dispatched_at.anyOf[1] (Value): string.
     * First time this fulfillment reached dispatched. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.dispatched_at.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.fulfillment_id (Optional): string or null. Stable identifier of the
     * fulfillment. previous_attributes.fulfillment_id.anyOf[1] (Value): string. Stable identifier
     * of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     * previous_attributes.fulfillment_id.anyOf[2] (Value): null.
     * previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of the
     * request that created this resource. `null` when that request sent no key, Flint created the
     * resource, the reader isn't the caller that created it (another app install, a buyer, or the
     * merchant reading an app's or buyer's record), or the caller that created an older record is
     * unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including
     * replayed responses and webhook events, can return `null`. To find a key that a replay
     * returns as `null`, read the resource. Buyer sessions on routes shared with merchants get
     * `null`. `/v1/me` responses do not include this field.
     * previous_attributes.idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
     * request that created this resource. `null` when that request sent no key, Flint created the
     * resource, the reader isn't the caller that created it (another app install, a buyer, or the
     * merchant reading an app's or buyer's record), or the caller that created an older record is
     * unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including
     * replayed responses and webhook events, can return `null`. To find a key that a replay
     * returns as `null`, read the resource. Buyer sessions on routes shared with merchants get
     * `null`. `/v1/me` responses do not include this field.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null. previous_attributes.line_items
     * (Optional): Array of {@link FulfillmentLineItemPreviousAttributes} or null. Order lines and
     * quantities allocated to this fulfillment. previous_attributes.line_items.anyOf[1] (Value):
     * Array of {@link FulfillmentLineItemPreviousAttributes}. Order lines and quantities allocated
     * to this fulfillment. previous_attributes.line_items.anyOf[1][] (Value): {@link
     * FulfillmentLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2] (Value):
     * null. previous_attributes.local_delivery_details (Optional): {@link
     * DeliveryFulfillmentDetailsPreviousAttributes} or null. Courier, delivery window, and handoff
     * details for a local delivery fulfillment.
     * previous_attributes.local_delivery_details.anyOf[1] (Value): {@link
     * DeliveryFulfillmentDetailsPreviousAttributes}.
     * previous_attributes.local_delivery_details.anyOf[2] (Value): null.
     * previous_attributes.location_id (Optional): string or null. Merchant location responsible
     * for this fulfillment. previous_attributes.location_id.anyOf[1] (Value): string. Merchant
     * location responsible for this fulfillment. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.location_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned key-value metadata associated with the
     * fulfillment. previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary returned when the
     * order relationship is expanded. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. previous_attributes.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummaryPreviousAttributes}. previous_attributes.order.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. Order whose items this fulfillment
     * delivers. previous_attributes.order_id.anyOf[1] (Value): string. Order whose items this
     * fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * previous_attributes.order_id.anyOf[2] (Value): null. previous_attributes.order_number
     * (Optional): string or null. Human-readable number of the order this fulfillment belongs to.
     * Omitted when the order has no number. previous_attributes.order_number.anyOf[1] (Value):
     * string. Human-readable number of the order this fulfillment belongs to. Omitted when the
     * order has no number. previous_attributes.order_number.anyOf[2] (Value): null.
     * previous_attributes.outcome (Optional): {@link FulfillmentOutcomePreviousAttributes} or
     * null. Terminal outcome details. Present exactly when status is no_show.
     * previous_attributes.outcome.anyOf[1] (Value): {@link FulfillmentOutcomePreviousAttributes}.
     * previous_attributes.outcome.anyOf[2] (Value): null. previous_attributes.packages (Optional):
     * Array of {@link ExpandedPackageSummaryPreviousAttributes} or null. Packages associated with
     * this fulfillment. previous_attributes.packages.anyOf[1] (Value): Array of {@link
     * ExpandedPackageSummaryPreviousAttributes}. Packages associated with this fulfillment.
     * previous_attributes.packages.anyOf[1][] (Value): {@link
     * ExpandedPackageSummaryPreviousAttributes}. previous_attributes.packages.anyOf[2] (Value):
     * null. previous_attributes.packed_at (Optional): string or null. First time this fulfillment
     * reached packed. previous_attributes.packed_at.anyOf[1] (Value): string. First time this
     * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.packed_at.anyOf[2] (Value): null. previous_attributes.picked_at
     * (Optional): string or null. First time this fulfillment reached picked.
     * previous_attributes.picked_at.anyOf[1] (Value): string. First time this fulfillment reached
     * picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.picked_at.anyOf[2] (Value): null. previous_attributes.pickup_details
     * (Optional): {@link PickupFulfillmentDetailsPreviousAttributes} or null. Pickup window,
     * pickup mode, and handoff times for a pickup fulfillment.
     * previous_attributes.pickup_details.anyOf[1] (Value): {@link
     * PickupFulfillmentDetailsPreviousAttributes}. previous_attributes.pickup_details.anyOf[2]
     * (Value): null. previous_attributes.recipient (Optional): {@link
     * FulfillmentRecipientPreviousAttributes} or null. Omitted for a checkout session credential
     * that doesn't act for the customer the buyer verified. previous_attributes.recipient.anyOf[1]
     * (Value): {@link FulfillmentRecipientPreviousAttributes}.
     * previous_attributes.recipient.anyOf[2] (Value): null. previous_attributes.scheduled_start_at
     * (Optional): string or null. Derived start of the service schedule or pickup, local delivery,
     * or shipment window. Null when no schedule is booked, including digital fulfillments. Details
     * remain the authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first
     * ascending and last descending. Sorting by due_at compares this same value with nulls last
     * ascending and first descending. Ties use fulfillment_id in the same direction.
     * previous_attributes.scheduled_start_at.anyOf[1] (Value): string. Derived start of the
     * service schedule or pickup, local delivery, or shipment window. Null when no schedule is
     * booked, including digital fulfillments. Details remain the authoritative schedule inputs.
     * Sorting by scheduled_start_at puts nulls first ascending and last descending. Sorting by
     * due_at compares this same value with nulls last ascending and first descending. Ties use
     * fulfillment_id in the same direction. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.scheduled_start_at.anyOf[2] (Value): null.
     * previous_attributes.service_details (Optional): {@link
     * ServiceFulfillmentDetailsPreviousAttributes} or null. Schedule and completion details for a
     * service fulfillment. previous_attributes.service_details.anyOf[1] (Value): {@link
     * ServiceFulfillmentDetailsPreviousAttributes}. previous_attributes.service_details.anyOf[2]
     * (Value): null. previous_attributes.shipment_details (Optional): {@link
     * ShipmentFulfillmentDetailsPreviousAttributes} or null. Shipping schedule and ship time for a
     * shipment fulfillment. Present only on shipment fulfillments with at least one value.
     * previous_attributes.shipment_details.anyOf[1] (Value): {@link
     * ShipmentFulfillmentDetailsPreviousAttributes}. previous_attributes.shipment_details.anyOf[2]
     * (Value): null. previous_attributes.shipments (Optional): Array of {@link
     * ExpandedShipmentSummaryPreviousAttributes} or null. Shipments associated with this
     * fulfillment. previous_attributes.shipments.anyOf[1] (Value): Array of {@link
     * ExpandedShipmentSummaryPreviousAttributes}. Shipments associated with this fulfillment.
     * previous_attributes.shipments.anyOf[1][] (Value): {@link
     * ExpandedShipmentSummaryPreviousAttributes}. previous_attributes.shipments.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. Current fulfillment lifecycle
     * status. Read supported_actions for available transitions. - `pending`: Work has not started
     * and has not been accepted. Approval may be required before work can begin. - `accepted`: The
     * provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused.
     * Release the hold to restore active_hold.previous_status, or use a supported forward action.
     * - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
     * fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work
     * completed successfully. - `canceled`: The fulfillment was intentionally canceled and will
     * not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
     * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its
     * recorded service window. - `preparing`: Warehouse or provider preparation is underway. -
     * `picked`: The assigned items have been picked. - `packed`: The assigned items have been
     * packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. -
     * `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value
     * enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     * previous_attributes.status.anyOf[1] (Value): string. Current fulfillment lifecycle status.
     * Read supported_actions for available transitions. - `pending`: Work has not started and has
     * not been accepted. Approval may be required before work can begin. - `accepted`: The
     * provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused.
     * Release the hold to restore active_hold.previous_status, or use a supported forward action.
     * - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
     * fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work
     * completed successfully. - `canceled`: The fulfillment was intentionally canceled and will
     * not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
     * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its
     * recorded service window. - `preparing`: Warehouse or provider preparation is underway. -
     * `picked`: The assigned items have been picked. - `packed`: The assigned items have been
     * packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. -
     * `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value
     * enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Read-only lifecycle actions accepted now, based on the
     * fulfillment, its order payment status, holds, and shipment progress. Empty when none are
     * available. Values name the verb route with hyphens replaced by underscores. Always present
     * with merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
     * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". previous_attributes.supported_actions.anyOf[1] (Value):
     * Array of string. Read-only lifecycle actions accepted now, based on the fulfillment, its
     * order payment status, holds, and shipment progress. Empty when none are available. Values
     * name the verb route with hyphens replaced by underscores. Always present with merchant
     * credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". previous_attributes.supported_actions.anyOf[1][]
     * (Value): string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". previous_attributes.supported_actions.anyOf[2] (Value):
     * null. previous_attributes.terminal_at (Optional): string or null. When the fulfillment
     * entered a terminal state: completed, canceled, failed, or no_show. This records the state
     * transition; completed_at records completion evidence supplied for the fulfillment.
     * previous_attributes.terminal_at.anyOf[1] (Value): string. When the fulfillment entered a
     * terminal state: completed, canceled, failed, or no_show. This records the state transition;
     * completed_at records completion evidence supplied for the fulfillment. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.terminal_at.anyOf[2] (Value): null.
     * previous_attributes.type (Optional): string or null. How the items are delivered: shipment,
     * pickup, local delivery, digital delivery, or service. Value enum: "shipment", "pickup",
     * "local_delivery", "digital", "service", "handover". previous_attributes.type.anyOf[1]
     * (Value): string. How the items are delivered: shipment, pickup, local delivery, digital
     * delivery, or service. Value enum: "shipment", "pickup", "local_delivery", "digital",
     * "service", "handover". previous_attributes.type.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When the fulfillment was last
     * updated, in RFC3339 format. previous_attributes.updated_at.anyOf[1] (Value): string. When
     * the fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value): null.
     * previous_attributes.version (Optional): integer or null. Monotonic fulfillment version for
     * expected_version checks. previous_attributes.version.anyOf[1] (Value): integer. Monotonic
     * fulfillment version for expected_version checks. Format: uint64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * active_hold (Optional): {@link FulfillmentHold}. Current hold details. Present exactly
         * when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and
         * when it became active. charges (Optional): Array of {@link FulfillmentChargeLink}. Order
         * charges associated with this fulfillment. charges[] (Value): {@link
         * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
         * completed_at (Optional): string. When the fulfillment was completed. Mirrors the
         * completion time for its type: delivered_at for shipment, local delivery, and digital
         * fulfillments, picked_up_at for pickup, service_details.completed_at for service
         * fulfillments, and the order's paid_at for handovers completed at payment. Omitted until
         * a completion time is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at (Required): string. When the fulfillment was created, in RFC3339 format.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". customer_id (Optional): string.
         * Customer receiving this fulfillment, when one is set. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". delivery_choice_group_id (Optional): string or null.
         * Delivery choice group that created this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
         * delivery_execution_leg_id (Optional): string or null. Execution leg of the selected
         * delivery option that created this fulfillment. `null` when the merchant created the
         * fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M". delivery_method_id
         * (Optional): string or null. Delivery method chosen for this fulfillment. `null` when the
         * merchant created the fulfillment or checkout created it without a delivery quote. Also
         * `null` when it was created before this field was added. Always present with merchant
         * credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_id
         * (Optional): string or null. Delivery selection that created this fulfillment. `null`
         * when the merchant created the fulfillment or checkout created it without a delivery
         * quote. Always present with merchant credentials. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". device_id (Optional): string. Device associated with
         * the fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
         * digital_details (Optional): {@link DigitalFulfillmentDetails}. Delivery URL and
         * completion time for a digital fulfillment. Details of a digital fulfillment: when it was
         * delivered (`delivered_at`) and its `delivery_url`. dispatched_at (Optional): string.
         * First time this fulfillment reached dispatched. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". fulfillment_id (Required): string. Stable identifier of the
         * fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". idempotency_key (Required):
         * string or null. The Idempotency-Key of the request that created this resource. `null`
         * when that request sent no key, Flint created the resource, the reader isn't the caller
         * that created it (another app install, a buyer, or the merchant reading an app's or
         * buyer's record), or the caller that created an older record is unknown. Filter its list
         * with `idempotency_key` to find it. Recorded payloads, including replayed responses and
         * webhook events, can return `null`. To find a key that a replay returns as `null`, read
         * the resource. Buyer sessions on routes shared with merchants get `null`. `/v1/me`
         * responses do not include this field. line_items (Required): Array of {@link
         * FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment.
         * line_items[] (Value): {@link FulfillmentLineItem}. An order line item and quantity
         * included in a fulfillment, with the modifiers applied to it. local_delivery_details
         * (Optional): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
         * details for a local delivery fulfillment. Details of a local delivery fulfillment:
         * courier, timing window, instructions, and tracking. Some fields are omitted for
         * credentials that don't act for the verified customer. location_id (Optional): string.
         * Merchant location responsible for this fulfillment. Example:
         * "loc_01KEZF7C00CMHRRYA3MV996JB2". metadata (Optional): {@link MetadataMap}. Caller-owned
         * key-value metadata associated with the fulfillment. Caller-owned key-value data stored
         * on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
         * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before
         * those limits may not satisfy them. order (Optional): {@link ExpandedOrderSummary} or
         * null. Order summary returned when the order relationship is expanded. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. Order whose items this fulfillment delivers. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_number (Optional): string. Human-readable number
         * of the order this fulfillment belongs to. Omitted when the order has no number. outcome
         * (Optional): {@link FulfillmentOutcome}. Terminal outcome details. Present exactly when
         * status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show,
         * with its reason, notes, and when it occurred. packages (Optional): Array of {@link
         * ExpandedPackageSummary}. Packages associated with this fulfillment. packages[] (Value):
         * {@link ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
         * status, and supported actions, returned when the package is expanded. packed_at
         * (Optional): string. First time this fulfillment reached packed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". picked_at (Optional): string. First time this
         * fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * pickup_details (Optional): {@link PickupFulfillmentDetails}. Pickup window, pickup mode,
         * and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout
         * creates, location_name, address, and instructions name the store the buyer chose and the
         * delivery method's pickup instructions. The note the buyer left for the store is in
         * recipient.instructions. recipient (Optional): {@link FulfillmentRecipient}. Omitted for
         * a checkout session credential that doesn't act for the customer the buyer verified. The
         * recipient of a fulfillment, with name, email, phone, address, and handling instructions.
         * scheduled_start_at (Required): string or null. Derived start of the service schedule or
         * pickup, local delivery, or shipment window. Null when no schedule is booked, including
         * digital fulfillments. Details remain the authoritative schedule inputs. Sorting by
         * scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at
         * compares this same value with nulls last ascending and first descending. Ties use
         * fulfillment_id in the same direction. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_details (Optional): {@link ServiceFulfillmentDetails}.
         * Schedule and completion details for a service fulfillment. Details of a service
         * fulfillment: the scheduled start and end, timezone, completion time, and notes.
         * shipment_details (Optional): {@link ShipmentFulfillmentDetails}. Shipping schedule and
         * ship time for a shipment fulfillment. Present only on shipment fulfillments with at
         * least one value. Details of a shipment fulfillment: the shipping window, timezone, and
         * when the shipment was handed to the carrier. shipments (Optional): Array of {@link
         * ExpandedShipmentSummary}. Shipments associated with this fulfillment. shipments[]
         * (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields, including
         * direction, status, and package count, returned when the shipment is expanded. status
         * (Required): string. Current fulfillment lifecycle status. Read supported_actions for
         * available transitions. - `pending`: Work has not started and has not been accepted.
         * Approval may be required before work can begin. - `accepted`: The provider accepted the
         * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
         * restore active_hold.previous_status, or use a supported forward action. - `in_progress`:
         * Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready
         * for pickup, handoff, or completion. - `completed`: All fulfillment work completed
         * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
         * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
         * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for
         * its recorded service window. - `preparing`: Warehouse or provider preparation is
         * underway. - `picked`: The assigned items have been picked. - `packed`: The assigned
         * items have been packed. - `dispatched`: The fulfillment left its origin for delivery or
         * handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded
         * reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
         * "dispatched", "no_show". supported_actions (Optional): Array of string. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. Always present with merchant credentials. [] enum:
         * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
         * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
         * "schedule", "start". supported_actions[] (Value): string. Value enum: "accept",
         * "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed",
         * "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start".
         * terminal_at (Optional): string. When the fulfillment entered a terminal state:
         * completed, canceled, failed, or no_show. This records the state transition; completed_at
         * records completion evidence supplied for the fulfillment. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". type (Required): string. How the items are delivered: shipment,
         * pickup, local delivery, digital delivery, or service. Value enum: "shipment", "pickup",
         * "local_delivery", "digital", "service", "handover". updated_at (Required): string. When
         * the fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Monotonic fulfillment version for
         * expected_version checks. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current hold details. Present exactly when status is on_hold. A hold on a
             * fulfillment, with its reason, who placed it, and when it became active.
             */
            "active_hold"?: FulfillmentHold;
            /**
             * Order charges associated with this fulfillment. [] (Value): {@link
             * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
             */
            "charges"?: Array<FulfillmentChargeLink>;
            /**
             * When the fulfillment was completed. Mirrors the completion time for its type:
             * delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at
             * for pickup, service_details.completed_at for service fulfillments, and the order's
             * paid_at for handovers completed at payment. Omitted until a completion time is
             * recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "completed_at"?: string;
            /**
             * When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Customer receiving this fulfillment, when one is set. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Delivery choice group that created this fulfillment. `null` when the merchant
             * created the fulfillment or checkout created it without a delivery quote. Always
             * present with merchant credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
             */
            "delivery_choice_group_id"?: string | null;
            /**
             * Execution leg of the selected delivery option that created this fulfillment. `null`
             * when the merchant created the fulfillment or checkout created it without a delivery
             * quote. Always present with merchant credentials. Example:
             * "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
             */
            "delivery_execution_leg_id"?: string | null;
            /**
             * Delivery method chosen for this fulfillment. `null` when the merchant created the
             * fulfillment or checkout created it without a delivery quote. Also `null` when it was
             * created before this field was added. Always present with merchant credentials.
             * Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_id"?: string | null;
            /**
             * Delivery selection that created this fulfillment. `null` when the merchant created
             * the fulfillment or checkout created it without a delivery quote. Always present with
             * merchant credentials. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
             */
            "delivery_selection_id"?: string | null;
            /**
             * Device associated with the fulfillment, when one is recorded. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6".
             */
            "device_id"?: string;
            /**
             * Delivery URL and completion time for a digital fulfillment. Details of a digital
             * fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`.
             */
            "digital_details"?: DigitalFulfillmentDetails;
            /**
             * First time this fulfillment reached dispatched. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "dispatched_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Stable identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
            "fulfillment_id": string;
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource. Buyer sessions on routes shared with merchants get
             * `null`. `/v1/me` responses do not include this field.
             */
            "idempotency_key": string | null;
            /**
             * Order lines and quantities allocated to this fulfillment. [] (Value): {@link
             * FulfillmentLineItem}. An order line item and quantity included in a fulfillment,
             * with the modifiers applied to it.
             */
            "line_items": Array<FulfillmentLineItem>;
            /**
             * Courier, delivery window, and handoff details for a local delivery fulfillment.
             * Details of a local delivery fulfillment: courier, timing window, instructions, and
             * tracking. Some fields are omitted for credentials that don't act for the verified
             * customer.
             */
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            /**
             * Merchant location responsible for this fulfillment. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id"?: string;
            /**
             * Caller-owned key-value metadata associated with the fulfillment. Caller-owned
             * key-value data stored on a resource. Keys starting with flint_ are reserved for
             * Flint and are not returned. Writes follow the limits on MetadataInput and
             * MetadataPatchInput; maps written before those limits may not satisfy them.
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
            /**
             * Order whose items this fulfillment delivers. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * Human-readable number of the order this fulfillment belongs to. Omitted when the
             * order has no number.
             */
            "order_number"?: string;
            /**
             * Terminal outcome details. Present exactly when status is no_show. The terminal
             * outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and
             * when it occurred.
             */
            "outcome"?: FulfillmentOutcome;
            /**
             * Packages associated with this fulfillment. [] (Value): {@link
             * ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
             * status, and supported actions, returned when the package is expanded.
             */
            "packages"?: Array<ExpandedPackageSummary>;
            /**
             * First time this fulfillment reached packed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "packed_at"?: string;
            /**
             * First time this fulfillment reached picked. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "picked_at"?: string;
            /**
             * Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup
             * details. For a pickup that checkout creates, location_name, address, and
             * instructions name the store the buyer chose and the delivery method's pickup
             * instructions. The note the buyer left for the store is in recipient.instructions.
             */
            "pickup_details"?: PickupFulfillmentDetails;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The recipient of a fulfillment, with name, email, phone, address,
             * and handling instructions.
             */
            "recipient"?: FulfillmentRecipient;
            /**
             * Derived start of the service schedule or pickup, local delivery, or shipment window.
             * Null when no schedule is booked, including digital fulfillments. Details remain the
             * authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first
             * ascending and last descending. Sorting by due_at compares this same value with nulls
             * last ascending and first descending. Ties use fulfillment_id in the same direction.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_start_at": string | null;
            /**
             * Schedule and completion details for a service fulfillment. Details of a service
             * fulfillment: the scheduled start and end, timezone, completion time, and notes.
             */
            "service_details"?: ServiceFulfillmentDetails;
            /**
             * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
             * fulfillments with at least one value. Details of a shipment fulfillment: the
             * shipping window, timezone, and when the shipment was handed to the carrier.
             */
            "shipment_details"?: ShipmentFulfillmentDetails;
            /**
             * Shipments associated with this fulfillment. [] (Value): {@link
             * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status,
             * and package count, returned when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Current fulfillment lifecycle status. Read supported_actions for available
             * transitions. - `pending`: Work has not started and has not been accepted. Approval
             * may be required before work can begin. - `accepted`: The provider accepted the
             * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
             * restore active_hold.previous_status, or use a supported forward action. -
             * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
             * fulfillment is ready for pickup, handoff, or completion. - `completed`: All
             * fulfillment work completed successfully. - `canceled`: The fulfillment was
             * intentionally canceled and will not continue. - `failed`: The fulfillment could not
             * be completed. Resolve the recorded reason before creating replacement work. -
             * `scheduled`: The fulfillment is scheduled for its recorded service window. -
             * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
             * items have been picked. - `packed`: The assigned items have been packed. -
             * `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`:
             * A service appointment was missed. Read outcome for the recorded reason. Value enum:
             * "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
             * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
             */
            "status": "pending"
                | "accepted"
                | "on_hold"
                | "in_progress"
                | "ready"
                | "completed"
                | "canceled"
                | "failed"
                | "scheduled"
                | "preparing"
                | "picked"
                | "packed"
                | "dispatched"
                | "no_show"
                | (string & {});
            /**
             * Read-only lifecycle actions accepted now, based on the fulfillment, its order
             * payment status, holds, and shipment progress. Empty when none are available. Values
             * name the verb route with hyphens replaced by underscores. Always present with
             * merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start". [] (Value): string. Value enum:
             * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
             * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
             * "schedule", "start".
             */
            "supported_actions"?: Array<"accept"
                | "cancel"
                | "complete"
                | "dispatch"
                | "fail"
                | "hold"
                | "mark_no_show"
                | "mark_packed"
                | "mark_picked"
                | "mark_preparing"
                | "mark_ready"
                | "release_hold"
                | "schedule"
                | "start"
                | (string & {})>;
            /**
             * When the fulfillment entered a terminal state: completed, canceled, failed, or
             * no_show. This records the state transition; completed_at records completion evidence
             * supplied for the fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "terminal_at"?: string;
            /**
             * How the items are delivered: shipment, pickup, local delivery, digital delivery, or
             * service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service",
             * "handover".
             */
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {});
            /**
             * When the fulfillment was last updated, in RFC3339 format. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum:
             * 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. active_hold (Optional): {@link
         * FulfillmentHoldPreviousAttributes} or null. Current hold details. Present exactly when
         * status is on_hold. active_hold.anyOf[1] (Value): {@link
         * FulfillmentHoldPreviousAttributes}. active_hold.anyOf[2] (Value): null. charges
         * (Optional): Array of {@link FulfillmentChargeLinkPreviousAttributes} or null. Order
         * charges associated with this fulfillment. charges.anyOf[1] (Value): Array of {@link
         * FulfillmentChargeLinkPreviousAttributes}. Order charges associated with this
         * fulfillment. charges.anyOf[1][] (Value): {@link
         * FulfillmentChargeLinkPreviousAttributes}. charges.anyOf[2] (Value): null. completed_at
         * (Optional): string or null. When the fulfillment was completed. Mirrors the completion
         * time for its type: delivered_at for shipment, local delivery, and digital fulfillments,
         * picked_up_at for pickup, service_details.completed_at for service fulfillments, and the
         * order's paid_at for handovers completed at payment. Omitted until a completion time is
         * recorded. completed_at.anyOf[1] (Value): string. When the fulfillment was completed.
         * Mirrors the completion time for its type: delivered_at for shipment, local delivery, and
         * digital fulfillments, picked_up_at for pickup, service_details.completed_at for service
         * fulfillments, and the order's paid_at for handovers completed at payment. Omitted until
         * a completion time is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * completed_at.anyOf[2] (Value): null. created_at (Optional): string or null. When the
         * fulfillment was created, in RFC3339 format. created_at.anyOf[1] (Value): string. When
         * the fulfillment was created, in RFC3339 format. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. customer_id (Optional):
         * string or null. Customer receiving this fulfillment, when one is set.
         * customer_id.anyOf[1] (Value): string. Customer receiving this fulfillment, when one is
         * set. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null.
         * delivery_choice_group_id (Optional): string or null. Delivery choice group that created
         * this fulfillment. `null` when the merchant created the fulfillment or checkout created
         * it without a delivery quote. Always present with merchant credentials.
         * delivery_choice_group_id.anyOf[1] (Value): string. Delivery choice group that created
         * this fulfillment. `null` when the merchant created the fulfillment or checkout created
         * it without a delivery quote. Always present with merchant credentials. Example:
         * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". delivery_choice_group_id.anyOf[2] (Value): null.
         * delivery_execution_leg_id (Optional): string or null. Execution leg of the selected
         * delivery option that created this fulfillment. `null` when the merchant created the
         * fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. delivery_execution_leg_id.anyOf[1] (Value): string. Execution leg
         * of the selected delivery option that created this fulfillment. `null` when the merchant
         * created the fulfillment or checkout created it without a delivery quote. Always present
         * with merchant credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
         * delivery_execution_leg_id.anyOf[2] (Value): null. delivery_method_id (Optional): string
         * or null. Delivery method chosen for this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Also `null` when it was
         * created before this field was added. Always present with merchant credentials.
         * delivery_method_id.anyOf[1] (Value): string. Delivery method chosen for this
         * fulfillment. `null` when the merchant created the fulfillment or checkout created it
         * without a delivery quote. Also `null` when it was created before this field was added.
         * Always present with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
         * delivery_method_id.anyOf[2] (Value): null. delivery_selection_id (Optional): string or
         * null. Delivery selection that created this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. delivery_selection_id.anyOf[1] (Value): string. Delivery selection
         * that created this fulfillment. `null` when the merchant created the fulfillment or
         * checkout created it without a delivery quote. Always present with merchant credentials.
         * Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". delivery_selection_id.anyOf[2] (Value):
         * null. device_id (Optional): string or null. Device associated with the fulfillment, when
         * one is recorded. device_id.anyOf[1] (Value): string. Device associated with the
         * fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
         * device_id.anyOf[2] (Value): null. digital_details (Optional): {@link
         * DigitalFulfillmentDetailsPreviousAttributes} or null. Delivery URL and completion time
         * for a digital fulfillment. digital_details.anyOf[1] (Value): {@link
         * DigitalFulfillmentDetailsPreviousAttributes}. digital_details.anyOf[2] (Value): null.
         * dispatched_at (Optional): string or null. First time this fulfillment reached
         * dispatched. dispatched_at.anyOf[1] (Value): string. First time this fulfillment reached
         * dispatched. Format: date-time. Example: "2026-08-02T16:00:00Z". dispatched_at.anyOf[2]
         * (Value): null. external_reference_id (Optional): string or null. Caller-owned identifier
         * for this resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. fulfillment_id
         * (Optional): string or null. Stable identifier of the fulfillment.
         * fulfillment_id.anyOf[1] (Value): string. Stable identifier of the fulfillment. Example:
         * "ful_01KEZF7C00F24WVSTTWR1FQX5T". fulfillment_id.anyOf[2] (Value): null. idempotency_key
         * (Optional): string or null. The Idempotency-Key of the request that created this
         * resource. `null` when that request sent no key, Flint created the resource, the reader
         * isn't the caller that created it (another app install, a buyer, or the merchant reading
         * an app's or buyer's record), or the caller that created an older record is unknown.
         * Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed
         * responses and webhook events, can return `null`. To find a key that a replay returns as
         * `null`, read the resource. Buyer sessions on routes shared with merchants get `null`.
         * `/v1/me` responses do not include this field. idempotency_key.anyOf[1] (Value): string.
         * The Idempotency-Key of the request that created this resource. `null` when that request
         * sent no key, Flint created the resource, the reader isn't the caller that created it
         * (another app install, a buyer, or the merchant reading an app's or buyer's record), or
         * the caller that created an older record is unknown. Filter its list with
         * `idempotency_key` to find it. Recorded payloads, including replayed responses and
         * webhook events, can return `null`. To find a key that a replay returns as `null`, read
         * the resource. Buyer sessions on routes shared with merchants get `null`. `/v1/me`
         * responses do not include this field. idempotency_key.anyOf[2] (Value): null. line_items
         * (Optional): Array of {@link FulfillmentLineItemPreviousAttributes} or null. Order lines
         * and quantities allocated to this fulfillment. line_items.anyOf[1] (Value): Array of
         * {@link FulfillmentLineItemPreviousAttributes}. Order lines and quantities allocated to
         * this fulfillment. line_items.anyOf[1][] (Value): {@link
         * FulfillmentLineItemPreviousAttributes}. line_items.anyOf[2] (Value): null.
         * local_delivery_details (Optional): {@link DeliveryFulfillmentDetailsPreviousAttributes}
         * or null. Courier, delivery window, and handoff details for a local delivery fulfillment.
         * local_delivery_details.anyOf[1] (Value): {@link
         * DeliveryFulfillmentDetailsPreviousAttributes}. local_delivery_details.anyOf[2] (Value):
         * null. location_id (Optional): string or null. Merchant location responsible for this
         * fulfillment. location_id.anyOf[1] (Value): string. Merchant location responsible for
         * this fulfillment. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". location_id.anyOf[2]
         * (Value): null. metadata (Optional): {@link MetadataMap} or null. Caller-owned key-value
         * metadata associated with the fulfillment. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. order (Optional): {@link
         * ExpandedOrderSummaryPreviousAttributes} or null. Order summary returned when the order
         * relationship is expanded. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. Order whose items this fulfillment delivers.
         * order_id.anyOf[1] (Value): string. Order whose items this fulfillment delivers. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. order_number
         * (Optional): string or null. Human-readable number of the order this fulfillment belongs
         * to. Omitted when the order has no number. order_number.anyOf[1] (Value): string.
         * Human-readable number of the order this fulfillment belongs to. Omitted when the order
         * has no number. order_number.anyOf[2] (Value): null. outcome (Optional): {@link
         * FulfillmentOutcomePreviousAttributes} or null. Terminal outcome details. Present exactly
         * when status is no_show. outcome.anyOf[1] (Value): {@link
         * FulfillmentOutcomePreviousAttributes}. outcome.anyOf[2] (Value): null. packages
         * (Optional): Array of {@link ExpandedPackageSummaryPreviousAttributes} or null. Packages
         * associated with this fulfillment. packages.anyOf[1] (Value): Array of {@link
         * ExpandedPackageSummaryPreviousAttributes}. Packages associated with this fulfillment.
         * packages.anyOf[1][] (Value): {@link ExpandedPackageSummaryPreviousAttributes}.
         * packages.anyOf[2] (Value): null. packed_at (Optional): string or null. First time this
         * fulfillment reached packed. packed_at.anyOf[1] (Value): string. First time this
         * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * packed_at.anyOf[2] (Value): null. picked_at (Optional): string or null. First time this
         * fulfillment reached picked. picked_at.anyOf[1] (Value): string. First time this
         * fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * picked_at.anyOf[2] (Value): null. pickup_details (Optional): {@link
         * PickupFulfillmentDetailsPreviousAttributes} or null. Pickup window, pickup mode, and
         * handoff times for a pickup fulfillment. pickup_details.anyOf[1] (Value): {@link
         * PickupFulfillmentDetailsPreviousAttributes}. pickup_details.anyOf[2] (Value): null.
         * recipient (Optional): {@link FulfillmentRecipientPreviousAttributes} or null. Omitted
         * for a checkout session credential that doesn't act for the customer the buyer verified.
         * recipient.anyOf[1] (Value): {@link FulfillmentRecipientPreviousAttributes}.
         * recipient.anyOf[2] (Value): null. scheduled_start_at (Optional): string or null. Derived
         * start of the service schedule or pickup, local delivery, or shipment window. Null when
         * no schedule is booked, including digital fulfillments. Details remain the authoritative
         * schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last
         * descending. Sorting by due_at compares this same value with nulls last ascending and
         * first descending. Ties use fulfillment_id in the same direction.
         * scheduled_start_at.anyOf[1] (Value): string. Derived start of the service schedule or
         * pickup, local delivery, or shipment window. Null when no schedule is booked, including
         * digital fulfillments. Details remain the authoritative schedule inputs. Sorting by
         * scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at
         * compares this same value with nulls last ascending and first descending. Ties use
         * fulfillment_id in the same direction. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". scheduled_start_at.anyOf[2] (Value): null. service_details
         * (Optional): {@link ServiceFulfillmentDetailsPreviousAttributes} or null. Schedule and
         * completion details for a service fulfillment. service_details.anyOf[1] (Value): {@link
         * ServiceFulfillmentDetailsPreviousAttributes}. service_details.anyOf[2] (Value): null.
         * shipment_details (Optional): {@link ShipmentFulfillmentDetailsPreviousAttributes} or
         * null. Shipping schedule and ship time for a shipment fulfillment. Present only on
         * shipment fulfillments with at least one value. shipment_details.anyOf[1] (Value): {@link
         * ShipmentFulfillmentDetailsPreviousAttributes}. shipment_details.anyOf[2] (Value): null.
         * shipments (Optional): Array of {@link ExpandedShipmentSummaryPreviousAttributes} or
         * null. Shipments associated with this fulfillment. shipments.anyOf[1] (Value): Array of
         * {@link ExpandedShipmentSummaryPreviousAttributes}. Shipments associated with this
         * fulfillment. shipments.anyOf[1][] (Value): {@link
         * ExpandedShipmentSummaryPreviousAttributes}. shipments.anyOf[2] (Value): null. status
         * (Optional): string or null. Current fulfillment lifecycle status. Read supported_actions
         * for available transitions. - `pending`: Work has not started and has not been accepted.
         * Approval may be required before work can begin. - `accepted`: The provider accepted the
         * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
         * restore active_hold.previous_status, or use a supported forward action. - `in_progress`:
         * Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready
         * for pickup, handoff, or completion. - `completed`: All fulfillment work completed
         * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
         * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
         * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for
         * its recorded service window. - `preparing`: Warehouse or provider preparation is
         * underway. - `picked`: The assigned items have been picked. - `packed`: The assigned
         * items have been packed. - `dispatched`: The fulfillment left its origin for delivery or
         * handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded
         * reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
         * "dispatched", "no_show". status.anyOf[1] (Value): string. Current fulfillment lifecycle
         * status. Read supported_actions for available transitions. - `pending`: Work has not
         * started and has not been accepted. Approval may be required before work can begin. -
         * `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`:
         * Work is paused. Release the hold to restore active_hold.previous_status, or use a
         * supported forward action. - `in_progress`: Work has started and is not yet ready or
         * complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
         * `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment
         * was intentionally canceled and will not continue. - `failed`: The fulfillment could not
         * be completed. Resolve the recorded reason before creating replacement work. -
         * `scheduled`: The fulfillment is scheduled for its recorded service window. -
         * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
         * items have been picked. - `packed`: The assigned items have been packed. - `dispatched`:
         * The fulfillment left its origin for delivery or handoff. - `no_show`: A service
         * appointment was missed. Read outcome for the recorded reason. Value enum: "pending",
         * "accepted", "on_hold", "in_progress", "ready", "completed", "canceled", "failed",
         * "scheduled", "preparing", "picked", "packed", "dispatched", "no_show". status.anyOf[2]
         * (Value): null. supported_actions (Optional): Array of string or null. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. Always present with merchant credentials. [] enum:
         * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
         * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
         * "schedule", "start". supported_actions.anyOf[1] (Value): Array of string. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. Always present with merchant credentials. [] enum:
         * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
         * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
         * "schedule", "start". supported_actions.anyOf[1][] (Value): string. Value enum: "accept",
         * "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed",
         * "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start".
         * supported_actions.anyOf[2] (Value): null. terminal_at (Optional): string or null. When
         * the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This
         * records the state transition; completed_at records completion evidence supplied for the
         * fulfillment. terminal_at.anyOf[1] (Value): string. When the fulfillment entered a
         * terminal state: completed, canceled, failed, or no_show. This records the state
         * transition; completed_at records completion evidence supplied for the fulfillment.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". terminal_at.anyOf[2] (Value): null.
         * type (Optional): string or null. How the items are delivered: shipment, pickup, local
         * delivery, digital delivery, or service. Value enum: "shipment", "pickup",
         * "local_delivery", "digital", "service", "handover". type.anyOf[1] (Value): string. How
         * the items are delivered: shipment, pickup, local delivery, digital delivery, or service.
         * Value enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover".
         * type.anyOf[2] (Value): null. updated_at (Optional): string or null. When the fulfillment
         * was last updated, in RFC3339 format. updated_at.anyOf[1] (Value): string. When the
         * fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Monotonic fulfillment version for expected_version checks. version.anyOf[1]
         * (Value): integer. Monotonic fulfillment version for expected_version checks. Format:
         * uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Current hold details. Present exactly when status is on_hold. anyOf[1] (Value):
             * {@link FulfillmentHoldPreviousAttributes}. anyOf[2] (Value): null.
             */
            "active_hold"?: ((FulfillmentHoldPreviousAttributes) | (null));
            /**
             * Order charges associated with this fulfillment. anyOf[1] (Value): Array of {@link
             * FulfillmentChargeLinkPreviousAttributes}. Order charges associated with this
             * fulfillment. anyOf[1][] (Value): {@link FulfillmentChargeLinkPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "charges"?: ((Array<FulfillmentChargeLinkPreviousAttributes>) | (null));
            /**
             * When the fulfillment was completed. Mirrors the completion time for its type:
             * delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at
             * for pickup, service_details.completed_at for service fulfillments, and the order's
             * paid_at for handovers completed at payment. Omitted until a completion time is
             * recorded. anyOf[1] (Value): string. When the fulfillment was completed. Mirrors the
             * completion time for its type: delivered_at for shipment, local delivery, and digital
             * fulfillments, picked_up_at for pickup, service_details.completed_at for service
             * fulfillments, and the order's paid_at for handovers completed at payment. Omitted
             * until a completion time is recorded. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "completed_at"?: ((string) | (null));
            /**
             * When the fulfillment was created, in RFC3339 format. anyOf[1] (Value): string. When
             * the fulfillment was created, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Customer receiving this fulfillment, when one is set. anyOf[1] (Value): string.
             * Customer receiving this fulfillment, when one is set. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * Delivery choice group that created this fulfillment. `null` when the merchant
             * created the fulfillment or checkout created it without a delivery quote. Always
             * present with merchant credentials. anyOf[1] (Value): string. Delivery choice group
             * that created this fulfillment. `null` when the merchant created the fulfillment or
             * checkout created it without a delivery quote. Always present with merchant
             * credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". anyOf[2] (Value): null.
             */
            "delivery_choice_group_id"?: ((string) | (null));
            /**
             * Execution leg of the selected delivery option that created this fulfillment. `null`
             * when the merchant created the fulfillment or checkout created it without a delivery
             * quote. Always present with merchant credentials. anyOf[1] (Value): string. Execution
             * leg of the selected delivery option that created this fulfillment. `null` when the
             * merchant created the fulfillment or checkout created it without a delivery quote.
             * Always present with merchant credentials. Example:
             * "dleg_01KEZF7C00VB59BKTRC8W4KR4M". anyOf[2] (Value): null.
             */
            "delivery_execution_leg_id"?: ((string) | (null));
            /**
             * Delivery method chosen for this fulfillment. `null` when the merchant created the
             * fulfillment or checkout created it without a delivery quote. Also `null` when it was
             * created before this field was added. Always present with merchant credentials.
             * anyOf[1] (Value): string. Delivery method chosen for this fulfillment. `null` when
             * the merchant created the fulfillment or checkout created it without a delivery
             * quote. Also `null` when it was created before this field was added. Always present
             * with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2]
             * (Value): null.
             */
            "delivery_method_id"?: ((string) | (null));
            /**
             * Delivery selection that created this fulfillment. `null` when the merchant created
             * the fulfillment or checkout created it without a delivery quote. Always present with
             * merchant credentials. anyOf[1] (Value): string. Delivery selection that created this
             * fulfillment. `null` when the merchant created the fulfillment or checkout created it
             * without a delivery quote. Always present with merchant credentials. Example:
             * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[2] (Value): null.
             */
            "delivery_selection_id"?: ((string) | (null));
            /**
             * Device associated with the fulfillment, when one is recorded. anyOf[1] (Value):
             * string. Device associated with the fulfillment, when one is recorded. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6". anyOf[2] (Value): null.
             */
            "device_id"?: ((string) | (null));
            /**
             * Delivery URL and completion time for a digital fulfillment. anyOf[1] (Value): {@link
             * DigitalFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "digital_details"?: ((DigitalFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * First time this fulfillment reached dispatched. anyOf[1] (Value): string. First time
             * this fulfillment reached dispatched. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "dispatched_at"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Stable identifier of the fulfillment. anyOf[1] (Value): string. Stable identifier of
             * the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". anyOf[2] (Value): null.
             */
            "fulfillment_id"?: ((string) | (null));
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource. Buyer sessions on routes shared with merchants get
             * `null`. `/v1/me` responses do not include this field. anyOf[1] (Value): string. The
             * Idempotency-Key of the request that created this resource. `null` when that request
             * sent no key, Flint created the resource, the reader isn't the caller that created it
             * (another app install, a buyer, or the merchant reading an app's or buyer's record),
             * or the caller that created an older record is unknown. Filter its list with
             * `idempotency_key` to find it. Recorded payloads, including replayed responses and
             * webhook events, can return `null`. To find a key that a replay returns as `null`,
             * read the resource. Buyer sessions on routes shared with merchants get `null`.
             * `/v1/me` responses do not include this field. anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Order lines and quantities allocated to this fulfillment. anyOf[1] (Value): Array of
             * {@link FulfillmentLineItemPreviousAttributes}. Order lines and quantities allocated
             * to this fulfillment. anyOf[1][] (Value): {@link
             * FulfillmentLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<FulfillmentLineItemPreviousAttributes>) | (null));
            /**
             * Courier, delivery window, and handoff details for a local delivery fulfillment.
             * anyOf[1] (Value): {@link DeliveryFulfillmentDetailsPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "local_delivery_details"?: ((DeliveryFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Merchant location responsible for this fulfillment. anyOf[1] (Value): string.
             * Merchant location responsible for this fulfillment. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
             */
            "location_id"?: ((string) | (null));
            /**
             * Caller-owned key-value metadata associated with the fulfillment. anyOf[1] (Value):
             * {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * Order whose items this fulfillment delivers. anyOf[1] (Value): string. Order whose
             * items this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2]
             * (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * Human-readable number of the order this fulfillment belongs to. Omitted when the
             * order has no number. anyOf[1] (Value): string. Human-readable number of the order
             * this fulfillment belongs to. Omitted when the order has no number. anyOf[2] (Value):
             * null.
             */
            "order_number"?: ((string) | (null));
            /**
             * Terminal outcome details. Present exactly when status is no_show. anyOf[1] (Value):
             * {@link FulfillmentOutcomePreviousAttributes}. anyOf[2] (Value): null.
             */
            "outcome"?: ((FulfillmentOutcomePreviousAttributes) | (null));
            /**
             * Packages associated with this fulfillment. anyOf[1] (Value): Array of {@link
             * ExpandedPackageSummaryPreviousAttributes}. Packages associated with this
             * fulfillment. anyOf[1][] (Value): {@link ExpandedPackageSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "packages"?: ((Array<ExpandedPackageSummaryPreviousAttributes>) | (null));
            /**
             * First time this fulfillment reached packed. anyOf[1] (Value): string. First time
             * this fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "packed_at"?: ((string) | (null));
            /**
             * First time this fulfillment reached picked. anyOf[1] (Value): string. First time
             * this fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "picked_at"?: ((string) | (null));
            /**
             * Pickup window, pickup mode, and handoff times for a pickup fulfillment. anyOf[1]
             * (Value): {@link PickupFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "pickup_details"?: ((PickupFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. anyOf[1] (Value): {@link FulfillmentRecipientPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "recipient"?: ((FulfillmentRecipientPreviousAttributes) | (null));
            /**
             * Derived start of the service schedule or pickup, local delivery, or shipment window.
             * Null when no schedule is booked, including digital fulfillments. Details remain the
             * authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first
             * ascending and last descending. Sorting by due_at compares this same value with nulls
             * last ascending and first descending. Ties use fulfillment_id in the same direction.
             * anyOf[1] (Value): string. Derived start of the service schedule or pickup, local
             * delivery, or shipment window. Null when no schedule is booked, including digital
             * fulfillments. Details remain the authoritative schedule inputs. Sorting by
             * scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at
             * compares this same value with nulls last ascending and first descending. Ties use
             * fulfillment_id in the same direction. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "scheduled_start_at"?: ((string) | (null));
            /**
             * Schedule and completion details for a service fulfillment. anyOf[1] (Value): {@link
             * ServiceFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "service_details"?: ((ServiceFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
             * fulfillments with at least one value. anyOf[1] (Value): {@link
             * ShipmentFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "shipment_details"?: ((ShipmentFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Shipments associated with this fulfillment. anyOf[1] (Value): Array of {@link
             * ExpandedShipmentSummaryPreviousAttributes}. Shipments associated with this
             * fulfillment. anyOf[1][] (Value): {@link ExpandedShipmentSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "shipments"?: ((Array<ExpandedShipmentSummaryPreviousAttributes>) | (null));
            /**
             * Current fulfillment lifecycle status. Read supported_actions for available
             * transitions. - `pending`: Work has not started and has not been accepted. Approval
             * may be required before work can begin. - `accepted`: The provider accepted the
             * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
             * restore active_hold.previous_status, or use a supported forward action. -
             * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
             * fulfillment is ready for pickup, handoff, or completion. - `completed`: All
             * fulfillment work completed successfully. - `canceled`: The fulfillment was
             * intentionally canceled and will not continue. - `failed`: The fulfillment could not
             * be completed. Resolve the recorded reason before creating replacement work. -
             * `scheduled`: The fulfillment is scheduled for its recorded service window. -
             * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
             * items have been picked. - `packed`: The assigned items have been packed. -
             * `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`:
             * A service appointment was missed. Read outcome for the recorded reason. Value enum:
             * "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
             * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
             * anyOf[1] (Value): string. Current fulfillment lifecycle status. Read
             * supported_actions for available transitions. - `pending`: Work has not started and
             * has not been accepted. Approval may be required before work can begin. - `accepted`:
             * The provider accepted the fulfillment; work has not started. - `on_hold`: Work is
             * paused. Release the hold to restore active_hold.previous_status, or use a supported
             * forward action. - `in_progress`: Work has started and is not yet ready or complete.
             * - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
             * `completed`: All fulfillment work completed successfully. - `canceled`: The
             * fulfillment was intentionally canceled and will not continue. - `failed`: The
             * fulfillment could not be completed. Resolve the recorded reason before creating
             * replacement work. - `scheduled`: The fulfillment is scheduled for its recorded
             * service window. - `preparing`: Warehouse or provider preparation is underway. -
             * `picked`: The assigned items have been picked. - `packed`: The assigned items have
             * been packed. - `dispatched`: The fulfillment left its origin for delivery or
             * handoff. - `no_show`: A service appointment was missed. Read outcome for the
             * recorded reason. Value enum: "pending", "accepted", "on_hold", "in_progress",
             * "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked",
             * "packed", "dispatched", "no_show". anyOf[2] (Value): null.
             */
            "status"?: (("pending"
                | "accepted"
                | "on_hold"
                | "in_progress"
                | "ready"
                | "completed"
                | "canceled"
                | "failed"
                | "scheduled"
                | "preparing"
                | "picked"
                | "packed"
                | "dispatched"
                | "no_show"
                | (string & {}))
                | (null));
            /**
             * Read-only lifecycle actions accepted now, based on the fulfillment, its order
             * payment status, holds, and shipment progress. Empty when none are available. Values
             * name the verb route with hyphens replaced by underscores. Always present with
             * merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start". anyOf[1] (Value): Array of
             * string. Read-only lifecycle actions accepted now, based on the fulfillment, its
             * order payment status, holds, and shipment progress. Empty when none are available.
             * Values name the verb route with hyphens replaced by underscores. Always present with
             * merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start". anyOf[1][] (Value): string. Value
             * enum: "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
             * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
             * "schedule", "start". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"accept"
                | "cancel"
                | "complete"
                | "dispatch"
                | "fail"
                | "hold"
                | "mark_no_show"
                | "mark_packed"
                | "mark_picked"
                | "mark_preparing"
                | "mark_ready"
                | "release_hold"
                | "schedule"
                | "start"
                | (string & {})>)
                | (null));
            /**
             * When the fulfillment entered a terminal state: completed, canceled, failed, or
             * no_show. This records the state transition; completed_at records completion evidence
             * supplied for the fulfillment. anyOf[1] (Value): string. When the fulfillment entered
             * a terminal state: completed, canceled, failed, or no_show. This records the state
             * transition; completed_at records completion evidence supplied for the fulfillment.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "terminal_at"?: ((string) | (null));
            /**
             * How the items are delivered: shipment, pickup, local delivery, digital delivery, or
             * service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service",
             * "handover". anyOf[1] (Value): string. How the items are delivered: shipment, pickup,
             * local delivery, digital delivery, or service. Value enum: "shipment", "pickup",
             * "local_delivery", "digital", "service", "handover". anyOf[2] (Value): null.
             */
            "type"?: (("shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {}))
                | (null));
            /**
             * When the fulfillment was last updated, in RFC3339 format. anyOf[1] (Value): string.
             * When the fulfillment was last updated, in RFC3339 format. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Monotonic fulfillment version for expected_version checks. anyOf[1] (Value):
             * integer. Monotonic fulfillment version for expected_version checks. Format: uint64.
             * minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "fulfillment.updated". */
    "event_type"?: "fulfillment.updated";
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
 * The `fulfillment.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type FulfillmentUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.active_hold (Optional): {@link FulfillmentHold}. Current hold
     * details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason,
     * who placed it, and when it became active. object.charges (Optional): Array of {@link
     * FulfillmentChargeLink}. Order charges associated with this fulfillment. object.charges[]
     * (Value): {@link FulfillmentChargeLink}. Links a fulfillment to an order charge by
     * `order_charge_id`. object.completed_at (Optional): string. When the fulfillment was
     * completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, service_details.completed_at
     * for service fulfillments, and the order's paid_at for handovers completed at payment.
     * Omitted until a completion time is recorded. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.created_at (Required): string. When the fulfillment was
     * created, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer_id (Optional): string. Customer receiving this fulfillment, when one is set.
     * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.delivery_choice_group_id (Optional):
     * string or null. Delivery choice group that created this fulfillment. `null` when the
     * merchant created the fulfillment or checkout created it without a delivery quote. Always
     * present with merchant credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     * object.delivery_execution_leg_id (Optional): string or null. Execution leg of the selected
     * delivery option that created this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Always present with merchant
     * credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M". object.delivery_method_id
     * (Optional): string or null. Delivery method chosen for this fulfillment. `null` when the
     * merchant created the fulfillment or checkout created it without a delivery quote. Also
     * `null` when it was created before this field was added. Always present with merchant
     * credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". object.delivery_selection_id
     * (Optional): string or null. Delivery selection that created this fulfillment. `null` when
     * the merchant created the fulfillment or checkout created it without a delivery quote. Always
     * present with merchant credentials. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     * object.device_id (Optional): string. Device associated with the fulfillment, when one is
     * recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6". object.digital_details (Optional):
     * {@link DigitalFulfillmentDetails}. Delivery URL and completion time for a digital
     * fulfillment. Details of a digital fulfillment: when it was delivered (`delivered_at`) and
     * its `delivery_url`. object.dispatched_at (Optional): string. First time this fulfillment
     * reached dispatched. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.fulfillment_id
     * (Required): string. Stable identifier of the fulfillment. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.idempotency_key (Required): string or null. The
     * Idempotency-Key of the request that created this resource. `null` when that request sent no
     * key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource. Buyer sessions on routes
     * shared with merchants get `null`. `/v1/me` responses do not include this field.
     * object.line_items (Required): Array of {@link FulfillmentLineItem}. Order lines and
     * quantities allocated to this fulfillment. object.line_items[] (Value): {@link
     * FulfillmentLineItem}. An order line item and quantity included in a fulfillment, with the
     * modifiers applied to it. object.local_delivery_details (Optional): {@link
     * DeliveryFulfillmentDetails}. Courier, delivery window, and handoff details for a local
     * delivery fulfillment. Details of a local delivery fulfillment: courier, timing window,
     * instructions, and tracking. Some fields are omitted for credentials that don't act for the
     * verified customer. object.location_id (Optional): string. Merchant location responsible for
     * this fulfillment. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". object.metadata (Optional):
     * {@link MetadataMap}. Caller-owned key-value metadata associated with the fulfillment.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order
     * (Optional): {@link ExpandedOrderSummary} or null. Order summary returned when the order
     * relationship is expanded. Present only when `expand` includes `order`; `null` when expanded
     * and there is no related order. object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}.
     * An order's summary fields, including status, payment and refund status, and pricing and
     * settlement amounts, returned when the order is expanded. object.order.anyOf[2] (Value):
     * null. object.order_id (Required): string. Order whose items this fulfillment delivers.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.order_number (Optional): string.
     * Human-readable number of the order this fulfillment belongs to. Omitted when the order has
     * no number. object.outcome (Optional): {@link FulfillmentOutcome}. Terminal outcome details.
     * Present exactly when status is no_show. The terminal outcome recorded for a fulfillment,
     * such as a no-show, with its reason, notes, and when it occurred. object.packages (Optional):
     * Array of {@link ExpandedPackageSummary}. Packages associated with this fulfillment.
     * object.packages[] (Value): {@link ExpandedPackageSummary}. A package's summary fields,
     * including carrier, tracking, status, and supported actions, returned when the package is
     * expanded. object.packed_at (Optional): string. First time this fulfillment reached packed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.picked_at (Optional): string.
     * First time this fulfillment reached picked. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.pickup_details (Optional): {@link PickupFulfillmentDetails}.
     * Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup details. For
     * a pickup that checkout creates, location_name, address, and instructions name the store the
     * buyer chose and the delivery method's pickup instructions. The note the buyer left for the
     * store is in recipient.instructions. object.recipient (Optional): {@link
     * FulfillmentRecipient}. Omitted for a checkout session credential that doesn't act for the
     * customer the buyer verified. The recipient of a fulfillment, with name, email, phone,
     * address, and handling instructions. object.scheduled_start_at (Required): string or null.
     * Derived start of the service schedule or pickup, local delivery, or shipment window. Null
     * when no schedule is booked, including digital fulfillments. Details remain the authoritative
     * schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last
     * descending. Sorting by due_at compares this same value with nulls last ascending and first
     * descending. Ties use fulfillment_id in the same direction. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.service_details (Optional): {@link
     * ServiceFulfillmentDetails}. Schedule and completion details for a service fulfillment.
     * Details of a service fulfillment: the scheduled start and end, timezone, completion time,
     * and notes. object.shipment_details (Optional): {@link ShipmentFulfillmentDetails}. Shipping
     * schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments
     * with at least one value. Details of a shipment fulfillment: the shipping window, timezone,
     * and when the shipment was handed to the carrier. object.shipments (Optional): Array of
     * {@link ExpandedShipmentSummary}. Shipments associated with this fulfillment.
     * object.shipments[] (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields,
     * including direction, status, and package count, returned when the shipment is expanded.
     * object.status (Required): string. Current fulfillment lifecycle status. Read
     * supported_actions for available transitions. - `pending`: Work has not started and has not
     * been accepted. Approval may be required before work can begin. - `accepted`: The provider
     * accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the
     * hold to restore active_hold.previous_status, or use a supported forward action. -
     * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment
     * is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed
     * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
     * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason
     * before creating replacement work. - `scheduled`: The fulfillment is scheduled for its
     * recorded service window. - `preparing`: Warehouse or provider preparation is underway. -
     * `picked`: The assigned items have been picked. - `packed`: The assigned items have been
     * packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. -
     * `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value
     * enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     * object.supported_actions (Optional): Array of string. Read-only lifecycle actions accepted
     * now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty
     * when none are available. Values name the verb route with hyphens replaced by underscores.
     * Always present with merchant credentials. [] enum: "accept", "cancel", "complete",
     * "dispatch", "fail", "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
     * "mark_ready", "release_hold", "schedule", "start". object.supported_actions[] (Value):
     * string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". object.terminal_at (Optional): string. When the
     * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records
     * the state transition; completed_at records completion evidence supplied for the fulfillment.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string. How the
     * items are delivered: shipment, pickup, local delivery, digital delivery, or service. Value
     * enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover".
     * object.updated_at (Required): string. When the fulfillment was last updated, in RFC3339
     * format. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Monotonic fulfillment version for expected_version checks. Format: uint64. minimum:
     * 1. previous_attributes (Optional): object and {@link FulfillmentPreviousAttributes}.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.active_hold (Optional): {@link
     * FulfillmentHoldPreviousAttributes} or null. Current hold details. Present exactly when
     * status is on_hold. previous_attributes.active_hold.anyOf[1] (Value): {@link
     * FulfillmentHoldPreviousAttributes}. previous_attributes.active_hold.anyOf[2] (Value): null.
     * previous_attributes.charges (Optional): Array of {@link
     * FulfillmentChargeLinkPreviousAttributes} or null. Order charges associated with this
     * fulfillment. previous_attributes.charges.anyOf[1] (Value): Array of {@link
     * FulfillmentChargeLinkPreviousAttributes}. Order charges associated with this fulfillment.
     * previous_attributes.charges.anyOf[1][] (Value): {@link
     * FulfillmentChargeLinkPreviousAttributes}. previous_attributes.charges.anyOf[2] (Value):
     * null. previous_attributes.completed_at (Optional): string or null. When the fulfillment was
     * completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, service_details.completed_at
     * for service fulfillments, and the order's paid_at for handovers completed at payment.
     * Omitted until a completion time is recorded. previous_attributes.completed_at.anyOf[1]
     * (Value): string. When the fulfillment was completed. Mirrors the completion time for its
     * type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for
     * pickup, service_details.completed_at for service fulfillments, and the order's paid_at for
     * handovers completed at payment. Omitted until a completion time is recorded. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.completed_at.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. When the
     * fulfillment was created, in RFC3339 format. previous_attributes.created_at.anyOf[1] (Value):
     * string. When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.customer_id (Optional): string or null. Customer receiving this
     * fulfillment, when one is set. previous_attributes.customer_id.anyOf[1] (Value): string.
     * Customer receiving this fulfillment, when one is set. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". previous_attributes.customer_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_choice_group_id (Optional): string or null. Delivery choice
     * group that created this fulfillment. `null` when the merchant created the fulfillment or
     * checkout created it without a delivery quote. Always present with merchant credentials.
     * previous_attributes.delivery_choice_group_id.anyOf[1] (Value): string. Delivery choice group
     * that created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials. Example:
     * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". previous_attributes.delivery_choice_group_id.anyOf[2]
     * (Value): null. previous_attributes.delivery_execution_leg_id (Optional): string or null.
     * Execution leg of the selected delivery option that created this fulfillment. `null` when the
     * merchant created the fulfillment or checkout created it without a delivery quote. Always
     * present with merchant credentials. previous_attributes.delivery_execution_leg_id.anyOf[1]
     * (Value): string. Execution leg of the selected delivery option that created this
     * fulfillment. `null` when the merchant created the fulfillment or checkout created it without
     * a delivery quote. Always present with merchant credentials. Example:
     * "dleg_01KEZF7C00VB59BKTRC8W4KR4M". previous_attributes.delivery_execution_leg_id.anyOf[2]
     * (Value): null. previous_attributes.delivery_method_id (Optional): string or null. Delivery
     * method chosen for this fulfillment. `null` when the merchant created the fulfillment or
     * checkout created it without a delivery quote. Also `null` when it was created before this
     * field was added. Always present with merchant credentials.
     * previous_attributes.delivery_method_id.anyOf[1] (Value): string. Delivery method chosen for
     * this fulfillment. `null` when the merchant created the fulfillment or checkout created it
     * without a delivery quote. Also `null` when it was created before this field was added.
     * Always present with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * previous_attributes.delivery_method_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_selection_id (Optional): string or null. Delivery selection
     * that created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials.
     * previous_attributes.delivery_selection_id.anyOf[1] (Value): string. Delivery selection that
     * created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". previous_attributes.delivery_selection_id.anyOf[2]
     * (Value): null. previous_attributes.device_id (Optional): string or null. Device associated
     * with the fulfillment, when one is recorded. previous_attributes.device_id.anyOf[1] (Value):
     * string. Device associated with the fulfillment, when one is recorded. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6". previous_attributes.device_id.anyOf[2] (Value): null.
     * previous_attributes.digital_details (Optional): {@link
     * DigitalFulfillmentDetailsPreviousAttributes} or null. Delivery URL and completion time for a
     * digital fulfillment. previous_attributes.digital_details.anyOf[1] (Value): {@link
     * DigitalFulfillmentDetailsPreviousAttributes}. previous_attributes.digital_details.anyOf[2]
     * (Value): null. previous_attributes.dispatched_at (Optional): string or null. First time this
     * fulfillment reached dispatched. previous_attributes.dispatched_at.anyOf[1] (Value): string.
     * First time this fulfillment reached dispatched. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.dispatched_at.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.fulfillment_id (Optional): string or null. Stable identifier of the
     * fulfillment. previous_attributes.fulfillment_id.anyOf[1] (Value): string. Stable identifier
     * of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     * previous_attributes.fulfillment_id.anyOf[2] (Value): null.
     * previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of the
     * request that created this resource. `null` when that request sent no key, Flint created the
     * resource, the reader isn't the caller that created it (another app install, a buyer, or the
     * merchant reading an app's or buyer's record), or the caller that created an older record is
     * unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including
     * replayed responses and webhook events, can return `null`. To find a key that a replay
     * returns as `null`, read the resource. Buyer sessions on routes shared with merchants get
     * `null`. `/v1/me` responses do not include this field.
     * previous_attributes.idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
     * request that created this resource. `null` when that request sent no key, Flint created the
     * resource, the reader isn't the caller that created it (another app install, a buyer, or the
     * merchant reading an app's or buyer's record), or the caller that created an older record is
     * unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including
     * replayed responses and webhook events, can return `null`. To find a key that a replay
     * returns as `null`, read the resource. Buyer sessions on routes shared with merchants get
     * `null`. `/v1/me` responses do not include this field.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null. previous_attributes.line_items
     * (Optional): Array of {@link FulfillmentLineItemPreviousAttributes} or null. Order lines and
     * quantities allocated to this fulfillment. previous_attributes.line_items.anyOf[1] (Value):
     * Array of {@link FulfillmentLineItemPreviousAttributes}. Order lines and quantities allocated
     * to this fulfillment. previous_attributes.line_items.anyOf[1][] (Value): {@link
     * FulfillmentLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2] (Value):
     * null. previous_attributes.local_delivery_details (Optional): {@link
     * DeliveryFulfillmentDetailsPreviousAttributes} or null. Courier, delivery window, and handoff
     * details for a local delivery fulfillment.
     * previous_attributes.local_delivery_details.anyOf[1] (Value): {@link
     * DeliveryFulfillmentDetailsPreviousAttributes}.
     * previous_attributes.local_delivery_details.anyOf[2] (Value): null.
     * previous_attributes.location_id (Optional): string or null. Merchant location responsible
     * for this fulfillment. previous_attributes.location_id.anyOf[1] (Value): string. Merchant
     * location responsible for this fulfillment. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.location_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned key-value metadata associated with the
     * fulfillment. previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary returned when the
     * order relationship is expanded. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. previous_attributes.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummaryPreviousAttributes}. previous_attributes.order.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. Order whose items this fulfillment
     * delivers. previous_attributes.order_id.anyOf[1] (Value): string. Order whose items this
     * fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * previous_attributes.order_id.anyOf[2] (Value): null. previous_attributes.order_number
     * (Optional): string or null. Human-readable number of the order this fulfillment belongs to.
     * Omitted when the order has no number. previous_attributes.order_number.anyOf[1] (Value):
     * string. Human-readable number of the order this fulfillment belongs to. Omitted when the
     * order has no number. previous_attributes.order_number.anyOf[2] (Value): null.
     * previous_attributes.outcome (Optional): {@link FulfillmentOutcomePreviousAttributes} or
     * null. Terminal outcome details. Present exactly when status is no_show.
     * previous_attributes.outcome.anyOf[1] (Value): {@link FulfillmentOutcomePreviousAttributes}.
     * previous_attributes.outcome.anyOf[2] (Value): null. previous_attributes.packages (Optional):
     * Array of {@link ExpandedPackageSummaryPreviousAttributes} or null. Packages associated with
     * this fulfillment. previous_attributes.packages.anyOf[1] (Value): Array of {@link
     * ExpandedPackageSummaryPreviousAttributes}. Packages associated with this fulfillment.
     * previous_attributes.packages.anyOf[1][] (Value): {@link
     * ExpandedPackageSummaryPreviousAttributes}. previous_attributes.packages.anyOf[2] (Value):
     * null. previous_attributes.packed_at (Optional): string or null. First time this fulfillment
     * reached packed. previous_attributes.packed_at.anyOf[1] (Value): string. First time this
     * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.packed_at.anyOf[2] (Value): null. previous_attributes.picked_at
     * (Optional): string or null. First time this fulfillment reached picked.
     * previous_attributes.picked_at.anyOf[1] (Value): string. First time this fulfillment reached
     * picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.picked_at.anyOf[2] (Value): null. previous_attributes.pickup_details
     * (Optional): {@link PickupFulfillmentDetailsPreviousAttributes} or null. Pickup window,
     * pickup mode, and handoff times for a pickup fulfillment.
     * previous_attributes.pickup_details.anyOf[1] (Value): {@link
     * PickupFulfillmentDetailsPreviousAttributes}. previous_attributes.pickup_details.anyOf[2]
     * (Value): null. previous_attributes.recipient (Optional): {@link
     * FulfillmentRecipientPreviousAttributes} or null. Omitted for a checkout session credential
     * that doesn't act for the customer the buyer verified. previous_attributes.recipient.anyOf[1]
     * (Value): {@link FulfillmentRecipientPreviousAttributes}.
     * previous_attributes.recipient.anyOf[2] (Value): null. previous_attributes.scheduled_start_at
     * (Optional): string or null. Derived start of the service schedule or pickup, local delivery,
     * or shipment window. Null when no schedule is booked, including digital fulfillments. Details
     * remain the authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first
     * ascending and last descending. Sorting by due_at compares this same value with nulls last
     * ascending and first descending. Ties use fulfillment_id in the same direction.
     * previous_attributes.scheduled_start_at.anyOf[1] (Value): string. Derived start of the
     * service schedule or pickup, local delivery, or shipment window. Null when no schedule is
     * booked, including digital fulfillments. Details remain the authoritative schedule inputs.
     * Sorting by scheduled_start_at puts nulls first ascending and last descending. Sorting by
     * due_at compares this same value with nulls last ascending and first descending. Ties use
     * fulfillment_id in the same direction. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.scheduled_start_at.anyOf[2] (Value): null.
     * previous_attributes.service_details (Optional): {@link
     * ServiceFulfillmentDetailsPreviousAttributes} or null. Schedule and completion details for a
     * service fulfillment. previous_attributes.service_details.anyOf[1] (Value): {@link
     * ServiceFulfillmentDetailsPreviousAttributes}. previous_attributes.service_details.anyOf[2]
     * (Value): null. previous_attributes.shipment_details (Optional): {@link
     * ShipmentFulfillmentDetailsPreviousAttributes} or null. Shipping schedule and ship time for a
     * shipment fulfillment. Present only on shipment fulfillments with at least one value.
     * previous_attributes.shipment_details.anyOf[1] (Value): {@link
     * ShipmentFulfillmentDetailsPreviousAttributes}. previous_attributes.shipment_details.anyOf[2]
     * (Value): null. previous_attributes.shipments (Optional): Array of {@link
     * ExpandedShipmentSummaryPreviousAttributes} or null. Shipments associated with this
     * fulfillment. previous_attributes.shipments.anyOf[1] (Value): Array of {@link
     * ExpandedShipmentSummaryPreviousAttributes}. Shipments associated with this fulfillment.
     * previous_attributes.shipments.anyOf[1][] (Value): {@link
     * ExpandedShipmentSummaryPreviousAttributes}. previous_attributes.shipments.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. Current fulfillment lifecycle
     * status. Read supported_actions for available transitions. - `pending`: Work has not started
     * and has not been accepted. Approval may be required before work can begin. - `accepted`: The
     * provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused.
     * Release the hold to restore active_hold.previous_status, or use a supported forward action.
     * - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
     * fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work
     * completed successfully. - `canceled`: The fulfillment was intentionally canceled and will
     * not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
     * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its
     * recorded service window. - `preparing`: Warehouse or provider preparation is underway. -
     * `picked`: The assigned items have been picked. - `packed`: The assigned items have been
     * packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. -
     * `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value
     * enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     * previous_attributes.status.anyOf[1] (Value): string. Current fulfillment lifecycle status.
     * Read supported_actions for available transitions. - `pending`: Work has not started and has
     * not been accepted. Approval may be required before work can begin. - `accepted`: The
     * provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused.
     * Release the hold to restore active_hold.previous_status, or use a supported forward action.
     * - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
     * fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work
     * completed successfully. - `canceled`: The fulfillment was intentionally canceled and will
     * not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
     * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its
     * recorded service window. - `preparing`: Warehouse or provider preparation is underway. -
     * `picked`: The assigned items have been picked. - `packed`: The assigned items have been
     * packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. -
     * `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value
     * enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Read-only lifecycle actions accepted now, based on the
     * fulfillment, its order payment status, holds, and shipment progress. Empty when none are
     * available. Values name the verb route with hyphens replaced by underscores. Always present
     * with merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
     * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". previous_attributes.supported_actions.anyOf[1] (Value):
     * Array of string. Read-only lifecycle actions accepted now, based on the fulfillment, its
     * order payment status, holds, and shipment progress. Empty when none are available. Values
     * name the verb route with hyphens replaced by underscores. Always present with merchant
     * credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". previous_attributes.supported_actions.anyOf[1][]
     * (Value): string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". previous_attributes.supported_actions.anyOf[2] (Value):
     * null. previous_attributes.terminal_at (Optional): string or null. When the fulfillment
     * entered a terminal state: completed, canceled, failed, or no_show. This records the state
     * transition; completed_at records completion evidence supplied for the fulfillment.
     * previous_attributes.terminal_at.anyOf[1] (Value): string. When the fulfillment entered a
     * terminal state: completed, canceled, failed, or no_show. This records the state transition;
     * completed_at records completion evidence supplied for the fulfillment. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.terminal_at.anyOf[2] (Value): null.
     * previous_attributes.type (Optional): string or null. How the items are delivered: shipment,
     * pickup, local delivery, digital delivery, or service. Value enum: "shipment", "pickup",
     * "local_delivery", "digital", "service", "handover". previous_attributes.type.anyOf[1]
     * (Value): string. How the items are delivered: shipment, pickup, local delivery, digital
     * delivery, or service. Value enum: "shipment", "pickup", "local_delivery", "digital",
     * "service", "handover". previous_attributes.type.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When the fulfillment was last
     * updated, in RFC3339 format. previous_attributes.updated_at.anyOf[1] (Value): string. When
     * the fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value): null.
     * previous_attributes.version (Optional): integer or null. Monotonic fulfillment version for
     * expected_version checks. previous_attributes.version.anyOf[1] (Value): integer. Monotonic
     * fulfillment version for expected_version checks. Format: uint64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * active_hold (Optional): {@link FulfillmentHold}. Current hold details. Present exactly
         * when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and
         * when it became active. charges (Optional): Array of {@link FulfillmentChargeLink}. Order
         * charges associated with this fulfillment. charges[] (Value): {@link
         * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
         * completed_at (Optional): string. When the fulfillment was completed. Mirrors the
         * completion time for its type: delivered_at for shipment, local delivery, and digital
         * fulfillments, picked_up_at for pickup, service_details.completed_at for service
         * fulfillments, and the order's paid_at for handovers completed at payment. Omitted until
         * a completion time is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at (Required): string. When the fulfillment was created, in RFC3339 format.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". customer_id (Optional): string.
         * Customer receiving this fulfillment, when one is set. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". delivery_choice_group_id (Optional): string or null.
         * Delivery choice group that created this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
         * delivery_execution_leg_id (Optional): string or null. Execution leg of the selected
         * delivery option that created this fulfillment. `null` when the merchant created the
         * fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M". delivery_method_id
         * (Optional): string or null. Delivery method chosen for this fulfillment. `null` when the
         * merchant created the fulfillment or checkout created it without a delivery quote. Also
         * `null` when it was created before this field was added. Always present with merchant
         * credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_id
         * (Optional): string or null. Delivery selection that created this fulfillment. `null`
         * when the merchant created the fulfillment or checkout created it without a delivery
         * quote. Always present with merchant credentials. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". device_id (Optional): string. Device associated with
         * the fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
         * digital_details (Optional): {@link DigitalFulfillmentDetails}. Delivery URL and
         * completion time for a digital fulfillment. Details of a digital fulfillment: when it was
         * delivered (`delivered_at`) and its `delivery_url`. dispatched_at (Optional): string.
         * First time this fulfillment reached dispatched. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". fulfillment_id (Required): string. Stable identifier of the
         * fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". idempotency_key (Required):
         * string or null. The Idempotency-Key of the request that created this resource. `null`
         * when that request sent no key, Flint created the resource, the reader isn't the caller
         * that created it (another app install, a buyer, or the merchant reading an app's or
         * buyer's record), or the caller that created an older record is unknown. Filter its list
         * with `idempotency_key` to find it. Recorded payloads, including replayed responses and
         * webhook events, can return `null`. To find a key that a replay returns as `null`, read
         * the resource. Buyer sessions on routes shared with merchants get `null`. `/v1/me`
         * responses do not include this field. line_items (Required): Array of {@link
         * FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment.
         * line_items[] (Value): {@link FulfillmentLineItem}. An order line item and quantity
         * included in a fulfillment, with the modifiers applied to it. local_delivery_details
         * (Optional): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
         * details for a local delivery fulfillment. Details of a local delivery fulfillment:
         * courier, timing window, instructions, and tracking. Some fields are omitted for
         * credentials that don't act for the verified customer. location_id (Optional): string.
         * Merchant location responsible for this fulfillment. Example:
         * "loc_01KEZF7C00CMHRRYA3MV996JB2". metadata (Optional): {@link MetadataMap}. Caller-owned
         * key-value metadata associated with the fulfillment. Caller-owned key-value data stored
         * on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
         * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before
         * those limits may not satisfy them. order (Optional): {@link ExpandedOrderSummary} or
         * null. Order summary returned when the order relationship is expanded. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. Order whose items this fulfillment delivers. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_number (Optional): string. Human-readable number
         * of the order this fulfillment belongs to. Omitted when the order has no number. outcome
         * (Optional): {@link FulfillmentOutcome}. Terminal outcome details. Present exactly when
         * status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show,
         * with its reason, notes, and when it occurred. packages (Optional): Array of {@link
         * ExpandedPackageSummary}. Packages associated with this fulfillment. packages[] (Value):
         * {@link ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
         * status, and supported actions, returned when the package is expanded. packed_at
         * (Optional): string. First time this fulfillment reached packed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". picked_at (Optional): string. First time this
         * fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * pickup_details (Optional): {@link PickupFulfillmentDetails}. Pickup window, pickup mode,
         * and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout
         * creates, location_name, address, and instructions name the store the buyer chose and the
         * delivery method's pickup instructions. The note the buyer left for the store is in
         * recipient.instructions. recipient (Optional): {@link FulfillmentRecipient}. Omitted for
         * a checkout session credential that doesn't act for the customer the buyer verified. The
         * recipient of a fulfillment, with name, email, phone, address, and handling instructions.
         * scheduled_start_at (Required): string or null. Derived start of the service schedule or
         * pickup, local delivery, or shipment window. Null when no schedule is booked, including
         * digital fulfillments. Details remain the authoritative schedule inputs. Sorting by
         * scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at
         * compares this same value with nulls last ascending and first descending. Ties use
         * fulfillment_id in the same direction. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_details (Optional): {@link ServiceFulfillmentDetails}.
         * Schedule and completion details for a service fulfillment. Details of a service
         * fulfillment: the scheduled start and end, timezone, completion time, and notes.
         * shipment_details (Optional): {@link ShipmentFulfillmentDetails}. Shipping schedule and
         * ship time for a shipment fulfillment. Present only on shipment fulfillments with at
         * least one value. Details of a shipment fulfillment: the shipping window, timezone, and
         * when the shipment was handed to the carrier. shipments (Optional): Array of {@link
         * ExpandedShipmentSummary}. Shipments associated with this fulfillment. shipments[]
         * (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields, including
         * direction, status, and package count, returned when the shipment is expanded. status
         * (Required): string. Current fulfillment lifecycle status. Read supported_actions for
         * available transitions. - `pending`: Work has not started and has not been accepted.
         * Approval may be required before work can begin. - `accepted`: The provider accepted the
         * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
         * restore active_hold.previous_status, or use a supported forward action. - `in_progress`:
         * Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready
         * for pickup, handoff, or completion. - `completed`: All fulfillment work completed
         * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
         * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
         * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for
         * its recorded service window. - `preparing`: Warehouse or provider preparation is
         * underway. - `picked`: The assigned items have been picked. - `packed`: The assigned
         * items have been packed. - `dispatched`: The fulfillment left its origin for delivery or
         * handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded
         * reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
         * "dispatched", "no_show". supported_actions (Optional): Array of string. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. Always present with merchant credentials. [] enum:
         * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
         * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
         * "schedule", "start". supported_actions[] (Value): string. Value enum: "accept",
         * "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed",
         * "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start".
         * terminal_at (Optional): string. When the fulfillment entered a terminal state:
         * completed, canceled, failed, or no_show. This records the state transition; completed_at
         * records completion evidence supplied for the fulfillment. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". type (Required): string. How the items are delivered: shipment,
         * pickup, local delivery, digital delivery, or service. Value enum: "shipment", "pickup",
         * "local_delivery", "digital", "service", "handover". updated_at (Required): string. When
         * the fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Monotonic fulfillment version for
         * expected_version checks. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current hold details. Present exactly when status is on_hold. A hold on a
             * fulfillment, with its reason, who placed it, and when it became active.
             */
            "active_hold"?: FulfillmentHold;
            /**
             * Order charges associated with this fulfillment. [] (Value): {@link
             * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
             */
            "charges"?: Array<FulfillmentChargeLink>;
            /**
             * When the fulfillment was completed. Mirrors the completion time for its type:
             * delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at
             * for pickup, service_details.completed_at for service fulfillments, and the order's
             * paid_at for handovers completed at payment. Omitted until a completion time is
             * recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "completed_at"?: string;
            /**
             * When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Customer receiving this fulfillment, when one is set. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Delivery choice group that created this fulfillment. `null` when the merchant
             * created the fulfillment or checkout created it without a delivery quote. Always
             * present with merchant credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
             */
            "delivery_choice_group_id"?: string | null;
            /**
             * Execution leg of the selected delivery option that created this fulfillment. `null`
             * when the merchant created the fulfillment or checkout created it without a delivery
             * quote. Always present with merchant credentials. Example:
             * "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
             */
            "delivery_execution_leg_id"?: string | null;
            /**
             * Delivery method chosen for this fulfillment. `null` when the merchant created the
             * fulfillment or checkout created it without a delivery quote. Also `null` when it was
             * created before this field was added. Always present with merchant credentials.
             * Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_id"?: string | null;
            /**
             * Delivery selection that created this fulfillment. `null` when the merchant created
             * the fulfillment or checkout created it without a delivery quote. Always present with
             * merchant credentials. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
             */
            "delivery_selection_id"?: string | null;
            /**
             * Device associated with the fulfillment, when one is recorded. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6".
             */
            "device_id"?: string;
            /**
             * Delivery URL and completion time for a digital fulfillment. Details of a digital
             * fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`.
             */
            "digital_details"?: DigitalFulfillmentDetails;
            /**
             * First time this fulfillment reached dispatched. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "dispatched_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Stable identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
            "fulfillment_id": string;
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource. Buyer sessions on routes shared with merchants get
             * `null`. `/v1/me` responses do not include this field.
             */
            "idempotency_key": string | null;
            /**
             * Order lines and quantities allocated to this fulfillment. [] (Value): {@link
             * FulfillmentLineItem}. An order line item and quantity included in a fulfillment,
             * with the modifiers applied to it.
             */
            "line_items": Array<FulfillmentLineItem>;
            /**
             * Courier, delivery window, and handoff details for a local delivery fulfillment.
             * Details of a local delivery fulfillment: courier, timing window, instructions, and
             * tracking. Some fields are omitted for credentials that don't act for the verified
             * customer.
             */
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            /**
             * Merchant location responsible for this fulfillment. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id"?: string;
            /**
             * Caller-owned key-value metadata associated with the fulfillment. Caller-owned
             * key-value data stored on a resource. Keys starting with flint_ are reserved for
             * Flint and are not returned. Writes follow the limits on MetadataInput and
             * MetadataPatchInput; maps written before those limits may not satisfy them.
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
            /**
             * Order whose items this fulfillment delivers. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * Human-readable number of the order this fulfillment belongs to. Omitted when the
             * order has no number.
             */
            "order_number"?: string;
            /**
             * Terminal outcome details. Present exactly when status is no_show. The terminal
             * outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and
             * when it occurred.
             */
            "outcome"?: FulfillmentOutcome;
            /**
             * Packages associated with this fulfillment. [] (Value): {@link
             * ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
             * status, and supported actions, returned when the package is expanded.
             */
            "packages"?: Array<ExpandedPackageSummary>;
            /**
             * First time this fulfillment reached packed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "packed_at"?: string;
            /**
             * First time this fulfillment reached picked. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "picked_at"?: string;
            /**
             * Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup
             * details. For a pickup that checkout creates, location_name, address, and
             * instructions name the store the buyer chose and the delivery method's pickup
             * instructions. The note the buyer left for the store is in recipient.instructions.
             */
            "pickup_details"?: PickupFulfillmentDetails;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The recipient of a fulfillment, with name, email, phone, address,
             * and handling instructions.
             */
            "recipient"?: FulfillmentRecipient;
            /**
             * Derived start of the service schedule or pickup, local delivery, or shipment window.
             * Null when no schedule is booked, including digital fulfillments. Details remain the
             * authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first
             * ascending and last descending. Sorting by due_at compares this same value with nulls
             * last ascending and first descending. Ties use fulfillment_id in the same direction.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_start_at": string | null;
            /**
             * Schedule and completion details for a service fulfillment. Details of a service
             * fulfillment: the scheduled start and end, timezone, completion time, and notes.
             */
            "service_details"?: ServiceFulfillmentDetails;
            /**
             * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
             * fulfillments with at least one value. Details of a shipment fulfillment: the
             * shipping window, timezone, and when the shipment was handed to the carrier.
             */
            "shipment_details"?: ShipmentFulfillmentDetails;
            /**
             * Shipments associated with this fulfillment. [] (Value): {@link
             * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status,
             * and package count, returned when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Current fulfillment lifecycle status. Read supported_actions for available
             * transitions. - `pending`: Work has not started and has not been accepted. Approval
             * may be required before work can begin. - `accepted`: The provider accepted the
             * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
             * restore active_hold.previous_status, or use a supported forward action. -
             * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
             * fulfillment is ready for pickup, handoff, or completion. - `completed`: All
             * fulfillment work completed successfully. - `canceled`: The fulfillment was
             * intentionally canceled and will not continue. - `failed`: The fulfillment could not
             * be completed. Resolve the recorded reason before creating replacement work. -
             * `scheduled`: The fulfillment is scheduled for its recorded service window. -
             * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
             * items have been picked. - `packed`: The assigned items have been packed. -
             * `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`:
             * A service appointment was missed. Read outcome for the recorded reason. Value enum:
             * "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
             * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
             */
            "status": "pending"
                | "accepted"
                | "on_hold"
                | "in_progress"
                | "ready"
                | "completed"
                | "canceled"
                | "failed"
                | "scheduled"
                | "preparing"
                | "picked"
                | "packed"
                | "dispatched"
                | "no_show"
                | (string & {});
            /**
             * Read-only lifecycle actions accepted now, based on the fulfillment, its order
             * payment status, holds, and shipment progress. Empty when none are available. Values
             * name the verb route with hyphens replaced by underscores. Always present with
             * merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start". [] (Value): string. Value enum:
             * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
             * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
             * "schedule", "start".
             */
            "supported_actions"?: Array<"accept"
                | "cancel"
                | "complete"
                | "dispatch"
                | "fail"
                | "hold"
                | "mark_no_show"
                | "mark_packed"
                | "mark_picked"
                | "mark_preparing"
                | "mark_ready"
                | "release_hold"
                | "schedule"
                | "start"
                | (string & {})>;
            /**
             * When the fulfillment entered a terminal state: completed, canceled, failed, or
             * no_show. This records the state transition; completed_at records completion evidence
             * supplied for the fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "terminal_at"?: string;
            /**
             * How the items are delivered: shipment, pickup, local delivery, digital delivery, or
             * service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service",
             * "handover".
             */
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {});
            /**
             * When the fulfillment was last updated, in RFC3339 format. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum:
             * 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. active_hold (Optional): {@link
         * FulfillmentHoldPreviousAttributes} or null. Current hold details. Present exactly when
         * status is on_hold. active_hold.anyOf[1] (Value): {@link
         * FulfillmentHoldPreviousAttributes}. active_hold.anyOf[2] (Value): null. charges
         * (Optional): Array of {@link FulfillmentChargeLinkPreviousAttributes} or null. Order
         * charges associated with this fulfillment. charges.anyOf[1] (Value): Array of {@link
         * FulfillmentChargeLinkPreviousAttributes}. Order charges associated with this
         * fulfillment. charges.anyOf[1][] (Value): {@link
         * FulfillmentChargeLinkPreviousAttributes}. charges.anyOf[2] (Value): null. completed_at
         * (Optional): string or null. When the fulfillment was completed. Mirrors the completion
         * time for its type: delivered_at for shipment, local delivery, and digital fulfillments,
         * picked_up_at for pickup, service_details.completed_at for service fulfillments, and the
         * order's paid_at for handovers completed at payment. Omitted until a completion time is
         * recorded. completed_at.anyOf[1] (Value): string. When the fulfillment was completed.
         * Mirrors the completion time for its type: delivered_at for shipment, local delivery, and
         * digital fulfillments, picked_up_at for pickup, service_details.completed_at for service
         * fulfillments, and the order's paid_at for handovers completed at payment. Omitted until
         * a completion time is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * completed_at.anyOf[2] (Value): null. created_at (Optional): string or null. When the
         * fulfillment was created, in RFC3339 format. created_at.anyOf[1] (Value): string. When
         * the fulfillment was created, in RFC3339 format. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. customer_id (Optional):
         * string or null. Customer receiving this fulfillment, when one is set.
         * customer_id.anyOf[1] (Value): string. Customer receiving this fulfillment, when one is
         * set. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null.
         * delivery_choice_group_id (Optional): string or null. Delivery choice group that created
         * this fulfillment. `null` when the merchant created the fulfillment or checkout created
         * it without a delivery quote. Always present with merchant credentials.
         * delivery_choice_group_id.anyOf[1] (Value): string. Delivery choice group that created
         * this fulfillment. `null` when the merchant created the fulfillment or checkout created
         * it without a delivery quote. Always present with merchant credentials. Example:
         * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". delivery_choice_group_id.anyOf[2] (Value): null.
         * delivery_execution_leg_id (Optional): string or null. Execution leg of the selected
         * delivery option that created this fulfillment. `null` when the merchant created the
         * fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. delivery_execution_leg_id.anyOf[1] (Value): string. Execution leg
         * of the selected delivery option that created this fulfillment. `null` when the merchant
         * created the fulfillment or checkout created it without a delivery quote. Always present
         * with merchant credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
         * delivery_execution_leg_id.anyOf[2] (Value): null. delivery_method_id (Optional): string
         * or null. Delivery method chosen for this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Also `null` when it was
         * created before this field was added. Always present with merchant credentials.
         * delivery_method_id.anyOf[1] (Value): string. Delivery method chosen for this
         * fulfillment. `null` when the merchant created the fulfillment or checkout created it
         * without a delivery quote. Also `null` when it was created before this field was added.
         * Always present with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
         * delivery_method_id.anyOf[2] (Value): null. delivery_selection_id (Optional): string or
         * null. Delivery selection that created this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. delivery_selection_id.anyOf[1] (Value): string. Delivery selection
         * that created this fulfillment. `null` when the merchant created the fulfillment or
         * checkout created it without a delivery quote. Always present with merchant credentials.
         * Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". delivery_selection_id.anyOf[2] (Value):
         * null. device_id (Optional): string or null. Device associated with the fulfillment, when
         * one is recorded. device_id.anyOf[1] (Value): string. Device associated with the
         * fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
         * device_id.anyOf[2] (Value): null. digital_details (Optional): {@link
         * DigitalFulfillmentDetailsPreviousAttributes} or null. Delivery URL and completion time
         * for a digital fulfillment. digital_details.anyOf[1] (Value): {@link
         * DigitalFulfillmentDetailsPreviousAttributes}. digital_details.anyOf[2] (Value): null.
         * dispatched_at (Optional): string or null. First time this fulfillment reached
         * dispatched. dispatched_at.anyOf[1] (Value): string. First time this fulfillment reached
         * dispatched. Format: date-time. Example: "2026-08-02T16:00:00Z". dispatched_at.anyOf[2]
         * (Value): null. external_reference_id (Optional): string or null. Caller-owned identifier
         * for this resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. fulfillment_id
         * (Optional): string or null. Stable identifier of the fulfillment.
         * fulfillment_id.anyOf[1] (Value): string. Stable identifier of the fulfillment. Example:
         * "ful_01KEZF7C00F24WVSTTWR1FQX5T". fulfillment_id.anyOf[2] (Value): null. idempotency_key
         * (Optional): string or null. The Idempotency-Key of the request that created this
         * resource. `null` when that request sent no key, Flint created the resource, the reader
         * isn't the caller that created it (another app install, a buyer, or the merchant reading
         * an app's or buyer's record), or the caller that created an older record is unknown.
         * Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed
         * responses and webhook events, can return `null`. To find a key that a replay returns as
         * `null`, read the resource. Buyer sessions on routes shared with merchants get `null`.
         * `/v1/me` responses do not include this field. idempotency_key.anyOf[1] (Value): string.
         * The Idempotency-Key of the request that created this resource. `null` when that request
         * sent no key, Flint created the resource, the reader isn't the caller that created it
         * (another app install, a buyer, or the merchant reading an app's or buyer's record), or
         * the caller that created an older record is unknown. Filter its list with
         * `idempotency_key` to find it. Recorded payloads, including replayed responses and
         * webhook events, can return `null`. To find a key that a replay returns as `null`, read
         * the resource. Buyer sessions on routes shared with merchants get `null`. `/v1/me`
         * responses do not include this field. idempotency_key.anyOf[2] (Value): null. line_items
         * (Optional): Array of {@link FulfillmentLineItemPreviousAttributes} or null. Order lines
         * and quantities allocated to this fulfillment. line_items.anyOf[1] (Value): Array of
         * {@link FulfillmentLineItemPreviousAttributes}. Order lines and quantities allocated to
         * this fulfillment. line_items.anyOf[1][] (Value): {@link
         * FulfillmentLineItemPreviousAttributes}. line_items.anyOf[2] (Value): null.
         * local_delivery_details (Optional): {@link DeliveryFulfillmentDetailsPreviousAttributes}
         * or null. Courier, delivery window, and handoff details for a local delivery fulfillment.
         * local_delivery_details.anyOf[1] (Value): {@link
         * DeliveryFulfillmentDetailsPreviousAttributes}. local_delivery_details.anyOf[2] (Value):
         * null. location_id (Optional): string or null. Merchant location responsible for this
         * fulfillment. location_id.anyOf[1] (Value): string. Merchant location responsible for
         * this fulfillment. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". location_id.anyOf[2]
         * (Value): null. metadata (Optional): {@link MetadataMap} or null. Caller-owned key-value
         * metadata associated with the fulfillment. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. order (Optional): {@link
         * ExpandedOrderSummaryPreviousAttributes} or null. Order summary returned when the order
         * relationship is expanded. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. Order whose items this fulfillment delivers.
         * order_id.anyOf[1] (Value): string. Order whose items this fulfillment delivers. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. order_number
         * (Optional): string or null. Human-readable number of the order this fulfillment belongs
         * to. Omitted when the order has no number. order_number.anyOf[1] (Value): string.
         * Human-readable number of the order this fulfillment belongs to. Omitted when the order
         * has no number. order_number.anyOf[2] (Value): null. outcome (Optional): {@link
         * FulfillmentOutcomePreviousAttributes} or null. Terminal outcome details. Present exactly
         * when status is no_show. outcome.anyOf[1] (Value): {@link
         * FulfillmentOutcomePreviousAttributes}. outcome.anyOf[2] (Value): null. packages
         * (Optional): Array of {@link ExpandedPackageSummaryPreviousAttributes} or null. Packages
         * associated with this fulfillment. packages.anyOf[1] (Value): Array of {@link
         * ExpandedPackageSummaryPreviousAttributes}. Packages associated with this fulfillment.
         * packages.anyOf[1][] (Value): {@link ExpandedPackageSummaryPreviousAttributes}.
         * packages.anyOf[2] (Value): null. packed_at (Optional): string or null. First time this
         * fulfillment reached packed. packed_at.anyOf[1] (Value): string. First time this
         * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * packed_at.anyOf[2] (Value): null. picked_at (Optional): string or null. First time this
         * fulfillment reached picked. picked_at.anyOf[1] (Value): string. First time this
         * fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * picked_at.anyOf[2] (Value): null. pickup_details (Optional): {@link
         * PickupFulfillmentDetailsPreviousAttributes} or null. Pickup window, pickup mode, and
         * handoff times for a pickup fulfillment. pickup_details.anyOf[1] (Value): {@link
         * PickupFulfillmentDetailsPreviousAttributes}. pickup_details.anyOf[2] (Value): null.
         * recipient (Optional): {@link FulfillmentRecipientPreviousAttributes} or null. Omitted
         * for a checkout session credential that doesn't act for the customer the buyer verified.
         * recipient.anyOf[1] (Value): {@link FulfillmentRecipientPreviousAttributes}.
         * recipient.anyOf[2] (Value): null. scheduled_start_at (Optional): string or null. Derived
         * start of the service schedule or pickup, local delivery, or shipment window. Null when
         * no schedule is booked, including digital fulfillments. Details remain the authoritative
         * schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last
         * descending. Sorting by due_at compares this same value with nulls last ascending and
         * first descending. Ties use fulfillment_id in the same direction.
         * scheduled_start_at.anyOf[1] (Value): string. Derived start of the service schedule or
         * pickup, local delivery, or shipment window. Null when no schedule is booked, including
         * digital fulfillments. Details remain the authoritative schedule inputs. Sorting by
         * scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at
         * compares this same value with nulls last ascending and first descending. Ties use
         * fulfillment_id in the same direction. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". scheduled_start_at.anyOf[2] (Value): null. service_details
         * (Optional): {@link ServiceFulfillmentDetailsPreviousAttributes} or null. Schedule and
         * completion details for a service fulfillment. service_details.anyOf[1] (Value): {@link
         * ServiceFulfillmentDetailsPreviousAttributes}. service_details.anyOf[2] (Value): null.
         * shipment_details (Optional): {@link ShipmentFulfillmentDetailsPreviousAttributes} or
         * null. Shipping schedule and ship time for a shipment fulfillment. Present only on
         * shipment fulfillments with at least one value. shipment_details.anyOf[1] (Value): {@link
         * ShipmentFulfillmentDetailsPreviousAttributes}. shipment_details.anyOf[2] (Value): null.
         * shipments (Optional): Array of {@link ExpandedShipmentSummaryPreviousAttributes} or
         * null. Shipments associated with this fulfillment. shipments.anyOf[1] (Value): Array of
         * {@link ExpandedShipmentSummaryPreviousAttributes}. Shipments associated with this
         * fulfillment. shipments.anyOf[1][] (Value): {@link
         * ExpandedShipmentSummaryPreviousAttributes}. shipments.anyOf[2] (Value): null. status
         * (Optional): string or null. Current fulfillment lifecycle status. Read supported_actions
         * for available transitions. - `pending`: Work has not started and has not been accepted.
         * Approval may be required before work can begin. - `accepted`: The provider accepted the
         * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
         * restore active_hold.previous_status, or use a supported forward action. - `in_progress`:
         * Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready
         * for pickup, handoff, or completion. - `completed`: All fulfillment work completed
         * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
         * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
         * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for
         * its recorded service window. - `preparing`: Warehouse or provider preparation is
         * underway. - `picked`: The assigned items have been picked. - `packed`: The assigned
         * items have been packed. - `dispatched`: The fulfillment left its origin for delivery or
         * handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded
         * reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
         * "dispatched", "no_show". status.anyOf[1] (Value): string. Current fulfillment lifecycle
         * status. Read supported_actions for available transitions. - `pending`: Work has not
         * started and has not been accepted. Approval may be required before work can begin. -
         * `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`:
         * Work is paused. Release the hold to restore active_hold.previous_status, or use a
         * supported forward action. - `in_progress`: Work has started and is not yet ready or
         * complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
         * `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment
         * was intentionally canceled and will not continue. - `failed`: The fulfillment could not
         * be completed. Resolve the recorded reason before creating replacement work. -
         * `scheduled`: The fulfillment is scheduled for its recorded service window. -
         * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
         * items have been picked. - `packed`: The assigned items have been packed. - `dispatched`:
         * The fulfillment left its origin for delivery or handoff. - `no_show`: A service
         * appointment was missed. Read outcome for the recorded reason. Value enum: "pending",
         * "accepted", "on_hold", "in_progress", "ready", "completed", "canceled", "failed",
         * "scheduled", "preparing", "picked", "packed", "dispatched", "no_show". status.anyOf[2]
         * (Value): null. supported_actions (Optional): Array of string or null. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. Always present with merchant credentials. [] enum:
         * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
         * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
         * "schedule", "start". supported_actions.anyOf[1] (Value): Array of string. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. Always present with merchant credentials. [] enum:
         * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
         * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
         * "schedule", "start". supported_actions.anyOf[1][] (Value): string. Value enum: "accept",
         * "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed",
         * "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start".
         * supported_actions.anyOf[2] (Value): null. terminal_at (Optional): string or null. When
         * the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This
         * records the state transition; completed_at records completion evidence supplied for the
         * fulfillment. terminal_at.anyOf[1] (Value): string. When the fulfillment entered a
         * terminal state: completed, canceled, failed, or no_show. This records the state
         * transition; completed_at records completion evidence supplied for the fulfillment.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". terminal_at.anyOf[2] (Value): null.
         * type (Optional): string or null. How the items are delivered: shipment, pickup, local
         * delivery, digital delivery, or service. Value enum: "shipment", "pickup",
         * "local_delivery", "digital", "service", "handover". type.anyOf[1] (Value): string. How
         * the items are delivered: shipment, pickup, local delivery, digital delivery, or service.
         * Value enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover".
         * type.anyOf[2] (Value): null. updated_at (Optional): string or null. When the fulfillment
         * was last updated, in RFC3339 format. updated_at.anyOf[1] (Value): string. When the
         * fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Monotonic fulfillment version for expected_version checks. version.anyOf[1]
         * (Value): integer. Monotonic fulfillment version for expected_version checks. Format:
         * uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Current hold details. Present exactly when status is on_hold. anyOf[1] (Value):
             * {@link FulfillmentHoldPreviousAttributes}. anyOf[2] (Value): null.
             */
            "active_hold"?: ((FulfillmentHoldPreviousAttributes) | (null));
            /**
             * Order charges associated with this fulfillment. anyOf[1] (Value): Array of {@link
             * FulfillmentChargeLinkPreviousAttributes}. Order charges associated with this
             * fulfillment. anyOf[1][] (Value): {@link FulfillmentChargeLinkPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "charges"?: ((Array<FulfillmentChargeLinkPreviousAttributes>) | (null));
            /**
             * When the fulfillment was completed. Mirrors the completion time for its type:
             * delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at
             * for pickup, service_details.completed_at for service fulfillments, and the order's
             * paid_at for handovers completed at payment. Omitted until a completion time is
             * recorded. anyOf[1] (Value): string. When the fulfillment was completed. Mirrors the
             * completion time for its type: delivered_at for shipment, local delivery, and digital
             * fulfillments, picked_up_at for pickup, service_details.completed_at for service
             * fulfillments, and the order's paid_at for handovers completed at payment. Omitted
             * until a completion time is recorded. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "completed_at"?: ((string) | (null));
            /**
             * When the fulfillment was created, in RFC3339 format. anyOf[1] (Value): string. When
             * the fulfillment was created, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Customer receiving this fulfillment, when one is set. anyOf[1] (Value): string.
             * Customer receiving this fulfillment, when one is set. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * Delivery choice group that created this fulfillment. `null` when the merchant
             * created the fulfillment or checkout created it without a delivery quote. Always
             * present with merchant credentials. anyOf[1] (Value): string. Delivery choice group
             * that created this fulfillment. `null` when the merchant created the fulfillment or
             * checkout created it without a delivery quote. Always present with merchant
             * credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". anyOf[2] (Value): null.
             */
            "delivery_choice_group_id"?: ((string) | (null));
            /**
             * Execution leg of the selected delivery option that created this fulfillment. `null`
             * when the merchant created the fulfillment or checkout created it without a delivery
             * quote. Always present with merchant credentials. anyOf[1] (Value): string. Execution
             * leg of the selected delivery option that created this fulfillment. `null` when the
             * merchant created the fulfillment or checkout created it without a delivery quote.
             * Always present with merchant credentials. Example:
             * "dleg_01KEZF7C00VB59BKTRC8W4KR4M". anyOf[2] (Value): null.
             */
            "delivery_execution_leg_id"?: ((string) | (null));
            /**
             * Delivery method chosen for this fulfillment. `null` when the merchant created the
             * fulfillment or checkout created it without a delivery quote. Also `null` when it was
             * created before this field was added. Always present with merchant credentials.
             * anyOf[1] (Value): string. Delivery method chosen for this fulfillment. `null` when
             * the merchant created the fulfillment or checkout created it without a delivery
             * quote. Also `null` when it was created before this field was added. Always present
             * with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2]
             * (Value): null.
             */
            "delivery_method_id"?: ((string) | (null));
            /**
             * Delivery selection that created this fulfillment. `null` when the merchant created
             * the fulfillment or checkout created it without a delivery quote. Always present with
             * merchant credentials. anyOf[1] (Value): string. Delivery selection that created this
             * fulfillment. `null` when the merchant created the fulfillment or checkout created it
             * without a delivery quote. Always present with merchant credentials. Example:
             * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[2] (Value): null.
             */
            "delivery_selection_id"?: ((string) | (null));
            /**
             * Device associated with the fulfillment, when one is recorded. anyOf[1] (Value):
             * string. Device associated with the fulfillment, when one is recorded. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6". anyOf[2] (Value): null.
             */
            "device_id"?: ((string) | (null));
            /**
             * Delivery URL and completion time for a digital fulfillment. anyOf[1] (Value): {@link
             * DigitalFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "digital_details"?: ((DigitalFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * First time this fulfillment reached dispatched. anyOf[1] (Value): string. First time
             * this fulfillment reached dispatched. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "dispatched_at"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Stable identifier of the fulfillment. anyOf[1] (Value): string. Stable identifier of
             * the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". anyOf[2] (Value): null.
             */
            "fulfillment_id"?: ((string) | (null));
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource. Buyer sessions on routes shared with merchants get
             * `null`. `/v1/me` responses do not include this field. anyOf[1] (Value): string. The
             * Idempotency-Key of the request that created this resource. `null` when that request
             * sent no key, Flint created the resource, the reader isn't the caller that created it
             * (another app install, a buyer, or the merchant reading an app's or buyer's record),
             * or the caller that created an older record is unknown. Filter its list with
             * `idempotency_key` to find it. Recorded payloads, including replayed responses and
             * webhook events, can return `null`. To find a key that a replay returns as `null`,
             * read the resource. Buyer sessions on routes shared with merchants get `null`.
             * `/v1/me` responses do not include this field. anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Order lines and quantities allocated to this fulfillment. anyOf[1] (Value): Array of
             * {@link FulfillmentLineItemPreviousAttributes}. Order lines and quantities allocated
             * to this fulfillment. anyOf[1][] (Value): {@link
             * FulfillmentLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<FulfillmentLineItemPreviousAttributes>) | (null));
            /**
             * Courier, delivery window, and handoff details for a local delivery fulfillment.
             * anyOf[1] (Value): {@link DeliveryFulfillmentDetailsPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "local_delivery_details"?: ((DeliveryFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Merchant location responsible for this fulfillment. anyOf[1] (Value): string.
             * Merchant location responsible for this fulfillment. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
             */
            "location_id"?: ((string) | (null));
            /**
             * Caller-owned key-value metadata associated with the fulfillment. anyOf[1] (Value):
             * {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * Order whose items this fulfillment delivers. anyOf[1] (Value): string. Order whose
             * items this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2]
             * (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * Human-readable number of the order this fulfillment belongs to. Omitted when the
             * order has no number. anyOf[1] (Value): string. Human-readable number of the order
             * this fulfillment belongs to. Omitted when the order has no number. anyOf[2] (Value):
             * null.
             */
            "order_number"?: ((string) | (null));
            /**
             * Terminal outcome details. Present exactly when status is no_show. anyOf[1] (Value):
             * {@link FulfillmentOutcomePreviousAttributes}. anyOf[2] (Value): null.
             */
            "outcome"?: ((FulfillmentOutcomePreviousAttributes) | (null));
            /**
             * Packages associated with this fulfillment. anyOf[1] (Value): Array of {@link
             * ExpandedPackageSummaryPreviousAttributes}. Packages associated with this
             * fulfillment. anyOf[1][] (Value): {@link ExpandedPackageSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "packages"?: ((Array<ExpandedPackageSummaryPreviousAttributes>) | (null));
            /**
             * First time this fulfillment reached packed. anyOf[1] (Value): string. First time
             * this fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "packed_at"?: ((string) | (null));
            /**
             * First time this fulfillment reached picked. anyOf[1] (Value): string. First time
             * this fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "picked_at"?: ((string) | (null));
            /**
             * Pickup window, pickup mode, and handoff times for a pickup fulfillment. anyOf[1]
             * (Value): {@link PickupFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "pickup_details"?: ((PickupFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. anyOf[1] (Value): {@link FulfillmentRecipientPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "recipient"?: ((FulfillmentRecipientPreviousAttributes) | (null));
            /**
             * Derived start of the service schedule or pickup, local delivery, or shipment window.
             * Null when no schedule is booked, including digital fulfillments. Details remain the
             * authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first
             * ascending and last descending. Sorting by due_at compares this same value with nulls
             * last ascending and first descending. Ties use fulfillment_id in the same direction.
             * anyOf[1] (Value): string. Derived start of the service schedule or pickup, local
             * delivery, or shipment window. Null when no schedule is booked, including digital
             * fulfillments. Details remain the authoritative schedule inputs. Sorting by
             * scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at
             * compares this same value with nulls last ascending and first descending. Ties use
             * fulfillment_id in the same direction. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "scheduled_start_at"?: ((string) | (null));
            /**
             * Schedule and completion details for a service fulfillment. anyOf[1] (Value): {@link
             * ServiceFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "service_details"?: ((ServiceFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
             * fulfillments with at least one value. anyOf[1] (Value): {@link
             * ShipmentFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "shipment_details"?: ((ShipmentFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Shipments associated with this fulfillment. anyOf[1] (Value): Array of {@link
             * ExpandedShipmentSummaryPreviousAttributes}. Shipments associated with this
             * fulfillment. anyOf[1][] (Value): {@link ExpandedShipmentSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "shipments"?: ((Array<ExpandedShipmentSummaryPreviousAttributes>) | (null));
            /**
             * Current fulfillment lifecycle status. Read supported_actions for available
             * transitions. - `pending`: Work has not started and has not been accepted. Approval
             * may be required before work can begin. - `accepted`: The provider accepted the
             * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
             * restore active_hold.previous_status, or use a supported forward action. -
             * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
             * fulfillment is ready for pickup, handoff, or completion. - `completed`: All
             * fulfillment work completed successfully. - `canceled`: The fulfillment was
             * intentionally canceled and will not continue. - `failed`: The fulfillment could not
             * be completed. Resolve the recorded reason before creating replacement work. -
             * `scheduled`: The fulfillment is scheduled for its recorded service window. -
             * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
             * items have been picked. - `packed`: The assigned items have been packed. -
             * `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`:
             * A service appointment was missed. Read outcome for the recorded reason. Value enum:
             * "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
             * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
             * anyOf[1] (Value): string. Current fulfillment lifecycle status. Read
             * supported_actions for available transitions. - `pending`: Work has not started and
             * has not been accepted. Approval may be required before work can begin. - `accepted`:
             * The provider accepted the fulfillment; work has not started. - `on_hold`: Work is
             * paused. Release the hold to restore active_hold.previous_status, or use a supported
             * forward action. - `in_progress`: Work has started and is not yet ready or complete.
             * - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
             * `completed`: All fulfillment work completed successfully. - `canceled`: The
             * fulfillment was intentionally canceled and will not continue. - `failed`: The
             * fulfillment could not be completed. Resolve the recorded reason before creating
             * replacement work. - `scheduled`: The fulfillment is scheduled for its recorded
             * service window. - `preparing`: Warehouse or provider preparation is underway. -
             * `picked`: The assigned items have been picked. - `packed`: The assigned items have
             * been packed. - `dispatched`: The fulfillment left its origin for delivery or
             * handoff. - `no_show`: A service appointment was missed. Read outcome for the
             * recorded reason. Value enum: "pending", "accepted", "on_hold", "in_progress",
             * "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked",
             * "packed", "dispatched", "no_show". anyOf[2] (Value): null.
             */
            "status"?: (("pending"
                | "accepted"
                | "on_hold"
                | "in_progress"
                | "ready"
                | "completed"
                | "canceled"
                | "failed"
                | "scheduled"
                | "preparing"
                | "picked"
                | "packed"
                | "dispatched"
                | "no_show"
                | (string & {}))
                | (null));
            /**
             * Read-only lifecycle actions accepted now, based on the fulfillment, its order
             * payment status, holds, and shipment progress. Empty when none are available. Values
             * name the verb route with hyphens replaced by underscores. Always present with
             * merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start". anyOf[1] (Value): Array of
             * string. Read-only lifecycle actions accepted now, based on the fulfillment, its
             * order payment status, holds, and shipment progress. Empty when none are available.
             * Values name the verb route with hyphens replaced by underscores. Always present with
             * merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start". anyOf[1][] (Value): string. Value
             * enum: "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
             * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
             * "schedule", "start". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"accept"
                | "cancel"
                | "complete"
                | "dispatch"
                | "fail"
                | "hold"
                | "mark_no_show"
                | "mark_packed"
                | "mark_picked"
                | "mark_preparing"
                | "mark_ready"
                | "release_hold"
                | "schedule"
                | "start"
                | (string & {})>)
                | (null));
            /**
             * When the fulfillment entered a terminal state: completed, canceled, failed, or
             * no_show. This records the state transition; completed_at records completion evidence
             * supplied for the fulfillment. anyOf[1] (Value): string. When the fulfillment entered
             * a terminal state: completed, canceled, failed, or no_show. This records the state
             * transition; completed_at records completion evidence supplied for the fulfillment.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "terminal_at"?: ((string) | (null));
            /**
             * How the items are delivered: shipment, pickup, local delivery, digital delivery, or
             * service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service",
             * "handover". anyOf[1] (Value): string. How the items are delivered: shipment, pickup,
             * local delivery, digital delivery, or service. Value enum: "shipment", "pickup",
             * "local_delivery", "digital", "service", "handover". anyOf[2] (Value): null.
             */
            "type"?: (("shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {}))
                | (null));
            /**
             * When the fulfillment was last updated, in RFC3339 format. anyOf[1] (Value): string.
             * When the fulfillment was last updated, in RFC3339 format. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Monotonic fulfillment version for expected_version checks. anyOf[1] (Value):
             * integer. Monotonic fulfillment version for expected_version checks. Format: uint64.
             * minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "fulfillment.updated". */
    "event_type"?: "fulfillment.updated";
});
export type FulfillmentsAcceptParams = (InputValue<AcceptFulfillmentRequestInput>
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
export type FulfillmentsCancelParams = (InputValue<CancelFulfillmentRequestInput>
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
export type FulfillmentsCompleteParams = (InputValue<CompleteFulfillmentRequestInput>
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
export type FulfillmentsCreateParams = (CreateFulfillmentRequestInput)
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
export type FulfillmentsDispatchParams = (InputValue<DispatchFulfillmentRequestInput>
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
export type FulfillmentsFailParams = (InputValue<FailFulfillmentRequestInput>)
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
export type FulfillmentsGetParams = {
    /**
     * Include related objects in the response. Supported expansions: order, packages, shipments.
     * Expansion requires commerce.orders.read. Limits: at most 10 unique expand paths per request.
     * To-many expansions are capped at 20 related objects per path. [] enum: "order", "packages",
     * "shipments". Value enum: "order", "packages", "shipments". anyOf[1] (Value): Array of
     * string. [] enum: "order", "packages", "shipments". anyOf[1][] (Value): string. Value enum:
     * "order", "packages", "shipments". anyOf[2] (Value): string. Value enum: "order", "packages",
     * "shipments".
     */
    "expand"?: InputValue<("order" | "packages" | "shipments") | readonly ("order" | "packages" | "shipments")[]>;
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
export type FulfillmentsHoldParams = (InputValue<HoldFulfillmentRequestInput>)
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
export type FulfillmentsListParams = {
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
     * Include related objects in the response. Supported expansions: order. Expansion requires
     * commerce.orders.read. Limits: at most 10 unique expand paths per request. [] enum: "order".
     * Value enum: "order". anyOf[1] (Value): Array of string. [] enum: "order". anyOf[1][]
     * (Value): string. Value enum: "order". anyOf[2] (Value): string. Value enum: "order".
     */
    "expand"?: InputValue<("order") | readonly ("order")[]>;
    /**
     * Filter by order ID. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: InputValue<string>;
    /**
     * Exact match on customer_id. pattern: ^cus_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns only resources created in your caller namespace, plus
     * resources created before caller scoping under the original key. Returns current authorized
     * resources, not the recorded response. A pending resource does not prove that the operation
     * succeeded, and an empty list does not prove that it had no effect. A match can show
     * `idempotency_key: null` when that request sent no key, Flint created the resource, the
     * reader isn't the caller that created it (another app install, a buyer, or the merchant
     * reading an app's or buyer's record), or the caller that created an older record is unknown.
     * minLength: 1. maxLength: 255. pattern: ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Search across fulfillment_id and external_reference_id. Also matches an exact order number.
     * Text fields match any part of the value, and %, _ and \ are ordinary characters, not
     * wildcards. IDs match from the start and need the type prefix, such as ful_01.
     */
    "query"?: InputValue<string>;
    /**
     * Filter by exact fulfillment status. Values within this filter are ORed; combined with other
     * filters using AND. Values are trimmed and deduplicated in first-seen order; empty or unknown
     * entries are rejected. Values within this filter are ORed; separate filters are ANDed. []
     * enum: "pending", "on_hold", "in_progress", "ready", "completed", "canceled", "failed",
     * "scheduled", "accepted", "preparing", "picked", "packed", "dispatched", "no_show". Value
     * enum: "pending", "on_hold", "in_progress", "ready", "completed", "canceled", "failed",
     * "scheduled", "accepted", "preparing", "picked", "packed", "dispatched", "no_show". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "pending", "on_hold", "in_progress",
     * "ready", "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked",
     * "packed", "dispatched", "no_show". anyOf[1][] (Value): string. Value enum: "pending",
     * "on_hold", "in_progress", "ready", "completed", "canceled", "failed", "scheduled",
     * "accepted", "preparing", "picked", "packed", "dispatched", "no_show". anyOf[2] (Value):
     * string. Value enum: "pending", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "accepted", "preparing", "picked", "packed", "dispatched", "no_show".
     */
    "status"?: InputValue<("pending"
        | "on_hold"
        | "in_progress"
        | "ready"
        | "completed"
        | "canceled"
        | "failed"
        | "scheduled"
        | "accepted"
        | "preparing"
        | "picked"
        | "packed"
        | "dispatched"
        | "no_show")
        | readonly ("pending"
        | "on_hold"
        | "in_progress"
        | "ready"
        | "completed"
        | "canceled"
        | "failed"
        | "scheduled"
        | "accepted"
        | "preparing"
        | "picked"
        | "packed"
        | "dispatched"
        | "no_show")[]>;
    /**
     * Filter by fulfillment type. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover".
     * Value enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "shipment", "pickup",
     * "local_delivery", "digital", "service", "handover". anyOf[1][] (Value): string. Value enum:
     * "shipment", "pickup", "local_delivery", "digital", "service", "handover". anyOf[2] (Value):
     * string. Value enum: "shipment", "pickup", "local_delivery", "digital", "service",
     * "handover".
     */
    "type"?: InputValue<("shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover")
        | readonly ("shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover")[]>;
    /**
     * Filter by assigned Location ID. pattern: ^loc_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: InputValue<string>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by fulfillment_id. due_at compares
     * scheduled_start_at, the booked service start or pickup, delivery, or shipment window start,
     * with nulls last ascending and first descending. scheduled_start_at and terminal_at put nulls
     * first ascending and last descending. Ties use fulfillment_id in the same direction. Default:
     * "created_at". Value enum: "created_at", "scheduled_start_at", "terminal_at", "due_at".
     */
    "sort_by"?: InputValue<"created_at" | "scheduled_start_at" | "terminal_at" | "due_at">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
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
export type FulfillmentsMarkNoShowParams = (InputValue<MarkFulfillmentNoShowRequestInput>)
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
export type FulfillmentsMarkPackedParams = (InputValue<MarkFulfillmentPackedRequestInput>
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
export type FulfillmentsMarkPickedParams = (InputValue<MarkFulfillmentPickedRequestInput>
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
export type FulfillmentsMarkPreparingParams = (InputValue<MarkFulfillmentPreparingRequestInput>
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
export type FulfillmentsMarkReadyParams = (InputValue<MarkFulfillmentReadyRequestInput>
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
export type FulfillmentsReleaseHoldParams = (InputValue<ReleaseFulfillmentHoldRequestInput>
    | {
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
export type FulfillmentsScheduleParams = (InputValue<ScheduleFulfillmentRequestInput>)
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
export type FulfillmentsStartParams = (InputValue<StartFulfillmentRequestInput>
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
export type FulfillmentsUpdateParams = (InputValue<UpdateFulfillmentRequestInput>)
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
/**
 * License key terms. Null limits mean unlimited activations or no expiry. A null generated key
 * prefix means no prefix.
 */
export type GeneratedLicenseKeyConfiguration = {
    /**
     * Maximum active devices per key. Null when activations are unlimited. Format: int32. minimum:
     * 1. maximum: 10000.
     */
    "activation_limit": number | null;
    /** Whether Flint emails keys to the buyer. Defaults to true. Default: true. */
    "email_delivery_enabled": boolean;
    /**
     * Prefix shown before each generated key. Null when no prefix is configured. minLength: 2.
     * maxLength: 8. pattern: ^[A-Z0-9]{2,8}$.
     */
    "key_prefix": string | null;
    /** Source of the license keys. Value enum: "generated". */
    "source": "generated" | (string & {});
    /**
     * Days from issuance until expiry. Null when keys do not expire. Format: int32. minimum: 1.
     * maximum: 36500.
     */
    "validity_period_days": number | null;
};
export type GeneratedLicenseKeyConfigurationPreviousAttributes = {
    /**
     * Maximum active devices per key. Null when activations are unlimited. anyOf[1] (Value):
     * integer. Maximum active devices per key. Null when activations are unlimited. Format: int32.
     * minimum: 1. maximum: 10000. anyOf[2] (Value): null.
     */
    "activation_limit"?: ((number) | (null));
    /**
     * Whether Flint emails keys to the buyer. Defaults to true. anyOf[1] (Value): boolean. Whether
     * Flint emails keys to the buyer. Defaults to true. Default: true. anyOf[2] (Value): null.
     */
    "email_delivery_enabled"?: ((boolean) | (null));
    /**
     * Prefix shown before each generated key. Null when no prefix is configured. anyOf[1] (Value):
     * string. Prefix shown before each generated key. Null when no prefix is configured.
     * minLength: 2. maxLength: 8. pattern: ^[A-Z0-9]{2,8}$. anyOf[2] (Value): null.
     */
    "key_prefix"?: ((string) | (null));
    /**
     * Source of the license keys. Value enum: "generated". anyOf[1] (Value): string. Source of the
     * license keys. Value enum: "generated". anyOf[2] (Value): null.
     */
    "source"?: (("generated" | (string & {})) | (null));
    /**
     * Days from issuance until expiry. Null when keys do not expire. anyOf[1] (Value): integer.
     * Days from issuance until expiry. Null when keys do not expire. Format: int32. minimum: 1.
     * maximum: 36500. anyOf[2] (Value): null.
     */
    "validity_period_days"?: ((number) | (null));
};
/**
 * Replaced as a whole: send every field you want to keep. Only product_type digital supports this
 * setting. It adds no delivery requirement and is independent of the delivery profile. Send null
 * to remove every value you set in this section. Omission preserves it on update.
 */
export type GeneratedLicenseKeyConfigurationRequest = {
    /**
     * Maximum active devices per key. Omit or send null for no limit. Format: int32. minimum: 1.
     * maximum: 10000.
     */
    "activation_limit"?: number | null;
    /** Whether Flint emails keys to the buyer. Defaults to true. Default: true. */
    "email_delivery_enabled"?: boolean;
    /**
     * Prefix shown before each generated key. Omit for no prefix. minLength: 2. maxLength: 8.
     * pattern: ^[A-Z0-9]{2,8}$.
     */
    "key_prefix"?: string;
    /** Source of the license keys. Value enum: "generated". */
    "source": "generated" | (string & {});
    /**
     * Days from issuance until expiry. Omit or send null for no expiry. Format: int32. minimum: 1.
     * maximum: 36500.
     */
    "validity_period_days"?: number | null;
};
/**
 * Replaced as a whole: send every field you want to keep. Only product_type digital supports this
 * setting. It adds no delivery requirement and is independent of the delivery profile. Send null
 * to remove every value you set in this section. Omission preserves it on update.
 */
export type GeneratedLicenseKeyConfigurationRequestInput = {
    /**
     * Maximum active devices per key. Omit or send null for no limit. Format: int32. minimum: 1.
     * maximum: 10000.
     */
    "activation_limit"?: number | null;
    /** Whether Flint emails keys to the buyer. Defaults to true. Default: true. */
    "email_delivery_enabled"?: boolean;
    /**
     * Prefix shown before each generated key. Omit for no prefix. minLength: 2. maxLength: 8.
     * pattern: ^[A-Z0-9]{2,8}$.
     */
    "key_prefix"?: string;
    /** Source of the license keys. Value enum: "generated". */
    "source": "generated";
    /**
     * Days from issuance until expiry. Omit or send null for no expiry. Format: int32. minimum: 1.
     * maximum: 36500.
     */
    "validity_period_days"?: number | null;
};
/** A response containing `ReturnDisposition` data. */
export type GetReturnDispositionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A decision about how
     * returned merchandise will be handled.
     */
    "data": ReturnDisposition;
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
/** A response containing `ReturnInspection` data. */
export type GetReturnInspectionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An assessment of the
     * condition of returned items.
     */
    "data": ReturnInspection;
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
/** A response containing `ReturnLineItem` data. */
export type GetReturnLineItemResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An item included in a
     * return request.
     */
    "data": ReturnLineItem;
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
/** A response containing `ReturnPolicy` data. */
export type GetReturnPolicyResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Rules governing whether
     * and how purchased items can be returned.
     */
    "data": ReturnPolicy;
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
/** A response containing `ReturnPolicyRevision` data. */
export type GetReturnPolicyRevisionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A saved revision of a
     * return policy.
     */
    "data": ReturnPolicyRevision;
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
/** A response containing `ReturnReason` data. */
export type GetReturnReasonResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A reason customers can
     * select when requesting a return.
     */
    "data": ReturnReason;
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
/** A response containing `ReturnReceipt` data. */
export type GetReturnReceiptResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A record of returned
     * items arriving at a location.
     */
    "data": ReturnReceipt;
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
/** A response containing `ReturnResolution` data. */
export type GetReturnResolutionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The refund, exchange, or
     * other outcome of a return.
     */
    "data": ReturnResolution;
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
/** A response containing `Return` data. */
export type GetReturnResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A request to send
     * purchased items back.
     */
    "data": ReturnResource;
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
/**
 * Merchant-issued purchased gift card. Posted balance includes reserved value; available value is
 * balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are
 * independent resources and cannot be transferred across merchants or currencies.
 */
export type GiftCard = {
    /**
     * The balance minus reserved value: what can be spent now. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "available_money": MoneyValue;
    /**
     * The posted balance, including value reserved for redemptions in progress. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "balance_money": MoneyValue;
    /**
     * Origin of the current code: generated means Flint issued a random code; imported means the
     * merchant supplied an existing code during import. Rotating the code resets this to
     * generated. Value enum: "generated", "imported".
     */
    "code_source": "generated" | "imported" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * Value enum: "USD".
     */
    "currency": "USD" | (string & {});
    /**
     * ID of the customer associated with the card. `null` when no customer is associated. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string | null;
    /**
     * Caller-owned identifier for this resource in an external system. `null` when none is set.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string | null;
    /**
     * Unique identifier for this gift card, prefixed `gc_`. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id": string;
    /**
     * The Idempotency-Key of the request that created this resource. `null` when that request sent
     * no key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource.
     */
    "idempotency_key": string | null;
    /**
     * RFC3339 timestamp. `null` when no value has been loaded onto the card. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "last_loaded_at": string | null;
    /**
     * RFC3339 timestamp. `null` when the card has never been redeemed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "last_redeemed_at": string | null;
    /** Last four characters of the card's current code. minLength: 4. maxLength: 4. */
    "last4": string;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Value held for redemptions in progress. It isn't available to other payments until the
     * redemption succeeds or is released. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "reserved_money": MoneyValue;
    /**
     * The restrictions that keep the card frozen. unfreeze is supported only when every
     * restriction is merchant_freeze. A funding_dispute with dispute_status lost needs a gift card
     * funding disposition. [] (Value): {@link GiftCardRestriction}. A restriction on a gift card,
     * either a merchant freeze or a funding dispute, with its reason or dispute details.
     */
    "restrictions": Array<GiftCardRestriction>;
    /**
     * Where the card is in its lifecycle. Only an `active` card can be spent. Value enum:
     * "pending", "active", "frozen", "closed".
     */
    "status": "pending" | "active" | "frozen" | "closed" | (string & {});
    /**
     * Lifecycle actions accepted for the stored card state, independent of the caller's
     * credentials. Empty when no action is available. [] enum: "adjust_balance", "cash_out",
     * "close", "freeze", "unfreeze". [] (Value): string. Value enum: "adjust_balance", "cash_out",
     * "close", "freeze", "unfreeze".
     */
    "supported_actions": Array<"adjust_balance" | "cash_out" | "close" | "freeze" | "unfreeze" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64.
     */
    "version": number;
};
export type GiftCardCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_money": MoneyValue;
            "balance_money": MoneyValue;
            "code_source": "generated" | "imported" | (string & {});
            "created_at": string;
            "currency": "USD" | (string & {});
            "customer_id": string | null;
            "external_reference_id": string | null;
            "gift_card_id": string;
            "idempotency_key": string | null;
            "last_loaded_at": string | null;
            "last_redeemed_at": string | null;
            "last4": string;
            "merchant_id": string;
            "reserved_money": MoneyValue;
            "restrictions": Array<GiftCardRestriction>;
            "status": "pending" | "active" | "frozen" | "closed" | (string & {});
            "supported_actions": Array<"adjust_balance" | "cash_out" | "close" | "freeze" | "unfreeze" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "gift_card.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_money": MoneyValue;
            "balance_money": MoneyValue;
            "code_source": "generated" | "imported" | (string & {});
            "created_at": string;
            "currency": "USD" | (string & {});
            "customer_id": string | null;
            "external_reference_id": string | null;
            "gift_card_id": string;
            "idempotency_key": string | null;
            "last_loaded_at": string | null;
            "last_redeemed_at": string | null;
            "last4": string;
            "merchant_id": string;
            "reserved_money": MoneyValue;
            "restrictions": Array<GiftCardRestriction>;
            "status": "pending" | "active" | "frozen" | "closed" | (string & {});
            "supported_actions": Array<"adjust_balance" | "cash_out" | "close" | "freeze" | "unfreeze" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "gift_card.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "gift_card.created";
});
/**
 * The `gift_card.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type GiftCardCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_money (Required): {@link MoneyValue}. The balance minus
     * reserved value: what can be spent now. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.balance_money (Required): {@link MoneyValue}. The
     * posted balance, including value reserved for redemptions in progress. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.code_source
     * (Required): string. Origin of the current code: generated means Flint issued a random code;
     * imported means the merchant supplied an existing code during import. Rotating the code
     * resets this to generated. Value enum: "generated", "imported". object.created_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.currency (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". Value enum: "USD". object.customer_id (Required):
     * string or null. ID of the customer associated with the card. `null` when no customer is
     * associated. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.external_reference_id
     * (Required): string or null. Caller-owned identifier for this resource in an external system.
     * `null` when none is set. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * object.gift_card_id (Required): string. Unique identifier for this gift card, prefixed
     * `gc_`. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". object.idempotency_key (Required): string
     * or null. The Idempotency-Key of the request that created this resource. `null` when that
     * request sent no key, Flint created the resource, the reader isn't the caller that created it
     * (another app install, a buyer, or the merchant reading an app's or buyer's record), or the
     * caller that created an older record is unknown. Filter its list with `idempotency_key` to
     * find it. Recorded payloads, including replayed responses and webhook events, can return
     * `null`. To find a key that a replay returns as `null`, read the resource.
     * object.last_loaded_at (Required): string or null. RFC3339 timestamp. `null` when no value
     * has been loaded onto the card. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.last_redeemed_at (Required): string or null. RFC3339 timestamp. `null` when the card
     * has never been redeemed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.last4
     * (Required): string. Last four characters of the card's current code. minLength: 4.
     * maxLength: 4. object.merchant_id (Required): string. ID of the merchant this resource
     * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.reserved_money (Required):
     * {@link MoneyValue}. Value held for redemptions in progress. It isn't available to other
     * payments until the redemption succeeds or is released. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. object.restrictions (Required): Array of
     * {@link GiftCardRestriction}. The restrictions that keep the card frozen. unfreeze is
     * supported only when every restriction is merchant_freeze. A funding_dispute with
     * dispute_status lost needs a gift card funding disposition. object.restrictions[] (Value):
     * {@link GiftCardRestriction}. A restriction on a gift card, either a merchant freeze or a
     * funding dispute, with its reason or dispute details. object.status (Required): string. Where
     * the card is in its lifecycle. Only an `active` card can be spent. Value enum: "pending",
     * "active", "frozen", "closed". object.supported_actions (Required): Array of string.
     * Lifecycle actions accepted for the stored card state, independent of the caller's
     * credentials. Empty when no action is available. [] enum: "adjust_balance", "cash_out",
     * "close", "freeze", "unfreeze". object.supported_actions[] (Value): string. Value enum:
     * "adjust_balance", "cash_out", "close", "freeze", "unfreeze". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: int64.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_money (Required): {@link MoneyValue}. The balance minus reserved value: what
         * can be spent now. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. balance_money (Required): {@link MoneyValue}. The posted balance,
         * including value reserved for redemptions in progress. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. code_source (Required): string.
         * Origin of the current code: generated means Flint issued a random code; imported means
         * the merchant supplied an existing code during import. Rotating the code resets this to
         * generated. Value enum: "generated", "imported". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". currency (Required):
         * string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD". Value enum: "USD". customer_id (Required): string or null. ID of the
         * customer associated with the card. `null` when no customer is associated. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". external_reference_id (Required): string or null.
         * Caller-owned identifier for this resource in an external system. `null` when none is
         * set. minLength: 1. maxLength: 255. Example: "warehouse-1842". gift_card_id (Required):
         * string. Unique identifier for this gift card, prefixed `gc_`. Example:
         * "gc_01KEZF7C00RT1618WYBM1Y94CG". idempotency_key (Required): string or null. The
         * Idempotency-Key of the request that created this resource. `null` when that request sent
         * no key, Flint created the resource, the reader isn't the caller that created it (another
         * app install, a buyer, or the merchant reading an app's or buyer's record), or the caller
         * that created an older record is unknown. Filter its list with `idempotency_key` to find
         * it. Recorded payloads, including replayed responses and webhook events, can return
         * `null`. To find a key that a replay returns as `null`, read the resource. last_loaded_at
         * (Required): string or null. RFC3339 timestamp. `null` when no value has been loaded onto
         * the card. Format: date-time. Example: "2026-08-02T16:00:00Z". last_redeemed_at
         * (Required): string or null. RFC3339 timestamp. `null` when the card has never been
         * redeemed. Format: date-time. Example: "2026-08-02T16:00:00Z". last4 (Required): string.
         * Last four characters of the card's current code. minLength: 4. maxLength: 4. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". reserved_money (Required): {@link MoneyValue}. Value
         * held for redemptions in progress. It isn't available to other payments until the
         * redemption succeeds or is released. Monetary amount represented as integer minor units
         * plus an ISO 4217 currency code. restrictions (Required): Array of {@link
         * GiftCardRestriction}. The restrictions that keep the card frozen. unfreeze is supported
         * only when every restriction is merchant_freeze. A funding_dispute with dispute_status
         * lost needs a gift card funding disposition. restrictions[] (Value): {@link
         * GiftCardRestriction}. A restriction on a gift card, either a merchant freeze or a
         * funding dispute, with its reason or dispute details. status (Required): string. Where
         * the card is in its lifecycle. Only an `active` card can be spent. Value enum: "pending",
         * "active", "frozen", "closed". supported_actions (Required): Array of string. Lifecycle
         * actions accepted for the stored card state, independent of the caller's credentials.
         * Empty when no action is available. [] enum: "adjust_balance", "cash_out", "close",
         * "freeze", "unfreeze". supported_actions[] (Value): string. Value enum: "adjust_balance",
         * "cash_out", "close", "freeze", "unfreeze". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Current version of this resource's owned state. Send it as `expected_version`
         * when changing the resource to reject a stale write. Format: int64.
         */
        "object": {
            /**
             * The balance minus reserved value: what can be spent now. Monetary amount represented
             * as integer minor units plus an ISO 4217 currency code.
             */
            "available_money": MoneyValue;
            /**
             * The posted balance, including value reserved for redemptions in progress. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "balance_money": MoneyValue;
            /**
             * Origin of the current code: generated means Flint issued a random code; imported
             * means the merchant supplied an existing code during import. Rotating the code resets
             * this to generated. Value enum: "generated", "imported".
             */
            "code_source": "generated" | "imported" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD". Value enum: "USD".
             */
            "currency": "USD" | (string & {});
            /**
             * ID of the customer associated with the card. `null` when no customer is associated.
             * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when none is
             * set. minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Unique identifier for this gift card, prefixed `gc_`. Example:
             * "gc_01KEZF7C00RT1618WYBM1Y94CG".
             */
            "gift_card_id": string;
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource.
             */
            "idempotency_key": string | null;
            /**
             * RFC3339 timestamp. `null` when no value has been loaded onto the card. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "last_loaded_at": string | null;
            /**
             * RFC3339 timestamp. `null` when the card has never been redeemed. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "last_redeemed_at": string | null;
            /** Last four characters of the card's current code. minLength: 4. maxLength: 4. */
            "last4": string;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Value held for redemptions in progress. It isn't available to other payments until
             * the redemption succeeds or is released. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "reserved_money": MoneyValue;
            /**
             * The restrictions that keep the card frozen. unfreeze is supported only when every
             * restriction is merchant_freeze. A funding_dispute with dispute_status lost needs a
             * gift card funding disposition. [] (Value): {@link GiftCardRestriction}. A
             * restriction on a gift card, either a merchant freeze or a funding dispute, with its
             * reason or dispute details.
             */
            "restrictions": Array<GiftCardRestriction>;
            /**
             * Where the card is in its lifecycle. Only an `active` card can be spent. Value enum:
             * "pending", "active", "frozen", "closed".
             */
            "status": "pending" | "active" | "frozen" | "closed" | (string & {});
            /**
             * Lifecycle actions accepted for the stored card state, independent of the caller's
             * credentials. Empty when no action is available. [] enum: "adjust_balance",
             * "cash_out", "close", "freeze", "unfreeze". [] (Value): string. Value enum:
             * "adjust_balance", "cash_out", "close", "freeze", "unfreeze".
             */
            "supported_actions": Array<"adjust_balance" | "cash_out" | "close" | "freeze" | "unfreeze" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "gift_card.created". */
    "event_type"?: "gift_card.created";
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
 * The `gift_card.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type GiftCardCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_money (Required): {@link MoneyValue}. The balance minus
     * reserved value: what can be spent now. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.balance_money (Required): {@link MoneyValue}. The
     * posted balance, including value reserved for redemptions in progress. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.code_source
     * (Required): string. Origin of the current code: generated means Flint issued a random code;
     * imported means the merchant supplied an existing code during import. Rotating the code
     * resets this to generated. Value enum: "generated", "imported". object.created_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.currency (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". Value enum: "USD". object.customer_id (Required):
     * string or null. ID of the customer associated with the card. `null` when no customer is
     * associated. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.external_reference_id
     * (Required): string or null. Caller-owned identifier for this resource in an external system.
     * `null` when none is set. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * object.gift_card_id (Required): string. Unique identifier for this gift card, prefixed
     * `gc_`. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". object.idempotency_key (Required): string
     * or null. The Idempotency-Key of the request that created this resource. `null` when that
     * request sent no key, Flint created the resource, the reader isn't the caller that created it
     * (another app install, a buyer, or the merchant reading an app's or buyer's record), or the
     * caller that created an older record is unknown. Filter its list with `idempotency_key` to
     * find it. Recorded payloads, including replayed responses and webhook events, can return
     * `null`. To find a key that a replay returns as `null`, read the resource.
     * object.last_loaded_at (Required): string or null. RFC3339 timestamp. `null` when no value
     * has been loaded onto the card. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.last_redeemed_at (Required): string or null. RFC3339 timestamp. `null` when the card
     * has never been redeemed. Format: date-time. Example: "2026-08-02T16:00:00Z". object.last4
     * (Required): string. Last four characters of the card's current code. minLength: 4.
     * maxLength: 4. object.merchant_id (Required): string. ID of the merchant this resource
     * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.reserved_money (Required):
     * {@link MoneyValue}. Value held for redemptions in progress. It isn't available to other
     * payments until the redemption succeeds or is released. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. object.restrictions (Required): Array of
     * {@link GiftCardRestriction}. The restrictions that keep the card frozen. unfreeze is
     * supported only when every restriction is merchant_freeze. A funding_dispute with
     * dispute_status lost needs a gift card funding disposition. object.restrictions[] (Value):
     * {@link GiftCardRestriction}. A restriction on a gift card, either a merchant freeze or a
     * funding dispute, with its reason or dispute details. object.status (Required): string. Where
     * the card is in its lifecycle. Only an `active` card can be spent. Value enum: "pending",
     * "active", "frozen", "closed". object.supported_actions (Required): Array of string.
     * Lifecycle actions accepted for the stored card state, independent of the caller's
     * credentials. Empty when no action is available. [] enum: "adjust_balance", "cash_out",
     * "close", "freeze", "unfreeze". object.supported_actions[] (Value): string. Value enum:
     * "adjust_balance", "cash_out", "close", "freeze", "unfreeze". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: int64.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_money (Required): {@link MoneyValue}. The balance minus reserved value: what
         * can be spent now. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. balance_money (Required): {@link MoneyValue}. The posted balance,
         * including value reserved for redemptions in progress. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. code_source (Required): string.
         * Origin of the current code: generated means Flint issued a random code; imported means
         * the merchant supplied an existing code during import. Rotating the code resets this to
         * generated. Value enum: "generated", "imported". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". currency (Required):
         * string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         * Example: "USD". Value enum: "USD". customer_id (Required): string or null. ID of the
         * customer associated with the card. `null` when no customer is associated. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". external_reference_id (Required): string or null.
         * Caller-owned identifier for this resource in an external system. `null` when none is
         * set. minLength: 1. maxLength: 255. Example: "warehouse-1842". gift_card_id (Required):
         * string. Unique identifier for this gift card, prefixed `gc_`. Example:
         * "gc_01KEZF7C00RT1618WYBM1Y94CG". idempotency_key (Required): string or null. The
         * Idempotency-Key of the request that created this resource. `null` when that request sent
         * no key, Flint created the resource, the reader isn't the caller that created it (another
         * app install, a buyer, or the merchant reading an app's or buyer's record), or the caller
         * that created an older record is unknown. Filter its list with `idempotency_key` to find
         * it. Recorded payloads, including replayed responses and webhook events, can return
         * `null`. To find a key that a replay returns as `null`, read the resource. last_loaded_at
         * (Required): string or null. RFC3339 timestamp. `null` when no value has been loaded onto
         * the card. Format: date-time. Example: "2026-08-02T16:00:00Z". last_redeemed_at
         * (Required): string or null. RFC3339 timestamp. `null` when the card has never been
         * redeemed. Format: date-time. Example: "2026-08-02T16:00:00Z". last4 (Required): string.
         * Last four characters of the card's current code. minLength: 4. maxLength: 4. merchant_id
         * (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". reserved_money (Required): {@link MoneyValue}. Value
         * held for redemptions in progress. It isn't available to other payments until the
         * redemption succeeds or is released. Monetary amount represented as integer minor units
         * plus an ISO 4217 currency code. restrictions (Required): Array of {@link
         * GiftCardRestriction}. The restrictions that keep the card frozen. unfreeze is supported
         * only when every restriction is merchant_freeze. A funding_dispute with dispute_status
         * lost needs a gift card funding disposition. restrictions[] (Value): {@link
         * GiftCardRestriction}. A restriction on a gift card, either a merchant freeze or a
         * funding dispute, with its reason or dispute details. status (Required): string. Where
         * the card is in its lifecycle. Only an `active` card can be spent. Value enum: "pending",
         * "active", "frozen", "closed". supported_actions (Required): Array of string. Lifecycle
         * actions accepted for the stored card state, independent of the caller's credentials.
         * Empty when no action is available. [] enum: "adjust_balance", "cash_out", "close",
         * "freeze", "unfreeze". supported_actions[] (Value): string. Value enum: "adjust_balance",
         * "cash_out", "close", "freeze", "unfreeze". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Current version of this resource's owned state. Send it as `expected_version`
         * when changing the resource to reject a stale write. Format: int64.
         */
        "object": {
            /**
             * The balance minus reserved value: what can be spent now. Monetary amount represented
             * as integer minor units plus an ISO 4217 currency code.
             */
            "available_money": MoneyValue;
            /**
             * The posted balance, including value reserved for redemptions in progress. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "balance_money": MoneyValue;
            /**
             * Origin of the current code: generated means Flint issued a random code; imported
             * means the merchant supplied an existing code during import. Rotating the code resets
             * this to generated. Value enum: "generated", "imported".
             */
            "code_source": "generated" | "imported" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD". Value enum: "USD".
             */
            "currency": "USD" | (string & {});
            /**
             * ID of the customer associated with the card. `null` when no customer is associated.
             * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when none is
             * set. minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Unique identifier for this gift card, prefixed `gc_`. Example:
             * "gc_01KEZF7C00RT1618WYBM1Y94CG".
             */
            "gift_card_id": string;
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource.
             */
            "idempotency_key": string | null;
            /**
             * RFC3339 timestamp. `null` when no value has been loaded onto the card. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "last_loaded_at": string | null;
            /**
             * RFC3339 timestamp. `null` when the card has never been redeemed. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "last_redeemed_at": string | null;
            /** Last four characters of the card's current code. minLength: 4. maxLength: 4. */
            "last4": string;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Value held for redemptions in progress. It isn't available to other payments until
             * the redemption succeeds or is released. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "reserved_money": MoneyValue;
            /**
             * The restrictions that keep the card frozen. unfreeze is supported only when every
             * restriction is merchant_freeze. A funding_dispute with dispute_status lost needs a
             * gift card funding disposition. [] (Value): {@link GiftCardRestriction}. A
             * restriction on a gift card, either a merchant freeze or a funding dispute, with its
             * reason or dispute details.
             */
            "restrictions": Array<GiftCardRestriction>;
            /**
             * Where the card is in its lifecycle. Only an `active` card can be spent. Value enum:
             * "pending", "active", "frozen", "closed".
             */
            "status": "pending" | "active" | "frozen" | "closed" | (string & {});
            /**
             * Lifecycle actions accepted for the stored card state, independent of the caller's
             * credentials. Empty when no action is available. [] enum: "adjust_balance",
             * "cash_out", "close", "freeze", "unfreeze". [] (Value): string. Value enum:
             * "adjust_balance", "cash_out", "close", "freeze", "unfreeze".
             */
            "supported_actions": Array<"adjust_balance" | "cash_out" | "close" | "freeze" | "unfreeze" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "gift_card.created". */
    "event_type"?: "gift_card.created";
});
/**
 * The minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount.
 */
export type GiftCardCustomAmountBounds = {
    /**
     * Largest gift card value buyers can choose, in the face value currency. Currency must be USD.
     * Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "maximum_money": MoneyValue;
    /**
     * Smallest gift card value buyers can choose, in the face value currency. Currency must be
     * USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "minimum_money": MoneyValue;
};
export type GiftCardCustomAmountBoundsPreviousAttributes = {
    /**
     * Largest gift card value buyers can choose, in the face value currency. Currency must be USD.
     * Amount must be between 1 and 200000 minor units, inclusive. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "maximum_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Smallest gift card value buyers can choose, in the face value currency. Currency must be
     * USD. Amount must be between 1 and 200000 minor units, inclusive. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "minimum_money"?: ((MoneyValuePreviousAttributes) | (null));
};
/**
 * The minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount.
 */
export type GiftCardCustomAmountBoundsRequestInput = {
    /**
     * Largest gift card value buyers can choose, in the face value currency. Currency must be USD.
     * Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "maximum_money": MoneyValueInput;
    /**
     * Smallest gift card value buyers can choose, in the face value currency. Currency must be
     * USD. Amount must be between 1 and 200000 minor units, inclusive. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "minimum_money": MoneyValueInput;
};
/** A merchant decision to honor gift card value after its funding payment lost a dispute. */
export type GiftCardFundingDisposition = {
    /** When the disposition was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * How Flint handles the lost funding. honor_value keeps the affected cards' unspent value
     * spendable and removes the freeze this dispute placed on them. Value enum: "honor_value".
     */
    "disposition": "honor_value" | (string & {});
    /**
     * The whole disputed payment amount, which can include consideration for other purchases. It
     * is separate from the original gift card consideration and honored face value. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "dispute_amount_money": MoneyValue;
    /** The lost dispute this disposition resolves. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". */
    "dispute_id": string;
    /** Stable identifier of the disposition. Example: "gfd_01KEZF7C0077Q8RK3Q4FD2DTW8". */
    "gift_card_funding_disposition_id": string;
    /**
     * Gift cards whose value this disposition honors, including replacement cards that received
     * value from the disputed funding. [] (Value): string. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_ids": Array<string>;
    /**
     * Unspent value that stays spendable under this disposition, summed across the affected cards,
     * including replacement cards that received value from the disputed funding. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "honored_value_money": MoneyValue;
    /**
     * The Idempotency-Key of the request that created this resource. `null` when that request sent
     * no key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource.
     */
    "idempotency_key": string | null;
    /**
     * What the buyer paid for the gift card value the disputed payment funded, summed across its
     * funding loads. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "original_gift_card_consideration_money": MoneyValue;
    /**
     * The disputed payment that funded the gift card value. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
    /**
     * Part of honored_value_money that pending redemptions held when the disposition was created.
     * It stays reserved for them. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "preserved_reserved_value_money": MoneyValue;
    /** Your reason for honoring the value, from the create request. */
    "reason_message": string;
};
/** A page of `GiftCardFundingDisposition` objects. */
export type GiftCardFundingDispositionListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * GiftCardFundingDisposition}. A merchant decision to honor gift card value after its funding
     * payment lost a dispute.
     */
    "data": Array<GiftCardFundingDisposition>;
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
/** A response containing `GiftCardFundingDisposition` data. */
export type GiftCardFundingDispositionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A merchant decision to
     * honor gift card value after its funding payment lost a dispute.
     */
    "data": GiftCardFundingDisposition;
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
export type GiftCardFundingDispositionsCreateParams = (InputValue<CreateGiftCardFundingDispositionRequestInput>)
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
export type GiftCardFundingDispositionsGetParams = DisputesAcceptParams;
export type GiftCardFundingDispositionsListParams = {
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Exact, case-sensitive filter. maxLength: 255. pattern: ^du_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     */
    "dispute_id"?: InputValue<string>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns only resources created in your caller namespace, plus
     * resources created before caller scoping under the original key. Returns current authorized
     * resources, not the recorded response. A pending resource does not prove that the operation
     * succeeded, and an empty list does not prove that it had no effect. A match can show
     * `idempotency_key: null` when that request sent no key, Flint created the resource, the
     * reader isn't the caller that created it (another app install, a buyer, or the merchant
     * reading an app's or buyer's record), or the caller that created an older record is unknown.
     * minLength: 1. maxLength: 255. pattern: ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
     */
    "idempotency_key"?: InputValue<string>;
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
/**
 * A dispute on the payment that funded a gift card load, with its status and any loss resolution.
 */
export type GiftCardFundingDispute = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The dispute on the payment that funded this load. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     */
    "dispute_id": string;
    /**
     * true when the dispute is lost and no funding disposition exists for it yet. Create one with
     * POST /v1/gift-card-funding-dispositions.
     */
    "requires_resolution": boolean;
    /**
     * The funding disposition recorded for this lost dispute. `null` when you have not created one
     * yet. anyOf[1] (Value): {@link GiftCardFundingLossResolution}. How a lost funding dispute was
     * resolved for a gift card load, such as honoring the card's value, with a reason message.
     * anyOf[2] (Value): null.
     */
    "resolution": ((GiftCardFundingLossResolution) | (null));
    /**
     * Where the dispute on the funding payment stands. Spending of the value it funded stays
     * restricted while it is `open` or `lost`. Value enum: "open", "won", "lost".
     */
    "status": "open" | "won" | "lost" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64.
     */
    "version": number;
};
export type GiftCardFundingDisputePreviousAttributes = {
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "created_at"?: ((string) | (null));
    /**
     * The dispute on the payment that funded this load. anyOf[1] (Value): string. The dispute on
     * the payment that funded this load. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". anyOf[2]
     * (Value): null.
     */
    "dispute_id"?: ((string) | (null));
    /**
     * true when the dispute is lost and no funding disposition exists for it yet. Create one with
     * POST /v1/gift-card-funding-dispositions. anyOf[1] (Value): boolean. true when the dispute is
     * lost and no funding disposition exists for it yet. Create one with POST
     * /v1/gift-card-funding-dispositions. anyOf[2] (Value): null.
     */
    "requires_resolution"?: ((boolean) | (null));
    /**
     * The funding disposition recorded for this lost dispute. `null` when you have not created one
     * yet. anyOf[1] (Value): {@link GiftCardFundingLossResolutionPreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "resolution"?: ((GiftCardFundingLossResolutionPreviousAttributes) | (null));
    /**
     * Where the dispute on the funding payment stands. Spending of the value it funded stays
     * restricted while it is `open` or `lost`. Value enum: "open", "won", "lost". anyOf[1]
     * (Value): string. Where the dispute on the funding payment stands. Spending of the value it
     * funded stays restricted while it is `open` or `lost`. Value enum: "open", "won", "lost".
     * anyOf[2] (Value): null.
     */
    "status"?: (("open" | "won" | "lost" | (string & {})) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "updated_at"?: ((string) | (null));
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. anyOf[1] (Value): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. anyOf[2] (Value): null.
     */
    "version"?: ((number) | (null));
};
/**
 * How a lost funding dispute was resolved for a gift card load, such as honoring the card's value,
 * with a reason message.
 */
export type GiftCardFundingLossResolution = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * What the merchant decided about the card's value after the funding payment lost a dispute.
     * Value enum: "honor_value".
     */
    "disposition": "honor_value" | (string & {});
    /**
     * ID of the funding disposition recorded for the lost dispute. Example:
     * "gfd_01KEZF7C0077Q8RK3Q4FD2DTW8".
     */
    "gift_card_funding_disposition_id": string;
    /** The note you gave when you created the disposition. */
    "reason_message": string;
};
