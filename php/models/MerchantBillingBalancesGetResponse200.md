[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantBillingBalancesGetResponse200

A response containing `MerchantBillingBalance` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [MerchantBillingBalance](../models/MerchantBillingBalance.md#merchantbillingbalance) | Current Flint merchant billing balance for one billing account and currency. `data`: [field definitions](../models/MerchantBillingBalancesGetResponse200.md#merchantbillingbalancesgetresponse200data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### MerchantBillingBalancesGetResponse200.data

Current Flint merchant billing balance for one billing account and currency.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_credit_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `merchant_billing_balance_id` | Required | string | Stable identifier for this billing account and currency balance projection. |
| `observed_at` | Required | string | RFC3339 timestamp for the balance snapshot. Format: `date-time`. |
| `outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

