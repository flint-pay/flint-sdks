[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# deliveryMethods

### deliveryMethods.create

Delivery methods combine eligibility, pricing, schedules, estimates, tax treatment, and execution behavior. Creation publishes immutable revision 1. Omit status to start inactive.

`POST /v1/delivery-methods`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateDeliveryMethodRequestInput](../models/CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput) | The request body for: Create delivery method. |

Body model: [CreateDeliveryMethodRequestInput](../models/CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput).

#### deliveryMethods.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryMethodConfigurationCreateRequestInput](../models/DeliveryMethodConfigurationCreateRequestInput.md#deliverymethodconfigurationcreaterequestinput) | The configuration you supply when creating a delivery method. `origin` and `pricing` are required. |
| `description` | Optional | string | minLength: `1`. |
| `display_position` | Optional | integer | Format: `int32`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Required | string | minLength: `1`. |
| `recommendation_priority` | Optional | integer | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Format: `int32`. |
| `status` | Optional | string | Values: `"inactive"`, `"active"`. |
| `type` | Required | string | Values: `"shipment"`, `"local_delivery"`, `"pickup"`. |

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
| `expected_version` | Optional | integer | Optional current resource version. The delete is rejected if the resource changed after this version was read. Format: `uint64`. minimum: `1`. |

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

$result = $client->deliveryMethods->delete('dmet_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
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

#### Response

Returned payload: [DeliveryMethod](../models/DeliveryMethod.md#deliverymethod).

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

#### Example

```php
$result = $client->deliveryMethods->get('dmet_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
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
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `query` | Optional | string | Search across delivery_method_id, name, description, and external_reference_id. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as dmet_01. maxLength: `255`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"inactive"`, `"archived"`. Values: `"active"`, `"inactive"`, `"archived"`. |
| `type` | Optional | Array of string or string | Filter by method type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"shipment"`, `"local_delivery"`, `"pickup"`. Values: `"shipment"`, `"local_delivery"`, `"pickup"`. |
| `delivery_zone_id` | Optional | string | Filter by referenced delivery zone. |
| `delivery_location_set_id` | Optional | string | Filter by referenced delivery location set. |
| `delivery_rate_callback_id` | Optional | string | Filter by referenced callback endpoint. |
| `location_id` | Optional | string | Filter by referenced Location. |

#### Response

Returned payload: [DeliveryMethodListResponse](../models/DeliveryMethodListResponse.md#deliverymethodlistresponse).

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

Pagination: `listItems`, `listPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->deliveryMethods->list([], new RequestOptions());
```

[Complete runnable example](../examples/deliveryMethods-list.php)

### deliveryMethods.update

Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable revision and requires expected_version. Archived resources can't be changed; create a new resource instead. A method referenced by checkout.default_delivery_method_ids at merchant scope or by delivery_method_ids on an active or inactive payment link cannot be set inactive; the request returns 409 RESOURCE_IN_USE with the blocking references. Remove the method from checkout.default_delivery_method_ids with PATCH /v1/settings or from the link's delivery_method_ids with PATCH /v1/payment-links/{payment_link_id}.

`PATCH /v1/delivery-methods/{delivery_method_id}`

Signature: `update(string|Model $delivery_method_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Required | string | Flint delivery method ID. |
| `body` | Required | [UpdateDeliveryMethodRequestInput](../models/UpdateDeliveryMethodRequestInput.md#updatedeliverymethodrequestinput) | The request body for: Update delivery method. |

Body model: [UpdateDeliveryMethodRequestInput](../models/UpdateDeliveryMethodRequestInput.md#updatedeliverymethodrequestinput).

#### deliveryMethods.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryMethodConfigurationPatchRequestInput](../models/DeliveryMethodConfigurationPatchRequestInput.md#deliverymethodconfigurationpatchrequestinput) | Only the keys you send change; keys you leave out keep their current values. Each key you send replaces that part of the configuration whole. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. Requires expected_version. An empty configuration is invalid. Only the keys you send change; keys you leave out keep their current values. Each key you send replaces that part of the configuration whole. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. Requires expected_version. An empty configuration is invalid. minProperties: `1`. |
| `description` | Optional | string or null | Delivery method description. Send null to clear it. minLength: `1`. |
| `display_position` | Optional | integer | Format: `int32`. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration, name, description, display_position, recommendation_priority. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | minLength: `1`. |
| `recommendation_priority` | Optional | integer or null | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Send null to clear it. Format: `int32`. |
| `status` | Optional | string | Values: `"inactive"`, `"active"`. |

#### deliveryMethods.update: variant 1



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryMethodConfigurationPatchRequestInput](../models/DeliveryMethodConfigurationPatchRequestInput.md#deliverymethodconfigurationpatchrequestinput) | Only the keys you send change; keys you leave out keep their current values. Each key you send replaces that part of the configuration whole. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. Requires expected_version. An empty configuration is invalid. Only the keys you send change; keys you leave out keep their current values. Each key you send replaces that part of the configuration whole. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. Requires expected_version. An empty configuration is invalid. minProperties: `1`. |
| `description` | Optional | string or null | Delivery method description. Send null to clear it. minLength: `1`. |
| `display_position` | Optional | integer | Format: `int32`. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration, name, description, display_position, recommendation_priority. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Required | string | minLength: `1`. |
| `recommendation_priority` | Optional | integer or null | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Send null to clear it. Format: `int32`. |
| `status` | Optional | string | Values: `"inactive"`, `"active"`. |

#### deliveryMethods.update: variant 2



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryMethodConfigurationPatchRequestInput](../models/DeliveryMethodConfigurationPatchRequestInput.md#deliverymethodconfigurationpatchrequestinput) | Only the keys you send change; keys you leave out keep their current values. Each key you send replaces that part of the configuration whole. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. Requires expected_version. An empty configuration is invalid. Only the keys you send change; keys you leave out keep their current values. Each key you send replaces that part of the configuration whole. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. Requires expected_version. An empty configuration is invalid. minProperties: `1`. |
| `description` | Optional | string or null | Delivery method description. Send null to clear it. minLength: `1`. |
| `display_position` | Optional | integer | Format: `int32`. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration, name, description, display_position, recommendation_priority. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Required | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | minLength: `1`. |
| `recommendation_priority` | Optional | integer or null | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Send null to clear it. Format: `int32`. |
| `status` | Optional | string | Values: `"inactive"`, `"active"`. |

#### deliveryMethods.update: variant 3



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryMethodConfigurationPatchRequestInput](../models/DeliveryMethodConfigurationPatchRequestInput.md#deliverymethodconfigurationpatchrequestinput) | Only the keys you send change; keys you leave out keep their current values. Each key you send replaces that part of the configuration whole. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. Requires expected_version. An empty configuration is invalid. Only the keys you send change; keys you leave out keep their current values. Each key you send replaces that part of the configuration whole. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. Requires expected_version. An empty configuration is invalid. minProperties: `1`. |
| `description` | Optional | string or null | Delivery method description. Send null to clear it. minLength: `1`. |
| `display_position` | Optional | integer | Format: `int32`. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration, name, description, display_position, recommendation_priority. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | minLength: `1`. |
| `recommendation_priority` | Optional | integer or null | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Send null to clear it. Format: `int32`. |
| `status` | Optional | string | Values: `"inactive"`, `"active"`. |

#### deliveryMethods.update: variant 4



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryMethodConfigurationPatchRequestInput](../models/DeliveryMethodConfigurationPatchRequestInput.md#deliverymethodconfigurationpatchrequestinput) | Only the keys you send change; keys you leave out keep their current values. Each key you send replaces that part of the configuration whole. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. Requires expected_version. An empty configuration is invalid. Only the keys you send change; keys you leave out keep their current values. Each key you send replaces that part of the configuration whole. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. Requires expected_version. An empty configuration is invalid. minProperties: `1`. |
| `description` | Optional | string or null | Delivery method description. Send null to clear it. minLength: `1`. |
| `display_position` | Optional | integer | Format: `int32`. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration, name, description, display_position, recommendation_priority. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Required | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | minLength: `1`. |
| `recommendation_priority` | Optional | integer or null | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Send null to clear it. Format: `int32`. |
| `status` | Optional | string | Values: `"inactive"`, `"active"`. |

#### deliveryMethods.update: variant 5



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryMethodConfigurationPatchRequestInput](../models/DeliveryMethodConfigurationPatchRequestInput.md#deliverymethodconfigurationpatchrequestinput) | Only the keys you send change; keys you leave out keep their current values. Each key you send replaces that part of the configuration whole. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. Requires expected_version. An empty configuration is invalid. Only the keys you send change; keys you leave out keep their current values. Each key you send replaces that part of the configuration whole. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. Requires expected_version. An empty configuration is invalid. minProperties: `1`. |
| `description` | Required | string or null | Delivery method description. Send null to clear it. minLength: `1`. |
| `display_position` | Optional | integer | Format: `int32`. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration, name, description, display_position, recommendation_priority. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | minLength: `1`. |
| `recommendation_priority` | Optional | integer or null | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Send null to clear it. Format: `int32`. |
| `status` | Optional | string | Values: `"inactive"`, `"active"`. |

#### deliveryMethods.update: variant 6



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryMethodConfigurationPatchRequestInput](../models/DeliveryMethodConfigurationPatchRequestInput.md#deliverymethodconfigurationpatchrequestinput) | Only the keys you send change; keys you leave out keep their current values. Each key you send replaces that part of the configuration whole. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. Requires expected_version. An empty configuration is invalid. Only the keys you send change; keys you leave out keep their current values. Each key you send replaces that part of the configuration whole. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. Requires expected_version. An empty configuration is invalid. minProperties: `1`. |
| `description` | Optional | string or null | Delivery method description. Send null to clear it. minLength: `1`. |
| `display_position` | Required | integer | Format: `int32`. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration, name, description, display_position, recommendation_priority. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | minLength: `1`. |
| `recommendation_priority` | Optional | integer or null | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Send null to clear it. Format: `int32`. |
| `status` | Optional | string | Values: `"inactive"`, `"active"`. |

#### deliveryMethods.update: variant 7



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryMethodConfigurationPatchRequestInput](../models/DeliveryMethodConfigurationPatchRequestInput.md#deliverymethodconfigurationpatchrequestinput) | Only the keys you send change; keys you leave out keep their current values. Each key you send replaces that part of the configuration whole. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. Requires expected_version. An empty configuration is invalid. Only the keys you send change; keys you leave out keep their current values. Each key you send replaces that part of the configuration whole. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. Requires expected_version. An empty configuration is invalid. minProperties: `1`. |
| `description` | Optional | string or null | Delivery method description. Send null to clear it. minLength: `1`. |
| `display_position` | Optional | integer | Format: `int32`. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration, name, description, display_position, recommendation_priority. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | minLength: `1`. |
| `recommendation_priority` | Required | integer or null | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Send null to clear it. Format: `int32`. |
| `status` | Optional | string | Values: `"inactive"`, `"active"`. |

#### deliveryMethods.update: variant 8



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryMethodConfigurationPatchRequestInput](../models/DeliveryMethodConfigurationPatchRequestInput.md#deliverymethodconfigurationpatchrequestinput) | Only the keys you send change; keys you leave out keep their current values. Each key you send replaces that part of the configuration whole. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. Requires expected_version. An empty configuration is invalid. Only the keys you send change; keys you leave out keep their current values. Each key you send replaces that part of the configuration whole. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. Requires expected_version. An empty configuration is invalid. minProperties: `1`. |
| `description` | Optional | string or null | Delivery method description. Send null to clear it. minLength: `1`. |
| `display_position` | Optional | integer | Format: `int32`. |
| `expected_version` | Optional | integer | Current resource version. Required for configuration, owned-rate replacement, and quote-pinned method presentation; optional for other scalar and status updates. Required when any of these fields is present: configuration, name, description, display_position, recommendation_priority. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | minLength: `1`. |
| `recommendation_priority` | Optional | integer or null | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Send null to clear it. Format: `int32`. |
| `status` | Required | string | Values: `"inactive"`, `"active"`. |

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

$result = $client->deliveryMethods->update('dmet_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'status' => 'active',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/deliveryMethods-update.php)

