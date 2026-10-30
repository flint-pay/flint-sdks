[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxRegistrationResponse

A response containing `TaxRegistration` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [TaxRegistration](../models/TaxRegistration.md#taxregistration) | An independent registration for one US state and a non-overlapping date window. Scheduled and ended are derived from the UTC date at read time without advancing version or sending a webhook. Removed is a final DELETE snapshot and is never listed. `data`: [field definitions](../models/TaxRegistrationResponse.md#taxregistrationresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### TaxRegistrationResponse.data

An independent registration for one US state and a non-overlapping date window. Scheduled and ended are derived from the UTC date at read time without advancing version or sending a webhook. Removed is a final DELETE snapshot and is never listed.

Field definitions: [shared fields](TaxRegistrationInput.md#taxregistrationinput).

