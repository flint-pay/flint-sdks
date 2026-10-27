import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateGiftCardFundingDispositionRequestInput } from '../declarations/types-6.js';
import type {
    GiftCardFundingDisposition,
    GiftCardFundingDispositionListResponse,
    GiftCardFundingDispositionResponse,
    GiftCardFundingDispositionsCreateInput,
    GiftCardFundingDispositionsGetInput,
    GiftCardFundingDispositionsListInput
} from '../declarations/types-18.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-43.js';
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
export type { CreateGiftCardFundingDispositionRequestInput } from '../declarations/types-6.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    GiftCardFundingDisposition,
    GiftCardFundingDispositionResponse,
    GiftCardFundingDispositionListResponse,
    GiftCardFundingDispositionsCreateInput,
    GiftCardFundingDispositionsGetInput,
    GiftCardFundingDispositionsListInput
} from '../declarations/types-18.js';
export type { SdkResponse } from '../declarations/types-43.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-31.js';
export { makeCreateGiftCardFundingDispositionRequest } from '../declarations/types-63.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export interface GiftCardFundingDispositionsResource {
    /**
 * Accepts a confirmed funding dispute loss and honors all gift card value funded by that payment,
 * including value restored to replacement cards. Records the dispute amount, original gift card
 * consideration, honored value and preserved reservations. Clears only this dispute restriction;
 * balances, unrelated restrictions and unresolved payment reservations remain intact. Requires
 * gift card adjustment authority and a durable Idempotency-Key.
 * @see reference/giftCardFundingDispositions.md#giftcardfundingdispositionscreate
 * POST /v1/gift-card-funding-dispositions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCardFundingDispositions.create({dispute_id: "du_00000000000000000000000000",
 * reason_message: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateGiftCardFundingDispositionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<GiftCardFundingDisposition>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/giftCardFundingDispositions.md#giftcardfundingdispositionscreate
     */
    createWithResponse(params: (InputValue<CreateGiftCardFundingDispositionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<GiftCardFundingDispositionResponse>>;
    /**
 * Retrieves a committed funding disposition within the authenticated merchant and environment.
 * @see reference/giftCardFundingDispositions.md#giftcardfundingdispositionsget
 * GET /v1/gift-card-funding-dispositions/{gift_card_funding_disposition_id}
 * @example
 * client.giftCardFundingDispositions.get("example")
 */
    get(gift_card_funding_disposition_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<GiftCardFundingDisposition>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/giftCardFundingDispositions.md#giftcardfundingdispositionsget
     */
    getWithResponse(gift_card_funding_disposition_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<GiftCardFundingDispositionResponse>>;
    /**
 * Lists funding dispositions in descending ID order within the authenticated merchant and
 * environment. Filter by idempotency_key to recover a committed command.
 * @see reference/giftCardFundingDispositions.md#giftcardfundingdispositionslist
 * GET /v1/gift-card-funding-dispositions
 * @example
 * client.giftCardFundingDispositions.list()
 */
    list(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "dispute_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<GiftCardFundingDispositionListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/giftCardFundingDispositions.md#giftcardfundingdispositionslist
     */
    listWithResponse(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "dispute_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<GiftCardFundingDispositionListResponse>>;
    /** Iterate pages lazily.
     * @see reference/giftCardFundingDispositions.md#giftcardfundingdispositionslist
     */
    listPages(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "dispute_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<GiftCardFundingDispositionListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/giftCardFundingDispositions.md#giftcardfundingdispositionslist
     */
    listPagesWithResponse(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "dispute_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<GiftCardFundingDispositionListResponse>>;
    /** Iterate items lazily.
     * @see reference/giftCardFundingDispositions.md#giftcardfundingdispositionslist
     */
    listItems(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "dispute_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<GiftCardFundingDisposition>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly giftCardFundingDispositions: GiftCardFundingDispositionsResource;
}
