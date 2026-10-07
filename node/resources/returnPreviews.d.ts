export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { CreateReturnEligibilityCheckRequestInput } from '../declarations/CreateReturnEligibilityCheckRequestInput.js';
import type { CreateReturnPreviewResponse } from '../declarations/CreateReturnPreviewResponse.js';
import type { CreateReturnResolutionPreviewRequestInput } from '../declarations/CreateReturnResolutionPreviewRequestInput.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { ReturnPreviewsCreateInput } from '../declarations/ReturnPreviewsCreateInput.js';
import type { ReturnPreviewsCreateResponse } from '../declarations/ReturnPreviewsCreateResponse.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface ReturnPreviewsResource {
    /**
 * Preview return eligibility or resolution amounts without creating a Return or reserving quantity. Set mode to eligibility or resolution and send the matching input object.
 * POST /v1/return-previews
 * @example
 * client.returnPreviews.create({mode: "eligibility", eligibility: {order_id: "example", selection: {selection_type: "all_remaining_fulfilled"}}})
 */
    create(params: (InputValue<({ "eligibility"?: CreateReturnEligibilityCheckRequestInput; "mode": "eligibility" | "resolution"; "resolution"?: CreateReturnResolutionPreviewRequestInput; }) & ((({ "mode": "eligibility"; "eligibility": unknown; }) & ({ "resolution"?: never })) | (({ "mode": "resolution"; "resolution": unknown; }) & ({ "eligibility"?: never })))>) & { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<CreateReturnPreviewResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<({ "eligibility"?: CreateReturnEligibilityCheckRequestInput; "mode": "eligibility" | "resolution"; "resolution"?: CreateReturnResolutionPreviewRequestInput; }) & ((({ "mode": "eligibility"; "eligibility": unknown; }) & ({ "resolution"?: never })) | (({ "mode": "resolution"; "resolution": unknown; }) & ({ "eligibility"?: never })))>) & { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ReturnPreviewsCreateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly returnPreviews: ReturnPreviewsResource;
}
export type { CreateReturnEligibilityCheckRequestInput } from '../declarations/CreateReturnEligibilityCheckRequestInput.js';
export type { CreateReturnResolutionPreviewRequestInput } from '../declarations/CreateReturnResolutionPreviewRequestInput.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { CreateReturnPreviewResponse } from '../declarations/CreateReturnPreviewResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { ReturnPreviewsCreateResponse } from '../declarations/ReturnPreviewsCreateResponse.js';
export type { ReturnPreviewsCreateInput } from '../declarations/ReturnPreviewsCreateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { ReturnEligibilitySelectionInput } from '../declarations/ReturnEligibilitySelectionInput.js';
export type { ReturnLineItemRequestInput } from '../declarations/ReturnLineItemRequestInput.js';
export type { ReturnResolutionAdjustmentRequestInput } from '../declarations/ReturnResolutionAdjustmentRequestInput.js';
export type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
export type { ReturnResolutionLineItemRequestInput } from '../declarations/ReturnResolutionLineItemRequestInput.js';
export type { ReturnReplacementLineItemRequestInput } from '../declarations/ReturnReplacementLineItemRequestInput.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { CreateReturnPreviewData } from '../declarations/CreateReturnPreviewData.js';
export type { ReturnEligibilityCheck } from '../declarations/ReturnEligibilityCheck.js';
export type { ReturnEligibilityCheckLineItem } from '../declarations/ReturnEligibilityCheckLineItem.js';
export type { BundleComponent } from '../declarations/BundleComponent.js';
export type { BundleComponentVariantSummary } from '../declarations/BundleComponentVariantSummary.js';
export type { SelectedProductOption } from '../declarations/SelectedProductOption.js';
export type { ReturnLineItemEligibility } from '../declarations/ReturnLineItemEligibility.js';
export type { ReturnLineItemDecisionProposal } from '../declarations/ReturnLineItemDecisionProposal.js';
export type { ReturnPolicyAdjustmentProposal } from '../declarations/ReturnPolicyAdjustmentProposal.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { Image } from '../declarations/Image.js';
export type { OrderLineItemModifier } from '../declarations/OrderLineItemModifier.js';
export type { TextModifierRequest } from '../declarations/TextModifierRequest.js';
export type { ReturnReasonSummary } from '../declarations/ReturnReasonSummary.js';
export type { ReturnPolicyEvaluation } from '../declarations/ReturnPolicyEvaluation.js';
export type { ReturnPolicyEvaluationLineItem } from '../declarations/ReturnPolicyEvaluationLineItem.js';
export type { ReturnEligibilitySelection } from '../declarations/ReturnEligibilitySelection.js';
export type { ReturnLineItemRequest } from '../declarations/ReturnLineItemRequest.js';
export type { ReturnResolutionPreview } from '../declarations/ReturnResolutionPreview.js';
export type { ReturnResolutionAdjustment } from '../declarations/ReturnResolutionAdjustment.js';
export type { ReturnActor } from '../declarations/ReturnActor.js';
export type { ReturnResolutionLineItem } from '../declarations/ReturnResolutionLineItem.js';
export type { ReturnReplacementLineItem } from '../declarations/ReturnReplacementLineItem.js';
export type { ReturnResolutionWarning } from '../declarations/ReturnResolutionWarning.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { NextActionMerchantAccountSession } from '../declarations/NextActionMerchantAccountSession.js';
export type { CreateReturnPreviewRequestInput } from '../declarations/CreateReturnPreviewRequestInput.js';
export { makeCreateReturnPreviewResponse } from '../declarations/makeCreateReturnPreviewResponse.js';
export { makeCreateReturnPreviewData } from '../declarations/makeCreateReturnPreviewData.js';
export { makeReturnEligibilityCheck } from '../declarations/makeReturnEligibilityCheck.js';
export { makeReturnEligibilityCheckLineItem } from '../declarations/makeReturnEligibilityCheckLineItem.js';
export { makeBundleComponent } from '../declarations/makeBundleComponent.js';
export { makeBundleComponentVariantSummary } from '../declarations/makeBundleComponentVariantSummary.js';
export { makeSelectedProductOption } from '../declarations/makeSelectedProductOption.js';
export { makeReturnLineItemEligibility } from '../declarations/makeReturnLineItemEligibility.js';
export { makeReturnLineItemDecisionProposal } from '../declarations/makeReturnLineItemDecisionProposal.js';
export { makeReturnPolicyAdjustmentProposal } from '../declarations/makeReturnPolicyAdjustmentProposal.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeImage } from '../declarations/makeImage.js';
export { makeOrderLineItemModifier } from '../declarations/makeOrderLineItemModifier.js';
export { makeTextModifierRequest } from '../declarations/makeTextModifierRequest.js';
export { makeReturnReasonSummary } from '../declarations/makeReturnReasonSummary.js';
export { makeReturnPolicyEvaluation } from '../declarations/makeReturnPolicyEvaluation.js';
export { makeReturnPolicyEvaluationLineItem } from '../declarations/makeReturnPolicyEvaluationLineItem.js';
export { makeReturnEligibilitySelection } from '../declarations/makeReturnEligibilitySelection.js';
export { makeReturnLineItemRequest } from '../declarations/makeReturnLineItemRequest.js';
export { makeReturnResolutionPreview } from '../declarations/makeReturnResolutionPreview.js';
export { makeReturnResolutionAdjustment } from '../declarations/makeReturnResolutionAdjustment.js';
export { makeReturnActor } from '../declarations/makeReturnActor.js';
export { makeReturnResolutionLineItem } from '../declarations/makeReturnResolutionLineItem.js';
export { makeReturnReplacementLineItem } from '../declarations/makeReturnReplacementLineItem.js';
export { makeReturnResolutionWarning } from '../declarations/makeReturnResolutionWarning.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeNextActionMerchantAccountSession } from '../declarations/makeNextActionMerchantAccountSession.js';
