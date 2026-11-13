[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# paymentLinks

### paymentLinks.create

Creates a payment link for the authenticated merchant. Line items may use fixed prices, buyer-adjustable amounts, and buyer-adjustable quantities.

`POST /v1/payment-links`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreatePaymentLinkRequestInput](../models/CreatePaymentLinkRequestInput.md#createpaymentlinkrequestinput) | The request body for: Create payment link. |

Body model: [CreatePaymentLinkRequestInput](../models/CreatePaymentLinkRequestInput.md#createpaymentlinkrequestinput).

#### paymentLinks.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFieldsRequestInput](../models/CheckoutBuyerFieldsRequestInput.md#checkoutbuyerfieldsrequestinput) | What checkout asks the buyer for. Each field you leave out uses your checkout settings. |
| `checkout_session_expires_in_seconds` | Optional | integer | Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `custom_fields` | Optional | Array of [PaymentLinkCustomFieldRequestInput](../models/PaymentLinkCustomFieldRequestInput.md#paymentlinkcustomfieldrequestinput) | Questions buyers answer before paying. Answers are recorded on the order and checkout session in `custom_field_answers`. maxItems: `20`. |
| `custom_text` | Optional | [PaymentLinkCustomTextConfigInput](../models/PaymentLinkCustomTextConfigInput.md#paymentlinkcustomtextconfiginput) | Custom text for checkouts started from this link. Custom text shown on a payment link's checkout, such as the order summary message and shipping address label. |
| `delivery_method_ids` | Optional | Array of string | Complete delivery method selection for the link. A link without delivery methods offers settings.checkout.default_delivery_method_ids when its order has items to deliver. Send an empty array to clear the selection. Omit it on PATCH to leave the selection unchanged. Null and duplicate IDs are not accepted. Create, activation, and edits to items, delivery methods, or inventory routing require explicit methods or checkout defaults to cover the items' delivery profiles; otherwise ACTION_NOT_ALLOWED with reason configuration_required is returned. maxItems: `25`. uniqueItems: `true`. Items: minLength: `1`. |
| `description` | Optional | string | Text about what the link sells, returned to buyers when they open it. minLength: `1`. maxLength: `2048`. |
| `donation_max_amount_money` | Optional | [MoneyValueInput](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseFaceValueMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvariantgiftcardpurchasefacevaluemoney) | Largest amount a buyer can give on a donation link. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `donation_min_amount_money` | Optional | [MoneyValueInput](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseFaceValueMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvariantgiftcardpurchasefacevaluemoney) | Smallest amount a buyer can give on a donation link. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `donation_suggested_amount_money_options` | Optional | Array of [MoneyValueInput](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseFaceValueMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvariantgiftcardpurchasefacevaluemoney) | Amounts a donation link offers as one-tap choices. |
| `event_config` | Optional | [PaymentLinkEventConfigRequestInput](../models/PaymentLinkEventConfigRequestInput.md#paymentlinkeventconfigrequestinput) | Event details for an `event` link: when and where it takes place and how many tickets it sells. Event settings you supply when creating an event payment link. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `image` | Optional | [ImageRequestInput](../models/ImageRequestInput.md#imagerequestinput) | Image shown to buyers with the link. An image you supply by `source_url`, with optional `alt` text and external reference. |
| `inactive_message` | Optional | string | Message to show the buyer when the link is inactive. minLength: `1`. maxLength: `500`. |
| `inventory_routing_source` | Optional | [InventoryRoutingSourceRequestInput](../models/InventoryRoutingSourceRequestInput.md#inventoryroutingsourcerequestinput) | Routing source for tracked demand. Create, activation, and sellability edits require at least one active routing location with inventory_allocation_enabled; temporary stock shortages do not prevent these writes. Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`. |
| `legal` | Optional | [PaymentLinkLegalConfigInput](../models/PaymentLinkLegalConfigInput.md#paymentlinklegalconfiginput) | The terms and policy links checkouts started from this link show the buyer. Legal links on a payment link: contract, refund policy, shipping policy, and terms of service URLs, and whether buyers must accept the terms. |
| `line_items` | Optional | Array of [PaymentLinkLineItemRequestInput](../models/PaymentLinkLineItemRequestInput.md#paymentlinklineitemrequestinput) | What the link sells. |
| `max_completions` | Optional | integer | Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`. Format: `int32`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. At most 44 pairs, because Flint reserves 6 of the order's 50 metadata pairs. Metadata keys and values plus Flint's metadata must fit within 32768 UTF-8 bytes. Custom fields don't count toward either limit. These limits apply to standard and plan links and are checked against the merged configuration on update. maxProperties: `44`. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Required | string | Name of the payment link. minLength: `1`. maxLength: `255`. |
| `payment_link_type` | Optional | string | Payment link type. Omit to use standard. Explicit values must be standard, donation, or event; empty or padded values are invalid. Default: `"standard"`. Values: `"standard"`, `"donation"`, `"event"`. |
| `payments` | Optional | [PaymentLinkPaymentConfigInput](../models/PaymentLinkPaymentConfigInput.md#paymentlinkpaymentconfiginput) | Payment options for checkouts started from this link. Payment settings on a payment link: the enabled payment options and a note shown with payment. |
| `promotion_config` | Optional | [CheckoutPromotionConfigRequestInput](../models/CheckoutPromotionConfigRequestInput.md#checkoutpromotionconfigrequestinput) | Whether automatic promotions apply to checkouts started from this link and whether buyers can enter promotion codes. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. |
| `redirects` | Optional | [CheckoutRedirectsRequestInput](../models/CheckoutRedirectsRequestInput.md#checkoutredirectsrequestinput) | Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url. |
| `sales_end_at` | Optional | string | RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Format: `date-time`. minLength: `1`. |
| `subscription_plan_id` | Optional | string | minLength: `1`. |
| `tax` | Optional | [CheckoutTaxConfigRequestInput](../models/CheckoutTaxConfigRequestInput.md#checkouttaxconfigrequestinput) | Tax settings for checkouts started from this link. Whether tax is collected for a checkout session or payment link. |
| `theme` | Optional | [PaymentLinkThemeConfigInput](../models/PaymentLinkThemeConfigInput.md#paymentlinkthemeconfiginput) | The title and colors for checkouts started from this link, over your branding settings. Theme settings for a payment link's checkout: accent color, primary color, and title. |
| `tip` | Optional | [CheckoutTipConfigRequestInput](../models/CheckoutTipConfigRequestInput.md#checkouttipconfigrequestinput) | Tip options for checkouts started from this link. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. |

#### Response

Returned payload: [PaymentLink](../models/PaymentLink.md#paymentlink).

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
| `payment_link_id` | Required | string | Flint payment link ID. |
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: sales_summary, subscription_plan. sales_summary requires checkouts.payment_links.read and is also available to dashboard sessions. subscription_plan additionally requires commerce.subscription_plans.read. sales_summary is supported only on this get route. Limits: at most 10 unique expand paths per request. Items values: `"sales_summary"`, `"subscription_plan"`. Values: `"sales_summary"`, `"subscription_plan"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [PaymentLink](../models/PaymentLink.md#paymentlink).

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
$result = $client->paymentLinks->get('pl_01KEZF7C007WDMA5P9BPZ8J2AM', [], new RequestOptions());
```

[Complete runnable example](../examples/paymentLinks-get.php)

### paymentLinks.getPublic

Returns the sanitized buyer-facing payment-link snapshot and a private resolution context for this browser operation.

`GET /v1/payment-links/{payment_link_id}/public`

Signature: `getPublic(string|Model $payment_link_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_link_id` | Required | string | Flint payment link ID. |

#### Response

Returned payload: [PublicPaymentLinkResult](../models/PublicPaymentLinkResult.md#publicpaymentlinkresult).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: none (anonymous). [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->paymentLinks->getPublic('pl_01KEZF7C007WDMA5P9BPZ8J2AM', [], new RequestOptions());
```

[Complete runnable example](../examples/paymentLinks-getPublic.php)

### paymentLinks.list

Returns a paginated list of payment links for the authenticated merchant. Default order: created_at descending, then payment_link_id descending.

`GET /v1/payment-links`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by payment link status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"inactive"`. Values: `"active"`, `"inactive"`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `query` | Optional | string | Search across payment link ID, external reference ID, name, and description. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as pl_01. |
| `payment_link_type` | Optional | Array of string or string | Filter by payment link type. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"standard"`, `"donation"`, `"event"`. Values: `"standard"`, `"donation"`, `"event"`. |
| `has_subscription_plan` | Optional | boolean | Filter by whether the payment link references a subscription plan. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by payment_link_id. Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: sales_summary, subscription_plan. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Items values: `"sales_summary"`, `"subscription_plan"`. Values: `"sales_summary"`, `"subscription_plan"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [PaymentLinkListResponse](../models/PaymentLinkListResponse.md#paymentlinklistresponse).

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
$result = $client->paymentLinks->list([], new RequestOptions());
```

[Complete runnable example](../examples/paymentLinks-list.php)

### paymentLinks.resolve

Creates a buyer checkout session from an active payment link. Catalog-backed modifier availability is frozen onto the checkout session and selected modifiers are resolved onto the backing order. For a retry after an uncertain response, reuse the original idempotency key and resolution_context.

`POST /v1/payment-links/{payment_link_id}/resolve`

Signature: `resolve(string|Model $payment_link_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_link_id` | Required | string | Flint payment link ID. |
| `body` | Required | [ResolvePaymentLinkRequestInput](../models/ResolvePaymentLinkRequestInput.md#resolvepaymentlinkrequestinput) | The request body for: Resolve payment link. |

Body model: [ResolvePaymentLinkRequestInput](../models/ResolvePaymentLinkRequestInput.md#resolvepaymentlinkrequestinput).

#### paymentLinks.resolve body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attendee_names` | Optional | Array of string | One attendee name per ticket on an event payment link, in line_items order: each tier's tickets in turn, skipping tiers with quantity 0. The count must equal the tickets being bought. Required when event_config.collect_attendee_names is true, and optional otherwise. Flint trims each name, which must then be 1 to 200 characters. Duplicate names are allowed. Flint copies the names onto the tickets when the order is paid, as each ticket's attendee_name, and never stores them in metadata. minItems: `1`. Items: minLength: `1`. |
| `client_reference` | Optional | string | Your reference for the buyer or cart this checkout is for, such as your user ID. It cannot contain the NUL character. Copied to the checkout session and order, preserving all characters exactly. Anyone with the link can change it, so do not use it as proof of who paid. minLength: `1`. maxLength: `255`. |
| `custom_field_values` | Optional | Map of string | Buyer answers keyed by custom field key. Checkbox answers must be exactly true or false as strings, and a required checkbox must be true. Flint records the answers on the order and checkout session in `custom_field_answers`; omitted and empty answers to optional fields are not recorded. Map values: minLength: `1`. |
| `modifiers` | Optional | Map of [ResolvePaymentLinkLineItemModifiersInput](../models/ResolvePaymentLinkLineItemModifiersInput.md#resolvepaymentlinklineitemmodifiersinput) | Modifier choices keyed by line item key, for catalog items. |
| `prefill` | Optional | [PaymentLinkResolvePrefillRequestInput](../models/PaymentLinkResolvePrefillRequestInput.md#paymentlinkresolveprefillrequestinput) | Email to fill in on the next checkout step. The buyer can change it; it never links an existing customer. Buyer-editable email prefill for payment-link checkout. It never identifies a customer. |
| `quantity_overrides` | Optional | Map of integer | Quantities keyed by line item key (line_items[].key), each within that item's min_quantity and max_quantity. Event tiers accept 0. Whole-number quantities; fractional quantities are not supported. Map values: Whole-number quantity value; fractional quantities are not supported. Format: `int32`. |
| `resolution_context` | Required | string | Private resolution context returned by GET /v1/payment-links/{payment_link_id}/public. Send it unchanged when resolving the same link; read the link again after checkout_start_due_at. minLength: `1`. |
| `unit_price_overrides` | Optional | Map of [MoneyValueInput](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseFaceValueMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvariantgiftcardpurchasefacevaluemoney) | Prices keyed by line item key, for items with allow_unit_price_adjustment, between min_unit_price_money and max_unit_price_money. A donation link has one line item, keyed donation. |
| `variant_selections` | Optional | Map of string | Variant IDs keyed by line item key (line_items[].key), for lines with variant_ids. Each selection must be offered by that line and priced in its current currency. Omit a key to use default_variant_id; a line without a default requires a selection. Null is not accepted. Map values: minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [BuyerCheckoutSessionWithSecret](../models/BuyerCheckoutSessionWithSecret.md#buyercheckoutsessionwithsecret).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
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

Authentication modes: none (anonymous). [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->paymentLinks->resolve('pl_01KEZF7C007WDMA5P9BPZ8J2AM', [
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
| `payment_link_id` | Required | string | Flint payment link ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [UpdatePaymentLinkRequestInput](../models/UpdatePaymentLinkRequestInput.md#updatepaymentlinkrequestinput) | The request body for: Update payment link. minProperties: `1`. |

Body model: [UpdatePaymentLinkRequestInput](../models/UpdatePaymentLinkRequestInput.md#updatepaymentlinkrequestinput).

#### paymentLinks.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFieldsRequestInput](../models/CheckoutBuyerFieldsRequestInput.md#checkoutbuyerfieldsrequestinput) | What checkout asks the buyer for. Each field you leave out uses your checkout settings. |
| `checkout_session_expires_in_seconds` | Optional | integer | Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `custom_fields` | Optional | Array of [PaymentLinkCustomFieldPatchRequestInput](../models/PaymentLinkCustomFieldPatchRequestInput.md#paymentlinkcustomfieldpatchrequestinput) | Replaces all custom fields atomically. Include an existing payment_link_custom_field_id to retain that member, omit the ID to create a member, and omit a previous member to remove it. Send an empty array to clear all custom fields, omit custom_fields to leave it unchanged, and do not send null. maxItems: `20`. |
| `custom_text` | Optional | [PaymentLinkCustomTextPatchRequestInput](../models/PaymentLinkCustomTextPatchRequestInput.md#paymentlinkcustomtextpatchrequestinput) | Custom text for checkouts started from this link. Changes to a payment link's custom checkout text. Send null to clear a field. |
| `delivery_method_ids` | Optional | Array of string | Complete delivery method selection for the link. A link without delivery methods offers settings.checkout.default_delivery_method_ids when its order has items to deliver. Send an empty array to clear the selection. Omit it on PATCH to leave the selection unchanged. Null and duplicate IDs are not accepted. Create, activation, and edits to items, delivery methods, or inventory routing require explicit methods or checkout defaults to cover the items' delivery profiles; otherwise ACTION_NOT_ALLOWED with reason configuration_required is returned. maxItems: `25`. uniqueItems: `true`. Items: minLength: `1`. |
| `description` | Optional | string or null | Text about what the link sells, returned to buyers when they open it. Send null to clear. minLength: `1`. maxLength: `2048`. |
| `donation_max_amount_money` | Optional | [MoneyValueInput](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseFaceValueMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvariantgiftcardpurchasefacevaluemoney) or null | Maximum donation amount. Send null to clear the maximum. Send null to clear. |
| `donation_min_amount_money` | Optional | [MoneyValueInput](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseFaceValueMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvariantgiftcardpurchasefacevaluemoney) or null | Minimum donation amount. Send null to clear the minimum. Send null to clear. |
| `donation_suggested_amount_money_options` | Optional | Array of [MoneyValueInput](../models/DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantGiftCardPurchaseFaceValueMoney.md#deliverypreviewresponsedatadeliveryoptionslineitemsitemvariantgiftcardpurchasefacevaluemoney) | Suggested donation amounts. Send an empty array to clear suggested amounts. |
| `event_config` | Optional | [PaymentLinkEventConfigPatchRequestInput](../models/PaymentLinkEventConfigPatchRequestInput.md#paymentlinkeventconfigpatchrequestinput) | Event configuration patch. Omit to leave unchanged. The whole configuration cannot be cleared; null is not accepted. Changes to an event payment link's settings. Send null on a nullable field to clear it. |
| `expected_version` | Optional | integer | Payment link version last read by the caller. Required when line_items, custom_fields, or delivery_method_ids is present. Required when any of these fields is present: line_items, custom_fields, delivery_method_ids. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear. minLength: `1`. maxLength: `255`. |
| `image` | Optional | [ImageRequestInput](../models/ImageRequestInput.md#imagerequestinput) or null | Image shown to buyers with the link. Send null to clear. |
| `inactive_message` | Optional | string or null | Message to show the buyer when the link is inactive. Send null to clear. minLength: `1`. maxLength: `500`. |
| `inventory_routing_source` | Optional | [InventoryRoutingSourceRequestInput](../models/InventoryRoutingSourceRequestInput.md#inventoryroutingsourcerequestinput) | Routing source for tracked demand. Create, activation, and sellability edits require at least one active routing location with inventory_allocation_enabled; temporary stock shortages do not prevent these writes. Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`. |
| `legal` | Optional | [PaymentLinkLegalPatchRequestInput](../models/PaymentLinkLegalPatchRequestInput.md#paymentlinklegalpatchrequestinput) | The terms and policy links checkouts started from this link show the buyer. Changes to a payment link's legal links and terms setting. Send null on a URL to clear it. |
| `line_items` | Optional | Array of [PaymentLinkLineItemPatchRequestInput](../models/PaymentLinkLineItemPatchRequestInput.md#paymentlinklineitempatchrequestinput) | Replaces all line items atomically. Include an existing payment_link_line_item_id to retain that member, omit the ID to create a member, and omit a previous member to remove it. Omit line_items to leave it unchanged. Null is not accepted. minItems: `1`. |
| `max_completions` | Optional | integer or null | Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`. Send null to clear. Format: `int32`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Send null to clear. At most 44 pairs, because Flint reserves 6 of the order's 50 metadata pairs. Metadata keys and values plus Flint's metadata must fit within 32768 UTF-8 bytes. Custom fields don't count toward either limit. These limits apply to standard and plan links and are checked against the merged configuration on update. This operation also limits the metadata object you send, before merging: at most 50 keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. |
| `name` | Optional | string | Name of the payment link. minLength: `1`. maxLength: `255`. |
| `payments` | Optional | [PaymentLinkPaymentPatchRequestInput](../models/PaymentLinkPaymentPatchRequestInput.md#paymentlinkpaymentpatchrequestinput) | Payment options for checkouts started from this link. Changes to a payment link's payment settings. Send null on the payment note to clear it. |
| `promotion_config` | Optional | [CheckoutPromotionConfigRequestInput](../models/CheckoutPromotionConfigRequestInput.md#checkoutpromotionconfigrequestinput) | Whether automatic promotions apply to checkouts started from this link and whether buyers can enter promotion codes. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. |
| `redirects` | Optional | [PaymentLinkRedirectsPatchRequestInput](../models/PaymentLinkRedirectsPatchRequestInput.md#paymentlinkredirectspatchrequestinput) | Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. Changes to a payment link's hosted checkout destinations. Omit a URL to leave it unchanged, or send null to clear it. |
| `sales_end_at` | Optional | string or null | RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Send null to clear it. Format: `date-time`. minLength: `1`. |
| `status` | Optional | string | Whether the link can start new checkouts. Values: `"active"`, `"inactive"`. |
| `tax` | Optional | [CheckoutTaxConfigRequestInput](../models/CheckoutTaxConfigRequestInput.md#checkouttaxconfigrequestinput) | Tax settings for checkouts started from this link. Whether tax is collected for a checkout session or payment link. |
| `theme` | Optional | [PaymentLinkThemePatchRequestInput](../models/PaymentLinkThemePatchRequestInput.md#paymentlinkthemepatchrequestinput) | The title and colors for checkouts started from this link, over your branding settings. Changes to a payment link's checkout theme. Send null on a field to clear it. |
| `tip` | Optional | [CheckoutTipConfigRequestInput](../models/CheckoutTipConfigRequestInput.md#checkouttipconfigrequestinput) | Tip options for checkouts started from this link. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. |

#### Response

Returned payload: [PaymentLink](../models/PaymentLink.md#paymentlink).

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

$result = $client->paymentLinks->update('pl_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'description' => 'Updated description',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/paymentLinks-update.php)

