[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# giftCardAdjustments

### giftCardAdjustments.create

Posts a relative correction with a typed reason and separate administrative authority. Corrections cannot consume reserved funds, exceed funding limits, or replace linked refunds and purchase reversals. expected_version fences the gift card version.

`POST /v1/gift-cards/{gift_card_id}/adjust-balance`

Signature: `create(string|Model $gift_card_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [AdjustGiftCardBalanceRequestInput](../models/AdjustGiftCardBalanceRequestInput.md#adjustgiftcardbalancerequestinput) | The request body for: Adjust gift card value. |

Body model: [AdjustGiftCardBalanceRequestInput](../models/AdjustGiftCardBalanceRequestInput.md#adjustgiftcardbalancerequestinput).

#### giftCardAdjustments.create body fields

Field definitions: [shared fields](../models/AdjustGiftCardBalanceRequestInput.md#adjustgiftcardbalancerequestinput). Models: [SignedMoneyRequestRequestInput](../models/SignedMoneyRequestRequestInput.md#signedmoneyrequestrequestinput).

#### Response

Returned payload: [AdjustGiftCardBalanceResult](../models/AdjustGiftCardBalanceResult.md#adjustgiftcardbalanceresult).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->giftCardAdjustments->create('example', [
  'amount_money' => (object) [
    'amount' => '100',
    'currency' => 'USD',
  ],
  'reason' => 'complimentary',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/giftCardAdjustments-create.php)

