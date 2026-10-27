[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# giftCardCashOuts

### giftCardCashOuts.create

Records cash that the merchant attests it paid to the cardholder. Flint does not send cash. The amount cannot exceed available value or consume payment reservations; cash_out_reference identifies the cash disbursement the merchant made outside Flint. expected_version fences the gift card version.

`POST /v1/gift-cards/{gift_card_id}/cash-out`

Signature: `create(string|Model $gift_card_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CashOutGiftCardRequestInput](../models/CashOutGiftCardRequestInput.md#cashoutgiftcardrequestinput) | The request body for: Record a cash-out. |

Body model: [CashOutGiftCardRequestInput](../models/CashOutGiftCardRequestInput.md#cashoutgiftcardrequestinput).

#### giftCardCashOuts.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `cash_out_reference` | Required | string | Your reference for the cash you paid the buyer outside Flint, such as a receipt number. Required; 1 to 255 characters. The value is preserved exactly as sent. minLength: `1`. maxLength: `255`. |
| `expected_version` | Optional | integer string | The gift card version last read. The command changes this card only when its current version matches. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |

#### Response

Returned payload: [CashOutGiftCardResult](../models/CashOutGiftCardResult.md#cashoutgiftcardresult).

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

Idempotent: key required — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->giftCardCashOuts->create('example', [
  'amount_money' => (object) [
    'amount' => '100',
    'currency' => 'USD',
  ],
  'cash_out_reference' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/giftCardCashOuts-create.php)

