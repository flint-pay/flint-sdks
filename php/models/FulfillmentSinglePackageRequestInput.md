[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentSinglePackageRequestInput

The `single_package` variant of `FulfillmentPackagingInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. maxLength: `255`. |
| `external_system` | Optional | string | minLength: `1`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `package` | Required | [SinglePackageCreateRequestInput](../models/SinglePackageCreateRequestInput.md#singlepackagecreaterequestinput) | The single package created with a shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to created or shipped; items and return_line_items are not accepted. |
| `packages` | Optional | Array of [PackageCreateRequestInput](../models/PackageCreateRequestInput.md#packagecreaterequestinput) | minItems: `1`. maxItems: `20`. Items: The request body for: Create package. |
| `packaging` | Required | string | Values: `"single_package"`. |

