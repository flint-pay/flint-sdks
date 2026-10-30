[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxConnection

The environment's automatic sales tax connection. Before a record exists, identity, version and timestamps are omitted. Read-time business-detail changes and provider pauses do not advance version or send webhooks. Status_reason and supported_actions can also change with the clock as registrations end, without a version change or webhook.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `business_address` | Optional | [Address](../models/Address.md#address) | Verified business address that connect will use as the tax origin, or the address copied to the connected account. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `business_address`: [field definitions](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1objectbusiness_address). |
| `business_name` | Optional | string | Verified legal business name that connect will use, or the name copied to the connected account. |
| `created_at` | Optional | string | When the connection record was created. Format: `date-time`. |
| `disclosure` | Required | [TaxConnectionDisclosure](../models/TaxConnectionDisclosure.md#taxconnectiondisclosure) | Current statements the seller must agree to before connecting. Ordered seller disclosure rendered with the merchant's effective automatic tax fee. |
| `seller_attestation` | Required | [TaxConnectionSellerAttestation](../models/TaxConnectionSellerAttestation.md#taxconnectionsellerattestation) or null | Recorded seller agreement, or null before a connect records one. |
| `status` | Required | string | Whether automatic tax is connected and can calculate tax. Values: `"not_connected"`, `"provisioning"`, `"active"`, `"attention_required"`, `"disabled"`. |
| `status_reason` | Required | string or null | Machine-readable detail for not_connected or attention_required, or null when no reason applies. Unknown reasons normalize to other. Values: [12 declared values](TaxConnectionInput.md#taxconnectioninput-status_reason-values). |
| `supported_actions` | Required | Array of string | Lists connect when setup can complete and disconnect when automatic tax can be turned off, for credentials that can write settings; otherwise empty. Webhook snapshots describe the connection state independently of a receiving credential. Items values: `"connect"`, `"disconnect"`. |
| `tax_connection_id` | Optional | string | Flint tax connection ID. Present once the first registration or connection creates a record. |
| `updated_at` | Optional | string | When the connection record's public state last changed. Format: `date-time`. |
| `version` | Optional | integer | Current resource version. Send as expected_version to reject a write based on an older version. Format: `uint64`. minimum: `1`. |

### TaxConnection.business_address

Field definitions: [TaxConnectionUpdatedEvent.data fields 1.object.business_address](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1objectbusiness_address).

