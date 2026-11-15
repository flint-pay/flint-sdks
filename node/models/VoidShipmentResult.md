[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## VoidShipmentResult

The voided shipment and its affected packages. The shipment is the primary resource and expected_version target.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `packages` | Required | Array of [Package](../models/Package.md#package) | The shipment's packages after the void, each with status `voided`. Packages that were already voided are included. |
| `shipment` | Required | [Shipment](../models/Shipment.md#shipment) | The shipment after the void, with status `voided`. A shipment carrying fulfilled order items. |

