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
  partnerAppTokens,
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
foreach (['ClientAssertionProvider', 'AuthorizeUrl', 'AuthorizeCallbackError', 'OAuth', 'PrivateKeyJwt', 'PartnerAppCredentials', 'PartnerAppTokens'] as $class) {
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
  // Capture exception arguments, as PHP does without php.ini, to prove secrets stay out of traces.
  return JSON.parse(
    execFileSync("php", ["-d", "zend.exception_ignore_args=0", file, ...args], { cwd: root, encoding: "utf8" }),
  );
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
    [{ ...guideOptions, redirectUri: "https://example.com/cb#" }, "redirectUri"],
    [{ ...guideOptions, codeVerifier: null }, "codeVerifier"],
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
  assert.ok(Math.abs(claims.exp - lifetime - Date.now() / 1000) < 30);
  assert.match(claims.jti, /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
  // iat is optional and omitted: Flint allows no clock skew on it.
  assert.deepEqual(Object.keys(claims).sort(), ["aud", "exp", "iss", "jti", "sub"]);
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
    try { new PrivateKeyJwt('fpc_synthetic', $pems['ES384'], 'ES256'); }
    catch (\\Flint\\SdkError $e) { $out['trace'] = print_r($e->getTrace(), true) . $e->getTraceAsString(); }
    try { OAuth::exchangeCode(new \\Flint\\Client(new \\Flint\\ClientOptions(ambientCredentials: false)), ['code' => 'fpac_x', 'redirectUri' => 'https://example.com/cb', 'codeVerifier' => 'secret-verifier-' . str_repeat('v', 40), 'clientAssertion' => null]); }
    catch (\\Flint\\SdkError $e) { $out['exchangeTrace'] = print_r($e->getTrace(), true); }
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
  // Rejected keys and exchange params are #[\SensitiveParameter] in exception traces.
  assert.match(result.trace, /SensitiveParameterValue/);
  assert.doesNotMatch(result.trace, /PRIVATE KEY/);
  assert.match(result.exchangeTrace, /SensitiveParameterValue/);
  assert.doesNotMatch(result.exchangeTrace, /secret-verifier/);
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

// A code exchange returns a merchant-bound partner app token and no refresh token.
const issued = {
  access_token: "fpat_synthetic",
  token_type: "Bearer",
  expires_in: 900,
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
  await revokeToken(client, { token: "fpat_synthetic", tokenTypeHint: "access_token", clientAssertion: assertion });
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
    OAuth::revokeToken($client, ['token' => 'fpat_synthetic', 'tokenTypeHint' => 'access_token', 'clientAssertion' => $assertion]);
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
      token: "fpat_synthetic",
      token_type_hint: "access_token",
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
  clientAuthentication, AuthorizeCallbackError, partnerAppTokens, type ClientAssertionProvider,
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
const tokens = partnerAppTokens(client, { clientAssertion: assertion, mode: "live" });
const merchantClient = new Client({ token: tokens.forMerchant("mer_01KEZF7C00MPP0T9S0KH5BB4CC"), ambientCredentials: false });
void merchantClient;
const appToken: Promise<{ value: string; expiresAt: Date }> = tokens.app().getCredential();
void appToken;
// @ts-expect-error Partner app tokens are minted for test or live.
partnerAppTokens(client, { clientAssertion: assertion, mode: "sandbox" });
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

const MERCHANT = "mer_01KEZF7C00MPP0T9S0KH5BB4CC";
const minted = (n, extra = {}) => ({
  access_token: `fpat_minted_${n}`,
  token_type: "Bearer",
  expires_in: 900,
  mode: "live",
  partner_app_id: "papp_01KEZF7C00D8DXK5AXR7NPRJ0J",
  ...extra,
});

test("partner app tokens mint per merchant, cache, refresh before expiry and retry a 401 once in Node", async (t) => {
  const { privateKey, publicKey } = keys.EdDSA();
  const clientAssertion = privateKeyJwt({ clientId: "fpc_0123456789abcdef", privateKey, algorithm: "EdDSA" });
  const mints = [];
  const calls = [];
  let reject = 0;
  const transport = async (url, init) => {
    const headers = Object.fromEntries(new Headers(init.headers));
    if (String(url).endsWith("/v1/oauth/token")) {
      mints.push(formFields(init.body));
      await new Promise((resolve) => setImmediate(resolve));
      return new Response(JSON.stringify(minted(mints.length, mints.at(-1).merchant_id ? { merchant_id: mints.at(-1).merchant_id } : {})), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    }
    calls.push({ url: String(url), authorization: headers.authorization, merchant: headers["flint-merchant-id"] });
    if (reject > 0) {
      reject--;
      return new Response(JSON.stringify({ error: { code: "INVALID_CREDENTIAL", message: "Expired." }, request_id: "req_01KEZF7C00MPP0T9S0KH5BB4CC" }), {
        status: 401,
        headers: { "content-type": "application/json" },
      });
    }
    return new Response(JSON.stringify({ data: [], request_id: "req_01KEZF7C00MPP0T9S0KH5BB4CC" }), { status: 200, headers: { "content-type": "application/json" } });
  };
  const minter = new Client({ ambientCredentials: false, transport });
  const tokens = partnerAppTokens(minter, { clientAssertion, mode: "live" });
  const credentials = tokens.forMerchant(MERCHANT);
  assert.equal(tokens.forMerchant(MERCHANT), credentials, "one provider per merchant");
  t.mock.timers.enable({ apis: ["Date"], now: Date.parse("2026-11-08T12:00:00Z") });
  // Concurrent first calls share one mint.
  const [a, b] = await Promise.all([credentials.getCredential(), credentials.getCredential()]);
  assert.equal(mints.length, 1);
  assert.equal(a.value, "fpat_minted_1");
  assert.equal(b.value, "fpat_minted_1");
  assert.equal(a.expiresAt.toISOString(), "2026-11-08T12:15:00.000Z");
  const { client_assertion, ...fields } = mints[0];
  assert.deepEqual(fields, {
    grant_type: "client_credentials",
    mode: "live",
    merchant_id: MERCHANT,
    client_id: "fpc_0123456789abcdef",
    client_assertion_type: CLIENT_ASSERTION_TYPE,
  });
  verifyAssertion(client_assertion, "EdDSA", publicKey, { clientId: "fpc_0123456789abcdef", audience: "https://api.withflintpay.com", lifetime: 120 });
  // Reused until 60 seconds before expiry, then minted again.
  t.mock.timers.setTime(Date.parse("2026-11-08T12:13:59Z"));
  assert.equal((await credentials.getCredential()).value, "fpat_minted_1");
  t.mock.timers.setTime(Date.parse("2026-11-08T12:14:01Z"));
  assert.equal((await credentials.getCredential()).value, "fpat_minted_2");
  assert.equal(mints.length, 2);
  // A client using the provider sends the token; a 401 drops it and retries once.
  const merchant = new Client({ token: credentials, ambientCredentials: false, transport });
  await merchant.balances.list();
  assert.deepEqual(calls.at(-1), { url: "https://api.withflintpay.com/v1/balances", authorization: "Bearer fpat_minted_2", merchant: undefined });
  reject = 1;
  await merchant.balances.list();
  assert.deepEqual(calls.slice(-2).map((call) => call.authorization), ["Bearer fpat_minted_2", "Bearer fpat_minted_3"]);
  assert.equal(mints.length, 3);
  // App-level tokens omit merchant_id; requests name the merchant themselves.
  const app = tokens.app();
  assert.equal(tokens.app(), app);
  assert.equal((await app.getCredential()).value, "fpat_minted_4");
  assert.equal(Object.hasOwn(mints.at(-1), "merchant_id"), false);
  assert.deepEqual(JSON.parse(JSON.stringify(credentials)), { mode: "live", merchantId: MERCHANT });
  rejects(() => tokens.forMerchant("merchant_1"), "merchantId");
  rejects(() => partnerAppTokens(minter, { clientAssertion, mode: "sandbox" }), "mode");
  rejects(() => partnerAppTokens(minter, { clientAssertion, mode: "live", refreshBeforeSeconds: 601 }), "refreshBeforeSeconds");
  rejects(() => partnerAppTokens({}, { clientAssertion, mode: "live" }), "client");
  // A mint that fails surfaces its error and leaves nothing cached.
  const failing = partnerAppTokens(
    new Client({
      ambientCredentials: false,
      transport: async () =>
        new Response(JSON.stringify({ error: "invalid_client", error_description: "Client authentication failed." }), {
          status: 401,
          headers: { "content-type": "application/json" },
        }),
    }),
    { clientAssertion, mode: "live" },
  ).forMerchant(MERCHANT);
  await assert.rejects(failing.getCredential(), { status: 401, code: "invalid_client" });
});

test("PHP partner app tokens mint per merchant, cache, expire and retry a 401 once", () => {
  const { privateKey, publicKey } = keys.ES256();
  const result = php(
    `$mints = [];
    $calls = [];
    $reject = 0;
    $expires = 900;
        $transport = function (array $request) use (&$mints, &$calls, &$reject, &$expires): array {
        if (str_ends_with($request['url'], '/v1/oauth/token')) {
            parse_str($request['body'], $fields);
            $mints[] = $fields;
            $body = ['access_token' => 'fpat_minted_' . count($mints), 'token_type' => 'Bearer', 'expires_in' => $expires, 'mode' => 'live', 'partner_app_id' => 'papp_01KEZF7C00D8DXK5AXR7NPRJ0J'] + (isset($fields['merchant_id']) ? ['merchant_id' => $fields['merchant_id']] : []);
            return ['status' => 200, 'headers' => ['content-type' => 'application/json'], 'body' => json_encode($body)];
        }
        $calls[] = [$request['headers']['authorization'] ?? null, $request['headers']['flint-merchant-id'] ?? null];
        if ($reject > 0) {
            $reject--;
            return ['status' => 401, 'headers' => ['content-type' => 'application/json'], 'body' => '{"error":{"code":"INVALID_CREDENTIAL","message":"Expired."},"request_id":"req_01KEZF7C00MPP0T9S0KH5BB4CC"}'];
        }
        return ['status' => 200, 'headers' => ['content-type' => 'application/json'], 'body' => '{"data":[],"request_id":"req_01KEZF7C00MPP0T9S0KH5BB4CC"}'];
    };
    $minter = new \\Flint\\Client(new \\Flint\\ClientOptions(ambientCredentials: false, transport: $transport));
    $tokens = new \\Flint\\Partner\\PartnerAppTokens($minter, new PrivateKeyJwt('fpc_0123456789abcdef', $argv[1], 'ES256'), 'live');
    $credentials = $tokens->forMerchant($argv[2]);
    $out = ['same' => $tokens->forMerchant($argv[2]) === $credentials];
    $out['first'] = [$credentials->getCredential()->value, $credentials->getCredential()->value, count($mints)];
    $out['expiresIn'] = $credentials->getCredential()->expiresAt->getTimestamp() - time();
    $merchant = new \\Flint\\Client(new \\Flint\\ClientOptions(token: $credentials, ambientCredentials: false, transport: $transport));
    $merchant->balances->list();
    $reject = 1;
    $merchant->balances->list();
    $out['calls'] = $calls;
    $out['afterRetry'] = count($mints);
    // A token within refreshBeforeSeconds of expiry is minted again.
    $expires = 1;
    $short = (new \\Flint\\Partner\\PartnerAppTokens($minter, new PrivateKeyJwt('fpc_0123456789abcdef', $argv[1], 'ES256'), 'live', 0))->app();
    $first = $short->getCredential()->value;
    usleep(1100000);
    $out['short'] = [$first, $short->getCredential()->value];
    $out['appMint'] = array_key_exists('merchant_id', $mints[count($mints) - 1]);
    $out['mint'] = $mints[0];
    $out['debug'] = print_r($credentials, true) . print_r($tokens, true);
    $out['invalid'] = [attempt(fn() => $tokens->forMerchant('merchant_1')), attempt(fn() => new \\Flint\\Partner\\PartnerAppTokens($minter, new PrivateKeyJwt('fpc_0123456789abcdef', $argv[1], 'ES256'), 'sandbox'))];
    echo json_encode($out);`,
    privateKey.export({ type: "pkcs8", format: "pem" }),
    MERCHANT,
  );
  assert.equal(result.same, true);
  assert.deepEqual(result.first, ["fpat_minted_1", "fpat_minted_1", 1]);
  assert.ok(result.expiresIn > 890 && result.expiresIn <= 900, String(result.expiresIn));
  assert.deepEqual(result.calls, [
    ["Bearer fpat_minted_1", null],
    ["Bearer fpat_minted_1", null],
    ["Bearer fpat_minted_2", null],
  ]);
  assert.equal(result.afterRetry, 2);
  assert.deepEqual(result.short, ["fpat_minted_3", "fpat_minted_4"]);
  assert.equal(result.appMint, false);
  const { client_assertion, ...fields } = result.mint;
  assert.deepEqual(fields, {
    grant_type: "client_credentials",
    mode: "live",
    merchant_id: MERCHANT,
    client_id: "fpc_0123456789abcdef",
    client_assertion_type: CLIENT_ASSERTION_TYPE,
  });
  verifyAssertion(client_assertion, "ES256", publicKey, { clientId: "fpc_0123456789abcdef", audience: "https://api.withflintpay.com", lifetime: 120 });
  assert.doesNotMatch(result.debug, /fpat_|PRIVATE KEY/);
  assert.deepEqual(result.invalid, [
    { error: "InvalidInputError", code: "INVALID_REQUEST", param: "merchantId" },
    { error: "InvalidInputError", code: "INVALID_REQUEST", param: "mode" },
  ]);
});

test("a failed refresh keeps serving the unexpired partner app token and backs off in Node and PHP", async (t) => {
  const { privateKey } = keys.ES256();
  const clientAssertion = privateKeyJwt({ clientId: "fpc_0123456789abcdef", privateKey, algorithm: "ES256" });
  let status = 200;
  let attempts = 0;
  const client = new Client({
    ambientCredentials: false,
    transport: async () => {
      attempts++;
      return status === 200
        ? new Response(JSON.stringify(minted(attempts, { merchant_id: MERCHANT })), { status, headers: { "content-type": "application/json" } })
        : new Response(JSON.stringify({ error: "temporarily_unavailable", error_description: "Too many requests." }), {
            status,
            headers: { "content-type": "application/json", "retry-after": "1" },
          });
    },
  });
  const credentials = partnerAppTokens(client, { clientAssertion, mode: "live" }).forMerchant(MERCHANT);
  t.mock.timers.enable({ apis: ["Date"], now: Date.parse("2026-11-08T12:00:00Z") });
  assert.equal((await credentials.getCredential()).value, "fpat_minted_1");
  // Inside the refresh window, a 429 refresh falls back to the unexpired token.
  status = 429;
  t.mock.timers.setTime(Date.parse("2026-11-08T12:14:30Z"));
  assert.equal((await credentials.getCredential()).value, "fpat_minted_1");
  assert.equal(attempts, 2);
  // No mint is attempted for 5 seconds after the failure.
  t.mock.timers.setTime(Date.parse("2026-11-08T12:14:34Z"));
  assert.equal((await credentials.getCredential()).value, "fpat_minted_1");
  assert.equal(attempts, 2);
  // Then the next call mints again.
  status = 200;
  t.mock.timers.setTime(Date.parse("2026-11-08T12:14:36Z"));
  assert.equal((await credentials.getCredential()).value, "fpat_minted_3");
  // Once the token has expired, a failed mint surfaces its error.
  status = 429;
  t.mock.timers.setTime(Date.parse("2026-11-08T12:30:00Z"));
  await assert.rejects(credentials.getCredential(), { status: 429, code: "temporarily_unavailable" });
  const result = php(
    `$status = 200;
    $attempts = 0;
    $merchantId = $argv[2];
    $client = new \\Flint\\Client(new \\Flint\\ClientOptions(ambientCredentials: false, transport: function (array $request) use (&$status, &$attempts, $merchantId): array {
        $attempts++;
        return $status === 200
            ? ['status' => 200, 'headers' => ['content-type' => 'application/json'], 'body' => json_encode(['access_token' => 'fpat_minted_' . $attempts, 'token_type' => 'Bearer', 'expires_in' => 4, 'mode' => 'live', 'partner_app_id' => 'papp_01KEZF7C00D8DXK5AXR7NPRJ0J', 'merchant_id' => $merchantId])]
            : ['status' => 429, 'headers' => ['content-type' => 'application/json'], 'body' => '{"error":"temporarily_unavailable","error_description":"Too many requests."}'];
    }));
    // A 4-second token is fresh while more than 2 seconds remain (half its lifetime).
    $credentials = (new \\Flint\\Partner\\PartnerAppTokens($client, new PrivateKeyJwt('fpc_0123456789abcdef', $argv[1], 'ES256'), 'live', 600))->forMerchant($argv[2]);
    $first = $credentials->getCredential()->value;
    usleep(2500000);
    $status = 429;
    $fallback = $credentials->getCredential()->value;
    $afterFailure = $attempts;
    $backoff = $credentials->getCredential()->value;
    echo json_encode([$first, $fallback, $afterFailure, $backoff, $attempts]);`,
    privateKey.export({ type: "pkcs8", format: "pem" }),
    MERCHANT,
  );
  assert.deepEqual(result, ["fpat_minted_1", "fpat_minted_1", 2, "fpat_minted_1", 2]);
});
