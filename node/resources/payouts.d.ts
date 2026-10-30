import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    Payout,
    PayoutListResponse,
    PayoutResponse,
    PayoutsCancelParams,
    PayoutsCreateParams,
    PayoutsGetParams,
    PayoutsListParams
} from '../declarations/types-43.js';
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
    PayoutsCancelParams,
    Payout,
    PayoutResponse,
    PayoutsCreateParams,
    PayoutsGetParams,
    PayoutsListParams,
    PayoutListResponse,
    PayoutTraceID
} from '../declarations/types-43.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CancelPayoutRequestInput } from '../declarations/types-3.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { MoneyValue, NextAction, MoneyValueInput, MoneyMovementListMeta, MoneyMovementHistoryMeta } from '../declarations/types-35.js';
export type { MetadataMap, MetadataRequestInput } from '../declarations/types-34.js';
export type { ExpandedPayoutSummary, ExpandedPayoutDestinationSummary } from '../declarations/types-21.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { CreatePayoutRequestInput } from '../declarations/types-9.js';
export { makeCancelPayoutRequest } from '../declarations/types-62.js';
export { makeCreatePayoutRequest } from '../declarations/types-64.js';
export { makeMetadataRequest, makeMoneyValue } from '../declarations/types-69.js';
export interface PayoutsResource {
    /**
 * Cancels an eligible payout before it leaves Flint-controlled processing and returns the
 * resulting payout.
 *
 * `POST /v1/payouts/{payout_id}/cancel`
 * @param payout_id Flint payout ID.
 * @see https://developers.withflintpay.com/docs/api/money-movement#cancelPayout
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.payouts.cancel("po_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    cancel(payout_id: InputValue<string>, params?: PayoutsCancelParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Payout, PayoutResponse>>;
    /**
 * Creates a payout from an available balance to an eligible payout destination. Safe to retry with
 * the same Idempotency-Key.
 *
 * `POST /v1/payouts`
 * @see https://developers.withflintpay.com/docs/api/money-movement#createPayout
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.payouts.create({amount_money: {amount: "100", currency: "USD"}}, { idempotencyKey:
 * idempotencyKey })
 */
    create(params: PayoutsCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Payout, PayoutResponse>>;
    /**
 * Returns one payout by ID, with optional related payout and payout destination expansions.
 *
 * `GET /v1/payouts/{payout_id}`
 * @param payout_id Flint payout ID.
 * @see https://developers.withflintpay.com/docs/api/money-movement#getPayout
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.payouts.get("po_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(payout_id: InputValue<string>, params?: PayoutsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Payout, PayoutResponse>>;
    /**
 * Returns a paginated list of payouts with optional filters for status, currency, destination,
 * method, and timing. Default order: created_at descending, then payout_id descending.
 *
 * `GET /v1/payouts`
 * @see https://developers.withflintpay.com/docs/api/money-movement#listPayouts
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.payouts.list()
 */
    list(params?: PayoutsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PayoutListResponse, PayoutListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/money-movement#listPayouts
     */
    listPages(params?: PayoutsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<PayoutListResponse, PayoutListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/money-movement#listPayouts
     */
    listItems(params?: PayoutsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Payout>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly payouts: PayoutsResource;
}
