import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/developer.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';

const _sdkDescriptors = new DescriptorSource(settings, {["createDeveloperPartnerApp"]:r0,["createDeveloperSandbox"]:r0,["deleteDeveloperSandbox"]:r0,["getCurrentAPIKeyRequestLog"]:r0,["getDeveloperAuthContext"]:r0,["getDeveloperPartnerApp"]:r0,["getDeveloperPartnerAppInstall"]:r0,["getDeveloperSandbox"]:r0,["getResourceTimeline"]:r0,["issueDeveloperSandboxTestKey"]:r0,["listCurrentAPIKeyRequestLogs"]:r0,["listDeveloperPartnerAppInstalls"]:r0,["listDeveloperPartnerApps"]:r0,["listDeveloperSandboxes"]:r0,["resetDeveloperSandbox"]:r0,["revokeDeveloperPartnerAppInstall"]:r0,["revokeDeveloperPartnerEnvironmentGrant"]:r0,["rotateDeveloperPartnerAppSecret"]:r0,["updateDeveloperPartnerApp"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.developer = Object.freeze({
      createPartnerApp: async (params, options) => this.#runtime.request("createDeveloperPartnerApp", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createPartnerAppWithResponse: async (params, options) => this.#runtime.request("createDeveloperPartnerApp", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createSandbox: async (params, options) => this.#runtime.request("createDeveloperSandbox", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createSandboxWithResponse: async (params, options) => this.#runtime.request("createDeveloperSandbox", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      deleteSandbox: async (sandbox_id, params, options) => this.#runtime.request("deleteDeveloperSandbox", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      deleteSandboxWithResponse: async (sandbox_id, params, options) => this.#runtime.request("deleteDeveloperSandbox", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getCurrentAPIKeyRequestLog: async (api_request_log_id, params, options) => this.#runtime.request("getCurrentAPIKeyRequestLog", _sdkRequestInput([
  "api_request_log_id"
], [api_request_log_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getCurrentAPIKeyRequestLogWithResponse: async (api_request_log_id, params, options) => this.#runtime.request("getCurrentAPIKeyRequestLog", _sdkRequestInput([
  "api_request_log_id"
], [api_request_log_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getAuthContext: async (params, options) => this.#runtime.request("getDeveloperAuthContext", _sdkRequestInput([], [], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getAuthContextWithResponse: async (params, options) => this.#runtime.request("getDeveloperAuthContext", _sdkRequestInput([], [], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getPartnerApp: async (partner_app_id, params, options) => this.#runtime.request("getDeveloperPartnerApp", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getPartnerAppWithResponse: async (partner_app_id, params, options) => this.#runtime.request("getDeveloperPartnerApp", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getPartnerAppInstall: async (partner_app_id, partner_app_install_id, params, options) => this.#runtime.request("getDeveloperPartnerAppInstall", _sdkRequestInput([
  "partner_app_id",
  "partner_app_install_id"
], [partner_app_id, partner_app_install_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getPartnerAppInstallWithResponse: async (partner_app_id, partner_app_install_id, params, options) => this.#runtime.request("getDeveloperPartnerAppInstall", _sdkRequestInput([
  "partner_app_id",
  "partner_app_install_id"
], [partner_app_id, partner_app_install_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getSandbox: async (sandbox_id, params, options) => this.#runtime.request("getDeveloperSandbox", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getSandboxWithResponse: async (sandbox_id, params, options) => this.#runtime.request("getDeveloperSandbox", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getResourceTimeline: async (resource_id, params, options) => this.#runtime.request("getResourceTimeline", _sdkRequestInput([
  "resource_id"
], [resource_id], [
  "resource_type",
  "include",
  "page_size",
  "page_token",
  "occurred_after",
  "occurred_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getResourceTimelineWithResponse: async (resource_id, params, options) => this.#runtime.request("getResourceTimeline", _sdkRequestInput([
  "resource_id"
], [resource_id], [
  "resource_type",
  "include",
  "page_size",
  "page_token",
  "occurred_after",
  "occurred_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      issueSandboxTestKey: async (sandbox_id, params, options) => this.#runtime.request("issueDeveloperSandboxTestKey", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      issueSandboxTestKeyWithResponse: async (sandbox_id, params, options) => this.#runtime.request("issueDeveloperSandboxTestKey", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      listCurrentAPIKeyRequestLogs: async (params, options) => this.#runtime.request("listCurrentAPIKeyRequestLogs", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "request_id",
  "http_method",
  "path_query",
  "resource_type",
  "resource_id",
  "status_bucket",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listCurrentAPIKeyRequestLogsWithResponse: async (params, options) => this.#runtime.request("listCurrentAPIKeyRequestLogs", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "request_id",
  "http_method",
  "path_query",
  "resource_type",
  "resource_id",
  "status_bucket",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listCurrentAPIKeyRequestLogsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listCurrentAPIKeyRequestLogs", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "request_id",
  "http_method",
  "path_query",
  "resource_type",
  "resource_id",
  "status_bucket",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options), []),
      listCurrentAPIKeyRequestLogsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listCurrentAPIKeyRequestLogs", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "request_id",
  "http_method",
  "path_query",
  "resource_type",
  "resource_id",
  "status_bucket",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options)),
      listCurrentAPIKeyRequestLogsItems: (params, options) => this.#runtime.items("listCurrentAPIKeyRequestLogs", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "request_id",
  "http_method",
  "path_query",
  "resource_type",
  "resource_id",
  "status_bucket",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options),
      listPartnerAppInstalls: async (partner_app_id, params, options) => this.#runtime.request("listDeveloperPartnerAppInstalls", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listPartnerAppInstallsWithResponse: async (partner_app_id, params, options) => this.#runtime.request("listDeveloperPartnerAppInstalls", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPartnerAppInstallsPages: (partner_app_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listDeveloperPartnerAppInstalls", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options), []),
      listPartnerAppInstallsPagesWithResponse: (partner_app_id, params, options) => _sdkResponsePages(this.#runtime.pages("listDeveloperPartnerAppInstalls", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options)),
      listPartnerAppInstallsItems: (partner_app_id, params, options) => this.#runtime.items("listDeveloperPartnerAppInstalls", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options),
      listPartnerApps: async (params, options) => this.#runtime.request("listDeveloperPartnerApps", _sdkRequestInput([], [], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listPartnerAppsWithResponse: async (params, options) => this.#runtime.request("listDeveloperPartnerApps", _sdkRequestInput([], [], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPartnerAppsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeveloperPartnerApps", _sdkRequestInput([], [], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options), []),
      listPartnerAppsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDeveloperPartnerApps", _sdkRequestInput([], [], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options)),
      listPartnerAppsItems: (params, options) => this.#runtime.items("listDeveloperPartnerApps", _sdkRequestInput([], [], [
  "X-Request-Id",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options),
      listSandboxes: async (params, options) => this.#runtime.request("listDeveloperSandboxes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listSandboxesWithResponse: async (params, options) => this.#runtime.request("listDeveloperSandboxes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listSandboxesPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeveloperSandboxes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options), []),
      listSandboxesPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDeveloperSandboxes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options)),
      listSandboxesItems: (params, options) => this.#runtime.items("listDeveloperSandboxes", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options),
      resetSandbox: async (sandbox_id, params, options) => this.#runtime.request("resetDeveloperSandbox", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      resetSandboxWithResponse: async (sandbox_id, params, options) => this.#runtime.request("resetDeveloperSandbox", _sdkRequestInput([
  "sandbox_id"
], [sandbox_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      revokePartnerAppInstall: async (partner_app_id, partner_app_install_id, params, options) => this.#runtime.request("revokeDeveloperPartnerAppInstall", _sdkRequestInput([
  "partner_app_id",
  "partner_app_install_id"
], [partner_app_id, partner_app_install_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      revokePartnerAppInstallWithResponse: async (partner_app_id, partner_app_install_id, params, options) => this.#runtime.request("revokeDeveloperPartnerAppInstall", _sdkRequestInput([
  "partner_app_id",
  "partner_app_install_id"
], [partner_app_id, partner_app_install_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      revokePartnerEnvironmentGrant: async (partner_app_id, partner_app_install_id, environment_grant_id, params, options) => this.#runtime.request("revokeDeveloperPartnerEnvironmentGrant", _sdkRequestInput([
  "partner_app_id",
  "partner_app_install_id",
  "environment_grant_id"
], [partner_app_id, partner_app_install_id, environment_grant_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      revokePartnerEnvironmentGrantWithResponse: async (partner_app_id, partner_app_install_id, environment_grant_id, params, options) => this.#runtime.request("revokeDeveloperPartnerEnvironmentGrant", _sdkRequestInput([
  "partner_app_id",
  "partner_app_install_id",
  "environment_grant_id"
], [partner_app_id, partner_app_install_id, environment_grant_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      rotatePartnerAppSecret: async (partner_app_id, params, options) => this.#runtime.request("rotateDeveloperPartnerAppSecret", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      rotatePartnerAppSecretWithResponse: async (partner_app_id, params, options) => this.#runtime.request("rotateDeveloperPartnerAppSecret", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      updatePartnerApp: async (partner_app_id, params, options) => this.#runtime.request("updateDeveloperPartnerApp", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updatePartnerAppWithResponse: async (partner_app_id, params, options) => this.#runtime.request("updateDeveloperPartnerApp", _sdkRequestInput([
  "partner_app_id"
], [partner_app_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeCreatePartnerAppResponse } from '../models/CreatePartnerAppResponse.js';
export { makeSandboxWithAPIKeyResponse } from '../models/SandboxWithAPIKeyResponse.js';
export { makeSandboxResponse } from '../models/SandboxResponse.js';
export { makeAPIRequestLogDetailResponse } from '../models/APIRequestLogDetailResponse.js';
export { makeDeveloperAuthContextResponse } from '../models/DeveloperAuthContextResponse.js';
export { makePartnerAppResponse } from '../models/PartnerAppResponse.js';
export { makePartnerAppInstallResponse } from '../models/PartnerAppInstallResponse.js';
export { makeResourceTimelineResponse } from '../models/ResourceTimelineResponse.js';
export { makeCreateAPIKeyResponse } from '../models/CreateAPIKeyResponse.js';
export { makeAPIRequestLogListResponse } from '../models/APIRequestLogListResponse.js';
export { makeAPIRequestLog } from '../models/APIRequestLog.js';
export { makePartnerAppInstallListResponse } from '../models/PartnerAppInstallListResponse.js';
export { makePartnerAppInstall } from '../models/PartnerAppInstall.js';
export { makePartnerAppListResponse } from '../models/PartnerAppListResponse.js';
export { makePartnerApp } from '../models/PartnerApp.js';
export { makeSandboxListResponse } from '../models/SandboxListResponse.js';
export { makeDeveloperSandbox } from '../models/DeveloperSandbox.js';
export { makeRotatePartnerAppSecretResponse } from '../models/RotatePartnerAppSecretResponse.js';
export { makeDeveloperAuthContext } from '../models/DeveloperAuthContext.js';
export { makeDeveloperInitialAPIKeyRequest } from '../models/DeveloperInitialAPIKeyRequest.js';
export { makeDeveloperSandboxWithAPIKey } from '../models/DeveloperSandboxWithAPIKey.js';
export { makePartnerAppWithSecret } from '../models/PartnerAppWithSecret.js';
export { makePartnerAppPermissionManifestEntry } from '../models/PartnerAppPermissionManifestEntry.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeAPIRequestLogDetail } from '../models/APIRequestLogDetail.js';
export { makeAPIRequestLogQueryParam } from '../models/APIRequestLogQueryParam.js';
export { makeAPIRequestLogReproduction } from '../models/APIRequestLogReproduction.js';
export { makeApiRequestLogResponseShapeMetadata } from '../models/ApiRequestLogResponseShapeMetadata.js';
export { makeApiRequestLogExpansionShape } from '../models/ApiRequestLogExpansionShape.js';
export { makeResourceTimeline } from '../models/ResourceTimeline.js';
export { makeResourceTimelineEntry } from '../models/ResourceTimelineEntry.js';
export { makeAPIKeyWithSecret } from '../models/APIKeyWithSecret.js';
export { makePartnerEnvironmentGrant } from '../models/PartnerEnvironmentGrant.js';
export { makePartnerAppSecretRotationResult } from '../models/PartnerAppSecretRotationResult.js';
export { makeAPIKey } from '../models/APIKey.js';
