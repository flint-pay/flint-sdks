import type { InputValue } from '../runtime.js';
import type { CancelPaymentIntentRequestInput, CapturePaymentIntentRequestInput } from '../declarations/types-3.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { ConfirmPaymentIntentResponse } from '../declarations/types-5.js';
import type { CreatePaymentIntentRequestInput } from '../declarations/types-7.js';
import type {
    PaymentIntent,
    PaymentIntentActivity,
    PaymentIntentActivityListResponse,
    PaymentIntentListResponse,
    PaymentIntentResponse,
    PaymentIntentWithAction,
    PaymentIntentWithCollection,
    PaymentIntentWithCollectionResponse,
    PaymentIntentsCancelInput,
    PaymentIntentsCaptureInput,
    PaymentIntentsConfirmInput,
    PaymentIntentsCreateInput,
    PaymentIntentsCreateResponse,
    PaymentIntentsGetInput,
    PaymentIntentsListActivitiesInput,
    PaymentIntentsListInput,
    PaymentIntentsSendReceiptInput,
    PaymentIntentsUpdateInput
} from '../declarations/types-35.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-43.js';
import type { SendPaymentIntentReceiptRequestInput } from '../declarations/types-44.js';
import type { UpdatePaymentIntentRequestInput } from '../declarations/types-48.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-61.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    Metadata,
    ErrorKind,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails
} from '../runtime.js';
export type {
    CancelPaymentIntentRequestInput,
    CapturePaymentIntentRequestInput,
    CheckoutBuyerContact,
    CancelOrderPaymentAttemptRequestInput
} from '../declarations/types-3.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    PaymentIntent,
    PaymentIntentResponse,
    PaymentIntentsConfirmInput,
    PaymentIntentWithAction,
    PaymentIntentWithCollection,
    PaymentIntentsCreateResponse,
    PaymentIntentWithCollectionResponse,
    PaymentIntentActivityListResponse,
    PaymentIntentActivity,
    PaymentIntentListResponse,
    PaymentIntentsCancelInput,
    PaymentIntentsCaptureInput,
    PaymentIntentsCreateInput,
    PaymentIntentsGetInput,
    PaymentIntentsListActivitiesInput,
    PaymentIntentsListInput,
    PaymentIntentsSendReceiptInput,
    PaymentIntentsUpdateInput,
    PaymentAddOnFee,
    PaymentFulfillmentHold,
    PaymentErrorSummary,
    PaymentClientAction,
    PaymentCollection,
    PaymentCollectionStripe,
    PaymentCollectionStripeElements
} from '../declarations/types-35.js';
export type { SdkResponse, SelectableOrderPaymentIntent } from '../declarations/types-43.js';
export type { ConfirmPaymentIntentResponse, ConfirmPaymentIntentRequestInput } from '../declarations/types-5.js';
export type { CreatePaymentIntentRequestInput } from '../declarations/types-7.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type {
    SendPaymentIntentReceiptRequestInput,
    SettlementAmounts,
    StripePaymentClientAction,
    StripeSetupIntentClientAction
} from '../declarations/types-44.js';
export type { UpdatePaymentIntentRequestInput } from '../declarations/types-48.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { MoneyValue, NextAction, NextActionMerchantAccountSession, MoneyValueInput } from '../declarations/types-31.js';
export type { ExpandedCustomerSummary, ExpandedInvoiceSummary, ErrorRemediation, ExpandedOrderSummary } from '../declarations/types-16.js';
export type {
    PricingAmounts,
    PendingPaymentAction,
    PendingPaymentActionSubject,
    PendingPaymentActionPaymentIntentSubject,
    PendingPaymentActionSetupPaymentSourceSubject
} from '../declarations/types-37.js';
export type { PaymentSourceSummary, PaymentSourceAchDebitSummary, PaymentSourceCardSummary, PaymentRisk } from '../declarations/types-36.js';
export type { OrdersCreatePaymentIntentResponse } from '../declarations/types-33.js';
export {
    makeCancelOrderPaymentAttemptRequest,
    makeCancelPaymentIntentRequest,
    makeCapturePaymentIntentRequest,
    makeConfirmPaymentIntentRequest
} from '../declarations/types-62.js';
export { makeCreatePaymentIntentRequest } from '../declarations/types-64.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makeSendPaymentIntentReceiptRequest } from '../declarations/types-71.js';
export { makeUpdatePaymentIntentRequest } from '../declarations/types-72.js';
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
 * @see reference/paymentIntents.md#paymentintentscancel
 * POST /v1/payment-intents/{payment_intent_id}/cancel
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentIntents.cancel("example", undefined, { idempotencyKey: idempotencyKey })
 */
    cancel(payment_intent_id: InputValue<string>, params?: (InputValue<CancelPaymentIntentRequestInput> | {
        "cancellation_reason"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<PaymentIntent>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/paymentIntents.md#paymentintentscancel
     */
    cancelWithResponse(payment_intent_id: InputValue<string>, params?: (InputValue<CancelPaymentIntentRequestInput> | {
        "cancellation_reason"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"checkout" | "merchant" | "merchantKey">): Promise<SdkResponse<PaymentIntentResponse>>;
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
 * @see reference/paymentIntents.md#paymentintentscapture
 * POST /v1/payment-intents/{payment_intent_id}/capture
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentIntents.capture("example", undefined, { idempotencyKey: idempotencyKey })
 */
    capture(payment_intent_id: InputValue<string>, params?: (InputValue<CapturePaymentIntentRequestInput> | {
        "amount_money"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<PaymentIntent>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/paymentIntents.md#paymentintentscapture
     */
    captureWithResponse(payment_intent_id: InputValue<string>, params?: (InputValue<CapturePaymentIntentRequestInput> | {
        "amount_money"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<PaymentIntentResponse>>;
    /**
 * Confirms a standalone payment intent. For the first confirmation, send exactly one of
 * stripe.confirmation_token, payment_source_token, or payment_method_id; without one, it returns
 * FIELD_REQUIRED. After the buyer completes current_payment_action, call this route again with no
 * body or {} to continue the same payment attempt. Flint confirms again only if the processor
 * still requires it, and otherwise returns the current payment intent. Unverified fee fields are
 * omitted. current_payment_action is null when no buyer action is needed. It can also be null
 * while status is requires_action if Flint cannot produce the action yet; call confirm again with
 * an empty body. Order-owned payment intents return 409 ACTION_NOT_ALLOWED with reason order_owned
 * and supported_actions; pay them through POST /v1/orders/{order_id}/pay using
 * remediation.next_actions.
 * @see reference/paymentIntents.md#paymentintentsconfirm
 * POST /v1/payment-intents/{payment_intent_id}/confirm
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentIntents.confirm({payment_intent_id: "example"}, { idempotencyKey: idempotencyKey })
 */
    confirm(input: PaymentIntentsConfirmInput, options?: RequestOptions<"merchant" | "merchantKey">): Promise<PaymentIntentWithAction>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/paymentIntents.md#paymentintentsconfirm
     */
    confirmWithResponse(input: PaymentIntentsConfirmInput, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ConfirmPaymentIntentResponse>>;
    /**
 * Creates a standalone payment intent for the authenticated merchant and returns it flat in data
 * with required payment_collection guidance. Create order-owned payment intents with POST
 * /v1/orders/{order_id}/payment-intents.
 * @see reference/paymentIntents.md#paymentintentscreate
 * POST /v1/payment-intents
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentIntents.create({amount_money: {amount: "5000", currency: "USD"}, payment_options:
 * ["card"]}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreatePaymentIntentRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<({
        "payment_collection": unknown;
    })
        & (Exclude<PaymentIntentWithCollection & object, readonly unknown[]>)>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/paymentIntents.md#paymentintentscreate
     */
    createWithResponse(params: (InputValue<CreatePaymentIntentRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<PaymentIntentsCreateResponse>>;
    /**
 * Returns a single payment intent by ID. Unverified fee fields are omitted; read the intent again
 * later for verified fees. For a standalone payment intent in requires_action, call confirm with
 * an empty body to retrieve current_payment_action.
 * @see reference/paymentIntents.md#paymentintentsget
 * GET /v1/payment-intents/{payment_intent_id}
 * @example
 * client.paymentIntents.get("example")
 */
    get(payment_intent_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"customer" | "invoice" | "order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>): Promise<PaymentIntentWithCollection>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/paymentIntents.md#paymentintentsget
     */
    getWithResponse(payment_intent_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"customer" | "invoice" | "order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>): Promise<SdkResponse<PaymentIntentWithCollectionResponse>>;
    /**
 * Returns a read-only, human-readable history for a payment intent. Read the payment intent or
 * referenced resource for authoritative state; this log does not replace webhooks or a ledger.
 * Results default to newest first, with payment_intent_activity_id breaking timestamp ties in the
 * same direction. Use sort_direction=asc for a chronological timeline. Page tokens are bound to
 * the payment intent, merchant, environment, activity_type filter, and sort direction.
 * @see reference/paymentIntents.md#paymentintentslistactivities
 * GET /v1/payment-intents/{payment_intent_id}/activities
 * @example
 * client.paymentIntents.listActivities("example")
 */
    listActivities(payment_intent_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "activity_type"?: InputValue<Array<"created"
            | "updated"
            | "status_changed"
            | "failed"
            | "canceled"
            | "expired"
            | "refund_created"
            | "refund_status_changed"
            | "dispute_status_changed"
            | "receipt_sent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<PaymentIntentActivityListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/paymentIntents.md#paymentintentslistactivities
     */
    listActivitiesWithResponse(payment_intent_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "activity_type"?: InputValue<Array<"created"
            | "updated"
            | "status_changed"
            | "failed"
            | "canceled"
            | "expired"
            | "refund_created"
            | "refund_status_changed"
            | "dispute_status_changed"
            | "receipt_sent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<PaymentIntentActivityListResponse>>;
    /** Iterate pages lazily.
     * @see reference/paymentIntents.md#paymentintentslistactivities
     */
    listActivitiesPages(payment_intent_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "activity_type"?: InputValue<Array<"created"
            | "updated"
            | "status_changed"
            | "failed"
            | "canceled"
            | "expired"
            | "refund_created"
            | "refund_status_changed"
            | "dispute_status_changed"
            | "receipt_sent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<PaymentIntentActivityListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/paymentIntents.md#paymentintentslistactivities
     */
    listActivitiesPagesWithResponse(payment_intent_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "activity_type"?: InputValue<Array<"created"
            | "updated"
            | "status_changed"
            | "failed"
            | "canceled"
            | "expired"
            | "refund_created"
            | "refund_status_changed"
            | "dispute_status_changed"
            | "receipt_sent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<PaymentIntentActivityListResponse>>;
    /** Iterate items lazily.
     * @see reference/paymentIntents.md#paymentintentslistactivities
     */
    listActivitiesItems(payment_intent_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "activity_type"?: InputValue<Array<"created"
            | "updated"
            | "status_changed"
            | "failed"
            | "canceled"
            | "expired"
            | "refund_created"
            | "refund_status_changed"
            | "dispute_status_changed"
            | "receipt_sent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<PaymentIntentActivity>;
    /**
 * Returns a paginated list of payment intents for the authenticated merchant.
 * @see reference/paymentIntents.md#paymentintentslist
 * GET /v1/payment-intents
 * @example
 * client.paymentIntents.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "invoice_id"?: InputValue<string>;
        "is_action_required"?: InputValue<boolean>;
        "status"?: InputValue<Array<"requires_payment_method"
            | "requires_confirmation"
            | "requires_action"
            | "processing"
            | "requires_capture"
            | "canceled"
            | "succeeded"
            | "expired">>;
        "risk_level"?: InputValue<Array<"normal" | "elevated" | "highest" | "not_assessed">>;
        "payment_flow"?: InputValue<Array<"checkout"
            | "payment_link"
            | "invoice"
            | "subscription_initial"
            | "subscription_renewal"
            | "virtual_terminal"
            | "api">>;
        "external_reference_id"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_resolution_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>;
        "dispute_status"?: InputValue<Array<"none"
            | "inquiry_needs_response"
            | "inquiry_under_review"
            | "inquiry_closed"
            | "needs_response"
            | "under_review"
            | "won"
            | "lost"
            | "prevented"
            | "other">>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"customer" | "invoice" | "order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<PaymentIntentListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/paymentIntents.md#paymentintentslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "invoice_id"?: InputValue<string>;
        "is_action_required"?: InputValue<boolean>;
        "status"?: InputValue<Array<"requires_payment_method"
            | "requires_confirmation"
            | "requires_action"
            | "processing"
            | "requires_capture"
            | "canceled"
            | "succeeded"
            | "expired">>;
        "risk_level"?: InputValue<Array<"normal" | "elevated" | "highest" | "not_assessed">>;
        "payment_flow"?: InputValue<Array<"checkout"
            | "payment_link"
            | "invoice"
            | "subscription_initial"
            | "subscription_renewal"
            | "virtual_terminal"
            | "api">>;
        "external_reference_id"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_resolution_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>;
        "dispute_status"?: InputValue<Array<"none"
            | "inquiry_needs_response"
            | "inquiry_under_review"
            | "inquiry_closed"
            | "needs_response"
            | "under_review"
            | "won"
            | "lost"
            | "prevented"
            | "other">>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"customer" | "invoice" | "order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<PaymentIntentListResponse>>;
    /** Iterate pages lazily.
     * @see reference/paymentIntents.md#paymentintentslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "invoice_id"?: InputValue<string>;
        "is_action_required"?: InputValue<boolean>;
        "status"?: InputValue<Array<"requires_payment_method"
            | "requires_confirmation"
            | "requires_action"
            | "processing"
            | "requires_capture"
            | "canceled"
            | "succeeded"
            | "expired">>;
        "risk_level"?: InputValue<Array<"normal" | "elevated" | "highest" | "not_assessed">>;
        "payment_flow"?: InputValue<Array<"checkout"
            | "payment_link"
            | "invoice"
            | "subscription_initial"
            | "subscription_renewal"
            | "virtual_terminal"
            | "api">>;
        "external_reference_id"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_resolution_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>;
        "dispute_status"?: InputValue<Array<"none"
            | "inquiry_needs_response"
            | "inquiry_under_review"
            | "inquiry_closed"
            | "needs_response"
            | "under_review"
            | "won"
            | "lost"
            | "prevented"
            | "other">>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"customer" | "invoice" | "order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<PaymentIntentListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/paymentIntents.md#paymentintentslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "invoice_id"?: InputValue<string>;
        "is_action_required"?: InputValue<boolean>;
        "status"?: InputValue<Array<"requires_payment_method"
            | "requires_confirmation"
            | "requires_action"
            | "processing"
            | "requires_capture"
            | "canceled"
            | "succeeded"
            | "expired">>;
        "risk_level"?: InputValue<Array<"normal" | "elevated" | "highest" | "not_assessed">>;
        "payment_flow"?: InputValue<Array<"checkout"
            | "payment_link"
            | "invoice"
            | "subscription_initial"
            | "subscription_renewal"
            | "virtual_terminal"
            | "api">>;
        "external_reference_id"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_resolution_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>;
        "dispute_status"?: InputValue<Array<"none"
            | "inquiry_needs_response"
            | "inquiry_under_review"
            | "inquiry_closed"
            | "needs_response"
            | "under_review"
            | "won"
            | "lost"
            | "prevented"
            | "other">>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"customer" | "invoice" | "order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<PaymentIntentListResponse>>;
    /** Iterate items lazily.
     * @see reference/paymentIntents.md#paymentintentslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "invoice_id"?: InputValue<string>;
        "is_action_required"?: InputValue<boolean>;
        "status"?: InputValue<Array<"requires_payment_method"
            | "requires_confirmation"
            | "requires_action"
            | "processing"
            | "requires_capture"
            | "canceled"
            | "succeeded"
            | "expired">>;
        "risk_level"?: InputValue<Array<"normal" | "elevated" | "highest" | "not_assessed">>;
        "payment_flow"?: InputValue<Array<"checkout"
            | "payment_link"
            | "invoice"
            | "subscription_initial"
            | "subscription_renewal"
            | "virtual_terminal"
            | "api">>;
        "external_reference_id"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_resolution_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>;
        "dispute_status"?: InputValue<Array<"none"
            | "inquiry_needs_response"
            | "inquiry_under_review"
            | "inquiry_closed"
            | "needs_response"
            | "under_review"
            | "won"
            | "lost"
            | "prevented"
            | "other">>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"customer" | "invoice" | "order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<PaymentIntent>;
    /**
 * Queues a receipt for a succeeded payment intent and returns the payment intent unchanged. For an
 * order-owned payment intent, sends the order receipt. Once sent, the receipt appears as a
 * receipt_sent payment intent activity. Send email to choose a recipient. Omit email to use the
 * order's receipt address for an order-owned intent, or receipt_email then the customer's email
 * for a standalone intent. The saved receipt email stays unchanged. Requires Flint-managed receipt
 * delivery. Standalone sending is limited to once every five minutes per payment intent; order
 * receipt sending is limited to once every five minutes per order and normalized recipient. Retry
 * with the same Idempotency-Key to replay the result without sending again.
 * @see reference/paymentIntents.md#paymentintentssendreceipt
 * POST /v1/payment-intents/{payment_intent_id}/send-receipt
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentIntents.sendReceipt("example", undefined, { idempotencyKey: idempotencyKey })
 */
    sendReceipt(payment_intent_id: InputValue<string>, params?: (InputValue<SendPaymentIntentReceiptRequestInput> | {
        "email"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<PaymentIntent>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/paymentIntents.md#paymentintentssendreceipt
     */
    sendReceiptWithResponse(payment_intent_id: InputValue<string>, params?: (InputValue<SendPaymentIntentReceiptRequestInput> | {
        "email"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<PaymentIntentResponse>>;
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
 * @see reference/paymentIntents.md#paymentintentsupdate
 * PATCH /v1/payment-intents/{payment_intent_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentIntents.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(payment_intent_id: InputValue<string>, params: (InputValue<UpdatePaymentIntentRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<PaymentIntent>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/paymentIntents.md#paymentintentsupdate
     */
    updateWithResponse(payment_intent_id: InputValue<string>, params: (InputValue<UpdatePaymentIntentRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<PaymentIntentResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly paymentIntents: PaymentIntentsResource;
}
