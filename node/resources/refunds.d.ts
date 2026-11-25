import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-7.js';
import type { CreateRefundResponse } from '../declarations/types-13.js';
import type { Refund } from '../declarations/types-60.js';
import type {
    RefundListResponse,
    RefundResponse,
    RefundWithGiftCardCodes,
    RefundsCreateParams,
    RefundsGetParams,
    RefundsListParams,
    RefundsUpdateParams
} from '../declarations/types-61.js';
import type { RequestOptions } from '../declarations/types-62.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-81.js';
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
    RefundWithGiftCardCodes,
    RefundsGetParams,
    RefundResponse,
    RefundsListParams,
    RefundListResponse,
    RefundsUpdateParams,
    RefundLineItemInput,
    RefundLineItemAdjustmentRefundInInput,
    RefundLineItemAdjustmentInInput,
    RefundTaxBreakdownRefundInInput,
    RefundTenderAllocationRequestInput,
    RefundTenderAllocationInputPaymentIntentInput,
    RefundTenderAllocationInputGiftCardRedemptionInput,
    RefundGiftCardCode,
    RefundLineItemAllocation,
    RefundLineItemAdjustmentRefund,
    RefundLineItemAdjustment,
    RefundLineItemAutomaticRefund,
    RefundLineItemModifierAllocation,
    RefundTaxBreakdownRefund,
    RefundTenderAllocation,
    RefundUnissuedGiftCardRecovery
} from '../declarations/types-61.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-81.js';
export type { RequestOptions, ResourceReference } from '../declarations/types-62.js';
export type {
    CreateRefundResponse,
    CreateRefundRequestInput,
    CreateRefundRequestCreditNoteInput,
    CreateRefundRequestFullInput,
    CreateRefundRequestAmountInput,
    CreateRefundRequestTargetsInput
} from '../declarations/types-13.js';
export type {
    Refund,
    RefundChargeInput,
    RefundDestinationsInput,
    RefundAdjustmentReasonRequestInput,
    RefundAdjustmentAuditInput,
    RefundChargeAllocation,
    RefundAdjustmentReason,
    ReadinessMerchantAccountSession
} from '../declarations/types-60.js';
export type { ClientOptions } from '../declarations/types-7.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-44.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-43.js';
export type { SplitReversalRequestInput, SplitReversalReference } from '../declarations/types-69.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-15.js';
export type { ExpandedCustomerSummary, ExpandedOrderSummary, ExpandedPaymentIntentSummary } from '../declarations/types-26.js';
export type { CategoryReference } from '../declarations/types-5.js';
export type { SelectedProductOption, SettlementAmounts } from '../declarations/types-68.js';
export type { CheckoutBuyerContact } from '../declarations/types-6.js';
export type { DeferredPromotion } from '../declarations/types-18.js';
export type { PricingAmounts } from '../declarations/types-56.js';
export type { OrderSettlementAmounts } from '../declarations/types-47.js';
export type {
    PaymentSourceSummary,
    PaymentSourceAchDebitSummary,
    PaymentSourceCardSummary,
    PaymentSourceCardPresentDetails
} from '../declarations/types-54.js';
export type { PaymentRefund } from '../declarations/types-53.js';
export type { OrderGiftCardAllocation } from '../declarations/types-46.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-63.js';
export type { UpdateRefundRequestInput } from '../declarations/types-78.js';
export {
    makeCreateRefundRequest,
    makeCreateRefundRequestAmount,
    makeCreateRefundRequestCreditNote,
    makeCreateRefundRequestFull,
    makeCreateRefundRequestTargets
} from '../declarations/types-85.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-89.js';
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
} from '../declarations/types-92.js';
export { makeSplitReversalRequest } from '../declarations/types-93.js';
export { makeUpdateRefundRequest } from '../declarations/types-95.js';
export interface RefundsResource {
    /**
 * Creates a refund for an issued credit note on a paid invoice, an order, a payment intent, a
 * captured gift card redemption, or a gift card load. Set refund_type to credit_note with
 * credit_note_id to refund credit; omit amount_money to refund all available credit, resolved when
 * Flint accepts the request. Credit-note refunds return card and bank payments collected through
 * Flint, largest remaining first; gift card value is not refunded through credit notes yet. Set
 * refund_type to full for the full remaining refundable amount, amount for an explicit
 * amount_money, or targets for named line items, charges, and taxes. To refund a gift card
 * redemption made outside a Flint order, set refund_type to amount and send one tender_allocations
 * entry per redemption, with no order_id. A created refund is returned even when processing fails;
 * inspect `status` and `failure_reason`. A same-key replay returns the original refund without
 * another money attempt. For a subscription renewal, choosing reason out_of_stock also requests
 * cancellation of any eligible unshipped shipment once the order is fully refunded. Flint releases
 * its committed stock. Read the order to see its fulfillment status.
 *
 * `POST /v1/refunds`
 * @see https://developers.withflintpay.com/docs/api/refunds#createRefund
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.refunds.create({order_id: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV", refund_type: "full"}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: RefundsCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<RefundWithGiftCardCodes, CreateRefundResponse>>;
    /**
 * Returns a single refund by ID.
 *
 * `GET /v1/refunds/{refund_id}`
 * @param refund_id Flint refund ID. Must be a valid ID with prefix ref_. Malformed IDs return 400
 * INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404
 * RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/refunds#getRefund
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.refunds.get("ref_01KEZF7C003DTD59WKYHEXYQ1K")
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
 * @param refund_id Flint refund ID. Must be a valid ID with prefix ref_. Malformed IDs return 400
 * INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404
 * RESOURCE_NOT_FOUND.
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
