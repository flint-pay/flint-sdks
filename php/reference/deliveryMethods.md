[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# deliveryMethods

### deliveryMethods.create

Delivery methods combine eligibility, pricing, schedules, estimates, tax treatment, and execution behavior. Creation publishes immutable revision 1. Omit status to start inactive.

`POST /v1/delivery-methods`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [CreateDeliveryMethodRequestInput](../models/CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput) | The request body for: Create delivery method. |

Body model: [CreateDeliveryMethodRequestInput](../models/CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput).

#### deliveryMethods.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryMethodConfigurationCreateRequestInput](../models/DeliveryMethodConfigurationCreateRequestInput.md#deliverymethodconfigurationcreaterequestinput) | Settings that decide where this method is offered, how it is priced, and what the buyer sees. Changing them publishes a new revision. The configuration you supply when creating a delivery method. `origin` and `pricing` are required. |
| `description` | Optional | string | Buyer-visible description of the method. minLength: `1`. |
| `display_position` | Optional | integer | Position in which this method displays among the others. Lower values display first. Format: `int32`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Required | string | Name of the method. Buyers see it as the option name at checkout. minLength: `1`. |
| `recommendation_priority` | Optional | integer | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Format: `int32`. |
| `status` | Optional | string | Whether this method is available for new delivery quotes. Defaults to inactive. Default: `"inactive"`. Values: `"inactive"`, `"active"`. |
| `type` | Required | string | Delivery type of the method. It cannot change after you create the method. Values: `"shipment"`, `"local_delivery"`, `"pickup"`. |

#### deliveryMethods.create with `type: "shipment"`

The `shipment` variant of `CreateDeliveryMethodRequest`.

Body model: [CreateDeliveryMethodRequestShipmentInput](../models/CreateDeliveryMethodRequestShipmentInput.md#createdeliverymethodrequestshipmentinput).

#### deliveryMethods.create with `type: "local_delivery"`

The `local_delivery` variant of `CreateDeliveryMethodRequest`.

Body model: [CreateDeliveryMethodRequestLocalDeliveryInput](../models/CreateDeliveryMethodRequestLocalDeliveryInput.md#createdeliverymethodrequestlocaldeliveryinput).

#### deliveryMethods.create with `type: "pickup"`

The `pickup` variant of `CreateDeliveryMethodRequest`.

Body model: [CreateDeliveryMethodRequestPickupInput](../models/CreateDeliveryMethodRequestPickupInput.md#createdeliverymethodrequestpickupinput).

#### Response

Returned payload: [DeliveryMethod](../models/DeliveryMethod.md#deliverymethod).

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

$result = $client->deliveryMethods->create([
  'configuration' => (object) [
    'minimum_option_lifetime_seconds' => 120,
    'origin' => (object) [
      'location_id' => 'loc_01K1P6G4M7H2N8Q9R3S5T6V7WX',
      'type' => 'fixed_location',
    ],
    'pricing' => (object) [
      'calculated' => (object) [],
      'type' => 'calculated',
    ],
  ],
  'name' => 'Standard shipping',
  'type' => 'shipment',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/deliveryMethods-create.php)

### deliveryMethods.delete

Retires the delivery method after checking current dependencies. The retired resource remains available by ID for historical records. Deleting an already archived resource returns it without changing its version or repeating effects. A method referenced by checkout.default_delivery_method_ids at merchant scope or by delivery_method_ids on an active or inactive payment link cannot be archived; the request returns 409 RESOURCE_IN_USE with the blocking references. Remove the method from checkout.default_delivery_method_ids with PATCH /v1/settings or from the link's delivery_method_ids with PATCH /v1/payment-links/{payment_link_id}. Open checkout sessions keep their pinned revision and do not block retirement.

`DELETE /v1/delivery-methods/{delivery_method_id}`

Signature: `delete(string|Model $delivery_method_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Required | string | Flint delivery method ID. |
| `expected_version` | Optional | integer | Optional current resource version. The delete is rejected if the resource changed after this version was read. Format: `uint64`. minimum: `1`. maximum: `9007199254740991`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [DeliveryMethod](../models/DeliveryMethod.md#deliverymethod).

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

$result = $client->deliveryMethods->delete('dmet_01KEZF7C00YSG3X2D1TZJ36TM0', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/deliveryMethods-delete.php)

### deliveryMethods.get

Returns the current revision and lifecycle state for one delivery method.

`GET /v1/delivery-methods/{delivery_method_id}`

Signature: `get(string|Model $delivery_method_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Required | string | Flint delivery method ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [DeliveryMethod](../models/DeliveryMethod.md#deliverymethod).

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
$result = $client->deliveryMethods->get('dmet_01KEZF7C00YSG3X2D1TZJ36TM0', [], new RequestOptions());
```

[Complete runnable example](../examples/deliveryMethods-get.php)

### deliveryMethods.list

Returns delivery methods in a stable, cursor-paginated order. Archived resources are excluded by default. Default order: created_at ascending, then delivery_method_id ascending.

`GET /v1/delivery-methods`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `query` | Optional | string | Search across delivery_method_id, name, description, and external_reference_id. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as dmet_01. maxLength: `255`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `status` | Optional | Array of string or string | Filter by status. Omitted, the list leaves out archived rows; name archived to include them. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"inactive"`, `"archived"`. Values: `"active"`, `"inactive"`, `"archived"`. |
| `type` | Optional | Array of string or string | Filter by method type. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"shipment"`, `"local_delivery"`, `"pickup"`. Values: `"shipment"`, `"local_delivery"`, `"pickup"`. |
| `delivery_zone_id` | Optional | string | Filter by referenced delivery zone. pattern: `^dzone_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `delivery_location_set_id` | Optional | string | Filter by referenced delivery location set. pattern: `^dls_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `delivery_rate_callback_id` | Optional | string | Filter by referenced callback endpoint. pattern: `^dcb_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `location_id` | Optional | string | Filter by referenced Location. pattern: `^loc_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [DeliveryMethodListResponse](../models/DeliveryMethodListResponse.md#deliverymethodlistresponse).

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

Pagination: `listItems`, `listPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->deliveryMethods->list([], new RequestOptions());
```

[Complete runnable example](../examples/deliveryMethods-list.php)

### deliveryMethods.update

Sparsely updates mutable fields. A request that carries configuration, name, description, display_position, or recommendation_priority publishes a new immutable revision, even when its values are unchanged, and requires expected_version. Other fields, such as status, metadata, and external_reference_id, advance version and keep the current revision, so they never replace a revoked revision. Archived resources can't be changed; create a new resource instead. A method referenced by checkout.default_delivery_method_ids at merchant scope or by delivery_method_ids on an active or inactive payment link cannot be set inactive; the request returns 409 RESOURCE_IN_USE with the blocking references. Remove the method from checkout.default_delivery_method_ids with PATCH /v1/settings or from the link's delivery_method_ids with PATCH /v1/payment-links/{payment_link_id}.

`PATCH /v1/delivery-methods/{delivery_method_id}`

Signature: `update(string|Model $delivery_method_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Required | string | Flint delivery method ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [UpdateDeliveryMethodRequestInput](../models/UpdateDeliveryMethodRequestInput.md#updatedeliverymethodrequestinput) | The request body for: Update delivery method. minProperties: `1`. |

Body model: [UpdateDeliveryMethodRequestInput](../models/UpdateDeliveryMethodRequestInput.md#updatedeliverymethodrequestinput).

#### deliveryMethods.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryMethodConfigurationPatchRequestInput](../models/DeliveryMethodConfigurationPatchRequestInput.md#deliverymethodconfigurationpatchrequestinput) | Patch object: fields you send are applied, fields you omit are unchanged. Each key you send replaces that part of the configuration as a whole, so send every field you want to keep in pricing, origin, eligibility, and the other objects. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. Patch object: fields you send are applied, fields you omit are unchanged. Each key you send replaces that part of the configuration as a whole, so send every field you want to keep in pricing, origin, eligibility, and the other objects. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. minProperties: `1`. |
| `description` | Optional | string or null | Delivery method description. Send null to clear it. minLength: `1`. |
| `display_position` | Optional | integer | Position in which this method displays among the others. Lower values display first. Format: `int32`. |
| `expected_version` | Optional | integer | Current resource version. Required when the request carries a revision field: configuration, name, description, display_position, recommendation_priority. A revision field publishes a new immutable revision even when its value is unchanged. Optional for other fields, which advance version and keep the current revision. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | Name of the method. Buyers see it as the option name at checkout. minLength: `1`. |
| `recommendation_priority` | Optional | integer or null | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Send null to clear it. Format: `int32`. |
| `status` | Optional | string | Whether the method is in use. Send it alone, with `expected_version`; combining it with another field returns `400 INVALID_REQUEST` with the detail `NOT_ALLOWED` on `status`. Values: `"inactive"`, `"active"`. |

#### deliveryMethods.update: variant 1



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryMethodConfigurationPatchRequestInput](../models/DeliveryMethodConfigurationPatchRequestInput.md#deliverymethodconfigurationpatchrequestinput) | Patch object: fields you send are applied, fields you omit are unchanged. Each key you send replaces that part of the configuration as a whole, so send every field you want to keep in pricing, origin, eligibility, and the other objects. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. Patch object: fields you send are applied, fields you omit are unchanged. Each key you send replaces that part of the configuration as a whole, so send every field you want to keep in pricing, origin, eligibility, and the other objects. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. minProperties: `1`. |
| `description` | Optional | string or null | Delivery method description. Send null to clear it. minLength: `1`. |
| `display_position` | Optional | integer | Position in which this method displays among the others. Lower values display first. Format: `int32`. |
| `expected_version` | Optional | integer | Current resource version. Required when the request carries a revision field: configuration, name, description, display_position, recommendation_priority. A revision field publishes a new immutable revision even when its value is unchanged. Optional for other fields, which advance version and keep the current revision. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Required | string | Name of the method. Buyers see it as the option name at checkout. minLength: `1`. |
| `recommendation_priority` | Optional | integer or null | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Send null to clear it. Format: `int32`. |
| `status` | Optional | string | Whether the method is in use. Send it alone, with `expected_version`; combining it with another field returns `400 INVALID_REQUEST` with the detail `NOT_ALLOWED` on `status`. Values: `"inactive"`, `"active"`. |

#### deliveryMethods.update: variant 2



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryMethodConfigurationPatchRequestInput](../models/DeliveryMethodConfigurationPatchRequestInput.md#deliverymethodconfigurationpatchrequestinput) | Patch object: fields you send are applied, fields you omit are unchanged. Each key you send replaces that part of the configuration as a whole, so send every field you want to keep in pricing, origin, eligibility, and the other objects. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. Patch object: fields you send are applied, fields you omit are unchanged. Each key you send replaces that part of the configuration as a whole, so send every field you want to keep in pricing, origin, eligibility, and the other objects. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. minProperties: `1`. |
| `description` | Optional | string or null | Delivery method description. Send null to clear it. minLength: `1`. |
| `display_position` | Optional | integer | Position in which this method displays among the others. Lower values display first. Format: `int32`. |
| `expected_version` | Optional | integer | Current resource version. Required when the request carries a revision field: configuration, name, description, display_position, recommendation_priority. A revision field publishes a new immutable revision even when its value is unchanged. Optional for other fields, which advance version and keep the current revision. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Required | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | Name of the method. Buyers see it as the option name at checkout. minLength: `1`. |
| `recommendation_priority` | Optional | integer or null | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Send null to clear it. Format: `int32`. |
| `status` | Optional | string | Whether the method is in use. Send it alone, with `expected_version`; combining it with another field returns `400 INVALID_REQUEST` with the detail `NOT_ALLOWED` on `status`. Values: `"inactive"`, `"active"`. |

#### deliveryMethods.update: variant 3



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryMethodConfigurationPatchRequestInput](../models/DeliveryMethodConfigurationPatchRequestInput.md#deliverymethodconfigurationpatchrequestinput) | Patch object: fields you send are applied, fields you omit are unchanged. Each key you send replaces that part of the configuration as a whole, so send every field you want to keep in pricing, origin, eligibility, and the other objects. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. Patch object: fields you send are applied, fields you omit are unchanged. Each key you send replaces that part of the configuration as a whole, so send every field you want to keep in pricing, origin, eligibility, and the other objects. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. minProperties: `1`. |
| `description` | Optional | string or null | Delivery method description. Send null to clear it. minLength: `1`. |
| `display_position` | Optional | integer | Position in which this method displays among the others. Lower values display first. Format: `int32`. |
| `expected_version` | Optional | integer | Current resource version. Required when the request carries a revision field: configuration, name, description, display_position, recommendation_priority. A revision field publishes a new immutable revision even when its value is unchanged. Optional for other fields, which advance version and keep the current revision. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | Name of the method. Buyers see it as the option name at checkout. minLength: `1`. |
| `recommendation_priority` | Optional | integer or null | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Send null to clear it. Format: `int32`. |
| `status` | Optional | string | Whether the method is in use. Send it alone, with `expected_version`; combining it with another field returns `400 INVALID_REQUEST` with the detail `NOT_ALLOWED` on `status`. Values: `"inactive"`, `"active"`. |

#### deliveryMethods.update: variant 4



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryMethodConfigurationPatchRequestInput](../models/DeliveryMethodConfigurationPatchRequestInput.md#deliverymethodconfigurationpatchrequestinput) | Patch object: fields you send are applied, fields you omit are unchanged. Each key you send replaces that part of the configuration as a whole, so send every field you want to keep in pricing, origin, eligibility, and the other objects. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. Patch object: fields you send are applied, fields you omit are unchanged. Each key you send replaces that part of the configuration as a whole, so send every field you want to keep in pricing, origin, eligibility, and the other objects. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. minProperties: `1`. |
| `description` | Optional | string or null | Delivery method description. Send null to clear it. minLength: `1`. |
| `display_position` | Optional | integer | Position in which this method displays among the others. Lower values display first. Format: `int32`. |
| `expected_version` | Optional | integer | Current resource version. Required when the request carries a revision field: configuration, name, description, display_position, recommendation_priority. A revision field publishes a new immutable revision even when its value is unchanged. Optional for other fields, which advance version and keep the current revision. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Required | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | Name of the method. Buyers see it as the option name at checkout. minLength: `1`. |
| `recommendation_priority` | Optional | integer or null | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Send null to clear it. Format: `int32`. |
| `status` | Optional | string | Whether the method is in use. Send it alone, with `expected_version`; combining it with another field returns `400 INVALID_REQUEST` with the detail `NOT_ALLOWED` on `status`. Values: `"inactive"`, `"active"`. |

#### deliveryMethods.update: variant 5



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryMethodConfigurationPatchRequestInput](../models/DeliveryMethodConfigurationPatchRequestInput.md#deliverymethodconfigurationpatchrequestinput) | Patch object: fields you send are applied, fields you omit are unchanged. Each key you send replaces that part of the configuration as a whole, so send every field you want to keep in pricing, origin, eligibility, and the other objects. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. Patch object: fields you send are applied, fields you omit are unchanged. Each key you send replaces that part of the configuration as a whole, so send every field you want to keep in pricing, origin, eligibility, and the other objects. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. minProperties: `1`. |
| `description` | Required | string or null | Delivery method description. Send null to clear it. minLength: `1`. |
| `display_position` | Optional | integer | Position in which this method displays among the others. Lower values display first. Format: `int32`. |
| `expected_version` | Optional | integer | Current resource version. Required when the request carries a revision field: configuration, name, description, display_position, recommendation_priority. A revision field publishes a new immutable revision even when its value is unchanged. Optional for other fields, which advance version and keep the current revision. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | Name of the method. Buyers see it as the option name at checkout. minLength: `1`. |
| `recommendation_priority` | Optional | integer or null | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Send null to clear it. Format: `int32`. |
| `status` | Optional | string | Whether the method is in use. Send it alone, with `expected_version`; combining it with another field returns `400 INVALID_REQUEST` with the detail `NOT_ALLOWED` on `status`. Values: `"inactive"`, `"active"`. |

#### deliveryMethods.update: variant 6



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryMethodConfigurationPatchRequestInput](../models/DeliveryMethodConfigurationPatchRequestInput.md#deliverymethodconfigurationpatchrequestinput) | Patch object: fields you send are applied, fields you omit are unchanged. Each key you send replaces that part of the configuration as a whole, so send every field you want to keep in pricing, origin, eligibility, and the other objects. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. Patch object: fields you send are applied, fields you omit are unchanged. Each key you send replaces that part of the configuration as a whole, so send every field you want to keep in pricing, origin, eligibility, and the other objects. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. minProperties: `1`. |
| `description` | Optional | string or null | Delivery method description. Send null to clear it. minLength: `1`. |
| `display_position` | Required | integer | Position in which this method displays among the others. Lower values display first. Format: `int32`. |
| `expected_version` | Optional | integer | Current resource version. Required when the request carries a revision field: configuration, name, description, display_position, recommendation_priority. A revision field publishes a new immutable revision even when its value is unchanged. Optional for other fields, which advance version and keep the current revision. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | Name of the method. Buyers see it as the option name at checkout. minLength: `1`. |
| `recommendation_priority` | Optional | integer or null | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Send null to clear it. Format: `int32`. |
| `status` | Optional | string | Whether the method is in use. Send it alone, with `expected_version`; combining it with another field returns `400 INVALID_REQUEST` with the detail `NOT_ALLOWED` on `status`. Values: `"inactive"`, `"active"`. |

#### deliveryMethods.update: variant 7



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryMethodConfigurationPatchRequestInput](../models/DeliveryMethodConfigurationPatchRequestInput.md#deliverymethodconfigurationpatchrequestinput) | Patch object: fields you send are applied, fields you omit are unchanged. Each key you send replaces that part of the configuration as a whole, so send every field you want to keep in pricing, origin, eligibility, and the other objects. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. Patch object: fields you send are applied, fields you omit are unchanged. Each key you send replaces that part of the configuration as a whole, so send every field you want to keep in pricing, origin, eligibility, and the other objects. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. minProperties: `1`. |
| `description` | Optional | string or null | Delivery method description. Send null to clear it. minLength: `1`. |
| `display_position` | Optional | integer | Position in which this method displays among the others. Lower values display first. Format: `int32`. |
| `expected_version` | Optional | integer | Current resource version. Required when the request carries a revision field: configuration, name, description, display_position, recommendation_priority. A revision field publishes a new immutable revision even when its value is unchanged. Optional for other fields, which advance version and keep the current revision. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | Name of the method. Buyers see it as the option name at checkout. minLength: `1`. |
| `recommendation_priority` | Required | integer or null | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Send null to clear it. Format: `int32`. |
| `status` | Optional | string | Whether the method is in use. Send it alone, with `expected_version`; combining it with another field returns `400 INVALID_REQUEST` with the detail `NOT_ALLOWED` on `status`. Values: `"inactive"`, `"active"`. |

#### deliveryMethods.update: variant 8



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryMethodConfigurationPatchRequestInput](../models/DeliveryMethodConfigurationPatchRequestInput.md#deliverymethodconfigurationpatchrequestinput) | Patch object: fields you send are applied, fields you omit are unchanged. Each key you send replaces that part of the configuration as a whole, so send every field you want to keep in pricing, origin, eligibility, and the other objects. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. Patch object: fields you send are applied, fields you omit are unchanged. Each key you send replaces that part of the configuration as a whole, so send every field you want to keep in pricing, origin, eligibility, and the other objects. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. An empty configuration is invalid. Publishes a new immutable revision, even when the values are unchanged, and requires expected_version. minProperties: `1`. |
| `description` | Optional | string or null | Delivery method description. Send null to clear it. minLength: `1`. |
| `display_position` | Optional | integer | Position in which this method displays among the others. Lower values display first. Format: `int32`. |
| `expected_version` | Optional | integer | Current resource version. Required when the request carries a revision field: configuration, name, description, display_position, recommendation_priority. A revision field publishes a new immutable revision even when its value is unchanged. Optional for other fields, which advance version and keep the current revision. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | Name of the method. Buyers see it as the option name at checkout. minLength: `1`. |
| `recommendation_priority` | Optional | integer or null | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Send null to clear it. Format: `int32`. |
| `status` | Required | string | Whether the method is in use. Send it alone, with `expected_version`; combining it with another field returns `400 INVALID_REQUEST` with the detail `NOT_ALLOWED` on `status`. Values: `"inactive"`, `"active"`. |

#### Response

Returned payload: [DeliveryMethod](../models/DeliveryMethod.md#deliverymethod).

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

$result = $client->deliveryMethods->update('dmet_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'status' => 'active',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/deliveryMethods-update.php)

