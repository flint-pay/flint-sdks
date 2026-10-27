[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FeedbackReportsCreateResponse201DataRatingReportingClient

Tool submitting the feedback, independently of the product being discussed. Its name is required when present.

The client that submits a feedback report, with its name, platform, version, and schema version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Required | string | Name of the submitting tool. Required when reporting_client is present. Limited to 64 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `64`. |
| `platform` | Optional | string | Platform on which the submitting client runs. Values: `"macos"`, `"linux"`, `"windows"`, `"ios"`, `"android"`, `"web"`, `"other"`. |
| `schema_version` | Optional | string | Feedback schema version used by the submitting tool. Limited to 64 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `64`. |
| `version` | Optional | string | Version of the submitting tool. Limited to 64 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: `1`. maxLength: `64`. |

