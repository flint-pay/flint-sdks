import type { MoneyValue, MoneyValueInput } from './types-38.js';
import type {
    MetadataPatchRequest,
    MetadataPatchRequestInput,
    MerchantSignupTermsAcceptanceRequest,
    MerchantSignupTermsAcceptanceRequestInput
} from './types-37.js';
import type { UpdateReturnReplacementLineItemRequest, UpdateReturnReplacementLineItemRequestInput } from './types-67.js';
import type {
    GetReturnResolutionResponse,
    FulfillmentSettings,
    FulfillmentSettingsRequestInput,
    GetReturnReceiptResponse
} from './types-25.js';
import type { GetReturnResponse } from './types-26.js';
import type { RiskPredicateNodeRequest, RiskPredicateNodeRequestInput } from './types-58.js';
import type { BrandingSettingsRequest, BrandingSettingsRequestInput } from './types-1.js';
import type { CheckoutSettings, CheckoutSettingsRequestInput } from './types-6.js';
import type {
    CustomerAccountSettings,
    CustomerEmailDeliverySettings,
    CustomerAccountSettingsRequestInput,
    CustomerEmailDeliverySettingsRequestInput
} from './types-15.js';
import type {
    InventorySettingsRequest,
    InventorySettingsRequestInput,
    InventoryRoutingSourceRequest,
    InventoryRoutingSourceRequestInput
} from './types-30.js';
import type {
    InvoiceSettingsPatch,
    LegalSettingsRequest,
    InvoiceSettingsPatchInput,
    LegalSettingsRequestInput,
    KnownWebhookEvent
} from './types-34.js';
import type { PaymentLimitSettingsPatch, PaymentLimitSettingsPatchInput } from './types-45.js';
import type { PaymentSettingsPatch, PaymentSettingsPatchInput } from './types-47.js';
import type { PromotionSettings, PromotionSettingsRequestInput } from './types-51.js';
import type {
    SubscriptionSettings,
    SubscriptionSettingsRequestInput,
    SubscriptionTaxRequest,
    SubscriptionTaxRequestInput
} from './types-63.js';
import type {
    TaxIdentityPatch,
    TaxIdentityPatchInput,
    TaxCalculationCallbackConfigurationPatchRequest,
    TaxCalculationCallbackConfigurationPatchRequestInput
} from './types-64.js';
import type { TaxSettingsRequest, TippingSettingsPatch, TaxSettingsRequestInput, TippingSettingsPatchInput } from './types-65.js';
import type {
    SubscriptionIntervalOption,
    SubscriptionIntervalOptionRequestInput,
    SubscriptionEndAfterCycles,
    SubscriptionEndAfterCyclesRequestInput,
    SubscriptionDeliveryRequest,
    SubscriptionEndAfterRequest,
    SubscriptionGiftRecipientRequest,
    SubscriptionDeliveryRequestInput,
    SubscriptionEndAfterRequestInput,
    SubscriptionGiftRecipientRequestInput
} from './types-61.js';
import type {
    OrderLineItemModifierRequest,
    OrderLineItemTax,
    OrderLineItemModifierRequestModelInput,
    OrderLineItemTaxRequestInput
} from './types-40.js';
import type { ImageRequest, ImageRequestInput } from './types-28.js';
import type { SubscriptionPlanChangeOption, SubscriptionPlanChangeOptionRequestInput } from './types-62.js';
import type { SubscriptionBillingScheduleUpdateRequest, SubscriptionBillingScheduleUpdateRequestInput } from './types-60.js';
import type {
    WebhookSigningMethod,
    WebhookSigningMethodInput,
    WorkloadIdentityClaimConditionRequest,
    WorkloadIdentityClaimConditionRequestInput
} from './types-69.js';
import type { ResponseMeta } from './types-54.js';
import type { Package } from './types-42.js';
import type { Shipment } from './types-59.js';
import type { InputValue } from '../runtime.js';
import type { CreateWebhookDeliveryRequestInput } from './types-14.js';
import type { DisputesAcceptParams } from './types-23.js';
import type { CustomersListAddressesParams } from './types-16.js';
/**
 * A fee or credit to keep or add when updating a return resolution. Include
 * `return_resolution_adjustment_id` to update an existing one.
 */
export type UpdateReturnResolutionAdjustmentRequest = {
    /**
     * What the fee or credit is for. Value enum: "return_shipping_fee", "restocking_fee",
     * "other_fee", "goodwill_credit", "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other"
        | (string & {});
    /**
     * Amount that counts toward the resolution. It can't exceed `assessed_amount_money`, and is
     * zero when the adjustment is waived. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "applied_amount_money": MoneyValue;
    /**
     * Amount the fee or credit comes to before any waiver. Same currency as
     * `applied_amount_money`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "assessed_amount_money": MoneyValue;
    /**
     * Why the adjustment was made. Value enum: "return_policy", "inspection_result",
     * "return_shipping_cost", "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other"
        | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
    /**
     * ID of the Return line a deduction applies to. Absent when it applies to the resolution as a
     * whole. minLength: 1. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: string;
    /**
     * Keep this member ID when updating an existing adjustment. Omit it to create a new
     * adjustment. minLength: 1. Example: "retadj_01KEZF7C00EX1XSCX7WSCDKSZZ".
     */
    "return_resolution_adjustment_id"?: string;
    /**
     * Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero.
     * Value enum: "applied", "waived".
     */
    "status"?: "applied" | "waived" | (string & {});
    /**
     * Whether the adjustment reduces or increases what the buyer receives. Value enum:
     * "deduction", "credit".
     */
    "value_effect": "deduction" | "credit" | (string & {});
    /**
     * Why the adjustment was waived. Value enum: "policy_override", "merchant_review",
     * "customer_service", "other".
     */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other" | (string & {});
    /** Detail about `waiver_reason`. minLength: 1. */
    "waiver_reason_message"?: string;
};
/**
 * A fee or credit to keep or add when updating a return resolution. Include
 * `return_resolution_adjustment_id` to update an existing one.
 */
export type UpdateReturnResolutionAdjustmentRequestInput = {
    /**
     * What the fee or credit is for. Value enum: "return_shipping_fee", "restocking_fee",
     * "other_fee", "goodwill_credit", "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other";
    /**
     * Amount that counts toward the resolution. It can't exceed `assessed_amount_money`, and is
     * zero when the adjustment is waived. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "applied_amount_money": MoneyValueInput;
    /**
     * Amount the fee or credit comes to before any waiver. Same currency as
     * `applied_amount_money`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "assessed_amount_money": MoneyValueInput;
    /**
     * Why the adjustment was made. Value enum: "return_policy", "inspection_result",
     * "return_shipping_cost", "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
    /**
     * ID of the Return line a deduction applies to. Absent when it applies to the resolution as a
     * whole. minLength: 1. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: string;
    /**
     * Keep this member ID when updating an existing adjustment. Omit it to create a new
     * adjustment. minLength: 1. Example: "retadj_01KEZF7C00EX1XSCX7WSCDKSZZ".
     */
    "return_resolution_adjustment_id"?: string;
    /**
     * Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero.
     * Value enum: "applied", "waived".
     */
    "status"?: "applied" | "waived";
    /**
     * Whether the adjustment reduces or increases what the buyer receives. Value enum:
     * "deduction", "credit".
     */
    "value_effect": "deduction" | "credit";
    /**
     * Why the adjustment was waived. Value enum: "policy_override", "merchant_review",
     * "customer_service", "other".
     */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other";
    /** Detail about `waiver_reason`. minLength: 1. */
    "waiver_reason_message"?: string;
};
/** A return line and quantity to keep or add when updating a return resolution. */
export type UpdateReturnResolutionLineItemRequest = {
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * ID of the Return line the resolution covers. minLength: 1. Example:
     * "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
    /**
     * ID of an existing resolution line to keep. Leave out to add a new line. minLength: 1.
     * Example: "retresli_01KEZF7C00CR5NCDXRBP9W14CB".
     */
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
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination
     * and conflicting_fields naming resolution_type. Store credit and its corrections always issue
     * new gift cards. PATCH can change it only while proposed. Retry persists the chosen
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
    /**
     * Required for merchant exchange and replacement requests. original_price preserves the
     * selected units' net paid amounts using refund allocation; current_price uses catalog prices;
     * merchant_agreed_price uses each supplied unit_price_money. Buyer requests must omit
     * pricing_basis: replacements use original_price; exchanges use original_price when every
     * replacement matches selected returned merchandise by variant, bundle, or product, otherwise
     * current_price. Value enum: "original_price", "current_price", "merchant_agreed_price".
     */
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
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination
     * and conflicting_fields naming resolution_type. Store credit and its corrections always issue
     * new gift cards. PATCH can change it only while proposed. Retry persists the chosen
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
    /**
     * Required for merchant exchange and replacement requests. original_price preserves the
     * selected units' net paid amounts using refund allocation; current_price uses catalog prices;
     * merchant_agreed_price uses each supplied unit_price_money. Buyer requests must omit
     * pricing_basis: replacements use original_price; exchanges use original_price when every
     * replacement matches selected returned merchandise by variant, bundle, or product, otherwise
     * current_price. Value enum: "original_price", "current_price", "merchant_agreed_price".
     */
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
/** The request body for: Update a risk list. minProperties: 1. */
export type UpdateRiskListRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /** Name of a merchant-created risk list. It can't be cleared. minLength: 1. */
    "name": string;
};
/** The request body for: Update a risk list. minProperties: 1. */
export type UpdateRiskListRequestInput = UpdateRiskListRequest;
/** The request body for: Update a risk rule. minProperties: 1. */
export type UpdateRiskRuleRequest = ({
    /**
     * What Flint does with a payment the rule matches. Value enum: "allow", "block", "review",
     * "require_3ds".
     */
    "action"?: "allow" | "block" | "review" | "require_3ds" | (string & {});
    /**
     * Your note on what the rule is for. Limited to 512 characters (Unicode code points). Leading
     * and trailing whitespace is trimmed. minLength: 1. maxLength: 512.
     */
    "description"?: string;
    /** Optional risk rule version last read by the caller. Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * The condition a payment must meet for the rule to match. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate"?: RiskPredicateNodeRequest;
    /** Whether the rule runs. Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
})
    & (({
    /**
     * What Flint does with a payment the rule matches. Value enum: "allow", "block", "review",
     * "require_3ds".
     */
    "action": "allow" | "block" | "review" | "require_3ds" | (string & {});
})
    | ({
    /**
     * The condition a payment must meet for the rule to match. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate": RiskPredicateNodeRequest;
})
    | ({
    /**
     * Your note on what the rule is for. Limited to 512 characters (Unicode code points). Leading
     * and trailing whitespace is trimmed. minLength: 1. maxLength: 512.
     */
    "description": string;
})
    | ({
    /** Whether the rule runs. Value enum: "active", "inactive". */
    "status": "active" | "inactive" | (string & {});
})
    | (Record<string, unknown>));
/** The request body for: Update a risk rule. minProperties: 1. */
export type UpdateRiskRuleRequestInput = ({
    /**
     * What Flint does with a payment the rule matches. Value enum: "allow", "block", "review",
     * "require_3ds".
     */
    "action"?: "allow" | "block" | "review" | "require_3ds";
    /**
     * Your note on what the rule is for. Limited to 512 characters (Unicode code points). Leading
     * and trailing whitespace is trimmed. minLength: 1. maxLength: 512.
     */
    "description"?: string;
    /** Optional risk rule version last read by the caller. Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * The condition a payment must meet for the rule to match. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate"?: RiskPredicateNodeRequestInput;
    /** Whether the rule runs. Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
})
    & (({
    /**
     * What Flint does with a payment the rule matches. Value enum: "allow", "block", "review",
     * "require_3ds".
     */
    "action": "allow" | "block" | "review" | "require_3ds";
})
    | ({
    /**
     * The condition a payment must meet for the rule to match. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate": RiskPredicateNodeRequestInput;
})
    | ({
    /**
     * Your note on what the rule is for. Limited to 512 characters (Unicode code points). Leading
     * and trailing whitespace is trimmed. minLength: 1. maxLength: 512.
     */
    "description": string;
})
    | ({
    /** Whether the rule runs. Value enum: "active", "inactive". */
    "status": "active" | "inactive";
}));
/**
 * Service fulfillment fields to change when updating a fulfillment: scheduled times, completion
 * time, and notes. Send null to clear a field.
 */
export type UpdateServiceFulfillmentDetails = {
    /**
     * RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "completed_at"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "notes"?: string | null;
    /**
     * RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "scheduled_end_at"?: string | null;
    /**
     * RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "scheduled_start_at"?: string | null;
    /** Uses an IANA time zone name. minLength: 1. */
    "timezone"?: string;
};
/**
 * Service fulfillment fields to change when updating a fulfillment: scheduled times, completion
 * time, and notes. Send null to clear a field.
 */
export type UpdateServiceFulfillmentDetailsInput = {
    /**
     * RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "completed_at"?: string | globalThis.Date | null;
    /** Send null to clear it. minLength: 1. */
    "notes"?: string | null;
    /**
     * RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "scheduled_end_at"?: string | globalThis.Date | null;
    /**
     * RFC3339 timestamp. Send null to clear it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "scheduled_start_at"?: string | globalThis.Date | null;
    /** Uses an IANA time zone name. minLength: 1. */
    "timezone"?: string;
};
/** The request body for: Update merchant settings. minProperties: 1. */
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
     * Merchant defaults for checkout: delivery methods, expiration, payment options, required
     * contact fields, promotion codes, recovery email, and saved payment details. anyOf[2]
     * (Value): null.
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
     * remove every value you set in this section. anyOf[1] (Value): {@link
     * InventorySettingsRequest}. Inventory settings to change: the `low_stock_threshold`, how
     * inventory failures are handled for each order source, and the `default_routing_source` for
     * requests that omit one. anyOf[2] (Value): null.
     */
    "inventory"?: ((InventorySettingsRequest) | (null));
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
     * Patch object: fields you send are applied, fields you omit are unchanged. Changes the
     * statement text for new payments. Changes to the statement text for new payments.
     */
    "payments"?: PaymentSettingsPatch;
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Send null to
     * remove every value you set in this section. anyOf[1] (Value): {@link PromotionSettings}.
     * Merchant promotion settings: whether automatic promotions and codes are enabled, and how
     * many promotions can apply to one order. anyOf[2] (Value): null.
     */
    "promotions"?: ((PromotionSettings) | (null));
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
     * Flint does not verify IDs. On a customer, automatic tax sends the tax ID for an EU, GB, AU
     * or NZ destination to its tax provider, which can apply a reverse charge; other IDs do not
     * change tax treatment. Tax IDs are an owned collection in display order; replacing the array
     * requires the parent's expected_version. Existing entries retain their document_tax_id; omit
     * an entry to remove it, or omit its ID to add one. anyOf[2] (Value): null.
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
/** The request body for: Update merchant settings. minProperties: 1. */
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
     * CheckoutSettingsRequestInput}. Merchant defaults for checkout: delivery methods, expiration,
     * payment options, required contact fields, promotion codes, recovery email, and saved payment
     * details. anyOf[2] (Value): null.
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
     * InventorySettingsRequestInput}. Inventory settings to change: the `low_stock_threshold`, how
     * inventory failures are handled for each order source, and the `default_routing_source` for
     * requests that omit one. anyOf[2] (Value): null.
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
     * Patch object: fields you send are applied, fields you omit are unchanged. Changes the
     * statement text for new payments. Changes to the statement text for new payments.
     */
    "payments"?: PaymentSettingsPatchInput;
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
     * notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID for an EU,
     * GB, AU or NZ destination to its tax provider, which can apply a reverse charge; other IDs do
     * not change tax treatment. Tax IDs are an owned collection in display order; replacing the
     * array requires the parent's expected_version. Existing entries retain their document_tax_id;
     * omit an entry to remove it, or omit its ID to add one. anyOf[2] (Value): null.
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
/** The request body for: Update shipment. minProperties: 1. */
export type UpdateShipmentRequest = {
    /** Optional resource version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
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
/** The request body for: Update shipment. minProperties: 1. */
export type UpdateShipmentRequestInput = {
    /** Optional resource version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
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
/** The request body for: Update subscription line item. minProperties: 1. */
export type UpdateSubscriptionLineItemRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 9999.
     */
    "quantity"?: number;
    /**
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
};
/** The request body for: Update subscription line item. minProperties: 1. */
export type UpdateSubscriptionLineItemRequestInput = UpdateSubscriptionLineItemRequest;
/** The request body for: Update subscription offer. minProperties: 1. */
export type UpdateSubscriptionOfferRequest = {
    /**
     * Offered billing interval and count pairs. Every option bills the same catalog line prices
     * once per period; changing cadence does not scale prices. minItems: 1. maxItems: 12.
     * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing cadence offered
     * by a subscription plan or offer. Every option bills the same line prices once per period;
     * prices are not scaled by the interval. For a different price per interval, create separate
     * plans.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOption>;
    /**
     * The version read before editing. A mismatch returns VERSION_CONFLICT. Format: uint64.
     * minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Omission leaves this field
     * unchanged. Null clears it. minLength: 1. maxLength: 255. Example: "warehouse-1842".
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
     * Products whose active variants the offer covers, including variants added later. At most
     * 100. Send at least one product or variant. Each product must be active and physical,
     * digital, or a service. A variant can be in only one active offer; an overlap returns `409
     * ALREADY_EXISTS` naming the other offer. maxItems: 100. uniqueItems: true. [] (Value):
     * string. minLength: 1. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_ids"?: Array<string>;
    /**
     * An active promotion with forever recurrence. On PATCH, null removes the discount for new
     * signups; omission keeps it. minLength: 1. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     */
    "promotion_id"?: string | null;
    /** Use active or inactive. Archive the offer with DELETE. Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Delivery methods offered at signup. An empty array uses the store's checkout defaults.
     * Existing subscriptions keep their selected method. maxItems: 25. uniqueItems: true. []
     * (Value): string. minLength: 1. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "subscription_delivery_method_ids"?: Array<string>;
    /**
     * Individual variants the offer covers. At most 100. Send at least one product or variant. A
     * variant can be in only one active offer; an overlap returns `409 ALREADY_EXISTS` naming the
     * other offer. maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
};
/** The request body for: Update subscription offer. minProperties: 1. */
export type UpdateSubscriptionOfferRequestInput = {
    /**
     * Offered billing interval and count pairs. Every option bills the same catalog line prices
     * once per period; changing cadence does not scale prices. minItems: 1. maxItems: 12.
     * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOptionRequestInput}. A billing
     * cadence offered by a subscription plan or offer. Every option bills the same line prices
     * once per period; prices are not scaled by the interval. For a different price per interval,
     * create separate plans.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOptionRequestInput>;
    /**
     * The version read before editing. A mismatch returns VERSION_CONFLICT. Format: uint64.
     * minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Omission leaves this field
     * unchanged. Null clears it. minLength: 1. maxLength: 255. Example: "warehouse-1842".
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
     * Products whose active variants the offer covers, including variants added later. At most
     * 100. Send at least one product or variant. Each product must be active and physical,
     * digital, or a service. A variant can be in only one active offer; an overlap returns `409
     * ALREADY_EXISTS` naming the other offer. maxItems: 100. uniqueItems: true. [] (Value):
     * string. minLength: 1. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_ids"?: Array<string>;
    /**
     * An active promotion with forever recurrence. On PATCH, null removes the discount for new
     * signups; omission keeps it. minLength: 1. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     */
    "promotion_id"?: string | null;
    /** Use active or inactive. Archive the offer with DELETE. Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
    /**
     * Delivery methods offered at signup. An empty array uses the store's checkout defaults.
     * Existing subscriptions keep their selected method. maxItems: 25. uniqueItems: true. []
     * (Value): string. minLength: 1. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "subscription_delivery_method_ids"?: Array<string>;
    /**
     * Individual variants the offer covers. At most 100. Send at least one product or variant. A
     * variant can be in only one active offer; an overlap returns `409 ALREADY_EXISTS` naming the
     * other offer. maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
};
/** The `bundle` variant of `UpdateSubscriptionPlanLineItemInput`. */
export type UpdateSubscriptionPlanLineItemInputBundle = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id": string;
    /** minLength: 1. */
    "description"?: string;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned metadata for this selection, returned on the order line
     * item's modifier. Values can't be empty strings. Keys starting with flint_ are reserved for
     * Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id (Optional):
     * string. ID of the existing modifier. Treated as an opaque resource reference; accepted
     * spellings follow resource ID validation. Its resolved price and the resulting line subtotal
     * must satisfy the order money ceiling. The amount and every computed order amount must not
     * exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above
     * this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field.
     * Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequest}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link OrderLineItemModifierInputText}.
     * The `text` variant of `OrderLineItemModifierInput`.
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
     * from other plans are rejected. minLength: 1. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /** minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id": string;
}));
/** The `bundle` variant of `UpdateSubscriptionPlanLineItemInput`. */
export type UpdateSubscriptionPlanLineItemInputBundleInput = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id": string;
    /** minLength: 1. */
    "description"?: string;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequestModelInput}. A modifier selection you supply
     * on a line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned metadata for this selection, returned
     * on the order line item's modifier. Values can't be empty strings. Keys starting with flint_
     * are reserved for Flint, are not returned, and cannot be written through the public API.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id
     * (Optional): string. ID of the existing modifier. Treated as an opaque resource reference;
     * accepted spellings follow resource ID validation. Its resolved price and the resulting line
     * subtotal must satisfy the order money ceiling. The amount and every computed order amount
     * must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or
     * calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
     * responsible input field. Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalogRequestInput}. The `catalog`
     * variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextRequestInput}. The `text` variant of
     * `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestModelInput & object, readonly unknown[]>)
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
     * from other plans are rejected. minLength: 1. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxRequestInput;
    /** Value enum: "bundle". */
    "type": "bundle";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "bundle". */
    "type": ("bundle") & ("bundle");
    /** minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
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
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned metadata for this selection, returned on the order line
     * item's modifier. Values can't be empty strings. Keys starting with flint_ are reserved for
     * Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id (Optional):
     * string. ID of the existing modifier. Treated as an opaque resource reference; accepted
     * spellings follow resource ID validation. Its resolved price and the resulting line subtotal
     * must satisfy the order money ceiling. The amount and every computed order amount must not
     * exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above
     * this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field.
     * Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequest}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link OrderLineItemModifierInputText}.
     * The `text` variant of `OrderLineItemModifierInput`.
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
     * from other plans are rejected. minLength: 1. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "custom". */
    "type": "custom" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
    /** minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
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
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequestModelInput}. A modifier selection you supply
     * on a line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned metadata for this selection, returned
     * on the order line item's modifier. Values can't be empty strings. Keys starting with flint_
     * are reserved for Flint, are not returned, and cannot be written through the public API.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id
     * (Optional): string. ID of the existing modifier. Treated as an opaque resource reference;
     * accepted spellings follow resource ID validation. Its resolved price and the resulting line
     * subtotal must satisfy the order money ceiling. The amount and every computed order amount
     * must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or
     * calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
     * responsible input field. Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalogRequestInput}. The `catalog`
     * variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextRequestInput}. The `text` variant of
     * `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestModelInput & object, readonly unknown[]>)
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
     * from other plans are rejected. minLength: 1. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxRequestInput;
    /** Value enum: "custom". */
    "type": "custom";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValueInput;
    /** minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
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
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned metadata for this selection, returned on the order line
     * item's modifier. Values can't be empty strings. Keys starting with flint_ are reserved for
     * Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id (Optional):
     * string. ID of the existing modifier. Treated as an opaque resource reference; accepted
     * spellings follow resource ID validation. Its resolved price and the resulting line subtotal
     * must satisfy the order money ceiling. The amount and every computed order amount must not
     * exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above
     * this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field.
     * Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequest}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link OrderLineItemModifierInputText}.
     * The `text` variant of `OrderLineItemModifierInput`.
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
     * from other plans are rejected. minLength: 1. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id": string;
})
    & (({
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
    /** minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id": string;
}));
/** The `variant` variant of `UpdateSubscriptionPlanLineItemInput`. */
export type UpdateSubscriptionPlanLineItemInputVariantInput = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequestModelInput}. A modifier selection you supply
     * on a line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned metadata for this selection, returned
     * on the order line item's modifier. Values can't be empty strings. Keys starting with flint_
     * are reserved for Flint, are not returned, and cannot be written through the public API.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id
     * (Optional): string. ID of the existing modifier. Treated as an opaque resource reference;
     * accepted spellings follow resource ID validation. Its resolved price and the resulting line
     * subtotal must satisfy the order money ceiling. The amount and every computed order amount
     * must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or
     * calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
     * responsible input field. Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalogRequestInput}. The `catalog`
     * variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextRequestInput}. The `text` variant of
     * `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestModelInput & object, readonly unknown[]>)
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
     * from other plans are rejected. minLength: 1. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxRequestInput;
    /** Value enum: "variant". */
    "type": "variant";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id": string;
})
    & (({
    /** Value enum: "variant". */
    "type": ("variant") & ("variant");
    /** minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
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
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned metadata for this selection, returned on the order line
     * item's modifier. Values can't be empty strings. Keys starting with flint_ are reserved for
     * Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id (Optional):
     * string. ID of the existing modifier. Treated as an opaque resource reference; accepted
     * spellings follow resource ID validation. Its resolved price and the resulting line subtotal
     * must satisfy the order money ceiling. The amount and every computed order amount must not
     * exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above
     * this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field.
     * Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequest}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link OrderLineItemModifierInputText}.
     * The `text` variant of `OrderLineItemModifierInput`.
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
     * from other plans are rejected. minLength: 1. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "variant", "bundle", "custom". */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
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
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    /**
     *  [] (Value): {@link OrderLineItemModifierRequestModelInput}. A modifier selection you supply
     * on a line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned metadata for this selection, returned
     * on the order line item's modifier. Values can't be empty strings. Keys starting with flint_
     * are reserved for Flint, are not returned, and cannot be written through the public API.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id
     * (Optional): string. ID of the existing modifier. Treated as an opaque resource reference;
     * accepted spellings follow resource ID validation. Its resolved price and the resulting line
     * subtotal must satisfy the order money ceiling. The amount and every computed order amount
     * must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or
     * calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
     * responsible input field. Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalogRequestInput}. The `catalog`
     * variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextRequestInput}. The `text` variant of
     * `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestModelInput & object, readonly unknown[]>)
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
     * from other plans are rejected. minLength: 1. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id"?: string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxRequestInput;
    /** Value enum: "variant", "bundle", "custom". */
    "type": "variant" | "bundle" | "custom";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
})
    & ((Exclude<UpdateSubscriptionPlanLineItemInputVariantInput & object, readonly unknown[]>)
    | (Exclude<UpdateSubscriptionPlanLineItemInputBundleInput & object, readonly unknown[]>)
    | (Exclude<UpdateSubscriptionPlanLineItemInputCustomInput & object, readonly unknown[]>));
/** The request body for: Update subscription plan. minProperties: 1. */
export type UpdateSubscriptionPlanRequest = ({
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Format: int32. */
    "billing_interval_count"?: number;
    /**
     * Omission leaves the choices unchanged. Send [] to reset to the plan's default billing
     * interval and count. Null is invalid. Line prices are per delivery. Each option charges for
     * all deliveries in its period. Use separate plans or promotions for different prices per
     * interval. maxItems: 12. uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A
     * billing cadence offered by a subscription plan or offer. Every option bills the same line
     * prices once per period; prices are not scaled by the interval. For a different price per
     * interval, create separate plans.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOption>;
    /**
     * A commitment period you agree with the buyer, 1 to 120 months. Flint shows it at checkout
     * and records it on each new subscription (contract_start_at, contract_end_at). Flint does not
     * stop the buyer from canceling earlier. Format: int32. minimum: 1. maximum: 120.
     */
    "contract_term_months"?: number;
    /**
     * Delivery cadence, set together with delivery_interval_count. Null when no separate delivery
     * cadence is set; one delivery is made per billing period. Each billing option must be a whole
     * multiple in the same unit family (days/weeks or months/years), with 1 to 24 deliveries per
     * period. Existing subscriptions keep their frozen cadence. Omit both fields on PATCH to keep
     * the cadence; send both as null to clear it. Value enum: "daily", "weekly", "monthly",
     * "yearly", null.
     */
    "delivery_interval"?: "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
    /**
     * Positive number of delivery intervals between deliveries. Set or clear together with
     * delivery_interval. Null when no separate delivery cadence is set; one delivery is made per
     * billing period. Format: int32. minimum: 1.
     */
    "delivery_interval_count"?: number | null;
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
     * Default automatic end for new subscriptions. Counts charged billing cycles, from 1 to 1200.
     * Send null for no automatic end. Existing subscriptions keep their recorded condition. Null
     * when no default automatic end is set. anyOf[1] (Value): {@link SubscriptionEndAfterCycles}.
     * A subscription automatic end measured by the total number of charged billing cycles.
     * anyOf[2] (Value): null.
     */
    "end_after"?: ((SubscriptionEndAfterCycles) | (null));
    /**
     * Resource version last read by the caller. Required when replacing an owned collection.
     * Required when any of these fields is present: images, line_items, plan_change_options.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Omission leaves this field
     * unchanged. Null clears it. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Whether checkout buyers can name a gift recipient. Checkout sessions that are already open
     * keep the setting they were created with.
     */
    "gifts_enabled"?: boolean;
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
     * Plans subscribers may switch to, in display order, with the billing timing for each target.
     * Empty means plan changes are off. Omission on PATCH keeps the options; an array replaces
     * them and requires expected_version. Send [] to clear. Null is invalid. maxItems: 25. []
     * (Value): {@link SubscriptionPlanChangeOption}. A target plan subscribers may switch to and
     * the billing timing for that change.
     */
    "plan_change_options"?: Array<SubscriptionPlanChangeOption>;
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
     * is invalid. [] (Value): string. minLength: 1. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "subscription_delivery_method_ids"?: Array<string>;
    /**
     * Days of free trial before the first charge, from 0 to 365; 0 means no trial. Send 0 to
     * remove the trial. Not allowed on plans with lines that ship. Format: int32. minimum: 0.
     * maximum: 365.
     */
    "trial_period_days"?: number;
});
/** The request body for: Update subscription plan. minProperties: 1. */
export type UpdateSubscriptionPlanRequestInput = ({
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly";
    /** Format: int32. */
    "billing_interval_count"?: number;
    /**
     * Omission leaves the choices unchanged. Send [] to reset to the plan's default billing
     * interval and count. Null is invalid. Line prices are per delivery. Each option charges for
     * all deliveries in its period. Use separate plans or promotions for different prices per
     * interval. maxItems: 12. uniqueItems: true. [] (Value): {@link
     * SubscriptionIntervalOptionRequestInput}. A billing cadence offered by a subscription plan or
     * offer. Every option bills the same line prices once per period; prices are not scaled by the
     * interval. For a different price per interval, create separate plans.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOptionRequestInput>;
    /**
     * A commitment period you agree with the buyer, 1 to 120 months. Flint shows it at checkout
     * and records it on each new subscription (contract_start_at, contract_end_at). Flint does not
     * stop the buyer from canceling earlier. Format: int32. minimum: 1. maximum: 120.
     */
    "contract_term_months"?: number;
    /**
     * Delivery cadence, set together with delivery_interval_count. Null when no separate delivery
     * cadence is set; one delivery is made per billing period. Each billing option must be a whole
     * multiple in the same unit family (days/weeks or months/years), with 1 to 24 deliveries per
     * period. Existing subscriptions keep their frozen cadence. Omit both fields on PATCH to keep
     * the cadence; send both as null to clear it. Value enum: "daily", "weekly", "monthly",
     * "yearly", null.
     */
    "delivery_interval"?: "daily" | "weekly" | "monthly" | "yearly" | null;
    /**
     * Positive number of delivery intervals between deliveries. Set or clear together with
     * delivery_interval. Null when no separate delivery cadence is set; one delivery is made per
     * billing period. Format: int32. minimum: 1.
     */
    "delivery_interval_count"?: number | null;
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
     * Default automatic end for new subscriptions. Counts charged billing cycles, from 1 to 1200.
     * Send null for no automatic end. Existing subscriptions keep their recorded condition. Null
     * when no default automatic end is set. anyOf[1] (Value): {@link
     * SubscriptionEndAfterCyclesRequestInput}. A subscription automatic end measured by the total
     * number of charged billing cycles. anyOf[2] (Value): null.
     */
    "end_after"?: ((SubscriptionEndAfterCyclesRequestInput) | (null));
    /**
     * Resource version last read by the caller. Required when replacing an owned collection.
     * Required when any of these fields is present: images, line_items, plan_change_options.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Omission leaves this field
     * unchanged. Null clears it. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Whether checkout buyers can name a gift recipient. Checkout sessions that are already open
     * keep the setting they were created with.
     */
    "gifts_enabled"?: boolean;
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
     * Plans subscribers may switch to, in display order, with the billing timing for each target.
     * Empty means plan changes are off. Omission on PATCH keeps the options; an array replaces
     * them and requires expected_version. Send [] to clear. Null is invalid. maxItems: 25. []
     * (Value): {@link SubscriptionPlanChangeOptionRequestInput}. A target plan subscribers may
     * switch to and the billing timing for that change.
     */
    "plan_change_options"?: Array<SubscriptionPlanChangeOptionRequestInput>;
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
     * is invalid. [] (Value): string. minLength: 1. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "subscription_delivery_method_ids"?: Array<string>;
    /**
     * Days of free trial before the first charge, from 0 to 365; 0 means no trial. Send 0 to
     * remove the trial. Not allowed on plans with lines that ship. Format: int32. minimum: 0.
     * maximum: 365.
     */
    "trial_period_days"?: number;
});
/** The request body for: Update subscription. minProperties: 1. */
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
    /**
     * Replace the complete automatic end condition, or send null to clear it. Requires
     * expected_version. Buyers cannot change this field. anyOf[1] (Value): {@link
     * SubscriptionEndAfterRequest}. An automatic end condition to assign to a subscription,
     * measured by charged billing cycles or a local calendar date. anyOf[2] (Value): null.
     */
    "end_after"?: ((SubscriptionEndAfterRequest) | (null) | (unknown));
    /**
     * The current subscription version. Required when end_after is present. Format: uint64.
     * minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Replace the whole gift recipient, or send null to clear it. There are no partial changes.
     * Send expected_version to guard against concurrent changes. Buyers cannot change this field.
     * anyOf[1] (Value): {@link SubscriptionGiftRecipientRequest}. Who receives a gift
     * subscription. Sending it replaces the whole recipient. anyOf[2] (Value): null.
     */
    "gift_recipient"?: ((SubscriptionGiftRecipientRequest) | (null));
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
    /** minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". */
    "payment_method_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 100. */
    "quantity"?: number;
    /**
     * Send null to cancel a scheduled plan change and keep the current plan. Omit to leave it
     * unchanged. Schedule or replace through change-plan.
     */
    "scheduled_plan_change"?: null;
    /**
     * Replace the subscription's tax as a whole, or send null to clear it, so its orders follow
     * your settings again. Orders Flint creates after the change use it; an open renewal order
     * keeps the tax it was created with. Buyers cannot change this field. anyOf[1] (Value): {@link
     * SubscriptionTaxRequest}. Replaced as a whole: send every field you want to keep. anyOf[2]
     * (Value): null.
     */
    "tax"?: ((SubscriptionTaxRequest) | (null));
});
/** The request body for: Update subscription. minProperties: 1. */
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
    /**
     * Replace the complete automatic end condition, or send null to clear it. Requires
     * expected_version. Buyers cannot change this field. anyOf[1] (Value): {@link
     * SubscriptionEndAfterRequestInput}. An automatic end condition to assign to a subscription,
     * measured by charged billing cycles or a local calendar date. anyOf[2] (Value): null.
     */
    "end_after"?: ((SubscriptionEndAfterRequestInput) | (null));
    /**
     * The current subscription version. Required when end_after is present. Format: uint64.
     * minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * Replace the whole gift recipient, or send null to clear it. There are no partial changes.
     * Send expected_version to guard against concurrent changes. Buyers cannot change this field.
     * anyOf[1] (Value): {@link SubscriptionGiftRecipientRequestInput}. Who receives a gift
     * subscription. Sending it replaces the whole recipient. anyOf[2] (Value): null.
     */
    "gift_recipient"?: ((SubscriptionGiftRecipientRequestInput) | (null));
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
    /** minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". */
    "payment_method_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 100. */
    "quantity"?: number;
    /**
     * Send null to cancel a scheduled plan change and keep the current plan. Omit to leave it
     * unchanged. Schedule or replace through change-plan.
     */
    "scheduled_plan_change"?: null;
    /**
     * Replace the subscription's tax as a whole, or send null to clear it, so its orders follow
     * your settings again. Orders Flint creates after the change use it; an open renewal order
     * keeps the tax it was created with. Buyers cannot change this field. anyOf[1] (Value): {@link
     * SubscriptionTaxRequestInput}. Replaced as a whole: send every field you want to keep.
     * anyOf[2] (Value): null.
     */
    "tax"?: ((SubscriptionTaxRequestInput) | (null));
});
/** The request body for: Update a tax calculation callback. minProperties: 1. */
export type UpdateTaxCalculationCallbackRequest = ({
    /**
     * Changes to the callback's configuration. Requires expected_version. Changes to a tax
     * calculation callback's configuration. Only the keys you send change; keys you leave out keep
     * their current values. Null restores an optional key's default. Requires expected_version.
     * minProperties: 1.
     */
    "configuration"?: TaxCalculationCallbackConfigurationPatchRequest;
    /**
     * The `version` you last read. A stale value is refused with a version conflict. Required with
     * `configuration` and `signing_methods`. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /** New label for the callback. minLength: 1. */
    "name"?: string;
    /**
     * How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's
     * public keys, `hmac` for a shared secret, or both. Replaces the whole set. Requires
     * expected_version. Removing hmac deletes the current and previous secrets. minItems: 1.
     * uniqueItems: true. [] enum: "jwt", "hmac". [] (Value): {@link WebhookSigningMethod}. How
     * Flint signs requests to this endpoint. Value enum: "jwt", "hmac".
     */
    "signing_methods"?: Array<WebhookSigningMethod>;
    /**
     * Activates or deactivates the callback. Send it alone, with at most `expected_version`. -
     * `active`: Makes the callback selectable in `tax.calculation_callback_id`. - `inactive`:
     * Stops the callback from being selected. Refused while your settings select it. Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
})
    & (({
    /** New label for the callback. minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Changes to the callback's configuration. Requires expected_version. Changes to a tax
     * calculation callback's configuration. Only the keys you send change; keys you leave out keep
     * their current values. Null restores an optional key's default. Requires expected_version.
     * minProperties: 1.
     */
    "configuration": TaxCalculationCallbackConfigurationPatchRequest;
})
    | ({
    /**
     * How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's
     * public keys, `hmac` for a shared secret, or both. Replaces the whole set. Requires
     * expected_version. Removing hmac deletes the current and previous secrets. minItems: 1.
     * uniqueItems: true. [] enum: "jwt", "hmac". [] (Value): {@link WebhookSigningMethod}. How
     * Flint signs requests to this endpoint. Value enum: "jwt", "hmac".
     */
    "signing_methods": Array<WebhookSigningMethod>;
})
    | ({
    /**
     * Activates or deactivates the callback. Send it alone, with at most `expected_version`. -
     * `active`: Makes the callback selectable in `tax.calculation_callback_id`. - `inactive`:
     * Stops the callback from being selected. Refused while your settings select it. Value enum:
     * "active", "inactive".
     */
    "status": "active" | "inactive" | (string & {});
})
    | (Record<string, unknown>));
/** The request body for: Update a tax calculation callback. minProperties: 1. */
export type UpdateTaxCalculationCallbackRequestInput = ({
    /**
     * Changes to the callback's configuration. Requires expected_version. Changes to a tax
     * calculation callback's configuration. Only the keys you send change; keys you leave out keep
     * their current values. Null restores an optional key's default. Requires expected_version.
     * minProperties: 1.
     */
    "configuration"?: TaxCalculationCallbackConfigurationPatchRequestInput;
    /**
     * The `version` you last read. A stale value is refused with a version conflict. Required with
     * `configuration` and `signing_methods`. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /** New label for the callback. minLength: 1. */
    "name"?: string;
    /**
     * How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's
     * public keys, `hmac` for a shared secret, or both. Replaces the whole set. Requires
     * expected_version. Removing hmac deletes the current and previous secrets. minItems: 1.
     * uniqueItems: true. [] enum: "jwt", "hmac". [] (Value): {@link WebhookSigningMethodInput}.
     * How Flint signs requests to this endpoint. Value enum: "jwt", "hmac".
     */
    "signing_methods"?: Array<WebhookSigningMethodInput>;
    /**
     * Activates or deactivates the callback. Send it alone, with at most `expected_version`. -
     * `active`: Makes the callback selectable in `tax.calculation_callback_id`. - `inactive`:
     * Stops the callback from being selected. Refused while your settings select it. Value enum:
     * "active", "inactive".
     */
    "status"?: "active" | "inactive";
})
    & (({
    /** New label for the callback. minLength: 1. */
    "name": string;
})
    | ({
    /**
     * Caller-owned identifier for this resource in an external system. Send null to clear it.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string | null;
})
    | ({
    /**
     * Changes to the callback's configuration. Requires expected_version. Changes to a tax
     * calculation callback's configuration. Only the keys you send change; keys you leave out keep
     * their current values. Null restores an optional key's default. Requires expected_version.
     * minProperties: 1.
     */
    "configuration": TaxCalculationCallbackConfigurationPatchRequestInput;
})
    | ({
    /**
     * How Flint signs requests to your endpoint: `jwt` for a bearer JWT you verify with Flint's
     * public keys, `hmac` for a shared secret, or both. Replaces the whole set. Requires
     * expected_version. Removing hmac deletes the current and previous secrets. minItems: 1.
     * uniqueItems: true. [] enum: "jwt", "hmac". [] (Value): {@link WebhookSigningMethodInput}.
     * How Flint signs requests to this endpoint. Value enum: "jwt", "hmac".
     */
    "signing_methods": Array<WebhookSigningMethodInput>;
})
    | ({
    /**
     * Activates or deactivates the callback. Send it alone, with at most `expected_version`. -
     * `active`: Makes the callback selectable in `tax.calculation_callback_id`. - `inactive`:
     * Stops the callback from being selected. Refused while your settings select it. Value enum:
     * "active", "inactive".
     */
    "status": "active" | "inactive";
}));
/**
 * Update at least one of registration_number, start_date or end_date. Pending and rejected
 * registrations allow all three fields; registration_number and start_date require a connection
 * that is not active. Scheduled and active registrations allow only end_date. A pending or
 * rejected registration whose tax-account copy exists or may have been created cannot change
 * start_date; delete it and create it again. Ended registrations cannot be changed. A version
 * fence by itself is not a change. minProperties: 1.
 */
export type UpdateTaxRegistrationRequest = ({
    /**
     * Last day the registration applies, inclusive. Must be on or after start_date and today
     * (UTC). Send null to clear the end date before the registration has ended. Format: date.
     * minLength: 1. Example: "2026-08-02".
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
     * date. minLength: 1. Example: "2026-08-02".
     */
    "start_date"?: string;
})
    & ((unknown)
    | ({
    /**
     * First day the registration applies, inclusive. Flint checks it against each sale's local
     * date. Status and validation use the UTC date. May be up to 365 days in the future. Format:
     * date. minLength: 1. Example: "2026-08-02".
     */
    "start_date": string;
})
    | ({
    /**
     * Last day the registration applies, inclusive. Must be on or after start_date and today
     * (UTC). Send null to clear the end date before the registration has ended. Format: date.
     * minLength: 1. Example: "2026-08-02".
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
 * fence by itself is not a change. minProperties: 1.
 */
export type UpdateTaxRegistrationRequestInput = ({
    /**
     * Last day the registration applies, inclusive. Must be on or after start_date and today
     * (UTC). Send null to clear the end date before the registration has ended. Format: date.
     * minLength: 1. Example: "2026-08-02".
     */
    "end_date"?: string | null;
    /**
     * Resource version last read by the caller. Omit to apply the change to the current resource.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Seller's tax registration number. For EU, the non-Union OSS number: EU followed by nine
     * digits. Write-only; responses return only its last four characters. minLength: 1. maxLength:
     * 255.
     */
    "registration_number"?: string;
    /**
     * First day the registration applies, inclusive. Flint checks it against each sale's local
     * date. Status and validation use the UTC date. May be up to 365 days in the future. Format:
     * date. minLength: 1. Example: "2026-08-02".
     */
    "start_date"?: string;
})
    & (({
    /**
     * Seller's tax registration number. For EU, the non-Union OSS number: EU followed by nine
     * digits. Write-only; responses return only its last four characters. minLength: 1. maxLength:
     * 255.
     */
    "registration_number": string;
})
    | ({
    /**
     * First day the registration applies, inclusive. Flint checks it against each sale's local
     * date. Status and validation use the UTC date. May be up to 365 days in the future. Format:
     * date. minLength: 1. Example: "2026-08-02".
     */
    "start_date": string;
})
    | ({
    /**
     * Last day the registration applies, inclusive. Must be on or after start_date and today
     * (UTC). Send null to clear the end date before the registration has ended. Format: date.
     * minLength: 1. Example: "2026-08-02".
     */
    "end_date": string | null;
}));
/** The attendee name to set or clear. minProperties: 1. */
export type UpdateTicketRequest = {
    /**
     * The attendee name, 1 to 200 characters after surrounding whitespace is trimmed. Send null to
     * clear it. minLength: 1. maxLength: 200.
     */
    "attendee_name": string | null;
    /**
     * The ticket version last read. The change applies only while the ticket is at this version; a
     * stale value returns 409 VERSION_CONFLICT, even when the ticket's status would also refuse
     * the change. Door scanners usually omit it. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/** The attendee name to set or clear. minProperties: 1. */
export type UpdateTicketRequestInput = UpdateTicketRequest;
/** The request body for: Update webhook endpoint. minProperties: 1. */
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
    /**
     * Partner app that owns partner_app or installed_merchants event sources. minLength: 1.
     * Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: string;
    /**
     * Replaces the signing methods. Removing hmac deletes all shared secrets. Adding hmac when no
     * secret exists issues the first secret and returns it once in this response. Omit to leave
     * unchanged. minItems: 1. uniqueItems: true. [] enum: "jwt", "hmac". [] (Value): {@link
     * WebhookSigningMethod}. How Flint signs requests to this endpoint. Value enum: "jwt", "hmac".
     */
    "signing_methods"?: Array<WebhookSigningMethod>;
    /**
     * Whether this endpoint receives events. Setting inactive suppresses pending deliveries. Omit
     * to leave unchanged. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /** Public HTTPS URL to receive webhook deliveries. Omit to leave unchanged. minLength: 1. */
    "url"?: string;
});
/** The request body for: Update webhook endpoint. minProperties: 1. */
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
    /**
     * Partner app that owns partner_app or installed_merchants event sources. minLength: 1.
     * Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: string;
    /**
     * Replaces the signing methods. Removing hmac deletes all shared secrets. Adding hmac when no
     * secret exists issues the first secret and returns it once in this response. Omit to leave
     * unchanged. minItems: 1. uniqueItems: true. [] enum: "jwt", "hmac". [] (Value): {@link
     * WebhookSigningMethodInput}. How Flint signs requests to this endpoint. Value enum: "jwt",
     * "hmac".
     */
    "signing_methods"?: Array<WebhookSigningMethodInput>;
    /**
     * Whether this endpoint receives events. Setting inactive suppresses pending deliveries. Omit
     * to leave unchanged. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /** Public HTTPS URL to receive webhook deliveries. Omit to leave unchanged. minLength: 1. */
    "url"?: string;
});
/** The request body for: Update a workload identity. minProperties: 1. */
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
     * Complete scope set to grant. API keys, CLI login tokens and workload tokens may grant only
     * scopes they hold in the same environment. Only a full-access key or a freshly verified user
     * session can grant accounts.api_keys.write, accounts.workload_identities.write or
     * commerce.gift_cards.secrets.write, in every mode. [] enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
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
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write". [] (Value): string.
     * Value enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.workload_identities.read",
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
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write".
     */
    "scopes"?: Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
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
        | "commerce.tickets.read"
        | "commerce.tickets.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.merchant_signups.read"
        | "developer.merchant_signups.write"
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
        | "money_movement.payment_splits.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "money_movement.platform_fees.read"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "payments.readers.read"
        | "payments.readers.write"
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
/** The request body for: Update a workload identity. minProperties: 1. */
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
     * Complete scope set to grant. API keys, CLI login tokens and workload tokens may grant only
     * scopes they hold in the same environment. Only a full-access key or a freshly verified user
     * session can grant accounts.api_keys.write, accounts.workload_identities.write or
     * commerce.gift_cards.secrets.write, in every mode. [] enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
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
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write". [] (Value): string.
     * Value enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.workload_identities.read",
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
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.merchant_signups.read", "developer.merchant_signups.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payment_splits.read", "money_movement.payout_settings.read",
     * "money_movement.payout_settings.write", "money_movement.payouts.read",
     * "money_movement.payouts.write", "money_movement.platform_fees.read",
     * "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "payments.readers.read", "payments.readers.write",
     * "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write",
     * "settings.read", "settings.write", "webhooks.read", "webhooks.write".
     */
    "scopes"?: Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
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
        | "commerce.tickets.read"
        | "commerce.tickets.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.merchant_signups.read"
        | "developer.merchant_signups.write"
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
        | "money_movement.payment_splits.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "money_movement.platform_fees.read"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "payments.readers.read"
        | "payments.readers.write"
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
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "default_merchant_id"?: string;
    /** Email address the user signs in with. */
    "email": string;
    /** The user's first name. */
    "first_name": string;
    /** The user's last name. */
    "last_name": string;
    /** Value enum: "active", "deactivated". */
    "status": "active" | "deactivated" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Unique identifier for this user, prefixed `usr_`. Example: "usr_01KEZF7C00YC8757ZYP9727JM0".
     */
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
/** The request body for: Verify a merchant signup. */
export type VerifyMerchantSignupRequest = {
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * The owner's acceptance of Flint's merchant terms. Your statement that the owner ticked
     * Flint's terms checkbox in your form, with Flint's wording. The platform terms oblige you to
     * show it and to report real values.
     */
    "terms_acceptance": MerchantSignupTermsAcceptanceRequest;
    /**
     * The 8-character code Flint emailed the owner, such as `K7QM-4TXD`, with or without the
     * hyphen, in either case. Request logs redact it. minLength: 8. maxLength: 9.
     */
    "verification_code": string;
};
/** The request body for: Verify a merchant signup. */
export type VerifyMerchantSignupRequestInput = {
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * The owner's acceptance of Flint's merchant terms. Your statement that the owner ticked
     * Flint's terms checkbox in your form, with Flint's wording. The platform terms oblige you to
     * show it and to report real values.
     */
    "terms_acceptance": MerchantSignupTermsAcceptanceRequestInput;
    /**
     * The 8-character code Flint emailed the owner, such as `K7QM-4TXD`, with or without the
     * hyphen, in either case. Request logs redact it. minLength: 8. maxLength: 9.
     */
    "verification_code": string;
};
/** The request body for: Verify return receipt line item. */
export type VerifyReturnReceiptLineItemRequest = {
    /**
     * Optional version of the return receipt. A stale value returns VERSION_CONFLICT with the
     * receipt ID and its current version. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * ID of the Return line the units were matched to. Absent for unverified units. minLength: 1.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
    /**
     * Why the units were verified against the line. Value enum: "order_match_confirmed",
     * "sku_match_confirmed", "inspection_confirmed", "merchant_review", "other".
     */
    "verification_reason": "order_match_confirmed"
        | "sku_match_confirmed"
        | "inspection_confirmed"
        | "merchant_review"
        | "other"
        | (string & {});
    /** Detail about `verification_reason`. minLength: 1. */
    "verification_reason_message"?: string;
};
/** The request body for: Verify return receipt line item. */
export type VerifyReturnReceiptLineItemRequestInput = {
    /**
     * Optional version of the return receipt. A stale value returns VERSION_CONFLICT with the
     * receipt ID and its current version. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * ID of the Return line the units were matched to. Absent for unverified units. minLength: 1.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
    /**
     * Why the units were verified against the line. Value enum: "order_match_confirmed",
     * "sku_match_confirmed", "inspection_confirmed", "merchant_review", "other".
     */
    "verification_reason": "order_match_confirmed"
        | "sku_match_confirmed"
        | "inspection_confirmed"
        | "merchant_review"
        | "other";
    /** Detail about `verification_reason`. minLength: 1. */
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
    /** Void event timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
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
    /** Void event timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "occurred_at"?: string | globalThis.Date;
    /** Your note explaining this action. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Void shipment. */
export type VoidShipmentRequestInput = VoidPackageRequestInput;
/** A response containing `VoidShipmentResult` data. */
export type VoidShipmentResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The voided shipment and
     * its affected packages. The shipment is the primary resource and expected_version target.
     */
    "data": VoidShipmentResult;
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
    /**
     * Why inspection is being waived. Value enum: "policy_override", "trusted_in_store_handoff",
     * "merchant_review", "other".
     */
    "reason": "policy_override" | "trusted_in_store_handoff" | "merchant_review" | "other" | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Waive return line inspection. */
export type WaiveReturnLineInspectionRequestInput = {
    /**
     * Optional. The Return's current version, not the line's; a stale value returns 409
     * VERSION_CONFLICT. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why inspection is being waived. Value enum: "policy_override", "trusted_in_store_handoff",
     * "merchant_review", "other".
     */
    "reason": "policy_override" | "trusted_in_store_handoff" | "merchant_review" | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
export type WaiveReturnLineInspectionResponse = GetReturnResponse;
export type WebhookDeliveriesCreateParams = (InputValue<CreateWebhookDeliveryRequestInput>);
export type WebhookDeliveriesGetParams = DisputesAcceptParams;
export type WebhookDeliveriesListAttemptsParams = CustomersListAddressesParams;
