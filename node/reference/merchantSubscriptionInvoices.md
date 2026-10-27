[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# merchantSubscriptionInvoices

### merchantSubscriptionInvoices.get

Returns one invoice issued by Flint for the authenticated merchant environment.

`GET /v1/merchant-billing-invoices/{merchant_billing_invoice_id}`

Signature: `get(merchant_billing_invoice_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `merchant_billing_invoice_id` | Required | string |  |

#### Response

Returned payload: [MerchantBillingInvoice](../models/MerchantBillingInvoice.md#merchantbillinginvoice).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.merchantSubscriptionInvoices.get("example", {}, {  });
```

[Complete runnable example](../examples/merchantSubscriptionInvoices-get.mjs)

### merchantSubscriptionInvoices.list

Returns invoices issued by Flint for the authenticated merchant environment.

`GET /v1/merchant-billing-invoices`

Signature:

```typescript
list(params?: {
  "status"?: InputValue<Array<"draft" |
    "open" |
    "collecting" |
    "paid" |
    "delinquent" |
    "void" |
    "written_off">>;
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"draft"`, `"open"`, `"collecting"`, `"paid"`, `"delinquent"`, `"void"`, `"written_off"`. |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |

#### Response

Returned payload: [MerchantBillingInvoiceListResponse](../models/MerchantBillingInvoiceListResponse.md#merchantbillinginvoicelistresponse).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.merchantSubscriptionInvoices.list({}, {  });
```

[Complete runnable example](../examples/merchantSubscriptionInvoices-list.mjs)

