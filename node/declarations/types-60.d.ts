import type { MoneyValueInput, MoneyValue } from './types-35.js';
import type {
    UpdateReturnReplacementLineItemInputBundle,
    UpdateReturnReplacementLineItemInputCustom,
    UpdateReturnReplacementLineItemInputVariant,
    UpdateReturnReplacementLineItemInputBundleInput,
    UpdateReturnReplacementLineItemInputCustomInput
} from './types-59.js';
import type { MetadataPatchRequestInput, MetadataPatchRequest } from './types-34.js';
import type { GetReturnResolutionResponse, GetReturnResponse, GetReturnReceiptResponse } from './types-23.js';
import type { RiskPredicateNode, RiskPredicateNodeInput } from './types-52.js';
import type { BrandingSettingsRequest, BrandingSettingsRequestInput } from './types-1.js';
import type { CheckoutSettings, CheckoutSettingsRequestInput, CheckoutSessionsListDeliverySelectionsParams } from './types-5.js';
import type {
    CustomerAccountSettings,
    CustomerEmailDeliverySettings,
    CustomerAccountSettingsRequestInput,
    CustomerEmailDeliverySettingsRequestInput
} from './types-13.js';
import type { FulfillmentSettings, FulfillmentSettingsRequestInput } from './types-22.js';
import type { InventorySettings, InventorySettingsRequestInput } from './types-28.js';
import type { InvoiceSettingsPatch, InvoiceSettingsPatchInput } from './types-31.js';
import type { LegalSettingsRequest, LegalSettingsRequestInput, KnownWebhookEvent } from './types-32.js';
import type { PaymentLimitSettingsPatch, PaymentLimitSettingsPatchInput } from './types-41.js';
import type { PromotionSettings, PromotionSettingsRequestInput } from './types-45.js';
import type { ReceiptSettingsRequest, ReceiptSettingsRequestInput } from './types-46.js';
import type { SubscriptionSettings, SubscriptionSettingsRequestInput } from './types-56.js';
import type {
    TaxIdentityPatch,
    TaxSettingsRequest,
    TippingSettingsPatch,
    TaxIdentityPatchInput,
    TaxSettingsRequestInput,
    TippingSettingsPatchInput
} from './types-57.js';
import type {
    SubscriptionIntervalOption,
    SubscriptionBillingScheduleUpdateRequest,
    SubscriptionDeliveryRequest,
    SubscriptionBillingScheduleUpdateRequestInput,
    SubscriptionDeliveryRequestInput
} from './types-54.js';
import type { SubscriptionIntervalOptionInput } from './types-55.js';
import type {
    OrderLineItemModifierRequest,
    OrderLineItemTax,
    OrderLineItemModifierRequestInput,
    OrderLineItemTaxInput
} from './types-37.js';
import type { ImageRequest, ImageRequestInput } from './types-25.js';
import type { InventoryRoutingSourceRequest, InventoryRoutingSourceRequestInput } from './types-27.js';
import type {
    WebhookSigningMethod,
    WebhookSigningMethodInput,
    WorkloadIdentityClaimConditionRequest,
    WorkloadIdentityClaimConditionRequestInput
} from './types-61.js';
import type { ResponseMeta } from './types-48.js';
import type { Package } from './types-38.js';
import type { Shipment } from './types-53.js';
import type { InputValue } from '../runtime.js';
import type { CreateWebhookDeliveryRequestInput } from './types-11.js';
import type { ResendWebhookDeliveryRequestInput } from './types-47.js';
/** The `variant` variant of `UpdateReturnReplacementLineItemInput`. */
export type UpdateReturnReplacementLineItemInputVariantInput = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /** minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "return_replacement_line_item_id"?: string;
    /** minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant".
     */
    "type": "variant";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id": string;
})
    & (({
    /** Value enum: "variant". */
    "type": "variant";
    /** minLength: 1. */
    "variant_id": string;
})
    & (({
    "bundle_id"?: never;
}) & ({
    "name"?: never;
})));
/**
 * A replacement item to keep or add when updating a return resolution. Include
 * `return_replacement_line_item_id` to keep an existing one.
 */
export type UpdateReturnReplacementLineItemRequest = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /** minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "return_replacement_line_item_id"?: string;
    /** minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant", "bundle", "custom".
     */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & ((Exclude<UpdateReturnReplacementLineItemInputVariant & object, readonly unknown[]>)
    | (Exclude<UpdateReturnReplacementLineItemInputBundle & object, readonly unknown[]>)
    | (Exclude<UpdateReturnReplacementLineItemInputCustom & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * A replacement item to keep or add when updating a return resolution. Include
 * `return_replacement_line_item_id` to keep an existing one.
 */
export type UpdateReturnReplacementLineItemRequestInput = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /** minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "return_replacement_line_item_id"?: string;
    /** minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant", "bundle", "custom".
     */
    "type": "variant" | "bundle" | "custom";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & ((Exclude<UpdateReturnReplacementLineItemInputVariantInput & object, readonly unknown[]>)
    | (Exclude<UpdateReturnReplacementLineItemInputBundleInput & object, readonly unknown[]>)
    | (Exclude<UpdateReturnReplacementLineItemInputCustomInput & object, readonly unknown[]>));
/** The request body for: Update return. */
export type UpdateReturnRequestInput = {
    /**
     * Optional version of the Return. A stale value returns VERSION_CONFLICT with the current
     * Return version. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata
     * map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes
     * the key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
};
/**
 * A fee or credit to keep or add when updating a return resolution. Include
 * `return_resolution_adjustment_id` to update an existing one.
 */
export type UpdateReturnResolutionAdjustmentRequest = {
    /**
     * Value enum: "return_shipping_fee", "restocking_fee", "other_fee", "goodwill_credit",
     * "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other"
        | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "applied_amount_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "assessed_amount_money": MoneyValue;
    /**
     * Value enum: "return_policy", "inspection_result", "return_shipping_cost",
     * "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other"
        | (string & {});
    /** minLength: 1. */
    "reason_message"?: string;
    /** minLength: 1. */
    "return_line_item_id"?: string;
    /**
     * Keep this member ID when updating an existing adjustment. Omit it to create a new
     * adjustment. minLength: 1.
     */
    "return_resolution_adjustment_id"?: string;
    /** Value enum: "applied", "waived". */
    "status"?: "applied" | "waived" | (string & {});
    /** Value enum: "deduction", "credit". */
    "value_effect": "deduction" | "credit" | (string & {});
    /** Value enum: "policy_override", "merchant_review", "customer_service", "other". */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other" | (string & {});
    /** minLength: 1. */
    "waiver_reason_message"?: string;
};
/**
 * A fee or credit to keep or add when updating a return resolution. Include
 * `return_resolution_adjustment_id` to update an existing one.
 */
export type UpdateReturnResolutionAdjustmentRequestInput = {
    /**
     * Value enum: "return_shipping_fee", "restocking_fee", "other_fee", "goodwill_credit",
     * "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "applied_amount_money": MoneyValueInput;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "assessed_amount_money": MoneyValueInput;
    /**
     * Value enum: "return_policy", "inspection_result", "return_shipping_cost",
     * "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other";
    /** minLength: 1. */
    "reason_message"?: string;
    /** minLength: 1. */
    "return_line_item_id"?: string;
    /**
     * Keep this member ID when updating an existing adjustment. Omit it to create a new
     * adjustment. minLength: 1.
     */
    "return_resolution_adjustment_id"?: string;
    /** Value enum: "applied", "waived". */
    "status"?: "applied" | "waived";
    /** Value enum: "deduction", "credit". */
    "value_effect": "deduction" | "credit";
    /** Value enum: "policy_override", "merchant_review", "customer_service", "other". */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other";
    /** minLength: 1. */
    "waiver_reason_message"?: string;
};
/** A return line and quantity to keep or add when updating a return resolution. */
export type UpdateReturnResolutionLineItemRequest = {
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "return_line_item_id": string;
    /** minLength: 1. */
    "return_resolution_line_item_id"?: string;
};
/** A return line and quantity to keep or add when updating a return resolution. */
export type UpdateReturnResolutionLineItemRequestInput = UpdateReturnResolutionLineItemRequest;
/** The request body for: Update return resolution. */
export type UpdateReturnResolutionRequest = ({
    /**
     * Requires expected_version. [] (Value): {@link UpdateReturnResolutionAdjustmentRequest}. A
     * fee or credit to keep or add when updating a return resolution. Include
     * `return_resolution_adjustment_id` to update an existing one.
     */
    "adjustments"?: Array<UpdateReturnResolutionAdjustmentRequest>;
    /**
     * Required when any of these fields is present: line_items, replacement_line_items,
     * adjustments. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming
     * resolution_type and gift_card_refund_destination. Store credit and its corrections always
     * issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Requires expected_version. [] (Value): {@link UpdateReturnResolutionLineItemRequest}. A
     * return line and quantity to keep or add when updating a return resolution.
     */
    "line_items"?: Array<UpdateReturnResolutionLineItemRequest>;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map.
     * Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the
     * key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
    /** Value enum: "original_price", "current_price", "merchant_agreed_price". */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**
     * Requires expected_version. [] (Value): {@link UpdateReturnReplacementLineItemRequest}. A
     * replacement item to keep or add when updating a return resolution. Include
     * `return_replacement_line_item_id` to keep an existing one.
     */
    "replacement_line_items"?: Array<UpdateReturnReplacementLineItemRequest>;
});
/** The request body for: Update return resolution. */
export type UpdateReturnResolutionRequestInput = ({
    /**
     * Requires expected_version. [] (Value): {@link UpdateReturnResolutionAdjustmentRequestInput}.
     * A fee or credit to keep or add when updating a return resolution. Include
     * `return_resolution_adjustment_id` to update an existing one.
     */
    "adjustments"?: Array<UpdateReturnResolutionAdjustmentRequestInput>;
    /**
     * Required when any of these fields is present: line_items, replacement_line_items,
     * adjustments. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming
     * resolution_type and gift_card_refund_destination. Store credit and its corrections always
     * issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card";
    /**
     * Requires expected_version. [] (Value): {@link UpdateReturnResolutionLineItemRequestInput}. A
     * return line and quantity to keep or add when updating a return resolution.
     */
    "line_items"?: Array<UpdateReturnResolutionLineItemRequestInput>;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata
     * map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes
     * the key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
    /** Value enum: "original_price", "current_price", "merchant_agreed_price". */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price";
    /**
     * Requires expected_version. [] (Value): {@link UpdateReturnReplacementLineItemRequestInput}.
     * A replacement item to keep or add when updating a return resolution. Include
     * `return_replacement_line_item_id` to keep an existing one.
     */
    "replacement_line_items"?: Array<UpdateReturnReplacementLineItemRequestInput>;
});
export type UpdateReturnResolutionResponse = GetReturnResolutionResponse;
export type UpdateReturnResponse = GetReturnResponse;
/** The request body for: Update a risk list. */
export type UpdateRiskListRequest = {
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** Name of a merchant-created risk list. It can't be cleared. minLength: 1. */
    "name": string;
};
/** The request body for: Update a risk list. */
export type UpdateRiskListRequestInput = UpdateRiskListRequest;
/** The request body for: Update a risk rule. */
export type UpdateRiskRuleRequest = ({
    /** Value enum: "allow", "block", "review", "require_3ds". */
    "action"?: "allow" | "block" | "review" | "require_3ds" | (string & {});
    /** minLength: 1. */
    "description"?: string;
    /** Optional risk rule version last read by the caller. Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not`
     * group of other nodes.
     */
    "predicate"?: RiskPredicateNode;
    /** Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
})
    & (({
    /** Value enum: "allow", "block", "review", "require_3ds". */
    "action": "allow" | "block" | "review" | "require_3ds" | (string & {});
})
    | ({
    /**
     * A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not`
     * group of other nodes.
     */
    "predicate": RiskPredicateNode;
})
    | ({
    /** minLength: 1. */
    "description": string;
})
    | ({
    /** Value enum: "active", "inactive". */
    "status": "active" | "inactive" | (string & {});
})
    | (Record<string, unknown>));
/** The request body for: Update a risk rule. */
export type UpdateRiskRuleRequestInput = ({
    /** Value enum: "allow", "block", "review", "require_3ds". */
    "action"?: "allow" | "block" | "review" | "require_3ds";
    /** minLength: 1. */
    "description"?: string;
    /** Optional risk rule version last read by the caller. Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not`
     * group of other nodes.
     */
    "predicate"?: RiskPredicateNodeInput;
    /** Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
})
    & (({
    /** Value enum: "allow", "block", "review", "require_3ds". */
    "action": "allow" | "block" | "review" | "require_3ds";
})
    | ({
    /**
     * A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not`
     * group of other nodes.
     */
    "predicate": RiskPredicateNodeInput;
})
    | ({
    /** minLength: 1. */
    "description": string;
})
    | ({
    /** Value enum: "active", "inactive". */
    "status": "active" | "inactive";
}));
/**
 * Service fulfillment fields to change when updating a fulfillment: scheduled times, completion
 * time, and notes. Send null to clear a field.
 */
export type UpdateServiceFulfillmentDetails = {
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "completed_at"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "notes"?: string | null;
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "scheduled_end_at"?: string | null;
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "scheduled_start_at"?: string | null;
    /** minLength: 1. */
    "timezone"?: string;
};
/**
 * Service fulfillment fields to change when updating a fulfillment: scheduled times, completion
 * time, and notes. Send null to clear a field.
 */
export type UpdateServiceFulfillmentDetailsInput = {
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "completed_at"?: string | globalThis.Date | null;
    /** Send null to clear it. minLength: 1. */
    "notes"?: string | null;
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "scheduled_end_at"?: string | globalThis.Date | null;
    /** RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. */
    "scheduled_start_at"?: string | globalThis.Date | null;
    /** minLength: 1. */
    "timezone"?: string;
};
/** The request body for: Update merchant settings. */
export type UpdateSettingsRequest = ({
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * BrandingSettingsRequest}. Branding values to change when updating settings. Send null for a
     * color or `font_family` to clear it. anyOf[2] (Value): null.
     */
    "branding"?: ((BrandingSettingsRequest) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link CheckoutSettings}.
     * Merchant defaults for checkout: custom domain, delivery methods, expiration, payment
     * options, required contact fields, promotion codes, recovery email, and saved payment
     * details. anyOf[2] (Value): null.
     */
    "checkout"?: ((CheckoutSettings) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. Flint then serves the default Flint-hosted
     * account, and GET /v1/settings omits customer_account. anyOf[1] (Value): {@link
     * CustomerAccountSettings}. Customer account settings: hosted mode, merchant account URL,
     * presentation, route templates, and what buyers may do to their own subscriptions. anyOf[2]
     * (Value): null.
     */
    "customer_account"?: ((CustomerAccountSettings) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * CustomerEmailDeliverySettings}. For each kind of customer email, whether Flint sends it or
     * the merchant sends it. anyOf[2] (Value): null.
     */
    "customer_email_delivery"?: ((CustomerEmailDeliverySettings) | (null));
    /**
     * The Settings.version last read by the caller. Required when tax_identity is present,
     * including null. Stale versions return VERSION_CONFLICT. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link FulfillmentSettings}.
     * Merchant fulfillment settings, including whether fulfillments require approval
     * (`approval_required`). anyOf[2] (Value): null.
     */
    "fulfillment"?: ((FulfillmentSettings) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link InventorySettings}.
     * Inventory settings: the `low_stock_threshold` and how inventory failures are handled for
     * each order source. anyOf[2] (Value): null.
     */
    "inventory"?: ((InventorySettings) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link InvoiceSettingsPatch}.
     * Changes to a merchant's invoice settings. Send only the fields to change, and send null on a
     * nullable field to clear it. minProperties: 1. anyOf[2] (Value): null.
     */
    "invoices"?: ((InvoiceSettingsPatch) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link LegalSettingsRequest}.
     * Changes to a merchant's legal settings. Send null on a URL to clear it. anyOf[2] (Value):
     * null.
     */
    "legal"?: ((LegalSettingsRequest) | (null));
    /**
     * Merged by key. Caller-owned metadata. Omit this field to leave metadata unchanged. Send an
     * object to merge by key, set a key to null to remove it, or set metadata to null to clear all
     * caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned
     * metadata map. Omit the field to leave metadata unchanged. Each key sets a value, a null
     * value deletes the key, and an empty object makes no change; send null for the whole field to
     * clear all caller-owned metadata. The resulting map is limited the same way as MetadataInput:
     * Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096
     * Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key
     * that does not exist is allowed, so the number of operations is not itself the stored-map
     * limit. Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. Clearing merchant limits preserves Flint support
     * approvals. Cleared maps are omitted from reads. anyOf[1] (Value): {@link
     * PaymentLimitSettingsPatch}. Changes to a merchant's payment amount limits. Each map replaces
     * the existing one, and null clears it. minProperties: 1. anyOf[2] (Value): null.
     */
    "payment_limits"?: ((PaymentLimitSettingsPatch) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link PromotionSettings}.
     * Merchant promotion settings: whether automatic promotions and codes are enabled, and how
     * many promotions can apply to one order. anyOf[2] (Value): null.
     */
    "promotions"?: ((PromotionSettings) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * ReceiptSettingsRequest}. Receipt settings to change when updating settings. Send null for
     * `header_text` or `footer_text` to clear it. anyOf[2] (Value): null.
     */
    "receipts"?: ((ReceiptSettingsRequest) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link SubscriptionSettings}.
     * Subscription settings: the default billing schedule owner, dunning retry days and end
     * action, and the backorder email. anyOf[2] (Value): null.
     */
    "subscriptions"?: ((SubscriptionSettings) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link TaxSettingsRequest}.
     * Tax settings to change when updating settings. Send null for a category to clear it.
     * anyOf[2] (Value): null.
     */
    "tax"?: ((TaxSettingsRequest) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. Legal identity displayed on invoices and credit
     * notes. Requires expected_version whenever present. anyOf[1] (Value): {@link
     * TaxIdentityPatch}. Merchant-provided legal identity displayed on invoices and credit notes.
     * Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display
     * order; replacing the array requires the parent's expected_version. Existing entries retain
     * their document_tax_id; omit an entry to remove it, or omit its ID to add one. anyOf[2]
     * (Value): null.
     */
    "tax_identity"?: ((TaxIdentityPatch) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link TippingSettingsPatch}.
     * Tipping settings to change when updating settings. Omit a field to keep it; send null to
     * clear a preselected tip. minProperties: 1. anyOf[2] (Value): null.
     */
    "tipping"?: ((TippingSettingsPatch) | (null));
});
/** The request body for: Update merchant settings. */
export type UpdateSettingsRequestInput = ({
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * BrandingSettingsRequestInput}. Branding values to change when updating settings. Send null
     * for a color or `font_family` to clear it. anyOf[2] (Value): null.
     */
    "branding"?: ((BrandingSettingsRequestInput) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * CheckoutSettingsRequestInput}. Merchant defaults for checkout: custom domain, delivery
     * methods, expiration, payment options, required contact fields, promotion codes, recovery
     * email, and saved payment details. anyOf[2] (Value): null.
     */
    "checkout"?: ((CheckoutSettingsRequestInput) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. Flint then serves the default Flint-hosted
     * account, and GET /v1/settings omits customer_account. anyOf[1] (Value): {@link
     * CustomerAccountSettingsRequestInput}. Customer account settings: hosted mode, merchant
     * account URL, presentation, route templates, and what buyers may do to their own
     * subscriptions. anyOf[2] (Value): null.
     */
    "customer_account"?: ((CustomerAccountSettingsRequestInput) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * CustomerEmailDeliverySettingsRequestInput}. For each kind of customer email, whether Flint
     * sends it or the merchant sends it. anyOf[2] (Value): null.
     */
    "customer_email_delivery"?: ((CustomerEmailDeliverySettingsRequestInput) | (null));
    /**
     * The Settings.version last read by the caller. Required when tax_identity is present,
     * including null. Stale versions return VERSION_CONFLICT. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * FulfillmentSettingsRequestInput}. Merchant fulfillment settings, including whether
     * fulfillments require approval (`approval_required`). anyOf[2] (Value): null.
     */
    "fulfillment"?: ((FulfillmentSettingsRequestInput) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * InventorySettingsRequestInput}. Inventory settings: the `low_stock_threshold` and how
     * inventory failures are handled for each order source. anyOf[2] (Value): null.
     */
    "inventory"?: ((InventorySettingsRequestInput) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * InvoiceSettingsPatchInput}. Changes to a merchant's invoice settings. Send only the fields
     * to change, and send null on a nullable field to clear it. minProperties: 1. anyOf[2]
     * (Value): null.
     */
    "invoices"?: ((InvoiceSettingsPatchInput) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * LegalSettingsRequestInput}. Changes to a merchant's legal settings. Send null on a URL to
     * clear it. anyOf[2] (Value): null.
     */
    "legal"?: ((LegalSettingsRequestInput) | (null));
    /**
     * Merged by key. Caller-owned metadata. Omit this field to leave metadata unchanged. Send an
     * object to merge by key, set a key to null to remove it, or set metadata to null to clear all
     * caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a
     * caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a
     * value, a null value deletes the key, and an empty object makes no change; send null for the
     * whole field to clear all caller-owned metadata. The resulting map is limited the same way as
     * MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting
     * a key that does not exist is allowed, so the number of operations is not itself the
     * stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. Clearing merchant limits preserves Flint support
     * approvals. Cleared maps are omitted from reads. anyOf[1] (Value): {@link
     * PaymentLimitSettingsPatchInput}. Changes to a merchant's payment amount limits. Each map
     * replaces the existing one, and null clears it. minProperties: 1. anyOf[2] (Value): null.
     */
    "payment_limits"?: ((PaymentLimitSettingsPatchInput) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * PromotionSettingsRequestInput}. Merchant promotion settings: whether automatic promotions
     * and codes are enabled, and how many promotions can apply to one order. anyOf[2] (Value):
     * null.
     */
    "promotions"?: ((PromotionSettingsRequestInput) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * ReceiptSettingsRequestInput}. Receipt settings to change when updating settings. Send null
     * for `header_text` or `footer_text` to clear it. anyOf[2] (Value): null.
     */
    "receipts"?: ((ReceiptSettingsRequestInput) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * SubscriptionSettingsRequestInput}. Subscription settings: the default billing schedule
     * owner, dunning retry days and end action, and the backorder email. anyOf[2] (Value): null.
     */
    "subscriptions"?: ((SubscriptionSettingsRequestInput) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * TaxSettingsRequestInput}. Tax settings to change when updating settings. Send null for a
     * category to clear it. anyOf[2] (Value): null.
     */
    "tax"?: ((TaxSettingsRequestInput) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. Legal identity displayed on invoices and credit
     * notes. Requires expected_version whenever present. anyOf[1] (Value): {@link
     * TaxIdentityPatchInput}. Merchant-provided legal identity displayed on invoices and credit
     * notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in
     * display order; replacing the array requires the parent's expected_version. Existing entries
     * retain their document_tax_id; omit an entry to remove it, or omit its ID to add one.
     * anyOf[2] (Value): null.
     */
    "tax_identity"?: ((TaxIdentityPatchInput) | (null));
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * TippingSettingsPatchInput}. Tipping settings to change when updating settings. Omit a field
     * to keep it; send null to clear a preselected tip. minProperties: 1. anyOf[2] (Value): null.
     */
    "tipping"?: ((TippingSettingsPatchInput) | (null));
});
/** The request body for: Update shipment. */
export type UpdateShipmentRequest = {
    /** Optional resource version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. Send null to clear it. minLength: 1.
     */
    "external_system"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map.
     * Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the
     * key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
};
/** The request body for: Update shipment. */
export type UpdateShipmentRequestInput = {
    /** Optional resource version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. Send null to clear it. minLength: 1.
     */
    "external_system"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata
     * map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes
     * the key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
};
/** The request body for: Update subscription line item. */
export type UpdateSubscriptionLineItemRequest = {
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 9999.
     */
    "quantity"?: number;
    /** minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. */
    "variant_id"?: string;
};
/** The request body for: Update subscription line item. */
export type UpdateSubscriptionLineItemRequestInput = UpdateSubscriptionLineItemRequest;
/** The request body for: Update subscription offer. minProperties: 1. */
export type UpdateSubscriptionOfferRequest = {
    /**
     * minItems: 1. maxItems: 12. uniqueItems: true. [] (Value): {@link
     * SubscriptionIntervalOption}. A billing interval, such as every 2 months, offered by a
     * subscription plan.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOption>;
    /**
     * The version read before editing. A mismatch returns VERSION_CONFLICT. Format: uint64.
     * minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Omission leaves this field
     * unchanged. Null clears it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map.
     * Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the
     * key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequest) | (null));
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Catalog targets for new signups. At least one product or variant is required. maxItems: 100.
     * uniqueItems: true. [] (Value): string. minLength: 1.
     */
    "product_ids"?: Array<string>;
    /**
     * An active promotion with forever recurrence. On PATCH, null removes the discount for new
     * signups; omission keeps it. minLength: 1.
     */
    "promotion_id"?: string | null;
    /** Use active or inactive. Archive the offer with DELETE. Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Delivery methods offered at signup. An empty array uses the store's checkout defaults.
     * Existing subscriptions keep their selected method. maxItems: 25. uniqueItems: true. []
     * (Value): string. minLength: 1.
     */
    "subscription_delivery_method_ids"?: Array<string>;
    /**
     * Catalog targets for new signups. At least one product or variant is required. maxItems: 100.
     * uniqueItems: true. [] (Value): string. minLength: 1.
     */
    "variant_ids"?: Array<string>;
};
/** The request body for: Update subscription offer. minProperties: 1. */
export type UpdateSubscriptionOfferRequestInput = {
    /**
     * minItems: 1. maxItems: 12. uniqueItems: true. [] (Value): {@link
     * SubscriptionIntervalOptionInput}. A billing interval, such as every 2 months, offered by a
     * subscription plan.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOptionInput>;
    /**
     * The version read before editing. A mismatch returns VERSION_CONFLICT. Format: uint64.
     * minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Omission leaves this field
     * unchanged. Null clears it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. anyOf[1] (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata
     * map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes
     * the key, and an empty object makes no change; send null for the whole field to clear all
     * caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not
     * exist is allowed, so the number of operations is not itself the stored-map limit. Values
     * can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2]
     * (Value): null.
     */
    "metadata"?: ((MetadataPatchRequestInput) | (null));
    /** minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Catalog targets for new signups. At least one product or variant is required. maxItems: 100.
     * uniqueItems: true. [] (Value): string. minLength: 1.
     */
    "product_ids"?: Array<string>;
    /**
     * An active promotion with forever recurrence. On PATCH, null removes the discount for new
     * signups; omission keeps it. minLength: 1.
     */
    "promotion_id"?: string | null;
    /** Use active or inactive. Archive the offer with DELETE. Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
    /**
     * Delivery methods offered at signup. An empty array uses the store's checkout defaults.
     * Existing subscriptions keep their selected method. maxItems: 25. uniqueItems: true. []
     * (Value): string. minLength: 1.
     */
    "subscription_delivery_method_ids"?: Array<string>;
    /**
     * Catalog targets for new signups. At least one product or variant is required. maxItems: 100.
     * uniqueItems: true. [] (Value): string. minLength: 1.
     */
    "variant_ids"?: Array<string>;
};
/** The `bundle` variant of `UpdateSubscriptionPlanLineItemInput`. */
export type UpdateSubscriptionPlanLineItemInputBundle = ({
    /** minLength: 1. */
    "bundle_id": string;
    /** minLength: 1. */
    "description"?: string;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned key-value data for a new or replaced map. Omit it for no
     * metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
     * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't
     * be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * [].modifier_id (Optional): string. ID of the existing modifier. Treated as an opaque
     * resource reference; accepted spellings follow resource ID validation. Its resolved price and
     * the resulting line subtotal must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     * [].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during
     * replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity (Optional):
     * integer. Whole-number quantity; fractional quantities are not supported. Format: int64.
     * [].text (Optional): {@link TextModifierRequest}. Text a buyer entered for a text modifier
     * group on an order line item. [].type (Required): string. Selects the type branch. Value
     * enum: "catalog", "text". [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The
     * `catalog` variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputText}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Omission uses 1. Format:
     * int32. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * ID of an existing item on this plan to retain. Omit for a new item. Duplicate IDs and IDs
     * from other plans are rejected. minLength: 1.
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /** minLength: 1. */
    "bundle_id": string;
}));
/** The `bundle` variant of `UpdateSubscriptionPlanLineItemInput`. */
export type UpdateSubscriptionPlanLineItemInputBundleInput = ({
    /** minLength: 1. */
    "bundle_id": string;
    /** minLength: 1. */
    "description"?: string;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequestInput}. A modifier selection you supply on a
     * line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned key-value data for a new or replaced
     * map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code
     * points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768
     * UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for
     * Flint. maxProperties: 50. [].modifier_id (Optional): string. ID of the existing modifier.
     * Treated as an opaque resource reference; accepted spellings follow resource ID validation.
     * Its resolved price and the resulting line subtotal must satisfy the order money ceiling. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * minLength: 1. [].order_line_item_modifier_id (Optional): string. Existing selection ID to
     * retain during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. Text a buyer entered for a text
     * modifier group on an order line item. [].type (Required): string. Selects the type branch.
     * Value enum: "catalog", "text". [].oneOf[1] (Value): {@link
     * OrderLineItemModifierInputCatalogInput}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextInput}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Omission uses 1. Format:
     * int32. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * ID of an existing item on this plan to retain. Omit for a new item. Duplicate IDs and IDs
     * from other plans are rejected. minLength: 1.
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxInput;
    /** Value enum: "bundle". */
    "type": "bundle";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "bundle". */
    "type": ("bundle") & ("bundle");
    /** minLength: 1. */
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
})));
/** The `custom` variant of `UpdateSubscriptionPlanLineItemInput`. */
export type UpdateSubscriptionPlanLineItemInputCustom = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned key-value data for a new or replaced map. Omit it for no
     * metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
     * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't
     * be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * [].modifier_id (Optional): string. ID of the existing modifier. Treated as an opaque
     * resource reference; accepted spellings follow resource ID validation. Its resolved price and
     * the resulting line subtotal must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     * [].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during
     * replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity (Optional):
     * integer. Whole-number quantity; fractional quantities are not supported. Format: int64.
     * [].text (Optional): {@link TextModifierRequest}. Text a buyer entered for a text modifier
     * group on an order line item. [].type (Required): string. Selects the type branch. Value
     * enum: "catalog", "text". [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The
     * `catalog` variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputText}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    /** minLength: 1. */
    "name": string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Omission uses 1. Format:
     * int32. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * ID of an existing item on this plan to retain. Omit for a new item. Duplicate IDs and IDs
     * from other plans are rejected. minLength: 1.
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "custom". */
    "type": "custom" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "custom". */
    "type": "custom" | (string & {});
    /** minLength: 1. */
    "name": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
}));
/** The `custom` variant of `UpdateSubscriptionPlanLineItemInput`. */
export type UpdateSubscriptionPlanLineItemInputCustomInput = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequestInput}. A modifier selection you supply on a
     * line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned key-value data for a new or replaced
     * map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code
     * points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768
     * UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for
     * Flint. maxProperties: 50. [].modifier_id (Optional): string. ID of the existing modifier.
     * Treated as an opaque resource reference; accepted spellings follow resource ID validation.
     * Its resolved price and the resulting line subtotal must satisfy the order money ceiling. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * minLength: 1. [].order_line_item_modifier_id (Optional): string. Existing selection ID to
     * retain during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. Text a buyer entered for a text
     * modifier group on an order line item. [].type (Required): string. Selects the type branch.
     * Value enum: "catalog", "text". [].oneOf[1] (Value): {@link
     * OrderLineItemModifierInputCatalogInput}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextInput}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** minLength: 1. */
    "name": string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Omission uses 1. Format:
     * int32. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * ID of an existing item on this plan to retain. Omit for a new item. Duplicate IDs and IDs
     * from other plans are rejected. minLength: 1.
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxInput;
    /** Value enum: "custom". */
    "type": "custom";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValueInput;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "custom". */
    "type": ("custom") & ("custom");
    /** minLength: 1. */
    "name": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValueInput;
})
    & (({
    "variant_id"?: never;
}) & ({
    "bundle_id"?: never;
})));
/** The `variant` variant of `UpdateSubscriptionPlanLineItemInput`. */
export type UpdateSubscriptionPlanLineItemInputVariant = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned key-value data for a new or replaced map. Omit it for no
     * metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
     * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't
     * be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * [].modifier_id (Optional): string. ID of the existing modifier. Treated as an opaque
     * resource reference; accepted spellings follow resource ID validation. Its resolved price and
     * the resulting line subtotal must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     * [].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during
     * replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity (Optional):
     * integer. Whole-number quantity; fractional quantities are not supported. Format: int64.
     * [].text (Optional): {@link TextModifierRequest}. Text a buyer entered for a text modifier
     * group on an order line item. [].type (Required): string. Selects the type branch. Value
     * enum: "catalog", "text". [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The
     * `catalog` variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputText}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Omission uses 1. Format:
     * int32. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * ID of an existing item on this plan to retain. Omit for a new item. Duplicate IDs and IDs
     * from other plans are rejected. minLength: 1.
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. */
    "variant_id": string;
})
    & (({
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
    /** minLength: 1. */
    "variant_id": string;
}));
/** The `variant` variant of `UpdateSubscriptionPlanLineItemInput`. */
export type UpdateSubscriptionPlanLineItemInputVariantInput = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequestInput}. A modifier selection you supply on a
     * line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned key-value data for a new or replaced
     * map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code
     * points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768
     * UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for
     * Flint. maxProperties: 50. [].modifier_id (Optional): string. ID of the existing modifier.
     * Treated as an opaque resource reference; accepted spellings follow resource ID validation.
     * Its resolved price and the resulting line subtotal must satisfy the order money ceiling. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * minLength: 1. [].order_line_item_modifier_id (Optional): string. Existing selection ID to
     * retain during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. Text a buyer entered for a text
     * modifier group on an order line item. [].type (Required): string. Selects the type branch.
     * Value enum: "catalog", "text". [].oneOf[1] (Value): {@link
     * OrderLineItemModifierInputCatalogInput}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextInput}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Omission uses 1. Format:
     * int32. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * ID of an existing item on this plan to retain. Omit for a new item. Duplicate IDs and IDs
     * from other plans are rejected. minLength: 1.
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxInput;
    /** Value enum: "variant". */
    "type": "variant";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id": string;
})
    & (({
    /** Value enum: "variant". */
    "type": ("variant") & ("variant");
    /** minLength: 1. */
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
})));
/**
 * A line item to keep or add when updating a subscription plan. Include
 * `subscription_plan_line_item_id` to keep an existing one.
 */
export type UpdateSubscriptionPlanLineItemRequest = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned key-value data for a new or replaced map. Omit it for no
     * metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
     * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't
     * be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * [].modifier_id (Optional): string. ID of the existing modifier. Treated as an opaque
     * resource reference; accepted spellings follow resource ID validation. Its resolved price and
     * the resulting line subtotal must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     * [].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during
     * replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity (Optional):
     * integer. Whole-number quantity; fractional quantities are not supported. Format: int64.
     * [].text (Optional): {@link TextModifierRequest}. Text a buyer entered for a text modifier
     * group on an order line item. [].type (Required): string. Selects the type branch. Value
     * enum: "catalog", "text". [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The
     * `catalog` variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputText}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Omission uses 1. Format:
     * int32. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * ID of an existing item on this plan to retain. Omit for a new item. Duplicate IDs and IDs
     * from other plans are rejected. minLength: 1.
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "variant", "bundle", "custom". */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & ((Exclude<UpdateSubscriptionPlanLineItemInputVariant & object, readonly unknown[]>)
    | (Exclude<UpdateSubscriptionPlanLineItemInputBundle & object, readonly unknown[]>)
    | (Exclude<UpdateSubscriptionPlanLineItemInputCustom & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * A line item to keep or add when updating a subscription plan. Include
 * `subscription_plan_line_item_id` to keep an existing one.
 */
export type UpdateSubscriptionPlanLineItemRequestInput = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequestInput}. A modifier selection you supply on a
     * line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned key-value data for a new or replaced
     * map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code
     * points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768
     * UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for
     * Flint. maxProperties: 50. [].modifier_id (Optional): string. ID of the existing modifier.
     * Treated as an opaque resource reference; accepted spellings follow resource ID validation.
     * Its resolved price and the resulting line subtotal must satisfy the order money ceiling. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * minLength: 1. [].order_line_item_modifier_id (Optional): string. Existing selection ID to
     * retain during replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. Text a buyer entered for a text
     * modifier group on an order line item. [].type (Required): string. Selects the type branch.
     * Value enum: "catalog", "text". [].oneOf[1] (Value): {@link
     * OrderLineItemModifierInputCatalogInput}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextInput}. The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Omission uses 1. Format:
     * int32. minimum: 1. maximum: 9999. Default: 1.
     */
    "quantity"?: number;
    /**
     * ID of an existing item on this plan to retain. Omit for a new item. Duplicate IDs and IDs
     * from other plans are rejected. minLength: 1.
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxInput;
    /** Value enum: "variant", "bundle", "custom". */
    "type": "variant" | "bundle" | "custom";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & ((Exclude<UpdateSubscriptionPlanLineItemInputVariantInput & object, readonly unknown[]>)
    | (Exclude<UpdateSubscriptionPlanLineItemInputBundleInput & object, readonly unknown[]>)
    | (Exclude<UpdateSubscriptionPlanLineItemInputCustomInput & object, readonly unknown[]>));
/** The request body for: Update subscription plan. */
export type UpdateSubscriptionPlanRequest = ({
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Format: int32. */
    "billing_interval_count"?: number;
    /**
     * Omission leaves the choices unchanged. Send [] to reset to the plan’s default billing
     * interval and count. Null is invalid. maxItems: 12. uniqueItems: true. [] (Value): {@link
     * SubscriptionIntervalOption}. A billing interval, such as every 2 months, offered by a
     * subscription plan.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOption>;
    /**
     * A commitment period you agree with the buyer, 1 to 120 months. Flint shows it at checkout
     * and records it on each new subscription (contract_start_at, contract_end_at). Flint does not
     * stop the buyer from canceling earlier. Format: int32. minimum: 1. maximum: 120.
     */
    "contract_term_months"?: number;
    /** Omission leaves this field unchanged. Null clears it. minLength: 1. */
    "description"?: string | null;
    /**
     * A fee you agree the buyer owes for canceling before the contract term ends. Flint shows it
     * at checkout and records it on each new subscription, but never charges it. To collect it,
     * charge the buyer yourself, for example with an order on their saved payment method. Requires
     * contract_term_months. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "early_termination_fee_money"?: MoneyValue;
    /**
     * Resource version last read by the caller. Required when replacing an owned collection.
     * Required when any of these fields is present: images, line_items. Format: uint64. minimum:
     * 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Omission leaves this field
     * unchanged. Null clears it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * The complete desired gallery in display order. The first image is primary. Send [] to clear
     * the gallery. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequest}. An image you supply
     * by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequest>;
    /**
     * Replaces the plan's routing source. Subscriptions and payment links that already exist keep
     * the source they copied. It can't be cleared. Where you want inventory routed from: a fixed
     * Location, an inventory allocation policy, or one policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequest;
    /**
     * Replaces all owned plan line items atomically. Requires expected_version. Omission leaves
     * items unchanged; an empty array or null is invalid. Include subscription_plan_line_item_id
     * to retain an item; omit it for a new server-generated ID. Omitted members are removed.
     * Existing subscriptions keep their snapshots. Retained catalog items with the same source
     * keep their catalog snapshot; omitted modifiers keep their recorded choices. minItems: 1. []
     * (Value): {@link UpdateSubscriptionPlanLineItemRequest}. A line item to keep or add when
     * updating a subscription plan. Include `subscription_plan_line_item_id` to keep an existing
     * one.
     */
    "line_items"?: Array<UpdateSubscriptionPlanLineItemRequest>;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. This operation also limits the metadata object you send, before merging: at most 50
     * keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768
     * UTF-8 bytes of keys plus values. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to
     * a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a
     * value, a null value deletes the key, and an empty object makes no change; send null for the
     * whole field to clear all caller-owned metadata. The resulting map is limited the same way as
     * MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting
     * a key that does not exist is allowed, so the number of operations is not itself the
     * stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. anyOf[1].* (Value): string or null.
     * minLength: 1. maxLength: 4096. anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequest & object, readonly unknown[]>)) | (null) | (unknown));
    /** minLength: 1. */
    "name"?: string;
    /**
     * Omission leaves the choices unchanged. Send [] to reset to [1]. Null is invalid. maxItems:
     * 10. uniqueItems: true. [] (Value): integer. minimum: 1. maximum: 100.
     */
    "quantity_options"?: Array<number>;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "setup_fee_money"?: MoneyValue;
    /**
     * Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED
     * while existing subscriptions keep renewing. Archived plans are read-only and their status is
     * set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Value enum: "active",
     * "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Omission leaves the delivery methods unchanged. Send [] to remove all delivery methods. Null
     * is invalid. [] (Value): string. minLength: 1.
     */
    "subscription_delivery_method_ids"?: Array<string>;
    /** Format: int32. */
    "trial_period_days"?: number;
});
/** The request body for: Update subscription plan. */
export type UpdateSubscriptionPlanRequestInput = ({
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly";
    /** Format: int32. */
    "billing_interval_count"?: number;
    /**
     * Omission leaves the choices unchanged. Send [] to reset to the plan’s default billing
     * interval and count. Null is invalid. maxItems: 12. uniqueItems: true. [] (Value): {@link
     * SubscriptionIntervalOptionInput}. A billing interval, such as every 2 months, offered by a
     * subscription plan.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOptionInput>;
    /**
     * A commitment period you agree with the buyer, 1 to 120 months. Flint shows it at checkout
     * and records it on each new subscription (contract_start_at, contract_end_at). Flint does not
     * stop the buyer from canceling earlier. Format: int32. minimum: 1. maximum: 120.
     */
    "contract_term_months"?: number;
    /** Omission leaves this field unchanged. Null clears it. minLength: 1. */
    "description"?: string | null;
    /**
     * A fee you agree the buyer owes for canceling before the contract term ends. Flint shows it
     * at checkout and records it on each new subscription, but never charges it. To collect it,
     * charge the buyer yourself, for example with an order on their saved payment method. Requires
     * contract_term_months. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "early_termination_fee_money"?: MoneyValueInput;
    /**
     * Resource version last read by the caller. Required when replacing an owned collection.
     * Required when any of these fields is present: images, line_items. Format: uint64. minimum:
     * 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Omission leaves this field
     * unchanged. Null clears it. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * The complete desired gallery in display order. The first image is primary. Send [] to clear
     * the gallery. minItems: 0. maxItems: 8. [] (Value): {@link ImageRequestInput}. An image you
     * supply by `source_url`, with optional `alt` text and external reference.
     */
    "images"?: Array<ImageRequestInput>;
    /**
     * Replaces the plan's routing source. Subscriptions and payment links that already exist keep
     * the source they copied. It can't be cleared. Where you want inventory routed from: a fixed
     * Location, an inventory allocation policy, or one policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequestInput;
    /**
     * Replaces all owned plan line items atomically. Requires expected_version. Omission leaves
     * items unchanged; an empty array or null is invalid. Include subscription_plan_line_item_id
     * to retain an item; omit it for a new server-generated ID. Omitted members are removed.
     * Existing subscriptions keep their snapshots. Retained catalog items with the same source
     * keep their catalog snapshot; omitted modifiers keep their recorded choices. minItems: 1. []
     * (Value): {@link UpdateSubscriptionPlanLineItemRequestInput}. A line item to keep or add when
     * updating a subscription plan. Include `subscription_plan_line_item_id` to keep an existing
     * one.
     */
    "line_items"?: Array<UpdateSubscriptionPlanLineItemRequestInput>;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. This operation also limits the metadata object you send, before merging: at most 50
     * keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768
     * UTF-8 bytes of keys plus values. anyOf[1] (Value): {@link MetadataPatchRequestInput}.
     * Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key
     * sets a value, a null value deletes the key, and an empty object makes no change; send null
     * for the whole field to clear all caller-owned metadata. The resulting map is limited the
     * same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points,
     * values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8
     * bytes. Deleting a key that does not exist is allowed, so the number of operations is not
     * itself the stored-map limit. Values can't be empty strings, and keys starting with flint_
     * are reserved for Flint. maxProperties: 50. Changes to a caller-owned metadata map. Omit the
     * field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and
     * an empty object makes no change; send null for the whole field to clear all caller-owned
     * metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value
     * pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and
     * keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is
     * allowed, so the number of operations is not itself the stored-map limit. Values can't be
     * empty strings, and keys starting with flint_ are reserved for Flint. anyOf[1].* (Value):
     * string or null. minLength: 1. maxLength: 4096. anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequestInput & object, readonly unknown[]>)) | (null));
    /** minLength: 1. */
    "name"?: string;
    /**
     * Omission leaves the choices unchanged. Send [] to reset to [1]. Null is invalid. maxItems:
     * 10. uniqueItems: true. [] (Value): integer. minimum: 1. maximum: 100.
     */
    "quantity_options"?: Array<number>;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "setup_fee_money"?: MoneyValueInput;
    /**
     * Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED
     * while existing subscriptions keep renewing. Archived plans are read-only and their status is
     * set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Value enum: "active",
     * "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Omission leaves the delivery methods unchanged. Send [] to remove all delivery methods. Null
     * is invalid. [] (Value): string. minLength: 1.
     */
    "subscription_delivery_method_ids"?: Array<string>;
    /** Format: int32. */
    "trial_period_days"?: number;
});
/** The request body for: Update subscription. */
export type UpdateSubscriptionRequest = ({
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** minimum: 1. maximum: 365. */
    "billing_interval_count"?: number;
    /** A closed owner-specific billing schedule update. */
    "billing_schedule"?: SubscriptionBillingScheduleUpdateRequest;
    /** Value enum: false. */
    "cancel_at_period_end"?: boolean;
    /**
     * The delivery preference to set on a subscription: delivery method, type, destination, and
     * recipient.
     */
    "delivery"?: SubscriptionDeliveryRequest;
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. This operation also limits the metadata object you send, before merging: at most 50
     * keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768
     * UTF-8 bytes of keys plus values. anyOf[1] (Value): {@link MetadataPatchRequest}. Changes to
     * a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a
     * value, a null value deletes the key, and an empty object makes no change; send null for the
     * whole field to clear all caller-owned metadata. The resulting map is limited the same way as
     * MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1
     * to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting
     * a key that does not exist is allowed, so the number of operations is not itself the
     * stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50. Changes to a caller-owned metadata map. Omit the field to
     * leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty
     * object makes no change; send null for the whole field to clear all caller-owned metadata.
     * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys
     * are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
     * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so
     * the number of operations is not itself the stored-map limit. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. anyOf[1].* (Value): string or null.
     * minLength: 1. maxLength: 4096. anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequest & object, readonly unknown[]>)) | (null) | (unknown));
    /** minLength: 1. */
    "payment_method_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 100. */
    "quantity"?: number;
});
/** The request body for: Update subscription. */
export type UpdateSubscriptionRequestInput = ({
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly";
    /** minimum: 1. maximum: 365. */
    "billing_interval_count"?: number;
    /** A closed owner-specific billing schedule update. */
    "billing_schedule"?: SubscriptionBillingScheduleUpdateRequestInput;
    /** Value enum: false. */
    "cancel_at_period_end"?: false;
    /**
     * The delivery preference to set on a subscription: delivery method, type, destination, and
     * recipient.
     */
    "delivery"?: SubscriptionDeliveryRequestInput;
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge
     * by key, set a key to null to remove it, or set metadata to null to clear all caller-owned
     * metadata. An empty object makes no change. Values can't be empty strings. Keys starting with
     * flint_ are reserved for Flint, are not returned, and cannot be written through the public
     * API. This operation also limits the metadata object you send, before merging: at most 50
     * keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768
     * UTF-8 bytes of keys plus values. anyOf[1] (Value): {@link MetadataPatchRequestInput}.
     * Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key
     * sets a value, a null value deletes the key, and an empty object makes no change; send null
     * for the whole field to clear all caller-owned metadata. The resulting map is limited the
     * same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points,
     * values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8
     * bytes. Deleting a key that does not exist is allowed, so the number of operations is not
     * itself the stored-map limit. Values can't be empty strings, and keys starting with flint_
     * are reserved for Flint. maxProperties: 50. Changes to a caller-owned metadata map. Omit the
     * field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and
     * an empty object makes no change; send null for the whole field to clear all caller-owned
     * metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value
     * pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and
     * keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is
     * allowed, so the number of operations is not itself the stored-map limit. Values can't be
     * empty strings, and keys starting with flint_ are reserved for Flint. anyOf[1].* (Value):
     * string or null. minLength: 1. maxLength: 4096. anyOf[2] (Value): null.
     */
    "metadata"?: (((Exclude<MetadataPatchRequestInput & object, readonly unknown[]>)) | (null));
    /** minLength: 1. */
    "payment_method_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 100. */
    "quantity"?: number;
});
/**
 * Update at least one of registration_number, start_date or end_date. Pending and rejected
 * registrations allow all three fields; registration_number and start_date require a connection
 * that is not active. Scheduled and active registrations allow only end_date. A pending or
 * rejected registration whose tax-account copy exists or may have been created cannot change
 * start_date; delete it and create it again. Ended registrations cannot be changed. A version
 * fence by itself is not a change.
 */
export type UpdateTaxRegistrationRequest = ({
    /**
     * Last day the registration applies, inclusive. Must be on or after start_date and today
     * (UTC). Send null to clear the end date before the registration has ended. Format: date.
     * minLength: 1.
     */
    "end_date"?: string | null;
    /**
     * Resource version last read by the caller. Omit to apply the change to the current resource.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * First day the registration applies, inclusive. Flint checks it against each sale's local
     * date. Status and validation use the UTC date. May be up to 365 days in the future. Format:
     * date. minLength: 1.
     */
    "start_date"?: string;
})
    & ((unknown)
    | ({
    /**
     * First day the registration applies, inclusive. Flint checks it against each sale's local
     * date. Status and validation use the UTC date. May be up to 365 days in the future. Format:
     * date. minLength: 1.
     */
    "start_date": string;
})
    | ({
    /**
     * Last day the registration applies, inclusive. Must be on or after start_date and today
     * (UTC). Send null to clear the end date before the registration has ended. Format: date.
     * minLength: 1.
     */
    "end_date": string | null;
})
    | (Record<string, unknown>));
/**
 * Update at least one of registration_number, start_date or end_date. Pending and rejected
 * registrations allow all three fields; registration_number and start_date require a connection
 * that is not active. Scheduled and active registrations allow only end_date. A pending or
 * rejected registration whose tax-account copy exists or may have been created cannot change
 * start_date; delete it and create it again. Ended registrations cannot be changed. A version
 * fence by itself is not a change.
 */
export type UpdateTaxRegistrationRequestInput = ({
    /**
     * Last day the registration applies, inclusive. Must be on or after start_date and today
     * (UTC). Send null to clear the end date before the registration has ended. Format: date.
     * minLength: 1.
     */
    "end_date"?: string | null;
    /**
     * Resource version last read by the caller. Omit to apply the change to the current resource.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Seller's tax registration number. Write-only; responses return only its last four
     * characters. minLength: 1. maxLength: 255.
     */
    "registration_number"?: string;
    /**
     * First day the registration applies, inclusive. Flint checks it against each sale's local
     * date. Status and validation use the UTC date. May be up to 365 days in the future. Format:
     * date. minLength: 1.
     */
    "start_date"?: string;
})
    & (({
    /**
     * Seller's tax registration number. Write-only; responses return only its last four
     * characters. minLength: 1. maxLength: 255.
     */
    "registration_number": string;
})
    | ({
    /**
     * First day the registration applies, inclusive. Flint checks it against each sale's local
     * date. Status and validation use the UTC date. May be up to 365 days in the future. Format:
     * date. minLength: 1.
     */
    "start_date": string;
})
    | ({
    /**
     * Last day the registration applies, inclusive. Must be on or after start_date and today
     * (UTC). Send null to clear the end date before the registration has ended. Format: date.
     * minLength: 1.
     */
    "end_date": string | null;
}));
/** The request body for: Update webhook endpoint. */
export type UpdateWebhookEndpointRequest = ({
    /**
     * Set default to follow the merchant default, or a supported YYYY-MM-DD version to pin this
     * endpoint. Omit to leave unchanged. Null is not accepted. Switching between a pin and default
     * clears the rollback offer. minLength: 1.
     */
    "api_version"?: string;
    /**
     * Endpoint description. Omit to leave unchanged; null clears it. Send null to clear it.
     * minLength: 1. maxLength: 500.
     */
    "description"?: string | null;
    /**
     * Event types to deliver. Send ["*"] for every type the endpoint's event_sources deliver,
     * including types added later; * must be the only entry and is not available with
     * installed_merchants. At least one entry is required. Use only current event type names;
     * previous and removed names are rejected. Stored subscriptions map previous names permanently
     * and drop removed names on read. See the [changelog](/docs/changelog). minItems: 1. []
     * (Value): string. minLength: 1.
     */
    "enabled_events"?: Array<string>;
    /**
     * Event sources this endpoint receives. Defaults to merchant. Use partner_app for app
     * lifecycle events and installed_merchants for events from merchants that installed the
     * partner app. [] enum: "merchant", "partner_app", "installed_merchants". [] (Value): string.
     * Value enum: "merchant", "partner_app", "installed_merchants".
     */
    "event_sources"?: Array<"merchant" | "partner_app" | "installed_merchants" | (string & {})>;
    /**
     * Apply api_version only if this matches the resource's current api_version. A mismatch
     * returns HTTP 409. Requires api_version; null is not accepted. minLength: 1.
     */
    "expected_api_version"?: string;
    /**
     * Resource version last read by the caller. Required when enabled_events, event_sources,
     * installed_merchant_modes, or signing_methods is present, including an empty array. Optional
     * for scalar updates. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Modes of installed-merchant events this endpoint receives. Required when event_sources
     * includes installed_merchants and omitted otherwise. Partner app lifecycle events are
     * delivered regardless of these modes. minItems: 1. maxItems: 2. uniqueItems: true. [] enum:
     * "test", "live". [] (Value): string. Value enum: "test", "live".
     */
    "installed_merchant_modes"?: Array<"test" | "live" | (string & {})>;
    /** Partner app that owns partner_app or installed_merchants event sources. minLength: 1. */
    "partner_app_id"?: string;
    /**
     * Replaces the signing methods. Removing hmac deletes all shared secrets. Use rotate-secret to
     * add hmac when no secret has been issued. Omit to leave unchanged. minItems: 1. uniqueItems:
     * true. [] enum: "jwt", "hmac". [] (Value): {@link WebhookSigningMethod}. jwt uses Flint's
     * public JWKS. hmac uses a shared secret and Standard Webhooks v1. Value enum: "jwt", "hmac".
     */
    "signing_methods"?: Array<WebhookSigningMethod>;
    /** Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
    /** minLength: 1. */
    "url"?: string;
});
/** The request body for: Update webhook endpoint. */
export type UpdateWebhookEndpointRequestInput = ({
    /**
     * Set default to follow the merchant default, or a supported YYYY-MM-DD version to pin this
     * endpoint. Omit to leave unchanged. Null is not accepted. Switching between a pin and default
     * clears the rollback offer. minLength: 1.
     */
    "api_version"?: string;
    /**
     * Endpoint description. Omit to leave unchanged; null clears it. Send null to clear it.
     * minLength: 1. maxLength: 500.
     */
    "description"?: string | null;
    /**
     * Event types to deliver. Send ["*"] for every type the endpoint's event_sources deliver,
     * including types added later; * must be the only entry and is not available with
     * installed_merchants. At least one entry is required. Use only current event type names;
     * previous and removed names are rejected. Stored subscriptions map previous names permanently
     * and drop removed names on read. See the [changelog](/docs/changelog). minItems: 1. []
     * (Value): string. minLength: 1.
     */
    "enabled_events"?: Array<string>;
    /**
     * Event sources this endpoint receives. Defaults to merchant. Use partner_app for app
     * lifecycle events and installed_merchants for events from merchants that installed the
     * partner app. [] enum: "merchant", "partner_app", "installed_merchants". [] (Value): string.
     * Value enum: "merchant", "partner_app", "installed_merchants".
     */
    "event_sources"?: Array<"merchant" | "partner_app" | "installed_merchants">;
    /**
     * Apply api_version only if this matches the resource's current api_version. A mismatch
     * returns HTTP 409. Requires api_version; null is not accepted. minLength: 1.
     */
    "expected_api_version"?: string;
    /**
     * Resource version last read by the caller. Required when enabled_events, event_sources,
     * installed_merchant_modes, or signing_methods is present, including an empty array. Optional
     * for scalar updates. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Modes of installed-merchant events this endpoint receives. Required when event_sources
     * includes installed_merchants and omitted otherwise. Partner app lifecycle events are
     * delivered regardless of these modes. minItems: 1. maxItems: 2. uniqueItems: true. [] enum:
     * "test", "live". [] (Value): string. Value enum: "test", "live".
     */
    "installed_merchant_modes"?: Array<"test" | "live">;
    /** Partner app that owns partner_app or installed_merchants event sources. minLength: 1. */
    "partner_app_id"?: string;
    /**
     * Replaces the signing methods. Removing hmac deletes all shared secrets. Use rotate-secret to
     * add hmac when no secret has been issued. Omit to leave unchanged. minItems: 1. uniqueItems:
     * true. [] enum: "jwt", "hmac". [] (Value): {@link WebhookSigningMethodInput}. jwt uses
     * Flint's public JWKS. hmac uses a shared secret and Standard Webhooks v1. Value enum: "jwt",
     * "hmac".
     */
    "signing_methods"?: Array<WebhookSigningMethodInput>;
    /** Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
    /** minLength: 1. */
    "url"?: string;
});
/** The request body for: Update a workload identity. */
export type UpdateWorkloadIdentityRequest = ({
    /**
     * Bounded value array, at most 10. Defaults to []. Any glob requires an exact claim condition;
     * shared issuers require tenant pinning. maxItems: 10. uniqueItems: true. [] (Value): {@link
     * WorkloadIdentityClaimConditionRequest}. A condition to match one top-level scalar claim in
     * the workload's identity token. Omitted match defaults to exact.
     */
    "claim_conditions"?: Array<WorkloadIdentityClaimConditionRequest>;
    /**
     * Version most recently read. Required when claim_conditions or scopes is supplied; optional
     * for scalar updates. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** minLength: 1. maxLength: 100. */
    "name"?: string;
    /**
     * Complete scope set to grant. Machine callers may grant only scopes they hold in the same
     * environment. [] enum: "accounts.api_keys.read", "accounts.api_keys.write",
     * "accounts.devices.read", "accounts.devices.write", "accounts.organizations.read",
     * "accounts.organizations.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read",
     * "commerce.orders.write", "commerce.products.read", "commerce.products.write",
     * "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read",
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
     * "webhooks.write". [] (Value): string. Value enum: "accounts.api_keys.read",
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
    /** Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
    /** minLength: 1. maxLength: 1024. */
    "subject"?: string;
    /** Default: "exact". Value enum: "exact", "glob". */
    "subject_match"?: "exact" | "glob" | (string & {});
});
/** The request body for: Update a workload identity. */
export type UpdateWorkloadIdentityRequestInput = ({
    /**
     * Bounded value array, at most 10. Defaults to []. Any glob requires an exact claim condition;
     * shared issuers require tenant pinning. maxItems: 10. uniqueItems: true. [] (Value): {@link
     * WorkloadIdentityClaimConditionRequestInput}. A condition to match one top-level scalar claim
     * in the workload's identity token. Omitted match defaults to exact.
     */
    "claim_conditions"?: Array<WorkloadIdentityClaimConditionRequestInput>;
    /**
     * Version most recently read. Required when claim_conditions or scopes is supplied; optional
     * for scalar updates. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** minLength: 1. maxLength: 100. */
    "name"?: string;
    /**
     * Complete scope set to grant. Machine callers may grant only scopes they hold in the same
     * environment. [] enum: "accounts.api_keys.read", "accounts.api_keys.write",
     * "accounts.devices.read", "accounts.devices.write", "accounts.organizations.read",
     * "accounts.organizations.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read",
     * "commerce.orders.write", "commerce.products.read", "commerce.products.write",
     * "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read",
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
     * "webhooks.write". [] (Value): string. Value enum: "accounts.api_keys.read",
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
    /** Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
    /** minLength: 1. maxLength: 1024. */
    "subject"?: string;
    /** Default: "exact". Value enum: "exact", "glob". */
    "subject_match"?: "exact" | "glob";
});
/** A user with access to merchant accounts. */
export type User = {
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    "default_merchant_id"?: string;
    "email": string;
    "first_name": string;
    "last_name": string;
    /** Value enum: "active", "deactivated". */
    "status": "active" | "deactivated" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
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
/** The request body for: Verify return receipt line item. */
export type VerifyReturnReceiptLineItemRequest = {
    /**
     * Optional version of the return receipt. A stale value returns VERSION_CONFLICT with the
     * receipt ID and its current version. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** minLength: 1. */
    "return_line_item_id": string;
    /**
     * Value enum: "order_match_confirmed", "sku_match_confirmed", "inspection_confirmed",
     * "merchant_review", "other".
     */
    "verification_reason": "order_match_confirmed"
        | "sku_match_confirmed"
        | "inspection_confirmed"
        | "merchant_review"
        | "other"
        | (string & {});
    /** minLength: 1. */
    "verification_reason_message"?: string;
};
/** The request body for: Verify return receipt line item. */
export type VerifyReturnReceiptLineItemRequestInput = {
    /**
     * Optional version of the return receipt. A stale value returns VERSION_CONFLICT with the
     * receipt ID and its current version. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** minLength: 1. */
    "return_line_item_id": string;
    /**
     * Value enum: "order_match_confirmed", "sku_match_confirmed", "inspection_confirmed",
     * "merchant_review", "other".
     */
    "verification_reason": "order_match_confirmed"
        | "sku_match_confirmed"
        | "inspection_confirmed"
        | "merchant_review"
        | "other";
    /** minLength: 1. */
    "verification_reason_message"?: string;
};
export type VerifyReturnReceiptLineItemResponse = GetReturnReceiptResponse;
/** The request body for: Void package. */
export type VoidPackageRequest = {
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Optional resource version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** Void event timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /** Your note explaining this action. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Void package. */
export type VoidPackageRequestInput = {
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Optional resource version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** Void event timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /** Your note explaining this action. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Void shipment. */
export type VoidShipmentRequestInput = VoidPackageRequestInput;
/** A response containing `VoidShipmentResult` data. */
export type VoidShipmentResponse = {
    /**
     * The voided shipment and its affected packages. The shipment is the primary resource and
     * expected_version target.
     */
    "data": VoidShipmentResult;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * The voided shipment and its affected packages. The shipment is the primary resource and
 * expected_version target.
 */
export type VoidShipmentResult = {
    /**  [] (Value): {@link Package}. A package within a shipment. */
    "packages": Array<Package>;
    /** A shipment carrying fulfilled order items. */
    "shipment": Shipment;
};
/** The request body for: Waive an unpaid invoice late fee. */
export type WaiveInvoiceLateFeeRequest = {
    /** Your note explaining this action. minLength: 1. maxLength: 4096. */
    "reason_message": string;
};
/** The request body for: Waive an unpaid invoice late fee. */
export type WaiveInvoiceLateFeeRequestInput = WaiveInvoiceLateFeeRequest;
/** The request body for: Waive return line inspection. */
export type WaiveReturnLineInspectionRequest = {
    /**
     * Optional. The Return's current version, not the line's; a stale value returns 409
     * VERSION_CONFLICT. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** Value enum: "policy_override", "trusted_in_store_handoff", "merchant_review", "other". */
    "reason": "policy_override" | "trusted_in_store_handoff" | "merchant_review" | "other" | (string & {});
    /** minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Waive return line inspection. */
export type WaiveReturnLineInspectionRequestInput = {
    /**
     * Optional. The Return's current version, not the line's; a stale value returns 409
     * VERSION_CONFLICT. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** Value enum: "policy_override", "trusted_in_store_handoff", "merchant_review", "other". */
    "reason": "policy_override" | "trusted_in_store_handoff" | "merchant_review" | "other";
    /** minLength: 1. */
    "reason_message"?: string;
};
export type WaiveReturnLineInspectionResponse = GetReturnResponse;
export type WebhookDeliveriesCreateParams = (InputValue<CreateWebhookDeliveryRequestInput>);
export type WebhookDeliveriesGetParams = {};
export type WebhookDeliveriesListAttemptsParams = CheckoutSessionsListDeliverySelectionsParams;
export type WebhookDeliveriesListParams = {
    /**
     * Filter by an exact webhook event ID. Returns 404 if the event is not visible. Example:
     * "whev_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "webhook_event_id"?: InputValue<string>;
    /**
     * Filter by an exact webhook endpoint ID. Returns 404 if the endpoint is not visible. Example:
     * "whep_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "webhook_endpoint_id"?: InputValue<string>;
    /**
     * Filter by delivery status. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "pending", "delivered", "failed", "suppressed". Value enum: "pending", "delivered",
     * "failed", "suppressed". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "pending",
     * "delivered", "failed", "suppressed". anyOf[1][] (Value): string. Value enum: "pending",
     * "delivered", "failed", "suppressed". anyOf[2] (Value): string. Value enum: "pending",
     * "delivered", "failed", "suppressed".
     */
    "status"?: InputValue<("pending" | "delivered" | "failed" | "suppressed")
        | readonly ("pending" | "delivered" | "failed" | "suppressed")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
};
export type WebhookDeliveriesResendParams = (InputValue<ResendWebhookDeliveryRequestInput>);
