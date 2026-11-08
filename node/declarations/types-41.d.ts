import type { StripePaymentClientAction } from './types-54.js';
import type { MoneyValue, MetadataMap, MerchantWebhookEnvelope } from './types-35.js';
import type { SelectableOrderPaymentIntent, SendPaymentIntentReceiptRequestInput, SelectedProductOption } from './types-53.js';
import type {
    ErrorRemediation,
    ExpandedCustomerSummary,
    ExpandedInvoiceSummary,
    ExpandedOrderSummary,
    ExpandedSubscriptionPlanSummary
} from './types-21.js';
import type { PaymentAddOnFee, PartnerWebhookEnvelope } from './types-40.js';
import type { PaymentRisk, PaymentSourceSummary } from './types-43.js';
import type { ResponseMeta } from './types-48.js';
import type { PendingPaymentAction } from './types-44.js';
import type { InputValue } from '../runtime.js';
import type { CancelPaymentIntentRequestInput } from './types-3.js';
import type {
    CapturePaymentIntentRequestInput,
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutPaymentConfig,
    CheckoutPromotionConfig
} from './types-4.js';
import type { ConfirmPaymentIntentRequestInput } from './types-6.js';
import type { CreatePaymentIntentRequestInput } from './types-9.js';
import type { OrdersCreatePaymentIntentResponse } from './types-38.js';
import type { UpdatePaymentIntentRequestInput } from './types-59.js';
import type { CheckoutRedirects, CheckoutTaxConfig, CheckoutTipConfig } from './types-5.js';
import type { ImageAttachment, Image } from './types-25.js';
import type { InventoryRoutingSource } from './types-28.js';
import type { LegalSettings } from './types-32.js';
import type { PaymentLinkEventConfig, PaymentLinkLineItem, PaymentLinkSalesSummary } from './types-42.js';
import type { ThemeConfig } from './types-58.js';
import type { PublicResolvedModifierGroup } from './types-46.js';
/**
 * Typed provider-specific browser action payload. Execute the selected provider action before
 * continuing the owning payment through Flint.
 */
export type PaymentClientAction = {
    /**
     * Stripe.js initialization context plus one flow-specific authority object. Exactly one of
     * payment_intent or setup_intent is present.
     */
    "stripe": StripePaymentClientAction;
};
/**
 * Client-side details for collecting payment from the buyer, such as the Stripe settings to
 * initialize Stripe.js.
 */
export type PaymentCollection = {
    /**
     * Client configuration for collecting the payment through Stripe. Stripe details for
     * collecting payment in the browser: account ID, publishable key, return URL, and Elements
     * options.
     */
    "stripe"?: PaymentCollectionStripe;
};
/**
 * Stripe details for collecting payment in the browser: account ID, publishable key, return URL,
 * and Elements options.
 */
export type PaymentCollectionStripe = {
    /** Stripe account to use when initializing the payment client. */
    "account_id"?: string;
    /**
     * Stripe Elements configuration for the available payment methods and amounts. Stripe Elements
     * collection guidance. Follow next_step in the browser, then submit the result to submit_to
     * through Flint.
     */
    "elements"?: PaymentCollectionStripeElements;
    /** Publishable Stripe key for initializing the payment client. */
    "publishable_key"?: string;
    /** URL the buyer returns to after a redirect payment step. */
    "return_url"?: string;
};
/**
 * Stripe Elements collection guidance. Follow next_step in the browser, then submit the result to
 * submit_to through Flint.
 */
export type PaymentCollectionStripeElements = {
    /**
     * Amount and currency used to initialize the payment form. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Digital wallets that the payment form can offer. [] (Value): string. */
    "digital_wallets"?: Array<string>;
    /**
     * Whether Elements is collecting a payment source for an immediate payment or a setup source
     * for future use. Value enum: "payment", "setup".
     */
    "mode": "payment" | "setup" | (string & {});
    /**
     * Browser collection operation to perform before calling submit_to. Value enum:
     * "collect_payment_source", "collect_setup_payment_source", "create_confirmation_token".
     */
    "next_step": "collect_payment_source"
        | "collect_setup_payment_source"
        | "create_confirmation_token"
        | (string & {});
    /**
     * Stripe Elements payment method creation mode. Follow next_step: standalone PaymentIntents
     * and checkout-authenticated order collection create a ConfirmationToken, while
     * merchant-authenticated order collection and setup collection create a PaymentMethod. Value
     * enum: "manual".
     */
    "payment_method_creation": "manual" | (string & {});
    /** Payment method settings passed to the payment form. */
    "payment_method_options"?: {
        [key: string]: unknown;
    };
    /** Payment method types that the payment form can offer. [] (Value): string. */
    "payment_method_types": Array<string>;
    /**
     * Order payment intents that the buyer can select for collection. [] (Value): {@link
     * SelectableOrderPaymentIntent}. A payment intent on an order the caller can pick, with its
     * amount, status, and last payment error.
     */
    "selectable_payment_intents"?: Array<SelectableOrderPaymentIntent>;
    /**
     * Flint operation that accepts the result of next_step. Value enum: "pay_order",
     * "confirm_payment_intent".
     */
    "submit_to": "pay_order" | "confirm_payment_intent" | (string & {});
};
/**
 * A summary of why a payment attempt failed, with a normalized error code, a message, the failure
 * time, and remediation.
 */
export type PaymentErrorSummary = {
    /**
     * Flint-normalized payment failure code. Unknown provider values are returned as
     * payment_failed. Value enum: "card_declined", "insufficient_funds", "bank_account_closed",
     * "bank_account_not_found", "bank_debit_not_authorized", "bank_account_restricted",
     * "bank_debit_limit_exceeded", "authentication_required", "payment_blocked", "expired_card",
     * "incorrect_cvc", "lost_card", "stolen_card", "do_not_honor", "fraudulent",
     * "processing_error", "payment_method_unavailable", "payment_method_declined",
     * "payment_not_completed", "payment_action_expired", "payment_method_temporarily_unavailable",
     * "payment_failed".
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
    /** Time the payment attempt concluded in failure. Format: date-time. */
    "failed_at": string;
    /**
     * Flint-authored merchant-facing payment failure message. This is stable explanatory text, not
     * raw provider copy.
     */
    "message": string;
    /**
     * Guidance for resolving the payment failure before trying to collect again. anyOf[1] (Value):
     * {@link ErrorRemediation}. Recovery guidance for an error: whether and how to `retry`, plus
     * next steps and suggested actions. anyOf[2] (Value): null.
     */
    "remediation": ((ErrorRemediation) | (null));
};
/**
 * A hold on fulfillment tied to a payment, with the reason, the action required, and whether the
 * hold is active or released.
 */
export type PaymentFulfillmentHold = {
    /** Value enum: "external_payment_hold", "external_payment_hold_released". */
    "reason": "external_payment_hold" | "external_payment_hold_released" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "released_at"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "requested_at": string;
    /** Value enum: "pause_fulfillment", "reevaluate_fulfillment". */
    "required_action": "pause_fulfillment" | "reevaluate_fulfillment" | (string & {});
    /** Value enum: "active", "released". */
    "status": "active" | "released" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
};
/**
 * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
 * requested. Once the payment is authorized, authorized_money equals amount_money and splits into
 * captured_money (collected), capturable_money (still on hold), and released_money (returned
 * without being charged), so authorized_money always equals the sum of those three. Reconcile
 * revenue from captured_money.
 */
export type PaymentIntent = {
    /**
     * Itemized invoice, subscription, and automatic tax fees collected with this payment.
     * Available to the merchant only. Empty until fees settle or when no add-ons apply. Refunds do
     * not return or revise these fees. Absent until Flint has determined and verified the fee. If
     * Flint can't verify it when you read the payment intent, the field is omitted rather than
     * shown unverified; read the payment intent again later. [] (Value): {@link PaymentAddOnFee}.
     * A Flint fee added to a payment intent, with the fee type and amount.
     */
    "add_on_fees"?: Array<PaymentAddOnFee>;
    /**
     * The amount requested from the buyer, including any tip_money. Capturing doesn't change it:
     * after a partial capture it still shows the requested amount, and captured_money shows what
     * was collected. On a standalone payment intent, PATCH can change it only before the first
     * confirmation attempt. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Deadline to capture a manual-capture hold. The authorization lapses at this time, and a
     * capture attempted after it fails even if status is still requires_capture. Set when the hold
     * is placed. Format: date-time.
     */
    "authorization_expires_at"?: string;
    /** When the processor authorized the payment. Absent until then. Format: date-time. */
    "authorized_at"?: string;
    /**
     * The amount the processor authorized. It always equals amount_money and doesn't change once
     * set. Absent until the payment is authorized, and on payments canceled before authorization.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "authorized_money"?: MoneyValue;
    /**
     * Flint-normalized reason the payment intent was canceled. Present only while status is
     * canceled. Unknown processor values are returned as payment_canceled. Value enum:
     * "requested_by_customer", "duplicate", "fraudulent", "abandoned", "invoice_payment_failed",
     * "invoice_voided", "order_closed", "payment_canceled".
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
     * The part of the authorization you can still capture. Positive only while status is
     * requires_capture, and zero after you capture or cancel or the authorization expires. The
     * authorization lapses at authorization_expires_at, and a capture attempted after that fails
     * even if this is positive. Absent until the payment is authorized. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "capturable_money"?: MoneyValue;
    /** When money is collected. Defaults to automatic. Value enum: "automatic", "manual". */
    "capture_method"?: "automatic" | "manual" | (string & {});
    /**
     * When money was captured. For automatic capture, this is when the payment succeeded. Absent
     * until capture. Format: date-time.
     */
    "captured_at"?: string;
    /**
     * The amount collected from the buyer. Reconcile revenue and print receipts from this amount,
     * not amount_money. Zero while a hold is open, and positive whenever status is succeeded.
     * processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the
     * payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "captured_money"?: MoneyValue;
    /** Flint checkout session ID associated with this payment, when present. */
    "checkout_session_id"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * The linked customer. Returned only with expand=customer. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** Customer linked to this payment intent. */
    "customer_id"?: string;
    /**
     * Dispute state of this payment. none means no dispute or inquiry is open or recorded. The
     * inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the
     * dispute with GET /v1/disputes for its deadline and evidence. Value enum: "none",
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other".
     */
    "dispute_status"?: "none"
        | "inquiry_needs_response"
        | "inquiry_under_review"
        | "inquiry_closed"
        | "needs_response"
        | "under_review"
        | "won"
        | "lost"
        | "prevented"
        | "other"
        | (string & {});
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Present when a payment provider asked Flint to pause fulfillment for this payment. While its
     * status is active, open fulfillments on the order are on hold with reason payment_review.
     * payment_intent.fulfillment_hold_updated is sent when the hold starts and when it lifts. A
     * hold on fulfillment tied to a payment, with the reason, the action required, and whether the
     * hold is active or released.
     */
    "fulfillment_hold"?: PaymentFulfillmentHold;
    /**
     * The linked invoice. Returned only with expand=invoice. Present only when `expand` includes
     * `invoice`; `null` when expanded and there is no related invoice. anyOf[1] (Value): {@link
     * ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and paid,
     * outstanding, and refunded amounts, returned when the invoice is expanded. anyOf[2] (Value):
     * null.
     */
    "invoice"?: ((ExpandedInvoiceSummary) | (null));
    /** Invoice this payment intent collects, when it pays an invoice. */
    "invoice_id"?: string;
    /**
     * Most recent payment error. Null when no payment error is recorded. anyOf[1] (Value): {@link
     * PaymentErrorSummary}. A summary of why a payment attempt failed, with a normalized error
     * code, a message, the failure time, and remediation. anyOf[2] (Value): null.
     */
    "last_payment_error": ((PaymentErrorSummary) | (null));
    /** Merchant that owns this payment intent. */
    "merchant_id"?: string;
    /**
     * Captured amount minus processing_fee_money and every amount in add_on_fees. Later merchant
     * assessments and credits are separate balance effects. Absent until Flint has determined and
     * verified the fee. If Flint can't verify it when you read the payment intent, the field is
     * omitted rather than shown unverified; read the payment intent again later. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "merchant_net_money"?: MoneyValue;
    /**
     * Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't returned.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata": MetadataMap;
    /**
     * The linked order. Returned only with expand=order. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded. anyOf[2]
     * (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /**
     * Order this payment intent belongs to. Create it through the order and confirm it with POST
     * /v1/orders/{order_id}/pay. Capture and cancel use POST
     * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
     * Order-owned intents accept PATCH for metadata and external_reference_id.
     */
    "order_id"?: string;
    /**
     * How the payment was started. Fixed when the payment intent is created. Value enum:
     * "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api".
     */
    "payment_flow": "checkout"
        | "payment_link"
        | "invoice"
        | "subscription_initial"
        | "subscription_renewal"
        | "virtual_terminal"
        | "api"
        | (string & {});
    /** Flint payment intent ID. */
    "payment_intent_id": string;
    /**
     * Payment options the buyer can use for this payment. [] enum: "card", "apple_pay",
     * "google_pay", "affirm", "ach_debit". [] (Value): string. Value enum: "card", "apple_pay",
     * "google_pay", "affirm", "ach_debit".
     */
    "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /**
     * Summary of the card or bank account used for the payment. Absent until a payment source is
     * attached. A summary of the payment source used for a payment, by funding-method family, with
     * card or bank account display details.
     */
    "payment_source"?: PaymentSourceSummary;
    /**
     * Flint's all-in processing fee for this payment. It is the complete price Flint charges to
     * process the payment, never a provider cost passed through. The fee is final once the card
     * payment is captured or the ACH payment succeeds; canceled payments and failures before
     * success have none. Invoice, subscription, and automatic tax fees are itemized separately in
     * add_on_fees. Your net for the payment is captured_money minus this fee and the add-on fees.
     * Refunds do not return or revise it. Absent until Flint has determined and verified the fee.
     * If Flint can't verify it when you read the payment intent, the field is omitted rather than
     * shown unverified; read the payment intent again later. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "processing_fee_money"?: MoneyValue;
    /**
     * Email address for this payment's receipt. When it isn't set, Flint uses the customer's
     * email. Format: email. maxLength: 255.
     */
    "receipt_email"?: string | null;
    /**
     * How much of captured_money has been refunded, including value issued as store credit, based
     * on refunded_money. Value enum: "none", "partially_refunded", "refunded".
     */
    "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Total refunded against captured_money, including value issued as store credit and processor
     * refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has
     * been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "refunded_money"?: MoneyValue;
    /**
     * The part of the authorization returned to the buyer without being charged: the uncaptured
     * remainder after a partial capture, or the whole authorization after a cancellation or
     * expiry. It was never collected, so it needs no refund and can't be captured later. Absent
     * until the payment is authorized. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "released_money"?: MoneyValue;
    /** Flint return ID associated with this payment, when present. */
    "return_id"?: string;
    /**
     * Risk assessment. Always present with merchant credentials; null when no risk assessment is
     * available. Omitted with the checkout credential. anyOf[1] (Value): {@link PaymentRisk}. The
     * risk assessment for a payment intent, with its risk level, score, outcome, and any matched
     * rule or review. anyOf[2] (Value): null.
     */
    "risk"?: ((PaymentRisk) | (null));
    /**
     * The payment option the most recent confirmation used. Absent until the payment intent is
     * first confirmed.
     */
    "selected_payment_option"?: string;
    /**
     * Lifecycle status. requires_payment_method covers both a new payment intent and one whose
     * last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired
     * are final. Refunds and disputes never change status. Value enum: "requires_payment_method",
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
    /** Opaque payment reference to share with merchant support. Do not parse its format. */
    "support_reference": string;
    /**
     * Actions the payment intent's current state accepts, each a POST to
     * /v1/payment-intents/{payment_intent_id}/{action}. An action that isn't listed returns 409
     * ACTION_NOT_ALLOWED. A listed action can still be refused because of something outside the
     * payment intent: an open risk review, an order payment attempt that is using this payment, a
     * closed order, or the merchant's account. An order-owned payment intent never lists confirm;
     * pay it with POST /v1/orders/{order_id}/pay. The list changes only when the payment intent
     * changes. Always empty for buyer credentials. New actions may be added. [] enum: "confirm",
     * "capture", "cancel". [] (Value): string. Value enum: "confirm", "capture", "cancel".
     */
    "supported_actions": Array<"confirm" | "capture" | "cancel" | (string & {})>;
    /**
     * Portion of amount_money that is a tip. Uses amount_money's currency and is at most
     * amount_money. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     */
    "tip_money"?: ((MoneyValue) | (null));
    /**
     * Why a bank debit is taken. Set only when payment_options includes ach_debit, and fixed once
     * the payment intent exists. Value enum: "goods", "services", "other".
     */
    "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
/**
 * A read-only entry in a payment intent's human-readable history. Read the referenced resource for
 * authoritative state.
 */
export type PaymentIntentActivity = {
    /**
     * Value enum: "other", "created", "updated", "status_changed", "failed", "canceled",
     * "expired", "refund_created", "refund_status_changed", "dispute_status_changed",
     * "receipt_sent".
     */
    "activity_type": "other"
        | "created"
        | "updated"
        | "status_changed"
        | "failed"
        | "canceled"
        | "expired"
        | "refund_created"
        | "refund_status_changed"
        | "dispute_status_changed"
        | "receipt_sent"
        | (string & {});
    "checkout_session_id"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    "description": string;
    "dispute_id"?: string;
    /**
     * Value enum: "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
     * "needs_response", "under_review", "won", "lost", "prevented", "other".
     */
    "from_dispute_status"?: "none"
        | "inquiry_needs_response"
        | "inquiry_under_review"
        | "inquiry_closed"
        | "needs_response"
        | "under_review"
        | "won"
        | "lost"
        | "prevented"
        | "other"
        | (string & {});
    /**
     * Value enum: "requires_payment_method", "requires_confirmation", "requires_action",
     * "processing", "requires_capture", "canceled", "succeeded", "expired".
     */
    "from_status"?: "requires_payment_method"
        | "requires_confirmation"
        | "requires_action"
        | "processing"
        | "requires_capture"
        | "canceled"
        | "succeeded"
        | "expired"
        | (string & {});
    "order_id"?: string;
    "payment_intent_activity_id": string;
    "refund_id"?: string;
    /**
     * Value enum: "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
     * "needs_response", "under_review", "won", "lost", "prevented", "other".
     */
    "to_dispute_status"?: "none"
        | "inquiry_needs_response"
        | "inquiry_under_review"
        | "inquiry_closed"
        | "needs_response"
        | "under_review"
        | "won"
        | "lost"
        | "prevented"
        | "other"
        | (string & {});
    /**
     * Value enum: "requires_payment_method", "requires_confirmation", "requires_action",
     * "processing", "requires_capture", "canceled", "succeeded", "expired".
     */
    "to_status"?: "requires_payment_method"
        | "requires_confirmation"
        | "requires_action"
        | "processing"
        | "requires_capture"
        | "canceled"
        | "succeeded"
        | "expired"
        | (string & {});
};
/** A page of `PaymentIntentActivity` objects. */
export type PaymentIntentActivityListResponse = {
    /**
     *  [] (Value): {@link PaymentIntentActivity}. A read-only entry in a payment intent's
     * human-readable history. Read the referenced resource for authoritative state.
     */
    "data": Array<PaymentIntentActivity>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type PaymentIntentCanceledEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.canceled";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.canceled";
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
    "event_type": "payment_intent.canceled";
});
/**
 * The `payment_intent.canceled` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentIntentCanceledInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.canceled". */
    "event_type"?: "payment_intent.canceled";
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
 * The `payment_intent.canceled` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentIntentCanceledMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.canceled". */
    "event_type"?: "payment_intent.canceled";
});
export type PaymentIntentCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.created";
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
    "event_type": "payment_intent.created";
});
/**
 * The `payment_intent.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentIntentCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.created". */
    "event_type"?: "payment_intent.created";
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
 * The `payment_intent.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentIntentCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.created". */
    "event_type"?: "payment_intent.created";
});
export type PaymentIntentExpiredEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.expired";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.expired";
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
    "event_type": "payment_intent.expired";
});
/**
 * The `payment_intent.expired` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentIntentExpiredInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.expired". */
    "event_type"?: "payment_intent.expired";
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
 * The `payment_intent.expired` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentIntentExpiredMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.expired". */
    "event_type"?: "payment_intent.expired";
});
export type PaymentIntentFulfillmentHoldUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.fulfillment_hold_updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.fulfillment_hold_updated";
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
    "event_type": "payment_intent.fulfillment_hold_updated";
});
/**
 * The `payment_intent.fulfillment_hold_updated` webhook payload for the `installed_merchants`
 * event source. Fields shared by partner webhook payloads.
 */
export type PaymentIntentFulfillmentHoldUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.fulfillment_hold_updated". */
    "event_type"?: "payment_intent.fulfillment_hold_updated";
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
 * The `payment_intent.fulfillment_hold_updated` webhook payload for the `merchant` event source.
 * Fields shared by merchant webhook payloads.
 */
export type PaymentIntentFulfillmentHoldUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.fulfillment_hold_updated". */
    "event_type"?: "payment_intent.fulfillment_hold_updated";
});
/** A page of `PaymentIntent` objects. */
export type PaymentIntentListResponse = {
    /**
     *  [] (Value): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg of an
     * order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data": Array<PaymentIntent>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type PaymentIntentPaymentFailedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.payment_failed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.payment_failed";
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
    "event_type": "payment_intent.payment_failed";
});
/**
 * The `payment_intent.payment_failed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type PaymentIntentPaymentFailedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.payment_failed". */
    "event_type"?: "payment_intent.payment_failed";
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
 * The `payment_intent.payment_failed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type PaymentIntentPaymentFailedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.payment_failed". */
    "event_type"?: "payment_intent.payment_failed";
});
export type PaymentIntentProcessingEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.processing";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.processing";
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
    "event_type": "payment_intent.processing";
});
/**
 * The `payment_intent.processing` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type PaymentIntentProcessingInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.processing". */
    "event_type"?: "payment_intent.processing";
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
 * The `payment_intent.processing` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type PaymentIntentProcessingMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.processing". */
    "event_type"?: "payment_intent.processing";
});
export type PaymentIntentRequiresActionEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.requires_action";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.requires_action";
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
    "event_type": "payment_intent.requires_action";
});
/**
 * The `payment_intent.requires_action` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type PaymentIntentRequiresActionInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.requires_action". */
    "event_type"?: "payment_intent.requires_action";
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
 * The `payment_intent.requires_action` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type PaymentIntentRequiresActionMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.requires_action". */
    "event_type"?: "payment_intent.requires_action";
});
export type PaymentIntentRequiresCaptureEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.requires_capture";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.requires_capture";
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
    "event_type": "payment_intent.requires_capture";
});
/**
 * The `payment_intent.requires_capture` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type PaymentIntentRequiresCaptureInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.requires_capture". */
    "event_type"?: "payment_intent.requires_capture";
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
 * The `payment_intent.requires_capture` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type PaymentIntentRequiresCaptureMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.requires_capture". */
    "event_type"?: "payment_intent.requires_capture";
});
/** A response containing `PaymentIntent` data. */
export type PaymentIntentResponse = {
    /**
     * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
     * requested. Once the payment is authorized, authorized_money equals amount_money and splits
     * into captured_money (collected), capturable_money (still on hold), and released_money
     * (returned without being charged), so authorized_money always equals the sum of those three.
     * Reconcile revenue from captured_money.
     */
    "data": PaymentIntent;
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
export type PaymentIntentSucceededEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.succeeded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.succeeded";
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
    "event_type": "payment_intent.succeeded";
});
/**
 * The `payment_intent.succeeded` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type PaymentIntentSucceededInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.succeeded". */
    "event_type"?: "payment_intent.succeeded";
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
 * The `payment_intent.succeeded` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentIntentSucceededMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.succeeded". */
    "event_type"?: "payment_intent.succeeded";
});
export type PaymentIntentUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.updated";
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
    "event_type": "payment_intent.updated";
});
/**
 * The `payment_intent.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentIntentUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.updated". */
    "event_type"?: "payment_intent.updated";
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
 * The `payment_intent.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentIntentUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.updated". */
    "event_type"?: "payment_intent.updated";
});
/**
 * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
 * requested. Once the payment is authorized, authorized_money equals amount_money and splits into
 * captured_money (collected), capturable_money (still on hold), and released_money (returned
 * without being charged), so authorized_money always equals the sum of those three. Reconcile
 * revenue from captured_money.
 */
export type PaymentIntentWithAction = (Exclude<PaymentIntent & object, readonly unknown[]>)
    & ({
    /**
     * Typed browser authority for the current standalone payment action. Complete it, then call
     * the same confirm endpoint with credential_type attached. Null when no buyer action is needed
     * or Flint cannot produce the action yet. If status is requires_action and this is null, call
     * confirm again with credential_type attached. anyOf[1] (Value): {@link PendingPaymentAction}.
     * Client-side action required before continuing a payment. Resume an order through PayOrder
     * with order_payment_attempt_id, or continue a standalone PaymentIntent through its confirm
     * endpoint without a replacement credential. anyOf[2] (Value): null.
     */
    "current_payment_action": ((PendingPaymentAction) | (null));
});
/**
 * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
 * requested. Once the payment is authorized, authorized_money equals amount_money and splits into
 * captured_money (collected), capturable_money (still on hold), and released_money (returned
 * without being charged), so authorized_money always equals the sum of those three. Reconcile
 * revenue from captured_money.
 */
export type PaymentIntentWithCollection = (Exclude<PaymentIntent & object, readonly unknown[]>)
    & ({
    /**
     * Setup details your client uses to collect the buyer's payment details. Required on both
     * standalone and order-owned creates. On GET, returned only for a standalone intent in
     * requires_payment_method or requires_confirmation, and omitted for an intent owned by a
     * checkout session when read with merchant credentials. Order-owned intents never include it
     * on GET; use Order.payment_collection, whose selectable_payment_intents lists the staged
     * payments. Client-side details for collecting payment from the buyer, such as the Stripe
     * settings to initialize Stripe.js.
     */
    "payment_collection"?: PaymentCollection;
});
/** A response containing `PaymentIntentWithCollection` data. */
export type PaymentIntentWithCollectionResponse = {
    /**
     * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
     * requested. Once the payment is authorized, authorized_money equals amount_money and splits
     * into captured_money (collected), capturable_money (still on hold), and released_money
     * (returned without being charged), so authorized_money always equals the sum of those three.
     * Reconcile revenue from captured_money.
     */
    "data": PaymentIntentWithCollection;
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
export type PaymentIntentsCancelParams = (InputValue<CancelPaymentIntentRequestInput>);
export type PaymentIntentsCaptureParams = (InputValue<CapturePaymentIntentRequestInput>);
export type PaymentIntentsConfirmParams = (ConfirmPaymentIntentRequestInput)
    & {
    /**
     * An optional stable random device identifier, independent of the payment intent. Keep it for
     * subsequent payments from the same device; it grants no access. pattern: ^[a-f0-9]{32}$.
     */
    "Flint-Buyer-Device"?: InputValue<string>;
};
export type PaymentIntentsCreateParams = (InputValue<CreatePaymentIntentRequestInput>);
export type PaymentIntentsCreateResponse = OrdersCreatePaymentIntentResponse;
export type PaymentIntentsGetParams = {
    /**
     * Supported expansions: customer, invoice, order. Expansion requires
     * payments.payment_intents.read plus the read scope for each expanded resource. Limits: at
     * most 10 unique expand paths per request. Repeat expand, for example
     * expand=customer&expand=invoice, or pass one comma-separated value. [] enum: "customer",
     * "invoice", "order". Value enum: "customer", "invoice", "order". anyOf[1] (Value): Array of
     * string. [] enum: "customer", "invoice", "order". anyOf[1][] (Value): string. Value enum:
     * "customer", "invoice", "order". anyOf[2] (Value): string. Value enum: "customer", "invoice",
     * "order".
     */
    "expand"?: InputValue<("customer" | "invoice" | "order") | readonly ("customer" | "invoice" | "order")[]>;
};
export type PaymentIntentsListActivitiesParams = {
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
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Filter by activity type. Repeat the parameter or pass comma-separated values to OR multiple
     * types. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "created", "updated",
     * "status_changed", "failed", "canceled", "expired", "refund_created",
     * "refund_status_changed", "dispute_status_changed", "receipt_sent". Value enum: "created",
     * "updated", "status_changed", "failed", "canceled", "expired", "refund_created",
     * "refund_status_changed", "dispute_status_changed", "receipt_sent". anyOf[1] (Value): Array
     * of string. minItems: 1. [] enum: "created", "updated", "status_changed", "failed",
     * "canceled", "expired", "refund_created", "refund_status_changed", "dispute_status_changed",
     * "receipt_sent". anyOf[1][] (Value): string. Value enum: "created", "updated",
     * "status_changed", "failed", "canceled", "expired", "refund_created",
     * "refund_status_changed", "dispute_status_changed", "receipt_sent". anyOf[2] (Value): string.
     * Value enum: "created", "updated", "status_changed", "failed", "canceled", "expired",
     * "refund_created", "refund_status_changed", "dispute_status_changed", "receipt_sent".
     */
    "activity_type"?: InputValue<("created"
        | "updated"
        | "status_changed"
        | "failed"
        | "canceled"
        | "expired"
        | "refund_created"
        | "refund_status_changed"
        | "dispute_status_changed"
        | "receipt_sent")
        | readonly ("created"
        | "updated"
        | "status_changed"
        | "failed"
        | "canceled"
        | "expired"
        | "refund_created"
        | "refund_status_changed"
        | "dispute_status_changed"
        | "receipt_sent")[]>;
};
export type PaymentIntentsListParams = {
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255.
     */
    "idempotency_key"?: InputValue<string>;
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
    /** Filter by order ID. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id"?: InputValue<string>;
    /** Filter by customer ID. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "customer_id"?: InputValue<string>;
    /** Filter by invoice ID. Example: "inv_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "invoice_id"?: InputValue<string>;
    /**
     * Filter by whether the merchant must capture the payment or respond to a dispute. A dispute
     * requires action when its status is needs_response or inquiry_needs_response, evidence
     * responses are allowed, and its deadline is absent or has not passed. Omit to include both
     * groups.
     */
    "is_action_required"?: InputValue<boolean>;
    /**
     * Filter by payment intent status. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "requires_payment_method", "requires_confirmation", "requires_action", "processing",
     * "requires_capture", "canceled", "succeeded", "expired". Value enum:
     * "requires_payment_method", "requires_confirmation", "requires_action", "processing",
     * "requires_capture", "canceled", "succeeded", "expired". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "requires_payment_method", "requires_confirmation", "requires_action",
     * "processing", "requires_capture", "canceled", "succeeded", "expired". anyOf[1][] (Value):
     * string. Value enum: "requires_payment_method", "requires_confirmation", "requires_action",
     * "processing", "requires_capture", "canceled", "succeeded", "expired". anyOf[2] (Value):
     * string. Value enum: "requires_payment_method", "requires_confirmation", "requires_action",
     * "processing", "requires_capture", "canceled", "succeeded", "expired".
     */
    "status"?: InputValue<("requires_payment_method"
        | "requires_confirmation"
        | "requires_action"
        | "processing"
        | "requires_capture"
        | "canceled"
        | "succeeded"
        | "expired")
        | readonly ("requires_payment_method"
        | "requires_confirmation"
        | "requires_action"
        | "processing"
        | "requires_capture"
        | "canceled"
        | "succeeded"
        | "expired")[]>;
    /**
     * Filter by the latest completed risk assessment. Repeat or comma-separate values. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "normal", "elevated", "highest", "not_assessed". Value
     * enum: "normal", "elevated", "highest", "not_assessed". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "normal", "elevated", "highest", "not_assessed". anyOf[1][] (Value):
     * string. Value enum: "normal", "elevated", "highest", "not_assessed". anyOf[2] (Value):
     * string. Value enum: "normal", "elevated", "highest", "not_assessed".
     */
    "risk_level"?: InputValue<("normal" | "elevated" | "highest" | "not_assessed")
        | readonly ("normal" | "elevated" | "highest" | "not_assessed")[]>;
    /**
     * Filter by immutable payment flow. Repeat or comma-separate values. Accepts repeated keys,
     * comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "checkout", "payment_link", "invoice", "subscription_initial",
     * "subscription_renewal", "virtual_terminal", "api". Value enum: "checkout", "payment_link",
     * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "checkout", "payment_link",
     * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
     * anyOf[1][] (Value): string. Value enum: "checkout", "payment_link", "invoice",
     * "subscription_initial", "subscription_renewal", "virtual_terminal", "api". anyOf[2] (Value):
     * string. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
     * "subscription_renewal", "virtual_terminal", "api".
     */
    "payment_flow"?: InputValue<("checkout"
        | "payment_link"
        | "invoice"
        | "subscription_initial"
        | "subscription_renewal"
        | "virtual_terminal"
        | "api")
        | readonly ("checkout"
        | "payment_link"
        | "invoice"
        | "subscription_initial"
        | "subscription_renewal"
        | "virtual_terminal"
        | "api")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /** Filter by linked Return ID. Example: "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_id"?: InputValue<string>;
    /** Filter by linked ReturnResolution ID. Example: "retres_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_resolution_id"?: InputValue<string>;
    /**
     * Search across payment_intent_id, external_reference_id, and receipt_email. Text fields match
     * any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from
     * the start and need the type prefix, such as ord_01.
     */
    "query"?: InputValue<string>;
    /**
     * Inclusive lower bound on amount_money.amount. Requires currency. Format: int64. minimum: 1.
     * Example: 500.
     */
    "min_amount"?: InputValue<number>;
    /**
     * Inclusive upper bound on amount_money.amount. Requires currency. Format: int64. minimum: 1.
     * Example: 500.
     */
    "max_amount"?: InputValue<number>;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: InputValue<string>;
    /**
     * Exact match on refund_status. Repeat keys or comma-separate values to match any selected
     * status. Combined with dispute_status, both filters must match. Accepts repeated keys,
     * comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "none", "partially_refunded", "refunded". Value enum: "none",
     * "partially_refunded", "refunded". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "none", "partially_refunded", "refunded". anyOf[1][] (Value): string. Value enum: "none",
     * "partially_refunded", "refunded". anyOf[2] (Value): string. Value enum: "none",
     * "partially_refunded", "refunded".
     */
    "refund_status"?: InputValue<("none" | "partially_refunded" | "refunded")
        | readonly ("none" | "partially_refunded" | "refunded")[]>;
    /**
     * Exact match on dispute_status. Repeat keys or comma-separate values to match any selected
     * status. Combined with refund_status, both filters must match. Accepts repeated keys,
     * comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "none", "inquiry_needs_response", "inquiry_under_review",
     * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
     * Value enum: "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
     * "needs_response", "under_review", "won", "lost", "prevented", "other". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "none", "inquiry_needs_response",
     * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost",
     * "prevented", "other". anyOf[1][] (Value): string. Value enum: "none",
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other". anyOf[2] (Value): string. Value enum:
     * "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
     * "needs_response", "under_review", "won", "lost", "prevented", "other".
     */
    "dispute_status"?: InputValue<("none"
        | "inquiry_needs_response"
        | "inquiry_under_review"
        | "inquiry_closed"
        | "needs_response"
        | "under_review"
        | "won"
        | "lost"
        | "prevented"
        | "other")
        | readonly ("none"
        | "inquiry_needs_response"
        | "inquiry_under_review"
        | "inquiry_closed"
        | "needs_response"
        | "under_review"
        | "won"
        | "lost"
        | "prevented"
        | "other")[]>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by payment_intent_id. Default:
     * "created_at". Value enum: "created_at", "updated_at", "amount_money".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
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
     * Supported expansions: customer, invoice, order. Include the requested related resources
     * using scoped batch reads for this page. Each relationship requires its existing target read
     * scopes. Expansion changes the representation without changing pagination tokens. Limits: at
     * most 10 unique expand paths per request. Repeat expand, for example
     * expand=customer&expand=invoice, or pass one comma-separated value. [] enum: "customer",
     * "invoice", "order". Value enum: "customer", "invoice", "order". anyOf[1] (Value): Array of
     * string. [] enum: "customer", "invoice", "order". anyOf[1][] (Value): string. Value enum:
     * "customer", "invoice", "order". anyOf[2] (Value): string. Value enum: "customer", "invoice",
     * "order".
     */
    "expand"?: InputValue<("customer" | "invoice" | "order") | readonly ("customer" | "invoice" | "order")[]>;
};
export type PaymentIntentsSendReceiptParams = (InputValue<SendPaymentIntentReceiptRequestInput>);
export type PaymentIntentsUpdateParams = (InputValue<UpdatePaymentIntentRequestInput>);
/** Optional merchant limits that can lower Flint's payment-option and surface policy limits. */
export type PaymentLimitSettings = {
    /**
     * Map replaced as a whole: the keys you send become the full map. Maximum USD amounts keyed by
     * default, surface, or an exact payment_option.surface selector. Merchant settings cannot
     * raise Flint's policy ceiling. * (Value): {@link MoneyValue}. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "max_amounts"?: Record<string, MoneyValue>;
    /**
     * Map replaced as a whole: the keys you send become the full map. Minimum USD amounts keyed by
     * default, surface, or an exact payment_option.surface selector. Merchant settings cannot
     * lower Flint's payment-option floor. * (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_amounts"?: Record<string, MoneyValue>;
};
/**
 * Changes to a merchant's payment amount limits. Each map replaces the existing one, and null
 * clears it. minProperties: 1.
 */
export type PaymentLimitSettingsPatch = {
    /**
     * Map replaced as a whole: the keys you send become the full map. Replaces this merchant limit
     * map. Keys are default, a surface, payment_option.default, or payment_option.surface. Amounts
     * must satisfy Flint's existing selector bounds and effective minimum/maximum range. Send null
     * to clear this map; reads then omit it. minProperties: 1. * (Value): object. *.amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. *.currency (Required): string. minLength: 1. Value enum:
     * "USD".
     */
    "max_amounts"?: Record<string, {
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount": `${bigint}`;
        /** minLength: 1. Value enum: "USD". */
        "currency": "USD" | (string & {});
    }>
        | null;
    /**
     * Map replaced as a whole: the keys you send become the full map. Replaces this merchant limit
     * map. Keys are default, a surface, payment_option.default, or payment_option.surface. Amounts
     * must satisfy Flint's existing selector bounds and effective minimum/maximum range. Send null
     * to clear this map; reads then omit it. minProperties: 1. * (Value): object. *.amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. *.currency (Required): string. minLength: 1. Value enum:
     * "USD".
     */
    "min_amounts"?: Record<string, {
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount": `${bigint}`;
        /** minLength: 1. Value enum: "USD". */
        "currency": "USD" | (string & {});
    }>
        | null;
};
/**
 * Changes to a merchant's payment amount limits. Each map replaces the existing one, and null
 * clears it. minProperties: 1.
 */
export type PaymentLimitSettingsPatchInput = {
    /**
     * Map replaced as a whole: the keys you send become the full map. Replaces this merchant limit
     * map. Keys are default, a surface, payment_option.default, or payment_option.surface. Amounts
     * must satisfy Flint's existing selector bounds and effective minimum/maximum range. Send null
     * to clear this map; reads then omit it. minProperties: 1. * (Value): object. *.amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. *.currency (Required): string. minLength: 1. Value enum:
     * "USD".
     */
    "max_amounts"?: Record<string, {
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /** minLength: 1. Value enum: "USD". */
        "currency": "USD";
    }>
        | null;
    /**
     * Map replaced as a whole: the keys you send become the full map. Replaces this merchant limit
     * map. Keys are default, a surface, payment_option.default, or payment_option.surface. Amounts
     * must satisfy Flint's existing selector bounds and effective minimum/maximum range. Send null
     * to clear this map; reads then omit it. minProperties: 1. * (Value): object. *.amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. *.currency (Required): string. minLength: 1. Value enum:
     * "USD".
     */
    "min_amounts"?: Record<string, {
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /** minLength: 1. Value enum: "USD". */
        "currency": "USD";
    }>
        | null;
};
/** A reusable link that opens checkout. */
export type PaymentLink = {
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use
     * your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that.
     * Format: int64. minimum: 60. maximum: 86400.
     */
    "checkout_session_expires_in_seconds"?: number;
    /** Format: int32. */
    "completed_count": number;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     *  [] (Value): {@link PaymentLinkCustomField}. A custom field on a payment link that collects
     * an answer from the buyer, such as text, a dropdown, or a checkbox.
     */
    "custom_fields"?: Array<PaymentLinkCustomField>;
    /** Custom text shown in checkout: an order summary message and a shipping address label. */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * Delivery methods the link offers. Empty when the link has none, and then its checkouts offer
     * settings.checkout.default_delivery_method_ids when the order has items to deliver. []
     * (Value): string.
     */
    "delivery_method_ids": Array<string>;
    "description"?: string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "donation_max_amount_money"?: MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "donation_min_amount_money"?: MoneyValue;
    /**
     *  [] (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "donation_suggested_amount_money_options"?: Array<MoneyValue>;
    /**
     * Event settings on an event payment link, such as its date, venue, ticket limit, and ticket
     * emails.
     */
    "event_config"?: PaymentLinkEventConfig;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /** An image attached to a resource, with its display properties and attachment metadata. */
    "image"?: ImageAttachment;
    "inactive_message"?: string;
    /**
     * Where an order, payment link, or reservation routes inventory from: a fixed Location, an
     * inventory allocation policy, or one policy revision.
     */
    "inventory_routing_source"?: InventoryRoutingSource;
    /**
     * Legal settings for a checkout: whether buyers must accept terms, and links to the terms,
     * refund policy, shipping policy, and contract.
     */
    "legal"?: LegalSettings;
    /**
     *  [] (Value): {@link PaymentLinkLineItem}. A line item on a payment link, sold from a catalog
     * variant, a bundle, or an ad hoc name and price, with quantity and price rules.
     */
    "line_items"?: Array<PaymentLinkLineItem>;
    /** Format: int32. */
    "max_completions"?: number;
    "merchant_id"?: string;
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    "name": string;
    "payment_link_id": string;
    /** Value enum: "standard", "donation", "event". */
    "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
    /**
     * Payment settings for a checkout: the enabled payment options and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * Promotion settings for a checkout: whether automatic promotions apply and whether the buyer
     * can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * Where checkout sessions started from this payment link send the buyer after payment,
     * cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface
     * is embedded; use payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * RFC3339 timestamp after which the link stops starting checkouts and resolve returns
     * PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except that an event
     * link without sales_end_at stops selling at event_config.event_at. A checkout opened before
     * the end can still start payment for up to 15 minutes after it. Format: date-time.
     */
    "sales_end_at"?: string;
    /**
     * Present only with expand=sales_summary on GET /v1/payment-links or GET
     * /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard
     * sessions and API keys with checkouts.payment_links.read. Uses the same paid-order definition
     * as the merchant sales summary. Paid-order sales totals for a payment link, computed on
     * request. Paid means the order's collection has completed. Fully and partially refunded
     * orders still count, and paid_totals reports the amount collected before refunds. Each order
     * counts once even if it has multiple checkout sessions.
     */
    "sales_summary"?: PaymentLinkSalesSummary;
    /** Value enum: "active", "inactive". */
    "status": "active" | "inactive" | (string & {});
    /**
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. anyOf[2] (Value): null.
     */
    "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
    "subscription_plan_id"?: string;
    /** Whether tax is collected for a checkout session or payment link. */
    "tax"?: CheckoutTaxConfig;
    /** Colors and title applied to a payment link's checkout page. */
    "theme"?: ThemeConfig;
    /**
     * Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options,
     * the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfig;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "total_quantity_sold": number;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    "url": string;
    /** Format: int64. */
    "version": number;
};
/**
 * A listed payment link variant that can be sold in the line currency, with its current price,
 * options, image, modifiers, and advisory stock state.
 */
export type PaymentLinkAvailableVariant = {
    /**
     * Modifier groups available for this variant's effective modifier set. Omitted when the
     * variant has none. [] (Value): {@link PublicResolvedModifierGroup}. A modifier group as
     * resolved for a payment link line item, with its selection limits, display flags, and options
     * or text settings.
     */
    "available_modifiers"?: Array<PublicResolvedModifierGroup>;
    /**
     * Effective primary variant image, inherited from the product when the variant has none.
     * Omitted when neither has an image. An image with its `url`, `width`, and `height`, and
     * optional `alt` text.
     */
    "image"?: Image;
    /**
     * True when tracked inventory cannot supply the line's starting quantity through the payment
     * link's inventory_routing_source. Uses min_quantity when quantity is adjustable, otherwise
     * quantity. Always false for untracked variants. Advisory only: no stock is held at read or
     * resolve time, and no stock counts are published.
     */
    "is_sold_out": boolean;
    /** Order line name for this variant: the product name plus the variant label. */
    "name": string;
    /**
     * The variant's product option values, in product option position order. Empty when the
     * product has no options. [] (Value): {@link SelectedProductOption}. An option and value
     * chosen for a product variant, such as size Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /**
     * Current catalog unit price in the line currency. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /** ID of the offered product variant. */
    "variant_id": string;
};
export type PaymentLinkCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentLink;
    };
    "event_type"?: "payment_link.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentLink;
    };
    "event_type"?: "payment_link.created";
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
    "event_type": "payment_link.created";
});
/**
 * The `payment_link.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentLinkCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link PaymentLink}. A reusable link that opens checkout. */
    "data"?: {
        /** A reusable link that opens checkout. */
        "object": PaymentLink;
    };
    /** Value enum: "payment_link.created". */
    "event_type"?: "payment_link.created";
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
 * The `payment_link.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentLinkCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link PaymentLink}. A reusable link that opens checkout. */
    "data"?: {
        /** A reusable link that opens checkout. */
        "object": PaymentLink;
    };
    /** Value enum: "payment_link.created". */
    "event_type"?: "payment_link.created";
});
/**
 * A custom field on a payment link that collects an answer from the buyer, such as text, a
 * dropdown, or a checkbox.
 */
export type PaymentLinkCustomField = {
    /** Value enum: "text", "dropdown", "checkbox", "textarea". */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea" | (string & {});
    /**
     * Unique custom field key. Must not have leading or trailing whitespace. Buyer answers are
     * stored in order metadata as custom_field_<key>. minLength: 1. maxLength: 243.
     */
    "key": string;
    "label": string;
    /**
     * Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults
     * to 255 for text and 1000 for textarea when omitted. Each code point can occupy up to four
     * UTF-8 bytes in the combined metadata size budget. Format: int32. minimum: 1. maximum: 4096.
     */
    "max_length"?: number;
    /**
     * Dropdown choices. Dropdown fields require at least one option. Options must not have leading
     * or trailing whitespace. The longest option in UTF-8 bytes counts toward the combined
     * metadata size budget. [] (Value): string. maxLength: 4096.
     */
    "options"?: Array<string>;
    "payment_link_custom_field_id": string;
    "placeholder"?: string;
    /** Format: int32. */
    "position"?: number;
    "required"?: boolean;
};
/**
 * A custom field in a payment link update. Include its ID to change an existing field, or omit the
 * ID to add a new one.
 */
export type PaymentLinkCustomFieldPatchRequest = {
    /** Value enum: "text", "dropdown", "checkbox", "textarea". */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea" | (string & {});
    /**
     * Unique custom field key. Must not have leading or trailing whitespace. Buyer answers are
     * stored in order metadata as custom_field_<key>. minLength: 1. maxLength: 243.
     */
    "key": string;
    /** minLength: 1. maxLength: 255. */
    "label": string;
    /**
     * Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults
     * to 255 for text and 1000 for textarea when omitted. Each code point can occupy up to four
     * UTF-8 bytes in the combined metadata size budget. Format: int32. minimum: 1. maximum: 4096.
     */
    "max_length"?: number;
    /**
     * Dropdown choices. Dropdown fields require at least one option. Options must not have leading
     * or trailing whitespace. The longest option in UTF-8 bytes counts toward the combined
     * metadata size budget. [] (Value): string. minLength: 1. maxLength: 4096.
     */
    "options"?: Array<string>;
    /**
     * Stable ID of an existing custom field. Omit it to create a new custom field. minLength: 1.
     */
    "payment_link_custom_field_id"?: string;
    /** minLength: 1. maxLength: 500. */
    "placeholder"?: string;
    /** Format: int32. */
    "position"?: number;
    "required"?: boolean;
};
