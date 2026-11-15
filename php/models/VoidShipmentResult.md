[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## VoidShipmentResult

The voided shipment and its affected packages. The shipment is the primary resource and expected_version target.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `packages` | Required | Array of [Package](../models/Package.md#package) | The shipment's packages after the void, each with status `voided`. Packages that were already voided are included. `packages[]`: [field definitions](../models/PackageListResponse.md#packagelistresponsedata). |
| `shipment` | Required | [Shipment](../models/Shipment.md#shipment) | The shipment after the void, with status `voided`. A shipment carrying fulfilled order items. `shipment`: [field definitions](../models/VoidShipmentResult.md#voidshipmentresultshipment). |

### VoidShipmentResult.packages[]

Field definitions: [PackageListResponse.data[]](../models/PackageListResponse.md#packagelistresponsedata).

### VoidShipmentResult.shipment

The shipment after the void, with status `voided`. A shipment carrying fulfilled order items.

Field definitions: [shared fields](ShipmentResponse.md#shipmentresponsedata).

### VoidShipmentResult.shipment.metadata

Field definitions: [ShipmentResponse.data.metadata](../models/ShipmentResponse.md#shipmentresponsedatametadata).

### VoidShipmentResult.shipment.order

Declared alternatives: [FulfillmentResponse.data.order](../models/FulfillmentResponse.md#fulfillmentresponsedataorder).

### VoidShipmentResult.shipment.packages[]

Field definitions: [FulfillmentResponse.data.packages[]](../models/FulfillmentResponse.md#fulfillmentresponsedatapackages).

### VoidShipmentResult.shipment.return_line_items[]

Field definitions: [PackageResponse.data.return_line_items[]](../models/PackageResponse.md#packageresponsedatareturn_line_items).

