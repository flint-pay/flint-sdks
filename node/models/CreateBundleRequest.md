[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateBundleRequest

The request body for: Create bundle.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `barcode` | Optional | string | Barcode assigned to this sellable item. minLength: `1`. maxLength: `100`. |
| `category_handles` | Optional | Array of string | Relationship set of category handles that must already exist. Each handle has 1 to 100 characters (Unicode code points). Unknown handles return RESOURCE_NOT_FOUND. Replaces the whole set when present; send [] to clear it. On PATCH, omission leaves it unchanged. Does not require expected_version. maxItems: `100`. uniqueItems: `true`. Items: minLength: `1`. maxLength: `100`. pattern: `^[a-z0-9]+(-[a-z0-9]+)*$`. |
| `components` | Optional | Array of [CreateBundleComponentRequest](../models/CreateBundleComponentRequest.md#createbundlecomponentrequest) | Variants included in the bundle and their quantities. All must share taxable and line_item_tax_category; an unset category equals only another unset category. Components are compared with the first input component, with a NOT_ALLOWED detail at each differing components[index].variant_id. Required when status is active; send status: inactive to create a draft without components. |
| `description` | Optional | string | Description of the bundle shown to buyers. minLength: `1`. maxLength: `2048`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `images` | Optional | Array of [ImageRequest](../models/ImageRequest.md#imagerequest) | The complete desired gallery in display order. The first image is primary. Send [] to clear the gallery. minItems: `0`. maxItems: `8`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata). |
| `modifier_set_id` | Optional | string or null | Attached modifier set. Send null on update to remove it. minLength: `1`. |
| `name` | Required | string | Bundle name shown to buyers. minLength: `1`. maxLength: `255`. |
| `sku` | Optional | string | Stock keeping unit assigned to this sellable item. minLength: `1`. maxLength: `100`. |
| `status` | Optional | string | Whether the bundle is active or inactive. Defaults to active; an active bundle requires components. Default: `"active"`. Values: `"active"`, `"inactive"`. |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price charged for one unit, in the currency's smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/Bundle.md#bundleunit_price_money). |

### CreateBundleRequest.metadata

Field definitions: [AddLineItemsRequest.line_items[].metadata](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata).

### CreateBundleRequest.unit_price_money

Field definitions: [Bundle.unit_price_money](../models/Bundle.md#bundleunit_price_money).

