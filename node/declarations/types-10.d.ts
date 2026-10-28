import type {
    ReturnReplacementLineItemRequestInput,
    ReturnResolutionAdjustmentRequestInput,
    ReturnResolutionLineItemRequestInput,
    ReturnReplacementLineItemRequest,
    ReturnResolutionAdjustmentRequest,
    ReturnResolutionLineItemRequest,
    ReturnShipmentLineItemAllocationRequestRequestInput
} from './types-44.js';
import type { MetadataMap, MetadataRequestInput } from './types-32.js';
import type { RiskPredicateNode, RiskPredicateNodeInput } from './types-46.js';
import type { PackageCreateRequest, PackageCreateRequestInput } from './types-36.js';
import type {
    SubscriptionIntervalOption,
    SubscriptionIntervalOptionInput,
    SubscriptionPlanLineItemRequest,
    SubscriptionPlanLineItemRequestInput,
    SubscriptionBillingStartRequest,
    SubscriptionDeliveryRequest,
    SubscriptionBillingStartRequestInput,
    SubscriptionDeliveryRequestInput
} from './types-48.js';
import type { ImageRequest, ImageRequestInput } from './types-21.js';
import type { InventoryRoutingSourceRequest, InventoryRoutingSourceRequestInput } from './types-27.js';
import type { MoneyValue, MoneyValueInput } from './types-33.js';
import type { UpdateDeliveryMethodRequest, UpdateDeliveryMethodRequestInput } from './types-51.js';
import type {
    SubscriptionServiceLocationRequest,
    SubscriptionTermsRequest,
    SubscriptionServiceLocationRequestInput,
    SubscriptionTermsRequestInput
} from './types-49.js';
import type {
    CreateMeSubscriptionPreviewRequestDeliveryOptionsInput,
    CreateMeSubscriptionPreviewRequestNextRenewalInput
} from './types-8.js';
import type { SubscriptionBillingScheduleRequest, SubscriptionBillingScheduleRequestInput } from './types-47.js';
import type { WebhookSigningMethod, WebhookSigningMethodInput } from './types-57.js';
import type { WorkloadIdentityClaimConditionRequest } from './types-65.js';
/**
 * Shape $ (Value): {@link CreateReturnResolutionPreviewRequestStandardInput}. The `exchange`
 * variant of `CreateReturnResolutionPreviewRequest`. The `no_monetary_action` variant of
 * `CreateReturnResolutionPreviewRequest`. The `refund` variant of
 * `CreateReturnResolutionPreviewRequest`. The `replacement` variant of
 * `CreateReturnResolutionPreviewRequest`. The `store_credit` variant of
 * `CreateReturnResolutionPreviewRequest`.
 */
export type CreateReturnResolutionPreviewRequestStandardInput = ({
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionAdjustmentRequestInput}. Shape $[] (Value):
     * {@link ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a return
     * resolution, with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequestInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "corrects_return_resolution_id"?: string;
    /**
     * Shape $ (Value): integer string. Optional version of the parent Return. A stale value
     * returns VERSION_CONFLICT with the Return ID and its current version. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_return_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequestInput}. Shape $[] (Value):
     * {@link ReturnResolutionLineItemRequestInput}. A return line and quantity to include in a
     * return resolution.
     */
    "line_items": Array<ReturnResolutionLineItemRequestInput>;
    /**
     * Shape $ (Value): string. Value enum: "original_price", "current_price",
     * "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price";
    /**
     * Shape $ (Value): Array of {@link ReturnReplacementLineItemRequestInput}. Shape $[] (Value):
     * {@link ReturnReplacementLineItemRequestInput}. A replacement item to include in a return
     * resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequestInput>;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
    /** Shape $ (Value): string. minLength: 1. */
    "return_id": string;
})
    & (({
    /** Shape $ (Value): any. minItems: 1. */
    "line_items": unknown;
    /**
     * Shape $ (Value): any. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
})
    & ({
    "corrects_return_resolution_id"?: never;
}));
/**
 * Shape $ (Value): {@link CreateReturnResolutionRequest}. The request body for: Create return
 * resolution.
 */
export type CreateReturnResolutionRequest = ({
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionAdjustmentRequest}. Shape $[] (Value):
     * {@link ReturnResolutionAdjustmentRequest}. A fee or credit to apply to a return resolution,
     * with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequest>;
    /** Shape $ (Value): string. minLength: 1. */
    "corrects_return_resolution_id"?: string;
    /**
     * Shape $ (Value): integer string. Optional version of the parent Return. A stale value
     * returns VERSION_CONFLICT with the Return ID and its current version. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_return_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Where the gift-card-paid portion is refunded. original credits the
     * original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
     * correction, except a correction of store_credit. Omit for store_credit, replacement, and
     * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and
     * conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and
     * its corrections always issue new gift cards. PATCH can change it only while proposed. Retry
     * persists the chosen destination before starting the new attempt. Default: "original". Value
     * enum: "original", "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequest}. Shape $[] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and quantity to include in a return
     * resolution.
     */
    "line_items"?: Array<ReturnResolutionLineItemRequest>;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): string. Value enum: "original_price", "current_price",
     * "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**
     * Shape $ (Value): Array of {@link ReturnReplacementLineItemRequest}. Shape $[] (Value):
     * {@link ReturnReplacementLineItemRequest}. A replacement item to include in a return
     * resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequest>;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement", "store_credit",
     * "no_monetary_action", "correction".
     */
    "resolution_type": "refund"
        | "exchange"
        | "replacement"
        | "store_credit"
        | "no_monetary_action"
        | "correction"
        | (string & {});
})
    & ((Exclude<CreateReturnResolutionRequestStandard & object, readonly unknown[]>)
    | (Exclude<CreateReturnResolutionRequestCorrection & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateReturnResolutionRequestCorrection}. The `correction` variant of
 * `CreateReturnResolutionRequest`.
 */
export type CreateReturnResolutionRequestCorrection = ({
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionAdjustmentRequest}. Shape $[] (Value):
     * {@link ReturnResolutionAdjustmentRequest}. A fee or credit to apply to a return resolution,
     * with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments": Array<ReturnResolutionAdjustmentRequest>;
    /** Shape $ (Value): string. minLength: 1. */
    "corrects_return_resolution_id": string;
    /**
     * Shape $ (Value): integer string. Optional version of the parent Return. A stale value
     * returns VERSION_CONFLICT with the Return ID and its current version. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_return_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Where the gift-card-paid portion is refunded. original credits the
     * original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
     * correction, except a correction of store_credit. Omit for store_credit, replacement, and
     * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and
     * conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and
     * its corrections always issue new gift cards. PATCH can change it only while proposed. Retry
     * persists the chosen destination before starting the new attempt. Default: "original". Value
     * enum: "original", "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequest}. Shape $[] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and quantity to include in a return
     * resolution.
     */
    "line_items"?: Array<ReturnResolutionLineItemRequest>;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): string. Value enum: "original_price", "current_price",
     * "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**
     * Shape $ (Value): Array of {@link ReturnReplacementLineItemRequest}. Shape $[] (Value):
     * {@link ReturnReplacementLineItemRequest}. A replacement item to include in a return
     * resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequest>;
    /** Shape $ (Value): string.  Value enum: "correction". */
    "resolution_type": "correction" | (string & {});
})
    & (({
    /** Shape $ (Value): any. minItems: 1. */
    "adjustments": unknown;
    /** Shape $ (Value): any.  Value enum: "correction". */
    "resolution_type"?: unknown;
    /** Shape $ (Value): string. minLength: 1. */
    "corrects_return_resolution_id": string;
}));
/**
 * Shape $ (Value): {@link CreateReturnResolutionRequestCorrectionInput}. The `correction` variant
 * of `CreateReturnResolutionRequest`.
 */
export type CreateReturnResolutionRequestCorrectionInput = ({
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionAdjustmentRequestInput}. Shape $[] (Value):
     * {@link ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a return
     * resolution, with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments": Array<ReturnResolutionAdjustmentRequestInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "corrects_return_resolution_id": string;
    /**
     * Shape $ (Value): integer string. Optional version of the parent Return. A stale value
     * returns VERSION_CONFLICT with the Return ID and its current version. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_return_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Where the gift-card-paid portion is refunded. original credits the
     * original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
     * correction, except a correction of store_credit. Omit for store_credit, replacement, and
     * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and
     * conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and
     * its corrections always issue new gift cards. PATCH can change it only while proposed. Retry
     * persists the chosen destination before starting the new attempt. Default: "original". Value
     * enum: "original", "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card";
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequestInput}. Shape $[] (Value):
     * {@link ReturnResolutionLineItemRequestInput}. A return line and quantity to include in a
     * return resolution.
     */
    "line_items"?: Array<ReturnResolutionLineItemRequestInput>;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Shape $ (Value): string. Value enum: "original_price", "current_price",
     * "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price";
    /**
     * Shape $ (Value): Array of {@link ReturnReplacementLineItemRequestInput}. Shape $[] (Value):
     * {@link ReturnReplacementLineItemRequestInput}. A replacement item to include in a return
     * resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequestInput>;
    /** Shape $ (Value): string.  Value enum: "correction". */
    "resolution_type": "correction";
})
    & (({
    /** Shape $ (Value): any. minItems: 1. */
    "adjustments": unknown;
    /** Shape $ (Value): any.  Value enum: "correction". */
    "resolution_type"?: "correction";
    /** Shape $ (Value): string. minLength: 1. */
    "corrects_return_resolution_id": string;
})
    & (({
    "line_items"?: never;
})
    & ({
    "replacement_line_items"?: never;
})
    & ({
    "pricing_basis"?: never;
})));
/**
 * Shape $ (Value): {@link CreateReturnResolutionRequestInput}. The request body for: Create return
 * resolution.
 */
export type CreateReturnResolutionRequestInput = ({
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionAdjustmentRequestInput}. Shape $[] (Value):
     * {@link ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a return
     * resolution, with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequestInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "corrects_return_resolution_id"?: string;
    /**
     * Shape $ (Value): integer string. Optional version of the parent Return. A stale value
     * returns VERSION_CONFLICT with the Return ID and its current version. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_return_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Where the gift-card-paid portion is refunded. original credits the
     * original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
     * correction, except a correction of store_credit. Omit for store_credit, replacement, and
     * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and
     * conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and
     * its corrections always issue new gift cards. PATCH can change it only while proposed. Retry
     * persists the chosen destination before starting the new attempt. Default: "original". Value
     * enum: "original", "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card";
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequestInput}. Shape $[] (Value):
     * {@link ReturnResolutionLineItemRequestInput}. A return line and quantity to include in a
     * return resolution.
     */
    "line_items"?: Array<ReturnResolutionLineItemRequestInput>;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Shape $ (Value): string. Value enum: "original_price", "current_price",
     * "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price";
    /**
     * Shape $ (Value): Array of {@link ReturnReplacementLineItemRequestInput}. Shape $[] (Value):
     * {@link ReturnReplacementLineItemRequestInput}. A replacement item to include in a return
     * resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequestInput>;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement", "store_credit",
     * "no_monetary_action", "correction".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction";
})
    & ((Exclude<CreateReturnResolutionRequestStandardInput & object, readonly unknown[]>)
    | (Exclude<CreateReturnResolutionRequestCorrectionInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link CreateReturnResolutionRequestStandard}. The `exchange` variant of
 * `CreateReturnResolutionRequest`. The `no_monetary_action` variant of
 * `CreateReturnResolutionRequest`. The `refund` variant of `CreateReturnResolutionRequest`. The
 * `replacement` variant of `CreateReturnResolutionRequest`. The `store_credit` variant of
 * `CreateReturnResolutionRequest`.
 */
export type CreateReturnResolutionRequestStandard = ({
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionAdjustmentRequest}. Shape $[] (Value):
     * {@link ReturnResolutionAdjustmentRequest}. A fee or credit to apply to a return resolution,
     * with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequest>;
    /** Shape $ (Value): string. minLength: 1. */
    "corrects_return_resolution_id"?: string;
    /**
     * Shape $ (Value): integer string. Optional version of the parent Return. A stale value
     * returns VERSION_CONFLICT with the Return ID and its current version. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_return_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Where the gift-card-paid portion is refunded. original credits the
     * original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
     * correction, except a correction of store_credit. Omit for store_credit, replacement, and
     * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and
     * conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and
     * its corrections always issue new gift cards. PATCH can change it only while proposed. Retry
     * persists the chosen destination before starting the new attempt. Default: "original". Value
     * enum: "original", "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequest}. Shape $[] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and quantity to include in a return
     * resolution.
     */
    "line_items": Array<ReturnResolutionLineItemRequest>;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): string. Value enum: "original_price", "current_price",
     * "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**
     * Shape $ (Value): Array of {@link ReturnReplacementLineItemRequest}. Shape $[] (Value):
     * {@link ReturnReplacementLineItemRequest}. A replacement item to include in a return
     * resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequest>;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
})
    & (({
    /** Shape $ (Value): any. minItems: 1. */
    "line_items": unknown;
    /**
     * Shape $ (Value): any. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "resolution_type"?: unknown;
}));
/**
 * Shape $ (Value): {@link CreateReturnResolutionRequestStandardInput}. The `exchange` variant of
 * `CreateReturnResolutionRequest`. The `no_monetary_action` variant of
 * `CreateReturnResolutionRequest`. The `refund` variant of `CreateReturnResolutionRequest`. The
 * `replacement` variant of `CreateReturnResolutionRequest`. The `store_credit` variant of
 * `CreateReturnResolutionRequest`.
 */
export type CreateReturnResolutionRequestStandardInput = ({
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionAdjustmentRequestInput}. Shape $[] (Value):
     * {@link ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a return
     * resolution, with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequestInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "corrects_return_resolution_id"?: string;
    /**
     * Shape $ (Value): integer string. Optional version of the parent Return. A stale value
     * returns VERSION_CONFLICT with the Return ID and its current version. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_return_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Where the gift-card-paid portion is refunded. original credits the
     * original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
     * correction, except a correction of store_credit. Omit for store_credit, replacement, and
     * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and
     * conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and
     * its corrections always issue new gift cards. PATCH can change it only while proposed. Retry
     * persists the chosen destination before starting the new attempt. Default: "original". Value
     * enum: "original", "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card";
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequestInput}. Shape $[] (Value):
     * {@link ReturnResolutionLineItemRequestInput}. A return line and quantity to include in a
     * return resolution.
     */
    "line_items": Array<ReturnResolutionLineItemRequestInput>;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Shape $ (Value): string. Value enum: "original_price", "current_price",
     * "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price";
    /**
     * Shape $ (Value): Array of {@link ReturnReplacementLineItemRequestInput}. Shape $[] (Value):
     * {@link ReturnReplacementLineItemRequestInput}. A replacement item to include in a return
     * resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequestInput>;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
})
    & (({
    /** Shape $ (Value): any. minItems: 1. */
    "line_items": unknown;
    /**
     * Shape $ (Value): any. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
})
    & ({
    "corrects_return_resolution_id"?: never;
}));
/** Shape $ (Value): {@link CreateRiskListRequest}. The request body for: Create a risk list. */
export type CreateRiskListRequest = {
    /** Shape $ (Value): string. minLength: 1. pattern: ^[a-z][a-z0-9_]{0,127}$. */
    "alias": string;
    /**
     * Shape $ (Value): string. Values are trimmed and compared exactly after item-type
     * normalization for deduplication and membership. card_fingerprint is the 32-character
     * hexadecimal value from PaymentMethod.fingerprint and is lowercased; case_sensitive_string
     * preserves case and Unicode composition. string and email are lowercased, with accents
     * preserved. email requires a bare address. email_domain is lowercased, has one final dot
     * removed, and converts internationalized domains to ASCII. ip_address uses canonical IP form,
     * including IPv4-mapped IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin
     * preserves 6 through 8 digits, including leading zeros, and matches the full value.
     * customer_id preserves the validated ID. Value enum: "card_fingerprint", "card_bin", "email",
     * "email_domain", "ip_address", "country", "customer_id", "string", "case_sensitive_string".
     */
    "item_type": "card_fingerprint"
        | "card_bin"
        | "email"
        | "email_domain"
        | "ip_address"
        | "country"
        | "customer_id"
        | "string"
        | "case_sensitive_string"
        | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
};
/**
 * Shape $ (Value): {@link CreateRiskListRequestInput}. The request body for: Create a risk list.
 */
export type CreateRiskListRequestInput = {
    /** Shape $ (Value): string. minLength: 1. pattern: ^[a-z][a-z0-9_]{0,127}$. */
    "alias": string;
    /**
     * Shape $ (Value): string. Values are trimmed and compared exactly after item-type
     * normalization for deduplication and membership. card_fingerprint is the 32-character
     * hexadecimal value from PaymentMethod.fingerprint and is lowercased; case_sensitive_string
     * preserves case and Unicode composition. string and email are lowercased, with accents
     * preserved. email requires a bare address. email_domain is lowercased, has one final dot
     * removed, and converts internationalized domains to ASCII. ip_address uses canonical IP form,
     * including IPv4-mapped IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin
     * preserves 6 through 8 digits, including leading zeros, and matches the full value.
     * customer_id preserves the validated ID. Value enum: "card_fingerprint", "card_bin", "email",
     * "email_domain", "ip_address", "country", "customer_id", "string", "case_sensitive_string".
     */
    "item_type": "card_fingerprint"
        | "card_bin"
        | "email"
        | "email_domain"
        | "ip_address"
        | "country"
        | "customer_id"
        | "string"
        | "case_sensitive_string";
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
};
/**
 * Shape $ (Value): {@link CreateRiskPreviewRequest}. The request body for: Create a risk preview.
 */
export type CreateRiskPreviewRequest = ({
    /** Shape $ (Value): string.  Value enum: "allow", "block", "review", "require_3ds". */
    "action"?: "allow" | "block" | "review" | "require_3ds" | (string & {});
    /**
     * Shape $ (Value): string. Selects an inline draft or a stored risk rule. Value enum:
     * "inline", "stored_rule".
     */
    "mode": "inline" | "stored_rule" | (string & {});
    /**
     * Shape $ (Value): {@link RiskPredicateNode}. A node in a risk rule condition: a comparison of
     * an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate"?: RiskPredicateNode;
    /** Shape $ (Value): string. minLength: 1. */
    "risk_rule_id"?: string;
})
    & ((Exclude<CreateRiskPreviewRequestInline & object, readonly unknown[]>)
    | (Exclude<CreateRiskPreviewRequestStoredRule & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateRiskPreviewRequestInline}. The `inline` variant of
 * `CreateRiskPreviewRequest`.
 */
export type CreateRiskPreviewRequestInline = ({
    /** Shape $ (Value): string.  Value enum: "allow", "block", "review", "require_3ds". */
    "action": "allow" | "block" | "review" | "require_3ds" | (string & {});
    /**
     * Shape $ (Value): string. Selects an inline draft or a stored risk rule. Value enum:
     * "inline".
     */
    "mode": "inline" | (string & {});
    /**
     * Shape $ (Value): {@link RiskPredicateNode}. A node in a risk rule condition: a comparison of
     * an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate": RiskPredicateNode;
    /** Shape $ (Value): string. minLength: 1. */
    "risk_rule_id"?: string;
})
    & ({
    /** Shape $ (Value): string.  Value enum: "inline". */
    "mode": "inline" | (string & {});
    /** Shape $ (Value): string.  Value enum: "allow", "block", "review", "require_3ds". */
    "action": "allow" | "block" | "review" | "require_3ds" | (string & {});
    /**
     * Shape $ (Value): {@link RiskPredicateNode}. A node in a risk rule condition: a comparison of
     * an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate": RiskPredicateNode;
});
/**
 * Shape $ (Value): {@link CreateRiskPreviewRequestInlineInput}. The `inline` variant of
 * `CreateRiskPreviewRequest`.
 */
export type CreateRiskPreviewRequestInlineInput = ({
    /** Shape $ (Value): string.  Value enum: "allow", "block", "review", "require_3ds". */
    "action": "allow" | "block" | "review" | "require_3ds";
    /**
     * Shape $ (Value): string. Selects an inline draft or a stored risk rule. Value enum:
     * "inline".
     */
    "mode": "inline";
    /**
     * Shape $ (Value): {@link RiskPredicateNodeInput}. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate": RiskPredicateNodeInput;
    /** Shape $ (Value): string. minLength: 1. */
    "risk_rule_id"?: string;
})
    & ({
    /** Shape $ (Value): string.  Value enum: "inline". */
    "mode": ("inline") & ("inline");
    /** Shape $ (Value): string.  Value enum: "allow", "block", "review", "require_3ds". */
    "action": "allow" | "block" | "review" | "require_3ds";
    /**
     * Shape $ (Value): {@link RiskPredicateNodeInput}. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate": RiskPredicateNodeInput;
});
/**
 * Shape $ (Value): {@link CreateRiskPreviewRequestInput}. The request body for: Create a risk
 * preview.
 */
export type CreateRiskPreviewRequestInput = ({
    /** Shape $ (Value): string.  Value enum: "allow", "block", "review", "require_3ds". */
    "action"?: "allow" | "block" | "review" | "require_3ds";
    /**
     * Shape $ (Value): string. Selects an inline draft or a stored risk rule. Value enum:
     * "inline", "stored_rule".
     */
    "mode": "inline" | "stored_rule";
    /**
     * Shape $ (Value): {@link RiskPredicateNodeInput}. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate"?: RiskPredicateNodeInput;
    /** Shape $ (Value): string. minLength: 1. */
    "risk_rule_id"?: string;
})
    & ((Exclude<CreateRiskPreviewRequestInlineInput & object, readonly unknown[]>)
    | (Exclude<CreateRiskPreviewRequestStoredRuleInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link CreateRiskPreviewRequestStoredRule}. The `stored_rule` variant of
 * `CreateRiskPreviewRequest`.
 */
export type CreateRiskPreviewRequestStoredRule = ({
    /** Shape $ (Value): string.  Value enum: "allow", "block", "review", "require_3ds". */
    "action"?: "allow" | "block" | "review" | "require_3ds" | (string & {});
    /**
     * Shape $ (Value): string. Selects an inline draft or a stored risk rule. Value enum:
     * "stored_rule".
     */
    "mode": "stored_rule" | (string & {});
    /**
     * Shape $ (Value): {@link RiskPredicateNode}. A node in a risk rule condition: a comparison of
     * an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate"?: RiskPredicateNode;
    /** Shape $ (Value): string. minLength: 1. */
    "risk_rule_id": string;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "stored_rule". */
    "mode": "stored_rule" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "risk_rule_id": string;
}));
/**
 * Shape $ (Value): {@link CreateRiskPreviewRequestStoredRuleInput}. The `stored_rule` variant of
 * `CreateRiskPreviewRequest`.
 */
export type CreateRiskPreviewRequestStoredRuleInput = ({
    /** Shape $ (Value): string.  Value enum: "allow", "block", "review", "require_3ds". */
    "action"?: "allow" | "block" | "review" | "require_3ds";
    /**
     * Shape $ (Value): string. Selects an inline draft or a stored risk rule. Value enum:
     * "stored_rule".
     */
    "mode": "stored_rule";
    /**
     * Shape $ (Value): {@link RiskPredicateNodeInput}. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate"?: RiskPredicateNodeInput;
    /** Shape $ (Value): string. minLength: 1. */
    "risk_rule_id": string;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "stored_rule". */
    "mode": ("stored_rule") & ("stored_rule");
    /** Shape $ (Value): string. minLength: 1. */
    "risk_rule_id": string;
})
    & (({
    "action"?: never;
}) & ({
    "predicate"?: never;
})));
/** Shape $ (Value): {@link CreateRiskRuleRequest}. The request body for: Create a risk rule. */
export type CreateRiskRuleRequest = {
    /** Shape $ (Value): string.  Value enum: "allow", "block", "review", "require_3ds". */
    "action": "allow" | "block" | "review" | "require_3ds" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "description": string;
    /**
     * Shape $ (Value): {@link RiskPredicateNode}. A node in a risk rule condition: a comparison of
     * an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate": RiskPredicateNode;
    /** Shape $ (Value): string. Default: "active". Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateRiskRuleRequestInput}. The request body for: Create a risk rule.
 */
export type CreateRiskRuleRequestInput = {
    /** Shape $ (Value): string.  Value enum: "allow", "block", "review", "require_3ds". */
    "action": "allow" | "block" | "review" | "require_3ds";
    /** Shape $ (Value): string. minLength: 1. */
    "description": string;
    /**
     * Shape $ (Value): {@link RiskPredicateNodeInput}. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate": RiskPredicateNodeInput;
    /** Shape $ (Value): string. Default: "active". Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
};
/** Shape $ (Value): {@link CreateSandboxRequest}. The request body for: Create sandbox. */
export type CreateSandboxRequest = ({
    /**
     * Shape $ (Value): string. Key access. Full and read_only resolve from the current scope
     * catalog for the key's mode; restricted holds only its listed scopes. Granting full or
     * read_only requires a freshly verified authorized user session or a full-access API key.
     * Value enum: "full", "read_only", "restricted".
     */
    "access"?: "full" | "read_only" | "restricted" | (string & {});
    /** Shape $ (Value): boolean. */
    "issue_test_key"?: boolean;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): Array of string. The scopes to grant. Required only with access restricted;
     * forbidden with full or read_only. minItems: 1. uniqueItems: true. [] enum:
     * "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". Shape $[] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "scopes"?: Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.organizations.read"
        | "accounts.organizations.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.allocation.write"
        | "commerce.inventory.policies.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.policies.write"
        | "commerce.returns.read"
        | "commerce.returns.reasons.write"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.partner_apps.read"
        | "developer.partner_apps.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.sandboxes.read"
        | "developer.sandboxes.write"
        | "developer.test_clocks.read"
        | "developer.test_clocks.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write"
        | (string & {})>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "test_key_name"?: string;
})
    & ((({
    /** Shape $ (Value): any.  Value enum: true. */
    "issue_test_key": unknown;
})
    & ((({
    /** Shape $ (Value): any.  Value enum: "full". */
    "access": unknown;
}))
    | (({
    /** Shape $ (Value): any.  Value enum: "read_only". */
    "access": unknown;
}))
    | ({
    /** Shape $ (Value): any.  Value enum: "restricted". */
    "access": unknown;
    /**
     * Shape $ (Value): Array of string. The scopes to grant. Required only with access restricted;
     * forbidden with full or read_only. minItems: 1. uniqueItems: true. [] enum:
     * "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". Shape $[] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "scopes": Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.organizations.read"
        | "accounts.organizations.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.allocation.write"
        | "commerce.inventory.policies.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.policies.write"
        | "commerce.returns.read"
        | "commerce.returns.reasons.write"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.partner_apps.read"
        | "developer.partner_apps.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.sandboxes.read"
        | "developer.sandboxes.write"
        | "developer.test_clocks.read"
        | "developer.test_clocks.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write"
        | (string & {})>;
})
    | (Record<string, unknown>)))
    | (({
    /** Shape $ (Value): any.  Value enum: false. */
    "issue_test_key"?: unknown;
}))
    | (Record<string, unknown>));
/** Shape $ (Value): {@link CreateSandboxRequestInput}. The request body for: Create sandbox. */
export type CreateSandboxRequestInput = ({
    /**
     * Shape $ (Value): string. Key access. Full and read_only resolve from the current scope
     * catalog for the key's mode; restricted holds only its listed scopes. Granting full or
     * read_only requires a freshly verified authorized user session or a full-access API key.
     * Value enum: "full", "read_only", "restricted".
     */
    "access"?: "full" | "read_only" | "restricted";
    /** Shape $ (Value): boolean. */
    "issue_test_key"?: boolean;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): Array of string. The scopes to grant. Required only with access restricted;
     * forbidden with full or read_only. minItems: 1. uniqueItems: true. [] enum:
     * "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". Shape $[] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "scopes"?: Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.organizations.read"
        | "accounts.organizations.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.allocation.write"
        | "commerce.inventory.policies.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.policies.write"
        | "commerce.returns.read"
        | "commerce.returns.reasons.write"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.partner_apps.read"
        | "developer.partner_apps.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.sandboxes.read"
        | "developer.sandboxes.write"
        | "developer.test_clocks.read"
        | "developer.test_clocks.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write">;
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "test_key_name"?: string;
})
    & ((({
    /** Shape $ (Value): any.  Value enum: true. */
    "issue_test_key": (true) & (true);
})
    & ((({
    /** Shape $ (Value): any.  Value enum: "full". */
    "access": ("full") & ("full");
})
    & ({
    "scopes"?: never;
}))
    | (({
    /** Shape $ (Value): any.  Value enum: "read_only". */
    "access": ("read_only") & ("read_only");
})
    & ({
    "scopes"?: never;
}))
    | ({
    /** Shape $ (Value): any.  Value enum: "restricted". */
    "access": ("restricted") & ("restricted");
    /**
     * Shape $ (Value): Array of string. The scopes to grant. Required only with access restricted;
     * forbidden with full or read_only. minItems: 1. uniqueItems: true. [] enum:
     * "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". Shape $[] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "scopes": Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.organizations.read"
        | "accounts.organizations.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.allocation.write"
        | "commerce.inventory.policies.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.policies.write"
        | "commerce.returns.read"
        | "commerce.returns.reasons.write"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.partner_apps.read"
        | "developer.partner_apps.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.sandboxes.read"
        | "developer.sandboxes.write"
        | "developer.test_clocks.read"
        | "developer.test_clocks.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write">;
})))
    | (({
    /** Shape $ (Value): any.  Value enum: false. */
    "issue_test_key"?: (false) & (false);
})
    & (({
    "access"?: never;
}) & ({
    "scopes"?: never;
}) & ({
    "test_key_name"?: never;
}))));
/**
 * Shape $ (Value): {@link CreateServiceFulfillmentDetails}. Service details you supply when
 * creating a fulfillment: the scheduled start and end, timezone, and notes.
 */
export type CreateServiceFulfillmentDetails = {
    /** Shape $ (Value): string. minLength: 1. */
    "notes"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "scheduled_end_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "scheduled_start_at"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "timezone"?: string;
};
/**
 * Shape $ (Value): {@link CreateServiceFulfillmentDetailsInput}. Service details you supply when
 * creating a fulfillment: the scheduled start and end, timezone, and notes.
 */
export type CreateServiceFulfillmentDetailsInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "notes"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "scheduled_end_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "scheduled_start_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. */
    "timezone"?: string;
};
/** Shape $ (Value): {@link CreateShipmentRequest}. The request body for: Create shipment. */
export type CreateShipmentRequest = ({
    /** Shape $ (Value): string.  Value enum: "outbound", "return". */
    "direction": "outbound" | "return" | (string & {});
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Requires external_system. External references are not unique. Use Idempotency-Key for
     * retries. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Name of the external system that external_reference_id belongs to.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): Array of {@link PackageCreateRequest}. Creates packages atomically with an
     * outbound shipment. Items are optional per package. Created packages are included in the
     * response. minItems: 1. maxItems: 20. Shape $[] (Value): {@link PackageCreateRequest}. The
     * request body for: Create package.
     */
    "packages"?: Array<PackageCreateRequest>;
    /** Shape $ (Value): string. minLength: 1. */
    "return_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequest}. minItems: 1. Shape $[]
     * (Value): {@link ReturnResolutionLineItemRequest}. A return line and the quantity placed in a
     * return shipment or package.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
})
    & ((Exclude<CreateShipmentRequestOutbound & object, readonly unknown[]>)
    | (Exclude<CreateShipmentRequestReturn & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** Shape $ (Value): {@link CreateShipmentRequestInput}. The request body for: Create shipment. */
export type CreateShipmentRequestInput = ({
    /** Shape $ (Value): string.  Value enum: "outbound", "return". */
    "direction": "outbound" | "return";
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Requires external_system. External references are not unique. Use Idempotency-Key for
     * retries. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Name of the external system that external_reference_id belongs to.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Shape $ (Value): Array of {@link PackageCreateRequestInput}. Creates packages atomically
     * with an outbound shipment. Items are optional per package. Created packages are included in
     * the response. minItems: 1. maxItems: 20. Shape $[] (Value): {@link
     * PackageCreateRequestInput}. The request body for: Create package.
     */
    "packages"?: Array<PackageCreateRequestInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "return_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ReturnShipmentLineItemAllocationRequestRequestInput}.
     * minItems: 1. Shape $[] (Value): {@link ReturnShipmentLineItemAllocationRequestRequestInput}.
     * A return line and the quantity placed in a return shipment or package.
     */
    "return_line_items"?: Array<ReturnShipmentLineItemAllocationRequestRequestInput>;
})
    & ((Exclude<CreateShipmentRequestOutboundInput & object, readonly unknown[]>)
    | (Exclude<CreateShipmentRequestReturnInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link CreateShipmentRequestOutbound}. The `outbound` variant of
 * `CreateShipmentRequest`.
 */
export type CreateShipmentRequestOutbound = ({
    /** Shape $ (Value): string.  Value enum: "outbound". */
    "direction": "outbound" | (string & {});
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Requires external_system. External references are not unique. Use Idempotency-Key for
     * retries. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Name of the external system that external_reference_id belongs to.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): Array of {@link PackageCreateRequest}. Creates packages atomically with an
     * outbound shipment. Items are optional per package. Created packages are included in the
     * response. minItems: 1. maxItems: 20. Shape $[] (Value): {@link PackageCreateRequest}. The
     * request body for: Create package.
     */
    "packages"?: Array<PackageCreateRequest>;
    /** Shape $ (Value): string. minLength: 1. */
    "return_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequest}. minItems: 1. Shape $[]
     * (Value): {@link ReturnResolutionLineItemRequest}. A return line and the quantity placed in a
     * return shipment or package.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
});
/**
 * Shape $ (Value): {@link CreateShipmentRequestOutboundInput}. The `outbound` variant of
 * `CreateShipmentRequest`.
 */
export type CreateShipmentRequestOutboundInput = ({
    /** Shape $ (Value): string.  Value enum: "outbound". */
    "direction": "outbound";
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Requires external_system. External references are not unique. Use Idempotency-Key for
     * retries. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Name of the external system that external_reference_id belongs to.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Shape $ (Value): Array of {@link PackageCreateRequestInput}. Creates packages atomically
     * with an outbound shipment. Items are optional per package. Created packages are included in
     * the response. minItems: 1. maxItems: 20. Shape $[] (Value): {@link
     * PackageCreateRequestInput}. The request body for: Create package.
     */
    "packages"?: Array<PackageCreateRequestInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "return_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ReturnShipmentLineItemAllocationRequestRequestInput}.
     * minItems: 1. Shape $[] (Value): {@link ReturnShipmentLineItemAllocationRequestRequestInput}.
     * A return line and the quantity placed in a return shipment or package.
     */
    "return_line_items"?: Array<ReturnShipmentLineItemAllocationRequestRequestInput>;
})
    & (({
    "return_id"?: never;
}))
    & (({
    "return_line_items"?: never;
}));
/**
 * Shape $ (Value): {@link CreateShipmentRequestReturn}. The `return` variant of
 * `CreateShipmentRequest`.
 */
export type CreateShipmentRequestReturn = ({
    /** Shape $ (Value): string.  Value enum: "return". */
    "direction": "return" | (string & {});
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Requires external_system. External references are not unique. Use Idempotency-Key for
     * retries. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Name of the external system that external_reference_id belongs to.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): Array of {@link PackageCreateRequest}. Creates packages atomically with an
     * outbound shipment. Items are optional per package. Created packages are included in the
     * response. minItems: 1. maxItems: 20. Shape $[] (Value): {@link PackageCreateRequest}. The
     * request body for: Create package.
     */
    "packages"?: Array<PackageCreateRequest>;
    /** Shape $ (Value): string. minLength: 1. */
    "return_id": string;
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequest}. minItems: 1. Shape $[]
     * (Value): {@link ReturnResolutionLineItemRequest}. A return line and the quantity placed in a
     * return shipment or package.
     */
    "return_line_items": Array<ReturnResolutionLineItemRequest>;
});
/**
 * Shape $ (Value): {@link CreateShipmentRequestReturnInput}. The `return` variant of
 * `CreateShipmentRequest`.
 */
export type CreateShipmentRequestReturnInput = ({
    /** Shape $ (Value): string.  Value enum: "return". */
    "direction": "return";
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Requires external_system. External references are not unique. Use Idempotency-Key for
     * retries. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Name of the external system that external_reference_id belongs to.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Shape $ (Value): Array of {@link PackageCreateRequestInput}. Creates packages atomically
     * with an outbound shipment. Items are optional per package. Created packages are included in
     * the response. minItems: 1. maxItems: 20. Shape $[] (Value): {@link
     * PackageCreateRequestInput}. The request body for: Create package.
     */
    "packages"?: Array<PackageCreateRequestInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "return_id": string;
    /**
     * Shape $ (Value): Array of {@link ReturnShipmentLineItemAllocationRequestRequestInput}.
     * minItems: 1. Shape $[] (Value): {@link ReturnShipmentLineItemAllocationRequestRequestInput}.
     * A return line and the quantity placed in a return shipment or package.
     */
    "return_line_items": Array<ReturnShipmentLineItemAllocationRequestRequestInput>;
})
    & (({
    "packages"?: never;
}));
/**
 * Shape $ (Value): {@link CreateSubscriptionAccessLinkRequest}. The access a subscription link
 * gives its buyer. Omit the body or purpose for read-only access.
 */
export type CreateSubscriptionAccessLinkRequest = {
    /**
     * Shape $ (Value): string. subscription_view opens the subscription read-only.
     * subscription_manage also lets the buyer cancel, pause, or undo a scheduled cancellation,
     * subject to your store's policy and the subscription's state; it requires
     * commerce.subscriptions.write. Both work for 14 days or 5 opens. Default:
     * "subscription_view". Value enum: "subscription_view", "subscription_manage".
     */
    "purpose"?: "subscription_view" | "subscription_manage" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateSubscriptionAccessLinkRequestInput}. The access a subscription
 * link gives its buyer. Omit the body or purpose for read-only access.
 */
export type CreateSubscriptionAccessLinkRequestInput = {
    /**
     * Shape $ (Value): string. subscription_view opens the subscription read-only.
     * subscription_manage also lets the buyer cancel, pause, or undo a scheduled cancellation,
     * subject to your store's policy and the subscription's state; it requires
     * commerce.subscriptions.write. Both work for 14 days or 5 opens. Default:
     * "subscription_view". Value enum: "subscription_view", "subscription_manage".
     */
    "purpose"?: "subscription_view" | "subscription_manage";
};
/**
 * Shape $ (Value): {@link CreateSubscriptionDeliveryMigrationRequest}. The request body for: Move
 * subscribers to another delivery method.
 */
export type CreateSubscriptionDeliveryMigrationRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "from_delivery_method_id": string;
    /**
     * Shape $ (Value): string. Limit the migration to this plan's live subscriptions. minLength:
     * 1.
     */
    "subscription_plan_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "to_delivery_method_id": string;
};
/**
 * Shape $ (Value): {@link CreateSubscriptionDeliveryMigrationRequestInput}. The request body for:
 * Move subscribers to another delivery method.
 */
export type CreateSubscriptionDeliveryMigrationRequestInput = CreateSubscriptionDeliveryMigrationRequest;
/**
 * Shape $ (Value): {@link CreateSubscriptionLineItemRequest}. The request body for: Add
 * subscription line item.
 */
export type CreateSubscriptionLineItemRequest = ({
    /** Shape $ (Value): string. minLength: 1. pattern: ^bun_[0-9A-HJKMNP-TV-Z]{26}$. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 9999.
     */
    "quantity": number;
    /**
     * Shape $ (Value): string. The catalog source of the new line: variant or bundle. Value enum:
     * "variant", "bundle".
     */
    "type": "variant" | "bundle" | (string & {});
    /** Shape $ (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. */
    "variant_id"?: string;
})
    & ((Exclude<CreateSubscriptionLineItemRequestVariant & object, readonly unknown[]>)
    | (Exclude<CreateSubscriptionLineItemRequestBundle & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateSubscriptionLineItemRequestBundle}. The `bundle` variant of
 * `CreateSubscriptionLineItemRequest`.
 */
export type CreateSubscriptionLineItemRequestBundle = ({
    /** Shape $ (Value): string. minLength: 1. pattern: ^bun_[0-9A-HJKMNP-TV-Z]{26}$. */
    "bundle_id": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 9999.
     */
    "quantity": number;
    /**
     * Shape $ (Value): string. The catalog source of the new line: variant or bundle. Value enum:
     * "bundle".
     */
    "type": "bundle" | (string & {});
    /** Shape $ (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. */
    "variant_id"?: string;
});
/**
 * Shape $ (Value): {@link CreateSubscriptionLineItemRequestBundleInput}. The `bundle` variant of
 * `CreateSubscriptionLineItemRequest`.
 */
export type CreateSubscriptionLineItemRequestBundleInput = ({
    /** Shape $ (Value): string. minLength: 1. pattern: ^bun_[0-9A-HJKMNP-TV-Z]{26}$. */
    "bundle_id": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 9999.
     */
    "quantity": number;
    /**
     * Shape $ (Value): string. The catalog source of the new line: variant or bundle. Value enum:
     * "bundle".
     */
    "type": "bundle";
    /** Shape $ (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. */
    "variant_id"?: string;
})
    & (({
    "variant_id"?: never;
}));
/**
 * Shape $ (Value): {@link CreateSubscriptionLineItemRequestInput}. The request body for: Add
 * subscription line item.
 */
export type CreateSubscriptionLineItemRequestInput = ({
    /** Shape $ (Value): string. minLength: 1. pattern: ^bun_[0-9A-HJKMNP-TV-Z]{26}$. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 9999.
     */
    "quantity": number;
    /**
     * Shape $ (Value): string. The catalog source of the new line: variant or bundle. Value enum:
     * "variant", "bundle".
     */
    "type": "variant" | "bundle";
    /** Shape $ (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. */
    "variant_id"?: string;
})
    & ((Exclude<CreateSubscriptionLineItemRequestVariantInput & object, readonly unknown[]>)
    | (Exclude<CreateSubscriptionLineItemRequestBundleInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link CreateSubscriptionLineItemRequestVariant}. The `variant` variant of
 * `CreateSubscriptionLineItemRequest`.
 */
export type CreateSubscriptionLineItemRequestVariant = ({
    /** Shape $ (Value): string. minLength: 1. pattern: ^bun_[0-9A-HJKMNP-TV-Z]{26}$. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 9999.
     */
    "quantity": number;
    /**
     * Shape $ (Value): string. The catalog source of the new line: variant or bundle. Value enum:
     * "variant".
     */
    "type": "variant" | (string & {});
    /** Shape $ (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. */
    "variant_id": string;
});
/**
 * Shape $ (Value): {@link CreateSubscriptionLineItemRequestVariantInput}. The `variant` variant of
 * `CreateSubscriptionLineItemRequest`.
 */
export type CreateSubscriptionLineItemRequestVariantInput = ({
    /** Shape $ (Value): string. minLength: 1. pattern: ^bun_[0-9A-HJKMNP-TV-Z]{26}$. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 9999.
     */
    "quantity": number;
    /**
     * Shape $ (Value): string. The catalog source of the new line: variant or bundle. Value enum:
     * "variant".
     */
    "type": "variant";
    /** Shape $ (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. */
    "variant_id": string;
})
    & (({
    "bundle_id"?: never;
}));
/**
 * Shape $ (Value): {@link CreateSubscriptionOfferRequest}. The request body for: Create
 * subscription offer.
 */
export type CreateSubscriptionOfferRequest = {
    /**
     * Shape $ (Value): Array of {@link SubscriptionIntervalOption}. minItems: 1. maxItems: 12.
     * uniqueItems: true. Shape $[] (Value): {@link SubscriptionIntervalOption}. A billing
     * interval, such as every 2 months, offered by a subscription plan.
     */
    "billing_interval_options": Array<SubscriptionIntervalOption>;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Shape $ (Value): Array of string. Catalog targets for new signups. At least one product or
     * variant is required. maxItems: 100. uniqueItems: true. Shape $[] (Value): string. minLength:
     * 1.
     */
    "product_ids"?: Array<string>;
    /**
     * Shape $ (Value): string or null. An active promotion with forever recurrence. On PATCH, null
     * removes the discount for new signups; omission keeps it. minLength: 1.
     */
    "promotion_id"?: string | null;
    /**
     * Shape $ (Value): string. Use active or inactive. Archive the offer with DELETE. Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Shape $ (Value): Array of string. Delivery methods offered at signup. An empty array uses
     * the store's checkout defaults. Existing subscriptions keep their selected method. maxItems:
     * 25. uniqueItems: true. Shape $[] (Value): string. minLength: 1.
     */
    "subscription_delivery_method_ids"?: Array<string>;
    /**
     * Shape $ (Value): Array of string. Catalog targets for new signups. At least one product or
     * variant is required. maxItems: 100. uniqueItems: true. Shape $[] (Value): string. minLength:
     * 1.
     */
    "variant_ids"?: Array<string>;
};
/**
 * Shape $ (Value): {@link CreateSubscriptionOfferRequestInput}. The request body for: Create
 * subscription offer.
 */
export type CreateSubscriptionOfferRequestInput = {
    /**
     * Shape $ (Value): Array of {@link SubscriptionIntervalOptionInput}. minItems: 1. maxItems:
     * 12. uniqueItems: true. Shape $[] (Value): {@link SubscriptionIntervalOptionInput}. A billing
     * interval, such as every 2 months, offered by a subscription plan.
     */
    "billing_interval_options": Array<SubscriptionIntervalOptionInput>;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Shape $ (Value): Array of string. Catalog targets for new signups. At least one product or
     * variant is required. maxItems: 100. uniqueItems: true. Shape $[] (Value): string. minLength:
     * 1.
     */
    "product_ids"?: Array<string>;
    /**
     * Shape $ (Value): string or null. An active promotion with forever recurrence. On PATCH, null
     * removes the discount for new signups; omission keeps it. minLength: 1.
     */
    "promotion_id"?: string | null;
    /**
     * Shape $ (Value): string. Use active or inactive. Archive the offer with DELETE. Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Shape $ (Value): Array of string. Delivery methods offered at signup. An empty array uses
     * the store's checkout defaults. Existing subscriptions keep their selected method. maxItems:
     * 25. uniqueItems: true. Shape $[] (Value): string. minLength: 1.
     */
    "subscription_delivery_method_ids"?: Array<string>;
    /**
     * Shape $ (Value): Array of string. Catalog targets for new signups. At least one product or
     * variant is required. maxItems: 100. uniqueItems: true. Shape $[] (Value): string. minLength:
     * 1.
     */
    "variant_ids"?: Array<string>;
};
/**
 * Shape $ (Value): {@link CreateSubscriptionPlanRequest}. The request body for: Create
 * subscription plan.
 */
export type CreateSubscriptionPlanRequest = {
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Shape $ (Value): integer. Format: int32. */
    "billing_interval_count": number;
    /**
     * Shape $ (Value): Array of {@link SubscriptionIntervalOption}. maxItems: 12. uniqueItems:
     * true. Shape $[] (Value): {@link SubscriptionIntervalOption}. A billing interval, such as
     * every 2 months, offered by a subscription plan.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOption>;
    /**
     * Shape $ (Value): integer. A commitment period you agree with the buyer, 1 to 120 months.
     * Flint shows it at checkout and records it on each new subscription (contract_start_at,
     * contract_end_at). Flint does not stop the buyer from canceling earlier. Format: int32.
     * minimum: 1. maximum: 120.
     */
    "contract_term_months"?: number;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. A fee you agree the buyer owes for canceling before the
     * contract term ends. Flint shows it at checkout and records it on each new subscription, but
     * never charges it. To collect it, charge the buyer yourself, for example with an order on
     * their saved payment method. Requires contract_term_months. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "early_termination_fee_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ImageRequest}. The complete desired gallery in display
     * order. The first image is primary. Send [] to clear the gallery. minItems: 0. maxItems: 8.
     * Shape $[] (Value): {@link ImageRequest}. An image you supply by `source_url`, with optional
     * `alt` text and external reference.
     */
    "images"?: Array<ImageRequest>;
    /**
     * Shape $ (Value): {@link InventoryRoutingSourceRequest}. Where tracked demand from this plan
     * is routed: a fixed Location, an allocation policy, or an immutable policy revision. Required
     * when any line item tracks inventory. New subscriptions and payment links for the plan copy
     * it, unless the payment link sends its own. Where you want inventory routed from: a fixed
     * Location, an inventory allocation policy, or one policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequest;
    /**
     * Shape $ (Value): Array of {@link SubscriptionPlanLineItemRequest}. minItems: 1. Shape $[]
     * (Value): {@link SubscriptionPlanLineItemRequest}. A line item to put on a new subscription
     * plan, from a variant, a bundle, or a custom name and price.
     */
    "line_items": Array<SubscriptionPlanLineItemRequest>;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): Array of integer. maxItems: 10. uniqueItems: true. Shape $[] (Value):
     * integer. minimum: 1. maximum: 100.
     */
    "quantity_options"?: Array<number>;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "setup_fee_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Active plans accept new signups. Inactive plans refuse new signups
     * with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are
     * read-only and their status is set only by DELETE
     * /v1/subscription-plans/{subscription_plan_id}. Default: "active". Value enum: "active",
     * "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "subscription_delivery_method_ids"?: Array<string>;
    /** Shape $ (Value): integer. Format: int32. */
    "trial_period_days"?: number;
};
/**
 * Shape $ (Value): {@link CreateSubscriptionPlanRequestInput}. The request body for: Create
 * subscription plan.
 */
export type CreateSubscriptionPlanRequestInput = {
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly";
    /** Shape $ (Value): integer. Format: int32. */
    "billing_interval_count": number;
    /**
     * Shape $ (Value): Array of {@link SubscriptionIntervalOptionInput}. maxItems: 12.
     * uniqueItems: true. Shape $[] (Value): {@link SubscriptionIntervalOptionInput}. A billing
     * interval, such as every 2 months, offered by a subscription plan.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOptionInput>;
    /**
     * Shape $ (Value): integer. A commitment period you agree with the buyer, 1 to 120 months.
     * Flint shows it at checkout and records it on each new subscription (contract_start_at,
     * contract_end_at). Flint does not stop the buyer from canceling earlier. Format: int32.
     * minimum: 1. maximum: 120.
     */
    "contract_term_months"?: number;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. A fee you agree the buyer owes for canceling
     * before the contract term ends. Flint shows it at checkout and records it on each new
     * subscription, but never charges it. To collect it, charge the buyer yourself, for example
     * with an order on their saved payment method. Requires contract_term_months. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "early_termination_fee_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ImageRequestInput}. The complete desired gallery in display
     * order. The first image is primary. Send [] to clear the gallery. minItems: 0. maxItems: 8.
     * Shape $[] (Value): {@link ImageRequestInput}. An image you supply by `source_url`, with
     * optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequestInput>;
    /**
     * Shape $ (Value): {@link InventoryRoutingSourceRequestInput}. Where tracked demand from this
     * plan is routed: a fixed Location, an allocation policy, or an immutable policy revision.
     * Required when any line item tracks inventory. New subscriptions and payment links for the
     * plan copy it, unless the payment link sends its own. Where you want inventory routed from: a
     * fixed Location, an inventory allocation policy, or one policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequestInput;
    /**
     * Shape $ (Value): Array of {@link SubscriptionPlanLineItemRequestInput}. minItems: 1. Shape
     * $[] (Value): {@link SubscriptionPlanLineItemRequestInput}. A line item to put on a new
     * subscription plan, from a variant, a bundle, or a custom name and price.
     */
    "line_items": Array<SubscriptionPlanLineItemRequestInput>;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): Array of integer. maxItems: 10. uniqueItems: true. Shape $[] (Value):
     * integer. minimum: 1. maximum: 100.
     */
    "quantity_options"?: Array<number>;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "setup_fee_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): string. Active plans accept new signups. Inactive plans refuse new signups
     * with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are
     * read-only and their status is set only by DELETE
     * /v1/subscription-plans/{subscription_plan_id}. Default: "active". Value enum: "active",
     * "inactive".
     */
    "status"?: "active" | "inactive";
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "subscription_delivery_method_ids"?: Array<string>;
    /** Shape $ (Value): integer. Format: int32. */
    "trial_period_days"?: number;
};
/**
 * Shape $ (Value): {@link CreateSubscriptionPreviewRequest}. The request body for: Preview
 * subscription.
 */
export type CreateSubscriptionPreviewRequest = ((CreateSubscriptionPreviewRequestDeliveryOptions)
    | (CreateSubscriptionPreviewRequestCreate)
    | (CreateSubscriptionPreviewRequestDeliveryMethodUpdate)
    | (CreateSubscriptionPreviewRequestNextRenewal)
    | (CreateSubscriptionPreviewRequestPlanChange)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CreateSubscriptionPreviewRequestCreate}. The `create` variant of
 * `CreateSubscriptionPreviewRequest`.
 */
export type CreateSubscriptionPreviewRequestCreate = {
    /** Shape $ (Value): string.  Value enum: "create". */
    "mode": "create" | (string & {});
    /**
     * Shape $ (Value): {@link CreateSubscriptionRequest}. The request body for: Create
     * subscription.
     */
    "subscription": CreateSubscriptionRequest;
};
/**
 * Shape $ (Value): {@link CreateSubscriptionPreviewRequestCreateInput}. The `create` variant of
 * `CreateSubscriptionPreviewRequest`.
 */
export type CreateSubscriptionPreviewRequestCreateInput = {
    /** Shape $ (Value): string.  Value enum: "create". */
    "mode": "create";
    /**
     * Shape $ (Value): {@link CreateSubscriptionRequestInput}. The request body for: Create
     * subscription.
     */
    "subscription": CreateSubscriptionRequestInput;
};
/**
 * Shape $ (Value): {@link CreateSubscriptionPreviewRequestDeliveryMethodUpdate}. The
 * `delivery_method_update` variant of `CreateSubscriptionPreviewRequest`.
 */
export type CreateSubscriptionPreviewRequestDeliveryMethodUpdate = {
    /**
     * Shape $ (Value): {@link UpdateDeliveryMethodRequest}. The request body for: Update delivery
     * method.
     */
    "delivery_method": UpdateDeliveryMethodRequest;
    /** Shape $ (Value): string. minLength: 1. pattern: ^dmet_[0-9A-HJKMNP-TV-Z]{26}$. */
    "delivery_method_id": string;
    /** Shape $ (Value): string.  Value enum: "delivery_method_update". */
    "mode": "delivery_method_update" | (string & {});
};
/**
 * Shape $ (Value): {@link CreateSubscriptionPreviewRequestDeliveryMethodUpdateInput}. The
 * `delivery_method_update` variant of `CreateSubscriptionPreviewRequest`.
 */
export type CreateSubscriptionPreviewRequestDeliveryMethodUpdateInput = {
    /**
     * Shape $ (Value): {@link UpdateDeliveryMethodRequestInput}. The request body for: Update
     * delivery method.
     */
    "delivery_method": UpdateDeliveryMethodRequestInput;
    /** Shape $ (Value): string. minLength: 1. pattern: ^dmet_[0-9A-HJKMNP-TV-Z]{26}$. */
    "delivery_method_id": string;
    /** Shape $ (Value): string.  Value enum: "delivery_method_update". */
    "mode": "delivery_method_update";
};
/**
 * Shape $ (Value): {@link CreateSubscriptionPreviewRequestDeliveryOptions}. The `delivery_options`
 * variant of `CreateSubscriptionPreviewRequest`.
 */
export type CreateSubscriptionPreviewRequestDeliveryOptions = {
    /**
     * Shape $ (Value): {@link SubscriptionServiceLocationRequest}. Where to deliver a
     * subscription: a saved customer address by ID, or a new address.
     */
    "destination": SubscriptionServiceLocationRequest;
    /** Shape $ (Value): string.  Value enum: "delivery_options". */
    "mode": "delivery_options" | (string & {});
    /** Shape $ (Value): string. minLength: 1. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_id": string;
};
/**
 * Shape $ (Value): {@link CreateSubscriptionPreviewRequestDeliveryOptionsInput}. The
 * `delivery_options` variant of `CreateSubscriptionPreviewRequest`.
 */
export type CreateSubscriptionPreviewRequestDeliveryOptionsInput = CreateMeSubscriptionPreviewRequestDeliveryOptionsInput;
/**
 * Shape $ (Value): {@link CreateSubscriptionPreviewRequestInput}. The request body for: Preview
 * subscription.
 */
export type CreateSubscriptionPreviewRequestInput = ((CreateSubscriptionPreviewRequestDeliveryOptionsInput)
    | (CreateSubscriptionPreviewRequestCreateInput)
    | (CreateSubscriptionPreviewRequestDeliveryMethodUpdateInput)
    | (CreateSubscriptionPreviewRequestNextRenewalInput)
    | (CreateSubscriptionPreviewRequestPlanChangeInput));
/**
 * Shape $ (Value): {@link CreateSubscriptionPreviewRequestNextRenewal}. The `next_renewal` variant
 * of `CreateSubscriptionPreviewRequest`.
 */
export type CreateSubscriptionPreviewRequestNextRenewal = {
    /** Shape $ (Value): string.  Value enum: "next_renewal". */
    "mode": "next_renewal" | (string & {});
    /** Shape $ (Value): string. minLength: 1. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_id": string;
};
/**
 * Shape $ (Value): {@link CreateSubscriptionPreviewRequestNextRenewalInput}. The `next_renewal`
 * variant of `CreateSubscriptionPreviewRequest`.
 */
export type CreateSubscriptionPreviewRequestNextRenewalInput = CreateMeSubscriptionPreviewRequestNextRenewalInput;
/**
 * Shape $ (Value): {@link CreateSubscriptionPreviewRequestPlanChange}. The `plan_change` variant
 * of `CreateSubscriptionPreviewRequest`.
 */
export type CreateSubscriptionPreviewRequestPlanChange = ({
    /**
     * Shape $ (Value): string. Send with billing_interval_count to choose a target plan option.
     * Omit both to keep the current interval. Value enum: "daily", "weekly", "monthly", "yearly".
     */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /**
     * Shape $ (Value): integer. Required when billing_interval is sent; billing_interval is
     * required when this field is sent. minimum: 1. maximum: 365.
     */
    "billing_interval_count"?: number;
    /**
     * Shape $ (Value): string. now bills a new period with credit for unused paid item time.
     * next_renewal changes the plan immediately and keeps the current paid period and next billing
     * date. Value enum: "now", "next_renewal".
     */
    "billing_starts": "now" | "next_renewal" | (string & {});
    /** Shape $ (Value): string.  Value enum: "plan_change". */
    "mode": "plan_change" | (string & {});
    /**
     * Shape $ (Value): integer. Omit to keep the current subscription quantity. The target plan
     * must offer the quantity. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 100.
     */
    "quantity"?: number;
    /** Shape $ (Value): string. minLength: 1. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_id": string;
    /** Shape $ (Value): string. minLength: 1. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_plan_id": string;
});
/**
 * Shape $ (Value): {@link CreateSubscriptionPreviewRequestPlanChangeInput}. The `plan_change`
 * variant of `CreateSubscriptionPreviewRequest`.
 */
export type CreateSubscriptionPreviewRequestPlanChangeInput = ({
    /**
     * Shape $ (Value): string. Send with billing_interval_count to choose a target plan option.
     * Omit both to keep the current interval. Value enum: "daily", "weekly", "monthly", "yearly".
     */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly";
    /**
     * Shape $ (Value): integer. Required when billing_interval is sent; billing_interval is
     * required when this field is sent. minimum: 1. maximum: 365.
     */
    "billing_interval_count"?: number;
    /**
     * Shape $ (Value): string. now bills a new period with credit for unused paid item time.
     * next_renewal changes the plan immediately and keeps the current paid period and next billing
     * date. Value enum: "now", "next_renewal".
     */
    "billing_starts": "now" | "next_renewal";
    /** Shape $ (Value): string.  Value enum: "plan_change". */
    "mode": "plan_change";
    /**
     * Shape $ (Value): integer. Omit to keep the current subscription quantity. The target plan
     * must offer the quantity. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 100.
     */
    "quantity"?: number;
    /** Shape $ (Value): string. minLength: 1. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_id": string;
    /** Shape $ (Value): string. minLength: 1. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_plan_id": string;
});
/**
 * Shape $ (Value): {@link CreateSubscriptionRequest}. The request body for: Create subscription.
 */
export type CreateSubscriptionRequest = {
    /**
     * Shape $ (Value): integer. UTC day of the month used for monthly and yearly billing. Applies
     * only to Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
     */
    "billing_anchor_day"?: number;
    /**
     * Shape $ (Value): {@link SubscriptionBillingScheduleRequest}. Who owns the billing schedule
     * when creating a subscription: Flint or an external system.
     */
    "billing_schedule"?: SubscriptionBillingScheduleRequest;
    /**
     * Shape $ (Value): {@link SubscriptionBillingStartRequest}. How billing begins. Send exactly
     * one closed tagged-union branch.
     */
    "billing_start": SubscriptionBillingStartRequest;
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id": string;
    /**
     * Shape $ (Value): {@link SubscriptionDeliveryRequest}. The delivery preference to set on a
     * subscription: delivery method, type, destination, and recipient.
     */
    "delivery"?: SubscriptionDeliveryRequest;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data for a new or replaced map. Omit it for
     * no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties:
     * 50.
     */
    "metadata"?: MetadataMap;
    /** Shape $ (Value): string. minLength: 1. */
    "payment_method_id"?: string;
    /**
     * Shape $ (Value): {@link SubscriptionServiceLocationRequest}. Where a subscription's service
     * is delivered: a saved customer address by ID, or a new address.
     */
    "service_location"?: SubscriptionServiceLocationRequest;
    /**
     * Shape $ (Value): {@link SubscriptionTermsRequest}. Subscription terms from either a
     * subscription plan or subscription offers, selected by `type`.
     */
    "terms": SubscriptionTermsRequest;
};
/**
 * Shape $ (Value): {@link CreateSubscriptionRequestInput}. The request body for: Create
 * subscription.
 */
export type CreateSubscriptionRequestInput = {
    /**
     * Shape $ (Value): integer. UTC day of the month used for monthly and yearly billing. Applies
     * only to Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
     */
    "billing_anchor_day"?: number;
    /**
     * Shape $ (Value): {@link SubscriptionBillingScheduleRequestInput}. Who owns the billing
     * schedule when creating a subscription: Flint or an external system.
     */
    "billing_schedule"?: SubscriptionBillingScheduleRequestInput;
    /**
     * Shape $ (Value): {@link SubscriptionBillingStartRequestInput}. How billing begins. Send
     * exactly one closed tagged-union branch.
     */
    "billing_start": SubscriptionBillingStartRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "customer_id": string;
    /**
     * Shape $ (Value): {@link SubscriptionDeliveryRequestInput}. The delivery preference to set on
     * a subscription: delivery method, type, destination, and recipient.
     */
    "delivery"?: SubscriptionDeliveryRequestInput;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be empty
     * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be
     * written through the public API. Caller-owned key-value data for a new or replaced map. Omit
     * it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values
     * are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
     * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Shape $ (Value): string. minLength: 1. */
    "payment_method_id"?: string;
    /**
     * Shape $ (Value): {@link SubscriptionServiceLocationRequestInput}. Where a subscription's
     * service is delivered: a saved customer address by ID, or a new address.
     */
    "service_location"?: SubscriptionServiceLocationRequestInput;
    /**
     * Shape $ (Value): {@link SubscriptionTermsRequestInput}. Subscription terms from either a
     * subscription plan or subscription offers, selected by `type`.
     */
    "terms": SubscriptionTermsRequestInput;
};
/**
 * Shape $ (Value): {@link CreateTaxRegistrationRequest}. Register a US state where the seller
 * collects tax.
 */
export type CreateTaxRegistrationRequest = {
    /**
     * Shape $ (Value): string. Country of registration. Only US is accepted. minLength: 2.
     * maxLength: 2. pattern: ^[A-Z]{2}$. Default: "US". Example: "US". Value enum: "US".
     */
    "country"?: "US" | (string & {});
    /**
     * Shape $ (Value): string or null. Last day the registration applies, inclusive. Must be on or
     * after start_date and today (UTC). Send null to clear the end date before the registration
     * has ended. Format: date. minLength: 1.
     */
    "end_date"?: string | null;
    /**
     * Shape $ (Value): string. First day the registration applies, inclusive. Flint checks it
     * against each sale's local date. Status and validation use the UTC date. May be up to 365
     * days in the future. Format: date. minLength: 1.
     */
    "start_date": string;
    /**
     * Shape $ (Value): string. US postal state code or DC. Value enum: "AL", "AK", "AZ", "AR",
     * "CA", "CO", "CT", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME",
     * "MD", "MA", "MI", "MN", "MS", "MO", "NE", "NV", "NJ", "NM", "NY", "NC", "ND", "OH", "OK",
     * "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY".
     */
    "state": "AL"
        | "AK"
        | "AZ"
        | "AR"
        | "CA"
        | "CO"
        | "CT"
        | "DC"
        | "FL"
        | "GA"
        | "HI"
        | "ID"
        | "IL"
        | "IN"
        | "IA"
        | "KS"
        | "KY"
        | "LA"
        | "ME"
        | "MD"
        | "MA"
        | "MI"
        | "MN"
        | "MS"
        | "MO"
        | "NE"
        | "NV"
        | "NJ"
        | "NM"
        | "NY"
        | "NC"
        | "ND"
        | "OH"
        | "OK"
        | "PA"
        | "RI"
        | "SC"
        | "SD"
        | "TN"
        | "TX"
        | "UT"
        | "VT"
        | "VA"
        | "WA"
        | "WV"
        | "WI"
        | "WY"
        | (string & {});
};
/**
 * Shape $ (Value): {@link CreateTaxRegistrationRequestInput}. Register a US state where the seller
 * collects tax.
 */
export type CreateTaxRegistrationRequestInput = {
    /**
     * Shape $ (Value): string. Country of registration. Only US is accepted. minLength: 2.
     * maxLength: 2. pattern: ^[A-Z]{2}$. Default: "US". Example: "US". Value enum: "US".
     */
    "country"?: "US";
    /**
     * Shape $ (Value): string or null. Last day the registration applies, inclusive. Must be on or
     * after start_date and today (UTC). Send null to clear the end date before the registration
     * has ended. Format: date. minLength: 1.
     */
    "end_date"?: string | null;
    /**
     * Shape $ (Value): string. Seller's tax registration number. Write-only; responses return only
     * its last four characters. minLength: 1. maxLength: 255.
     */
    "registration_number": string;
    /**
     * Shape $ (Value): string. First day the registration applies, inclusive. Flint checks it
     * against each sale's local date. Status and validation use the UTC date. May be up to 365
     * days in the future. Format: date. minLength: 1.
     */
    "start_date": string;
    /**
     * Shape $ (Value): string. US postal state code or DC. Value enum: "AL", "AK", "AZ", "AR",
     * "CA", "CO", "CT", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME",
     * "MD", "MA", "MI", "MN", "MS", "MO", "NE", "NV", "NJ", "NM", "NY", "NC", "ND", "OH", "OK",
     * "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY".
     */
    "state": "AL"
        | "AK"
        | "AZ"
        | "AR"
        | "CA"
        | "CO"
        | "CT"
        | "DC"
        | "FL"
        | "GA"
        | "HI"
        | "ID"
        | "IL"
        | "IN"
        | "IA"
        | "KS"
        | "KY"
        | "LA"
        | "ME"
        | "MD"
        | "MA"
        | "MI"
        | "MN"
        | "MS"
        | "MO"
        | "NE"
        | "NV"
        | "NJ"
        | "NM"
        | "NY"
        | "NC"
        | "ND"
        | "OH"
        | "OK"
        | "PA"
        | "RI"
        | "SC"
        | "SD"
        | "TN"
        | "TX"
        | "UT"
        | "VT"
        | "VA"
        | "WA"
        | "WV"
        | "WI"
        | "WY";
};
/**
 * Shape $ (Value): {@link CreateWebhookDeliveryRequest}. The request body for: Create webhook
 * delivery.
 */
export type CreateWebhookDeliveryRequest = {
    /** Shape $ (Value): string. Your note explaining this action. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
    /**
     * Shape $ (Value): string. Active endpoint that currently subscribes to the event. minLength:
     * 1.
     */
    "webhook_endpoint_id": string;
    /** Shape $ (Value): string. Retained webhook event to deliver. minLength: 1. */
    "webhook_event_id": string;
};
/**
 * Shape $ (Value): {@link CreateWebhookDeliveryRequestInput}. The request body for: Create webhook
 * delivery.
 */
export type CreateWebhookDeliveryRequestInput = CreateWebhookDeliveryRequest;
/**
 * Shape $ (Value): {@link CreateWebhookEndpointRequest}. The request body for: Create webhook
 * endpoint.
 */
export type CreateWebhookEndpointRequest = ({
    /**
     * Shape $ (Value): string. Set default to follow the merchant default, or a supported
     * YYYY-MM-DD version to pin this endpoint. Omission follows the merchant default. Null is not
     * accepted. minLength: 1.
     */
    "api_version"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /**
     * Shape $ (Value): Array of string. Event types to deliver. Send ["*"] for every type the
     * endpoint's event_sources deliver, including types added later; * must be the only entry and
     * is not available with installed_merchants. At least one entry is required. Use only current
     * event type names; previous and removed names are rejected. Stored subscriptions map previous
     * names permanently and drop removed names on read. See the [changelog](/docs/changelog).
     * minItems: 1. Shape $[] (Value): string. minLength: 1.
     */
    "enabled_events": Array<string>;
    /**
     * Shape $ (Value): Array of string. Event sources this endpoint receives. Defaults to
     * merchant. Use partner_app for app lifecycle events and installed_merchants for events from
     * merchants that installed the partner app. [] enum: "merchant", "partner_app",
     * "installed_merchants". Shape $[] (Value): string. Value enum: "merchant", "partner_app",
     * "installed_merchants".
     */
    "event_sources"?: Array<"merchant" | "partner_app" | "installed_merchants" | (string & {})>;
    /**
     * Shape $ (Value): Array of string. Modes of installed-merchant events this endpoint receives.
     * Required when event_sources includes installed_merchants and omitted otherwise. Partner app
     * lifecycle events are delivered regardless of these modes. minItems: 1. maxItems: 2.
     * uniqueItems: true. [] enum: "test", "live". Shape $[] (Value): string. Value enum: "test",
     * "live".
     */
    "installed_merchant_modes"?: Array<"test" | "live" | (string & {})>;
    /**
     * Shape $ (Value): string. Partner app that owns partner_app or installed_merchants event
     * sources. minLength: 1.
     */
    "partner_app_id"?: string;
    /**
     * Shape $ (Value): Array of {@link WebhookSigningMethod}. minItems: 1. uniqueItems: true.
     * Default: ["jwt"]. [] enum: "jwt", "hmac". Shape $[] (Value): {@link WebhookSigningMethod}.
     * jwt uses Flint's public JWKS. hmac uses a shared secret and Standard Webhooks v1. Value
     * enum: "jwt", "hmac".
     */
    "signing_methods"?: Array<WebhookSigningMethod>;
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "url": string;
});
/**
 * Shape $ (Value): {@link CreateWebhookEndpointRequestInput}. The request body for: Create webhook
 * endpoint.
 */
export type CreateWebhookEndpointRequestInput = ({
    /**
     * Shape $ (Value): string. Set default to follow the merchant default, or a supported
     * YYYY-MM-DD version to pin this endpoint. Omission follows the merchant default. Null is not
     * accepted. minLength: 1.
     */
    "api_version"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /**
     * Shape $ (Value): Array of string. Event types to deliver. Send ["*"] for every type the
     * endpoint's event_sources deliver, including types added later; * must be the only entry and
     * is not available with installed_merchants. At least one entry is required. Use only current
     * event type names; previous and removed names are rejected. Stored subscriptions map previous
     * names permanently and drop removed names on read. See the [changelog](/docs/changelog).
     * minItems: 1. Shape $[] (Value): string. minLength: 1.
     */
    "enabled_events": Array<string>;
    /**
     * Shape $ (Value): Array of string. Event sources this endpoint receives. Defaults to
     * merchant. Use partner_app for app lifecycle events and installed_merchants for events from
     * merchants that installed the partner app. [] enum: "merchant", "partner_app",
     * "installed_merchants". Shape $[] (Value): string. Value enum: "merchant", "partner_app",
     * "installed_merchants".
     */
    "event_sources"?: Array<"merchant" | "partner_app" | "installed_merchants">;
    /**
     * Shape $ (Value): Array of string. Modes of installed-merchant events this endpoint receives.
     * Required when event_sources includes installed_merchants and omitted otherwise. Partner app
     * lifecycle events are delivered regardless of these modes. minItems: 1. maxItems: 2.
     * uniqueItems: true. [] enum: "test", "live". Shape $[] (Value): string. Value enum: "test",
     * "live".
     */
    "installed_merchant_modes"?: Array<"test" | "live">;
    /**
     * Shape $ (Value): string. Partner app that owns partner_app or installed_merchants event
     * sources. minLength: 1.
     */
    "partner_app_id"?: string;
    /**
     * Shape $ (Value): Array of {@link WebhookSigningMethodInput}. minItems: 1. uniqueItems: true.
     * Default: ["jwt"]. [] enum: "jwt", "hmac". Shape $[] (Value): {@link
     * WebhookSigningMethodInput}. jwt uses Flint's public JWKS. hmac uses a shared secret and
     * Standard Webhooks v1. Value enum: "jwt", "hmac".
     */
    "signing_methods"?: Array<WebhookSigningMethodInput>;
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
    /** Shape $ (Value): string. minLength: 1. */
    "url": string;
});
/**
 * Shape $ (Value): {@link CreateWebhookTestEventRequest}. The request body for: Create webhook
 * test event.
 */
export type CreateWebhookTestEventRequest = {
    /**
     * Shape $ (Value): string. Current event type to send. merchant delivers merchant events;
     * partner_app delivers partner lifecycle events; installed_merchants delivers merchant events
     * permitted by the install read scopes. The event catalog lists event_sources for each type.
     * Value enum: "balance.updated", "balance_transaction.created", "balance_transaction.updated",
     * "bundle.archived", "bundle.created", "bundle.updated", "category.created",
     * "category.deleted", "category.updated", "checkout_session.closed",
     * "checkout_session.created", "checkout_session.expired", "checkout_session.invalidated",
     * "checkout_session.paid", "checkout_session.partially_paid", "credit_note.created",
     * "credit_note.issued", "credit_note.updated", "credit_note.voided",
     * "credit_note_allocation.created", "credit_note_allocation.reversed",
     * "custom_domain.archived", "custom_domain.updated", "customer.created", "customer.deleted",
     * "customer.updated", "customer_deletion_request.completed",
     * "customer_deletion_request.created", "customer_deletion_request.failed",
     * "customer_deletion_request.processing", "customer_deletion_request.rejected",
     * "delivery_location_set.activated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.deactivated",
     * "delivery_location_set.updated", "delivery_method.activated", "delivery_method.archived",
     * "delivery_method.created", "delivery_method.deactivated", "delivery_method.updated",
     * "delivery_profile.activated", "delivery_profile.archived", "delivery_profile.created",
     * "delivery_profile.deactivated", "delivery_profile.updated",
     * "delivery_rate_callback.activated", "delivery_rate_callback.archived",
     * "delivery_rate_callback.created", "delivery_rate_callback.deactivated",
     * "delivery_rate_callback.updated", "delivery_revocation.created",
     * "delivery_selection.committed", "delivery_zone.activated", "delivery_zone.archived",
     * "delivery_zone.created", "delivery_zone.deactivated", "delivery_zone.updated",
     * "dispute.created", "dispute.inquiry_closed", "dispute.lost", "dispute.needs_response",
     * "dispute.prevented", "dispute.updated", "dispute.won", "environment_grant.created",
     * "environment_grant.revoked", "fraud_warning.created", "fraud_warning.updated",
     * "fulfillment.canceled", "fulfillment.completed", "fulfillment.created",
     * "fulfillment.failed", "fulfillment.updated", "fulfillment_event.created",
     * "gift_card.created", "gift_card.updated", "gift_card_load.created",
     * "gift_card_load.updated", "gift_card_notification.created",
     * "gift_card_notification.updated", "gift_card_redemption.created",
     * "gift_card_redemption.updated", "gift_card_transaction.created", "inventory_count.applied",
     * "inventory_level.shortage_detected", "inventory_level.updated", "inventory_receipt.created",
     * "inventory_reservation.action_required", "inventory_reservation.at_risk",
     * "inventory_reservation.closed", "inventory_reservation.committed",
     * "inventory_reservation.consumed", "inventory_reservation.created",
     * "inventory_reservation.hold_expired", "inventory_reservation.released",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned",
     * "invoice.collection_block_resolved", "invoice.collection_blocked", "invoice.created",
     * "invoice.credited", "invoice.issue_failed", "invoice.issued", "invoice.late_fee_assessed",
     * "invoice.late_fee_due", "invoice.late_fee_waived", "invoice.marked_uncollectible",
     * "invoice.overdue", "invoice.paid", "invoice.partially_paid", "invoice.partially_refunded",
     * "invoice.refunded", "invoice.reminder_due", "invoice.reopened", "invoice.sent",
     * "invoice.updated", "invoice.voided", "invoice_delivery_attempt.failed",
     * "invoice_delivery_attempt.sent", "invoice_delivery_attempt.suppressed",
     * "invoice_manual_payment.created", "invoice_manual_payment.reversed",
     * "invoice_payment_attempt.canceled", "invoice_payment_attempt.expired",
     * "invoice_payment_attempt.failed", "invoice_payment_attempt.processing",
     * "invoice_payment_attempt.settled", "merchant.readiness_updated", "merchant.updated",
     * "merchant_billing_balance.updated", "merchant_billing_invoice.issued",
     * "merchant_billing_invoice.updated", "modifier_group.archived", "modifier_group.created",
     * "modifier_group.updated", "modifier_set.archived", "modifier_set.created",
     * "modifier_set.updated", "order.closed", "order.created",
     * "order.inventory_exception_created", "order.inventory_exception_resolved", "order.paid",
     * "order.partially_paid", "order.partially_refunded", "order.refunded", "order.updated",
     * "package.created", "package.updated", "partner_app_install.created",
     * "partner_app_install.permissions_updated", "partner_app_install.revoked",
     * "partner_app_install.updated", "payment_intent.canceled", "payment_intent.created",
     * "payment_intent.expired", "payment_intent.fulfillment_hold_updated",
     * "payment_intent.payment_failed", "payment_intent.processing",
     * "payment_intent.requires_action", "payment_intent.requires_capture",
     * "payment_intent.succeeded", "payment_intent.updated", "payment_link.created",
     * "payment_link.updated", "payment_method.activated", "payment_method.archived",
     * "payment_method.failed", "payment_review.closed", "payment_review.opened",
     * "payment_review.reopened", "payout.canceled", "payout.created", "payout.failed",
     * "payout.paid", "payout.reversed", "payout.updated", "payout_destination.archived",
     * "payout_destination.created", "payout_destination.disabled", "payout_destination.updated",
     * "payout_settings.updated", "product.archived", "product.created", "product.updated",
     * "product_variant.archived", "product_variant.created", "product_variant.updated",
     * "promotion.archived", "promotion.created", "promotion.updated", "promotion_code.archived",
     * "promotion_code.created", "promotion_code.updated", "refund.created", "refund.failed",
     * "refund.partially_succeeded", "refund.succeeded", "refund.updated", "report.failed",
     * "report.succeeded", "return.canceled", "return.completed", "return.created",
     * "return.decision_recorded", "return.reopened", "return.updated",
     * "return_disposition.created", "return_disposition.updated",
     * "return_inspection.acceptance_decided", "return_inspection.created",
     * "return_inspection.superseded", "return_receipt.created", "return_receipt.superseded",
     * "return_receipt.verified", "return_resolution.created", "return_resolution.updated",
     * "shipment.created", "shipment.updated", "subscription.activated", "subscription.canceled",
     * "subscription.cancellation_scheduled", "subscription.created", "subscription.cycle_skipped",
     * "subscription.delivery_action_required", "subscription.delivery_pause_upcoming",
     * "subscription.delivery_updated", "subscription.dunning_exhausted", "subscription.past_due",
     * "subscription.paused", "subscription.payment_succeeded", "subscription.plan_changed",
     * "subscription.reactivated", "subscription.renewal_upcoming", "subscription.resumed",
     * "subscription.trial_ending", "subscription.updated",
     * "subscription_delivery_migration.completed", "subscription_payment_retry.created",
     * "subscription_payment_retry.failed", "subscription_payment_retry.succeeded",
     * "tax_connection.updated".
     */
    "event_type": "balance.updated"
        | "balance_transaction.created"
        | "balance_transaction.updated"
        | "bundle.archived"
        | "bundle.created"
        | "bundle.updated"
        | "category.created"
        | "category.deleted"
        | "category.updated"
        | "checkout_session.closed"
        | "checkout_session.created"
        | "checkout_session.expired"
        | "checkout_session.invalidated"
        | "checkout_session.paid"
        | "checkout_session.partially_paid"
        | "credit_note.created"
        | "credit_note.issued"
        | "credit_note.updated"
        | "credit_note.voided"
        | "credit_note_allocation.created"
        | "credit_note_allocation.reversed"
        | "custom_domain.archived"
        | "custom_domain.updated"
        | "customer.created"
        | "customer.deleted"
        | "customer.updated"
        | "customer_deletion_request.completed"
        | "customer_deletion_request.created"
        | "customer_deletion_request.failed"
        | "customer_deletion_request.processing"
        | "customer_deletion_request.rejected"
        | "delivery_location_set.activated"
        | "delivery_location_set.archived"
        | "delivery_location_set.created"
        | "delivery_location_set.deactivated"
        | "delivery_location_set.updated"
        | "delivery_method.activated"
        | "delivery_method.archived"
        | "delivery_method.created"
        | "delivery_method.deactivated"
        | "delivery_method.updated"
        | "delivery_profile.activated"
        | "delivery_profile.archived"
        | "delivery_profile.created"
        | "delivery_profile.deactivated"
        | "delivery_profile.updated"
        | "delivery_rate_callback.activated"
        | "delivery_rate_callback.archived"
        | "delivery_rate_callback.created"
        | "delivery_rate_callback.deactivated"
        | "delivery_rate_callback.updated"
        | "delivery_revocation.created"
        | "delivery_selection.committed"
        | "delivery_zone.activated"
        | "delivery_zone.archived"
        | "delivery_zone.created"
        | "delivery_zone.deactivated"
        | "delivery_zone.updated"
        | "dispute.created"
        | "dispute.inquiry_closed"
        | "dispute.lost"
        | "dispute.needs_response"
        | "dispute.prevented"
        | "dispute.updated"
        | "dispute.won"
        | "environment_grant.created"
        | "environment_grant.revoked"
        | "fraud_warning.created"
        | "fraud_warning.updated"
        | "fulfillment.canceled"
        | "fulfillment.completed"
        | "fulfillment.created"
        | "fulfillment.failed"
        | "fulfillment.updated"
        | "fulfillment_event.created"
        | "gift_card.created"
        | "gift_card.updated"
        | "gift_card_load.created"
        | "gift_card_load.updated"
        | "gift_card_notification.created"
        | "gift_card_notification.updated"
        | "gift_card_redemption.created"
        | "gift_card_redemption.updated"
        | "gift_card_transaction.created"
        | "inventory_count.applied"
        | "inventory_level.shortage_detected"
        | "inventory_level.updated"
        | "inventory_receipt.created"
        | "inventory_reservation.action_required"
        | "inventory_reservation.at_risk"
        | "inventory_reservation.closed"
        | "inventory_reservation.committed"
        | "inventory_reservation.consumed"
        | "inventory_reservation.created"
        | "inventory_reservation.hold_expired"
        | "inventory_reservation.released"
        | "inventory_transfer.closed"
        | "inventory_transfer.departed"
        | "inventory_transfer.lost"
        | "inventory_transfer.received"
        | "inventory_transfer.returned"
        | "invoice.collection_block_resolved"
        | "invoice.collection_blocked"
        | "invoice.created"
        | "invoice.credited"
        | "invoice.issue_failed"
        | "invoice.issued"
        | "invoice.late_fee_assessed"
        | "invoice.late_fee_due"
        | "invoice.late_fee_waived"
        | "invoice.marked_uncollectible"
        | "invoice.overdue"
        | "invoice.paid"
        | "invoice.partially_paid"
        | "invoice.partially_refunded"
        | "invoice.refunded"
        | "invoice.reminder_due"
        | "invoice.reopened"
        | "invoice.sent"
        | "invoice.updated"
        | "invoice.voided"
        | "invoice_delivery_attempt.failed"
        | "invoice_delivery_attempt.sent"
        | "invoice_delivery_attempt.suppressed"
        | "invoice_manual_payment.created"
        | "invoice_manual_payment.reversed"
        | "invoice_payment_attempt.canceled"
        | "invoice_payment_attempt.expired"
        | "invoice_payment_attempt.failed"
        | "invoice_payment_attempt.processing"
        | "invoice_payment_attempt.settled"
        | "merchant.readiness_updated"
        | "merchant.updated"
        | "merchant_billing_balance.updated"
        | "merchant_billing_invoice.issued"
        | "merchant_billing_invoice.updated"
        | "modifier_group.archived"
        | "modifier_group.created"
        | "modifier_group.updated"
        | "modifier_set.archived"
        | "modifier_set.created"
        | "modifier_set.updated"
        | "order.closed"
        | "order.created"
        | "order.inventory_exception_created"
        | "order.inventory_exception_resolved"
        | "order.paid"
        | "order.partially_paid"
        | "order.partially_refunded"
        | "order.refunded"
        | "order.updated"
        | "package.created"
        | "package.updated"
        | "partner_app_install.created"
        | "partner_app_install.permissions_updated"
        | "partner_app_install.revoked"
        | "partner_app_install.updated"
        | "payment_intent.canceled"
        | "payment_intent.created"
        | "payment_intent.expired"
        | "payment_intent.fulfillment_hold_updated"
        | "payment_intent.payment_failed"
        | "payment_intent.processing"
        | "payment_intent.requires_action"
        | "payment_intent.requires_capture"
        | "payment_intent.succeeded"
        | "payment_intent.updated"
        | "payment_link.created"
        | "payment_link.updated"
        | "payment_method.activated"
        | "payment_method.archived"
        | "payment_method.failed"
        | "payment_review.closed"
        | "payment_review.opened"
        | "payment_review.reopened"
        | "payout.canceled"
        | "payout.created"
        | "payout.failed"
        | "payout.paid"
        | "payout.reversed"
        | "payout.updated"
        | "payout_destination.archived"
        | "payout_destination.created"
        | "payout_destination.disabled"
        | "payout_destination.updated"
        | "payout_settings.updated"
        | "product.archived"
        | "product.created"
        | "product.updated"
        | "product_variant.archived"
        | "product_variant.created"
        | "product_variant.updated"
        | "promotion.archived"
        | "promotion.created"
        | "promotion.updated"
        | "promotion_code.archived"
        | "promotion_code.created"
        | "promotion_code.updated"
        | "refund.created"
        | "refund.failed"
        | "refund.partially_succeeded"
        | "refund.succeeded"
        | "refund.updated"
        | "report.failed"
        | "report.succeeded"
        | "return.canceled"
        | "return.completed"
        | "return.created"
        | "return.decision_recorded"
        | "return.reopened"
        | "return.updated"
        | "return_disposition.created"
        | "return_disposition.updated"
        | "return_inspection.acceptance_decided"
        | "return_inspection.created"
        | "return_inspection.superseded"
        | "return_receipt.created"
        | "return_receipt.superseded"
        | "return_receipt.verified"
        | "return_resolution.created"
        | "return_resolution.updated"
        | "shipment.created"
        | "shipment.updated"
        | "subscription.activated"
        | "subscription.canceled"
        | "subscription.cancellation_scheduled"
        | "subscription.created"
        | "subscription.cycle_skipped"
        | "subscription.delivery_action_required"
        | "subscription.delivery_pause_upcoming"
        | "subscription.delivery_updated"
        | "subscription.dunning_exhausted"
        | "subscription.past_due"
        | "subscription.paused"
        | "subscription.payment_succeeded"
        | "subscription.plan_changed"
        | "subscription.reactivated"
        | "subscription.renewal_upcoming"
        | "subscription.resumed"
        | "subscription.trial_ending"
        | "subscription.updated"
        | "subscription_delivery_migration.completed"
        | "subscription_payment_retry.created"
        | "subscription_payment_retry.failed"
        | "subscription_payment_retry.succeeded"
        | "tax_connection.updated"
        | (string & {});
};
/**
 * Shape $ (Value): {@link CreateWebhookTestEventRequestInput}. The request body for: Create
 * webhook test event.
 */
export type CreateWebhookTestEventRequestInput = {
    /**
     * Shape $ (Value): string. Current event type to send. merchant delivers merchant events;
     * partner_app delivers partner lifecycle events; installed_merchants delivers merchant events
     * permitted by the install read scopes. The event catalog lists event_sources for each type.
     * Value enum: "balance.updated", "balance_transaction.created", "balance_transaction.updated",
     * "bundle.archived", "bundle.created", "bundle.updated", "category.created",
     * "category.deleted", "category.updated", "checkout_session.closed",
     * "checkout_session.created", "checkout_session.expired", "checkout_session.invalidated",
     * "checkout_session.paid", "checkout_session.partially_paid", "credit_note.created",
     * "credit_note.issued", "credit_note.updated", "credit_note.voided",
     * "credit_note_allocation.created", "credit_note_allocation.reversed",
     * "custom_domain.archived", "custom_domain.updated", "customer.created", "customer.deleted",
     * "customer.updated", "customer_deletion_request.completed",
     * "customer_deletion_request.created", "customer_deletion_request.failed",
     * "customer_deletion_request.processing", "customer_deletion_request.rejected",
     * "delivery_location_set.activated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.deactivated",
     * "delivery_location_set.updated", "delivery_method.activated", "delivery_method.archived",
     * "delivery_method.created", "delivery_method.deactivated", "delivery_method.updated",
     * "delivery_profile.activated", "delivery_profile.archived", "delivery_profile.created",
     * "delivery_profile.deactivated", "delivery_profile.updated",
     * "delivery_rate_callback.activated", "delivery_rate_callback.archived",
     * "delivery_rate_callback.created", "delivery_rate_callback.deactivated",
     * "delivery_rate_callback.updated", "delivery_revocation.created",
     * "delivery_selection.committed", "delivery_zone.activated", "delivery_zone.archived",
     * "delivery_zone.created", "delivery_zone.deactivated", "delivery_zone.updated",
     * "dispute.created", "dispute.inquiry_closed", "dispute.lost", "dispute.needs_response",
     * "dispute.prevented", "dispute.updated", "dispute.won", "environment_grant.created",
     * "environment_grant.revoked", "fraud_warning.created", "fraud_warning.updated",
     * "fulfillment.canceled", "fulfillment.completed", "fulfillment.created",
     * "fulfillment.failed", "fulfillment.updated", "fulfillment_event.created",
     * "gift_card.created", "gift_card.updated", "gift_card_load.created",
     * "gift_card_load.updated", "gift_card_notification.created",
     * "gift_card_notification.updated", "gift_card_redemption.created",
     * "gift_card_redemption.updated", "gift_card_transaction.created", "inventory_count.applied",
     * "inventory_level.shortage_detected", "inventory_level.updated", "inventory_receipt.created",
     * "inventory_reservation.action_required", "inventory_reservation.at_risk",
     * "inventory_reservation.closed", "inventory_reservation.committed",
     * "inventory_reservation.consumed", "inventory_reservation.created",
     * "inventory_reservation.hold_expired", "inventory_reservation.released",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned",
     * "invoice.collection_block_resolved", "invoice.collection_blocked", "invoice.created",
     * "invoice.credited", "invoice.issue_failed", "invoice.issued", "invoice.late_fee_assessed",
     * "invoice.late_fee_due", "invoice.late_fee_waived", "invoice.marked_uncollectible",
     * "invoice.overdue", "invoice.paid", "invoice.partially_paid", "invoice.partially_refunded",
     * "invoice.refunded", "invoice.reminder_due", "invoice.reopened", "invoice.sent",
     * "invoice.updated", "invoice.voided", "invoice_delivery_attempt.failed",
     * "invoice_delivery_attempt.sent", "invoice_delivery_attempt.suppressed",
     * "invoice_manual_payment.created", "invoice_manual_payment.reversed",
     * "invoice_payment_attempt.canceled", "invoice_payment_attempt.expired",
     * "invoice_payment_attempt.failed", "invoice_payment_attempt.processing",
     * "invoice_payment_attempt.settled", "merchant.readiness_updated", "merchant.updated",
     * "merchant_billing_balance.updated", "merchant_billing_invoice.issued",
     * "merchant_billing_invoice.updated", "modifier_group.archived", "modifier_group.created",
     * "modifier_group.updated", "modifier_set.archived", "modifier_set.created",
     * "modifier_set.updated", "order.closed", "order.created",
     * "order.inventory_exception_created", "order.inventory_exception_resolved", "order.paid",
     * "order.partially_paid", "order.partially_refunded", "order.refunded", "order.updated",
     * "package.created", "package.updated", "partner_app_install.created",
     * "partner_app_install.permissions_updated", "partner_app_install.revoked",
     * "partner_app_install.updated", "payment_intent.canceled", "payment_intent.created",
     * "payment_intent.expired", "payment_intent.fulfillment_hold_updated",
     * "payment_intent.payment_failed", "payment_intent.processing",
     * "payment_intent.requires_action", "payment_intent.requires_capture",
     * "payment_intent.succeeded", "payment_intent.updated", "payment_link.created",
     * "payment_link.updated", "payment_method.activated", "payment_method.archived",
     * "payment_method.failed", "payment_review.closed", "payment_review.opened",
     * "payment_review.reopened", "payout.canceled", "payout.created", "payout.failed",
     * "payout.paid", "payout.reversed", "payout.updated", "payout_destination.archived",
     * "payout_destination.created", "payout_destination.disabled", "payout_destination.updated",
     * "payout_settings.updated", "product.archived", "product.created", "product.updated",
     * "product_variant.archived", "product_variant.created", "product_variant.updated",
     * "promotion.archived", "promotion.created", "promotion.updated", "promotion_code.archived",
     * "promotion_code.created", "promotion_code.updated", "refund.created", "refund.failed",
     * "refund.partially_succeeded", "refund.succeeded", "refund.updated", "report.failed",
     * "report.succeeded", "return.canceled", "return.completed", "return.created",
     * "return.decision_recorded", "return.reopened", "return.updated",
     * "return_disposition.created", "return_disposition.updated",
     * "return_inspection.acceptance_decided", "return_inspection.created",
     * "return_inspection.superseded", "return_receipt.created", "return_receipt.superseded",
     * "return_receipt.verified", "return_resolution.created", "return_resolution.updated",
     * "shipment.created", "shipment.updated", "subscription.activated", "subscription.canceled",
     * "subscription.cancellation_scheduled", "subscription.created", "subscription.cycle_skipped",
     * "subscription.delivery_action_required", "subscription.delivery_pause_upcoming",
     * "subscription.delivery_updated", "subscription.dunning_exhausted", "subscription.past_due",
     * "subscription.paused", "subscription.payment_succeeded", "subscription.plan_changed",
     * "subscription.reactivated", "subscription.renewal_upcoming", "subscription.resumed",
     * "subscription.trial_ending", "subscription.updated",
     * "subscription_delivery_migration.completed", "subscription_payment_retry.created",
     * "subscription_payment_retry.failed", "subscription_payment_retry.succeeded",
     * "tax_connection.updated".
     */
    "event_type": "balance.updated"
        | "balance_transaction.created"
        | "balance_transaction.updated"
        | "bundle.archived"
        | "bundle.created"
        | "bundle.updated"
        | "category.created"
        | "category.deleted"
        | "category.updated"
        | "checkout_session.closed"
        | "checkout_session.created"
        | "checkout_session.expired"
        | "checkout_session.invalidated"
        | "checkout_session.paid"
        | "checkout_session.partially_paid"
        | "credit_note.created"
        | "credit_note.issued"
        | "credit_note.updated"
        | "credit_note.voided"
        | "credit_note_allocation.created"
        | "credit_note_allocation.reversed"
        | "custom_domain.archived"
        | "custom_domain.updated"
        | "customer.created"
        | "customer.deleted"
        | "customer.updated"
        | "customer_deletion_request.completed"
        | "customer_deletion_request.created"
        | "customer_deletion_request.failed"
        | "customer_deletion_request.processing"
        | "customer_deletion_request.rejected"
        | "delivery_location_set.activated"
        | "delivery_location_set.archived"
        | "delivery_location_set.created"
        | "delivery_location_set.deactivated"
        | "delivery_location_set.updated"
        | "delivery_method.activated"
        | "delivery_method.archived"
        | "delivery_method.created"
        | "delivery_method.deactivated"
        | "delivery_method.updated"
        | "delivery_profile.activated"
        | "delivery_profile.archived"
        | "delivery_profile.created"
        | "delivery_profile.deactivated"
        | "delivery_profile.updated"
        | "delivery_rate_callback.activated"
        | "delivery_rate_callback.archived"
        | "delivery_rate_callback.created"
        | "delivery_rate_callback.deactivated"
        | "delivery_rate_callback.updated"
        | "delivery_revocation.created"
        | "delivery_selection.committed"
        | "delivery_zone.activated"
        | "delivery_zone.archived"
        | "delivery_zone.created"
        | "delivery_zone.deactivated"
        | "delivery_zone.updated"
        | "dispute.created"
        | "dispute.inquiry_closed"
        | "dispute.lost"
        | "dispute.needs_response"
        | "dispute.prevented"
        | "dispute.updated"
        | "dispute.won"
        | "environment_grant.created"
        | "environment_grant.revoked"
        | "fraud_warning.created"
        | "fraud_warning.updated"
        | "fulfillment.canceled"
        | "fulfillment.completed"
        | "fulfillment.created"
        | "fulfillment.failed"
        | "fulfillment.updated"
        | "fulfillment_event.created"
        | "gift_card.created"
        | "gift_card.updated"
        | "gift_card_load.created"
        | "gift_card_load.updated"
        | "gift_card_notification.created"
        | "gift_card_notification.updated"
        | "gift_card_redemption.created"
        | "gift_card_redemption.updated"
        | "gift_card_transaction.created"
        | "inventory_count.applied"
        | "inventory_level.shortage_detected"
        | "inventory_level.updated"
        | "inventory_receipt.created"
        | "inventory_reservation.action_required"
        | "inventory_reservation.at_risk"
        | "inventory_reservation.closed"
        | "inventory_reservation.committed"
        | "inventory_reservation.consumed"
        | "inventory_reservation.created"
        | "inventory_reservation.hold_expired"
        | "inventory_reservation.released"
        | "inventory_transfer.closed"
        | "inventory_transfer.departed"
        | "inventory_transfer.lost"
        | "inventory_transfer.received"
        | "inventory_transfer.returned"
        | "invoice.collection_block_resolved"
        | "invoice.collection_blocked"
        | "invoice.created"
        | "invoice.credited"
        | "invoice.issue_failed"
        | "invoice.issued"
        | "invoice.late_fee_assessed"
        | "invoice.late_fee_due"
        | "invoice.late_fee_waived"
        | "invoice.marked_uncollectible"
        | "invoice.overdue"
        | "invoice.paid"
        | "invoice.partially_paid"
        | "invoice.partially_refunded"
        | "invoice.refunded"
        | "invoice.reminder_due"
        | "invoice.reopened"
        | "invoice.sent"
        | "invoice.updated"
        | "invoice.voided"
        | "invoice_delivery_attempt.failed"
        | "invoice_delivery_attempt.sent"
        | "invoice_delivery_attempt.suppressed"
        | "invoice_manual_payment.created"
        | "invoice_manual_payment.reversed"
        | "invoice_payment_attempt.canceled"
        | "invoice_payment_attempt.expired"
        | "invoice_payment_attempt.failed"
        | "invoice_payment_attempt.processing"
        | "invoice_payment_attempt.settled"
        | "merchant.readiness_updated"
        | "merchant.updated"
        | "merchant_billing_balance.updated"
        | "merchant_billing_invoice.issued"
        | "merchant_billing_invoice.updated"
        | "modifier_group.archived"
        | "modifier_group.created"
        | "modifier_group.updated"
        | "modifier_set.archived"
        | "modifier_set.created"
        | "modifier_set.updated"
        | "order.closed"
        | "order.created"
        | "order.inventory_exception_created"
        | "order.inventory_exception_resolved"
        | "order.paid"
        | "order.partially_paid"
        | "order.partially_refunded"
        | "order.refunded"
        | "order.updated"
        | "package.created"
        | "package.updated"
        | "partner_app_install.created"
        | "partner_app_install.permissions_updated"
        | "partner_app_install.revoked"
        | "partner_app_install.updated"
        | "payment_intent.canceled"
        | "payment_intent.created"
        | "payment_intent.expired"
        | "payment_intent.fulfillment_hold_updated"
        | "payment_intent.payment_failed"
        | "payment_intent.processing"
        | "payment_intent.requires_action"
        | "payment_intent.requires_capture"
        | "payment_intent.succeeded"
        | "payment_intent.updated"
        | "payment_link.created"
        | "payment_link.updated"
        | "payment_method.activated"
        | "payment_method.archived"
        | "payment_method.failed"
        | "payment_review.closed"
        | "payment_review.opened"
        | "payment_review.reopened"
        | "payout.canceled"
        | "payout.created"
        | "payout.failed"
        | "payout.paid"
        | "payout.reversed"
        | "payout.updated"
        | "payout_destination.archived"
        | "payout_destination.created"
        | "payout_destination.disabled"
        | "payout_destination.updated"
        | "payout_settings.updated"
        | "product.archived"
        | "product.created"
        | "product.updated"
        | "product_variant.archived"
        | "product_variant.created"
        | "product_variant.updated"
        | "promotion.archived"
        | "promotion.created"
        | "promotion.updated"
        | "promotion_code.archived"
        | "promotion_code.created"
        | "promotion_code.updated"
        | "refund.created"
        | "refund.failed"
        | "refund.partially_succeeded"
        | "refund.succeeded"
        | "refund.updated"
        | "report.failed"
        | "report.succeeded"
        | "return.canceled"
        | "return.completed"
        | "return.created"
        | "return.decision_recorded"
        | "return.reopened"
        | "return.updated"
        | "return_disposition.created"
        | "return_disposition.updated"
        | "return_inspection.acceptance_decided"
        | "return_inspection.created"
        | "return_inspection.superseded"
        | "return_receipt.created"
        | "return_receipt.superseded"
        | "return_receipt.verified"
        | "return_resolution.created"
        | "return_resolution.updated"
        | "shipment.created"
        | "shipment.updated"
        | "subscription.activated"
        | "subscription.canceled"
        | "subscription.cancellation_scheduled"
        | "subscription.created"
        | "subscription.cycle_skipped"
        | "subscription.delivery_action_required"
        | "subscription.delivery_pause_upcoming"
        | "subscription.delivery_updated"
        | "subscription.dunning_exhausted"
        | "subscription.past_due"
        | "subscription.paused"
        | "subscription.payment_succeeded"
        | "subscription.plan_changed"
        | "subscription.reactivated"
        | "subscription.renewal_upcoming"
        | "subscription.resumed"
        | "subscription.trial_ending"
        | "subscription.updated"
        | "subscription_delivery_migration.completed"
        | "subscription_payment_retry.created"
        | "subscription_payment_retry.failed"
        | "subscription_payment_retry.succeeded"
        | "tax_connection.updated";
};
/**
 * Shape $ (Value): {@link CreateWorkloadIdentityRequest}. The request body for: Create a workload
 * identity.
 */
export type CreateWorkloadIdentityRequest = {
    /**
     * Shape $ (Value): string. Immutable token audience. Defaults to Flint's configured issuer URL
     * when omitted. minLength: 1. maxLength: 255.
     */
    "audience"?: string;
    /**
     * Shape $ (Value): Array of {@link WorkloadIdentityClaimConditionRequest}. Bounded value
     * array, at most 10. Defaults to []. Any glob requires an exact claim condition; shared
     * issuers require tenant pinning. maxItems: 10. uniqueItems: true. Shape $[] (Value): {@link
     * WorkloadIdentityClaimConditionRequest}. A condition to match one top-level scalar claim in
     * the workload's identity token. Omitted match defaults to exact.
     */
    "claim_conditions"?: Array<WorkloadIdentityClaimConditionRequest>;
    /**
     * Shape $ (Value): string. Immutable public HTTPS issuer with a DNS host, optional port 443,
     * and no userinfo, query, or fragment. Compared exactly. minLength: 1. maxLength: 255.
     */
    "issuer": string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "name": string;
    /**
     * Shape $ (Value): Array of string. Complete scope set to grant. Machine callers may grant
     * only scopes they hold in the same environment. [] enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". Shape $[] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "scopes": Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.organizations.read"
        | "accounts.organizations.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.allocation.write"
        | "commerce.inventory.policies.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.policies.write"
        | "commerce.returns.read"
        | "commerce.returns.reasons.write"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.partner_apps.read"
        | "developer.partner_apps.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.sandboxes.read"
        | "developer.sandboxes.write"
        | "developer.test_clocks.read"
        | "developer.test_clocks.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write"
        | (string & {})>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 1024. */
    "subject": string;
    /** Shape $ (Value): string. Default: "exact". Value enum: "exact", "glob". */
    "subject_match"?: "exact" | "glob" | (string & {});
};
