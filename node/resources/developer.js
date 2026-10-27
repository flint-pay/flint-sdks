import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/developer.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';

const _sdkDescriptors = new DescriptorSource(settings, {["createDeveloperPartnerApp"]:r0,["createDeveloperSandbox"]:r0,["createSandboxAPIKey"]:r0,["deleteDeveloperPartnerApp"]:r0,["deleteDeveloperSandbox"]:r0,["getAPIRequestLog"]:r0,["getDeveloperAuthContext"]:r0,["getDeveloperPartnerApp"]:r0,["getDeveloperPartnerAppInstall"]:r0,["getDeveloperSandbox"]:r0,["getResourceTimeline"]:r0,["listAPIRequestLogs"]:r0,["listDeveloperPartnerAppInstalls"]:r0,["listDeveloperPartnerApps"]:r0,["listDeveloperPartnerInstalls"]:r0,["listDeveloperSandboxes"]:r0,["resetDeveloperSandbox"]:r0,["revokeDeveloperPartnerAppInstall"]:r0,["revokeDeveloperPartnerEnvironmentGrant"]:r0,["rotateDeveloperPartnerAppSecret"]:r0,["updateDeveloperPartnerApp"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.developer = Object.freeze({
      createPartnerApp: async (params, options) => this.#runtime.request("createDeveloperPartnerApp", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeveloperPartnerApp", result, path))),
      createPartnerAppWithResponse: async (params, options) => this.#runtime.request("createDeveloperPartnerApp", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createSandbox: async (params, options) => this.#runtime.request("createDeveloperSandbox", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeveloperSandbox", result, path))),
      createSandboxWithResponse: async (params, options) => this.#runtime.request("createDeveloperSandbox", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createSandboxAPIKey: async (sandbox_id, params, options) => this.#runtime.request("createSandboxAPIKey", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSandboxAPIKey", result, path))),
      createSandboxAPIKeyWithResponse: async (sandbox_id, params, options) => this.#runtime.request("createSandboxAPIKey", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      deletePartnerApp: async (partner_app_id, params, options) => this.#runtime.request("deleteDeveloperPartnerApp", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteDeveloperPartnerApp", result, path))),
      deletePartnerAppWithResponse: async (partner_app_id, params, options) => this.#runtime.request("deleteDeveloperPartnerApp", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      deleteSandbox: async (sandbox_id, params, options) => this.#runtime.request("deleteDeveloperSandbox", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteDeveloperSandbox", result, path))),
      deleteSandboxWithResponse: async (sandbox_id, params, options) => this.#runtime.request("deleteDeveloperSandbox", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      getCurrentAPIKeyRequestLog: async (api_request_log_id, params, options) => this.#runtime.request("getAPIRequestLog", _sdkRequestInput([
  "api_request_log_id"
], [api_request_log_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getAPIRequestLog", result, path))),
      getCurrentAPIKeyRequestLogWithResponse: async (api_request_log_id, params, options) => this.#runtime.request("getAPIRequestLog", _sdkRequestInput([
  "api_request_log_id"
], [api_request_log_id], [], false, false, params), options).then(_sdkResponse),
      getAuthContext: async (params, options) => this.#runtime.request("getDeveloperAuthContext", _sdkRequestInput([], [], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeveloperAuthContext", result, path))),
      getAuthContextWithResponse: async (params, options) => this.#runtime.request("getDeveloperAuthContext", _sdkRequestInput([], [], [], false, false, params), options).then(_sdkResponse),
      getPartnerApp: async (partner_app_id, params, options) => this.#runtime.request("getDeveloperPartnerApp", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeveloperPartnerApp", result, path))),
      getPartnerAppWithResponse: async (partner_app_id, params, options) => this.#runtime.request("getDeveloperPartnerApp", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [], false, false, params), options).then(_sdkResponse),
      getPartnerAppInstall: async (partner_app_id, partner_app_install_id, params, options) => this.#runtime.request("getDeveloperPartnerAppInstall", _sdkRequestInput([
  "partner_app_id",
  "partner_app_install_id"
], [partner_app_id, partner_app_install_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeveloperPartnerAppInstall", result, path))),
      getPartnerAppInstallWithResponse: async (partner_app_id, partner_app_install_id, params, options) => this.#runtime.request("getDeveloperPartnerAppInstall", _sdkRequestInput([
  "partner_app_id",
  "partner_app_install_id"
], [partner_app_id, partner_app_install_id], [], false, false, params), options).then(_sdkResponse),
      getSandbox: async (sandbox_id, params, options) => this.#runtime.request("getDeveloperSandbox", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeveloperSandbox", result, path))),
      getSandboxWithResponse: async (sandbox_id, params, options) => this.#runtime.request("getDeveloperSandbox", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [], false, false, params), options).then(_sdkResponse),
      getResourceTimeline: async (resource_id, params, options) => this.#runtime.request("getResourceTimeline", _sdkRequestInput([
  "resource_id"
], [resource_id], [
  "resource_type",
  "include",
  "page_size",
  "page_token",
  "occurred_after",
  "occurred_before"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getResourceTimeline", result, path))),
      getResourceTimelineWithResponse: async (resource_id, params, options) => this.#runtime.request("getResourceTimeline", _sdkRequestInput([
  "resource_id"
], [resource_id], [
  "resource_type",
  "include",
  "page_size",
  "page_token",
  "occurred_after",
  "occurred_before"
], false, false, params), options).then(_sdkResponse),
      listCurrentAPIKeyRequestLogs: async (params, options) => this.#runtime.request("listAPIRequestLogs", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "caller_type",
  "caller_id",
  "request_id",
  "client_request_id",
  "client_trace_id",
  "http_method",
  "path_query",
  "resource_type",
  "resource_id",
  "status_bucket",
  "created_after",
  "created_before"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listAPIRequestLogs", result, path))),
      listCurrentAPIKeyRequestLogsWithResponse: async (params, options) => this.#runtime.request("listAPIRequestLogs", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "caller_type",
  "caller_id",
  "request_id",
  "client_request_id",
  "client_trace_id",
  "http_method",
  "path_query",
  "resource_type",
  "resource_id",
  "status_bucket",
  "created_after",
  "created_before"
], false, false, params), options).then(_sdkResponse),
      listCurrentAPIKeyRequestLogsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listAPIRequestLogs", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "caller_type",
  "caller_id",
  "request_id",
  "client_request_id",
  "client_trace_id",
  "http_method",
  "path_query",
  "resource_type",
  "resource_id",
  "status_bucket",
  "created_after",
  "created_before"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listAPIRequestLogs", result, path)),
      listCurrentAPIKeyRequestLogsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listAPIRequestLogs", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "caller_type",
  "caller_id",
  "request_id",
  "client_request_id",
  "client_trace_id",
  "http_method",
  "path_query",
  "resource_type",
  "resource_id",
  "status_bucket",
  "created_after",
  "created_before"
], false, false, params), options)),
      listCurrentAPIKeyRequestLogsItems: (params, options) => this.#runtime.items("listAPIRequestLogs", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "caller_type",
  "caller_id",
  "request_id",
  "client_request_id",
  "client_trace_id",
  "http_method",
  "path_query",
  "resource_type",
  "resource_id",
  "status_bucket",
  "created_after",
  "created_before"
], false, false, params), options),
      listPartnerAppInstalls: async (partner_app_id, params, options) => this.#runtime.request("listDeveloperPartnerAppInstalls", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "page_size",
  "page_token",
  "merchant_id",
  "status"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeveloperPartnerAppInstalls", result, path))),
      listPartnerAppInstallsWithResponse: async (partner_app_id, params, options) => this.#runtime.request("listDeveloperPartnerAppInstalls", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "page_size",
  "page_token",
  "merchant_id",
  "status"
], false, false, params), options).then(_sdkResponse),
      listPartnerAppInstallsPages: (partner_app_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listDeveloperPartnerAppInstalls", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "page_size",
  "page_token",
  "merchant_id",
  "status"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listDeveloperPartnerAppInstalls", result, path)),
      listPartnerAppInstallsPagesWithResponse: (partner_app_id, params, options) => _sdkResponsePages(this.#runtime.pages("listDeveloperPartnerAppInstalls", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "page_size",
  "page_token",
  "merchant_id",
  "status"
], false, false, params), options)),
      listPartnerAppInstallsItems: (partner_app_id, params, options) => this.#runtime.items("listDeveloperPartnerAppInstalls", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "page_size",
  "page_token",
  "merchant_id",
  "status"
], false, false, params), options),
      listPartnerApps: async (params, options) => this.#runtime.request("listDeveloperPartnerApps", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeveloperPartnerApps", result, path))),
      listPartnerAppsWithResponse: async (params, options) => this.#runtime.request("listDeveloperPartnerApps", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params), options).then(_sdkResponse),
      listPartnerAppsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeveloperPartnerApps", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listDeveloperPartnerApps", result, path)),
      listPartnerAppsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDeveloperPartnerApps", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params), options)),
      listPartnerAppsItems: (params, options) => this.#runtime.items("listDeveloperPartnerApps", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params), options),
      listPartnerInstalls: async (params, options) => this.#runtime.request("listDeveloperPartnerInstalls", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "partner_app_id",
  "status"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeveloperPartnerInstalls", result, path))),
      listPartnerInstallsWithResponse: async (params, options) => this.#runtime.request("listDeveloperPartnerInstalls", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "partner_app_id",
  "status"
], false, false, params), options).then(_sdkResponse),
      listPartnerInstallsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeveloperPartnerInstalls", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "partner_app_id",
  "status"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listDeveloperPartnerInstalls", result, path)),
      listPartnerInstallsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDeveloperPartnerInstalls", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "partner_app_id",
  "status"
], false, false, params), options)),
      listPartnerInstallsItems: (params, options) => this.#runtime.items("listDeveloperPartnerInstalls", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "partner_app_id",
  "status"
], false, false, params), options),
      listSandboxes: async (params, options) => this.#runtime.request("listDeveloperSandboxes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeveloperSandboxes", result, path))),
      listSandboxesWithResponse: async (params, options) => this.#runtime.request("listDeveloperSandboxes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params), options).then(_sdkResponse),
      listSandboxesPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeveloperSandboxes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listDeveloperSandboxes", result, path)),
      listSandboxesPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDeveloperSandboxes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params), options)),
      listSandboxesItems: (params, options) => this.#runtime.items("listDeveloperSandboxes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status"
], false, false, params), options),
      resetSandbox: async (sandbox_id, params, options) => this.#runtime.request("resetDeveloperSandbox", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resetDeveloperSandbox", result, path))),
      resetSandboxWithResponse: async (sandbox_id, params, options) => this.#runtime.request("resetDeveloperSandbox", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      revokePartnerAppInstall: async (partner_app_id, partner_app_install_id, params, options) => this.#runtime.request("revokeDeveloperPartnerAppInstall", _sdkRequestInput([
  "partner_app_id",
  "partner_app_install_id"
], [partner_app_id, partner_app_install_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("revokeDeveloperPartnerAppInstall", result, path))),
      revokePartnerAppInstallWithResponse: async (partner_app_id, partner_app_install_id, params, options) => this.#runtime.request("revokeDeveloperPartnerAppInstall", _sdkRequestInput([
  "partner_app_id",
  "partner_app_install_id"
], [partner_app_id, partner_app_install_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      revokePartnerEnvironmentGrant: async (partner_app_id, partner_app_install_id, environment_grant_id, params, options) => this.#runtime.request("revokeDeveloperPartnerEnvironmentGrant", _sdkRequestInput([
  "partner_app_id",
  "partner_app_install_id",
  "environment_grant_id"
], [partner_app_id, partner_app_install_id, environment_grant_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("revokeDeveloperPartnerEnvironmentGrant", result, path))),
      revokePartnerEnvironmentGrantWithResponse: async (partner_app_id, partner_app_install_id, environment_grant_id, params, options) => this.#runtime.request("revokeDeveloperPartnerEnvironmentGrant", _sdkRequestInput([
  "partner_app_id",
  "partner_app_install_id",
  "environment_grant_id"
], [partner_app_id, partner_app_install_id, environment_grant_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      rotatePartnerAppSecret: async (partner_app_id, params, options) => this.#runtime.request("rotateDeveloperPartnerAppSecret", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("rotateDeveloperPartnerAppSecret", result, path))),
      rotatePartnerAppSecretWithResponse: async (partner_app_id, params, options) => this.#runtime.request("rotateDeveloperPartnerAppSecret", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      updatePartnerApp: async (partner_app_id, params, options) => this.#runtime.request("updateDeveloperPartnerApp", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateDeveloperPartnerApp", result, path))),
      updatePartnerAppWithResponse: async (partner_app_id, params, options) => this.#runtime.request("updateDeveloperPartnerApp", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreatePartnerAppRequest } from '../models/CreatePartnerAppRequest.js';
export { makeCreateSandboxRequest } from '../models/CreateSandboxRequest.js';
export { makeDeveloperInitialAPIKeyRequest } from '../models/DeveloperInitialAPIKeyRequest.js';
export { makeIssueSandboxAPIKeyRequest } from '../models/IssueSandboxAPIKeyRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makePartnerAppPermissionManifestEntry } from '../models/PartnerAppPermissionManifestEntry.js';
export { makeRotatePartnerAppSecretRequest } from '../models/RotatePartnerAppSecretRequest.js';
export { makeUpdatePartnerAppRequest } from '../models/UpdatePartnerAppRequest.js';
