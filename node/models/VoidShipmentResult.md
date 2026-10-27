[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## VoidShipmentResult

The voided shipment and its affected packages. The shipment is the primary resource and expected_version target.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `packages` | Required | Array of [Package](../models/Package.md#package) |  |
| `shipment` | Required | [Shipment](../models/Shipment.md#shipment) | A shipment carrying fulfilled order items. |

