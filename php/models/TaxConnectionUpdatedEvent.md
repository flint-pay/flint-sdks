[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxConnectionUpdatedEvent

The `tax_connection.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [TaxConnectionUpdatedEventData](../models/TaxConnectionUpdatedEventData.md#taxconnectionupdatedeventdata) | `data`: [field definitions](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1). |
| `event_type` | Required | string | Values: `"tax_connection.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [TaxConnectionUpdatedEventRequest](../models/TaxConnectionUpdatedEventRequest.md#taxconnectionupdatedeventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### TaxConnectionUpdatedEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [TaxConnection](../models/TaxConnection.md#taxconnection) | The environment's automatic sales tax connection. Before a record exists, identity, version and timestamps are omitted. Read-time business-detail changes and provider pauses do not advance version or send webhooks. Status_reason and supported_actions can also change with the clock as registrations end, without a version change or webhook. `object`: [field definitions](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1object). |

### TaxConnectionUpdatedEvent.data fields 1.object

The environment's automatic sales tax connection. Before a record exists, identity, version and timestamps are omitted. Read-time business-detail changes and provider pauses do not advance version or send webhooks. Status_reason and supported_actions can also change with the clock as registrations end, without a version change or webhook.

Field definitions: [shared fields](TaxConnection.md#taxconnection).

### TaxConnectionUpdatedEvent.data fields 1.object.business_address

Verified business address that connect will use as the tax origin, or the address copied to the connected account. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.

Field definitions: [shared fields](AddressInput.md#addressinput).

