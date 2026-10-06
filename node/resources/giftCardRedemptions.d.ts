export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { GiftCardCommandResponse } from '../declarations/GiftCardCommandResponse.js';
import type { GiftCardRedemption } from '../declarations/GiftCardRedemption.js';
import type { GiftCardRedemptionListResponse } from '../declarations/GiftCardRedemptionListResponse.js';
import type { GiftCardRedemptionResponse } from '../declarations/GiftCardRedemptionResponse.js';
import type { GiftCardRedemptionsCancelInput } from '../declarations/GiftCardRedemptionsCancelInput.js';
import type { GiftCardRedemptionsCancelResponse } from '../declarations/GiftCardRedemptionsCancelResponse.js';
import type { GiftCardRedemptionsCaptureInput } from '../declarations/GiftCardRedemptionsCaptureInput.js';
import type { GiftCardRedemptionsCaptureResponse } from '../declarations/GiftCardRedemptionsCaptureResponse.js';
import type { GiftCardRedemptionsCreateInput } from '../declarations/GiftCardRedemptionsCreateInput.js';
import type { GiftCardRedemptionsCreateResponse } from '../declarations/GiftCardRedemptionsCreateResponse.js';
import type { GiftCardRedemptionsGetInput } from '../declarations/GiftCardRedemptionsGetInput.js';
import type { GiftCardRedemptionsGetResponse } from '../declarations/GiftCardRedemptionsGetResponse.js';
import type { GiftCardRedemptionsListInput } from '../declarations/GiftCardRedemptionsListInput.js';
import type { GiftCardRedemptionsListResponse } from '../declarations/GiftCardRedemptionsListResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface GiftCardRedemptionsResource {
    /**
 * Releases an uncaptured standalone reservation without posting a debit or refund. Flint order reservations cannot be released while a processor outcome is unresolved.
 * POST /v1/gift-card-redemptions/{gift_card_redemption_id}/cancel
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCardRedemptions.cancel("example", {}, { idempotencyKey: idempotencyKey })
 */
    cancel(gift_card_redemption_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; }>) & { "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<GiftCardCommandResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    cancelWithResponse(gift_card_redemption_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; }>) & { "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<GiftCardRedemptionsCancelResponse>>;
    /**
 * Posts the full reserved amount before the manual reservation expires. Capturing and expiry use the same concurrency fence. Flint order reservations are resolved by their payment attempt and cannot be captured through this standalone operation.
 * POST /v1/gift-card-redemptions/{gift_card_redemption_id}/capture
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCardRedemptions.capture("example", {}, { idempotencyKey: idempotencyKey })
 */
    capture(gift_card_redemption_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; }>) & { "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<GiftCardCommandResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    captureWithResponse(gift_card_redemption_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; }>) & { "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<GiftCardRedemptionsCaptureResponse>>;
    /**
 * Posts an exact amount automatically or reserves it for one full manual capture. Insufficient funds are rejected without a partial debit. Manual reservations default to 15 minutes and may be bounded up to 24 hours. External integrations coordinate and compensate their other tenders themselves.
 * POST /v1/gift-card-redemptions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCardRedemptions.create({amount_money: {amount: "100", currency: "USD"}, capture_mode: "automatic", external_reference_id: "sdk-example", gift_card_id: "gc_01J00000000000000000000001"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<({ "amount_money": ({ "amount"?: string; }) & ({ "amount": string; "currency": string; }); "capture_mode": "automatic" | "manual"; "expected_version"?: string; "expires_at"?: string | globalThis.Date; "external_reference_id": string; "gift_card_id": string; }) & ((({ "capture_mode": ("automatic") & ("automatic"); }) & ({ "expires_at"?: never })) | ({ "capture_mode": ("manual") & ("manual"); }))>) & { "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<GiftCardCommandResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<({ "amount_money": ({ "amount"?: string; }) & ({ "amount": string; "currency": string; }); "capture_mode": "automatic" | "manual"; "expected_version"?: string; "expires_at"?: string | globalThis.Date; "external_reference_id": string; "gift_card_id": string; }) & ((({ "capture_mode": ("automatic") & ("automatic"); }) & ({ "expires_at"?: never })) | ({ "capture_mode": ("manual") & ("manual"); }))>) & { "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<GiftCardRedemptionsCreateResponse>>;
    /**
 * Retrieves requested, reserved, captured, refunded and remaining refundable value with the current reservation status.
 * GET /v1/gift-card-redemptions/{gift_card_redemption_id}
 * @example
 * client.giftCardRedemptions.get("example")
 */
    get(gift_card_redemption_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<GiftCardRedemptionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(gift_card_redemption_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<GiftCardRedemptionsGetResponse>>;
    /**
 * Lists reservations and captured redemptions in descending ID order. Retrieve by idempotency_key to recover an operation after a lost response.
 * GET /v1/gift-card-redemptions
 * @example
 * client.giftCardRedemptions.list()
 */
    list(params?: { "X-Request-Id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "external_reference_id"?: InputValue<string>; "gift_card_id"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "source_type"?: InputValue<"external" | "flint_order">; "status"?: InputValue<"canceled" | "captured" | "expired" | "reserved">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<GiftCardRedemptionListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "X-Request-Id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "external_reference_id"?: InputValue<string>; "gift_card_id"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "source_type"?: InputValue<"external" | "flint_order">; "status"?: InputValue<"canceled" | "captured" | "expired" | "reserved">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<GiftCardRedemptionsListResponse>>;
    listPages(params?: { "X-Request-Id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "external_reference_id"?: InputValue<string>; "gift_card_id"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "source_type"?: InputValue<"external" | "flint_order">; "status"?: InputValue<"canceled" | "captured" | "expired" | "reserved">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<GiftCardRedemptionListResponse>;
    listPagesWithResponse(params?: { "X-Request-Id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "external_reference_id"?: InputValue<string>; "gift_card_id"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "source_type"?: InputValue<"external" | "flint_order">; "status"?: InputValue<"canceled" | "captured" | "expired" | "reserved">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<GiftCardRedemptionsListResponse>>;
    listItems(params?: { "X-Request-Id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "external_reference_id"?: InputValue<string>; "gift_card_id"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "source_type"?: InputValue<"external" | "flint_order">; "status"?: InputValue<"canceled" | "captured" | "expired" | "reserved">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<GiftCardRedemption>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly giftCardRedemptions: GiftCardRedemptionsResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { GiftCardCommandResponse } from '../declarations/GiftCardCommandResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { GiftCardRedemptionsCancelResponse } from '../declarations/GiftCardRedemptionsCancelResponse.js';
export type { GiftCardRedemptionsCaptureResponse } from '../declarations/GiftCardRedemptionsCaptureResponse.js';
export type { GiftCardRedemptionsCreateResponse } from '../declarations/GiftCardRedemptionsCreateResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { GiftCardRedemptionResponse } from '../declarations/GiftCardRedemptionResponse.js';
export type { GiftCardRedemptionsGetResponse } from '../declarations/GiftCardRedemptionsGetResponse.js';
export type { GiftCardRedemptionListResponse } from '../declarations/GiftCardRedemptionListResponse.js';
export type { GiftCardRedemptionsListResponse } from '../declarations/GiftCardRedemptionsListResponse.js';
export type { GiftCardRedemption } from '../declarations/GiftCardRedemption.js';
export type { GiftCardRedemptionsCancelInput } from '../declarations/GiftCardRedemptionsCancelInput.js';
export type { GiftCardRedemptionsCaptureInput } from '../declarations/GiftCardRedemptionsCaptureInput.js';
export type { GiftCardRedemptionsCreateInput } from '../declarations/GiftCardRedemptionsCreateInput.js';
export type { GiftCardRedemptionsGetInput } from '../declarations/GiftCardRedemptionsGetInput.js';
export type { GiftCardRedemptionsListInput } from '../declarations/GiftCardRedemptionsListInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { GiftCardCommandResult } from '../declarations/GiftCardCommandResult.js';
export type { GiftCard } from '../declarations/GiftCard.js';
export type { GiftCardLoad } from '../declarations/GiftCardLoad.js';
export type { GiftCardFundingDispute } from '../declarations/GiftCardFundingDispute.js';
export type { GiftCardPurchaseRefundValueHold } from '../declarations/GiftCardPurchaseRefundValueHold.js';
export type { GiftCardPurchaseRefundAllocation } from '../declarations/GiftCardPurchaseRefundAllocation.js';
export type { GiftCardPurchaseRefundRecoveryDestination } from '../declarations/GiftCardPurchaseRefundRecoveryDestination.js';
export type { GiftCardPurchaseRefundValueAllocation } from '../declarations/GiftCardPurchaseRefundValueAllocation.js';
export type { GiftCardNotification } from '../declarations/GiftCardNotification.js';
export type { GiftCardNotificationDeliveryAttempt } from '../declarations/GiftCardNotificationDeliveryAttempt.js';
export type { GiftCardNotificationProviderOutcome } from '../declarations/GiftCardNotificationProviderOutcome.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { ConfirmReturnResolutionRequestInput } from '../declarations/ConfirmReturnResolutionRequestInput.js';
export type { CreateGiftCardRedemptionRequestInput } from '../declarations/CreateGiftCardRedemptionRequestInput.js';
export { makeGiftCardCommandResponse } from '../declarations/makeGiftCardCommandResponse.js';
export { makeGiftCardRedemptionResponse } from '../declarations/makeGiftCardRedemptionResponse.js';
export { makeGiftCardRedemptionListResponse } from '../declarations/makeGiftCardRedemptionListResponse.js';
export { makeGiftCardRedemption } from '../declarations/makeGiftCardRedemption.js';
export { makeGiftCardCommandResult } from '../declarations/makeGiftCardCommandResult.js';
export { makeGiftCard } from '../declarations/makeGiftCard.js';
export { makeGiftCardLoad } from '../declarations/makeGiftCardLoad.js';
export { makeGiftCardFundingDispute } from '../declarations/makeGiftCardFundingDispute.js';
export { makeGiftCardPurchaseRefundValueHold } from '../declarations/makeGiftCardPurchaseRefundValueHold.js';
export { makeGiftCardPurchaseRefundAllocation } from '../declarations/makeGiftCardPurchaseRefundAllocation.js';
export { makeGiftCardPurchaseRefundRecoveryDestination } from '../declarations/makeGiftCardPurchaseRefundRecoveryDestination.js';
export { makeGiftCardPurchaseRefundValueAllocation } from '../declarations/makeGiftCardPurchaseRefundValueAllocation.js';
export { makeGiftCardNotification } from '../declarations/makeGiftCardNotification.js';
export { makeGiftCardNotificationDeliveryAttempt } from '../declarations/makeGiftCardNotificationDeliveryAttempt.js';
export { makeGiftCardNotificationProviderOutcome } from '../declarations/makeGiftCardNotificationProviderOutcome.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
