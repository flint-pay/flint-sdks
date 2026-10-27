import type { MoneyValue } from './types-31.js';
import type {
    BuyerErrorRemediation,
    BuyerExpandedOrderSummary,
    BuyerAction,
    BuyerCheckoutSessionWithSecret,
    BuyerExpandedSubscriptionPlanSummary,
    BuyerOrderLineItemModifier,
    BuyerOrder,
    BuyerOrderPaymentAttempt
} from './types-1.js';
import type { PaymentErrorSummary, PaymentFulfillmentHold } from './types-35.js';
import type { PaymentSourceSummary, PaymentRefund } from './types-36.js';
import type { ResponseMeta, ReturnFinancialSummary, ReturnEligibilitySelection } from './types-40.js';
import type {
    CardDetails,
    CategoryReference,
    CallerSuppliedDeliveryOutcomeRequestInput,
    CallerSuppliedDeliveryOutcomeRequestAvailable,
    CallerSuppliedDeliveryOutcomeRequestCannotCalculate,
    CallerSuppliedDeliveryOutcomeRequestUnavailable
} from './types-3.js';
import type { StripeClientSetup, SubscriptionAddressVerification } from './types-44.js';
import type { ExpandedCustomerSummary, ExpandedPaymentIntentSummary } from './types-16.js';
import type { RefundLineItemAllocation, RefundTaxBreakdownRefund, RefundTenderAllocation } from './types-39.js';
import type { BundleComponent, Address } from './types-0.js';
import type { Image } from './types-19.js';
import type {
    ReturnReasonSummary,
    ReturnResolutionLineItemRequest,
    ReturnLineItemValue,
    ReturnLineItemDecisionProposal,
    ReturnPolicyAdjustmentProposal,
    ReturnReplacementLineItem,
    ReturnResolutionLineItem
} from './types-41.js';
import type { SelectedProductOption } from './types-43.js';
import type {
    SubscriptionDelivery,
    SubscriptionDeliveryHold,
    SubscriptionIntervalOption,
    SubscriptionPlanSwapVariant,
    SubscriptionDeliveryOption
} from './types-45.js';
import type { SubscriptionPromotion, SubscriptionUpcomingDeliveryHold, SubscriptionRenewalPreview } from './types-46.js';
import type { OrderLineItemTax } from './types-32.js';
import type { TipPaymentIntentAllocation, TipValueSettlementAllocation } from './types-47.js';
import type { DeliveryWindowRequest } from './types-15.js';
/**
 * Shape $ (Value): {@link BuyerPaymentAttemptPaymentIntent}. The payment intent behind an order
 * payment attempt, with its status, amounts, authorization expiry, and last payment error.
 */
export type BuyerPaymentAttemptPaymentIntent = {
    /**
     * Shape $ (Value): {@link MoneyValue}. The amount requested from the buyer, including any
     * tip_money. Capturing doesn't change it: after a partial capture it still shows the requested
     * amount, and captured_money shows what was collected. On a standalone payment intent, PATCH
     * can change it only before the first confirmation attempt. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. Capture is unavailable at or after this time, even if the payment
     * still has requires_capture status. Format: date-time.
     */
    "authorization_expires_at"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Payment intent's stored capturable amount. A positive
     * amount does not override authorization_expires_at or the payment status. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "capturable_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link BuyerPaymentErrorSummary}. Why a payment attempt failed: a
     * normalized `code`, a message, when it failed, and recovery guidance.
     */
    "last_payment_error"?: BuyerPaymentErrorSummary;
    /** Shape $ (Value): string. Flint payment intent ID. */
    "payment_intent_id": string;
    /**
     * Shape $ (Value): string. Payment option used by this leg, using the same values as
     * PaymentIntent.selected_payment_option. Fixed when the attempt becomes terminal. Omitted when
     * no payment option has been selected. Value enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit".
     */
    "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {});
    /**
     * Shape $ (Value): string. Lifecycle status. requires_payment_method covers both a new payment
     * intent and one whose last attempt failed, so read last_payment_error with it. succeeded,
     * canceled, and expired are final. Refunds and disputes never change status. Value enum:
     * "requires_payment_method", "requires_confirmation", "requires_action", "processing",
     * "requires_capture", "canceled", "succeeded", "expired".
     */
    "status": "requires_payment_method"
        | "requires_confirmation"
        | "requires_action"
        | "processing"
        | "requires_capture"
        | "canceled"
        | "succeeded"
        | "expired"
        | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "tip_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link BuyerPaymentCollection}. What a client needs to collect payment for a
 * buyer's order. The `stripe` field holds the Stripe values.
 */
export type BuyerPaymentCollection = {
    /**
     * Shape $ (Value): {@link BuyerPaymentCollectionStripe}. Client configuration for collecting
     * the payment through Stripe. Stripe values for collecting payment on a buyer's order: the
     * account ID, publishable key, return URL, and Elements settings.
     */
    "stripe"?: BuyerPaymentCollectionStripe;
};
/**
 * Shape $ (Value): {@link BuyerPaymentCollectionStripe}. Stripe values for collecting payment on a
 * buyer's order: the account ID, publishable key, return URL, and Elements settings.
 */
export type BuyerPaymentCollectionStripe = {
    /** Shape $ (Value): string. Stripe account to use when initializing the payment client. */
    "account_id"?: string;
    /**
     * Shape $ (Value): {@link BuyerPaymentCollectionStripeElements}. Stripe Elements configuration
     * for the available payment methods and amounts. Stripe Elements collection guidance. Follow
     * next_step in the browser, then submit the result to submit_to through Flint.
     */
    "elements"?: BuyerPaymentCollectionStripeElements;
    /** Shape $ (Value): string. Publishable Stripe key for initializing the payment client. */
    "publishable_key"?: string;
    /** Shape $ (Value): string. URL the buyer returns to after a redirect payment step. */
    "return_url"?: string;
};
/**
 * Shape $ (Value): {@link BuyerPaymentCollectionStripeElements}. Stripe Elements collection
 * guidance. Follow next_step in the browser, then submit the result to submit_to through Flint.
 */
export type BuyerPaymentCollectionStripeElements = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Amount and currency used to initialize the payment
     * form. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): Array of string. Digital wallets that the payment form can offer. Shape $[]
     * (Value): string.
     */
    "digital_wallets"?: Array<string>;
    /**
     * Shape $ (Value): string. Whether Elements is collecting a payment source for an immediate
     * payment or a setup source for future use. Value enum: "payment", "setup".
     */
    "mode": "payment" | "setup" | (string & {});
    /**
     * Shape $ (Value): string. Browser collection operation to perform before calling submit_to.
     * Value enum: "collect_payment_source", "collect_setup_payment_source",
     * "create_confirmation_token".
     */
    "next_step": "collect_payment_source"
        | "collect_setup_payment_source"
        | "create_confirmation_token"
        | (string & {});
    /**
     * Shape $ (Value): string. Stripe Elements payment method creation mode. Follow next_step:
     * standalone PaymentIntents and checkout-authenticated order collection create a
     * ConfirmationToken, while merchant-authenticated order collection and setup collection create
     * a PaymentMethod. Value enum: "manual".
     */
    "payment_method_creation": "manual" | (string & {});
    /** Shape $ (Value): object. Payment method settings passed to the payment form. */
    "payment_method_options"?: {
        [key: string]: unknown;
    };
    /**
     * Shape $ (Value): Array of string. Payment method types that the payment form can offer.
     * Shape $[] (Value): string.
     */
    "payment_method_types": Array<string>;
    /**
     * Shape $ (Value): Array of {@link BuyerSelectableOrderPaymentIntent}. Order payment intents
     * that the buyer can select for collection. Shape $[] (Value): {@link
     * BuyerSelectableOrderPaymentIntent}. A payment intent a buyer can pay on an order, with its
     * status, amounts, payment collection details, and last payment error.
     */
    "selectable_payment_intents"?: Array<BuyerSelectableOrderPaymentIntent>;
    /**
     * Shape $ (Value): string. Flint operation that accepts the result of next_step. Value enum:
     * "pay_order", "confirm_payment_intent".
     */
    "submit_to": "pay_order" | "confirm_payment_intent" | (string & {});
};
/**
 * Shape $ (Value): {@link BuyerPaymentErrorSummary}. Why a payment attempt failed: a normalized
 * `code`, a message, when it failed, and recovery guidance.
 */
export type BuyerPaymentErrorSummary = {
    /**
     * Shape $ (Value): string. Flint-normalized payment failure code. Unknown provider values are
     * returned as payment_failed. Value enum: "card_declined", "insufficient_funds",
     * "bank_account_closed", "bank_account_not_found", "bank_debit_not_authorized",
     * "bank_account_restricted", "bank_debit_limit_exceeded", "authentication_required",
     * "payment_blocked", "expired_card", "incorrect_cvc", "lost_card", "stolen_card",
     * "do_not_honor", "fraudulent", "processing_error", "payment_method_unavailable",
     * "payment_method_declined", "payment_not_completed", "payment_action_expired",
     * "payment_method_temporarily_unavailable", "payment_failed".
     */
    "code": "card_declined"
        | "insufficient_funds"
        | "bank_account_closed"
        | "bank_account_not_found"
        | "bank_debit_not_authorized"
        | "bank_account_restricted"
        | "bank_debit_limit_exceeded"
        | "authentication_required"
        | "payment_blocked"
        | "expired_card"
        | "incorrect_cvc"
        | "lost_card"
        | "stolen_card"
        | "do_not_honor"
        | "fraudulent"
        | "processing_error"
        | "payment_method_unavailable"
        | "payment_method_declined"
        | "payment_not_completed"
        | "payment_action_expired"
        | "payment_method_temporarily_unavailable"
        | "payment_failed"
        | (string & {});
    /**
     * Shape $ (Value): string. Time the payment attempt concluded in failure. Format: date-time.
     */
    "failed_at": string;
    /**
     * Shape $ (Value): string. Flint-authored merchant-facing payment failure message. This is
     * stable explanatory text, not raw provider copy.
     */
    "message": string;
    /**
     * Shape $ (Value): {@link BuyerErrorRemediation} or null. Guidance for resolving the payment
     * failure before trying to collect again. Shape $.anyOf[1] (Value): {@link
     * BuyerErrorRemediation}. Guidance for recovering from a payment error: whether and how to
     * retry (`retry`), and optional next steps. Shape $.anyOf[2] (Value): null.
     */
    "remediation": ((BuyerErrorRemediation) | (null));
};
/**
 * Shape $ (Value): {@link BuyerPaymentIntent}. A payment as the buyer sees it. Omits the store's
 * fees, net, risk assessment, and dispute state.
 */
export type BuyerPaymentIntent = {
    /**
     * Shape $ (Value): {@link MoneyValue}. The amount requested from the buyer, including any
     * tip_money. Capturing doesn't change it: after a partial capture it still shows the requested
     * amount, and captured_money shows what was collected. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. When the hold lapses if it hasn't been collected. Set when the hold
     * is placed. Format: date-time.
     */
    "authorization_expires_at"?: string;
    /**
     * Shape $ (Value): string. When the processor authorized the payment. Absent until then.
     * Format: date-time.
     */
    "authorized_at"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. The amount the processor authorized. It always equals
     * amount_money and doesn't change once set. Absent until the payment is authorized, and on
     * payments canceled before authorization. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "authorized_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Flint-normalized reason the payment intent was canceled. Present
     * only while status is canceled. Unknown processor values are returned as payment_canceled.
     * Value enum: "requested_by_customer", "duplicate", "fraudulent", "abandoned",
     * "invoice_payment_failed", "invoice_voided", "order_closed", "payment_canceled".
     */
    "cancellation_reason"?: "requested_by_customer"
        | "duplicate"
        | "fraudulent"
        | "abandoned"
        | "invoice_payment_failed"
        | "invoice_voided"
        | "order_closed"
        | "payment_canceled"
        | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. The part of the authorization that can still be
     * collected. Positive only while status is requires_capture, and zero after it is collected,
     * released, or expires. Absent until the payment is authorized. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "capturable_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. When money is collected. Defaults to automatic. Value enum:
     * "automatic", "manual".
     */
    "capture_method"?: "automatic" | "manual" | (string & {});
    /**
     * Shape $ (Value): string. When money was captured. For automatic capture, this is when the
     * payment succeeded. Absent until capture. Format: date-time.
     */
    "captured_at"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. The amount collected from the buyer. Zero while a hold
     * is open, and positive whenever status is succeeded. Absent until the payment is authorized.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "captured_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Flint checkout session ID associated with this payment, when
     * present.
     */
    "checkout_session_id"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. Customer linked to this payment intent. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): {@link PaymentFulfillmentHold}. Present when a payment provider asked Flint
     * to pause fulfillment for this payment. While its status is active, open fulfillments are on
     * hold. A hold on fulfillment tied to a payment, with the reason, the action required, and
     * whether the hold is active or released.
     */
    "fulfillment_hold"?: PaymentFulfillmentHold;
    /** Shape $ (Value): string. Bill this payment collects, when it pays a bill. */
    "invoice_id"?: string;
    /**
     * Shape $ (Value): {@link PaymentErrorSummary} or null. Most recent payment error. Null when
     * no payment error is recorded. Shape $.anyOf[1] (Value): {@link PaymentErrorSummary}. A
     * summary of why a payment attempt failed, with a normalized error code, a message, the
     * failure time, and remediation. Shape $.anyOf[2] (Value): null.
     */
    "last_payment_error": ((PaymentErrorSummary) | (null));
    /** Shape $ (Value): string. Merchant that owns this payment intent. */
    "merchant_id"?: string;
    /**
     * Shape $ (Value): object. Caller-owned metadata. Keys starting with flint_ are reserved for
     * Flint and aren't returned. maxProperties: 0.
     */
    "metadata": {
        [key: string]: unknown;
    };
    /** Shape $ (Value): string. Order this payment belongs to. */
    "order_id"?: string;
    /**
     * Shape $ (Value): string. How the payment was started. Fixed when the payment is created.
     * Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
     * "subscription_renewal", "virtual_terminal", "api".
     */
    "payment_flow": "checkout"
        | "payment_link"
        | "invoice"
        | "subscription_initial"
        | "subscription_renewal"
        | "virtual_terminal"
        | "api"
        | (string & {});
    /** Shape $ (Value): string. Flint payment intent ID. */
    "payment_intent_id": string;
    /**
     * Shape $ (Value): Array of string. Payment options the buyer can use for this payment. []
     * enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". Shape $[] (Value): string.
     * Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /**
     * Shape $ (Value): {@link PaymentSourceSummary}. Summary of the card or bank account used for
     * the payment. Absent until a payment source is attached. A summary of the payment source used
     * for a payment, by funding-method family, with card or bank account display details.
     */
    "payment_source"?: PaymentSourceSummary;
    /**
     * Shape $ (Value): string or null. Email address for this payment's receipt. When it isn't
     * set, Flint uses the buyer's email. Format: email. maxLength: 255.
     */
    "receipt_email"?: string | null;
    /**
     * Shape $ (Value): string. How much of captured_money has been refunded, including value
     * issued as store credit, based on refunded_money. Value enum: "none", "partially_refunded",
     * "refunded".
     */
    "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Total refunded against captured_money, including value
     * issued as store credit and processor refunds still pending. Failed and canceled refunds
     * aren't counted. Zero when nothing has been refunded. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "refunded_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. The part of the authorization returned to the buyer
     * without being charged: the uncollected remainder after a partial capture, or the whole
     * authorization after a cancellation or expiry. It was never collected, so it needs no refund.
     * Absent until the payment is authorized. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "released_money"?: MoneyValue;
    /** Shape $ (Value): string. Flint return ID associated with this payment, when present. */
    "return_id"?: string;
    /**
     * Shape $ (Value): string. The payment option the most recent confirmation used. Absent until
     * the payment intent is first confirmed.
     */
    "selected_payment_option"?: string;
    /**
     * Shape $ (Value): string. Lifecycle status. requires_payment_method covers both a new payment
     * and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled,
     * and expired are final. Refunds never change status. Value enum: "requires_payment_method",
     * "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled",
     * "succeeded", "expired".
     */
    "status": "requires_payment_method"
        | "requires_confirmation"
        | "requires_action"
        | "processing"
        | "requires_capture"
        | "canceled"
        | "succeeded"
        | "expired"
        | (string & {});
    /**
     * Shape $ (Value): string. Opaque payment reference to share with merchant support. Do not
     * parse its format.
     */
    "support_reference": string;
    /**
     * Shape $ (Value): Array of string. Always empty for buyer credentials. maxItems: 0. [] enum:
     * "confirm", "capture", "cancel". Shape $[] (Value): string. Value enum: "confirm", "capture",
     * "cancel".
     */
    "supported_actions": Array<"confirm" | "capture" | "cancel" | (string & {})>;
    /**
     * Shape $ (Value): {@link MoneyValue} or null. Portion of amount_money that is a tip. Uses
     * amount_money's currency and is at most amount_money. Shape $.anyOf[1] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. Shape $.anyOf[2] (Value): null.
     */
    "tip_money"?: ((MoneyValue) | (null));
    /**
     * Shape $ (Value): string. Why a bank debit is taken. Set only when payment_options includes
     * ach_debit, and fixed once the payment intent exists. Value enum: "goods", "services",
     * "other".
     */
    "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
};
/**
 * Shape $ (Value): {@link BuyerPaymentIntentListResponse}. A page of `BuyerPaymentIntent` objects.
 */
export type BuyerPaymentIntentListResponse = {
    /**
     * Shape $ (Value): Array of {@link BuyerPaymentIntent}. Shape $[] (Value): {@link
     * BuyerPaymentIntent}. A payment as the buyer sees it. Omits the store's fees, net, risk
     * assessment, and dispute state.
     */
    "data": Array<BuyerPaymentIntent>;
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
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link BuyerPaymentIntentResponse}. A response containing `BuyerPaymentIntent`
 * data.
 */
export type BuyerPaymentIntentResponse = {
    /**
     * Shape $ (Value): {@link BuyerPaymentIntent}. A payment as the buyer sees it. Omits the
     * store's fees, net, risk assessment, and dispute state.
     */
    "data": BuyerPaymentIntent;
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
/** Shape $ (Value): {@link BuyerPaymentMethod}. A customer's saved payment details. */
export type BuyerPaymentMethod = {
    /**
     * Shape $ (Value): {@link CardDetails}. Card details on a payment method: brand, expiration
     * month and year, last four digits, and the wallet when one was used.
     */
    "card"?: CardDetails;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. */
    "customer_id": string;
    /**
     * Shape $ (Value): boolean. Whether this is the customer's default payment method, the one
     * Customer.default_payment_method_id names. Change the default with PATCH
     * /v1/customers/{customer_id}; that sends customer.updated, not a payment method event.
     */
    "is_default": boolean;
    /** Shape $ (Value): string. */
    "merchant_id"?: string;
    /** Shape $ (Value): string. */
    "payment_method_id": string;
    /**
     * Shape $ (Value): string. Where the buyer saved this payment method. Returned on
     * /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values.
     * Value enum: "flint", "store".
     */
    "saved_with"?: "flint" | "store" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "pending", "active", "expired", "archived", "failed".
     */
    "status": "pending" | "active" | "expired" | "archived" | "failed" | (string & {});
    /** Shape $ (Value): string.  Value enum: "card". */
    "type": "card" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): string. When Flint may charge the payment method. off_session payment
     * methods can pay subscriptions, automatic invoices, and other charges without the buyer, and
     * can be a customer's default. on_session payment methods were saved by the buyer in checkout
     * for faster checkout at this merchant; Flint charges them only in checkouts the buyer
     * completes and refuses them for any charge without the buyer and as a default. Payment
     * methods saved before usage existed are off_session. Value enum: "on_session", "off_session".
     */
    "usage": "on_session" | "off_session" | (string & {});
};
/**
 * Shape $ (Value): {@link BuyerPaymentMethodListResponse}. A page of `BuyerPaymentMethod` objects.
 */
export type BuyerPaymentMethodListResponse = {
    /**
     * Shape $ (Value): Array of {@link BuyerPaymentMethod}. Shape $[] (Value): {@link
     * BuyerPaymentMethod}. A customer's saved payment details.
     */
    "data": Array<BuyerPaymentMethod>;
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
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link BuyerPaymentMethodResponse}. A response containing `BuyerPaymentMethod`
 * data.
 */
export type BuyerPaymentMethodResponse = {
    /** Shape $ (Value): {@link BuyerPaymentMethod}. A customer's saved payment details. */
    "data": BuyerPaymentMethod;
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
 * Shape $ (Value): {@link BuyerPaymentMethodWithSetup}. The saved payment method, with
 * `client_setup` when the buyer must still complete processor setup before the payment method can
 * be used. A customer's saved payment details.
 */
export type BuyerPaymentMethodWithSetup = (Exclude<BuyerPaymentMethod & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): {@link StripeClientSetup}. Present when the buyer must complete processor
     * setup before using this payment method. Stripe.js setup authority returned while saving a
     * payment method. Follow its stripe_js_call now. setup_collection is guidance instead and
     * never carries a secret.
     */
    "client_setup"?: StripeClientSetup;
});
/** Shape $ (Value): {@link BuyerRefund}. Money returned against a collected payment. */
export type BuyerRefund = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. */
    "credit_note_id"?: string;
    /**
     * Shape $ (Value): {@link ExpandedCustomerSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. Shape $.anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** Shape $ (Value): string. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Why a refund failed or a payment refund was canceled. Failed and
     * canceled amounts become refundable again. Fix the cause, then create a new refund with a new
     * idempotency key. Unknown provider values are returned as refund_failed. Value enum:
     * "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds",
     * "insufficient_available_balance", "declined", "merchant_request", "payment_disputed",
     * "payment_refund_failed", "payment_refund_not_attempted", "refund_failed".
     */
    "failure_reason"?: "expired_or_canceled_card"
        | "lost_or_stolen_card"
        | "insufficient_funds"
        | "insufficient_available_balance"
        | "declined"
        | "merchant_request"
        | "payment_disputed"
        | "payment_refund_failed"
        | "payment_refund_not_attempted"
        | "refund_failed"
        | (string & {});
    /**
     * Shape $ (Value): string. Present only on refunds created through POST
     * /v1/credit-notes/{credit_note_id}/refunds: the Idempotency-Key of that call. Use it with GET
     * /v1/credit-notes/{credit_note_id}/refunds?idempotency_key= to recover a refund whose create
     * response was lost.
     */
    "idempotency_key"?: string;
    /** Shape $ (Value): string. */
    "invoice_id"?: string;
    /**
     * Shape $ (Value): Array of {@link RefundLineItemAllocation}. Shape $[] (Value): {@link
     * RefundLineItemAllocation}. How a refund applied to one order line item: quantity, refunded
     * amount, tax, adjustments, and modifier allocations.
     */
    "line_item_allocations"?: Array<RefundLineItemAllocation>;
    /** Shape $ (Value): string. */
    "merchant_id"?: string;
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): {@link BuyerExpandedOrderSummary} or null. Shape $.anyOf[1] (Value): {@link
     * BuyerExpandedOrderSummary}. An order summary in a buyer response, with order status and
     * totals. Recorded buyer contact is omitted. Shape $.anyOf[2] (Value): null.
     */
    "order"?: ((BuyerExpandedOrderSummary) | (null));
    /** Shape $ (Value): string. */
    "order_id"?: string;
    /**
     * Shape $ (Value): {@link ExpandedPaymentIntentSummary} or null. Shape $.anyOf[1] (Value):
     * {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
     * status, and capture method, returned when the payment intent is expanded. Shape $.anyOf[2]
     * (Value): null.
     */
    "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
    /** Shape $ (Value): string. */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): Array of {@link PaymentRefund}. Shape $[] (Value): {@link PaymentRefund}.
     * The part of a refund returned through one payment, with the amount, tip, status, and any
     * failure reason.
     */
    "payment_refunds"?: Array<PaymentRefund>;
    /** Shape $ (Value): null. Always null for buyer credentials. */
    "reason": null;
    /** Shape $ (Value): string. */
    "reason_message"?: string;
    /** Shape $ (Value): string. */
    "refund_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "refunded_tip_money": MoneyValue;
    /** Shape $ (Value): string. */
    "return_id"?: string;
    /** Shape $ (Value): string. */
    "return_resolution_id"?: string;
    /**
     * Shape $ (Value): string. Summary of payment_refunds and tender_allocations. Only failed is
     * final: succeeded and partially_succeeded can still change when a bank rejects a refund after
     * accepting it. Follow refund.updated. Value enum: "pending", "succeeded",
     * "partially_succeeded", "failed".
     */
    "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
    /**
     * Shape $ (Value): Array of {@link RefundTaxBreakdownRefund}. Shape $[] (Value): {@link
     * RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an order.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
    /**
     * Shape $ (Value): Array of {@link RefundTenderAllocation}. Shape $[] (Value): {@link
     * RefundTenderAllocation}. One tender's share of a refund, listed in the refund's tender
     * allocations.
     */
    "tender_allocations"?: Array<RefundTenderAllocation>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
};
/** Shape $ (Value): {@link BuyerRefundListResponse}. A page of `BuyerRefund` objects. */
export type BuyerRefundListResponse = {
    /**
     * Shape $ (Value): Array of {@link BuyerRefund}. Shape $[] (Value): {@link BuyerRefund}. Money
     * returned against a collected payment.
     */
    "data": Array<BuyerRefund>;
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
    "request_id"?: string;
};
/** Shape $ (Value): {@link BuyerRefundResponse}. A response containing `BuyerRefund` data. */
export type BuyerRefundResponse = {
    /** Shape $ (Value): {@link BuyerRefund}. Money returned against a collected payment. */
    "data": BuyerRefund;
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
 * Shape $ (Value): {@link BuyerRetentionOffer}. The offer a buyer sees before canceling. Send at
 * least one field. minProperties: 1.
 */
export type BuyerRetentionOffer = {
    /**
     * Shape $ (Value): string. none: no offer. pause_instead: offer to pause for pause_cycles
     * billing periods instead of canceling. pause_instead needs pausing turned on. Default:
     * "none". Value enum: "none", "pause_instead".
     */
    "kind"?: "none" | "pause_instead" | (string & {});
    /**
     * Shape $ (Value): integer. Billing periods the offered pause lasts. Required when kind is
     * pause_instead, and at most pause.max_cycles when that is set. Not allowed with kind none.
     * Format: int32. minimum: 1. maximum: 12.
     */
    "pause_cycles"?: number;
};
/**
 * Shape $ (Value): {@link BuyerRetentionOfferInput}. The offer a buyer sees before canceling. Send
 * at least one field. minProperties: 1.
 */
export type BuyerRetentionOfferInput = {
    /**
     * Shape $ (Value): string. none: no offer. pause_instead: offer to pause for pause_cycles
     * billing periods instead of canceling. pause_instead needs pausing turned on. Default:
     * "none". Value enum: "none", "pause_instead".
     */
    "kind"?: "none" | "pause_instead";
    /**
     * Shape $ (Value): integer. Billing periods the offered pause lasts. Required when kind is
     * pause_instead, and at most pause.max_cycles when that is set. Not allowed with kind none.
     * Format: int32. minimum: 1. maximum: 12.
     */
    "pause_cycles"?: number;
};
/** Shape $ (Value): {@link BuyerReturn}. A request to send purchased items back. */
export type BuyerReturn = {
    /**
     * Shape $ (Value): Array of {@link BuyerAction}. What the buyer can do with the return, in
     * this order: withdraw, ship_items, then pay_balance. A buyer's read or change through a
     * customer session on /v1/me, or in Flint's buyer account, lists all three every time;
     * merchant reads and webhooks get an empty list. ship_items is required while
     * handoff_requirements is not empty, due by the earliest expires_at there. pay_balance is
     * required while a resolution waits for the buyer's payment. Example: []. Shape $[] (Value):
     * {@link BuyerAction}. One thing a buyer can do with an order, subscription, invoice or return
     * they read through /v1/me. Show the actions with is_required as what needs the buyer's
     * attention, and the first available action as the primary action on the resource's page in
     * your account.
     */
    "buyer_actions": Array<BuyerAction>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "canceled_at"?: string;
    /**
     * Shape $ (Value): string. Value enum: "buyer_request", "merchant_request", "duplicate",
     * "expired", "created_in_error", "other".
     */
    "cancellation_reason"?: "buyer_request"
        | "merchant_request"
        | "duplicate"
        | "expired"
        | "created_in_error"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "completed_at"?: string;
    /**
     * Shape $ (Value): Array of {@link BuyerReturnCompletionBlocker}. Shape $[] (Value): {@link
     * BuyerReturnCompletionBlocker}. A condition the buyer can resolve before the Return can
     * complete.
     */
    "completion_blockers": Array<BuyerReturnCompletionBlocker>;
    /**
     * Shape $ (Value): string. automatic completes the Return when the last completion blocker
     * clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening a Return sets it
     * to manual. Value enum: "manual", "automatic".
     */
    "completion_mode"?: "manual" | "automatic" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "decision_at"?: string;
    /**
     * Shape $ (Value): string. Value enum: "pending", "approved", "partially_approved",
     * "declined".
     */
    "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
    /**
     * Shape $ (Value): {@link ReturnFinancialSummary}. The money for a return: returned value,
     * deductions, credits, replacement total, and amounts due to or from the buyer.
     */
    "financial_summary": ReturnFinancialSummary;
    /**
     * Shape $ (Value): Array of {@link BuyerReturnHandoffRequirement}. Shape $[] (Value): {@link
     * BuyerReturnHandoffRequirement}. The merchandise quantities the buyer must hand off, with
     * their destination, instructions, and handoff status.
     */
    "handoff_requirements": Array<BuyerReturnHandoffRequirement>;
    /**
     * Shape $ (Value): string. Who created the Return, from the credential that sent the request:
     * buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard
     * user, integration for an API key or partner app. It cannot be sent. Value enum: "buyer",
     * "merchant", "integration".
     */
    "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
    /**
     * Shape $ (Value): Array of {@link BuyerReturnLineItem}. Shape $[] (Value): {@link
     * BuyerReturnLineItem}. An item included in a return request.
     */
    "line_items": Array<BuyerReturnLineItem>;
    /**
     * Shape $ (Value): string. On the Return, the least-finished line's value. Value enum:
     * "not_required", "awaiting_handoff", "in_transit", "partially_received",
     * "inspection_required", "partially_inspected", "inspection_review_required",
     * "disposition_required", "resolved", "exception".
     */
    "merchandise_status": "not_required"
        | "awaiting_handoff"
        | "in_transit"
        | "partially_received"
        | "inspection_required"
        | "partially_inspected"
        | "inspection_review_required"
        | "disposition_required"
        | "resolved"
        | "exception"
        | (string & {});
    /** Shape $ (Value): object. Always empty for buyer credentials. maxProperties: 0. */
    "metadata": {
        [key: string]: unknown;
    };
    /** Shape $ (Value): string. */
    "order_id": string;
    /**
     * Shape $ (Value): string. Value enum: "not_selected", "pending", "partially_fulfilled",
     * "requires_action", "fulfilled", "failed".
     */
    "resolution_status": "not_selected"
        | "pending"
        | "partially_fulfilled"
        | "requires_action"
        | "fulfilled"
        | "failed"
        | (string & {});
    /** Shape $ (Value): string. */
    "return_id": string;
    /** Shape $ (Value): string. */
    "return_number": string;
    /**
     * Shape $ (Value): Array of string. IDs of every resolution created for this Return, oldest
     * first, including failed and canceled resolutions. Expand `return_resolutions` on `GET
     * /v1/returns/{return_id}` to read them inline. Shape $[] (Value): string.
     */
    "return_resolution_ids": Array<string>;
    /**
     * Shape $ (Value): string. Value enum: "requested", "open", "completed", "declined",
     * "canceled".
     */
    "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
    /**
     * Shape $ (Value): Array of string. [] enum: "cancel". Shape $[] (Value): string. Value enum:
     * "cancel".
     */
    "supported_actions": Array<"cancel" | (string & {})>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link BuyerReturnCompletionBlocker}. A condition the buyer can resolve before
 * the Return can complete.
 */
export type BuyerReturnCompletionBlocker = {
    /**
     * Shape $ (Value): string. A blocker the buyer can resolve. resolution_pending is included
     * only for a payable resolution. Value enum: "resolution_pending", "handoff_pending",
     * "resolution_not_selected", "resolution_requires_action", "resolution_failed".
     */
    "code": "resolution_pending"
        | "handoff_pending"
        | "resolution_not_selected"
        | "resolution_requires_action"
        | "resolution_failed"
        | (string & {});
    /** Shape $ (Value): string. */
    "message": string;
    /** Shape $ (Value): string. */
    "return_line_item_id"?: string;
    /** Shape $ (Value): string. */
    "return_resolution_id"?: string;
};
/**
 * Shape $ (Value): {@link BuyerReturnEligibilityPreview}. The buyer's Return eligibility preview
 * for an order, including eligible items and policy evaluation results.
 */
export type BuyerReturnEligibilityPreview = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "evaluated_at": string;
    /**
     * Shape $ (Value): Array of {@link BuyerReturnEligibilityPreviewLineItem}. Shape $[] (Value):
     * {@link BuyerReturnEligibilityPreviewLineItem}. An order line item's Return eligibility,
     * catalog details, and suggested return reasons shown to the buyer.
     */
    "line_items": Array<BuyerReturnEligibilityPreviewLineItem>;
    /** Shape $ (Value): string. */
    "order_id": string;
    /**
     * Shape $ (Value): {@link BuyerReturnPolicyEvaluation}. Return policy evaluation results shown
     * to the buyer, including eligibility and results for individual order lines.
     */
    "policy_evaluation": BuyerReturnPolicyEvaluation;
    /**
     * Shape $ (Value): {@link ReturnEligibilitySelection}. Which order lines to check for return
     * eligibility: all remaining fulfilled lines, or a specific list of lines.
     */
    "selection": ReturnEligibilitySelection;
    /** Shape $ (Value): string.  Value enum: "eligible", "ineligible", "review_required". */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
};
/**
 * Shape $ (Value): {@link BuyerReturnEligibilityPreviewLineItem}. An order line item's Return
 * eligibility, catalog details, and suggested return reasons shown to the buyer.
 */
export type BuyerReturnEligibilityPreviewLineItem = {
    /**
     * Shape $ (Value): Array of {@link BundleComponent}. Shape $[] (Value): {@link
     * BundleComponent}. An item included in a bundle.
     */
    "bundle_components": Array<BundleComponent>;
    /** Shape $ (Value): string. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): boolean. Whether the buyer can request this line themselves, through a
     * customer session, right now. False when no policy covers the item, when it is not eligible,
     * or when the store offers no reason for it. Read eligibility.reason and ineligibility_reason
     * to say why.
     */
    "can_buyer_request": boolean;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link BuyerReturnLineItemEligibility}. An item's Return eligibility,
     * eligible quantity, allowed resolution types, and eligibility reasons shown to the buyer.
     */
    "eligibility": BuyerReturnLineItemEligibility;
    /** Shape $ (Value): string. */
    "fulfillment_id": string;
    /**
     * Shape $ (Value): {@link Image}. An image with its `url`, `width`, and `height`, and optional
     * `alt` text.
     */
    "image"?: Image;
    /**
     * Shape $ (Value): Array of {@link BuyerReturnLineItemModifier}. Shape $[] (Value): {@link
     * BuyerReturnLineItemModifier}. A selected modifier recorded on an item in the buyer's Return,
     * including its modifier group name and price.
     */
    "modifiers": Array<BuyerReturnLineItemModifier>;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "order_line_item_id": string;
    /** Shape $ (Value): string. */
    "product_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "requested_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link SelectedProductOption}. Shape $[] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** Shape $ (Value): string. */
    "sku"?: string;
    /**
     * Shape $ (Value): Array of {@link ReturnReasonSummary}. Active reasons that apply to this
     * item, up to 20. Category-scoped reasons come first, then reasons that apply to every item.
     * Each group sorts by handle ascending, with return_reason_id ascending as the tiebreak.
     * maxItems: 20. Shape $[] (Value): {@link ReturnReasonSummary}. A return reason a buyer can
     * pick for a line, with its `handle` and whether a note is required.
     */
    "suggested_return_reasons": Array<ReturnReasonSummary>;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
};
/**
 * Shape $ (Value): {@link BuyerReturnHandoffDestination}. The destination name, address, and type
 * shown to the buyer for returning merchandise.
 */
export type BuyerReturnHandoffDestination = {
    /**
     * Shape $ (Value): {@link Address}. A postal address, as returned on customers, invoices, tax
     * locations, and fulfillment recipients.
     */
    "address"?: Address;
    /** Shape $ (Value): string.  Value enum: "buyer_address", "location", "external_location". */
    "destination_type": "buyer_address" | "location" | "external_location" | (string & {});
    /** Shape $ (Value): string. */
    "name"?: string;
};
/**
 * Shape $ (Value): {@link BuyerReturnHandoffRequirement}. The merchandise quantities the buyer
 * must hand off, with their destination, instructions, and handoff status.
 */
export type BuyerReturnHandoffRequirement = {
    /**
     * Shape $ (Value): {@link BuyerReturnHandoffDestination}. The destination name, address, and
     * type shown to the buyer for returning merchandise.
     */
    "destination": BuyerReturnHandoffDestination;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /** Shape $ (Value): string. */
    "instructions"?: string;
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequest}. Shape $[] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and the quantity the buyer must hand back.
     */
    "line_items": Array<ReturnResolutionLineItemRequest>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "shipment_count"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Whether the buyer has started sending merchandise back. A
     * requirement leaves handoff_requirements entirely once it is satisfied, so there is no
     * terminal status and an empty array means nothing is waiting on the buyer. Value enum:
     * "pending", "in_progress".
     */
    "status": "pending" | "in_progress" | (string & {});
};
/** Shape $ (Value): {@link BuyerReturnLineItem}. An item included in a return request. */
export type BuyerReturnLineItem = {
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "accepted_quantity": `${bigint}`;
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "approved_quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. The refund, store_credit, or no_monetary_action resolution Flint
     * creates and confirms automatically. Absent when the merchant resolves manually. Example:
     * "refund". Value enum: "refund", "store_credit", "no_monetary_action".
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /**
     * Shape $ (Value): integer string. Approved quantity that can still be assigned to a new
     * resolution. Every non-canceled resolution reserves its line quantity, including proposed,
     * pending, action-required, failed, and fulfilled resolutions. Whole-number quantity;
     * fractional quantities are not supported. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "available_resolution_quantity": `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link BundleComponent}. Shape $[] (Value): {@link
     * BundleComponent}. An item included in a bundle.
     */
    "bundle_components": Array<BundleComponent>;
    /** Shape $ (Value): string. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. */
    "buyer_note"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "canceled_quantity": `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "decision_at"?: string;
    /**
     * Shape $ (Value): string. Value enum: "not_eligible", "quantity_unavailable",
     * "evidence_missing", "suspected_abuse", "merchant_discretion", "other".
     */
    "decline_reason"?: "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. */
    "decline_reason_message"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "declined_quantity": `${bigint}`;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "dispositioned_quantity": `${bigint}`;
    /**
     * Shape $ (Value): {@link BuyerReturnLineItemEligibility}. An item's Return eligibility,
     * eligible quantity, allowed resolution types, and eligibility reasons shown to the buyer.
     */
    "eligibility": BuyerReturnLineItemEligibility;
    /** Shape $ (Value): string. */
    "fulfillment_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "handed_off_quantity": `${bigint}`;
    /**
     * Shape $ (Value): {@link Image}. An image with its `url`, `width`, and `height`, and optional
     * `alt` text.
     */
    "image"?: Image;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "inspected_quantity": `${bigint}`;
    /** Shape $ (Value): boolean. */
    "is_inspection_required"?: boolean;
    /** Shape $ (Value): boolean. */
    "is_policy_overridden": boolean;
    /**
     * Shape $ (Value): string. Value enum: "not_required", "awaiting_handoff", "in_transit",
     * "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
     */
    "merchandise_status": "not_required"
        | "awaiting_handoff"
        | "in_transit"
        | "partially_received"
        | "inspection_required"
        | "partially_inspected"
        | "inspection_review_required"
        | "disposition_required"
        | "resolved"
        | "exception"
        | (string & {});
    /**
     * Shape $ (Value): Array of {@link BuyerReturnLineItemModifier}. Shape $[] (Value): {@link
     * BuyerReturnLineItemModifier}. A selected modifier recorded on an item in the buyer's Return,
     * including its modifier group name and price.
     */
    "modifiers": Array<BuyerReturnLineItemModifier>;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "order_line_item_id": string;
    /** Shape $ (Value): string. */
    "product_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "received_quantity": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "rejected_quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. Committed resolution execution gate, filled for every approved
     * line: after_inspection when merchandise and inspection are required, after_receipt when
     * merchandise is required without inspection, or after_approval when merchandise is not
     * required, unless the policy or decision sets a timing explicitly. Applies to every
     * resolution type, including exchanges and replacements. manual is held until a merchant calls
     * POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "requested_quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit".
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "not_selected", "pending", "requires_action",
     * "fulfilled", "failed".
     */
    "resolution_status": "not_selected" | "pending" | "requires_action" | "fulfilled" | "failed" | (string & {});
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "resolved_quantity": `${bigint}`;
    /** Shape $ (Value): string. */
    "return_id": string;
    /** Shape $ (Value): string. */
    "return_line_item_id": string;
    /** Shape $ (Value): string. */
    "return_reason_handle": string;
    /** Shape $ (Value): string. */
    "return_reason_id": string;
    /** Shape $ (Value): string. */
    "return_reason_name": string;
    /**
     * Shape $ (Value): integer string. How much of the approved quantity the buyer must physically
     * send back; fractional quantities are not supported. Set 0 for a returnless refund, where the
     * buyer keeps the merchandise and the Return still settles the money. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64.
     */
    "return_required_quantity": `${bigint}`;
    /**
     * Shape $ (Value): Array of string. IDs of the resolutions that include this line, oldest
     * first, including failed and canceled resolutions. Shape $[] (Value): string.
     */
    "return_resolution_ids": Array<string>;
    /**
     * Shape $ (Value): {@link ReturnLineItemValue}. The value of a return line: unit price,
     * subtotal, discount, tax, and total.
     */
    "return_value": ReturnLineItemValue;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "review_required_quantity": `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link SelectedProductOption}. Shape $[] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** Shape $ (Value): string. */
    "sku"?: string;
    /**
     * Shape $ (Value): string. Value enum: "requested", "open", "completed", "declined",
     * "canceled".
     */
    "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
    /**
     * Shape $ (Value): Array of string. Always empty for buyer credentials. maxItems: 0. [] enum:
     * "cancel", "waive_inspection". Shape $[] (Value): string. Value enum: "cancel",
     * "waive_inspection".
     */
    "supported_actions": Array<"cancel" | "waive_inspection" | (string & {})>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
};
/**
 * Shape $ (Value): {@link BuyerReturnLineItemEligibility}. An item's Return eligibility, eligible
 * quantity, allowed resolution types, and eligibility reasons shown to the buyer.
 */
export type BuyerReturnLineItemEligibility = {
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Shape $ (Value): {@link ReturnLineItemDecisionProposal}. The pinned policy decision
     * recomputed for based_on_quantity. A decide with only approved_quantity commits these values.
     * Policy automatic resolution selects the policy automatic_resolution_type for policy_default
     * or the line's requested_resolution_type for buyer_requested. When buyer_requested has no
     * requested_resolution_type, the proposal still exists without automatic_resolution_type, so
     * resolution is manual. Manual policy resolution also has no automatic_resolution_type. An
     * unset release_timing is filled with after_inspection when merchandise and inspection are
     * required, after_receipt when merchandise is required without inspection, or after_approval
     * when no merchandise is required.
     */
    "decision_proposal"?: ReturnLineItemDecisionProposal;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "eligible_quantity": `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "evaluated_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /**
     * Shape $ (Value): string. The matched policy's declared exclusion reason. Present exactly
     * when reason is policy_ineligible. Value enum: "final_sale", "product_excluded",
     * "category_excluded", "market_restricted", "channel_restricted", "outside_return_window",
     * "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): Array of {@link ReturnPolicyAdjustmentProposal}. Shape $[] (Value): {@link
     * ReturnPolicyAdjustmentProposal}. A fee or credit a return policy proposes for a line,
     * calculated as a flat amount or a percent.
     */
    "policy_adjustment_proposals": Array<ReturnPolicyAdjustmentProposal>;
    /**
     * Shape $ (Value): string. Value enum: "eligible_under_policy", "manual_review_required",
     * "return_window_expired", "quantity_unavailable", "policy_ineligible",
     * "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy".
     */
    "reason": "eligible_under_policy"
        | "manual_review_required"
        | "return_window_expired"
        | "quantity_unavailable"
        | "policy_ineligible"
        | "resolution_not_allowed"
        | "reason_not_allowed"
        | "policy_conflict"
        | "no_matching_policy"
        | (string & {});
    /** Shape $ (Value): string. */
    "reason_message": string;
    /** Shape $ (Value): string.  Value enum: "eligible", "ineligible", "review_required". */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
};
/**
 * Shape $ (Value): {@link BuyerReturnLineItemModifier}. A selected modifier recorded on an item in
 * the buyer's Return, including its modifier group name and price.
 */
export type BuyerReturnLineItemModifier = {
    /** Shape $ (Value): object. maxProperties: 0. */
    "metadata": {};
    /** Shape $ (Value): string. */
    "modifier_group_name": string;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string.  Value enum: "per_item", "per_line". */
    "pricing_scope": "per_item" | "per_line" | (string & {});
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /** Shape $ (Value): boolean. */
    "show_on_fulfillment": boolean;
    /** Shape $ (Value): boolean. */
    "show_on_receipt": boolean;
    /** Shape $ (Value): string. */
    "text_value"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_delta_money": MoneyValue;
};
/** Shape $ (Value): {@link BuyerReturnListResponse}. A page of `BuyerReturn` objects. */
export type BuyerReturnListResponse = {
    /**
     * Shape $ (Value): Array of {@link BuyerReturn}. Shape $[] (Value): {@link BuyerReturn}. A
     * request to send purchased items back.
     */
    "data": Array<BuyerReturn>;
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
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link BuyerReturnPolicyEvaluation}. Return policy evaluation results shown to
 * the buyer, including eligibility and results for individual order lines.
 */
export type BuyerReturnPolicyEvaluation = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "evaluated_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /**
     * Shape $ (Value): Array of {@link BuyerReturnPolicyEvaluationLineItem}. Shape $[] (Value):
     * {@link BuyerReturnPolicyEvaluationLineItem}. An order line's eligibility, allowed
     * resolutions, return requirements, and catalog details from the buyer's Return policy
     * evaluation.
     */
    "line_items": Array<BuyerReturnPolicyEvaluationLineItem>;
    /**
     * Shape $ (Value): string. Value enum: "eligible_under_policy", "manual_review_required",
     * "return_window_expired", "quantity_unavailable", "policy_ineligible",
     * "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy".
     */
    "reason": "eligible_under_policy"
        | "manual_review_required"
        | "return_window_expired"
        | "quantity_unavailable"
        | "policy_ineligible"
        | "resolution_not_allowed"
        | "reason_not_allowed"
        | "policy_conflict"
        | "no_matching_policy"
        | (string & {});
    /** Shape $ (Value): string. */
    "reason_message": string;
    /** Shape $ (Value): string. */
    "return_policy_id"?: string;
    /** Shape $ (Value): string. */
    "return_policy_revision_id"?: string;
    /** Shape $ (Value): string.  Value enum: "eligible", "ineligible", "review_required". */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
};
/**
 * Shape $ (Value): {@link BuyerReturnPolicyEvaluationLineItem}. An order line's eligibility,
 * allowed resolutions, return requirements, and catalog details from the buyer's Return policy
 * evaluation.
 */
export type BuyerReturnPolicyEvaluationLineItem = {
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Shape $ (Value): Array of {@link BundleComponent}. Shape $[] (Value): {@link
     * BundleComponent}. An item included in a bundle.
     */
    "bundle_components": Array<BundleComponent>;
    /** Shape $ (Value): string. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "eligible_quantity": `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /** Shape $ (Value): string. */
    "fulfillment_id": string;
    /**
     * Shape $ (Value): {@link Image}. An image with its `url`, `width`, and `height`, and optional
     * `alt` text.
     */
    "image"?: Image;
    /**
     * Shape $ (Value): string. The matched policy's declared exclusion reason. Present exactly
     * when reason is policy_ineligible. Value enum: "final_sale", "product_excluded",
     * "category_excluded", "market_restricted", "channel_restricted", "outside_return_window",
     * "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {});
    /** Shape $ (Value): boolean. */
    "is_inspection_required": boolean;
    /** Shape $ (Value): boolean. */
    "is_merchandise_return_required": boolean;
    /**
     * Shape $ (Value): Array of {@link BuyerReturnLineItemModifier}. Shape $[] (Value): {@link
     * BuyerReturnLineItemModifier}. A selected modifier recorded on an item in the buyer's Return,
     * including its modifier group name and price.
     */
    "modifiers": Array<BuyerReturnLineItemModifier>;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "order_line_item_id": string;
    /**
     * Shape $ (Value): Array of {@link ReturnPolicyAdjustmentProposal}. Shape $[] (Value): {@link
     * ReturnPolicyAdjustmentProposal}. A fee or credit a return policy proposes for a line,
     * calculated as a flat amount or a percent.
     */
    "policy_adjustment_proposals": Array<ReturnPolicyAdjustmentProposal>;
    /** Shape $ (Value): string. */
    "product_id"?: string;
    /**
     * Shape $ (Value): string. Value enum: "eligible_under_policy", "manual_review_required",
     * "return_window_expired", "quantity_unavailable", "policy_ineligible",
     * "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy".
     */
    "reason": "eligible_under_policy"
        | "manual_review_required"
        | "return_window_expired"
        | "quantity_unavailable"
        | "policy_ineligible"
        | "resolution_not_allowed"
        | "reason_not_allowed"
        | "policy_conflict"
        | "no_matching_policy"
        | (string & {});
    /** Shape $ (Value): string. */
    "receiving_location_id"?: string;
    /**
     * Shape $ (Value): string. Release gate for every resolution type, including exchanges and
     * replacements. Released after the Return is approved. Released after the buyer hands back the
     * required merchandise. Released after the required merchandise is received. Released after
     * the required merchandise passes inspection. Held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing": "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "requested_quantity": `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link SelectedProductOption}. Shape $[] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** Shape $ (Value): string. */
    "sku"?: string;
    /** Shape $ (Value): string.  Value enum: "eligible", "ineligible", "review_required". */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "suggested_return_reason_ids": Array<string>;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
};
/**
 * Shape $ (Value): {@link BuyerReturnPreview}. A Return eligibility or resolution preview shown to
 * the buyer, selected by mode.
 */
export type BuyerReturnPreview = ({
    /**
     * Shape $ (Value): {@link BuyerReturnEligibilityPreview}. The buyer's Return eligibility
     * preview for an order, including eligible items and policy evaluation results.
     */
    "eligibility"?: BuyerReturnEligibilityPreview;
    /** Shape $ (Value): string.  Value enum: "eligibility", "resolution". */
    "mode": "eligibility" | "resolution" | (string & {});
    /**
     * Shape $ (Value): {@link BuyerReturnResolutionPreview}. The buyer's preview of a Return
     * resolution, including returned items, replacements, adjustments, and the amounts to refund
     * or collect.
     */
    "resolution"?: BuyerReturnResolutionPreview;
})
    & ((({
    /** Shape $ (Value): any.  Value enum: "eligibility". */
    "mode": "eligibility";
    /**
     * Shape $ (Value): {@link BuyerReturnEligibilityPreview}. The buyer's Return eligibility
     * preview for an order, including eligible items and policy evaluation results.
     */
    "eligibility": BuyerReturnEligibilityPreview;
}))
    | (({
    /** Shape $ (Value): any.  Value enum: "resolution". */
    "mode": "resolution";
    /**
     * Shape $ (Value): {@link BuyerReturnResolutionPreview}. The buyer's preview of a Return
     * resolution, including returned items, replacements, adjustments, and the amounts to refund
     * or collect.
     */
    "resolution": BuyerReturnResolutionPreview;
}))
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link BuyerReturnPreviewResponse}. A response containing `BuyerReturnPreview`
 * data.
 */
export type BuyerReturnPreviewResponse = {
    /**
     * Shape $ (Value): {@link BuyerReturnPreview}. A Return eligibility or resolution preview
     * shown to the buyer, selected by mode.
     */
    "data": BuyerReturnPreview;
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
 * Shape $ (Value): {@link BuyerReturnReplacementLineItemRequest}. A catalog variant or bundle and
 * quantity the buyer requests as a replacement in a Return resolution preview.
 */
export type BuyerReturnReplacementLineItemRequest = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1.
     */
    "quantity": `${bigint}`;
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
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link BuyerReturnReplacementLineItemRequestInput}. A catalog variant or bundle
 * and quantity the buyer requests as a replacement in a Return resolution preview.
 */
export type BuyerReturnReplacementLineItemRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: never;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1.
     */
    "quantity": `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
}
    | {
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1.
     */
    "quantity": `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: never;
};
/**
 * Shape $ (Value): {@link BuyerReturnResolution}. The refund, exchange, or other outcome of a
 * return.
 */
export type BuyerReturnResolution = {
    /**
     * Shape $ (Value): string. Value enum: "buyer_payment", "buyer_selection", "merchant_review",
     * "manual_release", "linked_effect_retry", "other".
     */
    "action_reason"?: "buyer_payment"
        | "buyer_selection"
        | "merchant_review"
        | "manual_release"
        | "linked_effect_retry"
        | "other"
        | (string & {});
    /** Shape $ (Value): string.  Value enum: "buyer", "merchant", "integration". */
    "action_required_by"?: "buyer" | "merchant" | "integration" | (string & {});
    /**
     * Shape $ (Value): Array of {@link BuyerReturnResolutionAdjustment}. Shape $[] (Value): {@link
     * BuyerReturnResolutionAdjustment}. An adjustment to a Return resolution shown to the buyer,
     * with its assessed amount, applied amount, status, and reason.
     */
    "adjustments": Array<BuyerReturnResolutionAdjustment>;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "buyer_payment_amount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Value returned to the buyer. For store_credit, the
     * value issued on new gift cards. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "buyer_refund_amount_money": MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "canceled_at"?: string;
    /**
     * Shape $ (Value): string. Value enum: "buyer_request", "merchant_request", "duplicate",
     * "expired", "created_in_error", "other".
     */
    "cancellation_reason"?: "buyer_request"
        | "merchant_request"
        | "duplicate"
        | "expired"
        | "created_in_error"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "confirmed_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "credit_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "deduction_money": MoneyValue;
    /**
     * Shape $ (Value): Array of {@link BuyerReturnResolutionExecutionBlocker}. Shape $[] (Value):
     * {@link BuyerReturnResolutionExecutionBlocker}. Work that must complete before a Return
     * resolution can finish.
     */
    "execution_blockers": Array<BuyerReturnResolutionExecutionBlocker>;
    /**
     * Shape $ (Value): string. Reason code for a failed Return resolution, when available.
     * refund_line_value_unavailable means another refund already returned part of an order line,
     * so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or
     * without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment
     * was canceled, so it won't be sent. gift_card_refund_destination_required means the original
     * gift card cannot accept the refund; retry with gift_card_refund_destination set to
     * new_gift_card. store_credit_unavailable means the original payment cannot fund store credit;
     * cancel the resolution and create a refund resolution. Value enum:
     * "gift_card_refund_destination_required", "store_credit_unavailable",
     * "refund_creation_failed", "refund_failed", "refund_line_value_unavailable",
     * "payment_intent_creation_failed", "payment_failed", "replacement_order_creation_failed",
     * "replacement_fulfillment_canceled", "resolution_effect_failed".
     */
    "failure_code"?: "gift_card_refund_destination_required"
        | "store_credit_unavailable"
        | "refund_creation_failed"
        | "refund_failed"
        | "refund_line_value_unavailable"
        | "payment_intent_creation_failed"
        | "payment_failed"
        | "replacement_order_creation_failed"
        | "replacement_fulfillment_canceled"
        | "resolution_effect_failed"
        | (string & {});
    /** Shape $ (Value): string. Explanation of a failed Return resolution, when available. */
    "failure_message"?: string;
    /** Shape $ (Value): string. When the resolution became fulfilled. Format: date-time. */
    "fulfilled_at"?: string;
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
     * Shape $ (Value): Array of {@link ReturnResolutionLineItem}. Shape $[] (Value): {@link
     * ReturnResolutionLineItem}. A return line included in a resolution, with its quantity and
     * returned total.
     */
    "line_items": Array<ReturnResolutionLineItem>;
    /** Shape $ (Value): object. Always empty for buyer credentials. maxProperties: 0. */
    "metadata": {
        [key: string]: unknown;
    };
    /**
     * Shape $ (Value): string. Value enum: "original_price", "current_price",
     * "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**
     * Shape $ (Value): Array of {@link ReturnReplacementLineItem}. Shape $[] (Value): {@link
     * ReturnReplacementLineItem}. A replacement item added to a return resolution, with its
     * quantity and price totals.
     */
    "replacement_line_items": Array<ReturnReplacementLineItem>;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "replacement_total_money": MoneyValue;
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
    /** Shape $ (Value): string. */
    "return_id": string;
    /** Shape $ (Value): string. */
    "return_resolution_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "returned_total_money": MoneyValue;
    /**
     * Shape $ (Value): string. fulfilled means the buyer has the value: every linked Refund
     * succeeded, any balance was collected, and any replacement Order's fulfillment_status is
     * fulfilled or not_applicable. Value enum: "proposed", "pending", "requires_action",
     * "fulfilled", "failed", "canceled".
     */
    "status": "proposed" | "pending" | "requires_action" | "fulfilled" | "failed" | "canceled" | (string & {});
    /**
     * Shape $ (Value): Array of string. Actions that can succeed now. Empty unless the parent
     * Return is open, except checkout_session. A failed resolution lists retry while it has a
     * failed effect and its failure code permits retry. It lists cancel when it never created a
     * Refund, PaymentIntent, or Order. [] enum: "checkout_session". Shape $[] (Value): string.
     * Value enum: "checkout_session".
     */
    "supported_actions": Array<"checkout_session" | (string & {})>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link BuyerReturnResolutionAdjustment}. An adjustment to a Return resolution
 * shown to the buyer, with its assessed amount, applied amount, status, and reason.
 */
export type BuyerReturnResolutionAdjustment = {
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
    /** Shape $ (Value): string. */
    "reason_message"?: string;
    /** Shape $ (Value): string. */
    "return_line_item_id"?: string;
    /** Shape $ (Value): string. */
    "return_resolution_adjustment_id": string;
    /** Shape $ (Value): string.  Value enum: "applied", "waived". */
    "status": "applied" | "waived" | (string & {});
    /** Shape $ (Value): string.  Value enum: "deduction", "credit". */
    "value_effect": "deduction" | "credit" | (string & {});
};
/**
 * Shape $ (Value): {@link BuyerReturnResolutionCheckoutSessionResponse}. A response containing
 * `BuyerCheckoutSessionWithSecret` data.
 */
export type BuyerReturnResolutionCheckoutSessionResponse = {
    /**
     * Shape $ (Value): {@link BuyerCheckoutSessionWithSecret}. The checkout session with its
     * checkout credential. For hosted checkout, send the buyer to url. For embedded checkout, pass
     * checkout_auth_token to your checkout client. A session in which a buyer completes an order's
     * payment.
     */
    "data": BuyerCheckoutSessionWithSecret;
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
 * Shape $ (Value): {@link BuyerReturnResolutionExecutionBlocker}. Work that must complete before a
 * Return resolution can finish.
 */
export type BuyerReturnResolutionExecutionBlocker = {
    /**
     * Shape $ (Value): string. handoff_pending: The buyer has not handed off the required
     * merchandise. receipt_pending: Required merchandise has not been received.
     * inspection_pending: Required inspection is incomplete. manual_release_pending: The merchant
     * must release the resolution. buyer_payment_pending: The buyer's balance has not been
     * collected. refund_pending: A linked Refund has not succeeded. replacement_order_pending: The
     * replacement Order has not been created. fulfillment_pending: The replacement Order, in
     * linked_resource, has units not yet fulfilled. Value enum: "handoff_pending",
     * "receipt_pending", "inspection_pending", "manual_release_pending", "buyer_payment_pending",
     * "refund_pending", "replacement_order_pending", "fulfillment_pending".
     */
    "code": "handoff_pending"
        | "receipt_pending"
        | "inspection_pending"
        | "manual_release_pending"
        | "buyer_payment_pending"
        | "refund_pending"
        | "replacement_order_pending"
        | "fulfillment_pending"
        | (string & {});
    /** Shape $ (Value): string. */
    "return_line_item_id"?: string;
};
/**
 * Shape $ (Value): {@link BuyerReturnResolutionPreview}. The buyer's preview of a Return
 * resolution, including returned items, replacements, adjustments, and the amounts to refund or
 * collect.
 */
export type BuyerReturnResolutionPreview = {
    /**
     * Shape $ (Value): Array of {@link BuyerReturnResolutionAdjustment}. Shape $[] (Value): {@link
     * BuyerReturnResolutionAdjustment}. An adjustment to a Return resolution shown to the buyer,
     * with its assessed amount, applied amount, status, and reason.
     */
    "adjustments": Array<BuyerReturnResolutionAdjustment>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0.
     */
    "based_on_return_version": `${bigint}`;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "buyer_payment_amount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "buyer_refund_amount_money": MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "calculated_at": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "credit_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "deduction_money": MoneyValue;
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItem}. Shape $[] (Value): {@link
     * ReturnResolutionLineItem}. A return line included in a resolution, with its quantity and
     * returned total.
     */
    "line_items": Array<ReturnResolutionLineItem>;
    /**
     * Shape $ (Value): Array of {@link ReturnReplacementLineItem}. Shape $[] (Value): {@link
     * ReturnReplacementLineItem}. A replacement item added to a return resolution, with its
     * quantity and price totals.
     */
    "replacement_line_items": Array<ReturnReplacementLineItem>;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "replacement_total_money": MoneyValue;
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
    /** Shape $ (Value): string. */
    "return_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "returned_total_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link BuyerReturnResolutionResponse}. A response containing
 * `BuyerReturnResolution` data.
 */
export type BuyerReturnResolutionResponse = {
    /**
     * Shape $ (Value): {@link BuyerReturnResolution}. The refund, exchange, or other outcome of a
     * return.
     */
    "data": BuyerReturnResolution;
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
/** Shape $ (Value): {@link BuyerReturnResponse}. A response containing `BuyerReturn` data. */
export type BuyerReturnResponse = {
    /** Shape $ (Value): {@link BuyerReturn}. A request to send purchased items back. */
    "data": BuyerReturn;
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
 * Shape $ (Value): {@link BuyerSavePaymentMethodResponse}. A response containing
 * `BuyerPaymentMethodWithSetup` data.
 */
export type BuyerSavePaymentMethodResponse = {
    /**
     * Shape $ (Value): {@link BuyerPaymentMethodWithSetup}. The saved payment method, with
     * `client_setup` when the buyer must still complete processor setup before the payment method
     * can be used. A customer's saved payment details.
     */
    "data": BuyerPaymentMethodWithSetup;
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
 * Shape $ (Value): {@link BuyerSelectableOrderPaymentIntent}. A payment intent a buyer can pay on
 * an order, with its status, amounts, payment collection details, and last payment error.
 */
export type BuyerSelectableOrderPaymentIntent = {
    /**
     * Shape $ (Value): {@link MoneyValue}. The amount requested from the buyer, including any
     * tip_money. Capturing doesn't change it: after a partial capture it still shows the requested
     * amount, and captured_money shows what was collected. On a standalone payment intent, PATCH
     * can change it only before the first confirmation attempt. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link BuyerPaymentErrorSummary}. Most recent payment failure, when one is
     * recorded. Why a payment attempt failed: a normalized `code`, a message, when it failed, and
     * recovery guidance.
     */
    "last_payment_error"?: BuyerPaymentErrorSummary;
    /**
     * Shape $ (Value): {@link BuyerPaymentCollection}. Client setup details for collecting this
     * payment. What a client needs to collect payment for a buyer's order. The `stripe` field
     * holds the Stripe values.
     */
    "payment_collection"?: BuyerPaymentCollection;
    /** Shape $ (Value): string. Flint payment intent ID. */
    "payment_intent_id": string;
    /**
     * Shape $ (Value): string. Lifecycle status. requires_payment_method covers both a new payment
     * intent and one whose last attempt failed, so read last_payment_error with it. succeeded,
     * canceled, and expired are final. Refunds and disputes never change status. Value enum:
     * "requires_payment_method", "requires_confirmation", "requires_action", "processing",
     * "requires_capture", "canceled", "succeeded", "expired".
     */
    "status": "requires_payment_method"
        | "requires_confirmation"
        | "requires_action"
        | "processing"
        | "requires_capture"
        | "canceled"
        | "succeeded"
        | "expired"
        | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Portion of this payment's amount allocated to a tip.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tip_money": MoneyValue;
};
/** Shape $ (Value): {@link BuyerShipment}. A shipment carrying fulfilled order items. */
export type BuyerShipment = {
    /** Shape $ (Value): string. Creation timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Shape $ (Value): string. When the shipment was delivered, in RFC3339 format. Format:
     * date-time.
     */
    "delivered_at"?: string;
    /**
     * Shape $ (Value): string. Whether the shipment sends items to the buyer or returns items to
     * the merchant. Value enum: "outbound", "return".
     */
    "direction": "outbound" | "return" | (string & {});
    /** Shape $ (Value): string. Fulfillment associated with this shipment. */
    "fulfillment_id": string;
    /**
     * Shape $ (Value): string. Carrier handoff timestamp for outbound and return shipments, using
     * the recorded shipped_at when no separate handoff timestamp exists. For return shipments,
     * this can satisfy an after_handoff execution gate for the declared return_line_items. Format:
     * date-time.
     */
    "handed_off_at"?: string;
    /** Shape $ (Value): string. Order whose items are transported by the shipment. */
    "order_id": string;
    /**
     * Shape $ (Value): integer. Total number of packages attached to the shipment, including
     * voided packages. Format: int32. minimum: 0.
     */
    "package_count": number;
    /**
     * Shape $ (Value): string. Return associated with this shipment, when its direction is return.
     */
    "return_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequest}. Return lines and
     * quantities allocated to this return shipment. Shape $[] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and the quantity placed in a return shipment
     * or package.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
    /** Shape $ (Value): string. Stable identifier of the shipment. */
    "shipment_id": string;
    /**
     * Shape $ (Value): string. When the shipment was shipped, in RFC3339 format. Format:
     * date-time.
     */
    "shipped_at"?: string;
    /**
     * Shape $ (Value): string. Read-only shipment state derived from the shipment's package
     * states. An empty shipment remains a created draft. - `created`: The shipment leg exists but
     * has not been packed or handed off. - `packed`: The shipment leg is packed and awaiting
     * carrier handoff. - `shipped`: The shipment leg was handed to the carrier. - `in_transit`:
     * The carrier is moving the shipment through its network. - `out_for_delivery`: The shipment
     * is on its final delivery route. - `delivered`: The carrier reported successful delivery. -
     * `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the
     * carrier instructions before retrying delivery. - `exception`: A carrier exception is
     * blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was
     * returned toward or to its origin. - `voided`: The shipment was voided and will not continue
     * through delivery. Value enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     */
    "status": "created"
        | "packed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided"
        | (string & {});
    /** Shape $ (Value): string. Last update timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Monotonic shipment version for expected_version checks. Use
     * an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link BuyerShipmentListResponse}. A page of `BuyerShipment` objects. */
export type BuyerShipmentListResponse = {
    /**
     * Shape $ (Value): Array of {@link BuyerShipment}. Shape $[] (Value): {@link BuyerShipment}. A
     * shipment carrying fulfilled order items.
     */
    "data": Array<BuyerShipment>;
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
    "request_id"?: string;
};
/** Shape $ (Value): {@link BuyerShipmentResponse}. A response containing `BuyerShipment` data. */
export type BuyerShipmentResponse = {
    /** Shape $ (Value): {@link BuyerShipment}. A shipment carrying fulfilled order items. */
    "data": BuyerShipment;
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
 * Shape $ (Value): {@link BuyerSkipCapability}. Whether buyers may skip renewals. Send at least
 * one field. minProperties: 1.
 */
export type BuyerSkipCapability = {
    /**
     * Shape $ (Value): boolean. Whether buyers may skip a renewal. Merchant credentials may always
     * skip an eligible cycle. Default: true.
     */
    "enabled"?: boolean;
    /**
     * Shape $ (Value): integer. Maximum consecutive cycles a buyer may skip. Omit it for no limit.
     * The count resets after a paid renewal. Format: int32. minimum: 1. maximum: 12.
     */
    "max_consecutive_skips"?: number;
};
/**
 * Shape $ (Value): {@link BuyerSkipCapabilityInput}. Whether buyers may skip renewals. Send at
 * least one field. minProperties: 1.
 */
export type BuyerSkipCapabilityInput = BuyerSkipCapability;
/** Shape $ (Value): {@link BuyerSubscription}. A customer's recurring purchase. */
export type BuyerSubscription = {
    /**
     * Shape $ (Value): boolean. True while an active or trialing subscription on an external
     * billing schedule has no next billing date.
     */
    "awaiting_billing_schedule"?: boolean;
    /**
     * Shape $ (Value): integer. UTC day of the month used for monthly and yearly billing. Applies
     * only to Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
     */
    "billing_anchor_day"?: number;
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /**
     * Shape $ (Value): integer. Number of billing_interval units between charges. Changes with
     * billing_interval. Format: int32.
     */
    "billing_interval_count": number;
    /**
     * Shape $ (Value): Array of {@link SubscriptionIntervalOption}. maxItems: 12. uniqueItems:
     * true. Shape $[] (Value): {@link SubscriptionIntervalOption}. A billing interval, such as
     * every 2 months, offered by a subscription plan.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOption>;
    /**
     * Shape $ (Value): string. Who supplies billing dates: flint advances the schedule after each
     * paid renewal; external uses dates you supply. Change it with billing_schedule on PATCH
     * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
     */
    "billing_schedule_owner": "flint" | "external" | (string & {});
    /**
     * Shape $ (Value): Array of {@link BuyerAction}. What the buyer can do with the subscription,
     * in this order: cancel, pause, resume, reactivate, update_payment_method, retry_payment,
     * update_delivery, skip, update_billing_interval, update_quantity, swap_items, then renew,
     * under the store's buyer policy. The available cancel and pause actions carry the choices
     * they accept. A buyer's read or change through a customer session on /v1/me, or in Flint's
     * buyer account, lists all twelve every time; a merchant read gets an empty list.
     * update_payment_method is required while a payment is past due, due by next_retry_at when a
     * retry is scheduled, and when the card expires before next_billing_at, due by then. Example:
     * []. Shape $[] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
     * subscription, invoice or return they read through /v1/me. Show the actions with is_required
     * as what needs the buyer's attention, and the first available action as the primary action on
     * the resource's page in your account.
     */
    "buyer_actions": Array<BuyerAction>;
    /**
     * Shape $ (Value): boolean. True when the subscription is scheduled to cancel at
     * scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo
     * with PATCH and cancel_at_period_end false.
     */
    "cancel_at_period_end": boolean;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "canceled_at"?: string;
    /**
     * Shape $ (Value): {@link BuyerSubscriptionCancellationDetails}. Who asked to cancel, when,
     * and why. Present once a cancellation is requested, whether it takes effect at the end of the
     * billing period or right away. Omitted when no one asked, and removed when a scheduled
     * cancellation is undone. See cancellation_reason for voluntary and payment-related
     * cancellations. The cancellation request behind a scheduled or completed cancellation.
     */
    "cancellation_details"?: BuyerSubscriptionCancellationDetails;
    /**
     * Shape $ (Value): string. Why the subscription is canceled or scheduled to cancel. Uses
     * cancellation_details.requested_by when recorded, payment_failed for a canceled subscription
     * without a requester, and other for a scheduled cancellation without a requester. Omitted
     * otherwise. Value enum: "buyer", "merchant", "payment_failed", "other".
     */
    "cancellation_reason"?: "buyer" | "merchant" | "payment_failed" | "other" | (string & {});
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 0.
     */
    "completed_cycles": `${bigint}`;
    /**
     * Shape $ (Value): string. When the recorded contract term ends. Does not move when the
     * subscription pauses or changes plan. Flint does not stop the buyer from canceling earlier.
     * Format: date-time.
     */
    "contract_end_at"?: string;
    /**
     * Shape $ (Value): string. When the recorded contract term started. Does not move when the
     * subscription pauses or changes plan. Format: date-time.
     */
    "contract_start_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "current_period_end_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "current_period_start_at"?: string;
    /** Shape $ (Value): string. */
    "customer_id": string;
    /**
     * Shape $ (Value): {@link SubscriptionDelivery}. Saved delivery preference with the current
     * delivery method display. Write responses use the same display as GET: fixed shipping
     * reflects the current method configuration, and quoted shipping shows the last paid shipping
     * amount when available. A subscription's saved delivery preference: method, destination,
     * recipient, shipping cost, and who last changed it.
     */
    "delivery"?: SubscriptionDelivery;
    /**
     * Shape $ (Value): {@link SubscriptionDeliveryHold}. Current delivery issue that blocks
     * collection. Mutually exclusive with upcoming_delivery_hold. A hold on a subscription's
     * deliveries because its delivery method or destination no longer works, and who can fix it.
     */
    "delivery_hold"?: SubscriptionDeliveryHold;
    /**
     * Shape $ (Value): {@link MoneyValue}. The fee in the recorded contract terms. Present
     * whenever those terms include a fee. It applies only to a cancellation before
     * contract_end_at. Flint never charges it. Later plan changes do not change this fee. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "early_termination_fee_money"?: MoneyValue;
    /**
     * Shape $ (Value): object. Why the latest subscription renewal payment failed. Omits merchant
     * remediation and sensitive decline signals. Shape $.code (Required): string. Flint-normalized
     * payment failure code. Unknown provider values are returned as payment_failed. Value enum:
     * "card_declined", "insufficient_funds", "bank_account_closed", "bank_account_not_found",
     * "bank_debit_not_authorized", "bank_account_restricted", "bank_debit_limit_exceeded",
     * "authentication_required", "payment_blocked", "expired_card", "incorrect_cvc",
     * "processing_error", "payment_method_unavailable", "payment_method_declined",
     * "payment_not_completed", "payment_action_expired", "payment_method_temporarily_unavailable",
     * "payment_failed". Shape $.failed_at (Required): string. Time the payment attempt concluded
     * in failure. Format: date-time. Shape $.message (Required): string. Flint-authored buyer-safe
     * payment failure message.
     */
    "last_payment_error"?: {
        /**
         * Shape $ (Value): string. Flint-normalized payment failure code. Unknown provider values
         * are returned as payment_failed. Value enum: "card_declined", "insufficient_funds",
         * "bank_account_closed", "bank_account_not_found", "bank_debit_not_authorized",
         * "bank_account_restricted", "bank_debit_limit_exceeded", "authentication_required",
         * "payment_blocked", "expired_card", "incorrect_cvc", "processing_error",
         * "payment_method_unavailable", "payment_method_declined", "payment_not_completed",
         * "payment_action_expired", "payment_method_temporarily_unavailable", "payment_failed".
         */
        "code": "card_declined"
            | "insufficient_funds"
            | "bank_account_closed"
            | "bank_account_not_found"
            | "bank_debit_not_authorized"
            | "bank_account_restricted"
            | "bank_debit_limit_exceeded"
            | "authentication_required"
            | "payment_blocked"
            | "expired_card"
            | "incorrect_cvc"
            | "processing_error"
            | "payment_method_unavailable"
            | "payment_method_declined"
            | "payment_not_completed"
            | "payment_action_expired"
            | "payment_method_temporarily_unavailable"
            | "payment_failed"
            | (string & {});
        /**
         * Shape $ (Value): string. Time the payment attempt concluded in failure. Format:
         * date-time.
         */
        "failed_at": string;
        /** Shape $ (Value): string. Flint-authored buyer-safe payment failure message. */
        "message": string;
    };
    /**
     * Shape $ (Value): Array of {@link BuyerSubscriptionLineItem}. What each renewal bills. Plan
     * edits do not change it. Adding, changing or swapping a line takes that variant's current
     * catalog price, which then stays until the line changes again. Shape $[] (Value): {@link
     * BuyerSubscriptionLineItem}. An item included in a customer's recurring purchase.
     */
    "line_items": Array<BuyerSubscriptionLineItem>;
    /** Shape $ (Value): string. */
    "merchant_id"?: string;
    /**
     * Shape $ (Value): string. The billing date whose payment failed, as an RFC3339 timestamp.
     * Present only while status is past_due. Format: date-time.
     */
    "missed_billing_at"?: string;
    /**
     * Shape $ (Value): string. When Flint next starts a scheduled renewal charge, as an RFC3339
     * timestamp. Present only while a trialing or active subscription has a billing date and isn't
     * set to cancel at the end of its period. Absent when no renewal is scheduled: a paused
     * subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date
     * in missed_billing_at and retries at next_retry_at, an incomplete one retries at
     * next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at
     * scheduled_cancel_at, and an external schedule awaiting a date reports
     * awaiting_billing_schedule. Format: date-time.
     */
    "next_billing_at"?: string;
    /**
     * Shape $ (Value): string or null. Recorded automatic payment retry time. Null when no retry
     * time is available. Format: date-time.
     */
    "next_retry_at": string | null;
    /**
     * Shape $ (Value): string. ID of the paid renewal order whose shipment has not been
     * dispatched. It keeps its committed delivery destination after preference changes and
     * cancellation. Absent when no such renewal order exists. Only renewal orders count; the
     * signup order is not included.
     */
    "open_renewal_order_id"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Unpaid balance of the failed renewal order, including
     * tax, shipping and discounts, after payments and credits. Present only while status is
     * past_due and a positive balance remains. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "outstanding_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Why the subscription is paused: merchant for a pause made with your
     * API key or dashboard, buyer for the buyer's own pause, delivery_action_required for a pause
     * during or after a delivery hold, and payment_failed when renewal payment retries ran out and
     * your dunning settings pause the subscription. Omitted when the subscription is not paused.
     * Value enum: "buyer", "delivery_action_required", "merchant", "payment_failed".
     */
    "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "paused_at"?: string;
    /** Shape $ (Value): string. The saved payment method renewals charge. Change it with PATCH. */
    "payment_method_id": string;
    /**
     * Shape $ (Value): Array of {@link SubscriptionPromotion}. Recurring promotions applying to
     * the next charged cycle. Empty when none apply; signup-only and exhausted promotions are
     * excluded. Shape $[] (Value): {@link SubscriptionPromotion}. A recurring promotion applied to
     * a subscription, including its recurrence and remaining discounted cycles.
     */
    "promotions": Array<SubscriptionPromotion>;
    /**
     * Shape $ (Value): integer. How many of each line the subscription bills each period, as a
     * whole number; fractional quantities are not supported. A change applies from the next
     * renewal that has not been paid. Format: int32.
     */
    "quantity": number;
    /**
     * Shape $ (Value): Array of integer. maxItems: 10. uniqueItems: true. Shape $[] (Value):
     * integer. minimum: 1. maximum: 100.
     */
    "quantity_options"?: Array<number>;
    /**
     * Shape $ (Value): {@link MoneyValue} or null. What one billing period's items cost before
     * discounts, shipping, and tax: each line's price with modifiers, times quantity. It changes
     * when items, quantity, or the plan change; editing the plan doesn't change it. For the next
     * charge, use a subscription preview in next_renewal mode. Shape $.anyOf[1] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. Shape $.anyOf[2] (Value): null.
     */
    "recurring_subtotal_money": ((MoneyValue) | (null));
    /**
     * Shape $ (Value): string or null. When Flint accepted a pending resume request. Set only
     * while paused with a resume Flint has not applied yet. Clears when Flint resumes the
     * subscription or refuses the request. Format: date-time.
     */
    "resume_requested_at": string | null;
    /**
     * Shape $ (Value): string or null. When the scheduled cancellation takes effect: trial_end_at
     * while trialing, current_period_end_at while active, or next_retry_at while past_due. Null
     * when cancel_at_period_end is false or no cancellation time is available. Format: date-time.
     */
    "scheduled_cancel_at": string | null;
    /**
     * Shape $ (Value): string or null. When a pause with a length (pause_duration_cycles) resumes
     * on its own: that many billing intervals after paused_at. Null when the subscription is not
     * paused or the pause has no length, such as a pause until you resume it or the pause Flint
     * starts when a delivery hold runs out. Format: date-time.
     */
    "scheduled_resume_at": string | null;
    /**
     * Shape $ (Value): {@link BuyerSubscriptionServiceLocation}. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. The customer address
     * reference or address used as the buyer's subscription service location.
     */
    "service_location"?: BuyerSubscriptionServiceLocation;
    /**
     * Shape $ (Value): string. When a scheduled start's first billing period begins. Present only
     * until that first payment succeeds. Format: date-time.
     */
    "starts_at"?: string;
    /**
     * Shape $ (Value): string. Value enum: "trialing", "active", "paused", "past_due", "canceled",
     * "incomplete", "scheduled".
     */
    "status": "trialing"
        | "active"
        | "paused"
        | "past_due"
        | "canceled"
        | "incomplete"
        | "scheduled"
        | (string & {});
    /** Shape $ (Value): string. */
    "subscription_id": string;
    /**
     * Shape $ (Value): {@link BuyerExpandedSubscriptionPlanSummary} or null. Shape $.anyOf[1]
     * (Value): {@link BuyerExpandedSubscriptionPlanSummary}. A subscription plan expanded on a
     * buyer's order: billing interval, setup fee, trial length, status, and line items. Shape
     * $.anyOf[2] (Value): null.
     */
    "subscription_plan"?: ((BuyerExpandedSubscriptionPlanSummary) | (null));
    /**
     * Shape $ (Value): string. Subscription plan ID. Omitted when terms_type is
     * subscription_offer.
     */
    "subscription_plan_id"?: string;
    /**
     * Shape $ (Value): string. Terms come from the subscription plan in subscription_plan_id, or
     * from subscription offers identified on each offer line by subscription_offer_id. Value enum:
     * "subscription_plan", "subscription_offer".
     */
    "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "trial_end_at"?: string;
    /**
     * Shape $ (Value): {@link SubscriptionUpcomingDeliveryHold}. Delivery issue forecast for the
     * next renewal at renewal_at. Mutually exclusive with delivery_hold. A delivery problem
     * detected for an upcoming renewal that will hold the subscription's delivery, and who can fix
     * it.
     */
    "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 0.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link BuyerSubscriptionCancellationDetails}. The cancellation request behind a
 * scheduled or completed cancellation.
 */
export type BuyerSubscriptionCancellationDetails = {
    /**
     * Shape $ (Value): string. The reason the requester chose. Omitted when none was given. Value
     * enum: "too_expensive", "missing_features", "switched_service", "unused", "customer_service",
     * "too_complex", "low_quality", "other".
     */
    "reason_code"?: "too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. When the cancellation was requested. Format: date-time. */
    "requested_at": string;
    /**
     * Shape $ (Value): string. buyer: the buyer, in Flint's buyer account or with a customer
     * session. merchant: a merchant credential, such as an API key or the dashboard. Value enum:
     * "buyer", "merchant".
     */
    "requested_by": "buyer" | "merchant" | (string & {});
};
/**
 * Shape $ (Value): {@link BuyerSubscriptionLineItem}. An item included in a customer's recurring
 * purchase.
 */
export type BuyerSubscriptionLineItem = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "base_subtotal_money": MoneyValue;
    /** Shape $ (Value): string. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): Array of {@link CategoryReference}. Shape $[] (Value): {@link
     * CategoryReference}. A reference to a product category by ID, handle, and name.
     */
    "categories"?: Array<CategoryReference>;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link Image}. An image with its `url`, `width`, and `height`, and optional
     * `alt` text.
     */
    "image"?: Image;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "modifier_total_money": MoneyValue;
    /**
     * Shape $ (Value): Array of {@link BuyerOrderLineItemModifier}. Shape $[] (Value): {@link
     * BuyerOrderLineItemModifier}. A modifier on a buyer's order line item, either a catalog
     * modifier or entered text, with its quantity and price change.
     */
    "modifiers"?: Array<BuyerOrderLineItemModifier>;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "product_id"?: string;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32.
     */
    "quantity": number;
    /**
     * Shape $ (Value): Array of {@link SelectedProductOption}. Shape $[] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    /** Shape $ (Value): string. */
    "sku"?: string;
    /** Shape $ (Value): string.  Value enum: "variant", "bundle". */
    "source_type"?: "variant" | "bundle" | (string & {});
    /** Shape $ (Value): string. */
    "subscription_line_item_id"?: string;
    /** Shape $ (Value): string. */
    "subscription_offer_id"?: string;
    /** Shape $ (Value): string. */
    "subscription_plan_line_item_id"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
};
/**
 * Shape $ (Value): {@link BuyerSubscriptionListResponse}. A page of `BuyerSubscription` objects.
 */
export type BuyerSubscriptionListResponse = {
    /**
     * Shape $ (Value): Array of {@link BuyerSubscription}. Shape $[] (Value): {@link
     * BuyerSubscription}. A customer's recurring purchase.
     */
    "data": Array<BuyerSubscription>;
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
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link BuyerSubscriptionPaymentRetry}. A retry of a past-due payment on the
 * buyer's subscription. Includes, when available, the buyer's order and a failure they can act on.
 * Omits the store's idempotency keys and payment attempt IDs.
 */
export type BuyerSubscriptionPaymentRetry = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "completed_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): {@link PaymentErrorSummary}. A summary of why a payment attempt failed,
     * with a normalized error code, a message, the failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /** Shape $ (Value): string. */
    "order_id"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "started_at"?: string;
    /** Shape $ (Value): string.  Value enum: "pending", "processing", "succeeded", "failed". */
    "status": "pending" | "processing" | "succeeded" | "failed" | (string & {});
    /** Shape $ (Value): string. */
    "subscription_id": string;
    /** Shape $ (Value): string. */
    "subscription_payment_retry_id": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
};
/**
 * Shape $ (Value): {@link BuyerSubscriptionPaymentRetryResponse}. A response containing
 * `BuyerSubscriptionPaymentRetry` data.
 */
export type BuyerSubscriptionPaymentRetryResponse = {
    /**
     * Shape $ (Value): {@link BuyerSubscriptionPaymentRetry}. A retry of a past-due payment on the
     * buyer's subscription. Includes, when available, the buyer's order and a failure they can act
     * on. Omits the store's idempotency keys and payment attempt IDs.
     */
    "data": BuyerSubscriptionPaymentRetry;
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
 * Shape $ (Value): {@link BuyerSubscriptionPlanLineItem}. A line item of a subscription plan as a
 * buyer sees it: the product, bundle, or variant, quantity, unit price, and swap variants.
 */
export type BuyerSubscriptionPlanLineItem = ({
    /** Shape $ (Value): string. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): Array of {@link CategoryReference}. Shape $[] (Value): {@link
     * CategoryReference}. A reference to a product category by ID, handle, and name.
     */
    "categories"?: Array<CategoryReference>;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link Image}. An image with its `url`, `width`, and `height`, and optional
     * `alt` text.
     */
    "image"?: Image;
    /** Shape $ (Value): string. */
    "name"?: string;
    /** Shape $ (Value): string. */
    "product_id"?: string;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32.
     */
    "quantity": number;
    /**
     * Shape $ (Value): Array of {@link SelectedProductOption}. Shape $[] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    /** Shape $ (Value): string. */
    "sku"?: string;
    /** Shape $ (Value): string. */
    "subscription_plan_line_item_id": string;
    /**
     * Shape $ (Value): Array of string. maxItems: 25. uniqueItems: true. Shape $[] (Value):
     * string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids": Array<string>;
    /**
     * Shape $ (Value): Array of {@link SubscriptionPlanSwapVariant}. Current sellable alternatives
     * in swap_variant_ids order, excluding the line's own variant and variants priced in a
     * different currency. Present on variant lines, including an empty array. maxItems: 25. Shape
     * $[] (Value): {@link SubscriptionPlanSwapVariant}. A variant a subscriber can swap to on a
     * plan line, with its name, options, and price.
     */
    "swap_variants"?: Array<SubscriptionPlanSwapVariant>;
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
    /** Shape $ (Value): string. */
    "variant_id"?: string;
})
    & ((({
    /** Shape $ (Value): string. */
    "variant_id": string;
}))
    | (({
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
}))
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link BuyerSubscriptionPreview}. Available subscription delivery methods shown
 * to the buyer.
 */
export type BuyerSubscriptionPreview = {
    /**
     * Shape $ (Value): {@link SubscriptionAddressVerification}. The verification state of a
     * subscription's delivery address: `verified`, `unverified`, `needs_review`, or
     * `unverifiable`.
     */
    "address_verification"?: SubscriptionAddressVerification;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency"?: string;
    /**
     * Shape $ (Value): Array of {@link SubscriptionDeliveryOption}. Present in delivery_options
     * mode ([] when no method applies); absent in create mode. Shape $[] (Value): {@link
     * SubscriptionDeliveryOption}. A delivery method offered for a subscription, with its
     * availability, price, and the reason it is unavailable if it is.
     */
    "delivery_methods"?: Array<SubscriptionDeliveryOption>;
    /**
     * Shape $ (Value): {@link Address}. A postal address, as returned on customers, invoices, tax
     * locations, and fulfillment recipients.
     */
    "destination_address"?: Address;
    /**
     * Shape $ (Value): string. Always delivery_options for buyer previews. Value enum:
     * "delivery_options".
     */
    "mode": "delivery_options" | (string & {});
    /** Shape $ (Value): string. */
    "subscription_id"?: string;
};
/**
 * Shape $ (Value): {@link BuyerSubscriptionPreviewResponse}. The response for: Preview
 * subscription.
 */
export type BuyerSubscriptionPreviewResponse = {
    /**
     * Shape $ (Value): {@link BuyerSubscriptionPreview} or {@link SubscriptionRenewalPreview}.
     * Shape $.oneOf[1] (Value): {@link BuyerSubscriptionPreview}. Available subscription delivery
     * methods shown to the buyer. Shape $.oneOf[2] (Value): {@link SubscriptionRenewalPreview}. A
     * preview of a subscription's next renewal and its estimated pricing.
     */
    "data": ((BuyerSubscriptionPreview) | (SubscriptionRenewalPreview) | (Record<string, unknown>));
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
 * Shape $ (Value): {@link BuyerSubscriptionRenewalResult}. The subscription is the primary
 * resource and expected_version target; the result uses the same subscription and order fields as
 * the corresponding /v1/me reads.
 */
export type BuyerSubscriptionRenewalResult = {
    /**
     * Shape $ (Value): {@link BuyerOrder}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "order": BuyerOrder;
    /**
     * Shape $ (Value): {@link BuyerOrderPaymentAttempt} or null. Shape $.anyOf[1] (Value): {@link
     * BuyerOrderPaymentAttempt}. An attempt to pay an order. Shape $.anyOf[2] (Value): null.
     */
    "order_payment_attempt": ((BuyerOrderPaymentAttempt) | (null));
    /** Shape $ (Value): {@link BuyerSubscription}. A customer's recurring purchase. */
    "subscription": BuyerSubscription;
};
/**
 * Shape $ (Value): {@link BuyerSubscriptionRenewalResultResponse}. A response containing
 * `BuyerSubscriptionRenewalResult` data.
 */
export type BuyerSubscriptionRenewalResultResponse = {
    /**
     * Shape $ (Value): {@link BuyerSubscriptionRenewalResult}. The subscription is the primary
     * resource and expected_version target; the result uses the same subscription and order fields
     * as the corresponding /v1/me reads.
     */
    "data": BuyerSubscriptionRenewalResult;
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
 * Shape $ (Value): {@link BuyerSubscriptionResponse}. A response containing `BuyerSubscription`
 * data.
 */
export type BuyerSubscriptionResponse = {
    /** Shape $ (Value): {@link BuyerSubscription}. A customer's recurring purchase. */
    "data": BuyerSubscription;
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
 * Shape $ (Value): {@link BuyerSubscriptionServiceLocation}. The customer address reference or
 * address used as the buyer's subscription service location.
 */
export type BuyerSubscriptionServiceLocation = {
    /**
     * Shape $ (Value): {@link Address}. A postal address, as returned on customers, invoices, tax
     * locations, and fulfillment recipients.
     */
    "address"?: Address;
};
/**
 * Shape $ (Value): {@link BuyerTip}. A tip on a buyer's order, with its requested, effective,
 * settled, and refunded amounts and how it was allocated to payments.
 */
export type BuyerTip = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "effective_amount_money": MoneyValue;
    /** Shape $ (Value): string. */
    "name"?: string;
    /** Shape $ (Value): string. */
    "order_tip_id": string;
    /**
     * Shape $ (Value): Array of {@link TipPaymentIntentAllocation}. Shape $[] (Value): {@link
     * TipPaymentIntentAllocation}. The part of a tip paid through one payment intent.
     */
    "payment_intent_allocations": Array<TipPaymentIntentAllocation>;
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent"?: number;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "settled_amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. Value enum: "requested", "settled", "partially_refunded",
     * "refunded", "canceled".
     */
    "status": "requested" | "settled" | "partially_refunded" | "refunded" | "canceled" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): Array of {@link TipValueSettlementAllocation}. Shape $[] (Value): {@link
     * TipValueSettlementAllocation}. The part of a tip paid through one value settlement.
     */
    "value_settlement_allocations": Array<TipValueSettlementAllocation>;
};
/**
 * Shape $ (Value): {@link CallerSuppliedDeliveryMethodResultRequest}. The rate result you supply
 * for one delivery method and choice group when creating a delivery quote with caller-supplied
 * pricing.
 */
export type CallerSuppliedDeliveryMethodResultRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_choice_group_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_revision_id": string;
    /**
     * Shape $ (Value): {@link CallerSuppliedDeliveryOutcomeRequest}. Your outcome for a
     * caller-priced delivery method, selected by `type`: available with a price and windows,
     * unavailable with a reason, or cannot calculate.
     */
    "outcome": CallerSuppliedDeliveryOutcomeRequest;
};
/**
 * Shape $ (Value): {@link CallerSuppliedDeliveryMethodResultRequestInput}. The rate result you
 * supply for one delivery method and choice group when creating a delivery quote with
 * caller-supplied pricing.
 */
export type CallerSuppliedDeliveryMethodResultRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_choice_group_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_revision_id": string;
    /**
     * Shape $ (Value): {@link CallerSuppliedDeliveryOutcomeRequestInput}. Your outcome for a
     * caller-priced delivery method, selected by `type`: available with a price and windows,
     * unavailable with a reason, or cannot calculate.
     */
    "outcome": CallerSuppliedDeliveryOutcomeRequestInput;
};
/**
 * Shape $ (Value): {@link CallerSuppliedDeliveryOutcomeRequest}. Your outcome for a caller-priced
 * delivery method, selected by `type`: available with a price and windows, unavailable with a
 * reason, or cannot calculate.
 */
export type CallerSuppliedDeliveryOutcomeRequest = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string;
    /**
     * Shape $ (Value): string. Why Flint could not calculate the method and the action that can
     * make calculation succeed. - `dependency_failure`: Retry after the dependent service
     * recovers. - `timeout`: Retry after the timed-out dependency recovers. -
     * `malformed_response`: Fix the callback response so it matches the documented response
     * schema, then retry. - `pricing_failure`: Fix the method pricing configuration or matching
     * rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested
     * window, then retry. - `geography_failure`: Fix the destination, origin, or geographic
     * configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment,
     * then retry. - `address_verification_failed`: Correct the address fields rejected by
     * verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address,
     * or retry when address verification is available. Value enum: "dependency_failure",
     * "timeout", "malformed_response", "pricing_failure", "schedule_failure", "geography_failure",
     * "routing_failure", "address_verification_failed", "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     * Shape $ (Value): Array of {@link DeliveryWindowRequest}. Shape $[] (Value): {@link
     * DeliveryWindowRequest}. A delivery window you supply in a caller-supplied delivery outcome,
     * with its time range, price, and the last moment a buyer can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequest>;
    /** Shape $ (Value): boolean. */
    "retryable"?: boolean;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "selection_guarantee_expires_at"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "service_level"?: string;
    /** Shape $ (Value): string.  Value enum: "available", "unavailable", "cannot_calculate". */
    "type": "available" | "unavailable" | "cannot_calculate" | (string & {});
    /**
     * Shape $ (Value): string. Why the method is unavailable and the action that can make it
     * eligible. - `destination_not_served`: Use a destination covered by this method or choose
     * another method. - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`:
     * Choose an origin or method backed by available inventory. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string;
})
    & ((Exclude<CallerSuppliedDeliveryOutcomeRequestAvailable & object, readonly unknown[]>)
    | (Exclude<CallerSuppliedDeliveryOutcomeRequestUnavailable & object, readonly unknown[]>)
    | (Exclude<CallerSuppliedDeliveryOutcomeRequestCannotCalculate & object, readonly unknown[]>)
    | (Record<string, unknown>));
