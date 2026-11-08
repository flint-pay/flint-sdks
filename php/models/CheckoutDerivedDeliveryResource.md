[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutDerivedDeliveryResource

The delivery options Flint derived for a checkout as a buyer sees them: choice groups, input requirements, and evaluation status.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_reasons` | Required | Array of string |  |
| `choice_groups` | Required | Array of [DeliveryQuoteChoiceGroupResource](../models/DeliveryQuoteChoiceGroupResource.md#deliveryquotechoicegroupresource) | `choice_groups[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groups). |
| `delivery_quote_id` | Optional | string |  |
| `delivery_selection_id` | Required | string or null | Current delivery selection ID after reconciliation, or null when no selection is current. Assert this value with expected_delivery_selection_id on checkout delivery writes. |
| `evaluation_status` | Required | string | Values: `"complete"`, `"incomplete"`, `"degraded"`, `"requires_explicit_quote"`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `input_requirements` | Required | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) | Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these are the quote's input_requirements. Before that, they come from the methods alone and name no choice group: the fields in each method's quote_input_fields, and each recipient field a method requires. `input_requirements[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements). |
| `merchant_diagnostics` | Optional | Array of [DeliveryMerchantDiagnostic](../models/DeliveryMerchantDiagnostic.md#deliverymerchantdiagnostic) | Always present with an API key or dashboard credential. `merchant_diagnostics[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverymerchant_diagnostics). |

### CheckoutDerivedDeliveryResource.choice_groups[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groups).

### CheckoutDerivedDeliveryResource.input_requirements[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.input_requirements[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements).

### CheckoutDerivedDeliveryResource.merchant_diagnostics[]

Field definitions: [CheckoutSessionResponse.data.delivery.merchant_diagnostics[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverymerchant_diagnostics).

