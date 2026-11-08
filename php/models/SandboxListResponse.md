[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SandboxListResponse

A page of `Sandbox` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [Sandbox](../models/Sandbox.md#sandbox) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/SandboxListResponse.md#sandboxlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### SandboxListResponse.data[]

An isolated environment for testing an integration.

Field definitions: [shared fields](SandboxInput.md#sandboxinput).

### SandboxListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

