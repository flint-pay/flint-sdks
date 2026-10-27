[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# paymentMethods

### paymentMethods.get

Returns a single payment method by ID.

`GET /v1/payment-methods/{payment_method_id}`

Signature: `get(string|Model $payment_method_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_method_id` | Required | string |  |
| `expand` | Optional | Array of string | Items values: `"customer"`. |

#### Response

Returned payload: [PaymentMethod](../models/PaymentMethod.md#paymentmethod).

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

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->paymentMethods->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/paymentMethods-get.php)

### paymentMethods.list

Lists payment methods in every status except archived, newest first. Filter by status=active for the cards you can charge. Optionally filter to a customer. Filter by usage off_session to list the payment methods a subscription, automatic invoice, or default payment method can use.

`GET /v1/payment-methods`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Optional | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `type` | Optional | Array of string | minItems: `1`. Items values: `"card"`. |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"pending"`, `"expired"`, `"archived"`, `"failed"`. |
| `usage` | Optional | Array of string | minItems: `1`. Items values: `"on_session"`, `"off_session"`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `expand` | Optional | Array of string | Items values: `"customer"`. |

#### Response

Returned payload: [PaymentMethodsListResponse200](../models/PaymentMethodsListResponse200.md#paymentmethodslistresponse200).

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

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->paymentMethods->list([], new RequestOptions());
```

[Complete runnable example](../examples/paymentMethods-list.php)

### paymentMethods.remove

Deletes a saved payment method so it can no longer be used for future payments. Returns the payment method with status archived, including when it was already archived.

`DELETE /v1/payment-methods/{payment_method_id}`

Signature: `remove(string|Model $payment_method_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_method_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [PaymentMethod](../models/PaymentMethod.md#paymentmethod).

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
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `removeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->paymentMethods->remove('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/paymentMethods-remove.php)

### paymentMethods.save

Initiates saving a payment method and returns the client setup payload needed to complete setup on the frontend.

`POST /v1/payment-methods`

Signature: `save(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [SavePaymentMethodRequestInput](../models/SavePaymentMethodRequestInput.md#savepaymentmethodrequestinput) | The request body for: Create a payment method. |

Body model: [SavePaymentMethodRequestInput](../models/SavePaymentMethodRequestInput.md#savepaymentmethodrequestinput).

#### paymentMethods.save body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | minLength: `1`. |
| `type` | Optional | string | Values: `"card"`. |

#### Response

Returned payload: [PaymentMethodWithSetup](../models/PaymentMethodWithSetup.md#paymentmethodwithsetup).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `saveWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->paymentMethods->save([
  'customer_id' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/paymentMethods-save.php)

