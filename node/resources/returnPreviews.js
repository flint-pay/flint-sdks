import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/returnPreviews.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';

const _sdkDescriptors = new DescriptorSource(settings, {["createReturnPreview"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.returnPreviews = Object.freeze({
      create: async (params, options) => this.#runtime.request("createReturnPreview", _sdkRequestInput([], [], [], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnPreview", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createReturnPreview", _sdkRequestInput([], [], [], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateReturnEligibilityPreviewRequest } from '../models/CreateReturnEligibilityPreviewRequest.js';
export { makeCreateReturnPreviewRequest } from '../models/CreateReturnPreviewRequest.js';
export { makeCreateReturnPreviewRequestEligibility } from '../models/CreateReturnPreviewRequestEligibility.js';
export { makeCreateReturnPreviewRequestResolution } from '../models/CreateReturnPreviewRequestResolution.js';
export { makeCreateReturnResolutionPreviewRequest } from '../models/CreateReturnResolutionPreviewRequest.js';
export { makeCreateReturnResolutionPreviewRequestCorrection } from '../models/CreateReturnResolutionPreviewRequestCorrection.js';
export { makeCreateReturnResolutionPreviewRequestStandard } from '../models/CreateReturnResolutionPreviewRequestStandard.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeReturnEligibilityLineItemRequest } from '../models/ReturnEligibilityLineItemRequest.js';
export { makeReturnEligibilitySelection } from '../models/ReturnEligibilitySelection.js';
export { makeReturnEligibilitySelectionAllRemainingFulfilled } from '../models/ReturnEligibilitySelectionAllRemainingFulfilled.js';
export { makeReturnEligibilitySelectionLineItems } from '../models/ReturnEligibilitySelectionLineItems.js';
export { makeReturnReplacementLineItemInputBundle } from '../models/ReturnReplacementLineItemInputBundle.js';
export { makeReturnReplacementLineItemInputCustom } from '../models/ReturnReplacementLineItemInputCustom.js';
export { makeReturnReplacementLineItemInputVariant } from '../models/ReturnReplacementLineItemInputVariant.js';
export { makeReturnReplacementLineItemRequest } from '../models/ReturnReplacementLineItemRequest.js';
export { makeReturnResolutionAdjustmentRequest } from '../models/ReturnResolutionAdjustmentRequest.js';
export { makeReturnResolutionLineItemRequest } from '../models/ReturnResolutionLineItemRequest.js';
export { makeTextModifierRequest } from '../models/TextModifierRequest.js';
