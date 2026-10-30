[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# merchantBillingBalances

### merchantBillingBalances.get

Returns what the merchant currently owes Flint and owns as account credit in one currency.

`GET /v1/merchant-billing-balances/{merchant_billing_balance_id}`

Signature:

```typescript
get(merchant_billing_balance_id: InputValue<string>,
 params?: MerchantBillingBalancesGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `merchant_billing_balance_id` | Required | string | Flint merchant billing balance ID. |

#### Response

Returned payload: [MerchantBillingBalance](../models/MerchantBillingBalance.md#merchantbillingbalance).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
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
const result = await client.merchantBillingBalances.get("mbbal_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/merchantBillingBalances-get.mjs)

### merchantBillingBalances.list

Returns what the merchant currently owes Flint and owns as account credit by currency. All balances fit on one page, so next_page_token is omitted. Default order: merchant_billing_balance_id descending; this key uniquely orders the results.

`GET /v1/merchant-billing-balances`

Signature: `list(params?: MerchantBillingBalancesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

No request fields.

#### Response

Returned payload: [MerchantBillingBalanceListResponse](../models/MerchantBillingBalanceListResponse.md#merchantbillingbalancelistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 409 | ConflictError |
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
const result = await client.merchantBillingBalances.list({}, {  });
```

[Complete runnable example](../examples/merchantBillingBalances-list.mjs)

