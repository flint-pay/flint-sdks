import type { InputValue } from '../runtime.js';
import type { CashOutGiftCardRequestInput, CashOutGiftCardResult, CashOutGiftCardResultResponse } from '../declarations/types-3.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { GiftCardCashOutsCreateInput } from '../declarations/types-18.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { _SdkRequiredIdempotency } from '../declarations/types-62.js';
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
export type { CashOutGiftCardRequestInput, CashOutGiftCardResult, CashOutGiftCardResultResponse } from '../declarations/types-3.js';
export type { _SdkRequiredIdempotency } from '../declarations/types-62.js';
export type { RequestOptions, ResourceReference, ResourceType, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type { GiftCardCashOutsCreateInput, GiftCard } from '../declarations/types-18.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { MoneyValueInput, MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-31.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { GiftCardRestriction, GiftCardTransaction } from '../declarations/types-19.js';
export { makeCashOutGiftCardRequest } from '../declarations/types-62.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export interface GiftCardCashOutsResource {
    /**
 * Records cash that the merchant attests it paid to the cardholder. Flint does not send cash. The
 * amount cannot exceed available value or consume payment reservations; cash_out_reference
 * identifies the cash disbursement the merchant made outside Flint. expected_version fences the
 * gift card version.
 * @see reference/giftCardCashOuts.md#giftcardcashoutscreate
 * POST /v1/gift-cards/{gift_card_id}/cash-out
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCardCashOuts.create("example", {amount_money: {amount: "100", currency: "USD"},
 * cash_out_reference: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(gift_card_id: InputValue<string>, params: (InputValue<CashOutGiftCardRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<CashOutGiftCardResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/giftCardCashOuts.md#giftcardcashoutscreate
     */
    createWithResponse(gift_card_id: InputValue<string>, params: (InputValue<CashOutGiftCardRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<CashOutGiftCardResultResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly giftCardCashOuts: GiftCardCashOutsResource;
}
