[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryCustomerSegmentConditionInput

A delivery eligibility condition that matches customers in one of the listed segments (`values`).

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `values` | Required | Array of string | Customer segments to match, from 1 to 100 unique values. Matches when the customer's segment is one of them. Items: minLength: `1`. |

