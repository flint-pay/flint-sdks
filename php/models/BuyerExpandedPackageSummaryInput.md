[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerExpandedPackageSummaryInput

A package on a buyer's fulfillment, with its carrier, status, tracking details, and timestamps. Buyer credentials get no supported actions.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `carrier` | Optional | string | Carrier transporting the package. |
| `created_at` | Optional | string | When the package was created, in RFC3339 format. Format: `date-time`. |
| `delivered_at` | Optional | string | When the package was delivered, in RFC3339 format. Format: `date-time`. |
| `expected_delivery_at` | Optional | string or null | When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. Format: `date-time`. |
| `fulfillment_id` | Required | string | Fulfillment whose items are in the package. |
| `package_id` | Required | string | Stable identifier of the expanded package. |
| `service_code` | Optional | string | Carrier service used for the package. |
| `shipment_id` | Required | string | Shipment carrying this package. |
| `shipped_at` | Optional | string | When the package was shipped, in RFC3339 format. Format: `date-time`. |
| `status` | Required | string | Current package lifecycle state. - `created`: The package record exists but has not been packed or handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package was returned toward or to its origin. - `voided`: The package was voided and will not continue through delivery. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. |
| `supported_actions` | Required | Array of string | Always empty for buyer credentials. maxItems: `0`. Items values: [8 declared values](#buyerexpandedpackagesummaryinput-supported_actions--values). |
| `tracking_number` | Optional | string | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `tracking_url` | Optional | string | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `updated_at` | Optional | string | When the package was last updated, in RFC3339 format. Format: `date-time`. |
| `version` | Required | integer | Monotonic package version for expected_version checks. Format: `uint64`. minimum: `1`. |

#### BuyerExpandedPackageSummaryInput supported_actions [] values

- `"mark_delivered"`
- `"mark_delivery_attempted"`
- `"mark_exception"`
- `"mark_in_transit"`
- `"mark_out_for_delivery"`
- `"mark_packed"`
- `"mark_returned"`
- `"mark_shipped"`

