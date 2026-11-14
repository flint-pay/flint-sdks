[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerEmailChangeRequestResponse

A response containing `BuyerEmailChangeRequest` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerEmailChangeRequest](../models/BuyerEmailChangeRequest.md#buyeremailchangerequest) | Resource, collection, or operation result returned by this request. Nested child of Customer. A request to change this customer's sign-in email. Only one request can be pending per customer. `data`: [field definitions](../models/BuyerEmailChangeRequestResponse.md#buyeremailchangerequestresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerEmailChangeRequestResponse.data

Resource, collection, or operation result returned by this request. Nested child of Customer. A request to change this customer's sign-in email. Only one request can be pending per customer.

Field definitions: [shared fields](BuyerEmailChangeRequestInput.md#buyeremailchangerequestinput).

### BuyerEmailChangeRequestResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

