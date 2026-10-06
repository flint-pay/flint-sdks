export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { GiftCardFundingDispositionResponse } from '../declarations/GiftCardFundingDispositionResponse.js';
import type { GiftCardFundingDispositionsCreateInput } from '../declarations/GiftCardFundingDispositionsCreateInput.js';
import type { GiftCardFundingDispositionsCreateResponse } from '../declarations/GiftCardFundingDispositionsCreateResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export interface GiftCardFundingDispositionsResource {
    /**
 * Accepts a confirmed funding dispute loss and honors all gift card value funded by that payment, including value restored to replacement cards. Records the dispute amount, original gift card consideration, honored value and preserved reservations. Clears only this dispute restriction; balances, unrelated restrictions and unresolved payment reservations remain intact. Requires gift card adjustment authority and a durable Idempotency-Key.
 * POST /v1/gift-card-funding-dispositions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCardFundingDispositions.create({disposition: "honor_value", dispute_id: "du_01J00000000000000000000001", reason_message: "Synthetic SDK example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "disposition": "honor_value"; "dispute_id": string; "reason_message": string; }>) & { "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<GiftCardFundingDispositionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "disposition": "honor_value"; "dispute_id": string; "reason_message": string; }>) & { "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<GiftCardFundingDispositionsCreateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly giftCardFundingDispositions: GiftCardFundingDispositionsResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { GiftCardFundingDispositionResponse } from '../declarations/GiftCardFundingDispositionResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { GiftCardFundingDispositionsCreateResponse } from '../declarations/GiftCardFundingDispositionsCreateResponse.js';
export type { GiftCardFundingDispositionsCreateInput } from '../declarations/GiftCardFundingDispositionsCreateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { GiftCardFundingDisposition } from '../declarations/GiftCardFundingDisposition.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { CreateGiftCardFundingDispositionRequestInput } from '../declarations/CreateGiftCardFundingDispositionRequestInput.js';
export { makeGiftCardFundingDispositionResponse } from '../declarations/makeGiftCardFundingDispositionResponse.js';
export { makeGiftCardFundingDisposition } from '../declarations/makeGiftCardFundingDisposition.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
