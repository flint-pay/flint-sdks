// Partner app OAuth helpers for Flint installs. Handwritten; regeneration keeps
// this file. See ../guides/partner-oauth.md and
// https://developers.withflintpay.com/docs/guides/partner-app-installs.
import {
  KeyObject,
  constants,
  createHash,
  createPrivateKey,
  randomBytes,
  randomUUID,
  sign,
  timingSafeEqual,
} from "node:crypto";
import { errors } from "../index.js";

/** Flint's API origin, which is also the client assertion audience. */
export const DEFAULT_BASE_URL = "https://api.withflintpay.com";
/** RFC 7523 client assertion type for private_key_jwt and workload identity assertions. */
export const CLIENT_ASSERTION_TYPE =
  "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";

const VERIFIER = /^[A-Za-z0-9._~-]{43,128}$/;
const PERMISSION = /^[^\s,]+$/;
const JWT = /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]*$/;
const ALGORITHMS = ["ES256", "ES384", "PS256", "RS256", "EdDSA"];
const AUTHORIZE_OPTIONS = new Set([
  "clientId",
  "redirectUri",
  "mode",
  "scope",
  "sandboxId",
  "merchantId",
  "state",
  "codeVerifier",
  "baseUrl",
]);

const fail = (param, message, code = "INVALID_VALUE") => {
  throw new errors.InvalidInputError(message, {
    code: "INVALID_REQUEST",
    param,
    details: [{ code, param }],
  });
};
const record = (value, param) => {
  if (!value || typeof value !== "object" || Array.isArray(value))
    fail(param, `${param} must be an object`);
  return value;
};
const text = (value, param, optional = false) => {
  if (value === undefined || value === null || value === "") {
    if (optional && value === undefined) return undefined;
    fail(param, `${param} is required`, "REQUIRED");
  }
  if (typeof value !== "string" || /[\x00-\x1f\x7f]/.test(value))
    fail(param, `${param} must be a string without control characters`);
  return value;
};
// RFC 3986 percent-encoding, matching the SDK's query parameters.
const encode = (value) =>
  encodeURIComponent(value).replace(
    /[!'()*]/g,
    (c) => "%" + c.charCodeAt(0).toString(16).toUpperCase(),
  );
const base64url = (value) => Buffer.from(value).toString("base64url");
const digest = (value) => createHash("sha256").update(value, "utf8").digest();

/** A new RFC 7636 code verifier: 32 random bytes as 43 base64url characters. */
export function createCodeVerifier() {
  return randomBytes(32).toString("base64url");
}

/** A new unguessable `state` value: 32 random bytes as 43 base64url characters. */
export function createState() {
  return randomBytes(32).toString("base64url");
}

/** The S256 `code_challenge` for a verifier: unpadded base64url SHA-256. */
export function codeChallenge(codeVerifier) {
  if (typeof codeVerifier !== "string" || !VERIFIER.test(codeVerifier))
    fail(
      "codeVerifier",
      'codeVerifier must be 43 to 128 characters from A-Z, a-z, 0-9, "-", ".", "_" and "~"',
    );
  return createHash("sha256").update(codeVerifier, "ascii").digest("base64url");
}

function apiUrl(baseUrl, path) {
  let base;
  try {
    base = new URL(text(baseUrl, "baseUrl"));
  } catch (error) {
    if (error instanceof errors.InvalidInputError) throw error;
    fail("baseUrl", "baseUrl must be an absolute URL");
  }
  const loopback = ["localhost", "127.0.0.1", "[::1]"].includes(base.hostname);
  if (
    !(base.protocol === "https:" || (base.protocol === "http:" && loopback)) ||
    base.username ||
    base.password ||
    base.search ||
    base.hash
  )
    fail(
      "baseUrl",
      "baseUrl must be an https URL (or http on loopback) without credentials, query or fragment",
    );
  return base.origin + base.pathname.replace(/\/$/, "") + path;
}

/**
 * Build the URL that sends a merchant's browser to Flint's install consent screen.
 * No request is made. Store `state` and `codeVerifier` with this attempt; the
 * callback must return the same `state`, and `exchangeCode` needs the verifier.
 */
export function buildAuthorizeUrl(options) {
  record(options, "options");
  for (const key of Object.keys(options))
    if (!AUTHORIZE_OPTIONS.has(key))
      fail(key, `${key} is not an authorize URL option`, "UNKNOWN_FIELD");
  const clientId = text(options.clientId, "clientId");
  const redirectUri = text(options.redirectUri, "redirectUri");
  let redirect;
  try {
    redirect = new URL(redirectUri);
  } catch {
    fail("redirectUri", "redirectUri must be an absolute URL");
  }
  if (redirectUri.includes("#")) fail("redirectUri", "redirectUri must not include a fragment");
  if (options.mode !== "test" && options.mode !== "live")
    fail(
      "mode",
      options.mode === undefined ? "mode is required" : 'mode must be "test" or "live"',
      options.mode === undefined ? "REQUIRED" : "INVALID_VALUE",
    );
  const sandboxId = text(options.sandboxId, "sandboxId", true);
  if (sandboxId !== undefined && options.mode !== "test")
    fail("sandboxId", 'sandboxId is allowed only with mode "test"');
  const merchantId = text(options.merchantId, "merchantId", true);
  // Permission IDs, separated by single spaces (never commas). Omit for the defaults.
  let scope;
  if (Array.isArray(options.scope)) {
    if (!options.scope.length) fail("scope", "scope must list at least one permission ID");
    options.scope.forEach((id, index) => {
      if (!PERMISSION.test(text(id, `scope[${index}]`)))
        fail(`scope[${index}]`, "a permission ID contains no spaces or commas");
    });
    scope = options.scope.join(" ");
  } else if (options.scope !== undefined) {
    scope = text(options.scope, "scope");
    if (!scope.split(" ").every((id) => PERMISSION.test(id)))
      fail("scope", "separate permission IDs with single spaces, not commas");
  }
  const state = text(options.state, "state", true) ?? createState();
  const codeVerifier = text(options.codeVerifier, "codeVerifier", true) ?? createCodeVerifier();
  const challenge = codeChallenge(codeVerifier);
  const query = [
    ["response_type", "code"],
    ["client_id", clientId],
    ["redirect_uri", redirectUri],
    ["mode", options.mode],
    ["state", state],
    ...(scope === undefined ? [] : [["scope", scope]]),
    ...(sandboxId === undefined ? [] : [["sandbox_id", sandboxId]]),
    ...(merchantId === undefined ? [] : [["merchant_id", merchantId]]),
    ["code_challenge", challenge],
    ["code_challenge_method", "S256"],
  ]
    .map(([name, value]) => name + "=" + encode(value))
    .join("&");
  return {
    url: apiUrl(options.baseUrl ?? DEFAULT_BASE_URL, "/v1/oauth/authorize") + "?" + query,
    state,
    codeVerifier,
  };
}

/** The callback reported an OAuth error, or did not match this authorization attempt. */
export class AuthorizeCallbackError extends Error {
  constructor(error, errorDescription) {
    super(errorDescription ? `${error}: ${errorDescription}` : error);
    this.name = "AuthorizeCallbackError";
    this.error = error;
    if (errorDescription !== undefined) this.errorDescription = errorDescription;
  }
}

/**
 * Check a callback against the `state` you stored, then return its code. Throws
 * AuthorizeCallbackError for a missing or different state (`state_mismatch`), an
 * OAuth error such as `access_denied`, or a repeated or missing parameter.
 */
export function parseAuthorizeCallback(callback, expected) {
  let params;
  if (callback instanceof URLSearchParams) params = callback;
  else if (callback instanceof URL) params = callback.searchParams;
  else {
    const value = text(callback, "callback");
    try {
      params = /^[?]/.test(value)
        ? new URLSearchParams(value)
        : new URL(value, "http://callback.invalid").searchParams;
    } catch {
      fail("callback", "callback must be a URL, a path with a query, or a query string");
    }
  }
  const state = text(record(expected, "expected").state, "state");
  for (const name of ["state", "code", "mode", "error", "error_description"])
    if (params.getAll(name).length > 1)
      throw new AuthorizeCallbackError("invalid_request", `${name} is repeated`);
  const received = params.get("state");
  if (received === null || !timingSafeEqual(digest(received), digest(state)))
    throw new AuthorizeCallbackError(
      "state_mismatch",
      "The callback state does not match this authorization attempt",
    );
  const error = params.get("error");
  if (error !== null)
    throw new AuthorizeCallbackError(error, params.get("error_description") ?? undefined);
  const code = params.get("code");
  if (!code) throw new AuthorizeCallbackError("invalid_request", "The callback has no code");
  const mode = params.get("mode");
  return mode === null ? { code } : { code, mode };
}

function signingKey(privateKey, algorithm) {
  let key;
  try {
    key =
      privateKey instanceof KeyObject
        ? privateKey
        : typeof privateKey === "string"
          ? createPrivateKey(privateKey)
          : createPrivateKey({ key: record(privateKey, "privateKey"), format: "jwk" });
  } catch (error) {
    if (error instanceof errors.InvalidInputError) throw error;
    fail("privateKey", "privateKey must be a PEM private key, a private KeyObject or a private JWK");
  }
  if (key.type !== "private")
    fail("privateKey", "privateKey must be a private key, not a public key");
  const type = key.asymmetricKeyType;
  const details = key.asymmetricKeyDetails ?? {};
  const valid =
    algorithm === "ES256"
      ? type === "ec" && details.namedCurve === "prime256v1"
      : algorithm === "ES384"
        ? type === "ec" && details.namedCurve === "secp384r1"
        : algorithm === "EdDSA"
          ? type === "ed25519"
          : type === "rsa" &&
            details.modulusLength >= 2048 &&
            details.modulusLength <= 4096 &&
            details.publicExponent === 65537n;
  if (!valid)
    fail(
      "privateKey",
      `${algorithm} needs ${
        algorithm === "ES256"
          ? "an EC P-256 key"
          : algorithm === "ES384"
            ? "an EC P-384 key"
            : algorithm === "EdDSA"
              ? "an Ed25519 key"
              : "an RSA key of 2048 to 4096 bits with exponent 65537"
      }`,
    );
  return key;
}

/**
 * A private_key_jwt client assertion provider (RFC 7523). Each call signs a new
 * JWT with `iss` and `sub` set to the client ID, a single-string `aud`, a unique
 * `jti` and an `exp` `lifetimeSeconds` (default 120, at most 300) ahead, without `iat`.
 * Flint accepts each signed assertion once.
 */
export function privateKeyJwt(options) {
  record(options, "options");
  const clientId = text(options.clientId, "clientId");
  if (!ALGORITHMS.includes(options.algorithm))
    fail("algorithm", `algorithm must be one of ${ALGORITHMS.join(", ")}`);
  const algorithm = options.algorithm;
  const key = signingKey(options.privateKey, algorithm);
  const keyId = text(options.keyId, "keyId", true);
  const audience = text(options.audience ?? DEFAULT_BASE_URL, "audience");
  const lifetime = options.lifetimeSeconds ?? 120;
  if (!Number.isSafeInteger(lifetime) || lifetime < 1 || lifetime > 300)
    fail("lifetimeSeconds", "lifetimeSeconds must be an integer from 1 to 300");
  const header = base64url(
    JSON.stringify({ alg: algorithm, typ: "JWT", ...(keyId === undefined ? {} : { kid: keyId }) }),
  );
  const provider = {
    clientId,
    async getAssertion() {
      const now = Math.floor(Date.now() / 1000);
      const claims = base64url(
        // No iat: Flint rejects an iat after its own clock, so a slightly fast clock would fail.
        JSON.stringify({
          iss: clientId,
          sub: clientId,
          aud: audience,
          exp: now + lifetime,
          jti: randomUUID(),
        }),
      );
      const input = Buffer.from(header + "." + claims, "ascii");
      const signature =
        algorithm === "ES256" || algorithm === "ES384"
          ? sign(algorithm === "ES256" ? "sha256" : "sha384", input, {
              key,
              dsaEncoding: "ieee-p1363",
            })
          : algorithm === "PS256"
            ? sign("sha256", input, {
                key,
                padding: constants.RSA_PKCS1_PSS_PADDING,
                saltLength: 32,
              })
            : sign(algorithm === "EdDSA" ? null : "sha256", input, key);
      return header + "." + claims + "." + signature.toString("base64url");
    },
    toJSON: () => ({ clientId, algorithm, ...(keyId === undefined ? {} : { keyId }) }),
    [Symbol.for("nodejs.util.inspect.custom")]: () => provider.toJSON(),
  };
  return Object.freeze(provider);
}

/**
 * The token and revoke form fields for a client assertion: `client_id`,
 * `client_assertion_type` and a fresh `client_assertion`. Works with any grant.
 */
export async function clientAuthentication(clientAssertion) {
  if (!clientAssertion || typeof clientAssertion.getAssertion !== "function")
    fail("clientAssertion", "clientAssertion must have clientId and getAssertion()");
  const clientId = text(clientAssertion.clientId, "clientAssertion.clientId");
  let assertion;
  try {
    assertion = await clientAssertion.getAssertion();
  } catch {
    // Provider failures can include key material or tokens; keep them out of the error.
    throw new errors.ConfigurationError("Client assertion provider failed", {
      code: "credential_provider_failed",
    });
  }
  if (typeof assertion !== "string" || assertion.length > 8192 || !JWT.test(assertion))
    throw new errors.ConfigurationError(
      "Client assertion provider returned no compact JWT of at most 8192 characters",
      { code: "credential_invalid" },
    );
  return {
    client_id: clientId,
    client_assertion_type: CLIENT_ASSERTION_TYPE,
    client_assertion: assertion,
  };
}

/**
 * Exchange an authorization code from the install callback, with a fresh client
 * assertion. Codes expire after 5 minutes and work once; a failed exchange
 * needs a new authorization.
 */
export async function exchangeCode(client, params, options) {
  record(params, "params");
  const code = text(params.code, "code");
  const redirectUri = text(params.redirectUri, "redirectUri");
  codeChallenge(params.codeVerifier);
  return client.oauth.exchangeToken(
    {
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
      code_verifier: params.codeVerifier,
      ...(await clientAuthentication(params.clientAssertion)),
    },
    options,
  );
}

/** Revoke a partner token (RFC 7009) with a fresh client assertion. */
export async function revokeToken(client, params, options) {
  record(params, "params");
  const token = text(params.token, "token");
  const hint = text(params.tokenTypeHint, "tokenTypeHint", true);
  return client.oauth.revokeToken(
    {
      token,
      ...(hint === undefined ? {} : { token_type_hint: hint }),
      ...(await clientAuthentication(params.clientAssertion)),
    },
    options,
  );
}
