[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# shops

### shops.create

Creates a shop for the selected environment.

`POST /v1/shops`

Signature: `create(params: ShopsCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateShopRequestInput](../models/CreateShopRequest.md#createshoprequest) | The request body for: Create shop. |

Body model: [CreateShopRequestInput](../models/CreateShopRequest.md#createshoprequest).

#### shops.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFieldsRequestInput](../models/CheckoutBuyerFields.md#checkoutbuyerfields) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout buyer fields. Send null to remove every value you set in this section. |
| `checkout_session_expires_in_seconds` | Optional | integer or null | Checkout lifetime in seconds. Send null to clear it. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `custom_text` | Optional | [CheckoutCustomTextWriteConfigInput](../models/CheckoutCustomTextWriteConfigInput.md#checkoutcustomtextwriteconfiginput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout text. Send null to remove every value you set in this section. |
| `delivery_method_ids` | Optional | Array of string | The complete selection. Send an empty array to follow checkout settings. maxItems: `25`. uniqueItems: `true`. Items: Delivery method ID. minLength: `1`. pattern: `^dmet_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `description` | Optional | string or null | Shop description. Send null to clear it. minLength: `1`. maxLength: `2048`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `image` | Optional | [ImageRequestInput](../models/ImageRequest.md#imagerequest) or null | Replaced as a whole: send every field you want to keep. Cover image. Send null to remove every value you set in this section. |
| `inactive_message` | Optional | string or null | Inactive message. Send null to clear it. minLength: `1`. maxLength: `500`. |
| `inventory_routing_source` | Optional | [InventoryRoutingSourceRequestInput](../models/InventoryRoutingSourceRequest.md#inventoryroutingsourcerequest) or null | Replaced as a whole: send every field you want to keep. Inventory routing. Send null to remove every value you set in this section. |
| `legal` | Optional | [CheckoutLegalConfigRequestInput](../models/CheckoutLegalConfigRequestInput.md#checkoutlegalconfigrequestinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout legal configuration. Send null to remove every value you set in this section. |
| `listings` | Optional | Array of [ShopListingRequestInput](../models/ShopListingRequest.md#shoplistingrequest) | The complete ordered collection of owned listings. maxItems: `250`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Required | string | Shop name. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: `1`. maxLength: `255`. |
| `payments` | Optional | [CheckoutPaymentConfigRequestInput](../models/CheckoutPaymentConfigRequestInput.md#checkoutpaymentconfigrequestinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout payment configuration. Send null to remove every value you set in this section. |
| `promotion_config` | Optional | [CheckoutPromotionConfigRequestInput](../models/CheckoutPromotionConfig.md#checkoutpromotionconfig) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout promotion configuration. Send null to remove every value you set in this section. |
| `redirects` | Optional | [CheckoutRedirectsRequestInput](../models/CheckoutRedirectsRequestInput.md#checkoutredirectsrequestinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout redirects. Send null to remove every value you set in this section. |
| `status` | Optional | string | Initial shop availability. Default: `"active"`. Values: `"active"`, `"inactive"`. |
| `tax` | Optional | [CheckoutTaxConfigRequestInput](../models/CheckoutTaxConfigRequestInput.md#checkouttaxconfigrequestinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout tax configuration. Send null to remove every value you set in this section. |
| `tip` | Optional | [CheckoutTipConfigRequestInput](../models/CheckoutTipConfigRequestInput.md#checkouttipconfigrequestinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout tipping configuration. Send null to remove every value you set in this section. |

#### Response

Returned payload: [Shop](../models/Shop.md#shop).

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.shops.create({name: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/shops-create.mjs)

### shops.delete

Archives the shop and leaves it readable. Archiving closes open, unpaid checkouts. Payments already in progress can finish.

`DELETE /v1/shops/{shop_id}`

Signature: `delete(shop_id: InputValue<string>, params?: ShopsDeleteParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shop_id` | Required | string | Flint shop ID. Must be a valid ID with prefix shop_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |
| `expected_version` | Optional | integer | Shop version last read by the caller. Format: `uint64`. minimum: `1`. maximum: `9007199254740991`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [Shop](../models/Shop.md#shop).

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.shops.delete("shop_01KEZF7C005VQBPV4FZHDZPAHE", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/shops-delete.mjs)

### shops.get

Returns a shop by ID.

`GET /v1/shops/{shop_id}`

Signature: `get(shop_id: InputValue<string>, params?: ShopsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shop_id` | Required | string | Flint shop ID. Must be a valid ID with prefix shop_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [Shop](../models/Shop.md#shop).

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

```typescript
const result = await client.shops.get("shop_01KEZF7C005VQBPV4FZHDZPAHE", {}, {  });
```

[Complete runnable example](../examples/shops-get.mjs)

### shops.getListingPublic

Get public shop listing without an API key.

`GET /v1/shops/{shop_id}/listings/{shop_listing_id}/public`

Signature:

```typescript
getListingPublic(shop_id: InputValue<string>,
 shop_listing_id: InputValue<string>,
 params?: ShopsGetListingPublicParams,
 options?: _SdkWithoutIdempotency<RequestOptions<never>>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shop_id` | Required | string | Flint shop ID. Must be a valid ID with prefix shop_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |
| `shop_listing_id` | Required | string | Flint shop listing ID. Must be a valid ID with prefix shl_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |

#### Response

Returned payload: [PublicShopListing](../models/PublicShopListing.md#publicshoplisting).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 404 | NotFoundError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: none (anonymous). [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.shops.getListingPublic("shop_01KEZF7C005VQBPV4FZHDZPAHE", "shl_01KEZF7C005YZXRPWEH31ZXGKA", {}, {  });
```

[Complete runnable example](../examples/shops-getListingPublic.mjs)

### shops.getPublic

Get public shop without an API key.

`GET /v1/shops/{shop_id}/public`

Signature: `getPublic(shop_id: InputValue<string>, params?: ShopsGetPublicParams, options?: _SdkWithoutIdempotency<RequestOptions<never>>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shop_id` | Required | string | Flint shop ID. Must be a valid ID with prefix shop_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |

#### Response

Returned payload: [PublicShopResult](../models/PublicShopResult.md#publicshopresult).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 404 | NotFoundError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: none (anonymous). [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.shops.getPublic("shop_01KEZF7C005VQBPV4FZHDZPAHE", {}, {  });
```

[Complete runnable example](../examples/shops-getPublic.mjs)

### shops.list

Lists shops in the selected environment. Default order: created_at descending, then shop_id descending.

`GET /v1/shops`

Signature: `list(params?: ShopsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by status. Omitted, the list leaves out archived rows; name archived to include them. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"inactive"`, `"archived"`. Values: `"active"`, `"inactive"`, `"archived"`. |
| `external_reference_id` | Optional | string | Match the external reference ID exactly. minLength: `1`. maxLength: `255`. |
| `query` | Optional | string | Search across shop ID, name, description, and external reference ID. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as shop_01. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [ShopListResponse](../models/ShopListResponse.md#shoplistresponse).

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

```typescript
const result = await client.shops.list({}, {  });
```

[Complete runnable example](../examples/shops-list.mjs)

### shops.listListings

Returns the shop's owned listings in display order. Default order: display position (ascending); this key uniquely orders the results.

`GET /v1/shops/{shop_id}/listings`

Signature: `listListings(shop_id: InputValue<string>, params?: ShopsListListingsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shop_id` | Required | string | Flint shop ID. Must be a valid ID with prefix shop_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [ShopListingListResponse](../models/ShopListingListResponse.md#shoplistinglistresponse).

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

Pagination: `listListingsItems`, `listListingsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.shops.listListings("shop_01KEZF7C005VQBPV4FZHDZPAHE", {}, {  });
```

[Complete runnable example](../examples/shops-listListings.mjs)

### shops.resolve

Creates a hosted checkout session and its order from a cart. Reuse the same resolution context and idempotency key to retry the same cart.

`POST /v1/shops/{shop_id}/resolve`

Signature: `resolve(shop_id: InputValue<string>, params: ShopsResolveParams, options?: RequestOptions<never>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shop_id` | Required | string | Flint shop ID. Must be a valid ID with prefix shop_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |
| `body` | Required | [ResolveShopRequestInput](../models/ResolveShopRequest.md#resolveshoprequest) | A cart to turn into a hosted checkout. |

Body model: [ResolveShopRequestInput](../models/ResolveShopRequest.md#resolveshoprequest).

#### shops.resolve body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_reference` | Optional | string | Buyer or cart reference copied to the order and checkout session. minLength: `1`. maxLength: `255`. |
| `line_items` | Required | Array of [ResolveShopLineItemRequestInput](../models/ResolveShopLineItemRequest.md#resolveshoplineitemrequest) | Cart lines in order. Lines may repeat a listing. minItems: `1`. maxItems: `50`. |
| `prefill` | Optional | [PaymentLinkResolvePrefillRequestInput](../models/PaymentLinkResolvePrefillRequestInput.md#paymentlinkresolveprefillrequestinput) | Buyer-editable email prefill. Buyer-editable email prefill for payment-link checkout. It never identifies a customer. |
| `resolution_context` | Required | string | Private resolution context from the public shop read. minLength: `1`. |

#### Response

Returned payload: [ResolvedShopCheckout](../models/ResolvedShopCheckout.md#resolvedshopcheckout).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
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

Authentication modes: none (anonymous). [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.shops.resolve("shop_01KEZF7C005VQBPV4FZHDZPAHE", {line_items: [{quantity: 2, shop_listing_id: "shl_01ARZ3NDEKTSV4RRFFQ69G5FAV"}], resolution_context: "shrc_v1.example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/shops-resolve.mjs)

### shops.update

Updates a shop. Setting status to inactive closes open, unpaid checkouts. Payments already in progress can finish.

`PATCH /v1/shops/{shop_id}`

Signature: `update(shop_id: InputValue<string>, params: ShopsUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shop_id` | Required | string | Flint shop ID. Must be a valid ID with prefix shop_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [UpdateShopRequestInput](../models/UpdateShopRequest.md#updateshoprequest) | Send at least one field to update. |

Body model: [UpdateShopRequestInput](../models/UpdateShopRequest.md#updateshoprequest).

#### shops.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFieldsRequestInput](../models/CheckoutBuyerFields.md#checkoutbuyerfields) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout buyer fields. Send null to remove every value you set in this section. |
| `checkout_session_expires_in_seconds` | Optional | integer or null | Checkout lifetime in seconds. Send null to clear it. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `custom_text` | Optional | [CheckoutCustomTextWriteConfigInput](../models/CheckoutCustomTextWriteConfigInput.md#checkoutcustomtextwriteconfiginput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout text. Send null to remove every value you set in this section. |
| `delivery_method_ids` | Optional | Array of string | The complete selection. Send an empty array to follow checkout settings. maxItems: `25`. uniqueItems: `true`. Items: Delivery method ID. minLength: `1`. pattern: `^dmet_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `description` | Optional | string or null | Shop description. Send null to clear it. minLength: `1`. maxLength: `2048`. |
| `expected_version` | Optional | integer | Required when any of these fields is present: listings, delivery_method_ids. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `image` | Optional | [ImageRequestInput](../models/ImageRequest.md#imagerequest) or null | Replaced as a whole: send every field you want to keep. Cover image. Send null to remove every value you set in this section. |
| `inactive_message` | Optional | string or null | Inactive message. Send null to clear it. minLength: `1`. maxLength: `500`. |
| `inventory_routing_source` | Optional | [InventoryRoutingSourceRequestInput](../models/InventoryRoutingSourceRequest.md#inventoryroutingsourcerequest) or null | Replaced as a whole: send every field you want to keep. Inventory routing. Send null to remove every value you set in this section. |
| `legal` | Optional | [CheckoutLegalConfigRequestInput](../models/CheckoutLegalConfigRequestInput.md#checkoutlegalconfigrequestinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout legal configuration. Send null to remove every value you set in this section. |
| `listings` | Optional | Array of [ShopListingPatchRequestInput](../models/ShopListingPatchRequest.md#shoplistingpatchrequest) | The complete ordered collection of owned listings. maxItems: `250`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Merged by key. Send null for a key to remove it, or null for the map to clear caller-owned metadata. |
| `name` | Optional | string | Shop name. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: `1`. maxLength: `255`. |
| `payments` | Optional | [CheckoutPaymentConfigRequestInput](../models/CheckoutPaymentConfigRequestInput.md#checkoutpaymentconfigrequestinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout payment configuration. Send null to remove every value you set in this section. |
| `promotion_config` | Optional | [CheckoutPromotionConfigRequestInput](../models/CheckoutPromotionConfig.md#checkoutpromotionconfig) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout promotion configuration. Send null to remove every value you set in this section. |
| `redirects` | Optional | [CheckoutRedirectsRequestInput](../models/CheckoutRedirectsRequestInput.md#checkoutredirectsrequestinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout redirects. Send null to remove every value you set in this section. |
| `status` | Optional | string | Setting inactive closes open, unpaid checkouts. Payments in progress can finish. Values: `"active"`, `"inactive"`. |
| `tax` | Optional | [CheckoutTaxConfigRequestInput](../models/CheckoutTaxConfigRequestInput.md#checkouttaxconfigrequestinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout tax configuration. Send null to remove every value you set in this section. |
| `tip` | Optional | [CheckoutTipConfigRequestInput](../models/CheckoutTipConfigRequestInput.md#checkouttipconfigrequestinput) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout tipping configuration. Send null to remove every value you set in this section. |

#### Response

Returned payload: [Shop](../models/Shop.md#shop).

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

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.shops.update("shop_01ARZ3NDEKTSV4RRFFQ69G5FAV", {description: "Updated shop description"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/shops-update.mjs)

