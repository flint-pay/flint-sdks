[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryMigrationFailureListResponse

A page of `SubscriptionDeliveryMigrationFailure` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [SubscriptionDeliveryMigrationFailure](../models/SubscriptionDeliveryMigrationFailure.md#subscriptiondeliverymigrationfailure) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/SubscriptionDeliveryMigrationFailureListResponse.md#subscriptiondeliverymigrationfailurelistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### SubscriptionDeliveryMigrationFailureListResponse.data[]

A subscription that could not be moved to a new delivery method, with the reason.

Field definitions: [shared fields](SubscriptionDeliveryMigrationFailureInput.md#subscriptiondeliverymigrationfailureinput).

### SubscriptionDeliveryMigrationFailureListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

