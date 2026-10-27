[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationInput

How a delivery method works: its origin, pricing, eligibility, timing estimate, tax settings, recipient requirements, and option lifetimes.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_instructions` | Optional | [BuyerInstructionsConfigInput](../models/BuyerInstructionsConfigInput.md#buyerinstructionsconfiginput) | Controls whether checkout collects buyer instructions for this method. Controls buyer instructions for a delivery option. Omit it from a method configuration to disable instruction collection. |
| `charge_tax_category` | Required | string or null | Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. Automatic tax calculates the shipping and delivery categories at the general rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`, `null`. |
| `eligibility` | Optional | [DeliveryEligibilityExpressionInput](../models/DeliveryEligibilityExpressionInput.md#deliveryeligibilityexpressioninput) | Conditions that decide where this method is offered. Omit this field to offer the method everywhere the merchant serves. A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. |
| `estimate` | Required | [DeliveryEstimateRuleInput](../models/DeliveryEstimateRuleInput.md#deliveryestimateruleinput) | The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no timing promise. How a delivery method estimates timing, chosen by `type`: no estimate, a transit time, or a schedule window. |
| `minimum_option_lifetime_seconds` | Required | integer string | Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. maximum: `899`. |
| `origin` | Required | [DeliveryMethodOriginSelectorInput](../models/DeliveryMethodOriginSelectorInput.md#deliverymethodoriginselectorinput) | Where delivery starts. A method can use a fixed location or a delivery location set; origin.type determines allocation or buyer pickup behavior. Where a delivery method starts, chosen by `type`: a fixed location, an allocated group of locations, or a collection of pickup locations. |
| `pricing` | Required | [DeliveryPricingStrategyInput](../models/DeliveryPricingStrategyInput.md#deliverypricingstrategyinput) | How Flint calculates the delivery charge. How a delivery method sets its price, selected by `type`. Only the matching property (`fixed`, `rate_table`, `tiered`, `calculated`, `callback`, or `caller_supplied`) is set. |
| `public_details` | Optional | object | Buyer-visible structured details supplied by the merchant. `public_details`: [field definitions](../models/DeliveryMethodConfigurationInput.md#deliverymethodconfigurationinputpublic_details). |
| `quote_input_fields` | Optional | Array of string | Address and coordinate fields a callback method requires and is allowed to receive. maxItems: `12`. uniqueItems: `true`. Items values: [15 declared values](CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput-variant-1configuration-quote_input_fields--values). |
| `recipient_requirements` | Optional | Array of [DeliveryRecipientRequirementInput](../models/DeliveryRecipientRequirementInput.md#deliveryrecipientrequirementinput) | Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them. |
| `selection_guarantee_seconds` | Required | integer string | How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |
| `taxable` | Required | boolean or null | Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. |

### DeliveryMethodConfigurationInput.public_details

Buyer-visible structured details supplied by the merchant.

Field definitions: [shared fields](DeliveryMethodConfigurationPublicDetails.md#deliverymethodconfigurationpublicdetails).

