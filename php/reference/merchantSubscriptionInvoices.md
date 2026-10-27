[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# merchantSubscriptionInvoices

### merchantSubscriptionInvoices.get

Returns one invoice issued by Flint for the authenticated merchant environment.

`GET /v1/merchant-billing-invoices/{merchant_billing_invoice_id}`

Signature: `get(string|Model $merchant_billing_invoice_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->merchantSubscriptionInvoices->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/merchantSubscriptionInvoices-get.php)

### merchantSubscriptionInvoices.list

Returns invoices issued by Flint for the authenticated merchant environment.

`GET /v1/merchant-billing-invoices`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"draft"`, `"open"`, `"collecting"`, `"paid"`, `"delinquent"`, `"void"`, `"written_off"`. |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |

#### Response

Returned payload: [MerchantSubscriptionInvoicesListResponse200](../models/MerchantSubscriptionInvoicesListResponse200.md#merchantsubscriptioninvoiceslistresponse200).

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

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->merchantSubscriptionInvoices->list([], new RequestOptions());
```

[Complete runnable example](../examples/merchantSubscriptionInvoices-list.php)

