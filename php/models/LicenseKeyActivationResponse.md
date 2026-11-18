[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKeyActivationResponse

A response containing `LicenseKeyActivation` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [LicenseKeyActivation](../models/LicenseKeyActivation.md#licensekeyactivation) | Resource, collection, or operation result returned by this request. A top-level child of a license key representing an installation. `data`: [field definitions](../models/LicenseKeyActivationResponse.md#licensekeyactivationresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### LicenseKeyActivationResponse.data

Resource, collection, or operation result returned by this request. A top-level child of a license key representing an installation.

Field definitions: [shared fields](LicenseKeyActivationInput.md#licensekeyactivationinput).

### LicenseKeyActivationResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

