[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SandboxResponse

A response containing `Sandbox` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [Sandbox](../models/Sandbox.md#sandbox) | Resource, collection, or operation result returned by this request. An isolated environment for testing an integration. `data`: [field definitions](../models/SandboxResponse.md#sandboxresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### SandboxResponse.data

Resource, collection, or operation result returned by this request. An isolated environment for testing an integration.

Field definitions: [shared fields](SandboxInput.md#sandboxinput).

### SandboxResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

