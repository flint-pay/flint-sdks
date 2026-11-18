[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKeyActivationListResponse

A page of `LicenseKeyActivation` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [LicenseKeyActivation](../models/LicenseKeyActivation.md#licensekeyactivation) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/LicenseKeyActivationListResponse.md#licensekeyactivationlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### LicenseKeyActivationListResponse.data[]

A top-level child of a license key representing an installation.

Field definitions: [shared fields](LicenseKeyActivationInput.md#licensekeyactivationinput).

### LicenseKeyActivationListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

