[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCustomerDeletionRequestListResponseInput

A page of tracked customer deletion requests.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [BuyerCustomerDeletionRequestInput](../models/BuyerCustomerDeletionRequestInput.md#buyercustomerdeletionrequestinput) | Deletion requests matching the supplied filters, in the published list order. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Metadata about this response, including warnings when present. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string | Opaque cursor to pass as page_token to fetch the next page. Omitted when no more results remain. |
| `request_id` | Required | string | ID of this API request. Include it when asking Flint to investigate the response. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

