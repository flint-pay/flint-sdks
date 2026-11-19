[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryReservationActionRequiredInstalledMerchantsEvent

The `inventory_reservation.action_required` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/InventoryReservationActionRequiredInstalledMerchantsEvent.md#inventoryreservationactionrequiredinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"inventory_reservation.action_required"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### InventoryReservationActionRequiredInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/InventoryReservationActionRequiredInstalledMerchantsEvent.md#inventoryreservationactionrequiredinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/InventoryReservationActionRequiredInstalledMerchantsEvent.md#inventoryreservationactionrequiredinstalledmerchantseventdataprevious_attributes). |

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](InventoryReservation.md#inventoryreservation).

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `closed_reason` | Optional | string or null | How the reservation ended. adopted when its remaining held stock moved to a delivery selection. mixed when more than one terminal outcome applied. `null` when the reservation isn't closed. Values: `"consumed"`, `"released"`, `"expired"`, `"reallocated"`, `"adopted"`, `"mixed"`, `null`. `closed_reason`: [declared alternatives](../models/InventoryReservationActionRequiredInstalledMerchantsEvent.md#inventoryreservationactionrequiredinstalledmerchantseventdataprevious_attributesclosed_reason). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `expires_at` | Optional | string or null | Deadline for held or unconfirmed backordered quantity. While an order payment waits for a buyer action, this is the earlier of the stock hold deadline and the payment attempt deadline. Flint can keep stock held while the payment outcome is uncertain. `null` when no line holds quantity or has unconfirmed backordered quantity. `expires_at`: [declared alternatives](../models/InventoryReservationActionRequiredInstalledMerchantsEvent.md#inventoryreservationactionrequiredinstalledmerchantseventdataprevious_attributesexpires_at). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. `idempotency_key`: [declared alternatives](../models/CreditNoteAllocationReversedInstalledMerchantsEvent.md#creditnoteallocationreversedinstalledmerchantseventdataprevious_attributesidempotency_key). |
| `inventory_action_required` | Optional | [InventoryActionRequiredPreviousAttributes](../models/InventoryActionRequiredPreviousAttributes.md#inventoryactionrequiredpreviousattributes) or null | Present when the claim needs a merchant action before commerce can continue. |
| `inventory_reservation_id` | Optional | string or null | Unique identifier for this inventory reservation, prefixed `invr_`. `inventory_reservation_id`: [declared alternatives](../models/InventoryReservationActionRequiredInstalledMerchantsEvent.md#inventoryreservationactionrequiredinstalledmerchantseventdataprevious_attributesinventory_reservation_id). |
| `inventory_routing_source` | Optional | [InventoryRoutingSourcePreviousAttributes](../models/InventoryRoutingSourcePreviousAttributes.md#inventoryroutingsourcepreviousattributes) or null | How Flint chooses the Locations that serve the reservation: one fixed Location, an allocation policy, or a specific policy revision. |
| `lines` | Optional | Array of [InventoryReservationLinePreviousAttributes](../models/InventoryReservationLinePreviousAttributes.md#inventoryreservationlinepreviousattributes) or null | Allocations of the reserved stock, one for each item and Location. `lines`: [declared alternatives](../models/InventoryReservationActionRequiredInstalledMerchantsEvent.md#inventoryreservationactionrequiredinstalledmerchantseventdataprevious_attributeslines). |
| `owner` | Optional | [InventoryReservationOwnerPreviousAttributes](../models/InventoryReservationOwnerPreviousAttributes.md#inventoryreservationownerpreviousattributes) or null | Who holds the reservation: a `key` you choose, or an order Flint holds the stock for. |
| `replacement_inventory_reservation_id` | Optional | string or null | Set on a reservation whose claim Flint moved when it rerouted an order: the replacement reservation that now holds the quantity named in this reservation's reallocated_quantity. `replacement_inventory_reservation_id`: [declared alternatives](../models/InventoryReservationActionRequiredInstalledMerchantsEvent.md#inventoryreservationactionrequiredinstalledmerchantseventdataprevious_attributesreplacement_inventory_reservation_id). |
| `source_inventory_reservation_id` | Optional | string or null | Set on a replacement reservation: the reservation whose claim Flint moved here when it rerouted an order. This reservation holds the quantity that reservation reports as reallocated_quantity. `source_inventory_reservation_id`: [declared alternatives](../models/InventoryReservationActionRequiredInstalledMerchantsEvent.md#inventoryreservationactionrequiredinstalledmerchantseventdataprevious_attributessource_inventory_reservation_id). |
| `status` | Optional | string or null | active while any held, committed, or backordered quantity remains; closed once none does. Values: `"active"`, `"closed"`. `status`: [declared alternatives](../models/InventoryReservationActionRequiredInstalledMerchantsEvent.md#inventoryreservationactionrequiredinstalledmerchantseventdataprevious_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Actions that can change this reservation now. Empty for a closed reservation and for one Flint holds for an order. Resending targets already applied succeeds in any status. Computed when Flint produced this response or event, so replays and webhooks keep their original value. Items values: `"commit"`, `"consume"`, `"release"`. `supported_actions`: [declared alternatives](../models/InventoryReservationActionRequiredInstalledMerchantsEvent.md#inventoryreservationactionrequiredinstalledmerchantseventdataprevious_attributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | The reservation version. Send it as expected_version to reject a write if the reservation changed. `version`: [declared alternatives](../models/InventoryReservationActionRequiredInstalledMerchantsEvent.md#inventoryreservationactionrequiredinstalledmerchantseventdataprevious_attributesversion). |

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes.closed_reason

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes.closed_reason variant 1

anyOf variant 1: How the reservation ended. adopted when its remaining held stock moved to a delivery selection. mixed when more than one terminal outcome applied. `null` when the reservation isn't closed..

- Value shape: string. How the reservation ended. adopted when its remaining held stock moved to a delivery selection. mixed when more than one terminal outcome applied. `null` when the reservation isn't closed. Values: `"consumed"`, `"released"`, `"expired"`, `"reallocated"`, `"adopted"`, `"mixed"`, `null`.

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes.closed_reason variant 2

anyOf variant 2.

- Value shape: null. How the reservation ended. adopted when its remaining held stock moved to a delivery selection. mixed when more than one terminal outcome applied. `null` when the reservation isn't closed. 

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes.expires_at

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes.expires_at variant 1

anyOf variant 1: Deadline for held or unconfirmed backordered quantity. While an order payment waits for a buyer action, this is the earlier of the stock hold deadline and the payment attempt deadline. Flint can keep stock held while the payment outcome is uncertain. `null` when no line holds quantity or has unconfirmed backordered quantity..

- Value shape: string. Deadline for held or unconfirmed backordered quantity. While an order payment waits for a buyer action, this is the earlier of the stock hold deadline and the payment attempt deadline. Flint can keep stock held while the payment outcome is uncertain. `null` when no line holds quantity or has unconfirmed backordered quantity. Deadline for held or unconfirmed backordered quantity. While an order payment waits for a buyer action, this is the earlier of the stock hold deadline and the payment attempt deadline. Flint can keep stock held while the payment outcome is uncertain. `null` when no line holds quantity or has unconfirmed backordered quantity. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes.expires_at variant 2

anyOf variant 2.

- Value shape: null. Deadline for held or unconfirmed backordered quantity. While an order payment waits for a buyer action, this is the earlier of the stock hold deadline and the payment attempt deadline. Flint can keep stock held while the payment outcome is uncertain. `null` when no line holds quantity or has unconfirmed backordered quantity. 

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes.idempotency_key

Declared alternatives: [CreditNoteAllocationReversedInstalledMerchantsEvent.data.previous_attributes.idempotency_key](../models/CreditNoteAllocationReversedInstalledMerchantsEvent.md#creditnoteallocationreversedinstalledmerchantseventdataprevious_attributesidempotency_key).

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes.inventory_reservation_id

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes.inventory_reservation_id variant 1

anyOf variant 1: Unique identifier for this inventory reservation, prefixed `invr_`..

- Value shape: string. Unique identifier for this inventory reservation, prefixed `invr_`. Unique identifier for this inventory reservation, prefixed `invr_`. Example: `"invr_01KEZF7C0041ENRR0C2NF3AP12"`. 

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes.inventory_reservation_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this inventory reservation, prefixed `invr_`. 

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes.lines

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes.lines variant 1

anyOf variant 1: Allocations of the reserved stock, one for each item and Location..

- Value shape: Array of [InventoryReservationLinePreviousAttributes](../models/InventoryReservationLinePreviousAttributes.md#inventoryreservationlinepreviousattributes). Allocations of the reserved stock, one for each item and Location. 

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes.lines variant 2

anyOf variant 2.

- Value shape: null. Allocations of the reserved stock, one for each item and Location. 

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes.replacement_inventory_reservation_id

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes.replacement_inventory_reservation_id variant 1

anyOf variant 1: Set on a reservation whose claim Flint moved when it rerouted an order: the replacement reservation that now holds the quantity named in this reservation's reallocated_quantity..

- Value shape: string. Set on a reservation whose claim Flint moved when it rerouted an order: the replacement reservation that now holds the quantity named in this reservation's reallocated_quantity. Set on a reservation whose claim Flint moved when it rerouted an order: the replacement reservation that now holds the quantity named in this reservation's reallocated_quantity. Example: `"invr_01KEZF7C0041ENRR0C2NF3AP12"`. 

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes.replacement_inventory_reservation_id variant 2

anyOf variant 2.

- Value shape: null. Set on a reservation whose claim Flint moved when it rerouted an order: the replacement reservation that now holds the quantity named in this reservation's reallocated_quantity. 

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes.source_inventory_reservation_id

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes.source_inventory_reservation_id variant 1

anyOf variant 1: Set on a replacement reservation: the reservation whose claim Flint moved here when it rerouted an order. This reservation holds the quantity that reservation reports as reallocated_quantity..

- Value shape: string. Set on a replacement reservation: the reservation whose claim Flint moved here when it rerouted an order. This reservation holds the quantity that reservation reports as reallocated_quantity. Set on a replacement reservation: the reservation whose claim Flint moved here when it rerouted an order. This reservation holds the quantity that reservation reports as reallocated_quantity. Example: `"invr_01KEZF7C0041ENRR0C2NF3AP12"`. 

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes.source_inventory_reservation_id variant 2

anyOf variant 2.

- Value shape: null. Set on a replacement reservation: the reservation whose claim Flint moved here when it rerouted an order. This reservation holds the quantity that reservation reports as reallocated_quantity. 

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes.status

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes.status variant 1

anyOf variant 1: active while any held, committed, or backordered quantity remains; closed once none does..

- Value shape: string. active while any held, committed, or backordered quantity remains; closed once none does. Values: `"active"`, `"closed"`.

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. active while any held, committed, or backordered quantity remains; closed once none does. 

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes.supported_actions

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Actions that can change this reservation now. Empty for a closed reservation and for one Flint holds for an order. Resending targets already applied succeeds in any status. Computed when Flint produced this response or event, so replays and webhooks keep their original value..

- Value shape: Array of string. Actions that can change this reservation now. Empty for a closed reservation and for one Flint holds for an order. Resending targets already applied succeeds in any status. Computed when Flint produced this response or event, so replays and webhooks keep their original value. Items values: `"commit"`, `"consume"`, `"release"`.

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Actions that can change this reservation now. Empty for a closed reservation and for one Flint holds for an order. Resending targets already applied succeeds in any status. Computed when Flint produced this response or event, so replays and webhooks keep their original value. 

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes.version

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes.version variant 1

anyOf variant 1: The reservation version. Send it as expected_version to reject a write if the reservation changed..

- Value shape: integer. The reservation version. Send it as expected_version to reject a write if the reservation changed. The reservation version. Send it as expected_version to reject a write if the reservation changed. Format: `uint64`. minimum: `1`. 

### InventoryReservationActionRequiredInstalledMerchantsEvent.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. The reservation version. Send it as expected_version to reject a write if the reservation changed. 

### InventoryReservationActionRequiredInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

