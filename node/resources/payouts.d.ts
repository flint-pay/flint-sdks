import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { Payout } from '../declarations/types-47.js';
import type {
    PayoutListResponse,
    PayoutResponse,
    PayoutsCancelParams,
    PayoutsCreateParams,
    PayoutsGetParams,
    PayoutsListParams
} from '../declarations/types-48.js';
import type { RequestOptions } from '../declarations/types-53.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-69.js';
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
    PayoutResponse,
    PayoutsCreateParams,
    PayoutsGetParams,
    PayoutsListParams,
    PayoutListResponse,
    PayoutTraceID
} from '../declarations/types-48.js';
export type { RequestOptions } from '../declarations/types-53.js';
export type { Payout } from '../declarations/types-47.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-69.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { CancelPayoutRequestInput } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type {
    MoneyValue,
    NextAction,
    MoneyValueInput,
    MetadataRequestInput,
    MoneyMovementListMeta,
    MoneyMovementHistoryMeta
} from '../declarations/types-38.js';
export type { MetadataMap } from '../declarations/types-37.js';
export type { ExpandedPayoutSummary, ExpandedPayoutDestinationSummary } from '../declarations/types-24.js';
export type { ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { CreatePayoutRequestInput } from '../declarations/types-11.js';
export { makeCancelPayoutRequest } from '../declarations/types-70.js';
export { makeCreatePayoutRequest } from '../declarations/types-73.js';
export { makeMetadataRequest, makeMoneyValue } from '../declarations/types-78.js';
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
 * client.payouts.cancel("po_01KEZF7C00PXK8XREWJA6K4FGV", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    cancel(payout_id: InputValue<string>, params?: PayoutsCancelParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Payout, PayoutResponse>>;
    /**
 * Creates a payout from an available balance to an eligible payout destination. Safe to retry with
 * the same idempotency key.
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
 * client.payouts.get("po_01KEZF7C00PXK8XREWJA6K4FGV")
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
