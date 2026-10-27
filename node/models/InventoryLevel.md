[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InventoryLevel

The quantity state of one inventory item at one Location.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_quantity` | Required | integer string | Derived and never written: on_hand minus unavailable, held, committed, and safety stock, never below 0. See shortage_quantity for the excess. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `claim_version` | Required | integer string | Advances only when held or committed quantities change. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `committed_quantity` | Required | integer string | Units promised to accepted orders. Still physically present until fulfillment consumes them. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `damaged_quantity` | Required | integer string | On-hand units known to be damaged. Not sellable. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `held_quantity` | Required | integer string | Units claimed by an open reservation that has not been committed. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `incoming_quantity` | Required | integer string | Units recorded as inbound but not yet on hand. Does not count toward availability. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `inventory_item` | Optional | [InventoryItem](../models/InventoryItem.md#inventoryitem) | The inventory item this level belongs to. Present only when the list request asked for expand=inventory_item. A stock-keeping unit that inventory quantities are tracked against. Catalog variants reference an inventory item rather than carrying their own counter. |
| `inventory_item_id` | Required | string |  |
| `inventory_level_id` | Required | string |  |
| `location_id` | Required | string |  |
| `on_hand_quantity` | Required | integer string | Units physically present at the Location, in any condition. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `physical_version` | Required | integer string | Advances only when on-hand or condition quantities change. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `quality_control_quantity` | Required | integer string | On-hand units awaiting inspection. Not sellable. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `quarantined_quantity` | Required | integer string | On-hand units isolated for review. Not sellable. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `safety_stock_quantity` | Required | integer string | Buffer withheld from allocation. Change it with PATCH /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `shortage_quantity` | Required | integer string | Derived: claims exceeding sellable physical stock. Positive only after stock is lost, damaged, or corrected down. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `unavailable_on_hand_quantity` | Required | integer string | Derived: quality_control + damaged + quarantined. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Changes on every quantity or claim change at this level, including holds and commits. Read it immediately before a PATCH. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

