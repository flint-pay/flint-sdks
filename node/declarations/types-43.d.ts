import type { InputValue } from '../runtime.js';
import type {
    MarkPackageDeliveredRequestInput,
    MarkPackageDeliveryAttemptedRequestInput,
    MarkPackageExceptionRequestInput,
    MarkPackageInTransitRequestInput,
    MarkPackageOutForDeliveryRequestInput,
    MarkPackagePackedRequestInput,
    MarkPackageReturnedRequestInput,
    MarkPackageShippedRequestInput
} from './types-35.js';
import type { UpdatePackageItemRequestInput, UpdatePackageRequestInput } from './types-67.js';
import type { VoidPackageRequestInput } from './types-68.js';
import type { PlatformFeeCap } from './types-48.js';
import type { ResponseMeta, ResourceReference } from './types-54.js';
import type {
    WorkloadIdentityClaimCondition,
    WorkloadIdentityClaimConditionRequest,
    WorkloadIdentityClaimConditionRequestInput
} from './types-69.js';
import type { PartnerEnvironmentGrant, PartnerWebhookEnvelope } from './types-44.js';
import type { MerchantWebhookEnvelope } from './types-37.js';
import type { MoneyValue, MoneyValueInput } from './types-38.js';
import type { AcceptPartnerAppPlatformTermsRequestInput } from './types-0.js';
import type { CreatePartnerAppCredentialRequestInput, CreatePartnerAppRequestInput } from './types-11.js';
export type PackagesListParams = {
    /**
     * Optional shipment ID filter. pattern: ^shp_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     */
    "shipment_id"?: InputValue<string>;
    /**
     * Optional fulfillment ID filter. pattern: ^ful_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id"?: InputValue<string>;
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
    /** Filter by external system identifier. */
    "external_system"?: InputValue<string>;
    /**
     * Exact match on the package's `external_reference_id`. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across package ID, external reference ID, and tracking number. Text fields match any
     * part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the
     * start and need the type prefix, such as pkg_01.
     */
    "query"?: InputValue<string>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by package status. Values within this filter are combined with OR. Values are trimmed
     * and deduplicated in first-seen order; empty or unknown entries are rejected. Values within
     * this filter are ORed; separate filters are ANDed. [] enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". Value enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". anyOf[1][] (Value): string. Value enum: "created", "packed",
     * "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". anyOf[2] (Value): string. Value enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided".
     */
    "status"?: InputValue<("created"
        | "packed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided")
        | readonly ("created"
        | "packed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided")[]>;
    /**
     * Byte-sensitive full tracking-number match. Whitespace and commas are literal; combine with
     * carrier to identify a carrier-specific tracking number. minLength: 1. maxLength: 255.
     */
    "tracking_number"?: InputValue<string>;
    /**
     * Byte-sensitive full carrier match. Whitespace and commas are literal. minLength: 1.
     * maxLength: 255.
     */
    "carrier"?: InputValue<string>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
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
export type PackagesMarkDeliveredParams = (InputValue<MarkPackageDeliveredRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
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
export type PackagesMarkDeliveryAttemptedParams = (InputValue<MarkPackageDeliveryAttemptedRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
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
export type PackagesMarkExceptionParams = (InputValue<MarkPackageExceptionRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
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
export type PackagesMarkInTransitParams = (InputValue<MarkPackageInTransitRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_delivery_at"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
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
export type PackagesMarkOutForDeliveryParams = (InputValue<MarkPackageOutForDeliveryRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_delivery_at"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
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
export type PackagesMarkPackedParams = (InputValue<MarkPackagePackedRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
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
export type PackagesMarkReturnedParams = (InputValue<MarkPackageReturnedRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
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
export type PackagesMarkShippedParams = (InputValue<MarkPackageShippedRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "carrier"?: never;
    "expected_delivery_at"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
    "service_code"?: never;
    "tracking_number"?: never;
    "tracking_url"?: never;
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
export type PackagesUpdateItemParams = (InputValue<UpdatePackageItemRequestInput>)
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
export type PackagesUpdateParams = (InputValue<UpdatePackageRequestInput>)
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
export type PackagesVoidParams = (InputValue<VoidPackageRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
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
/** An application that merchants can authorize to access their accounts. */
export type PartnerApp = {
    /**
     * Every Flint scope the app can hold: the union of required_scopes across the manifest. An
     * install grants only the scopes of the permissions the merchant approves. [] (Value): string.
     */
    "allowed_scopes": Array<string>;
    /**
     * Default API version for requests without a Flint-Version header. Shared across live and test
     * environments.
     */
    "api_version": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "api_version_changed_at"?: string;
    /** Previous API version, present while a supported rollback is available. */
    "api_version_previous"?: string;
    /**
     * When the 72-hour rollback offer expires. Explicit changes to any supported version remain
     * available afterward. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "api_version_rollback_expires_at"?: string;
    /**
     * Public identifier the app sends as client_id in OAuth authorization and token requests.
     * Doesn't change. Example: "fpc_00112233445566778899aabbccddeeff".
     */
    "client_id": string;
    /**
     * Whether the app can authenticate with a client secret. When false, it authenticates with a
     * registered credential.
     */
    "client_secret_enabled": boolean;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "client_secret_last_used_at": string | null;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * IDs of the permissions requested when an authorization request sends no scope. Defaults to
     * every permission in the manifest that isn't optional. [] (Value): string.
     */
    "default_requested_permissions": Array<string>;
    /**
     * Present only while a change to merchant_action_url or platform_profile.website_url is
     * waiting to move routing to another registrable domain; omitted otherwise. url is the
     * previous destination emails still use, and expires_at is when routing switches to the
     * current merchant_action_url. While the app had no merchant action URL before the change,
     * this is Flint's own page. The destination merchant emails keep using while a move to another
     * registrable domain is pending.
     */
    "merchant_action_routing"?: PartnerAppMerchantActionRouting;
    /**
     * Where Flint sends an owner of a merchant this app created through a merchant signup when an
     * email asks them to act, such as to finish verification. Flint adds `flint_*` query
     * parameters. Setting it requests the `create_merchants` platform capability, which merchant
     * signups need. Absent until set. Format: uri. minLength: 1. maxLength: 2048. pattern:
     * ^https://. Example: "https://example.com/receipt".
     */
    "merchant_action_url"?: string;
    /** The app's name, shown to merchants on the consent screen. */
    "name": string;
    /**
     * Unique identifier for this partner app, prefixed `papp_`. Example:
     * "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id": string;
    /**
     * The app's declaration that its owner sends splits of the payments it collects to sellers
     * that install the app. Every authorization of the app asks the merchant to approve receiving
     * split funds under these seller terms, and the environment grant records the approval.
     * Declaring it requests the payment_splits platform capability, which live splits need. Absent
     * when the app sends no splits. The app's declaration that its owner sends splits of the
     * payments it collects to sellers: merchants that installed the app and approved receiving
     * split funds from it. Merchants see it on the consent screen.
     */
    "payment_splits"?: PartnerAppPaymentSplits;
    /**
     * Permissions the app can request from merchants. Each lists the Flint scopes it grants. []
     * (Value): {@link PartnerAppPermissionManifestEntry}. One permission a partner app can
     * request, with a title, a description, and the Flint scopes it grants.
     */
    "permission_manifest": Array<PartnerAppPermissionManifestEntry>;
    /**
     * The app's platform onboarding: status, outstanding requirements, platform capabilities,
     * terms acceptance, and once Flint approves or limits it, the platform's limits and reserve.
     * The app's platform onboarding. Platform capabilities apply in live mode only; test mode
     * never checks them. requirements and capability readiness that depend on the owning
     * merchant's live onboarding are read when Flint serves the app, so a change there alone
     * doesn't advance the app's version or send a partner_app event.
     */
    "platform": PartnerAppPlatform;
    /**
     * The most a platform fee can take from one payment the app creates with a partner app token.
     * Merchants see it on the consent screen and approve it for each mode they install. Absent
     * when the app charges no platform fees. The most a platform fee can take from one payment.
     * The largest platform fee on a payment is percent of the amount it collects, rounded half up
     * to the minor unit, plus the currency's fixed part if it has one, and never more than the
     * currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on
     * a 100.00 USD payment. A currency without a maximum can't carry a platform fee.
     */
    "platform_fee_cap"?: PlatformFeeCap;
    /**
     * What the app told Flint for its platform review. Absent until set. What the platform tells
     * Flint for its review. It is one value: a write replaces it whole.
     */
    "platform_profile"?: PartnerAppPlatformProfile;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "previous_secret_expires_at"?: string;
    /**
     * Redirect URIs the app can use after authorization. Each is an absolute HTTPS URL, or HTTP on
     * localhost or a loopback address, with no fragment. [] (Value): string.
     */
    "redirect_uris": Array<string>;
    /** Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /**
     * Lifecycle actions Flint accepts now: accept_platform_terms while the current platform terms
     * version isn't accepted, `[]` otherwise and for a deleted app. rotate-secret is an operation,
     * not a lifecycle action, so it is never listed. [] enum: "accept_platform_terms". [] (Value):
     * string. Value enum: "accept_platform_terms".
     */
    "supported_actions": Array<"accept_platform_terms" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Starts at 1 and increases by 1 each time the app is updated, its client secret is rotated,
     * its platform terms are accepted, Flint decides on its platform review or changes its
     * platform terms, or it is deleted. Usage in platform.limits.usage and the owning merchant's
     * own onboarding don't change it. Send it as expected_version to apply an update only to the
     * version you read. Format: uint64. minimum: 1.
     */
    "version": number;
};
/** Non-secret metadata for the calling credential, selected by auth_type. */
export type PartnerAppAuthContext = ({
    /**
     * Access level; scoped tokens always have restricted access. Value enum: "full", "read_only",
     * "restricted".
     */
    "access": "full" | "read_only" | "restricted" | (string & {});
    /** Credential type that selects this object's fields. Value enum: "partner_app". */
    "auth_type": "partner_app" | (string & {});
    /**
     * Time the credential expires; absent for keys without an expiry. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /** Merchant the credential acts for. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /** Whether the credential acts in test or live mode. Value enum: "test", "live". */
    "mode": "test" | "live" | (string & {});
    /** ID of the partner app. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV". */
    "partner_app_id": string;
    /**
     * ID of the partner app install. Null when the API key is not linked to an install. Example:
     * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id": string | null;
    /**
     * Sandbox the credential is bound to, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "sandbox_id"?: string;
    /**
     * Current granted API scopes, resolved at request time for full and read_only keys. []
     * (Value): string.
     */
    "scopes": Array<string>;
})
    & ({
    /** Value enum: "restricted". */
    "access"?: unknown;
    /** Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". */
    "partner_app_install_id"?: string;
});
/**
 * An immutable partner app credential, including its authentication status and usage timestamps.
 */
export type PartnerAppCredential = ({
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** A registered JWKS URL and its most recent successful fetch. */
    "jwks_url"?: PartnerAppCredentialJWKSURL;
    /**
     * When the credential last authenticated the app. Updated at most once an hour, so it can lag
     * the latest use by up to an hour. `null` when the credential has never been used. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "last_used_at": string | null;
    /**
     * Modes this credential can mint partner app tokens for, in the order live, test. A mint for
     * another mode returns 400 unauthorized_client. Set at creation and never changed. minItems:
     * 1. maxItems: 2. uniqueItems: true. [] enum: "live", "test". [] (Value): string. Value enum:
     * "live", "test".
     */
    "modes": Array<"live" | "test" | (string & {})>;
    /** Name given to the credential when it was created. `null` when it has no name. */
    "name": string | null;
    /**
     * Unique identifier for this partner app credential, prefixed `pacr_`. Example:
     * "pacr_01KEZF7C005RDK44XFG5WF94BB".
     */
    "partner_app_credential_id": string;
    /** Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV". */
    "partner_app_id": string;
    /** A registered public JSON Web Key and its RFC 7638 SHA-256 thumbprint. */
    "public_key"?: PartnerAppCredentialPublicKey;
    /** Value enum: "active", "removed". */
    "status": "active" | "removed" | (string & {});
    /**
     * Credential type. Currently public_key, jwks_url, or workload_identity. Value enum:
     * "public_key", "jwks_url", "workload_identity".
     */
    "type": "public_key" | "jwks_url" | "workload_identity" | (string & {});
    /** The registered external OIDC issuer, exact subject, audience, and claim conditions. */
    "workload_identity"?: PartnerAppCredentialWorkloadIdentity;
});
/** A registered JWKS URL and its most recent successful fetch. */
export type PartnerAppCredentialJWKSURL = {
    /**
     * Most recent successful fetch of this URL by Flint. Updated at most once per minute. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "last_fetched_at": string;
    "url": string;
};
/**
 * A public HTTPS JSON Web Key Set URL. Flint validates and fetches it before registering the
 * credential.
 */
export type PartnerAppCredentialJWKSURLRequestInput = {
    /**
     * HTTPS URL with a DNS host, optional port 443, no userinfo or fragment, and an optional
     * query. Flint API hosts and nonpublic destinations are rejected. The URL must serve a JSON
     * Web Key Set with 1 to 10 supported public signing keys; unusable keys are ignored and don't
     * count. minLength: 1. maxLength: 2048.
     */
    "url": string;
};
/** A page of `PartnerAppCredential` objects. */
export type PartnerAppCredentialListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PartnerAppCredential}. An immutable partner app credential, including its authentication
     * status and usage timestamps.
     */
    "data": Array<PartnerAppCredential>;
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
/** A registered public JSON Web Key and its RFC 7638 SHA-256 thumbprint. */
export type PartnerAppCredentialPublicKey = {
    "jwk": {
        [key: string]: unknown;
    };
    /** RFC 7638 SHA-256 JWK thumbprint. */
    "jwk_thumbprint": string;
};
/** The public JSON Web Key to register for client authentication. */
export type PartnerAppCredentialPublicKeyRequest = {
    /** A public JSON Web Key. Private key and symmetric key members are rejected. */
    "jwk": {
        [key: string]: unknown;
    };
};
/** The public JSON Web Key to register for client authentication. */
export type PartnerAppCredentialPublicKeyRequestInput = PartnerAppCredentialPublicKeyRequest;
/** A response containing `PartnerAppCredential` data. */
export type PartnerAppCredentialResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An immutable partner app
     * credential, including its authentication status and usage timestamps.
     */
    "data": PartnerAppCredential;
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
/** The registered external OIDC issuer, exact subject, audience, and claim conditions. */
export type PartnerAppCredentialWorkloadIdentity = {
    "audience": string;
    /**
     * Bounded value array of top-level scalar conditions checked for every assertion. [] (Value):
     * {@link WorkloadIdentityClaimCondition}. A condition matching one top-level scalar claim in
     * the workload's identity token.
     */
    "claim_conditions": Array<WorkloadIdentityClaimCondition>;
    "issuer": string;
    /**
     * The platform Flint recognizes from the issuer. New platform values may be added. Value enum:
     * "generic", "github_actions", "gitlab_ci", "google_cloud", "aws", "azure", "kubernetes",
     * "circleci", "buildkite", "vercel", "fly_io".
     */
    "platform": "generic"
        | "github_actions"
        | "gitlab_ci"
        | "google_cloud"
        | "aws"
        | "azure"
        | "kubernetes"
        | "circleci"
        | "buildkite"
        | "vercel"
        | "fly_io"
        | (string & {});
    "subject": string;
};
/**
 * An external OIDC identity whose subject and claim conditions must match exactly the registered
 * policy.
 */
export type PartnerAppCredentialWorkloadIdentityRequest = {
    /**
     * Token audience. Defaults to Flint's configured issuer URL when omitted. minLength: 1.
     * maxLength: 255.
     */
    "audience"?: string;
    /**
     * Bounded value array of at most 10 top-level scalar claim conditions. Defaults to []. A glob
     * requires an exact condition; shared issuers require tenant pinning. maxItems: 10.
     * uniqueItems: true. [] (Value): {@link WorkloadIdentityClaimConditionRequest}. A condition to
     * match one top-level scalar claim in the workload's identity token. Omitted match defaults to
     * exact.
     */
    "claim_conditions"?: Array<WorkloadIdentityClaimConditionRequest>;
    /**
     * Immutable public HTTPS issuer with a DNS host, optional port 443, and no userinfo, query, or
     * fragment. Compared exactly. Must publish valid OIDC discovery metadata. minLength: 1.
     * maxLength: 255.
     */
    "issuer": string;
    /**
     * Exact token subject. Google Cloud subjects must be numeric. minLength: 1. maxLength: 1024.
     */
    "subject": string;
};
/**
 * An external OIDC identity whose subject and claim conditions must match exactly the registered
 * policy.
 */
export type PartnerAppCredentialWorkloadIdentityRequestInput = {
    /**
     * Token audience. Defaults to Flint's configured issuer URL when omitted. minLength: 1.
     * maxLength: 255.
     */
    "audience"?: string;
    /**
     * Bounded value array of at most 10 top-level scalar claim conditions. Defaults to []. A glob
     * requires an exact condition; shared issuers require tenant pinning. maxItems: 10.
     * uniqueItems: true. [] (Value): {@link WorkloadIdentityClaimConditionRequestInput}. A
     * condition to match one top-level scalar claim in the workload's identity token. Omitted
     * match defaults to exact.
     */
    "claim_conditions"?: Array<WorkloadIdentityClaimConditionRequestInput>;
    /**
     * Immutable public HTTPS issuer with a DNS host, optional port 443, and no userinfo, query, or
     * fragment. Compared exactly. Must publish valid OIDC discovery metadata. minLength: 1.
     * maxLength: 255.
     */
    "issuer": string;
    /**
     * Exact token subject. Google Cloud subjects must be numeric. minLength: 1. maxLength: 1024.
     */
    "subject": string;
};
/** A merchant's authorization of a partner application. */
export type PartnerAppInstall = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     *  [] (Value): {@link PartnerEnvironmentGrant}. A partner application's authorization to
     * access an environment.
     */
    "environment_grants"?: Array<PartnerEnvironmentGrant>;
    /** Example: "usr_01KEZF7C00YC8757ZYP9727JM0". */
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
    /** Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV". */
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
    /** Value enum: "merchant", "partner_app". */
    "revoked_by"?: "merchant" | "partner_app" | (string & {});
    /** Example: "usr_01KEZF7C00YC8757ZYP9727JM0". */
    "revoked_by_user_id"?: string;
    /** Value enum: "pending_exchange", "active", "revoked". */
    "status": "pending_exchange" | "active" | "revoked" | (string & {});
    /**
     * Lifecycle actions Flint accepts now. Revoke is accepted for pending and active installations
     * and returns the current installation when it is already revoked. [] enum: "revoke". []
     * (Value): string. Value enum: "revoke".
     */
    "supported_actions": Array<"revoke" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
};
export type PartnerAppInstallCreatedEvent = ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "environment_grants"?: Array<PartnerEnvironmentGrant>;
            "installed_by_user_id"?: string;
            "merchant_id": string;
            "merchant_signup_id"?: string;
            "partner_app_id": string;
            "partner_app_install_id": string;
            "partner_app_name": string;
            "revoked_at"?: string;
            "revoked_by"?: "merchant" | "partner_app" | (string & {});
            "revoked_by_user_id"?: string;
            "status": "pending_exchange" | "active" | "revoked" | (string & {});
            "supported_actions": Array<"revoke" | (string & {})>;
            "updated_at": string;
        };
    };
    "event_source"?: "partner_app" | (string & {});
    "event_type"?: "partner_app_install.created";
    "source"?: {
        "merchant_id": string;
        "partner_app_install_id": string;
    };
})
    & {
    "event_type": "partner_app_install.created";
});
/** A page of `PartnerAppInstall` objects. */
export type PartnerAppInstallListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PartnerAppInstall}. A merchant's authorization of a partner application.
     */
    "data": Array<PartnerAppInstall>;
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
export type PartnerAppInstallPermissionsUpdatedEvent = ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "environment_grants"?: Array<PartnerEnvironmentGrant>;
            "installed_by_user_id"?: string;
            "merchant_id": string;
            "merchant_signup_id"?: string;
            "partner_app_id": string;
            "partner_app_install_id": string;
            "partner_app_name": string;
            "revoked_at"?: string;
            "revoked_by"?: "merchant" | "partner_app" | (string & {});
            "revoked_by_user_id"?: string;
            "status": "pending_exchange" | "active" | "revoked" | (string & {});
            "supported_actions": Array<"revoke" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<PartnerAppInstall>;
    };
    "event_source"?: "partner_app" | (string & {});
    "event_type"?: "partner_app_install.permissions_updated";
    "source"?: {
        "merchant_id": string;
        "partner_app_install_id": string;
    };
})
    & {
    "event_type": "partner_app_install.permissions_updated";
});
/** A response containing `PartnerAppInstall` data. */
export type PartnerAppInstallResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A merchant's
     * authorization of a partner application.
     */
    "data": PartnerAppInstall;
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
export type PartnerAppInstallRevokedEvent = ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "environment_grants"?: Array<PartnerEnvironmentGrant>;
            "installed_by_user_id"?: string;
            "merchant_id": string;
            "merchant_signup_id"?: string;
            "partner_app_id": string;
            "partner_app_install_id": string;
            "partner_app_name": string;
            "revoked_at"?: string;
            "revoked_by"?: "merchant" | "partner_app" | (string & {});
            "revoked_by_user_id"?: string;
            "status": "pending_exchange" | "active" | "revoked" | (string & {});
            "supported_actions": Array<"revoke" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<PartnerAppInstall>;
    };
    "event_source"?: "partner_app" | (string & {});
    "event_type"?: "partner_app_install.revoked";
    "source"?: {
        "merchant_id": string;
        "partner_app_install_id": string;
    };
})
    & {
    "event_type": "partner_app_install.revoked";
});
export type PartnerAppInstallUpdatedEvent = ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "environment_grants"?: Array<PartnerEnvironmentGrant>;
            "installed_by_user_id"?: string;
            "merchant_id": string;
            "merchant_signup_id"?: string;
            "partner_app_id": string;
            "partner_app_install_id": string;
            "partner_app_name": string;
            "revoked_at"?: string;
            "revoked_by"?: "merchant" | "partner_app" | (string & {});
            "revoked_by_user_id"?: string;
            "status": "pending_exchange" | "active" | "revoked" | (string & {});
            "supported_actions": Array<"revoke" | (string & {})>;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<PartnerAppInstall>;
    };
    "event_source"?: "partner_app" | (string & {});
    "event_type"?: "partner_app_install.updated";
    "source"?: {
        "merchant_id": string;
        "partner_app_install_id": string;
    };
})
    & {
    "event_type": "partner_app_install.updated";
});
/**
 * The connected app install and the API keys and webhook endpoints ended by this request. A
 * merchant's authorization of a partner application.
 */
export type PartnerAppInstallWithEndedAccess = ({})
    & (Exclude<PartnerAppInstall & object, readonly unknown[]>)
    & ({
    /**
     * Webhook endpoints this request deleted because they were linked to this install. Sandbox
     * endpoints stop receiving events immediately and are removed within seconds. Empty when no
     * endpoints ended. maxItems: 50. [] (Value): string. pattern: ^whep_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "whep_01KEZF7C006FXYTAJRZCGCBJTN".
     */
    "deleted_webhook_endpoint_ids": Array<string>;
    /**
     * API keys this request revoked because they were linked to this install, live keys first.
     * Empty when no keys ended or a previous request already revoked them. maxItems: 50. []
     * (Value): string. pattern: ^key_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "key_01KEZF7C008CTC2G5V6J08M6S7".
     */
    "revoked_api_key_ids": Array<string>;
});
/** A partner app install revoke result and request metadata. */
export type PartnerAppInstallWithEndedAccessResponse = {
    /**
     * The connected app install and the linked API key and webhook endpoint IDs ended by this
     * revoke request. The connected app install and the API keys and webhook endpoints ended by
     * this request. A merchant's authorization of a partner application.
     */
    "data": PartnerAppInstallWithEndedAccess;
    /**
     * Response metadata, including the API version, trace ID, warnings, and whether this result
     * was replayed, when present. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, useful when contacting Flint support. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type PartnerAppInstallsListParams = {
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
     * Filter by app ID. pattern: ^papp_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: InputValue<string>;
    /**
     * Filter by install status. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "pending_exchange", "active", "revoked". Value enum: "pending_exchange",
     * "active", "revoked". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "pending_exchange", "active", "revoked". anyOf[1][] (Value): string. Value enum:
     * "pending_exchange", "active", "revoked". anyOf[2] (Value): string. Value enum:
     * "pending_exchange", "active", "revoked".
     */
    "status"?: InputValue<("pending_exchange" | "active" | "revoked") | readonly ("pending_exchange" | "active" | "revoked")[]>;
};
export type PartnerAppInstallsRevokeParams = {};
/** A page of `PartnerApp` objects. */
export type PartnerAppListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PartnerApp}. An application that merchants can authorize to access their accounts.
     */
    "data": Array<PartnerApp>;
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
 * The destination merchant emails keep using while a move to another registrable domain is
 * pending.
 */
export type PartnerAppMerchantActionRouting = {
    /**
     * When routing switches to the current merchant_action_url. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * The previous merchant action URL that Flint's merchant emails still use, and whose host code
     * emails still show. While the app had no merchant action URL before the change, this is
     * Flint's own page.
     */
    "url": string;
};
/**
 * An installed merchant's payments and payouts readiness in one environment, summarized for the
 * partner app's owner.
 */
export type PartnerAppMerchantReadiness = {
    /**
     * How many distinct requirements in the merchant's `readiness.requirements.currently_due` and
     * `past_due` are open. 0 when nothing is due now. Read the merchant with a partner app token
     * in this grant's mode for the requirement names. Format: int64. minimum: 0.
     */
    "blocking_requirement_count": number;
    /**
     * When Flint last observed the merchant's account, which the statuses come from. The
     * merchant's own `readiness.observed_at` can be later, because it also covers capability
     * observations. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "observed_at": string;
    /**
     * Whether the merchant can take payments in this environment, with the `status` and
     * `status_reason` of `readiness.payments` on the merchant. The status of one readiness area
     * and the reason for it, as on the merchant's `readiness`.
     */
    "payments": PartnerAppMerchantReadinessAxis;
    /**
     * Whether the merchant can receive payouts in this environment, with the `status` and
     * `status_reason` of `readiness.payouts` on the merchant. The status of one readiness area and
     * the reason for it, as on the merchant's `readiness`.
     */
    "payouts": PartnerAppMerchantReadinessAxis;
};
/** The status of one readiness area and the reason for it, as on the merchant's `readiness`. */
export type PartnerAppMerchantReadinessAxis = {
    /**
     * Whether this area works now, with the same value as on the merchant's `readiness`. Value
     * enum: "ready", "pending", "blocked", "not_requested", "not_available".
     */
    "status": "ready" | "pending" | "blocked" | "not_requested" | "not_available" | (string & {});
    /**
     * Why the status isn't `ready`. Absent when the status is `ready` or `not_requested`. Value
     * enum: "provisioning", "onboarding_not_started", "requirements_due", "requirements_past_due",
     * "pending_verification", "account_rejected", "disabled_by_platform_policy",
     * "billing_suspended", "platform_review", "processing_not_enabled",
     * "platform_funding_unavailable", "tax_category_required", "service_unavailable",
     * "payment_option_access_not_provisioned", "payment_option_activation_pending",
     * "payment_option_not_in_plan", "payment_option_not_available", "capability_not_active",
     * "other".
     */
    "status_reason"?: "provisioning"
        | "onboarding_not_started"
        | "requirements_due"
        | "requirements_past_due"
        | "pending_verification"
        | "account_rejected"
        | "disabled_by_platform_policy"
        | "billing_suspended"
        | "platform_review"
        | "processing_not_enabled"
        | "platform_funding_unavailable"
        | "tax_category_required"
        | "service_unavailable"
        | "payment_option_access_not_provisioned"
        | "payment_option_activation_pending"
        | "payment_option_not_in_plan"
        | "payment_option_not_available"
        | "capability_not_active"
        | "other"
        | (string & {});
};
/**
 * The app's declaration that its owner sends splits of the payments it collects to sellers:
 * merchants that installed the app and approved receiving split funds from it. Merchants see it on
 * the consent screen.
 */
export type PartnerAppPaymentSplits = {
    /**
     * The marketplace's terms for its sellers, as an HTTPS URL of at most 2,048 characters. The
     * consent screen links it. Format: uri. maxLength: 2048. pattern: ^https://. Example:
     * "https://example.com/receipt".
     */
    "seller_terms_url": string;
};
/**
 * The whole payment_splits declaration. Every field is required, and a write replaces the
 * declaration whole.
 */
export type PartnerAppPaymentSplitsRequestInput = {
    /**
     * The marketplace's terms for its sellers, as an HTTPS URL of at most 2,048 characters. The
     * consent screen links it. Format: uri. minLength: 1. maxLength: 2048. pattern: ^https://.
     * Example: "https://example.com/receipt".
     */
    "seller_terms_url": string;
};
/**
 * One permission a partner app can request, with a title, a description, and the Flint scopes it
 * grants.
 */
export type PartnerAppPermissionManifestEntry = {
    /** minLength: 1. */
    "description": string;
    /**
     * Whether the merchant can decline this permission when they approve the install. Defaults to
     * false: the permission is required and is always granted.
     */
    "optional"?: boolean;
    /** minLength: 1. Example: "manage_orders". */
    "permission_id": string;
    /**  [] (Value): string. minLength: 1. */
    "required_scopes": Array<string>;
    /** minLength: 1. */
    "title": string;
};
/**
 * One permission a partner app can request, with a title, a description, and the Flint scopes it
 * grants.
 */
export type PartnerAppPermissionManifestEntryRequestInput = PartnerAppPermissionManifestEntry;
/**
 * The app's platform onboarding. Platform capabilities apply in live mode only; test mode never
 * checks them. requirements and capability readiness that depend on the owning merchant's live
 * onboarding are read when Flint serves the app, so a change there alone doesn't advance the app's
 * version or send a partner_app event.
 */
export type PartnerAppPlatform = {
    /**
     * One entry per platform capability, in the same order for every app. [] (Value): {@link
     * PartnerAppPlatformCapability}. One platform capability and whether the app can use it in
     * live mode.
     */
    "capabilities": Array<PartnerAppPlatformCapability>;
    /**
     * The platform terms version Flint accepts now. Send its platform_terms_version to
     * accept-platform-terms. The app has accepted it when terms_acceptance.platform_terms_version
     * is the same. The current version of Flint's platform terms: the only version
     * accept-platform-terms accepts.
     */
    "current_terms": PartnerAppPlatformCurrentTerms;
    /**
     * The platform's live merchant and monthly volume limits, present once Flint has approved or
     * limited the app. Limits are soft: crossing one never refuses or interrupts a payment or an
     * onboarding step. Flint staff are alerted and may limit or pause the app. Soft limits on the
     * platform's live use, and its usage against them.
     */
    "limits"?: PartnerAppPlatformLimits;
    /**
     * What's outstanding before Flint can review the app, `[]` when nothing is. Flint moves the
     * app to pending_review when the last one is met. [] enum: "owner_merchant_onboarding",
     * "platform_profile", "platform_terms". [] (Value): string. Value enum:
     * "owner_merchant_onboarding", "platform_profile", "platform_terms".
     */
    "requirements": Array<"owner_merchant_onboarding" | "platform_profile" | "platform_terms" | (string & {})>;
    /**
     * The share of each platform fee Flint holds as a reserve and how long it holds it, present
     * once Flint has approved or limited the app. A change applies to fees collected afterwards.
     * The platform's reserve terms.
     */
    "reserve"?: PartnerAppPlatformReserve;
    /**
     * Where the app is in platform onboarding. No value is final. Value enum: "not_started",
     * "pending_review", "approved", "limited", "rejected".
     */
    "status": "not_started" | "pending_review" | "approved" | "limited" | "rejected" | (string & {});
    /**
     * The latest acceptance of Flint's platform terms. `null` when the app hasn't accepted any
     * version. anyOf[1] (Value): {@link PartnerAppPlatformTermsAcceptance}. Who accepted a version
     * of Flint's platform terms, and when. anyOf[2] (Value): null.
     */
    "terms_acceptance": ((PartnerAppPlatformTermsAcceptance) | (null));
};
export type PartnerAppPlatformApprovedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "allowed_scopes": Array<string>;
            "api_version": string;
            "api_version_changed_at"?: string;
            "api_version_previous"?: string;
            "api_version_rollback_expires_at"?: string;
            "client_id": string;
            "client_secret_enabled": boolean;
            "client_secret_last_used_at": string | null;
            "created_at": string;
            "default_requested_permissions": Array<string>;
            "merchant_action_routing"?: PartnerAppMerchantActionRouting;
            "merchant_action_url"?: string;
            "name": string;
            "partner_app_id": string;
            "payment_splits"?: PartnerAppPaymentSplits;
            "permission_manifest": Array<PartnerAppPermissionManifestEntry>;
            "platform": PartnerAppPlatform;
            "platform_fee_cap"?: PlatformFeeCap;
            "platform_profile"?: PartnerAppPlatformProfile;
            "previous_secret_expires_at"?: string;
            "redirect_uris": Array<string>;
            "status": "active" | "archived" | (string & {});
            "supported_actions": Array<"accept_platform_terms" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<PartnerApp>;
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "partner_app.platform_approved";
})
    & {
    "event_type": "partner_app.platform_approved";
});
/** One platform capability and whether the app can use it in live mode. */
export type PartnerAppPlatformCapability = {
    /**
     * The platform capability. Value enum: "platform_fees", "merchant_onboarding",
     * "create_merchants", "payment_splits".
     */
    "capability": "platform_fees" | "merchant_onboarding" | "create_merchants" | "payment_splits" | (string & {});
    /**
     * Why the capability is inactive. Present only while status is inactive. Value enum:
     * "requirements_due", "pending_review", "not_approved", "rejected", "paused".
     */
    "inactive_reason"?: "requirements_due" | "pending_review" | "not_approved" | "rejected" | "paused" | (string & {});
    /** Whether the capability works in live mode. Value enum: "active", "inactive". */
    "status": "active" | "inactive" | (string & {});
};
/**
 * The current version of Flint's platform terms: the only version accept-platform-terms accepts.
 */
export type PartnerAppPlatformCurrentTerms = {
    /**
     * When accepting this version becomes required. Until then an earlier accepted version keeps
     * the platform_terms requirement met; from then the app needs this one. Absent when this
     * version is already required. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "acceptance_due_at"?: string;
    /**
     * The current platform terms version. Send it as platform_terms_version to
     * accept-platform-terms.
     */
    "platform_terms_version": string;
    /**
     * Where Flint publishes this version's text: the Flint Platform Agreement. `null` when the
     * version has no published text. Format: uri. Example: "https://example.com/receipt".
     */
    "url": string | null;
};
export type PartnerAppPlatformLimitedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "allowed_scopes": Array<string>;
            "api_version": string;
            "api_version_changed_at"?: string;
            "api_version_previous"?: string;
            "api_version_rollback_expires_at"?: string;
            "client_id": string;
            "client_secret_enabled": boolean;
            "client_secret_last_used_at": string | null;
            "created_at": string;
            "default_requested_permissions": Array<string>;
            "merchant_action_routing"?: PartnerAppMerchantActionRouting;
            "merchant_action_url"?: string;
            "name": string;
            "partner_app_id": string;
            "payment_splits"?: PartnerAppPaymentSplits;
            "permission_manifest": Array<PartnerAppPermissionManifestEntry>;
            "platform": PartnerAppPlatform;
            "platform_fee_cap"?: PlatformFeeCap;
            "platform_profile"?: PartnerAppPlatformProfile;
            "previous_secret_expires_at"?: string;
            "redirect_uris": Array<string>;
            "status": "active" | "archived" | (string & {});
            "supported_actions": Array<"accept_platform_terms" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<PartnerApp>;
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "partner_app.platform_limited";
})
    & {
    "event_type": "partner_app.platform_limited";
});
/** Soft limits on the platform's live use, and its usage against them. */
export type PartnerAppPlatformLimits = {
    /**
     * Live merchants the platform is expected to use a platform capability on: a succeeded live
     * platform fee, or live onboarding through an install. Format: int64. minimum: 1.
     */
    "live_merchant_limit": number;
    /**
     * Monthly fee-bearing live volume, keyed by currency code: captured amounts of live payments
     * whose platform fee succeeded, in each calendar month (UTC). Only USD today. * (Value):
     * {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "monthly_volume_limit_currency_options": Record<string, MoneyValue>;
    /**
     * The platform's current usage against each limit. Usage is an observation: it changes without
     * a write to the app, doesn't advance the app's version, and sends no event. The platform's
     * usage against its limits, as Flint last counted it.
     */
    "usage": PartnerAppPlatformUsage;
};
/** What the platform tells Flint for its review. It is one value: a write replaces it whole. */
export type PartnerAppPlatformProfile = {
    /**
     * Merchants the platform expects to serve on Flint in the next 12 months, from 1 to 1,000,000.
     * Format: int64. minimum: 1. maximum: 1000000.
     */
    "estimated_merchant_count": number;
    /**
     * Monthly payment volume the platform expects across those merchants in 12 months. Above zero,
     * in USD. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "estimated_monthly_volume_money": MoneyValue;
    /**
     * The kinds of merchants the platform serves, in 1 to 500 characters. minLength: 1. maxLength:
     * 500.
     */
    "merchant_description": string;
    /**
     * How the platform onboards and monitors its merchants, in 1 to 2,000 characters. minLength:
     * 1. maxLength: 2000.
     */
    "merchant_onboarding_description": string;
    /**
     * What the platform's product does, in 1 to 1,000 characters. minLength: 1. maxLength: 1000.
     */
    "product_description": string;
    /**
     * Where the platform's merchants get support. Format: email. maxLength: 320. Example:
     * "buyer@example.com".
     */
    "support_email": string;
    /**
     * Support phone number in E.164 format, such as +14155550123. Optional. pattern:
     * ^\+[1-9][0-9]{1,14}$.
     */
    "support_phone"?: string;
    /**
     * The platform's website, as an https URL. Format: uri. maxLength: 2048. Example:
     * "https://example.com/receipt".
     */
    "website_url": string;
};
/**
 * The whole platform profile. Every field is required except support_phone, and a write replaces
 * the profile whole.
 */
export type PartnerAppPlatformProfileRequestInput = {
    /**
     * Merchants the platform expects to serve on Flint in the next 12 months, from 1 to 1,000,000.
     * Format: int64. minimum: 1. maximum: 1000000.
     */
    "estimated_merchant_count": number;
    /**
     * Monthly payment volume the platform expects across those merchants in 12 months. Above zero,
     * in USD. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "estimated_monthly_volume_money": MoneyValueInput;
    /**
     * The kinds of merchants the platform serves, in 1 to 500 characters. minLength: 1. maxLength:
     * 500.
     */
    "merchant_description": string;
    /**
     * How the platform onboards and monitors its merchants, in 1 to 2,000 characters. minLength:
     * 1. maxLength: 2000.
     */
    "merchant_onboarding_description": string;
    /**
     * What the platform's product does, in 1 to 1,000 characters. minLength: 1. maxLength: 1000.
     */
    "product_description": string;
    /**
     * Where the platform's merchants get support. Format: email. minLength: 1. maxLength: 320.
     * Example: "buyer@example.com".
     */
    "support_email": string;
    /**
     * Support phone number in E.164 format, such as +14155550123. Optional. minLength: 1. pattern:
     * ^\+[1-9][0-9]{1,14}$.
     */
    "support_phone"?: string;
    /**
     * The platform's website, as an https URL. Format: uri. minLength: 1. maxLength: 2048.
     * Example: "https://example.com/receipt".
     */
    "website_url": string;
};
export type PartnerAppPlatformRejectedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "allowed_scopes": Array<string>;
            "api_version": string;
            "api_version_changed_at"?: string;
            "api_version_previous"?: string;
            "api_version_rollback_expires_at"?: string;
            "client_id": string;
            "client_secret_enabled": boolean;
            "client_secret_last_used_at": string | null;
            "created_at": string;
            "default_requested_permissions": Array<string>;
            "merchant_action_routing"?: PartnerAppMerchantActionRouting;
            "merchant_action_url"?: string;
            "name": string;
            "partner_app_id": string;
            "payment_splits"?: PartnerAppPaymentSplits;
            "permission_manifest": Array<PartnerAppPermissionManifestEntry>;
            "platform": PartnerAppPlatform;
            "platform_fee_cap"?: PlatformFeeCap;
            "platform_profile"?: PartnerAppPlatformProfile;
            "previous_secret_expires_at"?: string;
            "redirect_uris": Array<string>;
            "status": "active" | "archived" | (string & {});
            "supported_actions": Array<"accept_platform_terms" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<PartnerApp>;
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "partner_app.platform_rejected";
})
    & {
    "event_type": "partner_app.platform_rejected";
});
/** The platform's reserve terms. */
export type PartnerAppPlatformReserve = {
    /**
     * Share of each platform fee Flint holds as a reserve, in percent: 20 means 20%. minimum: 0.
     * maximum: 100. multipleOf: 0.0001.
     */
    "percent": number;
    /**
     * How long Flint holds each fee's reserve share after the payment, in seconds. 10368000 is 120
     * days. Format: int64. minimum: 0.
     */
    "release_delay_seconds": number;
};
/** Who accepted a version of Flint's platform terms, and when. */
export type PartnerAppPlatformTermsAcceptance = {
    /** When Flint recorded the acceptance. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "accepted_at": string;
    /**
     * The credential that accepted: a user for a Dashboard session, or an api_key. A reference to
     * another resource by `resource_type` and `resource_id`.
     */
    "accepted_by": ResourceReference;
    /** The platform terms version accepted. */
    "platform_terms_version": string;
};
/** The platform's usage against its limits, as Flint last counted it. */
export type PartnerAppPlatformUsage = {
    /**
     * Live merchants counted toward live_merchant_limit. A merchant counts from the platform's
     * first counted use on it and stops counting when its live grant is revoked. Format: int64.
     */
    "live_merchant_count": number;
    /**
     * Fee-bearing live volume this calendar month (UTC), keyed by currency code. * (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "monthly_volume_currency_options": Record<string, MoneyValue>;
    /**
     * When Flint last updated these counts. Counting trails the payments and onboarding calls it
     * counts by a short delay. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "observed_at": string;
    /**
     * When the monthly volume starts again from zero: the start of the next calendar month, UTC.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "resets_at": string;
};
/** A response containing `PartnerApp` data. */
export type PartnerAppResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An application that
     * merchants can authorize to access their accounts.
     */
    "data": PartnerApp;
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
export type PartnerAppUpdatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "allowed_scopes": Array<string>;
            "api_version": string;
            "api_version_changed_at"?: string;
            "api_version_previous"?: string;
            "api_version_rollback_expires_at"?: string;
            "client_id": string;
            "client_secret_enabled": boolean;
            "client_secret_last_used_at": string | null;
            "created_at": string;
            "default_requested_permissions": Array<string>;
            "merchant_action_routing"?: PartnerAppMerchantActionRouting;
            "merchant_action_url"?: string;
            "name": string;
            "partner_app_id": string;
            "payment_splits"?: PartnerAppPaymentSplits;
            "permission_manifest": Array<PartnerAppPermissionManifestEntry>;
            "platform": PartnerAppPlatform;
            "platform_fee_cap"?: PlatformFeeCap;
            "platform_profile"?: PartnerAppPlatformProfile;
            "previous_secret_expires_at"?: string;
            "redirect_uris": Array<string>;
            "status": "active" | "archived" | (string & {});
            "supported_actions": Array<"accept_platform_terms" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<PartnerApp>;
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "partner_app.updated";
})
    & {
    "event_type": "partner_app.updated";
});
/**
 * A partner app returned with its newly issued client secret after rotation. An application that
 * merchants can authorize to access their accounts.
 */
export type PartnerAppWithRotatedSecret = (Exclude<PartnerApp & object, readonly unknown[]>)
    & ({
    /** Newly issued client secret, returned only once after rotation. */
    "client_secret": string;
});
/**
 * A partner app returned with a one-time client secret when create or PATCH issues one. An
 * application that merchants can authorize to access their accounts.
 */
export type PartnerAppWithSecret = (Exclude<PartnerApp & object, readonly unknown[]>)
    & ({
    /**
     * One-time client secret returned when issued by create or PATCH. Null when this response did
     * not issue a secret, including when secret authentication was already enabled.
     */
    "client_secret": string | null;
});
/** A response containing `PartnerAppWithSecret` data. */
export type PartnerAppWithSecretResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A partner app returned
     * with a one-time client secret when create or PATCH issues one. An application that merchants
     * can authorize to access their accounts.
     */
    "data": PartnerAppWithSecret;
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
export type PartnerAppsAcceptPlatformTermsParams = (InputValue<AcceptPartnerAppPlatformTermsRequestInput>);
export type PartnerAppsCreateCredentialParams = (CreatePartnerAppCredentialRequestInput);
export type PartnerAppsCreateParams = (InputValue<CreatePartnerAppRequestInput>);
