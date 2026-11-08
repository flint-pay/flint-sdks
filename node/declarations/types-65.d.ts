import type { MoneyValueInput, MoneyValue } from './types-37.js';
import type { MetadataPatchRequest, MetadataPatchRequestInput } from './types-36.js';
import type {
    UpdateReturnReplacementLineItemRequest,
    UpdateReturnResolutionAdjustmentRequest,
    UpdateReturnReplacementLineItemRequestInput
} from './types-64.js';
import type { GetReturnResolutionResponse, GetReturnResponse, GetReturnReceiptResponse } from './types-25.js';
import type { RiskPredicateNodeRequest, RiskPredicateNodeRequestInput } from './types-55.js';
import type { BrandingSettingsRequest, BrandingSettingsRequestInput } from './types-1.js';
import type { CheckoutSettings, CheckoutSettingsRequestInput, CheckoutSessionsListDeliverySelectionsParams } from './types-6.js';
import type { CustomerAccountSettings, CustomerAccountSettingsRequestInput } from './types-14.js';
import type { CustomerEmailDeliverySettings, CustomerEmailDeliverySettingsRequestInput } from './types-15.js';
import type { FulfillmentSettings, FulfillmentSettingsRequestInput } from './types-24.js';
import type {
    InventorySettingsRequest,
    InventorySettingsRequestInput,
    InventoryRoutingSourceRequest,
    InventoryRoutingSourceRequestInput
} from './types-29.js';
import type { InvoiceSettingsPatch, InvoiceSettingsPatchInput } from './types-33.js';
import type { LegalSettingsRequest, LegalSettingsRequestInput, KnownWebhookEvent } from './types-34.js';
import type { PaymentLimitSettingsPatch, PaymentLimitSettingsPatchInput } from './types-44.js';
import type { PaymentSettingsPatch, PaymentSettingsPatchInput } from './types-45.js';
import type { PromotionSettings, PromotionSettingsRequestInput } from './types-49.js';
import type { SubscriptionSettings, SubscriptionSettingsRequestInput } from './types-60.js';
import type {
    TaxIdentityPatch,
    TaxIdentityPatchInput,
    TaxCalculationCallbackConfigurationPatchRequest,
    TaxCalculationCallbackConfigurationPatchRequestInput
} from './types-61.js';
import type { TaxSettingsRequest, TippingSettingsPatch, TaxSettingsRequestInput, TippingSettingsPatchInput } from './types-62.js';
import type {
    SubscriptionIntervalOption,
    SubscriptionIntervalOptionRequestInput,
    SubscriptionEndAfterCycles,
    SubscriptionEndAfterCyclesRequestInput,
    SubscriptionDeliveryRequest,
    SubscriptionEndAfterRequest,
    SubscriptionDeliveryRequestInput,
    SubscriptionEndAfterRequestInput
} from './types-58.js';
import type {
    OrderLineItemModifierRequest,
    OrderLineItemTax,
    OrderLineItemModifierRequestModelInput,
    OrderLineItemTaxRequestInput
} from './types-39.js';
import type { ImageRequest, ImageRequestInput } from './types-27.js';
import type { SubscriptionPlanChangeOption, SubscriptionPlanChangeOptionRequestInput } from './types-59.js';
import type { SubscriptionBillingScheduleUpdateRequest, SubscriptionBillingScheduleUpdateRequestInput } from './types-57.js';
import type {
    WebhookSigningMethod,
    WebhookSigningMethodInput,
    WorkloadIdentityClaimConditionRequest,
    WorkloadIdentityClaimConditionRequestInput
} from './types-66.js';
import type { ResponseMeta, ResendWebhookDeliveryRequestInput } from './types-51.js';
import type { Package } from './types-41.js';
import type { Shipment } from './types-56.js';
import type { InputValue } from '../runtime.js';
import type { CreateWebhookDeliveryRequestInput } from './types-13.js';
import type { DisputesAcceptParams } from './types-22.js';
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
/** The request body for: Update a risk list. */
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
/** The request body for: Update a risk list. */
export type UpdateRiskListRequestInput = UpdateRiskListRequest;
/** The request body for: Update a risk rule. */
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
/** The request body for: Update a risk rule. */
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
/** The request body for: Update shipment. */
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
/** The request body for: Update subscription line item. */
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
/** The request body for: Update subscription line item. */
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
/** The request body for: Update subscription plan. */
export type UpdateSubscriptionPlanRequest = ({
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Format: int32. */
    "billing_interval_count"?: number;
    /**
     * Omission leaves the choices unchanged. Send [] to reset to the plan's default billing
     * interval and count. Null is invalid. Every option bills the same line prices once per
     * period. Use separate plans for different prices per interval. maxItems: 12. uniqueItems:
     * true. [] (Value): {@link SubscriptionIntervalOption}. A billing cadence offered by a
     * subscription plan or offer. Every option bills the same line prices once per period; prices
     * are not scaled by the interval. For a different price per interval, create separate plans.
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
/** The request body for: Update subscription plan. */
export type UpdateSubscriptionPlanRequestInput = ({
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly";
    /** Format: int32. */
    "billing_interval_count"?: number;
    /**
     * Omission leaves the choices unchanged. Send [] to reset to the plan's default billing
     * interval and count. Null is invalid. Every option bills the same line prices once per
     * period. Use separate plans for different prices per interval. maxItems: 12. uniqueItems:
     * true. [] (Value): {@link SubscriptionIntervalOptionRequestInput}. A billing cadence offered
     * by a subscription plan or offer. Every option bills the same line prices once per period;
     * prices are not scaled by the interval. For a different price per interval, create separate
     * plans.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOptionRequestInput>;
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
});
/** The request body for: Update a tax calculation callback. */
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
/** The request body for: Update a tax calculation callback. */
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
 * fence by itself is not a change.
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
 * fence by itself is not a change.
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
     * Seller's tax registration number. Write-only; responses return only its last four
     * characters. minLength: 1. maxLength: 255.
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
     * Seller's tax registration number. Write-only; responses return only its last four
     * characters. minLength: 1. maxLength: 255.
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
/** The attendee name to set or clear. */
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
/** The attendee name to set or clear. */
export type UpdateTicketRequestInput = UpdateTicketRequest;
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
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
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
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
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
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
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
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
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
export type WebhookDeliveriesListAttemptsParams = CheckoutSessionsListDeliverySelectionsParams;
export type WebhookDeliveriesListParams = {
    /**
     * Filter by an exact webhook event ID. Returns an empty page when no visible deliveries match.
     * Example: "whev_01KEZF7C00362MS3HV970TRZGS".
     */
    "webhook_event_id"?: InputValue<string>;
    /**
     * Filter by an exact webhook endpoint ID, including deleted endpoints. Returns an empty page
     * when no visible deliveries match. Example: "whep_01KEZF7C006FXYTAJRZCGCBJTN".
     */
    "webhook_endpoint_id"?: InputValue<string>;
    /**
     * Filter by delivery status. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "pending", "delivered", "failed", "suppressed". Value enum: "pending",
     * "delivered", "failed", "suppressed". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "pending", "delivered", "failed", "suppressed". anyOf[1][] (Value): string. Value
     * enum: "pending", "delivered", "failed", "suppressed". anyOf[2] (Value): string. Value enum:
     * "pending", "delivered", "failed", "suppressed".
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
export type WebhookDeliveriesResendParams = (InputValue<ResendWebhookDeliveryRequestInput>);
/** An attempt to deliver an event to a webhook endpoint. */
export type WebhookDelivery = {
    /**
     * Attempts made by Flint's automatic schedule. Manual resends and the first attempt of a
     * delivery you create don't count. Format: int32.
     */
    "automatic_attempt_count": number;
    /**
     * When the delivery was created: when Flint prepared the event, or when you created it.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "delivered_at"?: string;
    /**
     * The kind of failure on the most recent failed attempt. Absent before any attempt, and when
     * delivered or suppressed. Value enum: "webhook_timeout", "webhook_dns", "webhook_tls",
     * "webhook_connection", "webhook_blocked_target", "webhook_request", "webhook_redirect",
     * "webhook_http_4xx", "webhook_http_5xx", "webhook_payload_render", "webhook_delivery".
     */
    "error_category"?: "webhook_timeout"
        | "webhook_dns"
        | "webhook_tls"
        | "webhook_connection"
        | "webhook_blocked_target"
        | "webhook_request"
        | "webhook_redirect"
        | "webhook_http_4xx"
        | "webhook_http_5xx"
        | "webhook_payload_render"
        | "webhook_delivery"
        | (string & {});
    /**
     * A concise explanation of the failed attempt. Absent before any attempt, and when delivered
     * or suppressed.
     */
    "error_summary"?: string;
    /**
     * HTTP status returned by the receiver on the latest recorded attempt. Omitted when no HTTP
     * response was received. Format: int32.
     */
    "last_response_code"?: number;
    /** Maximum automatic attempts. Format: int32. */
    "max_attempts": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "next_retry_at"?: string;
    /** The next step to resolve the failed delivery attempt. */
    "recommended_action"?: string;
    /**
     * Whether sending this delivery again without changing your endpoint is likely to succeed.
     * While the delivery is pending, Flint retries automatically either way.
     */
    "retryable"?: boolean;
    /**
     * Current state of this endpoint delivery and its automatic retry schedule. Value enum:
     * "pending", "delivered", "failed", "suppressed".
     */
    "status": "pending" | "delivered" | "failed" | "suppressed" | (string & {});
    /**
     * Why this delivery was suppressed. Present exactly when status is suppressed. Suppressed
     * deliveries have no failure explanation. Value enum: "endpoint_inactive", "endpoint_deleted",
     * "authorization_revoked", "scope_missing", "event_not_allowed",
     * "partner_app_install_revoked".
     */
    "suppression_reason"?: "endpoint_inactive"
        | "endpoint_deleted"
        | "authorization_revoked"
        | "scope_missing"
        | "event_not_allowed"
        | "partner_app_install_revoked"
        | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Unique identifier for this webhook delivery, prefixed `wdel_`. Example:
     * "wdel_01KEZF7C001DWSNDCDZHCTBN0A".
     */
    "webhook_delivery_id": string;
    /**
     * ID of the receiving endpoint, retained even after the endpoint is deleted. Example:
     * "whep_01KEZF7C006FXYTAJRZCGCBJTN".
     */
    "webhook_endpoint_id": string;
    /** ID of the event this delivery sends. Example: "whev_01KEZF7C00362MS3HV970TRZGS". */
    "webhook_event_id": string;
};
