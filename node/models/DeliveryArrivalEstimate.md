[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryArrivalEstimate

The estimated arrival date range for a delivery option, as calendar dates in the option's timezone.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `earliest_date` | Required | string | Calendar date in the option timezone. Do not parse it as a UTC timestamp. Format: `date`. |
| `latest_date` | Required | string | Calendar date in the option timezone. Do not parse it as a UTC timestamp. Format: `date`. |
| `timezone` | Required | string |  |

