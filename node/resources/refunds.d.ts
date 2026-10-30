import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { CreateRefundResponse, CreateRefundResult } from '../declarations/types-10.js';
import type { Refund, RefundListResponse, RefundResponse } from '../declarations/types-46.js';
import type { RefundsCreateParams, RefundsGetParams, RefundsListParams, RefundsUpdateParams, RequestOptions } from '../declarations/types-47.js';
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
    RefundsCreateParams,
    RequestOptions,
    RefundsGetParams,
    RefundsListParams,
    RefundsUpdateParams,
    RefundTaxBreakdownRefundInInput,
    RefundTenderAllocationRequestInput,
    RefundTenderAllocationInputPaymentIntentInput,
    RefundTenderAllocationInputGiftCardRedemptionInput,
    RefundTaxBreakdownRefund,
    RefundTenderAllocation,
    RefundUnissuedGiftCardRecovery
} from '../declarations/types-47.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type {
    CreateRefundResult,
    CreateRefundResponse,
    CreateRefundRequestInput,
    CreateRefundRequestFullInput,
    CreateRefundRequestAmountInput,
    CreateRefundRequestTargetsInput
} from '../declarations/types-10.js';
export type {
    Refund,
    RefundResponse,
    RefundListResponse,
    RefundChargeInput,
    RefundDestinationsInput,
    RefundLineItemInput,
    RefundLineItemAdjustmentRefundInInput,
    RefundLineItemAdjustmentInInput,
    RefundAdjustmentReasonRequestInput,
    RefundAdjustmentAuditInput,
    RefundGiftCardCode,
    RefundLineItemAllocation,
    RefundLineItemAdjustmentRefund,
    RefundLineItemAdjustment,
    RefundAdjustmentReason,
    RefundLineItemAutomaticRefund,
    RefundLineItemModifierAllocation,
    ReadinessMerchantAccountSession
} from '../declarations/types-46.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-35.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-34.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ExpandedCustomerSummary, ExpandedOrderSummary, ExpandedPaymentIntentSummary } from '../declarations/types-21.js';
export type { CategoryReference, CheckoutBuyerContact } from '../declarations/types-4.js';
export type { SelectedProductOption, SettlementAmounts } from '../declarations/types-53.js';
export type { PricingAmounts, PaymentSourceSummary, PaymentSourceAchDebitSummary, PaymentSourceCardSummary } from '../declarations/types-43.js';
export type { PaymentRefund } from '../declarations/types-42.js';
export type { OrderGiftCardAllocation } from '../declarations/types-36.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { UpdateRefundRequestInput } from '../declarations/types-59.js';
export {
    makeCreateRefundRequest,
    makeCreateRefundRequestAmount,
    makeCreateRefundRequestFull,
    makeCreateRefundRequestTargets
} from '../declarations/types-64.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-69.js';
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
} from '../declarations/types-71.js';
export { makeUpdateRefundRequest } from '../declarations/types-74.js';
export interface RefundsResource {
    /**
 * Creates a refund for an order, a payment intent, a captured gift card redemption, or a gift card
 * load. Set refund_type to full for the full remaining refundable amount, amount for an explicit
 * amount_money, or targets for named line items, charges, and taxes. To refund a gift card
 * redemption made outside a Flint order, set refund_type to amount and send one tender_allocations
 * entry per redemption, with no order_id. A created refund returns 201 even when processing fails;
 * inspect status and failure_reason. A same-key replay returns the original refund without another
 * money attempt. This is a financial operation.
 *
 * `POST /v1/refunds`
 * @see https://developers.withflintpay.com/docs/api/refunds#createRefund
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.refunds.create({refund_type: "full", order_id: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV"}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: RefundsCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CreateRefundResult, CreateRefundResponse>>;
    /**
 * Returns a single refund by ID.
 *
 * `GET /v1/refunds/{refund_id}`
 * @param refund_id Flint refund ID.
 * @see https://developers.withflintpay.com/docs/api/refunds#getRefund
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.refunds.get("ref_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(refund_id: InputValue<string>, params?: RefundsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Refund, RefundResponse>>;
    /**
 * Returns a paginated list of refunds for the authenticated merchant. Default order: created_at
 * descending, then refund_id descending.
 *
 * `GET /v1/refunds`
 * @see https://developers.withflintpay.com/docs/api/refunds#listRefunds
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.refunds.list()
 */
    list(params?: RefundsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<RefundListResponse, RefundListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/refunds#listRefunds
     */
    listPages(params?: RefundsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<RefundListResponse, RefundListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/refunds#listRefunds
     */
    listItems(params?: RefundsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Refund>;
    /**
 * Updates refund metadata and external_reference_id.
 *
 * `PATCH /v1/refunds/{refund_id}`
 * @param refund_id Flint refund ID.
 * @see https://developers.withflintpay.com/docs/api/refunds#updateRefund
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.refunds.update("ref_01ARZ3NDEKTSV4RRFFQ69G5FAV", {metadata: {reviewed_by: "support"}}, {
 * idempotencyKey: idempotencyKey })
 */
    update(refund_id: InputValue<string>, params: RefundsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Refund, RefundResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly refunds: RefundsResource;
}
