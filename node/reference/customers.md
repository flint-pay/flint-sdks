[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# customers

### customers.create

Creates a customer for the authenticated merchant.

`POST /v1/customers`

Signature: `create(params: (InputValue<CreateCustomerRequestInput>) & { "Idempotency-Key"?: InputValue<string> }, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateCustomerRequestInput](../models/CreateCustomerRequest.md#createcustomerrequest) | The request body for: Create customer. |

Body model: [CreateCustomerRequestInput](../models/CreateCustomerRequest.md#createcustomerrequest).

#### customers.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Optional | [AddressRequestInput](../models/AddressRequest.md#addressrequest) | A postal address you supply when creating or updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to clear it. |
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
| `shipping_address` | Optional | [AddressRequestInput](../models/AddressRequest.md#addressrequest) | A postal address you supply when creating or updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to clear it. |
| `tax_exempt` | Optional | boolean |  |
| `tax_identity` | Optional | [TaxIdentityRequestInput](../models/TaxIdentityRequestInput.md#taxidentityrequestinput) | Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one. |

#### Response

Returned payload: [Customer](../models/Customer.md#customer) | [Customer](../models/Customer.md#customer).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.customers.create({}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/customers-create.mjs)

### customers.createAccessLink

Signs the buyer in to your Flint-hosted customer account as this customer. Works for 15 minutes and one open. The url is a bearer credential. Flint returns it only in this response and in a retry with the same Idempotency-Key, so send it only to the buyer and keep it out of logs. A call with a new key creates another link; earlier links keep working until they expire. Send no request body or an empty object ({}). Requires customers.sessions.write. Idempotency is scoped to the merchant, credential, environment, and this customer's route. A replay returns the original link without extending its lifetime or replenishing its open. Without an Idempotency-Key, each call creates a new link and has no replay result. If Flint cannot retain a result after minting, contact support with X-Request-Id before sending a new request.

`POST /v1/customers/{customer_id}/access-links`

Signature:

```typescript
createAccessLink(customer_id: InputValue<string>,
 params?: (InputValue<{
}> | {
}) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | object | maxProperties: `0`. |

Body shape: object.

#### Response

Returned payload: [AccessLink](../models/AccessLink.md#accesslink).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.customers.createAccessLink("example", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/customers-createAccessLink.mjs)

### customers.createAddress

Creates a stable saved address. The address becomes a default only when the request sets is_default_billing or is_default_shipping, or later through set-default, including the customer's first address. A saved default becomes the customer's effective address for the corresponding role.

`POST /v1/customers/{customer_id}/addresses`

Signature:

```typescript
createAddress(customer_id: InputValue<string>,
 params: (InputValue<CreateCustomerAddressRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateCustomerAddressRequestInput](../models/CreateCustomerAddressRequest.md#createcustomeraddressrequest) | The request body for: Create a customer address; Create an address for the current buyer. |

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.customers.createAddress("example", {address: {city: "example", country: "US", line1: "example", postal_code: "example", state: "example"}, recipient_name: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/customers-createAddress.mjs)

### customers.createDeletionRequest

Creates a deletion request for merchant review, or returns the customer's open request unchanged. No deletion work starts until approval.

`POST /v1/customer-deletion-requests`

Signature:

```typescript
createDeletionRequest(params: (InputValue<CreateCustomerDeletionRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateCustomerDeletionRequestInput](../models/CreateCustomerDeletionRequest.md#createcustomerdeletionrequest) | The request body for: Request customer account deletion. |

Body model: [CreateCustomerDeletionRequestInput](../models/CreateCustomerDeletionRequest.md#createcustomerdeletionrequest).

#### customers.createDeletionRequest body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | Flint customer ID of the customer to delete. minLength: `1`. |

#### Response

Returned payload: [CustomerDeletionRequest](../models/CustomerDeletionRequest.md#customerdeletionrequest) | [CustomerDeletionRequest](../models/CustomerDeletionRequest.md#customerdeletionrequest).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.customers.createDeletionRequest({customer_id: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/customers-createDeletionRequest.mjs)

### customers.deleteAddress

Deletes a saved address and moves any default designation to the newest remaining address.

`DELETE /v1/customers/{customer_id}/addresses/{customer_address_id}`

Signature:

```typescript
deleteAddress(customer_id: InputValue<string>,
 customer_address_id: InputValue<string>,
 params?: {
  "expected_version"?: InputValue<`${bigint}` | bigint>;
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `customer_address_id` | Required | string |  |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.customers.deleteAddress("example", "example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/customers-deleteAddress.mjs)

### customers.get

Returns a single customer by ID.

`GET /v1/customers/{customer_id}`

Signature:

```typescript
get(customer_id: InputValue<string>,
 params?: {
  "expand"?: InputValue<Array<"default_payment_method" | "receivables">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.customers.get("example", {}, {  });
```

[Complete runnable example](../examples/customers-get.mjs)

### customers.getAddress

Returns one saved address owned by the customer.

`GET /v1/customers/{customer_id}/addresses/{customer_address_id}`

Signature:

```typescript
getAddress(customer_id: InputValue<string>,
 customer_address_id: InputValue<string>,
 params?: {
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.customers.getAddress("example", "example", {}, {  });
```

[Complete runnable example](../examples/customers-getAddress.mjs)

### customers.getDeletionRequest

Returns the current status of a tracked deletion request.

`GET /v1/customer-deletion-requests/{customer_deletion_request_id}`

Signature:

```typescript
getDeletionRequest(customer_deletion_request_id: InputValue<string>,
 params?: {
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_deletion_request_id` | Required | string |  |

#### Response

Returned payload: [CustomerDeletionRequest](../models/CustomerDeletionRequest.md#customerdeletionrequest).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.customers.getDeletionRequest("example", {}, {  });
```

[Complete runnable example](../examples/customers-getDeletionRequest.mjs)

### customers.linkGuestPurchases

Links purchases with the verified email and no customer to the verification's customer in the same merchant environment. Purchases bound to another customer stay with that customer. The verification is single use; use the same Idempotency-Key to retry an uncertain result.

`POST /v1/customers/{customer_id}/link-guest-purchases`

Signature:

```typescript
linkGuestPurchases(customer_id: InputValue<string>,
 params: (InputValue<LinkCustomerGuestPurchasesRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [LinkCustomerGuestPurchasesRequestInput](../models/LinkCustomerGuestPurchasesRequest.md#linkcustomerguestpurchasesrequest) | The request body for: Link guest purchases to a customer. |

Body model: [LinkCustomerGuestPurchasesRequestInput](../models/LinkCustomerGuestPurchasesRequest.md#linkcustomerguestpurchasesrequest).

#### customers.linkGuestPurchases body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_verification_id` | Required | string | minLength: `1`. |

#### Response

Returned payload: [GuestPurchaseLink](../models/GuestPurchaseLink.md#guestpurchaselink).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.customers.linkGuestPurchases("example", {customer_verification_id: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/customers-linkGuestPurchases.mjs)

### customers.list

Returns a paginated list of customers for the authenticated merchant. Without a status filter, returns active and deletion_processing customers; deleted customers appear only when the filter names deleted.

`GET /v1/customers`

Signature:

```typescript
list(params?: {
  "status"?: InputValue<Array<"active" | "deletion_processing" | "deleted">>;
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "query"?: InputValue<string>;
  "external_reference_id"?: InputValue<string>;
  "email"?: InputValue<string>;
  "segment"?: InputValue<string>;
  "is_merchant_verified"?: InputValue<boolean>;
  "phone"?: InputValue<string>;
  "sort_by"?: InputValue<"name" | "email" | "created_at" | "updated_at">;
  "sort_direction"?: InputValue<"asc" | "desc">;
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>;
  "updated_after"?: InputValue<string | globalThis.Date>;
  "updated_before"?: InputValue<string | globalThis.Date>;
  "expand"?: InputValue<Array<"default_payment_method" | "receivables">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

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

Returned payload: [CustomerListResponse](../models/CustomerListResponse.md#customerlistresponse).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.customers.list({}, {  });
```

[Complete runnable example](../examples/customers-list.mjs)

### customers.listAddresses

Lists the customer's saved addresses with billing and shipping default flags.

`GET /v1/customers/{customer_id}/addresses`

Signature:

```typescript
listAddresses(customer_id: InputValue<string>,
 params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |

#### Response

Returned payload: [CustomerAddressListResponse](../models/CustomerAddressListResponse.md#customeraddresslistresponse).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listAddressesItems`, `listAddressesPages`, `listAddressesPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.customers.listAddresses("example", {}, {  });
```

[Complete runnable example](../examples/customers-listAddresses.mjs)

### customers.revokeSessions

Revokes every customer session for one customer in the selected merchant environment. Flint Account buyer sessions remain independent.

`POST /v1/customers/{customer_id}/sessions/revoke`

Signature: `revokeSessions(customer_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string> }, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |

#### Response

Returned payload: [CustomerSessionsRevocation](../models/CustomerSessionsRevocation.md#customersessionsrevocation).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.customers.revokeSessions("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/customers-revokeSessions.mjs)

### customers.setDefaultAddress

Sets the address as the billing default, shipping default, or both and makes it the customer's effective address for each selected role.

`POST /v1/customers/{customer_id}/addresses/{customer_address_id}/set-default`

Signature:

```typescript
setDefaultAddress(customer_id: InputValue<string>,
 customer_address_id: InputValue<string>,
 params: (InputValue<SetDefaultCustomerAddressRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `customer_address_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [SetDefaultCustomerAddressRequestInput](../models/SetDefaultCustomerAddressRequest.md#setdefaultcustomeraddressrequest) | The request body for: Set a default address for the current buyer; Set a default customer address. |

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.customers.setDefaultAddress("example", "example", {default_for: "billing"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/customers-setDefaultAddress.mjs)

### customers.update

Applies a sparse update to a customer. Writing billing_address or shipping_address clears the corresponding saved-address default, so that field remains effective until another saved default is selected. Changing email requires customer_account.mode to be merchant_hosted; otherwise Flint returns 409 CUSTOMER_EMAIL_BUYER_MANAGED. If Flint cannot read the account settings, it returns a retryable 503 SERVICE_UNAVAILABLE without changing the customer.

`PATCH /v1/customers/{customer_id}`

Signature:

```typescript
update(customer_id: InputValue<string>,
 params: (InputValue<UpdateCustomerRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateCustomerRequestInput](../models/UpdateCustomerRequest.md#updatecustomerrequest) | The request body for: Update customer. |

Body model: [UpdateCustomerRequestInput](../models/UpdateCustomerRequest.md#updatecustomerrequest).

#### customers.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Optional | [AddressRequestInput](../models/AddressRequest.md#addressrequest) or null | Billing address. Omit to leave unchanged; null clears it. Writing or clearing it also clears the saved billing-address default. |
| `default_invoice_payment_term_id` | Optional | string or null | Default payment term for this customer's invoices. Send null to clear it. minLength: `1`. |
| `default_payment_method_id` | Optional | string or null | The active off_session payment method to use by default. Omit to leave unchanged; null clears it. A change sends customer.updated. minLength: `1`. |
| `email` | Optional | string or null | The customer's email. Omit to leave unchanged; null clears it. Changing it is allowed only when your store hosts its own customer accounts (`customer_account.mode` is `merchant_hosted`). Format: `email`. minLength: `1`. maxLength: `320`. |
| `expected_version` | Optional | integer string | Required when tax_identity is null or tax_identity.tax_ids is present. Stale versions return a conflict. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Omit to leave unchanged; null clears it. minLength: `1`. maxLength: `255`. |
| `internal_note` | Optional | string or null | Internal note about this customer. Omit to leave unchanged; null clears it. minLength: `1`. |
| `is_merchant_verified` | Optional | boolean | Flag you set on the customer, for example after checking ID in store. Promotion and delivery rules can match it. Flint does not set it; it is unrelated to customer verifications, which prove a buyer controls an email address. |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Optional | string or null | Customer name. Omit to leave unchanged; null clears it. minLength: `1`. |
| `phone` | Optional | string or null | Customer phone number. Omit to leave unchanged; null clears it. minLength: `1`. |
| `segment` | Optional | string or null | Free-form label you assign, such as wholesale, so promotion and delivery rules can match groups of customers. It is not an ID; Flint does not check it against any resource. Omit to leave unchanged; null clears it. minLength: `1`. |
| `shipping_address` | Optional | [AddressRequestInput](../models/AddressRequest.md#addressrequest) or null | Shipping address. Omit to leave unchanged; null clears it. Writing or clearing it also clears the saved shipping-address default. |
| `tax_exempt` | Optional | boolean |  |
| `tax_identity` | Optional | [TaxIdentityPatchInput](../models/TaxIdentityRequestInput.md#taxidentityrequestinput) or null |  |

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.customers.update("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/customers-update.mjs)

### customers.updateAddress

Applies a sparse update to a saved address. Updating a default address also updates the customer's effective address for that role.

`PATCH /v1/customers/{customer_id}/addresses/{customer_address_id}`

Signature:

```typescript
updateAddress(customer_id: InputValue<string>,
 customer_address_id: InputValue<string>,
 params: (InputValue<UpdateCustomerAddressRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `customer_address_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateCustomerAddressRequestInput](../models/UpdateCustomerAddressRequest.md#updatecustomeraddressrequest) | The request body for: Update a customer address; Update one of the current buyer's addresses. minProperties: `1`. |

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.customers.updateAddress("example", "example", {address: {city: "example", country: "US", line1: "example", postal_code: "example", state: "example"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/customers-updateAddress.mjs)

