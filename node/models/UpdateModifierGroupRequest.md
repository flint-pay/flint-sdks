[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateModifierGroupRequest

The request body for: Update modifier group.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantities` | Optional | boolean | Whether buyers can select more than one unit of a list modifier. |
| `expected_version` | Optional | integer string | Modifier group version last read by the caller. Required when modifiers is present. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `max_quantity` | Optional | integer string or null | Maximum whole-number quantity for each selected list modifier. Omit it to keep the current value; send null to clear it. Fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `max_selected` | Optional | integer or null | Maximum number of distinct list modifiers buyers can select. Omit it to keep the current value; send null to remove the limit. Format: `int32`. |
| `max_total_quantity` | Optional | integer string or null | Maximum combined whole-number quantity across selected list modifiers. Omit it to keep the current value; send null to clear it. Fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `metadata` | Optional | Map of (string or null) or null | Omitted metadata is unchanged. Objects merge by key, null values delete keys, an empty object is a no-op, and null clears all metadata. The merged map can contain at most 50 keys. Map values: minLength: `1`. |
| `min_quantity` | Optional | integer string or null | Minimum whole-number quantity for each selected list modifier. Omit it to keep the current value; send null to clear it. Fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `min_selected` | Optional | integer or null | Minimum number of distinct list modifiers buyers must select. Omit it to keep the current value; send null to remove the minimum. Format: `int32`. |
| `modifiers` | Optional | Array of [ModifierRequest](../models/ModifierRequest.md#modifierrequest) | Replaces all modifiers atomically. Include modifier_id to retain an existing modifier, omit the ID to create one, and omit a previous modifier to archive it. Omit the array to leave modifiers unchanged. An empty array clears modifiers when the group rules permit it. Null is not accepted. |
| `name` | Optional | string | Name of the modifier group shown to buyers. minLength: `1`. maxLength: `255`. |
| `show_on_fulfillment` | Optional | boolean | Whether selections from this group appear in fulfillment details unless overridden for a modifier set. |
| `show_on_receipt` | Optional | boolean | Whether selections from this group appear on buyer receipts unless overridden for a modifier set. |
| `status` | Optional | string | Lifecycle status of the modifier group. Only active groups can be offered to buyers; archived groups remain readable and cannot be edited. Values: `"active"`, `"inactive"`. |
| `text` | Optional | [TextModifierConfigPatchRequest](../models/TextModifierConfigPatchRequest.md#textmodifierconfigpatchrequest) or null | Patch text entry rules by field. Omitted fields keep their current values; null clears the text configuration when the group rules permit it. An empty object is invalid. |

