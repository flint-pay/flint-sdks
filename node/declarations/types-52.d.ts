import type {
    ExpandedCustomerSummaryPreviousAttributes,
    ExpandedInvoiceSummaryPreviousAttributes,
    ExpandedOrderSummaryPreviousAttributes,
    DisputesAcceptParams
} from './types-26.js';
import type { FailedPaymentAttemptPreviousAttributes, ExpandedSubscriptionPlanSummary } from './types-27.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-43.js';
import type { MoneyValuePreviousAttributes, MoneyValue, MoneyValueInput } from './types-44.js';
import type {
    PaymentErrorSummaryPreviousAttributes,
    PaymentFulfillmentHoldPreviousAttributes,
    PaymentIntentOvercapturePreviousAttributes,
    PaymentIntentPlatformFeePreviousAttributes,
    PaymentIntent,
    PaymentCollection
} from './types-51.js';
import type {
    PaymentRiskPreviousAttributes,
    PaymentSourceSummaryPreviousAttributes,
    PaymentSplitPreviousAttributes
} from './types-54.js';
import type { WebhookPaymentIntent } from './types-79.js';
import type { PendingPaymentAction } from './types-55.js';
import type { ResponseMeta } from './types-62.js';
import type { InputValue } from '../runtime.js';
import type { CancelPaymentIntentRequestInput, CapturePaymentIntentRequestInput } from './types-5.js';
import type { ConfirmPaymentIntentRequestInput } from './types-8.js';
import type { CreatePaymentIntentRequestInput } from './types-12.js';
import type { SendPaymentIntentReceiptRequestInput, SelectedProductOption } from './types-68.js';
import type { UpdatePaymentIntentRequestInput } from './types-77.js';
import type {
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutPaymentConfig,
    CheckoutPromotionConfig,
    CheckoutRedirects
} from './types-6.js';
import type { CheckoutTaxConfig, CheckoutTipConfig } from './types-7.js';
import type { ImageAttachment, Image } from './types-31.js';
import type { InventoryRoutingSource } from './types-33.js';
import type { LegalSettings } from './types-39.js';
import type { PaymentLinkSalesSummary, PaymentLinkLineItemVariant } from './types-53.js';
import type { ThemeConfig } from './types-75.js';
import type { PublicResolvedModifierGroup, QuantityPriceBreak } from './types-59.js';
import type { PartnerWebhookEnvelope } from './types-50.js';
import type { OrderLineItemTax, OrderLineItemTaxPreviousAttributes, OrderLineItemTaxRequestInput } from './types-47.js';
import type { ProductPriceRange, ProductPriceRangePreviousAttributes } from './types-57.js';
/**
 * The `payment_intent.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentIntentUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookPaymentIntent}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `processing_fee_money`, `processing_fee_details`, `add_on_fees`,
     * `merchant_net_money`, `payment_collection`, `remaining_refundable_money`.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     * previous_attributes.amount_money (Optional): {@link MoneyValuePreviousAttributes} or null.
     * The amount requested from the buyer, including any tip_money. Capturing doesn't change it:
     * after a partial capture it still shows the requested amount, and captured_money shows what
     * was collected. On a standalone payment intent, PATCH can change it only before the first
     * confirmation attempt. An amount_money or tip_money change that leaves too little for stored
     * splits returns LIMIT_EXCEEDED at the changed field with minimum_money.
     * previous_attributes.amount_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.amount_money.anyOf[2] (Value): null.
     * previous_attributes.authorization_expires_at (Optional): string or null. Effective Flint
     * deadline to capture a manual-capture hold: the earlier of the provider capture deadline and
     * any order resource guarantee. Order guarantees last at most 24 hours from the payment
     * attempt start and may end earlier. Capture is refused at or after this time, even while
     * status is requires_capture. Omitted until a hold is placed.
     * previous_attributes.authorization_expires_at.anyOf[1] (Value): string. Effective Flint
     * deadline to capture a manual-capture hold: the earlier of the provider capture deadline and
     * any order resource guarantee. Order guarantees last at most 24 hours from the payment
     * attempt start and may end earlier. Capture is refused at or after this time, even while
     * status is requires_capture. Omitted until a hold is placed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.authorization_expires_at.anyOf[2] (Value): null.
     * previous_attributes.authorized_at (Optional): string or null. When the processor authorized
     * the payment. Absent until then. previous_attributes.authorized_at.anyOf[1] (Value): string.
     * When the processor authorized the payment. Absent until then. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.authorized_at.anyOf[2] (Value): null.
     * previous_attributes.authorized_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. The amount the processor authorized. It always equals amount_money and doesn't change
     * once set, even when a capture collects more. On a payment intent canceled with
     * cancellation_reason payment_returned, it equals the authorization Flint released instead.
     * Absent until the payment is authorized, and on payments canceled before authorization.
     * previous_attributes.authorized_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.authorized_money.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason (Optional): string or null. Flint-normalized reason
     * the payment intent was canceled. Present only while status is canceled. A cancellation
     * without a specific reason returns payment_canceled. Absent while last_payment_error.code is
     * payment_blocked and Flint has not identified money to return. Unknown processor values are
     * returned as payment_canceled. Value enum: "requested_by_customer", "duplicate",
     * "fraudulent", "abandoned", "invoice_payment_failed", "invoice_voided", "order_closed",
     * "payment_canceled", "payment_returned". previous_attributes.cancellation_reason.anyOf[1]
     * (Value): string. Flint-normalized reason the payment intent was canceled. Present only while
     * status is canceled. A cancellation without a specific reason returns payment_canceled.
     * Absent while last_payment_error.code is payment_blocked and Flint has not identified money
     * to return. Unknown processor values are returned as payment_canceled. Value enum:
     * "requested_by_customer", "duplicate", "fraudulent", "abandoned", "invoice_payment_failed",
     * "invoice_voided", "order_closed", "payment_canceled", "payment_returned".
     * previous_attributes.cancellation_reason.anyOf[2] (Value): null.
     * previous_attributes.capturable_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. The part of the authorization you can still capture. Positive only while status is
     * requires_capture, and zero after you capture or cancel or the authorization expires. The
     * authorization lapses at authorization_expires_at, and a capture attempted after that fails
     * even if this is positive. Absent until the payment is authorized.
     * previous_attributes.capturable_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.capturable_money.anyOf[2] (Value): null.
     * previous_attributes.capture_method (Optional): string or null. When money is collected.
     * Defaults to automatic. Value enum: "automatic", "manual".
     * previous_attributes.capture_method.anyOf[1] (Value): string. When money is collected.
     * Defaults to automatic. Value enum: "automatic", "manual".
     * previous_attributes.capture_method.anyOf[2] (Value): null. previous_attributes.captured_at
     * (Optional): string or null. When money was captured. For automatic capture, this is when the
     * payment succeeded. Absent until capture. previous_attributes.captured_at.anyOf[1] (Value):
     * string. When money was captured. For automatic capture, this is when the payment succeeded.
     * Absent until capture. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.captured_at.anyOf[2] (Value): null. previous_attributes.captured_money
     * (Optional): {@link MoneyValuePreviousAttributes} or null. The amount collected from the
     * buyer, including captured_tip_money. Reconcile revenue and print receipts from this amount,
     * not amount_money. Zero while a hold is open, and positive whenever status is succeeded.
     * After an overcapture it is above authorized_money. Also positive on a payment intent
     * canceled with cancellation_reason payment_returned: Flint captured the money and is
     * returning it through a refund with reason payment_returned. processing_fee_money,
     * merchant_net_money, and refunds are based on it. Absent until the payment is authorized.
     * previous_attributes.captured_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.captured_money.anyOf[2] (Value): null.
     * previous_attributes.captured_tip_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. The part of captured_money that is a tip: the capture's tip_money when it sent one,
     * otherwise the tip the authorization carried, at most captured_money. tip_money keeps the tip
     * the authorization carried. Refunds return it last. Absent until the payment is captured.
     * previous_attributes.captured_tip_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.captured_tip_money.anyOf[2] (Value):
     * null. previous_attributes.checkout_session_id (Optional): string or null. Flint checkout
     * session ID associated with this payment, when present.
     * previous_attributes.checkout_session_id.anyOf[1] (Value): string. Flint checkout session ID
     * associated with this payment, when present. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     * previous_attributes.checkout_session_id.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.customer (Optional): {@link
     * ExpandedCustomerSummaryPreviousAttributes} or null. The linked customer. Returned only with
     * expand=customer. Present only when `expand` includes `customer`; `null` when expanded and
     * there is no related customer. previous_attributes.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2] (Value):
     * null. previous_attributes.customer_id (Optional): string or null. Customer linked to this
     * payment intent. previous_attributes.customer_id.anyOf[1] (Value): string. Customer linked to
     * this payment intent. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null.
     * previous_attributes.customer_presence (Optional): string or null. Whether the customer was
     * present for the most recent confirmation. absent means Flint charged a saved card without
     * them, as a merchant-initiated payment on its stored credential. Subscription renewals and
     * automatic invoice charges are absent, and other payments are absent only when confirmed or
     * paid with customer_presence absent. A customer who pays any of them with a card they enter
     * makes it present. Each confirmation sets it again. Value enum: "present", "absent".
     * previous_attributes.customer_presence.anyOf[1] (Value): string. Whether the customer was
     * present for the most recent confirmation. absent means Flint charged a saved card without
     * them, as a merchant-initiated payment on its stored credential. Subscription renewals and
     * automatic invoice charges are absent, and other payments are absent only when confirmed or
     * paid with customer_presence absent. A customer who pays any of them with a card they enter
     * makes it present. Each confirmation sets it again. Value enum: "present", "absent".
     * previous_attributes.customer_presence.anyOf[2] (Value): null.
     * previous_attributes.dispute_status (Optional): string or null. Dispute state of this
     * payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an
     * issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET
     * /v1/disputes for its deadline and evidence. Value enum: "none", "inquiry_needs_response",
     * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost",
     * "prevented", "other". previous_attributes.dispute_status.anyOf[1] (Value): string. Dispute
     * state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_
     * values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute
     * with GET /v1/disputes for its deadline and evidence. Value enum: "none",
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other".
     * previous_attributes.dispute_status.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system. `null` when no external reference ID has
     * been set on the payment intent. previous_attributes.external_reference_id.anyOf[1] (Value):
     * string. Caller-owned identifier for this resource in an external system. `null` when no
     * external reference ID has been set on the payment intent. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.failed_attempt_count (Optional): integer or null. All-time
     * failed-attempt count. Present on merchant reads; omitted for buyer credentials.
     * previous_attributes.failed_attempt_count.anyOf[1] (Value): integer. All-time failed-attempt
     * count. Present on merchant reads; omitted for buyer credentials. Format: int64.
     * previous_attributes.failed_attempt_count.anyOf[2] (Value): null.
     * previous_attributes.failed_attempts (Optional): Array of {@link
     * FailedPaymentAttemptPreviousAttributes} or null. Newest 50 failed attempts, newest first,
     * with merchant-only card and buyer evidence frozen at admission. Older attempts can be
     * included in failed_attempt_count. previous_attributes.failed_attempts.anyOf[1] (Value):
     * Array of {@link FailedPaymentAttemptPreviousAttributes}. Newest 50 failed attempts, newest
     * first, with merchant-only card and buyer evidence frozen at admission. Older attempts can be
     * included in failed_attempt_count. previous_attributes.failed_attempts.anyOf[1][] (Value):
     * {@link FailedPaymentAttemptPreviousAttributes}. previous_attributes.failed_attempts.anyOf[2]
     * (Value): null. previous_attributes.fulfillment_hold (Optional): {@link
     * PaymentFulfillmentHoldPreviousAttributes} or null. Present when a payment provider asked
     * Flint to pause fulfillment for this payment. While its status is active, open fulfillments
     * on the order are on hold with reason payment_review. payment_intent.fulfillment_hold_updated
     * is sent when the hold starts and when it lifts.
     * previous_attributes.fulfillment_hold.anyOf[1] (Value): {@link
     * PaymentFulfillmentHoldPreviousAttributes}. previous_attributes.fulfillment_hold.anyOf[2]
     * (Value): null. previous_attributes.idempotency_key (Optional): string or null. The
     * Idempotency-Key of the request that created this resource. `null` when that request sent no
     * key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource. Buyer sessions on routes
     * shared with merchants get `null`. `/v1/me` responses do not include this field.
     * previous_attributes.idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
     * request that created this resource. `null` when that request sent no key, Flint created the
     * resource, the reader isn't the caller that created it (another app install, a buyer, or the
     * merchant reading an app's or buyer's record), or the caller that created an older record is
     * unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including
     * replayed responses and webhook events, can return `null`. To find a key that a replay
     * returns as `null`, read the resource. Buyer sessions on routes shared with merchants get
     * `null`. `/v1/me` responses do not include this field.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null. previous_attributes.invoice
     * (Optional): {@link ExpandedInvoiceSummaryPreviousAttributes} or null. The linked invoice.
     * Returned only with expand=invoice. Present only when `expand` includes `invoice`; `null`
     * when expanded and there is no related invoice. previous_attributes.invoice.anyOf[1] (Value):
     * {@link ExpandedInvoiceSummaryPreviousAttributes}. previous_attributes.invoice.anyOf[2]
     * (Value): null. previous_attributes.invoice_id (Optional): string or null. Invoice this
     * payment intent collects, when it pays an invoice. previous_attributes.invoice_id.anyOf[1]
     * (Value): string. Invoice this payment intent collects, when it pays an invoice. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". previous_attributes.invoice_id.anyOf[2] (Value): null.
     * previous_attributes.invoice_schedule_entry_id (Optional): string or null. The invoice
     * installment this payment collects. previous_attributes.invoice_schedule_entry_id.anyOf[1]
     * (Value): string. The invoice installment this payment collects. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". previous_attributes.invoice_schedule_entry_id.anyOf[2]
     * (Value): null. previous_attributes.last_payment_error (Optional): {@link
     * PaymentErrorSummaryPreviousAttributes} or null. Most recent payment error. Null when no
     * payment error is recorded. previous_attributes.last_payment_error.anyOf[1] (Value): {@link
     * PaymentErrorSummaryPreviousAttributes}. previous_attributes.last_payment_error.anyOf[2]
     * (Value): null. previous_attributes.latest_order_payment_attempt_id (Optional): string or
     * null. The order payment attempt that most recently used this payment intent. Start times
     * count to the second; of attempts that started in the same second, the one with the highest
     * order_payment_attempt_id is named. `null` when no attempt has used it yet; omitted for
     * payment intents without an order. It changes only when an attempt starts using this payment
     * intent, which advances version. Returned with merchant credentials; omitted with buyer and
     * checkout credentials. previous_attributes.latest_order_payment_attempt_id.anyOf[1] (Value):
     * string. The order payment attempt that most recently used this payment intent. Start times
     * count to the second; of attempts that started in the same second, the one with the highest
     * order_payment_attempt_id is named. `null` when no attempt has used it yet; omitted for
     * payment intents without an order. It changes only when an attempt starts using this payment
     * intent, which advances version. Returned with merchant credentials; omitted with buyer and
     * checkout credentials. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
     * previous_attributes.latest_order_payment_attempt_id.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. Merchant that owns this payment
     * intent. previous_attributes.merchant_id.anyOf[1] (Value): string. Merchant that owns this
     * payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata. Keys starting with flint_
     * are reserved for Flint and aren't returned. Always present with merchant credentials.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummaryPreviousAttributes} or null. The linked order. Returned only with
     * expand=order. Present only when `expand` includes `order`; `null` when expanded and there is
     * no related order. previous_attributes.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummaryPreviousAttributes}. previous_attributes.order.anyOf[2] (Value): null.
     * previous_attributes.order_edit_id (Optional): string or null. The order edit whose balance
     * this payment collects. Omitted when this payment doesn't collect an edit's balance.
     * previous_attributes.order_edit_id.anyOf[1] (Value): string. The order edit whose balance
     * this payment collects. Omitted when this payment doesn't collect an edit's balance. Example:
     * "oed_01KEZF7C00A6BQ4TBGWFDJ944A". previous_attributes.order_edit_id.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. Order this payment intent belongs
     * to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture
     * and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every
     * payment intent. Order-owned intents accept PATCH for metadata and external_reference_id.
     * previous_attributes.order_id.anyOf[1] (Value): string. Order this payment intent belongs to.
     * Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and
     * cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment
     * intent. Order-owned intents accept PATCH for metadata and external_reference_id. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2] (Value): null.
     * previous_attributes.overcapture (Optional): {@link
     * PaymentIntentOvercapturePreviousAttributes} or null. Whether one capture can collect more
     * than the authorization, and the most it can collect. Present once a payment with
     * request_overcapture true is authorized. Read it to show the limit; capture enforces it.
     * previous_attributes.overcapture.anyOf[1] (Value): {@link
     * PaymentIntentOvercapturePreviousAttributes}. previous_attributes.overcapture.anyOf[2]
     * (Value): null. previous_attributes.payment_flow (Optional): string or null. How the payment
     * was started. Fixed when the payment intent is created. Value enum: "checkout",
     * "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api". previous_attributes.payment_flow.anyOf[1] (Value): string. How
     * the payment was started. Fixed when the payment intent is created. Value enum: "checkout",
     * "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api". previous_attributes.payment_flow.anyOf[2] (Value): null.
     * previous_attributes.payment_intent_id (Optional): string or null. Flint payment intent ID.
     * previous_attributes.payment_intent_id.anyOf[1] (Value): string. Flint payment intent ID.
     * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". previous_attributes.payment_intent_id.anyOf[2]
     * (Value): null. previous_attributes.payment_options (Optional): Array of string or null.
     * Payment options the buyer can use for this payment. [] enum: "card", "apple_pay",
     * "google_pay", "affirm", "ach_debit", "card_present".
     * previous_attributes.payment_options.anyOf[1] (Value): Array of string. Payment options the
     * buyer can use for this payment. [] enum: "card", "apple_pay", "google_pay", "affirm",
     * "ach_debit", "card_present". previous_attributes.payment_options.anyOf[1][] (Value): string.
     * Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
     * previous_attributes.payment_options.anyOf[2] (Value): null.
     * previous_attributes.payment_source (Optional): {@link
     * PaymentSourceSummaryPreviousAttributes} or null. Summary of the card or bank account used
     * for the payment. Absent until a payment source is attached.
     * previous_attributes.payment_source.anyOf[1] (Value): {@link
     * PaymentSourceSummaryPreviousAttributes}. previous_attributes.payment_source.anyOf[2]
     * (Value): null. previous_attributes.platform_fee (Optional): {@link
     * PaymentIntentPlatformFeePreviousAttributes} or null. The platform fee a partner app charges
     * on this payment, when it created the payment with an install token and a fee. Absent when
     * the payment carries none. Returned only to merchant credentials; omitted for buyer and
     * checkout credentials. previous_attributes.platform_fee.anyOf[1] (Value): {@link
     * PaymentIntentPlatformFeePreviousAttributes}. previous_attributes.platform_fee.anyOf[2]
     * (Value): null. previous_attributes.reader_id (Optional): string or null. The reader the
     * payment is or was last presented on. Set when Flint presents it and kept afterward. While
     * processing or requires_action with a reader_id and no payment_source.card.card_present, the
     * payment is on that reader now. After a card is read, the payment can stay processing while
     * Flint captures it. previous_attributes.reader_id.anyOf[1] (Value): string. The reader the
     * payment is or was last presented on. Set when Flint presents it and kept afterward. While
     * processing or requires_action with a reader_id and no payment_source.card.card_present, the
     * payment is on that reader now. After a card is read, the payment can stay processing while
     * Flint captures it. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C".
     * previous_attributes.reader_id.anyOf[2] (Value): null. previous_attributes.receipt_email
     * (Optional): string or null. Email address for this payment's receipt. When it isn't set,
     * Flint uses the customer's email. `null` when no receipt email has been set on the payment
     * intent. previous_attributes.receipt_email.anyOf[1] (Value): string. Email address for this
     * payment's receipt. When it isn't set, Flint uses the customer's email. `null` when no
     * receipt email has been set on the payment intent. Format: email. maxLength: 255. Example:
     * "buyer@example.com". previous_attributes.receipt_email.anyOf[2] (Value): null.
     * previous_attributes.refund_expires_at (Optional): string or null. Last time Flint can refund
     * this payment through the original payment method. A refund submitted at exactly this time is
     * accepted; after it, refunds through the original payment method are refused. Today only
     * Affirm has a refund window: 120 days after the payment settles. `null` when the method has
     * no refund window, the payment has not succeeded with captured money, or its capture time is
     * missing. Always present with merchant credentials.
     * previous_attributes.refund_expires_at.anyOf[1] (Value): string. Last time Flint can refund
     * this payment through the original payment method. A refund submitted at exactly this time is
     * accepted; after it, refunds through the original payment method are refused. Today only
     * Affirm has a refund window: 120 days after the payment settles. `null` when the method has
     * no refund window, the payment has not succeeded with captured money, or its capture time is
     * missing. Always present with merchant credentials. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.refund_expires_at.anyOf[2] (Value): null.
     * previous_attributes.refund_status (Optional): string or null. How much of captured_money has
     * been refunded, including value issued as store credit, based on refunded_money. Value enum:
     * "none", "partially_refunded", "refunded". previous_attributes.refund_status.anyOf[1]
     * (Value): string. How much of captured_money has been refunded, including value issued as
     * store credit, based on refunded_money. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[2] (Value): null. previous_attributes.refunded_money
     * (Optional): {@link MoneyValuePreviousAttributes} or null. Total refunded against
     * captured_money, including value issued as store credit and processor refunds still pending.
     * Failed and canceled refunds aren't counted. Zero when nothing has been refunded.
     * previous_attributes.refunded_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.refunded_money.anyOf[2] (Value): null.
     * previous_attributes.released_money (Optional): {@link MoneyValuePreviousAttributes} or null.
     * The part of the authorization returned to the buyer without being charged: the uncaptured
     * remainder after a partial capture, or the whole authorization after a cancellation or
     * expiry. It was never collected, so it needs no refund and can't be captured later. Zero
     * after a capture at or above the authorization. Absent until the payment is authorized.
     * previous_attributes.released_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.released_money.anyOf[2] (Value): null.
     * previous_attributes.request_overcapture (Optional): boolean or null. Whether one capture may
     * collect more than the authorization where the card network allows it. Fixed at create.
     * Always present with merchant credentials; omitted with buyer and checkout credentials.
     * previous_attributes.request_overcapture.anyOf[1] (Value): boolean. Whether one capture may
     * collect more than the authorization where the card network allows it. Fixed at create.
     * Always present with merchant credentials; omitted with buyer and checkout credentials.
     * previous_attributes.request_overcapture.anyOf[2] (Value): null.
     * previous_attributes.return_id (Optional): string or null. Flint return ID associated with
     * this payment, when present. previous_attributes.return_id.anyOf[1] (Value): string. Flint
     * return ID associated with this payment, when present. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". previous_attributes.return_id.anyOf[2] (Value): null.
     * previous_attributes.return_resolution_id (Optional): string or null. The return resolution
     * whose balance this payment collects. Set for exchange balances and corrections.
     * previous_attributes.return_resolution_id.anyOf[1] (Value): string. The return resolution
     * whose balance this payment collects. Set for exchange balances and corrections. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". previous_attributes.return_resolution_id.anyOf[2]
     * (Value): null. previous_attributes.risk (Optional): {@link PaymentRiskPreviousAttributes} or
     * null. Risk assessment. Always present with merchant credentials. `null` when the payment
     * intent's latest payment attempt has no completed risk assessment, such as before its first
     * confirmation. Omitted with the checkout credential. previous_attributes.risk.anyOf[1]
     * (Value): {@link PaymentRiskPreviousAttributes}. previous_attributes.risk.anyOf[2] (Value):
     * null. previous_attributes.selected_payment_option (Optional): string or null. The payment
     * option the most recent confirmation used. Absent until the payment intent is first
     * confirmed. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit",
     * "card_present". previous_attributes.selected_payment_option.anyOf[1] (Value): string. The
     * payment option the most recent confirmation used. Absent until the payment intent is first
     * confirmed. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit",
     * "card_present". previous_attributes.selected_payment_option.anyOf[2] (Value): null.
     * previous_attributes.splits (Optional): Array of {@link PaymentSplitPreviousAttributes} or
     * null. Top-level PaymentSplit children in their current state, embedded whole. Empty when the
     * payment has no splits. Child changes do not send payment_intent.updated. Omitted for buyer
     * and checkout credentials. previous_attributes.splits.anyOf[1] (Value): Array of {@link
     * PaymentSplitPreviousAttributes}. Top-level PaymentSplit children in their current state,
     * embedded whole. Empty when the payment has no splits. Child changes do not send
     * payment_intent.updated. Omitted for buyer and checkout credentials.
     * previous_attributes.splits.anyOf[1][] (Value): {@link PaymentSplitPreviousAttributes}.
     * previous_attributes.splits.anyOf[2] (Value): null. previous_attributes.statement_descriptor
     * (Optional): string or null. The text shown on the buyer's card or bank statement for this
     * payment. `null` until the charge is created. `null` when the provider supplies no
     * descriptor. Frozen when the charge is created.
     * previous_attributes.statement_descriptor.anyOf[1] (Value): string. The text shown on the
     * buyer's card or bank statement for this payment. `null` until the charge is created. `null`
     * when the provider supplies no descriptor. Frozen when the charge is created.
     * previous_attributes.statement_descriptor.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Lifecycle status. requires_payment_method covers both a new
     * payment intent and one whose last attempt failed, so read last_payment_error with it.
     * succeeded, canceled, and expired are final. Refunds and disputes never change status. Value
     * enum: "requires_payment_method", "requires_confirmation", "requires_action", "processing",
     * "requires_capture", "canceled", "succeeded", "expired". previous_attributes.status.anyOf[1]
     * (Value): string. Lifecycle status. requires_payment_method covers both a new payment intent
     * and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled,
     * and expired are final. Refunds and disputes never change status. Value enum:
     * "requires_payment_method", "requires_confirmation", "requires_action", "processing",
     * "requires_capture", "canceled", "succeeded", "expired". previous_attributes.status.anyOf[2]
     * (Value): null. previous_attributes.subscription_id (Optional): string or null. The
     * subscription whose billing charged this payment: its first charge, a renewal, a retry or a
     * setup fee. Not set for the checkout payment that created a subscription.
     * previous_attributes.subscription_id.anyOf[1] (Value): string. The subscription whose billing
     * charged this payment: its first charge, a renewal, a retry or a setup fee. Not set for the
     * checkout payment that created a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * previous_attributes.subscription_id.anyOf[2] (Value): null.
     * previous_attributes.support_reference (Optional): string or null. Opaque payment reference
     * to share with merchant support. Do not parse its format.
     * previous_attributes.support_reference.anyOf[1] (Value): string. Opaque payment reference to
     * share with merchant support. Do not parse its format.
     * previous_attributes.support_reference.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Verbs this
     * payment intent accepts now, each a POST to /v1/payment-intents/{payment_intent_id}/{action}.
     * The list includes stored order facts and can change without a payment intent version change.
     * Order legs list confirm when a single leg can pay the order or an open attempt can continue
     * it. Several unpaid legs, selected gift cards, or automatic tax with a leg below the balance
     * require pay_order instead. Invoice payments list only cancel. An unused first-period
     * subscription payment lists cancel once the subscription is canceled. Order edit payments
     * list confirm while awaiting payment details or action. A listed action can still be refused
     * due to an open risk review, an order payment attempt, a closed order, or the merchant
     * account. A managed_by_owner refusal names the owner and its command in
     * remediation.next_actions. The merchant list is credential-independent. Checkout credentials
     * receive that list filtered to confirm and cancel on their own session's intents, never
     * capture. Customer sessions omit this field. New actions may be added. [] enum: "confirm",
     * "capture", "cancel". previous_attributes.supported_actions.anyOf[1] (Value): Array of
     * string. Verbs this payment intent accepts now, each a POST to
     * /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored order facts and
     * can change without a payment intent version change. Order legs list confirm when a single
     * leg can pay the order or an open attempt can continue it. Several unpaid legs, selected gift
     * cards, or automatic tax with a leg below the balance require pay_order instead. Invoice
     * payments list only cancel. An unused first-period subscription payment lists cancel once the
     * subscription is canceled. Order edit payments list confirm while awaiting payment details or
     * action. A listed action can still be refused due to an open risk review, an order payment
     * attempt, a closed order, or the merchant account. A managed_by_owner refusal names the owner
     * and its command in remediation.next_actions. The merchant list is credential-independent.
     * Checkout credentials receive that list filtered to confirm and cancel on their own session's
     * intents, never capture. Customer sessions omit this field. New actions may be added. []
     * enum: "confirm", "capture", "cancel". previous_attributes.supported_actions.anyOf[1][]
     * (Value): string. Value enum: "confirm", "capture", "cancel".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.tip_money
     * (Optional): {@link MoneyValuePreviousAttributes} or null. Portion of amount_money that is a
     * tip. Uses amount_money's currency and is at most amount_money. `null` when no tip is set,
     * and for an order payment until its payment attempt has moved past requires_payment_method
     * and requires_confirmation. An order payment without a tip can return an amount of 0 instead.
     * previous_attributes.tip_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.tip_money.anyOf[2] (Value): null.
     * previous_attributes.transaction_purpose (Optional): string or null. Why a bank debit is
     * taken. Set only when payment_options includes ach_debit, and fixed once the payment intent
     * exists. Value enum: "goods", "services", "other".
     * previous_attributes.transaction_purpose.anyOf[1] (Value): string. Why a bank debit is taken.
     * Set only when payment_options includes ach_debit, and fixed once the payment intent exists.
     * Value enum: "goods", "services", "other". previous_attributes.transaction_purpose.anyOf[2]
     * (Value): null. previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Persisted version of this
     * resource's owned state. Expanded resources and external observations can change
     * independently. previous_attributes.version.anyOf[1] (Value): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `processing_fee_details`, `add_on_fees`, `merchant_net_money`,
         * `payment_collection`, `remaining_refundable_money`.
         */
        "object": WebhookPaymentIntent;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. amount_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. The amount requested from the buyer, including
         * any tip_money. Capturing doesn't change it: after a partial capture it still shows the
         * requested amount, and captured_money shows what was collected. On a standalone payment
         * intent, PATCH can change it only before the first confirmation attempt. An amount_money
         * or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at
         * the changed field with minimum_money. amount_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. amount_money.anyOf[2] (Value): null.
         * authorization_expires_at (Optional): string or null. Effective Flint deadline to capture
         * a manual-capture hold: the earlier of the provider capture deadline and any order
         * resource guarantee. Order guarantees last at most 24 hours from the payment attempt
         * start and may end earlier. Capture is refused at or after this time, even while status
         * is requires_capture. Omitted until a hold is placed. authorization_expires_at.anyOf[1]
         * (Value): string. Effective Flint deadline to capture a manual-capture hold: the earlier
         * of the provider capture deadline and any order resource guarantee. Order guarantees last
         * at most 24 hours from the payment attempt start and may end earlier. Capture is refused
         * at or after this time, even while status is requires_capture. Omitted until a hold is
         * placed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * authorization_expires_at.anyOf[2] (Value): null. authorized_at (Optional): string or
         * null. When the processor authorized the payment. Absent until then.
         * authorized_at.anyOf[1] (Value): string. When the processor authorized the payment.
         * Absent until then. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * authorized_at.anyOf[2] (Value): null. authorized_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. The amount the processor authorized. It always
         * equals amount_money and doesn't change once set, even when a capture collects more. On a
         * payment intent canceled with cancellation_reason payment_returned, it equals the
         * authorization Flint released instead. Absent until the payment is authorized, and on
         * payments canceled before authorization. authorized_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. authorized_money.anyOf[2] (Value): null.
         * cancellation_reason (Optional): string or null. Flint-normalized reason the payment
         * intent was canceled. Present only while status is canceled. A cancellation without a
         * specific reason returns payment_canceled. Absent while last_payment_error.code is
         * payment_blocked and Flint has not identified money to return. Unknown processor values
         * are returned as payment_canceled. Value enum: "requested_by_customer", "duplicate",
         * "fraudulent", "abandoned", "invoice_payment_failed", "invoice_voided", "order_closed",
         * "payment_canceled", "payment_returned". cancellation_reason.anyOf[1] (Value): string.
         * Flint-normalized reason the payment intent was canceled. Present only while status is
         * canceled. A cancellation without a specific reason returns payment_canceled. Absent
         * while last_payment_error.code is payment_blocked and Flint has not identified money to
         * return. Unknown processor values are returned as payment_canceled. Value enum:
         * "requested_by_customer", "duplicate", "fraudulent", "abandoned",
         * "invoice_payment_failed", "invoice_voided", "order_closed", "payment_canceled",
         * "payment_returned". cancellation_reason.anyOf[2] (Value): null. capturable_money
         * (Optional): {@link MoneyValuePreviousAttributes} or null. The part of the authorization
         * you can still capture. Positive only while status is requires_capture, and zero after
         * you capture or cancel or the authorization expires. The authorization lapses at
         * authorization_expires_at, and a capture attempted after that fails even if this is
         * positive. Absent until the payment is authorized. capturable_money.anyOf[1] (Value):
         * {@link MoneyValuePreviousAttributes}. capturable_money.anyOf[2] (Value): null.
         * capture_method (Optional): string or null. When money is collected. Defaults to
         * automatic. Value enum: "automatic", "manual". capture_method.anyOf[1] (Value): string.
         * When money is collected. Defaults to automatic. Value enum: "automatic", "manual".
         * capture_method.anyOf[2] (Value): null. captured_at (Optional): string or null. When
         * money was captured. For automatic capture, this is when the payment succeeded. Absent
         * until capture. captured_at.anyOf[1] (Value): string. When money was captured. For
         * automatic capture, this is when the payment succeeded. Absent until capture. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". captured_at.anyOf[2] (Value): null.
         * captured_money (Optional): {@link MoneyValuePreviousAttributes} or null. The amount
         * collected from the buyer, including captured_tip_money. Reconcile revenue and print
         * receipts from this amount, not amount_money. Zero while a hold is open, and positive
         * whenever status is succeeded. After an overcapture it is above authorized_money. Also
         * positive on a payment intent canceled with cancellation_reason payment_returned: Flint
         * captured the money and is returning it through a refund with reason payment_returned.
         * processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the
         * payment is authorized. captured_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. captured_money.anyOf[2] (Value): null. captured_tip_money
         * (Optional): {@link MoneyValuePreviousAttributes} or null. The part of captured_money
         * that is a tip: the capture's tip_money when it sent one, otherwise the tip the
         * authorization carried, at most captured_money. tip_money keeps the tip the authorization
         * carried. Refunds return it last. Absent until the payment is captured.
         * captured_tip_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * captured_tip_money.anyOf[2] (Value): null. checkout_session_id (Optional): string or
         * null. Flint checkout session ID associated with this payment, when present.
         * checkout_session_id.anyOf[1] (Value): string. Flint checkout session ID associated with
         * this payment, when present. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
         * checkout_session_id.anyOf[2] (Value): null. created_at (Optional): string or null.
         * RFC3339 timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. customer
         * (Optional): {@link ExpandedCustomerSummaryPreviousAttributes} or null. The linked
         * customer. Returned only with expand=customer. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummaryPreviousAttributes}. customer.anyOf[2] (Value):
         * null. customer_id (Optional): string or null. Customer linked to this payment intent.
         * customer_id.anyOf[1] (Value): string. Customer linked to this payment intent. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null. customer_presence
         * (Optional): string or null. Whether the customer was present for the most recent
         * confirmation. absent means Flint charged a saved card without them, as a
         * merchant-initiated payment on its stored credential. Subscription renewals and automatic
         * invoice charges are absent, and other payments are absent only when confirmed or paid
         * with customer_presence absent. A customer who pays any of them with a card they enter
         * makes it present. Each confirmation sets it again. Value enum: "present", "absent".
         * customer_presence.anyOf[1] (Value): string. Whether the customer was present for the
         * most recent confirmation. absent means Flint charged a saved card without them, as a
         * merchant-initiated payment on its stored credential. Subscription renewals and automatic
         * invoice charges are absent, and other payments are absent only when confirmed or paid
         * with customer_presence absent. A customer who pays any of them with a card they enter
         * makes it present. Each confirmation sets it again. Value enum: "present", "absent".
         * customer_presence.anyOf[2] (Value): null. dispute_status (Optional): string or null.
         * Dispute state of this payment. none means no dispute or inquiry is open or recorded. The
         * inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read
         * the dispute with GET /v1/disputes for its deadline and evidence. Value enum: "none",
         * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
         * "under_review", "won", "lost", "prevented", "other". dispute_status.anyOf[1] (Value):
         * string. Dispute state of this payment. none means no dispute or inquiry is open or
         * recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a
         * chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Value
         * enum: "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
         * "needs_response", "under_review", "won", "lost", "prevented", "other".
         * dispute_status.anyOf[2] (Value): null. external_reference_id (Optional): string or null.
         * Caller-owned identifier for this resource in an external system. `null` when no external
         * reference ID has been set on the payment intent. external_reference_id.anyOf[1] (Value):
         * string. Caller-owned identifier for this resource in an external system. `null` when no
         * external reference ID has been set on the payment intent. minLength: 1. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null.
         * failed_attempt_count (Optional): integer or null. All-time failed-attempt count. Present
         * on merchant reads; omitted for buyer credentials. failed_attempt_count.anyOf[1] (Value):
         * integer. All-time failed-attempt count. Present on merchant reads; omitted for buyer
         * credentials. Format: int64. failed_attempt_count.anyOf[2] (Value): null. failed_attempts
         * (Optional): Array of {@link FailedPaymentAttemptPreviousAttributes} or null. Newest 50
         * failed attempts, newest first, with merchant-only card and buyer evidence frozen at
         * admission. Older attempts can be included in failed_attempt_count.
         * failed_attempts.anyOf[1] (Value): Array of {@link
         * FailedPaymentAttemptPreviousAttributes}. Newest 50 failed attempts, newest first, with
         * merchant-only card and buyer evidence frozen at admission. Older attempts can be
         * included in failed_attempt_count. failed_attempts.anyOf[1][] (Value): {@link
         * FailedPaymentAttemptPreviousAttributes}. failed_attempts.anyOf[2] (Value): null.
         * fulfillment_hold (Optional): {@link PaymentFulfillmentHoldPreviousAttributes} or null.
         * Present when a payment provider asked Flint to pause fulfillment for this payment. While
         * its status is active, open fulfillments on the order are on hold with reason
         * payment_review. payment_intent.fulfillment_hold_updated is sent when the hold starts and
         * when it lifts. fulfillment_hold.anyOf[1] (Value): {@link
         * PaymentFulfillmentHoldPreviousAttributes}. fulfillment_hold.anyOf[2] (Value): null.
         * idempotency_key (Optional): string or null. The Idempotency-Key of the request that
         * created this resource. `null` when that request sent no key, Flint created the resource,
         * the reader isn't the caller that created it (another app install, a buyer, or the
         * merchant reading an app's or buyer's record), or the caller that created an older record
         * is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads,
         * including replayed responses and webhook events, can return `null`. To find a key that a
         * replay returns as `null`, read the resource. Buyer sessions on routes shared with
         * merchants get `null`. `/v1/me` responses do not include this field.
         * idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the request that
         * created this resource. `null` when that request sent no key, Flint created the resource,
         * the reader isn't the caller that created it (another app install, a buyer, or the
         * merchant reading an app's or buyer's record), or the caller that created an older record
         * is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads,
         * including replayed responses and webhook events, can return `null`. To find a key that a
         * replay returns as `null`, read the resource. Buyer sessions on routes shared with
         * merchants get `null`. `/v1/me` responses do not include this field.
         * idempotency_key.anyOf[2] (Value): null. invoice (Optional): {@link
         * ExpandedInvoiceSummaryPreviousAttributes} or null. The linked invoice. Returned only
         * with expand=invoice. Present only when `expand` includes `invoice`; `null` when expanded
         * and there is no related invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummaryPreviousAttributes}. invoice.anyOf[2] (Value): null. invoice_id
         * (Optional): string or null. Invoice this payment intent collects, when it pays an
         * invoice. invoice_id.anyOf[1] (Value): string. Invoice this payment intent collects, when
         * it pays an invoice. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_id.anyOf[2]
         * (Value): null. invoice_schedule_entry_id (Optional): string or null. The invoice
         * installment this payment collects. invoice_schedule_entry_id.anyOf[1] (Value): string.
         * The invoice installment this payment collects. Example:
         * "invse_01KEZF7C006JCPQBD8VZ0RNT6R". invoice_schedule_entry_id.anyOf[2] (Value): null.
         * last_payment_error (Optional): {@link PaymentErrorSummaryPreviousAttributes} or null.
         * Most recent payment error. Null when no payment error is recorded.
         * last_payment_error.anyOf[1] (Value): {@link PaymentErrorSummaryPreviousAttributes}.
         * last_payment_error.anyOf[2] (Value): null. latest_order_payment_attempt_id (Optional):
         * string or null. The order payment attempt that most recently used this payment intent.
         * Start times count to the second; of attempts that started in the same second, the one
         * with the highest order_payment_attempt_id is named. `null` when no attempt has used it
         * yet; omitted for payment intents without an order. It changes only when an attempt
         * starts using this payment intent, which advances version. Returned with merchant
         * credentials; omitted with buyer and checkout credentials.
         * latest_order_payment_attempt_id.anyOf[1] (Value): string. The order payment attempt that
         * most recently used this payment intent. Start times count to the second; of attempts
         * that started in the same second, the one with the highest order_payment_attempt_id is
         * named. `null` when no attempt has used it yet; omitted for payment intents without an
         * order. It changes only when an attempt starts using this payment intent, which advances
         * version. Returned with merchant credentials; omitted with buyer and checkout
         * credentials. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
         * latest_order_payment_attempt_id.anyOf[2] (Value): null. merchant_id (Optional): string
         * or null. Merchant that owns this payment intent. merchant_id.anyOf[1] (Value): string.
         * Merchant that owns this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * merchant_id.anyOf[2] (Value): null. metadata (Optional): {@link MetadataMap} or null.
         * Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't
         * returned. Always present with merchant credentials. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. order (Optional): {@link
         * ExpandedOrderSummaryPreviousAttributes} or null. The linked order. Returned only with
         * expand=order. Present only when `expand` includes `order`; `null` when expanded and
         * there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2] (Value): null. order_edit_id
         * (Optional): string or null. The order edit whose balance this payment collects. Omitted
         * when this payment doesn't collect an edit's balance. order_edit_id.anyOf[1] (Value):
         * string. The order edit whose balance this payment collects. Omitted when this payment
         * doesn't collect an edit's balance. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
         * order_edit_id.anyOf[2] (Value): null. order_id (Optional): string or null. Order this
         * payment intent belongs to. Create it through the order and confirm it with POST
         * /v1/orders/{order_id}/pay. Capture and cancel use POST
         * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
         * Order-owned intents accept PATCH for metadata and external_reference_id.
         * order_id.anyOf[1] (Value): string. Order this payment intent belongs to. Create it
         * through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel
         * use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment
         * intent. Order-owned intents accept PATCH for metadata and external_reference_id.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. overcapture
         * (Optional): {@link PaymentIntentOvercapturePreviousAttributes} or null. Whether one
         * capture can collect more than the authorization, and the most it can collect. Present
         * once a payment with request_overcapture true is authorized. Read it to show the limit;
         * capture enforces it. overcapture.anyOf[1] (Value): {@link
         * PaymentIntentOvercapturePreviousAttributes}. overcapture.anyOf[2] (Value): null.
         * payment_flow (Optional): string or null. How the payment was started. Fixed when the
         * payment intent is created. Value enum: "checkout", "payment_link", "invoice",
         * "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
         * payment_flow.anyOf[1] (Value): string. How the payment was started. Fixed when the
         * payment intent is created. Value enum: "checkout", "payment_link", "invoice",
         * "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
         * payment_flow.anyOf[2] (Value): null. payment_intent_id (Optional): string or null. Flint
         * payment intent ID. payment_intent_id.anyOf[1] (Value): string. Flint payment intent ID.
         * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intent_id.anyOf[2] (Value): null.
         * payment_options (Optional): Array of string or null. Payment options the buyer can use
         * for this payment. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit",
         * "card_present". payment_options.anyOf[1] (Value): Array of string. Payment options the
         * buyer can use for this payment. [] enum: "card", "apple_pay", "google_pay", "affirm",
         * "ach_debit", "card_present". payment_options.anyOf[1][] (Value): string. Value enum:
         * "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
         * payment_options.anyOf[2] (Value): null. payment_source (Optional): {@link
         * PaymentSourceSummaryPreviousAttributes} or null. Summary of the card or bank account
         * used for the payment. Absent until a payment source is attached. payment_source.anyOf[1]
         * (Value): {@link PaymentSourceSummaryPreviousAttributes}. payment_source.anyOf[2]
         * (Value): null. platform_fee (Optional): {@link
         * PaymentIntentPlatformFeePreviousAttributes} or null. The platform fee a partner app
         * charges on this payment, when it created the payment with an install token and a fee.
         * Absent when the payment carries none. Returned only to merchant credentials; omitted for
         * buyer and checkout credentials. platform_fee.anyOf[1] (Value): {@link
         * PaymentIntentPlatformFeePreviousAttributes}. platform_fee.anyOf[2] (Value): null.
         * reader_id (Optional): string or null. The reader the payment is or was last presented
         * on. Set when Flint presents it and kept afterward. While processing or requires_action
         * with a reader_id and no payment_source.card.card_present, the payment is on that reader
         * now. After a card is read, the payment can stay processing while Flint captures it.
         * reader_id.anyOf[1] (Value): string. The reader the payment is or was last presented on.
         * Set when Flint presents it and kept afterward. While processing or requires_action with
         * a reader_id and no payment_source.card.card_present, the payment is on that reader now.
         * After a card is read, the payment can stay processing while Flint captures it. Example:
         * "rdr_01KEZF7C007JA0G24M7SD6P46C". reader_id.anyOf[2] (Value): null. receipt_email
         * (Optional): string or null. Email address for this payment's receipt. When it isn't set,
         * Flint uses the customer's email. `null` when no receipt email has been set on the
         * payment intent. receipt_email.anyOf[1] (Value): string. Email address for this payment's
         * receipt. When it isn't set, Flint uses the customer's email. `null` when no receipt
         * email has been set on the payment intent. Format: email. maxLength: 255. Example:
         * "buyer@example.com". receipt_email.anyOf[2] (Value): null. refund_expires_at (Optional):
         * string or null. Last time Flint can refund this payment through the original payment
         * method. A refund submitted at exactly this time is accepted; after it, refunds through
         * the original payment method are refused. Today only Affirm has a refund window: 120 days
         * after the payment settles. `null` when the method has no refund window, the payment has
         * not succeeded with captured money, or its capture time is missing. Always present with
         * merchant credentials. refund_expires_at.anyOf[1] (Value): string. Last time Flint can
         * refund this payment through the original payment method. A refund submitted at exactly
         * this time is accepted; after it, refunds through the original payment method are
         * refused. Today only Affirm has a refund window: 120 days after the payment settles.
         * `null` when the method has no refund window, the payment has not succeeded with captured
         * money, or its capture time is missing. Always present with merchant credentials. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". refund_expires_at.anyOf[2] (Value): null.
         * refund_status (Optional): string or null. How much of captured_money has been refunded,
         * including value issued as store credit, based on refunded_money. Value enum: "none",
         * "partially_refunded", "refunded". refund_status.anyOf[1] (Value): string. How much of
         * captured_money has been refunded, including value issued as store credit, based on
         * refunded_money. Value enum: "none", "partially_refunded", "refunded".
         * refund_status.anyOf[2] (Value): null. refunded_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Total refunded against captured_money, including
         * value issued as store credit and processor refunds still pending. Failed and canceled
         * refunds aren't counted. Zero when nothing has been refunded. refunded_money.anyOf[1]
         * (Value): {@link MoneyValuePreviousAttributes}. refunded_money.anyOf[2] (Value): null.
         * released_money (Optional): {@link MoneyValuePreviousAttributes} or null. The part of the
         * authorization returned to the buyer without being charged: the uncaptured remainder
         * after a partial capture, or the whole authorization after a cancellation or expiry. It
         * was never collected, so it needs no refund and can't be captured later. Zero after a
         * capture at or above the authorization. Absent until the payment is authorized.
         * released_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * released_money.anyOf[2] (Value): null. request_overcapture (Optional): boolean or null.
         * Whether one capture may collect more than the authorization where the card network
         * allows it. Fixed at create. Always present with merchant credentials; omitted with buyer
         * and checkout credentials. request_overcapture.anyOf[1] (Value): boolean. Whether one
         * capture may collect more than the authorization where the card network allows it. Fixed
         * at create. Always present with merchant credentials; omitted with buyer and checkout
         * credentials. request_overcapture.anyOf[2] (Value): null. return_id (Optional): string or
         * null. Flint return ID associated with this payment, when present. return_id.anyOf[1]
         * (Value): string. Flint return ID associated with this payment, when present. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_id.anyOf[2] (Value): null. return_resolution_id
         * (Optional): string or null. The return resolution whose balance this payment collects.
         * Set for exchange balances and corrections. return_resolution_id.anyOf[1] (Value):
         * string. The return resolution whose balance this payment collects. Set for exchange
         * balances and corrections. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
         * return_resolution_id.anyOf[2] (Value): null. risk (Optional): {@link
         * PaymentRiskPreviousAttributes} or null. Risk assessment. Always present with merchant
         * credentials. `null` when the payment intent's latest payment attempt has no completed
         * risk assessment, such as before its first confirmation. Omitted with the checkout
         * credential. risk.anyOf[1] (Value): {@link PaymentRiskPreviousAttributes}. risk.anyOf[2]
         * (Value): null. selected_payment_option (Optional): string or null. The payment option
         * the most recent confirmation used. Absent until the payment intent is first confirmed.
         * Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
         * selected_payment_option.anyOf[1] (Value): string. The payment option the most recent
         * confirmation used. Absent until the payment intent is first confirmed. Value enum:
         * "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
         * selected_payment_option.anyOf[2] (Value): null. splits (Optional): Array of {@link
         * PaymentSplitPreviousAttributes} or null. Top-level PaymentSplit children in their
         * current state, embedded whole. Empty when the payment has no splits. Child changes do
         * not send payment_intent.updated. Omitted for buyer and checkout credentials.
         * splits.anyOf[1] (Value): Array of {@link PaymentSplitPreviousAttributes}. Top-level
         * PaymentSplit children in their current state, embedded whole. Empty when the payment has
         * no splits. Child changes do not send payment_intent.updated. Omitted for buyer and
         * checkout credentials. splits.anyOf[1][] (Value): {@link PaymentSplitPreviousAttributes}.
         * splits.anyOf[2] (Value): null. statement_descriptor (Optional): string or null. The text
         * shown on the buyer's card or bank statement for this payment. `null` until the charge is
         * created. `null` when the provider supplies no descriptor. Frozen when the charge is
         * created. statement_descriptor.anyOf[1] (Value): string. The text shown on the buyer's
         * card or bank statement for this payment. `null` until the charge is created. `null` when
         * the provider supplies no descriptor. Frozen when the charge is created.
         * statement_descriptor.anyOf[2] (Value): null. status (Optional): string or null.
         * Lifecycle status. requires_payment_method covers both a new payment intent and one whose
         * last attempt failed, so read last_payment_error with it. succeeded, canceled, and
         * expired are final. Refunds and disputes never change status. Value enum:
         * "requires_payment_method", "requires_confirmation", "requires_action", "processing",
         * "requires_capture", "canceled", "succeeded", "expired". status.anyOf[1] (Value): string.
         * Lifecycle status. requires_payment_method covers both a new payment intent and one whose
         * last attempt failed, so read last_payment_error with it. succeeded, canceled, and
         * expired are final. Refunds and disputes never change status. Value enum:
         * "requires_payment_method", "requires_confirmation", "requires_action", "processing",
         * "requires_capture", "canceled", "succeeded", "expired". status.anyOf[2] (Value): null.
         * subscription_id (Optional): string or null. The subscription whose billing charged this
         * payment: its first charge, a renewal, a retry or a setup fee. Not set for the checkout
         * payment that created a subscription. subscription_id.anyOf[1] (Value): string. The
         * subscription whose billing charged this payment: its first charge, a renewal, a retry or
         * a setup fee. Not set for the checkout payment that created a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_id.anyOf[2] (Value): null.
         * support_reference (Optional): string or null. Opaque payment reference to share with
         * merchant support. Do not parse its format. support_reference.anyOf[1] (Value): string.
         * Opaque payment reference to share with merchant support. Do not parse its format.
         * support_reference.anyOf[2] (Value): null. supported_actions (Optional): Array of string
         * or null. Verbs this payment intent accepts now, each a POST to
         * /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored order facts
         * and can change without a payment intent version change. Order legs list confirm when a
         * single leg can pay the order or an open attempt can continue it. Several unpaid legs,
         * selected gift cards, or automatic tax with a leg below the balance require pay_order
         * instead. Invoice payments list only cancel. An unused first-period subscription payment
         * lists cancel once the subscription is canceled. Order edit payments list confirm while
         * awaiting payment details or action. A listed action can still be refused due to an open
         * risk review, an order payment attempt, a closed order, or the merchant account. A
         * managed_by_owner refusal names the owner and its command in remediation.next_actions.
         * The merchant list is credential-independent. Checkout credentials receive that list
         * filtered to confirm and cancel on their own session's intents, never capture. Customer
         * sessions omit this field. New actions may be added. [] enum: "confirm", "capture",
         * "cancel". supported_actions.anyOf[1] (Value): Array of string. Verbs this payment intent
         * accepts now, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. The list
         * includes stored order facts and can change without a payment intent version change.
         * Order legs list confirm when a single leg can pay the order or an open attempt can
         * continue it. Several unpaid legs, selected gift cards, or automatic tax with a leg below
         * the balance require pay_order instead. Invoice payments list only cancel. An unused
         * first-period subscription payment lists cancel once the subscription is canceled. Order
         * edit payments list confirm while awaiting payment details or action. A listed action can
         * still be refused due to an open risk review, an order payment attempt, a closed order,
         * or the merchant account. A managed_by_owner refusal names the owner and its command in
         * remediation.next_actions. The merchant list is credential-independent. Checkout
         * credentials receive that list filtered to confirm and cancel on their own session's
         * intents, never capture. Customer sessions omit this field. New actions may be added. []
         * enum: "confirm", "capture", "cancel". supported_actions.anyOf[1][] (Value): string.
         * Value enum: "confirm", "capture", "cancel". supported_actions.anyOf[2] (Value): null.
         * tip_money (Optional): {@link MoneyValuePreviousAttributes} or null. Portion of
         * amount_money that is a tip. Uses amount_money's currency and is at most amount_money.
         * `null` when no tip is set, and for an order payment until its payment attempt has moved
         * past requires_payment_method and requires_confirmation. An order payment without a tip
         * can return an amount of 0 instead. tip_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. tip_money.anyOf[2] (Value): null. transaction_purpose
         * (Optional): string or null. Why a bank debit is taken. Set only when payment_options
         * includes ach_debit, and fixed once the payment intent exists. Value enum: "goods",
         * "services", "other". transaction_purpose.anyOf[1] (Value): string. Why a bank debit is
         * taken. Set only when payment_options includes ach_debit, and fixed once the payment
         * intent exists. Value enum: "goods", "services", "other". transaction_purpose.anyOf[2]
         * (Value): null. updated_at (Optional): string or null. RFC3339 timestamp.
         * updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. version.anyOf[1] (Value): integer.
         * Persisted version of this resource's owned state. Expanded resources and external
         * observations can change independently. Format: uint64. minimum: 1. version.anyOf[2]
         * (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * The amount requested from the buyer, including any tip_money. Capturing doesn't
             * change it: after a partial capture it still shows the requested amount, and
             * captured_money shows what was collected. On a standalone payment intent, PATCH can
             * change it only before the first confirmation attempt. An amount_money or tip_money
             * change that leaves too little for stored splits returns LIMIT_EXCEEDED at the
             * changed field with minimum_money. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Effective Flint deadline to capture a manual-capture hold: the earlier of the
             * provider capture deadline and any order resource guarantee. Order guarantees last at
             * most 24 hours from the payment attempt start and may end earlier. Capture is refused
             * at or after this time, even while status is requires_capture. Omitted until a hold
             * is placed. anyOf[1] (Value): string. Effective Flint deadline to capture a
             * manual-capture hold: the earlier of the provider capture deadline and any order
             * resource guarantee. Order guarantees last at most 24 hours from the payment attempt
             * start and may end earlier. Capture is refused at or after this time, even while
             * status is requires_capture. Omitted until a hold is placed. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "authorization_expires_at"?: ((string) | (null));
            /**
             * When the processor authorized the payment. Absent until then. anyOf[1] (Value):
             * string. When the processor authorized the payment. Absent until then. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "authorized_at"?: ((string) | (null));
            /**
             * The amount the processor authorized. It always equals amount_money and doesn't
             * change once set, even when a capture collects more. On a payment intent canceled
             * with cancellation_reason payment_returned, it equals the authorization Flint
             * released instead. Absent until the payment is authorized, and on payments canceled
             * before authorization. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "authorized_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Flint-normalized reason the payment intent was canceled. Present only while status
             * is canceled. A cancellation without a specific reason returns payment_canceled.
             * Absent while last_payment_error.code is payment_blocked and Flint has not identified
             * money to return. Unknown processor values are returned as payment_canceled. Value
             * enum: "requested_by_customer", "duplicate", "fraudulent", "abandoned",
             * "invoice_payment_failed", "invoice_voided", "order_closed", "payment_canceled",
             * "payment_returned". anyOf[1] (Value): string. Flint-normalized reason the payment
             * intent was canceled. Present only while status is canceled. A cancellation without a
             * specific reason returns payment_canceled. Absent while last_payment_error.code is
             * payment_blocked and Flint has not identified money to return. Unknown processor
             * values are returned as payment_canceled. Value enum: "requested_by_customer",
             * "duplicate", "fraudulent", "abandoned", "invoice_payment_failed", "invoice_voided",
             * "order_closed", "payment_canceled", "payment_returned". anyOf[2] (Value): null.
             */
            "cancellation_reason"?: (("requested_by_customer"
                | "duplicate"
                | "fraudulent"
                | "abandoned"
                | "invoice_payment_failed"
                | "invoice_voided"
                | "order_closed"
                | "payment_canceled"
                | "payment_returned"
                | (string & {}))
                | (null));
            /**
             * The part of the authorization you can still capture. Positive only while status is
             * requires_capture, and zero after you capture or cancel or the authorization expires.
             * The authorization lapses at authorization_expires_at, and a capture attempted after
             * that fails even if this is positive. Absent until the payment is authorized.
             * anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "capturable_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * When money is collected. Defaults to automatic. Value enum: "automatic", "manual".
             * anyOf[1] (Value): string. When money is collected. Defaults to automatic. Value
             * enum: "automatic", "manual". anyOf[2] (Value): null.
             */
            "capture_method"?: (("automatic" | "manual" | (string & {})) | (null));
            /**
             * When money was captured. For automatic capture, this is when the payment succeeded.
             * Absent until capture. anyOf[1] (Value): string. When money was captured. For
             * automatic capture, this is when the payment succeeded. Absent until capture. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "captured_at"?: ((string) | (null));
            /**
             * The amount collected from the buyer, including captured_tip_money. Reconcile revenue
             * and print receipts from this amount, not amount_money. Zero while a hold is open,
             * and positive whenever status is succeeded. After an overcapture it is above
             * authorized_money. Also positive on a payment intent canceled with
             * cancellation_reason payment_returned: Flint captured the money and is returning it
             * through a refund with reason payment_returned. processing_fee_money,
             * merchant_net_money, and refunds are based on it. Absent until the payment is
             * authorized. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "captured_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * The part of captured_money that is a tip: the capture's tip_money when it sent one,
             * otherwise the tip the authorization carried, at most captured_money. tip_money keeps
             * the tip the authorization carried. Refunds return it last. Absent until the payment
             * is captured. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "captured_tip_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Flint checkout session ID associated with this payment, when present. anyOf[1]
             * (Value): string. Flint checkout session ID associated with this payment, when
             * present. Example: "cs_01KEZF7C004JRWFW43H037MQRN". anyOf[2] (Value): null.
             */
            "checkout_session_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * The linked customer. Returned only with expand=customer. Present only when `expand`
             * includes `customer`; `null` when expanded and there is no related customer. anyOf[1]
             * (Value): {@link ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * Customer linked to this payment intent. anyOf[1] (Value): string. Customer linked to
             * this payment intent. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value):
             * null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * Whether the customer was present for the most recent confirmation. absent means
             * Flint charged a saved card without them, as a merchant-initiated payment on its
             * stored credential. Subscription renewals and automatic invoice charges are absent,
             * and other payments are absent only when confirmed or paid with customer_presence
             * absent. A customer who pays any of them with a card they enter makes it present.
             * Each confirmation sets it again. Value enum: "present", "absent". anyOf[1] (Value):
             * string. Whether the customer was present for the most recent confirmation. absent
             * means Flint charged a saved card without them, as a merchant-initiated payment on
             * its stored credential. Subscription renewals and automatic invoice charges are
             * absent, and other payments are absent only when confirmed or paid with
             * customer_presence absent. A customer who pays any of them with a card they enter
             * makes it present. Each confirmation sets it again. Value enum: "present", "absent".
             * anyOf[2] (Value): null.
             */
            "customer_presence"?: (("present" | "absent" | (string & {})) | (null));
            /**
             * Dispute state of this payment. none means no dispute or inquiry is open or recorded.
             * The inquiry_ values track an issuer inquiry or early warning that isn't a
             * chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence.
             * Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
             * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented",
             * "other". anyOf[1] (Value): string. Dispute state of this payment. none means no
             * dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry
             * or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for
             * its deadline and evidence. Value enum: "none", "inquiry_needs_response",
             * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won",
             * "lost", "prevented", "other". anyOf[2] (Value): null.
             */
            "dispute_status"?: (("none"
                | "inquiry_needs_response"
                | "inquiry_under_review"
                | "inquiry_closed"
                | "needs_response"
                | "under_review"
                | "won"
                | "lost"
                | "prevented"
                | "other"
                | (string & {}))
                | (null));
            /**
             * Caller-owned identifier for this resource in an external system. `null` when no
             * external reference ID has been set on the payment intent. anyOf[1] (Value): string.
             * Caller-owned identifier for this resource in an external system. `null` when no
             * external reference ID has been set on the payment intent. minLength: 1. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * All-time failed-attempt count. Present on merchant reads; omitted for buyer
             * credentials. anyOf[1] (Value): integer. All-time failed-attempt count. Present on
             * merchant reads; omitted for buyer credentials. Format: int64. anyOf[2] (Value):
             * null.
             */
            "failed_attempt_count"?: ((number) | (null));
            /**
             * Newest 50 failed attempts, newest first, with merchant-only card and buyer evidence
             * frozen at admission. Older attempts can be included in failed_attempt_count.
             * anyOf[1] (Value): Array of {@link FailedPaymentAttemptPreviousAttributes}. Newest 50
             * failed attempts, newest first, with merchant-only card and buyer evidence frozen at
             * admission. Older attempts can be included in failed_attempt_count. anyOf[1][]
             * (Value): {@link FailedPaymentAttemptPreviousAttributes}. anyOf[2] (Value): null.
             */
            "failed_attempts"?: ((Array<FailedPaymentAttemptPreviousAttributes>) | (null));
            /**
             * Present when a payment provider asked Flint to pause fulfillment for this payment.
             * While its status is active, open fulfillments on the order are on hold with reason
             * payment_review. payment_intent.fulfillment_hold_updated is sent when the hold starts
             * and when it lifts. anyOf[1] (Value): {@link
             * PaymentFulfillmentHoldPreviousAttributes}. anyOf[2] (Value): null.
             */
            "fulfillment_hold"?: ((PaymentFulfillmentHoldPreviousAttributes) | (null));
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource. Buyer sessions on routes shared with merchants get
             * `null`. `/v1/me` responses do not include this field. anyOf[1] (Value): string. The
             * Idempotency-Key of the request that created this resource. `null` when that request
             * sent no key, Flint created the resource, the reader isn't the caller that created it
             * (another app install, a buyer, or the merchant reading an app's or buyer's record),
             * or the caller that created an older record is unknown. Filter its list with
             * `idempotency_key` to find it. Recorded payloads, including replayed responses and
             * webhook events, can return `null`. To find a key that a replay returns as `null`,
             * read the resource. Buyer sessions on routes shared with merchants get `null`.
             * `/v1/me` responses do not include this field. anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * The linked invoice. Returned only with expand=invoice. Present only when `expand`
             * includes `invoice`; `null` when expanded and there is no related invoice. anyOf[1]
             * (Value): {@link ExpandedInvoiceSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummaryPreviousAttributes) | (null));
            /**
             * Invoice this payment intent collects, when it pays an invoice. anyOf[1] (Value):
             * string. Invoice this payment intent collects, when it pays an invoice. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * The invoice installment this payment collects. anyOf[1] (Value): string. The invoice
             * installment this payment collects. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
             * anyOf[2] (Value): null.
             */
            "invoice_schedule_entry_id"?: ((string) | (null));
            /**
             * Most recent payment error. Null when no payment error is recorded. anyOf[1] (Value):
             * {@link PaymentErrorSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "last_payment_error"?: ((PaymentErrorSummaryPreviousAttributes) | (null));
            /**
             * The order payment attempt that most recently used this payment intent. Start times
             * count to the second; of attempts that started in the same second, the one with the
             * highest order_payment_attempt_id is named. `null` when no attempt has used it yet;
             * omitted for payment intents without an order. It changes only when an attempt starts
             * using this payment intent, which advances version. Returned with merchant
             * credentials; omitted with buyer and checkout credentials. anyOf[1] (Value): string.
             * The order payment attempt that most recently used this payment intent. Start times
             * count to the second; of attempts that started in the same second, the one with the
             * highest order_payment_attempt_id is named. `null` when no attempt has used it yet;
             * omitted for payment intents without an order. It changes only when an attempt starts
             * using this payment intent, which advances version. Returned with merchant
             * credentials; omitted with buyer and checkout credentials. Example:
             * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". anyOf[2] (Value): null.
             */
            "latest_order_payment_attempt_id"?: ((string) | (null));
            /**
             * Merchant that owns this payment intent. anyOf[1] (Value): string. Merchant that owns
             * this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value):
             * null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't
             * returned. Always present with merchant credentials. anyOf[1] (Value): {@link
             * MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * The linked order. Returned only with expand=order. Present only when `expand`
             * includes `order`; `null` when expanded and there is no related order. anyOf[1]
             * (Value): {@link ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * The order edit whose balance this payment collects. Omitted when this payment
             * doesn't collect an edit's balance. anyOf[1] (Value): string. The order edit whose
             * balance this payment collects. Omitted when this payment doesn't collect an edit's
             * balance. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A". anyOf[2] (Value): null.
             */
            "order_edit_id"?: ((string) | (null));
            /**
             * Order this payment intent belongs to. Create it through the order and confirm it
             * with POST /v1/orders/{order_id}/pay. Capture and cancel use POST
             * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
             * Order-owned intents accept PATCH for metadata and external_reference_id. anyOf[1]
             * (Value): string. Order this payment intent belongs to. Create it through the order
             * and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST
             * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
             * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * Whether one capture can collect more than the authorization, and the most it can
             * collect. Present once a payment with request_overcapture true is authorized. Read it
             * to show the limit; capture enforces it. anyOf[1] (Value): {@link
             * PaymentIntentOvercapturePreviousAttributes}. anyOf[2] (Value): null.
             */
            "overcapture"?: ((PaymentIntentOvercapturePreviousAttributes) | (null));
            /**
             * How the payment was started. Fixed when the payment intent is created. Value enum:
             * "checkout", "payment_link", "invoice", "subscription_initial",
             * "subscription_renewal", "virtual_terminal", "api". anyOf[1] (Value): string. How the
             * payment was started. Fixed when the payment intent is created. Value enum:
             * "checkout", "payment_link", "invoice", "subscription_initial",
             * "subscription_renewal", "virtual_terminal", "api". anyOf[2] (Value): null.
             */
            "payment_flow"?: (("checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {}))
                | (null));
            /**
             * Flint payment intent ID. anyOf[1] (Value): string. Flint payment intent ID. Example:
             * "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
             */
            "payment_intent_id"?: ((string) | (null));
            /**
             * Payment options the buyer can use for this payment. [] enum: "card", "apple_pay",
             * "google_pay", "affirm", "ach_debit", "card_present". anyOf[1] (Value): Array of
             * string. Payment options the buyer can use for this payment. [] enum: "card",
             * "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". anyOf[1][]
             * (Value): string. Value enum: "card", "apple_pay", "google_pay", "affirm",
             * "ach_debit", "card_present". anyOf[2] (Value): null.
             */
            "payment_options"?: ((Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {})>)
                | (null));
            /**
             * Summary of the card or bank account used for the payment. Absent until a payment
             * source is attached. anyOf[1] (Value): {@link
             * PaymentSourceSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_source"?: ((PaymentSourceSummaryPreviousAttributes) | (null));
            /**
             * The platform fee a partner app charges on this payment, when it created the payment
             * with an install token and a fee. Absent when the payment carries none. Returned only
             * to merchant credentials; omitted for buyer and checkout credentials. anyOf[1]
             * (Value): {@link PaymentIntentPlatformFeePreviousAttributes}. anyOf[2] (Value): null.
             */
            "platform_fee"?: ((PaymentIntentPlatformFeePreviousAttributes) | (null));
            /**
             * The reader the payment is or was last presented on. Set when Flint presents it and
             * kept afterward. While processing or requires_action with a reader_id and no
             * payment_source.card.card_present, the payment is on that reader now. After a card is
             * read, the payment can stay processing while Flint captures it. anyOf[1] (Value):
             * string. The reader the payment is or was last presented on. Set when Flint presents
             * it and kept afterward. While processing or requires_action with a reader_id and no
             * payment_source.card.card_present, the payment is on that reader now. After a card is
             * read, the payment can stay processing while Flint captures it. Example:
             * "rdr_01KEZF7C007JA0G24M7SD6P46C". anyOf[2] (Value): null.
             */
            "reader_id"?: ((string) | (null));
            /**
             * Email address for this payment's receipt. When it isn't set, Flint uses the
             * customer's email. `null` when no receipt email has been set on the payment intent.
             * anyOf[1] (Value): string. Email address for this payment's receipt. When it isn't
             * set, Flint uses the customer's email. `null` when no receipt email has been set on
             * the payment intent. Format: email. maxLength: 255. Example: "buyer@example.com".
             * anyOf[2] (Value): null.
             */
            "receipt_email"?: ((string) | (null));
            /**
             * Last time Flint can refund this payment through the original payment method. A
             * refund submitted at exactly this time is accepted; after it, refunds through the
             * original payment method are refused. Today only Affirm has a refund window: 120 days
             * after the payment settles. `null` when the method has no refund window, the payment
             * has not succeeded with captured money, or its capture time is missing. Always
             * present with merchant credentials. anyOf[1] (Value): string. Last time Flint can
             * refund this payment through the original payment method. A refund submitted at
             * exactly this time is accepted; after it, refunds through the original payment method
             * are refused. Today only Affirm has a refund window: 120 days after the payment
             * settles. `null` when the method has no refund window, the payment has not succeeded
             * with captured money, or its capture time is missing. Always present with merchant
             * credentials. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "refund_expires_at"?: ((string) | (null));
            /**
             * How much of captured_money has been refunded, including value issued as store
             * credit, based on refunded_money. Value enum: "none", "partially_refunded",
             * "refunded". anyOf[1] (Value): string. How much of captured_money has been refunded,
             * including value issued as store credit, based on refunded_money. Value enum: "none",
             * "partially_refunded", "refunded". anyOf[2] (Value): null.
             */
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            /**
             * Total refunded against captured_money, including value issued as store credit and
             * processor refunds still pending. Failed and canceled refunds aren't counted. Zero
             * when nothing has been refunded. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "refunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * The part of the authorization returned to the buyer without being charged: the
             * uncaptured remainder after a partial capture, or the whole authorization after a
             * cancellation or expiry. It was never collected, so it needs no refund and can't be
             * captured later. Zero after a capture at or above the authorization. Absent until the
             * payment is authorized. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "released_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Whether one capture may collect more than the authorization where the card network
             * allows it. Fixed at create. Always present with merchant credentials; omitted with
             * buyer and checkout credentials. anyOf[1] (Value): boolean. Whether one capture may
             * collect more than the authorization where the card network allows it. Fixed at
             * create. Always present with merchant credentials; omitted with buyer and checkout
             * credentials. anyOf[2] (Value): null.
             */
            "request_overcapture"?: ((boolean) | (null));
            /**
             * Flint return ID associated with this payment, when present. anyOf[1] (Value):
             * string. Flint return ID associated with this payment, when present. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
             */
            "return_id"?: ((string) | (null));
            /**
             * The return resolution whose balance this payment collects. Set for exchange balances
             * and corrections. anyOf[1] (Value): string. The return resolution whose balance this
             * payment collects. Set for exchange balances and corrections. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
             */
            "return_resolution_id"?: ((string) | (null));
            /**
             * Risk assessment. Always present with merchant credentials. `null` when the payment
             * intent's latest payment attempt has no completed risk assessment, such as before its
             * first confirmation. Omitted with the checkout credential. anyOf[1] (Value): {@link
             * PaymentRiskPreviousAttributes}. anyOf[2] (Value): null.
             */
            "risk"?: ((PaymentRiskPreviousAttributes) | (null));
            /**
             * The payment option the most recent confirmation used. Absent until the payment
             * intent is first confirmed. Value enum: "card", "apple_pay", "google_pay", "affirm",
             * "ach_debit", "card_present". anyOf[1] (Value): string. The payment option the most
             * recent confirmation used. Absent until the payment intent is first confirmed. Value
             * enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
             * anyOf[2] (Value): null.
             */
            "selected_payment_option"?: (("card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {}))
                | (null));
            /**
             * Top-level PaymentSplit children in their current state, embedded whole. Empty when
             * the payment has no splits. Child changes do not send payment_intent.updated. Omitted
             * for buyer and checkout credentials. anyOf[1] (Value): Array of {@link
             * PaymentSplitPreviousAttributes}. Top-level PaymentSplit children in their current
             * state, embedded whole. Empty when the payment has no splits. Child changes do not
             * send payment_intent.updated. Omitted for buyer and checkout credentials. anyOf[1][]
             * (Value): {@link PaymentSplitPreviousAttributes}. anyOf[2] (Value): null.
             */
            "splits"?: ((Array<PaymentSplitPreviousAttributes>) | (null));
            /**
             * The text shown on the buyer's card or bank statement for this payment. `null` until
             * the charge is created. `null` when the provider supplies no descriptor. Frozen when
             * the charge is created. anyOf[1] (Value): string. The text shown on the buyer's card
             * or bank statement for this payment. `null` until the charge is created. `null` when
             * the provider supplies no descriptor. Frozen when the charge is created. anyOf[2]
             * (Value): null.
             */
            "statement_descriptor"?: ((string) | (null));
            /**
             * Lifecycle status. requires_payment_method covers both a new payment intent and one
             * whose last attempt failed, so read last_payment_error with it. succeeded, canceled,
             * and expired are final. Refunds and disputes never change status. Value enum:
             * "requires_payment_method", "requires_confirmation", "requires_action", "processing",
             * "requires_capture", "canceled", "succeeded", "expired". anyOf[1] (Value): string.
             * Lifecycle status. requires_payment_method covers both a new payment intent and one
             * whose last attempt failed, so read last_payment_error with it. succeeded, canceled,
             * and expired are final. Refunds and disputes never change status. Value enum:
             * "requires_payment_method", "requires_confirmation", "requires_action", "processing",
             * "requires_capture", "canceled", "succeeded", "expired". anyOf[2] (Value): null.
             */
            "status"?: (("requires_payment_method"
                | "requires_confirmation"
                | "requires_action"
                | "processing"
                | "requires_capture"
                | "canceled"
                | "succeeded"
                | "expired"
                | (string & {}))
                | (null));
            /**
             * The subscription whose billing charged this payment: its first charge, a renewal, a
             * retry or a setup fee. Not set for the checkout payment that created a subscription.
             * anyOf[1] (Value): string. The subscription whose billing charged this payment: its
             * first charge, a renewal, a retry or a setup fee. Not set for the checkout payment
             * that created a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2]
             * (Value): null.
             */
            "subscription_id"?: ((string) | (null));
            /**
             * Opaque payment reference to share with merchant support. Do not parse its format.
             * anyOf[1] (Value): string. Opaque payment reference to share with merchant support.
             * Do not parse its format. anyOf[2] (Value): null.
             */
            "support_reference"?: ((string) | (null));
            /**
             * Verbs this payment intent accepts now, each a POST to
             * /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored order
             * facts and can change without a payment intent version change. Order legs list
             * confirm when a single leg can pay the order or an open attempt can continue it.
             * Several unpaid legs, selected gift cards, or automatic tax with a leg below the
             * balance require pay_order instead. Invoice payments list only cancel. An unused
             * first-period subscription payment lists cancel once the subscription is canceled.
             * Order edit payments list confirm while awaiting payment details or action. A listed
             * action can still be refused due to an open risk review, an order payment attempt, a
             * closed order, or the merchant account. A managed_by_owner refusal names the owner
             * and its command in remediation.next_actions. The merchant list is
             * credential-independent. Checkout credentials receive that list filtered to confirm
             * and cancel on their own session's intents, never capture. Customer sessions omit
             * this field. New actions may be added. [] enum: "confirm", "capture", "cancel".
             * anyOf[1] (Value): Array of string. Verbs this payment intent accepts now, each a
             * POST to /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored
             * order facts and can change without a payment intent version change. Order legs list
             * confirm when a single leg can pay the order or an open attempt can continue it.
             * Several unpaid legs, selected gift cards, or automatic tax with a leg below the
             * balance require pay_order instead. Invoice payments list only cancel. An unused
             * first-period subscription payment lists cancel once the subscription is canceled.
             * Order edit payments list confirm while awaiting payment details or action. A listed
             * action can still be refused due to an open risk review, an order payment attempt, a
             * closed order, or the merchant account. A managed_by_owner refusal names the owner
             * and its command in remediation.next_actions. The merchant list is
             * credential-independent. Checkout credentials receive that list filtered to confirm
             * and cancel on their own session's intents, never capture. Customer sessions omit
             * this field. New actions may be added. [] enum: "confirm", "capture", "cancel".
             * anyOf[1][] (Value): string. Value enum: "confirm", "capture", "cancel". anyOf[2]
             * (Value): null.
             */
            "supported_actions"?: ((Array<"confirm" | "capture" | "cancel" | (string & {})>) | (null));
            /**
             * Portion of amount_money that is a tip. Uses amount_money's currency and is at most
             * amount_money. `null` when no tip is set, and for an order payment until its payment
             * attempt has moved past requires_payment_method and requires_confirmation. An order
             * payment without a tip can return an amount of 0 instead. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "tip_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Why a bank debit is taken. Set only when payment_options includes ach_debit, and
             * fixed once the payment intent exists. Value enum: "goods", "services", "other".
             * anyOf[1] (Value): string. Why a bank debit is taken. Set only when payment_options
             * includes ach_debit, and fixed once the payment intent exists. Value enum: "goods",
             * "services", "other". anyOf[2] (Value): null.
             */
            "transaction_purpose"?: (("goods" | "services" | "other" | (string & {})) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. anyOf[1] (Value): integer. Persisted version
             * of this resource's owned state. Expanded resources and external observations can
             * change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_intent.updated". */
    "event_type"?: "payment_intent.updated";
});
/**
 * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
 * requested. Once the payment is authorized, authorized_money equals amount_money (on a payment
 * intent canceled with cancellation_reason payment_returned, the authorization Flint released) and
 * splits into captured_money (collected), capturable_money (still on hold), and released_money
 * (returned without being charged), so authorized_money equals the sum of those three whenever the
 * capture is at most the authorization. An overcapture (see request_overcapture) has
 * capturable_money and released_money zero and captured_money above authorized_money. Reconcile
 * revenue from captured_money.
 */
export type PaymentIntentWithAction = (Exclude<PaymentIntent & object, readonly unknown[]>)
    & ({
    /**
     * Typed browser authority for this payment's current action, including an order leg. Complete
     * it, then call the same confirm endpoint without payment_source. `null` when no buyer action
     * is needed or Flint cannot produce the action yet. If status is requires_action and this is
     * `null`, call confirm again without payment_source. anyOf[1] (Value): {@link
     * PendingPaymentAction}. Client-side action required before continuing a payment. Resume an
     * order through PayOrder with order_payment_attempt_id, or continue a standalone PaymentIntent
     * through its confirm endpoint without a replacement credential. anyOf[2] (Value): null.
     */
    "current_payment_action": ((PendingPaymentAction) | (null));
});
/**
 * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
 * requested. Once the payment is authorized, authorized_money equals amount_money (on a payment
 * intent canceled with cancellation_reason payment_returned, the authorization Flint released) and
 * splits into captured_money (collected), capturable_money (still on hold), and released_money
 * (returned without being charged), so authorized_money equals the sum of those three whenever the
 * capture is at most the authorization. An overcapture (see request_overcapture) has
 * capturable_money and released_money zero and captured_money above authorized_money. Reconcile
 * revenue from captured_money.
 */
export type PaymentIntentWithCollection = (Exclude<PaymentIntent & object, readonly unknown[]>)
    & ({
    /**
     * Setup details your client uses to collect the buyer's payment details. Returned on both
     * standalone and order-owned creates except card_present payments, which have no
     * payment_collection. On GET, returned only for a standalone intent in requires_payment_method
     * or requires_confirmation, and omitted for an intent owned by a checkout session when read
     * with merchant credentials. Order-owned intents never include it on GET; use
     * Order.payment_collection, whose selectable_payment_intents lists the staged payments.
     * Client-side details for collecting payment from the buyer, such as the Stripe settings to
     * initialize Stripe.js.
     */
    "payment_collection"?: PaymentCollection;
});
/** A response containing `PaymentIntentWithCollection` data. */
export type PaymentIntentWithCollectionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. One payment from a
     * buyer, standalone or as a leg of an order. amount_money is the amount requested. Once the
     * payment is authorized, authorized_money equals amount_money (on a payment intent canceled
     * with cancellation_reason payment_returned, the authorization Flint released) and splits into
     * captured_money (collected), capturable_money (still on hold), and released_money (returned
     * without being charged), so authorized_money equals the sum of those three whenever the
     * capture is at most the authorization. An overcapture (see request_overcapture) has
     * capturable_money and released_money zero and captured_money above authorized_money.
     * Reconcile revenue from captured_money.
     */
    "data": PaymentIntentWithCollection;
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
export type PaymentIntentsBlockAttemptSignalsParams = DisputesAcceptParams;
export type PaymentIntentsCancelParams = (InputValue<CancelPaymentIntentRequestInput>
    | {
    "cancellation_reason"?: never;
    "expected_version"?: never;
})
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
export type PaymentIntentsCaptureParams = (InputValue<CapturePaymentIntentRequestInput>
    | {
    "amount_money"?: never;
    "expected_version"?: never;
    "final_amount_money"?: never;
    "platform_fee"?: never;
    "splits"?: never;
    "tip_money"?: never;
})
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
export type PaymentIntentsConfirmParams = (InputValue<ConfirmPaymentIntentRequestInput>
    | {
    "buyer_ip_address"?: never;
    "client_action_type"?: never;
    "expected_version"?: never;
    "payment_return_url"?: never;
    "payment_source"?: never;
    "save_payment_method"?: never;
})
    & {
    /**
     * An optional stable random device identifier, independent of the payment intent. Keep it for
     * subsequent payments from the same device; it grants no access. pattern: ^[a-f0-9]{32}$.
     */
    "Flint-Buyer-Device"?: InputValue<string>;
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
export type PaymentIntentsCreateParams = (InputValue<CreatePaymentIntentRequestInput>
    | {
    "amount_money"?: never;
    "capture_method"?: never;
    "customer_id"?: never;
    "expected_order_version"?: never;
    "external_reference_id"?: never;
    "metadata"?: never;
    "order_id"?: never;
    "payment_options"?: never;
    "payment_return_url"?: never;
    "payment_source_selection"?: never;
    "platform_fee"?: never;
    "receipt_email"?: never;
    "request_overcapture"?: never;
    "splits"?: never;
    "tip_money"?: never;
    "transaction_purpose"?: never;
})
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
export type PaymentIntentsCreateResponse = ({
    "data"?: {
        [key: string]: unknown;
    };
})
    & (Exclude<PaymentIntentWithCollectionResponse & object, readonly unknown[]>);
export type PaymentIntentsGetParams = {
    /**
     * Include related objects in the response. Supported expansions: customer, invoice, order.
     * Expansion requires payments.payment_intents.read plus the read scope for each expanded
     * resource. Limits: at most 10 unique expand paths per request. Checkout session credentials
     * cannot use expand on this route. [] enum: "customer", "invoice", "order". Value enum:
     * "customer", "invoice", "order". anyOf[1] (Value): Array of string. [] enum: "customer",
     * "invoice", "order". anyOf[1][] (Value): string. Value enum: "customer", "invoice", "order".
     * anyOf[2] (Value): string. Value enum: "customer", "invoice", "order".
     */
    "expand"?: InputValue<("customer" | "invoice" | "order") | readonly ("customer" | "invoice" | "order")[]>;
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
export type PaymentIntentsListActivitiesParams = {
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
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Filter by activity type. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "created", "updated", "status_changed", "failed", "canceled", "expired",
     * "refund_created", "refund_status_changed", "dispute_status_changed", "receipt_sent",
     * "receipt_queued", "receipt_delivery_failed". Value enum: "created", "updated",
     * "status_changed", "failed", "canceled", "expired", "refund_created",
     * "refund_status_changed", "dispute_status_changed", "receipt_sent", "receipt_queued",
     * "receipt_delivery_failed". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "created", "updated", "status_changed", "failed", "canceled", "expired", "refund_created",
     * "refund_status_changed", "dispute_status_changed", "receipt_sent", "receipt_queued",
     * "receipt_delivery_failed". anyOf[1][] (Value): string. Value enum: "created", "updated",
     * "status_changed", "failed", "canceled", "expired", "refund_created",
     * "refund_status_changed", "dispute_status_changed", "receipt_sent", "receipt_queued",
     * "receipt_delivery_failed". anyOf[2] (Value): string. Value enum: "created", "updated",
     * "status_changed", "failed", "canceled", "expired", "refund_created",
     * "refund_status_changed", "dispute_status_changed", "receipt_sent", "receipt_queued",
     * "receipt_delivery_failed".
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
        | "receipt_sent"
        | "receipt_queued"
        | "receipt_delivery_failed")
        | readonly ("created"
        | "updated"
        | "status_changed"
        | "failed"
        | "canceled"
        | "expired"
        | "refund_created"
        | "refund_status_changed"
        | "dispute_status_changed"
        | "receipt_sent"
        | "receipt_queued"
        | "receipt_delivery_failed")[]>;
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
export type PaymentIntentsListParams = {
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns only resources created in your caller namespace, plus
     * resources created before caller scoping under the original key. Returns current authorized
     * resources, not the recorded response. A pending resource does not prove that the operation
     * succeeded, and an empty list does not prove that it had no effect. A match can show
     * `idempotency_key: null` when that request sent no key, Flint created the resource, the
     * reader isn't the caller that created it (another app install, a buyer, or the merchant
     * reading an app's or buyer's record), or the caller that created an older record is unknown.
     * minLength: 1. maxLength: 255. pattern: ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
     */
    "idempotency_key"?: InputValue<string>;
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
     * Filter by order ID. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: InputValue<string>;
    /**
     * Filter by customer ID. pattern: ^cus_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: InputValue<string>;
    /**
     * Filter to payment intents whose receipt_email or linked customer's email equals this
     * address, ignoring case and any whitespace stored around it, with accents preserved. Requires
     * one bare email address without surrounding whitespace. Format: email. Example:
     * "buyer@example.com".
     */
    "email"?: InputValue<string>;
    /**
     * Filter by invoice ID. pattern: ^inv_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id"?: InputValue<string>;
    /**
     * Filter by whether the merchant must capture the payment or respond to a dispute. A dispute
     * requires action when its status is needs_response or inquiry_needs_response, evidence
     * responses are allowed, and its deadline is absent or has not passed. Omit to include both
     * groups.
     */
    "is_action_required"?: InputValue<boolean>;
    /**
     * Match any historical failed attempt, including successful retries. Combine with
     * status=requires_payment_method for payments still awaiting another method. Merchant
     * credentials only.
     */
    "has_failed_attempts"?: InputValue<boolean>;
    /**
     * Match payments from a checkout session created by this payment link. Merchant credentials
     * only. pattern: ^pl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
     */
    "payment_link_id"?: InputValue<string>;
    /**
     * Exact failed-attempt decline code. Evidence filters match the same failed attempt. Merchant
     * credentials only. maxLength: 100.
     */
    "decline_code"?: InputValue<string>;
    /**
     * Exact merchant/environment risk-list card fingerprint on a failed attempt. Merchant
     * credentials only. maxLength: 255.
     */
    "card_fingerprint"?: InputValue<string>;
    /** Exact canonical IP on a failed attempt. Merchant credentials only. */
    "buyer_ip_address"?: InputValue<string>;
    /**
     * Exact match on payment_source.card.last4 or a failed attempt snapshot. Send exactly four
     * digits. Payments without a card never match. Combined with card_brand or any other filter,
     * all filters must match. pattern: ^[0-9]{4}$.
     */
    "card_last4"?: InputValue<string>;
    /**
     * Exact match on payment_source.card.brand or a failed attempt snapshot. Repeat keys or
     * comma-separate values to match any selected brand. Payments without a card never match.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "visa",
     * "mastercard", "amex", "discover", "diners", "jcb", "unionpay". Value enum: "visa",
     * "mastercard", "amex", "discover", "diners", "jcb", "unionpay". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "visa", "mastercard", "amex", "discover", "diners", "jcb",
     * "unionpay". anyOf[1][] (Value): string. Value enum: "visa", "mastercard", "amex",
     * "discover", "diners", "jcb", "unionpay". anyOf[2] (Value): string. Value enum: "visa",
     * "mastercard", "amex", "discover", "diners", "jcb", "unionpay".
     */
    "card_brand"?: InputValue<("visa" | "mastercard" | "amex" | "discover" | "diners" | "jcb" | "unionpay")
        | readonly ("visa" | "mastercard" | "amex" | "discover" | "diners" | "jcb" | "unionpay")[]>;
    /**
     * Filter by payment intent status. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "requires_payment_method", "requires_confirmation", "requires_action",
     * "processing", "requires_capture", "canceled", "succeeded", "expired". Value enum:
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
     * Filter by the latest completed risk assessment. Repeat or comma-separate values. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "normal", "elevated",
     * "highest", "not_assessed". Value enum: "normal", "elevated", "highest", "not_assessed".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "normal", "elevated", "highest",
     * "not_assessed". anyOf[1][] (Value): string. Value enum: "normal", "elevated", "highest",
     * "not_assessed". anyOf[2] (Value): string. Value enum: "normal", "elevated", "highest",
     * "not_assessed".
     */
    "risk_level"?: InputValue<("normal" | "elevated" | "highest" | "not_assessed")
        | readonly ("normal" | "elevated" | "highest" | "not_assessed")[]>;
    /**
     * Filter by immutable payment flow. Repeat or comma-separate values. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "checkout", "payment_link", "invoice",
     * "subscription_initial", "subscription_renewal", "virtual_terminal", "api". Value enum:
     * "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api". anyOf[1][] (Value): string. Value enum: "checkout",
     * "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api". anyOf[2] (Value): string. Value enum: "checkout", "payment_link",
     * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
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
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by linked Return ID. pattern: ^ret_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: InputValue<string>;
    /**
     * Filter by linked ReturnResolution ID. pattern: ^retres_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id"?: InputValue<string>;
    /**
     * Search across payment_intent_id, external_reference_id, and receipt_email. Use email or
     * customer_id to find a linked customer's payments. Text fields match any part of the value,
     * and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the
     * type prefix, such as ord_01.
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
     * status. Combined with dispute_status, both filters must match. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "none", "partially_refunded",
     * "refunded". Value enum: "none", "partially_refunded", "refunded". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "none", "partially_refunded", "refunded". anyOf[1][] (Value):
     * string. Value enum: "none", "partially_refunded", "refunded". anyOf[2] (Value): string.
     * Value enum: "none", "partially_refunded", "refunded".
     */
    "refund_status"?: InputValue<("none" | "partially_refunded" | "refunded")
        | readonly ("none" | "partially_refunded" | "refunded")[]>;
    /**
     * Exact match on dispute_status. Repeat keys or comma-separate values to match any selected
     * status. Combined with refund_status, both filters must match. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "none", "inquiry_needs_response",
     * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost",
     * "prevented", "other". Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
     * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "none", "inquiry_needs_response",
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
     * "created_at". Value enum: "created_at", "updated_at", "amount_money", "captured_money".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money" | "captured_money">;
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
    /** Inclusive lower bound on captured_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "captured_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on captured_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "captured_before"?: InputValue<string | globalThis.Date>;
    /**
     * Include related objects in the response. Supported expansions: customer, invoice, order.
     * Include the requested related resources using scoped batch reads for this page. Each
     * relationship requires its existing target read scopes. Expansion changes the representation
     * without changing pagination tokens. Limits: at most 10 unique expand paths per request. []
     * enum: "customer", "invoice", "order". Value enum: "customer", "invoice", "order". anyOf[1]
     * (Value): Array of string. [] enum: "customer", "invoice", "order". anyOf[1][] (Value):
     * string. Value enum: "customer", "invoice", "order". anyOf[2] (Value): string. Value enum:
     * "customer", "invoice", "order".
     */
    "expand"?: InputValue<("customer" | "invoice" | "order") | readonly ("customer" | "invoice" | "order")[]>;
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
export type PaymentIntentsSendReceiptParams = (InputValue<SendPaymentIntentReceiptRequestInput> | {
    "email"?: never;
})
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
export type PaymentIntentsUpdateParams = (InputValue<UpdatePaymentIntentRequestInput>)
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
/** Optional merchant limits that can lower Flint's payment-option and surface policy limits. */
export type PaymentLimitSettings = {
    /**
     * Enforced maximum USD amounts for every supported exact payment_option.surface selector. Only
     * returned by GET /v1/settings/effective. Includes merchant limits and Flint support
     * approvals; the approval map is private. * (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "effective_max_amounts"?: Record<string, MoneyValue>;
    /**
     * Enforced minimum USD amounts for every supported exact payment_option.surface selector. Only
     * returned by GET /v1/settings/effective. Includes merchant limits and Flint's payment-option
     * floors. * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "effective_min_amounts"?: Record<string, MoneyValue>;
    /**
     * Maximum USD amounts keyed by default, surface, or an exact payment_option.surface selector.
     * Merchant settings cannot raise Flint's policy ceiling. * (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_amounts"?: Record<string, MoneyValue>;
    /**
     * Minimum USD amounts keyed by default, surface, or an exact payment_option.surface selector.
     * Merchant settings cannot lower Flint's payment-option floor. * (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
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
     * (Required): integer string. The limit in the currency's minor unit, such as cents for USD.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 1. *.currency (Required): string. Currency of the limit. Only USD is accepted. Uses ISO 4217
     * currency codes. minLength: 1. Value enum: "USD".
     */
    "max_amounts"?: Record<string, {
        /**
         * The limit in the currency's minor unit, such as cents for USD. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * Currency of the limit. Only USD is accepted. Uses ISO 4217 currency codes. minLength: 1.
         * Value enum: "USD".
         */
        "currency": "USD" | (string & {});
    }>
        | null;
    /**
     * Map replaced as a whole: the keys you send become the full map. Replaces this merchant limit
     * map. Keys are default, a surface, payment_option.default, or payment_option.surface. Amounts
     * must satisfy Flint's existing selector bounds and effective minimum/maximum range. Send null
     * to clear this map; reads then omit it. minProperties: 1. * (Value): object. *.amount
     * (Required): integer string. The limit in the currency's minor unit, such as cents for USD.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 1. *.currency (Required): string. Currency of the limit. Only USD is accepted. Uses ISO 4217
     * currency codes. minLength: 1. Value enum: "USD".
     */
    "min_amounts"?: Record<string, {
        /**
         * The limit in the currency's minor unit, such as cents for USD. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * Currency of the limit. Only USD is accepted. Uses ISO 4217 currency codes. minLength: 1.
         * Value enum: "USD".
         */
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
     * (Required): integer string. The limit in the currency's minor unit, such as cents for USD.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 1. *.currency (Required): string. Currency of the limit. Only USD is accepted. Uses ISO 4217
     * currency codes. minLength: 1. Value enum: "USD".
     */
    "max_amounts"?: Record<string, {
        /**
         * The limit in the currency's minor unit, such as cents for USD. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * Currency of the limit. Only USD is accepted. Uses ISO 4217 currency codes. minLength: 1.
         * Value enum: "USD".
         */
        "currency": "USD";
    }>
        | null;
    /**
     * Map replaced as a whole: the keys you send become the full map. Replaces this merchant limit
     * map. Keys are default, a surface, payment_option.default, or payment_option.surface. Amounts
     * must satisfy Flint's existing selector bounds and effective minimum/maximum range. Send null
     * to clear this map; reads then omit it. minProperties: 1. * (Value): object. *.amount
     * (Required): integer string. The limit in the currency's minor unit, such as cents for USD.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 1. *.currency (Required): string. Currency of the limit. Only USD is accepted. Uses ISO 4217
     * currency codes. minLength: 1. Value enum: "USD".
     */
    "min_amounts"?: Record<string, {
        /**
         * The limit in the currency's minor unit, such as cents for USD. Use an integer string
         * (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * Currency of the limit. Only USD is accepted. Uses ISO 4217 currency codes. minLength: 1.
         * Value enum: "USD".
         */
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
    /** Number of paid checkout sessions started from this link. Format: int32. */
    "completed_count": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Questions buyers answer before paying. Answers are recorded on the order and checkout
     * session in `custom_field_answers`. [] (Value): {@link PaymentLinkCustomField}. A custom
     * field on a payment link that collects an answer from the buyer.
     */
    "custom_fields"?: Array<PaymentLinkCustomField>;
    /**
     * Custom text for checkouts started from this link. Custom text shown in checkout: an order
     * summary message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * Delivery methods the link offers. Empty when the link has none, and then its checkouts offer
     * settings.checkout.default_delivery_method_ids when the order has items to deliver. []
     * (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids": Array<string>;
    /** Text about what the link sells, returned to buyers when they open it. */
    "description"?: string;
    /**
     * Largest amount a buyer can give on a donation link. Must be greater than zero and greater
     * than or equal to donation_min_amount_money. Omit on create for no maximum. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "donation_max_amount_money"?: MoneyValue;
    /**
     * Smallest amount a buyer can give on a donation link. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "donation_min_amount_money"?: MoneyValue;
    /**
     * Amounts a donation link offers as one-tap choices. Use the same currency for all suggested
     * amounts and both bounds. [] (Value): {@link MoneyValue}. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "donation_suggested_amount_money_options"?: Array<MoneyValue>;
    /**
     * Event details for an `event` link: when and where it takes place and how many tickets it
     * sells. Event settings on an event payment link, such as its date, venue, ticket limit, and
     * ticket emails.
     */
    "event_config"?: PaymentLinkEventConfig;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Image shown to buyers with the link. An image attached to a resource, with its display
     * properties and attachment metadata.
     */
    "image"?: ImageAttachment;
    /** Message to show the buyer when the link is inactive. */
    "inactive_message"?: string;
    /**
     * The inventory location or routing policy that supplies stock for the link's catalog lines.
     * Absent when using the implicit single-Location fallback, which is evaluated again on use.
     * Where an order, payment link, or reservation routes inventory from: a fixed Location, an
     * inventory allocation policy, or one policy revision.
     */
    "inventory_routing_source"?: InventoryRoutingSource;
    /**
     * The terms and policy links checkouts started from this link show the buyer. Legal settings
     * for a checkout: whether buyers must accept terms, and links to the terms, refund policy,
     * shipping policy, and contract.
     */
    "legal"?: LegalSettings;
    /**
     * What the link sells. [] (Value): {@link PaymentLinkLineItem}. A line item on a payment link.
     */
    "line_items"?: Array<PaymentLinkLineItem>;
    /**
     * Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once
     * the limit is reached, resolving the link fails with a request error. It can't be set below
     * `completed_count`. Format: int32.
     */
    "max_completions"?: number;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Name of the payment link. */
    "name": string;
    /**
     * Unique identifier for this payment link, prefixed `pl_`. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
     */
    "payment_link_id": string;
    /** What kind of link this is. Value enum: "standard", "donation", "event". */
    "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
    /**
     * Payment options for checkouts started from this link. Payment settings for a checkout: the
     * enabled payment options and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * Whether automatic promotions apply to checkouts started from this link and whether buyers
     * can enter promotion codes. Promotion settings for a checkout: whether automatic promotions
     * apply and whether the buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * Where checkout sessions started from this payment link send the buyer after payment,
     * cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface
     * is headless; use payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * RFC3339 timestamp after which the link stops starting checkouts and resolve fails with
     * `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own,
     * except that an event link without sales_end_at stops selling at event_config.event_at. A
     * checkout opened before the end can still start payment for up to 15 minutes after it.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "sales_end_at"?: string;
    /**
     * RFC3339 timestamp when buyers can first start a checkout from this link. Stored to
     * nanosecond precision. Before it, resolve fails with ACTION_NOT_ALLOWED and reason
     * sales_not_started. Must be earlier than the link’s sales end, including the event start when
     * no explicit end is set. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "sales_start_at"?: string;
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
    /** Whether the link can start new checkouts. Value enum: "active", "inactive". */
    "status": "active" | "inactive" | (string & {});
    /**
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. anyOf[2] (Value): null.
     */
    "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
    /**
     * ID of the subscription plan the link sells. Absent for a link that doesn't sell a
     * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id"?: string;
    /**
     * Tax settings for checkouts started from this link. Whether tax is collected for a checkout
     * session or payment link.
     */
    "tax"?: CheckoutTaxConfig;
    /**
     * The title and colors for checkouts started from this link, over your branding settings.
     * Colors and title applied to a payment link's checkout page.
     */
    "theme"?: ThemeConfig;
    /**
     * Tip options for checkouts started from this link. Tip settings for a checkout: whether tips
     * are enabled, the percent or fixed amount options, the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfig;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "total_quantity_sold": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /** URL buyers open to use the link. */
    "url": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64.
     */
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
     * Current catalog reference unit price for sale display. Null when no variant compare-at price
     * is set. Does not affect the amount charged. anyOf[1] (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value):
     * null.
     */
    "compare_at_price_money": ((MoneyValue) | (null));
    /**
     * Effective primary variant image, inherited from the product when the variant has none.
     * Omitted when neither has an image. An image with its URL, size, and alt text.
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
     * Identifier of the product the offered variant belongs to. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id": string;
    /**
     * Default variant quantity breaks. Use the largest minimum_quantity not above this line's own
     * quantity; an empty array uses the base price. [] (Value): {@link QuantityPriceBreak}. A net
     * unit price that applies when one catalog line reaches minimum_quantity.
     */
    "quantity_price_breaks": Array<QuantityPriceBreak>;
    /**
     * The variant's product option values, in product option position order. Empty when the
     * product has no options. [] (Value): {@link SelectedProductOption}. An option and value
     * chosen for a product variant, such as size Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /**
     * Current catalog base unit price in the line currency. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /** ID of the offered product variant. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id": string;
};
export type PaymentLinkCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "buyer_fields"?: CheckoutBuyerFields;
            "checkout_session_expires_in_seconds"?: number;
            "completed_count": number;
            "created_at": string;
            "custom_fields"?: Array<PaymentLinkCustomField>;
            "custom_text"?: CheckoutCustomTextConfig;
            "delivery_method_ids": Array<string>;
            "description"?: string;
            "donation_max_amount_money"?: MoneyValue;
            "donation_min_amount_money"?: MoneyValue;
            "donation_suggested_amount_money_options"?: Array<MoneyValue>;
            "event_config"?: PaymentLinkEventConfig;
            "external_reference_id"?: string;
            "image"?: ImageAttachment;
            "inactive_message"?: string;
            "inventory_routing_source"?: InventoryRoutingSource;
            "legal"?: LegalSettings;
            "line_items"?: Array<PaymentLinkLineItem>;
            "max_completions"?: number;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string;
            "payment_link_id": string;
            "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
            "payments"?: CheckoutPaymentConfig;
            "promotion_config"?: CheckoutPromotionConfig;
            "redirects"?: CheckoutRedirects;
            "sales_end_at"?: string;
            "sales_start_at"?: string;
            "sales_summary"?: PaymentLinkSalesSummary;
            "status": "active" | "inactive" | (string & {});
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            "subscription_plan_id"?: string;
            "tax"?: CheckoutTaxConfig;
            "theme"?: ThemeConfig;
            "tip"?: CheckoutTipConfig;
            "total_quantity_sold": number;
            "updated_at": string;
            "url": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_link.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "buyer_fields"?: CheckoutBuyerFields;
            "checkout_session_expires_in_seconds"?: number;
            "completed_count": number;
            "created_at": string;
            "custom_fields"?: Array<PaymentLinkCustomField>;
            "custom_text"?: CheckoutCustomTextConfig;
            "delivery_method_ids": Array<string>;
            "description"?: string;
            "donation_max_amount_money"?: MoneyValue;
            "donation_min_amount_money"?: MoneyValue;
            "donation_suggested_amount_money_options"?: Array<MoneyValue>;
            "event_config"?: PaymentLinkEventConfig;
            "external_reference_id"?: string;
            "image"?: ImageAttachment;
            "inactive_message"?: string;
            "inventory_routing_source"?: InventoryRoutingSource;
            "legal"?: LegalSettings;
            "line_items"?: Array<PaymentLinkLineItem>;
            "max_completions"?: number;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string;
            "payment_link_id": string;
            "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
            "payments"?: CheckoutPaymentConfig;
            "promotion_config"?: CheckoutPromotionConfig;
            "redirects"?: CheckoutRedirects;
            "sales_end_at"?: string;
            "sales_start_at"?: string;
            "sales_summary"?: PaymentLinkSalesSummary;
            "status": "active" | "inactive" | (string & {});
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            "subscription_plan_id"?: string;
            "tax"?: CheckoutTaxConfig;
            "theme"?: ThemeConfig;
            "tip"?: CheckoutTipConfig;
            "total_quantity_sold": number;
            "updated_at": string;
            "url": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_link.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_fields (Optional): {@link CheckoutBuyerFields}. What
     * checkout asks the buyer for. Each field you leave out uses your checkout settings.
     * object.checkout_session_expires_in_seconds (Optional): integer. Seconds each checkout
     * session the link starts stays open, from 60 to 86,400. Omit it to use your checkout
     * settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Format: int64.
     * minimum: 60. maximum: 86400. object.completed_count (Required): integer. Number of paid
     * checkout sessions started from this link. Format: int32. object.created_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.custom_fields (Optional): Array of {@link PaymentLinkCustomField}. Questions buyers
     * answer before paying. Answers are recorded on the order and checkout session in
     * `custom_field_answers`. object.custom_fields[] (Value): {@link PaymentLinkCustomField}. A
     * custom field on a payment link that collects an answer from the buyer. object.custom_text
     * (Optional): {@link CheckoutCustomTextConfig}. Custom text for checkouts started from this
     * link. Custom text shown in checkout: an order summary message and a shipping address label.
     * object.delivery_method_ids (Required): Array of string. Delivery methods the link offers.
     * Empty when the link has none, and then its checkouts offer
     * settings.checkout.default_delivery_method_ids when the order has items to deliver.
     * object.delivery_method_ids[] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.description (Optional): string. Text about what the link sells, returned to buyers
     * when they open it. object.donation_max_amount_money (Optional): {@link MoneyValue}. Largest
     * amount a buyer can give on a donation link. Must be greater than zero and greater than or
     * equal to donation_min_amount_money. Omit on create for no maximum. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.donation_min_amount_money (Optional): {@link MoneyValue}. Smallest amount a buyer can
     * give on a donation link. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.donation_suggested_amount_money_options (Optional): Array of {@link
     * MoneyValue}. Amounts a donation link offers as one-tap choices. Use the same currency for
     * all suggested amounts and both bounds. object.donation_suggested_amount_money_options[]
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.event_config (Optional): {@link PaymentLinkEventConfig}. Event
     * details for an `event` link: when and where it takes place and how many tickets it sells.
     * Event settings on an event payment link, such as its date, venue, ticket limit, and ticket
     * emails. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.image
     * (Optional): {@link ImageAttachment}. Image shown to buyers with the link. An image attached
     * to a resource, with its display properties and attachment metadata. object.inactive_message
     * (Optional): string. Message to show the buyer when the link is inactive.
     * object.inventory_routing_source (Optional): {@link InventoryRoutingSource}. The inventory
     * location or routing policy that supplies stock for the link's catalog lines. Absent when
     * using the implicit single-Location fallback, which is evaluated again on use. Where an
     * order, payment link, or reservation routes inventory from: a fixed Location, an inventory
     * allocation policy, or one policy revision. object.legal (Optional): {@link LegalSettings}.
     * The terms and policy links checkouts started from this link show the buyer. Legal settings
     * for a checkout: whether buyers must accept terms, and links to the terms, refund policy,
     * shipping policy, and contract. object.line_items (Optional): Array of {@link
     * PaymentLinkLineItem}. What the link sells. object.line_items[] (Value): {@link
     * PaymentLinkLineItem}. A line item on a payment link. object.max_completions (Optional):
     * integer. Most payments the link accepts, counted by `completed_count`. Absent means no
     * limit. Once the limit is reached, resolving the link fails with a request error. It can't be
     * set below `completed_count`. Format: int32. object.merchant_id (Required): string. ID of the
     * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Name of the payment link.
     * object.payment_link_id (Required): string. Unique identifier for this payment link, prefixed
     * `pl_`. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_link_type (Optional):
     * string. What kind of link this is. Value enum: "standard", "donation", "event".
     * object.payments (Optional): {@link CheckoutPaymentConfig}. Payment options for checkouts
     * started from this link. Payment settings for a checkout: the enabled payment options and a
     * note shown with payment. object.promotion_config (Optional): {@link
     * CheckoutPromotionConfig}. Whether automatic promotions apply to checkouts started from this
     * link and whether buyers can enter promotion codes. Promotion settings for a checkout:
     * whether automatic promotions apply and whether the buyer can apply promotion codes.
     * object.redirects (Optional): {@link CheckoutRedirects}. Where checkout sessions started from
     * this payment link send the buyer after payment, cancellation, or expiration. Where hosted
     * checkout sends the buyer. Not allowed when surface is headless; use payment_return_url.
     * object.sales_end_at (Optional): string. RFC3339 timestamp after which the link stops
     * starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`.
     * Unset means sales do not end on their own, except that an event link without sales_end_at
     * stops selling at event_config.event_at. A checkout opened before the end can still start
     * payment for up to 15 minutes after it. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.sales_start_at (Optional): string. RFC3339 timestamp when buyers can first start a
     * checkout from this link. Stored to nanosecond precision. Before it, resolve fails with
     * ACTION_NOT_ALLOWED and reason sales_not_started. Must be earlier than the link’s sales end,
     * including the event start when no explicit end is set. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.sales_summary (Optional): {@link PaymentLinkSalesSummary}.
     * Present only with expand=sales_summary on GET /v1/payment-links or GET
     * /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard
     * sessions and API keys with checkouts.payment_links.read. Uses the same paid-order definition
     * as the merchant sales summary. Paid-order sales totals for a payment link, computed on
     * request. Paid means the order's collection has completed. Fully and partially refunded
     * orders still count, and paid_totals reports the amount collected before refunds. Each order
     * counts once even if it has multiple checkout sessions. object.status (Required): string.
     * Whether the link can start new checkouts. Value enum: "active", "inactive".
     * object.subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null.
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. object.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
     * billing interval, currency, and status, returned when the plan is expanded.
     * object.subscription_plan.anyOf[2] (Value): null. object.subscription_plan_id (Optional):
     * string. ID of the subscription plan the link sells. Absent for a link that doesn't sell a
     * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". object.tax (Optional): {@link
     * CheckoutTaxConfig}. Tax settings for checkouts started from this link. Whether tax is
     * collected for a checkout session or payment link. object.theme (Optional): {@link
     * ThemeConfig}. The title and colors for checkouts started from this link, over your branding
     * settings. Colors and title applied to a payment link's checkout page. object.tip (Optional):
     * {@link CheckoutTipConfig}. Tip options for checkouts started from this link. Tip settings
     * for a checkout: whether tips are enabled, the percent or fixed amount options, the default
     * tip, and custom tips. object.total_quantity_sold (Required): integer. Whole-number quantity;
     * fractional quantities are not supported. Format: int32. object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.url
     * (Required): string. URL buyers open to use the link. object.version (Required): integer.
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_fields (Optional): {@link CheckoutBuyerFields}. What checkout asks the buyer for.
         * Each field you leave out uses your checkout settings.
         * checkout_session_expires_in_seconds (Optional): integer. Seconds each checkout session
         * the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or
         * 24 hours. It doesn't end the link; use sales_end_at for that. Format: int64. minimum:
         * 60. maximum: 86400. completed_count (Required): integer. Number of paid checkout
         * sessions started from this link. Format: int32. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". custom_fields (Optional):
         * Array of {@link PaymentLinkCustomField}. Questions buyers answer before paying. Answers
         * are recorded on the order and checkout session in `custom_field_answers`.
         * custom_fields[] (Value): {@link PaymentLinkCustomField}. A custom field on a payment
         * link that collects an answer from the buyer. custom_text (Optional): {@link
         * CheckoutCustomTextConfig}. Custom text for checkouts started from this link. Custom text
         * shown in checkout: an order summary message and a shipping address label.
         * delivery_method_ids (Required): Array of string. Delivery methods the link offers. Empty
         * when the link has none, and then its checkouts offer
         * settings.checkout.default_delivery_method_ids when the order has items to deliver.
         * delivery_method_ids[] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
         * description (Optional): string. Text about what the link sells, returned to buyers when
         * they open it. donation_max_amount_money (Optional): {@link MoneyValue}. Largest amount a
         * buyer can give on a donation link. Must be greater than zero and greater than or equal
         * to donation_min_amount_money. Omit on create for no maximum. Monetary amount represented
         * as integer minor units plus an ISO 4217 currency code. donation_min_amount_money
         * (Optional): {@link MoneyValue}. Smallest amount a buyer can give on a donation link.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * donation_suggested_amount_money_options (Optional): Array of {@link MoneyValue}. Amounts
         * a donation link offers as one-tap choices. Use the same currency for all suggested
         * amounts and both bounds. donation_suggested_amount_money_options[] (Value): {@link
         * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. event_config (Optional): {@link PaymentLinkEventConfig}. Event details
         * for an `event` link: when and where it takes place and how many tickets it sells. Event
         * settings on an event payment link, such as its date, venue, ticket limit, and ticket
         * emails. external_reference_id (Optional): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842". image
         * (Optional): {@link ImageAttachment}. Image shown to buyers with the link. An image
         * attached to a resource, with its display properties and attachment metadata.
         * inactive_message (Optional): string. Message to show the buyer when the link is
         * inactive. inventory_routing_source (Optional): {@link InventoryRoutingSource}. The
         * inventory location or routing policy that supplies stock for the link's catalog lines.
         * Absent when using the implicit single-Location fallback, which is evaluated again on
         * use. Where an order, payment link, or reservation routes inventory from: a fixed
         * Location, an inventory allocation policy, or one policy revision. legal (Optional):
         * {@link LegalSettings}. The terms and policy links checkouts started from this link show
         * the buyer. Legal settings for a checkout: whether buyers must accept terms, and links to
         * the terms, refund policy, shipping policy, and contract. line_items (Optional): Array of
         * {@link PaymentLinkLineItem}. What the link sells. line_items[] (Value): {@link
         * PaymentLinkLineItem}. A line item on a payment link. max_completions (Optional):
         * integer. Most payments the link accepts, counted by `completed_count`. Absent means no
         * limit. Once the limit is reached, resolving the link fails with a request error. It
         * can't be set below `completed_count`. Format: int32. merchant_id (Required): string. ID
         * of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
         * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
         * follow the limits on MetadataInput and MetadataPatchInput; maps written before those
         * limits may not satisfy them. name (Required): string. Name of the payment link.
         * payment_link_id (Required): string. Unique identifier for this payment link, prefixed
         * `pl_`. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_link_type (Optional): string.
         * What kind of link this is. Value enum: "standard", "donation", "event". payments
         * (Optional): {@link CheckoutPaymentConfig}. Payment options for checkouts started from
         * this link. Payment settings for a checkout: the enabled payment options and a note shown
         * with payment. promotion_config (Optional): {@link CheckoutPromotionConfig}. Whether
         * automatic promotions apply to checkouts started from this link and whether buyers can
         * enter promotion codes. Promotion settings for a checkout: whether automatic promotions
         * apply and whether the buyer can apply promotion codes. redirects (Optional): {@link
         * CheckoutRedirects}. Where checkout sessions started from this payment link send the
         * buyer after payment, cancellation, or expiration. Where hosted checkout sends the buyer.
         * Not allowed when surface is headless; use payment_return_url. sales_end_at (Optional):
         * string. RFC3339 timestamp after which the link stops starting checkouts and resolve
         * fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end
         * on their own, except that an event link without sales_end_at stops selling at
         * event_config.event_at. A checkout opened before the end can still start payment for up
         * to 15 minutes after it. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * sales_start_at (Optional): string. RFC3339 timestamp when buyers can first start a
         * checkout from this link. Stored to nanosecond precision. Before it, resolve fails with
         * ACTION_NOT_ALLOWED and reason sales_not_started. Must be earlier than the link’s sales
         * end, including the event start when no explicit end is set. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". sales_summary (Optional): {@link PaymentLinkSalesSummary}.
         * Present only with expand=sales_summary on GET /v1/payment-links or GET
         * /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard
         * sessions and API keys with checkouts.payment_links.read. Uses the same paid-order
         * definition as the merchant sales summary. Paid-order sales totals for a payment link,
         * computed on request. Paid means the order's collection has completed. Fully and
         * partially refunded orders still count, and paid_totals reports the amount collected
         * before refunds. Each order counts once even if it has multiple checkout sessions. status
         * (Required): string. Whether the link can start new checkouts. Value enum: "active",
         * "inactive". subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or
         * null. Present only when `expand` includes `subscription_plan`; `null` when expanded and
         * there is no related subscription plan. subscription_plan.anyOf[1] (Value): {@link
         * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
         * billing interval, currency, and status, returned when the plan is expanded.
         * subscription_plan.anyOf[2] (Value): null. subscription_plan_id (Optional): string. ID of
         * the subscription plan the link sells. Absent for a link that doesn't sell a
         * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". tax (Optional): {@link
         * CheckoutTaxConfig}. Tax settings for checkouts started from this link. Whether tax is
         * collected for a checkout session or payment link. theme (Optional): {@link ThemeConfig}.
         * The title and colors for checkouts started from this link, over your branding settings.
         * Colors and title applied to a payment link's checkout page. tip (Optional): {@link
         * CheckoutTipConfig}. Tip options for checkouts started from this link. Tip settings for a
         * checkout: whether tips are enabled, the percent or fixed amount options, the default
         * tip, and custom tips. total_quantity_sold (Required): integer. Whole-number quantity;
         * fractional quantities are not supported. Format: int32. updated_at (Required): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". url (Required):
         * string. URL buyers open to use the link. version (Required): integer. Current version of
         * this resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: int64.
         */
        "object": {
            /**
             * What checkout asks the buyer for. Each field you leave out uses your checkout
             * settings.
             */
            "buyer_fields"?: CheckoutBuyerFields;
            /**
             * Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it
             * to use your checkout settings, or 24 hours. It doesn't end the link; use
             * sales_end_at for that. Format: int64. minimum: 60. maximum: 86400.
             */
            "checkout_session_expires_in_seconds"?: number;
            /** Number of paid checkout sessions started from this link. Format: int32. */
            "completed_count": number;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Questions buyers answer before paying. Answers are recorded on the order and
             * checkout session in `custom_field_answers`. [] (Value): {@link
             * PaymentLinkCustomField}. A custom field on a payment link that collects an answer
             * from the buyer.
             */
            "custom_fields"?: Array<PaymentLinkCustomField>;
            /**
             * Custom text for checkouts started from this link. Custom text shown in checkout: an
             * order summary message and a shipping address label.
             */
            "custom_text"?: CheckoutCustomTextConfig;
            /**
             * Delivery methods the link offers. Empty when the link has none, and then its
             * checkouts offer settings.checkout.default_delivery_method_ids when the order has
             * items to deliver. [] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_ids": Array<string>;
            /** Text about what the link sells, returned to buyers when they open it. */
            "description"?: string;
            /**
             * Largest amount a buyer can give on a donation link. Must be greater than zero and
             * greater than or equal to donation_min_amount_money. Omit on create for no maximum.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "donation_max_amount_money"?: MoneyValue;
            /**
             * Smallest amount a buyer can give on a donation link. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "donation_min_amount_money"?: MoneyValue;
            /**
             * Amounts a donation link offers as one-tap choices. Use the same currency for all
             * suggested amounts and both bounds. [] (Value): {@link MoneyValue}. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "donation_suggested_amount_money_options"?: Array<MoneyValue>;
            /**
             * Event details for an `event` link: when and where it takes place and how many
             * tickets it sells. Event settings on an event payment link, such as its date, venue,
             * ticket limit, and ticket emails.
             */
            "event_config"?: PaymentLinkEventConfig;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Image shown to buyers with the link. An image attached to a resource, with its
             * display properties and attachment metadata.
             */
            "image"?: ImageAttachment;
            /** Message to show the buyer when the link is inactive. */
            "inactive_message"?: string;
            /**
             * The inventory location or routing policy that supplies stock for the link's catalog
             * lines. Absent when using the implicit single-Location fallback, which is evaluated
             * again on use. Where an order, payment link, or reservation routes inventory from: a
             * fixed Location, an inventory allocation policy, or one policy revision.
             */
            "inventory_routing_source"?: InventoryRoutingSource;
            /**
             * The terms and policy links checkouts started from this link show the buyer. Legal
             * settings for a checkout: whether buyers must accept terms, and links to the terms,
             * refund policy, shipping policy, and contract.
             */
            "legal"?: LegalSettings;
            /**
             * What the link sells. [] (Value): {@link PaymentLinkLineItem}. A line item on a
             * payment link.
             */
            "line_items"?: Array<PaymentLinkLineItem>;
            /**
             * Most payments the link accepts, counted by `completed_count`. Absent means no limit.
             * Once the limit is reached, resolving the link fails with a request error. It can't
             * be set below `completed_count`. Format: int32.
             */
            "max_completions"?: number;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Name of the payment link. */
            "name": string;
            /**
             * Unique identifier for this payment link, prefixed `pl_`. Example:
             * "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id": string;
            /** What kind of link this is. Value enum: "standard", "donation", "event". */
            "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
            /**
             * Payment options for checkouts started from this link. Payment settings for a
             * checkout: the enabled payment options and a note shown with payment.
             */
            "payments"?: CheckoutPaymentConfig;
            /**
             * Whether automatic promotions apply to checkouts started from this link and whether
             * buyers can enter promotion codes. Promotion settings for a checkout: whether
             * automatic promotions apply and whether the buyer can apply promotion codes.
             */
            "promotion_config"?: CheckoutPromotionConfig;
            /**
             * Where checkout sessions started from this payment link send the buyer after payment,
             * cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when
             * surface is headless; use payment_return_url.
             */
            "redirects"?: CheckoutRedirects;
            /**
             * RFC3339 timestamp after which the link stops starting checkouts and resolve fails
             * with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on
             * their own, except that an event link without sales_end_at stops selling at
             * event_config.event_at. A checkout opened before the end can still start payment for
             * up to 15 minutes after it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "sales_end_at"?: string;
            /**
             * RFC3339 timestamp when buyers can first start a checkout from this link. Stored to
             * nanosecond precision. Before it, resolve fails with ACTION_NOT_ALLOWED and reason
             * sales_not_started. Must be earlier than the link’s sales end, including the event
             * start when no explicit end is set. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "sales_start_at"?: string;
            /**
             * Present only with expand=sales_summary on GET /v1/payment-links or GET
             * /v1/payment-links/{payment_link_id}. Available to merchant callers, including
             * dashboard sessions and API keys with checkouts.payment_links.read. Uses the same
             * paid-order definition as the merchant sales summary. Paid-order sales totals for a
             * payment link, computed on request. Paid means the order's collection has completed.
             * Fully and partially refunded orders still count, and paid_totals reports the amount
             * collected before refunds. Each order counts once even if it has multiple checkout
             * sessions.
             */
            "sales_summary"?: PaymentLinkSalesSummary;
            /** Whether the link can start new checkouts. Value enum: "active", "inactive". */
            "status": "active" | "inactive" | (string & {});
            /**
             * Present only when `expand` includes `subscription_plan`; `null` when expanded and
             * there is no related subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
             * name, billing interval, currency, and status, returned when the plan is expanded.
             * anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /**
             * ID of the subscription plan the link sells. Absent for a link that doesn't sell a
             * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Tax settings for checkouts started from this link. Whether tax is collected for a
             * checkout session or payment link.
             */
            "tax"?: CheckoutTaxConfig;
            /**
             * The title and colors for checkouts started from this link, over your branding
             * settings. Colors and title applied to a payment link's checkout page.
             */
            "theme"?: ThemeConfig;
            /**
             * Tip options for checkouts started from this link. Tip settings for a checkout:
             * whether tips are enabled, the percent or fixed amount options, the default tip, and
             * custom tips.
             */
            "tip"?: CheckoutTipConfig;
            /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
            "total_quantity_sold": number;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** URL buyers open to use the link. */
            "url": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_link.created". */
    "event_type"?: "payment_link.created";
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
 * The `payment_link.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentLinkCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_fields (Optional): {@link CheckoutBuyerFields}. What
     * checkout asks the buyer for. Each field you leave out uses your checkout settings.
     * object.checkout_session_expires_in_seconds (Optional): integer. Seconds each checkout
     * session the link starts stays open, from 60 to 86,400. Omit it to use your checkout
     * settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Format: int64.
     * minimum: 60. maximum: 86400. object.completed_count (Required): integer. Number of paid
     * checkout sessions started from this link. Format: int32. object.created_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.custom_fields (Optional): Array of {@link PaymentLinkCustomField}. Questions buyers
     * answer before paying. Answers are recorded on the order and checkout session in
     * `custom_field_answers`. object.custom_fields[] (Value): {@link PaymentLinkCustomField}. A
     * custom field on a payment link that collects an answer from the buyer. object.custom_text
     * (Optional): {@link CheckoutCustomTextConfig}. Custom text for checkouts started from this
     * link. Custom text shown in checkout: an order summary message and a shipping address label.
     * object.delivery_method_ids (Required): Array of string. Delivery methods the link offers.
     * Empty when the link has none, and then its checkouts offer
     * settings.checkout.default_delivery_method_ids when the order has items to deliver.
     * object.delivery_method_ids[] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.description (Optional): string. Text about what the link sells, returned to buyers
     * when they open it. object.donation_max_amount_money (Optional): {@link MoneyValue}. Largest
     * amount a buyer can give on a donation link. Must be greater than zero and greater than or
     * equal to donation_min_amount_money. Omit on create for no maximum. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.donation_min_amount_money (Optional): {@link MoneyValue}. Smallest amount a buyer can
     * give on a donation link. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.donation_suggested_amount_money_options (Optional): Array of {@link
     * MoneyValue}. Amounts a donation link offers as one-tap choices. Use the same currency for
     * all suggested amounts and both bounds. object.donation_suggested_amount_money_options[]
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.event_config (Optional): {@link PaymentLinkEventConfig}. Event
     * details for an `event` link: when and where it takes place and how many tickets it sells.
     * Event settings on an event payment link, such as its date, venue, ticket limit, and ticket
     * emails. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.image
     * (Optional): {@link ImageAttachment}. Image shown to buyers with the link. An image attached
     * to a resource, with its display properties and attachment metadata. object.inactive_message
     * (Optional): string. Message to show the buyer when the link is inactive.
     * object.inventory_routing_source (Optional): {@link InventoryRoutingSource}. The inventory
     * location or routing policy that supplies stock for the link's catalog lines. Absent when
     * using the implicit single-Location fallback, which is evaluated again on use. Where an
     * order, payment link, or reservation routes inventory from: a fixed Location, an inventory
     * allocation policy, or one policy revision. object.legal (Optional): {@link LegalSettings}.
     * The terms and policy links checkouts started from this link show the buyer. Legal settings
     * for a checkout: whether buyers must accept terms, and links to the terms, refund policy,
     * shipping policy, and contract. object.line_items (Optional): Array of {@link
     * PaymentLinkLineItem}. What the link sells. object.line_items[] (Value): {@link
     * PaymentLinkLineItem}. A line item on a payment link. object.max_completions (Optional):
     * integer. Most payments the link accepts, counted by `completed_count`. Absent means no
     * limit. Once the limit is reached, resolving the link fails with a request error. It can't be
     * set below `completed_count`. Format: int32. object.merchant_id (Required): string. ID of the
     * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Name of the payment link.
     * object.payment_link_id (Required): string. Unique identifier for this payment link, prefixed
     * `pl_`. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_link_type (Optional):
     * string. What kind of link this is. Value enum: "standard", "donation", "event".
     * object.payments (Optional): {@link CheckoutPaymentConfig}. Payment options for checkouts
     * started from this link. Payment settings for a checkout: the enabled payment options and a
     * note shown with payment. object.promotion_config (Optional): {@link
     * CheckoutPromotionConfig}. Whether automatic promotions apply to checkouts started from this
     * link and whether buyers can enter promotion codes. Promotion settings for a checkout:
     * whether automatic promotions apply and whether the buyer can apply promotion codes.
     * object.redirects (Optional): {@link CheckoutRedirects}. Where checkout sessions started from
     * this payment link send the buyer after payment, cancellation, or expiration. Where hosted
     * checkout sends the buyer. Not allowed when surface is headless; use payment_return_url.
     * object.sales_end_at (Optional): string. RFC3339 timestamp after which the link stops
     * starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`.
     * Unset means sales do not end on their own, except that an event link without sales_end_at
     * stops selling at event_config.event_at. A checkout opened before the end can still start
     * payment for up to 15 minutes after it. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.sales_start_at (Optional): string. RFC3339 timestamp when buyers can first start a
     * checkout from this link. Stored to nanosecond precision. Before it, resolve fails with
     * ACTION_NOT_ALLOWED and reason sales_not_started. Must be earlier than the link’s sales end,
     * including the event start when no explicit end is set. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.sales_summary (Optional): {@link PaymentLinkSalesSummary}.
     * Present only with expand=sales_summary on GET /v1/payment-links or GET
     * /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard
     * sessions and API keys with checkouts.payment_links.read. Uses the same paid-order definition
     * as the merchant sales summary. Paid-order sales totals for a payment link, computed on
     * request. Paid means the order's collection has completed. Fully and partially refunded
     * orders still count, and paid_totals reports the amount collected before refunds. Each order
     * counts once even if it has multiple checkout sessions. object.status (Required): string.
     * Whether the link can start new checkouts. Value enum: "active", "inactive".
     * object.subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null.
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. object.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
     * billing interval, currency, and status, returned when the plan is expanded.
     * object.subscription_plan.anyOf[2] (Value): null. object.subscription_plan_id (Optional):
     * string. ID of the subscription plan the link sells. Absent for a link that doesn't sell a
     * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". object.tax (Optional): {@link
     * CheckoutTaxConfig}. Tax settings for checkouts started from this link. Whether tax is
     * collected for a checkout session or payment link. object.theme (Optional): {@link
     * ThemeConfig}. The title and colors for checkouts started from this link, over your branding
     * settings. Colors and title applied to a payment link's checkout page. object.tip (Optional):
     * {@link CheckoutTipConfig}. Tip options for checkouts started from this link. Tip settings
     * for a checkout: whether tips are enabled, the percent or fixed amount options, the default
     * tip, and custom tips. object.total_quantity_sold (Required): integer. Whole-number quantity;
     * fractional quantities are not supported. Format: int32. object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.url
     * (Required): string. URL buyers open to use the link. object.version (Required): integer.
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_fields (Optional): {@link CheckoutBuyerFields}. What checkout asks the buyer for.
         * Each field you leave out uses your checkout settings.
         * checkout_session_expires_in_seconds (Optional): integer. Seconds each checkout session
         * the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or
         * 24 hours. It doesn't end the link; use sales_end_at for that. Format: int64. minimum:
         * 60. maximum: 86400. completed_count (Required): integer. Number of paid checkout
         * sessions started from this link. Format: int32. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". custom_fields (Optional):
         * Array of {@link PaymentLinkCustomField}. Questions buyers answer before paying. Answers
         * are recorded on the order and checkout session in `custom_field_answers`.
         * custom_fields[] (Value): {@link PaymentLinkCustomField}. A custom field on a payment
         * link that collects an answer from the buyer. custom_text (Optional): {@link
         * CheckoutCustomTextConfig}. Custom text for checkouts started from this link. Custom text
         * shown in checkout: an order summary message and a shipping address label.
         * delivery_method_ids (Required): Array of string. Delivery methods the link offers. Empty
         * when the link has none, and then its checkouts offer
         * settings.checkout.default_delivery_method_ids when the order has items to deliver.
         * delivery_method_ids[] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
         * description (Optional): string. Text about what the link sells, returned to buyers when
         * they open it. donation_max_amount_money (Optional): {@link MoneyValue}. Largest amount a
         * buyer can give on a donation link. Must be greater than zero and greater than or equal
         * to donation_min_amount_money. Omit on create for no maximum. Monetary amount represented
         * as integer minor units plus an ISO 4217 currency code. donation_min_amount_money
         * (Optional): {@link MoneyValue}. Smallest amount a buyer can give on a donation link.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * donation_suggested_amount_money_options (Optional): Array of {@link MoneyValue}. Amounts
         * a donation link offers as one-tap choices. Use the same currency for all suggested
         * amounts and both bounds. donation_suggested_amount_money_options[] (Value): {@link
         * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. event_config (Optional): {@link PaymentLinkEventConfig}. Event details
         * for an `event` link: when and where it takes place and how many tickets it sells. Event
         * settings on an event payment link, such as its date, venue, ticket limit, and ticket
         * emails. external_reference_id (Optional): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842". image
         * (Optional): {@link ImageAttachment}. Image shown to buyers with the link. An image
         * attached to a resource, with its display properties and attachment metadata.
         * inactive_message (Optional): string. Message to show the buyer when the link is
         * inactive. inventory_routing_source (Optional): {@link InventoryRoutingSource}. The
         * inventory location or routing policy that supplies stock for the link's catalog lines.
         * Absent when using the implicit single-Location fallback, which is evaluated again on
         * use. Where an order, payment link, or reservation routes inventory from: a fixed
         * Location, an inventory allocation policy, or one policy revision. legal (Optional):
         * {@link LegalSettings}. The terms and policy links checkouts started from this link show
         * the buyer. Legal settings for a checkout: whether buyers must accept terms, and links to
         * the terms, refund policy, shipping policy, and contract. line_items (Optional): Array of
         * {@link PaymentLinkLineItem}. What the link sells. line_items[] (Value): {@link
         * PaymentLinkLineItem}. A line item on a payment link. max_completions (Optional):
         * integer. Most payments the link accepts, counted by `completed_count`. Absent means no
         * limit. Once the limit is reached, resolving the link fails with a request error. It
         * can't be set below `completed_count`. Format: int32. merchant_id (Required): string. ID
         * of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
         * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
         * follow the limits on MetadataInput and MetadataPatchInput; maps written before those
         * limits may not satisfy them. name (Required): string. Name of the payment link.
         * payment_link_id (Required): string. Unique identifier for this payment link, prefixed
         * `pl_`. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". payment_link_type (Optional): string.
         * What kind of link this is. Value enum: "standard", "donation", "event". payments
         * (Optional): {@link CheckoutPaymentConfig}. Payment options for checkouts started from
         * this link. Payment settings for a checkout: the enabled payment options and a note shown
         * with payment. promotion_config (Optional): {@link CheckoutPromotionConfig}. Whether
         * automatic promotions apply to checkouts started from this link and whether buyers can
         * enter promotion codes. Promotion settings for a checkout: whether automatic promotions
         * apply and whether the buyer can apply promotion codes. redirects (Optional): {@link
         * CheckoutRedirects}. Where checkout sessions started from this payment link send the
         * buyer after payment, cancellation, or expiration. Where hosted checkout sends the buyer.
         * Not allowed when surface is headless; use payment_return_url. sales_end_at (Optional):
         * string. RFC3339 timestamp after which the link stops starting checkouts and resolve
         * fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end
         * on their own, except that an event link without sales_end_at stops selling at
         * event_config.event_at. A checkout opened before the end can still start payment for up
         * to 15 minutes after it. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * sales_start_at (Optional): string. RFC3339 timestamp when buyers can first start a
         * checkout from this link. Stored to nanosecond precision. Before it, resolve fails with
         * ACTION_NOT_ALLOWED and reason sales_not_started. Must be earlier than the link’s sales
         * end, including the event start when no explicit end is set. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". sales_summary (Optional): {@link PaymentLinkSalesSummary}.
         * Present only with expand=sales_summary on GET /v1/payment-links or GET
         * /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard
         * sessions and API keys with checkouts.payment_links.read. Uses the same paid-order
         * definition as the merchant sales summary. Paid-order sales totals for a payment link,
         * computed on request. Paid means the order's collection has completed. Fully and
         * partially refunded orders still count, and paid_totals reports the amount collected
         * before refunds. Each order counts once even if it has multiple checkout sessions. status
         * (Required): string. Whether the link can start new checkouts. Value enum: "active",
         * "inactive". subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or
         * null. Present only when `expand` includes `subscription_plan`; `null` when expanded and
         * there is no related subscription plan. subscription_plan.anyOf[1] (Value): {@link
         * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
         * billing interval, currency, and status, returned when the plan is expanded.
         * subscription_plan.anyOf[2] (Value): null. subscription_plan_id (Optional): string. ID of
         * the subscription plan the link sells. Absent for a link that doesn't sell a
         * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". tax (Optional): {@link
         * CheckoutTaxConfig}. Tax settings for checkouts started from this link. Whether tax is
         * collected for a checkout session or payment link. theme (Optional): {@link ThemeConfig}.
         * The title and colors for checkouts started from this link, over your branding settings.
         * Colors and title applied to a payment link's checkout page. tip (Optional): {@link
         * CheckoutTipConfig}. Tip options for checkouts started from this link. Tip settings for a
         * checkout: whether tips are enabled, the percent or fixed amount options, the default
         * tip, and custom tips. total_quantity_sold (Required): integer. Whole-number quantity;
         * fractional quantities are not supported. Format: int32. updated_at (Required): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". url (Required):
         * string. URL buyers open to use the link. version (Required): integer. Current version of
         * this resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: int64.
         */
        "object": {
            /**
             * What checkout asks the buyer for. Each field you leave out uses your checkout
             * settings.
             */
            "buyer_fields"?: CheckoutBuyerFields;
            /**
             * Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it
             * to use your checkout settings, or 24 hours. It doesn't end the link; use
             * sales_end_at for that. Format: int64. minimum: 60. maximum: 86400.
             */
            "checkout_session_expires_in_seconds"?: number;
            /** Number of paid checkout sessions started from this link. Format: int32. */
            "completed_count": number;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Questions buyers answer before paying. Answers are recorded on the order and
             * checkout session in `custom_field_answers`. [] (Value): {@link
             * PaymentLinkCustomField}. A custom field on a payment link that collects an answer
             * from the buyer.
             */
            "custom_fields"?: Array<PaymentLinkCustomField>;
            /**
             * Custom text for checkouts started from this link. Custom text shown in checkout: an
             * order summary message and a shipping address label.
             */
            "custom_text"?: CheckoutCustomTextConfig;
            /**
             * Delivery methods the link offers. Empty when the link has none, and then its
             * checkouts offer settings.checkout.default_delivery_method_ids when the order has
             * items to deliver. [] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_ids": Array<string>;
            /** Text about what the link sells, returned to buyers when they open it. */
            "description"?: string;
            /**
             * Largest amount a buyer can give on a donation link. Must be greater than zero and
             * greater than or equal to donation_min_amount_money. Omit on create for no maximum.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "donation_max_amount_money"?: MoneyValue;
            /**
             * Smallest amount a buyer can give on a donation link. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "donation_min_amount_money"?: MoneyValue;
            /**
             * Amounts a donation link offers as one-tap choices. Use the same currency for all
             * suggested amounts and both bounds. [] (Value): {@link MoneyValue}. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "donation_suggested_amount_money_options"?: Array<MoneyValue>;
            /**
             * Event details for an `event` link: when and where it takes place and how many
             * tickets it sells. Event settings on an event payment link, such as its date, venue,
             * ticket limit, and ticket emails.
             */
            "event_config"?: PaymentLinkEventConfig;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Image shown to buyers with the link. An image attached to a resource, with its
             * display properties and attachment metadata.
             */
            "image"?: ImageAttachment;
            /** Message to show the buyer when the link is inactive. */
            "inactive_message"?: string;
            /**
             * The inventory location or routing policy that supplies stock for the link's catalog
             * lines. Absent when using the implicit single-Location fallback, which is evaluated
             * again on use. Where an order, payment link, or reservation routes inventory from: a
             * fixed Location, an inventory allocation policy, or one policy revision.
             */
            "inventory_routing_source"?: InventoryRoutingSource;
            /**
             * The terms and policy links checkouts started from this link show the buyer. Legal
             * settings for a checkout: whether buyers must accept terms, and links to the terms,
             * refund policy, shipping policy, and contract.
             */
            "legal"?: LegalSettings;
            /**
             * What the link sells. [] (Value): {@link PaymentLinkLineItem}. A line item on a
             * payment link.
             */
            "line_items"?: Array<PaymentLinkLineItem>;
            /**
             * Most payments the link accepts, counted by `completed_count`. Absent means no limit.
             * Once the limit is reached, resolving the link fails with a request error. It can't
             * be set below `completed_count`. Format: int32.
             */
            "max_completions"?: number;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Name of the payment link. */
            "name": string;
            /**
             * Unique identifier for this payment link, prefixed `pl_`. Example:
             * "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id": string;
            /** What kind of link this is. Value enum: "standard", "donation", "event". */
            "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
            /**
             * Payment options for checkouts started from this link. Payment settings for a
             * checkout: the enabled payment options and a note shown with payment.
             */
            "payments"?: CheckoutPaymentConfig;
            /**
             * Whether automatic promotions apply to checkouts started from this link and whether
             * buyers can enter promotion codes. Promotion settings for a checkout: whether
             * automatic promotions apply and whether the buyer can apply promotion codes.
             */
            "promotion_config"?: CheckoutPromotionConfig;
            /**
             * Where checkout sessions started from this payment link send the buyer after payment,
             * cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when
             * surface is headless; use payment_return_url.
             */
            "redirects"?: CheckoutRedirects;
            /**
             * RFC3339 timestamp after which the link stops starting checkouts and resolve fails
             * with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on
             * their own, except that an event link without sales_end_at stops selling at
             * event_config.event_at. A checkout opened before the end can still start payment for
             * up to 15 minutes after it. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "sales_end_at"?: string;
            /**
             * RFC3339 timestamp when buyers can first start a checkout from this link. Stored to
             * nanosecond precision. Before it, resolve fails with ACTION_NOT_ALLOWED and reason
             * sales_not_started. Must be earlier than the link’s sales end, including the event
             * start when no explicit end is set. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "sales_start_at"?: string;
            /**
             * Present only with expand=sales_summary on GET /v1/payment-links or GET
             * /v1/payment-links/{payment_link_id}. Available to merchant callers, including
             * dashboard sessions and API keys with checkouts.payment_links.read. Uses the same
             * paid-order definition as the merchant sales summary. Paid-order sales totals for a
             * payment link, computed on request. Paid means the order's collection has completed.
             * Fully and partially refunded orders still count, and paid_totals reports the amount
             * collected before refunds. Each order counts once even if it has multiple checkout
             * sessions.
             */
            "sales_summary"?: PaymentLinkSalesSummary;
            /** Whether the link can start new checkouts. Value enum: "active", "inactive". */
            "status": "active" | "inactive" | (string & {});
            /**
             * Present only when `expand` includes `subscription_plan`; `null` when expanded and
             * there is no related subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
             * name, billing interval, currency, and status, returned when the plan is expanded.
             * anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /**
             * ID of the subscription plan the link sells. Absent for a link that doesn't sell a
             * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Tax settings for checkouts started from this link. Whether tax is collected for a
             * checkout session or payment link.
             */
            "tax"?: CheckoutTaxConfig;
            /**
             * The title and colors for checkouts started from this link, over your branding
             * settings. Colors and title applied to a payment link's checkout page.
             */
            "theme"?: ThemeConfig;
            /**
             * Tip options for checkouts started from this link. Tip settings for a checkout:
             * whether tips are enabled, the percent or fixed amount options, the default tip, and
             * custom tips.
             */
            "tip"?: CheckoutTipConfig;
            /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
            "total_quantity_sold": number;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /** URL buyers open to use the link. */
            "url": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_link.created". */
    "event_type"?: "payment_link.created";
});
/** A custom field on a payment link that collects an answer from the buyer. */
export type PaymentLinkCustomField = {
    /**
     * What kind of answer the field collects. Value enum: "text", "dropdown", "checkbox",
     * "textarea".
     */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea" | (string & {});
    /**
     * Unique custom field key, without leading or trailing whitespace. Each answer records it as
     * `custom_field_answers[].key`. minLength: 1. maxLength: 243.
     */
    "key": string;
    /** Question shown to the buyer. */
    "label": string;
    /**
     * Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults
     * to 255 for text and 1000 for textarea when omitted. Format: int32. minimum: 1. maximum:
     * 4096.
     */
    "max_length"?: number;
    /**
     * Dropdown choices. Dropdown fields require at least one option. Options must not have leading
     * or trailing whitespace. [] (Value): string. maxLength: 4096.
     */
    "options"?: Array<string>;
    /**
     * Unique identifier for this payment link custom field, prefixed `plcf_`. Example:
     * "plcf_01KEZF7C00JBQMP98WBXZA3RHS".
     */
    "payment_link_custom_field_id": string;
    /** Hint text shown inside the empty field. */
    "placeholder"?: string;
    /** Display order among the link's custom fields. Lower numbers come first. Format: int32. */
    "position"?: number;
    /** Whether the buyer must answer before paying. */
    "required"?: boolean;
};
/**
 * A custom field in a payment link update. Include its ID to change an existing field, or omit the
 * ID to add a new one.
 */
export type PaymentLinkCustomFieldPatchRequest = {
    /**
     * What kind of answer the field collects. Value enum: "text", "dropdown", "checkbox",
     * "textarea".
     */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea" | (string & {});
    /**
     * Unique custom field key, without leading or trailing whitespace. Each answer records it as
     * `custom_field_answers[].key`. minLength: 1. maxLength: 243.
     */
    "key": string;
    /** Question shown to the buyer. minLength: 1. maxLength: 255. */
    "label": string;
    /**
     * Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults
     * to 255 for text and 1000 for textarea when omitted. Format: int32. minimum: 1. maximum:
     * 4096.
     */
    "max_length"?: number;
    /**
     * Dropdown choices. Dropdown fields require at least one option. Options must not have leading
     * or trailing whitespace. [] (Value): string. minLength: 1. maxLength: 4096.
     */
    "options"?: Array<string>;
    /**
     * Stable ID of an existing custom field. Omit it to create a new custom field. minLength: 1.
     * Example: "plcf_01KEZF7C00JBQMP98WBXZA3RHS".
     */
    "payment_link_custom_field_id"?: string;
    /** Hint text shown inside the empty field. minLength: 1. maxLength: 500. */
    "placeholder"?: string;
    /** Display order among the link's custom fields. Lower numbers come first. Format: int32. */
    "position"?: number;
    /** Whether the buyer must answer before paying. */
    "required"?: boolean;
};
/**
 * A custom field in a payment link update. Include its ID to change an existing field, or omit the
 * ID to add a new one.
 */
export type PaymentLinkCustomFieldPatchRequestInput = {
    /**
     * What kind of answer the field collects. Value enum: "text", "dropdown", "checkbox",
     * "textarea".
     */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea";
    /**
     * Unique custom field key, without leading or trailing whitespace. Each answer records it as
     * `custom_field_answers[].key`. minLength: 1. maxLength: 243.
     */
    "key": string;
    /** Question shown to the buyer. minLength: 1. maxLength: 255. */
    "label": string;
    /**
     * Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults
     * to 255 for text and 1000 for textarea when omitted. Format: int32. minimum: 1. maximum:
     * 4096.
     */
    "max_length"?: number;
    /**
     * Dropdown choices. Dropdown fields require at least one option. Options must not have leading
     * or trailing whitespace. [] (Value): string. minLength: 1. maxLength: 4096.
     */
    "options"?: Array<string>;
    /**
     * Stable ID of an existing custom field. Omit it to create a new custom field. minLength: 1.
     * Example: "plcf_01KEZF7C00JBQMP98WBXZA3RHS".
     */
    "payment_link_custom_field_id"?: string;
    /** Hint text shown inside the empty field. minLength: 1. maxLength: 500. */
    "placeholder"?: string;
    /** Display order among the link's custom fields. Lower numbers come first. Format: int32. */
    "position"?: number;
    /** Whether the buyer must answer before paying. */
    "required"?: boolean;
};
export type PaymentLinkCustomFieldPreviousAttributes = {
    /**
     * What kind of answer the field collects. Value enum: "text", "dropdown", "checkbox",
     * "textarea". anyOf[1] (Value): string. What kind of answer the field collects. Value enum:
     * "text", "dropdown", "checkbox", "textarea". anyOf[2] (Value): null.
     */
    "custom_field_type"?: (("text" | "dropdown" | "checkbox" | "textarea" | (string & {})) | (null));
    /**
     * Unique custom field key, without leading or trailing whitespace. Each answer records it as
     * `custom_field_answers[].key`. anyOf[1] (Value): string. Unique custom field key, without
     * leading or trailing whitespace. Each answer records it as `custom_field_answers[].key`.
     * minLength: 1. maxLength: 243. anyOf[2] (Value): null.
     */
    "key"?: ((string) | (null));
    /**
     * Question shown to the buyer. anyOf[1] (Value): string. Question shown to the buyer. anyOf[2]
     * (Value): null.
     */
    "label"?: ((string) | (null));
    /**
     * Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults
     * to 255 for text and 1000 for textarea when omitted. anyOf[1] (Value): integer. Maximum
     * answer length for text and textarea fields, counted in Unicode code points. Defaults to 255
     * for text and 1000 for textarea when omitted. Format: int32. minimum: 1. maximum: 4096.
     * anyOf[2] (Value): null.
     */
    "max_length"?: ((number) | (null));
    /**
     * Dropdown choices. Dropdown fields require at least one option. Options must not have leading
     * or trailing whitespace. anyOf[1] (Value): Array of string. Dropdown choices. Dropdown fields
     * require at least one option. Options must not have leading or trailing whitespace.
     * anyOf[1][] (Value): string. maxLength: 4096. anyOf[2] (Value): null.
     */
    "options"?: ((Array<string>) | (null));
    /**
     * Unique identifier for this payment link custom field, prefixed `plcf_`. anyOf[1] (Value):
     * string. Unique identifier for this payment link custom field, prefixed `plcf_`. Example:
     * "plcf_01KEZF7C00JBQMP98WBXZA3RHS". anyOf[2] (Value): null.
     */
    "payment_link_custom_field_id"?: ((string) | (null));
    /**
     * Hint text shown inside the empty field. anyOf[1] (Value): string. Hint text shown inside the
     * empty field. anyOf[2] (Value): null.
     */
    "placeholder"?: ((string) | (null));
    /**
     * Display order among the link's custom fields. Lower numbers come first. anyOf[1] (Value):
     * integer. Display order among the link's custom fields. Lower numbers come first. Format:
     * int32. anyOf[2] (Value): null.
     */
    "position"?: ((number) | (null));
    /**
     * Whether the buyer must answer before paying. anyOf[1] (Value): boolean. Whether the buyer
     * must answer before paying. anyOf[2] (Value): null.
     */
    "required"?: ((boolean) | (null));
};
/** A custom field you add to a payment link when creating it. */
export type PaymentLinkCustomFieldRequest = {
    /**
     * What kind of answer the field collects. Value enum: "text", "dropdown", "checkbox",
     * "textarea".
     */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea" | (string & {});
    /**
     * Unique custom field key, without leading or trailing whitespace. Each answer records it as
     * `custom_field_answers[].key`. minLength: 1. maxLength: 243.
     */
    "key": string;
    /** Question shown to the buyer. minLength: 1. maxLength: 255. */
    "label": string;
    /**
     * Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults
     * to 255 for text and 1000 for textarea when omitted. Format: int32. minimum: 1. maximum:
     * 4096.
     */
    "max_length"?: number;
    /**
     * Dropdown choices. Dropdown fields require at least one option. Options must not have leading
     * or trailing whitespace. [] (Value): string. minLength: 1. maxLength: 4096.
     */
    "options"?: Array<string>;
    /** Hint text shown inside the empty field. minLength: 1. maxLength: 500. */
    "placeholder"?: string;
    /** Display order among the link's custom fields. Lower numbers come first. Format: int32. */
    "position"?: number;
    /** Whether the buyer must answer before paying. */
    "required"?: boolean;
};
/** A custom field you add to a payment link when creating it. */
export type PaymentLinkCustomFieldRequestInput = {
    /**
     * What kind of answer the field collects. Value enum: "text", "dropdown", "checkbox",
     * "textarea".
     */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea";
    /**
     * Unique custom field key, without leading or trailing whitespace. Each answer records it as
     * `custom_field_answers[].key`. minLength: 1. maxLength: 243.
     */
    "key": string;
    /** Question shown to the buyer. minLength: 1. maxLength: 255. */
    "label": string;
    /**
     * Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults
     * to 255 for text and 1000 for textarea when omitted. Format: int32. minimum: 1. maximum:
     * 4096.
     */
    "max_length"?: number;
    /**
     * Dropdown choices. Dropdown fields require at least one option. Options must not have leading
     * or trailing whitespace. [] (Value): string. minLength: 1. maxLength: 4096.
     */
    "options"?: Array<string>;
    /** Hint text shown inside the empty field. minLength: 1. maxLength: 500. */
    "placeholder"?: string;
    /** Display order among the link's custom fields. Lower numbers come first. Format: int32. */
    "position"?: number;
    /** Whether the buyer must answer before paying. */
    "required"?: boolean;
};
/**
 * Custom text shown on a payment link's checkout, such as the order summary message and shipping
 * address label.
 */
export type PaymentLinkCustomTextConfigInput = {
    /** Message shown near the order summary in checkout. minLength: 1. maxLength: 2048. */
    "order_summary_message"?: string;
    /** Label shown for the shipping address in checkout. minLength: 1. maxLength: 255. */
    "shipping_address_label"?: string;
};
/** Changes to a payment link's custom checkout text. Send null to clear a field. */
export type PaymentLinkCustomTextPatchRequest = {
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "order_summary_message"?: string | null;
    /** Send null to clear it. minLength: 1. maxLength: 255. */
    "shipping_address_label"?: string | null;
};
/** Changes to a payment link's custom checkout text. Send null to clear a field. */
export type PaymentLinkCustomTextPatchRequestInput = PaymentLinkCustomTextPatchRequest;
/**
 * Event settings on an event payment link, such as its date, venue, ticket limit, and ticket
 * emails.
 */
export type PaymentLinkEventConfig = {
    /**
     * Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the
     * names onto the tickets when the order is paid. Defaults to false.
     */
    "collect_attendee_names"?: boolean;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "event_at"?: string;
    /**
     * Most tickets the event sells across all orders. `null` when the event has no ticket limit.
     * On update, send null to remove the limit; a value below the tickets already sold or held by
     * payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional
     * quantities are not supported. Format: int32.
     */
    "max_total_quantity"?: number | null;
    /** Whether Flint emails tickets to buyers after they pay. */
    "send_ticket_emails"?: boolean;
    /**
     * Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued
     * tickets. maxLength: 5.
     */
    "ticket_prefix"?: string;
    /** IANA time zone of the event venue, used to show `event_at` as venue time. */
    "timezone"?: string;
    /** Where the event takes place. maxLength: 500. */
    "venue"?: string;
};
/** Changes to an event payment link's settings. Send null on a nullable field to clear it. */
export type PaymentLinkEventConfigPatchRequest = {
    /**
     * Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the
     * names onto the tickets when the order is paid. Defaults to false.
     */
    "collect_attendee_names"?: boolean;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "event_at"?: string;
    /**
     * Most tickets the event sells across all orders. `null` when the event has no ticket limit.
     * On update, send null to remove the limit; a value below the tickets already sold or held by
     * payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional
     * quantities are not supported. Format: int32.
     */
    "max_total_quantity"?: number | null;
    /** Whether Flint emails tickets to buyers after they pay. */
    "send_ticket_emails"?: boolean;
    /**
     * Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued
     * tickets. Send null to clear it. minLength: 1. maxLength: 5.
     */
    "ticket_prefix"?: string | null;
    /** IANA time zone of the event venue, used to show `event_at` as venue time. minLength: 1. */
    "timezone"?: string;
    /** Send null to clear it. minLength: 1. maxLength: 500. */
    "venue"?: string | null;
};
/** Changes to an event payment link's settings. Send null on a nullable field to clear it. */
export type PaymentLinkEventConfigPatchRequestInput = {
    /**
     * Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the
     * names onto the tickets when the order is paid. Defaults to false.
     */
    "collect_attendee_names"?: boolean;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "event_at"?: string | globalThis.Date;
    /**
     * Most tickets the event sells across all orders. `null` when the event has no ticket limit.
     * On update, send null to remove the limit; a value below the tickets already sold or held by
     * payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional
     * quantities are not supported. Format: int32.
     */
    "max_total_quantity"?: number | null;
    /** Whether Flint emails tickets to buyers after they pay. */
    "send_ticket_emails"?: boolean;
    /**
     * Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued
     * tickets. Send null to clear it. minLength: 1. maxLength: 5.
     */
    "ticket_prefix"?: string | null;
    /** IANA time zone of the event venue, used to show `event_at` as venue time. minLength: 1. */
    "timezone"?: string;
    /** Send null to clear it. minLength: 1. maxLength: 500. */
    "venue"?: string | null;
};
export type PaymentLinkEventConfigPreviousAttributes = {
    /**
     * Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the
     * names onto the tickets when the order is paid. Defaults to false. anyOf[1] (Value): boolean.
     * Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the
     * names onto the tickets when the order is paid. Defaults to false. anyOf[2] (Value): null.
     */
    "collect_attendee_names"?: ((boolean) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "event_at"?: ((string) | (null));
    /**
     * Most tickets the event sells across all orders. `null` when the event has no ticket limit.
     * On update, send null to remove the limit; a value below the tickets already sold or held by
     * payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional
     * quantities are not supported. anyOf[1] (Value): integer. Most tickets the event sells across
     * all orders. `null` when the event has no ticket limit. On update, send null to remove the
     * limit; a value below the tickets already sold or held by payments in progress fails with
     * `LIMIT_EXCEEDED`. Whole-number quantity; fractional quantities are not supported. Format:
     * int32. anyOf[2] (Value): null.
     */
    "max_total_quantity"?: ((number) | (null));
    /**
     * Whether Flint emails tickets to buyers after they pay. anyOf[1] (Value): boolean. Whether
     * Flint emails tickets to buyers after they pay. anyOf[2] (Value): null.
     */
    "send_ticket_emails"?: ((boolean) | (null));
    /**
     * Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued
     * tickets. anyOf[1] (Value): string. Prefix for ticket numbers, up to 5 characters. It cannot
     * change after the event has issued tickets. maxLength: 5. anyOf[2] (Value): null.
     */
    "ticket_prefix"?: ((string) | (null));
    /**
     * IANA time zone of the event venue, used to show `event_at` as venue time. anyOf[1] (Value):
     * string. IANA time zone of the event venue, used to show `event_at` as venue time. anyOf[2]
     * (Value): null.
     */
    "timezone"?: ((string) | (null));
    /**
     * Where the event takes place. anyOf[1] (Value): string. Where the event takes place.
     * maxLength: 500. anyOf[2] (Value): null.
     */
    "venue"?: ((string) | (null));
};
/** Event settings you supply when creating an event payment link. */
export type PaymentLinkEventConfigRequest = {
    /**
     * Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the
     * names onto the tickets when the order is paid. Defaults to false.
     */
    "collect_attendee_names"?: boolean;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "event_at": string;
    /**
     * Most tickets the event sells across all orders. `null` when the event has no ticket limit.
     * On update, send null to remove the limit; a value below the tickets already sold or held by
     * payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional
     * quantities are not supported. Format: int32.
     */
    "max_total_quantity"?: number | null;
    /** Whether Flint emails tickets to buyers after they pay. */
    "send_ticket_emails"?: boolean;
    /**
     * Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued
     * tickets. minLength: 1. maxLength: 5.
     */
    "ticket_prefix"?: string;
    /** IANA time zone of the event venue, used to show `event_at` as venue time. minLength: 1. */
    "timezone": string;
    /** Where the event takes place. minLength: 1. maxLength: 500. */
    "venue"?: string;
};
/** Event settings you supply when creating an event payment link. */
export type PaymentLinkEventConfigRequestInput = {
    /**
     * Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the
     * names onto the tickets when the order is paid. Defaults to false.
     */
    "collect_attendee_names"?: boolean;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "event_at": string | globalThis.Date;
    /**
     * Most tickets the event sells across all orders. `null` when the event has no ticket limit.
     * On update, send null to remove the limit; a value below the tickets already sold or held by
     * payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional
     * quantities are not supported. Format: int32.
     */
    "max_total_quantity"?: number | null;
    /** Whether Flint emails tickets to buyers after they pay. */
    "send_ticket_emails"?: boolean;
    /**
     * Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued
     * tickets. minLength: 1. maxLength: 5.
     */
    "ticket_prefix"?: string;
    /** IANA time zone of the event venue, used to show `event_at` as venue time. minLength: 1. */
    "timezone": string;
    /** Where the event takes place. minLength: 1. maxLength: 500. */
    "venue"?: string;
};
/**
 * Legal links on a payment link: contract, refund policy, shipping policy, and terms of service
 * URLs, and whether buyers must accept the terms.
 */
export type PaymentLinkLegalConfigInput = {
    /**
     * An `https://` URL of the contract the buyer agrees to, linked in checkout. minLength: 1.
     * maxLength: 2048.
     */
    "contract_url"?: string;
    /**
     * An `https://` URL of your refund policy, linked in checkout. minLength: 1. maxLength: 2048.
     */
    "refund_policy_url"?: string;
    /** Whether the buyer must accept the terms of service before paying. */
    "require_terms_of_service"?: boolean;
    /**
     * An `https://` URL of your shipping policy, linked in checkout. minLength: 1. maxLength:
     * 2048.
     */
    "shipping_policy_url"?: string;
    /**
     * An `https://` URL of your terms of service, linked in checkout. minLength: 1. maxLength:
     * 2048.
     */
    "terms_of_service_url"?: string;
};
/** Changes to a payment link's legal links and terms setting. Send null on a URL to clear it. */
export type PaymentLinkLegalPatchRequestInput = {
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "contract_url"?: string | null;
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "refund_policy_url"?: string | null;
    /** Whether the buyer must accept the terms of service before paying. */
    "require_terms_of_service"?: boolean;
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "shipping_policy_url"?: string | null;
    /** Send null to clear it. minLength: 1. maxLength: 2048. */
    "terms_of_service_url"?: string | null;
};
/** A line item on a payment link. */
export type PaymentLinkLineItem = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. */
    "description"?: string;
    /**
     * True when the referenced variant or bundle cannot be sold, or no listed variant in
     * variant_ids can be sold in the line currency. Always false on ad hoc line items.
     */
    "is_catalog_item_unavailable": boolean;
    /** Public event read: true when the tier or event has no capacity left. */
    "is_sold_out"?: boolean;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /** Name of an ad hoc line item. Catalog lines take the catalog name. */
    "name"?: string;
    /**
     * Unique identifier for this payment link line item, prefixed `plli_`. Example:
     * "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id": string;
    /**
     * Parent catalog context only. The product that the variants in variant_ids belong to. Present
     * only on buyer choice lines; refused on input. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null.
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | null | (string & {}) | null;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     * Public event read: whole-number admissions left after sales and payment holds; fractional
     * quantities are not supported. This quantity is bounded by both the tier and event caps.
     * Omitted when neither is capped. Format: int32.
     */
    "remaining_quantity"?: number;
    /**
     * Current catalog name of the referenced variant or bundle, or the product name for
     * variant_ids lines. A variant reads as the product name, plus the variant name when the
     * variant is a named option combination. This is the catalog value at read time, not a stored
     * snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line
     * items and when the catalog object no longer exists.
     */
    "resolved_name"?: string;
    /**
     * Current lowest and highest catalog unit prices among listed variants that can be sold in the
     * line currency. Computed at read time, not stored. Omitted when no listed variant can be
     * sold. The lowest and highest unit prices across a product's variants.
     */
    "resolved_price_range"?: ProductPriceRange;
    /**
     * Current catalog unit price of the referenced variant or bundle. For a fixed variant this is
     * the base price that applies below the first quantity price break. This is the catalog value
     * at read time, not a stored snapshot: checkout resolves the price again when a buyer opens
     * the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids
     * lines, and when the catalog object no longer exists. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "resolved_unit_price_money"?: MoneyValue;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency
     * for the price, bounds, and suggested prices. [] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /**
     * How the line item is defined. Value enum: "variant", "bundle", "custom_fixed",
     * "custom_variable".
     */
    "type": "variant" | "bundle" | "custom_fixed" | "custom_variable" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the catalog variant a `variant` line sells. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & ((Exclude<PaymentLinkLineItemVariant & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemBundle & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemCustomFixed & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemCustomVariable & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** A line item on a payment link. */
export type PaymentLinkLineItemBundle = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. */
    "description"?: string;
    /**
     * True when the referenced variant or bundle cannot be sold, or no listed variant in
     * variant_ids can be sold in the line currency. Always false on ad hoc line items.
     */
    "is_catalog_item_unavailable": boolean;
    /** Public event read: true when the tier or event has no capacity left. */
    "is_sold_out"?: boolean;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /** Name of an ad hoc line item. Catalog lines take the catalog name. */
    "name"?: string;
    /**
     * Unique identifier for this payment link line item, prefixed `plli_`. Example:
     * "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id": string;
    /**
     * Parent catalog context only. The product that the variants in variant_ids belong to. Present
     * only on buyer choice lines; refused on input. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null.
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | null | (string & {}) | null;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     * Public event read: whole-number admissions left after sales and payment holds; fractional
     * quantities are not supported. This quantity is bounded by both the tier and event caps.
     * Omitted when neither is capped. Format: int32.
     */
    "remaining_quantity"?: number;
    /**
     * Current catalog name of the referenced variant or bundle, or the product name for
     * variant_ids lines. A variant reads as the product name, plus the variant name when the
     * variant is a named option combination. This is the catalog value at read time, not a stored
     * snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line
     * items and when the catalog object no longer exists.
     */
    "resolved_name"?: string;
    /**
     * Current lowest and highest catalog unit prices among listed variants that can be sold in the
     * line currency. Computed at read time, not stored. Omitted when no listed variant can be
     * sold. The lowest and highest unit prices across a product's variants.
     */
    "resolved_price_range"?: ProductPriceRange;
    /**
     * Current catalog unit price of the referenced variant or bundle. For a fixed variant this is
     * the base price that applies below the first quantity price break. This is the catalog value
     * at read time, not a stored snapshot: checkout resolves the price again when a buyer opens
     * the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids
     * lines, and when the catalog object no longer exists. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "resolved_unit_price_money"?: MoneyValue;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency
     * for the price, bounds, and suggested prices. [] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the catalog variant a `variant` line sells. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /**
     * ID of the catalog bundle a `bundle` line sells. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
}));
export type PaymentLinkLineItemBundlePreviousAttributes = ({
    /**
     * Whether the buyer can change the quantity in checkout. anyOf[1] (Value): boolean. Whether
     * the buyer can change the quantity in checkout. anyOf[2] (Value): null.
     */
    "allow_quantity_adjustment"?: ((boolean) | (null));
    /**
     * Whether the buyer sets the unit price. Only `custom_variable` lines allow it. anyOf[1]
     * (Value): boolean. Whether the buyer sets the unit price. Only `custom_variable` lines allow
     * it. anyOf[2] (Value): null.
     */
    "allow_unit_price_adjustment"?: ((boolean) | (null));
    /**
     * ID of the catalog bundle a `bundle` line sells. anyOf[1] (Value): string. ID of the catalog
     * bundle a `bundle` line sells. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". anyOf[2] (Value):
     * null.
     */
    "bundle_id"?: ((string) | (null));
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. anyOf[1] (Value): string.
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value):
     * null.
     */
    "default_variant_id"?: ((string) | (null));
    /**
     * Description of an ad hoc line item. anyOf[1] (Value): string. Description of an ad hoc line
     * item. anyOf[2] (Value): null.
     */
    "description"?: ((string) | (null));
    /**
     * True when the referenced variant or bundle cannot be sold, or no listed variant in
     * variant_ids can be sold in the line currency. Always false on ad hoc line items. anyOf[1]
     * (Value): boolean. True when the referenced variant or bundle cannot be sold, or no listed
     * variant in variant_ids can be sold in the line currency. Always false on ad hoc line items.
     * anyOf[2] (Value): null.
     */
    "is_catalog_item_unavailable"?: ((boolean) | (null));
    /**
     * Public event read: true when the tier or event has no capacity left. anyOf[1] (Value):
     * boolean. Public event read: true when the tier or event has no capacity left. anyOf[2]
     * (Value): null.
     */
    "is_sold_out"?: ((boolean) | (null));
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. anyOf[1] (Value): string. Keys the resolve override maps. Stable
     * line item key used in checkout overrides. Must not have leading or trailing whitespace.
     * Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used
     * by explicit keys; retained for an existing line item when omitted on update. anyOf[2]
     * (Value): null.
     */
    "key"?: ((string) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2]
     * (Value): null.
     */
    "max_quantity"?: ((number) | (null));
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. anyOf[1] (Value): integer. Optional
     * whole-number admission capacity across all orders for an event tier; fractional quantities
     * are not supported. Must be at least 1 and cannot exceed event_config.max_total_quantity when
     * the event is capped. Omit for no tier cap; omitting it in a line_items replacement removes
     * an existing cap. Format: int32. minimum: 1. anyOf[2] (Value): null.
     */
    "max_total_quantity"?: ((number) | (null));
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "max_unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2]
     * (Value): null.
     */
    "min_quantity"?: ((number) | (null));
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. anyOf[1]
     * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "min_unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. anyOf[1] (Value): string.
     * Name of an ad hoc line item. Catalog lines take the catalog name. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * Unique identifier for this payment link line item, prefixed `plli_`. anyOf[1] (Value):
     * string. Unique identifier for this payment link line item, prefixed `plli_`. Example:
     * "plli_01KEZF7C004V7GVCCNMYYCBAJS". anyOf[2] (Value): null.
     */
    "payment_link_line_item_id"?: ((string) | (null));
    /**
     * Parent catalog context only. The product that the variants in variant_ids belong to. Present
     * only on buyer choice lines; refused on input. anyOf[1] (Value): string. Parent catalog
     * context only. The product that the variants in variant_ids belong to. Present only on buyer
     * choice lines; refused on input. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2]
     * (Value): null.
     */
    "product_id"?: ((string) | (null));
    /**
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null. anyOf[1] (Value): string.
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null. anyOf[2] (Value): null.
     */
    "product_type"?: (("physical" | "service" | "fee" | "digital" | "gift_card" | null | (string & {})) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2]
     * (Value): null.
     */
    "quantity"?: ((number) | (null));
    /**
     * Public event read: whole-number admissions left after sales and payment holds; fractional
     * quantities are not supported. This quantity is bounded by both the tier and event caps.
     * Omitted when neither is capped. anyOf[1] (Value): integer. Public event read: whole-number
     * admissions left after sales and payment holds; fractional quantities are not supported. This
     * quantity is bounded by both the tier and event caps. Omitted when neither is capped. Format:
     * int32. anyOf[2] (Value): null.
     */
    "remaining_quantity"?: ((number) | (null));
    /**
     * Current catalog name of the referenced variant or bundle, or the product name for
     * variant_ids lines. A variant reads as the product name, plus the variant name when the
     * variant is a named option combination. This is the catalog value at read time, not a stored
     * snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line
     * items and when the catalog object no longer exists. anyOf[1] (Value): string. Current
     * catalog name of the referenced variant or bundle, or the product name for variant_ids lines.
     * A variant reads as the product name, plus the variant name when the variant is a named
     * option combination. This is the catalog value at read time, not a stored snapshot: checkout
     * resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the
     * catalog object no longer exists. anyOf[2] (Value): null.
     */
    "resolved_name"?: ((string) | (null));
    /**
     * Current lowest and highest catalog unit prices among listed variants that can be sold in the
     * line currency. Computed at read time, not stored. Omitted when no listed variant can be
     * sold. anyOf[1] (Value): {@link ProductPriceRangePreviousAttributes}. anyOf[2] (Value): null.
     */
    "resolved_price_range"?: ((ProductPriceRangePreviousAttributes) | (null));
    /**
     * Current catalog unit price of the referenced variant or bundle. For a fixed variant this is
     * the base price that applies below the first quantity price break. This is the catalog value
     * at read time, not a stored snapshot: checkout resolves the price again when a buyer opens
     * the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids
     * lines, and when the catalog object no longer exists. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "resolved_unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency
     * for the price, bounds, and suggested prices. anyOf[1] (Value): Array of {@link
     * MoneyValuePreviousAttributes}. Unit prices offered as one-tap choices when the buyer sets
     * the price. Use the same currency for the price, bounds, and suggested prices. anyOf[1][]
     * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "suggested_unit_price_money_options"?: ((Array<MoneyValuePreviousAttributes>) | (null));
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. anyOf[1] (Value):
     * {@link OrderLineItemTaxPreviousAttributes}. anyOf[2] (Value): null.
     */
    "tax"?: ((OrderLineItemTaxPreviousAttributes) | (null));
    /**
     * How the line item is defined. Value enum: "bundle". anyOf[1] (Value): string. How the line
     * item is defined. Value enum: "bundle". anyOf[2] (Value): null.
     */
    "type"?: (("bundle" | (string & {})) | (null));
    /**
     * Price of one unit of a `custom_fixed` line item. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * ID of the catalog variant a `variant` line sells. anyOf[1] (Value): string. ID of the
     * catalog variant a `variant` line sells. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2]
     * (Value): null.
     */
    "variant_id"?: ((string) | (null));
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. anyOf[1]
     * (Value): Array of string. Variant IDs buyers may choose from, in the order offered. Contains
     * 1 to 100 unique, active, sellable variants of one product in one currency. Available only on
     * standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item
     * fields. minItems: 1. maxItems: 100. uniqueItems: true. anyOf[1][] (Value): string. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value):
     * null.
     */
    "variant_ids"?: ((Array<string>) | (null));
})
    & ({
    /**
     * Value enum: "bundle". anyOf[1] (Value): string. Value enum: "bundle". anyOf[2] (Value):
     * null.
     */
    "type"?: (("bundle" | (string & {})) | (null));
});
/** A line item on a payment link. */
export type PaymentLinkLineItemCustomFixed = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. */
    "description"?: string;
    /**
     * True when the referenced variant or bundle cannot be sold, or no listed variant in
     * variant_ids can be sold in the line currency. Always false on ad hoc line items.
     */
    "is_catalog_item_unavailable": boolean;
    /** Public event read: true when the tier or event has no capacity left. */
    "is_sold_out"?: boolean;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /** Name of an ad hoc line item. Catalog lines take the catalog name. */
    "name": string;
    /**
     * Unique identifier for this payment link line item, prefixed `plli_`. Example:
     * "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id": string;
    /**
     * Parent catalog context only. The product that the variants in variant_ids belong to. Present
     * only on buyer choice lines; refused on input. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null.
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | null | (string & {}) | null;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     * Public event read: whole-number admissions left after sales and payment holds; fractional
     * quantities are not supported. This quantity is bounded by both the tier and event caps.
     * Omitted when neither is capped. Format: int32.
     */
    "remaining_quantity"?: number;
    /**
     * Current catalog name of the referenced variant or bundle, or the product name for
     * variant_ids lines. A variant reads as the product name, plus the variant name when the
     * variant is a named option combination. This is the catalog value at read time, not a stored
     * snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line
     * items and when the catalog object no longer exists.
     */
    "resolved_name"?: string;
    /**
     * Current lowest and highest catalog unit prices among listed variants that can be sold in the
     * line currency. Computed at read time, not stored. Omitted when no listed variant can be
     * sold. The lowest and highest unit prices across a product's variants.
     */
    "resolved_price_range"?: ProductPriceRange;
    /**
     * Current catalog unit price of the referenced variant or bundle. For a fixed variant this is
     * the base price that applies below the first quantity price break. This is the catalog value
     * at read time, not a stored snapshot: checkout resolves the price again when a buyer opens
     * the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids
     * lines, and when the catalog object no longer exists. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "resolved_unit_price_money"?: MoneyValue;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency
     * for the price, bounds, and suggested prices. [] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "custom_fixed". */
    "type": "custom_fixed" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * ID of the catalog variant a `variant` line sells. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: false. */
    "allow_unit_price_adjustment"?: boolean;
    /** Value enum: "custom_fixed". */
    "type": "custom_fixed" | (string & {});
    /** Name of an ad hoc line item. Catalog lines take the catalog name. */
    "name": string;
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
}));
export type PaymentLinkLineItemCustomFixedPreviousAttributes = ({
    /**
     * Whether the buyer can change the quantity in checkout. anyOf[1] (Value): boolean. Whether
     * the buyer can change the quantity in checkout. anyOf[2] (Value): null.
     */
    "allow_quantity_adjustment"?: ((boolean) | (null));
    /**
     * Whether the buyer sets the unit price. Only `custom_variable` lines allow it. anyOf[1]
     * (Value): boolean. Whether the buyer sets the unit price. Only `custom_variable` lines allow
     * it. anyOf[2] (Value): null.
     */
    "allow_unit_price_adjustment"?: ((boolean) | (null));
    /**
     * ID of the catalog bundle a `bundle` line sells. anyOf[1] (Value): string. ID of the catalog
     * bundle a `bundle` line sells. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". anyOf[2] (Value):
     * null.
     */
    "bundle_id"?: ((string) | (null));
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. anyOf[1] (Value): string.
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value):
     * null.
     */
    "default_variant_id"?: ((string) | (null));
    /**
     * Description of an ad hoc line item. anyOf[1] (Value): string. Description of an ad hoc line
     * item. anyOf[2] (Value): null.
     */
    "description"?: ((string) | (null));
    /**
     * True when the referenced variant or bundle cannot be sold, or no listed variant in
     * variant_ids can be sold in the line currency. Always false on ad hoc line items. anyOf[1]
     * (Value): boolean. True when the referenced variant or bundle cannot be sold, or no listed
     * variant in variant_ids can be sold in the line currency. Always false on ad hoc line items.
     * anyOf[2] (Value): null.
     */
    "is_catalog_item_unavailable"?: ((boolean) | (null));
    /**
     * Public event read: true when the tier or event has no capacity left. anyOf[1] (Value):
     * boolean. Public event read: true when the tier or event has no capacity left. anyOf[2]
     * (Value): null.
     */
    "is_sold_out"?: ((boolean) | (null));
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. anyOf[1] (Value): string. Keys the resolve override maps. Stable
     * line item key used in checkout overrides. Must not have leading or trailing whitespace.
     * Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used
     * by explicit keys; retained for an existing line item when omitted on update. anyOf[2]
     * (Value): null.
     */
    "key"?: ((string) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2]
     * (Value): null.
     */
    "max_quantity"?: ((number) | (null));
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. anyOf[1] (Value): integer. Optional
     * whole-number admission capacity across all orders for an event tier; fractional quantities
     * are not supported. Must be at least 1 and cannot exceed event_config.max_total_quantity when
     * the event is capped. Omit for no tier cap; omitting it in a line_items replacement removes
     * an existing cap. Format: int32. minimum: 1. anyOf[2] (Value): null.
     */
    "max_total_quantity"?: ((number) | (null));
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "max_unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2]
     * (Value): null.
     */
    "min_quantity"?: ((number) | (null));
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. anyOf[1]
     * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "min_unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. anyOf[1] (Value): string.
     * Name of an ad hoc line item. Catalog lines take the catalog name. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * Unique identifier for this payment link line item, prefixed `plli_`. anyOf[1] (Value):
     * string. Unique identifier for this payment link line item, prefixed `plli_`. Example:
     * "plli_01KEZF7C004V7GVCCNMYYCBAJS". anyOf[2] (Value): null.
     */
    "payment_link_line_item_id"?: ((string) | (null));
    /**
     * Parent catalog context only. The product that the variants in variant_ids belong to. Present
     * only on buyer choice lines; refused on input. anyOf[1] (Value): string. Parent catalog
     * context only. The product that the variants in variant_ids belong to. Present only on buyer
     * choice lines; refused on input. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2]
     * (Value): null.
     */
    "product_id"?: ((string) | (null));
    /**
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null. anyOf[1] (Value): string.
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null. anyOf[2] (Value): null.
     */
    "product_type"?: (("physical" | "service" | "fee" | "digital" | "gift_card" | null | (string & {})) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2]
     * (Value): null.
     */
    "quantity"?: ((number) | (null));
    /**
     * Public event read: whole-number admissions left after sales and payment holds; fractional
     * quantities are not supported. This quantity is bounded by both the tier and event caps.
     * Omitted when neither is capped. anyOf[1] (Value): integer. Public event read: whole-number
     * admissions left after sales and payment holds; fractional quantities are not supported. This
     * quantity is bounded by both the tier and event caps. Omitted when neither is capped. Format:
     * int32. anyOf[2] (Value): null.
     */
    "remaining_quantity"?: ((number) | (null));
    /**
     * Current catalog name of the referenced variant or bundle, or the product name for
     * variant_ids lines. A variant reads as the product name, plus the variant name when the
     * variant is a named option combination. This is the catalog value at read time, not a stored
     * snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line
     * items and when the catalog object no longer exists. anyOf[1] (Value): string. Current
     * catalog name of the referenced variant or bundle, or the product name for variant_ids lines.
     * A variant reads as the product name, plus the variant name when the variant is a named
     * option combination. This is the catalog value at read time, not a stored snapshot: checkout
     * resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the
     * catalog object no longer exists. anyOf[2] (Value): null.
     */
    "resolved_name"?: ((string) | (null));
    /**
     * Current lowest and highest catalog unit prices among listed variants that can be sold in the
     * line currency. Computed at read time, not stored. Omitted when no listed variant can be
     * sold. anyOf[1] (Value): {@link ProductPriceRangePreviousAttributes}. anyOf[2] (Value): null.
     */
    "resolved_price_range"?: ((ProductPriceRangePreviousAttributes) | (null));
    /**
     * Current catalog unit price of the referenced variant or bundle. For a fixed variant this is
     * the base price that applies below the first quantity price break. This is the catalog value
     * at read time, not a stored snapshot: checkout resolves the price again when a buyer opens
     * the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids
     * lines, and when the catalog object no longer exists. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "resolved_unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency
     * for the price, bounds, and suggested prices. anyOf[1] (Value): Array of {@link
     * MoneyValuePreviousAttributes}. Unit prices offered as one-tap choices when the buyer sets
     * the price. Use the same currency for the price, bounds, and suggested prices. anyOf[1][]
     * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "suggested_unit_price_money_options"?: ((Array<MoneyValuePreviousAttributes>) | (null));
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. anyOf[1] (Value):
     * {@link OrderLineItemTaxPreviousAttributes}. anyOf[2] (Value): null.
     */
    "tax"?: ((OrderLineItemTaxPreviousAttributes) | (null));
    /**
     * How the line item is defined. Value enum: "custom_fixed". anyOf[1] (Value): string. How the
     * line item is defined. Value enum: "custom_fixed". anyOf[2] (Value): null.
     */
    "type"?: (("custom_fixed" | (string & {})) | (null));
    /**
     * Price of one unit of a `custom_fixed` line item. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * ID of the catalog variant a `variant` line sells. anyOf[1] (Value): string. ID of the
     * catalog variant a `variant` line sells. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2]
     * (Value): null.
     */
    "variant_id"?: ((string) | (null));
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. anyOf[1]
     * (Value): Array of string. Variant IDs buyers may choose from, in the order offered. Contains
     * 1 to 100 unique, active, sellable variants of one product in one currency. Available only on
     * standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item
     * fields. minItems: 1. maxItems: 100. uniqueItems: true. anyOf[1][] (Value): string. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value):
     * null.
     */
    "variant_ids"?: ((Array<string>) | (null));
})
    & ({
    /** Value enum: false. anyOf[1] (Value): boolean.  Value enum: false. anyOf[2] (Value): null. */
    "allow_unit_price_adjustment"?: ((boolean) | (null));
    /**
     * Value enum: "custom_fixed". anyOf[1] (Value): string. Value enum: "custom_fixed". anyOf[2]
     * (Value): null.
     */
    "type"?: (("custom_fixed" | (string & {})) | (null));
});
/** A line item on a payment link. */
export type PaymentLinkLineItemCustomVariable = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment": boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. */
    "description"?: string;
    /**
     * True when the referenced variant or bundle cannot be sold, or no listed variant in
     * variant_ids can be sold in the line currency. Always false on ad hoc line items.
     */
    "is_catalog_item_unavailable": boolean;
    /** Public event read: true when the tier or event has no capacity left. */
    "is_sold_out"?: boolean;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /** Name of an ad hoc line item. Catalog lines take the catalog name. */
    "name": string;
    /**
     * Unique identifier for this payment link line item, prefixed `plli_`. Example:
     * "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id": string;
    /**
     * Parent catalog context only. The product that the variants in variant_ids belong to. Present
     * only on buyer choice lines; refused on input. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null.
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | null | (string & {}) | null;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     * Public event read: whole-number admissions left after sales and payment holds; fractional
     * quantities are not supported. This quantity is bounded by both the tier and event caps.
     * Omitted when neither is capped. Format: int32.
     */
    "remaining_quantity"?: number;
    /**
     * Current catalog name of the referenced variant or bundle, or the product name for
     * variant_ids lines. A variant reads as the product name, plus the variant name when the
     * variant is a named option combination. This is the catalog value at read time, not a stored
     * snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line
     * items and when the catalog object no longer exists.
     */
    "resolved_name"?: string;
    /**
     * Current lowest and highest catalog unit prices among listed variants that can be sold in the
     * line currency. Computed at read time, not stored. Omitted when no listed variant can be
     * sold. The lowest and highest unit prices across a product's variants.
     */
    "resolved_price_range"?: ProductPriceRange;
    /**
     * Current catalog unit price of the referenced variant or bundle. For a fixed variant this is
     * the base price that applies below the first quantity price break. This is the catalog value
     * at read time, not a stored snapshot: checkout resolves the price again when a buyer opens
     * the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids
     * lines, and when the catalog object no longer exists. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "resolved_unit_price_money"?: MoneyValue;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency
     * for the price, bounds, and suggested prices. [] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "custom_variable". */
    "type": "custom_variable" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the catalog variant a `variant` line sells. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: true. */
    "allow_unit_price_adjustment": boolean;
    /** Value enum: "custom_variable". */
    "type": "custom_variable" | (string & {});
    /** Name of an ad hoc line item. Catalog lines take the catalog name. */
    "name": string;
}));
export type PaymentLinkLineItemCustomVariablePreviousAttributes = ({
    /**
     * Whether the buyer can change the quantity in checkout. anyOf[1] (Value): boolean. Whether
     * the buyer can change the quantity in checkout. anyOf[2] (Value): null.
     */
    "allow_quantity_adjustment"?: ((boolean) | (null));
    /**
     * Whether the buyer sets the unit price. Only `custom_variable` lines allow it. anyOf[1]
     * (Value): boolean. Whether the buyer sets the unit price. Only `custom_variable` lines allow
     * it. anyOf[2] (Value): null.
     */
    "allow_unit_price_adjustment"?: ((boolean) | (null));
    /**
     * ID of the catalog bundle a `bundle` line sells. anyOf[1] (Value): string. ID of the catalog
     * bundle a `bundle` line sells. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". anyOf[2] (Value):
     * null.
     */
    "bundle_id"?: ((string) | (null));
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. anyOf[1] (Value): string.
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value):
     * null.
     */
    "default_variant_id"?: ((string) | (null));
    /**
     * Description of an ad hoc line item. anyOf[1] (Value): string. Description of an ad hoc line
     * item. anyOf[2] (Value): null.
     */
    "description"?: ((string) | (null));
    /**
     * True when the referenced variant or bundle cannot be sold, or no listed variant in
     * variant_ids can be sold in the line currency. Always false on ad hoc line items. anyOf[1]
     * (Value): boolean. True when the referenced variant or bundle cannot be sold, or no listed
     * variant in variant_ids can be sold in the line currency. Always false on ad hoc line items.
     * anyOf[2] (Value): null.
     */
    "is_catalog_item_unavailable"?: ((boolean) | (null));
    /**
     * Public event read: true when the tier or event has no capacity left. anyOf[1] (Value):
     * boolean. Public event read: true when the tier or event has no capacity left. anyOf[2]
     * (Value): null.
     */
    "is_sold_out"?: ((boolean) | (null));
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. anyOf[1] (Value): string. Keys the resolve override maps. Stable
     * line item key used in checkout overrides. Must not have leading or trailing whitespace.
     * Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used
     * by explicit keys; retained for an existing line item when omitted on update. anyOf[2]
     * (Value): null.
     */
    "key"?: ((string) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2]
     * (Value): null.
     */
    "max_quantity"?: ((number) | (null));
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. anyOf[1] (Value): integer. Optional
     * whole-number admission capacity across all orders for an event tier; fractional quantities
     * are not supported. Must be at least 1 and cannot exceed event_config.max_total_quantity when
     * the event is capped. Omit for no tier cap; omitting it in a line_items replacement removes
     * an existing cap. Format: int32. minimum: 1. anyOf[2] (Value): null.
     */
    "max_total_quantity"?: ((number) | (null));
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "max_unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2]
     * (Value): null.
     */
    "min_quantity"?: ((number) | (null));
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. anyOf[1]
     * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "min_unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. anyOf[1] (Value): string.
     * Name of an ad hoc line item. Catalog lines take the catalog name. anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * Unique identifier for this payment link line item, prefixed `plli_`. anyOf[1] (Value):
     * string. Unique identifier for this payment link line item, prefixed `plli_`. Example:
     * "plli_01KEZF7C004V7GVCCNMYYCBAJS". anyOf[2] (Value): null.
     */
    "payment_link_line_item_id"?: ((string) | (null));
    /**
     * Parent catalog context only. The product that the variants in variant_ids belong to. Present
     * only on buyer choice lines; refused on input. anyOf[1] (Value): string. Parent catalog
     * context only. The product that the variants in variant_ids belong to. Present only on buyer
     * choice lines; refused on input. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2]
     * (Value): null.
     */
    "product_id"?: ((string) | (null));
    /**
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null. anyOf[1] (Value): string.
     * Classification configured on a custom line for ACH debit. Null when unclassified or
     * catalog-backed; catalog lines get their product classification when checkout starts. Value
     * enum: "physical", "service", "fee", "digital", "gift_card", null. anyOf[2] (Value): null.
     */
    "product_type"?: (("physical" | "service" | "fee" | "digital" | "gift_card" | null | (string & {})) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. anyOf[2]
     * (Value): null.
     */
    "quantity"?: ((number) | (null));
    /**
     * Public event read: whole-number admissions left after sales and payment holds; fractional
     * quantities are not supported. This quantity is bounded by both the tier and event caps.
     * Omitted when neither is capped. anyOf[1] (Value): integer. Public event read: whole-number
     * admissions left after sales and payment holds; fractional quantities are not supported. This
     * quantity is bounded by both the tier and event caps. Omitted when neither is capped. Format:
     * int32. anyOf[2] (Value): null.
     */
    "remaining_quantity"?: ((number) | (null));
    /**
     * Current catalog name of the referenced variant or bundle, or the product name for
     * variant_ids lines. A variant reads as the product name, plus the variant name when the
     * variant is a named option combination. This is the catalog value at read time, not a stored
     * snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line
     * items and when the catalog object no longer exists. anyOf[1] (Value): string. Current
     * catalog name of the referenced variant or bundle, or the product name for variant_ids lines.
     * A variant reads as the product name, plus the variant name when the variant is a named
     * option combination. This is the catalog value at read time, not a stored snapshot: checkout
     * resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the
     * catalog object no longer exists. anyOf[2] (Value): null.
     */
    "resolved_name"?: ((string) | (null));
    /**
     * Current lowest and highest catalog unit prices among listed variants that can be sold in the
     * line currency. Computed at read time, not stored. Omitted when no listed variant can be
     * sold. anyOf[1] (Value): {@link ProductPriceRangePreviousAttributes}. anyOf[2] (Value): null.
     */
    "resolved_price_range"?: ((ProductPriceRangePreviousAttributes) | (null));
    /**
     * Current catalog unit price of the referenced variant or bundle. For a fixed variant this is
     * the base price that applies below the first quantity price break. This is the catalog value
     * at read time, not a stored snapshot: checkout resolves the price again when a buyer opens
     * the link, so the amount a buyer pays can differ. Absent on ad-hoc line items, variant_ids
     * lines, and when the catalog object no longer exists. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "resolved_unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency
     * for the price, bounds, and suggested prices. anyOf[1] (Value): Array of {@link
     * MoneyValuePreviousAttributes}. Unit prices offered as one-tap choices when the buyer sets
     * the price. Use the same currency for the price, bounds, and suggested prices. anyOf[1][]
     * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "suggested_unit_price_money_options"?: ((Array<MoneyValuePreviousAttributes>) | (null));
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. anyOf[1] (Value):
     * {@link OrderLineItemTaxPreviousAttributes}. anyOf[2] (Value): null.
     */
    "tax"?: ((OrderLineItemTaxPreviousAttributes) | (null));
    /**
     * How the line item is defined. Value enum: "custom_variable". anyOf[1] (Value): string. How
     * the line item is defined. Value enum: "custom_variable". anyOf[2] (Value): null.
     */
    "type"?: (("custom_variable" | (string & {})) | (null));
    /**
     * Price of one unit of a `custom_fixed` line item. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * ID of the catalog variant a `variant` line sells. anyOf[1] (Value): string. ID of the
     * catalog variant a `variant` line sells. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2]
     * (Value): null.
     */
    "variant_id"?: ((string) | (null));
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. anyOf[1]
     * (Value): Array of string. Variant IDs buyers may choose from, in the order offered. Contains
     * 1 to 100 unique, active, sellable variants of one product in one currency. Available only on
     * standard payment links. Mutually exclusive with variant_id, bundle_id, and ad hoc line item
     * fields. minItems: 1. maxItems: 100. uniqueItems: true. anyOf[1][] (Value): string. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value):
     * null.
     */
    "variant_ids"?: ((Array<string>) | (null));
})
    & ({
    /** Value enum: true. anyOf[1] (Value): boolean.  Value enum: true. anyOf[2] (Value): null. */
    "allow_unit_price_adjustment"?: ((boolean) | (null));
    /**
     * Value enum: "custom_variable". anyOf[1] (Value): string. Value enum: "custom_variable".
     * anyOf[2] (Value): null.
     */
    "type"?: (("custom_variable" | (string & {})) | (null));
});
/** The `bundle` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputBundle = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency
     * for the price, bounds, and suggested prices. [] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
}));
/** The `bundle` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputBundleInput = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValueInput;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency
     * for the price, bounds, and suggested prices. [] (Value): {@link MoneyValueInput}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /** How the line item is defined. Value enum: "bundle". */
    "type": "bundle";
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "bundle". */
    "type": ("bundle") & ("bundle");
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
})
    & (({
    "variant_id"?: never;
})
    & ({
    "variant_ids"?: never;
})
    & ({
    "default_variant_id"?: never;
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
})
    & ({
    "allow_unit_price_adjustment"?: never;
})
    & ({
    "min_unit_price_money"?: never;
})
    & ({
    "max_unit_price_money"?: never;
})
    & ({
    "suggested_unit_price_money_options"?: never;
})
    & ({
    "product_type"?: never;
})));
/** The `custom_fixed` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputCustomFixed = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency
     * for the price, bounds, and suggested prices. [] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "custom_fixed". */
    "type": "custom_fixed" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money": {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: false. */
    "allow_unit_price_adjustment"?: boolean;
    /** Value enum: "custom_fixed". */
    "type": "custom_fixed" | (string & {});
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money": {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    };
}));
/** The `custom_fixed` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputCustomFixedInput = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValueInput;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency
     * for the price, bounds, and suggested prices. [] (Value): {@link MoneyValueInput}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /** How the line item is defined. Value enum: "custom_fixed". */
    "type": "custom_fixed";
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money": {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: false. */
    "allow_unit_price_adjustment"?: false;
    /** Value enum: "custom_fixed". */
    "type": ("custom_fixed") & ("custom_fixed");
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money": {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    };
})
    & (({
    "variant_id"?: never;
})
    & ({
    "variant_ids"?: never;
})
    & ({
    "default_variant_id"?: never;
})
    & ({
    "bundle_id"?: never;
})));
/** The `custom_variable` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputCustomVariable = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment": boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency
     * for the price, bounds, and suggested prices. [] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "custom_variable". */
    "type": "custom_variable" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: true. */
    "allow_unit_price_adjustment": boolean;
    /**
     *  amount (Required): integer string. Positive amount in the currency's minor unit, such as
     * cents for USD. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1. currency (Required): string. Three-letter uppercase ISO 4217 currency
     * code for this amount, such as USD. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "max_unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         */
        "currency": string;
    };
    /** Value enum: "custom_variable". */
    "type": "custom_variable" | (string & {});
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
}));
/** The `custom_variable` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputCustomVariableInput = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment": boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValueInput;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency
     * for the price, bounds, and suggested prices. [] (Value): {@link MoneyValueInput}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /** How the line item is defined. Value enum: "custom_variable". */
    "type": "custom_variable";
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: true. */
    "allow_unit_price_adjustment": true;
    /**
     *  amount (Required): integer string. Positive amount in the currency's minor unit, such as
     * cents for USD. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1. currency (Required): string. Three-letter uppercase ISO 4217 currency
     * code for this amount, such as USD. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "max_unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         */
        "currency": string;
    };
    /** Value enum: "custom_variable". */
    "type": ("custom_variable") & ("custom_variable");
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
})
    & (({
    "variant_id"?: never;
})
    & ({
    "variant_ids"?: never;
})
    & ({
    "default_variant_id"?: never;
})
    & ({
    "bundle_id"?: never;
})));
/** The `variant` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputVariant = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency
     * for the price, bounds, and suggested prices. [] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "variant". */
    "type": "variant" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
})
    & (({
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    | ({
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids": Array<string>;
})
    | (Record<string, unknown>)));
/** The `variant` variant of `PaymentLinkLineItemInput`. */
export type PaymentLinkLineItemInputVariantInput = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValueInput;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency
     * for the price, bounds, and suggested prices. [] (Value): {@link MoneyValueInput}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /** How the line item is defined. Value enum: "variant". */
    "type": "variant";
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "variant". */
    "type": ("variant") & ("variant");
})
    & (({
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    | ({
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids": Array<string>;
}))
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
})
    & ({
    "allow_unit_price_adjustment"?: never;
})
    & ({
    "min_unit_price_money"?: never;
})
    & ({
    "max_unit_price_money"?: never;
})
    & ({
    "suggested_unit_price_money_options"?: never;
})
    & ({
    "product_type"?: never;
})
    & ({
    "variant_id"?: never;
} | {
    "variant_ids"?: never;
})));
/** The `bundle` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputBundle = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string | null;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Stable ID of an existing line item. Omit it to create a new line item. minLength: 1.
     * Example: "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency
     * for the price, bounds, and suggested prices. [] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
}));
/** The `bundle` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputBundleInput = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string | null;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValueInput;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Stable ID of an existing line item. Omit it to create a new line item. minLength: 1.
     * Example: "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency
     * for the price, bounds, and suggested prices. [] (Value): {@link MoneyValueInput}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /** How the line item is defined. Value enum: "bundle". */
    "type": "bundle";
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "bundle". */
    "type": ("bundle") & ("bundle");
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
})
    & (({
    "variant_id"?: never;
})
    & ({
    "variant_ids"?: never;
})
    & ({
    "default_variant_id"?: never;
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
})
    & ({
    "allow_unit_price_adjustment"?: never;
})
    & ({
    "min_unit_price_money"?: never;
})
    & ({
    "max_unit_price_money"?: never;
})
    & ({
    "suggested_unit_price_money_options"?: never;
})
    & ({
    "product_type"?: never;
})));
/** The `custom_fixed` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputCustomFixed = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string | null;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Stable ID of an existing line item. Omit it to create a new line item. minLength: 1.
     * Example: "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency
     * for the price, bounds, and suggested prices. [] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "custom_fixed". */
    "type": "custom_fixed" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money": {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: false. */
    "allow_unit_price_adjustment"?: boolean;
    /** Value enum: "custom_fixed". */
    "type": "custom_fixed" | (string & {});
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money": {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    };
}));
/** The `custom_fixed` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputCustomFixedInput = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string | null;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValueInput;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Stable ID of an existing line item. Omit it to create a new line item. minLength: 1.
     * Example: "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency
     * for the price, bounds, and suggested prices. [] (Value): {@link MoneyValueInput}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /** How the line item is defined. Value enum: "custom_fixed". */
    "type": "custom_fixed";
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money": {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: false. */
    "allow_unit_price_adjustment"?: false;
    /** Value enum: "custom_fixed". */
    "type": ("custom_fixed") & ("custom_fixed");
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money": {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    };
})
    & (({
    "variant_id"?: never;
})
    & ({
    "variant_ids"?: never;
})
    & ({
    "default_variant_id"?: never;
})
    & ({
    "bundle_id"?: never;
})));
/** The `custom_variable` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputCustomVariable = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment": boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string | null;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Stable ID of an existing line item. Omit it to create a new line item. minLength: 1.
     * Example: "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency
     * for the price, bounds, and suggested prices. [] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "custom_variable". */
    "type": "custom_variable" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: true. */
    "allow_unit_price_adjustment": boolean;
    /**
     *  amount (Required): integer string. Positive amount in the currency's minor unit, such as
     * cents for USD. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1. currency (Required): string. Three-letter uppercase ISO 4217 currency
     * code for this amount, such as USD. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "max_unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         */
        "currency": string;
    };
    /** Value enum: "custom_variable". */
    "type": "custom_variable" | (string & {});
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
}));
/** The `custom_variable` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputCustomVariableInput = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment": boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string | null;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValueInput;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
    /**
     * Stable ID of an existing line item. Omit it to create a new line item. minLength: 1.
     * Example: "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency
     * for the price, bounds, and suggested prices. [] (Value): {@link MoneyValueInput}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /** How the line item is defined. Value enum: "custom_variable". */
    "type": "custom_variable";
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: true. */
    "allow_unit_price_adjustment": true;
    /**
     *  amount (Required): integer string. Positive amount in the currency's minor unit, such as
     * cents for USD. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1. currency (Required): string. Three-letter uppercase ISO 4217 currency
     * code for this amount, such as USD. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "max_unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
         */
        "currency": string;
    };
    /** Value enum: "custom_variable". */
    "type": ("custom_variable") & ("custom_variable");
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name": string;
})
    & (({
    "variant_id"?: never;
})
    & ({
    "variant_ids"?: never;
})
    & ({
    "default_variant_id"?: never;
})
    & ({
    "bundle_id"?: never;
})));
/** The `variant` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputVariant = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string | null;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Stable ID of an existing line item. Omit it to create a new line item. minLength: 1.
     * Example: "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency
     * for the price, bounds, and suggested prices. [] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /** How the line item is defined. Value enum: "variant". */
    "type": "variant" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
})
    & (({
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    | ({
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids": Array<string>;
})
    | (Record<string, unknown>)));
/** The `variant` variant of `PaymentLinkLineItemPatchInput`. */
export type PaymentLinkLineItemPatchInputVariantInput = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string | null;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValueInput;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValueInput;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Stable ID of an existing line item. Omit it to create a new line item. minLength: 1.
     * Example: "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital";
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency
     * for the price, bounds, and suggested prices. [] (Value): {@link MoneyValueInput}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValueInput>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTaxRequestInput;
    /** How the line item is defined. Value enum: "variant". */
    "type": "variant";
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "variant". */
    "type": ("variant") & ("variant");
})
    & (({
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    | ({
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids": Array<string>;
}))
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
})
    & ({
    "allow_unit_price_adjustment"?: never;
})
    & ({
    "min_unit_price_money"?: never;
})
    & ({
    "max_unit_price_money"?: never;
})
    & ({
    "suggested_unit_price_money_options"?: never;
})
    & ({
    "product_type"?: never;
})
    & ({
    "variant_id"?: never;
} | {
    "variant_ids"?: never;
})));
/**
 * A line item in a payment link update. Include its ID to change an existing line item, or omit
 * the ID to add a new one.
 */
export type PaymentLinkLineItemPatchRequest = ({
    /** Whether the buyer can change the quantity in checkout. */
    "allow_quantity_adjustment"?: boolean;
    /** Whether the buyer sets the unit price. Only `custom_variable` lines allow it. */
    "allow_unit_price_adjustment"?: boolean;
    /**
     * ID of the catalog bundle a `bundle` line sells. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Variant selected when the page opens and used at resolve when the buyer omits a selection.
     * Must be in variant_ids. Omit it to require a buyer selection. Send null to clear it.
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string | null;
    /** Description of an ad hoc line item. minLength: 1. maxLength: 2048. */
    "description"?: string;
    /**
     * Keys the resolve override maps. Stable line item key used in checkout overrides. Must not
     * have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when
     * omitted, skipping numbers already used by explicit keys; retained for an existing line item
     * when omitted on update. minLength: 1. maxLength: 100.
     */
    "key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "max_quantity"?: number;
    /**
     * Optional whole-number admission capacity across all orders for an event tier; fractional
     * quantities are not supported. Must be at least 1 and cannot exceed
     * event_config.max_total_quantity when the event is capped. Omit for no tier cap; omitting it
     * in a line_items replacement removes an existing cap. Format: int32. minimum: 1.
     */
    "max_total_quantity"?: number;
    /**
     * Highest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Must be
     * greater than zero and greater than or equal to min_unit_price_money. Omit for no maximum.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money"?: MoneyValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "min_quantity"?: number;
    /**
     * Lowest unit price the buyer can enter when `allow_unit_price_adjustment` is true. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money"?: MoneyValue;
    /**
     * Name of an ad hoc line item. Catalog lines take the catalog name. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1. maxLength: 255.
     */
    "name"?: string;
    /**
     * Stable ID of an existing line item. Omit it to create a new line item. minLength: 1.
     * Example: "plli_01KEZF7C004V7GVCCNMYYCBAJS".
     */
    "payment_link_line_item_id"?: string;
    /**
     * Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to
     * leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does
     * not change tax, delivery, or inventory. On an order line PATCH, omission preserves the
     * classification. Catalog lines use their product's type and reject this input. Value enum:
     * "physical", "service", "fee", "digital".
     */
    "product_type"?: "physical" | "service" | "fee" | "digital" | (string & {});
    /**
     * Whole-number default quantity; fractional quantities are not supported. Omission uses 1.
     * Must be at least 1 for standard links; event tiers also accept 0. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Unit prices offered as one-tap choices when the buyer sets the price. Use the same currency
     * for the price, bounds, and suggested prices. [] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "suggested_unit_price_money_options"?: Array<MoneyValue>;
    /**
     * Tax settings for an ad hoc line item. Catalog lines use the catalog's. A line item's tax
     * category and whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /**
     * How the line item is defined. Value enum: "variant", "bundle", "custom_fixed",
     * "custom_variable".
     */
    "type": "variant" | "bundle" | "custom_fixed" | "custom_variable" | (string & {});
    /**
     * Price of one unit of a `custom_fixed` line item. amount (Required): integer string. Positive
     * amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 1. currency (Required):
     * string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "unit_price_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    };
    /**
     * ID of the catalog variant a `variant` line sells. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
    /**
     * Variant IDs buyers may choose from, in the order offered. Contains 1 to 100 unique, active,
     * sellable variants of one product in one currency. Available only on standard payment links.
     * Mutually exclusive with variant_id, bundle_id, and ad hoc line item fields. minItems: 1.
     * maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & ((Exclude<PaymentLinkLineItemPatchInputVariant & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemPatchInputBundle & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemPatchInputCustomFixed & object, readonly unknown[]>)
    | (Exclude<PaymentLinkLineItemPatchInputCustomVariable & object, readonly unknown[]>)
    | (Record<string, unknown>));
