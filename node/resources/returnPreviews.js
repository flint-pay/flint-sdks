import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/returnPreviews.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';

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
export { makeReturnReplacementLineItemRequest } from '../models/ReturnReplacementLineItemRequest.js';
export { makeReturnResolutionAdjustmentRequest } from '../models/ReturnResolutionAdjustmentRequest.js';
export { makeReturnResolutionLineItemRequest } from '../models/ReturnResolutionLineItemRequest.js';
export { makeTextModifierRequest } from '../models/TextModifierRequest.js';
