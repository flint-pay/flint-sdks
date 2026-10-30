import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { ConfirmPaymentIntentResponse } from '../declarations/types-6.js';
import type {
    PaymentIntent,
    PaymentIntentActivity,
    PaymentIntentActivityListResponse,
    PaymentIntentListResponse
} from '../declarations/types-40.js';
import type {
    PaymentIntentResponse,
    PaymentIntentWithAction,
    PaymentIntentWithCollection,
    PaymentIntentWithCollectionResponse,
    PaymentIntentsCancelParams,
    PaymentIntentsCaptureParams,
    PaymentIntentsConfirmParams,
    PaymentIntentsCreateParams,
    PaymentIntentsCreateResponse,
    PaymentIntentsGetParams,
    PaymentIntentsListActivitiesParams,
    PaymentIntentsListParams,
    PaymentIntentsSendReceiptParams,
    PaymentIntentsUpdateParams
} from '../declarations/types-41.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-61.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    ResponseInfo,
    WithResponseInfo,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type {
    PaymentIntentsCancelParams,
    PaymentIntentResponse,
    PaymentIntentsCaptureParams,
    PaymentIntentsConfirmParams,
    PaymentIntentWithAction,
    PaymentIntentsCreateParams,
    PaymentIntentWithCollection,
    PaymentIntentsCreateResponse,
    PaymentIntentsGetParams,
    PaymentIntentWithCollectionResponse,
    PaymentIntentsListActivitiesParams,
    PaymentIntentsListParams,
    PaymentIntentsSendReceiptParams,
    PaymentIntentsUpdateParams
} from '../declarations/types-41.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type {
    PaymentIntent,
    PaymentIntentActivityListResponse,
    PaymentIntentActivity,
    PaymentIntentListResponse,
    PaymentAddOnFee,
    PaymentFulfillmentHold,
    PaymentErrorSummary,
    PaymentClientAction,
    PaymentCollection,
    PaymentCollectionStripe,
    PaymentCollectionStripeElements
} from '../declarations/types-40.js';
export type {
    ConfirmPaymentIntentResponse,
    ConfirmPaymentIntentRequestInput,
    ConfirmPaymentIntentRequestTokenInput,
    ConfirmPaymentIntentRequestPaymentMethodInput,
    ConfirmPaymentIntentRequestStripeConfirmationTokenInput,
    ConfirmPaymentIntentRequestAttachedInput
} from '../declarations/types-6.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CancelPaymentIntentRequestInput } from '../declarations/types-3.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { MoneyValue, NextAction, MoneyValueInput } from '../declarations/types-35.js';
export type { ExpandedCustomerSummary, ExpandedInvoiceSummary, ErrorRemediation, ExpandedOrderSummary } from '../declarations/types-21.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { MetadataMap, MetadataRequestInput, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-34.js';
export type { CheckoutBuyerContact, CapturePaymentIntentRequestInput } from '../declarations/types-4.js';
export type {
    PricingAmounts,
    PaymentSourceSummary,
    PaymentSourceAchDebitSummary,
    PaymentSourceCardSummary,
    PaymentRisk,
    PendingPaymentAction,
    PendingPaymentActionSubject,
    PendingPaymentActionPaymentIntentSubject,
    PendingPaymentActionSetupPaymentSourceSubject
} from '../declarations/types-43.js';
export type {
    SettlementAmounts,
    StripePaymentClientAction,
    StripeSetupIntentClientAction,
    SelectableOrderPaymentIntent,
    SendPaymentIntentReceiptRequestInput
} from '../declarations/types-53.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { CreatePaymentIntentRequestInput } from '../declarations/types-9.js';
export type { UpdatePaymentIntentRequestInput } from '../declarations/types-59.js';
export type { OrdersCreatePaymentIntentResponse } from '../declarations/types-38.js';
export {
    makeCancelPaymentIntentRequest,
    makeCapturePaymentIntentRequest,
    makeConfirmPaymentIntentRequest,
    makeConfirmPaymentIntentRequestAttached,
    makeConfirmPaymentIntentRequestPaymentMethod,
    makeConfirmPaymentIntentRequestStripeConfirmationToken,
    makeConfirmPaymentIntentRequestToken
} from '../declarations/types-62.js';
export { makeCreatePaymentIntentRequest } from '../declarations/types-64.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-69.js';
export { makeSendPaymentIntentReceiptRequest } from '../declarations/types-72.js';
export { makeUpdatePaymentIntentRequest } from '../declarations/types-74.js';
export interface PaymentIntentsResource {
    /**
 * Cancels a standalone or order-owned payment intent. Read supported_actions for the actions its
 * stored state accepts. Canceling a hold moves all of capturable_money to released_money, and
 * nothing is charged. A processing payment intent returns 409 ACTION_NOT_ALLOWED with reason
 * in_progress; refund a succeeded one instead. Flint derives the owning order payment attempt. A
 * leg held by an active order payment attempt may be refused. Omitted cancellation_reason stays
 * absent. A fresh request for a canceled or expired payment returns ACTION_NOT_ALLOWED with reason
 * already_applied; a same-key retry replays or recovers its original result. A checkout credential
 * can cancel only its own order leg, with requested_by_customer or abandoned when a reason is
 * supplied.
 *
 * `POST /v1/payment-intents/{payment_intent_id}/cancel`
 * @param payment_intent_id Flint payment intent ID.
 * @see https://developers.withflintpay.com/docs/api/payments#cancelPaymentIntent
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentIntents.cancel("pi_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    cancel(payment_intent_id: InputValue<string>, params?: PaymentIntentsCancelParams, options?: RequestOptions<"checkout" | "merchant">): Promise<WithResponseInfo<PaymentIntent, PaymentIntentResponse>>;
    /**
 * Captures a standalone or order-owned payment intent in requires_capture. Omit amount_money to
 * capture all of capturable_money, or send a smaller amount for a partial capture. Flint releases
 * the uncaptured remainder in the same request, and a payment intent can be captured only once.
 * amount_money on the payment intent keeps the requested amount; captured_money and released_money
 * record the result. Affirm payments can only be captured in full. Flint derives the owning order
 * payment attempt; order_payment_attempt_id is not accepted. An expired authorization is refreshed
 * before capture and refused with ACTION_NOT_ALLOWED and reason terminal_status or
 * authorization_expired. A fresh request for an already captured payment returns
 * ACTION_NOT_ALLOWED with reason already_applied; a same-key retry replays or recovers its
 * original result.
 *
 * `POST /v1/payment-intents/{payment_intent_id}/capture`
 * @param payment_intent_id Flint payment intent ID.
 * @see https://developers.withflintpay.com/docs/api/payments#capturePaymentIntent
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentIntents.capture("pi_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    capture(payment_intent_id: InputValue<string>, params?: PaymentIntentsCaptureParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PaymentIntent, PaymentIntentResponse>>;
    /**
 * Confirms a standalone payment intent. For the first confirmation, send credential_type
 * stripe_confirmation_token, token, or payment_method with its matching credential; a missing
 * credential returns INVALID_REQUEST. After the buyer completes current_payment_action, call this
 * route again with credential_type attached to continue the same payment attempt. Flint confirms
 * again only if the processor still requires it, and otherwise returns the current payment intent.
 * Unverified fee fields are omitted. current_payment_action is null when no buyer action is
 * needed. It can also be null while status is requires_action if Flint cannot produce the action
 * yet; call confirm again with credential_type attached. Order-owned payment intents return 409
 * ACTION_NOT_ALLOWED with reason order_owned and supported_actions; pay them through
 * `client.orders.pay` using remediation.next_actions.
 *
 * `POST /v1/payment-intents/{payment_intent_id}/confirm`
 * @param payment_intent_id Flint payment intent ID.
 * @see https://developers.withflintpay.com/docs/api/payments#confirmPaymentIntent
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentIntents.confirm("pi_01ARZ3NDEKTSV4RRFFQ69G5FAV", {credential_type:
 * "stripe_confirmation_token", save_payment_method: true, stripe: {confirmation_token:
 * "ctoken_123"}}, { idempotencyKey: idempotencyKey })
 */
    confirm(payment_intent_id: InputValue<string>, params: PaymentIntentsConfirmParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PaymentIntentWithAction, ConfirmPaymentIntentResponse>>;
    /**
 * Creates a standalone payment intent for the authenticated merchant and returns it flat in data
 * with required payment_collection guidance. Create order-owned payment intents with
 * `client.orders.createPaymentIntent`.
 *
 * `POST /v1/payment-intents`
 * @see https://developers.withflintpay.com/docs/api/payments#createPaymentIntent
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentIntents.create({amount_money: {amount: "5000", currency: "USD"}, payment_options:
 * ["card"]}, { idempotencyKey: idempotencyKey })
 */
    create(params: PaymentIntentsCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<({
        "payment_collection": unknown;
    })
        & (Exclude<PaymentIntentWithCollection & object, readonly unknown[]>), PaymentIntentsCreateResponse>>;
    /**
 * Returns a single payment intent by ID. Unverified fee fields are omitted; read the intent again
 * later for verified fees. For a standalone payment intent in requires_action, call confirm with
 * credential_type attached to retrieve current_payment_action.
 *
 * `GET /v1/payment-intents/{payment_intent_id}`
 * @param payment_intent_id Flint payment intent ID.
 * @see https://developers.withflintpay.com/docs/api/payments#getPaymentIntent
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.paymentIntents.get("pi_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(payment_intent_id: InputValue<string>, params?: PaymentIntentsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<WithResponseInfo<PaymentIntentWithCollection, PaymentIntentWithCollectionResponse>>;
    /**
 * Returns a read-only, human-readable history for a payment intent. Read the payment intent or
 * referenced resource for authoritative state; this log does not replace webhooks or a ledger. Use
 * sort_direction=asc for a chronological timeline. Page tokens are bound to the payment intent,
 * merchant, environment, activity_type filter, and sort direction. Default order: created_at
 * descending, then payment_intent_activity_id descending.
 *
 * `GET /v1/payment-intents/{payment_intent_id}/activities`
 * @param payment_intent_id Flint payment intent ID.
 * @see https://developers.withflintpay.com/docs/api/payments#listPaymentIntentActivities
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.paymentIntents.listActivities("pi_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    listActivities(payment_intent_id: InputValue<string>, params?: PaymentIntentsListActivitiesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PaymentIntentActivityListResponse, PaymentIntentActivityListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/payments#listPaymentIntentActivities
     */
    listActivitiesPages(payment_intent_id: InputValue<string>, params?: PaymentIntentsListActivitiesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<PaymentIntentActivityListResponse, PaymentIntentActivityListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/payments#listPaymentIntentActivities
     */
    listActivitiesItems(payment_intent_id: InputValue<string>, params?: PaymentIntentsListActivitiesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PaymentIntentActivity>;
    /**
 * Returns a paginated list of payment intents for the authenticated merchant. Default order:
 * created_at descending, then payment_intent_id descending.
 *
 * `GET /v1/payment-intents`
 * @see https://developers.withflintpay.com/docs/api/payments#listPaymentIntents
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.paymentIntents.list()
 */
    list(params?: PaymentIntentsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PaymentIntentListResponse, PaymentIntentListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/payments#listPaymentIntents
     */
    listPages(params?: PaymentIntentsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<PaymentIntentListResponse, PaymentIntentListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/payments#listPaymentIntents
     */
    listItems(params?: PaymentIntentsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PaymentIntent>;
    /**
 * Queues a receipt for a succeeded payment intent and returns the payment intent unchanged. For an
 * order-owned payment intent, sends the order receipt. Once sent, the receipt appears as a
 * receipt_sent payment intent activity. Send email to choose a recipient. Omit email to use the
 * order's receipt address for an order-owned intent, or receipt_email then the customer's email
 * for a standalone intent. The saved receipt email stays unchanged. Requires Flint-managed receipt
 * delivery. Standalone sending is limited to once every five minutes per payment intent; order
 * receipt sending is limited to once every five minutes per order and normalized recipient. Retry
 * with the same Idempotency-Key to replay the result without sending again.
 *
 * `POST /v1/payment-intents/{payment_intent_id}/send-receipt`
 * @param payment_intent_id Flint payment intent ID.
 * @see https://developers.withflintpay.com/docs/api/payments#sendPaymentIntentReceipt
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentIntents.sendReceipt("pi_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    sendReceipt(payment_intent_id: InputValue<string>, params?: PaymentIntentsSendReceiptParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PaymentIntent, PaymentIntentResponse>>;
    /**
 * Applies a sparse update while status is requires_payment_method, requires_confirmation,
 * requires_action, or requires_capture. In processing, succeeded, canceled, or expired it returns
 * 409 ACTION_NOT_ALLOWED with reason in_progress or terminal_status, with the status in
 * error.details[].current_status. amount_money can change only while status is
 * requires_payment_method and before the first confirmation attempt; after that, create a new
 * payment intent. customer_id can change only while status is requires_payment_method, and
 * receipt_email only while it is requires_payment_method or requires_confirmation. Send null to
 * clear tip_money, external_reference_id, receipt_email, or all metadata; amount_money and
 * customer_id cannot be cleared. Order-owned intents accept only metadata and
 * external_reference_id; amount_money, tip_money, customer_id, and receipt_email return
 * INVALID_REQUEST with one NOT_ALLOWED detail per field. This route doesn't attach a payment
 * source: send the buyer's credential to the confirm route.
 *
 * `PATCH /v1/payment-intents/{payment_intent_id}`
 * @param payment_intent_id Flint payment intent ID.
 * @see https://developers.withflintpay.com/docs/api/payments#updatePaymentIntent
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentIntents.update("pi_01ARZ3NDEKTSV4RRFFQ69G5FAV", {receipt_email:
 * "buyer@example.com"}, { idempotencyKey: idempotencyKey })
 */
    update(payment_intent_id: InputValue<string>, params: PaymentIntentsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PaymentIntent, PaymentIntentResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly paymentIntents: PaymentIntentsResource;
}
