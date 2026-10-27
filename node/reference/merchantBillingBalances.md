[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# merchantBillingBalances

### merchantBillingBalances.get

Returns what the merchant currently owes Flint and owns as account credit in one currency.

`GET /v1/merchant-billing-balances/{merchant_billing_balance_id}`

Signature: `get(merchant_billing_balance_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `merchant_billing_balance_id` | Required | string |  |

#### Response

Returned payload: [MerchantBillingBalance](../models/MerchantBillingBalance.md#merchantbillingbalance).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.merchantBillingBalances.get("example", {}, {  });
```

[Complete runnable example](../examples/merchantBillingBalances-get.mjs)

### merchantBillingBalances.list

Returns what the merchant currently owes Flint and owns as account credit by currency. All balances fit on one page, so next_page_token is omitted.

`GET /v1/merchant-billing-balances`

Signature: `list(params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

No request fields.

#### Response

Returned payload: [MerchantBillingBalanceListResponse](../models/MerchantBillingBalanceListResponse.md#merchantbillingbalancelistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.merchantBillingBalances.list({}, {  });
```

[Complete runnable example](../examples/merchantBillingBalances-list.mjs)

