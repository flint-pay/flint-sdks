[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentVolumeTimeseriesResponse

A response containing `PaymentVolumeTimeseries` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PaymentVolumeTimeseries](../models/PaymentVolumeTimeseries.md#paymentvolumetimeseries) | The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

