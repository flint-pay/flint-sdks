[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutDerivedDeliveryResource

The delivery options Flint derived for a checkout as a buyer sees them: choice groups, input requirements, and evaluation status.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_reasons` | Required | Array of string |  |
| `choice_groups` | Required | Array of [DeliveryQuoteChoiceGroupResource](../models/DeliveryQuoteChoiceGroupResource.md#deliveryquotechoicegroupresource) |  |
| `delivery_quote_id` | Optional | string |  |
| `evaluation_status` | Required | string | Values: `"complete"`, `"incomplete"`, `"degraded"`, `"requires_explicit_quote"`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `input_requirements` | Required | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) | Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these are the quote's input_requirements. Before that, they come from the methods alone and name no choice group: the fields in each method's quote_input_fields, and each recipient field a method requires. |
| `merchant_diagnostics` | Optional | Array of [DeliveryMerchantDiagnostic](../models/DeliveryMerchantDiagnostic.md#deliverymerchantdiagnostic) | Always present with an API key or dashboard credential. |

