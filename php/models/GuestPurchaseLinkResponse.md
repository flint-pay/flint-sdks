[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GuestPurchaseLinkResponse

A response containing `GuestPurchaseLink` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [GuestPurchaseLink](../models/GuestPurchaseLink.md#guestpurchaselink) | Resource, collection, or operation result returned by this request. Result of linking a guest's purchases to a customer, with the customer, the email, and the number of orders linked. `data`: [field definitions](../models/GuestPurchaseLinkResponse.md#guestpurchaselinkresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### GuestPurchaseLinkResponse.data

Resource, collection, or operation result returned by this request. Result of linking a guest's purchases to a customer, with the customer, the email, and the number of orders linked.

Field definitions: [shared fields](GuestPurchaseLinkInput.md#guestpurchaselinkinput).

### GuestPurchaseLinkResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

