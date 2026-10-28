import type { ResponseMeta } from './types-42.js';
import type {
    SelectedProductOption,
    SettlementAmounts,
    StripeClientSetup,
    ServiceFulfillmentDetails,
    ShipmentFulfillmentDetails
} from './types-47.js';
import type { Bundle, Address } from './types-0.js';
import type { InputValue } from '../runtime.js';
import type { CreateBundleRequestInput } from './types-5.js';
import type { UpdateBundleRequestInput, TaxIdentity, TicketedEvent } from './types-50.js';
import type {
    BuyerPauseActionOptions,
    BuyerPayBalanceActionOptions,
    BuyerPauseCapability,
    BuyerRetentionOffer,
    BuyerPauseCapabilityInput,
    BuyerRetentionOfferInput,
    BuyerOrderPaymentAttempt,
    BuyerPaymentCollection,
    BuyerReturnReplacementLineItemRequest,
    BuyerReturnReplacementLineItemRequestInput,
    BuyerOrderLineItemModifier,
    BuyerOrderLineItem,
    BuyerOrderTax
} from './types-2.js';
import type {
    BuyerSkipCapability,
    BuyerSkipCapabilityInput,
    BuyerSubscriptionPlanLineItem,
    CardDetails,
    BuyerTip
} from './types-3.js';
import type {
    CheckoutBuyerContact,
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutCustomerPrefill,
    CheckoutDerivedDeliveryResource,
    CheckoutGiftCardChallenge,
    CheckoutMerchantSupport,
    CheckoutPaymentConfig,
    CheckoutPaymentMethodSave,
    CheckoutPrefill,
    CheckoutPromotionConfig,
    CheckoutRedirects,
    CheckoutSessionTax,
    CheckoutSubscriptionTerms,
    CheckoutTheme,
    CheckoutTipConfig
} from './types-4.js';
import type { Image } from './types-21.js';
import type { LegalSettings, InvoiceSnapshot } from './types-30.js';
import type { CreateReturnEligibilityPreviewRequest, CreateReturnEligibilityPreviewRequestInput } from './types-9.js';
import type { ReturnLineItemRequest, ReturnLineItemRequestInput } from './types-43.js';
import type { ReturnResolutionLineItemRequest, ReturnResolutionLineItemRequestInput } from './types-44.js';
import type { CreditNoteLineItem } from './types-11.js';
import type { MoneyValue, OrderAuthorizationAmounts, OrderCalculatedChargeTax } from './types-33.js';
import type { PricingAmounts, PickupFulfillmentDetails } from './types-39.js';
import type { SubscriptionIntervalOption } from './types-48.js';
import type { DigitalFulfillmentDetails } from './types-17.js';
import type { ExpandedPackageSummary, ExpandedShipmentSummary, ExpandedCustomerSummary } from './types-18.js';
import type { FulfillmentChargeLink, FulfillmentRecipient } from './types-19.js';
import type { InvoiceDocumentRow, InvoicePaymentAttempt, InvoiceLateFeePolicy } from './types-28.js';
import type { InvoicePaymentOptionCostComparison, InvoicePaymentTermsSnapshot, InvoiceScheduleEntry } from './types-29.js';
import type {
    OrderDeliveryDestination,
    OrderDiscount,
    OrderGiftCardEstimate,
    OrderGiftCardSelection,
    OrderGiftCardSettlement,
    OrderReturnCreditSettlement
} from './types-34.js';
/** Shape $ (Value): {@link BundleComponent}. An item included in a bundle. */
export type BundleComponent = {
    /** Shape $ (Value): string. Stable identifier of this component within its bundle. */
    "bundle_component_id": string;
    /**
     * Shape $ (Value): string. Reason the component's delivery configuration needs attention.
     * Value enum: "delivery_profile_missing", "delivery_profile_inactive".
     */
    "delivery_configuration_reason"?: "delivery_profile_missing" | "delivery_profile_inactive" | (string & {});
    /**
     * Shape $ (Value): string. Whether the component's delivery configuration is ready, needs
     * attention, or does not apply. Value enum: "configured", "action_required", "not_applicable".
     */
    "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
    /**
     * Shape $ (Value): string. Delivery profile used for this component, including any component
     * override.
     */
    "delivery_profile_id"?: string;
    /**
     * Shape $ (Value): integer. Display order among the bundle's components, starting at zero.
     * Format: int32.
     */
    "position": number;
    /** Shape $ (Value): string. Identifier of the product the component's variant belongs to. */
    "product_id"?: string;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32.
     */
    "quantity": number;
    /**
     * Shape $ (Value): {@link BundleComponentVariantSummary}. Summary of the component's variant
     * and its selected options. A summary of the variant that fills a bundle component: its names,
     * SKU, selected options, and whether it is available for sale.
     */
    "variant"?: BundleComponentVariantSummary;
    /** Shape $ (Value): string. Identifier of the product variant included in the bundle. */
    "variant_id": string;
};
/** Shape $ (Value): {@link BundleComponentListResponse}. A page of `BundleComponent` objects. */
export type BundleComponentListResponse = {
    /**
     * Shape $ (Value): Array of {@link BundleComponent}. The requested bundle component data.
     * Shape $[] (Value): {@link BundleComponent}. An item included in a bundle.
     */
    "data": Array<BundleComponent>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Additional information about this response. Metadata
     * returned with a response: the `api_version`, `trace_id`, whether an idempotent request was
     * replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. Token for the next page. Omitted when there are no more results. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting support.
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link BundleComponentVariantSummary}. A summary of the variant that fills a
 * bundle component: its names, SKU, selected options, and whether it is available for sale.
 */
export type BundleComponentVariantSummary = {
    /**
     * Shape $ (Value): boolean. Whether the component's variant and its product are both active.
     */
    "available_for_sale": boolean;
    /** Shape $ (Value): string. Name of the component's variant, when set. */
    "name"?: string;
    /** Shape $ (Value): string. Name of the product the variant belongs to. */
    "product_name"?: string;
    /**
     * Shape $ (Value): Array of {@link SelectedProductOption}. Option names and values selected by
     * the component's variant. Shape $[] (Value): {@link SelectedProductOption}. An option and
     * value chosen for a product variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    /**
     * Shape $ (Value): string. Stock keeping unit assigned to the component's variant, when set.
     */
    "sku"?: string;
    /** Shape $ (Value): string. Identifier of the product variant included in the component. */
    "variant_id": string;
};
/** Shape $ (Value): {@link BundleListResponse}. A page of `Bundle` objects. */
export type BundleListResponse = {
    /**
     * Shape $ (Value): Array of {@link Bundle}. The requested bundle data. Shape $[] (Value):
     * {@link Bundle}. A group of items sold together.
     */
    "data": Array<Bundle>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Additional information about this response. Metadata
     * returned with a response: the `api_version`, `trace_id`, whether an idempotent request was
     * replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. Token for the next page. Omitted when there are no more results. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting support.
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** Shape $ (Value): {@link BundleResponse}. A response containing `Bundle` data. */
export type BundleResponse = {
    /**
     * Shape $ (Value): {@link Bundle}. The requested bundle data. A group of items sold together.
     */
    "data": Bundle;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Additional information about this response. Metadata
     * returned with a response: the `api_version`, `trace_id`, whether an idempotent request was
     * replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting support.
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type BundlesCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link CreateBundleRequestInput}. The request body for: Create bundle. */
    "body": InputValue<CreateBundleRequestInput>;
};
export type BundlesGetInput = {
    /** Shape $ (Value): string. */
    "bundle_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "modifier_set". Shape $[] (Value): string. Value
     * enum: "modifier_set".
     */
    "expand"?: InputValue<Array<"modifier_set">>;
};
export type BundlesListComponentsInput = {
    /** Shape $ (Value): string. */
    "bundle_id": InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "delivery_profile_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "configured", "action_required",
     * "not_applicable". Shape $[] (Value): string. Value enum: "configured", "action_required",
     * "not_applicable".
     */
    "delivery_configuration_status"?: InputValue<Array<"configured" | "action_required" | "not_applicable">>;
};
export type BundlesListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. maxLength: 100. */
    "sku"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /** Shape $ (Value): string. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$. */
    "category_handle"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived".
     * Shape $[] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
    /**
     * Shape $ (Value): string. Default: "created_at". Value enum: "created_at", "updated_at",
     * "name".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "name">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Shape $ (Value): string. */
    "delivery_profile_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "configured", "action_required",
     * "not_applicable". Shape $[] (Value): string. Value enum: "configured", "action_required",
     * "not_applicable".
     */
    "delivery_configuration_status"?: InputValue<Array<"configured" | "action_required" | "not_applicable">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): Array of string. [] enum: "modifier_set". Shape $[] (Value): string. Value
     * enum: "modifier_set".
     */
    "expand"?: InputValue<Array<"modifier_set">>;
};
export type BundlesRemoveInput = {
    /** Shape $ (Value): string. */
    "bundle_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type BundlesUpdateInput = {
    /** Shape $ (Value): string. */
    "bundle_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateBundleRequestInput}. Send only fields to change. Omitted
     * fields keep their stored values. null clears nullable fields; null on any other field
     * returns 400 INVALID_REQUEST with details[0].code INVALID_VALUE. Metadata merges by key, with
     * at most 50 keys after merging.
     */
    "body": InputValue<UpdateBundleRequestInput>;
};
/**
 * Shape $ (Value): {@link BuyerAction}. One thing a buyer can do with an order, subscription,
 * invoice or return they read through /v1/me. Show the actions with is_required as what needs the
 * buyer's attention, and the first available action as the primary action on the resource's page
 * in your account.
 */
export type BuyerAction = {
    /**
     * Shape $ (Value): {@link BuyerCancelActionOptions}. Present only on an available cancel
     * action. The cancellation choices this subscription accepts from its buyer.
     */
    "cancel"?: BuyerCancelActionOptions;
    /**
     * Shape $ (Value): string. When the buyer needs to act by. Omitted when the action has no
     * deadline, or when the resource's state or the store's policy doesn't allow it. Format:
     * date-time.
     */
    "due_at"?: string;
    /** Shape $ (Value): boolean. Whether this session can take the action now. */
    "is_available": boolean;
    /**
     * Shape $ (Value): boolean. Whether the store needs the buyer to take the action, such as
     * paying a due invoice. It stays true when the only thing in the way is signing in.
     */
    "is_required": boolean;
    /**
     * Shape $ (Value): string. What the action is. Each resource lists its own kinds in a fixed
     * order. New kinds may be added; ignore kinds you don't recognize. Value enum: "start_return",
     * "resend_receipt", "cancel", "pause", "resume", "reactivate", "update_payment_method", "pay",
     * "withdraw", "ship_items", "pay_balance", "retry_payment", "update_delivery", "skip",
     * "update_billing_interval", "update_quantity", "swap_items", "renew".
     */
    "kind": "start_return"
        | "resend_receipt"
        | "cancel"
        | "pause"
        | "resume"
        | "reactivate"
        | "update_payment_method"
        | "pay"
        | "withdraw"
        | "ship_items"
        | "pay_balance"
        | "retry_payment"
        | "update_delivery"
        | "skip"
        | "update_billing_interval"
        | "update_quantity"
        | "swap_items"
        | "renew"
        | (string & {});
    /**
     * Shape $ (Value): {@link BuyerPauseActionOptions}. Present only on an available pause action.
     * The pause lengths this subscription accepts from its buyer.
     */
    "pause"?: BuyerPauseActionOptions;
    /**
     * Shape $ (Value): {@link BuyerPayBalanceActionOptions}. Present only on an available
     * pay_balance action. The return resolutions the buyer can pay now.
     */
    "pay_balance"?: BuyerPayBalanceActionOptions;
    /**
     * Shape $ (Value): string. Why the action can't be taken now. Present exactly when
     * is_available is false. New reasons may be added; show a general message for a reason you
     * don't recognize. Value enum: "sign_in_required", "store_policy", "not_in_state",
     * "window_closed", "nothing_to_return", "collection_unavailable", "limit_reached".
     */
    "unavailable_reason"?: "sign_in_required"
        | "store_policy"
        | "not_in_state"
        | "window_closed"
        | "nothing_to_return"
        | "collection_unavailable"
        | "limit_reached"
        | (string & {});
};
/**
 * Shape $ (Value): {@link BuyerCancelActionOptions}. The cancellation choices this subscription
 * accepts from its buyer.
 */
export type BuyerCancelActionOptions = {
    /**
     * Shape $ (Value): Array of string. Reasons to offer, in the store's order. Empty means do not
     * ask. Sending a reason is always optional. [] enum: "too_expensive", "missing_features",
     * "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     * Shape $[] (Value): string. Value enum: "too_expensive", "missing_features",
     * "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     */
    "cancellation_reasons": Array<"too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other"
        | (string & {})>;
    /**
     * Shape $ (Value): {@link BuyerCancelRetentionOffer}. An available pause the buyer may accept
     * instead of canceling, using POST /v1/me/subscriptions/{subscription_id}/pause. The buyer may
     * always decline and cancel. An optional alternative to cancellation that this subscription
     * can accept.
     */
    "retention_offer"?: BuyerCancelRetentionOffer;
    /**
     * Shape $ (Value): string. The cancellation timing accepted by this subscription. New values
     * may be added. Value enum: "end_of_period", "immediately", "buyer_chooses".
     */
    "timing": "end_of_period" | "immediately" | "buyer_chooses" | (string & {});
};
/**
 * Shape $ (Value): {@link BuyerCancelRetentionOffer}. An optional alternative to cancellation that
 * this subscription can accept.
 */
export type BuyerCancelRetentionOffer = {
    /**
     * Shape $ (Value): string. The alternative offered. Ignore kinds you do not recognize. Value
     * enum: "pause_instead".
     */
    "kind": "pause_instead" | (string & {});
    /**
     * Shape $ (Value): integer. Send this pause_duration_cycles to accept the offer. Format:
     * int32. minimum: 1. maximum: 12.
     */
    "pause_duration_cycles": number;
};
/**
 * Shape $ (Value): {@link BuyerCapabilities}. What a store lets buyers do to their own
 * subscriptions. Send at least one field; each field you omit takes its default. minProperties: 1.
 */
export type BuyerCapabilities = {
    /**
     * Shape $ (Value): boolean. Whether buyers may change the shipping address and delivery method
     * of their physical subscriptions. Default: true.
     */
    "can_update_delivery"?: boolean;
    /**
     * Shape $ (Value): Array of string. Reasons a buyer is asked to choose from when canceling, in
     * the order shown. Empty: the buyer is not asked. When the list is not empty, a buyer's
     * cancellation_reason_code must be one of them. maxItems: 8. uniqueItems: true. Default: [].
     * [] enum: "too_expensive", "missing_features", "switched_service", "unused",
     * "customer_service", "too_complex", "low_quality", "other". Shape $[] (Value): string. Value
     * enum: "too_expensive", "missing_features", "switched_service", "unused", "customer_service",
     * "too_complex", "low_quality", "other".
     */
    "cancellation_reasons"?: Array<"too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other"
        | (string & {})>;
    /**
     * Shape $ (Value): string. When a subscription a buyer cancels ends. end_of_period: at
     * trial_end_at while trialing, current_period_end_at while active, or next_retry_at while
     * past_due. buyer_chooses: the buyer picks the scheduled time or right away. When no scheduled
     * cancellation time is available, including scheduled, incomplete, paused, and past_due
     * without next_retry_at, the buyer may send cancel_immediately: true under either policy.
     * Default: "end_of_period". Value enum: "end_of_period", "buyer_chooses".
     */
    "cancellation_timing"?: "end_of_period" | "buyer_chooses" | (string & {});
    /**
     * Shape $ (Value): {@link BuyerPauseCapability}. Replaced as a whole: send every field you
     * want to keep. Whether buyers may pause, and for how long. Omit it to let buyers pause with
     * no limit. Whether buyers may pause their own subscriptions. Send at least one field.
     * minProperties: 1.
     */
    "pause"?: BuyerPauseCapability;
    /**
     * Shape $ (Value): {@link BuyerRetentionOffer}. Replaced as a whole: send every field you want
     * to keep. The offer a buyer sees before canceling. The buyer can always decline it and
     * cancel. Omit it for no offer. The offer a buyer sees before canceling. Send at least one
     * field. minProperties: 1.
     */
    "retention_offer"?: BuyerRetentionOffer;
    /**
     * Shape $ (Value): {@link BuyerSkipCapability}. Replaced as a whole: send every field you want
     * to keep. Whether buyers may skip renewals. Omit it to allow skipping with no consecutive
     * limit. Whether buyers may skip renewals. Send at least one field. minProperties: 1.
     */
    "skip"?: BuyerSkipCapability;
};
/**
 * Shape $ (Value): {@link BuyerCapabilitiesInput}. What a store lets buyers do to their own
 * subscriptions. Send at least one field; each field you omit takes its default. minProperties: 1.
 */
export type BuyerCapabilitiesInput = {
    /**
     * Shape $ (Value): boolean. Whether buyers may change the shipping address and delivery method
     * of their physical subscriptions. Default: true.
     */
    "can_update_delivery"?: boolean;
    /**
     * Shape $ (Value): Array of string. Reasons a buyer is asked to choose from when canceling, in
     * the order shown. Empty: the buyer is not asked. When the list is not empty, a buyer's
     * cancellation_reason_code must be one of them. maxItems: 8. uniqueItems: true. Default: [].
     * [] enum: "too_expensive", "missing_features", "switched_service", "unused",
     * "customer_service", "too_complex", "low_quality", "other". Shape $[] (Value): string. Value
     * enum: "too_expensive", "missing_features", "switched_service", "unused", "customer_service",
     * "too_complex", "low_quality", "other".
     */
    "cancellation_reasons"?: Array<"too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other">;
    /**
     * Shape $ (Value): string. When a subscription a buyer cancels ends. end_of_period: at
     * trial_end_at while trialing, current_period_end_at while active, or next_retry_at while
     * past_due. buyer_chooses: the buyer picks the scheduled time or right away. When no scheduled
     * cancellation time is available, including scheduled, incomplete, paused, and past_due
     * without next_retry_at, the buyer may send cancel_immediately: true under either policy.
     * Default: "end_of_period". Value enum: "end_of_period", "buyer_chooses".
     */
    "cancellation_timing"?: "end_of_period" | "buyer_chooses";
    /**
     * Shape $ (Value): {@link BuyerPauseCapabilityInput}. Replaced as a whole: send every field
     * you want to keep. Whether buyers may pause, and for how long. Omit it to let buyers pause
     * with no limit. Whether buyers may pause their own subscriptions. Send at least one field.
     * minProperties: 1.
     */
    "pause"?: BuyerPauseCapabilityInput;
    /**
     * Shape $ (Value): {@link BuyerRetentionOfferInput}. Replaced as a whole: send every field you
     * want to keep. The offer a buyer sees before canceling. The buyer can always decline it and
     * cancel. Omit it for no offer. The offer a buyer sees before canceling. Send at least one
     * field. minProperties: 1.
     */
    "retention_offer"?: BuyerRetentionOfferInput;
    /**
     * Shape $ (Value): {@link BuyerSkipCapabilityInput}. Replaced as a whole: send every field you
     * want to keep. Whether buyers may skip renewals. Omit it to allow skipping with no
     * consecutive limit. Whether buyers may skip renewals. Send at least one field. minProperties:
     * 1.
     */
    "skip"?: BuyerSkipCapabilityInput;
};
/**
 * Shape $ (Value): {@link BuyerCheckoutProblemResource}. A checkout problem shown to the buyer,
 * including whether it blocks completion and how to resolve it.
 */
export type BuyerCheckoutProblemResource = {
    /** Shape $ (Value): boolean. */
    "blocks_completion": boolean;
    /**
     * Shape $ (Value): string. Value enum: "delivery_selection_stale",
     * "delivery_selection_invalid", "delivery_unreadable", "payment_in_progress".
     */
    "code": "delivery_selection_stale"
        | "delivery_selection_invalid"
        | "delivery_unreadable"
        | "payment_in_progress"
        | (string & {});
    /**
     * Shape $ (Value): {@link BuyerErrorRemediation}. Guidance for recovering from a payment
     * error: whether and how to retry (`retry`), and optional next steps.
     */
    "remediation"?: BuyerErrorRemediation;
    /** Shape $ (Value): string.  Value enum: "error". */
    "severity": "error" | (string & {});
};
/**
 * Shape $ (Value): {@link BuyerCheckoutSession}. A session in which a buyer completes an order's
 * payment.
 */
export type BuyerCheckoutSession = {
    /** Shape $ (Value): {@link BuyerOrderPaymentAttempt}. An attempt to pay an order. */
    "active_payment_attempt"?: BuyerOrderPaymentAttempt;
    /**
     * Shape $ (Value): {@link CheckoutBuyerContact}. Contact the buyer entered in checkout before
     * paying, saved with the session's checkout credential. Separate from merchant-supplied
     * prefill and customer_prefill from the customer record. Omitted until the buyer saves or
     * clears a field. When a checkout session payment omits buyer_contact.email or
     * buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the
     * session ends, and when a customer linked to the session is deleted. Buyer contact supplied
     * with payment or saved during checkout.
     */
    "buyer_contact"?: CheckoutBuyerContact;
    /**
     * Shape $ (Value): {@link CheckoutBuyerFields}. What checkout asks the buyer for. Each field
     * you leave out uses your checkout settings.
     */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Shape $ (Value): boolean. Whether checkout offers the buyer the option to save the card they
     * type for faster checkout at this merchant. When true and
     * save_payment_method_requires_verification is false, PayOrder accepts save_payment_method:
     * true for one newly collected card. False when the merchant turned
     * checkout.saved_payment_details off, customer accounts are merchant hosted, card is not an
     * available payment option, the checkout collects an invoice, a subscription, or a return, or
     * the checkout acts for no customer and Flint cannot email the buyer a verification code.
     * Returned only to the checkout credential; never in webhook payloads.
     */
    "can_save_payment_method"?: boolean;
    /**
     * Shape $ (Value): boolean. Whether the buyer can save the card they type by giving a US or
     * Canadian mobile phone number with the payment, in save_payment_method_phone on POST
     * /v1/orders/{order_id}/pay, and confirming it with a texted code after paying. True while
     * Flint can send texts and either save_payment_method_requires_verification is true, so the
     * number replaces confirming an email before paying, or the checkout acts for the customer
     * whose email the buyer confirmed with this credential, so the number joins that customer's
     * saved details once the buyer confirms it. Returned only to the checkout credential; never in
     * webhook payloads.
     */
    "can_save_payment_method_with_phone"?: boolean;
    /** Shape $ (Value): string. */
    "checkout_session_id": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Shape $ (Value): {@link CheckoutCustomTextConfig}. Custom text shown in checkout: an order
     * summary message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * Shape $ (Value): string. The customer of the session's order. Omitted when the order has
     * none. A checkout credential issued for this session acts for this customer. Add
     * expand=customer to include the customer.
     */
    "customer_id"?: string;
    /**
     * Shape $ (Value): {@link CheckoutCustomerPrefill}. Contact and default addresses of the
     * customer the checkout acts for, with the recipient name on its default shipping address: the
     * customer the merchant created the session for, or the customer whose email the buyer
     * confirmed in it. Present on GET and PATCH responses while the session is open and acts for a
     * customer. Separate from merchant-supplied prefill and buyer_contact saved by the buyer.
     * Returned only to the checkout credential; never in webhook payloads. Details the buyer's
     * checkout can prefill from the customer it acts for.
     */
    "customer_prefill"?: CheckoutCustomerPrefill;
    /**
     * Shape $ (Value): {@link CheckoutDerivedDeliveryResource}. Current delivery choices for
     * Flint-owned pricing. External pricing reports requires_explicit_quote; reading this field
     * does not request a delivery quote. Omitted when the session is not open, has no order, or
     * Flint cannot read its delivery. The delivery options Flint derived for a checkout as a buyer
     * sees them: choice groups, input requirements, and evaluation status.
     */
    "delivery"?: CheckoutDerivedDeliveryResource;
    /**
     * Shape $ (Value): Array of string. Immutable delivery method assignment captured when the
     * checkout was created. Shape $[] (Value): string.
     */
    "delivery_method_ids": Array<string>;
    /**
     * Shape $ (Value): boolean. Whether the order has at least one remaining quote-resolved
     * fulfillment choice that must be selected before payment.
     */
    "delivery_selection_required": boolean;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /**
     * Shape $ (Value): integer string. The lifetime the session got. expires_at is its deadline.
     * Omitted for invoice sessions, which take their deadline from the invoice. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64.
     */
    "expires_in_seconds"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link CheckoutGiftCardChallenge}. Where the buyer completes a gift card
     * challenge for this checkout. Returned on single-session reads, session create and update
     * responses, checkout launch results, and customer verification confirmation results while the
     * session is open and can show the challenge. Omitted from lists, webhooks, expanded
     * resources, and delivery selection results. A URL to load in an iframe when applying a gift
     * card returns `GIFT_CARD_CHALLENGE_REQUIRED`.
     */
    "gift_card_challenge"?: CheckoutGiftCardChallenge;
    /** Shape $ (Value): string. */
    "invoice_id"?: string;
    /**
     * Shape $ (Value): boolean. Whether this terminal session credential is temporarily restricted
     * to recovering its owning payment attempt.
     */
    "is_in_recovery": boolean;
    /**
     * Shape $ (Value): {@link LegalSettings}. Legal settings for a checkout: whether buyers must
     * accept terms, and links to the terms, refund policy, shipping policy, and contract.
     */
    "legal"?: LegalSettings;
    /**
     * Shape $ (Value): {@link Image}. The merchant's square icon, shown in browser tabs and
     * compact headers. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when the
     * merchant has one; other responses and webhooks omit it. An image with its `url`, `width`,
     * and `height`, and optional `alt` text.
     */
    "merchant_icon"?: Image;
    /** Shape $ (Value): string. */
    "merchant_id"?: string;
    /**
     * Shape $ (Value): {@link Image}. The merchant's logo. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other responses and
     * webhooks omit it. An image with its `url`, `width`, and `height`, and optional `alt` text.
     */
    "merchant_logo"?: Image;
    /**
     * Shape $ (Value): string. The merchant's business name, which hosted checkout shows when
     * `theme.title` is unset. Reads `Merchant` when the merchant has not set a business name.
     * Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks
     * omit it.
     */
    "merchant_name"?: string;
    /**
     * Shape $ (Value): {@link CheckoutMerchantSupport}. How the buyer can reach the merchant for
     * help: the support email, phone, and URL the merchant set. Present on GET and PATCH responses
     * when the merchant set at least one of them. Show it where your checkout tells the buyer to
     * contact the merchant, such as an expired or closed checkout, or your receipt. Returned only
     * to the checkout credential; never in webhook payloads. The merchant's support contact. Each
     * field is omitted when the merchant has not set it.
     */
    "merchant_support"?: CheckoutMerchantSupport;
    /** Shape $ (Value): string. */
    "order_id"?: string;
    /**
     * Shape $ (Value): string. Origin of the page that renders this embedded checkout. Omitted
     * when not set.
     */
    "page_origin"?: string;
    /**
     * Shape $ (Value): {@link BuyerPaymentCollection}. Guidance for collecting a payment source.
     * Checkout-credential reads include it only while the session is open. Returned only to the
     * checkout credential; never in webhook payloads. What a client needs to collect payment for a
     * buyer's order. The `stripe` field holds the Stripe values.
     */
    "payment_collection"?: BuyerPaymentCollection;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "payment_intent_ids"?: Array<string>;
    /** Shape $ (Value): string. */
    "payment_link_id"?: string;
    /**
     * Shape $ (Value): {@link Image}. The current image of the payment link that opened this
     * session. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when that link has an
     * image; other responses and webhooks omit it. An image with its `url`, `width`, and `height`,
     * and optional `alt` text.
     */
    "payment_link_image"?: Image;
    /**
     * Shape $ (Value): {@link CheckoutPaymentMethodSave}. The card the buyer saved with this
     * checkout's payment by giving a mobile phone number, and whether they confirmed it. Present
     * on GET and PATCH responses after a payment that paid the order in full, or that was approved
     * for the merchant to capture later, and saved a card this way. A checkout whose payment is
     * approved stays open until the capture. Returned only to the checkout credential; never in
     * webhook payloads. A card the buyer saved with the checkout's payment by giving a mobile
     * phone number. It works for nothing until the buyer confirms it with a code: request one with
     * POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method.
     */
    "payment_method_save"?: CheckoutPaymentMethodSave;
    /**
     * Shape $ (Value): string. Embedded sessions only. Absolute HTTPS URL on your site where Flint
     * sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the
     * session there to show the result. Required when the session offers affirm. It can't contain
     * credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to
     * 2,048 characters. Format: uri. maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * Shape $ (Value): {@link CheckoutPaymentConfig}. Configured payment options for merchant
     * credentials; currently available payment options for the checkout credential. Payment
     * settings for a checkout: the enabled payment options and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * Shape $ (Value): {@link CheckoutPrefill}. Contact details and addresses to fill in for the
     * buyer, who can change them. For a customer with saved addresses, Flint fills in any address
     * you leave out, and reads include it. With quick_pay or subscription_plan and automatic tax
     * on, a prefilled address sets the order's tax location. Not changed by what the buyer types;
     * for that, read buyer_contact. customer_prefill is what the checkout credential reads from
     * the customer record.
     */
    "prefill"?: CheckoutPrefill;
    /**
     * Shape $ (Value): Array of {@link BuyerCheckoutProblemResource}. Named conditions that affect
     * checkout completion. Follow each problem's remediation action instead of reconstructing
     * delivery lifecycle rules in the client. payment_in_progress means another payment for the
     * order must finish before this checkout can complete. When Flint cannot read the checkout's
     * delivery, the read still succeeds and reports delivery_unreadable; its remediation says
     * whether reading the session again can succeed, and its next action's reason_code names the
     * error. Shape $[] (Value): {@link BuyerCheckoutProblemResource}. A checkout problem shown to
     * the buyer, including whether it blocks completion and how to resolve it.
     */
    "problems": Array<BuyerCheckoutProblemResource>;
    /**
     * Shape $ (Value): {@link CheckoutPromotionConfig}. Promotion settings for a checkout: whether
     * automatic promotions apply and whether the buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * Shape $ (Value): string or null. RFC3339 deadline for the restricted payment-attempt
     * recovery window. Format: date-time.
     */
    "recovery_expires_at"?: string | null;
    /**
     * Shape $ (Value): string. Payment attempt that this checkout credential may recover while
     * is_in_recovery is true.
     */
    "recovery_payment_attempt_id"?: string;
    /**
     * Shape $ (Value): {@link CheckoutRedirects}. Where hosted checkout sends the buyer. Not
     * allowed when surface is embedded; use payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * Shape $ (Value): boolean. Whether the buyer must confirm their email with a code before the
     * checkout can save their card or use their saved cards. True when can_save_payment_method is
     * true and the checkout acts for no customer for this credential: the merchant created it
     * without one, and either the buyer has not confirmed an email with this credential, or the
     * customer whose email they confirmed has since changed that email or been deleted. A
     * credential other than the one a confirmation returned, such as the hosted checkout link
     * opened on another device, reads true. Send the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the checkout
     * acts for a customer, and whenever can_save_payment_method is false. Returned only to the
     * checkout credential; never in webhook payloads.
     */
    "save_payment_method_requires_verification"?: boolean;
    /**
     * Shape $ (Value): Array of string. What save_payment_method keeps, present when
     * can_save_payment_method is true: card, a card the buyer types into checkout. Show the save
     * option with that payment method only. A pay request that sends save_payment_method: true
     * with Apple Pay, Google Pay, a bank account, or Affirm, through a confirmation token created
     * with setup_future_usage none, still pays, and its payment attempt's payment_method_save
     * reports not_saved. The values can grow. Returned only to the checkout credential; never in
     * webhook payloads. [] enum: "card". Shape $[] (Value): string. Value enum: "card".
     */
    "save_payment_method_types"?: Array<"card" | (string & {})>;
    /**
     * Shape $ (Value): {@link BuyerPaymentCollection}. Guidance for collecting a payment method to
     * save. Checkout-credential reads include it only while the session is open. Returned only to
     * the checkout credential; never in webhook payloads. What a client needs to collect payment
     * for a buyer's order. The `stripe` field holds the Stripe values.
     */
    "setup_collection"?: BuyerPaymentCollection;
    /**
     * Shape $ (Value): boolean. Whether Flint's hosted pages show the Powered by Flint mark for
     * this merchant. `false` when the merchant's agreement with Flint removes it. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it.
     */
    "show_flint_mark"?: boolean;
    /**
     * Shape $ (Value): string. Value enum: "open", "paid", "partially_paid", "expired", "closed",
     * "invalidated".
     */
    "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
    /** Shape $ (Value): string. */
    "subscription_plan_id"?: string;
    /**
     * Shape $ (Value): {@link CheckoutSubscriptionTerms}. Renewal terms a subscription checkout
     * commits the buyer to. Frozen when the session's order was created, so later plan changes do
     * not alter them. Absent when the checkout starts no subscription. Renewal terms a
     * subscription checkout commits the buyer to. Frozen when the session's order was created, so
     * later plan changes do not alter them.
     */
    "subscription_terms"?: CheckoutSubscriptionTerms;
    /** Shape $ (Value): string. */
    "superseding_checkout_session_id"?: string;
    /** Shape $ (Value): string.  Value enum: "hosted", "embedded". */
    "surface": "hosted" | "embedded" | (string & {});
    /**
     * Shape $ (Value): {@link CheckoutSessionTax}. The session's tax settings. Omitted when the
     * session sets none. Tax settings of a checkout session: whether it collects tax and any tax
     * location the merchant fixed.
     */
    "tax"?: CheckoutSessionTax;
    /**
     * Shape $ (Value): string. Value enum: "payment_succeeded", "payment_partially_succeeded",
     * "expired", "closed_by_merchant", "order_mutated", "superseded", "order_paid_elsewhere",
     * "invoice_paid_elsewhere", "invoice_voided", "invoice_uncollectible",
     * "invoice_balance_changed".
     */
    "terminal_reason"?: "payment_succeeded"
        | "payment_partially_succeeded"
        | "expired"
        | "closed_by_merchant"
        | "order_mutated"
        | "superseded"
        | "order_paid_elsewhere"
        | "invoice_paid_elsewhere"
        | "invoice_voided"
        | "invoice_uncollectible"
        | "invoice_balance_changed"
        | (string & {});
    /**
     * Shape $ (Value): {@link CheckoutTheme}. The theme checkout renders with: your branding
     * settings, with the session's `title`, `primary_color`, and `accent_color` over them. A
     * session sets only those three; the other fields come from branding settings. Omitted when
     * neither sets a value. Colors, corner radius, font family, and title that style a checkout,
     * taken from the session or link theme or the merchant's branding settings.
     */
    "theme"?: CheckoutTheme;
    /**
     * Shape $ (Value): {@link CheckoutTipConfig}. Tip settings for a checkout: whether tips are
     * enabled, the percent or fixed amount options, the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfig;
    /**
     * Shape $ (Value): string. Value enum: "order", "quick_pay", "subscription_plan", "invoice",
     * "payment_link".
     */
    "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): string. Hosted checkout URL that carries a one-time launch credential. Send
     * the buyer here to pay. Present only for hosted sessions read with a merchant credential that
     * can manage checkout sessions. Launch results include it for hosted sessions: create,
     * payment-link resolve, and invoice and return-resolution checkout. Omitted for embedded
     * sessions.
     */
    "url"?: string;
    /**
     * Shape $ (Value): integer string. Persisted version of this resource's owned state. Expanded
     * resources and external observations can change independently. Use an integer string (decimal
     * digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link BuyerCheckoutSessionWithSecret}. The checkout session with its checkout
 * credential. For hosted checkout, send the buyer to url. For embedded checkout, pass
 * checkout_auth_token to your checkout client. A session in which a buyer completes an order's
 * payment.
 */
export type BuyerCheckoutSessionWithSecret = (Exclude<BuyerCheckoutSession & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): string. Checkout credential. Send it as Authorization: Bearer
     * <checkout_auth_token>. Present on checkout launch and customer binding confirmation; omitted
     * when a saved-card confirmation keeps the current credential.
     */
    "checkout_auth_token"?: string;
});
/**
 * Shape $ (Value): {@link BuyerCreateReturnPreviewRequest}. The request body for: Preview Return
 * eligibility or resolution amounts for the current buyer.
 */
export type BuyerCreateReturnPreviewRequest = ({
    /**
     * Shape $ (Value): {@link CreateReturnEligibilityPreviewRequest}. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequest;
    /** Shape $ (Value): string.  Value enum: "eligibility", "resolution". */
    "mode": "eligibility" | "resolution" | (string & {});
    /**
     * Shape $ (Value): {@link BuyerCreateReturnResolutionPreviewRequest}. The buyer's proposed
     * resolution type, returned quantities, and replacement items to preview for a Return.
     */
    "resolution"?: BuyerCreateReturnResolutionPreviewRequest;
})
    & ((Exclude<BuyerCreateReturnPreviewRequestEligibility & object, readonly unknown[]>)
    | (Exclude<BuyerCreateReturnPreviewRequestResolution & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link BuyerCreateReturnPreviewRequestEligibility}. The `eligibility` variant
 * of `BuyerCreateReturnPreviewRequest`.
 */
export type BuyerCreateReturnPreviewRequestEligibility = ({
    /**
     * Shape $ (Value): {@link CreateReturnEligibilityPreviewRequest}. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequest;
    /** Shape $ (Value): string.  Value enum: "eligibility". */
    "mode": "eligibility" | (string & {});
    /**
     * Shape $ (Value): {@link BuyerCreateReturnResolutionPreviewRequest}. The buyer's proposed
     * resolution type, returned quantities, and replacement items to preview for a Return.
     */
    "resolution"?: BuyerCreateReturnResolutionPreviewRequest;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "eligibility". */
    "mode": unknown;
    /**
     * Shape $ (Value): {@link CreateReturnEligibilityPreviewRequest}. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequest;
}));
/**
 * Shape $ (Value): {@link BuyerCreateReturnPreviewRequestEligibilityInput}. The `eligibility`
 * variant of `BuyerCreateReturnPreviewRequest`.
 */
export type BuyerCreateReturnPreviewRequestEligibilityInput = ({
    /**
     * Shape $ (Value): {@link CreateReturnEligibilityPreviewRequestInput}. A request to preview
     * which items of an order can be returned, given an order and a selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequestInput;
    /** Shape $ (Value): string.  Value enum: "eligibility". */
    "mode": "eligibility";
    /**
     * Shape $ (Value): {@link BuyerCreateReturnResolutionPreviewRequestInput}. The buyer's
     * proposed resolution type, returned quantities, and replacement items to preview for a
     * Return.
     */
    "resolution"?: BuyerCreateReturnResolutionPreviewRequestInput;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "eligibility". */
    "mode": "eligibility";
    /**
     * Shape $ (Value): {@link CreateReturnEligibilityPreviewRequestInput}. A request to preview
     * which items of an order can be returned, given an order and a selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequestInput;
})
    & ({
    "resolution"?: never;
}));
/**
 * Shape $ (Value): {@link BuyerCreateReturnPreviewRequestInput}. The request body for: Preview
 * Return eligibility or resolution amounts for the current buyer.
 */
export type BuyerCreateReturnPreviewRequestInput = ({
    /**
     * Shape $ (Value): {@link CreateReturnEligibilityPreviewRequestInput}. A request to preview
     * which items of an order can be returned, given an order and a selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequestInput;
    /** Shape $ (Value): string.  Value enum: "eligibility", "resolution". */
    "mode": "eligibility" | "resolution";
    /**
     * Shape $ (Value): {@link BuyerCreateReturnResolutionPreviewRequestInput}. The buyer's
     * proposed resolution type, returned quantities, and replacement items to preview for a
     * Return.
     */
    "resolution"?: BuyerCreateReturnResolutionPreviewRequestInput;
})
    & ((Exclude<BuyerCreateReturnPreviewRequestEligibilityInput & object, readonly unknown[]>)
    | (Exclude<BuyerCreateReturnPreviewRequestResolutionInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link BuyerCreateReturnPreviewRequestResolution}. The `resolution` variant of
 * `BuyerCreateReturnPreviewRequest`.
 */
export type BuyerCreateReturnPreviewRequestResolution = ({
    /**
     * Shape $ (Value): {@link CreateReturnEligibilityPreviewRequest}. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequest;
    /** Shape $ (Value): string.  Value enum: "resolution". */
    "mode": "resolution" | (string & {});
    /**
     * Shape $ (Value): {@link BuyerCreateReturnResolutionPreviewRequest}. The buyer's proposed
     * resolution type, returned quantities, and replacement items to preview for a Return.
     */
    "resolution": BuyerCreateReturnResolutionPreviewRequest;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "resolution". */
    "mode": unknown;
    /**
     * Shape $ (Value): {@link BuyerCreateReturnResolutionPreviewRequest}. The buyer's proposed
     * resolution type, returned quantities, and replacement items to preview for a Return.
     */
    "resolution": BuyerCreateReturnResolutionPreviewRequest;
}));
/**
 * Shape $ (Value): {@link BuyerCreateReturnPreviewRequestResolutionInput}. The `resolution`
 * variant of `BuyerCreateReturnPreviewRequest`.
 */
export type BuyerCreateReturnPreviewRequestResolutionInput = ({
    /**
     * Shape $ (Value): {@link CreateReturnEligibilityPreviewRequestInput}. A request to preview
     * which items of an order can be returned, given an order and a selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequestInput;
    /** Shape $ (Value): string.  Value enum: "resolution". */
    "mode": "resolution";
    /**
     * Shape $ (Value): {@link BuyerCreateReturnResolutionPreviewRequestInput}. The buyer's
     * proposed resolution type, returned quantities, and replacement items to preview for a
     * Return.
     */
    "resolution": BuyerCreateReturnResolutionPreviewRequestInput;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "resolution". */
    "mode": "resolution";
    /**
     * Shape $ (Value): {@link BuyerCreateReturnResolutionPreviewRequestInput}. The buyer's
     * proposed resolution type, returned quantities, and replacement items to preview for a
     * Return.
     */
    "resolution": BuyerCreateReturnResolutionPreviewRequestInput;
})
    & ({
    "eligibility"?: never;
}));
/**
 * Shape $ (Value): {@link BuyerCreateReturnRequest}. The request body for: Create a Return for the
 * current buyer.
 */
export type BuyerCreateReturnRequest = {
    /**
     * Shape $ (Value): Array of {@link ReturnLineItemRequest}. minItems: 1. maxItems: 100. Shape
     * $[] (Value): {@link ReturnLineItemRequest}. An order line item to return, with the quantity,
     * return reason, and optionally a note and the resolution the buyer wants.
     */
    "line_items": Array<ReturnLineItemRequest>;
    /** Shape $ (Value): string. minLength: 1. */
    "order_id": string;
};
/**
 * Shape $ (Value): {@link BuyerCreateReturnRequestInput}. The request body for: Create a Return
 * for the current buyer.
 */
export type BuyerCreateReturnRequestInput = {
    /**
     * Shape $ (Value): Array of {@link ReturnLineItemRequestInput}. minItems: 1. maxItems: 100.
     * Shape $[] (Value): {@link ReturnLineItemRequestInput}. An order line item to return, with
     * the quantity, return reason, and optionally a note and the resolution the buyer wants.
     */
    "line_items": Array<ReturnLineItemRequestInput>;
    /** Shape $ (Value): string. minLength: 1. */
    "order_id": string;
};
/**
 * Shape $ (Value): {@link BuyerCreateReturnResolutionPreviewRequest}. The buyer's proposed
 * resolution type, returned quantities, and replacement items to preview for a Return.
 */
export type BuyerCreateReturnResolutionPreviewRequest = ({
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequest}. minItems: 1. Shape $[]
     * (Value): {@link ReturnResolutionLineItemRequest}. A return line and quantity to include in a
     * return resolution.
     */
    "line_items": Array<ReturnResolutionLineItemRequest>;
    /**
     * Shape $ (Value): Array of {@link BuyerReturnReplacementLineItemRequest}. Shape $[] (Value):
     * {@link BuyerReturnReplacementLineItemRequest}. A catalog variant or bundle and quantity the
     * buyer requests as a replacement in a Return resolution preview.
     */
    "replacement_line_items"?: Array<BuyerReturnReplacementLineItemRequest>;
    /**
     * Shape $ (Value): string. The proposed resolution type. For store_credit, send a nonempty
     * line_items list and omit replacement_line_items. Value enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "return_id": string;
});
/**
 * Shape $ (Value): {@link BuyerCreateReturnResolutionPreviewRequestInput}. The buyer's proposed
 * resolution type, returned quantities, and replacement items to preview for a Return.
 */
export type BuyerCreateReturnResolutionPreviewRequestInput = ({
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequestInput}. minItems: 1. Shape
     * $[] (Value): {@link ReturnResolutionLineItemRequestInput}. A return line and quantity to
     * include in a return resolution.
     */
    "line_items": Array<ReturnResolutionLineItemRequestInput>;
    /**
     * Shape $ (Value): Array of {@link BuyerReturnReplacementLineItemRequestInput}. Shape $[]
     * (Value): {@link BuyerReturnReplacementLineItemRequestInput}. A catalog variant or bundle and
     * quantity the buyer requests as a replacement in a Return resolution preview.
     */
    "replacement_line_items"?: Array<BuyerReturnReplacementLineItemRequestInput>;
    /**
     * Shape $ (Value): string. The proposed resolution type. For store_credit, send a nonempty
     * line_items list and omit replacement_line_items. Value enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
    /** Shape $ (Value): string. minLength: 1. */
    "return_id": string;
});
/**
 * Shape $ (Value): {@link BuyerCreditNote}. The buyer-visible view of a credit note. Drafts are
 * never returned, and how much credit is left to allocate is omitted.
 */
export type BuyerCreditNote = {
    /**
     * Shape $ (Value): {@link TaxIdentity} or null. Identity frozen on the source invoice at
     * issue. Later profile edits do not change this document. Shape $.anyOf[1] (Value): {@link
     * TaxIdentity}. Merchant-provided legal identity displayed on invoices and credit notes. Does
     * not verify IDs or change tax treatment. Tax IDs are an owned collection in display order;
     * replacing the array requires the parent's expected_version. Existing entries retain their
     * document_tax_id; omit an entry to remove it, or omit its ID to add one. Shape $.anyOf[2]
     * (Value): null.
     */
    "buyer_tax_identity": ((TaxIdentity) | (null));
    /** Shape $ (Value): string. Unique identifier of the credit note. */
    "credit_note_id": string;
    /**
     * Shape $ (Value): string. Assigned at issue and stable from then on. Absent while the credit
     * note is a draft.
     */
    "credit_note_number": string;
    /** Shape $ (Value): string. The invoice this credit note corrects. */
    "invoice_id": string;
    /** Shape $ (Value): string. When the credit note was issued. Format: date-time. */
    "issued_at": string;
    /**
     * Shape $ (Value): string. Status of the most recent refund linked to this credit note. Absent
     * when no refund has been requested. Value enum: "pending", "succeeded",
     * "partially_succeeded", "failed".
     */
    "latest_refund_status"?: "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
    /**
     * Shape $ (Value): Array of {@link CreditNoteLineItem}. Itemized corrections against frozen
     * invoice lines. Amount and quantity corrections share each source line's remaining value,
     * discount, and tax across issued, non-void credit notes. Drafts reserve no credit. Shape $[]
     * (Value): {@link CreditNoteLineItem}. One correction calculated from the frozen invoice
     * line's remaining billed value, discount, and tax. The source line's inclusive or additive
     * tax mode is preserved. Current catalog prices and tax settings do not affect the correction.
     * Stored issued values are never recalculated by a read.
     */
    "line_items": Array<CreditNoteLineItem>;
    /**
     * Shape $ (Value): string or null. Free text shown on the credit note. Null when none was set.
     */
    "memo": string | null;
    /**
     * Shape $ (Value): {@link MoneyValue}. Credit reserved by linked refunds that have not
     * resolved yet. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "pending_refund_money": MoneyValue;
    /**
     * Shape $ (Value): string. Why the invoice is being corrected. Shown on the credit note
     * document. Value enum: "returned_goods", "order_adjustment", "billing_error", "goodwill",
     * "other".
     */
    "reason": "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Credit consumed by linked refunds that succeeded.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Shape $ (Value): {@link TaxIdentity} or null. Identity frozen on the source invoice at
     * issue. Later profile edits do not change this document. Shape $.anyOf[1] (Value): {@link
     * TaxIdentity}. Merchant-provided legal identity displayed on invoices and credit notes. Does
     * not verify IDs or change tax treatment. Tax IDs are an owned collection in display order;
     * replacing the array requires the parent's expected_version. Existing entries retain their
     * document_tax_id; omit an entry to remove it, or omit its ID to add one. Shape $.anyOf[2]
     * (Value): null.
     */
    "seller_tax_identity": ((TaxIdentity) | (null));
    /**
     * Shape $ (Value): string. draft while the credit note is editable, issued once it is numbered
     * and frozen, void once retired. Value enum: "issued", "void".
     */
    "status": "issued" | "void" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. The face value of the credit note, the sum of its
     * lines. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Shape $ (Value): string. When the credit note was voided. Absent unless it is void. Format:
     * date-time.
     */
    "voided_at"?: string;
};
/** Shape $ (Value): {@link BuyerCreditNoteListResponse}. A page of `BuyerCreditNote` objects. */
export type BuyerCreditNoteListResponse = {
    /**
     * Shape $ (Value): Array of {@link BuyerCreditNote}. Shape $[] (Value): {@link
     * BuyerCreditNote}. The buyer-visible view of a credit note. Drafts are never returned, and
     * how much credit is left to allocate is omitted.
     */
    "data": Array<BuyerCreditNote>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link BuyerCreditNoteResponse}. A response containing `BuyerCreditNote` data.
 */
export type BuyerCreditNoteResponse = {
    /**
     * Shape $ (Value): {@link BuyerCreditNote}. The buyer-visible view of a credit note. Drafts
     * are never returned, and how much credit is left to allocate is omitted.
     */
    "data": BuyerCreditNote;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** Shape $ (Value): {@link BuyerCustomer}. A merchant's customer profile. */
export type BuyerCustomer = {
    /**
     * Shape $ (Value): {@link Address} or null. The customer's default billing address: a copy of
     * the address of the saved address marked is_default_billing. Read-only; change it through
     * /v1/customers/{customer_id}/addresses. Flint taxes orders with no other tax location at this
     * address. Null when no saved address is the billing default. Shape $.anyOf[1] (Value): {@link
     * Address}. A postal address. Every address has country. Addresses Flint checked as complete
     * (customer and saved addresses, merchant, location, invoice, order delivery destination, tax
     * identity, fulfillment recipient and pickup addresses) always have line1 and city, and US
     * ones always have state and postal_code. Delivery quote destinations, buyer locations and
     * postal-code tax locations hold only what was provided, such as postal_code and country.
     * Shape $.anyOf[2] (Value): null.
     */
    "billing_address": ((Address) | (null));
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. */
    "customer_id": string;
    /** Shape $ (Value): string or null. */
    "default_payment_method_id": string | null;
    /**
     * Shape $ (Value): string or null. Customer email, or null when the customer has none. Unique
     * among the environment's customers.
     */
    "email": string | null;
    /** Shape $ (Value): string. */
    "merchant_id"?: string;
    /** Shape $ (Value): string or null. Customer name, or null when none. */
    "name": string | null;
    /** Shape $ (Value): string or null. Customer phone number, or null when none. */
    "phone": string | null;
    /**
     * Shape $ (Value): {@link Address} or null. The customer's default shipping address: a copy of
     * the address of the saved address marked is_default_shipping. Read-only; change it through
     * /v1/customers/{customer_id}/addresses. Checkout prefills it. Null when no saved address is
     * the shipping default. Shape $.anyOf[1] (Value): {@link Address}. A postal address. Every
     * address has country. Addresses Flint checked as complete (customer and saved addresses,
     * merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient
     * and pickup addresses) always have line1 and city, and US ones always have state and
     * postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold
     * only what was provided, such as postal_code and country. Shape $.anyOf[2] (Value): null.
     */
    "shipping_address": ((Address) | (null));
    /** Shape $ (Value): string.  Value enum: "active", "deletion_processing", "deleted". */
    "status": "active" | "deletion_processing" | "deleted" | (string & {});
    /** Shape $ (Value): null. Always null for buyer credentials. */
    "tax_identity": null;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link BuyerCustomerResponse}. A response containing `BuyerCustomer` data. */
export type BuyerCustomerResponse = {
    /** Shape $ (Value): {@link BuyerCustomer}. A merchant's customer profile. */
    "data": BuyerCustomer;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link BuyerDeliveryFulfillmentDetails}. Buyer-facing details of a local
 * delivery fulfillment: courier, timing, and tracking. Some fields are omitted for credentials
 * that don't act for the verified customer.
 */
export type BuyerDeliveryFulfillmentDetails = {
    /** Shape $ (Value): string. Carrier responsible for the local delivery. */
    "carrier"?: string;
    /**
     * Shape $ (Value): string. Time at which the courier collected the order. Format: date-time.
     */
    "courier_pickup_at"?: string;
    /**
     * Shape $ (Value): integer string. Width of the promised courier pickup window, from 0 to
     * 86400 seconds. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 0. maximum: 86400.
     */
    "courier_pickup_window_duration_seconds"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Delivery network or merchant fleet provider handling the job.
     * maxLength: 255.
     */
    "courier_provider_name"?: string;
    /**
     * Shape $ (Value): string. Buyer-safe support number for the courier or merchant fleet.
     * maxLength: 30.
     */
    "courier_support_phone"?: string;
    /**
     * Shape $ (Value): string. When the items were delivered, in RFC3339 format. Format:
     * date-time.
     */
    "delivered_at"?: string;
    /**
     * Shape $ (Value): string. When the delivery was dispatched, in RFC3339 format. Format:
     * date-time.
     */
    "dispatched_at"?: string;
    /**
     * Shape $ (Value): string. Driver-facing notes for the final handoff. Omitted for a checkout
     * session credential that doesn't act for the customer the buyer verified. maxLength: 2048.
     */
    "dropoff_notes"?: string;
    /**
     * Shape $ (Value): string. Deadline after which an undelivered job should enter merchant
     * review. Format: date-time.
     */
    "expires_at"?: string;
    /**
     * Shape $ (Value): string. Omitted for a checkout session credential that doesn't act for the
     * customer the buyer verified.
     */
    "instructions"?: string;
    /**
     * Shape $ (Value): boolean. Whether the buyer requested a no-contact handoff. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified.
     */
    "no_contact"?: boolean;
    /**
     * Shape $ (Value): integer string. Expected preparation time before courier pickup, from 0 to
     * 86400 seconds. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Time at which the order became ready for courier pickup. Format:
     * date-time.
     */
    "ready_at"?: string;
    /** Shape $ (Value): string. Timezone used to display the local delivery window. */
    "timezone"?: string;
    /**
     * Shape $ (Value): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are
     * rejected. Omitted for a checkout session credential that doesn't act for the customer the
     * buyer verified.
     */
    "tracking_url"?: string;
    /**
     * Shape $ (Value): string. End of the promised delivery window, in RFC3339 format. Format:
     * date-time.
     */
    "window_end_at"?: string;
    /**
     * Shape $ (Value): string. Start of the promised delivery window, in RFC3339 format. Format:
     * date-time.
     */
    "window_start_at"?: string;
};
/**
 * Shape $ (Value): {@link BuyerErrorRemediation}. Guidance for recovering from a payment error:
 * whether and how to retry (`retry`), and optional next steps.
 */
export type BuyerErrorRemediation = {
    /** Shape $ (Value): string. What to change or check before attempting the operation again. */
    "next_steps"?: string;
    /**
     * Shape $ (Value): string. How to recover: same_request resends the identical request with the
     * same Idempotency-Key; after_refresh re-reads the resource and rebuilds the request with a
     * new key; none requires correcting the request or following next_steps or next_actions. Value
     * enum: "same_request", "after_refresh", "none".
     */
    "retry": "same_request" | "after_refresh" | "none" | (string & {});
};
/**
 * Shape $ (Value): {@link BuyerExpandedOrderSummary}. An order summary in a buyer response, with
 * order status and totals. Recorded buyer contact is omitted.
 */
export type BuyerExpandedOrderSummary = {
    /**
     * Shape $ (Value): string. When the order closed. Present exactly when status is closed. Set
     * once at the transition and never changed. Format: date-time.
     */
    "closed_at"?: string;
    /**
     * Shape $ (Value): string. Why the order closed. Present exactly when status is closed. Set
     * once at closure. Unrecognized reasons are returned as other; new values may be added. Value
     * enum: "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded",
     * "return_resolution_canceled", "other".
     */
    "closed_reason"?: "paid"
        | "closed_by_merchant"
        | "checkout_expired"
        | "written_off"
        | "superseded"
        | "return_resolution_canceled"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): string. When the order was created, in RFC3339 format. Format: date-time.
     */
    "created_at"?: string;
    /** Shape $ (Value): string. Customer associated with the order, when one is set. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Aggregate progress across the order's fulfillment quantities. Value
     * enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
     * "closed".
     */
    "fulfillment_status"?: "not_fulfilled"
        | "partially_fulfilled"
        | "fulfilled"
        | "canceled"
        | "not_applicable"
        | "closed"
        | (string & {});
    /**
     * Shape $ (Value): string or null. ID of the delivery selection that governs this order. Null
     * when no selection governs the order.
     */
    "governing_delivery_selection_id": string | null;
    /** Shape $ (Value): string. Stable identifier of the expanded order. */
    "order_id": string;
    /** Shape $ (Value): string. Human-readable order number for receipts and merchant reference. */
    "order_number"?: string;
    /**
     * Shape $ (Value): Array of string. Payment intents associated with the order. Shape $[]
     * (Value): string.
     */
    "payment_intent_ids"?: Array<string>;
    /**
     * Shape $ (Value): string. Collection progress. An invoice write-off also completes collection
     * without receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
     */
    "payment_status": "unpaid" | "partially_paid" | "paid" | (string & {});
    /**
     * Shape $ (Value): {@link PricingAmounts}. Order totals before accounting for collected
     * payments and refunds. The money totals for an order or invoice: subtotal, discounts,
     * charges, tax, requested tip, and total.
     */
    "pricing_amounts": PricingAmounts;
    /**
     * Shape $ (Value): string. Refund progress for collected money. Value enum: "none",
     * "partially_refunded", "refunded".
     */
    "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Shape $ (Value): {@link SettlementAmounts}. Payments, refunds, credits, and amounts still
     * owed for the order. How much of an order has been paid, refunded, credited, written off, and
     * settled as tips, and what balance and outstanding amount remain.
     */
    "settlement_amounts": SettlementAmounts;
    /**
     * Shape $ (Value): string. Whether the order still accepts changes and new payments. Refunds,
     * fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Value
     * enum: "open", "closed".
     */
    "status": "open" | "closed" | (string & {});
    /**
     * Shape $ (Value): string. When the order was last updated, in RFC3339 format. Format:
     * date-time.
     */
    "updated_at"?: string;
};
/**
 * Shape $ (Value): {@link BuyerExpandedSubscriptionPlanSummary}. A subscription plan expanded on a
 * buyer's order: billing interval, setup fee, trial length, status, and line items.
 */
export type BuyerExpandedSubscriptionPlanSummary = {
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
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): Array of {@link BuyerSubscriptionPlanLineItem}. Shape $[] (Value): {@link
     * BuyerSubscriptionPlanLineItem}. A line item of a subscription plan as a buyer sees it: the
     * product, bundle, or variant, quantity, unit price, and swap variants.
     */
    "line_items"?: Array<BuyerSubscriptionPlanLineItem>;
    /** Shape $ (Value): string. */
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
     * /v1/subscription-plans/{subscription_plan_id}. Value enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** Shape $ (Value): string. */
    "subscription_plan_id": string;
    /** Shape $ (Value): integer. Format: int32. */
    "trial_period_days"?: number;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
};
/**
 * Shape $ (Value): {@link BuyerFlintWalletCard}. An independent card saved with Flint that the
 * current buyer can set up at this store. Store copies have their own consent and lifecycle.
 */
export type BuyerFlintWalletCard = {
    /**
     * Shape $ (Value): {@link CardDetails}. Card details on a payment method: brand, expiration
     * month and year, last four digits, and the wallet when one was used.
     */
    "card": CardDetails;
    /**
     * Shape $ (Value): string. Opaque handle for this card at this store. Handles differ across
     * stores and cannot be used at another store.
     */
    "flint_wallet_card_id": string;
    /**
     * Shape $ (Value): string or null. The store's independent card copy, or null when this store
     * does not hold a copy. A pending copy still needs confirmation before use.
     */
    "store_payment_method_id": string | null;
};
/**
 * Shape $ (Value): {@link BuyerFlintWalletCardListResponse}. A page of `BuyerFlintWalletCard`
 * objects.
 */
export type BuyerFlintWalletCardListResponse = {
    /**
     * Shape $ (Value): Array of {@link BuyerFlintWalletCard}. Shape $[] (Value): {@link
     * BuyerFlintWalletCard}. An independent card saved with Flint that the current buyer can set
     * up at this store. Store copies have their own consent and lifecycle.
     */
    "data": Array<BuyerFlintWalletCard>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link BuyerFlintWalletStoreSetup}. The state of a request to save a payment
 * method in the signed-in buyer's Flint wallet, with the client setup data needed to finish it.
 */
export type BuyerFlintWalletStoreSetup = {
    /**
     * Shape $ (Value): {@link StripeClientSetup} or null. Shape $.anyOf[1] (Value): {@link
     * StripeClientSetup}. Stripe.js setup authority returned while saving a payment method. Follow
     * its stripe_js_call now. setup_collection is guidance instead and never carries a secret.
     * Shape $.anyOf[2] (Value): null.
     */
    "client_setup": ((StripeClientSetup) | (null));
    /** Shape $ (Value): string. */
    "payment_method_id": string;
    /** Shape $ (Value): string.  Value enum: "pending", "active", "failed", "expired". */
    "status": "pending" | "active" | "failed" | "expired" | (string & {});
    /** Shape $ (Value): string. */
    "store_setup_id": string;
};
/**
 * Shape $ (Value): {@link BuyerFlintWalletStoreSetupResponse}. A response containing
 * `BuyerFlintWalletStoreSetup` data.
 */
export type BuyerFlintWalletStoreSetupResponse = {
    /**
     * Shape $ (Value): {@link BuyerFlintWalletStoreSetup}. The state of a request to save a
     * payment method in the signed-in buyer's Flint wallet, with the client setup data needed to
     * finish it.
     */
    "data": BuyerFlintWalletStoreSetup;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** Shape $ (Value): {@link BuyerFulfillment}. Work required to deliver an order's items. */
export type BuyerFulfillment = {
    /**
     * Shape $ (Value): Array of {@link FulfillmentChargeLink}. Order charges associated with this
     * fulfillment. Shape $[] (Value): {@link FulfillmentChargeLink}. Links a fulfillment to an
     * order charge by `order_charge_id`.
     */
    "charges"?: Array<FulfillmentChargeLink>;
    /** Shape $ (Value): string. Completion evidence timestamp. Format: date-time. */
    "completed_at"?: string;
    /**
     * Shape $ (Value): string. When the fulfillment was created, in RFC3339 format. Format:
     * date-time.
     */
    "created_at"?: string;
    /** Shape $ (Value): string. Customer receiving this fulfillment, when one is set. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): {@link DigitalFulfillmentDetails}. Delivery URL and completion time for a
     * digital fulfillment. Details of a digital fulfillment: when it was delivered
     * (`delivered_at`) and its `delivery_url`.
     */
    "digital_details"?: DigitalFulfillmentDetails;
    /**
     * Shape $ (Value): string. First time this fulfillment reached dispatched. Format: date-time.
     */
    "dispatched_at"?: string;
    /** Shape $ (Value): string. Stable identifier of the fulfillment. */
    "fulfillment_id": string;
    /**
     * Shape $ (Value): Array of {@link BuyerFulfillmentLineItem}. Order lines and quantities
     * allocated to this fulfillment. Shape $[] (Value): {@link BuyerFulfillmentLineItem}. An order
     * line item and quantity included in a buyer's fulfillment, with the line's modifiers.
     */
    "line_items": Array<BuyerFulfillmentLineItem>;
    /**
     * Shape $ (Value): {@link BuyerDeliveryFulfillmentDetails}. Courier, delivery window, and
     * handoff details for a local delivery fulfillment. Buyer-facing details of a local delivery
     * fulfillment: courier, timing, and tracking. Some fields are omitted for credentials that
     * don't act for the verified customer.
     */
    "local_delivery_details"?: BuyerDeliveryFulfillmentDetails;
    /**
     * Shape $ (Value): {@link BuyerExpandedOrderSummary} or null. Order summary returned when the
     * order relationship is expanded. Shape $.anyOf[1] (Value): {@link BuyerExpandedOrderSummary}.
     * An order summary in a buyer response, with order status and totals. Recorded buyer contact
     * is omitted. Shape $.anyOf[2] (Value): null.
     */
    "order"?: ((BuyerExpandedOrderSummary) | (null));
    /** Shape $ (Value): string. Order whose items this fulfillment delivers. */
    "order_id": string;
    /**
     * Shape $ (Value): string. Human-readable number of the order this fulfillment belongs to.
     * Omitted when the order has no number.
     */
    "order_number"?: string;
    /**
     * Shape $ (Value): {@link BuyerFulfillmentOutcome}. Terminal outcome details. Present exactly
     * when status is no_show. A terminal outcome recorded on a fulfillment, such as a no-show,
     * with its `reason` and when it occurred.
     */
    "outcome"?: BuyerFulfillmentOutcome;
    /**
     * Shape $ (Value): Array of {@link ExpandedPackageSummary}. Packages associated with this
     * fulfillment. Shape $[] (Value): {@link ExpandedPackageSummary}. A package on a buyer's
     * fulfillment, with its carrier, status, tracking details, and timestamps. Buyer credentials
     * get no supported actions.
     */
    "packages"?: Array<ExpandedPackageSummary>;
    /** Shape $ (Value): string. First time this fulfillment reached packed. Format: date-time. */
    "packed_at"?: string;
    /** Shape $ (Value): string. First time this fulfillment reached picked. Format: date-time. */
    "picked_at"?: string;
    /**
     * Shape $ (Value): {@link PickupFulfillmentDetails}. Pickup window, pickup mode, and handoff
     * times for a pickup fulfillment. Pickup details. For a pickup that checkout creates,
     * location_name, address, and instructions name the store the buyer chose and the delivery
     * method's pickup instructions. The note the buyer left for the store is in
     * recipient.instructions.
     */
    "pickup_details"?: PickupFulfillmentDetails;
    /**
     * Shape $ (Value): {@link FulfillmentRecipient}. Omitted for a checkout session credential
     * that doesn't act for the customer the buyer verified. The recipient of a fulfillment, with
     * name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipient;
    /**
     * Shape $ (Value): string or null. Derived start of the service schedule or pickup, local
     * delivery, or shipment window. Null when no schedule is booked, including digital
     * fulfillments. Details remain the authoritative schedule inputs. Nulls sort first ascending
     * and last descending, then by fulfillment_id in the same direction. Format: date-time.
     */
    "scheduled_start_at": string | null;
    /**
     * Shape $ (Value): {@link ServiceFulfillmentDetails}. Schedule and completion details for a
     * service fulfillment. Details of a service fulfillment: the scheduled start and end,
     * timezone, completion time, and notes.
     */
    "service_details"?: ServiceFulfillmentDetails;
    /**
     * Shape $ (Value): {@link ShipmentFulfillmentDetails}. Shipping schedule and ship time for a
     * shipment fulfillment. Present only on shipment fulfillments with at least one value. Details
     * of a shipment fulfillment: the shipping window, timezone, and when the shipment was handed
     * to the carrier.
     */
    "shipment_details"?: ShipmentFulfillmentDetails;
    /**
     * Shape $ (Value): Array of {@link ExpandedShipmentSummary}. Shipments associated with this
     * fulfillment. Shape $[] (Value): {@link ExpandedShipmentSummary}. A shipment's summary
     * fields, including direction, status, and package count, returned when the shipment is
     * expanded.
     */
    "shipments"?: Array<ExpandedShipmentSummary>;
    /**
     * Shape $ (Value): string. Buyer-visible fulfillment status. Held fulfillments show their
     * pre-hold status. Value enum: "pending", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "accepted", "preparing", "picked", "packed", "dispatched", "no_show".
     */
    "status": "pending"
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
        | "no_show"
        | (string & {});
    /**
     * Shape $ (Value): Array of string. Always empty for buyer credentials. maxItems: 0. [] enum:
     * "complete", "cancel", "hold", "start", "mark_ready", "fail", "schedule", "accept",
     * "mark_preparing", "mark_picked", "mark_packed", "dispatch", "mark_no_show", "release_hold".
     * Shape $[] (Value): string. Value enum: "complete", "cancel", "hold", "start", "mark_ready",
     * "fail", "schedule", "accept", "mark_preparing", "mark_picked", "mark_packed", "dispatch",
     * "mark_no_show", "release_hold".
     */
    "supported_actions": Array<"complete"
        | "cancel"
        | "hold"
        | "start"
        | "mark_ready"
        | "fail"
        | "schedule"
        | "accept"
        | "mark_preparing"
        | "mark_picked"
        | "mark_packed"
        | "dispatch"
        | "mark_no_show"
        | "release_hold"
        | (string & {})>;
    /**
     * Shape $ (Value): string. When the fulfillment entered a terminal state: completed, canceled,
     * failed, or no_show. This records the state transition; completed_at records completion
     * evidence supplied for the fulfillment. Format: date-time.
     */
    "terminal_at"?: string;
    /**
     * Shape $ (Value): string. Value enum: "shipment", "pickup", "local_delivery", "digital",
     * "service".
     */
    "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {});
    /**
     * Shape $ (Value): string. When the fulfillment was last updated, in RFC3339 format. Format:
     * date-time.
     */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Monotonic fulfillment version for expected_version checks.
     * Use an integer string (decimal digits), not a floating-point number. Format: uint64.
     * minimum: 1.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link BuyerFulfillmentEvent}. An action recorded during an order's
 * fulfillment.
 */
export type BuyerFulfillmentEvent = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. Value enum: "pending", "on_hold", "in_progress", "ready",
     * "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked", "packed",
     * "dispatched", "no_show", "created", "shipped", "in_transit", "out_for_delivery",
     * "delivered", "delivery_attempted", "exception", "returned", "voided".
     */
    "current_status"?: "pending"
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
        | "no_show"
        | "created"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided"
        | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "carrier_scan", "status_changed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "tracking_updated",
     * "exception", "returned", "custom", "accepted", "preparing", "picked", "packed", "ready",
     * "dispatched", "completed", "canceled", "failed", "no_show".
     */
    "event_type": "carrier_scan"
        | "status_changed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "tracking_updated"
        | "exception"
        | "returned"
        | "custom"
        | "accepted"
        | "preparing"
        | "picked"
        | "packed"
        | "ready"
        | "dispatched"
        | "completed"
        | "canceled"
        | "failed"
        | "no_show"
        | (string & {});
    /** Shape $ (Value): string. */
    "fulfillment_event_id": string;
    /** Shape $ (Value): string. */
    "fulfillment_id": string;
    /** Shape $ (Value): string. */
    "location_description"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "occurred_at": string;
    /** Shape $ (Value): string. */
    "order_id": string;
    /** Shape $ (Value): string. */
    "package_id"?: string;
    /**
     * Shape $ (Value): string. Value enum: "pending", "on_hold", "in_progress", "ready",
     * "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked", "packed",
     * "dispatched", "no_show", "created", "shipped", "in_transit", "out_for_delivery",
     * "delivered", "delivery_attempted", "exception", "returned", "voided".
     */
    "previous_status"?: "pending"
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
        | "no_show"
        | "created"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided"
        | (string & {});
    /** Shape $ (Value): string. */
    "shipment_id"?: string;
};
/**
 * Shape $ (Value): {@link BuyerFulfillmentEventListResponse}. A page of `BuyerFulfillmentEvent`
 * objects.
 */
export type BuyerFulfillmentEventListResponse = {
    /**
     * Shape $ (Value): Array of {@link BuyerFulfillmentEvent}. Shape $[] (Value): {@link
     * BuyerFulfillmentEvent}. An action recorded during an order's fulfillment.
     */
    "data": Array<BuyerFulfillmentEvent>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link BuyerFulfillmentLineItem}. An order line item and quantity included in a
 * buyer's fulfillment, with the line's modifiers.
 */
export type BuyerFulfillmentLineItem = {
    /**
     * Shape $ (Value): Array of {@link BuyerOrderLineItemModifier}. Modifier selections
     * snapshotted from the order line for fulfillment. Shape $[] (Value): {@link
     * BuyerOrderLineItemModifier}. A modifier on a buyer's order line item, either a catalog
     * modifier or entered text, with its quantity and price change.
     */
    "modifiers"?: Array<BuyerOrderLineItemModifier>;
    /** Shape $ (Value): string. Order line whose quantity is allocated to the fulfillment. */
    "order_line_item_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
};
/** Shape $ (Value): {@link BuyerFulfillmentListResponse}. A page of `BuyerFulfillment` objects. */
export type BuyerFulfillmentListResponse = {
    /**
     * Shape $ (Value): Array of {@link BuyerFulfillment}. Shape $[] (Value): {@link
     * BuyerFulfillment}. Work required to deliver an order's items.
     */
    "data": Array<BuyerFulfillment>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link BuyerFulfillmentOutcome}. A terminal outcome recorded on a fulfillment,
 * such as a no-show, with its `reason` and when it occurred.
 */
export type BuyerFulfillmentOutcome = {
    /** Shape $ (Value): string. Time the terminal outcome occurred. Format: date-time. */
    "occurred_at": string;
    /**
     * Shape $ (Value): string. Recorded fulfillment outcome, such as a missed service appointment.
     * Value enum: "no_show".
     */
    "outcome_type": "no_show" | (string & {});
    /**
     * Shape $ (Value): string. Machine-readable reason for the recorded outcome. Value enum:
     * "customer_no_show", "provider_no_show", "location_unavailable", "scheduling_error", "other".
     */
    "reason": "customer_no_show"
        | "provider_no_show"
        | "location_unavailable"
        | "scheduling_error"
        | "other"
        | (string & {});
};
/**
 * Shape $ (Value): {@link BuyerFulfillmentResponse}. A response containing `BuyerFulfillment`
 * data.
 */
export type BuyerFulfillmentResponse = {
    /** Shape $ (Value): {@link BuyerFulfillment}. Work required to deliver an order's items. */
    "data": BuyerFulfillment;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link BuyerGiftCard}. A prepaid balance a customer can spend with the
 * merchant.
 */
export type BuyerGiftCard = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "available_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "balance_money": MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /** Shape $ (Value): string. */
    "gift_card_id": string;
    /** Shape $ (Value): string or null. RFC3339 timestamp. Format: date-time. */
    "last_loaded_at": string | null;
    /** Shape $ (Value): string or null. RFC3339 timestamp. Format: date-time. */
    "last_redeemed_at": string | null;
    /**
     * Shape $ (Value): string. Last four characters of the card's current code. minLength: 4.
     * maxLength: 4.
     */
    "last4": string;
    /** Shape $ (Value): string. */
    "merchant_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "reserved_money": MoneyValue;
    /** Shape $ (Value): string.  Value enum: "pending", "active", "frozen", "closed". */
    "status": "pending" | "active" | "frozen" | "closed" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link BuyerGiftCardListResponse}. A page of `BuyerGiftCard` objects. */
export type BuyerGiftCardListResponse = {
    /**
     * Shape $ (Value): Array of {@link BuyerGiftCard}. Shape $[] (Value): {@link BuyerGiftCard}. A
     * prepaid balance a customer can spend with the merchant.
     */
    "data": Array<BuyerGiftCard>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** Shape $ (Value): {@link BuyerGiftCardResponse}. A response containing `BuyerGiftCard` data. */
export type BuyerGiftCardResponse = {
    /**
     * Shape $ (Value): {@link BuyerGiftCard}. A prepaid balance a customer can spend with the
     * merchant.
     */
    "data": BuyerGiftCard;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link BuyerGiftCardTransaction}. A record of a change to a gift card's
 * balance.
 */
export type BuyerGiftCardTransaction = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "balance_after_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "balance_before_money": MoneyValue;
    /** Shape $ (Value): string. */
    "gift_card_id": string;
    /** Shape $ (Value): string. */
    "gift_card_transaction_id": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "posted_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "sequence": `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "load", "import", "redeem", "refund",
     * "refund_transfer", "adjustment", "cash_out", "purchase_reversal", "funding_loss_accepted",
     * "purchase_refund_recovery", "purchase_refund_recovery_transfer".
     */
    "transaction_type": "load"
        | "import"
        | "redeem"
        | "refund"
        | "refund_transfer"
        | "adjustment"
        | "cash_out"
        | "purchase_reversal"
        | "funding_loss_accepted"
        | "purchase_refund_recovery"
        | "purchase_refund_recovery_transfer"
        | (string & {});
};
/**
 * Shape $ (Value): {@link BuyerGiftCardTransactionListResponse}. A page of
 * `BuyerGiftCardTransaction` objects.
 */
export type BuyerGiftCardTransactionListResponse = {
    /**
     * Shape $ (Value): Array of {@link BuyerGiftCardTransaction}. Shape $[] (Value): {@link
     * BuyerGiftCardTransaction}. A record of a change to a gift card's balance.
     */
    "data": Array<BuyerGiftCardTransaction>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link BuyerInstructionsConfig}. Controls buyer instructions for a delivery
 * option. Omit it from a method configuration to disable instruction collection.
 */
export type BuyerInstructionsConfig = {
    /** Shape $ (Value): boolean. Whether checkout collects buyer instructions. */
    "enabled": boolean;
    /**
     * Shape $ (Value): string. Checkout field label, without leading or trailing whitespace.
     * Clients use a delivery-type default when omitted. minLength: 1. maxLength: 255.
     */
    "label"?: string;
    /**
     * Shape $ (Value): string. Checkout field placeholder, without leading or trailing whitespace.
     * Clients use a delivery-type default when omitted. minLength: 1. maxLength: 500.
     */
    "placeholder"?: string;
    /**
     * Shape $ (Value): boolean. Whether the buyer must enter instructions before selecting the
     * option. Requires enabled=true.
     */
    "required": boolean;
};
/**
 * Shape $ (Value): {@link BuyerInstructionsConfigRequestRequestInput}. Controls buyer instructions
 * for a delivery option. Omit it from a method configuration to disable instruction collection.
 */
export type BuyerInstructionsConfigRequestRequestInput = BuyerInstructionsConfig;
/** Shape $ (Value): {@link BuyerInvoice}. A bill issued to a customer. */
export type BuyerInvoice = {
    /**
     * Shape $ (Value): {@link InvoicePaymentAttempt}. The payment attempt in progress for this
     * invoice, such as a bank debit still processing. Omitted when none is open. Returned by `GET
     * /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET
     * /v1/me/invoices` omits it. An attempt to collect payment for an invoice.
     */
    "active_payment_attempt"?: InvoicePaymentAttempt;
    /**
     * Shape $ (Value): Array of {@link InvoiceDocumentRow}. What changed after the invoice was
     * issued, in display order, such as late fees, payments, credit notes, and write-offs. When
     * present, rows where `is_informational` is `false` sum to `outstanding_money`. The opening
     * `total` row contributes to the sum; the closing `amount_due` row is informational and states
     * it. `[]` when nothing changed or the invoice is void. Returned by `GET
     * /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET
     * /v1/me/invoices` omits it. Shape $[] (Value): {@link InvoiceDocumentRow}. One row of an
     * invoice document, such as a subtotal, discount, tax, late fee, payment, or amount due, with
     * its amount.
     */
    "balance_rows"?: Array<InvoiceDocumentRow>;
    /**
     * Shape $ (Value): Array of {@link BuyerAction}. What the buyer can do with the invoice: pay.
     * pay is available when a checkout session can take a payment now, and then required, due by
     * due_at or by the due date of the installment it collects. Shape $[] (Value): {@link
     * BuyerAction}. One thing a buyer can do with an order, subscription, invoice or return they
     * read through /v1/me. Show the actions with is_required as what needs the buyer's attention,
     * and the first available action as the primary action on the resource's page in your account.
     */
    "buyer_actions": Array<BuyerAction>;
    /**
     * Shape $ (Value): Array of string. Additional recipients copied on the invoice email and
     * every reminder. Shape $[] (Value): string.
     */
    "cc_emails": Array<string>;
    /**
     * Shape $ (Value): string. When the current closed interval began. Cleared when status returns
     * to open or partially_paid. A direct move between closed statuses preserves this timestamp.
     * Format: date-time.
     */
    "closed_at"?: string;
    /**
     * Shape $ (Value): string. Whether collection is blocked. While it is inventory_blocked,
     * collection attempts return INVOICE_COLLECTION_BLOCKED. Value enum: "none",
     * "inventory_blocked", "resolved".
     */
    "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
    /**
     * Shape $ (Value): string. How the invoice is collected: buyer_initiated, automatic, or
     * external. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session
     * result; `GET /v1/me/invoices` omits it. Value enum: "buyer_initiated", "automatic",
     * "external".
     */
    "collection_mode"?: "buyer_initiated" | "automatic" | "external" | (string & {});
    /** Shape $ (Value): string. When the invoice was created. Format: date-time. */
    "created_at"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Credit note credit allocated to this invoice, minus
     * reversed allocations. Unallocated credit isn't included. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "credit_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. The part of the balance due now. Without
     * schedule_entries, it equals outstanding_money. With schedule_entries, it is the outstanding
     * amount of the first entry, in schedule order, whose due time has arrived and that still has
     * a balance, or 0 when there is none. It is the amount the next collect call or checkout
     * session charges. To total everything past due, add the outstanding_money of the entries
     * whose status is due or overdue. Always 0 unless the invoice is open or partially_paid.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "currently_due_money": MoneyValue;
    /**
     * Shape $ (Value): {@link ExpandedCustomerSummary} or null. Summary of the billed customer.
     * Returned only with expand=customer. Shape $.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. Shape $.anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /**
     * Shape $ (Value): string. Customer billed by this invoice. Absent when the invoice has no
     * customer.
     */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. When payment is due. With payment terms, issue sets it from
     * issued_at and the terms, counted in the invoice's timezone. Absent when the invoice has no
     * due date. Format: date-time.
     */
    "due_at"?: string;
    /**
     * Shape $ (Value): string or null. Fine print at the bottom of the invoice and PDF. It cannot
     * change after issue. null when unset.
     */
    "footer": string | null;
    /** Shape $ (Value): string. Flint invoice ID. */
    "invoice_id": string;
    /**
     * Shape $ (Value): string. Sequential document number assigned when the invoice is issued.
     * Numbering is per merchant, with test and live mode numbered independently.
     */
    "invoice_number"?: string;
    /**
     * Shape $ (Value): boolean. Whether the invoice is open or partially_paid and past due with a
     * balance remaining. Without schedule_entries, due_at has passed and outstanding_money is
     * above zero; with them, at least one entry is overdue. Computed when the invoice is read.
     */
    "is_overdue": boolean;
    /**
     * Shape $ (Value): Array of {@link InvoiceDocumentRow}. The rows of the invoice's totals as
     * issued, in display order. Rows where `is_informational` is `false` sum to
     * `snapshot.pricing_amounts.total_money`. A closing `total` row is informational and states
     * that sum. Show the rows in order without merging or summing them. Returned by `GET
     * /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET
     * /v1/me/invoices` omits it. Shape $[] (Value): {@link InvoiceDocumentRow}. One row of an
     * invoice document, such as a subtotal, discount, tax, late fee, payment, or amount due, with
     * its amount.
     */
    "issue_rows"?: Array<InvoiceDocumentRow>;
    /**
     * Shape $ (Value): string. When the invoice was issued. Absent on a draft. Format: date-time.
     */
    "issued_at"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Late fees assessed after issue, minus waivers,
     * including amounts since paid or written off. Itemized in late_fees. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "late_fee_money": MoneyValue;
    /**
     * Shape $ (Value): Array of {@link BuyerInvoiceLateFee}. Late fees assessed on this invoice,
     * each with its paid, waived, written-off, and outstanding amounts. late_fee_money is their
     * assessed total minus waivers. Shape $[] (Value): {@link BuyerInvoiceLateFee}. A charge
     * assessed because an invoice payment is overdue.
     */
    "late_fees": Array<BuyerInvoiceLateFee>;
    /**
     * Shape $ (Value): string or null. Message to the customer, printed on the invoice and PDF. It
     * cannot change after issue. null when unset.
     */
    "memo": string | null;
    /**
     * Shape $ (Value): {@link Image}. The merchant's square icon, shown in browser tabs and
     * compact headers. Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout
     * session result; `GET /v1/me/invoices` omits it. An image with its `url`, `width`, and
     * `height`, and optional `alt` text.
     */
    "merchant_icon"?: Image;
    /** Shape $ (Value): string. Merchant that owns this invoice. */
    "merchant_id": string;
    /**
     * Shape $ (Value): {@link Image}. The merchant's logo. Returned by `GET
     * /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET
     * /v1/me/invoices` omits it. An image with its `url`, `width`, and `height`, and optional
     * `alt` text.
     */
    "merchant_logo"?: Image;
    /**
     * Shape $ (Value): {@link CheckoutMerchantSupport}. How the buyer can reach the merchant: the
     * support email, phone, and URL the merchant set. Omitted when the merchant set none. Returned
     * by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET
     * /v1/me/invoices` omits it. The merchant's support contact. Each field is omitted when the
     * merchant has not set it.
     */
    "merchant_support"?: CheckoutMerchantSupport;
    /**
     * Shape $ (Value): {@link BuyerExpandedOrderSummary} or null. Summary of the backing order.
     * Returned only with expand=order. Shape $.anyOf[1] (Value): {@link
     * BuyerExpandedOrderSummary}. An order summary in a buyer response, with order status and
     * totals. Recorded buyer contact is omitted. Shape $.anyOf[2] (Value): null.
     */
    "order"?: ((BuyerExpandedOrderSummary) | (null));
    /**
     * Shape $ (Value): string. The order this invoice bills. Every invoice has one; quick pay
     * creates it.
     */
    "order_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. What is still owed. On an open or partially_paid
     * invoice it is total_money + late_fee_money - paid_money - credit_money, never below zero. 0
     * on paid, credited, uncollectible, and void invoices. Refunds don't change it. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * Shape $ (Value): string. When the invoice most recently became paid. Cleared when status
     * leaves paid and set again on a later paid transition. Format: date-time.
     */
    "paid_at"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Payments collected toward this invoice, online or as
     * recorded manual payments, minus reversed payments, including payments toward late fees.
     * Never below zero. Refunds don't reduce it; they are in refunded_money. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "paid_money": MoneyValue;
    /**
     * Shape $ (Value): {@link InvoicePaymentOptionCostComparison}. A payment option that costs the
     * merchant less to accept for this invoice, with the estimated savings. Present when the
     * invoice's payment policy turns on `show_cost_comparison` and Flint can compare the options.
     * Returned by `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result;
     * `GET /v1/me/invoices` omits it. Compares two payment options on an invoice and shows the
     * estimated savings from the lower-cost option.
     */
    "payment_option_cost_comparison"?: InvoicePaymentOptionCostComparison;
    /**
     * Shape $ (Value): Array of string. Ways the buyer can pay this invoice online, leaving out
     * any option whose limit the amount exceeds. `[]` when it can't be paid online. Returned by
     * `GET /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET
     * /v1/me/invoices` omits it. [] enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit". Shape $[] (Value): string. Value enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit".
     */
    "payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /**
     * Shape $ (Value): {@link InvoicePaymentTermsSnapshot}. The payment term captured on the
     * draft, with its due date rule and late fee policy. Later changes to the payment term don't
     * affect this invoice. The payment terms saved on an invoice: the term's name, version, due
     * date calculation, and late fee policy.
     */
    "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
    /**
     * Shape $ (Value): string or null. The buyer's purchase order number, printed on the invoice
     * and PDF. It cannot change after issue. null when unset.
     */
    "po_number": string | null;
    /**
     * Shape $ (Value): string or null. Where Flint emails the invoice and its reminders. Email
     * delivery requires it at issue. null when unset.
     */
    "recipient_email": string | null;
    /**
     * Shape $ (Value): string or null. Your reference for the invoice, printed on the invoice and
     * PDF. The buyer's purchase order number goes in po_number. It cannot change after issue. null
     * when unset.
     */
    "reference": string | null;
    /**
     * Shape $ (Value): string. How much of the collected money has been refunded. It doesn't
     * change status. Value enum: "none", "partially_refunded", "refunded".
     */
    "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Money refunded to the buyer after collection. Refunds
     * don't reopen the balance; refund_status summarizes them. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Shape $ (Value): {@link Address}. Where the buyer sends offline payments, shown on the
     * invoice. Defaults to the invoice settings remit-to address. A postal address. Every address
     * has country. Addresses Flint checked as complete (customer and saved addresses, merchant,
     * location, invoice, order delivery destination, tax identity, fulfillment recipient and
     * pickup addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country.
     */
    "remit_to_address"?: Address;
    /**
     * Shape $ (Value): Array of {@link InvoiceScheduleEntry}. The payment schedule, in schedule
     * order. Always [] when the invoice has no schedule and is collected in one balance. Shape $[]
     * (Value): {@link InvoiceScheduleEntry}. One payment on an invoice's payment schedule, such as
     * a deposit, installment, or balance, with its due time, amounts, and status.
     */
    "schedule_entries": Array<InvoiceScheduleEntry>;
    /**
     * Shape $ (Value): string or null. When Flint will issue and deliver this draft. null when no
     * issue is scheduled. Cleared when the draft is issued or voided, or when you send null.
     * Format: date-time.
     */
    "scheduled_issue_at": string | null;
    /**
     * Shape $ (Value): string or null. The calendar date of the billed service, in YYYY-MM-DD
     * format. The invoice and PDF print it as written, without timezone conversion. null when
     * unset. Format: date.
     */
    "service_date": string | null;
    /**
     * Shape $ (Value): boolean. Whether Flint's hosted pages show the Powered by Flint mark for
     * this merchant. `false` when the merchant's agreement with Flint removes it. Returned by `GET
     * /v1/me/invoices/{invoice_id}` and in the invoice checkout session result; `GET
     * /v1/me/invoices` omits it.
     */
    "show_flint_mark"?: boolean;
    /**
     * Shape $ (Value): {@link InvoiceSnapshot}. The billing content of the invoice: line items,
     * discounts, charges, tip, tax, and totals. A draft previews the backing order; issue freezes
     * it, and later order changes don't reach an issued invoice. A frozen copy of an issued
     * invoice's content, including line items, charges, discounts, tax identities, and pricing
     * amounts.
     */
    "snapshot"?: InvoiceSnapshot;
    /**
     * Shape $ (Value): string. Current invoice status. paid and credited close the current balance
     * and can reopen to open or partially_paid after a payment or credit allocation reversal;
     * invoice.reopened reports that change. void and uncollectible are final. Refunds change
     * refund_status without reopening the balance. Value enum: "open", "partially_paid", "paid",
     * "void", "uncollectible", "credited".
     */
    "status": "open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited" | (string & {});
    /**
     * Shape $ (Value): string or null. The subscription the backing order belongs to, copied when
     * the draft is created and never changed. null when the order isn't part of a subscription.
     */
    "subscription_id": string | null;
    /**
     * Shape $ (Value): {@link CheckoutTheme}. The theme Flint's hosted invoice page renders with,
     * from your branding settings. Returned by `GET /v1/me/invoices/{invoice_id}` and in the
     * invoice checkout session result; `GET /v1/me/invoices` omits it. Colors, corner radius, font
     * family, and title that style a checkout, taken from the session or link theme or the
     * merchant's branding settings.
     */
    "theme"?: CheckoutTheme;
    /**
     * Shape $ (Value): string. IANA time zone for the invoice's calendar dates, such as due dates
     * from payment terms and reminder and late fee day counts. At issue, an invoice without one
     * takes the invoice settings timezone.
     */
    "timezone"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. What the invoice bills, equal to
     * snapshot.pricing_amounts.total_money and fixed at issue. Late fees are in late_fee_money.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /** Shape $ (Value): string. When the invoice last changed. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Current invoice version. Send this as expected_version when
     * updating the draft. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 1.
     */
    "version": `${bigint}`;
    /**
     * Shape $ (Value): string. When the buyer first opened the invoice through its hosted invoice
     * link. Recorded on a best-effort basis. Format: date-time.
     */
    "viewed_at"?: string;
    /** Shape $ (Value): string. When the invoice was voided. Format: date-time. */
    "voided_at"?: string;
};
/**
 * Shape $ (Value): {@link BuyerInvoiceCheckoutSessionResponse}. A response containing
 * `BuyerInvoiceCheckoutSessionResult` data.
 */
export type BuyerInvoiceCheckoutSessionResponse = {
    /**
     * Shape $ (Value): {@link BuyerInvoiceCheckoutSessionResult}. The invoice is the primary
     * resource, with its checkout session, credential, and any invoice payment attempt.
     */
    "data": BuyerInvoiceCheckoutSessionResult;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link BuyerInvoiceCheckoutSessionResult}. The invoice is the primary resource,
 * with its checkout session, credential, and any invoice payment attempt.
 */
export type BuyerInvoiceCheckoutSessionResult = {
    /** Shape $ (Value): string. */
    "checkout_auth_token": string;
    /**
     * Shape $ (Value): {@link BuyerCheckoutSession}. A session in which a buyer completes an
     * order's payment.
     */
    "checkout_session": BuyerCheckoutSession;
    /** Shape $ (Value): {@link BuyerInvoice}. A bill issued to a customer. */
    "invoice": BuyerInvoice;
    /**
     * Shape $ (Value): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
     * invoice.
     */
    "invoice_payment_attempt"?: InvoicePaymentAttempt;
};
/**
 * Shape $ (Value): {@link BuyerInvoiceLateFee}. A charge assessed because an invoice payment is
 * overdue.
 */
export type BuyerInvoiceLateFee = {
    /**
     * Shape $ (Value): {@link MoneyValue}. The assessed fee: the policy's fixed amount, or its
     * percent of base_outstanding_money. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string. When the fee was assessed. Format: date-time. */
    "assessed_at": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. The unpaid balance the fee was calculated from,
     * excluding late fees, captured at assessment. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "base_outstanding_money": MoneyValue;
    /** Shape $ (Value): string. Flint invoice late fee ID. */
    "invoice_late_fee_id": string;
    /**
     * Shape $ (Value): string. The schedule entry this fee applies to. Absent on an invoice
     * without a schedule, where the fee applies to the whole invoice. Each invoice, or each entry,
     * takes at most one fee, even after a waiver.
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * Shape $ (Value): {@link InvoiceLateFeePolicy} or null. The late fee policy from
     * payment_terms_snapshot, copied when the fee was assessed. Shape $.anyOf[1] (Value): {@link
     * InvoiceLateFeePolicy}. A late fee for overdue invoices: a fixed amount or a percentage, a
     * grace period in days, and whether Flint applies it automatically. Shape $.anyOf[2] (Value):
     * null.
     */
    "late_fee_policy": ((InvoiceLateFeePolicy) | (null) | (unknown));
    /**
     * Shape $ (Value): {@link MoneyValue}. What is still owed on this fee: amount_money -
     * paid_money - waived_money - written_off_money, never below zero. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Payments applied to this fee, minus reversed payments.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "paid_money": MoneyValue;
    /**
     * Shape $ (Value): string. When the fee was waived. Absent unless it was waived. Format:
     * date-time.
     */
    "waived_at"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. The amount waived. A waiver removes the fee's whole
     * outstanding amount at that time, so it is less than amount_money when part of the fee was
     * already paid. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "waived_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. The part of this fee written off when the invoice was
     * marked uncollectible. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "written_off_money": MoneyValue;
};
/** Shape $ (Value): {@link BuyerInvoiceListResponse}. A page of `BuyerInvoice` objects. */
export type BuyerInvoiceListResponse = {
    /**
     * Shape $ (Value): Array of {@link BuyerInvoice}. Shape $[] (Value): {@link BuyerInvoice}. A
     * bill issued to a customer.
     */
    "data": Array<BuyerInvoice>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** Shape $ (Value): {@link BuyerInvoiceResponse}. A response containing `BuyerInvoice` data. */
export type BuyerInvoiceResponse = {
    /** Shape $ (Value): {@link BuyerInvoice}. A bill issued to a customer. */
    "data": BuyerInvoice;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link BuyerOrder}. A customer's purchase and its payment and fulfillment
 * progress.
 */
export type BuyerOrder = {
    /** Shape $ (Value): {@link BuyerOrderPaymentAttempt}. An attempt to pay an order. */
    "active_payment_attempt"?: BuyerOrderPaymentAttempt;
    /**
     * Shape $ (Value): {@link OrderAuthorizationAmounts}. The amounts authorized and still
     * capturable on an order's payments, with the authorization expiry.
     */
    "authorization_amounts"?: OrderAuthorizationAmounts;
    /**
     * Shape $ (Value): Array of {@link BuyerAction}. What the buyer can do with the order, in this
     * order: start_return, then resend_receipt. A buyer's read through a customer session on
     * /v1/me, or in Flint's buyer account, lists both every time; a merchant read gets an empty
     * list. A list of orders leaves start_return out, since only a read of one order checks return
     * eligibility. start_return is due when the last open return window ends. Example: []. Shape
     * $[] (Value): {@link BuyerAction}. One thing a buyer can do with an order, subscription,
     * invoice or return they read through /v1/me. Show the actions with is_required as what needs
     * the buyer's attention, and the first available action as the primary action on the
     * resource's page in your account.
     */
    "buyer_actions": Array<BuyerAction>;
    /**
     * Shape $ (Value): {@link CheckoutBuyerContact}. Email and phone saved when payment started,
     * from the pay request's buyer_contact or the paying checkout session's saved contact. It does
     * not change the linked customer. Buyer contact supplied with payment or saved during
     * checkout.
     */
    "buyer_contact"?: CheckoutBuyerContact;
    /** Shape $ (Value): string. */
    "buyer_note"?: string;
    /**
     * Shape $ (Value): Array of {@link BuyerOrderCharge}. Shape $[] (Value): {@link
     * BuyerOrderCharge}. An additional charge applied to an order.
     */
    "charges": Array<BuyerOrderCharge>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "checkout_session_ids": Array<string>;
    /**
     * Shape $ (Value): string. When the order closed. Present exactly when status is closed. Set
     * once at the transition and never changed. Format: date-time.
     */
    "closed_at"?: string;
    /**
     * Shape $ (Value): string. Why the order closed. Present exactly when status is closed. Set
     * once at closure. Unrecognized reasons are returned as other; new values may be added. Value
     * enum: "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded",
     * "return_resolution_canceled", "other".
     */
    "closed_reason"?: "paid"
        | "closed_by_merchant"
        | "checkout_expired"
        | "written_off"
        | "superseded"
        | "return_resolution_canceled"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): {@link OrderDeliveryDestination}. The shipment or local-delivery
     * destination committed for this order. Payment freezes this value; fulfillment recipient
     * changes do not replace it. Omitted for a checkout session credential that doesn't act for
     * the customer the buyer verified. Where an order is delivered: the address, the recipient,
     * and where the destination came from.
     */
    "delivery_destination"?: OrderDeliveryDestination;
    /**
     * Shape $ (Value): Array of {@link OrderDiscount}. Shape $[] (Value): {@link OrderDiscount}. A
     * discount applied to an order, with its amount, status, and the line items and charges it
     * covers. It comes from a manual discount or a promotion.
     */
    "discounts": Array<OrderDiscount>;
    /**
     * Shape $ (Value): string. Aggregate progress across the order's fulfillment quantities. Value
     * enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled", "not_applicable",
     * "closed".
     */
    "fulfillment_status"?: "not_fulfilled"
        | "partially_fulfilled"
        | "fulfilled"
        | "canceled"
        | "not_applicable"
        | "closed"
        | (string & {});
    /**
     * Shape $ (Value): Array of {@link BuyerFulfillment}. Shape $[] (Value): {@link
     * BuyerFulfillment}. Work required to deliver an order's items.
     */
    "fulfillments": Array<BuyerFulfillment>;
    /**
     * Shape $ (Value): {@link OrderGiftCardEstimate}. An estimate of how an order total splits
     * between gift cards and the payment processor, and whether gift cards can pay it.
     */
    "gift_card_estimate"?: OrderGiftCardEstimate;
    /**
     * Shape $ (Value): Array of {@link OrderGiftCardSettlement}. Shape $[] (Value): {@link
     * OrderGiftCardSettlement}. A gift card redemption applied to an order payment, with the
     * amount, tip, and gift card.
     */
    "gift_card_settlements": Array<OrderGiftCardSettlement>;
    /** Shape $ (Value): boolean. */
    "gift_card_tender_enabled": boolean;
    /**
     * Shape $ (Value): Array of {@link OrderGiftCardSelection}. Shape $[] (Value): {@link
     * OrderGiftCardSelection}. A gift card available to pay an order, with its available balance
     * and the last four characters of its code.
     */
    "gift_cards": Array<OrderGiftCardSelection>;
    /**
     * Shape $ (Value): string or null. ID of the delivery selection that governs this order,
     * including pickup choices without a delivery destination. Null when no selection governs the
     * order. While set, change the destination through the delivery selection.
     */
    "governing_delivery_selection_id": string | null;
    /**
     * Shape $ (Value): Array of {@link BuyerOrderLineItem}. Shape $[] (Value): {@link
     * BuyerOrderLineItem}. An item purchased in an order.
     */
    "line_items": Array<BuyerOrderLineItem>;
    /** Shape $ (Value): string. */
    "merchant_id"?: string;
    /** Shape $ (Value): string. */
    "order_id": string;
    /** Shape $ (Value): string. */
    "order_number"?: string;
    /**
     * Shape $ (Value): string. Value enum: "virtual_terminal", "payment_link", "checkout", "api",
     * "subscription".
     */
    "origin"?: "virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription" | (string & {});
    /**
     * Shape $ (Value): {@link BuyerPaymentCollection}. What a client needs to collect payment for
     * a buyer's order. The `stripe` field holds the Stripe values.
     */
    "payment_collection"?: BuyerPaymentCollection;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "payment_intent_ids": Array<string>;
    /**
     * Shape $ (Value): string. Payment link whose checkout created this order. Absent for orders
     * that did not come from a payment link. Filter GET /v1/orders by payment_link_id to list a
     * link's orders.
     */
    "payment_link_id"?: string;
    /**
     * Shape $ (Value): string. Collection progress. An invoice write-off also completes collection
     * without receiving the written-off amount. Value enum: "unpaid", "partially_paid", "paid".
     */
    "payment_status": "unpaid" | "partially_paid" | "paid" | (string & {});
    /**
     * Shape $ (Value): {@link PricingAmounts}. The money totals for an order or invoice: subtotal,
     * discounts, charges, tax, requested tip, and total.
     */
    "pricing_amounts": PricingAmounts;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "refund_ids": Array<string>;
    /**
     * Shape $ (Value): string. Refund progress for collected money. Value enum: "none",
     * "partially_refunded", "refunded".
     */
    "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Shape $ (Value): Array of {@link OrderReturnCreditSettlement}. Value applied to this order
     * from items the buyer returned, such as an exchange's replacement order. Included in
     * settlement_amounts.paid_money. Shape $[] (Value): {@link OrderReturnCreditSettlement}. A
     * return credit applied to an order payment, with the amount and the return and resolution it
     * came from.
     */
    "return_credit_settlements": Array<OrderReturnCreditSettlement>;
    /**
     * Shape $ (Value): string. ID of the return resolution that created this order as a
     * replacement. Omitted for orders a return did not create.
     */
    "return_resolution_id"?: string;
    /**
     * Shape $ (Value): {@link SettlementAmounts}. How much of an order has been paid, refunded,
     * credited, written off, and settled as tips, and what balance and outstanding amount remain.
     */
    "settlement_amounts": SettlementAmounts;
    /**
     * Shape $ (Value): {@link BuyerPaymentCollection}. What a client needs to collect payment for
     * a buyer's order. The `stripe` field holds the Stripe values.
     */
    "setup_collection"?: BuyerPaymentCollection;
    /**
     * Shape $ (Value): string. Whether the order still accepts changes and new payments. Refunds,
     * fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Value
     * enum: "open", "closed".
     */
    "status": "open" | "closed" | (string & {});
    /**
     * Shape $ (Value): integer string. Charged subscription cycle associated with this order.
     * Signup is cycle 1; unpaid retries and skipped renewals do not advance the cycle. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     */
    "subscription_cycle"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Time the subscriber changed delivery after this paid renewal was
     * prepared. The order keeps its committed destination until you correct it or refund and
     * replace it. Format: date-time.
     */
    "subscription_delivery_changed_at"?: string;
    /** Shape $ (Value): string. */
    "subscription_id"?: string;
    /** Shape $ (Value): string. */
    "subscription_plan_id"?: string;
    /**
     * Shape $ (Value): {@link BuyerOrderTax}. Tax details on a buyer's order: whether tax is
     * enabled, its mode and status, location, exemption, and tax breakdowns.
     */
    "tax": BuyerOrderTax;
    /**
     * Shape $ (Value): {@link TicketedEvent}. Event and tickets this order sold through an event
     * payment link. Absent on other orders. Event details for a ticketed order: name, location,
     * start time, time zone, and the tickets issued.
     */
    "ticketed_event"?: TicketedEvent;
    /**
     * Shape $ (Value): Array of {@link BuyerTip}. Shape $[] (Value): {@link BuyerTip}. A tip on a
     * buyer's order, with its requested, effective, settled, and refunded amounts and how it was
     * allocated to payments.
     */
    "tips": Array<BuyerTip>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Order version for optimistic concurrency. Send this value
     * as the expected version when changing the order. Use an integer string (decimal digits), not
     * a floating-point number. Format: int64.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link BuyerOrderCharge}. An additional charge applied to an order. */
export type BuyerOrderCharge = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "applied_money": MoneyValue;
    /** Shape $ (Value): string.  Value enum: "subtotal_pre_discount", "subtotal_post_discount". */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /** Shape $ (Value): string. */
    "fulfillment_id"?: string;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "order_charge_id": string;
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent"?: number;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Shape $ (Value): {@link OrderCalculatedChargeTax}. Tax settings for an order charge
     * calculated by Flint or supplied by you, including the charge's tax category and whether it
     * is taxable.
     */
    "tax"?: OrderCalculatedChargeTax;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Shape $ (Value): string. Value enum: "service_fee", "delivery_fee", "shipping_fee",
     * "handling_fee", "packaging_fee", "small_order_fee", "service_area_fee", "setup_fee",
     * "installation_fee", "cleaning_fee", "booking_fee", "reservation_fee", "ticket_fee",
     * "fulfillment_fee", "restocking_fee", "rush_fee", "other".
     */
    "type": "service_fee"
        | "delivery_fee"
        | "shipping_fee"
        | "handling_fee"
        | "packaging_fee"
        | "small_order_fee"
        | "service_area_fee"
        | "setup_fee"
        | "installation_fee"
        | "cleaning_fee"
        | "booking_fee"
        | "reservation_fee"
        | "ticket_fee"
        | "fulfillment_fee"
        | "restocking_fee"
        | "rush_fee"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
};
