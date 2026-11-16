[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryCountLinePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `captured_physical_version` | Optional | integer or null | Physical version accepted with the latest saved observation. Meaningful once counted_on_hand_quantity is present. Applying the count requires the same physical version. `captured_physical_version`: [declared alternatives](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributescaptured_physical_version). |
| `counted_damaged_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `counted_damaged_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |
| `counted_on_hand_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `counted_on_hand_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |
| `counted_quality_control_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `counted_quality_control_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |
| `counted_quarantined_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `counted_quarantined_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |
| `damaged_variance` | Optional | integer or null | The difference this line applied to the damaged quantity. Present once the count is applied. A draft or canceled count omits it. `damaged_variance`: [declared alternatives](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributesdamaged_variance). |
| `expected_damaged_quantity` | Optional | integer or null | The damaged quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. `expected_damaged_quantity`: [declared alternatives](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributesexpected_damaged_quantity). |
| `expected_on_hand_quantity` | Optional | integer or null | The on-hand quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. `expected_on_hand_quantity`: [declared alternatives](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributesexpected_on_hand_quantity). |
| `expected_quality_control_quantity` | Optional | integer or null | The quality-control quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. `expected_quality_control_quantity`: [declared alternatives](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributesexpected_quality_control_quantity). |
| `expected_quarantined_quantity` | Optional | integer or null | The quarantined quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. `expected_quarantined_quantity`: [declared alternatives](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributesexpected_quarantined_quantity). |
| `inventory_count_line_id` | Optional | string or null | Unique identifier for this inventory count line, prefixed `invcln_`. `inventory_count_line_id`: [declared alternatives](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributesinventory_count_line_id). |
| `inventory_item_id` | Optional | string or null | ID of the inventory item counted. `inventory_item_id`: [declared alternatives](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributesinventory_item_id). |
| `inventory_movement_id` | Optional | string or null | Movement this line wrote when the count was applied. Absent on a draft or canceled count. `inventory_movement_id`: [declared alternatives](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributesinventory_movement_id). |
| `on_hand_variance` | Optional | integer or null | The difference this line applied to the on-hand quantity. Present once the count is applied. A draft or canceled count omits it. `on_hand_variance`: [declared alternatives](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributeson_hand_variance). |
| `physical_version` | Optional | integer or null or null | Live physical version of the level, read alongside expected quantities on draft lines. Evidence of current stock, not a fence captured at count creation. `null` when the count is applied or canceled. `physical_version`: [declared alternatives](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributesphysical_version). |
| `quality_control_variance` | Optional | integer or null | The difference this line applied to the quality-control quantity. Present once the count is applied. A draft or canceled count omits it. `quality_control_variance`: [declared alternatives](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributesquality_control_variance). |
| `quarantined_variance` | Optional | integer or null | The difference this line applied to the quarantined quantity. Present once the count is applied. A draft or canceled count omits it. `quarantined_variance`: [declared alternatives](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributesquarantined_variance). |
| `source_observation_sequence` | Optional | integer or null | `source_observation_sequence`: [declared alternatives](../models/InventoryCountLinePreviousAttributes.md#inventorycountlinepreviousattributessource_observation_sequence). |

### InventoryCountLinePreviousAttributes.captured_physical_version

### InventoryCountLinePreviousAttributes.captured_physical_version variant 1

anyOf variant 1: Physical version accepted with the latest saved observation. Meaningful once counted_on_hand_quantity is present. Applying the count requires the same physical version..

- Value shape: integer. Physical version accepted with the latest saved observation. Meaningful once counted_on_hand_quantity is present. Applying the count requires the same physical version. Physical version accepted with the latest saved observation. Meaningful once counted_on_hand_quantity is present. Applying the count requires the same physical version. Format: `int64`. minimum: `0`. 

### InventoryCountLinePreviousAttributes.captured_physical_version variant 2

anyOf variant 2.

- Value shape: null. Physical version accepted with the latest saved observation. Meaningful once counted_on_hand_quantity is present. Applying the count requires the same physical version. 

### InventoryCountLinePreviousAttributes.counted_damaged_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

### InventoryCountLinePreviousAttributes.counted_on_hand_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

### InventoryCountLinePreviousAttributes.counted_quality_control_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

### InventoryCountLinePreviousAttributes.counted_quarantined_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

### InventoryCountLinePreviousAttributes.damaged_variance

### InventoryCountLinePreviousAttributes.damaged_variance variant 1

anyOf variant 1: The difference this line applied to the damaged quantity. Present once the count is applied. A draft or canceled count omits it..

- Value shape: integer. The difference this line applied to the damaged quantity. Present once the count is applied. A draft or canceled count omits it. The difference this line applied to the damaged quantity. Present once the count is applied. A draft or canceled count omits it. Format: `int64`. 

### InventoryCountLinePreviousAttributes.damaged_variance variant 2

anyOf variant 2.

- Value shape: null. The difference this line applied to the damaged quantity. Present once the count is applied. A draft or canceled count omits it. 

### InventoryCountLinePreviousAttributes.expected_damaged_quantity

### InventoryCountLinePreviousAttributes.expected_damaged_quantity variant 1

anyOf variant 1: The damaged quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. The damaged quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. The damaged quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### InventoryCountLinePreviousAttributes.expected_damaged_quantity variant 2

anyOf variant 2.

- Value shape: null. The damaged quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. 

### InventoryCountLinePreviousAttributes.expected_on_hand_quantity

### InventoryCountLinePreviousAttributes.expected_on_hand_quantity variant 1

anyOf variant 1: The on-hand quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. The on-hand quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. The on-hand quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### InventoryCountLinePreviousAttributes.expected_on_hand_quantity variant 2

anyOf variant 2.

- Value shape: null. The on-hand quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. 

### InventoryCountLinePreviousAttributes.expected_quality_control_quantity

### InventoryCountLinePreviousAttributes.expected_quality_control_quantity variant 1

anyOf variant 1: The quality-control quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. The quality-control quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. The quality-control quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### InventoryCountLinePreviousAttributes.expected_quality_control_quantity variant 2

anyOf variant 2.

- Value shape: null. The quality-control quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. 

### InventoryCountLinePreviousAttributes.expected_quarantined_quantity

### InventoryCountLinePreviousAttributes.expected_quarantined_quantity variant 1

anyOf variant 1: The quarantined quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. The quarantined quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. The quarantined quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### InventoryCountLinePreviousAttributes.expected_quarantined_quantity variant 2

anyOf variant 2.

- Value shape: null. The quarantined quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. 

### InventoryCountLinePreviousAttributes.inventory_count_line_id

### InventoryCountLinePreviousAttributes.inventory_count_line_id variant 1

anyOf variant 1: Unique identifier for this inventory count line, prefixed `invcln_`..

- Value shape: string. Unique identifier for this inventory count line, prefixed `invcln_`. Unique identifier for this inventory count line, prefixed `invcln_`. Example: `"invcln_01KEZF7C00BJK1S36219KK040Q"`. 

### InventoryCountLinePreviousAttributes.inventory_count_line_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this inventory count line, prefixed `invcln_`. 

### InventoryCountLinePreviousAttributes.inventory_item_id

### InventoryCountLinePreviousAttributes.inventory_item_id variant 1

anyOf variant 1: ID of the inventory item counted..

- Value shape: string. ID of the inventory item counted. ID of the inventory item counted. Example: `"invi_01KEZF7C00A6YEM25MTHW2MPZY"`. 

### InventoryCountLinePreviousAttributes.inventory_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inventory item counted. 

### InventoryCountLinePreviousAttributes.inventory_movement_id

### InventoryCountLinePreviousAttributes.inventory_movement_id variant 1

anyOf variant 1: Movement this line wrote when the count was applied. Absent on a draft or canceled count..

- Value shape: string. Movement this line wrote when the count was applied. Absent on a draft or canceled count. Movement this line wrote when the count was applied. Absent on a draft or canceled count. Example: `"invm_01KEZF7C00DYPFT9PS0NZY805Z"`. 

### InventoryCountLinePreviousAttributes.inventory_movement_id variant 2

anyOf variant 2.

- Value shape: null. Movement this line wrote when the count was applied. Absent on a draft or canceled count. 

### InventoryCountLinePreviousAttributes.on_hand_variance

### InventoryCountLinePreviousAttributes.on_hand_variance variant 1

anyOf variant 1: The difference this line applied to the on-hand quantity. Present once the count is applied. A draft or canceled count omits it..

- Value shape: integer. The difference this line applied to the on-hand quantity. Present once the count is applied. A draft or canceled count omits it. The difference this line applied to the on-hand quantity. Present once the count is applied. A draft or canceled count omits it. Format: `int64`. 

### InventoryCountLinePreviousAttributes.on_hand_variance variant 2

anyOf variant 2.

- Value shape: null. The difference this line applied to the on-hand quantity. Present once the count is applied. A draft or canceled count omits it. 

### InventoryCountLinePreviousAttributes.physical_version

### InventoryCountLinePreviousAttributes.physical_version variant 1

anyOf variant 1: Live physical version of the level, read alongside expected quantities on draft lines. Evidence of current stock, not a fence captured at count creation. `null` when the count is applied or canceled..

- Value shape: (integer or null). Live physical version of the level, read alongside expected quantities on draft lines. Evidence of current stock, not a fence captured at count creation. `null` when the count is applied or canceled. Live physical version of the level, read alongside expected quantities on draft lines. Evidence of current stock, not a fence captured at count creation. `null` when the count is applied or canceled. Format: `uint64`. minimum: `0`. maximum: `9007199254740991`. 

### InventoryCountLinePreviousAttributes.physical_version variant 2

anyOf variant 2.

- Value shape: null. Live physical version of the level, read alongside expected quantities on draft lines. Evidence of current stock, not a fence captured at count creation. `null` when the count is applied or canceled. 

### InventoryCountLinePreviousAttributes.quality_control_variance

### InventoryCountLinePreviousAttributes.quality_control_variance variant 1

anyOf variant 1: The difference this line applied to the quality-control quantity. Present once the count is applied. A draft or canceled count omits it..

- Value shape: integer. The difference this line applied to the quality-control quantity. Present once the count is applied. A draft or canceled count omits it. The difference this line applied to the quality-control quantity. Present once the count is applied. A draft or canceled count omits it. Format: `int64`. 

### InventoryCountLinePreviousAttributes.quality_control_variance variant 2

anyOf variant 2.

- Value shape: null. The difference this line applied to the quality-control quantity. Present once the count is applied. A draft or canceled count omits it. 

### InventoryCountLinePreviousAttributes.quarantined_variance

### InventoryCountLinePreviousAttributes.quarantined_variance variant 1

anyOf variant 1: The difference this line applied to the quarantined quantity. Present once the count is applied. A draft or canceled count omits it..

- Value shape: integer. The difference this line applied to the quarantined quantity. Present once the count is applied. A draft or canceled count omits it. The difference this line applied to the quarantined quantity. Present once the count is applied. A draft or canceled count omits it. Format: `int64`. 

### InventoryCountLinePreviousAttributes.quarantined_variance variant 2

anyOf variant 2.

- Value shape: null. The difference this line applied to the quarantined quantity. Present once the count is applied. A draft or canceled count omits it. 

### InventoryCountLinePreviousAttributes.source_observation_sequence

### InventoryCountLinePreviousAttributes.source_observation_sequence variant 1

anyOf variant 1.

- Value shape: integer. Format: `int64`. minimum: `0`. 

### InventoryCountLinePreviousAttributes.source_observation_sequence variant 2

anyOf variant 2.

- Value shape: null.  

