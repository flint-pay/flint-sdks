[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# discountPreviews

### discountPreviews.create

Evaluates promotion outcomes for an order without changing it. Returns the complete result inside data, without creating a resource or requiring an idempotency key. Use `promotion_id` for server-side apply flows where you already know the promotion, including code-gated promotions, which then apply without a code and count only toward the promotion's `max_uses`. Checkout credentials must use `promotion_code`. The response includes applied, skipped, and single-threshold available promotion candidates.

`POST /v1/discount-previews`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [DiscountPreviewRequestInput](../models/DiscountPreviewRequestInput.md#discountpreviewrequestinput) | The request body for: Create discount preview. |

Body model: [DiscountPreviewRequestInput](../models/DiscountPreviewRequestInput.md#discountpreviewrequestinput).

#### discountPreviews.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `discount` | Optional | [CreateOrderDiscountInput](../models/CreateOrderDiscountInput.md#createorderdiscountinput) | A discount to evaluate as if it were applied to the order. A discount to apply when creating an order: either a manual discount or a reference to a promotion. |
| `order_id` | Required | string | The order to evaluate. Checkout session credentials can use only their own order. minLength: `1`. |

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
  'order_id' => 'ord_01KEZF7C0054GQKJ142A8X367A',
], new RequestOptions());
```

[Complete runnable example](../examples/discountPreviews-create.php)

