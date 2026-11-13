[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# merchantSignups

### merchantSignups.cancel

Cancels a `pending` signup and voids its code, so a code email still queued is never sent. A canceled signup returns 409 ACTION_NOT_ALLOWED with reason already_applied; any other status, including a signup Flint is completing after verify, returns reason unsupported_state with current_status. Live only: test credentials get 403 FORBIDDEN with reason live_mode_required, and a key linked to a partner app install gets 403 FORBIDDEN with reason linked_key_not_allowed. Partner app tokens can't call it.

`POST /v1/merchant-signups/{merchant_signup_id}/cancel`

Signature: `cancel(merchant_signup_id: InputValue<string>, params?: MerchantSignupsCancelParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `merchant_signup_id` | Required | string | ID of the merchant signup. |
| `body` | Optional | [MerchantSignupVersionRequestInput](../models/MerchantSignupVersionRequestInput.md#merchantsignupversionrequestinput) | The request body for: Cancel a merchant signup; Mint new authorization codes for a merchant signup; Send a new merchant signup code. |

#### Response

Returned payload: [MerchantSignup](../models/MerchantSignup.md#merchantsignup).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.merchantSignups.cancel("msu_01KEZF7C00SRGYRMBPKRKW8V9J", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/merchantSignups-cancel.mjs)

### merchantSignups.create

Starts creating a merchant for an owner: Flint emails the owner a code that names your app, the business, the permissions and fee cap you request, and Flint's merchant terms. Show the owner Flint's terms checkbox in your form, collect the code, and send both to verify. Flint checks, in order and before any email: the partner app is yours and active (404 RESOURCE_NOT_FOUND at partner_app_id, or 409 ACTION_NOT_ALLOWED with reason unsupported_state for a deleted app); every requested_permission_ids value is in the manifest (400 INVALID_VALUE at that item); the app has a merchant_action_url, and its name and permission titles hold no link (409 ACTION_NOT_ALLOWED with reason configuration_required); the app's live create_merchants capability; then the quotas. Until create_merchants is active, modes including live are refused with 409 ACTION_NOT_ALLOWED, capability create_merchants, param modes and the capability's inactive reason, and an owner outside your merchant's team is refused the same way with param owner.email. Quotas: 20 signups per app per UTC day before create_merchants is active and 1,000 after (409 LIMIT_REACHED with reason merchant_signups, limit and resets_at); 3 codes per owner mailbox per 15 minutes across every app (429 RATE_LIMIT_EXCEEDED with Retry-After) and 10 per 24 hours (409 LIMIT_REACHED with reason verification_codes). Plus-addresses count as their mailbox. The response never says whether the email already has a Flint login. Live only: test credentials get 403 FORBIDDEN with reason live_mode_required, and a key linked to a partner app install gets 403 FORBIDDEN with reason linked_key_not_allowed. Partner app tokens can't call it.

`POST /v1/merchant-signups`

Signature: `create(params: MerchantSignupsCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateMerchantSignupRequestInput](../models/CreateMerchantSignupRequest.md#createmerchantsignuprequest) | The request body for: Create a merchant signup. |

Body model: [CreateMerchantSignupRequestInput](../models/CreateMerchantSignupRequest.md#createmerchantsignuprequest).

#### merchantSignups.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `business_name` | Optional | string | The new merchant's display name until onboarding sets its legal name, 1 to 100 characters, without links or email addresses: the code email shows it. Without it, Flint names the merchant from the owner's email. minLength: `1`. maxLength: `100`. |
| `code_challenge` | Required | string | The PKCE S256 challenge: base64url SHA-256 of a verifier you keep. The authorization codes verify returns are bound to it. minLength: `43`. maxLength: `43`. pattern: `^[A-Za-z0-9_-]{43}$`. |
| `code_challenge_method` | Required | string | Must be `S256`. Values: `"S256"`. |
| `external_reference_id` | Optional | string | Your identifier for this business, such as your account ID. List signups by it. minLength: `1`. maxLength: `255`. |
| `modes` | Required | Array of string | The modes to install the app in. `live` needs the app's live `create_merchants` capability. Until it is active, a signup may install only in `test`, and only for an owner on your merchant's team (plus-addresses included). minItems: `1`. maxItems: `2`. uniqueItems: `true`. Items values: `"test"`, `"live"`. |
| `owner` | Required | [MerchantSignupOwnerRequestInput](../models/MerchantSignupOwnerRequestInput.md#merchantsignupownerrequestinput) | The owner Flint emails the code to. The person who will own the new merchant. Flint emails the code to this address. |
| `partner_app_id` | Required | string | Your partner app to install on the new merchant. It must be active and have a `merchant_action_url`. minLength: `1`. |
| `requested_permission_ids` | Optional | Array of string | Optional manifest permissions to request besides the required ones. Defaults to the app's `default_requested_permissions`. Send `[]` to request only the required permissions. uniqueItems: `true`. Items: minLength: `1`. |
| `sandbox_initial_onboarding` | Optional | string | The onboarding state of the new merchant's default sandbox, which the test grant points at. Send `not_started` to rehearse verification in test mode. Default: `"complete"`. Values: `"complete"`, `"not_started"`. |

#### Response

Returned payload: [MerchantSignup](../models/MerchantSignup.md#merchantsignup).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.merchantSignups.create({business_name: "Tidewater Yoga", code_challenge: "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM", code_challenge_method: "S256", external_reference_id: "studio_8812", modes: ["test", "live"], owner: {email: "maya@tidewateryoga.example", first_name: "Maya", last_name: "Okafor"}, partner_app_id: "papp_01KEZF7C00D8DXK5AXR7NPRJ0J", requested_permission_ids: ["setup_payments", "sell"], sandbox_initial_onboarding: "not_started"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/merchantSignups-create.mjs)

### merchantSignups.get

Returns one of your partner apps' signups. A completed signup stays readable, including the owner's name and email, after the merchant disconnects the app. Live only: test credentials get 403 FORBIDDEN with reason live_mode_required, and a key linked to a partner app install gets 403 FORBIDDEN with reason linked_key_not_allowed. Partner app tokens can't call it.

`GET /v1/merchant-signups/{merchant_signup_id}`

Signature: `get(merchant_signup_id: InputValue<string>, params?: MerchantSignupsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `merchant_signup_id` | Required | string | ID of the merchant signup. |

#### Response

Returned payload: [MerchantSignup](../models/MerchantSignup.md#merchantsignup).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.merchantSignups.get("msu_01KEZF7C00SRGYRMBPKRKW8V9J", {}, {  });
```

[Complete runnable example](../examples/merchantSignups-get.mjs)

### merchantSignups.list

Lists the signups of your partner apps, newest first, then by `merchant_signup_id`. A merchant that owns no app gets an empty list. Live only: test credentials get 403 FORBIDDEN with reason live_mode_required, and a key linked to a partner app install gets 403 FORBIDDEN with reason linked_key_not_allowed. Partner app tokens can't call it. Default order: created_at descending, then merchant_signup_id descending.

`GET /v1/merchant-signups`

Signature: `list(params?: MerchantSignupsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `partner_app_id` | Optional | string | Return signups of this partner app. pattern: `^papp_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `external_reference_id` | Optional | string | Return signups with this external_reference_id. minLength: `1`. maxLength: `255`. |
| `owner_email` | Optional | string | Return signups for this owner email, compared in lower case. Format: `email`. |
| `status` | Optional | Array of string or string | Return signups with any of these statuses. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending"`, `"completed"`, `"expired"`, `"canceled"`. Values: `"pending"`, `"completed"`, `"expired"`, `"canceled"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [MerchantSignupListResponse](../models/MerchantSignupListResponse.md#merchantsignuplistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.merchantSignups.list({}, {  });
```

[Complete runnable example](../examples/merchantSignups-list.mjs)

### merchantSignups.resendCode

Emails the owner a new code for a `pending` signup. The new code replaces the old one and resets the attempt count; a code email still queued for the old code is never sent. A signup sends at most 3 codes (409 LIMIT_REACHED with reason verification_codes and limit 3), within the per-mailbox send caps of create. The app's create_merchants capability is checked again, so a paused platform sends no more codes. Any other status returns 409 ACTION_NOT_ALLOWED with reason unsupported_state. It is a message operation, not a lifecycle action, so supported_actions never lists it. Live only: test credentials get 403 FORBIDDEN with reason live_mode_required, and a key linked to a partner app install gets 403 FORBIDDEN with reason linked_key_not_allowed. Partner app tokens can't call it.

`POST /v1/merchant-signups/{merchant_signup_id}/resend-code`

Signature: `resendCode(merchant_signup_id: InputValue<string>, params?: MerchantSignupsResendCodeParams, options?: RequestOptions<"merchant">)`

#### Request fields

Field definitions: [shared fields](#request-fields). Models: [MerchantSignupVersionRequestInput](../models/MerchantSignupVersionRequestInput.md#merchantsignupversionrequestinput).

#### Response

Returned payload: [MerchantSignup](../models/MerchantSignup.md#merchantsignup).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.merchantSignups.resendCode("msu_01KEZF7C00SRGYRMBPKRKW8V9J", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/merchantSignups-resendCode.mjs)

### merchantSignups.rotateAuthorizationCodes

Mints new authorization codes for a completed signup's grants that were never exchanged, bound to the signup's code_challenge, and supersedes the earlier ones. Use it when the verify response was lost or the codes expired before you exchanged them. It works only within 24 hours of completed_at and while nothing else has happened to the install: any revoke, or an authorization of the app on the consent screen, ends it for good. Refused with 409 ACTION_NOT_ALLOWED: reason already_applied once every grant has been exchanged (mint partner app tokens with grant_type=client_credentials instead), unsupported_state when the signup isn't completed, and not_offered once the window or the install's state ends rotation; the owner then reauthorizes on the consent screen. An idempotent replay returns the signup without the codes. It is a code rotation, not a lifecycle action, so supported_actions never lists it. Live only: test credentials get 403 FORBIDDEN with reason live_mode_required, and a key linked to a partner app install gets 403 FORBIDDEN with reason linked_key_not_allowed. Partner app tokens can't call it.

`POST /v1/merchant-signups/{merchant_signup_id}/rotate-authorization-codes`

Signature:

```typescript
rotateAuthorizationCodes(merchant_signup_id: InputValue<string>,
 params?: MerchantSignupsRotateAuthorizationCodesParams,
 options?: RequestOptions<"merchant">)
```

#### Request fields

Field definitions: [shared fields](#request-fields). Models: [MerchantSignupVersionRequestInput](../models/MerchantSignupVersionRequestInput.md#merchantsignupversionrequestinput).

#### Response

Returned payload: [MerchantSignupWithAuthorizationCodes](../models/MerchantSignupWithAuthorizationCodes.md#merchantsignupwithauthorizationcodes).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.merchantSignups.rotateAuthorizationCodes("msu_01KEZF7C00SRGYRMBPKRKW8V9J", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/merchantSignups-rotateAuthorizationCodes.mjs)

### merchantSignups.verify

Uses the owner's code and their acceptance of Flint's merchant terms, then creates the merchant, installs the app on it in the signup's modes, and returns one authorization code per mode. Exchange each at POST /v1/oauth/token with the code_verifier for the signup's code_challenge and without redirect_uri, within 5 minutes. Checks, in order, before any effect: the signup is pending (409 ACTION_NOT_ALLOWED with reason already_applied when completed, unsupported_state with current_status otherwise); the app's create_merchants capability again; the attempt caps (409 LIMIT_REACHED with reason verification_attempts: 5 wrong codes use up a code, and wrong codes for one owner mailbox are capped at 10 per 24 hours and 30 per 7 days, with resets_at); the code. A wrong, expired or replaced code is 400 INVALID_REQUEST with INVALID_VALUE at verification_code. After the code matches, an owner Flint can't use is refused with 409 ACTION_NOT_ALLOWED and reason owner_identity_conflict (the owner contacts Flint support, then you resend a code or start a new signup), and an owner who already owns 10 active merchants with 409 LIMIT_REACHED and reason owned_merchants. Completion is resumable. Once the code is used, Flint finishes creating the merchant even if this request fails; a failure returns 503 SERVICE_UNAVAILABLE. Send verify again, with the same Idempotency-Key or a new one and the same code, to wait for or continue the same completion and get the result. An idempotent replay returns the signup without the codes: mint new ones with rotate-authorization-codes. Live only: test credentials get 403 FORBIDDEN with reason live_mode_required, and a key linked to a partner app install gets 403 FORBIDDEN with reason linked_key_not_allowed. Partner app tokens can't call it.

`POST /v1/merchant-signups/{merchant_signup_id}/verify`

Signature: `verify(merchant_signup_id: InputValue<string>, params: MerchantSignupsVerifyParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `merchant_signup_id` | Required | string | ID of the merchant signup. |
| `body` | Required | [VerifyMerchantSignupRequestInput](../models/VerifyMerchantSignupRequest.md#verifymerchantsignuprequest) | The request body for: Verify a merchant signup. |

Body model: [VerifyMerchantSignupRequestInput](../models/VerifyMerchantSignupRequest.md#verifymerchantsignuprequest).

#### merchantSignups.verify body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: `uint64`. minimum: `1`. |
| `terms_acceptance` | Required | [MerchantSignupTermsAcceptanceRequestInput](../models/MerchantSignupTermsAcceptanceRequest.md#merchantsignuptermsacceptancerequest) | The owner's acceptance of Flint's merchant terms. Your statement that the owner ticked Flint's terms checkbox in your form, with Flint's wording. The platform terms oblige you to show it and to report real values. |
| `verification_code` | Required | string | The 8-character code Flint emailed the owner, such as `K7QM-4TXD`, with or without the hyphen, in either case. Request logs redact it. minLength: `8`. maxLength: `9`. |

#### Response

Returned payload: [MerchantSignupWithAuthorizationCodes](../models/MerchantSignupWithAuthorizationCodes.md#merchantsignupwithauthorizationcodes).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.merchantSignups.verify("msu_01KEZF7C00SRGYRMBPKRKW8V9J", {expected_version: 1, terms_acceptance: {ip_address: "203.0.113.7", merchant_terms_version: "2026-10-01", user_agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 15_1) AppleWebKit/605.1.15"}, verification_code: "K7QM-4TXD"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/merchantSignups-verify.mjs)

