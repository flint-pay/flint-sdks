[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PackageCreateInputCreated

The `created` variant of `PackageCreateInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_notification_behavior` | Optional | string | Controls buyer email handling. Omit or use send to send when recipient, template, and deduplication rules allow it. Use suppress when another system owns buyer messaging. Values: `"send"`, `"suppress"`. |
| `carrier` | Optional | string | minLength: `1`. |
| `dimensions` | Optional | [Dimensions](../models/Dimensions.md#dimensions) | Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `expected_delivery_at` | Optional | string or null | When the carrier or merchant expects this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates and transitions. Format: `date-time`. minLength: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. maxLength: `255`. |
| `external_system` | Optional | string | Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. |
| `items` | Optional | Array of [CreatePackageItemRequest](../models/CreatePackageItemRequest.md#createpackageitemrequest) | Independent package-item collection. Inline creation uses the child-create shape and commits atomically; edit items through the package item routes after creation. Each order line may appear once. minItems: `1`. maxItems: `100`. |
| `label_url` | Optional | string | HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require external_system for provenance. Flint does not host the label file. minLength: `1`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata). |
| `return_line_items` | Optional | Array of [ReturnResolutionLineItemRequest](../models/ReturnResolutionLineItemRequest.md#returnresolutionlineitemrequest) | Required for a package on a return shipment: allocates quantities from the shipment's return_line_items to this parcel. Rejected on outbound shipments. `return_line_items[]`: [field definitions](../models/CreateShipmentRequest.md#createshipmentrequestreturn_line_items). |
| `service_code` | Optional | string | minLength: `1`. |
| `shipped_at` | Optional | string | Package handoff time. Defaults to request time. Only allowed with status shipped. Format: `date-time`. minLength: `1`. |
| `status` | Required | string | Outbound packages can start as created or shipped. Return packages must start as created, omit items, and include return_line_items. Use mark_shipped after the buyer hands over the return package. Values: `"created"`. |
| `status_reason` | Optional | string | minLength: `1`. |
| `tracking_number` | Optional | string | minLength: `1`. |
| `tracking_url` | Optional | string | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: `1`. |
| `weight` | Optional | [Weight](../models/Weight.md#weight) | A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |

### PackageCreateInputCreated.metadata

Field definitions: [AddLineItemsRequest.line_items[].metadata](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata).

### PackageCreateInputCreated.return_line_items[]

Field definitions: [CreateShipmentRequest.return_line_items[]](../models/CreateShipmentRequest.md#createshipmentrequestreturn_line_items).

