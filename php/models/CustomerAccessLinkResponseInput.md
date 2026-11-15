[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerAccessLinkResponseInput

A response containing `CustomerAccessLink` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CustomerAccessLinkInput](../models/CustomerAccessLinkInput.md#customeraccesslinkinput) | Resource, collection, or operation result returned by this request. The result of creating a customer account link. With link delivery it carries the single-use sign-in link. With email delivery Flint has queued that link in an email to the customer, and the response carries only a masked recipient address. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

