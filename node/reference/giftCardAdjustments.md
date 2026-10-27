[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# giftCardAdjustments

### giftCardAdjustments.create

Posts a relative correction with a typed reason and separate administrative authority. Corrections cannot consume reserved funds, exceed funding limits, or replace linked refunds and purchase reversals. expected_version fences the gift card version.

`POST /v1/gift-cards/{gift_card_id}/adjust-balance`

Signature:

```typescript
create(gift_card_id: InputValue<string>,
 params: (InputValue<AdjustGiftCardBalanceRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [AdjustGiftCardBalanceRequestInput](../models/AdjustGiftCardBalanceRequest.md#adjustgiftcardbalancerequest) | The request body for: Adjust gift card value. |

Body model: [AdjustGiftCardBalanceRequestInput](../models/AdjustGiftCardBalanceRequest.md#adjustgiftcardbalancerequest).

#### giftCardAdjustments.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [SignedMoneyInput](../models/SignedMoneyInput.md#signedmoneyinput) | Nonzero USD amount to change the card's value by: positive adds value and negative removes it. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expected_version` | Optional | integer string | The gift card version last read. The command changes this card only when its current version matches. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `reason` | Required | string | Why you're adjusting the value. A negative amount_money takes suspicious_activity, balance_accidentally_increased, or support_issue; a positive one takes complimentary, balance_accidentally_decreased, or support_issue. Values: `"complimentary"`, `"balance_accidentally_decreased"`, `"support_issue"`, `"suspicious_activity"`, `"balance_accidentally_increased"`. |

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.giftCardAdjustments.create("example", {amount_money: {amount: "100", currency: "USD"}, reason: "complimentary"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/giftCardAdjustments-create.mjs)

