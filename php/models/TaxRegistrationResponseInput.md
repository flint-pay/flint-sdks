[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxRegistrationResponseInput

A response containing `TaxRegistration` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [TaxRegistrationInput](../models/TaxRegistrationInput.md#taxregistrationinput) | Resource, collection, or operation result returned by this request. An independent registration for a country and optional subdivision, with a non-overlapping date window. Scheduled and ended are derived from the UTC date at read time without advancing version or sending a webhook. Removed is a final DELETE snapshot and is never listed. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

