import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { generateKeyPairSync, verify, constants, createPublicKey } from "node:crypto";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { Client, errors } from "../node/index.js";
import {
  AuthorizeCallbackError,
  CLIENT_ASSERTION_TYPE,
  buildAuthorizeUrl,
  clientAuthentication,
  codeChallenge,
  createCodeVerifier,
  createState,
  exchangeCode,
  parseAuthorizeCallback,
  privateKeyJwt,
  revokeToken,
} from "../node/custom/partner-oauth.js";

const root = fileURLToPath(new URL("..", import.meta.url));
const dir = mkdtempSync(join(tmpdir(), "flint-partner-oauth-"));
test.after(() => rmSync(dir, { recursive: true, force: true }));

// RFC 7636 Appendix B.
const rfcVerifier = "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk";
const rfcChallenge = "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM";
// The example in the partner app installs guide, which uses the RFC 7636 verifier.
const guideUrl =
  "https://api.withflintpay.com/v1/oauth/authorize?response_type=code&client_id=fpc_0123456789abcdef" +
  "&redirect_uri=https%3A%2F%2Fexample.com%2Fflint%2Foauth%2Fcallback&mode=test&state=8tQ2mZxv1pL0aR7c" +
  "&scope=manage_orders%20read_customers&code_challenge=E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM" +
  "&code_challenge_method=S256";
const guideOptions = {
  clientId: "fpc_0123456789abcdef",
  redirectUri: "https://example.com/flint/oauth/callback",
  mode: "test",
  state: "8tQ2mZxv1pL0aR7c",
  scope: ["manage_orders", "read_customers"],
  codeVerifier: rfcVerifier,
};
const base64url = /^[A-Za-z0-9_-]{43}$/;

// Run a PHP script with the generated package and the custom helpers loaded.
function php(body, ...args) {
  const file = join(dir, `script-${Math.random().toString(36).slice(2)}.php`);
  writeFileSync(
    file,
    `<?php
declare(strict_types=1);
require ${JSON.stringify(join(root, "php/src/autoload.php"))};
foreach (['ClientAssertionProvider', 'AuthorizeUrl', 'AuthorizeCallbackError', 'OAuth', 'PrivateKeyJwt'] as $class) {
    require ${JSON.stringify(join(root, "php/custom/Partner"))} . '/' . $class . '.php';
}
use Flint\\Partner\\{OAuth, PrivateKeyJwt, AuthorizeCallbackError, ClientAssertionProvider};
function attempt(callable $call): array {
    try { return ['ok' => $call()]; }
    catch (\\Flint\\SdkError $e) { return ['error' => (new \\ReflectionClass($e))->getShortName(), 'code' => $e->getCode(), 'param' => $e->param]; }
    catch (AuthorizeCallbackError $e) { return ['callbackError' => $e->error, 'description' => $e->errorDescription]; }
}
${body}
`,
  );
  return JSON.parse(execFileSync("php", [file, ...args], { cwd: root, encoding: "utf8" }));
}
const rejects = (call, param, name = "InvalidInputError") =>
  assert.throws(call, (error) => {
    assert.equal(error.name, name);
    if (param !== undefined) assert.equal(error.param, param);
    return true;
  });

test("PKCE challenges match RFC 7636 and reject invalid verifiers in both SDKs", () => {
  assert.equal(codeChallenge(rfcVerifier), rfcChallenge);
  const verifier = createCodeVerifier();
  assert.match(verifier, base64url);
  assert.notEqual(createCodeVerifier(), verifier);
  assert.match(codeChallenge(verifier), base64url);
  const invalid = ["a".repeat(42), "a".repeat(129), rfcVerifier.slice(0, 42) + "+", ""];
  for (const value of invalid) rejects(() => codeChallenge(value), "codeVerifier");
  assert.equal(codeChallenge("a".repeat(128)).length, 43);
  const result = php(
    `echo json_encode([
        'rfc' => OAuth::codeChallenge($argv[1]),
        'verifier' => OAuth::createCodeVerifier(),
        'node' => OAuth::codeChallenge($argv[2]),
        'invalid' => array_map(fn($v) => attempt(fn() => OAuth::codeChallenge($v)), json_decode($argv[3], true)),
    ]);`,
    rfcVerifier,
    verifier,
    JSON.stringify(invalid),
  );
  assert.equal(result.rfc, rfcChallenge);
  assert.match(result.verifier, base64url);
  assert.equal(result.node, codeChallenge(verifier));
  assert.deepEqual(
    result.invalid,
    invalid.map(() => ({ error: "InvalidInputError", code: "INVALID_REQUEST", param: "codeVerifier" })),
  );
});

test("authorize URLs match the partner guide and validate inputs in both SDKs", () => {
  const built = buildAuthorizeUrl(guideOptions);
  assert.deepEqual(built, { url: guideUrl, state: guideOptions.state, codeVerifier: rfcVerifier });
  // Defaults: a fresh state and verifier whose challenge is in the URL.
  const fresh = buildAuthorizeUrl({
    clientId: "fpc_synthetic",
    redirectUri: "https://example.com/cb?tenant=a b&x=1",
    mode: "live",
    merchantId: "mer_synthetic",
    baseUrl: "https://api.example.invalid/",
  });
  assert.match(fresh.state, base64url);
  assert.match(fresh.codeVerifier, base64url);
  assert.notEqual(fresh.state, fresh.codeVerifier);
  const url = new URL(fresh.url);
  assert.equal(url.origin + url.pathname, "https://api.example.invalid/v1/oauth/authorize");
  assert.deepEqual(Object.fromEntries(url.searchParams), {
    response_type: "code",
    client_id: "fpc_synthetic",
    redirect_uri: "https://example.com/cb?tenant=a b&x=1",
    mode: "live",
    state: fresh.state,
    merchant_id: "mer_synthetic",
    code_challenge: codeChallenge(fresh.codeVerifier),
    code_challenge_method: "S256",
  });
  assert.match(fresh.url, /redirect_uri=https%3A%2F%2Fexample.com%2Fcb%3Ftenant%3Da%20b%26x%3D1&/);
  const sandbox = buildAuthorizeUrl({
    ...guideOptions,
    scope: "manage_orders",
    sandboxId: "test_synthetic",
    baseUrl: "http://127.0.0.1:8080",
  });
  assert.equal(
    sandbox.url,
    "http://127.0.0.1:8080/v1/oauth/authorize?response_type=code&client_id=fpc_0123456789abcdef" +
      "&redirect_uri=https%3A%2F%2Fexample.com%2Fflint%2Foauth%2Fcallback&mode=test&state=8tQ2mZxv1pL0aR7c" +
      "&scope=manage_orders&sandbox_id=test_synthetic&code_challenge=" +
      rfcChallenge +
      "&code_challenge_method=S256",
  );
  const invalid = [
    [{ ...guideOptions, mode: undefined }, "mode"],
    [{ ...guideOptions, mode: "production" }, "mode"],
    [{ ...guideOptions, clientId: "" }, "clientId"],
    [{ ...guideOptions, redirectUri: "/relative" }, "redirectUri"],
    [{ ...guideOptions, redirectUri: "https://example.com/cb#fragment" }, "redirectUri"],
    [{ ...guideOptions, mode: "live", sandboxId: "test_synthetic" }, "sandboxId"],
    [{ ...guideOptions, scope: "manage_orders,read_customers" }, "scope"],
    [{ ...guideOptions, scope: "manage_orders  read_customers" }, "scope"],
    [{ ...guideOptions, scope: [] }, "scope"],
    [{ ...guideOptions, scope: ["manage orders"] }, "scope[0]"],
    [{ ...guideOptions, codeVerifier: "short" }, "codeVerifier"],
    [{ ...guideOptions, baseUrl: "http://api.example.invalid" }, "baseUrl"],
    [{ ...guideOptions, baseUrl: "https://api.example.invalid?x=1" }, "baseUrl"],
    [{ ...guideOptions, client_id: "fpc_snake" }, "client_id"],
  ];
  for (const [options, param] of invalid) rejects(() => buildAuthorizeUrl(options), param);
  const result = php(
    `$options = json_decode($argv[1], true);
    $guide = OAuth::buildAuthorizeUrl($options['guide']);
    $sandbox = OAuth::buildAuthorizeUrl($options['sandbox']);
    $fresh = OAuth::buildAuthorizeUrl($options['fresh']);
    parse_str(parse_url($fresh->url, PHP_URL_QUERY), $query);
    echo json_encode([
        'guide' => [$guide->url, $guide->state, $guide->codeVerifier],
        'sandbox' => $sandbox->url,
        'fresh' => [substr($fresh->url, 0, strpos($fresh->url, '?')), $query, $fresh->state, $fresh->codeVerifier, OAuth::codeChallenge($fresh->codeVerifier)],
        'invalid' => array_map(fn($o) => attempt(fn() => OAuth::buildAuthorizeUrl($o)), $options['invalid']),
        'debug' => print_r($guide, true),
    ]);`,
    JSON.stringify({
      guide: guideOptions,
      sandbox: { ...guideOptions, scope: "manage_orders", sandboxId: "test_synthetic", baseUrl: "http://127.0.0.1:8080" },
      fresh: { clientId: "fpc_synthetic", redirectUri: "https://example.com/cb", mode: "live", baseUrl: "https://api.example.invalid:443/" },
      // JSON drops undefined; PHP receives the missing mode as an absent key.
      invalid: invalid.map(([options]) => options),
    }),
  );
  assert.deepEqual(result.guide, [guideUrl, guideOptions.state, rfcVerifier]);
  assert.equal(result.sandbox, sandbox.url);
  const [location, query, state, verifier, challenge] = result.fresh;
  assert.equal(location, "https://api.example.invalid/v1/oauth/authorize");
  assert.deepEqual(query, {
    response_type: "code",
    client_id: "fpc_synthetic",
    redirect_uri: "https://example.com/cb",
    mode: "live",
    state,
    code_challenge: challenge,
    code_challenge_method: "S256",
  });
  assert.match(state, base64url);
  assert.match(verifier, base64url);
  assert.equal(challenge, codeChallenge(verifier));
  assert.deepEqual(
    result.invalid,
    invalid.map(([, param]) => ({ error: "InvalidInputError", code: "INVALID_REQUEST", param })),
  );
  // Debug output never includes the verifier.
  assert.doesNotMatch(result.debug, new RegExp(rfcVerifier));
});

test("callbacks verify state before errors and return the code in both SDKs", () => {
  assert.match(createState(), base64url);
  assert.notEqual(createState(), createState());
  const state = "8tQ2mZxv1pL0aR7c";
  const cases = [
    ["https://example.com/flint/oauth/callback?code=fpac_abc123&state=8tQ2mZxv1pL0aR7c&mode=test", { code: "fpac_abc123", mode: "test" }],
    ["/flint/oauth/callback?state=8tQ2mZxv1pL0aR7c&code=fpac%2Bx", { code: "fpac+x" }],
    ["?code=fpac_abc123&state=8tQ2mZxv1pL0aR7c", { code: "fpac_abc123" }],
    [
      "https://example.com/cb?error=access_denied&error_description=The+merchant+declined+the+install.&state=8tQ2mZxv1pL0aR7c",
      { error: "access_denied", description: "The merchant declined the install." },
    ],
    // An error with a different state is rejected as a mismatch, not reported.
    ["https://example.com/cb?error=access_denied&state=other", { error: "state_mismatch" }],
    ["https://example.com/cb?code=fpac_abc123&state=8tQ2mZxv1pL0aR7", { error: "state_mismatch" }],
    ["https://example.com/cb?code=fpac_abc123", { error: "state_mismatch" }],
    ["https://example.com/cb?code=a&code=b&state=8tQ2mZxv1pL0aR7c", { error: "invalid_request" }],
    ["https://example.com/cb?state=8tQ2mZxv1pL0aR7c", { error: "invalid_request" }],
  ];
  const node = cases.map(([callback]) => {
    try {
      return parseAuthorizeCallback(callback, { state });
    } catch (error) {
      assert.ok(error instanceof AuthorizeCallbackError);
      return error.errorDescription === undefined || error.error !== "access_denied"
        ? { error: error.error }
        : { error: error.error, description: error.errorDescription };
    }
  });
  assert.deepEqual(node, cases.map(([, expected]) => expected));
  assert.deepEqual(
    parseAuthorizeCallback(new URL(cases[0][0]), { state }),
    cases[0][1],
  );
  rejects(() => parseAuthorizeCallback(cases[0][0], { state: "" }), "state");
  const result = php(
    `$results = [];
    foreach (json_decode($argv[1], true) as $callback) {
        $outcome = attempt(fn() => OAuth::parseAuthorizeCallback($callback, $argv[2]));
        $results[] = isset($outcome['ok']) ? $outcome['ok'] : (
            $outcome['callbackError'] === 'access_denied' && $outcome['description'] !== null
                ? ['error' => $outcome['callbackError'], 'description' => $outcome['description']]
                : ['error' => $outcome['callbackError']]
        );
    }
    echo json_encode($results);`,
    JSON.stringify(cases.map(([callback]) => callback)),
    state,
  );
  assert.deepEqual(result, cases.map(([, expected]) => expected));
});

function jwtParts(assertion) {
  const [header, claims, signature] = assertion.split(".");
  return {
    header: JSON.parse(Buffer.from(header, "base64url")),
    claims: JSON.parse(Buffer.from(claims, "base64url")),
    input: Buffer.from(header + "." + claims),
    signature: Buffer.from(signature, "base64url"),
  };
}
const keys = {
  ES256: () => generateKeyPairSync("ec", { namedCurve: "P-256" }),
  ES384: () => generateKeyPairSync("ec", { namedCurve: "P-384" }),
  PS256: () => generateKeyPairSync("rsa", { modulusLength: 2048 }),
  RS256: () => generateKeyPairSync("rsa", { modulusLength: 2048 }),
  EdDSA: () => generateKeyPairSync("ed25519"),
};
function verifyAssertion(assertion, algorithm, publicKey, { clientId, keyId, audience, lifetime }) {
  const { header, claims, input, signature } = jwtParts(assertion);
  assert.deepEqual(header, { alg: algorithm, typ: "JWT", ...(keyId ? { kid: keyId } : {}) });
  assert.equal(claims.iss, clientId);
  assert.equal(claims.sub, clientId);
  assert.equal(claims.aud, audience);
  assert.equal(typeof claims.aud, "string");
  assert.equal(claims.exp - claims.iat, lifetime);
  assert.ok(Math.abs(claims.iat - Date.now() / 1000) < 30);
  assert.match(claims.jti, /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
  assert.deepEqual(Object.keys(claims).sort(), ["aud", "exp", "iat", "iss", "jti", "sub"]);
  const ok =
    algorithm === "ES256" || algorithm === "ES384"
      ? signature.length === (algorithm === "ES256" ? 64 : 96) &&
        verify(algorithm === "ES256" ? "sha256" : "sha384", input, { key: publicKey, dsaEncoding: "ieee-p1363" }, signature)
      : algorithm === "PS256"
        ? verify("sha256", input, { key: publicKey, padding: constants.RSA_PKCS1_PSS_PADDING, saltLength: 32 }, signature)
        : verify(algorithm === "EdDSA" ? null : "sha256", input, publicKey, signature);
  assert.ok(ok, `${algorithm} signature verifies with the public key`);
  return claims;
}

test("private_key_jwt assertions are signed RFC 7523 JWTs in Node", async () => {
  for (const algorithm of Object.keys(keys)) {
    const { privateKey, publicKey } = keys[algorithm]();
    for (const key of [privateKey, privateKey.export({ type: "pkcs8", format: "pem" }), privateKey.export({ format: "jwk" })]) {
      const provider = privateKeyJwt({ clientId: "fpc_synthetic", privateKey: key, algorithm, keyId: "kid-1" });
      const first = await provider.getAssertion();
      const second = await provider.getAssertion();
      const expected = { clientId: "fpc_synthetic", keyId: "kid-1", audience: "https://api.withflintpay.com", lifetime: 120 };
      const a = verifyAssertion(first, algorithm, publicKey, expected);
      const b = verifyAssertion(second, algorithm, publicKey, expected);
      assert.notEqual(a.jti, b.jti);
      assert.deepEqual(JSON.parse(JSON.stringify(provider)), { clientId: "fpc_synthetic", algorithm, keyId: "kid-1" });
    }
  }
  const { privateKey, publicKey } = keys.ES256();
  const custom = privateKeyJwt({ clientId: "fpc_synthetic", privateKey, algorithm: "ES256", audience: "https://api.example.invalid", lifetimeSeconds: 300 });
  verifyAssertion(await custom.getAssertion(), "ES256", publicKey, { clientId: "fpc_synthetic", audience: "https://api.example.invalid", lifetime: 300 });
  const p384 = keys.ES384().privateKey;
  const smallRsa = generateKeyPairSync("rsa", { modulusLength: 1024 }).privateKey;
  for (const [options, param] of [
    [{ privateKey: p384, algorithm: "ES256" }, "privateKey"],
    [{ privateKey, algorithm: "ES384" }, "privateKey"],
    [{ privateKey: smallRsa, algorithm: "RS256" }, "privateKey"],
    [{ privateKey: publicKey, algorithm: "ES256" }, "privateKey"],
    [{ privateKey: "not a key", algorithm: "ES256" }, "privateKey"],
    [{ privateKey, algorithm: "HS256" }, "algorithm"],
    [{ privateKey, algorithm: "ES256", lifetimeSeconds: 301 }, "lifetimeSeconds"],
    [{ privateKey, algorithm: "ES256", lifetimeSeconds: 0 }, "lifetimeSeconds"],
    [{ privateKey, algorithm: "ES256", clientId: "" }, "clientId"],
  ])
    rejects(() => privateKeyJwt({ clientId: "fpc_synthetic", ...options }), param);
});

test("PHP private_key_jwt assertions verify with the registered public keys", () => {
  const algorithms = ["ES256", "ES384", "RS256", "EdDSA"];
  const pairs = Object.fromEntries(algorithms.map((algorithm) => [algorithm, keys[algorithm]()]));
  const pems = Object.fromEntries(
    algorithms.map((algorithm) => [algorithm, pairs[algorithm].privateKey.export({ type: "pkcs8", format: "pem" })]),
  );
  const ecSec1 = pairs.ES256.privateKey.export({ type: "sec1", format: "pem" });
  const result = php(
    `$pems = json_decode($argv[1], true);
    $out = [];
    foreach ($pems as $algorithm => $pem) {
        $provider = new PrivateKeyJwt('fpc_synthetic', $pem, $algorithm, 'kid-1');
        $out[$algorithm] = [$provider->getAssertion(), $provider->getAssertion(), print_r($provider, true)];
    }
    $out['sec1'] = (new PrivateKeyJwt('fpc_synthetic', openssl_pkey_get_private($argv[2]), 'ES256', null, 'https://api.example.invalid', 300))->getAssertion();
    $public = openssl_pkey_get_details(openssl_pkey_get_private($pems['ES256']))['key'];
    $out['invalid'] = array_map(fn($args) => attempt(fn() => new PrivateKeyJwt(...$args)), [
        ['fpc_synthetic', $pems['ES384'], 'ES256'],
        ['fpc_synthetic', $pems['ES256'], 'ES384'],
        ['fpc_synthetic', $pems['ES256'], 'EdDSA'],
        ['fpc_synthetic', $pems['EdDSA'], 'ES256'],
        ['fpc_synthetic', $public, 'ES256'],
        ['fpc_synthetic', $pems['RS256'], 'PS256'],
        ['fpc_synthetic', $pems['ES256'], 'ES256', null, 'https://api.withflintpay.com', 301],
        ['', $pems['ES256'], 'ES256'],
    ]);
    try { serialize(new PrivateKeyJwt('fpc_synthetic', $pems['ES256'], 'ES256')); $out['serialized'] = true; }
    catch (\\LogicException) { $out['serialized'] = false; }
    echo json_encode($out);`,
    JSON.stringify(pems),
    ecSec1,
  );
  const expected = { clientId: "fpc_synthetic", keyId: "kid-1", audience: "https://api.withflintpay.com", lifetime: 120 };
  for (const algorithm of algorithms) {
    const [first, second, debug] = result[algorithm];
    const a = verifyAssertion(first, algorithm, pairs[algorithm].publicKey, expected);
    const b = verifyAssertion(second, algorithm, pairs[algorithm].publicKey, expected);
    assert.notEqual(a.jti, b.jti);
    assert.doesNotMatch(debug, /PRIVATE KEY|OpenSSLAsymmetricKey/);
  }
  verifyAssertion(result.sec1, "ES256", createPublicKey(ecSec1), {
    clientId: "fpc_synthetic",
    audience: "https://api.example.invalid",
    lifetime: 300,
  });
  assert.deepEqual(result.invalid, [
    ...Array(5).fill({ error: "InvalidInputError", code: "INVALID_REQUEST", param: "privateKey" }),
    { error: "InvalidInputError", code: "INVALID_REQUEST", param: "algorithm" },
    { error: "InvalidInputError", code: "INVALID_REQUEST", param: "lifetimeSeconds" },
    { error: "InvalidInputError", code: "INVALID_REQUEST", param: "clientId" },
  ]);
  assert.equal(result.serialized, false);
});

test("client authentication fields come from any assertion provider without leaking failures", async () => {
  const { privateKey, publicKey } = keys.EdDSA();
  const fields = await clientAuthentication(privateKeyJwt({ clientId: "fpc_synthetic", privateKey, algorithm: "EdDSA" }));
  assert.deepEqual(Object.keys(fields), ["client_id", "client_assertion_type", "client_assertion"]);
  assert.equal(fields.client_id, "fpc_synthetic");
  assert.equal(fields.client_assertion_type, CLIENT_ASSERTION_TYPE);
  verifyAssertion(fields.client_assertion, "EdDSA", publicKey, { clientId: "fpc_synthetic", audience: "https://api.withflintpay.com", lifetime: 120 });
  // A workload identity credential sends the provider's token as the assertion.
  const workload = { clientId: "fpc_synthetic", getAssertion: async () => "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJyZXBvIn0.c2ln" };
  assert.equal((await clientAuthentication(workload)).client_assertion, "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJyZXBvIn0.c2ln");
  await assert.rejects(
    clientAuthentication({ clientId: "fpc_synthetic", getAssertion: () => { throw new Error("private key material"); } }),
    (error) => {
      assert.ok(error instanceof errors.ConfigurationError);
      assert.equal(error.code, "credential_provider_failed");
      assert.doesNotMatch(error.message + JSON.stringify(error), /private key material/);
      return true;
    },
  );
  await assert.rejects(clientAuthentication({ clientId: "fpc_synthetic", getAssertion: () => "not-a-jwt" }), { code: "credential_invalid" });
  await assert.rejects(clientAuthentication({ clientId: "fpc_synthetic" }), { name: "InvalidInputError", param: "clientAssertion" });
  const result = php(
    `$workload = new class implements ClientAssertionProvider {
        public function clientId(): string { return 'fpc_synthetic'; }
        public function getAssertion(): string { return 'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJyZXBvIn0.c2ln'; }
    };
    $failing = new class implements ClientAssertionProvider {
        public function clientId(): string { return 'fpc_synthetic'; }
        public function getAssertion(): string { throw new \\RuntimeException('private key material'); }
    };
    $invalid = new class implements ClientAssertionProvider {
        public function clientId(): string { return 'fpc_synthetic'; }
        public function getAssertion(): string { return 'not-a-jwt'; }
    };
    $failure = null;
    try { OAuth::clientAuthentication($failing); } catch (\\Flint\\Errors\\ConfigurationError $e) { $failure = [$e->getCode(), $e->getMessage()]; }
    echo json_encode(['workload' => OAuth::clientAuthentication($workload), 'failure' => $failure, 'invalid' => attempt(fn() => OAuth::clientAuthentication($invalid))]);`,
  );
  assert.deepEqual(result.workload, {
    client_id: "fpc_synthetic",
    client_assertion_type: CLIENT_ASSERTION_TYPE,
    client_assertion: "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJyZXBvIn0.c2ln",
  });
  assert.deepEqual(result.failure, ["credential_provider_failed", "Client assertion provider failed"]);
  assert.deepEqual(result.invalid, { error: "ConfigurationError", code: "credential_invalid", param: null });
});

const issued = {
  access_token: "fpat_synthetic",
  token_type: "Bearer",
  expires_in: 3600,
  refresh_token: "fprt_synthetic",
  scope: "manage_orders read_customers",
  merchant_id: "mer_01KEZF7C00MPP0T9S0KH5BB4CC",
  partner_app_id: "papp_01KEZF7C00D8DXK5AXR7NPRJ0J",
  partner_app_install_id: "pinst_01KEZF7C00V5TD9V9QS2PK2VEE",
  environment_grant_id: "egrt_01KEZF7C009BJARGPV18R4BQX9",
  mode: "test",
  sandbox_id: "test_01KEZF7C00JVWYYN2SBWFFSA36",
};
function formFields(body) {
  const fields = {};
  for (const pair of body.split("&")) {
    const [name, value] = pair.split("=").map(decodeURIComponent);
    assert.equal(Object.hasOwn(fields, name), false, `${name} is sent once`);
    fields[name] = value;
  }
  return fields;
}

test("code exchange and revocation send form requests with a fresh assertion in both SDKs", async () => {
  const { privateKey, publicKey } = keys.ES256();
  const pem = privateKey.export({ type: "pkcs8", format: "pem" });
  const sent = [];
  const client = new Client({
    ambientCredentials: false,
    transport: async (url, init) => {
      sent.push({ url: String(url), method: init.method, headers: Object.fromEntries(new Headers(init.headers)), body: init.body });
      return sent.length === 1
        ? new Response(JSON.stringify(issued), { status: 200, headers: { "content-type": "application/json" } })
        : new Response(null, { status: 200 });
    },
  });
  const assertion = privateKeyJwt({ clientId: "fpc_0123456789abcdef", privateKey: pem, algorithm: "ES256", keyId: "backend-2026-10" });
  const token = await exchangeCode(client, {
    code: "fpac_abc123",
    redirectUri: "https://example.com/flint/oauth/callback",
    codeVerifier: rfcVerifier,
    clientAssertion: assertion,
  });
  assert.equal(token.access_token, issued.access_token);
  assert.equal(token.mode, "test");
  await revokeToken(client, { token: "fprt_synthetic", tokenTypeHint: "refresh_token", clientAssertion: assertion });
  rejects(() => codeChallenge("short"), "codeVerifier");
  await assert.rejects(
    exchangeCode(client, { code: "c", redirectUri: "https://example.com/cb", codeVerifier: "short", clientAssertion: assertion }),
    { name: "InvalidInputError", param: "codeVerifier" },
  );
  const result = php(
    `$sent = [];
    $responses = [json_encode(json_decode($argv[2])), ''];
    $client = new \\Flint\\Client(new \\Flint\\ClientOptions(
        ambientCredentials: false,
        transport: function (array $request) use (&$sent, &$responses): array {
            $sent[] = ['url' => $request['url'], 'method' => $request['method'], 'headers' => $request['headers'], 'body' => $request['body']];
            return ['status' => 200, 'headers' => ['content-type' => 'application/json'], 'body' => array_shift($responses)];
        },
    ));
    $assertion = new PrivateKeyJwt('fpc_0123456789abcdef', $argv[1], 'ES256', 'backend-2026-10');
    $token = OAuth::exchangeCode($client, [
        'code' => 'fpac_abc123',
        'redirectUri' => 'https://example.com/flint/oauth/callback',
        'codeVerifier' => $argv[3],
        'clientAssertion' => $assertion,
    ]);
    OAuth::revokeToken($client, ['token' => 'fprt_synthetic', 'tokenTypeHint' => 'refresh_token', 'clientAssertion' => $assertion]);
    echo json_encode(['sent' => $sent, 'token' => $token->getAccessToken()]);`,
    pem,
    JSON.stringify(issued),
    rfcVerifier,
  );
  assert.equal(result.token, issued.access_token);
  const jtis = new Set();
  for (const requests of [sent, result.sent]) {
    assert.equal(requests.length, 2);
    const [exchange, revoke] = requests;
    for (const [request, path] of [[exchange, "/v1/oauth/token"], [revoke, "/v1/oauth/revoke"]]) {
      assert.equal(request.url, "https://api.withflintpay.com" + path);
      assert.equal(request.method, "POST");
      assert.equal(request.headers["content-type"], "application/x-www-form-urlencoded");
      assert.equal(request.headers.authorization, undefined);
    }
    const code = formFields(exchange.body);
    const assertionClaims = verifyAssertion(code.client_assertion, "ES256", publicKey, {
      clientId: "fpc_0123456789abcdef",
      keyId: "backend-2026-10",
      audience: "https://api.withflintpay.com",
      lifetime: 120,
    });
    jtis.add(assertionClaims.jti);
    assert.deepEqual({ ...code, client_assertion: undefined }, {
      grant_type: "authorization_code",
      code: "fpac_abc123",
      redirect_uri: "https://example.com/flint/oauth/callback",
      code_verifier: rfcVerifier,
      client_id: "fpc_0123456789abcdef",
      client_assertion_type: CLIENT_ASSERTION_TYPE,
      client_assertion: undefined,
    });
    const revocation = formFields(revoke.body);
    jtis.add(
      verifyAssertion(revocation.client_assertion, "ES256", publicKey, {
        clientId: "fpc_0123456789abcdef",
        keyId: "backend-2026-10",
        audience: "https://api.withflintpay.com",
        lifetime: 120,
      }).jti,
    );
    assert.deepEqual({ ...revocation, client_assertion: undefined }, {
      token: "fprt_synthetic",
      token_type_hint: "refresh_token",
      client_id: "fpc_0123456789abcdef",
      client_assertion_type: CLIENT_ASSERTION_TYPE,
      client_assertion: undefined,
    });
  }
  // Every request signs its own single-use assertion.
  assert.equal(jtis.size, 4);
});

test("TypeScript consumers get typed partner OAuth helpers", () => {
  mkdirSync(join(root, ".context"), { recursive: true });
  const directory = mkdtempSync(join(root, ".context/partner-oauth-types-"));
  try {
    const fixture = join(directory, "consumer.mts");
    writeFileSync(
      fixture,
      `import { Client } from "../../node/index.js";
import {
  buildAuthorizeUrl, exchangeCode, parseAuthorizeCallback, privateKeyJwt, revokeToken,
  clientAuthentication, AuthorizeCallbackError, type ClientAssertionProvider,
} from "../../node/custom/partner-oauth.js";
const { url, state, codeVerifier }: { url: string; state: string; codeVerifier: string } = buildAuthorizeUrl({
  clientId: "fpc_synthetic", redirectUri: "https://example.com/cb", mode: "test", scope: ["manage_orders"],
});
// @ts-expect-error mode is test or live.
buildAuthorizeUrl({ clientId: "fpc_synthetic", redirectUri: "https://example.com/cb", mode: "sandbox" });
// @ts-expect-error redirectUri is required.
buildAuthorizeUrl({ clientId: "fpc_synthetic", mode: "live" });
const assertion = privateKeyJwt({ clientId: "fpc_synthetic", privateKey: "PEM", algorithm: "ES256", keyId: "kid" });
// @ts-expect-error Symmetric algorithms are not client assertions.
privateKeyJwt({ clientId: "fpc_synthetic", privateKey: "PEM", algorithm: "HS256" });
const workload: ClientAssertionProvider = { clientId: "fpc_synthetic", getAssertion: async () => "a.b.c" };
const client = new Client({ ambientCredentials: false });
async function flow(callbackUrl: string) {
  const { code } = parseAuthorizeCallback(callbackUrl, { state });
  const token = await exchangeCode(client, { code, redirectUri: "https://example.com/cb", codeVerifier, clientAssertion: assertion });
  const access: string = token.access_token;
  await revokeToken(client, { token: access, tokenTypeHint: "access_token", clientAssertion: workload });
  // @ts-expect-error tokenTypeHint is access_token or refresh_token.
  await revokeToken(client, { token: access, tokenTypeHint: "id_token", clientAssertion: workload });
  const fields = await clientAuthentication(workload);
  await client.oauth.exchangeToken({ grant_type: "authorization_code", code, redirect_uri: "https://example.com/cb", code_verifier: codeVerifier, ...fields });
  return url;
}
try { void flow("https://example.com/cb?code=x&state=y"); } catch (error) {
  if (error instanceof AuthorizeCallbackError) { const reason: string = error.error; void reason; }
}
`,
    );
    execFileSync(
      process.execPath,
      [
        join(root, ".tools/sdk-generator/node_modules/typescript/bin/tsc"),
        "--noEmit",
        "--strict",
        "--skipLibCheck",
        "--target",
        "ES2022",
        "--module",
        "NodeNext",
        "--moduleResolution",
        "NodeNext",
        fixture,
      ],
      { cwd: root, encoding: "utf8" },
    );
  } catch (error) {
    throw new Error(error.stdout || error.message);
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});
