import type { InputValue } from '../runtime.js';
import type { CloseGiftCardRequestInput } from './types-6.js';
import type { CreateGiftCardRequestInput } from './types-9.js';
import type { FreezeGiftCardRequestInput } from './types-25.js';
import type { DisputesAcceptParams } from './types-24.js';
import type { LookupGiftCardRequestInput } from './types-35.js';
import type { RotateGiftCardCodeRequestInput } from './types-59.js';
import type { UnfreezeGiftCardRequestInput } from './types-66.js';
import type { UpdateGiftCardRequestInput, UpdateInventoryAllocationPolicyRequestInput } from './types-67.js';
import type { ResponseMeta } from './types-54.js';
import type { GiftCardFundingSource, GiftCardFundingSourceRequestInput } from './types-26.js';
import type { MoneyValue, MoneyValueInput } from './types-39.js';
import type {
    MetadataMap,
    ModifierRequest,
    MetadataRequestInput,
    ModifierRequestInput,
    MerchantWebhookEnvelope
} from './types-38.js';
import type { TextModifierConfigRequest, TextModifierConfigRequestInput } from './types-65.js';
import type { InventorySourceSystem } from './types-30.js';
import type { InventoryLevel, InventoryCountLine, InventoryCountObservationProvenance } from './types-29.js';
import type { CreateInventoryAdjustmentRequestInput, CreateInventoryAllocationPolicyRequestInput } from './types-10.js';
import type { PartnerWebhookEnvelope } from './types-44.js';
export type GiftCardsCloseParams = (InputValue<CloseGiftCardRequestInput> | {
    "expected_version"?: never;
})
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
export type GiftCardsCreateParams = (InputValue<CreateGiftCardRequestInput>)
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
export type GiftCardsFreezeParams = (InputValue<FreezeGiftCardRequestInput>)
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
export type GiftCardsGetParams = DisputesAcceptParams;
export type GiftCardsListParams = {
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Exact, case-sensitive filter on the customer stored on the gift card. An unknown customer
     * returns an empty page. pattern: ^cus_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: InputValue<string>;
    /** Exact, case-sensitive filter. minLength: 1. maxLength: 255. Example: "warehouse-1842". */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255. pattern:
     * ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
     */
    "idempotency_key"?: InputValue<string>;
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
     * Exact, case-sensitive filter. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "active", "closed", "frozen", "pending". Value enum: "active", "closed",
     * "frozen", "pending". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active",
     * "closed", "frozen", "pending". anyOf[1][] (Value): string. maxLength: 255. Value enum:
     * "active", "closed", "frozen", "pending". anyOf[2] (Value): string. maxLength: 255. Value
     * enum: "active", "closed", "frozen", "pending".
     */
    "status"?: InputValue<("active" | "closed" | "frozen" | "pending")
        | readonly ("active" | "closed" | "frozen" | "pending")[]>;
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
export type GiftCardsLookupParams = (InputValue<LookupGiftCardRequestInput>)
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
export type GiftCardsRotateCodeParams = (InputValue<RotateGiftCardCodeRequestInput>
    | {
    "expected_version"?: never;
    "notification"?: never;
})
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
export type GiftCardsUnfreezeParams = (InputValue<UnfreezeGiftCardRequestInput> | {
    "expected_version"?: never;
})
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
export type GiftCardsUpdateParams = (InputValue<UpdateGiftCardRequestInput>)
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
/**
 * Result of linking a guest's purchases to a customer, with the customer, the email, and the
 * number of orders linked.
 */
export type GuestPurchaseLink = {
    /**
     * ID of the customer the guest purchases now belong to. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string;
    /** The verified email address whose guest purchases were linked. */
    "email": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "linked_at": string;
    /** Number of guest orders linked to the customer by this request. Format: int64. */
    "linked_order_count": number;
};
/** A response containing `GuestPurchaseLink` data. */
export type GuestPurchaseLinkResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Result of linking a
     * guest's purchases to a customer, with the customer, the email, and the number of orders
     * linked.
     */
    "data": GuestPurchaseLink;
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
/** Pauses fulfillment work with a required merchant hold reason. */
export type HoldFulfillmentRequest = {
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
     * Why fulfillment work is paused or the service appointment was missed. Value enum:
     * "inventory_issue", "address_issue", "customer_request", "provider_issue",
     * "scheduling_issue", "fraud_review", "other".
     */
    "reason": "inventory_issue"
        | "address_issue"
        | "customer_request"
        | "provider_issue"
        | "scheduling_issue"
        | "fraud_review"
        | "other"
        | (string & {});
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** Pauses fulfillment work with a required merchant hold reason. */
export type HoldFulfillmentRequestInput = {
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
     * Why fulfillment work is paused or the service appointment was missed. Value enum:
     * "inventory_issue", "address_issue", "customer_request", "provider_issue",
     * "scheduling_issue", "fraud_review", "other".
     */
    "reason": "inventory_issue"
        | "address_issue"
        | "customer_request"
        | "provider_issue"
        | "scheduling_issue"
        | "fraud_review"
        | "other";
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** An image with its URL, size, and alt text. */
export type Image = {
    /** Alternative text describing the image for accessibility. */
    "alt"?: string;
    /** Image height in pixels, when known. Format: int32. */
    "height": number;
    /** URL of the image. */
    "url": string;
    /** Image width in pixels, when known. Format: int32. */
    "width": number;
};
/** An image attached to a resource, with its display properties and attachment metadata. */
export type ImageAttachment = {
    /** Alternative text describing the image for accessibility. */
    "alt"?: string;
    /**
     * Identifier of the file attached as this image. Example: "file_01KEZF7C00BZ179303GY9R0P03".
     */
    "file_id"?: string;
    /** Image height in pixels, when known. Format: int32. */
    "height": number;
    /**
     * Caller-owned reference identifying this attachment within its gallery. minLength: 1.
     * maxLength: 255.
     */
    "source_reference"?: string;
    /** URL of the image. */
    "url": string;
    /** Image width in pixels, when known. Format: int32. */
    "width": number;
};
/** The `File` variant of `ImageInput`. */
export type ImageInputFile = ({
    /** Alternative text describing the image for accessibility. minLength: 1. maxLength: 512. */
    "alt"?: string;
    /**
     * The ID of a ready file uploaded with POST /v1/files. Send exactly one of source_url or
     * file_id. minLength: 1. pattern: ^file_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "file_01KEZF7C00BZ179303GY9R0P03".
     */
    "file_id": string;
    /**
     * An opaque reference for this attachment, unique within its gallery. Whitespace and case are
     * preserved. minLength: 1. maxLength: 255.
     */
    "source_reference"?: string;
    /**
     * A public image URL for Flint to fetch, or an untransformed canonical image.url returned by
     * Flint. Send exactly one of source_url or file_id. Canonical Flint URLs attach without
     * another fetch. Flint doesn't download a source_url again while the image it produced is
     * still in this field. minLength: 1. maxLength: 8192.
     */
    "source_url"?: string;
});
/** The `File` variant of `ImageInput`. */
export type ImageInputFileInput = ({
    /** Alternative text describing the image for accessibility. minLength: 1. maxLength: 512. */
    "alt"?: string;
    /**
     * The ID of a ready file uploaded with POST /v1/files. Send exactly one of source_url or
     * file_id. minLength: 1. pattern: ^file_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "file_01KEZF7C00BZ179303GY9R0P03".
     */
    "file_id": string;
    /**
     * An opaque reference for this attachment, unique within its gallery. Whitespace and case are
     * preserved. minLength: 1. maxLength: 255.
     */
    "source_reference"?: string;
    /**
     * A public image URL for Flint to fetch, or an untransformed canonical image.url returned by
     * Flint. Send exactly one of source_url or file_id. Canonical Flint URLs attach without
     * another fetch. Flint doesn't download a source_url again while the image it produced is
     * still in this field. minLength: 1. maxLength: 8192.
     */
    "source_url"?: string;
})
    & (({
    "source_url"?: never;
}));
/** The `Source URL` variant of `ImageInput`. */
export type ImageInputSourceURL = ({
    /** Alternative text describing the image for accessibility. minLength: 1. maxLength: 512. */
    "alt"?: string;
    /**
     * The ID of a ready file uploaded with POST /v1/files. Send exactly one of source_url or
     * file_id. minLength: 1. pattern: ^file_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "file_01KEZF7C00BZ179303GY9R0P03".
     */
    "file_id"?: string;
    /**
     * An opaque reference for this attachment, unique within its gallery. Whitespace and case are
     * preserved. minLength: 1. maxLength: 255.
     */
    "source_reference"?: string;
    /**
     * A public image URL for Flint to fetch, or an untransformed canonical image.url returned by
     * Flint. Send exactly one of source_url or file_id. Canonical Flint URLs attach without
     * another fetch. Flint doesn't download a source_url again while the image it produced is
     * still in this field. minLength: 1. maxLength: 8192.
     */
    "source_url": string;
});
/** The `Source URL` variant of `ImageInput`. */
export type ImageInputSourceURLInput = ({
    /** Alternative text describing the image for accessibility. minLength: 1. maxLength: 512. */
    "alt"?: string;
    /**
     * The ID of a ready file uploaded with POST /v1/files. Send exactly one of source_url or
     * file_id. minLength: 1. pattern: ^file_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "file_01KEZF7C00BZ179303GY9R0P03".
     */
    "file_id"?: string;
    /**
     * An opaque reference for this attachment, unique within its gallery. Whitespace and case are
     * preserved. minLength: 1. maxLength: 255.
     */
    "source_reference"?: string;
    /**
     * A public image URL for Flint to fetch, or an untransformed canonical image.url returned by
     * Flint. Send exactly one of source_url or file_id. Canonical Flint URLs attach without
     * another fetch. Flint doesn't download a source_url again while the image it produced is
     * still in this field. minLength: 1. maxLength: 8192.
     */
    "source_url": string;
})
    & (({
    "file_id"?: never;
}));
/** A reference to an image by `url`, with optional `alt` text, used on an order line item. */
export type ImageReferenceRequest = {
    /** Alternative text describing the image for accessibility. minLength: 1. */
    "alt"?: string;
    /** URL of the image. minLength: 1. */
    "url": string;
};
/** A reference to an image by `url`, with optional `alt` text, used on an order line item. */
export type ImageReferenceRequestInput = ImageReferenceRequest;
/** An image you supply by `source_url`, with optional `alt` text and external reference. */
export type ImageRequest = ({
    /** Alternative text describing the image for accessibility. minLength: 1. maxLength: 512. */
    "alt"?: string;
    /**
     * The ID of a ready file uploaded with POST /v1/files. Send exactly one of source_url or
     * file_id. minLength: 1. pattern: ^file_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "file_01KEZF7C00BZ179303GY9R0P03".
     */
    "file_id"?: string;
    /**
     * An opaque reference for this attachment, unique within its gallery. Whitespace and case are
     * preserved. minLength: 1. maxLength: 255.
     */
    "source_reference"?: string;
    /**
     * A public image URL for Flint to fetch, or an untransformed canonical image.url returned by
     * Flint. Send exactly one of source_url or file_id. Canonical Flint URLs attach without
     * another fetch. Flint doesn't download a source_url again while the image it produced is
     * still in this field. minLength: 1. maxLength: 8192.
     */
    "source_url"?: string;
})
    & ((Exclude<ImageInputSourceURL & object, readonly unknown[]>)
    | (Exclude<ImageInputFile & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** An image you supply by `source_url`, with optional `alt` text and external reference. */
export type ImageRequestInput = ({
    /** Alternative text describing the image for accessibility. minLength: 1. maxLength: 512. */
    "alt"?: string;
    /**
     * The ID of a ready file uploaded with POST /v1/files. Send exactly one of source_url or
     * file_id. minLength: 1. pattern: ^file_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "file_01KEZF7C00BZ179303GY9R0P03".
     */
    "file_id"?: string;
    /**
     * An opaque reference for this attachment, unique within its gallery. Whitespace and case are
     * preserved. minLength: 1. maxLength: 255.
     */
    "source_reference"?: string;
    /**
     * A public image URL for Flint to fetch, or an untransformed canonical image.url returned by
     * Flint. Send exactly one of source_url or file_id. Canonical Flint URLs attach without
     * another fetch. Flint doesn't download a source_url again while the image it produced is
     * still in this field. minLength: 1. maxLength: 8192.
     */
    "source_url"?: string;
})
    & ((Exclude<ImageInputSourceURLInput & object, readonly unknown[]>)
    | (Exclude<ImageInputFileInput & object, readonly unknown[]>));
/**
 * The initial funding for a new gift card: the `source` of the value, the `value_money`, and
 * optional consideration and source time.
 */
export type InitialGiftCardFunding = ({
    /**
     * What the buyer paid for the value, separate from `value_money`. `null` when no payment
     * amount is recorded. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. anyOf[1].amount (Required): integer
     * string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. Amount in the currency's minor unit, such as cents for USD. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * anyOf[1].currency (Required): string. ISO 4217 currency code for this amount. minLength: 3.
     * maxLength: 3. pattern: ^[A-Z]{3}$. anyOf[2] (Value): null.
     */
    "consideration_money"?: ((({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 0.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>))
        | (null)
        | (unknown));
    /**
     * Where the value came from, with your reference for it. Where the value of a gift card load
     * came from, such as an external payment, a Flint payment, an import, or an adjustment, with
     * your reference for it. funding_source_type (Required): string. Where the value came from.
     * Value enum: "external_payment", "flint_payment", "import". customer_id (Optional): string.
     * ID of the customer the funding is attributed to. Required for `external_payment` and
     * `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". external_reference_id (Required): string. Your reference
     * for the payment or import record that funded this value, such as a POS sale ID. Required; 1
     * to 255 characters. minLength: 1. maxLength: 255. Example: "warehouse-1842". order_id
     * (Optional): string. ID of the order that funded the value. Required for
     * `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`.
     * minLength: 1. maxLength: 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * order_manual_payment_id (Optional): string. ID of the manual payment on the order that
     * funded the value. Required for `flint_manual_payment`. minLength: 1. maxLength: 255.
     * Example: "omp_01KEZF7C007J18203RBJKB9TYE". payment_intent_id (Optional): string. The
     * original payment for flint_payment or store_credit value. For standalone paid funding, use a
     * captured payment intent without an order_id. Order-linked payments fund purchased cards or
     * store credit through their order. minLength: 1. maxLength: 255. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". refund_id (Optional): string. Refund that issued this
     * value. Present only when funding_source_type is store_credit. minLength: 1. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". oneOf[1] (Value): {@link
     * GiftCardFundingSourceExternalPayment}. The `external_payment` variant of
     * `GiftCardFundingSource`. oneOf[2] (Value): {@link GiftCardFundingSourceFlintPayment}. The
     * `flint_payment` variant of `GiftCardFundingSource`. oneOf[3] (Value): {@link
     * GiftCardFundingSourceFlintManualPayment}. The `flint_manual_payment` variant of
     * `GiftCardFundingSource`. oneOf[4] (Value): {@link GiftCardFundingSourceImport}. The `import`
     * variant of `GiftCardFundingSource`. oneOf[5] (Value): {@link
     * GiftCardFundingSourceAdjustment}. The `adjustment` variant of `GiftCardFundingSource`.
     * oneOf[6] (Value): {@link GiftCardFundingSourceGiftCardRefund}. The `gift_card_refund`
     * variant of `GiftCardFundingSource`. oneOf[7] (Value): {@link
     * GiftCardFundingSourceGiftCardPurchaseRefundRecovery}. The
     * `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`. oneOf[8] (Value):
     * {@link GiftCardFundingSourceStoreCredit}. The `store_credit` variant of
     * `GiftCardFundingSource`.
     */
    "source": ({
        /** Value enum: "external_payment", "flint_payment", "import". */
        "funding_source_type"?: unknown;
    })
        & (Exclude<GiftCardFundingSource & object, readonly unknown[]>);
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "source_created_at"?: string;
    /**
     * The face value the load adds to the card. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. amount (Required): integer string. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. currency (Required): string. ISO 4217
     * currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "value_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
});
/**
 * The initial funding for a new gift card: the `source` of the value, the `value_money`, and
 * optional consideration and source time.
 */
export type InitialGiftCardFundingInput = ({
    /**
     * What the buyer paid for the value, separate from `value_money`. `null` when no payment
     * amount is recorded. anyOf[1] (Value): {@link MoneyValueInput}. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. anyOf[1].amount (Required): integer
     * string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. Amount in the currency's minor unit, such as cents for USD. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * anyOf[1].currency (Required): string. ISO 4217 currency code for this amount. minLength: 3.
     * maxLength: 3. pattern: ^[A-Z]{3}$. anyOf[2] (Value): null.
     */
    "consideration_money"?: ((({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 0.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>))
        | (null));
    /**
     * Where the value came from, with your reference for it. Where the value of a gift card load
     * came from, such as an external payment, a Flint payment, an import, or an adjustment, with
     * your reference for it. funding_source_type (Required): string. Where the value came from.
     * Value enum: "external_payment", "flint_payment", "import". customer_id (Optional): string.
     * ID of the customer the funding is attributed to. Required for `external_payment` and
     * `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". external_reference_id (Required): string. Your reference
     * for the payment or import record that funded this value, such as a POS sale ID. Required; 1
     * to 255 characters. minLength: 1. maxLength: 255. Example: "warehouse-1842". order_id
     * (Optional): string. ID of the order that funded the value. Required for
     * `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`.
     * minLength: 1. maxLength: 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent_id
     * (Optional): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". oneOf[1] (Value): {@link
     * GiftCardFundingSourceExternalPaymentRequestInput}. The `external_payment` variant of
     * `GiftCardFundingSource`. oneOf[2] (Value): {@link
     * GiftCardFundingSourceFlintPaymentRequestInput}. The `flint_payment` variant of
     * `GiftCardFundingSource`. oneOf[3] (Value): {@link
     * GiftCardFundingSourceFlintManualPaymentRequestInput}. The `flint_manual_payment` variant of
     * `GiftCardFundingSource`. oneOf[4] (Value): {@link GiftCardFundingSourceImportRequestInput}.
     * The `import` variant of `GiftCardFundingSource`. oneOf[5] (Value): {@link
     * GiftCardFundingSourceAdjustmentRequestInput}. The `adjustment` variant of
     * `GiftCardFundingSource`. oneOf[6] (Value): {@link
     * GiftCardFundingSourceGiftCardRefundRequestInput}. The `gift_card_refund` variant of
     * `GiftCardFundingSource`. oneOf[7] (Value): {@link
     * GiftCardFundingSourceGiftCardPurchaseRefundRecoveryRequestInput}. The
     * `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`. oneOf[8] (Value):
     * {@link GiftCardFundingSourceStoreCreditRequestInput}. The `store_credit` variant of
     * `GiftCardFundingSource`.
     */
    "source": ({
        /** Value enum: "external_payment", "flint_payment", "import". */
        "funding_source_type"?: "external_payment" | "flint_payment" | "import";
    })
        & (Exclude<GiftCardFundingSourceRequestInput & object, readonly unknown[]>)
        & ({
        "order_manual_payment_id"?: never;
    });
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "source_created_at"?: string | globalThis.Date;
    /**
     * The face value the load adds to the card. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. amount (Required): integer string. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. currency (Required): string. ISO 4217
     * currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "value_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
});
/**
 * A modifier group defined inline when setting up a modifier set, with its name, rules for how
 * many options can be selected, and its modifiers.
 */
export type InlineModifierGroupRequest = {
    /** Whether buyers can select more than one unit of a list modifier. Default: false. */
    "allow_quantities"?: boolean;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Maximum whole-number quantity for each selected list modifier when allow_quantities is true;
     * fractional quantities are not supported. Format: int64.
     */
    "max_quantity"?: number;
    /**
     * Maximum number of distinct modifiers buyers can select from a list group. Omit it for no
     * limit. A modifier set can override this value. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Maximum combined whole-number quantity across selected list modifiers; fractional quantities
     * are not supported. Format: int64.
     */
    "max_total_quantity"?: number;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Minimum whole-number quantity for each selected list modifier when allow_quantities is true;
     * fractional quantities are not supported. Format: int64.
     */
    "min_quantity"?: number;
    /**
     * Minimum number of distinct modifiers buyers must select from a list group. Omit it to
     * require no selections. A modifier set can override this value. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`),
     * read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't
     * return it. minLength: 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id"?: string;
    /**
     * Whether buyers choose from a list of modifiers or enter text. On create, inferred as text
     * when text configuration is supplied, otherwise list. Value enum: "list", "text".
     */
    "modifier_group_type"?: "list" | "text" | (string & {});
    /**
     * Choices in a list group. Only active modifiers whose set override's available is not false
     * are offered to buyers. Text groups do not have choices. [] (Value): {@link ModifierRequest}.
     * A modifier you supply when creating or updating a modifier group, such as an add-on with a
     * price change.
     */
    "modifiers"?: Array<ModifierRequest>;
    /** Name of the modifier group shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Whether selections from this group appear in fulfillment details unless overridden for a
     * modifier set.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Whether selections from this group appear on buyer receipts unless overridden for a modifier
     * set.
     */
    "show_on_receipt"?: boolean;
    /**
     * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
     * archived groups remain readable and cannot be edited. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Text entry rules for a text group. Use text.required to require a value; list groups use
     * min_selected instead. Settings for a text modifier group when creating or updating one:
     * required, multiline, and length limits.
     */
    "text"?: TextModifierConfigRequest;
};
/**
 * A modifier group defined inline when setting up a modifier set, with its name, rules for how
 * many options can be selected, and its modifiers.
 */
export type InlineModifierGroupRequestInput = {
    /** Whether buyers can select more than one unit of a list modifier. Default: false. */
    "allow_quantities"?: boolean;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Maximum whole-number quantity for each selected list modifier when allow_quantities is true;
     * fractional quantities are not supported. Format: int64.
     */
    "max_quantity"?: number;
    /**
     * Maximum number of distinct modifiers buyers can select from a list group. Omit it for no
     * limit. A modifier set can override this value. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Maximum combined whole-number quantity across selected list modifiers; fractional quantities
     * are not supported. Format: int64.
     */
    "max_total_quantity"?: number;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Minimum whole-number quantity for each selected list modifier when allow_quantities is true;
     * fractional quantities are not supported. Format: int64.
     */
    "min_quantity"?: number;
    /**
     * Minimum number of distinct modifiers buyers must select from a list group. Omit it to
     * require no selections. A modifier set can override this value. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`),
     * read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't
     * return it. minLength: 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id"?: string;
    /**
     * Whether buyers choose from a list of modifiers or enter text. On create, inferred as text
     * when text configuration is supplied, otherwise list. Value enum: "list", "text".
     */
    "modifier_group_type"?: "list" | "text";
    /**
     * Choices in a list group. Only active modifiers whose set override's available is not false
     * are offered to buyers. Text groups do not have choices. [] (Value): {@link
     * ModifierRequestInput}. A modifier you supply when creating or updating a modifier group,
     * such as an add-on with a price change.
     */
    "modifiers"?: Array<ModifierRequestInput>;
    /** Name of the modifier group shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Whether selections from this group appear in fulfillment details unless overridden for a
     * modifier set.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Whether selections from this group appear on buyer receipts unless overridden for a modifier
     * set.
     */
    "show_on_receipt"?: boolean;
    /**
     * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
     * archived groups remain readable and cannot be edited. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Text entry rules for a text group. Use text.required to require a value; list groups use
     * min_selected instead. Settings for a text modifier group when creating or updating one:
     * required, multiline, and length limits.
     */
    "text"?: TextModifierConfigRequestInput;
};
/**
 * Says that an inventory reservation needs action, with the `reason` and the reservation lines
 * affected.
 */
export type InventoryActionRequired = {
    /**
     * IDs of the reservation lines that need action. [] (Value): string. Example:
     * "invrln_01KEZF7C002JCDA729XDSNWGY5".
     */
    "inventory_reservation_line_ids": Array<string>;
    /**
     * Why the reservation needs action. Value enum: "inventory_shortage", "hold_expired",
     * "payment_pending", "other".
     */
    "reason": "inventory_shortage" | "hold_expired" | "payment_pending" | "other" | (string & {});
};
/** A recorded stock change with its reason and the quantity changes Flint computed. */
export type InventoryAdjustment = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     */
    "idempotency_key"?: string;
    /**
     * Unique identifier for this inventory adjustment, prefixed `invadj_`. Example:
     * "invadj_01KEZF7C00HFCAS32T4NVHX75M".
     */
    "inventory_adjustment_id": string;
    /**
     * Stock changes, one for each inventory item and Location, from 1 to 100 lines. [] (Value):
     * {@link InventoryAdjustmentLine}. One line of an inventory adjustment, with the item,
     * Location, movement written, and the change in on-hand and each non-sellable quantity.
     */
    "lines": Array<InventoryAdjustmentLine>;
    /** Free-text note explaining the change. Required when `reason` is `correction`. */
    "note"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /**
     * Why the stock changed. It decides which fields each line takes. Value enum: "received",
     * "returned", "sold", "theft", "loss", "condition_changed", "counted", "correction".
     */
    "reason": "received"
        | "returned"
        | "sold"
        | "theft"
        | "loss"
        | "condition_changed"
        | "counted"
        | "correction"
        | (string & {});
    /**
     * System the change came from, such as a point-of-sale or warehouse system. `null` when the
     * request named no source system. anyOf[1] (Value): {@link InventorySourceSystem}. The system
     * an inventory event came from, such as manual entry, a point of sale, a warehouse system, or
     * Flint, with your source identifier when it applies. anyOf[2] (Value): null.
     */
    "source_system": ((InventorySourceSystem) | (null));
};
/**
 * One line of an inventory condition change: moves a `quantity` of an item at a Location from one
 * condition to another.
 */
export type InventoryAdjustmentConditionChangeLineRequest = ({
    /**
     * Condition the units leave. Defaults to `sellable`. Default: "sellable". Value enum:
     * "sellable", "quality_control", "damaged", "quarantined".
     */
    "from_condition"?: "sellable" | "quality_control" | "damaged" | "quarantined" | (string & {});
    /**
     * ID of the inventory item the stock is for. minLength: 1. Example:
     * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id": string;
    /**
     * ID of the Location that holds the stock. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /**
     * Units this line records. Must be at least 1. Whole-number quantity; fractional quantities
     * are not supported. Format: int64. minimum: 1.
     */
    "quantity": number;
    /**
     * Condition the units move to. Must differ from `from_condition`. Value enum: "sellable",
     * "quality_control", "damaged", "quarantined".
     */
    "to_condition": "sellable" | "quality_control" | "damaged" | "quarantined" | (string & {});
});
/**
 * One line of an inventory condition change: moves a `quantity` of an item at a Location from one
 * condition to another.
 */
export type InventoryAdjustmentConditionChangeLineRequestInput = ({
    /**
     * Condition the units leave. Defaults to `sellable`. Default: "sellable". Value enum:
     * "sellable", "quality_control", "damaged", "quarantined".
     */
    "from_condition"?: "sellable" | "quality_control" | "damaged" | "quarantined";
    /**
     * ID of the inventory item the stock is for. minLength: 1. Example:
     * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id": string;
    /**
     * ID of the Location that holds the stock. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /**
     * Units this line records. Must be at least 1. Whole-number quantity; fractional quantities
     * are not supported. Format: int64. minimum: 1.
     */
    "quantity": number;
    /**
     * Condition the units move to. Must differ from `from_condition`. Value enum: "sellable",
     * "quality_control", "damaged", "quarantined".
     */
    "to_condition": "sellable" | "quality_control" | "damaged" | "quarantined";
})
    & ((unknown) & (unknown) & (unknown) & (unknown));
/**
 * One line of an inventory adjustment, with the item, Location, movement written, and the change
 * in on-hand and each non-sellable quantity.
 */
export type InventoryAdjustmentLine = {
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "damaged_quantity_delta": number;
    /** ID of the inventory item the stock is for. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY". */
    "inventory_item_id": string;
    /**
     * Movement this line wrote. `null` when the line changed nothing. Example:
     * "invm_01KEZF7C00DYPFT9PS0NZY805Z".
     */
    "inventory_movement_id": string | null;
    /** ID of the Location that holds the stock. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "location_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "on_hand_quantity_delta": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quality_control_quantity_delta": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quarantined_quantity_delta": number;
};
/** A page of `InventoryAdjustment` objects. */
export type InventoryAdjustmentListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * InventoryAdjustment}. A recorded stock change with its reason and the quantity changes Flint
     * computed.
     */
    "data": Array<InventoryAdjustment>;
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
 * One line of an inventory quantity adjustment: a `quantity` of an item at a Location, in the
 * given `condition`.
 */
export type InventoryAdjustmentQuantityLineRequest = {
    /**
     * Condition of the units. Defaults to `sellable`. Default: "sellable". Value enum: "sellable",
     * "quality_control", "damaged", "quarantined".
     */
    "condition"?: "sellable" | "quality_control" | "damaged" | "quarantined" | (string & {});
    /**
     * ID of the inventory item the stock is for. minLength: 1. Example:
     * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id": string;
    /**
     * ID of the Location that holds the stock. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /**
     * Units this line records. Must be at least 1. Whole-number quantity; fractional quantities
     * are not supported. Format: int64. minimum: 1.
     */
    "quantity": number;
};
/**
 * One line of an inventory quantity adjustment: a `quantity` of an item at a Location, in the
 * given `condition`.
 */
export type InventoryAdjustmentQuantityLineRequestInput = {
    /**
     * Condition of the units. Defaults to `sellable`. Default: "sellable". Value enum: "sellable",
     * "quality_control", "damaged", "quarantined".
     */
    "condition"?: "sellable" | "quality_control" | "damaged" | "quarantined";
    /**
     * ID of the inventory item the stock is for. minLength: 1. Example:
     * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id": string;
    /**
     * ID of the Location that holds the stock. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /**
     * Units this line records. Must be at least 1. Whole-number quantity; fractional quantities
     * are not supported. Format: int64. minimum: 1.
     */
    "quantity": number;
};
/** A response containing `InventoryAdjustment` data. */
export type InventoryAdjustmentResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A recorded stock change
     * with its reason and the quantity changes Flint computed.
     */
    "data": InventoryAdjustment;
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
 * Inventory adjustment and the levels it changed. inventory_adjustment is the primary resource and
 * expected_version target.
 */
export type InventoryAdjustmentResult = {
    /**
     * The recorded adjustment. A recorded stock change with its reason and the quantity changes
     * Flint computed.
     */
    "inventory_adjustment": InventoryAdjustment;
    /**
     * Post-commit state of every level this command touched, one entry per level. A replay returns
     * the levels the original command produced. Empty when no levels changed. [] (Value): {@link
     * InventoryLevel}. The quantity state of one inventory item at one Location.
     */
    "inventory_levels": Array<InventoryLevel>;
};
/** A response containing `InventoryAdjustmentResult` data. */
export type InventoryAdjustmentResultResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Inventory adjustment and
     * the levels it changed. inventory_adjustment is the primary resource and expected_version
     * target.
     */
    "data": InventoryAdjustmentResult;
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
 * One line of an inventory adjustment that sets absolute quantities for an item at a Location.
 * Omitted quantities stay unchanged.
 */
export type InventoryAdjustmentSetLineRequest = ({
    /**
     * Absolute damaged quantity to record. Omit to leave it unchanged. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "damaged_quantity"?: number;
    /**
     * Refuse the line unless the level's `physical_version` still equals this value. A level that
     * doesn't exist yet has physical version 0. Holds and commitments do not change it. Format:
     * int64. minimum: 0.
     */
    "expected_physical_version"?: number;
    /**
     * ID of the inventory item the stock is for. minLength: 1. Example:
     * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id": string;
    /**
     * ID of the Location that holds the stock. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /**
     * Absolute on-hand quantity to record. Omit to leave it unchanged. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "on_hand_quantity"?: number;
    /**
     * Absolute quality-control quantity to record. Omit to leave it unchanged. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "quality_control_quantity"?: number;
    /**
     * Absolute quarantined quantity to record. Omit to leave it unchanged. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "quarantined_quantity"?: number;
    /**
     * Monotonic sequence of this observation in the source system. Flint refuses a value that is
     * not greater than the last accepted one for the same source, item, and Location. Format:
     * int64. minimum: 1.
     */
    "source_observation_sequence"?: number;
})
    & (({
    /**
     * Absolute on-hand quantity to record. Omit to leave it unchanged. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "on_hand_quantity": number;
})
    | ({
    /**
     * Absolute quality-control quantity to record. Omit to leave it unchanged. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "quality_control_quantity": number;
})
    | ({
    /**
     * Absolute damaged quantity to record. Omit to leave it unchanged. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "damaged_quantity": number;
})
    | ({
    /**
     * Absolute quarantined quantity to record. Omit to leave it unchanged. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "quarantined_quantity": number;
})
    | (Record<string, unknown>));
/**
 * One line of an inventory adjustment that sets absolute quantities for an item at a Location.
 * Omitted quantities stay unchanged.
 */
export type InventoryAdjustmentSetLineRequestInput = ({
    /**
     * Absolute damaged quantity to record. Omit to leave it unchanged. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "damaged_quantity"?: number;
    /**
     * Refuse the line unless the level's `physical_version` still equals this value. A level that
     * doesn't exist yet has physical version 0. Holds and commitments do not change it. Format:
     * int64. minimum: 0.
     */
    "expected_physical_version"?: number;
    /**
     * ID of the inventory item the stock is for. minLength: 1. Example:
     * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id": string;
    /**
     * ID of the Location that holds the stock. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /**
     * Absolute on-hand quantity to record. Omit to leave it unchanged. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "on_hand_quantity"?: number;
    /**
     * Absolute quality-control quantity to record. Omit to leave it unchanged. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "quality_control_quantity"?: number;
    /**
     * Absolute quarantined quantity to record. Omit to leave it unchanged. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "quarantined_quantity"?: number;
    /**
     * Monotonic sequence of this observation in the source system. Flint refuses a value that is
     * not greater than the last accepted one for the same source, item, and Location. Format:
     * int64. minimum: 1.
     */
    "source_observation_sequence"?: number;
})
    & (({
    /**
     * Absolute on-hand quantity to record. Omit to leave it unchanged. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "on_hand_quantity": number;
})
    | ({
    /**
     * Absolute quality-control quantity to record. Omit to leave it unchanged. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "quality_control_quantity": number;
})
    | ({
    /**
     * Absolute damaged quantity to record. Omit to leave it unchanged. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "damaged_quantity": number;
})
    | ({
    /**
     * Absolute quarantined quantity to record. Omit to leave it unchanged. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "quarantined_quantity": number;
}));
export type InventoryAdjustmentsCreateParams = (CreateInventoryAdjustmentRequestInput)
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
export type InventoryAdjustmentsGetParams = DisputesAcceptParams;
export type InventoryAdjustmentsListParams = {
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
     * Filter by inventory item. pattern: ^invi_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id"?: InputValue<string>;
    /**
     * Filter by Location. pattern: ^loc_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: InputValue<string>;
    /**
     * Filter by adjustment reason. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "received", "returned", "sold", "theft", "loss", "condition_changed",
     * "counted", "correction". Value enum: "received", "returned", "sold", "theft", "loss",
     * "condition_changed", "counted", "correction". anyOf[1] (Value): Array of string. minItems:
     * 1. [] enum: "received", "returned", "sold", "theft", "loss", "condition_changed", "counted",
     * "correction". anyOf[1][] (Value): string. Value enum: "received", "returned", "sold",
     * "theft", "loss", "condition_changed", "counted", "correction". anyOf[2] (Value): string.
     * Value enum: "received", "returned", "sold", "theft", "loss", "condition_changed", "counted",
     * "correction".
     */
    "reason"?: InputValue<("received" | "returned" | "sold" | "theft" | "loss" | "condition_changed" | "counted" | "correction")
        | readonly ("received" | "returned" | "sold" | "theft" | "loss" | "condition_changed" | "counted" | "correction")[]>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255. pattern:
     * ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Filter by source-system type. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "manual", "pos", "wms", "erp", "flint", "other". Value enum: "manual",
     * "pos", "wms", "erp", "flint", "other". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "manual", "pos", "wms", "erp", "flint", "other". anyOf[1][] (Value): string. Value
     * enum: "manual", "pos", "wms", "erp", "flint", "other". anyOf[2] (Value): string. Value enum:
     * "manual", "pos", "wms", "erp", "flint", "other".
     */
    "source_system_type"?: InputValue<("manual" | "pos" | "wms" | "erp" | "flint" | "other")
        | readonly ("manual" | "pos" | "wms" | "erp" | "flint" | "other")[]>;
    /** Filter by external source ID. Example: "warehouse-1842". */
    "external_source_id"?: InputValue<string>;
    /** Filter by external actor ID. Example: "warehouse-1842". */
    "external_actor_id"?: InputValue<string>;
    /** Inclusive lower bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
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
/**
 * Routing rules for an inventory allocation policy: ranked groups of Locations, whether demand can
 * be split, and how many Locations one assignment may use.
 */
export type InventoryAllocationConfigurationValue = {
    /**
     * Locations ranked into priority groups. Routing prefers the lowest group priority, then the
     * lowest location ID. minItems: 1. maxItems: 25. [] (Value): {@link
     * InventoryAllocationPolicyLocation}. A Location in an inventory allocation policy and the
     * priority group it belongs to.
     */
    "location_groups": Array<InventoryAllocationPolicyLocation>;
    /**
     * Upper bound on how many Locations one assignment may use. Defaults to 1 for single_location
     * and 10 for split_when_required. single_location requires 1 when sent. Format: int32.
     * minimum: 1. maximum: 10.
     */
    "maximum_locations_per_assignment"?: number;
    /**
     * single_location fails rather than splitting demand across Locations; split_when_required
     * allows a split when no single Location can serve the whole request. Value enum:
     * "single_location", "split_when_required".
     */
    "splitting_behavior": "single_location" | "split_when_required" | (string & {});
    /**
     * Tie-break inside a priority group. Ascending location ID keeps assignments reproducible.
     * Default: "location_id_ascending". Value enum: "location_id_ascending".
     */
    "within_group_order"?: "location_id_ascending" | (string & {});
};
export type InventoryAllocationPoliciesCreateParams = (InputValue<CreateInventoryAllocationPolicyRequestInput>)
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
export type InventoryAllocationPoliciesDeleteParams = {
    /** Current resource version used as a concurrency fence. Format: uint64. minimum: 1. */
    "expected_version"?: InputValue<number>;
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
export type InventoryAllocationPoliciesGetParams = DisputesAcceptParams;
export type InventoryAllocationPoliciesGetRevisionParams = DisputesAcceptParams;
export type InventoryAllocationPoliciesListParams = {
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
     * Filter by status. Omitted, the list leaves out archived rows; name archived to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "inactive", "archived". Value enum: "active", "inactive", "archived". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "active", "inactive", "archived". anyOf[1][] (Value):
     * string. Value enum: "active", "inactive", "archived". anyOf[2] (Value): string. Value enum:
     * "active", "inactive", "archived".
     */
    "status"?: InputValue<("active" | "inactive" | "archived") | readonly ("active" | "inactive" | "archived")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /** Search allocation policy ID, external reference ID, or name. maxLength: 255. */
    "query"?: InputValue<string>;
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
export type InventoryAllocationPoliciesListRevisionsParams = {
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
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
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
export type InventoryAllocationPoliciesUpdateParams = (InputValue<UpdateInventoryAllocationPolicyRequestInput>)
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
/** Named, version-fenced rules that decide which Locations serve demand and in what order. */
export type InventoryAllocationPolicy = {
    /**
     * Routing rules: ranked groups of Locations, whether demand can be split, and the most
     * Locations one assignment may use. location_groups (Required): Array of {@link
     * InventoryAllocationPolicyLocation}. Locations ranked into priority groups. Routing prefers
     * the lowest group priority, then the lowest location ID. minItems: 1. maxItems: 25.
     * location_groups[] (Value): {@link InventoryAllocationPolicyLocation}. A Location in an
     * inventory allocation policy and the priority group it belongs to.
     * maximum_locations_per_assignment (Required): integer. Upper bound on how many Locations one
     * assignment may use. Defaults to 1 for single_location and 10 for split_when_required.
     * single_location requires 1 when sent. Format: int32. minimum: 1. maximum: 10.
     * splitting_behavior (Required): string. single_location fails rather than splitting demand
     * across Locations; split_when_required allows a split when no single Location can serve the
     * whole request. Value enum: "single_location", "split_when_required". within_group_order
     * (Required): string. Tie-break inside a priority group. Ascending location ID keeps
     * assignments reproducible. Value enum: "location_id_ascending".
     */
    "configuration": {
        /**
         * Locations ranked into priority groups. Routing prefers the lowest group priority, then
         * the lowest location ID. minItems: 1. maxItems: 25. [] (Value): {@link
         * InventoryAllocationPolicyLocation}. A Location in an inventory allocation policy and the
         * priority group it belongs to.
         */
        "location_groups": Array<InventoryAllocationPolicyLocation>;
        /**
         * Upper bound on how many Locations one assignment may use. Defaults to 1 for
         * single_location and 10 for split_when_required. single_location requires 1 when sent.
         * Format: int32. minimum: 1. maximum: 10.
         */
        "maximum_locations_per_assignment": number;
        /**
         * single_location fails rather than splitting demand across Locations; split_when_required
         * allows a split when no single Location can serve the whole request. Value enum:
         * "single_location", "split_when_required".
         */
        "splitting_behavior": "single_location" | "split_when_required" | (string & {});
        /**
         * Tie-break inside a priority group. Ascending location ID keeps assignments reproducible.
         * Value enum: "location_id_ascending".
         */
        "within_group_order": "location_id_ascending" | (string & {});
    };
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The immutable revision containing this policy's current routing configuration. Replacing
     * configuration publishes a new revision; other policy edits keep this ID. Example:
     * "invpv_01KEZF7C00JSFTTBKC1JY614JJ".
     */
    "current_inventory_allocation_policy_revision_id": string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** ID of the policy this revision belongs to. Example: "invp_01KEZF7C0076BZX855WAGC5SQK". */
    "inventory_allocation_policy_id": string;
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata": MetadataMap;
    /** Merchant-facing policy name. */
    "name": string;
    /** Current allocation policy status. Value enum: "active", "inactive", "archived". */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: uint64. minimum: 1.
     */
    "version": number;
};
/**
 * Routing rules for an inventory allocation policy: ranked groups of Locations, whether demand can
 * be split, and how many Locations one assignment may use.
 */
export type InventoryAllocationPolicyConfigurationRequestInput = {
    /**
     * Locations ranked into priority groups. Routing prefers the lowest group priority, then the
     * lowest location ID. minItems: 1. maxItems: 25. [] (Value): {@link
     * InventoryAllocationPolicyLocationInput}. A Location in an inventory allocation policy and
     * the priority group it belongs to.
     */
    "location_groups": Array<InventoryAllocationPolicyLocationInput>;
    /**
     * Upper bound on how many Locations one assignment may use. Defaults to 1 for single_location
     * and 10 for split_when_required. single_location requires 1 when sent. Format: int32.
     * minimum: 1. maximum: 10.
     */
    "maximum_locations_per_assignment"?: number;
    /**
     * single_location fails rather than splitting demand across Locations; split_when_required
     * allows a split when no single Location can serve the whole request. Value enum:
     * "single_location", "split_when_required".
     */
    "splitting_behavior": "single_location" | "split_when_required";
    /**
     * Tie-break inside a priority group. Ascending location ID keeps assignments reproducible.
     * Default: "location_id_ascending". Value enum: "location_id_ascending".
     */
    "within_group_order"?: "location_id_ascending";
};
/** A page of `InventoryAllocationPolicy` objects. */
export type InventoryAllocationPolicyListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * InventoryAllocationPolicy}. Named, version-fenced rules that decide which Locations serve
     * demand and in what order.
     */
    "data": Array<InventoryAllocationPolicy>;
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
/** A Location in an inventory allocation policy and the priority group it belongs to. */
export type InventoryAllocationPolicyLocation = {
    /**
     * Priority of the group this Location belongs to. Routing prefers the lowest number. Format:
     * int32. minimum: 1.
     */
    "group_priority": number;
    /**
     * ID of a Location in this priority group. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
};
/** A Location in an inventory allocation policy and the priority group it belongs to. */
export type InventoryAllocationPolicyLocationInput = InventoryAllocationPolicyLocation;
/** A response containing `InventoryAllocationPolicy` data. */
export type InventoryAllocationPolicyResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Named, version-fenced
     * rules that decide which Locations serve demand and in what order.
     */
    "data": InventoryAllocationPolicy;
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
 * An immutable routing configuration published when an allocation policy is created or its
 * configuration is replaced. Revisions remain readable after later policy edits.
 */
export type InventoryAllocationPolicyRevision = {
    /**
     * Routing rules: ranked groups of Locations, whether demand can be split, and the most
     * Locations one assignment may use. Routing rules for an inventory allocation policy: ranked
     * groups of Locations, whether demand can be split, and how many Locations one assignment may
     * use.
     */
    "configuration": InventoryAllocationConfigurationValue;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** ID of the policy this revision belongs to. Example: "invp_01KEZF7C0076BZX855WAGC5SQK". */
    "inventory_allocation_policy_id": string;
    /**
     * Unique identifier for this inventory allocation policy revision, prefixed `invpv_`. Example:
     * "invpv_01KEZF7C00JSFTTBKC1JY614JJ".
     */
    "inventory_allocation_policy_revision_id": string;
};
/** A page of `InventoryAllocationPolicyRevision` objects. */
export type InventoryAllocationPolicyRevisionListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * InventoryAllocationPolicyRevision}. An immutable routing configuration published when an
     * allocation policy is created or its configuration is replaced. Revisions remain readable
     * after later policy edits.
     */
    "data": Array<InventoryAllocationPolicyRevision>;
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
/** A response containing `InventoryAllocationPolicyRevision` data. */
export type InventoryAllocationPolicyRevisionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An immutable routing
     * configuration published when an allocation policy is created or its configuration is
     * replaced. Revisions remain readable after later policy edits.
     */
    "data": InventoryAllocationPolicyRevision;
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
/** Patch object: fields you send are applied, fields you omit are unchanged. minProperties: 1. */
export type InventoryBackorderPolicyRequest = {
    /** Whether this inventory item allows backorders. */
    "enabled"?: boolean;
    /**
     * Expected shipping date. Send null to clear it. Format: date. minLength: 1. pattern:
     * ^[0-9]{4}-[0-9]{2}-[0-9]{2}$. Example: "2026-08-02".
     */
    "expected_ship_date"?: string | null;
    /**
     * Maximum units on backorder across the item's levels. Send null for no cap. Format: int64.
     * minimum: 1. maximum: 9007199254740991.
     */
    "limit_quantity"?: number | null;
};
/** Patch object: fields you send are applied, fields you omit are unchanged. minProperties: 1. */
export type InventoryBackorderPolicyRequestInput = InventoryBackorderPolicyRequest;
/** A physical count used to reconcile stock. */
export type InventoryCount = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "applied_at"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     */
    "idempotency_key"?: string;
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
    /** Value enum: "draft", "applied", "canceled". */
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
export type InventoryCountAppliedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "applied_at"?: string;
            "created_at": string;
            "idempotency_key"?: string;
            "inventory_count_id": string;
            "lines": Array<InventoryCountLine>;
            "location_id": string;
            "observation_provenance"?: InventoryCountObservationProvenance;
            "status": "draft" | "applied" | "canceled" | (string & {});
            "supported_actions": Array<"apply" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<InventoryCount>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "inventory_count.applied";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "applied_at"?: string;
            "created_at": string;
            "idempotency_key"?: string;
            "inventory_count_id": string;
            "lines": Array<InventoryCountLine>;
            "location_id": string;
            "observation_provenance"?: InventoryCountObservationProvenance;
            "status": "draft" | "applied" | "canceled" | (string & {});
            "supported_actions": Array<"apply" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<InventoryCount>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "inventory_count.applied";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "inventory_count.applied";
});
