[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# emailPreferences

### emailPreferences.lookup

Reads an address's email preferences without putting it in a URL. Matches after trimming surrounding whitespace and ignoring case. Returns the same shape as the customer preference read. For an address without a current customer, customer_id and version are null. With multiple matching customers, returns the first customer in ID order. A category with no stored choice is enabled. Merchants cannot change these preferences.

`POST /v1/email-preferences/lookup`

Signature: `lookup(params: EmailPreferencesLookupParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [LookupEmailPreferencesRequestInput](../models/LookupEmailPreferencesRequest.md#lookupemailpreferencesrequest) | The request body for: Look up email preferences. |

Body model: [LookupEmailPreferencesRequestInput](../models/LookupEmailPreferencesRequest.md#lookupemailpreferencesrequest).

#### emailPreferences.lookup body fields

Field definitions: [shared fields](../models/LookupEmailPreferencesRequest.md#lookupemailpreferencesrequest).

#### Response

Returned payload: [CustomerEmailPreferences](../models/CustomerEmailPreferences.md#customeremailpreferences).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 409 | ConflictError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.emailPreferences.lookup({email: "alex@example.com"}, {  });
```

[Complete runnable example](../examples/emailPreferences-lookup.mjs)

