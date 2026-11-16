import type { PartnerEnvironmentGrantPreviousAttributes, PartnerWebhookEnvelope } from './types-49.js';
import type { PartnerAppInstall, PartnerApp } from './types-47.js';
import type { ResponseMeta, ResourceReference, ResourceReferencePreviousAttributes } from './types-60.js';
import type { InputValue } from '../runtime.js';
import type { MerchantWebhookEnvelope } from './types-41.js';
import type { PlatformFeeCap, PlatformFeeCapPreviousAttributes } from './types-54.js';
import type { MoneyValue, MoneyValuePreviousAttributes, MoneyValueInput } from './types-42.js';
import type { AcceptPartnerAppPlatformTermsRequestInput } from './types-0.js';
import type { CreatePartnerAppCredentialRequestInput, CreatePartnerAppRequestInput } from './types-12.js';
import type { CheckoutSessionsListCustomerVerificationsParams } from './types-7.js';
import type { RotatePartnerAppSecretRequestInput } from './types-65.js';
import type { UpdatePartnerAppRequestInput } from './types-74.js';
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
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "created_at"?: ((string) | (null));
            "environment_grants"?: ((Array<PartnerEnvironmentGrantPreviousAttributes>) | (null));
            "installed_by_user_id"?: ((string) | (null));
            "merchant_id"?: ((string) | (null));
            "merchant_signup_id"?: ((string) | (null));
            "partner_app_id"?: ((string) | (null));
            "partner_app_install_id"?: ((string) | (null));
            "partner_app_name"?: ((string) | (null));
            "revoked_at"?: ((string) | (null));
            "revoked_by"?: (("merchant" | "partner_app" | (string & {})) | (null));
            "revoked_by_user_id"?: ((string) | (null));
            "status"?: (("pending_exchange" | "active" | "revoked" | (string & {})) | (null));
            "supported_actions"?: ((Array<"revoke" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
        });
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
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "created_at"?: ((string) | (null));
            "environment_grants"?: ((Array<PartnerEnvironmentGrantPreviousAttributes>) | (null));
            "installed_by_user_id"?: ((string) | (null));
            "merchant_id"?: ((string) | (null));
            "merchant_signup_id"?: ((string) | (null));
            "partner_app_id"?: ((string) | (null));
            "partner_app_install_id"?: ((string) | (null));
            "partner_app_name"?: ((string) | (null));
            "revoked_at"?: ((string) | (null));
            "revoked_by"?: (("merchant" | "partner_app" | (string & {})) | (null));
            "revoked_by_user_id"?: ((string) | (null));
            "status"?: (("pending_exchange" | "active" | "revoked" | (string & {})) | (null));
            "supported_actions"?: ((Array<"revoke" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
        });
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
export type PartnerAppMerchantActionRoutingPreviousAttributes = {
    /**
     * When routing switches to the current merchant_action_url. anyOf[1] (Value): string. When
     * routing switches to the current merchant_action_url. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "expires_at"?: ((string) | (null));
    /**
     * The previous merchant action URL that Flint's merchant emails still use, and whose host code
     * emails still show. While the app had no merchant action URL before the change, this is
     * Flint's own page. anyOf[1] (Value): string. The previous merchant action URL that Flint's
     * merchant emails still use, and whose host code emails still show. While the app had no
     * merchant action URL before the change, this is Flint's own page. anyOf[2] (Value): null.
     */
    "url"?: ((string) | (null));
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
export type PartnerAppMerchantReadinessAxisPreviousAttributes = {
    /**
     * Whether this area works now, with the same value as on the merchant's `readiness`. Value
     * enum: "ready", "pending", "blocked", "not_requested", "not_available". anyOf[1] (Value):
     * string. Whether this area works now, with the same value as on the merchant's `readiness`.
     * Value enum: "ready", "pending", "blocked", "not_requested", "not_available". anyOf[2]
     * (Value): null.
     */
    "status"?: (("ready" | "pending" | "blocked" | "not_requested" | "not_available" | (string & {})) | (null));
    /**
     * Why the status isn't `ready`. Absent when the status is `ready` or `not_requested`. Value
     * enum: "provisioning", "onboarding_not_started", "requirements_due", "requirements_past_due",
     * "pending_verification", "account_rejected", "disabled_by_platform_policy",
     * "billing_suspended", "platform_review", "processing_not_enabled",
     * "platform_funding_unavailable", "tax_category_required", "service_unavailable",
     * "payment_option_access_not_provisioned", "payment_option_activation_pending",
     * "payment_option_not_in_plan", "payment_option_not_available", "capability_not_active",
     * "other". anyOf[1] (Value): string. Why the status isn't `ready`. Absent when the status is
     * `ready` or `not_requested`. Value enum: "provisioning", "onboarding_not_started",
     * "requirements_due", "requirements_past_due", "pending_verification", "account_rejected",
     * "disabled_by_platform_policy", "billing_suspended", "platform_review",
     * "processing_not_enabled", "platform_funding_unavailable", "tax_category_required",
     * "service_unavailable", "payment_option_access_not_provisioned",
     * "payment_option_activation_pending", "payment_option_not_in_plan",
     * "payment_option_not_available", "capability_not_active", "other". anyOf[2] (Value): null.
     */
    "status_reason"?: (("provisioning"
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
        | (string & {}))
        | (null));
};
export type PartnerAppMerchantReadinessPreviousAttributes = {
    /**
     * How many distinct requirements in the merchant's `readiness.requirements.currently_due` and
     * `past_due` are open. 0 when nothing is due now. Read the merchant with a partner app token
     * in this grant's mode for the requirement names. anyOf[1] (Value): integer. How many distinct
     * requirements in the merchant's `readiness.requirements.currently_due` and `past_due` are
     * open. 0 when nothing is due now. Read the merchant with a partner app token in this grant's
     * mode for the requirement names. Format: int64. minimum: 0. anyOf[2] (Value): null.
     */
    "blocking_requirement_count"?: ((number) | (null));
    /**
     * When Flint last observed the merchant's account, which the statuses come from. The
     * merchant's own `readiness.observed_at` can be later, because it also covers capability
     * observations. anyOf[1] (Value): string. When Flint last observed the merchant's account,
     * which the statuses come from. The merchant's own `readiness.observed_at` can be later,
     * because it also covers capability observations. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "observed_at"?: ((string) | (null));
    /**
     * Whether the merchant can take payments in this environment, with the `status` and
     * `status_reason` of `readiness.payments` on the merchant. anyOf[1] (Value): {@link
     * PartnerAppMerchantReadinessAxisPreviousAttributes}. anyOf[2] (Value): null.
     */
    "payments"?: ((PartnerAppMerchantReadinessAxisPreviousAttributes) | (null));
    /**
     * Whether the merchant can receive payouts in this environment, with the `status` and
     * `status_reason` of `readiness.payouts` on the merchant. anyOf[1] (Value): {@link
     * PartnerAppMerchantReadinessAxisPreviousAttributes}. anyOf[2] (Value): null.
     */
    "payouts"?: ((PartnerAppMerchantReadinessAxisPreviousAttributes) | (null));
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
export type PartnerAppPaymentSplitsPreviousAttributes = {
    /**
     * The marketplace's terms for its sellers, as an HTTPS URL of at most 2,048 characters. The
     * consent screen links it. anyOf[1] (Value): string. The marketplace's terms for its sellers,
     * as an HTTPS URL of at most 2,048 characters. The consent screen links it. Format: uri.
     * maxLength: 2048. pattern: ^https://. Example: "https://example.com/receipt". anyOf[2]
     * (Value): null.
     */
    "seller_terms_url"?: ((string) | (null));
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
    /**
     * What the permission lets the app do, shown to merchants when they approve the install.
     * minLength: 1.
     */
    "description": string;
    /**
     * Whether the merchant can decline this permission when they approve the install. Defaults to
     * false: the permission is required and is always granted.
     */
    "optional"?: boolean;
    /**
     * The permission's ID, which you choose and which must be unique within the manifest.
     * Authorization requests name permissions by this ID in scope, and the code exchange returns
     * the granted IDs as its scope. minLength: 1. Example: "manage_orders".
     */
    "permission_id": string;
    /**
     * The Flint API scopes the permission grants, at least one. Each must be a scope partner
     * installs allow; the scope catalog lists them. Duplicates are dropped. [] (Value): string.
     * minLength: 1.
     */
    "required_scopes": Array<string>;
    /**
     * A short name for the permission, shown to merchants when they approve the install. It can't
     * contain a link or an email address. minLength: 1.
     */
    "title": string;
};
export type PartnerAppPermissionManifestEntryPreviousAttributes = {
    /**
     * What the permission lets the app do, shown to merchants when they approve the install.
     * anyOf[1] (Value): string. What the permission lets the app do, shown to merchants when they
     * approve the install. minLength: 1. anyOf[2] (Value): null.
     */
    "description"?: ((string) | (null));
    /**
     * Whether the merchant can decline this permission when they approve the install. Defaults to
     * false: the permission is required and is always granted. anyOf[1] (Value): boolean. Whether
     * the merchant can decline this permission when they approve the install. Defaults to false:
     * the permission is required and is always granted. anyOf[2] (Value): null.
     */
    "optional"?: ((boolean) | (null));
    /**
     * The permission's ID, which you choose and which must be unique within the manifest.
     * Authorization requests name permissions by this ID in scope, and the code exchange returns
     * the granted IDs as its scope. anyOf[1] (Value): string. The permission's ID, which you
     * choose and which must be unique within the manifest. Authorization requests name permissions
     * by this ID in scope, and the code exchange returns the granted IDs as its scope. minLength:
     * 1. Example: "manage_orders". anyOf[2] (Value): null.
     */
    "permission_id"?: ((string) | (null));
    /**
     * The Flint API scopes the permission grants, at least one. Each must be a scope partner
     * installs allow; the scope catalog lists them. Duplicates are dropped. anyOf[1] (Value):
     * Array of string. The Flint API scopes the permission grants, at least one. Each must be a
     * scope partner installs allow; the scope catalog lists them. Duplicates are dropped.
     * anyOf[1][] (Value): string. minLength: 1. anyOf[2] (Value): null.
     */
    "required_scopes"?: ((Array<string>) | (null));
    /**
     * A short name for the permission, shown to merchants when they approve the install. It can't
     * contain a link or an email address. anyOf[1] (Value): string. A short name for the
     * permission, shown to merchants when they approve the install. It can't contain a link or an
     * email address. minLength: 1. anyOf[2] (Value): null.
     */
    "title"?: ((string) | (null));
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
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "allowed_scopes"?: ((Array<string>) | (null));
            "api_version"?: ((string) | (null));
            "api_version_changed_at"?: ((string) | (null));
            "api_version_previous"?: ((string) | (null));
            "api_version_rollback_expires_at"?: ((string) | (null));
            "client_id"?: ((string) | (null));
            "client_secret_enabled"?: ((boolean) | (null));
            "client_secret_last_used_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "default_requested_permissions"?: ((Array<string>) | (null));
            "merchant_action_routing"?: ((PartnerAppMerchantActionRoutingPreviousAttributes) | (null));
            "merchant_action_url"?: ((string) | (null));
            "name"?: ((string) | (null));
            "partner_app_id"?: ((string) | (null));
            "payment_splits"?: ((PartnerAppPaymentSplitsPreviousAttributes) | (null));
            "permission_manifest"?: ((Array<PartnerAppPermissionManifestEntryPreviousAttributes>) | (null));
            "platform"?: ((PartnerAppPlatformPreviousAttributes) | (null));
            "platform_fee_cap"?: ((PlatformFeeCapPreviousAttributes) | (null));
            "platform_profile"?: ((PartnerAppPlatformProfilePreviousAttributes) | (null));
            "previous_secret_expires_at"?: ((string) | (null));
            "redirect_uris"?: ((Array<string>) | (null));
            "status"?: (("active" | "archived" | (string & {})) | (null));
            "supported_actions"?: ((Array<"accept_platform_terms" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
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
export type PartnerAppPlatformCapabilityPreviousAttributes = {
    /**
     * The platform capability. Value enum: "platform_fees", "merchant_onboarding",
     * "create_merchants", "payment_splits". anyOf[1] (Value): string. The platform capability.
     * Value enum: "platform_fees", "merchant_onboarding", "create_merchants", "payment_splits".
     * anyOf[2] (Value): null.
     */
    "capability"?: (("platform_fees" | "merchant_onboarding" | "create_merchants" | "payment_splits" | (string & {}))
        | (null));
    /**
     * Why the capability is inactive. Present only while status is inactive. Value enum:
     * "requirements_due", "pending_review", "not_approved", "rejected", "paused". anyOf[1]
     * (Value): string. Why the capability is inactive. Present only while status is inactive.
     * Value enum: "requirements_due", "pending_review", "not_approved", "rejected", "paused".
     * anyOf[2] (Value): null.
     */
    "inactive_reason"?: (("requirements_due" | "pending_review" | "not_approved" | "rejected" | "paused" | (string & {}))
        | (null));
    /**
     * Whether the capability works in live mode. Value enum: "active", "inactive". anyOf[1]
     * (Value): string. Whether the capability works in live mode. Value enum: "active",
     * "inactive". anyOf[2] (Value): null.
     */
    "status"?: (("active" | "inactive" | (string & {})) | (null));
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
export type PartnerAppPlatformCurrentTermsPreviousAttributes = {
    /**
     * When accepting this version becomes required. Until then an earlier accepted version keeps
     * the platform_terms requirement met; from then the app needs this one. Absent when this
     * version is already required. anyOf[1] (Value): string. When accepting this version becomes
     * required. Until then an earlier accepted version keeps the platform_terms requirement met;
     * from then the app needs this one. Absent when this version is already required. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "acceptance_due_at"?: ((string) | (null));
    /**
     * The current platform terms version. Send it as platform_terms_version to
     * accept-platform-terms. anyOf[1] (Value): string. The current platform terms version. Send it
     * as platform_terms_version to accept-platform-terms. anyOf[2] (Value): null.
     */
    "platform_terms_version"?: ((string) | (null));
    /**
     * Where Flint publishes this version's text: the Flint Platform Agreement. `null` when the
     * version has no published text. anyOf[1] (Value): string. Where Flint publishes this
     * version's text: the Flint Platform Agreement. `null` when the version has no published text.
     * Format: uri. Example: "https://example.com/receipt". anyOf[2] (Value): null.
     */
    "url"?: ((string) | (null));
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
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "allowed_scopes"?: ((Array<string>) | (null));
            "api_version"?: ((string) | (null));
            "api_version_changed_at"?: ((string) | (null));
            "api_version_previous"?: ((string) | (null));
            "api_version_rollback_expires_at"?: ((string) | (null));
            "client_id"?: ((string) | (null));
            "client_secret_enabled"?: ((boolean) | (null));
            "client_secret_last_used_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "default_requested_permissions"?: ((Array<string>) | (null));
            "merchant_action_routing"?: ((PartnerAppMerchantActionRoutingPreviousAttributes) | (null));
            "merchant_action_url"?: ((string) | (null));
            "name"?: ((string) | (null));
            "partner_app_id"?: ((string) | (null));
            "payment_splits"?: ((PartnerAppPaymentSplitsPreviousAttributes) | (null));
            "permission_manifest"?: ((Array<PartnerAppPermissionManifestEntryPreviousAttributes>) | (null));
            "platform"?: ((PartnerAppPlatformPreviousAttributes) | (null));
            "platform_fee_cap"?: ((PlatformFeeCapPreviousAttributes) | (null));
            "platform_profile"?: ((PartnerAppPlatformProfilePreviousAttributes) | (null));
            "previous_secret_expires_at"?: ((string) | (null));
            "redirect_uris"?: ((Array<string>) | (null));
            "status"?: (("active" | "archived" | (string & {})) | (null));
            "supported_actions"?: ((Array<"accept_platform_terms" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
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
export type PartnerAppPlatformLimitsPreviousAttributes = {
    /**
     * Live merchants the platform is expected to use a platform capability on: a succeeded live
     * platform fee, or live onboarding through an install. anyOf[1] (Value): integer. Live
     * merchants the platform is expected to use a platform capability on: a succeeded live
     * platform fee, or live onboarding through an install. Format: int64. minimum: 1. anyOf[2]
     * (Value): null.
     */
    "live_merchant_limit"?: ((number) | (null));
    /**
     * Monthly fee-bearing live volume, keyed by currency code: captured amounts of live payments
     * whose platform fee succeeded, in each calendar month (UTC). Only USD today. anyOf[1]
     * (Value): Map of {@link MoneyValuePreviousAttributes}. anyOf[1].* (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "monthly_volume_limit_currency_options"?: ((Record<string, MoneyValuePreviousAttributes>) | (null));
    /**
     * The platform's current usage against each limit. Usage is an observation: it changes without
     * a write to the app, doesn't advance the app's version, and sends no event. anyOf[1] (Value):
     * {@link PartnerAppPlatformUsagePreviousAttributes}. anyOf[2] (Value): null.
     */
    "usage"?: ((PartnerAppPlatformUsagePreviousAttributes) | (null));
};
export type PartnerAppPlatformPreviousAttributes = {
    /**
     * One entry per platform capability, in the same order for every app. anyOf[1] (Value): Array
     * of {@link PartnerAppPlatformCapabilityPreviousAttributes}. One entry per platform
     * capability, in the same order for every app. anyOf[1][] (Value): {@link
     * PartnerAppPlatformCapabilityPreviousAttributes}. anyOf[2] (Value): null.
     */
    "capabilities"?: ((Array<PartnerAppPlatformCapabilityPreviousAttributes>) | (null));
    /**
     * The platform terms version Flint accepts now. Send its platform_terms_version to
     * accept-platform-terms. The app has accepted it when terms_acceptance.platform_terms_version
     * is the same. anyOf[1] (Value): {@link PartnerAppPlatformCurrentTermsPreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "current_terms"?: ((PartnerAppPlatformCurrentTermsPreviousAttributes) | (null));
    /**
     * The platform's live merchant and monthly volume limits, present once Flint has approved or
     * limited the app. Limits are soft: crossing one never refuses or interrupts a payment or an
     * onboarding step. Flint staff are alerted and may limit or pause the app. anyOf[1] (Value):
     * {@link PartnerAppPlatformLimitsPreviousAttributes}. anyOf[2] (Value): null.
     */
    "limits"?: ((PartnerAppPlatformLimitsPreviousAttributes) | (null));
    /**
     * What's outstanding before Flint can review the app, `[]` when nothing is. Flint moves the
     * app to pending_review when the last one is met. [] enum: "owner_merchant_onboarding",
     * "platform_profile", "platform_terms". anyOf[1] (Value): Array of string. What's outstanding
     * before Flint can review the app, `[]` when nothing is. Flint moves the app to pending_review
     * when the last one is met. [] enum: "owner_merchant_onboarding", "platform_profile",
     * "platform_terms". anyOf[1][] (Value): string. Value enum: "owner_merchant_onboarding",
     * "platform_profile", "platform_terms". anyOf[2] (Value): null.
     */
    "requirements"?: ((Array<"owner_merchant_onboarding" | "platform_profile" | "platform_terms" | (string & {})>)
        | (null));
    /**
     * The share of each platform fee Flint holds as a reserve and how long it holds it, present
     * once Flint has approved or limited the app. A change applies to fees collected afterwards.
     * anyOf[1] (Value): {@link PartnerAppPlatformReservePreviousAttributes}. anyOf[2] (Value):
     * null.
     */
    "reserve"?: ((PartnerAppPlatformReservePreviousAttributes) | (null));
    /**
     * Where the app is in platform onboarding. No value is final. Value enum: "not_started",
     * "pending_review", "approved", "limited", "rejected". anyOf[1] (Value): string. Where the app
     * is in platform onboarding. No value is final. Value enum: "not_started", "pending_review",
     * "approved", "limited", "rejected". anyOf[2] (Value): null.
     */
    "status"?: (("not_started" | "pending_review" | "approved" | "limited" | "rejected" | (string & {})) | (null));
    /**
     * The latest acceptance of Flint's platform terms. `null` when the app hasn't accepted any
     * version. anyOf[1] (Value): {@link PartnerAppPlatformTermsAcceptancePreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "terms_acceptance"?: ((PartnerAppPlatformTermsAcceptancePreviousAttributes) | (null));
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
export type PartnerAppPlatformProfilePreviousAttributes = {
    /**
     * Merchants the platform expects to serve on Flint in the next 12 months, from 1 to 1,000,000.
     * anyOf[1] (Value): integer. Merchants the platform expects to serve on Flint in the next 12
     * months, from 1 to 1,000,000. Format: int64. minimum: 1. maximum: 1000000. anyOf[2] (Value):
     * null.
     */
    "estimated_merchant_count"?: ((number) | (null));
    /**
     * Monthly payment volume the platform expects across those merchants in 12 months. Above zero,
     * in USD. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "estimated_monthly_volume_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * The kinds of merchants the platform serves, in 1 to 500 characters. anyOf[1] (Value):
     * string. The kinds of merchants the platform serves, in 1 to 500 characters. minLength: 1.
     * maxLength: 500. anyOf[2] (Value): null.
     */
    "merchant_description"?: ((string) | (null));
    /**
     * How the platform onboards and monitors its merchants, in 1 to 2,000 characters. anyOf[1]
     * (Value): string. How the platform onboards and monitors its merchants, in 1 to 2,000
     * characters. minLength: 1. maxLength: 2000. anyOf[2] (Value): null.
     */
    "merchant_onboarding_description"?: ((string) | (null));
    /**
     * What the platform's product does, in 1 to 1,000 characters. anyOf[1] (Value): string. What
     * the platform's product does, in 1 to 1,000 characters. minLength: 1. maxLength: 1000.
     * anyOf[2] (Value): null.
     */
    "product_description"?: ((string) | (null));
    /**
     * Where the platform's merchants get support. anyOf[1] (Value): string. Where the platform's
     * merchants get support. Format: email. maxLength: 320. Example: "buyer@example.com". anyOf[2]
     * (Value): null.
     */
    "support_email"?: ((string) | (null));
    /**
     * Support phone number in E.164 format, such as +14155550123. Optional. anyOf[1] (Value):
     * string. Support phone number in E.164 format, such as +14155550123. Optional. pattern:
     * ^\+[1-9][0-9]{1,14}$. anyOf[2] (Value): null.
     */
    "support_phone"?: ((string) | (null));
    /**
     * The platform's website, as an https URL. anyOf[1] (Value): string. The platform's website,
     * as an https URL. Format: uri. maxLength: 2048. Example: "https://example.com/receipt".
     * anyOf[2] (Value): null.
     */
    "website_url"?: ((string) | (null));
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
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "allowed_scopes"?: ((Array<string>) | (null));
            "api_version"?: ((string) | (null));
            "api_version_changed_at"?: ((string) | (null));
            "api_version_previous"?: ((string) | (null));
            "api_version_rollback_expires_at"?: ((string) | (null));
            "client_id"?: ((string) | (null));
            "client_secret_enabled"?: ((boolean) | (null));
            "client_secret_last_used_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "default_requested_permissions"?: ((Array<string>) | (null));
            "merchant_action_routing"?: ((PartnerAppMerchantActionRoutingPreviousAttributes) | (null));
            "merchant_action_url"?: ((string) | (null));
            "name"?: ((string) | (null));
            "partner_app_id"?: ((string) | (null));
            "payment_splits"?: ((PartnerAppPaymentSplitsPreviousAttributes) | (null));
            "permission_manifest"?: ((Array<PartnerAppPermissionManifestEntryPreviousAttributes>) | (null));
            "platform"?: ((PartnerAppPlatformPreviousAttributes) | (null));
            "platform_fee_cap"?: ((PlatformFeeCapPreviousAttributes) | (null));
            "platform_profile"?: ((PartnerAppPlatformProfilePreviousAttributes) | (null));
            "previous_secret_expires_at"?: ((string) | (null));
            "redirect_uris"?: ((Array<string>) | (null));
            "status"?: (("active" | "archived" | (string & {})) | (null));
            "supported_actions"?: ((Array<"accept_platform_terms" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
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
export type PartnerAppPlatformReservePreviousAttributes = {
    /**
     * Share of each platform fee Flint holds as a reserve, in percent: 20 means 20%. anyOf[1]
     * (Value): number. Share of each platform fee Flint holds as a reserve, in percent: 20 means
     * 20%. minimum: 0. maximum: 100. multipleOf: 0.0001. anyOf[2] (Value): null.
     */
    "percent"?: ((number) | (null));
    /**
     * How long Flint holds each fee's reserve share after the payment, in seconds. 10368000 is 120
     * days. anyOf[1] (Value): integer. How long Flint holds each fee's reserve share after the
     * payment, in seconds. 10368000 is 120 days. Format: int64. minimum: 0. anyOf[2] (Value):
     * null.
     */
    "release_delay_seconds"?: ((number) | (null));
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
export type PartnerAppPlatformTermsAcceptancePreviousAttributes = {
    /**
     * When Flint recorded the acceptance. anyOf[1] (Value): string. When Flint recorded the
     * acceptance. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "accepted_at"?: ((string) | (null));
    /**
     * The credential that accepted: a user for a Dashboard session, or an api_key. anyOf[1]
     * (Value): {@link ResourceReferencePreviousAttributes}. anyOf[2] (Value): null.
     */
    "accepted_by"?: ((ResourceReferencePreviousAttributes) | (null));
    /**
     * The platform terms version accepted. anyOf[1] (Value): string. The platform terms version
     * accepted. anyOf[2] (Value): null.
     */
    "platform_terms_version"?: ((string) | (null));
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
export type PartnerAppPlatformUsagePreviousAttributes = {
    /**
     * Live merchants counted toward live_merchant_limit. A merchant counts from the platform's
     * first counted use on it and stops counting when its live grant is revoked. anyOf[1] (Value):
     * integer. Live merchants counted toward live_merchant_limit. A merchant counts from the
     * platform's first counted use on it and stops counting when its live grant is revoked.
     * Format: int64. anyOf[2] (Value): null.
     */
    "live_merchant_count"?: ((number) | (null));
    /**
     * Fee-bearing live volume this calendar month (UTC), keyed by currency code. anyOf[1] (Value):
     * Map of {@link MoneyValuePreviousAttributes}. anyOf[1].* (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "monthly_volume_currency_options"?: ((Record<string, MoneyValuePreviousAttributes>) | (null));
    /**
     * When Flint last updated these counts. Counting trails the payments and onboarding calls it
     * counts by a short delay. anyOf[1] (Value): string. When Flint last updated these counts.
     * Counting trails the payments and onboarding calls it counts by a short delay. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "observed_at"?: ((string) | (null));
    /**
     * When the monthly volume starts again from zero: the start of the next calendar month, UTC.
     * anyOf[1] (Value): string. When the monthly volume starts again from zero: the start of the
     * next calendar month, UTC. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
     * (Value): null.
     */
    "resets_at"?: ((string) | (null));
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
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "allowed_scopes"?: ((Array<string>) | (null));
            "api_version"?: ((string) | (null));
            "api_version_changed_at"?: ((string) | (null));
            "api_version_previous"?: ((string) | (null));
            "api_version_rollback_expires_at"?: ((string) | (null));
            "client_id"?: ((string) | (null));
            "client_secret_enabled"?: ((boolean) | (null));
            "client_secret_last_used_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "default_requested_permissions"?: ((Array<string>) | (null));
            "merchant_action_routing"?: ((PartnerAppMerchantActionRoutingPreviousAttributes) | (null));
            "merchant_action_url"?: ((string) | (null));
            "name"?: ((string) | (null));
            "partner_app_id"?: ((string) | (null));
            "payment_splits"?: ((PartnerAppPaymentSplitsPreviousAttributes) | (null));
            "permission_manifest"?: ((Array<PartnerAppPermissionManifestEntryPreviousAttributes>) | (null));
            "platform"?: ((PartnerAppPlatformPreviousAttributes) | (null));
            "platform_fee_cap"?: ((PlatformFeeCapPreviousAttributes) | (null));
            "platform_profile"?: ((PartnerAppPlatformProfilePreviousAttributes) | (null));
            "previous_secret_expires_at"?: ((string) | (null));
            "redirect_uris"?: ((Array<string>) | (null));
            "status"?: (("active" | "archived" | (string & {})) | (null));
            "supported_actions"?: ((Array<"accept_platform_terms" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
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
    /**
     * Newly issued client secret, returned only once after rotation. Returned only to the
     * credential that created it, and omitted when another credential replays the request.
     */
    "client_secret"?: string;
});
/**
 * A partner app returned with a one-time client secret when create or PATCH issues one. An
 * application that merchants can authorize to access their accounts.
 */
export type PartnerAppWithSecret = (Exclude<PartnerApp & object, readonly unknown[]>)
    & ({
    /**
     * One-time client secret returned when issued by create or PATCH. Null when this response did
     * not issue a secret, including when secret authentication was already enabled. Returned only
     * to the credential that created it, and omitted when another credential replays the request.
     */
    "client_secret"?: string | null;
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
    /**
     * Unique identifier for this environment grant, prefixed `egrt_`. Example:
     * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
     */
    "environment_grant_id": string;
    /**
     * The app’s permissions this grant holds, from the app’s current manifest. Their permission
     * IDs are the code exchange's scope. [] (Value): {@link PartnerAppPermissionManifestEntry}.
     * One permission a partner app can request, with a title, a description, and the Flint scopes
     * it grants.
     */
    "granted_permissions": Array<PartnerAppPermissionManifestEntry>;
    /**
     * The Flint API scopes the grant allows: the union of the required scopes of its granted
     * permissions. Narrowed at once when the app removes scopes from a permission. [] (Value):
     * string.
     */
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
    /**
     * ID of the user who revoked the grant, or the install it belongs to. Omitted when the grant
     * isn't revoked or no user performed the revoke. Example: "usr_01KEZF7C00YC8757ZYP9727JM0".
     */
    "revoked_by_user_id"?: string;
    /** ID of the sandbox this resource belongs to. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0". */
    "sandbox_id"?: string;
    /**
     * Where the grant is in its lifecycle. Only an active grant gives the app access to its
     * environment. Value enum: "pending_exchange", "active", "revoked".
     */
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
export type PartnerEnvironmentGrantPaymentSplitsPreviousAttributes = {
    /**
     * When the merchant approved receiving split funds. Authorizing again with the same seller
     * terms keeps it; approving other seller terms, or approving again after the approval ended,
     * sets a new one. anyOf[1] (Value): string. When the merchant approved receiving split funds.
     * Authorizing again with the same seller terms keeps it; approving other seller terms, or
     * approving again after the approval ended, sets a new one. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "approved_at"?: ((string) | (null));
    /**
     * The seller terms the merchant approved: the app's seller_terms_url when the merchant
     * authorized it. Changing the app's seller_terms_url doesn't change it. anyOf[1] (Value):
     * string. The seller terms the merchant approved: the app's seller_terms_url when the merchant
     * authorized it. Changing the app's seller_terms_url doesn't change it. Format: uri.
     * maxLength: 2048. pattern: ^https://. Example: "https://example.com/receipt". anyOf[2]
     * (Value): null.
     */
    "seller_terms_url"?: ((string) | (null));
};
