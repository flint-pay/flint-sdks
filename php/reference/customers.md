[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# customers

### customers.create

Creates a customer for the authenticated merchant.

`POST /v1/customers`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateCustomerRequestInput](../models/CreateCustomerRequestInput.md#createcustomerrequestinput) | The request body for: Create customer. |

Body model: [CreateCustomerRequestInput](../models/CreateCustomerRequestInput.md#createcustomerrequestinput).

#### customers.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `default_invoice_payment_term_id` | Optional | string | minLength: `1`. |
| `email` | Optional | string | Format: `email`. minLength: `1`. maxLength: `320`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `internal_note` | Optional | string | minLength: `1`. |
| `is_merchant_verified` | Optional | boolean | Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Optional | string | minLength: `1`. |
| `on_email_conflict` | Optional | string | What to do when an active customer in this environment already has `email`. `error` returns `409 ALREADY_EXISTS` naming that customer. `return_existing` returns that customer unchanged with `200` instead of creating one; it requires `email`. Emails match case-insensitively. Default: `"error"`. Values: `"error"`, `"return_existing"`. |
| `phone` | Optional | string | minLength: `1`. |
| `segment` | Optional | string | Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. minLength: `1`. |
| `tax_exempt` | Optional | boolean |  |
| `tax_identity` | Optional | [TaxIdentityRequestInput](../models/TaxIdentityPatchInput.md#taxidentitypatchinput) | Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one. |
| `test_clock_id` | Optional | string | Sandbox only. ID of a test clock to create the customer on. The customer, and every subscription created for it, read the clock's time instead of real time. A customer can't be moved to another clock or taken off one. A live credential gets `403 FORBIDDEN` with reason `test_mode_required`. minLength: `1`. |

#### Response

Returned payload: [Customer](../models/Customer.md#customer).

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

$result = $client->customers->create([
  'email' => 'jane@example.com',
  'metadata' => (object) [
    'crm_id' => 'crm_123',
  ],
  'name' => 'Jane Doe',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customers-create.php)

### customers.createAccessLink

Signs the buyer in to your Flint-hosted customer account as this customer. Works for 15 minutes and one open. The url is a bearer credential. Flint returns it only in this response and in a retry with the same Idempotency-Key, so send it only to the buyer and keep it out of logs. A call with a new key creates another link; earlier links keep working until they expire. Send no request body or an empty object ({}). Requires customers.sessions.write. Idempotency is scoped to the merchant, credential, environment, and this customer's route. A replay returns the original link without extending its lifetime or replenishing its open. Without an Idempotency-Key, each call creates a new link and has no replay result. If Flint cannot retain a result after minting, contact support with X-Request-Id before sending a new request.

`POST /v1/customers/{customer_id}/access-links`

Signature: `createAccessLink(string|Model $customer_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | Flint customer ID. |
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

$result = $client->customers->createAccessLink('cus_01ARZ3NDEKTSV4RRFFQ69G5FAV', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customers-createAccessLink.php)

### customers.createAddress

Creates a stable saved address. The address becomes a default only when the request sets is_default_billing or is_default_shipping, or later by setting those flags with PATCH, including the customer's first address. A saved default becomes the customer's effective address for the corresponding role.

`POST /v1/customers/{customer_id}/addresses`

Signature: `createAddress(string|Model $customer_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | Flint customer ID. |
| `body` | Required | [CreateCustomerAddressRequestInput](../models/CreateCustomerAddressRequestInput.md#createcustomeraddressrequestinput) | The request body for: Create a customer address; Create an address for the current buyer. |

#### Response

Returned payload: [CustomerAddress](../models/CustomerAddress.md#customeraddress).

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

$result = $client->customers->createAddress('cus_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'address' => (object) [
    'city' => 'Springfield',
    'country' => 'US',
    'line1' => '100 Example Street',
    'postal_code' => '62701',
    'state' => 'IL',
  ],
  'recipient_name' => 'Jordan Example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customers-createAddress.php)

### customers.deleteAddress

Deletes a saved address. Deleting the billing or shipping default leaves the customer with none; Flint doesn't pick another address.

`DELETE /v1/customers/{customer_id}/addresses/{customer_address_id}`

Signature:

```text
deleteAddress(string|
  Model $customer_id,
 string|
  Model $customer_address_id,
 array|
  Model|
  null $params = null,
 ?RequestOptions $options = null)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | Flint customer ID. |
| `customer_address_id` | Required | string | Flint customer address ID. |
| `expected_version` | Optional | integer | Optional address version last read by the caller. Format: `uint64`. minimum: `1`. |

#### Response

Returned payload: [CustomerAddress](../models/CustomerAddress.md#customeraddress).

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

$result = $client->customers->deleteAddress('cus_01ARZ3NDEKTSV4RRFFQ69G5FAV', 'caddr_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customers-deleteAddress.php)

### customers.get

Returns a single customer by ID.

`GET /v1/customers/{customer_id}`

Signature: `get(string|Model $customer_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | Flint customer ID. |
| `expand` | Optional | Array of string or string | Supported expansions: default_payment_method, receivables. Expanding the default payment method requires customers.read plus payments.payment_methods.read. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=default_payment_method&expand=receivables, or pass one comma-separated value. Items values: `"default_payment_method"`, `"receivables"`. Values: `"default_payment_method"`, `"receivables"`. |

#### Response

Returned payload: [Customer](../models/Customer.md#customer).

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
$result = $client->customers->get('cus_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/customers-get.php)

### customers.getAddress

Returns one saved address owned by the customer.

`GET /v1/customers/{customer_id}/addresses/{customer_address_id}`

Signature: `getAddress(string|Model $customer_id, string|Model $customer_address_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | Flint customer ID. |
| `customer_address_id` | Required | string | Flint customer address ID. |

#### Response

Returned payload: [CustomerAddress](../models/CustomerAddress.md#customeraddress).

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
$result = $client->customers->getAddress('cus_01ARZ3NDEKTSV4RRFFQ69G5FAV', 'caddr_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/customers-getAddress.php)

### customers.linkGuestPurchases

Links purchases with the verified email and no customer to the verification's customer in the same merchant environment. Purchases bound to another customer stay with that customer. The verification is single use; use the same Idempotency-Key to retry an uncertain result.

`POST /v1/customers/{customer_id}/link-guest-purchases`

Signature: `linkGuestPurchases(string|Model $customer_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | Flint customer ID. |
| `body` | Required | [LinkCustomerGuestPurchasesRequestInput](../models/LinkCustomerGuestPurchasesRequestInput.md#linkcustomerguestpurchasesrequestinput) | The request body for: Link guest purchases to a customer. |

Body model: [LinkCustomerGuestPurchasesRequestInput](../models/LinkCustomerGuestPurchasesRequestInput.md#linkcustomerguestpurchasesrequestinput).

#### customers.linkGuestPurchases body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_verification_id` | Required | string | minLength: `1`. |

#### Response

Returned payload: [GuestPurchaseLink](../models/GuestPurchaseLinkInput.md#guestpurchaselinkinput).

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

$result = $client->customers->linkGuestPurchases('cus_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'customer_verification_id' => 'cver_01ARZ3NDEKTSV4RRFFQ69G5FAV',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customers-linkGuestPurchases.php)

### customers.list

Returns a paginated list of customers for the authenticated merchant. Without a status filter, returns active and deletion_processing customers; deleted customers appear only when the filter names deleted. Default order: created_at descending, then customer_id descending.

`GET /v1/customers`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out deleted rows; name deleted to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"deletion_processing"`, `"deleted"`. Values: `"active"`, `"deletion_processing"`, `"deleted"`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `query` | Optional | string | Search across customer_id, name, email, phone number, and external_reference_id. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as cus_01. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `email` | Optional | string | Exact whole-address match after trimming surrounding whitespace, ignoring case and accents. |
| `segment` | Optional | string | Byte-sensitive whole-value match on the opaque customer segment. Whitespace, casing, Unicode, and commas are literal. minLength: `1`. maxLength: `255`. |
| `is_merchant_verified` | Optional | boolean | Filter by merchant verification, independently of email verification. |
| `phone` | Optional | string | Exact match on a full E.164 phone number. Encode the leading plus as %2B. minLength: `1`. pattern: `^\+[1-9][0-9]{1,14}$`. |
| `test_clock_id` | Optional | string | Sandbox only. Exact-match filter on `test_clock_id`. A live credential gets `403 FORBIDDEN` with reason `test_mode_required`. minLength: `1`. pattern: `^tclk_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by customer_id. Default: `"created_at"`. Values: `"name"`, `"email"`, `"created_at"`, `"updated_at"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `expand` | Optional | Array of string or string | Supported expansions: default_payment_method, receivables. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=default_payment_method&expand=receivables, or pass one comma-separated value. Items values: `"default_payment_method"`, `"receivables"`. Values: `"default_payment_method"`, `"receivables"`. |

#### Response

Returned payload: [CustomerListResponse](../models/CustomerListResponse.md#customerlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
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
$result = $client->customers->list([], new RequestOptions());
```

[Complete runnable example](../examples/customers-list.php)

### customers.listAddresses

Lists the customer's saved addresses with billing and shipping default flags. Default order: created_at descending, then customer_address_id descending.

`GET /v1/customers/{customer_id}/addresses`

Signature: `listAddresses(string|Model $customer_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | Flint customer ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [CustomerAddressListResponse](../models/CustomerAddressListResponse.md#customeraddresslistresponse).

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

Pagination: `listAddressesItems`, `listAddressesPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->customers->listAddresses('cus_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/customers-listAddresses.php)

### customers.revokeSessions

Revokes every customer session for one customer in the selected merchant environment. Flint Account buyer sessions remain independent.

`POST /v1/customers/{customer_id}/sessions/revoke`

Signature: `revokeSessions(string|Model $customer_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | Flint customer ID. |

#### Response

Returned payload: [CustomerSessionsRevocation](../models/CustomerSessionsRevocationInput.md#customersessionsrevocationinput).

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

$result = $client->customers->revokeSessions('cus_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customers-revokeSessions.php)

### customers.update

Applies a sparse update to a customer. Changing email requires customer_account.mode to be merchant_hosted; otherwise Flint returns 409 ACTION_NOT_ALLOWED with reason managed_externally. To change the email of a customer who signs in to your Flint-hosted account, create a customer session for the customer and send POST /v1/me/email-change-requests with the new email; the customer confirms it with the codes Flint emails them. If Flint cannot read the account settings, it returns a retryable 503 SERVICE_UNAVAILABLE without changing the customer.

`PATCH /v1/customers/{customer_id}`

Signature: `update(string|Model $customer_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | Flint customer ID. |
| `body` | Required | [UpdateCustomerRequestInput](../models/UpdateCustomerRequestInput.md#updatecustomerrequestinput) | The request body for: Update customer. |

Body model: [UpdateCustomerRequestInput](../models/UpdateCustomerRequestInput.md#updatecustomerrequestinput).

#### customers.update body fields

Field definitions: [shared fields](../models/UpdateCustomerRequestInput.md#updatecustomerrequestinput). Models: [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput), [TaxIdentityPatchInput](../models/TaxIdentityPatchInput.md#taxidentitypatchinput).

#### Response

Returned payload: [Customer](../models/Customer.md#customer).

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

$result = $client->customers->update('cus_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'name' => 'Jordan Example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customers-update.php)

### customers.updateAddress

Applies a sparse update to a saved address. Set is_default_billing or is_default_shipping to true to make this address the default, or false to clear a default it holds. Updating a default address also updates the customer's effective address for that role.

`PATCH /v1/customers/{customer_id}/addresses/{customer_address_id}`

Signature: `updateAddress(string|Model $customer_id, string|Model $customer_address_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | Flint customer ID. |
| `customer_address_id` | Required | string | Flint customer address ID. |
| `body` | Required | [UpdateCustomerAddressRequestInput](../models/UpdateCustomerAddressRequestInput.md#updatecustomeraddressrequestinput) | The request body for: Update a customer address; Update one of the current buyer's addresses. minProperties: `1`. |

#### Response

Returned payload: [CustomerAddress](../models/CustomerAddress.md#customeraddress).

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

$result = $client->customers->updateAddress('cus_01ARZ3NDEKTSV4RRFFQ69G5FAV', 'caddr_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'label' => 'Home',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customers-updateAddress.php)

