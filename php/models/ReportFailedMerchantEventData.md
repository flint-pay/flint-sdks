[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReportFailedMerchantEventData



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and object and Alternative shapes (see declared variants) | A report generated from the merchant's activity. `object`: [declared alternatives](../models/ReportFailedMerchantEventData.md#reportfailedmerchanteventdataobject). |

### ReportFailedMerchantEventData.object

A report generated from the merchant's activity.

Field definitions: [shared fields](ReportResponse.md#reportresponsedata).

### ReportFailedMerchantEventData.object variant 1: `status` = `"pending"`

oneOf with status: "pending": A report generated from the merchant's activity..

- Condition: not (at least one(present(`download`); present(`failure_reason`))).
- Optional: `download`, `failure_reason`.
- Constraints for `status`: Values: `"pending"`.

### ReportFailedMerchantEventData.object variant 2: `status` = `"succeeded"`

oneOf with status: "succeeded": A report generated from the merchant's activity..

- Condition: not (present(`failure_reason`)).
- Required: `download`.
- Optional: `failure_reason`.
- Constraints for `status`: Values: `"succeeded"`.

### ReportFailedMerchantEventData.object variant 3: `status` = `"failed"`

oneOf with status: "failed": A report generated from the merchant's activity..

- Condition: not (present(`download`)).
- Required: `failure_reason`.
- Optional: `download`.
- Constraints for `status`: Values: `"failed"`.

### ReportFailedMerchantEventData.object.download

Field definitions: [ReportResponse.data.download](../models/ReportResponse.md#reportresponsedatadownload).

