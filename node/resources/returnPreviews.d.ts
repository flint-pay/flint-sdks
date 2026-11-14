import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { CreateReturnPreviewData, CreateReturnPreviewResponse } from '../declarations/types-12.js';
import type { RequestOptions } from '../declarations/types-54.js';
import type { ReturnPreviewsCreateParams } from '../declarations/types-56.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
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
    ReturnPolicyAdjustmentProposal,
    ReturnReasonSummary,
    ReturnPolicyEvaluation,
    ReturnPolicyEvaluationLineItem
} from '../declarations/types-56.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type {
    CreateReturnPreviewData,
    CreateReturnPreviewResponse,
    CreateReturnPreviewRequestInput,
    CreateReturnEligibilityPreviewRequestInput,
    CreateReturnPreviewRequestEligibilityInput,
    CreateReturnPreviewRequestResolutionInput,
    CreateReturnPreviewDataEligibility,
    CreateReturnPreviewDataResolution
} from '../declarations/types-12.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type {
    ReturnEligibilitySelectionRequestInput,
    ReturnEligibilityLineItemRequestModelInput,
    ReturnEligibilitySelectionAllRemainingFulfilledRequestInput,
    ReturnEligibilitySelectionLineItemsRequestInput,
    ReturnEligibilityPreview,
    ReturnEligibilityPreviewLineItem,
    ReturnLineItemEligibility,
    ReturnLineItemDecisionProposal,
    ReturnEligibilitySelection,
    ReturnEligibilityLineItemRequest,
    ReturnEligibilitySelectionAllRemainingFulfilled,
    ReturnEligibilitySelectionLineItems,
    ReturnActor
} from '../declarations/types-55.js';
export type {
    CreateReturnResolutionPreviewRequestInput,
    CreateReturnResolutionPreviewRequestStandardInput,
    CreateReturnResolutionPreviewRequestCorrectionInput
} from '../declarations/types-13.js';
export type {
    ReturnResolutionAdjustmentRequestInput,
    ReturnResolutionLineItemRequestInput,
    ReturnReplacementLineItemRequestInput,
    ReturnReplacementLineItemInputVariantInput,
    ReturnReplacementLineItemInputBundleInput,
    ReturnReplacementLineItemInputCustomInput,
    ReturnRefundEstimate,
    ReturnRefundTenderEstimate,
    ReturnRefundTenderEstimatePaymentIntent,
    ReturnRefundTenderEstimateGiftCardRedemption,
    ReturnResolutionPreview,
    ReturnResolutionAdjustment,
    ReturnResolutionLineItem,
    ReturnReplacementLineItem,
    ReturnResolutionLineItemRequest
} from '../declarations/types-57.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-39.js';
export type { LineItemFulfillmentRequestModelInput, LineItemFulfillmentOriginRequestModelInput } from '../declarations/types-35.js';
export type { AuthMode, BundleComponent, BundleComponentVariantSummary } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { SelectedProductOption } from '../declarations/types-59.js';
export type { Image } from '../declarations/types-28.js';
export type { OrderLineItemModifier } from '../declarations/types-41.js';
export type { MetadataMap } from '../declarations/types-38.js';
export type { TextModifierRequest } from '../declarations/types-65.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export {
    makeCreateReturnEligibilityPreviewRequest,
    makeCreateReturnPreviewRequest,
    makeCreateReturnPreviewRequestEligibility,
    makeCreateReturnPreviewRequestResolution,
    makeCreateReturnResolutionPreviewRequest,
    makeCreateReturnResolutionPreviewRequestCorrection,
    makeCreateReturnResolutionPreviewRequestStandard
} from '../declarations/types-74.js';
export { makeLineItemFulfillmentOriginRequestModel, makeLineItemFulfillmentRequestModel } from '../declarations/types-78.js';
export { makeMoneyValue } from '../declarations/types-79.js';
export {
    makeReturnEligibilityLineItemRequestModel,
    makeReturnEligibilitySelectionAllRemainingFulfilledRequest,
    makeReturnEligibilitySelectionLineItemsRequest,
    makeReturnEligibilitySelectionRequest
} from '../declarations/types-81.js';
export {
    makeReturnReplacementLineItemInputBundle,
    makeReturnReplacementLineItemInputCustom,
    makeReturnReplacementLineItemInputVariant,
    makeReturnReplacementLineItemRequest,
    makeReturnResolutionAdjustmentRequest,
    makeReturnResolutionLineItemRequest
} from '../declarations/types-82.js';
export { makeTextModifierRequest } from '../declarations/types-83.js';
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
