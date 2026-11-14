import type { ReadinessAction, ReadinessRequirements } from './types-52.js';
import type { MoneyValue, MoneyValueInput } from './types-39.js';
import type { PlatformFeeRequest, PlatformFeeRequestInput } from './types-49.js';
import type { SplitReversalRequest } from './types-60.js';
import type { GiftCard } from './types-26.js';
import type { GiftCardTransaction } from './types-27.js';
import type { ResponseMeta } from './types-54.js';
import type { InputValue } from '../runtime.js';
import type { CreateCategoryRequestInput } from './types-7.js';
import type { DisputesAcceptParams, ErrorRemediation } from './types-24.js';
import type { UpdateCategoryRequestInput } from './types-66.js';
import type { MetadataMap, MerchantWebhookEnvelope } from './types-38.js';
import type { PartnerWebhookEnvelope } from './types-44.js';
import type { SubscriptionQuantityChangeLineItemRequest, SubscriptionQuantityChangeLineItemRequestInput } from './types-63.js';
import type { SubscriptionPlanChangeLineItemRequest, SubscriptionPlanChangeLineItemRequestInput } from './types-62.js';
import type { Address, AddressRequest, AddressRequestInput } from './types-0.js';
import type { DeliveryInputRequirement } from './types-17.js';
import type { DeliveryMerchantDiagnostic } from './types-18.js';
import type { DeliveryQuoteChoiceGroupResource } from './types-20.js';
import type { OrderLineItemTax, OrderLineItemTaxRequestInput } from './types-41.js';
/** Cancellation timing and the optional reason and comment recorded with the request. */
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
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Who asked to cancel: buyer, merchant, or integration. Defaults to merchant. Attribution
     * only; this does not apply the store's buyer limits. To enforce them, use a customer session
     * on POST /v1/me/subscriptions/{subscription_id}/cancel. Recorded in
     * cancellation_details.requested_by and cancellation_reason. Default: "merchant". Value enum:
     * "buyer", "merchant", "integration".
     */
    "initiated_by"?: "buyer" | "merchant" | "integration" | (string & {});
};
/** Cancellation timing and the optional reason and comment recorded with the request. */
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
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Who asked to cancel: buyer, merchant, or integration. Defaults to merchant. Attribution
     * only; this does not apply the store's buyer limits. To enforce them, use a customer session
     * on POST /v1/me/subscriptions/{subscription_id}/cancel. Recorded in
     * cancellation_details.requested_by and cancellation_reason. Default: "merchant". Value enum:
     * "buyer", "merchant", "integration".
     */
    "initiated_by"?: "buyer" | "merchant" | "integration";
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
     * Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for
     * onboarding_not_started, requirements_due, requirements_past_due and pending_verification,
     * and platform_review for Flint's own review. `null` when no reason applies. Value enum:
     * "provisioning", "onboarding_not_started", "requirements_due", "requirements_past_due",
     * "pending_verification", "account_rejected", "disabled_by_platform_policy",
     * "billing_suspended", "platform_review", "processing_not_enabled",
     * "platform_funding_unavailable", "tax_category_required", "service_unavailable",
     * "payment_option_access_not_provisioned", "payment_option_activation_pending",
     * "payment_option_not_in_plan", "payment_option_not_available", "capability_not_active",
     * "other".
     */
    "status_reason"?: "provisioning"
        | "onboarding_not_started"
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
     * most capturable_money. Affirm payments can only be captured in full. Can't be combined with
     * final_amount_money or tip_money. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * The bill without the tip. The capture collects final_amount_money plus tip_money in one
     * charge. With only tip_money, the bill is the authorization minus the tip it carries; when
     * the authorization is all tip, final_amount_money is required. Must be greater than zero, in
     * the payment's currency. On an order's payment, it is at most the authorization minus the tip
     * it carries, so the order's items, charges and tax can't grow; above it LIMIT_EXCEEDED with
     * maximum_money on final_amount_money. The order releases the difference. Not accepted on
     * Affirm or ACH debit payments. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "final_amount_money"?: MoneyValue;
    /**
     * A platform fee your partner app charges on this payment, set when you know the final bill
     * and tip. Only the partner app install token that created the payment can send it; from any
     * other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. It replaces the fee
     * the payment was created with, or adds one if it had none, after the same consent, capability
     * and currency checks as at create: amount_money must be above zero and in the payment's
     * currency, otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money. Without
     * an approved cap in this currency it is ACTION_NOT_ALLOWED with reason
     * platform_fee_consent_required; in live mode the partner app's platform_fees capability must
     * be active. A fee that already ended is ACTION_NOT_ALLOWED with reason terminal_status. The
     * cap and Flint's own fees apply to the captured total, so Flint lowers the fee rather than
     * refusing the capture. A payment that belongs to an order can't take it at capture:
     * INVALID_REQUEST with NOT_ALLOWED on platform_fee. Part of the request fingerprint. See
     * [Platform fees](/docs/guides/platform-fees). A platform fee the partner app charges on the
     * payment, beside Flint's fees. The installed merchant pays it, and Flint takes no share of
     * it.
     */
    "platform_fee"?: PlatformFeeRequest;
    /**
     * Final split amounts for this capture. List every split that isn't canceled, once each, with
     * an amount above zero in the payment's currency. Omit splits to keep the stored amounts. The
     * total must fit after Flint's fees and one minor unit for the collecting merchant; otherwise
     * INVALID_REQUEST with INVALID_VALUE on splits and maximum_money. An amount_money too small
     * for the stored splits is LIMIT_EXCEEDED with minimum_money. A payment created without splits
     * can't gain them. Part of the idempotency fingerprint. minItems: 1. maxItems: 25. [] (Value):
     * {@link SplitReversalRequest}. The final amount of an existing split at capture.
     */
    "splits"?: Array<SplitReversalRequest>;
    /**
     * The tip, replacing the tip the authorization carries. Zero captures without a tip. With only
     * final_amount_money, the tip is the one the authorization carries, or zero. At most the
     * larger of 1,000.00 USD and final_amount_money; on an order's payment, the larger of 1,000.00
     * USD and the payment's share of the order's subtotal after discounts. Above it
     * INVALID_REQUEST with INVALID_VALUE on tip_money and maximum_money. On an order's payment,
     * keeping or lowering the tip the authorization carries is never refused, and the tip becomes
     * this payment's part of the order's tip. A payment that doesn't carry part of the order's
     * requested tip can't add a tip above zero beside it: INVALID_REQUEST with NOT_ALLOWED on
     * tip_money. On an order, the bill can't grow, so without overcapture a tip fits only within
     * what the bill leaves of the hold. The total is at most overcapture.maximum_capturable_money
     * when overcapture is available, else capturable_money; above it LIMIT_EXCEEDED with
     * maximum_money. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "tip_money"?: MoneyValue;
};
/** The request body for: Capture payment intent. */
export type CapturePaymentIntentRequestInput = {
    /**
     * Amount to capture, in the authorization's currency. Omit it to capture all of
     * capturable_money. A smaller amount is a partial capture: Flint releases the rest in the same
     * request, and the payment intent can't be captured again. Must be greater than zero and at
     * most capturable_money. Affirm payments can only be captured in full. Can't be combined with
     * final_amount_money or tip_money. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * The bill without the tip. The capture collects final_amount_money plus tip_money in one
     * charge. With only tip_money, the bill is the authorization minus the tip it carries; when
     * the authorization is all tip, final_amount_money is required. Must be greater than zero, in
     * the payment's currency. On an order's payment, it is at most the authorization minus the tip
     * it carries, so the order's items, charges and tax can't grow; above it LIMIT_EXCEEDED with
     * maximum_money on final_amount_money. The order releases the difference. Not accepted on
     * Affirm or ACH debit payments. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "final_amount_money"?: MoneyValueInput;
    /**
     * A platform fee your partner app charges on this payment, set when you know the final bill
     * and tip. Only the partner app install token that created the payment can send it; from any
     * other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. It replaces the fee
     * the payment was created with, or adds one if it had none, after the same consent, capability
     * and currency checks as at create: amount_money must be above zero and in the payment's
     * currency, otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money. Without
     * an approved cap in this currency it is ACTION_NOT_ALLOWED with reason
     * platform_fee_consent_required; in live mode the partner app's platform_fees capability must
     * be active. A fee that already ended is ACTION_NOT_ALLOWED with reason terminal_status. The
     * cap and Flint's own fees apply to the captured total, so Flint lowers the fee rather than
     * refusing the capture. A payment that belongs to an order can't take it at capture:
     * INVALID_REQUEST with NOT_ALLOWED on platform_fee. Part of the request fingerprint. See
     * [Platform fees](/docs/guides/platform-fees). A platform fee the partner app charges on the
     * payment, beside Flint's fees. The installed merchant pays it, and Flint takes no share of
     * it.
     */
    "platform_fee"?: PlatformFeeRequestInput;
    /**
     * Final split amounts for this capture. List every split that isn't canceled, once each, with
     * an amount above zero in the payment's currency. Omit splits to keep the stored amounts. The
     * total must fit after Flint's fees and one minor unit for the collecting merchant; otherwise
     * INVALID_REQUEST with INVALID_VALUE on splits and maximum_money. An amount_money too small
     * for the stored splits is LIMIT_EXCEEDED with minimum_money. A payment created without splits
     * can't gain them. Part of the idempotency fingerprint. minItems: 1. maxItems: 25. [] (Value):
     * {@link CapturePaymentSplitRequestInput}. The final amount of an existing split at capture.
     */
    "splits"?: Array<CapturePaymentSplitRequestInput>;
    /**
     * The tip, replacing the tip the authorization carries. Zero captures without a tip. With only
     * final_amount_money, the tip is the one the authorization carries, or zero. At most the
     * larger of 1,000.00 USD and final_amount_money; on an order's payment, the larger of 1,000.00
     * USD and the payment's share of the order's subtotal after discounts. Above it
     * INVALID_REQUEST with INVALID_VALUE on tip_money and maximum_money. On an order's payment,
     * keeping or lowering the tip the authorization carries is never refused, and the tip becomes
     * this payment's part of the order's tip. A payment that doesn't carry part of the order's
     * requested tip can't add a tip above zero beside it: INVALID_REQUEST with NOT_ALLOWED on
     * tip_money. On an order, the bill can't grow, so without overcapture a tip fits only within
     * what the bill leaves of the hold. The total is at most overcapture.maximum_capturable_money
     * when overcapture is available, else capturable_money; above it LIMIT_EXCEEDED with
     * maximum_money. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "tip_money"?: MoneyValueInput;
};
/** The final amount of an existing split at capture. */
export type CapturePaymentSplitRequestInput = {
    /**
     * Final split amount above zero, in the payment's currency. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. amount (Required): integer string. Use
     * an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0. currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /**
     * Existing split of this payment. Include every split that isn't canceled, once each.
     * minLength: 1. pattern: ^psplit_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "psplit_01KEZF7C00Y5HA4Z8D4KRA07K8".
     */
    "payment_split_id": string;
};
/**
 * Card details on a payment method: brand, expiration month and year, last four digits, and the
 * wallet when one was used.
 */
export type CardDetails = {
    /**
     * The card network. Value enum: "visa", "mastercard", "amex", "discover", "diners", "jcb",
     * "unionpay".
     */
    "brand": "visa" | "mastercard" | "amex" | "discover" | "diners" | "jcb" | "unionpay" | (string & {});
    /** Month the card expires, from 1 to 12. Format: int32. */
    "exp_month": number;
    /** Four-digit year the card expires. Format: int32. */
    "exp_year": number;
    /** Last four digits of the card number. */
    "last4": string;
    /**
     * The wallet the card came from. Absent for a card entered directly. Value enum: "apple_pay",
     * "google_pay".
     */
    "wallet"?: "apple_pay" | "google_pay" | (string & {});
};
/** The request body for: Record a cash-out. */
export type CashOutGiftCardRequest = {
    /**
     * Amount of cash you paid the buyer outside Flint, taken off the gift card's balance. Above
     * zero, in the card's currency, and not more than the card's unreserved value. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
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
    /**
     * Amount of cash you paid the buyer outside Flint, taken off the gift card's balance. Above
     * zero, in the card's currency, and not more than the card's unreserved value. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
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
     * The gift card after the cash-out. Merchant-issued purchased gift card. Posted balance
     * includes reserved value; available value is balance minus reservations. Frozen value remains
     * part of outstanding liability. Gift cards are independent resources and cannot be
     * transferred across merchants or currencies.
     */
    "gift_card": GiftCard;
    /**
     * The transactions the cash-out posted to the card. [] (Value): {@link GiftCardTransaction}.
     * Immutable posted financial movement with signed amount, per-card sequence, merchant sequence
     * and balance snapshots. Corrections create new transactions.
     */
    "gift_card_transactions": Array<GiftCardTransaction>;
};
/** A response containing `CashOutGiftCardResult` data. */
export type CashOutGiftCardResultResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The result of recording
     * a gift card cash-out: the updated gift card and the transactions it created.
     */
    "data": CashOutGiftCardResult;
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
/** The source of a catalog variant line's selected net unit price. */
export type CatalogPricing = {
    /** Minimum quantity of the applied break. Null when the base price applies. Format: int64. */
    "minimum_quantity": number | null;
    /**
     * Price list providing the selected schedule. Null when the variant's default schedule
     * applies. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     */
    "price_list_id": string | null;
    /**
     * Source of the selected schedule. New source values may be added. Value enum: "variant",
     * "price_list".
     */
    "source": "variant" | "price_list" | (string & {});
};
export type CategoriesCreateParams = (InputValue<CreateCategoryRequestInput>)
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
export type CategoriesDeleteParams = {
    /**
     * Optional resource version last read by the caller. Format: uint64. minimum: 1. maximum:
     * 9007199254740991.
     */
    "expected_version"?: InputValue<number>;
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
export type CategoriesGetParams = DisputesAcceptParams;
export type CategoriesListParams = {
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
     * Exact handle match. Handles are lowercase, so matching is case-sensitive with no
     * normalization; a value that isn't a valid handle returns 400 INVALID_REQUEST. maxLength:
     * 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "handle"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
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
export type CategoriesUpdateParams = (InputValue<UpdateCategoryRequestInput>)
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
/** A catalog grouping used to organize items. */
export type Category = {
    /** Number of bundles currently assigned to the category. Format: int64. */
    "assigned_bundle_count": number;
    /** Number of products currently assigned to the category. Format: int64. */
    "assigned_product_count": number;
    /** Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". */
    "category_id": string;
    /**
     * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /** Description of the category. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** Immutable handle used to assign this category to products and bundles. */
    "handle": string;
    /**
     * Identifier of the merchant that owns this resource. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id": string;
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
    /**
     * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
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
        "object": {
            "assigned_bundle_count": number;
            "assigned_product_count": number;
            "category_id": string;
            "created_at": string;
            "description"?: string;
            "external_reference_id"?: string;
            "handle": string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "deleted" | (string & {});
            "targeting_reference_count": number;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "category.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "assigned_bundle_count": number;
            "assigned_product_count": number;
            "category_id": string;
            "created_at": string;
            "description"?: string;
            "external_reference_id"?: string;
            "handle": string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "deleted" | (string & {});
            "targeting_reference_count": number;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "category.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.assigned_bundle_count (Required): integer. Number of bundles
     * currently assigned to the category. Format: int64. object.assigned_product_count (Required):
     * integer. Number of products currently assigned to the category. Format: int64.
     * object.category_id (Required): string. Stable identifier of the category. Example:
     * "ctg_01KEZF7C001T4WWBPVGWRZD88Q". object.created_at (Required): string. When this resource
     * was created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.description (Optional): string. Description of the category.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.handle (Required):
     * string. Immutable handle used to assign this category to products and bundles.
     * object.merchant_id (Required): string. Identifier of the merchant that owns this resource.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Category name shown to buyers.
     * object.status (Required): string. Category lifecycle status. Active categories can be
     * assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
     * object.targeting_reference_count (Required): integer. Number of promotions, return reasons
     * and return policy versions that reference this category. Deleting the category is refused
     * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count`
     * is above zero. Format: int64. object.updated_at (Required): string. When this resource last
     * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Persisted owned-state version. Clock-based availability
     * and expanded resources do not advance this counter. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * assigned_bundle_count (Required): integer. Number of bundles currently assigned to the
         * category. Format: int64. assigned_product_count (Required): integer. Number of products
         * currently assigned to the category. Format: int64. category_id (Required): string.
         * Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". created_at
         * (Required): string. When this resource was created, as an RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". description (Optional): string. Description
         * of the category. external_reference_id (Optional): string. Caller-owned identifier for
         * this resource in an external system. maxLength: 255. Example: "warehouse-1842". handle
         * (Required): string. Immutable handle used to assign this category to products and
         * bundles. merchant_id (Required): string. Identifier of the merchant that owns this
         * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
         * stored on a resource. Keys starting with flint_ are reserved for Flint and are not
         * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
         * before those limits may not satisfy them. name (Required): string. Category name shown
         * to buyers. status (Required): string. Category lifecycle status. Active categories can
         * be assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
         * targeting_reference_count (Required): integer. Number of promotions, return reasons and
         * return policy versions that reference this category. Deleting the category is refused
         * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or
         * `assigned_bundle_count` is above zero. Format: int64. updated_at (Required): string.
         * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Persisted owned-state version.
         * Clock-based availability and expanded resources do not advance this counter. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /** Number of bundles currently assigned to the category. Format: int64. */
            "assigned_bundle_count": number;
            /** Number of products currently assigned to the category. Format: int64. */
            "assigned_product_count": number;
            /** Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". */
            "category_id": string;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /** Description of the category. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Immutable handle used to assign this category to products and bundles. */
            "handle": string;
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Category name shown to buyers. */
            "name": string;
            /**
             * Category lifecycle status. Active categories can be assigned; deleted is returned
             * only by DELETE. Value enum: "active", "deleted".
             */
            "status": "active" | "deleted" | (string & {});
            /**
             * Number of promotions, return reasons and return policy versions that reference this
             * category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or
             * `assigned_product_count` or `assigned_bundle_count` is above zero. Format: int64.
             */
            "targeting_reference_count": number;
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted owned-state version. Clock-based availability and expanded resources do
             * not advance this counter. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "category.created". */
    "event_type"?: "category.created";
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
 * The `category.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CategoryCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.assigned_bundle_count (Required): integer. Number of bundles
     * currently assigned to the category. Format: int64. object.assigned_product_count (Required):
     * integer. Number of products currently assigned to the category. Format: int64.
     * object.category_id (Required): string. Stable identifier of the category. Example:
     * "ctg_01KEZF7C001T4WWBPVGWRZD88Q". object.created_at (Required): string. When this resource
     * was created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.description (Optional): string. Description of the category.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.handle (Required):
     * string. Immutable handle used to assign this category to products and bundles.
     * object.merchant_id (Required): string. Identifier of the merchant that owns this resource.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Category name shown to buyers.
     * object.status (Required): string. Category lifecycle status. Active categories can be
     * assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
     * object.targeting_reference_count (Required): integer. Number of promotions, return reasons
     * and return policy versions that reference this category. Deleting the category is refused
     * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count`
     * is above zero. Format: int64. object.updated_at (Required): string. When this resource last
     * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Persisted owned-state version. Clock-based availability
     * and expanded resources do not advance this counter. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * assigned_bundle_count (Required): integer. Number of bundles currently assigned to the
         * category. Format: int64. assigned_product_count (Required): integer. Number of products
         * currently assigned to the category. Format: int64. category_id (Required): string.
         * Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". created_at
         * (Required): string. When this resource was created, as an RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". description (Optional): string. Description
         * of the category. external_reference_id (Optional): string. Caller-owned identifier for
         * this resource in an external system. maxLength: 255. Example: "warehouse-1842". handle
         * (Required): string. Immutable handle used to assign this category to products and
         * bundles. merchant_id (Required): string. Identifier of the merchant that owns this
         * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
         * stored on a resource. Keys starting with flint_ are reserved for Flint and are not
         * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
         * before those limits may not satisfy them. name (Required): string. Category name shown
         * to buyers. status (Required): string. Category lifecycle status. Active categories can
         * be assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
         * targeting_reference_count (Required): integer. Number of promotions, return reasons and
         * return policy versions that reference this category. Deleting the category is refused
         * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or
         * `assigned_bundle_count` is above zero. Format: int64. updated_at (Required): string.
         * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Persisted owned-state version.
         * Clock-based availability and expanded resources do not advance this counter. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /** Number of bundles currently assigned to the category. Format: int64. */
            "assigned_bundle_count": number;
            /** Number of products currently assigned to the category. Format: int64. */
            "assigned_product_count": number;
            /** Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". */
            "category_id": string;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /** Description of the category. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Immutable handle used to assign this category to products and bundles. */
            "handle": string;
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Category name shown to buyers. */
            "name": string;
            /**
             * Category lifecycle status. Active categories can be assigned; deleted is returned
             * only by DELETE. Value enum: "active", "deleted".
             */
            "status": "active" | "deleted" | (string & {});
            /**
             * Number of promotions, return reasons and return policy versions that reference this
             * category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or
             * `assigned_product_count` or `assigned_bundle_count` is above zero. Format: int64.
             */
            "targeting_reference_count": number;
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted owned-state version. Clock-based availability and expanded resources do
             * not advance this counter. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "category.created". */
    "event_type"?: "category.created";
});
export type CategoryDeletedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "assigned_bundle_count": number;
            "assigned_product_count": number;
            "category_id": string;
            "created_at": string;
            "description"?: string;
            "external_reference_id"?: string;
            "handle": string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "deleted" | (string & {});
            "targeting_reference_count": number;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "category.deleted";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "assigned_bundle_count": number;
            "assigned_product_count": number;
            "category_id": string;
            "created_at": string;
            "description"?: string;
            "external_reference_id"?: string;
            "handle": string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "deleted" | (string & {});
            "targeting_reference_count": number;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "category.deleted";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.assigned_bundle_count (Required): integer. Number of bundles
     * currently assigned to the category. Format: int64. object.assigned_product_count (Required):
     * integer. Number of products currently assigned to the category. Format: int64.
     * object.category_id (Required): string. Stable identifier of the category. Example:
     * "ctg_01KEZF7C001T4WWBPVGWRZD88Q". object.created_at (Required): string. When this resource
     * was created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.description (Optional): string. Description of the category.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.handle (Required):
     * string. Immutable handle used to assign this category to products and bundles.
     * object.merchant_id (Required): string. Identifier of the merchant that owns this resource.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Category name shown to buyers.
     * object.status (Required): string. Category lifecycle status. Active categories can be
     * assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
     * object.targeting_reference_count (Required): integer. Number of promotions, return reasons
     * and return policy versions that reference this category. Deleting the category is refused
     * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count`
     * is above zero. Format: int64. object.updated_at (Required): string. When this resource last
     * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Persisted owned-state version. Clock-based availability
     * and expanded resources do not advance this counter. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * assigned_bundle_count (Required): integer. Number of bundles currently assigned to the
         * category. Format: int64. assigned_product_count (Required): integer. Number of products
         * currently assigned to the category. Format: int64. category_id (Required): string.
         * Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". created_at
         * (Required): string. When this resource was created, as an RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". description (Optional): string. Description
         * of the category. external_reference_id (Optional): string. Caller-owned identifier for
         * this resource in an external system. maxLength: 255. Example: "warehouse-1842". handle
         * (Required): string. Immutable handle used to assign this category to products and
         * bundles. merchant_id (Required): string. Identifier of the merchant that owns this
         * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
         * stored on a resource. Keys starting with flint_ are reserved for Flint and are not
         * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
         * before those limits may not satisfy them. name (Required): string. Category name shown
         * to buyers. status (Required): string. Category lifecycle status. Active categories can
         * be assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
         * targeting_reference_count (Required): integer. Number of promotions, return reasons and
         * return policy versions that reference this category. Deleting the category is refused
         * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or
         * `assigned_bundle_count` is above zero. Format: int64. updated_at (Required): string.
         * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Persisted owned-state version.
         * Clock-based availability and expanded resources do not advance this counter. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /** Number of bundles currently assigned to the category. Format: int64. */
            "assigned_bundle_count": number;
            /** Number of products currently assigned to the category. Format: int64. */
            "assigned_product_count": number;
            /** Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". */
            "category_id": string;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /** Description of the category. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Immutable handle used to assign this category to products and bundles. */
            "handle": string;
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Category name shown to buyers. */
            "name": string;
            /**
             * Category lifecycle status. Active categories can be assigned; deleted is returned
             * only by DELETE. Value enum: "active", "deleted".
             */
            "status": "active" | "deleted" | (string & {});
            /**
             * Number of promotions, return reasons and return policy versions that reference this
             * category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or
             * `assigned_product_count` or `assigned_bundle_count` is above zero. Format: int64.
             */
            "targeting_reference_count": number;
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted owned-state version. Clock-based availability and expanded resources do
             * not advance this counter. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "category.deleted". */
    "event_type"?: "category.deleted";
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
 * The `category.deleted` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CategoryDeletedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.assigned_bundle_count (Required): integer. Number of bundles
     * currently assigned to the category. Format: int64. object.assigned_product_count (Required):
     * integer. Number of products currently assigned to the category. Format: int64.
     * object.category_id (Required): string. Stable identifier of the category. Example:
     * "ctg_01KEZF7C001T4WWBPVGWRZD88Q". object.created_at (Required): string. When this resource
     * was created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.description (Optional): string. Description of the category.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.handle (Required):
     * string. Immutable handle used to assign this category to products and bundles.
     * object.merchant_id (Required): string. Identifier of the merchant that owns this resource.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Category name shown to buyers.
     * object.status (Required): string. Category lifecycle status. Active categories can be
     * assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
     * object.targeting_reference_count (Required): integer. Number of promotions, return reasons
     * and return policy versions that reference this category. Deleting the category is refused
     * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count`
     * is above zero. Format: int64. object.updated_at (Required): string. When this resource last
     * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Persisted owned-state version. Clock-based availability
     * and expanded resources do not advance this counter. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * assigned_bundle_count (Required): integer. Number of bundles currently assigned to the
         * category. Format: int64. assigned_product_count (Required): integer. Number of products
         * currently assigned to the category. Format: int64. category_id (Required): string.
         * Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". created_at
         * (Required): string. When this resource was created, as an RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". description (Optional): string. Description
         * of the category. external_reference_id (Optional): string. Caller-owned identifier for
         * this resource in an external system. maxLength: 255. Example: "warehouse-1842". handle
         * (Required): string. Immutable handle used to assign this category to products and
         * bundles. merchant_id (Required): string. Identifier of the merchant that owns this
         * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
         * stored on a resource. Keys starting with flint_ are reserved for Flint and are not
         * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
         * before those limits may not satisfy them. name (Required): string. Category name shown
         * to buyers. status (Required): string. Category lifecycle status. Active categories can
         * be assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
         * targeting_reference_count (Required): integer. Number of promotions, return reasons and
         * return policy versions that reference this category. Deleting the category is refused
         * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or
         * `assigned_bundle_count` is above zero. Format: int64. updated_at (Required): string.
         * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Persisted owned-state version.
         * Clock-based availability and expanded resources do not advance this counter. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /** Number of bundles currently assigned to the category. Format: int64. */
            "assigned_bundle_count": number;
            /** Number of products currently assigned to the category. Format: int64. */
            "assigned_product_count": number;
            /** Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". */
            "category_id": string;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /** Description of the category. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Immutable handle used to assign this category to products and bundles. */
            "handle": string;
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Category name shown to buyers. */
            "name": string;
            /**
             * Category lifecycle status. Active categories can be assigned; deleted is returned
             * only by DELETE. Value enum: "active", "deleted".
             */
            "status": "active" | "deleted" | (string & {});
            /**
             * Number of promotions, return reasons and return policy versions that reference this
             * category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or
             * `assigned_product_count` or `assigned_bundle_count` is above zero. Format: int64.
             */
            "targeting_reference_count": number;
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted owned-state version. Clock-based availability and expanded resources do
             * not advance this counter. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
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
    /** Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". */
    "category_id": string;
    /**
     * Immutable handle of the referenced category. Read the category resource for its current
     * name.
     */
    "handle": string;
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
        "object": {
            "assigned_bundle_count": number;
            "assigned_product_count": number;
            "category_id": string;
            "created_at": string;
            "description"?: string;
            "external_reference_id"?: string;
            "handle": string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "deleted" | (string & {});
            "targeting_reference_count": number;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Category>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "category.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "assigned_bundle_count": number;
            "assigned_product_count": number;
            "category_id": string;
            "created_at": string;
            "description"?: string;
            "external_reference_id"?: string;
            "handle": string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "deleted" | (string & {});
            "targeting_reference_count": number;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Category>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "category.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.assigned_bundle_count (Required): integer. Number of bundles
     * currently assigned to the category. Format: int64. object.assigned_product_count (Required):
     * integer. Number of products currently assigned to the category. Format: int64.
     * object.category_id (Required): string. Stable identifier of the category. Example:
     * "ctg_01KEZF7C001T4WWBPVGWRZD88Q". object.created_at (Required): string. When this resource
     * was created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.description (Optional): string. Description of the category.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.handle (Required):
     * string. Immutable handle used to assign this category to products and bundles.
     * object.merchant_id (Required): string. Identifier of the merchant that owns this resource.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Category name shown to buyers.
     * object.status (Required): string. Category lifecycle status. Active categories can be
     * assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
     * object.targeting_reference_count (Required): integer. Number of promotions, return reasons
     * and return policy versions that reference this category. Deleting the category is refused
     * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count`
     * is above zero. Format: int64. object.updated_at (Required): string. When this resource last
     * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Persisted owned-state version. Clock-based availability
     * and expanded resources do not advance this counter. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * assigned_bundle_count (Required): integer. Number of bundles currently assigned to the
         * category. Format: int64. assigned_product_count (Required): integer. Number of products
         * currently assigned to the category. Format: int64. category_id (Required): string.
         * Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". created_at
         * (Required): string. When this resource was created, as an RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". description (Optional): string. Description
         * of the category. external_reference_id (Optional): string. Caller-owned identifier for
         * this resource in an external system. maxLength: 255. Example: "warehouse-1842". handle
         * (Required): string. Immutable handle used to assign this category to products and
         * bundles. merchant_id (Required): string. Identifier of the merchant that owns this
         * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
         * stored on a resource. Keys starting with flint_ are reserved for Flint and are not
         * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
         * before those limits may not satisfy them. name (Required): string. Category name shown
         * to buyers. status (Required): string. Category lifecycle status. Active categories can
         * be assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
         * targeting_reference_count (Required): integer. Number of promotions, return reasons and
         * return policy versions that reference this category. Deleting the category is refused
         * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or
         * `assigned_bundle_count` is above zero. Format: int64. updated_at (Required): string.
         * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Persisted owned-state version.
         * Clock-based availability and expanded resources do not advance this counter. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /** Number of bundles currently assigned to the category. Format: int64. */
            "assigned_bundle_count": number;
            /** Number of products currently assigned to the category. Format: int64. */
            "assigned_product_count": number;
            /** Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". */
            "category_id": string;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /** Description of the category. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Immutable handle used to assign this category to products and bundles. */
            "handle": string;
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Category name shown to buyers. */
            "name": string;
            /**
             * Category lifecycle status. Active categories can be assigned; deleted is returned
             * only by DELETE. Value enum: "active", "deleted".
             */
            "status": "active" | "deleted" | (string & {});
            /**
             * Number of promotions, return reasons and return policy versions that reference this
             * category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or
             * `assigned_product_count` or `assigned_bundle_count` is above zero. Format: int64.
             */
            "targeting_reference_count": number;
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted owned-state version. Clock-based availability and expanded resources do
             * not advance this counter. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Category>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "category.updated". */
    "event_type"?: "category.updated";
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
 * The `category.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CategoryUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.assigned_bundle_count (Required): integer. Number of bundles
     * currently assigned to the category. Format: int64. object.assigned_product_count (Required):
     * integer. Number of products currently assigned to the category. Format: int64.
     * object.category_id (Required): string. Stable identifier of the category. Example:
     * "ctg_01KEZF7C001T4WWBPVGWRZD88Q". object.created_at (Required): string. When this resource
     * was created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.description (Optional): string. Description of the category.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.handle (Required):
     * string. Immutable handle used to assign this category to products and bundles.
     * object.merchant_id (Required): string. Identifier of the merchant that owns this resource.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Category name shown to buyers.
     * object.status (Required): string. Category lifecycle status. Active categories can be
     * assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
     * object.targeting_reference_count (Required): integer. Number of promotions, return reasons
     * and return policy versions that reference this category. Deleting the category is refused
     * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count`
     * is above zero. Format: int64. object.updated_at (Required): string. When this resource last
     * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Persisted owned-state version. Clock-based availability
     * and expanded resources do not advance this counter. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * assigned_bundle_count (Required): integer. Number of bundles currently assigned to the
         * category. Format: int64. assigned_product_count (Required): integer. Number of products
         * currently assigned to the category. Format: int64. category_id (Required): string.
         * Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". created_at
         * (Required): string. When this resource was created, as an RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". description (Optional): string. Description
         * of the category. external_reference_id (Optional): string. Caller-owned identifier for
         * this resource in an external system. maxLength: 255. Example: "warehouse-1842". handle
         * (Required): string. Immutable handle used to assign this category to products and
         * bundles. merchant_id (Required): string. Identifier of the merchant that owns this
         * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
         * stored on a resource. Keys starting with flint_ are reserved for Flint and are not
         * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
         * before those limits may not satisfy them. name (Required): string. Category name shown
         * to buyers. status (Required): string. Category lifecycle status. Active categories can
         * be assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
         * targeting_reference_count (Required): integer. Number of promotions, return reasons and
         * return policy versions that reference this category. Deleting the category is refused
         * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or
         * `assigned_bundle_count` is above zero. Format: int64. updated_at (Required): string.
         * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Persisted owned-state version.
         * Clock-based availability and expanded resources do not advance this counter. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /** Number of bundles currently assigned to the category. Format: int64. */
            "assigned_bundle_count": number;
            /** Number of products currently assigned to the category. Format: int64. */
            "assigned_product_count": number;
            /** Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". */
            "category_id": string;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /** Description of the category. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Immutable handle used to assign this category to products and bundles. */
            "handle": string;
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Category name shown to buyers. */
            "name": string;
            /**
             * Category lifecycle status. Active categories can be assigned; deleted is returned
             * only by DELETE. Value enum: "active", "deleted".
             */
            "status": "active" | "deleted" | (string & {});
            /**
             * Number of promotions, return reasons and return policy versions that reference this
             * category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or
             * `assigned_product_count` or `assigned_bundle_count` is above zero. Format: int64.
             */
            "targeting_reference_count": number;
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted owned-state version. Clock-based availability and expanded resources do
             * not advance this counter. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Category>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "category.updated". */
    "event_type"?: "category.updated";
});
/** The request body for: Change subscription plan. */
export type ChangeMeSubscriptionPlanRequest = ({
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
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Legacy subscription multiplier. Only 1 is accepted; omission keeps the current quantity. Use
     * line_items for multiple units. Whole-number quantity; fractional quantities are not
     * supported. minimum: 1. maximum: 1.
     */
    "quantity"?: number;
    /**
     * The target subscription plan. minLength: 1. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id": string;
});
/** The request body for: Change subscription plan. */
export type ChangeMeSubscriptionPlanRequestInput = ({
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
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Legacy subscription multiplier. Only 1 is accepted; omission keeps the current quantity. Use
     * line_items for multiple units. Whole-number quantity; fractional quantities are not
     * supported. minimum: 1. maximum: 1.
     */
    "quantity"?: number;
    /**
     * The target subscription plan. minLength: 1. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id": string;
});
/** The request body for: Change subscription quantity. */
export type ChangeMeSubscriptionQuantityRequest = {
    /**
     * period_end schedules the new quantities for the next billing boundary; prorated_now charges
     * the difference now for an eligible digital line. Value enum: "period_end", "prorated_now".
     */
    "billing_starts": "period_end" | "prorated_now" | (string & {});
    /** Reject the request if the subscription version has changed. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * The frozen adjustable subscription line and its quantity, within min_quantity and
     * max_quantity. Omitted lines keep their quantities. minItems: 1. maxItems: 50. [] (Value):
     * {@link SubscriptionQuantityChangeLineItemRequest}. Quantity for an existing subscription
     * line.
     */
    "line_items": Array<SubscriptionQuantityChangeLineItemRequest>;
};
/** The request body for: Change subscription quantity. */
export type ChangeMeSubscriptionQuantityRequestInput = {
    /**
     * period_end schedules the new quantities for the next billing boundary; prorated_now charges
     * the difference now for an eligible digital line. Value enum: "period_end", "prorated_now".
     */
    "billing_starts": "period_end" | "prorated_now";
    /** Reject the request if the subscription version has changed. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * The frozen adjustable subscription line and its quantity, within min_quantity and
     * max_quantity. Omitted lines keep their quantities. minItems: 1. maxItems: 50. [] (Value):
     * {@link SubscriptionQuantityChangeLineItemRequestInput}. Quantity for an existing
     * subscription line.
     */
    "line_items": Array<SubscriptionQuantityChangeLineItemRequestInput>;
};
/** The request body for: Change subscription plan. */
export type ChangeSubscriptionPlanRequest = ({
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
    /**
     * now bills a new period with credit for unused paid item time. next_renewal changes the plan
     * immediately and keeps the current paid period and next billing date. period_end keeps the
     * current plan until the next charged renewal, then applies and bills the scheduled terms.
     * prorated_now charges the new terms for the rest of the current period, less unused paid item
     * credit, and keeps the billing period and anchor. Value enum: "now", "next_renewal",
     * "period_end", "prorated_now".
     */
    "billing_starts": "now" | "next_renewal" | "period_end" | "prorated_now" | (string & {});
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
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
     * Legacy subscription multiplier. Only 1 is accepted; omission keeps the current quantity. Use
     * line_items for multiple units. Whole-number quantity; fractional quantities are not
     * supported. minimum: 1. maximum: 1.
     */
    "quantity"?: number;
    /**
     * The target subscription plan. minLength: 1. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id": string;
});
/** The request body for: Change subscription plan. */
export type ChangeSubscriptionPlanRequestInput = ({
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
    /**
     * now bills a new period with credit for unused paid item time. next_renewal changes the plan
     * immediately and keeps the current paid period and next billing date. period_end keeps the
     * current plan until the next charged renewal, then applies and bills the scheduled terms.
     * prorated_now charges the new terms for the rest of the current period, less unused paid item
     * credit, and keeps the billing period and anchor. Value enum: "now", "next_renewal",
     * "period_end", "prorated_now".
     */
    "billing_starts": "now" | "next_renewal" | "period_end" | "prorated_now";
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
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
     * Legacy subscription multiplier. Only 1 is accepted; omission keeps the current quantity. Use
     * line_items for multiple units. Whole-number quantity; fractional quantities are not
     * supported. minimum: 1. maximum: 1.
     */
    "quantity"?: number;
    /**
     * The target subscription plan. minLength: 1. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id": string;
});
/** The request body for: Change subscription quantity. */
export type ChangeSubscriptionQuantityRequest = ({
    /**
     * prorated_now charges the prorated difference now and keeps the current period and anchor;
     * next_renewal changes quantities now without charging; period_end schedules them for the next
     * billing boundary. Value enum: "prorated_now", "next_renewal", "period_end".
     */
    "billing_starts": "prorated_now" | "next_renewal" | "period_end" | (string & {});
    /** Reject the request if the subscription version has changed. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Quantities for existing subscription lines, with distinct IDs. Omitted lines keep their
     * quantities. Send quantity or line_items. minItems: 1. maxItems: 50. [] (Value): {@link
     * SubscriptionQuantityChangeLineItemRequest}. Quantity for an existing subscription line.
     */
    "line_items"?: Array<SubscriptionQuantityChangeLineItemRequest>;
    /**
     * The whole-number subscription multiplier; fractional quantities are not supported. Validated
     * as on subscription PATCH. Omit to keep its current value. Send quantity or line_items.
     * minimum: 1. maximum: 1.
     */
    "quantity"?: number;
})
    & (({
    /**
     * The whole-number subscription multiplier; fractional quantities are not supported. Validated
     * as on subscription PATCH. Omit to keep its current value. Send quantity or line_items.
     * minimum: 1. maximum: 1.
     */
    "quantity": number;
})
    | ({
    /**
     * Quantities for existing subscription lines, with distinct IDs. Omitted lines keep their
     * quantities. Send quantity or line_items. minItems: 1. maxItems: 50. [] (Value): {@link
     * SubscriptionQuantityChangeLineItemRequest}. Quantity for an existing subscription line.
     */
    "line_items": Array<SubscriptionQuantityChangeLineItemRequest>;
})
    | (Record<string, unknown>));
/** The request body for: Change subscription quantity. */
export type ChangeSubscriptionQuantityRequestInput = ({
    /**
     * prorated_now charges the prorated difference now and keeps the current period and anchor;
     * next_renewal changes quantities now without charging; period_end schedules them for the next
     * billing boundary. Value enum: "prorated_now", "next_renewal", "period_end".
     */
    "billing_starts": "prorated_now" | "next_renewal" | "period_end";
    /** Reject the request if the subscription version has changed. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Quantities for existing subscription lines, with distinct IDs. Omitted lines keep their
     * quantities. Send quantity or line_items. minItems: 1. maxItems: 50. [] (Value): {@link
     * SubscriptionQuantityChangeLineItemRequestInput}. Quantity for an existing subscription line.
     */
    "line_items"?: Array<SubscriptionQuantityChangeLineItemRequestInput>;
    /**
     * The whole-number subscription multiplier; fractional quantities are not supported. Validated
     * as on subscription PATCH. Omit to keep its current value. Send quantity or line_items.
     * minimum: 1. maximum: 1.
     */
    "quantity"?: number;
})
    & (({
    /**
     * The whole-number subscription multiplier; fractional quantities are not supported. Validated
     * as on subscription PATCH. Omit to keep its current value. Send quantity or line_items.
     * minimum: 1. maximum: 1.
     */
    "quantity": number;
})
    | ({
    /**
     * Quantities for existing subscription lines, with distinct IDs. Omitted lines keep their
     * quantities. Send quantity or line_items. minItems: 1. maxItems: 50. [] (Value): {@link
     * SubscriptionQuantityChangeLineItemRequestInput}. Quantity for an existing subscription line.
     */
    "line_items": Array<SubscriptionQuantityChangeLineItemRequestInput>;
}));
/** An optional admission code to verify and an optional version fence. */
export type CheckInTicketRequest = {
    /**
     * The 16-character Crockford base32 admission code scanned at the door. Spaces, hyphens and
     * ASCII lowercase are normalized. Omit it to check the ticket in manually. minLength: 16.
     */
    "admission_code"?: string;
    /**
     * The ticket version last read. The change applies only while the ticket is at this version; a
     * stale value returns 409 VERSION_CONFLICT, even when the ticket's status would also refuse
     * the change. Door scanners usually omit it. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/** An optional admission code to verify and an optional version fence. */
export type CheckInTicketRequestInput = CheckInTicketRequest;
/** Buyer contact supplied with payment or saved during checkout. */
export type CheckoutBuyerContact = {
    /**
     * Email supplied for the buyer, exactly as sent. Null when no email is saved; is_email_cleared
     * distinguishes an explicit clear. Format: email. maxLength: 255. Example:
     * "buyer@example.com".
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
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
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
     * saved email. Format: email. minLength: 1. maxLength: 255. Example: "buyer@example.com".
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
    /** Message shown near the order summary in checkout. */
    "order_summary_message"?: string;
    /** Label shown for the shipping address in checkout. */
    "shipping_address_label"?: string;
};
/**
 * Custom checkout text you supply when creating a checkout session: an order summary message and a
 * shipping address label.
 */
export type CheckoutCustomTextWriteConfigInput = {
    /** Message shown near the order summary in checkout. minLength: 1. */
    "order_summary_message"?: string;
    /** Label shown for the shipping address in checkout. minLength: 1. */
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
 * The delivery options Flint derived for a checkout as a buyer sees them: choice groups, input
 * requirements, and evaluation status.
 */
export type CheckoutDerivedDeliveryResource = {
    /**
     * Buyer-safe reasons candidate methods did not produce an option. These can be present even
     * when another method is available. [] (Value): string.
     */
    "buyer_reasons": Array<string>;
    /**
     * Groups of order items that each choose their own delivery option. Empty until the checkout
     * has a delivery quote. [] (Value): {@link DeliveryQuoteChoiceGroupResource}. One group of
     * order items in a delivery quote, with the delivery options the buyer can choose, its
     * availability status, and any input still needed.
     */
    "choice_groups": Array<DeliveryQuoteChoiceGroupResource>;
    /**
     * ID of the checkout's current delivery quote. Omitted until the checkout has one. Example:
     * "dqt_01KEZF7C009EB1AVCDJBN4BBVV".
     */
    "delivery_quote_id"?: string;
    /**
     * Current delivery selection ID after reconciliation. `null` when no selection is current.
     * Assert this value with expected_delivery_selection_id on checkout delivery writes. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     */
    "delivery_selection_id": string | null;
    /**
     * How completely Flint evaluated the candidate delivery methods. Value enum: "complete",
     * "incomplete", "degraded", "requires_explicit_quote".
     */
    "evaluation_status": "complete" | "incomplete" | "degraded" | "requires_explicit_quote" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
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
     * stops working when the session ends. Format: uri. Example: "https://example.com/receipt".
     */
    "url": string;
};
/**
 * Legal settings you supply when creating a checkout session: whether buyers must accept terms,
 * and links to the terms, refund policy, shipping policy, and contract.
 */
export type CheckoutLegalConfigRequestInput = {
    /** An `https://` URL of the contract the buyer agrees to, linked in checkout. minLength: 1. */
    "contract_url"?: string;
    /** An `https://` URL of your refund policy, linked in checkout. minLength: 1. */
    "refund_policy_url"?: string;
    /** Whether the buyer must accept the terms of service before paying. */
    "require_terms_of_service"?: boolean;
    /** An `https://` URL of your shipping policy, linked in checkout. minLength: 1. */
    "shipping_policy_url"?: string;
    /** An `https://` URL of your terms of service, linked in checkout. minLength: 1. */
    "terms_of_service_url"?: string;
};
/** The merchant's support contact. Each field is omitted when the merchant has not set it. */
export type CheckoutMerchantSupport = {
    /** Support email address. Format: email. Example: "buyer@example.com". */
    "email"?: string;
    /** Support phone number. */
    "phone"?: string;
    /**
     * Support page, as an absolute http or https URL. Format: uri. Example:
     * "https://example.com/receipt".
     */
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
    /** A note shown to the buyer with the payment options. */
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
    /** A note shown to the buyer with the payment options. minLength: 1. */
    "payment_note"?: string;
};
/**
 * A card the buyer saved with this checkout's payment that waits for a code. It works for nothing
 * until the buyer confirms it with a code: request one with POST
 * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
 * confirm_saved_payment_method.
 */
export type CheckoutPaymentMethodSave = {
    /**
     * True from the moment status is pending when an emailed code is what finishes the save: the
     * buyer gave no number, or the number alone can't save the card. An emailed code alone saves
     * the card by email. If the buyer already confirmed the number by text, the emailed code saves
     * the card with that number.
     */
    "email_confirmation_required": boolean;
    /**
     * When a pending save stops waiting: 24 hours after the payment succeeded or was approved.
     * `null` when the save is no longer pending. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string | null;
    /**
     * Last two digits of the number the buyer gave, which a code is texted to. Set while status is
     * pending and the buyer gave a number.
     */
    "phone_last_digits"?: string;
    /**
     * How the buyer confirmed the card: with a code texted to their phone or emailed to them.
     * Value enum: "sms", "email".
     */
    "saved_with"?: "sms" | "email" | (string & {});
    /**
     * Whether the card is saved. Until `saved`, the card can't be used. Value enum: "pending",
     * "saved", "expired".
     */
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
     * The billing address to fill in. A postal address. Every address has country. Addresses Flint
     * checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "billing_address"?: Address;
    /** The buyer's email address to fill in. */
    "email"?: string;
    /** The buyer's phone number to fill in. */
    "phone"?: string;
    /**
     * The shipping address to fill in. A postal address. Every address has country. Addresses
     * Flint checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "shipping_address"?: Address;
    /**
     * The name of the person receiving the delivery, to fill in with the shipping address.
     * minLength: 1. maxLength: 200.
     */
    "shipping_recipient_name"?: string;
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
     * The billing address to fill in. A complete postal address. State and postal_code are
     * required for US addresses and optional for other countries. Send null or omit line2, state,
     * and postal_code when the address has none.
     */
    "billing_address"?: AddressRequest;
    /** The buyer's email address to fill in. minLength: 1. */
    "email"?: string;
    /** The buyer's phone number to fill in. minLength: 1. */
    "phone"?: string;
    /**
     * The shipping address to fill in. A complete postal address. State and postal_code are
     * required for US addresses and optional for other countries. Send null or omit line2, state,
     * and postal_code when the address has none.
     */
    "shipping_address"?: AddressRequest;
    /**
     * The name of the person receiving the delivery, to fill in with the shipping address.
     * minLength: 1. maxLength: 200.
     */
    "shipping_recipient_name"?: string;
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
     * The billing address to fill in. A complete postal address. State and postal_code are
     * required for US addresses and optional for other countries. Send null or omit line2, state,
     * and postal_code when the address has none.
     */
    "billing_address"?: AddressRequestInput;
    /** The buyer's email address to fill in. minLength: 1. */
    "email"?: string;
    /** The buyer's phone number to fill in. minLength: 1. */
    "phone"?: string;
    /**
     * The shipping address to fill in. A complete postal address. State and postal_code are
     * required for US addresses and optional for other countries. Send null or omit line2, state,
     * and postal_code when the address has none.
     */
    "shipping_address"?: AddressRequestInput;
    /**
     * The name of the person receiving the delivery, to fill in with the shipping address.
     * minLength: 1. maxLength: 200.
     */
    "shipping_recipient_name"?: string;
};
/**
 * A problem with a checkout session, such as a stale delivery selection, with its `code`, whether
 * it blocks completion, and remediation.
 */
export type CheckoutProblemResource = {
    /** Whether the checkout cannot complete until the problem is resolved. */
    "blocks_completion": boolean;
    /**
     * Which condition affects the checkout. Value enum: "delivery_selection_stale",
     * "delivery_selection_invalid", "delivery_unreadable", "payment_in_progress".
     */
    "code": "delivery_selection_stale"
        | "delivery_selection_invalid"
        | "delivery_unreadable"
        | "payment_in_progress"
        | (string & {});
    /**
     * What the caller can do about the problem, and whether retrying the same request can help.
     * Recovery guidance for an error: whether and how to `retry`, plus next steps and suggested
     * actions.
     */
    "remediation"?: ErrorRemediation;
    /** How serious the problem is. Value enum: "error". */
    "severity": "error" | (string & {});
};
/**
 * Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can
 * apply promotion codes.
 */
export type CheckoutPromotionConfig = {
    /**
     * Whether automatic promotions apply to this checkout. Send false to stop them here. True
     * can't turn them back on when your promotion settings have them off.
     */
    "automatic_enabled"?: boolean;
    /**
     * Object-level override for whether this checkout's buyer can apply promotion codes, hosted or
     * headless. Omit to inherit the payment link and checkout.promotion_codes_enabled. When all
     * are unset, hosted checkout offers code entry only while an active code promotion exists in
     * this environment; read can_apply_promotion_code on the session. True allows codes when the
     * merchant's promotion settings allow them; false blocks them for this checkout. `null` when
     * this checkout inherits checkout.promotion_codes_enabled.
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
    /**
     * Amount the buyer pays for the item. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Name shown for the item. minLength: 1. */
    "name": string;
    /** Tax settings for the item. A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
};
/**
 * A single custom item to charge on a checkout session, supplied as `quick_pay_item`: a name, an
 * amount, and optional tax settings.
 */
export type CheckoutQuickPayItemRequestInput = {
    /**
     * Amount the buyer pays for the item. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /** Name shown for the item. minLength: 1. */
    "name": string;
    /** Tax settings for the item. A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxRequestInput;
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
