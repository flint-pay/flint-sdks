import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { AccessLink, AccessLinkResponse, AddReturnLineItemResponse } from '../declarations/types-0.js';
import type { CancelReturnLineItemResponse } from '../declarations/types-3.js';
import type { CancelReturnResponse } from '../declarations/types-4.js';
import type { ClientOptions, CompleteReturnResponse } from '../declarations/types-5.js';
import type { CreateReturnDispositionResponse, CreateReturnInspectionResponse, CreateReturnReceiptResponse } from '../declarations/types-10.js';
import type { CreateReturnResolutionResponse, CreateReturnResponse } from '../declarations/types-11.js';
import type { DecideReturnResponse, DeleteReturnLineItemResponse } from '../declarations/types-14.js';
import type { GetReturnLineItemResponse, GetReturnResponse } from '../declarations/types-23.js';
import type { ListReturnActivitiesResponse, ListReturnLineItemsResponse, ListReturnsResponse } from '../declarations/types-32.js';
import type { ProcessExistingReturnResponse } from '../declarations/types-44.js';
import type { ReopenReturnResponse, RequestOptions } from '../declarations/types-47.js';
import type { ReturnActivity, ReturnDisposition, ReturnInspection } from '../declarations/types-48.js';
import type { ReturnLineItem, ReturnProcessResult, ReturnReceipt } from '../declarations/types-49.js';
import type { ReturnResolution, ReturnResource } from '../declarations/types-50.js';
import type {
    ReturnsCancelLineItemParams,
    ReturnsCancelParams,
    ReturnsCompleteParams,
    ReturnsCreateAccessLinkParams,
    ReturnsCreateDispositionParams,
    ReturnsCreateInspectionParams,
    ReturnsCreateLineItemParams,
    ReturnsCreateParams,
    ReturnsCreateReceiptParams,
    ReturnsCreateResolutionParams,
    ReturnsDecideParams,
    ReturnsDeleteLineItemParams,
    ReturnsGetLineItemParams,
    ReturnsGetParams,
    ReturnsListActivitiesParams,
    ReturnsListLineItemsParams,
    ReturnsListParams,
    ReturnsProcessParams,
    ReturnsReopenParams,
    ReturnsUpdateLineItemParams,
    ReturnsUpdateParams,
    ReturnsWaiveLineItemInspectionParams
} from '../declarations/types-51.js';
import type { UpdateReturnLineItemResponse } from '../declarations/types-59.js';
import type { UpdateReturnResponse, WaiveReturnLineInspectionResponse } from '../declarations/types-60.js';
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
    ReturnsCancelParams,
    ReturnsCancelLineItemParams,
    ReturnsCompleteParams,
    ReturnsCreateParams,
    ReturnsCreateAccessLinkParams,
    ReturnsCreateDispositionParams,
    ReturnsCreateInspectionParams,
    ReturnsCreateLineItemParams,
    ReturnsCreateReceiptParams,
    ReturnsCreateResolutionParams,
    ReturnsDecideParams,
    ReturnsDeleteLineItemParams,
    ReturnsGetParams,
    ReturnsGetLineItemParams,
    ReturnsListActivitiesParams,
    ReturnsListLineItemsParams,
    ReturnsListParams,
    ReturnsProcessParams,
    ReturnsReopenParams,
    ReturnsUpdateParams,
    ReturnsUpdateLineItemParams,
    ReturnsWaiveLineItemInspectionParams,
    ReturnUnverifiedItemInput
} from '../declarations/types-51.js';
export type {
    RequestOptions,
    ReopenReturnResponse,
    ResourceReference,
    RefundTaxBreakdownRefund,
    RefundTenderAllocation,
    RefundUnissuedGiftCardRecovery,
    ReopenReturnRequestInput
} from '../declarations/types-47.js';
export type {
    ReturnResource,
    ReturnResolution,
    ReturnResolutionLineItemRequest,
    ReturnSourceSystemRequestInput,
    ReturnSourceSystem,
    ReturnReceiptLineItemRequestInput,
    ReturnReceiptLineItemInputMatchedInput,
    ReturnReceiptLineItemInputUnverifiedInput,
    ReturnReceiptLineItemInputExcessInput,
    ReturnReceiptLineItem,
    ReturnUnverifiedItem,
    ReturnResolutionAdjustmentRequestInput,
    ReturnResolutionLineItemRequestInput,
    ReturnReplacementLineItemRequestInput,
    ReturnReplacementLineItemInputVariantInput,
    ReturnReplacementLineItemInputBundleInput,
    ReturnReplacementLineItemInputCustomInput,
    ReturnResolutionAdjustment,
    ReturnResolutionExecutionBlocker,
    ReturnResolutionLineItem,
    ReturnReplacementLineItem
} from '../declarations/types-50.js';
export type { CancelReturnResponse, CancelReturnRequestInput, CheckoutBuyerContact, CategoryReference } from '../declarations/types-4.js';
export type { CancelReturnLineItemResponse, CancelReturnLineItemRequestInput } from '../declarations/types-3.js';
export type { CompleteReturnResponse, ClientOptions, CompleteReturnRequestInput } from '../declarations/types-5.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { CreateReturnResponse, CreateReturnResolutionResponse, CreateReturnResolutionRequestStandardInput } from '../declarations/types-11.js';
export type {
    AccessLink,
    AccessLinkResponse,
    AddReturnLineItemResponse,
    AuthMode,
    Address,
    AddReturnLineItemRequestInput
} from '../declarations/types-0.js';
export type {
    ReturnDisposition,
    ReturnInspection,
    ReturnActivity,
    ReturnActor,
    ReturnCompletionBlocker,
    ReturnFinancialSummary,
    ReturnHandoffRequirement,
    ReturnHandoffDestination,
    ResponseMeta,
    ResponseWarning,
    ResourceType
} from '../declarations/types-48.js';
export type {
    CreateReturnDispositionResponse,
    CreateReturnInspectionResponse,
    CreateReturnReceiptResponse,
    CreateReturnRequestInput,
    CreateReturnDispositionRequestInput,
    CreateReturnDispositionRequestReceiptLineInput,
    CreateReturnDispositionRequestInspectionLineInput,
    CreateReturnInspectionRequestInput,
    CreateReturnReceiptRequestInput,
    CreateReturnResolutionRequestInput,
    CreateReturnResolutionRequestCorrectionInput
} from '../declarations/types-10.js';
export type {
    ReturnReceipt,
    ReturnLineItem,
    ReturnProcessResult,
    ReturnPolicyEvaluation,
    ReturnPolicyEvaluationLineItem,
    ReturnPolicyAdjustmentProposal,
    ReturnLineItemRequestInput,
    ReturnInspectionLineItemRequestInput,
    ReturnInspectionLineItem,
    ReturnLineDecisionInput,
    ReturnLineItemEligibility,
    ReturnLineItemDecisionProposal,
    ReturnReason,
    ReturnLineItemValue,
    ReturnProcessDecisionInput,
    ReturnProcessDispositionRequestInput,
    ReturnProcessInspectionRequestInput,
    ReturnProcessResolutionRequestInput,
    ReturnProcessReceiptRequestInput
} from '../declarations/types-49.js';
export type { DecideReturnResponse, DeleteReturnLineItemResponse, DecideReturnRequestInput } from '../declarations/types-14.js';
export type {
    GetReturnResponse,
    GetReturnLineItemResponse,
    GetReturnDispositionResponse,
    GetReturnInspectionResponse,
    GetReturnReceiptResponse,
    GetReturnResolutionResponse
} from '../declarations/types-23.js';
export type { ListReturnActivitiesResponse, ListReturnLineItemsResponse, ListReturnsResponse } from '../declarations/types-32.js';
export type {
    ProcessExistingReturnResponse,
    ProcessExistingReturnRequestInput,
    ProcessExistingReturnLineItemRequestInput
} from '../declarations/types-44.js';
export type {
    UpdateReturnResponse,
    WaiveReturnLineInspectionResponse,
    UpdateReturnRequestInput,
    WaiveReturnLineInspectionRequestInput
} from '../declarations/types-60.js';
export type { UpdateReturnLineItemResponse, UpdateReturnLineItemRequestInput } from '../declarations/types-59.js';
export type { Credentials } from '../declarations/types-12.js';
export type {
    BuyerAction,
    BuyerCancelActionOptions,
    BuyerCancelRetentionOffer,
    BundleComponent,
    BundleComponentVariantSummary
} from '../declarations/types-1.js';
export type { BuyerPauseActionOptions, BuyerPayBalanceActionOptions } from '../declarations/types-2.js';
export type {
    ExpandedCustomerSummary,
    ExpandedOrderSummary,
    ExpandedShipmentSummary,
    ExpandedPaymentIntentSummary,
    Fulfillment,
    FulfillmentChargeLink,
    ExpandedPackageSummary
} from '../declarations/types-21.js';
export type { MoneyValue, NextAction, MoneyValueInput } from '../declarations/types-35.js';
export type { MetadataMap, MetadataRequestInput, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-34.js';
export type {
    PricingAmounts,
    PaymentSourceSummary,
    PaymentSourceAchDebitSummary,
    PaymentSourceCardSummary,
    PickupFulfillmentDetails
} from '../declarations/types-43.js';
export type { SettlementAmounts, SelectedProductOption, ServiceFulfillmentDetails, ShipmentFulfillmentDetails } from '../declarations/types-53.js';
export type { Image } from '../declarations/types-25.js';
export type { OrderLineItemModifier } from '../declarations/types-37.js';
export type { TextModifierRequest } from '../declarations/types-57.js';
export type {
    ReadinessMerchantAccountSession,
    Refund,
    RefundLineItemAllocation,
    RefundLineItemAdjustmentRefund,
    RefundLineItemAdjustment,
    RefundAdjustmentReason,
    RefundLineItemAutomaticRefund,
    RefundLineItemModifierAllocation
} from '../declarations/types-46.js';
export type { PaymentRefund } from '../declarations/types-42.js';
export type { OrderGiftCardAllocation } from '../declarations/types-36.js';
export type { FulfillmentHold, FulfillmentLineItem, FulfillmentOutcome, FulfillmentRecipient } from '../declarations/types-22.js';
export type { DigitalFulfillmentDetails } from '../declarations/types-20.js';
export type { DeliveryFulfillmentDetails } from '../declarations/types-15.js';
export type { MeCancelReturnParams } from '../declarations/types-33.js';
export { makeAddReturnLineItemRequest } from '../declarations/types-61.js';
export { makeCancelReturnLineItemRequest, makeCancelReturnRequest, makeCompleteReturnRequest } from '../declarations/types-62.js';
export {
    makeCreateReturnDispositionRequest,
    makeCreateReturnDispositionRequestInspectionLine,
    makeCreateReturnDispositionRequestReceiptLine,
    makeCreateReturnInspectionRequest,
    makeCreateReturnReceiptRequest,
    makeCreateReturnRequest,
    makeCreateReturnResolutionRequest,
    makeCreateReturnResolutionRequestCorrection,
    makeCreateReturnResolutionRequestStandard,
    makeDecideReturnRequest
} from '../declarations/types-65.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-69.js';
export { makeProcessExistingReturnLineItemRequest } from '../declarations/types-70.js';
export {
    makeProcessExistingReturnRequest,
    makeReopenReturnRequest,
    makeReturnInspectionLineItemRequest,
    makeReturnLineDecision,
    makeReturnLineItemRequest
} from '../declarations/types-71.js';
export {
    makeReturnProcessDecision,
    makeReturnProcessDispositionRequest,
    makeReturnProcessInspectionRequest,
    makeReturnProcessReceiptRequest,
    makeReturnProcessResolutionRequest,
    makeReturnReceiptLineItemInputExcess,
    makeReturnReceiptLineItemInputMatched,
    makeReturnReceiptLineItemInputUnverified,
    makeReturnReceiptLineItemRequest,
    makeReturnReplacementLineItemInputBundle,
    makeReturnReplacementLineItemInputCustom,
    makeReturnReplacementLineItemInputVariant,
    makeReturnReplacementLineItemRequest,
    makeReturnResolutionAdjustmentRequest,
    makeReturnResolutionLineItemRequest,
    makeReturnSourceSystemRequest,
    makeReturnUnverifiedItem
} from '../declarations/types-72.js';
export { makeTextModifierRequest } from '../declarations/types-73.js';
export { makeUpdateReturnLineItemRequest, makeUpdateReturnRequest } from '../declarations/types-74.js';
export { makeWaiveReturnLineInspectionRequest } from '../declarations/types-75.js';
export interface ReturnsResource {
    /**
 * Cancel a Return before any merchandise or value work commits. Cancellation is refused once a
 * receipt, inspection, disposition, or resolution exists.
 *
 * `POST /v1/returns/{return_id}/cancel`
 * @param return_id Flint return id.
 * @see https://developers.withflintpay.com/docs/api/returns#cancelReturn
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.cancel("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", {reason: "buyer_request"}, {
 * idempotencyKey: idempotencyKey })
 */
    cancel(return_id: InputValue<string>, params: ReturnsCancelParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnResource, CancelReturnResponse>>;
    /**
 * Cancel approved quantity on a Return line item. Quantity already received, inspected,
 * dispositioned, or reserved by a resolution, including a failed one, cannot be canceled, and the
 * conflict response names what is blocking it. Omit handback_quantity to lower the expected
 * handback only as far as the canceled quantity requires. An explicit value cannot leave more
 * merchandise expected than the remaining approved quantity.
 *
 * `POST /v1/returns/{return_id}/line-items/{return_line_item_id}/cancel`
 * @param return_id Flint return id.
 * @param return_line_item_id Flint return line item id.
 * @see https://developers.withflintpay.com/docs/api/returns#cancelReturnLineItem
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.cancelLineItem("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "retli_01ARZ3NDEKTSV4RRFFQ69G5FAV", {quantity: 1, reason: "buyer_request"}, { idempotencyKey:
 * idempotencyKey })
 */
    cancelLineItem(return_id: InputValue<string>, return_line_item_id: InputValue<string>, params: ReturnsCancelLineItemParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnResource, CancelReturnLineItemResponse>>;
    /**
 * Complete a Return whose completion_mode is manual. The call fails while completion_blockers is
 * non-empty. Automatic Returns complete themselves when the final blocker clears.
 *
 * `POST /v1/returns/{return_id}/complete`
 * @param return_id Flint return id.
 * @see https://developers.withflintpay.com/docs/api/returns#completeReturn
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.complete("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey })
 */
    complete(return_id: InputValue<string>, params: ReturnsCompleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnResource, CompleteReturnResponse>>;
    /**
 * Create a requested Return. Every line needs the return_reason_id of an active reason. With an
 * API key, a Return that no policy matches stays available for merchant review rather than failing
 * creation.
 *
 * `POST /v1/returns`
 * @see https://developers.withflintpay.com/docs/api/returns#createReturn
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.create({line_items: [{order_line_item_id: "li_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * requested_quantity: 1, return_reason_id: "rrsn_01ARZ3NDEKTSV4RRFFQ69G5FAV"}], order_id:
 * "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV"}, { idempotencyKey: idempotencyKey })
 */
    create(params: ReturnsCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ReturnResource, CreateReturnResponse>>;
    /**
 * Creates the link Flint's email about a Return carries, to put in buyer email or messages you
 * send yourself. It opens the Return and its order in your Flint-hosted customer account without a
 * sign-in. Withdrawing the Return needs the buyer to sign in. It works for 30 days or 10 opens,
 * whichever comes first; after that the buyer signs in to see the Return. The url is a bearer
 * credential. Flint returns it only in this response and in a retry with the same Idempotency-Key,
 * so send it only to the buyer and keep it out of logs. A call with a new key creates another
 * link; earlier links keep working until they expire. When customer_account.mode is
 * merchant_hosted it returns 409 ACTION_NOT_ALLOWED with reason merchant_hosted_customer_accounts,
 * and for a Return whose order has no customer, 409 ACTION_NOT_ALLOWED with reason
 * configuration_required. Send no request body or an empty object ({}). Idempotency is scoped to
 * the merchant, credential, environment, and this resource's route. A replay returns the original
 * link without extending its lifetime or replenishing its opens. Without an Idempotency-Key, each
 * call creates a new link and has no replay result. If Flint cannot retain a result after minting,
 * contact support with X-Request-Id before sending a new request.
 *
 * `POST /v1/returns/{return_id}/access-links`
 * @param return_id Flint return ID.
 * @see https://developers.withflintpay.com/docs/api/returns#createReturnAccessLink
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.createAccessLink("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    createAccessLink(return_id: InputValue<string>, params?: ReturnsCreateAccessLinkParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<AccessLink, AccessLinkResponse>>;
    /**
 * Record an auditable merchandise disposition from either a receipt line or an inspection line.
 * Read dispositions with `GET /v1/return-dispositions?return_id=` or expand `return_dispositions`
 * on `client.returns.get`.
 *
 * `POST /v1/returns/{return_id}/dispositions`
 * @param return_id Flint return id.
 * @see https://developers.withflintpay.com/docs/api/return-dispositions#createReturnDisposition
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.createDisposition("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", {disposition_type:
 * "sellable", occurred_at: "2026-01-01T00:00:00Z", quantity: 1, reason: "inspection_result",
 * return_receipt_line_item_id: "retrcli_01ARZ3NDEKTSV4RRFFQ69G5FAV"}, { idempotencyKey:
 * idempotencyKey })
 */
    createDisposition(return_id: InputValue<string>, params: ReturnsCreateDispositionParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ReturnDisposition, CreateReturnDispositionResponse>>;
    /**
 * Record an immutable inspection observation. Corrections supersede an earlier inspection instead
 * of editing physical history. Read inspections with `GET /v1/return-inspections?return_id=` or
 * expand `return_inspections` on `client.returns.get`.
 *
 * `POST /v1/returns/{return_id}/inspections`
 * @param return_id Flint return id.
 * @see https://developers.withflintpay.com/docs/api/return-inspections#createReturnInspection
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.createInspection("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", {inspected_at:
 * "2026-01-01T00:00:00Z", inspection_location_id: "loc_01ARZ3NDEKTSV4RRFFQ69G5FAV", line_items:
 * [{acceptance_status: "accepted", condition: "new", quantity: 1, return_receipt_line_item_id:
 * "retrcli_01ARZ3NDEKTSV4RRFFQ69G5FAV"}], return_receipt_id: "retrc_01ARZ3NDEKTSV4RRFFQ69G5FAV"},
 * { idempotencyKey: idempotencyKey })
 */
    createInspection(return_id: InputValue<string>, params: ReturnsCreateInspectionParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ReturnInspection, CreateReturnInspectionResponse>>;
    /**
 * Add a line item to a requested Return. The response is the updated Return, not the new line.
 *
 * `POST /v1/returns/{return_id}/line-items`
 * @param return_id Flint return id.
 * @see https://developers.withflintpay.com/docs/api/returns#createReturnLineItem
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.createLineItem("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", {line_item: {order_line_item_id:
 * "li_01ARZ3NDEKTSV4RRFFQ69G5FAV", requested_quantity: 1, return_reason_id:
 * "rrsn_01ARZ3NDEKTSV4RRFFQ69G5FAV"}}, { idempotencyKey: idempotencyKey })
 */
    createLineItem(return_id: InputValue<string>, params: ReturnsCreateLineItemParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnResource, AddReturnLineItemResponse>>;
    /**
 * Record an immutable merchandise receipt observation. Corrections supersede an earlier receipt
 * instead of editing physical history. Read receipts with `GET /v1/return-receipts?return_id=` or
 * expand `return_receipts` on `client.returns.get`.
 *
 * `POST /v1/returns/{return_id}/receipts`
 * @param return_id Flint return id.
 * @see https://developers.withflintpay.com/docs/api/return-receipts#createReturnReceipt
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.createReceipt("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", {line_items: [{type: "matched",
 * quantity: 1, return_line_item_id: "retli_01ARZ3NDEKTSV4RRFFQ69G5FAV"}], received_at:
 * "2026-01-01T00:00:00Z", receiving_location_id: "loc_01ARZ3NDEKTSV4RRFFQ69G5FAV"}, {
 * idempotencyKey: idempotencyKey })
 */
    createReceipt(return_id: InputValue<string>, params: ReturnsCreateReceiptParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ReturnReceipt, CreateReturnReceiptResponse>>;
    /**
 * Propose a buyer-value outcome for approved quantity. Creating a resolution reserves line value.
 * Confirmation is what freezes it and starts its effects. Read resolutions with `GET
 * /v1/return-resolutions?return_id=` or expand `return_resolutions` on `client.returns.get`.
 *
 * `POST /v1/returns/{return_id}/resolutions`
 * @param return_id Flint return id.
 * @see https://developers.withflintpay.com/docs/api/return-resolutions#createReturnResolution
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.createResolution("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", {line_items: [{quantity: 1,
 * return_line_item_id: "retli_01ARZ3NDEKTSV4RRFFQ69G5FAV"}], resolution_type: "refund"}, {
 * idempotencyKey: idempotencyKey })
 */
    createResolution(return_id: InputValue<string>, params: ReturnsCreateResolutionParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnResolution, CreateReturnResolutionResponse>>;
    /**
 * Record one decision for every requested line atomically, then open the Return. To defer a line,
 * decline its quantity or remove it with `client.returns.deleteLineItem` and open a separate
 * Return for it. Omit completion_mode to use the shared pinned policy mode, or automatic when none
 * sets a mode; disagreeing policies require an explicit completion_mode. completion_blockers
 * reports uncovered approved quantity as resolution_not_selected alongside blockers for unfinished
 * resolutions. Start from each buildable pinned policy proposal or the no-policy defaults, replace
 * every supplied decision field, fill release_timing, and validate the result. When an automatic
 * refund can no longer run through the original payment's provider, the request fails with 409
 * ACTION_NOT_ALLOWED; send automatic_resolution_type as null to resolve manually, or choose
 * no_monetary_action.
 *
 * `POST /v1/returns/{return_id}/decide`
 * @param return_id Flint return id.
 * @see https://developers.withflintpay.com/docs/api/returns#decideReturn
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.decide("ret_00000000000000000000000000", {line_items: [{approved_quantity: 1,
 * receiving_location_id: "loc_00000000000000000000000000", return_line_item_id:
 * "retli_00000000000000000000000000"}]}, { idempotencyKey: idempotencyKey })
 */
    decide(return_id: InputValue<string>, params: ReturnsDecideParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnResource, DecideReturnResponse>>;
    /**
 * Remove a line item from a requested Return. Send optional expected_version as one query
 * parameter to fence against the parent Return version. The response is the updated Return.
 *
 * `DELETE /v1/returns/{return_id}/line-items/{return_line_item_id}`
 * @param return_id Flint return id.
 * @param return_line_item_id Flint return line item id.
 * @see https://developers.withflintpay.com/docs/api/returns#deleteReturnLineItem
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.deleteLineItem("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "retli_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey })
 */
    deleteLineItem(return_id: InputValue<string>, return_line_item_id: InputValue<string>, params?: ReturnsDeleteLineItemParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnResource, DeleteReturnLineItemResponse>>;
    /**
 * Retrieve a Return with its line items, policy evaluation, financial summary, and completion
 * blockers. Supports expand for the order, customer, receipts, inspections, dispositions,
 * resolutions, shipments, and each line item's reason and fulfillment.
 *
 * `GET /v1/returns/{return_id}`
 * @param return_id Flint return id.
 * @see https://developers.withflintpay.com/docs/api/returns#getReturn
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.returns.get("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(return_id: InputValue<string>, params?: ReturnsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ReturnResource, GetReturnResponse>>;
    /**
 * Retrieve one Return line item, including its quantity counters and the reason the buyer selected.
 *
 * `GET /v1/returns/{return_id}/line-items/{return_line_item_id}`
 * @param return_id Flint return id.
 * @param return_line_item_id Flint return line item id.
 * @see https://developers.withflintpay.com/docs/api/returns#getReturnLineItem
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.returns.getLineItem("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", "retli_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    getLineItem(return_id: InputValue<string>, return_line_item_id: InputValue<string>, params?: ReturnsGetLineItemParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ReturnLineItem, GetReturnLineItemResponse>>;
    /**
 * Read the merchant history of a Return for timelines and audit. Read the referenced resources for
 * current state. Activities are newest first by default; use sort_direction=asc for chronological
 * order. Default order: created_at descending, then return_activity_id descending.
 *
 * `GET /v1/returns/{return_id}/activities`
 * @param return_id Flint return id.
 * @see https://developers.withflintpay.com/docs/api/returns#listReturnActivities
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.returns.listActivities("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    listActivities(return_id: InputValue<string>, params?: ReturnsListActivitiesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ListReturnActivitiesResponse, ListReturnActivitiesResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/returns#listReturnActivities
     */
    listActivitiesPages(return_id: InputValue<string>, params?: ReturnsListActivitiesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<ListReturnActivitiesResponse, ListReturnActivitiesResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/returns#listReturnActivities
     */
    listActivitiesItems(return_id: InputValue<string>, params?: ReturnsListActivitiesParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ReturnActivity>;
    /**
 * List the line items on a Return with their quantity counters, eligibility, frozen display
 * identity, and return value. Default order: created_at descending, then return_line_item_id
 * descending.
 *
 * `GET /v1/returns/{return_id}/line-items`
 * @param return_id Flint return id.
 * @see https://developers.withflintpay.com/docs/api/returns#listReturnLineItems
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.returns.listLineItems("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    listLineItems(return_id: InputValue<string>, params?: ReturnsListLineItemsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ListReturnLineItemsResponse, ListReturnLineItemsResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/returns#listReturnLineItems
     */
    listLineItemsPages(return_id: InputValue<string>, params?: ReturnsListLineItemsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<ListReturnLineItemsResponse, ListReturnLineItemsResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/returns#listReturnLineItems
     */
    listLineItemsItems(return_id: InputValue<string>, params?: ReturnsListLineItemsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ReturnLineItem>;
    /**
 * List Returns for the merchant, filtered by order, customer, status, decision, merchandise,
 * resolution, or creation window. Filter by idempotency_key to recover a create whose response
 * never arrived. Set sort_direction to asc for oldest first. Default order: created_at descending,
 * then return_id descending.
 *
 * `GET /v1/returns`
 * @see https://developers.withflintpay.com/docs/api/returns#listReturns
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.returns.list()
 */
    list(params?: ReturnsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ListReturnsResponse, ListReturnsResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/returns#listReturns
     */
    listPages(params?: ReturnsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<ListReturnsResponse, ListReturnsResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/returns#listReturns
     */
    listItems(params?: ReturnsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ReturnResource>;
    /**
 * Record decisions, receipts, inspections, dispositions, and resolutions for an existing requested
 * or open Return in one request. On a requested Return, send one decision for every requested
 * line; missing decisions return 409 ACTION_NOT_ALLOWED with reason status_not_reached. Omit
 * completion_mode to use the shared pinned policy mode, or automatic when none sets a mode;
 * disagreeing policies require an explicit completion_mode. On an open Return, omit decision and
 * completion_mode to keep committed values, or send those values unchanged; changed values return
 * 409 ACTION_NOT_ALLOWED with reason field_locked. completion_blockers includes
 * resolution_not_selected for any uncovered approved quantity alongside blockers for unfinished
 * resolutions. A line can be processed here only while it has no receipt, inspection, disposition,
 * or resolution. For each line, received_quantity must equal its committed
 * return_required_quantity. Send inspection exactly when the line requires inspection, with
 * acceptance_status accepted. Refunds, payments, replacement orders, and inventory updates
 * complete asynchronously. expected_version is optional and checked only when sent. If the Return
 * has changed since that version, the request fails with VERSION_CONFLICT. When an automatic
 * refund can no longer run through the original payment's provider, the request fails with 409
 * ACTION_NOT_ALLOWED; send automatic_resolution_type as null to resolve manually, or choose
 * no_monetary_action. Requires Idempotency-Key and all three scopes: commerce.returns.write,
 * commerce.returns.operations.write, and commerce.returns.resolutions.write.
 *
 * `POST /v1/returns/{return_id}/process`
 * @param return_id Flint return id.
 * @see https://developers.withflintpay.com/docs/api/returns#processReturn
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.process("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", {line_items: [{return_line_item_id:
 * "retli_01ARZ3NDEKTSV4RRFFQ69G5FAV"}]}, { idempotencyKey: idempotencyKey })
 */
    process(return_id: InputValue<string>, params: ReturnsProcessParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ReturnProcessResult, ProcessExistingReturnResponse>>;
    /**
 * Reopen a completed Return to record late compensating facts. Reopening sets completion_mode to
 * manual, so complete the Return again with /complete once completion_blockers is empty. Confirmed
 * money movements are never edited backward, so a monetary fix is a new correction resolution.
 *
 * `POST /v1/returns/{return_id}/reopen`
 * @param return_id Flint return id.
 * @see https://developers.withflintpay.com/docs/api/returns#reopenReturn
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.reopen("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", {reason: "linked_effect_changed"}, {
 * idempotencyKey: idempotencyKey })
 */
    reopen(return_id: InputValue<string>, params: ReturnsReopenParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnResource, ReopenReturnResponse>>;
    /**
 * Update caller-owned fields on a Return. Only external_reference_id and metadata are writable.
 * Send optional expected_version to reject a stale Return version; every other change goes through
 * a decision, operation, or resolution command.
 *
 * `PATCH /v1/returns/{return_id}`
 * @param return_id Flint return id.
 * @see https://developers.withflintpay.com/docs/api/returns#updateReturn
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.update("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV", {external_reference_id:
 * "return-2026-001"}, { idempotencyKey: idempotencyKey })
 */
    update(return_id: InputValue<string>, params: ReturnsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnResource, UpdateReturnResponse>>;
    /**
 * Update a requested Return line item. Send null to clear buyer_note or requested_resolution_type.
 * The response is the updated Return.
 *
 * `PATCH /v1/returns/{return_id}/line-items/{return_line_item_id}`
 * @param return_id Flint return id.
 * @param return_line_item_id Flint return line item id.
 * @see https://developers.withflintpay.com/docs/api/returns#updateReturnLineItem
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.updateLineItem("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "retli_01ARZ3NDEKTSV4RRFFQ69G5FAV", {buyer_note: "The size did not fit"}, { idempotencyKey:
 * idempotencyKey })
 */
    updateLineItem(return_id: InputValue<string>, return_line_item_id: InputValue<string>, params: ReturnsUpdateLineItemParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnResource, UpdateReturnLineItemResponse>>;
    /**
 * Waive the inspection requirement on a Return line item so received quantity can be dispositioned
 * and resolved without an inspection observation. Received quantity on a waived line satisfies
 * after_inspection release timing.
 *
 * `POST /v1/returns/{return_id}/line-items/{return_line_item_id}/waive-inspection`
 * @param return_id Flint return id.
 * @param return_line_item_id Flint return line item id.
 * @see https://developers.withflintpay.com/docs/api/returns#waiveReturnLineItemInspection
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.waiveLineItemInspection("ret_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "retli_01ARZ3NDEKTSV4RRFFQ69G5FAV", {reason: "policy_override"}, { idempotencyKey:
 * idempotencyKey })
 */
    waiveLineItemInspection(return_id: InputValue<string>, return_line_item_id: InputValue<string>, params: ReturnsWaiveLineItemInspectionParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReturnResource, WaiveReturnLineInspectionResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly returns: ReturnsResource;
}
