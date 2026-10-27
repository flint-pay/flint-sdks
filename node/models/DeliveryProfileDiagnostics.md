[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryProfileDiagnostics

Read-only coverage checks for a delivery profile, such as how many active Locations have no compatible delivery method and how many countries its zones name.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_method_definitions_count` | Required | integer | Number of active delivery methods whose type is allowed by this profile. minimum: `0`. |
| `covers_all_items` | Required | boolean | True when this is the physical catalog default and every active physical catalog obligation uses it. |
| `locations_without_rates_count` | Required | integer | Number of active Locations that no active delivery method compatible with this profile can use as an origin. minimum: `0`. |
| `unassigned_locations` | Required | Array of string | Up to 20 active Location IDs that no compatible active delivery method can use as an origin. Use locations_without_rates_count for the complete count. |
| `unassigned_locations_truncated` | Required | boolean | True when more matching Locations exist than are returned in unassigned_locations. |
| `zone_country_count` | Required | integer | Number of distinct countries explicitly named by zones referenced from compatible active delivery methods. minimum: `0`. |

