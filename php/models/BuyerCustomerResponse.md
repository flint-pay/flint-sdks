[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCustomerResponse

A response containing `BuyerCustomer` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerCustomer](../models/BuyerCustomer.md#buyercustomer) | Resource, collection, or operation result returned by this request. A merchant's customer profile. `data`: [field definitions](../models/BuyerCustomerResponse.md#buyercustomerresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerCustomerResponse.data

Resource, collection, or operation result returned by this request. A merchant's customer profile.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Required | [Address](../models/Address.md#address) or null | The customer's default billing address: a copy of the saved address marked is_default_billing. Read-only; change it with is_default_billing through /v1/me/addresses. `null` when no saved address is the billing default. `billing_address`: [declared alternatives](../models/BuyerCustomerResponse.md#buyercustomerresponsedatabilling_address). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Required | string | Unique identifier for this customer, prefixed `cus_`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `default_payment_method_id` | Required | string or null | ID of the customer's default off-session payment method. `null` when none is set. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |
| `email` | Required | string or null | Customer email. `null` when the customer has none. Unique among the environment's customers. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `name` | Required | string or null | Customer name. `null` when none is set. |
| `phone` | Required | string or null | Customer phone number. `null` when none is set. |
| `shipping_address` | Required | [Address](../models/Address.md#address) or null | The customer's default shipping address: a copy of the saved address marked is_default_shipping. Read-only; change it with is_default_shipping through /v1/me/addresses. `null` when no saved address is the shipping default. `shipping_address`: [declared alternatives](../models/BuyerCustomerResponse.md#buyercustomerresponsedatashipping_address). |
| `status` | Required | string | Where the customer is in the deletion lifecycle. Values: `"active"`, `"deletion_processing"`, `"deleted"`. |
| `tax_identity` | Required | null | `null` when the caller is a customer session, which never sees the tax identity. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `uint64`. minimum: `1`. |

### BuyerCustomerResponse.data.billing_address

The customer's default billing address: a copy of the saved address marked is_default_billing. Read-only; change it with is_default_billing through /v1/me/addresses. `null` when no saved address is the billing default.

Field definitions: [shared fields](SubscriptionResponse.md#subscriptionresponsedatadeliverydestinationaddress).

### BuyerCustomerResponse.data.billing_address variant 1

anyOf Address: A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country..

- Required: `country`.
- Optional: `city`, `line1`, `line2`, `postal_code`, `state`.

### BuyerCustomerResponse.data.billing_address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. The customer's default billing address: a copy of the saved address marked is_default_billing. Read-only; change it with is_default_billing through /v1/me/addresses. `null` when no saved address is the billing default. 

### BuyerCustomerResponse.data.shipping_address

The customer's default shipping address: a copy of the saved address marked is_default_shipping. Read-only; change it with is_default_shipping through /v1/me/addresses. `null` when no saved address is the shipping default.

Field definitions: [shared fields](SubscriptionResponse.md#subscriptionresponsedatadeliverydestinationaddress).

### BuyerCustomerResponse.data.shipping_address variant 1

anyOf Address: A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country..

- Required: `country`.
- Optional: `city`, `line1`, `line2`, `postal_code`, `state`.

### BuyerCustomerResponse.data.shipping_address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. The customer's default shipping address: a copy of the saved address marked is_default_shipping. Read-only; change it with is_default_shipping through /v1/me/addresses. `null` when no saved address is the shipping default. 

### BuyerCustomerResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

