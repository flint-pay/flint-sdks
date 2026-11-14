import type { MerchantWebhookEnvelope } from './types-38.js';
import type {
    PartnerApp,
    PartnerAppMerchantActionRouting,
    PartnerAppPaymentSplits,
    PartnerAppMerchantReadiness
} from './types-43.js';
import type { PlatformFeeCap, PlatformFeeRequest, PlatformFeeRequestInput } from './types-49.js';
import type { MoneyValue, MoneyValueInput, Order } from './types-39.js';
import type { ResourceReference, ResponseMeta } from './types-54.js';
import type { InputValue } from '../runtime.js';
import type { AcceptPartnerAppPlatformTermsRequestInput } from './types-0.js';
import type { CreatePartnerAppCredentialRequestInput, CreatePartnerAppRequestInput } from './types-11.js';
import type { CheckoutSessionsListCustomerVerificationsParams } from './types-6.js';
import type { RotatePartnerAppSecretRequestInput, SelectableOrderPaymentIntent } from './types-59.js';
import type { UpdatePartnerAppRequestInput } from './types-67.js';
import type { WebhookEventSource } from './types-69.js';
import type { CheckoutBuyerContactRequest, CheckoutBuyerContactRequestInput } from './types-5.js';
import type { OrderGiftCardAllocationAcceptance, OrderGiftCardAllocationAcceptanceInput } from './types-40.js';
import type { OrderPaymentIntentSelection, OrderPaymentIntentSelectionInput, OrderPaymentAttempt } from './types-41.js';
import type {
    PaymentSourceCredential,
    PaymentSourceCredentialInput,
    PaymentSourceCredentialToken,
    PaymentSourceCredentialTokenInput
} from './types-47.js';
import type { PaymentSplitRequest, PaymentSplitRequestInput } from './types-48.js';
import type { PaymentErrorSummary } from './types-45.js';
import type { StripePaymentClientAction } from './types-60.js';
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
export type PartnerAppsDeleteCredentialParams = {};
export type PartnerAppsDeleteParams = {
    /**
     * Apply only if the app has this version. Format: uint64. minimum: 1. maximum:
     * 9007199254740991.
     */
    "expected_version"?: InputValue<number>;
};
export type PartnerAppsGetCredentialParams = {};
export type PartnerAppsGetInstallParams = {};
export type PartnerAppsGetParams = {};
export type PartnerAppsListCredentialsParams = CheckoutSessionsListCustomerVerificationsParams;
export type PartnerAppsListInstallsParams = {
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
     * Filter by installed merchant ID. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: InputValue<string>;
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
export type PartnerAppsListParams = {
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
     * "archived". Value enum: "active", "archived". anyOf[1] (Value): Array of string. minItems:
     * 1. [] enum: "active", "archived". anyOf[1][] (Value): string. Value enum: "active",
     * "archived". anyOf[2] (Value): string. Value enum: "active", "archived".
     */
    "status"?: InputValue<("active" | "archived") | readonly ("active" | "archived")[]>;
};
export type PartnerAppsRevokeEnvironmentGrantParams = {};
export type PartnerAppsRevokeInstallParams = {};
export type PartnerAppsRotateSecretParams = (InputValue<RotatePartnerAppSecretRequestInput>);
export type PartnerAppsUpdateParams = (UpdatePartnerAppRequestInput);
/**
 * What a partner app is asking to access, shown to a merchant before they approve it, including
 * requested permissions and the redirect URI.
 */
export type PartnerAuthorizePreview = {
    /**
     * The app's client ID, as sent in the authorization request. Example:
     * "fpc_00112233445566778899aabbccddeeff".
     */
    "client_id": string;
    /** Whether the install is for test or live mode. Value enum: "test", "live". */
    "mode": "test" | "live" | (string & {});
    /** The app's current name. */
    "name": string;
    /** ID of the partner app asking for access. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV". */
    "partner_app_id": string;
    /** The app’s version. It changes whenever the app is edited. Format: int64. */
    "partner_app_version": number;
    /**
     * The app's payment_splits declaration, which the consent screen shows with its seller terms.
     * Every authorization of an app that declares it asks the merchant to approve receiving split
     * funds from the app, and approving this version of the app approves them for this mode.
     * Absent when the app sends no splits. The app's declaration that its owner sends splits of
     * the payments it collects to sellers: merchants that installed the app and approved receiving
     * split funds from it. Merchants see it on the consent screen.
     */
    "payment_splits"?: PartnerAppPaymentSplits;
    /**
     * The app's platform fee cap, which the consent screen shows. Approving this version of the
     * app approves the cap for this mode. Absent when the app charges no platform fees. The most a
     * platform fee can take from one payment. The largest platform fee on a payment is percent of
     * the amount it collects, rounded half up to the minor unit, plus the currency's fixed part if
     * it has one, and never more than the currency's maximum: a cap of 1% + 0.30 USD with a 5.00
     * USD maximum allows up to 1.30 USD on a 100.00 USD payment. A currency without a maximum
     * can't carry a platform fee.
     */
    "platform_fee_cap"?: PlatformFeeCap;
    /** The registered redirect URI Flint sends the merchant back to after they approve or deny. */
    "redirect_uri": string;
    /**
     * IDs of the requested permissions, sorted. They are the permissions named in scope, or the
     * app's default requested permissions when scope is omitted, plus every required permission.
     * [] (Value): string. Example: "manage_orders".
     */
    "requested_permission_ids": Array<string>;
    /**
     * The requested permissions with the title, description, and scopes the consent screen shows,
     * in the same order as requested_permission_ids. [] (Value): {@link
     * PartnerAppPermissionManifestEntry}. One permission a partner app requests during
     * authorization, with its title, description, and required scopes.
     */
    "requested_permissions": Array<PartnerAppPermissionManifestEntry>;
};
/** A response containing `PartnerAuthorizePreview` data. */
export type PartnerAuthorizePreviewResponse = {
    /**
     * Resource, collection, or operation result returned by this request. What a partner app is
     * asking to access, shown to a merchant before they approve it, including requested
     * permissions and the redirect URI.
     */
    "data": PartnerAuthorizePreview;
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
/** A partner application's authorization to access an environment. */
export type PartnerEnvironmentGrant = ({
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". */
    "environment_grant_id": string;
    /**
     * The app’s permissions this grant holds, from the app’s current manifest. Their permission
     * IDs are the code exchange's scope. [] (Value): {@link PartnerAppPermissionManifestEntry}.
     * One permission a partner app can request, with a title, a description, and the Flint scopes
     * it grants.
     */
    "granted_permissions": Array<PartnerAppPermissionManifestEntry>;
    /**  [] (Value): string. */
    "granted_scopes": Array<string>;
    /**
     * The installed merchant’s payments and payouts readiness in this grant’s environment,
     * summarized for the app’s owner: the `status` and `status_reason` that a partner app token in
     * the grant’s mode reads from `readiness` on GET /v1/merchant for this merchant, without
     * requirement names or next actions. Present when the app’s owner lists installs or gets one,
     * on an active grant of an active install of an active app, when the grant holds
     * `merchants.profile.read` or `merchants.profile.write` within the app’s `allowed_scopes` and
     * the merchant and the grant’s environment are active. Absent on other grants, on the
     * installing merchant’s own install reads, on revoke results, and in webhook events. To see
     * which requirements are due, read the merchant with a partner app token in the grant’s mode.
     * An installed merchant's payments and payouts readiness in one environment, summarized for
     * the partner app's owner.
     */
    "merchant_readiness"?: PartnerAppMerchantReadiness;
    /** Environment used for this resource or request. Value enum: "test", "live". */
    "mode": "test" | "live" | (string & {});
    /** ID of the install this grant belongs to. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". */
    "partner_app_install_id": string;
    /**
     * The merchant's approval to receive split funds from the app in this mode, present while it
     * lasts. A merchant approves by authorizing an app that declares payment_splits. The approval
     * ends when the app removes payment_splits, or when the merchant or you revoke this grant or
     * the install; authorizing again approves again. A payment's splits to this seller need the
     * approval in the payment's mode. The merchant's approval to receive split funds from the app
     * in this grant's mode.
     */
    "payment_splits"?: PartnerEnvironmentGrantPaymentSplits;
    /**
     * The platform fee cap the merchant approved for this mode: what the app's cap was when the
     * merchant approved it, lowered at once whenever the app lowers its cap. Absent when the
     * merchant approved none. A higher app cap applies only after the merchant authorizes again.
     * No request accepts a platform fee yet. The most a platform fee can take from one payment.
     * The largest platform fee on a payment is percent of the amount it collects, rounded half up
     * to the minor unit, plus the currency's fixed part if it has one, and never more than the
     * currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on
     * a 100.00 USD payment. A currency without a maximum can't carry a platform fee.
     */
    "platform_fee_cap"?: PlatformFeeCap;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "revoked_at"?: string;
    /** Example: "usr_01KEZF7C00YC8757ZYP9727JM0". */
    "revoked_by_user_id"?: string;
    /** ID of the sandbox this resource belongs to. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0". */
    "sandbox_id"?: string;
    /** Value enum: "pending_exchange", "active", "revoked". */
    "status": "pending_exchange" | "active" | "revoked" | (string & {});
    /**
     * Lifecycle actions Flint accepts now. Revoke is accepted for pending and active grants and
     * returns the current grant when it is already revoked. [] enum: "revoke". [] (Value): string.
     * Value enum: "revoke".
     */
    "supported_actions": Array<"revoke" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
});
/** The merchant's approval to receive split funds from the app in this grant's mode. */
export type PartnerEnvironmentGrantPaymentSplits = {
    /**
     * When the merchant approved receiving split funds. Authorizing again with the same seller
     * terms keeps it; approving other seller terms, or approving again after the approval ended,
     * sets a new one. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "approved_at": string;
    /**
     * The seller terms the merchant approved: the app's seller_terms_url when the merchant
     * authorized it. Changing the app's seller_terms_url doesn't change it. Format: uri.
     * maxLength: 2048. pattern: ^https://. Example: "https://example.com/receipt".
     */
    "seller_terms_url": string;
};
/**
 * The response for: Exchange an OAuth token; List authorized CLI contexts; Review CLI session
 * consent; Revoke an OAuth token; Start CLI browser login.
 */
export type PartnerTokenErrorResponse = {
    "error": string;
    "error_description"?: string;
};
/** Fields shared by partner webhook payloads. */
export type PartnerWebhookEnvelope = ({
    /**
     * API version used to render this delivery attempt. The older of the event version and the
     * endpoint version when the attempt runs, with default resolved to the merchant pin. Format:
     * date. Example: "2026-08-02".
     */
    "api_version": string;
    /** When Flint recorded the event. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The resource snapshot recorded for this event and rendered at the delivery API version.
     * object (Required): object. The affected public resource without expansions, client authority
     * fields, or fields computed for an individual caller. previous_attributes (Optional): object.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data": {
        /**
         * The affected public resource without expansions, client authority fields, or fields
         * computed for an individual caller.
         */
        "object": {
            [key: string]: unknown;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: {
            [key: string]: unknown;
        };
    };
    /**
     * The origin of the event. Selects the webhook envelope and the fields in source. Value enum:
     * "partner_app", "installed_merchants".
     */
    "event_source": "partner_app" | "installed_merchants" | (string & {});
    /**
     * The resource change or condition this event announces. Value enum: "api_key.created",
     * "api_key.revoked", "api_key.updated", "balance.updated", "balance_transaction.created",
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
     * "invoice_payment_attempt.succeeded", "merchant.readiness_updated", "merchant.updated",
     * "merchant_billing_balance.updated", "merchant_billing_invoice.issued",
     * "merchant_billing_invoice.updated", "modifier_group.archived", "modifier_group.created",
     * "modifier_group.updated", "modifier_set.archived", "modifier_set.created",
     * "modifier_set.updated", "order.closed", "order.created",
     * "order.inventory_exception_created", "order.inventory_exception_resolved", "order.paid",
     * "order.partially_paid", "order.partially_refunded", "order.refunded", "order.updated",
     * "order_edit.created", "package.created", "package.updated", "partner_app.platform_approved",
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
        | "order_edit.created"
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
     * ID of the partner app that owns the receiving endpoint. Example:
     * "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id": string;
    /**
     * 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered
     * afterwards, which keeps its previous data shape. Value enum: 1, 2.
     */
    "payload_version": number;
    /**
     * The merchant and partner app install this event concerns, with environment details for
     * installed-merchant events. The merchant and partner app install the event concerns.
     * Environment fields are present for installed-merchant events.
     */
    "source": WebhookEventSource;
    /** true for a synthetic event sent from the test-events endpoint, false otherwise. */
    "test": boolean;
    /**
     * Stable ID of the recorded webhook event, shared by its delivery attempts. Example:
     * "whev_01KEZF7C00362MS3HV970TRZGS".
     */
    "webhook_event_id": string;
});
/** The request body for: Pause one of the current buyer's subscriptions; Pause subscription. */
export type PauseSubscriptionRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Billing cycles to pause for, at least 1. Omit it to pause until the subscription is resumed.
     * A pause with a duration resumes automatically at scheduled_resume_at. Repeating the same
     * pause length returns the paused subscription; changing the length requires resuming first.
     * When the store's customer_account.buyer_capabilities.pause.max_cycles is set, a buyer must
     * send a value from 1 to that limit. Format: int32. minimum: 1.
     */
    "pause_duration_cycles"?: number;
};
/** The request body for: Pause one of the current buyer's subscriptions; Pause subscription. */
export type PauseSubscriptionRequestInput = PauseSubscriptionRequest;
/** The request body for: Pay order. */
export type PayOrderRequest = ((PayOrderRequestPay)
    | (PayOrderRequestConfirmPaymentIntents)
    | (PayOrderRequestSetup)
    | (PayOrderRequestResume)
    | (Record<string, unknown>));
/** The `confirm_payment_intents` variant of `PayOrderRequest`. */
export type PayOrderRequestConfirmPaymentIntents = ({
    /**
     * Accept the exact gift_card_estimate returned on the current order, including all selected
     * cards and both totals. Requires an Idempotency-Key. Gift card payments collect the full
     * amount due and may use one processor payment intent for the processor_money remainder. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     */
    "accepted_gift_card_allocation"?: OrderGiftCardAllocationAcceptance;
    /** Value enum: "confirm_payment_intents". */
    "action": "confirm_payment_intents" | (string & {});
    /**
     * Buyer email and phone recorded on the order. A checkout session payment uses the session's
     * saved contact for omitted fields. Email and phone cannot be null. Buyer contact to supply
     * with payment or save during checkout. Send at least one field. Values are stored exactly as
     * sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted
     * fields and accept null to clear a field. Payment requests do not accept null. minProperties:
     * 1. email (Optional): (string or null) and string. Email for the buyer, such as
     * buyer@example.com. On checkout session updates, null clears the saved email. Format: email.
     * minLength: 1. maxLength: 255. Example: "buyer@example.com". minLength: 1. phone (Optional):
     * (string or null) and string. Phone for the buyer, in E.164 format, such as +14155551234. On
     * checkout session updates, null clears the saved phone. minLength: 1. pattern:
     * ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequest & object, readonly unknown[]>)
        & ({
        /** minLength: 1. */
        "email"?: string;
        /** minLength: 1. */
        "phone"?: string;
    });
    /**
     * How to complete the authentication step. Flint's API returns a Stripe client secret only for
     * client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's
     * authentication page receives what it needs to run the challenge, including the client secret
     * for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint
     * doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with
     * cancellation_reason payment_returned. The Stripe secret can also confirm the payment with
     * another card, so use it only with handleNextAction. Reader credentials do not support url;
     * omit client_action_type or send stripe for reader payments. Defaults to stripe for a new
     * confirmation; omission on a continuation keeps the existing type. Default: "stripe". Value
     * enum: "url", "stripe".
     */
    "client_action_type"?: "url" | "stripe" | (string & {});
    /**
     * What happens when the selected payment intents don't cover the balance. Defaults to
     * complete_order. Value enum: "complete_order", "partial_payment".
     */
    "completion_behavior"?: "complete_order" | "partial_payment" | (string & {});
    /**
     * The outstanding balance you reviewed. Required with checkout credentials, and with an API
     * key or partner token when the order has an open checkout session. Optional otherwise. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "expected_outstanding_money"?: MoneyValue;
    /**
     * Optional version from the order you reviewed. A mismatch returns VERSION_CONFLICT, even when
     * the outstanding amount is unchanged. Starting a payment advances the order's version. After
     * a declined or failed attempt, use the order returned in the pay response or read the order
     * again before retrying. When accepted_gift_card_allocation is sent, its order_version must
     * match this value. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * minItems: 1. [] (Value): {@link OrderPaymentIntentSelection}. Identifies a payment intent to
     * confirm for an order and the credential to use: a token, a saved payment method, a Stripe
     * confirmation token, or the attached source.
     */
    "payment_intents": (Array<OrderPaymentIntentSelection>);
    /**
     * Where Flint sends the buyer after a redirect or authentication step, adding only
     * payment_intent_id for a payment, or payment_method_id for a setup. The completion message
     * uses type flint.payment_action.completed and exactly that one subject key. Without it, the
     * step ends on a Flint page that tells the parent or opener the step completed. Accepts an
     * absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript,
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode
     * also accepts HTTP loopback URLs. With a checkout credential on order pay, omit
     * payment_return_url; checkout sessions use their own configured return URL. minLength: 1.
     * maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * The buyer's choice to save the card they typed for faster checkout at this merchant. Send
     * true only from the checkout session's own credential, when the session's
     * can_save_payment_method is true, for one newly collected card sent as
     * stripe.confirmation_token created with setup_future_usage on_session. The card is saved with
     * usage on_session once the payment succeeds, for the customer the checkout acts for: the
     * customer the merchant created the session for, or the customer whose email the buyer
     * confirmed in it. When save_payment_method_requires_verification is true, buyer_contact.email
     * is required. The card is kept pending for the customer with that email, creating one if
     * needed, and opens nothing until confirmed on the receipt within 24 hours. Without
     * save_payment_method_phone, payment_method_save.email_confirmation_required is true and an
     * emailed code confirms the save with purpose confirm_saved_payment_method and channel email.
     * The code goes only to the email given with the payment. Subscription signup and setup still
     * require email verification before collection when the email belongs to an existing customer.
     * A checkout the buyer bound by a texted code saves the card with that number. A checkout
     * whose buyer confirmed the customer's email can also send save_payment_method_phone, to save
     * the card with a number the buyer confirms by text after paying. A checkout can send the
     * buyer's choice with every payment button: Apple Pay, Google Pay, a bank account, or Affirm,
     * in stripe.confirmation_token created with no setup_future_usage, pays without the save, and
     * the payment attempt's payment_method_save reports not_saved with reason
     * payment_method_not_saveable. The session's save_payment_method_types lists what is saved.
     * Send false or omit it when the buyer does not choose to save; stripe.confirmation_token must
     * then have no setup_future_usage. Default: false.
     */
    "save_payment_method"?: boolean;
    /**
     * A US or Canadian mobile phone number in E.164 format, such as +14155552671, that confirms a
     * card saved while the checkout acts for no customer, or for the customer whose email the
     * buyer confirmed in it. Send it with save_payment_method: true only from the checkout
     * session's own credential, when the session's can_save_payment_method_with_phone is true. The
     * card is kept for the customer the checkout acts for, or else the merchant's customer with
     * the buyer's email, once the payment succeeds, or once it is approved when the merchant
     * captures later, but works for nothing until the buyer confirms it within 24 hours, with a
     * code texted to this number or, when the customer's email is the email of the payment,
     * emailed there instead: request the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method, and read payment_method_save on the checkout session. A card
     * saved with the number makes it the customer's saved number, and the cards saved with the
     * number it replaces are removed. A card not confirmed in time is not saved. minLength: 1.
     * maxLength: 16. pattern: ^\+1[2-9][0-9]{2}[2-9][0-9]{6}$.
     */
    "save_payment_method_phone"?: string;
});
/** The `confirm_payment_intents` variant of `PayOrderRequest`. */
export type PayOrderRequestConfirmPaymentIntentsInput = ({
    /**
     * Accept the exact gift_card_estimate returned on the current order, including all selected
     * cards and both totals. Requires an Idempotency-Key. Gift card payments collect the full
     * amount due and may use one processor payment intent for the processor_money remainder. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     */
    "accepted_gift_card_allocation"?: OrderGiftCardAllocationAcceptanceInput;
    /** Value enum: "confirm_payment_intents". */
    "action": "confirm_payment_intents";
    /**
     * Buyer email and phone recorded on the order. A checkout session payment uses the session's
     * saved contact for omitted fields. Email and phone cannot be null. Buyer contact to supply
     * with payment or save during checkout. Send at least one field. Values are stored exactly as
     * sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted
     * fields and accept null to clear a field. Payment requests do not accept null. minProperties:
     * 1. email (Optional): (string or null) and string. Email for the buyer, such as
     * buyer@example.com. On checkout session updates, null clears the saved email. Format: email.
     * minLength: 1. maxLength: 255. Example: "buyer@example.com". minLength: 1. phone (Optional):
     * (string or null) and string. Phone for the buyer, in E.164 format, such as +14155551234. On
     * checkout session updates, null clears the saved phone. minLength: 1. pattern:
     * ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequestInput & object, readonly unknown[]>)
        & ({
        /** minLength: 1. */
        "email"?: string;
        /** minLength: 1. */
        "phone"?: string;
    });
    /**
     * How to complete the authentication step. Flint's API returns a Stripe client secret only for
     * client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's
     * authentication page receives what it needs to run the challenge, including the client secret
     * for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint
     * doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with
     * cancellation_reason payment_returned. The Stripe secret can also confirm the payment with
     * another card, so use it only with handleNextAction. Reader credentials do not support url;
     * omit client_action_type or send stripe for reader payments. Defaults to stripe for a new
     * confirmation; omission on a continuation keeps the existing type. Default: "stripe". Value
     * enum: "url", "stripe".
     */
    "client_action_type"?: "url" | "stripe";
    /**
     * What happens when the selected payment intents don't cover the balance. Defaults to
     * complete_order. Value enum: "complete_order", "partial_payment".
     */
    "completion_behavior"?: "complete_order" | "partial_payment";
    /**
     * The outstanding balance you reviewed. Required with checkout credentials, and with an API
     * key or partner token when the order has an open checkout session. Optional otherwise. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "expected_outstanding_money"?: MoneyValueInput;
    /**
     * Optional version from the order you reviewed. A mismatch returns VERSION_CONFLICT, even when
     * the outstanding amount is unchanged. Starting a payment advances the order's version. After
     * a declined or failed attempt, use the order returned in the pay response or read the order
     * again before retrying. When accepted_gift_card_allocation is sent, its order_version must
     * match this value. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * minItems: 1. [] (Value): {@link OrderPaymentIntentSelectionInput}. Identifies a payment
     * intent to confirm for an order and the credential to use: a token, a saved payment method, a
     * Stripe confirmation token, or the attached source.
     */
    "payment_intents": (Array<OrderPaymentIntentSelectionInput>);
    /**
     * Where Flint sends the buyer after a redirect or authentication step, adding only
     * payment_intent_id for a payment, or payment_method_id for a setup. The completion message
     * uses type flint.payment_action.completed and exactly that one subject key. Without it, the
     * step ends on a Flint page that tells the parent or opener the step completed. Accepts an
     * absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript,
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode
     * also accepts HTTP loopback URLs. With a checkout credential on order pay, omit
     * payment_return_url; checkout sessions use their own configured return URL. minLength: 1.
     * maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * The buyer's choice to save the card they typed for faster checkout at this merchant. Send
     * true only from the checkout session's own credential, when the session's
     * can_save_payment_method is true, for one newly collected card sent as
     * stripe.confirmation_token created with setup_future_usage on_session. The card is saved with
     * usage on_session once the payment succeeds, for the customer the checkout acts for: the
     * customer the merchant created the session for, or the customer whose email the buyer
     * confirmed in it. When save_payment_method_requires_verification is true, buyer_contact.email
     * is required. The card is kept pending for the customer with that email, creating one if
     * needed, and opens nothing until confirmed on the receipt within 24 hours. Without
     * save_payment_method_phone, payment_method_save.email_confirmation_required is true and an
     * emailed code confirms the save with purpose confirm_saved_payment_method and channel email.
     * The code goes only to the email given with the payment. Subscription signup and setup still
     * require email verification before collection when the email belongs to an existing customer.
     * A checkout the buyer bound by a texted code saves the card with that number. A checkout
     * whose buyer confirmed the customer's email can also send save_payment_method_phone, to save
     * the card with a number the buyer confirms by text after paying. A checkout can send the
     * buyer's choice with every payment button: Apple Pay, Google Pay, a bank account, or Affirm,
     * in stripe.confirmation_token created with no setup_future_usage, pays without the save, and
     * the payment attempt's payment_method_save reports not_saved with reason
     * payment_method_not_saveable. The session's save_payment_method_types lists what is saved.
     * Send false or omit it when the buyer does not choose to save; stripe.confirmation_token must
     * then have no setup_future_usage. Default: false.
     */
    "save_payment_method"?: boolean;
    /**
     * A US or Canadian mobile phone number in E.164 format, such as +14155552671, that confirms a
     * card saved while the checkout acts for no customer, or for the customer whose email the
     * buyer confirmed in it. Send it with save_payment_method: true only from the checkout
     * session's own credential, when the session's can_save_payment_method_with_phone is true. The
     * card is kept for the customer the checkout acts for, or else the merchant's customer with
     * the buyer's email, once the payment succeeds, or once it is approved when the merchant
     * captures later, but works for nothing until the buyer confirms it within 24 hours, with a
     * code texted to this number or, when the customer's email is the email of the payment,
     * emailed there instead: request the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method, and read payment_method_save on the checkout session. A card
     * saved with the number makes it the customer's saved number, and the cards saved with the
     * number it replaces are removed. A card not confirmed in time is not saved. minLength: 1.
     * maxLength: 16. pattern: ^\+1[2-9][0-9]{2}[2-9][0-9]{6}$.
     */
    "save_payment_method_phone"?: string;
});
/** The request body for: Pay order. */
export type PayOrderRequestInput = ((PayOrderRequestPayInput)
    | (PayOrderRequestConfirmPaymentIntentsInput)
    | (PayOrderRequestSetupInput)
    | (PayOrderRequestResumeInput));
/** The `pay` variant of `PayOrderRequest`. */
export type PayOrderRequestPay = ({
    /**
     * Accept the exact gift_card_estimate returned on the current order, including all selected
     * cards and both totals. Requires an Idempotency-Key. Gift card payments collect the full
     * amount due and may use one processor payment intent for the processor_money remainder. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     */
    "accepted_gift_card_allocation"?: OrderGiftCardAllocationAcceptance;
    /** Value enum: "pay". */
    "action": "pay" | (string & {});
    /**
     * Buyer email and phone recorded on the order. A checkout session payment uses the session's
     * saved contact for omitted fields. Email and phone cannot be null. Buyer contact to supply
     * with payment or save during checkout. Send at least one field. Values are stored exactly as
     * sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted
     * fields and accept null to clear a field. Payment requests do not accept null. minProperties:
     * 1. email (Optional): (string or null) and string. Email for the buyer, such as
     * buyer@example.com. On checkout session updates, null clears the saved email. Format: email.
     * minLength: 1. maxLength: 255. Example: "buyer@example.com". minLength: 1. phone (Optional):
     * (string or null) and string. Phone for the buyer, in E.164 format, such as +14155551234. On
     * checkout session updates, null clears the saved phone. minLength: 1. pattern:
     * ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequest & object, readonly unknown[]>)
        & ({
        /** minLength: 1. */
        "email"?: string;
        /** minLength: 1. */
        "phone"?: string;
    });
    /**
     * How to complete the authentication step. Flint's API returns a Stripe client secret only for
     * client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's
     * authentication page receives what it needs to run the challenge, including the client secret
     * for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint
     * doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with
     * cancellation_reason payment_returned. The Stripe secret can also confirm the payment with
     * another card, so use it only with handleNextAction. Reader credentials do not support url;
     * omit client_action_type or send stripe for reader payments. Defaults to stripe for a new
     * confirmation; omission on a continuation keeps the existing type. Default: "stripe". Value
     * enum: "url", "stripe".
     */
    "client_action_type"?: "url" | "stripe" | (string & {});
    /**
     * The outstanding balance you reviewed. Required with checkout credentials, and with an API
     * key or partner token when the order has an open checkout session. Optional otherwise. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "expected_outstanding_money"?: MoneyValue;
    /**
     * Optional version from the order you reviewed. A mismatch returns VERSION_CONFLICT, even when
     * the outstanding amount is unchanged. Starting a payment advances the order's version. After
     * a declined or failed attempt, use the order returned in the pay response or read the order
     * again before retrying. When accepted_gift_card_allocation is sent, its order_version must
     * match this value. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Where Flint sends the buyer after a redirect or authentication step, adding only
     * payment_intent_id for a payment, or payment_method_id for a setup. The completion message
     * uses type flint.payment_action.completed and exactly that one subject key. Without it, the
     * step ends on a Flint page that tells the parent or opener the step completed. Accepts an
     * absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript,
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode
     * also accepts HTTP loopback URLs. With a checkout credential on order pay, omit
     * payment_return_url; checkout sessions use their own configured return URL. minLength: 1.
     * maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * A saved card on a checkout whose customer came from a code requires a code confirmed with
     * this credential in the last 15 minutes when the order ships to a new address. Otherwise pay
     * returns 409 ACTION_NOT_ALLOWED with reason verification_required and a next action to
     * request purpose pay_to_new_address. Known addresses are saved addresses or destinations of
     * earlier paid orders for this customer at this business; for a Flint wallet card, wallet
     * addresses count too. Pickup and orders that ship nothing never require it. A merchant-named
     * customer, typed card, Apple Pay, and Google Pay are unaffected. The credential you provide
     * to pay an order: a payment source token, a saved payment method ID, or a Stripe confirmation
     * token.
     */
    "payment_source"?: PaymentSourceCredential;
    /**
     * A platform fee your partner app charges on the processor payment pay creates, checked
     * against what that payment collects after gift cards. A pay that gift cards or a zero balance
     * settle creates no processor payment and charges no fee. Only a partner app install token can
     * send it; from any other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. A
     * subscription_plan checkout session, or an order whose payment starts or renews a
     * subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on platform_fee, because
     * Flint's billing creates the renewals. amount_money must be above zero, in the payment's
     * currency, at most the platform fee cap the merchant approved for this amount, and below the
     * amount; otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money, with
     * maximum_money when the cap or the amount bounds it. Without an approved cap in this currency
     * it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required. In live mode the partner
     * app's platform_fees capability must be active; otherwise ACTION_NOT_ALLOWED with capability
     * platform_fees and the reason the app's platform status gives. Test mode never checks the
     * capability. Flint lowers the fee, or cancels it, when the cap or Flint's own fees leave less
     * at confirm or capture, so the payment never fails because of it. Part of the request
     * fingerprint. See [Platform fees](/docs/guides/platform-fees). A platform fee the partner app
     * charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes
     * no share of it.
     */
    "platform_fee"?: PlatformFeeRequest;
    /**
     * The buyer's choice to save the card they typed for faster checkout at this merchant. Send
     * true only from the checkout session's own credential, when the session's
     * can_save_payment_method is true, for one newly collected card sent as
     * stripe.confirmation_token created with setup_future_usage on_session. The card is saved with
     * usage on_session once the payment succeeds, for the customer the checkout acts for: the
     * customer the merchant created the session for, or the customer whose email the buyer
     * confirmed in it. When save_payment_method_requires_verification is true, buyer_contact.email
     * is required. The card is kept pending for the customer with that email, creating one if
     * needed, and opens nothing until confirmed on the receipt within 24 hours. Without
     * save_payment_method_phone, payment_method_save.email_confirmation_required is true and an
     * emailed code confirms the save with purpose confirm_saved_payment_method and channel email.
     * The code goes only to the email given with the payment. Subscription signup and setup still
     * require email verification before collection when the email belongs to an existing customer.
     * A checkout the buyer bound by a texted code saves the card with that number. A checkout
     * whose buyer confirmed the customer's email can also send save_payment_method_phone, to save
     * the card with a number the buyer confirms by text after paying. A checkout can send the
     * buyer's choice with every payment button: Apple Pay, Google Pay, a bank account, or Affirm,
     * in stripe.confirmation_token created with no setup_future_usage, pays without the save, and
     * the payment attempt's payment_method_save reports not_saved with reason
     * payment_method_not_saveable. The session's save_payment_method_types lists what is saved.
     * Send false or omit it when the buyer does not choose to save; stripe.confirmation_token must
     * then have no setup_future_usage. Default: false.
     */
    "save_payment_method"?: boolean;
    /**
     * A US or Canadian mobile phone number in E.164 format, such as +14155552671, that confirms a
     * card saved while the checkout acts for no customer, or for the customer whose email the
     * buyer confirmed in it. Send it with save_payment_method: true only from the checkout
     * session's own credential, when the session's can_save_payment_method_with_phone is true. The
     * card is kept for the customer the checkout acts for, or else the merchant's customer with
     * the buyer's email, once the payment succeeds, or once it is approved when the merchant
     * captures later, but works for nothing until the buyer confirms it within 24 hours, with a
     * code texted to this number or, when the customer's email is the email of the payment,
     * emailed there instead: request the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method, and read payment_method_save on the checkout session. A card
     * saved with the number makes it the customer's saved number, and the cards saved with the
     * number it replaces are removed. A card not confirmed in time is not saved. minLength: 1.
     * maxLength: 16. pattern: ^\+1[2-9][0-9]{2}[2-9][0-9]{6}$.
     */
    "save_payment_method_phone"?: string;
    /**
     * Divide this payment's funds between the collecting merchant and sellers; this is separate
     * from split tender, where a buyer uses several payment methods. Only the collecting
     * merchant's own credentials can send splits. Each install must belong to the same app owned
     * by the collecting merchant, with the seller's approval in this mode and readiness to receive
     * payouts. Test mode needs no platform review; live mode requires the app's active
     * payment_splits capability and Flint support for the collecting account. Can't be combined
     * with platform_fee or saved payment credentials. The total must fit after the largest Flint
     * fee for the offered payment options, leaving one minor unit for the collecting merchant;
     * otherwise INVALID_REQUEST with INVALID_VALUE on splits and maximum_money. Fixed after
     * create, except capture's final amounts. Part of the idempotency fingerprint. On pay, the
     * total must fit the processor payment after gift cards. A payment funded entirely by gift
     * cards can't have splits. minItems: 1. maxItems: 25. [] (Value): {@link PaymentSplitRequest}.
     * A seller's fixed share of one payment, created with that payment. This divides the payment's
     * funds; split tender divides how the buyer pays.
     */
    "splits"?: Array<PaymentSplitRequest>;
});
/** The `pay` variant of `PayOrderRequest`. */
export type PayOrderRequestPayInput = ({
    /**
     * Accept the exact gift_card_estimate returned on the current order, including all selected
     * cards and both totals. Requires an Idempotency-Key. Gift card payments collect the full
     * amount due and may use one processor payment intent for the processor_money remainder. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     */
    "accepted_gift_card_allocation"?: OrderGiftCardAllocationAcceptanceInput;
    /** Value enum: "pay". */
    "action": "pay";
    /**
     * Buyer email and phone recorded on the order. A checkout session payment uses the session's
     * saved contact for omitted fields. Email and phone cannot be null. Buyer contact to supply
     * with payment or save during checkout. Send at least one field. Values are stored exactly as
     * sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted
     * fields and accept null to clear a field. Payment requests do not accept null. minProperties:
     * 1. email (Optional): (string or null) and string. Email for the buyer, such as
     * buyer@example.com. On checkout session updates, null clears the saved email. Format: email.
     * minLength: 1. maxLength: 255. Example: "buyer@example.com". minLength: 1. phone (Optional):
     * (string or null) and string. Phone for the buyer, in E.164 format, such as +14155551234. On
     * checkout session updates, null clears the saved phone. minLength: 1. pattern:
     * ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequestInput & object, readonly unknown[]>)
        & ({
        /** minLength: 1. */
        "email"?: string;
        /** minLength: 1. */
        "phone"?: string;
    });
    /**
     * The buyer's IP address, for risk screening, when your server pays on the buyer's behalf.
     * Write-only. minLength: 1. maxLength: 64.
     */
    "buyer_ip_address"?: string;
    /**
     * How to complete the authentication step. Flint's API returns a Stripe client secret only for
     * client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's
     * authentication page receives what it needs to run the challenge, including the client secret
     * for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint
     * doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with
     * cancellation_reason payment_returned. The Stripe secret can also confirm the payment with
     * another card, so use it only with handleNextAction. Reader credentials do not support url;
     * omit client_action_type or send stripe for reader payments. Defaults to stripe for a new
     * confirmation; omission on a continuation keeps the existing type. Default: "stripe". Value
     * enum: "url", "stripe".
     */
    "client_action_type"?: "url" | "stripe";
    /**
     * The outstanding balance you reviewed. Required with checkout credentials, and with an API
     * key or partner token when the order has an open checkout session. Optional otherwise. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "expected_outstanding_money"?: MoneyValueInput;
    /**
     * Optional version from the order you reviewed. A mismatch returns VERSION_CONFLICT, even when
     * the outstanding amount is unchanged. Starting a payment advances the order's version. After
     * a declined or failed attempt, use the order returned in the pay response or read the order
     * again before retrying. When accepted_gift_card_allocation is sent, its order_version must
     * match this value. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Where Flint sends the buyer after a redirect or authentication step, adding only
     * payment_intent_id for a payment, or payment_method_id for a setup. The completion message
     * uses type flint.payment_action.completed and exactly that one subject key. Without it, the
     * step ends on a Flint page that tells the parent or opener the step completed. Accepts an
     * absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript,
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode
     * also accepts HTTP loopback URLs. With a checkout credential on order pay, omit
     * payment_return_url; checkout sessions use their own configured return URL. minLength: 1.
     * maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * A saved card on a checkout whose customer came from a code requires a code confirmed with
     * this credential in the last 15 minutes when the order ships to a new address. Otherwise pay
     * returns 409 ACTION_NOT_ALLOWED with reason verification_required and a next action to
     * request purpose pay_to_new_address. Known addresses are saved addresses or destinations of
     * earlier paid orders for this customer at this business; for a Flint wallet card, wallet
     * addresses count too. Pickup and orders that ship nothing never require it. A merchant-named
     * customer, typed card, Apple Pay, and Google Pay are unaffected. The credential you provide
     * to pay an order: a payment source token, a saved payment method ID, or a Stripe confirmation
     * token.
     */
    "payment_source"?: PaymentSourceCredentialInput;
    /**
     * A platform fee your partner app charges on the processor payment pay creates, checked
     * against what that payment collects after gift cards. A pay that gift cards or a zero balance
     * settle creates no processor payment and charges no fee. Only a partner app install token can
     * send it; from any other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. A
     * subscription_plan checkout session, or an order whose payment starts or renews a
     * subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on platform_fee, because
     * Flint's billing creates the renewals. amount_money must be above zero, in the payment's
     * currency, at most the platform fee cap the merchant approved for this amount, and below the
     * amount; otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money, with
     * maximum_money when the cap or the amount bounds it. Without an approved cap in this currency
     * it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required. In live mode the partner
     * app's platform_fees capability must be active; otherwise ACTION_NOT_ALLOWED with capability
     * platform_fees and the reason the app's platform status gives. Test mode never checks the
     * capability. Flint lowers the fee, or cancels it, when the cap or Flint's own fees leave less
     * at confirm or capture, so the payment never fails because of it. Part of the request
     * fingerprint. See [Platform fees](/docs/guides/platform-fees). A platform fee the partner app
     * charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes
     * no share of it.
     */
    "platform_fee"?: PlatformFeeRequestInput;
    /**
     * The buyer's choice to save the card they typed for faster checkout at this merchant. Send
     * true only from the checkout session's own credential, when the session's
     * can_save_payment_method is true, for one newly collected card sent as
     * stripe.confirmation_token created with setup_future_usage on_session. The card is saved with
     * usage on_session once the payment succeeds, for the customer the checkout acts for: the
     * customer the merchant created the session for, or the customer whose email the buyer
     * confirmed in it. When save_payment_method_requires_verification is true, buyer_contact.email
     * is required. The card is kept pending for the customer with that email, creating one if
     * needed, and opens nothing until confirmed on the receipt within 24 hours. Without
     * save_payment_method_phone, payment_method_save.email_confirmation_required is true and an
     * emailed code confirms the save with purpose confirm_saved_payment_method and channel email.
     * The code goes only to the email given with the payment. Subscription signup and setup still
     * require email verification before collection when the email belongs to an existing customer.
     * A checkout the buyer bound by a texted code saves the card with that number. A checkout
     * whose buyer confirmed the customer's email can also send save_payment_method_phone, to save
     * the card with a number the buyer confirms by text after paying. A checkout can send the
     * buyer's choice with every payment button: Apple Pay, Google Pay, a bank account, or Affirm,
     * in stripe.confirmation_token created with no setup_future_usage, pays without the save, and
     * the payment attempt's payment_method_save reports not_saved with reason
     * payment_method_not_saveable. The session's save_payment_method_types lists what is saved.
     * Send false or omit it when the buyer does not choose to save; stripe.confirmation_token must
     * then have no setup_future_usage. Default: false.
     */
    "save_payment_method"?: boolean;
    /**
     * A US or Canadian mobile phone number in E.164 format, such as +14155552671, that confirms a
     * card saved while the checkout acts for no customer, or for the customer whose email the
     * buyer confirmed in it. Send it with save_payment_method: true only from the checkout
     * session's own credential, when the session's can_save_payment_method_with_phone is true. The
     * card is kept for the customer the checkout acts for, or else the merchant's customer with
     * the buyer's email, once the payment succeeds, or once it is approved when the merchant
     * captures later, but works for nothing until the buyer confirms it within 24 hours, with a
     * code texted to this number or, when the customer's email is the email of the payment,
     * emailed there instead: request the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method, and read payment_method_save on the checkout session. A card
     * saved with the number makes it the customer's saved number, and the cards saved with the
     * number it replaces are removed. A card not confirmed in time is not saved. minLength: 1.
     * maxLength: 16. pattern: ^\+1[2-9][0-9]{2}[2-9][0-9]{6}$.
     */
    "save_payment_method_phone"?: string;
    /**
     * Divide this payment's funds between the collecting merchant and sellers; this is separate
     * from split tender, where a buyer uses several payment methods. Only the collecting
     * merchant's own credentials can send splits. Each install must belong to the same app owned
     * by the collecting merchant, with the seller's approval in this mode and readiness to receive
     * payouts. Test mode needs no platform review; live mode requires the app's active
     * payment_splits capability and Flint support for the collecting account. Can't be combined
     * with platform_fee or saved payment credentials. The total must fit after the largest Flint
     * fee for the offered payment options, leaving one minor unit for the collecting merchant;
     * otherwise INVALID_REQUEST with INVALID_VALUE on splits and maximum_money. Fixed after
     * create, except capture's final amounts. Part of the idempotency fingerprint. On pay, the
     * total must fit the processor payment after gift cards. A payment funded entirely by gift
     * cards can't have splits. minItems: 1. maxItems: 25. [] (Value): {@link
     * PaymentSplitRequestInput}. A seller's fixed share of one payment, created with that payment.
     * This divides the payment's funds; split tender divides how the buyer pays.
     */
    "splits"?: Array<PaymentSplitRequestInput>;
})
    & (({
    "splits"?: never;
} | {
    "platform_fee"?: never;
}));
/** The `resume` variant of `PayOrderRequest`. */
export type PayOrderRequestResume = {
    /** Value enum: "resume". */
    "action": "resume" | (string & {});
    /**
     * Buyer email and phone recorded on the order. A checkout session payment uses the session's
     * saved contact for omitted fields. Email and phone cannot be null. Buyer contact to supply
     * with payment or save during checkout. Send at least one field. Values are stored exactly as
     * sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted
     * fields and accept null to clear a field. Payment requests do not accept null. minProperties:
     * 1. email (Optional): (string or null) and string. Email for the buyer, such as
     * buyer@example.com. On checkout session updates, null clears the saved email. Format: email.
     * minLength: 1. maxLength: 255. Example: "buyer@example.com". minLength: 1. phone (Optional):
     * (string or null) and string. Phone for the buyer, in E.164 format, such as +14155551234. On
     * checkout session updates, null clears the saved phone. minLength: 1. pattern:
     * ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequest & object, readonly unknown[]>)
        & ({
        /** minLength: 1. */
        "email"?: string;
        /** minLength: 1. */
        "phone"?: string;
    });
    /**
     * How to complete the authentication step. Flint's API returns a Stripe client secret only for
     * client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's
     * authentication page receives what it needs to run the challenge, including the client secret
     * for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint
     * doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with
     * cancellation_reason payment_returned. The Stripe secret can also confirm the payment with
     * another card, so use it only with handleNextAction. Reader credentials do not support url;
     * omit client_action_type or send stripe for reader payments. Defaults to stripe for a new
     * confirmation; omission on a continuation keeps the existing type. Default: "stripe". Value
     * enum: "url", "stripe".
     */
    "client_action_type"?: "url" | "stripe" | (string & {});
    /**
     * Optional. When sent, Flint compares it with the amount fixed on the attempt, not the order's
     * current balance. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "expected_outstanding_money"?: MoneyValue;
    /** minLength: 1. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D". */
    "order_payment_attempt_id": string;
    /**
     * Where Flint sends the buyer after a redirect or authentication step, adding only
     * payment_intent_id for a payment, or payment_method_id for a setup. The completion message
     * uses type flint.payment_action.completed and exactly that one subject key. Without it, the
     * step ends on a Flint page that tells the parent or opener the step completed. Accepts an
     * absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript,
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode
     * also accepts HTTP loopback URLs. With a checkout credential on order pay, omit
     * payment_return_url; checkout sessions use their own configured return URL. minLength: 1.
     * maxLength: 2048.
     */
    "payment_return_url"?: string;
};
/** The `resume` variant of `PayOrderRequest`. */
export type PayOrderRequestResumeInput = {
    /** Value enum: "resume". */
    "action": "resume";
    /**
     * Buyer email and phone recorded on the order. A checkout session payment uses the session's
     * saved contact for omitted fields. Email and phone cannot be null. Buyer contact to supply
     * with payment or save during checkout. Send at least one field. Values are stored exactly as
     * sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted
     * fields and accept null to clear a field. Payment requests do not accept null. minProperties:
     * 1. email (Optional): (string or null) and string. Email for the buyer, such as
     * buyer@example.com. On checkout session updates, null clears the saved email. Format: email.
     * minLength: 1. maxLength: 255. Example: "buyer@example.com". minLength: 1. phone (Optional):
     * (string or null) and string. Phone for the buyer, in E.164 format, such as +14155551234. On
     * checkout session updates, null clears the saved phone. minLength: 1. pattern:
     * ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequestInput & object, readonly unknown[]>)
        & ({
        /** minLength: 1. */
        "email"?: string;
        /** minLength: 1. */
        "phone"?: string;
    });
    /**
     * How to complete the authentication step. Flint's API returns a Stripe client secret only for
     * client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's
     * authentication page receives what it needs to run the challenge, including the client secret
     * for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint
     * doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with
     * cancellation_reason payment_returned. The Stripe secret can also confirm the payment with
     * another card, so use it only with handleNextAction. Reader credentials do not support url;
     * omit client_action_type or send stripe for reader payments. Defaults to stripe for a new
     * confirmation; omission on a continuation keeps the existing type. Default: "stripe". Value
     * enum: "url", "stripe".
     */
    "client_action_type"?: "url" | "stripe";
    /**
     * Optional. When sent, Flint compares it with the amount fixed on the attempt, not the order's
     * current balance. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "expected_outstanding_money"?: MoneyValueInput;
    /** minLength: 1. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D". */
    "order_payment_attempt_id": string;
    /**
     * Where Flint sends the buyer after a redirect or authentication step, adding only
     * payment_intent_id for a payment, or payment_method_id for a setup. The completion message
     * uses type flint.payment_action.completed and exactly that one subject key. Without it, the
     * step ends on a Flint page that tells the parent or opener the step completed. Accepts an
     * absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript,
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode
     * also accepts HTTP loopback URLs. With a checkout credential on order pay, omit
     * payment_return_url; checkout sessions use their own configured return URL. minLength: 1.
     * maxLength: 2048.
     */
    "payment_return_url"?: string;
};
/** The `setup` variant of `PayOrderRequest`. */
export type PayOrderRequestSetup = ({
    /** Value enum: "setup". */
    "action": "setup" | (string & {});
    /**
     * Buyer email and phone recorded on the order. A checkout session payment uses the session's
     * saved contact for omitted fields. Email and phone cannot be null. Buyer contact to supply
     * with payment or save during checkout. Send at least one field. Values are stored exactly as
     * sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted
     * fields and accept null to clear a field. Payment requests do not accept null. minProperties:
     * 1. email (Optional): (string or null) and string. Email for the buyer, such as
     * buyer@example.com. On checkout session updates, null clears the saved email. Format: email.
     * minLength: 1. maxLength: 255. Example: "buyer@example.com". minLength: 1. phone (Optional):
     * (string or null) and string. Phone for the buyer, in E.164 format, such as +14155551234. On
     * checkout session updates, null clears the saved phone. minLength: 1. pattern:
     * ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequest & object, readonly unknown[]>)
        & ({
        /** minLength: 1. */
        "email"?: string;
        /** minLength: 1. */
        "phone"?: string;
    });
    /**
     * How to complete the authentication step. Flint's API returns a Stripe client secret only for
     * client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's
     * authentication page receives what it needs to run the challenge, including the client secret
     * for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint
     * doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with
     * cancellation_reason payment_returned. The Stripe secret can also confirm the payment with
     * another card, so use it only with handleNextAction. Reader credentials do not support url;
     * omit client_action_type or send stripe for reader payments. Defaults to stripe for a new
     * confirmation; omission on a continuation keeps the existing type. Default: "stripe". Value
     * enum: "url", "stripe".
     */
    "client_action_type"?: "url" | "stripe" | (string & {});
    /**
     * The outstanding balance you reviewed. Required with checkout credentials, and with an API
     * key or partner token when the order has an open checkout session. Optional otherwise. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "expected_outstanding_money"?: MoneyValue;
    /**
     * Optional version from the order you reviewed. A mismatch returns VERSION_CONFLICT, even when
     * the outstanding amount is unchanged. Starting a payment advances the order's version. After
     * a declined or failed attempt, use the order returned in the pay response or read the order
     * again before retrying. When accepted_gift_card_allocation is sent, its order_version must
     * match this value. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Where Flint sends the buyer after a redirect or authentication step, adding only
     * payment_intent_id for a payment, or payment_method_id for a setup. The completion message
     * uses type flint.payment_action.completed and exactly that one subject key. Without it, the
     * step ends on a Flint page that tells the parent or opener the step completed. Accepts an
     * absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript,
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode
     * also accepts HTTP loopback URLs. With a checkout credential on order pay, omit
     * payment_return_url; checkout sessions use their own configured return URL. minLength: 1.
     * maxLength: 2048.
     */
    "payment_return_url"?: string;
    /** The `token` variant of `PaymentSourceCredential`. */
    "setup_payment_source": PaymentSourceCredentialToken;
});
/** The `setup` variant of `PayOrderRequest`. */
export type PayOrderRequestSetupInput = ({
    /** Value enum: "setup". */
    "action": "setup";
    /**
     * Buyer email and phone recorded on the order. A checkout session payment uses the session's
     * saved contact for omitted fields. Email and phone cannot be null. Buyer contact to supply
     * with payment or save during checkout. Send at least one field. Values are stored exactly as
     * sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted
     * fields and accept null to clear a field. Payment requests do not accept null. minProperties:
     * 1. email (Optional): (string or null) and string. Email for the buyer, such as
     * buyer@example.com. On checkout session updates, null clears the saved email. Format: email.
     * minLength: 1. maxLength: 255. Example: "buyer@example.com". minLength: 1. phone (Optional):
     * (string or null) and string. Phone for the buyer, in E.164 format, such as +14155551234. On
     * checkout session updates, null clears the saved phone. minLength: 1. pattern:
     * ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequestInput & object, readonly unknown[]>)
        & ({
        /** minLength: 1. */
        "email"?: string;
        /** minLength: 1. */
        "phone"?: string;
    });
    /**
     * How to complete the authentication step. Flint's API returns a Stripe client secret only for
     * client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's
     * authentication page receives what it needs to run the challenge, including the client secret
     * for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint
     * doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with
     * cancellation_reason payment_returned. The Stripe secret can also confirm the payment with
     * another card, so use it only with handleNextAction. Reader credentials do not support url;
     * omit client_action_type or send stripe for reader payments. Defaults to stripe for a new
     * confirmation; omission on a continuation keeps the existing type. Default: "stripe". Value
     * enum: "url", "stripe".
     */
    "client_action_type"?: "url" | "stripe";
    /**
     * The outstanding balance you reviewed. Required with checkout credentials, and with an API
     * key or partner token when the order has an open checkout session. Optional otherwise. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "expected_outstanding_money"?: MoneyValueInput;
    /**
     * Optional version from the order you reviewed. A mismatch returns VERSION_CONFLICT, even when
     * the outstanding amount is unchanged. Starting a payment advances the order's version. After
     * a declined or failed attempt, use the order returned in the pay response or read the order
     * again before retrying. When accepted_gift_card_allocation is sent, its order_version must
     * match this value. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Where Flint sends the buyer after a redirect or authentication step, adding only
     * payment_intent_id for a payment, or payment_method_id for a setup. The completion message
     * uses type flint.payment_action.completed and exactly that one subject key. Without it, the
     * step ends on a Flint page that tells the parent or opener the step completed. Accepts an
     * absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript,
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode
     * also accepts HTTP loopback URLs. With a checkout credential on order pay, omit
     * payment_return_url; checkout sessions use their own configured return URL. minLength: 1.
     * maxLength: 2048.
     */
    "payment_return_url"?: string;
    /** The `token` variant of `PaymentSourceCredential`. */
    "setup_payment_source": PaymentSourceCredentialTokenInput;
});
/** A response containing `PayOrderResult` data. */
export type PayOrderResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The order is the primary
     * resource and expected_version target; order_payment_attempt records the payment outcome.
     */
    "data": PayOrderResult;
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
 * The order is the primary resource and expected_version target; order_payment_attempt records the
 * payment outcome.
 */
export type PayOrderResult = {
    /** A customer's purchase and its payment and fulfillment progress. */
    "order": Order;
    /** An attempt to pay an order. */
    "order_payment_attempt"?: OrderPaymentAttempt;
};
/** A Flint fee added to a payment intent, with the fee type and amount. */
export type PaymentAddOnFee = {
    /**
     * Amount of this fee. Added to the payment's `fee_money` on its balance transaction. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * The Flint feature this fee pays for. A payment carries at most one of invoice_collection and
     * subscription_collection. Can gain values: sum every entry rather than matching only the
     * types you know. Value enum: "invoice_collection", "subscription_collection",
     * "automatic_tax".
     */
    "fee_type": "invoice_collection" | "subscription_collection" | "automatic_tax" | (string & {});
};
/**
 * A gift card redemption made as part of an order payment attempt, with the amount, tip, and gift
 * card.
 */
export type PaymentAttemptGiftCardRedemption = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /** Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". */
    "gift_card_id": string;
    /** Example: "gcr_01KEZF7C002YD2G2J734RRZTWT". */
    "gift_card_redemption_id": string;
    /** Last four characters of the card's current code. */
    "last4": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "tip_money": MoneyValue;
};
/**
 * A payment intent used as one leg of an order payment attempt, with its amount, status, tip, and
 * latest error.
 */
export type PaymentAttemptPaymentIntent = {
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
     * Effective Flint capture deadline, equal to the earlier of the provider capture deadline and
     * this attempt's sealed resource guarantee. Capture is refused at or after this time, even
     * while status is requires_capture. Omitted until a hold is placed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "authorization_expires_at"?: string;
    /**
     * Payment intent's stored capturable amount. A positive amount does not override
     * authorization_expires_at or the payment status. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "capturable_money"?: MoneyValue;
    /**
     * Money collected through this payment, once nothing more can be collected. Positive when
     * money was collected, including a payment Flint couldn't accept and is refunding (the payment
     * intent's cancellation_reason is payment_returned). Zero when nothing was collected, for
     * example after a decline or a released authorization. Absent while the outcome can still
     * change, such as an ACH debit that hasn't settled or an open hold. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "captured_money"?: MoneyValue;
    /**
     * A summary of why a payment attempt failed, with a normalized error code, a message, the
     * failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /** Flint payment intent ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id": string;
    /**
     * The reader the payment is or was last presented on. Set when Flint presents it and kept
     * afterward. While processing or requires_action with a reader_id, the payment is on that
     * reader now. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C".
     */
    "reader_id"?: string;
    /**
     * Payment option used by this leg, using the same values as
     * PaymentIntent.selected_payment_option. Fixed when the attempt becomes terminal. Omitted when
     * no payment option has been selected. Value enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit", "card_present".
     */
    "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {});
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
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "tip_money": MoneyValue;
};
/**
 * How to finish a payment step. Flint's API returns a Stripe client secret only for
 * client_action_type stripe. With url, Stripe's authentication page receives what it needs to run
 * the challenge, including the client secret for hosted 3DS2. If a payment is confirmed with a
 * payment method Flint didn't approve, Flint doesn't count the charge, returns it to the buyer,
 * and the payment intent ends canceled with cancellation_reason payment_returned.
 */
export type PaymentClientAction = ((PaymentClientActionURL) | (PaymentClientActionStripe) | (Record<string, unknown>));
/** The `stripe` variant of `PaymentClientAction`. */
export type PaymentClientActionStripe = {
    /**
     * Stripe.js initialization and a Stripe client secret returned by Flint's API for
     * client_action_type stripe. Use the client secret only with handleNextAction; it can also
     * confirm the underlying payment with another card. Stripe initialization context plus one
     * flow-specific authority object. Exactly one of payment_intent, setup_intent, or
     * terminal_payment_intent is present.
     */
    "stripe": StripePaymentClientAction;
    /**
     * Selects how to complete the step. The url type opens the authentication page; the stripe
     * type returns a Stripe client secret for Stripe.js handleNextAction. Value enum: "stripe".
     */
    "type": "stripe" | (string & {});
};
/** The `url` variant of `PaymentClientAction`. */
export type PaymentClientActionURL = {
    /**
     * Selects how to complete the step. The url type opens the authentication page; the stripe
     * type returns a Stripe client secret for Stripe.js handleNextAction. Value enum: "url".
     */
    "type": "url" | (string & {});
    /**
     * Bearer URL on Flint's payment-return host. Open it as a redirect, popup, or iframe before
     * expires_at. The Flint API response contains no Stripe client secret; Stripe's authentication
     * page receives what it needs to run the challenge, including the client secret for hosted
     * 3DS2. minLength: 1.
     */
    "url": string;
};
/**
 * Client-side details for collecting payment from the buyer, such as the Stripe settings to
 * initialize Stripe.js.
 */
export type PaymentCollection = {
    /**
     * Client configuration for collecting the payment through Stripe. Stripe details for
     * collecting payment in the browser: account ID, publishable key, return URL, and Elements
     * options.
     */
    "stripe"?: PaymentCollectionStripe;
};
/**
 * Stripe details for collecting payment in the browser: account ID, publishable key, return URL,
 * and Elements options.
 */
export type PaymentCollectionStripe = {
    /**
     * Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when
     * the payment has splits: initialize Stripe.js with publishable_key alone and omit
     * stripeAccount. Example: "acct_1234567890".
     */
    "account_id": string | null;
    /**
     * Stripe Elements configuration for the available payment methods and amounts. Stripe Elements
     * collection guidance. Follow next_step in the browser, then submit the result to submit_to
     * through Flint.
     */
    "elements"?: PaymentCollectionStripeElements;
    /** Publishable Stripe key for initializing the payment client. */
    "publishable_key"?: string;
    /** URL the buyer returns to after a redirect payment step. */
    "return_url"?: string;
};
/**
 * Stripe Elements collection guidance. Follow next_step in the browser, then submit the result to
 * submit_to through Flint.
 */
export type PaymentCollectionStripeElements = {
    /**
     * Amount and currency used to initialize the payment form. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Deprecated: use payment_options. Digital wallets that the payment form can offer. Removed in
     * a later release. [] (Value): string.
     */
    "digital_wallets"?: Array<string>;
    /**
     * Whether Elements is collecting a payment source for an immediate payment or a setup source
     * for future use. Value enum: "payment", "setup".
     */
    "mode": "payment" | "setup" | (string & {});
    /**
     * Browser collection operation to perform before calling submit_to. Value enum:
     * "collect_setup_payment_source", "create_confirmation_token".
     */
    "next_step": "collect_setup_payment_source" | "create_confirmation_token" | (string & {});
    /**
     * Stripe Elements payment method creation mode. Follow next_step: payment collection creates a
     * ConfirmationToken, and setup collection creates a PaymentMethod. Value enum: "manual".
     */
    "payment_method_creation": "manual" | (string & {});
    /** Payment method settings passed to the payment form. */
    "payment_method_options"?: {
        [key: string]: unknown;
    };
    /**
     * Deprecated: use payment_options. Processor payment method types that the payment form can
     * offer. Removed in a later release. [] (Value): string.
     */
    "payment_method_types": Array<string>;
    /**
     * Payment options the payment form can offer, in display order. Skip values you don't
     * recognize. Stripe Elements takes processor payment method types: pass card for card,
     * apple_pay, and google_pay; us_bank_account for ach_debit; and affirm for affirm. Set the
     * Payment Element's wallets option so it shows only the wallets listed. [] enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit". [] (Value): string. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /**
     * Order payment intents that the buyer can select for collection. [] (Value): {@link
     * SelectableOrderPaymentIntent}. A payment intent on an order the caller can pick, with its
     * amount, status, and last payment error.
     */
    "selectable_payment_intents"?: Array<SelectableOrderPaymentIntent>;
    /**
     * Flint operation that accepts the result of next_step. Value enum: "pay_order",
     * "confirm_payment_intent".
     */
    "submit_to": "pay_order" | "confirm_payment_intent" | (string & {});
};
