import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/oauth.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';

const _sdkDescriptors = new DescriptorSource(settings, {["authorizePartnerInstall"]:r0,["exchangePartnerInstallToken"]:r0,["previewPartnerInstallAuthorization"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.oauth = Object.freeze({
      authorizePartnerInstall: async (params, options) => this.#runtime.request("authorizePartnerInstall", _sdkRequestInput([], [], [
  "response_type",
  "client_id",
  "redirect_uri",
  "mode",
  "permission_ids",
  "environment_id",
  "merchant_id",
  "state",
  "Flint-Version"
], false, false, params), options),
      exchangePartnerInstallToken: async (params, options) => this.#runtime.request("exchangePartnerInstallToken", _sdkRequestInput([], [], [
  "Flint-Version"
], true, true, params), options),
      previewPartnerInstallAuthorization: async (params, options) => this.#runtime.request("previewPartnerInstallAuthorization", _sdkRequestInput([], [], [
  "client_id",
  "redirect_uri",
  "mode",
  "permission_ids",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      previewPartnerInstallAuthorizationWithResponse: async (params, options) => this.#runtime.request("previewPartnerInstallAuthorization", _sdkRequestInput([], [], [
  "client_id",
  "redirect_uri",
  "mode",
  "permission_ids",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makePartnerAuthorizePreviewResponse } from '../models/PartnerAuthorizePreviewResponse.js';
export { makePartnerAuthorizePreview } from '../models/PartnerAuthorizePreview.js';
export { makePartnerAuthorizePreviewPermission } from '../models/PartnerAuthorizePreviewPermission.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
