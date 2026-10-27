import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateRefundRequestInput, CreateRefundResponse, CreateRefundResult } from '../declarations/types-8.js';
import type {
    Refund,
    RefundListResponse,
    RefundResponse,
    RefundsCreateInput,
    RefundsGetInput,
    RefundsListInput,
    RefundsUpdateInput
} from '../declarations/types-39.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { UpdateRefundRequestInput } from '../declarations/types-49.js';
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
    SdkErrorDetails
} from '../runtime.js';
export type {
    CreateRefundRequestInput,
    CreateRefundResult,
    CreateRefundResponse,
    CreateRefundRequestFullInput,
    CreateRefundRequestAmountInput,
    CreateRefundRequestTargetsInput
} from '../declarations/types-8.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type { SdkResponse, SelectedProductOption, SettlementAmounts } from '../declarations/types-44.js';
export type {
    Refund,
    RefundResponse,
    RefundListResponse,
    RefundsCreateInput,
    RefundsGetInput,
    RefundsListInput,
    RefundsUpdateInput,
    RefundChargeInput,
    RefundDestinationsInput,
    RefundLineItemInput,
    RefundLineItemAdjustmentRefundInInput,
    RefundLineItemAdjustmentInInput,
    RefundAdjustmentReasonRequestInput,
    RefundAdjustmentAuditInput,
    RefundTaxBreakdownRefundInInput,
    RefundTenderAllocationRequestInput,
    RefundTenderAllocationInputPaymentIntentInput,
    RefundTenderAllocationInputGiftCardRedemptionInput,
    RefundGiftCardCode,
    RefundLineItemAllocation,
    RefundLineItemAdjustmentRefund,
    RefundLineItemAdjustment,
    RefundAdjustmentReason,
    RefundLineItemAutomaticRefund,
    RefundLineItemModifierAllocation,
    RefundTaxBreakdownRefund,
    RefundTenderAllocation,
    RefundUnissuedGiftCardRecovery
} from '../declarations/types-39.js';
export type { UpdateRefundRequestInput } from '../declarations/types-49.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { MoneyValueInput, MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-31.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { ExpandedCustomerSummary, ExpandedOrderSummary, ExpandedPaymentIntentSummary } from '../declarations/types-16.js';
export type { CategoryReference, CheckoutBuyerContact } from '../declarations/types-3.js';
export type { PricingAmounts } from '../declarations/types-37.js';
export type { PaymentSourceSummary, PaymentSourceAchDebitSummary, PaymentSourceCardSummary, PaymentRefund } from '../declarations/types-36.js';
export type { OrderGiftCardAllocation } from '../declarations/types-32.js';
export {
    makeCreateRefundRequest,
    makeCreateRefundRequestAmount,
    makeCreateRefundRequestFull,
    makeCreateRefundRequestTargets
} from '../declarations/types-64.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export {
    makeRefundAdjustmentAudit,
    makeRefundAdjustmentReasonRequest,
    makeRefundCharge,
    makeRefundDestinations,
    makeRefundLineItem,
    makeRefundLineItemAdjustmentIn,
    makeRefundLineItemAdjustmentRefundIn,
    makeRefundTaxBreakdownRefundIn,
    makeRefundTenderAllocationInputGiftCardRedemption,
    makeRefundTenderAllocationInputPaymentIntent,
    makeRefundTenderAllocationRequest
} from '../declarations/types-70.js';
export { makeUpdateRefundRequest } from '../declarations/types-73.js';
export interface RefundsResource {
    /**
 * Creates a refund for an order, a payment intent, a captured gift card redemption, or a gift card
 * load. Set refund_type to full for the full remaining refundable amount, amount for an explicit
 * amount_money, or targets for named line items, charges, and taxes. To refund a gift card
 * redemption made outside a Flint order, set refund_type to amount and send one tender_allocations
 * entry per redemption, with no order_id. A created refund returns 201 even when processing fails;
 * inspect status and failure_reason. A same-key replay returns the original refund without another
 * money attempt. This is a financial operation.
 * @see reference/refunds.md#refundscreate
 * POST /v1/refunds
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.refunds.create({refund_type: "full", order_id: "example"}, { idempotencyKey:
 * idempotencyKey })
 */
    create(params: (InputValue<CreateRefundRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<CreateRefundResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/refunds.md#refundscreate
     */
    createWithResponse(params: (InputValue<CreateRefundRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<CreateRefundResponse>>;
    /**
 * Returns a single refund by ID.
 * @see reference/refunds.md#refundsget
 * GET /v1/refunds/{refund_id}
 * @example
 * client.refunds.get("example")
 */
    get(refund_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"customer" | "order" | "payment_intent" | "payment_refunds.payment_intent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<Refund>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/refunds.md#refundsget
     */
    getWithResponse(refund_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"customer" | "order" | "payment_intent" | "payment_refunds.payment_intent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<RefundResponse>>;
    /**
 * Returns a paginated list of refunds for the authenticated merchant.
 * @see reference/refunds.md#refundslist
 * GET /v1/refunds
 * @example
 * client.refunds.list()
 */
    list(params?: {
        "idempotency_key"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "payment_intent_id"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending" | "succeeded" | "partially_succeeded" | "failed">>;
        "reason"?: InputValue<Array<"duplicate"
            | "fraudulent"
            | "requested_by_customer"
            | "defective_product"
            | "wrong_item_shipped"
            | "never_received"
            | "not_as_described"
            | "arrived_too_late"
            | "customer_changed_mind"
            | "better_price_found"
            | "accidental_order"
            | "other">>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_resolution_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<RefundListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/refunds.md#refundslist
     */
    listWithResponse(params?: {
        "idempotency_key"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "payment_intent_id"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending" | "succeeded" | "partially_succeeded" | "failed">>;
        "reason"?: InputValue<Array<"duplicate"
            | "fraudulent"
            | "requested_by_customer"
            | "defective_product"
            | "wrong_item_shipped"
            | "never_received"
            | "not_as_described"
            | "arrived_too_late"
            | "customer_changed_mind"
            | "better_price_found"
            | "accidental_order"
            | "other">>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_resolution_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<RefundListResponse>>;
    /** Iterate pages lazily.
     * @see reference/refunds.md#refundslist
     */
    listPages(params?: {
        "idempotency_key"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "payment_intent_id"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending" | "succeeded" | "partially_succeeded" | "failed">>;
        "reason"?: InputValue<Array<"duplicate"
            | "fraudulent"
            | "requested_by_customer"
            | "defective_product"
            | "wrong_item_shipped"
            | "never_received"
            | "not_as_described"
            | "arrived_too_late"
            | "customer_changed_mind"
            | "better_price_found"
            | "accidental_order"
            | "other">>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_resolution_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<RefundListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/refunds.md#refundslist
     */
    listPagesWithResponse(params?: {
        "idempotency_key"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "payment_intent_id"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending" | "succeeded" | "partially_succeeded" | "failed">>;
        "reason"?: InputValue<Array<"duplicate"
            | "fraudulent"
            | "requested_by_customer"
            | "defective_product"
            | "wrong_item_shipped"
            | "never_received"
            | "not_as_described"
            | "arrived_too_late"
            | "customer_changed_mind"
            | "better_price_found"
            | "accidental_order"
            | "other">>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_resolution_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<RefundListResponse>>;
    /** Iterate items lazily.
     * @see reference/refunds.md#refundslist
     */
    listItems(params?: {
        "idempotency_key"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "payment_intent_id"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending" | "succeeded" | "partially_succeeded" | "failed">>;
        "reason"?: InputValue<Array<"duplicate"
            | "fraudulent"
            | "requested_by_customer"
            | "defective_product"
            | "wrong_item_shipped"
            | "never_received"
            | "not_as_described"
            | "arrived_too_late"
            | "customer_changed_mind"
            | "better_price_found"
            | "accidental_order"
            | "other">>;
        "min_amount"?: InputValue<`${bigint}` | bigint>;
        "max_amount"?: InputValue<`${bigint}` | bigint>;
        "currency"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_resolution_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Refund>;
    /**
 * Updates refund metadata and external_reference_id.
 * @see reference/refunds.md#refundsupdate
 * PATCH /v1/refunds/{refund_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.refunds.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(refund_id: InputValue<string>, params: (InputValue<UpdateRefundRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Refund>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/refunds.md#refundsupdate
     */
    updateWithResponse(refund_id: InputValue<string>, params: (InputValue<UpdateRefundRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<RefundResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly refunds: RefundsResource;
}
