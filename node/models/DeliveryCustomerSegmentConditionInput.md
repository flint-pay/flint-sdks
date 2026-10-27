[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryCustomerSegmentConditionInput

Request input. Response: [AddRiskListItemsRequest](../models/AddRiskListItemsRequest.md#addrisklistitemsrequest).

A delivery eligibility condition that matches customers in one of the listed segments (`values`).





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `values` | Required | Array of string | Items: minLength: `1`. |

