export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { CreateRefundResponse } from '../declarations/CreateRefundResponse.js';
import type { CreditNoteRefundListResponse } from '../declarations/CreditNoteRefundListResponse.js';
import type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
import type { Refund } from '../declarations/Refund.js';
import type { RefundChargeInput } from '../declarations/RefundChargeInput.js';
import type { RefundLineItemInput } from '../declarations/RefundLineItemInput.js';
import type { RefundResponse } from '../declarations/RefundResponse.js';
import type { RefundTaxBreakdownRefundInInput } from '../declarations/RefundTaxBreakdownRefundInInput.js';
import type { RefundTenderAllocationRequestInput } from '../declarations/RefundTenderAllocationRequestInput.js';
import type { RefundsCreateInput } from '../declarations/RefundsCreateInput.js';
import type { RefundsCreateResponse } from '../declarations/RefundsCreateResponse.js';
import type { RefundsGetInput } from '../declarations/RefundsGetInput.js';
import type { RefundsGetResponse } from '../declarations/RefundsGetResponse.js';
import type { RefundsListInput } from '../declarations/RefundsListInput.js';
import type { RefundsListResponse } from '../declarations/RefundsListResponse.js';
import type { RefundsUpdateInput } from '../declarations/RefundsUpdateInput.js';
import type { RefundsUpdateResponse } from '../declarations/RefundsUpdateResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface RefundsResource {
    /**
 * Creates a refund for an order or payment intent. This is a financial operation.
 * POST /v1/refunds
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.refunds.create({order_id: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<({ "amount_money"?: MoneyValueInput; "charges"?: Array<RefundChargeInput>; "external_reference_id"?: string; "gift_card_load_id"?: string; "line_items"?: Array<RefundLineItemInput>; "metadata"?: Record<string, string>; "order_id"?: string; "payment_intent_id"?: string; "reason"?: "duplicate" | "fraudulent" | "requested_by_customer" | "defective_product" | "wrong_item_shipped" | "never_received" | "not_as_described" | "arrived_too_late" | "customer_changed_mind" | "better_price_found" | "accidental_order" | "other"; "reason_message"?: string; "refund_method"?: "original_payment"; "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundInInput>; "tender_allocations"?: Array<RefundTenderAllocationRequestInput>; }) & (({ "order_id": unknown; }) | ({ "payment_intent_id": unknown; }) | ({ "tender_allocations": unknown; }) | ({ "gift_card_load_id": unknown; }))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CreateRefundResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<({ "amount_money"?: MoneyValueInput; "charges"?: Array<RefundChargeInput>; "external_reference_id"?: string; "gift_card_load_id"?: string; "line_items"?: Array<RefundLineItemInput>; "metadata"?: Record<string, string>; "order_id"?: string; "payment_intent_id"?: string; "reason"?: "duplicate" | "fraudulent" | "requested_by_customer" | "defective_product" | "wrong_item_shipped" | "never_received" | "not_as_described" | "arrived_too_late" | "customer_changed_mind" | "better_price_found" | "accidental_order" | "other"; "reason_message"?: string; "refund_method"?: "original_payment"; "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundInInput>; "tender_allocations"?: Array<RefundTenderAllocationRequestInput>; }) & (({ "order_id": unknown; }) | ({ "payment_intent_id": unknown; }) | ({ "tender_allocations": unknown; }) | ({ "gift_card_load_id": unknown; }))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<RefundsCreateResponse>>;
    /**
 * Returns a single refund by ID.
 * GET /v1/refunds/{refund_id}
 * @example
 * client.refunds.get("example")
 */
    get(refund_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"customer" | "order" | "payment_intent" | "payment_refunds.payment_intent">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<RefundResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(refund_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"customer" | "order" | "payment_intent" | "payment_refunds.payment_intent">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<RefundsGetResponse>>;
    /**
 * Returns a paginated list of refunds for the authenticated merchant.
 * GET /v1/refunds
 * @example
 * client.refunds.list()
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "order_id"?: InputValue<string>; "payment_intent_id"?: InputValue<string>; "customer_id"?: InputValue<string>; "status"?: InputValue<"pending" | "in_transit" | "succeeded" | "failed" | "requires_action" | "canceled" | "partially_succeeded">; "reason"?: InputValue<Array<"duplicate" | "fraudulent" | "requested_by_customer" | "defective_product" | "wrong_item_shipped" | "never_received" | "not_as_described" | "arrived_too_late" | "customer_changed_mind" | "better_price_found" | "accidental_order" | "other">>; "refund_method"?: InputValue<"original_payment">; "min_amount"?: InputValue<string>; "max_amount"?: InputValue<string>; "currency"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_resolution_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "amount">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<CreditNoteRefundListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "order_id"?: InputValue<string>; "payment_intent_id"?: InputValue<string>; "customer_id"?: InputValue<string>; "status"?: InputValue<"pending" | "in_transit" | "succeeded" | "failed" | "requires_action" | "canceled" | "partially_succeeded">; "reason"?: InputValue<Array<"duplicate" | "fraudulent" | "requested_by_customer" | "defective_product" | "wrong_item_shipped" | "never_received" | "not_as_described" | "arrived_too_late" | "customer_changed_mind" | "better_price_found" | "accidental_order" | "other">>; "refund_method"?: InputValue<"original_payment">; "min_amount"?: InputValue<string>; "max_amount"?: InputValue<string>; "currency"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_resolution_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "amount">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<RefundsListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "order_id"?: InputValue<string>; "payment_intent_id"?: InputValue<string>; "customer_id"?: InputValue<string>; "status"?: InputValue<"pending" | "in_transit" | "succeeded" | "failed" | "requires_action" | "canceled" | "partially_succeeded">; "reason"?: InputValue<Array<"duplicate" | "fraudulent" | "requested_by_customer" | "defective_product" | "wrong_item_shipped" | "never_received" | "not_as_described" | "arrived_too_late" | "customer_changed_mind" | "better_price_found" | "accidental_order" | "other">>; "refund_method"?: InputValue<"original_payment">; "min_amount"?: InputValue<string>; "max_amount"?: InputValue<string>; "currency"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_resolution_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "amount">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<CreditNoteRefundListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "order_id"?: InputValue<string>; "payment_intent_id"?: InputValue<string>; "customer_id"?: InputValue<string>; "status"?: InputValue<"pending" | "in_transit" | "succeeded" | "failed" | "requires_action" | "canceled" | "partially_succeeded">; "reason"?: InputValue<Array<"duplicate" | "fraudulent" | "requested_by_customer" | "defective_product" | "wrong_item_shipped" | "never_received" | "not_as_described" | "arrived_too_late" | "customer_changed_mind" | "better_price_found" | "accidental_order" | "other">>; "refund_method"?: InputValue<"original_payment">; "min_amount"?: InputValue<string>; "max_amount"?: InputValue<string>; "currency"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_resolution_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "amount">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<RefundsListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "order_id"?: InputValue<string>; "payment_intent_id"?: InputValue<string>; "customer_id"?: InputValue<string>; "status"?: InputValue<"pending" | "in_transit" | "succeeded" | "failed" | "requires_action" | "canceled" | "partially_succeeded">; "reason"?: InputValue<Array<"duplicate" | "fraudulent" | "requested_by_customer" | "defective_product" | "wrong_item_shipped" | "never_received" | "not_as_described" | "arrived_too_late" | "customer_changed_mind" | "better_price_found" | "accidental_order" | "other">>; "refund_method"?: InputValue<"original_payment">; "min_amount"?: InputValue<string>; "max_amount"?: InputValue<string>; "currency"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_resolution_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "amount">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<Refund>;
    /**
 * Updates refund metadata.
 * PATCH /v1/refunds/{refund_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.refunds.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(refund_id: InputValue<string>, params: (InputValue<{ "metadata"?: Record<string, string | null> | null; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<RefundResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(refund_id: InputValue<string>, params: (InputValue<{ "metadata"?: Record<string, string | null> | null; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<RefundsUpdateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly refunds: RefundsResource;
}
export type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
export type { RefundChargeInput } from '../declarations/RefundChargeInput.js';
export type { RefundLineItemInput } from '../declarations/RefundLineItemInput.js';
export type { RefundTaxBreakdownRefundInInput } from '../declarations/RefundTaxBreakdownRefundInInput.js';
export type { RefundTenderAllocationRequestInput } from '../declarations/RefundTenderAllocationRequestInput.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { CreateRefundResponse } from '../declarations/CreateRefundResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { RefundsCreateResponse } from '../declarations/RefundsCreateResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RefundResponse } from '../declarations/RefundResponse.js';
export type { RefundsGetResponse } from '../declarations/RefundsGetResponse.js';
export type { CreditNoteRefundListResponse } from '../declarations/CreditNoteRefundListResponse.js';
export type { RefundsListResponse } from '../declarations/RefundsListResponse.js';
export type { Refund } from '../declarations/Refund.js';
export type { RefundsUpdateResponse } from '../declarations/RefundsUpdateResponse.js';
export type { RefundsCreateInput } from '../declarations/RefundsCreateInput.js';
export type { RefundsGetInput } from '../declarations/RefundsGetInput.js';
export type { RefundsListInput } from '../declarations/RefundsListInput.js';
export type { RefundsUpdateInput } from '../declarations/RefundsUpdateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { RefundLineItemAdjustmentRefundInInput } from '../declarations/RefundLineItemAdjustmentRefundInInput.js';
export type { RefundLineItemAdjustmentInInput } from '../declarations/RefundLineItemAdjustmentInInput.js';
export type { RefundAdjustmentReasonInput } from '../declarations/RefundAdjustmentReasonInput.js';
export type { RefundAdjustmentAuditInput } from '../declarations/RefundAdjustmentAuditInput.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { RefundGiftCardCode } from '../declarations/RefundGiftCardCode.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { NextActionMerchantAccountSession } from '../declarations/NextActionMerchantAccountSession.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { RefundLineItemAllocation } from '../declarations/RefundLineItemAllocation.js';
export type { RefundLineItemAdjustmentRefund } from '../declarations/RefundLineItemAdjustmentRefund.js';
export type { RefundLineItemAdjustment } from '../declarations/RefundLineItemAdjustment.js';
export type { RefundAdjustmentReason } from '../declarations/RefundAdjustmentReason.js';
export type { RefundLineItemAutomaticRefund } from '../declarations/RefundLineItemAutomaticRefund.js';
export type { CategoryReference } from '../declarations/CategoryReference.js';
export type { RefundLineItemModifierAllocation } from '../declarations/RefundLineItemModifierAllocation.js';
export type { SelectedProductOption } from '../declarations/SelectedProductOption.js';
export type { RefundTaxBreakdownRefund } from '../declarations/RefundTaxBreakdownRefund.js';
export type { PricingAmounts } from '../declarations/PricingAmounts.js';
export type { SettlementAmounts } from '../declarations/SettlementAmounts.js';
export type { SignedMoney } from '../declarations/SignedMoney.js';
export type { PaymentSourceSummary } from '../declarations/PaymentSourceSummary.js';
export type { PaymentSourceAchDebitSummary } from '../declarations/PaymentSourceAchDebitSummary.js';
export type { PaymentSourceCardSummary } from '../declarations/PaymentSourceCardSummary.js';
export type { PaymentRefund } from '../declarations/PaymentRefund.js';
export type { RefundTenderAllocation } from '../declarations/RefundTenderAllocation.js';
export type { RefundGiftCardDestination } from '../declarations/RefundGiftCardDestination.js';
export type { RefundUnissuedGiftCardRecovery } from '../declarations/RefundUnissuedGiftCardRecovery.js';
export type { CreateRefundRequestInput } from '../declarations/CreateRefundRequestInput.js';
export type { UpdatePayoutDestinationRequestInput } from '../declarations/UpdatePayoutDestinationRequestInput.js';
export { makeCreateRefundResponse } from '../declarations/makeCreateRefundResponse.js';
export { makeRefundResponse } from '../declarations/makeRefundResponse.js';
export { makeCreditNoteRefundListResponse } from '../declarations/makeCreditNoteRefundListResponse.js';
export { makeRefund } from '../declarations/makeRefund.js';
export { makeRefundGiftCardCode } from '../declarations/makeRefundGiftCardCode.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeNextActionMerchantAccountSession } from '../declarations/makeNextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeRefundLineItemAllocation } from '../declarations/makeRefundLineItemAllocation.js';
export { makeRefundLineItemAdjustmentRefund } from '../declarations/makeRefundLineItemAdjustmentRefund.js';
export { makeRefundLineItemAdjustment } from '../declarations/makeRefundLineItemAdjustment.js';
export { makeRefundAdjustmentReason } from '../declarations/makeRefundAdjustmentReason.js';
export { makeRefundLineItemAutomaticRefund } from '../declarations/makeRefundLineItemAutomaticRefund.js';
export { makeCategoryReference } from '../declarations/makeCategoryReference.js';
export { makeRefundLineItemModifierAllocation } from '../declarations/makeRefundLineItemModifierAllocation.js';
export { makeSelectedProductOption } from '../declarations/makeSelectedProductOption.js';
export { makeRefundTaxBreakdownRefund } from '../declarations/makeRefundTaxBreakdownRefund.js';
export { makePricingAmounts } from '../declarations/makePricingAmounts.js';
export { makeSettlementAmounts } from '../declarations/makeSettlementAmounts.js';
export { makeSignedMoney } from '../declarations/makeSignedMoney.js';
export { makePaymentSourceSummary } from '../declarations/makePaymentSourceSummary.js';
export { makePaymentSourceAchDebitSummary } from '../declarations/makePaymentSourceAchDebitSummary.js';
export { makePaymentSourceCardSummary } from '../declarations/makePaymentSourceCardSummary.js';
export { makePaymentRefund } from '../declarations/makePaymentRefund.js';
export { makeRefundTenderAllocation } from '../declarations/makeRefundTenderAllocation.js';
export { makeRefundGiftCardDestination } from '../declarations/makeRefundGiftCardDestination.js';
export { makeRefundUnissuedGiftCardRecovery } from '../declarations/makeRefundUnissuedGiftCardRecovery.js';
