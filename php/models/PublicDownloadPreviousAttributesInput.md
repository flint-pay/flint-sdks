[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicDownloadPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expires_at` | Optional | string or null | When the download stops working: 24 hours after the report succeeded. The report keeps status succeeded and this download object afterward; create a new report to get the file again. `expires_at`: [declared alternatives](../models/PublicDownloadPreviousAttributesInput.md#publicdownloadpreviousattributesinputexpires_at). |
| `report_download_id` | Optional | string or null | Identifier of this download, the last segment of url. `report_download_id`: [declared alternatives](../models/PublicDownloadPreviousAttributesInput.md#publicdownloadpreviousattributesinputreport_download_id). |
| `url` | Optional | string or null | Flint API URL for the file, not the file itself. Call it with the same API key; Flint answers 307 with a redirect to a private file URL that works for a few minutes. Request url again each time you need the file. `url`: [declared alternatives](../models/PublicDownloadPreviousAttributesInput.md#publicdownloadpreviousattributesinputurl). |

### PublicDownloadPreviousAttributesInput.expires_at

### PublicDownloadPreviousAttributesInput.expires_at variant 1

anyOf variant 1: When the download stops working: 24 hours after the report succeeded. The report keeps status succeeded and this download object afterward; create a new report to get the file again..

- Value shape: string. When the download stops working: 24 hours after the report succeeded. The report keeps status succeeded and this download object afterward; create a new report to get the file again. When the download stops working: 24 hours after the report succeeded. The report keeps status succeeded and this download object afterward; create a new report to get the file again. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PublicDownloadPreviousAttributesInput.expires_at variant 2

anyOf variant 2.

- Value shape: null. When the download stops working: 24 hours after the report succeeded. The report keeps status succeeded and this download object afterward; create a new report to get the file again. 

### PublicDownloadPreviousAttributesInput.report_download_id

### PublicDownloadPreviousAttributesInput.report_download_id variant 1

anyOf variant 1: Identifier of this download, the last segment of url..

- Value shape: string. Identifier of this download, the last segment of url. Identifier of this download, the last segment of url. pattern: `^rdl_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"rdl_01KEZF7C003GGGDW1N5QT46JDZ"`. 

### PublicDownloadPreviousAttributesInput.report_download_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of this download, the last segment of url. 

### PublicDownloadPreviousAttributesInput.url

### PublicDownloadPreviousAttributesInput.url variant 1

anyOf variant 1: Flint API URL for the file, not the file itself. Call it with the same API key; Flint answers 307 with a redirect to a private file URL that works for a few minutes. Request url again each time you need the file..

- Value shape: string. Flint API URL for the file, not the file itself. Call it with the same API key; Flint answers 307 with a redirect to a private file URL that works for a few minutes. Request url again each time you need the file. 

### PublicDownloadPreviousAttributesInput.url variant 2

anyOf variant 2.

- Value shape: null. Flint API URL for the file, not the file itself. Call it with the same API key; Flint answers 307 with a redirect to a private file URL that works for a few minutes. Request url again each time you need the file. 

