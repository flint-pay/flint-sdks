import type { ResponseMeta } from './types-62.js';
import type { InputValue } from '../runtime.js';
import type { CreateFileRequestInput, CreateFulfillmentEventRequestInput } from './types-9.js';
import type {
    DisputesAcceptParams,
    ExpandedPaymentIntentSummary,
    ExpandedPaymentIntentSummaryPreviousAttributes,
    ExpandedOrderSummary,
    ExpandedPackageSummary,
    ExpandedShipmentSummary,
    ExpandedOrderSummaryPreviousAttributes,
    ExpandedPackageSummaryPreviousAttributes,
    ExpandedShipmentSummaryPreviousAttributes
} from './types-26.js';
import type {
    Dispute,
    DisputePreviousAttributes,
    DigitalFulfillmentDetails,
    DigitalFulfillmentDetailsPreviousAttributes
} from './types-25.js';
import type { MerchantWebhookEnvelope, MetadataMap, MetadataRequestInput } from './types-43.js';
import type { PartnerWebhookEnvelope } from './types-50.js';
import type { MoneyValue, MoneyValuePreviousAttributes } from './types-44.js';
import type { DeliveryFulfillmentDetails, DeliveryFulfillmentDetailsPreviousAttributes } from './types-19.js';
import type {
    FulfillmentOutcome,
    FulfillmentRecipient,
    FulfillmentOutcomePreviousAttributes,
    FulfillmentRecipientPreviousAttributes
} from './types-28.js';
import type { PickupFulfillmentDetails, PickupFulfillmentDetailsPreviousAttributes } from './types-55.js';
import type { ServiceFulfillmentDetails, ServiceFulfillmentDetailsPreviousAttributes } from './types-67.js';
import type {
    ShipmentFulfillmentDetails,
    ShipmentFulfillmentDetailsPreviousAttributes,
    SinglePackageCreateRequest,
    SinglePackageCreateRequestInput
} from './types-68.js';
import type { CreatePackageItemRequest, CreatePackageItemRequestInput } from './types-12.js';
import type { PackageCreateRequest, PackageCreateRequestInput } from './types-48.js';
import type { OrderLineItemModifier, OrderLineItemModifierPreviousAttributes } from './types-46.js';
/**
 * A subscription's summary fields, including status, billing period, and next billing time,
 * returned when the subscription is expanded.
 */
export type ExpandedSubscriptionSummary = {
    /**
     * UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned
     * schedules; 0 when no anchor day is set. Format: int32.
     */
    "billing_anchor_day": number;
    /** True when the subscription is scheduled to cancel instead of renewing. */
    "cancel_at_period_end": boolean;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "current_period_end_at"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "current_period_start_at"?: string;
    /** The customer this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
    "customer_id": string;
    /**
     * When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only
     * while a trialing or active subscription has a billing date and isn't set to cancel at the
     * end of its period. Absent when no renewal is scheduled: a paused subscription resumes at
     * scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and
     * retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start
     * begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule
     * awaiting a date reports is_awaiting_billing_schedule. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "next_billing_at"?: string;
    /**
     * Where the subscription is in its lifecycle. Each value says what it means. Value enum:
     * "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
     */
    "status": "trialing"
        | "active"
        | "paused"
        | "past_due"
        | "canceled"
        | "incomplete"
        | "scheduled"
        | (string & {});
    /**
     * Unique identifier for this subscription, prefixed `sub_`. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id": string;
    /**
     * ID of the subscription plan the terms come from. An empty string when `terms_type` is
     * `subscription_offer`. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id": string;
    /**
     * Merchant lifecycle actions accepted by the subscription's current state. Always present with
     * merchant credentials. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew",
     * "change_plan", "change_quantity". [] (Value): string. Value enum: "cancel", "pause",
     * "resume", "skip_cycle", "renew", "change_plan", "change_quantity".
     */
    "supported_actions"?: Array<"cancel"
        | "pause"
        | "resume"
        | "skip_cycle"
        | "renew"
        | "change_plan"
        | "change_quantity"
        | (string & {})>;
    /**
     * Terms come from the subscription plan in subscription_plan_id, or from subscription offers
     * identified on each offer line by subscription_offer_id. Value enum: "subscription_plan",
     * "subscription_offer".
     */
    "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at"?: string;
};
export type ExpandedSubscriptionSummaryPreviousAttributes = {
    /**
     * UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned
     * schedules; 0 when no anchor day is set. anyOf[1] (Value): integer. UTC day of the month used
     * for monthly and yearly billing. Applies only to Flint-owned schedules; 0 when no anchor day
     * is set. Format: int32. anyOf[2] (Value): null.
     */
    "billing_anchor_day"?: ((number) | (null));
    /**
     * True when the subscription is scheduled to cancel instead of renewing. anyOf[1] (Value):
     * boolean. True when the subscription is scheduled to cancel instead of renewing. anyOf[2]
     * (Value): null.
     */
    "cancel_at_period_end"?: ((boolean) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "created_at"?: ((string) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "current_period_end_at"?: ((string) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "current_period_start_at"?: ((string) | (null));
    /**
     * The customer this subscription bills. anyOf[1] (Value): string. The customer this
     * subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
     */
    "customer_id"?: ((string) | (null));
    /**
     * When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only
     * while a trialing or active subscription has a billing date and isn't set to cancel at the
     * end of its period. Absent when no renewal is scheduled: a paused subscription resumes at
     * scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and
     * retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start
     * begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule
     * awaiting a date reports is_awaiting_billing_schedule. anyOf[1] (Value): string. When Flint
     * next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a
     * trialing or active subscription has a billing date and isn't set to cancel at the end of its
     * period. Absent when no renewal is scheduled: a paused subscription resumes at
     * scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and
     * retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start
     * begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule
     * awaiting a date reports is_awaiting_billing_schedule. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "next_billing_at"?: ((string) | (null));
    /**
     * Where the subscription is in its lifecycle. Each value says what it means. Value enum:
     * "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled". anyOf[1]
     * (Value): string. Where the subscription is in its lifecycle. Each value says what it means.
     * Value enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
     * "scheduled". anyOf[2] (Value): null.
     */
    "status"?: (("trialing"
        | "active"
        | "paused"
        | "past_due"
        | "canceled"
        | "incomplete"
        | "scheduled"
        | (string & {}))
        | (null));
    /**
     * Unique identifier for this subscription, prefixed `sub_`. anyOf[1] (Value): string. Unique
     * identifier for this subscription, prefixed `sub_`. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
     */
    "subscription_id"?: ((string) | (null));
    /**
     * ID of the subscription plan the terms come from. An empty string when `terms_type` is
     * `subscription_offer`. anyOf[1] (Value): string. ID of the subscription plan the terms come
     * from. An empty string when `terms_type` is `subscription_offer`. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". anyOf[2] (Value): null.
     */
    "subscription_plan_id"?: ((string) | (null));
    /**
     * Merchant lifecycle actions accepted by the subscription's current state. Always present with
     * merchant credentials. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew",
     * "change_plan", "change_quantity". anyOf[1] (Value): Array of string. Merchant lifecycle
     * actions accepted by the subscription's current state. Always present with merchant
     * credentials. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
     * "change_quantity". anyOf[1][] (Value): string. Value enum: "cancel", "pause", "resume",
     * "skip_cycle", "renew", "change_plan", "change_quantity". anyOf[2] (Value): null.
     */
    "supported_actions"?: ((Array<"cancel"
        | "pause"
        | "resume"
        | "skip_cycle"
        | "renew"
        | "change_plan"
        | "change_quantity"
        | (string & {})>)
        | (null));
    /**
     * Terms come from the subscription plan in subscription_plan_id, or from subscription offers
     * identified on each offer line by subscription_offer_id. Value enum: "subscription_plan",
     * "subscription_offer". anyOf[1] (Value): string. Terms come from the subscription plan in
     * subscription_plan_id, or from subscription offers identified on each offer line by
     * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer". anyOf[2]
     * (Value): null.
     */
    "terms_type"?: (("subscription_plan" | "subscription_offer" | (string & {})) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "updated_at"?: ((string) | (null));
};
/** Records fulfillment failure and explicitly releases or preserves the allocated quantities. */
export type FailFulfillmentRequest = {
    /**
     * Whether to send or suppress the buyer notification for this action. Value enum: "send",
     * "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the action occurred, as an RFC 3339 timestamp. On complete, also records completion
     * evidence. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string;
    /**
     * Your internal note explaining this transition. Not included in buyer emails. minLength: 1.
     * maxLength: 500.
     */
    "reason_message"?: string;
    /**
     * Whether the failed fulfillment releases its quantities for another fulfillment. false
     * preserves the allocation.
     */
    "release_quantity": boolean;
};
/** Records fulfillment failure and explicitly releases or preserves the allocated quantities. */
export type FailFulfillmentRequestInput = {
    /**
     * Whether to send or suppress the buyer notification for this action. Value enum: "send",
     * "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the action occurred, as an RFC 3339 timestamp. On complete, also records completion
     * evidence. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Your internal note explaining this transition. Not included in buyer emails. minLength: 1.
     * maxLength: 500.
     */
    "reason_message"?: string;
    /**
     * Whether the failed fulfillment releases its quantities for another fulfillment. false
     * preserves the allocation.
     */
    "release_quantity": boolean;
};
/**
 * Merchant-only evidence from one failed payment attempt. Fields absent from the original attempt
 * are omitted.
 */
export type FailedPaymentAttempt = {
    /** Email used for risk evaluation at admission. */
    "buyer_email"?: string;
    /**
     * Canonical buyer IP stored at admission. API-key relays must supply a trusted
     * buyer_ip_address.
     */
    "buyer_ip_address"?: string;
    /** Card brand recorded before authorization, when available. */
    "card_brand"?: string;
    /** Card issuing country, when provided by the processor. Not the buyer IP's country. */
    "card_country"?: string;
    /**
     * Merchant/environment-scoped fingerprint used by risk card-fingerprint lists. Never a raw
     * provider fingerprint.
     */
    "card_fingerprint"?: string;
    /** Last four card digits recorded before authorization. Not a unique card identity. */
    "card_last4"?: string;
    /** UTC time the attempt was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Stable decline code recorded for this attempt. */
    "decline_code": string;
    /** Identity of the failed attempt. Example: "pia_01KEZF7C00CGGHWWR7KPCGNJRM". */
    "payment_attempt_id": string;
};
export type FailedPaymentAttemptPreviousAttributes = {
    /**
     * Email used for risk evaluation at admission. anyOf[1] (Value): string. Email used for risk
     * evaluation at admission. anyOf[2] (Value): null.
     */
    "buyer_email"?: ((string) | (null));
    /**
     * Canonical buyer IP stored at admission. API-key relays must supply a trusted
     * buyer_ip_address. anyOf[1] (Value): string. Canonical buyer IP stored at admission. API-key
     * relays must supply a trusted buyer_ip_address. anyOf[2] (Value): null.
     */
    "buyer_ip_address"?: ((string) | (null));
    /**
     * Card brand recorded before authorization, when available. anyOf[1] (Value): string. Card
     * brand recorded before authorization, when available. anyOf[2] (Value): null.
     */
    "card_brand"?: ((string) | (null));
    /**
     * Card issuing country, when provided by the processor. Not the buyer IP's country. anyOf[1]
     * (Value): string. Card issuing country, when provided by the processor. Not the buyer IP's
     * country. anyOf[2] (Value): null.
     */
    "card_country"?: ((string) | (null));
    /**
     * Merchant/environment-scoped fingerprint used by risk card-fingerprint lists. Never a raw
     * provider fingerprint. anyOf[1] (Value): string. Merchant/environment-scoped fingerprint used
     * by risk card-fingerprint lists. Never a raw provider fingerprint. anyOf[2] (Value): null.
     */
    "card_fingerprint"?: ((string) | (null));
    /**
     * Last four card digits recorded before authorization. Not a unique card identity. anyOf[1]
     * (Value): string. Last four card digits recorded before authorization. Not a unique card
     * identity. anyOf[2] (Value): null.
     */
    "card_last4"?: ((string) | (null));
    /**
     * UTC time the attempt was created. anyOf[1] (Value): string. UTC time the attempt was
     * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "created_at"?: ((string) | (null));
    /**
     * Stable decline code recorded for this attempt. anyOf[1] (Value): string. Stable decline code
     * recorded for this attempt. anyOf[2] (Value): null.
     */
    "decline_code"?: ((string) | (null));
    /**
     * Identity of the failed attempt. anyOf[1] (Value): string. Identity of the failed attempt.
     * Example: "pia_01KEZF7C00CGGHWWR7KPCGNJRM". anyOf[2] (Value): null.
     */
    "payment_attempt_id"?: ((string) | (null));
};
/**
 * An image uploaded to Flint. Create the file, PUT its bytes to upload.url with upload.headers,
 * then complete it. Attach a ready file with images[].file_id on a catalog resource or file_id in
 * a branding image field. A ready unattached file expires after 24 hours; attachment removes that
 * deadline. Each upload has its own file_id, including uploads of identical bytes.
 */
export type File = {
    /**
     * The stored image media type when ready; the declared upload media type otherwise. Value
     * enum: "image/jpeg", "image/png", "image/webp".
     */
    "content_type": "image/jpeg" | "image/png" | "image/webp" | (string & {});
    /** When the upload was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * When this file expires if it stays in its current status. While awaiting_upload, equals
     * upload.expires_at. While ready and unattached, 24 hours after processing or 7 days after its
     * last detachment. Omitted while attached and in every other status. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string;
    /**
     * A safe failure category, present only when failed. Unknown processing causes use
     * processing_failed. Value enum: "image_unsupported", "image_too_large", "processing_failed".
     */
    "failure_code"?: "image_unsupported" | "image_too_large" | "processing_failed" | (string & {});
    /**
     * The file's stable Flint ID. pattern: ^file_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "file_01KEZF7C00BZ179303GY9R0P03".
     */
    "file_id": string;
    /** The stored image height in pixels, present only when ready. Format: int32. */
    "height"?: number;
    /**
     * What the image is used for. Set when the file is created. Value enum: "product",
     * "product_variant", "bundle", "payment_link", "subscription_plan", "merchant_logo",
     * "merchant_icon".
     */
    "purpose": "product"
        | "product_variant"
        | "bundle"
        | "payment_link"
        | "subscription_plan"
        | "merchant_logo"
        | "merchant_icon"
        | (string & {});
    /** The stored image size when ready; the declared upload size otherwise. Format: int64. */
    "size_bytes": number;
    /**
     * Where the file is in its lifecycle. Only a `ready` file can be attached. Value enum:
     * "awaiting_upload", "processing", "ready", "failed", "expired".
     */
    "status": "awaiting_upload" | "processing" | "ready" | "failed" | "expired" | (string & {});
    /**
     * Lifecycle actions Flint accepts now. complete is offered while awaiting_upload or processing
     * and remains accepted for completed files, returning the completed file. It can remain
     * available after an attachment deadline expires until Flint removes the stored file. An
     * in-progress completion can still return a transient refusal. [] enum: "complete". []
     * (Value): string. Value enum: "complete".
     */
    "supported_actions": Array<"complete" | (string & {})>;
    /**
     * Present only in the create response while awaiting_upload. GET never returns upload
     * credentials. PUT bytes before upload.expires_at, then complete the file. The signed upload
     * target for a file: the URL, HTTP method, headers to send, and when the URL expires.
     */
    "upload"?: FileUpload;
    /**
     * The canonical image URL, present when ready. Attach the file with images[].file_id, or copy
     * this URL into source_url on another resource. Format: uri. Example:
     * "https://example.com/receipt".
     */
    "url"?: string;
    /** The stored image width in pixels, present only when ready. Format: int32. */
    "width"?: number;
};
/** A response containing `File` data. */
export type FileResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An image uploaded to
     * Flint. Create the file, PUT its bytes to upload.url with upload.headers, then complete it.
     * Attach a ready file with images[].file_id on a catalog resource or file_id in a branding
     * image field. A ready unattached file expires after 24 hours; attachment removes that
     * deadline. Each upload has its own file_id, including uploads of identical bytes.
     */
    "data": File;
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
 * The signed upload target for a file: the URL, HTTP method, headers to send, and when the URL
 * expires.
 */
export type FileUpload = {
    /**
     * When the signed upload URL expires, 15 minutes after creation. Create a new file if it
     * expires. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /** Headers to send verbatim with the upload. * (Value): string. */
    "headers": Record<string, string>;
    /** HTTP method to upload the bytes with. Value enum: "PUT". */
    "method": "PUT" | (string & {});
    /**
     * A signed upload target. Send the bytes with method and headers verbatim; keep the URL out of
     * logs. Returned only to the credential that created it, and omitted when another credential
     * replays the request. Format: uri. Example: "https://example.com/receipt".
     */
    "url"?: string;
};
export type FilesCompleteParams = (InputValue<{}> | {})
    & {
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
export type FilesCreateParams = (InputValue<CreateFileRequestInput>)
    & {
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
export type FilesGetParams = DisputesAcceptParams;
/** A notice that a payment may be fraudulent. */
export type FraudWarning = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Present only when `expand` includes `dispute`; `null` when expanded and there is no related
     * dispute. anyOf[1] (Value): {@link Dispute}. A challenge to a collected payment. anyOf[2]
     * (Value): null.
     */
    "dispute"?: ((Dispute) | (null));
    /**
     * The dispute that opened on this payment after the warning. `null` when no dispute has
     * opened. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     */
    "dispute_id": string | null;
    /**
     * The kind of fraud the card network reported. Value enum: "card_never_received",
     * "fraudulent_card_application", "made_with_counterfeit_card", "made_with_lost_card",
     * "made_with_stolen_card", "unauthorized_use_of_card", "other".
     */
    "fraud_type": "card_never_received"
        | "fraudulent_card_application"
        | "made_with_counterfeit_card"
        | "made_with_lost_card"
        | "made_with_stolen_card"
        | "unauthorized_use_of_card"
        | "other"
        | (string & {});
    /**
     * Unique identifier for this fraud warning, prefixed `frw_`. Example:
     * "frw_01KEZF7C00WD6W4TAFS0FH851W".
     */
    "fraud_warning_id": string;
    /**
     * true until the payment is refunded in full, a dispute opens on it, or the card network marks
     * the warning resolved; after that it stays false. A partial refund doesn't change it.
     */
    "is_actionable": boolean;
    /**
     * Present only when `expand` includes `payment_intent`; `null` when expanded and there is no
     * related payment intent. anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
     * intent's summary fields, including amount, status, and capture method, returned when the
     * payment intent is expanded. anyOf[2] (Value): null.
     */
    "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
    /** ID of the payment the warning is about. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id": string;
    /**
     * The payment's amount, buyer email, and card, for recognizing it. Payment details shown on a
     * public fraud warning: amount, buyer email, card brand, and last four digits.
     */
    "payment_summary": FraudWarningPaymentSummary;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "reported_at": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
};
export type FraudWarningCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "dispute"?: ((Dispute) | (null));
            "dispute_id": string | null;
            "fraud_type": "card_never_received"
                | "fraudulent_card_application"
                | "made_with_counterfeit_card"
                | "made_with_lost_card"
                | "made_with_stolen_card"
                | "unauthorized_use_of_card"
                | "other"
                | (string & {});
            "fraud_warning_id": string;
            "is_actionable": boolean;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id": string;
            "payment_summary": FraudWarningPaymentSummary;
            "reported_at": string;
            "updated_at": string;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "fraud_warning.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "dispute"?: ((Dispute) | (null));
            "dispute_id": string | null;
            "fraud_type": "card_never_received"
                | "fraudulent_card_application"
                | "made_with_counterfeit_card"
                | "made_with_lost_card"
                | "made_with_stolen_card"
                | "unauthorized_use_of_card"
                | "other"
                | (string & {});
            "fraud_warning_id": string;
            "is_actionable": boolean;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id": string;
            "payment_summary": FraudWarningPaymentSummary;
            "reported_at": string;
            "updated_at": string;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "fraud_warning.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "fraud_warning.created";
});
/**
 * The `fraud_warning.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type FraudWarningCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.dispute (Optional): {@link Dispute} or
     * null. Present only when `expand` includes `dispute`; `null` when expanded and there is no
     * related dispute. object.dispute.anyOf[1] (Value): {@link Dispute}. A challenge to a
     * collected payment. object.dispute.anyOf[2] (Value): null. object.dispute_id (Required):
     * string or null. The dispute that opened on this payment after the warning. `null` when no
     * dispute has opened. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". object.fraud_type (Required):
     * string. The kind of fraud the card network reported. Value enum: "card_never_received",
     * "fraudulent_card_application", "made_with_counterfeit_card", "made_with_lost_card",
     * "made_with_stolen_card", "unauthorized_use_of_card", "other". object.fraud_warning_id
     * (Required): string. Unique identifier for this fraud warning, prefixed `frw_`. Example:
     * "frw_01KEZF7C00WD6W4TAFS0FH851W". object.is_actionable (Required): boolean. true until the
     * payment is refunded in full, a dispute opens on it, or the card network marks the warning
     * resolved; after that it stays false. A partial refund doesn't change it.
     * object.payment_intent (Optional): {@link ExpandedPaymentIntentSummary} or null. Present only
     * when `expand` includes `payment_intent`; `null` when expanded and there is no related
     * payment intent. object.payment_intent.anyOf[1] (Value): {@link
     * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status,
     * and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Required): string.
     * ID of the payment the warning is about. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * object.payment_summary (Required): {@link FraudWarningPaymentSummary}. The payment's amount,
     * buyer email, and card, for recognizing it. Payment details shown on a public fraud warning:
     * amount, buyer email, card brand, and last four digits. object.reported_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". dispute (Optional): {@link Dispute} or null. Present only when
         * `expand` includes `dispute`; `null` when expanded and there is no related dispute.
         * dispute.anyOf[1] (Value): {@link Dispute}. A challenge to a collected payment.
         * dispute.anyOf[2] (Value): null. dispute_id (Required): string or null. The dispute that
         * opened on this payment after the warning. `null` when no dispute has opened. Example:
         * "du_01KEZF7C00DEJSF1KTXRT4BBQD". fraud_type (Required): string. The kind of fraud the
         * card network reported. Value enum: "card_never_received", "fraudulent_card_application",
         * "made_with_counterfeit_card", "made_with_lost_card", "made_with_stolen_card",
         * "unauthorized_use_of_card", "other". fraud_warning_id (Required): string. Unique
         * identifier for this fraud warning, prefixed `frw_`. Example:
         * "frw_01KEZF7C00WD6W4TAFS0FH851W". is_actionable (Required): boolean. true until the
         * payment is refunded in full, a dispute opens on it, or the card network marks the
         * warning resolved; after that it stays false. A partial refund doesn't change it.
         * payment_intent (Optional): {@link ExpandedPaymentIntentSummary} or null. Present only
         * when `expand` includes `payment_intent`; `null` when expanded and there is no related
         * payment intent. payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A
         * payment intent's summary fields, including amount, status, and capture method, returned
         * when the payment intent is expanded. payment_intent.anyOf[2] (Value): null.
         * payment_intent_id (Required): string. ID of the payment the warning is about. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_summary (Required): {@link
         * FraudWarningPaymentSummary}. The payment's amount, buyer email, and card, for
         * recognizing it. Payment details shown on a public fraud warning: amount, buyer email,
         * card brand, and last four digits. reported_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at (Required): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `dispute`; `null` when expanded and there is no
             * related dispute. anyOf[1] (Value): {@link Dispute}. A challenge to a collected
             * payment. anyOf[2] (Value): null.
             */
            "dispute"?: ((Dispute) | (null));
            /**
             * The dispute that opened on this payment after the warning. `null` when no dispute
             * has opened. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
             */
            "dispute_id": string | null;
            /**
             * The kind of fraud the card network reported. Value enum: "card_never_received",
             * "fraudulent_card_application", "made_with_counterfeit_card", "made_with_lost_card",
             * "made_with_stolen_card", "unauthorized_use_of_card", "other".
             */
            "fraud_type": "card_never_received"
                | "fraudulent_card_application"
                | "made_with_counterfeit_card"
                | "made_with_lost_card"
                | "made_with_stolen_card"
                | "unauthorized_use_of_card"
                | "other"
                | (string & {});
            /**
             * Unique identifier for this fraud warning, prefixed `frw_`. Example:
             * "frw_01KEZF7C00WD6W4TAFS0FH851W".
             */
            "fraud_warning_id": string;
            /**
             * true until the payment is refunded in full, a dispute opens on it, or the card
             * network marks the warning resolved; after that it stays false. A partial refund
             * doesn't change it.
             */
            "is_actionable": boolean;
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /** ID of the payment the warning is about. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * The payment's amount, buyer email, and card, for recognizing it. Payment details
             * shown on a public fraud warning: amount, buyer email, card brand, and last four
             * digits.
             */
            "payment_summary": FraudWarningPaymentSummary;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "reported_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "fraud_warning.created". */
    "event_type"?: "fraud_warning.created";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
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
});
/**
 * The `fraud_warning.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type FraudWarningCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.dispute (Optional): {@link Dispute} or
     * null. Present only when `expand` includes `dispute`; `null` when expanded and there is no
     * related dispute. object.dispute.anyOf[1] (Value): {@link Dispute}. A challenge to a
     * collected payment. object.dispute.anyOf[2] (Value): null. object.dispute_id (Required):
     * string or null. The dispute that opened on this payment after the warning. `null` when no
     * dispute has opened. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". object.fraud_type (Required):
     * string. The kind of fraud the card network reported. Value enum: "card_never_received",
     * "fraudulent_card_application", "made_with_counterfeit_card", "made_with_lost_card",
     * "made_with_stolen_card", "unauthorized_use_of_card", "other". object.fraud_warning_id
     * (Required): string. Unique identifier for this fraud warning, prefixed `frw_`. Example:
     * "frw_01KEZF7C00WD6W4TAFS0FH851W". object.is_actionable (Required): boolean. true until the
     * payment is refunded in full, a dispute opens on it, or the card network marks the warning
     * resolved; after that it stays false. A partial refund doesn't change it.
     * object.payment_intent (Optional): {@link ExpandedPaymentIntentSummary} or null. Present only
     * when `expand` includes `payment_intent`; `null` when expanded and there is no related
     * payment intent. object.payment_intent.anyOf[1] (Value): {@link
     * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status,
     * and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Required): string.
     * ID of the payment the warning is about. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * object.payment_summary (Required): {@link FraudWarningPaymentSummary}. The payment's amount,
     * buyer email, and card, for recognizing it. Payment details shown on a public fraud warning:
     * amount, buyer email, card brand, and last four digits. object.reported_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". dispute (Optional): {@link Dispute} or null. Present only when
         * `expand` includes `dispute`; `null` when expanded and there is no related dispute.
         * dispute.anyOf[1] (Value): {@link Dispute}. A challenge to a collected payment.
         * dispute.anyOf[2] (Value): null. dispute_id (Required): string or null. The dispute that
         * opened on this payment after the warning. `null` when no dispute has opened. Example:
         * "du_01KEZF7C00DEJSF1KTXRT4BBQD". fraud_type (Required): string. The kind of fraud the
         * card network reported. Value enum: "card_never_received", "fraudulent_card_application",
         * "made_with_counterfeit_card", "made_with_lost_card", "made_with_stolen_card",
         * "unauthorized_use_of_card", "other". fraud_warning_id (Required): string. Unique
         * identifier for this fraud warning, prefixed `frw_`. Example:
         * "frw_01KEZF7C00WD6W4TAFS0FH851W". is_actionable (Required): boolean. true until the
         * payment is refunded in full, a dispute opens on it, or the card network marks the
         * warning resolved; after that it stays false. A partial refund doesn't change it.
         * payment_intent (Optional): {@link ExpandedPaymentIntentSummary} or null. Present only
         * when `expand` includes `payment_intent`; `null` when expanded and there is no related
         * payment intent. payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A
         * payment intent's summary fields, including amount, status, and capture method, returned
         * when the payment intent is expanded. payment_intent.anyOf[2] (Value): null.
         * payment_intent_id (Required): string. ID of the payment the warning is about. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_summary (Required): {@link
         * FraudWarningPaymentSummary}. The payment's amount, buyer email, and card, for
         * recognizing it. Payment details shown on a public fraud warning: amount, buyer email,
         * card brand, and last four digits. reported_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at (Required): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `dispute`; `null` when expanded and there is no
             * related dispute. anyOf[1] (Value): {@link Dispute}. A challenge to a collected
             * payment. anyOf[2] (Value): null.
             */
            "dispute"?: ((Dispute) | (null));
            /**
             * The dispute that opened on this payment after the warning. `null` when no dispute
             * has opened. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
             */
            "dispute_id": string | null;
            /**
             * The kind of fraud the card network reported. Value enum: "card_never_received",
             * "fraudulent_card_application", "made_with_counterfeit_card", "made_with_lost_card",
             * "made_with_stolen_card", "unauthorized_use_of_card", "other".
             */
            "fraud_type": "card_never_received"
                | "fraudulent_card_application"
                | "made_with_counterfeit_card"
                | "made_with_lost_card"
                | "made_with_stolen_card"
                | "unauthorized_use_of_card"
                | "other"
                | (string & {});
            /**
             * Unique identifier for this fraud warning, prefixed `frw_`. Example:
             * "frw_01KEZF7C00WD6W4TAFS0FH851W".
             */
            "fraud_warning_id": string;
            /**
             * true until the payment is refunded in full, a dispute opens on it, or the card
             * network marks the warning resolved; after that it stays false. A partial refund
             * doesn't change it.
             */
            "is_actionable": boolean;
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /** ID of the payment the warning is about. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * The payment's amount, buyer email, and card, for recognizing it. Payment details
             * shown on a public fraud warning: amount, buyer email, card brand, and last four
             * digits.
             */
            "payment_summary": FraudWarningPaymentSummary;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "reported_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "fraud_warning.created". */
    "event_type"?: "fraud_warning.created";
});
/** A page of `FraudWarning` objects. */
export type FraudWarningListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * FraudWarning}. A notice that a payment may be fraudulent.
     */
    "data": Array<FraudWarning>;
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
 * Payment details shown on a public fraud warning: amount, buyer email, card brand, and last four
 * digits.
 */
export type FraudWarningPaymentSummary = {
    /**
     * The payment amount. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "amount_money": MoneyValue;
    /** Email address the buyer gave for the payment. */
    "email": string;
    /** Last four digits of the card. */
    "last4": string;
    /**
     * The card network. Value enum: "amex", "discover", "diners", "jcb", "mastercard", "unionpay",
     * "visa", "unknown".
     */
    "payment_method_brand": "amex"
        | "discover"
        | "diners"
        | "jcb"
        | "mastercard"
        | "unionpay"
        | "visa"
        | "unknown"
        | (string & {});
};
export type FraudWarningPaymentSummaryPreviousAttributes = {
    /**
     * The payment amount. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Email address the buyer gave for the payment. anyOf[1] (Value): string. Email address the
     * buyer gave for the payment. anyOf[2] (Value): null.
     */
    "email"?: ((string) | (null));
    /**
     * Last four digits of the card. anyOf[1] (Value): string. Last four digits of the card.
     * anyOf[2] (Value): null.
     */
    "last4"?: ((string) | (null));
    /**
     * The card network. Value enum: "amex", "discover", "diners", "jcb", "mastercard", "unionpay",
     * "visa", "unknown". anyOf[1] (Value): string. The card network. Value enum: "amex",
     * "discover", "diners", "jcb", "mastercard", "unionpay", "visa", "unknown". anyOf[2] (Value):
     * null.
     */
    "payment_method_brand"?: (("amex"
        | "discover"
        | "diners"
        | "jcb"
        | "mastercard"
        | "unionpay"
        | "visa"
        | "unknown"
        | (string & {}))
        | (null));
};
/** A response containing `FraudWarning` data. */
export type FraudWarningResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A notice that a payment
     * may be fraudulent.
     */
    "data": FraudWarning;
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
export type FraudWarningUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "dispute"?: ((Dispute) | (null));
            "dispute_id": string | null;
            "fraud_type": "card_never_received"
                | "fraudulent_card_application"
                | "made_with_counterfeit_card"
                | "made_with_lost_card"
                | "made_with_stolen_card"
                | "unauthorized_use_of_card"
                | "other"
                | (string & {});
            "fraud_warning_id": string;
            "is_actionable": boolean;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id": string;
            "payment_summary": FraudWarningPaymentSummary;
            "reported_at": string;
            "updated_at": string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "created_at"?: ((string) | (null));
            "dispute"?: ((DisputePreviousAttributes) | (null));
            "dispute_id"?: ((string) | (null));
            "fraud_type"?: (("card_never_received"
                | "fraudulent_card_application"
                | "made_with_counterfeit_card"
                | "made_with_lost_card"
                | "made_with_stolen_card"
                | "unauthorized_use_of_card"
                | "other"
                | (string & {}))
                | (null));
            "fraud_warning_id"?: ((string) | (null));
            "is_actionable"?: ((boolean) | (null));
            "payment_intent"?: ((ExpandedPaymentIntentSummaryPreviousAttributes) | (null));
            "payment_intent_id"?: ((string) | (null));
            "payment_summary"?: ((FraudWarningPaymentSummaryPreviousAttributes) | (null));
            "reported_at"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "fraud_warning.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "dispute"?: ((Dispute) | (null));
            "dispute_id": string | null;
            "fraud_type": "card_never_received"
                | "fraudulent_card_application"
                | "made_with_counterfeit_card"
                | "made_with_lost_card"
                | "made_with_stolen_card"
                | "unauthorized_use_of_card"
                | "other"
                | (string & {});
            "fraud_warning_id": string;
            "is_actionable": boolean;
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            "payment_intent_id": string;
            "payment_summary": FraudWarningPaymentSummary;
            "reported_at": string;
            "updated_at": string;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "created_at"?: ((string) | (null));
            "dispute"?: ((DisputePreviousAttributes) | (null));
            "dispute_id"?: ((string) | (null));
            "fraud_type"?: (("card_never_received"
                | "fraudulent_card_application"
                | "made_with_counterfeit_card"
                | "made_with_lost_card"
                | "made_with_stolen_card"
                | "unauthorized_use_of_card"
                | "other"
                | (string & {}))
                | (null));
            "fraud_warning_id"?: ((string) | (null));
            "is_actionable"?: ((boolean) | (null));
            "payment_intent"?: ((ExpandedPaymentIntentSummaryPreviousAttributes) | (null));
            "payment_intent_id"?: ((string) | (null));
            "payment_summary"?: ((FraudWarningPaymentSummaryPreviousAttributes) | (null));
            "reported_at"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "fraud_warning.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "fraud_warning.updated";
});
/**
 * The `fraud_warning.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type FraudWarningUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.dispute (Optional): {@link Dispute} or
     * null. Present only when `expand` includes `dispute`; `null` when expanded and there is no
     * related dispute. object.dispute.anyOf[1] (Value): {@link Dispute}. A challenge to a
     * collected payment. object.dispute.anyOf[2] (Value): null. object.dispute_id (Required):
     * string or null. The dispute that opened on this payment after the warning. `null` when no
     * dispute has opened. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". object.fraud_type (Required):
     * string. The kind of fraud the card network reported. Value enum: "card_never_received",
     * "fraudulent_card_application", "made_with_counterfeit_card", "made_with_lost_card",
     * "made_with_stolen_card", "unauthorized_use_of_card", "other". object.fraud_warning_id
     * (Required): string. Unique identifier for this fraud warning, prefixed `frw_`. Example:
     * "frw_01KEZF7C00WD6W4TAFS0FH851W". object.is_actionable (Required): boolean. true until the
     * payment is refunded in full, a dispute opens on it, or the card network marks the warning
     * resolved; after that it stays false. A partial refund doesn't change it.
     * object.payment_intent (Optional): {@link ExpandedPaymentIntentSummary} or null. Present only
     * when `expand` includes `payment_intent`; `null` when expanded and there is no related
     * payment intent. object.payment_intent.anyOf[1] (Value): {@link
     * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status,
     * and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Required): string.
     * ID of the payment the warning is about. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * object.payment_summary (Required): {@link FraudWarningPaymentSummary}. The payment's amount,
     * buyer email, and card, for recognizing it. Payment details shown on a public fraud warning:
     * amount, buyer email, card brand, and last four digits. object.reported_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.dispute (Optional): {@link DisputePreviousAttributes} or null.
     * Present only when `expand` includes `dispute`; `null` when expanded and there is no related
     * dispute. previous_attributes.dispute.anyOf[1] (Value): {@link DisputePreviousAttributes}.
     * previous_attributes.dispute.anyOf[2] (Value): null. previous_attributes.dispute_id
     * (Optional): string or null. The dispute that opened on this payment after the warning.
     * `null` when no dispute has opened. previous_attributes.dispute_id.anyOf[1] (Value): string.
     * The dispute that opened on this payment after the warning. `null` when no dispute has
     * opened. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". previous_attributes.dispute_id.anyOf[2]
     * (Value): null. previous_attributes.fraud_type (Optional): string or null. The kind of fraud
     * the card network reported. Value enum: "card_never_received", "fraudulent_card_application",
     * "made_with_counterfeit_card", "made_with_lost_card", "made_with_stolen_card",
     * "unauthorized_use_of_card", "other". previous_attributes.fraud_type.anyOf[1] (Value):
     * string. The kind of fraud the card network reported. Value enum: "card_never_received",
     * "fraudulent_card_application", "made_with_counterfeit_card", "made_with_lost_card",
     * "made_with_stolen_card", "unauthorized_use_of_card", "other".
     * previous_attributes.fraud_type.anyOf[2] (Value): null. previous_attributes.fraud_warning_id
     * (Optional): string or null. Unique identifier for this fraud warning, prefixed `frw_`.
     * previous_attributes.fraud_warning_id.anyOf[1] (Value): string. Unique identifier for this
     * fraud warning, prefixed `frw_`. Example: "frw_01KEZF7C00WD6W4TAFS0FH851W".
     * previous_attributes.fraud_warning_id.anyOf[2] (Value): null.
     * previous_attributes.is_actionable (Optional): boolean or null. true until the payment is
     * refunded in full, a dispute opens on it, or the card network marks the warning resolved;
     * after that it stays false. A partial refund doesn't change it.
     * previous_attributes.is_actionable.anyOf[1] (Value): boolean. true until the payment is
     * refunded in full, a dispute opens on it, or the card network marks the warning resolved;
     * after that it stays false. A partial refund doesn't change it.
     * previous_attributes.is_actionable.anyOf[2] (Value): null. previous_attributes.payment_intent
     * (Optional): {@link ExpandedPaymentIntentSummaryPreviousAttributes} or null. Present only
     * when `expand` includes `payment_intent`; `null` when expanded and there is no related
     * payment intent. previous_attributes.payment_intent.anyOf[1] (Value): {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes}. previous_attributes.payment_intent.anyOf[2]
     * (Value): null. previous_attributes.payment_intent_id (Optional): string or null. ID of the
     * payment the warning is about. previous_attributes.payment_intent_id.anyOf[1] (Value):
     * string. ID of the payment the warning is about. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * previous_attributes.payment_intent_id.anyOf[2] (Value): null.
     * previous_attributes.payment_summary (Optional): {@link
     * FraudWarningPaymentSummaryPreviousAttributes} or null. The payment's amount, buyer email,
     * and card, for recognizing it. previous_attributes.payment_summary.anyOf[1] (Value): {@link
     * FraudWarningPaymentSummaryPreviousAttributes}. previous_attributes.payment_summary.anyOf[2]
     * (Value): null. previous_attributes.reported_at (Optional): string or null. RFC3339
     * timestamp. previous_attributes.reported_at.anyOf[1] (Value): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.reported_at.anyOf[2]
     * (Value): null. previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". dispute (Optional): {@link Dispute} or null. Present only when
         * `expand` includes `dispute`; `null` when expanded and there is no related dispute.
         * dispute.anyOf[1] (Value): {@link Dispute}. A challenge to a collected payment.
         * dispute.anyOf[2] (Value): null. dispute_id (Required): string or null. The dispute that
         * opened on this payment after the warning. `null` when no dispute has opened. Example:
         * "du_01KEZF7C00DEJSF1KTXRT4BBQD". fraud_type (Required): string. The kind of fraud the
         * card network reported. Value enum: "card_never_received", "fraudulent_card_application",
         * "made_with_counterfeit_card", "made_with_lost_card", "made_with_stolen_card",
         * "unauthorized_use_of_card", "other". fraud_warning_id (Required): string. Unique
         * identifier for this fraud warning, prefixed `frw_`. Example:
         * "frw_01KEZF7C00WD6W4TAFS0FH851W". is_actionable (Required): boolean. true until the
         * payment is refunded in full, a dispute opens on it, or the card network marks the
         * warning resolved; after that it stays false. A partial refund doesn't change it.
         * payment_intent (Optional): {@link ExpandedPaymentIntentSummary} or null. Present only
         * when `expand` includes `payment_intent`; `null` when expanded and there is no related
         * payment intent. payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A
         * payment intent's summary fields, including amount, status, and capture method, returned
         * when the payment intent is expanded. payment_intent.anyOf[2] (Value): null.
         * payment_intent_id (Required): string. ID of the payment the warning is about. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_summary (Required): {@link
         * FraudWarningPaymentSummary}. The payment's amount, buyer email, and card, for
         * recognizing it. Payment details shown on a public fraud warning: amount, buyer email,
         * card brand, and last four digits. reported_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at (Required): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `dispute`; `null` when expanded and there is no
             * related dispute. anyOf[1] (Value): {@link Dispute}. A challenge to a collected
             * payment. anyOf[2] (Value): null.
             */
            "dispute"?: ((Dispute) | (null));
            /**
             * The dispute that opened on this payment after the warning. `null` when no dispute
             * has opened. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
             */
            "dispute_id": string | null;
            /**
             * The kind of fraud the card network reported. Value enum: "card_never_received",
             * "fraudulent_card_application", "made_with_counterfeit_card", "made_with_lost_card",
             * "made_with_stolen_card", "unauthorized_use_of_card", "other".
             */
            "fraud_type": "card_never_received"
                | "fraudulent_card_application"
                | "made_with_counterfeit_card"
                | "made_with_lost_card"
                | "made_with_stolen_card"
                | "unauthorized_use_of_card"
                | "other"
                | (string & {});
            /**
             * Unique identifier for this fraud warning, prefixed `frw_`. Example:
             * "frw_01KEZF7C00WD6W4TAFS0FH851W".
             */
            "fraud_warning_id": string;
            /**
             * true until the payment is refunded in full, a dispute opens on it, or the card
             * network marks the warning resolved; after that it stays false. A partial refund
             * doesn't change it.
             */
            "is_actionable": boolean;
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /** ID of the payment the warning is about. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * The payment's amount, buyer email, and card, for recognizing it. Payment details
             * shown on a public fraud warning: amount, buyer email, card brand, and last four
             * digits.
             */
            "payment_summary": FraudWarningPaymentSummary;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "reported_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. created_at (Optional): string or null. RFC3339
         * timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. dispute (Optional):
         * {@link DisputePreviousAttributes} or null. Present only when `expand` includes
         * `dispute`; `null` when expanded and there is no related dispute. dispute.anyOf[1]
         * (Value): {@link DisputePreviousAttributes}. dispute.anyOf[2] (Value): null. dispute_id
         * (Optional): string or null. The dispute that opened on this payment after the warning.
         * `null` when no dispute has opened. dispute_id.anyOf[1] (Value): string. The dispute that
         * opened on this payment after the warning. `null` when no dispute has opened. Example:
         * "du_01KEZF7C00DEJSF1KTXRT4BBQD". dispute_id.anyOf[2] (Value): null. fraud_type
         * (Optional): string or null. The kind of fraud the card network reported. Value enum:
         * "card_never_received", "fraudulent_card_application", "made_with_counterfeit_card",
         * "made_with_lost_card", "made_with_stolen_card", "unauthorized_use_of_card", "other".
         * fraud_type.anyOf[1] (Value): string. The kind of fraud the card network reported. Value
         * enum: "card_never_received", "fraudulent_card_application",
         * "made_with_counterfeit_card", "made_with_lost_card", "made_with_stolen_card",
         * "unauthorized_use_of_card", "other". fraud_type.anyOf[2] (Value): null. fraud_warning_id
         * (Optional): string or null. Unique identifier for this fraud warning, prefixed `frw_`.
         * fraud_warning_id.anyOf[1] (Value): string. Unique identifier for this fraud warning,
         * prefixed `frw_`. Example: "frw_01KEZF7C00WD6W4TAFS0FH851W". fraud_warning_id.anyOf[2]
         * (Value): null. is_actionable (Optional): boolean or null. true until the payment is
         * refunded in full, a dispute opens on it, or the card network marks the warning resolved;
         * after that it stays false. A partial refund doesn't change it. is_actionable.anyOf[1]
         * (Value): boolean. true until the payment is refunded in full, a dispute opens on it, or
         * the card network marks the warning resolved; after that it stays false. A partial refund
         * doesn't change it. is_actionable.anyOf[2] (Value): null. payment_intent (Optional):
         * {@link ExpandedPaymentIntentSummaryPreviousAttributes} or null. Present only when
         * `expand` includes `payment_intent`; `null` when expanded and there is no related payment
         * intent. payment_intent.anyOf[1] (Value): {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes}. payment_intent.anyOf[2] (Value): null.
         * payment_intent_id (Optional): string or null. ID of the payment the warning is about.
         * payment_intent_id.anyOf[1] (Value): string. ID of the payment the warning is about.
         * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intent_id.anyOf[2] (Value): null.
         * payment_summary (Optional): {@link FraudWarningPaymentSummaryPreviousAttributes} or
         * null. The payment's amount, buyer email, and card, for recognizing it.
         * payment_summary.anyOf[1] (Value): {@link FraudWarningPaymentSummaryPreviousAttributes}.
         * payment_summary.anyOf[2] (Value): null. reported_at (Optional): string or null. RFC3339
         * timestamp. reported_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". reported_at.anyOf[2] (Value): null. updated_at
         * (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Present only when `expand` includes `dispute`; `null` when expanded and there is no
             * related dispute. anyOf[1] (Value): {@link DisputePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "dispute"?: ((DisputePreviousAttributes) | (null));
            /**
             * The dispute that opened on this payment after the warning. `null` when no dispute
             * has opened. anyOf[1] (Value): string. The dispute that opened on this payment after
             * the warning. `null` when no dispute has opened. Example:
             * "du_01KEZF7C00DEJSF1KTXRT4BBQD". anyOf[2] (Value): null.
             */
            "dispute_id"?: ((string) | (null));
            /**
             * The kind of fraud the card network reported. Value enum: "card_never_received",
             * "fraudulent_card_application", "made_with_counterfeit_card", "made_with_lost_card",
             * "made_with_stolen_card", "unauthorized_use_of_card", "other". anyOf[1] (Value):
             * string. The kind of fraud the card network reported. Value enum:
             * "card_never_received", "fraudulent_card_application", "made_with_counterfeit_card",
             * "made_with_lost_card", "made_with_stolen_card", "unauthorized_use_of_card", "other".
             * anyOf[2] (Value): null.
             */
            "fraud_type"?: (("card_never_received"
                | "fraudulent_card_application"
                | "made_with_counterfeit_card"
                | "made_with_lost_card"
                | "made_with_stolen_card"
                | "unauthorized_use_of_card"
                | "other"
                | (string & {}))
                | (null));
            /**
             * Unique identifier for this fraud warning, prefixed `frw_`. anyOf[1] (Value): string.
             * Unique identifier for this fraud warning, prefixed `frw_`. Example:
             * "frw_01KEZF7C00WD6W4TAFS0FH851W". anyOf[2] (Value): null.
             */
            "fraud_warning_id"?: ((string) | (null));
            /**
             * true until the payment is refunded in full, a dispute opens on it, or the card
             * network marks the warning resolved; after that it stays false. A partial refund
             * doesn't change it. anyOf[1] (Value): boolean. true until the payment is refunded in
             * full, a dispute opens on it, or the card network marks the warning resolved; after
             * that it stays false. A partial refund doesn't change it. anyOf[2] (Value): null.
             */
            "is_actionable"?: ((boolean) | (null));
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummaryPreviousAttributes) | (null));
            /**
             * ID of the payment the warning is about. anyOf[1] (Value): string. ID of the payment
             * the warning is about. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value):
             * null.
             */
            "payment_intent_id"?: ((string) | (null));
            /**
             * The payment's amount, buyer email, and card, for recognizing it. anyOf[1] (Value):
             * {@link FraudWarningPaymentSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_summary"?: ((FraudWarningPaymentSummaryPreviousAttributes) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "reported_at"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "fraud_warning.updated". */
    "event_type"?: "fraud_warning.updated";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
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
});
/**
 * The `fraud_warning.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type FraudWarningUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.dispute (Optional): {@link Dispute} or
     * null. Present only when `expand` includes `dispute`; `null` when expanded and there is no
     * related dispute. object.dispute.anyOf[1] (Value): {@link Dispute}. A challenge to a
     * collected payment. object.dispute.anyOf[2] (Value): null. object.dispute_id (Required):
     * string or null. The dispute that opened on this payment after the warning. `null` when no
     * dispute has opened. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". object.fraud_type (Required):
     * string. The kind of fraud the card network reported. Value enum: "card_never_received",
     * "fraudulent_card_application", "made_with_counterfeit_card", "made_with_lost_card",
     * "made_with_stolen_card", "unauthorized_use_of_card", "other". object.fraud_warning_id
     * (Required): string. Unique identifier for this fraud warning, prefixed `frw_`. Example:
     * "frw_01KEZF7C00WD6W4TAFS0FH851W". object.is_actionable (Required): boolean. true until the
     * payment is refunded in full, a dispute opens on it, or the card network marks the warning
     * resolved; after that it stays false. A partial refund doesn't change it.
     * object.payment_intent (Optional): {@link ExpandedPaymentIntentSummary} or null. Present only
     * when `expand` includes `payment_intent`; `null` when expanded and there is no related
     * payment intent. object.payment_intent.anyOf[1] (Value): {@link
     * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status,
     * and capture method, returned when the payment intent is expanded.
     * object.payment_intent.anyOf[2] (Value): null. object.payment_intent_id (Required): string.
     * ID of the payment the warning is about. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * object.payment_summary (Required): {@link FraudWarningPaymentSummary}. The payment's amount,
     * buyer email, and card, for recognizing it. Payment details shown on a public fraud warning:
     * amount, buyer email, card brand, and last four digits. object.reported_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.dispute (Optional): {@link DisputePreviousAttributes} or null.
     * Present only when `expand` includes `dispute`; `null` when expanded and there is no related
     * dispute. previous_attributes.dispute.anyOf[1] (Value): {@link DisputePreviousAttributes}.
     * previous_attributes.dispute.anyOf[2] (Value): null. previous_attributes.dispute_id
     * (Optional): string or null. The dispute that opened on this payment after the warning.
     * `null` when no dispute has opened. previous_attributes.dispute_id.anyOf[1] (Value): string.
     * The dispute that opened on this payment after the warning. `null` when no dispute has
     * opened. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD". previous_attributes.dispute_id.anyOf[2]
     * (Value): null. previous_attributes.fraud_type (Optional): string or null. The kind of fraud
     * the card network reported. Value enum: "card_never_received", "fraudulent_card_application",
     * "made_with_counterfeit_card", "made_with_lost_card", "made_with_stolen_card",
     * "unauthorized_use_of_card", "other". previous_attributes.fraud_type.anyOf[1] (Value):
     * string. The kind of fraud the card network reported. Value enum: "card_never_received",
     * "fraudulent_card_application", "made_with_counterfeit_card", "made_with_lost_card",
     * "made_with_stolen_card", "unauthorized_use_of_card", "other".
     * previous_attributes.fraud_type.anyOf[2] (Value): null. previous_attributes.fraud_warning_id
     * (Optional): string or null. Unique identifier for this fraud warning, prefixed `frw_`.
     * previous_attributes.fraud_warning_id.anyOf[1] (Value): string. Unique identifier for this
     * fraud warning, prefixed `frw_`. Example: "frw_01KEZF7C00WD6W4TAFS0FH851W".
     * previous_attributes.fraud_warning_id.anyOf[2] (Value): null.
     * previous_attributes.is_actionable (Optional): boolean or null. true until the payment is
     * refunded in full, a dispute opens on it, or the card network marks the warning resolved;
     * after that it stays false. A partial refund doesn't change it.
     * previous_attributes.is_actionable.anyOf[1] (Value): boolean. true until the payment is
     * refunded in full, a dispute opens on it, or the card network marks the warning resolved;
     * after that it stays false. A partial refund doesn't change it.
     * previous_attributes.is_actionable.anyOf[2] (Value): null. previous_attributes.payment_intent
     * (Optional): {@link ExpandedPaymentIntentSummaryPreviousAttributes} or null. Present only
     * when `expand` includes `payment_intent`; `null` when expanded and there is no related
     * payment intent. previous_attributes.payment_intent.anyOf[1] (Value): {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes}. previous_attributes.payment_intent.anyOf[2]
     * (Value): null. previous_attributes.payment_intent_id (Optional): string or null. ID of the
     * payment the warning is about. previous_attributes.payment_intent_id.anyOf[1] (Value):
     * string. ID of the payment the warning is about. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * previous_attributes.payment_intent_id.anyOf[2] (Value): null.
     * previous_attributes.payment_summary (Optional): {@link
     * FraudWarningPaymentSummaryPreviousAttributes} or null. The payment's amount, buyer email,
     * and card, for recognizing it. previous_attributes.payment_summary.anyOf[1] (Value): {@link
     * FraudWarningPaymentSummaryPreviousAttributes}. previous_attributes.payment_summary.anyOf[2]
     * (Value): null. previous_attributes.reported_at (Optional): string or null. RFC3339
     * timestamp. previous_attributes.reported_at.anyOf[1] (Value): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.reported_at.anyOf[2]
     * (Value): null. previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". dispute (Optional): {@link Dispute} or null. Present only when
         * `expand` includes `dispute`; `null` when expanded and there is no related dispute.
         * dispute.anyOf[1] (Value): {@link Dispute}. A challenge to a collected payment.
         * dispute.anyOf[2] (Value): null. dispute_id (Required): string or null. The dispute that
         * opened on this payment after the warning. `null` when no dispute has opened. Example:
         * "du_01KEZF7C00DEJSF1KTXRT4BBQD". fraud_type (Required): string. The kind of fraud the
         * card network reported. Value enum: "card_never_received", "fraudulent_card_application",
         * "made_with_counterfeit_card", "made_with_lost_card", "made_with_stolen_card",
         * "unauthorized_use_of_card", "other". fraud_warning_id (Required): string. Unique
         * identifier for this fraud warning, prefixed `frw_`. Example:
         * "frw_01KEZF7C00WD6W4TAFS0FH851W". is_actionable (Required): boolean. true until the
         * payment is refunded in full, a dispute opens on it, or the card network marks the
         * warning resolved; after that it stays false. A partial refund doesn't change it.
         * payment_intent (Optional): {@link ExpandedPaymentIntentSummary} or null. Present only
         * when `expand` includes `payment_intent`; `null` when expanded and there is no related
         * payment intent. payment_intent.anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A
         * payment intent's summary fields, including amount, status, and capture method, returned
         * when the payment intent is expanded. payment_intent.anyOf[2] (Value): null.
         * payment_intent_id (Required): string. ID of the payment the warning is about. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_summary (Required): {@link
         * FraudWarningPaymentSummary}. The payment's amount, buyer email, and card, for
         * recognizing it. Payment details shown on a public fraud warning: amount, buyer email,
         * card brand, and last four digits. reported_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at (Required): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `dispute`; `null` when expanded and there is no
             * related dispute. anyOf[1] (Value): {@link Dispute}. A challenge to a collected
             * payment. anyOf[2] (Value): null.
             */
            "dispute"?: ((Dispute) | (null));
            /**
             * The dispute that opened on this payment after the warning. `null` when no dispute
             * has opened. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
             */
            "dispute_id": string | null;
            /**
             * The kind of fraud the card network reported. Value enum: "card_never_received",
             * "fraudulent_card_application", "made_with_counterfeit_card", "made_with_lost_card",
             * "made_with_stolen_card", "unauthorized_use_of_card", "other".
             */
            "fraud_type": "card_never_received"
                | "fraudulent_card_application"
                | "made_with_counterfeit_card"
                | "made_with_lost_card"
                | "made_with_stolen_card"
                | "unauthorized_use_of_card"
                | "other"
                | (string & {});
            /**
             * Unique identifier for this fraud warning, prefixed `frw_`. Example:
             * "frw_01KEZF7C00WD6W4TAFS0FH851W".
             */
            "fraud_warning_id": string;
            /**
             * true until the payment is refunded in full, a dispute opens on it, or the card
             * network marks the warning resolved; after that it stays false. A partial refund
             * doesn't change it.
             */
            "is_actionable": boolean;
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
            /** ID of the payment the warning is about. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * The payment's amount, buyer email, and card, for recognizing it. Payment details
             * shown on a public fraud warning: amount, buyer email, card brand, and last four
             * digits.
             */
            "payment_summary": FraudWarningPaymentSummary;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "reported_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. created_at (Optional): string or null. RFC3339
         * timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. dispute (Optional):
         * {@link DisputePreviousAttributes} or null. Present only when `expand` includes
         * `dispute`; `null` when expanded and there is no related dispute. dispute.anyOf[1]
         * (Value): {@link DisputePreviousAttributes}. dispute.anyOf[2] (Value): null. dispute_id
         * (Optional): string or null. The dispute that opened on this payment after the warning.
         * `null` when no dispute has opened. dispute_id.anyOf[1] (Value): string. The dispute that
         * opened on this payment after the warning. `null` when no dispute has opened. Example:
         * "du_01KEZF7C00DEJSF1KTXRT4BBQD". dispute_id.anyOf[2] (Value): null. fraud_type
         * (Optional): string or null. The kind of fraud the card network reported. Value enum:
         * "card_never_received", "fraudulent_card_application", "made_with_counterfeit_card",
         * "made_with_lost_card", "made_with_stolen_card", "unauthorized_use_of_card", "other".
         * fraud_type.anyOf[1] (Value): string. The kind of fraud the card network reported. Value
         * enum: "card_never_received", "fraudulent_card_application",
         * "made_with_counterfeit_card", "made_with_lost_card", "made_with_stolen_card",
         * "unauthorized_use_of_card", "other". fraud_type.anyOf[2] (Value): null. fraud_warning_id
         * (Optional): string or null. Unique identifier for this fraud warning, prefixed `frw_`.
         * fraud_warning_id.anyOf[1] (Value): string. Unique identifier for this fraud warning,
         * prefixed `frw_`. Example: "frw_01KEZF7C00WD6W4TAFS0FH851W". fraud_warning_id.anyOf[2]
         * (Value): null. is_actionable (Optional): boolean or null. true until the payment is
         * refunded in full, a dispute opens on it, or the card network marks the warning resolved;
         * after that it stays false. A partial refund doesn't change it. is_actionable.anyOf[1]
         * (Value): boolean. true until the payment is refunded in full, a dispute opens on it, or
         * the card network marks the warning resolved; after that it stays false. A partial refund
         * doesn't change it. is_actionable.anyOf[2] (Value): null. payment_intent (Optional):
         * {@link ExpandedPaymentIntentSummaryPreviousAttributes} or null. Present only when
         * `expand` includes `payment_intent`; `null` when expanded and there is no related payment
         * intent. payment_intent.anyOf[1] (Value): {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes}. payment_intent.anyOf[2] (Value): null.
         * payment_intent_id (Optional): string or null. ID of the payment the warning is about.
         * payment_intent_id.anyOf[1] (Value): string. ID of the payment the warning is about.
         * Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intent_id.anyOf[2] (Value): null.
         * payment_summary (Optional): {@link FraudWarningPaymentSummaryPreviousAttributes} or
         * null. The payment's amount, buyer email, and card, for recognizing it.
         * payment_summary.anyOf[1] (Value): {@link FraudWarningPaymentSummaryPreviousAttributes}.
         * payment_summary.anyOf[2] (Value): null. reported_at (Optional): string or null. RFC3339
         * timestamp. reported_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". reported_at.anyOf[2] (Value): null. updated_at
         * (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Present only when `expand` includes `dispute`; `null` when expanded and there is no
             * related dispute. anyOf[1] (Value): {@link DisputePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "dispute"?: ((DisputePreviousAttributes) | (null));
            /**
             * The dispute that opened on this payment after the warning. `null` when no dispute
             * has opened. anyOf[1] (Value): string. The dispute that opened on this payment after
             * the warning. `null` when no dispute has opened. Example:
             * "du_01KEZF7C00DEJSF1KTXRT4BBQD". anyOf[2] (Value): null.
             */
            "dispute_id"?: ((string) | (null));
            /**
             * The kind of fraud the card network reported. Value enum: "card_never_received",
             * "fraudulent_card_application", "made_with_counterfeit_card", "made_with_lost_card",
             * "made_with_stolen_card", "unauthorized_use_of_card", "other". anyOf[1] (Value):
             * string. The kind of fraud the card network reported. Value enum:
             * "card_never_received", "fraudulent_card_application", "made_with_counterfeit_card",
             * "made_with_lost_card", "made_with_stolen_card", "unauthorized_use_of_card", "other".
             * anyOf[2] (Value): null.
             */
            "fraud_type"?: (("card_never_received"
                | "fraudulent_card_application"
                | "made_with_counterfeit_card"
                | "made_with_lost_card"
                | "made_with_stolen_card"
                | "unauthorized_use_of_card"
                | "other"
                | (string & {}))
                | (null));
            /**
             * Unique identifier for this fraud warning, prefixed `frw_`. anyOf[1] (Value): string.
             * Unique identifier for this fraud warning, prefixed `frw_`. Example:
             * "frw_01KEZF7C00WD6W4TAFS0FH851W". anyOf[2] (Value): null.
             */
            "fraud_warning_id"?: ((string) | (null));
            /**
             * true until the payment is refunded in full, a dispute opens on it, or the card
             * network marks the warning resolved; after that it stays false. A partial refund
             * doesn't change it. anyOf[1] (Value): boolean. true until the payment is refunded in
             * full, a dispute opens on it, or the card network marks the warning resolved; after
             * that it stays false. A partial refund doesn't change it. anyOf[2] (Value): null.
             */
            "is_actionable"?: ((boolean) | (null));
            /**
             * Present only when `expand` includes `payment_intent`; `null` when expanded and there
             * is no related payment intent. anyOf[1] (Value): {@link
             * ExpandedPaymentIntentSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_intent"?: ((ExpandedPaymentIntentSummaryPreviousAttributes) | (null));
            /**
             * ID of the payment the warning is about. anyOf[1] (Value): string. ID of the payment
             * the warning is about. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value):
             * null.
             */
            "payment_intent_id"?: ((string) | (null));
            /**
             * The payment's amount, buyer email, and card, for recognizing it. anyOf[1] (Value):
             * {@link FraudWarningPaymentSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_summary"?: ((FraudWarningPaymentSummaryPreviousAttributes) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "reported_at"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "fraud_warning.updated". */
    "event_type"?: "fraud_warning.updated";
});
export type FraudWarningsGetParams = {
    /**
     * Include related objects in the response. Supported expansions: dispute, payment_intent.
     * Expansion requires risk.read plus the read scope for each expanded resource. Limits: at most
     * 10 unique expand paths per request. [] enum: "dispute", "payment_intent". Value enum:
     * "dispute", "payment_intent". anyOf[1] (Value): Array of string. [] enum: "dispute",
     * "payment_intent". anyOf[1][] (Value): string. Value enum: "dispute", "payment_intent".
     * anyOf[2] (Value): string. Value enum: "dispute", "payment_intent".
     */
    "expand"?: InputValue<("dispute" | "payment_intent") | readonly ("dispute" | "payment_intent")[]>;
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
export type FraudWarningsListParams = {
    /** Filter by whether a proactive fraudulent refund can still prevent a dispute. */
    "is_actionable"?: InputValue<boolean>;
    /**
     * Filter by Flint payment intent ID. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: InputValue<string>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
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
     * Include related objects in the response. Supported expansions: dispute, payment_intent.
     * Include the requested related resources using scoped batch reads for this page. Each
     * relationship requires its existing target read scopes. Expansion changes the representation
     * without changing pagination tokens. Limits: at most 10 unique expand paths per request. []
     * enum: "dispute", "payment_intent". Value enum: "dispute", "payment_intent". anyOf[1]
     * (Value): Array of string. [] enum: "dispute", "payment_intent". anyOf[1][] (Value): string.
     * Value enum: "dispute", "payment_intent". anyOf[2] (Value): string. Value enum: "dispute",
     * "payment_intent".
     */
    "expand"?: InputValue<("dispute" | "payment_intent") | readonly ("dispute" | "payment_intent")[]>;
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
/** The merchant freeze reason and an optional version fence for the gift card. */
export type FreezeGiftCardRequest = {
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why the merchant is freezing spending. Value enum: "suspicious_activity",
     * "customer_request", "support_issue".
     */
    "reason": "suspicious_activity" | "customer_request" | "support_issue" | (string & {});
};
/** The merchant freeze reason and an optional version fence for the gift card. */
export type FreezeGiftCardRequestInput = {
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why the merchant is freezing spending. Value enum: "suspicious_activity",
     * "customer_request", "support_issue".
     */
    "reason": "suspicious_activity" | "customer_request" | "support_issue";
};
/** Work required to deliver an order's items. */
export type Fulfillment = {
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
     * for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
export type FulfillmentCanceledEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_hold"?: FulfillmentHold;
            "charges"?: Array<FulfillmentChargeLink>;
            "completed_at"?: string;
            "created_at": string;
            "customer_id"?: string;
            "delivery_choice_group_id"?: string | null;
            "delivery_execution_leg_id"?: string | null;
            "delivery_method_id"?: string | null;
            "delivery_selection_id"?: string | null;
            "device_id"?: string;
            "digital_details"?: DigitalFulfillmentDetails;
            "dispatched_at"?: string;
            "external_reference_id"?: string;
            "fulfillment_id": string;
            "line_items": Array<FulfillmentLineItem>;
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            "location_id"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "order_number"?: string;
            "outcome"?: FulfillmentOutcome;
            "packages"?: Array<ExpandedPackageSummary>;
            "packed_at"?: string;
            "picked_at"?: string;
            "pickup_details"?: PickupFulfillmentDetails;
            "recipient"?: FulfillmentRecipient;
            "scheduled_start_at": string | null;
            "service_details"?: ServiceFulfillmentDetails;
            "shipment_details"?: ShipmentFulfillmentDetails;
            "shipments"?: Array<ExpandedShipmentSummary>;
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
            "terminal_at"?: string;
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "active_hold"?: ((FulfillmentHoldPreviousAttributes) | (null));
            "charges"?: ((Array<FulfillmentChargeLinkPreviousAttributes>) | (null));
            "completed_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "customer_id"?: ((string) | (null));
            "delivery_choice_group_id"?: ((string) | (null));
            "delivery_execution_leg_id"?: ((string) | (null));
            "delivery_method_id"?: ((string) | (null));
            "delivery_selection_id"?: ((string) | (null));
            "device_id"?: ((string) | (null));
            "digital_details"?: ((DigitalFulfillmentDetailsPreviousAttributes) | (null));
            "dispatched_at"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "fulfillment_id"?: ((string) | (null));
            "line_items"?: ((Array<FulfillmentLineItemPreviousAttributes>) | (null));
            "local_delivery_details"?: ((DeliveryFulfillmentDetailsPreviousAttributes) | (null));
            "location_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "order_number"?: ((string) | (null));
            "outcome"?: ((FulfillmentOutcomePreviousAttributes) | (null));
            "packages"?: ((Array<ExpandedPackageSummaryPreviousAttributes>) | (null));
            "packed_at"?: ((string) | (null));
            "picked_at"?: ((string) | (null));
            "pickup_details"?: ((PickupFulfillmentDetailsPreviousAttributes) | (null));
            "recipient"?: ((FulfillmentRecipientPreviousAttributes) | (null));
            "scheduled_start_at"?: ((string) | (null));
            "service_details"?: ((ServiceFulfillmentDetailsPreviousAttributes) | (null));
            "shipment_details"?: ((ShipmentFulfillmentDetailsPreviousAttributes) | (null));
            "shipments"?: ((Array<ExpandedShipmentSummaryPreviousAttributes>) | (null));
            "status"?: (("pending"
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
                | (string & {}))
                | (null));
            "supported_actions"?: ((Array<"accept"
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
                | (string & {})>)
                | (null));
            "terminal_at"?: ((string) | (null));
            "type"?: (("shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {}))
                | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "fulfillment.canceled";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_hold"?: FulfillmentHold;
            "charges"?: Array<FulfillmentChargeLink>;
            "completed_at"?: string;
            "created_at": string;
            "customer_id"?: string;
            "delivery_choice_group_id"?: string | null;
            "delivery_execution_leg_id"?: string | null;
            "delivery_method_id"?: string | null;
            "delivery_selection_id"?: string | null;
            "device_id"?: string;
            "digital_details"?: DigitalFulfillmentDetails;
            "dispatched_at"?: string;
            "external_reference_id"?: string;
            "fulfillment_id": string;
            "line_items": Array<FulfillmentLineItem>;
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            "location_id"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "order_number"?: string;
            "outcome"?: FulfillmentOutcome;
            "packages"?: Array<ExpandedPackageSummary>;
            "packed_at"?: string;
            "picked_at"?: string;
            "pickup_details"?: PickupFulfillmentDetails;
            "recipient"?: FulfillmentRecipient;
            "scheduled_start_at": string | null;
            "service_details"?: ServiceFulfillmentDetails;
            "shipment_details"?: ShipmentFulfillmentDetails;
            "shipments"?: Array<ExpandedShipmentSummary>;
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
            "terminal_at"?: string;
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "active_hold"?: ((FulfillmentHoldPreviousAttributes) | (null));
            "charges"?: ((Array<FulfillmentChargeLinkPreviousAttributes>) | (null));
            "completed_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "customer_id"?: ((string) | (null));
            "delivery_choice_group_id"?: ((string) | (null));
            "delivery_execution_leg_id"?: ((string) | (null));
            "delivery_method_id"?: ((string) | (null));
            "delivery_selection_id"?: ((string) | (null));
            "device_id"?: ((string) | (null));
            "digital_details"?: ((DigitalFulfillmentDetailsPreviousAttributes) | (null));
            "dispatched_at"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "fulfillment_id"?: ((string) | (null));
            "line_items"?: ((Array<FulfillmentLineItemPreviousAttributes>) | (null));
            "local_delivery_details"?: ((DeliveryFulfillmentDetailsPreviousAttributes) | (null));
            "location_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "order_number"?: ((string) | (null));
            "outcome"?: ((FulfillmentOutcomePreviousAttributes) | (null));
            "packages"?: ((Array<ExpandedPackageSummaryPreviousAttributes>) | (null));
            "packed_at"?: ((string) | (null));
            "picked_at"?: ((string) | (null));
            "pickup_details"?: ((PickupFulfillmentDetailsPreviousAttributes) | (null));
            "recipient"?: ((FulfillmentRecipientPreviousAttributes) | (null));
            "scheduled_start_at"?: ((string) | (null));
            "service_details"?: ((ServiceFulfillmentDetailsPreviousAttributes) | (null));
            "shipment_details"?: ((ShipmentFulfillmentDetailsPreviousAttributes) | (null));
            "shipments"?: ((Array<ExpandedShipmentSummaryPreviousAttributes>) | (null));
            "status"?: (("pending"
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
                | (string & {}))
                | (null));
            "supported_actions"?: ((Array<"accept"
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
                | (string & {})>)
                | (null));
            "terminal_at"?: ((string) | (null));
            "type"?: (("shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {}))
                | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "fulfillment.canceled";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "fulfillment.canceled";
});
/**
 * The `fulfillment.canceled` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type FulfillmentCanceledInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.active_hold (Optional): {@link FulfillmentHold}. Current hold
     * details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason,
     * who placed it, and when it became active. object.charges (Optional): Array of {@link
     * FulfillmentChargeLink}. Order charges associated with this fulfillment. object.charges[]
     * (Value): {@link FulfillmentChargeLink}. Links a fulfillment to an order charge by
     * `order_charge_id`. object.completed_at (Optional): string. When the fulfillment was
     * completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required):
     * string. When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.customer_id (Optional): string. Customer receiving this
     * fulfillment, when one is set. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.delivery_choice_group_id (Optional): string or null. Delivery choice group that
     * created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials. Example:
     * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". object.delivery_execution_leg_id (Optional): string or
     * null. Execution leg of the selected delivery option that created this fulfillment. `null`
     * when the merchant created the fulfillment or checkout created it without a delivery quote.
     * Always present with merchant credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
     * object.delivery_method_id (Optional): string or null. Delivery method chosen for this
     * fulfillment. `null` when the merchant created the fulfillment or checkout created it without
     * a delivery quote. Also `null` when it was created before this field was added. Always
     * present with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_selection_id (Optional): string or null. Delivery selection that created
     * this fulfillment. `null` when the merchant created the fulfillment or checkout created it
     * without a delivery quote. Always present with merchant credentials. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". object.device_id (Optional): string. Device associated
     * with the fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
     * object.digital_details (Optional): {@link DigitalFulfillmentDetails}. Delivery URL and
     * completion time for a digital fulfillment. Details of a digital fulfillment: when it was
     * delivered (`delivered_at`) and its `delivery_url`. object.dispatched_at (Optional): string.
     * First time this fulfillment reached dispatched. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.fulfillment_id (Required): string. Stable identifier of the
     * fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.line_items (Required): Array
     * of {@link FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment.
     * object.line_items[] (Value): {@link FulfillmentLineItem}. An order line item and quantity
     * included in a fulfillment, with the modifiers applied to it. object.local_delivery_details
     * (Optional): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
     * details for a local delivery fulfillment. Details of a local delivery fulfillment: courier,
     * timing window, instructions, and tracking. Some fields are omitted for credentials that
     * don't act for the verified customer. object.location_id (Optional): string. Merchant
     * location responsible for this fulfillment. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned key-value metadata associated
     * with the fulfillment. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.order (Optional): {@link ExpandedOrderSummary} or null. Order summary returned when
     * the order relationship is expanded. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.order_number
     * (Optional): string. Human-readable number of the order this fulfillment belongs to. Omitted
     * when the order has no number. object.outcome (Optional): {@link FulfillmentOutcome}.
     * Terminal outcome details. Present exactly when status is no_show. The terminal outcome
     * recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred.
     * object.packages (Optional): Array of {@link ExpandedPackageSummary}. Packages associated
     * with this fulfillment. object.packages[] (Value): {@link ExpandedPackageSummary}. A
     * package's summary fields, including carrier, tracking, status, and supported actions,
     * returned when the package is expanded. object.packed_at (Optional): string. First time this
     * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.picked_at (Optional): string. First time this fulfillment reached picked. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.pickup_details (Optional): {@link
     * PickupFulfillmentDetails}. Pickup window, pickup mode, and handoff times for a pickup
     * fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and
     * instructions name the store the buyer chose and the delivery method's pickup instructions.
     * The note the buyer left for the store is in recipient.instructions. object.recipient
     * (Optional): {@link FulfillmentRecipient}. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name,
     * email, phone, address, and handling instructions. object.scheduled_start_at (Required):
     * string or null. Derived start of the service schedule or pickup, local delivery, or shipment
     * window. Null when no schedule is booked, including digital fulfillments. Details remain the
     * authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and
     * last descending. Sorting by due_at compares this same value with nulls last ascending and
     * first descending. Ties use fulfillment_id in the same direction. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.service_details (Optional): {@link
     * ServiceFulfillmentDetails}. Schedule and completion details for a service fulfillment.
     * Details of a service fulfillment: the scheduled start and end, timezone, completion time,
     * and notes. object.shipment_details (Optional): {@link ShipmentFulfillmentDetails}. Shipping
     * schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments
     * with at least one value. Details of a shipment fulfillment: the shipping window, timezone,
     * and when the shipment was handed to the carrier. object.shipments (Optional): Array of
     * {@link ExpandedShipmentSummary}. Shipments associated with this fulfillment.
     * object.shipments[] (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields,
     * including direction, status, and package count, returned when the shipment is expanded.
     * object.status (Required): string. Current fulfillment lifecycle status. Read
     * supported_actions for available transitions. - `pending`: Work has not started and has not
     * been accepted. Approval may be required before work can begin. - `accepted`: The provider
     * accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the
     * hold to restore active_hold.previous_status, or use a supported forward action. -
     * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment
     * is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed
     * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
     * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason
     * before creating replacement work. - `scheduled`: The fulfillment is scheduled for its
     * recorded service window. - `preparing`: Warehouse or provider preparation is underway. -
     * `picked`: The assigned items have been picked. - `packed`: The assigned items have been
     * packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. -
     * `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value
     * enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     * object.supported_actions (Optional): Array of string. Read-only lifecycle actions accepted
     * now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty
     * when none are available. Values name the verb route with hyphens replaced by underscores.
     * Always present with merchant credentials. [] enum: "accept", "cancel", "complete",
     * "dispatch", "fail", "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
     * "mark_ready", "release_hold", "schedule", "start". object.supported_actions[] (Value):
     * string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". object.terminal_at (Optional): string. When the
     * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records
     * the state transition; completed_at records completion evidence supplied for the fulfillment.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string. How the
     * items are delivered: shipment, pickup, local delivery, digital delivery, or service. Value
     * enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover".
     * object.updated_at (Required): string. When the fulfillment was last updated, in RFC3339
     * format. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Monotonic fulfillment version for expected_version checks. Format: uint64. minimum:
     * 1. previous_attributes (Optional): object and {@link FulfillmentPreviousAttributes}.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.active_hold (Optional): {@link
     * FulfillmentHoldPreviousAttributes} or null. Current hold details. Present exactly when
     * status is on_hold. previous_attributes.active_hold.anyOf[1] (Value): {@link
     * FulfillmentHoldPreviousAttributes}. previous_attributes.active_hold.anyOf[2] (Value): null.
     * previous_attributes.charges (Optional): Array of {@link
     * FulfillmentChargeLinkPreviousAttributes} or null. Order charges associated with this
     * fulfillment. previous_attributes.charges.anyOf[1] (Value): Array of {@link
     * FulfillmentChargeLinkPreviousAttributes}. Order charges associated with this fulfillment.
     * previous_attributes.charges.anyOf[1][] (Value): {@link
     * FulfillmentChargeLinkPreviousAttributes}. previous_attributes.charges.anyOf[2] (Value):
     * null. previous_attributes.completed_at (Optional): string or null. When the fulfillment was
     * completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. previous_attributes.completed_at.anyOf[1] (Value): string. When the fulfillment
     * was completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.completed_at.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. When the fulfillment was created, in RFC3339 format.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the fulfillment was created,
     * in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.customer_id
     * (Optional): string or null. Customer receiving this fulfillment, when one is set.
     * previous_attributes.customer_id.anyOf[1] (Value): string. Customer receiving this
     * fulfillment, when one is set. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_choice_group_id (Optional): string or null. Delivery choice
     * group that created this fulfillment. `null` when the merchant created the fulfillment or
     * checkout created it without a delivery quote. Always present with merchant credentials.
     * previous_attributes.delivery_choice_group_id.anyOf[1] (Value): string. Delivery choice group
     * that created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials. Example:
     * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". previous_attributes.delivery_choice_group_id.anyOf[2]
     * (Value): null. previous_attributes.delivery_execution_leg_id (Optional): string or null.
     * Execution leg of the selected delivery option that created this fulfillment. `null` when the
     * merchant created the fulfillment or checkout created it without a delivery quote. Always
     * present with merchant credentials. previous_attributes.delivery_execution_leg_id.anyOf[1]
     * (Value): string. Execution leg of the selected delivery option that created this
     * fulfillment. `null` when the merchant created the fulfillment or checkout created it without
     * a delivery quote. Always present with merchant credentials. Example:
     * "dleg_01KEZF7C00VB59BKTRC8W4KR4M". previous_attributes.delivery_execution_leg_id.anyOf[2]
     * (Value): null. previous_attributes.delivery_method_id (Optional): string or null. Delivery
     * method chosen for this fulfillment. `null` when the merchant created the fulfillment or
     * checkout created it without a delivery quote. Also `null` when it was created before this
     * field was added. Always present with merchant credentials.
     * previous_attributes.delivery_method_id.anyOf[1] (Value): string. Delivery method chosen for
     * this fulfillment. `null` when the merchant created the fulfillment or checkout created it
     * without a delivery quote. Also `null` when it was created before this field was added.
     * Always present with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * previous_attributes.delivery_method_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_selection_id (Optional): string or null. Delivery selection
     * that created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials.
     * previous_attributes.delivery_selection_id.anyOf[1] (Value): string. Delivery selection that
     * created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". previous_attributes.delivery_selection_id.anyOf[2]
     * (Value): null. previous_attributes.device_id (Optional): string or null. Device associated
     * with the fulfillment, when one is recorded. previous_attributes.device_id.anyOf[1] (Value):
     * string. Device associated with the fulfillment, when one is recorded. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6". previous_attributes.device_id.anyOf[2] (Value): null.
     * previous_attributes.digital_details (Optional): {@link
     * DigitalFulfillmentDetailsPreviousAttributes} or null. Delivery URL and completion time for a
     * digital fulfillment. previous_attributes.digital_details.anyOf[1] (Value): {@link
     * DigitalFulfillmentDetailsPreviousAttributes}. previous_attributes.digital_details.anyOf[2]
     * (Value): null. previous_attributes.dispatched_at (Optional): string or null. First time this
     * fulfillment reached dispatched. previous_attributes.dispatched_at.anyOf[1] (Value): string.
     * First time this fulfillment reached dispatched. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.dispatched_at.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.fulfillment_id (Optional): string or null. Stable identifier of the
     * fulfillment. previous_attributes.fulfillment_id.anyOf[1] (Value): string. Stable identifier
     * of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     * previous_attributes.fulfillment_id.anyOf[2] (Value): null. previous_attributes.line_items
     * (Optional): Array of {@link FulfillmentLineItemPreviousAttributes} or null. Order lines and
     * quantities allocated to this fulfillment. previous_attributes.line_items.anyOf[1] (Value):
     * Array of {@link FulfillmentLineItemPreviousAttributes}. Order lines and quantities allocated
     * to this fulfillment. previous_attributes.line_items.anyOf[1][] (Value): {@link
     * FulfillmentLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2] (Value):
     * null. previous_attributes.local_delivery_details (Optional): {@link
     * DeliveryFulfillmentDetailsPreviousAttributes} or null. Courier, delivery window, and handoff
     * details for a local delivery fulfillment.
     * previous_attributes.local_delivery_details.anyOf[1] (Value): {@link
     * DeliveryFulfillmentDetailsPreviousAttributes}.
     * previous_attributes.local_delivery_details.anyOf[2] (Value): null.
     * previous_attributes.location_id (Optional): string or null. Merchant location responsible
     * for this fulfillment. previous_attributes.location_id.anyOf[1] (Value): string. Merchant
     * location responsible for this fulfillment. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.location_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned key-value metadata associated with the
     * fulfillment. previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary returned when the
     * order relationship is expanded. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. previous_attributes.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummaryPreviousAttributes}. previous_attributes.order.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. Order whose items this fulfillment
     * delivers. previous_attributes.order_id.anyOf[1] (Value): string. Order whose items this
     * fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * previous_attributes.order_id.anyOf[2] (Value): null. previous_attributes.order_number
     * (Optional): string or null. Human-readable number of the order this fulfillment belongs to.
     * Omitted when the order has no number. previous_attributes.order_number.anyOf[1] (Value):
     * string. Human-readable number of the order this fulfillment belongs to. Omitted when the
     * order has no number. previous_attributes.order_number.anyOf[2] (Value): null.
     * previous_attributes.outcome (Optional): {@link FulfillmentOutcomePreviousAttributes} or
     * null. Terminal outcome details. Present exactly when status is no_show.
     * previous_attributes.outcome.anyOf[1] (Value): {@link FulfillmentOutcomePreviousAttributes}.
     * previous_attributes.outcome.anyOf[2] (Value): null. previous_attributes.packages (Optional):
     * Array of {@link ExpandedPackageSummaryPreviousAttributes} or null. Packages associated with
     * this fulfillment. previous_attributes.packages.anyOf[1] (Value): Array of {@link
     * ExpandedPackageSummaryPreviousAttributes}. Packages associated with this fulfillment.
     * previous_attributes.packages.anyOf[1][] (Value): {@link
     * ExpandedPackageSummaryPreviousAttributes}. previous_attributes.packages.anyOf[2] (Value):
     * null. previous_attributes.packed_at (Optional): string or null. First time this fulfillment
     * reached packed. previous_attributes.packed_at.anyOf[1] (Value): string. First time this
     * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.packed_at.anyOf[2] (Value): null. previous_attributes.picked_at
     * (Optional): string or null. First time this fulfillment reached picked.
     * previous_attributes.picked_at.anyOf[1] (Value): string. First time this fulfillment reached
     * picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.picked_at.anyOf[2] (Value): null. previous_attributes.pickup_details
     * (Optional): {@link PickupFulfillmentDetailsPreviousAttributes} or null. Pickup window,
     * pickup mode, and handoff times for a pickup fulfillment.
     * previous_attributes.pickup_details.anyOf[1] (Value): {@link
     * PickupFulfillmentDetailsPreviousAttributes}. previous_attributes.pickup_details.anyOf[2]
     * (Value): null. previous_attributes.recipient (Optional): {@link
     * FulfillmentRecipientPreviousAttributes} or null. Omitted for a checkout session credential
     * that doesn't act for the customer the buyer verified. previous_attributes.recipient.anyOf[1]
     * (Value): {@link FulfillmentRecipientPreviousAttributes}.
     * previous_attributes.recipient.anyOf[2] (Value): null. previous_attributes.scheduled_start_at
     * (Optional): string or null. Derived start of the service schedule or pickup, local delivery,
     * or shipment window. Null when no schedule is booked, including digital fulfillments. Details
     * remain the authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first
     * ascending and last descending. Sorting by due_at compares this same value with nulls last
     * ascending and first descending. Ties use fulfillment_id in the same direction.
     * previous_attributes.scheduled_start_at.anyOf[1] (Value): string. Derived start of the
     * service schedule or pickup, local delivery, or shipment window. Null when no schedule is
     * booked, including digital fulfillments. Details remain the authoritative schedule inputs.
     * Sorting by scheduled_start_at puts nulls first ascending and last descending. Sorting by
     * due_at compares this same value with nulls last ascending and first descending. Ties use
     * fulfillment_id in the same direction. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.scheduled_start_at.anyOf[2] (Value): null.
     * previous_attributes.service_details (Optional): {@link
     * ServiceFulfillmentDetailsPreviousAttributes} or null. Schedule and completion details for a
     * service fulfillment. previous_attributes.service_details.anyOf[1] (Value): {@link
     * ServiceFulfillmentDetailsPreviousAttributes}. previous_attributes.service_details.anyOf[2]
     * (Value): null. previous_attributes.shipment_details (Optional): {@link
     * ShipmentFulfillmentDetailsPreviousAttributes} or null. Shipping schedule and ship time for a
     * shipment fulfillment. Present only on shipment fulfillments with at least one value.
     * previous_attributes.shipment_details.anyOf[1] (Value): {@link
     * ShipmentFulfillmentDetailsPreviousAttributes}. previous_attributes.shipment_details.anyOf[2]
     * (Value): null. previous_attributes.shipments (Optional): Array of {@link
     * ExpandedShipmentSummaryPreviousAttributes} or null. Shipments associated with this
     * fulfillment. previous_attributes.shipments.anyOf[1] (Value): Array of {@link
     * ExpandedShipmentSummaryPreviousAttributes}. Shipments associated with this fulfillment.
     * previous_attributes.shipments.anyOf[1][] (Value): {@link
     * ExpandedShipmentSummaryPreviousAttributes}. previous_attributes.shipments.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. Current fulfillment lifecycle
     * status. Read supported_actions for available transitions. - `pending`: Work has not started
     * and has not been accepted. Approval may be required before work can begin. - `accepted`: The
     * provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused.
     * Release the hold to restore active_hold.previous_status, or use a supported forward action.
     * - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
     * fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work
     * completed successfully. - `canceled`: The fulfillment was intentionally canceled and will
     * not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
     * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its
     * recorded service window. - `preparing`: Warehouse or provider preparation is underway. -
     * `picked`: The assigned items have been picked. - `packed`: The assigned items have been
     * packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. -
     * `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value
     * enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     * previous_attributes.status.anyOf[1] (Value): string. Current fulfillment lifecycle status.
     * Read supported_actions for available transitions. - `pending`: Work has not started and has
     * not been accepted. Approval may be required before work can begin. - `accepted`: The
     * provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused.
     * Release the hold to restore active_hold.previous_status, or use a supported forward action.
     * - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
     * fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work
     * completed successfully. - `canceled`: The fulfillment was intentionally canceled and will
     * not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
     * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its
     * recorded service window. - `preparing`: Warehouse or provider preparation is underway. -
     * `picked`: The assigned items have been picked. - `packed`: The assigned items have been
     * packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. -
     * `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value
     * enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Read-only lifecycle actions accepted now, based on the
     * fulfillment, its order payment status, holds, and shipment progress. Empty when none are
     * available. Values name the verb route with hyphens replaced by underscores. Always present
     * with merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
     * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". previous_attributes.supported_actions.anyOf[1] (Value):
     * Array of string. Read-only lifecycle actions accepted now, based on the fulfillment, its
     * order payment status, holds, and shipment progress. Empty when none are available. Values
     * name the verb route with hyphens replaced by underscores. Always present with merchant
     * credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". previous_attributes.supported_actions.anyOf[1][]
     * (Value): string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". previous_attributes.supported_actions.anyOf[2] (Value):
     * null. previous_attributes.terminal_at (Optional): string or null. When the fulfillment
     * entered a terminal state: completed, canceled, failed, or no_show. This records the state
     * transition; completed_at records completion evidence supplied for the fulfillment.
     * previous_attributes.terminal_at.anyOf[1] (Value): string. When the fulfillment entered a
     * terminal state: completed, canceled, failed, or no_show. This records the state transition;
     * completed_at records completion evidence supplied for the fulfillment. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.terminal_at.anyOf[2] (Value): null.
     * previous_attributes.type (Optional): string or null. How the items are delivered: shipment,
     * pickup, local delivery, digital delivery, or service. Value enum: "shipment", "pickup",
     * "local_delivery", "digital", "service", "handover". previous_attributes.type.anyOf[1]
     * (Value): string. How the items are delivered: shipment, pickup, local delivery, digital
     * delivery, or service. Value enum: "shipment", "pickup", "local_delivery", "digital",
     * "service", "handover". previous_attributes.type.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When the fulfillment was last
     * updated, in RFC3339 format. previous_attributes.updated_at.anyOf[1] (Value): string. When
     * the fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value): null.
     * previous_attributes.version (Optional): integer or null. Monotonic fulfillment version for
     * expected_version checks. previous_attributes.version.anyOf[1] (Value): integer. Monotonic
     * fulfillment version for expected_version checks. Format: uint64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * active_hold (Optional): {@link FulfillmentHold}. Current hold details. Present exactly
         * when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and
         * when it became active. charges (Optional): Array of {@link FulfillmentChargeLink}. Order
         * charges associated with this fulfillment. charges[] (Value): {@link
         * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
         * completed_at (Optional): string. When the fulfillment was completed. Mirrors the
         * completion time for its type: delivered_at for shipment, local delivery, and digital
         * fulfillments, picked_up_at for pickup, and service_details.completed_at for service
         * fulfillments. Omitted until a completion time is recorded. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When the fulfillment was created,
         * in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". customer_id
         * (Optional): string. Customer receiving this fulfillment, when one is set. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". delivery_choice_group_id (Optional): string or null.
         * Delivery choice group that created this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
         * delivery_execution_leg_id (Optional): string or null. Execution leg of the selected
         * delivery option that created this fulfillment. `null` when the merchant created the
         * fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M". delivery_method_id
         * (Optional): string or null. Delivery method chosen for this fulfillment. `null` when the
         * merchant created the fulfillment or checkout created it without a delivery quote. Also
         * `null` when it was created before this field was added. Always present with merchant
         * credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_id
         * (Optional): string or null. Delivery selection that created this fulfillment. `null`
         * when the merchant created the fulfillment or checkout created it without a delivery
         * quote. Always present with merchant credentials. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". device_id (Optional): string. Device associated with
         * the fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
         * digital_details (Optional): {@link DigitalFulfillmentDetails}. Delivery URL and
         * completion time for a digital fulfillment. Details of a digital fulfillment: when it was
         * delivered (`delivered_at`) and its `delivery_url`. dispatched_at (Optional): string.
         * First time this fulfillment reached dispatched. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". fulfillment_id (Required): string. Stable identifier of the
         * fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". line_items (Required): Array of
         * {@link FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment.
         * line_items[] (Value): {@link FulfillmentLineItem}. An order line item and quantity
         * included in a fulfillment, with the modifiers applied to it. local_delivery_details
         * (Optional): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
         * details for a local delivery fulfillment. Details of a local delivery fulfillment:
         * courier, timing window, instructions, and tracking. Some fields are omitted for
         * credentials that don't act for the verified customer. location_id (Optional): string.
         * Merchant location responsible for this fulfillment. Example:
         * "loc_01KEZF7C00CMHRRYA3MV996JB2". metadata (Optional): {@link MetadataMap}. Caller-owned
         * key-value metadata associated with the fulfillment. Caller-owned key-value data stored
         * on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
         * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before
         * those limits may not satisfy them. order (Optional): {@link ExpandedOrderSummary} or
         * null. Order summary returned when the order relationship is expanded. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. Order whose items this fulfillment delivers. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_number (Optional): string. Human-readable number
         * of the order this fulfillment belongs to. Omitted when the order has no number. outcome
         * (Optional): {@link FulfillmentOutcome}. Terminal outcome details. Present exactly when
         * status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show,
         * with its reason, notes, and when it occurred. packages (Optional): Array of {@link
         * ExpandedPackageSummary}. Packages associated with this fulfillment. packages[] (Value):
         * {@link ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
         * status, and supported actions, returned when the package is expanded. packed_at
         * (Optional): string. First time this fulfillment reached packed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". picked_at (Optional): string. First time this
         * fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * pickup_details (Optional): {@link PickupFulfillmentDetails}. Pickup window, pickup mode,
         * and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout
         * creates, location_name, address, and instructions name the store the buyer chose and the
         * delivery method's pickup instructions. The note the buyer left for the store is in
         * recipient.instructions. recipient (Optional): {@link FulfillmentRecipient}. Omitted for
         * a checkout session credential that doesn't act for the customer the buyer verified. The
         * recipient of a fulfillment, with name, email, phone, address, and handling instructions.
         * scheduled_start_at (Required): string or null. Derived start of the service schedule or
         * pickup, local delivery, or shipment window. Null when no schedule is booked, including
         * digital fulfillments. Details remain the authoritative schedule inputs. Sorting by
         * scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at
         * compares this same value with nulls last ascending and first descending. Ties use
         * fulfillment_id in the same direction. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_details (Optional): {@link ServiceFulfillmentDetails}.
         * Schedule and completion details for a service fulfillment. Details of a service
         * fulfillment: the scheduled start and end, timezone, completion time, and notes.
         * shipment_details (Optional): {@link ShipmentFulfillmentDetails}. Shipping schedule and
         * ship time for a shipment fulfillment. Present only on shipment fulfillments with at
         * least one value. Details of a shipment fulfillment: the shipping window, timezone, and
         * when the shipment was handed to the carrier. shipments (Optional): Array of {@link
         * ExpandedShipmentSummary}. Shipments associated with this fulfillment. shipments[]
         * (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields, including
         * direction, status, and package count, returned when the shipment is expanded. status
         * (Required): string. Current fulfillment lifecycle status. Read supported_actions for
         * available transitions. - `pending`: Work has not started and has not been accepted.
         * Approval may be required before work can begin. - `accepted`: The provider accepted the
         * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
         * restore active_hold.previous_status, or use a supported forward action. - `in_progress`:
         * Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready
         * for pickup, handoff, or completion. - `completed`: All fulfillment work completed
         * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
         * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
         * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for
         * its recorded service window. - `preparing`: Warehouse or provider preparation is
         * underway. - `picked`: The assigned items have been picked. - `packed`: The assigned
         * items have been packed. - `dispatched`: The fulfillment left its origin for delivery or
         * handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded
         * reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
         * "dispatched", "no_show". supported_actions (Optional): Array of string. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. Always present with merchant credentials. [] enum:
         * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
         * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
         * "schedule", "start". supported_actions[] (Value): string. Value enum: "accept",
         * "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed",
         * "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start".
         * terminal_at (Optional): string. When the fulfillment entered a terminal state:
         * completed, canceled, failed, or no_show. This records the state transition; completed_at
         * records completion evidence supplied for the fulfillment. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". type (Required): string. How the items are delivered: shipment,
         * pickup, local delivery, digital delivery, or service. Value enum: "shipment", "pickup",
         * "local_delivery", "digital", "service", "handover". updated_at (Required): string. When
         * the fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Monotonic fulfillment version for
         * expected_version checks. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current hold details. Present exactly when status is on_hold. A hold on a
             * fulfillment, with its reason, who placed it, and when it became active.
             */
            "active_hold"?: FulfillmentHold;
            /**
             * Order charges associated with this fulfillment. [] (Value): {@link
             * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
             */
            "charges"?: Array<FulfillmentChargeLink>;
            /**
             * When the fulfillment was completed. Mirrors the completion time for its type:
             * delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at
             * for pickup, and service_details.completed_at for service fulfillments. Omitted until
             * a completion time is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * Delivery choice group that created this fulfillment. `null` when the merchant
             * created the fulfillment or checkout created it without a delivery quote. Always
             * present with merchant credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
             */
            "delivery_choice_group_id"?: string | null;
            /**
             * Execution leg of the selected delivery option that created this fulfillment. `null`
             * when the merchant created the fulfillment or checkout created it without a delivery
             * quote. Always present with merchant credentials. Example:
             * "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
             */
            "delivery_execution_leg_id"?: string | null;
            /**
             * Delivery method chosen for this fulfillment. `null` when the merchant created the
             * fulfillment or checkout created it without a delivery quote. Also `null` when it was
             * created before this field was added. Always present with merchant credentials.
             * Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_id"?: string | null;
            /**
             * Delivery selection that created this fulfillment. `null` when the merchant created
             * the fulfillment or checkout created it without a delivery quote. Always present with
             * merchant credentials. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
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
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Stable identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
            "fulfillment_id": string;
            /**
             * Order lines and quantities allocated to this fulfillment. [] (Value): {@link
             * FulfillmentLineItem}. An order line item and quantity included in a fulfillment,
             * with the modifiers applied to it.
             */
            "line_items": Array<FulfillmentLineItem>;
            /**
             * Courier, delivery window, and handoff details for a local delivery fulfillment.
             * Details of a local delivery fulfillment: courier, timing window, instructions, and
             * tracking. Some fields are omitted for credentials that don't act for the verified
             * customer.
             */
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            /**
             * Merchant location responsible for this fulfillment. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id"?: string;
            /**
             * Caller-owned key-value metadata associated with the fulfillment. Caller-owned
             * key-value data stored on a resource. Keys starting with flint_ are reserved for
             * Flint and are not returned. Writes follow the limits on MetadataInput and
             * MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order whose items this fulfillment delivers. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * Human-readable number of the order this fulfillment belongs to. Omitted when the
             * order has no number.
             */
            "order_number"?: string;
            /**
             * Terminal outcome details. Present exactly when status is no_show. The terminal
             * outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and
             * when it occurred.
             */
            "outcome"?: FulfillmentOutcome;
            /**
             * Packages associated with this fulfillment. [] (Value): {@link
             * ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
             * status, and supported actions, returned when the package is expanded.
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
             * Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup
             * details. For a pickup that checkout creates, location_name, address, and
             * instructions name the store the buyer chose and the delivery method's pickup
             * instructions. The note the buyer left for the store is in recipient.instructions.
             */
            "pickup_details"?: PickupFulfillmentDetails;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The recipient of a fulfillment, with name, email, phone, address,
             * and handling instructions.
             */
            "recipient"?: FulfillmentRecipient;
            /**
             * Derived start of the service schedule or pickup, local delivery, or shipment window.
             * Null when no schedule is booked, including digital fulfillments. Details remain the
             * authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first
             * ascending and last descending. Sorting by due_at compares this same value with nulls
             * last ascending and first descending. Ties use fulfillment_id in the same direction.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_start_at": string | null;
            /**
             * Schedule and completion details for a service fulfillment. Details of a service
             * fulfillment: the scheduled start and end, timezone, completion time, and notes.
             */
            "service_details"?: ServiceFulfillmentDetails;
            /**
             * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
             * fulfillments with at least one value. Details of a shipment fulfillment: the
             * shipping window, timezone, and when the shipment was handed to the carrier.
             */
            "shipment_details"?: ShipmentFulfillmentDetails;
            /**
             * Shipments associated with this fulfillment. [] (Value): {@link
             * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status,
             * and package count, returned when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Current fulfillment lifecycle status. Read supported_actions for available
             * transitions. - `pending`: Work has not started and has not been accepted. Approval
             * may be required before work can begin. - `accepted`: The provider accepted the
             * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
             * restore active_hold.previous_status, or use a supported forward action. -
             * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
             * fulfillment is ready for pickup, handoff, or completion. - `completed`: All
             * fulfillment work completed successfully. - `canceled`: The fulfillment was
             * intentionally canceled and will not continue. - `failed`: The fulfillment could not
             * be completed. Resolve the recorded reason before creating replacement work. -
             * `scheduled`: The fulfillment is scheduled for its recorded service window. -
             * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
             * items have been picked. - `packed`: The assigned items have been packed. -
             * `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`:
             * A service appointment was missed. Read outcome for the recorded reason. Value enum:
             * "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
             * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
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
             * Read-only lifecycle actions accepted now, based on the fulfillment, its order
             * payment status, holds, and shipment progress. Empty when none are available. Values
             * name the verb route with hyphens replaced by underscores. Always present with
             * merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start". [] (Value): string. Value enum:
             * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
             * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
             * "schedule", "start".
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
             * When the fulfillment entered a terminal state: completed, canceled, failed, or
             * no_show. This records the state transition; completed_at records completion evidence
             * supplied for the fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "terminal_at"?: string;
            /**
             * How the items are delivered: shipment, pickup, local delivery, digital delivery, or
             * service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service",
             * "handover".
             */
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {});
            /**
             * When the fulfillment was last updated, in RFC3339 format. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum:
             * 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. active_hold (Optional): {@link
         * FulfillmentHoldPreviousAttributes} or null. Current hold details. Present exactly when
         * status is on_hold. active_hold.anyOf[1] (Value): {@link
         * FulfillmentHoldPreviousAttributes}. active_hold.anyOf[2] (Value): null. charges
         * (Optional): Array of {@link FulfillmentChargeLinkPreviousAttributes} or null. Order
         * charges associated with this fulfillment. charges.anyOf[1] (Value): Array of {@link
         * FulfillmentChargeLinkPreviousAttributes}. Order charges associated with this
         * fulfillment. charges.anyOf[1][] (Value): {@link
         * FulfillmentChargeLinkPreviousAttributes}. charges.anyOf[2] (Value): null. completed_at
         * (Optional): string or null. When the fulfillment was completed. Mirrors the completion
         * time for its type: delivered_at for shipment, local delivery, and digital fulfillments,
         * picked_up_at for pickup, and service_details.completed_at for service fulfillments.
         * Omitted until a completion time is recorded. completed_at.anyOf[1] (Value): string. When
         * the fulfillment was completed. Mirrors the completion time for its type: delivered_at
         * for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and
         * service_details.completed_at for service fulfillments. Omitted until a completion time
         * is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". completed_at.anyOf[2]
         * (Value): null. created_at (Optional): string or null. When the fulfillment was created,
         * in RFC3339 format. created_at.anyOf[1] (Value): string. When the fulfillment was
         * created, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. customer_id (Optional): string or null. Customer
         * receiving this fulfillment, when one is set. customer_id.anyOf[1] (Value): string.
         * Customer receiving this fulfillment, when one is set. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null.
         * delivery_choice_group_id (Optional): string or null. Delivery choice group that created
         * this fulfillment. `null` when the merchant created the fulfillment or checkout created
         * it without a delivery quote. Always present with merchant credentials.
         * delivery_choice_group_id.anyOf[1] (Value): string. Delivery choice group that created
         * this fulfillment. `null` when the merchant created the fulfillment or checkout created
         * it without a delivery quote. Always present with merchant credentials. Example:
         * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". delivery_choice_group_id.anyOf[2] (Value): null.
         * delivery_execution_leg_id (Optional): string or null. Execution leg of the selected
         * delivery option that created this fulfillment. `null` when the merchant created the
         * fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. delivery_execution_leg_id.anyOf[1] (Value): string. Execution leg
         * of the selected delivery option that created this fulfillment. `null` when the merchant
         * created the fulfillment or checkout created it without a delivery quote. Always present
         * with merchant credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
         * delivery_execution_leg_id.anyOf[2] (Value): null. delivery_method_id (Optional): string
         * or null. Delivery method chosen for this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Also `null` when it was
         * created before this field was added. Always present with merchant credentials.
         * delivery_method_id.anyOf[1] (Value): string. Delivery method chosen for this
         * fulfillment. `null` when the merchant created the fulfillment or checkout created it
         * without a delivery quote. Also `null` when it was created before this field was added.
         * Always present with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
         * delivery_method_id.anyOf[2] (Value): null. delivery_selection_id (Optional): string or
         * null. Delivery selection that created this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. delivery_selection_id.anyOf[1] (Value): string. Delivery selection
         * that created this fulfillment. `null` when the merchant created the fulfillment or
         * checkout created it without a delivery quote. Always present with merchant credentials.
         * Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". delivery_selection_id.anyOf[2] (Value):
         * null. device_id (Optional): string or null. Device associated with the fulfillment, when
         * one is recorded. device_id.anyOf[1] (Value): string. Device associated with the
         * fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
         * device_id.anyOf[2] (Value): null. digital_details (Optional): {@link
         * DigitalFulfillmentDetailsPreviousAttributes} or null. Delivery URL and completion time
         * for a digital fulfillment. digital_details.anyOf[1] (Value): {@link
         * DigitalFulfillmentDetailsPreviousAttributes}. digital_details.anyOf[2] (Value): null.
         * dispatched_at (Optional): string or null. First time this fulfillment reached
         * dispatched. dispatched_at.anyOf[1] (Value): string. First time this fulfillment reached
         * dispatched. Format: date-time. Example: "2026-08-02T16:00:00Z". dispatched_at.anyOf[2]
         * (Value): null. external_reference_id (Optional): string or null. Caller-owned identifier
         * for this resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. fulfillment_id
         * (Optional): string or null. Stable identifier of the fulfillment.
         * fulfillment_id.anyOf[1] (Value): string. Stable identifier of the fulfillment. Example:
         * "ful_01KEZF7C00F24WVSTTWR1FQX5T". fulfillment_id.anyOf[2] (Value): null. line_items
         * (Optional): Array of {@link FulfillmentLineItemPreviousAttributes} or null. Order lines
         * and quantities allocated to this fulfillment. line_items.anyOf[1] (Value): Array of
         * {@link FulfillmentLineItemPreviousAttributes}. Order lines and quantities allocated to
         * this fulfillment. line_items.anyOf[1][] (Value): {@link
         * FulfillmentLineItemPreviousAttributes}. line_items.anyOf[2] (Value): null.
         * local_delivery_details (Optional): {@link DeliveryFulfillmentDetailsPreviousAttributes}
         * or null. Courier, delivery window, and handoff details for a local delivery fulfillment.
         * local_delivery_details.anyOf[1] (Value): {@link
         * DeliveryFulfillmentDetailsPreviousAttributes}. local_delivery_details.anyOf[2] (Value):
         * null. location_id (Optional): string or null. Merchant location responsible for this
         * fulfillment. location_id.anyOf[1] (Value): string. Merchant location responsible for
         * this fulfillment. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". location_id.anyOf[2]
         * (Value): null. metadata (Optional): {@link MetadataMap} or null. Caller-owned key-value
         * metadata associated with the fulfillment. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. order (Optional): {@link
         * ExpandedOrderSummaryPreviousAttributes} or null. Order summary returned when the order
         * relationship is expanded. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. Order whose items this fulfillment delivers.
         * order_id.anyOf[1] (Value): string. Order whose items this fulfillment delivers. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. order_number
         * (Optional): string or null. Human-readable number of the order this fulfillment belongs
         * to. Omitted when the order has no number. order_number.anyOf[1] (Value): string.
         * Human-readable number of the order this fulfillment belongs to. Omitted when the order
         * has no number. order_number.anyOf[2] (Value): null. outcome (Optional): {@link
         * FulfillmentOutcomePreviousAttributes} or null. Terminal outcome details. Present exactly
         * when status is no_show. outcome.anyOf[1] (Value): {@link
         * FulfillmentOutcomePreviousAttributes}. outcome.anyOf[2] (Value): null. packages
         * (Optional): Array of {@link ExpandedPackageSummaryPreviousAttributes} or null. Packages
         * associated with this fulfillment. packages.anyOf[1] (Value): Array of {@link
         * ExpandedPackageSummaryPreviousAttributes}. Packages associated with this fulfillment.
         * packages.anyOf[1][] (Value): {@link ExpandedPackageSummaryPreviousAttributes}.
         * packages.anyOf[2] (Value): null. packed_at (Optional): string or null. First time this
         * fulfillment reached packed. packed_at.anyOf[1] (Value): string. First time this
         * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * packed_at.anyOf[2] (Value): null. picked_at (Optional): string or null. First time this
         * fulfillment reached picked. picked_at.anyOf[1] (Value): string. First time this
         * fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * picked_at.anyOf[2] (Value): null. pickup_details (Optional): {@link
         * PickupFulfillmentDetailsPreviousAttributes} or null. Pickup window, pickup mode, and
         * handoff times for a pickup fulfillment. pickup_details.anyOf[1] (Value): {@link
         * PickupFulfillmentDetailsPreviousAttributes}. pickup_details.anyOf[2] (Value): null.
         * recipient (Optional): {@link FulfillmentRecipientPreviousAttributes} or null. Omitted
         * for a checkout session credential that doesn't act for the customer the buyer verified.
         * recipient.anyOf[1] (Value): {@link FulfillmentRecipientPreviousAttributes}.
         * recipient.anyOf[2] (Value): null. scheduled_start_at (Optional): string or null. Derived
         * start of the service schedule or pickup, local delivery, or shipment window. Null when
         * no schedule is booked, including digital fulfillments. Details remain the authoritative
         * schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last
         * descending. Sorting by due_at compares this same value with nulls last ascending and
         * first descending. Ties use fulfillment_id in the same direction.
         * scheduled_start_at.anyOf[1] (Value): string. Derived start of the service schedule or
         * pickup, local delivery, or shipment window. Null when no schedule is booked, including
         * digital fulfillments. Details remain the authoritative schedule inputs. Sorting by
         * scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at
         * compares this same value with nulls last ascending and first descending. Ties use
         * fulfillment_id in the same direction. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". scheduled_start_at.anyOf[2] (Value): null. service_details
         * (Optional): {@link ServiceFulfillmentDetailsPreviousAttributes} or null. Schedule and
         * completion details for a service fulfillment. service_details.anyOf[1] (Value): {@link
         * ServiceFulfillmentDetailsPreviousAttributes}. service_details.anyOf[2] (Value): null.
         * shipment_details (Optional): {@link ShipmentFulfillmentDetailsPreviousAttributes} or
         * null. Shipping schedule and ship time for a shipment fulfillment. Present only on
         * shipment fulfillments with at least one value. shipment_details.anyOf[1] (Value): {@link
         * ShipmentFulfillmentDetailsPreviousAttributes}. shipment_details.anyOf[2] (Value): null.
         * shipments (Optional): Array of {@link ExpandedShipmentSummaryPreviousAttributes} or
         * null. Shipments associated with this fulfillment. shipments.anyOf[1] (Value): Array of
         * {@link ExpandedShipmentSummaryPreviousAttributes}. Shipments associated with this
         * fulfillment. shipments.anyOf[1][] (Value): {@link
         * ExpandedShipmentSummaryPreviousAttributes}. shipments.anyOf[2] (Value): null. status
         * (Optional): string or null. Current fulfillment lifecycle status. Read supported_actions
         * for available transitions. - `pending`: Work has not started and has not been accepted.
         * Approval may be required before work can begin. - `accepted`: The provider accepted the
         * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
         * restore active_hold.previous_status, or use a supported forward action. - `in_progress`:
         * Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready
         * for pickup, handoff, or completion. - `completed`: All fulfillment work completed
         * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
         * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
         * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for
         * its recorded service window. - `preparing`: Warehouse or provider preparation is
         * underway. - `picked`: The assigned items have been picked. - `packed`: The assigned
         * items have been packed. - `dispatched`: The fulfillment left its origin for delivery or
         * handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded
         * reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
         * "dispatched", "no_show". status.anyOf[1] (Value): string. Current fulfillment lifecycle
         * status. Read supported_actions for available transitions. - `pending`: Work has not
         * started and has not been accepted. Approval may be required before work can begin. -
         * `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`:
         * Work is paused. Release the hold to restore active_hold.previous_status, or use a
         * supported forward action. - `in_progress`: Work has started and is not yet ready or
         * complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
         * `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment
         * was intentionally canceled and will not continue. - `failed`: The fulfillment could not
         * be completed. Resolve the recorded reason before creating replacement work. -
         * `scheduled`: The fulfillment is scheduled for its recorded service window. -
         * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
         * items have been picked. - `packed`: The assigned items have been packed. - `dispatched`:
         * The fulfillment left its origin for delivery or handoff. - `no_show`: A service
         * appointment was missed. Read outcome for the recorded reason. Value enum: "pending",
         * "accepted", "on_hold", "in_progress", "ready", "completed", "canceled", "failed",
         * "scheduled", "preparing", "picked", "packed", "dispatched", "no_show". status.anyOf[2]
         * (Value): null. supported_actions (Optional): Array of string or null. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. Always present with merchant credentials. [] enum:
         * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
         * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
         * "schedule", "start". supported_actions.anyOf[1] (Value): Array of string. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. Always present with merchant credentials. [] enum:
         * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
         * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
         * "schedule", "start". supported_actions.anyOf[1][] (Value): string. Value enum: "accept",
         * "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed",
         * "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start".
         * supported_actions.anyOf[2] (Value): null. terminal_at (Optional): string or null. When
         * the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This
         * records the state transition; completed_at records completion evidence supplied for the
         * fulfillment. terminal_at.anyOf[1] (Value): string. When the fulfillment entered a
         * terminal state: completed, canceled, failed, or no_show. This records the state
         * transition; completed_at records completion evidence supplied for the fulfillment.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". terminal_at.anyOf[2] (Value): null.
         * type (Optional): string or null. How the items are delivered: shipment, pickup, local
         * delivery, digital delivery, or service. Value enum: "shipment", "pickup",
         * "local_delivery", "digital", "service", "handover". type.anyOf[1] (Value): string. How
         * the items are delivered: shipment, pickup, local delivery, digital delivery, or service.
         * Value enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover".
         * type.anyOf[2] (Value): null. updated_at (Optional): string or null. When the fulfillment
         * was last updated, in RFC3339 format. updated_at.anyOf[1] (Value): string. When the
         * fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Monotonic fulfillment version for expected_version checks. version.anyOf[1]
         * (Value): integer. Monotonic fulfillment version for expected_version checks. Format:
         * uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Current hold details. Present exactly when status is on_hold. anyOf[1] (Value):
             * {@link FulfillmentHoldPreviousAttributes}. anyOf[2] (Value): null.
             */
            "active_hold"?: ((FulfillmentHoldPreviousAttributes) | (null));
            /**
             * Order charges associated with this fulfillment. anyOf[1] (Value): Array of {@link
             * FulfillmentChargeLinkPreviousAttributes}. Order charges associated with this
             * fulfillment. anyOf[1][] (Value): {@link FulfillmentChargeLinkPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "charges"?: ((Array<FulfillmentChargeLinkPreviousAttributes>) | (null));
            /**
             * When the fulfillment was completed. Mirrors the completion time for its type:
             * delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at
             * for pickup, and service_details.completed_at for service fulfillments. Omitted until
             * a completion time is recorded. anyOf[1] (Value): string. When the fulfillment was
             * completed. Mirrors the completion time for its type: delivered_at for shipment,
             * local delivery, and digital fulfillments, picked_up_at for pickup, and
             * service_details.completed_at for service fulfillments. Omitted until a completion
             * time is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
             * (Value): null.
             */
            "completed_at"?: ((string) | (null));
            /**
             * When the fulfillment was created, in RFC3339 format. anyOf[1] (Value): string. When
             * the fulfillment was created, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Customer receiving this fulfillment, when one is set. anyOf[1] (Value): string.
             * Customer receiving this fulfillment, when one is set. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * Delivery choice group that created this fulfillment. `null` when the merchant
             * created the fulfillment or checkout created it without a delivery quote. Always
             * present with merchant credentials. anyOf[1] (Value): string. Delivery choice group
             * that created this fulfillment. `null` when the merchant created the fulfillment or
             * checkout created it without a delivery quote. Always present with merchant
             * credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". anyOf[2] (Value): null.
             */
            "delivery_choice_group_id"?: ((string) | (null));
            /**
             * Execution leg of the selected delivery option that created this fulfillment. `null`
             * when the merchant created the fulfillment or checkout created it without a delivery
             * quote. Always present with merchant credentials. anyOf[1] (Value): string. Execution
             * leg of the selected delivery option that created this fulfillment. `null` when the
             * merchant created the fulfillment or checkout created it without a delivery quote.
             * Always present with merchant credentials. Example:
             * "dleg_01KEZF7C00VB59BKTRC8W4KR4M". anyOf[2] (Value): null.
             */
            "delivery_execution_leg_id"?: ((string) | (null));
            /**
             * Delivery method chosen for this fulfillment. `null` when the merchant created the
             * fulfillment or checkout created it without a delivery quote. Also `null` when it was
             * created before this field was added. Always present with merchant credentials.
             * anyOf[1] (Value): string. Delivery method chosen for this fulfillment. `null` when
             * the merchant created the fulfillment or checkout created it without a delivery
             * quote. Also `null` when it was created before this field was added. Always present
             * with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2]
             * (Value): null.
             */
            "delivery_method_id"?: ((string) | (null));
            /**
             * Delivery selection that created this fulfillment. `null` when the merchant created
             * the fulfillment or checkout created it without a delivery quote. Always present with
             * merchant credentials. anyOf[1] (Value): string. Delivery selection that created this
             * fulfillment. `null` when the merchant created the fulfillment or checkout created it
             * without a delivery quote. Always present with merchant credentials. Example:
             * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[2] (Value): null.
             */
            "delivery_selection_id"?: ((string) | (null));
            /**
             * Device associated with the fulfillment, when one is recorded. anyOf[1] (Value):
             * string. Device associated with the fulfillment, when one is recorded. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6". anyOf[2] (Value): null.
             */
            "device_id"?: ((string) | (null));
            /**
             * Delivery URL and completion time for a digital fulfillment. anyOf[1] (Value): {@link
             * DigitalFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "digital_details"?: ((DigitalFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * First time this fulfillment reached dispatched. anyOf[1] (Value): string. First time
             * this fulfillment reached dispatched. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "dispatched_at"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Stable identifier of the fulfillment. anyOf[1] (Value): string. Stable identifier of
             * the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". anyOf[2] (Value): null.
             */
            "fulfillment_id"?: ((string) | (null));
            /**
             * Order lines and quantities allocated to this fulfillment. anyOf[1] (Value): Array of
             * {@link FulfillmentLineItemPreviousAttributes}. Order lines and quantities allocated
             * to this fulfillment. anyOf[1][] (Value): {@link
             * FulfillmentLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<FulfillmentLineItemPreviousAttributes>) | (null));
            /**
             * Courier, delivery window, and handoff details for a local delivery fulfillment.
             * anyOf[1] (Value): {@link DeliveryFulfillmentDetailsPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "local_delivery_details"?: ((DeliveryFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Merchant location responsible for this fulfillment. anyOf[1] (Value): string.
             * Merchant location responsible for this fulfillment. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
             */
            "location_id"?: ((string) | (null));
            /**
             * Caller-owned key-value metadata associated with the fulfillment. anyOf[1] (Value):
             * {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * Order whose items this fulfillment delivers. anyOf[1] (Value): string. Order whose
             * items this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2]
             * (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * Human-readable number of the order this fulfillment belongs to. Omitted when the
             * order has no number. anyOf[1] (Value): string. Human-readable number of the order
             * this fulfillment belongs to. Omitted when the order has no number. anyOf[2] (Value):
             * null.
             */
            "order_number"?: ((string) | (null));
            /**
             * Terminal outcome details. Present exactly when status is no_show. anyOf[1] (Value):
             * {@link FulfillmentOutcomePreviousAttributes}. anyOf[2] (Value): null.
             */
            "outcome"?: ((FulfillmentOutcomePreviousAttributes) | (null));
            /**
             * Packages associated with this fulfillment. anyOf[1] (Value): Array of {@link
             * ExpandedPackageSummaryPreviousAttributes}. Packages associated with this
             * fulfillment. anyOf[1][] (Value): {@link ExpandedPackageSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "packages"?: ((Array<ExpandedPackageSummaryPreviousAttributes>) | (null));
            /**
             * First time this fulfillment reached packed. anyOf[1] (Value): string. First time
             * this fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "packed_at"?: ((string) | (null));
            /**
             * First time this fulfillment reached picked. anyOf[1] (Value): string. First time
             * this fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "picked_at"?: ((string) | (null));
            /**
             * Pickup window, pickup mode, and handoff times for a pickup fulfillment. anyOf[1]
             * (Value): {@link PickupFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "pickup_details"?: ((PickupFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. anyOf[1] (Value): {@link FulfillmentRecipientPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "recipient"?: ((FulfillmentRecipientPreviousAttributes) | (null));
            /**
             * Derived start of the service schedule or pickup, local delivery, or shipment window.
             * Null when no schedule is booked, including digital fulfillments. Details remain the
             * authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first
             * ascending and last descending. Sorting by due_at compares this same value with nulls
             * last ascending and first descending. Ties use fulfillment_id in the same direction.
             * anyOf[1] (Value): string. Derived start of the service schedule or pickup, local
             * delivery, or shipment window. Null when no schedule is booked, including digital
             * fulfillments. Details remain the authoritative schedule inputs. Sorting by
             * scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at
             * compares this same value with nulls last ascending and first descending. Ties use
             * fulfillment_id in the same direction. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "scheduled_start_at"?: ((string) | (null));
            /**
             * Schedule and completion details for a service fulfillment. anyOf[1] (Value): {@link
             * ServiceFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "service_details"?: ((ServiceFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
             * fulfillments with at least one value. anyOf[1] (Value): {@link
             * ShipmentFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "shipment_details"?: ((ShipmentFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Shipments associated with this fulfillment. anyOf[1] (Value): Array of {@link
             * ExpandedShipmentSummaryPreviousAttributes}. Shipments associated with this
             * fulfillment. anyOf[1][] (Value): {@link ExpandedShipmentSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "shipments"?: ((Array<ExpandedShipmentSummaryPreviousAttributes>) | (null));
            /**
             * Current fulfillment lifecycle status. Read supported_actions for available
             * transitions. - `pending`: Work has not started and has not been accepted. Approval
             * may be required before work can begin. - `accepted`: The provider accepted the
             * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
             * restore active_hold.previous_status, or use a supported forward action. -
             * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
             * fulfillment is ready for pickup, handoff, or completion. - `completed`: All
             * fulfillment work completed successfully. - `canceled`: The fulfillment was
             * intentionally canceled and will not continue. - `failed`: The fulfillment could not
             * be completed. Resolve the recorded reason before creating replacement work. -
             * `scheduled`: The fulfillment is scheduled for its recorded service window. -
             * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
             * items have been picked. - `packed`: The assigned items have been packed. -
             * `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`:
             * A service appointment was missed. Read outcome for the recorded reason. Value enum:
             * "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
             * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
             * anyOf[1] (Value): string. Current fulfillment lifecycle status. Read
             * supported_actions for available transitions. - `pending`: Work has not started and
             * has not been accepted. Approval may be required before work can begin. - `accepted`:
             * The provider accepted the fulfillment; work has not started. - `on_hold`: Work is
             * paused. Release the hold to restore active_hold.previous_status, or use a supported
             * forward action. - `in_progress`: Work has started and is not yet ready or complete.
             * - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
             * `completed`: All fulfillment work completed successfully. - `canceled`: The
             * fulfillment was intentionally canceled and will not continue. - `failed`: The
             * fulfillment could not be completed. Resolve the recorded reason before creating
             * replacement work. - `scheduled`: The fulfillment is scheduled for its recorded
             * service window. - `preparing`: Warehouse or provider preparation is underway. -
             * `picked`: The assigned items have been picked. - `packed`: The assigned items have
             * been packed. - `dispatched`: The fulfillment left its origin for delivery or
             * handoff. - `no_show`: A service appointment was missed. Read outcome for the
             * recorded reason. Value enum: "pending", "accepted", "on_hold", "in_progress",
             * "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked",
             * "packed", "dispatched", "no_show". anyOf[2] (Value): null.
             */
            "status"?: (("pending"
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
                | (string & {}))
                | (null));
            /**
             * Read-only lifecycle actions accepted now, based on the fulfillment, its order
             * payment status, holds, and shipment progress. Empty when none are available. Values
             * name the verb route with hyphens replaced by underscores. Always present with
             * merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start". anyOf[1] (Value): Array of
             * string. Read-only lifecycle actions accepted now, based on the fulfillment, its
             * order payment status, holds, and shipment progress. Empty when none are available.
             * Values name the verb route with hyphens replaced by underscores. Always present with
             * merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start". anyOf[1][] (Value): string. Value
             * enum: "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
             * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
             * "schedule", "start". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"accept"
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
                | (string & {})>)
                | (null));
            /**
             * When the fulfillment entered a terminal state: completed, canceled, failed, or
             * no_show. This records the state transition; completed_at records completion evidence
             * supplied for the fulfillment. anyOf[1] (Value): string. When the fulfillment entered
             * a terminal state: completed, canceled, failed, or no_show. This records the state
             * transition; completed_at records completion evidence supplied for the fulfillment.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "terminal_at"?: ((string) | (null));
            /**
             * How the items are delivered: shipment, pickup, local delivery, digital delivery, or
             * service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service",
             * "handover". anyOf[1] (Value): string. How the items are delivered: shipment, pickup,
             * local delivery, digital delivery, or service. Value enum: "shipment", "pickup",
             * "local_delivery", "digital", "service", "handover". anyOf[2] (Value): null.
             */
            "type"?: (("shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {}))
                | (null));
            /**
             * When the fulfillment was last updated, in RFC3339 format. anyOf[1] (Value): string.
             * When the fulfillment was last updated, in RFC3339 format. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Monotonic fulfillment version for expected_version checks. anyOf[1] (Value):
             * integer. Monotonic fulfillment version for expected_version checks. Format: uint64.
             * minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "fulfillment.canceled". */
    "event_type"?: "fulfillment.canceled";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
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
});
/**
 * The `fulfillment.canceled` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type FulfillmentCanceledMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.active_hold (Optional): {@link FulfillmentHold}. Current hold
     * details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason,
     * who placed it, and when it became active. object.charges (Optional): Array of {@link
     * FulfillmentChargeLink}. Order charges associated with this fulfillment. object.charges[]
     * (Value): {@link FulfillmentChargeLink}. Links a fulfillment to an order charge by
     * `order_charge_id`. object.completed_at (Optional): string. When the fulfillment was
     * completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required):
     * string. When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.customer_id (Optional): string. Customer receiving this
     * fulfillment, when one is set. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.delivery_choice_group_id (Optional): string or null. Delivery choice group that
     * created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials. Example:
     * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". object.delivery_execution_leg_id (Optional): string or
     * null. Execution leg of the selected delivery option that created this fulfillment. `null`
     * when the merchant created the fulfillment or checkout created it without a delivery quote.
     * Always present with merchant credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
     * object.delivery_method_id (Optional): string or null. Delivery method chosen for this
     * fulfillment. `null` when the merchant created the fulfillment or checkout created it without
     * a delivery quote. Also `null` when it was created before this field was added. Always
     * present with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_selection_id (Optional): string or null. Delivery selection that created
     * this fulfillment. `null` when the merchant created the fulfillment or checkout created it
     * without a delivery quote. Always present with merchant credentials. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". object.device_id (Optional): string. Device associated
     * with the fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
     * object.digital_details (Optional): {@link DigitalFulfillmentDetails}. Delivery URL and
     * completion time for a digital fulfillment. Details of a digital fulfillment: when it was
     * delivered (`delivered_at`) and its `delivery_url`. object.dispatched_at (Optional): string.
     * First time this fulfillment reached dispatched. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.fulfillment_id (Required): string. Stable identifier of the
     * fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.line_items (Required): Array
     * of {@link FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment.
     * object.line_items[] (Value): {@link FulfillmentLineItem}. An order line item and quantity
     * included in a fulfillment, with the modifiers applied to it. object.local_delivery_details
     * (Optional): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
     * details for a local delivery fulfillment. Details of a local delivery fulfillment: courier,
     * timing window, instructions, and tracking. Some fields are omitted for credentials that
     * don't act for the verified customer. object.location_id (Optional): string. Merchant
     * location responsible for this fulfillment. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned key-value metadata associated
     * with the fulfillment. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.order (Optional): {@link ExpandedOrderSummary} or null. Order summary returned when
     * the order relationship is expanded. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.order_number
     * (Optional): string. Human-readable number of the order this fulfillment belongs to. Omitted
     * when the order has no number. object.outcome (Optional): {@link FulfillmentOutcome}.
     * Terminal outcome details. Present exactly when status is no_show. The terminal outcome
     * recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred.
     * object.packages (Optional): Array of {@link ExpandedPackageSummary}. Packages associated
     * with this fulfillment. object.packages[] (Value): {@link ExpandedPackageSummary}. A
     * package's summary fields, including carrier, tracking, status, and supported actions,
     * returned when the package is expanded. object.packed_at (Optional): string. First time this
     * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.picked_at (Optional): string. First time this fulfillment reached picked. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.pickup_details (Optional): {@link
     * PickupFulfillmentDetails}. Pickup window, pickup mode, and handoff times for a pickup
     * fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and
     * instructions name the store the buyer chose and the delivery method's pickup instructions.
     * The note the buyer left for the store is in recipient.instructions. object.recipient
     * (Optional): {@link FulfillmentRecipient}. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name,
     * email, phone, address, and handling instructions. object.scheduled_start_at (Required):
     * string or null. Derived start of the service schedule or pickup, local delivery, or shipment
     * window. Null when no schedule is booked, including digital fulfillments. Details remain the
     * authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and
     * last descending. Sorting by due_at compares this same value with nulls last ascending and
     * first descending. Ties use fulfillment_id in the same direction. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.service_details (Optional): {@link
     * ServiceFulfillmentDetails}. Schedule and completion details for a service fulfillment.
     * Details of a service fulfillment: the scheduled start and end, timezone, completion time,
     * and notes. object.shipment_details (Optional): {@link ShipmentFulfillmentDetails}. Shipping
     * schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments
     * with at least one value. Details of a shipment fulfillment: the shipping window, timezone,
     * and when the shipment was handed to the carrier. object.shipments (Optional): Array of
     * {@link ExpandedShipmentSummary}. Shipments associated with this fulfillment.
     * object.shipments[] (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields,
     * including direction, status, and package count, returned when the shipment is expanded.
     * object.status (Required): string. Current fulfillment lifecycle status. Read
     * supported_actions for available transitions. - `pending`: Work has not started and has not
     * been accepted. Approval may be required before work can begin. - `accepted`: The provider
     * accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the
     * hold to restore active_hold.previous_status, or use a supported forward action. -
     * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment
     * is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed
     * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
     * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason
     * before creating replacement work. - `scheduled`: The fulfillment is scheduled for its
     * recorded service window. - `preparing`: Warehouse or provider preparation is underway. -
     * `picked`: The assigned items have been picked. - `packed`: The assigned items have been
     * packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. -
     * `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value
     * enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     * object.supported_actions (Optional): Array of string. Read-only lifecycle actions accepted
     * now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty
     * when none are available. Values name the verb route with hyphens replaced by underscores.
     * Always present with merchant credentials. [] enum: "accept", "cancel", "complete",
     * "dispatch", "fail", "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
     * "mark_ready", "release_hold", "schedule", "start". object.supported_actions[] (Value):
     * string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". object.terminal_at (Optional): string. When the
     * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records
     * the state transition; completed_at records completion evidence supplied for the fulfillment.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string. How the
     * items are delivered: shipment, pickup, local delivery, digital delivery, or service. Value
     * enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover".
     * object.updated_at (Required): string. When the fulfillment was last updated, in RFC3339
     * format. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Monotonic fulfillment version for expected_version checks. Format: uint64. minimum:
     * 1. previous_attributes (Optional): object and {@link FulfillmentPreviousAttributes}.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.active_hold (Optional): {@link
     * FulfillmentHoldPreviousAttributes} or null. Current hold details. Present exactly when
     * status is on_hold. previous_attributes.active_hold.anyOf[1] (Value): {@link
     * FulfillmentHoldPreviousAttributes}. previous_attributes.active_hold.anyOf[2] (Value): null.
     * previous_attributes.charges (Optional): Array of {@link
     * FulfillmentChargeLinkPreviousAttributes} or null. Order charges associated with this
     * fulfillment. previous_attributes.charges.anyOf[1] (Value): Array of {@link
     * FulfillmentChargeLinkPreviousAttributes}. Order charges associated with this fulfillment.
     * previous_attributes.charges.anyOf[1][] (Value): {@link
     * FulfillmentChargeLinkPreviousAttributes}. previous_attributes.charges.anyOf[2] (Value):
     * null. previous_attributes.completed_at (Optional): string or null. When the fulfillment was
     * completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. previous_attributes.completed_at.anyOf[1] (Value): string. When the fulfillment
     * was completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.completed_at.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. When the fulfillment was created, in RFC3339 format.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the fulfillment was created,
     * in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.customer_id
     * (Optional): string or null. Customer receiving this fulfillment, when one is set.
     * previous_attributes.customer_id.anyOf[1] (Value): string. Customer receiving this
     * fulfillment, when one is set. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_choice_group_id (Optional): string or null. Delivery choice
     * group that created this fulfillment. `null` when the merchant created the fulfillment or
     * checkout created it without a delivery quote. Always present with merchant credentials.
     * previous_attributes.delivery_choice_group_id.anyOf[1] (Value): string. Delivery choice group
     * that created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials. Example:
     * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". previous_attributes.delivery_choice_group_id.anyOf[2]
     * (Value): null. previous_attributes.delivery_execution_leg_id (Optional): string or null.
     * Execution leg of the selected delivery option that created this fulfillment. `null` when the
     * merchant created the fulfillment or checkout created it without a delivery quote. Always
     * present with merchant credentials. previous_attributes.delivery_execution_leg_id.anyOf[1]
     * (Value): string. Execution leg of the selected delivery option that created this
     * fulfillment. `null` when the merchant created the fulfillment or checkout created it without
     * a delivery quote. Always present with merchant credentials. Example:
     * "dleg_01KEZF7C00VB59BKTRC8W4KR4M". previous_attributes.delivery_execution_leg_id.anyOf[2]
     * (Value): null. previous_attributes.delivery_method_id (Optional): string or null. Delivery
     * method chosen for this fulfillment. `null` when the merchant created the fulfillment or
     * checkout created it without a delivery quote. Also `null` when it was created before this
     * field was added. Always present with merchant credentials.
     * previous_attributes.delivery_method_id.anyOf[1] (Value): string. Delivery method chosen for
     * this fulfillment. `null` when the merchant created the fulfillment or checkout created it
     * without a delivery quote. Also `null` when it was created before this field was added.
     * Always present with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * previous_attributes.delivery_method_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_selection_id (Optional): string or null. Delivery selection
     * that created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials.
     * previous_attributes.delivery_selection_id.anyOf[1] (Value): string. Delivery selection that
     * created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". previous_attributes.delivery_selection_id.anyOf[2]
     * (Value): null. previous_attributes.device_id (Optional): string or null. Device associated
     * with the fulfillment, when one is recorded. previous_attributes.device_id.anyOf[1] (Value):
     * string. Device associated with the fulfillment, when one is recorded. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6". previous_attributes.device_id.anyOf[2] (Value): null.
     * previous_attributes.digital_details (Optional): {@link
     * DigitalFulfillmentDetailsPreviousAttributes} or null. Delivery URL and completion time for a
     * digital fulfillment. previous_attributes.digital_details.anyOf[1] (Value): {@link
     * DigitalFulfillmentDetailsPreviousAttributes}. previous_attributes.digital_details.anyOf[2]
     * (Value): null. previous_attributes.dispatched_at (Optional): string or null. First time this
     * fulfillment reached dispatched. previous_attributes.dispatched_at.anyOf[1] (Value): string.
     * First time this fulfillment reached dispatched. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.dispatched_at.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.fulfillment_id (Optional): string or null. Stable identifier of the
     * fulfillment. previous_attributes.fulfillment_id.anyOf[1] (Value): string. Stable identifier
     * of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     * previous_attributes.fulfillment_id.anyOf[2] (Value): null. previous_attributes.line_items
     * (Optional): Array of {@link FulfillmentLineItemPreviousAttributes} or null. Order lines and
     * quantities allocated to this fulfillment. previous_attributes.line_items.anyOf[1] (Value):
     * Array of {@link FulfillmentLineItemPreviousAttributes}. Order lines and quantities allocated
     * to this fulfillment. previous_attributes.line_items.anyOf[1][] (Value): {@link
     * FulfillmentLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2] (Value):
     * null. previous_attributes.local_delivery_details (Optional): {@link
     * DeliveryFulfillmentDetailsPreviousAttributes} or null. Courier, delivery window, and handoff
     * details for a local delivery fulfillment.
     * previous_attributes.local_delivery_details.anyOf[1] (Value): {@link
     * DeliveryFulfillmentDetailsPreviousAttributes}.
     * previous_attributes.local_delivery_details.anyOf[2] (Value): null.
     * previous_attributes.location_id (Optional): string or null. Merchant location responsible
     * for this fulfillment. previous_attributes.location_id.anyOf[1] (Value): string. Merchant
     * location responsible for this fulfillment. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.location_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned key-value metadata associated with the
     * fulfillment. previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary returned when the
     * order relationship is expanded. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. previous_attributes.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummaryPreviousAttributes}. previous_attributes.order.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. Order whose items this fulfillment
     * delivers. previous_attributes.order_id.anyOf[1] (Value): string. Order whose items this
     * fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * previous_attributes.order_id.anyOf[2] (Value): null. previous_attributes.order_number
     * (Optional): string or null. Human-readable number of the order this fulfillment belongs to.
     * Omitted when the order has no number. previous_attributes.order_number.anyOf[1] (Value):
     * string. Human-readable number of the order this fulfillment belongs to. Omitted when the
     * order has no number. previous_attributes.order_number.anyOf[2] (Value): null.
     * previous_attributes.outcome (Optional): {@link FulfillmentOutcomePreviousAttributes} or
     * null. Terminal outcome details. Present exactly when status is no_show.
     * previous_attributes.outcome.anyOf[1] (Value): {@link FulfillmentOutcomePreviousAttributes}.
     * previous_attributes.outcome.anyOf[2] (Value): null. previous_attributes.packages (Optional):
     * Array of {@link ExpandedPackageSummaryPreviousAttributes} or null. Packages associated with
     * this fulfillment. previous_attributes.packages.anyOf[1] (Value): Array of {@link
     * ExpandedPackageSummaryPreviousAttributes}. Packages associated with this fulfillment.
     * previous_attributes.packages.anyOf[1][] (Value): {@link
     * ExpandedPackageSummaryPreviousAttributes}. previous_attributes.packages.anyOf[2] (Value):
     * null. previous_attributes.packed_at (Optional): string or null. First time this fulfillment
     * reached packed. previous_attributes.packed_at.anyOf[1] (Value): string. First time this
     * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.packed_at.anyOf[2] (Value): null. previous_attributes.picked_at
     * (Optional): string or null. First time this fulfillment reached picked.
     * previous_attributes.picked_at.anyOf[1] (Value): string. First time this fulfillment reached
     * picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.picked_at.anyOf[2] (Value): null. previous_attributes.pickup_details
     * (Optional): {@link PickupFulfillmentDetailsPreviousAttributes} or null. Pickup window,
     * pickup mode, and handoff times for a pickup fulfillment.
     * previous_attributes.pickup_details.anyOf[1] (Value): {@link
     * PickupFulfillmentDetailsPreviousAttributes}. previous_attributes.pickup_details.anyOf[2]
     * (Value): null. previous_attributes.recipient (Optional): {@link
     * FulfillmentRecipientPreviousAttributes} or null. Omitted for a checkout session credential
     * that doesn't act for the customer the buyer verified. previous_attributes.recipient.anyOf[1]
     * (Value): {@link FulfillmentRecipientPreviousAttributes}.
     * previous_attributes.recipient.anyOf[2] (Value): null. previous_attributes.scheduled_start_at
     * (Optional): string or null. Derived start of the service schedule or pickup, local delivery,
     * or shipment window. Null when no schedule is booked, including digital fulfillments. Details
     * remain the authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first
     * ascending and last descending. Sorting by due_at compares this same value with nulls last
     * ascending and first descending. Ties use fulfillment_id in the same direction.
     * previous_attributes.scheduled_start_at.anyOf[1] (Value): string. Derived start of the
     * service schedule or pickup, local delivery, or shipment window. Null when no schedule is
     * booked, including digital fulfillments. Details remain the authoritative schedule inputs.
     * Sorting by scheduled_start_at puts nulls first ascending and last descending. Sorting by
     * due_at compares this same value with nulls last ascending and first descending. Ties use
     * fulfillment_id in the same direction. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.scheduled_start_at.anyOf[2] (Value): null.
     * previous_attributes.service_details (Optional): {@link
     * ServiceFulfillmentDetailsPreviousAttributes} or null. Schedule and completion details for a
     * service fulfillment. previous_attributes.service_details.anyOf[1] (Value): {@link
     * ServiceFulfillmentDetailsPreviousAttributes}. previous_attributes.service_details.anyOf[2]
     * (Value): null. previous_attributes.shipment_details (Optional): {@link
     * ShipmentFulfillmentDetailsPreviousAttributes} or null. Shipping schedule and ship time for a
     * shipment fulfillment. Present only on shipment fulfillments with at least one value.
     * previous_attributes.shipment_details.anyOf[1] (Value): {@link
     * ShipmentFulfillmentDetailsPreviousAttributes}. previous_attributes.shipment_details.anyOf[2]
     * (Value): null. previous_attributes.shipments (Optional): Array of {@link
     * ExpandedShipmentSummaryPreviousAttributes} or null. Shipments associated with this
     * fulfillment. previous_attributes.shipments.anyOf[1] (Value): Array of {@link
     * ExpandedShipmentSummaryPreviousAttributes}. Shipments associated with this fulfillment.
     * previous_attributes.shipments.anyOf[1][] (Value): {@link
     * ExpandedShipmentSummaryPreviousAttributes}. previous_attributes.shipments.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. Current fulfillment lifecycle
     * status. Read supported_actions for available transitions. - `pending`: Work has not started
     * and has not been accepted. Approval may be required before work can begin. - `accepted`: The
     * provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused.
     * Release the hold to restore active_hold.previous_status, or use a supported forward action.
     * - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
     * fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work
     * completed successfully. - `canceled`: The fulfillment was intentionally canceled and will
     * not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
     * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its
     * recorded service window. - `preparing`: Warehouse or provider preparation is underway. -
     * `picked`: The assigned items have been picked. - `packed`: The assigned items have been
     * packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. -
     * `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value
     * enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     * previous_attributes.status.anyOf[1] (Value): string. Current fulfillment lifecycle status.
     * Read supported_actions for available transitions. - `pending`: Work has not started and has
     * not been accepted. Approval may be required before work can begin. - `accepted`: The
     * provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused.
     * Release the hold to restore active_hold.previous_status, or use a supported forward action.
     * - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
     * fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work
     * completed successfully. - `canceled`: The fulfillment was intentionally canceled and will
     * not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
     * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its
     * recorded service window. - `preparing`: Warehouse or provider preparation is underway. -
     * `picked`: The assigned items have been picked. - `packed`: The assigned items have been
     * packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. -
     * `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value
     * enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Read-only lifecycle actions accepted now, based on the
     * fulfillment, its order payment status, holds, and shipment progress. Empty when none are
     * available. Values name the verb route with hyphens replaced by underscores. Always present
     * with merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
     * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". previous_attributes.supported_actions.anyOf[1] (Value):
     * Array of string. Read-only lifecycle actions accepted now, based on the fulfillment, its
     * order payment status, holds, and shipment progress. Empty when none are available. Values
     * name the verb route with hyphens replaced by underscores. Always present with merchant
     * credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". previous_attributes.supported_actions.anyOf[1][]
     * (Value): string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". previous_attributes.supported_actions.anyOf[2] (Value):
     * null. previous_attributes.terminal_at (Optional): string or null. When the fulfillment
     * entered a terminal state: completed, canceled, failed, or no_show. This records the state
     * transition; completed_at records completion evidence supplied for the fulfillment.
     * previous_attributes.terminal_at.anyOf[1] (Value): string. When the fulfillment entered a
     * terminal state: completed, canceled, failed, or no_show. This records the state transition;
     * completed_at records completion evidence supplied for the fulfillment. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.terminal_at.anyOf[2] (Value): null.
     * previous_attributes.type (Optional): string or null. How the items are delivered: shipment,
     * pickup, local delivery, digital delivery, or service. Value enum: "shipment", "pickup",
     * "local_delivery", "digital", "service", "handover". previous_attributes.type.anyOf[1]
     * (Value): string. How the items are delivered: shipment, pickup, local delivery, digital
     * delivery, or service. Value enum: "shipment", "pickup", "local_delivery", "digital",
     * "service", "handover". previous_attributes.type.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When the fulfillment was last
     * updated, in RFC3339 format. previous_attributes.updated_at.anyOf[1] (Value): string. When
     * the fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value): null.
     * previous_attributes.version (Optional): integer or null. Monotonic fulfillment version for
     * expected_version checks. previous_attributes.version.anyOf[1] (Value): integer. Monotonic
     * fulfillment version for expected_version checks. Format: uint64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * active_hold (Optional): {@link FulfillmentHold}. Current hold details. Present exactly
         * when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and
         * when it became active. charges (Optional): Array of {@link FulfillmentChargeLink}. Order
         * charges associated with this fulfillment. charges[] (Value): {@link
         * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
         * completed_at (Optional): string. When the fulfillment was completed. Mirrors the
         * completion time for its type: delivered_at for shipment, local delivery, and digital
         * fulfillments, picked_up_at for pickup, and service_details.completed_at for service
         * fulfillments. Omitted until a completion time is recorded. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When the fulfillment was created,
         * in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". customer_id
         * (Optional): string. Customer receiving this fulfillment, when one is set. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". delivery_choice_group_id (Optional): string or null.
         * Delivery choice group that created this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
         * delivery_execution_leg_id (Optional): string or null. Execution leg of the selected
         * delivery option that created this fulfillment. `null` when the merchant created the
         * fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M". delivery_method_id
         * (Optional): string or null. Delivery method chosen for this fulfillment. `null` when the
         * merchant created the fulfillment or checkout created it without a delivery quote. Also
         * `null` when it was created before this field was added. Always present with merchant
         * credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_id
         * (Optional): string or null. Delivery selection that created this fulfillment. `null`
         * when the merchant created the fulfillment or checkout created it without a delivery
         * quote. Always present with merchant credentials. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". device_id (Optional): string. Device associated with
         * the fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
         * digital_details (Optional): {@link DigitalFulfillmentDetails}. Delivery URL and
         * completion time for a digital fulfillment. Details of a digital fulfillment: when it was
         * delivered (`delivered_at`) and its `delivery_url`. dispatched_at (Optional): string.
         * First time this fulfillment reached dispatched. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". fulfillment_id (Required): string. Stable identifier of the
         * fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". line_items (Required): Array of
         * {@link FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment.
         * line_items[] (Value): {@link FulfillmentLineItem}. An order line item and quantity
         * included in a fulfillment, with the modifiers applied to it. local_delivery_details
         * (Optional): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
         * details for a local delivery fulfillment. Details of a local delivery fulfillment:
         * courier, timing window, instructions, and tracking. Some fields are omitted for
         * credentials that don't act for the verified customer. location_id (Optional): string.
         * Merchant location responsible for this fulfillment. Example:
         * "loc_01KEZF7C00CMHRRYA3MV996JB2". metadata (Optional): {@link MetadataMap}. Caller-owned
         * key-value metadata associated with the fulfillment. Caller-owned key-value data stored
         * on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
         * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before
         * those limits may not satisfy them. order (Optional): {@link ExpandedOrderSummary} or
         * null. Order summary returned when the order relationship is expanded. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. Order whose items this fulfillment delivers. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_number (Optional): string. Human-readable number
         * of the order this fulfillment belongs to. Omitted when the order has no number. outcome
         * (Optional): {@link FulfillmentOutcome}. Terminal outcome details. Present exactly when
         * status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show,
         * with its reason, notes, and when it occurred. packages (Optional): Array of {@link
         * ExpandedPackageSummary}. Packages associated with this fulfillment. packages[] (Value):
         * {@link ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
         * status, and supported actions, returned when the package is expanded. packed_at
         * (Optional): string. First time this fulfillment reached packed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". picked_at (Optional): string. First time this
         * fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * pickup_details (Optional): {@link PickupFulfillmentDetails}. Pickup window, pickup mode,
         * and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout
         * creates, location_name, address, and instructions name the store the buyer chose and the
         * delivery method's pickup instructions. The note the buyer left for the store is in
         * recipient.instructions. recipient (Optional): {@link FulfillmentRecipient}. Omitted for
         * a checkout session credential that doesn't act for the customer the buyer verified. The
         * recipient of a fulfillment, with name, email, phone, address, and handling instructions.
         * scheduled_start_at (Required): string or null. Derived start of the service schedule or
         * pickup, local delivery, or shipment window. Null when no schedule is booked, including
         * digital fulfillments. Details remain the authoritative schedule inputs. Sorting by
         * scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at
         * compares this same value with nulls last ascending and first descending. Ties use
         * fulfillment_id in the same direction. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_details (Optional): {@link ServiceFulfillmentDetails}.
         * Schedule and completion details for a service fulfillment. Details of a service
         * fulfillment: the scheduled start and end, timezone, completion time, and notes.
         * shipment_details (Optional): {@link ShipmentFulfillmentDetails}. Shipping schedule and
         * ship time for a shipment fulfillment. Present only on shipment fulfillments with at
         * least one value. Details of a shipment fulfillment: the shipping window, timezone, and
         * when the shipment was handed to the carrier. shipments (Optional): Array of {@link
         * ExpandedShipmentSummary}. Shipments associated with this fulfillment. shipments[]
         * (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields, including
         * direction, status, and package count, returned when the shipment is expanded. status
         * (Required): string. Current fulfillment lifecycle status. Read supported_actions for
         * available transitions. - `pending`: Work has not started and has not been accepted.
         * Approval may be required before work can begin. - `accepted`: The provider accepted the
         * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
         * restore active_hold.previous_status, or use a supported forward action. - `in_progress`:
         * Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready
         * for pickup, handoff, or completion. - `completed`: All fulfillment work completed
         * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
         * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
         * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for
         * its recorded service window. - `preparing`: Warehouse or provider preparation is
         * underway. - `picked`: The assigned items have been picked. - `packed`: The assigned
         * items have been packed. - `dispatched`: The fulfillment left its origin for delivery or
         * handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded
         * reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
         * "dispatched", "no_show". supported_actions (Optional): Array of string. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. Always present with merchant credentials. [] enum:
         * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
         * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
         * "schedule", "start". supported_actions[] (Value): string. Value enum: "accept",
         * "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed",
         * "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start".
         * terminal_at (Optional): string. When the fulfillment entered a terminal state:
         * completed, canceled, failed, or no_show. This records the state transition; completed_at
         * records completion evidence supplied for the fulfillment. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". type (Required): string. How the items are delivered: shipment,
         * pickup, local delivery, digital delivery, or service. Value enum: "shipment", "pickup",
         * "local_delivery", "digital", "service", "handover". updated_at (Required): string. When
         * the fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Monotonic fulfillment version for
         * expected_version checks. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current hold details. Present exactly when status is on_hold. A hold on a
             * fulfillment, with its reason, who placed it, and when it became active.
             */
            "active_hold"?: FulfillmentHold;
            /**
             * Order charges associated with this fulfillment. [] (Value): {@link
             * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
             */
            "charges"?: Array<FulfillmentChargeLink>;
            /**
             * When the fulfillment was completed. Mirrors the completion time for its type:
             * delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at
             * for pickup, and service_details.completed_at for service fulfillments. Omitted until
             * a completion time is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * Delivery choice group that created this fulfillment. `null` when the merchant
             * created the fulfillment or checkout created it without a delivery quote. Always
             * present with merchant credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
             */
            "delivery_choice_group_id"?: string | null;
            /**
             * Execution leg of the selected delivery option that created this fulfillment. `null`
             * when the merchant created the fulfillment or checkout created it without a delivery
             * quote. Always present with merchant credentials. Example:
             * "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
             */
            "delivery_execution_leg_id"?: string | null;
            /**
             * Delivery method chosen for this fulfillment. `null` when the merchant created the
             * fulfillment or checkout created it without a delivery quote. Also `null` when it was
             * created before this field was added. Always present with merchant credentials.
             * Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_id"?: string | null;
            /**
             * Delivery selection that created this fulfillment. `null` when the merchant created
             * the fulfillment or checkout created it without a delivery quote. Always present with
             * merchant credentials. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
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
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Stable identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
            "fulfillment_id": string;
            /**
             * Order lines and quantities allocated to this fulfillment. [] (Value): {@link
             * FulfillmentLineItem}. An order line item and quantity included in a fulfillment,
             * with the modifiers applied to it.
             */
            "line_items": Array<FulfillmentLineItem>;
            /**
             * Courier, delivery window, and handoff details for a local delivery fulfillment.
             * Details of a local delivery fulfillment: courier, timing window, instructions, and
             * tracking. Some fields are omitted for credentials that don't act for the verified
             * customer.
             */
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            /**
             * Merchant location responsible for this fulfillment. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id"?: string;
            /**
             * Caller-owned key-value metadata associated with the fulfillment. Caller-owned
             * key-value data stored on a resource. Keys starting with flint_ are reserved for
             * Flint and are not returned. Writes follow the limits on MetadataInput and
             * MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order whose items this fulfillment delivers. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * Human-readable number of the order this fulfillment belongs to. Omitted when the
             * order has no number.
             */
            "order_number"?: string;
            /**
             * Terminal outcome details. Present exactly when status is no_show. The terminal
             * outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and
             * when it occurred.
             */
            "outcome"?: FulfillmentOutcome;
            /**
             * Packages associated with this fulfillment. [] (Value): {@link
             * ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
             * status, and supported actions, returned when the package is expanded.
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
             * Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup
             * details. For a pickup that checkout creates, location_name, address, and
             * instructions name the store the buyer chose and the delivery method's pickup
             * instructions. The note the buyer left for the store is in recipient.instructions.
             */
            "pickup_details"?: PickupFulfillmentDetails;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The recipient of a fulfillment, with name, email, phone, address,
             * and handling instructions.
             */
            "recipient"?: FulfillmentRecipient;
            /**
             * Derived start of the service schedule or pickup, local delivery, or shipment window.
             * Null when no schedule is booked, including digital fulfillments. Details remain the
             * authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first
             * ascending and last descending. Sorting by due_at compares this same value with nulls
             * last ascending and first descending. Ties use fulfillment_id in the same direction.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_start_at": string | null;
            /**
             * Schedule and completion details for a service fulfillment. Details of a service
             * fulfillment: the scheduled start and end, timezone, completion time, and notes.
             */
            "service_details"?: ServiceFulfillmentDetails;
            /**
             * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
             * fulfillments with at least one value. Details of a shipment fulfillment: the
             * shipping window, timezone, and when the shipment was handed to the carrier.
             */
            "shipment_details"?: ShipmentFulfillmentDetails;
            /**
             * Shipments associated with this fulfillment. [] (Value): {@link
             * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status,
             * and package count, returned when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Current fulfillment lifecycle status. Read supported_actions for available
             * transitions. - `pending`: Work has not started and has not been accepted. Approval
             * may be required before work can begin. - `accepted`: The provider accepted the
             * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
             * restore active_hold.previous_status, or use a supported forward action. -
             * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
             * fulfillment is ready for pickup, handoff, or completion. - `completed`: All
             * fulfillment work completed successfully. - `canceled`: The fulfillment was
             * intentionally canceled and will not continue. - `failed`: The fulfillment could not
             * be completed. Resolve the recorded reason before creating replacement work. -
             * `scheduled`: The fulfillment is scheduled for its recorded service window. -
             * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
             * items have been picked. - `packed`: The assigned items have been packed. -
             * `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`:
             * A service appointment was missed. Read outcome for the recorded reason. Value enum:
             * "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
             * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
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
             * Read-only lifecycle actions accepted now, based on the fulfillment, its order
             * payment status, holds, and shipment progress. Empty when none are available. Values
             * name the verb route with hyphens replaced by underscores. Always present with
             * merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start". [] (Value): string. Value enum:
             * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
             * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
             * "schedule", "start".
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
             * When the fulfillment entered a terminal state: completed, canceled, failed, or
             * no_show. This records the state transition; completed_at records completion evidence
             * supplied for the fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "terminal_at"?: string;
            /**
             * How the items are delivered: shipment, pickup, local delivery, digital delivery, or
             * service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service",
             * "handover".
             */
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {});
            /**
             * When the fulfillment was last updated, in RFC3339 format. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum:
             * 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. active_hold (Optional): {@link
         * FulfillmentHoldPreviousAttributes} or null. Current hold details. Present exactly when
         * status is on_hold. active_hold.anyOf[1] (Value): {@link
         * FulfillmentHoldPreviousAttributes}. active_hold.anyOf[2] (Value): null. charges
         * (Optional): Array of {@link FulfillmentChargeLinkPreviousAttributes} or null. Order
         * charges associated with this fulfillment. charges.anyOf[1] (Value): Array of {@link
         * FulfillmentChargeLinkPreviousAttributes}. Order charges associated with this
         * fulfillment. charges.anyOf[1][] (Value): {@link
         * FulfillmentChargeLinkPreviousAttributes}. charges.anyOf[2] (Value): null. completed_at
         * (Optional): string or null. When the fulfillment was completed. Mirrors the completion
         * time for its type: delivered_at for shipment, local delivery, and digital fulfillments,
         * picked_up_at for pickup, and service_details.completed_at for service fulfillments.
         * Omitted until a completion time is recorded. completed_at.anyOf[1] (Value): string. When
         * the fulfillment was completed. Mirrors the completion time for its type: delivered_at
         * for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and
         * service_details.completed_at for service fulfillments. Omitted until a completion time
         * is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". completed_at.anyOf[2]
         * (Value): null. created_at (Optional): string or null. When the fulfillment was created,
         * in RFC3339 format. created_at.anyOf[1] (Value): string. When the fulfillment was
         * created, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. customer_id (Optional): string or null. Customer
         * receiving this fulfillment, when one is set. customer_id.anyOf[1] (Value): string.
         * Customer receiving this fulfillment, when one is set. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null.
         * delivery_choice_group_id (Optional): string or null. Delivery choice group that created
         * this fulfillment. `null` when the merchant created the fulfillment or checkout created
         * it without a delivery quote. Always present with merchant credentials.
         * delivery_choice_group_id.anyOf[1] (Value): string. Delivery choice group that created
         * this fulfillment. `null` when the merchant created the fulfillment or checkout created
         * it without a delivery quote. Always present with merchant credentials. Example:
         * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". delivery_choice_group_id.anyOf[2] (Value): null.
         * delivery_execution_leg_id (Optional): string or null. Execution leg of the selected
         * delivery option that created this fulfillment. `null` when the merchant created the
         * fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. delivery_execution_leg_id.anyOf[1] (Value): string. Execution leg
         * of the selected delivery option that created this fulfillment. `null` when the merchant
         * created the fulfillment or checkout created it without a delivery quote. Always present
         * with merchant credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
         * delivery_execution_leg_id.anyOf[2] (Value): null. delivery_method_id (Optional): string
         * or null. Delivery method chosen for this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Also `null` when it was
         * created before this field was added. Always present with merchant credentials.
         * delivery_method_id.anyOf[1] (Value): string. Delivery method chosen for this
         * fulfillment. `null` when the merchant created the fulfillment or checkout created it
         * without a delivery quote. Also `null` when it was created before this field was added.
         * Always present with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
         * delivery_method_id.anyOf[2] (Value): null. delivery_selection_id (Optional): string or
         * null. Delivery selection that created this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. delivery_selection_id.anyOf[1] (Value): string. Delivery selection
         * that created this fulfillment. `null` when the merchant created the fulfillment or
         * checkout created it without a delivery quote. Always present with merchant credentials.
         * Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". delivery_selection_id.anyOf[2] (Value):
         * null. device_id (Optional): string or null. Device associated with the fulfillment, when
         * one is recorded. device_id.anyOf[1] (Value): string. Device associated with the
         * fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
         * device_id.anyOf[2] (Value): null. digital_details (Optional): {@link
         * DigitalFulfillmentDetailsPreviousAttributes} or null. Delivery URL and completion time
         * for a digital fulfillment. digital_details.anyOf[1] (Value): {@link
         * DigitalFulfillmentDetailsPreviousAttributes}. digital_details.anyOf[2] (Value): null.
         * dispatched_at (Optional): string or null. First time this fulfillment reached
         * dispatched. dispatched_at.anyOf[1] (Value): string. First time this fulfillment reached
         * dispatched. Format: date-time. Example: "2026-08-02T16:00:00Z". dispatched_at.anyOf[2]
         * (Value): null. external_reference_id (Optional): string or null. Caller-owned identifier
         * for this resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. fulfillment_id
         * (Optional): string or null. Stable identifier of the fulfillment.
         * fulfillment_id.anyOf[1] (Value): string. Stable identifier of the fulfillment. Example:
         * "ful_01KEZF7C00F24WVSTTWR1FQX5T". fulfillment_id.anyOf[2] (Value): null. line_items
         * (Optional): Array of {@link FulfillmentLineItemPreviousAttributes} or null. Order lines
         * and quantities allocated to this fulfillment. line_items.anyOf[1] (Value): Array of
         * {@link FulfillmentLineItemPreviousAttributes}. Order lines and quantities allocated to
         * this fulfillment. line_items.anyOf[1][] (Value): {@link
         * FulfillmentLineItemPreviousAttributes}. line_items.anyOf[2] (Value): null.
         * local_delivery_details (Optional): {@link DeliveryFulfillmentDetailsPreviousAttributes}
         * or null. Courier, delivery window, and handoff details for a local delivery fulfillment.
         * local_delivery_details.anyOf[1] (Value): {@link
         * DeliveryFulfillmentDetailsPreviousAttributes}. local_delivery_details.anyOf[2] (Value):
         * null. location_id (Optional): string or null. Merchant location responsible for this
         * fulfillment. location_id.anyOf[1] (Value): string. Merchant location responsible for
         * this fulfillment. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". location_id.anyOf[2]
         * (Value): null. metadata (Optional): {@link MetadataMap} or null. Caller-owned key-value
         * metadata associated with the fulfillment. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. order (Optional): {@link
         * ExpandedOrderSummaryPreviousAttributes} or null. Order summary returned when the order
         * relationship is expanded. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. Order whose items this fulfillment delivers.
         * order_id.anyOf[1] (Value): string. Order whose items this fulfillment delivers. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. order_number
         * (Optional): string or null. Human-readable number of the order this fulfillment belongs
         * to. Omitted when the order has no number. order_number.anyOf[1] (Value): string.
         * Human-readable number of the order this fulfillment belongs to. Omitted when the order
         * has no number. order_number.anyOf[2] (Value): null. outcome (Optional): {@link
         * FulfillmentOutcomePreviousAttributes} or null. Terminal outcome details. Present exactly
         * when status is no_show. outcome.anyOf[1] (Value): {@link
         * FulfillmentOutcomePreviousAttributes}. outcome.anyOf[2] (Value): null. packages
         * (Optional): Array of {@link ExpandedPackageSummaryPreviousAttributes} or null. Packages
         * associated with this fulfillment. packages.anyOf[1] (Value): Array of {@link
         * ExpandedPackageSummaryPreviousAttributes}. Packages associated with this fulfillment.
         * packages.anyOf[1][] (Value): {@link ExpandedPackageSummaryPreviousAttributes}.
         * packages.anyOf[2] (Value): null. packed_at (Optional): string or null. First time this
         * fulfillment reached packed. packed_at.anyOf[1] (Value): string. First time this
         * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * packed_at.anyOf[2] (Value): null. picked_at (Optional): string or null. First time this
         * fulfillment reached picked. picked_at.anyOf[1] (Value): string. First time this
         * fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * picked_at.anyOf[2] (Value): null. pickup_details (Optional): {@link
         * PickupFulfillmentDetailsPreviousAttributes} or null. Pickup window, pickup mode, and
         * handoff times for a pickup fulfillment. pickup_details.anyOf[1] (Value): {@link
         * PickupFulfillmentDetailsPreviousAttributes}. pickup_details.anyOf[2] (Value): null.
         * recipient (Optional): {@link FulfillmentRecipientPreviousAttributes} or null. Omitted
         * for a checkout session credential that doesn't act for the customer the buyer verified.
         * recipient.anyOf[1] (Value): {@link FulfillmentRecipientPreviousAttributes}.
         * recipient.anyOf[2] (Value): null. scheduled_start_at (Optional): string or null. Derived
         * start of the service schedule or pickup, local delivery, or shipment window. Null when
         * no schedule is booked, including digital fulfillments. Details remain the authoritative
         * schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last
         * descending. Sorting by due_at compares this same value with nulls last ascending and
         * first descending. Ties use fulfillment_id in the same direction.
         * scheduled_start_at.anyOf[1] (Value): string. Derived start of the service schedule or
         * pickup, local delivery, or shipment window. Null when no schedule is booked, including
         * digital fulfillments. Details remain the authoritative schedule inputs. Sorting by
         * scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at
         * compares this same value with nulls last ascending and first descending. Ties use
         * fulfillment_id in the same direction. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". scheduled_start_at.anyOf[2] (Value): null. service_details
         * (Optional): {@link ServiceFulfillmentDetailsPreviousAttributes} or null. Schedule and
         * completion details for a service fulfillment. service_details.anyOf[1] (Value): {@link
         * ServiceFulfillmentDetailsPreviousAttributes}. service_details.anyOf[2] (Value): null.
         * shipment_details (Optional): {@link ShipmentFulfillmentDetailsPreviousAttributes} or
         * null. Shipping schedule and ship time for a shipment fulfillment. Present only on
         * shipment fulfillments with at least one value. shipment_details.anyOf[1] (Value): {@link
         * ShipmentFulfillmentDetailsPreviousAttributes}. shipment_details.anyOf[2] (Value): null.
         * shipments (Optional): Array of {@link ExpandedShipmentSummaryPreviousAttributes} or
         * null. Shipments associated with this fulfillment. shipments.anyOf[1] (Value): Array of
         * {@link ExpandedShipmentSummaryPreviousAttributes}. Shipments associated with this
         * fulfillment. shipments.anyOf[1][] (Value): {@link
         * ExpandedShipmentSummaryPreviousAttributes}. shipments.anyOf[2] (Value): null. status
         * (Optional): string or null. Current fulfillment lifecycle status. Read supported_actions
         * for available transitions. - `pending`: Work has not started and has not been accepted.
         * Approval may be required before work can begin. - `accepted`: The provider accepted the
         * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
         * restore active_hold.previous_status, or use a supported forward action. - `in_progress`:
         * Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready
         * for pickup, handoff, or completion. - `completed`: All fulfillment work completed
         * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
         * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
         * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for
         * its recorded service window. - `preparing`: Warehouse or provider preparation is
         * underway. - `picked`: The assigned items have been picked. - `packed`: The assigned
         * items have been packed. - `dispatched`: The fulfillment left its origin for delivery or
         * handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded
         * reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
         * "dispatched", "no_show". status.anyOf[1] (Value): string. Current fulfillment lifecycle
         * status. Read supported_actions for available transitions. - `pending`: Work has not
         * started and has not been accepted. Approval may be required before work can begin. -
         * `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`:
         * Work is paused. Release the hold to restore active_hold.previous_status, or use a
         * supported forward action. - `in_progress`: Work has started and is not yet ready or
         * complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
         * `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment
         * was intentionally canceled and will not continue. - `failed`: The fulfillment could not
         * be completed. Resolve the recorded reason before creating replacement work. -
         * `scheduled`: The fulfillment is scheduled for its recorded service window. -
         * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
         * items have been picked. - `packed`: The assigned items have been packed. - `dispatched`:
         * The fulfillment left its origin for delivery or handoff. - `no_show`: A service
         * appointment was missed. Read outcome for the recorded reason. Value enum: "pending",
         * "accepted", "on_hold", "in_progress", "ready", "completed", "canceled", "failed",
         * "scheduled", "preparing", "picked", "packed", "dispatched", "no_show". status.anyOf[2]
         * (Value): null. supported_actions (Optional): Array of string or null. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. Always present with merchant credentials. [] enum:
         * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
         * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
         * "schedule", "start". supported_actions.anyOf[1] (Value): Array of string. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. Always present with merchant credentials. [] enum:
         * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
         * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
         * "schedule", "start". supported_actions.anyOf[1][] (Value): string. Value enum: "accept",
         * "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed",
         * "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start".
         * supported_actions.anyOf[2] (Value): null. terminal_at (Optional): string or null. When
         * the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This
         * records the state transition; completed_at records completion evidence supplied for the
         * fulfillment. terminal_at.anyOf[1] (Value): string. When the fulfillment entered a
         * terminal state: completed, canceled, failed, or no_show. This records the state
         * transition; completed_at records completion evidence supplied for the fulfillment.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". terminal_at.anyOf[2] (Value): null.
         * type (Optional): string or null. How the items are delivered: shipment, pickup, local
         * delivery, digital delivery, or service. Value enum: "shipment", "pickup",
         * "local_delivery", "digital", "service", "handover". type.anyOf[1] (Value): string. How
         * the items are delivered: shipment, pickup, local delivery, digital delivery, or service.
         * Value enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover".
         * type.anyOf[2] (Value): null. updated_at (Optional): string or null. When the fulfillment
         * was last updated, in RFC3339 format. updated_at.anyOf[1] (Value): string. When the
         * fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Monotonic fulfillment version for expected_version checks. version.anyOf[1]
         * (Value): integer. Monotonic fulfillment version for expected_version checks. Format:
         * uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Current hold details. Present exactly when status is on_hold. anyOf[1] (Value):
             * {@link FulfillmentHoldPreviousAttributes}. anyOf[2] (Value): null.
             */
            "active_hold"?: ((FulfillmentHoldPreviousAttributes) | (null));
            /**
             * Order charges associated with this fulfillment. anyOf[1] (Value): Array of {@link
             * FulfillmentChargeLinkPreviousAttributes}. Order charges associated with this
             * fulfillment. anyOf[1][] (Value): {@link FulfillmentChargeLinkPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "charges"?: ((Array<FulfillmentChargeLinkPreviousAttributes>) | (null));
            /**
             * When the fulfillment was completed. Mirrors the completion time for its type:
             * delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at
             * for pickup, and service_details.completed_at for service fulfillments. Omitted until
             * a completion time is recorded. anyOf[1] (Value): string. When the fulfillment was
             * completed. Mirrors the completion time for its type: delivered_at for shipment,
             * local delivery, and digital fulfillments, picked_up_at for pickup, and
             * service_details.completed_at for service fulfillments. Omitted until a completion
             * time is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
             * (Value): null.
             */
            "completed_at"?: ((string) | (null));
            /**
             * When the fulfillment was created, in RFC3339 format. anyOf[1] (Value): string. When
             * the fulfillment was created, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Customer receiving this fulfillment, when one is set. anyOf[1] (Value): string.
             * Customer receiving this fulfillment, when one is set. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * Delivery choice group that created this fulfillment. `null` when the merchant
             * created the fulfillment or checkout created it without a delivery quote. Always
             * present with merchant credentials. anyOf[1] (Value): string. Delivery choice group
             * that created this fulfillment. `null` when the merchant created the fulfillment or
             * checkout created it without a delivery quote. Always present with merchant
             * credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". anyOf[2] (Value): null.
             */
            "delivery_choice_group_id"?: ((string) | (null));
            /**
             * Execution leg of the selected delivery option that created this fulfillment. `null`
             * when the merchant created the fulfillment or checkout created it without a delivery
             * quote. Always present with merchant credentials. anyOf[1] (Value): string. Execution
             * leg of the selected delivery option that created this fulfillment. `null` when the
             * merchant created the fulfillment or checkout created it without a delivery quote.
             * Always present with merchant credentials. Example:
             * "dleg_01KEZF7C00VB59BKTRC8W4KR4M". anyOf[2] (Value): null.
             */
            "delivery_execution_leg_id"?: ((string) | (null));
            /**
             * Delivery method chosen for this fulfillment. `null` when the merchant created the
             * fulfillment or checkout created it without a delivery quote. Also `null` when it was
             * created before this field was added. Always present with merchant credentials.
             * anyOf[1] (Value): string. Delivery method chosen for this fulfillment. `null` when
             * the merchant created the fulfillment or checkout created it without a delivery
             * quote. Also `null` when it was created before this field was added. Always present
             * with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2]
             * (Value): null.
             */
            "delivery_method_id"?: ((string) | (null));
            /**
             * Delivery selection that created this fulfillment. `null` when the merchant created
             * the fulfillment or checkout created it without a delivery quote. Always present with
             * merchant credentials. anyOf[1] (Value): string. Delivery selection that created this
             * fulfillment. `null` when the merchant created the fulfillment or checkout created it
             * without a delivery quote. Always present with merchant credentials. Example:
             * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[2] (Value): null.
             */
            "delivery_selection_id"?: ((string) | (null));
            /**
             * Device associated with the fulfillment, when one is recorded. anyOf[1] (Value):
             * string. Device associated with the fulfillment, when one is recorded. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6". anyOf[2] (Value): null.
             */
            "device_id"?: ((string) | (null));
            /**
             * Delivery URL and completion time for a digital fulfillment. anyOf[1] (Value): {@link
             * DigitalFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "digital_details"?: ((DigitalFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * First time this fulfillment reached dispatched. anyOf[1] (Value): string. First time
             * this fulfillment reached dispatched. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "dispatched_at"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Stable identifier of the fulfillment. anyOf[1] (Value): string. Stable identifier of
             * the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". anyOf[2] (Value): null.
             */
            "fulfillment_id"?: ((string) | (null));
            /**
             * Order lines and quantities allocated to this fulfillment. anyOf[1] (Value): Array of
             * {@link FulfillmentLineItemPreviousAttributes}. Order lines and quantities allocated
             * to this fulfillment. anyOf[1][] (Value): {@link
             * FulfillmentLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<FulfillmentLineItemPreviousAttributes>) | (null));
            /**
             * Courier, delivery window, and handoff details for a local delivery fulfillment.
             * anyOf[1] (Value): {@link DeliveryFulfillmentDetailsPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "local_delivery_details"?: ((DeliveryFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Merchant location responsible for this fulfillment. anyOf[1] (Value): string.
             * Merchant location responsible for this fulfillment. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
             */
            "location_id"?: ((string) | (null));
            /**
             * Caller-owned key-value metadata associated with the fulfillment. anyOf[1] (Value):
             * {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * Order whose items this fulfillment delivers. anyOf[1] (Value): string. Order whose
             * items this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2]
             * (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * Human-readable number of the order this fulfillment belongs to. Omitted when the
             * order has no number. anyOf[1] (Value): string. Human-readable number of the order
             * this fulfillment belongs to. Omitted when the order has no number. anyOf[2] (Value):
             * null.
             */
            "order_number"?: ((string) | (null));
            /**
             * Terminal outcome details. Present exactly when status is no_show. anyOf[1] (Value):
             * {@link FulfillmentOutcomePreviousAttributes}. anyOf[2] (Value): null.
             */
            "outcome"?: ((FulfillmentOutcomePreviousAttributes) | (null));
            /**
             * Packages associated with this fulfillment. anyOf[1] (Value): Array of {@link
             * ExpandedPackageSummaryPreviousAttributes}. Packages associated with this
             * fulfillment. anyOf[1][] (Value): {@link ExpandedPackageSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "packages"?: ((Array<ExpandedPackageSummaryPreviousAttributes>) | (null));
            /**
             * First time this fulfillment reached packed. anyOf[1] (Value): string. First time
             * this fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "packed_at"?: ((string) | (null));
            /**
             * First time this fulfillment reached picked. anyOf[1] (Value): string. First time
             * this fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "picked_at"?: ((string) | (null));
            /**
             * Pickup window, pickup mode, and handoff times for a pickup fulfillment. anyOf[1]
             * (Value): {@link PickupFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "pickup_details"?: ((PickupFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. anyOf[1] (Value): {@link FulfillmentRecipientPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "recipient"?: ((FulfillmentRecipientPreviousAttributes) | (null));
            /**
             * Derived start of the service schedule or pickup, local delivery, or shipment window.
             * Null when no schedule is booked, including digital fulfillments. Details remain the
             * authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first
             * ascending and last descending. Sorting by due_at compares this same value with nulls
             * last ascending and first descending. Ties use fulfillment_id in the same direction.
             * anyOf[1] (Value): string. Derived start of the service schedule or pickup, local
             * delivery, or shipment window. Null when no schedule is booked, including digital
             * fulfillments. Details remain the authoritative schedule inputs. Sorting by
             * scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at
             * compares this same value with nulls last ascending and first descending. Ties use
             * fulfillment_id in the same direction. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "scheduled_start_at"?: ((string) | (null));
            /**
             * Schedule and completion details for a service fulfillment. anyOf[1] (Value): {@link
             * ServiceFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "service_details"?: ((ServiceFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
             * fulfillments with at least one value. anyOf[1] (Value): {@link
             * ShipmentFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "shipment_details"?: ((ShipmentFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Shipments associated with this fulfillment. anyOf[1] (Value): Array of {@link
             * ExpandedShipmentSummaryPreviousAttributes}. Shipments associated with this
             * fulfillment. anyOf[1][] (Value): {@link ExpandedShipmentSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "shipments"?: ((Array<ExpandedShipmentSummaryPreviousAttributes>) | (null));
            /**
             * Current fulfillment lifecycle status. Read supported_actions for available
             * transitions. - `pending`: Work has not started and has not been accepted. Approval
             * may be required before work can begin. - `accepted`: The provider accepted the
             * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
             * restore active_hold.previous_status, or use a supported forward action. -
             * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
             * fulfillment is ready for pickup, handoff, or completion. - `completed`: All
             * fulfillment work completed successfully. - `canceled`: The fulfillment was
             * intentionally canceled and will not continue. - `failed`: The fulfillment could not
             * be completed. Resolve the recorded reason before creating replacement work. -
             * `scheduled`: The fulfillment is scheduled for its recorded service window. -
             * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
             * items have been picked. - `packed`: The assigned items have been packed. -
             * `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`:
             * A service appointment was missed. Read outcome for the recorded reason. Value enum:
             * "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
             * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
             * anyOf[1] (Value): string. Current fulfillment lifecycle status. Read
             * supported_actions for available transitions. - `pending`: Work has not started and
             * has not been accepted. Approval may be required before work can begin. - `accepted`:
             * The provider accepted the fulfillment; work has not started. - `on_hold`: Work is
             * paused. Release the hold to restore active_hold.previous_status, or use a supported
             * forward action. - `in_progress`: Work has started and is not yet ready or complete.
             * - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
             * `completed`: All fulfillment work completed successfully. - `canceled`: The
             * fulfillment was intentionally canceled and will not continue. - `failed`: The
             * fulfillment could not be completed. Resolve the recorded reason before creating
             * replacement work. - `scheduled`: The fulfillment is scheduled for its recorded
             * service window. - `preparing`: Warehouse or provider preparation is underway. -
             * `picked`: The assigned items have been picked. - `packed`: The assigned items have
             * been packed. - `dispatched`: The fulfillment left its origin for delivery or
             * handoff. - `no_show`: A service appointment was missed. Read outcome for the
             * recorded reason. Value enum: "pending", "accepted", "on_hold", "in_progress",
             * "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked",
             * "packed", "dispatched", "no_show". anyOf[2] (Value): null.
             */
            "status"?: (("pending"
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
                | (string & {}))
                | (null));
            /**
             * Read-only lifecycle actions accepted now, based on the fulfillment, its order
             * payment status, holds, and shipment progress. Empty when none are available. Values
             * name the verb route with hyphens replaced by underscores. Always present with
             * merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start". anyOf[1] (Value): Array of
             * string. Read-only lifecycle actions accepted now, based on the fulfillment, its
             * order payment status, holds, and shipment progress. Empty when none are available.
             * Values name the verb route with hyphens replaced by underscores. Always present with
             * merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start". anyOf[1][] (Value): string. Value
             * enum: "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
             * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
             * "schedule", "start". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"accept"
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
                | (string & {})>)
                | (null));
            /**
             * When the fulfillment entered a terminal state: completed, canceled, failed, or
             * no_show. This records the state transition; completed_at records completion evidence
             * supplied for the fulfillment. anyOf[1] (Value): string. When the fulfillment entered
             * a terminal state: completed, canceled, failed, or no_show. This records the state
             * transition; completed_at records completion evidence supplied for the fulfillment.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "terminal_at"?: ((string) | (null));
            /**
             * How the items are delivered: shipment, pickup, local delivery, digital delivery, or
             * service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service",
             * "handover". anyOf[1] (Value): string. How the items are delivered: shipment, pickup,
             * local delivery, digital delivery, or service. Value enum: "shipment", "pickup",
             * "local_delivery", "digital", "service", "handover". anyOf[2] (Value): null.
             */
            "type"?: (("shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {}))
                | (null));
            /**
             * When the fulfillment was last updated, in RFC3339 format. anyOf[1] (Value): string.
             * When the fulfillment was last updated, in RFC3339 format. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Monotonic fulfillment version for expected_version checks. anyOf[1] (Value):
             * integer. Monotonic fulfillment version for expected_version checks. Format: uint64.
             * minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "fulfillment.canceled". */
    "event_type"?: "fulfillment.canceled";
});
/** Links a fulfillment to an order charge by `order_charge_id`. */
export type FulfillmentChargeLink = {
    /** Order charge associated with this fulfillment. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT". */
    "order_charge_id": string;
    /** Order that owns the referenced charge. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
};
export type FulfillmentChargeLinkPreviousAttributes = {
    /**
     * Order charge associated with this fulfillment. anyOf[1] (Value): string. Order charge
     * associated with this fulfillment. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT". anyOf[2]
     * (Value): null.
     */
    "order_charge_id"?: ((string) | (null));
    /**
     * Order that owns the referenced charge. anyOf[1] (Value): string. Order that owns the
     * referenced charge. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     */
    "order_id"?: ((string) | (null));
};
export type FulfillmentCompletedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_hold"?: FulfillmentHold;
            "charges"?: Array<FulfillmentChargeLink>;
            "completed_at"?: string;
            "created_at": string;
            "customer_id"?: string;
            "delivery_choice_group_id"?: string | null;
            "delivery_execution_leg_id"?: string | null;
            "delivery_method_id"?: string | null;
            "delivery_selection_id"?: string | null;
            "device_id"?: string;
            "digital_details"?: DigitalFulfillmentDetails;
            "dispatched_at"?: string;
            "external_reference_id"?: string;
            "fulfillment_id": string;
            "line_items": Array<FulfillmentLineItem>;
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            "location_id"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "order_number"?: string;
            "outcome"?: FulfillmentOutcome;
            "packages"?: Array<ExpandedPackageSummary>;
            "packed_at"?: string;
            "picked_at"?: string;
            "pickup_details"?: PickupFulfillmentDetails;
            "recipient"?: FulfillmentRecipient;
            "scheduled_start_at": string | null;
            "service_details"?: ServiceFulfillmentDetails;
            "shipment_details"?: ShipmentFulfillmentDetails;
            "shipments"?: Array<ExpandedShipmentSummary>;
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
            "terminal_at"?: string;
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "active_hold"?: ((FulfillmentHoldPreviousAttributes) | (null));
            "charges"?: ((Array<FulfillmentChargeLinkPreviousAttributes>) | (null));
            "completed_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "customer_id"?: ((string) | (null));
            "delivery_choice_group_id"?: ((string) | (null));
            "delivery_execution_leg_id"?: ((string) | (null));
            "delivery_method_id"?: ((string) | (null));
            "delivery_selection_id"?: ((string) | (null));
            "device_id"?: ((string) | (null));
            "digital_details"?: ((DigitalFulfillmentDetailsPreviousAttributes) | (null));
            "dispatched_at"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "fulfillment_id"?: ((string) | (null));
            "line_items"?: ((Array<FulfillmentLineItemPreviousAttributes>) | (null));
            "local_delivery_details"?: ((DeliveryFulfillmentDetailsPreviousAttributes) | (null));
            "location_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "order_number"?: ((string) | (null));
            "outcome"?: ((FulfillmentOutcomePreviousAttributes) | (null));
            "packages"?: ((Array<ExpandedPackageSummaryPreviousAttributes>) | (null));
            "packed_at"?: ((string) | (null));
            "picked_at"?: ((string) | (null));
            "pickup_details"?: ((PickupFulfillmentDetailsPreviousAttributes) | (null));
            "recipient"?: ((FulfillmentRecipientPreviousAttributes) | (null));
            "scheduled_start_at"?: ((string) | (null));
            "service_details"?: ((ServiceFulfillmentDetailsPreviousAttributes) | (null));
            "shipment_details"?: ((ShipmentFulfillmentDetailsPreviousAttributes) | (null));
            "shipments"?: ((Array<ExpandedShipmentSummaryPreviousAttributes>) | (null));
            "status"?: (("pending"
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
                | (string & {}))
                | (null));
            "supported_actions"?: ((Array<"accept"
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
                | (string & {})>)
                | (null));
            "terminal_at"?: ((string) | (null));
            "type"?: (("shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {}))
                | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "fulfillment.completed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_hold"?: FulfillmentHold;
            "charges"?: Array<FulfillmentChargeLink>;
            "completed_at"?: string;
            "created_at": string;
            "customer_id"?: string;
            "delivery_choice_group_id"?: string | null;
            "delivery_execution_leg_id"?: string | null;
            "delivery_method_id"?: string | null;
            "delivery_selection_id"?: string | null;
            "device_id"?: string;
            "digital_details"?: DigitalFulfillmentDetails;
            "dispatched_at"?: string;
            "external_reference_id"?: string;
            "fulfillment_id": string;
            "line_items": Array<FulfillmentLineItem>;
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            "location_id"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "order_number"?: string;
            "outcome"?: FulfillmentOutcome;
            "packages"?: Array<ExpandedPackageSummary>;
            "packed_at"?: string;
            "picked_at"?: string;
            "pickup_details"?: PickupFulfillmentDetails;
            "recipient"?: FulfillmentRecipient;
            "scheduled_start_at": string | null;
            "service_details"?: ServiceFulfillmentDetails;
            "shipment_details"?: ShipmentFulfillmentDetails;
            "shipments"?: Array<ExpandedShipmentSummary>;
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
            "terminal_at"?: string;
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "active_hold"?: ((FulfillmentHoldPreviousAttributes) | (null));
            "charges"?: ((Array<FulfillmentChargeLinkPreviousAttributes>) | (null));
            "completed_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "customer_id"?: ((string) | (null));
            "delivery_choice_group_id"?: ((string) | (null));
            "delivery_execution_leg_id"?: ((string) | (null));
            "delivery_method_id"?: ((string) | (null));
            "delivery_selection_id"?: ((string) | (null));
            "device_id"?: ((string) | (null));
            "digital_details"?: ((DigitalFulfillmentDetailsPreviousAttributes) | (null));
            "dispatched_at"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "fulfillment_id"?: ((string) | (null));
            "line_items"?: ((Array<FulfillmentLineItemPreviousAttributes>) | (null));
            "local_delivery_details"?: ((DeliveryFulfillmentDetailsPreviousAttributes) | (null));
            "location_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "order_number"?: ((string) | (null));
            "outcome"?: ((FulfillmentOutcomePreviousAttributes) | (null));
            "packages"?: ((Array<ExpandedPackageSummaryPreviousAttributes>) | (null));
            "packed_at"?: ((string) | (null));
            "picked_at"?: ((string) | (null));
            "pickup_details"?: ((PickupFulfillmentDetailsPreviousAttributes) | (null));
            "recipient"?: ((FulfillmentRecipientPreviousAttributes) | (null));
            "scheduled_start_at"?: ((string) | (null));
            "service_details"?: ((ServiceFulfillmentDetailsPreviousAttributes) | (null));
            "shipment_details"?: ((ShipmentFulfillmentDetailsPreviousAttributes) | (null));
            "shipments"?: ((Array<ExpandedShipmentSummaryPreviousAttributes>) | (null));
            "status"?: (("pending"
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
                | (string & {}))
                | (null));
            "supported_actions"?: ((Array<"accept"
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
                | (string & {})>)
                | (null));
            "terminal_at"?: ((string) | (null));
            "type"?: (("shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {}))
                | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "fulfillment.completed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "fulfillment.completed";
});
/**
 * The `fulfillment.completed` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type FulfillmentCompletedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.active_hold (Optional): {@link FulfillmentHold}. Current hold
     * details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason,
     * who placed it, and when it became active. object.charges (Optional): Array of {@link
     * FulfillmentChargeLink}. Order charges associated with this fulfillment. object.charges[]
     * (Value): {@link FulfillmentChargeLink}. Links a fulfillment to an order charge by
     * `order_charge_id`. object.completed_at (Optional): string. When the fulfillment was
     * completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required):
     * string. When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.customer_id (Optional): string. Customer receiving this
     * fulfillment, when one is set. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.delivery_choice_group_id (Optional): string or null. Delivery choice group that
     * created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials. Example:
     * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". object.delivery_execution_leg_id (Optional): string or
     * null. Execution leg of the selected delivery option that created this fulfillment. `null`
     * when the merchant created the fulfillment or checkout created it without a delivery quote.
     * Always present with merchant credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
     * object.delivery_method_id (Optional): string or null. Delivery method chosen for this
     * fulfillment. `null` when the merchant created the fulfillment or checkout created it without
     * a delivery quote. Also `null` when it was created before this field was added. Always
     * present with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_selection_id (Optional): string or null. Delivery selection that created
     * this fulfillment. `null` when the merchant created the fulfillment or checkout created it
     * without a delivery quote. Always present with merchant credentials. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". object.device_id (Optional): string. Device associated
     * with the fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
     * object.digital_details (Optional): {@link DigitalFulfillmentDetails}. Delivery URL and
     * completion time for a digital fulfillment. Details of a digital fulfillment: when it was
     * delivered (`delivered_at`) and its `delivery_url`. object.dispatched_at (Optional): string.
     * First time this fulfillment reached dispatched. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.fulfillment_id (Required): string. Stable identifier of the
     * fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.line_items (Required): Array
     * of {@link FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment.
     * object.line_items[] (Value): {@link FulfillmentLineItem}. An order line item and quantity
     * included in a fulfillment, with the modifiers applied to it. object.local_delivery_details
     * (Optional): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
     * details for a local delivery fulfillment. Details of a local delivery fulfillment: courier,
     * timing window, instructions, and tracking. Some fields are omitted for credentials that
     * don't act for the verified customer. object.location_id (Optional): string. Merchant
     * location responsible for this fulfillment. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned key-value metadata associated
     * with the fulfillment. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.order (Optional): {@link ExpandedOrderSummary} or null. Order summary returned when
     * the order relationship is expanded. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.order_number
     * (Optional): string. Human-readable number of the order this fulfillment belongs to. Omitted
     * when the order has no number. object.outcome (Optional): {@link FulfillmentOutcome}.
     * Terminal outcome details. Present exactly when status is no_show. The terminal outcome
     * recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred.
     * object.packages (Optional): Array of {@link ExpandedPackageSummary}. Packages associated
     * with this fulfillment. object.packages[] (Value): {@link ExpandedPackageSummary}. A
     * package's summary fields, including carrier, tracking, status, and supported actions,
     * returned when the package is expanded. object.packed_at (Optional): string. First time this
     * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.picked_at (Optional): string. First time this fulfillment reached picked. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.pickup_details (Optional): {@link
     * PickupFulfillmentDetails}. Pickup window, pickup mode, and handoff times for a pickup
     * fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and
     * instructions name the store the buyer chose and the delivery method's pickup instructions.
     * The note the buyer left for the store is in recipient.instructions. object.recipient
     * (Optional): {@link FulfillmentRecipient}. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name,
     * email, phone, address, and handling instructions. object.scheduled_start_at (Required):
     * string or null. Derived start of the service schedule or pickup, local delivery, or shipment
     * window. Null when no schedule is booked, including digital fulfillments. Details remain the
     * authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and
     * last descending. Sorting by due_at compares this same value with nulls last ascending and
     * first descending. Ties use fulfillment_id in the same direction. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.service_details (Optional): {@link
     * ServiceFulfillmentDetails}. Schedule and completion details for a service fulfillment.
     * Details of a service fulfillment: the scheduled start and end, timezone, completion time,
     * and notes. object.shipment_details (Optional): {@link ShipmentFulfillmentDetails}. Shipping
     * schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments
     * with at least one value. Details of a shipment fulfillment: the shipping window, timezone,
     * and when the shipment was handed to the carrier. object.shipments (Optional): Array of
     * {@link ExpandedShipmentSummary}. Shipments associated with this fulfillment.
     * object.shipments[] (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields,
     * including direction, status, and package count, returned when the shipment is expanded.
     * object.status (Required): string. Current fulfillment lifecycle status. Read
     * supported_actions for available transitions. - `pending`: Work has not started and has not
     * been accepted. Approval may be required before work can begin. - `accepted`: The provider
     * accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the
     * hold to restore active_hold.previous_status, or use a supported forward action. -
     * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment
     * is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed
     * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
     * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason
     * before creating replacement work. - `scheduled`: The fulfillment is scheduled for its
     * recorded service window. - `preparing`: Warehouse or provider preparation is underway. -
     * `picked`: The assigned items have been picked. - `packed`: The assigned items have been
     * packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. -
     * `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value
     * enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     * object.supported_actions (Optional): Array of string. Read-only lifecycle actions accepted
     * now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty
     * when none are available. Values name the verb route with hyphens replaced by underscores.
     * Always present with merchant credentials. [] enum: "accept", "cancel", "complete",
     * "dispatch", "fail", "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
     * "mark_ready", "release_hold", "schedule", "start". object.supported_actions[] (Value):
     * string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". object.terminal_at (Optional): string. When the
     * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records
     * the state transition; completed_at records completion evidence supplied for the fulfillment.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string. How the
     * items are delivered: shipment, pickup, local delivery, digital delivery, or service. Value
     * enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover".
     * object.updated_at (Required): string. When the fulfillment was last updated, in RFC3339
     * format. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Monotonic fulfillment version for expected_version checks. Format: uint64. minimum:
     * 1. previous_attributes (Optional): object and {@link FulfillmentPreviousAttributes}.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.active_hold (Optional): {@link
     * FulfillmentHoldPreviousAttributes} or null. Current hold details. Present exactly when
     * status is on_hold. previous_attributes.active_hold.anyOf[1] (Value): {@link
     * FulfillmentHoldPreviousAttributes}. previous_attributes.active_hold.anyOf[2] (Value): null.
     * previous_attributes.charges (Optional): Array of {@link
     * FulfillmentChargeLinkPreviousAttributes} or null. Order charges associated with this
     * fulfillment. previous_attributes.charges.anyOf[1] (Value): Array of {@link
     * FulfillmentChargeLinkPreviousAttributes}. Order charges associated with this fulfillment.
     * previous_attributes.charges.anyOf[1][] (Value): {@link
     * FulfillmentChargeLinkPreviousAttributes}. previous_attributes.charges.anyOf[2] (Value):
     * null. previous_attributes.completed_at (Optional): string or null. When the fulfillment was
     * completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. previous_attributes.completed_at.anyOf[1] (Value): string. When the fulfillment
     * was completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.completed_at.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. When the fulfillment was created, in RFC3339 format.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the fulfillment was created,
     * in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.customer_id
     * (Optional): string or null. Customer receiving this fulfillment, when one is set.
     * previous_attributes.customer_id.anyOf[1] (Value): string. Customer receiving this
     * fulfillment, when one is set. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_choice_group_id (Optional): string or null. Delivery choice
     * group that created this fulfillment. `null` when the merchant created the fulfillment or
     * checkout created it without a delivery quote. Always present with merchant credentials.
     * previous_attributes.delivery_choice_group_id.anyOf[1] (Value): string. Delivery choice group
     * that created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials. Example:
     * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". previous_attributes.delivery_choice_group_id.anyOf[2]
     * (Value): null. previous_attributes.delivery_execution_leg_id (Optional): string or null.
     * Execution leg of the selected delivery option that created this fulfillment. `null` when the
     * merchant created the fulfillment or checkout created it without a delivery quote. Always
     * present with merchant credentials. previous_attributes.delivery_execution_leg_id.anyOf[1]
     * (Value): string. Execution leg of the selected delivery option that created this
     * fulfillment. `null` when the merchant created the fulfillment or checkout created it without
     * a delivery quote. Always present with merchant credentials. Example:
     * "dleg_01KEZF7C00VB59BKTRC8W4KR4M". previous_attributes.delivery_execution_leg_id.anyOf[2]
     * (Value): null. previous_attributes.delivery_method_id (Optional): string or null. Delivery
     * method chosen for this fulfillment. `null` when the merchant created the fulfillment or
     * checkout created it without a delivery quote. Also `null` when it was created before this
     * field was added. Always present with merchant credentials.
     * previous_attributes.delivery_method_id.anyOf[1] (Value): string. Delivery method chosen for
     * this fulfillment. `null` when the merchant created the fulfillment or checkout created it
     * without a delivery quote. Also `null` when it was created before this field was added.
     * Always present with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * previous_attributes.delivery_method_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_selection_id (Optional): string or null. Delivery selection
     * that created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials.
     * previous_attributes.delivery_selection_id.anyOf[1] (Value): string. Delivery selection that
     * created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". previous_attributes.delivery_selection_id.anyOf[2]
     * (Value): null. previous_attributes.device_id (Optional): string or null. Device associated
     * with the fulfillment, when one is recorded. previous_attributes.device_id.anyOf[1] (Value):
     * string. Device associated with the fulfillment, when one is recorded. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6". previous_attributes.device_id.anyOf[2] (Value): null.
     * previous_attributes.digital_details (Optional): {@link
     * DigitalFulfillmentDetailsPreviousAttributes} or null. Delivery URL and completion time for a
     * digital fulfillment. previous_attributes.digital_details.anyOf[1] (Value): {@link
     * DigitalFulfillmentDetailsPreviousAttributes}. previous_attributes.digital_details.anyOf[2]
     * (Value): null. previous_attributes.dispatched_at (Optional): string or null. First time this
     * fulfillment reached dispatched. previous_attributes.dispatched_at.anyOf[1] (Value): string.
     * First time this fulfillment reached dispatched. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.dispatched_at.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.fulfillment_id (Optional): string or null. Stable identifier of the
     * fulfillment. previous_attributes.fulfillment_id.anyOf[1] (Value): string. Stable identifier
     * of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     * previous_attributes.fulfillment_id.anyOf[2] (Value): null. previous_attributes.line_items
     * (Optional): Array of {@link FulfillmentLineItemPreviousAttributes} or null. Order lines and
     * quantities allocated to this fulfillment. previous_attributes.line_items.anyOf[1] (Value):
     * Array of {@link FulfillmentLineItemPreviousAttributes}. Order lines and quantities allocated
     * to this fulfillment. previous_attributes.line_items.anyOf[1][] (Value): {@link
     * FulfillmentLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2] (Value):
     * null. previous_attributes.local_delivery_details (Optional): {@link
     * DeliveryFulfillmentDetailsPreviousAttributes} or null. Courier, delivery window, and handoff
     * details for a local delivery fulfillment.
     * previous_attributes.local_delivery_details.anyOf[1] (Value): {@link
     * DeliveryFulfillmentDetailsPreviousAttributes}.
     * previous_attributes.local_delivery_details.anyOf[2] (Value): null.
     * previous_attributes.location_id (Optional): string or null. Merchant location responsible
     * for this fulfillment. previous_attributes.location_id.anyOf[1] (Value): string. Merchant
     * location responsible for this fulfillment. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.location_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned key-value metadata associated with the
     * fulfillment. previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary returned when the
     * order relationship is expanded. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. previous_attributes.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummaryPreviousAttributes}. previous_attributes.order.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. Order whose items this fulfillment
     * delivers. previous_attributes.order_id.anyOf[1] (Value): string. Order whose items this
     * fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * previous_attributes.order_id.anyOf[2] (Value): null. previous_attributes.order_number
     * (Optional): string or null. Human-readable number of the order this fulfillment belongs to.
     * Omitted when the order has no number. previous_attributes.order_number.anyOf[1] (Value):
     * string. Human-readable number of the order this fulfillment belongs to. Omitted when the
     * order has no number. previous_attributes.order_number.anyOf[2] (Value): null.
     * previous_attributes.outcome (Optional): {@link FulfillmentOutcomePreviousAttributes} or
     * null. Terminal outcome details. Present exactly when status is no_show.
     * previous_attributes.outcome.anyOf[1] (Value): {@link FulfillmentOutcomePreviousAttributes}.
     * previous_attributes.outcome.anyOf[2] (Value): null. previous_attributes.packages (Optional):
     * Array of {@link ExpandedPackageSummaryPreviousAttributes} or null. Packages associated with
     * this fulfillment. previous_attributes.packages.anyOf[1] (Value): Array of {@link
     * ExpandedPackageSummaryPreviousAttributes}. Packages associated with this fulfillment.
     * previous_attributes.packages.anyOf[1][] (Value): {@link
     * ExpandedPackageSummaryPreviousAttributes}. previous_attributes.packages.anyOf[2] (Value):
     * null. previous_attributes.packed_at (Optional): string or null. First time this fulfillment
     * reached packed. previous_attributes.packed_at.anyOf[1] (Value): string. First time this
     * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.packed_at.anyOf[2] (Value): null. previous_attributes.picked_at
     * (Optional): string or null. First time this fulfillment reached picked.
     * previous_attributes.picked_at.anyOf[1] (Value): string. First time this fulfillment reached
     * picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.picked_at.anyOf[2] (Value): null. previous_attributes.pickup_details
     * (Optional): {@link PickupFulfillmentDetailsPreviousAttributes} or null. Pickup window,
     * pickup mode, and handoff times for a pickup fulfillment.
     * previous_attributes.pickup_details.anyOf[1] (Value): {@link
     * PickupFulfillmentDetailsPreviousAttributes}. previous_attributes.pickup_details.anyOf[2]
     * (Value): null. previous_attributes.recipient (Optional): {@link
     * FulfillmentRecipientPreviousAttributes} or null. Omitted for a checkout session credential
     * that doesn't act for the customer the buyer verified. previous_attributes.recipient.anyOf[1]
     * (Value): {@link FulfillmentRecipientPreviousAttributes}.
     * previous_attributes.recipient.anyOf[2] (Value): null. previous_attributes.scheduled_start_at
     * (Optional): string or null. Derived start of the service schedule or pickup, local delivery,
     * or shipment window. Null when no schedule is booked, including digital fulfillments. Details
     * remain the authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first
     * ascending and last descending. Sorting by due_at compares this same value with nulls last
     * ascending and first descending. Ties use fulfillment_id in the same direction.
     * previous_attributes.scheduled_start_at.anyOf[1] (Value): string. Derived start of the
     * service schedule or pickup, local delivery, or shipment window. Null when no schedule is
     * booked, including digital fulfillments. Details remain the authoritative schedule inputs.
     * Sorting by scheduled_start_at puts nulls first ascending and last descending. Sorting by
     * due_at compares this same value with nulls last ascending and first descending. Ties use
     * fulfillment_id in the same direction. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.scheduled_start_at.anyOf[2] (Value): null.
     * previous_attributes.service_details (Optional): {@link
     * ServiceFulfillmentDetailsPreviousAttributes} or null. Schedule and completion details for a
     * service fulfillment. previous_attributes.service_details.anyOf[1] (Value): {@link
     * ServiceFulfillmentDetailsPreviousAttributes}. previous_attributes.service_details.anyOf[2]
     * (Value): null. previous_attributes.shipment_details (Optional): {@link
     * ShipmentFulfillmentDetailsPreviousAttributes} or null. Shipping schedule and ship time for a
     * shipment fulfillment. Present only on shipment fulfillments with at least one value.
     * previous_attributes.shipment_details.anyOf[1] (Value): {@link
     * ShipmentFulfillmentDetailsPreviousAttributes}. previous_attributes.shipment_details.anyOf[2]
     * (Value): null. previous_attributes.shipments (Optional): Array of {@link
     * ExpandedShipmentSummaryPreviousAttributes} or null. Shipments associated with this
     * fulfillment. previous_attributes.shipments.anyOf[1] (Value): Array of {@link
     * ExpandedShipmentSummaryPreviousAttributes}. Shipments associated with this fulfillment.
     * previous_attributes.shipments.anyOf[1][] (Value): {@link
     * ExpandedShipmentSummaryPreviousAttributes}. previous_attributes.shipments.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. Current fulfillment lifecycle
     * status. Read supported_actions for available transitions. - `pending`: Work has not started
     * and has not been accepted. Approval may be required before work can begin. - `accepted`: The
     * provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused.
     * Release the hold to restore active_hold.previous_status, or use a supported forward action.
     * - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
     * fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work
     * completed successfully. - `canceled`: The fulfillment was intentionally canceled and will
     * not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
     * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its
     * recorded service window. - `preparing`: Warehouse or provider preparation is underway. -
     * `picked`: The assigned items have been picked. - `packed`: The assigned items have been
     * packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. -
     * `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value
     * enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     * previous_attributes.status.anyOf[1] (Value): string. Current fulfillment lifecycle status.
     * Read supported_actions for available transitions. - `pending`: Work has not started and has
     * not been accepted. Approval may be required before work can begin. - `accepted`: The
     * provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused.
     * Release the hold to restore active_hold.previous_status, or use a supported forward action.
     * - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
     * fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work
     * completed successfully. - `canceled`: The fulfillment was intentionally canceled and will
     * not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
     * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its
     * recorded service window. - `preparing`: Warehouse or provider preparation is underway. -
     * `picked`: The assigned items have been picked. - `packed`: The assigned items have been
     * packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. -
     * `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value
     * enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Read-only lifecycle actions accepted now, based on the
     * fulfillment, its order payment status, holds, and shipment progress. Empty when none are
     * available. Values name the verb route with hyphens replaced by underscores. Always present
     * with merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
     * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". previous_attributes.supported_actions.anyOf[1] (Value):
     * Array of string. Read-only lifecycle actions accepted now, based on the fulfillment, its
     * order payment status, holds, and shipment progress. Empty when none are available. Values
     * name the verb route with hyphens replaced by underscores. Always present with merchant
     * credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". previous_attributes.supported_actions.anyOf[1][]
     * (Value): string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". previous_attributes.supported_actions.anyOf[2] (Value):
     * null. previous_attributes.terminal_at (Optional): string or null. When the fulfillment
     * entered a terminal state: completed, canceled, failed, or no_show. This records the state
     * transition; completed_at records completion evidence supplied for the fulfillment.
     * previous_attributes.terminal_at.anyOf[1] (Value): string. When the fulfillment entered a
     * terminal state: completed, canceled, failed, or no_show. This records the state transition;
     * completed_at records completion evidence supplied for the fulfillment. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.terminal_at.anyOf[2] (Value): null.
     * previous_attributes.type (Optional): string or null. How the items are delivered: shipment,
     * pickup, local delivery, digital delivery, or service. Value enum: "shipment", "pickup",
     * "local_delivery", "digital", "service", "handover". previous_attributes.type.anyOf[1]
     * (Value): string. How the items are delivered: shipment, pickup, local delivery, digital
     * delivery, or service. Value enum: "shipment", "pickup", "local_delivery", "digital",
     * "service", "handover". previous_attributes.type.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When the fulfillment was last
     * updated, in RFC3339 format. previous_attributes.updated_at.anyOf[1] (Value): string. When
     * the fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value): null.
     * previous_attributes.version (Optional): integer or null. Monotonic fulfillment version for
     * expected_version checks. previous_attributes.version.anyOf[1] (Value): integer. Monotonic
     * fulfillment version for expected_version checks. Format: uint64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * active_hold (Optional): {@link FulfillmentHold}. Current hold details. Present exactly
         * when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and
         * when it became active. charges (Optional): Array of {@link FulfillmentChargeLink}. Order
         * charges associated with this fulfillment. charges[] (Value): {@link
         * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
         * completed_at (Optional): string. When the fulfillment was completed. Mirrors the
         * completion time for its type: delivered_at for shipment, local delivery, and digital
         * fulfillments, picked_up_at for pickup, and service_details.completed_at for service
         * fulfillments. Omitted until a completion time is recorded. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When the fulfillment was created,
         * in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". customer_id
         * (Optional): string. Customer receiving this fulfillment, when one is set. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". delivery_choice_group_id (Optional): string or null.
         * Delivery choice group that created this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
         * delivery_execution_leg_id (Optional): string or null. Execution leg of the selected
         * delivery option that created this fulfillment. `null` when the merchant created the
         * fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M". delivery_method_id
         * (Optional): string or null. Delivery method chosen for this fulfillment. `null` when the
         * merchant created the fulfillment or checkout created it without a delivery quote. Also
         * `null` when it was created before this field was added. Always present with merchant
         * credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_id
         * (Optional): string or null. Delivery selection that created this fulfillment. `null`
         * when the merchant created the fulfillment or checkout created it without a delivery
         * quote. Always present with merchant credentials. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". device_id (Optional): string. Device associated with
         * the fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
         * digital_details (Optional): {@link DigitalFulfillmentDetails}. Delivery URL and
         * completion time for a digital fulfillment. Details of a digital fulfillment: when it was
         * delivered (`delivered_at`) and its `delivery_url`. dispatched_at (Optional): string.
         * First time this fulfillment reached dispatched. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". fulfillment_id (Required): string. Stable identifier of the
         * fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". line_items (Required): Array of
         * {@link FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment.
         * line_items[] (Value): {@link FulfillmentLineItem}. An order line item and quantity
         * included in a fulfillment, with the modifiers applied to it. local_delivery_details
         * (Optional): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
         * details for a local delivery fulfillment. Details of a local delivery fulfillment:
         * courier, timing window, instructions, and tracking. Some fields are omitted for
         * credentials that don't act for the verified customer. location_id (Optional): string.
         * Merchant location responsible for this fulfillment. Example:
         * "loc_01KEZF7C00CMHRRYA3MV996JB2". metadata (Optional): {@link MetadataMap}. Caller-owned
         * key-value metadata associated with the fulfillment. Caller-owned key-value data stored
         * on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
         * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before
         * those limits may not satisfy them. order (Optional): {@link ExpandedOrderSummary} or
         * null. Order summary returned when the order relationship is expanded. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. Order whose items this fulfillment delivers. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_number (Optional): string. Human-readable number
         * of the order this fulfillment belongs to. Omitted when the order has no number. outcome
         * (Optional): {@link FulfillmentOutcome}. Terminal outcome details. Present exactly when
         * status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show,
         * with its reason, notes, and when it occurred. packages (Optional): Array of {@link
         * ExpandedPackageSummary}. Packages associated with this fulfillment. packages[] (Value):
         * {@link ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
         * status, and supported actions, returned when the package is expanded. packed_at
         * (Optional): string. First time this fulfillment reached packed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". picked_at (Optional): string. First time this
         * fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * pickup_details (Optional): {@link PickupFulfillmentDetails}. Pickup window, pickup mode,
         * and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout
         * creates, location_name, address, and instructions name the store the buyer chose and the
         * delivery method's pickup instructions. The note the buyer left for the store is in
         * recipient.instructions. recipient (Optional): {@link FulfillmentRecipient}. Omitted for
         * a checkout session credential that doesn't act for the customer the buyer verified. The
         * recipient of a fulfillment, with name, email, phone, address, and handling instructions.
         * scheduled_start_at (Required): string or null. Derived start of the service schedule or
         * pickup, local delivery, or shipment window. Null when no schedule is booked, including
         * digital fulfillments. Details remain the authoritative schedule inputs. Sorting by
         * scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at
         * compares this same value with nulls last ascending and first descending. Ties use
         * fulfillment_id in the same direction. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_details (Optional): {@link ServiceFulfillmentDetails}.
         * Schedule and completion details for a service fulfillment. Details of a service
         * fulfillment: the scheduled start and end, timezone, completion time, and notes.
         * shipment_details (Optional): {@link ShipmentFulfillmentDetails}. Shipping schedule and
         * ship time for a shipment fulfillment. Present only on shipment fulfillments with at
         * least one value. Details of a shipment fulfillment: the shipping window, timezone, and
         * when the shipment was handed to the carrier. shipments (Optional): Array of {@link
         * ExpandedShipmentSummary}. Shipments associated with this fulfillment. shipments[]
         * (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields, including
         * direction, status, and package count, returned when the shipment is expanded. status
         * (Required): string. Current fulfillment lifecycle status. Read supported_actions for
         * available transitions. - `pending`: Work has not started and has not been accepted.
         * Approval may be required before work can begin. - `accepted`: The provider accepted the
         * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
         * restore active_hold.previous_status, or use a supported forward action. - `in_progress`:
         * Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready
         * for pickup, handoff, or completion. - `completed`: All fulfillment work completed
         * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
         * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
         * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for
         * its recorded service window. - `preparing`: Warehouse or provider preparation is
         * underway. - `picked`: The assigned items have been picked. - `packed`: The assigned
         * items have been packed. - `dispatched`: The fulfillment left its origin for delivery or
         * handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded
         * reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
         * "dispatched", "no_show". supported_actions (Optional): Array of string. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. Always present with merchant credentials. [] enum:
         * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
         * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
         * "schedule", "start". supported_actions[] (Value): string. Value enum: "accept",
         * "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed",
         * "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start".
         * terminal_at (Optional): string. When the fulfillment entered a terminal state:
         * completed, canceled, failed, or no_show. This records the state transition; completed_at
         * records completion evidence supplied for the fulfillment. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". type (Required): string. How the items are delivered: shipment,
         * pickup, local delivery, digital delivery, or service. Value enum: "shipment", "pickup",
         * "local_delivery", "digital", "service", "handover". updated_at (Required): string. When
         * the fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Monotonic fulfillment version for
         * expected_version checks. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current hold details. Present exactly when status is on_hold. A hold on a
             * fulfillment, with its reason, who placed it, and when it became active.
             */
            "active_hold"?: FulfillmentHold;
            /**
             * Order charges associated with this fulfillment. [] (Value): {@link
             * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
             */
            "charges"?: Array<FulfillmentChargeLink>;
            /**
             * When the fulfillment was completed. Mirrors the completion time for its type:
             * delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at
             * for pickup, and service_details.completed_at for service fulfillments. Omitted until
             * a completion time is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * Delivery choice group that created this fulfillment. `null` when the merchant
             * created the fulfillment or checkout created it without a delivery quote. Always
             * present with merchant credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
             */
            "delivery_choice_group_id"?: string | null;
            /**
             * Execution leg of the selected delivery option that created this fulfillment. `null`
             * when the merchant created the fulfillment or checkout created it without a delivery
             * quote. Always present with merchant credentials. Example:
             * "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
             */
            "delivery_execution_leg_id"?: string | null;
            /**
             * Delivery method chosen for this fulfillment. `null` when the merchant created the
             * fulfillment or checkout created it without a delivery quote. Also `null` when it was
             * created before this field was added. Always present with merchant credentials.
             * Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_id"?: string | null;
            /**
             * Delivery selection that created this fulfillment. `null` when the merchant created
             * the fulfillment or checkout created it without a delivery quote. Always present with
             * merchant credentials. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
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
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Stable identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
            "fulfillment_id": string;
            /**
             * Order lines and quantities allocated to this fulfillment. [] (Value): {@link
             * FulfillmentLineItem}. An order line item and quantity included in a fulfillment,
             * with the modifiers applied to it.
             */
            "line_items": Array<FulfillmentLineItem>;
            /**
             * Courier, delivery window, and handoff details for a local delivery fulfillment.
             * Details of a local delivery fulfillment: courier, timing window, instructions, and
             * tracking. Some fields are omitted for credentials that don't act for the verified
             * customer.
             */
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            /**
             * Merchant location responsible for this fulfillment. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id"?: string;
            /**
             * Caller-owned key-value metadata associated with the fulfillment. Caller-owned
             * key-value data stored on a resource. Keys starting with flint_ are reserved for
             * Flint and are not returned. Writes follow the limits on MetadataInput and
             * MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order whose items this fulfillment delivers. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * Human-readable number of the order this fulfillment belongs to. Omitted when the
             * order has no number.
             */
            "order_number"?: string;
            /**
             * Terminal outcome details. Present exactly when status is no_show. The terminal
             * outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and
             * when it occurred.
             */
            "outcome"?: FulfillmentOutcome;
            /**
             * Packages associated with this fulfillment. [] (Value): {@link
             * ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
             * status, and supported actions, returned when the package is expanded.
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
             * Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup
             * details. For a pickup that checkout creates, location_name, address, and
             * instructions name the store the buyer chose and the delivery method's pickup
             * instructions. The note the buyer left for the store is in recipient.instructions.
             */
            "pickup_details"?: PickupFulfillmentDetails;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The recipient of a fulfillment, with name, email, phone, address,
             * and handling instructions.
             */
            "recipient"?: FulfillmentRecipient;
            /**
             * Derived start of the service schedule or pickup, local delivery, or shipment window.
             * Null when no schedule is booked, including digital fulfillments. Details remain the
             * authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first
             * ascending and last descending. Sorting by due_at compares this same value with nulls
             * last ascending and first descending. Ties use fulfillment_id in the same direction.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_start_at": string | null;
            /**
             * Schedule and completion details for a service fulfillment. Details of a service
             * fulfillment: the scheduled start and end, timezone, completion time, and notes.
             */
            "service_details"?: ServiceFulfillmentDetails;
            /**
             * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
             * fulfillments with at least one value. Details of a shipment fulfillment: the
             * shipping window, timezone, and when the shipment was handed to the carrier.
             */
            "shipment_details"?: ShipmentFulfillmentDetails;
            /**
             * Shipments associated with this fulfillment. [] (Value): {@link
             * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status,
             * and package count, returned when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Current fulfillment lifecycle status. Read supported_actions for available
             * transitions. - `pending`: Work has not started and has not been accepted. Approval
             * may be required before work can begin. - `accepted`: The provider accepted the
             * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
             * restore active_hold.previous_status, or use a supported forward action. -
             * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
             * fulfillment is ready for pickup, handoff, or completion. - `completed`: All
             * fulfillment work completed successfully. - `canceled`: The fulfillment was
             * intentionally canceled and will not continue. - `failed`: The fulfillment could not
             * be completed. Resolve the recorded reason before creating replacement work. -
             * `scheduled`: The fulfillment is scheduled for its recorded service window. -
             * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
             * items have been picked. - `packed`: The assigned items have been packed. -
             * `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`:
             * A service appointment was missed. Read outcome for the recorded reason. Value enum:
             * "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
             * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
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
             * Read-only lifecycle actions accepted now, based on the fulfillment, its order
             * payment status, holds, and shipment progress. Empty when none are available. Values
             * name the verb route with hyphens replaced by underscores. Always present with
             * merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start". [] (Value): string. Value enum:
             * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
             * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
             * "schedule", "start".
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
             * When the fulfillment entered a terminal state: completed, canceled, failed, or
             * no_show. This records the state transition; completed_at records completion evidence
             * supplied for the fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "terminal_at"?: string;
            /**
             * How the items are delivered: shipment, pickup, local delivery, digital delivery, or
             * service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service",
             * "handover".
             */
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {});
            /**
             * When the fulfillment was last updated, in RFC3339 format. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum:
             * 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. active_hold (Optional): {@link
         * FulfillmentHoldPreviousAttributes} or null. Current hold details. Present exactly when
         * status is on_hold. active_hold.anyOf[1] (Value): {@link
         * FulfillmentHoldPreviousAttributes}. active_hold.anyOf[2] (Value): null. charges
         * (Optional): Array of {@link FulfillmentChargeLinkPreviousAttributes} or null. Order
         * charges associated with this fulfillment. charges.anyOf[1] (Value): Array of {@link
         * FulfillmentChargeLinkPreviousAttributes}. Order charges associated with this
         * fulfillment. charges.anyOf[1][] (Value): {@link
         * FulfillmentChargeLinkPreviousAttributes}. charges.anyOf[2] (Value): null. completed_at
         * (Optional): string or null. When the fulfillment was completed. Mirrors the completion
         * time for its type: delivered_at for shipment, local delivery, and digital fulfillments,
         * picked_up_at for pickup, and service_details.completed_at for service fulfillments.
         * Omitted until a completion time is recorded. completed_at.anyOf[1] (Value): string. When
         * the fulfillment was completed. Mirrors the completion time for its type: delivered_at
         * for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and
         * service_details.completed_at for service fulfillments. Omitted until a completion time
         * is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". completed_at.anyOf[2]
         * (Value): null. created_at (Optional): string or null. When the fulfillment was created,
         * in RFC3339 format. created_at.anyOf[1] (Value): string. When the fulfillment was
         * created, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. customer_id (Optional): string or null. Customer
         * receiving this fulfillment, when one is set. customer_id.anyOf[1] (Value): string.
         * Customer receiving this fulfillment, when one is set. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null.
         * delivery_choice_group_id (Optional): string or null. Delivery choice group that created
         * this fulfillment. `null` when the merchant created the fulfillment or checkout created
         * it without a delivery quote. Always present with merchant credentials.
         * delivery_choice_group_id.anyOf[1] (Value): string. Delivery choice group that created
         * this fulfillment. `null` when the merchant created the fulfillment or checkout created
         * it without a delivery quote. Always present with merchant credentials. Example:
         * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". delivery_choice_group_id.anyOf[2] (Value): null.
         * delivery_execution_leg_id (Optional): string or null. Execution leg of the selected
         * delivery option that created this fulfillment. `null` when the merchant created the
         * fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. delivery_execution_leg_id.anyOf[1] (Value): string. Execution leg
         * of the selected delivery option that created this fulfillment. `null` when the merchant
         * created the fulfillment or checkout created it without a delivery quote. Always present
         * with merchant credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
         * delivery_execution_leg_id.anyOf[2] (Value): null. delivery_method_id (Optional): string
         * or null. Delivery method chosen for this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Also `null` when it was
         * created before this field was added. Always present with merchant credentials.
         * delivery_method_id.anyOf[1] (Value): string. Delivery method chosen for this
         * fulfillment. `null` when the merchant created the fulfillment or checkout created it
         * without a delivery quote. Also `null` when it was created before this field was added.
         * Always present with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
         * delivery_method_id.anyOf[2] (Value): null. delivery_selection_id (Optional): string or
         * null. Delivery selection that created this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. delivery_selection_id.anyOf[1] (Value): string. Delivery selection
         * that created this fulfillment. `null` when the merchant created the fulfillment or
         * checkout created it without a delivery quote. Always present with merchant credentials.
         * Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". delivery_selection_id.anyOf[2] (Value):
         * null. device_id (Optional): string or null. Device associated with the fulfillment, when
         * one is recorded. device_id.anyOf[1] (Value): string. Device associated with the
         * fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
         * device_id.anyOf[2] (Value): null. digital_details (Optional): {@link
         * DigitalFulfillmentDetailsPreviousAttributes} or null. Delivery URL and completion time
         * for a digital fulfillment. digital_details.anyOf[1] (Value): {@link
         * DigitalFulfillmentDetailsPreviousAttributes}. digital_details.anyOf[2] (Value): null.
         * dispatched_at (Optional): string or null. First time this fulfillment reached
         * dispatched. dispatched_at.anyOf[1] (Value): string. First time this fulfillment reached
         * dispatched. Format: date-time. Example: "2026-08-02T16:00:00Z". dispatched_at.anyOf[2]
         * (Value): null. external_reference_id (Optional): string or null. Caller-owned identifier
         * for this resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. fulfillment_id
         * (Optional): string or null. Stable identifier of the fulfillment.
         * fulfillment_id.anyOf[1] (Value): string. Stable identifier of the fulfillment. Example:
         * "ful_01KEZF7C00F24WVSTTWR1FQX5T". fulfillment_id.anyOf[2] (Value): null. line_items
         * (Optional): Array of {@link FulfillmentLineItemPreviousAttributes} or null. Order lines
         * and quantities allocated to this fulfillment. line_items.anyOf[1] (Value): Array of
         * {@link FulfillmentLineItemPreviousAttributes}. Order lines and quantities allocated to
         * this fulfillment. line_items.anyOf[1][] (Value): {@link
         * FulfillmentLineItemPreviousAttributes}. line_items.anyOf[2] (Value): null.
         * local_delivery_details (Optional): {@link DeliveryFulfillmentDetailsPreviousAttributes}
         * or null. Courier, delivery window, and handoff details for a local delivery fulfillment.
         * local_delivery_details.anyOf[1] (Value): {@link
         * DeliveryFulfillmentDetailsPreviousAttributes}. local_delivery_details.anyOf[2] (Value):
         * null. location_id (Optional): string or null. Merchant location responsible for this
         * fulfillment. location_id.anyOf[1] (Value): string. Merchant location responsible for
         * this fulfillment. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". location_id.anyOf[2]
         * (Value): null. metadata (Optional): {@link MetadataMap} or null. Caller-owned key-value
         * metadata associated with the fulfillment. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. order (Optional): {@link
         * ExpandedOrderSummaryPreviousAttributes} or null. Order summary returned when the order
         * relationship is expanded. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. Order whose items this fulfillment delivers.
         * order_id.anyOf[1] (Value): string. Order whose items this fulfillment delivers. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. order_number
         * (Optional): string or null. Human-readable number of the order this fulfillment belongs
         * to. Omitted when the order has no number. order_number.anyOf[1] (Value): string.
         * Human-readable number of the order this fulfillment belongs to. Omitted when the order
         * has no number. order_number.anyOf[2] (Value): null. outcome (Optional): {@link
         * FulfillmentOutcomePreviousAttributes} or null. Terminal outcome details. Present exactly
         * when status is no_show. outcome.anyOf[1] (Value): {@link
         * FulfillmentOutcomePreviousAttributes}. outcome.anyOf[2] (Value): null. packages
         * (Optional): Array of {@link ExpandedPackageSummaryPreviousAttributes} or null. Packages
         * associated with this fulfillment. packages.anyOf[1] (Value): Array of {@link
         * ExpandedPackageSummaryPreviousAttributes}. Packages associated with this fulfillment.
         * packages.anyOf[1][] (Value): {@link ExpandedPackageSummaryPreviousAttributes}.
         * packages.anyOf[2] (Value): null. packed_at (Optional): string or null. First time this
         * fulfillment reached packed. packed_at.anyOf[1] (Value): string. First time this
         * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * packed_at.anyOf[2] (Value): null. picked_at (Optional): string or null. First time this
         * fulfillment reached picked. picked_at.anyOf[1] (Value): string. First time this
         * fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * picked_at.anyOf[2] (Value): null. pickup_details (Optional): {@link
         * PickupFulfillmentDetailsPreviousAttributes} or null. Pickup window, pickup mode, and
         * handoff times for a pickup fulfillment. pickup_details.anyOf[1] (Value): {@link
         * PickupFulfillmentDetailsPreviousAttributes}. pickup_details.anyOf[2] (Value): null.
         * recipient (Optional): {@link FulfillmentRecipientPreviousAttributes} or null. Omitted
         * for a checkout session credential that doesn't act for the customer the buyer verified.
         * recipient.anyOf[1] (Value): {@link FulfillmentRecipientPreviousAttributes}.
         * recipient.anyOf[2] (Value): null. scheduled_start_at (Optional): string or null. Derived
         * start of the service schedule or pickup, local delivery, or shipment window. Null when
         * no schedule is booked, including digital fulfillments. Details remain the authoritative
         * schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last
         * descending. Sorting by due_at compares this same value with nulls last ascending and
         * first descending. Ties use fulfillment_id in the same direction.
         * scheduled_start_at.anyOf[1] (Value): string. Derived start of the service schedule or
         * pickup, local delivery, or shipment window. Null when no schedule is booked, including
         * digital fulfillments. Details remain the authoritative schedule inputs. Sorting by
         * scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at
         * compares this same value with nulls last ascending and first descending. Ties use
         * fulfillment_id in the same direction. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". scheduled_start_at.anyOf[2] (Value): null. service_details
         * (Optional): {@link ServiceFulfillmentDetailsPreviousAttributes} or null. Schedule and
         * completion details for a service fulfillment. service_details.anyOf[1] (Value): {@link
         * ServiceFulfillmentDetailsPreviousAttributes}. service_details.anyOf[2] (Value): null.
         * shipment_details (Optional): {@link ShipmentFulfillmentDetailsPreviousAttributes} or
         * null. Shipping schedule and ship time for a shipment fulfillment. Present only on
         * shipment fulfillments with at least one value. shipment_details.anyOf[1] (Value): {@link
         * ShipmentFulfillmentDetailsPreviousAttributes}. shipment_details.anyOf[2] (Value): null.
         * shipments (Optional): Array of {@link ExpandedShipmentSummaryPreviousAttributes} or
         * null. Shipments associated with this fulfillment. shipments.anyOf[1] (Value): Array of
         * {@link ExpandedShipmentSummaryPreviousAttributes}. Shipments associated with this
         * fulfillment. shipments.anyOf[1][] (Value): {@link
         * ExpandedShipmentSummaryPreviousAttributes}. shipments.anyOf[2] (Value): null. status
         * (Optional): string or null. Current fulfillment lifecycle status. Read supported_actions
         * for available transitions. - `pending`: Work has not started and has not been accepted.
         * Approval may be required before work can begin. - `accepted`: The provider accepted the
         * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
         * restore active_hold.previous_status, or use a supported forward action. - `in_progress`:
         * Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready
         * for pickup, handoff, or completion. - `completed`: All fulfillment work completed
         * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
         * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
         * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for
         * its recorded service window. - `preparing`: Warehouse or provider preparation is
         * underway. - `picked`: The assigned items have been picked. - `packed`: The assigned
         * items have been packed. - `dispatched`: The fulfillment left its origin for delivery or
         * handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded
         * reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
         * "dispatched", "no_show". status.anyOf[1] (Value): string. Current fulfillment lifecycle
         * status. Read supported_actions for available transitions. - `pending`: Work has not
         * started and has not been accepted. Approval may be required before work can begin. -
         * `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`:
         * Work is paused. Release the hold to restore active_hold.previous_status, or use a
         * supported forward action. - `in_progress`: Work has started and is not yet ready or
         * complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
         * `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment
         * was intentionally canceled and will not continue. - `failed`: The fulfillment could not
         * be completed. Resolve the recorded reason before creating replacement work. -
         * `scheduled`: The fulfillment is scheduled for its recorded service window. -
         * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
         * items have been picked. - `packed`: The assigned items have been packed. - `dispatched`:
         * The fulfillment left its origin for delivery or handoff. - `no_show`: A service
         * appointment was missed. Read outcome for the recorded reason. Value enum: "pending",
         * "accepted", "on_hold", "in_progress", "ready", "completed", "canceled", "failed",
         * "scheduled", "preparing", "picked", "packed", "dispatched", "no_show". status.anyOf[2]
         * (Value): null. supported_actions (Optional): Array of string or null. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. Always present with merchant credentials. [] enum:
         * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
         * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
         * "schedule", "start". supported_actions.anyOf[1] (Value): Array of string. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. Always present with merchant credentials. [] enum:
         * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
         * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
         * "schedule", "start". supported_actions.anyOf[1][] (Value): string. Value enum: "accept",
         * "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed",
         * "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start".
         * supported_actions.anyOf[2] (Value): null. terminal_at (Optional): string or null. When
         * the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This
         * records the state transition; completed_at records completion evidence supplied for the
         * fulfillment. terminal_at.anyOf[1] (Value): string. When the fulfillment entered a
         * terminal state: completed, canceled, failed, or no_show. This records the state
         * transition; completed_at records completion evidence supplied for the fulfillment.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". terminal_at.anyOf[2] (Value): null.
         * type (Optional): string or null. How the items are delivered: shipment, pickup, local
         * delivery, digital delivery, or service. Value enum: "shipment", "pickup",
         * "local_delivery", "digital", "service", "handover". type.anyOf[1] (Value): string. How
         * the items are delivered: shipment, pickup, local delivery, digital delivery, or service.
         * Value enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover".
         * type.anyOf[2] (Value): null. updated_at (Optional): string or null. When the fulfillment
         * was last updated, in RFC3339 format. updated_at.anyOf[1] (Value): string. When the
         * fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Monotonic fulfillment version for expected_version checks. version.anyOf[1]
         * (Value): integer. Monotonic fulfillment version for expected_version checks. Format:
         * uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Current hold details. Present exactly when status is on_hold. anyOf[1] (Value):
             * {@link FulfillmentHoldPreviousAttributes}. anyOf[2] (Value): null.
             */
            "active_hold"?: ((FulfillmentHoldPreviousAttributes) | (null));
            /**
             * Order charges associated with this fulfillment. anyOf[1] (Value): Array of {@link
             * FulfillmentChargeLinkPreviousAttributes}. Order charges associated with this
             * fulfillment. anyOf[1][] (Value): {@link FulfillmentChargeLinkPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "charges"?: ((Array<FulfillmentChargeLinkPreviousAttributes>) | (null));
            /**
             * When the fulfillment was completed. Mirrors the completion time for its type:
             * delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at
             * for pickup, and service_details.completed_at for service fulfillments. Omitted until
             * a completion time is recorded. anyOf[1] (Value): string. When the fulfillment was
             * completed. Mirrors the completion time for its type: delivered_at for shipment,
             * local delivery, and digital fulfillments, picked_up_at for pickup, and
             * service_details.completed_at for service fulfillments. Omitted until a completion
             * time is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
             * (Value): null.
             */
            "completed_at"?: ((string) | (null));
            /**
             * When the fulfillment was created, in RFC3339 format. anyOf[1] (Value): string. When
             * the fulfillment was created, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Customer receiving this fulfillment, when one is set. anyOf[1] (Value): string.
             * Customer receiving this fulfillment, when one is set. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * Delivery choice group that created this fulfillment. `null` when the merchant
             * created the fulfillment or checkout created it without a delivery quote. Always
             * present with merchant credentials. anyOf[1] (Value): string. Delivery choice group
             * that created this fulfillment. `null` when the merchant created the fulfillment or
             * checkout created it without a delivery quote. Always present with merchant
             * credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". anyOf[2] (Value): null.
             */
            "delivery_choice_group_id"?: ((string) | (null));
            /**
             * Execution leg of the selected delivery option that created this fulfillment. `null`
             * when the merchant created the fulfillment or checkout created it without a delivery
             * quote. Always present with merchant credentials. anyOf[1] (Value): string. Execution
             * leg of the selected delivery option that created this fulfillment. `null` when the
             * merchant created the fulfillment or checkout created it without a delivery quote.
             * Always present with merchant credentials. Example:
             * "dleg_01KEZF7C00VB59BKTRC8W4KR4M". anyOf[2] (Value): null.
             */
            "delivery_execution_leg_id"?: ((string) | (null));
            /**
             * Delivery method chosen for this fulfillment. `null` when the merchant created the
             * fulfillment or checkout created it without a delivery quote. Also `null` when it was
             * created before this field was added. Always present with merchant credentials.
             * anyOf[1] (Value): string. Delivery method chosen for this fulfillment. `null` when
             * the merchant created the fulfillment or checkout created it without a delivery
             * quote. Also `null` when it was created before this field was added. Always present
             * with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2]
             * (Value): null.
             */
            "delivery_method_id"?: ((string) | (null));
            /**
             * Delivery selection that created this fulfillment. `null` when the merchant created
             * the fulfillment or checkout created it without a delivery quote. Always present with
             * merchant credentials. anyOf[1] (Value): string. Delivery selection that created this
             * fulfillment. `null` when the merchant created the fulfillment or checkout created it
             * without a delivery quote. Always present with merchant credentials. Example:
             * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[2] (Value): null.
             */
            "delivery_selection_id"?: ((string) | (null));
            /**
             * Device associated with the fulfillment, when one is recorded. anyOf[1] (Value):
             * string. Device associated with the fulfillment, when one is recorded. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6". anyOf[2] (Value): null.
             */
            "device_id"?: ((string) | (null));
            /**
             * Delivery URL and completion time for a digital fulfillment. anyOf[1] (Value): {@link
             * DigitalFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "digital_details"?: ((DigitalFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * First time this fulfillment reached dispatched. anyOf[1] (Value): string. First time
             * this fulfillment reached dispatched. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "dispatched_at"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Stable identifier of the fulfillment. anyOf[1] (Value): string. Stable identifier of
             * the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". anyOf[2] (Value): null.
             */
            "fulfillment_id"?: ((string) | (null));
            /**
             * Order lines and quantities allocated to this fulfillment. anyOf[1] (Value): Array of
             * {@link FulfillmentLineItemPreviousAttributes}. Order lines and quantities allocated
             * to this fulfillment. anyOf[1][] (Value): {@link
             * FulfillmentLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<FulfillmentLineItemPreviousAttributes>) | (null));
            /**
             * Courier, delivery window, and handoff details for a local delivery fulfillment.
             * anyOf[1] (Value): {@link DeliveryFulfillmentDetailsPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "local_delivery_details"?: ((DeliveryFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Merchant location responsible for this fulfillment. anyOf[1] (Value): string.
             * Merchant location responsible for this fulfillment. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
             */
            "location_id"?: ((string) | (null));
            /**
             * Caller-owned key-value metadata associated with the fulfillment. anyOf[1] (Value):
             * {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * Order whose items this fulfillment delivers. anyOf[1] (Value): string. Order whose
             * items this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2]
             * (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * Human-readable number of the order this fulfillment belongs to. Omitted when the
             * order has no number. anyOf[1] (Value): string. Human-readable number of the order
             * this fulfillment belongs to. Omitted when the order has no number. anyOf[2] (Value):
             * null.
             */
            "order_number"?: ((string) | (null));
            /**
             * Terminal outcome details. Present exactly when status is no_show. anyOf[1] (Value):
             * {@link FulfillmentOutcomePreviousAttributes}. anyOf[2] (Value): null.
             */
            "outcome"?: ((FulfillmentOutcomePreviousAttributes) | (null));
            /**
             * Packages associated with this fulfillment. anyOf[1] (Value): Array of {@link
             * ExpandedPackageSummaryPreviousAttributes}. Packages associated with this
             * fulfillment. anyOf[1][] (Value): {@link ExpandedPackageSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "packages"?: ((Array<ExpandedPackageSummaryPreviousAttributes>) | (null));
            /**
             * First time this fulfillment reached packed. anyOf[1] (Value): string. First time
             * this fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "packed_at"?: ((string) | (null));
            /**
             * First time this fulfillment reached picked. anyOf[1] (Value): string. First time
             * this fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "picked_at"?: ((string) | (null));
            /**
             * Pickup window, pickup mode, and handoff times for a pickup fulfillment. anyOf[1]
             * (Value): {@link PickupFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "pickup_details"?: ((PickupFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. anyOf[1] (Value): {@link FulfillmentRecipientPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "recipient"?: ((FulfillmentRecipientPreviousAttributes) | (null));
            /**
             * Derived start of the service schedule or pickup, local delivery, or shipment window.
             * Null when no schedule is booked, including digital fulfillments. Details remain the
             * authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first
             * ascending and last descending. Sorting by due_at compares this same value with nulls
             * last ascending and first descending. Ties use fulfillment_id in the same direction.
             * anyOf[1] (Value): string. Derived start of the service schedule or pickup, local
             * delivery, or shipment window. Null when no schedule is booked, including digital
             * fulfillments. Details remain the authoritative schedule inputs. Sorting by
             * scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at
             * compares this same value with nulls last ascending and first descending. Ties use
             * fulfillment_id in the same direction. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "scheduled_start_at"?: ((string) | (null));
            /**
             * Schedule and completion details for a service fulfillment. anyOf[1] (Value): {@link
             * ServiceFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "service_details"?: ((ServiceFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
             * fulfillments with at least one value. anyOf[1] (Value): {@link
             * ShipmentFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "shipment_details"?: ((ShipmentFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Shipments associated with this fulfillment. anyOf[1] (Value): Array of {@link
             * ExpandedShipmentSummaryPreviousAttributes}. Shipments associated with this
             * fulfillment. anyOf[1][] (Value): {@link ExpandedShipmentSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "shipments"?: ((Array<ExpandedShipmentSummaryPreviousAttributes>) | (null));
            /**
             * Current fulfillment lifecycle status. Read supported_actions for available
             * transitions. - `pending`: Work has not started and has not been accepted. Approval
             * may be required before work can begin. - `accepted`: The provider accepted the
             * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
             * restore active_hold.previous_status, or use a supported forward action. -
             * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
             * fulfillment is ready for pickup, handoff, or completion. - `completed`: All
             * fulfillment work completed successfully. - `canceled`: The fulfillment was
             * intentionally canceled and will not continue. - `failed`: The fulfillment could not
             * be completed. Resolve the recorded reason before creating replacement work. -
             * `scheduled`: The fulfillment is scheduled for its recorded service window. -
             * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
             * items have been picked. - `packed`: The assigned items have been packed. -
             * `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`:
             * A service appointment was missed. Read outcome for the recorded reason. Value enum:
             * "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
             * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
             * anyOf[1] (Value): string. Current fulfillment lifecycle status. Read
             * supported_actions for available transitions. - `pending`: Work has not started and
             * has not been accepted. Approval may be required before work can begin. - `accepted`:
             * The provider accepted the fulfillment; work has not started. - `on_hold`: Work is
             * paused. Release the hold to restore active_hold.previous_status, or use a supported
             * forward action. - `in_progress`: Work has started and is not yet ready or complete.
             * - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
             * `completed`: All fulfillment work completed successfully. - `canceled`: The
             * fulfillment was intentionally canceled and will not continue. - `failed`: The
             * fulfillment could not be completed. Resolve the recorded reason before creating
             * replacement work. - `scheduled`: The fulfillment is scheduled for its recorded
             * service window. - `preparing`: Warehouse or provider preparation is underway. -
             * `picked`: The assigned items have been picked. - `packed`: The assigned items have
             * been packed. - `dispatched`: The fulfillment left its origin for delivery or
             * handoff. - `no_show`: A service appointment was missed. Read outcome for the
             * recorded reason. Value enum: "pending", "accepted", "on_hold", "in_progress",
             * "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked",
             * "packed", "dispatched", "no_show". anyOf[2] (Value): null.
             */
            "status"?: (("pending"
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
                | (string & {}))
                | (null));
            /**
             * Read-only lifecycle actions accepted now, based on the fulfillment, its order
             * payment status, holds, and shipment progress. Empty when none are available. Values
             * name the verb route with hyphens replaced by underscores. Always present with
             * merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start". anyOf[1] (Value): Array of
             * string. Read-only lifecycle actions accepted now, based on the fulfillment, its
             * order payment status, holds, and shipment progress. Empty when none are available.
             * Values name the verb route with hyphens replaced by underscores. Always present with
             * merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start". anyOf[1][] (Value): string. Value
             * enum: "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
             * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
             * "schedule", "start". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"accept"
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
                | (string & {})>)
                | (null));
            /**
             * When the fulfillment entered a terminal state: completed, canceled, failed, or
             * no_show. This records the state transition; completed_at records completion evidence
             * supplied for the fulfillment. anyOf[1] (Value): string. When the fulfillment entered
             * a terminal state: completed, canceled, failed, or no_show. This records the state
             * transition; completed_at records completion evidence supplied for the fulfillment.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "terminal_at"?: ((string) | (null));
            /**
             * How the items are delivered: shipment, pickup, local delivery, digital delivery, or
             * service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service",
             * "handover". anyOf[1] (Value): string. How the items are delivered: shipment, pickup,
             * local delivery, digital delivery, or service. Value enum: "shipment", "pickup",
             * "local_delivery", "digital", "service", "handover". anyOf[2] (Value): null.
             */
            "type"?: (("shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {}))
                | (null));
            /**
             * When the fulfillment was last updated, in RFC3339 format. anyOf[1] (Value): string.
             * When the fulfillment was last updated, in RFC3339 format. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Monotonic fulfillment version for expected_version checks. anyOf[1] (Value):
             * integer. Monotonic fulfillment version for expected_version checks. Format: uint64.
             * minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "fulfillment.completed". */
    "event_type"?: "fulfillment.completed";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
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
});
/**
 * The `fulfillment.completed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type FulfillmentCompletedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.active_hold (Optional): {@link FulfillmentHold}. Current hold
     * details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason,
     * who placed it, and when it became active. object.charges (Optional): Array of {@link
     * FulfillmentChargeLink}. Order charges associated with this fulfillment. object.charges[]
     * (Value): {@link FulfillmentChargeLink}. Links a fulfillment to an order charge by
     * `order_charge_id`. object.completed_at (Optional): string. When the fulfillment was
     * completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required):
     * string. When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.customer_id (Optional): string. Customer receiving this
     * fulfillment, when one is set. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.delivery_choice_group_id (Optional): string or null. Delivery choice group that
     * created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials. Example:
     * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". object.delivery_execution_leg_id (Optional): string or
     * null. Execution leg of the selected delivery option that created this fulfillment. `null`
     * when the merchant created the fulfillment or checkout created it without a delivery quote.
     * Always present with merchant credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
     * object.delivery_method_id (Optional): string or null. Delivery method chosen for this
     * fulfillment. `null` when the merchant created the fulfillment or checkout created it without
     * a delivery quote. Also `null` when it was created before this field was added. Always
     * present with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_selection_id (Optional): string or null. Delivery selection that created
     * this fulfillment. `null` when the merchant created the fulfillment or checkout created it
     * without a delivery quote. Always present with merchant credentials. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". object.device_id (Optional): string. Device associated
     * with the fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
     * object.digital_details (Optional): {@link DigitalFulfillmentDetails}. Delivery URL and
     * completion time for a digital fulfillment. Details of a digital fulfillment: when it was
     * delivered (`delivered_at`) and its `delivery_url`. object.dispatched_at (Optional): string.
     * First time this fulfillment reached dispatched. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.fulfillment_id (Required): string. Stable identifier of the
     * fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.line_items (Required): Array
     * of {@link FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment.
     * object.line_items[] (Value): {@link FulfillmentLineItem}. An order line item and quantity
     * included in a fulfillment, with the modifiers applied to it. object.local_delivery_details
     * (Optional): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
     * details for a local delivery fulfillment. Details of a local delivery fulfillment: courier,
     * timing window, instructions, and tracking. Some fields are omitted for credentials that
     * don't act for the verified customer. object.location_id (Optional): string. Merchant
     * location responsible for this fulfillment. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned key-value metadata associated
     * with the fulfillment. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.order (Optional): {@link ExpandedOrderSummary} or null. Order summary returned when
     * the order relationship is expanded. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.order_number
     * (Optional): string. Human-readable number of the order this fulfillment belongs to. Omitted
     * when the order has no number. object.outcome (Optional): {@link FulfillmentOutcome}.
     * Terminal outcome details. Present exactly when status is no_show. The terminal outcome
     * recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred.
     * object.packages (Optional): Array of {@link ExpandedPackageSummary}. Packages associated
     * with this fulfillment. object.packages[] (Value): {@link ExpandedPackageSummary}. A
     * package's summary fields, including carrier, tracking, status, and supported actions,
     * returned when the package is expanded. object.packed_at (Optional): string. First time this
     * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.picked_at (Optional): string. First time this fulfillment reached picked. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.pickup_details (Optional): {@link
     * PickupFulfillmentDetails}. Pickup window, pickup mode, and handoff times for a pickup
     * fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and
     * instructions name the store the buyer chose and the delivery method's pickup instructions.
     * The note the buyer left for the store is in recipient.instructions. object.recipient
     * (Optional): {@link FulfillmentRecipient}. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name,
     * email, phone, address, and handling instructions. object.scheduled_start_at (Required):
     * string or null. Derived start of the service schedule or pickup, local delivery, or shipment
     * window. Null when no schedule is booked, including digital fulfillments. Details remain the
     * authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and
     * last descending. Sorting by due_at compares this same value with nulls last ascending and
     * first descending. Ties use fulfillment_id in the same direction. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.service_details (Optional): {@link
     * ServiceFulfillmentDetails}. Schedule and completion details for a service fulfillment.
     * Details of a service fulfillment: the scheduled start and end, timezone, completion time,
     * and notes. object.shipment_details (Optional): {@link ShipmentFulfillmentDetails}. Shipping
     * schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments
     * with at least one value. Details of a shipment fulfillment: the shipping window, timezone,
     * and when the shipment was handed to the carrier. object.shipments (Optional): Array of
     * {@link ExpandedShipmentSummary}. Shipments associated with this fulfillment.
     * object.shipments[] (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields,
     * including direction, status, and package count, returned when the shipment is expanded.
     * object.status (Required): string. Current fulfillment lifecycle status. Read
     * supported_actions for available transitions. - `pending`: Work has not started and has not
     * been accepted. Approval may be required before work can begin. - `accepted`: The provider
     * accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the
     * hold to restore active_hold.previous_status, or use a supported forward action. -
     * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment
     * is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed
     * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
     * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason
     * before creating replacement work. - `scheduled`: The fulfillment is scheduled for its
     * recorded service window. - `preparing`: Warehouse or provider preparation is underway. -
     * `picked`: The assigned items have been picked. - `packed`: The assigned items have been
     * packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. -
     * `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value
     * enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     * object.supported_actions (Optional): Array of string. Read-only lifecycle actions accepted
     * now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty
     * when none are available. Values name the verb route with hyphens replaced by underscores.
     * Always present with merchant credentials. [] enum: "accept", "cancel", "complete",
     * "dispatch", "fail", "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
     * "mark_ready", "release_hold", "schedule", "start". object.supported_actions[] (Value):
     * string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". object.terminal_at (Optional): string. When the
     * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records
     * the state transition; completed_at records completion evidence supplied for the fulfillment.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string. How the
     * items are delivered: shipment, pickup, local delivery, digital delivery, or service. Value
     * enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover".
     * object.updated_at (Required): string. When the fulfillment was last updated, in RFC3339
     * format. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Monotonic fulfillment version for expected_version checks. Format: uint64. minimum:
     * 1. previous_attributes (Optional): object and {@link FulfillmentPreviousAttributes}.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.active_hold (Optional): {@link
     * FulfillmentHoldPreviousAttributes} or null. Current hold details. Present exactly when
     * status is on_hold. previous_attributes.active_hold.anyOf[1] (Value): {@link
     * FulfillmentHoldPreviousAttributes}. previous_attributes.active_hold.anyOf[2] (Value): null.
     * previous_attributes.charges (Optional): Array of {@link
     * FulfillmentChargeLinkPreviousAttributes} or null. Order charges associated with this
     * fulfillment. previous_attributes.charges.anyOf[1] (Value): Array of {@link
     * FulfillmentChargeLinkPreviousAttributes}. Order charges associated with this fulfillment.
     * previous_attributes.charges.anyOf[1][] (Value): {@link
     * FulfillmentChargeLinkPreviousAttributes}. previous_attributes.charges.anyOf[2] (Value):
     * null. previous_attributes.completed_at (Optional): string or null. When the fulfillment was
     * completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. previous_attributes.completed_at.anyOf[1] (Value): string. When the fulfillment
     * was completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.completed_at.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. When the fulfillment was created, in RFC3339 format.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the fulfillment was created,
     * in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.customer_id
     * (Optional): string or null. Customer receiving this fulfillment, when one is set.
     * previous_attributes.customer_id.anyOf[1] (Value): string. Customer receiving this
     * fulfillment, when one is set. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_choice_group_id (Optional): string or null. Delivery choice
     * group that created this fulfillment. `null` when the merchant created the fulfillment or
     * checkout created it without a delivery quote. Always present with merchant credentials.
     * previous_attributes.delivery_choice_group_id.anyOf[1] (Value): string. Delivery choice group
     * that created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials. Example:
     * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". previous_attributes.delivery_choice_group_id.anyOf[2]
     * (Value): null. previous_attributes.delivery_execution_leg_id (Optional): string or null.
     * Execution leg of the selected delivery option that created this fulfillment. `null` when the
     * merchant created the fulfillment or checkout created it without a delivery quote. Always
     * present with merchant credentials. previous_attributes.delivery_execution_leg_id.anyOf[1]
     * (Value): string. Execution leg of the selected delivery option that created this
     * fulfillment. `null` when the merchant created the fulfillment or checkout created it without
     * a delivery quote. Always present with merchant credentials. Example:
     * "dleg_01KEZF7C00VB59BKTRC8W4KR4M". previous_attributes.delivery_execution_leg_id.anyOf[2]
     * (Value): null. previous_attributes.delivery_method_id (Optional): string or null. Delivery
     * method chosen for this fulfillment. `null` when the merchant created the fulfillment or
     * checkout created it without a delivery quote. Also `null` when it was created before this
     * field was added. Always present with merchant credentials.
     * previous_attributes.delivery_method_id.anyOf[1] (Value): string. Delivery method chosen for
     * this fulfillment. `null` when the merchant created the fulfillment or checkout created it
     * without a delivery quote. Also `null` when it was created before this field was added.
     * Always present with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * previous_attributes.delivery_method_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_selection_id (Optional): string or null. Delivery selection
     * that created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials.
     * previous_attributes.delivery_selection_id.anyOf[1] (Value): string. Delivery selection that
     * created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". previous_attributes.delivery_selection_id.anyOf[2]
     * (Value): null. previous_attributes.device_id (Optional): string or null. Device associated
     * with the fulfillment, when one is recorded. previous_attributes.device_id.anyOf[1] (Value):
     * string. Device associated with the fulfillment, when one is recorded. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6". previous_attributes.device_id.anyOf[2] (Value): null.
     * previous_attributes.digital_details (Optional): {@link
     * DigitalFulfillmentDetailsPreviousAttributes} or null. Delivery URL and completion time for a
     * digital fulfillment. previous_attributes.digital_details.anyOf[1] (Value): {@link
     * DigitalFulfillmentDetailsPreviousAttributes}. previous_attributes.digital_details.anyOf[2]
     * (Value): null. previous_attributes.dispatched_at (Optional): string or null. First time this
     * fulfillment reached dispatched. previous_attributes.dispatched_at.anyOf[1] (Value): string.
     * First time this fulfillment reached dispatched. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.dispatched_at.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.fulfillment_id (Optional): string or null. Stable identifier of the
     * fulfillment. previous_attributes.fulfillment_id.anyOf[1] (Value): string. Stable identifier
     * of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     * previous_attributes.fulfillment_id.anyOf[2] (Value): null. previous_attributes.line_items
     * (Optional): Array of {@link FulfillmentLineItemPreviousAttributes} or null. Order lines and
     * quantities allocated to this fulfillment. previous_attributes.line_items.anyOf[1] (Value):
     * Array of {@link FulfillmentLineItemPreviousAttributes}. Order lines and quantities allocated
     * to this fulfillment. previous_attributes.line_items.anyOf[1][] (Value): {@link
     * FulfillmentLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2] (Value):
     * null. previous_attributes.local_delivery_details (Optional): {@link
     * DeliveryFulfillmentDetailsPreviousAttributes} or null. Courier, delivery window, and handoff
     * details for a local delivery fulfillment.
     * previous_attributes.local_delivery_details.anyOf[1] (Value): {@link
     * DeliveryFulfillmentDetailsPreviousAttributes}.
     * previous_attributes.local_delivery_details.anyOf[2] (Value): null.
     * previous_attributes.location_id (Optional): string or null. Merchant location responsible
     * for this fulfillment. previous_attributes.location_id.anyOf[1] (Value): string. Merchant
     * location responsible for this fulfillment. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.location_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned key-value metadata associated with the
     * fulfillment. previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary returned when the
     * order relationship is expanded. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. previous_attributes.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummaryPreviousAttributes}. previous_attributes.order.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. Order whose items this fulfillment
     * delivers. previous_attributes.order_id.anyOf[1] (Value): string. Order whose items this
     * fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * previous_attributes.order_id.anyOf[2] (Value): null. previous_attributes.order_number
     * (Optional): string or null. Human-readable number of the order this fulfillment belongs to.
     * Omitted when the order has no number. previous_attributes.order_number.anyOf[1] (Value):
     * string. Human-readable number of the order this fulfillment belongs to. Omitted when the
     * order has no number. previous_attributes.order_number.anyOf[2] (Value): null.
     * previous_attributes.outcome (Optional): {@link FulfillmentOutcomePreviousAttributes} or
     * null. Terminal outcome details. Present exactly when status is no_show.
     * previous_attributes.outcome.anyOf[1] (Value): {@link FulfillmentOutcomePreviousAttributes}.
     * previous_attributes.outcome.anyOf[2] (Value): null. previous_attributes.packages (Optional):
     * Array of {@link ExpandedPackageSummaryPreviousAttributes} or null. Packages associated with
     * this fulfillment. previous_attributes.packages.anyOf[1] (Value): Array of {@link
     * ExpandedPackageSummaryPreviousAttributes}. Packages associated with this fulfillment.
     * previous_attributes.packages.anyOf[1][] (Value): {@link
     * ExpandedPackageSummaryPreviousAttributes}. previous_attributes.packages.anyOf[2] (Value):
     * null. previous_attributes.packed_at (Optional): string or null. First time this fulfillment
     * reached packed. previous_attributes.packed_at.anyOf[1] (Value): string. First time this
     * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.packed_at.anyOf[2] (Value): null. previous_attributes.picked_at
     * (Optional): string or null. First time this fulfillment reached picked.
     * previous_attributes.picked_at.anyOf[1] (Value): string. First time this fulfillment reached
     * picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.picked_at.anyOf[2] (Value): null. previous_attributes.pickup_details
     * (Optional): {@link PickupFulfillmentDetailsPreviousAttributes} or null. Pickup window,
     * pickup mode, and handoff times for a pickup fulfillment.
     * previous_attributes.pickup_details.anyOf[1] (Value): {@link
     * PickupFulfillmentDetailsPreviousAttributes}. previous_attributes.pickup_details.anyOf[2]
     * (Value): null. previous_attributes.recipient (Optional): {@link
     * FulfillmentRecipientPreviousAttributes} or null. Omitted for a checkout session credential
     * that doesn't act for the customer the buyer verified. previous_attributes.recipient.anyOf[1]
     * (Value): {@link FulfillmentRecipientPreviousAttributes}.
     * previous_attributes.recipient.anyOf[2] (Value): null. previous_attributes.scheduled_start_at
     * (Optional): string or null. Derived start of the service schedule or pickup, local delivery,
     * or shipment window. Null when no schedule is booked, including digital fulfillments. Details
     * remain the authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first
     * ascending and last descending. Sorting by due_at compares this same value with nulls last
     * ascending and first descending. Ties use fulfillment_id in the same direction.
     * previous_attributes.scheduled_start_at.anyOf[1] (Value): string. Derived start of the
     * service schedule or pickup, local delivery, or shipment window. Null when no schedule is
     * booked, including digital fulfillments. Details remain the authoritative schedule inputs.
     * Sorting by scheduled_start_at puts nulls first ascending and last descending. Sorting by
     * due_at compares this same value with nulls last ascending and first descending. Ties use
     * fulfillment_id in the same direction. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.scheduled_start_at.anyOf[2] (Value): null.
     * previous_attributes.service_details (Optional): {@link
     * ServiceFulfillmentDetailsPreviousAttributes} or null. Schedule and completion details for a
     * service fulfillment. previous_attributes.service_details.anyOf[1] (Value): {@link
     * ServiceFulfillmentDetailsPreviousAttributes}. previous_attributes.service_details.anyOf[2]
     * (Value): null. previous_attributes.shipment_details (Optional): {@link
     * ShipmentFulfillmentDetailsPreviousAttributes} or null. Shipping schedule and ship time for a
     * shipment fulfillment. Present only on shipment fulfillments with at least one value.
     * previous_attributes.shipment_details.anyOf[1] (Value): {@link
     * ShipmentFulfillmentDetailsPreviousAttributes}. previous_attributes.shipment_details.anyOf[2]
     * (Value): null. previous_attributes.shipments (Optional): Array of {@link
     * ExpandedShipmentSummaryPreviousAttributes} or null. Shipments associated with this
     * fulfillment. previous_attributes.shipments.anyOf[1] (Value): Array of {@link
     * ExpandedShipmentSummaryPreviousAttributes}. Shipments associated with this fulfillment.
     * previous_attributes.shipments.anyOf[1][] (Value): {@link
     * ExpandedShipmentSummaryPreviousAttributes}. previous_attributes.shipments.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. Current fulfillment lifecycle
     * status. Read supported_actions for available transitions. - `pending`: Work has not started
     * and has not been accepted. Approval may be required before work can begin. - `accepted`: The
     * provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused.
     * Release the hold to restore active_hold.previous_status, or use a supported forward action.
     * - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
     * fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work
     * completed successfully. - `canceled`: The fulfillment was intentionally canceled and will
     * not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
     * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its
     * recorded service window. - `preparing`: Warehouse or provider preparation is underway. -
     * `picked`: The assigned items have been picked. - `packed`: The assigned items have been
     * packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. -
     * `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value
     * enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     * previous_attributes.status.anyOf[1] (Value): string. Current fulfillment lifecycle status.
     * Read supported_actions for available transitions. - `pending`: Work has not started and has
     * not been accepted. Approval may be required before work can begin. - `accepted`: The
     * provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused.
     * Release the hold to restore active_hold.previous_status, or use a supported forward action.
     * - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
     * fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work
     * completed successfully. - `canceled`: The fulfillment was intentionally canceled and will
     * not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
     * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its
     * recorded service window. - `preparing`: Warehouse or provider preparation is underway. -
     * `picked`: The assigned items have been picked. - `packed`: The assigned items have been
     * packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. -
     * `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value
     * enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Read-only lifecycle actions accepted now, based on the
     * fulfillment, its order payment status, holds, and shipment progress. Empty when none are
     * available. Values name the verb route with hyphens replaced by underscores. Always present
     * with merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
     * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". previous_attributes.supported_actions.anyOf[1] (Value):
     * Array of string. Read-only lifecycle actions accepted now, based on the fulfillment, its
     * order payment status, holds, and shipment progress. Empty when none are available. Values
     * name the verb route with hyphens replaced by underscores. Always present with merchant
     * credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". previous_attributes.supported_actions.anyOf[1][]
     * (Value): string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". previous_attributes.supported_actions.anyOf[2] (Value):
     * null. previous_attributes.terminal_at (Optional): string or null. When the fulfillment
     * entered a terminal state: completed, canceled, failed, or no_show. This records the state
     * transition; completed_at records completion evidence supplied for the fulfillment.
     * previous_attributes.terminal_at.anyOf[1] (Value): string. When the fulfillment entered a
     * terminal state: completed, canceled, failed, or no_show. This records the state transition;
     * completed_at records completion evidence supplied for the fulfillment. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.terminal_at.anyOf[2] (Value): null.
     * previous_attributes.type (Optional): string or null. How the items are delivered: shipment,
     * pickup, local delivery, digital delivery, or service. Value enum: "shipment", "pickup",
     * "local_delivery", "digital", "service", "handover". previous_attributes.type.anyOf[1]
     * (Value): string. How the items are delivered: shipment, pickup, local delivery, digital
     * delivery, or service. Value enum: "shipment", "pickup", "local_delivery", "digital",
     * "service", "handover". previous_attributes.type.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When the fulfillment was last
     * updated, in RFC3339 format. previous_attributes.updated_at.anyOf[1] (Value): string. When
     * the fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value): null.
     * previous_attributes.version (Optional): integer or null. Monotonic fulfillment version for
     * expected_version checks. previous_attributes.version.anyOf[1] (Value): integer. Monotonic
     * fulfillment version for expected_version checks. Format: uint64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * active_hold (Optional): {@link FulfillmentHold}. Current hold details. Present exactly
         * when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and
         * when it became active. charges (Optional): Array of {@link FulfillmentChargeLink}. Order
         * charges associated with this fulfillment. charges[] (Value): {@link
         * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
         * completed_at (Optional): string. When the fulfillment was completed. Mirrors the
         * completion time for its type: delivered_at for shipment, local delivery, and digital
         * fulfillments, picked_up_at for pickup, and service_details.completed_at for service
         * fulfillments. Omitted until a completion time is recorded. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When the fulfillment was created,
         * in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". customer_id
         * (Optional): string. Customer receiving this fulfillment, when one is set. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". delivery_choice_group_id (Optional): string or null.
         * Delivery choice group that created this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
         * delivery_execution_leg_id (Optional): string or null. Execution leg of the selected
         * delivery option that created this fulfillment. `null` when the merchant created the
         * fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M". delivery_method_id
         * (Optional): string or null. Delivery method chosen for this fulfillment. `null` when the
         * merchant created the fulfillment or checkout created it without a delivery quote. Also
         * `null` when it was created before this field was added. Always present with merchant
         * credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_id
         * (Optional): string or null. Delivery selection that created this fulfillment. `null`
         * when the merchant created the fulfillment or checkout created it without a delivery
         * quote. Always present with merchant credentials. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". device_id (Optional): string. Device associated with
         * the fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
         * digital_details (Optional): {@link DigitalFulfillmentDetails}. Delivery URL and
         * completion time for a digital fulfillment. Details of a digital fulfillment: when it was
         * delivered (`delivered_at`) and its `delivery_url`. dispatched_at (Optional): string.
         * First time this fulfillment reached dispatched. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". fulfillment_id (Required): string. Stable identifier of the
         * fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". line_items (Required): Array of
         * {@link FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment.
         * line_items[] (Value): {@link FulfillmentLineItem}. An order line item and quantity
         * included in a fulfillment, with the modifiers applied to it. local_delivery_details
         * (Optional): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
         * details for a local delivery fulfillment. Details of a local delivery fulfillment:
         * courier, timing window, instructions, and tracking. Some fields are omitted for
         * credentials that don't act for the verified customer. location_id (Optional): string.
         * Merchant location responsible for this fulfillment. Example:
         * "loc_01KEZF7C00CMHRRYA3MV996JB2". metadata (Optional): {@link MetadataMap}. Caller-owned
         * key-value metadata associated with the fulfillment. Caller-owned key-value data stored
         * on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
         * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before
         * those limits may not satisfy them. order (Optional): {@link ExpandedOrderSummary} or
         * null. Order summary returned when the order relationship is expanded. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. Order whose items this fulfillment delivers. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_number (Optional): string. Human-readable number
         * of the order this fulfillment belongs to. Omitted when the order has no number. outcome
         * (Optional): {@link FulfillmentOutcome}. Terminal outcome details. Present exactly when
         * status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show,
         * with its reason, notes, and when it occurred. packages (Optional): Array of {@link
         * ExpandedPackageSummary}. Packages associated with this fulfillment. packages[] (Value):
         * {@link ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
         * status, and supported actions, returned when the package is expanded. packed_at
         * (Optional): string. First time this fulfillment reached packed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". picked_at (Optional): string. First time this
         * fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * pickup_details (Optional): {@link PickupFulfillmentDetails}. Pickup window, pickup mode,
         * and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout
         * creates, location_name, address, and instructions name the store the buyer chose and the
         * delivery method's pickup instructions. The note the buyer left for the store is in
         * recipient.instructions. recipient (Optional): {@link FulfillmentRecipient}. Omitted for
         * a checkout session credential that doesn't act for the customer the buyer verified. The
         * recipient of a fulfillment, with name, email, phone, address, and handling instructions.
         * scheduled_start_at (Required): string or null. Derived start of the service schedule or
         * pickup, local delivery, or shipment window. Null when no schedule is booked, including
         * digital fulfillments. Details remain the authoritative schedule inputs. Sorting by
         * scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at
         * compares this same value with nulls last ascending and first descending. Ties use
         * fulfillment_id in the same direction. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_details (Optional): {@link ServiceFulfillmentDetails}.
         * Schedule and completion details for a service fulfillment. Details of a service
         * fulfillment: the scheduled start and end, timezone, completion time, and notes.
         * shipment_details (Optional): {@link ShipmentFulfillmentDetails}. Shipping schedule and
         * ship time for a shipment fulfillment. Present only on shipment fulfillments with at
         * least one value. Details of a shipment fulfillment: the shipping window, timezone, and
         * when the shipment was handed to the carrier. shipments (Optional): Array of {@link
         * ExpandedShipmentSummary}. Shipments associated with this fulfillment. shipments[]
         * (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields, including
         * direction, status, and package count, returned when the shipment is expanded. status
         * (Required): string. Current fulfillment lifecycle status. Read supported_actions for
         * available transitions. - `pending`: Work has not started and has not been accepted.
         * Approval may be required before work can begin. - `accepted`: The provider accepted the
         * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
         * restore active_hold.previous_status, or use a supported forward action. - `in_progress`:
         * Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready
         * for pickup, handoff, or completion. - `completed`: All fulfillment work completed
         * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
         * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
         * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for
         * its recorded service window. - `preparing`: Warehouse or provider preparation is
         * underway. - `picked`: The assigned items have been picked. - `packed`: The assigned
         * items have been packed. - `dispatched`: The fulfillment left its origin for delivery or
         * handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded
         * reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
         * "dispatched", "no_show". supported_actions (Optional): Array of string. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. Always present with merchant credentials. [] enum:
         * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
         * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
         * "schedule", "start". supported_actions[] (Value): string. Value enum: "accept",
         * "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed",
         * "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start".
         * terminal_at (Optional): string. When the fulfillment entered a terminal state:
         * completed, canceled, failed, or no_show. This records the state transition; completed_at
         * records completion evidence supplied for the fulfillment. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". type (Required): string. How the items are delivered: shipment,
         * pickup, local delivery, digital delivery, or service. Value enum: "shipment", "pickup",
         * "local_delivery", "digital", "service", "handover". updated_at (Required): string. When
         * the fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Monotonic fulfillment version for
         * expected_version checks. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current hold details. Present exactly when status is on_hold. A hold on a
             * fulfillment, with its reason, who placed it, and when it became active.
             */
            "active_hold"?: FulfillmentHold;
            /**
             * Order charges associated with this fulfillment. [] (Value): {@link
             * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
             */
            "charges"?: Array<FulfillmentChargeLink>;
            /**
             * When the fulfillment was completed. Mirrors the completion time for its type:
             * delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at
             * for pickup, and service_details.completed_at for service fulfillments. Omitted until
             * a completion time is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * Delivery choice group that created this fulfillment. `null` when the merchant
             * created the fulfillment or checkout created it without a delivery quote. Always
             * present with merchant credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
             */
            "delivery_choice_group_id"?: string | null;
            /**
             * Execution leg of the selected delivery option that created this fulfillment. `null`
             * when the merchant created the fulfillment or checkout created it without a delivery
             * quote. Always present with merchant credentials. Example:
             * "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
             */
            "delivery_execution_leg_id"?: string | null;
            /**
             * Delivery method chosen for this fulfillment. `null` when the merchant created the
             * fulfillment or checkout created it without a delivery quote. Also `null` when it was
             * created before this field was added. Always present with merchant credentials.
             * Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_id"?: string | null;
            /**
             * Delivery selection that created this fulfillment. `null` when the merchant created
             * the fulfillment or checkout created it without a delivery quote. Always present with
             * merchant credentials. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
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
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Stable identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
            "fulfillment_id": string;
            /**
             * Order lines and quantities allocated to this fulfillment. [] (Value): {@link
             * FulfillmentLineItem}. An order line item and quantity included in a fulfillment,
             * with the modifiers applied to it.
             */
            "line_items": Array<FulfillmentLineItem>;
            /**
             * Courier, delivery window, and handoff details for a local delivery fulfillment.
             * Details of a local delivery fulfillment: courier, timing window, instructions, and
             * tracking. Some fields are omitted for credentials that don't act for the verified
             * customer.
             */
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            /**
             * Merchant location responsible for this fulfillment. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id"?: string;
            /**
             * Caller-owned key-value metadata associated with the fulfillment. Caller-owned
             * key-value data stored on a resource. Keys starting with flint_ are reserved for
             * Flint and are not returned. Writes follow the limits on MetadataInput and
             * MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order whose items this fulfillment delivers. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * Human-readable number of the order this fulfillment belongs to. Omitted when the
             * order has no number.
             */
            "order_number"?: string;
            /**
             * Terminal outcome details. Present exactly when status is no_show. The terminal
             * outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and
             * when it occurred.
             */
            "outcome"?: FulfillmentOutcome;
            /**
             * Packages associated with this fulfillment. [] (Value): {@link
             * ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
             * status, and supported actions, returned when the package is expanded.
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
             * Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup
             * details. For a pickup that checkout creates, location_name, address, and
             * instructions name the store the buyer chose and the delivery method's pickup
             * instructions. The note the buyer left for the store is in recipient.instructions.
             */
            "pickup_details"?: PickupFulfillmentDetails;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The recipient of a fulfillment, with name, email, phone, address,
             * and handling instructions.
             */
            "recipient"?: FulfillmentRecipient;
            /**
             * Derived start of the service schedule or pickup, local delivery, or shipment window.
             * Null when no schedule is booked, including digital fulfillments. Details remain the
             * authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first
             * ascending and last descending. Sorting by due_at compares this same value with nulls
             * last ascending and first descending. Ties use fulfillment_id in the same direction.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_start_at": string | null;
            /**
             * Schedule and completion details for a service fulfillment. Details of a service
             * fulfillment: the scheduled start and end, timezone, completion time, and notes.
             */
            "service_details"?: ServiceFulfillmentDetails;
            /**
             * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
             * fulfillments with at least one value. Details of a shipment fulfillment: the
             * shipping window, timezone, and when the shipment was handed to the carrier.
             */
            "shipment_details"?: ShipmentFulfillmentDetails;
            /**
             * Shipments associated with this fulfillment. [] (Value): {@link
             * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status,
             * and package count, returned when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Current fulfillment lifecycle status. Read supported_actions for available
             * transitions. - `pending`: Work has not started and has not been accepted. Approval
             * may be required before work can begin. - `accepted`: The provider accepted the
             * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
             * restore active_hold.previous_status, or use a supported forward action. -
             * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
             * fulfillment is ready for pickup, handoff, or completion. - `completed`: All
             * fulfillment work completed successfully. - `canceled`: The fulfillment was
             * intentionally canceled and will not continue. - `failed`: The fulfillment could not
             * be completed. Resolve the recorded reason before creating replacement work. -
             * `scheduled`: The fulfillment is scheduled for its recorded service window. -
             * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
             * items have been picked. - `packed`: The assigned items have been packed. -
             * `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`:
             * A service appointment was missed. Read outcome for the recorded reason. Value enum:
             * "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
             * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
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
             * Read-only lifecycle actions accepted now, based on the fulfillment, its order
             * payment status, holds, and shipment progress. Empty when none are available. Values
             * name the verb route with hyphens replaced by underscores. Always present with
             * merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start". [] (Value): string. Value enum:
             * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
             * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
             * "schedule", "start".
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
             * When the fulfillment entered a terminal state: completed, canceled, failed, or
             * no_show. This records the state transition; completed_at records completion evidence
             * supplied for the fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "terminal_at"?: string;
            /**
             * How the items are delivered: shipment, pickup, local delivery, digital delivery, or
             * service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service",
             * "handover".
             */
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {});
            /**
             * When the fulfillment was last updated, in RFC3339 format. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum:
             * 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. active_hold (Optional): {@link
         * FulfillmentHoldPreviousAttributes} or null. Current hold details. Present exactly when
         * status is on_hold. active_hold.anyOf[1] (Value): {@link
         * FulfillmentHoldPreviousAttributes}. active_hold.anyOf[2] (Value): null. charges
         * (Optional): Array of {@link FulfillmentChargeLinkPreviousAttributes} or null. Order
         * charges associated with this fulfillment. charges.anyOf[1] (Value): Array of {@link
         * FulfillmentChargeLinkPreviousAttributes}. Order charges associated with this
         * fulfillment. charges.anyOf[1][] (Value): {@link
         * FulfillmentChargeLinkPreviousAttributes}. charges.anyOf[2] (Value): null. completed_at
         * (Optional): string or null. When the fulfillment was completed. Mirrors the completion
         * time for its type: delivered_at for shipment, local delivery, and digital fulfillments,
         * picked_up_at for pickup, and service_details.completed_at for service fulfillments.
         * Omitted until a completion time is recorded. completed_at.anyOf[1] (Value): string. When
         * the fulfillment was completed. Mirrors the completion time for its type: delivered_at
         * for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and
         * service_details.completed_at for service fulfillments. Omitted until a completion time
         * is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". completed_at.anyOf[2]
         * (Value): null. created_at (Optional): string or null. When the fulfillment was created,
         * in RFC3339 format. created_at.anyOf[1] (Value): string. When the fulfillment was
         * created, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. customer_id (Optional): string or null. Customer
         * receiving this fulfillment, when one is set. customer_id.anyOf[1] (Value): string.
         * Customer receiving this fulfillment, when one is set. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null.
         * delivery_choice_group_id (Optional): string or null. Delivery choice group that created
         * this fulfillment. `null` when the merchant created the fulfillment or checkout created
         * it without a delivery quote. Always present with merchant credentials.
         * delivery_choice_group_id.anyOf[1] (Value): string. Delivery choice group that created
         * this fulfillment. `null` when the merchant created the fulfillment or checkout created
         * it without a delivery quote. Always present with merchant credentials. Example:
         * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". delivery_choice_group_id.anyOf[2] (Value): null.
         * delivery_execution_leg_id (Optional): string or null. Execution leg of the selected
         * delivery option that created this fulfillment. `null` when the merchant created the
         * fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. delivery_execution_leg_id.anyOf[1] (Value): string. Execution leg
         * of the selected delivery option that created this fulfillment. `null` when the merchant
         * created the fulfillment or checkout created it without a delivery quote. Always present
         * with merchant credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
         * delivery_execution_leg_id.anyOf[2] (Value): null. delivery_method_id (Optional): string
         * or null. Delivery method chosen for this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Also `null` when it was
         * created before this field was added. Always present with merchant credentials.
         * delivery_method_id.anyOf[1] (Value): string. Delivery method chosen for this
         * fulfillment. `null` when the merchant created the fulfillment or checkout created it
         * without a delivery quote. Also `null` when it was created before this field was added.
         * Always present with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
         * delivery_method_id.anyOf[2] (Value): null. delivery_selection_id (Optional): string or
         * null. Delivery selection that created this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. delivery_selection_id.anyOf[1] (Value): string. Delivery selection
         * that created this fulfillment. `null` when the merchant created the fulfillment or
         * checkout created it without a delivery quote. Always present with merchant credentials.
         * Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". delivery_selection_id.anyOf[2] (Value):
         * null. device_id (Optional): string or null. Device associated with the fulfillment, when
         * one is recorded. device_id.anyOf[1] (Value): string. Device associated with the
         * fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
         * device_id.anyOf[2] (Value): null. digital_details (Optional): {@link
         * DigitalFulfillmentDetailsPreviousAttributes} or null. Delivery URL and completion time
         * for a digital fulfillment. digital_details.anyOf[1] (Value): {@link
         * DigitalFulfillmentDetailsPreviousAttributes}. digital_details.anyOf[2] (Value): null.
         * dispatched_at (Optional): string or null. First time this fulfillment reached
         * dispatched. dispatched_at.anyOf[1] (Value): string. First time this fulfillment reached
         * dispatched. Format: date-time. Example: "2026-08-02T16:00:00Z". dispatched_at.anyOf[2]
         * (Value): null. external_reference_id (Optional): string or null. Caller-owned identifier
         * for this resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. fulfillment_id
         * (Optional): string or null. Stable identifier of the fulfillment.
         * fulfillment_id.anyOf[1] (Value): string. Stable identifier of the fulfillment. Example:
         * "ful_01KEZF7C00F24WVSTTWR1FQX5T". fulfillment_id.anyOf[2] (Value): null. line_items
         * (Optional): Array of {@link FulfillmentLineItemPreviousAttributes} or null. Order lines
         * and quantities allocated to this fulfillment. line_items.anyOf[1] (Value): Array of
         * {@link FulfillmentLineItemPreviousAttributes}. Order lines and quantities allocated to
         * this fulfillment. line_items.anyOf[1][] (Value): {@link
         * FulfillmentLineItemPreviousAttributes}. line_items.anyOf[2] (Value): null.
         * local_delivery_details (Optional): {@link DeliveryFulfillmentDetailsPreviousAttributes}
         * or null. Courier, delivery window, and handoff details for a local delivery fulfillment.
         * local_delivery_details.anyOf[1] (Value): {@link
         * DeliveryFulfillmentDetailsPreviousAttributes}. local_delivery_details.anyOf[2] (Value):
         * null. location_id (Optional): string or null. Merchant location responsible for this
         * fulfillment. location_id.anyOf[1] (Value): string. Merchant location responsible for
         * this fulfillment. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". location_id.anyOf[2]
         * (Value): null. metadata (Optional): {@link MetadataMap} or null. Caller-owned key-value
         * metadata associated with the fulfillment. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. order (Optional): {@link
         * ExpandedOrderSummaryPreviousAttributes} or null. Order summary returned when the order
         * relationship is expanded. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. Order whose items this fulfillment delivers.
         * order_id.anyOf[1] (Value): string. Order whose items this fulfillment delivers. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. order_number
         * (Optional): string or null. Human-readable number of the order this fulfillment belongs
         * to. Omitted when the order has no number. order_number.anyOf[1] (Value): string.
         * Human-readable number of the order this fulfillment belongs to. Omitted when the order
         * has no number. order_number.anyOf[2] (Value): null. outcome (Optional): {@link
         * FulfillmentOutcomePreviousAttributes} or null. Terminal outcome details. Present exactly
         * when status is no_show. outcome.anyOf[1] (Value): {@link
         * FulfillmentOutcomePreviousAttributes}. outcome.anyOf[2] (Value): null. packages
         * (Optional): Array of {@link ExpandedPackageSummaryPreviousAttributes} or null. Packages
         * associated with this fulfillment. packages.anyOf[1] (Value): Array of {@link
         * ExpandedPackageSummaryPreviousAttributes}. Packages associated with this fulfillment.
         * packages.anyOf[1][] (Value): {@link ExpandedPackageSummaryPreviousAttributes}.
         * packages.anyOf[2] (Value): null. packed_at (Optional): string or null. First time this
         * fulfillment reached packed. packed_at.anyOf[1] (Value): string. First time this
         * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * packed_at.anyOf[2] (Value): null. picked_at (Optional): string or null. First time this
         * fulfillment reached picked. picked_at.anyOf[1] (Value): string. First time this
         * fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * picked_at.anyOf[2] (Value): null. pickup_details (Optional): {@link
         * PickupFulfillmentDetailsPreviousAttributes} or null. Pickup window, pickup mode, and
         * handoff times for a pickup fulfillment. pickup_details.anyOf[1] (Value): {@link
         * PickupFulfillmentDetailsPreviousAttributes}. pickup_details.anyOf[2] (Value): null.
         * recipient (Optional): {@link FulfillmentRecipientPreviousAttributes} or null. Omitted
         * for a checkout session credential that doesn't act for the customer the buyer verified.
         * recipient.anyOf[1] (Value): {@link FulfillmentRecipientPreviousAttributes}.
         * recipient.anyOf[2] (Value): null. scheduled_start_at (Optional): string or null. Derived
         * start of the service schedule or pickup, local delivery, or shipment window. Null when
         * no schedule is booked, including digital fulfillments. Details remain the authoritative
         * schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last
         * descending. Sorting by due_at compares this same value with nulls last ascending and
         * first descending. Ties use fulfillment_id in the same direction.
         * scheduled_start_at.anyOf[1] (Value): string. Derived start of the service schedule or
         * pickup, local delivery, or shipment window. Null when no schedule is booked, including
         * digital fulfillments. Details remain the authoritative schedule inputs. Sorting by
         * scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at
         * compares this same value with nulls last ascending and first descending. Ties use
         * fulfillment_id in the same direction. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". scheduled_start_at.anyOf[2] (Value): null. service_details
         * (Optional): {@link ServiceFulfillmentDetailsPreviousAttributes} or null. Schedule and
         * completion details for a service fulfillment. service_details.anyOf[1] (Value): {@link
         * ServiceFulfillmentDetailsPreviousAttributes}. service_details.anyOf[2] (Value): null.
         * shipment_details (Optional): {@link ShipmentFulfillmentDetailsPreviousAttributes} or
         * null. Shipping schedule and ship time for a shipment fulfillment. Present only on
         * shipment fulfillments with at least one value. shipment_details.anyOf[1] (Value): {@link
         * ShipmentFulfillmentDetailsPreviousAttributes}. shipment_details.anyOf[2] (Value): null.
         * shipments (Optional): Array of {@link ExpandedShipmentSummaryPreviousAttributes} or
         * null. Shipments associated with this fulfillment. shipments.anyOf[1] (Value): Array of
         * {@link ExpandedShipmentSummaryPreviousAttributes}. Shipments associated with this
         * fulfillment. shipments.anyOf[1][] (Value): {@link
         * ExpandedShipmentSummaryPreviousAttributes}. shipments.anyOf[2] (Value): null. status
         * (Optional): string or null. Current fulfillment lifecycle status. Read supported_actions
         * for available transitions. - `pending`: Work has not started and has not been accepted.
         * Approval may be required before work can begin. - `accepted`: The provider accepted the
         * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
         * restore active_hold.previous_status, or use a supported forward action. - `in_progress`:
         * Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready
         * for pickup, handoff, or completion. - `completed`: All fulfillment work completed
         * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
         * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
         * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for
         * its recorded service window. - `preparing`: Warehouse or provider preparation is
         * underway. - `picked`: The assigned items have been picked. - `packed`: The assigned
         * items have been packed. - `dispatched`: The fulfillment left its origin for delivery or
         * handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded
         * reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
         * "dispatched", "no_show". status.anyOf[1] (Value): string. Current fulfillment lifecycle
         * status. Read supported_actions for available transitions. - `pending`: Work has not
         * started and has not been accepted. Approval may be required before work can begin. -
         * `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`:
         * Work is paused. Release the hold to restore active_hold.previous_status, or use a
         * supported forward action. - `in_progress`: Work has started and is not yet ready or
         * complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
         * `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment
         * was intentionally canceled and will not continue. - `failed`: The fulfillment could not
         * be completed. Resolve the recorded reason before creating replacement work. -
         * `scheduled`: The fulfillment is scheduled for its recorded service window. -
         * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
         * items have been picked. - `packed`: The assigned items have been packed. - `dispatched`:
         * The fulfillment left its origin for delivery or handoff. - `no_show`: A service
         * appointment was missed. Read outcome for the recorded reason. Value enum: "pending",
         * "accepted", "on_hold", "in_progress", "ready", "completed", "canceled", "failed",
         * "scheduled", "preparing", "picked", "packed", "dispatched", "no_show". status.anyOf[2]
         * (Value): null. supported_actions (Optional): Array of string or null. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. Always present with merchant credentials. [] enum:
         * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
         * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
         * "schedule", "start". supported_actions.anyOf[1] (Value): Array of string. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. Always present with merchant credentials. [] enum:
         * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
         * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
         * "schedule", "start". supported_actions.anyOf[1][] (Value): string. Value enum: "accept",
         * "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed",
         * "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start".
         * supported_actions.anyOf[2] (Value): null. terminal_at (Optional): string or null. When
         * the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This
         * records the state transition; completed_at records completion evidence supplied for the
         * fulfillment. terminal_at.anyOf[1] (Value): string. When the fulfillment entered a
         * terminal state: completed, canceled, failed, or no_show. This records the state
         * transition; completed_at records completion evidence supplied for the fulfillment.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". terminal_at.anyOf[2] (Value): null.
         * type (Optional): string or null. How the items are delivered: shipment, pickup, local
         * delivery, digital delivery, or service. Value enum: "shipment", "pickup",
         * "local_delivery", "digital", "service", "handover". type.anyOf[1] (Value): string. How
         * the items are delivered: shipment, pickup, local delivery, digital delivery, or service.
         * Value enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover".
         * type.anyOf[2] (Value): null. updated_at (Optional): string or null. When the fulfillment
         * was last updated, in RFC3339 format. updated_at.anyOf[1] (Value): string. When the
         * fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Monotonic fulfillment version for expected_version checks. version.anyOf[1]
         * (Value): integer. Monotonic fulfillment version for expected_version checks. Format:
         * uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Current hold details. Present exactly when status is on_hold. anyOf[1] (Value):
             * {@link FulfillmentHoldPreviousAttributes}. anyOf[2] (Value): null.
             */
            "active_hold"?: ((FulfillmentHoldPreviousAttributes) | (null));
            /**
             * Order charges associated with this fulfillment. anyOf[1] (Value): Array of {@link
             * FulfillmentChargeLinkPreviousAttributes}. Order charges associated with this
             * fulfillment. anyOf[1][] (Value): {@link FulfillmentChargeLinkPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "charges"?: ((Array<FulfillmentChargeLinkPreviousAttributes>) | (null));
            /**
             * When the fulfillment was completed. Mirrors the completion time for its type:
             * delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at
             * for pickup, and service_details.completed_at for service fulfillments. Omitted until
             * a completion time is recorded. anyOf[1] (Value): string. When the fulfillment was
             * completed. Mirrors the completion time for its type: delivered_at for shipment,
             * local delivery, and digital fulfillments, picked_up_at for pickup, and
             * service_details.completed_at for service fulfillments. Omitted until a completion
             * time is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
             * (Value): null.
             */
            "completed_at"?: ((string) | (null));
            /**
             * When the fulfillment was created, in RFC3339 format. anyOf[1] (Value): string. When
             * the fulfillment was created, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Customer receiving this fulfillment, when one is set. anyOf[1] (Value): string.
             * Customer receiving this fulfillment, when one is set. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * Delivery choice group that created this fulfillment. `null` when the merchant
             * created the fulfillment or checkout created it without a delivery quote. Always
             * present with merchant credentials. anyOf[1] (Value): string. Delivery choice group
             * that created this fulfillment. `null` when the merchant created the fulfillment or
             * checkout created it without a delivery quote. Always present with merchant
             * credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". anyOf[2] (Value): null.
             */
            "delivery_choice_group_id"?: ((string) | (null));
            /**
             * Execution leg of the selected delivery option that created this fulfillment. `null`
             * when the merchant created the fulfillment or checkout created it without a delivery
             * quote. Always present with merchant credentials. anyOf[1] (Value): string. Execution
             * leg of the selected delivery option that created this fulfillment. `null` when the
             * merchant created the fulfillment or checkout created it without a delivery quote.
             * Always present with merchant credentials. Example:
             * "dleg_01KEZF7C00VB59BKTRC8W4KR4M". anyOf[2] (Value): null.
             */
            "delivery_execution_leg_id"?: ((string) | (null));
            /**
             * Delivery method chosen for this fulfillment. `null` when the merchant created the
             * fulfillment or checkout created it without a delivery quote. Also `null` when it was
             * created before this field was added. Always present with merchant credentials.
             * anyOf[1] (Value): string. Delivery method chosen for this fulfillment. `null` when
             * the merchant created the fulfillment or checkout created it without a delivery
             * quote. Also `null` when it was created before this field was added. Always present
             * with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2]
             * (Value): null.
             */
            "delivery_method_id"?: ((string) | (null));
            /**
             * Delivery selection that created this fulfillment. `null` when the merchant created
             * the fulfillment or checkout created it without a delivery quote. Always present with
             * merchant credentials. anyOf[1] (Value): string. Delivery selection that created this
             * fulfillment. `null` when the merchant created the fulfillment or checkout created it
             * without a delivery quote. Always present with merchant credentials. Example:
             * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[2] (Value): null.
             */
            "delivery_selection_id"?: ((string) | (null));
            /**
             * Device associated with the fulfillment, when one is recorded. anyOf[1] (Value):
             * string. Device associated with the fulfillment, when one is recorded. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6". anyOf[2] (Value): null.
             */
            "device_id"?: ((string) | (null));
            /**
             * Delivery URL and completion time for a digital fulfillment. anyOf[1] (Value): {@link
             * DigitalFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "digital_details"?: ((DigitalFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * First time this fulfillment reached dispatched. anyOf[1] (Value): string. First time
             * this fulfillment reached dispatched. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "dispatched_at"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Stable identifier of the fulfillment. anyOf[1] (Value): string. Stable identifier of
             * the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". anyOf[2] (Value): null.
             */
            "fulfillment_id"?: ((string) | (null));
            /**
             * Order lines and quantities allocated to this fulfillment. anyOf[1] (Value): Array of
             * {@link FulfillmentLineItemPreviousAttributes}. Order lines and quantities allocated
             * to this fulfillment. anyOf[1][] (Value): {@link
             * FulfillmentLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<FulfillmentLineItemPreviousAttributes>) | (null));
            /**
             * Courier, delivery window, and handoff details for a local delivery fulfillment.
             * anyOf[1] (Value): {@link DeliveryFulfillmentDetailsPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "local_delivery_details"?: ((DeliveryFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Merchant location responsible for this fulfillment. anyOf[1] (Value): string.
             * Merchant location responsible for this fulfillment. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
             */
            "location_id"?: ((string) | (null));
            /**
             * Caller-owned key-value metadata associated with the fulfillment. anyOf[1] (Value):
             * {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * Order whose items this fulfillment delivers. anyOf[1] (Value): string. Order whose
             * items this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2]
             * (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * Human-readable number of the order this fulfillment belongs to. Omitted when the
             * order has no number. anyOf[1] (Value): string. Human-readable number of the order
             * this fulfillment belongs to. Omitted when the order has no number. anyOf[2] (Value):
             * null.
             */
            "order_number"?: ((string) | (null));
            /**
             * Terminal outcome details. Present exactly when status is no_show. anyOf[1] (Value):
             * {@link FulfillmentOutcomePreviousAttributes}. anyOf[2] (Value): null.
             */
            "outcome"?: ((FulfillmentOutcomePreviousAttributes) | (null));
            /**
             * Packages associated with this fulfillment. anyOf[1] (Value): Array of {@link
             * ExpandedPackageSummaryPreviousAttributes}. Packages associated with this
             * fulfillment. anyOf[1][] (Value): {@link ExpandedPackageSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "packages"?: ((Array<ExpandedPackageSummaryPreviousAttributes>) | (null));
            /**
             * First time this fulfillment reached packed. anyOf[1] (Value): string. First time
             * this fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "packed_at"?: ((string) | (null));
            /**
             * First time this fulfillment reached picked. anyOf[1] (Value): string. First time
             * this fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "picked_at"?: ((string) | (null));
            /**
             * Pickup window, pickup mode, and handoff times for a pickup fulfillment. anyOf[1]
             * (Value): {@link PickupFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "pickup_details"?: ((PickupFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. anyOf[1] (Value): {@link FulfillmentRecipientPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "recipient"?: ((FulfillmentRecipientPreviousAttributes) | (null));
            /**
             * Derived start of the service schedule or pickup, local delivery, or shipment window.
             * Null when no schedule is booked, including digital fulfillments. Details remain the
             * authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first
             * ascending and last descending. Sorting by due_at compares this same value with nulls
             * last ascending and first descending. Ties use fulfillment_id in the same direction.
             * anyOf[1] (Value): string. Derived start of the service schedule or pickup, local
             * delivery, or shipment window. Null when no schedule is booked, including digital
             * fulfillments. Details remain the authoritative schedule inputs. Sorting by
             * scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at
             * compares this same value with nulls last ascending and first descending. Ties use
             * fulfillment_id in the same direction. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "scheduled_start_at"?: ((string) | (null));
            /**
             * Schedule and completion details for a service fulfillment. anyOf[1] (Value): {@link
             * ServiceFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "service_details"?: ((ServiceFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
             * fulfillments with at least one value. anyOf[1] (Value): {@link
             * ShipmentFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "shipment_details"?: ((ShipmentFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Shipments associated with this fulfillment. anyOf[1] (Value): Array of {@link
             * ExpandedShipmentSummaryPreviousAttributes}. Shipments associated with this
             * fulfillment. anyOf[1][] (Value): {@link ExpandedShipmentSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "shipments"?: ((Array<ExpandedShipmentSummaryPreviousAttributes>) | (null));
            /**
             * Current fulfillment lifecycle status. Read supported_actions for available
             * transitions. - `pending`: Work has not started and has not been accepted. Approval
             * may be required before work can begin. - `accepted`: The provider accepted the
             * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
             * restore active_hold.previous_status, or use a supported forward action. -
             * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
             * fulfillment is ready for pickup, handoff, or completion. - `completed`: All
             * fulfillment work completed successfully. - `canceled`: The fulfillment was
             * intentionally canceled and will not continue. - `failed`: The fulfillment could not
             * be completed. Resolve the recorded reason before creating replacement work. -
             * `scheduled`: The fulfillment is scheduled for its recorded service window. -
             * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
             * items have been picked. - `packed`: The assigned items have been packed. -
             * `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`:
             * A service appointment was missed. Read outcome for the recorded reason. Value enum:
             * "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
             * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
             * anyOf[1] (Value): string. Current fulfillment lifecycle status. Read
             * supported_actions for available transitions. - `pending`: Work has not started and
             * has not been accepted. Approval may be required before work can begin. - `accepted`:
             * The provider accepted the fulfillment; work has not started. - `on_hold`: Work is
             * paused. Release the hold to restore active_hold.previous_status, or use a supported
             * forward action. - `in_progress`: Work has started and is not yet ready or complete.
             * - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
             * `completed`: All fulfillment work completed successfully. - `canceled`: The
             * fulfillment was intentionally canceled and will not continue. - `failed`: The
             * fulfillment could not be completed. Resolve the recorded reason before creating
             * replacement work. - `scheduled`: The fulfillment is scheduled for its recorded
             * service window. - `preparing`: Warehouse or provider preparation is underway. -
             * `picked`: The assigned items have been picked. - `packed`: The assigned items have
             * been packed. - `dispatched`: The fulfillment left its origin for delivery or
             * handoff. - `no_show`: A service appointment was missed. Read outcome for the
             * recorded reason. Value enum: "pending", "accepted", "on_hold", "in_progress",
             * "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked",
             * "packed", "dispatched", "no_show". anyOf[2] (Value): null.
             */
            "status"?: (("pending"
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
                | (string & {}))
                | (null));
            /**
             * Read-only lifecycle actions accepted now, based on the fulfillment, its order
             * payment status, holds, and shipment progress. Empty when none are available. Values
             * name the verb route with hyphens replaced by underscores. Always present with
             * merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start". anyOf[1] (Value): Array of
             * string. Read-only lifecycle actions accepted now, based on the fulfillment, its
             * order payment status, holds, and shipment progress. Empty when none are available.
             * Values name the verb route with hyphens replaced by underscores. Always present with
             * merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start". anyOf[1][] (Value): string. Value
             * enum: "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
             * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
             * "schedule", "start". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"accept"
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
                | (string & {})>)
                | (null));
            /**
             * When the fulfillment entered a terminal state: completed, canceled, failed, or
             * no_show. This records the state transition; completed_at records completion evidence
             * supplied for the fulfillment. anyOf[1] (Value): string. When the fulfillment entered
             * a terminal state: completed, canceled, failed, or no_show. This records the state
             * transition; completed_at records completion evidence supplied for the fulfillment.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "terminal_at"?: ((string) | (null));
            /**
             * How the items are delivered: shipment, pickup, local delivery, digital delivery, or
             * service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service",
             * "handover". anyOf[1] (Value): string. How the items are delivered: shipment, pickup,
             * local delivery, digital delivery, or service. Value enum: "shipment", "pickup",
             * "local_delivery", "digital", "service", "handover". anyOf[2] (Value): null.
             */
            "type"?: (("shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {}))
                | (null));
            /**
             * When the fulfillment was last updated, in RFC3339 format. anyOf[1] (Value): string.
             * When the fulfillment was last updated, in RFC3339 format. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Monotonic fulfillment version for expected_version checks. anyOf[1] (Value):
             * integer. Monotonic fulfillment version for expected_version checks. Format: uint64.
             * minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "fulfillment.completed". */
    "event_type"?: "fulfillment.completed";
});
export type FulfillmentCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_hold"?: FulfillmentHold;
            "charges"?: Array<FulfillmentChargeLink>;
            "completed_at"?: string;
            "created_at": string;
            "customer_id"?: string;
            "delivery_choice_group_id"?: string | null;
            "delivery_execution_leg_id"?: string | null;
            "delivery_method_id"?: string | null;
            "delivery_selection_id"?: string | null;
            "device_id"?: string;
            "digital_details"?: DigitalFulfillmentDetails;
            "dispatched_at"?: string;
            "external_reference_id"?: string;
            "fulfillment_id": string;
            "line_items": Array<FulfillmentLineItem>;
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            "location_id"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "order_number"?: string;
            "outcome"?: FulfillmentOutcome;
            "packages"?: Array<ExpandedPackageSummary>;
            "packed_at"?: string;
            "picked_at"?: string;
            "pickup_details"?: PickupFulfillmentDetails;
            "recipient"?: FulfillmentRecipient;
            "scheduled_start_at": string | null;
            "service_details"?: ServiceFulfillmentDetails;
            "shipment_details"?: ShipmentFulfillmentDetails;
            "shipments"?: Array<ExpandedShipmentSummary>;
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
            "terminal_at"?: string;
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "fulfillment.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_hold"?: FulfillmentHold;
            "charges"?: Array<FulfillmentChargeLink>;
            "completed_at"?: string;
            "created_at": string;
            "customer_id"?: string;
            "delivery_choice_group_id"?: string | null;
            "delivery_execution_leg_id"?: string | null;
            "delivery_method_id"?: string | null;
            "delivery_selection_id"?: string | null;
            "device_id"?: string;
            "digital_details"?: DigitalFulfillmentDetails;
            "dispatched_at"?: string;
            "external_reference_id"?: string;
            "fulfillment_id": string;
            "line_items": Array<FulfillmentLineItem>;
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            "location_id"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "order_number"?: string;
            "outcome"?: FulfillmentOutcome;
            "packages"?: Array<ExpandedPackageSummary>;
            "packed_at"?: string;
            "picked_at"?: string;
            "pickup_details"?: PickupFulfillmentDetails;
            "recipient"?: FulfillmentRecipient;
            "scheduled_start_at": string | null;
            "service_details"?: ServiceFulfillmentDetails;
            "shipment_details"?: ShipmentFulfillmentDetails;
            "shipments"?: Array<ExpandedShipmentSummary>;
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
            "terminal_at"?: string;
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "fulfillment.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "fulfillment.created";
});
/**
 * The `fulfillment.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type FulfillmentCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.active_hold (Optional): {@link FulfillmentHold}. Current hold
     * details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason,
     * who placed it, and when it became active. object.charges (Optional): Array of {@link
     * FulfillmentChargeLink}. Order charges associated with this fulfillment. object.charges[]
     * (Value): {@link FulfillmentChargeLink}. Links a fulfillment to an order charge by
     * `order_charge_id`. object.completed_at (Optional): string. When the fulfillment was
     * completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required):
     * string. When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.customer_id (Optional): string. Customer receiving this
     * fulfillment, when one is set. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.delivery_choice_group_id (Optional): string or null. Delivery choice group that
     * created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials. Example:
     * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". object.delivery_execution_leg_id (Optional): string or
     * null. Execution leg of the selected delivery option that created this fulfillment. `null`
     * when the merchant created the fulfillment or checkout created it without a delivery quote.
     * Always present with merchant credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
     * object.delivery_method_id (Optional): string or null. Delivery method chosen for this
     * fulfillment. `null` when the merchant created the fulfillment or checkout created it without
     * a delivery quote. Also `null` when it was created before this field was added. Always
     * present with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_selection_id (Optional): string or null. Delivery selection that created
     * this fulfillment. `null` when the merchant created the fulfillment or checkout created it
     * without a delivery quote. Always present with merchant credentials. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". object.device_id (Optional): string. Device associated
     * with the fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
     * object.digital_details (Optional): {@link DigitalFulfillmentDetails}. Delivery URL and
     * completion time for a digital fulfillment. Details of a digital fulfillment: when it was
     * delivered (`delivered_at`) and its `delivery_url`. object.dispatched_at (Optional): string.
     * First time this fulfillment reached dispatched. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.fulfillment_id (Required): string. Stable identifier of the
     * fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.line_items (Required): Array
     * of {@link FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment.
     * object.line_items[] (Value): {@link FulfillmentLineItem}. An order line item and quantity
     * included in a fulfillment, with the modifiers applied to it. object.local_delivery_details
     * (Optional): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
     * details for a local delivery fulfillment. Details of a local delivery fulfillment: courier,
     * timing window, instructions, and tracking. Some fields are omitted for credentials that
     * don't act for the verified customer. object.location_id (Optional): string. Merchant
     * location responsible for this fulfillment. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned key-value metadata associated
     * with the fulfillment. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.order (Optional): {@link ExpandedOrderSummary} or null. Order summary returned when
     * the order relationship is expanded. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.order_number
     * (Optional): string. Human-readable number of the order this fulfillment belongs to. Omitted
     * when the order has no number. object.outcome (Optional): {@link FulfillmentOutcome}.
     * Terminal outcome details. Present exactly when status is no_show. The terminal outcome
     * recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred.
     * object.packages (Optional): Array of {@link ExpandedPackageSummary}. Packages associated
     * with this fulfillment. object.packages[] (Value): {@link ExpandedPackageSummary}. A
     * package's summary fields, including carrier, tracking, status, and supported actions,
     * returned when the package is expanded. object.packed_at (Optional): string. First time this
     * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.picked_at (Optional): string. First time this fulfillment reached picked. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.pickup_details (Optional): {@link
     * PickupFulfillmentDetails}. Pickup window, pickup mode, and handoff times for a pickup
     * fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and
     * instructions name the store the buyer chose and the delivery method's pickup instructions.
     * The note the buyer left for the store is in recipient.instructions. object.recipient
     * (Optional): {@link FulfillmentRecipient}. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name,
     * email, phone, address, and handling instructions. object.scheduled_start_at (Required):
     * string or null. Derived start of the service schedule or pickup, local delivery, or shipment
     * window. Null when no schedule is booked, including digital fulfillments. Details remain the
     * authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and
     * last descending. Sorting by due_at compares this same value with nulls last ascending and
     * first descending. Ties use fulfillment_id in the same direction. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.service_details (Optional): {@link
     * ServiceFulfillmentDetails}. Schedule and completion details for a service fulfillment.
     * Details of a service fulfillment: the scheduled start and end, timezone, completion time,
     * and notes. object.shipment_details (Optional): {@link ShipmentFulfillmentDetails}. Shipping
     * schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments
     * with at least one value. Details of a shipment fulfillment: the shipping window, timezone,
     * and when the shipment was handed to the carrier. object.shipments (Optional): Array of
     * {@link ExpandedShipmentSummary}. Shipments associated with this fulfillment.
     * object.shipments[] (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields,
     * including direction, status, and package count, returned when the shipment is expanded.
     * object.status (Required): string. Current fulfillment lifecycle status. Read
     * supported_actions for available transitions. - `pending`: Work has not started and has not
     * been accepted. Approval may be required before work can begin. - `accepted`: The provider
     * accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the
     * hold to restore active_hold.previous_status, or use a supported forward action. -
     * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment
     * is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed
     * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
     * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason
     * before creating replacement work. - `scheduled`: The fulfillment is scheduled for its
     * recorded service window. - `preparing`: Warehouse or provider preparation is underway. -
     * `picked`: The assigned items have been picked. - `packed`: The assigned items have been
     * packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. -
     * `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value
     * enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     * object.supported_actions (Optional): Array of string. Read-only lifecycle actions accepted
     * now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty
     * when none are available. Values name the verb route with hyphens replaced by underscores.
     * Always present with merchant credentials. [] enum: "accept", "cancel", "complete",
     * "dispatch", "fail", "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
     * "mark_ready", "release_hold", "schedule", "start". object.supported_actions[] (Value):
     * string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". object.terminal_at (Optional): string. When the
     * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records
     * the state transition; completed_at records completion evidence supplied for the fulfillment.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string. How the
     * items are delivered: shipment, pickup, local delivery, digital delivery, or service. Value
     * enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover".
     * object.updated_at (Required): string. When the fulfillment was last updated, in RFC3339
     * format. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Monotonic fulfillment version for expected_version checks. Format: uint64. minimum:
     * 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * active_hold (Optional): {@link FulfillmentHold}. Current hold details. Present exactly
         * when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and
         * when it became active. charges (Optional): Array of {@link FulfillmentChargeLink}. Order
         * charges associated with this fulfillment. charges[] (Value): {@link
         * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
         * completed_at (Optional): string. When the fulfillment was completed. Mirrors the
         * completion time for its type: delivered_at for shipment, local delivery, and digital
         * fulfillments, picked_up_at for pickup, and service_details.completed_at for service
         * fulfillments. Omitted until a completion time is recorded. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When the fulfillment was created,
         * in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". customer_id
         * (Optional): string. Customer receiving this fulfillment, when one is set. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". delivery_choice_group_id (Optional): string or null.
         * Delivery choice group that created this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
         * delivery_execution_leg_id (Optional): string or null. Execution leg of the selected
         * delivery option that created this fulfillment. `null` when the merchant created the
         * fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M". delivery_method_id
         * (Optional): string or null. Delivery method chosen for this fulfillment. `null` when the
         * merchant created the fulfillment or checkout created it without a delivery quote. Also
         * `null` when it was created before this field was added. Always present with merchant
         * credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_id
         * (Optional): string or null. Delivery selection that created this fulfillment. `null`
         * when the merchant created the fulfillment or checkout created it without a delivery
         * quote. Always present with merchant credentials. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". device_id (Optional): string. Device associated with
         * the fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
         * digital_details (Optional): {@link DigitalFulfillmentDetails}. Delivery URL and
         * completion time for a digital fulfillment. Details of a digital fulfillment: when it was
         * delivered (`delivered_at`) and its `delivery_url`. dispatched_at (Optional): string.
         * First time this fulfillment reached dispatched. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". fulfillment_id (Required): string. Stable identifier of the
         * fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". line_items (Required): Array of
         * {@link FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment.
         * line_items[] (Value): {@link FulfillmentLineItem}. An order line item and quantity
         * included in a fulfillment, with the modifiers applied to it. local_delivery_details
         * (Optional): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
         * details for a local delivery fulfillment. Details of a local delivery fulfillment:
         * courier, timing window, instructions, and tracking. Some fields are omitted for
         * credentials that don't act for the verified customer. location_id (Optional): string.
         * Merchant location responsible for this fulfillment. Example:
         * "loc_01KEZF7C00CMHRRYA3MV996JB2". metadata (Optional): {@link MetadataMap}. Caller-owned
         * key-value metadata associated with the fulfillment. Caller-owned key-value data stored
         * on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
         * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before
         * those limits may not satisfy them. order (Optional): {@link ExpandedOrderSummary} or
         * null. Order summary returned when the order relationship is expanded. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. Order whose items this fulfillment delivers. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_number (Optional): string. Human-readable number
         * of the order this fulfillment belongs to. Omitted when the order has no number. outcome
         * (Optional): {@link FulfillmentOutcome}. Terminal outcome details. Present exactly when
         * status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show,
         * with its reason, notes, and when it occurred. packages (Optional): Array of {@link
         * ExpandedPackageSummary}. Packages associated with this fulfillment. packages[] (Value):
         * {@link ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
         * status, and supported actions, returned when the package is expanded. packed_at
         * (Optional): string. First time this fulfillment reached packed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". picked_at (Optional): string. First time this
         * fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * pickup_details (Optional): {@link PickupFulfillmentDetails}. Pickup window, pickup mode,
         * and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout
         * creates, location_name, address, and instructions name the store the buyer chose and the
         * delivery method's pickup instructions. The note the buyer left for the store is in
         * recipient.instructions. recipient (Optional): {@link FulfillmentRecipient}. Omitted for
         * a checkout session credential that doesn't act for the customer the buyer verified. The
         * recipient of a fulfillment, with name, email, phone, address, and handling instructions.
         * scheduled_start_at (Required): string or null. Derived start of the service schedule or
         * pickup, local delivery, or shipment window. Null when no schedule is booked, including
         * digital fulfillments. Details remain the authoritative schedule inputs. Sorting by
         * scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at
         * compares this same value with nulls last ascending and first descending. Ties use
         * fulfillment_id in the same direction. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_details (Optional): {@link ServiceFulfillmentDetails}.
         * Schedule and completion details for a service fulfillment. Details of a service
         * fulfillment: the scheduled start and end, timezone, completion time, and notes.
         * shipment_details (Optional): {@link ShipmentFulfillmentDetails}. Shipping schedule and
         * ship time for a shipment fulfillment. Present only on shipment fulfillments with at
         * least one value. Details of a shipment fulfillment: the shipping window, timezone, and
         * when the shipment was handed to the carrier. shipments (Optional): Array of {@link
         * ExpandedShipmentSummary}. Shipments associated with this fulfillment. shipments[]
         * (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields, including
         * direction, status, and package count, returned when the shipment is expanded. status
         * (Required): string. Current fulfillment lifecycle status. Read supported_actions for
         * available transitions. - `pending`: Work has not started and has not been accepted.
         * Approval may be required before work can begin. - `accepted`: The provider accepted the
         * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
         * restore active_hold.previous_status, or use a supported forward action. - `in_progress`:
         * Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready
         * for pickup, handoff, or completion. - `completed`: All fulfillment work completed
         * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
         * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
         * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for
         * its recorded service window. - `preparing`: Warehouse or provider preparation is
         * underway. - `picked`: The assigned items have been picked. - `packed`: The assigned
         * items have been packed. - `dispatched`: The fulfillment left its origin for delivery or
         * handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded
         * reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
         * "dispatched", "no_show". supported_actions (Optional): Array of string. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. Always present with merchant credentials. [] enum:
         * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
         * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
         * "schedule", "start". supported_actions[] (Value): string. Value enum: "accept",
         * "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed",
         * "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start".
         * terminal_at (Optional): string. When the fulfillment entered a terminal state:
         * completed, canceled, failed, or no_show. This records the state transition; completed_at
         * records completion evidence supplied for the fulfillment. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". type (Required): string. How the items are delivered: shipment,
         * pickup, local delivery, digital delivery, or service. Value enum: "shipment", "pickup",
         * "local_delivery", "digital", "service", "handover". updated_at (Required): string. When
         * the fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Monotonic fulfillment version for
         * expected_version checks. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current hold details. Present exactly when status is on_hold. A hold on a
             * fulfillment, with its reason, who placed it, and when it became active.
             */
            "active_hold"?: FulfillmentHold;
            /**
             * Order charges associated with this fulfillment. [] (Value): {@link
             * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
             */
            "charges"?: Array<FulfillmentChargeLink>;
            /**
             * When the fulfillment was completed. Mirrors the completion time for its type:
             * delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at
             * for pickup, and service_details.completed_at for service fulfillments. Omitted until
             * a completion time is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * Delivery choice group that created this fulfillment. `null` when the merchant
             * created the fulfillment or checkout created it without a delivery quote. Always
             * present with merchant credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
             */
            "delivery_choice_group_id"?: string | null;
            /**
             * Execution leg of the selected delivery option that created this fulfillment. `null`
             * when the merchant created the fulfillment or checkout created it without a delivery
             * quote. Always present with merchant credentials. Example:
             * "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
             */
            "delivery_execution_leg_id"?: string | null;
            /**
             * Delivery method chosen for this fulfillment. `null` when the merchant created the
             * fulfillment or checkout created it without a delivery quote. Also `null` when it was
             * created before this field was added. Always present with merchant credentials.
             * Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_id"?: string | null;
            /**
             * Delivery selection that created this fulfillment. `null` when the merchant created
             * the fulfillment or checkout created it without a delivery quote. Always present with
             * merchant credentials. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
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
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Stable identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
            "fulfillment_id": string;
            /**
             * Order lines and quantities allocated to this fulfillment. [] (Value): {@link
             * FulfillmentLineItem}. An order line item and quantity included in a fulfillment,
             * with the modifiers applied to it.
             */
            "line_items": Array<FulfillmentLineItem>;
            /**
             * Courier, delivery window, and handoff details for a local delivery fulfillment.
             * Details of a local delivery fulfillment: courier, timing window, instructions, and
             * tracking. Some fields are omitted for credentials that don't act for the verified
             * customer.
             */
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            /**
             * Merchant location responsible for this fulfillment. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id"?: string;
            /**
             * Caller-owned key-value metadata associated with the fulfillment. Caller-owned
             * key-value data stored on a resource. Keys starting with flint_ are reserved for
             * Flint and are not returned. Writes follow the limits on MetadataInput and
             * MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order whose items this fulfillment delivers. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * Human-readable number of the order this fulfillment belongs to. Omitted when the
             * order has no number.
             */
            "order_number"?: string;
            /**
             * Terminal outcome details. Present exactly when status is no_show. The terminal
             * outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and
             * when it occurred.
             */
            "outcome"?: FulfillmentOutcome;
            /**
             * Packages associated with this fulfillment. [] (Value): {@link
             * ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
             * status, and supported actions, returned when the package is expanded.
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
             * Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup
             * details. For a pickup that checkout creates, location_name, address, and
             * instructions name the store the buyer chose and the delivery method's pickup
             * instructions. The note the buyer left for the store is in recipient.instructions.
             */
            "pickup_details"?: PickupFulfillmentDetails;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The recipient of a fulfillment, with name, email, phone, address,
             * and handling instructions.
             */
            "recipient"?: FulfillmentRecipient;
            /**
             * Derived start of the service schedule or pickup, local delivery, or shipment window.
             * Null when no schedule is booked, including digital fulfillments. Details remain the
             * authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first
             * ascending and last descending. Sorting by due_at compares this same value with nulls
             * last ascending and first descending. Ties use fulfillment_id in the same direction.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_start_at": string | null;
            /**
             * Schedule and completion details for a service fulfillment. Details of a service
             * fulfillment: the scheduled start and end, timezone, completion time, and notes.
             */
            "service_details"?: ServiceFulfillmentDetails;
            /**
             * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
             * fulfillments with at least one value. Details of a shipment fulfillment: the
             * shipping window, timezone, and when the shipment was handed to the carrier.
             */
            "shipment_details"?: ShipmentFulfillmentDetails;
            /**
             * Shipments associated with this fulfillment. [] (Value): {@link
             * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status,
             * and package count, returned when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Current fulfillment lifecycle status. Read supported_actions for available
             * transitions. - `pending`: Work has not started and has not been accepted. Approval
             * may be required before work can begin. - `accepted`: The provider accepted the
             * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
             * restore active_hold.previous_status, or use a supported forward action. -
             * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
             * fulfillment is ready for pickup, handoff, or completion. - `completed`: All
             * fulfillment work completed successfully. - `canceled`: The fulfillment was
             * intentionally canceled and will not continue. - `failed`: The fulfillment could not
             * be completed. Resolve the recorded reason before creating replacement work. -
             * `scheduled`: The fulfillment is scheduled for its recorded service window. -
             * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
             * items have been picked. - `packed`: The assigned items have been packed. -
             * `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`:
             * A service appointment was missed. Read outcome for the recorded reason. Value enum:
             * "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
             * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
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
             * Read-only lifecycle actions accepted now, based on the fulfillment, its order
             * payment status, holds, and shipment progress. Empty when none are available. Values
             * name the verb route with hyphens replaced by underscores. Always present with
             * merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start". [] (Value): string. Value enum:
             * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
             * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
             * "schedule", "start".
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
             * When the fulfillment entered a terminal state: completed, canceled, failed, or
             * no_show. This records the state transition; completed_at records completion evidence
             * supplied for the fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "terminal_at"?: string;
            /**
             * How the items are delivered: shipment, pickup, local delivery, digital delivery, or
             * service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service",
             * "handover".
             */
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {});
            /**
             * When the fulfillment was last updated, in RFC3339 format. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum:
             * 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "fulfillment.created". */
    "event_type"?: "fulfillment.created";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
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
});
/**
 * The `fulfillment.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type FulfillmentCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.active_hold (Optional): {@link FulfillmentHold}. Current hold
     * details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason,
     * who placed it, and when it became active. object.charges (Optional): Array of {@link
     * FulfillmentChargeLink}. Order charges associated with this fulfillment. object.charges[]
     * (Value): {@link FulfillmentChargeLink}. Links a fulfillment to an order charge by
     * `order_charge_id`. object.completed_at (Optional): string. When the fulfillment was
     * completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required):
     * string. When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.customer_id (Optional): string. Customer receiving this
     * fulfillment, when one is set. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.delivery_choice_group_id (Optional): string or null. Delivery choice group that
     * created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials. Example:
     * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". object.delivery_execution_leg_id (Optional): string or
     * null. Execution leg of the selected delivery option that created this fulfillment. `null`
     * when the merchant created the fulfillment or checkout created it without a delivery quote.
     * Always present with merchant credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
     * object.delivery_method_id (Optional): string or null. Delivery method chosen for this
     * fulfillment. `null` when the merchant created the fulfillment or checkout created it without
     * a delivery quote. Also `null` when it was created before this field was added. Always
     * present with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_selection_id (Optional): string or null. Delivery selection that created
     * this fulfillment. `null` when the merchant created the fulfillment or checkout created it
     * without a delivery quote. Always present with merchant credentials. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". object.device_id (Optional): string. Device associated
     * with the fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
     * object.digital_details (Optional): {@link DigitalFulfillmentDetails}. Delivery URL and
     * completion time for a digital fulfillment. Details of a digital fulfillment: when it was
     * delivered (`delivered_at`) and its `delivery_url`. object.dispatched_at (Optional): string.
     * First time this fulfillment reached dispatched. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.fulfillment_id (Required): string. Stable identifier of the
     * fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.line_items (Required): Array
     * of {@link FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment.
     * object.line_items[] (Value): {@link FulfillmentLineItem}. An order line item and quantity
     * included in a fulfillment, with the modifiers applied to it. object.local_delivery_details
     * (Optional): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
     * details for a local delivery fulfillment. Details of a local delivery fulfillment: courier,
     * timing window, instructions, and tracking. Some fields are omitted for credentials that
     * don't act for the verified customer. object.location_id (Optional): string. Merchant
     * location responsible for this fulfillment. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned key-value metadata associated
     * with the fulfillment. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.order (Optional): {@link ExpandedOrderSummary} or null. Order summary returned when
     * the order relationship is expanded. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.order_number
     * (Optional): string. Human-readable number of the order this fulfillment belongs to. Omitted
     * when the order has no number. object.outcome (Optional): {@link FulfillmentOutcome}.
     * Terminal outcome details. Present exactly when status is no_show. The terminal outcome
     * recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred.
     * object.packages (Optional): Array of {@link ExpandedPackageSummary}. Packages associated
     * with this fulfillment. object.packages[] (Value): {@link ExpandedPackageSummary}. A
     * package's summary fields, including carrier, tracking, status, and supported actions,
     * returned when the package is expanded. object.packed_at (Optional): string. First time this
     * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.picked_at (Optional): string. First time this fulfillment reached picked. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.pickup_details (Optional): {@link
     * PickupFulfillmentDetails}. Pickup window, pickup mode, and handoff times for a pickup
     * fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and
     * instructions name the store the buyer chose and the delivery method's pickup instructions.
     * The note the buyer left for the store is in recipient.instructions. object.recipient
     * (Optional): {@link FulfillmentRecipient}. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name,
     * email, phone, address, and handling instructions. object.scheduled_start_at (Required):
     * string or null. Derived start of the service schedule or pickup, local delivery, or shipment
     * window. Null when no schedule is booked, including digital fulfillments. Details remain the
     * authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and
     * last descending. Sorting by due_at compares this same value with nulls last ascending and
     * first descending. Ties use fulfillment_id in the same direction. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.service_details (Optional): {@link
     * ServiceFulfillmentDetails}. Schedule and completion details for a service fulfillment.
     * Details of a service fulfillment: the scheduled start and end, timezone, completion time,
     * and notes. object.shipment_details (Optional): {@link ShipmentFulfillmentDetails}. Shipping
     * schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments
     * with at least one value. Details of a shipment fulfillment: the shipping window, timezone,
     * and when the shipment was handed to the carrier. object.shipments (Optional): Array of
     * {@link ExpandedShipmentSummary}. Shipments associated with this fulfillment.
     * object.shipments[] (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields,
     * including direction, status, and package count, returned when the shipment is expanded.
     * object.status (Required): string. Current fulfillment lifecycle status. Read
     * supported_actions for available transitions. - `pending`: Work has not started and has not
     * been accepted. Approval may be required before work can begin. - `accepted`: The provider
     * accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the
     * hold to restore active_hold.previous_status, or use a supported forward action. -
     * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment
     * is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed
     * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
     * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason
     * before creating replacement work. - `scheduled`: The fulfillment is scheduled for its
     * recorded service window. - `preparing`: Warehouse or provider preparation is underway. -
     * `picked`: The assigned items have been picked. - `packed`: The assigned items have been
     * packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. -
     * `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value
     * enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     * object.supported_actions (Optional): Array of string. Read-only lifecycle actions accepted
     * now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty
     * when none are available. Values name the verb route with hyphens replaced by underscores.
     * Always present with merchant credentials. [] enum: "accept", "cancel", "complete",
     * "dispatch", "fail", "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
     * "mark_ready", "release_hold", "schedule", "start". object.supported_actions[] (Value):
     * string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". object.terminal_at (Optional): string. When the
     * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records
     * the state transition; completed_at records completion evidence supplied for the fulfillment.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string. How the
     * items are delivered: shipment, pickup, local delivery, digital delivery, or service. Value
     * enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover".
     * object.updated_at (Required): string. When the fulfillment was last updated, in RFC3339
     * format. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Monotonic fulfillment version for expected_version checks. Format: uint64. minimum:
     * 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * active_hold (Optional): {@link FulfillmentHold}. Current hold details. Present exactly
         * when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and
         * when it became active. charges (Optional): Array of {@link FulfillmentChargeLink}. Order
         * charges associated with this fulfillment. charges[] (Value): {@link
         * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
         * completed_at (Optional): string. When the fulfillment was completed. Mirrors the
         * completion time for its type: delivered_at for shipment, local delivery, and digital
         * fulfillments, picked_up_at for pickup, and service_details.completed_at for service
         * fulfillments. Omitted until a completion time is recorded. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When the fulfillment was created,
         * in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". customer_id
         * (Optional): string. Customer receiving this fulfillment, when one is set. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". delivery_choice_group_id (Optional): string or null.
         * Delivery choice group that created this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
         * delivery_execution_leg_id (Optional): string or null. Execution leg of the selected
         * delivery option that created this fulfillment. `null` when the merchant created the
         * fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M". delivery_method_id
         * (Optional): string or null. Delivery method chosen for this fulfillment. `null` when the
         * merchant created the fulfillment or checkout created it without a delivery quote. Also
         * `null` when it was created before this field was added. Always present with merchant
         * credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_id
         * (Optional): string or null. Delivery selection that created this fulfillment. `null`
         * when the merchant created the fulfillment or checkout created it without a delivery
         * quote. Always present with merchant credentials. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". device_id (Optional): string. Device associated with
         * the fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
         * digital_details (Optional): {@link DigitalFulfillmentDetails}. Delivery URL and
         * completion time for a digital fulfillment. Details of a digital fulfillment: when it was
         * delivered (`delivered_at`) and its `delivery_url`. dispatched_at (Optional): string.
         * First time this fulfillment reached dispatched. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". fulfillment_id (Required): string. Stable identifier of the
         * fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". line_items (Required): Array of
         * {@link FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment.
         * line_items[] (Value): {@link FulfillmentLineItem}. An order line item and quantity
         * included in a fulfillment, with the modifiers applied to it. local_delivery_details
         * (Optional): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
         * details for a local delivery fulfillment. Details of a local delivery fulfillment:
         * courier, timing window, instructions, and tracking. Some fields are omitted for
         * credentials that don't act for the verified customer. location_id (Optional): string.
         * Merchant location responsible for this fulfillment. Example:
         * "loc_01KEZF7C00CMHRRYA3MV996JB2". metadata (Optional): {@link MetadataMap}. Caller-owned
         * key-value metadata associated with the fulfillment. Caller-owned key-value data stored
         * on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
         * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before
         * those limits may not satisfy them. order (Optional): {@link ExpandedOrderSummary} or
         * null. Order summary returned when the order relationship is expanded. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. Order whose items this fulfillment delivers. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_number (Optional): string. Human-readable number
         * of the order this fulfillment belongs to. Omitted when the order has no number. outcome
         * (Optional): {@link FulfillmentOutcome}. Terminal outcome details. Present exactly when
         * status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show,
         * with its reason, notes, and when it occurred. packages (Optional): Array of {@link
         * ExpandedPackageSummary}. Packages associated with this fulfillment. packages[] (Value):
         * {@link ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
         * status, and supported actions, returned when the package is expanded. packed_at
         * (Optional): string. First time this fulfillment reached packed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". picked_at (Optional): string. First time this
         * fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * pickup_details (Optional): {@link PickupFulfillmentDetails}. Pickup window, pickup mode,
         * and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout
         * creates, location_name, address, and instructions name the store the buyer chose and the
         * delivery method's pickup instructions. The note the buyer left for the store is in
         * recipient.instructions. recipient (Optional): {@link FulfillmentRecipient}. Omitted for
         * a checkout session credential that doesn't act for the customer the buyer verified. The
         * recipient of a fulfillment, with name, email, phone, address, and handling instructions.
         * scheduled_start_at (Required): string or null. Derived start of the service schedule or
         * pickup, local delivery, or shipment window. Null when no schedule is booked, including
         * digital fulfillments. Details remain the authoritative schedule inputs. Sorting by
         * scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at
         * compares this same value with nulls last ascending and first descending. Ties use
         * fulfillment_id in the same direction. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_details (Optional): {@link ServiceFulfillmentDetails}.
         * Schedule and completion details for a service fulfillment. Details of a service
         * fulfillment: the scheduled start and end, timezone, completion time, and notes.
         * shipment_details (Optional): {@link ShipmentFulfillmentDetails}. Shipping schedule and
         * ship time for a shipment fulfillment. Present only on shipment fulfillments with at
         * least one value. Details of a shipment fulfillment: the shipping window, timezone, and
         * when the shipment was handed to the carrier. shipments (Optional): Array of {@link
         * ExpandedShipmentSummary}. Shipments associated with this fulfillment. shipments[]
         * (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields, including
         * direction, status, and package count, returned when the shipment is expanded. status
         * (Required): string. Current fulfillment lifecycle status. Read supported_actions for
         * available transitions. - `pending`: Work has not started and has not been accepted.
         * Approval may be required before work can begin. - `accepted`: The provider accepted the
         * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
         * restore active_hold.previous_status, or use a supported forward action. - `in_progress`:
         * Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready
         * for pickup, handoff, or completion. - `completed`: All fulfillment work completed
         * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
         * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
         * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for
         * its recorded service window. - `preparing`: Warehouse or provider preparation is
         * underway. - `picked`: The assigned items have been picked. - `packed`: The assigned
         * items have been packed. - `dispatched`: The fulfillment left its origin for delivery or
         * handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded
         * reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
         * "dispatched", "no_show". supported_actions (Optional): Array of string. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. Always present with merchant credentials. [] enum:
         * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
         * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
         * "schedule", "start". supported_actions[] (Value): string. Value enum: "accept",
         * "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed",
         * "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start".
         * terminal_at (Optional): string. When the fulfillment entered a terminal state:
         * completed, canceled, failed, or no_show. This records the state transition; completed_at
         * records completion evidence supplied for the fulfillment. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". type (Required): string. How the items are delivered: shipment,
         * pickup, local delivery, digital delivery, or service. Value enum: "shipment", "pickup",
         * "local_delivery", "digital", "service", "handover". updated_at (Required): string. When
         * the fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Monotonic fulfillment version for
         * expected_version checks. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current hold details. Present exactly when status is on_hold. A hold on a
             * fulfillment, with its reason, who placed it, and when it became active.
             */
            "active_hold"?: FulfillmentHold;
            /**
             * Order charges associated with this fulfillment. [] (Value): {@link
             * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
             */
            "charges"?: Array<FulfillmentChargeLink>;
            /**
             * When the fulfillment was completed. Mirrors the completion time for its type:
             * delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at
             * for pickup, and service_details.completed_at for service fulfillments. Omitted until
             * a completion time is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * Delivery choice group that created this fulfillment. `null` when the merchant
             * created the fulfillment or checkout created it without a delivery quote. Always
             * present with merchant credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
             */
            "delivery_choice_group_id"?: string | null;
            /**
             * Execution leg of the selected delivery option that created this fulfillment. `null`
             * when the merchant created the fulfillment or checkout created it without a delivery
             * quote. Always present with merchant credentials. Example:
             * "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
             */
            "delivery_execution_leg_id"?: string | null;
            /**
             * Delivery method chosen for this fulfillment. `null` when the merchant created the
             * fulfillment or checkout created it without a delivery quote. Also `null` when it was
             * created before this field was added. Always present with merchant credentials.
             * Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_id"?: string | null;
            /**
             * Delivery selection that created this fulfillment. `null` when the merchant created
             * the fulfillment or checkout created it without a delivery quote. Always present with
             * merchant credentials. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
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
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Stable identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
            "fulfillment_id": string;
            /**
             * Order lines and quantities allocated to this fulfillment. [] (Value): {@link
             * FulfillmentLineItem}. An order line item and quantity included in a fulfillment,
             * with the modifiers applied to it.
             */
            "line_items": Array<FulfillmentLineItem>;
            /**
             * Courier, delivery window, and handoff details for a local delivery fulfillment.
             * Details of a local delivery fulfillment: courier, timing window, instructions, and
             * tracking. Some fields are omitted for credentials that don't act for the verified
             * customer.
             */
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            /**
             * Merchant location responsible for this fulfillment. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id"?: string;
            /**
             * Caller-owned key-value metadata associated with the fulfillment. Caller-owned
             * key-value data stored on a resource. Keys starting with flint_ are reserved for
             * Flint and are not returned. Writes follow the limits on MetadataInput and
             * MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order whose items this fulfillment delivers. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * Human-readable number of the order this fulfillment belongs to. Omitted when the
             * order has no number.
             */
            "order_number"?: string;
            /**
             * Terminal outcome details. Present exactly when status is no_show. The terminal
             * outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and
             * when it occurred.
             */
            "outcome"?: FulfillmentOutcome;
            /**
             * Packages associated with this fulfillment. [] (Value): {@link
             * ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
             * status, and supported actions, returned when the package is expanded.
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
             * Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup
             * details. For a pickup that checkout creates, location_name, address, and
             * instructions name the store the buyer chose and the delivery method's pickup
             * instructions. The note the buyer left for the store is in recipient.instructions.
             */
            "pickup_details"?: PickupFulfillmentDetails;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The recipient of a fulfillment, with name, email, phone, address,
             * and handling instructions.
             */
            "recipient"?: FulfillmentRecipient;
            /**
             * Derived start of the service schedule or pickup, local delivery, or shipment window.
             * Null when no schedule is booked, including digital fulfillments. Details remain the
             * authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first
             * ascending and last descending. Sorting by due_at compares this same value with nulls
             * last ascending and first descending. Ties use fulfillment_id in the same direction.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_start_at": string | null;
            /**
             * Schedule and completion details for a service fulfillment. Details of a service
             * fulfillment: the scheduled start and end, timezone, completion time, and notes.
             */
            "service_details"?: ServiceFulfillmentDetails;
            /**
             * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
             * fulfillments with at least one value. Details of a shipment fulfillment: the
             * shipping window, timezone, and when the shipment was handed to the carrier.
             */
            "shipment_details"?: ShipmentFulfillmentDetails;
            /**
             * Shipments associated with this fulfillment. [] (Value): {@link
             * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status,
             * and package count, returned when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Current fulfillment lifecycle status. Read supported_actions for available
             * transitions. - `pending`: Work has not started and has not been accepted. Approval
             * may be required before work can begin. - `accepted`: The provider accepted the
             * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
             * restore active_hold.previous_status, or use a supported forward action. -
             * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
             * fulfillment is ready for pickup, handoff, or completion. - `completed`: All
             * fulfillment work completed successfully. - `canceled`: The fulfillment was
             * intentionally canceled and will not continue. - `failed`: The fulfillment could not
             * be completed. Resolve the recorded reason before creating replacement work. -
             * `scheduled`: The fulfillment is scheduled for its recorded service window. -
             * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
             * items have been picked. - `packed`: The assigned items have been packed. -
             * `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`:
             * A service appointment was missed. Read outcome for the recorded reason. Value enum:
             * "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
             * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
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
             * Read-only lifecycle actions accepted now, based on the fulfillment, its order
             * payment status, holds, and shipment progress. Empty when none are available. Values
             * name the verb route with hyphens replaced by underscores. Always present with
             * merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start". [] (Value): string. Value enum:
             * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
             * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
             * "schedule", "start".
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
             * When the fulfillment entered a terminal state: completed, canceled, failed, or
             * no_show. This records the state transition; completed_at records completion evidence
             * supplied for the fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "terminal_at"?: string;
            /**
             * How the items are delivered: shipment, pickup, local delivery, digital delivery, or
             * service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service",
             * "handover".
             */
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {});
            /**
             * When the fulfillment was last updated, in RFC3339 format. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum:
             * 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "fulfillment.created". */
    "event_type"?: "fulfillment.created";
});
/** An action recorded during an order's fulfillment. */
export type FulfillmentEvent = {
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior": "send" | "suppress" | (string & {});
    /** Timeline entry creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Subject status after the recorded transition. Value enum: "pending", "on_hold",
     * "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "accepted",
     * "preparing", "picked", "packed", "dispatched", "no_show", "created", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided".
     */
    "current_status"?: "pending"
        | "on_hold"
        | "in_progress"
        | "ready"
        | "completed"
        | "canceled"
        | "failed"
        | "scheduled"
        | "accepted"
        | "preparing"
        | "picked"
        | "packed"
        | "dispatched"
        | "no_show"
        | "created"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided"
        | (string & {});
    /** Free-form details attached to the event. * (Value): string. */
    "custom_details"?: Record<string, string>;
    /**
     * The delivery or fulfillment event recorded by this entry. Value enum: "carrier_scan",
     * "status_changed", "shipped", "in_transit", "out_for_delivery", "delivered",
     * "delivery_attempted", "tracking_updated", "exception", "returned", "custom".
     */
    "event_type": "carrier_scan"
        | "status_changed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "tracking_updated"
        | "exception"
        | "returned"
        | "custom"
        | (string & {});
    /** Event identifier assigned by that integration. Example: "warehouse-1842". */
    "external_event_id"?: string;
    /** Status supplied by that integration before mapping to Flint's public status. */
    "external_status"?: string;
    /** Integration that supplied the event. */
    "external_system"?: string;
    /**
     * Unique identifier for this fulfillment event, prefixed `fev_`. Example:
     * "fev_01KEZF7C002XK9D7X3239ERT51".
     */
    "fulfillment_event_id": string;
    /** ID of the fulfillment the event belongs to. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
    "fulfillment_id": string;
    /** Where the event happened, such as `Louisville, KY`. */
    "location_description"?: string;
    /** Human-readable text describing the event. */
    "message"?: string;
    /** Provider event timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "occurred_at"?: string;
    /**
     * Present only when `expand` includes `order`; `null` when expanded and there is no related
     * order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
     * status, payment and refund status, and pricing and settlement amounts, returned when the
     * order is expanded. anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** ID of the order the fulfillment belongs to. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /**
     * ID of the package the event is attached to. Absent when it isn't attached to a package.
     * Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R".
     */
    "package_id"?: string;
    /**
     * Subject status before the recorded transition. Value enum: "pending", "on_hold",
     * "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "accepted",
     * "preparing", "picked", "packed", "dispatched", "no_show", "created", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided".
     */
    "previous_status"?: "pending"
        | "on_hold"
        | "in_progress"
        | "ready"
        | "completed"
        | "canceled"
        | "failed"
        | "scheduled"
        | "accepted"
        | "preparing"
        | "picked"
        | "packed"
        | "dispatched"
        | "no_show"
        | "created"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided"
        | (string & {});
    /**
     * How the transition changes fulfillment quantities. - `preserve`: Keeps the quantity assigned
     * without marking it fulfilled. - `fulfill`: Moves the quantity from assigned to fulfilled. -
     * `release`: Returns the assigned quantity for reassignment. Value enum: "preserve",
     * "fulfill", "release".
     */
    "quantity_effect"?: "preserve" | "fulfill" | "release" | (string & {});
    /**
     * Why the fulfillment was paused or an appointment was missed, when the transition recorded a
     * reason. Value enum: "address_issue", "customer_no_show", "customer_request", "fraud_review",
     * "inventory_issue", "location_unavailable", "other", "payment_review", "provider_issue",
     * "provider_no_show", "scheduling_error", "scheduling_issue".
     */
    "reason"?: "address_issue"
        | "customer_no_show"
        | "customer_request"
        | "fraud_review"
        | "inventory_issue"
        | "location_unavailable"
        | "other"
        | "payment_review"
        | "provider_issue"
        | "provider_no_show"
        | "scheduling_error"
        | "scheduling_issue"
        | (string & {});
    /** The note supplied when this action was requested. */
    "reason_message"?: string;
    /** Flint receive timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "received_at"?: string;
    /**
     * ID of the shipment the event is attached to. Absent when it isn't attached to a shipment.
     * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     */
    "shipment_id"?: string;
    /**
     * Which resource current_status and previous_status describe. - `fulfillment`: The status
     * belongs to the fulfillment named by fulfillment_id. - `shipment`: The status belongs to the
     * shipment named by shipment_id. - `package`: The status belongs to the package named by
     * package_id. Value enum: "fulfillment", "shipment", "package".
     */
    "subject_type": "fulfillment" | "shipment" | "package" | (string & {});
};
export type FulfillmentEventCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "buyer_notification_behavior": "send" | "suppress" | (string & {});
            "created_at": string;
            "current_status"?: "pending"
                | "on_hold"
                | "in_progress"
                | "ready"
                | "completed"
                | "canceled"
                | "failed"
                | "scheduled"
                | "accepted"
                | "preparing"
                | "picked"
                | "packed"
                | "dispatched"
                | "no_show"
                | "created"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            "custom_details"?: Record<string, string>;
            "event_type": "carrier_scan"
                | "status_changed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "tracking_updated"
                | "exception"
                | "returned"
                | "custom"
                | (string & {});
            "external_event_id"?: string;
            "external_status"?: string;
            "external_system"?: string;
            "fulfillment_event_id": string;
            "fulfillment_id": string;
            "location_description"?: string;
            "message"?: string;
            "occurred_at"?: string;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "package_id"?: string;
            "previous_status"?: "pending"
                | "on_hold"
                | "in_progress"
                | "ready"
                | "completed"
                | "canceled"
                | "failed"
                | "scheduled"
                | "accepted"
                | "preparing"
                | "picked"
                | "packed"
                | "dispatched"
                | "no_show"
                | "created"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            "quantity_effect"?: "preserve" | "fulfill" | "release" | (string & {});
            "reason"?: "address_issue"
                | "customer_no_show"
                | "customer_request"
                | "fraud_review"
                | "inventory_issue"
                | "location_unavailable"
                | "other"
                | "payment_review"
                | "provider_issue"
                | "provider_no_show"
                | "scheduling_error"
                | "scheduling_issue"
                | (string & {});
            "reason_message"?: string;
            "received_at"?: string;
            "shipment_id"?: string;
            "subject_type": "fulfillment" | "shipment" | "package" | (string & {});
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "fulfillment_event.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "buyer_notification_behavior": "send" | "suppress" | (string & {});
            "created_at": string;
            "current_status"?: "pending"
                | "on_hold"
                | "in_progress"
                | "ready"
                | "completed"
                | "canceled"
                | "failed"
                | "scheduled"
                | "accepted"
                | "preparing"
                | "picked"
                | "packed"
                | "dispatched"
                | "no_show"
                | "created"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            "custom_details"?: Record<string, string>;
            "event_type": "carrier_scan"
                | "status_changed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "tracking_updated"
                | "exception"
                | "returned"
                | "custom"
                | (string & {});
            "external_event_id"?: string;
            "external_status"?: string;
            "external_system"?: string;
            "fulfillment_event_id": string;
            "fulfillment_id": string;
            "location_description"?: string;
            "message"?: string;
            "occurred_at"?: string;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "package_id"?: string;
            "previous_status"?: "pending"
                | "on_hold"
                | "in_progress"
                | "ready"
                | "completed"
                | "canceled"
                | "failed"
                | "scheduled"
                | "accepted"
                | "preparing"
                | "picked"
                | "packed"
                | "dispatched"
                | "no_show"
                | "created"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            "quantity_effect"?: "preserve" | "fulfill" | "release" | (string & {});
            "reason"?: "address_issue"
                | "customer_no_show"
                | "customer_request"
                | "fraud_review"
                | "inventory_issue"
                | "location_unavailable"
                | "other"
                | "payment_review"
                | "provider_issue"
                | "provider_no_show"
                | "scheduling_error"
                | "scheduling_issue"
                | (string & {});
            "reason_message"?: string;
            "received_at"?: string;
            "shipment_id"?: string;
            "subject_type": "fulfillment" | "shipment" | "package" | (string & {});
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "fulfillment_event.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "fulfillment_event.created";
});
/**
 * The `fulfillment_event.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type FulfillmentEventCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_notification_behavior (Required): string. Controls buyer
     * email handling. Omit or use send to send when recipient, template, and deduplication rules
     * allow it. Use suppress when another system owns buyer messaging. Value enum: "send",
     * "suppress". object.created_at (Required): string. Timeline entry creation timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.current_status (Optional): string.
     * Subject status after the recorded transition. Value enum: "pending", "on_hold",
     * "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "accepted",
     * "preparing", "picked", "packed", "dispatched", "no_show", "created", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". object.custom_details (Optional): Map of string. Free-form details
     * attached to the event. object.custom_details.* (Value): string. object.event_type
     * (Required): string. The delivery or fulfillment event recorded by this entry. Value enum:
     * "carrier_scan", "status_changed", "shipped", "in_transit", "out_for_delivery", "delivered",
     * "delivery_attempted", "tracking_updated", "exception", "returned", "custom".
     * object.external_event_id (Optional): string. Event identifier assigned by that integration.
     * Example: "warehouse-1842". object.external_status (Optional): string. Status supplied by
     * that integration before mapping to Flint's public status. object.external_system (Optional):
     * string. Integration that supplied the event. object.fulfillment_event_id (Required): string.
     * Unique identifier for this fulfillment event, prefixed `fev_`. Example:
     * "fev_01KEZF7C002XK9D7X3239ERT51". object.fulfillment_id (Required): string. ID of the
     * fulfillment the event belongs to. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     * object.location_description (Optional): string. Where the event happened, such as
     * `Louisville, KY`. object.message (Optional): string. Human-readable text describing the
     * event. object.occurred_at (Optional): string. Provider event timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.order (Optional): {@link ExpandedOrderSummary} or
     * null. Present only when `expand` includes `order`; `null` when expanded and there is no
     * related order. object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's
     * summary fields, including status, payment and refund status, and pricing and settlement
     * amounts, returned when the order is expanded. object.order.anyOf[2] (Value): null.
     * object.order_id (Required): string. ID of the order the fulfillment belongs to. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.package_id (Optional): string. ID of the package
     * the event is attached to. Absent when it isn't attached to a package. Example:
     * "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". object.previous_status (Optional): string. Subject status
     * before the recorded transition. Value enum: "pending", "on_hold", "in_progress", "ready",
     * "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked", "packed",
     * "dispatched", "no_show", "created", "shipped", "in_transit", "out_for_delivery",
     * "delivered", "delivery_attempted", "exception", "returned", "voided". object.quantity_effect
     * (Optional): string. How the transition changes fulfillment quantities. - `preserve`: Keeps
     * the quantity assigned without marking it fulfilled. - `fulfill`: Moves the quantity from
     * assigned to fulfilled. - `release`: Returns the assigned quantity for reassignment. Value
     * enum: "preserve", "fulfill", "release". object.reason (Optional): string. Why the
     * fulfillment was paused or an appointment was missed, when the transition recorded a reason.
     * Value enum: "address_issue", "customer_no_show", "customer_request", "fraud_review",
     * "inventory_issue", "location_unavailable", "other", "payment_review", "provider_issue",
     * "provider_no_show", "scheduling_error", "scheduling_issue". object.reason_message
     * (Optional): string. The note supplied when this action was requested. object.received_at
     * (Optional): string. Flint receive timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.shipment_id (Optional): string. ID of the shipment the event
     * is attached to. Absent when it isn't attached to a shipment. Example:
     * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.subject_type (Required): string. Which resource
     * current_status and previous_status describe. - `fulfillment`: The status belongs to the
     * fulfillment named by fulfillment_id. - `shipment`: The status belongs to the shipment named
     * by shipment_id. - `package`: The status belongs to the package named by package_id. Value
     * enum: "fulfillment", "shipment", "package".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_notification_behavior (Required): string. Controls buyer email handling. Omit or
         * use send to send when recipient, template, and deduplication rules allow it. Use
         * suppress when another system owns buyer messaging. Value enum: "send", "suppress".
         * created_at (Required): string. Timeline entry creation timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". current_status (Optional): string. Subject status after
         * the recorded transition. Value enum: "pending", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked",
         * "packed", "dispatched", "no_show", "created", "shipped", "in_transit",
         * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned",
         * "voided". custom_details (Optional): Map of string. Free-form details attached to the
         * event. custom_details.* (Value): string. event_type (Required): string. The delivery or
         * fulfillment event recorded by this entry. Value enum: "carrier_scan", "status_changed",
         * "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted",
         * "tracking_updated", "exception", "returned", "custom". external_event_id (Optional):
         * string. Event identifier assigned by that integration. Example: "warehouse-1842".
         * external_status (Optional): string. Status supplied by that integration before mapping
         * to Flint's public status. external_system (Optional): string. Integration that supplied
         * the event. fulfillment_event_id (Required): string. Unique identifier for this
         * fulfillment event, prefixed `fev_`. Example: "fev_01KEZF7C002XK9D7X3239ERT51".
         * fulfillment_id (Required): string. ID of the fulfillment the event belongs to. Example:
         * "ful_01KEZF7C00F24WVSTTWR1FQX5T". location_description (Optional): string. Where the
         * event happened, such as `Louisville, KY`. message (Optional): string. Human-readable
         * text describing the event. occurred_at (Optional): string. Provider event timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". order (Optional): {@link
         * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. ID of the order the
         * fulfillment belongs to. Example: "ord_01KEZF7C0054GQKJ142A8X367A". package_id
         * (Optional): string. ID of the package the event is attached to. Absent when it isn't
         * attached to a package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". previous_status
         * (Optional): string. Subject status before the recorded transition. Value enum:
         * "pending", "on_hold", "in_progress", "ready", "completed", "canceled", "failed",
         * "scheduled", "accepted", "preparing", "picked", "packed", "dispatched", "no_show",
         * "created", "shipped", "in_transit", "out_for_delivery", "delivered",
         * "delivery_attempted", "exception", "returned", "voided". quantity_effect (Optional):
         * string. How the transition changes fulfillment quantities. - `preserve`: Keeps the
         * quantity assigned without marking it fulfilled. - `fulfill`: Moves the quantity from
         * assigned to fulfilled. - `release`: Returns the assigned quantity for reassignment.
         * Value enum: "preserve", "fulfill", "release". reason (Optional): string. Why the
         * fulfillment was paused or an appointment was missed, when the transition recorded a
         * reason. Value enum: "address_issue", "customer_no_show", "customer_request",
         * "fraud_review", "inventory_issue", "location_unavailable", "other", "payment_review",
         * "provider_issue", "provider_no_show", "scheduling_error", "scheduling_issue".
         * reason_message (Optional): string. The note supplied when this action was requested.
         * received_at (Optional): string. Flint receive timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". shipment_id (Optional): string. ID of the shipment the event is
         * attached to. Absent when it isn't attached to a shipment. Example:
         * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". subject_type (Required): string. Which resource
         * current_status and previous_status describe. - `fulfillment`: The status belongs to the
         * fulfillment named by fulfillment_id. - `shipment`: The status belongs to the shipment
         * named by shipment_id. - `package`: The status belongs to the package named by
         * package_id. Value enum: "fulfillment", "shipment", "package".
         */
        "object": {
            /**
             * Controls buyer email handling. Omit or use send to send when recipient, template,
             * and deduplication rules allow it. Use suppress when another system owns buyer
             * messaging. Value enum: "send", "suppress".
             */
            "buyer_notification_behavior": "send" | "suppress" | (string & {});
            /**
             * Timeline entry creation timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Subject status after the recorded transition. Value enum: "pending", "on_hold",
             * "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "accepted",
             * "preparing", "picked", "packed", "dispatched", "no_show", "created", "shipped",
             * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
             * "returned", "voided".
             */
            "current_status"?: "pending"
                | "on_hold"
                | "in_progress"
                | "ready"
                | "completed"
                | "canceled"
                | "failed"
                | "scheduled"
                | "accepted"
                | "preparing"
                | "picked"
                | "packed"
                | "dispatched"
                | "no_show"
                | "created"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            /** Free-form details attached to the event. * (Value): string. */
            "custom_details"?: Record<string, string>;
            /**
             * The delivery or fulfillment event recorded by this entry. Value enum:
             * "carrier_scan", "status_changed", "shipped", "in_transit", "out_for_delivery",
             * "delivered", "delivery_attempted", "tracking_updated", "exception", "returned",
             * "custom".
             */
            "event_type": "carrier_scan"
                | "status_changed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "tracking_updated"
                | "exception"
                | "returned"
                | "custom"
                | (string & {});
            /** Event identifier assigned by that integration. Example: "warehouse-1842". */
            "external_event_id"?: string;
            /** Status supplied by that integration before mapping to Flint's public status. */
            "external_status"?: string;
            /** Integration that supplied the event. */
            "external_system"?: string;
            /**
             * Unique identifier for this fulfillment event, prefixed `fev_`. Example:
             * "fev_01KEZF7C002XK9D7X3239ERT51".
             */
            "fulfillment_event_id": string;
            /**
             * ID of the fulfillment the event belongs to. Example:
             * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
             */
            "fulfillment_id": string;
            /** Where the event happened, such as `Louisville, KY`. */
            "location_description"?: string;
            /** Human-readable text describing the event. */
            "message"?: string;
            /** Provider event timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "occurred_at"?: string;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the fulfillment belongs to. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * ID of the package the event is attached to. Absent when it isn't attached to a
             * package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R".
             */
            "package_id"?: string;
            /**
             * Subject status before the recorded transition. Value enum: "pending", "on_hold",
             * "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "accepted",
             * "preparing", "picked", "packed", "dispatched", "no_show", "created", "shipped",
             * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
             * "returned", "voided".
             */
            "previous_status"?: "pending"
                | "on_hold"
                | "in_progress"
                | "ready"
                | "completed"
                | "canceled"
                | "failed"
                | "scheduled"
                | "accepted"
                | "preparing"
                | "picked"
                | "packed"
                | "dispatched"
                | "no_show"
                | "created"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            /**
             * How the transition changes fulfillment quantities. - `preserve`: Keeps the quantity
             * assigned without marking it fulfilled. - `fulfill`: Moves the quantity from assigned
             * to fulfilled. - `release`: Returns the assigned quantity for reassignment. Value
             * enum: "preserve", "fulfill", "release".
             */
            "quantity_effect"?: "preserve" | "fulfill" | "release" | (string & {});
            /**
             * Why the fulfillment was paused or an appointment was missed, when the transition
             * recorded a reason. Value enum: "address_issue", "customer_no_show",
             * "customer_request", "fraud_review", "inventory_issue", "location_unavailable",
             * "other", "payment_review", "provider_issue", "provider_no_show", "scheduling_error",
             * "scheduling_issue".
             */
            "reason"?: "address_issue"
                | "customer_no_show"
                | "customer_request"
                | "fraud_review"
                | "inventory_issue"
                | "location_unavailable"
                | "other"
                | "payment_review"
                | "provider_issue"
                | "provider_no_show"
                | "scheduling_error"
                | "scheduling_issue"
                | (string & {});
            /** The note supplied when this action was requested. */
            "reason_message"?: string;
            /** Flint receive timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at"?: string;
            /**
             * ID of the shipment the event is attached to. Absent when it isn't attached to a
             * shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
             */
            "shipment_id"?: string;
            /**
             * Which resource current_status and previous_status describe. - `fulfillment`: The
             * status belongs to the fulfillment named by fulfillment_id. - `shipment`: The status
             * belongs to the shipment named by shipment_id. - `package`: The status belongs to the
             * package named by package_id. Value enum: "fulfillment", "shipment", "package".
             */
            "subject_type": "fulfillment" | "shipment" | "package" | (string & {});
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "fulfillment_event.created". */
    "event_type"?: "fulfillment_event.created";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
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
});
/**
 * The `fulfillment_event.created` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type FulfillmentEventCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_notification_behavior (Required): string. Controls buyer
     * email handling. Omit or use send to send when recipient, template, and deduplication rules
     * allow it. Use suppress when another system owns buyer messaging. Value enum: "send",
     * "suppress". object.created_at (Required): string. Timeline entry creation timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.current_status (Optional): string.
     * Subject status after the recorded transition. Value enum: "pending", "on_hold",
     * "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "accepted",
     * "preparing", "picked", "packed", "dispatched", "no_show", "created", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". object.custom_details (Optional): Map of string. Free-form details
     * attached to the event. object.custom_details.* (Value): string. object.event_type
     * (Required): string. The delivery or fulfillment event recorded by this entry. Value enum:
     * "carrier_scan", "status_changed", "shipped", "in_transit", "out_for_delivery", "delivered",
     * "delivery_attempted", "tracking_updated", "exception", "returned", "custom".
     * object.external_event_id (Optional): string. Event identifier assigned by that integration.
     * Example: "warehouse-1842". object.external_status (Optional): string. Status supplied by
     * that integration before mapping to Flint's public status. object.external_system (Optional):
     * string. Integration that supplied the event. object.fulfillment_event_id (Required): string.
     * Unique identifier for this fulfillment event, prefixed `fev_`. Example:
     * "fev_01KEZF7C002XK9D7X3239ERT51". object.fulfillment_id (Required): string. ID of the
     * fulfillment the event belongs to. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     * object.location_description (Optional): string. Where the event happened, such as
     * `Louisville, KY`. object.message (Optional): string. Human-readable text describing the
     * event. object.occurred_at (Optional): string. Provider event timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.order (Optional): {@link ExpandedOrderSummary} or
     * null. Present only when `expand` includes `order`; `null` when expanded and there is no
     * related order. object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's
     * summary fields, including status, payment and refund status, and pricing and settlement
     * amounts, returned when the order is expanded. object.order.anyOf[2] (Value): null.
     * object.order_id (Required): string. ID of the order the fulfillment belongs to. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.package_id (Optional): string. ID of the package
     * the event is attached to. Absent when it isn't attached to a package. Example:
     * "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". object.previous_status (Optional): string. Subject status
     * before the recorded transition. Value enum: "pending", "on_hold", "in_progress", "ready",
     * "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked", "packed",
     * "dispatched", "no_show", "created", "shipped", "in_transit", "out_for_delivery",
     * "delivered", "delivery_attempted", "exception", "returned", "voided". object.quantity_effect
     * (Optional): string. How the transition changes fulfillment quantities. - `preserve`: Keeps
     * the quantity assigned without marking it fulfilled. - `fulfill`: Moves the quantity from
     * assigned to fulfilled. - `release`: Returns the assigned quantity for reassignment. Value
     * enum: "preserve", "fulfill", "release". object.reason (Optional): string. Why the
     * fulfillment was paused or an appointment was missed, when the transition recorded a reason.
     * Value enum: "address_issue", "customer_no_show", "customer_request", "fraud_review",
     * "inventory_issue", "location_unavailable", "other", "payment_review", "provider_issue",
     * "provider_no_show", "scheduling_error", "scheduling_issue". object.reason_message
     * (Optional): string. The note supplied when this action was requested. object.received_at
     * (Optional): string. Flint receive timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.shipment_id (Optional): string. ID of the shipment the event
     * is attached to. Absent when it isn't attached to a shipment. Example:
     * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.subject_type (Required): string. Which resource
     * current_status and previous_status describe. - `fulfillment`: The status belongs to the
     * fulfillment named by fulfillment_id. - `shipment`: The status belongs to the shipment named
     * by shipment_id. - `package`: The status belongs to the package named by package_id. Value
     * enum: "fulfillment", "shipment", "package".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_notification_behavior (Required): string. Controls buyer email handling. Omit or
         * use send to send when recipient, template, and deduplication rules allow it. Use
         * suppress when another system owns buyer messaging. Value enum: "send", "suppress".
         * created_at (Required): string. Timeline entry creation timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". current_status (Optional): string. Subject status after
         * the recorded transition. Value enum: "pending", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked",
         * "packed", "dispatched", "no_show", "created", "shipped", "in_transit",
         * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned",
         * "voided". custom_details (Optional): Map of string. Free-form details attached to the
         * event. custom_details.* (Value): string. event_type (Required): string. The delivery or
         * fulfillment event recorded by this entry. Value enum: "carrier_scan", "status_changed",
         * "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted",
         * "tracking_updated", "exception", "returned", "custom". external_event_id (Optional):
         * string. Event identifier assigned by that integration. Example: "warehouse-1842".
         * external_status (Optional): string. Status supplied by that integration before mapping
         * to Flint's public status. external_system (Optional): string. Integration that supplied
         * the event. fulfillment_event_id (Required): string. Unique identifier for this
         * fulfillment event, prefixed `fev_`. Example: "fev_01KEZF7C002XK9D7X3239ERT51".
         * fulfillment_id (Required): string. ID of the fulfillment the event belongs to. Example:
         * "ful_01KEZF7C00F24WVSTTWR1FQX5T". location_description (Optional): string. Where the
         * event happened, such as `Louisville, KY`. message (Optional): string. Human-readable
         * text describing the event. occurred_at (Optional): string. Provider event timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". order (Optional): {@link
         * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. ID of the order the
         * fulfillment belongs to. Example: "ord_01KEZF7C0054GQKJ142A8X367A". package_id
         * (Optional): string. ID of the package the event is attached to. Absent when it isn't
         * attached to a package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". previous_status
         * (Optional): string. Subject status before the recorded transition. Value enum:
         * "pending", "on_hold", "in_progress", "ready", "completed", "canceled", "failed",
         * "scheduled", "accepted", "preparing", "picked", "packed", "dispatched", "no_show",
         * "created", "shipped", "in_transit", "out_for_delivery", "delivered",
         * "delivery_attempted", "exception", "returned", "voided". quantity_effect (Optional):
         * string. How the transition changes fulfillment quantities. - `preserve`: Keeps the
         * quantity assigned without marking it fulfilled. - `fulfill`: Moves the quantity from
         * assigned to fulfilled. - `release`: Returns the assigned quantity for reassignment.
         * Value enum: "preserve", "fulfill", "release". reason (Optional): string. Why the
         * fulfillment was paused or an appointment was missed, when the transition recorded a
         * reason. Value enum: "address_issue", "customer_no_show", "customer_request",
         * "fraud_review", "inventory_issue", "location_unavailable", "other", "payment_review",
         * "provider_issue", "provider_no_show", "scheduling_error", "scheduling_issue".
         * reason_message (Optional): string. The note supplied when this action was requested.
         * received_at (Optional): string. Flint receive timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". shipment_id (Optional): string. ID of the shipment the event is
         * attached to. Absent when it isn't attached to a shipment. Example:
         * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". subject_type (Required): string. Which resource
         * current_status and previous_status describe. - `fulfillment`: The status belongs to the
         * fulfillment named by fulfillment_id. - `shipment`: The status belongs to the shipment
         * named by shipment_id. - `package`: The status belongs to the package named by
         * package_id. Value enum: "fulfillment", "shipment", "package".
         */
        "object": {
            /**
             * Controls buyer email handling. Omit or use send to send when recipient, template,
             * and deduplication rules allow it. Use suppress when another system owns buyer
             * messaging. Value enum: "send", "suppress".
             */
            "buyer_notification_behavior": "send" | "suppress" | (string & {});
            /**
             * Timeline entry creation timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Subject status after the recorded transition. Value enum: "pending", "on_hold",
             * "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "accepted",
             * "preparing", "picked", "packed", "dispatched", "no_show", "created", "shipped",
             * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
             * "returned", "voided".
             */
            "current_status"?: "pending"
                | "on_hold"
                | "in_progress"
                | "ready"
                | "completed"
                | "canceled"
                | "failed"
                | "scheduled"
                | "accepted"
                | "preparing"
                | "picked"
                | "packed"
                | "dispatched"
                | "no_show"
                | "created"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            /** Free-form details attached to the event. * (Value): string. */
            "custom_details"?: Record<string, string>;
            /**
             * The delivery or fulfillment event recorded by this entry. Value enum:
             * "carrier_scan", "status_changed", "shipped", "in_transit", "out_for_delivery",
             * "delivered", "delivery_attempted", "tracking_updated", "exception", "returned",
             * "custom".
             */
            "event_type": "carrier_scan"
                | "status_changed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "tracking_updated"
                | "exception"
                | "returned"
                | "custom"
                | (string & {});
            /** Event identifier assigned by that integration. Example: "warehouse-1842". */
            "external_event_id"?: string;
            /** Status supplied by that integration before mapping to Flint's public status. */
            "external_status"?: string;
            /** Integration that supplied the event. */
            "external_system"?: string;
            /**
             * Unique identifier for this fulfillment event, prefixed `fev_`. Example:
             * "fev_01KEZF7C002XK9D7X3239ERT51".
             */
            "fulfillment_event_id": string;
            /**
             * ID of the fulfillment the event belongs to. Example:
             * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
             */
            "fulfillment_id": string;
            /** Where the event happened, such as `Louisville, KY`. */
            "location_description"?: string;
            /** Human-readable text describing the event. */
            "message"?: string;
            /** Provider event timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "occurred_at"?: string;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the fulfillment belongs to. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * ID of the package the event is attached to. Absent when it isn't attached to a
             * package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R".
             */
            "package_id"?: string;
            /**
             * Subject status before the recorded transition. Value enum: "pending", "on_hold",
             * "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "accepted",
             * "preparing", "picked", "packed", "dispatched", "no_show", "created", "shipped",
             * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
             * "returned", "voided".
             */
            "previous_status"?: "pending"
                | "on_hold"
                | "in_progress"
                | "ready"
                | "completed"
                | "canceled"
                | "failed"
                | "scheduled"
                | "accepted"
                | "preparing"
                | "picked"
                | "packed"
                | "dispatched"
                | "no_show"
                | "created"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            /**
             * How the transition changes fulfillment quantities. - `preserve`: Keeps the quantity
             * assigned without marking it fulfilled. - `fulfill`: Moves the quantity from assigned
             * to fulfilled. - `release`: Returns the assigned quantity for reassignment. Value
             * enum: "preserve", "fulfill", "release".
             */
            "quantity_effect"?: "preserve" | "fulfill" | "release" | (string & {});
            /**
             * Why the fulfillment was paused or an appointment was missed, when the transition
             * recorded a reason. Value enum: "address_issue", "customer_no_show",
             * "customer_request", "fraud_review", "inventory_issue", "location_unavailable",
             * "other", "payment_review", "provider_issue", "provider_no_show", "scheduling_error",
             * "scheduling_issue".
             */
            "reason"?: "address_issue"
                | "customer_no_show"
                | "customer_request"
                | "fraud_review"
                | "inventory_issue"
                | "location_unavailable"
                | "other"
                | "payment_review"
                | "provider_issue"
                | "provider_no_show"
                | "scheduling_error"
                | "scheduling_issue"
                | (string & {});
            /** The note supplied when this action was requested. */
            "reason_message"?: string;
            /** Flint receive timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at"?: string;
            /**
             * ID of the shipment the event is attached to. Absent when it isn't attached to a
             * shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
             */
            "shipment_id"?: string;
            /**
             * Which resource current_status and previous_status describe. - `fulfillment`: The
             * status belongs to the fulfillment named by fulfillment_id. - `shipment`: The status
             * belongs to the shipment named by shipment_id. - `package`: The status belongs to the
             * package named by package_id. Value enum: "fulfillment", "shipment", "package".
             */
            "subject_type": "fulfillment" | "shipment" | "package" | (string & {});
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "fulfillment_event.created". */
    "event_type"?: "fulfillment_event.created";
});
/** A page of `FulfillmentEvent` objects. */
export type FulfillmentEventListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * FulfillmentEvent}. An action recorded during an order's fulfillment.
     */
    "data": Array<FulfillmentEvent>;
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
/** A response containing `FulfillmentEvent` data. */
export type FulfillmentEventResourceResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An action recorded
     * during an order's fulfillment.
     */
    "data": FulfillmentEvent;
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
export type FulfillmentEventsCreateParams = (InputValue<CreateFulfillmentEventRequestInput>)
    & {
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
export type FulfillmentEventsGetParams = {
    /**
     * Include related objects in the response. Supported expansions: order. Expansion requires
     * commerce.orders.read. Limits: at most 10 unique expand paths per request. [] enum: "order".
     * Value enum: "order". anyOf[1] (Value): Array of string. [] enum: "order". anyOf[1][]
     * (Value): string. Value enum: "order". anyOf[2] (Value): string. Value enum: "order".
     */
    "expand"?: InputValue<("order") | readonly ("order")[]>;
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
export type FulfillmentEventsListParams = {
    /**
     * Optional fulfillment ID filter. pattern: ^ful_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id"?: InputValue<string>;
    /**
     * Optional shipment ID filter. pattern: ^shp_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     */
    "shipment_id"?: InputValue<string>;
    /**
     * Optional package ID filter. pattern: ^pkg_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R".
     */
    "package_id"?: InputValue<string>;
    /**
     * Optional order ID filter. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: InputValue<string>;
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
     * Filter by fulfillment event type. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "carrier_scan", "status_changed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "tracking_updated", "exception",
     * "returned", "custom". Value enum: "carrier_scan", "status_changed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "tracking_updated", "exception",
     * "returned", "custom". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "carrier_scan", "status_changed", "shipped", "in_transit", "out_for_delivery", "delivered",
     * "delivery_attempted", "tracking_updated", "exception", "returned", "custom". anyOf[1][]
     * (Value): string. Value enum: "carrier_scan", "status_changed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "tracking_updated", "exception",
     * "returned", "custom". anyOf[2] (Value): string. Value enum: "carrier_scan",
     * "status_changed", "shipped", "in_transit", "out_for_delivery", "delivered",
     * "delivery_attempted", "tracking_updated", "exception", "returned", "custom".
     */
    "event_type"?: InputValue<("carrier_scan"
        | "status_changed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "tracking_updated"
        | "exception"
        | "returned"
        | "custom")
        | readonly ("carrier_scan"
        | "status_changed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "tracking_updated"
        | "exception"
        | "returned"
        | "custom")[]>;
    /** Filter by external system identifier. */
    "external_system"?: InputValue<string>;
    /** Filter by external provider event ID. Example: "warehouse-1842". */
    "external_event_id"?: InputValue<string>;
    /** Inclusive lower bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_before"?: InputValue<string | globalThis.Date>;
    /**
     * Field to sort by. Defaults to received_at; ties are broken by fulfillment_event_id. Default:
     * "received_at". Value enum: "received_at", "occurred_at".
     */
    "sort_by"?: InputValue<"received_at" | "occurred_at">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Include related objects in the response. Supported expansions: order. Include the requested
     * related resources using scoped batch reads for this page. Each relationship requires its
     * existing target read scopes. Expansion changes the representation without changing
     * pagination tokens. Limits: at most 10 unique expand paths per request. [] enum: "order".
     * Value enum: "order". anyOf[1] (Value): Array of string. [] enum: "order". anyOf[1][]
     * (Value): string. Value enum: "order". anyOf[2] (Value): string. Value enum: "order".
     */
    "expand"?: InputValue<("order") | readonly ("order")[]>;
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
export type FulfillmentFailedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_hold"?: FulfillmentHold;
            "charges"?: Array<FulfillmentChargeLink>;
            "completed_at"?: string;
            "created_at": string;
            "customer_id"?: string;
            "delivery_choice_group_id"?: string | null;
            "delivery_execution_leg_id"?: string | null;
            "delivery_method_id"?: string | null;
            "delivery_selection_id"?: string | null;
            "device_id"?: string;
            "digital_details"?: DigitalFulfillmentDetails;
            "dispatched_at"?: string;
            "external_reference_id"?: string;
            "fulfillment_id": string;
            "line_items": Array<FulfillmentLineItem>;
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            "location_id"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "order_number"?: string;
            "outcome"?: FulfillmentOutcome;
            "packages"?: Array<ExpandedPackageSummary>;
            "packed_at"?: string;
            "picked_at"?: string;
            "pickup_details"?: PickupFulfillmentDetails;
            "recipient"?: FulfillmentRecipient;
            "scheduled_start_at": string | null;
            "service_details"?: ServiceFulfillmentDetails;
            "shipment_details"?: ShipmentFulfillmentDetails;
            "shipments"?: Array<ExpandedShipmentSummary>;
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
            "terminal_at"?: string;
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "active_hold"?: ((FulfillmentHoldPreviousAttributes) | (null));
            "charges"?: ((Array<FulfillmentChargeLinkPreviousAttributes>) | (null));
            "completed_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "customer_id"?: ((string) | (null));
            "delivery_choice_group_id"?: ((string) | (null));
            "delivery_execution_leg_id"?: ((string) | (null));
            "delivery_method_id"?: ((string) | (null));
            "delivery_selection_id"?: ((string) | (null));
            "device_id"?: ((string) | (null));
            "digital_details"?: ((DigitalFulfillmentDetailsPreviousAttributes) | (null));
            "dispatched_at"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "fulfillment_id"?: ((string) | (null));
            "line_items"?: ((Array<FulfillmentLineItemPreviousAttributes>) | (null));
            "local_delivery_details"?: ((DeliveryFulfillmentDetailsPreviousAttributes) | (null));
            "location_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "order_number"?: ((string) | (null));
            "outcome"?: ((FulfillmentOutcomePreviousAttributes) | (null));
            "packages"?: ((Array<ExpandedPackageSummaryPreviousAttributes>) | (null));
            "packed_at"?: ((string) | (null));
            "picked_at"?: ((string) | (null));
            "pickup_details"?: ((PickupFulfillmentDetailsPreviousAttributes) | (null));
            "recipient"?: ((FulfillmentRecipientPreviousAttributes) | (null));
            "scheduled_start_at"?: ((string) | (null));
            "service_details"?: ((ServiceFulfillmentDetailsPreviousAttributes) | (null));
            "shipment_details"?: ((ShipmentFulfillmentDetailsPreviousAttributes) | (null));
            "shipments"?: ((Array<ExpandedShipmentSummaryPreviousAttributes>) | (null));
            "status"?: (("pending"
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
                | (string & {}))
                | (null));
            "supported_actions"?: ((Array<"accept"
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
                | (string & {})>)
                | (null));
            "terminal_at"?: ((string) | (null));
            "type"?: (("shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {}))
                | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "fulfillment.failed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_hold"?: FulfillmentHold;
            "charges"?: Array<FulfillmentChargeLink>;
            "completed_at"?: string;
            "created_at": string;
            "customer_id"?: string;
            "delivery_choice_group_id"?: string | null;
            "delivery_execution_leg_id"?: string | null;
            "delivery_method_id"?: string | null;
            "delivery_selection_id"?: string | null;
            "device_id"?: string;
            "digital_details"?: DigitalFulfillmentDetails;
            "dispatched_at"?: string;
            "external_reference_id"?: string;
            "fulfillment_id": string;
            "line_items": Array<FulfillmentLineItem>;
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            "location_id"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "order_number"?: string;
            "outcome"?: FulfillmentOutcome;
            "packages"?: Array<ExpandedPackageSummary>;
            "packed_at"?: string;
            "picked_at"?: string;
            "pickup_details"?: PickupFulfillmentDetails;
            "recipient"?: FulfillmentRecipient;
            "scheduled_start_at": string | null;
            "service_details"?: ServiceFulfillmentDetails;
            "shipment_details"?: ShipmentFulfillmentDetails;
            "shipments"?: Array<ExpandedShipmentSummary>;
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
            "terminal_at"?: string;
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "active_hold"?: ((FulfillmentHoldPreviousAttributes) | (null));
            "charges"?: ((Array<FulfillmentChargeLinkPreviousAttributes>) | (null));
            "completed_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "customer_id"?: ((string) | (null));
            "delivery_choice_group_id"?: ((string) | (null));
            "delivery_execution_leg_id"?: ((string) | (null));
            "delivery_method_id"?: ((string) | (null));
            "delivery_selection_id"?: ((string) | (null));
            "device_id"?: ((string) | (null));
            "digital_details"?: ((DigitalFulfillmentDetailsPreviousAttributes) | (null));
            "dispatched_at"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "fulfillment_id"?: ((string) | (null));
            "line_items"?: ((Array<FulfillmentLineItemPreviousAttributes>) | (null));
            "local_delivery_details"?: ((DeliveryFulfillmentDetailsPreviousAttributes) | (null));
            "location_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "order_number"?: ((string) | (null));
            "outcome"?: ((FulfillmentOutcomePreviousAttributes) | (null));
            "packages"?: ((Array<ExpandedPackageSummaryPreviousAttributes>) | (null));
            "packed_at"?: ((string) | (null));
            "picked_at"?: ((string) | (null));
            "pickup_details"?: ((PickupFulfillmentDetailsPreviousAttributes) | (null));
            "recipient"?: ((FulfillmentRecipientPreviousAttributes) | (null));
            "scheduled_start_at"?: ((string) | (null));
            "service_details"?: ((ServiceFulfillmentDetailsPreviousAttributes) | (null));
            "shipment_details"?: ((ShipmentFulfillmentDetailsPreviousAttributes) | (null));
            "shipments"?: ((Array<ExpandedShipmentSummaryPreviousAttributes>) | (null));
            "status"?: (("pending"
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
                | (string & {}))
                | (null));
            "supported_actions"?: ((Array<"accept"
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
                | (string & {})>)
                | (null));
            "terminal_at"?: ((string) | (null));
            "type"?: (("shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {}))
                | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "fulfillment.failed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "fulfillment.failed";
});
/**
 * The `fulfillment.failed` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type FulfillmentFailedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.active_hold (Optional): {@link FulfillmentHold}. Current hold
     * details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason,
     * who placed it, and when it became active. object.charges (Optional): Array of {@link
     * FulfillmentChargeLink}. Order charges associated with this fulfillment. object.charges[]
     * (Value): {@link FulfillmentChargeLink}. Links a fulfillment to an order charge by
     * `order_charge_id`. object.completed_at (Optional): string. When the fulfillment was
     * completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required):
     * string. When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.customer_id (Optional): string. Customer receiving this
     * fulfillment, when one is set. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.delivery_choice_group_id (Optional): string or null. Delivery choice group that
     * created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials. Example:
     * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". object.delivery_execution_leg_id (Optional): string or
     * null. Execution leg of the selected delivery option that created this fulfillment. `null`
     * when the merchant created the fulfillment or checkout created it without a delivery quote.
     * Always present with merchant credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
     * object.delivery_method_id (Optional): string or null. Delivery method chosen for this
     * fulfillment. `null` when the merchant created the fulfillment or checkout created it without
     * a delivery quote. Also `null` when it was created before this field was added. Always
     * present with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_selection_id (Optional): string or null. Delivery selection that created
     * this fulfillment. `null` when the merchant created the fulfillment or checkout created it
     * without a delivery quote. Always present with merchant credentials. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". object.device_id (Optional): string. Device associated
     * with the fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
     * object.digital_details (Optional): {@link DigitalFulfillmentDetails}. Delivery URL and
     * completion time for a digital fulfillment. Details of a digital fulfillment: when it was
     * delivered (`delivered_at`) and its `delivery_url`. object.dispatched_at (Optional): string.
     * First time this fulfillment reached dispatched. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.fulfillment_id (Required): string. Stable identifier of the
     * fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.line_items (Required): Array
     * of {@link FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment.
     * object.line_items[] (Value): {@link FulfillmentLineItem}. An order line item and quantity
     * included in a fulfillment, with the modifiers applied to it. object.local_delivery_details
     * (Optional): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
     * details for a local delivery fulfillment. Details of a local delivery fulfillment: courier,
     * timing window, instructions, and tracking. Some fields are omitted for credentials that
     * don't act for the verified customer. object.location_id (Optional): string. Merchant
     * location responsible for this fulfillment. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned key-value metadata associated
     * with the fulfillment. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.order (Optional): {@link ExpandedOrderSummary} or null. Order summary returned when
     * the order relationship is expanded. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.order_number
     * (Optional): string. Human-readable number of the order this fulfillment belongs to. Omitted
     * when the order has no number. object.outcome (Optional): {@link FulfillmentOutcome}.
     * Terminal outcome details. Present exactly when status is no_show. The terminal outcome
     * recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred.
     * object.packages (Optional): Array of {@link ExpandedPackageSummary}. Packages associated
     * with this fulfillment. object.packages[] (Value): {@link ExpandedPackageSummary}. A
     * package's summary fields, including carrier, tracking, status, and supported actions,
     * returned when the package is expanded. object.packed_at (Optional): string. First time this
     * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.picked_at (Optional): string. First time this fulfillment reached picked. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.pickup_details (Optional): {@link
     * PickupFulfillmentDetails}. Pickup window, pickup mode, and handoff times for a pickup
     * fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and
     * instructions name the store the buyer chose and the delivery method's pickup instructions.
     * The note the buyer left for the store is in recipient.instructions. object.recipient
     * (Optional): {@link FulfillmentRecipient}. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name,
     * email, phone, address, and handling instructions. object.scheduled_start_at (Required):
     * string or null. Derived start of the service schedule or pickup, local delivery, or shipment
     * window. Null when no schedule is booked, including digital fulfillments. Details remain the
     * authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and
     * last descending. Sorting by due_at compares this same value with nulls last ascending and
     * first descending. Ties use fulfillment_id in the same direction. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.service_details (Optional): {@link
     * ServiceFulfillmentDetails}. Schedule and completion details for a service fulfillment.
     * Details of a service fulfillment: the scheduled start and end, timezone, completion time,
     * and notes. object.shipment_details (Optional): {@link ShipmentFulfillmentDetails}. Shipping
     * schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments
     * with at least one value. Details of a shipment fulfillment: the shipping window, timezone,
     * and when the shipment was handed to the carrier. object.shipments (Optional): Array of
     * {@link ExpandedShipmentSummary}. Shipments associated with this fulfillment.
     * object.shipments[] (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields,
     * including direction, status, and package count, returned when the shipment is expanded.
     * object.status (Required): string. Current fulfillment lifecycle status. Read
     * supported_actions for available transitions. - `pending`: Work has not started and has not
     * been accepted. Approval may be required before work can begin. - `accepted`: The provider
     * accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the
     * hold to restore active_hold.previous_status, or use a supported forward action. -
     * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment
     * is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed
     * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
     * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason
     * before creating replacement work. - `scheduled`: The fulfillment is scheduled for its
     * recorded service window. - `preparing`: Warehouse or provider preparation is underway. -
     * `picked`: The assigned items have been picked. - `packed`: The assigned items have been
     * packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. -
     * `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value
     * enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     * object.supported_actions (Optional): Array of string. Read-only lifecycle actions accepted
     * now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty
     * when none are available. Values name the verb route with hyphens replaced by underscores.
     * Always present with merchant credentials. [] enum: "accept", "cancel", "complete",
     * "dispatch", "fail", "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
     * "mark_ready", "release_hold", "schedule", "start". object.supported_actions[] (Value):
     * string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". object.terminal_at (Optional): string. When the
     * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records
     * the state transition; completed_at records completion evidence supplied for the fulfillment.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string. How the
     * items are delivered: shipment, pickup, local delivery, digital delivery, or service. Value
     * enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover".
     * object.updated_at (Required): string. When the fulfillment was last updated, in RFC3339
     * format. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Monotonic fulfillment version for expected_version checks. Format: uint64. minimum:
     * 1. previous_attributes (Optional): object and {@link FulfillmentPreviousAttributes}.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.active_hold (Optional): {@link
     * FulfillmentHoldPreviousAttributes} or null. Current hold details. Present exactly when
     * status is on_hold. previous_attributes.active_hold.anyOf[1] (Value): {@link
     * FulfillmentHoldPreviousAttributes}. previous_attributes.active_hold.anyOf[2] (Value): null.
     * previous_attributes.charges (Optional): Array of {@link
     * FulfillmentChargeLinkPreviousAttributes} or null. Order charges associated with this
     * fulfillment. previous_attributes.charges.anyOf[1] (Value): Array of {@link
     * FulfillmentChargeLinkPreviousAttributes}. Order charges associated with this fulfillment.
     * previous_attributes.charges.anyOf[1][] (Value): {@link
     * FulfillmentChargeLinkPreviousAttributes}. previous_attributes.charges.anyOf[2] (Value):
     * null. previous_attributes.completed_at (Optional): string or null. When the fulfillment was
     * completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. previous_attributes.completed_at.anyOf[1] (Value): string. When the fulfillment
     * was completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.completed_at.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. When the fulfillment was created, in RFC3339 format.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the fulfillment was created,
     * in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.customer_id
     * (Optional): string or null. Customer receiving this fulfillment, when one is set.
     * previous_attributes.customer_id.anyOf[1] (Value): string. Customer receiving this
     * fulfillment, when one is set. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_choice_group_id (Optional): string or null. Delivery choice
     * group that created this fulfillment. `null` when the merchant created the fulfillment or
     * checkout created it without a delivery quote. Always present with merchant credentials.
     * previous_attributes.delivery_choice_group_id.anyOf[1] (Value): string. Delivery choice group
     * that created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials. Example:
     * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". previous_attributes.delivery_choice_group_id.anyOf[2]
     * (Value): null. previous_attributes.delivery_execution_leg_id (Optional): string or null.
     * Execution leg of the selected delivery option that created this fulfillment. `null` when the
     * merchant created the fulfillment or checkout created it without a delivery quote. Always
     * present with merchant credentials. previous_attributes.delivery_execution_leg_id.anyOf[1]
     * (Value): string. Execution leg of the selected delivery option that created this
     * fulfillment. `null` when the merchant created the fulfillment or checkout created it without
     * a delivery quote. Always present with merchant credentials. Example:
     * "dleg_01KEZF7C00VB59BKTRC8W4KR4M". previous_attributes.delivery_execution_leg_id.anyOf[2]
     * (Value): null. previous_attributes.delivery_method_id (Optional): string or null. Delivery
     * method chosen for this fulfillment. `null` when the merchant created the fulfillment or
     * checkout created it without a delivery quote. Also `null` when it was created before this
     * field was added. Always present with merchant credentials.
     * previous_attributes.delivery_method_id.anyOf[1] (Value): string. Delivery method chosen for
     * this fulfillment. `null` when the merchant created the fulfillment or checkout created it
     * without a delivery quote. Also `null` when it was created before this field was added.
     * Always present with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * previous_attributes.delivery_method_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_selection_id (Optional): string or null. Delivery selection
     * that created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials.
     * previous_attributes.delivery_selection_id.anyOf[1] (Value): string. Delivery selection that
     * created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". previous_attributes.delivery_selection_id.anyOf[2]
     * (Value): null. previous_attributes.device_id (Optional): string or null. Device associated
     * with the fulfillment, when one is recorded. previous_attributes.device_id.anyOf[1] (Value):
     * string. Device associated with the fulfillment, when one is recorded. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6". previous_attributes.device_id.anyOf[2] (Value): null.
     * previous_attributes.digital_details (Optional): {@link
     * DigitalFulfillmentDetailsPreviousAttributes} or null. Delivery URL and completion time for a
     * digital fulfillment. previous_attributes.digital_details.anyOf[1] (Value): {@link
     * DigitalFulfillmentDetailsPreviousAttributes}. previous_attributes.digital_details.anyOf[2]
     * (Value): null. previous_attributes.dispatched_at (Optional): string or null. First time this
     * fulfillment reached dispatched. previous_attributes.dispatched_at.anyOf[1] (Value): string.
     * First time this fulfillment reached dispatched. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.dispatched_at.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.fulfillment_id (Optional): string or null. Stable identifier of the
     * fulfillment. previous_attributes.fulfillment_id.anyOf[1] (Value): string. Stable identifier
     * of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     * previous_attributes.fulfillment_id.anyOf[2] (Value): null. previous_attributes.line_items
     * (Optional): Array of {@link FulfillmentLineItemPreviousAttributes} or null. Order lines and
     * quantities allocated to this fulfillment. previous_attributes.line_items.anyOf[1] (Value):
     * Array of {@link FulfillmentLineItemPreviousAttributes}. Order lines and quantities allocated
     * to this fulfillment. previous_attributes.line_items.anyOf[1][] (Value): {@link
     * FulfillmentLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2] (Value):
     * null. previous_attributes.local_delivery_details (Optional): {@link
     * DeliveryFulfillmentDetailsPreviousAttributes} or null. Courier, delivery window, and handoff
     * details for a local delivery fulfillment.
     * previous_attributes.local_delivery_details.anyOf[1] (Value): {@link
     * DeliveryFulfillmentDetailsPreviousAttributes}.
     * previous_attributes.local_delivery_details.anyOf[2] (Value): null.
     * previous_attributes.location_id (Optional): string or null. Merchant location responsible
     * for this fulfillment. previous_attributes.location_id.anyOf[1] (Value): string. Merchant
     * location responsible for this fulfillment. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.location_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned key-value metadata associated with the
     * fulfillment. previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary returned when the
     * order relationship is expanded. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. previous_attributes.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummaryPreviousAttributes}. previous_attributes.order.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. Order whose items this fulfillment
     * delivers. previous_attributes.order_id.anyOf[1] (Value): string. Order whose items this
     * fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * previous_attributes.order_id.anyOf[2] (Value): null. previous_attributes.order_number
     * (Optional): string or null. Human-readable number of the order this fulfillment belongs to.
     * Omitted when the order has no number. previous_attributes.order_number.anyOf[1] (Value):
     * string. Human-readable number of the order this fulfillment belongs to. Omitted when the
     * order has no number. previous_attributes.order_number.anyOf[2] (Value): null.
     * previous_attributes.outcome (Optional): {@link FulfillmentOutcomePreviousAttributes} or
     * null. Terminal outcome details. Present exactly when status is no_show.
     * previous_attributes.outcome.anyOf[1] (Value): {@link FulfillmentOutcomePreviousAttributes}.
     * previous_attributes.outcome.anyOf[2] (Value): null. previous_attributes.packages (Optional):
     * Array of {@link ExpandedPackageSummaryPreviousAttributes} or null. Packages associated with
     * this fulfillment. previous_attributes.packages.anyOf[1] (Value): Array of {@link
     * ExpandedPackageSummaryPreviousAttributes}. Packages associated with this fulfillment.
     * previous_attributes.packages.anyOf[1][] (Value): {@link
     * ExpandedPackageSummaryPreviousAttributes}. previous_attributes.packages.anyOf[2] (Value):
     * null. previous_attributes.packed_at (Optional): string or null. First time this fulfillment
     * reached packed. previous_attributes.packed_at.anyOf[1] (Value): string. First time this
     * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.packed_at.anyOf[2] (Value): null. previous_attributes.picked_at
     * (Optional): string or null. First time this fulfillment reached picked.
     * previous_attributes.picked_at.anyOf[1] (Value): string. First time this fulfillment reached
     * picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.picked_at.anyOf[2] (Value): null. previous_attributes.pickup_details
     * (Optional): {@link PickupFulfillmentDetailsPreviousAttributes} or null. Pickup window,
     * pickup mode, and handoff times for a pickup fulfillment.
     * previous_attributes.pickup_details.anyOf[1] (Value): {@link
     * PickupFulfillmentDetailsPreviousAttributes}. previous_attributes.pickup_details.anyOf[2]
     * (Value): null. previous_attributes.recipient (Optional): {@link
     * FulfillmentRecipientPreviousAttributes} or null. Omitted for a checkout session credential
     * that doesn't act for the customer the buyer verified. previous_attributes.recipient.anyOf[1]
     * (Value): {@link FulfillmentRecipientPreviousAttributes}.
     * previous_attributes.recipient.anyOf[2] (Value): null. previous_attributes.scheduled_start_at
     * (Optional): string or null. Derived start of the service schedule or pickup, local delivery,
     * or shipment window. Null when no schedule is booked, including digital fulfillments. Details
     * remain the authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first
     * ascending and last descending. Sorting by due_at compares this same value with nulls last
     * ascending and first descending. Ties use fulfillment_id in the same direction.
     * previous_attributes.scheduled_start_at.anyOf[1] (Value): string. Derived start of the
     * service schedule or pickup, local delivery, or shipment window. Null when no schedule is
     * booked, including digital fulfillments. Details remain the authoritative schedule inputs.
     * Sorting by scheduled_start_at puts nulls first ascending and last descending. Sorting by
     * due_at compares this same value with nulls last ascending and first descending. Ties use
     * fulfillment_id in the same direction. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.scheduled_start_at.anyOf[2] (Value): null.
     * previous_attributes.service_details (Optional): {@link
     * ServiceFulfillmentDetailsPreviousAttributes} or null. Schedule and completion details for a
     * service fulfillment. previous_attributes.service_details.anyOf[1] (Value): {@link
     * ServiceFulfillmentDetailsPreviousAttributes}. previous_attributes.service_details.anyOf[2]
     * (Value): null. previous_attributes.shipment_details (Optional): {@link
     * ShipmentFulfillmentDetailsPreviousAttributes} or null. Shipping schedule and ship time for a
     * shipment fulfillment. Present only on shipment fulfillments with at least one value.
     * previous_attributes.shipment_details.anyOf[1] (Value): {@link
     * ShipmentFulfillmentDetailsPreviousAttributes}. previous_attributes.shipment_details.anyOf[2]
     * (Value): null. previous_attributes.shipments (Optional): Array of {@link
     * ExpandedShipmentSummaryPreviousAttributes} or null. Shipments associated with this
     * fulfillment. previous_attributes.shipments.anyOf[1] (Value): Array of {@link
     * ExpandedShipmentSummaryPreviousAttributes}. Shipments associated with this fulfillment.
     * previous_attributes.shipments.anyOf[1][] (Value): {@link
     * ExpandedShipmentSummaryPreviousAttributes}. previous_attributes.shipments.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. Current fulfillment lifecycle
     * status. Read supported_actions for available transitions. - `pending`: Work has not started
     * and has not been accepted. Approval may be required before work can begin. - `accepted`: The
     * provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused.
     * Release the hold to restore active_hold.previous_status, or use a supported forward action.
     * - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
     * fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work
     * completed successfully. - `canceled`: The fulfillment was intentionally canceled and will
     * not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
     * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its
     * recorded service window. - `preparing`: Warehouse or provider preparation is underway. -
     * `picked`: The assigned items have been picked. - `packed`: The assigned items have been
     * packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. -
     * `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value
     * enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     * previous_attributes.status.anyOf[1] (Value): string. Current fulfillment lifecycle status.
     * Read supported_actions for available transitions. - `pending`: Work has not started and has
     * not been accepted. Approval may be required before work can begin. - `accepted`: The
     * provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused.
     * Release the hold to restore active_hold.previous_status, or use a supported forward action.
     * - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
     * fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work
     * completed successfully. - `canceled`: The fulfillment was intentionally canceled and will
     * not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
     * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its
     * recorded service window. - `preparing`: Warehouse or provider preparation is underway. -
     * `picked`: The assigned items have been picked. - `packed`: The assigned items have been
     * packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. -
     * `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value
     * enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Read-only lifecycle actions accepted now, based on the
     * fulfillment, its order payment status, holds, and shipment progress. Empty when none are
     * available. Values name the verb route with hyphens replaced by underscores. Always present
     * with merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
     * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". previous_attributes.supported_actions.anyOf[1] (Value):
     * Array of string. Read-only lifecycle actions accepted now, based on the fulfillment, its
     * order payment status, holds, and shipment progress. Empty when none are available. Values
     * name the verb route with hyphens replaced by underscores. Always present with merchant
     * credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". previous_attributes.supported_actions.anyOf[1][]
     * (Value): string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". previous_attributes.supported_actions.anyOf[2] (Value):
     * null. previous_attributes.terminal_at (Optional): string or null. When the fulfillment
     * entered a terminal state: completed, canceled, failed, or no_show. This records the state
     * transition; completed_at records completion evidence supplied for the fulfillment.
     * previous_attributes.terminal_at.anyOf[1] (Value): string. When the fulfillment entered a
     * terminal state: completed, canceled, failed, or no_show. This records the state transition;
     * completed_at records completion evidence supplied for the fulfillment. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.terminal_at.anyOf[2] (Value): null.
     * previous_attributes.type (Optional): string or null. How the items are delivered: shipment,
     * pickup, local delivery, digital delivery, or service. Value enum: "shipment", "pickup",
     * "local_delivery", "digital", "service", "handover". previous_attributes.type.anyOf[1]
     * (Value): string. How the items are delivered: shipment, pickup, local delivery, digital
     * delivery, or service. Value enum: "shipment", "pickup", "local_delivery", "digital",
     * "service", "handover". previous_attributes.type.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When the fulfillment was last
     * updated, in RFC3339 format. previous_attributes.updated_at.anyOf[1] (Value): string. When
     * the fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value): null.
     * previous_attributes.version (Optional): integer or null. Monotonic fulfillment version for
     * expected_version checks. previous_attributes.version.anyOf[1] (Value): integer. Monotonic
     * fulfillment version for expected_version checks. Format: uint64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * active_hold (Optional): {@link FulfillmentHold}. Current hold details. Present exactly
         * when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and
         * when it became active. charges (Optional): Array of {@link FulfillmentChargeLink}. Order
         * charges associated with this fulfillment. charges[] (Value): {@link
         * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
         * completed_at (Optional): string. When the fulfillment was completed. Mirrors the
         * completion time for its type: delivered_at for shipment, local delivery, and digital
         * fulfillments, picked_up_at for pickup, and service_details.completed_at for service
         * fulfillments. Omitted until a completion time is recorded. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When the fulfillment was created,
         * in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". customer_id
         * (Optional): string. Customer receiving this fulfillment, when one is set. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". delivery_choice_group_id (Optional): string or null.
         * Delivery choice group that created this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
         * delivery_execution_leg_id (Optional): string or null. Execution leg of the selected
         * delivery option that created this fulfillment. `null` when the merchant created the
         * fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M". delivery_method_id
         * (Optional): string or null. Delivery method chosen for this fulfillment. `null` when the
         * merchant created the fulfillment or checkout created it without a delivery quote. Also
         * `null` when it was created before this field was added. Always present with merchant
         * credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_id
         * (Optional): string or null. Delivery selection that created this fulfillment. `null`
         * when the merchant created the fulfillment or checkout created it without a delivery
         * quote. Always present with merchant credentials. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". device_id (Optional): string. Device associated with
         * the fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
         * digital_details (Optional): {@link DigitalFulfillmentDetails}. Delivery URL and
         * completion time for a digital fulfillment. Details of a digital fulfillment: when it was
         * delivered (`delivered_at`) and its `delivery_url`. dispatched_at (Optional): string.
         * First time this fulfillment reached dispatched. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". fulfillment_id (Required): string. Stable identifier of the
         * fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". line_items (Required): Array of
         * {@link FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment.
         * line_items[] (Value): {@link FulfillmentLineItem}. An order line item and quantity
         * included in a fulfillment, with the modifiers applied to it. local_delivery_details
         * (Optional): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
         * details for a local delivery fulfillment. Details of a local delivery fulfillment:
         * courier, timing window, instructions, and tracking. Some fields are omitted for
         * credentials that don't act for the verified customer. location_id (Optional): string.
         * Merchant location responsible for this fulfillment. Example:
         * "loc_01KEZF7C00CMHRRYA3MV996JB2". metadata (Optional): {@link MetadataMap}. Caller-owned
         * key-value metadata associated with the fulfillment. Caller-owned key-value data stored
         * on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
         * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before
         * those limits may not satisfy them. order (Optional): {@link ExpandedOrderSummary} or
         * null. Order summary returned when the order relationship is expanded. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. Order whose items this fulfillment delivers. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_number (Optional): string. Human-readable number
         * of the order this fulfillment belongs to. Omitted when the order has no number. outcome
         * (Optional): {@link FulfillmentOutcome}. Terminal outcome details. Present exactly when
         * status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show,
         * with its reason, notes, and when it occurred. packages (Optional): Array of {@link
         * ExpandedPackageSummary}. Packages associated with this fulfillment. packages[] (Value):
         * {@link ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
         * status, and supported actions, returned when the package is expanded. packed_at
         * (Optional): string. First time this fulfillment reached packed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". picked_at (Optional): string. First time this
         * fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * pickup_details (Optional): {@link PickupFulfillmentDetails}. Pickup window, pickup mode,
         * and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout
         * creates, location_name, address, and instructions name the store the buyer chose and the
         * delivery method's pickup instructions. The note the buyer left for the store is in
         * recipient.instructions. recipient (Optional): {@link FulfillmentRecipient}. Omitted for
         * a checkout session credential that doesn't act for the customer the buyer verified. The
         * recipient of a fulfillment, with name, email, phone, address, and handling instructions.
         * scheduled_start_at (Required): string or null. Derived start of the service schedule or
         * pickup, local delivery, or shipment window. Null when no schedule is booked, including
         * digital fulfillments. Details remain the authoritative schedule inputs. Sorting by
         * scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at
         * compares this same value with nulls last ascending and first descending. Ties use
         * fulfillment_id in the same direction. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_details (Optional): {@link ServiceFulfillmentDetails}.
         * Schedule and completion details for a service fulfillment. Details of a service
         * fulfillment: the scheduled start and end, timezone, completion time, and notes.
         * shipment_details (Optional): {@link ShipmentFulfillmentDetails}. Shipping schedule and
         * ship time for a shipment fulfillment. Present only on shipment fulfillments with at
         * least one value. Details of a shipment fulfillment: the shipping window, timezone, and
         * when the shipment was handed to the carrier. shipments (Optional): Array of {@link
         * ExpandedShipmentSummary}. Shipments associated with this fulfillment. shipments[]
         * (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields, including
         * direction, status, and package count, returned when the shipment is expanded. status
         * (Required): string. Current fulfillment lifecycle status. Read supported_actions for
         * available transitions. - `pending`: Work has not started and has not been accepted.
         * Approval may be required before work can begin. - `accepted`: The provider accepted the
         * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
         * restore active_hold.previous_status, or use a supported forward action. - `in_progress`:
         * Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready
         * for pickup, handoff, or completion. - `completed`: All fulfillment work completed
         * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
         * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
         * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for
         * its recorded service window. - `preparing`: Warehouse or provider preparation is
         * underway. - `picked`: The assigned items have been picked. - `packed`: The assigned
         * items have been packed. - `dispatched`: The fulfillment left its origin for delivery or
         * handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded
         * reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
         * "dispatched", "no_show". supported_actions (Optional): Array of string. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. Always present with merchant credentials. [] enum:
         * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
         * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
         * "schedule", "start". supported_actions[] (Value): string. Value enum: "accept",
         * "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed",
         * "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start".
         * terminal_at (Optional): string. When the fulfillment entered a terminal state:
         * completed, canceled, failed, or no_show. This records the state transition; completed_at
         * records completion evidence supplied for the fulfillment. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". type (Required): string. How the items are delivered: shipment,
         * pickup, local delivery, digital delivery, or service. Value enum: "shipment", "pickup",
         * "local_delivery", "digital", "service", "handover". updated_at (Required): string. When
         * the fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Monotonic fulfillment version for
         * expected_version checks. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current hold details. Present exactly when status is on_hold. A hold on a
             * fulfillment, with its reason, who placed it, and when it became active.
             */
            "active_hold"?: FulfillmentHold;
            /**
             * Order charges associated with this fulfillment. [] (Value): {@link
             * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
             */
            "charges"?: Array<FulfillmentChargeLink>;
            /**
             * When the fulfillment was completed. Mirrors the completion time for its type:
             * delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at
             * for pickup, and service_details.completed_at for service fulfillments. Omitted until
             * a completion time is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * Delivery choice group that created this fulfillment. `null` when the merchant
             * created the fulfillment or checkout created it without a delivery quote. Always
             * present with merchant credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
             */
            "delivery_choice_group_id"?: string | null;
            /**
             * Execution leg of the selected delivery option that created this fulfillment. `null`
             * when the merchant created the fulfillment or checkout created it without a delivery
             * quote. Always present with merchant credentials. Example:
             * "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
             */
            "delivery_execution_leg_id"?: string | null;
            /**
             * Delivery method chosen for this fulfillment. `null` when the merchant created the
             * fulfillment or checkout created it without a delivery quote. Also `null` when it was
             * created before this field was added. Always present with merchant credentials.
             * Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_id"?: string | null;
            /**
             * Delivery selection that created this fulfillment. `null` when the merchant created
             * the fulfillment or checkout created it without a delivery quote. Always present with
             * merchant credentials. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
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
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Stable identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
            "fulfillment_id": string;
            /**
             * Order lines and quantities allocated to this fulfillment. [] (Value): {@link
             * FulfillmentLineItem}. An order line item and quantity included in a fulfillment,
             * with the modifiers applied to it.
             */
            "line_items": Array<FulfillmentLineItem>;
            /**
             * Courier, delivery window, and handoff details for a local delivery fulfillment.
             * Details of a local delivery fulfillment: courier, timing window, instructions, and
             * tracking. Some fields are omitted for credentials that don't act for the verified
             * customer.
             */
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            /**
             * Merchant location responsible for this fulfillment. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id"?: string;
            /**
             * Caller-owned key-value metadata associated with the fulfillment. Caller-owned
             * key-value data stored on a resource. Keys starting with flint_ are reserved for
             * Flint and are not returned. Writes follow the limits on MetadataInput and
             * MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order whose items this fulfillment delivers. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * Human-readable number of the order this fulfillment belongs to. Omitted when the
             * order has no number.
             */
            "order_number"?: string;
            /**
             * Terminal outcome details. Present exactly when status is no_show. The terminal
             * outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and
             * when it occurred.
             */
            "outcome"?: FulfillmentOutcome;
            /**
             * Packages associated with this fulfillment. [] (Value): {@link
             * ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
             * status, and supported actions, returned when the package is expanded.
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
             * Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup
             * details. For a pickup that checkout creates, location_name, address, and
             * instructions name the store the buyer chose and the delivery method's pickup
             * instructions. The note the buyer left for the store is in recipient.instructions.
             */
            "pickup_details"?: PickupFulfillmentDetails;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The recipient of a fulfillment, with name, email, phone, address,
             * and handling instructions.
             */
            "recipient"?: FulfillmentRecipient;
            /**
             * Derived start of the service schedule or pickup, local delivery, or shipment window.
             * Null when no schedule is booked, including digital fulfillments. Details remain the
             * authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first
             * ascending and last descending. Sorting by due_at compares this same value with nulls
             * last ascending and first descending. Ties use fulfillment_id in the same direction.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_start_at": string | null;
            /**
             * Schedule and completion details for a service fulfillment. Details of a service
             * fulfillment: the scheduled start and end, timezone, completion time, and notes.
             */
            "service_details"?: ServiceFulfillmentDetails;
            /**
             * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
             * fulfillments with at least one value. Details of a shipment fulfillment: the
             * shipping window, timezone, and when the shipment was handed to the carrier.
             */
            "shipment_details"?: ShipmentFulfillmentDetails;
            /**
             * Shipments associated with this fulfillment. [] (Value): {@link
             * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status,
             * and package count, returned when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Current fulfillment lifecycle status. Read supported_actions for available
             * transitions. - `pending`: Work has not started and has not been accepted. Approval
             * may be required before work can begin. - `accepted`: The provider accepted the
             * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
             * restore active_hold.previous_status, or use a supported forward action. -
             * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
             * fulfillment is ready for pickup, handoff, or completion. - `completed`: All
             * fulfillment work completed successfully. - `canceled`: The fulfillment was
             * intentionally canceled and will not continue. - `failed`: The fulfillment could not
             * be completed. Resolve the recorded reason before creating replacement work. -
             * `scheduled`: The fulfillment is scheduled for its recorded service window. -
             * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
             * items have been picked. - `packed`: The assigned items have been packed. -
             * `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`:
             * A service appointment was missed. Read outcome for the recorded reason. Value enum:
             * "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
             * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
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
             * Read-only lifecycle actions accepted now, based on the fulfillment, its order
             * payment status, holds, and shipment progress. Empty when none are available. Values
             * name the verb route with hyphens replaced by underscores. Always present with
             * merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start". [] (Value): string. Value enum:
             * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
             * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
             * "schedule", "start".
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
             * When the fulfillment entered a terminal state: completed, canceled, failed, or
             * no_show. This records the state transition; completed_at records completion evidence
             * supplied for the fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "terminal_at"?: string;
            /**
             * How the items are delivered: shipment, pickup, local delivery, digital delivery, or
             * service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service",
             * "handover".
             */
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {});
            /**
             * When the fulfillment was last updated, in RFC3339 format. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum:
             * 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. active_hold (Optional): {@link
         * FulfillmentHoldPreviousAttributes} or null. Current hold details. Present exactly when
         * status is on_hold. active_hold.anyOf[1] (Value): {@link
         * FulfillmentHoldPreviousAttributes}. active_hold.anyOf[2] (Value): null. charges
         * (Optional): Array of {@link FulfillmentChargeLinkPreviousAttributes} or null. Order
         * charges associated with this fulfillment. charges.anyOf[1] (Value): Array of {@link
         * FulfillmentChargeLinkPreviousAttributes}. Order charges associated with this
         * fulfillment. charges.anyOf[1][] (Value): {@link
         * FulfillmentChargeLinkPreviousAttributes}. charges.anyOf[2] (Value): null. completed_at
         * (Optional): string or null. When the fulfillment was completed. Mirrors the completion
         * time for its type: delivered_at for shipment, local delivery, and digital fulfillments,
         * picked_up_at for pickup, and service_details.completed_at for service fulfillments.
         * Omitted until a completion time is recorded. completed_at.anyOf[1] (Value): string. When
         * the fulfillment was completed. Mirrors the completion time for its type: delivered_at
         * for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and
         * service_details.completed_at for service fulfillments. Omitted until a completion time
         * is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". completed_at.anyOf[2]
         * (Value): null. created_at (Optional): string or null. When the fulfillment was created,
         * in RFC3339 format. created_at.anyOf[1] (Value): string. When the fulfillment was
         * created, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. customer_id (Optional): string or null. Customer
         * receiving this fulfillment, when one is set. customer_id.anyOf[1] (Value): string.
         * Customer receiving this fulfillment, when one is set. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null.
         * delivery_choice_group_id (Optional): string or null. Delivery choice group that created
         * this fulfillment. `null` when the merchant created the fulfillment or checkout created
         * it without a delivery quote. Always present with merchant credentials.
         * delivery_choice_group_id.anyOf[1] (Value): string. Delivery choice group that created
         * this fulfillment. `null` when the merchant created the fulfillment or checkout created
         * it without a delivery quote. Always present with merchant credentials. Example:
         * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". delivery_choice_group_id.anyOf[2] (Value): null.
         * delivery_execution_leg_id (Optional): string or null. Execution leg of the selected
         * delivery option that created this fulfillment. `null` when the merchant created the
         * fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. delivery_execution_leg_id.anyOf[1] (Value): string. Execution leg
         * of the selected delivery option that created this fulfillment. `null` when the merchant
         * created the fulfillment or checkout created it without a delivery quote. Always present
         * with merchant credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
         * delivery_execution_leg_id.anyOf[2] (Value): null. delivery_method_id (Optional): string
         * or null. Delivery method chosen for this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Also `null` when it was
         * created before this field was added. Always present with merchant credentials.
         * delivery_method_id.anyOf[1] (Value): string. Delivery method chosen for this
         * fulfillment. `null` when the merchant created the fulfillment or checkout created it
         * without a delivery quote. Also `null` when it was created before this field was added.
         * Always present with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
         * delivery_method_id.anyOf[2] (Value): null. delivery_selection_id (Optional): string or
         * null. Delivery selection that created this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. delivery_selection_id.anyOf[1] (Value): string. Delivery selection
         * that created this fulfillment. `null` when the merchant created the fulfillment or
         * checkout created it without a delivery quote. Always present with merchant credentials.
         * Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". delivery_selection_id.anyOf[2] (Value):
         * null. device_id (Optional): string or null. Device associated with the fulfillment, when
         * one is recorded. device_id.anyOf[1] (Value): string. Device associated with the
         * fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
         * device_id.anyOf[2] (Value): null. digital_details (Optional): {@link
         * DigitalFulfillmentDetailsPreviousAttributes} or null. Delivery URL and completion time
         * for a digital fulfillment. digital_details.anyOf[1] (Value): {@link
         * DigitalFulfillmentDetailsPreviousAttributes}. digital_details.anyOf[2] (Value): null.
         * dispatched_at (Optional): string or null. First time this fulfillment reached
         * dispatched. dispatched_at.anyOf[1] (Value): string. First time this fulfillment reached
         * dispatched. Format: date-time. Example: "2026-08-02T16:00:00Z". dispatched_at.anyOf[2]
         * (Value): null. external_reference_id (Optional): string or null. Caller-owned identifier
         * for this resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. fulfillment_id
         * (Optional): string or null. Stable identifier of the fulfillment.
         * fulfillment_id.anyOf[1] (Value): string. Stable identifier of the fulfillment. Example:
         * "ful_01KEZF7C00F24WVSTTWR1FQX5T". fulfillment_id.anyOf[2] (Value): null. line_items
         * (Optional): Array of {@link FulfillmentLineItemPreviousAttributes} or null. Order lines
         * and quantities allocated to this fulfillment. line_items.anyOf[1] (Value): Array of
         * {@link FulfillmentLineItemPreviousAttributes}. Order lines and quantities allocated to
         * this fulfillment. line_items.anyOf[1][] (Value): {@link
         * FulfillmentLineItemPreviousAttributes}. line_items.anyOf[2] (Value): null.
         * local_delivery_details (Optional): {@link DeliveryFulfillmentDetailsPreviousAttributes}
         * or null. Courier, delivery window, and handoff details for a local delivery fulfillment.
         * local_delivery_details.anyOf[1] (Value): {@link
         * DeliveryFulfillmentDetailsPreviousAttributes}. local_delivery_details.anyOf[2] (Value):
         * null. location_id (Optional): string or null. Merchant location responsible for this
         * fulfillment. location_id.anyOf[1] (Value): string. Merchant location responsible for
         * this fulfillment. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". location_id.anyOf[2]
         * (Value): null. metadata (Optional): {@link MetadataMap} or null. Caller-owned key-value
         * metadata associated with the fulfillment. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. order (Optional): {@link
         * ExpandedOrderSummaryPreviousAttributes} or null. Order summary returned when the order
         * relationship is expanded. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. Order whose items this fulfillment delivers.
         * order_id.anyOf[1] (Value): string. Order whose items this fulfillment delivers. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. order_number
         * (Optional): string or null. Human-readable number of the order this fulfillment belongs
         * to. Omitted when the order has no number. order_number.anyOf[1] (Value): string.
         * Human-readable number of the order this fulfillment belongs to. Omitted when the order
         * has no number. order_number.anyOf[2] (Value): null. outcome (Optional): {@link
         * FulfillmentOutcomePreviousAttributes} or null. Terminal outcome details. Present exactly
         * when status is no_show. outcome.anyOf[1] (Value): {@link
         * FulfillmentOutcomePreviousAttributes}. outcome.anyOf[2] (Value): null. packages
         * (Optional): Array of {@link ExpandedPackageSummaryPreviousAttributes} or null. Packages
         * associated with this fulfillment. packages.anyOf[1] (Value): Array of {@link
         * ExpandedPackageSummaryPreviousAttributes}. Packages associated with this fulfillment.
         * packages.anyOf[1][] (Value): {@link ExpandedPackageSummaryPreviousAttributes}.
         * packages.anyOf[2] (Value): null. packed_at (Optional): string or null. First time this
         * fulfillment reached packed. packed_at.anyOf[1] (Value): string. First time this
         * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * packed_at.anyOf[2] (Value): null. picked_at (Optional): string or null. First time this
         * fulfillment reached picked. picked_at.anyOf[1] (Value): string. First time this
         * fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * picked_at.anyOf[2] (Value): null. pickup_details (Optional): {@link
         * PickupFulfillmentDetailsPreviousAttributes} or null. Pickup window, pickup mode, and
         * handoff times for a pickup fulfillment. pickup_details.anyOf[1] (Value): {@link
         * PickupFulfillmentDetailsPreviousAttributes}. pickup_details.anyOf[2] (Value): null.
         * recipient (Optional): {@link FulfillmentRecipientPreviousAttributes} or null. Omitted
         * for a checkout session credential that doesn't act for the customer the buyer verified.
         * recipient.anyOf[1] (Value): {@link FulfillmentRecipientPreviousAttributes}.
         * recipient.anyOf[2] (Value): null. scheduled_start_at (Optional): string or null. Derived
         * start of the service schedule or pickup, local delivery, or shipment window. Null when
         * no schedule is booked, including digital fulfillments. Details remain the authoritative
         * schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last
         * descending. Sorting by due_at compares this same value with nulls last ascending and
         * first descending. Ties use fulfillment_id in the same direction.
         * scheduled_start_at.anyOf[1] (Value): string. Derived start of the service schedule or
         * pickup, local delivery, or shipment window. Null when no schedule is booked, including
         * digital fulfillments. Details remain the authoritative schedule inputs. Sorting by
         * scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at
         * compares this same value with nulls last ascending and first descending. Ties use
         * fulfillment_id in the same direction. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". scheduled_start_at.anyOf[2] (Value): null. service_details
         * (Optional): {@link ServiceFulfillmentDetailsPreviousAttributes} or null. Schedule and
         * completion details for a service fulfillment. service_details.anyOf[1] (Value): {@link
         * ServiceFulfillmentDetailsPreviousAttributes}. service_details.anyOf[2] (Value): null.
         * shipment_details (Optional): {@link ShipmentFulfillmentDetailsPreviousAttributes} or
         * null. Shipping schedule and ship time for a shipment fulfillment. Present only on
         * shipment fulfillments with at least one value. shipment_details.anyOf[1] (Value): {@link
         * ShipmentFulfillmentDetailsPreviousAttributes}. shipment_details.anyOf[2] (Value): null.
         * shipments (Optional): Array of {@link ExpandedShipmentSummaryPreviousAttributes} or
         * null. Shipments associated with this fulfillment. shipments.anyOf[1] (Value): Array of
         * {@link ExpandedShipmentSummaryPreviousAttributes}. Shipments associated with this
         * fulfillment. shipments.anyOf[1][] (Value): {@link
         * ExpandedShipmentSummaryPreviousAttributes}. shipments.anyOf[2] (Value): null. status
         * (Optional): string or null. Current fulfillment lifecycle status. Read supported_actions
         * for available transitions. - `pending`: Work has not started and has not been accepted.
         * Approval may be required before work can begin. - `accepted`: The provider accepted the
         * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
         * restore active_hold.previous_status, or use a supported forward action. - `in_progress`:
         * Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready
         * for pickup, handoff, or completion. - `completed`: All fulfillment work completed
         * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
         * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
         * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for
         * its recorded service window. - `preparing`: Warehouse or provider preparation is
         * underway. - `picked`: The assigned items have been picked. - `packed`: The assigned
         * items have been packed. - `dispatched`: The fulfillment left its origin for delivery or
         * handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded
         * reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
         * "dispatched", "no_show". status.anyOf[1] (Value): string. Current fulfillment lifecycle
         * status. Read supported_actions for available transitions. - `pending`: Work has not
         * started and has not been accepted. Approval may be required before work can begin. -
         * `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`:
         * Work is paused. Release the hold to restore active_hold.previous_status, or use a
         * supported forward action. - `in_progress`: Work has started and is not yet ready or
         * complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
         * `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment
         * was intentionally canceled and will not continue. - `failed`: The fulfillment could not
         * be completed. Resolve the recorded reason before creating replacement work. -
         * `scheduled`: The fulfillment is scheduled for its recorded service window. -
         * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
         * items have been picked. - `packed`: The assigned items have been packed. - `dispatched`:
         * The fulfillment left its origin for delivery or handoff. - `no_show`: A service
         * appointment was missed. Read outcome for the recorded reason. Value enum: "pending",
         * "accepted", "on_hold", "in_progress", "ready", "completed", "canceled", "failed",
         * "scheduled", "preparing", "picked", "packed", "dispatched", "no_show". status.anyOf[2]
         * (Value): null. supported_actions (Optional): Array of string or null. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. Always present with merchant credentials. [] enum:
         * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
         * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
         * "schedule", "start". supported_actions.anyOf[1] (Value): Array of string. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. Always present with merchant credentials. [] enum:
         * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
         * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
         * "schedule", "start". supported_actions.anyOf[1][] (Value): string. Value enum: "accept",
         * "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed",
         * "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start".
         * supported_actions.anyOf[2] (Value): null. terminal_at (Optional): string or null. When
         * the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This
         * records the state transition; completed_at records completion evidence supplied for the
         * fulfillment. terminal_at.anyOf[1] (Value): string. When the fulfillment entered a
         * terminal state: completed, canceled, failed, or no_show. This records the state
         * transition; completed_at records completion evidence supplied for the fulfillment.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". terminal_at.anyOf[2] (Value): null.
         * type (Optional): string or null. How the items are delivered: shipment, pickup, local
         * delivery, digital delivery, or service. Value enum: "shipment", "pickup",
         * "local_delivery", "digital", "service", "handover". type.anyOf[1] (Value): string. How
         * the items are delivered: shipment, pickup, local delivery, digital delivery, or service.
         * Value enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover".
         * type.anyOf[2] (Value): null. updated_at (Optional): string or null. When the fulfillment
         * was last updated, in RFC3339 format. updated_at.anyOf[1] (Value): string. When the
         * fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Monotonic fulfillment version for expected_version checks. version.anyOf[1]
         * (Value): integer. Monotonic fulfillment version for expected_version checks. Format:
         * uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Current hold details. Present exactly when status is on_hold. anyOf[1] (Value):
             * {@link FulfillmentHoldPreviousAttributes}. anyOf[2] (Value): null.
             */
            "active_hold"?: ((FulfillmentHoldPreviousAttributes) | (null));
            /**
             * Order charges associated with this fulfillment. anyOf[1] (Value): Array of {@link
             * FulfillmentChargeLinkPreviousAttributes}. Order charges associated with this
             * fulfillment. anyOf[1][] (Value): {@link FulfillmentChargeLinkPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "charges"?: ((Array<FulfillmentChargeLinkPreviousAttributes>) | (null));
            /**
             * When the fulfillment was completed. Mirrors the completion time for its type:
             * delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at
             * for pickup, and service_details.completed_at for service fulfillments. Omitted until
             * a completion time is recorded. anyOf[1] (Value): string. When the fulfillment was
             * completed. Mirrors the completion time for its type: delivered_at for shipment,
             * local delivery, and digital fulfillments, picked_up_at for pickup, and
             * service_details.completed_at for service fulfillments. Omitted until a completion
             * time is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
             * (Value): null.
             */
            "completed_at"?: ((string) | (null));
            /**
             * When the fulfillment was created, in RFC3339 format. anyOf[1] (Value): string. When
             * the fulfillment was created, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Customer receiving this fulfillment, when one is set. anyOf[1] (Value): string.
             * Customer receiving this fulfillment, when one is set. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * Delivery choice group that created this fulfillment. `null` when the merchant
             * created the fulfillment or checkout created it without a delivery quote. Always
             * present with merchant credentials. anyOf[1] (Value): string. Delivery choice group
             * that created this fulfillment. `null` when the merchant created the fulfillment or
             * checkout created it without a delivery quote. Always present with merchant
             * credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". anyOf[2] (Value): null.
             */
            "delivery_choice_group_id"?: ((string) | (null));
            /**
             * Execution leg of the selected delivery option that created this fulfillment. `null`
             * when the merchant created the fulfillment or checkout created it without a delivery
             * quote. Always present with merchant credentials. anyOf[1] (Value): string. Execution
             * leg of the selected delivery option that created this fulfillment. `null` when the
             * merchant created the fulfillment or checkout created it without a delivery quote.
             * Always present with merchant credentials. Example:
             * "dleg_01KEZF7C00VB59BKTRC8W4KR4M". anyOf[2] (Value): null.
             */
            "delivery_execution_leg_id"?: ((string) | (null));
            /**
             * Delivery method chosen for this fulfillment. `null` when the merchant created the
             * fulfillment or checkout created it without a delivery quote. Also `null` when it was
             * created before this field was added. Always present with merchant credentials.
             * anyOf[1] (Value): string. Delivery method chosen for this fulfillment. `null` when
             * the merchant created the fulfillment or checkout created it without a delivery
             * quote. Also `null` when it was created before this field was added. Always present
             * with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2]
             * (Value): null.
             */
            "delivery_method_id"?: ((string) | (null));
            /**
             * Delivery selection that created this fulfillment. `null` when the merchant created
             * the fulfillment or checkout created it without a delivery quote. Always present with
             * merchant credentials. anyOf[1] (Value): string. Delivery selection that created this
             * fulfillment. `null` when the merchant created the fulfillment or checkout created it
             * without a delivery quote. Always present with merchant credentials. Example:
             * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[2] (Value): null.
             */
            "delivery_selection_id"?: ((string) | (null));
            /**
             * Device associated with the fulfillment, when one is recorded. anyOf[1] (Value):
             * string. Device associated with the fulfillment, when one is recorded. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6". anyOf[2] (Value): null.
             */
            "device_id"?: ((string) | (null));
            /**
             * Delivery URL and completion time for a digital fulfillment. anyOf[1] (Value): {@link
             * DigitalFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "digital_details"?: ((DigitalFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * First time this fulfillment reached dispatched. anyOf[1] (Value): string. First time
             * this fulfillment reached dispatched. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "dispatched_at"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Stable identifier of the fulfillment. anyOf[1] (Value): string. Stable identifier of
             * the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". anyOf[2] (Value): null.
             */
            "fulfillment_id"?: ((string) | (null));
            /**
             * Order lines and quantities allocated to this fulfillment. anyOf[1] (Value): Array of
             * {@link FulfillmentLineItemPreviousAttributes}. Order lines and quantities allocated
             * to this fulfillment. anyOf[1][] (Value): {@link
             * FulfillmentLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<FulfillmentLineItemPreviousAttributes>) | (null));
            /**
             * Courier, delivery window, and handoff details for a local delivery fulfillment.
             * anyOf[1] (Value): {@link DeliveryFulfillmentDetailsPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "local_delivery_details"?: ((DeliveryFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Merchant location responsible for this fulfillment. anyOf[1] (Value): string.
             * Merchant location responsible for this fulfillment. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
             */
            "location_id"?: ((string) | (null));
            /**
             * Caller-owned key-value metadata associated with the fulfillment. anyOf[1] (Value):
             * {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * Order whose items this fulfillment delivers. anyOf[1] (Value): string. Order whose
             * items this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2]
             * (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * Human-readable number of the order this fulfillment belongs to. Omitted when the
             * order has no number. anyOf[1] (Value): string. Human-readable number of the order
             * this fulfillment belongs to. Omitted when the order has no number. anyOf[2] (Value):
             * null.
             */
            "order_number"?: ((string) | (null));
            /**
             * Terminal outcome details. Present exactly when status is no_show. anyOf[1] (Value):
             * {@link FulfillmentOutcomePreviousAttributes}. anyOf[2] (Value): null.
             */
            "outcome"?: ((FulfillmentOutcomePreviousAttributes) | (null));
            /**
             * Packages associated with this fulfillment. anyOf[1] (Value): Array of {@link
             * ExpandedPackageSummaryPreviousAttributes}. Packages associated with this
             * fulfillment. anyOf[1][] (Value): {@link ExpandedPackageSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "packages"?: ((Array<ExpandedPackageSummaryPreviousAttributes>) | (null));
            /**
             * First time this fulfillment reached packed. anyOf[1] (Value): string. First time
             * this fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "packed_at"?: ((string) | (null));
            /**
             * First time this fulfillment reached picked. anyOf[1] (Value): string. First time
             * this fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "picked_at"?: ((string) | (null));
            /**
             * Pickup window, pickup mode, and handoff times for a pickup fulfillment. anyOf[1]
             * (Value): {@link PickupFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "pickup_details"?: ((PickupFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. anyOf[1] (Value): {@link FulfillmentRecipientPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "recipient"?: ((FulfillmentRecipientPreviousAttributes) | (null));
            /**
             * Derived start of the service schedule or pickup, local delivery, or shipment window.
             * Null when no schedule is booked, including digital fulfillments. Details remain the
             * authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first
             * ascending and last descending. Sorting by due_at compares this same value with nulls
             * last ascending and first descending. Ties use fulfillment_id in the same direction.
             * anyOf[1] (Value): string. Derived start of the service schedule or pickup, local
             * delivery, or shipment window. Null when no schedule is booked, including digital
             * fulfillments. Details remain the authoritative schedule inputs. Sorting by
             * scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at
             * compares this same value with nulls last ascending and first descending. Ties use
             * fulfillment_id in the same direction. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "scheduled_start_at"?: ((string) | (null));
            /**
             * Schedule and completion details for a service fulfillment. anyOf[1] (Value): {@link
             * ServiceFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "service_details"?: ((ServiceFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
             * fulfillments with at least one value. anyOf[1] (Value): {@link
             * ShipmentFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "shipment_details"?: ((ShipmentFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Shipments associated with this fulfillment. anyOf[1] (Value): Array of {@link
             * ExpandedShipmentSummaryPreviousAttributes}. Shipments associated with this
             * fulfillment. anyOf[1][] (Value): {@link ExpandedShipmentSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "shipments"?: ((Array<ExpandedShipmentSummaryPreviousAttributes>) | (null));
            /**
             * Current fulfillment lifecycle status. Read supported_actions for available
             * transitions. - `pending`: Work has not started and has not been accepted. Approval
             * may be required before work can begin. - `accepted`: The provider accepted the
             * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
             * restore active_hold.previous_status, or use a supported forward action. -
             * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
             * fulfillment is ready for pickup, handoff, or completion. - `completed`: All
             * fulfillment work completed successfully. - `canceled`: The fulfillment was
             * intentionally canceled and will not continue. - `failed`: The fulfillment could not
             * be completed. Resolve the recorded reason before creating replacement work. -
             * `scheduled`: The fulfillment is scheduled for its recorded service window. -
             * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
             * items have been picked. - `packed`: The assigned items have been packed. -
             * `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`:
             * A service appointment was missed. Read outcome for the recorded reason. Value enum:
             * "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
             * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
             * anyOf[1] (Value): string. Current fulfillment lifecycle status. Read
             * supported_actions for available transitions. - `pending`: Work has not started and
             * has not been accepted. Approval may be required before work can begin. - `accepted`:
             * The provider accepted the fulfillment; work has not started. - `on_hold`: Work is
             * paused. Release the hold to restore active_hold.previous_status, or use a supported
             * forward action. - `in_progress`: Work has started and is not yet ready or complete.
             * - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
             * `completed`: All fulfillment work completed successfully. - `canceled`: The
             * fulfillment was intentionally canceled and will not continue. - `failed`: The
             * fulfillment could not be completed. Resolve the recorded reason before creating
             * replacement work. - `scheduled`: The fulfillment is scheduled for its recorded
             * service window. - `preparing`: Warehouse or provider preparation is underway. -
             * `picked`: The assigned items have been picked. - `packed`: The assigned items have
             * been packed. - `dispatched`: The fulfillment left its origin for delivery or
             * handoff. - `no_show`: A service appointment was missed. Read outcome for the
             * recorded reason. Value enum: "pending", "accepted", "on_hold", "in_progress",
             * "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked",
             * "packed", "dispatched", "no_show". anyOf[2] (Value): null.
             */
            "status"?: (("pending"
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
                | (string & {}))
                | (null));
            /**
             * Read-only lifecycle actions accepted now, based on the fulfillment, its order
             * payment status, holds, and shipment progress. Empty when none are available. Values
             * name the verb route with hyphens replaced by underscores. Always present with
             * merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start". anyOf[1] (Value): Array of
             * string. Read-only lifecycle actions accepted now, based on the fulfillment, its
             * order payment status, holds, and shipment progress. Empty when none are available.
             * Values name the verb route with hyphens replaced by underscores. Always present with
             * merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start". anyOf[1][] (Value): string. Value
             * enum: "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
             * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
             * "schedule", "start". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"accept"
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
                | (string & {})>)
                | (null));
            /**
             * When the fulfillment entered a terminal state: completed, canceled, failed, or
             * no_show. This records the state transition; completed_at records completion evidence
             * supplied for the fulfillment. anyOf[1] (Value): string. When the fulfillment entered
             * a terminal state: completed, canceled, failed, or no_show. This records the state
             * transition; completed_at records completion evidence supplied for the fulfillment.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "terminal_at"?: ((string) | (null));
            /**
             * How the items are delivered: shipment, pickup, local delivery, digital delivery, or
             * service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service",
             * "handover". anyOf[1] (Value): string. How the items are delivered: shipment, pickup,
             * local delivery, digital delivery, or service. Value enum: "shipment", "pickup",
             * "local_delivery", "digital", "service", "handover". anyOf[2] (Value): null.
             */
            "type"?: (("shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {}))
                | (null));
            /**
             * When the fulfillment was last updated, in RFC3339 format. anyOf[1] (Value): string.
             * When the fulfillment was last updated, in RFC3339 format. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Monotonic fulfillment version for expected_version checks. anyOf[1] (Value):
             * integer. Monotonic fulfillment version for expected_version checks. Format: uint64.
             * minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "fulfillment.failed". */
    "event_type"?: "fulfillment.failed";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
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
});
/**
 * The `fulfillment.failed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type FulfillmentFailedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.active_hold (Optional): {@link FulfillmentHold}. Current hold
     * details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason,
     * who placed it, and when it became active. object.charges (Optional): Array of {@link
     * FulfillmentChargeLink}. Order charges associated with this fulfillment. object.charges[]
     * (Value): {@link FulfillmentChargeLink}. Links a fulfillment to an order charge by
     * `order_charge_id`. object.completed_at (Optional): string. When the fulfillment was
     * completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required):
     * string. When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.customer_id (Optional): string. Customer receiving this
     * fulfillment, when one is set. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.delivery_choice_group_id (Optional): string or null. Delivery choice group that
     * created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials. Example:
     * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". object.delivery_execution_leg_id (Optional): string or
     * null. Execution leg of the selected delivery option that created this fulfillment. `null`
     * when the merchant created the fulfillment or checkout created it without a delivery quote.
     * Always present with merchant credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
     * object.delivery_method_id (Optional): string or null. Delivery method chosen for this
     * fulfillment. `null` when the merchant created the fulfillment or checkout created it without
     * a delivery quote. Also `null` when it was created before this field was added. Always
     * present with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_selection_id (Optional): string or null. Delivery selection that created
     * this fulfillment. `null` when the merchant created the fulfillment or checkout created it
     * without a delivery quote. Always present with merchant credentials. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". object.device_id (Optional): string. Device associated
     * with the fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
     * object.digital_details (Optional): {@link DigitalFulfillmentDetails}. Delivery URL and
     * completion time for a digital fulfillment. Details of a digital fulfillment: when it was
     * delivered (`delivered_at`) and its `delivery_url`. object.dispatched_at (Optional): string.
     * First time this fulfillment reached dispatched. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.fulfillment_id (Required): string. Stable identifier of the
     * fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.line_items (Required): Array
     * of {@link FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment.
     * object.line_items[] (Value): {@link FulfillmentLineItem}. An order line item and quantity
     * included in a fulfillment, with the modifiers applied to it. object.local_delivery_details
     * (Optional): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
     * details for a local delivery fulfillment. Details of a local delivery fulfillment: courier,
     * timing window, instructions, and tracking. Some fields are omitted for credentials that
     * don't act for the verified customer. object.location_id (Optional): string. Merchant
     * location responsible for this fulfillment. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned key-value metadata associated
     * with the fulfillment. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.order (Optional): {@link ExpandedOrderSummary} or null. Order summary returned when
     * the order relationship is expanded. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.order_number
     * (Optional): string. Human-readable number of the order this fulfillment belongs to. Omitted
     * when the order has no number. object.outcome (Optional): {@link FulfillmentOutcome}.
     * Terminal outcome details. Present exactly when status is no_show. The terminal outcome
     * recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred.
     * object.packages (Optional): Array of {@link ExpandedPackageSummary}. Packages associated
     * with this fulfillment. object.packages[] (Value): {@link ExpandedPackageSummary}. A
     * package's summary fields, including carrier, tracking, status, and supported actions,
     * returned when the package is expanded. object.packed_at (Optional): string. First time this
     * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.picked_at (Optional): string. First time this fulfillment reached picked. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.pickup_details (Optional): {@link
     * PickupFulfillmentDetails}. Pickup window, pickup mode, and handoff times for a pickup
     * fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and
     * instructions name the store the buyer chose and the delivery method's pickup instructions.
     * The note the buyer left for the store is in recipient.instructions. object.recipient
     * (Optional): {@link FulfillmentRecipient}. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name,
     * email, phone, address, and handling instructions. object.scheduled_start_at (Required):
     * string or null. Derived start of the service schedule or pickup, local delivery, or shipment
     * window. Null when no schedule is booked, including digital fulfillments. Details remain the
     * authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and
     * last descending. Sorting by due_at compares this same value with nulls last ascending and
     * first descending. Ties use fulfillment_id in the same direction. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.service_details (Optional): {@link
     * ServiceFulfillmentDetails}. Schedule and completion details for a service fulfillment.
     * Details of a service fulfillment: the scheduled start and end, timezone, completion time,
     * and notes. object.shipment_details (Optional): {@link ShipmentFulfillmentDetails}. Shipping
     * schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments
     * with at least one value. Details of a shipment fulfillment: the shipping window, timezone,
     * and when the shipment was handed to the carrier. object.shipments (Optional): Array of
     * {@link ExpandedShipmentSummary}. Shipments associated with this fulfillment.
     * object.shipments[] (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields,
     * including direction, status, and package count, returned when the shipment is expanded.
     * object.status (Required): string. Current fulfillment lifecycle status. Read
     * supported_actions for available transitions. - `pending`: Work has not started and has not
     * been accepted. Approval may be required before work can begin. - `accepted`: The provider
     * accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the
     * hold to restore active_hold.previous_status, or use a supported forward action. -
     * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment
     * is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed
     * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
     * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason
     * before creating replacement work. - `scheduled`: The fulfillment is scheduled for its
     * recorded service window. - `preparing`: Warehouse or provider preparation is underway. -
     * `picked`: The assigned items have been picked. - `packed`: The assigned items have been
     * packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. -
     * `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value
     * enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     * object.supported_actions (Optional): Array of string. Read-only lifecycle actions accepted
     * now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty
     * when none are available. Values name the verb route with hyphens replaced by underscores.
     * Always present with merchant credentials. [] enum: "accept", "cancel", "complete",
     * "dispatch", "fail", "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
     * "mark_ready", "release_hold", "schedule", "start". object.supported_actions[] (Value):
     * string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". object.terminal_at (Optional): string. When the
     * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records
     * the state transition; completed_at records completion evidence supplied for the fulfillment.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string. How the
     * items are delivered: shipment, pickup, local delivery, digital delivery, or service. Value
     * enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover".
     * object.updated_at (Required): string. When the fulfillment was last updated, in RFC3339
     * format. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Monotonic fulfillment version for expected_version checks. Format: uint64. minimum:
     * 1. previous_attributes (Optional): object and {@link FulfillmentPreviousAttributes}.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.active_hold (Optional): {@link
     * FulfillmentHoldPreviousAttributes} or null. Current hold details. Present exactly when
     * status is on_hold. previous_attributes.active_hold.anyOf[1] (Value): {@link
     * FulfillmentHoldPreviousAttributes}. previous_attributes.active_hold.anyOf[2] (Value): null.
     * previous_attributes.charges (Optional): Array of {@link
     * FulfillmentChargeLinkPreviousAttributes} or null. Order charges associated with this
     * fulfillment. previous_attributes.charges.anyOf[1] (Value): Array of {@link
     * FulfillmentChargeLinkPreviousAttributes}. Order charges associated with this fulfillment.
     * previous_attributes.charges.anyOf[1][] (Value): {@link
     * FulfillmentChargeLinkPreviousAttributes}. previous_attributes.charges.anyOf[2] (Value):
     * null. previous_attributes.completed_at (Optional): string or null. When the fulfillment was
     * completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. previous_attributes.completed_at.anyOf[1] (Value): string. When the fulfillment
     * was completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.completed_at.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. When the fulfillment was created, in RFC3339 format.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the fulfillment was created,
     * in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.customer_id
     * (Optional): string or null. Customer receiving this fulfillment, when one is set.
     * previous_attributes.customer_id.anyOf[1] (Value): string. Customer receiving this
     * fulfillment, when one is set. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_choice_group_id (Optional): string or null. Delivery choice
     * group that created this fulfillment. `null` when the merchant created the fulfillment or
     * checkout created it without a delivery quote. Always present with merchant credentials.
     * previous_attributes.delivery_choice_group_id.anyOf[1] (Value): string. Delivery choice group
     * that created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials. Example:
     * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". previous_attributes.delivery_choice_group_id.anyOf[2]
     * (Value): null. previous_attributes.delivery_execution_leg_id (Optional): string or null.
     * Execution leg of the selected delivery option that created this fulfillment. `null` when the
     * merchant created the fulfillment or checkout created it without a delivery quote. Always
     * present with merchant credentials. previous_attributes.delivery_execution_leg_id.anyOf[1]
     * (Value): string. Execution leg of the selected delivery option that created this
     * fulfillment. `null` when the merchant created the fulfillment or checkout created it without
     * a delivery quote. Always present with merchant credentials. Example:
     * "dleg_01KEZF7C00VB59BKTRC8W4KR4M". previous_attributes.delivery_execution_leg_id.anyOf[2]
     * (Value): null. previous_attributes.delivery_method_id (Optional): string or null. Delivery
     * method chosen for this fulfillment. `null` when the merchant created the fulfillment or
     * checkout created it without a delivery quote. Also `null` when it was created before this
     * field was added. Always present with merchant credentials.
     * previous_attributes.delivery_method_id.anyOf[1] (Value): string. Delivery method chosen for
     * this fulfillment. `null` when the merchant created the fulfillment or checkout created it
     * without a delivery quote. Also `null` when it was created before this field was added.
     * Always present with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * previous_attributes.delivery_method_id.anyOf[2] (Value): null.
     * previous_attributes.delivery_selection_id (Optional): string or null. Delivery selection
     * that created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials.
     * previous_attributes.delivery_selection_id.anyOf[1] (Value): string. Delivery selection that
     * created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Always present with merchant credentials. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". previous_attributes.delivery_selection_id.anyOf[2]
     * (Value): null. previous_attributes.device_id (Optional): string or null. Device associated
     * with the fulfillment, when one is recorded. previous_attributes.device_id.anyOf[1] (Value):
     * string. Device associated with the fulfillment, when one is recorded. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6". previous_attributes.device_id.anyOf[2] (Value): null.
     * previous_attributes.digital_details (Optional): {@link
     * DigitalFulfillmentDetailsPreviousAttributes} or null. Delivery URL and completion time for a
     * digital fulfillment. previous_attributes.digital_details.anyOf[1] (Value): {@link
     * DigitalFulfillmentDetailsPreviousAttributes}. previous_attributes.digital_details.anyOf[2]
     * (Value): null. previous_attributes.dispatched_at (Optional): string or null. First time this
     * fulfillment reached dispatched. previous_attributes.dispatched_at.anyOf[1] (Value): string.
     * First time this fulfillment reached dispatched. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.dispatched_at.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.fulfillment_id (Optional): string or null. Stable identifier of the
     * fulfillment. previous_attributes.fulfillment_id.anyOf[1] (Value): string. Stable identifier
     * of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     * previous_attributes.fulfillment_id.anyOf[2] (Value): null. previous_attributes.line_items
     * (Optional): Array of {@link FulfillmentLineItemPreviousAttributes} or null. Order lines and
     * quantities allocated to this fulfillment. previous_attributes.line_items.anyOf[1] (Value):
     * Array of {@link FulfillmentLineItemPreviousAttributes}. Order lines and quantities allocated
     * to this fulfillment. previous_attributes.line_items.anyOf[1][] (Value): {@link
     * FulfillmentLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2] (Value):
     * null. previous_attributes.local_delivery_details (Optional): {@link
     * DeliveryFulfillmentDetailsPreviousAttributes} or null. Courier, delivery window, and handoff
     * details for a local delivery fulfillment.
     * previous_attributes.local_delivery_details.anyOf[1] (Value): {@link
     * DeliveryFulfillmentDetailsPreviousAttributes}.
     * previous_attributes.local_delivery_details.anyOf[2] (Value): null.
     * previous_attributes.location_id (Optional): string or null. Merchant location responsible
     * for this fulfillment. previous_attributes.location_id.anyOf[1] (Value): string. Merchant
     * location responsible for this fulfillment. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.location_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned key-value metadata associated with the
     * fulfillment. previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary returned when the
     * order relationship is expanded. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. previous_attributes.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummaryPreviousAttributes}. previous_attributes.order.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. Order whose items this fulfillment
     * delivers. previous_attributes.order_id.anyOf[1] (Value): string. Order whose items this
     * fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * previous_attributes.order_id.anyOf[2] (Value): null. previous_attributes.order_number
     * (Optional): string or null. Human-readable number of the order this fulfillment belongs to.
     * Omitted when the order has no number. previous_attributes.order_number.anyOf[1] (Value):
     * string. Human-readable number of the order this fulfillment belongs to. Omitted when the
     * order has no number. previous_attributes.order_number.anyOf[2] (Value): null.
     * previous_attributes.outcome (Optional): {@link FulfillmentOutcomePreviousAttributes} or
     * null. Terminal outcome details. Present exactly when status is no_show.
     * previous_attributes.outcome.anyOf[1] (Value): {@link FulfillmentOutcomePreviousAttributes}.
     * previous_attributes.outcome.anyOf[2] (Value): null. previous_attributes.packages (Optional):
     * Array of {@link ExpandedPackageSummaryPreviousAttributes} or null. Packages associated with
     * this fulfillment. previous_attributes.packages.anyOf[1] (Value): Array of {@link
     * ExpandedPackageSummaryPreviousAttributes}. Packages associated with this fulfillment.
     * previous_attributes.packages.anyOf[1][] (Value): {@link
     * ExpandedPackageSummaryPreviousAttributes}. previous_attributes.packages.anyOf[2] (Value):
     * null. previous_attributes.packed_at (Optional): string or null. First time this fulfillment
     * reached packed. previous_attributes.packed_at.anyOf[1] (Value): string. First time this
     * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.packed_at.anyOf[2] (Value): null. previous_attributes.picked_at
     * (Optional): string or null. First time this fulfillment reached picked.
     * previous_attributes.picked_at.anyOf[1] (Value): string. First time this fulfillment reached
     * picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.picked_at.anyOf[2] (Value): null. previous_attributes.pickup_details
     * (Optional): {@link PickupFulfillmentDetailsPreviousAttributes} or null. Pickup window,
     * pickup mode, and handoff times for a pickup fulfillment.
     * previous_attributes.pickup_details.anyOf[1] (Value): {@link
     * PickupFulfillmentDetailsPreviousAttributes}. previous_attributes.pickup_details.anyOf[2]
     * (Value): null. previous_attributes.recipient (Optional): {@link
     * FulfillmentRecipientPreviousAttributes} or null. Omitted for a checkout session credential
     * that doesn't act for the customer the buyer verified. previous_attributes.recipient.anyOf[1]
     * (Value): {@link FulfillmentRecipientPreviousAttributes}.
     * previous_attributes.recipient.anyOf[2] (Value): null. previous_attributes.scheduled_start_at
     * (Optional): string or null. Derived start of the service schedule or pickup, local delivery,
     * or shipment window. Null when no schedule is booked, including digital fulfillments. Details
     * remain the authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first
     * ascending and last descending. Sorting by due_at compares this same value with nulls last
     * ascending and first descending. Ties use fulfillment_id in the same direction.
     * previous_attributes.scheduled_start_at.anyOf[1] (Value): string. Derived start of the
     * service schedule or pickup, local delivery, or shipment window. Null when no schedule is
     * booked, including digital fulfillments. Details remain the authoritative schedule inputs.
     * Sorting by scheduled_start_at puts nulls first ascending and last descending. Sorting by
     * due_at compares this same value with nulls last ascending and first descending. Ties use
     * fulfillment_id in the same direction. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.scheduled_start_at.anyOf[2] (Value): null.
     * previous_attributes.service_details (Optional): {@link
     * ServiceFulfillmentDetailsPreviousAttributes} or null. Schedule and completion details for a
     * service fulfillment. previous_attributes.service_details.anyOf[1] (Value): {@link
     * ServiceFulfillmentDetailsPreviousAttributes}. previous_attributes.service_details.anyOf[2]
     * (Value): null. previous_attributes.shipment_details (Optional): {@link
     * ShipmentFulfillmentDetailsPreviousAttributes} or null. Shipping schedule and ship time for a
     * shipment fulfillment. Present only on shipment fulfillments with at least one value.
     * previous_attributes.shipment_details.anyOf[1] (Value): {@link
     * ShipmentFulfillmentDetailsPreviousAttributes}. previous_attributes.shipment_details.anyOf[2]
     * (Value): null. previous_attributes.shipments (Optional): Array of {@link
     * ExpandedShipmentSummaryPreviousAttributes} or null. Shipments associated with this
     * fulfillment. previous_attributes.shipments.anyOf[1] (Value): Array of {@link
     * ExpandedShipmentSummaryPreviousAttributes}. Shipments associated with this fulfillment.
     * previous_attributes.shipments.anyOf[1][] (Value): {@link
     * ExpandedShipmentSummaryPreviousAttributes}. previous_attributes.shipments.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. Current fulfillment lifecycle
     * status. Read supported_actions for available transitions. - `pending`: Work has not started
     * and has not been accepted. Approval may be required before work can begin. - `accepted`: The
     * provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused.
     * Release the hold to restore active_hold.previous_status, or use a supported forward action.
     * - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
     * fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work
     * completed successfully. - `canceled`: The fulfillment was intentionally canceled and will
     * not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
     * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its
     * recorded service window. - `preparing`: Warehouse or provider preparation is underway. -
     * `picked`: The assigned items have been picked. - `packed`: The assigned items have been
     * packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. -
     * `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value
     * enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     * previous_attributes.status.anyOf[1] (Value): string. Current fulfillment lifecycle status.
     * Read supported_actions for available transitions. - `pending`: Work has not started and has
     * not been accepted. Approval may be required before work can begin. - `accepted`: The
     * provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused.
     * Release the hold to restore active_hold.previous_status, or use a supported forward action.
     * - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
     * fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work
     * completed successfully. - `canceled`: The fulfillment was intentionally canceled and will
     * not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
     * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its
     * recorded service window. - `preparing`: Warehouse or provider preparation is underway. -
     * `picked`: The assigned items have been picked. - `packed`: The assigned items have been
     * packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. -
     * `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value
     * enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Read-only lifecycle actions accepted now, based on the
     * fulfillment, its order payment status, holds, and shipment progress. Empty when none are
     * available. Values name the verb route with hyphens replaced by underscores. Always present
     * with merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
     * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". previous_attributes.supported_actions.anyOf[1] (Value):
     * Array of string. Read-only lifecycle actions accepted now, based on the fulfillment, its
     * order payment status, holds, and shipment progress. Empty when none are available. Values
     * name the verb route with hyphens replaced by underscores. Always present with merchant
     * credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". previous_attributes.supported_actions.anyOf[1][]
     * (Value): string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". previous_attributes.supported_actions.anyOf[2] (Value):
     * null. previous_attributes.terminal_at (Optional): string or null. When the fulfillment
     * entered a terminal state: completed, canceled, failed, or no_show. This records the state
     * transition; completed_at records completion evidence supplied for the fulfillment.
     * previous_attributes.terminal_at.anyOf[1] (Value): string. When the fulfillment entered a
     * terminal state: completed, canceled, failed, or no_show. This records the state transition;
     * completed_at records completion evidence supplied for the fulfillment. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.terminal_at.anyOf[2] (Value): null.
     * previous_attributes.type (Optional): string or null. How the items are delivered: shipment,
     * pickup, local delivery, digital delivery, or service. Value enum: "shipment", "pickup",
     * "local_delivery", "digital", "service", "handover". previous_attributes.type.anyOf[1]
     * (Value): string. How the items are delivered: shipment, pickup, local delivery, digital
     * delivery, or service. Value enum: "shipment", "pickup", "local_delivery", "digital",
     * "service", "handover". previous_attributes.type.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When the fulfillment was last
     * updated, in RFC3339 format. previous_attributes.updated_at.anyOf[1] (Value): string. When
     * the fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value): null.
     * previous_attributes.version (Optional): integer or null. Monotonic fulfillment version for
     * expected_version checks. previous_attributes.version.anyOf[1] (Value): integer. Monotonic
     * fulfillment version for expected_version checks. Format: uint64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * active_hold (Optional): {@link FulfillmentHold}. Current hold details. Present exactly
         * when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and
         * when it became active. charges (Optional): Array of {@link FulfillmentChargeLink}. Order
         * charges associated with this fulfillment. charges[] (Value): {@link
         * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
         * completed_at (Optional): string. When the fulfillment was completed. Mirrors the
         * completion time for its type: delivered_at for shipment, local delivery, and digital
         * fulfillments, picked_up_at for pickup, and service_details.completed_at for service
         * fulfillments. Omitted until a completion time is recorded. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When the fulfillment was created,
         * in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". customer_id
         * (Optional): string. Customer receiving this fulfillment, when one is set. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". delivery_choice_group_id (Optional): string or null.
         * Delivery choice group that created this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
         * delivery_execution_leg_id (Optional): string or null. Execution leg of the selected
         * delivery option that created this fulfillment. `null` when the merchant created the
         * fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M". delivery_method_id
         * (Optional): string or null. Delivery method chosen for this fulfillment. `null` when the
         * merchant created the fulfillment or checkout created it without a delivery quote. Also
         * `null` when it was created before this field was added. Always present with merchant
         * credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_id
         * (Optional): string or null. Delivery selection that created this fulfillment. `null`
         * when the merchant created the fulfillment or checkout created it without a delivery
         * quote. Always present with merchant credentials. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". device_id (Optional): string. Device associated with
         * the fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
         * digital_details (Optional): {@link DigitalFulfillmentDetails}. Delivery URL and
         * completion time for a digital fulfillment. Details of a digital fulfillment: when it was
         * delivered (`delivered_at`) and its `delivery_url`. dispatched_at (Optional): string.
         * First time this fulfillment reached dispatched. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". fulfillment_id (Required): string. Stable identifier of the
         * fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". line_items (Required): Array of
         * {@link FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment.
         * line_items[] (Value): {@link FulfillmentLineItem}. An order line item and quantity
         * included in a fulfillment, with the modifiers applied to it. local_delivery_details
         * (Optional): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
         * details for a local delivery fulfillment. Details of a local delivery fulfillment:
         * courier, timing window, instructions, and tracking. Some fields are omitted for
         * credentials that don't act for the verified customer. location_id (Optional): string.
         * Merchant location responsible for this fulfillment. Example:
         * "loc_01KEZF7C00CMHRRYA3MV996JB2". metadata (Optional): {@link MetadataMap}. Caller-owned
         * key-value metadata associated with the fulfillment. Caller-owned key-value data stored
         * on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
         * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before
         * those limits may not satisfy them. order (Optional): {@link ExpandedOrderSummary} or
         * null. Order summary returned when the order relationship is expanded. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. Order whose items this fulfillment delivers. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_number (Optional): string. Human-readable number
         * of the order this fulfillment belongs to. Omitted when the order has no number. outcome
         * (Optional): {@link FulfillmentOutcome}. Terminal outcome details. Present exactly when
         * status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show,
         * with its reason, notes, and when it occurred. packages (Optional): Array of {@link
         * ExpandedPackageSummary}. Packages associated with this fulfillment. packages[] (Value):
         * {@link ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
         * status, and supported actions, returned when the package is expanded. packed_at
         * (Optional): string. First time this fulfillment reached packed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". picked_at (Optional): string. First time this
         * fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * pickup_details (Optional): {@link PickupFulfillmentDetails}. Pickup window, pickup mode,
         * and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout
         * creates, location_name, address, and instructions name the store the buyer chose and the
         * delivery method's pickup instructions. The note the buyer left for the store is in
         * recipient.instructions. recipient (Optional): {@link FulfillmentRecipient}. Omitted for
         * a checkout session credential that doesn't act for the customer the buyer verified. The
         * recipient of a fulfillment, with name, email, phone, address, and handling instructions.
         * scheduled_start_at (Required): string or null. Derived start of the service schedule or
         * pickup, local delivery, or shipment window. Null when no schedule is booked, including
         * digital fulfillments. Details remain the authoritative schedule inputs. Sorting by
         * scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at
         * compares this same value with nulls last ascending and first descending. Ties use
         * fulfillment_id in the same direction. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_details (Optional): {@link ServiceFulfillmentDetails}.
         * Schedule and completion details for a service fulfillment. Details of a service
         * fulfillment: the scheduled start and end, timezone, completion time, and notes.
         * shipment_details (Optional): {@link ShipmentFulfillmentDetails}. Shipping schedule and
         * ship time for a shipment fulfillment. Present only on shipment fulfillments with at
         * least one value. Details of a shipment fulfillment: the shipping window, timezone, and
         * when the shipment was handed to the carrier. shipments (Optional): Array of {@link
         * ExpandedShipmentSummary}. Shipments associated with this fulfillment. shipments[]
         * (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields, including
         * direction, status, and package count, returned when the shipment is expanded. status
         * (Required): string. Current fulfillment lifecycle status. Read supported_actions for
         * available transitions. - `pending`: Work has not started and has not been accepted.
         * Approval may be required before work can begin. - `accepted`: The provider accepted the
         * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
         * restore active_hold.previous_status, or use a supported forward action. - `in_progress`:
         * Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready
         * for pickup, handoff, or completion. - `completed`: All fulfillment work completed
         * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
         * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
         * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for
         * its recorded service window. - `preparing`: Warehouse or provider preparation is
         * underway. - `picked`: The assigned items have been picked. - `packed`: The assigned
         * items have been packed. - `dispatched`: The fulfillment left its origin for delivery or
         * handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded
         * reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
         * "dispatched", "no_show". supported_actions (Optional): Array of string. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. Always present with merchant credentials. [] enum:
         * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
         * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
         * "schedule", "start". supported_actions[] (Value): string. Value enum: "accept",
         * "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed",
         * "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start".
         * terminal_at (Optional): string. When the fulfillment entered a terminal state:
         * completed, canceled, failed, or no_show. This records the state transition; completed_at
         * records completion evidence supplied for the fulfillment. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". type (Required): string. How the items are delivered: shipment,
         * pickup, local delivery, digital delivery, or service. Value enum: "shipment", "pickup",
         * "local_delivery", "digital", "service", "handover". updated_at (Required): string. When
         * the fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Monotonic fulfillment version for
         * expected_version checks. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current hold details. Present exactly when status is on_hold. A hold on a
             * fulfillment, with its reason, who placed it, and when it became active.
             */
            "active_hold"?: FulfillmentHold;
            /**
             * Order charges associated with this fulfillment. [] (Value): {@link
             * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
             */
            "charges"?: Array<FulfillmentChargeLink>;
            /**
             * When the fulfillment was completed. Mirrors the completion time for its type:
             * delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at
             * for pickup, and service_details.completed_at for service fulfillments. Omitted until
             * a completion time is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * Delivery choice group that created this fulfillment. `null` when the merchant
             * created the fulfillment or checkout created it without a delivery quote. Always
             * present with merchant credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
             */
            "delivery_choice_group_id"?: string | null;
            /**
             * Execution leg of the selected delivery option that created this fulfillment. `null`
             * when the merchant created the fulfillment or checkout created it without a delivery
             * quote. Always present with merchant credentials. Example:
             * "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
             */
            "delivery_execution_leg_id"?: string | null;
            /**
             * Delivery method chosen for this fulfillment. `null` when the merchant created the
             * fulfillment or checkout created it without a delivery quote. Also `null` when it was
             * created before this field was added. Always present with merchant credentials.
             * Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_id"?: string | null;
            /**
             * Delivery selection that created this fulfillment. `null` when the merchant created
             * the fulfillment or checkout created it without a delivery quote. Always present with
             * merchant credentials. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
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
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Stable identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
            "fulfillment_id": string;
            /**
             * Order lines and quantities allocated to this fulfillment. [] (Value): {@link
             * FulfillmentLineItem}. An order line item and quantity included in a fulfillment,
             * with the modifiers applied to it.
             */
            "line_items": Array<FulfillmentLineItem>;
            /**
             * Courier, delivery window, and handoff details for a local delivery fulfillment.
             * Details of a local delivery fulfillment: courier, timing window, instructions, and
             * tracking. Some fields are omitted for credentials that don't act for the verified
             * customer.
             */
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            /**
             * Merchant location responsible for this fulfillment. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id"?: string;
            /**
             * Caller-owned key-value metadata associated with the fulfillment. Caller-owned
             * key-value data stored on a resource. Keys starting with flint_ are reserved for
             * Flint and are not returned. Writes follow the limits on MetadataInput and
             * MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order whose items this fulfillment delivers. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * Human-readable number of the order this fulfillment belongs to. Omitted when the
             * order has no number.
             */
            "order_number"?: string;
            /**
             * Terminal outcome details. Present exactly when status is no_show. The terminal
             * outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and
             * when it occurred.
             */
            "outcome"?: FulfillmentOutcome;
            /**
             * Packages associated with this fulfillment. [] (Value): {@link
             * ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
             * status, and supported actions, returned when the package is expanded.
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
             * Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup
             * details. For a pickup that checkout creates, location_name, address, and
             * instructions name the store the buyer chose and the delivery method's pickup
             * instructions. The note the buyer left for the store is in recipient.instructions.
             */
            "pickup_details"?: PickupFulfillmentDetails;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The recipient of a fulfillment, with name, email, phone, address,
             * and handling instructions.
             */
            "recipient"?: FulfillmentRecipient;
            /**
             * Derived start of the service schedule or pickup, local delivery, or shipment window.
             * Null when no schedule is booked, including digital fulfillments. Details remain the
             * authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first
             * ascending and last descending. Sorting by due_at compares this same value with nulls
             * last ascending and first descending. Ties use fulfillment_id in the same direction.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_start_at": string | null;
            /**
             * Schedule and completion details for a service fulfillment. Details of a service
             * fulfillment: the scheduled start and end, timezone, completion time, and notes.
             */
            "service_details"?: ServiceFulfillmentDetails;
            /**
             * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
             * fulfillments with at least one value. Details of a shipment fulfillment: the
             * shipping window, timezone, and when the shipment was handed to the carrier.
             */
            "shipment_details"?: ShipmentFulfillmentDetails;
            /**
             * Shipments associated with this fulfillment. [] (Value): {@link
             * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status,
             * and package count, returned when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Current fulfillment lifecycle status. Read supported_actions for available
             * transitions. - `pending`: Work has not started and has not been accepted. Approval
             * may be required before work can begin. - `accepted`: The provider accepted the
             * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
             * restore active_hold.previous_status, or use a supported forward action. -
             * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
             * fulfillment is ready for pickup, handoff, or completion. - `completed`: All
             * fulfillment work completed successfully. - `canceled`: The fulfillment was
             * intentionally canceled and will not continue. - `failed`: The fulfillment could not
             * be completed. Resolve the recorded reason before creating replacement work. -
             * `scheduled`: The fulfillment is scheduled for its recorded service window. -
             * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
             * items have been picked. - `packed`: The assigned items have been packed. -
             * `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`:
             * A service appointment was missed. Read outcome for the recorded reason. Value enum:
             * "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
             * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
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
             * Read-only lifecycle actions accepted now, based on the fulfillment, its order
             * payment status, holds, and shipment progress. Empty when none are available. Values
             * name the verb route with hyphens replaced by underscores. Always present with
             * merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start". [] (Value): string. Value enum:
             * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
             * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
             * "schedule", "start".
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
             * When the fulfillment entered a terminal state: completed, canceled, failed, or
             * no_show. This records the state transition; completed_at records completion evidence
             * supplied for the fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "terminal_at"?: string;
            /**
             * How the items are delivered: shipment, pickup, local delivery, digital delivery, or
             * service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service",
             * "handover".
             */
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {});
            /**
             * When the fulfillment was last updated, in RFC3339 format. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum:
             * 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. active_hold (Optional): {@link
         * FulfillmentHoldPreviousAttributes} or null. Current hold details. Present exactly when
         * status is on_hold. active_hold.anyOf[1] (Value): {@link
         * FulfillmentHoldPreviousAttributes}. active_hold.anyOf[2] (Value): null. charges
         * (Optional): Array of {@link FulfillmentChargeLinkPreviousAttributes} or null. Order
         * charges associated with this fulfillment. charges.anyOf[1] (Value): Array of {@link
         * FulfillmentChargeLinkPreviousAttributes}. Order charges associated with this
         * fulfillment. charges.anyOf[1][] (Value): {@link
         * FulfillmentChargeLinkPreviousAttributes}. charges.anyOf[2] (Value): null. completed_at
         * (Optional): string or null. When the fulfillment was completed. Mirrors the completion
         * time for its type: delivered_at for shipment, local delivery, and digital fulfillments,
         * picked_up_at for pickup, and service_details.completed_at for service fulfillments.
         * Omitted until a completion time is recorded. completed_at.anyOf[1] (Value): string. When
         * the fulfillment was completed. Mirrors the completion time for its type: delivered_at
         * for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and
         * service_details.completed_at for service fulfillments. Omitted until a completion time
         * is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". completed_at.anyOf[2]
         * (Value): null. created_at (Optional): string or null. When the fulfillment was created,
         * in RFC3339 format. created_at.anyOf[1] (Value): string. When the fulfillment was
         * created, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. customer_id (Optional): string or null. Customer
         * receiving this fulfillment, when one is set. customer_id.anyOf[1] (Value): string.
         * Customer receiving this fulfillment, when one is set. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null.
         * delivery_choice_group_id (Optional): string or null. Delivery choice group that created
         * this fulfillment. `null` when the merchant created the fulfillment or checkout created
         * it without a delivery quote. Always present with merchant credentials.
         * delivery_choice_group_id.anyOf[1] (Value): string. Delivery choice group that created
         * this fulfillment. `null` when the merchant created the fulfillment or checkout created
         * it without a delivery quote. Always present with merchant credentials. Example:
         * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". delivery_choice_group_id.anyOf[2] (Value): null.
         * delivery_execution_leg_id (Optional): string or null. Execution leg of the selected
         * delivery option that created this fulfillment. `null` when the merchant created the
         * fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. delivery_execution_leg_id.anyOf[1] (Value): string. Execution leg
         * of the selected delivery option that created this fulfillment. `null` when the merchant
         * created the fulfillment or checkout created it without a delivery quote. Always present
         * with merchant credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
         * delivery_execution_leg_id.anyOf[2] (Value): null. delivery_method_id (Optional): string
         * or null. Delivery method chosen for this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Also `null` when it was
         * created before this field was added. Always present with merchant credentials.
         * delivery_method_id.anyOf[1] (Value): string. Delivery method chosen for this
         * fulfillment. `null` when the merchant created the fulfillment or checkout created it
         * without a delivery quote. Also `null` when it was created before this field was added.
         * Always present with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
         * delivery_method_id.anyOf[2] (Value): null. delivery_selection_id (Optional): string or
         * null. Delivery selection that created this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Always present with
         * merchant credentials. delivery_selection_id.anyOf[1] (Value): string. Delivery selection
         * that created this fulfillment. `null` when the merchant created the fulfillment or
         * checkout created it without a delivery quote. Always present with merchant credentials.
         * Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". delivery_selection_id.anyOf[2] (Value):
         * null. device_id (Optional): string or null. Device associated with the fulfillment, when
         * one is recorded. device_id.anyOf[1] (Value): string. Device associated with the
         * fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
         * device_id.anyOf[2] (Value): null. digital_details (Optional): {@link
         * DigitalFulfillmentDetailsPreviousAttributes} or null. Delivery URL and completion time
         * for a digital fulfillment. digital_details.anyOf[1] (Value): {@link
         * DigitalFulfillmentDetailsPreviousAttributes}. digital_details.anyOf[2] (Value): null.
         * dispatched_at (Optional): string or null. First time this fulfillment reached
         * dispatched. dispatched_at.anyOf[1] (Value): string. First time this fulfillment reached
         * dispatched. Format: date-time. Example: "2026-08-02T16:00:00Z". dispatched_at.anyOf[2]
         * (Value): null. external_reference_id (Optional): string or null. Caller-owned identifier
         * for this resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. fulfillment_id
         * (Optional): string or null. Stable identifier of the fulfillment.
         * fulfillment_id.anyOf[1] (Value): string. Stable identifier of the fulfillment. Example:
         * "ful_01KEZF7C00F24WVSTTWR1FQX5T". fulfillment_id.anyOf[2] (Value): null. line_items
         * (Optional): Array of {@link FulfillmentLineItemPreviousAttributes} or null. Order lines
         * and quantities allocated to this fulfillment. line_items.anyOf[1] (Value): Array of
         * {@link FulfillmentLineItemPreviousAttributes}. Order lines and quantities allocated to
         * this fulfillment. line_items.anyOf[1][] (Value): {@link
         * FulfillmentLineItemPreviousAttributes}. line_items.anyOf[2] (Value): null.
         * local_delivery_details (Optional): {@link DeliveryFulfillmentDetailsPreviousAttributes}
         * or null. Courier, delivery window, and handoff details for a local delivery fulfillment.
         * local_delivery_details.anyOf[1] (Value): {@link
         * DeliveryFulfillmentDetailsPreviousAttributes}. local_delivery_details.anyOf[2] (Value):
         * null. location_id (Optional): string or null. Merchant location responsible for this
         * fulfillment. location_id.anyOf[1] (Value): string. Merchant location responsible for
         * this fulfillment. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". location_id.anyOf[2]
         * (Value): null. metadata (Optional): {@link MetadataMap} or null. Caller-owned key-value
         * metadata associated with the fulfillment. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. order (Optional): {@link
         * ExpandedOrderSummaryPreviousAttributes} or null. Order summary returned when the order
         * relationship is expanded. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. Order whose items this fulfillment delivers.
         * order_id.anyOf[1] (Value): string. Order whose items this fulfillment delivers. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null. order_number
         * (Optional): string or null. Human-readable number of the order this fulfillment belongs
         * to. Omitted when the order has no number. order_number.anyOf[1] (Value): string.
         * Human-readable number of the order this fulfillment belongs to. Omitted when the order
         * has no number. order_number.anyOf[2] (Value): null. outcome (Optional): {@link
         * FulfillmentOutcomePreviousAttributes} or null. Terminal outcome details. Present exactly
         * when status is no_show. outcome.anyOf[1] (Value): {@link
         * FulfillmentOutcomePreviousAttributes}. outcome.anyOf[2] (Value): null. packages
         * (Optional): Array of {@link ExpandedPackageSummaryPreviousAttributes} or null. Packages
         * associated with this fulfillment. packages.anyOf[1] (Value): Array of {@link
         * ExpandedPackageSummaryPreviousAttributes}. Packages associated with this fulfillment.
         * packages.anyOf[1][] (Value): {@link ExpandedPackageSummaryPreviousAttributes}.
         * packages.anyOf[2] (Value): null. packed_at (Optional): string or null. First time this
         * fulfillment reached packed. packed_at.anyOf[1] (Value): string. First time this
         * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * packed_at.anyOf[2] (Value): null. picked_at (Optional): string or null. First time this
         * fulfillment reached picked. picked_at.anyOf[1] (Value): string. First time this
         * fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * picked_at.anyOf[2] (Value): null. pickup_details (Optional): {@link
         * PickupFulfillmentDetailsPreviousAttributes} or null. Pickup window, pickup mode, and
         * handoff times for a pickup fulfillment. pickup_details.anyOf[1] (Value): {@link
         * PickupFulfillmentDetailsPreviousAttributes}. pickup_details.anyOf[2] (Value): null.
         * recipient (Optional): {@link FulfillmentRecipientPreviousAttributes} or null. Omitted
         * for a checkout session credential that doesn't act for the customer the buyer verified.
         * recipient.anyOf[1] (Value): {@link FulfillmentRecipientPreviousAttributes}.
         * recipient.anyOf[2] (Value): null. scheduled_start_at (Optional): string or null. Derived
         * start of the service schedule or pickup, local delivery, or shipment window. Null when
         * no schedule is booked, including digital fulfillments. Details remain the authoritative
         * schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last
         * descending. Sorting by due_at compares this same value with nulls last ascending and
         * first descending. Ties use fulfillment_id in the same direction.
         * scheduled_start_at.anyOf[1] (Value): string. Derived start of the service schedule or
         * pickup, local delivery, or shipment window. Null when no schedule is booked, including
         * digital fulfillments. Details remain the authoritative schedule inputs. Sorting by
         * scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at
         * compares this same value with nulls last ascending and first descending. Ties use
         * fulfillment_id in the same direction. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". scheduled_start_at.anyOf[2] (Value): null. service_details
         * (Optional): {@link ServiceFulfillmentDetailsPreviousAttributes} or null. Schedule and
         * completion details for a service fulfillment. service_details.anyOf[1] (Value): {@link
         * ServiceFulfillmentDetailsPreviousAttributes}. service_details.anyOf[2] (Value): null.
         * shipment_details (Optional): {@link ShipmentFulfillmentDetailsPreviousAttributes} or
         * null. Shipping schedule and ship time for a shipment fulfillment. Present only on
         * shipment fulfillments with at least one value. shipment_details.anyOf[1] (Value): {@link
         * ShipmentFulfillmentDetailsPreviousAttributes}. shipment_details.anyOf[2] (Value): null.
         * shipments (Optional): Array of {@link ExpandedShipmentSummaryPreviousAttributes} or
         * null. Shipments associated with this fulfillment. shipments.anyOf[1] (Value): Array of
         * {@link ExpandedShipmentSummaryPreviousAttributes}. Shipments associated with this
         * fulfillment. shipments.anyOf[1][] (Value): {@link
         * ExpandedShipmentSummaryPreviousAttributes}. shipments.anyOf[2] (Value): null. status
         * (Optional): string or null. Current fulfillment lifecycle status. Read supported_actions
         * for available transitions. - `pending`: Work has not started and has not been accepted.
         * Approval may be required before work can begin. - `accepted`: The provider accepted the
         * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
         * restore active_hold.previous_status, or use a supported forward action. - `in_progress`:
         * Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready
         * for pickup, handoff, or completion. - `completed`: All fulfillment work completed
         * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
         * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
         * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for
         * its recorded service window. - `preparing`: Warehouse or provider preparation is
         * underway. - `picked`: The assigned items have been picked. - `packed`: The assigned
         * items have been packed. - `dispatched`: The fulfillment left its origin for delivery or
         * handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded
         * reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
         * "dispatched", "no_show". status.anyOf[1] (Value): string. Current fulfillment lifecycle
         * status. Read supported_actions for available transitions. - `pending`: Work has not
         * started and has not been accepted. Approval may be required before work can begin. -
         * `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`:
         * Work is paused. Release the hold to restore active_hold.previous_status, or use a
         * supported forward action. - `in_progress`: Work has started and is not yet ready or
         * complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
         * `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment
         * was intentionally canceled and will not continue. - `failed`: The fulfillment could not
         * be completed. Resolve the recorded reason before creating replacement work. -
         * `scheduled`: The fulfillment is scheduled for its recorded service window. -
         * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
         * items have been picked. - `packed`: The assigned items have been packed. - `dispatched`:
         * The fulfillment left its origin for delivery or handoff. - `no_show`: A service
         * appointment was missed. Read outcome for the recorded reason. Value enum: "pending",
         * "accepted", "on_hold", "in_progress", "ready", "completed", "canceled", "failed",
         * "scheduled", "preparing", "picked", "packed", "dispatched", "no_show". status.anyOf[2]
         * (Value): null. supported_actions (Optional): Array of string or null. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. Always present with merchant credentials. [] enum:
         * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
         * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
         * "schedule", "start". supported_actions.anyOf[1] (Value): Array of string. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. Always present with merchant credentials. [] enum:
         * "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
         * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
         * "schedule", "start". supported_actions.anyOf[1][] (Value): string. Value enum: "accept",
         * "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed",
         * "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start".
         * supported_actions.anyOf[2] (Value): null. terminal_at (Optional): string or null. When
         * the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This
         * records the state transition; completed_at records completion evidence supplied for the
         * fulfillment. terminal_at.anyOf[1] (Value): string. When the fulfillment entered a
         * terminal state: completed, canceled, failed, or no_show. This records the state
         * transition; completed_at records completion evidence supplied for the fulfillment.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". terminal_at.anyOf[2] (Value): null.
         * type (Optional): string or null. How the items are delivered: shipment, pickup, local
         * delivery, digital delivery, or service. Value enum: "shipment", "pickup",
         * "local_delivery", "digital", "service", "handover". type.anyOf[1] (Value): string. How
         * the items are delivered: shipment, pickup, local delivery, digital delivery, or service.
         * Value enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover".
         * type.anyOf[2] (Value): null. updated_at (Optional): string or null. When the fulfillment
         * was last updated, in RFC3339 format. updated_at.anyOf[1] (Value): string. When the
         * fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Monotonic fulfillment version for expected_version checks. version.anyOf[1]
         * (Value): integer. Monotonic fulfillment version for expected_version checks. Format:
         * uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Current hold details. Present exactly when status is on_hold. anyOf[1] (Value):
             * {@link FulfillmentHoldPreviousAttributes}. anyOf[2] (Value): null.
             */
            "active_hold"?: ((FulfillmentHoldPreviousAttributes) | (null));
            /**
             * Order charges associated with this fulfillment. anyOf[1] (Value): Array of {@link
             * FulfillmentChargeLinkPreviousAttributes}. Order charges associated with this
             * fulfillment. anyOf[1][] (Value): {@link FulfillmentChargeLinkPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "charges"?: ((Array<FulfillmentChargeLinkPreviousAttributes>) | (null));
            /**
             * When the fulfillment was completed. Mirrors the completion time for its type:
             * delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at
             * for pickup, and service_details.completed_at for service fulfillments. Omitted until
             * a completion time is recorded. anyOf[1] (Value): string. When the fulfillment was
             * completed. Mirrors the completion time for its type: delivered_at for shipment,
             * local delivery, and digital fulfillments, picked_up_at for pickup, and
             * service_details.completed_at for service fulfillments. Omitted until a completion
             * time is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
             * (Value): null.
             */
            "completed_at"?: ((string) | (null));
            /**
             * When the fulfillment was created, in RFC3339 format. anyOf[1] (Value): string. When
             * the fulfillment was created, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Customer receiving this fulfillment, when one is set. anyOf[1] (Value): string.
             * Customer receiving this fulfillment, when one is set. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * Delivery choice group that created this fulfillment. `null` when the merchant
             * created the fulfillment or checkout created it without a delivery quote. Always
             * present with merchant credentials. anyOf[1] (Value): string. Delivery choice group
             * that created this fulfillment. `null` when the merchant created the fulfillment or
             * checkout created it without a delivery quote. Always present with merchant
             * credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". anyOf[2] (Value): null.
             */
            "delivery_choice_group_id"?: ((string) | (null));
            /**
             * Execution leg of the selected delivery option that created this fulfillment. `null`
             * when the merchant created the fulfillment or checkout created it without a delivery
             * quote. Always present with merchant credentials. anyOf[1] (Value): string. Execution
             * leg of the selected delivery option that created this fulfillment. `null` when the
             * merchant created the fulfillment or checkout created it without a delivery quote.
             * Always present with merchant credentials. Example:
             * "dleg_01KEZF7C00VB59BKTRC8W4KR4M". anyOf[2] (Value): null.
             */
            "delivery_execution_leg_id"?: ((string) | (null));
            /**
             * Delivery method chosen for this fulfillment. `null` when the merchant created the
             * fulfillment or checkout created it without a delivery quote. Also `null` when it was
             * created before this field was added. Always present with merchant credentials.
             * anyOf[1] (Value): string. Delivery method chosen for this fulfillment. `null` when
             * the merchant created the fulfillment or checkout created it without a delivery
             * quote. Also `null` when it was created before this field was added. Always present
             * with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2]
             * (Value): null.
             */
            "delivery_method_id"?: ((string) | (null));
            /**
             * Delivery selection that created this fulfillment. `null` when the merchant created
             * the fulfillment or checkout created it without a delivery quote. Always present with
             * merchant credentials. anyOf[1] (Value): string. Delivery selection that created this
             * fulfillment. `null` when the merchant created the fulfillment or checkout created it
             * without a delivery quote. Always present with merchant credentials. Example:
             * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[2] (Value): null.
             */
            "delivery_selection_id"?: ((string) | (null));
            /**
             * Device associated with the fulfillment, when one is recorded. anyOf[1] (Value):
             * string. Device associated with the fulfillment, when one is recorded. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6". anyOf[2] (Value): null.
             */
            "device_id"?: ((string) | (null));
            /**
             * Delivery URL and completion time for a digital fulfillment. anyOf[1] (Value): {@link
             * DigitalFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "digital_details"?: ((DigitalFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * First time this fulfillment reached dispatched. anyOf[1] (Value): string. First time
             * this fulfillment reached dispatched. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "dispatched_at"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Stable identifier of the fulfillment. anyOf[1] (Value): string. Stable identifier of
             * the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". anyOf[2] (Value): null.
             */
            "fulfillment_id"?: ((string) | (null));
            /**
             * Order lines and quantities allocated to this fulfillment. anyOf[1] (Value): Array of
             * {@link FulfillmentLineItemPreviousAttributes}. Order lines and quantities allocated
             * to this fulfillment. anyOf[1][] (Value): {@link
             * FulfillmentLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<FulfillmentLineItemPreviousAttributes>) | (null));
            /**
             * Courier, delivery window, and handoff details for a local delivery fulfillment.
             * anyOf[1] (Value): {@link DeliveryFulfillmentDetailsPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "local_delivery_details"?: ((DeliveryFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Merchant location responsible for this fulfillment. anyOf[1] (Value): string.
             * Merchant location responsible for this fulfillment. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
             */
            "location_id"?: ((string) | (null));
            /**
             * Caller-owned key-value metadata associated with the fulfillment. anyOf[1] (Value):
             * {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * Order whose items this fulfillment delivers. anyOf[1] (Value): string. Order whose
             * items this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2]
             * (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * Human-readable number of the order this fulfillment belongs to. Omitted when the
             * order has no number. anyOf[1] (Value): string. Human-readable number of the order
             * this fulfillment belongs to. Omitted when the order has no number. anyOf[2] (Value):
             * null.
             */
            "order_number"?: ((string) | (null));
            /**
             * Terminal outcome details. Present exactly when status is no_show. anyOf[1] (Value):
             * {@link FulfillmentOutcomePreviousAttributes}. anyOf[2] (Value): null.
             */
            "outcome"?: ((FulfillmentOutcomePreviousAttributes) | (null));
            /**
             * Packages associated with this fulfillment. anyOf[1] (Value): Array of {@link
             * ExpandedPackageSummaryPreviousAttributes}. Packages associated with this
             * fulfillment. anyOf[1][] (Value): {@link ExpandedPackageSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "packages"?: ((Array<ExpandedPackageSummaryPreviousAttributes>) | (null));
            /**
             * First time this fulfillment reached packed. anyOf[1] (Value): string. First time
             * this fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "packed_at"?: ((string) | (null));
            /**
             * First time this fulfillment reached picked. anyOf[1] (Value): string. First time
             * this fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "picked_at"?: ((string) | (null));
            /**
             * Pickup window, pickup mode, and handoff times for a pickup fulfillment. anyOf[1]
             * (Value): {@link PickupFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "pickup_details"?: ((PickupFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. anyOf[1] (Value): {@link FulfillmentRecipientPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "recipient"?: ((FulfillmentRecipientPreviousAttributes) | (null));
            /**
             * Derived start of the service schedule or pickup, local delivery, or shipment window.
             * Null when no schedule is booked, including digital fulfillments. Details remain the
             * authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first
             * ascending and last descending. Sorting by due_at compares this same value with nulls
             * last ascending and first descending. Ties use fulfillment_id in the same direction.
             * anyOf[1] (Value): string. Derived start of the service schedule or pickup, local
             * delivery, or shipment window. Null when no schedule is booked, including digital
             * fulfillments. Details remain the authoritative schedule inputs. Sorting by
             * scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at
             * compares this same value with nulls last ascending and first descending. Ties use
             * fulfillment_id in the same direction. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "scheduled_start_at"?: ((string) | (null));
            /**
             * Schedule and completion details for a service fulfillment. anyOf[1] (Value): {@link
             * ServiceFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "service_details"?: ((ServiceFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
             * fulfillments with at least one value. anyOf[1] (Value): {@link
             * ShipmentFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "shipment_details"?: ((ShipmentFulfillmentDetailsPreviousAttributes) | (null));
            /**
             * Shipments associated with this fulfillment. anyOf[1] (Value): Array of {@link
             * ExpandedShipmentSummaryPreviousAttributes}. Shipments associated with this
             * fulfillment. anyOf[1][] (Value): {@link ExpandedShipmentSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "shipments"?: ((Array<ExpandedShipmentSummaryPreviousAttributes>) | (null));
            /**
             * Current fulfillment lifecycle status. Read supported_actions for available
             * transitions. - `pending`: Work has not started and has not been accepted. Approval
             * may be required before work can begin. - `accepted`: The provider accepted the
             * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
             * restore active_hold.previous_status, or use a supported forward action. -
             * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
             * fulfillment is ready for pickup, handoff, or completion. - `completed`: All
             * fulfillment work completed successfully. - `canceled`: The fulfillment was
             * intentionally canceled and will not continue. - `failed`: The fulfillment could not
             * be completed. Resolve the recorded reason before creating replacement work. -
             * `scheduled`: The fulfillment is scheduled for its recorded service window. -
             * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
             * items have been picked. - `packed`: The assigned items have been packed. -
             * `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`:
             * A service appointment was missed. Read outcome for the recorded reason. Value enum:
             * "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
             * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
             * anyOf[1] (Value): string. Current fulfillment lifecycle status. Read
             * supported_actions for available transitions. - `pending`: Work has not started and
             * has not been accepted. Approval may be required before work can begin. - `accepted`:
             * The provider accepted the fulfillment; work has not started. - `on_hold`: Work is
             * paused. Release the hold to restore active_hold.previous_status, or use a supported
             * forward action. - `in_progress`: Work has started and is not yet ready or complete.
             * - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
             * `completed`: All fulfillment work completed successfully. - `canceled`: The
             * fulfillment was intentionally canceled and will not continue. - `failed`: The
             * fulfillment could not be completed. Resolve the recorded reason before creating
             * replacement work. - `scheduled`: The fulfillment is scheduled for its recorded
             * service window. - `preparing`: Warehouse or provider preparation is underway. -
             * `picked`: The assigned items have been picked. - `packed`: The assigned items have
             * been packed. - `dispatched`: The fulfillment left its origin for delivery or
             * handoff. - `no_show`: A service appointment was missed. Read outcome for the
             * recorded reason. Value enum: "pending", "accepted", "on_hold", "in_progress",
             * "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked",
             * "packed", "dispatched", "no_show". anyOf[2] (Value): null.
             */
            "status"?: (("pending"
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
                | (string & {}))
                | (null));
            /**
             * Read-only lifecycle actions accepted now, based on the fulfillment, its order
             * payment status, holds, and shipment progress. Empty when none are available. Values
             * name the verb route with hyphens replaced by underscores. Always present with
             * merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start". anyOf[1] (Value): Array of
             * string. Read-only lifecycle actions accepted now, based on the fulfillment, its
             * order payment status, holds, and shipment progress. Empty when none are available.
             * Values name the verb route with hyphens replaced by underscores. Always present with
             * merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start". anyOf[1][] (Value): string. Value
             * enum: "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show",
             * "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold",
             * "schedule", "start". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"accept"
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
                | (string & {})>)
                | (null));
            /**
             * When the fulfillment entered a terminal state: completed, canceled, failed, or
             * no_show. This records the state transition; completed_at records completion evidence
             * supplied for the fulfillment. anyOf[1] (Value): string. When the fulfillment entered
             * a terminal state: completed, canceled, failed, or no_show. This records the state
             * transition; completed_at records completion evidence supplied for the fulfillment.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "terminal_at"?: ((string) | (null));
            /**
             * How the items are delivered: shipment, pickup, local delivery, digital delivery, or
             * service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service",
             * "handover". anyOf[1] (Value): string. How the items are delivered: shipment, pickup,
             * local delivery, digital delivery, or service. Value enum: "shipment", "pickup",
             * "local_delivery", "digital", "service", "handover". anyOf[2] (Value): null.
             */
            "type"?: (("shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover" | (string & {}))
                | (null));
            /**
             * When the fulfillment was last updated, in RFC3339 format. anyOf[1] (Value): string.
             * When the fulfillment was last updated, in RFC3339 format. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Monotonic fulfillment version for expected_version checks. anyOf[1] (Value):
             * integer. Monotonic fulfillment version for expected_version checks. Format: uint64.
             * minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "fulfillment.failed". */
    "event_type"?: "fulfillment.failed";
});
/** A hold on a fulfillment, with its reason, who placed it, and when it became active. */
export type FulfillmentHold = {
    /** Time the hold became active. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Explanation of the hold suitable for display to the merchant. */
    "display_reason"?: string;
    /** Actor that placed the fulfillment on hold. */
    "held_by"?: string;
    /**
     * Who placed this hold: merchant for the merchant or its integration, or flint for a Flint
     * payment hold. Value enum: "merchant", "flint".
     */
    "initiated_by": "merchant" | "flint" | (string & {});
    /**
     * Status before this hold. Never on_hold or terminal. The release_hold action restores this
     * status. Value enum: "pending", "accepted", "in_progress", "ready", "scheduled", "preparing",
     * "picked", "packed", "dispatched".
     */
    "previous_status": "pending"
        | "accepted"
        | "in_progress"
        | "ready"
        | "scheduled"
        | "preparing"
        | "picked"
        | "packed"
        | "dispatched"
        | (string & {});
    /**
     * Machine-readable reason fulfillment work is paused. Value enum: "payment_review",
     * "inventory_issue", "address_issue", "customer_request", "provider_issue",
     * "scheduling_issue", "fraud_review", "other".
     */
    "reason": "payment_review"
        | "inventory_issue"
        | "address_issue"
        | "customer_request"
        | "provider_issue"
        | "scheduling_issue"
        | "fraud_review"
        | "other"
        | (string & {});
    /** Additional notes explaining the hold. */
    "reason_notes"?: string;
};
export type FulfillmentHoldPreviousAttributes = {
    /**
     * Time the hold became active. anyOf[1] (Value): string. Time the hold became active. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "created_at"?: ((string) | (null));
    /**
     * Explanation of the hold suitable for display to the merchant. anyOf[1] (Value): string.
     * Explanation of the hold suitable for display to the merchant. anyOf[2] (Value): null.
     */
    "display_reason"?: ((string) | (null));
    /**
     * Actor that placed the fulfillment on hold. anyOf[1] (Value): string. Actor that placed the
     * fulfillment on hold. anyOf[2] (Value): null.
     */
    "held_by"?: ((string) | (null));
    /**
     * Who placed this hold: merchant for the merchant or its integration, or flint for a Flint
     * payment hold. Value enum: "merchant", "flint". anyOf[1] (Value): string. Who placed this
     * hold: merchant for the merchant or its integration, or flint for a Flint payment hold. Value
     * enum: "merchant", "flint". anyOf[2] (Value): null.
     */
    "initiated_by"?: (("merchant" | "flint" | (string & {})) | (null));
    /**
     * Status before this hold. Never on_hold or terminal. The release_hold action restores this
     * status. Value enum: "pending", "accepted", "in_progress", "ready", "scheduled", "preparing",
     * "picked", "packed", "dispatched". anyOf[1] (Value): string. Status before this hold. Never
     * on_hold or terminal. The release_hold action restores this status. Value enum: "pending",
     * "accepted", "in_progress", "ready", "scheduled", "preparing", "picked", "packed",
     * "dispatched". anyOf[2] (Value): null.
     */
    "previous_status"?: (("pending"
        | "accepted"
        | "in_progress"
        | "ready"
        | "scheduled"
        | "preparing"
        | "picked"
        | "packed"
        | "dispatched"
        | (string & {}))
        | (null));
    /**
     * Machine-readable reason fulfillment work is paused. Value enum: "payment_review",
     * "inventory_issue", "address_issue", "customer_request", "provider_issue",
     * "scheduling_issue", "fraud_review", "other". anyOf[1] (Value): string. Machine-readable
     * reason fulfillment work is paused. Value enum: "payment_review", "inventory_issue",
     * "address_issue", "customer_request", "provider_issue", "scheduling_issue", "fraud_review",
     * "other". anyOf[2] (Value): null.
     */
    "reason"?: (("payment_review"
        | "inventory_issue"
        | "address_issue"
        | "customer_request"
        | "provider_issue"
        | "scheduling_issue"
        | "fraud_review"
        | "other"
        | (string & {}))
        | (null));
    /**
     * Additional notes explaining the hold. anyOf[1] (Value): string. Additional notes explaining
     * the hold. anyOf[2] (Value): null.
     */
    "reason_notes"?: ((string) | (null));
};
/** The `itemized` variant of `FulfillmentPackagingInput`. */
export type FulfillmentItemizedPackagesRequest = ({
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** Name of the external system that `external_reference_id` belongs to. minLength: 1. */
    "external_system"?: string;
    /**
     * Caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * The one package that holds every submitted line quantity. The single package created with a
     * shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to
     * created or shipped; items and return_line_items are not accepted.
     */
    "package"?: SinglePackageCreateRequest;
    /**
     * Packages for an itemized shipment, from 1 to 20, each listing the items it holds. minItems:
     * 1. maxItems: 20. [] (Value): {@link PackageCreateRequest}. Package to create inline with its
     * enclosing shipment or fulfillment. Set status to created before handoff, or shipped to
     * report handoff during creation. [].buyer_notification_behavior (Optional): string. Controls
     * buyer email handling. Omit or use send to send when recipient, template, and deduplication
     * rules allow it. Use suppress when another system owns buyer messaging. Value enum: "send",
     * "suppress". [].carrier (Optional): string. Carrier that handles the package. minLength: 1.
     * [].dimensions (Optional): {@link Dimensions}. Dimensions of the package. Package or item
     * dimensions as `length`, `width`, and `height` in the given `unit`. [].expected_delivery_at
     * (Optional): string or null. When the carrier or merchant expects this package to arrive.
     * Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates and
     * transitions. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     * [].external_reference_id (Optional): string. Caller-owned identifier for this resource in an
     * external system. Requires external_system. External references are not unique. Use
     * Idempotency-Key for retries. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * [].external_system (Optional): string. Name of the external system that
     * external_reference_id belongs to. External references are not unique. Use Idempotency-Key
     * for retries. minLength: 1. [].items (Required): Array of {@link CreatePackageItemRequest}.
     * Independent package-item collection. Required when status is shipped. Inline creation uses
     * the child-create shape and commits atomically; edit items through the package item routes
     * after creation. Each order line and bundle component pair may appear once. minItems: 1.
     * maxItems: 100. [].items[] (Value): {@link CreatePackageItemRequest}. The request body for:
     * Create package item. [].label_url (Optional): string. HTTPS shipping-label URL supplied by
     * your integration. Non-Flint URLs require external_system for provenance. Flint does not host
     * the label file. minLength: 1. [].metadata (Optional): {@link MetadataMap}. Caller-owned
     * metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Caller-owned key-value data
     * for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to
     * 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values
     * total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with
     * flint_ are reserved for Flint. maxProperties: 50. [].return_line_items (Optional): Array of
     * {@link ReturnResolutionLineItemRequest}. Required for a package on a return shipment:
     * allocates quantities from the shipment's return_line_items to this parcel. Rejected on
     * outbound shipments. [].return_line_items[] (Value): {@link ReturnResolutionLineItemRequest}.
     * A Return line and the quantity to place in a return shipment or package. The enclosing
     * Return or shipment determines its parent. [].service_code (Optional): string. Carrier's code
     * for the shipping service used. minLength: 1. [].shipped_at (Optional): string. Package
     * handoff time. Defaults to request time. Only allowed with status shipped. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z". [].status (Required): string. Outbound
     * packages can start as created or shipped. Return packages must start as created, omit items,
     * and include return_line_items. Use mark_shipped after the buyer hands over the return
     * package. Value enum: "created", "shipped". [].status_reason (Optional): string. Additional
     * explanation of the package's starting status. minLength: 1. [].tracking_number (Optional):
     * string. Carrier tracking number for the package. minLength: 1. [].tracking_url (Optional):
     * string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected.
     * minLength: 1. [].weight (Optional): {@link Weight}. Weight of the package. A weight value in
     * grams, kilograms, ounces, or pounds, used in delivery profile configuration. [].oneOf[1]
     * (Value): {@link PackageCreateInputCreated}. Package to create inline with its enclosing
     * shipment or fulfillment. Set status to created before handoff, or shipped to report handoff
     * during creation. [].oneOf[2] (Value): {@link PackageCreateInputShipped}. Package to create
     * inline with its enclosing shipment or fulfillment. Set status to created before handoff, or
     * shipped to report handoff during creation.
     */
    "packages": Array<({
        /**
         * Independent package-item collection. Required when status is shipped. Inline creation
         * uses the child-create shape and commits atomically; edit items through the package item
         * routes after creation. Each order line and bundle component pair may appear once.
         * minItems: 1. maxItems: 100. [] (Value): {@link CreatePackageItemRequest}. The request
         * body for: Create package item.
         */
        "items": Array<CreatePackageItemRequest>;
    })
        & (Exclude<PackageCreateRequest & object, readonly unknown[]>)>;
    /** How the shipment's packages are described. Value enum: "itemized". */
    "packaging": "itemized" | (string & {});
});
/** The `itemized` variant of `FulfillmentPackagingInput`. */
export type FulfillmentItemizedPackagesRequestInput = ({
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** Name of the external system that `external_reference_id` belongs to. minLength: 1. */
    "external_system"?: string;
    /**
     * Caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * The one package that holds every submitted line quantity. The single package created with a
     * shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to
     * created or shipped; items and return_line_items are not accepted.
     */
    "package"?: SinglePackageCreateRequestInput;
    /**
     * Packages for an itemized shipment, from 1 to 20, each listing the items it holds. minItems:
     * 1. maxItems: 20. [] (Value): {@link PackageCreateRequestInput}. Package to create inline
     * with its enclosing shipment or fulfillment. Set status to created before handoff, or shipped
     * to report handoff during creation. [].buyer_notification_behavior (Optional): string.
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress". [].carrier (Optional): string. Carrier that handles the package.
     * minLength: 1. [].dimensions (Optional): {@link DimensionsRequestInput}. Dimensions of the
     * package. Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     * [].expected_delivery_at (Optional): string or null. When the carrier or merchant expects
     * this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it
     * unchanged on updates and transitions. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z". [].external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. Requires external_system. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". [].external_system (Optional): string. Name of the external system that
     * external_reference_id belongs to. External references are not unique. Use Idempotency-Key
     * for retries. minLength: 1. [].items (Required): Array of {@link
     * CreatePackageItemRequestInput}. Independent package-item collection. Required when status is
     * shipped. Inline creation uses the child-create shape and commits atomically; edit items
     * through the package item routes after creation. Each order line and bundle component pair
     * may appear once. minItems: 1. maxItems: 100. [].items[] (Value): {@link
     * CreatePackageItemRequestInput}. The request body for: Create package item. [].label_url
     * (Optional): string. HTTPS shipping-label URL supplied by your integration. Non-Flint URLs
     * require external_system for provenance. Flint does not host the label file. minLength: 1.
     * [].metadata (Optional): {@link MetadataRequestInput}. Caller-owned metadata. Values can't be
     * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
     * cannot be written through the public API. Caller-owned key-value data for a new or replaced
     * map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code
     * points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768
     * UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for
     * Flint. maxProperties: 50. [].return_line_items (Optional): Array of {@link
     * ReturnShipmentLineItemAllocationRequestInput}. Required for a package on a return shipment:
     * allocates quantities from the shipment's return_line_items to this parcel. Rejected on
     * outbound shipments. [].return_line_items[] (Value): {@link
     * ReturnShipmentLineItemAllocationRequestInput}. A Return line and the quantity to place in a
     * return shipment or package. The enclosing Return or shipment determines its parent.
     * [].service_code (Optional): string. Carrier's code for the shipping service used. minLength:
     * 1. [].shipped_at (Optional): string. Package handoff time. Defaults to request time. Only
     * allowed with status shipped. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z". [].status (Required): string. Outbound packages can start as created
     * or shipped. Return packages must start as created, omit items, and include
     * return_line_items. Use mark_shipped after the buyer hands over the return package. Value
     * enum: "created", "shipped". [].status_reason (Optional): string. Additional explanation of
     * the package's starting status. minLength: 1. [].tracking_number (Optional): string. Carrier
     * tracking number for the package. minLength: 1. [].tracking_url (Optional): string. Absolute
     * HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. [].weight
     * (Optional): {@link WeightRequestInput}. Weight of the package. A weight value in grams,
     * kilograms, ounces, or pounds, used in delivery profile configuration. [].oneOf[1] (Value):
     * {@link PackageCreateInputCreatedInput}. Package to create inline with its enclosing shipment
     * or fulfillment. Set status to created before handoff, or shipped to report handoff during
     * creation. [].oneOf[2] (Value): {@link PackageCreateInputShippedInput}. Package to create
     * inline with its enclosing shipment or fulfillment. Set status to created before handoff, or
     * shipped to report handoff during creation.
     */
    "packages": Array<({
        /**
         * Independent package-item collection. Required when status is shipped. Inline creation
         * uses the child-create shape and commits atomically; edit items through the package item
         * routes after creation. Each order line and bundle component pair may appear once.
         * minItems: 1. maxItems: 100. [] (Value): {@link CreatePackageItemRequestInput}. The
         * request body for: Create package item.
         */
        "items": Array<CreatePackageItemRequestInput>;
    })
        & (Exclude<PackageCreateRequestInput & object, readonly unknown[]>)>;
    /** How the shipment's packages are described. Value enum: "itemized". */
    "packaging": "itemized";
})
    & (({
    "package"?: never;
}));
/** An order line item and quantity included in a fulfillment, with the modifiers applied to it. */
export type FulfillmentLineItem = {
    /**
     * Bundle component this row counts, in component units. `null` when the line isn't a bundle
     * component. Look it up in the order line's bundle_components. Example:
     * "bunc_01KEZF7C00CQASEZGAPEANTGD1".
     */
    "bundle_component_id": string | null;
    /**
     * Modifier selections snapshotted from the order line for fulfillment. [] (Value): {@link
     * OrderLineItemModifier}. A modifier selected on an order line item.
     */
    "modifiers"?: Array<OrderLineItemModifier>;
    /** Order that owns the referenced line item. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /**
     * Order line whose quantity is allocated to the fulfillment. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /**
     * Whole-number quantity in component units for a bundle component, or line units otherwise;
     * fractional quantities are not supported. Format: int64.
     */
    "quantity": number;
};
export type FulfillmentLineItemPreviousAttributes = {
    /**
     * Bundle component this row counts, in component units. `null` when the line isn't a bundle
     * component. Look it up in the order line's bundle_components. anyOf[1] (Value): string.
     * Bundle component this row counts, in component units. `null` when the line isn't a bundle
     * component. Look it up in the order line's bundle_components. Example:
     * "bunc_01KEZF7C00CQASEZGAPEANTGD1". anyOf[2] (Value): null.
     */
    "bundle_component_id"?: ((string) | (null));
    /**
     * Modifier selections snapshotted from the order line for fulfillment. anyOf[1] (Value): Array
     * of {@link OrderLineItemModifierPreviousAttributes}. Modifier selections snapshotted from the
     * order line for fulfillment. anyOf[1][] (Value): {@link
     * OrderLineItemModifierPreviousAttributes}. anyOf[2] (Value): null.
     */
    "modifiers"?: ((Array<OrderLineItemModifierPreviousAttributes>) | (null));
    /**
     * Order that owns the referenced line item. anyOf[1] (Value): string. Order that owns the
     * referenced line item. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     */
    "order_id"?: ((string) | (null));
    /**
     * Order line whose quantity is allocated to the fulfillment. anyOf[1] (Value): string. Order
     * line whose quantity is allocated to the fulfillment. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value): null.
     */
    "order_line_item_id"?: ((string) | (null));
    /**
     * Whole-number quantity in component units for a bundle component, or line units otherwise;
     * fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity in
     * component units for a bundle component, or line units otherwise; fractional quantities are
     * not supported. Format: int64. anyOf[2] (Value): null.
     */
    "quantity"?: ((number) | (null));
};
/** An order line item and quantity to include when creating a fulfillment. */
export type FulfillmentLineItemRequest = {
    /**
     * Bundle component to fulfill, from the order line's bundle_components. Omit or send `null`
     * when the line isn't a bundle component. A bundle line requires its component ID. minLength:
     * 1. Example: "bunc_01KEZF7C00CQASEZGAPEANTGD1".
     */
    "bundle_component_id"?: string | null;
    /**
     * Order line whose quantity is allocated. minLength: 1. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /**
     * Whole-number quantity in component units for a bundle component, or line units otherwise;
     * fractional quantities are not supported. Format: int64.
     */
    "quantity": number;
};
/** An order line item and quantity to include when creating a fulfillment. */
export type FulfillmentLineItemRequestInput = FulfillmentLineItemRequest;
/** A page of `Fulfillment` objects. */
export type FulfillmentListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * Fulfillment}. Work required to deliver an order's items.
     */
    "data": Array<Fulfillment>;
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
/** A message sent about an order's fulfillment. */
export type FulfillmentNotification = {
    /**
     * How Flint sends this notification. - `email`: Sends the notification to recipient_email.
     * Value enum: "email".
     */
    "channel": "email" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "failed_at"?: string;
    /**
     * ID of the fulfillment event that triggered the notification. Example:
     * "fev_01KEZF7C002XK9D7X3239ERT51".
     */
    "fulfillment_event_id"?: string;
    /**
     * ID of the fulfillment the notification is about. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id": string;
    /**
     * Unique identifier for this fulfillment notification, prefixed `fnt_`. Example:
     * "fnt_01KEZF7C00QD91RXQH2E7H9K5E".
     */
    "fulfillment_notification_id": string;
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * The buyer update this notification communicates. - `fulfillment_ready`: The fulfillment is
     * ready for pickup. - `fulfillment_dispatched`: The fulfillment was dispatched. -
     * `fulfillment_completed`: The fulfillment was completed. - `fulfillment_canceled`: The
     * fulfillment was canceled. - `fulfillment_failed`: The fulfillment failed. -
     * `fulfillment_no_show`: A service appointment was missed. - `fulfillment_shipped`: The
     * fulfillment was shipped. - `fulfillment_delivered`: The fulfillment was delivered. -
     * `shipment_shipped`: A shipment was shipped. - `shipment_out_for_delivery`: A shipment is out
     * for delivery. - `shipment_delivered`: A shipment was delivered. -
     * `shipment_delivery_attempted`: A carrier attempted to deliver a shipment. -
     * `shipment_exception`: A shipment has a delivery exception. - `shipment_returned`: A shipment
     * was returned. Value enum: "fulfillment_ready", "fulfillment_dispatched",
     * "fulfillment_completed", "fulfillment_canceled", "fulfillment_failed",
     * "fulfillment_no_show", "fulfillment_shipped", "fulfillment_delivered", "shipment_shipped",
     * "shipment_out_for_delivery", "shipment_delivered", "shipment_delivery_attempted",
     * "shipment_exception", "shipment_returned".
     */
    "notification_type": "fulfillment_ready"
        | "fulfillment_dispatched"
        | "fulfillment_completed"
        | "fulfillment_canceled"
        | "fulfillment_failed"
        | "fulfillment_no_show"
        | "fulfillment_shipped"
        | "fulfillment_delivered"
        | "shipment_shipped"
        | "shipment_out_for_delivery"
        | "shipment_delivered"
        | "shipment_delivery_attempted"
        | "shipment_exception"
        | "shipment_returned"
        | (string & {});
    /**
     * Present only when `expand` includes `order`; `null` when expanded and there is no related
     * order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
     * status, payment and refund status, and pricing and settlement amounts, returned when the
     * order is expanded. anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** ID of the order the notification is about. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /**
     * ID of the package the notification is about, when it concerns a package. Example:
     * "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R".
     */
    "package_id"?: string;
    /**
     * ID of the customer the notification was sent to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "recipient_customer_id"?: string;
    /** Email address the notification was sent to. */
    "recipient_email"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "sent_at"?: string;
    /**
     * ID of the shipment the notification is about, when it concerns a shipment. Example:
     * "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     */
    "shipment_id"?: string;
    /**
     * Whether the notification's email is waiting to send, was sent, failed, or was suppressed.
     * Value enum: "pending", "sent", "failed", "suppressed".
     */
    "status": "pending" | "sent" | "failed" | "suppressed" | (string & {});
    /**
     * Why Flint chose not to send this notification. - `source_suppressed`: The originating
     * request suppressed buyer messaging. - `default_suppressed`: The configured default
     * suppressed buyer messaging. - `recipient_missing`: No usable recipient was available. -
     * `template_not_configured`: No notification template was configured. -
     * `merchant_managed_email`: The merchant's integration owns this email. -
     * `recipient_unsubscribed`: The recipient opted out of this notification. -
     * `sandbox_daily_limit_reached`: Not sent because the sandbox reached its daily limit of buyer
     * emails to addresses outside your team. Send to a team address, or wait for the next UTC day.
     * Value enum: "source_suppressed", "default_suppressed", "recipient_missing",
     * "template_not_configured", "merchant_managed_email", "recipient_unsubscribed",
     * "sandbox_daily_limit_reached".
     */
    "suppression_reason"?: "source_suppressed"
        | "default_suppressed"
        | "recipient_missing"
        | "template_not_configured"
        | "merchant_managed_email"
        | "recipient_unsubscribed"
        | "sandbox_daily_limit_reached"
        | (string & {});
    /**
     * What created this notification. - `fulfillment_status_updated`: Created by a fulfillment
     * status transition. - `fulfillment_event_created`: Created by a fulfillment timeline event.
     * Value enum: "fulfillment_status_updated", "fulfillment_event_created".
     */
    "trigger_type": "fulfillment_status_updated" | "fulfillment_event_created" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
};
/** A page of `FulfillmentNotification` objects. */
export type FulfillmentNotificationListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * FulfillmentNotification}. A message sent about an order's fulfillment.
     */
    "data": Array<FulfillmentNotification>;
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
/** A response containing `FulfillmentNotification` data. */
export type FulfillmentNotificationResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A message sent about an
     * order's fulfillment.
     */
    "data": FulfillmentNotification;
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
export type FulfillmentNotificationsGetParams = FulfillmentEventsGetParams;
