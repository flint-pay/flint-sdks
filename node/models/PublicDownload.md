[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicDownload

A temporary link for downloading a generated report.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expires_at` | Required | string | Download expiration instant. Format: `date-time`. |
| `report_download_id` | Required | string | pattern: `^rdl_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `url` | Required | string |  |

