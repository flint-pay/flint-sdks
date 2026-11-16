[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountLinePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `captured_physical_version` | Optional | integer or null | Physical version accepted with the latest saved observation. Meaningful once counted_on_hand_quantity is present. Applying the count requires the same physical version. `captured_physical_version`: [declared alternatives](../models/InventoryCountLinePreviousAttributesInput.md#inventorycountlinepreviousattributesinputcaptured_physical_version). |
| `counted_damaged_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `counted_damaged_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `counted_on_hand_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `counted_on_hand_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `counted_quality_control_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `counted_quality_control_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `counted_quarantined_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `counted_quarantined_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `damaged_variance` | Optional | integer or null | The difference this line applied to the damaged quantity. Present once the count is applied. A draft or canceled count omits it. `damaged_variance`: [declared alternatives](../models/InventoryCountLinePreviousAttributesInput.md#inventorycountlinepreviousattributesinputdamaged_variance). |
| `expected_damaged_quantity` | Optional | integer or null | The damaged quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. `expected_damaged_quantity`: [declared alternatives](../models/InventoryCountLinePreviousAttributesInput.md#inventorycountlinepreviousattributesinputexpected_damaged_quantity). |
| `expected_on_hand_quantity` | Optional | integer or null | The on-hand quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. `expected_on_hand_quantity`: [declared alternatives](../models/InventoryCountLinePreviousAttributesInput.md#inventorycountlinepreviousattributesinputexpected_on_hand_quantity). |
| `expected_quality_control_quantity` | Optional | integer or null | The quality-control quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. `expected_quality_control_quantity`: [declared alternatives](../models/InventoryCountLinePreviousAttributesInput.md#inventorycountlinepreviousattributesinputexpected_quality_control_quantity). |
| `expected_quarantined_quantity` | Optional | integer or null | The quarantined quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. `expected_quarantined_quantity`: [declared alternatives](../models/InventoryCountLinePreviousAttributesInput.md#inventorycountlinepreviousattributesinputexpected_quarantined_quantity). |
| `inventory_count_line_id` | Optional | string or null | Unique identifier for this inventory count line, prefixed `invcln_`. `inventory_count_line_id`: [declared alternatives](../models/InventoryCountLinePreviousAttributesInput.md#inventorycountlinepreviousattributesinputinventory_count_line_id). |
| `inventory_item_id` | Optional | string or null | ID of the inventory item counted. `inventory_item_id`: [declared alternatives](../models/InventoryCountLinePreviousAttributesInput.md#inventorycountlinepreviousattributesinputinventory_item_id). |
| `inventory_movement_id` | Optional | string or null | Movement this line wrote when the count was applied. Absent on a draft or canceled count. `inventory_movement_id`: [declared alternatives](../models/InventoryCountLinePreviousAttributesInput.md#inventorycountlinepreviousattributesinputinventory_movement_id). |
| `on_hand_variance` | Optional | integer or null | The difference this line applied to the on-hand quantity. Present once the count is applied. A draft or canceled count omits it. `on_hand_variance`: [declared alternatives](../models/InventoryCountLinePreviousAttributesInput.md#inventorycountlinepreviousattributesinputon_hand_variance). |
| `physical_version` | Optional | integer or null | Live physical version of the level, read alongside expected quantities on draft lines. Evidence of current stock, not a fence captured at count creation. `null` when the count is applied or canceled. `physical_version`: [declared alternatives](../models/InventoryCountLinePreviousAttributesInput.md#inventorycountlinepreviousattributesinputphysical_version). |
| `quality_control_variance` | Optional | integer or null | The difference this line applied to the quality-control quantity. Present once the count is applied. A draft or canceled count omits it. `quality_control_variance`: [declared alternatives](../models/InventoryCountLinePreviousAttributesInput.md#inventorycountlinepreviousattributesinputquality_control_variance). |
| `quarantined_variance` | Optional | integer or null | The difference this line applied to the quarantined quantity. Present once the count is applied. A draft or canceled count omits it. `quarantined_variance`: [declared alternatives](../models/InventoryCountLinePreviousAttributesInput.md#inventorycountlinepreviousattributesinputquarantined_variance). |
| `source_observation_sequence` | Optional | integer or null | `source_observation_sequence`: [declared alternatives](../models/InventoryCountLinePreviousAttributesInput.md#inventorycountlinepreviousattributesinputsource_observation_sequence). |

### InventoryCountLinePreviousAttributesInput.captured_physical_version

### InventoryCountLinePreviousAttributesInput.captured_physical_version variant 1

anyOf variant 1: Physical version accepted with the latest saved observation. Meaningful once counted_on_hand_quantity is present. Applying the count requires the same physical version..

- Value shape: integer. Physical version accepted with the latest saved observation. Meaningful once counted_on_hand_quantity is present. Applying the count requires the same physical version. Physical version accepted with the latest saved observation. Meaningful once counted_on_hand_quantity is present. Applying the count requires the same physical version. Format: `int64`. minimum: `0`. 

### InventoryCountLinePreviousAttributesInput.captured_physical_version variant 2

anyOf variant 2.

- Value shape: null. Physical version accepted with the latest saved observation. Meaningful once counted_on_hand_quantity is present. Applying the count requires the same physical version. 

### InventoryCountLinePreviousAttributesInput.counted_damaged_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### InventoryCountLinePreviousAttributesInput.counted_on_hand_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### InventoryCountLinePreviousAttributesInput.counted_quality_control_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### InventoryCountLinePreviousAttributesInput.counted_quarantined_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### InventoryCountLinePreviousAttributesInput.damaged_variance

### InventoryCountLinePreviousAttributesInput.damaged_variance variant 1

anyOf variant 1: The difference this line applied to the damaged quantity. Present once the count is applied. A draft or canceled count omits it..

- Value shape: integer. The difference this line applied to the damaged quantity. Present once the count is applied. A draft or canceled count omits it. The difference this line applied to the damaged quantity. Present once the count is applied. A draft or canceled count omits it. Format: `int64`. 

### InventoryCountLinePreviousAttributesInput.damaged_variance variant 2

anyOf variant 2.

- Value shape: null. The difference this line applied to the damaged quantity. Present once the count is applied. A draft or canceled count omits it. 

### InventoryCountLinePreviousAttributesInput.expected_damaged_quantity

### InventoryCountLinePreviousAttributesInput.expected_damaged_quantity variant 1

anyOf variant 1: The damaged quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. The damaged quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. The damaged quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### InventoryCountLinePreviousAttributesInput.expected_damaged_quantity variant 2

anyOf variant 2.

- Value shape: null. The damaged quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. 

### InventoryCountLinePreviousAttributesInput.expected_on_hand_quantity

### InventoryCountLinePreviousAttributesInput.expected_on_hand_quantity variant 1

anyOf variant 1: The on-hand quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. The on-hand quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. The on-hand quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### InventoryCountLinePreviousAttributesInput.expected_on_hand_quantity variant 2

anyOf variant 2.

- Value shape: null. The on-hand quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. 

### InventoryCountLinePreviousAttributesInput.expected_quality_control_quantity

### InventoryCountLinePreviousAttributesInput.expected_quality_control_quantity variant 1

anyOf variant 1: The quality-control quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. The quality-control quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. The quality-control quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### InventoryCountLinePreviousAttributesInput.expected_quality_control_quantity variant 2

anyOf variant 2.

- Value shape: null. The quality-control quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. 

### InventoryCountLinePreviousAttributesInput.expected_quarantined_quantity

### InventoryCountLinePreviousAttributesInput.expected_quarantined_quantity variant 1

anyOf variant 1: The quarantined quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. The quarantined quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. The quarantined quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### InventoryCountLinePreviousAttributesInput.expected_quarantined_quantity variant 2

anyOf variant 2.

- Value shape: null. The quarantined quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. 

### InventoryCountLinePreviousAttributesInput.inventory_count_line_id

### InventoryCountLinePreviousAttributesInput.inventory_count_line_id variant 1

anyOf variant 1: Unique identifier for this inventory count line, prefixed `invcln_`..

- Value shape: string. Unique identifier for this inventory count line, prefixed `invcln_`. Unique identifier for this inventory count line, prefixed `invcln_`. Example: `"invcln_01KEZF7C00BJK1S36219KK040Q"`. 

### InventoryCountLinePreviousAttributesInput.inventory_count_line_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this inventory count line, prefixed `invcln_`. 

### InventoryCountLinePreviousAttributesInput.inventory_item_id

### InventoryCountLinePreviousAttributesInput.inventory_item_id variant 1

anyOf variant 1: ID of the inventory item counted..

- Value shape: string. ID of the inventory item counted. ID of the inventory item counted. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. 

### InventoryCountLinePreviousAttributesInput.inventory_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inventory item counted. 

### InventoryCountLinePreviousAttributesInput.inventory_movement_id

### InventoryCountLinePreviousAttributesInput.inventory_movement_id variant 1

anyOf variant 1: Movement this line wrote when the count was applied. Absent on a draft or canceled count..

- Value shape: string. Movement this line wrote when the count was applied. Absent on a draft or canceled count. Movement this line wrote when the count was applied. Absent on a draft or canceled count. Example: `"invm_01KEZF7C00DYPFT9PS0NZY805Z"`. 

### InventoryCountLinePreviousAttributesInput.inventory_movement_id variant 2

anyOf variant 2.

- Value shape: null. Movement this line wrote when the count was applied. Absent on a draft or canceled count. 

### InventoryCountLinePreviousAttributesInput.on_hand_variance

### InventoryCountLinePreviousAttributesInput.on_hand_variance variant 1

anyOf variant 1: The difference this line applied to the on-hand quantity. Present once the count is applied. A draft or canceled count omits it..

- Value shape: integer. The difference this line applied to the on-hand quantity. Present once the count is applied. A draft or canceled count omits it. The difference this line applied to the on-hand quantity. Present once the count is applied. A draft or canceled count omits it. Format: `int64`. 

### InventoryCountLinePreviousAttributesInput.on_hand_variance variant 2

anyOf variant 2.

- Value shape: null. The difference this line applied to the on-hand quantity. Present once the count is applied. A draft or canceled count omits it. 

### InventoryCountLinePreviousAttributesInput.physical_version

### InventoryCountLinePreviousAttributesInput.physical_version variant 1

anyOf variant 1: Live physical version of the level, read alongside expected quantities on draft lines. Evidence of current stock, not a fence captured at count creation. `null` when the count is applied or canceled..

- Value shape: integer. Live physical version of the level, read alongside expected quantities on draft lines. Evidence of current stock, not a fence captured at count creation. `null` when the count is applied or canceled. Live physical version of the level, read alongside expected quantities on draft lines. Evidence of current stock, not a fence captured at count creation. `null` when the count is applied or canceled. Format: `uint64`. minimum: `0`. maximum: `9007199254740991`. 

### InventoryCountLinePreviousAttributesInput.physical_version variant 2

anyOf variant 2.

- Value shape: null. Live physical version of the level, read alongside expected quantities on draft lines. Evidence of current stock, not a fence captured at count creation. `null` when the count is applied or canceled. 

### InventoryCountLinePreviousAttributesInput.quality_control_variance

### InventoryCountLinePreviousAttributesInput.quality_control_variance variant 1

anyOf variant 1: The difference this line applied to the quality-control quantity. Present once the count is applied. A draft or canceled count omits it..

- Value shape: integer. The difference this line applied to the quality-control quantity. Present once the count is applied. A draft or canceled count omits it. The difference this line applied to the quality-control quantity. Present once the count is applied. A draft or canceled count omits it. Format: `int64`. 

### InventoryCountLinePreviousAttributesInput.quality_control_variance variant 2

anyOf variant 2.

- Value shape: null. The difference this line applied to the quality-control quantity. Present once the count is applied. A draft or canceled count omits it. 

### InventoryCountLinePreviousAttributesInput.quarantined_variance

### InventoryCountLinePreviousAttributesInput.quarantined_variance variant 1

anyOf variant 1: The difference this line applied to the quarantined quantity. Present once the count is applied. A draft or canceled count omits it..

- Value shape: integer. The difference this line applied to the quarantined quantity. Present once the count is applied. A draft or canceled count omits it. The difference this line applied to the quarantined quantity. Present once the count is applied. A draft or canceled count omits it. Format: `int64`. 

### InventoryCountLinePreviousAttributesInput.quarantined_variance variant 2

anyOf variant 2.

- Value shape: null. The difference this line applied to the quarantined quantity. Present once the count is applied. A draft or canceled count omits it. 

### InventoryCountLinePreviousAttributesInput.source_observation_sequence

### InventoryCountLinePreviousAttributesInput.source_observation_sequence variant 1

anyOf variant 1.

- Value shape: integer. Format: `int64`. minimum: `0`. 

### InventoryCountLinePreviousAttributesInput.source_observation_sequence variant 2

anyOf variant 2.

- Value shape: null.  

