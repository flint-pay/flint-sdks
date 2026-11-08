[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## VoidShipmentResult

The voided shipment and its affected packages. The shipment is the primary resource and expected_version target.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `packages` | Required | Array of [Package](../models/Package.md#package) | `packages[]`: [field definitions](../models/PackageListResponse.md#packagelistresponsedata). |
| `shipment` | Required | [Shipment](../models/Shipment.md#shipment) | A shipment carrying fulfilled order items. `shipment`: [field definitions](../models/ShipmentListResponse.md#shipmentlistresponsedata). |

### VoidShipmentResult.packages[]

Field definitions: [PackageListResponse.data[]](../models/PackageListResponse.md#packagelistresponsedata).

### VoidShipmentResult.shipment

Field definitions: [ShipmentListResponse.data[]](../models/ShipmentListResponse.md#shipmentlistresponsedata).

