[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerEmailPreferencesResponse

A response containing `CustomerEmailPreferences` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CustomerEmailPreferences](../models/CustomerEmailPreferences.md#customeremailpreferences) | Resource, collection, or operation result returned by this request. The optional email categories an address receives from a merchant, with its current customer and preference version when available. `data`: [field definitions](../models/CustomerEmailPreferencesResponse.md#customeremailpreferencesresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CustomerEmailPreferencesResponse.data

Resource, collection, or operation result returned by this request. The optional email categories an address receives from a merchant, with its current customer and preference version when available.

Field definitions: [shared fields](CustomerEmailPreferencesInput.md#customeremailpreferencesinput).

### CustomerEmailPreferencesResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

