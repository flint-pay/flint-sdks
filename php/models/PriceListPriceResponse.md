[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PriceListPriceResponse

A response containing `PriceListPrice` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PriceListPrice](../models/PriceListPrice.md#pricelistprice) | Resource, collection, or operation result returned by this request. One variant's base net unit price and quantity schedule within a price list. `data`: [field definitions](../models/PriceListPriceResponse.md#pricelistpriceresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PriceListPriceResponse.data

Resource, collection, or operation result returned by this request. One variant's base net unit price and quantity schedule within a price list.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | When this price was added, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `price_list_id` | Required | string | Identifier of the price list that owns this price. Example: `"prl_01KEZF7C00EH39P59GN3XMGS2Q"`. |
| `price_list_price_id` | Required | string | Stable identifier of this price within its list. pattern: `^prlp_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"prlp_01KEZF7C007DQ721A29CDR73DN"`. |
| `product_id` | Required | string | Identifier of the product that owns this variant. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `quantity_price_breaks` | Required | Array of [QuantityPriceBreak](../models/QuantityPriceBreak.md#quantitypricebreak) | Up to 10 quantity breaks, ordered by increasing minimum_quantity and strictly decreasing unit price. [] means the base price applies at every quantity. maxItems: `10`. |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Positive base net unit price in the price list's currency, in the currency's smallest unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `updated_at` | Required | string | When this price last changed, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `variant_id` | Required | string | Identifier of the priced product variant. Bundles and gift cards are not supported. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |
| `version` | Required | integer | Version of this variant price and its quantity schedule. No-op writes preserve it. Format: `uint64`. minimum: `1`. |

### PriceListPriceResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

