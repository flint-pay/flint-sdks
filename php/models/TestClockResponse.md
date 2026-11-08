[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TestClockResponse

A response containing `TestClock` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [TestClock](../models/TestClock.md#testclock) | Resource, collection, or operation result returned by this request. A sandbox clock that customers created on it, and their subscriptions, read as the current time. `data`: [field definitions](../models/TestClockResponse.md#testclockresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### TestClockResponse.data

Resource, collection, or operation result returned by this request. A sandbox clock that customers created on it, and their subscriptions, read as the current time.

Field definitions: [shared fields](TestClockInput.md#testclockinput).

### TestClockResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

