[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppInstallWithEndedAccessResponseInput

A partner app install revoke result and request metadata.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PartnerAppInstallWithEndedAccessInput](../models/PartnerAppInstallWithEndedAccessInput.md#partnerappinstallwithendedaccessinput) | The connected app install and the linked API key and webhook endpoint IDs ended by this revoke request. The connected app install and the API keys and webhook endpoints ended by this request. A merchant's authorization of a partner application. A merchant's authorization of a partner application. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Response metadata, including the API version, trace ID, warnings, and whether this result was replayed, when present. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, useful when contacting Flint support. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

