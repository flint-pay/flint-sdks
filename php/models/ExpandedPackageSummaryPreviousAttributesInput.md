[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedPackageSummaryPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `carrier` | Optional | string or null | Carrier transporting the package. `carrier`: [declared alternatives](../models/ExpandedPackageSummaryPreviousAttributesInput.md#expandedpackagesummarypreviousattributesinputcarrier). |
| `created_at` | Optional | string or null | When the package was created, in RFC3339 format. `created_at`: [declared alternatives](../models/ExpandedPackageSummaryPreviousAttributesInput.md#expandedpackagesummarypreviousattributesinputcreated_at). |
| `delivered_at` | Optional | string or null | When the package was delivered, in RFC3339 format. `delivered_at`: [declared alternatives](../models/ExpandedPackageSummaryPreviousAttributesInput.md#expandedpackagesummarypreviousattributesinputdelivered_at). |
| `expected_delivery_at` | Optional | string or null | When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. `expected_delivery_at`: [declared alternatives](../models/ExpandedPackageSummaryPreviousAttributesInput.md#expandedpackagesummarypreviousattributesinputexpected_delivery_at). |
| `fulfillment_id` | Optional | string or null | Fulfillment whose items are in the package. `fulfillment_id`: [declared alternatives](../models/ExpandedPackageSummaryPreviousAttributesInput.md#expandedpackagesummarypreviousattributesinputfulfillment_id). |
| `package_id` | Optional | string or null | Stable identifier of the expanded package. `package_id`: [declared alternatives](../models/ExpandedPackageSummaryPreviousAttributesInput.md#expandedpackagesummarypreviousattributesinputpackage_id). |
| `service_code` | Optional | string or null | Carrier service used for the package. `service_code`: [declared alternatives](../models/ExpandedPackageSummaryPreviousAttributesInput.md#expandedpackagesummarypreviousattributesinputservice_code). |
| `shipment_id` | Optional | string or null | Shipment carrying this package. `shipment_id`: [declared alternatives](../models/ExpandedPackageSummaryPreviousAttributesInput.md#expandedpackagesummarypreviousattributesinputshipment_id). |
| `shipped_at` | Optional | string or null | When the package was shipped, in RFC3339 format. `shipped_at`: [declared alternatives](../models/ExpandedPackageSummaryPreviousAttributesInput.md#expandedpackagesummarypreviousattributesinputshipped_at). |
| `status` | Optional | string or null | Current package lifecycle state. - `created`: The package record exists but has not been packed or handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package was returned toward or to its origin. - `voided`: The package was voided and will not continue through delivery. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. `status`: [declared alternatives](../models/ExpandedPackageSummaryPreviousAttributesInput.md#expandedpackagesummarypreviousattributesinputstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. Always present with merchant credentials. Items values: [9 declared values](#expandedpackagesummarypreviousattributesinput-supported_actions--values). `supported_actions`: [declared alternatives](../models/ExpandedPackageSummaryPreviousAttributesInput.md#expandedpackagesummarypreviousattributesinputsupported_actions). |
| `tracking_number` | Optional | string or null | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `tracking_number`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributesInput.md#deliveryfulfillmentdetailspreviousattributesinputinstructions). |
| `tracking_url` | Optional | string or null | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `tracking_url`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributesInput.md#deliveryfulfillmentdetailspreviousattributesinputinstructions). |
| `updated_at` | Optional | string or null | When the package was last updated, in RFC3339 format. `updated_at`: [declared alternatives](../models/ExpandedPackageSummaryPreviousAttributesInput.md#expandedpackagesummarypreviousattributesinputupdated_at). |
| `version` | Optional | integer or null | Monotonic package version for expected_version checks. `version`: [declared alternatives](../models/ExpandedPackageSummaryPreviousAttributesInput.md#expandedpackagesummarypreviousattributesinputversion). |

#### ExpandedPackageSummaryPreviousAttributesInput supported_actions [] values

- `"mark_delivered"`
- `"mark_delivery_attempted"`
- `"mark_exception"`
- `"mark_in_transit"`
- `"mark_out_for_delivery"`
- `"mark_packed"`
- `"mark_returned"`
- `"mark_shipped"`
- `"void"`

### ExpandedPackageSummaryPreviousAttributesInput.carrier

### ExpandedPackageSummaryPreviousAttributesInput.carrier variant 1

anyOf variant 1: Carrier transporting the package..

- Value shape: string. Carrier transporting the package. 

### ExpandedPackageSummaryPreviousAttributesInput.carrier variant 2

anyOf variant 2.

- Value shape: null. Carrier transporting the package. 

### ExpandedPackageSummaryPreviousAttributesInput.created_at

### ExpandedPackageSummaryPreviousAttributesInput.created_at variant 1

anyOf variant 1: When the package was created, in RFC3339 format..

- Value shape: string. When the package was created, in RFC3339 format. When the package was created, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ExpandedPackageSummaryPreviousAttributesInput.created_at variant 2

anyOf variant 2.

- Value shape: null. When the package was created, in RFC3339 format. 

### ExpandedPackageSummaryPreviousAttributesInput.delivered_at

### ExpandedPackageSummaryPreviousAttributesInput.delivered_at variant 1

anyOf variant 1: When the package was delivered, in RFC3339 format..

- Value shape: string. When the package was delivered, in RFC3339 format. When the package was delivered, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ExpandedPackageSummaryPreviousAttributesInput.delivered_at variant 2

anyOf variant 2.

- Value shape: null. When the package was delivered, in RFC3339 format. 

### ExpandedPackageSummaryPreviousAttributesInput.expected_delivery_at

### ExpandedPackageSummaryPreviousAttributesInput.expected_delivery_at variant 1

anyOf variant 1: When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window..

- Value shape: string. When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ExpandedPackageSummaryPreviousAttributesInput.expected_delivery_at variant 2

anyOf variant 2.

- Value shape: null. When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. 

### ExpandedPackageSummaryPreviousAttributesInput.fulfillment_id

### ExpandedPackageSummaryPreviousAttributesInput.fulfillment_id variant 1

anyOf variant 1: Fulfillment whose items are in the package..

- Value shape: string. Fulfillment whose items are in the package. Fulfillment whose items are in the package. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. 

### ExpandedPackageSummaryPreviousAttributesInput.fulfillment_id variant 2

anyOf variant 2.

- Value shape: null. Fulfillment whose items are in the package. 

### ExpandedPackageSummaryPreviousAttributesInput.package_id

### ExpandedPackageSummaryPreviousAttributesInput.package_id variant 1

anyOf variant 1: Stable identifier of the expanded package..

- Value shape: string. Stable identifier of the expanded package. Stable identifier of the expanded package. Example: `"pkg_01KEZF7C00ZZA16BJCEJBWKJ5R"`. 

### ExpandedPackageSummaryPreviousAttributesInput.package_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the expanded package. 

### ExpandedPackageSummaryPreviousAttributesInput.service_code

### ExpandedPackageSummaryPreviousAttributesInput.service_code variant 1

anyOf variant 1: Carrier service used for the package..

- Value shape: string. Carrier service used for the package. 

### ExpandedPackageSummaryPreviousAttributesInput.service_code variant 2

anyOf variant 2.

- Value shape: null. Carrier service used for the package. 

### ExpandedPackageSummaryPreviousAttributesInput.shipment_id

### ExpandedPackageSummaryPreviousAttributesInput.shipment_id variant 1

anyOf variant 1: Shipment carrying this package..

- Value shape: string. Shipment carrying this package. Shipment carrying this package. Example: `"shp_01KEZF7C00Q2AFXWXHMCDR3F68"`. 

### ExpandedPackageSummaryPreviousAttributesInput.shipment_id variant 2

anyOf variant 2.

- Value shape: null. Shipment carrying this package. 

### ExpandedPackageSummaryPreviousAttributesInput.shipped_at

### ExpandedPackageSummaryPreviousAttributesInput.shipped_at variant 1

anyOf variant 1: When the package was shipped, in RFC3339 format..

- Value shape: string. When the package was shipped, in RFC3339 format. When the package was shipped, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ExpandedPackageSummaryPreviousAttributesInput.shipped_at variant 2

anyOf variant 2.

- Value shape: null. When the package was shipped, in RFC3339 format. 

### ExpandedPackageSummaryPreviousAttributesInput.status

### ExpandedPackageSummaryPreviousAttributesInput.status variant 1

anyOf variant 1: Current package lifecycle state.
- `created`: The package record exists but has not been packed or handed off.
- `packed`: The package is packed and awaiting carrier handoff.
- `shipped`: The package was handed to the carrier.
- `in_transit`: The carrier is moving the package through its network.
- `out_for_delivery`: The package is on its final delivery route.
- `delivered`: The carrier reported successful delivery.
- `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery.
- `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue.
- `returned`: The package was returned toward or to its origin.
- `voided`: The package was voided and will not continue through delivery..

- Value shape: string. Current package lifecycle state. - `created`: The package record exists but has not been packed or handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package was returned toward or to its origin. - `voided`: The package was voided and will not continue through delivery. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`.

### ExpandedPackageSummaryPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Current package lifecycle state. - `created`: The package record exists but has not been packed or handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package was returned toward or to its origin. - `voided`: The package was voided and will not continue through delivery. 

### ExpandedPackageSummaryPreviousAttributesInput.supported_actions

### ExpandedPackageSummaryPreviousAttributesInput.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. Always present with merchant credentials..

- Value shape: Array of string. Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. Always present with merchant credentials. Items values: `"mark_delivered"`, `"mark_delivery_attempted"`, `"mark_exception"`, `"mark_in_transit"`, `"mark_out_for_delivery"`, `"mark_packed"`, `"mark_returned"`, `"mark_shipped"`, `"void"`.

### ExpandedPackageSummaryPreviousAttributesInput.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. Always present with merchant credentials. 

### ExpandedPackageSummaryPreviousAttributesInput.tracking_number

Declared alternatives: [DeliveryFulfillmentDetailsPreviousAttributesInput.instructions](../models/DeliveryFulfillmentDetailsPreviousAttributesInput.md#deliveryfulfillmentdetailspreviousattributesinputinstructions).

### ExpandedPackageSummaryPreviousAttributesInput.tracking_url

Declared alternatives: [DeliveryFulfillmentDetailsPreviousAttributesInput.instructions](../models/DeliveryFulfillmentDetailsPreviousAttributesInput.md#deliveryfulfillmentdetailspreviousattributesinputinstructions).

### ExpandedPackageSummaryPreviousAttributesInput.updated_at

### ExpandedPackageSummaryPreviousAttributesInput.updated_at variant 1

anyOf variant 1: When the package was last updated, in RFC3339 format..

- Value shape: string. When the package was last updated, in RFC3339 format. When the package was last updated, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ExpandedPackageSummaryPreviousAttributesInput.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the package was last updated, in RFC3339 format. 

### ExpandedPackageSummaryPreviousAttributesInput.version

### ExpandedPackageSummaryPreviousAttributesInput.version variant 1

anyOf variant 1: Monotonic package version for expected_version checks..

- Value shape: integer. Monotonic package version for expected_version checks. Monotonic package version for expected_version checks. Format: `uint64`. minimum: `1`. 

### ExpandedPackageSummaryPreviousAttributesInput.version variant 2

anyOf variant 2.

- Value shape: null. Monotonic package version for expected_version checks. 

