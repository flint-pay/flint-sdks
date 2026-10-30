[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# discountPreviews

### discountPreviews.create

Evaluates promotion outcomes for an order without changing it. Returns the complete result inside data, without creating a resource or requiring an idempotency key. Use `promotion_id` for server-side apply flows where you already know the promotion, including code-gated promotions, which then apply without a code and count only toward the promotion's `max_uses`. Checkout credentials must use `promotion_code`. The response includes applied, skipped, and single-threshold available promotion candidates.

`POST /v1/discount-previews`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [DiscountPreviewRequestInput](../models/DiscountPreviewRequestInput.md#discountpreviewrequestinput) | The request body for: Create discount preview. |

Body model: [DiscountPreviewRequestInput](../models/DiscountPreviewRequestInput.md#discountpreviewrequestinput).

#### discountPreviews.create body fields

Field definitions: [shared fields](../models/DiscountPreviewRequestInput.md#discountpreviewrequestinput). Models: [CreateOrderDiscountInput](../models/CreateOrderDiscountInput.md#createorderdiscountinput).

#### Response

Returned payload: [DiscountPreview](../models/DiscountPreview.md#discountpreview).

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

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->discountPreviews->create([
  'order_id' => 'ord_01ARZ3NDEKTSV4RRFFQ69G5FAV',
], new RequestOptions());
```

[Complete runnable example](../examples/discountPreviews-create.php)

