[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentPackagingRequestInput

Creates an outbound shipment with one package using `packaging: single_package`, or 1 to 20 packages with explicit items using `packaging: itemized`. External reference and metadata are optional.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `external_system` | Optional | string | Name of the external system that `external_reference_id` belongs to. minLength: `1`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `package` | Conditional | [SinglePackageCreateRequestInput](../models/SinglePackageCreateRequestInput.md#singlepackagecreaterequestinput) | The one package that holds every submitted line quantity. The single package created with a shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to created or shipped; items and return_line_items are not accepted. |
| `packages` | Conditional | Array of [PackageCreateRequestInput](../models/PackageCreateRequestInput.md#packagecreaterequestinput) | Packages for an itemized shipment, from 1 to 20, each listing the items it holds. minItems: `1`. maxItems: `20`. Items: The request body for: Create package. |
| `packaging` | Required | string | How the shipment's packages are described. Values: `"single_package"`, `"itemized"`. |

### FulfillmentPackagingRequestInput variant 1: `packaging` = `"single_package"`

oneOf with packaging: "single_package": The `single_package` variant of `FulfillmentPackagingInput`..

- Condition: not (present(`packages`)).
- Required: `package`.
- Optional: `packages`.
- Constraints for `packaging`: Values: `"single_package"`.

### FulfillmentPackagingRequestInput variant 2: `packaging` = `"itemized"`

oneOf with packaging: "itemized": The `itemized` variant of `FulfillmentPackagingInput`..

- Condition: not (present(`package`)).
- Required: `packages`.
- Optional: `package`.
- Constraints for `packaging`: Values: `"itemized"`.

