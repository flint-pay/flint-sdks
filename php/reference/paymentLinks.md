[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# paymentLinks

### paymentLinks.create

Creates a payment link for the authenticated merchant. Line items may use fixed prices, buyer-adjustable amounts, and buyer-adjustable quantities.

`POST /v1/payment-links`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreatePaymentLinkRequestInput](../models/CreatePaymentLinkRequestInput.md#createpaymentlinkrequestinput) | The request body for: Create payment link. |

Body model: [CreatePaymentLinkRequestInput](../models/CreatePaymentLinkRequestInput.md#createpaymentlinkrequestinput).

#### paymentLinks.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFieldsRequestRequestInput](../models/CheckoutBuyerFieldsRequestRequestInput.md#checkoutbuyerfieldsrequestrequestinput) | What checkout asks the buyer for. Each field you leave out uses your checkout settings. |
| `checkout_session_expires_in_seconds` | Optional | integer string | Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `custom_fields` | Optional | Array of [PaymentLinkCustomFieldRequestInput](../models/PaymentLinkCustomFieldRequestInput.md#paymentlinkcustomfieldrequestinput) | maxItems: `20`. |
| `custom_text` | Optional | [PaymentLinkCustomTextConfigInput](../models/PaymentLinkCustomTextConfigInput.md#paymentlinkcustomtextconfiginput) | Custom text shown on a payment link's checkout, such as the order summary message and shipping address label. |
| `delivery_method_ids` | Optional | Array of string | Complete delivery method selection for the link. A link without delivery methods offers settings.checkout.default_delivery_method_ids when its order has items to deliver. Send an empty array to clear the selection. Omit it on PATCH to leave the selection unchanged. Null and duplicate IDs are not accepted. maxItems: `25`. uniqueItems: `true`. Items: minLength: `1`. |
| `description` | Optional | string | minLength: `1`. maxLength: `2048`. |
| `donation_max_amount_money` | Optional | [MoneyValueInput](../models/PaymentLinkLineItemsItemBundleResolvedUnitPriceMoney.md#paymentlinklineitemsitembundleresolvedunitpricemoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `donation_min_amount_money` | Optional | [MoneyValueInput](../models/PaymentLinkLineItemsItemBundleResolvedUnitPriceMoney.md#paymentlinklineitemsitembundleresolvedunitpricemoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `donation_suggested_amount_money_options` | Optional | Array of [MoneyValueInput](../models/PaymentLinkLineItemsItemBundleResolvedUnitPriceMoney.md#paymentlinklineitemsitembundleresolvedunitpricemoney) |  |
| `event_config` | Optional | [PaymentLinkEventConfigRequestInput](../models/PaymentLinkEventConfigRequestInput.md#paymentlinkeventconfigrequestinput) | Event settings you supply when creating an event payment link. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `image` | Optional | [ImageRequestInput](../models/ImageRequestInput.md#imagerequestinput) | An image you supply by `source_url`, with optional `alt` text and external reference. |
| `inactive_message` | Optional | string | minLength: `1`. maxLength: `500`. |
| `inventory_routing_source` | Optional | [InventoryRoutingSourceRequestInput](../models/InventoryRoutingSourceRequestInput.md#inventoryroutingsourcerequestinput) | Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`. |
| `legal` | Optional | [PaymentLinkLegalConfigInput](../models/PaymentLinkLegalConfigInput.md#paymentlinklegalconfiginput) | Legal links on a payment link: contract, refund policy, shipping policy, and terms of service URLs, and whether buyers must accept the terms. |
| `line_items` | Optional | Array of [PaymentLinkLineItemRequestInput](../models/PaymentLinkLineItemRequestInput.md#paymentlinklineitemrequestinput) |  |
| `max_completions` | Optional | integer | Format: `int32`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Metadata pairs plus custom fields must not exceed 44; 6 of the order's 50 pairs are reserved for Flint. Metadata keys and values, custom_field_ keys and largest possible answers, and Flint metadata must fit within 32768 UTF-8 bytes. Text and textarea answers are budgeted at four bytes per Unicode code point, including optional fields. Each checkbox answer is budgeted at five bytes (the length of false). If the combined budget is exceeded, lower max_length on some fields, use fewer custom fields, or reduce metadata. These limits apply to standard and plan links and are checked against the merged configuration on update. maxProperties: `44`. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Required | string | minLength: `1`. maxLength: `255`. |
| `payment_link_type` | Optional | string | Payment link type. Omit to use standard. Explicit values must be standard, donation, or event; empty or padded values are invalid. Default: `"standard"`. Values: `"standard"`, `"donation"`, `"event"`. |
| `payments` | Optional | [PaymentLinkPaymentConfigInput](../models/PaymentLinkPaymentConfigInput.md#paymentlinkpaymentconfiginput) | Payment settings on a payment link: the enabled payment options and a note shown with payment. |
| `promotion_config` | Optional | [CheckoutPromotionConfigRequestRequestInput](../models/CheckoutPromotionConfigRequestRequestInput.md#checkoutpromotionconfigrequestrequestinput) | Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. |
| `redirects` | Optional | [CheckoutRedirectsRequestInput](../models/CheckoutRedirectsRequestInput.md#checkoutredirectsrequestinput) | Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url. |
| `sales_end_at` | Optional | string | RFC3339 timestamp after which the link stops starting checkouts and resolve returns PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Format: `date-time`. minLength: `1`. |
| `subscription_plan_id` | Optional | string | minLength: `1`. |
| `tax` | Optional | [CheckoutTaxConfigRequestRequestInput](../models/CheckoutTaxConfigRequestRequestInput.md#checkouttaxconfigrequestrequestinput) | Whether tax is collected for a checkout session or payment link. |
| `theme` | Optional | [PaymentLinkThemeConfigInput](../models/PaymentLinkThemeConfigInput.md#paymentlinkthemeconfiginput) | Theme settings for a payment link's checkout: accent color, primary color, and title. |
| `tip` | Optional | [CheckoutTipConfigRequestRequestInput](../models/CheckoutTipConfigRequestRequestInput.md#checkouttipconfigrequestrequestinput) | Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. |

#### Response

Returned payload: [PaymentLink](../models/PaymentLink.md#paymentlink).

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

$result = $client->paymentLinks->create([
  'name' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/paymentLinks-create.php)

### paymentLinks.get

Returns a single payment link by ID. With expand=sales_summary, includes gross paid totals and refunded totals per currency.

`GET /v1/payment-links/{payment_link_id}`

Signature: `get(string|Model $payment_link_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_link_id` | Required | string |  |
| `expand` | Optional | Array of string | Items values: `"sales_summary"`, `"subscription_plan"`. |

#### Response

Returned payload: [PaymentLink](../models/PaymentLink.md#paymentlink).

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

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->paymentLinks->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/paymentLinks-get.php)

### paymentLinks.getPublic

Returns the sanitized buyer-facing payment-link snapshot and a private resolution context for this browser operation.

`GET /v1/payment-links/{payment_link_id}/public`

Signature: `getPublic(string|Model $payment_link_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_link_id` | Required | string |  |

#### Response

Returned payload: [PublicPaymentLinkResult](../models/PublicPaymentLinkResult.md#publicpaymentlinkresult).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getPublicWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: none (anonymous). [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->paymentLinks->getPublic('example', [], new RequestOptions());
```

[Complete runnable example](../examples/paymentLinks-getPublic.php)

### paymentLinks.list

Returns a paginated list of payment links for the authenticated merchant. Default order: created_at descending, then payment_link_id descending.

`GET /v1/payment-links`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"inactive"`. |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `query` | Optional | string |  |
| `payment_link_type` | Optional | Array of string | minItems: `1`. Items values: `"standard"`, `"donation"`, `"event"`. |
| `has_subscription_plan` | Optional | boolean |  |
| `sort_by` | Optional | string | Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`. |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |
| `expand` | Optional | Array of string | Items values: `"sales_summary"`, `"subscription_plan"`. |

#### Response

Returned payload: [PaymentLinksListResponse200](../models/PaymentLinksListResponse200.md#paymentlinkslistresponse200).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
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
$result = $client->paymentLinks->list([], new RequestOptions());
```

[Complete runnable example](../examples/paymentLinks-list.php)

### paymentLinks.resolve

Creates a buyer checkout session from an active payment link. Catalog-backed modifier availability is frozen onto the checkout session and selected modifiers are resolved onto the backing order. For a retry after an uncertain response, reuse the original Idempotency-Key and resolution_context.

`POST /v1/payment-links/{payment_link_id}/resolve`

Signature: `resolve(string|Model $payment_link_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_link_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [ResolvePaymentLinkRequestInput](../models/ResolvePaymentLinkRequestInput.md#resolvepaymentlinkrequestinput) | The request body for: Resolve payment link. |

Body model: [ResolvePaymentLinkRequestInput](../models/ResolvePaymentLinkRequestInput.md#resolvepaymentlinkrequestinput).

#### paymentLinks.resolve body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_field_values` | Optional | Map of string | Buyer answers keyed by custom field key. Checkbox answers must be exactly true or false as strings. A required checkbox must be true. Map values: minLength: `1`. |
| `modifiers` | Optional | Map of [ResolvePaymentLinkLineItemModifiersInput](../models/ResolvePaymentLinkLineItemModifiersInput.md#resolvepaymentlinklineitemmodifiersinput) | Modifier choices keyed by line item key, for catalog items. |
| `quantity_overrides` | Optional | Map of integer | Quantities keyed by line item key (line_items[].key), each within that item's min_quantity and max_quantity. Event tiers accept 0. Whole-number quantities; fractional quantities are not supported. Map values: Whole-number quantity value; fractional quantities are not supported. Format: `int32`. |
| `resolution_context` | Required | string | minLength: `1`. |
| `unit_price_overrides` | Optional | Map of [MoneyValueInput](../models/PaymentLinkLineItemsItemBundleResolvedUnitPriceMoney.md#paymentlinklineitemsitembundleresolvedunitpricemoney) | Prices keyed by line item key, for items with allow_unit_price_adjustment, between min_unit_price_money and max_unit_price_money. A donation link has one line item, keyed donation. |
| `variant_selections` | Optional | Map of string | Variant IDs keyed by line item key (line_items[].key), for lines with variant_ids. Each selection must be offered by that line and priced in its current currency. Omit a key to use default_variant_id; a line without a default requires a selection. Null is not accepted. Map values: minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [CheckoutSessionWithSecret](../models/CheckoutSessionWithSecret.md#checkoutsessionwithsecret).

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

Complete body and metadata: `resolveWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: none (anonymous). [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->paymentLinks->resolve('example', [
  'resolution_context' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/paymentLinks-resolve.php)

### paymentLinks.update

Updates a payment link. To replace line items, custom fields, or delivery methods, send the complete array with `expected_version`.

`PATCH /v1/payment-links/{payment_link_id}`

Signature: `update(string|Model $payment_link_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_link_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdatePaymentLinkRequestInput](../models/UpdatePaymentLinkRequestInput.md#updatepaymentlinkrequestinput) | The request body for: Update payment link. |

Body model: [UpdatePaymentLinkRequestInput](../models/UpdatePaymentLinkRequestInput.md#updatepaymentlinkrequestinput).

#### paymentLinks.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFieldsRequestRequestInput](../models/CheckoutBuyerFieldsRequestRequestInput.md#checkoutbuyerfieldsrequestrequestinput) | What checkout asks the buyer for. Each field you leave out uses your checkout settings. |
| `checkout_session_expires_in_seconds` | Optional | integer string | Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `custom_fields` | Optional | Array of [PaymentLinkCustomFieldPatchRequestInput](../models/PaymentLinkCustomFieldPatchRequestInput.md#paymentlinkcustomfieldpatchrequestinput) | Replaces all custom fields atomically. Include an existing payment_link_custom_field_id to retain that member, omit the ID to create a member, and omit a previous member to remove it. Send an empty array to clear all custom fields, omit custom_fields to leave it unchanged, and do not send null. maxItems: `20`. |
| `custom_text` | Optional | [PaymentLinkCustomTextPatchRequestInput](../models/PaymentLinkCustomTextPatchRequestInput.md#paymentlinkcustomtextpatchrequestinput) | Changes to a payment link's custom checkout text. Send null to clear a field. |
| `delivery_method_ids` | Optional | Array of string | Complete delivery method selection for the link. A link without delivery methods offers settings.checkout.default_delivery_method_ids when its order has items to deliver. Send an empty array to clear the selection. Omit it on PATCH to leave the selection unchanged. Null and duplicate IDs are not accepted. maxItems: `25`. uniqueItems: `true`. Items: minLength: `1`. |
| `description` | Optional | string or null | Send null to clear. minLength: `1`. maxLength: `2048`. |
| `donation_max_amount_money` | Optional | [MoneyValueInput](../models/PaymentLinkLineItemsItemBundleResolvedUnitPriceMoney.md#paymentlinklineitemsitembundleresolvedunitpricemoney) or null | Maximum donation amount. Send null to clear the maximum. Send null to clear. |
| `donation_min_amount_money` | Optional | [MoneyValueInput](../models/PaymentLinkLineItemsItemBundleResolvedUnitPriceMoney.md#paymentlinklineitemsitembundleresolvedunitpricemoney) or null | Minimum donation amount. Send null to clear the minimum. Send null to clear. |
| `donation_suggested_amount_money_options` | Optional | Array of [MoneyValueInput](../models/PaymentLinkLineItemsItemBundleResolvedUnitPriceMoney.md#paymentlinklineitemsitembundleresolvedunitpricemoney) | Suggested donation amounts. Send an empty array to clear suggested amounts. |
| `event_config` | Optional | [PaymentLinkEventConfigPatchRequestInput](../models/PaymentLinkEventConfigPatchRequestInput.md#paymentlinkeventconfigpatchrequestinput) | Event configuration patch. Omit to leave unchanged. The whole configuration cannot be cleared; null is not accepted. Changes to an event payment link's settings. Send null on a nullable field to clear it. |
| `expected_version` | Optional | integer string | Payment link version last read by the caller. Required when line_items, custom_fields, or delivery_method_ids is present. Required when any of these fields is present: line_items, custom_fields, delivery_method_ids. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear. minLength: `1`. maxLength: `255`. |
| `image` | Optional | [ImageRequestInput](../models/ImageRequestInput.md#imagerequestinput) or null | Send null to clear. |
| `inactive_message` | Optional | string or null | Send null to clear. minLength: `1`. maxLength: `500`. |
| `inventory_routing_source` | Optional | [InventoryRoutingSourceRequestInput](../models/InventoryRoutingSourceRequestInput.md#inventoryroutingsourcerequestinput) | Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`. |
| `legal` | Optional | [PaymentLinkLegalPatchRequestInput](../models/PaymentLinkLegalPatchRequestInput.md#paymentlinklegalpatchrequestinput) | Changes to a payment link's legal links and terms setting. Send null on a URL to clear it. |
| `line_items` | Optional | Array of [PaymentLinkLineItemPatchRequestInput](../models/PaymentLinkLineItemPatchRequestInput.md#paymentlinklineitempatchrequestinput) | Replaces all line items atomically. Include an existing payment_link_line_item_id to retain that member, omit the ID to create a member, and omit a previous member to remove it. Omit line_items to leave it unchanged. Null is not accepted. minItems: `1`. |
| `max_completions` | Optional | integer or null | Send null to clear. Format: `int32`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Send null to clear. Metadata pairs plus custom fields must not exceed 44; 6 of the order's 50 pairs are reserved for Flint. Metadata keys and values, custom_field_ keys and largest possible answers, and Flint metadata must fit within 32768 UTF-8 bytes. Text and textarea answers are budgeted at four bytes per Unicode code point, including optional fields. Each checkbox answer is budgeted at five bytes (the length of false). If the combined budget is exceeded, lower max_length on some fields, use fewer custom fields, or reduce metadata. These limits apply to standard and plan links and are checked against the merged configuration on update. This operation also limits the metadata object you send, before merging: at most 50 keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. |
| `name` | Optional | string | minLength: `1`. maxLength: `255`. |
| `payments` | Optional | [PaymentLinkPaymentPatchRequestInput](../models/PaymentLinkPaymentPatchRequestInput.md#paymentlinkpaymentpatchrequestinput) | Changes to a payment link's payment settings. Send null on the payment note to clear it. |
| `promotion_config` | Optional | [CheckoutPromotionConfigRequestRequestInput](../models/CheckoutPromotionConfigRequestRequestInput.md#checkoutpromotionconfigrequestrequestinput) | Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. |
| `redirects` | Optional | [PaymentLinkRedirectsPatchRequestInput](../models/PaymentLinkRedirectsPatchRequestInput.md#paymentlinkredirectspatchrequestinput) | Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. Changes to a payment link's hosted checkout destinations. Omit a URL to leave it unchanged, or send null to clear it. |
| `sales_end_at` | Optional | string or null | RFC3339 timestamp after which the link stops starting checkouts and resolve returns PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Send null to clear it. Format: `date-time`. minLength: `1`. |
| `status` | Optional | string | Values: `"active"`, `"inactive"`. |
| `tax` | Optional | [CheckoutTaxConfigRequestRequestInput](../models/CheckoutTaxConfigRequestRequestInput.md#checkouttaxconfigrequestrequestinput) | Whether tax is collected for a checkout session or payment link. |
| `theme` | Optional | [PaymentLinkThemePatchRequestInput](../models/PaymentLinkThemePatchRequestInput.md#paymentlinkthemepatchrequestinput) | Changes to a payment link's checkout theme. Send null on a field to clear it. |
| `tip` | Optional | [CheckoutTipConfigRequestRequestInput](../models/CheckoutTipConfigRequestRequestInput.md#checkouttipconfigrequestrequestinput) | Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. |

#### Response

Returned payload: [PaymentLink](../models/PaymentLink.md#paymentlink).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->paymentLinks->update('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/paymentLinks-update.php)

