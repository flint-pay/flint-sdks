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
| `body` | Required | [ApplyDiscountRequestInput](../models/ApplyDiscountRequestInput.md#applydiscountrequestinput) | The request body for: Apply discount. |

Body model: [ApplyDiscountRequestInput](../models/ApplyDiscountRequestInput.md#applydiscountrequestinput).

#### orders.applyDiscount body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional order version from the last order read. The mutation fails if the order changed. Format: `int64`. minimum: `1`. |
| `manual` | Optional | [ManualDiscountRequestInput](../models/ManualDiscountRequestInput.md#manualdiscountrequestinput) | A discount you apply by hand to an order, with a name, an amount, and the order, line items, or charges it applies to. |
| `promotion` | Optional | [PromotionRefRequestInput](../models/PromotionRefRequestInput.md#promotionrefrequestinput) | Identifies the promotion to apply, by promotion code or by promotion ID. |

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
| 410 | ApiError |
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

$result = $client->orders->applyDiscount('ord_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'promotion' => (object) [
    'promotion_id' => 'promo_01ARZ3NDEKTSV4RRFFQ69G5FAV',
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
| `order_id` | Required | string | Order ID. |
| `Flint-Gift-Card-Challenge` | Optional | string | Single-use proof from the checkout's gift card challenge. Needed only after GIFT_CARD_CHALLENGE_REQUIRED. While a challenge is required, every code needs a new proof, for up to an hour after the failures that triggered it. Ignored for API keys. |
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
| 410 | ApiError |
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

$result = $client->orders->applyGiftCard('ord_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
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
| 410 | ApiError |
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

$result = $client->orders->cancelPaymentAttempt('ord_01ARZ3NDEKTSV4RRFFQ69G5FAV', 'opat_01ARZ3NDEKTSV4RRFFQ69G5FAV', null, new RequestOptions(idempotencyKey: $idempotencyKey));
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
| 410 | ApiError |
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

$result = $client->orders->close('ord_01ARZ3NDEKTSV4RRFFQ69G5FAV', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-close.php)

### orders.create

Creates an order for the authenticated merchant. For USD orders, an effective requested tip may be up to the larger of $1,000 or 100% of the post-discount merchandise subtotal.

`POST /v1/orders`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateOrderRequestInput](../models/CreateOrderRequestInput.md#createorderrequestinput) | The request body for: Create order. |

Body model: [CreateOrderRequestInput](../models/CreateOrderRequestInput.md#createorderrequestinput).

#### orders.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_note` | Optional | string | minLength: `1`. maxLength: `1000`. |
| `customer_id` | Optional | string | minLength: `1`. |
| `delivery_destination` | Optional | [OrderDeliveryDestinationRequestInput](../models/OrderDeliveryDestinationRequestInput.md#orderdeliverydestinationrequestinput) | Shipment or local-delivery destination for an order created without a delivery selection. The delivery destination you set when creating or updating an order, with an address and an optional recipient. |
| `discounts` | Optional | Array of [CreateOrderDiscountInput](../models/CreateOrderDiscountInput.md#createorderdiscountinput) | Items: A discount to apply when creating an order: either a manual discount or a reference to a promotion. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `internal_note` | Optional | string | minLength: `1`. maxLength: `1000`. |
| `inventory_routing_source` | Optional | [OrderInventoryRoutingSourceRequestInput](../models/DeliveryPreviewRoutingSourceInput.md#deliverypreviewroutingsourceinput) | Where inventory for an order is allocated from: a fixed location, an allocation policy, or a specific policy revision. |
| `line_items` | Required | Array of [CreateOrderLineItemRequestInput](../models/CreateOrderLineItemRequestInput.md#createorderlineitemrequestinput) | minItems: `1`. Items: A line item to add to an order: a catalog variant, a bundle, or a custom item with a name and unit price. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `requested_tip` | Optional | [CreateOrderTipInput](../models/CreateOrderTipInput.md#createordertipinput) | Optional requested tip. Its effective amount must satisfy the CreateOrderTip limit. Requested tip expressed as either a flat amount or a percentage. Send exactly one of amount_money or percent. |
| `tax` | Optional | [OrderTaxRequestInput](../models/OrderTaxRequestInput.md#ordertaxrequestinput) | Tax settings you supply when creating an order: whether tax is enabled, how it is calculated, and the tax location. |

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
| 410 | ApiError |
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
      'variant_id' => 'var_01ARZ3NDEKTSV4RRFFQ69G5FAV',
    ],
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-create.php)

### orders.createAccessLink

Creates the link Flint's receipt email carries, to put in buyer email or messages you send yourself. It opens the order in your Flint-hosted customer account without a sign-in, and lets the buyer have the receipt sent again to the order's email. It works for 30 days or 10 opens, whichever comes first; after that the buyer signs in to see the order. The url is a bearer credential. Flint returns it only in this response and in a retry with the same Idempotency-Key, so send it only to the buyer and keep it out of logs. A call with a new key creates another link; earlier links keep working until they expire. When customer_account.mode is merchant_hosted it returns 409 ACTION_NOT_ALLOWED with reason merchant_hosted_customer_accounts, and for an order without a customer, 409 ACTION_NOT_ALLOWED with reason configuration_required. Send no request body or an empty object ({}). Idempotency is scoped to the merchant, credential, environment, and this resource's route. A replay returns the original link without extending its lifetime or replenishing its opens. Without an Idempotency-Key, each call creates a new link and has no replay result. If Flint cannot retain a result after minting, contact support with X-Request-Id before sending a new request.

`POST /v1/orders/{order_id}/access-links`

Signature: `createAccessLink(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `body` | Optional | object | maxProperties: `0`. |

Body shape: object.

#### Response

Returned payload: [AccessLink](../models/AccessLinkInput.md#accesslinkinput).

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

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->createAccessLink('ord_01ARZ3NDEKTSV4RRFFQ69G5FAV', null, new RequestOptions(idempotencyKey: $idempotencyKey));
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
| 410 | ApiError |
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

### orders.createFulfillment

Creates a fulfillment for the specified quantities on a paid order. Use this when you manage fulfillment outside checkout; checkout creates fulfillments for the buyer's delivery selections. While Flint is creating those fulfillments, requests for their quantities return OPERATION_IN_PROGRESS with reason delivery_selection_materializing. Retrieve the order and use its fulfillments. Returns 409 ACTION_NOT_ALLOWED with details[0].reason status_not_reached when the order is not paid. See the fulfillment guide.

`POST /v1/orders/{order_id}/fulfillments`

Signature: `createFulfillment(string|Model $order_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `body` | Required | [CreateFulfillmentRequestInput](../models/CreateFulfillmentRequestInput.md#createfulfillmentrequestinput) | Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages. |

Body model: [CreateFulfillmentRequestInput](../models/CreateFulfillmentRequestInput.md#createfulfillmentrequestinput).

#### orders.createFulfillment body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Optional | string | minLength: `1`. |
| `device_id` | Optional | string | Device used for this fulfillment. It must be active. When location_id is also set, the device must belong to that Location. minLength: `1`. |
| `digital_details` | Optional | [CreateDigitalFulfillmentDetailsInput](../models/CreateDigitalFulfillmentDetailsInput.md#createdigitalfulfillmentdetailsinput) | Digital fulfillment details you supply when creating a fulfillment: the delivery URL. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `line_items` | Required | Array of [FulfillmentLineItemRequestInput](../models/FulfillmentLineItemRequestInput.md#fulfillmentlineitemrequestinput) | minItems: `1`. Items: An order line item and quantity to include when creating a fulfillment. |
| `local_delivery_details` | Optional | [CreateDeliveryFulfillmentDetailsInput](../models/CreateDeliveryFulfillmentDetailsInput.md#createdeliveryfulfillmentdetailsinput) | Local delivery details you supply when creating a fulfillment: courier, timing window, instructions, and tracking. |
| `location_id` | Optional | string | minLength: `1`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `pickup_details` | Optional | [CreatePickupFulfillmentDetailsInput](../models/CreatePickupFulfillmentDetailsInput.md#createpickupfulfillmentdetailsinput) | Pickup details you supply when creating a fulfillment: the pickup address, location, window, instructions, and curbside details. |
| `recipient` | Optional | [FulfillmentRecipientRequestInput](../models/FulfillmentRecipientRequestInput.md#fulfillmentrecipientrequestinput) | Recipient details you supply when creating or updating a fulfillment: name, email, phone, address, and handling instructions. |
| `service_details` | Optional | [CreateServiceFulfillmentDetailsInput](../models/CreateServiceFulfillmentDetailsInput.md#createservicefulfillmentdetailsinput) | Service details you supply when creating a fulfillment: the scheduled start and end, timezone, and notes. |
| `shipment` | Optional | [FulfillmentPackagingRequestInput](../models/FulfillmentPackagingRequestInput.md#fulfillmentpackagingrequestinput) | Creates an outbound shipment and packages atomically with a shipment fulfillment. single_package assigns every submitted line quantity to package; itemized requires explicit items in each of 1 to 20 packages. Set a package's status to shipped to report handoff in the same call. Creates an outbound shipment with one package using `packaging: single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`. External reference and metadata are optional. |
| `type` | Required | string | Values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`. |

#### orders.createFulfillment with `type: "shipment"`

Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages.

Body model: [CreateFulfillmentRequestShipmentInput](../models/CreateFulfillmentRequestShipmentInput.md#createfulfillmentrequestshipmentinput).

#### orders.createFulfillment with `type: "pickup"`

Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages.

Body model: [CreateFulfillmentRequestPickupInput](../models/CreateFulfillmentRequestPickupInput.md#createfulfillmentrequestpickupinput).

#### orders.createFulfillment with `type: "local_delivery"`

Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages.

Body model: [CreateFulfillmentRequestLocalDeliveryInput](../models/CreateFulfillmentRequestLocalDeliveryInput.md#createfulfillmentrequestlocaldeliveryinput).

#### orders.createFulfillment with `type: "digital"`

Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages.

Body model: [CreateFulfillmentRequestDigitalInput](../models/CreateFulfillmentRequestDigitalInput.md#createfulfillmentrequestdigitalinput).

#### orders.createFulfillment with `type: "service"`

Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages.

Body model: [CreateFulfillmentRequestServiceInput](../models/CreateFulfillmentRequestServiceInput.md#createfulfillmentrequestserviceinput).

#### Response

Returned payload: [Fulfillment](../models/Fulfillment.md#fulfillment).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->orders->createFulfillment('ord_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'line_items' => [
    (object) [
      'order_line_item_id' => 'li_01KEZF7C004XP0V220YVMGQ354',
      'quantity' => 1,
    ],
  ],
  'metadata' => (object) [
    'source' => 'dispatch',
  ],
  'shipment' => (object) [
    'package' => (object) [
      'carrier' => 'ups',
      'status' => 'created',
      'tracking_number' => '1Z999AA10123456784',
    ],
    'packaging' => 'single_package',
  ],
  'type' => 'shipment',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-createFulfillment.php)

### orders.createLineItems

Adds one or more line items to an order.

`POST /v1/orders/{order_id}/line-items`

Signature: `createLineItems(string|Model $order_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `body` | Required | [AddLineItemsRequestInput](../models/AddLineItemsRequestInput.md#addlineitemsrequestinput) | The request body for: Add line items. |

Body model: [AddLineItemsRequestInput](../models/AddLineItemsRequestInput.md#addlineitemsrequestinput).

#### orders.createLineItems body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional order version from the last order read. The mutation fails if the order changed. Format: `int64`. minimum: `1`. |
| `line_items` | Required | Array of [CreateOrderLineItemRequestInput](../models/CreateOrderLineItemRequestInput.md#createorderlineitemrequestinput) | minItems: `1`. Items: A line item to add to an order: a catalog variant, a bundle, or a custom item with a name and unit price. |

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
| 410 | ApiError |
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

$result = $client->orders->createLineItems('ord_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'line_items' => [
    (object) [
      'type' => 'variant',
      'variant_id' => 'var_01ARZ3NDEKTSV4RRFFQ69G5FAV',
    ],
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-createLineItems.php)

### orders.createPaymentIntent

Creates a payment intent owned by the order. Collect a payment source using payment_collection, then submit that source through payOrder. This route requires commerce.orders.write; standalone payment-intent routes require payments.payment_intents.write.

`POST /v1/orders/{order_id}/payment-intents`

Signature: `createPaymentIntent(string|Model $order_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `body` | Required | [CreateOrderPaymentIntentRequestInput](../models/CreateOrderPaymentIntentRequestInput.md#createorderpaymentintentrequestinput) | The request body for: Create order payment intent. |

Body model: [CreateOrderPaymentIntentRequestInput](../models/CreateOrderPaymentIntentRequestInput.md#createorderpaymentintentrequestinput).

#### orders.createPaymentIntent body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItemFlatMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvarianttaxcalculationcomponentsitemflatmoney) | Amount to collect toward the order, in the order currency. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `capture_method` | Optional | string | automatic collects the payment when it is confirmed. manual places a hold at confirmation that you capture or cancel later. Defaults to automatic. Values: `"automatic"`, `"manual"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `payment_options` | Optional | Array of string | Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `payment_return_url` | Optional | string | Absolute HTTPS URL on your site where Flint sends the buyer after a redirect payment such as Affirm. Required when payment_options includes affirm. It can't contain credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. minLength: `1`. pattern: `\S`. |
| `payment_source_selection` | Optional | [OrderPaymentSourceSelectionInput](../models/OrderPaymentSourceSelectionInput.md#orderpaymentsourceselectioninput) | The payment source options you choose when creating an order payment intent. |

#### Response

Returned payload: [OrdersCreatePaymentIntentResponseData](../models/OrdersCreatePaymentIntentResponseData.md#orderscreatepaymentintentresponsedata).

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `add_on_fees` | Optional | Array of [PaymentAddOnFee](../models/PaymentAddOnFee.md#paymentaddonfee) | Itemized invoice, subscription, and automatic tax fees collected with this payment. Available to the merchant only. Empty until fees settle or when no add-ons apply. Refunds do not return or revise these fees. Absent until Flint has determined and verified the fee. If Flint can't verify it when you read the payment intent, the field is omitted rather than shown unverified; read the payment intent again later. |
| `amount_money` | Required | [MoneyValue](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItemFlatMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvarianttaxcalculationcomponentsitemflatmoney) | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `authorization_expires_at` | Optional | string | Deadline to capture a manual-capture hold. The authorization lapses at this time, and a capture attempted after it fails even if status is still requires_capture. Set when the hold is placed. Format: `date-time`. |
| `authorized_at` | Optional | string | When the processor authorized the payment. Absent until then. Format: `date-time`. |
| `authorized_money` | Optional | [MoneyValue](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItemFlatMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvarianttaxcalculationcomponentsitemflatmoney) | The amount the processor authorized. It always equals amount_money and doesn't change once set. Absent until the payment is authorized, and on payments canceled before authorization. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `cancellation_reason` | Optional | string | Flint-normalized reason the payment intent was canceled. Present only while status is canceled. Unknown processor values are returned as payment_canceled. Values: [8 declared values](#orderscreatepaymentintent-response-cancellation_reason-values). |
| `capturable_money` | Optional | [MoneyValue](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItemFlatMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvarianttaxcalculationcomponentsitemflatmoney) | The part of the authorization you can still capture. Positive only while status is requires_capture, and zero after you capture or cancel or the authorization expires. The authorization lapses at authorization_expires_at, and a capture attempted after that fails even if this is positive. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `capture_method` | Optional | string | When money is collected. Defaults to automatic. Values: `"automatic"`, `"manual"`. |
| `captured_at` | Optional | string | When money was captured. For automatic capture, this is when the payment succeeded. Absent until capture. Format: `date-time`. |
| `captured_money` | Optional | [MoneyValue](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItemFlatMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvarianttaxcalculationcomponentsitemflatmoney) | The amount collected from the buyer. Reconcile revenue and print receipts from this amount, not amount_money. Zero while a hold is open, and positive whenever status is succeeded. processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `checkout_session_id` | Optional | string | Flint checkout session ID associated with this payment, when present. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummaryInput.md#expandedcustomersummaryinput) or null | The linked customer. Returned only with expand=customer. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string | Customer linked to this payment intent. |
| `dispute_status` | Optional | string | Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Values: [10 declared values](#orderscreatepaymentintent-response-dispute_status-values). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `fulfillment_hold` | Optional | [PaymentFulfillmentHold](../models/PaymentFulfillmentHoldInput.md#paymentfulfillmentholdinput) | Present when a payment provider asked Flint to pause fulfillment for this payment. While its status is active, open fulfillments on the order are on hold with reason payment_review. payment_intent.fulfillment_hold_updated is sent when the hold starts and when it lifts. A hold on fulfillment tied to a payment, with the reason, the action required, and whether the hold is active or released. |
| `invoice` | Optional | [ExpandedInvoiceSummary](../models/ExpandedInvoiceSummary.md#expandedinvoicesummary) or null | The linked invoice. Returned only with expand=invoice. Present only when `expand` includes `invoice`; `null` when expanded and there is no related invoice. |
| `invoice_id` | Optional | string | Invoice this payment intent collects, when it pays an invoice. |
| `last_payment_error` | Required | [PaymentErrorSummary](../models/PaymentErrorSummary.md#paymenterrorsummary) or null | Most recent payment error. Null when no payment error is recorded. |
| `merchant_id` | Optional | string | Merchant that owns this payment intent. |
| `merchant_net_money` | Optional | [MoneyValue](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItemFlatMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvarianttaxcalculationcomponentsitemflatmoney) | Captured amount minus processing_fee_money and every amount in add_on_fees. Later merchant assessments and credits are separate balance effects. Absent until Flint has determined and verified the fee. If Flint can't verify it when you read the payment intent, the field is omitted rather than shown unverified; read the payment intent again later. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `metadata` | Required | Map of string | Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't returned. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | The linked order. Returned only with expand=order. Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Optional | string | Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. |
| `payment_flow` | Required | string | How the payment was started. Fixed when the payment intent is created. Values: `"checkout"`, `"payment_link"`, `"invoice"`, `"subscription_initial"`, `"subscription_renewal"`, `"virtual_terminal"`, `"api"`. |
| `payment_intent_id` | Required | string | Flint payment intent ID. |
| `payment_options` | Required | Array of string | Payment options the buyer can use for this payment. Items values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `payment_source` | Optional | [PaymentSourceSummary](../models/PaymentSourceSummary.md#paymentsourcesummary) | Summary of the card or bank account used for the payment. Absent until a payment source is attached. A summary of the payment source used for a payment, by funding-method family, with card or bank account display details. |
| `processing_fee_money` | Optional | [MoneyValue](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItemFlatMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvarianttaxcalculationcomponentsitemflatmoney) | Flint's all-in processing fee for this payment. It is the complete price Flint charges to process the payment, never a provider cost passed through. The fee is final once the card payment is captured or the ACH payment succeeds; canceled payments and failures before success have none. Invoice, subscription, and automatic tax fees are itemized separately in add_on_fees. Your net for the payment is captured_money minus this fee and the add-on fees. Refunds do not return or revise it. Absent until Flint has determined and verified the fee. If Flint can't verify it when you read the payment intent, the field is omitted rather than shown unverified; read the payment intent again later. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `receipt_email` | Optional | string or null | Email address for this payment's receipt. When it isn't set, Flint uses the customer's email. Format: `email`. maxLength: `255`. |
| `refund_status` | Optional | string | How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `refunded_money` | Optional | [MoneyValue](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItemFlatMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvarianttaxcalculationcomponentsitemflatmoney) | Total refunded against captured_money, including value issued as store credit and processor refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `released_money` | Optional | [MoneyValue](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItemFlatMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvarianttaxcalculationcomponentsitemflatmoney) | The part of the authorization returned to the buyer without being charged: the uncaptured remainder after a partial capture, or the whole authorization after a cancellation or expiry. It was never collected, so it needs no refund and can't be captured later. Absent until the payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `return_id` | Optional | string | Flint return ID associated with this payment, when present. |
| `risk` | Optional | [PaymentRisk](../models/PaymentRiskInput.md#paymentriskinput) or null | Risk assessment. Always present with merchant credentials; null when no risk assessment is available. Omitted with the checkout credential. |
| `selected_payment_option` | Optional | string | The payment option the most recent confirmation used. Absent until the payment intent is first confirmed. |
| `status` | Required | string | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |
| `support_reference` | Required | string | Opaque payment reference to share with merchant support. Do not parse its format. |
| `supported_actions` | Required | Array of string | Actions the payment intent's current state accepts, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. An action that isn't listed returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused because of something outside the payment intent: an open risk review, an order payment attempt that is using this payment, a closed order, or the merchant's account. An order-owned payment intent never lists confirm; pay it with POST /v1/orders/{order_id}/pay. The list changes only when the payment intent changes. Always empty for buyer credentials. New actions may be added. Items values: `"confirm"`, `"capture"`, `"cancel"`. |
| `tip_money` | Optional | [MoneyValue](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItemFlatMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvarianttaxcalculationcomponentsitemflatmoney) or null | Portion of amount_money that is a tip. Uses amount_money's currency and is at most amount_money. |
| `transaction_purpose` | Optional | string | Why a bank debit is taken. Set only when payment_options includes ach_debit, and fixed once the payment intent exists. Values: `"goods"`, `"services"`, `"other"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |
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

$result = $client->orders->createPaymentIntent('ord_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-createPaymentIntent.php)

### orders.deleteCharge

Removes a single service charge, fee, or surcharge from an order.

`DELETE /v1/orders/{order_id}/charges/{order_charge_id}`

Signature: `deleteCharge(string|Model $order_id, string|Model $order_charge_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `order_charge_id` | Required | string | Flint order charge ID. |
| `expected_version` | Optional | integer | Order version from the last order read. The mutation fails if the order changed. Format: `int64`. minimum: `1`. |

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
| 410 | ApiError |
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

$result = $client->orders->deleteCharge('ord_01ARZ3NDEKTSV4RRFFQ69G5FAV', 'och_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
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
| `expected_version` | Optional | integer | Order version from the last order read. The mutation fails if the order changed. Format: `int64`. minimum: `1`. |

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
| 410 | ApiError |
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

$result = $client->orders->deleteLineItem('ord_01ARZ3NDEKTSV4RRFFQ69G5FAV', 'li_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
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
| `expand` | Optional | Array of string or string | Supported expansions: customer, fulfillments.packages, fulfillments.shipments, payment_intents, subscription, subscription_plan. Expansion requires the base order read scope plus the read scope for each expanded resource. Limits: at most 10 unique expand paths per request. To-many expansions are capped at 20 related objects per path. Repeat expand, for example expand=customer&expand=fulfillments.packages, or pass one comma-separated value. Items values: `"customer"`, `"fulfillments.packages"`, `"fulfillments.shipments"`, `"payment_intents"`, `"subscription"`, `"subscription_plan"`. Values: `"customer"`, `"fulfillments.packages"`, `"fulfillments.shipments"`, `"payment_intents"`, `"subscription"`, `"subscription_plan"`. |

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
| 410 | ApiError |
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
$result = $client->orders->get('ord_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/orders-get.php)

### orders.getCurrentDeliverySelection

Returns the delivery selection committed to an order.

`GET /v1/orders/{order_id}/delivery-selections/current`

Signature: `getCurrentDeliverySelection(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |

#### Response

Returned payload: [DeliverySelection](../models/DeliverySelection.md#deliveryselection).

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

```php
$result = $client->orders->getCurrentDeliverySelection('ord_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
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
| `order_id` | Required | string | Flint order ID. |
| `order_payment_attempt_id` | Required | string | Flint order payment attempt ID. |

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
| 410 | ApiError |
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
$result = $client->orders->getPaymentAttempt('ord_01ARZ3NDEKTSV4RRFFQ69G5FAV', 'opat_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/orders-getPaymentAttempt.php)

### orders.list

Returns a paginated list of orders for the authenticated merchant. Default order: created_at descending, then order_id descending.

`GET /v1/orders`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `customer_id` | Optional | string | Filter by customer ID. |
| `order_id` | Optional | Array of string or string | Exact-match filter on order IDs. Repeat the parameter or use comma-separated IDs to match any of up to 100 distinct IDs. Unknown IDs and orders outside your merchant or environment are absent. Other filters still apply, and results keep the list's ordering and pagination. Keep the same ID set on subsequent pages. |
| `closed_reason` | Optional | Array of string or string | Why a closed order closed. Repeated keys and comma-separated values match any reason. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`. Values: `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`. |
| `status` | Optional | Array of string or string | Order status: open or closed. Repeated keys and comma-separated values are both accepted. Selecting open and closed includes both statuses. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"open"`, `"closed"`. Values: `"open"`, `"closed"`. |
| `payment_status` | Optional | Array of string or string | Filter by settled collection status. Repeat the parameter or pass comma-separated values to match any of several statuses. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"unpaid"`, `"partially_paid"`, `"paid"`. Values: `"unpaid"`, `"partially_paid"`, `"paid"`. |
| `refund_status` | Optional | Array of string or string | Filter by refund progress. Repeated keys and comma-separated values are both accepted to match any status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"none"`, `"partially_refunded"`, `"refunded"`. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `fulfillment_status` | Optional | Array of string or string | Filter by aggregate order fulfillment status. Repeated keys and comma-separated values are both accepted to match any status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`. Values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`. |
| `order_number` | Optional | string | Filter by merchant-visible order number. |
| `has_unassigned_fulfillment_quantity` | Optional | boolean | Filter by whether any required fulfillment quantity is unassigned. True includes orders with a positive sum of line fulfillment_quantities.unassigned_quantity; false includes orders with no unassigned quantity, including orders that need no fulfillment. |
| `has_open_fulfillment` | Optional | boolean | Filter by whether the order has an open fulfillment. A fulfillment remains open until it completes, is canceled, fails, or is marked as a no-show. False includes orders with no fulfillments. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `origin` | Optional | Array of string or string | Filter by order origin. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"virtual_terminal"`, `"payment_link"`, `"checkout"`, `"api"`, `"subscription"`. Values: `"virtual_terminal"`, `"payment_link"`, `"checkout"`, `"api"`, `"subscription"`. |
| `query` | Optional | string | Search across order_id, order number, external_reference_id, fulfillment external_reference_id, buyer email, notes, and line item names. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as ord_01. |
| `subscription_id` | Optional | string | Filter by subscription ID. |
| `subscription_delivery_changed` | Optional | boolean | Filter by whether the subscriber changed delivery after this order was paid. |
| `return_id` | Optional | string | Filter by the Return that created a replacement order. |
| `return_resolution_id` | Optional | string | Filter by the ReturnResolution that created a replacement order. |
| `payment_link_id` | Optional | string | Filter by the payment link whose checkout created the order. |
| `min_amount` | Optional | integer | Inclusive lower bound on pricing_amounts.total_money.amount. Requires currency. Format: `int64`. minimum: `1`. |
| `max_amount` | Optional | integer | Inclusive upper bound on pricing_amounts.total_money.amount. Requires currency. Format: `int64`. minimum: `1`. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by order_id. Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`, `"settlement_amounts.outstanding_money"`, `"pricing_amounts.total_money"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `expand` | Optional | Array of string or string | Supported expansions: customer, subscription, subscription_plan. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=customer&expand=subscription, or pass one comma-separated value. Items values: `"customer"`, `"subscription"`, `"subscription_plan"`. Values: `"customer"`, `"subscription"`, `"subscription_plan"`. |

#### Response

Returned payload: [OrderListResponse](../models/OrderListResponse.md#orderlistresponse).

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

Field definitions: [shared fields](me.md#request-fields-45).

#### Response

Returned payload: [OrderActivityListResponse](../models/OrderActivityListResponse.md#orderactivitylistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 410 | ApiError |
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
$result = $client->orders->listActivities('ord_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/orders-listActivities.php)

### orders.listPaymentAttempts

Returns payment attempts for the order, newest first. Checkout-session callers see only attempts created by their own session. A list filtered by idempotency_key omits pending_actions; read the attempt by ID to get them. Default order: started_at descending, then order_payment_attempt_id descending.

`GET /v1/orders/{order_id}/payment-attempts`

Signature: `listPaymentAttempts(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |

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
| 410 | ApiError |
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
$result = $client->orders->listPaymentAttempts('ord_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/orders-listPaymentAttempts.php)

### orders.pay

Starts or resumes a payment attempt on the order. Set action to pay to charge the full outstanding balance, confirm_payment_intents to confirm order-owned payment intents, setup to save a newly collected token on a zero-balance order, or resume to continue an attempt after a pending client action. Each action accepts only its own fields. Only confirm_payment_intents accepts completion_behavior. A pay action without payment_source is valid only when the outstanding balance is zero. To continue a resumable attempt, send action: resume with order_payment_attempt_id and a new Idempotency-Key. An exact retry of the original request with its Idempotency-Key returns the stored response if the request completed, or recovers the same attempt if it was interrupted. Payment intents with manual capture return an active authorization instead of settling immediately. A replay preserves the original HTTP status and domain result. Client authority in order_payment_attempt.pending_actions is available only within 24 hours of the original request and while the matching current payment attempt has status requires_action. Otherwise pending_actions is empty. Read GET /v1/orders/{order_id}/payment-attempts/{order_payment_attempt_id} for the attempt's current state.

`POST /v1/orders/{order_id}/pay`

Signature: `pay(string|Model $order_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `Flint-Buyer-Device` | Optional | string | A stable random device identifier, independent of the order or checkout session. Required for checkout-session gift card purchases. Keep it for subsequent purchases from the same device; it grants no access. pattern: `^[a-f0-9]{32}$`. |
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
| 410 | ApiError |
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

$result = $client->orders->pay('ord_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'action' => 'pay',
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
| `order_id` | Required | string | Flint order ID. |
| `body` | Required | [RemoveDiscountsRequestInput](../models/RemoveDiscountsRequestInput.md#removediscountsrequestinput) | The request body for: Remove discounts. |

Body model: [RemoveDiscountsRequestInput](../models/RemoveDiscountsRequestInput.md#removediscountsrequestinput).

#### orders.removeDiscounts body fields

Field definitions: [shared fields](../models/RemoveDiscountsRequestInput.md#removediscountsrequestinput).

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
| 410 | ApiError |
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

$result = $client->orders->removeDiscounts('ord_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'order_discount_ids' => [
    'ad_01JFXH8Z2K7QF9V3MB0N4T6RCP',
  ],
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
| `order_id` | Required | string | Order ID. |
| `gift_card_id` | Required | string | Selected gift card ID. |
| `expected_version` | Required | integer | Order version from the last order read. The mutation fails if the order changed. Format: `int64`. minimum: `1`. |

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
| 410 | ApiError |
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

$result = $client->orders->removeGiftCard('ord_01ARZ3NDEKTSV4RRFFQ69G5FAV', 'gc_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
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
| 410 | ApiError |
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

$result = $client->orders->repriceDiscounts('ord_01ARZ3NDEKTSV4RRFFQ69G5FAV', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-repriceDiscounts.php)

### orders.resolveInventoryException

Marks a paid inventory failure as resolved after an operator has completed manual inventory remediation.

`POST /v1/orders/{order_id}/inventory-exception/resolve`

Signature: `resolveInventoryException(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
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
| 410 | ApiError |
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

$result = $client->orders->resolveInventoryException('ord_01ARZ3NDEKTSV4RRFFQ69G5FAV', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-resolveInventoryException.php)

### orders.sendReceipt

Queues a receipt for a paid order, including gift card payments and settled payments, and returns the order unchanged. Send email to choose a recipient, or omit it to use the order's email. Requires Flint-managed receipt delivery. Sending is limited to once every five minutes per order and normalized recipient. Checkout credentials can send only to the address on file. If no address is on file, checkout credentials can send to at most three distinct addresses over the order's lifetime. Receipts sent for this order through this route count toward this limit, including failed deliveries and receipts sent with a secret API key. Merchant callers can choose any address.

`POST /v1/orders/{order_id}/send-receipt`

Signature: `sendReceipt(string|Model $order_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
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
| 410 | ApiError |
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

$result = $client->orders->sendReceipt('ord_01ARZ3NDEKTSV4RRFFQ69G5FAV', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/orders-sendReceipt.php)

### orders.update

Applies a sparse update to mutable order fields such as customer_id, notes, metadata, tax, the delivery destination, and the requested tip. A request containing only metadata, internal_note, buyer_note, or external_reference_id, with optional expected_version, can update open, closed, paid, and invoice-locked orders without changing totals. Other merchant edits keep hosted and embedded checkout sessions open unless an edit closes or completes the order, which ends the session with order_mutated. Edits can also end invoice, return-resolution, and subscription-plan sessions with order_mutated. A session already past expires_at ends with expired before the edit is applied. These annotation updates are blocked while any order payment attempt remains non-terminal, including an authorization awaiting capture, or checkout payment work is still resolving. Requests combining annotations with other fields use the financial mutation rules for the entire request. Send requested_tip: null to clear the current requested tip. A merchant can correct a paid subscription signup or renewal destination before shipment by sending delivery_destination and the current order version as expected_version. The committed delivery methods must remain eligible, and shipping and tax totals must stay unchanged. When the correction would change the paid totals, the request returns 409 ACTION_NOT_ALLOWED with details[0].reason payment_collected. The detail can include shipping_money, requoted_shipping_money, tax_money, and requoted_tax_money.

`PATCH /v1/orders/{order_id}`

Signature: `update(string|Model $order_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `body` | Required | [UpdateOrderRequestInput](../models/UpdateOrderRequestInput.md#updateorderrequestinput) | The request body for: Update order. minProperties: `1`. |

Body model: [UpdateOrderRequestInput](../models/UpdateOrderRequestInput.md#updateorderrequestinput).

#### orders.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_note` | Optional | string or null | Buyer-provided note about this order, such as a gift message or purchase preference. Send null to clear it. minLength: `1`. maxLength: `1000`. |
| `customer_id` | Optional | string | minLength: `1`. |
| `delivery_destination` | Optional | [OrderDeliveryDestinationRequestInput](../models/OrderDeliveryDestinationRequestInput.md#orderdeliverydestinationrequestinput) or null | Complete replacement destination. Allowed while the order is open and unpaid and no delivery selection controls it. A merchant may also correct a paid subscription signup or renewal before shipment by sending expected_version, when the committed delivery methods remain eligible and shipping and tax totals stay the same. A paid destination cannot be cleared. Send null to clear an unpaid order's delivery destination. |
| `expected_version` | Optional | integer | Order version from the last order read. Required when correcting a paid delivery destination. Optional for other updates; when supplied, the update fails if the order changed. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system.  Send null to clear external_reference_id. minLength: `1`. maxLength: `255`. |
| `internal_note` | Optional | string or null | Internal note about this order, visible only to the merchant. Send null to clear it. minLength: `1`. maxLength: `1000`. |
| `inventory_routing_source` | Optional | [OrderInventoryRoutingSourceRequestInput](../models/DeliveryPreviewRoutingSourceInput.md#deliverypreviewroutingsourceinput) | Where inventory for an order is allocated from: a fixed location, an allocation policy, or a specific policy revision. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Send null to clear caller-owned metadata and preserve Flint-managed keys. |
| `requested_tip` | Optional | [CreateOrderTipInput](../models/CreateOrderTipInput.md#createordertipinput) or null | Requested tip to set or replace. Send null to clear the current requested tip. |
| `tax` | Optional | [OrderTaxUpdateRequestInput](../models/OrderTaxUpdateRequestInput.md#ordertaxupdaterequestinput) | Changes to an order's tax settings: whether tax is enabled, the calculation, the location, and per-line-item or per-charge calculations. |

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
| 410 | ApiError |
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
| `body` | Required | [UpdateOrderChargeRequestInput](../models/UpdateOrderChargeRequestInput.md#updateorderchargerequestinput) | The request body for: Update order charge. |

Body model: [UpdateOrderChargeRequestInput](../models/UpdateOrderChargeRequestInput.md#updateorderchargerequestinput).

#### orders.updateCharge body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItemFlatMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvarianttaxcalculationcomponentsitemflatmoney) | Replacement fixed charge amount in the order currency. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculation_basis` | Optional | string | Values: `"subtotal_pre_discount"`, `"subtotal_post_discount"`. |
| `description` | Optional | string or null |  Send null to clear description. minLength: `1`. maxLength: `2048`. |
| `expected_version` | Optional | integer | Optional order version from the last order read. The mutation fails if the order changed. Format: `int64`. minimum: `1`. |
| `fulfillment_id` | Optional | string or null |  Send null to unlink the fulfillment. minLength: `1`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Send null to clear all metadata. |
| `name` | Optional | string | minLength: `1`. maxLength: `255`. |
| `percent` | Optional | number | multipleOf: `0.0001`. |
| `tax` | Optional | [OrderCalculatedChargeTaxInput](../models/OrderCalculatedChargeTaxInput.md#ordercalculatedchargetaxinput) | Tax settings for an order charge calculated by Flint or supplied by you, including the charge's tax category and whether it is taxable. |
| `type` | Optional | string | Values: [17 declared values](../models/BuyerOrderChargeInput.md#buyerorderchargeinput-type-values). |

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
| 410 | ApiError |
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

Updates a single line item on an order. expected_version is the order version returned in data.version. Send gift_card_face_value_money and expected_version to select an unpaid gift card line's face value within its frozen offer and reprice the order before any purchase funding. Send gift_card_recipient and expected_version to replace or clear recipient delivery details before any purchase funding. Checkout credentials can update gift card face value and recipient details together, modifiers, or a line subscription offer selection, each with expected_version. Repeating the current gift card face value does not change the order version. Set subscription to null to buy the line once.

`PATCH /v1/orders/{order_id}/line-items/{order_line_item_id}`

Signature: `updateLineItem(string|Model $order_id, string|Model $order_line_item_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | Flint order ID. |
| `order_line_item_id` | Required | string | Flint order line item ID. |
| `body` | Required | [UpdateLineItemRequestInput](../models/UpdateLineItemRequestInput.md#updatelineitemrequestinput) | The request body for: Update line item. |

Body model: [UpdateLineItemRequestInput](../models/UpdateLineItemRequestInput.md#updatelineitemrequestinput).

#### orders.updateLineItem body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Optional | string or null |  Send null to clear description. minLength: `1`. |
| `expected_version` | Optional | integer | Order version from the last order read, returned in data.version. Required when any of these fields is present: modifiers, gift_card_recipient, gift_card_face_value_money, subscription. Format: `int64`. minimum: `1`. |
| `gift_card_face_value_money` | Optional | object | Selects the face value of an unpaid, unfunded gift card line within its frozen offer's custom_amount_bounds and reprices the order. Fixed-denomination offers accept only their current value. Omission preserves the value; null is not allowed. Requires expected_version from the order. Checkout credentials may send this field alone or together with gift_card_recipient. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. |
| `gift_card_recipient` | Optional | [GiftCardPurchaseRecipientPatchRequestInput](../models/GiftCardPurchaseRecipientPatchRequestInput.md#giftcardpurchaserecipientpatchrequestinput) or null | Replaces the recipient of an unfunded gift card purchase. Omission preserves it; null clears it. Send expected_version from the order. Send null to clear gift_card_recipient. Requires expected_version. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Send null to clear all metadata. |
| `modifiers` | Optional | Array of [OrderLineItemModifierRequestInput](../models/OrderLineItemModifierRequestInput.md#orderlineitemmodifierrequestinput) | Items: A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity. |
| `name` | Optional | string | minLength: `1`. |
| `quantity` | Optional | integer | Replacement quantity, from 1 through 9999. The extended line subtotal, including modifiers, must satisfy the order money ceiling. Format: `int64`. minimum: `1`. maximum: `9999`. |
| `subscription` | Optional | [SubscribedLineRequestInput](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantSubscription.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvariantsubscription) or null | Selects an active subscription offer and reprices an unpaid line. Null selects a one-time purchase. Omission preserves the selection. Requires expected_version from the order and clears the delivery selection when terms change. Send null to clear subscription. Requires expected_version. |
| `tax` | Optional | [OrderCalculatedLineItemTaxInput](../models/OrderCalculatedLineItemTaxInput.md#ordercalculatedlineitemtaxinput) | Tax settings for an order line item calculated by Flint or supplied by you, including the line item tax category and whether it is taxable. |
| `unit_price_money` | Optional | [MoneyValueInput](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItemFlatMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvarianttaxcalculationcomponentsitemflatmoney) | Price of one unit. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

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
| 410 | ApiError |
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

