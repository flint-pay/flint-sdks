import type { InputValue } from '../runtime.js';
import type { AccessLink, AccessLinkResponse, AddReturnLineItemRequestInput } from '../declarations/types-0.js';
import type { CancelReturnLineItemRequestInput, CancelReturnRequestInput } from '../declarations/types-3.js';
import type { ClientOptions, CompleteReturnRequestInput } from '../declarations/types-4.js';
import type {
    CreateReturnDispositionRequestInput,
    CreateReturnInspectionRequestInput,
    CreateReturnReceiptRequestInput,
    CreateReturnRequestInput
} from '../declarations/types-8.js';
import type { CreateReturnResolutionRequestInput } from '../declarations/types-9.js';
import type { DecideReturnRequestInput } from '../declarations/types-11.js';
import type {
    GetReturnDispositionResponse,
    GetReturnInspectionResponse,
    GetReturnLineItemResponse,
    GetReturnReceiptResponse,
    GetReturnResolutionResponse,
    GetReturnResponse
} from '../declarations/types-18.js';
import type { ListReturnActivitiesResponse, ListReturnLineItemsResponse, ListReturnsResponse } from '../declarations/types-29.js';
import type { ProcessExistingReturnRequestInput, ProcessExistingReturnResponse } from '../declarations/types-37.js';
import type { ReopenReturnRequestInput } from '../declarations/types-39.js';
import type { RequestOptions, ReturnActivity, ReturnDisposition, ReturnInspection } from '../declarations/types-40.js';
import type { ReturnLineItem, ReturnProcessResult, ReturnReceipt } from '../declarations/types-41.js';
import type {
    ReturnResolution,
    ReturnResource,
    ReturnsAddLineItemInput,
    ReturnsCancelInput,
    ReturnsCancelLineItemInput,
    ReturnsCompleteInput,
    ReturnsCreateAccessLinkInput,
    ReturnsCreateDispositionInput,
    ReturnsCreateInput,
    ReturnsCreateInspectionInput,
    ReturnsCreateReceiptInput,
    ReturnsCreateResolutionInput,
    ReturnsDecideInput,
    ReturnsDeleteLineItemInput,
    ReturnsGetInput,
    ReturnsGetLineItemInput,
    ReturnsListActivitiesInput,
    ReturnsListInput,
    ReturnsListLineItemsInput,
    ReturnsProcessExistingInput,
    ReturnsReopenInput,
    ReturnsUpdateInput,
    ReturnsUpdateLineItemInput,
    ReturnsWaiveLineInspectionInput
} from '../declarations/types-42.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { UpdateReturnLineItemRequestInput, UpdateReturnRequestInput } from '../declarations/types-49.js';
import type { WaiveReturnLineInspectionRequestInput } from '../declarations/types-50.js';
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
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type {
    CancelReturnRequestInput,
    CancelReturnLineItemRequestInput,
    CheckoutBuyerContact,
    CategoryReference
} from '../declarations/types-3.js';
export type {
    RequestOptions,
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
    ReturnInspectionLineItemRequestInput,
    ReturnInspectionLineItem,
    ResourceReference,
    ResourceType
} from '../declarations/types-40.js';
export type {
    ReturnResource,
    ReturnResolution,
    ReturnsCancelInput,
    ReturnsCancelLineItemInput,
    ReturnsCompleteInput,
    ReturnsCreateInput,
    ReturnsCreateAccessLinkInput,
    ReturnsCreateDispositionInput,
    ReturnsCreateInspectionInput,
    ReturnsAddLineItemInput,
    ReturnsCreateReceiptInput,
    ReturnsCreateResolutionInput,
    ReturnsDecideInput,
    ReturnsDeleteLineItemInput,
    ReturnsGetInput,
    ReturnsGetLineItemInput,
    ReturnsListActivitiesInput,
    ReturnsListLineItemsInput,
    ReturnsListInput,
    ReturnsProcessExistingInput,
    ReturnsReopenInput,
    ReturnsUpdateInput,
    ReturnsUpdateLineItemInput,
    ReturnsWaiveLineInspectionInput,
    ReturnResolutionLineItemRequest,
    ReturnSourceSystemInput,
    ReturnSourceSystem,
    ReturnUnverifiedItemInput,
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
} from '../declarations/types-42.js';
export type {
    SdkResponse,
    SettlementAmounts,
    SelectedProductOption,
    ServiceFulfillmentDetails,
    ShipmentFulfillmentDetails
} from '../declarations/types-44.js';
export type {
    GetReturnResponse,
    GetReturnDispositionResponse,
    GetReturnInspectionResponse,
    GetReturnReceiptResponse,
    GetReturnResolutionResponse,
    GetReturnLineItemResponse
} from '../declarations/types-18.js';
export type { CompleteReturnRequestInput, ClientOptions } from '../declarations/types-4.js';
export type {
    CreateReturnRequestInput,
    CreateReturnDispositionRequestInput,
    CreateReturnInspectionRequestInput,
    CreateReturnReceiptRequestInput
} from '../declarations/types-8.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type {
    AccessLink,
    AccessLinkResponse,
    AddReturnLineItemRequestInput,
    AuthMode,
    Address,
    BundleComponent,
    BundleComponentVariantSummary
} from '../declarations/types-0.js';
export type {
    ReturnReceipt,
    ReturnLineItem,
    ReturnProcessResult,
    ReturnPolicyEvaluation,
    ReturnPolicyEvaluationLineItem,
    ReturnPolicyAdjustmentProposal,
    ReturnLineItemRequestInput,
    ReturnReceiptLineItemRequestInput,
    ReturnReceiptLineItemInputMatchedInput,
    ReturnReceiptLineItemInputUnverifiedInput,
    ReturnReceiptLineItemInputExcessInput,
    ReturnReceiptLineItem,
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
} from '../declarations/types-41.js';
export type {
    CreateReturnResolutionRequestInput,
    Credentials,
    CreateReturnResolutionRequestStandardInput,
    CreateReturnResolutionRequestCorrectionInput
} from '../declarations/types-9.js';
export type { DecideReturnRequestInput } from '../declarations/types-11.js';
export type {
    ListReturnActivitiesResponse,
    ListReturnLineItemsResponse,
    ListReturnsResponse,
    MeCancelReturnInput
} from '../declarations/types-29.js';
export type {
    ProcessExistingReturnRequestInput,
    ProcessExistingReturnResponse,
    PricingAmounts,
    PickupFulfillmentDetails,
    ProcessExistingReturnLineItemRequestInput
} from '../declarations/types-37.js';
export type {
    ReopenReturnRequestInput,
    Refund,
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
export type { UpdateReturnRequestInput, UpdateReturnLineItemRequestInput } from '../declarations/types-49.js';
export type { WaiveReturnLineInspectionRequestInput } from '../declarations/types-50.js';
export type {
    BuyerAction,
    BuyerCancelActionOptions,
    BuyerCancelRetentionOffer,
    BuyerPauseActionOptions,
    BuyerPayBalanceActionOptions
} from '../declarations/types-1.js';
export type {
    ExpandedCustomerSummary,
    ExpandedOrderSummary,
    ExpandedPaymentIntentSummary,
    DigitalFulfillmentDetails,
    ExpandedPackageSummary
} from '../declarations/types-16.js';
export type { MoneyValue, NextAction, NextActionMerchantAccountSession, MoneyValueInput } from '../declarations/types-31.js';
export type { Image } from '../declarations/types-19.js';
export type { OrderLineItemModifier, OrderGiftCardAllocation } from '../declarations/types-32.js';
export type { TextModifierRequest } from '../declarations/types-47.js';
export type {
    ExpandedShipmentSummary,
    Fulfillment,
    FulfillmentHold,
    FulfillmentChargeLink,
    FulfillmentLineItem,
    FulfillmentOutcome,
    FulfillmentRecipient
} from '../declarations/types-17.js';
export type { PaymentSourceSummary, PaymentSourceAchDebitSummary, PaymentSourceCardSummary, PaymentRefund } from '../declarations/types-36.js';
export type { DeliveryFulfillmentDetails } from '../declarations/types-12.js';
export { makeAddReturnLineItemRequest, makeCancelReturnLineItemRequest, makeCancelReturnRequest } from '../declarations/types-62.js';
export { makeCompleteReturnRequest } from '../declarations/types-63.js';
export {
    makeCreateReturnDispositionRequest,
    makeCreateReturnInspectionRequest,
    makeCreateReturnReceiptRequest,
    makeCreateReturnRequest
} from '../declarations/types-64.js';
export {
    makeCreateReturnResolutionRequest,
    makeCreateReturnResolutionRequestCorrection,
    makeCreateReturnResolutionRequestStandard,
    makeDecideReturnRequest
} from '../declarations/types-65.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export {
    makeProcessExistingReturnLineItemRequest,
    makeProcessExistingReturnRequest,
    makeReopenReturnRequest
} from '../declarations/types-70.js';
export {
    makeReturnInspectionLineItemRequest,
    makeReturnLineDecision,
    makeReturnLineItemRequest,
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
    makeReturnSourceSystem,
    makeReturnUnverifiedItem
} from '../declarations/types-71.js';
export { makeTextModifierRequest } from '../declarations/types-72.js';
export { makeUpdateReturnLineItemRequest, makeUpdateReturnRequest, makeWaiveReturnLineInspectionRequest } from '../declarations/types-73.js';
export interface ReturnsResource {
    /**
 * Cancel a Return before any merchandise or value work commits. Cancellation is refused once a
 * receipt, inspection, disposition, or resolution exists.
 * @see reference/returns.md#returnscancel
 * POST /v1/returns/{return_id}/cancel
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.cancel("example", {reason: "buyer_request"}, { idempotencyKey: idempotencyKey })
 */
    cancel(return_id: InputValue<string>, params: (InputValue<CancelReturnRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<ReturnResource>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returns.md#returnscancel
     */
    cancelWithResponse(return_id: InputValue<string>, params: (InputValue<CancelReturnRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<GetReturnResponse>>;
    /**
 * Cancel approved quantity on a Return line item. Quantity already received, inspected,
 * dispositioned, or reserved by a resolution, including a failed one, cannot be canceled, and the
 * conflict response names what is blocking it. Omit handback_quantity to lower the expected
 * handback only as far as the canceled quantity requires. An explicit value cannot leave more
 * merchandise expected than the remaining approved quantity.
 * @see reference/returns.md#returnscancellineitem
 * POST /v1/returns/{return_id}/line-items/{return_line_item_id}/cancel
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.cancelLineItem("example", "example", {quantity: "100", reason: "buyer_request"},
 * { idempotencyKey: idempotencyKey })
 */
    cancelLineItem(return_id: InputValue<string>, return_line_item_id: InputValue<string>, params: (InputValue<CancelReturnLineItemRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<ReturnResource>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returns.md#returnscancellineitem
     */
    cancelLineItemWithResponse(return_id: InputValue<string>, return_line_item_id: InputValue<string>, params: (InputValue<CancelReturnLineItemRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<GetReturnResponse>>;
    /**
 * Complete a Return whose completion_mode is manual. The call fails while completion_blockers is
 * non-empty. Automatic Returns complete themselves when the final blocker clears.
 * @see reference/returns.md#returnscomplete
 * POST /v1/returns/{return_id}/complete
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.complete("example", {}, { idempotencyKey: idempotencyKey })
 */
    complete(return_id: InputValue<string>, params: (InputValue<CompleteReturnRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<ReturnResource>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returns.md#returnscomplete
     */
    completeWithResponse(return_id: InputValue<string>, params: (InputValue<CompleteReturnRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<GetReturnResponse>>;
    /**
 * Create a requested Return. Every line needs the return_reason_id of an active reason. With an
 * API key, a Return that no policy matches stays available for merchant review rather than failing
 * creation.
 * @see reference/returns.md#returnscreate
 * POST /v1/returns
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.create({line_items: [{order_line_item_id: "example", requested_quantity: "100",
 * return_reason_id: "example"}], order_id: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateReturnRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<ReturnResource>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returns.md#returnscreate
     */
    createWithResponse(params: (InputValue<CreateReturnRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<GetReturnResponse>>;
    /**
 * Creates the link Flint's email about a Return carries, to put in buyer email or messages you
 * send yourself. It opens the Return and its order in your Flint-hosted customer account without a
 * sign-in. Withdrawing the Return needs the buyer to sign in. It works for 30 days or 10 opens,
 * whichever comes first; after that the buyer signs in to see the Return. The url is a bearer
 * credential. Flint returns it only in this response and in a retry with the same Idempotency-Key,
 * so send it only to the buyer and keep it out of logs. A call with a new key creates another
 * link; earlier links keep working until they expire. When customer_account.mode is
 * merchant_hosted it returns ACCESS_LINK_MERCHANT_HOSTED, and for a Return whose order has no
 * customer, ACCESS_LINK_CUSTOMER_REQUIRED. Send no request body or an empty object ({}).
 * Idempotency is scoped to the merchant, credential, environment, and this resource's route. A
 * replay returns the original link without extending its lifetime or replenishing its opens.
 * Without an Idempotency-Key, each call creates a new link and has no replay result. If Flint
 * cannot retain a result after minting, contact support with X-Request-Id before sending a new
 * request.
 * @see reference/returns.md#returnscreateaccesslink
 * POST /v1/returns/{return_id}/access-links
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.createAccessLink("example", undefined, { idempotencyKey: idempotencyKey })
 */
    createAccessLink(return_id: InputValue<string>, params?: (InputValue<{}> | {}) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<AccessLink>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returns.md#returnscreateaccesslink
     */
    createAccessLinkWithResponse(return_id: InputValue<string>, params?: (InputValue<{}> | {}) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<AccessLinkResponse>>;
    /**
 * Record an auditable merchandise disposition from either a receipt line or an inspection line.
 * Read dispositions with `GET /v1/return-dispositions?return_id=` or expand `return_dispositions`
 * on `GET /v1/returns/{return_id}`.
 * @see reference/returns.md#returnscreatedisposition
 * POST /v1/returns/{return_id}/dispositions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.createDisposition("example", {disposition_type: "sellable", occurred_at:
 * "2026-01-01T00:00:00Z", quantity: "100", reason: "inspection_result",
 * return_receipt_line_item_id: "example"}, { idempotencyKey: idempotencyKey })
 */
    createDisposition(return_id: InputValue<string>, params: (InputValue<CreateReturnDispositionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<ReturnDisposition>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returns.md#returnscreatedisposition
     */
    createDispositionWithResponse(return_id: InputValue<string>, params: (InputValue<CreateReturnDispositionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<GetReturnDispositionResponse>>;
    /**
 * Record an immutable inspection observation. Corrections supersede an earlier inspection instead
 * of editing physical history. Read inspections with `GET /v1/return-inspections?return_id=` or
 * expand `return_inspections` on `GET /v1/returns/{return_id}`.
 * @see reference/returns.md#returnscreateinspection
 * POST /v1/returns/{return_id}/inspections
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.createInspection("example", {inspected_at: "2026-01-01T00:00:00Z",
 * inspection_location_id: "example", line_items: [{acceptance_status: "accepted", condition:
 * "new", quantity: "100", return_receipt_line_item_id: "example"}], return_receipt_id: "example"},
 * { idempotencyKey: idempotencyKey })
 */
    createInspection(return_id: InputValue<string>, params: (InputValue<CreateReturnInspectionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<ReturnInspection>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returns.md#returnscreateinspection
     */
    createInspectionWithResponse(return_id: InputValue<string>, params: (InputValue<CreateReturnInspectionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<GetReturnInspectionResponse>>;
    /**
 * Add a line item to a requested Return. The response is the updated Return, not the new line.
 * @see reference/returns.md#returnsaddlineitem
 * POST /v1/returns/{return_id}/line-items
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.addLineItem("example", {line_item: {order_line_item_id: "example",
 * requested_quantity: "100", return_reason_id: "example"}}, { idempotencyKey: idempotencyKey })
 */
    addLineItem(return_id: InputValue<string>, params: (InputValue<AddReturnLineItemRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<ReturnResource>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returns.md#returnsaddlineitem
     */
    addLineItemWithResponse(return_id: InputValue<string>, params: (InputValue<AddReturnLineItemRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<GetReturnResponse>>;
    /**
 * Record an immutable merchandise receipt observation. Corrections supersede an earlier receipt
 * instead of editing physical history. Read receipts with `GET /v1/return-receipts?return_id=` or
 * expand `return_receipts` on `GET /v1/returns/{return_id}`.
 * @see reference/returns.md#returnscreatereceipt
 * POST /v1/returns/{return_id}/receipts
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.createReceipt("example", {line_items: [{type: "matched", quantity: "100",
 * return_line_item_id: "example"}], received_at: "2026-01-01T00:00:00Z", receiving_location_id:
 * "example"}, { idempotencyKey: idempotencyKey })
 */
    createReceipt(return_id: InputValue<string>, params: (InputValue<CreateReturnReceiptRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<ReturnReceipt>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returns.md#returnscreatereceipt
     */
    createReceiptWithResponse(return_id: InputValue<string>, params: (InputValue<CreateReturnReceiptRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<GetReturnReceiptResponse>>;
    /**
 * Propose a buyer-value outcome for approved quantity. Creating a resolution reserves line value.
 * Confirmation is what freezes it and starts its effects. Read resolutions with `GET
 * /v1/return-resolutions?return_id=` or expand `return_resolutions` on `GET
 * /v1/returns/{return_id}`.
 * @see reference/returns.md#returnscreateresolution
 * POST /v1/returns/{return_id}/resolutions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.createResolution("example", {line_items: [{quantity: "1", return_line_item_id:
 * "rtli_example"}], resolution_type: "refund"}, { idempotencyKey: idempotencyKey })
 */
    createResolution(return_id: InputValue<string>, params: (InputValue<CreateReturnResolutionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<ReturnResolution>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returns.md#returnscreateresolution
     */
    createResolutionWithResponse(return_id: InputValue<string>, params: (InputValue<CreateReturnResolutionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<GetReturnResolutionResponse>>;
    /**
 * Record one decision for every requested line atomically, then open the Return. To defer a line,
 * decline its quantity or remove it with DELETE
 * /v1/returns/{return_id}/line-items/{return_line_item_id} and open a separate Return for it. Omit
 * completion_mode to use the shared pinned policy mode, or automatic when none sets a mode;
 * disagreeing policies require an explicit completion_mode. completion_blockers reports uncovered
 * approved quantity as resolution_not_selected alongside blockers for unfinished resolutions.
 * Start from each buildable pinned policy proposal or the no-policy defaults, replace every
 * supplied decision field, fill release_timing, and validate the result. When an automatic refund
 * can no longer run through the original payment's provider, the request fails with 409
 * ACTION_NOT_ALLOWED; send automatic_resolution_type as null to resolve manually, or choose
 * no_monetary_action.
 * @see reference/returns.md#returnsdecide
 * POST /v1/returns/{return_id}/decide
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.decide("ret_00000000000000000000000000", {line_items: [{approved_quantity: "1",
 * receiving_location_id: "loc_00000000000000000000000000", return_line_item_id:
 * "retli_00000000000000000000000000"}]}, { idempotencyKey: idempotencyKey })
 */
    decide(return_id: InputValue<string>, params: (InputValue<DecideReturnRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<ReturnResource>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returns.md#returnsdecide
     */
    decideWithResponse(return_id: InputValue<string>, params: (InputValue<DecideReturnRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<GetReturnResponse>>;
    /**
 * Remove a line item from a requested Return. Send optional expected_version as one query
 * parameter to fence against the parent Return version. The response is the updated Return.
 * @see reference/returns.md#returnsdeletelineitem
 * DELETE /v1/returns/{return_id}/line-items/{return_line_item_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.deleteLineItem("example", "example", {}, { idempotencyKey: idempotencyKey })
 */
    deleteLineItem(return_id: InputValue<string>, return_line_item_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<ReturnResource>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returns.md#returnsdeletelineitem
     */
    deleteLineItemWithResponse(return_id: InputValue<string>, return_line_item_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<GetReturnResponse>>;
    /**
 * Retrieve a Return with its line items, policy evaluation, financial summary, and completion
 * blockers. Supports expand for the order, customer, receipts, inspections, dispositions,
 * resolutions, shipments, and each line item's reason and fulfillment.
 * @see reference/returns.md#returnsget
 * GET /v1/returns/{return_id}
 * @example
 * client.returns.get("example")
 */
    get(return_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"customer"
            | "line_items.fulfillment"
            | "line_items.return_reason"
            | "order"
            | "return_dispositions"
            | "return_inspections"
            | "return_receipts"
            | "return_resolutions"
            | "shipments">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<ReturnResource>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returns.md#returnsget
     */
    getWithResponse(return_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"customer"
            | "line_items.fulfillment"
            | "line_items.return_reason"
            | "order"
            | "return_dispositions"
            | "return_inspections"
            | "return_receipts"
            | "return_resolutions"
            | "shipments">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<GetReturnResponse>>;
    /**
 * Retrieve one Return line item, including its quantity counters and the reason the buyer selected.
 * @see reference/returns.md#returnsgetlineitem
 * GET /v1/returns/{return_id}/line-items/{return_line_item_id}
 * @example
 * client.returns.getLineItem("example", "example")
 */
    getLineItem(return_id: InputValue<string>, return_line_item_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<ReturnLineItem>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returns.md#returnsgetlineitem
     */
    getLineItemWithResponse(return_id: InputValue<string>, return_line_item_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<GetReturnLineItemResponse>>;
    /**
 * Read the merchant history of a Return for timelines and audit. Read the referenced resources for
 * current state. Activities are newest first by default; use sort_direction=asc for chronological
 * order. Newest first: created_at descending, with return_activity_id descending as the tiebreak.
 * @see reference/returns.md#returnslistactivities
 * GET /v1/returns/{return_id}/activities
 * @example
 * client.returns.listActivities("example")
 */
    listActivities(return_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_direction"?: InputValue<"asc" | "desc">;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<ListReturnActivitiesResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returns.md#returnslistactivities
     */
    listActivitiesWithResponse(return_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_direction"?: InputValue<"asc" | "desc">;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<ListReturnActivitiesResponse>>;
    /** Iterate pages lazily.
     * @see reference/returns.md#returnslistactivities
     */
    listActivitiesPages(return_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_direction"?: InputValue<"asc" | "desc">;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ListReturnActivitiesResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/returns.md#returnslistactivities
     */
    listActivitiesPagesWithResponse(return_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_direction"?: InputValue<"asc" | "desc">;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<ListReturnActivitiesResponse>>;
    /** Iterate items lazily.
     * @see reference/returns.md#returnslistactivities
     */
    listActivitiesItems(return_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_direction"?: InputValue<"asc" | "desc">;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ReturnActivity>;
    /**
 * List the line items on a Return with their quantity counters, eligibility, frozen display
 * identity, and return value. Newest first: created_at descending, with return_line_item_id
 * descending as the tiebreak.
 * @see reference/returns.md#returnslistlineitems
 * GET /v1/returns/{return_id}/line-items
 * @example
 * client.returns.listLineItems("example")
 */
    listLineItems(return_id: InputValue<string>, params?: {
        "fulfillment_id"?: InputValue<string>;
        "merchandise_status"?: InputValue<Array<"not_required"
            | "awaiting_handoff"
            | "in_transit"
            | "partially_received"
            | "inspection_required"
            | "partially_inspected"
            | "inspection_review_required"
            | "disposition_required"
            | "resolved"
            | "exception">>;
        "order_line_item_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "requires_action" | "fulfilled" | "failed">>;
        "return_reason_id"?: InputValue<string>;
        "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<ListReturnLineItemsResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returns.md#returnslistlineitems
     */
    listLineItemsWithResponse(return_id: InputValue<string>, params?: {
        "fulfillment_id"?: InputValue<string>;
        "merchandise_status"?: InputValue<Array<"not_required"
            | "awaiting_handoff"
            | "in_transit"
            | "partially_received"
            | "inspection_required"
            | "partially_inspected"
            | "inspection_review_required"
            | "disposition_required"
            | "resolved"
            | "exception">>;
        "order_line_item_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "requires_action" | "fulfilled" | "failed">>;
        "return_reason_id"?: InputValue<string>;
        "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<ListReturnLineItemsResponse>>;
    /** Iterate pages lazily.
     * @see reference/returns.md#returnslistlineitems
     */
    listLineItemsPages(return_id: InputValue<string>, params?: {
        "fulfillment_id"?: InputValue<string>;
        "merchandise_status"?: InputValue<Array<"not_required"
            | "awaiting_handoff"
            | "in_transit"
            | "partially_received"
            | "inspection_required"
            | "partially_inspected"
            | "inspection_review_required"
            | "disposition_required"
            | "resolved"
            | "exception">>;
        "order_line_item_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "requires_action" | "fulfilled" | "failed">>;
        "return_reason_id"?: InputValue<string>;
        "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ListReturnLineItemsResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/returns.md#returnslistlineitems
     */
    listLineItemsPagesWithResponse(return_id: InputValue<string>, params?: {
        "fulfillment_id"?: InputValue<string>;
        "merchandise_status"?: InputValue<Array<"not_required"
            | "awaiting_handoff"
            | "in_transit"
            | "partially_received"
            | "inspection_required"
            | "partially_inspected"
            | "inspection_review_required"
            | "disposition_required"
            | "resolved"
            | "exception">>;
        "order_line_item_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "requires_action" | "fulfilled" | "failed">>;
        "return_reason_id"?: InputValue<string>;
        "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<ListReturnLineItemsResponse>>;
    /** Iterate items lazily.
     * @see reference/returns.md#returnslistlineitems
     */
    listLineItemsItems(return_id: InputValue<string>, params?: {
        "fulfillment_id"?: InputValue<string>;
        "merchandise_status"?: InputValue<Array<"not_required"
            | "awaiting_handoff"
            | "in_transit"
            | "partially_received"
            | "inspection_required"
            | "partially_inspected"
            | "inspection_review_required"
            | "disposition_required"
            | "resolved"
            | "exception">>;
        "order_line_item_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "requires_action" | "fulfilled" | "failed">>;
        "return_reason_id"?: InputValue<string>;
        "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ReturnLineItem>;
    /**
 * List Returns for the merchant, filtered by order, customer, status, decision, merchandise,
 * resolution, or creation window. Filter by idempotency_key to recover a create whose response
 * never arrived. Newest first: created_at descending, with return_id descending as the tiebreak.
 * Set sort_direction to asc for oldest first, with return_id ascending as the tiebreak.
 * @see reference/returns.md#returnslist
 * GET /v1/returns
 * @example
 * client.returns.list()
 */
    list(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "customer_id"?: InputValue<string>;
        "decision_status"?: InputValue<Array<"pending" | "approved" | "partially_approved" | "declined">>;
        "external_reference_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "merchandise_status"?: InputValue<Array<"not_required"
            | "awaiting_handoff"
            | "in_transit"
            | "partially_received"
            | "inspection_required"
            | "partially_inspected"
            | "inspection_review_required"
            | "disposition_required"
            | "resolved"
            | "exception">>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "receiving_location_id"?: InputValue<string>;
        "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">>;
        "resolution_type"?: InputValue<Array<"refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction">>;
        "return_number"?: InputValue<string>;
        "return_reason_id"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "work_type"?: InputValue<Array<"decision" | "handoff" | "receipt" | "inspection" | "disposition" | "resolution" | "exception">>;
        "expand"?: InputValue<Array<"customer" | "order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<ListReturnsResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returns.md#returnslist
     */
    listWithResponse(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "customer_id"?: InputValue<string>;
        "decision_status"?: InputValue<Array<"pending" | "approved" | "partially_approved" | "declined">>;
        "external_reference_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "merchandise_status"?: InputValue<Array<"not_required"
            | "awaiting_handoff"
            | "in_transit"
            | "partially_received"
            | "inspection_required"
            | "partially_inspected"
            | "inspection_review_required"
            | "disposition_required"
            | "resolved"
            | "exception">>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "receiving_location_id"?: InputValue<string>;
        "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">>;
        "resolution_type"?: InputValue<Array<"refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction">>;
        "return_number"?: InputValue<string>;
        "return_reason_id"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "work_type"?: InputValue<Array<"decision" | "handoff" | "receipt" | "inspection" | "disposition" | "resolution" | "exception">>;
        "expand"?: InputValue<Array<"customer" | "order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<ListReturnsResponse>>;
    /** Iterate pages lazily.
     * @see reference/returns.md#returnslist
     */
    listPages(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "customer_id"?: InputValue<string>;
        "decision_status"?: InputValue<Array<"pending" | "approved" | "partially_approved" | "declined">>;
        "external_reference_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "merchandise_status"?: InputValue<Array<"not_required"
            | "awaiting_handoff"
            | "in_transit"
            | "partially_received"
            | "inspection_required"
            | "partially_inspected"
            | "inspection_review_required"
            | "disposition_required"
            | "resolved"
            | "exception">>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "receiving_location_id"?: InputValue<string>;
        "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">>;
        "resolution_type"?: InputValue<Array<"refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction">>;
        "return_number"?: InputValue<string>;
        "return_reason_id"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "work_type"?: InputValue<Array<"decision" | "handoff" | "receipt" | "inspection" | "disposition" | "resolution" | "exception">>;
        "expand"?: InputValue<Array<"customer" | "order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ListReturnsResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/returns.md#returnslist
     */
    listPagesWithResponse(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "customer_id"?: InputValue<string>;
        "decision_status"?: InputValue<Array<"pending" | "approved" | "partially_approved" | "declined">>;
        "external_reference_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "merchandise_status"?: InputValue<Array<"not_required"
            | "awaiting_handoff"
            | "in_transit"
            | "partially_received"
            | "inspection_required"
            | "partially_inspected"
            | "inspection_review_required"
            | "disposition_required"
            | "resolved"
            | "exception">>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "receiving_location_id"?: InputValue<string>;
        "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">>;
        "resolution_type"?: InputValue<Array<"refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction">>;
        "return_number"?: InputValue<string>;
        "return_reason_id"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "work_type"?: InputValue<Array<"decision" | "handoff" | "receipt" | "inspection" | "disposition" | "resolution" | "exception">>;
        "expand"?: InputValue<Array<"customer" | "order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<ListReturnsResponse>>;
    /** Iterate items lazily.
     * @see reference/returns.md#returnslist
     */
    listItems(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "customer_id"?: InputValue<string>;
        "decision_status"?: InputValue<Array<"pending" | "approved" | "partially_approved" | "declined">>;
        "external_reference_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "merchandise_status"?: InputValue<Array<"not_required"
            | "awaiting_handoff"
            | "in_transit"
            | "partially_received"
            | "inspection_required"
            | "partially_inspected"
            | "inspection_review_required"
            | "disposition_required"
            | "resolved"
            | "exception">>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "receiving_location_id"?: InputValue<string>;
        "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">>;
        "resolution_type"?: InputValue<Array<"refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction">>;
        "return_number"?: InputValue<string>;
        "return_reason_id"?: InputValue<string>;
        "sort_by"?: InputValue<"created_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "work_type"?: InputValue<Array<"decision" | "handoff" | "receipt" | "inspection" | "disposition" | "resolution" | "exception">>;
        "expand"?: InputValue<Array<"customer" | "order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<ReturnResource>;
    /**
 * Record decisions, receipts, inspections, dispositions, and resolutions for an existing requested
 * or open Return in one request. On a requested Return, send one decision for every requested
 * line; missing decisions return 409 ACTION_NOT_ALLOWED with reason status_not_reached. Omit
 * completion_mode to use the shared pinned policy mode, or automatic when none sets a mode;
 * disagreeing policies require an explicit completion_mode. On an open Return, omit decision and
 * completion_mode to keep committed values, or send those values unchanged; changed values return
 * 409 ACTION_NOT_ALLOWED with reason field_locked. completion_blockers includes
 * resolution_not_selected for any uncovered approved quantity alongside blockers for unfinished
 * resolutions. Refunds, payments, replacement orders, and inventory updates complete
 * asynchronously. expected_version is optional and checked only when sent. If the Return has
 * changed since that version, the request fails with VERSION_CONFLICT. When an automatic refund
 * can no longer run through the original payment's provider, the request fails with 409
 * ACTION_NOT_ALLOWED; send automatic_resolution_type as null to resolve manually, or choose
 * no_monetary_action. Requires Idempotency-Key and all three scopes: commerce.returns.write,
 * commerce.returns.operations.write, and commerce.returns.resolutions.write.
 * @see reference/returns.md#returnsprocessexisting
 * POST /v1/returns/{return_id}/process
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.processExisting("example", {line_items: [{return_line_item_id: "example"}]}, {
 * idempotencyKey: idempotencyKey })
 */
    processExisting(return_id: InputValue<string>, params: (InputValue<ProcessExistingReturnRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<ReturnProcessResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returns.md#returnsprocessexisting
     */
    processExistingWithResponse(return_id: InputValue<string>, params: (InputValue<ProcessExistingReturnRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<ProcessExistingReturnResponse>>;
    /**
 * Reopen a completed Return to record late compensating facts. Reopening sets completion_mode to
 * manual, so complete the Return again with /complete once completion_blockers is empty. Confirmed
 * money movements are never edited backward, so a monetary fix is a new correction resolution.
 * @see reference/returns.md#returnsreopen
 * POST /v1/returns/{return_id}/reopen
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.reopen("example", {reason: "linked_effect_changed"}, { idempotencyKey:
 * idempotencyKey })
 */
    reopen(return_id: InputValue<string>, params: (InputValue<ReopenReturnRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<ReturnResource>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returns.md#returnsreopen
     */
    reopenWithResponse(return_id: InputValue<string>, params: (InputValue<ReopenReturnRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<GetReturnResponse>>;
    /**
 * Update caller-owned fields on a Return. Only external_reference_id and metadata are writable.
 * Send optional expected_version to reject a stale Return version; every other change goes through
 * a decision, operation, or resolution command.
 * @see reference/returns.md#returnsupdate
 * PATCH /v1/returns/{return_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(return_id: InputValue<string>, params: (InputValue<UpdateReturnRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<ReturnResource>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returns.md#returnsupdate
     */
    updateWithResponse(return_id: InputValue<string>, params: (InputValue<UpdateReturnRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<GetReturnResponse>>;
    /**
 * Update a requested Return line item. Send null to clear buyer_note or requested_resolution_type.
 * The response is the updated Return.
 * @see reference/returns.md#returnsupdatelineitem
 * PATCH /v1/returns/{return_id}/line-items/{return_line_item_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.updateLineItem("example", "example", {}, { idempotencyKey: idempotencyKey })
 */
    updateLineItem(return_id: InputValue<string>, return_line_item_id: InputValue<string>, params: (InputValue<UpdateReturnLineItemRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<ReturnResource>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returns.md#returnsupdatelineitem
     */
    updateLineItemWithResponse(return_id: InputValue<string>, return_line_item_id: InputValue<string>, params: (InputValue<UpdateReturnLineItemRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<GetReturnResponse>>;
    /**
 * Waive the inspection requirement on a Return line item so received quantity can be dispositioned
 * and resolved without an inspection observation. Received quantity on a waived line satisfies
 * after_inspection release timing.
 * @see reference/returns.md#returnswaivelineinspection
 * POST /v1/returns/{return_id}/line-items/{return_line_item_id}/waive-inspection
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returns.waiveLineInspection("example", "example", {reason: "policy_override"}, {
 * idempotencyKey: idempotencyKey })
 */
    waiveLineInspection(return_id: InputValue<string>, return_line_item_id: InputValue<string>, params: (InputValue<WaiveReturnLineInspectionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<ReturnResource>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returns.md#returnswaivelineinspection
     */
    waiveLineInspectionWithResponse(return_id: InputValue<string>, return_line_item_id: InputValue<string>, params: (InputValue<WaiveReturnLineInspectionRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<GetReturnResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly returns: ReturnsResource;
}
