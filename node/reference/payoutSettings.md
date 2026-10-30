[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# payoutSettings

### payoutSettings.get

Returns payout settings that control default payout behavior for the authenticated merchant.

`GET /v1/payout-settings`

Signature: `get(params?: PayoutSettingsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

No request fields.

#### Response

Returned payload: [PayoutSettings](../models/PayoutSettings.md#payoutsettings).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 410 | ApiError |
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
const result = await client.payoutSettings.get({}, {  });
```

[Complete runnable example](../examples/payoutSettings-get.mjs)

### payoutSettings.update

Updates mutable payout settings for the authenticated merchant. Safe to retry with the same Idempotency-Key.

`PATCH /v1/payout-settings`

Signature: `update(params: PayoutSettingsUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [UpdatePayoutSettingsRequestInput](../models/UpdatePayoutSettingsRequest.md#updatepayoutsettingsrequest) | The request body for: Update payout settings. |

Body model: [UpdatePayoutSettingsRequestInput](../models/UpdatePayoutSettingsRequest.md#updatepayoutsettingsrequest).

#### payoutSettings.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delay_days_override` | Optional | integer or null | Days, 0 through 31, a payment stays pending before its funds become available, in place of the account's default. Send null to go back to the default. Format: `int32`. |
| `expected_version` | Optional | integer | Expected version of the payout settings. Required when sending minimum_balance_by_currency, monthly_payout_days, or weekly_payout_days, including empty collections and supported null clears. A stale value returns 409 VERSION_CONFLICT; retrieve the settings and rebuild the request before retrying. Format: `uint64`. minimum: `1`. |
| `interval` | Optional | string | When Flint sends available funds: daily, weekly on weekly_payout_days, monthly on monthly_payout_days, or manual, which sends nothing until you create a payout. weekly and monthly need their day list in the same request. Values: `"manual"`, `"daily"`, `"weekly"`, `"monthly"`. |
| `minimum_balance_by_currency` | Optional | Map of ([MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null) | Amount to keep in your balance instead of paying it out, keyed by currency code. Each value's currency must match its key and its amount can't be negative. Set a currency to null to remove its minimum. |
| `monthly_payout_days` | Optional | Array of integer | Days of the month, 1 through 31, on which monthly payouts are sent. Send it with interval monthly; it is rejected with any other interval. Items: Format: `int32`. |
| `statement_descriptor` | Optional | string or null | Text shown on your bank statement for payouts, 22 characters or fewer. Send null to clear it. minLength: `1`. |
| `weekly_payout_days` | Optional | Array of string | Weekdays on which weekly payouts are sent, monday through friday. Send it with interval weekly; it is rejected with any other interval. Items values: `"monday"`, `"tuesday"`, `"wednesday"`, `"thursday"`, `"friday"`. |

#### Response

Returned payload: [PayoutSettings](../models/PayoutSettings.md#payoutsettings).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

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

const result = await client.payoutSettings.update({interval: "manual"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/payoutSettings-update.mjs)

