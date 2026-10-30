[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReportResponseDataPendingDownload

Link to download the generated report. Present only when status is succeeded.

A temporary link for downloading a generated report.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expires_at` | Required | string | When the download stops working: 24 hours after the report succeeded. The report keeps status succeeded and this download object afterward; create a new report to get the file again. Format: `date-time`. |
| `report_download_id` | Required | string | Identifier of this download, the last segment of url. pattern: `^rdl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `url` | Required | string | Flint API URL for the file, not the file itself. Call it with the same API key; Flint answers 307 with a redirect to a private file URL that works for a few minutes. Request url again each time you need the file. |

