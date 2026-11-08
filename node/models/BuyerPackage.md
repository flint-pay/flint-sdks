[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerPackage

A package within a shipment.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `carrier` | Optional | string | Carrier transporting the package. |
| `created_at` | Required | string | Creation timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `delivered_at` | Optional | string | Package delivery timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `dimensions` | Optional | [Dimensions](../models/Dimensions.md#dimensions) | Physical length, width, and height of the package. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. `dimensions`: [field definitions](../models/BuyerPackage.md#buyerpackagedimensions). |
| `expected_delivery_at` | Optional | string or null | When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `fulfillment_id` | Required | string | Fulfillment whose items are in the package. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `label_url` | Optional | string | Return-label URL supplied by the merchant's integration. Included for return packages; omitted for outbound packages. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `order_id` | Required | string | Order whose items are in the package. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `package_id` | Required | string | Stable identifier of the package. Example: `"pkg_01KEZF7C00ZZA16BJCEJBWKJ5R"`. |
| `return_id` | Optional | string | Return this package belongs to. Present only on packages of return shipments. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `return_line_items` | Optional | Array of [ReturnResolutionLineItemRequest](../models/ReturnResolutionLineItemRequest.md#returnresolutionlineitemrequest) | Return line quantities allocated to this parcel. Present only on packages of return shipments. `return_line_items[]`: [field definitions](../models/BuyerPackage.md#buyerpackagereturn_line_items). |
| `service_code` | Optional | string | Carrier service used for the package. |
| `shipment_id` | Required | string | Shipment carrying this package. Example: `"shp_01KEZF7C00Q2AFXWXHMCDR3F68"`. |
| `shipped_at` | Optional | string | Package handoff timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | Current package lifecycle state. Package states are the source used to derive shipment status. - `created`: The package record exists but has not been packed or handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package was returned toward or to its origin. - `voided`: The package was voided and will not continue through delivery. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. |
| `tracking_number` | Optional | string | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `tracking_url` | Optional | string | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `updated_at` | Required | string | Last update timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Monotonic package version for expected_version checks. Format: `uint64`. minimum: `1`. |
| `weight` | Optional | [Weight](../models/Weight.md#weight) | Physical weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. `weight`: [field definitions](../models/BuyerPackage.md#buyerpackageweight). |

### BuyerPackage.dimensions

Physical length, width, and height of the package. Package or item dimensions as `length`, `width`, and `height` in the given `unit`.

Field definitions: [shared fields](Dimensions.md#dimensions).

### BuyerPackage.return_line_items[]

A return line and the quantity placed in a return shipment or package.

Field definitions: [shared fields](ReturnShipmentLineItemAllocationRequestInput.md#returnshipmentlineitemallocationrequestinput).

### BuyerPackage.weight

Physical weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.

Field definitions: [shared fields](Weight.md#weight).

