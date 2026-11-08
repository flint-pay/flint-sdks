[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCustomerDeletionRequestResponse

A tracked deletion request and metadata about the API response.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerCustomerDeletionRequest](../models/BuyerCustomerDeletionRequest.md#buyercustomerdeletionrequest) | The tracked request to review and erase this customer's personal data. A request to delete a customer's personal information. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata about this response, including idempotency replay and warnings when present. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | ID of this API request. Include it when asking Flint to investigate the response. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

