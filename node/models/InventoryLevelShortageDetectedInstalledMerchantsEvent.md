[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryLevelShortageDetectedInstalledMerchantsEvent

The `inventory_level.shortage_detected` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/InventoryLevelShortageDetectedInstalledMerchantsEvent.md#inventorylevelshortagedetectedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"inventory_level.shortage_detected"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/InventoryLevelShortageDetectedInstalledMerchantsEvent.md#inventorylevelshortagedetectedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/InventoryLevelShortageDetectedInstalledMerchantsEvent.md#inventorylevelshortagedetectedinstalledmerchantseventdataprevious_attributes). |

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](InventoryLevel.md#inventorylevel).

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_quantity` | Optional | integer or null | Derived and never written: on_hand minus unavailable, held, committed, and safety stock, never below 0. See shortage_quantity for the excess. Whole-number quantity; fractional quantities are not supported. `available_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedInstalledMerchantsEvent.md#inventorylevelshortagedetectedinstalledmerchantseventdataprevious_attributesavailable_quantity). |
| `backordered_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `backordered_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedInstalledMerchantsEvent.md#inventorylevelshortagedetectedinstalledmerchantseventdataprevious_attributesbackordered_quantity). |
| `claim_version` | Optional | integer or null | Advances only when held or committed quantities change. `claim_version`: [declared alternatives](../models/InventoryLevelShortageDetectedInstalledMerchantsEvent.md#inventorylevelshortagedetectedinstalledmerchantseventdataprevious_attributesclaim_version). |
| `committed_quantity` | Optional | integer or null | Units promised to accepted orders. Still physically present until fulfillment consumes them. Whole-number quantity; fractional quantities are not supported. `committed_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedInstalledMerchantsEvent.md#inventorylevelshortagedetectedinstalledmerchantseventdataprevious_attributescommitted_quantity). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `damaged_quantity` | Optional | integer or null | On-hand units known to be damaged. Not sellable. Whole-number quantity; fractional quantities are not supported. `damaged_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedInstalledMerchantsEvent.md#inventorylevelshortagedetectedinstalledmerchantseventdataprevious_attributesdamaged_quantity). |
| `held_quantity` | Optional | integer or null | Units claimed by an open reservation that has not been committed. Whole-number quantity; fractional quantities are not supported. `held_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedInstalledMerchantsEvent.md#inventorylevelshortagedetectedinstalledmerchantseventdataprevious_attributesheld_quantity). |
| `incoming_quantity` | Optional | integer or null | Units recorded as inbound but not yet on hand. Does not count toward availability. Whole-number quantity; fractional quantities are not supported. `incoming_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedInstalledMerchantsEvent.md#inventorylevelshortagedetectedinstalledmerchantseventdataprevious_attributesincoming_quantity). |
| `inventory_item` | Optional | [InventoryItemPreviousAttributes](../models/InventoryItemPreviousAttributes.md#inventoryitempreviousattributes) or null | The inventory item this level belongs to. Present only when the list request asked for expand=inventory_item. |
| `inventory_item_id` | Optional | string or null | ID of the inventory item the stock is for. `inventory_item_id`: [declared alternatives](../models/InventoryLevelShortageDetectedInstalledMerchantsEvent.md#inventorylevelshortagedetectedinstalledmerchantseventdataprevious_attributesinventory_item_id). |
| `inventory_level_id` | Optional | string or null | Unique identifier for this inventory level, prefixed `invl_`. `inventory_level_id`: [declared alternatives](../models/InventoryLevelShortageDetectedInstalledMerchantsEvent.md#inventorylevelshortagedetectedinstalledmerchantseventdataprevious_attributesinventory_level_id). |
| `location_id` | Optional | string or null | ID of the Location that holds the stock. `location_id`: [declared alternatives](../models/InventoryLevelShortageDetectedInstalledMerchantsEvent.md#inventorylevelshortagedetectedinstalledmerchantseventdataprevious_attributeslocation_id). |
| `on_hand_quantity` | Optional | integer or null | Units physically present at the Location, in any condition. Whole-number quantity; fractional quantities are not supported. `on_hand_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedInstalledMerchantsEvent.md#inventorylevelshortagedetectedinstalledmerchantseventdataprevious_attributeson_hand_quantity). |
| `physical_version` | Optional | integer or null | Advances only when on-hand or condition quantities change. `physical_version`: [declared alternatives](../models/InventoryLevelShortageDetectedInstalledMerchantsEvent.md#inventorylevelshortagedetectedinstalledmerchantseventdataprevious_attributesphysical_version). |
| `quality_control_quantity` | Optional | integer or null | On-hand units awaiting inspection. Not sellable. Whole-number quantity; fractional quantities are not supported. `quality_control_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedInstalledMerchantsEvent.md#inventorylevelshortagedetectedinstalledmerchantseventdataprevious_attributesquality_control_quantity). |
| `quarantined_quantity` | Optional | integer or null | On-hand units isolated for review. Not sellable. Whole-number quantity; fractional quantities are not supported. `quarantined_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedInstalledMerchantsEvent.md#inventorylevelshortagedetectedinstalledmerchantseventdataprevious_attributesquarantined_quantity). |
| `safety_stock_quantity` | Optional | integer or null | Buffer withheld from allocation. Change it with PATCH /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional quantities are not supported. `safety_stock_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedInstalledMerchantsEvent.md#inventorylevelshortagedetectedinstalledmerchantseventdataprevious_attributessafety_stock_quantity). |
| `shortage_quantity` | Optional | integer or null | Derived: claims exceeding sellable physical stock. Positive only after stock is lost, damaged, or corrected down. Whole-number quantity; fractional quantities are not supported. `shortage_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedInstalledMerchantsEvent.md#inventorylevelshortagedetectedinstalledmerchantseventdataprevious_attributesshortage_quantity). |
| `unavailable_on_hand_quantity` | Optional | integer or null | Derived: quality_control + damaged + quarantined. Whole-number quantity; fractional quantities are not supported. `unavailable_on_hand_quantity`: [declared alternatives](../models/InventoryLevelShortageDetectedInstalledMerchantsEvent.md#inventorylevelshortagedetectedinstalledmerchantseventdataprevious_attributesunavailable_on_hand_quantity). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Changes on every quantity or claim change at this level, including holds and commits. Read it immediately before a PATCH. A level that a counted adjustment creates without a quantity change starts at version 0. `version`: [declared alternatives](../models/InventoryLevelShortageDetectedInstalledMerchantsEvent.md#inventorylevelshortagedetectedinstalledmerchantseventdataprevious_attributesversion). |

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.available_quantity

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.available_quantity variant 1

anyOf variant 1: Derived and never written: on_hand minus unavailable, held, committed, and safety stock, never below 0. See shortage_quantity for the excess. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Derived and never written: on_hand minus unavailable, held, committed, and safety stock, never below 0. See shortage_quantity for the excess. Whole-number quantity; fractional quantities are not supported. Derived and never written: on_hand minus unavailable, held, committed, and safety stock, never below 0. See shortage_quantity for the excess. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.available_quantity variant 2

anyOf variant 2.

- Value shape: null. Derived and never written: on_hand minus unavailable, held, committed, and safety stock, never below 0. See shortage_quantity for the excess. Whole-number quantity; fractional quantities are not supported. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.backordered_quantity

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.backordered_quantity variant 1

anyOf variant 1: Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Whole-number quantity; fractional quantities are not supported. Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `0`. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.backordered_quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity; fractional quantities are not supported. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.claim_version

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.claim_version variant 1

anyOf variant 1: Advances only when held or committed quantities change..

- Value shape: integer. Advances only when held or committed quantities change. Advances only when held or committed quantities change. Format: `int64`. minimum: `0`. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.claim_version variant 2

anyOf variant 2.

- Value shape: null. Advances only when held or committed quantities change. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.committed_quantity

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.committed_quantity variant 1

anyOf variant 1: Units promised to accepted orders. Still physically present until fulfillment consumes them. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Units promised to accepted orders. Still physically present until fulfillment consumes them. Whole-number quantity; fractional quantities are not supported. Units promised to accepted orders. Still physically present until fulfillment consumes them. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.committed_quantity variant 2

anyOf variant 2.

- Value shape: null. Units promised to accepted orders. Still physically present until fulfillment consumes them. Whole-number quantity; fractional quantities are not supported. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.damaged_quantity

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.damaged_quantity variant 1

anyOf variant 1: On-hand units known to be damaged. Not sellable. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. On-hand units known to be damaged. Not sellable. Whole-number quantity; fractional quantities are not supported. On-hand units known to be damaged. Not sellable. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.damaged_quantity variant 2

anyOf variant 2.

- Value shape: null. On-hand units known to be damaged. Not sellable. Whole-number quantity; fractional quantities are not supported. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.held_quantity

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.held_quantity variant 1

anyOf variant 1: Units claimed by an open reservation that has not been committed. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Units claimed by an open reservation that has not been committed. Whole-number quantity; fractional quantities are not supported. Units claimed by an open reservation that has not been committed. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.held_quantity variant 2

anyOf variant 2.

- Value shape: null. Units claimed by an open reservation that has not been committed. Whole-number quantity; fractional quantities are not supported. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.incoming_quantity

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.incoming_quantity variant 1

anyOf variant 1: Units recorded as inbound but not yet on hand. Does not count toward availability. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Units recorded as inbound but not yet on hand. Does not count toward availability. Whole-number quantity; fractional quantities are not supported. Units recorded as inbound but not yet on hand. Does not count toward availability. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.incoming_quantity variant 2

anyOf variant 2.

- Value shape: null. Units recorded as inbound but not yet on hand. Does not count toward availability. Whole-number quantity; fractional quantities are not supported. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.inventory_item_id

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.inventory_item_id variant 1

anyOf variant 1: ID of the inventory item the stock is for..

- Value shape: string. ID of the inventory item the stock is for. ID of the inventory item the stock is for. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.inventory_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inventory item the stock is for. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.inventory_level_id

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.inventory_level_id variant 1

anyOf variant 1: Unique identifier for this inventory level, prefixed `invl_`..

- Value shape: string. Unique identifier for this inventory level, prefixed `invl_`. Unique identifier for this inventory level, prefixed `invl_`. Example: `"invl_01KEZF7C00H201XZXKRX5KMDDE"`. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.inventory_level_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this inventory level, prefixed `invl_`. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.location_id

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.location_id variant 1

anyOf variant 1: ID of the Location that holds the stock..

- Value shape: string. ID of the Location that holds the stock. ID of the Location that holds the stock. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location that holds the stock. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.on_hand_quantity

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.on_hand_quantity variant 1

anyOf variant 1: Units physically present at the Location, in any condition. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Units physically present at the Location, in any condition. Whole-number quantity; fractional quantities are not supported. Units physically present at the Location, in any condition. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.on_hand_quantity variant 2

anyOf variant 2.

- Value shape: null. Units physically present at the Location, in any condition. Whole-number quantity; fractional quantities are not supported. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.physical_version

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.physical_version variant 1

anyOf variant 1: Advances only when on-hand or condition quantities change..

- Value shape: integer. Advances only when on-hand or condition quantities change. Advances only when on-hand or condition quantities change. Format: `int64`. minimum: `0`. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.physical_version variant 2

anyOf variant 2.

- Value shape: null. Advances only when on-hand or condition quantities change. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.quality_control_quantity

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.quality_control_quantity variant 1

anyOf variant 1: On-hand units awaiting inspection. Not sellable. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. On-hand units awaiting inspection. Not sellable. Whole-number quantity; fractional quantities are not supported. On-hand units awaiting inspection. Not sellable. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.quality_control_quantity variant 2

anyOf variant 2.

- Value shape: null. On-hand units awaiting inspection. Not sellable. Whole-number quantity; fractional quantities are not supported. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.quarantined_quantity

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.quarantined_quantity variant 1

anyOf variant 1: On-hand units isolated for review. Not sellable. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. On-hand units isolated for review. Not sellable. Whole-number quantity; fractional quantities are not supported. On-hand units isolated for review. Not sellable. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.quarantined_quantity variant 2

anyOf variant 2.

- Value shape: null. On-hand units isolated for review. Not sellable. Whole-number quantity; fractional quantities are not supported. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.safety_stock_quantity

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.safety_stock_quantity variant 1

anyOf variant 1: Buffer withheld from allocation. Change it with PATCH /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Buffer withheld from allocation. Change it with PATCH /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional quantities are not supported. Buffer withheld from allocation. Change it with PATCH /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.safety_stock_quantity variant 2

anyOf variant 2.

- Value shape: null. Buffer withheld from allocation. Change it with PATCH /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional quantities are not supported. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.shortage_quantity

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.shortage_quantity variant 1

anyOf variant 1: Derived: claims exceeding sellable physical stock. Positive only after stock is lost, damaged, or corrected down. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Derived: claims exceeding sellable physical stock. Positive only after stock is lost, damaged, or corrected down. Whole-number quantity; fractional quantities are not supported. Derived: claims exceeding sellable physical stock. Positive only after stock is lost, damaged, or corrected down. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.shortage_quantity variant 2

anyOf variant 2.

- Value shape: null. Derived: claims exceeding sellable physical stock. Positive only after stock is lost, damaged, or corrected down. Whole-number quantity; fractional quantities are not supported. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.unavailable_on_hand_quantity

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.unavailable_on_hand_quantity variant 1

anyOf variant 1: Derived: quality_control + damaged + quarantined. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Derived: quality_control + damaged + quarantined. Whole-number quantity; fractional quantities are not supported. Derived: quality_control + damaged + quarantined. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.unavailable_on_hand_quantity variant 2

anyOf variant 2.

- Value shape: null. Derived: quality_control + damaged + quarantined. Whole-number quantity; fractional quantities are not supported. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.version

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.version variant 1

anyOf variant 1: Changes on every quantity or claim change at this level, including holds and commits. Read it immediately before a PATCH. A level that a counted adjustment creates without a quantity change starts at version 0..

- Value shape: integer. Changes on every quantity or claim change at this level, including holds and commits. Read it immediately before a PATCH. A level that a counted adjustment creates without a quantity change starts at version 0. Changes on every quantity or claim change at this level, including holds and commits. Read it immediately before a PATCH. A level that a counted adjustment creates without a quantity change starts at version 0. Format: `int64`. minimum: `0`. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Changes on every quantity or claim change at this level, including holds and commits. Read it immediately before a PATCH. A level that a counted adjustment creates without a quantity change starts at version 0. 

### InventoryLevelShortageDetectedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

