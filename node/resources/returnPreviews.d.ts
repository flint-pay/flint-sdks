import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateReturnPreviewData, CreateReturnPreviewRequestInput, CreateReturnPreviewResponse } from '../declarations/types-8.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { ReturnPreviewsCreateInput } from '../declarations/types-41.js';
import type { SdkResponse } from '../declarations/types-43.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
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
    CreateReturnPreviewRequestInput,
    CreateReturnPreviewData,
    CreateReturnPreviewResponse,
    CreateReturnEligibilityPreviewRequestInput,
    CreateReturnResolutionPreviewRequestInput,
    CreateReturnResolutionPreviewRequestStandardInput,
    CreateReturnResolutionPreviewRequestCorrectionInput,
    CreateReturnPreviewRequestEligibilityInput,
    CreateReturnPreviewRequestResolutionInput,
    CreateReturnPreviewDataEligibility,
    CreateReturnPreviewDataResolution
} from '../declarations/types-8.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type {
    RequestOptions,
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
} from '../declarations/types-40.js';
export type { SdkResponse, SelectedProductOption } from '../declarations/types-43.js';
export type {
    ReturnPreviewsCreateInput,
    ReturnResolutionAdjustmentRequestInput,
    ReturnReplacementLineItemRequestInput,
    ReturnLineItemEligibility,
    ReturnLineItemDecisionProposal,
    ReturnPolicyAdjustmentProposal,
    ReturnReasonSummary,
    ReturnPolicyEvaluation,
    ReturnPolicyEvaluationLineItem,
    ReturnResolutionAdjustment,
    ReturnResolutionLineItem,
    ReturnReplacementLineItem
} from '../declarations/types-41.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { MoneyValueInput, MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-31.js';
export type { ReturnResolutionLineItemRequestInput, ReturnResolutionPreview } from '../declarations/types-42.js';
export type { AuthMode, BundleComponent, BundleComponentVariantSummary } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { Image } from '../declarations/types-19.js';
export type { OrderLineItemModifier } from '../declarations/types-32.js';
export type { TextModifierRequest } from '../declarations/types-47.js';
export {
    makeCreateReturnEligibilityPreviewRequest,
    makeCreateReturnPreviewRequest,
    makeCreateReturnPreviewRequestEligibility,
    makeCreateReturnPreviewRequestResolution,
    makeCreateReturnResolutionPreviewRequest,
    makeCreateReturnResolutionPreviewRequestCorrection,
    makeCreateReturnResolutionPreviewRequestStandard
} from '../declarations/types-64.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export {
    makeReturnEligibilityLineItemRequest,
    makeReturnEligibilitySelection,
    makeReturnEligibilitySelectionAllRemainingFulfilled,
    makeReturnEligibilitySelectionLineItems,
    makeReturnReplacementLineItemRequest,
    makeReturnResolutionAdjustmentRequest,
    makeReturnResolutionLineItemRequest
} from '../declarations/types-70.js';
export { makeTextModifierRequest } from '../declarations/types-71.js';
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
    create(params: (InputValue<CreateReturnPreviewRequestInput>), options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<CreateReturnPreviewData>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/returnPreviews.md#returnpreviewscreate
     */
    createWithResponse(params: (InputValue<CreateReturnPreviewRequestInput>), options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<CreateReturnPreviewResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly returnPreviews: ReturnPreviewsResource;
}
