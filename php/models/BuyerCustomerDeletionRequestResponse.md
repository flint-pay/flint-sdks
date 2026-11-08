[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCustomerDeletionRequestResponse

A tracked deletion request and metadata about the API response.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerCustomerDeletionRequest](../models/BuyerCustomerDeletionRequest.md#buyercustomerdeletionrequest) | The tracked request to review and erase this customer's personal data. A request to delete a customer's personal information. `data`: [field definitions](../models/BuyerCustomerDeletionRequestResponse.md#buyercustomerdeletionrequestresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata about this response, including idempotency replay and warnings when present. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/CustomerDeletionRequestResponse.md#customerdeletionrequestresponsemeta). |
| `request_id` | Required | string | ID of this API request. Include it when asking Flint to investigate the response. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerCustomerDeletionRequestResponse.data

The tracked request to review and erase this customer's personal data. A request to delete a customer's personal information.

Field definitions: [shared fields](BuyerCustomerDeletionRequestInput.md#buyercustomerdeletionrequestinput).

### BuyerCustomerDeletionRequestResponse.meta

Field definitions: [CustomerDeletionRequestResponse.meta](../models/CustomerDeletionRequestResponse.md#customerdeletionrequestresponsemeta).

