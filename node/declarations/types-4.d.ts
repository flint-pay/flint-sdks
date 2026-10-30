import type { GetReturnResolutionResponse, GetReturnResponse, GiftCard } from './types-23.js';
import type { ReadinessAction, ReadinessRequirements } from './types-46.js';
import type { MoneyValue, MoneyValueInput } from './types-35.js';
import type { GiftCardTransaction } from './types-24.js';
import type { ResponseMeta } from './types-48.js';
import type { InputValue } from '../runtime.js';
import type { CreateCategoryRequestInput } from './types-6.js';
import type { UpdateCategoryRequestInput } from './types-58.js';
import type { MetadataMap, MerchantWebhookEnvelope } from './types-34.js';
import type { PartnerWebhookEnvelope, PaymentCollection } from './types-40.js';
import type { SubscriptionPlanChangeLineItemRequest, SubscriptionPlanChangeLineItemRequestInput } from './types-55.js';
import type { Address, AddressRequest, AddressRequestInput } from './types-0.js';
import type { ResourceReference } from './types-47.js';
import type { DeliveryInputRequirement, DeliveryMerchantDiagnostic } from './types-15.js';
import type { DeliveryQuoteChoiceGroupResource } from './types-18.js';
import type {
    ErrorRemediation,
    ExpandedCustomerSummary,
    ExpandedInvoiceSummary,
    ExpandedOrderSummary,
    ExpandedPaymentIntentSummary,
    ExpandedPaymentLinkSummary
} from './types-21.js';
import type { OrderLineItemTax, OrderLineItemTaxInput, OrderPaymentAttempt } from './types-37.js';
import type { CheckoutSessionTax, CheckoutSubscriptionTerms, CheckoutTheme, CheckoutTipConfig } from './types-5.js';
import type { Image } from './types-25.js';
import type { LegalSettings } from './types-32.js';
/** The request body for: Cancel one of the current buyer's Returns; Cancel return. */
export type CancelReturnRequestInput = {
    /** Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Value enum: "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error",
     * "other".
     */
    "reason": "buyer_request" | "merchant_request" | "duplicate" | "expired" | "created_in_error" | "other";
    /** minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Cancel return resolution. */
export type CancelReturnResolutionRequestInput = CancelReturnRequestInput;
export type CancelReturnResolutionResponse = GetReturnResolutionResponse;
export type CancelReturnResponse = GetReturnResponse;
/** The request body for: Cancel one of the current buyer's subscriptions; Cancel subscription. */
export type CancelSubscriptionRequest = {
    /**
     * When true, ends the subscription now. Otherwise, schedules cancellation at trial_end_at
     * while trialing, current_period_end_at while active, or next_retry_at while past_due, instead
     * of that charge. An active subscription with an expired renewal delivery hold ends now. A
     * scheduled, incomplete, or paused subscription, or a past_due subscription without
     * next_retry_at, requires cancel_immediately: true; otherwise returns 409 ACTION_NOT_ALLOWED
     * with reason period_end_unavailable. A buyer may cancel immediately when the store allows
     * buyer_chooses or no scheduled cancellation time is available. Under end_of_period, a trial
     * continues until trial_end_at.
     */
    "cancel_immediately"?: boolean;
    /**
     * Free text about the cancellation, up to 500 characters after surrounding spaces are trimmed.
     * Recorded in cancellation_details.comment, which only merchant credentials read. minLength:
     * 1. maxLength: 500.
     */
    "cancellation_comment"?: string;
    /**
     * Optional. Why the subscription is being canceled. When the store lists
     * customer_account.buyer_capabilities.cancellation_reasons, a reason a buyer sends must be one
     * of them; merchant credentials may send any code. Recorded in
     * cancellation_details.reason_code. Value enum: "too_expensive", "missing_features",
     * "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     */
    "cancellation_reason_code"?: "too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other"
        | (string & {});
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
};
/** The request body for: Cancel one of the current buyer's subscriptions; Cancel subscription. */
export type CancelSubscriptionRequestInput = {
    /**
     * When true, ends the subscription now. Otherwise, schedules cancellation at trial_end_at
     * while trialing, current_period_end_at while active, or next_retry_at while past_due, instead
     * of that charge. An active subscription with an expired renewal delivery hold ends now. A
     * scheduled, incomplete, or paused subscription, or a past_due subscription without
     * next_retry_at, requires cancel_immediately: true; otherwise returns 409 ACTION_NOT_ALLOWED
     * with reason period_end_unavailable. A buyer may cancel immediately when the store allows
     * buyer_chooses or no scheduled cancellation time is available. Under end_of_period, a trial
     * continues until trial_end_at.
     */
    "cancel_immediately"?: boolean;
    /**
     * Free text about the cancellation, up to 500 characters after surrounding spaces are trimmed.
     * Recorded in cancellation_details.comment, which only merchant credentials read. minLength:
     * 1. maxLength: 500.
     */
    "cancellation_comment"?: string;
    /**
     * Optional. Why the subscription is being canceled. When the store lists
     * customer_account.buyer_capabilities.cancellation_reasons, a reason a buyer sends must be one
     * of them; merchant credentials may send any code. Recorded in
     * cancellation_details.reason_code. Value enum: "too_expensive", "missing_features",
     * "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     */
    "cancellation_reason_code"?: "too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other";
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
};
/** Merchant capability readiness for a payment or money movement capability. */
export type CapabilityReadiness = {
    /**
     * Flint-owned capability name. Payment capabilities describe transaction acceptance readiness;
     * money movement capabilities describe payout and balance movement readiness. Value enum:
     * "accept_card_payments", "save_payment_methods", "accept_affirm_payments",
     * "accept_ach_debit_payments", "receive_payouts", "create_standard_payouts",
     * "manage_payout_destinations", "manage_payout_settings".
     */
    "capability": "accept_card_payments"
        | "save_payment_methods"
        | "accept_affirm_payments"
        | "accept_ach_debit_payments"
        | "receive_payouts"
        | "create_standard_payouts"
        | "manage_payout_destinations"
        | "manage_payout_settings"
        | (string & {});
    /**
     * Product domain this capability belongs to: payments for payment acceptance or money_movement
     * for balances and payouts. Value enum: "money_movement", "payments".
     */
    "domain": "money_movement" | "payments" | (string & {});
    /**
     * Actions that can remediate or refresh this capability when Flint can suggest one. []
     * (Value): {@link ReadinessAction}. A step that moves a merchant capability or readiness axis
     * forward, with the party that must do it (`owner`) and any required fields.
     */
    "next_actions": Array<ReadinessAction>;
    /**
     * Merchant requirements that affect this capability. Account information requirements for a
     * merchant, grouped as currently due, eventually due, past due, and pending verification.
     */
    "requirements": ReadinessRequirements;
    /**
     * Current readiness status for this capability. Value enum: "ready", "pending", "blocked",
     * "not_requested", "not_available".
     */
    "status": "ready" | "pending" | "blocked" | "not_requested" | "not_available" | (string & {});
    /**
     * Value enum: "onboarding_not_started", "requirements_due", "requirements_past_due",
     * "pending_verification", "account_rejected", "disabled_by_platform_policy",
     * "billing_suspended", "platform_review", "processing_not_enabled",
     * "platform_funding_unavailable", "tax_category_required", "service_unavailable",
     * "payment_option_access_not_provisioned", "payment_option_activation_pending",
     * "payment_option_not_in_plan", "payment_option_not_available", "capability_not_active",
     * "other".
     */
    "status_reason"?: "onboarding_not_started"
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
/** The request body for: Capture payment intent. */
export type CapturePaymentIntentRequest = {
    /**
     * Amount to capture, in the authorization's currency. Omit it to capture all of
     * capturable_money. A smaller amount is a partial capture: Flint releases the rest in the same
     * request, and the payment intent can't be captured again. Must be greater than zero and at
     * most capturable_money. Affirm payments can only be captured in full. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/** The request body for: Capture payment intent. */
export type CapturePaymentIntentRequestInput = {
    /**
     * Amount to capture, in the authorization's currency. Omit it to capture all of
     * capturable_money. A smaller amount is a partial capture: Flint releases the rest in the same
     * request, and the payment intent can't be captured again. Must be greater than zero and at
     * most capturable_money. Affirm payments can only be captured in full. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/**
 * Card details on a payment method: brand, expiration month and year, last four digits, and the
 * wallet when one was used.
 */
export type CardDetails = {
    /** Value enum: "visa", "mastercard", "amex", "discover", "diners", "jcb", "unionpay". */
    "brand": "visa" | "mastercard" | "amex" | "discover" | "diners" | "jcb" | "unionpay" | (string & {});
    /** Format: int32. */
    "exp_month": number;
    /** Format: int32. */
    "exp_year": number;
    "last4": string;
    /** The wallet the card came from. Absent for a card entered directly. */
    "wallet"?: string;
};
/** The request body for: Record a cash-out. */
export type CashOutGiftCardRequest = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /**
     * Your reference for the cash you paid the buyer outside Flint, such as a receipt number.
     * Required; 1 to 255 characters. The value is preserved exactly as sent. minLength: 1.
     * maxLength: 255.
     */
    "cash_out_reference": string;
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
};
/** The request body for: Record a cash-out. */
export type CashOutGiftCardRequestInput = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValueInput;
    /**
     * Your reference for the cash you paid the buyer outside Flint, such as a receipt number.
     * Required; 1 to 255 characters. The value is preserved exactly as sent. minLength: 1.
     * maxLength: 255.
     */
    "cash_out_reference": string;
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
};
/**
 * The result of recording a gift card cash-out: the updated gift card and the transactions it
 * created.
 */
export type CashOutGiftCardResult = {
    /**
     * Merchant-issued purchased gift card. Posted balance includes reserved value; available value
     * is balance minus reservations. Frozen value remains part of outstanding liability. Gift
     * cards are independent resources and cannot be transferred across merchants or currencies.
     */
    "gift_card": GiftCard;
    /**
     *  [] (Value): {@link GiftCardTransaction}. Immutable posted financial movement with signed
     * amount, per-card sequence, merchant sequence and balance snapshots. Corrections create new
     * transactions.
     */
    "gift_card_transactions": Array<GiftCardTransaction>;
};
/** A response containing `CashOutGiftCardResult` data. */
export type CashOutGiftCardResultResponse = {
    /**
     * The result of recording a gift card cash-out: the updated gift card and the transactions it
     * created.
     */
    "data": CashOutGiftCardResult;
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
export type CategoriesCreateParams = (InputValue<CreateCategoryRequestInput>);
export type CategoriesDeleteParams = {
    /** Optional resource version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: InputValue<number>;
};
export type CategoriesGetParams = {};
export type CategoriesListParams = {
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
    /**
     * Exact handle match. Handles are lowercase, so matching is case-sensitive with no
     * normalization; a value that isn't a valid handle returns 400 INVALID_REQUEST. maxLength:
     * 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "handle"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across category ID, external reference ID, handle, name, and description. Text fields
     * match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs
     * match from the start and need the type prefix, such as ctg_01.
     */
    "query"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to handle; ties are broken by category_id. Default: "handle".
     * Value enum: "handle", "created_at", "updated_at".
     */
    "sort_by"?: InputValue<"handle" | "created_at" | "updated_at">;
    /** Sort direction. Defaults to asc. Default: "asc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
};
export type CategoriesUpdateParams = (InputValue<UpdateCategoryRequestInput>);
/** A catalog grouping used to organize items. */
export type Category = {
    /** Number of bundles currently assigned to the category. Format: int64. */
    "assigned_bundle_count": number;
    /** Number of products currently assigned to the category. Format: int64. */
    "assigned_product_count": number;
    /** Stable identifier of the category. */
    "category_id": string;
    /** When this resource was created, as an RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Description of the category. */
    "description"?: string;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /** Immutable handle used to assign this category to products and bundles. */
    "handle": string;
    /** Identifier of the merchant that owns this resource. */
    "merchant_id"?: string;
    /**
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Category name shown to buyers. */
    "name": string;
    /**
     * Category lifecycle status. Active categories can be assigned; deleted is returned only by
     * DELETE. Value enum: "active", "deleted".
     */
    "status": "active" | "deleted" | (string & {});
    /**
     * Number of promotions, return reasons and return policy versions that reference this
     * category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or
     * `assigned_product_count` or `assigned_bundle_count` is above zero. Format: int64.
     */
    "targeting_reference_count": number;
    /** When this resource last changed, as an RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Persisted owned-state version. Clock-based availability and expanded resources do not
     * advance this counter. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type CategoryCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Category;
    };
    "event_type"?: "category.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Category;
    };
    "event_type"?: "category.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "category.created";
});
/**
 * The `category.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type CategoryCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Category}. A catalog grouping used to organize items. */
    "data"?: {
        /** A catalog grouping used to organize items. */
        "object": Category;
    };
    /** Value enum: "category.created". */
    "event_type"?: "category.created";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `category.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CategoryCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Category}. A catalog grouping used to organize items. */
    "data"?: {
        /** A catalog grouping used to organize items. */
        "object": Category;
    };
    /** Value enum: "category.created". */
    "event_type"?: "category.created";
});
export type CategoryDeletedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Category;
    };
    "event_type"?: "category.deleted";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Category;
    };
    "event_type"?: "category.deleted";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "category.deleted";
});
/**
 * The `category.deleted` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type CategoryDeletedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Category}. A catalog grouping used to organize items. */
    "data"?: {
        /** A catalog grouping used to organize items. */
        "object": Category;
    };
    /** Value enum: "category.deleted". */
    "event_type"?: "category.deleted";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `category.deleted` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CategoryDeletedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Category}. A catalog grouping used to organize items. */
    "data"?: {
        /** A catalog grouping used to organize items. */
        "object": Category;
    };
    /** Value enum: "category.deleted". */
    "event_type"?: "category.deleted";
});
/** A page of `Category` objects. */
export type CategoryListResponse = {
    /**
     * The requested category data. [] (Value): {@link Category}. A catalog grouping used to
     * organize items.
     */
    "data": Array<Category>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Token for the next page. Omitted when there are no more results. */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, useful when contacting support. maxLength: 128. pattern:
     * ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A reference to a product category by ID, handle, and name. */
export type CategoryReference = {
    /** Stable identifier of the category. */
    "category_id": string;
    /** Category handle recorded with this reference. */
    "handle": string;
    /** Category name recorded with this reference. */
    "name": string;
};
/** A response containing `Category` data. */
export type CategoryResponse = {
    /** The requested category data. A catalog grouping used to organize items. */
    "data": Category;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, useful when contacting support. maxLength: 128. pattern:
     * ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type CategoryUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Category;
    };
    "event_type"?: "category.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Category;
    };
    "event_type"?: "category.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "category.updated";
});
/**
 * The `category.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type CategoryUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Category}. A catalog grouping used to organize items. */
    "data"?: {
        /** A catalog grouping used to organize items. */
        "object": Category;
    };
    /** Value enum: "category.updated". */
    "event_type"?: "category.updated";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `category.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CategoryUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Category}. A catalog grouping used to organize items. */
    "data"?: {
        /** A catalog grouping used to organize items. */
        "object": Category;
    };
    /** Value enum: "category.updated". */
    "event_type"?: "category.updated";
});
/** The request body for: Change subscription plan. */
export type ChangeSubscriptionPlanRequest = ({
    /**
     * Send with billing_interval_count to choose a target plan option. Omit both to keep the
     * current interval. Value enum: "daily", "weekly", "monthly", "yearly".
     */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /**
     * Required when billing_interval is sent; billing_interval is required when this field is
     * sent. minimum: 1. maximum: 365.
     */
    "billing_interval_count"?: number;
    /**
     * now bills a new period with credit for unused paid item time. next_renewal changes the plan
     * immediately and keeps the current paid period and next billing date. Value enum: "now",
     * "next_renewal".
     */
    "billing_starts": "now" | "next_renewal" | (string & {});
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Optional quantities for target plan lines, with no duplicate IDs. Omitted lines carry their
     * paired current line's quantity, or use the target line's quantity when unpaired. If an
     * adjusted current quantity cannot be paired, send a quantity for every target line. []
     * (Value): {@link SubscriptionPlanChangeLineItemRequest}. Quantity override for a line in the
     * target subscription plan.
     */
    "line_items"?: Array<SubscriptionPlanChangeLineItemRequest>;
    /**
     * Omit to keep the current subscription quantity. The target plan must offer the quantity.
     * Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 100.
     */
    "quantity"?: number;
    /** minLength: 1. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_plan_id": string;
});
/** The request body for: Change subscription plan. */
export type ChangeSubscriptionPlanRequestInput = ({
    /**
     * Send with billing_interval_count to choose a target plan option. Omit both to keep the
     * current interval. Value enum: "daily", "weekly", "monthly", "yearly".
     */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly";
    /**
     * Required when billing_interval is sent; billing_interval is required when this field is
     * sent. minimum: 1. maximum: 365.
     */
    "billing_interval_count"?: number;
    /**
     * now bills a new period with credit for unused paid item time. next_renewal changes the plan
     * immediately and keeps the current paid period and next billing date. Value enum: "now",
     * "next_renewal".
     */
    "billing_starts": "now" | "next_renewal";
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Optional quantities for target plan lines, with no duplicate IDs. Omitted lines carry their
     * paired current line's quantity, or use the target line's quantity when unpaired. If an
     * adjusted current quantity cannot be paired, send a quantity for every target line. []
     * (Value): {@link SubscriptionPlanChangeLineItemRequestInput}. Quantity override for a line in
     * the target subscription plan.
     */
    "line_items"?: Array<SubscriptionPlanChangeLineItemRequestInput>;
    /**
     * Omit to keep the current subscription quantity. The target plan must offer the quantity.
     * Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 100.
     */
    "quantity"?: number;
    /** minLength: 1. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. */
    "subscription_plan_id": string;
});
/** Buyer contact supplied with payment or saved during checkout. */
export type CheckoutBuyerContact = {
    /**
     * Email supplied for the buyer, exactly as sent. Null when no email is saved; is_email_cleared
     * distinguishes an explicit clear. Format: email. maxLength: 255.
     */
    "email": string | null;
    /**
     * True when the buyer explicitly cleared the email, including before entering one. Saving an
     * email resets it to false. Do not restore a prefilled email while true.
     */
    "is_email_cleared": boolean;
    /**
     * True when the buyer explicitly cleared the phone, including before entering one. Saving a
     * phone resets it to false. Do not restore a prefilled phone while true.
     */
    "is_phone_cleared": boolean;
    /**
     * Phone supplied for the buyer, in E.164 format. Null when no phone is saved; is_phone_cleared
     * distinguishes an explicit clear. pattern: ^\+[1-9][0-9]{1,14}$.
     */
    "phone": string | null;
    /**
     * When the buyer last changed the saved checkout contact. Omitted on order buyer contact.
     * Format: date-time.
     */
    "updated_at"?: string;
};
/**
 * Buyer contact to supply with payment or save during checkout. Send at least one field. Values
 * are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session
 * updates keep omitted fields and accept null to clear a field. Payment requests do not accept
 * null. minProperties: 1.
 */
export type CheckoutBuyerContactRequest = {
    /**
     * Email for the buyer, such as buyer@example.com. On checkout session updates, null clears the
     * saved email. Format: email. minLength: 1. maxLength: 255.
     */
    "email"?: string | null;
    /**
     * Phone for the buyer, in E.164 format, such as +14155551234. On checkout session updates,
     * null clears the saved phone. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$.
     */
    "phone"?: string | null;
};
/**
 * Buyer contact to supply with payment or save during checkout. Send at least one field. Values
 * are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session
 * updates keep omitted fields and accept null to clear a field. Payment requests do not accept
 * null. minProperties: 1.
 */
export type CheckoutBuyerContactRequestInput = CheckoutBuyerContactRequest;
/** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
export type CheckoutBuyerFields = {
    /** Whether checkout offers address suggestions while the buyer enters an address. */
    "address_autocomplete_enabled"?: boolean;
    /** Whether checkout requires the buyer's billing address. */
    "require_billing_address"?: boolean;
    /**
     * Whether checkout requires the buyer's email address. Subscription plan sessions always
     * require email, so only true is allowed with type: subscription_plan.
     */
    "require_email"?: boolean;
    /** Whether checkout requires the buyer's phone number. */
    "require_phone"?: boolean;
};
/** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
export type CheckoutBuyerFieldsRequestInput = CheckoutBuyerFields;
/** Custom text shown in checkout: an order summary message and a shipping address label. */
export type CheckoutCustomTextConfig = {
    "order_summary_message"?: string;
    "shipping_address_label"?: string;
};
/**
 * Custom checkout text you supply when creating a checkout session: an order summary message and a
 * shipping address label.
 */
export type CheckoutCustomTextWriteConfigInput = {
    /** minLength: 1. */
    "order_summary_message"?: string;
    /** minLength: 1. */
    "shipping_address_label"?: string;
};
/** Details the buyer's checkout can prefill from the customer it acts for. */
export type CheckoutCustomerPrefill = {
    /**
     * The customer's default billing address. Omitted when the customer has none. A postal
     * address. Every address has country. Addresses Flint checked as complete (customer and saved
     * addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     */
    "billing_address"?: Address;
    /** The customer's email. */
    "email": string;
    /**
     * The customer's default shipping address. Omitted when the customer has none. A postal
     * address. Every address has country. Addresses Flint checked as complete (customer and saved
     * addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     */
    "shipping_address"?: Address;
    /**
     * Recipient name of the customer's default shipping address. Present whenever
     * `shipping_address` is.
     */
    "shipping_recipient_name"?: string;
};
/**
 * A delivery dependency pinned to a checkout, such as the assigned method, eligibility, or pricing
 * callback, with the revision it was pinned at.
 */
export type CheckoutDeliveryPinnedDependency = {
    /**
     * Value enum: "assigned_method", "eligibility", "method_origin", "pickup_collection",
     * "pricing_callback", "origin".
     */
    "delivery_dependency_role": "assigned_method"
        | "eligibility"
        | "method_origin"
        | "pickup_collection"
        | "pricing_callback"
        | "origin"
        | (string & {});
    /**
     *  anyOf[1] (Value): {@link ResourceReference}. A reference to another resource by
     * `resource_type` and `resource_id`. anyOf[2] (Value): null.
     */
    "dependency": ((ResourceReference) | (null));
    /** Version of the Location geography used by this assignment or dependency. Format: int64. */
    "location_geography_version"?: number;
    "revision_id"?: string;
};
/**
 * The delivery options Flint derived for a checkout as a buyer sees them: choice groups, input
 * requirements, and evaluation status.
 */
export type CheckoutDerivedDeliveryResource = {
    /**  [] (Value): string. */
    "buyer_reasons": Array<string>;
    /**
     *  [] (Value): {@link DeliveryQuoteChoiceGroupResource}. One group of order items in a
     * delivery quote, with the delivery options the buyer can choose, its availability status, and
     * any input still needed.
     */
    "choice_groups": Array<DeliveryQuoteChoiceGroupResource>;
    "delivery_quote_id"?: string;
    /**
     * Current delivery selection ID after reconciliation, or null when no selection is current.
     * Assert this value with expected_delivery_selection_id on checkout delivery writes.
     */
    "delivery_selection_id": string | null;
    /** Value enum: "complete", "incomplete", "degraded", "requires_explicit_quote". */
    "evaluation_status": "complete" | "incomplete" | "degraded" | "requires_explicit_quote" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /**
     * Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these
     * are the quote's input_requirements. Before that, they come from the methods alone and name
     * no choice group: the fields in each method's quote_input_fields, and each recipient field a
     * method requires. [] (Value): {@link DeliveryInputRequirement}. An input a delivery method
     * needs, such as an address field or time window, with its `field_path`, purpose, and
     * constraint.
     */
    "input_requirements": Array<DeliveryInputRequirement>;
    /**
     * Always present with an API key or dashboard credential. [] (Value): {@link
     * DeliveryMerchantDiagnostic}. A merchant-only diagnostic explaining why a delivery method
     * produced no option, with its outcome, recommended action, and eligibility mismatches.
     */
    "merchant_diagnostics"?: Array<DeliveryMerchantDiagnostic>;
};
/** A URL to load in an iframe when applying a gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`. */
export type CheckoutGiftCardChallenge = {
    /**
     * Load this URL in an iframe on page_origin when applying a gift card returns
     * GIFT_CARD_CHALLENGE_REQUIRED. On a hosted session, Flint's checkout loads it for you, so you
     * don't need to do anything. The page posts a single-use proof to your page; send it in
     * Flint-Gift-Card-Challenge. Treat the URL as opaque. It stays the same for the session and
     * stops working when the session ends. Format: uri.
     */
    "url": string;
};
/**
 * Legal settings you supply when creating a checkout session: whether buyers must accept terms,
 * and links to the terms, refund policy, shipping policy, and contract.
 */
export type CheckoutLegalConfigRequestInput = {
    /** minLength: 1. */
    "contract_url"?: string;
    /** minLength: 1. */
    "refund_policy_url"?: string;
    "require_terms_of_service"?: boolean;
    /** minLength: 1. */
    "shipping_policy_url"?: string;
    /** minLength: 1. */
    "terms_of_service_url"?: string;
};
/** The merchant's support contact. Each field is omitted when the merchant has not set it. */
export type CheckoutMerchantSupport = {
    /** Support email address. Format: email. */
    "email"?: string;
    /** Support phone number. */
    "phone"?: string;
    /** Support page, as an absolute http or https URL. Format: uri. */
    "url"?: string;
};
/** Payment settings for a checkout: the enabled payment options and a note shown with payment. */
export type CheckoutPaymentConfig = {
    /**
     * Payment options for this session. The list replaces
     * settings.checkout.enabled_payment_options; omit it to use that setting. [] enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit". [] (Value): string. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "enabled_payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    "payment_note"?: string;
};
/**
 * Payment settings you supply when creating a checkout session: the enabled payment options and a
 * note shown with payment.
 */
export type CheckoutPaymentConfigRequestInput = {
    /**
     * Payment options for this session. The list replaces
     * settings.checkout.enabled_payment_options; omit it to use that setting. [] enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit". [] (Value): string. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "enabled_payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit">;
    /** minLength: 1. */
    "payment_note"?: string;
};
/**
 * A card the buyer saved with the checkout's payment by giving a mobile phone number. It works for
 * nothing until the buyer confirms it with a code: request one with POST
 * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
 * confirm_saved_payment_method.
 */
export type CheckoutPaymentMethodSave = {
    /**
     * True while status is pending after the buyer confirmed the number by text, when the number
     * alone can't save the card: the customer with the buyer's email existed before this payment,
     * the buyer did not confirm that email in this checkout, and the number isn't already the
     * customer's saved number with an active card saved with it. The buyer confirms the email with
     * an emailed code to finish; the card is then saved with the number, which replaces the
     * customer's saved number.
     */
    "email_confirmation_required": boolean;
    /**
     * When a pending save stops waiting: 24 hours after the payment succeeded or was approved.
     * Format: date-time.
     */
    "expires_at"?: string | null;
    /**
     * Last two digits of the number the buyer gave, which a code is texted to. Set while status is
     * pending.
     */
    "phone_last_digits"?: string;
    /** Value enum: "sms", "email". */
    "saved_with"?: "sms" | "email" | (string & {});
    /** Value enum: "pending", "saved", "expired". */
    "status": "pending" | "saved" | "expired" | (string & {});
};
/**
 * Contact details and addresses to fill in for the buyer, who can change them. For a customer with
 * saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay
 * or subscription_plan and automatic tax on, a prefilled address sets the order's tax location.
 * Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the
 * checkout credential reads from the customer record.
 */
export type CheckoutPrefill = {
    /**
     * A postal address. Every address has country. Addresses Flint checked as complete (customer
     * and saved addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     */
    "billing_address"?: Address;
    "email"?: string;
    "phone"?: string;
    /**
     * A postal address. Every address has country. Addresses Flint checked as complete (customer
     * and saved addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     */
    "shipping_address"?: Address;
};
/**
 * Contact details and addresses to fill in for the buyer, who can change them. For a customer with
 * saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay
 * or subscription_plan and automatic tax on, a prefilled address sets the order's tax location.
 * Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the
 * checkout credential reads from the customer record.
 */
export type CheckoutPrefillRequest = {
    /**
     * A complete postal address. State and postal_code are required for US addresses and optional
     * for other countries. Send null or omit line2, state, and postal_code when the address has
     * none.
     */
    "billing_address"?: AddressRequest;
    /** minLength: 1. */
    "email"?: string;
    /** minLength: 1. */
    "phone"?: string;
    /**
     * A complete postal address. State and postal_code are required for US addresses and optional
     * for other countries. Send null or omit line2, state, and postal_code when the address has
     * none.
     */
    "shipping_address"?: AddressRequest;
};
/**
 * Contact details and addresses to fill in for the buyer, who can change them. For a customer with
 * saved addresses, Flint fills in any address you leave out, and reads include it. With quick_pay
 * or subscription_plan and automatic tax on, a prefilled address sets the order's tax location.
 * Not changed by what the buyer types; for that, read buyer_contact. customer_prefill is what the
 * checkout credential reads from the customer record.
 */
export type CheckoutPrefillRequestInput = {
    /**
     * A complete postal address. State and postal_code are required for US addresses and optional
     * for other countries. Send null or omit line2, state, and postal_code when the address has
     * none.
     */
    "billing_address"?: AddressRequestInput;
    /** minLength: 1. */
    "email"?: string;
    /** minLength: 1. */
    "phone"?: string;
    /**
     * A complete postal address. State and postal_code are required for US addresses and optional
     * for other countries. Send null or omit line2, state, and postal_code when the address has
     * none.
     */
    "shipping_address"?: AddressRequestInput;
};
/**
 * A problem with a checkout session, such as a stale delivery selection, with its `code`, whether
 * it blocks completion, and remediation.
 */
export type CheckoutProblemResource = {
    "blocks_completion": boolean;
    /**
     * Value enum: "delivery_selection_stale", "delivery_selection_invalid", "delivery_unreadable",
     * "payment_in_progress".
     */
    "code": "delivery_selection_stale"
        | "delivery_selection_invalid"
        | "delivery_unreadable"
        | "payment_in_progress"
        | (string & {});
    /**
     * Recovery guidance for an error: whether and how to `retry`, plus next steps and suggested
     * actions.
     */
    "remediation"?: ErrorRemediation;
    /** Value enum: "error". */
    "severity": "error" | (string & {});
};
/**
 * Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can
 * apply promotion codes.
 */
export type CheckoutPromotionConfig = {
    "automatic_enabled"?: boolean;
    /**
     * Object-level override for whether this checkout's buyer can apply promotion codes, hosted or
     * headless. Hosted checkout shows or hides code entry to match. Omit to inherit
     * checkout.promotion_codes_enabled. True allows codes when the merchant's promotion settings
     * allow them; false blocks them for this checkout.
     */
    "codes_enabled"?: boolean | null;
};
/**
 * Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can
 * apply promotion codes.
 */
export type CheckoutPromotionConfigRequestInput = CheckoutPromotionConfig;
/**
 * A single custom item to charge on a checkout session, supplied as `quick_pay_item`: a name, an
 * amount, and optional tax settings.
 */
export type CheckoutQuickPayItemRequest = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /** minLength: 1. */
    "name": string;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
};
/**
 * A single custom item to charge on a checkout session, supplied as `quick_pay_item`: a name, an
 * amount, and optional tax settings.
 */
export type CheckoutQuickPayItemRequestInput = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValueInput;
    /** minLength: 1. */
    "name": string;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxInput;
};
/** Checkout reminder email settings. On update, an omitted field keeps its value. */
export type CheckoutRecoveryEmailSettings = {
    /**
     * Seconds to wait after the buyer last changed their email or phone before sending the
     * reminder. Must be a multiple of 60. Defaults to 3600. Format: int32. minimum: 900. maximum:
     * 86400. multipleOf: 60. Default: 3600.
     */
    "delay_seconds"?: number;
    /**
     * Whether Flint sends checkout reminders. Turning them on requires a business address on the
     * merchant, which the reminder prints; without one the update returns ACTION_NOT_ALLOWED with
     * reason configuration_required and the merchant reference.
     */
    "enabled"?: boolean;
};
/** Checkout reminder email settings. On update, an omitted field keeps its value. */
export type CheckoutRecoveryEmailSettingsRequestInput = CheckoutRecoveryEmailSettings;
/**
 * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
 * payment_return_url.
 */
export type CheckoutRedirects = {
    /**
     * Where the buyer goes when they leave checkout without paying. The session stays open until
     * it expires. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048
     * characters. Format: uri. maxLength: 2048.
     */
    "cancel_url"?: string;
    /**
     * Where Flint sends a buyer who opens the session after it expires. Without it, the buyer sees
     * Flint's expired-checkout page. Absolute HTTPS URL; test mode also accepts HTTP loopback
     * URLs. Up to 2,048 characters. Format: uri. maxLength: 2048.
     */
    "expired_url"?: string;
    /**
     * Where the buyer goes after paying. Flint adds checkout_session_id and order_id query
     * parameters, replacing any with those names. The redirect doesn't prove payment: confirm with
     * the order.paid webhook or by reading the session. Absolute HTTPS URL; test mode also accepts
     * HTTP loopback URLs. Up to 2,048 characters. Format: uri. maxLength: 2048.
     */
    "success_url"?: string;
};
/**
 * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
 * payment_return_url.
 */
export type CheckoutRedirectsRequestInput = {
    /**
     * Where the buyer goes when they leave checkout without paying. The session stays open until
     * it expires. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048
     * characters. Format: uri. minLength: 1. maxLength: 2048.
     */
    "cancel_url"?: string;
    /**
     * Where Flint sends a buyer who opens the session after it expires. Without it, the buyer sees
     * Flint's expired-checkout page. Absolute HTTPS URL; test mode also accepts HTTP loopback
     * URLs. Up to 2,048 characters. Format: uri. minLength: 1. maxLength: 2048.
     */
    "expired_url"?: string;
    /**
     * Where the buyer goes after paying. Flint adds checkout_session_id and order_id query
     * parameters, replacing any with those names. The redirect doesn't prove payment: confirm with
     * the order.paid webhook or by reading the session. Absolute HTTPS URL; test mode also accepts
     * HTTP loopback URLs. Up to 2,048 characters. Format: uri. minLength: 1. maxLength: 2048.
     */
    "success_url"?: string;
};
/**
 * Saved payment details settings for hosted checkout. On update, an omitted field keeps its value.
 */
export type CheckoutSavedPaymentDetailsSettingsRequestInput = {
    /**
     * Whether hosted checkout shows buyers an unchecked option to save the card they type. A card
     * is saved only when the buyer checks it and the payment succeeds, with usage on_session:
     * Flint charges it only in checkouts the buyer completes, never for subscriptions, automatic
     * invoices, or other charges without the buyer. Checkout never shows the option when customer
     * accounts are merchant hosted, or for invoice, subscription, and return checkouts.
     */
    "enabled"?: boolean;
};
/** A session in which a buyer completes an order's payment. */
export type CheckoutSession = {
    /** An attempt to pay an order. */
    "active_payment_attempt"?: OrderPaymentAttempt;
    /**
     * Contact the buyer entered in checkout before paying, saved with the session's checkout
     * credential. Separate from merchant-supplied prefill and customer_prefill from the customer
     * record. Omitted until the buyer saves or clears a field. When a checkout session payment
     * omits buyer_contact.email or buyer_contact.phone, Flint uses these values. Flint clears the
     * contact 30 days after the session ends, and when a customer linked to the session is
     * deleted. Buyer contact supplied with payment or saved during checkout.
     */
    "buyer_contact"?: CheckoutBuyerContact;
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Whether checkout offers the buyer the option to save the card they type for faster checkout
     * at this merchant. When true and save_payment_method_requires_verification is false, PayOrder
     * accepts save_payment_method: true for one newly collected card. False when the merchant
     * turned checkout.saved_payment_details off, customer accounts are merchant hosted, card is
     * not an available payment option, the checkout collects an invoice, a subscription, or a
     * return, or the checkout acts for no customer and Flint cannot email the buyer a verification
     * code. Returned only to the checkout credential; never in webhook payloads.
     */
    "can_save_payment_method"?: boolean;
    /**
     * Whether the buyer can save the card they type by giving a US or Canadian mobile phone number
     * with the payment, in save_payment_method_phone on POST /v1/orders/{order_id}/pay, and
     * confirming it with a texted code after paying. True while Flint can send texts and either
     * save_payment_method_requires_verification is true, so the number replaces confirming an
     * email before paying, or the checkout acts for the customer whose email the buyer confirmed
     * with this credential, so the number joins that customer's saved details once the buyer
     * confirms it. Returned only to the checkout credential; never in webhook payloads.
     */
    "can_save_payment_method_with_phone"?: boolean;
    "checkout_session_id": string;
    /** The note supplied when the checkout session was closed. */
    "closed_reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Custom text shown in checkout: an order summary message and a shipping address label. */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * Present only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
     * returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /**
     * The customer of the session's order. Omitted when the order has none. A checkout credential
     * issued for this session acts for this customer. Add expand=customer to include the customer.
     */
    "customer_id"?: string;
    /**
     * Contact and default addresses of the customer the checkout acts for, with the recipient name
     * on its default shipping address: the customer the merchant created the session for, or the
     * customer whose email the buyer confirmed in it. Present on GET and PATCH responses while the
     * session is open and acts for a customer. Separate from merchant-supplied prefill and
     * buyer_contact saved by the buyer. Returned only to the checkout credential; never in webhook
     * payloads. Details the buyer's checkout can prefill from the customer it acts for.
     */
    "customer_prefill"?: CheckoutCustomerPrefill;
    /**
     * Current delivery choices for Flint-owned pricing. External pricing reports
     * requires_explicit_quote; reading this field does not request a delivery quote. Omitted when
     * the session is not open, has no order, or Flint cannot read its delivery. The delivery
     * options Flint derived for a checkout as a buyer sees them: choice groups, input
     * requirements, and evaluation status.
     */
    "delivery"?: CheckoutDerivedDeliveryResource;
    /**
     * Immutable delivery method assignment captured when the checkout was created. [] (Value):
     * string.
     */
    "delivery_method_ids": Array<string>;
    /**
     * Immutable configuration lineage used to evaluate delivery quotes. [] (Value): {@link
     * CheckoutDeliveryPinnedDependency}. A delivery dependency pinned to a checkout, such as the
     * assigned method, eligibility, or pricing callback, with the revision it was pinned at.
     */
    "delivery_pinned_dependencies"?: Array<CheckoutDeliveryPinnedDependency>;
    /**
     * Whether the order has at least one remaining quote-resolved fulfillment choice that must be
     * selected before payment.
     */
    "delivery_selection_required": boolean;
    /** RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /**
     * The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
     * which take their deadline from the invoice. Format: int64.
     */
    "expires_in_seconds"?: number;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /**
     * Where the buyer completes a gift card challenge for this checkout. Returned on
     * single-session reads, session create and update responses, checkout launch results, and
     * customer verification confirmation results while the session is open and can show the
     * challenge. Omitted from lists, webhooks, expanded resources, and delivery selection results.
     * A URL to load in an iframe when applying a gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`.
     */
    "gift_card_challenge"?: CheckoutGiftCardChallenge;
    /**
     * Present only when `expand` includes `invoice`; `null` when expanded and there is no related
     * invoice. anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An invoice's summary fields,
     * including status, due date, and paid, outstanding, and refunded amounts, returned when the
     * invoice is expanded. anyOf[2] (Value): null.
     */
    "invoice"?: ((ExpandedInvoiceSummary) | (null));
    "invoice_id"?: string;
    /**
     * Whether this terminal session credential is temporarily restricted to recovering its owning
     * payment attempt.
     */
    "is_in_recovery": boolean;
    /**
     * Legal settings for a checkout: whether buyers must accept terms, and links to the terms,
     * refund policy, shipping policy, and contract.
     */
    "legal"?: LegalSettings;
    /**
     * The merchant's square icon, shown in browser tabs and compact headers. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other responses and
     * webhooks omit it. An image with its `url`, `width`, and `height`, and optional `alt` text.
     */
    "merchant_icon"?: Image;
    "merchant_id"?: string;
    /**
     * The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when the
     * merchant has one; other responses and webhooks omit it. An image with its `url`, `width`,
     * and `height`, and optional `alt` text.
     */
    "merchant_logo"?: Image;
    /**
     * The merchant's business name, which hosted checkout shows when `theme.title` is unset. Reads
     * `Merchant` when the merchant has not set a business name. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it.
     */
    "merchant_name"?: string;
    /**
     * How the buyer can reach the merchant for help: the support email, phone, and URL the
     * merchant set. Present on GET and PATCH responses when the merchant set at least one of them.
     * Show it where your checkout tells the buyer to contact the merchant, such as an expired or
     * closed checkout, or your receipt. Returned only to the checkout credential; never in webhook
     * payloads. The merchant's support contact. Each field is omitted when the merchant has not
     * set it.
     */
    "merchant_support"?: CheckoutMerchantSupport;
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Present only when `expand` includes `order`; `null` when expanded and there is no related
     * order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
     * status, payment and refund status, and pricing and settlement amounts, returned when the
     * order is expanded. anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    "order_id"?: string;
    /** Origin of the page that renders this embedded checkout. Omitted when not set. */
    "page_origin"?: string;
    /**
     * Guidance for collecting a payment source. Checkout-credential reads include it only while
     * the session is open. Returned only to the checkout credential; never in webhook payloads.
     * Client-side details for collecting payment from the buyer, such as the Stripe settings to
     * initialize Stripe.js.
     */
    "payment_collection"?: PaymentCollection;
    /**  [] (Value): string. */
    "payment_intent_ids"?: Array<string>;
    /**
     *  [] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields,
     * including amount, status, and capture method, returned when the payment intent is expanded.
     */
    "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
    /**
     * Present only when `expand` includes `payment_link`; `null` when expanded and there is no
     * related payment link. anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}. A payment link's
     * summary fields, including name, type, status, and URL, returned when the payment link is
     * expanded. anyOf[2] (Value): null.
     */
    "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
    "payment_link_id"?: string;
    /**
     * The current image of the payment link that opened this session. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other responses
     * and webhooks omit it. An image with its `url`, `width`, and `height`, and optional `alt`
     * text.
     */
    "payment_link_image"?: Image;
    /**
     * The card the buyer saved with this checkout's payment by giving a mobile phone number, and
     * whether they confirmed it. Present on GET and PATCH responses after a payment that paid the
     * order in full, or that was approved for the merchant to capture later, and saved a card this
     * way. A checkout whose payment is approved stays open until the capture. Returned only to the
     * checkout credential; never in webhook payloads. A card the buyer saved with the checkout's
     * payment by giving a mobile phone number. It works for nothing until the buyer confirms it
     * with a code: request one with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method.
     */
    "payment_method_save"?: CheckoutPaymentMethodSave;
    /**
     * Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * Configured payment options for merchant credentials; currently available payment options for
     * the checkout credential. Payment settings for a checkout: the enabled payment options and a
     * note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * Contact details and addresses to fill in for the buyer, who can change them. For a customer
     * with saved addresses, Flint fills in any address you leave out, and reads include it. With
     * quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's
     * tax location. Not changed by what the buyer types; for that, read buyer_contact.
     * customer_prefill is what the checkout credential reads from the customer record.
     */
    "prefill"?: CheckoutPrefill;
    /**
     * Named conditions that affect checkout completion. Follow each problem's remediation action
     * instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means
     * another payment for the order must finish before this checkout can complete. When Flint
     * cannot read the checkout's delivery, the read still succeeds and reports
     * delivery_unreadable; its remediation says whether reading the session again can succeed, and
     * its next action's reason_code names the error. [] (Value): {@link CheckoutProblemResource}.
     * A problem with a checkout session, such as a stale delivery selection, with its `code`,
     * whether it blocks completion, and remediation.
     */
    "problems": Array<CheckoutProblemResource>;
    /**
     * Promotion settings for a checkout: whether automatic promotions apply and whether the buyer
     * can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /** RFC3339 deadline for the restricted payment-attempt recovery window. Format: date-time. */
    "recovery_expires_at"?: string | null;
    /** Payment attempt that this checkout credential may recover while is_in_recovery is true. */
    "recovery_payment_attempt_id"?: string;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * Whether the buyer must confirm their email with a code before the checkout can save their
     * card or use their saved cards. True when can_save_payment_method is true and the checkout
     * acts for no customer for this credential: the merchant created it without one, and either
     * the buyer has not confirmed an email with this credential, or the customer whose email they
     * confirmed has since changed that email or been deleted. A credential other than the one a
     * confirmation returned, such as the hosted checkout link opened on another device, reads
     * true. Send the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the checkout
     * acts for a customer, and whenever can_save_payment_method is false. Returned only to the
     * checkout credential; never in webhook payloads.
     */
    "save_payment_method_requires_verification"?: boolean;
    /**
     * What save_payment_method keeps, present when can_save_payment_method is true: card, a card
     * the buyer types into checkout. Show the save option with that payment method only. A pay
     * request that sends save_payment_method: true with Apple Pay, Google Pay, a bank account, or
     * Affirm, through a confirmation token created with setup_future_usage none, still pays, and
     * its payment attempt's payment_method_save reports not_saved. The values can grow. Returned
     * only to the checkout credential; never in webhook payloads. [] enum: "card". [] (Value):
     * string. Value enum: "card".
     */
    "save_payment_method_types"?: Array<"card" | (string & {})>;
    /**
     * Guidance for collecting a payment method to save. Checkout-credential reads include it only
     * while the session is open. Returned only to the checkout credential; never in webhook
     * payloads. Client-side details for collecting payment from the buyer, such as the Stripe
     * settings to initialize Stripe.js.
     */
    "setup_collection"?: PaymentCollection;
    /**
     * Whether Flint's hosted pages show the Powered by Flint mark for this merchant. `false` when
     * the merchant's agreement with Flint removes it. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it.
     */
    "show_flint_mark"?: boolean;
    /** Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated". */
    "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
    "subscription_plan_id"?: string;
    /**
     * Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order
     * was created, so later plan changes do not alter them. Absent when the checkout starts no
     * subscription. Renewal terms a subscription checkout commits the buyer to. Frozen when the
     * session's order was created, so later plan changes do not alter them.
     */
    "subscription_terms"?: CheckoutSubscriptionTerms;
    "superseding_checkout_session_id"?: string;
    /** Value enum: "hosted", "embedded". */
    "surface": "hosted" | "embedded" | (string & {});
    /**
     * The session's tax settings. Omitted when the session sets none. Tax settings of a checkout
     * session: whether it collects tax and any tax location the merchant fixed.
     */
    "tax"?: CheckoutSessionTax;
    /**
     * Why the session ended. The checkout credential can still read its own closed or expired
     * session; every other call returns CHECKOUT_SESSION_NOT_OPEN. order_paid_elsewhere applies
     * only to invalidated sessions when payment succeeds or partially succeeds outside the
     * session. order_mutated applies when an edit closes or completes its order, or ends an
     * invoice, return-resolution, or subscription-plan session. Other merchant edits keep hosted
     * and embedded sessions open. A session already past expires_at ends with expired before the
     * edit is applied. Value enum: "payment_succeeded", "payment_partially_succeeded", "expired",
     * "closed_by_merchant", "order_mutated", "superseded", "order_paid_elsewhere",
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
     * The theme checkout renders with: your branding settings, with the session's `title`,
     * `primary_color`, and `accent_color` over them. A session sets only those three; the other
     * fields come from branding settings. Omitted when neither sets a value. Colors, corner
     * radius, font family, and title that style a checkout, taken from the session or link theme
     * or the merchant's branding settings.
     */
    "theme"?: CheckoutTheme;
    /**
     * Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options,
     * the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfig;
    /**
     * What the session collects payment for, fixed at creation. Value enum: "order", "quick_pay",
     * "subscription_plan", "invoice", "payment_link".
     */
    "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Hosted checkout URL that carries a one-time launch credential. Send the buyer here to pay.
     * Present only for hosted sessions read with a merchant credential that can manage checkout
     * sessions. Launch results include it for hosted sessions: create, payment-link resolve, and
     * invoice and return-resolution checkout. Omitted for embedded sessions.
     */
    "url"?: string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
