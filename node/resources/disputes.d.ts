import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type {
    Dispute,
    DisputeListResponse,
    DisputeResponse,
    DisputeResponseSession,
    DisputeResponseSessionResponse,
    DisputesCreateResponseSessionInput,
    DisputesGetInput,
    DisputesListInput
} from '../declarations/types-16.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-43.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
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
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    DisputeResponseSession,
    DisputeResponseSessionResponse,
    Dispute,
    DisputeResponse,
    DisputeListResponse,
    DisputesCreateResponseSessionInput,
    DisputesGetInput,
    DisputesListInput,
    DisputeResponseSessionClientSession,
    DisputeResponseSessionStripe,
    DisputeResponseSessionStripeAccountSession,
    DisputeResponseSessionStripeComponent,
    ExpandedCustomerSummary,
    ExpandedOrderSummary,
    ExpandedPaymentIntentSummary
} from '../declarations/types-16.js';
export type { SdkResponse } from '../declarations/types-43.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export type { CheckoutBuyerContact } from '../declarations/types-3.js';
export type { PricingAmounts } from '../declarations/types-37.js';
export type { SettlementAmounts } from '../declarations/types-44.js';
export type { PaymentSourceSummary, PaymentSourceAchDebitSummary, PaymentSourceCardSummary } from '../declarations/types-36.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export interface DisputesResource {
    /**
 * Creates a browser session for responding to or viewing a dispute with Stripe Connect. Requires
 * payments.disputes.write. Allowed for closed disputes; bank returns cannot be contested. Pass the
 * returned payment to setPayment or the React payment prop. Each completed retry creates a fresh
 * single-use client secret. Keep your API key on your server.
 * @see reference/disputes.md#disputescreateresponsesession
 * POST /v1/disputes/{dispute_id}/response-sessions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.disputes.createResponseSession("example", {}, { idempotencyKey: idempotencyKey })
 */
    createResponseSession(dispute_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<DisputeResponseSession>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/disputes.md#disputescreateresponsesession
     */
    createResponseSessionWithResponse(dispute_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<DisputeResponseSessionResponse>>;
    /**
 * Returns one dispute by ID, with optional customer, order, and payment intent expansions.
 * @see reference/disputes.md#disputesget
 * GET /v1/disputes/{dispute_id}
 * @example
 * client.disputes.get("example")
 */
    get(dispute_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<Dispute>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/disputes.md#disputesget
     */
    getWithResponse(dispute_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<DisputeResponse>>;
    /**
 * Returns a paginated list of disputes for the authenticated merchant with optional payment,
 * customer, status, reason, case type, action required, and timing filters. Defaults to created_at
 * descending. The amount sort compares amount_money.amount in minor units. The evidence_due_at
 * sort places disputes without deadlines last in either direction.
 * @see reference/disputes.md#disputeslist
 * GET /v1/disputes
 * @example
 * client.disputes.list()
 */
    list(params?: {
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "payment_intent_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "status"?: InputValue<Array<"inquiry_needs_response"
            | "inquiry_under_review"
            | "inquiry_closed"
            | "needs_response"
            | "under_review"
            | "won"
            | "lost"
            | "prevented"
            | "other">>;
        "reason"?: InputValue<Array<"fraudulent"
            | "unrecognized"
            | "duplicate"
            | "product_not_received"
            | "product_not_as_described"
            | "refund_not_processed"
            | "subscription_canceled"
            | "noncompliant"
            | "insufficient_funds"
            | "debit_not_authorized"
            | "bank_account_not_found"
            | "other">>;
        "case_type"?: InputValue<Array<"inquiry" | "chargeback" | "compliance" | "resolution" | "block" | "other" | "bank_return">>;
        "is_action_required"?: InputValue<boolean>;
        "sort_by"?: InputValue<"created_at" | "evidence_due_at" | "amount_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "evidence_due_after"?: InputValue<string | globalThis.Date>;
        "evidence_due_before"?: InputValue<string | globalThis.Date>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<DisputeListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/disputes.md#disputeslist
     */
    listWithResponse(params?: {
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "payment_intent_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "status"?: InputValue<Array<"inquiry_needs_response"
            | "inquiry_under_review"
            | "inquiry_closed"
            | "needs_response"
            | "under_review"
            | "won"
            | "lost"
            | "prevented"
            | "other">>;
        "reason"?: InputValue<Array<"fraudulent"
            | "unrecognized"
            | "duplicate"
            | "product_not_received"
            | "product_not_as_described"
            | "refund_not_processed"
            | "subscription_canceled"
            | "noncompliant"
            | "insufficient_funds"
            | "debit_not_authorized"
            | "bank_account_not_found"
            | "other">>;
        "case_type"?: InputValue<Array<"inquiry" | "chargeback" | "compliance" | "resolution" | "block" | "other" | "bank_return">>;
        "is_action_required"?: InputValue<boolean>;
        "sort_by"?: InputValue<"created_at" | "evidence_due_at" | "amount_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "evidence_due_after"?: InputValue<string | globalThis.Date>;
        "evidence_due_before"?: InputValue<string | globalThis.Date>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<DisputeListResponse>>;
    /** Iterate pages lazily.
     * @see reference/disputes.md#disputeslist
     */
    listPages(params?: {
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "payment_intent_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "status"?: InputValue<Array<"inquiry_needs_response"
            | "inquiry_under_review"
            | "inquiry_closed"
            | "needs_response"
            | "under_review"
            | "won"
            | "lost"
            | "prevented"
            | "other">>;
        "reason"?: InputValue<Array<"fraudulent"
            | "unrecognized"
            | "duplicate"
            | "product_not_received"
            | "product_not_as_described"
            | "refund_not_processed"
            | "subscription_canceled"
            | "noncompliant"
            | "insufficient_funds"
            | "debit_not_authorized"
            | "bank_account_not_found"
            | "other">>;
        "case_type"?: InputValue<Array<"inquiry" | "chargeback" | "compliance" | "resolution" | "block" | "other" | "bank_return">>;
        "is_action_required"?: InputValue<boolean>;
        "sort_by"?: InputValue<"created_at" | "evidence_due_at" | "amount_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "evidence_due_after"?: InputValue<string | globalThis.Date>;
        "evidence_due_before"?: InputValue<string | globalThis.Date>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<DisputeListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/disputes.md#disputeslist
     */
    listPagesWithResponse(params?: {
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "payment_intent_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "status"?: InputValue<Array<"inquiry_needs_response"
            | "inquiry_under_review"
            | "inquiry_closed"
            | "needs_response"
            | "under_review"
            | "won"
            | "lost"
            | "prevented"
            | "other">>;
        "reason"?: InputValue<Array<"fraudulent"
            | "unrecognized"
            | "duplicate"
            | "product_not_received"
            | "product_not_as_described"
            | "refund_not_processed"
            | "subscription_canceled"
            | "noncompliant"
            | "insufficient_funds"
            | "debit_not_authorized"
            | "bank_account_not_found"
            | "other">>;
        "case_type"?: InputValue<Array<"inquiry" | "chargeback" | "compliance" | "resolution" | "block" | "other" | "bank_return">>;
        "is_action_required"?: InputValue<boolean>;
        "sort_by"?: InputValue<"created_at" | "evidence_due_at" | "amount_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "evidence_due_after"?: InputValue<string | globalThis.Date>;
        "evidence_due_before"?: InputValue<string | globalThis.Date>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<DisputeListResponse>>;
    /** Iterate items lazily.
     * @see reference/disputes.md#disputeslist
     */
    listItems(params?: {
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "payment_intent_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "status"?: InputValue<Array<"inquiry_needs_response"
            | "inquiry_under_review"
            | "inquiry_closed"
            | "needs_response"
            | "under_review"
            | "won"
            | "lost"
            | "prevented"
            | "other">>;
        "reason"?: InputValue<Array<"fraudulent"
            | "unrecognized"
            | "duplicate"
            | "product_not_received"
            | "product_not_as_described"
            | "refund_not_processed"
            | "subscription_canceled"
            | "noncompliant"
            | "insufficient_funds"
            | "debit_not_authorized"
            | "bank_account_not_found"
            | "other">>;
        "case_type"?: InputValue<Array<"inquiry" | "chargeback" | "compliance" | "resolution" | "block" | "other" | "bank_return">>;
        "is_action_required"?: InputValue<boolean>;
        "sort_by"?: InputValue<"created_at" | "evidence_due_at" | "amount_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "evidence_due_after"?: InputValue<string | globalThis.Date>;
        "evidence_due_before"?: InputValue<string | globalThis.Date>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<Dispute>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly disputes: DisputesResource;
}
