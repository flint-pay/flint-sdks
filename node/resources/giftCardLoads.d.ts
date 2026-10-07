export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { GiftCardCommandResponse } from '../declarations/GiftCardCommandResponse.js';
import type { GiftCardLoad } from '../declarations/GiftCardLoad.js';
import type { GiftCardLoadListResponse } from '../declarations/GiftCardLoadListResponse.js';
import type { GiftCardLoadResponse } from '../declarations/GiftCardLoadResponse.js';
import type { GiftCardLoadsCreateInput } from '../declarations/GiftCardLoadsCreateInput.js';
import type { GiftCardLoadsCreateResponse } from '../declarations/GiftCardLoadsCreateResponse.js';
import type { GiftCardLoadsGetInput } from '../declarations/GiftCardLoadsGetInput.js';
import type { GiftCardLoadsGetResponse } from '../declarations/GiftCardLoadsGetResponse.js';
import type { GiftCardLoadsListInput } from '../declarations/GiftCardLoadsListInput.js';
import type { GiftCardLoadsListResponse } from '../declarations/GiftCardLoadsListResponse.js';
import type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface GiftCardLoadsResource {
    /**
 * Adds positive value with separately recorded consideration and funding provenance. Limits apply to externally funded value and imports as well as Flint-funded sales. Loading a pending card activates it; loading a frozen card does not remove its restrictions.
 * POST /v1/gift-cards/{gift_card_id}/loads
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCardLoads.create("gc_01J00000000000000000000001", {consideration_money: {amount: "1000", currency: "USD"}, source: {buyer_id: "synthetic-buyer", funding_source_type: "external_payment", reference_id: "synthetic-funding-reference"}, value_money: {amount: "1000", currency: "USD"}}, { idempotencyKey: idempotencyKey })
 */
    create(gift_card_id: InputValue<string>, params: (InputValue<({ "consideration_money"?: ((({ "amount"?: string; }) & ({ "amount": string; "currency": string; })) | (null)); "expected_version"?: string; "source": ({ "funding_source_type"?: "external_payment" | "flint_payment" | "import"; }) & (({ "buyer_id"?: string; "funding_source_type": "external_payment" | "flint_payment" | "flint_manual_payment" | "import" | "adjustment" | "gift_card_refund" | "gift_card_purchase_refund_recovery"; "order_id"?: string; "order_manual_payment_id"?: never; "payment_intent_id"?: string; "reference_id": string; }) & ((({ "funding_source_type"?: ("external_payment") & ("external_payment"); "buyer_id": unknown; }) & (({ "payment_intent_id"?: never }) & ({ "order_id"?: never }))) | (({ "funding_source_type"?: ("flint_payment") & ("flint_payment"); "payment_intent_id": unknown; }) & ({ "order_manual_payment_id"?: never })) | (({ "funding_source_type"?: ("flint_manual_payment") & ("flint_manual_payment"); "order_id": unknown; "buyer_id": unknown; }) & ({ "payment_intent_id"?: never })) | (({ "funding_source_type"?: ("import") & ("import"); }) & (({ "payment_intent_id"?: never }) & ({ "order_id"?: never }))) | ({ "funding_source_type"?: ("adjustment") & ("adjustment"); }) | (({ "funding_source_type"?: ("gift_card_refund") & ("gift_card_refund"); }) & ({ "payment_intent_id"?: never })) | (({ "funding_source_type"?: ("gift_card_purchase_refund_recovery") & ("gift_card_purchase_refund_recovery"); }) & (({ "payment_intent_id"?: never }) & ({ "order_manual_payment_id"?: never }))))) & ({ "order_manual_payment_id"?: never }); "source_created_at"?: string | globalThis.Date; "value_money": ({ "amount"?: string; }) & ({ "amount": string; "currency": string; }); }) & ((({ "consideration_money": MoneyValueInput; "source": null | boolean | number | string | unknown[] | ({ "funding_source_type"?: "external_payment" | "flint_payment"; }); }) & ({ "source_created_at"?: never })) | ({ "consideration_money"?: (({ "amount": string; "currency": string; }) | (null)); "source": null | boolean | number | string | unknown[] | ({ "funding_source_type"?: ("import") & ("import"); }); }))>) & { "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<GiftCardCommandResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(gift_card_id: InputValue<string>, params: (InputValue<({ "consideration_money"?: ((({ "amount"?: string; }) & ({ "amount": string; "currency": string; })) | (null)); "expected_version"?: string; "source": ({ "funding_source_type"?: "external_payment" | "flint_payment" | "import"; }) & (({ "buyer_id"?: string; "funding_source_type": "external_payment" | "flint_payment" | "flint_manual_payment" | "import" | "adjustment" | "gift_card_refund" | "gift_card_purchase_refund_recovery"; "order_id"?: string; "order_manual_payment_id"?: never; "payment_intent_id"?: string; "reference_id": string; }) & ((({ "funding_source_type"?: ("external_payment") & ("external_payment"); "buyer_id": unknown; }) & (({ "payment_intent_id"?: never }) & ({ "order_id"?: never }))) | (({ "funding_source_type"?: ("flint_payment") & ("flint_payment"); "payment_intent_id": unknown; }) & ({ "order_manual_payment_id"?: never })) | (({ "funding_source_type"?: ("flint_manual_payment") & ("flint_manual_payment"); "order_id": unknown; "buyer_id": unknown; }) & ({ "payment_intent_id"?: never })) | (({ "funding_source_type"?: ("import") & ("import"); }) & (({ "payment_intent_id"?: never }) & ({ "order_id"?: never }))) | ({ "funding_source_type"?: ("adjustment") & ("adjustment"); }) | (({ "funding_source_type"?: ("gift_card_refund") & ("gift_card_refund"); }) & ({ "payment_intent_id"?: never })) | (({ "funding_source_type"?: ("gift_card_purchase_refund_recovery") & ("gift_card_purchase_refund_recovery"); }) & (({ "payment_intent_id"?: never }) & ({ "order_manual_payment_id"?: never }))))) & ({ "order_manual_payment_id"?: never }); "source_created_at"?: string | globalThis.Date; "value_money": ({ "amount"?: string; }) & ({ "amount": string; "currency": string; }); }) & ((({ "consideration_money": MoneyValueInput; "source": null | boolean | number | string | unknown[] | ({ "funding_source_type"?: "external_payment" | "flint_payment"; }); }) & ({ "source_created_at"?: never })) | ({ "consideration_money"?: (({ "amount": string; "currency": string; }) | (null)); "source": null | boolean | number | string | unknown[] | ({ "funding_source_type"?: ("import") & ("import"); }); }))>) & { "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<GiftCardLoadsCreateResponse>>;
    /**
 * Retrieves original value, consideration, funding provenance and remaining attributable value for one load.
 * GET /v1/gift-card-loads/{gift_card_load_id}
 * @example
 * client.giftCardLoads.get("example")
 */
    get(gift_card_load_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<GiftCardLoadResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(gift_card_load_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<GiftCardLoadsGetResponse>>;
    /**
 * Lists funding lots in descending ID order. Consideration may be null for imported balances whose original purchase price is unknown. The idempotency_key filter recovers a load after a lost command response.
 * GET /v1/gift-card-loads
 * @example
 * client.giftCardLoads.list()
 */
    list(params?: { "X-Request-Id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "gift_card_id"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "source_id"?: InputValue<string>; "source_type"?: InputValue<"adjustment" | "external_payment" | "flint_manual_payment" | "flint_payment" | "gift_card_purchase_refund_recovery" | "gift_card_refund" | "import">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<GiftCardLoadListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "X-Request-Id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "gift_card_id"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "source_id"?: InputValue<string>; "source_type"?: InputValue<"adjustment" | "external_payment" | "flint_manual_payment" | "flint_payment" | "gift_card_purchase_refund_recovery" | "gift_card_refund" | "import">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<GiftCardLoadsListResponse>>;
    listPages(params?: { "X-Request-Id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "gift_card_id"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "source_id"?: InputValue<string>; "source_type"?: InputValue<"adjustment" | "external_payment" | "flint_manual_payment" | "flint_payment" | "gift_card_purchase_refund_recovery" | "gift_card_refund" | "import">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<GiftCardLoadListResponse>;
    listPagesWithResponse(params?: { "X-Request-Id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "gift_card_id"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "source_id"?: InputValue<string>; "source_type"?: InputValue<"adjustment" | "external_payment" | "flint_manual_payment" | "flint_payment" | "gift_card_purchase_refund_recovery" | "gift_card_refund" | "import">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<GiftCardLoadsListResponse>>;
    listItems(params?: { "X-Request-Id"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "gift_card_id"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "source_id"?: InputValue<string>; "source_type"?: InputValue<"adjustment" | "external_payment" | "flint_manual_payment" | "flint_payment" | "gift_card_purchase_refund_recovery" | "gift_card_refund" | "import">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<GiftCardLoad>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly giftCardLoads: GiftCardLoadsResource;
}
export type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { GiftCardCommandResponse } from '../declarations/GiftCardCommandResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { GiftCardLoadsCreateResponse } from '../declarations/GiftCardLoadsCreateResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { GiftCardLoadResponse } from '../declarations/GiftCardLoadResponse.js';
export type { GiftCardLoadsGetResponse } from '../declarations/GiftCardLoadsGetResponse.js';
export type { GiftCardLoadListResponse } from '../declarations/GiftCardLoadListResponse.js';
export type { GiftCardLoadsListResponse } from '../declarations/GiftCardLoadsListResponse.js';
export type { GiftCardLoad } from '../declarations/GiftCardLoad.js';
export type { GiftCardLoadsCreateInput } from '../declarations/GiftCardLoadsCreateInput.js';
export type { GiftCardLoadsGetInput } from '../declarations/GiftCardLoadsGetInput.js';
export type { GiftCardLoadsListInput } from '../declarations/GiftCardLoadsListInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { GiftCardCommandResult } from '../declarations/GiftCardCommandResult.js';
export type { GiftCard } from '../declarations/GiftCard.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { GiftCardNotification } from '../declarations/GiftCardNotification.js';
export type { GiftCardNotificationDelivery } from '../declarations/GiftCardNotificationDelivery.js';
export type { GiftCardNotificationDeliveryAttempt } from '../declarations/GiftCardNotificationDeliveryAttempt.js';
export type { GiftCardNotificationProviderOutcome } from '../declarations/GiftCardNotificationProviderOutcome.js';
export type { GiftCardNotificationRecipient } from '../declarations/GiftCardNotificationRecipient.js';
export type { GiftCardRedemption } from '../declarations/GiftCardRedemption.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { NextActionMerchantAccountSession } from '../declarations/NextActionMerchantAccountSession.js';
export type { GiftCardFundingDispute } from '../declarations/GiftCardFundingDispute.js';
export type { GiftCardFundingLossResolution } from '../declarations/GiftCardFundingLossResolution.js';
export type { GiftCardPurchaseRefundValueHold } from '../declarations/GiftCardPurchaseRefundValueHold.js';
export type { GiftCardPurchaseRefundAllocation } from '../declarations/GiftCardPurchaseRefundAllocation.js';
export type { GiftCardPurchaseRefundRecovery } from '../declarations/GiftCardPurchaseRefundRecovery.js';
export type { GiftCardPurchaseRefundRecoveryDestination } from '../declarations/GiftCardPurchaseRefundRecoveryDestination.js';
export type { GiftCardPurchaseRefundValueAllocation } from '../declarations/GiftCardPurchaseRefundValueAllocation.js';
export type { GiftCardPurchaseRestoration } from '../declarations/GiftCardPurchaseRestoration.js';
export type { GiftCardRefundProvenance } from '../declarations/GiftCardRefundProvenance.js';
export type { GiftCardFundingSource } from '../declarations/GiftCardFundingSource.js';
export type { CreateGiftCardLoadRequestInput } from '../declarations/CreateGiftCardLoadRequestInput.js';
export { makeGiftCardCommandResponse } from '../declarations/makeGiftCardCommandResponse.js';
export { makeGiftCardLoadResponse } from '../declarations/makeGiftCardLoadResponse.js';
export { makeGiftCardLoadListResponse } from '../declarations/makeGiftCardLoadListResponse.js';
export { makeGiftCardLoad } from '../declarations/makeGiftCardLoad.js';
export { makeGiftCardCommandResult } from '../declarations/makeGiftCardCommandResult.js';
export { makeGiftCard } from '../declarations/makeGiftCard.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeGiftCardNotification } from '../declarations/makeGiftCardNotification.js';
export { makeGiftCardNotificationDelivery } from '../declarations/makeGiftCardNotificationDelivery.js';
export { makeGiftCardNotificationDeliveryAttempt } from '../declarations/makeGiftCardNotificationDeliveryAttempt.js';
export { makeGiftCardNotificationProviderOutcome } from '../declarations/makeGiftCardNotificationProviderOutcome.js';
export { makeGiftCardNotificationRecipient } from '../declarations/makeGiftCardNotificationRecipient.js';
export { makeGiftCardRedemption } from '../declarations/makeGiftCardRedemption.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeNextActionMerchantAccountSession } from '../declarations/makeNextActionMerchantAccountSession.js';
export { makeGiftCardFundingDispute } from '../declarations/makeGiftCardFundingDispute.js';
export { makeGiftCardFundingLossResolution } from '../declarations/makeGiftCardFundingLossResolution.js';
export { makeGiftCardPurchaseRefundValueHold } from '../declarations/makeGiftCardPurchaseRefundValueHold.js';
export { makeGiftCardPurchaseRefundAllocation } from '../declarations/makeGiftCardPurchaseRefundAllocation.js';
export { makeGiftCardPurchaseRefundRecovery } from '../declarations/makeGiftCardPurchaseRefundRecovery.js';
export { makeGiftCardPurchaseRefundRecoveryDestination } from '../declarations/makeGiftCardPurchaseRefundRecoveryDestination.js';
export { makeGiftCardPurchaseRefundValueAllocation } from '../declarations/makeGiftCardPurchaseRefundValueAllocation.js';
export { makeGiftCardPurchaseRestoration } from '../declarations/makeGiftCardPurchaseRestoration.js';
export { makeGiftCardRefundProvenance } from '../declarations/makeGiftCardRefundProvenance.js';
export { makeGiftCardFundingSource } from '../declarations/makeGiftCardFundingSource.js';
