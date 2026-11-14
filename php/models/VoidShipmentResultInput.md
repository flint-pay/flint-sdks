[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## VoidShipmentResultInput

The voided shipment and its affected packages. The shipment is the primary resource and expected_version target.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `packages` | Required | Array of [PackageInput](../models/PackageInput.md#packageinput) | The shipment's packages after the void, each with status `voided`. Packages that were already voided are included. |
| `shipment` | Required | [ShipmentInput](../models/ShipmentInput.md#shipmentinput) | The shipment after the void, with status `voided`. A shipment carrying fulfilled order items. |

