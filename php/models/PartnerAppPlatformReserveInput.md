[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformReserveInput

The platform's reserve terms.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `percent` | Required | number | Share of each platform fee Flint holds as a reserve, in percent: 20 means 20%. minimum: `0`. maximum: `100`. multipleOf: `0.0001`. |
| `release_delay_seconds` | Required | integer | How long Flint holds each fee's reserve share after the payment, in seconds. 10368000 is 120 days. Format: `int64`. minimum: `0`. |

