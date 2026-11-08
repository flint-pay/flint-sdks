[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DemoSessionResponse

A response containing `DemoSession` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [DemoSession](../models/DemoSession.md#demosession) | Resource, collection, or operation result returned by this request. A demo session with its sandbox, API key, and expiry. `data`: [field definitions](../models/DemoSessionResponse.md#demosessionresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### DemoSessionResponse.data

Resource, collection, or operation result returned by this request. A demo session with its sandbox, API key, and expiry.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_key` | Required | [DemoSessionAPIKey](../models/DemoSessionAPIKey.md#demosessionapikey) | The API key issued for a demo session, with its `secret_key` and the scopes it grants. |
| `demo_session_id` | Required | string | Unique identifier for this demo session, prefixed `demo_`. Example: `"demo_01KEZF7C001S0675NAS5BPBS0V"`. |
| `expires_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `sandbox_id` | Required | string | ID of the sandbox this resource belongs to. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |

### DemoSessionResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

