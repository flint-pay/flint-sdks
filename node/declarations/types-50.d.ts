import type { InputValue } from '../runtime.js';
import type { ResendWebhookDeliveryRequestInput, ResponseMeta, ResourceType } from './types-40.js';
import type {
    CreateWebhookEndpointRequestInput,
    CreateWebhookTestEventRequestInput,
    CreditNoteAllocation,
    CreditNote
} from './types-9.js';
import type { RotateWebhookSecretRequestInput } from './types-43.js';
import type { UpdateWebhookEndpointRequestInput } from './types-49.js';
import type { BalanceTransaction, Balance, Bundle } from './types-0.js';
import type { MerchantWebhookEnvelope } from './types-31.js';
import type { PartnerWebhookEnvelope } from './types-35.js';
import type { Category } from './types-3.js';
import type { CheckoutSession } from './types-4.js';
import type { CustomDomain, Customer, CustomerDeletionRequest } from './types-10.js';
import type { DeliveryLocationSet, DeliveryMethod } from './types-12.js';
import type { DeliveryProfile } from './types-13.js';
export type WebhookDeliveriesResendInput = {
    /** Shape $ (Value): string. */
    "webhook_delivery_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ResendWebhookDeliveryRequestInput}. The request body for: Resend
     * webhook delivery.
     */
    "body"?: InputValue<ResendWebhookDeliveryRequestInput>;
};
/**
 * Shape $ (Value): {@link WebhookDelivery}. An attempt to deliver an event to a webhook endpoint.
 */
export type WebhookDelivery = {
    /**
     * Shape $ (Value): integer. Attempts made by Flint's automatic schedule. Manual resends and
     * the first attempt of a delivery you create don't count. Format: int32.
     */
    "automatic_attempt_count": number;
    /**
     * Shape $ (Value): string. When the delivery was created: when Flint prepared the event, or
     * when you created it. Format: date-time.
     */
    "created_at": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "delivered_at"?: string;
    /**
     * Shape $ (Value): string. The kind of failure on the most recent failed attempt. Absent
     * before any attempt, and when delivered or suppressed. Value enum: "webhook_timeout",
     * "webhook_dns", "webhook_tls", "webhook_connection", "webhook_blocked_target",
     * "webhook_request", "webhook_redirect", "webhook_http_4xx", "webhook_http_5xx",
     * "server_error", "webhook_delivery".
     */
    "error_category"?: "webhook_timeout"
        | "webhook_dns"
        | "webhook_tls"
        | "webhook_connection"
        | "webhook_blocked_target"
        | "webhook_request"
        | "webhook_redirect"
        | "webhook_http_4xx"
        | "webhook_http_5xx"
        | "server_error"
        | "webhook_delivery"
        | (string & {});
    /**
     * Shape $ (Value): string. A concise explanation of the failed attempt. Absent before any
     * attempt, and when delivered or suppressed.
     */
    "error_summary"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "last_response_code"?: number;
    /** Shape $ (Value): integer. Maximum automatic attempts. Format: int32. */
    "max_attempts": number;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "next_retry_at"?: string;
    /** Shape $ (Value): string. The next step to resolve the failed delivery attempt. */
    "recommended_action"?: string;
    /**
     * Shape $ (Value): boolean. Whether sending this delivery again without changing your endpoint
     * is likely to succeed. While the delivery is pending, Flint retries automatically either way.
     */
    "retryable"?: boolean;
    /** Shape $ (Value): string.  Value enum: "pending", "delivered", "failed", "suppressed". */
    "status": "pending" | "delivered" | "failed" | "suppressed" | (string & {});
    /**
     * Shape $ (Value): string. Why this delivery was suppressed. Present exactly when status is
     * suppressed. Suppressed deliveries have no failure explanation. Value enum:
     * "endpoint_inactive", "endpoint_deleted", "authorization_revoked", "scope_missing",
     * "event_not_allowed".
     */
    "suppression_reason"?: "endpoint_inactive"
        | "endpoint_deleted"
        | "authorization_revoked"
        | "scope_missing"
        | "event_not_allowed"
        | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Shape $ (Value): string. */
    "webhook_delivery_id": string;
    /** Shape $ (Value): string. */
    "webhook_endpoint_id": string;
    /** Shape $ (Value): string. */
    "webhook_event_id": string;
};
/**
 * Shape $ (Value): {@link WebhookDeliveryAction}. The result of a webhook delivery action, such as
 * a resend: the delivery, attempt, status, and any error details.
 */
export type WebhookDeliveryAction = {
    /** Shape $ (Value): integer. Format: int32. */
    "attempt_number": number;
    /** Shape $ (Value): string.  Value enum: "queued", "sending", "delivered", "failed". */
    "attempt_status": "queued" | "sending" | "delivered" | "failed" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "completed_at"?: string;
    /** Shape $ (Value): string.  Value enum: "pending", "delivered", "failed", "suppressed". */
    "delivery_status": "pending" | "delivered" | "failed" | "suppressed" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "automatic_delivery", "automatic_retry",
     * "manual_resend", "manual_delivery", "test_event".
     */
    "delivery_trigger": "automatic_delivery"
        | "automatic_retry"
        | "manual_resend"
        | "manual_delivery"
        | "test_event"
        | (string & {});
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "duration_milliseconds"?: `${bigint}`;
    /**
     * Shape $ (Value): string. The kind of failure on the most recent failed attempt. Absent
     * before any attempt, and when delivered or suppressed. Value enum: "webhook_timeout",
     * "webhook_dns", "webhook_tls", "webhook_connection", "webhook_blocked_target",
     * "webhook_request", "webhook_redirect", "webhook_http_4xx", "webhook_http_5xx",
     * "server_error", "webhook_delivery".
     */
    "error_category"?: "webhook_timeout"
        | "webhook_dns"
        | "webhook_tls"
        | "webhook_connection"
        | "webhook_blocked_target"
        | "webhook_request"
        | "webhook_redirect"
        | "webhook_http_4xx"
        | "webhook_http_5xx"
        | "server_error"
        | "webhook_delivery"
        | (string & {});
    /**
     * Shape $ (Value): string. A concise explanation of the failed attempt. Absent before any
     * attempt, and when delivered or suppressed.
     */
    "error_summary"?: string;
    /** Shape $ (Value): string. The note supplied when this action was requested. */
    "reason_message"?: string;
    /** Shape $ (Value): string. The next step to resolve the failed delivery attempt. */
    "recommended_action"?: string;
    /**
     * Shape $ (Value): string. Receiver response body excerpt. Omitted unless the caller can read
     * the event's resource.
     */
    "response_body_excerpt"?: string;
    /**
     * Shape $ (Value): string. Receiver response content type. Omitted unless the caller can read
     * the event's resource.
     */
    "response_content_type"?: string;
    /**
     * Shape $ (Value): Map of string. Receiver response headers, keyed by lowercase header name.
     * Repeated values are joined with ", ". Sensitive values read [REDACTED]. Absent when no
     * response was received, after the 14-day response-detail retention, or unless the caller can
     * read the event's resource. Shape $.* (Value): string.
     */
    "response_headers"?: Record<string, string>;
    /**
     * Shape $ (Value): boolean. Whether sending this delivery again without changing your endpoint
     * is likely to succeed. While the delivery is pending, Flint retries automatically either way.
     */
    "retryable"?: boolean;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "started_at"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "status_code"?: number;
    /** Shape $ (Value): string. */
    "webhook_delivery_attempt_id": string;
    /** Shape $ (Value): string. */
    "webhook_delivery_id": string;
    /** Shape $ (Value): string. */
    "webhook_event_id": string;
};
/**
 * Shape $ (Value): {@link WebhookDeliveryActionResponse}. A response containing
 * `WebhookDeliveryAction` data.
 */
export type WebhookDeliveryActionResponse = {
    /**
     * Shape $ (Value): {@link WebhookDeliveryAction}. The result of a webhook delivery action,
     * such as a resend: the delivery, attempt, status, and any error details.
     */
    "data": WebhookDeliveryAction;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link WebhookDeliveryAttempt}. One attempt to deliver a webhook event to an
 * endpoint, with its status, timing, response code, and error details.
 */
export type WebhookDeliveryAttempt = {
    /**
     * Shape $ (Value): string. API version used for this delivery attempt. Omitted when the
     * version was not recorded or payload rendering failed. Format: date.
     */
    "api_version"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "attempt_number": number;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "completed_at"?: string;
    /**
     * Shape $ (Value): string. Value enum: "automatic_delivery", "automatic_retry",
     * "manual_resend", "manual_delivery", "test_event".
     */
    "delivery_trigger": "automatic_delivery"
        | "automatic_retry"
        | "manual_resend"
        | "manual_delivery"
        | "test_event"
        | (string & {});
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "duration_milliseconds"?: `${bigint}`;
    /**
     * Shape $ (Value): string. The kind of failure on the most recent failed attempt. Absent
     * before any attempt, and when delivered or suppressed. Value enum: "webhook_timeout",
     * "webhook_dns", "webhook_tls", "webhook_connection", "webhook_blocked_target",
     * "webhook_request", "webhook_redirect", "webhook_http_4xx", "webhook_http_5xx",
     * "server_error", "webhook_delivery".
     */
    "error_category"?: "webhook_timeout"
        | "webhook_dns"
        | "webhook_tls"
        | "webhook_connection"
        | "webhook_blocked_target"
        | "webhook_request"
        | "webhook_redirect"
        | "webhook_http_4xx"
        | "webhook_http_5xx"
        | "server_error"
        | "webhook_delivery"
        | (string & {});
    /**
     * Shape $ (Value): string. A concise explanation of the failed attempt. Absent before any
     * attempt, and when delivered or suppressed.
     */
    "error_summary"?: string;
    /** Shape $ (Value): string. The note supplied when this action was requested. */
    "reason_message"?: string;
    /** Shape $ (Value): string. The next step to resolve the failed delivery attempt. */
    "recommended_action"?: string;
    /**
     * Shape $ (Value): string. Receiver response body excerpt. Omitted unless the caller can read
     * the event's resource.
     */
    "response_body_excerpt"?: string;
    /**
     * Shape $ (Value): string. Receiver response content type. Omitted unless the caller can read
     * the event's resource.
     */
    "response_content_type"?: string;
    /**
     * Shape $ (Value): Map of string. Receiver response headers, keyed by lowercase header name.
     * Repeated values are joined with ", ". Sensitive values read [REDACTED]. Absent when no
     * response was received, after the 14-day response-detail retention, or unless the caller can
     * read the event's resource. Shape $.* (Value): string.
     */
    "response_headers"?: Record<string, string>;
    /**
     * Shape $ (Value): boolean. Whether sending this delivery again without changing your endpoint
     * is likely to succeed. While the delivery is pending, Flint retries automatically either way.
     */
    "retryable"?: boolean;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "started_at"?: string;
    /** Shape $ (Value): string.  Value enum: "queued", "sending", "delivered", "failed". */
    "status": "queued" | "sending" | "delivered" | "failed" | (string & {});
    /** Shape $ (Value): integer. Format: int32. */
    "status_code"?: number;
    /** Shape $ (Value): string. */
    "webhook_delivery_attempt_id": string;
    /** Shape $ (Value): string. */
    "webhook_delivery_id": string;
    /** Shape $ (Value): string. */
    "webhook_event_id": string;
};
/**
 * Shape $ (Value): {@link WebhookDeliveryAttemptListResponse}. A page of `WebhookDeliveryAttempt`
 * objects.
 */
export type WebhookDeliveryAttemptListResponse = {
    /**
     * Shape $ (Value): Array of {@link WebhookDeliveryAttempt}. Shape $[] (Value): {@link
     * WebhookDeliveryAttempt}. One attempt to deliver a webhook event to an endpoint, with its
     * status, timing, response code, and error details.
     */
    "data": Array<WebhookDeliveryAttempt>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/** Shape $ (Value): {@link WebhookDeliveryListResponse}. A page of `WebhookDelivery` objects. */
export type WebhookDeliveryListResponse = {
    /**
     * Shape $ (Value): Array of {@link WebhookDelivery}. Shape $[] (Value): {@link
     * WebhookDelivery}. An attempt to deliver an event to a webhook endpoint.
     */
    "data": Array<WebhookDelivery>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link WebhookDeliveryResponse}. A response containing `WebhookDelivery` data.
 */
export type WebhookDeliveryResponse = {
    /**
     * Shape $ (Value): {@link WebhookDelivery}. An attempt to deliver an event to a webhook
     * endpoint.
     */
    "data": WebhookDelivery;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link WebhookEndpoint}. A merchant webhook endpoint belongs to the live mode
 * or sandbox of the credential that created it and receives only that environment's events.
 * Partner endpoints select sources with event_sources and installed_merchant_modes.
 */
export type WebhookEndpoint = ({
    /**
     * Shape $ (Value): string. A dated API version pins this endpoint. The value default follows
     * the endpoint owner's merchant default at delivery time, including retries. Deliveries never
     * use a newer version than the event's recorded version.
     */
    "api_version": string;
    /** Shape $ (Value): string. When api_version last changed. Format: date-time. */
    "api_version_changed_at"?: string;
    /**
     * Shape $ (Value): string. Version this endpoint used before its last upgrade. Present while a
     * rollback is available. To roll back, send it as api_version.
     */
    "api_version_previous"?: string;
    /**
     * Shape $ (Value): string. When the rollback offer for api_version_previous ends. You can
     * still set any supported version afterward. Format: date-time.
     */
    "api_version_rollback_expires_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): Array of string. Subscribed event types. ["*"] includes every type the
     * endpoint's event_sources deliver, including types added later; * is not available with
     * installed_merchants. Stored subscriptions map previous names permanently and drop removed
     * names on read. Empty when no current subscriptions remain. See the
     * [changelog](/docs/changelog). Shape $[] (Value): string. minLength: 1.
     */
    "enabled_events": Array<string>;
    /**
     * Shape $ (Value): Array of string. Event sources this endpoint receives. Defaults to
     * merchant. Use partner_app for app lifecycle events and installed_merchants for events from
     * merchants that installed the partner app. [] enum: "merchant", "partner_app",
     * "installed_merchants". Shape $[] (Value): string. Value enum: "merchant", "partner_app",
     * "installed_merchants".
     */
    "event_sources"?: Array<"merchant" | "partner_app" | "installed_merchants" | (string & {})>;
    /**
     * Shape $ (Value): Array of string. Modes of installed-merchant events this endpoint receives.
     * Required when event_sources includes installed_merchants and omitted otherwise. Partner app
     * lifecycle events are delivered regardless of these modes. minItems: 1. maxItems: 2.
     * uniqueItems: true. [] enum: "test", "live". Shape $[] (Value): string. Value enum: "test",
     * "live".
     */
    "installed_merchant_modes"?: Array<"test" | "live" | (string & {})>;
    /**
     * Shape $ (Value): string. Partner app that owns partner_app or installed_merchants event
     * sources.
     */
    "partner_app_id"?: string;
    /**
     * Shape $ (Value): string. When the replaced signing secret stops signing deliveries. Present
     * only during a rotation overlap. Until then each delivery carries a signature from both
     * secrets. Format: date-time.
     */
    "previous_secret_expires_at"?: string;
    /**
     * Shape $ (Value): string. Availability of this endpoint. Deleted is returned only by DELETE.
     * Value enum: "active", "inactive", "deleted".
     */
    "status": "active" | "inactive" | "deleted" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /** Shape $ (Value): string. */
    "url": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
    /** Shape $ (Value): string. */
    "webhook_endpoint_id": string;
});
/** Shape $ (Value): {@link WebhookEndpointListResponse}. A page of `WebhookEndpoint` objects. */
export type WebhookEndpointListResponse = {
    /**
     * Shape $ (Value): Array of {@link WebhookEndpoint}. Shape $[] (Value): {@link
     * WebhookEndpoint}. A merchant webhook endpoint belongs to the live mode or sandbox of the
     * credential that created it and receives only that environment's events. Partner endpoints
     * select sources with event_sources and installed_merchant_modes.
     */
    "data": Array<WebhookEndpoint>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link WebhookEndpointResponse}. A response containing `WebhookEndpoint` data.
 */
export type WebhookEndpointResponse = {
    /**
     * Shape $ (Value): {@link WebhookEndpoint}. A merchant webhook endpoint belongs to the live
     * mode or sandbox of the credential that created it and receives only that environment's
     * events. Partner endpoints select sources with event_sources and installed_merchant_modes.
     */
    "data": WebhookEndpoint;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link WebhookEndpointWithSecret}. A webhook endpoint with its one-time signing
 * secret, returned when the endpoint is created or its secret is rotated. A merchant webhook
 * endpoint belongs to the live mode or sandbox of the credential that created it and receives only
 * that environment's events. Partner endpoints select sources with event_sources and
 * installed_merchant_modes.
 */
export type WebhookEndpointWithSecret = (Exclude<WebhookEndpoint & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): string. One-time signing secret. Present on create and rotation; omitted on
     * an idempotent replay after the secret retention period.
     */
    "secret"?: string;
});
/**
 * Shape $ (Value): {@link WebhookEndpointWithSecretResponse}. A response containing
 * `WebhookEndpointWithSecret` data.
 */
export type WebhookEndpointWithSecretResponse = {
    /**
     * Shape $ (Value): {@link WebhookEndpointWithSecret}. A webhook endpoint with its one-time
     * signing secret, returned when the endpoint is created or its secret is rotated. A merchant
     * webhook endpoint belongs to the live mode or sandbox of the credential that created it and
     * receives only that environment's events. Partner endpoints select sources with event_sources
     * and installed_merchant_modes.
     */
    "data": WebhookEndpointWithSecret;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
export type WebhookEndpointsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateWebhookEndpointRequestInput}. The request body for: Create
     * webhook endpoint.
     */
    "body": InputValue<CreateWebhookEndpointRequestInput>;
};
export type WebhookEndpointsCreateWebhookTestEventInput = {
    /** Shape $ (Value): string. */
    "webhook_endpoint_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateWebhookTestEventRequestInput}. The request body for: Create
     * webhook test event.
     */
    "body": InputValue<CreateWebhookTestEventRequestInput>;
};
export type WebhookEndpointsGetInput = {
    /** Shape $ (Value): string. */
    "webhook_endpoint_id": InputValue<string>;
};
export type WebhookEndpointsListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "merchant", "partner_app",
     * "installed_merchants". Shape $[] (Value): string. Value enum: "merchant", "partner_app",
     * "installed_merchants".
     */
    "event_sources"?: InputValue<Array<"merchant" | "partner_app" | "installed_merchants">>;
    /** Shape $ (Value): string. */
    "partner_app_id"?: InputValue<string>;
};
export type WebhookEndpointsRemoveInput = {
    /** Shape $ (Value): string. */
    "webhook_endpoint_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type WebhookEndpointsRotateWebhookSecretInput = {
    /** Shape $ (Value): string. */
    "webhook_endpoint_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link RotateWebhookSecretRequestInput}. The request body for: Rotate
     * webhook secret.
     */
    "body"?: InputValue<RotateWebhookSecretRequestInput>;
};
export type WebhookEndpointsUpdateInput = {
    /** Shape $ (Value): string. */
    "webhook_endpoint_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateWebhookEndpointRequestInput}. The request body for: Update
     * webhook endpoint.
     */
    "body": InputValue<UpdateWebhookEndpointRequestInput>;
};
/** Shape $ (Value): {@link WebhookEvent}. An event prepared for delivery to webhook endpoints. */
export type WebhookEvent = {
    /** Shape $ (Value): string. */
    "api_request_log_id"?: string;
    /**
     * Shape $ (Value): string. API version of the event data. Stored data follows the same
     * versioning rules as webhook deliveries. Format: date.
     */
    "api_version": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): object. The delivered envelope's data, including its
     * payload-version-specific shape. Omitted from list responses and from detail responses when
     * the caller lacks read access to the attributed resource or the payload has expired after 14
     * days.
     */
    "data"?: {
        [key: string]: unknown;
    };
    /** Shape $ (Value): string.  Value enum: "merchant", "partner_app", "installed_merchants". */
    "event_source"?: "merchant" | "partner_app" | "installed_merchants" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "balance.updated", "balance_transaction.created",
     * "balance_transaction.updated", "bundle.archived", "bundle.created", "bundle.updated",
     * "category.created", "category.deleted", "category.updated", "checkout_session.closed",
     * "checkout_session.created", "checkout_session.expired", "checkout_session.invalidated",
     * "checkout_session.paid", "checkout_session.partially_paid", "credit_note.created",
     * "credit_note.issued", "credit_note.updated", "credit_note.voided",
     * "credit_note_allocation.created", "credit_note_allocation.reversed",
     * "custom_domain.archived", "custom_domain.updated", "customer.created", "customer.deleted",
     * "customer.updated", "customer_deletion_request.completed",
     * "customer_deletion_request.created", "customer_deletion_request.failed",
     * "customer_deletion_request.processing", "customer_deletion_request.rejected",
     * "delivery_location_set.activated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.deactivated",
     * "delivery_location_set.updated", "delivery_method.activated", "delivery_method.archived",
     * "delivery_method.created", "delivery_method.deactivated", "delivery_method.updated",
     * "delivery_profile.activated", "delivery_profile.archived", "delivery_profile.created",
     * "delivery_profile.deactivated", "delivery_profile.updated",
     * "delivery_rate_callback.activated", "delivery_rate_callback.archived",
     * "delivery_rate_callback.created", "delivery_rate_callback.deactivated",
     * "delivery_rate_callback.updated", "delivery_revocation.created",
     * "delivery_selection.committed", "delivery_zone.activated", "delivery_zone.archived",
     * "delivery_zone.created", "delivery_zone.deactivated", "delivery_zone.updated",
     * "dispute.created", "dispute.inquiry_closed", "dispute.lost", "dispute.needs_response",
     * "dispute.prevented", "dispute.updated", "dispute.won", "environment_grant.created",
     * "environment_grant.revoked", "fraud_warning.created", "fraud_warning.updated",
     * "fulfillment.canceled", "fulfillment.completed", "fulfillment.created",
     * "fulfillment.failed", "fulfillment.updated", "fulfillment_event.created",
     * "gift_card.created", "gift_card.updated", "gift_card_load.created",
     * "gift_card_load.updated", "gift_card_notification.created",
     * "gift_card_notification.updated", "gift_card_redemption.created",
     * "gift_card_redemption.updated", "gift_card_transaction.created", "inventory_count.applied",
     * "inventory_level.shortage_detected", "inventory_level.updated", "inventory_receipt.created",
     * "inventory_reservation.action_required", "inventory_reservation.at_risk",
     * "inventory_reservation.closed", "inventory_reservation.committed",
     * "inventory_reservation.consumed", "inventory_reservation.created",
     * "inventory_reservation.hold_expired", "inventory_reservation.released",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned",
     * "invoice.collection_block_resolved", "invoice.collection_blocked", "invoice.created",
     * "invoice.credited", "invoice.issue_failed", "invoice.issued", "invoice.late_fee_assessed",
     * "invoice.late_fee_due", "invoice.late_fee_waived", "invoice.marked_uncollectible",
     * "invoice.overdue", "invoice.paid", "invoice.partially_paid", "invoice.partially_refunded",
     * "invoice.refunded", "invoice.reminder_due", "invoice.reopened", "invoice.sent",
     * "invoice.updated", "invoice.voided", "invoice_delivery_attempt.failed",
     * "invoice_delivery_attempt.sent", "invoice_delivery_attempt.suppressed",
     * "invoice_manual_payment.created", "invoice_manual_payment.reversed",
     * "invoice_payment_attempt.canceled", "invoice_payment_attempt.expired",
     * "invoice_payment_attempt.failed", "invoice_payment_attempt.processing",
     * "invoice_payment_attempt.settled", "merchant.readiness_updated", "merchant.updated",
     * "merchant_billing_balance.updated", "merchant_billing_invoice.issued",
     * "merchant_billing_invoice.updated", "modifier_group.archived", "modifier_group.created",
     * "modifier_group.updated", "modifier_set.archived", "modifier_set.created",
     * "modifier_set.updated", "order.closed", "order.created",
     * "order.inventory_exception_created", "order.inventory_exception_resolved", "order.paid",
     * "order.partially_paid", "order.partially_refunded", "order.refunded", "order.updated",
     * "package.created", "package.updated", "partner_app_install.created",
     * "partner_app_install.permissions_updated", "partner_app_install.revoked",
     * "partner_app_install.updated", "payment_intent.canceled", "payment_intent.created",
     * "payment_intent.expired", "payment_intent.fulfillment_hold_updated",
     * "payment_intent.payment_failed", "payment_intent.processing",
     * "payment_intent.requires_action", "payment_intent.requires_capture",
     * "payment_intent.succeeded", "payment_intent.updated", "payment_link.created",
     * "payment_link.updated", "payment_method.activated", "payment_method.archived",
     * "payment_method.failed", "payment_review.closed", "payment_review.opened",
     * "payment_review.reopened", "payout.canceled", "payout.created", "payout.failed",
     * "payout.paid", "payout.reversed", "payout.updated", "payout_destination.archived",
     * "payout_destination.created", "payout_destination.disabled", "payout_destination.updated",
     * "payout_settings.updated", "product.archived", "product.created", "product.updated",
     * "product_variant.archived", "product_variant.created", "product_variant.updated",
     * "promotion.archived", "promotion.created", "promotion.updated", "promotion_code.archived",
     * "promotion_code.created", "promotion_code.updated", "refund.created", "refund.failed",
     * "refund.partially_succeeded", "refund.succeeded", "refund.updated", "report.failed",
     * "report.succeeded", "return.canceled", "return.completed", "return.created",
     * "return.decision_recorded", "return.reopened", "return.updated",
     * "return_disposition.created", "return_disposition.updated",
     * "return_inspection.acceptance_decided", "return_inspection.created",
     * "return_inspection.superseded", "return_receipt.created", "return_receipt.superseded",
     * "return_receipt.verified", "return_resolution.created", "return_resolution.updated",
     * "shipment.created", "shipment.updated", "subscription.activated", "subscription.canceled",
     * "subscription.cancellation_scheduled", "subscription.created", "subscription.cycle_skipped",
     * "subscription.delivery_action_required", "subscription.delivery_pause_upcoming",
     * "subscription.delivery_updated", "subscription.dunning_exhausted", "subscription.past_due",
     * "subscription.paused", "subscription.payment_succeeded", "subscription.plan_changed",
     * "subscription.reactivated", "subscription.renewal_upcoming", "subscription.resumed",
     * "subscription.trial_ending", "subscription.updated",
     * "subscription_delivery_migration.completed", "subscription_payment_retry.created",
     * "subscription_payment_retry.failed", "subscription_payment_retry.succeeded".
     */
    "event_type": "balance.updated"
        | "balance_transaction.created"
        | "balance_transaction.updated"
        | "bundle.archived"
        | "bundle.created"
        | "bundle.updated"
        | "category.created"
        | "category.deleted"
        | "category.updated"
        | "checkout_session.closed"
        | "checkout_session.created"
        | "checkout_session.expired"
        | "checkout_session.invalidated"
        | "checkout_session.paid"
        | "checkout_session.partially_paid"
        | "credit_note.created"
        | "credit_note.issued"
        | "credit_note.updated"
        | "credit_note.voided"
        | "credit_note_allocation.created"
        | "credit_note_allocation.reversed"
        | "custom_domain.archived"
        | "custom_domain.updated"
        | "customer.created"
        | "customer.deleted"
        | "customer.updated"
        | "customer_deletion_request.completed"
        | "customer_deletion_request.created"
        | "customer_deletion_request.failed"
        | "customer_deletion_request.processing"
        | "customer_deletion_request.rejected"
        | "delivery_location_set.activated"
        | "delivery_location_set.archived"
        | "delivery_location_set.created"
        | "delivery_location_set.deactivated"
        | "delivery_location_set.updated"
        | "delivery_method.activated"
        | "delivery_method.archived"
        | "delivery_method.created"
        | "delivery_method.deactivated"
        | "delivery_method.updated"
        | "delivery_profile.activated"
        | "delivery_profile.archived"
        | "delivery_profile.created"
        | "delivery_profile.deactivated"
        | "delivery_profile.updated"
        | "delivery_rate_callback.activated"
        | "delivery_rate_callback.archived"
        | "delivery_rate_callback.created"
        | "delivery_rate_callback.deactivated"
        | "delivery_rate_callback.updated"
        | "delivery_revocation.created"
        | "delivery_selection.committed"
        | "delivery_zone.activated"
        | "delivery_zone.archived"
        | "delivery_zone.created"
        | "delivery_zone.deactivated"
        | "delivery_zone.updated"
        | "dispute.created"
        | "dispute.inquiry_closed"
        | "dispute.lost"
        | "dispute.needs_response"
        | "dispute.prevented"
        | "dispute.updated"
        | "dispute.won"
        | "environment_grant.created"
        | "environment_grant.revoked"
        | "fraud_warning.created"
        | "fraud_warning.updated"
        | "fulfillment.canceled"
        | "fulfillment.completed"
        | "fulfillment.created"
        | "fulfillment.failed"
        | "fulfillment.updated"
        | "fulfillment_event.created"
        | "gift_card.created"
        | "gift_card.updated"
        | "gift_card_load.created"
        | "gift_card_load.updated"
        | "gift_card_notification.created"
        | "gift_card_notification.updated"
        | "gift_card_redemption.created"
        | "gift_card_redemption.updated"
        | "gift_card_transaction.created"
        | "inventory_count.applied"
        | "inventory_level.shortage_detected"
        | "inventory_level.updated"
        | "inventory_receipt.created"
        | "inventory_reservation.action_required"
        | "inventory_reservation.at_risk"
        | "inventory_reservation.closed"
        | "inventory_reservation.committed"
        | "inventory_reservation.consumed"
        | "inventory_reservation.created"
        | "inventory_reservation.hold_expired"
        | "inventory_reservation.released"
        | "inventory_transfer.closed"
        | "inventory_transfer.departed"
        | "inventory_transfer.lost"
        | "inventory_transfer.received"
        | "inventory_transfer.returned"
        | "invoice.collection_block_resolved"
        | "invoice.collection_blocked"
        | "invoice.created"
        | "invoice.credited"
        | "invoice.issue_failed"
        | "invoice.issued"
        | "invoice.late_fee_assessed"
        | "invoice.late_fee_due"
        | "invoice.late_fee_waived"
        | "invoice.marked_uncollectible"
        | "invoice.overdue"
        | "invoice.paid"
        | "invoice.partially_paid"
        | "invoice.partially_refunded"
        | "invoice.refunded"
        | "invoice.reminder_due"
        | "invoice.reopened"
        | "invoice.sent"
        | "invoice.updated"
        | "invoice.voided"
        | "invoice_delivery_attempt.failed"
        | "invoice_delivery_attempt.sent"
        | "invoice_delivery_attempt.suppressed"
        | "invoice_manual_payment.created"
        | "invoice_manual_payment.reversed"
        | "invoice_payment_attempt.canceled"
        | "invoice_payment_attempt.expired"
        | "invoice_payment_attempt.failed"
        | "invoice_payment_attempt.processing"
        | "invoice_payment_attempt.settled"
        | "merchant.readiness_updated"
        | "merchant.updated"
        | "merchant_billing_balance.updated"
        | "merchant_billing_invoice.issued"
        | "merchant_billing_invoice.updated"
        | "modifier_group.archived"
        | "modifier_group.created"
        | "modifier_group.updated"
        | "modifier_set.archived"
        | "modifier_set.created"
        | "modifier_set.updated"
        | "order.closed"
        | "order.created"
        | "order.inventory_exception_created"
        | "order.inventory_exception_resolved"
        | "order.paid"
        | "order.partially_paid"
        | "order.partially_refunded"
        | "order.refunded"
        | "order.updated"
        | "package.created"
        | "package.updated"
        | "partner_app_install.created"
        | "partner_app_install.permissions_updated"
        | "partner_app_install.revoked"
        | "partner_app_install.updated"
        | "payment_intent.canceled"
        | "payment_intent.created"
        | "payment_intent.expired"
        | "payment_intent.fulfillment_hold_updated"
        | "payment_intent.payment_failed"
        | "payment_intent.processing"
        | "payment_intent.requires_action"
        | "payment_intent.requires_capture"
        | "payment_intent.succeeded"
        | "payment_intent.updated"
        | "payment_link.created"
        | "payment_link.updated"
        | "payment_method.activated"
        | "payment_method.archived"
        | "payment_method.failed"
        | "payment_review.closed"
        | "payment_review.opened"
        | "payment_review.reopened"
        | "payout.canceled"
        | "payout.created"
        | "payout.failed"
        | "payout.paid"
        | "payout.reversed"
        | "payout.updated"
        | "payout_destination.archived"
        | "payout_destination.created"
        | "payout_destination.disabled"
        | "payout_destination.updated"
        | "payout_settings.updated"
        | "product.archived"
        | "product.created"
        | "product.updated"
        | "product_variant.archived"
        | "product_variant.created"
        | "product_variant.updated"
        | "promotion.archived"
        | "promotion.created"
        | "promotion.updated"
        | "promotion_code.archived"
        | "promotion_code.created"
        | "promotion_code.updated"
        | "refund.created"
        | "refund.failed"
        | "refund.partially_succeeded"
        | "refund.succeeded"
        | "refund.updated"
        | "report.failed"
        | "report.succeeded"
        | "return.canceled"
        | "return.completed"
        | "return.created"
        | "return.decision_recorded"
        | "return.reopened"
        | "return.updated"
        | "return_disposition.created"
        | "return_disposition.updated"
        | "return_inspection.acceptance_decided"
        | "return_inspection.created"
        | "return_inspection.superseded"
        | "return_receipt.created"
        | "return_receipt.superseded"
        | "return_receipt.verified"
        | "return_resolution.created"
        | "return_resolution.updated"
        | "shipment.created"
        | "shipment.updated"
        | "subscription.activated"
        | "subscription.canceled"
        | "subscription.cancellation_scheduled"
        | "subscription.created"
        | "subscription.cycle_skipped"
        | "subscription.delivery_action_required"
        | "subscription.delivery_pause_upcoming"
        | "subscription.delivery_updated"
        | "subscription.dunning_exhausted"
        | "subscription.past_due"
        | "subscription.paused"
        | "subscription.payment_succeeded"
        | "subscription.plan_changed"
        | "subscription.reactivated"
        | "subscription.renewal_upcoming"
        | "subscription.resumed"
        | "subscription.trial_ending"
        | "subscription.updated"
        | "subscription_delivery_migration.completed"
        | "subscription_payment_retry.created"
        | "subscription_payment_retry.failed"
        | "subscription_payment_retry.succeeded"
        | (string & {});
    /** Shape $ (Value): string. */
    "merchant_id"?: string;
    /** Shape $ (Value): string.  Value enum: "test", "live". */
    "mode"?: "test" | "live" | (string & {});
    /** Shape $ (Value): string. */
    "partner_app_id"?: string;
    /**
     * Shape $ (Value): integer. Envelope payload version. Present only while the stored payload is
     * retained. Value enum: 1, 2.
     */
    "payload_version"?: number;
    /**
     * Shape $ (Value): object or null. Originating merchant request, or null for a background
     * event. The idempotency key is included only on an authorized detail read while the payload
     * is retained. Omitted for partner events. Shape $.id (Required): string. Shape
     * $.idempotency_key (Optional): string. The Idempotency-Key the originating request sent.
     * Absent when it sent none.
     */
    "request"?: {
        /** Shape $ (Value): string. */
        "id": string;
        /**
         * Shape $ (Value): string. The Idempotency-Key the originating request sent. Absent when
         * it sent none.
         */
        "idempotency_key"?: string;
    }
        | null;
    /** Shape $ (Value): string. */
    "resource_id"?: string;
    /**
     * Shape $ (Value): {@link ResourceType}. Public resource type: the resource's ID field name
     * without `_id`. Clients must accept values added in future releases. Value enum: "api_key",
     * "api_request_log", "balance", "balance_transaction", "bundle", "bundle_component",
     * "category", "checkout_session", "checkout_session_customer_verification", "credit_note",
     * "credit_note_allocation", "custom_domain", "customer", "customer_address",
     * "customer_deletion_request", "customer_session", "customer_verification",
     * "delivery_location_set", "delivery_method", "delivery_profile", "delivery_quote",
     * "delivery_rate", "delivery_rate_callback", "delivery_revocation", "delivery_selection",
     * "delivery_zone", "device", "discount", "dispute", "email_change_request",
     * "environment_grant", "feedback_report", "file", "flint_wallet", "flint_wallet_card",
     * "fraud_warning", "fulfillment", "fulfillment_event", "fulfillment_notification",
     * "gift_card", "gift_card_funding_disposition", "gift_card_load", "gift_card_notification",
     * "gift_card_redemption", "gift_card_transaction", "inventory_adjustment",
     * "inventory_allocation_policy", "inventory_allocation_policy_revision", "inventory_count",
     * "inventory_item", "inventory_level", "inventory_movement", "inventory_receipt",
     * "inventory_reservation", "inventory_reservation_line", "inventory_transfer",
     * "inventory_transfer_line", "invoice", "invoice_delivery_attempt", "invoice_late_fee",
     * "invoice_line_item", "invoice_manual_payment", "invoice_payment_attempt",
     * "invoice_payment_term", "location", "merchant", "merchant_billing_balance",
     * "merchant_billing_entry", "merchant_billing_invoice", "modifier", "modifier_group",
     * "modifier_set", "order", "order_charge", "order_line_item", "order_line_item_modifier",
     * "order_payment_attempt", "organization", "package", "package_item", "partner_app",
     * "partner_app_install", "payment_intent", "payment_link", "payment_link_custom_field",
     * "payment_link_line_item", "payment_method", "payment_method_domain", "payment_review",
     * "payout", "payout_destination", "payout_settings", "product", "product_option",
     * "product_option_value", "product_variant", "promotion", "promotion_code",
     * "purchase_refund_allocation", "refund", "refund_allocation", "refund_line_item_adjustment",
     * "report", "report_download", "return", "return_activity", "return_disposition",
     * "return_inspection", "return_inspection_line_item", "return_line_item", "return_policy",
     * "return_policy_revision", "return_reason", "return_receipt", "return_receipt_line_item",
     * "return_resolution", "risk_list", "risk_list_item", "risk_rule", "sandbox", "settings",
     * "shipment", "subscription", "subscription_delivery_migration", "subscription_line_item",
     * "subscription_offer", "subscription_payment_retry", "subscription_plan",
     * "subscription_plan_line_item", "user", "webhook_delivery", "webhook_endpoint",
     * "webhook_event", "workload_identity".
     */
    "resource_type"?: ResourceType;
    /**
     * Shape $ (Value): object and Alternative shapes (see declared variants). Partner envelope
     * source. Present only for partner events while the stored payload is retained. Shape
     * $.environment_grant_id (Optional): string. Shape $.merchant_id (Required): string. Shape
     * $.mode (Optional): string. Value enum: "test", "live". Shape $.partner_app_install_id
     * (Required): string. Shape $.sandbox_id (Optional): string. Shape $.type (Required): string.
     * Value enum: "partner_app", "installed_merchants". Shape $.oneOf[1] (Value): object. Shape
     * $.oneOf[1].merchant_id (Required): string. Shape $.oneOf[1].partner_app_install_id
     * (Required): string. Shape $.oneOf[1].type (Required): string. Value enum: "partner_app".
     * Shape $.oneOf[2] (Value): object. Shape $.oneOf[2].environment_grant_id (Required): string.
     * Shape $.oneOf[2].merchant_id (Required): string. Shape $.oneOf[2].mode (Required): string.
     * Value enum: "test", "live". Shape $.oneOf[2].partner_app_install_id (Required): string.
     * Shape $.oneOf[2].sandbox_id (Optional): string. Shape $.oneOf[2].type (Required): string.
     * Value enum: "installed_merchants".
     */
    "source"?: ({
        /** Shape $ (Value): string. */
        "environment_grant_id"?: string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode"?: "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "partner_app", "installed_merchants". */
        "type": "partner_app" | "installed_merchants" | (string & {});
    })
        & (({
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string.  Value enum: "partner_app". */
        "type": "partner_app" | (string & {});
    })
        | (({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    }))
        | (Record<string, unknown>));
    /** Shape $ (Value): boolean. */
    "test": boolean;
    /** Shape $ (Value): string. */
    "webhook_event_id": string;
};
export type WebhookEventBalanceTransactionCreated = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": BalanceTransaction;
    };
    "event_type"?: "balance_transaction.created" | (string & {});
})
    & {
    "event_type": "balance_transaction.created";
});
export type WebhookEventBalanceTransactionUpdated = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": BalanceTransaction;
    };
    "event_type"?: "balance_transaction.updated" | (string & {});
})
    & {
    "event_type": "balance_transaction.updated";
});
export type WebhookEventBalanceUpdated = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Balance;
    };
    "event_type"?: "balance.updated" | (string & {});
})
    & {
    "event_type": "balance.updated";
});
export type WebhookEventBundleArchived = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Bundle;
    };
    "event_type"?: "bundle.archived" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Bundle;
    };
    "event_type"?: "bundle.archived" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "bundle.archived";
});
export type WebhookEventBundleCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Bundle;
    };
    "event_type"?: "bundle.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Bundle;
    };
    "event_type"?: "bundle.created" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "bundle.created";
});
export type WebhookEventBundleUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Bundle;
    };
    "event_type"?: "bundle.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Bundle;
    };
    "event_type"?: "bundle.updated" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "bundle.updated";
});
export type WebhookEventCategoryCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Category;
    };
    "event_type"?: "category.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Category;
    };
    "event_type"?: "category.created" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "category.created";
});
export type WebhookEventCategoryDeleted = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Category;
    };
    "event_type"?: "category.deleted" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Category;
    };
    "event_type"?: "category.deleted" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "category.deleted";
});
export type WebhookEventCategoryUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Category;
    };
    "event_type"?: "category.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Category;
    };
    "event_type"?: "category.updated" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "category.updated";
});
export type WebhookEventCheckoutSessionClosed = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.closed" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.closed" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "checkout_session.closed";
});
export type WebhookEventCheckoutSessionCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.created" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "checkout_session.created";
});
export type WebhookEventCheckoutSessionExpired = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.expired" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.expired" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "checkout_session.expired";
});
export type WebhookEventCheckoutSessionInvalidated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.invalidated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.invalidated" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "checkout_session.invalidated";
});
export type WebhookEventCheckoutSessionPaid = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.paid" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.paid" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "checkout_session.paid";
});
export type WebhookEventCheckoutSessionPartiallyPaid = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.partially_paid" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.partially_paid" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "checkout_session.partially_paid";
});
export type WebhookEventCreditNoteAllocationCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNoteAllocation;
    };
    "event_type"?: "credit_note_allocation.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNoteAllocation;
    };
    "event_type"?: "credit_note_allocation.created" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "credit_note_allocation.created";
});
export type WebhookEventCreditNoteAllocationReversed = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNoteAllocation;
    };
    "event_type"?: "credit_note_allocation.reversed" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNoteAllocation;
    };
    "event_type"?: "credit_note_allocation.reversed" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "credit_note_allocation.reversed";
});
export type WebhookEventCreditNoteCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNote;
    };
    "event_type"?: "credit_note.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNote;
    };
    "event_type"?: "credit_note.created" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "credit_note.created";
});
export type WebhookEventCreditNoteIssued = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNote;
    };
    "event_type"?: "credit_note.issued" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNote;
    };
    "event_type"?: "credit_note.issued" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "credit_note.issued";
});
export type WebhookEventCreditNoteUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNote;
    };
    "event_type"?: "credit_note.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNote;
    };
    "event_type"?: "credit_note.updated" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "credit_note.updated";
});
export type WebhookEventCreditNoteVoided = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNote;
    };
    "event_type"?: "credit_note.voided" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CreditNote;
    };
    "event_type"?: "credit_note.voided" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "credit_note.voided";
});
export type WebhookEventCustomDomainArchived = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CustomDomain;
    };
    "event_type"?: "custom_domain.archived" | (string & {});
})
    & {
    "event_type": "custom_domain.archived";
});
export type WebhookEventCustomDomainUpdated = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CustomDomain;
    };
    "event_type"?: "custom_domain.updated" | (string & {});
})
    & {
    "event_type": "custom_domain.updated";
});
export type WebhookEventCustomerCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Customer;
    };
    "event_type"?: "customer.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Customer;
    };
    "event_type"?: "customer.created" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "customer.created";
});
export type WebhookEventCustomerDeleted = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Customer;
    };
    "event_type"?: "customer.deleted" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Customer;
    };
    "event_type"?: "customer.deleted" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "customer.deleted";
});
export type WebhookEventCustomerDeletionRequestCompleted = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CustomerDeletionRequest;
    };
    "event_type"?: "customer_deletion_request.completed" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CustomerDeletionRequest;
    };
    "event_type"?: "customer_deletion_request.completed" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "customer_deletion_request.completed";
});
export type WebhookEventCustomerDeletionRequestCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CustomerDeletionRequest;
    };
    "event_type"?: "customer_deletion_request.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CustomerDeletionRequest;
    };
    "event_type"?: "customer_deletion_request.created" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "customer_deletion_request.created";
});
export type WebhookEventCustomerDeletionRequestFailed = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CustomerDeletionRequest;
    };
    "event_type"?: "customer_deletion_request.failed" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CustomerDeletionRequest;
    };
    "event_type"?: "customer_deletion_request.failed" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "customer_deletion_request.failed";
});
export type WebhookEventCustomerDeletionRequestProcessing = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CustomerDeletionRequest;
    };
    "event_type"?: "customer_deletion_request.processing" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CustomerDeletionRequest;
    };
    "event_type"?: "customer_deletion_request.processing" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "customer_deletion_request.processing";
});
export type WebhookEventCustomerDeletionRequestRejected = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CustomerDeletionRequest;
    };
    "event_type"?: "customer_deletion_request.rejected" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CustomerDeletionRequest;
    };
    "event_type"?: "customer_deletion_request.rejected" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "customer_deletion_request.rejected";
});
export type WebhookEventCustomerUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Customer;
    };
    "event_type"?: "customer.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Customer;
    };
    "event_type"?: "customer.updated" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "customer.updated";
});
export type WebhookEventDeliveryLocationSetActivated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryLocationSet;
    };
    "event_type"?: "delivery_location_set.activated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryLocationSet;
    };
    "event_type"?: "delivery_location_set.activated" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "delivery_location_set.activated";
});
export type WebhookEventDeliveryLocationSetArchived = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryLocationSet;
    };
    "event_type"?: "delivery_location_set.archived" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryLocationSet;
    };
    "event_type"?: "delivery_location_set.archived" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "delivery_location_set.archived";
});
export type WebhookEventDeliveryLocationSetCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryLocationSet;
    };
    "event_type"?: "delivery_location_set.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryLocationSet;
    };
    "event_type"?: "delivery_location_set.created" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "delivery_location_set.created";
});
export type WebhookEventDeliveryLocationSetDeactivated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryLocationSet;
    };
    "event_type"?: "delivery_location_set.deactivated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryLocationSet;
    };
    "event_type"?: "delivery_location_set.deactivated" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "delivery_location_set.deactivated";
});
export type WebhookEventDeliveryLocationSetUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryLocationSet;
    };
    "event_type"?: "delivery_location_set.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryLocationSet;
    };
    "event_type"?: "delivery_location_set.updated" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "delivery_location_set.updated";
});
export type WebhookEventDeliveryMethodActivated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryMethod;
    };
    "event_type"?: "delivery_method.activated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryMethod;
    };
    "event_type"?: "delivery_method.activated" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "delivery_method.activated";
});
export type WebhookEventDeliveryMethodArchived = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryMethod;
    };
    "event_type"?: "delivery_method.archived" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryMethod;
    };
    "event_type"?: "delivery_method.archived" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "delivery_method.archived";
});
export type WebhookEventDeliveryMethodCreated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryMethod;
    };
    "event_type"?: "delivery_method.created" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryMethod;
    };
    "event_type"?: "delivery_method.created" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "delivery_method.created";
});
export type WebhookEventDeliveryMethodDeactivated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryMethod;
    };
    "event_type"?: "delivery_method.deactivated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryMethod;
    };
    "event_type"?: "delivery_method.deactivated" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "delivery_method.deactivated";
});
export type WebhookEventDeliveryMethodUpdated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryMethod;
    };
    "event_type"?: "delivery_method.updated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryMethod;
    };
    "event_type"?: "delivery_method.updated" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "delivery_method.updated";
});
export type WebhookEventDeliveryProfileActivated = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryProfile;
    };
    "event_type"?: "delivery_profile.activated" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryProfile;
    };
    "event_type"?: "delivery_profile.activated" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "delivery_profile.activated";
});
export type WebhookEventDeliveryProfileArchived = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryProfile;
    };
    "event_type"?: "delivery_profile.archived" | (string & {});
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": DeliveryProfile;
    };
    "event_type"?: "delivery_profile.archived" | (string & {});
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "delivery_profile.archived";
});
