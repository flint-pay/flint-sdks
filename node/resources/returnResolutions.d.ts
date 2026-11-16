import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { CancelReturnResolutionResponse } from '../declarations/types-5.js';
import type { ClientOptions, ConfirmReturnResolutionResponse } from '../declarations/types-7.js';
import type { CreateReturnResolutionResponse } from '../declarations/types-13.js';
import type { GetReturnResolutionResponse } from '../declarations/types-28.js';
import type { ListReturnResolutionsResponse } from '../declarations/types-39.js';
import type { ReleaseReturnResolutionResponse } from '../declarations/types-59.js';
import type { RequestOptions, RetryReturnResolutionResponse } from '../declarations/types-60.js';
import type {
    ReturnResolution,
    ReturnResolutionsCancelParams,
    ReturnResolutionsConfirmParams,
    ReturnResolutionsCreateParams,
    ReturnResolutionsGetParams,
    ReturnResolutionsListParams,
    ReturnResolutionsReleaseParams,
    ReturnResolutionsRetryParams,
    ReturnResolutionsUpdateParams
} from '../declarations/types-63.js';
import type { UpdateReturnResolutionResponse } from '../declarations/types-75.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-77.js';
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
    ReturnResolutionsCancelParams,
    ReturnResolution,
    ReturnResolutionsConfirmParams,
    ReturnResolutionsCreateParams,
    ReturnResolutionsGetParams,
    ReturnResolutionsListParams,
    ReturnResolutionsReleaseParams,
    ReturnResolutionsRetryParams,
    ReturnResolutionsUpdateParams,
    ReturnResolutionAdjustment,
    ReturnResolutionExecutionBlocker,
    ReturnResolutionLineItem,
    ReturnReplacementLineItem,
    ReturnResolutionAdjustmentRequestInput,
    ReturnResolutionLineItemRequestInput,
    ReturnReplacementLineItemRequestInput,
    ReturnReplacementLineItemInputVariantInput,
    ReturnReplacementLineItemInputBundleInput,
    ReturnReplacementLineItemInputCustomInput,
    ReturnResolutionLineItemRequest
} from '../declarations/types-63.js';
export type {
    RequestOptions,
    RetryReturnResolutionResponse,
    ReturnActor,
    ResourceReference,
    ResponseMeta,
    ResponseWarning,
    RetryReturnResolutionRequestInput
} from '../declarations/types-60.js';
export type {
    CancelReturnResolutionResponse,
    CancelReturnResolutionRequestInput,
    CategoryReference,
    CheckoutBuyerContact,
    CancelReturnRequestInput
} from '../declarations/types-5.js';
export type { ConfirmReturnResolutionResponse, ClientOptions, ConfirmReturnResolutionRequestInput } from '../declarations/types-7.js';
export type {
    CreateReturnResolutionResponse,
    CreateReturnResolutionRequestInput,
    CreateReturnResolutionRequestStandardInput,
    CreateReturnResolutionRequestCorrectionInput
} from '../declarations/types-13.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-77.js';
export type { GetReturnResolutionResponse } from '../declarations/types-28.js';
export type { ListReturnResolutionsResponse } from '../declarations/types-39.js';
export type {
    ReleaseReturnResolutionResponse,
    RefundTaxBreakdownRefund,
    RefundTenderAllocation,
    RefundUnissuedGiftCardRecovery,
    ReleaseReturnResolutionRequestInput
} from '../declarations/types-59.js';
export type {
    UpdateReturnResolutionResponse,
    UpdateReturnResolutionRequestInput,
    UpdateReturnResolutionAdjustmentRequestInput,
    UpdateReturnResolutionLineItemRequestInput,
    UpdateReturnReplacementLineItemRequestInput,
    UpdateReturnReplacementLineItemInputVariantInput,
    UpdateReturnReplacementLineItemInputBundleInput,
    UpdateReturnReplacementLineItemInputCustomInput,
    UpdateReturnResolutionLineItemRequest
} from '../declarations/types-75.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { MoneyValue, MoneyValueInput, NextAction } from '../declarations/types-42.js';
export type { MetadataMap, MetadataRequestInput, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-41.js';
export type { ExpandedPaymentIntentSummary, ExpandedCustomerSummary, ExpandedOrderSummary } from '../declarations/types-26.js';
export type {
    PaymentSourceSummary,
    PaymentSourceAchDebitSummary,
    PaymentSourceCardSummary,
    PaymentSourceCardPresentDetails,
    PaymentRefund
} from '../declarations/types-52.js';
export type {
    Refund,
    RefundLineItemAllocation,
    RefundLineItemAdjustmentRefund,
    RefundLineItemAdjustment,
    RefundAdjustmentReason,
    RefundLineItemAutomaticRefund,
    RefundLineItemModifierAllocation,
    ReadinessMerchantAccountSession
} from '../declarations/types-58.js';
export type { SelectedProductOption, SettlementAmounts } from '../declarations/types-65.js';
export type { DeferredPromotion } from '../declarations/types-17.js';
export type { PricingAmounts } from '../declarations/types-55.js';
export type { OrderSettlementAmounts } from '../declarations/types-45.js';
export type { SplitReversalReference } from '../declarations/types-66.js';
export type { OrderGiftCardAllocation } from '../declarations/types-44.js';
export type { LineItemFulfillmentRequestModelInput, LineItemFulfillmentOriginRequestModelInput } from '../declarations/types-38.js';
export { makeCancelReturnRequest, makeCancelReturnResolutionRequest, makeConfirmReturnResolutionRequest } from '../declarations/types-78.js';
export {
    makeCreateReturnResolutionRequest,
    makeCreateReturnResolutionRequestCorrection,
    makeCreateReturnResolutionRequestStandard
} from '../declarations/types-81.js';
export {
    makeLineItemFulfillmentOriginRequestModel,
    makeLineItemFulfillmentRequestModel,
    makeMetadataPatchRequest,
    makeMetadataRequest
} from '../declarations/types-85.js';
export { makeMoneyValue } from '../declarations/types-86.js';
export { makeReleaseReturnResolutionRequest, makeRetryReturnResolutionRequest } from '../declarations/types-88.js';
export {
    makeReturnReplacementLineItemInputBundle,
    makeReturnReplacementLineItemInputCustom,
    makeReturnReplacementLineItemInputVariant,
    makeReturnReplacementLineItemRequest,
    makeReturnResolutionAdjustmentRequest,
    makeReturnResolutionLineItemRequest
} from '../declarations/types-89.js';
export {
    makeUpdateReturnReplacementLineItemInputBundle,
    makeUpdateReturnReplacementLineItemInputCustom,
    makeUpdateReturnReplacementLineItemInputVariant,
    makeUpdateReturnReplacementLineItemRequest,
    makeUpdateReturnResolutionAdjustmentRequest,
    makeUpdateReturnResolutionLineItemRequest,
    makeUpdateReturnResolutionRequest
} from '../declarations/types-91.js';
export interface ReturnResolutionsResource {
    /**
 * Cancel a resolution and release the line value it reserved. A failed resolution can be canceled
 * only when it never created a Refund, PaymentIntent, or Order, or when it is an unpaid exchange
 * or replacement. Effects that already succeeded are undone with a compensating correction
 * instead.
 *
 * `POST /v1/return-resolutions/{return_resolution_id}/cancel`
 * @param return_resolution_id Flint return resolution id.
 * @see https://developers.withflintpay.com/docs/api/return-resolutions#cancelReturnResolution
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnResolutions.cancel("retres_01KEZF7C00C7RZJN31W9SGMEQ3", {expected_version: 1,
 * reason: "buyer_request"}, { idempotencyKey: idempotencyKey })
 */
    cancel(return_resolution_id: InputValue<string>, params: ReturnResolutionsCancelParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnResolution, CancelReturnResolutionResponse>>;
    /**
 * Confirm a proposed resolution and freeze its economic facts. Execution can remain pending behind
 * line-qualified execution blockers.
 *
 * `POST /v1/return-resolutions/{return_resolution_id}/confirm`
 * @param return_resolution_id Flint return resolution id.
 * @see https://developers.withflintpay.com/docs/api/return-resolutions#confirmReturnResolution
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnResolutions.confirm("retres_01KEZF7C00C7RZJN31W9SGMEQ3", undefined, {
 * idempotencyKey: idempotencyKey })
 */
    confirm(return_resolution_id: InputValue<string>, params?: ReturnResolutionsConfirmParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnResolution, ConfirmReturnResolutionResponse>>;
    /**
 * Propose a buyer-value outcome for approved quantity. Creating a resolution reserves line value.
 * Confirmation is what freezes it and starts its effects. Read resolutions with `GET
 * /v1/return-resolutions?return_id=` or expand `return_resolutions` on `client.returns.get`.
 *
 * `POST /v1/return-resolutions`
 * @see https://developers.withflintpay.com/docs/api/return-resolutions#createReturnResolution
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnResolutions.create({line_items: [{quantity: 1, return_line_item_id:
 * "retli_01ARZ3NDEKTSV4RRFFQ69G5FAV"}], resolution_type: "refund", return_id:
 * "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV"}, { idempotencyKey: idempotencyKey })
 */
    create(params: ReturnResolutionsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnResolution, CreateReturnResolutionResponse>>;
    /**
 * Retrieve one resolution with its amounts, adjustments, execution blockers, and linked refunds,
 * payments, and replacement order. Supports expand for those links.
 *
 * `GET /v1/return-resolutions/{return_resolution_id}`
 * @param return_resolution_id Flint return resolution id.
 * @see https://developers.withflintpay.com/docs/api/return-resolutions#getReturnResolution
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.returnResolutions.get("retres_01KEZF7C00C7RZJN31W9SGMEQ3")
 */
    get(return_resolution_id: InputValue<string>, params?: ReturnResolutionsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ReturnResolution, GetReturnResolutionResponse>>;
    /**
 * List resolutions. Filter by corrects_return_resolution_id to retrieve the correction history for
 * a resolution that already settled. Default order: created_at descending, then
 * return_resolution_id descending.
 *
 * `GET /v1/return-resolutions`
 * @see https://developers.withflintpay.com/docs/api/return-resolutions#listReturnResolutions
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.returnResolutions.list()
 */
    list(params?: ReturnResolutionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ListReturnResolutionsResponse, ListReturnResolutionsResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/return-resolutions#listReturnResolutions
     */
    listPages(params?: ReturnResolutionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<ListReturnResolutionsResponse, ListReturnResolutionsResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/return-resolutions#listReturnResolutions
     */
    listItems(params?: ReturnResolutionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ReturnResolution>;
    /**
 * Release a confirmed resolution that is waiting on a manual release. Available only while
 * action_reason is manual_release.
 *
 * `POST /v1/return-resolutions/{return_resolution_id}/release`
 * @param return_resolution_id Flint return resolution id.
 * @see https://developers.withflintpay.com/docs/api/return-resolutions#releaseReturnResolution
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnResolutions.release("retres_01KEZF7C00C7RZJN31W9SGMEQ3", {expected_version: 2,
 * reason: "merchant_approved"}, { idempotencyKey: idempotencyKey })
 */
    release(return_resolution_id: InputValue<string>, params: ReturnResolutionsReleaseParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnResolution, ReleaseReturnResolutionResponse>>;
    /**
 * Retry a failed resolution. For gift_card_refund_destination_required, send
 * gift_card_refund_destination: new_gift_card to persist the destination before starting the new
 * attempt. The override is accepted for refund, exchange, and corrections of resolutions other
 * than store_credit. A new attempt starts, historical payment and refund IDs stay on the
 * resolution, and a late event from an earlier attempt cannot settle the new attempt. Fails with
 * ACTION_NOT_ALLOWED, with the line's current_status, when a Return line the resolution covers is
 * no longer approved, such as after it was canceled, and with `LIMIT_EXCEEDED` when an approved
 * line no longer has the quantity the resolution covers. Retry is available only when failure_code
 * allows it, and supported_actions includes retry in that case. A failure that retry cannot fix
 * fails with `ACTION_NOT_ALLOWED`; cancel the resolution instead.
 *
 * `POST /v1/return-resolutions/{return_resolution_id}/retry`
 * @param return_resolution_id Flint return resolution id.
 * @see https://developers.withflintpay.com/docs/api/return-resolutions#retryReturnResolution
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnResolutions.retry("retres_01KEZF7C00C7RZJN31W9SGMEQ3", {expected_version: 3,
 * reason: "dependency_recovered"}, { idempotencyKey: idempotencyKey })
 */
    retry(return_resolution_id: InputValue<string>, params: ReturnResolutionsRetryParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnResolution, RetryReturnResolutionResponse>>;
    /**
 * Update a proposed resolution before confirmation. A present line_items, replacement_line_items,
 * or adjustments array replaces that collection and requires expected_version.
 *
 * `PATCH /v1/return-resolutions/{return_resolution_id}`
 * @param return_resolution_id Flint return resolution id.
 * @see https://developers.withflintpay.com/docs/api/return-resolutions#updateReturnResolution
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnResolutions.update("retres_01ARZ3NDEKTSV4RRFFQ69G5FAV", {external_reference_id:
 * "resolution-2026-001"}, { idempotencyKey: idempotencyKey })
 */
    update(return_resolution_id: InputValue<string>, params: ReturnResolutionsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnResolution, UpdateReturnResolutionResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly returnResolutions: ReturnResolutionsResource;
}
