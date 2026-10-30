import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { CreateReturnPreviewData, CreateReturnPreviewResponse } from '../declarations/types-10.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { ReturnPreviewsCreateParams } from '../declarations/types-49.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
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
    ReturnReasonSummary,
    ReturnPolicyEvaluation,
    ReturnPolicyEvaluationLineItem
} from '../declarations/types-49.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions } from '../declarations/types-47.js';
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
} from '../declarations/types-10.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type {
    ReturnEligibilitySelectionInput,
    ReturnEligibilityLineItemRequestInput,
    ReturnEligibilitySelectionAllRemainingFulfilledInput,
    ReturnEligibilitySelectionLineItemsInput,
    ReturnEligibilityPreview,
    ReturnEligibilityPreviewLineItem,
    ReturnEligibilitySelection,
    ReturnEligibilityLineItemRequest,
    ReturnEligibilitySelectionAllRemainingFulfilled,
    ReturnEligibilitySelectionLineItems,
    ReturnActor,
    ResponseMeta,
    ResponseWarning
} from '../declarations/types-48.js';
export type {
    ReturnResolutionAdjustmentRequestInput,
    ReturnResolutionLineItemRequestInput,
    ReturnReplacementLineItemRequestInput,
    ReturnReplacementLineItemInputVariantInput,
    ReturnReplacementLineItemInputBundleInput,
    ReturnReplacementLineItemInputCustomInput,
    ReturnResolutionPreview,
    ReturnResolutionAdjustment,
    ReturnResolutionLineItem,
    ReturnReplacementLineItem,
    ReturnResolutionLineItemRequest
} from '../declarations/types-50.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-35.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { BundleComponent, BundleComponentVariantSummary } from '../declarations/types-1.js';
export type { SelectedProductOption } from '../declarations/types-53.js';
export type { Image } from '../declarations/types-25.js';
export type { OrderLineItemModifier } from '../declarations/types-37.js';
export type { MetadataMap } from '../declarations/types-34.js';
export type { TextModifierRequest } from '../declarations/types-57.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export {
    makeCreateReturnEligibilityPreviewRequest,
    makeCreateReturnPreviewRequest,
    makeCreateReturnPreviewRequestEligibility,
    makeCreateReturnPreviewRequestResolution,
    makeCreateReturnResolutionPreviewRequest,
    makeCreateReturnResolutionPreviewRequestCorrection,
    makeCreateReturnResolutionPreviewRequestStandard
} from '../declarations/types-65.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export {
    makeReturnEligibilityLineItemRequest,
    makeReturnEligibilitySelection,
    makeReturnEligibilitySelectionAllRemainingFulfilled,
    makeReturnEligibilitySelectionLineItems
} from '../declarations/types-71.js';
export {
    makeReturnReplacementLineItemInputBundle,
    makeReturnReplacementLineItemInputCustom,
    makeReturnReplacementLineItemInputVariant,
    makeReturnReplacementLineItemRequest,
    makeReturnResolutionAdjustmentRequest,
    makeReturnResolutionLineItemRequest
} from '../declarations/types-72.js';
export { makeTextModifierRequest } from '../declarations/types-73.js';
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
 * "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV", selection: {selection_type: "all_remaining_fulfilled"}}})
 */
    create(params: ReturnPreviewsCreateParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CreateReturnPreviewData, CreateReturnPreviewResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly returnPreviews: ReturnPreviewsResource;
}
