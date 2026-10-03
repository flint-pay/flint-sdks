import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/returnPreviews.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';

const _sdkDescriptors = new DescriptorSource(settings, {["createReturnPreview"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.returnPreviews = Object.freeze({
      create: async (params, options) => this.#runtime.request("createReturnPreview", _sdkRequestInput([], [], [
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createReturnPreview", _sdkRequestInput([], [], [
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeCreateReturnPreviewResponse } from '../models/CreateReturnPreviewResponse.js';
export { makeCreateReturnPreviewData } from '../models/CreateReturnPreviewData.js';
export { makeReturnEligibilityCheck } from '../models/ReturnEligibilityCheck.js';
export { makeReturnEligibilityCheckLineItem } from '../models/ReturnEligibilityCheckLineItem.js';
export { makeBundleComponent } from '../models/BundleComponent.js';
export { makeSelectedProductOption } from '../models/SelectedProductOption.js';
export { makeReturnLineItemEligibility } from '../models/ReturnLineItemEligibility.js';
export { makeReturnLineItemDecisionProposal } from '../models/ReturnLineItemDecisionProposal.js';
export { makeReturnPolicyAdjustmentProposal } from '../models/ReturnPolicyAdjustmentProposal.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeImage } from '../models/Image.js';
export { makeOrderLineItemModifier } from '../models/OrderLineItemModifier.js';
export { makeTextModifierRequest } from '../models/TextModifierRequest.js';
export { makeReturnReasonSummary } from '../models/ReturnReasonSummary.js';
export { makeReturnPolicyEvaluation } from '../models/ReturnPolicyEvaluation.js';
export { makeReturnPolicyEvaluationLineItem } from '../models/ReturnPolicyEvaluationLineItem.js';
export { makeReturnEligibilitySelection } from '../models/ReturnEligibilitySelection.js';
export { makeReturnLineItemRequest } from '../models/ReturnLineItemRequest.js';
export { makeReturnResolutionPreview } from '../models/ReturnResolutionPreview.js';
export { makeReturnResolutionAdjustment } from '../models/ReturnResolutionAdjustment.js';
export { makeReturnActor } from '../models/ReturnActor.js';
export { makeReturnResolutionLineItem } from '../models/ReturnResolutionLineItem.js';
export { makeReturnReplacementLineItem } from '../models/ReturnReplacementLineItem.js';
export { makeReturnResolutionWarning } from '../models/ReturnResolutionWarning.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
