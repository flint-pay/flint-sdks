[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisputeResponseSessionResponse

A response containing `DisputeResponseSession` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [DisputeResponseSession](../models/DisputeResponseSession.md#disputeresponsesession) | Resource, collection, or operation result returned by this request. A session for responding to a dispute in the browser, with the `dispute_id` and a short-lived `client_session` for the embedded response component. `data`: [field definitions](../models/DisputeResponseSessionResponse.md#disputeresponsesessionresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### DisputeResponseSessionResponse.data

Resource, collection, or operation result returned by this request. A session for responding to a dispute in the browser, with the `dispute_id` and a short-lived `client_session` for the embedded response component.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_session` | Required | [DisputeResponseSessionClientSession](../models/DisputeResponseSessionClientSession.md#disputeresponsesessionclientsession) | The browser session for the response component. It appears only in this response, never on the dispute, in lists, or in webhooks. Browser session for responding to a dispute, with its expiry and the Stripe details needed to load the embedded response component. `client_session`: [field definitions](../models/DisputeResponseSessionResponse.md#disputeresponsesessionresponsedataclient_session). |
| `dispute_id` | Required | string | ID of the dispute the session is for. Example: `"du_01KEZF7C00DEJSF1KTXRT4BBQD"`. |

### DisputeResponseSessionResponse.data.client_session

The browser session for the response component. It appears only in this response, never on the dispute, in lists, or in webhooks. Browser session for responding to a dispute, with its expiry and the Stripe details needed to load the embedded response component.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expires_at` | Required | string | Time the browser session expires. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `stripe` | Required | [DisputeResponseSessionStripe](../models/DisputeResponseSessionStripe.md#disputeresponsesessionstripe) | What the browser needs to load Stripe's embedded dispute component. Stripe details for the embedded dispute response component: the publishable key, an account session, and the components to render. |

### DisputeResponseSessionResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

