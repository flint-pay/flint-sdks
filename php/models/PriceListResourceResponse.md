[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PriceListResourceResponse

A response containing `PriceList` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PriceList](../models/PriceList.md#pricelist) | Resource, collection, or operation result returned by this request. A merchant-only set of variant prices for individual customers or customer segments. `data`: [field definitions](../models/PriceListResourceResponse.md#pricelistresourceresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PriceListResourceResponse.data

Resource, collection, or operation result returned by this request. A merchant-only set of variant prices for individual customers or customer segments.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `archived_at` | Required | string or null | When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_at` | Required | string | When this price list was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `currency` | Required | string | Immutable currency of every price in this list. Currently USD. Uses ISO 4217 currency codes. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `customer_segments` | Required | Array of string | Customer.segment labels assigned to this list. Empty when no segments are assigned. maxItems: `20`. uniqueItems: `true`. |
| `external_reference_id` | Required | string or null | Caller-owned identifier for this resource in an external system. `null` when unset. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `merchant_id` | Required | string | Identifier of the merchant that owns this price list. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Required | Map of string | Caller-owned metadata stored on this price list. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/PriceListResourceResponse.md#pricelistresourceresponsedatametadata). |
| `name` | Required | string | Name used to identify this price list. |
| `price_count` | Required | integer | Number of variant prices in the list. Format: `int64`. minimum: `0`. maximum: `10000`. |
| `price_list_id` | Required | string | Stable identifier of this price list. pattern: `^prl_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"prl_01KEZF7C00EH39P59GN3XMGS2Q"`. |
| `status` | Required | string | Availability or retirement state. Derived as archived when archived_at is set; otherwise active or inactive. Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Required | string | When this price list or its prices last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Aggregate version, increased once for a request that changes the list or its prices. No-op writes preserve it. Format: `uint64`. minimum: `1`. |

### PriceListResourceResponse.data.metadata

Value shape: Map of string. Caller-owned metadata stored on this price list. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. 

### PriceListResourceResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

