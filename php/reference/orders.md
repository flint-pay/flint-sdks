[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# orders

### orders.applyDiscount

Applies a promotion-backed or manual discount to an order. Checkout-authenticated buyers must provide a promotion code; resource IDs and manual discounts require merchant authentication.

`POST /v1/orders/{order_id}/discounts`

Signature: `applyDiscount(string|Model $order_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [ApplyDiscountRequestInput](../models/ApplyDiscountRequestInput.md#applydiscountrequestinput) | The request body for: Apply discount. |

Body model: [ApplyDiscountRequestInput](../models/ApplyDiscountRequestInput.md#applydiscountrequestinput).

#### orders.applyDiscount body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional order version from the last order read. The mutation fails if the order changed. Format: `int64`. minimum: `1`. |
| `manual` | Optional | [ManualDiscountRequestInput](../models/ManualDiscountRequestInput.md#manualdiscountrequestinput) | A discount you set by hand, with a name and an amount. A discount you apply by hand to an order, with a name, an amount, and the order, line items, or charges it applies to. |
| `promotion` | Optional | [PromotionRefRequestInput](../models/PromotionRefRequestInput.md#promotionrefrequestinput) | The promotion to apply. Identifies the promotion to apply, by promotion code or by promotion ID. |

#### orders.applyDiscount: ApplyDiscountRequestPromotion

The `Promotion` variant of `ApplyDiscountRequest`.

Body model: [ApplyDiscountRequestPromotionInput](../models/ApplyDiscountRequestPromotionInput.md#applydiscountrequestpromotioninput).

#### orders.applyDiscount: ApplyDiscountRequestManual

The `Manual` variant of `ApplyDiscountRequest`.

Body model: [ApplyDiscountRequestManualInput](../models/ApplyDiscountRequestManualInput.md#applydiscountrequestmanualinput).

#### Response

Returned payload: [Order](../models/Order.md#order).

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
| 502 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->applyDiscount('ord_01KEZF7C0054GQKJ142A8X367A', [
  'promotion' => (object) [
    'promotion_id' => 'promo_01KEZF7C00QQ8EZ74BDYSZ315V',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-applyDiscount.php)

### orders.applyGiftCard

Selects a gift card by its current code and returns masked selections and an unreserved estimate. No value is held or debited. Optional expected_version must match the order version returned by the last read. An order may select at most 20 gift cards. Gift card value cannot pay for subscription orders. Retry a lost response with the same idempotency key to recover the original selection result.

`POST /v1/orders/{order_id}/gift-cards`

Signature: `applyGiftCard(string|Model $order_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Order ID. |
| `Flint-Gift-Card-Challenge` | Optional | string | Single-use proof from the checkout's gift card challenge. Needed only after GIFT_CARD_CHALLENGE_REQUIRED. While a challenge is required, every code needs a new proof, for up to an hour after the failures that triggered it. Ignored for API keys. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [ApplyOrderGiftCardRequestInput](../models/ApplyOrderGiftCardRequestInput.md#applyordergiftcardrequestinput) | The request body for: Apply a gift card to an order. |

Body model: [ApplyOrderGiftCardRequestInput](../models/ApplyOrderGiftCardRequestInput.md#applyordergiftcardrequestinput).

#### orders.applyGiftCard body fields

Field definitions: [shared fields](../models/ApplyOrderGiftCardRequestInput.md#applyordergiftcardrequestinput).

#### Response

Returned payload: [Order](../models/Order.md#order).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->applyGiftCard('ord_01KEZF7C0054GQKJ142A8X367A', [
  'code' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-applyGiftCard.php)

### orders.cancelPaymentAttempt

Cancels an active order payment attempt, its unsettled payment legs, and its attempt-owned holds.

`POST /v1/orders/{order_id}/payment-attempts/{order_payment_attempt_id}/cancel`

Signature:

```text
cancelPaymentAttempt(string|
  Model $order_id,
 string|
  Model $order_payment_attempt_id,
 array|
  Model|
  null $params = null,
 ?RequestOptions $options = null)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `order_payment_attempt_id` | Required | string | Flint order payment attempt ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [CancelOrderPaymentAttemptRequestInput](../models/CancelOrderPaymentAttemptRequestInput.md#cancelorderpaymentattemptrequestinput) | The request body for: Cancel order payment attempt. |

Body model: [CancelOrderPaymentAttemptRequestInput](../models/CancelOrderPaymentAttemptRequestInput.md#cancelorderpaymentattemptrequestinput).

#### orders.cancelPaymentAttempt body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cancellation_reason` | Optional | string | Optional merchant-supplied cancellation reason. Values: `"requested_by_customer"`, `"duplicate"`, `"fraudulent"`, `"abandoned"`. |

#### Response

Returned payload: [CancelOrderPaymentAttemptResult](../models/CancelOrderPaymentAttemptResult.md#cancelorderpaymentattemptresult).

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
| 502 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->cancelPaymentAttempt('ord_01KEZF7C0054GQKJ142A8X367A', 'opat_01KEZF7C00B5PW9F2R8A4YSH5D', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-cancelPaymentAttempt.php)

### orders.close

Closes an open order and stops further payment. Cancels pending discounts, releases their reservations, and recalculates totals; canceled discounts remain visible with status: "canceled" but no longer reduce the total. Unused order-owned payment intents are canceled. When collected money remains refundable, send collected_money_behavior: keep to close and keep it, or refund it first with POST /v1/refunds and order_id. Closing does not refund money; refunds remain available afterwards. Closing is blocked while payment collection is in progress. To complete a zero-balance order as paid, use POST /v1/orders/{order_id}/pay. closed_reason and closed_at record why and when the order closed. The request body is optional. Send expected_version to reject a mutation based on an outdated order read.

`POST /v1/orders/{order_id}/close`

Signature: `close(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [CloseOrderRequestInput](../models/CloseOrderRequestInput.md#closeorderrequestinput) | The request body for: Close order. |

Body model: [CloseOrderRequestInput](../models/CloseOrderRequestInput.md#closeorderrequestinput).

#### orders.close body fields

Field definitions: [shared fields](../models/CloseOrderRequestInput.md#closeorderrequestinput).

#### Response

Returned payload: [Order](../models/Order.md#order).

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
| 502 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->close('ord_01KEZF7C0054GQKJ142A8X367A', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-close.php)

### orders.create

Creates an order for the authenticated merchant. For USD orders, an effective requested tip may be up to the larger of $1,000 or 100% of the post-discount merchandise subtotal.

`POST /v1/orders`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateOrderRequestInput](../models/CreateOrderRequestInput.md#createorderrequestinput) | The request body for: Create order. |

Body model: [CreateOrderRequestInput](../models/CreateOrderRequestInput.md#createorderrequestinput).

#### orders.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_note` | Optional | string | A note to the buyer. minLength: `1`. maxLength: `1000`. |
| `customer_id` | Optional | string | ID of the customer this order belongs to. minLength: `1`. |
| `delivery` | Optional | [OrderDeliveryRequestInput](../models/OrderDeliveryRequestInput.md#orderdeliveryrequestinput) | Quotes the exact delivery method and atomically selects it with its charge and inventory hold. Requires orders-write and delivery-write. Shipment and local delivery with one choice group are supported. Cannot be combined with delivery_destination or handover. Complete delivery preference to quote and select together with the order's delivery charge and inventory hold. |
| `delivery_destination` | Optional | [OrderDeliveryDestinationRequestInput](../models/OrderDeliveryDestinationRequestInput.md#orderdeliverydestinationrequestinput) | Shipment or local-delivery destination for an order created without a delivery selection. The delivery destination you set when creating or updating an order, with an address and an optional recipient. |
| `discounts` | Optional | Array of [CreateOrderDiscountInput](../models/CreateOrderDiscountInput.md#createorderdiscountinput) | Discounts applied to the order, each with its amount, status, and the line items and charges it covers. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `handover` | Optional | [OrderHandoverRequestInput](../models/OrderHandoverRequestInput.md#orderhandoverrequestinput) | Carry-out sale: every physical item is handed to the buyer at this location when the order is paid, so paying needs no delivery selection. Can't be combined with delivery_destination. Every physical item is handed to the buyer at this location when the order is paid. Replaces a delivery selection. |
| `internal_note` | Optional | string | A note for your team. Buyer reads leave it out. minLength: `1`. maxLength: `1000`. |
| `inventory_routing_source` | Optional | [InventoryRoutingSourceRequestInput](../models/InventoryRoutingSourceRequestInput.md#inventoryroutingsourcerequestinput) | How Flint chooses the Locations that fill this order's inventory: one fixed Location, an allocation policy, or a specific policy revision. Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`. |
| `line_items` | Required | Array of [CreateOrderLineItemRequestInput](../models/CreateOrderLineItemRequestInput.md#createorderlineitemrequestinput) | Items the order sells, each with its pricing, tax, and fulfillment quantities. minItems: `1`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `requested_tip` | Optional | [CreateOrderTipInput](../models/CreateOrderTipInput.md#createordertipinput) | Optional requested tip. Its effective amount must satisfy the CreateOrderTip limit. Requested tip expressed as either a flat amount or a percentage. Send exactly one of amount_money or percent. |
| `tax` | Optional | [OrderTaxRequestInput](../models/OrderTaxRequestInput.md#ordertaxrequestinput) | Tax settings for the order. Tax settings for a new order: whether tax is enabled, its calculation, location, and exemption selection. |

#### Response

Returned payload: [Order](../models/Order.md#order).

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
| 502 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->create([
  'line_items' => [
    (object) [
      'type' => 'variant',
      'variant_id' => 'var_01KEZF7C004GSH2KT8CNYVMHGX',
    ],
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-create.php)

### orders.createAccessLink

Creates the link Flint's receipt email carries, to put in buyer email or messages you send yourself. It opens the order in your Flint-hosted customer account without a sign-in, and lets the buyer have the receipt sent again to the order's email. It works for 30 days or 10 opens, whichever comes first; after that the buyer signs in to see the order. The url is a bearer credential. Flint returns it only in this response and in a retry with the same idempotency key, so send it only to the buyer and keep it out of logs. A call with a new key creates another link; earlier links keep working until they expire. When customer_account.mode is merchant_hosted it fails with `ACTION_NOT_ALLOWED` and reason `merchant_hosted_customer_accounts`, and for an order without a customer, with reason `configuration_required`. Dashboard sessions may create links when the staff member can view orders. Send no request body or an empty object ({}). Idempotency is scoped to the merchant, credential, environment, and this resource's route. A replay returns the original link without extending its lifetime or replenishing its opens. Without an idempotency key, each call creates a new link and has no replay result. If Flint cannot retain a result after minting, contact support with the request ID before sending a new request.

`POST /v1/orders/{order_id}/access-links`

Signature: `createAccessLink(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | object | maxProperties: `0`. |

Body shape: object.

#### Response

Returned payload: [AccessLink](../models/AccessLink.md#accesslink).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->createAccessLink('ord_01KEZF7C0054GQKJ142A8X367A', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-createAccessLink.php)

### orders.createCharge

Adds a service charge, fee, or surcharge to an order.

`POST /v1/orders/{order_id}/charges`

Signature: `createCharge(string|Model $order_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [AddOrderChargeRequestInput](../models/AddOrderChargeRequestInput.md#addorderchargerequestinput) | The request body for: Add order charge. |

Body model: [AddOrderChargeRequestInput](../models/AddOrderChargeRequestInput.md#addorderchargerequestinput).

#### orders.createCharge body fields

Field definitions: [shared fields](../models/AddOrderChargeRequestInput.md#addorderchargerequestinput). Models: [OrderChargeRequestInput](../models/OrderChargeRequestInput.md#orderchargerequestinput).

#### Response

Returned payload: [Order](../models/Order.md#order).

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
| 502 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->createCharge('ord_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'charge' => (object) [
    'amount_money' => (object) [
      'amount' => '100',
      'currency' => 'USD',
    ],
    'calculation_type' => 'amount',
    'name' => 'example',
    'type' => 'service_fee',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-createCharge.php)

### orders.createEdit

Removes unassigned units from a paid order, adds items the removed value and released charges pay for, or does both, and queues any remaining refund atomically. Removed value and released charges pay for added lines first; only the remainder is refunded. Added lines are priced and taxed as usual, without promotions, and must be variant, bundle, or custom lines with a delivery requirement. They do not join the order's delivery selection. An edit that would leave a balance due writes nothing and returns LIMIT_EXCEEDED with reason order_edit_balance_due, with maximum_money equal to the removed value plus released charges. Bundle components must all be unassigned; dispatched quantities use Returns. Original quantities and pricing remain the sale record. The edit, added stock commitments, committed tax, and release of removed stock commit together; refund processing can continue afterward. Invoice-collected, subscription-owned, return-owned, disputed orders and unresolved inventory exceptions cannot be edited. Charges change only through charge_refunds. A zero-value edit creates no refund. Refund processing may still be pending, so refunds can be empty and refund.created follows later. Refund failures leave this immutable edit recorded. When supported_actions contains retry, use POST /v1/orders/{order_id}/edits/{order_edit_id}/retry to refund the remaining money. On VERSION_CONFLICT, keep the draft, fetch the order, preview again, and reconcile it before committing with the new expected_order_version and a new key. Retry a lost response with the original Idempotency-Key and unchanged body: Flint recovers the committed edit and its current order and refunds, without repeating the edit. If recovery cannot complete, retain the key and request ID for support; do not change keys to retry an uncertain result.

`POST /v1/orders/{order_id}/edits`

Signature: `createEdit(string|Model $order_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | The order that owns the edit. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateOrderEditRequestInput](../models/CreateOrderEditRequestInput.md#createordereditrequestinput) | Remove unassigned units from a paid order, add items the removed value and released charges pay for, or do both, and queue any remaining refund atomically. |

Body model: [CreateOrderEditRequestInput](../models/CreateOrderEditRequestInput.md#createordereditrequestinput).

#### orders.createEdit body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `add_line_items` | Optional | Array of [CreateOrderLineItemRequestInput](../models/CreateOrderLineItemRequestInput.md#createorderlineitemrequestinput) | Lines to add after removals, in the same shape as POST /v1/orders/{order_id}/line-items. Only variant, bundle, and custom lines with a delivery requirement can be added. Added lines are priced and taxed as usual, without promotions, and do not join the order's delivery selection. minItems: `1`. maxItems: `100`. |
| `charge_refunds` | Optional | Array of [RefundChargeInput](../models/RefundChargeInput.md#refundchargeinput) | Charges to release. Released value pays for added lines first and the rest is refunded. Omitting amount_money releases the charge's remaining refundable amount. maxItems: `100`. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Refund destinations, with the same defaults as POST /v1/refunds. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `expected_order_version` | Required | integer | The order.version the edit draft was based on. On VERSION_CONFLICT, keep the draft, fetch the order, preview again, and reconcile before committing with the new version and a new Idempotency-Key. Format: `int64`. minimum: `1`. |
| `note` | Optional | string | Internal merchant note. Omitted from buyer and webhook payloads and refund messages. minLength: `1`. maxLength: `500`. |
| `reason` | Optional | string | Reason for the edit and any refund it creates. Values: [13 declared values](../models/CreateOrderEditRequestInput.md#createordereditrequestinput-reason-values). |
| `remove_line_items` | Optional | Array of [OrderEditRemovalRequestInput](../models/OrderEditRemovalRequestInput.md#ordereditremovalrequestinput) | Whole unassigned units to remove. Each line appears once. Original quantities and pricing stay unchanged. Send remove_line_items, add_line_items, or both. minItems: `1`. maxItems: `100`. |

#### orders.createEdit: variant 1



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `add_line_items` | Optional | Array of [CreateOrderLineItemRequestInput](../models/CreateOrderLineItemRequestInput.md#createorderlineitemrequestinput) | Lines to add after removals, in the same shape as POST /v1/orders/{order_id}/line-items. Only variant, bundle, and custom lines with a delivery requirement can be added. Added lines are priced and taxed as usual, without promotions, and do not join the order's delivery selection. minItems: `1`. maxItems: `100`. |
| `charge_refunds` | Optional | Array of [RefundChargeInput](../models/RefundChargeInput.md#refundchargeinput) | Charges to release. Released value pays for added lines first and the rest is refunded. Omitting amount_money releases the charge's remaining refundable amount. maxItems: `100`. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Refund destinations, with the same defaults as POST /v1/refunds. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `expected_order_version` | Required | integer | The order.version the edit draft was based on. On VERSION_CONFLICT, keep the draft, fetch the order, preview again, and reconcile before committing with the new version and a new Idempotency-Key. Format: `int64`. minimum: `1`. |
| `note` | Optional | string | Internal merchant note. Omitted from buyer and webhook payloads and refund messages. minLength: `1`. maxLength: `500`. |
| `reason` | Optional | string | Reason for the edit and any refund it creates. Values: [13 declared values](../models/CreateOrderEditRequestInput.md#createordereditrequestinput-reason-values). |
| `remove_line_items` | Required | Array of [OrderEditRemovalRequestInput](../models/OrderEditRemovalRequestInput.md#ordereditremovalrequestinput) | Whole unassigned units to remove. Each line appears once. Original quantities and pricing stay unchanged. Send remove_line_items, add_line_items, or both. minItems: `1`. maxItems: `100`. |

#### orders.createEdit: variant 2



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `add_line_items` | Required | Array of [CreateOrderLineItemRequestInput](../models/CreateOrderLineItemRequestInput.md#createorderlineitemrequestinput) | Lines to add after removals, in the same shape as POST /v1/orders/{order_id}/line-items. Only variant, bundle, and custom lines with a delivery requirement can be added. Added lines are priced and taxed as usual, without promotions, and do not join the order's delivery selection. minItems: `1`. maxItems: `100`. |
| `charge_refunds` | Optional | Array of [RefundChargeInput](../models/RefundChargeInput.md#refundchargeinput) | Charges to release. Released value pays for added lines first and the rest is refunded. Omitting amount_money releases the charge's remaining refundable amount. maxItems: `100`. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput) | Refund destinations, with the same defaults as POST /v1/refunds. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `expected_order_version` | Required | integer | The order.version the edit draft was based on. On VERSION_CONFLICT, keep the draft, fetch the order, preview again, and reconcile before committing with the new version and a new Idempotency-Key. Format: `int64`. minimum: `1`. |
| `note` | Optional | string | Internal merchant note. Omitted from buyer and webhook payloads and refund messages. minLength: `1`. maxLength: `500`. |
| `reason` | Optional | string | Reason for the edit and any refund it creates. Values: [13 declared values](../models/CreateOrderEditRequestInput.md#createordereditrequestinput-reason-values). |
| `remove_line_items` | Optional | Array of [OrderEditRemovalRequestInput](../models/OrderEditRemovalRequestInput.md#ordereditremovalrequestinput) | Whole unassigned units to remove. Each line appears once. Original quantities and pricing stay unchanged. Send remove_line_items, add_line_items, or both. minItems: `1`. maxItems: `100`. |

#### Response

Returned payload: [CreateOrderEditResult](../models/CreateOrderEditResult.md#createordereditresult).

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
| 502 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required, [As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->createEdit('ord_01KEZF7C0054GQKJ142A8X367A', [
  'expected_order_version' => 1,
  'remove_line_items' => [
    (object) [
      'order_line_item_id' => 'li_01KEZF7C008YPRCK7VDKTGWR31',
      'quantity' => 1,
    ],
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-createEdit.php)

### orders.createLineItems

Adds one or more line items to an order.

`POST /v1/orders/{order_id}/line-items`

Signature: `createLineItems(string|Model $order_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [AddLineItemsRequestInput](../models/AddLineItemsRequestInput.md#addlineitemsrequestinput) | The request body for: Add line items. |

Body model: [AddLineItemsRequestInput](../models/AddLineItemsRequestInput.md#addlineitemsrequestinput).

#### orders.createLineItems body fields

Field definitions: [shared fields](../models/AddLineItemsRequestInput.md#addlineitemsrequestinput). Models: [CreateOrderLineItemRequestInput](../models/CreateOrderLineItemRequestInput.md#createorderlineitemrequestinput).

#### Response

Returned payload: [Order](../models/Order.md#order).

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
| 502 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->createLineItems('ord_01KEZF7C0054GQKJ142A8X367A', [
  'line_items' => [
    (object) [
      'type' => 'variant',
      'variant_id' => 'var_01KEZF7C004GSH2KT8CNYVMHGX',
    ],
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-createLineItems.php)

### orders.deleteCharge

Removes a single service charge, fee, or surcharge from an order.

`DELETE /v1/orders/{order_id}/charges/{order_charge_id}`

Signature: `deleteCharge(string|Model $order_id, string|Model $order_charge_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `order_charge_id` | Required | string | Flint order charge ID. |
| `expected_version` | Optional | integer | Order version from the last order read. The mutation fails if the order changed. Format: `int64`. minimum: `1`. maximum: `9007199254740991`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [Order](../models/Order.md#order).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 502 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->deleteCharge('ord_01KEZF7C0054GQKJ142A8X367A', 'och_01KEZF7C00XX8AKACP0GHKFWWT', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-deleteCharge.php)

### orders.deleteLineItem

Removes a single line item from an order.

`DELETE /v1/orders/{order_id}/line-items/{order_line_item_id}`

Signature: `deleteLineItem(string|Model $order_id, string|Model $order_line_item_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `order_line_item_id` | Required | string | Flint order line item ID. |
| `expected_version` | Optional | integer | Order version from the last order read. The mutation fails if the order changed. Format: `int64`. minimum: `1`. maximum: `9007199254740991`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [Order](../models/Order.md#order).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 502 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->deleteLineItem('ord_01KEZF7C0054GQKJ142A8X367A', 'li_01KEZF7C008YPRCK7VDKTGWR31', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-deleteLineItem.php)

### orders.get

Returns a single order by ID.

`GET /v1/orders/{order_id}`

Signature: `get(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: customer, fulfillments.packages, fulfillments.shipments, payment_intents, subscription, subscription_plan. Expansion requires the base order read scope plus the read scope for each expanded resource. Limits: at most 10 unique expand paths per request. To-many expansions are capped at 20 related objects per path. Items values: `"customer"`, `"fulfillments.packages"`, `"fulfillments.shipments"`, `"payment_intents"`, `"subscription"`, `"subscription_plan"`. Values: `"customer"`, `"fulfillments.packages"`, `"fulfillments.shipments"`, `"payment_intents"`, `"subscription"`, `"subscription_plan"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [Order](../models/Order.md#order).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->orders->get('ord_01KEZF7C0054GQKJ142A8X367A', [], new RequestOptions());
```

[Complete runnable example](../examples/orders-get.php)

### orders.getEdit

Returns an immutable edit with its frozen refund amounts and current refund IDs. The internal note is visible to merchant callers only.

`GET /v1/orders/{order_id}/edits/{order_edit_id}`

Signature: `getEdit(string|Model $order_id, string|Model $order_edit_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | The order that owns the edit. |
| `order_edit_id` | Required | string | The edit belonging to this order. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [OrderEdit](../models/OrderEdit.md#orderedit).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->orders->getEdit('ord_01KEZF7C0054GQKJ142A8X367A', 'oed_01KEZF7C00A6BQ4TBGWFDJ944A', [], new RequestOptions());
```

[Complete runnable example](../examples/orders-getEdit.php)

### orders.getPaymentAttempt

Returns one durable payment attempt for the order. Checkout-session callers can read only attempts created by their own session.

`GET /v1/orders/{order_id}/payment-attempts/{order_payment_attempt_id}`

Signature:

```text
getPaymentAttempt(string|
  Model $order_id,
 string|
  Model $order_payment_attempt_id,
 array|
  Model|
  null $params = null,
 ?RequestOptions $options = null)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `order_payment_attempt_id` | Required | string | Flint order payment attempt ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [OrderPaymentAttempt](../models/OrderPaymentAttempt.md#orderpaymentattempt).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->orders->getPaymentAttempt('ord_01KEZF7C0054GQKJ142A8X367A', 'opat_01KEZF7C00B5PW9F2R8A4YSH5D', [], new RequestOptions());
```

[Complete runnable example](../examples/orders-getPaymentAttempt.php)

### orders.getReceiptPDF

Downloads a numbered receipt for an order with collected money, covering successful payment intents and gift card redemptions, including payments and refunds. Orders paid only by manual cash, check, or wire invoice payments return 409 ACTION_NOT_ALLOWED with reason unsupported_state; download the invoice PDF instead. Mixed orders list only successful payment intents and gift card redemptions. Available under either order_receipts email delivery mode. Buyer and seller identity is frozen on the first snapshot write; payments, refunds, and branding are current.

`GET /v1/orders/{order_id}/receipt-pdf`

Signature: `getReceiptPDF(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Response body (inside Result.data): null.

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->orders->getReceiptPDF('ord_01KEZF7C0054GQKJ142A8X367A', [], new RequestOptions());
```

[Complete runnable example](../examples/orders-getReceiptPDF.php)

### orders.list

Returns a paginated list of orders for the authenticated merchant. Default order: created_at descending, then order_id descending.

`GET /v1/orders`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `customer_id` | Optional | string | Filter by customer ID. pattern: `^cus_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `product_id` | Optional | string | Filter to orders with any line item referencing this product ID. Bundle lines don't match their component products. An unknown product ID returns an empty page. pattern: `^prod_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `variant_id` | Optional | string | Filter to orders with any line item referencing this variant ID. Bundle lines don't match their component variants. An unknown variant ID returns an empty page. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `email` | Optional | string | Filter to orders whose buyer_email or linked customer's email equals this address, compared case-insensitively after trimming, with accents preserved. Requires a bare email address. Format: `email`. |
| `order_id` | Optional | Array of string or string | Exact-match filter on order IDs. Matches any of up to 100 distinct IDs. Unknown IDs and orders outside your merchant or environment are absent. Other filters still apply, and results keep the list's ordering and pagination. Keep the same ID set on subsequent pages. |
| `closed_reason` | Optional | Array of string or string | Why a closed order closed. Matches orders closed for any reason given. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"invoice_voided"`, `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`. Values: `"invoice_voided"`, `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`. |
| `status` | Optional | Array of string or string | Order status: open or closed. Selecting open and closed includes both statuses. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"open"`, `"closed"`. Values: `"open"`, `"closed"`. |
| `payment_status` | Optional | Array of string or string | Filter by settled collection status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"unpaid"`, `"partially_paid"`, `"paid"`. Values: `"unpaid"`, `"partially_paid"`, `"paid"`. |
| `refund_status` | Optional | Array of string or string | Filter by refund progress. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"none"`, `"partially_refunded"`, `"refunded"`. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `fulfillment_status` | Optional | Array of string or string | Filter by aggregate order fulfillment status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`. Values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`. |
| `order_number` | Optional | string | Filter by merchant-visible order number. |
| `has_backordered_quantity` | Optional | boolean | Filter by whether any tracked line has units waiting for stock. False includes orders with no backordered units. |
| `has_unassigned_fulfillment_quantity` | Optional | boolean | Filter by whether any required fulfillment quantity is unassigned. True includes orders with a positive sum of line fulfillment_quantities.unassigned_quantity; false includes orders with no unassigned quantity, including orders that need no fulfillment. |
| `has_invoice` | Optional | boolean | Filter by whether invoice_id is set, including a voided invoice. False includes orders with no invoice. |
| `has_open_fulfillment` | Optional | boolean | Filter by whether the order has an open fulfillment. A fulfillment remains open until it completes, is canceled, fails, or is marked as a no-show. False includes orders with no fulfillments. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `origin` | Optional | Array of string or string | Filter by order origin. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"virtual_terminal"`, `"payment_link"`, `"checkout"`, `"api"`, `"subscription"`, `"invoice"`. Values: `"virtual_terminal"`, `"payment_link"`, `"checkout"`, `"api"`, `"subscription"`, `"invoice"`. |
| `query` | Optional | string | Search across order_id, order number, external_reference_id, fulfillment external_reference_id, buyer_email, notes, and line item names. The linked customer's name and email aren't searched; use email or customer_id to find a customer's orders. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as ord_01. |
| `subscription_id` | Optional | string | Filter by subscription ID. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `subscription_delivery_changed` | Optional | boolean | Filter by whether the subscriber changed delivery after this order was paid. |
| `return_id` | Optional | string | Filter by the Return that created a replacement order. pattern: `^ret_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `return_resolution_id` | Optional | string | Filter by the ReturnResolution that created a replacement order. pattern: `^retres_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `payment_link_id` | Optional | string | Filter by the payment link whose checkout created the order. pattern: `^pl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `min_amount` | Optional | integer | Inclusive lower bound on pricing_amounts.total_money.amount. Requires currency. Format: `int64`. minimum: `1`. |
| `max_amount` | Optional | integer | Inclusive upper bound on pricing_amounts.total_money.amount. Requires currency. Format: `int64`. minimum: `1`. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by order_id. Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`, `"settlement_amounts.outstanding_money"`, `"pricing_amounts.total_money"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: customer, subscription, subscription_plan. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Items values: `"customer"`, `"subscription"`, `"subscription_plan"`. Values: `"customer"`, `"subscription"`, `"subscription_plan"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [OrderListResponse](../models/OrderListResponse.md#orderlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->orders->list([], new RequestOptions());
```

[Complete runnable example](../examples/orders-list.php)

### orders.listActivities

Returns a read-only, human-readable history log for an order. Use it to render timelines and debug what happened, not as a source of truth, ledger, or webhook replacement. Read the owning resource for authoritative state: the order for balances and status, the payment for payment state, the refund for refund outcomes, and the checkout session for checkout state. Do not sum balance_delta_money to compute an order balance. Informational rows such as payment_failed, refund_failed, and checkout_session_expired have a zero balance delta. The default order is newest first. Use sort_direction=asc for chronological timeline rendering. A typical chronological log might show created, payment_failed, payment, refund, then refund_failed; each row gives one reference to click through for the authoritative resource. Default order: created_at descending, then order_activity_id descending.

`GET /v1/orders/{order_id}/activities`

Signature: `listActivities(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `activity_type` | Optional | Array of string or string | Filter by activity type. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [32 declared values](../models/OrderActivityInput.md#orderactivityinput-activity_type-values). Values: [32 declared values](../models/OrderActivityInput.md#orderactivityinput-activity_type-values). |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [OrderActivityListResponse](../models/OrderActivityListResponse.md#orderactivitylistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listActivitiesItems`, `listActivitiesPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->orders->listActivities('ord_01KEZF7C0054GQKJ142A8X367A', [], new RequestOptions());
```

[Complete runnable example](../examples/orders-listActivities.php)

### orders.listCharges

Returns the order's charges sorted by ID in ascending order. Default order: order_charge_id ascending.

`GET /v1/orders/{order_id}/charges`

Signature: `listCharges(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [OrderChargesListResponse](../models/OrderChargesListResponse.md#orderchargeslistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listChargesItems`, `listChargesPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->orders->listCharges('ord_01KEZF7C0054GQKJ142A8X367A', [], new RequestOptions());
```

[Complete runnable example](../examples/orders-listCharges.php)

### orders.listEdits

Lists immutable edits for this order, newest created_at first, with descending order_edit_id as the tiebreaker. Defaults to 20 results. Keep filters unchanged when using a page token. Default order: created_at descending, then order_edit_id descending.

`GET /v1/orders/{order_id}/edits`

Signature: `listEdits(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | The order that owns the edit. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [OrderEditListResponse](../models/OrderEditListResponse.md#ordereditlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listEditsItems`, `listEditsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->orders->listEdits('ord_01KEZF7C0054GQKJ142A8X367A', [], new RequestOptions());
```

[Complete runnable example](../examples/orders-listEdits.php)

### orders.listLineItems

Returns the order's line items sorted by ID in ascending order. Default order: order_line_item_id ascending.

`GET /v1/orders/{order_id}/line-items`

Signature: `listLineItems(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

Field definitions: [shared fields](#request-fields-17).

#### Response

Returned payload: [OrderLineItemsListResponse](../models/OrderLineItemsListResponse.md#orderlineitemslistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listLineItemsItems`, `listLineItemsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->orders->listLineItems('ord_01KEZF7C0054GQKJ142A8X367A', [], new RequestOptions());
```

[Complete runnable example](../examples/orders-listLineItems.php)

### orders.listPaymentAttempts

Returns payment attempts for the order, newest first. Checkout-session callers see only attempts created by their own session. A list filtered by idempotency_key omits pending_actions; read the attempt by ID to get them. Default order: started_at descending, then order_payment_attempt_id descending.

`GET /v1/orders/{order_id}/payment-attempts`

Signature: `listPaymentAttempts(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. pattern: `^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [OrderPaymentAttemptListResponse](../models/OrderPaymentAttemptListResponse.md#orderpaymentattemptlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listPaymentAttemptsItems`, `listPaymentAttemptsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->orders->listPaymentAttempts('ord_01KEZF7C0054GQKJ142A8X367A', [], new RequestOptions());
```

[Complete runnable example](../examples/orders-listPaymentAttempts.php)

### orders.pay

Starts or resumes a payment attempt on the order. Starting a subscription requires buyer_contact.email or an email already saved on the checkout session or order. Set action to pay to charge the full outstanding balance, confirm_payment_intents to confirm order-owned payment intents, setup to save a newly collected token on a zero-balance order, or resume to continue an attempt after a pending client action. Each action accepts only its own fields. Only confirm_payment_intents accepts completion_behavior. A pay action without payment_source is valid only when the outstanding balance is zero. To continue a resumable attempt, send action: resume with order_payment_attempt_id and a new Idempotency-Key. A Tap to Pay reader returns requires_action, is_resumable true, and a card_presentment pending action with stripe.terminal_payment_intent authority for the Stripe Terminal SDK. After the app collects and confirms, resume reads the outcome: authorization or capture applies it, processing keeps the attempt processing, and no card or a decline keeps it requires_action with the same authority. A decline updates last_payment_error without ending the attempt; cancel to give up. An exact retry of the original request with its Idempotency-Key returns the stored response if the request completed, or recovers the same attempt if it was interrupted. Payment intents with manual capture return an active authorization instead of settling immediately. A replay preserves the original HTTP status and domain result. Replays return no URL token or Stripe client secret; pending_actions is empty when action authority was stripped. Read the attempt to recover its current permitted actions. Read GET /v1/orders/{order_id}/payment-attempts/{order_payment_attempt_id} for the attempt's current state.

`POST /v1/orders/{order_id}/pay`

Signature: `pay(string|Model $order_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `Flint-Buyer-Device` | Optional | string | A stable random device identifier, independent of the order or checkout session. Required for checkout-session gift card purchases. Keep it for subsequent purchases from the same device; it grants no access. pattern: `^[a-f0-9]{32}$`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [PayOrderRequestInput](../models/PayOrderRequestInput.md#payorderrequestinput) | The request body for: Pay order. |

Body model: [PayOrderRequestInput](../models/PayOrderRequestInput.md#payorderrequestinput).

#### orders.pay with `action: "pay"`

The `pay` variant of `PayOrderRequest`.

Body model: [PayOrderRequestPayInput](../models/PayOrderRequestPayInput.md#payorderrequestpayinput).

#### orders.pay with `action: "confirm_payment_intents"`

The `confirm_payment_intents` variant of `PayOrderRequest`.

Body model: [PayOrderRequestConfirmPaymentIntentsInput](../models/PayOrderRequestConfirmPaymentIntentsInput.md#payorderrequestconfirmpaymentintentsinput).

#### orders.pay with `action: "setup"`

The `setup` variant of `PayOrderRequest`.

Body model: [PayOrderRequestSetupInput](../models/PayOrderRequestSetupInput.md#payorderrequestsetupinput).

#### orders.pay with `action: "resume"`

The `resume` variant of `PayOrderRequest`.

Body model: [PayOrderRequestResumeInput](../models/PayOrderRequestResumeInput.md#payorderrequestresumeinput).

#### Response

Returned payload: [PayOrderResult](../models/CancelOrderPaymentAttemptResult.md#cancelorderpaymentattemptresult).

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
| 502 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required, [As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->pay('ord_01KEZF7C0054GQKJ142A8X367A', [
  'action' => 'pay',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-pay.php)

### orders.removeDiscounts

Removes pending applied discounts or deferred promotions from an order. Send at least one ID across order_discount_ids and deferred_promotion_ids. Deferred promotions can be removed before payment. Redeemed or canceled discounts are settlement history and cannot be removed.

`POST /v1/orders/{order_id}/discounts/remove`

Signature: `removeDiscounts(string|Model $order_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [RemoveDiscountsRequestInput](../models/RemoveDiscountsRequestInput.md#removediscountsrequestinput) | Removes pending order discounts or promotions deferred to subscription billing. Send at least one ID across order_discount_ids and deferred_promotion_ids. |

Body model: [RemoveDiscountsRequestInput](../models/RemoveDiscountsRequestInput.md#removediscountsrequestinput).

#### orders.removeDiscounts body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `deferred_promotion_ids` | Optional | Array of string | IDs from the order's deferred_promotions to remove before payment. May be omitted or empty when order_discount_ids contains an ID. Items: minLength: `1`. |
| `expected_version` | Optional | integer | Optional order version from the last order read. The mutation fails if the order changed. Format: `int64`. minimum: `1`. |
| `order_discount_ids` | Optional | Array of string | IDs from the order's discounts to remove. May be omitted or empty when deferred_promotion_ids contains an ID. Items: minLength: `1`. |

#### orders.removeDiscounts: variant 1



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `deferred_promotion_ids` | Optional | Array of string | IDs from the order's deferred_promotions to remove before payment. May be omitted or empty when order_discount_ids contains an ID. Items: minLength: `1`. |
| `expected_version` | Optional | integer | Optional order version from the last order read. The mutation fails if the order changed. Format: `int64`. minimum: `1`. |
| `order_discount_ids` | Required | Array of string | IDs from the order's discounts to remove. May be omitted or empty when deferred_promotion_ids contains an ID. IDs of the order discounts to remove. minItems: `1`. Items: minLength: `1`. IDs from the order's discounts to remove. May be omitted or empty when deferred_promotion_ids contains an ID. Items: minLength: `1`. IDs of the order discounts to remove. minItems: `1`. |

#### orders.removeDiscounts: variant 2



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `deferred_promotion_ids` | Required | Array of string | IDs from the order's deferred_promotions to remove before payment. May be omitted or empty when order_discount_ids contains an ID. IDs from the order's deferred_promotions to remove before payment. May be omitted or empty when order_discount_ids contains an ID. minItems: `1`. Items: minLength: `1`. IDs from the order's deferred_promotions to remove before payment. May be omitted or empty when order_discount_ids contains an ID. Items: minLength: `1`. IDs from the order's deferred_promotions to remove before payment. May be omitted or empty when order_discount_ids contains an ID. minItems: `1`. |
| `expected_version` | Optional | integer | Optional order version from the last order read. The mutation fails if the order changed. Format: `int64`. minimum: `1`. |
| `order_discount_ids` | Optional | Array of string | IDs from the order's discounts to remove. May be omitted or empty when deferred_promotion_ids contains an ID. Items: minLength: `1`. |

#### Response

Returned payload: [Order](../models/Order.md#order).

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
| 502 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->removeDiscounts('ord_01KEZF7C0054GQKJ142A8X367A', [
  'order_discount_ids' => [
    'ad_01JFXH8Z2K7QF9V3MB0N4T6RCP',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-removeDiscounts.php)

### orders.removeGiftCard

Removes a selected gift card without moving value. The expected_version must still match the order version. Selections cannot change during an active payment attempt. Retry a lost response with the same idempotency key to recover the original selection result.

`DELETE /v1/orders/{order_id}/gift-cards/{gift_card_id}`

Signature: `removeGiftCard(string|Model $order_id, string|Model $gift_card_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Order ID. |
| `gift_card_id` | Required | string | Selected gift card ID. |
| `expected_version` | Required | integer | Order version from the last order read. The mutation fails if the order changed. Format: `int64`. minimum: `1`. maximum: `9007199254740991`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [Order](../models/Order.md#order).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->removeGiftCard('ord_01KEZF7C0054GQKJ142A8X367A', 'gc_01KEZF7C00RT1618WYBM1Y94CG', [
  'expected_version' => 1,
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-removeGiftCard.php)

### orders.repriceDiscounts

Recalculates pending discounts and automatic promotions for a mutable order. The request body is optional. Send expected_version to reject a mutation based on an outdated order read.

`POST /v1/orders/{order_id}/discounts/reprice`

Signature: `repriceDiscounts(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [RepriceDiscountsRequestInput](../models/RepriceDiscountsRequestInput.md#repricediscountsrequestinput) | The request body for: Reprice discounts. |

Body model: [RepriceDiscountsRequestInput](../models/RepriceDiscountsRequestInput.md#repricediscountsrequestinput).

#### orders.repriceDiscounts body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional order version from the last order read. The mutation fails if the order changed. Format: `int64`. minimum: `1`. |

#### Response

Returned payload: [Order](../models/Order.md#order).

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
| 502 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->repriceDiscounts('ord_01KEZF7C0054GQKJ142A8X367A', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-repriceDiscounts.php)

### orders.resolveInventoryException

Marks a paid inventory failure as resolved after an operator has completed manual inventory remediation.

`POST /v1/orders/{order_id}/resolve-inventory-exception`

Signature: `resolveInventoryException(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [ResolveOrderInventoryExceptionRequestInput](../models/ResolveOrderInventoryExceptionRequestInput.md#resolveorderinventoryexceptionrequestinput) | The request body for: Resolve order inventory exception. |

Body model: [ResolveOrderInventoryExceptionRequestInput](../models/ResolveOrderInventoryExceptionRequestInput.md#resolveorderinventoryexceptionrequestinput).

#### orders.resolveInventoryException body fields

Field definitions: [shared fields](../models/ResolveOrderInventoryExceptionRequestInput.md#resolveorderinventoryexceptionrequestinput).

#### Response

Returned payload: [Order](../models/Order.md#order).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->resolveInventoryException('ord_01KEZF7C0054GQKJ142A8X367A', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-resolveInventoryException.php)

### orders.retryEditRefund

Refunds the edit's remaining frozen money after refund processing has failed. Pending and succeeded linked refunds count toward the edit's refunded value. Omit the body or destinations to reuse the edit's original destinations. Retry is unavailable while a linked refund is pending, when nothing remains, or when a payment is disputed. While Flint is still processing the original refund and no linked refund exists, supported_actions is empty and retry returns in_progress. If processing ends without creating a refund, retry becomes available. Use a new Idempotency-Key for a new retry attempt, and the same key and body to recover its lost response. The response contains only refunds created by this attempt.

`POST /v1/orders/{order_id}/edits/{order_edit_id}/retry`

Signature: `retryEditRefund(string|Model $order_id, string|Model $order_edit_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | The order that owns the edit. |
| `order_edit_id` | Required | string | The edit belonging to this order. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [RetryOrderEditRefundRequestInput](../models/RetryOrderEditRefundRequestInput.md#retryordereditrefundrequestinput) | Retry the remaining refund money after refund processing has failed. |

Body model: [RetryOrderEditRefundRequestInput](../models/RetryOrderEditRefundRequestInput.md#retryordereditrefundrequestinput).

#### orders.retryEditRefund body fields

Field definitions: [shared fields](../models/RetryOrderEditRefundRequestInput.md#retryordereditrefundrequestinput). Models: [RefundDestinationsInput](../models/RefundDestinationsInput.md#refunddestinationsinput).

#### Response

Returned payload: [RetryOrderEditRefundResult](../models/RetryOrderEditRefundResult.md#retryordereditrefundresult).

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
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required, [As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->retryEditRefund('ord_01KEZF7C0054GQKJ142A8X367A', 'oed_01KEZF7C00A6BQ4TBGWFDJ944A', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-retryEditRefund.php)

### orders.sendReceipt

Queues a receipt for a paid order, including gift card payments and settled payments, and returns the order unchanged. Send email to choose a recipient, or omit it to use the order's email. If no receipt email is on file, email is required when your credential can set it. Otherwise, the request returns ACTION_NOT_ALLOWED with reason configuration_required. Requires Flint-managed receipt delivery. Sending is limited to once every five minutes per order and normalized recipient. Checkout credentials can send only to the address on file. If no address is on file, checkout credentials can send to at most three distinct addresses over the order's lifetime. Receipts sent for this order through this route count toward this limit, including failed deliveries and receipts sent with a secret API key. Merchant callers can choose any address.

`POST /v1/orders/{order_id}/send-receipt`

Signature: `sendReceipt(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [SendOrderReceiptRequestInput](../models/SendOrderReceiptRequestInput.md#sendorderreceiptrequestinput) | The request body for: Send an order receipt. |

Body model: [SendOrderReceiptRequestInput](../models/SendOrderReceiptRequestInput.md#sendorderreceiptrequestinput).

#### orders.sendReceipt body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Optional | string | Receipt email, limited to 254 characters (Unicode code points) after trimming surrounding whitespace. Format: `email`. minLength: `1`. maxLength: `254`. |

#### Response

Returned payload: [Order](../models/Order.md#order).

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
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->sendReceipt('ord_01KEZF7C0054GQKJ142A8X367A', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-sendReceipt.php)

### orders.update

Applies a sparse update to mutable order fields such as customer_id, notes, metadata, tax, the delivery destination, and the requested tip. catalog_price_behavior defaults to keep. Send reprice with an explicit non-null customer_id to refresh every catalog variant line on an open, unpaid order; reassignment resolves the new customer’s direct list, then segment list, then variant prices. Customer removal is not supported. Checkout verification never reprices existing lines. A request containing only metadata, internal_note, buyer_note, or external_reference_id, with optional expected_version, can update open, closed, paid, and invoice-locked orders without changing totals. Other merchant edits keep hosted and headless checkout sessions open unless an edit closes or completes the order, which ends the session with order_mutated. Edits can also end invoice, return-resolution, and subscription-plan sessions with order_mutated. A session already past expires_at ends with expired before the edit is applied. These annotation updates are blocked while any order payment attempt remains non-terminal, including an authorization awaiting capture, or checkout payment work is still resolving. Requests combining annotations with other fields use the financial mutation rules for the entire request. Send requested_tip: null to clear the current requested tip. Once a payment's capture sets its own tip with tip_money, the order's tip is set per payment: setting or clearing requested_tip returns ACTION_NOT_ALLOWED with reason payment_collected. A merchant can correct a paid subscription signup or renewal destination before shipment by sending delivery_destination and the current order version as expected_version. The committed delivery methods must remain eligible, and shipping and tax totals must stay unchanged. When the correction would change the paid totals, the request fails with `ACTION_NOT_ALLOWED` and reason `payment_collected`. The detail can include shipping_money, requoted_shipping_money, tax_money, and requoted_tax_money.

`PATCH /v1/orders/{order_id}`

Signature: `update(string|Model $order_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [UpdateOrderRequestInput](../models/UpdateOrderRequestInput.md#updateorderrequestinput) | The request body for: Update order. minProperties: `1`. |

Body model: [UpdateOrderRequestInput](../models/UpdateOrderRequestInput.md#updateorderrequestinput).

#### orders.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_note` | Optional | string or null | Buyer-provided note about this order, such as a gift message or purchase preference. Send null to clear it. minLength: `1`. maxLength: `1000`. |
| `catalog_price_behavior` | Optional | string | Defaults to keep, preserving frozen prices. Send reprice with an explicit non-null customer_id to refresh every catalog variant line on an open, unpaid order. Reassigning resolves the new customer’s direct list, then segment list, then variant pricing. Subscription-owned prices remain locked. If any catalog line’s variant is no longer for sale, reprice is refused; remove that line first. Default: `"keep"`. Values: `"keep"`, `"reprice"`. |
| `customer_id` | Optional | string | Customer to attach. Cannot be null or cleared. Reassignment requires catalog_price_behavior: reprice, which resolves the new customer’s direct list, then segment list, then variant pricing. minLength: `1`. |
| `delivery` | Optional | [OrderDeliveryRequestInput](../models/OrderDeliveryRequestInput.md#orderdeliveryrequestinput) or null | Complete replacement delivery preference. Omit to leave unchanged. Requires expected_version, orders-write and delivery-write. Send null to clear a provisional direct-order selection, its charge and hold. Draft invoice orders are allowed until issue; checkout-owned, subscription-owned, paid and locked orders are refused. Change delivery separately from delivery_destination, handover and shipping charge calculations. |
| `delivery_destination` | Optional | [OrderDeliveryDestinationRequestInput](../models/OrderDeliveryDestinationRequestInput.md#orderdeliverydestinationrequestinput) or null | Complete replacement destination. Allowed while the order is open and unpaid and no delivery selection controls it. A merchant may also correct a paid subscription signup or renewal before shipment by sending expected_version, when the committed delivery methods remain eligible and shipping and tax totals stay the same. A paid destination cannot be cleared. Send null to clear an unpaid order's delivery destination. |
| `expected_version` | Optional | integer | Order version from the last order read. Required when sending delivery or correcting a paid delivery destination. Optional for other updates; when supplied, the update fails if the order changed. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system.  Send null to clear external_reference_id. minLength: `1`. maxLength: `255`. |
| `handover` | Optional | [OrderHandoverRequestInput](../models/OrderHandoverRequestInput.md#orderhandoverrequestinput) or null | Carry-out handover to set or replace. Allowed while the order is open, nothing is paid, and no checkout session or delivery selection controls its delivery. Can't be combined with delivery_destination. Send null to clear it. |
| `internal_note` | Optional | string or null | Internal note about this order, visible only to the merchant. Send null to clear it. minLength: `1`. maxLength: `1000`. |
| `inventory_routing_source` | Optional | [InventoryRoutingSourceRequestInput](../models/InventoryRoutingSourceRequestInput.md#inventoryroutingsourcerequestinput) | How Flint chooses the Locations that fill this order's inventory: one fixed Location, an allocation policy, or a specific policy revision. Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Send null to clear caller-owned metadata and preserve Flint-managed keys. |
| `requested_tip` | Optional | [CreateOrderTipInput](../models/CreateOrderTipInput.md#createordertipinput) or null | Requested tip to set or replace. Send null to clear the current requested tip. Refused with ACTION_NOT_ALLOWED and reason payment_collected once a payment's capture has set its own tip. |
| `tax` | Optional | [OrderTaxUpdateRequestInput](../models/OrderTaxUpdateRequestInput.md#ordertaxupdaterequestinput) | Tax settings for the order. Changes to an order's tax settings: whether tax is enabled, the calculation, the location, the exemption selection, and per-line-item or per-charge calculations. |

#### Response

Returned payload: [Order](../models/Order.md#order).

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
| 502 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->update('ord_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'buyer_note' => 'Please include a gift receipt',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-update.php)

### orders.updateCharge

Updates a single service charge, fee, or surcharge on an order.

`PATCH /v1/orders/{order_id}/charges/{order_charge_id}`

Signature: `updateCharge(string|Model $order_id, string|Model $order_charge_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `order_charge_id` | Required | string | Flint order charge ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [UpdateOrderChargeRequestInput](../models/UpdateOrderChargeRequestInput.md#updateorderchargerequestinput) | The request body for: Update order charge. minProperties: `1`. |

Body model: [UpdateOrderChargeRequestInput](../models/UpdateOrderChargeRequestInput.md#updateorderchargerequestinput).

#### orders.updateCharge body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseFaceValueMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvariantgiftcardpurchasefacevaluemoney) | Replacement fixed charge amount in the order currency. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculation_basis` | Optional | string | The amount a percent charge is calculated from. Values: `"subtotal_pre_discount"`, `"subtotal_post_discount"`. |
| `description` | Optional | string or null |  Send null to clear description. minLength: `1`. maxLength: `2048`. |
| `expected_version` | Optional | integer | Optional order version from the last order read. The mutation fails if the order changed. Format: `int64`. minimum: `1`. |
| `fulfillment_id` | Optional | string or null |  Send null to unlink the fulfillment. minLength: `1`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Send null to clear all metadata. |
| `name` | Optional | string | What the buyer sees for this charge at checkout and on receipts. minLength: `1`. maxLength: `255`. |
| `percent` | Optional | number | Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges use `amount_money` instead. multipleOf: `0.0001`. |
| `tax` | Optional | [OrderCalculatedChargeTaxRequestInput](../models/OrderCalculatedChargeTaxRequestInput.md#ordercalculatedchargetaxrequestinput) | How tax applies to this charge. Tax settings for an order charge calculated by Flint or supplied by you, including the charge's tax category and whether it is taxable. |
| `type` | Optional | string | What the charge is for. It classifies the charge in reporting and sets its default tax category. Values: [17 declared values](../models/BuyerOrderChargeInput.md#buyerorderchargeinput-type-values). |

#### Response

Returned payload: [Order](../models/Order.md#order).

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
| 502 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->updateCharge('ord_01ARZ3NDEKTSV4RRFFQ69G5FAV', 'och_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'name' => 'Priority delivery',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-updateCharge.php)

### orders.updateLineItem

Updates a single line item on an order. On paid orders, send expected_ship_date as a YYYY-MM-DD calendar date or null to clear it. It must be the only field apart from expected_version. expected_version is the order version returned in data.version. Send gift_card_face_value_money and expected_version to select an unpaid gift card line's face value within its frozen offer and reprice the order before any purchase funding. Send gift_card_recipient and expected_version to replace or clear recipient delivery details before any purchase funding. Checkout credentials can update gift card face value and recipient details together, modifiers, or a line subscription offer selection, each with expected_version. Repeating the current gift card face value does not change the order version. Set subscription to null to buy the line once.

`PATCH /v1/orders/{order_id}/line-items/{order_line_item_id}`

Signature: `updateLineItem(string|Model $order_id, string|Model $order_line_item_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `order_line_item_id` | Required | string | Flint order line item ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [UpdateLineItemRequestInput](../models/UpdateLineItemRequestInput.md#updatelineitemrequestinput) | The request body for: Update line item. minProperties: `1`. |

Body model: [UpdateLineItemRequestInput](../models/UpdateLineItemRequestInput.md#updatelineitemrequestinput).

#### orders.updateLineItem body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Optional | string or null |  Send null to clear description. minLength: `1`. |
| `expected_ship_date` | Optional | string or null | Expected ship date in YYYY-MM-DD format. Send null to clear it. Omission preserves it. Accepted on paid orders as the only field apart from expected_version. Repeating the current date or clearing an already-null date leaves the order version unchanged. Format: `date`. minLength: `1`. |
| `expected_version` | Optional | integer | Order version from the last order read, returned in data.version. Required when any of these fields is present: modifiers, gift_card_recipient, gift_card_face_value_money, subscription. Format: `int64`. minimum: `1`. |
| `gift_card_face_value_money` | Optional | [MoneyValueInput](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseFaceValueMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvariantgiftcardpurchasefacevaluemoney) | Selects the face value of an unpaid, unfunded gift card line within its frozen offer's custom_amount_bounds and reprices the order. Fixed-denomination offers accept only their current value. Omission preserves the value; null is not allowed. Requires expected_version from the order. Checkout credentials may send this field alone or together with gift_card_recipient. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_card_recipient` | Optional | [GiftCardPurchaseRecipientPatchRequestInput](../models/GiftCardPurchaseRecipientPatchRequestInput.md#giftcardpurchaserecipientpatchrequestinput) or null | Replaces the recipient of an unfunded gift card purchase. Omission preserves it; null clears it. Send expected_version from the order. Send null to clear gift_card_recipient. Requires expected_version. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Send null to clear all metadata. |
| `modifiers` | Optional | Array of [OrderLineItemModifierRequestModelInput](../models/OrderLineItemModifierRequestInput.md#orderlineitemmodifierrequestinput) |  |
| `name` | Optional | string | Name of the line item. minLength: `1`. |
| `product_type` | Optional | string | Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does not change tax, delivery, or inventory. On an order line PATCH, omission preserves the classification. Catalog lines use their product's type and reject this input. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`. |
| `quantity` | Optional | integer | Replacement quantity, from 1 through 9999. The extended line subtotal, including modifiers, must satisfy the order money ceiling. Format: `int64`. minimum: `1`. maximum: `9999`. |
| `subscription` | Optional | [SubscribedLineRequestModelInput](../models/SubscribedLineRequestInput.md#subscribedlinerequestinput) or null | Selects an active subscription offer and reprices an unpaid line. Null selects a one-time purchase. Omission preserves the selection. Requires expected_version from the order and clears the delivery selection when terms change. Send null to clear subscription. Requires expected_version. |
| `tax` | Optional | [OrderCalculatedLineItemTaxRequestInput](../models/OrderCalculatedLineItemTaxRequestInput.md#ordercalculatedlineitemtaxrequestinput) | Tax settings for the line item. Tax settings for an order line item calculated by Flint or supplied by you, including the line item tax category and whether it is taxable. |
| `unit_price_money` | Optional | [MoneyValueInput](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseFaceValueMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvariantgiftcardpurchasefacevaluemoney) | Price of one unit. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

#### Response

Returned payload: [Order](../models/Order.md#order).

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
| 502 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->updateLineItem('ord_01ARZ3NDEKTSV4RRFFQ69G5FAV', 'li_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'name' => 'Gift item',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-updateLineItem.php)

