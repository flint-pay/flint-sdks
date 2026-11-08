import type { ResponseMeta } from './types-48.js';
import type {
    WorkloadIdentityClaimCondition,
    WorkloadIdentityClaimConditionRequest,
    WorkloadIdentityClaimConditionRequestInput
} from './types-62.js';
import type { InputValue } from '../runtime.js';
import type { CreatePartnerAppCredentialRequestInput, CreatePartnerAppRequestInput } from './types-9.js';
import type { CheckoutSessionsListDeliverySelectionsParams } from './types-5.js';
import type { RotatePartnerAppSecretRequestInput } from './types-53.js';
import type { UpdatePartnerAppRequestInput } from './types-59.js';
import type { WebhookEventSource } from './types-61.js';
import type { CheckoutBuyerContactRequest, CheckoutBuyerContactRequestInput } from './types-4.js';
import type { MoneyValue, MoneyValueInput } from './types-35.js';
import type {
    OrderGiftCardAllocationAcceptance,
    OrderPaymentIntentSelection,
    OrderGiftCardAllocationAcceptanceInput,
    OrderPaymentIntentSelectionInput,
    OrderPaymentAttempt
} from './types-37.js';
import type {
    PaymentSourceCredential,
    PaymentSourceCredentialInput,
    PaymentSourceCredentialToken,
    PaymentSourceCredentialTokenInput
} from './types-43.js';
import type { Order } from './types-36.js';
import type { PaymentErrorSummary } from './types-41.js';
/** An application that merchants can authorize to access their accounts. */
export type PartnerApp = {
    /**
     * Every Flint scope the app can hold: the union of required_scopes across the manifest. An
     * install grants only the scopes of the permissions the merchant approves. [] (Value): string.
     */
    "allowed_scopes": Array<string>;
    /**
     * API version for requests the app makes with its install tokens that send no Flint-Version
     * header.
     */
    "api_version": string;
    /** RFC3339 timestamp. Format: date-time. */
    "api_version_changed_at"?: string;
    /**
     * Version the app used before its last upgrade. Present while a rollback is available. To roll
     * back, send it as api_version.
     */
    "api_version_previous"?: string;
    /**
     * Public identifier the app sends as client_id in OAuth authorization and token requests.
     * Doesn't change.
     */
    "client_id": string;
    /**
     * Whether the app can authenticate with a client secret. When false, it authenticates with a
     * registered credential.
     */
    "client_secret_enabled": boolean;
    /** RFC3339 timestamp. Format: date-time. */
    "client_secret_last_used_at": string | null;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * IDs of the permissions requested when an authorization request sends no scope. Defaults to
     * every permission in the manifest that isn't optional. [] (Value): string.
     */
    "default_requested_permissions": Array<string>;
    /** The app's name, shown to merchants on the consent screen. */
    "name": string;
    "partner_app_id": string;
    /**
     * Permissions the app can request from merchants. Each lists the Flint scopes it grants. []
     * (Value): {@link PartnerAppPermissionManifestEntry}. One permission a partner app can
     * request, with a title, a description, and the Flint scopes it grants.
     */
    "permission_manifest": Array<PartnerAppPermissionManifestEntry>;
    /** RFC3339 timestamp. Format: date-time. */
    "previous_secret_expires_at"?: string;
    /**
     * Redirect URIs the app can use after authorization. Each is an absolute HTTPS URL, or HTTP on
     * localhost or a loopback address, with no fragment. [] (Value): string.
     */
    "redirect_uris": Array<string>;
    /** Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Starts at 1 and increases by 1 each time the app is updated, its client secret is rotated,
     * or it is deleted. Send it as expected_version to apply an update only to the version you
     * read. Format: uint64. minimum: 1.
     */
    "version": number;
};
/**
 * An immutable partner app credential, including its authentication status and usage timestamps.
 */
export type PartnerAppCredential = ({
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** A registered JWKS URL and its most recent successful fetch. */
    "jwks_url"?: PartnerAppCredentialJWKSURL;
    /**
     * When the credential last authenticated the app. Updated at most once an hour, so it can lag
     * the latest use by up to an hour. `null` when the credential has never been used. Format:
     * date-time.
     */
    "last_used_at": string | null;
    /** Name given to the credential when it was created. `null` when it has no name. */
    "name": string | null;
    "partner_app_credential_id": string;
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
     * date-time.
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
     *  [] (Value): {@link PartnerAppCredential}. An immutable partner app credential, including
     * its authentication status and usage timestamps.
     */
    "data": Array<PartnerAppCredential>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
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
     * An immutable partner app credential, including its authentication status and usage
     * timestamps.
     */
    "data": PartnerAppCredential;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
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
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     *  [] (Value): {@link PartnerEnvironmentGrant}. A partner application's authorization to
     * access an environment.
     */
    "environment_grants"?: Array<PartnerEnvironmentGrant>;
    "installed_by_user_id"?: string;
    "merchant_id": string;
    "partner_app_id": string;
    "partner_app_install_id": string;
    /** The app’s current name. */
    "partner_app_name": string;
    /** RFC3339 timestamp. Format: date-time. */
    "revoked_at"?: string;
    /** Value enum: "merchant", "partner_app". */
    "revoked_by"?: "merchant" | "partner_app" | (string & {});
    "revoked_by_user_id"?: string;
    /** Value enum: "pending_exchange", "active", "revoked". */
    "status": "pending_exchange" | "active" | "revoked" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
};
export type PartnerAppInstallCreatedEvent = ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PartnerAppInstall;
    };
    "event_type"?: "partner_app_install.created";
    "source"?: {
        "merchant_id": string;
        "partner_app_install_id": string;
        "type": "partner_app" | (string & {});
    };
})
    & {
    "event_type": "partner_app_install.created";
});
/** A page of `PartnerAppInstall` objects. */
export type PartnerAppInstallListResponse = {
    /**
     *  [] (Value): {@link PartnerAppInstall}. A merchant's authorization of a partner application.
     */
    "data": Array<PartnerAppInstall>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type PartnerAppInstallPermissionsUpdatedEvent = ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PartnerAppInstall;
    };
    "event_type"?: "partner_app_install.permissions_updated";
    "source"?: {
        "merchant_id": string;
        "partner_app_install_id": string;
        "type": "partner_app" | (string & {});
    };
})
    & {
    "event_type": "partner_app_install.permissions_updated";
});
/** A response containing `PartnerAppInstall` data. */
export type PartnerAppInstallResponse = {
    /** A merchant's authorization of a partner application. */
    "data": PartnerAppInstall;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type PartnerAppInstallRevokedEvent = ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PartnerAppInstall;
    };
    "event_type"?: "partner_app_install.revoked";
    "source"?: {
        "merchant_id": string;
        "partner_app_install_id": string;
        "type": "partner_app" | (string & {});
    };
})
    & {
    "event_type": "partner_app_install.revoked";
});
export type PartnerAppInstallUpdatedEvent = ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PartnerAppInstall;
    };
    "event_type"?: "partner_app_install.updated";
    "source"?: {
        "merchant_id": string;
        "partner_app_install_id": string;
        "type": "partner_app" | (string & {});
    };
})
    & {
    "event_type": "partner_app_install.updated";
});
export type PartnerAppInstallsListParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Filter by app ID. Example: "papp_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "partner_app_id"?: InputValue<string>;
    /**
     * Filter by install status. Accepts repeated keys, comma-separated values, or mixtures. Values
     * are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected.
     * Values within this filter are ORed; separate filters are ANDed. [] enum: "pending_exchange",
     * "active", "revoked". Value enum: "pending_exchange", "active", "revoked". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "pending_exchange", "active", "revoked". anyOf[1][]
     * (Value): string. Value enum: "pending_exchange", "active", "revoked". anyOf[2] (Value):
     * string. Value enum: "pending_exchange", "active", "revoked".
     */
    "status"?: InputValue<("pending_exchange" | "active" | "revoked") | readonly ("pending_exchange" | "active" | "revoked")[]>;
};
export type PartnerAppInstallsRevokeParams = {};
/** A page of `PartnerApp` objects. */
export type PartnerAppListResponse = {
    /**
     *  [] (Value): {@link PartnerApp}. An application that merchants can authorize to access their
     * accounts.
     */
    "data": Array<PartnerApp>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
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
    /** minLength: 1. */
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
/** A response containing `PartnerApp` data. */
export type PartnerAppResponse = {
    /** An application that merchants can authorize to access their accounts. */
    "data": PartnerApp;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
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
 * A partner app returned with its client secret, as in the response to creating a partner app. An
 * application that merchants can authorize to access their accounts.
 */
export type PartnerAppWithSecret = (Exclude<PartnerApp & object, readonly unknown[]>)
    & ({
    /**
     * One-time client secret returned when enabled at creation. Null when client_secret_enabled is
     * false.
     */
    "client_secret": string | null;
});
/** A response containing `PartnerAppWithSecret` data. */
export type PartnerAppWithSecretResponse = {
    /**
     * A partner app returned with its client secret, as in the response to creating a partner app.
     * An application that merchants can authorize to access their accounts.
     */
    "data": PartnerAppWithSecret;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
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
export type PartnerAppsListCredentialsParams = CheckoutSessionsListDeliverySelectionsParams;
export type PartnerAppsListInstallsParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Filter by installed merchant ID. Example: "mer_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "merchant_id"?: InputValue<string>;
    /**
     * Filter by install status. Accepts repeated keys, comma-separated values, or mixtures. Values
     * are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected.
     * Values within this filter are ORed; separate filters are ANDed. [] enum: "pending_exchange",
     * "active", "revoked". Value enum: "pending_exchange", "active", "revoked". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "pending_exchange", "active", "revoked". anyOf[1][]
     * (Value): string. Value enum: "pending_exchange", "active", "revoked". anyOf[2] (Value):
     * string. Value enum: "pending_exchange", "active", "revoked".
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
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by status. Repeat the parameter or send comma-separated values to match any of
     * several. Omitted, the list leaves out archived rows; name archived to include them. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "active", "archived". Value enum: "active", "archived".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active", "archived". anyOf[1][]
     * (Value): string. Value enum: "active", "archived". anyOf[2] (Value): string. Value enum:
     * "active", "archived".
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
    /** The app's client ID, as sent in the authorization request. */
    "client_id": string;
    /** Whether the install is for test or live mode. Value enum: "test", "live". */
    "mode": "test" | "live" | (string & {});
    /** The app's current name. */
    "name": string;
    /** ID of the partner app asking for access. */
    "partner_app_id": string;
    /** The app’s version. It changes whenever the app is edited. Format: int64. */
    "partner_app_version": number;
    /** The registered redirect URI Flint sends the merchant back to after they approve or deny. */
    "redirect_uri": string;
    /**
     * IDs of the requested permissions, sorted. They are the permissions named in scope, or the
     * app's default requested permissions when scope is omitted, plus every required permission.
     * [] (Value): string.
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
     * What a partner app is asking to access, shown to a merchant before they approve it,
     * including requested permissions and the redirect URI.
     */
    "data": PartnerAuthorizePreview;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A partner application's authorization to access an environment. */
export type PartnerEnvironmentGrant = ({
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    "environment_grant_id": string;
    /**
     * The app’s permissions this grant holds, from the app’s current manifest. Their permission
     * IDs are the token scope. [] (Value): {@link PartnerAppPermissionManifestEntry}. One
     * permission a partner app can request, with a title, a description, and the Flint scopes it
     * grants.
     */
    "granted_permissions": Array<PartnerAppPermissionManifestEntry>;
    /**  [] (Value): string. */
    "granted_scopes": Array<string>;
    /** Value enum: "test", "live". */
    "mode": "test" | "live" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "revoked_at"?: string;
    "revoked_by_user_id"?: string;
    "sandbox_id"?: string;
    /** Value enum: "pending_exchange", "active", "revoked". */
    "status": "pending_exchange" | "active" | "revoked" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
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
    /** Format: date. */
    "api_version": string;
    /** Format: date-time. */
    "created_at": string;
    /**  object (Required): object. */
    "data": {
        "object": {
            [key: string]: unknown;
        };
    };
    /**
     * Value enum: "balance.updated", "balance_transaction.created", "balance_transaction.updated",
     * "bundle.archived", "bundle.created", "bundle.updated", "category.created",
     * "category.deleted", "category.updated", "checkout_session.closed",
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
     * "subscription_payment_retry.failed", "subscription_payment_retry.succeeded",
     * "tax_connection.updated", "test_clock.advancing", "test_clock.archived",
     * "test_clock.created", "test_clock.failed", "test_clock.ready".
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
        | "tax_connection.updated"
        | "test_clock.advancing"
        | "test_clock.archived"
        | "test_clock.created"
        | "test_clock.failed"
        | "test_clock.ready"
        | (string & {});
    "partner_app_id": string;
    /**
     * 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered
     * afterwards, which keeps its previous data shape. Value enum: 1, 2.
     */
    "payload_version": number;
    /** The source of a partner webhook event, selected by type. */
    "source": WebhookEventSource;
    /** true for a synthetic event sent from the test-events endpoint, false otherwise. */
    "test": boolean;
    "webhook_event_id": string;
});
/** The request body for: Pause one of the current buyer's subscriptions; Pause subscription. */
export type PauseSubscriptionRequest = {
    /** Format: uint64. minimum: 1. */
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
     * minLength: 1. maxLength: 255. minLength: 1. phone (Optional): (string or null) and string.
     * Phone for the buyer, in E.164 format, such as +14155551234. On checkout session updates,
     * null clears the saved phone. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$. minLength: 1.
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
     * minLength: 1. maxLength: 255. minLength: 1. phone (Optional): (string or null) and string.
     * Phone for the buyer, in E.164 format, such as +14155551234. On checkout session updates,
     * null clears the saved phone. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$. minLength: 1.
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
     * minLength: 1. maxLength: 255. minLength: 1. phone (Optional): (string or null) and string.
     * Phone for the buyer, in E.164 format, such as +14155551234. On checkout session updates,
     * null clears the saved phone. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$. minLength: 1.
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
     * minLength: 1. maxLength: 255. minLength: 1. phone (Optional): (string or null) and string.
     * Phone for the buyer, in E.164 format, such as +14155551234. On checkout session updates,
     * null clears the saved phone. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequestInput & object, readonly unknown[]>)
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
     * minLength: 1. maxLength: 255. minLength: 1. phone (Optional): (string or null) and string.
     * Phone for the buyer, in E.164 format, such as +14155551234. On checkout session updates,
     * null clears the saved phone. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$. minLength: 1.
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
    /** minLength: 1. */
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
     * minLength: 1. maxLength: 255. minLength: 1. phone (Optional): (string or null) and string.
     * Phone for the buyer, in E.164 format, such as +14155551234. On checkout session updates,
     * null clears the saved phone. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$. minLength: 1.
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
    /** minLength: 1. */
    "order_payment_attempt_id": string;
};
/** The `setup` variant of `PayOrderRequest`. */
export type PayOrderRequestSetup = {
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
     * minLength: 1. maxLength: 255. minLength: 1. phone (Optional): (string or null) and string.
     * Phone for the buyer, in E.164 format, such as +14155551234. On checkout session updates,
     * null clears the saved phone. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$. minLength: 1.
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
    /** The `token` variant of `PaymentSourceCredential`. */
    "setup_payment_source": PaymentSourceCredentialToken;
};
/** The `setup` variant of `PayOrderRequest`. */
export type PayOrderRequestSetupInput = {
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
     * minLength: 1. maxLength: 255. minLength: 1. phone (Optional): (string or null) and string.
     * Phone for the buyer, in E.164 format, such as +14155551234. On checkout session updates,
     * null clears the saved phone. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequestInput & object, readonly unknown[]>)
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
    "expected_outstanding_money"?: MoneyValueInput;
    /**
     * Optional version from the order you reviewed. A mismatch returns VERSION_CONFLICT, even when
     * the outstanding amount is unchanged. Starting a payment advances the order's version. After
     * a declined or failed attempt, use the order returned in the pay response or read the order
     * again before retrying. When accepted_gift_card_allocation is sent, its order_version must
     * match this value. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** The `token` variant of `PaymentSourceCredential`. */
    "setup_payment_source": PaymentSourceCredentialTokenInput;
};
/** A response containing `PayOrderResult` data. */
export type PayOrderResponse = {
    /**
     * The order is the primary resource and expected_version target; order_payment_attempt records
     * the payment outcome.
     */
    "data": PayOrderResult;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
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
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
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
    "gift_card_id": string;
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
     * confirmation attempt. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Capture is unavailable at or after this time, even if the payment still has requires_capture
     * status. Format: date-time.
     */
    "authorization_expires_at"?: string;
    /**
     * Payment intent's stored capturable amount. A positive amount does not override
     * authorization_expires_at or the payment status. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "capturable_money"?: MoneyValue;
    /**
     * A summary of why a payment attempt failed, with a normalized error code, a message, the
     * failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /** Flint payment intent ID. */
    "payment_intent_id": string;
    /**
     * Payment option used by this leg, using the same values as
     * PaymentIntent.selected_payment_option. Fixed when the attempt becomes terminal. Omitted when
     * no payment option has been selected. Value enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit".
     */
    "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {});
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
