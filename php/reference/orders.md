[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# orders

### orders.addCharge

Adds a service charge, fee, or surcharge to an order.

`POST /v1/orders/{order_id}/charges`

Signature: `addCharge(string|Model $order_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [AddOrderChargeRequestInput](../models/AddOrderChargeRequestInput.md#addorderchargerequestinput) | The request body for: Add order charge. |

Body model: [AddOrderChargeRequestInput](../models/AddOrderChargeRequestInput.md#addorderchargerequestinput).

#### orders.addCharge body fields

Field definitions: [shared fields](../models/AddOrderChargeRequestInput.md#addorderchargerequestinput). Models: [OrderChargeRequestInput](../models/OrderChargeRequestInput.md#orderchargerequestinput).

#### Response

Returned payload: [Order](../models/Order.md#order).

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
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `addChargeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->addCharge('example', [
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

[Complete runnable example](../examples/orders-addCharge.php)

### orders.addLineItems

Adds one or more line items to an order.

`POST /v1/orders/{order_id}/line-items`

Signature: `addLineItems(string|Model $order_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [AddLineItemsRequestInput](../models/AddLineItemsRequestInput.md#addlineitemsrequestinput) | The request body for: Add line items. |

Body model: [AddLineItemsRequestInput](../models/AddLineItemsRequestInput.md#addlineitemsrequestinput).

#### orders.addLineItems body fields

Field definitions: [shared fields](../models/AddLineItemsRequestInput.md#addlineitemsrequestinput). Models: [CreateOrderLineItemRequestInput](../models/CreateOrderLineItemRequestInput.md#createorderlineitemrequestinput).

#### Response

Returned payload: [Order](../models/Order.md#order).

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
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `addLineItemsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->addLineItems('example', [
  'line_items' => [
    (object) [
      'type' => 'variant',
      'variant_id' => 'example',
    ],
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-addLineItems.php)

### orders.applyDiscount

Applies a promotion-backed or manual discount to an order. Checkout-authenticated buyers must provide a promotion code; resource IDs and manual discounts require merchant authentication.

`POST /v1/orders/{order_id}/discounts`

Signature: `applyDiscount(string|Model $order_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [ApplyDiscountRequestInput](../models/ApplyDiscountRequestInput.md#applydiscountrequestinput) | The request body for: Apply discount. |

Body model: [ApplyDiscountRequestInput](../models/ApplyDiscountRequestInput.md#applydiscountrequestinput).

#### orders.applyDiscount body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Optional order version from the last order read. The mutation fails if the order changed. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `manual` | Optional | [ManualDiscountRequestInput](../models/ManualDiscountRequestInput.md#manualdiscountrequestinput) | A discount you apply by hand to an order, with a name, an amount, and the order, line items, or charges it applies to. |
| `promotion` | Optional | [PromotionRefRequestInput](../models/PromotionRefRequestInput.md#promotionrefrequestinput) | Identifies the promotion to apply, by promotion code or by promotion ID. |

#### orders.applyDiscount body oneOf variant 1

The `Promotion` variant of `ApplyDiscountRequest`.

Body model: [ApplyDiscountRequestPromotionInput](../models/ApplyDiscountRequestPromotionInput.md#applydiscountrequestpromotioninput).

#### orders.applyDiscount body oneOf variant 1 fields

Field definitions: [shared fields](../models/ApplyDiscountRequestPromotionInput.md#applydiscountrequestpromotioninput). Models: [ManualDiscountRequestInput](../models/ManualDiscountRequestInput.md#manualdiscountrequestinput), [PromotionRefRequestInput](../models/PromotionRefRequestInput.md#promotionrefrequestinput).

#### orders.applyDiscount body oneOf variant 2

The `Manual` variant of `ApplyDiscountRequest`.

Body model: [ApplyDiscountRequestManualInput](../models/ApplyDiscountRequestManualInput.md#applydiscountrequestmanualinput).

#### orders.applyDiscount body oneOf variant 2 fields

Field definitions: [shared fields](../models/ApplyDiscountRequestManualInput.md#applydiscountrequestmanualinput). Models: [ManualDiscountRequestInput](../models/ManualDiscountRequestInput.md#manualdiscountrequestinput), [PromotionRefRequestInput](../models/PromotionRefRequestInput.md#promotionrefrequestinput).

#### Response

Returned payload: [Order](../models/Order.md#order).

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
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `applyDiscountWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->applyDiscount('example', [
  'promotion' => (object) [
    'promotion_id' => 'example',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-applyDiscount.php)

### orders.applyGiftCard

Selects a gift card by its current code and returns masked selections and an unreserved estimate. No value is held or debited. Optional expected_version must match the order version returned by the last read. An order may select at most 20 gift cards. Gift card value cannot pay for subscription orders. Retry a lost response with the same Idempotency-Key to recover the original selection result.

`POST /v1/orders/{order_id}/gift-cards`

Signature: `applyGiftCard(string|Model $order_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `Flint-Gift-Card-Challenge` | Optional | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [ApplyOrderGiftCardRequestInput](../models/ApplyOrderGiftCardRequestInput.md#applyordergiftcardrequestinput) | The request body for: Apply a gift card to an order. |

Body model: [ApplyOrderGiftCardRequestInput](../models/ApplyOrderGiftCardRequestInput.md#applyordergiftcardrequestinput).

#### orders.applyGiftCard body fields

Field definitions: [shared fields](../models/ApplyOrderGiftCardRequestInput.md#applyordergiftcardrequestinput).

#### Response

Returned payload: [Order](../models/Order.md#order).

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

Complete body and metadata: `applyGiftCardWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->applyGiftCard('example', [
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
| `order_id` | Required | string |  |
| `order_payment_attempt_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [CancelOrderPaymentAttemptRequestInput](../models/CancelOrderPaymentAttemptRequestInput.md#cancelorderpaymentattemptrequestinput) | The request body for: Cancel order payment attempt. |

Body model: [CancelOrderPaymentAttemptRequestInput](../models/CancelOrderPaymentAttemptRequestInput.md#cancelorderpaymentattemptrequestinput).

#### orders.cancelPaymentAttempt body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cancellation_reason` | Optional | string | Optional merchant-supplied cancellation reason. Values: `"requested_by_customer"`, `"duplicate"`, `"fraudulent"`, `"abandoned"`. |

#### Response

Returned payload: [CancelOrderPaymentAttemptResult](../models/CancelOrderPaymentAttemptResult.md#cancelorderpaymentattemptresult).

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
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `cancelPaymentAttemptWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->cancelPaymentAttempt('example', 'example', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-cancelPaymentAttempt.php)

### orders.closeSession

Closes an open order and stops further payment. Cancels pending discounts, releases their reservations, and recalculates totals; canceled discounts remain visible with status: "canceled" but no longer reduce the total. Unused order-owned payment intents are canceled. When collected money remains refundable, send collected_money_behavior: keep to close and keep it, or refund it first with POST /v1/refunds and order_id. Closing does not refund money; refunds remain available afterwards. Closing is blocked while payment collection is in progress. To complete a zero-balance order as paid, use POST /v1/orders/{order_id}/pay. closed_reason and closed_at record why and when the order closed. The request body is optional. Send expected_version to reject a mutation based on an outdated order read.

`POST /v1/orders/{order_id}/close`

Signature: `closeSession(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [CloseOrderRequestInput](../models/CloseOrderRequestInput.md#closeorderrequestinput) | The request body for: Close order. |

Body model: [CloseOrderRequestInput](../models/CloseOrderRequestInput.md#closeorderrequestinput).

#### orders.closeSession body fields

Field definitions: [shared fields](../models/CloseOrderRequestInput.md#closeorderrequestinput).

#### Response

Returned payload: [Order](../models/Order.md#order).

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
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `closeSessionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->closeSession('example', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-closeSession.php)

### orders.create

Creates an order for the authenticated merchant. For USD orders, an effective requested tip may be up to the larger of $1,000 or 100% of the post-discount merchandise subtotal.

`POST /v1/orders`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateOrderRequestInput](../models/CreateOrderRequestInput.md#createorderrequestinput) | The request body for: Create order. |

Body model: [CreateOrderRequestInput](../models/CreateOrderRequestInput.md#createorderrequestinput).

#### orders.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_note` | Optional | string | minLength: `1`. maxLength: `1000`. |
| `customer_id` | Optional | string | minLength: `1`. |
| `delivery_destination` | Optional | [OrderDeliveryDestinationRequestInput](../models/OrderDeliveryDestinationRequestInput.md#orderdeliverydestinationrequestinput) | Shipment or local-delivery destination for an order created without a delivery selection. The delivery destination you set when creating or updating an order, with an address and an optional recipient. |
| `discounts` | Optional | Array of [CreateOrderDiscountInput](../models/CreateOrderDiscountInput.md#createorderdiscountinput) |  |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `internal_note` | Optional | string | minLength: `1`. maxLength: `1000`. |
| `inventory_routing_source` | Optional | [OrderInventoryRoutingSourceRequestInput](../models/DeliveryPreviewRoutingSourceInput.md#deliverypreviewroutingsourceinput) | Where inventory for an order is allocated from: a fixed location, an allocation policy, or a specific policy revision. |
| `line_items` | Required | Array of [CreateOrderLineItemRequestInput](../models/CreateOrderLineItemRequestInput.md#createorderlineitemrequestinput) | minItems: `1`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `requested_tip` | Optional | [CreateOrderTipInput](../models/CreateOrderTipInput.md#createordertipinput) | Optional requested tip. Its effective amount must satisfy the CreateOrderTip limit. Requested tip expressed as either a flat amount or a percentage. Send exactly one of amount_money or percent. |
| `tax` | Optional | [OrderTaxRequestInput](../models/OrderTaxRequestInput.md#ordertaxrequestinput) | Tax settings you supply when creating an order: whether tax is enabled, how it is calculated, and the tax location. |

#### Response

Returned payload: [Order](../models/Order.md#order).

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
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->create([
  'line_items' => [
    (object) [
      'type' => 'variant',
      'variant_id' => 'example',
    ],
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-create.php)

### orders.createAccessLink

Creates the link Flint's receipt email carries, to put in buyer email or messages you send yourself. It opens the order in your Flint-hosted customer account without a sign-in, and lets the buyer have the receipt sent again to the order's email. It works for 30 days or 10 opens, whichever comes first; after that the buyer signs in to see the order. The url is a bearer credential. Flint returns it only in this response and in a retry with the same Idempotency-Key, so send it only to the buyer and keep it out of logs. A call with a new key creates another link; earlier links keep working until they expire. When customer_account.mode is merchant_hosted it returns ACCESS_LINK_MERCHANT_HOSTED, and for an order without a customer, ACCESS_LINK_CUSTOMER_REQUIRED. Send no request body or an empty object ({}). Idempotency is scoped to the merchant, credential, environment, and this resource's route. A replay returns the original link without extending its lifetime or replenishing its opens. Without an Idempotency-Key, each call creates a new link and has no replay result. If Flint cannot retain a result after minting, contact support with X-Request-Id before sending a new request.

`POST /v1/orders/{order_id}/access-links`

Signature: `createAccessLink(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | object | maxProperties: `0`. |

Body shape: object.

#### Response

Returned payload: [AccessLink](../models/AccessLinkInput.md#accesslinkinput).

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

Complete body and metadata: `createAccessLinkWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->createAccessLink('example', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-createAccessLink.php)

### orders.createFulfillment

Creates a fulfillment for the specified quantities on a paid order. Use this when you manage fulfillment outside checkout; checkout creates fulfillments for the buyer's delivery selections. While Flint is creating those fulfillments, requests for their quantities return OPERATION_IN_PROGRESS with reason delivery_selection_materializing. Retrieve the order and use its fulfillments. Returns ORDER_NOT_FULFILLABLE when the order is not paid. See the fulfillment guide.

`POST /v1/orders/{order_id}/fulfillments`

Signature: `createFulfillment(string|Model $order_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateFulfillmentRequestInput](../models/CreateFulfillmentRequestInput.md#createfulfillmentrequestinput) | Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages. |

Body model: [CreateFulfillmentRequestInput](../models/CreateFulfillmentRequestInput.md#createfulfillmentrequestinput).

#### orders.createFulfillment body fields

Field definitions: [shared fields](../models/CreateFulfillmentRequestInput.md#createfulfillmentrequestinput). Models: [CreateDigitalFulfillmentDetailsInput](../models/CreateDigitalFulfillmentDetailsInput.md#createdigitalfulfillmentdetailsinput), [FulfillmentLineItemRequestInput](../models/FulfillmentLineItemRequestInput.md#fulfillmentlineitemrequestinput), [CreateDeliveryFulfillmentDetailsInput](../models/CreateDeliveryFulfillmentDetailsInput.md#createdeliveryfulfillmentdetailsinput), [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput), [CreatePickupFulfillmentDetailsInput](../models/CreatePickupFulfillmentDetailsInput.md#createpickupfulfillmentdetailsinput), [FulfillmentRecipientRequestInput](../models/FulfillmentRecipientRequestInput.md#fulfillmentrecipientrequestinput), [CreateServiceFulfillmentDetailsInput](../models/CreateServiceFulfillmentDetailsInput.md#createservicefulfillmentdetailsinput), [FulfillmentPackagingRequestInput](../models/FulfillmentPackagingRequestInput.md#fulfillmentpackagingrequestinput).

#### orders.createFulfillment body oneOf variant 1

Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages.

Body model: [CreateFulfillmentRequestShipmentInput](../models/CreateFulfillmentRequestShipmentInput.md#createfulfillmentrequestshipmentinput).

#### orders.createFulfillment body oneOf variant 1 fields

Field definitions: [shared fields](../models/CreateFulfillmentRequestShipmentInput.md#createfulfillmentrequestshipmentinput). Models: [CreateDigitalFulfillmentDetailsInput](../models/CreateDigitalFulfillmentDetailsInput.md#createdigitalfulfillmentdetailsinput), [FulfillmentLineItemRequestInput](../models/FulfillmentLineItemRequestInput.md#fulfillmentlineitemrequestinput), [CreateDeliveryFulfillmentDetailsInput](../models/CreateDeliveryFulfillmentDetailsInput.md#createdeliveryfulfillmentdetailsinput), [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput), [CreatePickupFulfillmentDetailsInput](../models/CreatePickupFulfillmentDetailsInput.md#createpickupfulfillmentdetailsinput), [FulfillmentRecipientRequestInput](../models/FulfillmentRecipientRequestInput.md#fulfillmentrecipientrequestinput), [CreateServiceFulfillmentDetailsInput](../models/CreateServiceFulfillmentDetailsInput.md#createservicefulfillmentdetailsinput), [FulfillmentPackagingRequestInput](../models/FulfillmentPackagingRequestInput.md#fulfillmentpackagingrequestinput).

#### orders.createFulfillment body oneOf variant 2

Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages.

Body model: [CreateFulfillmentRequestPickupInput](../models/CreateFulfillmentRequestPickupInput.md#createfulfillmentrequestpickupinput).

#### orders.createFulfillment body oneOf variant 2 fields

Field definitions: [shared fields](../models/CreateFulfillmentRequestPickupInput.md#createfulfillmentrequestpickupinput). Models: [CreateDigitalFulfillmentDetailsInput](../models/CreateDigitalFulfillmentDetailsInput.md#createdigitalfulfillmentdetailsinput), [FulfillmentLineItemRequestInput](../models/FulfillmentLineItemRequestInput.md#fulfillmentlineitemrequestinput), [CreateDeliveryFulfillmentDetailsInput](../models/CreateDeliveryFulfillmentDetailsInput.md#createdeliveryfulfillmentdetailsinput), [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput), [CreatePickupFulfillmentDetailsInput](../models/CreatePickupFulfillmentDetailsInput.md#createpickupfulfillmentdetailsinput), [FulfillmentRecipientRequestInput](../models/FulfillmentRecipientRequestInput.md#fulfillmentrecipientrequestinput), [CreateServiceFulfillmentDetailsInput](../models/CreateServiceFulfillmentDetailsInput.md#createservicefulfillmentdetailsinput), [FulfillmentPackagingRequestInput](../models/FulfillmentPackagingRequestInput.md#fulfillmentpackagingrequestinput).

#### orders.createFulfillment body oneOf variant 3

Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages.

Body model: [CreateFulfillmentRequestLocalDeliveryInput](../models/CreateFulfillmentRequestLocalDeliveryInput.md#createfulfillmentrequestlocaldeliveryinput).

#### orders.createFulfillment body oneOf variant 3 fields

Field definitions: [shared fields](../models/CreateFulfillmentRequestLocalDeliveryInput.md#createfulfillmentrequestlocaldeliveryinput). Models: [CreateDigitalFulfillmentDetailsInput](../models/CreateDigitalFulfillmentDetailsInput.md#createdigitalfulfillmentdetailsinput), [FulfillmentLineItemRequestInput](../models/FulfillmentLineItemRequestInput.md#fulfillmentlineitemrequestinput), [CreateDeliveryFulfillmentDetailsInput](../models/CreateDeliveryFulfillmentDetailsInput.md#createdeliveryfulfillmentdetailsinput), [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput), [CreatePickupFulfillmentDetailsInput](../models/CreatePickupFulfillmentDetailsInput.md#createpickupfulfillmentdetailsinput), [FulfillmentRecipientRequestInput](../models/FulfillmentRecipientRequestInput.md#fulfillmentrecipientrequestinput), [CreateServiceFulfillmentDetailsInput](../models/CreateServiceFulfillmentDetailsInput.md#createservicefulfillmentdetailsinput), [FulfillmentPackagingRequestInput](../models/FulfillmentPackagingRequestInput.md#fulfillmentpackagingrequestinput).

#### orders.createFulfillment body oneOf variant 4

Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages.

Body model: [CreateFulfillmentRequestDigitalInput](../models/CreateFulfillmentRequestDigitalInput.md#createfulfillmentrequestdigitalinput).

#### orders.createFulfillment body oneOf variant 4 fields

Field definitions: [shared fields](../models/CreateFulfillmentRequestDigitalInput.md#createfulfillmentrequestdigitalinput). Models: [CreateDigitalFulfillmentDetailsInput](../models/CreateDigitalFulfillmentDetailsInput.md#createdigitalfulfillmentdetailsinput), [FulfillmentLineItemRequestInput](../models/FulfillmentLineItemRequestInput.md#fulfillmentlineitemrequestinput), [CreateDeliveryFulfillmentDetailsInput](../models/CreateDeliveryFulfillmentDetailsInput.md#createdeliveryfulfillmentdetailsinput), [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput), [CreatePickupFulfillmentDetailsInput](../models/CreatePickupFulfillmentDetailsInput.md#createpickupfulfillmentdetailsinput), [FulfillmentRecipientRequestInput](../models/FulfillmentRecipientRequestInput.md#fulfillmentrecipientrequestinput), [CreateServiceFulfillmentDetailsInput](../models/CreateServiceFulfillmentDetailsInput.md#createservicefulfillmentdetailsinput), [FulfillmentPackagingRequestInput](../models/FulfillmentPackagingRequestInput.md#fulfillmentpackagingrequestinput).

#### orders.createFulfillment body oneOf variant 5

Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages.

Body model: [CreateFulfillmentRequestServiceInput](../models/CreateFulfillmentRequestServiceInput.md#createfulfillmentrequestserviceinput).

#### orders.createFulfillment body oneOf variant 5 fields

Field definitions: [shared fields](../models/CreateFulfillmentRequestServiceInput.md#createfulfillmentrequestserviceinput). Models: [CreateDigitalFulfillmentDetailsInput](../models/CreateDigitalFulfillmentDetailsInput.md#createdigitalfulfillmentdetailsinput), [FulfillmentLineItemRequestInput](../models/FulfillmentLineItemRequestInput.md#fulfillmentlineitemrequestinput), [CreateDeliveryFulfillmentDetailsInput](../models/CreateDeliveryFulfillmentDetailsInput.md#createdeliveryfulfillmentdetailsinput), [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput), [CreatePickupFulfillmentDetailsInput](../models/CreatePickupFulfillmentDetailsInput.md#createpickupfulfillmentdetailsinput), [FulfillmentRecipientRequestInput](../models/FulfillmentRecipientRequestInput.md#fulfillmentrecipientrequestinput), [CreateServiceFulfillmentDetailsInput](../models/CreateServiceFulfillmentDetailsInput.md#createservicefulfillmentdetailsinput), [FulfillmentPackagingRequestInput](../models/FulfillmentPackagingRequestInput.md#fulfillmentpackagingrequestinput).

#### Response

Returned payload: [Fulfillment](../models/Fulfillment.md#fulfillment).

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

Complete body and metadata: `createFulfillmentWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->createFulfillment('example', [
  'line_items' => [
    (object) [
      'order_line_item_id' => 'example',
      'quantity' => '100',
    ],
  ],
  'type' => 'shipment',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-createFulfillment.php)

### orders.createPaymentIntent

Creates a payment intent owned by the order. Collect a payment source using payment_collection, then submit that source through payOrder. This route requires commerce.orders.write; standalone payment-intent routes require payments.payment_intents.write.

`POST /v1/orders/{order_id}/payment-intents`

Signature: `createPaymentIntent(string|Model $order_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateOrderPaymentIntentRequestInput](../models/CreateOrderPaymentIntentRequestInput.md#createorderpaymentintentrequestinput) | The request body for: Create order payment intent. |

Body model: [CreateOrderPaymentIntentRequestInput](../models/CreateOrderPaymentIntentRequestInput.md#createorderpaymentintentrequestinput).

#### orders.createPaymentIntent body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/PaymentLinkLineItemsItemBundleResolvedUnitPriceMoney.md#paymentlinklineitemsitembundleresolvedunitpricemoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `capture_method` | Optional | string | automatic collects the payment when it is confirmed. manual places a hold at confirmation that you capture or cancel later. Defaults to automatic. Values: `"automatic"`, `"manual"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `payment_options` | Optional | Array of string | Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `payment_return_url` | Optional | string | minLength: `1`. |
| `payment_source_selection` | Optional | [OrderPaymentSourceSelectionInput](../models/OrderPaymentSourceSelectionInput.md#orderpaymentsourceselectioninput) | The payment source options you choose when creating an order payment intent. |

#### Response

Returned payload: [OrdersCreatePaymentIntentResponse201Data](../models/OrdersCreatePaymentIntentResponse201Data.md#orderscreatepaymentintentresponse201data).

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `add_on_fees` | Optional | Array of [PaymentAddOnFee](../models/PaymentAddOnFee.md#paymentaddonfee) | Itemized invoice, subscription, and automatic tax fees collected with this payment. Available to the merchant only. Empty until fees settle or when no add-ons apply. Refunds do not return or revise these fees. Absent until Flint has determined and verified the fee. If Flint can't verify it when you read the payment intent, the field is omitted rather than shown unverified; read the payment intent again later. |
| `amount_money` | Required | [MoneyValue](../models/PaymentLinkLineItemsItemBundleResolvedUnitPriceMoney.md#paymentlinklineitemsitembundleresolvedunitpricemoney) | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `authorization_expires_at` | Optional | string | Deadline to capture a manual-capture hold. The authorization lapses at this time, and a capture attempted after it fails even if status is still requires_capture. Set when the hold is placed. Format: `date-time`. |
| `authorized_at` | Optional | string | When the processor authorized the payment. Absent until then. Format: `date-time`. |
| `authorized_money` | Optional | [MoneyValue](../models/PaymentLinkLineItemsItemBundleResolvedUnitPriceMoney.md#paymentlinklineitemsitembundleresolvedunitpricemoney) | The amount the processor authorized. It always equals amount_money and doesn't change once set. Absent until the payment is authorized, and on payments canceled before authorization. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `cancellation_reason` | Optional | string | Flint-normalized reason the payment intent was canceled. Present only while status is canceled. Unknown processor values are returned as payment_canceled. Values: [8 declared values](#orderscreatepaymentintent-response-cancellation_reason-values). |
| `capturable_money` | Optional | [MoneyValue](../models/PaymentLinkLineItemsItemBundleResolvedUnitPriceMoney.md#paymentlinklineitemsitembundleresolvedunitpricemoney) | The part of the authorization you can still capture. Positive only while status is requires_capture, and zero after you capture or cancel or the authorization expires. The authorization lapses at authorization_expires_at, and a capture attempted after that fails even if this is positive. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `capture_method` | Optional | string | When money is collected. Defaults to automatic. Values: `"automatic"`, `"manual"`. |
| `captured_at` | Optional | string | When money was captured. For automatic capture, this is when the payment succeeded. Absent until capture. Format: `date-time`. |
| `captured_money` | Optional | [MoneyValue](../models/PaymentLinkLineItemsItemBundleResolvedUnitPriceMoney.md#paymentlinklineitemsitembundleresolvedunitpricemoney) | The amount collected from the buyer. Reconcile revenue and print receipts from this amount, not amount_money. Zero while a hold is open, and positive whenever status is succeeded. processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `checkout_session_id` | Optional | string | Flint checkout session ID associated with this payment, when present. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummaryInput.md#expandedcustomersummaryinput) or null | The linked customer. Returned only with expand=customer. |
| `customer_id` | Optional | string | Customer linked to this payment intent. |
| `dispute_status` | Optional | string | Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Values: [10 declared values](#orderscreatepaymentintent-response-dispute_status-values). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `fulfillment_hold` | Optional | [PaymentFulfillmentHold](../models/PaymentFulfillmentHoldInput.md#paymentfulfillmentholdinput) | Present when a payment provider asked Flint to pause fulfillment for this payment. While its status is active, open fulfillments on the order are on hold with reason payment_review. payment_intent.fulfillment_hold_updated is sent when the hold starts and when it lifts. A hold on fulfillment tied to a payment, with the reason, the action required, and whether the hold is active or released. |
| `invoice` | Optional | [ExpandedInvoiceSummary](../models/ExpandedInvoiceSummary.md#expandedinvoicesummary) or null | The linked invoice. Returned only with expand=invoice. |
| `invoice_id` | Optional | string | Invoice this payment intent collects, when it pays an invoice. |
| `last_payment_error` | Required | [PaymentErrorSummary](../models/PaymentErrorSummary.md#paymenterrorsummary) or null | Most recent payment error. Null when no payment error is recorded. |
| `merchant_id` | Optional | string | Merchant that owns this payment intent. |
| `merchant_net_money` | Optional | [MoneyValue](../models/PaymentLinkLineItemsItemBundleResolvedUnitPriceMoney.md#paymentlinklineitemsitembundleresolvedunitpricemoney) | Captured amount minus processing_fee_money and every amount in add_on_fees. Later merchant assessments and credits are separate balance effects. Absent until Flint has determined and verified the fee. If Flint can't verify it when you read the payment intent, the field is omitted rather than shown unverified; read the payment intent again later. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `metadata` | Required | Map of string | Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't returned. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | The linked order. Returned only with expand=order. |
| `order_id` | Optional | string | Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. |
| `payment_flow` | Required | string | How the payment was started. Fixed when the payment intent is created. Values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. |
| `payment_intent_id` | Required | string | Flint payment intent ID. |
| `payment_options` | Required | Array of string | Payment options the buyer can use for this payment. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `payment_source` | Optional | [PaymentSourceSummary](../models/PaymentSourceSummary.md#paymentsourcesummary) | Summary of the card or bank account used for the payment. Absent until a payment source is attached. A summary of the payment source used for a payment, by funding-method family, with card or bank account display details. |
| `processing_fee_money` | Optional | [MoneyValue](../models/PaymentLinkLineItemsItemBundleResolvedUnitPriceMoney.md#paymentlinklineitemsitembundleresolvedunitpricemoney) | Flint's all-in processing fee for this payment. It is the complete price Flint charges to process the payment, never a provider cost passed through. The fee is final once the card payment is captured or the ACH payment succeeds; canceled payments and failures before success have none. Invoice, subscription, and automatic tax fees are itemized separately in add_on_fees. Your net for the payment is captured_money minus this fee and the add-on fees. Refunds do not return or revise it. Absent until Flint has determined and verified the fee. If Flint can't verify it when you read the payment intent, the field is omitted rather than shown unverified; read the payment intent again later. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `receipt_email` | Optional | string or null | Email address for this payment's receipt. When it isn't set, Flint uses the customer's email. Format: `email`. maxLength: `255`. |
| `refund_status` | Optional | string | How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `refunded_money` | Optional | [MoneyValue](../models/PaymentLinkLineItemsItemBundleResolvedUnitPriceMoney.md#paymentlinklineitemsitembundleresolvedunitpricemoney) | Total refunded against captured_money, including value issued as store credit and processor refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `released_money` | Optional | [MoneyValue](../models/PaymentLinkLineItemsItemBundleResolvedUnitPriceMoney.md#paymentlinklineitemsitembundleresolvedunitpricemoney) | The part of the authorization returned to the buyer without being charged: the uncaptured remainder after a partial capture, or the whole authorization after a cancellation or expiry. It was never collected, so it needs no refund and can't be captured later. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `return_id` | Optional | string | Flint return ID associated with this payment, when present. |
| `risk` | Optional | [PaymentRisk](../models/PaymentRiskInput.md#paymentriskinput) or null | Risk assessment. Always present with merchant credentials; null when no risk assessment is available. Omitted with the checkout credential. |
| `selected_payment_option` | Optional | string | The payment option the most recent confirmation used. Absent until the payment intent is first confirmed. |
| `status` | Required | string | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |
| `support_reference` | Required | string | Opaque payment reference to share with merchant support. Do not parse its format. |
| `supported_actions` | Required | Array of string | Actions the payment intent's current state accepts, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. An action that isn't listed returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused because of something outside the payment intent: an open risk review, an order payment attempt that is using this payment, a closed order, or the merchant's account. An order-owned payment intent never lists confirm; pay it with POST /v1/orders/{order_id}/pay. The list changes only when the payment intent changes. Always empty for buyer credentials. New actions may be added. Items values: `"confirm"`, `"capture"`, `"cancel"`. |
| `tip_money` | Optional | [MoneyValue](../models/PaymentLinkLineItemsItemBundleResolvedUnitPriceMoney.md#paymentlinklineitemsitembundleresolvedunitpricemoney) or null | Portion of amount_money that is a tip. Uses amount_money's currency and is at most amount_money. |
| `transaction_purpose` | Optional | string | Why a bank debit is taken. Set only when payment_options includes ach_debit, and fixed once the payment intent exists. Values: `"goods"`, `"services"`, `"other"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `payment_collection` | Required | [PaymentCollection](../models/PaymentCollection.md#paymentcollection) | Setup details your client uses to collect the buyer's payment details. Required on both standalone and order-owned creates. On GET, returned only for a standalone intent in requires_payment_method or requires_confirmation, and omitted for an intent owned by a checkout session when read with merchant credentials. Order-owned intents never include it on GET; use Order.payment_collection, whose selectable_payment_intents lists the staged payments. Client-side details for collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js. |

#### orders.createPaymentIntent response cancellation_reason values

- `"requested_by_customer"`
- `"duplicate"`
- `"fraudulent"`
- `"abandoned"`
- `"invoice_payment_failed"`
- `"invoice_voided"`
- `"order_closed"`
- `"payment_canceled"`

#### orders.createPaymentIntent response dispute_status values

- `"none"`
- `"inquiry_needs_response"`
- `"inquiry_under_review"`
- `"inquiry_closed"`
- `"needs_response"`
- `"under_review"`
- `"won"`
- `"lost"`
- `"prevented"`
- `"other"`

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
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createPaymentIntentWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->createPaymentIntent('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-createPaymentIntent.php)

### orders.deleteCharge

Removes a single service charge, fee, or surcharge from an order.

`DELETE /v1/orders/{order_id}/charges/{order_charge_id}`

Signature: `deleteCharge(string|Model $order_id, string|Model $order_charge_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `order_charge_id` | Required | string |  |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [Order](../models/Order.md#order).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `deleteChargeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->deleteCharge('example', 'example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-deleteCharge.php)

### orders.deleteLineItem

Removes a single line item from an order.

`DELETE /v1/orders/{order_id}/line-items/{order_line_item_id}`

Signature: `deleteLineItem(string|Model $order_id, string|Model $order_line_item_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `order_line_item_id` | Required | string |  |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [Order](../models/Order.md#order).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `deleteLineItemWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->deleteLineItem('example', 'example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-deleteLineItem.php)

### orders.get

Returns a single order by ID.

`GET /v1/orders/{order_id}`

Signature: `get(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `expand` | Optional | Array of string | Items values: `"customer"`, `"fulfillments.packages"`, `"fulfillments.shipments"`, `"payment_intents"`, `"subscription"`, `"subscription_plan"`. |

#### Response

Returned payload: [Order](../models/Order.md#order).

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

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->orders->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/orders-get.php)

### orders.getCurrentDeliverySelection

Returns the delivery selection committed to an order.

`GET /v1/orders/{order_id}/delivery-selections/current`

Signature: `getCurrentDeliverySelection(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |

#### Response

Returned payload: [DeliverySelection](../models/DeliverySelection.md#deliveryselection).

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

Complete body and metadata: `getCurrentDeliverySelectionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->orders->getCurrentDeliverySelection('example', [], new RequestOptions());
```

[Complete runnable example](../examples/orders-getCurrentDeliverySelection.php)

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
| `order_id` | Required | string |  |
| `order_payment_attempt_id` | Required | string |  |

#### Response

Returned payload: [OrderPaymentAttempt](../models/OrderPaymentAttempt.md#orderpaymentattempt).

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

Complete body and metadata: `getPaymentAttemptWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->orders->getPaymentAttempt('example', 'example', [], new RequestOptions());
```

[Complete runnable example](../examples/orders-getPaymentAttempt.php)

### orders.list

Returns a paginated list of orders for the authenticated merchant. Default order: created_at descending, then order_id descending.

`GET /v1/orders`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `customer_id` | Optional | string |  |
| `order_id` | Optional | Array of string | minItems: `1`. maxItems: `100`. Items: pattern: `^ord_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `closed_reason` | Optional | Array of string | minItems: `1`. Items values: `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`. |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"open"`, `"closed"`. |
| `payment_status` | Optional | Array of string | minItems: `1`. Items values: `"unpaid"`, `"partially_paid"`, `"paid"`. |
| `refund_status` | Optional | Array of string | minItems: `1`. Items values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `fulfillment_status` | Optional | Array of string | minItems: `1`. Items values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`. |
| `order_number` | Optional | string |  |
| `has_unassigned_fulfillment_quantity` | Optional | boolean |  |
| `has_open_fulfillment` | Optional | boolean |  |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `origin` | Optional | Array of string | minItems: `1`. Items values: `"virtual_terminal"`, `"payment_link"`, `"checkout"`, `"api"`, `"subscription"`. |
| `query` | Optional | string |  |
| `subscription_id` | Optional | string |  |
| `subscription_delivery_changed` | Optional | boolean |  |
| `return_id` | Optional | string |  |
| `return_resolution_id` | Optional | string |  |
| `payment_link_id` | Optional | string |  |
| `min_amount` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `max_amount` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `sort_by` | Optional | string | Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`, `"settlement_amounts.outstanding_money"`, `"pricing_amounts.total_money"`. |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |
| `expand` | Optional | Array of string | Items values: `"customer"`, `"subscription"`, `"subscription_plan"`. |

#### Response

Returned payload: [OrdersListResponse200](../models/OrdersListResponse200.md#orderslistresponse200).

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
$result = $client->orders->list([], new RequestOptions());
```

[Complete runnable example](../examples/orders-list.php)

### orders.listActivities

Returns a read-only, human-readable history log for an order. Use it to render timelines and debug what happened, not as a source of truth, ledger, or webhook replacement. Read the owning resource for authoritative state: the order for balances and status, the payment for payment state, the refund for refund outcomes, and the checkout session for checkout state. Do not sum balance_delta_money to compute an order balance. Informational rows such as payment_failed, refund_failed, and checkout_session_expired have a zero balance delta. The default order is newest first. Use sort_direction=asc for chronological timeline rendering. A typical chronological log might show created, payment_failed, payment, refund, then refund_failed; each row gives one reference to click through for the authoritative resource. Default order: created_at descending, then order_activity_id descending.

`GET /v1/orders/{order_id}/activities`

Signature: `listActivities(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

Field definitions: [shared fields](me.md#request-fields-43).

#### Response

Returned payload: [OrdersListActivitiesResponse200](../models/MeListOrderActivitiesResponse200.md#melistorderactivitiesresponse200).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listActivitiesWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listActivitiesItems`, `listActivitiesPages`, `listActivitiesPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->orders->listActivities('example', [], new RequestOptions());
```

[Complete runnable example](../examples/orders-listActivities.php)

### orders.listPaymentAttempts

Returns payment attempts for the order, newest first. Checkout-session callers see only attempts created by their own session. A list filtered by idempotency_key omits pending_actions; read the attempt by ID to get them. Default order: started_at descending, then order_payment_attempt_id descending.

`GET /v1/orders/{order_id}/payment-attempts`

Signature: `listPaymentAttempts(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `idempotency_key` | Optional | string | minLength: `1`. maxLength: `255`. |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |

#### Response

Returned payload: [OrdersListPaymentAttemptsResponse200](../models/OrdersListPaymentAttemptsResponse200.md#orderslistpaymentattemptsresponse200).

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

Complete body and metadata: `listPaymentAttemptsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listPaymentAttemptsItems`, `listPaymentAttemptsPages`, `listPaymentAttemptsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->orders->listPaymentAttempts('example', [], new RequestOptions());
```

[Complete runnable example](../examples/orders-listPaymentAttempts.php)

### orders.pay

Starts or resumes a payment attempt on the order. Set action to pay to charge the full outstanding balance, confirm_payment_intents to confirm order-owned payment intents, setup to save a newly collected token on a zero-balance order, or resume to continue an attempt after a pending client action. Each action accepts only its own fields. Only confirm_payment_intents accepts completion_behavior. A pay action without payment_source is valid only when the outstanding balance is zero. To continue a resumable attempt, send action: resume with order_payment_attempt_id and a new Idempotency-Key. An exact retry of the original request with its Idempotency-Key returns the stored response if the request completed, or recovers the same attempt if it was interrupted. Payment intents with manual capture return an active authorization instead of settling immediately. A replay preserves the original HTTP status and domain result. Client authority in order_payment_attempt.pending_actions is available only within 24 hours of the original request and while the matching current payment attempt has status requires_action. Otherwise pending_actions is empty. Read GET /v1/orders/{order_id}/payment-attempts/{order_payment_attempt_id} for the attempt's current state.

`POST /v1/orders/{order_id}/pay`

Signature: `pay(OrdersPayInput|array $input, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `Flint-Buyer-Device` | Optional | string | pattern: `^[a-f0-9]{32}$`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [PayOrderRequestInput](../models/PayOrderRequestInput.md#payorderrequestinput) | The request body for: Pay order. |

Body model: [PayOrderRequestInput](../models/PayOrderRequestInput.md#payorderrequestinput).

#### orders.pay body oneOf variant 1

The `pay` variant of `PayOrderRequest`.

Body model: [PayOrderRequestPayInput](../models/PayOrderRequestPayInput.md#payorderrequestpayinput).

#### orders.pay body oneOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accepted_gift_card_allocation` | Optional | [OrderGiftCardAllocationAcceptanceInput](../models/OrderGiftCardAllocationAcceptanceInput.md#ordergiftcardallocationacceptanceinput) | Accept the exact gift_card_estimate returned on the current order, including all selected cards and both totals. Requires an Idempotency-Key. Gift card payments collect the full amount due and may use one processor payment intent for the processor_money remainder. |
| `action` | Required | string | Values: `"pay"`. |
| `buyer_contact` | Optional | [CheckoutBuyerContactRequestInput](../models/CheckoutBuyerContactRequestInput.md#checkoutbuyercontactrequestinput) | Buyer email and phone recorded on the order. A checkout session payment uses the session's saved contact for omitted fields. Email and phone cannot be null. Buyer contact to supply with payment or save during checkout. Send at least one field. Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null to clear a field. Payment requests do not accept null. minProperties: `1`. Buyer contact to supply with payment or save during checkout. Send at least one field. Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null to clear a field. Payment requests do not accept null. minProperties: `1`. |
| `expected_outstanding_money` | Optional | [MoneyValueInput](../models/PaymentLinkLineItemsItemBundleResolvedUnitPriceMoney.md#paymentlinklineitemsitembundleresolvedunitpricemoney) | The outstanding balance you reviewed. Required with checkout credentials, and with an API key or partner token when the order has an open checkout session. Optional otherwise. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expected_version` | Optional | integer string | Optional version from the order you reviewed. A mismatch returns VERSION_CONFLICT, even when the outstanding amount is unchanged. Starting a payment advances the order's version. After a declined or failed attempt, use the order returned in the pay response or read the order again before retrying. When accepted_gift_card_allocation is sent, its order_version must match this value. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `payment_source` | Optional | [PaymentSourceCredentialInput](../models/PaymentSourceCredentialInput.md#paymentsourcecredentialinput) | The credential you provide to pay an order: a payment source token, a saved payment method ID, or a Stripe confirmation token. |
| `save_payment_method` | Optional | boolean | The buyer's choice to save the card they typed for faster checkout at this merchant. Send true only from the checkout session's own credential, when the session's can_save_payment_method is true and save_payment_method_requires_verification is false, for one newly collected card sent as stripe.confirmation_token created with setup_future_usage on_session. The card is saved with usage on_session once the payment succeeds, for the customer the checkout acts for: the customer the merchant created the session for, or the customer whose email the buyer confirmed in it. A typed buyer_contact.email never decides it. A checkout that acts for no customer refuses the save until the buyer confirms their email with a code, unless it sends save_payment_method_phone. A checkout the buyer bound by a texted code saves the card with that number. A checkout whose buyer confirmed the customer's email can also send save_payment_method_phone, to save the card with a number the buyer confirms by text after paying. A checkout can send the buyer's choice with every payment button: Apple Pay, Google Pay, a bank account, or Affirm, in stripe.confirmation_token created with no setup_future_usage, pays without the save, and the payment attempt's payment_method_save reports not_saved with reason payment_method_not_saveable. The session's save_payment_method_types lists what is saved. Send false or omit it when the buyer does not choose to save; stripe.confirmation_token must then have no setup_future_usage. Default: `false`. |
| `save_payment_method_phone` | Optional | string | A US or Canadian mobile phone number in E.164 format, such as +14155552671, that confirms a card saved while the checkout acts for no customer, or for the customer whose email the buyer confirmed in it. Send it with save_payment_method: true only from the checkout session's own credential, when the session's can_save_payment_method_with_phone is true. The card is kept for the customer the checkout acts for, or else the merchant's customer with the buyer's email, once the payment succeeds, or once it is approved when the merchant captures later, but works for nothing until the buyer confirms it within 24 hours, with a code texted to this number or, when the customer's email is the email of the payment, emailed there instead: request the code with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose confirm_saved_payment_method, and read payment_method_save on the checkout session. A card saved with the number makes it the customer's saved number, and the cards saved with the number it replaces are removed. A card not confirmed in time is not saved. minLength: `1`. maxLength: `16`. pattern: `^\+1[2-9][0-9]{2}[2-9][0-9]{6}$`. |

#### orders.pay body oneOf variant 2

The `confirm_payment_intents` variant of `PayOrderRequest`.

Body model: [PayOrderRequestConfirmPaymentIntentsInput](../models/PayOrderRequestConfirmPaymentIntentsInput.md#payorderrequestconfirmpaymentintentsinput).

#### orders.pay body oneOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accepted_gift_card_allocation` | Optional | [OrderGiftCardAllocationAcceptanceInput](../models/OrderGiftCardAllocationAcceptanceInput.md#ordergiftcardallocationacceptanceinput) | Accept the exact gift_card_estimate returned on the current order, including all selected cards and both totals. Requires an Idempotency-Key. Gift card payments collect the full amount due and may use one processor payment intent for the processor_money remainder. |
| `action` | Required | string | Values: `"confirm_payment_intents"`. |
| `buyer_contact` | Optional | [CheckoutBuyerContactRequestInput](../models/CheckoutBuyerContactRequestInput.md#checkoutbuyercontactrequestinput) | Buyer email and phone recorded on the order. A checkout session payment uses the session's saved contact for omitted fields. Email and phone cannot be null. Buyer contact to supply with payment or save during checkout. Send at least one field. Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null to clear a field. Payment requests do not accept null. minProperties: `1`. Buyer contact to supply with payment or save during checkout. Send at least one field. Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null to clear a field. Payment requests do not accept null. minProperties: `1`. |
| `completion_behavior` | Optional | string | Values: `"complete_order"`, `"partial_payment"`. |
| `expected_outstanding_money` | Optional | [MoneyValueInput](../models/PaymentLinkLineItemsItemBundleResolvedUnitPriceMoney.md#paymentlinklineitemsitembundleresolvedunitpricemoney) | The outstanding balance you reviewed. Required with checkout credentials, and with an API key or partner token when the order has an open checkout session. Optional otherwise. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expected_version` | Optional | integer string | Optional version from the order you reviewed. A mismatch returns VERSION_CONFLICT, even when the outstanding amount is unchanged. Starting a payment advances the order's version. After a declined or failed attempt, use the order returned in the pay response or read the order again before retrying. When accepted_gift_card_allocation is sent, its order_version must match this value. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `payment_intents` | Required | Array of [OrderPaymentIntentSelectionInput](../models/OrderPaymentIntentSelectionInput.md#orderpaymentintentselectioninput) | minItems: `1`. |
| `save_payment_method` | Optional | boolean | The buyer's choice to save the card they typed for faster checkout at this merchant. Send true only from the checkout session's own credential, when the session's can_save_payment_method is true and save_payment_method_requires_verification is false, for one newly collected card sent as stripe.confirmation_token created with setup_future_usage on_session. The card is saved with usage on_session once the payment succeeds, for the customer the checkout acts for: the customer the merchant created the session for, or the customer whose email the buyer confirmed in it. A typed buyer_contact.email never decides it. A checkout that acts for no customer refuses the save until the buyer confirms their email with a code, unless it sends save_payment_method_phone. A checkout the buyer bound by a texted code saves the card with that number. A checkout whose buyer confirmed the customer's email can also send save_payment_method_phone, to save the card with a number the buyer confirms by text after paying. A checkout can send the buyer's choice with every payment button: Apple Pay, Google Pay, a bank account, or Affirm, in stripe.confirmation_token created with no setup_future_usage, pays without the save, and the payment attempt's payment_method_save reports not_saved with reason payment_method_not_saveable. The session's save_payment_method_types lists what is saved. Send false or omit it when the buyer does not choose to save; stripe.confirmation_token must then have no setup_future_usage. Default: `false`. |
| `save_payment_method_phone` | Optional | string | A US or Canadian mobile phone number in E.164 format, such as +14155552671, that confirms a card saved while the checkout acts for no customer, or for the customer whose email the buyer confirmed in it. Send it with save_payment_method: true only from the checkout session's own credential, when the session's can_save_payment_method_with_phone is true. The card is kept for the customer the checkout acts for, or else the merchant's customer with the buyer's email, once the payment succeeds, or once it is approved when the merchant captures later, but works for nothing until the buyer confirms it within 24 hours, with a code texted to this number or, when the customer's email is the email of the payment, emailed there instead: request the code with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose confirm_saved_payment_method, and read payment_method_save on the checkout session. A card saved with the number makes it the customer's saved number, and the cards saved with the number it replaces are removed. A card not confirmed in time is not saved. minLength: `1`. maxLength: `16`. pattern: `^\+1[2-9][0-9]{2}[2-9][0-9]{6}$`. |

#### orders.pay body oneOf variant 3

The `setup` variant of `PayOrderRequest`.

Body model: [PayOrderRequestSetupInput](../models/PayOrderRequestSetupInput.md#payorderrequestsetupinput).

#### orders.pay body oneOf variant 3 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"setup"`. |
| `buyer_contact` | Optional | [CheckoutBuyerContactRequestInput](../models/CheckoutBuyerContactRequestInput.md#checkoutbuyercontactrequestinput) | Buyer email and phone recorded on the order. A checkout session payment uses the session's saved contact for omitted fields. Email and phone cannot be null. Buyer contact to supply with payment or save during checkout. Send at least one field. Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null to clear a field. Payment requests do not accept null. minProperties: `1`. Buyer contact to supply with payment or save during checkout. Send at least one field. Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null to clear a field. Payment requests do not accept null. minProperties: `1`. |
| `expected_outstanding_money` | Optional | [MoneyValueInput](../models/PaymentLinkLineItemsItemBundleResolvedUnitPriceMoney.md#paymentlinklineitemsitembundleresolvedunitpricemoney) | The outstanding balance you reviewed. Required with checkout credentials, and with an API key or partner token when the order has an open checkout session. Optional otherwise. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expected_version` | Optional | integer string | Optional version from the order you reviewed. A mismatch returns VERSION_CONFLICT, even when the outstanding amount is unchanged. Starting a payment advances the order's version. After a declined or failed attempt, use the order returned in the pay response or read the order again before retrying. When accepted_gift_card_allocation is sent, its order_version must match this value. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `setup_payment_source` | Required | [PaymentSourceCredentialTokenInput](../models/PaymentSourceCredentialTokenInput.md#paymentsourcecredentialtokeninput) | The `token` variant of `PaymentSourceCredential`. |

#### orders.pay body oneOf variant 4

The `resume` variant of `PayOrderRequest`.

Body model: [PayOrderRequestResumeInput](../models/PayOrderRequestResumeInput.md#payorderrequestresumeinput).

#### orders.pay body oneOf variant 4 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"resume"`. |
| `buyer_contact` | Optional | [CheckoutBuyerContactRequestInput](../models/CheckoutBuyerContactRequestInput.md#checkoutbuyercontactrequestinput) | Buyer email and phone recorded on the order. A checkout session payment uses the session's saved contact for omitted fields. Email and phone cannot be null. Buyer contact to supply with payment or save during checkout. Send at least one field. Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null to clear a field. Payment requests do not accept null. minProperties: `1`. Buyer contact to supply with payment or save during checkout. Send at least one field. Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null to clear a field. Payment requests do not accept null. minProperties: `1`. |
| `expected_outstanding_money` | Optional | [MoneyValueInput](../models/PaymentLinkLineItemsItemBundleResolvedUnitPriceMoney.md#paymentlinklineitemsitembundleresolvedunitpricemoney) | The outstanding balance you reviewed. Required with checkout credentials, and with an API key or partner token when the order has an open checkout session. Optional otherwise. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `order_payment_attempt_id` | Required | string | minLength: `1`. |

#### Response

Returned payload: [PayOrderResult](../models/CancelOrderPaymentAttemptResult.md#cancelorderpaymentattemptresult).

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
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `payWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->pay([
  'order_id' => 'example',
  'body' => (object) [
    'action' => 'pay',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-pay.php)

### orders.removeDiscounts

Removes one or more pending applied discounts from an order. Redeemed or canceled discounts are settlement history and cannot be removed.

`POST /v1/orders/{order_id}/discounts/remove`

Signature: `removeDiscounts(string|Model $order_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [RemoveDiscountsRequestInput](../models/RemoveDiscountsRequestInput.md#removediscountsrequestinput) | The request body for: Remove discounts. |

Body model: [RemoveDiscountsRequestInput](../models/RemoveDiscountsRequestInput.md#removediscountsrequestinput).

#### orders.removeDiscounts body fields

Field definitions: [shared fields](../models/RemoveDiscountsRequestInput.md#removediscountsrequestinput).

#### Response

Returned payload: [Order](../models/Order.md#order).

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
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `removeDiscountsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->removeDiscounts('example', [
  'order_discount_ids' => [],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-removeDiscounts.php)

### orders.removeGiftCard

Removes a selected gift card without moving value. The expected_version must still match the order version. Selections cannot change during an active payment attempt. Retry a lost response with the same Idempotency-Key to recover the original selection result.

`DELETE /v1/orders/{order_id}/gift-cards/{gift_card_id}`

Signature: `removeGiftCard(string|Model $order_id, string|Model $gift_card_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `gift_card_id` | Required | string |  |
| `expected_version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [Order](../models/Order.md#order).

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

Complete body and metadata: `removeGiftCardWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->removeGiftCard('example', 'example', [
  'expected_version' => '1',
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
| `order_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [RepriceDiscountsRequestInput](../models/RepriceDiscountsRequestInput.md#repricediscountsrequestinput) | The request body for: Reprice discounts. |

Body model: [RepriceDiscountsRequestInput](../models/RepriceDiscountsRequestInput.md#repricediscountsrequestinput).

#### orders.repriceDiscounts body fields

Field definitions: [shared fields](../models/RepriceDiscountsRequestInput.md#repricediscountsrequestinput).

#### Response

Returned payload: [Order](../models/Order.md#order).

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
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `repriceDiscountsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->repriceDiscounts('example', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-repriceDiscounts.php)

### orders.resolveInventoryException

Marks a paid inventory failure as resolved after an operator has completed manual inventory remediation.

`POST /v1/orders/{order_id}/inventory-exception/resolve`

Signature: `resolveInventoryException(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [ResolveOrderInventoryExceptionRequestInput](../models/ResolveOrderInventoryExceptionRequestInput.md#resolveorderinventoryexceptionrequestinput) | The request body for: Resolve order inventory exception. |

Body model: [ResolveOrderInventoryExceptionRequestInput](../models/ResolveOrderInventoryExceptionRequestInput.md#resolveorderinventoryexceptionrequestinput).

#### orders.resolveInventoryException body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `reason_message` | Optional | string | Your note explaining this action. minLength: `1`. |

#### Response

Returned payload: [Order](../models/Order.md#order).

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

Complete body and metadata: `resolveInventoryExceptionWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->resolveInventoryException('example', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-resolveInventoryException.php)

### orders.sendReceipt

Queues a receipt for a paid order, including gift card payments and settled payments, and returns the order unchanged. Send email to choose a recipient, or omit it to use the order's email. Requires Flint-managed receipt delivery. Sending is limited to once every five minutes per order and normalized recipient. Checkout credentials can send only to the address on file. If no address is on file, checkout credentials can send to at most three distinct addresses over the order's lifetime. Receipts sent for this order through this route count toward this limit, including failed deliveries and receipts sent with a secret API key. Merchant callers can choose any address.

`POST /v1/orders/{order_id}/send-receipt`

Signature: `sendReceipt(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [SendOrderReceiptRequestInput](../models/SendOrderReceiptRequestInput.md#sendorderreceiptrequestinput) | The request body for: Send an order receipt. |

Body model: [SendOrderReceiptRequestInput](../models/SendOrderReceiptRequestInput.md#sendorderreceiptrequestinput).

#### orders.sendReceipt body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Optional | string | Receipt email, limited to 254 characters (Unicode code points) after trimming surrounding whitespace. Format: `email`. minLength: `1`. maxLength: `254`. |

#### Response

Returned payload: [Order](../models/Order.md#order).

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
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `sendReceiptWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->sendReceipt('example', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-sendReceipt.php)

### orders.update

Applies a sparse update to mutable order fields such as customer_id, notes, metadata, tax, the delivery destination, and the requested tip. A request containing only metadata, internal_note, buyer_note, or external_reference_id, with optional expected_version, can update open, closed, paid, and invoice-locked orders without changing totals. Other merchant edits keep hosted and embedded checkout sessions open unless an edit closes or completes the order, which ends the session with order_mutated. Edits can also end invoice, return-resolution, and subscription-plan sessions with order_mutated. A session already past expires_at ends with expired before the edit is applied. These annotation updates are blocked while any order payment attempt remains non-terminal, including an authorization awaiting capture, or checkout payment work is still resolving. Requests combining annotations with other fields use the financial mutation rules for the entire request. Send requested_tip: null to clear the current requested tip. A merchant can correct a paid subscription signup or renewal destination before shipment by sending delivery_destination and the current order version as expected_version. The committed delivery methods must remain eligible, and shipping and tax totals must stay unchanged. ORDER_DELIVERY_DESTINATION_REPRICE_REQUIRED returns the reason and computed shipping and tax amounts when the correction would change the paid totals.

`PATCH /v1/orders/{order_id}`

Signature: `update(string|Model $order_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateOrderRequestInput](../models/UpdateOrderRequestInput.md#updateorderrequestinput) | The request body for: Update order. minProperties: `1`. |

Body model: [UpdateOrderRequestInput](../models/UpdateOrderRequestInput.md#updateorderrequestinput).

#### orders.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_note` | Optional | string or null | Buyer-provided note about this order, such as a gift message or purchase preference. Send null to clear it. minLength: `1`. maxLength: `1000`. |
| `customer_id` | Optional | string | minLength: `1`. |
| `delivery_destination` | Optional | [OrderDeliveryDestinationRequestInput](../models/OrderDeliveryDestinationRequestInput.md#orderdeliverydestinationrequestinput) or null | Complete replacement destination. Allowed while the order is open and unpaid and no delivery selection controls it. A merchant may also correct a paid subscription signup or renewal before shipment by sending expected_version, when the committed delivery methods remain eligible and shipping and tax totals stay the same. A paid destination cannot be cleared. Send null to clear an unpaid order's delivery destination. |
| `expected_version` | Optional | integer string | Order version from the last order read. Required when correcting a paid delivery destination. Optional for other updates; when supplied, the update fails if the order changed. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system.  Send null to clear external_reference_id. minLength: `1`. maxLength: `255`. |
| `internal_note` | Optional | string or null | Internal note about this order, visible only to the merchant. Send null to clear it. minLength: `1`. maxLength: `1000`. |
| `inventory_routing_source` | Optional | [OrderInventoryRoutingSourceRequestInput](../models/DeliveryPreviewRoutingSourceInput.md#deliverypreviewroutingsourceinput) | Where inventory for an order is allocated from: a fixed location, an allocation policy, or a specific policy revision. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Send null to clear caller-owned metadata and preserve Flint-managed keys. |
| `requested_tip` | Optional | [CreateOrderTipInput](../models/CreateOrderTipInput.md#createordertipinput) or null | Requested tip to set or replace. Send null to clear the current requested tip. |
| `tax` | Optional | [OrderTaxUpdateRequestInput](../models/OrderTaxUpdateRequestInput.md#ordertaxupdaterequestinput) | Changes to an order's tax settings: whether tax is enabled, the calculation, the location, and per-line-item or per-charge calculations. |

#### Response

Returned payload: [Order](../models/Order.md#order).

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
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->update('example', [
  'buyer_note' => 'example',
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
| `order_id` | Required | string |  |
| `order_charge_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateOrderChargeRequestInput](../models/UpdateOrderChargeRequestInput.md#updateorderchargerequestinput) | The request body for: Update order charge. |

Body model: [UpdateOrderChargeRequestInput](../models/UpdateOrderChargeRequestInput.md#updateorderchargerequestinput).

#### orders.updateCharge body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/PaymentLinkLineItemsItemBundleResolvedUnitPriceMoney.md#paymentlinklineitemsitembundleresolvedunitpricemoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculation_basis` | Optional | string | Values: `"subtotal_pre_discount"`, `"subtotal_post_discount"`. |
| `description` | Optional | string or null |  Send null to clear description. minLength: `1`. maxLength: `2048`. |
| `expected_version` | Optional | integer string | Optional order version from the last order read. The mutation fails if the order changed. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `fulfillment_id` | Optional | string or null |  Send null to unlink the fulfillment. minLength: `1`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Send null to clear all metadata. |
| `name` | Optional | string | minLength: `1`. maxLength: `255`. |
| `percent` | Optional | number | multipleOf: `0.0001`. |
| `tax` | Optional | [OrderCalculatedChargeTaxInput](../models/OrderCalculatedChargeTaxInput.md#ordercalculatedchargetaxinput) | Tax settings for an order charge calculated by Flint or supplied by you, including the charge's tax category and whether it is taxable. |
| `type` | Optional | string | Values: [17 declared values](../models/BuyerOrderChargeInput.md#buyerorderchargeinput-type-values). |

#### Response

Returned payload: [Order](../models/Order.md#order).

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
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `updateChargeWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->updateCharge('example', 'example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-updateCharge.php)

### orders.updateLineItem

Updates a single line item on an order. expected_version is the order version returned in data.version. Send gift_card_face_value_money and expected_version to select an unpaid gift card line's face value within its frozen offer and reprice the order before any purchase funding. Send gift_card_recipient and expected_version to replace or clear recipient delivery details before any purchase funding. Checkout credentials can update gift card face value and recipient details together, modifiers, or a line subscription offer selection, each with expected_version. Repeating the current gift card face value does not change the order version. Set subscription to null to buy the line once.

`PATCH /v1/orders/{order_id}/line-items/{order_line_item_id}`

Signature: `updateLineItem(string|Model $order_id, string|Model $order_line_item_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string |  |
| `order_line_item_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateLineItemRequestInput](../models/UpdateLineItemRequestInput.md#updatelineitemrequestinput) | The request body for: Update line item. |

Body model: [UpdateLineItemRequestInput](../models/UpdateLineItemRequestInput.md#updatelineitemrequestinput).

#### orders.updateLineItem body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Optional | string or null |  Send null to clear description. minLength: `1`. |
| `expected_version` | Optional | integer string | Order version from the last order read, returned in data.version. Required when any of these fields is present: modifiers, gift_card_recipient, gift_card_face_value_money, subscription. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `gift_card_face_value_money` | Optional | object | Selects the face value of an unpaid, unfunded gift card line within its frozen offer's custom_amount_bounds and reprices the order. Fixed-denomination offers accept only their current value. Omission preserves the value; null is not allowed. Requires expected_version from the order. Checkout credentials may send this field alone or together with gift_card_recipient. |
| `gift_card_recipient` | Optional | [GiftCardPurchaseRecipientPatchRequestInput](../models/GiftCardPurchaseRecipientPatchRequestInput.md#giftcardpurchaserecipientpatchrequestinput) or null | Replaces the recipient of an unfunded gift card purchase. Omission preserves it; null clears it. Send expected_version from the order. Send null to clear gift_card_recipient. Requires expected_version. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Send null to clear all metadata. |
| `modifiers` | Optional | Array of [OrderLineItemModifierRequestInput](../models/OrderLineItemModifierRequestInput.md#orderlineitemmodifierrequestinput) |  |
| `name` | Optional | string | minLength: `1`. |
| `quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. maximum: `9999`. |
| `subscription` | Optional | [SubscribedLineRequestInput](../models/DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantSubscription.md#deliverypreviewscreateresponse200datadeliveryoptionslineitemsitemvariantsubscription) or null | Selects an active subscription offer and reprices an unpaid line. Null selects a one-time purchase. Omission preserves the selection. Requires expected_version from the order and clears the delivery selection when terms change. Send null to clear subscription. Requires expected_version. |
| `tax` | Optional | [OrderCalculatedLineItemTaxInput](../models/OrderCalculatedLineItemTaxInput.md#ordercalculatedlineitemtaxinput) | Tax settings for an order line item calculated by Flint or supplied by you, including the line item tax category and whether it is taxable. |
| `unit_price_money` | Optional | [MoneyValueInput](../models/PaymentLinkLineItemsItemBundleResolvedUnitPriceMoney.md#paymentlinklineitemsitembundleresolvedunitpricemoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

#### Response

Returned payload: [Order](../models/Order.md#order).

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
| 502 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `updateLineItemWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->updateLineItem('example', 'example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-updateLineItem.php)

