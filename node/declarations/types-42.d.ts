import type {
    WorkloadIdentityClaimConditionRequest,
    WorkloadIdentityClaimConditionRequestInput,
    WebhookEventSource
} from './types-66.js';
import type { ResponseMeta, ResourceReference } from './types-51.js';
import type { InputValue } from '../runtime.js';
import type { PartnerApp } from './types-41.js';
import type { MerchantWebhookEnvelope } from './types-36.js';
import type { MoneyValue, MoneyValueInput } from './types-37.js';
import type { AcceptPartnerAppPlatformTermsRequestInput } from './types-0.js';
import type { CreatePartnerAppCredentialRequestInput } from './types-10.js';
import type { CreatePartnerAppRequestInput } from './types-11.js';
import type { FeedbackReportsListParams } from './types-23.js';
import type { RotatePartnerAppSecretRequestInput } from './types-56.js';
import type { UpdatePartnerAppRequestInput } from './types-64.js';
import type { PayOrderRequestSetup, PayOrderRequestSetupInput } from './types-43.js';
import type { CheckoutBuyerContactRequest, CheckoutBuyerContactRequestInput } from './types-5.js';
import type { OrderGiftCardAllocationAcceptance, OrderGiftCardAllocationAcceptanceInput } from './types-39.js';
import type { OrderPaymentIntentSelection, OrderPaymentIntentSelectionInput } from './types-40.js';
import type { PaymentSourceCredential, PaymentSourceCredentialInput } from './types-45.js';
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
    /** Filter by app ID. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV". */
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
            "name": string;
            "partner_app_id": string;
            "permission_manifest": Array<PartnerAppPermissionManifestEntry>;
            "platform": PartnerAppPlatform;
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
    /** The platform capability. Value enum: "platform_fees", "merchant_onboarding". */
    "capability": "platform_fees" | "merchant_onboarding" | (string & {});
    /**
     * Why the capability is inactive. Present only while status is inactive. Value enum:
     * "requirements_due", "pending_review", "not_approved", "rejected", "paused".
     */
    "inactive_reason"?: "requirements_due" | "pending_review" | "not_approved" | "rejected" | "paused" | (string & {});
    /** Whether the capability works in live mode. Value enum: "active", "inactive". */
    "status": "active" | "inactive" | (string & {});
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
            "name": string;
            "partner_app_id": string;
            "permission_manifest": Array<PartnerAppPermissionManifestEntry>;
            "platform": PartnerAppPlatform;
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
            "name": string;
            "partner_app_id": string;
            "permission_manifest": Array<PartnerAppPermissionManifestEntry>;
            "platform": PartnerAppPlatform;
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
            "name": string;
            "partner_app_id": string;
            "permission_manifest": Array<PartnerAppPermissionManifestEntry>;
            "platform": PartnerAppPlatform;
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
    /** Apply only if the app has this version. Format: uint64. minimum: 1. */
    "expected_version"?: InputValue<number>;
};
export type PartnerAppsGetCredentialParams = {};
export type PartnerAppsGetInstallParams = {};
export type PartnerAppsGetParams = {};
export type PartnerAppsListCredentialsParams = FeedbackReportsListParams;
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
    /** Filter by installed merchant ID. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
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
     * The resource change or condition this event announces. Value enum: "balance.updated",
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
     * "customer_email_preferences.updated", "delivery_location_set.activated",
     * "delivery_location_set.archived", "delivery_location_set.created",
     * "delivery_location_set.deactivated", "delivery_location_set.updated",
     * "delivery_method.activated", "delivery_method.archived", "delivery_method.created",
     * "delivery_method.deactivated", "delivery_method.updated", "delivery_profile.activated",
     * "delivery_profile.archived", "delivery_profile.created", "delivery_profile.deactivated",
     * "delivery_profile.updated", "delivery_rate_callback.activated",
     * "delivery_rate_callback.archived", "delivery_rate_callback.created",
     * "delivery_rate_callback.deactivated", "delivery_rate_callback.updated",
     * "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.activated",
     * "delivery_zone.archived", "delivery_zone.created", "delivery_zone.deactivated",
     * "delivery_zone.updated", "dispute.created", "dispute.inquiry_closed", "dispute.lost",
     * "dispute.needs_response", "dispute.prevented", "dispute.updated", "dispute.won",
     * "environment_grant.created", "environment_grant.revoked", "fraud_warning.created",
     * "fraud_warning.updated", "fulfillment.canceled", "fulfillment.completed",
     * "fulfillment.created", "fulfillment.failed", "fulfillment.updated",
     * "fulfillment_event.created", "gift_card.created", "gift_card.updated",
     * "gift_card_load.created", "gift_card_load.updated", "gift_card_notification.created",
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
     * "payout.canceled", "payout.created", "payout.failed", "payout.reversed", "payout.succeeded",
     * "payout.updated", "payout_destination.archived", "payout_destination.created",
     * "payout_destination.disabled", "payout_destination.updated", "payout_settings.updated",
     * "price_list.archived", "price_list.created", "price_list.updated", "product.archived",
     * "product.created", "product.updated", "product_variant.archived", "product_variant.created",
     * "product_variant.updated", "promotion.archived", "promotion.created", "promotion.updated",
     * "promotion_code.archived", "promotion_code.created", "promotion_code.updated",
     * "refund.created", "refund.failed", "refund.partially_succeeded", "refund.succeeded",
     * "refund.updated", "report.failed", "report.succeeded", "return.canceled",
     * "return.completed", "return.created", "return.decision_recorded", "return.reopened",
     * "return.updated", "return_disposition.created", "return_disposition.updated",
     * "return_inspection.acceptance_decided", "return_inspection.created",
     * "return_inspection.superseded", "return_receipt.created", "return_receipt.superseded",
     * "return_receipt.verified", "return_resolution.created", "return_resolution.updated",
     * "shipment.created", "shipment.updated", "subscription.activated", "subscription.canceled",
     * "subscription.cancellation_scheduled", "subscription.created", "subscription.cycle_skipped",
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
export type PayOrderRequestConfirmPaymentIntents = {
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
    "payment_intents": Array<OrderPaymentIntentSelection>;
    /**
     * The buyer's choice to save the card they typed for faster checkout at this merchant. Send
     * true only from the checkout session's own credential, when the session's
     * can_save_payment_method is true and save_payment_method_requires_verification is false, for
     * one newly collected card sent as stripe.confirmation_token created with setup_future_usage
     * on_session. The card is saved with usage on_session once the payment succeeds, for the
     * customer the checkout acts for: the customer the merchant created the session for, or the
     * customer whose email the buyer confirmed in it. A typed buyer_contact.email never decides
     * it. A checkout that acts for no customer refuses the save until the buyer confirms their
     * email with a code, unless it sends save_payment_method_phone. A checkout the buyer bound by
     * a texted code saves the card with that number. A checkout whose buyer confirmed the
     * customer's email can also send save_payment_method_phone, to save the card with a number the
     * buyer confirms by text after paying. A checkout can send the buyer's choice with every
     * payment button: Apple Pay, Google Pay, a bank account, or Affirm, in
     * stripe.confirmation_token created with no setup_future_usage, pays without the save, and the
     * payment attempt's payment_method_save reports not_saved with reason
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
};
/** The `confirm_payment_intents` variant of `PayOrderRequest`. */
export type PayOrderRequestConfirmPaymentIntentsInput = {
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
    "payment_intents": Array<OrderPaymentIntentSelectionInput>;
    /**
     * The buyer's choice to save the card they typed for faster checkout at this merchant. Send
     * true only from the checkout session's own credential, when the session's
     * can_save_payment_method is true and save_payment_method_requires_verification is false, for
     * one newly collected card sent as stripe.confirmation_token created with setup_future_usage
     * on_session. The card is saved with usage on_session once the payment succeeds, for the
     * customer the checkout acts for: the customer the merchant created the session for, or the
     * customer whose email the buyer confirmed in it. A typed buyer_contact.email never decides
     * it. A checkout that acts for no customer refuses the save until the buyer confirms their
     * email with a code, unless it sends save_payment_method_phone. A checkout the buyer bound by
     * a texted code saves the card with that number. A checkout whose buyer confirmed the
     * customer's email can also send save_payment_method_phone, to save the card with a number the
     * buyer confirms by text after paying. A checkout can send the buyer's choice with every
     * payment button: Apple Pay, Google Pay, a bank account, or Affirm, in
     * stripe.confirmation_token created with no setup_future_usage, pays without the save, and the
     * payment attempt's payment_method_save reports not_saved with reason
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
};
/** The request body for: Pay order. */
export type PayOrderRequestInput = ((PayOrderRequestPayInput)
    | (PayOrderRequestConfirmPaymentIntentsInput)
    | (PayOrderRequestSetupInput)
    | (PayOrderRequestResumeInput));
/** The `pay` variant of `PayOrderRequest`. */
export type PayOrderRequestPay = {
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
     * The credential you provide to pay an order: a payment source token, a saved payment method
     * ID, or a Stripe confirmation token.
     */
    "payment_source"?: PaymentSourceCredential;
    /**
     * The buyer's choice to save the card they typed for faster checkout at this merchant. Send
     * true only from the checkout session's own credential, when the session's
     * can_save_payment_method is true and save_payment_method_requires_verification is false, for
     * one newly collected card sent as stripe.confirmation_token created with setup_future_usage
     * on_session. The card is saved with usage on_session once the payment succeeds, for the
     * customer the checkout acts for: the customer the merchant created the session for, or the
     * customer whose email the buyer confirmed in it. A typed buyer_contact.email never decides
     * it. A checkout that acts for no customer refuses the save until the buyer confirms their
     * email with a code, unless it sends save_payment_method_phone. A checkout the buyer bound by
     * a texted code saves the card with that number. A checkout whose buyer confirmed the
     * customer's email can also send save_payment_method_phone, to save the card with a number the
     * buyer confirms by text after paying. A checkout can send the buyer's choice with every
     * payment button: Apple Pay, Google Pay, a bank account, or Affirm, in
     * stripe.confirmation_token created with no setup_future_usage, pays without the save, and the
     * payment attempt's payment_method_save reports not_saved with reason
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
};
/** The `pay` variant of `PayOrderRequest`. */
export type PayOrderRequestPayInput = {
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
     * The credential you provide to pay an order: a payment source token, a saved payment method
     * ID, or a Stripe confirmation token.
     */
    "payment_source"?: PaymentSourceCredentialInput;
    /**
     * The buyer's choice to save the card they typed for faster checkout at this merchant. Send
     * true only from the checkout session's own credential, when the session's
     * can_save_payment_method is true and save_payment_method_requires_verification is false, for
     * one newly collected card sent as stripe.confirmation_token created with setup_future_usage
     * on_session. The card is saved with usage on_session once the payment succeeds, for the
     * customer the checkout acts for: the customer the merchant created the session for, or the
     * customer whose email the buyer confirmed in it. A typed buyer_contact.email never decides
     * it. A checkout that acts for no customer refuses the save until the buyer confirms their
     * email with a code, unless it sends save_payment_method_phone. A checkout the buyer bound by
     * a texted code saves the card with that number. A checkout whose buyer confirmed the
     * customer's email can also send save_payment_method_phone, to save the card with a number the
     * buyer confirms by text after paying. A checkout can send the buyer's choice with every
     * payment button: Apple Pay, Google Pay, a bank account, or Affirm, in
     * stripe.confirmation_token created with no setup_future_usage, pays without the save, and the
     * payment attempt's payment_method_save reports not_saved with reason
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
};
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
     * Optional. When sent, Flint compares it with the amount fixed on the attempt, not the order's
     * current balance. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "expected_outstanding_money"?: MoneyValue;
    /** minLength: 1. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D". */
    "order_payment_attempt_id": string;
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
     * Optional. When sent, Flint compares it with the amount fixed on the attempt, not the order's
     * current balance. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "expected_outstanding_money"?: MoneyValueInput;
    /** minLength: 1. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D". */
    "order_payment_attempt_id": string;
};
