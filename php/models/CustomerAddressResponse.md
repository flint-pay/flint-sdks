[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerAddressResponse

A response containing `CustomerAddress` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CustomerAddress](../models/CustomerAddress.md#customeraddress) | Resource, collection, or operation result returned by this request. An address saved on a customer's profile. `data`: [field definitions](../models/CustomerAddressResponse.md#customeraddressresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CustomerAddressResponse.data

Resource, collection, or operation result returned by this request. An address saved on a customer's profile.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [Address](../models/Address.md#address) | The postal address. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `address`: [field definitions](../models/CustomerAddressResponse.md#customeraddressresponsedataaddress). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_address_id` | Required | string | Unique identifier for this customer address, prefixed `caddr_`. Example: `"caddr_01KEZF7C00K2Q127FBJAXWB0FP"`. |
| `customer_id` | Required | string | ID of the customer this address belongs to. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `is_default_billing` | Required | boolean | Whether this is the customer's default billing address. At most one saved address holds each default. |
| `is_default_shipping` | Required | boolean | Whether this is the customer's default shipping address. At most one saved address holds each default. |
| `label` | Optional | string | Limited to 100 characters (Unicode code points). maxLength: `100`. |
| `phone` | Optional | string | E.164 phone number. Limited to 30 characters (Unicode code points). maxLength: `30`. |
| `recipient_name` | Required | string | Limited to 255 characters (Unicode code points). maxLength: `255`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `uint64`. minimum: `1`. |

### CustomerAddressResponse.data.address

The postal address. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.

Field definitions: [shared fields](AddressInput.md#addressinput).

### CustomerAddressResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

