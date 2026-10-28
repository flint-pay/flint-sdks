import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateReturnPreviewData, CreateReturnPreviewRequestInput, CreateReturnPreviewResponse } from '../declarations/types-9.js';
import type { RequestOptions } from '../declarations/types-42.js';
import type { ReturnPreviewsCreateInput } from '../declarations/types-44.js';
import type { SdkResponse } from '../declarations/types-46.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
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
    CreateReturnPreviewRequestInput,
    CreateReturnPreviewData,
    CreateReturnPreviewResponse,
    CreateReturnEligibilityPreviewRequestInput,
    CreateReturnResolutionPreviewRequestInput,
    CreateReturnResolutionPreviewRequestCorrectionInput,
    CreateReturnPreviewRequestEligibilityInput,
    CreateReturnPreviewRequestResolutionInput,
    CreateReturnPreviewDataEligibility,
    CreateReturnPreviewDataResolution
} from '../declarations/types-9.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
export type { RequestOptions, ResponseMeta } from '../declarations/types-42.js';
export type { SdkResponse } from '../declarations/types-46.js';
export type {
    ReturnPreviewsCreateInput,
    ReturnResolutionAdjustmentRequestInput,
    ReturnResolutionLineItemRequestInput,
    ReturnReplacementLineItemRequestInput,
    ReturnReplacementLineItemInputVariantInput,
    ReturnReplacementLineItemInputBundleInput,
    ReturnReplacementLineItemInputCustomInput,
    ReturnReasonSummary,
    ReturnResolutionPreview,
    ReturnResolutionAdjustment,
    ReturnResolutionLineItem,
    ReturnReplacementLineItem
} from '../declarations/types-44.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type {
    ReturnEligibilitySelectionInput,
    ReturnEligibilityLineItemRequestInput,
    ReturnEligibilitySelectionAllRemainingFulfilledInput,
    ReturnEligibilitySelectionLineItemsInput,
    ReturnEligibilityPreview,
    ReturnEligibilityPreviewLineItem,
    ReturnLineItemEligibility,
    ReturnLineItemDecisionProposal,
    ReturnPolicyAdjustmentProposal,
    ReturnPolicyEvaluation,
    ReturnPolicyEvaluationLineItem,
    ReturnEligibilitySelection,
    ReturnEligibilityLineItemRequest,
    ReturnEligibilitySelectionAllRemainingFulfilled,
    ReturnEligibilitySelectionLineItems,
    ReturnActor,
    ResponseWarning
} from '../declarations/types-43.js';
export type { MoneyValueInput, MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-33.js';
export type { CreateReturnResolutionPreviewRequestStandardInput } from '../declarations/types-10.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-11.js';
export type { BundleComponent, BundleComponentVariantSummary } from '../declarations/types-1.js';
export type { SelectedProductOption } from '../declarations/types-47.js';
export type { Image } from '../declarations/types-21.js';
export type { OrderLineItemModifier } from '../declarations/types-34.js';
export type { MetadataMap } from '../declarations/types-32.js';
export type { TextModifierRequest } from '../declarations/types-50.js';
export {
    makeCreateReturnEligibilityPreviewRequest,
    makeCreateReturnPreviewRequest,
    makeCreateReturnPreviewRequestEligibility,
    makeCreateReturnPreviewRequestResolution,
    makeCreateReturnResolutionPreviewRequest,
    makeCreateReturnResolutionPreviewRequestCorrection,
    makeCreateReturnResolutionPreviewRequestStandard
} from '../declarations/types-68.js';
export { makeMoneyValue } from '../declarations/types-73.js';
export {
    makeReturnEligibilityLineItemRequest,
    makeReturnEligibilitySelection,
    makeReturnEligibilitySelectionAllRemainingFulfilled,
    makeReturnEligibilitySelectionLineItems,
    makeReturnReplacementLineItemInputBundle,
    makeReturnReplacementLineItemInputCustom,
    makeReturnReplacementLineItemInputVariant,
    makeReturnReplacementLineItemRequest,
    makeReturnResolutionAdjustmentRequest,
    makeReturnResolutionLineItemRequest
} from '../declarations/types-75.js';
export { makeTextModifierRequest } from '../declarations/types-77.js';
export interface ReturnPreviewsResource {
    /**
 * Preview return eligibility or resolution amounts without creating a Return or reserving
 * quantity. Set mode to eligibility or resolution and send the matching input object.
 * @see reference/returnPreviews.md#returnpreviewscreate
 * POST /v1/return-previews
 * @example
 * client.returnPreviews.create({mode: "eligibility", eligibility: {order_id: "example", selection:
 * {selection_type: "all_remaining_fulfilled"}}})
 */
    create(params: (InputValue<CreateReturnPreviewRequestInput>), options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<CreateReturnPreviewData>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnPreviews.md#returnpreviewscreate
     */
    createWithResponse(params: (InputValue<CreateReturnPreviewRequestInput>), options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<CreateReturnPreviewResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly returnPreviews: ReturnPreviewsResource;
}
