[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## VoidShipmentResultInput

The voided shipment and its affected packages. The shipment is the primary resource and expected_version target.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `packages` | Required | Array of [PackageInput](../models/PackageInput.md#packageinput) |  |
| `shipment` | Required | [ShipmentInput](../models/ShipmentInput.md#shipmentinput) | A shipment carrying fulfilled order items. |

