import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    GiftCardFundingDisposition,
    GiftCardFundingDispositionListResponse,
    GiftCardFundingDispositionResponse,
    GiftCardFundingDispositionsCreateParams,
    GiftCardFundingDispositionsGetParams,
    GiftCardFundingDispositionsListParams
} from '../declarations/types-23.js';
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
    GiftCardFundingDispositionsCreateParams,
    GiftCardFundingDisposition,
    GiftCardFundingDispositionResponse,
    GiftCardFundingDispositionsGetParams,
    GiftCardFundingDispositionsListParams,
    GiftCardFundingDispositionListResponse
} from '../declarations/types-23.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CreateGiftCardFundingDispositionRequestInput } from '../declarations/types-8.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { MoneyValue, NextAction } from '../declarations/types-35.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export { makeCreateGiftCardFundingDispositionRequest } from '../declarations/types-63.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export interface GiftCardFundingDispositionsResource {
    /**
 * Accepts a confirmed funding dispute loss and honors all gift card value funded by that payment,
 * including value restored to replacement cards. Records the dispute amount, original gift card
 * consideration, honored value and preserved reservations. Clears only this dispute restriction;
 * balances, unrelated restrictions and unresolved payment reservations remain intact. Requires
 * gift card adjustment authority and a durable Idempotency-Key.
 *
 * `POST /v1/gift-card-funding-dispositions`
 * @see https://developers.withflintpay.com/docs/api/gift-cards#createGiftCardFundingDisposition
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCardFundingDispositions.create({dispute_id: "du_00000000000000000000000000",
 * reason_message: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: GiftCardFundingDispositionsCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<GiftCardFundingDisposition, GiftCardFundingDispositionResponse>>;
    /**
 * Retrieves a committed funding disposition within the authenticated merchant and environment.
 *
 * `GET /v1/gift-card-funding-dispositions/{gift_card_funding_disposition_id}`
 * @param gift_card_funding_disposition_id Flint resource ID.
 * @see https://developers.withflintpay.com/docs/api/gift-cards#getGiftCardFundingDisposition
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.giftCardFundingDispositions.get("gfd_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(gift_card_funding_disposition_id: InputValue<string>, params?: GiftCardFundingDispositionsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<GiftCardFundingDisposition, GiftCardFundingDispositionResponse>>;
    /**
 * Lists funding dispositions in descending ID order within the authenticated merchant and
 * environment. Filter by idempotency_key to recover a committed command. Default order:
 * gift_card_funding_disposition_id descending; this key uniquely orders the results.
 *
 * `GET /v1/gift-card-funding-dispositions`
 * @see https://developers.withflintpay.com/docs/api/gift-cards#listGiftCardFundingDispositions
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.giftCardFundingDispositions.list()
 */
    list(params?: GiftCardFundingDispositionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<GiftCardFundingDispositionListResponse, GiftCardFundingDispositionListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/gift-cards#listGiftCardFundingDispositions
     */
    listPages(params?: GiftCardFundingDispositionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<GiftCardFundingDispositionListResponse, GiftCardFundingDispositionListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/gift-cards#listGiftCardFundingDispositions
     */
    listItems(params?: GiftCardFundingDispositionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<GiftCardFundingDisposition>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly giftCardFundingDispositions: GiftCardFundingDispositionsResource;
}
