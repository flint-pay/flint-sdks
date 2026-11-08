[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryArrivalEstimate

The estimated arrival date range for a delivery option, as calendar dates in the option's timezone.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `earliest_date` | Required | string | Calendar date in the option timezone. Do not parse it as a UTC timestamp. Format: `date`. Example: `"2026-08-02"`. |
| `latest_date` | Required | string | Calendar date in the option timezone. Do not parse it as a UTC timestamp. Format: `date`. Example: `"2026-08-02"`. |
| `timezone` | Required | string | Uses an IANA time zone name. |

