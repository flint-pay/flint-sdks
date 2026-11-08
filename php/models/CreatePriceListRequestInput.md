[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePriceListRequestInput

Fields for a new price list.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Required | string | Currency of all list prices, as an uppercase ISO 4217 code. Must match the catalog currency; currently only USD is supported. Cannot be changed after creation. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `customer_segments` | Optional | Array of string | Customer.segment labels to assign, at most 20. Each label can belong to only one unarchived list, including inactive lists. Omit or send [] for no segment assignments. maxItems: `20`. uniqueItems: `true`. Items: minLength: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata to store on this price list. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Required | string | Name used to identify the price list. minLength: `1`. maxLength: `100`. |
| `status` | Optional | string | Initial availability. Inactive lists remain assignable but do not provide prices. Default: `"active"`. Values: `"active"`, `"inactive"`. |

