[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueInputRequiredExpectedAmountMoney

The delivery charge this method will quote once its input_requirements are met, when the charge does not depend on them. Only present on input_required outcomes with fixed pricing. Pickup candidates report it only when every pickup method that could serve the choice group has fixed pricing and the same amount. Omitted when unknown; never included in order amounts. Pickup-location previews do not carry this field.

Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Response model.

Fields, types, descriptions and enum values: [DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableExpectedAmountMoney](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableExpectedAmountMoney.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableexpectedamountmoney).

