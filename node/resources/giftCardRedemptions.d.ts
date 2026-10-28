import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateGiftCardRedemptionRequestInput } from '../declarations/types-6.js';
import type {
    GiftCardRedemption,
    GiftCardRedemptionListResponse,
    GiftCardRedemptionResponse,
    GiftCardRedemptionResult,
    GiftCardRedemptionResultResponse,
    GiftCardRedemptionsCancelInput,
    GiftCardRedemptionsCaptureInput,
    GiftCardRedemptionsCreateInput,
    GiftCardRedemptionsGetInput,
    GiftCardRedemptionsListInput,
    GiftCardVersionRequestInput
} from '../declarations/types-19.js';
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
export type {
    GiftCardVersionRequestInput,
    GiftCardRedemptionResult,
    GiftCardRedemptionResultResponse,
    GiftCardRedemption,
    GiftCardRedemptionResponse,
    GiftCardRedemptionListResponse,
    GiftCardRedemptionsCancelInput,
    GiftCardRedemptionsCaptureInput,
    GiftCardRedemptionsCreateInput,
    GiftCardRedemptionsGetInput,
    GiftCardRedemptionsListInput,
    GiftCardRestriction,
    GiftCardTransaction
} from '../declarations/types-19.js';
export type { RequestOptions, ResourceReference, ResourceType, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type {
    CreateGiftCardRedemptionRequestInput,
    CreateGiftCardRedemptionRequestAutomaticInput,
    CreateGiftCardRedemptionRequestManualInput
} from '../declarations/types-6.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { GiftCard } from '../declarations/types-18.js';
export type { MoneyValue, NextAction, NextActionMerchantAccountSession, MoneyValueInput } from '../declarations/types-31.js';
export {
    makeCreateGiftCardRedemptionRequest,
    makeCreateGiftCardRedemptionRequestAutomatic,
    makeCreateGiftCardRedemptionRequestManual
} from '../declarations/types-64.js';
export { makeGiftCardVersionRequest } from '../declarations/types-67.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export interface GiftCardRedemptionsResource {
    /**
 * Releases an uncaptured standalone reservation without posting a debit or refund. Flint order
 * reservations cannot be released while a processor outcome is unresolved. expected_version fences
 * the redemption version.
 * @see reference/giftCardRedemptions.md#giftcardredemptionscancel
 * POST /v1/gift-card-redemptions/{gift_card_redemption_id}/cancel
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCardRedemptions.cancel("example", undefined, { idempotencyKey: idempotencyKey })
 */
    cancel(gift_card_redemption_id: InputValue<string>, params?: (InputValue<GiftCardVersionRequestInput> | {
        "expected_version"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<GiftCardRedemptionResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/giftCardRedemptions.md#giftcardredemptionscancel
     */
    cancelWithResponse(gift_card_redemption_id: InputValue<string>, params?: (InputValue<GiftCardVersionRequestInput> | {
        "expected_version"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<GiftCardRedemptionResultResponse>>;
    /**
 * Posts the full reserved amount before the manual reservation expires. Capturing and expiry use
 * the same concurrency fence. Flint order reservations are resolved by their payment attempt and
 * cannot be captured through this standalone operation. expected_version fences the redemption
 * version.
 * @see reference/giftCardRedemptions.md#giftcardredemptionscapture
 * POST /v1/gift-card-redemptions/{gift_card_redemption_id}/capture
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCardRedemptions.capture("example", undefined, { idempotencyKey: idempotencyKey })
 */
    capture(gift_card_redemption_id: InputValue<string>, params?: (InputValue<GiftCardVersionRequestInput> | {
        "expected_version"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<GiftCardRedemptionResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/giftCardRedemptions.md#giftcardredemptionscapture
     */
    captureWithResponse(gift_card_redemption_id: InputValue<string>, params?: (InputValue<GiftCardVersionRequestInput> | {
        "expected_version"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<GiftCardRedemptionResultResponse>>;
    /**
 * Posts an exact amount automatically or reserves it for one full manual capture. Insufficient
 * funds are rejected without a partial debit. Manual reservations default to 15 minutes and may be
 * bounded up to 24 hours. External integrations coordinate and compensate their other tenders
 * themselves. expected_version fences the version of the card in gift_card_id.
 * @see reference/giftCardRedemptions.md#giftcardredemptionscreate
 * POST /v1/gift-card-redemptions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCardRedemptions.create({amount_money: {amount: "100", currency: "USD"}, capture_mode:
 * "automatic", gift_card_id: "example", sale_reference: "example"}, { idempotencyKey:
 * idempotencyKey })
 */
    create(params: (InputValue<CreateGiftCardRedemptionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<GiftCardRedemptionResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/giftCardRedemptions.md#giftcardredemptionscreate
     */
    createWithResponse(params: (InputValue<CreateGiftCardRedemptionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<GiftCardRedemptionResultResponse>>;
    /**
 * Retrieves requested, reserved, captured, refunded and remaining refundable value with the
 * current reservation status.
 * @see reference/giftCardRedemptions.md#giftcardredemptionsget
 * GET /v1/gift-card-redemptions/{gift_card_redemption_id}
 * @example
 * client.giftCardRedemptions.get("example")
 */
    get(gift_card_redemption_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<GiftCardRedemption>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/giftCardRedemptions.md#giftcardredemptionsget
     */
    getWithResponse(gift_card_redemption_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<GiftCardRedemptionResponse>>;
    /**
 * Lists reservations and captured redemptions in descending ID order. Retrieve by idempotency_key
 * to recover an operation after a lost response.
 * @see reference/giftCardRedemptions.md#giftcardredemptionslist
 * GET /v1/gift-card-redemptions
 * @example
 * client.giftCardRedemptions.list()
 */
    list(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "gift_card_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sale_reference"?: InputValue<string>;
        "source_type"?: InputValue<Array<"external" | "flint_order">>;
        "status"?: InputValue<Array<"canceled" | "captured" | "expired" | "reserved">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<GiftCardRedemptionListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/giftCardRedemptions.md#giftcardredemptionslist
     */
    listWithResponse(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "gift_card_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sale_reference"?: InputValue<string>;
        "source_type"?: InputValue<Array<"external" | "flint_order">>;
        "status"?: InputValue<Array<"canceled" | "captured" | "expired" | "reserved">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<GiftCardRedemptionListResponse>>;
    /** Iterate pages lazily.
     * @see reference/giftCardRedemptions.md#giftcardredemptionslist
     */
    listPages(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "gift_card_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sale_reference"?: InputValue<string>;
        "source_type"?: InputValue<Array<"external" | "flint_order">>;
        "status"?: InputValue<Array<"canceled" | "captured" | "expired" | "reserved">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<GiftCardRedemptionListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/giftCardRedemptions.md#giftcardredemptionslist
     */
    listPagesWithResponse(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "gift_card_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sale_reference"?: InputValue<string>;
        "source_type"?: InputValue<Array<"external" | "flint_order">>;
        "status"?: InputValue<Array<"canceled" | "captured" | "expired" | "reserved">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<GiftCardRedemptionListResponse>>;
    /** Iterate items lazily.
     * @see reference/giftCardRedemptions.md#giftcardredemptionslist
     */
    listItems(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "gift_card_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sale_reference"?: InputValue<string>;
        "source_type"?: InputValue<Array<"external" | "flint_order">>;
        "status"?: InputValue<Array<"canceled" | "captured" | "expired" | "reserved">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<GiftCardRedemption>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly giftCardRedemptions: GiftCardRedemptionsResource;
}
