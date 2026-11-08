[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceListResponseInput

A page of `Invoice` objects.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [InvoiceInput](../models/InvoiceInput.md#invoiceinput) | Resource, collection, or operation result returned by this request. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

