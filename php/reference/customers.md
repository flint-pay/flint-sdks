[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# customers

### customers.create

Creates a customer for the authenticated merchant.

`POST /v1/customers`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateCustomerRequestInput](../models/CreateCustomerRequestInput.md#createcustomerrequestinput) | The request body for: Create customer. |

Body model: [CreateCustomerRequestInput](../models/CreateCustomerRequestInput.md#createcustomerrequestinput).

#### customers.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Optional | [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput) | A postal address you supply when creating or updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to clear it. |
| `default_invoice_payment_term_id` | Optional | string | minLength: `1`. |
| `email` | Optional | string | Format: `email`. minLength: `1`. maxLength: `320`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `internal_note` | Optional | string | minLength: `1`. |
| `is_merchant_verified` | Optional | boolean | Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Optional | string | minLength: `1`. |
| `on_email_conflict` | Optional | string | What to do when an active customer in this environment already has `email`. `error` returns `409 ALREADY_EXISTS` naming that customer. `return_existing` returns that customer unchanged with `200` instead of creating one; it requires `email`. Emails match case-insensitively. Default: `"error"`. Values: `"error"`, `"return_existing"`. |
| `phone` | Optional | string | minLength: `1`. |
| `segment` | Optional | string | Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. minLength: `1`. |
| `shipping_address` | Optional | [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput) | A postal address you supply when creating or updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to clear it. |
| `tax_exempt` | Optional | boolean |  |
| `tax_identity` | Optional | [TaxIdentityRequestInput](../models/TaxIdentityPatchInput.md#taxidentitypatchinput) | Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one. |

#### Response

Returned payload: [Customer](../models/Customer.md#customer).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->customers->create([], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customers-create.php)

### customers.createAccessLink

Signs the buyer in to your Flint-hosted customer account as this customer. Works for 15 minutes and one open. The url is a bearer credential. Flint returns it only in this response and in a retry with the same Idempotency-Key, so send it only to the buyer and keep it out of logs. A call with a new key creates another link; earlier links keep working until they expire. Send no request body or an empty object ({}). Requires customers.sessions.write. Idempotency is scoped to the merchant, credential, environment, and this customer's route. A replay returns the original link without extending its lifetime or replenishing its open. Without an Idempotency-Key, each call creates a new link and has no replay result. If Flint cannot retain a result after minting, contact support with X-Request-Id before sending a new request.

`POST /v1/customers/{customer_id}/access-links`

Signature: `createAccessLink(string|Model $customer_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createAccessLinkWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->customers->createAccessLink('example', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customers-createAccessLink.php)

### customers.createAddress

Creates a stable saved address. The address becomes a default only when the request sets is_default_billing or is_default_shipping, or later through set-default, including the customer's first address. A saved default becomes the customer's effective address for the corresponding role.

`POST /v1/customers/{customer_id}/addresses`

Signature: `createAddress(string|Model $customer_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateCustomerAddressRequestInput](../models/CreateCustomerAddressRequestInput.md#createcustomeraddressrequestinput) | The request body for: Create a customer address; Create an address for the current buyer. |

#### Response

Returned payload: [CustomerAddress](../models/CustomerAddress.md#customeraddress).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createAddressWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->customers->createAddress('example', [
  'address' => (object) [
    'city' => 'example',
    'country' => 'US',
    'line1' => 'example',
    'postal_code' => 'example',
    'state' => 'example',
  ],
  'recipient_name' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customers-createAddress.php)

### customers.createDeletionRequest

Creates a deletion request for merchant review, or returns the customer's open request unchanged. No deletion work starts until approval.

`POST /v1/customer-deletion-requests`

Signature: `createDeletionRequest(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateCustomerDeletionRequestInput](../models/CreateCustomerDeletionRequestInput.md#createcustomerdeletionrequestinput) | The request body for: Request customer account deletion. |

Body model: [CreateCustomerDeletionRequestInput](../models/CreateCustomerDeletionRequestInput.md#createcustomerdeletionrequestinput).

#### customers.createDeletionRequest body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | Flint customer ID of the customer to delete. minLength: `1`. |

#### Response

Returned payload: [CustomerDeletionRequest](../models/CustomerDeletionRequestInput.md#customerdeletionrequestinput).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createDeletionRequestWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->customers->createDeletionRequest([
  'customer_id' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customers-createDeletionRequest.php)

### customers.deleteAddress

Deletes a saved address and moves any default designation to the newest remaining address.

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
| `customer_id` | Required | string |  |
| `customer_address_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [CustomerAddress](../models/CustomerAddress.md#customeraddress).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `deleteAddressWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->customers->deleteAddress('example', 'example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customers-deleteAddress.php)

### customers.get

Returns a single customer by ID.

`GET /v1/customers/{customer_id}`

Signature: `get(string|Model $customer_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `expand` | Optional | Array of string | Items values: `"default_payment_method"`, `"receivables"`. |

#### Response

Returned payload: [Customer](../models/Customer.md#customer).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->customers->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/customers-get.php)

### customers.getAddress

Returns one saved address owned by the customer.

`GET /v1/customers/{customer_id}/addresses/{customer_address_id}`

Signature: `getAddress(string|Model $customer_id, string|Model $customer_address_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `customer_address_id` | Required | string |  |

#### Response

Returned payload: [CustomerAddress](../models/CustomerAddress.md#customeraddress).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getAddressWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->customers->getAddress('example', 'example', [], new RequestOptions());
```

[Complete runnable example](../examples/customers-getAddress.php)

### customers.getDeletionRequest

Returns the current status of a tracked deletion request.

`GET /v1/customer-deletion-requests/{customer_deletion_request_id}`

Signature: `getDeletionRequest(string|Model $customer_deletion_request_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_deletion_request_id` | Required | string |  |

#### Response

Returned payload: [CustomerDeletionRequest](../models/CustomerDeletionRequestInput.md#customerdeletionrequestinput).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getDeletionRequestWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->customers->getDeletionRequest('example', [], new RequestOptions());
```

[Complete runnable example](../examples/customers-getDeletionRequest.php)

### customers.linkGuestPurchases

Links purchases with the verified email and no customer to the verification's customer in the same merchant environment. Purchases bound to another customer stay with that customer. The verification is single use; use the same Idempotency-Key to retry an uncertain result.

`POST /v1/customers/{customer_id}/link-guest-purchases`

Signature: `linkGuestPurchases(string|Model $customer_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [LinkCustomerGuestPurchasesRequestInput](../models/LinkCustomerGuestPurchasesRequestInput.md#linkcustomerguestpurchasesrequestinput) | The request body for: Link guest purchases to a customer. |

Body model: [LinkCustomerGuestPurchasesRequestInput](../models/LinkCustomerGuestPurchasesRequestInput.md#linkcustomerguestpurchasesrequestinput).

#### customers.linkGuestPurchases body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_verification_id` | Required | string | minLength: `1`. |

#### Response

Returned payload: [GuestPurchaseLink](../models/GuestPurchaseLinkInput.md#guestpurchaselinkinput).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `linkGuestPurchasesWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->customers->linkGuestPurchases('example', [
  'customer_verification_id' => 'example',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customers-linkGuestPurchases.php)

### customers.list

Returns a paginated list of customers for the authenticated merchant. Without a status filter, returns active and deletion_processing customers; deleted customers appear only when the filter names deleted.

`GET /v1/customers`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"active"`, `"deletion_processing"`, `"deleted"`. |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `query` | Optional | string |  |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `email` | Optional | string |  |
| `segment` | Optional | string | minLength: `1`. maxLength: `255`. |
| `is_merchant_verified` | Optional | boolean |  |
| `phone` | Optional | string | minLength: `1`. pattern: `^\+[1-9][0-9]{1,14}$`. |
| `sort_by` | Optional | string | Default: `"created_at"`. Values: `"name"`, `"email"`, `"created_at"`, `"updated_at"`. |
| `sort_direction` | Optional | string | Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `updated_after` | Optional | string | Format: `date-time`. |
| `updated_before` | Optional | string | Format: `date-time`. |
| `expand` | Optional | Array of string | Items values: `"default_payment_method"`, `"receivables"`. |

#### Response

Returned payload: [CustomersListResponse200](../models/CustomersListResponse200.md#customerslistresponse200).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->customers->list([], new RequestOptions());
```

[Complete runnable example](../examples/customers-list.php)

### customers.listAddresses

Lists the customer's saved addresses with billing and shipping default flags.

`GET /v1/customers/{customer_id}/addresses`

Signature: `listAddresses(string|Model $customer_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |

#### Response

Returned payload: [CustomersListAddressesResponse200](../models/CustomersListAddressesResponse200.md#customerslistaddressesresponse200).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listAddressesWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listAddressesItems`, `listAddressesPages`, `listAddressesPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->customers->listAddresses('example', [], new RequestOptions());
```

[Complete runnable example](../examples/customers-listAddresses.php)

### customers.revokeSessions

Revokes every customer session for one customer in the selected merchant environment. Flint Account buyer sessions remain independent.

`POST /v1/customers/{customer_id}/sessions/revoke`

Signature: `revokeSessions(string|Model $customer_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [CustomerSessionsRevocation](../models/CustomerSessionsRevocationInput.md#customersessionsrevocationinput).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `revokeSessionsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->customers->revokeSessions('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customers-revokeSessions.php)

### customers.setDefaultAddress

Sets the address as the billing default, shipping default, or both and makes it the customer's effective address for each selected role.

`POST /v1/customers/{customer_id}/addresses/{customer_address_id}/set-default`

Signature: `setDefaultAddress(string|Model $customer_id, string|Model $customer_address_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `customer_address_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [SetDefaultCustomerAddressRequestInput](../models/SetDefaultCustomerAddressRequestInput.md#setdefaultcustomeraddressrequestinput) | The request body for: Set a default address for the current buyer; Set a default customer address. |

#### Response

Returned payload: [CustomerAddress](../models/CustomerAddress.md#customeraddress).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `setDefaultAddressWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->customers->setDefaultAddress('example', 'example', [
  'default_for' => 'billing',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customers-setDefaultAddress.php)

### customers.update

Applies a sparse update to a customer. Writing billing_address or shipping_address clears the corresponding saved-address default, so that field remains effective until another saved default is selected. Changing email requires customer_account.mode to be merchant_hosted; otherwise Flint returns 409 CUSTOMER_EMAIL_BUYER_MANAGED. If Flint cannot read the account settings, it returns a retryable 503 SERVICE_UNAVAILABLE without changing the customer.

`PATCH /v1/customers/{customer_id}`

Signature: `update(string|Model $customer_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateCustomerRequestInput](../models/UpdateCustomerRequestInput.md#updatecustomerrequestinput) | The request body for: Update customer. |

Body model: [UpdateCustomerRequestInput](../models/UpdateCustomerRequestInput.md#updatecustomerrequestinput).

#### customers.update body fields

Field definitions: [shared fields](../models/UpdateCustomerRequestInput.md#updatecustomerrequestinput). Models: [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput), [TaxIdentityPatchInput](../models/TaxIdentityPatchInput.md#taxidentitypatchinput).

#### Response

Returned payload: [Customer](../models/Customer.md#customer).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->customers->update('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customers-update.php)

### customers.updateAddress

Applies a sparse update to a saved address. Updating a default address also updates the customer's effective address for that role.

`PATCH /v1/customers/{customer_id}/addresses/{customer_address_id}`

Signature: `updateAddress(string|Model $customer_id, string|Model $customer_address_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `customer_address_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateCustomerAddressRequestInput](../models/UpdateCustomerAddressRequestInput.md#updatecustomeraddressrequestinput) | The request body for: Update a customer address; Update one of the current buyer's addresses. minProperties: `1`. |

#### Response

Returned payload: [CustomerAddress](../models/CustomerAddress.md#customeraddress).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `updateAddressWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->customers->updateAddress('example', 'example', [
  'address' => (object) [
    'city' => 'example',
    'country' => 'US',
    'line1' => 'example',
    'postal_code' => 'example',
    'state' => 'example',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/customers-updateAddress.php)

