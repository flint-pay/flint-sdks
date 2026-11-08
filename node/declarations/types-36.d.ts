import type { InputValue } from '../runtime.js';
import type { CLIDeviceRequestInput, CLIContextsRequestInput, CLIReauthorizeRequestInput } from './types-3.js';
import type {
    OAuthRevokeRequestInput,
    MetadataMap,
    MoneyValue,
    MetadataRequestInput,
    MoneyValueInput,
    MerchantWebhookEnvelope
} from './types-35.js';
import type { DeveloperInitialAPIKeyRequestInput } from './types-20.js';
import type { ResponseMeta } from './types-48.js';
import type { ReadinessAction } from './types-46.js';
import type { Merchant } from './types-34.js';
import type { User } from './types-61.js';
import type { BuyerAction } from './types-1.js';
import type { CheckoutBuyerContact } from './types-4.js';
import type {
    ExpandedCustomerSummary,
    ExpandedPaymentIntentSummary,
    ExpandedSubscriptionPlanSummary,
    ExpandedSubscriptionSummary
} from './types-21.js';
import type { Fulfillment } from './types-22.js';
import type { InventoryRoutingSource } from './types-28.js';
import type {
    OrderDiscount,
    OrderGiftCardEstimate,
    OrderGiftCardSelection,
    OrderGiftCardSettlement,
    OrderLineItem,
    OrderPaymentAttempt
} from './types-37.js';
import type { OrderReturnCreditSettlement, OrderTax } from './types-38.js';
import type { PaymentCollection } from './types-41.js';
import type { PricingAmounts } from './types-44.js';
import type { SettlementAmounts } from './types-53.js';
import type { TicketedEvent, Tip } from './types-58.js';
import type { TaxCalculationRequestInput, TaxCalculationRequest, TaxCalculationRequestModelInput } from './types-57.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { Address } from './types-0.js';
/** The `authorization_code` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestAuthorizationCodeInput = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code": string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier": string;
    /** flint-cli only. */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use authorization_code or refresh_token; flint-cli
     * uses device_code or refresh_token; workload identities use token-exchange. Value enum:
     * "authorization_code".
     */
    "grant_type": "authorization_code";
    /** Partner redirect URI used in authorization, required for authorization_code. */
    "redirect_uri": string;
    /** Partner or flint-cli refresh token, required for refresh_token. */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token";
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit, or send exactly the granted permission IDs.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token";
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange.
     */
    "workload_identity_id"?: string;
})
    & ({
    /** Value enum: "authorization_code". */
    "grant_type"?: ("authorization_code") & ("authorization_code");
    /** Partner authorization code, required for authorization_code. */
    "code": string;
    /** Partner redirect URI used in authorization, required for authorization_code. */
    "redirect_uri": string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier": string;
});
/** The `urn:ietf:params:oauth:grant-type:device_code` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestDeviceCode = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer" | (string & {});
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /** flint-cli only. */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code": string;
    /**
     * OAuth grant to exchange. Partner apps use authorization_code or refresh_token; flint-cli
     * uses device_code or refresh_token; workload identities use token-exchange. Value enum:
     * "urn:ietf:params:oauth:grant-type:device_code".
     */
    "grant_type": "urn:ietf:params:oauth:grant-type:device_code" | (string & {});
    /** Partner redirect URI used in authorization, required for authorization_code. */
    "redirect_uri"?: string;
    /** Partner or flint-cli refresh token, required for refresh_token. */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token" | (string & {});
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit, or send exactly the granted permission IDs.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token" | (string & {});
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange.
     */
    "workload_identity_id"?: string;
})
    & ({
    /** Value enum: "urn:ietf:params:oauth:grant-type:device_code". */
    "grant_type"?: unknown;
    /** flint-cli device code, required for the device_code grant. */
    "device_code": string;
});
/** The `urn:ietf:params:oauth:grant-type:device_code` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestDeviceCodeInput = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /** flint-cli only. */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code": string;
    /**
     * OAuth grant to exchange. Partner apps use authorization_code or refresh_token; flint-cli
     * uses device_code or refresh_token; workload identities use token-exchange. Value enum:
     * "urn:ietf:params:oauth:grant-type:device_code".
     */
    "grant_type": "urn:ietf:params:oauth:grant-type:device_code";
    /** Partner redirect URI used in authorization, required for authorization_code. */
    "redirect_uri"?: string;
    /** Partner or flint-cli refresh token, required for refresh_token. */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token";
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit, or send exactly the granted permission IDs.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token";
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange.
     */
    "workload_identity_id"?: string;
})
    & ({
    /** Value enum: "urn:ietf:params:oauth:grant-type:device_code". */
    "grant_type"?: ("urn:ietf:params:oauth:grant-type:device_code") & ("urn:ietf:params:oauth:grant-type:device_code");
    /** flint-cli device code, required for the device_code grant. */
    "device_code": string;
});
/** The request body for: Exchange an OAuth token. */
export type OAuthTokenRequestInput = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /** flint-cli only. */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use authorization_code or refresh_token; flint-cli
     * uses device_code or refresh_token; workload identities use token-exchange. Value enum:
     * "authorization_code", "refresh_token", "urn:ietf:params:oauth:grant-type:device_code",
     * "urn:ietf:params:oauth:grant-type:token-exchange".
     */
    "grant_type": "authorization_code"
        | "refresh_token"
        | "urn:ietf:params:oauth:grant-type:device_code"
        | "urn:ietf:params:oauth:grant-type:token-exchange";
    /** Partner redirect URI used in authorization, required for authorization_code. */
    "redirect_uri"?: string;
    /** Partner or flint-cli refresh token, required for refresh_token. */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token";
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit, or send exactly the granted permission IDs.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token";
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange.
     */
    "workload_identity_id"?: string;
})
    & ((Exclude<OAuthTokenRequestAuthorizationCodeInput & object, readonly unknown[]>)
    | (Exclude<OAuthTokenRequestRefreshTokenInput & object, readonly unknown[]>)
    | (Exclude<OAuthTokenRequestDeviceCodeInput & object, readonly unknown[]>)
    | (Exclude<OAuthTokenRequestTokenExchangeInput & object, readonly unknown[]>));
/** The `refresh_token` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestRefreshToken = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer" | (string & {});
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /** flint-cli only. */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use authorization_code or refresh_token; flint-cli
     * uses device_code or refresh_token; workload identities use token-exchange. Value enum:
     * "refresh_token".
     */
    "grant_type": "refresh_token" | (string & {});
    /** Partner redirect URI used in authorization, required for authorization_code. */
    "redirect_uri"?: string;
    /** Partner or flint-cli refresh token, required for refresh_token. */
    "refresh_token": string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token" | (string & {});
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit, or send exactly the granted permission IDs.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token" | (string & {});
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange.
     */
    "workload_identity_id"?: string;
})
    & ({
    /** Value enum: "refresh_token". */
    "grant_type"?: unknown;
    /** Partner or flint-cli refresh token, required for refresh_token. */
    "refresh_token": string;
});
/** The `refresh_token` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestRefreshTokenInput = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /** flint-cli only. */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use authorization_code or refresh_token; flint-cli
     * uses device_code or refresh_token; workload identities use token-exchange. Value enum:
     * "refresh_token".
     */
    "grant_type": "refresh_token";
    /** Partner redirect URI used in authorization, required for authorization_code. */
    "redirect_uri"?: string;
    /** Partner or flint-cli refresh token, required for refresh_token. */
    "refresh_token": string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token";
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit, or send exactly the granted permission IDs.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token"?: string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type"?: "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token";
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange.
     */
    "workload_identity_id"?: string;
})
    & ({
    /** Value enum: "refresh_token". */
    "grant_type"?: ("refresh_token") & ("refresh_token");
    /** Partner or flint-cli refresh token, required for refresh_token. */
    "refresh_token": string;
});
/** The `urn:ietf:params:oauth:grant-type:token-exchange` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestTokenExchange = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer" | (string & {});
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /** flint-cli only. */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use authorization_code or refresh_token; flint-cli
     * uses device_code or refresh_token; workload identities use token-exchange. Value enum:
     * "urn:ietf:params:oauth:grant-type:token-exchange".
     */
    "grant_type": "urn:ietf:params:oauth:grant-type:token-exchange" | (string & {});
    /** Partner redirect URI used in authorization, required for authorization_code. */
    "redirect_uri"?: string;
    /** Partner or flint-cli refresh token, required for refresh_token. */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token" | (string & {});
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit, or send exactly the granted permission IDs.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token": string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type": "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token" | (string & {});
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange.
     */
    "workload_identity_id": string;
})
    & ({
    /** Value enum: "urn:ietf:params:oauth:grant-type:token-exchange". */
    "grant_type"?: unknown;
    "requested_token_type"?: unknown;
    "scope"?: unknown;
    "subject_token": unknown;
    "subject_token_type": unknown;
    "workload_identity_id": unknown;
});
/** The `urn:ietf:params:oauth:grant-type:token-exchange` variant of `OAuthTokenRequest`. */
export type OAuthTokenRequestTokenExchangeInput = ({
    /**
     * Signed RFC 7523 JWT for partner client authentication. Send client_id and
     * client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     */
    "client_assertion"?: string;
    /**
     * Required with client_assertion for partner private_key_jwt authentication. Value enum:
     * "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     */
    "client_assertion_type"?: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";
    /**
     * Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when
     * HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange.
     */
    "client_id"?: string;
    /**
     * Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends
     * a secret. Forbidden for workload identity token exchange.
     */
    "client_secret"?: string;
    /** Partner authorization code, required for authorization_code. */
    "code"?: string;
    /**
     * Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength:
     * 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     */
    "code_verifier"?: string;
    /** flint-cli only. */
    "context_id"?: string;
    /** flint-cli device code, required for the device_code grant. */
    "device_code"?: string;
    /**
     * OAuth grant to exchange. Partner apps use authorization_code or refresh_token; flint-cli
     * uses device_code or refresh_token; workload identities use token-exchange. Value enum:
     * "urn:ietf:params:oauth:grant-type:token-exchange".
     */
    "grant_type": "urn:ietf:params:oauth:grant-type:token-exchange";
    /** Partner redirect URI used in authorization, required for authorization_code. */
    "redirect_uri"?: string;
    /** Partner or flint-cli refresh token, required for refresh_token. */
    "refresh_token"?: string;
    /**
     * Optional requested credential type for token exchange. Only access tokens are supported.
     * Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "requested_token_type"?: "urn:ietf:params:oauth:token-type:access_token";
    /**
     * flint-cli and workload identities: optional subset of API scope names for this access token.
     * Partner apps: omit, or send exactly the granted permission IDs.
     */
    "scope"?: string;
    /**
     * JWT from the workload identity's external issuer. Required for token exchange. minLength: 1.
     * maxLength: 8192.
     */
    "subject_token": string;
    /**
     * Format of subject_token. Required for token exchange. Value enum:
     * "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     */
    "subject_token_type": "urn:ietf:params:oauth:token-type:jwt" | "urn:ietf:params:oauth:token-type:id_token";
    /**
     * Configured workload identity to match against the verified subject token. Required for token
     * exchange.
     */
    "workload_identity_id": string;
})
    & ({
    /** Value enum: "urn:ietf:params:oauth:grant-type:token-exchange". */
    "grant_type"?: ("urn:ietf:params:oauth:grant-type:token-exchange")
        & ("urn:ietf:params:oauth:grant-type:token-exchange");
    "requested_token_type"?: unknown;
    "scope"?: unknown;
    "subject_token": unknown;
    "subject_token_type": unknown;
    "workload_identity_id": unknown;
});
/** The response for: Exchange an OAuth token. */
export type OAuthTokenResponse = ({
    /** minLength: 1. */
    "access_token": string;
    /** minLength: 1. */
    "context_id"?: string;
    "environment_grant_id"?: string;
    /** minimum: 1. maximum: 86400. */
    "expires_in": number;
    /**
     * Present for workload identity token exchange. Identifies the issued credential as an access
     * token. Value enum: "urn:ietf:params:oauth:token-type:access_token".
     */
    "issued_token_type"?: "urn:ietf:params:oauth:token-type:access_token" | (string & {});
    "merchant_id"?: string;
    /** Value enum: "test", "live". */
    "mode"?: "test" | "live" | (string & {});
    /** minLength: 1. */
    "oauth_session_id"?: string;
    "partner_app_id"?: string;
    "partner_app_install_id"?: string;
    /**
     * Rotating refresh token for partner apps and flint-cli. Absent for workload access tokens.
     * minLength: 1.
     */
    "refresh_token"?: string;
    /** Present exactly when mode is test. */
    "sandbox_id"?: string;
    /**
     * Space-separated granted scope, in the vocabulary the client requested: permission IDs for
     * partner apps, API scope names for flint-cli and workload identities. Empty when a workload
     * identity has no scopes.
     */
    "scope": string;
    /** Value enum: "Bearer". */
    "token_type": "Bearer" | (string & {});
    /**
     * Workload identity that authorized the token exchange. Present only for workload access
     * tokens.
     */
    "workload_identity_id"?: string;
});
export type OauthAuthorizeCLIDeviceParams = (InputValue<CLIDeviceRequestInput>);
export type OauthExchangeTokenParams = (OAuthTokenRequestInput);
export type OauthListCLIContextsParams = (InputValue<CLIContextsRequestInput>);
export type OauthPreviewPartnerInstallAuthorizationParams = {
    /** OAuth response type. Must be code. Value enum: "code". */
    "response_type"?: InputValue<"code">;
    /** Partner app client ID. */
    "client_id": InputValue<string>;
    /** Registered redirect URI for the partner app. */
    "redirect_uri": InputValue<string>;
    /** Install mode. Value enum: "test", "live". */
    "mode": InputValue<"test" | "live">;
    /** Base64url-encoded SHA-256 hash of your code_verifier, without padding (RFC 7636). */
    "code_challenge"?: InputValue<string>;
    /** PKCE challenge method. Value enum: "S256". */
    "code_challenge_method"?: InputValue<"S256">;
    /**
     * Space-separated permission IDs from your app's permission manifest. Omit to request
     * default_requested_permissions. Required permissions are always granted.
     */
    "scope"?: InputValue<string>;
    /**
     * Optional active merchant sandbox ID, accepted only with mode=test. When omitted in test
     * mode, Flint uses the merchant's default sandbox. Example: "test_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "sandbox_id"?: InputValue<string>;
    /** Opaque state value returned to the partner callback. */
    "state"?: InputValue<string>;
};
export type OauthReauthorizeCLIDeviceParams = (InputValue<CLIReauthorizeRequestInput>);
export type OauthRevokeTokenParams = (InputValue<OAuthRevokeRequestInput>);
export type OauthRevokeTokenResponse = undefined;
export type OnboardingAdvanceParams = (InputValue<OnboardingAdvanceRequestInput>);
/** The request body for: Advance onboarding flow. */
export type OnboardingAdvanceRequest = {
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US". Value enum: "US".
     */
    "country"?: "US" | (string & {});
    /**
     * Contact and website details you submit for a merchant during onboarding. Send null to clear
     * a field.
     */
    "profile"?: OnboardingProfileRequest;
    /**
     * Exact initial Flint capability set. Include accept_card_payments and receive_payouts
     * together. Optionally include accept_ach_debit_payments, or omit the field to use the card
     * and payout default set. minItems: 2. maxItems: 3. uniqueItems: true. [] enum:
     * "accept_card_payments", "receive_payouts", "accept_ach_debit_payments". [] (Value): string.
     * Value enum: "accept_card_payments", "receive_payouts", "accept_ach_debit_payments".
     */
    "requested_capabilities"?: (Array<"accept_card_payments" | "receive_payouts" | "accept_ach_debit_payments" | (string & {})>);
};
/** The request body for: Advance onboarding flow. */
export type OnboardingAdvanceRequestInput = {
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US". Value enum: "US".
     */
    "country"?: "US";
    /**
     * Contact and website details you submit for a merchant during onboarding. Send null to clear
     * a field.
     */
    "profile"?: OnboardingProfileRequestInput;
    /**
     * Exact initial Flint capability set. Include accept_card_payments and receive_payouts
     * together. Optionally include accept_ach_debit_payments, or omit the field to use the card
     * and payout default set. minItems: 2. maxItems: 3. uniqueItems: true. [] enum:
     * "accept_card_payments", "receive_payouts", "accept_ach_debit_payments". [] (Value): string.
     * Value enum: "accept_card_payments", "receive_payouts", "accept_ach_debit_payments".
     */
    "requested_capabilities"?: (Array<"accept_card_payments" | "receive_payouts" | "accept_ach_debit_payments">);
};
export type OnboardingCreateAPIKeyParams = (InputValue<DeveloperInitialAPIKeyRequestInput>);
export type OnboardingGetStateParams = {};
/** Contact and website details recorded for a merchant during onboarding. */
export type OnboardingProfile = {
    "email": string | null;
    "support_email"?: string;
    "support_phone"?: string;
    "support_url"?: string;
    "website_url"?: string;
};
/**
 * Contact and website details you submit for a merchant during onboarding. Send null to clear a
 * field.
 */
export type OnboardingProfileRequest = {
    /** Send null to clear it. minLength: 1. */
    "email"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "support_email"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "support_phone"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "support_url"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "website_url"?: string | null;
};
/**
 * Contact and website details you submit for a merchant during onboarding. Send null to clear a
 * field.
 */
export type OnboardingProfileRequestInput = OnboardingProfileRequest;
export type OnboardingStartParams = (InputValue<OnboardingStartRequestInput>);
/** The request body for: Start onboarding flow. */
export type OnboardingStartRequest = {
    /** minLength: 1. */
    "email": string;
    /** minLength: 1. */
    "first_name": string;
    /** minLength: 1. */
    "last_name": string;
};
/** The request body for: Start onboarding flow. */
export type OnboardingStartRequestInput = OnboardingStartRequest;
/** A response containing `OnboardingStartResult` data. */
export type OnboardingStartResponse = {
    /**
     * The result of starting onboarding: whether email verification began, plus the verification
     * token and its expiry.
     */
    "data": OnboardingStartResult;
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
 * The result of starting onboarding: whether email verification began, plus the verification token
 * and its expiry.
 */
export type OnboardingStartResult = {
    /** RFC3339 timestamp. Format: date-time. */
    "expires_at": string;
    "verification_started": boolean;
    "verification_token": string;
};
/**
 * A merchant's onboarding status, profile, next step, requested capabilities, and whether an API
 * key can be issued.
 */
export type OnboardingState = {
    "can_issue_api_key": boolean;
    /**
     * Immutable business country for the selected stable provider-account target. Omitted until
     * the target has selected an effective country. minLength: 2. maxLength: 2. pattern:
     * ^[A-Z]{2}$. Example: "US". Value enum: "US".
     */
    "country"?: "US" | (string & {});
    "default_sandbox_id"?: string;
    "merchant_id": string;
    /**
     * A step that moves a merchant capability or readiness axis forward, with the party that must
     * do it (`owner`) and any required fields.
     */
    "next_step"?: ReadinessAction;
    /** Contact and website details recorded for a merchant during onboarding. */
    "profile": OnboardingProfile;
    /**
     * Canonical Flint capability intent persisted on the selected stable provider-account target.
     * The initial merchant-account configuration always includes accept_card_payments and
     * receive_payouts and may also include accept_ach_debit_payments. minItems: 2. maxItems: 3.
     * uniqueItems: true. [] enum: "accept_card_payments", "receive_payouts",
     * "accept_ach_debit_payments". [] (Value): string. Value enum: "accept_card_payments",
     * "receive_payouts", "accept_ach_debit_payments".
     */
    "requested_capabilities"?: (Array<"accept_card_payments" | "receive_payouts" | "accept_ach_debit_payments" | (string & {})>);
    /**
     * Onboarding workflow status for activation and remediation, not a durable account-readiness
     * boolean. Value enum: "complete", "waiting_for_review", "needs_external_action",
     * "needs_input".
     */
    "status": "complete" | "waiting_for_review" | "needs_external_action" | "needs_input" | (string & {});
};
/** A response containing `OnboardingState` data. */
export type OnboardingStateResponse = {
    /**
     * A merchant's onboarding status, profile, next step, requested capabilities, and whether an
     * API key can be issued.
     */
    "data": OnboardingState;
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
export type OnboardingVerifyEmailParams = (InputValue<OnboardingVerifyEmailRequestInput>);
/** The request body for: Verify onboarding email. */
export type OnboardingVerifyEmailRequest = {
    /** minLength: 1. */
    "merchant_id"?: string;
    /** minLength: 1. */
    "verification_code": string;
    /** minLength: 1. */
    "verification_token": string;
};
/** The request body for: Verify onboarding email. */
export type OnboardingVerifyEmailRequestInput = OnboardingVerifyEmailRequest;
/** A response containing `OnboardingVerifyEmailResult` data. */
export type OnboardingVerifyEmailResponse = {
    /**
     * The result of verifying an onboarding email: the merchant and user, an onboarding session
     * token, and the next step.
     */
    "data": OnboardingVerifyEmailResult;
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
 * The result of verifying an onboarding email: the merchant and user, an onboarding session token,
 * and the next step.
 */
export type OnboardingVerifyEmailResult = {
    /** Whether the merchant has no external API key and a default sandbox exists. */
    "can_issue_api_key": boolean;
    "default_sandbox_id"?: string;
    /** The business accepting payments. */
    "merchant": Merchant;
    "merchant_created": boolean;
    /**
     * Expiry of onboarding_session_token. The token cannot be refreshed; verify the email again to
     * get a new one. Format: date-time.
     */
    "onboarding_session_expires_at": string;
    "onboarding_session_token": string;
    /** A user with access to merchant accounts. */
    "user": User;
};
export type OpenapiGetSpecParams = {
    /**
     * Supported API version in YYYY-MM-DD format, for tools and direct links that can't send
     * Flint-Version. When both are valid, this selects the returned specification. An invalid
     * Flint-Version header still returns an error.
     */
    "version"?: InputValue<string>;
};
export type OpenapiGetSpecResponse = {
    [key: string]: unknown;
};
/** A customer's purchase and its payment and fulfillment progress. */
export type Order = {
    /** An attempt to pay an order. */
    "active_payment_attempt"?: OrderPaymentAttempt;
    /**
     * The amounts authorized and still capturable on an order's payments, with the authorization
     * expiry.
     */
    "authorization_amounts"?: OrderAuthorizationAmounts;
    /**
     * What the buyer can do with the order, in this order: start_return, then resend_receipt. A
     * buyer's read through a customer session on /v1/me, or in Flint's buyer account, lists both
     * every time; a merchant read gets an empty list. A list of orders leaves start_return out,
     * since only a read of one order checks return eligibility. start_return is due when the last
     * open return window ends. Example: []. [] (Value): {@link BuyerAction}. One thing a buyer can
     * do with an order, subscription, invoice or return they read through /v1/me. Show the actions
     * with is_required as what needs the buyer's attention, and the first available action as the
     * primary action on the resource's page in your account.
     */
    "buyer_actions": Array<BuyerAction>;
    /**
     * Email and phone saved when payment started, from the pay request's buyer_contact or the
     * paying checkout session's saved contact. It does not change the linked customer. Buyer
     * contact supplied with payment or saved during checkout.
     */
    "buyer_contact"?: CheckoutBuyerContact;
    "buyer_note"?: string;
    /**  [] (Value): {@link OrderCharge}. An additional charge applied to an order. */
    "charges": Array<OrderCharge>;
    /**  [] (Value): string. */
    "checkout_session_ids": Array<string>;
    /**
     * When the order closed. Present exactly when status is closed. Set once at the transition and
     * never changed. Format: date-time.
     */
    "closed_at"?: string;
    /**
     * Why the order closed. Present exactly when status is closed. Set once at closure.
     * Unrecognized reasons are returned as other; new values may be added. Value enum: "paid",
     * "closed_by_merchant", "checkout_expired", "written_off", "superseded",
     * "return_resolution_canceled", "other".
     */
    "closed_reason"?: "paid"
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
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Present only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
     * returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    "customer_id"?: string;
    /**
     * The shipment or local-delivery destination committed for this order. Payment freezes this
     * value; fulfillment recipient changes do not replace it. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. Where an order is
     * delivered: the address, the recipient, and where the destination came from.
     */
    "delivery_destination"?: OrderDeliveryDestination;
    /**
     *  [] (Value): {@link OrderDiscount}. A discount applied to an order, with its amount, status,
     * and the line items and charges it covers. It comes from a manual discount or a promotion.
     */
    "discounts": Array<OrderDiscount>;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
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
    /**  [] (Value): {@link Fulfillment}. Work required to deliver an order's items. */
    "fulfillments": Array<Fulfillment>;
    /**
     * An estimate of how an order total splits between gift cards and the payment processor, and
     * whether gift cards can pay it.
     */
    "gift_card_estimate"?: OrderGiftCardEstimate;
    /**
     *  [] (Value): {@link OrderGiftCardSettlement}. A gift card redemption applied to an order
     * payment, with the amount, tip, and gift card.
     */
    "gift_card_settlements": Array<OrderGiftCardSettlement>;
    "gift_card_tender_enabled": boolean;
    /**
     *  [] (Value): {@link OrderGiftCardSelection}. A gift card available to pay an order, with its
     * available balance and the last four characters of its code.
     */
    "gift_cards": Array<OrderGiftCardSelection>;
    /**
     * ID of the delivery selection that governs this order, including pickup choices without a
     * delivery destination. Null when no selection governs the order. While set, change the
     * destination through the delivery selection.
     */
    "governing_delivery_selection_id": string | null;
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
    /** The reservation holding stock for this order, when one exists. */
    "inventory_reservation_id"?: string;
    /**
     * Where this order's tracked demand is routed. Required before an order containing tracked
     * variants can hold stock. Where an order, payment link, or reservation routes inventory from:
     * a fixed Location, an inventory allocation policy, or one policy revision.
     */
    "inventory_routing_source"?: InventoryRoutingSource;
    /**  [] (Value): {@link OrderLineItem}. An item purchased in an order. */
    "line_items": Array<OrderLineItem>;
    "merchant_id"?: string;
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    "order_id": string;
    "order_number"?: string;
    /** Value enum: "virtual_terminal", "payment_link", "checkout", "api", "subscription". */
    "origin"?: "virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription" | (string & {});
    /**
     * Client-side details for collecting payment from the buyer, such as the Stripe settings to
     * initialize Stripe.js.
     */
    "payment_collection"?: PaymentCollection;
    /**  [] (Value): string. */
    "payment_intent_ids": Array<string>;
    /**
     *  [] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields,
     * including amount, status, and capture method, returned when the payment intent is expanded.
     */
    "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
    /**
     * Payment link whose checkout created this order. Absent for orders that did not come from a
     * payment link. Filter GET /v1/orders by payment_link_id to list a link's orders.
     */
    "payment_link_id"?: string;
    /**
     * Collection progress. An invoice write-off also completes collection without receiving the
     * written-off amount. Value enum: "unpaid", "partially_paid", "paid".
     */
    "payment_status": "unpaid" | "partially_paid" | "paid" | (string & {});
    /**
     * The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip,
     * and total.
     */
    "pricing_amounts": PricingAmounts;
    /**  [] (Value): string. */
    "refund_ids": Array<string>;
    /**
     * Refund progress for collected money. Value enum: "none", "partially_refunded", "refunded".
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
     * return did not create.
     */
    "return_resolution_id"?: string;
    /**
     * How much of an order has been paid, refunded, credited, written off, and settled as tips,
     * and what balance and outstanding amount remain.
     */
    "settlement_amounts": SettlementAmounts;
    /**
     * Client-side details for collecting payment from the buyer, such as the Stripe settings to
     * initialize Stripe.js.
     */
    "setup_collection"?: PaymentCollection;
    /**
     * Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes,
     * returns, and metadata or note edits continue on a closed order. Value enum: "open",
     * "closed".
     */
    "status": "open" | "closed" | (string & {});
    /**
     * Present only when `expand` includes `subscription`; `null` when expanded and there is no
     * related subscription. anyOf[1] (Value): {@link ExpandedSubscriptionSummary}. A
     * subscription's summary fields, including status, billing period, and next billing time,
     * returned when the subscription is expanded. anyOf[2] (Value): null.
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
     */
    "subscription_delivery_changed_at"?: string;
    "subscription_id"?: string;
    /**
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. anyOf[2] (Value): null.
     */
    "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
    "subscription_plan_id"?: string;
    /**
     * An order's tax state, including its mode, price mode, status, location, exemption, and tax
     * breakdowns.
     */
    "tax": OrderTax;
    /**
     * Event and tickets this order sold through an event payment link. Absent on other orders.
     * Event details for a ticketed order: name, location, start time, time zone, and the tickets
     * issued.
     */
    "ticketed_event"?: TicketedEvent;
    /**
     *  [] (Value): {@link Tip}. A tip on an order, with its requested, settled, and refunded
     * amounts, status, and how it was paid.
     */
    "tips": Array<Tip>;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Order version for optimistic concurrency. Send this value as the expected version when
     * changing the order. Increases with every change to the order. Ignore an order webhook
     * snapshot whose version is lower than one you have already applied. Format: int64.
     */
    "version": number;
};
/**
 * Read-only order history row for merchant timeline rendering and debugging. The owning resource
 * remains authoritative for state and money movement.
 */
export type OrderActivity = {
    /**
     * The action recorded on the order. Omitted when the activity type cannot be identified.
     * Clients must accept values added in future releases. Value enum: "created",
     * "line_item_added", "line_item_updated", "line_item_removed", "discount_applied",
     * "discount_removed", "tax_updated", "requested_tip_added", "requested_tip_updated",
     * "requested_tip_removed", "charge_added", "charge_updated", "charge_removed",
     * "charge_fulfillment_updated", "order_updated", "adjustment", "closed", "payment",
     * "payment_failed", "refund", "refund_failed", "checkout_session_created",
     * "checkout_session_expired", "checkout_session_invalidated", "fulfillment_created",
     * "fulfillment_updated", "fulfillment_state_changed".
     */
    "activity_type"?: "created"
        | "line_item_added"
        | "line_item_updated"
        | "line_item_removed"
        | "discount_applied"
        | "discount_removed"
        | "tax_updated"
        | "requested_tip_added"
        | "requested_tip_updated"
        | "requested_tip_removed"
        | "charge_added"
        | "charge_updated"
        | "charge_removed"
        | "charge_fulfillment_updated"
        | "order_updated"
        | "adjustment"
        | "closed"
        | "payment"
        | "payment_failed"
        | "refund"
        | "refund_failed"
        | "checkout_session_created"
        | "checkout_session_expired"
        | "checkout_session_invalidated"
        | "fulfillment_created"
        | "fulfillment_updated"
        | "fulfillment_state_changed"
        | (string & {});
    /**
     * Change to the order balance narrated by this row. Informational rows have amount 0. Do not
     * sum activity deltas to compute the order balance. Signed monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "balance_delta_money": MoneyValue;
    /** Related checkout session when activity_type points at checkout session lifecycle. */
    "checkout_session_id"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Human-readable Flint description. Provider-specific raw statuses and failure values are not
     * exposed here.
     */
    "description": string;
    /**
     * Related fulfillment for a fulfillment_created, fulfillment_updated, or
     * fulfillment_state_changed activity. Omitted when the row does not identify one fulfillment.
     */
    "fulfillment_id"?: string;
    /** Unique identifier for this activity, prefixed oact_. */
    "order_activity_id": string;
    /**
     * Related charge for a charge_added, charge_updated, charge_removed, or
     * charge_fulfillment_updated activity. Omitted when the row does not identify one charge.
     */
    "order_charge_id"?: string;
    /**
     * Related discount for a discount_applied or discount_removed activity. Omitted when the row
     * does not identify one discount.
     */
    "order_discount_id"?: string;
    /**
     * Related line item for a line_item_added, line_item_updated, or line_item_removed activity.
     * Omitted when the row does not identify one line item.
     */
    "order_line_item_id"?: string;
    /**
     * Related requested tip for a requested_tip_added, requested_tip_updated, or
     * requested_tip_removed activity. Omitted when the row does not identify one tip.
     */
    "order_tip_id"?: string;
    /** Related payment intent when activity_type points at a payment attempt or payment outcome. */
    "payment_intent_id"?: string;
    /**
     * Related refund when activity_type points at a refund outcome. Read the refund for the
     * authoritative outcome.
     */
    "refund_id"?: string;
    /**
     * Order balance after this activity in chronological time. This is context for reading the
     * log, not a reconciliation ledger. Signed monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "running_balance_money": MoneyValue;
};
/** A page of `OrderActivity` objects. */
export type OrderActivityListResponse = {
    /**
     *  [] (Value): {@link OrderActivity}. Read-only order history row for merchant timeline
     * rendering and debugging. The owning resource remains authoritative for state and money
     * movement.
     */
    "data": Array<OrderActivity>;
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
 * The amounts authorized and still capturable on an order's payments, with the authorization
 * expiry.
 */
export type OrderAuthorizationAmounts = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "authorized_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "capturable_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
};
/**
 * Tax settings for an order charge calculated by Flint or supplied by you, including the charge's
 * tax category and whether it is taxable.
 */
export type OrderCalculatedChargeTax = {
    /**
     * Tax category of the charge, which decides its automatic tax: shipping and delivery are taxed
     * at the general rate, and a taxable charge in another category fails with
     * AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Omitted, the charge takes delivery from delivery_fee,
     * shipping from shipping_fee, service_fee from service_fee, and handling from handling_fee;
     * other types take none. The default follows type and is not returned. Value enum:
     * "service_fee", "shipping", "delivery", "handling", "surcharge".
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | (string & {});
    "taxable"?: boolean;
};
/**
 * Tax settings for an order charge calculated by Flint or supplied by you, including the charge's
 * tax category and whether it is taxable.
 */
export type OrderCalculatedChargeTaxInput = {
    /**
     * Tax you calculated yourself for a line or charge: whether prices include tax, and the tax
     * components.
     */
    "calculation"?: TaxCalculationRequestInput;
    /**
     * Tax category of the charge, which decides its automatic tax: shipping and delivery are taxed
     * at the general rate, and a taxable charge in another category fails with
     * AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Omitted, the charge takes delivery from delivery_fee,
     * shipping from shipping_fee, service_fee from service_fee, and handling from handling_fee;
     * other types take none. The default follows type and is not returned. Value enum:
     * "service_fee", "shipping", "delivery", "handling", "surcharge".
     */
    "charge_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge";
    "taxable"?: boolean;
};
/**
 * Tax settings for an order line item calculated by Flint or supplied by you, including the line
 * item tax category and whether it is taxable.
 */
export type OrderCalculatedLineItemTax = {
    /**
     * Tax you calculated yourself for a line or charge: whether prices include tax, and the tax
     * components.
     */
    "calculation"?: TaxCalculationRequest;
    /**
     * Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods",
     * "software", "saas", "services", "professional_services", "food", "prepared_food",
     * "clothing", "medical_goods", "admission".
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
    "taxable"?: boolean;
};
/**
 * Tax settings for an order line item calculated by Flint or supplied by you, including the line
 * item tax category and whether it is taxable.
 */
export type OrderCalculatedLineItemTaxInput = {
    /**
     * Tax you calculated yourself for a line or charge: whether prices include tax, and the tax
     * components.
     */
    "calculation"?: TaxCalculationRequestInput;
    /**
     * Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods",
     * "software", "saas", "services", "professional_services", "food", "prepared_food",
     * "clothing", "medical_goods", "admission".
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
        | "admission";
    "taxable"?: boolean;
};
/** An additional charge applied to an order. */
export type OrderCharge = {
    /**
     * Fixed charge amount before charge discounts and tax. Percentage charges use percent instead.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Resolved charge amount after charge discounts and before additive tax. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "applied_money": MoneyValue;
    /** Value enum: "subtotal_pre_discount", "subtotal_post_discount". */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    "description"?: string;
    "fulfillment_id"?: string;
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    "name": string;
    "order_charge_id": string;
    /** multipleOf: 0.0001. */
    "percent"?: number;
    /**
     * Charge amount already refunded. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Tax settings for an order charge calculated by Flint or supplied by you, including the
     * charge's tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedChargeTax;
    /**
     * Tax calculated for the charge, including any tax already included in its price. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * Applied charge amount plus tax that is not already included in the price. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Value enum: "service_fee", "delivery_fee", "shipping_fee", "handling_fee", "packaging_fee",
     * "small_order_fee", "service_area_fee", "setup_fee", "installation_fee", "cleaning_fee",
     * "booking_fee", "reservation_fee", "ticket_fee", "fulfillment_fee", "restocking_fee",
     * "rush_fee", "other".
     */
    "type": "service_fee"
        | "delivery_fee"
        | "shipping_fee"
        | "handling_fee"
        | "packaging_fee"
        | "small_order_fee"
        | "service_area_fee"
        | "setup_fee"
        | "installation_fee"
        | "cleaning_fee"
        | "booking_fee"
        | "reservation_fee"
        | "ticket_fee"
        | "fulfillment_fee"
        | "restocking_fee"
        | "rush_fee"
        | "other"
        | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
};
/** The `amount` variant of `OrderChargeInput`. */
export type OrderChargeInputAmount = ({
    /**
     * Fixed charge amount in the order currency. The amount and every computed order amount must
     * not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation
     * above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input
     * field. Lower payment option limits can apply. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Value enum: "subtotal_pre_discount", "subtotal_post_discount". */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount" | (string & {});
    /** Selects a fixed amount or percentage calculation. Value enum: "amount". */
    "calculation_type": "amount" | (string & {});
    /** minLength: 1. maxLength: 2048. */
    "description"?: string;
    /** minLength: 1. */
    "fulfillment_id"?: string;
    /**
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /** multipleOf: 0.0001. */
    "percent"?: number;
    /**
     * Tax settings for an order charge calculated by Flint or supplied by you, including the
     * charge's tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedChargeTax;
    /**
     * Value enum: "service_fee", "delivery_fee", "shipping_fee", "handling_fee", "packaging_fee",
     * "small_order_fee", "service_area_fee", "setup_fee", "installation_fee", "cleaning_fee",
     * "booking_fee", "reservation_fee", "ticket_fee", "fulfillment_fee", "restocking_fee",
     * "rush_fee", "other".
     */
    "type": "service_fee"
        | "delivery_fee"
        | "shipping_fee"
        | "handling_fee"
        | "packaging_fee"
        | "small_order_fee"
        | "service_area_fee"
        | "setup_fee"
        | "installation_fee"
        | "cleaning_fee"
        | "booking_fee"
        | "reservation_fee"
        | "ticket_fee"
        | "fulfillment_fee"
        | "restocking_fee"
        | "rush_fee"
        | "other"
        | (string & {});
})
    & (({
    /** Value enum: "amount". */
    "calculation_type": "amount" | (string & {});
    /**
     * Fixed charge amount in the order currency. The amount and every computed order amount must
     * not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation
     * above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input
     * field. Lower payment option limits can apply. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
}));
/** The `amount` variant of `OrderChargeInput`. */
export type OrderChargeInputAmountInput = ({
    /**
     * Fixed charge amount in the order currency. The amount and every computed order amount must
     * not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation
     * above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input
     * field. Lower payment option limits can apply. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /** Value enum: "subtotal_pre_discount", "subtotal_post_discount". */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount";
    /** Selects a fixed amount or percentage calculation. Value enum: "amount". */
    "calculation_type": "amount";
    /** minLength: 1. maxLength: 2048. */
    "description"?: string;
    /** minLength: 1. */
    "fulfillment_id"?: string;
    /**
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /** multipleOf: 0.0001. */
    "percent"?: number;
    /**
     * Tax settings for an order charge calculated by Flint or supplied by you, including the
     * charge's tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedChargeTaxInput;
    /**
     * Value enum: "service_fee", "delivery_fee", "shipping_fee", "handling_fee", "packaging_fee",
     * "small_order_fee", "service_area_fee", "setup_fee", "installation_fee", "cleaning_fee",
     * "booking_fee", "reservation_fee", "ticket_fee", "fulfillment_fee", "restocking_fee",
     * "rush_fee", "other".
     */
    "type": "service_fee"
        | "delivery_fee"
        | "shipping_fee"
        | "handling_fee"
        | "packaging_fee"
        | "small_order_fee"
        | "service_area_fee"
        | "setup_fee"
        | "installation_fee"
        | "cleaning_fee"
        | "booking_fee"
        | "reservation_fee"
        | "ticket_fee"
        | "fulfillment_fee"
        | "restocking_fee"
        | "rush_fee"
        | "other";
})
    & (({
    /** Value enum: "amount". */
    "calculation_type": ("amount") & ("amount");
    /**
     * Fixed charge amount in the order currency. The amount and every computed order amount must
     * not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation
     * above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input
     * field. Lower payment option limits can apply. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
})
    & (({
    "percent"?: never;
})));
/** The `percent` variant of `OrderChargeInput`. */
export type OrderChargeInputPercent = ({
    /**
     * Fixed charge amount in the order currency. The amount and every computed order amount must
     * not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation
     * above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input
     * field. Lower payment option limits can apply. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Value enum: "subtotal_pre_discount", "subtotal_post_discount". */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount" | (string & {});
    /** Selects a fixed amount or percentage calculation. Value enum: "percent". */
    "calculation_type": "percent" | (string & {});
    /** minLength: 1. maxLength: 2048. */
    "description"?: string;
    /** minLength: 1. */
    "fulfillment_id"?: string;
    /**
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /** multipleOf: 0.0001. */
    "percent": number;
    /**
     * Tax settings for an order charge calculated by Flint or supplied by you, including the
     * charge's tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedChargeTax;
    /**
     * Value enum: "service_fee", "delivery_fee", "shipping_fee", "handling_fee", "packaging_fee",
     * "small_order_fee", "service_area_fee", "setup_fee", "installation_fee", "cleaning_fee",
     * "booking_fee", "reservation_fee", "ticket_fee", "fulfillment_fee", "restocking_fee",
     * "rush_fee", "other".
     */
    "type": "service_fee"
        | "delivery_fee"
        | "shipping_fee"
        | "handling_fee"
        | "packaging_fee"
        | "small_order_fee"
        | "service_area_fee"
        | "setup_fee"
        | "installation_fee"
        | "cleaning_fee"
        | "booking_fee"
        | "reservation_fee"
        | "ticket_fee"
        | "fulfillment_fee"
        | "restocking_fee"
        | "rush_fee"
        | "other"
        | (string & {});
})
    & (({
    /** Value enum: "percent". */
    "calculation_type": "percent" | (string & {});
    /** multipleOf: 0.0001. */
    "percent": number;
}));
/** The `percent` variant of `OrderChargeInput`. */
export type OrderChargeInputPercentInput = ({
    /**
     * Fixed charge amount in the order currency. The amount and every computed order amount must
     * not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation
     * above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input
     * field. Lower payment option limits can apply. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /** Value enum: "subtotal_pre_discount", "subtotal_post_discount". */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount";
    /** Selects a fixed amount or percentage calculation. Value enum: "percent". */
    "calculation_type": "percent";
    /** minLength: 1. maxLength: 2048. */
    "description"?: string;
    /** minLength: 1. */
    "fulfillment_id"?: string;
    /**
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /** multipleOf: 0.0001. */
    "percent": number;
    /**
     * Tax settings for an order charge calculated by Flint or supplied by you, including the
     * charge's tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedChargeTaxInput;
    /**
     * Value enum: "service_fee", "delivery_fee", "shipping_fee", "handling_fee", "packaging_fee",
     * "small_order_fee", "service_area_fee", "setup_fee", "installation_fee", "cleaning_fee",
     * "booking_fee", "reservation_fee", "ticket_fee", "fulfillment_fee", "restocking_fee",
     * "rush_fee", "other".
     */
    "type": "service_fee"
        | "delivery_fee"
        | "shipping_fee"
        | "handling_fee"
        | "packaging_fee"
        | "small_order_fee"
        | "service_area_fee"
        | "setup_fee"
        | "installation_fee"
        | "cleaning_fee"
        | "booking_fee"
        | "reservation_fee"
        | "ticket_fee"
        | "fulfillment_fee"
        | "restocking_fee"
        | "rush_fee"
        | "other";
})
    & (({
    /** Value enum: "percent". */
    "calculation_type": ("percent") & ("percent");
    /** multipleOf: 0.0001. */
    "percent": number;
})
    & (({
    "amount_money"?: never;
})));
/**
 * A charge you add to an order, such as a delivery or service fee, set as a fixed amount or a
 * percentage with its tax settings.
 */
export type OrderChargeRequest = ({
    /**
     * Fixed charge amount in the order currency. The amount and every computed order amount must
     * not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation
     * above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input
     * field. Lower payment option limits can apply. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Value enum: "subtotal_pre_discount", "subtotal_post_discount". */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount" | (string & {});
    /** Selects a fixed amount or percentage calculation. Value enum: "amount", "percent". */
    "calculation_type": "amount" | "percent" | (string & {});
    /** minLength: 1. maxLength: 2048. */
    "description"?: string;
    /** minLength: 1. */
    "fulfillment_id"?: string;
    /**
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /** multipleOf: 0.0001. */
    "percent"?: number;
    /**
     * Tax settings for an order charge calculated by Flint or supplied by you, including the
     * charge's tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedChargeTax;
    /**
     * Value enum: "service_fee", "delivery_fee", "shipping_fee", "handling_fee", "packaging_fee",
     * "small_order_fee", "service_area_fee", "setup_fee", "installation_fee", "cleaning_fee",
     * "booking_fee", "reservation_fee", "ticket_fee", "fulfillment_fee", "restocking_fee",
     * "rush_fee", "other".
     */
    "type": "service_fee"
        | "delivery_fee"
        | "shipping_fee"
        | "handling_fee"
        | "packaging_fee"
        | "small_order_fee"
        | "service_area_fee"
        | "setup_fee"
        | "installation_fee"
        | "cleaning_fee"
        | "booking_fee"
        | "reservation_fee"
        | "ticket_fee"
        | "fulfillment_fee"
        | "restocking_fee"
        | "rush_fee"
        | "other"
        | (string & {});
})
    & ((Exclude<OrderChargeInputAmount & object, readonly unknown[]>)
    | (Exclude<OrderChargeInputPercent & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * A charge you add to an order, such as a delivery or service fee, set as a fixed amount or a
 * percentage with its tax settings.
 */
export type OrderChargeRequestInput = ({
    /**
     * Fixed charge amount in the order currency. The amount and every computed order amount must
     * not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation
     * above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input
     * field. Lower payment option limits can apply. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /** Value enum: "subtotal_pre_discount", "subtotal_post_discount". */
    "calculation_basis"?: "subtotal_pre_discount" | "subtotal_post_discount";
    /** Selects a fixed amount or percentage calculation. Value enum: "amount", "percent". */
    "calculation_type": "amount" | "percent";
    /** minLength: 1. maxLength: 2048. */
    "description"?: string;
    /** minLength: 1. */
    "fulfillment_id"?: string;
    /**
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /** multipleOf: 0.0001. */
    "percent"?: number;
    /**
     * Tax settings for an order charge calculated by Flint or supplied by you, including the
     * charge's tax category and whether it is taxable.
     */
    "tax"?: OrderCalculatedChargeTaxInput;
    /**
     * Value enum: "service_fee", "delivery_fee", "shipping_fee", "handling_fee", "packaging_fee",
     * "small_order_fee", "service_area_fee", "setup_fee", "installation_fee", "cleaning_fee",
     * "booking_fee", "reservation_fee", "ticket_fee", "fulfillment_fee", "restocking_fee",
     * "rush_fee", "other".
     */
    "type": "service_fee"
        | "delivery_fee"
        | "shipping_fee"
        | "handling_fee"
        | "packaging_fee"
        | "small_order_fee"
        | "service_area_fee"
        | "setup_fee"
        | "installation_fee"
        | "cleaning_fee"
        | "booking_fee"
        | "reservation_fee"
        | "ticket_fee"
        | "fulfillment_fee"
        | "restocking_fee"
        | "rush_fee"
        | "other";
})
    & ((Exclude<OrderChargeInputAmountInput & object, readonly unknown[]>)
    | (Exclude<OrderChargeInputPercentInput & object, readonly unknown[]>));
/** An externally calculated tax you assign to one order charge. */
export type OrderChargeTaxAssignment = {
    /**
     * Tax you calculated yourself for a line or charge: whether prices include tax, and the tax
     * components.
     */
    "calculation": TaxCalculationRequest;
    /** minLength: 1. */
    "order_charge_id": string;
};
/** An externally calculated tax you assign to one order charge. */
export type OrderChargeTaxAssignmentInput = {
    /**
     * Tax you calculated yourself for a line or charge: whether prices include tax, and the tax
     * components.
     */
    "calculation": TaxCalculationRequestModelInput;
    /** minLength: 1. */
    "order_charge_id": string;
};
export type OrderClosedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.closed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.closed";
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
    "event_type": "order.closed";
});
/**
 * The `order.closed` webhook payload for the `installed_merchants` event source. Fields shared by
 * partner webhook payloads.
 */
export type OrderClosedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data"?: {
        /** A customer's purchase and its payment and fulfillment progress. */
        "object": Order;
    };
    /** Value enum: "order.closed". */
    "event_type"?: "order.closed";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `order.closed` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type OrderClosedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data"?: {
        /** A customer's purchase and its payment and fulfillment progress. */
        "object": Order;
    };
    /** Value enum: "order.closed". */
    "event_type"?: "order.closed";
});
export type OrderCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Order;
    };
    "event_type"?: "order.created";
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
    "event_type": "order.created";
});
/**
 * The `order.created` webhook payload for the `installed_merchants` event source. Fields shared by
 * partner webhook payloads.
 */
export type OrderCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data"?: {
        /** A customer's purchase and its payment and fulfillment progress. */
        "object": Order;
    };
    /** Value enum: "order.created". */
    "event_type"?: "order.created";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `order.created` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type OrderCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "data"?: {
        /** A customer's purchase and its payment and fulfillment progress. */
        "object": Order;
    };
    /** Value enum: "order.created". */
    "event_type"?: "order.created";
});
/** Where an order is delivered: the address, the recipient, and where the destination came from. */
export type OrderDeliveryDestination = {
    /**
     * A postal address. Every address has country. Addresses Flint checked as complete (customer
     * and saved addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     */
    "address": Address;
    /** Delivery selection that controls this destination, when checkout collected it. */
    "delivery_selection_id"?: string;
    /** Time payment froze this destination. Format: date-time. */
    "frozen_at"?: string;
    /** The name and phone number of the person receiving an order delivery. */
    "recipient"?: OrderDeliveryDestinationRecipient;
    /** Value enum: "delivery_selection", "api", "dashboard". */
    "source": "delivery_selection" | "api" | "dashboard" | (string & {});
};
/** The name and phone number of the person receiving an order delivery. */
export type OrderDeliveryDestinationRecipient = {
    /** maxLength: 255. */
    "name"?: string;
    /** maxLength: 30. */
    "phone"?: string;
};
/**
 * The recipient name and phone you supply for an order delivery. Send null to clear a field.
 * minProperties: 1.
 */
export type OrderDeliveryDestinationRecipientRequest = {
    /** Send null to clear it. minLength: 1. maxLength: 255. */
    "name"?: string | null;
    /** Send null to clear it. minLength: 1. maxLength: 30. */
    "phone"?: string | null;
};
