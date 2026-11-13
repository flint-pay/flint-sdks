[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# customers

### customers.create

Creates a customer record for a buyer's contact details and purchases in this environment. When an active customer already has `email`, `on_email_conflict` chooses whether to fail with `ALREADY_EXISTS`, which names that customer, or return the existing customer unchanged. Emails match case-insensitively.

`POST /v1/customers`

Signature: `create(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Optional | [CreateCustomerRequestInput](../models/CreateCustomerRequestInput.md#createcustomerrequestinput) | The request body for: Create customer. |

Body model: [CreateCustomerRequestInput](../models/CreateCustomerRequestInput.md#createcustomerrequestinput).

#### customers.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `addresses` | Optional | Array of [CreateCustomerAddressRequestInput](../models/CreateCustomerAddressRequestInput.md#createcustomeraddressrequestinput) | Initial saved addresses, created atomically with the customer. Each entry uses the address-book create shape. At most one entry may be the billing default and one the shipping default. Defaults populate billing_address and shipping_address. Omit or send [] for none. When on_email_conflict is return_existing, an existing customer and its addresses stay unchanged. |
| `default_invoice_payment_term_id` | Optional | string | ID of the invoice payment term that applies to this customer's invoices created with `payment_due.type` set to `customer_default`. minLength: `1`. |
| `email` | Optional | string | Customer email, unique among the environment's customers. Required when `on_email_conflict` is `return_existing`. Format: `email`. minLength: `1`. maxLength: `320`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `internal_note` | Optional | string | Internal note about this customer. Not returned to customer sessions. minLength: `1`. |
| `is_merchant_verified` | Optional | boolean | Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Optional | string | Customer name, up to 255 characters (Unicode code points) after trimming surrounding whitespace. minLength: `1`. |
| `on_email_conflict` | Optional | string | What to do when an active customer in this environment already has `email`. `error` returns `409 ALREADY_EXISTS` naming that customer. `return_existing` returns that customer unchanged with `200` instead of creating one; it requires `email`. Emails match case-insensitively. Default: `"error"`. Values: `"error"`, `"return_existing"`. |
| `phone` | Optional | string | Customer phone number. minLength: `1`. |
| `price_list_id` | Optional | string or null | ID of a wholesale price list in this merchant environment. An inactive list can be assigned but does not apply. An archived list returns 409 ACTION_NOT_ALLOWED; a missing list returns 404 RESOURCE_NOT_FOUND. Omit or send null for no direct list. minLength: `1`. pattern: `^prl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `segment` | Optional | string | Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. minLength: `1`. |
| `tax_exempt` | Optional | boolean | Whether Flint treats this customer as exempt from tax on their orders, so it skips tax calculation for them. Defaults to `false`. |
| `tax_identity` | Optional | [TaxIdentityRequestInput](../models/TaxIdentityPatchInput.md#taxidentitypatchinput) | Legal name, registered address and tax IDs printed on this customer's invoices and credit notes. Merchant-provided legal identity displayed on invoices and credit notes. Flint does not verify IDs. On a customer, automatic tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one. |
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

$result = $client->customers->create(null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customers-create.php)

### customers.createAccessLink

Signs the buyer in to your Flint-hosted customer account as this customer. Works for 15 minutes and one open. The url is a bearer credential. Flint returns it only in this response and in a retry with the same idempotency key, so send it only to the buyer and keep it out of logs. A call with a new key creates another link; earlier links keep working until they expire. Optionally send return_url for a destination on your site, or omit the body. Requires customers.sessions.write. Idempotency is scoped to the merchant, credential, environment, and this customer's route. A replay returns the original link without extending its lifetime or replenishing its open. Without an idempotency key, each call creates a new link and has no replay result. If Flint cannot retain a result after minting, contact support with the request ID before sending a new request.

`POST /v1/customers/{customer_id}/access-links`

Signature: `createAccessLink(string|Model $customer_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | Flint customer ID. |
| `body` | Optional | [CreateCustomerAccessLinkRequestInput](../models/CreateCustomerAccessLinkRequestInput.md#createcustomeraccesslinkrequestinput) | Optional destination to return to from the hosted customer account. |

Body model: [CreateCustomerAccessLinkRequestInput](../models/CreateCustomerAccessLinkRequestInput.md#createcustomeraccesslinkrequestinput).

#### customers.createAccessLink body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `return_url` | Optional | string | Where the buyer can return to on your site. Kept for the browser session this link starts, until sign-out or session end. Absolute HTTPS URL without credentials; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Query strings and fragments are allowed. Omit it for no return destination. Format: `uri`. minLength: `1`. maxLength: `2048`. |

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

$result = $client->customers->createAccessLink('cus_01KEZF7C006X9JK6NZNA2SM9XD', null, new RequestOptions(idempotencyKey: $idempotencyKey));
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
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
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

### customers.createTaxExemption

Records a nested customer exemption with reason, coverage and an inclusive date window. At most 100 unarchived exemptions may belong to a customer; exceeding that limit returns LIMIT_REACHED with reason customer_tax_exemptions. An active record applies to the customer's sales whose taxable destination its coverage contains, within its date range. Saving a record doesn't change the customer's blanket tax_exempt flag, which still takes precedence. Only API keys and dashboard sessions can access these records. Retry a lost response with the same request and Idempotency-Key. If IDEMPOTENCY_RECOVERY_REQUIRED is returned, inspect this customer's list and GET records before sending a new write. Match a lost create against submitted fields across list pages; contact support with the original key and request ID if its outcome is unclear.

`POST /v1/customers/{customer_id}/tax-exemptions`

Signature: `createTaxExemption(string|Model $customer_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | Flint ID of the customer that owns this nested child. |
| `body` | Required | [CreateCustomerTaxExemptionRequestInput](../models/CreateCustomerTaxExemptionRequestInput.md#createcustomertaxexemptionrequestinput) | The request body for: Create a customer tax exemption. |

Body model: [CreateCustomerTaxExemptionRequestInput](../models/CreateCustomerTaxExemptionRequestInput.md#createcustomertaxexemptionrequestinput).

#### customers.createTaxExemption body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `certificate_number` | Optional | string or null | Merchant's exemption certificate number. Null when none is recorded. minLength: `1`. maxLength: `255`. |
| `coverage` | Required | [CustomerTaxExemptionCoverageRequestInput](../models/CustomerTaxExemptionCoverageRequestInput.md#customertaxexemptioncoveragerequestinput) | Replaced as a whole: send every field you want to keep. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC. |
| `description` | Optional | string or null | Explanation of the exemption. Required for other. Null when none is recorded. minLength: `1`. maxLength: `500`. |
| `end_date` | Optional | string or null | Last day of the exemption, inclusive, in YYYY-MM-DD format. Null when the exemption has no end date. Format: `date`. minLength: `1`. |
| `evidence_reference` | Optional | string or null | Merchant-only reference to the supporting document. Never shown to buyers or printed on buyer documents. Null when none is recorded. minLength: `1`. maxLength: `1024`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `reason` | Required | string | Exemption reason. Other requires a description. Values: [13 declared values](../models/BuyerOrderTaxExemptionInput.md#buyerordertaxexemptioninput-reason-values). |
| `start_date` | Required | string | First day of the exemption, inclusive, in YYYY-MM-DD format. May be up to 365 days in the future. Format: `date`. minLength: `1`. |

#### Response

Returned payload: [CustomerTaxExemption](../models/CustomerTaxExemption.md#customertaxexemption).

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

$result = $client->customers->createTaxExemption('cus_01KEZF7C006X9JK6NZNA2SM9XD', [
  'reason' => 'federal_government',
  'coverage' => (object) [
    'type' => 'all_states',
    'country' => 'US',
  ],
  'start_date' => '2026-08-02',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customers-createTaxExemption.php)

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
| `expected_version` | Optional | integer | Optional address version last read by the caller. Format: `uint64`. minimum: `1`. maximum: `9007199254740991`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

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

$result = $client->customers->deleteAddress('cus_01KEZF7C006X9JK6NZNA2SM9XD', 'caddr_01KEZF7C00K2Q127FBJAXWB0FP', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customers-deleteAddress.php)

### customers.deleteTaxExemption

Archives the record and returns its archived snapshot in the same schema as GET. It stays readable by ID and is excluded from lists unless status includes archived. Expired and archived records cannot be edited. An optional expected_version query parameter rejects a stale write before effects. Retry a lost response with the same request and Idempotency-Key. If IDEMPOTENCY_RECOVERY_REQUIRED is returned, inspect this customer's list and GET records before sending a new write. Match a lost create against submitted fields across list pages; contact support with the original key and request ID if its outcome is unclear.

`DELETE /v1/customers/{customer_id}/tax-exemptions/{customer_tax_exemption_id}`

Signature:

```text
deleteTaxExemption(string|
  Model $customer_id,
 string|
  Model $customer_tax_exemption_id,
 array|
  Model|
  null $params = null,
 ?RequestOptions $options = null)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | Flint ID of the customer that owns this nested child. |
| `customer_tax_exemption_id` | Required | string | Flint customer tax exemption ID, prefixed ctex_. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Omit to archive the current record. Format: `uint64`. minimum: `1`. maximum: `9007199254740991`. |

#### Response

Returned payload: [CustomerTaxExemption](../models/CustomerTaxExemption.md#customertaxexemption).

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

$result = $client->customers->deleteTaxExemption('cus_01KEZF7C006X9JK6NZNA2SM9XD', 'ctex_01KEZF7C009N0YTK0NMWP1XZPW', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customers-deleteTaxExemption.php)

### customers.get

Returns a single customer by ID.

`GET /v1/customers/{customer_id}`

Signature: `get(string|Model $customer_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | Flint customer ID. |
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: default_payment_method, receivables. Expanding the default payment method requires customers.read plus payments.payment_methods.read. Limits: at most 10 unique expand paths per request. Items values: `"default_payment_method"`, `"receivables"`. Values: `"default_payment_method"`, `"receivables"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

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
$result = $client->customers->get('cus_01KEZF7C006X9JK6NZNA2SM9XD', [], new RequestOptions());
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
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

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
$result = $client->customers->getAddress('cus_01KEZF7C006X9JK6NZNA2SM9XD', 'caddr_01KEZF7C00K2Q127FBJAXWB0FP', [], new RequestOptions());
```

[Complete runnable example](../examples/customers-getAddress.php)

### customers.getEmailPreferences

Returns the preferences for the customer's current email address in this merchant environment. A missing choice is enabled. Reads remain available while deletion is processing. Returns RESOURCE_NOT_FOUND for an unknown or deleted customer, or with reason email_missing when the customer has no email address. Merchants cannot change these preferences.

`GET /v1/customers/{customer_id}/email-preferences`

Signature: `getEmailPreferences(string|Model $customer_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | Flint customer ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [CustomerEmailPreferences](../models/CustomerEmailPreferencesUpdatedMerchantEventDataObject.md#customeremailpreferencesupdatedmerchanteventdataobject).

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
$result = $client->customers->getEmailPreferences('cus_01KEZF7C006X9JK6NZNA2SM9XD', [], new RequestOptions());
```

[Complete runnable example](../examples/customers-getEmailPreferences.php)

### customers.getTaxExemption

Returns one exemption belonging to this customer, including an archived record. A record belonging to another customer returns RESOURCE_NOT_FOUND. Evidence references are merchant-only; customer and checkout sessions cannot access this route.

`GET /v1/customers/{customer_id}/tax-exemptions/{customer_tax_exemption_id}`

Signature:

```text
getTaxExemption(string|
  Model $customer_id,
 string|
  Model $customer_tax_exemption_id,
 array|
  Model|
  null $params = null,
 ?RequestOptions $options = null)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | Flint ID of the customer that owns this nested child. |
| `customer_tax_exemption_id` | Required | string | Flint customer tax exemption ID, prefixed ctex_. |

#### Response

Returned payload: [CustomerTaxExemption](../models/CustomerTaxExemption.md#customertaxexemption).

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
$result = $client->customers->getTaxExemption('cus_01KEZF7C006X9JK6NZNA2SM9XD', 'ctex_01KEZF7C009N0YTK0NMWP1XZPW', [], new RequestOptions());
```

[Complete runnable example](../examples/customers-getTaxExemption.php)

### customers.linkGuestPurchases

Links purchases with the verified email and no customer to the verification's customer in the same merchant environment. Purchases bound to another customer stay with that customer. The verification is single use; use the same idempotency key to retry an uncertain result.

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
| `customer_verification_id` | Required | string | ID of a confirmed customer verification with purpose `link_guest_purchases`. Linking uses it up. minLength: `1`. |

#### Response

Returned payload: [GuestPurchaseLink](../models/GuestPurchaseLink.md#guestpurchaselink).

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

$result = $client->customers->linkGuestPurchases('cus_01KEZF7C006X9JK6NZNA2SM9XD', [
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
| `status` | Optional | Array of string or string | Filter by status. Omitted, the list leaves out deleted rows; name deleted to include them. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"deletion_processing"`, `"deleted"`. Values: `"active"`, `"deletion_processing"`, `"deleted"`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `query` | Optional | string | Search across customer_id, name, email, phone number, and external_reference_id. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as cus_01. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `email` | Optional | string | Exact whole-address match after trimming surrounding whitespace. Case is ignored and accents are kept: `Ana@example.com` matches `ana@example.com`, but `josé@example.com` doesn't match `jose@example.com`. |
| `price_list_id` | Optional | string | Only return customers assigned directly to this price list. pattern: `^prl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `segment` | Optional | string | Byte-sensitive whole-value match on the opaque customer segment. Whitespace, casing, Unicode, and commas are literal. minLength: `1`. maxLength: `255`. |
| `is_merchant_verified` | Optional | boolean | Filter by merchant verification, independently of email verification. |
| `phone` | Optional | string | Exact match on a full E.164 phone number, such as `+14155551234`. The leading plus is required. minLength: `1`. pattern: `^\+[1-9][0-9]{1,14}$`. |
| `test_clock_id` | Optional | string | Sandbox only. Exact-match filter on `test_clock_id`. A live credential gets `403 FORBIDDEN` with reason `test_mode_required`. minLength: `1`. pattern: `^tclk_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by customer_id. Default: `"created_at"`. Values: `"name"`, `"email"`, `"created_at"`, `"updated_at"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `expand` | Optional | Array of string or string | Include related objects in the response. Supported expansions: default_payment_method, receivables. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Items values: `"default_payment_method"`, `"receivables"`. Values: `"default_payment_method"`, `"receivables"`. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [CustomerListResponse](../models/CustomerListResponse.md#customerlistresponse).

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
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [CustomerAddressListResponse](../models/CustomerAddressListResponse.md#customeraddresslistresponse).

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

Pagination: `listAddressesItems`, `listAddressesPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->customers->listAddresses('cus_01KEZF7C006X9JK6NZNA2SM9XD', [], new RequestOptions());
```

[Complete runnable example](../examples/customers-listAddresses.php)

### customers.listTaxExemptions

Returns the customer's exemption records ordered by created_at descending, then customer_tax_exemption_id descending. Archived records are excluded by default. Status may filter scheduled, active, expired and archived records, alone or together. Default order: created_at descending, then customer_tax_exemption_id descending.

`GET /v1/customers/{customer_id}/tax-exemptions`

Signature: `listTaxExemptions(string|Model $customer_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | Flint ID of the customer that owns this nested child. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `status` | Optional | Array of string or string | Filter by status. Omitted, the list leaves out archived rows; name archived to include them. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"scheduled"`, `"active"`, `"expired"`, `"archived"`. Values: `"scheduled"`, `"active"`, `"expired"`, `"archived"`. |

#### Response

Returned payload: [CustomerTaxExemptionListResponse](../models/CustomerTaxExemptionListResponse.md#customertaxexemptionlistresponse).

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

Pagination: `listTaxExemptionsItems`, `listTaxExemptionsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->customers->listTaxExemptions('cus_01KEZF7C006X9JK6NZNA2SM9XD', [], new RequestOptions());
```

[Complete runnable example](../examples/customers-listTaxExemptions.php)

### customers.revokeSessions

Revokes every customer session for one customer in the selected merchant environment. Flint Account buyer sessions remain independent.

`POST /v1/customers/{customer_id}/sessions/revoke`

Signature: `revokeSessions(string|Model $customer_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | Flint customer ID. |

#### Response

Returned payload: [CustomerSessionsRevocation](../models/CustomerSessionsRevocation.md#customersessionsrevocation).

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

$result = $client->customers->revokeSessions('cus_01KEZF7C006X9JK6NZNA2SM9XD', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customers-revokeSessions.php)

### customers.update

Applies a sparse update to a customer. Clearing email while any subscription is not canceled returns 409 CUSTOMER_EMAIL_REQUIRED. Changing, case-changing, or clearing an existing email requires customer_account.mode to be merchant_hosted; otherwise the update fails with `ACTION_NOT_ALLOWED` and reason `managed_externally`. A customer with no email can be given one in either mode. To change the email of a customer who signs in to your Flint-hosted account, create a customer session for the customer and send POST /v1/me/email-change-requests with the new email; the customer confirms it with the codes Flint emails them. If Flint cannot read the account settings, the update fails with a retryable `SERVICE_UNAVAILABLE` and the customer is unchanged.

`PATCH /v1/customers/{customer_id}`

Signature: `update(string|Model $customer_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | Flint customer ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [UpdateCustomerRequestInput](../models/UpdateCustomerRequestInput.md#updatecustomerrequestinput) | The request body for: Update customer. minProperties: `1`. |

Body model: [UpdateCustomerRequestInput](../models/UpdateCustomerRequestInput.md#updatecustomerrequestinput).

#### customers.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `default_invoice_payment_term_id` | Optional | string or null | Default payment term for this customer's invoices. Send null to clear it. minLength: `1`. |
| `default_payment_method_id` | Optional | string or null | The active off_session payment method to use by default. Omit to leave unchanged; null clears it. A change sends customer.updated. minLength: `1`. |
| `email` | Optional | string or null | The customer's email. Omit to leave unchanged; null clears it. In `flint_hosted` mode, you can set, correct, or clear the email until the buyer authenticates or verifies ownership of it. Existing identities with unknown sign-in history remain protected and require a buyer-confirmed change. In `merchant_hosted` mode, you can set, change, or clear it. An email change ends customer sessions and access links for the old address. Format: `email`. minLength: `1`. maxLength: `320`. |
| `expected_version` | Optional | integer | Required when tax_identity is null or tax_identity.tax_ids is present. Stale versions return a conflict. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Omit to leave unchanged; null clears it. minLength: `1`. maxLength: `255`. |
| `internal_note` | Optional | string or null | Internal note about this customer. Omit to leave unchanged; null clears it. minLength: `1`. |
| `is_merchant_verified` | Optional | boolean | Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. This operation also limits the metadata object you send, before merging: at most 50 keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. |
| `name` | Optional | string or null | Customer name, up to 255 characters (Unicode code points) after trimming surrounding whitespace. Omit to leave unchanged; null clears it. minLength: `1`. |
| `phone` | Optional | string or null | Customer phone number. Omit to leave unchanged; null clears it. minLength: `1`. |
| `price_list_id` | Optional | string or null | ID of a wholesale price list in this merchant environment. Omit to leave unchanged; null clears it. An inactive list can be assigned but does not apply. An archived list returns 409 ACTION_NOT_ALLOWED; a missing list returns 404 RESOURCE_NOT_FOUND. minLength: `1`. pattern: `^prl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `segment` | Optional | string or null | Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. Omit to leave unchanged; null clears it. minLength: `1`. |
| `tax_exempt` | Optional | boolean | Whether Flint treats this customer as exempt from tax on their orders, so it skips tax calculation for them. Omit to leave unchanged; `null` is not accepted. |
| `tax_identity` | Optional | [TaxIdentityPatchInput](../models/TaxIdentityPatchInput.md#taxidentitypatchinput) or null | Legal name, registered address and tax IDs printed on this customer's invoices and credit notes. Omit to leave unchanged; null clears it. |

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
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
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

### customers.updateTaxExemption

Updates only fields supplied. Coverage is replaced as a whole and requires expected_version. Null clears optional description, certificate_number, evidence_reference and end_date. Metadata merges by key; null values remove individual keys and a null map clears caller-owned metadata. Expired and archived records reject edits with ACTION_NOT_ALLOWED and reason terminal_status. A stale expected_version returns VERSION_CONFLICT before effects. Retry a lost response with the same request and Idempotency-Key. If IDEMPOTENCY_RECOVERY_REQUIRED is returned, inspect this customer's list and GET records before sending a new write. Match a lost create against submitted fields across list pages; contact support with the original key and request ID if its outcome is unclear.

`PATCH /v1/customers/{customer_id}/tax-exemptions/{customer_tax_exemption_id}`

Signature: `updateTaxExemption(string|Model $customer_id, string|Model $customer_tax_exemption_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | Flint ID of the customer that owns this nested child. |
| `customer_tax_exemption_id` | Required | string | Flint customer tax exemption ID, prefixed ctex_. |
| `body` | Required | [UpdateCustomerTaxExemptionRequestInput](../models/UpdateCustomerTaxExemptionRequestInput.md#updatecustomertaxexemptionrequestinput) | Sparse patch. Omitted fields stay unchanged. Expired and archived records cannot be edited. A version fence alone is not a change. minProperties: `1`. |

Body model: [UpdateCustomerTaxExemptionRequestInput](../models/UpdateCustomerTaxExemptionRequestInput.md#updatecustomertaxexemptionrequestinput).

#### customers.updateTaxExemption body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `certificate_number` | Optional | string or null | Merchant's exemption certificate number. Null when none is recorded. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `coverage` | Optional | [CustomerTaxExemptionCoverageRequestInput](../models/CustomerTaxExemptionCoverageRequestInput.md#customertaxexemptioncoveragerequestinput) | Replaced as a whole: send every field you want to keep. Requires expected_version when present. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC. |
| `description` | Optional | string or null | Explanation of the exemption. Required for other. Null when none is recorded. Send null to clear it. minLength: `1`. maxLength: `500`. |
| `end_date` | Optional | string or null | Last day of the exemption, inclusive, in YYYY-MM-DD format. Null when the exemption has no end date. Send null to clear it. Format: `date`. minLength: `1`. |
| `evidence_reference` | Optional | string or null | Merchant-only reference to the supporting document. Never shown to buyers or printed on buyer documents. Null when none is recorded. Send null to clear it. minLength: `1`. maxLength: `1024`. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Required when replacing coverage; optional for other changes. Format: `uint64`. minimum: `1`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `reason` | Optional | string | Exemption reason. Other requires a description. Values: [13 declared values](../models/BuyerOrderTaxExemptionInput.md#buyerordertaxexemptioninput-reason-values). |
| `start_date` | Optional | string | First day of the exemption, inclusive, in YYYY-MM-DD format. May be up to 365 days in the future. Format: `date`. minLength: `1`. |

#### customers.updateTaxExemption: variant 1



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `certificate_number` | Optional | string or null | Merchant's exemption certificate number. Null when none is recorded. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `coverage` | Optional | [CustomerTaxExemptionCoverageRequestInput](../models/CustomerTaxExemptionCoverageRequestInput.md#customertaxexemptioncoveragerequestinput) | Replaced as a whole: send every field you want to keep. Requires expected_version when present. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC. |
| `description` | Optional | string or null | Explanation of the exemption. Required for other. Null when none is recorded. Send null to clear it. minLength: `1`. maxLength: `500`. |
| `end_date` | Optional | string or null | Last day of the exemption, inclusive, in YYYY-MM-DD format. Null when the exemption has no end date. Send null to clear it. Format: `date`. minLength: `1`. |
| `evidence_reference` | Optional | string or null | Merchant-only reference to the supporting document. Never shown to buyers or printed on buyer documents. Null when none is recorded. Send null to clear it. minLength: `1`. maxLength: `1024`. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Required when replacing coverage; optional for other changes. Format: `uint64`. minimum: `1`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `reason` | Required | string | Exemption reason. Other requires a description. Values: [13 declared values](../models/BuyerOrderTaxExemptionInput.md#buyerordertaxexemptioninput-reason-values). |
| `start_date` | Optional | string | First day of the exemption, inclusive, in YYYY-MM-DD format. May be up to 365 days in the future. Format: `date`. minLength: `1`. |

#### customers.updateTaxExemption: variant 2



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `certificate_number` | Optional | string or null | Merchant's exemption certificate number. Null when none is recorded. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `coverage` | Optional | [CustomerTaxExemptionCoverageRequestInput](../models/CustomerTaxExemptionCoverageRequestInput.md#customertaxexemptioncoveragerequestinput) | Replaced as a whole: send every field you want to keep. Requires expected_version when present. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC. |
| `description` | Required | string or null | Explanation of the exemption. Required for other. Null when none is recorded. Send null to clear it. minLength: `1`. maxLength: `500`. |
| `end_date` | Optional | string or null | Last day of the exemption, inclusive, in YYYY-MM-DD format. Null when the exemption has no end date. Send null to clear it. Format: `date`. minLength: `1`. |
| `evidence_reference` | Optional | string or null | Merchant-only reference to the supporting document. Never shown to buyers or printed on buyer documents. Null when none is recorded. Send null to clear it. minLength: `1`. maxLength: `1024`. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Required when replacing coverage; optional for other changes. Format: `uint64`. minimum: `1`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `reason` | Optional | string | Exemption reason. Other requires a description. Values: [13 declared values](../models/BuyerOrderTaxExemptionInput.md#buyerordertaxexemptioninput-reason-values). |
| `start_date` | Optional | string | First day of the exemption, inclusive, in YYYY-MM-DD format. May be up to 365 days in the future. Format: `date`. minLength: `1`. |

#### customers.updateTaxExemption: variant 3



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `certificate_number` | Optional | string or null | Merchant's exemption certificate number. Null when none is recorded. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `coverage` | Required | [CustomerTaxExemptionCoverageRequestInput](../models/CustomerTaxExemptionCoverageRequestInput.md#customertaxexemptioncoveragerequestinput) | Replaced as a whole: send every field you want to keep. Requires expected_version when present. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC. |
| `description` | Optional | string or null | Explanation of the exemption. Required for other. Null when none is recorded. Send null to clear it. minLength: `1`. maxLength: `500`. |
| `end_date` | Optional | string or null | Last day of the exemption, inclusive, in YYYY-MM-DD format. Null when the exemption has no end date. Send null to clear it. Format: `date`. minLength: `1`. |
| `evidence_reference` | Optional | string or null | Merchant-only reference to the supporting document. Never shown to buyers or printed on buyer documents. Null when none is recorded. Send null to clear it. minLength: `1`. maxLength: `1024`. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Required when replacing coverage; optional for other changes. Format: `uint64`. minimum: `1`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `reason` | Optional | string | Exemption reason. Other requires a description. Values: [13 declared values](../models/BuyerOrderTaxExemptionInput.md#buyerordertaxexemptioninput-reason-values). |
| `start_date` | Optional | string | First day of the exemption, inclusive, in YYYY-MM-DD format. May be up to 365 days in the future. Format: `date`. minLength: `1`. |

#### customers.updateTaxExemption: variant 4



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `certificate_number` | Required | string or null | Merchant's exemption certificate number. Null when none is recorded. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `coverage` | Optional | [CustomerTaxExemptionCoverageRequestInput](../models/CustomerTaxExemptionCoverageRequestInput.md#customertaxexemptioncoveragerequestinput) | Replaced as a whole: send every field you want to keep. Requires expected_version when present. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC. |
| `description` | Optional | string or null | Explanation of the exemption. Required for other. Null when none is recorded. Send null to clear it. minLength: `1`. maxLength: `500`. |
| `end_date` | Optional | string or null | Last day of the exemption, inclusive, in YYYY-MM-DD format. Null when the exemption has no end date. Send null to clear it. Format: `date`. minLength: `1`. |
| `evidence_reference` | Optional | string or null | Merchant-only reference to the supporting document. Never shown to buyers or printed on buyer documents. Null when none is recorded. Send null to clear it. minLength: `1`. maxLength: `1024`. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Required when replacing coverage; optional for other changes. Format: `uint64`. minimum: `1`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `reason` | Optional | string | Exemption reason. Other requires a description. Values: [13 declared values](../models/BuyerOrderTaxExemptionInput.md#buyerordertaxexemptioninput-reason-values). |
| `start_date` | Optional | string | First day of the exemption, inclusive, in YYYY-MM-DD format. May be up to 365 days in the future. Format: `date`. minLength: `1`. |

#### customers.updateTaxExemption: variant 5



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `certificate_number` | Optional | string or null | Merchant's exemption certificate number. Null when none is recorded. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `coverage` | Optional | [CustomerTaxExemptionCoverageRequestInput](../models/CustomerTaxExemptionCoverageRequestInput.md#customertaxexemptioncoveragerequestinput) | Replaced as a whole: send every field you want to keep. Requires expected_version when present. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC. |
| `description` | Optional | string or null | Explanation of the exemption. Required for other. Null when none is recorded. Send null to clear it. minLength: `1`. maxLength: `500`. |
| `end_date` | Optional | string or null | Last day of the exemption, inclusive, in YYYY-MM-DD format. Null when the exemption has no end date. Send null to clear it. Format: `date`. minLength: `1`. |
| `evidence_reference` | Required | string or null | Merchant-only reference to the supporting document. Never shown to buyers or printed on buyer documents. Null when none is recorded. Send null to clear it. minLength: `1`. maxLength: `1024`. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Required when replacing coverage; optional for other changes. Format: `uint64`. minimum: `1`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `reason` | Optional | string | Exemption reason. Other requires a description. Values: [13 declared values](../models/BuyerOrderTaxExemptionInput.md#buyerordertaxexemptioninput-reason-values). |
| `start_date` | Optional | string | First day of the exemption, inclusive, in YYYY-MM-DD format. May be up to 365 days in the future. Format: `date`. minLength: `1`. |

#### customers.updateTaxExemption: variant 6



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `certificate_number` | Optional | string or null | Merchant's exemption certificate number. Null when none is recorded. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `coverage` | Optional | [CustomerTaxExemptionCoverageRequestInput](../models/CustomerTaxExemptionCoverageRequestInput.md#customertaxexemptioncoveragerequestinput) | Replaced as a whole: send every field you want to keep. Requires expected_version when present. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC. |
| `description` | Optional | string or null | Explanation of the exemption. Required for other. Null when none is recorded. Send null to clear it. minLength: `1`. maxLength: `500`. |
| `end_date` | Optional | string or null | Last day of the exemption, inclusive, in YYYY-MM-DD format. Null when the exemption has no end date. Send null to clear it. Format: `date`. minLength: `1`. |
| `evidence_reference` | Optional | string or null | Merchant-only reference to the supporting document. Never shown to buyers or printed on buyer documents. Null when none is recorded. Send null to clear it. minLength: `1`. maxLength: `1024`. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Required when replacing coverage; optional for other changes. Format: `uint64`. minimum: `1`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `reason` | Optional | string | Exemption reason. Other requires a description. Values: [13 declared values](../models/BuyerOrderTaxExemptionInput.md#buyerordertaxexemptioninput-reason-values). |
| `start_date` | Required | string | First day of the exemption, inclusive, in YYYY-MM-DD format. May be up to 365 days in the future. Format: `date`. minLength: `1`. |

#### customers.updateTaxExemption: variant 7



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `certificate_number` | Optional | string or null | Merchant's exemption certificate number. Null when none is recorded. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `coverage` | Optional | [CustomerTaxExemptionCoverageRequestInput](../models/CustomerTaxExemptionCoverageRequestInput.md#customertaxexemptioncoveragerequestinput) | Replaced as a whole: send every field you want to keep. Requires expected_version when present. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC. |
| `description` | Optional | string or null | Explanation of the exemption. Required for other. Null when none is recorded. Send null to clear it. minLength: `1`. maxLength: `500`. |
| `end_date` | Required | string or null | Last day of the exemption, inclusive, in YYYY-MM-DD format. Null when the exemption has no end date. Send null to clear it. Format: `date`. minLength: `1`. |
| `evidence_reference` | Optional | string or null | Merchant-only reference to the supporting document. Never shown to buyers or printed on buyer documents. Null when none is recorded. Send null to clear it. minLength: `1`. maxLength: `1024`. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Required when replacing coverage; optional for other changes. Format: `uint64`. minimum: `1`. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `reason` | Optional | string | Exemption reason. Other requires a description. Values: [13 declared values](../models/BuyerOrderTaxExemptionInput.md#buyerordertaxexemptioninput-reason-values). |
| `start_date` | Optional | string | First day of the exemption, inclusive, in YYYY-MM-DD format. May be up to 365 days in the future. Format: `date`. minLength: `1`. |

#### customers.updateTaxExemption: variant 8



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `certificate_number` | Optional | string or null | Merchant's exemption certificate number. Null when none is recorded. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `coverage` | Optional | [CustomerTaxExemptionCoverageRequestInput](../models/CustomerTaxExemptionCoverageRequestInput.md#customertaxexemptioncoveragerequestinput) | Replaced as a whole: send every field you want to keep. Requires expected_version when present. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC. |
| `description` | Optional | string or null | Explanation of the exemption. Required for other. Null when none is recorded. Send null to clear it. minLength: `1`. maxLength: `500`. |
| `end_date` | Optional | string or null | Last day of the exemption, inclusive, in YYYY-MM-DD format. Null when the exemption has no end date. Send null to clear it. Format: `date`. minLength: `1`. |
| `evidence_reference` | Optional | string or null | Merchant-only reference to the supporting document. Never shown to buyers or printed on buyer documents. Null when none is recorded. Send null to clear it. minLength: `1`. maxLength: `1024`. |
| `expected_version` | Optional | integer | Resource version last read by the caller. Required when replacing coverage; optional for other changes. Format: `uint64`. minimum: `1`. |
| `metadata` | Required | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `reason` | Optional | string | Exemption reason. Other requires a description. Values: [13 declared values](../models/BuyerOrderTaxExemptionInput.md#buyerordertaxexemptioninput-reason-values). |
| `start_date` | Optional | string | First day of the exemption, inclusive, in YYYY-MM-DD format. May be up to 365 days in the future. Format: `date`. minLength: `1`. |

#### Response

Returned payload: [CustomerTaxExemption](../models/CustomerTaxExemption.md#customertaxexemption).

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

$result = $client->customers->updateTaxExemption('cus_01ARZ3NDEKTSV4RRFFQ69G5FAV', 'ctex_01ARZ3NDEKTSV4RRFFQ69G5FAV', [
  'description' => 'Example exemption',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customers-updateTaxExemption.php)

