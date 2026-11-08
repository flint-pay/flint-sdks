import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    PayoutDestination,
    PayoutDestinationListResponse,
    PayoutDestinationResponse,
    PayoutDestinationsDeleteParams,
    PayoutDestinationsGetParams,
    PayoutDestinationsListParams,
    PayoutDestinationsUpdateParams
} from '../declarations/types-46.js';
import type { RequestOptions } from '../declarations/types-51.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-66.js';
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
    PayoutDestinationsDeleteParams,
    PayoutDestination,
    PayoutDestinationResponse,
    PayoutDestinationsGetParams,
    PayoutDestinationsListParams,
    PayoutDestinationListResponse,
    PayoutDestinationsUpdateParams
} from '../declarations/types-46.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-51.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-66.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-13.js';
export type { MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-36.js';
export type { NextAction, MoneyValue, MoneyMovementListMeta, MoneyMovementHistoryMeta } from '../declarations/types-37.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-49.js';
export type { UpdatePayoutDestinationRequestInput } from '../declarations/types-64.js';
export type { DisputesAcceptParams } from '../declarations/types-22.js';
export { makeMetadataPatchRequest } from '../declarations/types-74.js';
export { makeMoneyValue } from '../declarations/types-75.js';
export { makeUpdatePayoutDestinationRequest } from '../declarations/types-80.js';
export interface PayoutDestinationsResource {
    /**
 * Archives the payout destination and returns it with `status: archived`. It stays readable by ID.
 * You can't delete the active default destination; make another destination the default with
 * `client.payoutSettings.update` first. Safe to retry with the same idempotency key.
 *
 * `DELETE /v1/payout-destinations/{payout_destination_id}`
 * @param payout_destination_id Flint payout destination ID.
 * @see https://developers.withflintpay.com/docs/api/money-movement#deletePayoutDestination
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.payoutDestinations.delete("pdest_01KEZF7C00M55HZDZXZP6YVE6B", {}, { idempotencyKey:
 * idempotencyKey })
 */
    delete(payout_destination_id: InputValue<string>, params?: PayoutDestinationsDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PayoutDestination, PayoutDestinationResponse>>;
    /**
 * Returns one payout destination by ID.
 *
 * `GET /v1/payout-destinations/{payout_destination_id}`
 * @param payout_destination_id Flint payout destination ID.
 * @see https://developers.withflintpay.com/docs/api/money-movement#getPayoutDestination
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.payoutDestinations.get("pdest_01KEZF7C00M55HZDZXZP6YVE6B")
 */
    get(payout_destination_id: InputValue<string>, params?: PayoutDestinationsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PayoutDestination, PayoutDestinationResponse>>;
    /**
 * Returns a paginated list of payout destinations available to the authenticated merchant. The
 * account owner adds a destination in the `payouts` embedded component, opened with
 * `client.merchantAccountSessions.create`; Flint never takes bank details through the API. Default
 * order: created_at descending, then payout_destination_id descending.
 *
 * `GET /v1/payout-destinations`
 * @see https://developers.withflintpay.com/docs/api/money-movement#listPayoutDestinations
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.payoutDestinations.list()
 */
    list(params?: PayoutDestinationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PayoutDestinationListResponse, PayoutDestinationListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/money-movement#listPayoutDestinations
     */
    listPages(params?: PayoutDestinationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<PayoutDestinationListResponse, PayoutDestinationListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/money-movement#listPayoutDestinations
     */
    listItems(params?: PayoutDestinationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PayoutDestination>;
    /**
 * Updates mutable metadata and settings for a payout destination. Safe to retry with the same
 * idempotency key.
 *
 * `PATCH /v1/payout-destinations/{payout_destination_id}`
 * @param payout_destination_id Flint payout destination ID.
 * @see https://developers.withflintpay.com/docs/api/money-movement#updatePayoutDestination
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.payoutDestinations.update("pdest_01ARZ3NDEKTSV4RRFFQ69G5FAV", {metadata:
 * {accounting_reference: "settlement-001"}}, { idempotencyKey: idempotencyKey })
 */
    update(payout_destination_id: InputValue<string>, params: PayoutDestinationsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PayoutDestination, PayoutDestinationResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly payoutDestinations: PayoutDestinationsResource;
}
