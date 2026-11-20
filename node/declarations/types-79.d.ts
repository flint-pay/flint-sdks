import type { InputValue, EventStream } from '../runtime.js';
import type { ResendWebhookDeliveryRequestInput, ResponseMeta, ResourceReference, ReturnActor } from './types-62.js';
import type { DeliveryProfileConfiguration } from './types-21.js';
import type { MetadataMap, MerchantReadiness } from './types-43.js';
import type { CreateWebhookEndpointRequestInput } from './types-14.js';
import type { CreateWebhookTestEventRequestInput } from './types-15.js';
import type {
    DisputesAcceptParams,
    ExpandedCustomerSummary,
    ExpandedOrderSummary,
    ExpandedPaymentIntentSummary,
    ExpandedInvoiceSummary,
    ExpandedPackageSummary,
    ExpandedPayoutDestinationSummary,
    ExpandedPayoutSummary
} from './types-26.js';
import type { RotateWebhookSecretRequestInput } from './types-67.js';
import type {
    SignWebhookEndpointDeliveryRequestInput,
    SelectedProductOption,
    ServiceFulfillmentDetails,
    ShipmentFulfillmentDetails
} from './types-68.js';
import type { UpdateWebhookEndpointRequestInput } from './types-78.js';
import type { Address } from './types-0.js';
import type { InvoiceCollection, InventorySourceSystem, InventoryTransferLine } from './types-34.js';
import type { InvoiceLateFee } from './types-35.js';
import type { InvoicePaymentDue } from './types-36.js';
import type { InvoicePaymentTermsSnapshot } from './types-37.js';
import type { InvoiceScheduleEntry, InvoiceSettlementAmounts, InvoiceSnapshot } from './types-38.js';
import type { PricingAmounts } from './types-56.js';
import type { ImageAttachment, InventoryActionRequired, Image } from './types-31.js';
import type { CheckoutBillingContact, CheckoutBuyerContact } from './types-6.js';
import type { CustomFieldAnswer } from './types-16.js';
import type { DeferredPromotion } from './types-17.js';
import type {
    ExpandedSubscriptionPlanSummary,
    ExpandedSubscriptionSummary,
    FailedPaymentAttempt,
    ExpandedShipmentSummary,
    FulfillmentChargeLink,
    FulfillmentHold,
    FulfillmentLineItem
} from './types-27.js';
import type { InventoryRoutingSource, InventoryReservationLine, InventoryReservationOwner } from './types-33.js';
import type {
    OrderAuthorizationAmounts,
    OrderCharge,
    OrderDeliveryDestination,
    OrderDeliverySummary,
    OrderDiscount
} from './types-45.js';
import type {
    OrderGiftCardEstimate,
    OrderGiftCardSelection,
    OrderGiftCardSettlement,
    OrderHandover,
    OrderLineItem,
    OrderEditChargeRefund,
    OrderEditLineAddition,
    OrderEditLineRemoval,
    OrderLineItemModifier
} from './types-46.js';
import type {
    OrderReturnCreditSettlement,
    OrderSettlementAmounts,
    OrderTax,
    OrderPaymentAttemptPaymentMethodSave,
    OrderPaymentAttemptPaymentMethodSavePreviousAttributes
} from './types-47.js';
import type { TicketedEvent, Tip } from './types-75.js';
import type { MoneyValue, MoneyValuePreviousAttributes } from './types-44.js';
import type { PartnerEnvironmentGrant } from './types-50.js';
import type {
    PaymentErrorSummary,
    PaymentFulfillmentHold,
    PaymentIntentOvercapture,
    PaymentIntentPlatformFee,
    PaymentAttemptGiftCardRedemption,
    PaymentAttemptPaymentIntent,
    PaymentAttemptGiftCardRedemptionPreviousAttributes,
    PaymentAttemptPaymentIntentPreviousAttributes,
    PaymentErrorSummaryPreviousAttributes
} from './types-51.js';
import type { PaymentRisk, PaymentSourceSummary, PaymentSplit } from './types-54.js';
import type { CategoryReference } from './types-5.js';
import type { ProductOption, ProductPriceRange, ProductVariant, PromotionApplicationMethod } from './types-57.js';
import type { Dimensions, DigitalFulfillmentDetails } from './types-25.js';
import type { GiftCardProductConfiguration, GiftCardRestriction } from './types-30.js';
import type { LicenseKeyConfiguration } from './types-39.js';
import type { QuantityPriceBreak, PromotionRuleGroup, PromotionSchedule, ReaderConnectivity } from './types-59.js';
import type { Weight, WebhookSnapshotReturnResolution } from './types-80.js';
import type { PromotionCodesSummary, PromotionCombinesWith, PromotionExclusivity } from './types-58.js';
import type { DeliveryFulfillmentDetails } from './types-19.js';
import type { FulfillmentOutcome, FulfillmentRecipient } from './types-28.js';
import type {
    PickupFulfillmentDetails,
    PendingPaymentAction,
    PendingPaymentActionPreviousAttributes,
    PayoutTraceID
} from './types-55.js';
import type { InventoryCountLine, InventoryCountObservationProvenance, InventoryReceiptLine } from './types-32.js';
import type { PaymentRefund } from './types-53.js';
import type { RefundChargeAllocation, RefundLineItemAllocation } from './types-60.js';
import type { RefundTaxBreakdownRefund, RefundTenderAllocation, RefundUnissuedGiftCardRecovery } from './types-61.js';
import type {
    ReturnCompletionBlocker,
    ReturnFinancialSummary,
    ReturnHandoffRequirement,
    ReturnInspectionLineItem
} from './types-63.js';
import type { ReturnPolicyEvaluation, ReturnLineItemEligibility, ReturnLineItemValue, ReturnReason } from './types-64.js';
import type { ReturnSourceSystem } from './types-66.js';
import type { BundleComponent } from './types-1.js';
import type { ReturnReceiptLineItem } from './types-65.js';
export type WebhookDeliveriesResendParams = (InputValue<ResendWebhookDeliveryRequestInput>);
/** An attempt to deliver an event to a webhook endpoint. */
export type WebhookDelivery = {
    /**
     * Attempts made by Flint's automatic schedule. Manual resends and the first attempt of a
     * delivery you create don't count. Format: int32.
     */
    "automatic_attempt_count": number;
    /**
     * When the delivery was created: when Flint prepared the event, or when you created it.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "delivered_at"?: string;
    /**
     * The kind of failure on the most recent failed attempt. Absent before any attempt, and when
     * delivered or suppressed. Value enum: "webhook_timeout", "webhook_dns", "webhook_tls",
     * "webhook_connection", "webhook_blocked_target", "webhook_request", "webhook_redirect",
     * "webhook_http_4xx", "webhook_http_5xx", "webhook_payload_render", "webhook_delivery".
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
        | "webhook_payload_render"
        | "webhook_delivery"
        | (string & {});
    /**
     * A concise explanation of the failed attempt. Absent before any attempt, and when delivered
     * or suppressed.
     */
    "error_summary"?: string;
    /**
     * HTTP status returned by the receiver on the latest recorded attempt. Omitted when no HTTP
     * response was received. Format: int32.
     */
    "last_response_code"?: number;
    /** Maximum automatic attempts. Format: int32. */
    "max_attempts": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "next_retry_at"?: string;
    /** The next step to resolve the failed delivery attempt. */
    "recommended_action"?: string;
    /**
     * Whether sending this delivery again without changing your endpoint is likely to succeed.
     * While the delivery is pending, Flint retries automatically either way.
     */
    "retryable"?: boolean;
    /**
     * Current state of this endpoint delivery and its automatic retry schedule. Value enum:
     * "pending", "delivered", "failed", "suppressed".
     */
    "status": "pending" | "delivered" | "failed" | "suppressed" | (string & {});
    /**
     * Why this delivery was suppressed. Present exactly when status is suppressed. Suppressed
     * deliveries have no failure explanation. Value enum: "endpoint_inactive", "endpoint_deleted",
     * "authorization_revoked", "scope_missing", "event_not_allowed",
     * "partner_app_install_revoked", "sandbox_reset".
     */
    "suppression_reason"?: "endpoint_inactive"
        | "endpoint_deleted"
        | "authorization_revoked"
        | "scope_missing"
        | "event_not_allowed"
        | "partner_app_install_revoked"
        | "sandbox_reset"
        | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Unique identifier for this webhook delivery, prefixed `wdel_`. Example:
     * "wdel_01KEZF7C001DWSNDCDZHCTBN0A".
     */
    "webhook_delivery_id": string;
    /**
     * ID of the receiving endpoint, retained even after the endpoint is deleted. Example:
     * "whep_01KEZF7C006FXYTAJRZCGCBJTN".
     */
    "webhook_endpoint_id": string;
    /** ID of the event this delivery sends. Example: "whev_01KEZF7C00362MS3HV970TRZGS". */
    "webhook_event_id": string;
};
/**
 * The result of a webhook delivery action, such as a resend: the delivery, attempt, status, and
 * any error details.
 */
export type WebhookDeliveryAction = {
    /**
     * Sequence number of this attempt within the delivery, including automatic and manual
     * attempts. Format: int32.
     */
    "attempt_number": number;
    /**
     * Outcome of the individual attempt made by this action. Value enum: "pending", "delivered",
     * "failed".
     */
    "attempt_status": "pending" | "delivered" | "failed" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "completed_at"?: string;
    /**
     * Current state of the delivery after this action. Value enum: "pending", "delivered",
     * "failed", "suppressed".
     */
    "delivery_status": "pending" | "delivered" | "failed" | "suppressed" | (string & {});
    /**
     * What caused Flint to make this delivery attempt. Value enum: "automatic_delivery",
     * "automatic_retry", "manual_resend", "manual_delivery", "test_event".
     */
    "delivery_trigger": "automatic_delivery"
        | "automatic_retry"
        | "manual_resend"
        | "manual_delivery"
        | "test_event"
        | (string & {});
    /** Duration of this delivery attempt in milliseconds. Format: int64. */
    "duration_milliseconds"?: number;
    /**
     * The kind of failure for this attempt. Present only when this attempt's `attempt_status` is
     * `failed`. Value enum: "webhook_timeout", "webhook_dns", "webhook_tls", "webhook_connection",
     * "webhook_blocked_target", "webhook_request", "webhook_redirect", "webhook_http_4xx",
     * "webhook_http_5xx", "webhook_payload_render", "webhook_delivery".
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
        | "webhook_payload_render"
        | "webhook_delivery"
        | (string & {});
    /**
     * A concise explanation of the failure for this attempt. Present only when this attempt's
     * `attempt_status` is `failed`.
     */
    "error_summary"?: string;
    /** The note supplied when this action was requested. */
    "reason_message"?: string;
    /** The next step to resolve the failed delivery attempt. */
    "recommended_action"?: string;
    /** Receiver response body excerpt. Omitted unless the caller can read the event's resource. */
    "response_body_excerpt"?: string;
    /** Receiver response content type. Omitted unless the caller can read the event's resource. */
    "response_content_type"?: string;
    /**
     * Receiver response headers, keyed by lowercase header name. Repeated values are joined with
     * ", ". Sensitive values read [REDACTED]. Absent when no response was received, after the
     * 14-day response-detail retention, or unless the caller can read the event's resource. *
     * (Value): string.
     */
    "response_headers"?: Record<string, string>;
    /**
     * Whether sending this delivery again without changing your endpoint is likely to succeed.
     * While the delivery is pending, Flint retries automatically either way.
     */
    "retryable"?: boolean;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "started_at"?: string;
    /**
     * HTTP status returned by the receiver. Omitted when no HTTP response was received. Format:
     * int32.
     */
    "status_code"?: number;
    /**
     * ID of this individual attempt to send the event. Example: "watt_01KEZF7C00RG6XMCAFJB8HH55R".
     */
    "webhook_delivery_attempt_id": string;
    /**
     * ID of the endpoint delivery this attempt belongs to. Example:
     * "wdel_01KEZF7C001DWSNDCDZHCTBN0A".
     */
    "webhook_delivery_id": string;
    /** ID of the event sent by this attempt. Example: "whev_01KEZF7C00362MS3HV970TRZGS". */
    "webhook_event_id": string;
};
/** A response containing `WebhookDeliveryAction` data. */
export type WebhookDeliveryActionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The result of a webhook
     * delivery action, such as a resend: the delivery, attempt, status, and any error details.
     */
    "data": WebhookDeliveryAction;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * One attempt to deliver a webhook event to an endpoint, with its status, timing, response code,
 * and error details.
 */
export type WebhookDeliveryAttempt = {
    /**
     * API version used for this delivery attempt. Omitted when the version was not recorded or
     * payload rendering failed. Format: date. Example: "2026-08-02".
     */
    "api_version"?: string;
    /**
     * Sequence number of this attempt within the delivery, including automatic and manual
     * attempts. Format: int32.
     */
    "attempt_number": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "completed_at"?: string;
    /**
     * What caused Flint to make this delivery attempt. Value enum: "automatic_delivery",
     * "automatic_retry", "manual_resend", "manual_delivery", "test_event".
     */
    "delivery_trigger": "automatic_delivery"
        | "automatic_retry"
        | "manual_resend"
        | "manual_delivery"
        | "test_event"
        | (string & {});
    /** Duration of this delivery attempt in milliseconds. Format: int64. */
    "duration_milliseconds"?: number;
    /**
     * The kind of failure for this attempt. Present only when this attempt's `status` is `failed`.
     * Value enum: "webhook_timeout", "webhook_dns", "webhook_tls", "webhook_connection",
     * "webhook_blocked_target", "webhook_request", "webhook_redirect", "webhook_http_4xx",
     * "webhook_http_5xx", "webhook_payload_render", "webhook_delivery".
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
        | "webhook_payload_render"
        | "webhook_delivery"
        | (string & {});
    /**
     * A concise explanation of the failure for this attempt. Present only when this attempt's
     * `status` is `failed`.
     */
    "error_summary"?: string;
    /** The note supplied when this action was requested. */
    "reason_message"?: string;
    /** The next step to resolve the failed delivery attempt. */
    "recommended_action"?: string;
    /** Receiver response body excerpt. Omitted unless the caller can read the event's resource. */
    "response_body_excerpt"?: string;
    /** Receiver response content type. Omitted unless the caller can read the event's resource. */
    "response_content_type"?: string;
    /**
     * Receiver response headers, keyed by lowercase header name. Repeated values are joined with
     * ", ". Sensitive values read [REDACTED]. Absent when no response was received, after the
     * 14-day response-detail retention, or unless the caller can read the event's resource. *
     * (Value): string.
     */
    "response_headers"?: Record<string, string>;
    /**
     * Whether sending this delivery again without changing your endpoint is likely to succeed.
     * While the delivery is pending, Flint retries automatically either way.
     */
    "retryable"?: boolean;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "started_at"?: string;
    /**
     * Outcome of this individual delivery attempt. Value enum: "pending", "delivered", "failed".
     */
    "status": "pending" | "delivered" | "failed" | (string & {});
    /**
     * HTTP status returned by the receiver. Omitted when no HTTP response was received. Format:
     * int32.
     */
    "status_code"?: number;
    /**
     * ID of this individual attempt to send the event. Example: "watt_01KEZF7C00RG6XMCAFJB8HH55R".
     */
    "webhook_delivery_attempt_id": string;
    /**
     * ID of the endpoint delivery this attempt belongs to. Example:
     * "wdel_01KEZF7C001DWSNDCDZHCTBN0A".
     */
    "webhook_delivery_id": string;
    /** ID of the event sent by this attempt. Example: "whev_01KEZF7C00362MS3HV970TRZGS". */
    "webhook_event_id": string;
};
/** A page of `WebhookDeliveryAttempt` objects. */
export type WebhookDeliveryAttemptListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * WebhookDeliveryAttempt}. One attempt to deliver a webhook event to an endpoint, with its
     * status, timing, response code, and error details.
     */
    "data": Array<WebhookDeliveryAttempt>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A page of `WebhookDelivery` objects. */
export type WebhookDeliveryListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * WebhookDelivery}. An attempt to deliver an event to a webhook endpoint.
     */
    "data": Array<WebhookDelivery>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * The resource snapshot, without expansions. Webhooks omit these fields: `diagnostics`,
 * `unconfigured_assignment`.
 */
export type WebhookDeliveryProfile = ({
    /**
     * Current delivery requirement and grouping policy. Whether delivery planning applies to items
     * under a delivery profile, and if so the allowed delivery types, resolution mode, origin
     * policy, and grouping and splitting rules.
     */
    "configuration": DeliveryProfileConfiguration;
    /** Time the profile was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Immutable revision used for new line-item snapshots. Example:
     * "dprofr_01KEZF7C00K1P3FXGHCF46YQ1F".
     */
    "current_delivery_profile_revision_id": string;
    /** Stable delivery profile ID. Example: "dprof_01KEZF7C0020J13FQYNY9854R0". */
    "delivery_profile_id": string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** True only when this profile is the current physical catalog default. */
    "is_default": boolean;
    /**
     * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Merchant-facing profile name. */
    "name": string;
    /** Current profile lifecycle status. Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /** Time the profile last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /** Optimistic-concurrency version for profile writes. Format: uint64. minimum: 1. */
    "version": number;
});
/** A response containing `WebhookDelivery` data. */
export type WebhookDeliveryResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An attempt to deliver an
     * event to a webhook endpoint.
     */
    "data": WebhookDelivery;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * A merchant webhook endpoint belongs to the live mode or sandbox of the credential that created
 * it and receives only that environment's events. Partner endpoints select sources with
 * event_sources and installed_merchant_modes.
 */
export type WebhookEndpoint = ({
    /**
     * A dated API version pins this endpoint. The value default follows the endpoint owner's
     * merchant default at delivery time, including retries. Deliveries never use a newer version
     * than the event's recorded version.
     */
    "api_version": string;
    /** When api_version last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "api_version_changed_at"?: string;
    /**
     * Version this endpoint used before its last upgrade. Present while a rollback is available.
     * To roll back, send it as api_version.
     */
    "api_version_previous"?: string;
    /**
     * When the rollback offer for api_version_previous ends. You can still set any supported
     * version afterward. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "api_version_rollback_expires_at"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The API key, user, partner app, or workload identity that created this endpoint. An API key
     * creator can belong to another mode, such as a live key that creates a sandbox endpoint.
     * Absent when the creator is unavailable, including endpoints created before attribution was
     * recorded. A reference to another resource by `resource_type` and `resource_id`.
     */
    "created_by"?: ResourceReference;
    /** Your description of this endpoint. Omitted when none is set. */
    "description"?: string;
    /**
     * Subscribed event types. ["*"] includes every type the endpoint's event_sources deliver,
     * including types added later; * is not available with installed_merchants. Stored
     * subscriptions map previous names permanently and drop removed names on read. Empty when no
     * current subscriptions remain. See the [changelog](/docs/changelog). [] (Value): string.
     * minLength: 1.
     */
    "enabled_events": Array<string>;
    /**
     * Event sources this endpoint receives. Defaults to merchant. Use partner_app for app
     * lifecycle events and installed_merchants for events from merchants that installed the
     * partner app. [] enum: "merchant", "partner_app", "installed_merchants". [] (Value): string.
     * Value enum: "merchant", "partner_app", "installed_merchants".
     */
    "event_sources"?: Array<"merchant" | "partner_app" | "installed_merchants" | (string & {})>;
    /**
     * Modes of installed-merchant events this endpoint receives. Required when event_sources
     * includes installed_merchants and omitted otherwise. Partner app lifecycle events are
     * delivered regardless of these modes. minItems: 1. maxItems: 2. uniqueItems: true. [] enum:
     * "test", "live". [] (Value): string. Value enum: "test", "live".
     */
    "installed_merchant_modes"?: Array<"test" | "live" | (string & {})>;
    /**
     * Partner app that owns partner_app or installed_merchants event sources. Example:
     * "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: string;
    /**
     * The connected app install this endpoint is linked to. The endpoint is deleted when that
     * install is revoked or loses its grant for this endpoint's environment. Null when the
     * endpoint is not linked to a connected app. Never changes. pattern:
     * ^pinst_[0-9A-HJKMNP-TV-Z]{26}$. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id": string | null;
    /**
     * When the replaced signing secret stops signing deliveries. Present only during a rotation
     * overlap. Until then each delivery carries a signature from both secrets. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "previous_secret_expires_at"?: string;
    /**
     * Methods Flint uses to sign deliveries to this endpoint. minItems: 1. uniqueItems: true. []
     * enum: "jwt", "hmac". [] (Value): string. How Flint signs requests to this endpoint. Value
     * enum: "jwt", "hmac".
     */
    "signing_methods": Array<"jwt" | "hmac" | (string & {})>;
    /**
     * Availability of this endpoint. Deleted is returned only by DELETE. Value enum: "active",
     * "inactive", "deleted".
     */
    "status": "active" | "inactive" | "deleted" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /** Public HTTPS URL that receives webhook deliveries. */
    "url": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: uint64. minimum: 1.
     */
    "version": number;
    /**
     * Unique identifier for this webhook endpoint, prefixed `whep_`. Example:
     * "whep_01KEZF7C006FXYTAJRZCGCBJTN".
     */
    "webhook_endpoint_id": string;
});
/** A page of `WebhookEndpoint` objects. */
export type WebhookEndpointListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * WebhookEndpoint}. A merchant webhook endpoint belongs to the live mode or sandbox of the
     * credential that created it and receives only that environment's events. Partner endpoints
     * select sources with event_sources and installed_merchant_modes.
     */
    "data": Array<WebhookEndpoint>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `WebhookEndpoint` data. */
export type WebhookEndpointResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A merchant webhook
     * endpoint belongs to the live mode or sandbox of the credential that created it and receives
     * only that environment's events. Partner endpoints select sources with event_sources and
     * installed_merchant_modes.
     */
    "data": WebhookEndpoint;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * A webhook endpoint with its one-time signing secret, returned on create with hmac, when PATCH
 * first enables hmac, or when its secret is rotated. A merchant webhook endpoint belongs to the
 * live mode or sandbox of the credential that created it and receives only that environment's
 * events. Partner endpoints select sources with event_sources and installed_merchant_modes.
 */
export type WebhookEndpointWithSecret = (Exclude<WebhookEndpoint & object, readonly unknown[]>)
    & ({
    /**
     * One-time signing secret. Present on create when hmac is enabled, on PATCH when hmac is first
     * enabled, and on rotation; omitted on an idempotent replay after the secret retention period.
     */
    "secret"?: string;
});
/** A response containing `WebhookEndpointWithSecret` data. */
export type WebhookEndpointWithSecretResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A webhook endpoint with
     * its one-time signing secret, returned on create with hmac, when PATCH first enables hmac, or
     * when its secret is rotated. A merchant webhook endpoint belongs to the live mode or sandbox
     * of the credential that created it and receives only that environment's events. Partner
     * endpoints select sources with event_sources and installed_merchant_modes.
     */
    "data": WebhookEndpointWithSecret;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type WebhookEndpointsCreateParams = (InputValue<CreateWebhookEndpointRequestInput>);
export type WebhookEndpointsCreateTestEventParams = (InputValue<CreateWebhookTestEventRequestInput>);
export type WebhookEndpointsDeleteParams = {
    /**
     * Optional configuration version last read by the caller. Format: uint64. minimum: 1. maximum:
     * 9007199254740991.
     */
    "expected_version"?: InputValue<number>;
};
export type WebhookEndpointsGetParams = DisputesAcceptParams;
export type WebhookEndpointsListParams = {
    /**
     * Filter by the exact ID of the API key, user, partner app, or workload identity that created
     * the endpoint. Unknown IDs return an empty list. pattern:
     * ^(key|usr|papp|wid)_[0-7][0-9A-HJKMNP-TV-Z]{25}$.
     */
    "created_by"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by status. Omitted, the list leaves out deleted rows; name deleted to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "inactive", "deleted". Value enum: "active", "inactive", "deleted". anyOf[1] (Value): Array
     * of string. minItems: 1. [] enum: "active", "inactive", "deleted". anyOf[1][] (Value):
     * string. Value enum: "active", "inactive", "deleted". anyOf[2] (Value): string. Value enum:
     * "active", "inactive", "deleted".
     */
    "status"?: InputValue<("active" | "inactive" | "deleted") | readonly ("active" | "inactive" | "deleted")[]>;
    /**
     * Filter by webhook endpoint event sources. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "merchant", "partner_app", "installed_merchants". Value enum:
     * "merchant", "partner_app", "installed_merchants". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "merchant", "partner_app", "installed_merchants". anyOf[1][] (Value):
     * string. Value enum: "merchant", "partner_app", "installed_merchants". anyOf[2] (Value):
     * string. Value enum: "merchant", "partner_app", "installed_merchants".
     */
    "event_sources"?: InputValue<("merchant" | "partner_app" | "installed_merchants")
        | readonly ("merchant" | "partner_app" | "installed_merchants")[]>;
    /**
     * Filter by partner app ID for partner-source webhook endpoints. pattern:
     * ^papp_[0-9A-HJKMNP-TV-Z]{26}$. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: InputValue<string>;
    /**
     * Exact-match filter on partner_app_install_id. pattern: ^pinst_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id"?: InputValue<string>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type WebhookEndpointsRotateSecretParams = (InputValue<RotateWebhookSecretRequestInput>);
export type WebhookEndpointsSignDeliveryParams = (InputValue<SignWebhookEndpointDeliveryRequestInput>);
export type WebhookEndpointsUpdateParams = (InputValue<UpdateWebhookEndpointRequestInput>);
/** An event prepared for delivery to webhook endpoints. */
export type WebhookEvent = ({
    /**
     * ID of the API request log associated with the event. Omitted when none is associated.
     * Example: "rlog_01KEZF7C008XJCH6BHA224X46F".
     */
    "api_request_log_id"?: string;
    /**
     * API version of the event data. Stored data follows the same versioning rules as webhook
     * deliveries. Format: date. Example: "2026-08-02".
     */
    "api_version": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The delivered envelope's data, including its payload-version-specific shape. Omitted from
     * list responses and from detail responses when the caller lacks read access to the attributed
     * resource or the payload has expired after 14 days.
     */
    "data"?: {
        [key: string]: unknown;
    };
    /**
     * Envelope discriminator identifying merchant events, partner app lifecycle events, or events
     * forwarded from installed merchants. Value enum: "merchant", "partner_app",
     * "installed_merchants".
     */
    "event_source"?: "merchant" | "partner_app" | "installed_merchants" | (string & {});
    /**
     * Type of event Flint recorded, using the current event type name. Value enum:
     * "api_key.created", "api_key.revoked", "api_key.updated", "balance.updated",
     * "balance_transaction.created", "balance_transaction.updated", "bundle.archived",
     * "bundle.created", "bundle.updated", "category.created", "category.deleted",
     * "category.updated", "checkout_session.closed", "checkout_session.created",
     * "checkout_session.expired", "checkout_session.invalidated", "checkout_session.paid",
     * "checkout_session.partially_paid", "checkout_session.updated", "credit_note.created",
     * "credit_note.issued", "credit_note.updated", "credit_note.voided",
     * "credit_note_allocation.created", "credit_note_allocation.reversed",
     * "custom_domain.archived", "custom_domain.updated", "customer.created", "customer.deleted",
     * "customer.updated", "customer_deletion_request.completed",
     * "customer_deletion_request.created", "customer_deletion_request.failed",
     * "customer_deletion_request.processing", "customer_deletion_request.rejected",
     * "customer_email_preferences.updated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.updated",
     * "delivery_method.activated", "delivery_method.archived", "delivery_method.created",
     * "delivery_method.deactivated", "delivery_method.updated", "delivery_profile.archived",
     * "delivery_profile.created", "delivery_profile.updated", "delivery_rate_callback.activated",
     * "delivery_rate_callback.archived", "delivery_rate_callback.created",
     * "delivery_rate_callback.deactivated", "delivery_rate_callback.updated",
     * "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.archived",
     * "delivery_zone.created", "delivery_zone.updated", "dispute.created",
     * "dispute.inquiry_closed", "dispute.lost", "dispute.needs_response", "dispute.prevented",
     * "dispute.updated", "dispute.won", "environment_grant.created", "environment_grant.revoked",
     * "environment_grant.updated", "fraud_warning.created", "fraud_warning.updated",
     * "fulfillment.canceled", "fulfillment.completed", "fulfillment.created",
     * "fulfillment.failed", "fulfillment.updated", "fulfillment_event.created",
     * "gift_card.created", "gift_card.updated", "gift_card_load.created",
     * "gift_card_load.updated", "gift_card_notification.created",
     * "gift_card_notification.updated", "gift_card_redemption.created",
     * "gift_card_redemption.updated", "gift_card_transaction.created", "inventory_count.applied",
     * "inventory_count.updated", "inventory_level.shortage_detected", "inventory_level.updated",
     * "inventory_receipt.created", "inventory_reservation.action_required",
     * "inventory_reservation.at_risk", "inventory_reservation.closed",
     * "inventory_reservation.committed", "inventory_reservation.consumed",
     * "inventory_reservation.created", "inventory_reservation.hold_expired",
     * "inventory_reservation.released", "inventory_reservation.updated",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned", "inventory_transfer.updated",
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
     * "invoice_payment_attempt.succeeded", "license_key.created", "license_key.disabled",
     * "license_key.expired", "license_key.updated", "license_key_activation.created",
     * "license_key_activation.released", "license_key_pool.archived", "license_key_pool.created",
     * "license_key_pool.low_stock", "license_key_pool.out_of_stock", "license_key_pool.updated",
     * "merchant.readiness_updated", "merchant.updated", "merchant_billing_balance.updated",
     * "merchant_billing_invoice.issued", "merchant_billing_invoice.updated",
     * "modifier_group.archived", "modifier_group.created", "modifier_group.updated",
     * "modifier_set.archived", "modifier_set.created", "modifier_set.updated", "order.closed",
     * "order.created", "order.inventory_exception_created", "order.inventory_exception_resolved",
     * "order.paid", "order.partially_paid", "order.partially_refunded", "order.refunded",
     * "order.updated", "order_edit.canceled", "order_edit.completed", "order_edit.created",
     * "order_edit.updated", "package.created", "package.updated", "partner_app.platform_approved",
     * "partner_app.platform_limited", "partner_app.platform_rejected", "partner_app.updated",
     * "partner_app_install.created", "partner_app_install.permissions_updated",
     * "partner_app_install.revoked", "partner_app_install.updated",
     * "payment_intent.authorization_expiring", "payment_intent.canceled",
     * "payment_intent.created", "payment_intent.expired",
     * "payment_intent.fulfillment_hold_updated", "payment_intent.payment_failed",
     * "payment_intent.processing", "payment_intent.requires_action",
     * "payment_intent.requires_capture", "payment_intent.succeeded", "payment_intent.updated",
     * "payment_link.created", "payment_link.updated", "payment_method.activated",
     * "payment_method.archived", "payment_method.failed", "payment_method.updated",
     * "payment_review.closed", "payment_review.opened", "payment_review.reopened",
     * "payment_split.canceled", "payment_split.created", "payment_split.failed",
     * "payment_split.succeeded", "payment_split.updated", "payout.canceled", "payout.created",
     * "payout.failed", "payout.reversed", "payout.succeeded", "payout.updated",
     * "payout_destination.archived", "payout_destination.created", "payout_destination.disabled",
     * "payout_destination.updated", "payout_settings.updated", "platform_fee.canceled",
     * "platform_fee.created", "platform_fee.succeeded", "platform_fee.updated",
     * "platform_fee_payout.created", "platform_fee_payout.failed",
     * "platform_fee_payout.succeeded", "price_list.archived", "price_list.created",
     * "price_list.updated", "product.archived", "product.created", "product.updated",
     * "product_variant.archived", "product_variant.created", "product_variant.updated",
     * "promotion.archived", "promotion.created", "promotion.updated", "promotion_code.archived",
     * "promotion_code.created", "promotion_code.updated", "reader.archived", "reader.created",
     * "reader.updated", "refund.created", "refund.failed", "refund.partially_succeeded",
     * "refund.succeeded", "refund.updated", "report.failed", "report.succeeded",
     * "return.canceled", "return.completed", "return.created", "return.decision_recorded",
     * "return.reopened", "return.updated", "return_disposition.created",
     * "return_disposition.updated", "return_inspection.acceptance_decided",
     * "return_inspection.created", "return_inspection.superseded", "return_receipt.created",
     * "return_receipt.superseded", "return_receipt.verified", "return_resolution.created",
     * "return_resolution.updated", "shipment.created", "shipment.updated",
     * "subscription.activated", "subscription.canceled", "subscription.cancellation_scheduled",
     * "subscription.created", "subscription.cycle_skipped",
     * "subscription.delivery_action_required", "subscription.delivery_pause_upcoming",
     * "subscription.delivery_updated", "subscription.dunning_exhausted",
     * "subscription.end_upcoming", "subscription.past_due", "subscription.paused",
     * "subscription.payment_succeeded", "subscription.plan_change_canceled",
     * "subscription.plan_change_scheduled", "subscription.plan_changed",
     * "subscription.reactivated", "subscription.renewal_upcoming", "subscription.resumed",
     * "subscription.trial_ending", "subscription.updated",
     * "subscription_delivery_migration.completed", "subscription_payment_retry.created",
     * "subscription_payment_retry.failed", "subscription_payment_retry.succeeded",
     * "tax_calculation_callback.activated", "tax_calculation_callback.archived",
     * "tax_calculation_callback.created", "tax_calculation_callback.deactivated",
     * "tax_calculation_callback.updated", "tax_connection.updated", "test_clock.advancing",
     * "test_clock.archived", "test_clock.created", "test_clock.failed", "test_clock.ready",
     * "ticket.checked_in", "ticket.created", "ticket.updated", "ticket.voided".
     */
    "event_type": "api_key.created"
        | "api_key.revoked"
        | "api_key.updated"
        | "balance.updated"
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
        | "checkout_session.updated"
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
        | "customer_email_preferences.updated"
        | "delivery_location_set.archived"
        | "delivery_location_set.created"
        | "delivery_location_set.updated"
        | "delivery_method.activated"
        | "delivery_method.archived"
        | "delivery_method.created"
        | "delivery_method.deactivated"
        | "delivery_method.updated"
        | "delivery_profile.archived"
        | "delivery_profile.created"
        | "delivery_profile.updated"
        | "delivery_rate_callback.activated"
        | "delivery_rate_callback.archived"
        | "delivery_rate_callback.created"
        | "delivery_rate_callback.deactivated"
        | "delivery_rate_callback.updated"
        | "delivery_revocation.created"
        | "delivery_selection.committed"
        | "delivery_zone.archived"
        | "delivery_zone.created"
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
        | "environment_grant.updated"
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
        | "inventory_count.updated"
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
        | "inventory_reservation.updated"
        | "inventory_transfer.closed"
        | "inventory_transfer.departed"
        | "inventory_transfer.lost"
        | "inventory_transfer.received"
        | "inventory_transfer.returned"
        | "inventory_transfer.updated"
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
        | "invoice_payment_attempt.succeeded"
        | "license_key.created"
        | "license_key.disabled"
        | "license_key.expired"
        | "license_key.updated"
        | "license_key_activation.created"
        | "license_key_activation.released"
        | "license_key_pool.archived"
        | "license_key_pool.created"
        | "license_key_pool.low_stock"
        | "license_key_pool.out_of_stock"
        | "license_key_pool.updated"
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
        | "order_edit.canceled"
        | "order_edit.completed"
        | "order_edit.created"
        | "order_edit.updated"
        | "package.created"
        | "package.updated"
        | "partner_app.platform_approved"
        | "partner_app.platform_limited"
        | "partner_app.platform_rejected"
        | "partner_app.updated"
        | "partner_app_install.created"
        | "partner_app_install.permissions_updated"
        | "partner_app_install.revoked"
        | "partner_app_install.updated"
        | "payment_intent.authorization_expiring"
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
        | "payment_method.updated"
        | "payment_review.closed"
        | "payment_review.opened"
        | "payment_review.reopened"
        | "payment_split.canceled"
        | "payment_split.created"
        | "payment_split.failed"
        | "payment_split.succeeded"
        | "payment_split.updated"
        | "payout.canceled"
        | "payout.created"
        | "payout.failed"
        | "payout.reversed"
        | "payout.succeeded"
        | "payout.updated"
        | "payout_destination.archived"
        | "payout_destination.created"
        | "payout_destination.disabled"
        | "payout_destination.updated"
        | "payout_settings.updated"
        | "platform_fee.canceled"
        | "platform_fee.created"
        | "platform_fee.succeeded"
        | "platform_fee.updated"
        | "platform_fee_payout.created"
        | "platform_fee_payout.failed"
        | "platform_fee_payout.succeeded"
        | "price_list.archived"
        | "price_list.created"
        | "price_list.updated"
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
        | "reader.archived"
        | "reader.created"
        | "reader.updated"
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
        | "subscription.end_upcoming"
        | "subscription.past_due"
        | "subscription.paused"
        | "subscription.payment_succeeded"
        | "subscription.plan_change_canceled"
        | "subscription.plan_change_scheduled"
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
        | "tax_calculation_callback.activated"
        | "tax_calculation_callback.archived"
        | "tax_calculation_callback.created"
        | "tax_calculation_callback.deactivated"
        | "tax_calculation_callback.updated"
        | "tax_connection.updated"
        | "test_clock.advancing"
        | "test_clock.archived"
        | "test_clock.created"
        | "test_clock.failed"
        | "test_clock.ready"
        | "ticket.checked_in"
        | "ticket.created"
        | "ticket.updated"
        | "ticket.voided"
        | (string & {});
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id"?: string;
    /** Environment used for this resource or request. Value enum: "test", "live". */
    "mode"?: "test" | "live" | (string & {});
    /**
     * ID of the partner app that owns this partner event. Omitted for merchant events. Example:
     * "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: string;
    /**
     * Envelope payload version. Present only while the stored payload is retained. Value enum: 1,
     * 2.
     */
    "payload_version"?: number;
    /**
     * Originating request. `null` when the event is synthetic or no originating request ID is
     * recorded. The idempotency key is included only on an authorized detail read while the
     * payload is retained. Omitted for partner events. id (Required): string. Request ID of the
     * request that caused the event. idempotency_key (Optional): string. The Idempotency-Key the
     * originating request sent. Absent when it sent none.
     */
    "request"?: {
        /** Request ID of the request that caused the event. */
        "id": string;
        /** The Idempotency-Key the originating request sent. Absent when it sent none. */
        "idempotency_key"?: string;
    }
        | null;
    /**
     * ID of the resource affected by the event. Omitted when no resource ID is attributed.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "resource_id"?: string;
    /**
     * Public resource type affected by the event. Omitted when no public resource type is
     * attributed. Example: "order". Value enum: "api_key", "api_request_log", "balance",
     * "balance_transaction", "bundle", "bundle_component", "category", "checkout_session",
     * "checkout_session_customer_verification", "credit_note", "credit_note_allocation",
     * "custom_domain", "customer", "customer_address", "customer_deletion_request",
     * "customer_email_preferences", "customer_session", "customer_tax_exemption",
     * "customer_verification", "delivery_choice_group", "delivery_location_set",
     * "delivery_method", "delivery_profile", "delivery_quote", "delivery_rate",
     * "delivery_rate_callback", "delivery_revocation", "delivery_selection", "delivery_zone",
     * "demo_session", "device", "discount", "dispute", "email_change_request",
     * "environment_grant", "file", "flint_wallet", "flint_wallet_card", "fraud_warning",
     * "fulfillment", "fulfillment_event", "fulfillment_notification", "gift_card",
     * "gift_card_funding_disposition", "gift_card_load", "gift_card_notification",
     * "gift_card_redemption", "gift_card_transaction", "image", "inventory_adjustment",
     * "inventory_allocation_policy", "inventory_allocation_policy_revision", "inventory_count",
     * "inventory_item", "inventory_level", "inventory_movement", "inventory_receipt",
     * "inventory_reservation", "inventory_reservation_line", "inventory_transfer",
     * "inventory_transfer_line", "invoice", "invoice_delivery_attempt", "invoice_late_fee",
     * "invoice_line_item", "invoice_manual_payment", "invoice_payment_attempt",
     * "invoice_payment_term", "license_key", "license_key_activation", "license_key_pool",
     * "license_key_pool_key", "location", "merchant", "merchant_billing_balance",
     * "merchant_billing_entry", "merchant_billing_invoice", "merchant_signup", "modifier",
     * "modifier_group", "modifier_set", "order", "order_charge", "order_edit", "order_line_item",
     * "order_line_item_modifier", "order_payment_attempt", "package", "package_item",
     * "partner_app", "partner_app_credential", "partner_app_install", "payment_attempt",
     * "payment_intent", "payment_link", "payment_link_custom_field", "payment_link_line_item",
     * "payment_method", "payment_method_domain", "payment_review", "payment_split", "payout",
     * "payout_destination", "payout_settings", "platform_fee", "platform_fee_balance_transaction",
     * "platform_fee_payout", "price_list", "price_list_price", "product", "product_option",
     * "product_option_value", "product_variant", "promotion", "promotion_code",
     * "purchase_refund_allocation", "reader", "refund", "refund_allocation",
     * "refund_line_item_adjustment", "remembered_buyer", "report", "report_download", "return",
     * "return_activity", "return_disposition", "return_inspection", "return_inspection_line_item",
     * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
     * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
     * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
     * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
     * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item",
     * "tax_calculation_callback", "tax_connection", "tax_registration", "test_clock", "ticket",
     * "user", "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
     */
    "resource_type"?: "api_key"
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
        | "customer_tax_exemption"
        | "customer_verification"
        | "delivery_choice_group"
        | "delivery_location_set"
        | "delivery_method"
        | "delivery_profile"
        | "delivery_quote"
        | "delivery_rate"
        | "delivery_rate_callback"
        | "delivery_revocation"
        | "delivery_selection"
        | "delivery_zone"
        | "demo_session"
        | "device"
        | "discount"
        | "dispute"
        | "email_change_request"
        | "environment_grant"
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
        | "image"
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
        | "license_key"
        | "license_key_activation"
        | "license_key_pool"
        | "license_key_pool_key"
        | "location"
        | "merchant"
        | "merchant_billing_balance"
        | "merchant_billing_entry"
        | "merchant_billing_invoice"
        | "merchant_signup"
        | "modifier"
        | "modifier_group"
        | "modifier_set"
        | "order"
        | "order_charge"
        | "order_edit"
        | "order_line_item"
        | "order_line_item_modifier"
        | "order_payment_attempt"
        | "package"
        | "package_item"
        | "partner_app"
        | "partner_app_credential"
        | "partner_app_install"
        | "payment_attempt"
        | "payment_intent"
        | "payment_link"
        | "payment_link_custom_field"
        | "payment_link_line_item"
        | "payment_method"
        | "payment_method_domain"
        | "payment_review"
        | "payment_split"
        | "payout"
        | "payout_destination"
        | "payout_settings"
        | "platform_fee"
        | "platform_fee_balance_transaction"
        | "platform_fee_payout"
        | "price_list"
        | "price_list_price"
        | "product"
        | "product_option"
        | "product_option_value"
        | "product_variant"
        | "promotion"
        | "promotion_code"
        | "purchase_refund_allocation"
        | "reader"
        | "refund"
        | "refund_allocation"
        | "refund_line_item_adjustment"
        | "remembered_buyer"
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
        | "tax_calculation_callback"
        | "tax_connection"
        | "tax_registration"
        | "test_clock"
        | "ticket"
        | "user"
        | "webhook_delivery"
        | "webhook_endpoint"
        | "webhook_event"
        | "workload_identity"
        | (string & {});
    /**
     * Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode.
     * Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "sandbox_id"?: string;
    /**
     * Partner envelope source. Present only for partner events while the stored payload is
     * retained. The merchant and partner app install the event concerns. Environment fields are
     * present for installed-merchant events.
     */
    "source"?: WebhookEventSource;
    /**
     * Whether this is a synthetic event created to test an endpoint; independent of live or test
     * mode.
     */
    "test": boolean;
    /**
     * Unique identifier for this webhook event, prefixed `whev_`. Example:
     * "whev_01KEZF7C00362MS3HV970TRZGS".
     */
    "webhook_event_id": string;
});
/** A page of `WebhookEvent` objects. */
export type WebhookEventListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * WebhookEvent}. An event prepared for delivery to webhook endpoints.
     */
    "data": Array<WebhookEvent>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `WebhookEvent` data. */
export type WebhookEventResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An event prepared for
     * delivery to webhook endpoints.
     */
    "data": WebhookEvent;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * The merchant and partner app install the event concerns. Environment fields are present for
 * installed-merchant events.
 */
export type WebhookEventSource = ({
    /**
     * The grant authorizing delivery from this merchant environment. Example:
     * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
     */
    "environment_grant_id"?: string;
    /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Whether the installed merchant event came from live mode or a sandbox. Value enum: "test",
     * "live".
     */
    "mode"?: "test" | "live" | (string & {});
    /**
     * The install connecting the merchant to the partner app. Example:
     * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id": string;
    /**
     * The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "sandbox_id"?: string;
});
/** A webhook event type, with a description and the event sources where it is valid. */
export type WebhookEventType = {
    /** Concise semantics for the state transition or event occurrence. */
    "description": string;
    /**
     * Event source buckets where this event type is valid. [] enum: "merchant", "partner_app",
     * "installed_merchants". [] (Value): string. Value enum: "merchant", "partner_app",
     * "installed_merchants".
     */
    "event_sources": Array<"merchant" | "partner_app" | "installed_merchants" | (string & {})>;
    /**
     * Webhook event type string accepted by compatible endpoint enabled_events values and webhook
     * event filters. Value enum: "api_key.created", "api_key.revoked", "api_key.updated",
     * "balance.updated", "balance_transaction.created", "balance_transaction.updated",
     * "bundle.archived", "bundle.created", "bundle.updated", "category.created",
     * "category.deleted", "category.updated", "checkout_session.closed",
     * "checkout_session.created", "checkout_session.expired", "checkout_session.invalidated",
     * "checkout_session.paid", "checkout_session.partially_paid", "checkout_session.updated",
     * "credit_note.created", "credit_note.issued", "credit_note.updated", "credit_note.voided",
     * "credit_note_allocation.created", "credit_note_allocation.reversed",
     * "custom_domain.archived", "custom_domain.updated", "customer.created", "customer.deleted",
     * "customer.updated", "customer_deletion_request.completed",
     * "customer_deletion_request.created", "customer_deletion_request.failed",
     * "customer_deletion_request.processing", "customer_deletion_request.rejected",
     * "customer_email_preferences.updated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.updated",
     * "delivery_method.activated", "delivery_method.archived", "delivery_method.created",
     * "delivery_method.deactivated", "delivery_method.updated", "delivery_profile.archived",
     * "delivery_profile.created", "delivery_profile.updated", "delivery_rate_callback.activated",
     * "delivery_rate_callback.archived", "delivery_rate_callback.created",
     * "delivery_rate_callback.deactivated", "delivery_rate_callback.updated",
     * "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.archived",
     * "delivery_zone.created", "delivery_zone.updated", "dispute.created",
     * "dispute.inquiry_closed", "dispute.lost", "dispute.needs_response", "dispute.prevented",
     * "dispute.updated", "dispute.won", "environment_grant.created", "environment_grant.revoked",
     * "environment_grant.updated", "fraud_warning.created", "fraud_warning.updated",
     * "fulfillment.canceled", "fulfillment.completed", "fulfillment.created",
     * "fulfillment.failed", "fulfillment.updated", "fulfillment_event.created",
     * "gift_card.created", "gift_card.updated", "gift_card_load.created",
     * "gift_card_load.updated", "gift_card_notification.created",
     * "gift_card_notification.updated", "gift_card_redemption.created",
     * "gift_card_redemption.updated", "gift_card_transaction.created", "inventory_count.applied",
     * "inventory_count.updated", "inventory_level.shortage_detected", "inventory_level.updated",
     * "inventory_receipt.created", "inventory_reservation.action_required",
     * "inventory_reservation.at_risk", "inventory_reservation.closed",
     * "inventory_reservation.committed", "inventory_reservation.consumed",
     * "inventory_reservation.created", "inventory_reservation.hold_expired",
     * "inventory_reservation.released", "inventory_reservation.updated",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned", "inventory_transfer.updated",
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
     * "invoice_payment_attempt.succeeded", "license_key.created", "license_key.disabled",
     * "license_key.expired", "license_key.updated", "license_key_activation.created",
     * "license_key_activation.released", "license_key_pool.archived", "license_key_pool.created",
     * "license_key_pool.low_stock", "license_key_pool.out_of_stock", "license_key_pool.updated",
     * "merchant.readiness_updated", "merchant.updated", "merchant_billing_balance.updated",
     * "merchant_billing_invoice.issued", "merchant_billing_invoice.updated",
     * "modifier_group.archived", "modifier_group.created", "modifier_group.updated",
     * "modifier_set.archived", "modifier_set.created", "modifier_set.updated", "order.closed",
     * "order.created", "order.inventory_exception_created", "order.inventory_exception_resolved",
     * "order.paid", "order.partially_paid", "order.partially_refunded", "order.refunded",
     * "order.updated", "order_edit.canceled", "order_edit.completed", "order_edit.created",
     * "order_edit.updated", "package.created", "package.updated", "partner_app.platform_approved",
     * "partner_app.platform_limited", "partner_app.platform_rejected", "partner_app.updated",
     * "partner_app_install.created", "partner_app_install.permissions_updated",
     * "partner_app_install.revoked", "partner_app_install.updated",
     * "payment_intent.authorization_expiring", "payment_intent.canceled",
     * "payment_intent.created", "payment_intent.expired",
     * "payment_intent.fulfillment_hold_updated", "payment_intent.payment_failed",
     * "payment_intent.processing", "payment_intent.requires_action",
     * "payment_intent.requires_capture", "payment_intent.succeeded", "payment_intent.updated",
     * "payment_link.created", "payment_link.updated", "payment_method.activated",
     * "payment_method.archived", "payment_method.failed", "payment_method.updated",
     * "payment_review.closed", "payment_review.opened", "payment_review.reopened",
     * "payment_split.canceled", "payment_split.created", "payment_split.failed",
     * "payment_split.succeeded", "payment_split.updated", "payout.canceled", "payout.created",
     * "payout.failed", "payout.reversed", "payout.succeeded", "payout.updated",
     * "payout_destination.archived", "payout_destination.created", "payout_destination.disabled",
     * "payout_destination.updated", "payout_settings.updated", "platform_fee.canceled",
     * "platform_fee.created", "platform_fee.succeeded", "platform_fee.updated",
     * "platform_fee_payout.created", "platform_fee_payout.failed",
     * "platform_fee_payout.succeeded", "price_list.archived", "price_list.created",
     * "price_list.updated", "product.archived", "product.created", "product.updated",
     * "product_variant.archived", "product_variant.created", "product_variant.updated",
     * "promotion.archived", "promotion.created", "promotion.updated", "promotion_code.archived",
     * "promotion_code.created", "promotion_code.updated", "reader.archived", "reader.created",
     * "reader.updated", "refund.created", "refund.failed", "refund.partially_succeeded",
     * "refund.succeeded", "refund.updated", "report.failed", "report.succeeded",
     * "return.canceled", "return.completed", "return.created", "return.decision_recorded",
     * "return.reopened", "return.updated", "return_disposition.created",
     * "return_disposition.updated", "return_inspection.acceptance_decided",
     * "return_inspection.created", "return_inspection.superseded", "return_receipt.created",
     * "return_receipt.superseded", "return_receipt.verified", "return_resolution.created",
     * "return_resolution.updated", "shipment.created", "shipment.updated",
     * "subscription.activated", "subscription.canceled", "subscription.cancellation_scheduled",
     * "subscription.created", "subscription.cycle_skipped",
     * "subscription.delivery_action_required", "subscription.delivery_pause_upcoming",
     * "subscription.delivery_updated", "subscription.dunning_exhausted",
     * "subscription.end_upcoming", "subscription.past_due", "subscription.paused",
     * "subscription.payment_succeeded", "subscription.plan_change_canceled",
     * "subscription.plan_change_scheduled", "subscription.plan_changed",
     * "subscription.reactivated", "subscription.renewal_upcoming", "subscription.resumed",
     * "subscription.trial_ending", "subscription.updated",
     * "subscription_delivery_migration.completed", "subscription_payment_retry.created",
     * "subscription_payment_retry.failed", "subscription_payment_retry.succeeded",
     * "tax_calculation_callback.activated", "tax_calculation_callback.archived",
     * "tax_calculation_callback.created", "tax_calculation_callback.deactivated",
     * "tax_calculation_callback.updated", "tax_connection.updated", "test_clock.advancing",
     * "test_clock.archived", "test_clock.created", "test_clock.failed", "test_clock.ready",
     * "ticket.checked_in", "ticket.created", "ticket.updated", "ticket.voided".
     */
    "event_type": "api_key.created"
        | "api_key.revoked"
        | "api_key.updated"
        | "balance.updated"
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
        | "checkout_session.updated"
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
        | "customer_email_preferences.updated"
        | "delivery_location_set.archived"
        | "delivery_location_set.created"
        | "delivery_location_set.updated"
        | "delivery_method.activated"
        | "delivery_method.archived"
        | "delivery_method.created"
        | "delivery_method.deactivated"
        | "delivery_method.updated"
        | "delivery_profile.archived"
        | "delivery_profile.created"
        | "delivery_profile.updated"
        | "delivery_rate_callback.activated"
        | "delivery_rate_callback.archived"
        | "delivery_rate_callback.created"
        | "delivery_rate_callback.deactivated"
        | "delivery_rate_callback.updated"
        | "delivery_revocation.created"
        | "delivery_selection.committed"
        | "delivery_zone.archived"
        | "delivery_zone.created"
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
        | "environment_grant.updated"
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
        | "inventory_count.updated"
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
        | "inventory_reservation.updated"
        | "inventory_transfer.closed"
        | "inventory_transfer.departed"
        | "inventory_transfer.lost"
        | "inventory_transfer.received"
        | "inventory_transfer.returned"
        | "inventory_transfer.updated"
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
        | "invoice_payment_attempt.succeeded"
        | "license_key.created"
        | "license_key.disabled"
        | "license_key.expired"
        | "license_key.updated"
        | "license_key_activation.created"
        | "license_key_activation.released"
        | "license_key_pool.archived"
        | "license_key_pool.created"
        | "license_key_pool.low_stock"
        | "license_key_pool.out_of_stock"
        | "license_key_pool.updated"
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
        | "order_edit.canceled"
        | "order_edit.completed"
        | "order_edit.created"
        | "order_edit.updated"
        | "package.created"
        | "package.updated"
        | "partner_app.platform_approved"
        | "partner_app.platform_limited"
        | "partner_app.platform_rejected"
        | "partner_app.updated"
        | "partner_app_install.created"
        | "partner_app_install.permissions_updated"
        | "partner_app_install.revoked"
        | "partner_app_install.updated"
        | "payment_intent.authorization_expiring"
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
        | "payment_method.updated"
        | "payment_review.closed"
        | "payment_review.opened"
        | "payment_review.reopened"
        | "payment_split.canceled"
        | "payment_split.created"
        | "payment_split.failed"
        | "payment_split.succeeded"
        | "payment_split.updated"
        | "payout.canceled"
        | "payout.created"
        | "payout.failed"
        | "payout.reversed"
        | "payout.succeeded"
        | "payout.updated"
        | "payout_destination.archived"
        | "payout_destination.created"
        | "payout_destination.disabled"
        | "payout_destination.updated"
        | "payout_settings.updated"
        | "platform_fee.canceled"
        | "platform_fee.created"
        | "platform_fee.succeeded"
        | "platform_fee.updated"
        | "platform_fee_payout.created"
        | "platform_fee_payout.failed"
        | "platform_fee_payout.succeeded"
        | "price_list.archived"
        | "price_list.created"
        | "price_list.updated"
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
        | "reader.archived"
        | "reader.created"
        | "reader.updated"
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
        | "subscription.end_upcoming"
        | "subscription.past_due"
        | "subscription.paused"
        | "subscription.payment_succeeded"
        | "subscription.plan_change_canceled"
        | "subscription.plan_change_scheduled"
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
        | "tax_calculation_callback.activated"
        | "tax_calculation_callback.archived"
        | "tax_calculation_callback.created"
        | "tax_calculation_callback.deactivated"
        | "tax_calculation_callback.updated"
        | "tax_connection.updated"
        | "test_clock.advancing"
        | "test_clock.archived"
        | "test_clock.created"
        | "test_clock.failed"
        | "test_clock.ready"
        | "ticket.checked_in"
        | "ticket.created"
        | "ticket.updated"
        | "ticket.voided"
        | (string & {});
    /**
     * Whether the event records a resource snapshot or asks you to fetch current state. Value
     * enum: "snapshot", "notification".
     */
    "kind": "snapshot" | "notification" | (string & {});
    /**
     * Previous names of this type, retained permanently for reading stored events. Inputs accept
     * only the current event_type. Empty when the type has never been renamed. [] (Value): string.
     */
    "previous_names": Array<string>;
    /**
     * Public resource type: the resource's ID field name without `_id`. Value enum: "api_key",
     * "api_request_log", "balance", "balance_transaction", "bundle", "bundle_component",
     * "category", "checkout_session", "checkout_session_customer_verification", "credit_note",
     * "credit_note_allocation", "custom_domain", "customer", "customer_address",
     * "customer_deletion_request", "customer_email_preferences", "customer_session",
     * "customer_tax_exemption", "customer_verification", "delivery_choice_group",
     * "delivery_location_set", "delivery_method", "delivery_profile", "delivery_quote",
     * "delivery_rate", "delivery_rate_callback", "delivery_revocation", "delivery_selection",
     * "delivery_zone", "demo_session", "device", "discount", "dispute", "email_change_request",
     * "environment_grant", "file", "flint_wallet", "flint_wallet_card", "fraud_warning",
     * "fulfillment", "fulfillment_event", "fulfillment_notification", "gift_card",
     * "gift_card_funding_disposition", "gift_card_load", "gift_card_notification",
     * "gift_card_redemption", "gift_card_transaction", "image", "inventory_adjustment",
     * "inventory_allocation_policy", "inventory_allocation_policy_revision", "inventory_count",
     * "inventory_item", "inventory_level", "inventory_movement", "inventory_receipt",
     * "inventory_reservation", "inventory_reservation_line", "inventory_transfer",
     * "inventory_transfer_line", "invoice", "invoice_delivery_attempt", "invoice_late_fee",
     * "invoice_line_item", "invoice_manual_payment", "invoice_payment_attempt",
     * "invoice_payment_term", "license_key", "license_key_activation", "license_key_pool",
     * "license_key_pool_key", "location", "merchant", "merchant_billing_balance",
     * "merchant_billing_entry", "merchant_billing_invoice", "merchant_signup", "modifier",
     * "modifier_group", "modifier_set", "order", "order_charge", "order_edit", "order_line_item",
     * "order_line_item_modifier", "order_payment_attempt", "package", "package_item",
     * "partner_app", "partner_app_credential", "partner_app_install", "payment_attempt",
     * "payment_intent", "payment_link", "payment_link_custom_field", "payment_link_line_item",
     * "payment_method", "payment_method_domain", "payment_review", "payment_split", "payout",
     * "payout_destination", "payout_settings", "platform_fee", "platform_fee_balance_transaction",
     * "platform_fee_payout", "price_list", "price_list_price", "product", "product_option",
     * "product_option_value", "product_variant", "promotion", "promotion_code",
     * "purchase_refund_allocation", "reader", "refund", "refund_allocation",
     * "refund_line_item_adjustment", "remembered_buyer", "report", "report_download", "return",
     * "return_activity", "return_disposition", "return_inspection", "return_inspection_line_item",
     * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
     * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
     * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
     * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
     * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item",
     * "tax_calculation_callback", "tax_connection", "tax_registration", "test_clock", "ticket",
     * "user", "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
     */
    "resource_type": "api_key"
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
        | "customer_tax_exemption"
        | "customer_verification"
        | "delivery_choice_group"
        | "delivery_location_set"
        | "delivery_method"
        | "delivery_profile"
        | "delivery_quote"
        | "delivery_rate"
        | "delivery_rate_callback"
        | "delivery_revocation"
        | "delivery_selection"
        | "delivery_zone"
        | "demo_session"
        | "device"
        | "discount"
        | "dispute"
        | "email_change_request"
        | "environment_grant"
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
        | "image"
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
        | "license_key"
        | "license_key_activation"
        | "license_key_pool"
        | "license_key_pool_key"
        | "location"
        | "merchant"
        | "merchant_billing_balance"
        | "merchant_billing_entry"
        | "merchant_billing_invoice"
        | "merchant_signup"
        | "modifier"
        | "modifier_group"
        | "modifier_set"
        | "order"
        | "order_charge"
        | "order_edit"
        | "order_line_item"
        | "order_line_item_modifier"
        | "order_payment_attempt"
        | "package"
        | "package_item"
        | "partner_app"
        | "partner_app_credential"
        | "partner_app_install"
        | "payment_attempt"
        | "payment_intent"
        | "payment_link"
        | "payment_link_custom_field"
        | "payment_link_line_item"
        | "payment_method"
        | "payment_method_domain"
        | "payment_review"
        | "payment_split"
        | "payout"
        | "payout_destination"
        | "payout_settings"
        | "platform_fee"
        | "platform_fee_balance_transaction"
        | "platform_fee_payout"
        | "price_list"
        | "price_list_price"
        | "product"
        | "product_option"
        | "product_option_value"
        | "product_variant"
        | "promotion"
        | "promotion_code"
        | "purchase_refund_allocation"
        | "reader"
        | "refund"
        | "refund_allocation"
        | "refund_line_item_adjustment"
        | "remembered_buyer"
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
        | "tax_calculation_callback"
        | "tax_connection"
        | "tax_registration"
        | "test_clock"
        | "ticket"
        | "user"
        | "webhook_delivery"
        | "webhook_endpoint"
        | "webhook_event"
        | "workload_identity"
        | (string & {});
};
/** A page of `WebhookEventType` objects. */
export type WebhookEventTypeListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * WebhookEventType}. A webhook event type, with a description and the event sources where it
     * is valid.
     */
    "data": Array<WebhookEventType>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type WebhookEventTypesListParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 100. minimum: 1. maximum:
     * 100. Default: 100.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type WebhookEventsGetParams = DisputesAcceptParams;
export type WebhookEventsListParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter to events that have a delivery for this webhook endpoint. pattern:
     * ^whep_[0-9A-HJKMNP-TV-Z]{26}$. Example: "whep_01KEZF7C006FXYTAJRZCGCBJTN".
     */
    "webhook_endpoint_id"?: InputValue<string>;
    /**
     * Filter to events that have a delivery with this status. Values are trimmed and deduplicated
     * in first-seen order; empty or unknown entries are rejected. Values within this filter are
     * ORed; separate filters are ANDed. [] enum: "pending", "delivered", "failed", "suppressed".
     * Value enum: "pending", "delivered", "failed", "suppressed". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "pending", "delivered", "failed", "suppressed". anyOf[1][]
     * (Value): string. Value enum: "pending", "delivered", "failed", "suppressed". anyOf[2]
     * (Value): string. Value enum: "pending", "delivered", "failed", "suppressed".
     */
    "delivery_status"?: InputValue<("pending" | "delivered" | "failed" | "suppressed")
        | readonly ("pending" | "delivered" | "failed" | "suppressed")[]>;
    /**
     * Filter by webhook event source. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "merchant", "partner_app", "installed_merchants". Value enum:
     * "merchant", "partner_app", "installed_merchants". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "merchant", "partner_app", "installed_merchants". anyOf[1][] (Value):
     * string. Value enum: "merchant", "partner_app", "installed_merchants". anyOf[2] (Value):
     * string. Value enum: "merchant", "partner_app", "installed_merchants".
     */
    "event_source"?: InputValue<("merchant" | "partner_app" | "installed_merchants")
        | readonly ("merchant" | "partner_app" | "installed_merchants")[]>;
    /**
     * Filter by partner app ID for partner-source webhook events. pattern:
     * ^papp_[0-9A-HJKMNP-TV-Z]{26}$. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: InputValue<string>;
    /**
     * Filter by webhook event type. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "api_key.created", "api_key.revoked", "api_key.updated", "balance.updated",
     * "balance_transaction.created", "balance_transaction.updated", "bundle.archived",
     * "bundle.created", "bundle.updated", "category.created", "category.deleted",
     * "category.updated", "checkout_session.closed", "checkout_session.created",
     * "checkout_session.expired", "checkout_session.invalidated", "checkout_session.paid",
     * "checkout_session.partially_paid", "checkout_session.updated", "credit_note.created",
     * "credit_note.issued", "credit_note.updated", "credit_note.voided",
     * "credit_note_allocation.created", "credit_note_allocation.reversed",
     * "custom_domain.archived", "custom_domain.updated", "customer.created", "customer.deleted",
     * "customer.updated", "customer_deletion_request.completed",
     * "customer_deletion_request.created", "customer_deletion_request.failed",
     * "customer_deletion_request.processing", "customer_deletion_request.rejected",
     * "customer_email_preferences.updated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.updated",
     * "delivery_method.activated", "delivery_method.archived", "delivery_method.created",
     * "delivery_method.deactivated", "delivery_method.updated", "delivery_profile.archived",
     * "delivery_profile.created", "delivery_profile.updated", "delivery_rate_callback.activated",
     * "delivery_rate_callback.archived", "delivery_rate_callback.created",
     * "delivery_rate_callback.deactivated", "delivery_rate_callback.updated",
     * "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.archived",
     * "delivery_zone.created", "delivery_zone.updated", "dispute.created",
     * "dispute.inquiry_closed", "dispute.lost", "dispute.needs_response", "dispute.prevented",
     * "dispute.updated", "dispute.won", "environment_grant.created", "environment_grant.revoked",
     * "environment_grant.updated", "fraud_warning.created", "fraud_warning.updated",
     * "fulfillment.canceled", "fulfillment.completed", "fulfillment.created",
     * "fulfillment.failed", "fulfillment.updated", "fulfillment_event.created",
     * "gift_card.created", "gift_card.updated", "gift_card_load.created",
     * "gift_card_load.updated", "gift_card_notification.created",
     * "gift_card_notification.updated", "gift_card_redemption.created",
     * "gift_card_redemption.updated", "gift_card_transaction.created", "inventory_count.applied",
     * "inventory_count.updated", "inventory_level.shortage_detected", "inventory_level.updated",
     * "inventory_receipt.created", "inventory_reservation.action_required",
     * "inventory_reservation.at_risk", "inventory_reservation.closed",
     * "inventory_reservation.committed", "inventory_reservation.consumed",
     * "inventory_reservation.created", "inventory_reservation.hold_expired",
     * "inventory_reservation.released", "inventory_reservation.updated",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned", "inventory_transfer.updated",
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
     * "invoice_payment_attempt.succeeded", "license_key.created", "license_key.disabled",
     * "license_key.expired", "license_key.updated", "license_key_activation.created",
     * "license_key_activation.released", "license_key_pool.archived", "license_key_pool.created",
     * "license_key_pool.low_stock", "license_key_pool.out_of_stock", "license_key_pool.updated",
     * "merchant.readiness_updated", "merchant.updated", "merchant_billing_balance.updated",
     * "merchant_billing_invoice.issued", "merchant_billing_invoice.updated",
     * "modifier_group.archived", "modifier_group.created", "modifier_group.updated",
     * "modifier_set.archived", "modifier_set.created", "modifier_set.updated", "order.closed",
     * "order.created", "order.inventory_exception_created", "order.inventory_exception_resolved",
     * "order.paid", "order.partially_paid", "order.partially_refunded", "order.refunded",
     * "order.updated", "order_edit.canceled", "order_edit.completed", "order_edit.created",
     * "order_edit.updated", "package.created", "package.updated", "partner_app.platform_approved",
     * "partner_app.platform_limited", "partner_app.platform_rejected", "partner_app.updated",
     * "partner_app_install.created", "partner_app_install.permissions_updated",
     * "partner_app_install.revoked", "partner_app_install.updated",
     * "payment_intent.authorization_expiring", "payment_intent.canceled",
     * "payment_intent.created", "payment_intent.expired",
     * "payment_intent.fulfillment_hold_updated", "payment_intent.payment_failed",
     * "payment_intent.processing", "payment_intent.requires_action",
     * "payment_intent.requires_capture", "payment_intent.succeeded", "payment_intent.updated",
     * "payment_link.created", "payment_link.updated", "payment_method.activated",
     * "payment_method.archived", "payment_method.failed", "payment_method.updated",
     * "payment_review.closed", "payment_review.opened", "payment_review.reopened",
     * "payment_split.canceled", "payment_split.created", "payment_split.failed",
     * "payment_split.succeeded", "payment_split.updated", "payout.canceled", "payout.created",
     * "payout.failed", "payout.reversed", "payout.succeeded", "payout.updated",
     * "payout_destination.archived", "payout_destination.created", "payout_destination.disabled",
     * "payout_destination.updated", "payout_settings.updated", "platform_fee.canceled",
     * "platform_fee.created", "platform_fee.succeeded", "platform_fee.updated",
     * "platform_fee_payout.created", "platform_fee_payout.failed",
     * "platform_fee_payout.succeeded", "price_list.archived", "price_list.created",
     * "price_list.updated", "product.archived", "product.created", "product.updated",
     * "product_variant.archived", "product_variant.created", "product_variant.updated",
     * "promotion.archived", "promotion.created", "promotion.updated", "promotion_code.archived",
     * "promotion_code.created", "promotion_code.updated", "reader.archived", "reader.created",
     * "reader.updated", "refund.created", "refund.failed", "refund.partially_succeeded",
     * "refund.succeeded", "refund.updated", "report.failed", "report.succeeded",
     * "return.canceled", "return.completed", "return.created", "return.decision_recorded",
     * "return.reopened", "return.updated", "return_disposition.created",
     * "return_disposition.updated", "return_inspection.acceptance_decided",
     * "return_inspection.created", "return_inspection.superseded", "return_receipt.created",
     * "return_receipt.superseded", "return_receipt.verified", "return_resolution.created",
     * "return_resolution.updated", "shipment.created", "shipment.updated",
     * "subscription.activated", "subscription.canceled", "subscription.cancellation_scheduled",
     * "subscription.created", "subscription.cycle_skipped",
     * "subscription.delivery_action_required", "subscription.delivery_pause_upcoming",
     * "subscription.delivery_updated", "subscription.dunning_exhausted",
     * "subscription.end_upcoming", "subscription.past_due", "subscription.paused",
     * "subscription.payment_succeeded", "subscription.plan_change_canceled",
     * "subscription.plan_change_scheduled", "subscription.plan_changed",
     * "subscription.reactivated", "subscription.renewal_upcoming", "subscription.resumed",
     * "subscription.trial_ending", "subscription.updated",
     * "subscription_delivery_migration.completed", "subscription_payment_retry.created",
     * "subscription_payment_retry.failed", "subscription_payment_retry.succeeded",
     * "tax_calculation_callback.activated", "tax_calculation_callback.archived",
     * "tax_calculation_callback.created", "tax_calculation_callback.deactivated",
     * "tax_calculation_callback.updated", "tax_connection.updated", "test_clock.advancing",
     * "test_clock.archived", "test_clock.created", "test_clock.failed", "test_clock.ready",
     * "ticket.checked_in", "ticket.created", "ticket.updated", "ticket.voided". Value enum:
     * "api_key.created", "api_key.revoked", "api_key.updated", "balance.updated",
     * "balance_transaction.created", "balance_transaction.updated", "bundle.archived",
     * "bundle.created", "bundle.updated", "category.created", "category.deleted",
     * "category.updated", "checkout_session.closed", "checkout_session.created",
     * "checkout_session.expired", "checkout_session.invalidated", "checkout_session.paid",
     * "checkout_session.partially_paid", "checkout_session.updated", "credit_note.created",
     * "credit_note.issued", "credit_note.updated", "credit_note.voided",
     * "credit_note_allocation.created", "credit_note_allocation.reversed",
     * "custom_domain.archived", "custom_domain.updated", "customer.created", "customer.deleted",
     * "customer.updated", "customer_deletion_request.completed",
     * "customer_deletion_request.created", "customer_deletion_request.failed",
     * "customer_deletion_request.processing", "customer_deletion_request.rejected",
     * "customer_email_preferences.updated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.updated",
     * "delivery_method.activated", "delivery_method.archived", "delivery_method.created",
     * "delivery_method.deactivated", "delivery_method.updated", "delivery_profile.archived",
     * "delivery_profile.created", "delivery_profile.updated", "delivery_rate_callback.activated",
     * "delivery_rate_callback.archived", "delivery_rate_callback.created",
     * "delivery_rate_callback.deactivated", "delivery_rate_callback.updated",
     * "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.archived",
     * "delivery_zone.created", "delivery_zone.updated", "dispute.created",
     * "dispute.inquiry_closed", "dispute.lost", "dispute.needs_response", "dispute.prevented",
     * "dispute.updated", "dispute.won", "environment_grant.created", "environment_grant.revoked",
     * "environment_grant.updated", "fraud_warning.created", "fraud_warning.updated",
     * "fulfillment.canceled", "fulfillment.completed", "fulfillment.created",
     * "fulfillment.failed", "fulfillment.updated", "fulfillment_event.created",
     * "gift_card.created", "gift_card.updated", "gift_card_load.created",
     * "gift_card_load.updated", "gift_card_notification.created",
     * "gift_card_notification.updated", "gift_card_redemption.created",
     * "gift_card_redemption.updated", "gift_card_transaction.created", "inventory_count.applied",
     * "inventory_count.updated", "inventory_level.shortage_detected", "inventory_level.updated",
     * "inventory_receipt.created", "inventory_reservation.action_required",
     * "inventory_reservation.at_risk", "inventory_reservation.closed",
     * "inventory_reservation.committed", "inventory_reservation.consumed",
     * "inventory_reservation.created", "inventory_reservation.hold_expired",
     * "inventory_reservation.released", "inventory_reservation.updated",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned", "inventory_transfer.updated",
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
     * "invoice_payment_attempt.succeeded", "license_key.created", "license_key.disabled",
     * "license_key.expired", "license_key.updated", "license_key_activation.created",
     * "license_key_activation.released", "license_key_pool.archived", "license_key_pool.created",
     * "license_key_pool.low_stock", "license_key_pool.out_of_stock", "license_key_pool.updated",
     * "merchant.readiness_updated", "merchant.updated", "merchant_billing_balance.updated",
     * "merchant_billing_invoice.issued", "merchant_billing_invoice.updated",
     * "modifier_group.archived", "modifier_group.created", "modifier_group.updated",
     * "modifier_set.archived", "modifier_set.created", "modifier_set.updated", "order.closed",
     * "order.created", "order.inventory_exception_created", "order.inventory_exception_resolved",
     * "order.paid", "order.partially_paid", "order.partially_refunded", "order.refunded",
     * "order.updated", "order_edit.canceled", "order_edit.completed", "order_edit.created",
     * "order_edit.updated", "package.created", "package.updated", "partner_app.platform_approved",
     * "partner_app.platform_limited", "partner_app.platform_rejected", "partner_app.updated",
     * "partner_app_install.created", "partner_app_install.permissions_updated",
     * "partner_app_install.revoked", "partner_app_install.updated",
     * "payment_intent.authorization_expiring", "payment_intent.canceled",
     * "payment_intent.created", "payment_intent.expired",
     * "payment_intent.fulfillment_hold_updated", "payment_intent.payment_failed",
     * "payment_intent.processing", "payment_intent.requires_action",
     * "payment_intent.requires_capture", "payment_intent.succeeded", "payment_intent.updated",
     * "payment_link.created", "payment_link.updated", "payment_method.activated",
     * "payment_method.archived", "payment_method.failed", "payment_method.updated",
     * "payment_review.closed", "payment_review.opened", "payment_review.reopened",
     * "payment_split.canceled", "payment_split.created", "payment_split.failed",
     * "payment_split.succeeded", "payment_split.updated", "payout.canceled", "payout.created",
     * "payout.failed", "payout.reversed", "payout.succeeded", "payout.updated",
     * "payout_destination.archived", "payout_destination.created", "payout_destination.disabled",
     * "payout_destination.updated", "payout_settings.updated", "platform_fee.canceled",
     * "platform_fee.created", "platform_fee.succeeded", "platform_fee.updated",
     * "platform_fee_payout.created", "platform_fee_payout.failed",
     * "platform_fee_payout.succeeded", "price_list.archived", "price_list.created",
     * "price_list.updated", "product.archived", "product.created", "product.updated",
     * "product_variant.archived", "product_variant.created", "product_variant.updated",
     * "promotion.archived", "promotion.created", "promotion.updated", "promotion_code.archived",
     * "promotion_code.created", "promotion_code.updated", "reader.archived", "reader.created",
     * "reader.updated", "refund.created", "refund.failed", "refund.partially_succeeded",
     * "refund.succeeded", "refund.updated", "report.failed", "report.succeeded",
     * "return.canceled", "return.completed", "return.created", "return.decision_recorded",
     * "return.reopened", "return.updated", "return_disposition.created",
     * "return_disposition.updated", "return_inspection.acceptance_decided",
     * "return_inspection.created", "return_inspection.superseded", "return_receipt.created",
     * "return_receipt.superseded", "return_receipt.verified", "return_resolution.created",
     * "return_resolution.updated", "shipment.created", "shipment.updated",
     * "subscription.activated", "subscription.canceled", "subscription.cancellation_scheduled",
     * "subscription.created", "subscription.cycle_skipped",
     * "subscription.delivery_action_required", "subscription.delivery_pause_upcoming",
     * "subscription.delivery_updated", "subscription.dunning_exhausted",
     * "subscription.end_upcoming", "subscription.past_due", "subscription.paused",
     * "subscription.payment_succeeded", "subscription.plan_change_canceled",
     * "subscription.plan_change_scheduled", "subscription.plan_changed",
     * "subscription.reactivated", "subscription.renewal_upcoming", "subscription.resumed",
     * "subscription.trial_ending", "subscription.updated",
     * "subscription_delivery_migration.completed", "subscription_payment_retry.created",
     * "subscription_payment_retry.failed", "subscription_payment_retry.succeeded",
     * "tax_calculation_callback.activated", "tax_calculation_callback.archived",
     * "tax_calculation_callback.created", "tax_calculation_callback.deactivated",
     * "tax_calculation_callback.updated", "tax_connection.updated", "test_clock.advancing",
     * "test_clock.archived", "test_clock.created", "test_clock.failed", "test_clock.ready",
     * "ticket.checked_in", "ticket.created", "ticket.updated", "ticket.voided". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "api_key.created", "api_key.revoked",
     * "api_key.updated", "balance.updated", "balance_transaction.created",
     * "balance_transaction.updated", "bundle.archived", "bundle.created", "bundle.updated",
     * "category.created", "category.deleted", "category.updated", "checkout_session.closed",
     * "checkout_session.created", "checkout_session.expired", "checkout_session.invalidated",
     * "checkout_session.paid", "checkout_session.partially_paid", "checkout_session.updated",
     * "credit_note.created", "credit_note.issued", "credit_note.updated", "credit_note.voided",
     * "credit_note_allocation.created", "credit_note_allocation.reversed",
     * "custom_domain.archived", "custom_domain.updated", "customer.created", "customer.deleted",
     * "customer.updated", "customer_deletion_request.completed",
     * "customer_deletion_request.created", "customer_deletion_request.failed",
     * "customer_deletion_request.processing", "customer_deletion_request.rejected",
     * "customer_email_preferences.updated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.updated",
     * "delivery_method.activated", "delivery_method.archived", "delivery_method.created",
     * "delivery_method.deactivated", "delivery_method.updated", "delivery_profile.archived",
     * "delivery_profile.created", "delivery_profile.updated", "delivery_rate_callback.activated",
     * "delivery_rate_callback.archived", "delivery_rate_callback.created",
     * "delivery_rate_callback.deactivated", "delivery_rate_callback.updated",
     * "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.archived",
     * "delivery_zone.created", "delivery_zone.updated", "dispute.created",
     * "dispute.inquiry_closed", "dispute.lost", "dispute.needs_response", "dispute.prevented",
     * "dispute.updated", "dispute.won", "environment_grant.created", "environment_grant.revoked",
     * "environment_grant.updated", "fraud_warning.created", "fraud_warning.updated",
     * "fulfillment.canceled", "fulfillment.completed", "fulfillment.created",
     * "fulfillment.failed", "fulfillment.updated", "fulfillment_event.created",
     * "gift_card.created", "gift_card.updated", "gift_card_load.created",
     * "gift_card_load.updated", "gift_card_notification.created",
     * "gift_card_notification.updated", "gift_card_redemption.created",
     * "gift_card_redemption.updated", "gift_card_transaction.created", "inventory_count.applied",
     * "inventory_count.updated", "inventory_level.shortage_detected", "inventory_level.updated",
     * "inventory_receipt.created", "inventory_reservation.action_required",
     * "inventory_reservation.at_risk", "inventory_reservation.closed",
     * "inventory_reservation.committed", "inventory_reservation.consumed",
     * "inventory_reservation.created", "inventory_reservation.hold_expired",
     * "inventory_reservation.released", "inventory_reservation.updated",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned", "inventory_transfer.updated",
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
     * "invoice_payment_attempt.succeeded", "license_key.created", "license_key.disabled",
     * "license_key.expired", "license_key.updated", "license_key_activation.created",
     * "license_key_activation.released", "license_key_pool.archived", "license_key_pool.created",
     * "license_key_pool.low_stock", "license_key_pool.out_of_stock", "license_key_pool.updated",
     * "merchant.readiness_updated", "merchant.updated", "merchant_billing_balance.updated",
     * "merchant_billing_invoice.issued", "merchant_billing_invoice.updated",
     * "modifier_group.archived", "modifier_group.created", "modifier_group.updated",
     * "modifier_set.archived", "modifier_set.created", "modifier_set.updated", "order.closed",
     * "order.created", "order.inventory_exception_created", "order.inventory_exception_resolved",
     * "order.paid", "order.partially_paid", "order.partially_refunded", "order.refunded",
     * "order.updated", "order_edit.canceled", "order_edit.completed", "order_edit.created",
     * "order_edit.updated", "package.created", "package.updated", "partner_app.platform_approved",
     * "partner_app.platform_limited", "partner_app.platform_rejected", "partner_app.updated",
     * "partner_app_install.created", "partner_app_install.permissions_updated",
     * "partner_app_install.revoked", "partner_app_install.updated",
     * "payment_intent.authorization_expiring", "payment_intent.canceled",
     * "payment_intent.created", "payment_intent.expired",
     * "payment_intent.fulfillment_hold_updated", "payment_intent.payment_failed",
     * "payment_intent.processing", "payment_intent.requires_action",
     * "payment_intent.requires_capture", "payment_intent.succeeded", "payment_intent.updated",
     * "payment_link.created", "payment_link.updated", "payment_method.activated",
     * "payment_method.archived", "payment_method.failed", "payment_method.updated",
     * "payment_review.closed", "payment_review.opened", "payment_review.reopened",
     * "payment_split.canceled", "payment_split.created", "payment_split.failed",
     * "payment_split.succeeded", "payment_split.updated", "payout.canceled", "payout.created",
     * "payout.failed", "payout.reversed", "payout.succeeded", "payout.updated",
     * "payout_destination.archived", "payout_destination.created", "payout_destination.disabled",
     * "payout_destination.updated", "payout_settings.updated", "platform_fee.canceled",
     * "platform_fee.created", "platform_fee.succeeded", "platform_fee.updated",
     * "platform_fee_payout.created", "platform_fee_payout.failed",
     * "platform_fee_payout.succeeded", "price_list.archived", "price_list.created",
     * "price_list.updated", "product.archived", "product.created", "product.updated",
     * "product_variant.archived", "product_variant.created", "product_variant.updated",
     * "promotion.archived", "promotion.created", "promotion.updated", "promotion_code.archived",
     * "promotion_code.created", "promotion_code.updated", "reader.archived", "reader.created",
     * "reader.updated", "refund.created", "refund.failed", "refund.partially_succeeded",
     * "refund.succeeded", "refund.updated", "report.failed", "report.succeeded",
     * "return.canceled", "return.completed", "return.created", "return.decision_recorded",
     * "return.reopened", "return.updated", "return_disposition.created",
     * "return_disposition.updated", "return_inspection.acceptance_decided",
     * "return_inspection.created", "return_inspection.superseded", "return_receipt.created",
     * "return_receipt.superseded", "return_receipt.verified", "return_resolution.created",
     * "return_resolution.updated", "shipment.created", "shipment.updated",
     * "subscription.activated", "subscription.canceled", "subscription.cancellation_scheduled",
     * "subscription.created", "subscription.cycle_skipped",
     * "subscription.delivery_action_required", "subscription.delivery_pause_upcoming",
     * "subscription.delivery_updated", "subscription.dunning_exhausted",
     * "subscription.end_upcoming", "subscription.past_due", "subscription.paused",
     * "subscription.payment_succeeded", "subscription.plan_change_canceled",
     * "subscription.plan_change_scheduled", "subscription.plan_changed",
     * "subscription.reactivated", "subscription.renewal_upcoming", "subscription.resumed",
     * "subscription.trial_ending", "subscription.updated",
     * "subscription_delivery_migration.completed", "subscription_payment_retry.created",
     * "subscription_payment_retry.failed", "subscription_payment_retry.succeeded",
     * "tax_calculation_callback.activated", "tax_calculation_callback.archived",
     * "tax_calculation_callback.created", "tax_calculation_callback.deactivated",
     * "tax_calculation_callback.updated", "tax_connection.updated", "test_clock.advancing",
     * "test_clock.archived", "test_clock.created", "test_clock.failed", "test_clock.ready",
     * "ticket.checked_in", "ticket.created", "ticket.updated", "ticket.voided". anyOf[1][]
     * (Value): string. Value enum: "api_key.created", "api_key.revoked", "api_key.updated",
     * "balance.updated", "balance_transaction.created", "balance_transaction.updated",
     * "bundle.archived", "bundle.created", "bundle.updated", "category.created",
     * "category.deleted", "category.updated", "checkout_session.closed",
     * "checkout_session.created", "checkout_session.expired", "checkout_session.invalidated",
     * "checkout_session.paid", "checkout_session.partially_paid", "checkout_session.updated",
     * "credit_note.created", "credit_note.issued", "credit_note.updated", "credit_note.voided",
     * "credit_note_allocation.created", "credit_note_allocation.reversed",
     * "custom_domain.archived", "custom_domain.updated", "customer.created", "customer.deleted",
     * "customer.updated", "customer_deletion_request.completed",
     * "customer_deletion_request.created", "customer_deletion_request.failed",
     * "customer_deletion_request.processing", "customer_deletion_request.rejected",
     * "customer_email_preferences.updated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.updated",
     * "delivery_method.activated", "delivery_method.archived", "delivery_method.created",
     * "delivery_method.deactivated", "delivery_method.updated", "delivery_profile.archived",
     * "delivery_profile.created", "delivery_profile.updated", "delivery_rate_callback.activated",
     * "delivery_rate_callback.archived", "delivery_rate_callback.created",
     * "delivery_rate_callback.deactivated", "delivery_rate_callback.updated",
     * "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.archived",
     * "delivery_zone.created", "delivery_zone.updated", "dispute.created",
     * "dispute.inquiry_closed", "dispute.lost", "dispute.needs_response", "dispute.prevented",
     * "dispute.updated", "dispute.won", "environment_grant.created", "environment_grant.revoked",
     * "environment_grant.updated", "fraud_warning.created", "fraud_warning.updated",
     * "fulfillment.canceled", "fulfillment.completed", "fulfillment.created",
     * "fulfillment.failed", "fulfillment.updated", "fulfillment_event.created",
     * "gift_card.created", "gift_card.updated", "gift_card_load.created",
     * "gift_card_load.updated", "gift_card_notification.created",
     * "gift_card_notification.updated", "gift_card_redemption.created",
     * "gift_card_redemption.updated", "gift_card_transaction.created", "inventory_count.applied",
     * "inventory_count.updated", "inventory_level.shortage_detected", "inventory_level.updated",
     * "inventory_receipt.created", "inventory_reservation.action_required",
     * "inventory_reservation.at_risk", "inventory_reservation.closed",
     * "inventory_reservation.committed", "inventory_reservation.consumed",
     * "inventory_reservation.created", "inventory_reservation.hold_expired",
     * "inventory_reservation.released", "inventory_reservation.updated",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned", "inventory_transfer.updated",
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
     * "invoice_payment_attempt.succeeded", "license_key.created", "license_key.disabled",
     * "license_key.expired", "license_key.updated", "license_key_activation.created",
     * "license_key_activation.released", "license_key_pool.archived", "license_key_pool.created",
     * "license_key_pool.low_stock", "license_key_pool.out_of_stock", "license_key_pool.updated",
     * "merchant.readiness_updated", "merchant.updated", "merchant_billing_balance.updated",
     * "merchant_billing_invoice.issued", "merchant_billing_invoice.updated",
     * "modifier_group.archived", "modifier_group.created", "modifier_group.updated",
     * "modifier_set.archived", "modifier_set.created", "modifier_set.updated", "order.closed",
     * "order.created", "order.inventory_exception_created", "order.inventory_exception_resolved",
     * "order.paid", "order.partially_paid", "order.partially_refunded", "order.refunded",
     * "order.updated", "order_edit.canceled", "order_edit.completed", "order_edit.created",
     * "order_edit.updated", "package.created", "package.updated", "partner_app.platform_approved",
     * "partner_app.platform_limited", "partner_app.platform_rejected", "partner_app.updated",
     * "partner_app_install.created", "partner_app_install.permissions_updated",
     * "partner_app_install.revoked", "partner_app_install.updated",
     * "payment_intent.authorization_expiring", "payment_intent.canceled",
     * "payment_intent.created", "payment_intent.expired",
     * "payment_intent.fulfillment_hold_updated", "payment_intent.payment_failed",
     * "payment_intent.processing", "payment_intent.requires_action",
     * "payment_intent.requires_capture", "payment_intent.succeeded", "payment_intent.updated",
     * "payment_link.created", "payment_link.updated", "payment_method.activated",
     * "payment_method.archived", "payment_method.failed", "payment_method.updated",
     * "payment_review.closed", "payment_review.opened", "payment_review.reopened",
     * "payment_split.canceled", "payment_split.created", "payment_split.failed",
     * "payment_split.succeeded", "payment_split.updated", "payout.canceled", "payout.created",
     * "payout.failed", "payout.reversed", "payout.succeeded", "payout.updated",
     * "payout_destination.archived", "payout_destination.created", "payout_destination.disabled",
     * "payout_destination.updated", "payout_settings.updated", "platform_fee.canceled",
     * "platform_fee.created", "platform_fee.succeeded", "platform_fee.updated",
     * "platform_fee_payout.created", "platform_fee_payout.failed",
     * "platform_fee_payout.succeeded", "price_list.archived", "price_list.created",
     * "price_list.updated", "product.archived", "product.created", "product.updated",
     * "product_variant.archived", "product_variant.created", "product_variant.updated",
     * "promotion.archived", "promotion.created", "promotion.updated", "promotion_code.archived",
     * "promotion_code.created", "promotion_code.updated", "reader.archived", "reader.created",
     * "reader.updated", "refund.created", "refund.failed", "refund.partially_succeeded",
     * "refund.succeeded", "refund.updated", "report.failed", "report.succeeded",
     * "return.canceled", "return.completed", "return.created", "return.decision_recorded",
     * "return.reopened", "return.updated", "return_disposition.created",
     * "return_disposition.updated", "return_inspection.acceptance_decided",
     * "return_inspection.created", "return_inspection.superseded", "return_receipt.created",
     * "return_receipt.superseded", "return_receipt.verified", "return_resolution.created",
     * "return_resolution.updated", "shipment.created", "shipment.updated",
     * "subscription.activated", "subscription.canceled", "subscription.cancellation_scheduled",
     * "subscription.created", "subscription.cycle_skipped",
     * "subscription.delivery_action_required", "subscription.delivery_pause_upcoming",
     * "subscription.delivery_updated", "subscription.dunning_exhausted",
     * "subscription.end_upcoming", "subscription.past_due", "subscription.paused",
     * "subscription.payment_succeeded", "subscription.plan_change_canceled",
     * "subscription.plan_change_scheduled", "subscription.plan_changed",
     * "subscription.reactivated", "subscription.renewal_upcoming", "subscription.resumed",
     * "subscription.trial_ending", "subscription.updated",
     * "subscription_delivery_migration.completed", "subscription_payment_retry.created",
     * "subscription_payment_retry.failed", "subscription_payment_retry.succeeded",
     * "tax_calculation_callback.activated", "tax_calculation_callback.archived",
     * "tax_calculation_callback.created", "tax_calculation_callback.deactivated",
     * "tax_calculation_callback.updated", "tax_connection.updated", "test_clock.advancing",
     * "test_clock.archived", "test_clock.created", "test_clock.failed", "test_clock.ready",
     * "ticket.checked_in", "ticket.created", "ticket.updated", "ticket.voided". anyOf[2] (Value):
     * string. Value enum: "api_key.created", "api_key.revoked", "api_key.updated",
     * "balance.updated", "balance_transaction.created", "balance_transaction.updated",
     * "bundle.archived", "bundle.created", "bundle.updated", "category.created",
     * "category.deleted", "category.updated", "checkout_session.closed",
     * "checkout_session.created", "checkout_session.expired", "checkout_session.invalidated",
     * "checkout_session.paid", "checkout_session.partially_paid", "checkout_session.updated",
     * "credit_note.created", "credit_note.issued", "credit_note.updated", "credit_note.voided",
     * "credit_note_allocation.created", "credit_note_allocation.reversed",
     * "custom_domain.archived", "custom_domain.updated", "customer.created", "customer.deleted",
     * "customer.updated", "customer_deletion_request.completed",
     * "customer_deletion_request.created", "customer_deletion_request.failed",
     * "customer_deletion_request.processing", "customer_deletion_request.rejected",
     * "customer_email_preferences.updated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.updated",
     * "delivery_method.activated", "delivery_method.archived", "delivery_method.created",
     * "delivery_method.deactivated", "delivery_method.updated", "delivery_profile.archived",
     * "delivery_profile.created", "delivery_profile.updated", "delivery_rate_callback.activated",
     * "delivery_rate_callback.archived", "delivery_rate_callback.created",
     * "delivery_rate_callback.deactivated", "delivery_rate_callback.updated",
     * "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.archived",
     * "delivery_zone.created", "delivery_zone.updated", "dispute.created",
     * "dispute.inquiry_closed", "dispute.lost", "dispute.needs_response", "dispute.prevented",
     * "dispute.updated", "dispute.won", "environment_grant.created", "environment_grant.revoked",
     * "environment_grant.updated", "fraud_warning.created", "fraud_warning.updated",
     * "fulfillment.canceled", "fulfillment.completed", "fulfillment.created",
     * "fulfillment.failed", "fulfillment.updated", "fulfillment_event.created",
     * "gift_card.created", "gift_card.updated", "gift_card_load.created",
     * "gift_card_load.updated", "gift_card_notification.created",
     * "gift_card_notification.updated", "gift_card_redemption.created",
     * "gift_card_redemption.updated", "gift_card_transaction.created", "inventory_count.applied",
     * "inventory_count.updated", "inventory_level.shortage_detected", "inventory_level.updated",
     * "inventory_receipt.created", "inventory_reservation.action_required",
     * "inventory_reservation.at_risk", "inventory_reservation.closed",
     * "inventory_reservation.committed", "inventory_reservation.consumed",
     * "inventory_reservation.created", "inventory_reservation.hold_expired",
     * "inventory_reservation.released", "inventory_reservation.updated",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned", "inventory_transfer.updated",
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
     * "invoice_payment_attempt.succeeded", "license_key.created", "license_key.disabled",
     * "license_key.expired", "license_key.updated", "license_key_activation.created",
     * "license_key_activation.released", "license_key_pool.archived", "license_key_pool.created",
     * "license_key_pool.low_stock", "license_key_pool.out_of_stock", "license_key_pool.updated",
     * "merchant.readiness_updated", "merchant.updated", "merchant_billing_balance.updated",
     * "merchant_billing_invoice.issued", "merchant_billing_invoice.updated",
     * "modifier_group.archived", "modifier_group.created", "modifier_group.updated",
     * "modifier_set.archived", "modifier_set.created", "modifier_set.updated", "order.closed",
     * "order.created", "order.inventory_exception_created", "order.inventory_exception_resolved",
     * "order.paid", "order.partially_paid", "order.partially_refunded", "order.refunded",
     * "order.updated", "order_edit.canceled", "order_edit.completed", "order_edit.created",
     * "order_edit.updated", "package.created", "package.updated", "partner_app.platform_approved",
     * "partner_app.platform_limited", "partner_app.platform_rejected", "partner_app.updated",
     * "partner_app_install.created", "partner_app_install.permissions_updated",
     * "partner_app_install.revoked", "partner_app_install.updated",
     * "payment_intent.authorization_expiring", "payment_intent.canceled",
     * "payment_intent.created", "payment_intent.expired",
     * "payment_intent.fulfillment_hold_updated", "payment_intent.payment_failed",
     * "payment_intent.processing", "payment_intent.requires_action",
     * "payment_intent.requires_capture", "payment_intent.succeeded", "payment_intent.updated",
     * "payment_link.created", "payment_link.updated", "payment_method.activated",
     * "payment_method.archived", "payment_method.failed", "payment_method.updated",
     * "payment_review.closed", "payment_review.opened", "payment_review.reopened",
     * "payment_split.canceled", "payment_split.created", "payment_split.failed",
     * "payment_split.succeeded", "payment_split.updated", "payout.canceled", "payout.created",
     * "payout.failed", "payout.reversed", "payout.succeeded", "payout.updated",
     * "payout_destination.archived", "payout_destination.created", "payout_destination.disabled",
     * "payout_destination.updated", "payout_settings.updated", "platform_fee.canceled",
     * "platform_fee.created", "platform_fee.succeeded", "platform_fee.updated",
     * "platform_fee_payout.created", "platform_fee_payout.failed",
     * "platform_fee_payout.succeeded", "price_list.archived", "price_list.created",
     * "price_list.updated", "product.archived", "product.created", "product.updated",
     * "product_variant.archived", "product_variant.created", "product_variant.updated",
     * "promotion.archived", "promotion.created", "promotion.updated", "promotion_code.archived",
     * "promotion_code.created", "promotion_code.updated", "reader.archived", "reader.created",
     * "reader.updated", "refund.created", "refund.failed", "refund.partially_succeeded",
     * "refund.succeeded", "refund.updated", "report.failed", "report.succeeded",
     * "return.canceled", "return.completed", "return.created", "return.decision_recorded",
     * "return.reopened", "return.updated", "return_disposition.created",
     * "return_disposition.updated", "return_inspection.acceptance_decided",
     * "return_inspection.created", "return_inspection.superseded", "return_receipt.created",
     * "return_receipt.superseded", "return_receipt.verified", "return_resolution.created",
     * "return_resolution.updated", "shipment.created", "shipment.updated",
     * "subscription.activated", "subscription.canceled", "subscription.cancellation_scheduled",
     * "subscription.created", "subscription.cycle_skipped",
     * "subscription.delivery_action_required", "subscription.delivery_pause_upcoming",
     * "subscription.delivery_updated", "subscription.dunning_exhausted",
     * "subscription.end_upcoming", "subscription.past_due", "subscription.paused",
     * "subscription.payment_succeeded", "subscription.plan_change_canceled",
     * "subscription.plan_change_scheduled", "subscription.plan_changed",
     * "subscription.reactivated", "subscription.renewal_upcoming", "subscription.resumed",
     * "subscription.trial_ending", "subscription.updated",
     * "subscription_delivery_migration.completed", "subscription_payment_retry.created",
     * "subscription_payment_retry.failed", "subscription_payment_retry.succeeded",
     * "tax_calculation_callback.activated", "tax_calculation_callback.archived",
     * "tax_calculation_callback.created", "tax_calculation_callback.deactivated",
     * "tax_calculation_callback.updated", "tax_connection.updated", "test_clock.advancing",
     * "test_clock.archived", "test_clock.created", "test_clock.failed", "test_clock.ready",
     * "ticket.checked_in", "ticket.created", "ticket.updated", "ticket.voided".
     */
    "event_type"?: InputValue<("api_key.created"
        | "api_key.revoked"
        | "api_key.updated"
        | "balance.updated"
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
        | "checkout_session.updated"
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
        | "customer_email_preferences.updated"
        | "delivery_location_set.archived"
        | "delivery_location_set.created"
        | "delivery_location_set.updated"
        | "delivery_method.activated"
        | "delivery_method.archived"
        | "delivery_method.created"
        | "delivery_method.deactivated"
        | "delivery_method.updated"
        | "delivery_profile.archived"
        | "delivery_profile.created"
        | "delivery_profile.updated"
        | "delivery_rate_callback.activated"
        | "delivery_rate_callback.archived"
        | "delivery_rate_callback.created"
        | "delivery_rate_callback.deactivated"
        | "delivery_rate_callback.updated"
        | "delivery_revocation.created"
        | "delivery_selection.committed"
        | "delivery_zone.archived"
        | "delivery_zone.created"
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
        | "environment_grant.updated"
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
        | "inventory_count.updated"
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
        | "inventory_reservation.updated"
        | "inventory_transfer.closed"
        | "inventory_transfer.departed"
        | "inventory_transfer.lost"
        | "inventory_transfer.received"
        | "inventory_transfer.returned"
        | "inventory_transfer.updated"
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
        | "invoice_payment_attempt.succeeded"
        | "license_key.created"
        | "license_key.disabled"
        | "license_key.expired"
        | "license_key.updated"
        | "license_key_activation.created"
        | "license_key_activation.released"
        | "license_key_pool.archived"
        | "license_key_pool.created"
        | "license_key_pool.low_stock"
        | "license_key_pool.out_of_stock"
        | "license_key_pool.updated"
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
        | "order_edit.canceled"
        | "order_edit.completed"
        | "order_edit.created"
        | "order_edit.updated"
        | "package.created"
        | "package.updated"
        | "partner_app.platform_approved"
        | "partner_app.platform_limited"
        | "partner_app.platform_rejected"
        | "partner_app.updated"
        | "partner_app_install.created"
        | "partner_app_install.permissions_updated"
        | "partner_app_install.revoked"
        | "partner_app_install.updated"
        | "payment_intent.authorization_expiring"
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
        | "payment_method.updated"
        | "payment_review.closed"
        | "payment_review.opened"
        | "payment_review.reopened"
        | "payment_split.canceled"
        | "payment_split.created"
        | "payment_split.failed"
        | "payment_split.succeeded"
        | "payment_split.updated"
        | "payout.canceled"
        | "payout.created"
        | "payout.failed"
        | "payout.reversed"
        | "payout.succeeded"
        | "payout.updated"
        | "payout_destination.archived"
        | "payout_destination.created"
        | "payout_destination.disabled"
        | "payout_destination.updated"
        | "payout_settings.updated"
        | "platform_fee.canceled"
        | "platform_fee.created"
        | "platform_fee.succeeded"
        | "platform_fee.updated"
        | "platform_fee_payout.created"
        | "platform_fee_payout.failed"
        | "platform_fee_payout.succeeded"
        | "price_list.archived"
        | "price_list.created"
        | "price_list.updated"
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
        | "reader.archived"
        | "reader.created"
        | "reader.updated"
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
        | "subscription.end_upcoming"
        | "subscription.past_due"
        | "subscription.paused"
        | "subscription.payment_succeeded"
        | "subscription.plan_change_canceled"
        | "subscription.plan_change_scheduled"
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
        | "tax_calculation_callback.activated"
        | "tax_calculation_callback.archived"
        | "tax_calculation_callback.created"
        | "tax_calculation_callback.deactivated"
        | "tax_calculation_callback.updated"
        | "tax_connection.updated"
        | "test_clock.advancing"
        | "test_clock.archived"
        | "test_clock.created"
        | "test_clock.failed"
        | "test_clock.ready"
        | "ticket.checked_in"
        | "ticket.created"
        | "ticket.updated"
        | "ticket.voided")
        | readonly ("api_key.created"
        | "api_key.revoked"
        | "api_key.updated"
        | "balance.updated"
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
        | "checkout_session.updated"
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
        | "customer_email_preferences.updated"
        | "delivery_location_set.archived"
        | "delivery_location_set.created"
        | "delivery_location_set.updated"
        | "delivery_method.activated"
        | "delivery_method.archived"
        | "delivery_method.created"
        | "delivery_method.deactivated"
        | "delivery_method.updated"
        | "delivery_profile.archived"
        | "delivery_profile.created"
        | "delivery_profile.updated"
        | "delivery_rate_callback.activated"
        | "delivery_rate_callback.archived"
        | "delivery_rate_callback.created"
        | "delivery_rate_callback.deactivated"
        | "delivery_rate_callback.updated"
        | "delivery_revocation.created"
        | "delivery_selection.committed"
        | "delivery_zone.archived"
        | "delivery_zone.created"
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
        | "environment_grant.updated"
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
        | "inventory_count.updated"
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
        | "inventory_reservation.updated"
        | "inventory_transfer.closed"
        | "inventory_transfer.departed"
        | "inventory_transfer.lost"
        | "inventory_transfer.received"
        | "inventory_transfer.returned"
        | "inventory_transfer.updated"
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
        | "invoice_payment_attempt.succeeded"
        | "license_key.created"
        | "license_key.disabled"
        | "license_key.expired"
        | "license_key.updated"
        | "license_key_activation.created"
        | "license_key_activation.released"
        | "license_key_pool.archived"
        | "license_key_pool.created"
        | "license_key_pool.low_stock"
        | "license_key_pool.out_of_stock"
        | "license_key_pool.updated"
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
        | "order_edit.canceled"
        | "order_edit.completed"
        | "order_edit.created"
        | "order_edit.updated"
        | "package.created"
        | "package.updated"
        | "partner_app.platform_approved"
        | "partner_app.platform_limited"
        | "partner_app.platform_rejected"
        | "partner_app.updated"
        | "partner_app_install.created"
        | "partner_app_install.permissions_updated"
        | "partner_app_install.revoked"
        | "partner_app_install.updated"
        | "payment_intent.authorization_expiring"
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
        | "payment_method.updated"
        | "payment_review.closed"
        | "payment_review.opened"
        | "payment_review.reopened"
        | "payment_split.canceled"
        | "payment_split.created"
        | "payment_split.failed"
        | "payment_split.succeeded"
        | "payment_split.updated"
        | "payout.canceled"
        | "payout.created"
        | "payout.failed"
        | "payout.reversed"
        | "payout.succeeded"
        | "payout.updated"
        | "payout_destination.archived"
        | "payout_destination.created"
        | "payout_destination.disabled"
        | "payout_destination.updated"
        | "payout_settings.updated"
        | "platform_fee.canceled"
        | "platform_fee.created"
        | "platform_fee.succeeded"
        | "platform_fee.updated"
        | "platform_fee_payout.created"
        | "platform_fee_payout.failed"
        | "platform_fee_payout.succeeded"
        | "price_list.archived"
        | "price_list.created"
        | "price_list.updated"
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
        | "reader.archived"
        | "reader.created"
        | "reader.updated"
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
        | "subscription.end_upcoming"
        | "subscription.past_due"
        | "subscription.paused"
        | "subscription.payment_succeeded"
        | "subscription.plan_change_canceled"
        | "subscription.plan_change_scheduled"
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
        | "tax_calculation_callback.activated"
        | "tax_calculation_callback.archived"
        | "tax_calculation_callback.created"
        | "tax_calculation_callback.deactivated"
        | "tax_calculation_callback.updated"
        | "tax_connection.updated"
        | "test_clock.advancing"
        | "test_clock.archived"
        | "test_clock.created"
        | "test_clock.failed"
        | "test_clock.ready"
        | "ticket.checked_in"
        | "ticket.created"
        | "ticket.updated"
        | "ticket.voided")[]>;
    /**
     * Filter by affected resource type. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "api_key", "balance", "balance_transaction", "bundle", "category",
     * "checkout_session", "credit_note", "credit_note_allocation", "custom_domain", "customer",
     * "customer_deletion_request", "customer_email_preferences", "delivery_location_set",
     * "delivery_method", "delivery_profile", "delivery_rate_callback", "delivery_revocation",
     * "delivery_selection", "delivery_zone", "dispute", "environment_grant", "fraud_warning",
     * "fulfillment", "fulfillment_event", "gift_card", "gift_card_load", "gift_card_notification",
     * "gift_card_redemption", "gift_card_transaction", "inventory_count", "inventory_level",
     * "inventory_receipt", "inventory_reservation", "inventory_transfer", "invoice",
     * "invoice_delivery_attempt", "invoice_manual_payment", "invoice_payment_attempt",
     * "license_key", "license_key_activation", "license_key_pool", "merchant",
     * "merchant_billing_balance", "merchant_billing_invoice", "modifier_group", "modifier_set",
     * "order", "order_edit", "package", "partner_app", "partner_app_install", "payment_intent",
     * "payment_link", "payment_method", "payment_review", "payment_split", "payout",
     * "payout_destination", "payout_settings", "platform_fee", "platform_fee_payout",
     * "price_list", "product", "product_variant", "promotion", "promotion_code", "reader",
     * "refund", "report", "return", "return_disposition", "return_inspection", "return_receipt",
     * "return_resolution", "shipment", "subscription", "subscription_delivery_migration",
     * "subscription_payment_retry", "tax_calculation_callback", "tax_connection", "test_clock",
     * "ticket". Value enum: "api_key", "balance", "balance_transaction", "bundle", "category",
     * "checkout_session", "credit_note", "credit_note_allocation", "custom_domain", "customer",
     * "customer_deletion_request", "customer_email_preferences", "delivery_location_set",
     * "delivery_method", "delivery_profile", "delivery_rate_callback", "delivery_revocation",
     * "delivery_selection", "delivery_zone", "dispute", "environment_grant", "fraud_warning",
     * "fulfillment", "fulfillment_event", "gift_card", "gift_card_load", "gift_card_notification",
     * "gift_card_redemption", "gift_card_transaction", "inventory_count", "inventory_level",
     * "inventory_receipt", "inventory_reservation", "inventory_transfer", "invoice",
     * "invoice_delivery_attempt", "invoice_manual_payment", "invoice_payment_attempt",
     * "license_key", "license_key_activation", "license_key_pool", "merchant",
     * "merchant_billing_balance", "merchant_billing_invoice", "modifier_group", "modifier_set",
     * "order", "order_edit", "package", "partner_app", "partner_app_install", "payment_intent",
     * "payment_link", "payment_method", "payment_review", "payment_split", "payout",
     * "payout_destination", "payout_settings", "platform_fee", "platform_fee_payout",
     * "price_list", "product", "product_variant", "promotion", "promotion_code", "reader",
     * "refund", "report", "return", "return_disposition", "return_inspection", "return_receipt",
     * "return_resolution", "shipment", "subscription", "subscription_delivery_migration",
     * "subscription_payment_retry", "tax_calculation_callback", "tax_connection", "test_clock",
     * "ticket". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "api_key", "balance",
     * "balance_transaction", "bundle", "category", "checkout_session", "credit_note",
     * "credit_note_allocation", "custom_domain", "customer", "customer_deletion_request",
     * "customer_email_preferences", "delivery_location_set", "delivery_method",
     * "delivery_profile", "delivery_rate_callback", "delivery_revocation", "delivery_selection",
     * "delivery_zone", "dispute", "environment_grant", "fraud_warning", "fulfillment",
     * "fulfillment_event", "gift_card", "gift_card_load", "gift_card_notification",
     * "gift_card_redemption", "gift_card_transaction", "inventory_count", "inventory_level",
     * "inventory_receipt", "inventory_reservation", "inventory_transfer", "invoice",
     * "invoice_delivery_attempt", "invoice_manual_payment", "invoice_payment_attempt",
     * "license_key", "license_key_activation", "license_key_pool", "merchant",
     * "merchant_billing_balance", "merchant_billing_invoice", "modifier_group", "modifier_set",
     * "order", "order_edit", "package", "partner_app", "partner_app_install", "payment_intent",
     * "payment_link", "payment_method", "payment_review", "payment_split", "payout",
     * "payout_destination", "payout_settings", "platform_fee", "platform_fee_payout",
     * "price_list", "product", "product_variant", "promotion", "promotion_code", "reader",
     * "refund", "report", "return", "return_disposition", "return_inspection", "return_receipt",
     * "return_resolution", "shipment", "subscription", "subscription_delivery_migration",
     * "subscription_payment_retry", "tax_calculation_callback", "tax_connection", "test_clock",
     * "ticket". anyOf[1][] (Value): string. Value enum: "api_key", "balance",
     * "balance_transaction", "bundle", "category", "checkout_session", "credit_note",
     * "credit_note_allocation", "custom_domain", "customer", "customer_deletion_request",
     * "customer_email_preferences", "delivery_location_set", "delivery_method",
     * "delivery_profile", "delivery_rate_callback", "delivery_revocation", "delivery_selection",
     * "delivery_zone", "dispute", "environment_grant", "fraud_warning", "fulfillment",
     * "fulfillment_event", "gift_card", "gift_card_load", "gift_card_notification",
     * "gift_card_redemption", "gift_card_transaction", "inventory_count", "inventory_level",
     * "inventory_receipt", "inventory_reservation", "inventory_transfer", "invoice",
     * "invoice_delivery_attempt", "invoice_manual_payment", "invoice_payment_attempt",
     * "license_key", "license_key_activation", "license_key_pool", "merchant",
     * "merchant_billing_balance", "merchant_billing_invoice", "modifier_group", "modifier_set",
     * "order", "order_edit", "package", "partner_app", "partner_app_install", "payment_intent",
     * "payment_link", "payment_method", "payment_review", "payment_split", "payout",
     * "payout_destination", "payout_settings", "platform_fee", "platform_fee_payout",
     * "price_list", "product", "product_variant", "promotion", "promotion_code", "reader",
     * "refund", "report", "return", "return_disposition", "return_inspection", "return_receipt",
     * "return_resolution", "shipment", "subscription", "subscription_delivery_migration",
     * "subscription_payment_retry", "tax_calculation_callback", "tax_connection", "test_clock",
     * "ticket". anyOf[2] (Value): string. Value enum: "api_key", "balance", "balance_transaction",
     * "bundle", "category", "checkout_session", "credit_note", "credit_note_allocation",
     * "custom_domain", "customer", "customer_deletion_request", "customer_email_preferences",
     * "delivery_location_set", "delivery_method", "delivery_profile", "delivery_rate_callback",
     * "delivery_revocation", "delivery_selection", "delivery_zone", "dispute",
     * "environment_grant", "fraud_warning", "fulfillment", "fulfillment_event", "gift_card",
     * "gift_card_load", "gift_card_notification", "gift_card_redemption", "gift_card_transaction",
     * "inventory_count", "inventory_level", "inventory_receipt", "inventory_reservation",
     * "inventory_transfer", "invoice", "invoice_delivery_attempt", "invoice_manual_payment",
     * "invoice_payment_attempt", "license_key", "license_key_activation", "license_key_pool",
     * "merchant", "merchant_billing_balance", "merchant_billing_invoice", "modifier_group",
     * "modifier_set", "order", "order_edit", "package", "partner_app", "partner_app_install",
     * "payment_intent", "payment_link", "payment_method", "payment_review", "payment_split",
     * "payout", "payout_destination", "payout_settings", "platform_fee", "platform_fee_payout",
     * "price_list", "product", "product_variant", "promotion", "promotion_code", "reader",
     * "refund", "report", "return", "return_disposition", "return_inspection", "return_receipt",
     * "return_resolution", "shipment", "subscription", "subscription_delivery_migration",
     * "subscription_payment_retry", "tax_calculation_callback", "tax_connection", "test_clock",
     * "ticket".
     */
    "resource_type"?: InputValue<("api_key"
        | "balance"
        | "balance_transaction"
        | "bundle"
        | "category"
        | "checkout_session"
        | "credit_note"
        | "credit_note_allocation"
        | "custom_domain"
        | "customer"
        | "customer_deletion_request"
        | "customer_email_preferences"
        | "delivery_location_set"
        | "delivery_method"
        | "delivery_profile"
        | "delivery_rate_callback"
        | "delivery_revocation"
        | "delivery_selection"
        | "delivery_zone"
        | "dispute"
        | "environment_grant"
        | "fraud_warning"
        | "fulfillment"
        | "fulfillment_event"
        | "gift_card"
        | "gift_card_load"
        | "gift_card_notification"
        | "gift_card_redemption"
        | "gift_card_transaction"
        | "inventory_count"
        | "inventory_level"
        | "inventory_receipt"
        | "inventory_reservation"
        | "inventory_transfer"
        | "invoice"
        | "invoice_delivery_attempt"
        | "invoice_manual_payment"
        | "invoice_payment_attempt"
        | "license_key"
        | "license_key_activation"
        | "license_key_pool"
        | "merchant"
        | "merchant_billing_balance"
        | "merchant_billing_invoice"
        | "modifier_group"
        | "modifier_set"
        | "order"
        | "order_edit"
        | "package"
        | "partner_app"
        | "partner_app_install"
        | "payment_intent"
        | "payment_link"
        | "payment_method"
        | "payment_review"
        | "payment_split"
        | "payout"
        | "payout_destination"
        | "payout_settings"
        | "platform_fee"
        | "platform_fee_payout"
        | "price_list"
        | "product"
        | "product_variant"
        | "promotion"
        | "promotion_code"
        | "reader"
        | "refund"
        | "report"
        | "return"
        | "return_disposition"
        | "return_inspection"
        | "return_receipt"
        | "return_resolution"
        | "shipment"
        | "subscription"
        | "subscription_delivery_migration"
        | "subscription_payment_retry"
        | "tax_calculation_callback"
        | "tax_connection"
        | "test_clock"
        | "ticket")
        | readonly ("api_key"
        | "balance"
        | "balance_transaction"
        | "bundle"
        | "category"
        | "checkout_session"
        | "credit_note"
        | "credit_note_allocation"
        | "custom_domain"
        | "customer"
        | "customer_deletion_request"
        | "customer_email_preferences"
        | "delivery_location_set"
        | "delivery_method"
        | "delivery_profile"
        | "delivery_rate_callback"
        | "delivery_revocation"
        | "delivery_selection"
        | "delivery_zone"
        | "dispute"
        | "environment_grant"
        | "fraud_warning"
        | "fulfillment"
        | "fulfillment_event"
        | "gift_card"
        | "gift_card_load"
        | "gift_card_notification"
        | "gift_card_redemption"
        | "gift_card_transaction"
        | "inventory_count"
        | "inventory_level"
        | "inventory_receipt"
        | "inventory_reservation"
        | "inventory_transfer"
        | "invoice"
        | "invoice_delivery_attempt"
        | "invoice_manual_payment"
        | "invoice_payment_attempt"
        | "license_key"
        | "license_key_activation"
        | "license_key_pool"
        | "merchant"
        | "merchant_billing_balance"
        | "merchant_billing_invoice"
        | "modifier_group"
        | "modifier_set"
        | "order"
        | "order_edit"
        | "package"
        | "partner_app"
        | "partner_app_install"
        | "payment_intent"
        | "payment_link"
        | "payment_method"
        | "payment_review"
        | "payment_split"
        | "payout"
        | "payout_destination"
        | "payout_settings"
        | "platform_fee"
        | "platform_fee_payout"
        | "price_list"
        | "product"
        | "product_variant"
        | "promotion"
        | "promotion_code"
        | "reader"
        | "refund"
        | "report"
        | "return"
        | "return_disposition"
        | "return_inspection"
        | "return_receipt"
        | "return_resolution"
        | "shipment"
        | "subscription"
        | "subscription_delivery_migration"
        | "subscription_payment_retry"
        | "tax_calculation_callback"
        | "tax_connection"
        | "test_clock"
        | "ticket")[]>;
    /**
     * Filter by affected resource ID. pattern:
     * ^((ad|afri|ba|bag|bal|bam|baoa|basa|bav|bepevt|betr|bses|btxn|bue|bun|bunc|bup|busrc|caddr|cagr|capsnap|catid|ccaevt|ccop|cdel|cdom|cecr|ch|clg|clla|cn|cna|cnart|cnlease|cnli|cnmut|cof|cpoc|cpop|cs|cscv|cses|cslimr|csrt|ctex|ctg|cus|cver|dca|dcb|dcbr|dcgrp|ddiag|defc|deff|demo|dev|dleg|dls|dlsr|dmet|dmetr|dms|dmsevt|dmslink|dmsopen|dopt|dp|dprof|dprofr|dqt|drate|drev|dreval|dsel|dsle|dti|du|dzone|dzoner|edat|edel|egrt|fbc|fbr|fev|file|fnt|frw|fsu|ful|fw|fwad|fwcmd|fwcon|fwph|fwpm|fwss|gc|gcg|gcl|gcn|gcpra|gcr|gct|gfd|hat|hce|hcr|hev|hin|hlk|hnt|hrp|hsl|hsr|hth|hwm|iacr|iaevt|iksevt|iksop|img|indel|inevt|inlf|inv|inv_cmd|invadj|invapp|invart|invc|invcln|invi|invl|invlease|invli|invm|invp|invpa|invpay|invpv|invr|invrea|invrec|invrecln|invrln|invse|invt|invtr|invtrln|iomevt|ipt|ivat|key|li|lk|lka|lkp|lkpa|lkpk|lkr|loc|mac|mace|mbbal|mbclaim|mbe|mbin|mbout|mca|mcdchg|mcdsub|mcfr|mcr|mcra|mcrecon|mcrve|menv|mer|mfa|mfce|mg|mod|mpafc|mpagr|mpfa|mpfc|mre|mrecv|mrp|ms|msa|msg|msinv|msinvl|mso|msu|mtac|ntc|ntf|oacr|oact|oalk|och|ocra|oed|olim|olimas|olra|omp|opahold|opaleg|opaobs|opaop|opard|oparp|opasd|opasgen|opasm|opasp|opat|opaum|opcred|opra|oprhold|opsa|opt|optv|ord|ordisp|org|orp|orr|otpial|otra|ovst|pac|pacr|pact|paog|papp|pasg|pat|patok|pava|pavc|pcae|pcal|pcb|pcfg|pchkr|pcode|pcri|pcrr|pcsch|pdest|peat|pendact|pfbal|pfbt|pfee|pfhi|pfhold|pfi|pfinc|pfloss|pflrec|pfpo|pfr|pfrb|pfrf|pfs|phold|pi|pia|pilm|pinst|piop|pipf|pkg|pki|pl|plan|plcf|ple|plli|plog|pm|pmcr|pmdom|po|poe|polog|ppac|ppd|pppa|pppr|ppta|pra|pref|prl|prlp|prod|promo|prrc|prt|prtn|psact|pses|pset|psetop|psinc|psplit|psrev|psu|pvimg|pvlaunch|pvscn|pvses|pvshare|pvw|ra|rbuy|rcaa|rcs|rdl|rdr|rdrcfg|rdrpres|recon|ref|rep|ret|retact|retadj|retcmd|retdsp|retfx|retinli|retins|retli|retrc|retrcli|retrepli|retres|retresli|retshli|rev|rl|rli|rlia|rliar|rlima|rlog|rpoe|rpol|rpolv|rprev|rra|rrq|rrsn|rta|rtba|rule|saa|sdmig|sdts|sdtu|set|sfba|sfpd|shp|sli|smf|soffer|spc|spcc|spli|spol|sppd|spr|ssu|sub|tac|tae|tcae|tcb|tcbr|tce|tclk|tcn|test|tip|tkt|trg|txb|usr|var|watt|wdel|whcl|whep|whev|whout|whrc|wid|ws)_[0-9A-HJKMNP-TV-Z]{26}|fwa_[A-Z2-7]+|fwc_[A-Z2-7]+|fwin_[0-9a-f]+|req_([0-9a-f]+|caller_supplied_rate|pickup_distance_loc_[0-9A-HJKMNP-TV-Z]{26}))$.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "resource_id"?: InputValue<string>;
    /**
     * Filter by API request log ID associated with the event. pattern:
     * ^rlog_[0-9A-HJKMNP-TV-Z]{26}$. Example: "rlog_01KEZF7C008XJCH6BHA224X46F".
     */
    "api_request_log_id"?: InputValue<string>;
    /**
     * Filter by request ID associated with the event. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: InputValue<string>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by whether the event is synthetic: true returns only synthetic test events, false
     * excludes them. Omit to return all events.
     */
    "test"?: InputValue<boolean>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type WebhookEventsStreamParams = {
    /**
     * Filter by canonical merchant webhook event type. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "api_key.created", "api_key.revoked",
     * "api_key.updated", "balance.updated", "balance_transaction.created",
     * "balance_transaction.updated", "bundle.archived", "bundle.created", "bundle.updated",
     * "category.created", "category.deleted", "category.updated", "checkout_session.closed",
     * "checkout_session.created", "checkout_session.expired", "checkout_session.invalidated",
     * "checkout_session.paid", "checkout_session.partially_paid", "checkout_session.updated",
     * "credit_note.created", "credit_note.issued", "credit_note.updated", "credit_note.voided",
     * "credit_note_allocation.created", "credit_note_allocation.reversed",
     * "custom_domain.archived", "custom_domain.updated", "customer.created", "customer.deleted",
     * "customer.updated", "customer_deletion_request.completed",
     * "customer_deletion_request.created", "customer_deletion_request.failed",
     * "customer_deletion_request.processing", "customer_deletion_request.rejected",
     * "customer_email_preferences.updated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.updated",
     * "delivery_method.activated", "delivery_method.archived", "delivery_method.created",
     * "delivery_method.deactivated", "delivery_method.updated", "delivery_profile.archived",
     * "delivery_profile.created", "delivery_profile.updated", "delivery_rate_callback.activated",
     * "delivery_rate_callback.archived", "delivery_rate_callback.created",
     * "delivery_rate_callback.deactivated", "delivery_rate_callback.updated",
     * "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.archived",
     * "delivery_zone.created", "delivery_zone.updated", "dispute.created",
     * "dispute.inquiry_closed", "dispute.lost", "dispute.needs_response", "dispute.prevented",
     * "dispute.updated", "dispute.won", "fraud_warning.created", "fraud_warning.updated",
     * "fulfillment.canceled", "fulfillment.completed", "fulfillment.created",
     * "fulfillment.failed", "fulfillment.updated", "fulfillment_event.created",
     * "gift_card.created", "gift_card.updated", "gift_card_load.created",
     * "gift_card_load.updated", "gift_card_notification.created",
     * "gift_card_notification.updated", "gift_card_redemption.created",
     * "gift_card_redemption.updated", "gift_card_transaction.created", "inventory_count.applied",
     * "inventory_count.updated", "inventory_level.shortage_detected", "inventory_level.updated",
     * "inventory_receipt.created", "inventory_reservation.action_required",
     * "inventory_reservation.at_risk", "inventory_reservation.closed",
     * "inventory_reservation.committed", "inventory_reservation.consumed",
     * "inventory_reservation.created", "inventory_reservation.hold_expired",
     * "inventory_reservation.released", "inventory_reservation.updated",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned", "inventory_transfer.updated",
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
     * "invoice_payment_attempt.succeeded", "license_key.created", "license_key.disabled",
     * "license_key.expired", "license_key.updated", "license_key_activation.created",
     * "license_key_activation.released", "license_key_pool.archived", "license_key_pool.created",
     * "license_key_pool.low_stock", "license_key_pool.out_of_stock", "license_key_pool.updated",
     * "merchant.readiness_updated", "merchant.updated", "merchant_billing_balance.updated",
     * "merchant_billing_invoice.issued", "merchant_billing_invoice.updated",
     * "modifier_group.archived", "modifier_group.created", "modifier_group.updated",
     * "modifier_set.archived", "modifier_set.created", "modifier_set.updated", "order.closed",
     * "order.created", "order.inventory_exception_created", "order.inventory_exception_resolved",
     * "order.paid", "order.partially_paid", "order.partially_refunded", "order.refunded",
     * "order.updated", "order_edit.canceled", "order_edit.completed", "order_edit.created",
     * "order_edit.updated", "package.created", "package.updated", "partner_app.platform_approved",
     * "partner_app.platform_limited", "partner_app.platform_rejected", "partner_app.updated",
     * "payment_intent.authorization_expiring", "payment_intent.canceled",
     * "payment_intent.created", "payment_intent.expired",
     * "payment_intent.fulfillment_hold_updated", "payment_intent.payment_failed",
     * "payment_intent.processing", "payment_intent.requires_action",
     * "payment_intent.requires_capture", "payment_intent.succeeded", "payment_intent.updated",
     * "payment_link.created", "payment_link.updated", "payment_method.activated",
     * "payment_method.archived", "payment_method.failed", "payment_method.updated",
     * "payment_review.closed", "payment_review.opened", "payment_review.reopened",
     * "payment_split.canceled", "payment_split.created", "payment_split.failed",
     * "payment_split.succeeded", "payment_split.updated", "payout.canceled", "payout.created",
     * "payout.failed", "payout.reversed", "payout.succeeded", "payout.updated",
     * "payout_destination.archived", "payout_destination.created", "payout_destination.disabled",
     * "payout_destination.updated", "payout_settings.updated", "platform_fee.canceled",
     * "platform_fee.created", "platform_fee.succeeded", "platform_fee.updated",
     * "platform_fee_payout.created", "platform_fee_payout.failed",
     * "platform_fee_payout.succeeded", "price_list.archived", "price_list.created",
     * "price_list.updated", "product.archived", "product.created", "product.updated",
     * "product_variant.archived", "product_variant.created", "product_variant.updated",
     * "promotion.archived", "promotion.created", "promotion.updated", "promotion_code.archived",
     * "promotion_code.created", "promotion_code.updated", "reader.archived", "reader.created",
     * "reader.updated", "refund.created", "refund.failed", "refund.partially_succeeded",
     * "refund.succeeded", "refund.updated", "report.failed", "report.succeeded",
     * "return.canceled", "return.completed", "return.created", "return.decision_recorded",
     * "return.reopened", "return.updated", "return_disposition.created",
     * "return_disposition.updated", "return_inspection.acceptance_decided",
     * "return_inspection.created", "return_inspection.superseded", "return_receipt.created",
     * "return_receipt.superseded", "return_receipt.verified", "return_resolution.created",
     * "return_resolution.updated", "shipment.created", "shipment.updated",
     * "subscription.activated", "subscription.canceled", "subscription.cancellation_scheduled",
     * "subscription.created", "subscription.cycle_skipped",
     * "subscription.delivery_action_required", "subscription.delivery_pause_upcoming",
     * "subscription.delivery_updated", "subscription.dunning_exhausted",
     * "subscription.end_upcoming", "subscription.past_due", "subscription.paused",
     * "subscription.payment_succeeded", "subscription.plan_change_canceled",
     * "subscription.plan_change_scheduled", "subscription.plan_changed",
     * "subscription.reactivated", "subscription.renewal_upcoming", "subscription.resumed",
     * "subscription.trial_ending", "subscription.updated",
     * "subscription_delivery_migration.completed", "subscription_payment_retry.created",
     * "subscription_payment_retry.failed", "subscription_payment_retry.succeeded",
     * "tax_calculation_callback.activated", "tax_calculation_callback.archived",
     * "tax_calculation_callback.created", "tax_calculation_callback.deactivated",
     * "tax_calculation_callback.updated", "tax_connection.updated", "test_clock.advancing",
     * "test_clock.archived", "test_clock.created", "test_clock.failed", "test_clock.ready",
     * "ticket.checked_in", "ticket.created", "ticket.updated", "ticket.voided". Value enum:
     * "api_key.created", "api_key.revoked", "api_key.updated", "balance.updated",
     * "balance_transaction.created", "balance_transaction.updated", "bundle.archived",
     * "bundle.created", "bundle.updated", "category.created", "category.deleted",
     * "category.updated", "checkout_session.closed", "checkout_session.created",
     * "checkout_session.expired", "checkout_session.invalidated", "checkout_session.paid",
     * "checkout_session.partially_paid", "checkout_session.updated", "credit_note.created",
     * "credit_note.issued", "credit_note.updated", "credit_note.voided",
     * "credit_note_allocation.created", "credit_note_allocation.reversed",
     * "custom_domain.archived", "custom_domain.updated", "customer.created", "customer.deleted",
     * "customer.updated", "customer_deletion_request.completed",
     * "customer_deletion_request.created", "customer_deletion_request.failed",
     * "customer_deletion_request.processing", "customer_deletion_request.rejected",
     * "customer_email_preferences.updated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.updated",
     * "delivery_method.activated", "delivery_method.archived", "delivery_method.created",
     * "delivery_method.deactivated", "delivery_method.updated", "delivery_profile.archived",
     * "delivery_profile.created", "delivery_profile.updated", "delivery_rate_callback.activated",
     * "delivery_rate_callback.archived", "delivery_rate_callback.created",
     * "delivery_rate_callback.deactivated", "delivery_rate_callback.updated",
     * "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.archived",
     * "delivery_zone.created", "delivery_zone.updated", "dispute.created",
     * "dispute.inquiry_closed", "dispute.lost", "dispute.needs_response", "dispute.prevented",
     * "dispute.updated", "dispute.won", "fraud_warning.created", "fraud_warning.updated",
     * "fulfillment.canceled", "fulfillment.completed", "fulfillment.created",
     * "fulfillment.failed", "fulfillment.updated", "fulfillment_event.created",
     * "gift_card.created", "gift_card.updated", "gift_card_load.created",
     * "gift_card_load.updated", "gift_card_notification.created",
     * "gift_card_notification.updated", "gift_card_redemption.created",
     * "gift_card_redemption.updated", "gift_card_transaction.created", "inventory_count.applied",
     * "inventory_count.updated", "inventory_level.shortage_detected", "inventory_level.updated",
     * "inventory_receipt.created", "inventory_reservation.action_required",
     * "inventory_reservation.at_risk", "inventory_reservation.closed",
     * "inventory_reservation.committed", "inventory_reservation.consumed",
     * "inventory_reservation.created", "inventory_reservation.hold_expired",
     * "inventory_reservation.released", "inventory_reservation.updated",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned", "inventory_transfer.updated",
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
     * "invoice_payment_attempt.succeeded", "license_key.created", "license_key.disabled",
     * "license_key.expired", "license_key.updated", "license_key_activation.created",
     * "license_key_activation.released", "license_key_pool.archived", "license_key_pool.created",
     * "license_key_pool.low_stock", "license_key_pool.out_of_stock", "license_key_pool.updated",
     * "merchant.readiness_updated", "merchant.updated", "merchant_billing_balance.updated",
     * "merchant_billing_invoice.issued", "merchant_billing_invoice.updated",
     * "modifier_group.archived", "modifier_group.created", "modifier_group.updated",
     * "modifier_set.archived", "modifier_set.created", "modifier_set.updated", "order.closed",
     * "order.created", "order.inventory_exception_created", "order.inventory_exception_resolved",
     * "order.paid", "order.partially_paid", "order.partially_refunded", "order.refunded",
     * "order.updated", "order_edit.canceled", "order_edit.completed", "order_edit.created",
     * "order_edit.updated", "package.created", "package.updated", "partner_app.platform_approved",
     * "partner_app.platform_limited", "partner_app.platform_rejected", "partner_app.updated",
     * "payment_intent.authorization_expiring", "payment_intent.canceled",
     * "payment_intent.created", "payment_intent.expired",
     * "payment_intent.fulfillment_hold_updated", "payment_intent.payment_failed",
     * "payment_intent.processing", "payment_intent.requires_action",
     * "payment_intent.requires_capture", "payment_intent.succeeded", "payment_intent.updated",
     * "payment_link.created", "payment_link.updated", "payment_method.activated",
     * "payment_method.archived", "payment_method.failed", "payment_method.updated",
     * "payment_review.closed", "payment_review.opened", "payment_review.reopened",
     * "payment_split.canceled", "payment_split.created", "payment_split.failed",
     * "payment_split.succeeded", "payment_split.updated", "payout.canceled", "payout.created",
     * "payout.failed", "payout.reversed", "payout.succeeded", "payout.updated",
     * "payout_destination.archived", "payout_destination.created", "payout_destination.disabled",
     * "payout_destination.updated", "payout_settings.updated", "platform_fee.canceled",
     * "platform_fee.created", "platform_fee.succeeded", "platform_fee.updated",
     * "platform_fee_payout.created", "platform_fee_payout.failed",
     * "platform_fee_payout.succeeded", "price_list.archived", "price_list.created",
     * "price_list.updated", "product.archived", "product.created", "product.updated",
     * "product_variant.archived", "product_variant.created", "product_variant.updated",
     * "promotion.archived", "promotion.created", "promotion.updated", "promotion_code.archived",
     * "promotion_code.created", "promotion_code.updated", "reader.archived", "reader.created",
     * "reader.updated", "refund.created", "refund.failed", "refund.partially_succeeded",
     * "refund.succeeded", "refund.updated", "report.failed", "report.succeeded",
     * "return.canceled", "return.completed", "return.created", "return.decision_recorded",
     * "return.reopened", "return.updated", "return_disposition.created",
     * "return_disposition.updated", "return_inspection.acceptance_decided",
     * "return_inspection.created", "return_inspection.superseded", "return_receipt.created",
     * "return_receipt.superseded", "return_receipt.verified", "return_resolution.created",
     * "return_resolution.updated", "shipment.created", "shipment.updated",
     * "subscription.activated", "subscription.canceled", "subscription.cancellation_scheduled",
     * "subscription.created", "subscription.cycle_skipped",
     * "subscription.delivery_action_required", "subscription.delivery_pause_upcoming",
     * "subscription.delivery_updated", "subscription.dunning_exhausted",
     * "subscription.end_upcoming", "subscription.past_due", "subscription.paused",
     * "subscription.payment_succeeded", "subscription.plan_change_canceled",
     * "subscription.plan_change_scheduled", "subscription.plan_changed",
     * "subscription.reactivated", "subscription.renewal_upcoming", "subscription.resumed",
     * "subscription.trial_ending", "subscription.updated",
     * "subscription_delivery_migration.completed", "subscription_payment_retry.created",
     * "subscription_payment_retry.failed", "subscription_payment_retry.succeeded",
     * "tax_calculation_callback.activated", "tax_calculation_callback.archived",
     * "tax_calculation_callback.created", "tax_calculation_callback.deactivated",
     * "tax_calculation_callback.updated", "tax_connection.updated", "test_clock.advancing",
     * "test_clock.archived", "test_clock.created", "test_clock.failed", "test_clock.ready",
     * "ticket.checked_in", "ticket.created", "ticket.updated", "ticket.voided". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "api_key.created", "api_key.revoked",
     * "api_key.updated", "balance.updated", "balance_transaction.created",
     * "balance_transaction.updated", "bundle.archived", "bundle.created", "bundle.updated",
     * "category.created", "category.deleted", "category.updated", "checkout_session.closed",
     * "checkout_session.created", "checkout_session.expired", "checkout_session.invalidated",
     * "checkout_session.paid", "checkout_session.partially_paid", "checkout_session.updated",
     * "credit_note.created", "credit_note.issued", "credit_note.updated", "credit_note.voided",
     * "credit_note_allocation.created", "credit_note_allocation.reversed",
     * "custom_domain.archived", "custom_domain.updated", "customer.created", "customer.deleted",
     * "customer.updated", "customer_deletion_request.completed",
     * "customer_deletion_request.created", "customer_deletion_request.failed",
     * "customer_deletion_request.processing", "customer_deletion_request.rejected",
     * "customer_email_preferences.updated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.updated",
     * "delivery_method.activated", "delivery_method.archived", "delivery_method.created",
     * "delivery_method.deactivated", "delivery_method.updated", "delivery_profile.archived",
     * "delivery_profile.created", "delivery_profile.updated", "delivery_rate_callback.activated",
     * "delivery_rate_callback.archived", "delivery_rate_callback.created",
     * "delivery_rate_callback.deactivated", "delivery_rate_callback.updated",
     * "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.archived",
     * "delivery_zone.created", "delivery_zone.updated", "dispute.created",
     * "dispute.inquiry_closed", "dispute.lost", "dispute.needs_response", "dispute.prevented",
     * "dispute.updated", "dispute.won", "fraud_warning.created", "fraud_warning.updated",
     * "fulfillment.canceled", "fulfillment.completed", "fulfillment.created",
     * "fulfillment.failed", "fulfillment.updated", "fulfillment_event.created",
     * "gift_card.created", "gift_card.updated", "gift_card_load.created",
     * "gift_card_load.updated", "gift_card_notification.created",
     * "gift_card_notification.updated", "gift_card_redemption.created",
     * "gift_card_redemption.updated", "gift_card_transaction.created", "inventory_count.applied",
     * "inventory_count.updated", "inventory_level.shortage_detected", "inventory_level.updated",
     * "inventory_receipt.created", "inventory_reservation.action_required",
     * "inventory_reservation.at_risk", "inventory_reservation.closed",
     * "inventory_reservation.committed", "inventory_reservation.consumed",
     * "inventory_reservation.created", "inventory_reservation.hold_expired",
     * "inventory_reservation.released", "inventory_reservation.updated",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned", "inventory_transfer.updated",
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
     * "invoice_payment_attempt.succeeded", "license_key.created", "license_key.disabled",
     * "license_key.expired", "license_key.updated", "license_key_activation.created",
     * "license_key_activation.released", "license_key_pool.archived", "license_key_pool.created",
     * "license_key_pool.low_stock", "license_key_pool.out_of_stock", "license_key_pool.updated",
     * "merchant.readiness_updated", "merchant.updated", "merchant_billing_balance.updated",
     * "merchant_billing_invoice.issued", "merchant_billing_invoice.updated",
     * "modifier_group.archived", "modifier_group.created", "modifier_group.updated",
     * "modifier_set.archived", "modifier_set.created", "modifier_set.updated", "order.closed",
     * "order.created", "order.inventory_exception_created", "order.inventory_exception_resolved",
     * "order.paid", "order.partially_paid", "order.partially_refunded", "order.refunded",
     * "order.updated", "order_edit.canceled", "order_edit.completed", "order_edit.created",
     * "order_edit.updated", "package.created", "package.updated", "partner_app.platform_approved",
     * "partner_app.platform_limited", "partner_app.platform_rejected", "partner_app.updated",
     * "payment_intent.authorization_expiring", "payment_intent.canceled",
     * "payment_intent.created", "payment_intent.expired",
     * "payment_intent.fulfillment_hold_updated", "payment_intent.payment_failed",
     * "payment_intent.processing", "payment_intent.requires_action",
     * "payment_intent.requires_capture", "payment_intent.succeeded", "payment_intent.updated",
     * "payment_link.created", "payment_link.updated", "payment_method.activated",
     * "payment_method.archived", "payment_method.failed", "payment_method.updated",
     * "payment_review.closed", "payment_review.opened", "payment_review.reopened",
     * "payment_split.canceled", "payment_split.created", "payment_split.failed",
     * "payment_split.succeeded", "payment_split.updated", "payout.canceled", "payout.created",
     * "payout.failed", "payout.reversed", "payout.succeeded", "payout.updated",
     * "payout_destination.archived", "payout_destination.created", "payout_destination.disabled",
     * "payout_destination.updated", "payout_settings.updated", "platform_fee.canceled",
     * "platform_fee.created", "platform_fee.succeeded", "platform_fee.updated",
     * "platform_fee_payout.created", "platform_fee_payout.failed",
     * "platform_fee_payout.succeeded", "price_list.archived", "price_list.created",
     * "price_list.updated", "product.archived", "product.created", "product.updated",
     * "product_variant.archived", "product_variant.created", "product_variant.updated",
     * "promotion.archived", "promotion.created", "promotion.updated", "promotion_code.archived",
     * "promotion_code.created", "promotion_code.updated", "reader.archived", "reader.created",
     * "reader.updated", "refund.created", "refund.failed", "refund.partially_succeeded",
     * "refund.succeeded", "refund.updated", "report.failed", "report.succeeded",
     * "return.canceled", "return.completed", "return.created", "return.decision_recorded",
     * "return.reopened", "return.updated", "return_disposition.created",
     * "return_disposition.updated", "return_inspection.acceptance_decided",
     * "return_inspection.created", "return_inspection.superseded", "return_receipt.created",
     * "return_receipt.superseded", "return_receipt.verified", "return_resolution.created",
     * "return_resolution.updated", "shipment.created", "shipment.updated",
     * "subscription.activated", "subscription.canceled", "subscription.cancellation_scheduled",
     * "subscription.created", "subscription.cycle_skipped",
     * "subscription.delivery_action_required", "subscription.delivery_pause_upcoming",
     * "subscription.delivery_updated", "subscription.dunning_exhausted",
     * "subscription.end_upcoming", "subscription.past_due", "subscription.paused",
     * "subscription.payment_succeeded", "subscription.plan_change_canceled",
     * "subscription.plan_change_scheduled", "subscription.plan_changed",
     * "subscription.reactivated", "subscription.renewal_upcoming", "subscription.resumed",
     * "subscription.trial_ending", "subscription.updated",
     * "subscription_delivery_migration.completed", "subscription_payment_retry.created",
     * "subscription_payment_retry.failed", "subscription_payment_retry.succeeded",
     * "tax_calculation_callback.activated", "tax_calculation_callback.archived",
     * "tax_calculation_callback.created", "tax_calculation_callback.deactivated",
     * "tax_calculation_callback.updated", "tax_connection.updated", "test_clock.advancing",
     * "test_clock.archived", "test_clock.created", "test_clock.failed", "test_clock.ready",
     * "ticket.checked_in", "ticket.created", "ticket.updated", "ticket.voided". anyOf[1][]
     * (Value): string. Value enum: "api_key.created", "api_key.revoked", "api_key.updated",
     * "balance.updated", "balance_transaction.created", "balance_transaction.updated",
     * "bundle.archived", "bundle.created", "bundle.updated", "category.created",
     * "category.deleted", "category.updated", "checkout_session.closed",
     * "checkout_session.created", "checkout_session.expired", "checkout_session.invalidated",
     * "checkout_session.paid", "checkout_session.partially_paid", "checkout_session.updated",
     * "credit_note.created", "credit_note.issued", "credit_note.updated", "credit_note.voided",
     * "credit_note_allocation.created", "credit_note_allocation.reversed",
     * "custom_domain.archived", "custom_domain.updated", "customer.created", "customer.deleted",
     * "customer.updated", "customer_deletion_request.completed",
     * "customer_deletion_request.created", "customer_deletion_request.failed",
     * "customer_deletion_request.processing", "customer_deletion_request.rejected",
     * "customer_email_preferences.updated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.updated",
     * "delivery_method.activated", "delivery_method.archived", "delivery_method.created",
     * "delivery_method.deactivated", "delivery_method.updated", "delivery_profile.archived",
     * "delivery_profile.created", "delivery_profile.updated", "delivery_rate_callback.activated",
     * "delivery_rate_callback.archived", "delivery_rate_callback.created",
     * "delivery_rate_callback.deactivated", "delivery_rate_callback.updated",
     * "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.archived",
     * "delivery_zone.created", "delivery_zone.updated", "dispute.created",
     * "dispute.inquiry_closed", "dispute.lost", "dispute.needs_response", "dispute.prevented",
     * "dispute.updated", "dispute.won", "fraud_warning.created", "fraud_warning.updated",
     * "fulfillment.canceled", "fulfillment.completed", "fulfillment.created",
     * "fulfillment.failed", "fulfillment.updated", "fulfillment_event.created",
     * "gift_card.created", "gift_card.updated", "gift_card_load.created",
     * "gift_card_load.updated", "gift_card_notification.created",
     * "gift_card_notification.updated", "gift_card_redemption.created",
     * "gift_card_redemption.updated", "gift_card_transaction.created", "inventory_count.applied",
     * "inventory_count.updated", "inventory_level.shortage_detected", "inventory_level.updated",
     * "inventory_receipt.created", "inventory_reservation.action_required",
     * "inventory_reservation.at_risk", "inventory_reservation.closed",
     * "inventory_reservation.committed", "inventory_reservation.consumed",
     * "inventory_reservation.created", "inventory_reservation.hold_expired",
     * "inventory_reservation.released", "inventory_reservation.updated",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned", "inventory_transfer.updated",
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
     * "invoice_payment_attempt.succeeded", "license_key.created", "license_key.disabled",
     * "license_key.expired", "license_key.updated", "license_key_activation.created",
     * "license_key_activation.released", "license_key_pool.archived", "license_key_pool.created",
     * "license_key_pool.low_stock", "license_key_pool.out_of_stock", "license_key_pool.updated",
     * "merchant.readiness_updated", "merchant.updated", "merchant_billing_balance.updated",
     * "merchant_billing_invoice.issued", "merchant_billing_invoice.updated",
     * "modifier_group.archived", "modifier_group.created", "modifier_group.updated",
     * "modifier_set.archived", "modifier_set.created", "modifier_set.updated", "order.closed",
     * "order.created", "order.inventory_exception_created", "order.inventory_exception_resolved",
     * "order.paid", "order.partially_paid", "order.partially_refunded", "order.refunded",
     * "order.updated", "order_edit.canceled", "order_edit.completed", "order_edit.created",
     * "order_edit.updated", "package.created", "package.updated", "partner_app.platform_approved",
     * "partner_app.platform_limited", "partner_app.platform_rejected", "partner_app.updated",
     * "payment_intent.authorization_expiring", "payment_intent.canceled",
     * "payment_intent.created", "payment_intent.expired",
     * "payment_intent.fulfillment_hold_updated", "payment_intent.payment_failed",
     * "payment_intent.processing", "payment_intent.requires_action",
     * "payment_intent.requires_capture", "payment_intent.succeeded", "payment_intent.updated",
     * "payment_link.created", "payment_link.updated", "payment_method.activated",
     * "payment_method.archived", "payment_method.failed", "payment_method.updated",
     * "payment_review.closed", "payment_review.opened", "payment_review.reopened",
     * "payment_split.canceled", "payment_split.created", "payment_split.failed",
     * "payment_split.succeeded", "payment_split.updated", "payout.canceled", "payout.created",
     * "payout.failed", "payout.reversed", "payout.succeeded", "payout.updated",
     * "payout_destination.archived", "payout_destination.created", "payout_destination.disabled",
     * "payout_destination.updated", "payout_settings.updated", "platform_fee.canceled",
     * "platform_fee.created", "platform_fee.succeeded", "platform_fee.updated",
     * "platform_fee_payout.created", "platform_fee_payout.failed",
     * "platform_fee_payout.succeeded", "price_list.archived", "price_list.created",
     * "price_list.updated", "product.archived", "product.created", "product.updated",
     * "product_variant.archived", "product_variant.created", "product_variant.updated",
     * "promotion.archived", "promotion.created", "promotion.updated", "promotion_code.archived",
     * "promotion_code.created", "promotion_code.updated", "reader.archived", "reader.created",
     * "reader.updated", "refund.created", "refund.failed", "refund.partially_succeeded",
     * "refund.succeeded", "refund.updated", "report.failed", "report.succeeded",
     * "return.canceled", "return.completed", "return.created", "return.decision_recorded",
     * "return.reopened", "return.updated", "return_disposition.created",
     * "return_disposition.updated", "return_inspection.acceptance_decided",
     * "return_inspection.created", "return_inspection.superseded", "return_receipt.created",
     * "return_receipt.superseded", "return_receipt.verified", "return_resolution.created",
     * "return_resolution.updated", "shipment.created", "shipment.updated",
     * "subscription.activated", "subscription.canceled", "subscription.cancellation_scheduled",
     * "subscription.created", "subscription.cycle_skipped",
     * "subscription.delivery_action_required", "subscription.delivery_pause_upcoming",
     * "subscription.delivery_updated", "subscription.dunning_exhausted",
     * "subscription.end_upcoming", "subscription.past_due", "subscription.paused",
     * "subscription.payment_succeeded", "subscription.plan_change_canceled",
     * "subscription.plan_change_scheduled", "subscription.plan_changed",
     * "subscription.reactivated", "subscription.renewal_upcoming", "subscription.resumed",
     * "subscription.trial_ending", "subscription.updated",
     * "subscription_delivery_migration.completed", "subscription_payment_retry.created",
     * "subscription_payment_retry.failed", "subscription_payment_retry.succeeded",
     * "tax_calculation_callback.activated", "tax_calculation_callback.archived",
     * "tax_calculation_callback.created", "tax_calculation_callback.deactivated",
     * "tax_calculation_callback.updated", "tax_connection.updated", "test_clock.advancing",
     * "test_clock.archived", "test_clock.created", "test_clock.failed", "test_clock.ready",
     * "ticket.checked_in", "ticket.created", "ticket.updated", "ticket.voided". anyOf[2] (Value):
     * string. Value enum: "api_key.created", "api_key.revoked", "api_key.updated",
     * "balance.updated", "balance_transaction.created", "balance_transaction.updated",
     * "bundle.archived", "bundle.created", "bundle.updated", "category.created",
     * "category.deleted", "category.updated", "checkout_session.closed",
     * "checkout_session.created", "checkout_session.expired", "checkout_session.invalidated",
     * "checkout_session.paid", "checkout_session.partially_paid", "checkout_session.updated",
     * "credit_note.created", "credit_note.issued", "credit_note.updated", "credit_note.voided",
     * "credit_note_allocation.created", "credit_note_allocation.reversed",
     * "custom_domain.archived", "custom_domain.updated", "customer.created", "customer.deleted",
     * "customer.updated", "customer_deletion_request.completed",
     * "customer_deletion_request.created", "customer_deletion_request.failed",
     * "customer_deletion_request.processing", "customer_deletion_request.rejected",
     * "customer_email_preferences.updated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.updated",
     * "delivery_method.activated", "delivery_method.archived", "delivery_method.created",
     * "delivery_method.deactivated", "delivery_method.updated", "delivery_profile.archived",
     * "delivery_profile.created", "delivery_profile.updated", "delivery_rate_callback.activated",
     * "delivery_rate_callback.archived", "delivery_rate_callback.created",
     * "delivery_rate_callback.deactivated", "delivery_rate_callback.updated",
     * "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.archived",
     * "delivery_zone.created", "delivery_zone.updated", "dispute.created",
     * "dispute.inquiry_closed", "dispute.lost", "dispute.needs_response", "dispute.prevented",
     * "dispute.updated", "dispute.won", "fraud_warning.created", "fraud_warning.updated",
     * "fulfillment.canceled", "fulfillment.completed", "fulfillment.created",
     * "fulfillment.failed", "fulfillment.updated", "fulfillment_event.created",
     * "gift_card.created", "gift_card.updated", "gift_card_load.created",
     * "gift_card_load.updated", "gift_card_notification.created",
     * "gift_card_notification.updated", "gift_card_redemption.created",
     * "gift_card_redemption.updated", "gift_card_transaction.created", "inventory_count.applied",
     * "inventory_count.updated", "inventory_level.shortage_detected", "inventory_level.updated",
     * "inventory_receipt.created", "inventory_reservation.action_required",
     * "inventory_reservation.at_risk", "inventory_reservation.closed",
     * "inventory_reservation.committed", "inventory_reservation.consumed",
     * "inventory_reservation.created", "inventory_reservation.hold_expired",
     * "inventory_reservation.released", "inventory_reservation.updated",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned", "inventory_transfer.updated",
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
     * "invoice_payment_attempt.succeeded", "license_key.created", "license_key.disabled",
     * "license_key.expired", "license_key.updated", "license_key_activation.created",
     * "license_key_activation.released", "license_key_pool.archived", "license_key_pool.created",
     * "license_key_pool.low_stock", "license_key_pool.out_of_stock", "license_key_pool.updated",
     * "merchant.readiness_updated", "merchant.updated", "merchant_billing_balance.updated",
     * "merchant_billing_invoice.issued", "merchant_billing_invoice.updated",
     * "modifier_group.archived", "modifier_group.created", "modifier_group.updated",
     * "modifier_set.archived", "modifier_set.created", "modifier_set.updated", "order.closed",
     * "order.created", "order.inventory_exception_created", "order.inventory_exception_resolved",
     * "order.paid", "order.partially_paid", "order.partially_refunded", "order.refunded",
     * "order.updated", "order_edit.canceled", "order_edit.completed", "order_edit.created",
     * "order_edit.updated", "package.created", "package.updated", "partner_app.platform_approved",
     * "partner_app.platform_limited", "partner_app.platform_rejected", "partner_app.updated",
     * "payment_intent.authorization_expiring", "payment_intent.canceled",
     * "payment_intent.created", "payment_intent.expired",
     * "payment_intent.fulfillment_hold_updated", "payment_intent.payment_failed",
     * "payment_intent.processing", "payment_intent.requires_action",
     * "payment_intent.requires_capture", "payment_intent.succeeded", "payment_intent.updated",
     * "payment_link.created", "payment_link.updated", "payment_method.activated",
     * "payment_method.archived", "payment_method.failed", "payment_method.updated",
     * "payment_review.closed", "payment_review.opened", "payment_review.reopened",
     * "payment_split.canceled", "payment_split.created", "payment_split.failed",
     * "payment_split.succeeded", "payment_split.updated", "payout.canceled", "payout.created",
     * "payout.failed", "payout.reversed", "payout.succeeded", "payout.updated",
     * "payout_destination.archived", "payout_destination.created", "payout_destination.disabled",
     * "payout_destination.updated", "payout_settings.updated", "platform_fee.canceled",
     * "platform_fee.created", "platform_fee.succeeded", "platform_fee.updated",
     * "platform_fee_payout.created", "platform_fee_payout.failed",
     * "platform_fee_payout.succeeded", "price_list.archived", "price_list.created",
     * "price_list.updated", "product.archived", "product.created", "product.updated",
     * "product_variant.archived", "product_variant.created", "product_variant.updated",
     * "promotion.archived", "promotion.created", "promotion.updated", "promotion_code.archived",
     * "promotion_code.created", "promotion_code.updated", "reader.archived", "reader.created",
     * "reader.updated", "refund.created", "refund.failed", "refund.partially_succeeded",
     * "refund.succeeded", "refund.updated", "report.failed", "report.succeeded",
     * "return.canceled", "return.completed", "return.created", "return.decision_recorded",
     * "return.reopened", "return.updated", "return_disposition.created",
     * "return_disposition.updated", "return_inspection.acceptance_decided",
     * "return_inspection.created", "return_inspection.superseded", "return_receipt.created",
     * "return_receipt.superseded", "return_receipt.verified", "return_resolution.created",
     * "return_resolution.updated", "shipment.created", "shipment.updated",
     * "subscription.activated", "subscription.canceled", "subscription.cancellation_scheduled",
     * "subscription.created", "subscription.cycle_skipped",
     * "subscription.delivery_action_required", "subscription.delivery_pause_upcoming",
     * "subscription.delivery_updated", "subscription.dunning_exhausted",
     * "subscription.end_upcoming", "subscription.past_due", "subscription.paused",
     * "subscription.payment_succeeded", "subscription.plan_change_canceled",
     * "subscription.plan_change_scheduled", "subscription.plan_changed",
     * "subscription.reactivated", "subscription.renewal_upcoming", "subscription.resumed",
     * "subscription.trial_ending", "subscription.updated",
     * "subscription_delivery_migration.completed", "subscription_payment_retry.created",
     * "subscription_payment_retry.failed", "subscription_payment_retry.succeeded",
     * "tax_calculation_callback.activated", "tax_calculation_callback.archived",
     * "tax_calculation_callback.created", "tax_calculation_callback.deactivated",
     * "tax_calculation_callback.updated", "tax_connection.updated", "test_clock.advancing",
     * "test_clock.archived", "test_clock.created", "test_clock.failed", "test_clock.ready",
     * "ticket.checked_in", "ticket.created", "ticket.updated", "ticket.voided".
     */
    "event_type"?: InputValue<("api_key.created"
        | "api_key.revoked"
        | "api_key.updated"
        | "balance.updated"
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
        | "checkout_session.updated"
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
        | "customer_email_preferences.updated"
        | "delivery_location_set.archived"
        | "delivery_location_set.created"
        | "delivery_location_set.updated"
        | "delivery_method.activated"
        | "delivery_method.archived"
        | "delivery_method.created"
        | "delivery_method.deactivated"
        | "delivery_method.updated"
        | "delivery_profile.archived"
        | "delivery_profile.created"
        | "delivery_profile.updated"
        | "delivery_rate_callback.activated"
        | "delivery_rate_callback.archived"
        | "delivery_rate_callback.created"
        | "delivery_rate_callback.deactivated"
        | "delivery_rate_callback.updated"
        | "delivery_revocation.created"
        | "delivery_selection.committed"
        | "delivery_zone.archived"
        | "delivery_zone.created"
        | "delivery_zone.updated"
        | "dispute.created"
        | "dispute.inquiry_closed"
        | "dispute.lost"
        | "dispute.needs_response"
        | "dispute.prevented"
        | "dispute.updated"
        | "dispute.won"
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
        | "inventory_count.updated"
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
        | "inventory_reservation.updated"
        | "inventory_transfer.closed"
        | "inventory_transfer.departed"
        | "inventory_transfer.lost"
        | "inventory_transfer.received"
        | "inventory_transfer.returned"
        | "inventory_transfer.updated"
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
        | "invoice_payment_attempt.succeeded"
        | "license_key.created"
        | "license_key.disabled"
        | "license_key.expired"
        | "license_key.updated"
        | "license_key_activation.created"
        | "license_key_activation.released"
        | "license_key_pool.archived"
        | "license_key_pool.created"
        | "license_key_pool.low_stock"
        | "license_key_pool.out_of_stock"
        | "license_key_pool.updated"
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
        | "order_edit.canceled"
        | "order_edit.completed"
        | "order_edit.created"
        | "order_edit.updated"
        | "package.created"
        | "package.updated"
        | "partner_app.platform_approved"
        | "partner_app.platform_limited"
        | "partner_app.platform_rejected"
        | "partner_app.updated"
        | "payment_intent.authorization_expiring"
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
        | "payment_method.updated"
        | "payment_review.closed"
        | "payment_review.opened"
        | "payment_review.reopened"
        | "payment_split.canceled"
        | "payment_split.created"
        | "payment_split.failed"
        | "payment_split.succeeded"
        | "payment_split.updated"
        | "payout.canceled"
        | "payout.created"
        | "payout.failed"
        | "payout.reversed"
        | "payout.succeeded"
        | "payout.updated"
        | "payout_destination.archived"
        | "payout_destination.created"
        | "payout_destination.disabled"
        | "payout_destination.updated"
        | "payout_settings.updated"
        | "platform_fee.canceled"
        | "platform_fee.created"
        | "platform_fee.succeeded"
        | "platform_fee.updated"
        | "platform_fee_payout.created"
        | "platform_fee_payout.failed"
        | "platform_fee_payout.succeeded"
        | "price_list.archived"
        | "price_list.created"
        | "price_list.updated"
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
        | "reader.archived"
        | "reader.created"
        | "reader.updated"
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
        | "subscription.end_upcoming"
        | "subscription.past_due"
        | "subscription.paused"
        | "subscription.payment_succeeded"
        | "subscription.plan_change_canceled"
        | "subscription.plan_change_scheduled"
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
        | "tax_calculation_callback.activated"
        | "tax_calculation_callback.archived"
        | "tax_calculation_callback.created"
        | "tax_calculation_callback.deactivated"
        | "tax_calculation_callback.updated"
        | "tax_connection.updated"
        | "test_clock.advancing"
        | "test_clock.archived"
        | "test_clock.created"
        | "test_clock.failed"
        | "test_clock.ready"
        | "ticket.checked_in"
        | "ticket.created"
        | "ticket.updated"
        | "ticket.voided")
        | readonly ("api_key.created"
        | "api_key.revoked"
        | "api_key.updated"
        | "balance.updated"
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
        | "checkout_session.updated"
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
        | "customer_email_preferences.updated"
        | "delivery_location_set.archived"
        | "delivery_location_set.created"
        | "delivery_location_set.updated"
        | "delivery_method.activated"
        | "delivery_method.archived"
        | "delivery_method.created"
        | "delivery_method.deactivated"
        | "delivery_method.updated"
        | "delivery_profile.archived"
        | "delivery_profile.created"
        | "delivery_profile.updated"
        | "delivery_rate_callback.activated"
        | "delivery_rate_callback.archived"
        | "delivery_rate_callback.created"
        | "delivery_rate_callback.deactivated"
        | "delivery_rate_callback.updated"
        | "delivery_revocation.created"
        | "delivery_selection.committed"
        | "delivery_zone.archived"
        | "delivery_zone.created"
        | "delivery_zone.updated"
        | "dispute.created"
        | "dispute.inquiry_closed"
        | "dispute.lost"
        | "dispute.needs_response"
        | "dispute.prevented"
        | "dispute.updated"
        | "dispute.won"
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
        | "inventory_count.updated"
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
        | "inventory_reservation.updated"
        | "inventory_transfer.closed"
        | "inventory_transfer.departed"
        | "inventory_transfer.lost"
        | "inventory_transfer.received"
        | "inventory_transfer.returned"
        | "inventory_transfer.updated"
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
        | "invoice_payment_attempt.succeeded"
        | "license_key.created"
        | "license_key.disabled"
        | "license_key.expired"
        | "license_key.updated"
        | "license_key_activation.created"
        | "license_key_activation.released"
        | "license_key_pool.archived"
        | "license_key_pool.created"
        | "license_key_pool.low_stock"
        | "license_key_pool.out_of_stock"
        | "license_key_pool.updated"
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
        | "order_edit.canceled"
        | "order_edit.completed"
        | "order_edit.created"
        | "order_edit.updated"
        | "package.created"
        | "package.updated"
        | "partner_app.platform_approved"
        | "partner_app.platform_limited"
        | "partner_app.platform_rejected"
        | "partner_app.updated"
        | "payment_intent.authorization_expiring"
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
        | "payment_method.updated"
        | "payment_review.closed"
        | "payment_review.opened"
        | "payment_review.reopened"
        | "payment_split.canceled"
        | "payment_split.created"
        | "payment_split.failed"
        | "payment_split.succeeded"
        | "payment_split.updated"
        | "payout.canceled"
        | "payout.created"
        | "payout.failed"
        | "payout.reversed"
        | "payout.succeeded"
        | "payout.updated"
        | "payout_destination.archived"
        | "payout_destination.created"
        | "payout_destination.disabled"
        | "payout_destination.updated"
        | "payout_settings.updated"
        | "platform_fee.canceled"
        | "platform_fee.created"
        | "platform_fee.succeeded"
        | "platform_fee.updated"
        | "platform_fee_payout.created"
        | "platform_fee_payout.failed"
        | "platform_fee_payout.succeeded"
        | "price_list.archived"
        | "price_list.created"
        | "price_list.updated"
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
        | "reader.archived"
        | "reader.created"
        | "reader.updated"
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
        | "subscription.end_upcoming"
        | "subscription.past_due"
        | "subscription.paused"
        | "subscription.payment_succeeded"
        | "subscription.plan_change_canceled"
        | "subscription.plan_change_scheduled"
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
        | "tax_calculation_callback.activated"
        | "tax_calculation_callback.archived"
        | "tax_calculation_callback.created"
        | "tax_calculation_callback.deactivated"
        | "tax_calculation_callback.updated"
        | "tax_connection.updated"
        | "test_clock.advancing"
        | "test_clock.archived"
        | "test_clock.created"
        | "test_clock.failed"
        | "test_clock.ready"
        | "ticket.checked_in"
        | "ticket.created"
        | "ticket.updated"
        | "ticket.voided")[]>;
    /**
     * Filter by whether the event is synthetic: true returns only synthetic test events, false
     * excludes them. Omit to return all events.
     */
    "test"?: InputValue<boolean>;
    /**
     * Webhook event ID to resume after. Last-Event-ID is preferred when reconnecting. pattern:
     * ^whev_[0-9A-HJKMNP-TV-Z]{26}$. Example: "whev_01KEZF7C00362MS3HV970TRZGS".
     */
    "after_event_id"?: InputValue<string>;
    /** Webhook event cursor received from the previous SSE connection. */
    "Last-Event-ID"?: InputValue<string>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type WebhookEventsStreamResponse = EventStream;
/** The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. */
export type WebhookInvoice = ({
    /** Additional recipients copied on the invoice email and every reminder. [] (Value): string. */
    "cc_emails": Array<string>;
    /**
     * When the current closed interval began. Cleared when status returns to open or
     * partially_paid. A direct move between closed statuses preserves this timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "closed_at"?: string;
    /**
     * How this invoice is collected, resolved when the draft is written. Send this object back
     * when updating its collection policy. The invoice collection policy resolved at write time.
     * The object can be sent back when updating a draft.
     */
    "collection": InvoiceCollection;
    /**
     * Whether collection is blocked. While it is inventory_blocked, collection attempts return 409
     * ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
     * "inventory_blocked", "resolved".
     */
    "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
    /** When the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Summary of the billed customer. Returned only with expand=customer. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in
     * place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /**
     * Customer billed by this invoice. Absent when the invoice has no customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /** How issue delivered the invoice. Value enum: "email", "caller_managed". */
    "delivery_mode"?: "email" | "caller_managed" | (string & {});
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The
     * outstanding balance becomes overdue only after this date ends. Automatic collection runs at
     * the later of issue and the start of this date. With payment terms, issue computes this date
     * from issued_at. Absent when there is no due date. Format: date. Example: "2026-08-02".
     */
    "due_date"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id": string | null;
    /**
     * Fine print at the bottom of the invoice and PDF. It cannot change after issue. `null` when
     * unset.
     */
    "footer": string | null;
    /**
     * The Idempotency-Key of the request that created this resource. `null` when that request sent
     * no key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource. Buyer sessions on routes
     * shared with merchants get `null`. `/v1/me` responses do not include this field.
     */
    "idempotency_key"?: string | null;
    /** Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
    "invoice_id": string;
    /**
     * Sequential document number assigned when the invoice is issued. Numbering is per merchant,
     * with test and live mode numbered independently.
     */
    "invoice_number"?: string;
    /**
     * Whether the invoice is open or partially_paid and past due with a balance remaining. Without
     * schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money
     * is above zero; with them, at least one entry is overdue. Computed when the invoice is read.
     */
    "is_overdue": boolean;
    /**
     * When the invoice was issued. Absent on a draft. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "issued_at"?: string;
    /**
     * Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding
     * amounts. settlement_amounts.late_fee_money is their assessed total minus waivers. []
     * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is overdue.
     */
    "late_fees": Array<InvoiceLateFee>;
    /**
     * Message to the customer, printed on the invoice and PDF. It cannot change after issue.
     * `null` when unset.
     */
    "memo": string | null;
    /** Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Summary of the backing order. Returned only with expand=order. Present only when `expand`
     * includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /**
     * The order this invoice bills. Every invoice has one; quick pay creates it. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * When the invoice most recently became paid. Cleared when status leaves paid and set again on
     * a later paid transition. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "paid_at"?: string;
    /**
     * The resolved due-date policy. Send this object back when updating the draft; payment_terms
     * captures the term's current revision again. The invoice due-date policy resolved at write
     * time. The object can be sent back when updating a draft.
     */
    "payment_due": InvoicePaymentDue;
    /**
     * The payment term captured on the draft, with its due date rule and late fee policy. Later
     * changes to the payment term don't affect this invoice. The payment terms saved on an
     * invoice: the term's name, version, due date calculation, and late fee policy.
     */
    "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
    /**
     * The buyer's purchase order number, printed on the invoice and PDF. It cannot change after
     * issue. `null` when unset.
     */
    "po_number": string | null;
    /**
     * The invoice pricing totals, frozen at issue. A draft previews the backing order. total_money
     * excludes late fees, which are in settlement_amounts.late_fee_money. The money totals for an
     * order or invoice: subtotal, discounts, charges, tax, requested tip, and total.
     */
    "pricing_amounts": PricingAmounts;
    /**
     * Where Flint emails the invoice and its reminders. Email delivery requires it at issue.
     * `null` when unset.
     */
    "recipient_email": string | null;
    /**
     * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase order
     * number goes in po_number. It cannot change after issue. `null` when unset.
     */
    "reference": string | null;
    /**
     * How much of the collected money has been refunded. It doesn't change status. Value enum:
     * "none", "partially_refunded", "refunded".
     */
    "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Whether automatic reminders are paused. Set reminders_paused on PATCH
     * /v1/invoices/{invoice_id} to change it.
     */
    "reminders_paused": boolean;
    /**
     * When automatic reminders were paused. Absent while reminders are active. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "reminders_paused_at"?: string;
    /**
     * Where the buyer sends offline payments, shown on the invoice. Defaults to the invoice
     * settings remit-to address. A postal address. Every address has country. Addresses Flint
     * checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "remit_to_address"?: Address;
    /**
     * The payment schedule, in schedule order. Always [] when the invoice has no schedule and is
     * collected in one balance. [] (Value): {@link InvoiceScheduleEntry}. One payment on an
     * invoice's payment schedule, such as a deposit, installment, or balance, with its due time,
     * amounts, and status.
     */
    "schedule_entries": Array<InvoiceScheduleEntry>;
    /**
     * When Flint will issue and deliver this draft. `null` when no issue is scheduled. Cleared
     * when the draft is issued or voided, or when you send null. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "scheduled_issue_at": string | null;
    /**
     * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it
     * as written, without timezone conversion. `null` when unset. Format: date. Example:
     * "2026-08-02".
     */
    "service_date": string | null;
    /**
     * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining invoice
     * balance. What is still owed: pricing_amounts.total_money + late_fee_money - paid_money -
     * credited_money - written_off_money, never below zero. 0 on paid, credited, uncollectible,
     * and voided invoices; equal to pricing_amounts.total_money on a draft. Refunds and card
     * chargebacks don't change it. Lost bank returns reopen the balance. The bill settlement
     * amounts plus credit notes, the amount due now, and late fees. Invoice paid_money includes
     * late-fee payments and excludes reversed payments. Refunds and card chargeback losses do not
     * reopen outstanding_money or reduce paid_money. net_collected_money is paid_money minus
     * refunded_money, never below zero. Money collected, returned, waived, and still owed on a
     * bill.
     */
    "settlement_amounts": InvoiceSettlementAmounts;
    /**
     * The billing content of the invoice: line items, discounts, charges, tip, and tax. A draft
     * previews the backing order; issue freezes it, and later order changes don't reach an issued
     * invoice. A frozen copy of an issued invoice's content, including line items, charges,
     * discounts, tax identities, and pricing amounts.
     */
    "snapshot"?: InvoiceSnapshot;
    /**
     * Current invoice status. paid and credited close the current balance and can reopen to open
     * or partially_paid after a payment or credit allocation reversal; invoice.reopened reports
     * that change. An uncollectible invoice accepts manual recovery payments and becomes paid when
     * fully recovered; reversals restore the write-off. voided is final. Refunds change
     * refund_status without reopening the balance. An ACH bank return reverses paid_money and
     * reopens the balance. A lost card chargeback leaves paid_money, the balance, and status
     * unchanged; collecting it again requires a new invoice. Value enum: "draft", "open",
     * "partially_paid", "paid", "voided", "uncollectible", "credited".
     */
    "status": "draft"
        | "open"
        | "partially_paid"
        | "paid"
        | "voided"
        | "uncollectible"
        | "credited"
        | (string & {});
    /**
     * The subscription the backing order belongs to, copied when the draft is created and never
     * changed. `null` when the order isn't part of a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id": string | null;
    /**
     * Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of
     * the caller's permissions; each action still requires its route's scope. Always [] when no
     * action is available. [] enum: "collect", "issue", "mark_uncollectible", "void". [] (Value):
     * string. Value enum: "collect", "issue", "mark_uncollectible", "void".
     */
    "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
    /**
     * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken
     * from the merchant's timezone when the draft is written, or UTC when unset. Later merchant
     * changes do not alter this invoice's calendar.
     */
    "timezone"?: string;
    /**
     * When the invoice was marked uncollectible. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "uncollectible_at"?: string;
    /** When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current invoice version. Send this as expected_version when updating the draft. Format:
     * int64. minimum: 1.
     */
    "version": number;
    /**
     * When the buyer first opened the invoice through its hosted invoice link. Recorded on a
     * best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "viewed_at"?: string;
    /** When the invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "voided_at"?: string;
});
/**
 * The resource snapshot, without expansions. Webhooks omit these fields: `banners`,
 * `timezone_inferred`.
 */
export type WebhookMerchant = ({
    /**
     * The merchant's business address. A postal address. Every address has country. Addresses
     * Flint checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "address"?: Address;
    /**
     * Default API version for requests without a Flint-Version header. Shared across live and test
     * environments.
     */
    "api_version"?: string;
    /**
     * When the merchant's default API version last changed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "api_version_changed_at"?: string;
    /**
     * When the merchant's default API version was first set. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "api_version_pinned_at"?: string;
    /** Previous API version, present while a supported rollback is available. */
    "api_version_previous"?: string;
    /**
     * When the 72-hour rollback offer expires. Explicit changes to any supported version remain
     * available afterward. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "api_version_rollback_expires_at"?: string;
    /**
     * Business name buyers see on checkout, payment links, and receipts. Once the merchant starts
     * verification, it stays in sync with the business name on the live Stripe account: a change
     * on either side applies, and the latest change wins.
     */
    "business_name"?: string;
    /**
     * Merchant's business type. - `other`: A business type Flint does not map yet. Value enum:
     * "individual", "company", "non_profit", "government_entity", "other".
     */
    "business_type"?: "individual" | "company" | "non_profit" | "government_entity" | "other" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The account's contact email address. A new account starts with the sign-up email. `null`
     * when none is set.
     */
    "email": string | null;
    /**
     * A square image, at least 128 by 128 pixels, shown where the store needs a small mark:
     * browser tabs and compact headers. An image attached to a resource, with its display
     * properties and attachment metadata.
     */
    "icon"?: ImageAttachment;
    /**
     * The merchant's public brand mark. An image attached to a resource, with its display
     * properties and attachment metadata.
     */
    "logo"?: ImageAttachment;
    /** Stable identifier of the merchant. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** The account's contact phone number, in international format such as +12125551234. */
    "phone"?: string;
    /**
     * Whether the merchant can accept payments and receive payouts, and what is still needed. A
     * merchant's readiness to accept payments and receive payouts, with per-capability status and
     * outstanding requirements.
     */
    "readiness": MerchantReadiness;
    /**
     * Whether Flint lets the account operate. `readiness` says whether payments and payouts are
     * available. Value enum: "active", "suspended", "restricted", "closed".
     */
    "status": "active" | "suspended" | "restricted" | "closed" | (string & {});
    /** Support email address shown to buyers, for example on receipts and checkout. */
    "support_email"?: string;
    /** Support phone number shown to buyers, in international format such as +12125551234. */
    "support_phone"?: string;
    /** Support page shown to buyers. */
    "support_url"?: string;
    /**
     * Business IANA time zone, such as America/New_York. If no zone is saved, GET /v1/merchant
     * returns a zone inferred from live business geography when one is available, and omits the
     * field otherwise. Existing resources keep their saved time zone.
     */
    "timezone"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Merchant version. Profile, status, and API version changes advance this version, including
     * business name and business type changes synced from the payment provider. Readiness updates
     * alone do not. Format: int64. minimum: 1.
     */
    "version": number;
    /** The business's website. */
    "website_url"?: string;
});
/**
 * The resource snapshot, without expansions. Webhooks omit these fields: `buyer_actions`,
 * `active_payment_attempt`, `payment_collection`, `setup_collection`.
 */
export type WebhookOrder = ({
    /**
     * The earliest open or resolving payment review on this order's counted payments. `null` when
     * no review is open or resolving. List reviews with GET
     * /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present
     * with merchant credentials. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
     */
    "active_payment_review_id"?: string | null;
    /**
     * The amounts authorized and still capturable on the order's payments. The amounts authorized
     * and still capturable on an order's payments, with the authorization expiry.
     */
    "authorization_amounts"?: OrderAuthorizationAmounts;
    /**
     * Email and phone saved when payment started, from the pay request's buyer_contact or the
     * paying checkout session's saved contact. It does not change the linked customer. Buyer
     * contact supplied with payment or saved during checkout.
     */
    "buyer_contact"?: CheckoutBuyerContact;
    /** A note to the buyer. */
    "buyer_note"?: string;
    /**
     * Charges added to the order, such as delivery or service fees, each with its applied amount,
     * tax, and refunded amount. [] (Value): {@link OrderCharge}. An additional charge applied to
     * an order.
     */
    "charges": Array<OrderCharge>;
    /**
     * Billing name and address collected in Checkout for a successful payment. Omitted for buyer
     * credentials and when Checkout did not collect the details.
     */
    "checkout_billing_contact"?: CheckoutBillingContact;
    /**
     * IDs of the checkout sessions opened for this order. [] (Value): string. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_ids": Array<string>;
    /**
     * The reference the payment link URL or resolve request carried, such as your user ID. `null`
     * when none was sent or checkout did not start from a payment link. Returned only to merchant
     * credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a
     * claim, not proof of identity. Always present with merchant credentials. minLength: 1.
     * maxLength: 255.
     */
    "client_reference"?: string | null;
    /**
     * When the order closed. Present exactly when status is closed. Set once at the transition and
     * never changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "closed_at"?: string;
    /**
     * Why the order closed. Present exactly when status is closed. Set once at closure.
     * Unrecognized reasons are returned as other; new values may be added. Value enum:
     * "invoice_voided", "paid", "closed_by_merchant", "checkout_expired", "written_off",
     * "superseded", "return_resolution_canceled", "other".
     */
    "closed_reason"?: "invoice_voided"
        | "paid"
        | "closed_by_merchant"
        | "checkout_expired"
        | "written_off"
        | "superseded"
        | "return_resolution_canceled"
        | "other"
        | (string & {});
    /**
     * The caller note supplied when closing the order. System closures leave it absent. It is not
     * shown to the buyer.
     */
    "closed_reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The buyer's answers to the payment link's custom fields, recorded when checkout started, in
     * the order the link showed the fields. Each answer keeps the field's key, label, and type
     * from that moment, so later changes to the link don't change it. Optional fields the buyer
     * left blank are left out. Read-only. Empty when the order didn't come from a payment link,
     * the link had no custom fields, or the buyer answered none. Orders created before Flint
     * recorded answers here also return an empty list and keep their answers in `metadata` as
     * `custom_field_<key>`. Deleting the customer removes the answers. Returned only to merchant
     * credentials; omitted for buyer credentials. Always present with merchant credentials.
     * maxItems: 20. [] (Value): {@link CustomFieldAnswer}. One answer to a payment link custom
     * field, with the field as it was when checkout started. `custom_field_type` determines the
     * type of `value`.
     */
    "custom_field_answers"?: Array<CustomFieldAnswer>;
    /**
     * Customer summary included when `expand` names `customer`; `null` when expanded and no
     * customer is linked. Present only when `expand` includes `customer`; `null` when expanded and
     * there is no related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** ID of the customer this order belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
    "customer_id"?: string;
    /**
     * Promotions accepted at subscription signup. They attach when the subscription is provisioned
     * and first discount its first charged cycle. They do not discount this order and are separate
     * from discounts and order totals. Always present; empty when no promotions are deferred. []
     * (Value): {@link DeferredPromotion}. A promotion accepted at subscription signup for the
     * subscription's first charged cycle. It does not discount the signup order.
     */
    "deferred_promotions": Array<DeferredPromotion>;
    /**
     * Method, type and recipient of governing_delivery_selection_id. The address remains in
     * delivery_destination. Omitted when no shipment or local-delivery selection governs the
     * order. Method, type and recipient of governing_delivery_selection_id. delivery_destination
     * contains the resolved address. These values describe the same selection.
     */
    "delivery"?: OrderDeliverySummary;
    /**
     * The shipment or local-delivery destination committed for this order. Payment freezes this
     * value; fulfillment recipient changes do not replace it. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. Where an order is
     * delivered: the address, the recipient, and where the destination came from.
     */
    "delivery_destination"?: OrderDeliveryDestination;
    /**
     * Discounts applied to the order, each with its amount, status, and the line items and charges
     * it covers. [] (Value): {@link OrderDiscount}. A discount applied to an order, with its
     * amount, status, and the line items and charges it covers. It comes from a manual discount or
     * a promotion.
     */
    "discounts": Array<OrderDiscount>;
    /**
     * Aggregate dispute state across the order's counted payment intents, excluding
     * payment_returned. Always returned to merchant credentials and omitted from buyer reads. Open
     * states take precedence in this order: needs_response, under_review, inquiry_needs_response,
     * inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won,
     * prevented, inquiry_closed; none when no disputes count. List individual cases with GET
     * /v1/disputes?order_id={order_id}. Always present with merchant credentials. Value enum:
     * "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
     * "needs_response", "under_review", "won", "lost", "prevented", "other".
     */
    "dispute_status"?: "none"
        | "inquiry_needs_response"
        | "inquiry_under_review"
        | "inquiry_closed"
        | "needs_response"
        | "under_review"
        | "won"
        | "lost"
        | "prevented"
        | "other"
        | (string & {});
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Aggregate progress across the order's fulfillment quantities. Value enum: "not_fulfilled",
     * "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed".
     */
    "fulfillment_status"?: "not_fulfilled"
        | "partially_fulfilled"
        | "fulfilled"
        | "canceled"
        | "not_applicable"
        | "closed"
        | (string & {});
    /**
     * Fulfillments created for the order, each covering a set of its line items. [] (Value):
     * {@link WebhookSnapshotFulfillment}. Work required to deliver an order's items.
     */
    "fulfillments": Array<WebhookSnapshotFulfillment>;
    /**
     * An estimate of how the order balance splits between gift cards and the payment processor. An
     * estimate of how an order total splits between gift cards and the payment processor, and
     * whether gift cards can pay it.
     */
    "gift_card_estimate"?: OrderGiftCardEstimate;
    /**
     * The gift card redemptions applied to the order's payments. [] (Value): {@link
     * OrderGiftCardSettlement}. A gift card redemption applied to an order payment, with the
     * amount, tip, and gift card.
     */
    "gift_card_settlements": Array<OrderGiftCardSettlement>;
    /**
     * Whether gift cards can pay for this order now. Gift cards pay only USD orders that still
     * accept changes, are not subscription purchases, and whose merchant has at least one gift
     * card that is not closed in this environment. Gift cards cannot fund gift card purchases;
     * this is false when those purchases leave no amount eligible for gift card tender. Recomputed
     * on each read; a spent but open card still counts.
     */
    "gift_card_tender_enabled": boolean;
    /**
     * Gift cards available to pay the order, with each card's available balance. [] (Value):
     * {@link OrderGiftCardSelection}. A gift card available to pay an order, with its available
     * balance and the last four characters of its code.
     */
    "gift_cards": Array<OrderGiftCardSelection>;
    /**
     * ID of the delivery selection that governs this order, including pickup choices without a
     * delivery destination: the checkout's provisional selection before payment, and the selection
     * a payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}.
     * Null when no selection governs the order. While set, change the destination through the
     * delivery selection. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     */
    "governing_delivery_selection_id": string | null;
    /**
     * Carry-out handover: every physical item is handed to the buyer at this location when the
     * order is paid, in place of a delivery selection. Payment then creates one completed
     * `handover` fulfillment. Absent without a handover. Every physical item is handed to the
     * buyer at this location when the order is paid. Replaces a delivery selection.
     */
    "handover"?: OrderHandover;
    /** A note for your team. Buyer reads leave it out. */
    "internal_note"?: string;
    /**
     * Why inventory could not be committed after payment. The cause remains after resolution.
     * Omitted when no reason was recorded. Unrecognized reasons are returned as other; new values
     * may be added. Value enum: "inventory_deduction_failed", "inventory_handoff_failed",
     * "auto_refund_required", "auto_refund_failed", "policy_resolution_failed", "other".
     */
    "inventory_exception_reason"?: "inventory_deduction_failed"
        | "inventory_handoff_failed"
        | "auto_refund_required"
        | "auto_refund_failed"
        | "policy_resolution_failed"
        | "other"
        | (string & {});
    /**
     * The merchant note supplied when resolving the inventory exception. It is not shown to the
     * buyer.
     */
    "inventory_exception_resolution_message"?: string;
    /**
     * Whether an inventory problem after payment needs attention. Value enum:
     * "paid_inventory_failed", "resolved".
     */
    "inventory_exception_status"?: "paid_inventory_failed" | "resolved" | (string & {});
    /**
     * The reservation holding stock for this order, when one exists. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "inventory_reservation_id"?: string;
    /**
     * Where this order's tracked demand is routed. Required before an order containing tracked
     * variants can hold stock. Where an order, payment link, or reservation routes inventory from:
     * a fixed Location, an inventory allocation policy, or one policy revision.
     */
    "inventory_routing_source"?: InventoryRoutingSource;
    /**
     * The invoice associated with this order. Null when the order has no invoice. A replacement
     * invoice replaces this ID; voiding an invoice preserves it. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id": string | null;
    /**
     * Items the order sells, each with its pricing, tax, and fulfillment quantities. [] (Value):
     * {@link OrderLineItem}. An item purchased in an order.
     */
    "line_items": Array<OrderLineItem>;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Unique identifier for this order, prefixed `ord_`. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /** Human-readable order number for receipts and merchant reference. */
    "order_number"?: string;
    /**
     * How the order was created. invoice means a Quick Pay invoice created the order; attaching an
     * invoice to an existing order preserves its origin. Value enum: "virtual_terminal",
     * "payment_link", "checkout", "api", "subscription", "invoice".
     */
    "origin"?: "virtual_terminal"
        | "payment_link"
        | "checkout"
        | "api"
        | "subscription"
        | "invoice"
        | (string & {});
    /**
     * When `payment_status` became `paid`, including a final capture that releases the remaining
     * balance. Set once and never changed, including after refunds. `null` when `payment_status`
     * isn't `paid`, including an order whose balance was written off without being paid. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "paid_at": string | null;
    /**
     * IDs of the payment intents created to collect this order. [] (Value): string. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_ids": Array<string>;
    /**
     * Payment intents included when `expand` names `payment_intents`. [] (Value): {@link
     * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status,
     * and capture method, returned when the payment intent is expanded.
     */
    "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
    /**
     * Payment link that created this order or started the subscription it renews. Absent for other
     * orders. Filter GET /v1/orders by payment_link_id to list a link's orders. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
     */
    "payment_link_id"?: string;
    /**
     * Collection progress. An invoice write-off also completes collection without receiving the
     * written-off amount. Value enum: "unpaid", "partially_paid", "paid".
     */
    "payment_status": "unpaid" | "partially_paid" | "paid" | (string & {});
    /**
     * The order edit waiting for its balance payment. While it is set, the units that edit removes
     * can't join a fulfillment and the order refuses another edit. `null` when there is none.
     * Omitted for buyer credentials. Always present with merchant credentials. Example:
     * "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     */
    "pending_order_edit_id"?: string | null;
    /**
     * Order that paid for this prepaid delivery. Null when this is not a prepaid delivery order.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "prepayment_order_id": string | null;
    /**
     * The order's money totals: subtotal, discounts, charges, tax, requested tip, and total. The
     * money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and
     * total.
     */
    "pricing_amounts": PricingAmounts;
    /**
     * IDs of the refunds that name this order. This includes refunds Flint makes to return a
     * payment it couldn't accept (`reason` `payment_returned`), which never count toward
     * `refund_status` or the order's refunded amounts. [] (Value): string. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_ids": Array<string>;
    /**
     * Refund progress for collected money. Refunds with `reason` `payment_returned` return money
     * the order never received and don't count. Value enum: "none", "partially_refunded",
     * "refunded".
     */
    "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Value applied to this order from items the buyer returned, such as an exchange's replacement
     * order. Included in settlement_amounts.paid_money. [] (Value): {@link
     * OrderReturnCreditSettlement}. A return credit applied to an order payment, with the amount
     * and the return and resolution it came from.
     */
    "return_credit_settlements": Array<OrderReturnCreditSettlement>;
    /**
     * ID of the return resolution that created this order as a replacement. Omitted for orders a
     * return did not create. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id"?: string;
    /**
     * How much of the order has been paid, refunded, credited, written off, and settled as tips,
     * and what is still outstanding. The bill settlement amounts plus order overpayments, settled
     * tips, debt discharged by final capture, and value order edits removed. Money collected,
     * returned, waived, and still owed on a bill.
     */
    "settlement_amounts": OrderSettlementAmounts;
    /**
     * Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes,
     * returns, and metadata or note edits continue on a closed order. Value enum: "open",
     * "closed".
     */
    "status": "open" | "closed" | (string & {});
    /**
     * Subscription summary included when `expand` names `subscription`; `null` when expanded and
     * this order does not bill a subscription. Present only when `expand` includes `subscription`;
     * `null` when expanded and there is no related subscription. anyOf[1] (Value): {@link
     * ExpandedSubscriptionSummary}. A subscription's summary fields, including status, billing
     * period, and next billing time, returned when the subscription is expanded. anyOf[2] (Value):
     * null.
     */
    "subscription"?: ((ExpandedSubscriptionSummary) | (null));
    /**
     * Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and
     * skipped renewals do not advance the cycle. Format: uint64. minimum: 0.
     */
    "subscription_cycle"?: number;
    /**
     * Time the subscriber changed delivery after this paid renewal was prepared. The order keeps
     * its committed destination until you correct it or refund and replace it. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "subscription_delivery_changed_at"?: string;
    /**
     * Position of this delivery among the deliveries one charge paid for, starting at 2. Null when
     * this is not a prepaid delivery order. Format: uint32. minimum: 2. maximum: 24.
     */
    "subscription_delivery_number": number | null;
    /**
     * ID of the subscription this order bills. Absent on an order that isn't from a subscription.
     * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id"?: string;
    /**
     * Plan summary included when `expand` names `subscription_plan`; `null` when expanded and this
     * order does not bill a subscription plan. Present only when `expand` includes
     * `subscription_plan`; `null` when expanded and there is no related subscription plan.
     * anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A subscription plan's summary
     * fields, including name, billing interval, currency, and status, returned when the plan is
     * expanded. anyOf[2] (Value): null.
     */
    "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
    /**
     * ID of the subscription plan this order bills. Absent on an order that isn't from a
     * subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id"?: string;
    /**
     * Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure
     * is allowed, and pay while open without an active attempt and with an outstanding balance or
     * payment-method setup available. Always present with merchant credentials. [] enum: "close",
     * "pay", "resolve_inventory_exception". [] (Value): string. Value enum: "close", "pay",
     * "resolve_inventory_exception".
     */
    "supported_actions"?: Array<"close" | "pay" | "resolve_inventory_exception" | (string & {})>;
    /**
     * The order's tax state: whether tax is enabled, its status, location, exemption, and
     * per-jurisdiction rows. An order's tax state, including its mode, price mode, status,
     * location, exemption, and tax breakdowns.
     */
    "tax": OrderTax;
    /**
     * Event and tickets this order sold through an event payment link. Absent on other orders.
     * Event details for a ticketed order: name, location, start time, time zone, and the tickets
     * issued.
     */
    "ticketed_event"?: TicketedEvent;
    /**
     * Tips on the order, each with its requested, settled, and refunded amounts. A tip cleared
     * before payment stays listed as canceled. [] (Value): {@link Tip}. A tip on an order, with
     * its requested, settled, and refunded amounts, status, and how it was paid.
     */
    "tips": Array<Tip>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Order version for optimistic concurrency. Send this value as the expected version when
     * changing the order. Increases with every change to the order. Ignore an order webhook
     * snapshot whose version is lower than one you have already applied. Format: int64.
     */
    "version": number;
});
/** The resource snapshot, without expansions. Webhooks omit these fields: `note`. */
export type WebhookOrderEdit = ({
    /**
     * Added order lines, in request order, with their quantities and values frozen at creation.
     * Empty when the edit added nothing. [] (Value): {@link OrderEditLineAddition}. An order line
     * added by the enclosing edit, with its value frozen at creation.
     */
    "add_line_items": Array<OrderEditLineAddition>;
    /**
     * The cost of the added lines: the sum of add_line_items[].total_money. Zero when the edit
     * added nothing. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "added_total_money": MoneyValue;
    /**
     * What the added lines cost beyond the removed value and released charges, tax included,
     * frozen when the edit was created. Zero when the edit had no balance. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_due_money": MoneyValue;
    /**
     * When the edit was canceled. `null` when the edit is not canceled. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "canceled_at": string | null;
    /**
     * Why the edit was canceled. `null` when the edit is not canceled. Value enum:
     * "merchant_request", "expired", "payment_disputed", "payment_returned", null.
     */
    "cancellation_reason": "merchant_request"
        | "expired"
        | "payment_disputed"
        | "payment_returned"
        | null
        | (string & {})
        | null;
    /**
     * Charges released by this edit, frozen at creation. Empty when no charges were released. []
     * (Value): {@link OrderEditChargeRefund}. The value an edit releases from one order charge,
     * and the part refunded to the buyer.
     */
    "charge_refunds": Array<OrderEditChargeRefund>;
    /**
     * When the item changes were applied to the order. `null` when the edit is pending or
     * canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "completed_at": string | null;
    /** When the edit was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * When Flint cancels the edit if the balance isn't paid. `null` when the edit never had a
     * balance. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string | null;
    /**
     * Stable ID of this order edit. pattern: ^oed_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     */
    "order_edit_id": string;
    /** The order this edit belongs to. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /**
     * The payment intent that collects amount_due_money. Confirm it to pay the balance. `null`
     * when the edit has no balance, and for a moment while Flint is still creating it. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string | null;
    /**
     * Reason for the edit and its refund. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock".
     */
    "reason"?: "duplicate"
        | "fraudulent"
        | "requested_by_customer"
        | "defective_product"
        | "wrong_item_shipped"
        | "never_received"
        | "not_as_described"
        | "arrived_too_late"
        | "customer_changed_mind"
        | "better_price_found"
        | "accidental_order"
        | "other"
        | "out_of_stock"
        | (string & {});
    /**
     * Refunds created for this edit. Empty when no refund is needed or processing has not created
     * it yet. [] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_ids": Array<string>;
    /**
     * Money to refund after the removed value and released charges pay for added lines. May be
     * zero; an edit with no refund money creates no refund. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "refund_money": MoneyValue;
    /**
     * Removed units and their refund amounts frozen at creation. [] (Value): {@link
     * OrderEditLineRemoval}. Removed whole units of an order line and their refund amount frozen
     * at creation. The enclosing edit identifies the order.
     */
    "remove_line_items": Array<OrderEditLineRemoval>;
    /**
     * The value of the removed units: the sum of remove_line_items[].total_money. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "removed_total_money": MoneyValue;
    /**
     * Signed noncash adjustment: positive for an edit balance below the payment minimum, negative
     * when removing previously absorbed value. Included in settlement_amounts.written_off_money,
     * never paid or refundable. Signed monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "small_balance_adjustment_money": MoneyValue;
    /**
     * Pending while waiting for a balance payment, completed once the item changes are applied, or
     * canceled when it ends without changing the order. Refund processing has its own status on
     * each refund. Value enum: "pending", "completed", "canceled".
     */
    "status": "pending" | "completed" | "canceled" | (string & {});
    /**
     * Contains cancel while pending and the payment is neither processing nor succeeded. Contains
     * retry when unrefunded_money is positive and no linked refund is pending. Empty while Flint
     * is still processing the original refund before any linked refund exists; retry becomes
     * available if that processing ends without a refund. Independent of caller permissions. []
     * enum: "cancel", "retry". [] (Value): string. Value enum: "cancel", "retry".
     */
    "supported_actions": Array<"cancel" | "retry" | (string & {})>;
    /**
     * Frozen refund money not covered by pending or succeeded allocations from refunds linked to
     * this edit. Failed allocations do not reduce it. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "unrefunded_money": MoneyValue;
    /**
     * The counter advances when status, payment_intent_id, completed_at, canceled_at or
     * cancellation_reason change. Format: uint64. minimum: 1.
     */
    "version": number;
});
/** The resource snapshot, without expansions. Webhooks omit these fields: `platform_contact`. */
export type WebhookPartnerAppInstall = ({
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The install's environment grants, at most one for each mode, live and test, that the
     * merchant approved. Omitted when the install has none. [] (Value): {@link
     * PartnerEnvironmentGrant}. A partner application's authorization to access an environment.
     */
    "environment_grants"?: Array<PartnerEnvironmentGrant>;
    /**
     * ID of the user who approved the install, or the signup's owner for an install a merchant
     * signup created. Omitted when no user is recorded. Example: "usr_01KEZF7C00YC8757ZYP9727JM0".
     */
    "installed_by_user_id"?: string;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * The merchant signup that created the merchant and this install, when one did. The installing
     * merchant reads it too. A merchant has at most one such install. It stays after a revoke, as
     * history, but Flint's emails lead to the app only until the install's first revoke. Example:
     * "msu_01KEZF7C00SRGYRMBPKRKW8V9J".
     */
    "merchant_signup_id"?: string;
    /** ID of the partner app the merchant installed. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV". */
    "partner_app_id": string;
    /**
     * Unique identifier for this partner app install, prefixed `pinst_`. Example:
     * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id": string;
    /** The app’s current name. */
    "partner_app_name": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "revoked_at"?: string;
    /**
     * Who ended the install. Omitted while the install isn't revoked, and cleared when the
     * merchant authorizes the app again. Value enum: "merchant", "partner_app".
     */
    "revoked_by"?: "merchant" | "partner_app" | (string & {});
    /**
     * ID of the user who revoked the install. Omitted when the install isn't revoked or no user
     * performed the revoke, as when the app's deletion ended it. Example:
     * "usr_01KEZF7C00YC8757ZYP9727JM0".
     */
    "revoked_by_user_id"?: string;
    /**
     * Where the install is in its lifecycle. Value enum: "pending_exchange", "active", "revoked".
     */
    "status": "pending_exchange" | "active" | "revoked" | (string & {});
    /**
     * Lifecycle actions Flint accepts now. Revoke is accepted for pending and active installations
     * and returns the current installation when it is already revoked. [] enum: "revoke". []
     * (Value): string. Value enum: "revoke".
     */
    "supported_actions": Array<"revoke" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
});
/**
 * The resource snapshot, without expansions. Webhooks omit these fields: `processing_fee_money`,
 * `processing_fee_details`, `add_on_fees`, `merchant_net_money`, `payment_collection`,
 * `remaining_refundable_money`.
 */
export type WebhookPaymentIntent = ({
    /**
     * The amount requested from the buyer, including any tip_money. Capturing doesn't change it:
     * after a partial capture it still shows the requested amount, and captured_money shows what
     * was collected. On a standalone payment intent, PATCH can change it only before the first
     * confirmation attempt. An amount_money or tip_money change that leaves too little for stored
     * splits returns LIMIT_EXCEEDED at the changed field with minimum_money. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Effective Flint deadline to capture a manual-capture hold: the earlier of the provider
     * capture deadline and any order resource guarantee. Order guarantees last at most 24 hours
     * from the payment attempt start and may end earlier. Capture is refused at or after this
     * time, even while status is requires_capture. Omitted until a hold is placed. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "authorization_expires_at"?: string;
    /**
     * When the processor authorized the payment. Absent until then. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "authorized_at"?: string;
    /**
     * The amount the processor authorized. It always equals amount_money and doesn't change once
     * set, even when a capture collects more. On a payment intent canceled with
     * cancellation_reason payment_returned, it equals the authorization Flint released instead.
     * Absent until the payment is authorized, and on payments canceled before authorization.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "authorized_money"?: MoneyValue;
    /**
     * Flint-normalized reason the payment intent was canceled. Present only while status is
     * canceled. A cancellation without a specific reason returns payment_canceled. Absent while
     * last_payment_error.code is payment_blocked and Flint has not identified money to return.
     * Unknown processor values are returned as payment_canceled. Value enum:
     * "requested_by_customer", "duplicate", "fraudulent", "abandoned", "invoice_payment_failed",
     * "invoice_voided", "order_closed", "payment_canceled", "payment_returned".
     */
    "cancellation_reason"?: "requested_by_customer"
        | "duplicate"
        | "fraudulent"
        | "abandoned"
        | "invoice_payment_failed"
        | "invoice_voided"
        | "order_closed"
        | "payment_canceled"
        | "payment_returned"
        | (string & {});
    /**
     * The part of the authorization you can still capture. Positive only while status is
     * requires_capture, and zero after you capture or cancel or the authorization expires. The
     * authorization lapses at authorization_expires_at, and a capture attempted after that fails
     * even if this is positive. Absent until the payment is authorized. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "capturable_money"?: MoneyValue;
    /** When money is collected. Defaults to automatic. Value enum: "automatic", "manual". */
    "capture_method"?: "automatic" | "manual" | (string & {});
    /**
     * When money was captured. For automatic capture, this is when the payment succeeded. Absent
     * until capture. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "captured_at"?: string;
    /**
     * The amount collected from the buyer, including captured_tip_money. Reconcile revenue and
     * print receipts from this amount, not amount_money. Zero while a hold is open, and positive
     * whenever status is succeeded. After an overcapture it is above authorized_money. Also
     * positive on a payment intent canceled with cancellation_reason payment_returned: Flint
     * captured the money and is returning it through a refund with reason payment_returned.
     * processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the
     * payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "captured_money"?: MoneyValue;
    /**
     * The part of captured_money that is a tip: the capture's tip_money when it sent one,
     * otherwise the tip the authorization carried, at most captured_money. tip_money keeps the tip
     * the authorization carried. Refunds return it last. Absent until the payment is captured.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "captured_tip_money"?: MoneyValue;
    /**
     * Flint checkout session ID associated with this payment, when present. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_id"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at"?: string;
    /**
     * The linked customer. Returned only with expand=customer. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** Customer linked to this payment intent. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
    "customer_id"?: string;
    /**
     * Whether the customer was present for the most recent confirmation. absent means Flint
     * charged a saved card without them, as a merchant-initiated payment on its stored credential.
     * Subscription renewals and automatic invoice charges are absent, and other payments are
     * absent only when confirmed or paid with customer_presence absent. A customer who pays any of
     * them with a card they enter makes it present. Each confirmation sets it again. Value enum:
     * "present", "absent".
     */
    "customer_presence": "present" | "absent" | (string & {});
    /**
     * Dispute state of this payment. none means no dispute or inquiry is open or recorded. The
     * inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the
     * dispute with GET /v1/disputes for its deadline and evidence. Value enum: "none",
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other".
     */
    "dispute_status"?: "none"
        | "inquiry_needs_response"
        | "inquiry_under_review"
        | "inquiry_closed"
        | "needs_response"
        | "under_review"
        | "won"
        | "lost"
        | "prevented"
        | "other"
        | (string & {});
    /**
     * Caller-owned identifier for this resource in an external system. `null` when no external
     * reference ID has been set on the payment intent. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string | null;
    /**
     * All-time failed-attempt count. Present on merchant reads; omitted for buyer credentials.
     * Format: int64.
     */
    "failed_attempt_count"?: number;
    /**
     * Newest 50 failed attempts, newest first, with merchant-only card and buyer evidence frozen
     * at admission. Older attempts can be included in failed_attempt_count. [] (Value): {@link
     * FailedPaymentAttempt}. Merchant-only evidence from one failed payment attempt. Fields absent
     * from the original attempt are omitted.
     */
    "failed_attempts"?: Array<FailedPaymentAttempt>;
    /**
     * Present when a payment provider asked Flint to pause fulfillment for this payment. While its
     * status is active, open fulfillments on the order are on hold with reason payment_review.
     * payment_intent.fulfillment_hold_updated is sent when the hold starts and when it lifts. A
     * hold on fulfillment tied to a payment, with the reason, the action required, and whether the
     * hold is active or released.
     */
    "fulfillment_hold"?: PaymentFulfillmentHold;
    /**
     * The Idempotency-Key of the request that created this resource. `null` when that request sent
     * no key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource. Buyer sessions on routes
     * shared with merchants get `null`. `/v1/me` responses do not include this field.
     */
    "idempotency_key"?: string | null;
    /**
     * The linked invoice. Returned only with expand=invoice. Present only when `expand` includes
     * `invoice`; `null` when expanded and there is no related invoice. anyOf[1] (Value): {@link
     * ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and paid,
     * outstanding, and refunded amounts, returned when the invoice is expanded. anyOf[2] (Value):
     * null.
     */
    "invoice"?: ((ExpandedInvoiceSummary) | (null));
    /**
     * Invoice this payment intent collects, when it pays an invoice. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id"?: string;
    /**
     * The invoice installment this payment collects. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * Most recent payment error. Null when no payment error is recorded. anyOf[1] (Value): {@link
     * PaymentErrorSummary}. A summary of why a payment attempt failed, with a normalized error
     * code, a message, the failure time, and remediation. anyOf[2] (Value): null.
     */
    "last_payment_error": ((PaymentErrorSummary) | (null));
    /**
     * The order payment attempt that most recently used this payment intent. Start times count to
     * the second; of attempts that started in the same second, the one with the highest
     * order_payment_attempt_id is named. `null` when no attempt has used it yet; omitted for
     * payment intents without an order. It changes only when an attempt starts using this payment
     * intent, which advances version. Returned with merchant credentials; omitted with buyer and
     * checkout credentials. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
     */
    "latest_order_payment_attempt_id"?: string | null;
    /** Merchant that owns this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id"?: string;
    /**
     * Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't returned.
     * Always present with merchant credentials. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * The linked order. Returned only with expand=order. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded. anyOf[2]
     * (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /**
     * The order edit whose balance this payment collects. Omitted when this payment doesn't
     * collect an edit's balance. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     */
    "order_edit_id"?: string;
    /**
     * Order this payment intent belongs to. Create it through the order and confirm it with POST
     * /v1/orders/{order_id}/pay. Capture and cancel use POST
     * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
     * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Whether one capture can collect more than the authorization, and the most it can collect.
     * Present once a payment with request_overcapture true is authorized. Read it to show the
     * limit; capture enforces it. Whether one capture can collect more than the authorization.
     */
    "overcapture"?: PaymentIntentOvercapture;
    /**
     * How the payment was started. Fixed when the payment intent is created. Value enum:
     * "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api".
     */
    "payment_flow": "checkout"
        | "payment_link"
        | "invoice"
        | "subscription_initial"
        | "subscription_renewal"
        | "virtual_terminal"
        | "api"
        | (string & {});
    /** Flint payment intent ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id": string;
    /**
     * Payment options the buyer can use for this payment. [] enum: "card", "apple_pay",
     * "google_pay", "affirm", "ach_debit", "card_present". [] (Value): string. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
     */
    "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {})>;
    /**
     * Summary of the card or bank account used for the payment. Absent until a payment source is
     * attached. A summary of the payment source used for a payment, by funding-method family, with
     * card or bank account display details.
     */
    "payment_source"?: PaymentSourceSummary;
    /**
     * The platform fee a partner app charges on this payment, when it created the payment with an
     * install token and a fee. Absent when the payment carries none. Returned only to merchant
     * credentials; omitted for buyer and checkout credentials. The platform fee a partner app
     * charges on this payment. The merchant pays it beside processing_fee_money and add_on_fees,
     * and merchant_net_money subtracts it.
     */
    "platform_fee"?: PaymentIntentPlatformFee;
    /**
     * The reader the payment is or was last presented on. Set when Flint presents it and kept
     * afterward. While processing or requires_action with a reader_id and no
     * payment_source.card.card_present, the payment is on that reader now. After a card is read,
     * the payment can stay processing while Flint captures it. Example:
     * "rdr_01KEZF7C007JA0G24M7SD6P46C".
     */
    "reader_id"?: string;
    /**
     * Email address for this payment's receipt. When it isn't set, Flint uses the customer's
     * email. `null` when no receipt email has been set on the payment intent. Format: email.
     * maxLength: 255. Example: "buyer@example.com".
     */
    "receipt_email"?: string | null;
    /**
     * Last time Flint can refund this payment through the original payment method. A refund
     * submitted at exactly this time is accepted; after it, refunds through the original payment
     * method are refused. Today only Affirm has a refund window: 120 days after the payment
     * settles. `null` when the method has no refund window, the payment has not succeeded with
     * captured money, or its capture time is missing. Always present with merchant credentials.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "refund_expires_at"?: string | null;
    /**
     * How much of captured_money has been refunded, including value issued as store credit, based
     * on refunded_money. Value enum: "none", "partially_refunded", "refunded".
     */
    "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Total refunded against captured_money, including value issued as store credit and processor
     * refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has
     * been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "refunded_money"?: MoneyValue;
    /**
     * The part of the authorization returned to the buyer without being charged: the uncaptured
     * remainder after a partial capture, or the whole authorization after a cancellation or
     * expiry. It was never collected, so it needs no refund and can't be captured later. Zero
     * after a capture at or above the authorization. Absent until the payment is authorized.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "released_money"?: MoneyValue;
    /**
     * Whether one capture may collect more than the authorization where the card network allows
     * it. Fixed at create. Always present with merchant credentials; omitted with buyer and
     * checkout credentials.
     */
    "request_overcapture"?: boolean;
    /**
     * Flint return ID associated with this payment, when present. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: string;
    /**
     * The return resolution whose balance this payment collects. Set for exchange balances and
     * corrections. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id"?: string;
    /**
     * Risk assessment. Always present with merchant credentials. `null` when the payment intent's
     * latest payment attempt has no completed risk assessment, such as before its first
     * confirmation. Omitted with the checkout credential. anyOf[1] (Value): {@link PaymentRisk}.
     * The risk assessment for a payment intent, with its risk level, score, outcome, and any
     * matched rule or review. anyOf[2] (Value): null.
     */
    "risk"?: ((PaymentRisk) | (null));
    /**
     * The payment option the most recent confirmation used. Absent until the payment intent is
     * first confirmed. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit",
     * "card_present".
     */
    "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {});
    /**
     * Top-level PaymentSplit children in their current state, embedded whole. Empty when the
     * payment has no splits. Child changes do not send payment_intent.updated. Omitted for buyer
     * and checkout credentials. [] (Value): {@link PaymentSplit}. A top-level child of a payment
     * intent dividing the collecting merchant's payment funds with one seller. Both parties read
     * this same resource with their own credentials.
     */
    "splits"?: Array<PaymentSplit>;
    /**
     * The text shown on the buyer's card or bank statement for this payment. `null` until the
     * charge is created. `null` when the provider supplies no descriptor. Frozen when the charge
     * is created.
     */
    "statement_descriptor": string | null;
    /**
     * Lifecycle status. requires_payment_method covers both a new payment intent and one whose
     * last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired
     * are final. Refunds and disputes never change status. Value enum: "requires_payment_method",
     * "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled",
     * "succeeded", "expired".
     */
    "status": "requires_payment_method"
        | "requires_confirmation"
        | "requires_action"
        | "processing"
        | "requires_capture"
        | "canceled"
        | "succeeded"
        | "expired"
        | (string & {});
    /**
     * The subscription whose billing charged this payment: its first charge, a renewal, a retry or
     * a setup fee. Not set for the checkout payment that created a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id"?: string;
    /** Opaque payment reference to share with merchant support. Do not parse its format. */
    "support_reference": string;
    /**
     * Verbs this payment intent accepts now, each a POST to
     * /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored order facts and
     * can change without a payment intent version change. Order legs list confirm when a single
     * leg can pay the order or an open attempt can continue it. Several unpaid legs, selected gift
     * cards, or automatic tax with a leg below the balance require pay_order instead. Invoice
     * payments list only cancel. An unused first-period subscription payment lists cancel once the
     * subscription is canceled. Order edit payments list confirm while awaiting payment details or
     * action. A listed action can still be refused due to an open risk review, an order payment
     * attempt, a closed order, or the merchant account. A managed_by_owner refusal names the owner
     * and its command in remediation.next_actions. The merchant list is credential-independent.
     * Checkout credentials receive that list filtered to confirm and cancel on their own session's
     * intents, never capture. Customer sessions omit this field. New actions may be added. []
     * enum: "confirm", "capture", "cancel". [] (Value): string. Value enum: "confirm", "capture",
     * "cancel".
     */
    "supported_actions": Array<"confirm" | "capture" | "cancel" | (string & {})>;
    /**
     * Portion of amount_money that is a tip. Uses amount_money's currency and is at most
     * amount_money. `null` when no tip is set, and for an order payment until its payment attempt
     * has moved past requires_payment_method and requires_confirmation. An order payment without a
     * tip can return an amount of 0 instead. anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     */
    "tip_money"?: ((MoneyValue) | (null));
    /**
     * Why a bank debit is taken. Set only when payment_options includes ach_debit, and fixed once
     * the payment intent exists. Value enum: "goods", "services", "other".
     */
    "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at"?: string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
});
/**
 * Previous values of changed top-level resource fields. A value is null when the field was absent
 * before the change. Excludes updated_at, version, clock-derived values, recorded observations,
 * and linked fields.
 */
export type WebhookPreviousAttributes = {
    [key: string]: unknown;
};
/**
 * The resource snapshot, without expansions. Webhooks omit these fields: `variants`,
 * `matched_variant`, `modifier_set`.
 */
export type WebhookProduct = ({
    /** Number of active variants belonging to the product. Format: int32. */
    "active_variant_count"?: number;
    /**
     * Always present. Empty collections are returned as []. [] (Value): {@link CategoryReference}.
     * A reference to a product category by ID, handle, and name.
     */
    "categories": Array<CategoryReference>;
    /**
     * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at"?: string;
    /**
     * The product's default variant, when one is set. A specific purchasable version of a product.
     */
    "default_variant"?: ProductVariant;
    /**
     * Identifier of the variant chosen as this product's default, when one is set. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /**
     * Delivery readiness aggregated across the product's non-archived variants. Value enum:
     * "configured", "action_required", "not_applicable".
     */
    "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
    /** Description of the product shown to buyers. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Images attached to this resource, in display order. The first image is primary. [] (Value):
     * {@link ImageAttachment}. An image attached to a resource, with its display properties and
     * attachment metadata.
     */
    "images": Array<ImageAttachment>;
    /** Whether the product is active and has at least one active variant. */
    "is_available_for_sale"?: boolean;
    /**
     * Identifier of the merchant that owns this resource. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * ID of the modifier set attached to the product. `null` when no modifier set is attached.
     * Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR".
     */
    "modifier_set_id": string | null;
    /** Product name shown to buyers. */
    "name": string;
    /** Number of active options belonging to the product. Format: int32. */
    "option_count"?: number;
    /**
     * Product options and their non-archived values. Empty when the product has no options. []
     * (Value): {@link ProductOption}. A choice that defines a product's variants.
     */
    "options": Array<ProductOption>;
    /**
     * Lowest and highest base unit prices among active variants, before any quantity price breaks.
     * Omitted when there are no active variants or their currencies differ. The lowest and highest
     * unit prices across a product's variants.
     */
    "price_range"?: ProductPriceRange;
    /** Stable identifier of the product. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". */
    "product_id": string;
    /**
     * Kind of goods or service this product represents. New variants of digital products store
     * digital_goods when line_item_tax_category is omitted; explicit categories are preserved.
     * Value enum: "physical", "service", "fee", "digital", "gift_card".
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
    /**
     * Product lifecycle status. Archived products remain readable and cannot be edited. Value
     * enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at"?: string;
    /** Number of non-archived variants belonging to the product. Format: int32. */
    "variant_count"?: number;
    /**
     * Current resource version. Send it as expected_version to reject a write if the resource has
     * changed. Format: uint64. minimum: 0.
     */
    "version": number;
});
/**
 * The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`,
 * `inventory_availability`.
 */
export type WebhookProductVariant = ({
    /** Barcode assigned to this sellable item. */
    "barcode"?: string;
    /**
     * Reference unit price for sale display, in the same currency and strictly greater than
     * unit_price_money. Null when no compare-at price is set. Does not affect charges or quantity
     * price breaks. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     */
    "compare_at_price_money": ((MoneyValue) | (null));
    /**
     * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at"?: string;
    /**
     * Reason the variant's delivery configuration needs attention. Value enum:
     * "delivery_profile_missing", "delivery_profile_inactive".
     */
    "delivery_configuration_reason"?: "delivery_profile_missing" | "delivery_profile_inactive" | (string & {});
    /**
     * Whether the variant's delivery configuration is ready, needs attention, or does not apply.
     * Value enum: "configured", "action_required", "not_applicable".
     */
    "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
    /**
     * Identifier of the assigned delivery profile. Digital and service variants opt in to manual
     * delivery with a required manual profile whose allowed_types is exactly [digital] or
     * [service], matching the product type. Without a profile, delivery does not apply. Example:
     * "dprof_01KEZF7C0020J13FQYNY9854R0".
     */
    "delivery_profile_id"?: string;
    /**
     * Images shown for the variant: its own gallery when nonempty, otherwise the product's
     * gallery. [] (Value): {@link ImageAttachment}. An image attached to a resource, with its
     * display properties and attachment metadata.
     */
    "effective_images": Array<ImageAttachment>;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Gift card issuance terms. face_value_money is the reference denomination; unit_price_money
     * is its price. Custom amounts use that price-to-value ratio, rounded to the nearest cent with
     * ties up. Gift card settings on a product variant: its `face_value_money`, price mode (face
     * value or discounted), and bounds for custom amounts.
     */
    "gift_card_configuration"?: GiftCardProductConfiguration;
    /**
     * The variant's own images in display order. An empty gallery inherits the product's images.
     * [] (Value): {@link ImageAttachment}. An image attached to a resource, with its display
     * properties and attachment metadata.
     */
    "images": Array<ImageAttachment>;
    /**
     * The inventory item this variant consumes. Present exactly when inventory_tracking is
     * tracked. Several variants may share one inventory item. Example:
     * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id"?: string;
    /**
     * Whether sales of this variant consume an inventory item. Value enum: "not_tracked",
     * "tracked".
     */
    "inventory_tracking": "not_tracked" | "tracked" | (string & {});
    /**
     * Whether the variant and its product are both active. Stock isn't considered;
     * `inventory_availability` reports it on reads.
     */
    "is_available_for_sale": boolean;
    /**
     * Whether effective_images comes from the product's gallery because this variant's gallery is
     * empty.
     */
    "is_inheriting_product_images": boolean;
    /**
     * License key terms. Null when the variant has no license key setting. Replaced as a whole:
     * send every field you want to keep. Only product_type digital supports this setting. It adds
     * no delivery requirement and is independent of the delivery profile. Send null to remove
     * every value you set in this section. Omission preserves it on update. anyOf[1] (Value):
     * {@link LicenseKeyConfiguration}. License key terms. Null limits mean unlimited activations
     * or no expiry. A null generated key prefix means no prefix. anyOf[2] (Value): null.
     */
    "license_key_configuration": ((LicenseKeyConfiguration) | (null) | (unknown));
    /**
     * Stored Flint line-item tax category. New digital-product variants default to digital_goods
     * when omitted. The stored value remains editable. Unset uses the merchant default. Value
     * enum: "general", "physical_goods", "digital_goods", "software", "saas", "services",
     * "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission"
        | (string & {});
    /**
     * Identifier of the merchant that owns this resource. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * ID of the modifier set attached to the variant. `null` when no modifier set is attached.
     * Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR".
     */
    "modifier_set_id": string | null;
    /** Variant name that distinguishes it from the product's other variants. */
    "name"?: string;
    /** Display order among the product's variants, starting at zero. Format: int32. */
    "position": number;
    /**
     * Identifier of the product this variant belongs to. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id": string;
    /**
     * Net unit prices in ascending minimum_quantity order. The largest minimum not above the line
     * quantity applies; otherwise the base unit price applies. Empty when no breaks are
     * configured. Gift card variants have no breaks. maxItems: 10. [] (Value): {@link
     * QuantityPriceBreak}. A net unit price that applies when one catalog line reaches
     * minimum_quantity.
     */
    "quantity_price_breaks": Array<QuantityPriceBreak>;
    /**
     * Calendar release date in YYYY-MM-DD format. Null when no release date is set. Lines created
     * while this date is after today in the merchant timezone are pre-orders. Existing order lines
     * keep their release date. Format: date. Example: "2026-08-02".
     */
    "release_date": string | null;
    /**
     * Always present. Empty collections are returned as []. [] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** Stock keeping unit assigned to this sellable item. */
    "sku"?: string;
    /**
     * Variant lifecycle status. Archived variants remain readable and cannot be edited. Value
     * enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** Whether this item is subject to tax. */
    "taxable"?: boolean;
    /**
     * Per-unit measurement. Omitted when unknown. Package or item dimensions as `length`, `width`,
     * and `height` in the given `unit`.
     */
    "unit_dimensions"?: Dimensions;
    /**
     * Base unit price before quantity price breaks, in the currency's smallest unit. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * Per-unit measurement. Omitted when unknown. A weight value in grams, kilograms, ounces, or
     * pounds, used in delivery profile configuration.
     */
    "unit_weight"?: Weight;
    /**
     * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at"?: string;
    /** Stable identifier of the product variant. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id": string;
    /**
     * Current resource version. Send it as expected_version to reject a write if the resource has
     * changed. Format: uint64. minimum: 0.
     */
    "version": number;
});
/** The resource snapshot, without expansions. Webhooks omit these fields: `codes`. */
export type WebhookPromotion = ({
    /**
     * Discount effect and how it applies to eligible items or charges. A flat application method
     * whose type selects its effect fields.
     */
    "application_method": PromotionApplicationMethod;
    /**
     * Whether the promotion can apply right now: it is active, inside its schedule, under its
     * max_uses, and, when code-gated, has at least one redeemable code.
     */
    "available": boolean;
    /**
     * Read-only rollup of this promotion's codes. Present only on code-gated promotions; automatic
     * promotions omit it. A count of a promotion's codes, including how many are redeemable now
     * and the newest redeemable code.
     */
    "codes_summary"?: PromotionCodesSummary;
    /**
     * Which promotion discount classes this promotion may share an order with. Both promotions
     * must allow each other's class. Manual discounts are ignored. See Promotion for the
     * evaluation order. Which kinds of discounts a promotion can combine with: line item, order,
     * and service charge discounts.
     */
    "combines_with": PromotionCombinesWith;
    /**
     * When the promotion was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at"?: string;
    /** Optional description of the promotion for your own records. */
    "description"?: string;
    /**
     * Whether the promotion discounts the order, individual line items, or service charges. Value
     * enum: "order", "line_item", "service_charge".
     */
    "discount_class": "order" | "line_item" | "service_charge" | (string & {});
    /** Buyer-facing promotion name shown in checkout and order discount surfaces. */
    "display_name": string;
    /**
     * Conditions an order must satisfy for the promotion to apply. Omitted when the promotion has
     * no eligibility conditions. A rule group is an object with exactly one nonempty all (AND) or
     * any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid.
     * Omit the field for no rules, or send null where the field is clearable. Responses list rules
     * before nested groups. Under any, a nested group containing only one rule reads back as that
     * rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal
     * scope. These deterministic normalizations stabilize after one round trip.
     * matched_items.subtotal sums the line items matched by the line_item.* rules in the same all
     * group, including its nested groups.
     */
    "eligibility_rules"?: PromotionRuleGroup;
    /**
     * Optional group and priority used to choose one promotion from competing promotions in the
     * same group. See Promotion for the evaluation order. Only one promotion in an exclusivity
     * group continues. See Promotion for the evaluation order.
     */
    "exclusivity"?: PromotionExclusivity;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Maximum number of redemptions across all codes and automatic applications. Omitted when
     * there is no redemption limit. Format: int64.
     */
    "max_uses"?: number;
    /**
     * Maximum reserved and redeemed uses per identified customer across every code and automatic
     * or ID-based application. Checked atomically when payment starts. Failed, canceled, or
     * expired attempts release their reservation; refunds do not restore uses. Counts only within
     * the same merchant and environment; live and test mode are separate. Without an identified
     * customer, returns 409 PROMOTION_DECLINED with reason customer_required. Null when there is
     * no per-customer limit. Format: int64. minimum: 1.
     */
    "max_uses_per_customer": number | null;
    /**
     * Identifier of the merchant that owns the promotion. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Key-value data you attach to the promotion. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Internal promotion name for dashboards, searching, and reporting. */
    "name": string;
    /** Unique identifier for the promotion. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V". */
    "promotion_id": string;
    /**
     * Whether the promotion applies automatically when its rules match or requires a promotion
     * code. Value enum: "automatic", "code".
     */
    "redemption_type": "automatic" | "code" | (string & {});
    /**
     * Optional start and end times that limit when the promotion can apply. When a promotion is
     * active, with a start time, an end time, and the time zone it was entered in.
     */
    "schedule"?: PromotionSchedule;
    /**
     * Lifecycle status. Set active or inactive with PATCH; DELETE sets archived. An active
     * promotion can still be unavailable: read available. Value enum: "active", "inactive",
     * "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * Why available is false. Present only when available is false. Value enum: "inactive",
     * "archived", "not_yet_started", "expired", "exhausted", "no_active_codes".
     */
    "unavailable_reason"?: "inactive"
        | "archived"
        | "not_yet_started"
        | "expired"
        | "exhausted"
        | "no_active_codes"
        | (string & {});
    /**
     * When the promotion was last updated, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at"?: string;
    /** Number of times the promotion has been redeemed. Format: int64. */
    "uses_count": number;
    /**
     * Persisted owned-state version. Clock-based availability and expanded resources do not
     * advance this counter. Format: uint64. minimum: 1.
     */
    "version": number;
});
/** The resource snapshot, without expansions. Webhooks omit these fields: `promotion`. */
export type WebhookPromotionCode = ({
    /**
     * Whether a buyer can redeem the code right now: the code is active, not expired, and under
     * its max_uses, and its promotion is available.
     */
    "available": boolean;
    /** Code a buyer enters to redeem the promotion. */
    "code": string;
    /**
     * When the promotion code was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /**
     * Only this identified customer can redeem the code. The customer must belong to the same
     * merchant and environment. A checkout may use its merchant-named or email-verified customer;
     * a typed email does not identify a customer. Null when the code is unbound. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string | null;
    /**
     * When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the
     * code does not expire. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string;
    /**
     * Maximum number of times this code can be redeemed. Omitted when the code has no redemption
     * limit. Format: int64.
     */
    "max_uses"?: number;
    /**
     * Identifier of the merchant that owns the promotion code. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id": string;
    /**
     * Key-value data you attach to the promotion code. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Unique identifier for the promotion code. Example: "pcode_01KEZF7C00JCC7QXWC262EF05T". */
    "promotion_code_id": string;
    /**
     * Identifier of the promotion this code redeems. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     */
    "promotion_id": string;
    /**
     * Lifecycle status: active, inactive, or archived. Set active or inactive with PATCH; DELETE
     * sets archived. An active code can still be unavailable: read available. Value enum:
     * "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * IANA zone the code's times were entered in, used for display. expires_at is an absolute
     * timestamp, so this does not change when the code expires.
     */
    "timezone"?: string;
    /**
     * Why available is false. Present only when available is false. The code's own state is
     * reported first; promotion_unavailable means the code is usable but its promotion is not.
     * Value enum: "archived", "inactive", "expired", "exhausted", "promotion_unavailable".
     */
    "unavailable_reason"?: "archived" | "inactive" | "expired" | "exhausted" | "promotion_unavailable" | (string & {});
    /**
     * When the promotion code was last updated, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "updated_at": string;
    /** Number of times this code has been redeemed. Format: int64. */
    "uses_count": number;
    /**
     * Persisted owned-state version. Clock-based availability and expanded resources do not
     * advance this counter. Format: uint64. minimum: 1.
     */
    "version": number;
});
/**
 * The resource snapshot, without expansions. Webhooks omit these fields:
 * `active_payment_intent_id`.
 */
export type WebhookReader = ({
    /**
     * Smart readers only, and omitted once the reader is archived. Observed reader state: it
     * changes without a write, doesn't advance `version`, and sends no event. Don't gate a sale on
     * it: Flint checks the reader itself before it sends a payment. Observed connectivity of a
     * smart reader. Flint refreshes it when it sends or cancels a payment or simulates one, and
     * every five minutes for active live smart readers.
     */
    "connectivity"?: ReaderConnectivity;
    /** When the reader was registered. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader, the
     * phone it runs on. Omitted when none is set. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string;
    /**
     * `true` for a sandbox simulated reader, registered with `registration_code: simulated-s700`.
     */
    "is_simulated": boolean;
    /**
     * The location the reader is at. Set at registration and never changed: to move a reader,
     * archive it and register it again. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /**
     * Your key-value pairs for the reader. Caller-owned key-value data stored on a resource. Keys
     * starting with flint_ are reserved for Flint and are not returned. Writes follow the limits
     * on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
     * them.
     */
    "metadata": MetadataMap;
    /**
     * The smart reader's model, read from the reader at registration. Smart readers only. Value
     * enum: "stripe_reader_s700", "stripe_reader_s710", "other".
     */
    "model"?: "stripe_reader_s700" | "stripe_reader_s710" | "other" | (string & {});
    /** Your label for the reader. minLength: 1. maxLength: 255. */
    "name": string;
    /** Unique identifier for the reader. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". */
    "reader_id": string;
    /**
     * The smart reader's serial number, read from the reader at registration. Smart readers only.
     */
    "serial_number"?: string;
    /** Whether the reader can take payments. Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /**
     * What kind of reader it is. A smart reader is driven from your server; a Tap to Pay reader is
     * a phone driven by the Stripe Terminal SDK in your app. Value enum: "smart_reader",
     * "tap_to_pay".
     */
    "type": "smart_reader" | "tap_to_pay" | (string & {});
    /** When the reader last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
});
/** How Flint signs requests to this endpoint. Value enum: "jwt", "hmac". */
export type WebhookSigningMethod = "jwt" | "hmac" | (string & {});
/** How Flint signs requests to this endpoint. Value enum: "jwt", "hmac". */
export type WebhookSigningMethodInput = "jwt" | "hmac";
/** Work required to deliver an order's items. */
export type WebhookSnapshotFulfillment = {
    /**
     * Current hold details. Present exactly when status is on_hold. A hold on a fulfillment, with
     * its reason, who placed it, and when it became active.
     */
    "active_hold"?: FulfillmentHold;
    /**
     * Order charges associated with this fulfillment. [] (Value): {@link FulfillmentChargeLink}.
     * Links a fulfillment to an order charge by `order_charge_id`.
     */
    "charges"?: Array<FulfillmentChargeLink>;
    /**
     * When the fulfillment was completed. Mirrors the completion time for its type: delivered_at
     * for shipment, local delivery, and digital fulfillments, picked_up_at for pickup,
     * service_details.completed_at for service fulfillments, and the order's paid_at for handovers
     * completed at payment. Omitted until a completion time is recorded. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "completed_at"?: string;
    /**
     * When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /**
     * Customer receiving this fulfillment, when one is set. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Delivery choice group that created this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Always present with merchant
     * credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     */
    "delivery_choice_group_id"?: string | null;
    /**
     * Execution leg of the selected delivery option that created this fulfillment. `null` when the
     * merchant created the fulfillment or checkout created it without a delivery quote. Always
     * present with merchant credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
     */
    "delivery_execution_leg_id"?: string | null;
    /**
     * Delivery method chosen for this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Also `null` when it was created
     * before this field was added. Always present with merchant credentials. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_id"?: string | null;
    /**
     * Delivery selection that created this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Always present with merchant
     * credentials. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     */
    "delivery_selection_id"?: string | null;
    /**
     * Device associated with the fulfillment, when one is recorded. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string;
    /**
     * Delivery URL and completion time for a digital fulfillment. Details of a digital
     * fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`.
     */
    "digital_details"?: DigitalFulfillmentDetails;
    /**
     * First time this fulfillment reached dispatched. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "dispatched_at"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** Stable identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
    "fulfillment_id": string;
    /**
     * The Idempotency-Key of the request that created this resource. `null` when that request sent
     * no key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource. Buyer sessions on routes
     * shared with merchants get `null`. `/v1/me` responses do not include this field.
     */
    "idempotency_key"?: string | null;
    /**
     * Order lines and quantities allocated to this fulfillment. [] (Value): {@link
     * FulfillmentLineItem}. An order line item and quantity included in a fulfillment, with the
     * modifiers applied to it.
     */
    "line_items": Array<FulfillmentLineItem>;
    /**
     * Courier, delivery window, and handoff details for a local delivery fulfillment. Details of a
     * local delivery fulfillment: courier, timing window, instructions, and tracking. Some fields
     * are omitted for credentials that don't act for the verified customer.
     */
    "local_delivery_details"?: DeliveryFulfillmentDetails;
    /**
     * Merchant location responsible for this fulfillment. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Caller-owned key-value metadata associated with the fulfillment. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Order summary returned when the order relationship is expanded. Present only when `expand`
     * includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** Order whose items this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /**
     * Human-readable number of the order this fulfillment belongs to. Omitted when the order has
     * no number.
     */
    "order_number"?: string;
    /**
     * Terminal outcome details. Present exactly when status is no_show. The terminal outcome
     * recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred.
     */
    "outcome"?: FulfillmentOutcome;
    /**
     * Packages associated with this fulfillment. [] (Value): {@link ExpandedPackageSummary}. A
     * package's summary fields, including carrier, tracking, status, and supported actions,
     * returned when the package is expanded.
     */
    "packages"?: Array<ExpandedPackageSummary>;
    /**
     * First time this fulfillment reached packed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "packed_at"?: string;
    /**
     * First time this fulfillment reached picked. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "picked_at"?: string;
    /**
     * Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup details. For
     * a pickup that checkout creates, location_name, address, and instructions name the store the
     * buyer chose and the delivery method's pickup instructions. The note the buyer left for the
     * store is in recipient.instructions.
     */
    "pickup_details"?: PickupFulfillmentDetails;
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. The recipient of a fulfillment, with name, email, phone, address, and handling
     * instructions.
     */
    "recipient"?: FulfillmentRecipient;
    /**
     * Derived start of the service schedule or pickup, local delivery, or shipment window. Null
     * when no schedule is booked, including digital fulfillments. Details remain the authoritative
     * schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last
     * descending. Sorting by due_at compares this same value with nulls last ascending and first
     * descending. Ties use fulfillment_id in the same direction. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "scheduled_start_at": string | null;
    /**
     * Schedule and completion details for a service fulfillment. Details of a service fulfillment:
     * the scheduled start and end, timezone, completion time, and notes.
     */
    "service_details"?: ServiceFulfillmentDetails;
    /**
     * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
     * fulfillments with at least one value. Details of a shipment fulfillment: the shipping
     * window, timezone, and when the shipment was handed to the carrier.
     */
    "shipment_details"?: ShipmentFulfillmentDetails;
    /**
     * Shipments associated with this fulfillment. [] (Value): {@link ExpandedShipmentSummary}. A
     * shipment's summary fields, including direction, status, and package count, returned when the
     * shipment is expanded.
     */
    "shipments"?: Array<ExpandedShipmentSummary>;
    /**
     * Current fulfillment lifecycle status. Read supported_actions for available transitions. -
     * `pending`: Work has not started and has not been accepted. Approval may be required before
     * work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. -
     * `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a
     * supported forward action. - `in_progress`: Work has started and is not yet ready or
     * complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
     * `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was
     * intentionally canceled and will not continue. - `failed`: The fulfillment could not be
     * completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The
     * fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or
     * provider preparation is underway. - `picked`: The assigned items have been picked. -
     * `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its
     * origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome
     * for the recorded reason. Value enum: "pending", "accepted", "on_hold", "in_progress",
     * "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
     * "dispatched", "no_show".
     */
    "status": "pending"
        | "accepted"
        | "on_hold"
        | "in_progress"
        | "ready"
        | "completed"
        | "canceled"
        | "failed"
        | "scheduled"
        | "preparing"
        | "picked"
        | "packed"
        | "dispatched"
        | "no_show"
        | (string & {});
    /**
     * Read-only lifecycle actions accepted now, based on the fulfillment, its order payment
     * status, holds, and shipment progress. Empty when none are available. Values name the verb
     * route with hyphens replaced by underscores. Always present with merchant credentials. []
     * enum: "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
     * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule",
     * "start". [] (Value): string. Value enum: "accept", "cancel", "complete", "dispatch", "fail",
     * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start".
     */
    "supported_actions"?: Array<"accept"
        | "cancel"
        | "complete"
        | "dispatch"
        | "fail"
        | "hold"
        | "mark_no_show"
        | "mark_packed"
        | "mark_picked"
        | "mark_preparing"
        | "mark_ready"
        | "release_hold"
        | "schedule"
        | "start"
        | (string & {})>;
    /**
     * When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This
     * records the state transition; completed_at records completion evidence supplied for the
     * fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "terminal_at"?: string;
    /**
     * How the items are delivered: shipment, pickup, local delivery, digital delivery, or service.
     * Value enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover".
     */
    "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {});
    /**
     * When the fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at": string;
    /** Monotonic fulfillment version for expected_version checks. Format: uint64. minimum: 1. */
    "version": number;
};
/**
 * Merchant-issued purchased gift card. Posted balance includes reserved value; available value is
 * balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are
 * independent resources and cannot be transferred across merchants or currencies.
 */
export type WebhookSnapshotGiftCard = {
    /**
     * The balance minus reserved value: what can be spent now. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "available_money": MoneyValue;
    /**
     * The posted balance, including value reserved for redemptions in progress. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "balance_money": MoneyValue;
    /**
     * Origin of the current code: generated means Flint issued a random code; imported means the
     * merchant supplied an existing code during import. Rotating the code resets this to
     * generated. Value enum: "generated", "imported".
     */
    "code_source": "generated" | "imported" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * Value enum: "USD".
     */
    "currency": "USD" | (string & {});
    /**
     * ID of the customer associated with the card. `null` when no customer is associated. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string | null;
    /**
     * Caller-owned identifier for this resource in an external system. `null` when none is set.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string | null;
    /**
     * Unique identifier for this gift card, prefixed `gc_`. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id": string;
    /**
     * The Idempotency-Key of the request that created this resource. `null` when that request sent
     * no key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource.
     */
    "idempotency_key"?: string | null;
    /**
     * RFC3339 timestamp. `null` when no value has been loaded onto the card. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "last_loaded_at": string | null;
    /**
     * RFC3339 timestamp. `null` when the card has never been redeemed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "last_redeemed_at": string | null;
    /** Last four characters of the card's current code. minLength: 4. maxLength: 4. */
    "last4": string;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Value held for redemptions in progress. It isn't available to other payments until the
     * redemption succeeds or is released. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "reserved_money": MoneyValue;
    /**
     * The restrictions that keep the card frozen. unfreeze is supported only when every
     * restriction is merchant_freeze. A funding_dispute with dispute_status lost needs a gift card
     * funding disposition. [] (Value): {@link GiftCardRestriction}. A restriction on a gift card,
     * either a merchant freeze or a funding dispute, with its reason or dispute details.
     */
    "restrictions": Array<GiftCardRestriction>;
    /**
     * Where the card is in its lifecycle. Only an `active` card can be spent. Value enum:
     * "pending", "active", "frozen", "closed".
     */
    "status": "pending" | "active" | "frozen" | "closed" | (string & {});
    /**
     * Lifecycle actions accepted for the stored card state, independent of the caller's
     * credentials. Empty when no action is available. [] enum: "adjust_balance", "cash_out",
     * "close", "freeze", "unfreeze". [] (Value): string. Value enum: "adjust_balance", "cash_out",
     * "close", "freeze", "unfreeze".
     */
    "supported_actions": Array<"adjust_balance" | "cash_out" | "close" | "freeze" | "unfreeze" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64.
     */
    "version": number;
};
/** A physical count used to reconcile stock. */
export type WebhookSnapshotInventoryCount = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "applied_at"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The Idempotency-Key of the request that created this resource. `null` when that request sent
     * no key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource.
     */
    "idempotency_key"?: string | null;
    /**
     * Unique identifier for this inventory count, prefixed `invc_`. Example:
     * "invc_01KEZF7C00B47NXRE3ET37QQ59".
     */
    "inventory_count_id": string;
    /**
     * Count lines, one for each inventory item being counted. [] (Value): {@link
     * InventoryCountLine}. One item's line in an inventory count, with the quantities Flint
     * expected, the quantities counted, and the variance applied.
     */
    "lines": Array<InventoryCountLine>;
    /** ID of the Location whose stock is counted. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "location_id": string;
    /**
     * Source system, actor, and time reported with the count's observations. Where an inventory
     * count came from: the source system, an external actor ID, and when the event occurred.
     */
    "observation_provenance"?: InventoryCountObservationProvenance;
    /**
     * Whether the count is still open. Applying or canceling a `draft` count ends it. Value enum:
     * "draft", "applied", "canceled".
     */
    "status": "draft" | "applied" | "canceled" | (string & {});
    /**
     * Actions that can change this count now. A draft can be canceled, and applied once every line
     * has an observation. Empty after the count is applied or canceled. [] enum: "apply",
     * "cancel". [] (Value): string. Value enum: "apply", "cancel".
     */
    "supported_actions": Array<"apply" | "cancel" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: uint64. minimum: 1.
     */
    "version": number;
};
/**
 * Returned units received into Inventory, from a Return disposition or against the reservation
 * line that consumed them. For supplier deliveries, use POST /v1/inventory-adjustments with
 * reason: received.
 */
export type WebhookSnapshotInventoryReceipt = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * The Idempotency-Key of the request that created this resource. `null` when that request sent
     * no key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource.
     */
    "idempotency_key"?: string | null;
    /**
     * Unique identifier for this inventory receipt, prefixed `invrec_`. Example:
     * "invrec_01KEZF7C00JXXCYA06SH8RCM2N".
     */
    "inventory_receipt_id": string;
    /**
     * Received lines, each with the item, receiving Location, quantity, and disposition. []
     * (Value): {@link InventoryReceiptLine}. One line of an inventory receipt: a quantity of an
     * item received at a Location with its disposition.
     */
    "lines": Array<InventoryReceiptLine>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /**
     * ID of the Return disposition this receipt records. Absent when the receipt isn't linked to a
     * Return. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     */
    "return_disposition_id"?: string;
    /**
     * ID of the Return these units came back on. Absent when the receipt isn't linked to a Return.
     * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: string;
    /**
     * System the change came from, such as a point-of-sale or warehouse system. `null` when the
     * request named no source system. anyOf[1] (Value): {@link InventorySourceSystem}. The system
     * an inventory event came from, such as manual entry, a point of sale, a warehouse system, or
     * Flint, with your source identifier when it applies. anyOf[2] (Value): null.
     */
    "source_system": ((InventorySourceSystem) | (null));
};
/**
 * A claim on stock. Quantity moves from held to committed to consumed, and can be released or
 * reallocated.
 */
export type WebhookSnapshotInventoryReservation = {
    /**
     * How the reservation ended. adopted when its remaining held stock moved to a delivery
     * selection. mixed when more than one terminal outcome applied. `null` when the reservation
     * isn't closed. Value enum: "consumed", "released", "expired", "reallocated", "adopted",
     * "mixed", null.
     */
    "closed_reason"?: "consumed"
        | "released"
        | "expired"
        | "reallocated"
        | "adopted"
        | "mixed"
        | null
        | (string & {})
        | null;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Deadline for held or unconfirmed backordered quantity. While an order payment waits for a
     * buyer action, this is the earlier of the stock hold deadline and the payment attempt
     * deadline. Flint can keep stock held while the payment outcome is uncertain. `null` when no
     * line holds quantity or has unconfirmed backordered quantity. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at": string | null;
    /**
     * The Idempotency-Key of the request that created this resource. `null` when that request sent
     * no key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource.
     */
    "idempotency_key"?: string | null;
    /**
     * Present when the claim needs a merchant action before commerce can continue. Says that an
     * inventory reservation needs action, with the `reason` and the reservation lines affected.
     */
    "inventory_action_required"?: InventoryActionRequired;
    /**
     * Unique identifier for this inventory reservation, prefixed `invr_`. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "inventory_reservation_id": string;
    /**
     * How Flint chooses the Locations that serve the reservation: one fixed Location, an
     * allocation policy, or a specific policy revision. Where an order, payment link, or
     * reservation routes inventory from: a fixed Location, an inventory allocation policy, or one
     * policy revision.
     */
    "inventory_routing_source": InventoryRoutingSource;
    /**
     * Allocations of the reserved stock, one for each item and Location. [] (Value): {@link
     * InventoryReservationLine}. One item's location allocation within a reservation.
     */
    "lines": Array<InventoryReservationLine>;
    /**
     * Who holds the reservation: a `key` you choose, or an order Flint holds the stock for. Who
     * holds an inventory reservation: either a merchant claim identified by your `key`, or an
     * order.
     */
    "owner": InventoryReservationOwner;
    /**
     * Set on a reservation whose claim Flint moved when it rerouted an order: the replacement
     * reservation that now holds the quantity named in this reservation's reallocated_quantity.
     * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "replacement_inventory_reservation_id"?: string;
    /**
     * Set on a replacement reservation: the reservation whose claim Flint moved here when it
     * rerouted an order. This reservation holds the quantity that reservation reports as
     * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "source_inventory_reservation_id"?: string;
    /**
     * active while any held, committed, or backordered quantity remains; closed once none does.
     * Value enum: "active", "closed".
     */
    "status": "active" | "closed" | (string & {});
    /**
     * Actions that can change this reservation now. Empty for a closed reservation and for one
     * Flint holds for an order. Resending targets already applied succeeds in any status. Computed
     * when Flint produced this response or event, so replays and webhooks keep their original
     * value. [] enum: "commit", "consume", "release". [] (Value): string. Value enum: "commit",
     * "consume", "release".
     */
    "supported_actions": Array<"commit" | "consume" | "release" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * The reservation version. Send it as expected_version to reject a write if the reservation
     * changed. Format: uint64. minimum: 1.
     */
    "version": number;
};
/** Stock moving between locations. */
export type WebhookSnapshotInventoryTransfer = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "closed_at"?: string;
    /**
     * How the transfer ended. `null` when the transfer isn't closed. Value enum: "received",
     * "canceled", "received_with_cancellation", "returned", "lost", "mixed", null.
     */
    "closed_reason"?: "received"
        | "canceled"
        | "received_with_cancellation"
        | "returned"
        | "lost"
        | "mixed"
        | null
        | (string & {})
        | null;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "departed_at"?: string;
    /** ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "destination_location_id": string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The Idempotency-Key of the request that created this resource. `null` when that request sent
     * no key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource.
     */
    "idempotency_key"?: string | null;
    /**
     * Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
     * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
     */
    "inventory_transfer_id": string;
    /**
     * Owned collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH
     * replaces the full collection. [] (Value): {@link InventoryTransferLine}. One line of an
     * inventory transfer, with its quantities.
     */
    "lines": Array<InventoryTransferLine>;
    /** Free-text note about the transfer. */
    "note"?: string;
    /** ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "origin_location_id": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "received_at"?: string;
    /**
     * Where the transfer stands, worked out from the quantities that have left the origin and have
     * since been received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed".
     */
    "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
    /**
     * Actions that can change this transfer now. `depart` and `cancel` need units that haven't
     * left the origin. `receive`, `return_to_origin`, and `report_loss` need units in transit.
     * Empty once the transfer is closed. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". [] (Value): string. Value enum: "depart", "receive",
     * "return_to_origin", "report_loss", "cancel".
     */
    "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: uint64. minimum: 1.
     */
    "version": number;
};
/**
 * A recorded offline payment against an invoice. Its amount contributes to invoice paid_money
 * while recorded. Reversing it restores outstanding_money, or written_off_money if the invoice was
 * written off. A payment can cover principal and late fees. Manual payments are separate from
 * online payment attempts.
 */
export type WebhookSnapshotInvoiceManualPayment = {
    /**
     * Full amount received, including any principal and late fees covered. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * The Idempotency-Key of the request that created this resource. `null` when that request sent
     * no key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource.
     */
    "idempotency_key"?: string | null;
    /** The invoice this payment was recorded against. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
    "invoice_id": string;
    /**
     * Stable payment ID. IDs begin with omp_. Gift card loads funded by this payment expose this
     * value as source.order_manual_payment_id. Example: "omp_01KEZF7C007J18203RBJKB9TYE".
     */
    "invoice_manual_payment_id": string;
    /** Note about the offline payment, up to 4096 characters. minLength: 1. maxLength: 4096. */
    "note"?: string;
    /**
     * Caller-owned check, wire, or bank reference, stored unmodified. minLength: 1. maxLength:
     * 255.
     */
    "payment_reference"?: string;
    /** When the payment was received. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "received_at": string;
    /**
     * Note supplied when reversing the payment. Present only when reversed and a note was
     * supplied. minLength: 1. maxLength: 4096.
     */
    "reversal_note"?: string;
    /**
     * When the payment was reversed. Present only when reversed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "reversed_at"?: string;
    /**
     * Whether the payment is recorded or has been reversed in full. Value enum: "recorded",
     * "reversed".
     */
    "status": "recorded" | "reversed" | (string & {});
    /**
     * Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of
     * the caller's permissions; each action still requires its route's scope. Always [] when no
     * action is available. [] enum: "reverse". [] (Value): string. Value enum: "reverse".
     */
    "supported_actions": Array<"reverse" | (string & {})>;
};
/** An attempt to collect payment for an invoice. */
export type WebhookSnapshotInvoicePaymentAttempt = {
    /**
     * When the attempt was canceled. An attempt canceled with its checkout session before payment
     * started may not have it. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "canceled_at"?: string;
    /**
     * When cancellation of this attempt was last requested. It stays set when the payment
     * processor refuses the cancellation or the payment settles first, so read status and
     * canceled_at for the outcome. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "cancellation_requested_at"?: string;
    /**
     * The hosted or headless checkout session the buyer pays through. Absent for automatic
     * charges. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_id"?: string;
    /**
     * The amount this attempt collects: the outstanding balance, or the targeted schedule entry's
     * outstanding amount. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "expected_amount_money": MoneyValue;
    /**
     * When a checkout attempt expires, matching its checkout session. Absent for automatic
     * charges. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string;
    /**
     * The Idempotency-Key of the request that created this resource. `null` when that request sent
     * no key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource. Buyer sessions on routes
     * shared with merchants get `null`. `/v1/me` responses do not include this field.
     */
    "idempotency_key"?: string | null;
    /** The invoice this attempt collects. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
    "invoice_id": string;
    /** Flint invoice payment attempt ID. Example: "invpa_01KEZF7C00PMWEDPAYYEKDTPBX". */
    "invoice_payment_attempt_id": string;
    /**
     * The schedule entry this attempt collects. Absent when the attempt collects the invoice
     * balance. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * Why the payment failed. Present only when status is failed. A summary of why a payment
     * attempt failed, with a normalized error code, a message, the failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /**
     * The payment intent behind this attempt. Absent until payment starts, such as a hosted
     * attempt the buyer hasn't paid yet. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit.
     * Value enum: "card", "ach_debit".
     */
    "rail": "card" | "ach_debit" | (string & {});
    /**
     * When this attempt first settled successfully. Duplicate payment notifications preserve this
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "settled_at"?: string;
    /** When the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "started_at"?: string;
    /**
     * Current payment attempt status. succeeded means this attempt completed successfully, even if
     * the invoice still has an outstanding balance. invoice_payment_attempt.succeeded reports that
     * completion. Value enum: "open", "succeeded", "failed", "canceled", "expired", "processing".
     */
    "status": "open" | "succeeded" | "failed" | "canceled" | "expired" | "processing" | (string & {});
    /**
     * Lifecycle actions accepted now. An open or processing attempt can be canceled; the payment
     * processor can still refuse cancellation. [] enum: "cancel". [] (Value): string. Value enum:
     * "cancel".
     */
    "supported_actions": Array<"cancel" | (string & {})>;
    /**
     * When this attempt last changed. Duplicate payment notifications preserve this timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "updated_at": string;
};
/** An attempt to pay an order. */
export type WebhookSnapshotOrderPaymentAttempt = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "completed_at"?: string;
    /**
     * The outstanding balance this attempt was started to collect, fixed when it started. For an
     * order that gift cards partly cover, it includes the gift card part. Later changes to the
     * order's balance don't change it, and a resume request that sends
     * `expected_outstanding_money` is compared with this amount. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "expected_outstanding_money": MoneyValue;
    /**
     * Gift cards this attempt holds or has redeemed, one entry per card. Each amount is reserved
     * while the attempt is open and is taken from the card when the attempt succeeds. A failed or
     * canceled attempt releases it. Empty when no gift card is used. [] (Value): {@link
     * PaymentAttemptGiftCardRedemption}. A gift card redemption made as part of an order payment
     * attempt, with the amount, tip, and gift card.
     */
    "gift_card_redemptions": Array<PaymentAttemptGiftCardRedemption>;
    /**
     * The Idempotency-Key of the request that created this resource. `null` when that request sent
     * no key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource. Buyer sessions on routes
     * shared with merchants get `null`. `/v1/me` responses do not include this field.
     */
    "idempotency_key"?: string | null;
    /**
     * Whether the attempt can continue through PayOrder with action: resume and this
     * order_payment_attempt_id after any pending client action is complete. If false, check status
     * before starting another payment; the attempt may still be in progress.
     */
    "is_resumable": boolean;
    /**
     * The concluded failure of a payment leg that failed this attempt. Absent for non-payment
     * failures. A summary of why a payment attempt failed, with a normalized error code, a
     * message, the failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /**
     * Whether the attempt collects the order's balance, saves a payment method without charging
     * it, or settles the order without a processor payment. Value enum: "payment", "setup",
     * "settlement".
     */
    "mode": "payment" | "setup" | "settlement" | (string & {});
    /**
     * The order this payment attempt collects money for or saves a payment method for. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Unique identifier for this order payment attempt, prefixed `opat_`. Example:
     * "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
     */
    "order_payment_attempt_id": string;
    /**
     * The payment intents this attempt collects through, each with its amount, status, tip, and
     * latest error. Empty for an attempt that collects no processor payment, such as a setup, or
     * an order that gift cards or return credit settle alone. [] (Value): {@link
     * PaymentAttemptPaymentIntent}. A payment intent used as one leg of an order payment attempt,
     * with its amount, status, tip, and latest error.
     */
    "payment_intents": Array<PaymentAttemptPaymentIntent>;
    /**
     * Reports only a checkout buyer's skipped save when the pay request sent save_payment_method:
     * true and the attempt paid without saving the payment method. A merchant save has no entry
     * here; read payment_source.card.payment_method_id on the payment intent. A card typed into
     * checkout and saved has no entry here; read payment_method_save on the checkout session for a
     * card waiting for confirmation. What became of the buyer's save_payment_method. The payment
     * does not depend on it.
     */
    "payment_method_save"?: OrderPaymentAttemptPaymentMethodSave;
    /**
     * Steps the buyer must finish in your client before the attempt can continue, such as
     * authentication. Empty when none is pending. Complete them, then resume the attempt. []
     * (Value): {@link PendingPaymentAction}. Client-side action required before continuing a
     * payment. Resume an order through PayOrder with order_payment_attempt_id, or continue a
     * standalone PaymentIntent through its confirm endpoint without a replacement credential.
     */
    "pending_actions": Array<PendingPaymentAction>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "started_at"?: string;
    /**
     * Where the attempt is in collecting payment or saving a payment method.
     * `partially_succeeded`, `succeeded`, `failed`, `canceled`, and `expired` are final. Value
     * enum: "processing", "requires_action", "requires_capture", "partially_succeeded",
     * "succeeded", "failed", "expired", "canceled".
     */
    "status": "processing"
        | "requires_action"
        | "requires_capture"
        | "partially_succeeded"
        | "succeeded"
        | "failed"
        | "expired"
        | "canceled"
        | (string & {});
    /**
     * Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an
     * unmapped non-payment reason report other. Canceled and expired attempts include a reason
     * only when it adds information beyond status. New values may be added. Value enum:
     * "authorization_canceled", "canceled_on_reader", "reader_unavailable",
     * "coupon_reservation_failed", "gift_card_hold_acquisition_failed", "invalid_payment_source",
     * "inventory_unavailable", "order_changed_before_payment", "order_payment_customer_mismatch",
     * "other", "payment_authorization_canceled", "payment_authorization_expired",
     * "payment_confirmation_rejected", "payment_link_capacity_claim_failed",
     * "payment_link_capacity_validation_failed", "payment_method_activation_pending",
     * "payment_method_required", "payment_option_not_allowed", "payment_option_unavailable",
     * "payment_returned", "payment_source_binding_failed", "payment_source_conflict",
     * "payment_source_not_updatable", "payment_source_ownership_mismatch", "rate_limit_exceeded",
     * "resource_guarantee_failed", "setup_action_unavailable", "setup_hold_acquisition_failed",
     * "setup_result_incomplete", "tip_allocation_sync_failed",
     * "zero_balance_hold_acquisition_failed".
     */
    "status_reason"?: "authorization_canceled"
        | "canceled_on_reader"
        | "reader_unavailable"
        | "coupon_reservation_failed"
        | "gift_card_hold_acquisition_failed"
        | "invalid_payment_source"
        | "inventory_unavailable"
        | "order_changed_before_payment"
        | "order_payment_customer_mismatch"
        | "other"
        | "payment_authorization_canceled"
        | "payment_authorization_expired"
        | "payment_confirmation_rejected"
        | "payment_link_capacity_claim_failed"
        | "payment_link_capacity_validation_failed"
        | "payment_method_activation_pending"
        | "payment_method_required"
        | "payment_option_not_allowed"
        | "payment_option_unavailable"
        | "payment_returned"
        | "payment_source_binding_failed"
        | "payment_source_conflict"
        | "payment_source_not_updatable"
        | "payment_source_ownership_mismatch"
        | "rate_limit_exceeded"
        | "resource_guarantee_failed"
        | "setup_action_unavailable"
        | "setup_hold_acquisition_failed"
        | "setup_result_incomplete"
        | "tip_allocation_sync_failed"
        | "zero_balance_hold_acquisition_failed"
        | (string & {});
    /**
     * Lifecycle actions accepted now. Cancel is available during collection until a payment leg
     * succeeds. Attempts applying their outcome to the order and terminal attempts list no
     * actions. Always present with merchant credentials. [] enum: "cancel". [] (Value): string.
     * Value enum: "cancel".
     */
    "supported_actions"?: Array<"cancel" | (string & {})>;
};
export type WebhookSnapshotOrderPaymentAttemptPreviousAttributes = {
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "completed_at"?: ((string) | (null));
    /**
     * The outstanding balance this attempt was started to collect, fixed when it started. For an
     * order that gift cards partly cover, it includes the gift card part. Later changes to the
     * order's balance don't change it, and a resume request that sends
     * `expected_outstanding_money` is compared with this amount. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "expected_outstanding_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Gift cards this attempt holds or has redeemed, one entry per card. Each amount is reserved
     * while the attempt is open and is taken from the card when the attempt succeeds. A failed or
     * canceled attempt releases it. Empty when no gift card is used. anyOf[1] (Value): Array of
     * {@link PaymentAttemptGiftCardRedemptionPreviousAttributes}. Gift cards this attempt holds or
     * has redeemed, one entry per card. Each amount is reserved while the attempt is open and is
     * taken from the card when the attempt succeeds. A failed or canceled attempt releases it.
     * Empty when no gift card is used. anyOf[1][] (Value): {@link
     * PaymentAttemptGiftCardRedemptionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "gift_card_redemptions"?: ((Array<PaymentAttemptGiftCardRedemptionPreviousAttributes>) | (null));
    /**
     * The Idempotency-Key of the request that created this resource. `null` when that request sent
     * no key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource. Buyer sessions on routes
     * shared with merchants get `null`. `/v1/me` responses do not include this field. anyOf[1]
     * (Value): string. The Idempotency-Key of the request that created this resource. `null` when
     * that request sent no key, Flint created the resource, the reader isn't the caller that
     * created it (another app install, a buyer, or the merchant reading an app's or buyer's
     * record), or the caller that created an older record is unknown. Filter its list with
     * `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook
     * events, can return `null`. To find a key that a replay returns as `null`, read the resource.
     * Buyer sessions on routes shared with merchants get `null`. `/v1/me` responses do not include
     * this field. anyOf[2] (Value): null.
     */
    "idempotency_key"?: ((string) | (null));
    /**
     * Whether the attempt can continue through PayOrder with action: resume and this
     * order_payment_attempt_id after any pending client action is complete. If false, check status
     * before starting another payment; the attempt may still be in progress. anyOf[1] (Value):
     * boolean. Whether the attempt can continue through PayOrder with action: resume and this
     * order_payment_attempt_id after any pending client action is complete. If false, check status
     * before starting another payment; the attempt may still be in progress. anyOf[2] (Value):
     * null.
     */
    "is_resumable"?: ((boolean) | (null));
    /**
     * The concluded failure of a payment leg that failed this attempt. Absent for non-payment
     * failures. anyOf[1] (Value): {@link PaymentErrorSummaryPreviousAttributes}. anyOf[2] (Value):
     * null.
     */
    "last_payment_error"?: ((PaymentErrorSummaryPreviousAttributes) | (null));
    /**
     * Whether the attempt collects the order's balance, saves a payment method without charging
     * it, or settles the order without a processor payment. Value enum: "payment", "setup",
     * "settlement". anyOf[1] (Value): string. Whether the attempt collects the order's balance,
     * saves a payment method without charging it, or settles the order without a processor
     * payment. Value enum: "payment", "setup", "settlement". anyOf[2] (Value): null.
     */
    "mode"?: (("payment" | "setup" | "settlement" | (string & {})) | (null));
    /**
     * The order this payment attempt collects money for or saves a payment method for. anyOf[1]
     * (Value): string. The order this payment attempt collects money for or saves a payment method
     * for. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     */
    "order_id"?: ((string) | (null));
    /**
     * Unique identifier for this order payment attempt, prefixed `opat_`. anyOf[1] (Value):
     * string. Unique identifier for this order payment attempt, prefixed `opat_`. Example:
     * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". anyOf[2] (Value): null.
     */
    "order_payment_attempt_id"?: ((string) | (null));
    /**
     * The payment intents this attempt collects through, each with its amount, status, tip, and
     * latest error. Empty for an attempt that collects no processor payment, such as a setup, or
     * an order that gift cards or return credit settle alone. anyOf[1] (Value): Array of {@link
     * PaymentAttemptPaymentIntentPreviousAttributes}. The payment intents this attempt collects
     * through, each with its amount, status, tip, and latest error. Empty for an attempt that
     * collects no processor payment, such as a setup, or an order that gift cards or return credit
     * settle alone. anyOf[1][] (Value): {@link PaymentAttemptPaymentIntentPreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "payment_intents"?: ((Array<PaymentAttemptPaymentIntentPreviousAttributes>) | (null));
    /**
     * Reports only a checkout buyer's skipped save when the pay request sent save_payment_method:
     * true and the attempt paid without saving the payment method. A merchant save has no entry
     * here; read payment_source.card.payment_method_id on the payment intent. A card typed into
     * checkout and saved has no entry here; read payment_method_save on the checkout session for a
     * card waiting for confirmation. anyOf[1] (Value): {@link
     * OrderPaymentAttemptPaymentMethodSavePreviousAttributes}. anyOf[2] (Value): null.
     */
    "payment_method_save"?: ((OrderPaymentAttemptPaymentMethodSavePreviousAttributes) | (null));
    /**
     * Steps the buyer must finish in your client before the attempt can continue, such as
     * authentication. Empty when none is pending. Complete them, then resume the attempt. anyOf[1]
     * (Value): Array of {@link PendingPaymentActionPreviousAttributes}. Steps the buyer must
     * finish in your client before the attempt can continue, such as authentication. Empty when
     * none is pending. Complete them, then resume the attempt. anyOf[1][] (Value): {@link
     * PendingPaymentActionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "pending_actions"?: ((Array<PendingPaymentActionPreviousAttributes>) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "started_at"?: ((string) | (null));
    /**
     * Where the attempt is in collecting payment or saving a payment method.
     * `partially_succeeded`, `succeeded`, `failed`, `canceled`, and `expired` are final. Value
     * enum: "processing", "requires_action", "requires_capture", "partially_succeeded",
     * "succeeded", "failed", "expired", "canceled". anyOf[1] (Value): string. Where the attempt is
     * in collecting payment or saving a payment method. `partially_succeeded`, `succeeded`,
     * `failed`, `canceled`, and `expired` are final. Value enum: "processing", "requires_action",
     * "requires_capture", "partially_succeeded", "succeeded", "failed", "expired", "canceled".
     * anyOf[2] (Value): null.
     */
    "status"?: (("processing"
        | "requires_action"
        | "requires_capture"
        | "partially_succeeded"
        | "succeeded"
        | "failed"
        | "expired"
        | "canceled"
        | (string & {}))
        | (null));
    /**
     * Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an
     * unmapped non-payment reason report other. Canceled and expired attempts include a reason
     * only when it adds information beyond status. New values may be added. Value enum:
     * "authorization_canceled", "canceled_on_reader", "reader_unavailable",
     * "coupon_reservation_failed", "gift_card_hold_acquisition_failed", "invalid_payment_source",
     * "inventory_unavailable", "order_changed_before_payment", "order_payment_customer_mismatch",
     * "other", "payment_authorization_canceled", "payment_authorization_expired",
     * "payment_confirmation_rejected", "payment_link_capacity_claim_failed",
     * "payment_link_capacity_validation_failed", "payment_method_activation_pending",
     * "payment_method_required", "payment_option_not_allowed", "payment_option_unavailable",
     * "payment_returned", "payment_source_binding_failed", "payment_source_conflict",
     * "payment_source_not_updatable", "payment_source_ownership_mismatch", "rate_limit_exceeded",
     * "resource_guarantee_failed", "setup_action_unavailable", "setup_hold_acquisition_failed",
     * "setup_result_incomplete", "tip_allocation_sync_failed",
     * "zero_balance_hold_acquisition_failed". anyOf[1] (Value): string. Non-payment reason an
     * attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment
     * reason report other. Canceled and expired attempts include a reason only when it adds
     * information beyond status. New values may be added. Value enum: "authorization_canceled",
     * "canceled_on_reader", "reader_unavailable", "coupon_reservation_failed",
     * "gift_card_hold_acquisition_failed", "invalid_payment_source", "inventory_unavailable",
     * "order_changed_before_payment", "order_payment_customer_mismatch", "other",
     * "payment_authorization_canceled", "payment_authorization_expired",
     * "payment_confirmation_rejected", "payment_link_capacity_claim_failed",
     * "payment_link_capacity_validation_failed", "payment_method_activation_pending",
     * "payment_method_required", "payment_option_not_allowed", "payment_option_unavailable",
     * "payment_returned", "payment_source_binding_failed", "payment_source_conflict",
     * "payment_source_not_updatable", "payment_source_ownership_mismatch", "rate_limit_exceeded",
     * "resource_guarantee_failed", "setup_action_unavailable", "setup_hold_acquisition_failed",
     * "setup_result_incomplete", "tip_allocation_sync_failed",
     * "zero_balance_hold_acquisition_failed". anyOf[2] (Value): null.
     */
    "status_reason"?: (("authorization_canceled"
        | "canceled_on_reader"
        | "reader_unavailable"
        | "coupon_reservation_failed"
        | "gift_card_hold_acquisition_failed"
        | "invalid_payment_source"
        | "inventory_unavailable"
        | "order_changed_before_payment"
        | "order_payment_customer_mismatch"
        | "other"
        | "payment_authorization_canceled"
        | "payment_authorization_expired"
        | "payment_confirmation_rejected"
        | "payment_link_capacity_claim_failed"
        | "payment_link_capacity_validation_failed"
        | "payment_method_activation_pending"
        | "payment_method_required"
        | "payment_option_not_allowed"
        | "payment_option_unavailable"
        | "payment_returned"
        | "payment_source_binding_failed"
        | "payment_source_conflict"
        | "payment_source_not_updatable"
        | "payment_source_ownership_mismatch"
        | "rate_limit_exceeded"
        | "resource_guarantee_failed"
        | "setup_action_unavailable"
        | "setup_hold_acquisition_failed"
        | "setup_result_incomplete"
        | "tip_allocation_sync_failed"
        | "zero_balance_hold_acquisition_failed"
        | (string & {}))
        | (null));
    /**
     * Lifecycle actions accepted now. Cancel is available during collection until a payment leg
     * succeeds. Attempts applying their outcome to the order and terminal attempts list no
     * actions. Always present with merchant credentials. [] enum: "cancel". anyOf[1] (Value):
     * Array of string. Lifecycle actions accepted now. Cancel is available during collection until
     * a payment leg succeeds. Attempts applying their outcome to the order and terminal attempts
     * list no actions. Always present with merchant credentials. [] enum: "cancel". anyOf[1][]
     * (Value): string. Value enum: "cancel". anyOf[2] (Value): null.
     */
    "supported_actions"?: ((Array<"cancel" | (string & {})>) | (null));
};
/** Funds sent from a merchant balance to a payout destination. */
export type WebhookSnapshotPayout = {
    /**
     * Amount moved between your bank and Flint. Always positive. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Expected settlement date of the transfer, in YYYY-MM-DD format using the UTC date of the
     * expected arrival. Format: date. Example: "2026-08-02".
     */
    "arrival_date"?: string;
    /**
     * Balance source this payout draws from. Flint chooses the source when balance_source_type is
     * omitted at create. Clients must accept source types added in future releases. Value enum:
     * "card", "bank_account".
     */
    "balance_source_type": "card" | "bank_account" | (string & {});
    /** When the payout was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    /** Description sent when the payout was created. Absent when there is none. */
    "description"?: string;
    /**
     * Direction of the money movement. Outbound payouts deposit funds in your bank; inbound
     * payouts withdraw funds to cover a negative Flint balance. Value enum: "outbound", "inbound".
     */
    "direction": "outbound" | "inbound" | (string & {});
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Flint-normalized payout failure code. Unknown provider values are returned as payout_failed.
     * Value enum: "account_closed", "account_frozen", "bank_account_restricted",
     * "bank_ownership_changed", "could_not_process", "debit_not_authorized", "declined",
     * "insufficient_funds", "invalid_account_number", "incorrect_account_holder_name",
     * "incorrect_account_holder_address", "incorrect_account_holder_tax_id", "invalid_currency",
     * "no_account", "unsupported_card", "payout_failed".
     */
    "failure_code"?: "account_closed"
        | "account_frozen"
        | "bank_account_restricted"
        | "bank_ownership_changed"
        | "could_not_process"
        | "debit_not_authorized"
        | "declined"
        | "insufficient_funds"
        | "invalid_account_number"
        | "incorrect_account_holder_name"
        | "incorrect_account_holder_address"
        | "incorrect_account_holder_tax_id"
        | "invalid_currency"
        | "no_account"
        | "unsupported_card"
        | "payout_failed"
        | (string & {});
    /**
     * Flint-authored payout failure message. This is stable explanatory text, not a raw provider
     * message.
     */
    "failure_message"?: string;
    /**
     * Whether the payout fee is estimated or final. not_applicable means no applicable fee status
     * is known, including unmapped fee states. Value enum: "estimated", "final", "not_applicable".
     */
    "fee_amount_status": "estimated" | "final" | "not_applicable" | (string & {});
    /**
     * Fee for this payout, never negative. Payouts carry no fee, so this is 0 once your processor
     * records the payout. `null` when your processor hasn't recorded the payout yet. anyOf[1]
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. anyOf[2] (Value): null.
     */
    "fee_money": ((MoneyValue) | (null));
    /**
     * The Idempotency-Key of the request that created this resource. `null` when that request sent
     * no key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource.
     */
    "idempotency_key"?: string | null;
    /**
     * What started the payout. Inbound payouts are always platform initiated. An outbound payout
     * imported from your processor follows the processor: scheduled when it sent the payout
     * automatically, otherwise manual. Only scheduled outbound payouts list their balance
     * transactions through GET /v1/balance-transactions?payout_id=; other payouts return 409 with
     * reason not_itemized. Unmapped sources are returned as other. Value enum: "manual",
     * "scheduled", "platform", "other".
     */
    "initiated_by": "manual" | "scheduled" | "platform" | "other" | (string & {});
    /** Merchant whose balance the payout changes. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Payouts Flint sends, by API, Dashboard or schedule, are always `standard`. `instant` appears
     * only on a payout Flint recorded from the processor that was sent outside Flint. `other` is a
     * method Flint doesn't map. Value enum: "standard", "instant", "other".
     */
    "method": "standard" | "instant" | "other" | (string & {});
    /**
     * Signed effect of this payout on your Flint balance. Negative for outbound payouts and
     * positive for inbound payouts. `null` when your processor hasn't recorded the payout yet.
     * anyOf[1] (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     */
    "net_money": ((MoneyValue) | (null));
    /**
     * The payout this one reverses, inlined when you request expand=original_payout. null when
     * expanded and original_payout_id is absent. Present only when `expand` includes
     * `original_payout`; `null` when expanded and there is no related payout. anyOf[1] (Value):
     * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status,
     * and arrival date, returned when the payout is expanded. anyOf[2] (Value): null.
     */
    "original_payout"?: ((ExpandedPayoutSummary) | (null));
    /**
     * On a payout that reverses another payout, the payout it reverses. Present only when Flint
     * has the matching original payout. A payout has at most one of original_payout_id and
     * reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     */
    "original_payout_id"?: string;
    /**
     * The payout destination, inlined when you request expand=payout_destination. null when
     * expanded and payout_destination_id is absent. Present only when `expand` includes
     * `payout_destination`; `null` when expanded and there is no related payout destination.
     * anyOf[1] (Value): {@link ExpandedPayoutDestinationSummary}. A payout destination's summary
     * fields, such as type, bank name, last four digits, and status, returned when the destination
     * is expanded. anyOf[2] (Value): null.
     */
    "payout_destination"?: ((ExpandedPayoutDestinationSummary) | (null));
    /**
     * Bank account or debit card used for the payout. Absent when Flint can't match your
     * processor's destination to a payout destination. Example:
     * "pdest_01KEZF7C00M55HZDZXZP6YVE6B".
     */
    "payout_destination_id"?: string;
    /** Stable identifier of the payout. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". */
    "payout_id": string;
    /**
     * Whether Flint has pulled a paid payout back from your bank: none until the reversal
     * completes, then reversed. A payout_reversal balance transaction returns the money, and
     * status stays succeeded. Value enum: "none", "reversed".
     */
    "reversal_status": "none" | "reversed" | (string & {});
    /**
     * The payout reversing this one, inlined when you request expand=reversed_by_payout. null when
     * expanded and reversed_by_payout_id is absent. Present only when `expand` includes
     * `reversed_by_payout`; `null` when expanded and there is no related payout. anyOf[1] (Value):
     * {@link ExpandedPayoutSummary}. A payout's summary fields, including amount, method, status,
     * and arrival date, returned when the payout is expanded. anyOf[2] (Value): null.
     */
    "reversed_by_payout"?: ((ExpandedPayoutSummary) | (null));
    /**
     * The separate payout reversing this one, when Flint has the matching payout. Its presence
     * does not mean the reversal has completed; read reversal_status. A payout has at most one of
     * original_payout_id and reversed_by_payout_id. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     */
    "reversed_by_payout_id"?: string;
    /** Text shown on your bank statement for the transfer, when one was set. */
    "statement_descriptor"?: string;
    /**
     * Where the payout is: pending until it is sent, in_transit moving between Flint and your
     * bank, then succeeded or failed. A succeeded payout can still become failed if the bank
     * returns the transfer, and canceled means a manual payout was canceled while pending. Value
     * enum: "pending", "in_transit", "succeeded", "failed", "canceled".
     */
    "status": "pending" | "in_transit" | "succeeded" | "failed" | "canceled" | (string & {});
    /**
     * Lifecycle actions Flint accepts now. cancel is offered while an outbound payout is pending
     * unless it was scheduled automatically. Inbound payouts offer no actions. [] enum: "cancel".
     * [] (Value): string. Value enum: "cancel".
     */
    "supported_actions": Array<"cancel" | (string & {})>;
    /**
     * The bank's trace number for the transfer, which your bank can use to locate it. Its status
     * says whether the number is pending, available, or unsupported, and value holds the number
     * when Flint has it. Absent when Flint has no trace information. A payout's bank trace ID,
     * with whether it is pending, available, or unsupported.
     */
    "trace_id"?: PayoutTraceID;
    /** When the payout last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
};
/** Money returned against a collected payment. */
export type WebhookSnapshotRefund = {
    /**
     * Total refunded across all tenders, including `refunded_tip_money`. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Money returned for each order charge, including subtotal, discount, and tax, combined across
     * payment refunds. [] (Value): {@link RefundChargeAllocation}. Money returned for one order
     * charge, including subtotal, discount, and tax.
     */
    "charge_allocations"?: Array<RefundChargeAllocation>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Money paid for Return resolution credits, included in amount_money. It carries no
     * merchandise, shipping, tax, or tip allocation. Zero for refunds without credits. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "credit_adjustment_money": MoneyValue;
    /**
     * ID of the credit note this refund paid out. Present only on refunds issued through a credit
     * note. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
     */
    "credit_note_id"?: string;
    /**
     * Present only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
     * returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /**
     * ID of the customer on the refunded order or payment. Absent when neither has one. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Why a refund failed or a payment refund was canceled. Failed and canceled amounts become
     * refundable again, except a refund with reason payment_returned that failed with
     * payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A
     * payment_returned refund that failed with refund_abandoned can't be retried through Flint
     * either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way
     * if you haven't already. Fix the cause, then create a new refund with a new idempotency key.
     * Unknown provider values are returned as refund_failed. Value enum:
     * "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds",
     * "insufficient_available_balance", "declined", "merchant_request", "payment_disputed",
     * "refund_abandoned", "payment_refund_failed", "payment_refund_not_attempted",
     * "refund_failed".
     */
    "failure_reason"?: "expired_or_canceled_card"
        | "lost_or_stolen_card"
        | "insufficient_funds"
        | "insufficient_available_balance"
        | "declined"
        | "merchant_request"
        | "payment_disputed"
        | "refund_abandoned"
        | "payment_refund_failed"
        | "payment_refund_not_attempted"
        | "refund_failed"
        | (string & {});
    /**
     * The Idempotency-Key of the request that created this resource. `null` when that request sent
     * no key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource.
     */
    "idempotency_key"?: string | null;
    /**
     * Who decided to make this refund: `merchant` for you or your integration, `flint` for a
     * refund Flint made on its own to return a payment it couldn't accept. Unlike a Return's
     * `initiated_by`, it doesn't say which credential asked. Read-only. Value enum: "merchant",
     * "flint".
     */
    "initiated_by": "merchant" | "flint" | (string & {});
    /**
     * ID of the invoice whose credit note this refund paid out. Present only on refunds issued
     * through a credit note. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id"?: string;
    /**
     * How the refund applied to each order line item it covered, with quantity, tax, and
     * adjustments. [] (Value): {@link RefundLineItemAllocation}. How a refund applied to one order
     * line item: quantity, refunded amount, tax, adjustments, and modifier allocations.
     */
    "line_item_allocations"?: Array<RefundLineItemAllocation>;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Present only when `expand` includes `order`; `null` when expanded and there is no related
     * order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
     * status, payment and refund status, and pricing and settlement amounts, returned when the
     * order is expanded. anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /**
     * ID of the paid-order edit that created this refund. Present only on refunds issued through
     * an order edit. Example: "oed_01KEZF7C00A6BQ4TBGWFDJ944A".
     */
    "order_edit_id"?: string;
    /**
     * ID of the order the refund was issued against. For a refund with `reason`
     * `payment_returned`, the order the returned payment was for; the order never received this
     * money. Absent for a refund of a payment that has no order, and for a standalone gift card
     * refund. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Present only when `expand` includes `payment_intent`; `null` when expanded and there is no
     * related payment intent. anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
     * intent's summary fields, including amount, status, and capture method, returned when the
     * payment intent is expanded. anyOf[2] (Value): null.
     */
    "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
    /**
     * ID of the payment the refund was issued against, when it targeted one payment.
     * `payment_refunds` lists every payment it returned money through. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * The part of the refund returned through each payment, with its own status. Absent when the
     * refund was all gift card credit or store credit. [] (Value): {@link PaymentRefund}. The part
     * of a refund returned through one payment, with the amount, tip, status, and any failure
     * reason.
     */
    "payment_refunds"?: Array<PaymentRefund>;
    /**
     * ID of the payment review whose decline created this refund. Present only on refunds issued
     * for a declined review. Example: "rev_01KEZF7C00BVBQ00XDFNKB1EF6".
     */
    "payment_review_id"?: string;
    /**
     * Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is
     * on its way without review. Value enum: "manual_review", null.
     */
    "pending_reason": "manual_review" | null | (string & {}) | null;
    /**
     * Who moved or is moving the money for this refund. Flint processes refunds through a
     * processor or a gift card; merchant means the merchant returned the money outside Flint and
     * recorded it here. Existing refunds are processed by Flint. Value enum: "flint", "merchant".
     */
    "processed_by": "flint" | "merchant" | (string & {});
    /**
     * Why the refund was issued. It never changes how the money moves. The buyer's refund receipt
     * shows it only for `requested_by_customer`, `duplicate`, `defective_product`,
     * `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`,
     * `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be
     * sent in requests. `null` when no reason was recorded. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", "out_of_stock", "payment_returned", null.
     */
    "reason": "duplicate"
        | "fraudulent"
        | "requested_by_customer"
        | "defective_product"
        | "wrong_item_shipped"
        | "never_received"
        | "not_as_described"
        | "arrived_too_late"
        | "customer_changed_mind"
        | "better_price_found"
        | "accidental_order"
        | "other"
        | "out_of_stock"
        | "payment_returned"
        | null
        | (string & {})
        | null;
    /** Note explaining the refund, up to 1,024 characters. */
    "reason_message"?: string;
    /**
     * Unique identifier for this refund, prefixed `ref_`. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_id": string;
    /**
     * Whether the request asked to return the platform fee on the payments this refund refunds
     * (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns.
     */
    "refund_platform_fee": boolean;
    /**
     * The merchant's opaque check, wire, or other reference for money returned outside Flint,
     * preserved exactly. Present only when processed_by is merchant and a reference was supplied.
     * external_reference_id is the merchant's own refund ID. minLength: 1. maxLength: 255.
     */
    "refund_reference"?: string;
    /**
     * When the merchant reports that the money was returned outside Flint. Present only when
     * processed_by is merchant. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "refunded_at"?: string;
    /**
     * Share of `amount_money` that refunds tips. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "refunded_tip_money": MoneyValue;
    /**
     * ID of the return this refund paid out. Present only on refunds issued by a return. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: string;
    /**
     * ID of the return resolution that issued this refund. Present only on refunds issued by a
     * return. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id"?: string;
    /**
     * Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and
     * partially_succeeded can still change when a bank rejects a refund after accepting it. A
     * refund Flint made to return a payment it couldn't accept goes from succeeded back to
     * pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created
     * when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its
     * outcome changes, and refund.updated for other changes. Value enum: "pending", "succeeded",
     * "partially_succeeded", "failed".
     */
    "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
    /**
     * When `status` first became `succeeded`. For a refund with `payment_refunds` or
     * `tender_allocations`, it's when the last of them first succeeded, so it equals the latest
     * `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the
     * outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while
     * `status` is `succeeded`; absent for every other status, including `partially_succeeded` and
     * a refund that failed after it succeeded. A refund that succeeds again shows its first
     * success time. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "succeeded_at"?: string;
    /**
     * Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax
     * reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. [] (Value):
     * {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an order.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
    /**
     * Every tender the refund drew from, payment or gift card, with its amount, tip share, status,
     * and destination. [] (Value): {@link RefundTenderAllocation}. One tender's share of a refund,
     * listed in the refund's tender allocations.
     */
    "tender_allocations"?: Array<RefundTenderAllocation>;
    /**
     * Cash returned after an unissued gift card purchase refund failed. Return it through a new
     * refund against payment_intent_id and order_line_item_id. It does not issue another card.
     * Source remaining and pending amounts describe the entire original settlement allocation;
     * repeated entries for that source are not additive. [] (Value): {@link
     * RefundUnissuedGiftCardRecovery}. Details of a gift card purchase refunded before the card
     * was issued, including the amounts recovered.
     */
    "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
/** A request to send purchased items back. */
export type WebhookSnapshotReturn = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "canceled_at"?: string;
    /**
     * Who canceled the Return. Who performed a return action: a buyer, merchant, integration, or
     * the system, with an optional ID.
     */
    "canceled_by"?: ReturnActor;
    /**
     * Why the Return was canceled. Value enum: "buyer_request", "merchant_request", "duplicate",
     * "expired", "created_in_error", "other".
     */
    "cancellation_reason"?: "buyer_request"
        | "merchant_request"
        | "duplicate"
        | "expired"
        | "created_in_error"
        | "other"
        | (string & {});
    /** Detail sent with the cancellation. Merchant reads only. */
    "cancellation_reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "completed_at"?: string;
    /**
     * Who completed the Return. `system` when Flint completed it automatically. Who performed a
     * return action: a buyer, merchant, integration, or the system, with an optional ID.
     */
    "completed_by"?: ReturnActor;
    /**
     * What is still owed before the Return can complete. Empty when nothing is. [] (Value): {@link
     * ReturnCompletionBlocker}. Something still owed before a return can complete, with the return
     * line or record it concerns.
     */
    "completion_blockers": Array<ReturnCompletionBlocker>;
    /**
     * automatic completes the Return when the last completion blocker clears; manual waits for
     * POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
     * "manual", "automatic".
     */
    "completion_mode"?: "manual" | "automatic" | (string & {});
    /**
     * Why the Return was completed by hand. Absent when Flint completed it automatically. Value
     * enum: "manual_completion", "exception_waived", "other".
     */
    "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
    /** Detail sent when the Return was completed by hand. */
    "completion_reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Present only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
     * returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** The customer the Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
    "customer_id"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "decision_at"?: string;
    /**
     * Whether the requested units were approved. `pending` until one decision covers every line.
     * Value enum: "pending", "approved", "partially_approved", "declined".
     */
    "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The Return's money in one place: the value of the returned lines, deductions and credits,
     * and what has been refunded or collected. The money for a return: returned value, deductions,
     * credits, replacement total, and amounts due to or from the buyer.
     */
    "financial_summary": ReturnFinancialSummary;
    /**
     * What the buyer still has to send back and where. Each entry leaves the list once it is
     * satisfied, so an empty list means nothing is waiting on the buyer. [] (Value): {@link
     * ReturnHandoffRequirement}. What the buyer must do to hand merchandise back: the destination,
     * instructions, line items, and expiry.
     */
    "handoff_requirements": Array<ReturnHandoffRequirement>;
    /**
     * The Idempotency-Key of the request that created this resource. `null` when that request sent
     * no key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource. Buyer routes return only keys
     * from the buyer's namespace.
     */
    "idempotency_key"?: string | null;
    /**
     * Who created the Return: buyer for a customer session on /v1/me or Flint's hosted account,
     * merchant for a Dashboard user, integration for an API key or partner app, or system for
     * Flint automation. It cannot be sent. Value enum: "buyer", "merchant", "integration",
     * "system".
     */
    "initiated_by": "buyer" | "merchant" | "integration" | "system" | (string & {});
    /**
     * The lines being returned. [] (Value): {@link WebhookSnapshotReturnLineItem}. An item
     * included in a return request.
     */
    "line_items": Array<WebhookSnapshotReturnLineItem>;
    /**
     * On the Return, the least-finished line's value. Value enum: "not_required",
     * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
     * "partially_inspected", "inspection_review_required", "disposition_required", "resolved",
     * "exception".
     */
    "merchandise_status": "not_required"
        | "awaiting_handoff"
        | "in_transit"
        | "partially_received"
        | "inspection_required"
        | "partially_inspected"
        | "inspection_review_required"
        | "disposition_required"
        | "resolved"
        | "exception"
        | (string & {});
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata": MetadataMap;
    /**
     * Present only when `expand` includes `order`; `null` when expanded and there is no related
     * order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
     * status, payment and refund status, and pricing and settlement amounts, returned when the
     * order is expanded. anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /**
     * How your return policies judged the request when the Return was created. How a return policy
     * evaluated a return request: overall status and reason, the policy revision used, and
     * per-line results.
     */
    "policy_evaluation"?: ReturnPolicyEvaluation;
    /**
     * Whether the buyer has received the value they are owed. Combines the Return's resolutions
     * and its unsettled corrections. Value enum: "not_selected", "pending", "partially_completed",
     * "requires_action", "completed", "failed".
     */
    "resolution_status": "not_selected"
        | "pending"
        | "partially_completed"
        | "requires_action"
        | "completed"
        | "failed"
        | (string & {});
    /**
     * IDs of every disposition recorded for this Return, oldest first, including failed and
     * canceled dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read
     * them inline. [] (Value): string. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     */
    "return_disposition_ids": Array<string>;
    /**
     * Present only when `expand` includes `return_dispositions`. The dispositions in
     * `return_disposition_ids`, in the same order. [] (Value): {@link
     * WebhookSnapshotReturnDisposition}. A decision about how returned merchandise will be
     * handled.
     */
    "return_dispositions"?: Array<WebhookSnapshotReturnDisposition>;
    /**
     * Unique identifier for this return, prefixed `ret_`. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
    /**
     * IDs of every inspection recorded for this Return, oldest first, including superseded
     * inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read them
     * inline. [] (Value): string. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
     */
    "return_inspection_ids": Array<string>;
    /**
     * Present only when `expand` includes `return_inspections`. The inspections in
     * `return_inspection_ids`, in the same order. [] (Value): {@link
     * WebhookSnapshotReturnInspection}. An assessment of the condition of returned items.
     */
    "return_inspections"?: Array<WebhookSnapshotReturnInspection>;
    /** Human-readable number for the Return. */
    "return_number": string;
    /**
     * IDs of every receipt recorded for this Return, oldest first, including superseded receipts.
     * Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them inline. [] (Value):
     * string. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     */
    "return_receipt_ids": Array<string>;
    /**
     * Present only when `expand` includes `return_receipts`. The receipts in `return_receipt_ids`,
     * in the same order. [] (Value): {@link WebhookSnapshotReturnReceipt}. A record of returned
     * items arriving at a location.
     */
    "return_receipts"?: Array<WebhookSnapshotReturnReceipt>;
    /**
     * IDs of every resolution created for this Return, oldest first, including failed and canceled
     * resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them
     * inline. [] (Value): string. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_ids": Array<string>;
    /**
     * Present only when `expand` includes `return_resolutions`. The resolutions in
     * `return_resolution_ids`, in the same order. [] (Value): {@link
     * WebhookSnapshotReturnResolution}. The refund, exchange, or other outcome of a return.
     */
    "return_resolutions"?: Array<WebhookSnapshotReturnResolution>;
    /**
     * IDs of every shipment raised to send this Return's items back, oldest first, including
     * voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline.
     * [] (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     */
    "shipment_ids": Array<string>;
    /**
     * Present only when `expand` includes `shipments`. Summaries of the shipments in
     * `shipment_ids`, in the same order. [] (Value): {@link ExpandedShipmentSummary}. A shipment's
     * summary fields, including direction, status, and package count, returned when the shipment
     * is expanded.
     */
    "shipments"?: Array<ExpandedShipmentSummary>;
    /**
     * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
     * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
     * "declined", "canceled".
     */
    "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
    /**
     * Actions that can succeed now. Actions the API key or token doesn't have the scope for are
     * left out. A Return waiting for a decision lists `decide` and `cancel`. An open Return lists
     * `cancel` only while no units have been received, inspected, dispositioned, or resolved, and
     * it has no current receipts or inspections, non-canceled dispositions or resolutions, or
     * non-voided return shipments. It lists `complete` when `completion_mode` is `manual` and
     * `completion_blockers` is empty. A completed Return lists `reopen`. A declined or canceled
     * Return lists none. [] enum: "cancel", "complete", "decide", "process", "reopen". [] (Value):
     * string. Value enum: "cancel", "complete", "decide", "process", "reopen".
     */
    "supported_actions": Array<"cancel" | "complete" | "decide" | "process" | "reopen" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Goes up with every change to the Return. Each activity's `return_version` is the version
     * that activity produced. A write that takes `expected_version` or `expected_return_version`
     * for this Return compares it with this value. Format: int64. minimum: 0.
     */
    "version": number;
};
/** A decision about how returned merchandise will be handled. */
export type WebhookSnapshotReturnDisposition = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "canceled_at"?: string;
    /**
     * Who canceled the disposition. Merchant reads only. Who performed a return action: a buyer,
     * merchant, integration, or the system, with an optional ID.
     */
    "canceled_by"?: ReturnActor;
    /**
     * Why the disposition was canceled. Value enum: "created_in_error", "changed_disposition",
     * "duplicate", "other".
     */
    "cancellation_reason"?: "created_in_error" | "changed_disposition" | "duplicate" | "other" | (string & {});
    /** Detail sent with the cancellation. Merchant reads only. */
    "cancellation_reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Who created the disposition. Who performed a return action: a buyer, merchant, integration,
     * or the system, with an optional ID.
     */
    "created_by": ReturnActor;
    /**
     * What happens to the received units. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer",
     * "lost".
     */
    "disposition_type": "sellable"
        | "quality_control"
        | "damaged"
        | "quarantined"
        | "repair"
        | "refurbish"
        | "liquidate"
        | "donate"
        | "discard"
        | "return_to_buyer"
        | "lost"
        | (string & {});
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Reason code for a failed merchandise disposition, when available. Value enum:
     * "inventory_effect_failed", "inventory_item_unmapped".
     */
    "failure_code"?: "inventory_effect_failed" | "inventory_item_unmapped" | (string & {});
    /** Explanation of a failed merchandise disposition, when available. */
    "failure_message"?: string;
    /**
     * The Idempotency-Key of the request that created this resource. `null` when that request sent
     * no key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource.
     */
    "idempotency_key"?: string | null;
    /**
     * ID of the Location whose stock the disposition changes. Required for `sellable`,
     * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types.
     * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "inventory_location_id"?: string;
    /**
     * IDs of the inventory movements the disposition wrote. Empty when it moved no stock. []
     * (Value): string. Example: "invm_01KEZF7C00DYPFT9PS0NZY805Z".
     */
    "inventory_movement_ids": Array<string>;
    /**
     * ID of the inventory receipt the disposition recorded. Absent when it recorded none. Example:
     * "invrec_01KEZF7C00JXXCYA06SH8RCM2N".
     */
    "inventory_receipt_id"?: string;
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata": MetadataMap;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Why the disposition was made. Value enum: "inspection_result", "return_policy",
     * "warehouse_override", "safety_requirement", "other".
     */
    "reason": "inspection_result"
        | "return_policy"
        | "warehouse_override"
        | "safety_requirement"
        | "other"
        | (string & {});
    /** Optional detail about `reason`, kept with the record. */
    "reason_message"?: string;
    /**
     * ID of the disposition that took over this one. Present when a replacement canceled it.
     * Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     */
    "replaced_by_return_disposition_id"?: string;
    /**
     * ID of the `failed` or `canceled` disposition this one replaces. It takes over that
     * disposition's unused capacity. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     */
    "replaces_return_disposition_id"?: string;
    /**
     * Unique identifier for this return disposition, prefixed `retdsp_`. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     */
    "return_disposition_id": string;
    /** ID of the Return the disposition belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
    "return_id": string;
    /**
     * Inspection that owns return_inspection_line_item_id. `null` when
     * return_inspection_line_item_id is null. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
     */
    "return_inspection_id": string | null;
    /**
     * ID of the inspection line the disposition covers. Absent when it covers a receipt line.
     * Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4".
     */
    "return_inspection_line_item_id"?: string;
    /** ID of the Return line the units belong to. Example: "retli_01KEZF7C00R813VR7ECXS062QG". */
    "return_line_item_id"?: string;
    /**
     * Receipt that owns return_receipt_line_item_id. `null` when return_receipt_line_item_id is
     * null. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     */
    "return_receipt_id": string | null;
    /**
     * ID of the receipt line the disposition covers. Absent when it covers an inspection line.
     * Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE".
     */
    "return_receipt_line_item_id"?: string;
    /**
     * Whether inventory has applied the disposition. Value enum: "pending", "succeeded", "failed",
     * "canceled".
     */
    "status": "pending" | "succeeded" | "failed" | "canceled" | (string & {});
    /**
     * Actions that can succeed now. Empty unless the parent Return is open. cancel is listed only
     * before the inventory effect starts. [] enum: "cancel", "retry". [] (Value): string. Value
     * enum: "cancel", "retry".
     */
    "supported_actions": Array<"cancel" | "retry" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64. minimum: 0.
     */
    "version": number;
};
/** An assessment of the condition of returned items. */
export type WebhookSnapshotReturnInspection = {
    /**
     * Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     */
    "correction_reason"?: "entry_error"
        | "duplicate_observation"
        | "source_correction"
        | "reconciliation_correction"
        | "other"
        | (string & {});
    /** Detail about `correction_reason`. */
    "correction_reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Dispositions Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. [] (Value): {@link
     * WebhookSnapshotReturnDisposition}. A decision about how returned merchandise will be
     * handled.
     */
    "generated_dispositions": Array<WebhookSnapshotReturnDisposition>;
    /**
     * The Idempotency-Key of the request that created this resource. `null` when that request sent
     * no key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource.
     */
    "idempotency_key"?: string | null;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "inspected_at": string;
    /**
     * Location where the returned merchandise was inspected. Must match the receipt
     * receiving_location_id. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "inspection_location_id": string;
    /**
     * The lines recorded. [] (Value): {@link ReturnInspectionLineItem}. The inspection result for
     * a returned item.
     */
    "line_items": Array<ReturnInspectionLineItem>;
    /** ID of the Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
    "return_id": string;
    /**
     * Unique identifier for this return inspection, prefixed `retins_`. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
     */
    "return_inspection_id": string;
    /** ID of the receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". */
    "return_receipt_id": string;
    /**
     * System that recorded the observation. `null` when no source system was recorded. anyOf[1]
     * (Value): {@link ReturnSourceSystem}. The system a return event came from, such as a point of
     * sale or warehouse system, with its own identifier. anyOf[2] (Value): null.
     */
    "source_system": ((ReturnSourceSystem) | (null));
    /**
     * Whether this is the current observation of these units or a correction replaced it. Value
     * enum: "current", "superseded".
     */
    "status": "current" | "superseded" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "superseded_at"?: string;
    /**
     * ID of the inspection that corrected this one. Absent while it is current. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
     */
    "superseded_by_return_inspection_id"?: string;
    /** ID of the inspection this one corrects. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". */
    "supersedes_return_inspection_id"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64. minimum: 1.
     */
    "version": number;
};
/** An item included in a return request. */
export type WebhookSnapshotReturnLineItem = {
    /**
     * Inspected units that were accepted. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "accepted_quantity": number;
    /**
     * Resolution types that can settle this line's approved quantity. [] enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit". [] (Value): string. Value
     * enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Units the decision approved. Whole-number quantity; fractional quantities are not supported.
     * Format: int64.
     */
    "approved_quantity": number;
    /**
     * The refund, store_credit, or no_monetary_action resolution Flint creates and confirms
     * automatically. Absent when the merchant resolves manually. Example: "refund". Value enum:
     * "refund", "store_credit", "no_monetary_action".
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /**
     * Approved quantity that can still be assigned to a new resolution. Every non-canceled
     * resolution reserves its line quantity, including proposed, pending, action-required, failed,
     * and completed resolutions. Whole-number quantity; fractional quantities are not supported.
     * Format: int64.
     */
    "available_resolution_quantity": number;
    /**
     * Components of the bundle the line was sold from. [] (Value): {@link BundleComponent}. An
     * item included in a bundle.
     */
    "bundle_components": Array<BundleComponent>;
    /** ID of the bundle the line was sold from. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /** Note the buyer gave about this line. Some return reasons require one. */
    "buyer_note"?: string;
    /**
     * Approved units canceled later. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "canceled_quantity": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Who recorded the decision on this line. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "decided_by"?: ReturnActor;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "decision_at"?: string;
    /**
     * Why the line's declined quantity was declined. Value enum: "not_eligible",
     * "quantity_unavailable", "evidence_missing", "suspected_abuse", "merchant_discretion",
     * "other".
     */
    "decline_reason"?: "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other"
        | (string & {});
    /** Detail sent with the decline. */
    "decline_reason_message"?: string;
    /**
     * Units the decision declined. Whole-number quantity; fractional quantities are not supported.
     * Format: int64.
     */
    "declined_quantity": number;
    /** Description of the item as sold. */
    "description"?: string;
    /**
     * Units with a successful disposition. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "dispositioned_quantity": number;
    /**
     * How the pinned return policy judged this line when the Return was created, with the policy
     * revision it used. Whether a return line is eligible under policy, with the eligible
     * quantity, allowed resolution types, and any policy adjustments.
     */
    "eligibility": ReturnLineItemEligibility;
    /**
     * Present only when `expand` includes `line_items.fulfillment`; `null` when expanded and there
     * is no related fulfillment. anyOf[1] (Value): {@link WebhookSnapshotFulfillment}. Work
     * required to deliver an order's items. anyOf[2] (Value): null.
     */
    "fulfillment"?: ((WebhookSnapshotFulfillment) | (null));
    /**
     * ID of the fulfillment the units were delivered in. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id": string;
    /**
     * Units the buyer handed off for the trip back. Whole-number quantity; fractional quantities
     * are not supported. Format: int64.
     */
    "handed_off_quantity": number;
    /** Image of the item as sold. An image with its URL, size, and alt text. */
    "image"?: Image;
    /**
     * Units that have been inspected. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "inspected_quantity": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "inspection_waived_at"?: string;
    /**
     * Who waived inspection for this line. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "inspection_waived_by"?: ReturnActor;
    /**
     * Why inspection was waived for this line. Value enum: "policy_override",
     * "trusted_in_store_handoff", "merchant_review", "other".
     */
    "inspection_waiver_reason"?: "policy_override" | "trusted_in_store_handoff" | "merchant_review" | "other" | (string & {});
    /** Detail sent when inspection was waived. */
    "inspection_waiver_reason_message"?: string;
    /** Whether returned units of this line must be inspected. */
    "is_inspection_required"?: boolean;
    /**
     * Whether the decision overrode the pinned return policy's proposal. `override_reason` says
     * why.
     */
    "is_policy_overridden": boolean;
    /**
     * Where this line's merchandise stands, from handoff through disposition. Value enum:
     * "not_required", "awaiting_handoff", "in_transit", "partially_received",
     * "inspection_required", "partially_inspected", "inspection_review_required",
     * "disposition_required", "resolved".
     */
    "merchandise_status": "not_required"
        | "awaiting_handoff"
        | "in_transit"
        | "partially_received"
        | "inspection_required"
        | "partially_inspected"
        | "inspection_review_required"
        | "disposition_required"
        | "resolved"
        | (string & {});
    /**
     * Modifiers selected on the order line, with their prices. [] (Value): {@link
     * OrderLineItemModifier}. A modifier selected on an order line item.
     */
    "modifiers": Array<OrderLineItemModifier>;
    /** Name of the item as sold. */
    "name": string;
    /** Order that owns order_line_item_id. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /** ID of the order line item the units come from. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
    "order_line_item_id": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "overridden_at"?: string;
    /**
     * Who recorded the override. Who performed a return action: a buyer, merchant, integration, or
     * the system, with an optional ID.
     */
    "overridden_by"?: ReturnActor;
    /**
     * Why the decision overrode the pinned return policy's proposal. Value enum:
     * "customer_service_exception", "policy_correction", "risk_review", "merchant_discretion",
     * "other".
     */
    "override_reason"?: "customer_service_exception"
        | "policy_correction"
        | "risk_review"
        | "merchant_discretion"
        | "other"
        | (string & {});
    /** Detail sent with the override. */
    "override_reason_message"?: string;
    /**
     * ID of the catalog product the item was sold from. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * Units that arrived. Whole-number quantity; fractional quantities are not supported. Format:
     * int64.
     */
    "received_quantity": number;
    /**
     * ID of the Location the buyer sends the merchandise to. Absent when none has to come back.
     * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id"?: string;
    /**
     * Inspected units that were rejected. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "rejected_quantity": number;
    /**
     * Committed resolution execution gate, filled for every approved line: after_inspection when
     * merchandise and inspection are required, after_receipt when merchandise is required without
     * inspection, or after_approval when merchandise is not required, unless the policy or
     * decision sets a timing explicitly. Applies to every resolution type, including exchanges and
     * replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /**
     * Units the request asked to return. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "requested_quantity": number;
    /**
     * Outcome requested for this line when it was created. Absent when none was requested. Value
     * enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
    /**
     * ID of the variant requested for this exchange. The merchant chooses the replacement and
     * confirms its price during resolution.
     */
    "requested_variant"?: string;
    /**
     * Whether the value for this line's approved quantity has been delivered. Value enum:
     * "not_selected", "pending", "requires_action", "completed", "failed".
     */
    "resolution_status": "not_selected" | "pending" | "requires_action" | "completed" | "failed" | (string & {});
    /**
     * Units whose resolution has finished. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "resolved_quantity": number;
    /** ID of the Return this line belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
    "return_id": string;
    /**
     * Unique identifier for this return line item, prefixed `retli_`. Example:
     * "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
    /**
     * Present only when `expand` includes `line_items.return_reason`; `null` when expanded and
     * there is no related return reason. anyOf[1] (Value): {@link ReturnReason}. A reason
     * customers can select when requesting a return. anyOf[2] (Value): null.
     */
    "return_reason"?: ((ReturnReason) | (null));
    /**
     * Handle of the chosen reason, captured when the line is created or its reason changes. Later
     * renames, deactivation or archiving don't change it.
     */
    "return_reason_handle": string;
    /** ID of the reason chosen for this line. Example: "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E". */
    "return_reason_id": string;
    /**
     * Name of the chosen reason, captured when the line is created or its reason changes. Later
     * renames, deactivation or archiving don't change it.
     */
    "return_reason_name": string;
    /**
     * How much of the approved quantity the buyer must physically send back; fractional quantities
     * are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and
     * the Return still settles the money. Format: int64.
     */
    "return_required_quantity": number;
    /**
     * IDs of the resolutions that include this line, oldest first, including failed and canceled
     * resolutions. [] (Value): string. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_ids": Array<string>;
    /**
     * Value of the line's units, fixed when the line was created: what the buyer paid for them,
     * less what was already refunded or returned. The value of a return line: unit price,
     * subtotal, discount, tax, and total.
     */
    "return_value": ReturnLineItemValue;
    /**
     * Inspected units still waiting for an acceptance decision. Whole-number quantity; fractional
     * quantities are not supported. Format: int64.
     */
    "review_required_quantity": number;
    /**
     * Variant options selected for the item, such as size and color. [] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** SKU of the item as sold. */
    "sku"?: string;
    /**
     * Where this line stands. Same values and meanings as the Return's `status`, applied to the
     * line. Value enum: "requested", "open", "completed", "declined", "canceled".
     */
    "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
    /**
     * Actions that can succeed now. Actions the API key or token doesn't have the scope for are
     * left out. For an open line with uncanceled approved quantity, `cancel` is listed while
     * approved quantity remains after accounting for handoff, receipt, inspection, disposition,
     * non-canceled resolutions, and non-voided return shipment allocations. `waive_inspection` is
     * listed while inspection is required and no unit has been inspected. [] enum: "cancel",
     * "waive_inspection". [] (Value): string. Value enum: "cancel", "waive_inspection".
     */
    "supported_actions": Array<"cancel" | "waive_inspection" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * ID of the catalog variant the item was sold from. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
};
/** A record of returned items arriving at a location. */
export type WebhookSnapshotReturnReceipt = {
    /**
     * Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     */
    "correction_reason"?: "entry_error"
        | "duplicate_observation"
        | "source_correction"
        | "reconciliation_correction"
        | "other"
        | (string & {});
    /** Detail about `correction_reason`. */
    "correction_reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Dispositions Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. [] (Value): {@link
     * WebhookSnapshotReturnDisposition}. A decision about how returned merchandise will be
     * handled.
     */
    "generated_dispositions": Array<WebhookSnapshotReturnDisposition>;
    /**
     * The Idempotency-Key of the request that created this resource. `null` when that request sent
     * no key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource.
     */
    "idempotency_key"?: string | null;
    /**
     * The lines recorded. [] (Value): {@link ReturnReceiptLineItem}. A returned item recorded as
     * received.
     */
    "line_items": Array<ReturnReceiptLineItem>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "received_at": string;
    /** ID of the Location that received the goods. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "receiving_location_id": string;
    /** ID of the Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
    "return_id": string;
    /**
     * Unique identifier for this return receipt, prefixed `retrc_`. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     */
    "return_receipt_id": string;
    /**
     * ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a
     * shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     */
    "shipment_id"?: string;
    /**
     * System that recorded the observation. `null` when no source system was recorded. anyOf[1]
     * (Value): {@link ReturnSourceSystem}. The system a return event came from, such as a point of
     * sale or warehouse system, with its own identifier. anyOf[2] (Value): null.
     */
    "source_system": ((ReturnSourceSystem) | (null));
    /**
     * Whether this is the current observation of these units or a correction replaced it. Value
     * enum: "current", "superseded".
     */
    "status": "current" | "superseded" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "superseded_at"?: string;
    /**
     * ID of the receipt that corrected this one. Absent while it is current. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     */
    "superseded_by_return_receipt_id"?: string;
    /** ID of the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". */
    "supersedes_return_receipt_id"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64. minimum: 1.
     */
    "version": number;
};
