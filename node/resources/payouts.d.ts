import type { InputValue } from '../runtime.js';
import type { CancelPayoutRequestInput } from '../declarations/types-3.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreatePayoutRequestInput } from '../declarations/types-8.js';
import type { Payout, PayoutListResponse } from '../declarations/types-36.js';
import type { PayoutResponse, PayoutsCancelInput, PayoutsCreateInput, PayoutsGetInput, PayoutsListInput } from '../declarations/types-37.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-62.js';
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
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type { CancelPayoutRequestInput, CancelPayoutRequest } from '../declarations/types-3.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type { Payout, PayoutListResponse } from '../declarations/types-36.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type {
    PayoutResponse,
    PayoutsCancelInput,
    PayoutsCreateInput,
    PayoutsGetInput,
    PayoutsListInput,
    PayoutTraceID
} from '../declarations/types-37.js';
export type { CreatePayoutRequestInput } from '../declarations/types-8.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type {
    MoneyValue,
    NextAction,
    NextActionMerchantAccountSession,
    MoneyValueInput,
    MoneyMovementListMeta,
    MoneyMovementHistoryMeta
} from '../declarations/types-31.js';
export type { ExpandedPayoutSummary, ExpandedPayoutDestinationSummary } from '../declarations/types-16.js';
export { makeCancelPayoutRequest } from '../declarations/types-62.js';
export { makeCreatePayoutRequest } from '../declarations/types-64.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export interface PayoutsResource {
    /**
 * Cancels an eligible payout before it leaves Flint-controlled processing and returns the
 * resulting payout.
 * @see reference/payouts.md#payoutscancel
 * POST /v1/payouts/{payout_id}/cancel
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.payouts.cancel("example", undefined, { idempotencyKey: idempotencyKey })
 */
    cancel(payout_id: InputValue<string>, params?: (InputValue<CancelPayoutRequestInput> | {})
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Payout>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/payouts.md#payoutscancel
     */
    cancelWithResponse(payout_id: InputValue<string>, params?: (InputValue<CancelPayoutRequestInput> | {})
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<PayoutResponse>>;
    /**
 * Creates a payout from an available balance to an eligible payout destination. Safe to retry with
 * the same Idempotency-Key.
 * @see reference/payouts.md#payoutscreate
 * POST /v1/payouts
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.payouts.create({amount_money: {amount: "100", currency: "USD"}}, { idempotencyKey:
 * idempotencyKey })
 */
    create(params: (InputValue<CreatePayoutRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<Payout>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/payouts.md#payoutscreate
     */
    createWithResponse(params: (InputValue<CreatePayoutRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<PayoutResponse>>;
    /**
 * Returns one payout by ID, with optional related payout and payout destination expansions.
 * @see reference/payouts.md#payoutsget
 * GET /v1/payouts/{payout_id}
 * @example
 * client.payouts.get("example")
 */
    get(payout_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"original_payout" | "payout_destination" | "reversed_by_payout">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<Payout>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/payouts.md#payoutsget
     */
    getWithResponse(payout_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"original_payout" | "payout_destination" | "reversed_by_payout">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<PayoutResponse>>;
    /**
 * Returns a paginated list of payouts with optional filters for status, currency, destination,
 * method, and timing.
 * @see reference/payouts.md#payoutslist
 * GET /v1/payouts
 * @example
 * client.payouts.list()
 */
    list(params?: {
        "idempotency_key"?: InputValue<string>;
        "currency"?: InputValue<string>;
        "expand"?: InputValue<Array<"original_payout" | "payout_destination" | "reversed_by_payout">>;
        "method"?: InputValue<Array<"standard" | "instant" | "other">>;
        "balance_source_type"?: InputValue<Array<"card" | "bank_account">>;
        "payout_destination_id"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "status"?: InputValue<Array<"pending" | "in_transit" | "paid" | "failed" | "canceled">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "arrival_date_from"?: InputValue<string>;
        "arrival_date_to"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<PayoutListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/payouts.md#payoutslist
     */
    listWithResponse(params?: {
        "idempotency_key"?: InputValue<string>;
        "currency"?: InputValue<string>;
        "expand"?: InputValue<Array<"original_payout" | "payout_destination" | "reversed_by_payout">>;
        "method"?: InputValue<Array<"standard" | "instant" | "other">>;
        "balance_source_type"?: InputValue<Array<"card" | "bank_account">>;
        "payout_destination_id"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "status"?: InputValue<Array<"pending" | "in_transit" | "paid" | "failed" | "canceled">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "arrival_date_from"?: InputValue<string>;
        "arrival_date_to"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<PayoutListResponse>>;
    /** Iterate pages lazily.
     * @see reference/payouts.md#payoutslist
     */
    listPages(params?: {
        "idempotency_key"?: InputValue<string>;
        "currency"?: InputValue<string>;
        "expand"?: InputValue<Array<"original_payout" | "payout_destination" | "reversed_by_payout">>;
        "method"?: InputValue<Array<"standard" | "instant" | "other">>;
        "balance_source_type"?: InputValue<Array<"card" | "bank_account">>;
        "payout_destination_id"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "status"?: InputValue<Array<"pending" | "in_transit" | "paid" | "failed" | "canceled">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "arrival_date_from"?: InputValue<string>;
        "arrival_date_to"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PayoutListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/payouts.md#payoutslist
     */
    listPagesWithResponse(params?: {
        "idempotency_key"?: InputValue<string>;
        "currency"?: InputValue<string>;
        "expand"?: InputValue<Array<"original_payout" | "payout_destination" | "reversed_by_payout">>;
        "method"?: InputValue<Array<"standard" | "instant" | "other">>;
        "balance_source_type"?: InputValue<Array<"card" | "bank_account">>;
        "payout_destination_id"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "status"?: InputValue<Array<"pending" | "in_transit" | "paid" | "failed" | "canceled">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "arrival_date_from"?: InputValue<string>;
        "arrival_date_to"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<PayoutListResponse>>;
    /** Iterate items lazily.
     * @see reference/payouts.md#payoutslist
     */
    listItems(params?: {
        "idempotency_key"?: InputValue<string>;
        "currency"?: InputValue<string>;
        "expand"?: InputValue<Array<"original_payout" | "payout_destination" | "reversed_by_payout">>;
        "method"?: InputValue<Array<"standard" | "instant" | "other">>;
        "balance_source_type"?: InputValue<Array<"card" | "bank_account">>;
        "payout_destination_id"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "status"?: InputValue<Array<"pending" | "in_transit" | "paid" | "failed" | "canceled">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "arrival_date_from"?: InputValue<string>;
        "arrival_date_to"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Payout>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly payouts: PayoutsResource;
}
