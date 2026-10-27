import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/partnerAppInstalls.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';

const _sdkDescriptors = new DescriptorSource(settings, {["listMerchantPartnerAppInstalls"]:r0,["revokeMerchantPartnerAppInstall"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.partnerAppInstalls = Object.freeze({
      list: async (params, options) => this.#runtime.request("listMerchantPartnerAppInstalls", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "partner_app_id",
  "status"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listMerchantPartnerAppInstalls", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listMerchantPartnerAppInstalls", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "partner_app_id",
  "status"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listMerchantPartnerAppInstalls", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "partner_app_id",
  "status"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listMerchantPartnerAppInstalls", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listMerchantPartnerAppInstalls", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "partner_app_id",
  "status"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listMerchantPartnerAppInstalls", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "partner_app_id",
  "status"
], false, false, params), options),
      revoke: async (partner_app_install_id, params, options) => this.#runtime.request("revokeMerchantPartnerAppInstall", _sdkRequestInput([
  "partner_app_install_id"
], [partner_app_install_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("revokeMerchantPartnerAppInstall", result, path))),
      revokeWithResponse: async (partner_app_install_id, params, options) => this.#runtime.request("revokeMerchantPartnerAppInstall", _sdkRequestInput([
  "partner_app_install_id"
], [partner_app_install_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makePartnerAppPermissionManifestEntry } from '../models/PartnerAppPermissionManifestEntry.js';
