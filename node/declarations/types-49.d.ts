import type { MoneyValue, MoneyValueInput } from './types-31.js';
import type { RiskPredicateNode, RiskPredicateNodeInput } from './types-43.js';
import type { BrandingSettingsRequest, BrandingSettingsRequestInput } from './types-0.js';
import type { CheckoutSettings, CheckoutSettingsInput } from './types-4.js';
import type {
    CustomerAccountSettings,
    CustomerEmailDeliverySettings,
    CustomerAccountSettingsInput,
    CustomerEmailDeliverySettingsInput
} from './types-10.js';
import type { FulfillmentSettings, FulfillmentSettingsInput } from './types-17.js';
import type {
    InventorySettings,
    InventorySettingsInput,
    InventoryRoutingSourceRequest,
    InventoryRoutingSourceRequestInput
} from './types-25.js';
import type {
    InvoiceSettingsPatch,
    LegalSettingsRequest,
    InvoiceSettingsPatchInput,
    LegalSettingsRequestInput,
    KnownWebhookEvent
} from './types-28.js';
import type { PaymentLimitSettingsPatch, PaymentLimitSettingsPatchInput } from './types-35.js';
import type { PromotionSettings, PromotionSettingsInput } from './types-38.js';
import type { ReceiptSettingsRequest, ReceiptSettingsRequestInput } from './types-39.js';
import type {
    SubscriptionSettings,
    TaxIdentityPatch,
    TaxSettingsRequest,
    SubscriptionSettingsInput,
    TaxIdentityPatchInput,
    TaxSettingsRequestInput
} from './types-46.js';
import type { TippingSettingsPatch, TippingSettingsPatchInput } from './types-47.js';
import type {
    SubscriptionIntervalOption,
    SubscriptionIntervalOptionInput,
    SubscriptionDeliveryRequest,
    SubscriptionDeliveryRequestInput
} from './types-45.js';
import type {
    OrderLineItemModifierRequest,
    OrderLineItemTax,
    OrderLineItemModifierRequestInput,
    OrderLineItemTaxInput
} from './types-32.js';
import type { ImageRequest, ImageRequestInput } from './types-19.js';
import type {
    SubscriptionBillingScheduleUpdateRequest,
    SubscriptionBillingScheduleUpdateRequestInput,
    Shipment
} from './types-44.js';
import type { WorkloadIdentityClaimConditionRequest, WorkloadIdentityClaimConditionRequestInput } from './types-61.js';
import type { ResponseMeta } from './types-40.js';
import type { Package } from './types-34.js';
import type { InputValue } from '../runtime.js';
import type { CreateWebhookDeliveryRequestInput } from './types-9.js';
/** Shape $ (Value): {@link UpdateRefundRequest}. The request body for: Update refund. */
export type UpdateRefundRequest = {
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
};
/** Shape $ (Value): {@link UpdateRefundRequestInput}. The request body for: Update refund. */
export type UpdateRefundRequestInput = UpdateRefundRequest;
/**
 * Shape $ (Value): {@link UpdateReturnLineItemRequest}. The request body for: Update return line
 * item.
 */
export type UpdateReturnLineItemRequest = {
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "buyer_note"?: string | null;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "requested_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Send null to clear it. Value enum: "refund", "exchange",
     * "replacement", "no_monetary_action", null.
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | null | (string & {}) | null;
    /** Shape $ (Value): string. minLength: 1. */
    "return_reason_id"?: string;
};
/**
 * Shape $ (Value): {@link UpdateReturnLineItemRequestInput}. The request body for: Update return
 * line item.
 */
export type UpdateReturnLineItemRequestInput = {
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "buyer_note"?: string | null;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "requested_quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Send null to clear it. Value enum: "refund", "exchange",
     * "replacement", "no_monetary_action", null.
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | null;
    /** Shape $ (Value): string. minLength: 1. */
    "return_reason_id"?: string;
};
/**
 * Shape $ (Value): {@link UpdateReturnPolicyRequest}. The request body for: Update return policy.
 */
export type UpdateReturnPolicyRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
};
/**
 * Shape $ (Value): {@link UpdateReturnPolicyRequestInput}. The request body for: Update return
 * policy.
 */
export type UpdateReturnPolicyRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
};
/**
 * Shape $ (Value): {@link UpdateReturnReasonRequest}. The request body for: Update return reason.
 */
export type UpdateReturnReasonRequest = ({
    /**
     * Shape $ (Value): Array of string. Catalog category handles this reason applies to. A reason
     * with categories is suggested, and accepted from a customer session, only for order lines
     * whose product is in one of them. A reason with no categories applies to every line. Not
     * product types or tags: use handles from GET /v1/categories. Requires expected_version. Shape
     * $[] (Value): string. minLength: 1.
     */
    "category_handles"?: Array<string>;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "description"?: string | null;
    /**
     * Shape $ (Value): integer string. Required when any of these fields is present:
     * category_handles. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /** Shape $ (Value): boolean. */
    "is_note_required"?: boolean;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): string. Set active to offer the reason or inactive to stop offering it. To
     * archive a merchant reason, use DELETE. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
});
/**
 * Shape $ (Value): {@link UpdateReturnReasonRequestInput}. The request body for: Update return
 * reason.
 */
export type UpdateReturnReasonRequestInput = ({
    /**
     * Shape $ (Value): Array of string. Catalog category handles this reason applies to. A reason
     * with categories is suggested, and accepted from a customer session, only for order lines
     * whose product is in one of them. A reason with no categories applies to every line. Not
     * product types or tags: use handles from GET /v1/categories. Requires expected_version. Shape
     * $[] (Value): string. minLength: 1.
     */
    "category_handles"?: Array<string>;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "description"?: string | null;
    /**
     * Shape $ (Value): integer string. Required when any of these fields is present:
     * category_handles. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /** Shape $ (Value): boolean. */
    "is_note_required"?: boolean;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): string. Set active to offer the reason or inactive to stop offering it. To
     * archive a merchant reason, use DELETE. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
});
/**
 * Shape $ (Value): {@link UpdateReturnReplacementLineItemRequest}. A replacement item to keep or
 * add when updating a return resolution. Include `return_replacement_line_item_id` to keep an
 * existing one.
 */
export type UpdateReturnReplacementLineItemRequest = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "return_replacement_line_item_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "sku"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & ((({
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
}))
    | (({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
}))
    | (({
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
}))
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link UpdateReturnReplacementLineItemRequestInput}. A replacement item to keep
 * or add when updating a return resolution. Include `return_replacement_line_item_id` to keep an
 * existing one.
 */
export type UpdateReturnReplacementLineItemRequestInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "return_replacement_line_item_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "sku"?: string;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & ((({
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
})
    & (({
    "bundle_id"?: never;
}) & ({
    "name"?: never;
})))
    | (({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
})
    & (({
    "variant_id"?: never;
}) & ({
    "name"?: never;
})))
    | (({
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
})
    & (({
    "variant_id"?: never;
}) & ({
    "bundle_id"?: never;
}))));
/** Shape $ (Value): {@link UpdateReturnRequest}. The request body for: Update return. */
export type UpdateReturnRequest = {
    /**
     * Shape $ (Value): integer string. Optional version of the Return. A stale value returns
     * RETURN_VERSION_CONFLICT with the current Return version. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
};
/** Shape $ (Value): {@link UpdateReturnRequestInput}. The request body for: Update return. */
export type UpdateReturnRequestInput = {
    /**
     * Shape $ (Value): integer string. Optional version of the Return. A stale value returns
     * RETURN_VERSION_CONFLICT with the current Return version. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
};
/**
 * Shape $ (Value): {@link UpdateReturnResolutionAdjustmentRequest}. A fee or credit to keep or add
 * when updating a return resolution. Include `return_resolution_adjustment_id` to update an
 * existing one.
 */
export type UpdateReturnResolutionAdjustmentRequest = {
    /**
     * Shape $ (Value): string. Value enum: "return_shipping_fee", "restocking_fee", "other_fee",
     * "goodwill_credit", "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "applied_amount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "assessed_amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. Value enum: "return_policy", "inspection_result",
     * "return_shipping_cost", "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id"?: string;
    /**
     * Shape $ (Value): string. Keep this member ID when updating an existing adjustment. Omit it
     * to create a new adjustment. minLength: 1.
     */
    "return_resolution_adjustment_id"?: string;
    /** Shape $ (Value): string.  Value enum: "applied", "waived". */
    "status"?: "applied" | "waived" | (string & {});
    /** Shape $ (Value): string.  Value enum: "deduction", "credit". */
    "value_effect": "deduction" | "credit" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "policy_override", "merchant_review",
     * "customer_service", "other".
     */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "waiver_reason_message"?: string;
};
/**
 * Shape $ (Value): {@link UpdateReturnResolutionAdjustmentRequestInput}. A fee or credit to keep
 * or add when updating a return resolution. Include `return_resolution_adjustment_id` to update an
 * existing one.
 */
export type UpdateReturnResolutionAdjustmentRequestInput = {
    /**
     * Shape $ (Value): string. Value enum: "return_shipping_fee", "restocking_fee", "other_fee",
     * "goodwill_credit", "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "applied_amount_money": MoneyValueInput;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "assessed_amount_money": MoneyValueInput;
    /**
     * Shape $ (Value): string. Value enum: "return_policy", "inspection_result",
     * "return_shipping_cost", "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id"?: string;
    /**
     * Shape $ (Value): string. Keep this member ID when updating an existing adjustment. Omit it
     * to create a new adjustment. minLength: 1.
     */
    "return_resolution_adjustment_id"?: string;
    /** Shape $ (Value): string.  Value enum: "applied", "waived". */
    "status"?: "applied" | "waived";
    /** Shape $ (Value): string.  Value enum: "deduction", "credit". */
    "value_effect": "deduction" | "credit";
    /**
     * Shape $ (Value): string. Value enum: "policy_override", "merchant_review",
     * "customer_service", "other".
     */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "waiver_reason_message"?: string;
};
/**
 * Shape $ (Value): {@link UpdateReturnResolutionLineItemRequest}. A return line and quantity to
 * keep or add when updating a return resolution.
 */
export type UpdateReturnResolutionLineItemRequest = {
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "return_resolution_line_item_id"?: string;
};
/**
 * Shape $ (Value): {@link UpdateReturnResolutionLineItemRequestInput}. A return line and quantity
 * to keep or add when updating a return resolution.
 */
export type UpdateReturnResolutionLineItemRequestInput = {
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "return_resolution_line_item_id"?: string;
};
/**
 * Shape $ (Value): {@link UpdateReturnResolutionRequest}. The request body for: Update return
 * resolution.
 */
export type UpdateReturnResolutionRequest = ({
    /**
     * Shape $ (Value): Array of {@link UpdateReturnResolutionAdjustmentRequest}. Requires
     * expected_version. Shape $[] (Value): {@link UpdateReturnResolutionAdjustmentRequest}. A fee
     * or credit to keep or add when updating a return resolution. Include
     * `return_resolution_adjustment_id` to update an existing one.
     */
    "adjustments"?: Array<UpdateReturnResolutionAdjustmentRequest>;
    /**
     * Shape $ (Value): integer string. Required when any of these fields is present: line_items,
     * replacement_line_items, adjustments. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
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
     * Shape $ (Value): Array of {@link UpdateReturnResolutionLineItemRequest}. Requires
     * expected_version. Shape $[] (Value): {@link UpdateReturnResolutionLineItemRequest}. A return
     * line and quantity to keep or add when updating a return resolution.
     */
    "line_items"?: Array<UpdateReturnResolutionLineItemRequest>;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Shape $ (Value): string. Value enum: "original_price", "current_price",
     * "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**
     * Shape $ (Value): Array of {@link UpdateReturnReplacementLineItemRequest}. Requires
     * expected_version. Shape $[] (Value): {@link UpdateReturnReplacementLineItemRequest}. A
     * replacement item to keep or add when updating a return resolution. Include
     * `return_replacement_line_item_id` to keep an existing one.
     */
    "replacement_line_items"?: Array<UpdateReturnReplacementLineItemRequest>;
});
/**
 * Shape $ (Value): {@link UpdateReturnResolutionRequestInput}. The request body for: Update return
 * resolution.
 */
export type UpdateReturnResolutionRequestInput = ({
    /**
     * Shape $ (Value): Array of {@link UpdateReturnResolutionAdjustmentRequestInput}. Requires
     * expected_version. Shape $[] (Value): {@link UpdateReturnResolutionAdjustmentRequestInput}. A
     * fee or credit to keep or add when updating a return resolution. Include
     * `return_resolution_adjustment_id` to update an existing one.
     */
    "adjustments"?: Array<UpdateReturnResolutionAdjustmentRequestInput>;
    /**
     * Shape $ (Value): integer string. Required when any of these fields is present: line_items,
     * replacement_line_items, adjustments. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
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
     * Shape $ (Value): Array of {@link UpdateReturnResolutionLineItemRequestInput}. Requires
     * expected_version. Shape $[] (Value): {@link UpdateReturnResolutionLineItemRequestInput}. A
     * return line and quantity to keep or add when updating a return resolution.
     */
    "line_items"?: Array<UpdateReturnResolutionLineItemRequestInput>;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Shape $ (Value): string. Value enum: "original_price", "current_price",
     * "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price";
    /**
     * Shape $ (Value): Array of {@link UpdateReturnReplacementLineItemRequestInput}. Requires
     * expected_version. Shape $[] (Value): {@link UpdateReturnReplacementLineItemRequestInput}. A
     * replacement item to keep or add when updating a return resolution. Include
     * `return_replacement_line_item_id` to keep an existing one.
     */
    "replacement_line_items"?: Array<UpdateReturnReplacementLineItemRequestInput>;
});
/** Shape $ (Value): {@link UpdateRiskListRequest}. The request body for: Update a risk list. */
export type UpdateRiskListRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Name of a merchant-created risk list. It can't be cleared.
     * minLength: 1.
     */
    "name": string;
};
/**
 * Shape $ (Value): {@link UpdateRiskListRequestInput}. The request body for: Update a risk list.
 */
export type UpdateRiskListRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Name of a merchant-created risk list. It can't be cleared.
     * minLength: 1.
     */
    "name": string;
};
/** Shape $ (Value): {@link UpdateRiskRuleRequest}. The request body for: Update a risk rule. */
export type UpdateRiskRuleRequest = ({
    /** Shape $ (Value): string.  Value enum: "allow", "block", "review", "require_3ds". */
    "action"?: "allow" | "block" | "review" | "require_3ds" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /**
     * Shape $ (Value): integer string. Optional risk rule version last read by the caller. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link RiskPredicateNode}. A node in a risk rule condition: a comparison of
     * an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate"?: RiskPredicateNode;
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
})
    & (({
    /** Shape $ (Value): string.  Value enum: "allow", "block", "review", "require_3ds". */
    "action": "allow" | "block" | "review" | "require_3ds" | (string & {});
})
    | ({
    /**
     * Shape $ (Value): {@link RiskPredicateNode}. A node in a risk rule condition: a comparison of
     * an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate": RiskPredicateNode;
})
    | ({
    /** Shape $ (Value): string. minLength: 1. */
    "description": string;
})
    | ({
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status": "active" | "inactive" | (string & {});
})
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link UpdateRiskRuleRequestInput}. The request body for: Update a risk rule.
 */
export type UpdateRiskRuleRequestInput = ({
    /** Shape $ (Value): string.  Value enum: "allow", "block", "review", "require_3ds". */
    "action"?: "allow" | "block" | "review" | "require_3ds";
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /**
     * Shape $ (Value): integer string. Optional risk rule version last read by the caller. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link RiskPredicateNodeInput}. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate"?: RiskPredicateNodeInput;
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
})
    & (({
    /** Shape $ (Value): string.  Value enum: "allow", "block", "review", "require_3ds". */
    "action": "allow" | "block" | "review" | "require_3ds";
})
    | ({
    /**
     * Shape $ (Value): {@link RiskPredicateNodeInput}. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate": RiskPredicateNodeInput;
})
    | ({
    /** Shape $ (Value): string. minLength: 1. */
    "description": string;
})
    | ({
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status": "active" | "inactive";
}));
/**
 * Shape $ (Value): {@link UpdateServiceFulfillmentDetails}. Service fulfillment fields to change
 * when updating a fulfillment: scheduled times, completion time, and notes. Send null to clear a
 * field.
 */
export type UpdateServiceFulfillmentDetails = {
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "completed_at"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "notes"?: string | null;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "scheduled_end_at"?: string | null;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "scheduled_start_at"?: string | null;
    /** Shape $ (Value): string. minLength: 1. */
    "timezone"?: string;
};
/**
 * Shape $ (Value): {@link UpdateServiceFulfillmentDetailsInput}. Service fulfillment fields to
 * change when updating a fulfillment: scheduled times, completion time, and notes. Send null to
 * clear a field.
 */
export type UpdateServiceFulfillmentDetailsInput = {
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "completed_at"?: string | globalThis.Date | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "notes"?: string | null;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "scheduled_end_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): string or null. RFC3339 timestamp. Send null to clear it. Format:
     * date-time. minLength: 1.
     */
    "scheduled_start_at"?: string | globalThis.Date | null;
    /** Shape $ (Value): string. minLength: 1. */
    "timezone"?: string;
};
/**
 * Shape $ (Value): {@link UpdateSettingsRequest}. The request body for: Update merchant settings.
 */
export type UpdateSettingsRequest = ({
    /**
     * Shape $ (Value): {@link BrandingSettingsRequest} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link BrandingSettingsRequest}. Branding values to
     * change when updating settings. Send null for a color or `font_family` to clear it. Shape
     * $.anyOf[2] (Value): null.
     */
    "branding"?: ((BrandingSettingsRequest) | (null));
    /**
     * Shape $ (Value): {@link CheckoutSettings} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link CheckoutSettings}. Merchant defaults for checkout:
     * custom domain, delivery methods, expiration, payment options, required contact fields,
     * promotion codes, recovery email, and saved payment details. Shape $.anyOf[2] (Value): null.
     */
    "checkout"?: ((CheckoutSettings) | (null));
    /**
     * Shape $ (Value): {@link CustomerAccountSettings} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Flint then serves the default Flint-hosted account, and GET /v1/settings omits
     * customer_account. Shape $.anyOf[1] (Value): {@link CustomerAccountSettings}. Customer
     * account settings: hosted mode, merchant account URL, presentation, route templates, and what
     * buyers may do to their own subscriptions. Shape $.anyOf[2] (Value): null.
     */
    "customer_account"?: ((CustomerAccountSettings) | (null));
    /**
     * Shape $ (Value): {@link CustomerEmailDeliverySettings} or null. Patch object: fields you
     * send are applied, fields you omit are unchanged. Send null to remove every value you set in
     * this section. Shape $.anyOf[1] (Value): {@link CustomerEmailDeliverySettings}. For each kind
     * of customer email, whether Flint sends it or the merchant sends it. Shape $.anyOf[2]
     * (Value): null.
     */
    "customer_email_delivery"?: ((CustomerEmailDeliverySettings) | (null));
    /**
     * Shape $ (Value): integer string. The Settings.version last read by the caller. Required when
     * tax_identity is present, including null. Stale versions return VERSION_CONFLICT. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link FulfillmentSettings} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link FulfillmentSettings}. Merchant fulfillment
     * settings, including whether fulfillments require approval (`approval_required`). Shape
     * $.anyOf[2] (Value): null.
     */
    "fulfillment"?: ((FulfillmentSettings) | (null));
    /**
     * Shape $ (Value): {@link InventorySettings} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link InventorySettings}. Inventory settings: the
     * `low_stock_threshold` and how inventory failures are handled for each order source. Shape
     * $.anyOf[2] (Value): null.
     */
    "inventory"?: ((InventorySettings) | (null));
    /**
     * Shape $ (Value): {@link InvoiceSettingsPatch} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link InvoiceSettingsPatch}. Changes to a merchant's
     * invoice settings. Send only the fields to change, and send null on a nullable field to clear
     * it. minProperties: 1. Shape $.anyOf[2] (Value): null.
     */
    "invoices"?: ((InvoiceSettingsPatch) | (null));
    /**
     * Shape $ (Value): {@link LegalSettingsRequest} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link LegalSettingsRequest}. Changes to a merchant's
     * legal settings. Send null on a URL to clear it. Shape $.anyOf[2] (Value): null.
     */
    "legal"?: ((LegalSettingsRequest) | (null));
    /**
     * Shape $ (Value): Map of (string or null) or null. Merged by key. Caller-owned metadata. Omit
     * this field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Shape $.* (Value): string or
     * null. minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Shape $ (Value): {@link PaymentLimitSettingsPatch} or null. Patch object: fields you send
     * are applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Clearing merchant limits preserves Flint support approvals. Cleared maps are
     * omitted from reads. Shape $.anyOf[1] (Value): {@link PaymentLimitSettingsPatch}. Changes to
     * a merchant's payment amount limits. Each map replaces the existing one, and null clears it.
     * minProperties: 1. Shape $.anyOf[2] (Value): null.
     */
    "payment_limits"?: ((PaymentLimitSettingsPatch) | (null));
    /**
     * Shape $ (Value): {@link PromotionSettings} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link PromotionSettings}. Merchant promotion settings:
     * whether automatic promotions and codes are enabled, and how many promotions can apply to one
     * order. Shape $.anyOf[2] (Value): null.
     */
    "promotions"?: ((PromotionSettings) | (null));
    /**
     * Shape $ (Value): {@link ReceiptSettingsRequest} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link ReceiptSettingsRequest}. Receipt settings to
     * change when updating settings. Send null for `header_text` or `footer_text` to clear it.
     * Shape $.anyOf[2] (Value): null.
     */
    "receipts"?: ((ReceiptSettingsRequest) | (null));
    /**
     * Shape $ (Value): {@link SubscriptionSettings} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link SubscriptionSettings}. Subscription settings: the
     * default billing schedule owner, dunning retry days and end action, and the backorder email.
     * Shape $.anyOf[2] (Value): null.
     */
    "subscriptions"?: ((SubscriptionSettings) | (null));
    /**
     * Shape $ (Value): {@link TaxSettingsRequest} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link TaxSettingsRequest}. Tax settings to change when
     * updating settings. Send null for a category to clear it. Shape $.anyOf[2] (Value): null.
     */
    "tax"?: ((TaxSettingsRequest) | (null));
    /**
     * Shape $ (Value): {@link TaxIdentityPatch} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Legal identity displayed on invoices and credit notes. Requires expected_version
     * whenever present. Shape $.anyOf[1] (Value): {@link TaxIdentityPatch}. Merchant-provided
     * legal identity displayed on invoices and credit notes. Does not verify IDs or change tax
     * treatment. Tax IDs are an owned collection in display order; replacing the array requires
     * the parent's expected_version. Existing entries retain their document_tax_id; omit an entry
     * to remove it, or omit its ID to add one. Shape $.anyOf[2] (Value): null.
     */
    "tax_identity"?: ((TaxIdentityPatch) | (null));
    /**
     * Shape $ (Value): {@link TippingSettingsPatch} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link TippingSettingsPatch}. Tipping settings to change
     * when updating settings. Omit a field to keep it; send null to clear a preselected tip.
     * minProperties: 1. Shape $.anyOf[2] (Value): null.
     */
    "tipping"?: ((TippingSettingsPatch) | (null));
});
/**
 * Shape $ (Value): {@link UpdateSettingsRequestInput}. The request body for: Update merchant
 * settings.
 */
export type UpdateSettingsRequestInput = ({
    /**
     * Shape $ (Value): {@link BrandingSettingsRequestInput} or null. Patch object: fields you send
     * are applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link BrandingSettingsRequestInput}. Branding values to
     * change when updating settings. Send null for a color or `font_family` to clear it. Shape
     * $.anyOf[2] (Value): null.
     */
    "branding"?: ((BrandingSettingsRequestInput) | (null));
    /**
     * Shape $ (Value): {@link CheckoutSettingsInput} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link CheckoutSettingsInput}. Merchant defaults for
     * checkout: custom domain, delivery methods, expiration, payment options, required contact
     * fields, promotion codes, recovery email, and saved payment details. Shape $.anyOf[2]
     * (Value): null.
     */
    "checkout"?: ((CheckoutSettingsInput) | (null));
    /**
     * Shape $ (Value): {@link CustomerAccountSettingsInput} or null. Patch object: fields you send
     * are applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Flint then serves the default Flint-hosted account, and GET /v1/settings omits
     * customer_account. Shape $.anyOf[1] (Value): {@link CustomerAccountSettingsInput}. Customer
     * account settings: hosted mode, merchant account URL, presentation, route templates, and what
     * buyers may do to their own subscriptions. Shape $.anyOf[2] (Value): null.
     */
    "customer_account"?: ((CustomerAccountSettingsInput) | (null));
    /**
     * Shape $ (Value): {@link CustomerEmailDeliverySettingsInput} or null. Patch object: fields
     * you send are applied, fields you omit are unchanged. Send null to remove every value you set
     * in this section. Shape $.anyOf[1] (Value): {@link CustomerEmailDeliverySettingsInput}. For
     * each kind of customer email, whether Flint sends it or the merchant sends it. Shape
     * $.anyOf[2] (Value): null.
     */
    "customer_email_delivery"?: ((CustomerEmailDeliverySettingsInput) | (null));
    /**
     * Shape $ (Value): integer string. The Settings.version last read by the caller. Required when
     * tax_identity is present, including null. Stale versions return VERSION_CONFLICT. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link FulfillmentSettingsInput} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link FulfillmentSettingsInput}. Merchant fulfillment
     * settings, including whether fulfillments require approval (`approval_required`). Shape
     * $.anyOf[2] (Value): null.
     */
    "fulfillment"?: ((FulfillmentSettingsInput) | (null));
    /**
     * Shape $ (Value): {@link InventorySettingsInput} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link InventorySettingsInput}. Inventory settings: the
     * `low_stock_threshold` and how inventory failures are handled for each order source. Shape
     * $.anyOf[2] (Value): null.
     */
    "inventory"?: ((InventorySettingsInput) | (null));
    /**
     * Shape $ (Value): {@link InvoiceSettingsPatchInput} or null. Patch object: fields you send
     * are applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link InvoiceSettingsPatchInput}. Changes to a
     * merchant's invoice settings. Send only the fields to change, and send null on a nullable
     * field to clear it. minProperties: 1. Shape $.anyOf[2] (Value): null.
     */
    "invoices"?: ((InvoiceSettingsPatchInput) | (null));
    /**
     * Shape $ (Value): {@link LegalSettingsRequestInput} or null. Patch object: fields you send
     * are applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link LegalSettingsRequestInput}. Changes to a
     * merchant's legal settings. Send null on a URL to clear it. Shape $.anyOf[2] (Value): null.
     */
    "legal"?: ((LegalSettingsRequestInput) | (null));
    /**
     * Shape $ (Value): Map of (string or null) or null. Merged by key. Caller-owned metadata. Omit
     * this field to leave metadata unchanged. Send an object to merge by key, set a key to null to
     * remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes
     * no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Shape $.* (Value): string or
     * null. minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /**
     * Shape $ (Value): {@link PaymentLimitSettingsPatchInput} or null. Patch object: fields you
     * send are applied, fields you omit are unchanged. Send null to remove every value you set in
     * this section. Clearing merchant limits preserves Flint support approvals. Cleared maps are
     * omitted from reads. Shape $.anyOf[1] (Value): {@link PaymentLimitSettingsPatchInput}.
     * Changes to a merchant's payment amount limits. Each map replaces the existing one, and null
     * clears it. minProperties: 1. Shape $.anyOf[2] (Value): null.
     */
    "payment_limits"?: ((PaymentLimitSettingsPatchInput) | (null));
    /**
     * Shape $ (Value): {@link PromotionSettingsInput} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link PromotionSettingsInput}. Merchant promotion
     * settings: whether automatic promotions and codes are enabled, and how many promotions can
     * apply to one order. Shape $.anyOf[2] (Value): null.
     */
    "promotions"?: ((PromotionSettingsInput) | (null));
    /**
     * Shape $ (Value): {@link ReceiptSettingsRequestInput} or null. Patch object: fields you send
     * are applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link ReceiptSettingsRequestInput}. Receipt settings to
     * change when updating settings. Send null for `header_text` or `footer_text` to clear it.
     * Shape $.anyOf[2] (Value): null.
     */
    "receipts"?: ((ReceiptSettingsRequestInput) | (null));
    /**
     * Shape $ (Value): {@link SubscriptionSettingsInput} or null. Patch object: fields you send
     * are applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link SubscriptionSettingsInput}. Subscription settings:
     * the default billing schedule owner, dunning retry days and end action, and the backorder
     * email. Shape $.anyOf[2] (Value): null.
     */
    "subscriptions"?: ((SubscriptionSettingsInput) | (null));
    /**
     * Shape $ (Value): {@link TaxSettingsRequestInput} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link TaxSettingsRequestInput}. Tax settings to change
     * when updating settings. Send null for a category to clear it. Shape $.anyOf[2] (Value):
     * null.
     */
    "tax"?: ((TaxSettingsRequestInput) | (null));
    /**
     * Shape $ (Value): {@link TaxIdentityPatchInput} or null. Patch object: fields you send are
     * applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Legal identity displayed on invoices and credit notes. Requires expected_version
     * whenever present. Shape $.anyOf[1] (Value): {@link TaxIdentityPatchInput}. Merchant-provided
     * legal identity displayed on invoices and credit notes. Does not verify IDs or change tax
     * treatment. Tax IDs are an owned collection in display order; replacing the array requires
     * the parent's expected_version. Existing entries retain their document_tax_id; omit an entry
     * to remove it, or omit its ID to add one. Shape $.anyOf[2] (Value): null.
     */
    "tax_identity"?: ((TaxIdentityPatchInput) | (null));
    /**
     * Shape $ (Value): {@link TippingSettingsPatchInput} or null. Patch object: fields you send
     * are applied, fields you omit are unchanged. Send null to remove every value you set in this
     * section. Shape $.anyOf[1] (Value): {@link TippingSettingsPatchInput}. Tipping settings to
     * change when updating settings. Omit a field to keep it; send null to clear a preselected
     * tip. minProperties: 1. Shape $.anyOf[2] (Value): null.
     */
    "tipping"?: ((TippingSettingsPatchInput) | (null));
});
/** Shape $ (Value): {@link UpdateShipmentRequest}. The request body for: Update shipment. */
export type UpdateShipmentRequest = {
    /**
     * Shape $ (Value): integer string. Optional resource version last read by the caller. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Requires external_system. External references are not unique. Use Idempotency-Key
     * for retries. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): string or null. Name of the external system that external_reference_id
     * belongs to. External references are not unique. Use Idempotency-Key for retries. Send null
     * to clear it. minLength: 1.
     */
    "external_system"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
};
/** Shape $ (Value): {@link UpdateShipmentRequestInput}. The request body for: Update shipment. */
export type UpdateShipmentRequestInput = {
    /**
     * Shape $ (Value): integer string. Optional resource version last read by the caller. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Requires external_system. External references are not unique. Use Idempotency-Key
     * for retries. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): string or null. Name of the external system that external_reference_id
     * belongs to. External references are not unique. Use Idempotency-Key for retries. Send null
     * to clear it. minLength: 1.
     */
    "external_system"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
};
/**
 * Shape $ (Value): {@link UpdateSubscriptionBillingScheduleRequest}. A closed owner-specific
 * billing schedule update.
 */
export type UpdateSubscriptionBillingScheduleRequest = ((UpdateSubscriptionBillingScheduleRequestFlint)
    | (UpdateSubscriptionBillingScheduleRequestExternal)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link UpdateSubscriptionBillingScheduleRequestExternal}. The `external`
 * variant of `UpdateSubscriptionBillingScheduleRequest`.
 */
export type UpdateSubscriptionBillingScheduleRequestExternal = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Future date at which Flint attempts the next charge. Omit
     * to preserve the date or send null to clear it. Format: date-time. minLength: 1.
     */
    "next_billing_at"?: string | null;
    /** Shape $ (Value): string.  Value enum: "external". */
    "owner": "external" | (string & {});
};
/**
 * Shape $ (Value): {@link UpdateSubscriptionBillingScheduleRequestExternalInput}. The `external`
 * variant of `UpdateSubscriptionBillingScheduleRequest`.
 */
export type UpdateSubscriptionBillingScheduleRequestExternalInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Future date at which Flint attempts the next charge. Omit
     * to preserve the date or send null to clear it. Format: date-time. minLength: 1.
     */
    "next_billing_at"?: string | globalThis.Date | null;
    /** Shape $ (Value): string.  Value enum: "external". */
    "owner": "external";
};
/**
 * Shape $ (Value): {@link UpdateSubscriptionBillingScheduleRequestFlint}. The `flint` variant of
 * `UpdateSubscriptionBillingScheduleRequest`.
 */
export type UpdateSubscriptionBillingScheduleRequestFlint = {
    /**
     * Shape $ (Value): integer. UTC day of the month used for monthly and yearly billing.
     * Overrides the day inferred from a moved next_billing_at. Format: int32. minimum: 1. maximum:
     * 31.
     */
    "billing_anchor_day"?: number;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Future date at which Flint attempts the next charge. Format:
     * date-time. minLength: 1.
     */
    "next_billing_at": string;
    /** Shape $ (Value): string.  Value enum: "flint". */
    "owner": "flint" | (string & {});
};
/**
 * Shape $ (Value): {@link UpdateSubscriptionBillingScheduleRequestFlintInput}. The `flint` variant
 * of `UpdateSubscriptionBillingScheduleRequest`.
 */
export type UpdateSubscriptionBillingScheduleRequestFlintInput = {
    /**
     * Shape $ (Value): integer. UTC day of the month used for monthly and yearly billing.
     * Overrides the day inferred from a moved next_billing_at. Format: int32. minimum: 1. maximum:
     * 31.
     */
    "billing_anchor_day"?: number;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Future date at which Flint attempts the next charge. Format:
     * date-time. minLength: 1.
     */
    "next_billing_at": string | globalThis.Date;
    /** Shape $ (Value): string.  Value enum: "flint". */
    "owner": "flint";
};
/**
 * Shape $ (Value): {@link UpdateSubscriptionBillingScheduleRequestInput}. A closed owner-specific
 * billing schedule update.
 */
export type UpdateSubscriptionBillingScheduleRequestInput = ((UpdateSubscriptionBillingScheduleRequestFlintInput)
    | (UpdateSubscriptionBillingScheduleRequestExternalInput));
/**
 * Shape $ (Value): {@link UpdateSubscriptionLineItemRequest}. The request body for: Update
 * subscription line item.
 */
export type UpdateSubscriptionLineItemRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 9999.
     */
    "quantity"?: number;
    /** Shape $ (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. */
    "variant_id"?: string;
};
/**
 * Shape $ (Value): {@link UpdateSubscriptionLineItemRequestInput}. The request body for: Update
 * subscription line item.
 */
export type UpdateSubscriptionLineItemRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 9999.
     */
    "quantity"?: number;
    /** Shape $ (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. */
    "variant_id"?: string;
};
/**
 * Shape $ (Value): {@link UpdateSubscriptionOfferRequest}. The request body for: Update
 * subscription offer. minProperties: 1.
 */
export type UpdateSubscriptionOfferRequest = {
    /**
     * Shape $ (Value): Array of {@link SubscriptionIntervalOption}. minItems: 1. maxItems: 12.
     * uniqueItems: true. Shape $[] (Value): {@link SubscriptionIntervalOption}. A billing
     * interval, such as every 2 months, offered by a subscription plan.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOption>;
    /**
     * Shape $ (Value): integer string. The version read before editing. A mismatch returns
     * VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point number.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Omission leaves this field unchanged. Null clears it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name"?: string;
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
 * Shape $ (Value): {@link UpdateSubscriptionOfferRequestInput}. The request body for: Update
 * subscription offer. minProperties: 1.
 */
export type UpdateSubscriptionOfferRequestInput = {
    /**
     * Shape $ (Value): Array of {@link SubscriptionIntervalOptionInput}. minItems: 1. maxItems:
     * 12. uniqueItems: true. Shape $[] (Value): {@link SubscriptionIntervalOptionInput}. A billing
     * interval, such as every 2 months, offered by a subscription plan.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOptionInput>;
    /**
     * Shape $ (Value): integer string. The version read before editing. A mismatch returns
     * VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point number.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Omission leaves this field unchanged. Null clears it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name"?: string;
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
 * Shape $ (Value): {@link UpdateSubscriptionPlanLineItemRequest}. A line item to keep or add when
 * updating a subscription plan. Include `subscription_plan_line_item_id` to keep an existing one.
 */
export type UpdateSubscriptionPlanLineItemRequest = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
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
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Omission uses 1. Format: int32. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * Shape $ (Value): string. ID of an existing item on this plan to retain. Omit for a new item.
     * Duplicate IDs and IDs from other plans are rejected. minLength: 1.
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * Shape $ (Value): Array of string. maxItems: 25. uniqueItems: true. Shape $[] (Value):
     * string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids"?: Array<string>;
    /**
     * Shape $ (Value): {@link OrderLineItemTax}. A line item's tax category and whether it is
     * taxable.
     */
    "tax"?: OrderLineItemTax;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & ((({
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
}))
    | (({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
}))
    | (({
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
}))
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link UpdateSubscriptionPlanLineItemRequestInput}. A line item to keep or add
 * when updating a subscription plan. Include `subscription_plan_line_item_id` to keep an existing
 * one.
 */
export type UpdateSubscriptionPlanLineItemRequestInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
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
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Omission uses 1. Format: int32. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * Shape $ (Value): string. ID of an existing item on this plan to retain. Omit for a new item.
     * Duplicate IDs and IDs from other plans are rejected. minLength: 1.
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * Shape $ (Value): Array of string. maxItems: 25. uniqueItems: true. Shape $[] (Value):
     * string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids"?: Array<string>;
    /**
     * Shape $ (Value): {@link OrderLineItemTaxInput}. A line item's tax category and whether it is
     * taxable.
     */
    "tax"?: OrderLineItemTaxInput;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & ((({
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
    "description"?: never;
})
    & ({
    "tax"?: never;
})))
    | (({
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
    "description"?: never;
})
    & ({
    "tax"?: never;
})))
    | (({
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValueInput;
})
    & (({
    "variant_id"?: never;
}) & ({
    "bundle_id"?: never;
}))));
/**
 * Shape $ (Value): {@link UpdateSubscriptionPlanRequest}. The request body for: Update
 * subscription plan.
 */
export type UpdateSubscriptionPlanRequest = ({
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Shape $ (Value): integer. Format: int32. */
    "billing_interval_count"?: number;
    /**
     * Shape $ (Value): Array of {@link SubscriptionIntervalOption}. Omission leaves the choices
     * unchanged. Send [] to reset to the plan’s default billing interval and count. Null is
     * invalid. maxItems: 12. uniqueItems: true. Shape $[] (Value): {@link
     * SubscriptionIntervalOption}. A billing interval, such as every 2 months, offered by a
     * subscription plan.
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
     * Shape $ (Value): string or null. Omission leaves this field unchanged. Null clears it.
     * minLength: 1.
     */
    "description"?: string | null;
    /**
     * Shape $ (Value): {@link MoneyValue}. A fee you agree the buyer owes for canceling before the
     * contract term ends. Flint shows it at checkout and records it on each new subscription, but
     * never charges it. To collect it, charge the buyer yourself, for example with an order on
     * their saved payment method. Requires contract_term_months. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "early_termination_fee_money"?: MoneyValue;
    /**
     * Shape $ (Value): integer string. Resource version last read by the caller. Required when
     * replacing an owned collection. Required when any of these fields is present: images,
     * line_items. Use an integer string (decimal digits), not a floating-point number. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Omission leaves this field unchanged. Null clears it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Array of {@link ImageRequest}. The complete desired gallery in display
     * order. The first image is primary. Send [] to clear the gallery. minItems: 0. maxItems: 8.
     * Shape $[] (Value): {@link ImageRequest}. An image you supply by `source_url`, with optional
     * `alt` text and external reference.
     */
    "images"?: Array<ImageRequest>;
    /**
     * Shape $ (Value): {@link InventoryRoutingSourceRequest}. Replaces the plan's routing source.
     * Subscriptions and payment links that already exist keep the source they copied. It can't be
     * cleared. Where you want inventory routed from: a fixed Location, an inventory allocation
     * policy, or one policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequest;
    /**
     * Shape $ (Value): Array of {@link UpdateSubscriptionPlanLineItemRequest}. Replaces all owned
     * plan line items atomically. Requires expected_version. Omission leaves items unchanged; an
     * empty array or null is invalid. Include subscription_plan_line_item_id to retain an item;
     * omit it for a new server-generated ID. Omitted members are removed. Existing subscriptions
     * keep their snapshots. Retained catalog items with the same source keep their catalog
     * snapshot; omitted modifiers keep their recorded choices. minItems: 1. Shape $[] (Value):
     * {@link UpdateSubscriptionPlanLineItemRequest}. A line item to keep or add when updating a
     * subscription plan. Include `subscription_plan_line_item_id` to keep an existing one.
     */
    "line_items"?: Array<UpdateSubscriptionPlanLineItemRequest>;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): Array of integer. Omission leaves the choices unchanged. Send [] to reset
     * to [1]. Null is invalid. maxItems: 10. uniqueItems: true. Shape $[] (Value): integer.
     * minimum: 1. maximum: 100.
     */
    "quantity_options"?: Array<number>;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "setup_fee_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Active plans accept new signups. Inactive plans refuse new signups
     * with PLAN_NOT_ACTIVE while existing subscriptions keep renewing. Archived plans are
     * read-only and their status is set only by DELETE
     * /v1/subscription-plans/{subscription_plan_id}. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Shape $ (Value): Array of string. Omission leaves the delivery methods unchanged. Send [] to
     * remove all delivery methods. Null is invalid. Shape $[] (Value): string. minLength: 1.
     */
    "subscription_delivery_method_ids"?: Array<string>;
    /** Shape $ (Value): integer. Format: int32. */
    "trial_period_days"?: number;
});
/**
 * Shape $ (Value): {@link UpdateSubscriptionPlanRequestInput}. The request body for: Update
 * subscription plan.
 */
export type UpdateSubscriptionPlanRequestInput = ({
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly";
    /** Shape $ (Value): integer. Format: int32. */
    "billing_interval_count"?: number;
    /**
     * Shape $ (Value): Array of {@link SubscriptionIntervalOptionInput}. Omission leaves the
     * choices unchanged. Send [] to reset to the plan’s default billing interval and count. Null
     * is invalid. maxItems: 12. uniqueItems: true. Shape $[] (Value): {@link
     * SubscriptionIntervalOptionInput}. A billing interval, such as every 2 months, offered by a
     * subscription plan.
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
     * Shape $ (Value): string or null. Omission leaves this field unchanged. Null clears it.
     * minLength: 1.
     */
    "description"?: string | null;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. A fee you agree the buyer owes for canceling
     * before the contract term ends. Flint shows it at checkout and records it on each new
     * subscription, but never charges it. To collect it, charge the buyer yourself, for example
     * with an order on their saved payment method. Requires contract_term_months. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "early_termination_fee_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): integer string. Resource version last read by the caller. Required when
     * replacing an owned collection. Required when any of these fields is present: images,
     * line_items. Use an integer string (decimal digits), not a floating-point number. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Omission leaves this field unchanged. Null clears it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Array of {@link ImageRequestInput}. The complete desired gallery in display
     * order. The first image is primary. Send [] to clear the gallery. minItems: 0. maxItems: 8.
     * Shape $[] (Value): {@link ImageRequestInput}. An image you supply by `source_url`, with
     * optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequestInput>;
    /**
     * Shape $ (Value): {@link InventoryRoutingSourceRequestInput}. Replaces the plan's routing
     * source. Subscriptions and payment links that already exist keep the source they copied. It
     * can't be cleared. Where you want inventory routed from: a fixed Location, an inventory
     * allocation policy, or one policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequestInput;
    /**
     * Shape $ (Value): Array of {@link UpdateSubscriptionPlanLineItemRequestInput}. Replaces all
     * owned plan line items atomically. Requires expected_version. Omission leaves items
     * unchanged; an empty array or null is invalid. Include subscription_plan_line_item_id to
     * retain an item; omit it for a new server-generated ID. Omitted members are removed. Existing
     * subscriptions keep their snapshots. Retained catalog items with the same source keep their
     * catalog snapshot; omitted modifiers keep their recorded choices. minItems: 1. Shape $[]
     * (Value): {@link UpdateSubscriptionPlanLineItemRequestInput}. A line item to keep or add when
     * updating a subscription plan. Include `subscription_plan_line_item_id` to keep an existing
     * one.
     */
    "line_items"?: Array<UpdateSubscriptionPlanLineItemRequestInput>;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): Array of integer. Omission leaves the choices unchanged. Send [] to reset
     * to [1]. Null is invalid. maxItems: 10. uniqueItems: true. Shape $[] (Value): integer.
     * minimum: 1. maximum: 100.
     */
    "quantity_options"?: Array<number>;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "setup_fee_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): string. Active plans accept new signups. Inactive plans refuse new signups
     * with PLAN_NOT_ACTIVE while existing subscriptions keep renewing. Archived plans are
     * read-only and their status is set only by DELETE
     * /v1/subscription-plans/{subscription_plan_id}. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Shape $ (Value): Array of string. Omission leaves the delivery methods unchanged. Send [] to
     * remove all delivery methods. Null is invalid. Shape $[] (Value): string. minLength: 1.
     */
    "subscription_delivery_method_ids"?: Array<string>;
    /** Shape $ (Value): integer. Format: int32. */
    "trial_period_days"?: number;
});
/**
 * Shape $ (Value): {@link UpdateSubscriptionRequest}. The request body for: Update subscription.
 */
export type UpdateSubscriptionRequest = ({
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Shape $ (Value): integer. minimum: 1. maximum: 365. */
    "billing_interval_count"?: number;
    /**
     * Shape $ (Value): {@link SubscriptionBillingScheduleUpdateRequest}. A closed owner-specific
     * billing schedule update.
     */
    "billing_schedule"?: SubscriptionBillingScheduleUpdateRequest;
    /** Shape $ (Value): boolean.  Value enum: false. */
    "cancel_at_period_end"?: boolean;
    /**
     * Shape $ (Value): {@link SubscriptionDeliveryRequest}. The delivery preference to set on a
     * subscription: delivery method, type, destination, and recipient.
     */
    "delivery"?: SubscriptionDeliveryRequest;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. */
    "payment_method_id"?: string;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 100.
     */
    "quantity"?: number;
});
/**
 * Shape $ (Value): {@link UpdateSubscriptionRequestInput}. The request body for: Update
 * subscription.
 */
export type UpdateSubscriptionRequestInput = ({
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly";
    /** Shape $ (Value): integer. minimum: 1. maximum: 365. */
    "billing_interval_count"?: number;
    /**
     * Shape $ (Value): {@link SubscriptionBillingScheduleUpdateRequestInput}. A closed
     * owner-specific billing schedule update.
     */
    "billing_schedule"?: SubscriptionBillingScheduleUpdateRequestInput;
    /** Shape $ (Value): boolean.  Value enum: false. */
    "cancel_at_period_end"?: false;
    /**
     * Shape $ (Value): {@link SubscriptionDeliveryRequestInput}. The delivery preference to set on
     * a subscription: delivery method, type, destination, and recipient.
     */
    "delivery"?: SubscriptionDeliveryRequestInput;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to
     * leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or
     * set metadata to null to clear all caller-owned metadata. An empty object makes no change.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Shape $.* (Value): string or null.
     * minLength: 1.
     */
    "metadata"?: Record<string, string | null> | null;
    /** Shape $ (Value): string. minLength: 1. */
    "payment_method_id"?: string;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * minimum: 1. maximum: 100.
     */
    "quantity"?: number;
});
/**
 * Shape $ (Value): {@link UpdateWebhookEndpointRequest}. The request body for: Update webhook
 * endpoint.
 */
export type UpdateWebhookEndpointRequest = ({
    /**
     * Shape $ (Value): string. Set default to follow the merchant default, or a supported
     * YYYY-MM-DD version to pin this endpoint. Omit to leave unchanged. Null is not accepted.
     * Switching between a pin and default clears the rollback offer. minLength: 1.
     */
    "api_version"?: string;
    /**
     * Shape $ (Value): string or null. Endpoint description. Omit to leave unchanged; null clears
     * it. Send null to clear it. minLength: 1. maxLength: 500.
     */
    "description"?: string | null;
    /**
     * Shape $ (Value): Array of string. Event types to deliver. Send ["*"] for every type the
     * endpoint's event_sources deliver, including types added later; * must be the only entry and
     * is not available with installed_merchants. At least one entry is required. Use only current
     * event type names; previous and removed names are rejected. Stored subscriptions map previous
     * names permanently and drop removed names on read. See the [changelog](/docs/changelog).
     * minItems: 1. Shape $[] (Value): string. minLength: 1.
     */
    "enabled_events"?: Array<string>;
    /**
     * Shape $ (Value): Array of string. Event sources this endpoint receives. Defaults to
     * merchant. Use partner_app for app lifecycle events and installed_merchants for events from
     * merchants that installed the partner app. [] enum: "merchant", "partner_app",
     * "installed_merchants". Shape $[] (Value): string. Value enum: "merchant", "partner_app",
     * "installed_merchants".
     */
    "event_sources"?: Array<"merchant" | "partner_app" | "installed_merchants" | (string & {})>;
    /**
     * Shape $ (Value): string. Apply api_version only if this matches the resource's current
     * api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted.
     * minLength: 1.
     */
    "expected_api_version"?: string;
    /**
     * Shape $ (Value): integer string. Resource version last read by the caller. Required when
     * enabled_events, event_sources, or installed_merchant_modes is present, including an empty
     * array. Optional for scalar updates. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
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
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "url"?: string;
});
/**
 * Shape $ (Value): {@link UpdateWebhookEndpointRequestInput}. The request body for: Update webhook
 * endpoint.
 */
export type UpdateWebhookEndpointRequestInput = ({
    /**
     * Shape $ (Value): string. Set default to follow the merchant default, or a supported
     * YYYY-MM-DD version to pin this endpoint. Omit to leave unchanged. Null is not accepted.
     * Switching between a pin and default clears the rollback offer. minLength: 1.
     */
    "api_version"?: string;
    /**
     * Shape $ (Value): string or null. Endpoint description. Omit to leave unchanged; null clears
     * it. Send null to clear it. minLength: 1. maxLength: 500.
     */
    "description"?: string | null;
    /**
     * Shape $ (Value): Array of string. Event types to deliver. Send ["*"] for every type the
     * endpoint's event_sources deliver, including types added later; * must be the only entry and
     * is not available with installed_merchants. At least one entry is required. Use only current
     * event type names; previous and removed names are rejected. Stored subscriptions map previous
     * names permanently and drop removed names on read. See the [changelog](/docs/changelog).
     * minItems: 1. Shape $[] (Value): string. minLength: 1.
     */
    "enabled_events"?: Array<string>;
    /**
     * Shape $ (Value): Array of string. Event sources this endpoint receives. Defaults to
     * merchant. Use partner_app for app lifecycle events and installed_merchants for events from
     * merchants that installed the partner app. [] enum: "merchant", "partner_app",
     * "installed_merchants". Shape $[] (Value): string. Value enum: "merchant", "partner_app",
     * "installed_merchants".
     */
    "event_sources"?: Array<"merchant" | "partner_app" | "installed_merchants">;
    /**
     * Shape $ (Value): string. Apply api_version only if this matches the resource's current
     * api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted.
     * minLength: 1.
     */
    "expected_api_version"?: string;
    /**
     * Shape $ (Value): integer string. Resource version last read by the caller. Required when
     * enabled_events, event_sources, or installed_merchant_modes is present, including an empty
     * array. Optional for scalar updates. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
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
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
    /** Shape $ (Value): string. minLength: 1. */
    "url"?: string;
});
/**
 * Shape $ (Value): {@link UpdateWorkloadIdentityRequest}. The request body for: Update a workload
 * identity.
 */
export type UpdateWorkloadIdentityRequest = ({
    /**
     * Shape $ (Value): Array of {@link WorkloadIdentityClaimConditionRequest}. Bounded value
     * array, at most 10. Defaults to []. Any glob requires an exact claim condition; shared
     * issuers require tenant pinning. maxItems: 10. uniqueItems: true. Shape $[] (Value): {@link
     * WorkloadIdentityClaimConditionRequest}. A condition to match one top-level scalar claim in
     * the workload's identity token. Omitted match defaults to exact.
     */
    "claim_conditions"?: Array<WorkloadIdentityClaimConditionRequest>;
    /**
     * Shape $ (Value): integer string. Version most recently read. Required when claim_conditions
     * or scopes is supplied; optional for scalar updates. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "name"?: string;
    /**
     * Shape $ (Value): Array of string. Complete scope set to grant. Machine callers may grant
     * only scopes they hold in the same environment. minItems: 1. uniqueItems: true. [] enum:
     * "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write", "commerce.inventory.read",
     * "commerce.inventory.write", "commerce.inventory_locations.write",
     * "commerce.inventory_policies.write", "commerce.invoices.read", "commerce.invoices.write",
     * "commerce.orders.read", "commerce.orders.write", "commerce.products.read",
     * "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write",
     * "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.return_policies.write", "commerce.return_reasons.write",
     * "commerce.returns.operations.write", "commerce.returns.read",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "merchant_billing.read",
     * "merchants.account_sessions.write", "merchants.locations.read", "merchants.locations.write",
     * "merchants.onboarding.read", "merchants.onboarding.write", "merchants.profile.read",
     * "merchants.profile.write", "money_movement.balance_transactions.read",
     * "money_movement.balances.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "payments.disputes.read", "payments.disputes.write",
     * "payments.payment_intents.read", "payments.payment_intents.write",
     * "payments.payment_method_domains.read", "payments.payment_method_domains.write",
     * "payments.payment_methods.read", "payments.payment_methods.write",
     * "payments.payment_options.read", "reports.read", "reports.write", "risk.controls.write",
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
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write", "commerce.inventory.read",
     * "commerce.inventory.write", "commerce.inventory_locations.write",
     * "commerce.inventory_policies.write", "commerce.invoices.read", "commerce.invoices.write",
     * "commerce.orders.read", "commerce.orders.write", "commerce.products.read",
     * "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write",
     * "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.return_policies.write", "commerce.return_reasons.write",
     * "commerce.returns.operations.write", "commerce.returns.read",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "merchant_billing.read",
     * "merchants.account_sessions.write", "merchants.locations.read", "merchants.locations.write",
     * "merchants.onboarding.read", "merchants.onboarding.write", "merchants.profile.read",
     * "merchants.profile.write", "money_movement.balance_transactions.read",
     * "money_movement.balances.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "payments.disputes.read", "payments.disputes.write",
     * "payments.payment_intents.read", "payments.payment_intents.write",
     * "payments.payment_method_domains.read", "payments.payment_method_domains.write",
     * "payments.payment_methods.read", "payments.payment_methods.write",
     * "payments.payment_options.read", "reports.read", "reports.write", "risk.controls.write",
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
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.inventory_locations.write"
        | "commerce.inventory_policies.write"
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
        | "commerce.return_policies.write"
        | "commerce.return_reasons.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.read"
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
        | "payments.payment_options.read"
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
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 1024. */
    "subject"?: string;
    /** Shape $ (Value): string. Default: "exact". Value enum: "exact", "glob". */
    "subject_match"?: "exact" | "glob" | (string & {});
});
/**
 * Shape $ (Value): {@link UpdateWorkloadIdentityRequestInput}. The request body for: Update a
 * workload identity.
 */
export type UpdateWorkloadIdentityRequestInput = ({
    /**
     * Shape $ (Value): Array of {@link WorkloadIdentityClaimConditionRequestInput}. Bounded value
     * array, at most 10. Defaults to []. Any glob requires an exact claim condition; shared
     * issuers require tenant pinning. maxItems: 10. uniqueItems: true. Shape $[] (Value): {@link
     * WorkloadIdentityClaimConditionRequestInput}. A condition to match one top-level scalar claim
     * in the workload's identity token. Omitted match defaults to exact.
     */
    "claim_conditions"?: Array<WorkloadIdentityClaimConditionRequestInput>;
    /**
     * Shape $ (Value): integer string. Version most recently read. Required when claim_conditions
     * or scopes is supplied; optional for scalar updates. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "name"?: string;
    /**
     * Shape $ (Value): Array of string. Complete scope set to grant. Machine callers may grant
     * only scopes they hold in the same environment. minItems: 1. uniqueItems: true. [] enum:
     * "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write", "commerce.inventory.read",
     * "commerce.inventory.write", "commerce.inventory_locations.write",
     * "commerce.inventory_policies.write", "commerce.invoices.read", "commerce.invoices.write",
     * "commerce.orders.read", "commerce.orders.write", "commerce.products.read",
     * "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write",
     * "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.return_policies.write", "commerce.return_reasons.write",
     * "commerce.returns.operations.write", "commerce.returns.read",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "merchant_billing.read",
     * "merchants.account_sessions.write", "merchants.locations.read", "merchants.locations.write",
     * "merchants.onboarding.read", "merchants.onboarding.write", "merchants.profile.read",
     * "merchants.profile.write", "money_movement.balance_transactions.read",
     * "money_movement.balances.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "payments.disputes.read", "payments.disputes.write",
     * "payments.payment_intents.read", "payments.payment_intents.write",
     * "payments.payment_method_domains.read", "payments.payment_method_domains.write",
     * "payments.payment_methods.read", "payments.payment_methods.write",
     * "payments.payment_options.read", "reports.read", "reports.write", "risk.controls.write",
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
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write", "commerce.inventory.read",
     * "commerce.inventory.write", "commerce.inventory_locations.write",
     * "commerce.inventory_policies.write", "commerce.invoices.read", "commerce.invoices.write",
     * "commerce.orders.read", "commerce.orders.write", "commerce.products.read",
     * "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write",
     * "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.return_policies.write", "commerce.return_reasons.write",
     * "commerce.returns.operations.write", "commerce.returns.read",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "merchant_billing.read",
     * "merchants.account_sessions.write", "merchants.locations.read", "merchants.locations.write",
     * "merchants.onboarding.read", "merchants.onboarding.write", "merchants.profile.read",
     * "merchants.profile.write", "money_movement.balance_transactions.read",
     * "money_movement.balances.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "payments.disputes.read", "payments.disputes.write",
     * "payments.payment_intents.read", "payments.payment_intents.write",
     * "payments.payment_method_domains.read", "payments.payment_method_domains.write",
     * "payments.payment_methods.read", "payments.payment_methods.write",
     * "payments.payment_options.read", "reports.read", "reports.write", "risk.controls.write",
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
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.inventory_locations.write"
        | "commerce.inventory_policies.write"
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
        | "commerce.return_policies.write"
        | "commerce.return_reasons.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.read"
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
        | "payments.payment_options.read"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write">;
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
    /** Shape $ (Value): string. minLength: 1. maxLength: 1024. */
    "subject"?: string;
    /** Shape $ (Value): string. Default: "exact". Value enum: "exact", "glob". */
    "subject_match"?: "exact" | "glob";
});
/** Shape $ (Value): {@link User}. A user with access to merchant accounts. */
export type User = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. */
    "default_merchant_id"?: string;
    /** Shape $ (Value): string. */
    "email": string;
    /** Shape $ (Value): string. */
    "first_name": string;
    /** Shape $ (Value): string. */
    "last_name": string;
    /** Shape $ (Value): string.  Value enum: "active", "deactivated". */
    "status": "active" | "deactivated" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /** Shape $ (Value): string. */
    "user_id": string;
};
export type VerifiedWebhook = {
    known: true;
    event: KnownWebhookEvent;
}
    | {
    known: false;
    event: unknown;
    reason: "unknown_event" | "unmatched_envelope";
};
/**
 * Shape $ (Value): {@link VerifyReturnReceiptLineItemRequest}. The request body for: Verify return
 * receipt line item.
 */
export type VerifyReturnReceiptLineItemRequest = {
    /**
     * Shape $ (Value): integer string. Optional version of the return receipt. A stale value
     * returns VERSION_CONFLICT with the receipt ID and its current version. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id": string;
    /**
     * Shape $ (Value): string. Value enum: "order_match_confirmed", "sku_match_confirmed",
     * "inspection_confirmed", "merchant_review", "other".
     */
    "verification_reason": "order_match_confirmed"
        | "sku_match_confirmed"
        | "inspection_confirmed"
        | "merchant_review"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "verification_reason_message"?: string;
};
/**
 * Shape $ (Value): {@link VerifyReturnReceiptLineItemRequestInput}. The request body for: Verify
 * return receipt line item.
 */
export type VerifyReturnReceiptLineItemRequestInput = {
    /**
     * Shape $ (Value): integer string. Optional version of the return receipt. A stale value
     * returns VERSION_CONFLICT with the receipt ID and its current version. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id": string;
    /**
     * Shape $ (Value): string. Value enum: "order_match_confirmed", "sku_match_confirmed",
     * "inspection_confirmed", "merchant_review", "other".
     */
    "verification_reason": "order_match_confirmed"
        | "sku_match_confirmed"
        | "inspection_confirmed"
        | "merchant_review"
        | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "verification_reason_message"?: string;
};
/** Shape $ (Value): {@link VoidPackageRequest}. The request body for: Void package. */
export type VoidPackageRequest = {
    /**
     * Shape $ (Value): string. Controls buyer email handling. Omit or use send to send when
     * recipient, template, and deduplication rules allow it. Use suppress when another system owns
     * buyer messaging. Value enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * Shape $ (Value): integer string. Optional resource version last read by the caller. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. Void event timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /** Shape $ (Value): string. Your note explaining this action. minLength: 1. */
    "reason_message"?: string;
};
/** Shape $ (Value): {@link VoidPackageRequestInput}. The request body for: Void package. */
export type VoidPackageRequestInput = {
    /**
     * Shape $ (Value): string. Controls buyer email handling. Omit or use send to send when
     * recipient, template, and deduplication rules allow it. Use suppress when another system owns
     * buyer messaging. Value enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * Shape $ (Value): integer string. Optional resource version last read by the caller. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. Void event timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. Your note explaining this action. minLength: 1. */
    "reason_message"?: string;
};
/** Shape $ (Value): {@link VoidShipmentRequestInput}. The request body for: Void shipment. */
export type VoidShipmentRequestInput = VoidPackageRequestInput;
/**
 * Shape $ (Value): {@link VoidShipmentResponse}. A response containing `VoidShipmentResult` data.
 */
export type VoidShipmentResponse = {
    /**
     * Shape $ (Value): {@link VoidShipmentResult}. The voided shipment and its affected packages.
     * The shipment is the primary resource and expected_version target.
     */
    "data": VoidShipmentResult;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link VoidShipmentResult}. The voided shipment and its affected packages. The
 * shipment is the primary resource and expected_version target.
 */
export type VoidShipmentResult = {
    /**
     * Shape $ (Value): Array of {@link Package}. Shape $[] (Value): {@link Package}. A package
     * within a shipment.
     */
    "packages": Array<Package>;
    /** Shape $ (Value): {@link Shipment}. A shipment carrying fulfilled order items. */
    "shipment": Shipment;
};
/**
 * Shape $ (Value): {@link WaiveInvoiceLateFeeRequest}. The request body for: Waive an unpaid
 * invoice late fee.
 */
export type WaiveInvoiceLateFeeRequest = {
    /** Shape $ (Value): string. Your note explaining this action. minLength: 1. maxLength: 4096. */
    "reason_message": string;
};
/**
 * Shape $ (Value): {@link WaiveInvoiceLateFeeRequestInput}. The request body for: Waive an unpaid
 * invoice late fee.
 */
export type WaiveInvoiceLateFeeRequestInput = WaiveInvoiceLateFeeRequest;
/**
 * Shape $ (Value): {@link WaiveReturnLineInspectionRequest}. The request body for: Waive return
 * line inspection.
 */
export type WaiveReturnLineInspectionRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "policy_override", "trusted_in_store_handoff",
     * "merchant_review", "other".
     */
    "reason": "policy_override" | "trusted_in_store_handoff" | "merchant_review" | "other" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link WaiveReturnLineInspectionRequestInput}. The request body for: Waive
 * return line inspection.
 */
export type WaiveReturnLineInspectionRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Value enum: "policy_override", "trusted_in_store_handoff",
     * "merchant_review", "other".
     */
    "reason": "policy_override" | "trusted_in_store_handoff" | "merchant_review" | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
export type WebhookDeliveriesCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateWebhookDeliveryRequestInput}. The request body for: Create
     * webhook delivery.
     */
    "body": InputValue<CreateWebhookDeliveryRequestInput>;
};
export type WebhookDeliveriesGetInput = {
    /** Shape $ (Value): string. */
    "webhook_delivery_id": InputValue<string>;
};
export type WebhookDeliveriesListAttemptsInput = {
    /** Shape $ (Value): string. */
    "webhook_delivery_id": InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
