[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCustomerDeletionRequestListResponse

A page of tracked customer deletion requests.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [BuyerCustomerDeletionRequest](../models/BuyerCustomerDeletionRequest.md#buyercustomerdeletionrequest) | Deletion requests matching the supplied filters, in the published list order. `data[]`: [field definitions](../models/BuyerCustomerDeletionRequestListResponse.md#buyercustomerdeletionrequestlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata about this response, including warnings when present. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/CustomerDeletionRequestListResponse.md#customerdeletionrequestlistresponsemeta). |
| `next_page_token` | Optional | string | Opaque cursor to pass as page_token to fetch the next page. Omitted when no more results remain. |
| `request_id` | Required | string | ID of this API request. Include it when asking Flint to investigate the response. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerCustomerDeletionRequestListResponse.data[]

A request to delete a customer's personal information.

Field definitions: [shared fields](BuyerCustomerDeletionRequestInput.md#buyercustomerdeletionrequestinput).

### BuyerCustomerDeletionRequestListResponse.meta

Field definitions: [CustomerDeletionRequestListResponse.meta](../models/CustomerDeletionRequestListResponse.md#customerdeletionrequestlistresponsemeta).

