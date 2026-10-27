[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentPackagingRequest

Creates one outbound shipment and one package with a shipment fulfillment. Requires `packaging: single_package` and `package`; external reference and metadata are optional.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. maxLength: `255`. |
| `external_system` | Optional | string | minLength: `1`. |
| `metadata` | Optional | Map of string | Map values: minLength: `1`. |
| `package` | Required | [SinglePackageCreateRequest](../models/SinglePackageCreateRequest.md#singlepackagecreaterequest) | The single package created with a shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to created or shipped; items and return_line_items are not accepted. |
| `packaging` | Required | string | Values: `"single_package"`. |

