import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/returnPreviews.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';

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
