[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerAccessLinkResponse

A response containing `CustomerAccessLink` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | object and Alternative shapes (see declared variants) | Resource, collection, or operation result returned by this request. The result of creating a customer access link. A link delivery returns the single-use sign-in link. An email delivery confirms Flint queued the message and gives a masked recipient address. `data`: [declared alternatives](../models/CustomerAccessLinkResponse.md#customeraccesslinkresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CustomerAccessLinkResponse.data

Resource, collection, or operation result returned by this request. The result of creating a customer access link. A link delivery returns the single-use sign-in link. An email delivery confirms Flint queued the message and gives a masked recipient address.

Field definitions: [shared fields](CustomerAccessLinkInput.md#customeraccesslinkinput).

### CustomerAccessLinkResponse.data variant 1: `delivery` = `"link"`, `sent` = `true`

oneOf with delivery: "link": The result of creating a customer access link. A link delivery returns the single-use sign-in link. An email delivery confirms Flint queued the message and gives a masked recipient address..

- Condition: not (present(`sent`)).
- Required: `expires_at`.
- Optional: `recipient_email`, `sent`.
- Constraints for `delivery`: Values: `"link"`.

### CustomerAccessLinkResponse.data variant 2: `delivery` = `"email"`, `sent` = `true`

oneOf with delivery: "email": The result of creating a customer access link. A link delivery returns the single-use sign-in link. An email delivery confirms Flint queued the message and gives a masked recipient address..

- Condition: not (present(`url`)).
- Required: `recipient_email`, `sent`.
- Optional: `expires_at`.
- Constraints for `delivery`: Values: `"email"`.

### CustomerAccessLinkResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

