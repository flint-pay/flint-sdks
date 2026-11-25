import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-7.js';
import type { CreateReturnPreviewData, CreateReturnPreviewResponse } from '../declarations/types-13.js';
import type { RequestOptions } from '../declarations/types-62.js';
import type { ReturnPreviewsCreateParams } from '../declarations/types-64.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-81.js';
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
    ReturnPreviewsCreateParams,
    ReturnLineItemEligibility,
    ReturnLineItemDecisionProposal,
    ReturnPolicyAdjustmentProposal,
    ReturnPolicyEvaluation,
    ReturnPolicyEvaluationLineItem
} from '../declarations/types-64.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-81.js';
export type { RequestOptions, ResourceReference } from '../declarations/types-62.js';
export type {
    CreateReturnPreviewData,
    CreateReturnPreviewResponse,
    CreateReturnPreviewRequestInput,
    CreateReturnEligibilityPreviewRequestInput,
    CreateReturnResolutionPreviewRequestInput,
    CreateReturnResolutionPreviewRequestStandardInput,
    CreateReturnResolutionPreviewRequestCorrectionInput,
    CreateReturnPreviewRequestEligibilityInput,
    CreateReturnPreviewRequestResolutionInput,
    CreateReturnPreviewDataEligibility,
    CreateReturnPreviewDataResolution
} from '../declarations/types-13.js';
export type { ClientOptions } from '../declarations/types-7.js';
export type {
    ReturnEligibilitySelectionRequestInput,
    ReturnEligibilityLineItemRequestModelInput,
    ReturnEligibilitySelectionAllRemainingFulfilledRequestInput,
    ReturnEligibilitySelectionLineItemsRequestInput,
    ReturnEligibilityPreview,
    ReturnEligibilityPreviewLineItem,
    ReturnExchangeVariant,
    ReturnEligibilitySelection,
    ReturnEligibilityLineItemRequest,
    ReturnEligibilitySelectionAllRemainingFulfilled,
    ReturnEligibilitySelectionLineItems,
    ReturnActor,
    ResponseMeta,
    ResponseWarning
} from '../declarations/types-63.js';
export type {
    ReturnResolutionAdjustmentRequestInput,
    ReturnResolutionLineItemRequestInput,
    ReturnResolutionPreview,
    ReturnResolutionLineItem,
    ReturnResolutionLineItemRequest
} from '../declarations/types-66.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-44.js';
export type {
    ReturnReplacementLineItemRequestInput,
    ReturnReplacementTaxRequestInput,
    ReturnReplacementLineItemInputVariantInput,
    ReturnReplacementLineItemInputBundleInput,
    ReturnReplacementLineItemInputCustomInput,
    ReturnReasonSummary,
    ReturnRefundEstimate,
    ReturnRefundTenderEstimate,
    ReturnRefundTenderEstimatePaymentIntent,
    ReturnRefundTenderEstimateGiftCardRedemption,
    ReturnResolutionAdjustment,
    ReturnReplacementLineItem
} from '../declarations/types-65.js';
export type { LineItemFulfillmentRequestModelInput, LineItemFulfillmentOriginRequestModelInput } from '../declarations/types-40.js';
export type { OrderDraftLineItemTaxCalculationRequestModelInput, OrderDraftTaxComponentRequestModelInput } from '../declarations/types-45.js';
export type { OrderDraftTaxJurisdictionRequestModelInput, OrderLineItemModifier } from '../declarations/types-46.js';
export type { AuthMode, BundleComponent, BundleComponentVariantSummary } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-15.js';
export type { SelectedProductOption } from '../declarations/types-68.js';
export type { Image } from '../declarations/types-31.js';
export type { MetadataMap } from '../declarations/types-43.js';
export type { TextModifierRequest } from '../declarations/types-75.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-60.js';
export {
    makeCreateReturnEligibilityPreviewRequest,
    makeCreateReturnPreviewRequest,
    makeCreateReturnPreviewRequestEligibility,
    makeCreateReturnPreviewRequestResolution,
    makeCreateReturnResolutionPreviewRequest,
    makeCreateReturnResolutionPreviewRequestCorrection,
    makeCreateReturnResolutionPreviewRequestStandard
} from '../declarations/types-85.js';
export { makeLineItemFulfillmentOriginRequestModel, makeLineItemFulfillmentRequestModel, makeMoneyValue } from '../declarations/types-89.js';
export {
    makeOrderDraftLineItemTaxCalculationRequestModel,
    makeOrderDraftTaxComponentRequestModel,
    makeOrderDraftTaxJurisdictionRequestModel
} from '../declarations/types-90.js';
export {
    makeReturnEligibilityLineItemRequestModel,
    makeReturnEligibilitySelectionAllRemainingFulfilledRequest,
    makeReturnEligibilitySelectionLineItemsRequest,
    makeReturnEligibilitySelectionRequest
} from '../declarations/types-92.js';
export {
    makeReturnReplacementLineItemInputBundle,
    makeReturnReplacementLineItemInputCustom,
    makeReturnReplacementLineItemInputVariant,
    makeReturnReplacementLineItemRequest,
    makeReturnReplacementTaxRequest,
    makeReturnResolutionAdjustmentRequest,
    makeReturnResolutionLineItemRequest
} from '../declarations/types-93.js';
export { makeTextModifierRequest } from '../declarations/types-94.js';
export interface ReturnPreviewsResource {
    /**
 * Preview return eligibility or resolution amounts without creating a Return or reserving
 * quantity. Set mode to eligibility or resolution and send the matching input object.
 *
 * `POST /v1/return-previews`
 * @see https://developers.withflintpay.com/docs/api/returns#createReturnPreview
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.returnPreviews.create({mode: "eligibility", eligibility: {order_id:
 * "ord_01KEZF7C0054GQKJ142A8X367A", selection: {selection_type: "all_remaining_fulfilled"}}})
 */
    create(params: ReturnPreviewsCreateParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CreateReturnPreviewData, CreateReturnPreviewResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly returnPreviews: ReturnPreviewsResource;
}
