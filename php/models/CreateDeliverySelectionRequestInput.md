[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliverySelectionRequestInput

The request body for: Create delivery selection.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `choices` | Required | Array of [CreateDeliverySelectionChoiceRequestInput](../models/CreateDeliverySelectionChoiceRequestInput.md#createdeliveryselectionchoicerequestinput) |  |
| `delivery_quote_id` | Required | string | minLength: `1`. |
| `destination_address` | Optional | [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput) | A postal address you supply when creating or updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to clear it. |
| `expected_delivery_selection_id` | Required | string or null | Current delivery selection ID used for compare-and-swap. Send null to assert that no selection exists. minLength: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `external_system` | Optional | string | minLength: `1`. |
| `recipient` | Optional | [DeliverySelectionRecipientRequestInput](../models/DeliverySelectionRecipientRequestInput.md#deliveryselectionrecipientrequestinput) | Recipient details you supply with a delivery selection or subscription delivery: optional `name`, `email`, and `phone`. |

