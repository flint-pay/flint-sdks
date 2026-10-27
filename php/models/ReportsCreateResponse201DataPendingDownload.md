[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReportsCreateResponse201DataPendingDownload

Link to download the generated report. Present only when status is succeeded.

A temporary link for downloading a generated report.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expires_at` | Required | string | Download expiration instant. Format: `date-time`. |
| `report_download_id` | Required | string | pattern: `^rdl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `url` | Required | string |  |

