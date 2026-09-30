export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { APIRequestLog } from '../declarations/APIRequestLog.js';
import type { APIRequestLogDetailResponse } from '../declarations/APIRequestLogDetailResponse.js';
import type { APIRequestLogListResponse } from '../declarations/APIRequestLogListResponse.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { CreateAPIKeyResponse } from '../declarations/CreateAPIKeyResponse.js';
import type { CreatePartnerAppResponse } from '../declarations/CreatePartnerAppResponse.js';
import type { DeveloperAuthContext } from '../declarations/DeveloperAuthContext.js';
import type { DeveloperAuthContextInput } from '../declarations/DeveloperAuthContextInput.js';
import type { DeveloperAuthContextResponse } from '../declarations/DeveloperAuthContextResponse.js';
import type { DeveloperAuthContextResponseInput } from '../declarations/DeveloperAuthContextResponseInput.js';
import type { DeveloperCreatePartnerAppInput } from '../declarations/DeveloperCreatePartnerAppInput.js';
import type { DeveloperCreatePartnerAppResponse } from '../declarations/DeveloperCreatePartnerAppResponse.js';
import type { DeveloperCreateSandboxInput } from '../declarations/DeveloperCreateSandboxInput.js';
import type { DeveloperCreateSandboxResponse } from '../declarations/DeveloperCreateSandboxResponse.js';
import type { DeveloperDeleteSandboxInput } from '../declarations/DeveloperDeleteSandboxInput.js';
import type { DeveloperDeleteSandboxResponse } from '../declarations/DeveloperDeleteSandboxResponse.js';
import type { DeveloperGetAuthContextInput } from '../declarations/DeveloperGetAuthContextInput.js';
import type { DeveloperGetAuthContextResponse } from '../declarations/DeveloperGetAuthContextResponse.js';
import type { DeveloperGetCurrentAPIKeyRequestLogInput } from '../declarations/DeveloperGetCurrentAPIKeyRequestLogInput.js';
import type { DeveloperGetCurrentAPIKeyRequestLogResponse } from '../declarations/DeveloperGetCurrentAPIKeyRequestLogResponse.js';
import type { DeveloperGetPartnerAppInput } from '../declarations/DeveloperGetPartnerAppInput.js';
import type { DeveloperGetPartnerAppInstallInput } from '../declarations/DeveloperGetPartnerAppInstallInput.js';
import type { DeveloperGetPartnerAppInstallResponse } from '../declarations/DeveloperGetPartnerAppInstallResponse.js';
import type { DeveloperGetPartnerAppResponse } from '../declarations/DeveloperGetPartnerAppResponse.js';
import type { DeveloperGetResourceTimelineInput } from '../declarations/DeveloperGetResourceTimelineInput.js';
import type { DeveloperGetResourceTimelineResponse } from '../declarations/DeveloperGetResourceTimelineResponse.js';
import type { DeveloperGetSandboxInput } from '../declarations/DeveloperGetSandboxInput.js';
import type { DeveloperGetSandboxResponse } from '../declarations/DeveloperGetSandboxResponse.js';
import type { DeveloperInitialAPIKeyRequest } from '../declarations/DeveloperInitialAPIKeyRequest.js';
import type { DeveloperInitialAPIKeyRequestInput } from '../declarations/DeveloperInitialAPIKeyRequestInput.js';
import type { DeveloperIssueSandboxTestKeyInput } from '../declarations/DeveloperIssueSandboxTestKeyInput.js';
import type { DeveloperIssueSandboxTestKeyResponse } from '../declarations/DeveloperIssueSandboxTestKeyResponse.js';
import type { DeveloperListCurrentAPIKeyRequestLogsInput } from '../declarations/DeveloperListCurrentAPIKeyRequestLogsInput.js';
import type { DeveloperListCurrentAPIKeyRequestLogsResponse } from '../declarations/DeveloperListCurrentAPIKeyRequestLogsResponse.js';
import type { DeveloperListPartnerAppInstallsInput } from '../declarations/DeveloperListPartnerAppInstallsInput.js';
import type { DeveloperListPartnerAppInstallsResponse } from '../declarations/DeveloperListPartnerAppInstallsResponse.js';
import type { DeveloperListPartnerAppsInput } from '../declarations/DeveloperListPartnerAppsInput.js';
import type { DeveloperListPartnerAppsResponse } from '../declarations/DeveloperListPartnerAppsResponse.js';
import type { DeveloperListSandboxesInput } from '../declarations/DeveloperListSandboxesInput.js';
import type { DeveloperListSandboxesResponse } from '../declarations/DeveloperListSandboxesResponse.js';
import type { DeveloperResetSandboxInput } from '../declarations/DeveloperResetSandboxInput.js';
import type { DeveloperResetSandboxResponse } from '../declarations/DeveloperResetSandboxResponse.js';
import type { DeveloperRevokePartnerAppInstallInput } from '../declarations/DeveloperRevokePartnerAppInstallInput.js';
import type { DeveloperRevokePartnerAppInstallResponse } from '../declarations/DeveloperRevokePartnerAppInstallResponse.js';
import type { DeveloperRevokePartnerEnvironmentGrantInput } from '../declarations/DeveloperRevokePartnerEnvironmentGrantInput.js';
import type { DeveloperRevokePartnerEnvironmentGrantResponse } from '../declarations/DeveloperRevokePartnerEnvironmentGrantResponse.js';
import type { DeveloperRotatePartnerAppSecretInput } from '../declarations/DeveloperRotatePartnerAppSecretInput.js';
import type { DeveloperRotatePartnerAppSecretResponse } from '../declarations/DeveloperRotatePartnerAppSecretResponse.js';
import type { DeveloperSandbox } from '../declarations/DeveloperSandbox.js';
import type { DeveloperSandboxInput } from '../declarations/DeveloperSandboxInput.js';
import type { DeveloperSandboxWithAPIKey } from '../declarations/DeveloperSandboxWithAPIKey.js';
import type { DeveloperSandboxWithAPIKeyInput } from '../declarations/DeveloperSandboxWithAPIKeyInput.js';
import type { DeveloperUpdatePartnerAppInput } from '../declarations/DeveloperUpdatePartnerAppInput.js';
import type { DeveloperUpdatePartnerAppResponse } from '../declarations/DeveloperUpdatePartnerAppResponse.js';
import type { PartnerApp } from '../declarations/PartnerApp.js';
import type { PartnerAppInstall } from '../declarations/PartnerAppInstall.js';
import type { PartnerAppInstallListResponse } from '../declarations/PartnerAppInstallListResponse.js';
import type { PartnerAppInstallResponse } from '../declarations/PartnerAppInstallResponse.js';
import type { PartnerAppListResponse } from '../declarations/PartnerAppListResponse.js';
import type { PartnerAppPermissionManifestEntryInput } from '../declarations/PartnerAppPermissionManifestEntryInput.js';
import type { PartnerAppResponse } from '../declarations/PartnerAppResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { ResourceTimelineResponse } from '../declarations/ResourceTimelineResponse.js';
import type { RotatePartnerAppSecretResponse } from '../declarations/RotatePartnerAppSecretResponse.js';
import type { SandboxListResponse } from '../declarations/SandboxListResponse.js';
import type { SandboxResponse } from '../declarations/SandboxResponse.js';
import type { SandboxWithAPIKeyResponse } from '../declarations/SandboxWithAPIKeyResponse.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface DeveloperResource {
    /**
 * Creates a partner app owned by the authenticated merchant. Use a developer setup session during setup or a normal external API key afterward.
 * POST /v1/developer/partner/apps
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.developer.createPartnerApp({name: "example", permission_manifest: [], redirect_uris: [], "Idempotency-Key": idempotencyKey})
 */
    createPartnerApp(params: (InputValue<{ "api_version"?: string; "app_type"?: string; "default_requested_permissions"?: Array<string>; "name": string; "permission_manifest": Array<PartnerAppPermissionManifestEntryInput>; "redirect_uris": Array<string>; "visibility"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey" | "onboarding">): Promise<_SdkPayloadAt<CreatePartnerAppResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createPartnerAppWithResponse(params: (InputValue<{ "api_version"?: string; "app_type"?: string; "default_requested_permissions"?: Array<string>; "name": string; "permission_manifest": Array<PartnerAppPermissionManifestEntryInput>; "redirect_uris": Array<string>; "visibility"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey" | "onboarding">): Promise<SdkResponse<DeveloperCreatePartnerAppResponse>>;
    /**
 * Creates a new test sandbox for the current merchant. Optionally seeds the new empty sandbox with the merchant's live defaults and issues a sandbox-bound test key as part of creation.
 * POST /v1/developer/sandboxes
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.developer.createSandbox({name: "example", "Idempotency-Key": idempotencyKey})
 */
    createSandbox(params: (InputValue<{ "issue_test_key"?: boolean; "name": string; "scopes"?: Array<string>; "test_key_name"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey" | "onboarding">): Promise<_SdkPayloadAt<SandboxWithAPIKeyResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createSandboxWithResponse(params: (InputValue<{ "issue_test_key"?: boolean; "name": string; "scopes"?: Array<string>; "test_key_name"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey" | "onboarding">): Promise<SdkResponse<DeveloperCreateSandboxResponse>>;
    /**
 * Retires a non-default sandbox and frees its original name for reuse.
 * DELETE /v1/developer/sandboxes/{sandbox_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.developer.deleteSandbox("example", {"Idempotency-Key": idempotencyKey})
 */
    deleteSandbox(sandbox_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey" | "onboarding">): Promise<_SdkPayloadAt<SandboxResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    deleteSandboxWithResponse(sandbox_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey" | "onboarding">): Promise<SdkResponse<DeveloperDeleteSandboxResponse>>;
    /**
 * Returns redacted request log detail for a request generated by the authenticated API key. Detail responses remain current-key scoped and redact headers, query parameters, request bodies, and response bodies before returning them.
 * GET /v1/developer/request-logs/{api_request_log_id}
 * @example
 * client.developer.getCurrentAPIKeyRequestLog("example", {})
 */
    getCurrentAPIKeyRequestLog(api_request_log_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<APIRequestLogDetailResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getCurrentAPIKeyRequestLogWithResponse(api_request_log_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<DeveloperGetCurrentAPIKeyRequestLogResponse>>;
    /**
 * Returns non-secret metadata for an API key or CLI OAuth access token, including its merchant, environment, sandbox binding, and granted scopes. CLI OAuth sessions include auth_type=oauth and a stable oauth_grant_id instead of api_key_id. Multi-context tokens also include oauth_session_id, context_id, and the context name. No additional API scope is required.
 * GET /v1/developer/auth-context
 * @example
 * client.developer.getAuthContext({})
 */
    getAuthContext(params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<DeveloperAuthContextResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getAuthContextWithResponse(params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<DeveloperGetAuthContextResponse>>;
    /**
 * Returns a single partner app owned by the authenticated merchant.
 * GET /v1/developer/partner/apps/{partner_app_id}
 * @example
 * client.developer.getPartnerApp("example", {})
 */
    getPartnerApp(partner_app_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey" | "onboarding">>): Promise<_SdkPayloadAt<PartnerAppResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getPartnerAppWithResponse(partner_app_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey" | "onboarding">>): Promise<SdkResponse<DeveloperGetPartnerAppResponse>>;
    /**
 * Returns a single install for a partner app owned by the authenticated merchant.
 * GET /v1/developer/partner/apps/{partner_app_id}/installs/{partner_app_install_id}
 * @example
 * client.developer.getPartnerAppInstall("example", "example", {})
 */
    getPartnerAppInstall(partner_app_id: InputValue<string>, partner_app_install_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey" | "onboarding">>): Promise<_SdkPayloadAt<PartnerAppInstallResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getPartnerAppInstallWithResponse(partner_app_id: InputValue<string>, partner_app_install_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey" | "onboarding">>): Promise<SdkResponse<DeveloperGetPartnerAppInstallResponse>>;
    /**
 * Returns a single sandbox by ID.
 * GET /v1/developer/sandboxes/{sandbox_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.developer.getSandbox("example", {"Idempotency-Key": idempotencyKey})
 */
    getSandbox(sandbox_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey" | "onboarding">>): Promise<_SdkPayloadAt<SandboxResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getSandboxWithResponse(sandbox_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey" | "onboarding">>): Promise<SdkResponse<DeveloperGetSandboxResponse>>;
    /**
 * Returns summary-only API request, webhook event, and webhook delivery attempt entries for a single public API resource. The caller must have developer.resource_timelines.read and the matching read scope for the requested resource type.
 * GET /v1/developer/resource-timelines/{resource_id}
 * @example
 * client.developer.getResourceTimeline("example", {})
 */
    getResourceTimeline(resource_id: InputValue<string>, params?: { "resource_type"?: InputValue<string>; "include"?: InputValue<Array<"requests" | "webhooks" | "attempts">>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "occurred_after"?: InputValue<string | globalThis.Date>; "occurred_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<ResourceTimelineResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getResourceTimelineWithResponse(resource_id: InputValue<string>, params?: { "resource_type"?: InputValue<string>; "include"?: InputValue<Array<"requests" | "webhooks" | "attempts">>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "occurred_after"?: InputValue<string | globalThis.Date>; "occurred_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<DeveloperGetResourceTimelineResponse>>;
    /**
 * Creates a new test API key that is bound to the target sandbox.
 * POST /v1/developer/sandboxes/{sandbox_id}/test-key
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.developer.issueSandboxTestKey("example", {name: "example", "Idempotency-Key": idempotencyKey})
 */
    issueSandboxTestKey(sandbox_id: InputValue<string>, params: (InputValue<{ "name": string; "scopes"?: Array<string>; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey" | "onboarding">): Promise<_SdkPayloadAt<CreateAPIKeyResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    issueSandboxTestKeyWithResponse(sandbox_id: InputValue<string>, params: (InputValue<{ "name": string; "scopes"?: Array<string>; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey" | "onboarding">): Promise<SdkResponse<DeveloperIssueSandboxTestKeyResponse>>;
    /**
 * Returns request log summaries generated by the authenticated API key. Results are always scoped to the calling key. Full request and response bodies are intentionally omitted from this public API surface to reduce the risk of sensitive data leakage.
 * GET /v1/developer/request-logs
 * @example
 * client.developer.listCurrentAPIKeyRequestLogs({})
 */
    listCurrentAPIKeyRequestLogs(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "request_id"?: InputValue<string>; "http_method"?: InputValue<string>; "path_query"?: InputValue<string>; "resource_type"?: InputValue<string>; "resource_id"?: InputValue<string>; "status_bucket"?: InputValue<"all" | "success" | "client_error" | "server_error">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<APIRequestLogListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listCurrentAPIKeyRequestLogsWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "request_id"?: InputValue<string>; "http_method"?: InputValue<string>; "path_query"?: InputValue<string>; "resource_type"?: InputValue<string>; "resource_id"?: InputValue<string>; "status_bucket"?: InputValue<"all" | "success" | "client_error" | "server_error">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<DeveloperListCurrentAPIKeyRequestLogsResponse>>;
    listCurrentAPIKeyRequestLogsPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "request_id"?: InputValue<string>; "http_method"?: InputValue<string>; "path_query"?: InputValue<string>; "resource_type"?: InputValue<string>; "resource_id"?: InputValue<string>; "status_bucket"?: InputValue<"all" | "success" | "client_error" | "server_error">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<APIRequestLogListResponse>;
    listCurrentAPIKeyRequestLogsPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "request_id"?: InputValue<string>; "http_method"?: InputValue<string>; "path_query"?: InputValue<string>; "resource_type"?: InputValue<string>; "resource_id"?: InputValue<string>; "status_bucket"?: InputValue<"all" | "success" | "client_error" | "server_error">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<DeveloperListCurrentAPIKeyRequestLogsResponse>>;
    listCurrentAPIKeyRequestLogsItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "request_id"?: InputValue<string>; "http_method"?: InputValue<string>; "path_query"?: InputValue<string>; "resource_type"?: InputValue<string>; "resource_id"?: InputValue<string>; "status_bucket"?: InputValue<"all" | "success" | "client_error" | "server_error">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<APIRequestLog>;
    /**
 * Returns installs for a partner app owned by the authenticated merchant.
 * GET /v1/developer/partner/apps/{partner_app_id}/installs
 * @example
 * client.developer.listPartnerAppInstalls("example", {})
 */
    listPartnerAppInstalls(partner_app_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey" | "onboarding">>): Promise<PartnerAppInstallListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listPartnerAppInstallsWithResponse(partner_app_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey" | "onboarding">>): Promise<SdkResponse<DeveloperListPartnerAppInstallsResponse>>;
    listPartnerAppInstallsPages(partner_app_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey" | "onboarding">>): AsyncGenerator<PartnerAppInstallListResponse>;
    listPartnerAppInstallsPagesWithResponse(partner_app_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey" | "onboarding">>): AsyncGenerator<SdkResponse<DeveloperListPartnerAppInstallsResponse>>;
    listPartnerAppInstallsItems(partner_app_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey" | "onboarding">>): AsyncGenerator<PartnerAppInstall>;
    /**
 * Returns partner apps owned by the authenticated merchant.
 * GET /v1/developer/partner/apps
 * @example
 * client.developer.listPartnerApps({})
 */
    listPartnerApps(params?: { "X-Request-Id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey" | "onboarding">>): Promise<PartnerAppListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listPartnerAppsWithResponse(params?: { "X-Request-Id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey" | "onboarding">>): Promise<SdkResponse<DeveloperListPartnerAppsResponse>>;
    listPartnerAppsPages(params?: { "X-Request-Id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey" | "onboarding">>): AsyncGenerator<PartnerAppListResponse>;
    listPartnerAppsPagesWithResponse(params?: { "X-Request-Id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey" | "onboarding">>): AsyncGenerator<SdkResponse<DeveloperListPartnerAppsResponse>>;
    listPartnerAppsItems(params?: { "X-Request-Id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey" | "onboarding">>): AsyncGenerator<PartnerApp>;
    /**
 * Returns the merchant's sandboxes, including archived sandboxes. Flint guarantees a default test sandbox for every merchant. Use an onboarding session token during setup or a normal external API key afterward.
 * GET /v1/developer/sandboxes
 * @example
 * client.developer.listSandboxes({})
 */
    listSandboxes(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "archived" | "all">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey" | "onboarding">>): Promise<SandboxListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listSandboxesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "archived" | "all">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey" | "onboarding">>): Promise<SdkResponse<DeveloperListSandboxesResponse>>;
    listSandboxesPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "archived" | "all">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey" | "onboarding">>): AsyncGenerator<SandboxListResponse>;
    listSandboxesPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "archived" | "all">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey" | "onboarding">>): AsyncGenerator<SdkResponse<DeveloperListSandboxesResponse>>;
    listSandboxesItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "archived" | "all">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey" | "onboarding">>): AsyncGenerator<DeveloperSandbox>;
    /**
 * Clears a non-default sandbox and returns its replacement environment. The replacement has a new sandbox ID, retains the stable provider-account lineage, and requires newly issued test keys.
 * POST /v1/developer/sandboxes/{sandbox_id}/reset
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.developer.resetSandbox("example", {"Idempotency-Key": idempotencyKey})
 */
    resetSandbox(sandbox_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey" | "onboarding">): Promise<_SdkPayloadAt<SandboxResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    resetSandboxWithResponse(sandbox_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey" | "onboarding">): Promise<SdkResponse<DeveloperResetSandboxResponse>>;
    /**
 * Revokes a partner app install and all of its environment grants.
 * POST /v1/developer/partner/apps/{partner_app_id}/installs/{partner_app_install_id}/revoke
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.developer.revokePartnerAppInstall("example", "example", {"Idempotency-Key": idempotencyKey})
 */
    revokePartnerAppInstall(partner_app_id: InputValue<string>, partner_app_install_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey" | "onboarding">): Promise<_SdkPayloadAt<PartnerAppInstallResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    revokePartnerAppInstallWithResponse(partner_app_id: InputValue<string>, partner_app_install_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey" | "onboarding">): Promise<SdkResponse<DeveloperRevokePartnerAppInstallResponse>>;
    /**
 * Revokes a single test or live environment grant for a partner app install.
 * POST /v1/developer/partner/apps/{partner_app_id}/installs/{partner_app_install_id}/environment-grants/{environment_grant_id}/revoke
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.developer.revokePartnerEnvironmentGrant("example", "example", "example", {"Idempotency-Key": idempotencyKey})
 */
    revokePartnerEnvironmentGrant(partner_app_id: InputValue<string>, partner_app_install_id: InputValue<string>, environment_grant_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey" | "onboarding">): Promise<_SdkPayloadAt<PartnerAppInstallResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    revokePartnerEnvironmentGrantWithResponse(partner_app_id: InputValue<string>, partner_app_install_id: InputValue<string>, environment_grant_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey" | "onboarding">): Promise<SdkResponse<DeveloperRevokePartnerEnvironmentGrantResponse>>;
    /**
 * Rotates the client secret for a partner app owned by the authenticated merchant. The new client_secret is only returned once.
 * POST /v1/developer/partner/apps/{partner_app_id}/rotate-secret
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.developer.rotatePartnerAppSecret("example", {"Idempotency-Key": idempotencyKey})
 */
    rotatePartnerAppSecret(partner_app_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey" | "onboarding">): Promise<_SdkPayloadAt<RotatePartnerAppSecretResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    rotatePartnerAppSecretWithResponse(partner_app_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey" | "onboarding">): Promise<SdkResponse<DeveloperRotatePartnerAppSecretResponse>>;
    /**
 * Updates the API version for a partner app owned by the authenticated merchant. Any supported version can be selected.
 * PATCH /v1/developer/partner/apps/{partner_app_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.developer.updatePartnerApp("example", {"Idempotency-Key": idempotencyKey})
 */
    updatePartnerApp(partner_app_id: InputValue<string>, params: (InputValue<{ "api_version"?: string; "expected_api_version"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey" | "onboarding">): Promise<_SdkPayloadAt<PartnerAppResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updatePartnerAppWithResponse(partner_app_id: InputValue<string>, params: (InputValue<{ "api_version"?: string; "expected_api_version"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey" | "onboarding">): Promise<SdkResponse<DeveloperUpdatePartnerAppResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly developer: DeveloperResource;
}
export type { PartnerAppPermissionManifestEntryInput } from '../declarations/PartnerAppPermissionManifestEntryInput.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { CreatePartnerAppResponse } from '../declarations/CreatePartnerAppResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { DeveloperCreatePartnerAppResponse } from '../declarations/DeveloperCreatePartnerAppResponse.js';
export type { SandboxWithAPIKeyResponse } from '../declarations/SandboxWithAPIKeyResponse.js';
export type { DeveloperCreateSandboxResponse } from '../declarations/DeveloperCreateSandboxResponse.js';
export type { SandboxResponse } from '../declarations/SandboxResponse.js';
export type { DeveloperDeleteSandboxResponse } from '../declarations/DeveloperDeleteSandboxResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { APIRequestLogDetailResponse } from '../declarations/APIRequestLogDetailResponse.js';
export type { DeveloperGetCurrentAPIKeyRequestLogResponse } from '../declarations/DeveloperGetCurrentAPIKeyRequestLogResponse.js';
export type { DeveloperAuthContextResponse } from '../declarations/DeveloperAuthContextResponse.js';
export type { DeveloperGetAuthContextResponse } from '../declarations/DeveloperGetAuthContextResponse.js';
export type { PartnerAppResponse } from '../declarations/PartnerAppResponse.js';
export type { DeveloperGetPartnerAppResponse } from '../declarations/DeveloperGetPartnerAppResponse.js';
export type { PartnerAppInstallResponse } from '../declarations/PartnerAppInstallResponse.js';
export type { DeveloperGetPartnerAppInstallResponse } from '../declarations/DeveloperGetPartnerAppInstallResponse.js';
export type { DeveloperGetSandboxResponse } from '../declarations/DeveloperGetSandboxResponse.js';
export type { ResourceTimelineResponse } from '../declarations/ResourceTimelineResponse.js';
export type { DeveloperGetResourceTimelineResponse } from '../declarations/DeveloperGetResourceTimelineResponse.js';
export type { CreateAPIKeyResponse } from '../declarations/CreateAPIKeyResponse.js';
export type { DeveloperIssueSandboxTestKeyResponse } from '../declarations/DeveloperIssueSandboxTestKeyResponse.js';
export type { APIRequestLogListResponse } from '../declarations/APIRequestLogListResponse.js';
export type { DeveloperListCurrentAPIKeyRequestLogsResponse } from '../declarations/DeveloperListCurrentAPIKeyRequestLogsResponse.js';
export type { APIRequestLog } from '../declarations/APIRequestLog.js';
export type { PartnerAppInstallListResponse } from '../declarations/PartnerAppInstallListResponse.js';
export type { DeveloperListPartnerAppInstallsResponse } from '../declarations/DeveloperListPartnerAppInstallsResponse.js';
export type { PartnerAppInstall } from '../declarations/PartnerAppInstall.js';
export type { PartnerAppListResponse } from '../declarations/PartnerAppListResponse.js';
export type { DeveloperListPartnerAppsResponse } from '../declarations/DeveloperListPartnerAppsResponse.js';
export type { PartnerApp } from '../declarations/PartnerApp.js';
export type { SandboxListResponse } from '../declarations/SandboxListResponse.js';
export type { DeveloperListSandboxesResponse } from '../declarations/DeveloperListSandboxesResponse.js';
export type { DeveloperSandbox } from '../declarations/DeveloperSandbox.js';
export type { DeveloperResetSandboxResponse } from '../declarations/DeveloperResetSandboxResponse.js';
export type { DeveloperRevokePartnerAppInstallResponse } from '../declarations/DeveloperRevokePartnerAppInstallResponse.js';
export type { DeveloperRevokePartnerEnvironmentGrantResponse } from '../declarations/DeveloperRevokePartnerEnvironmentGrantResponse.js';
export type { RotatePartnerAppSecretResponse } from '../declarations/RotatePartnerAppSecretResponse.js';
export type { DeveloperRotatePartnerAppSecretResponse } from '../declarations/DeveloperRotatePartnerAppSecretResponse.js';
export type { DeveloperUpdatePartnerAppResponse } from '../declarations/DeveloperUpdatePartnerAppResponse.js';
export type { DeveloperAuthContext } from '../declarations/DeveloperAuthContext.js';
export type { DeveloperAuthContextInput } from '../declarations/DeveloperAuthContextInput.js';
export type { DeveloperAuthContextResponseInput } from '../declarations/DeveloperAuthContextResponseInput.js';
export type { DeveloperInitialAPIKeyRequest } from '../declarations/DeveloperInitialAPIKeyRequest.js';
export type { DeveloperInitialAPIKeyRequestInput } from '../declarations/DeveloperInitialAPIKeyRequestInput.js';
export type { DeveloperSandboxInput } from '../declarations/DeveloperSandboxInput.js';
export type { DeveloperSandboxWithAPIKey } from '../declarations/DeveloperSandboxWithAPIKey.js';
export type { DeveloperSandboxWithAPIKeyInput } from '../declarations/DeveloperSandboxWithAPIKeyInput.js';
export type { DeveloperCreatePartnerAppInput } from '../declarations/DeveloperCreatePartnerAppInput.js';
export type { DeveloperCreateSandboxInput } from '../declarations/DeveloperCreateSandboxInput.js';
export type { DeveloperDeleteSandboxInput } from '../declarations/DeveloperDeleteSandboxInput.js';
export type { DeveloperGetCurrentAPIKeyRequestLogInput } from '../declarations/DeveloperGetCurrentAPIKeyRequestLogInput.js';
export type { DeveloperGetAuthContextInput } from '../declarations/DeveloperGetAuthContextInput.js';
export type { DeveloperGetPartnerAppInput } from '../declarations/DeveloperGetPartnerAppInput.js';
export type { DeveloperGetPartnerAppInstallInput } from '../declarations/DeveloperGetPartnerAppInstallInput.js';
export type { DeveloperGetSandboxInput } from '../declarations/DeveloperGetSandboxInput.js';
export type { DeveloperGetResourceTimelineInput } from '../declarations/DeveloperGetResourceTimelineInput.js';
export type { DeveloperIssueSandboxTestKeyInput } from '../declarations/DeveloperIssueSandboxTestKeyInput.js';
export type { DeveloperListCurrentAPIKeyRequestLogsInput } from '../declarations/DeveloperListCurrentAPIKeyRequestLogsInput.js';
export type { DeveloperListPartnerAppInstallsInput } from '../declarations/DeveloperListPartnerAppInstallsInput.js';
export type { DeveloperListPartnerAppsInput } from '../declarations/DeveloperListPartnerAppsInput.js';
export type { DeveloperListSandboxesInput } from '../declarations/DeveloperListSandboxesInput.js';
export type { DeveloperResetSandboxInput } from '../declarations/DeveloperResetSandboxInput.js';
export type { DeveloperRevokePartnerAppInstallInput } from '../declarations/DeveloperRevokePartnerAppInstallInput.js';
export type { DeveloperRevokePartnerEnvironmentGrantInput } from '../declarations/DeveloperRevokePartnerEnvironmentGrantInput.js';
export type { DeveloperRotatePartnerAppSecretInput } from '../declarations/DeveloperRotatePartnerAppSecretInput.js';
export type { DeveloperUpdatePartnerAppInput } from '../declarations/DeveloperUpdatePartnerAppInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { PartnerAppWithSecret } from '../declarations/PartnerAppWithSecret.js';
export type { PartnerAppPermissionManifestEntry } from '../declarations/PartnerAppPermissionManifestEntry.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { APIRequestLogDetail } from '../declarations/APIRequestLogDetail.js';
export type { APIRequestLogQueryParam } from '../declarations/APIRequestLogQueryParam.js';
export type { APIRequestLogReproduction } from '../declarations/APIRequestLogReproduction.js';
export type { ApiRequestLogResponseShapeMetadata } from '../declarations/ApiRequestLogResponseShapeMetadata.js';
export type { ApiRequestLogExpansionShape } from '../declarations/ApiRequestLogExpansionShape.js';
export type { ResourceTimeline } from '../declarations/ResourceTimeline.js';
export type { ResourceTimelineEntry } from '../declarations/ResourceTimelineEntry.js';
export type { APIKeyWithSecret } from '../declarations/APIKeyWithSecret.js';
export type { PartnerEnvironmentGrant } from '../declarations/PartnerEnvironmentGrant.js';
export type { PartnerAppSecretRotationResult } from '../declarations/PartnerAppSecretRotationResult.js';
export type { ResponseMetaInput } from '../declarations/ResponseMetaInput.js';
export type { ResponseWarningInput } from '../declarations/ResponseWarningInput.js';
export type { NextActionInput } from '../declarations/NextActionInput.js';
export type { APIKey } from '../declarations/APIKey.js';
export type { APIKeyInput } from '../declarations/APIKeyInput.js';
export type { CreatePartnerAppRequestInput } from '../declarations/CreatePartnerAppRequestInput.js';
export type { CreateSandboxRequestInput } from '../declarations/CreateSandboxRequestInput.js';
export type { IssueSandboxAPIKeyRequestInput } from '../declarations/IssueSandboxAPIKeyRequestInput.js';
export type { UpdatePartnerAppRequestInput } from '../declarations/UpdatePartnerAppRequestInput.js';
export { makeCreatePartnerAppResponse } from '../declarations/makeCreatePartnerAppResponse.js';
export { makeSandboxWithAPIKeyResponse } from '../declarations/makeSandboxWithAPIKeyResponse.js';
export { makeSandboxResponse } from '../declarations/makeSandboxResponse.js';
export { makeAPIRequestLogDetailResponse } from '../declarations/makeAPIRequestLogDetailResponse.js';
export { makeDeveloperAuthContextResponse } from '../declarations/makeDeveloperAuthContextResponse.js';
export { makePartnerAppResponse } from '../declarations/makePartnerAppResponse.js';
export { makePartnerAppInstallResponse } from '../declarations/makePartnerAppInstallResponse.js';
export { makeResourceTimelineResponse } from '../declarations/makeResourceTimelineResponse.js';
export { makeCreateAPIKeyResponse } from '../declarations/makeCreateAPIKeyResponse.js';
export { makeAPIRequestLogListResponse } from '../declarations/makeAPIRequestLogListResponse.js';
export { makeAPIRequestLog } from '../declarations/makeAPIRequestLog.js';
export { makePartnerAppInstallListResponse } from '../declarations/makePartnerAppInstallListResponse.js';
export { makePartnerAppInstall } from '../declarations/makePartnerAppInstall.js';
export { makePartnerAppListResponse } from '../declarations/makePartnerAppListResponse.js';
export { makePartnerApp } from '../declarations/makePartnerApp.js';
export { makeSandboxListResponse } from '../declarations/makeSandboxListResponse.js';
export { makeDeveloperSandbox } from '../declarations/makeDeveloperSandbox.js';
export { makeRotatePartnerAppSecretResponse } from '../declarations/makeRotatePartnerAppSecretResponse.js';
export { makeDeveloperAuthContext } from '../declarations/makeDeveloperAuthContext.js';
export { makeDeveloperInitialAPIKeyRequest } from '../declarations/makeDeveloperInitialAPIKeyRequest.js';
export { makeDeveloperSandboxWithAPIKey } from '../declarations/makeDeveloperSandboxWithAPIKey.js';
export { makePartnerAppWithSecret } from '../declarations/makePartnerAppWithSecret.js';
export { makePartnerAppPermissionManifestEntry } from '../declarations/makePartnerAppPermissionManifestEntry.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeAPIRequestLogDetail } from '../declarations/makeAPIRequestLogDetail.js';
export { makeAPIRequestLogQueryParam } from '../declarations/makeAPIRequestLogQueryParam.js';
export { makeAPIRequestLogReproduction } from '../declarations/makeAPIRequestLogReproduction.js';
export { makeApiRequestLogResponseShapeMetadata } from '../declarations/makeApiRequestLogResponseShapeMetadata.js';
export { makeApiRequestLogExpansionShape } from '../declarations/makeApiRequestLogExpansionShape.js';
export { makeResourceTimeline } from '../declarations/makeResourceTimeline.js';
export { makeResourceTimelineEntry } from '../declarations/makeResourceTimelineEntry.js';
export { makeAPIKeyWithSecret } from '../declarations/makeAPIKeyWithSecret.js';
export { makePartnerEnvironmentGrant } from '../declarations/makePartnerEnvironmentGrant.js';
export { makePartnerAppSecretRotationResult } from '../declarations/makePartnerAppSecretRotationResult.js';
export { makeAPIKey } from '../declarations/makeAPIKey.js';
