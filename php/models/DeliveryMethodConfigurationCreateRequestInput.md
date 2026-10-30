[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationCreateRequestInput

The configuration you supply when creating a delivery method. `origin` and `pricing` are required.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_instructions` | Optional | [BuyerInstructionsConfigRequestInput](../models/BuyerInstructionsConfigRequestInput.md#buyerinstructionsconfigrequestinput) | Controls whether checkout collects buyer instructions for this method. Controls buyer instructions for a delivery option. Omit it from a method configuration to disable instruction collection. |
| `charge_tax_category` | Optional | string or null | Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. Automatic tax calculates the shipping and delivery categories at the general rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`, `null`. |
| `eligibility` | Optional | [DeliveryEligibilityExpressionInput](../models/DeliveryEligibilityExpressionInput.md#deliveryeligibilityexpressioninput) | Conditions that decide where this method is offered. Omit this field to offer the method everywhere the merchant serves. A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. |
| `estimate` | Optional | [DeliveryEstimateRuleRequestInput](../models/DeliveryEstimateRuleRequestInput.md#deliveryestimaterulerequestinput) | The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no timing promise. The timing estimate rule you supply for a delivery method, chosen by `type`: none, a transit time, or a schedule window. |
| `minimum_option_lifetime_seconds` | Optional | integer | Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. Format: `int64`. minimum: `0`. maximum: `899`. |
| `origin` | Required | [DeliveryMethodOriginSelectorRequestInput](../models/DeliveryMethodOriginSelectorRequestInput.md#deliverymethodoriginselectorrequestinput) | Where delivery starts. A method can use a fixed location or a delivery location set; origin.type determines allocation or buyer pickup behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location, or locations from a delivery location set or an inline list. |
| `pricing` | Required | [DeliveryPricingStrategyCreateRequestInput](../models/DeliveryPricingStrategyCreateRequestInput.md#deliverypricingstrategycreaterequestinput) | The pricing strategy you supply when creating a delivery method. Set `type` and the matching property. |
| `public_details` | Optional | object | Buyer-visible structured details supplied by the merchant. `public_details`: [field definitions](../models/DeliveryMethodConfigurationCreateRequestInput.md#deliverymethodconfigurationcreaterequestinputpublic_details). |
| `quote_input_fields` | Optional | Array of string | Address and coordinate fields a callback method requires and is allowed to receive. maxItems: `12`. uniqueItems: `true`. Items values: [15 declared values](CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput-variant-1configuration-quote_input_fields--values). |
| `recipient_requirements` | Optional | Array of [DeliveryRecipientRequirementInput](../models/DeliveryRecipientRequirementInput.md#deliveryrecipientrequirementinput) | Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them. |
| `selection_guarantee_seconds` | Optional | integer | How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry. Format: `int64`. minimum: `0`. |
| `taxable` | Optional | boolean or null | Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. |

### DeliveryMethodConfigurationCreateRequestInput.public_details

Buyer-visible structured details supplied by the merchant.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `instructions` | Optional | string | Buyer-visible instructions for this method. minLength: `1`. maxLength: `2048`. |
| `pickup_mode` | Optional | string | Required for pickup methods and rejected for other method types. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`. |
| `service_level` | Optional | string | Buyer-visible service level. Shipment accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Values: `"economy"`, `"standard"`, `"expedited"`, `"express"`, `"overnight"`, `"same_day"`, `"on_demand"`, `"scheduled"`. |

