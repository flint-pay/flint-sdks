import type { KeyObject, JsonWebKey } from "node:crypto";
import type { Client, CredentialProvider } from "../index.js";

/** Flint's API origin, which is also the client assertion audience. */
export declare const DEFAULT_BASE_URL: "https://api.withflintpay.com";
/** RFC 7523 client assertion type for private_key_jwt and workload identity assertions. */
export declare const CLIENT_ASSERTION_TYPE: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";

export interface AuthorizeUrlOptions {
  /** Your partner app's `client_id`. */
  clientId: string;
  /** Exactly one of the app's registered redirect URIs. */
  redirectUri: string;
  /** Each mode is a separate grant. */
  mode: "test" | "live";
  /** Permission IDs from your manifest. Omit to request the app's default permissions. */
  scope?: string | readonly string[];
  /** With `mode: "test"` only: the sandbox to install into. */
  sandboxId?: string;
  /** A merchant to preselect when the person can access several. */
  merchantId?: string;
  /** Defaults to a new random value from `createState()`. */
  state?: string;
  /** Defaults to a new random value from `createCodeVerifier()`. */
  codeVerifier?: string;
  /** Defaults to `https://api.withflintpay.com`. */
  baseUrl?: string;
}
export interface AuthorizeUrl {
  /** Redirect the merchant's browser here. */
  url: string;
  /** Store with this attempt and compare on the callback. */
  state: string;
  /** Store with this attempt and send to `exchangeCode`. Keep it server-side. */
  codeVerifier: string;
}
/** Build the browser URL for Flint's install consent screen. Makes no request. */
export declare function buildAuthorizeUrl(options: AuthorizeUrlOptions): AuthorizeUrl;
/** A new RFC 7636 code verifier: 43 base64url characters from 32 random bytes. */
export declare function createCodeVerifier(): string;
/** A new random `state`: 43 base64url characters from 32 random bytes. */
export declare function createState(): string;
/** The S256 `code_challenge` for a verifier. */
export declare function codeChallenge(codeVerifier: string): string;

/** A callback OAuth error, a `state_mismatch`, or an `invalid_request` callback. */
export declare class AuthorizeCallbackError extends Error {
  readonly name: "AuthorizeCallbackError";
  /** OAuth `error`, such as `access_denied`, or `state_mismatch`. */
  readonly error: string;
  readonly errorDescription?: string;
  constructor(error: string, errorDescription?: string);
}
export interface AuthorizeCallback {
  code: string;
  mode?: string;
}
/** Verify `state`, surface callback errors, and return the authorization code. */
export declare function parseAuthorizeCallback(
  callback: string | URL | URLSearchParams,
  expected: { state: string },
): AuthorizeCallback;

/**
 * Supplies `client_assertion` values for one partner app client ID. Use
 * `privateKeyJwt` for a registered key, or return your workload identity
 * provider's token from `getAssertion` for a `workload_identity` credential.
 */
export interface ClientAssertionProvider {
  readonly clientId: string;
  getAssertion(): string | Promise<string>;
}
export interface PrivateKeyJwtOptions {
  clientId: string;
  /** A PEM private key, a private KeyObject or a private JWK. */
  privateKey: string | KeyObject | JsonWebKey;
  algorithm: "ES256" | "ES384" | "PS256" | "RS256" | "EdDSA";
  /** The registered or published key's `kid`, when it has one. */
  keyId?: string;
  /** Defaults to `https://api.withflintpay.com`. */
  audience?: string;
  /** Seconds until `exp`, from 1 to 300. Defaults to 120. */
  lifetimeSeconds?: number;
}
/** Sign a new RFC 7523 JWT for every token and revoke request. */
export declare function privateKeyJwt(options: PrivateKeyJwtOptions): ClientAssertionProvider;
/** `client_id`, `client_assertion_type` and a fresh `client_assertion` for any grant. */
export declare function clientAuthentication(clientAssertion: ClientAssertionProvider): Promise<{
  client_id: string;
  client_assertion_type: typeof CLIENT_ASSERTION_TYPE;
  client_assertion: string;
}>;

export interface ExchangeCodeParams {
  code: string;
  /** The redirect URI sent to authorize. */
  redirectUri: string;
  codeVerifier: string;
  clientAssertion: ClientAssertionProvider;
}
/** Exchange the callback's code with a fresh client assertion. */
export declare function exchangeCode(
  client: Client,
  params: ExchangeCodeParams,
  options?: Parameters<Client["oauth"]["exchangeToken"]>[1],
): ReturnType<Client["oauth"]["exchangeToken"]>;

export interface RevokeTokenParams {
  token: string;
  tokenTypeHint?: "access_token" | "refresh_token";
  clientAssertion: ClientAssertionProvider;
}
/** Revoke a partner token (RFC 7009) with a fresh client assertion. */
export declare function revokeToken(
  client: Client,
  params: RevokeTokenParams,
  options?: Parameters<Client["oauth"]["revokeToken"]>[1],
): ReturnType<Client["oauth"]["revokeToken"]>;

/** A cached partner app token source; pass it as a client's `token`. */
export interface PartnerAppCredentials extends CredentialProvider {
  readonly mode: "test" | "live";
  /** Set for merchant-bound tokens. */
  readonly merchantId?: string;
  getCredential(): Promise<{ value: string; expiresAt: Date }>;
  /** Drops the cached token; the SDK calls this after a 401 on a replay-safe request and retries once. */
  invalidate(): void;
}
export interface PartnerAppTokensOptions {
  /** Authenticates every mint with a fresh assertion. */
  clientAssertion: ClientAssertionProvider;
  /** Each token is for one mode. */
  mode: "test" | "live";
  /** Mint again this many seconds before expiry, from 0 to 600; at most half the lifetime. Defaults to 60. */
  refreshBeforeSeconds?: number;
}
export interface PartnerAppTokens {
  readonly mode: "test" | "live";
  /** A merchant-bound token provider; requests with it need no `Flint-Merchant-Id`. Reused per merchant. */
  forMerchant(merchantId: string): PartnerAppCredentials;
  /** An app-level token provider; each request must name the merchant in `Flint-Merchant-Id`. */
  app(): PartnerAppCredentials;
}
/** Mint and cache 900-second partner app tokens with the `client_credentials` grant. */
export declare function partnerAppTokens(client: Client, options: PartnerAppTokensOptions): PartnerAppTokens;
