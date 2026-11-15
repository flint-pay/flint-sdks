[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# payoutSettings

### payoutSettings.get

Returns payout settings that control default payout behavior for the authenticated merchant.

`GET /v1/payout-settings`

Signature: `get(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

Field definitions: [shared fields](authContext.md#request-fields).

#### Response

Returned payload: [PayoutSettings](../models/PayoutSettings.md#payoutsettings).

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

#### Example

```php
$result = $client->payoutSettings->get([], new RequestOptions());
```

[Complete runnable example](../examples/payoutSettings-get.php)

### payoutSettings.update

Updates mutable payout settings for the authenticated merchant, including the default payout destination for each currency. Changing defaults requires expected_version, and each new default must be an active destination in its currency. Safe to retry with the same idempotency key.

`PATCH /v1/payout-settings`

Signature: `update(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [UpdatePayoutSettingsRequestInput](../models/UpdatePayoutSettingsRequestInput.md#updatepayoutsettingsrequestinput) | The request body for: Update payout settings. minProperties: `1`. |

Body model: [UpdatePayoutSettingsRequestInput](../models/UpdatePayoutSettingsRequestInput.md#updatepayoutsettingsrequestinput).

#### payoutSettings.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `default_payout_destinations` | Optional | Map of string | Makes each listed destination the default for its currency, keyed by currency code. Currencies you leave out keep their default. Each destination must be `active` and in that currency. A currency's default can't be removed, only replaced, so values can't be null. Requires expected_version. maxProperties: `20`. Map values: minLength: `1`. pattern: `^pdest_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `delay_days_override` | Optional | integer or null | Days, 0 through 31, a payment stays pending before its funds become available, in place of the account's default. Send null to go back to the default. Format: `int32`. |
| `expected_version` | Optional | integer | Expected version of the payout settings. Required when sending default_payout_destinations, minimum_balance_currency_options, monthly_payout_days, or weekly_payout_days, including empty collections and supported null clears. A stale value returns 409 VERSION_CONFLICT; retrieve the settings and rebuild the request before retrying. Format: `uint64`. minimum: `1`. |
| `interval` | Optional | string | When Flint sends available funds: daily, weekly on weekly_payout_days, monthly on monthly_payout_days, or manual, which sends nothing until you create a payout. weekly and monthly need their day list in the same request. Values: `"manual"`, `"daily"`, `"weekly"`, `"monthly"`. |
| `minimum_balance_currency_options` | Optional | Map of ([MoneyValueInput](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseFaceValueMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvariantgiftcardpurchasefacevaluemoney) or null) | Amount to keep in your balance instead of paying it out, keyed by uppercase ISO 4217 currency code, such as USD. Each value's currency must match its key and its amount can't be negative. Set a currency to null to remove its minimum. |
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

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->payoutSettings->update([
  'interval' => 'manual',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/payoutSettings-update.php)

