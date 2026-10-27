import type { InputValue } from '../runtime.js';
import type {
    APIKeyWithSecret,
    APIRequestLog,
    APIRequestLogDetail,
    APIRequestLogDetailResponse,
    APIRequestLogListResponse
} from '../declarations/types-0.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateAPIKeyResponse } from '../declarations/types-5.js';
import type { CreateDeveloperSandboxResult } from '../declarations/types-6.js';
import type { CreatePartnerAppRequestInput } from '../declarations/types-7.js';
import type { CreateSandboxRequestInput } from '../declarations/types-9.js';
import type {
    DeveloperAuthContext,
    DeveloperAuthContextResponse,
    DeveloperCreatePartnerAppInput,
    DeveloperCreateSandboxAPIKeyInput,
    DeveloperCreateSandboxInput,
    DeveloperDeletePartnerAppInput,
    DeveloperDeleteSandboxInput,
    DeveloperGetAuthContextInput,
    DeveloperGetCurrentAPIKeyRequestLogInput,
    DeveloperGetPartnerAppInput,
    DeveloperGetPartnerAppInstallInput,
    DeveloperGetResourceTimelineInput,
    DeveloperGetSandboxInput,
    DeveloperInitialAPIKeyRequest,
    DeveloperInitialAPIKeyRequestInput,
    DeveloperListCurrentAPIKeyRequestLogsInput,
    DeveloperListPartnerAppInstallsInput
} from '../declarations/types-15.js';
import type {
    DeveloperListPartnerAppsInput,
    DeveloperListPartnerInstallsInput,
    DeveloperListSandboxesInput,
    DeveloperResetSandboxInput,
    DeveloperRevokePartnerAppInstallInput,
    DeveloperRevokePartnerEnvironmentGrantInput,
    DeveloperRotatePartnerAppSecretInput,
    DeveloperSandbox,
    DeveloperUpdatePartnerAppInput
} from '../declarations/types-16.js';
import type { IssueSandboxAPIKeyRequestInput } from '../declarations/types-28.js';
import type {
    PartnerApp,
    PartnerAppInstall,
    PartnerAppInstallListResponse,
    PartnerAppInstallResponse,
    PartnerAppListResponse
} from '../declarations/types-34.js';
import type { PartnerAppResponse, PartnerAppWithSecret, PartnerAppWithSecretResponse } from '../declarations/types-35.js';
import type { RequestOptions, ResourceTimeline, ResourceTimelineResponse } from '../declarations/types-40.js';
import type { RotatePartnerAppSecretRequestInput, SandboxListResponse, SandboxResponse } from '../declarations/types-43.js';
import type { SandboxWithAPIKeyResponse, SdkResponse } from '../declarations/types-44.js';
import type { UpdatePartnerAppRequestInput } from '../declarations/types-48.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    Metadata,
    ErrorKind,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type { CreatePartnerAppRequestInput } from '../declarations/types-7.js';
export type {
    RequestOptions,
    ResourceTimeline,
    ResourceTimelineResponse,
    ResponseMeta,
    ResponseWarning,
    ResourceReference,
    ResourceType,
    ResourceTimelineEntry,
    ResourceTimelineAPIRequestEntry,
    ResourceTimelineWebhookEventEntry,
    ResourceTimelineWebhookDeliveryAttemptEntry,
    ResourceTimelineImageMutationEntry
} from '../declarations/types-40.js';
export type {
    PartnerAppWithSecret,
    PartnerAppWithSecretResponse,
    PartnerAppResponse,
    PartnerAppPermissionManifestEntryInput,
    PartnerAppPermissionManifestEntry,
    PartnerEnvironmentGrant
} from '../declarations/types-35.js';
export type { SdkResponse, SandboxWithAPIKeyResponse } from '../declarations/types-44.js';
export type { CreateSandboxRequestInput, Credentials } from '../declarations/types-9.js';
export type { CreateDeveloperSandboxResult } from '../declarations/types-6.js';
export type { IssueSandboxAPIKeyRequestInput } from '../declarations/types-28.js';
export type {
    APIKeyWithSecret,
    APIRequestLogDetail,
    APIRequestLogDetailResponse,
    APIRequestLogListResponse,
    APIRequestLog,
    AuthMode,
    APIKey,
    APIRequestLogQueryParam,
    APIRequestLogReproduction
} from '../declarations/types-0.js';
export type { CreateAPIKeyResponse } from '../declarations/types-5.js';
export type {
    PartnerApp,
    PartnerAppInstall,
    PartnerAppInstallResponse,
    PartnerAppInstallListResponse,
    PartnerAppListResponse
} from '../declarations/types-34.js';
export type {
    DeveloperSandbox,
    DeveloperListPartnerAppsInput,
    DeveloperListPartnerInstallsInput,
    DeveloperListSandboxesInput,
    DeveloperResetSandboxInput,
    DeveloperRevokePartnerAppInstallInput,
    DeveloperRevokePartnerEnvironmentGrantInput,
    DeveloperRotatePartnerAppSecretInput,
    DeveloperUpdatePartnerAppInput
} from '../declarations/types-16.js';
export type { SandboxResponse, SandboxListResponse, RotatePartnerAppSecretRequestInput } from '../declarations/types-43.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type {
    DeveloperAuthContext,
    DeveloperAuthContextResponse,
    DeveloperInitialAPIKeyRequest,
    DeveloperInitialAPIKeyRequestInput,
    DeveloperCreatePartnerAppInput,
    DeveloperCreateSandboxInput,
    DeveloperCreateSandboxAPIKeyInput,
    DeveloperDeletePartnerAppInput,
    DeveloperDeleteSandboxInput,
    DeveloperGetCurrentAPIKeyRequestLogInput,
    DeveloperGetAuthContextInput,
    DeveloperGetPartnerAppInput,
    DeveloperGetPartnerAppInstallInput,
    DeveloperGetSandboxInput,
    DeveloperGetResourceTimelineInput,
    DeveloperListCurrentAPIKeyRequestLogsInput,
    DeveloperListPartnerAppInstallsInput
} from '../declarations/types-15.js';
export type { UpdatePartnerAppRequestInput } from '../declarations/types-48.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeCreatePartnerAppRequest } from '../declarations/types-64.js';
export { makeCreateSandboxRequest } from '../declarations/types-65.js';
export { makeDeveloperInitialAPIKeyRequest } from '../declarations/types-66.js';
export { makeIssueSandboxAPIKeyRequest, makeMoneyValue } from '../declarations/types-68.js';
export { makePartnerAppPermissionManifestEntry } from '../declarations/types-69.js';
export { makeRotatePartnerAppSecretRequest } from '../declarations/types-71.js';
export { makeUpdatePartnerAppRequest } from '../declarations/types-73.js';
export interface DeveloperResource {
    /**
 * Creates a partner app owned by the authenticated merchant. Use a developer setup session during
 * setup or a normal external API key afterward.
 * @see reference/developer.md#developercreatepartnerapp
 * POST /v1/developer/partner/apps
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.developer.createPartnerApp({name: "example", permission_manifest: [], redirect_uris: []},
 * { idempotencyKey: idempotencyKey })
 */
    createPartnerApp(params: (InputValue<CreatePartnerAppRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "onboarding">): Promise<PartnerAppWithSecret>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/developer.md#developercreatepartnerapp
     */
    createPartnerAppWithResponse(params: (InputValue<CreatePartnerAppRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "onboarding">): Promise<SdkResponse<PartnerAppWithSecretResponse>>;
    /**
 * Creates a new empty test sandbox for the current merchant. Send `issue_test_key: true` to also
 * receive a test key bound to it.
 * @see reference/developer.md#developercreatesandbox
 * POST /v1/developer/sandboxes
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.developer.createSandbox({name: "example", issue_test_key: true, scopes: []}, {
 * idempotencyKey: idempotencyKey })
 */
    createSandbox(params: (InputValue<CreateSandboxRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "onboarding">): Promise<CreateDeveloperSandboxResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/developer.md#developercreatesandbox
     */
    createSandboxWithResponse(params: (InputValue<CreateSandboxRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "onboarding">): Promise<SdkResponse<SandboxWithAPIKeyResponse>>;
    /**
 * Creates a new test API key that is bound to the target sandbox.
 * @see reference/developer.md#developercreatesandboxapikey
 * POST /v1/developer/sandboxes/{sandbox_id}/api-keys
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.developer.createSandboxAPIKey("example", {name: "example", scopes: []}, { idempotencyKey:
 * idempotencyKey })
 */
    createSandboxAPIKey(sandbox_id: InputValue<string>, params: (InputValue<IssueSandboxAPIKeyRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "onboarding">): Promise<APIKeyWithSecret>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/developer.md#developercreatesandboxapikey
     */
    createSandboxAPIKeyWithResponse(sandbox_id: InputValue<string>, params: (InputValue<IssueSandboxAPIKeyRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "onboarding">): Promise<SdkResponse<CreateAPIKeyResponse>>;
    /**
 * Archives a partner app (soft delete). The app stays readable with status archived; it cannot be
 * installed, exchange tokens, or receive events, and its client ID is never reused. Revoke every
 * active install first; pending installs are revoked with the app. Delete the app’s webhook
 * endpoints separately.
 * @see reference/developer.md#developerdeletepartnerapp
 * DELETE /v1/developer/partner/apps/{partner_app_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.developer.deletePartnerApp("example", {}, { idempotencyKey: idempotencyKey })
 */
    deletePartnerApp(partner_app_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<PartnerApp>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/developer.md#developerdeletepartnerapp
     */
    deletePartnerAppWithResponse(partner_app_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<PartnerAppResponse>>;
    /**
 * Retires a non-default sandbox and frees its original name for reuse.
 * @see reference/developer.md#developerdeletesandbox
 * DELETE /v1/developer/sandboxes/{sandbox_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.developer.deleteSandbox("example", {}, { idempotencyKey: idempotencyKey })
 */
    deleteSandbox(sandbox_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "onboarding">): Promise<DeveloperSandbox>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/developer.md#developerdeletesandbox
     */
    deleteSandboxWithResponse(sandbox_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "onboarding">): Promise<SdkResponse<SandboxResponse>>;
    /**
 * Returns one request with redacted headers, the redacted request and response bodies for write
 * routes that capture them, and a curl reproduction. Detail older than 14 days has no headers or
 * bodies.
 * @see reference/developer.md#developergetcurrentapikeyrequestlog
 * GET /v1/developer/request-logs/{api_request_log_id}
 * @example
 * client.developer.getCurrentAPIKeyRequestLog("example")
 */
    getCurrentAPIKeyRequestLog(api_request_log_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<APIRequestLogDetail>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/developer.md#developergetcurrentapikeyrequestlog
     */
    getCurrentAPIKeyRequestLogWithResponse(api_request_log_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<APIRequestLogDetailResponse>>;
    /**
 * Returns non-secret metadata for an API key or CLI OAuth access token, including its merchant,
 * environment, sandbox binding, and granted scopes. CLI OAuth sessions include auth_type=oauth and
 * a stable oauth_grant_id instead of api_key_id. Multi-context tokens also include
 * oauth_session_id, context_id, and the context name. No additional API scope is required.
 * @see reference/developer.md#developergetauthcontext
 * GET /v1/developer/auth-context
 * @example
 * client.developer.getAuthContext()
 */
    getAuthContext(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<DeveloperAuthContext>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/developer.md#developergetauthcontext
     */
    getAuthContextWithResponse(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<DeveloperAuthContextResponse>>;
    /**
 * Returns a single partner app owned by the authenticated merchant.
 * @see reference/developer.md#developergetpartnerapp
 * GET /v1/developer/partner/apps/{partner_app_id}
 * @example
 * client.developer.getPartnerApp("example")
 */
    getPartnerApp(partner_app_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): Promise<PartnerApp>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/developer.md#developergetpartnerapp
     */
    getPartnerAppWithResponse(partner_app_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): Promise<SdkResponse<PartnerAppResponse>>;
    /**
 * Returns a single install for the installing merchant or the partner app owner.
 * @see reference/developer.md#developergetpartnerappinstall
 * GET /v1/developer/partner/apps/{partner_app_id}/installs/{partner_app_install_id}
 * @example
 * client.developer.getPartnerAppInstall("example", "example")
 */
    getPartnerAppInstall(partner_app_id: InputValue<string>, partner_app_install_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): Promise<PartnerAppInstall>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/developer.md#developergetpartnerappinstall
     */
    getPartnerAppInstallWithResponse(partner_app_id: InputValue<string>, partner_app_install_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): Promise<SdkResponse<PartnerAppInstallResponse>>;
    /**
 * Returns a single sandbox by ID.
 * @see reference/developer.md#developergetsandbox
 * GET /v1/developer/sandboxes/{sandbox_id}
 * @example
 * client.developer.getSandbox("example")
 */
    getSandbox(sandbox_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): Promise<DeveloperSandbox>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/developer.md#developergetsandbox
     */
    getSandboxWithResponse(sandbox_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): Promise<SdkResponse<SandboxResponse>>;
    /**
 * Returns summary-only API request, webhook event, webhook delivery attempt, and image mutation
 * entries for a single public API resource. The caller must have developer.resource_timelines.read
 * and the matching read scope for the requested resource type.
 * @see reference/developer.md#developergetresourcetimeline
 * GET /v1/developer/resource-timelines/{resource_id}
 * @example
 * client.developer.getResourceTimeline("example")
 */
    getResourceTimeline(resource_id: InputValue<string>, params?: {
        "resource_type"?: InputValue<"balance"
            | "balance_transaction"
            | "bundle"
            | "category"
            | "checkout_session"
            | "credit_note"
            | "credit_note_allocation"
            | "customer"
            | "dispute"
            | "fraud_warning"
            | "inventory_count"
            | "inventory_level"
            | "inventory_receipt"
            | "inventory_reservation"
            | "inventory_reservation_line"
            | "inventory_transfer"
            | "invoice"
            | "invoice_payment_term"
            | "merchant_billing_balance"
            | "merchant_billing_invoice"
            | "modifier"
            | "modifier_group"
            | "modifier_set"
            | "order"
            | "payment_intent"
            | "payment_link"
            | "payment_method"
            | "payment_method_domain"
            | "payment_review"
            | "payout"
            | "payout_destination"
            | "payout_settings"
            | "product"
            | "product_variant"
            | "promotion"
            | "promotion_code"
            | "refund"
            | "return"
            | "return_activity"
            | "return_disposition"
            | "return_inspection"
            | "return_receipt"
            | "return_resolution"
            | "risk_list"
            | "risk_list_item"
            | "risk_rule"
            | "subscription"
            | "subscription_plan">;
        "include"?: InputValue<Array<"requests" | "webhooks" | "attempts" | "image_mutations">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<ResourceTimeline>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/developer.md#developergetresourcetimeline
     */
    getResourceTimelineWithResponse(resource_id: InputValue<string>, params?: {
        "resource_type"?: InputValue<"balance"
            | "balance_transaction"
            | "bundle"
            | "category"
            | "checkout_session"
            | "credit_note"
            | "credit_note_allocation"
            | "customer"
            | "dispute"
            | "fraud_warning"
            | "inventory_count"
            | "inventory_level"
            | "inventory_receipt"
            | "inventory_reservation"
            | "inventory_reservation_line"
            | "inventory_transfer"
            | "invoice"
            | "invoice_payment_term"
            | "merchant_billing_balance"
            | "merchant_billing_invoice"
            | "modifier"
            | "modifier_group"
            | "modifier_set"
            | "order"
            | "payment_intent"
            | "payment_link"
            | "payment_method"
            | "payment_method_domain"
            | "payment_review"
            | "payout"
            | "payout_destination"
            | "payout_settings"
            | "product"
            | "product_variant"
            | "promotion"
            | "promotion_code"
            | "refund"
            | "return"
            | "return_activity"
            | "return_disposition"
            | "return_inspection"
            | "return_receipt"
            | "return_resolution"
            | "risk_list"
            | "risk_list_item"
            | "risk_rule"
            | "subscription"
            | "subscription_plan">;
        "include"?: InputValue<Array<"requests" | "webhooks" | "attempts" | "image_mutations">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<ResourceTimelineResponse>>;
    /**
 * Returns request summaries, newest first. With developer.request_logs.read the list covers every
 * caller in the credential's environment. With developer.request_logs.self.read it covers only the
 * calling credential's requests. Headers, bodies and a reproduction are on the detail route.
 * @see reference/developer.md#developerlistcurrentapikeyrequestlogs
 * GET /v1/developer/request-logs
 * @example
 * client.developer.listCurrentAPIKeyRequestLogs()
 */
    listCurrentAPIKeyRequestLogs(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "caller_type"?: InputValue<Array<"api_key"
            | "user"
            | "partner_app_install"
            | "checkout_session"
            | "customer_session"
            | "invoice"
            | "workload_identity">>;
        "caller_id"?: InputValue<string>;
        "request_id"?: InputValue<string>;
        "client_request_id"?: InputValue<string>;
        "client_trace_id"?: InputValue<string>;
        "http_method"?: InputValue<Array<"GET" | "HEAD" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "CONNECT" | "TRACE">>;
        "path_query"?: InputValue<string>;
        "resource_type"?: InputValue<Array<"api_key"
            | "api_request_log"
            | "balance"
            | "balance_transaction"
            | "bundle"
            | "bundle_component"
            | "category"
            | "checkout_session"
            | "checkout_session_customer_verification"
            | "credit_note"
            | "credit_note_allocation"
            | "custom_domain"
            | "customer"
            | "customer_address"
            | "customer_deletion_request"
            | "customer_email_preferences"
            | "customer_session"
            | "customer_verification"
            | "delivery_location_set"
            | "delivery_method"
            | "delivery_profile"
            | "delivery_quote"
            | "delivery_rate"
            | "delivery_rate_callback"
            | "delivery_revocation"
            | "delivery_selection"
            | "delivery_zone"
            | "device"
            | "discount"
            | "dispute"
            | "email_change_request"
            | "environment_grant"
            | "feedback_report"
            | "file"
            | "flint_wallet"
            | "flint_wallet_card"
            | "fraud_warning"
            | "fulfillment"
            | "fulfillment_event"
            | "fulfillment_notification"
            | "gift_card"
            | "gift_card_funding_disposition"
            | "gift_card_load"
            | "gift_card_notification"
            | "gift_card_redemption"
            | "gift_card_transaction"
            | "inventory_adjustment"
            | "inventory_allocation_policy"
            | "inventory_allocation_policy_revision"
            | "inventory_count"
            | "inventory_item"
            | "inventory_level"
            | "inventory_movement"
            | "inventory_receipt"
            | "inventory_reservation"
            | "inventory_reservation_line"
            | "inventory_transfer"
            | "inventory_transfer_line"
            | "invoice"
            | "invoice_delivery_attempt"
            | "invoice_late_fee"
            | "invoice_line_item"
            | "invoice_manual_payment"
            | "invoice_payment_attempt"
            | "invoice_payment_term"
            | "location"
            | "merchant"
            | "merchant_billing_balance"
            | "merchant_billing_entry"
            | "merchant_billing_invoice"
            | "modifier"
            | "modifier_group"
            | "modifier_set"
            | "order"
            | "order_charge"
            | "order_line_item"
            | "order_line_item_modifier"
            | "order_payment_attempt"
            | "organization"
            | "package"
            | "package_item"
            | "partner_app"
            | "partner_app_install"
            | "payment_intent"
            | "payment_link"
            | "payment_link_custom_field"
            | "payment_link_line_item"
            | "payment_method"
            | "payment_method_domain"
            | "payment_review"
            | "payout"
            | "payout_destination"
            | "payout_settings"
            | "product"
            | "product_option"
            | "product_option_value"
            | "product_variant"
            | "promotion"
            | "promotion_code"
            | "purchase_refund_allocation"
            | "refund"
            | "refund_allocation"
            | "refund_line_item_adjustment"
            | "report"
            | "report_download"
            | "return"
            | "return_activity"
            | "return_disposition"
            | "return_inspection"
            | "return_inspection_line_item"
            | "return_line_item"
            | "return_policy"
            | "return_policy_revision"
            | "return_reason"
            | "return_receipt"
            | "return_receipt_line_item"
            | "return_resolution"
            | "risk_list"
            | "risk_list_item"
            | "risk_rule"
            | "sandbox"
            | "settings"
            | "shipment"
            | "subscription"
            | "subscription_delivery_migration"
            | "subscription_line_item"
            | "subscription_offer"
            | "subscription_payment_retry"
            | "subscription_plan"
            | "subscription_plan_line_item"
            | "user"
            | "webhook_delivery"
            | "webhook_endpoint"
            | "webhook_event"
            | "workload_identity">>;
        "resource_id"?: InputValue<string>;
        "status_bucket"?: InputValue<Array<"success" | "client_error" | "server_error">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<APIRequestLogListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/developer.md#developerlistcurrentapikeyrequestlogs
     */
    listCurrentAPIKeyRequestLogsWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "caller_type"?: InputValue<Array<"api_key"
            | "user"
            | "partner_app_install"
            | "checkout_session"
            | "customer_session"
            | "invoice"
            | "workload_identity">>;
        "caller_id"?: InputValue<string>;
        "request_id"?: InputValue<string>;
        "client_request_id"?: InputValue<string>;
        "client_trace_id"?: InputValue<string>;
        "http_method"?: InputValue<Array<"GET" | "HEAD" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "CONNECT" | "TRACE">>;
        "path_query"?: InputValue<string>;
        "resource_type"?: InputValue<Array<"api_key"
            | "api_request_log"
            | "balance"
            | "balance_transaction"
            | "bundle"
            | "bundle_component"
            | "category"
            | "checkout_session"
            | "checkout_session_customer_verification"
            | "credit_note"
            | "credit_note_allocation"
            | "custom_domain"
            | "customer"
            | "customer_address"
            | "customer_deletion_request"
            | "customer_email_preferences"
            | "customer_session"
            | "customer_verification"
            | "delivery_location_set"
            | "delivery_method"
            | "delivery_profile"
            | "delivery_quote"
            | "delivery_rate"
            | "delivery_rate_callback"
            | "delivery_revocation"
            | "delivery_selection"
            | "delivery_zone"
            | "device"
            | "discount"
            | "dispute"
            | "email_change_request"
            | "environment_grant"
            | "feedback_report"
            | "file"
            | "flint_wallet"
            | "flint_wallet_card"
            | "fraud_warning"
            | "fulfillment"
            | "fulfillment_event"
            | "fulfillment_notification"
            | "gift_card"
            | "gift_card_funding_disposition"
            | "gift_card_load"
            | "gift_card_notification"
            | "gift_card_redemption"
            | "gift_card_transaction"
            | "inventory_adjustment"
            | "inventory_allocation_policy"
            | "inventory_allocation_policy_revision"
            | "inventory_count"
            | "inventory_item"
            | "inventory_level"
            | "inventory_movement"
            | "inventory_receipt"
            | "inventory_reservation"
            | "inventory_reservation_line"
            | "inventory_transfer"
            | "inventory_transfer_line"
            | "invoice"
            | "invoice_delivery_attempt"
            | "invoice_late_fee"
            | "invoice_line_item"
            | "invoice_manual_payment"
            | "invoice_payment_attempt"
            | "invoice_payment_term"
            | "location"
            | "merchant"
            | "merchant_billing_balance"
            | "merchant_billing_entry"
            | "merchant_billing_invoice"
            | "modifier"
            | "modifier_group"
            | "modifier_set"
            | "order"
            | "order_charge"
            | "order_line_item"
            | "order_line_item_modifier"
            | "order_payment_attempt"
            | "organization"
            | "package"
            | "package_item"
            | "partner_app"
            | "partner_app_install"
            | "payment_intent"
            | "payment_link"
            | "payment_link_custom_field"
            | "payment_link_line_item"
            | "payment_method"
            | "payment_method_domain"
            | "payment_review"
            | "payout"
            | "payout_destination"
            | "payout_settings"
            | "product"
            | "product_option"
            | "product_option_value"
            | "product_variant"
            | "promotion"
            | "promotion_code"
            | "purchase_refund_allocation"
            | "refund"
            | "refund_allocation"
            | "refund_line_item_adjustment"
            | "report"
            | "report_download"
            | "return"
            | "return_activity"
            | "return_disposition"
            | "return_inspection"
            | "return_inspection_line_item"
            | "return_line_item"
            | "return_policy"
            | "return_policy_revision"
            | "return_reason"
            | "return_receipt"
            | "return_receipt_line_item"
            | "return_resolution"
            | "risk_list"
            | "risk_list_item"
            | "risk_rule"
            | "sandbox"
            | "settings"
            | "shipment"
            | "subscription"
            | "subscription_delivery_migration"
            | "subscription_line_item"
            | "subscription_offer"
            | "subscription_payment_retry"
            | "subscription_plan"
            | "subscription_plan_line_item"
            | "user"
            | "webhook_delivery"
            | "webhook_endpoint"
            | "webhook_event"
            | "workload_identity">>;
        "resource_id"?: InputValue<string>;
        "status_bucket"?: InputValue<Array<"success" | "client_error" | "server_error">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<APIRequestLogListResponse>>;
    /** Iterate pages lazily.
     * @see reference/developer.md#developerlistcurrentapikeyrequestlogs
     */
    listCurrentAPIKeyRequestLogsPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "caller_type"?: InputValue<Array<"api_key"
            | "user"
            | "partner_app_install"
            | "checkout_session"
            | "customer_session"
            | "invoice"
            | "workload_identity">>;
        "caller_id"?: InputValue<string>;
        "request_id"?: InputValue<string>;
        "client_request_id"?: InputValue<string>;
        "client_trace_id"?: InputValue<string>;
        "http_method"?: InputValue<Array<"GET" | "HEAD" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "CONNECT" | "TRACE">>;
        "path_query"?: InputValue<string>;
        "resource_type"?: InputValue<Array<"api_key"
            | "api_request_log"
            | "balance"
            | "balance_transaction"
            | "bundle"
            | "bundle_component"
            | "category"
            | "checkout_session"
            | "checkout_session_customer_verification"
            | "credit_note"
            | "credit_note_allocation"
            | "custom_domain"
            | "customer"
            | "customer_address"
            | "customer_deletion_request"
            | "customer_email_preferences"
            | "customer_session"
            | "customer_verification"
            | "delivery_location_set"
            | "delivery_method"
            | "delivery_profile"
            | "delivery_quote"
            | "delivery_rate"
            | "delivery_rate_callback"
            | "delivery_revocation"
            | "delivery_selection"
            | "delivery_zone"
            | "device"
            | "discount"
            | "dispute"
            | "email_change_request"
            | "environment_grant"
            | "feedback_report"
            | "file"
            | "flint_wallet"
            | "flint_wallet_card"
            | "fraud_warning"
            | "fulfillment"
            | "fulfillment_event"
            | "fulfillment_notification"
            | "gift_card"
            | "gift_card_funding_disposition"
            | "gift_card_load"
            | "gift_card_notification"
            | "gift_card_redemption"
            | "gift_card_transaction"
            | "inventory_adjustment"
            | "inventory_allocation_policy"
            | "inventory_allocation_policy_revision"
            | "inventory_count"
            | "inventory_item"
            | "inventory_level"
            | "inventory_movement"
            | "inventory_receipt"
            | "inventory_reservation"
            | "inventory_reservation_line"
            | "inventory_transfer"
            | "inventory_transfer_line"
            | "invoice"
            | "invoice_delivery_attempt"
            | "invoice_late_fee"
            | "invoice_line_item"
            | "invoice_manual_payment"
            | "invoice_payment_attempt"
            | "invoice_payment_term"
            | "location"
            | "merchant"
            | "merchant_billing_balance"
            | "merchant_billing_entry"
            | "merchant_billing_invoice"
            | "modifier"
            | "modifier_group"
            | "modifier_set"
            | "order"
            | "order_charge"
            | "order_line_item"
            | "order_line_item_modifier"
            | "order_payment_attempt"
            | "organization"
            | "package"
            | "package_item"
            | "partner_app"
            | "partner_app_install"
            | "payment_intent"
            | "payment_link"
            | "payment_link_custom_field"
            | "payment_link_line_item"
            | "payment_method"
            | "payment_method_domain"
            | "payment_review"
            | "payout"
            | "payout_destination"
            | "payout_settings"
            | "product"
            | "product_option"
            | "product_option_value"
            | "product_variant"
            | "promotion"
            | "promotion_code"
            | "purchase_refund_allocation"
            | "refund"
            | "refund_allocation"
            | "refund_line_item_adjustment"
            | "report"
            | "report_download"
            | "return"
            | "return_activity"
            | "return_disposition"
            | "return_inspection"
            | "return_inspection_line_item"
            | "return_line_item"
            | "return_policy"
            | "return_policy_revision"
            | "return_reason"
            | "return_receipt"
            | "return_receipt_line_item"
            | "return_resolution"
            | "risk_list"
            | "risk_list_item"
            | "risk_rule"
            | "sandbox"
            | "settings"
            | "shipment"
            | "subscription"
            | "subscription_delivery_migration"
            | "subscription_line_item"
            | "subscription_offer"
            | "subscription_payment_retry"
            | "subscription_plan"
            | "subscription_plan_line_item"
            | "user"
            | "webhook_delivery"
            | "webhook_endpoint"
            | "webhook_event"
            | "workload_identity">>;
        "resource_id"?: InputValue<string>;
        "status_bucket"?: InputValue<Array<"success" | "client_error" | "server_error">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<APIRequestLogListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/developer.md#developerlistcurrentapikeyrequestlogs
     */
    listCurrentAPIKeyRequestLogsPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "caller_type"?: InputValue<Array<"api_key"
            | "user"
            | "partner_app_install"
            | "checkout_session"
            | "customer_session"
            | "invoice"
            | "workload_identity">>;
        "caller_id"?: InputValue<string>;
        "request_id"?: InputValue<string>;
        "client_request_id"?: InputValue<string>;
        "client_trace_id"?: InputValue<string>;
        "http_method"?: InputValue<Array<"GET" | "HEAD" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "CONNECT" | "TRACE">>;
        "path_query"?: InputValue<string>;
        "resource_type"?: InputValue<Array<"api_key"
            | "api_request_log"
            | "balance"
            | "balance_transaction"
            | "bundle"
            | "bundle_component"
            | "category"
            | "checkout_session"
            | "checkout_session_customer_verification"
            | "credit_note"
            | "credit_note_allocation"
            | "custom_domain"
            | "customer"
            | "customer_address"
            | "customer_deletion_request"
            | "customer_email_preferences"
            | "customer_session"
            | "customer_verification"
            | "delivery_location_set"
            | "delivery_method"
            | "delivery_profile"
            | "delivery_quote"
            | "delivery_rate"
            | "delivery_rate_callback"
            | "delivery_revocation"
            | "delivery_selection"
            | "delivery_zone"
            | "device"
            | "discount"
            | "dispute"
            | "email_change_request"
            | "environment_grant"
            | "feedback_report"
            | "file"
            | "flint_wallet"
            | "flint_wallet_card"
            | "fraud_warning"
            | "fulfillment"
            | "fulfillment_event"
            | "fulfillment_notification"
            | "gift_card"
            | "gift_card_funding_disposition"
            | "gift_card_load"
            | "gift_card_notification"
            | "gift_card_redemption"
            | "gift_card_transaction"
            | "inventory_adjustment"
            | "inventory_allocation_policy"
            | "inventory_allocation_policy_revision"
            | "inventory_count"
            | "inventory_item"
            | "inventory_level"
            | "inventory_movement"
            | "inventory_receipt"
            | "inventory_reservation"
            | "inventory_reservation_line"
            | "inventory_transfer"
            | "inventory_transfer_line"
            | "invoice"
            | "invoice_delivery_attempt"
            | "invoice_late_fee"
            | "invoice_line_item"
            | "invoice_manual_payment"
            | "invoice_payment_attempt"
            | "invoice_payment_term"
            | "location"
            | "merchant"
            | "merchant_billing_balance"
            | "merchant_billing_entry"
            | "merchant_billing_invoice"
            | "modifier"
            | "modifier_group"
            | "modifier_set"
            | "order"
            | "order_charge"
            | "order_line_item"
            | "order_line_item_modifier"
            | "order_payment_attempt"
            | "organization"
            | "package"
            | "package_item"
            | "partner_app"
            | "partner_app_install"
            | "payment_intent"
            | "payment_link"
            | "payment_link_custom_field"
            | "payment_link_line_item"
            | "payment_method"
            | "payment_method_domain"
            | "payment_review"
            | "payout"
            | "payout_destination"
            | "payout_settings"
            | "product"
            | "product_option"
            | "product_option_value"
            | "product_variant"
            | "promotion"
            | "promotion_code"
            | "purchase_refund_allocation"
            | "refund"
            | "refund_allocation"
            | "refund_line_item_adjustment"
            | "report"
            | "report_download"
            | "return"
            | "return_activity"
            | "return_disposition"
            | "return_inspection"
            | "return_inspection_line_item"
            | "return_line_item"
            | "return_policy"
            | "return_policy_revision"
            | "return_reason"
            | "return_receipt"
            | "return_receipt_line_item"
            | "return_resolution"
            | "risk_list"
            | "risk_list_item"
            | "risk_rule"
            | "sandbox"
            | "settings"
            | "shipment"
            | "subscription"
            | "subscription_delivery_migration"
            | "subscription_line_item"
            | "subscription_offer"
            | "subscription_payment_retry"
            | "subscription_plan"
            | "subscription_plan_line_item"
            | "user"
            | "webhook_delivery"
            | "webhook_endpoint"
            | "webhook_event"
            | "workload_identity">>;
        "resource_id"?: InputValue<string>;
        "status_bucket"?: InputValue<Array<"success" | "client_error" | "server_error">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<APIRequestLogListResponse>>;
    /** Iterate items lazily.
     * @see reference/developer.md#developerlistcurrentapikeyrequestlogs
     */
    listCurrentAPIKeyRequestLogsItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "caller_type"?: InputValue<Array<"api_key"
            | "user"
            | "partner_app_install"
            | "checkout_session"
            | "customer_session"
            | "invoice"
            | "workload_identity">>;
        "caller_id"?: InputValue<string>;
        "request_id"?: InputValue<string>;
        "client_request_id"?: InputValue<string>;
        "client_trace_id"?: InputValue<string>;
        "http_method"?: InputValue<Array<"GET" | "HEAD" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "CONNECT" | "TRACE">>;
        "path_query"?: InputValue<string>;
        "resource_type"?: InputValue<Array<"api_key"
            | "api_request_log"
            | "balance"
            | "balance_transaction"
            | "bundle"
            | "bundle_component"
            | "category"
            | "checkout_session"
            | "checkout_session_customer_verification"
            | "credit_note"
            | "credit_note_allocation"
            | "custom_domain"
            | "customer"
            | "customer_address"
            | "customer_deletion_request"
            | "customer_email_preferences"
            | "customer_session"
            | "customer_verification"
            | "delivery_location_set"
            | "delivery_method"
            | "delivery_profile"
            | "delivery_quote"
            | "delivery_rate"
            | "delivery_rate_callback"
            | "delivery_revocation"
            | "delivery_selection"
            | "delivery_zone"
            | "device"
            | "discount"
            | "dispute"
            | "email_change_request"
            | "environment_grant"
            | "feedback_report"
            | "file"
            | "flint_wallet"
            | "flint_wallet_card"
            | "fraud_warning"
            | "fulfillment"
            | "fulfillment_event"
            | "fulfillment_notification"
            | "gift_card"
            | "gift_card_funding_disposition"
            | "gift_card_load"
            | "gift_card_notification"
            | "gift_card_redemption"
            | "gift_card_transaction"
            | "inventory_adjustment"
            | "inventory_allocation_policy"
            | "inventory_allocation_policy_revision"
            | "inventory_count"
            | "inventory_item"
            | "inventory_level"
            | "inventory_movement"
            | "inventory_receipt"
            | "inventory_reservation"
            | "inventory_reservation_line"
            | "inventory_transfer"
            | "inventory_transfer_line"
            | "invoice"
            | "invoice_delivery_attempt"
            | "invoice_late_fee"
            | "invoice_line_item"
            | "invoice_manual_payment"
            | "invoice_payment_attempt"
            | "invoice_payment_term"
            | "location"
            | "merchant"
            | "merchant_billing_balance"
            | "merchant_billing_entry"
            | "merchant_billing_invoice"
            | "modifier"
            | "modifier_group"
            | "modifier_set"
            | "order"
            | "order_charge"
            | "order_line_item"
            | "order_line_item_modifier"
            | "order_payment_attempt"
            | "organization"
            | "package"
            | "package_item"
            | "partner_app"
            | "partner_app_install"
            | "payment_intent"
            | "payment_link"
            | "payment_link_custom_field"
            | "payment_link_line_item"
            | "payment_method"
            | "payment_method_domain"
            | "payment_review"
            | "payout"
            | "payout_destination"
            | "payout_settings"
            | "product"
            | "product_option"
            | "product_option_value"
            | "product_variant"
            | "promotion"
            | "promotion_code"
            | "purchase_refund_allocation"
            | "refund"
            | "refund_allocation"
            | "refund_line_item_adjustment"
            | "report"
            | "report_download"
            | "return"
            | "return_activity"
            | "return_disposition"
            | "return_inspection"
            | "return_inspection_line_item"
            | "return_line_item"
            | "return_policy"
            | "return_policy_revision"
            | "return_reason"
            | "return_receipt"
            | "return_receipt_line_item"
            | "return_resolution"
            | "risk_list"
            | "risk_list_item"
            | "risk_rule"
            | "sandbox"
            | "settings"
            | "shipment"
            | "subscription"
            | "subscription_delivery_migration"
            | "subscription_line_item"
            | "subscription_offer"
            | "subscription_payment_retry"
            | "subscription_plan"
            | "subscription_plan_line_item"
            | "user"
            | "webhook_delivery"
            | "webhook_endpoint"
            | "webhook_event"
            | "workload_identity">>;
        "resource_id"?: InputValue<string>;
        "status_bucket"?: InputValue<Array<"success" | "client_error" | "server_error">>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<APIRequestLog>;
    /**
 * Returns installs for a partner app owned by the authenticated merchant.
 * @see reference/developer.md#developerlistpartnerappinstalls
 * GET /v1/developer/partner/apps/{partner_app_id}/installs
 * @example
 * client.developer.listPartnerAppInstalls("example")
 */
    listPartnerAppInstalls(partner_app_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "merchant_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending_exchange" | "active" | "revoked">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): Promise<PartnerAppInstallListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/developer.md#developerlistpartnerappinstalls
     */
    listPartnerAppInstallsWithResponse(partner_app_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "merchant_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending_exchange" | "active" | "revoked">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): Promise<SdkResponse<PartnerAppInstallListResponse>>;
    /** Iterate pages lazily.
     * @see reference/developer.md#developerlistpartnerappinstalls
     */
    listPartnerAppInstallsPages(partner_app_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "merchant_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending_exchange" | "active" | "revoked">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): AsyncGenerator<PartnerAppInstallListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/developer.md#developerlistpartnerappinstalls
     */
    listPartnerAppInstallsPagesWithResponse(partner_app_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "merchant_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending_exchange" | "active" | "revoked">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): AsyncGenerator<SdkResponse<PartnerAppInstallListResponse>>;
    /** Iterate items lazily.
     * @see reference/developer.md#developerlistpartnerappinstalls
     */
    listPartnerAppInstallsItems(partner_app_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "merchant_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending_exchange" | "active" | "revoked">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): AsyncGenerator<PartnerAppInstall>;
    /**
 * Returns partner apps owned by the authenticated merchant.
 * @see reference/developer.md#developerlistpartnerapps
 * GET /v1/developer/partner/apps
 * @example
 * client.developer.listPartnerApps()
 */
    listPartnerApps(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): Promise<PartnerAppListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/developer.md#developerlistpartnerapps
     */
    listPartnerAppsWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): Promise<SdkResponse<PartnerAppListResponse>>;
    /** Iterate pages lazily.
     * @see reference/developer.md#developerlistpartnerapps
     */
    listPartnerAppsPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): AsyncGenerator<PartnerAppListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/developer.md#developerlistpartnerapps
     */
    listPartnerAppsPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): AsyncGenerator<SdkResponse<PartnerAppListResponse>>;
    /** Iterate items lazily.
     * @see reference/developer.md#developerlistpartnerapps
     */
    listPartnerAppsItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): AsyncGenerator<PartnerApp>;
    /**
 * Lists partner app installs on the authenticated merchant, across live and test mode. Requires a
 * live API key.
 * @see reference/developer.md#developerlistpartnerinstalls
 * GET /v1/developer/partner/installs
 * @example
 * client.developer.listPartnerInstalls()
 */
    listPartnerInstalls(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "partner_app_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending_exchange" | "active" | "revoked">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): Promise<PartnerAppInstallListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/developer.md#developerlistpartnerinstalls
     */
    listPartnerInstallsWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "partner_app_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending_exchange" | "active" | "revoked">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): Promise<SdkResponse<PartnerAppInstallListResponse>>;
    /** Iterate pages lazily.
     * @see reference/developer.md#developerlistpartnerinstalls
     */
    listPartnerInstallsPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "partner_app_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending_exchange" | "active" | "revoked">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): AsyncGenerator<PartnerAppInstallListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/developer.md#developerlistpartnerinstalls
     */
    listPartnerInstallsPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "partner_app_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending_exchange" | "active" | "revoked">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): AsyncGenerator<SdkResponse<PartnerAppInstallListResponse>>;
    /** Iterate items lazily.
     * @see reference/developer.md#developerlistpartnerinstalls
     */
    listPartnerInstallsItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "partner_app_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending_exchange" | "active" | "revoked">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): AsyncGenerator<PartnerAppInstall>;
    /**
 * Returns the merchant's sandboxes. Flint guarantees a default test sandbox for every merchant.
 * Use an onboarding session token during setup or a normal external API key afterward.
 * @see reference/developer.md#developerlistsandboxes
 * GET /v1/developer/sandboxes
 * @example
 * client.developer.listSandboxes()
 */
    listSandboxes(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): Promise<SandboxListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/developer.md#developerlistsandboxes
     */
    listSandboxesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): Promise<SdkResponse<SandboxListResponse>>;
    /** Iterate pages lazily.
     * @see reference/developer.md#developerlistsandboxes
     */
    listSandboxesPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): AsyncGenerator<SandboxListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/developer.md#developerlistsandboxes
     */
    listSandboxesPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): AsyncGenerator<SdkResponse<SandboxListResponse>>;
    /** Iterate items lazily.
     * @see reference/developer.md#developerlistsandboxes
     */
    listSandboxesItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "onboarding">>): AsyncGenerator<DeveloperSandbox>;
    /**
 * Clears a non-default sandbox and returns its replacement environment. The replacement has a new
 * sandbox ID, retains the stable provider-account lineage, and requires newly issued test keys.
 * The archived sandbox's `replaced_by_sandbox_id` names the replacement.
 * @see reference/developer.md#developerresetsandbox
 * POST /v1/developer/sandboxes/{sandbox_id}/reset
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.developer.resetSandbox("example", {}, { idempotencyKey: idempotencyKey })
 */
    resetSandbox(sandbox_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "onboarding">): Promise<DeveloperSandbox>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/developer.md#developerresetsandbox
     */
    resetSandboxWithResponse(sandbox_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "onboarding">): Promise<SdkResponse<SandboxResponse>>;
    /**
 * The installing merchant or partner app owner can revoke an install and all of its environment
 * grants.
 * @see reference/developer.md#developerrevokepartnerappinstall
 * POST /v1/developer/partner/apps/{partner_app_id}/installs/{partner_app_install_id}/revoke
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.developer.revokePartnerAppInstall("example", "example", {}, { idempotencyKey:
 * idempotencyKey })
 */
    revokePartnerAppInstall(partner_app_id: InputValue<string>, partner_app_install_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<PartnerAppInstall>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/developer.md#developerrevokepartnerappinstall
     */
    revokePartnerAppInstallWithResponse(partner_app_id: InputValue<string>, partner_app_install_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<PartnerAppInstallResponse>>;
    /**
 * The installing merchant or partner app owner can revoke a single test or live environment grant
 * for an install.
 * @see reference/developer.md#developerrevokepartnerenvironmentgrant
 * POST
 * /v1/developer/partner/apps/{partner_app_id}/installs/{partner_app_install_id}/environment-grants/{environment_grant_id}/revoke
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.developer.revokePartnerEnvironmentGrant("example", "example", "example", {}, {
 * idempotencyKey: idempotencyKey })
 */
    revokePartnerEnvironmentGrant(partner_app_id: InputValue<string>, partner_app_install_id: InputValue<string>, environment_grant_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<PartnerAppInstall>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/developer.md#developerrevokepartnerenvironmentgrant
     */
    revokePartnerEnvironmentGrantWithResponse(partner_app_id: InputValue<string>, partner_app_install_id: InputValue<string>, environment_grant_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<PartnerAppInstallResponse>>;
    /**
 * Issues a new client secret, returned once. The previous secret keeps working until
 * previous_secret_expires_at: 24 hours by default, or the time in expire_previous_secret_at, up to
 * 7 days. Send a time at or before now to stop the previous secret immediately, for example when
 * it leaked. Rotating again during an overlap ends the older secret at once.
 * @see reference/developer.md#developerrotatepartnerappsecret
 * POST /v1/developer/partner/apps/{partner_app_id}/rotate-secret
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.developer.rotatePartnerAppSecret("example", undefined, { idempotencyKey: idempotencyKey })
 */
    rotatePartnerAppSecret(partner_app_id: InputValue<string>, params?: (InputValue<RotatePartnerAppSecretRequestInput>
        | {
        "expected_version"?: never;
        "expire_previous_secret_at"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<PartnerAppWithSecret>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/developer.md#developerrotatepartnerappsecret
     */
    rotatePartnerAppSecretWithResponse(partner_app_id: InputValue<string>, params?: (InputValue<RotatePartnerAppSecretRequestInput>
        | {
        "expected_version"?: never;
        "expire_previous_secret_at"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<PartnerAppWithSecretResponse>>;
    /**
 * Updates a partner app owned by the authenticated merchant. Send only the fields to change.
 * permission_manifest replaces the whole manifest and requires expected_version. An existing
 * permission can drop scopes but not gain them; removing or narrowing a permission narrows
 * existing environment grants immediately, and tokens issued with the removed scopes stop working.
 * Adding a permission changes no install until the merchant authorizes again.
 * @see reference/developer.md#developerupdatepartnerapp
 * PATCH /v1/developer/partner/apps/{partner_app_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.developer.updatePartnerApp("example", {api_version: "example", name: "example"}, {
 * idempotencyKey: idempotencyKey })
 */
    updatePartnerApp(partner_app_id: InputValue<string>, params: (InputValue<UpdatePartnerAppRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "onboarding">): Promise<PartnerApp>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/developer.md#developerupdatepartnerapp
     */
    updatePartnerAppWithResponse(partner_app_id: InputValue<string>, params: (InputValue<UpdatePartnerAppRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "onboarding">): Promise<SdkResponse<PartnerAppResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly developer: DeveloperResource;
}
