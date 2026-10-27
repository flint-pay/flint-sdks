[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableAddressAdvisoriesItem

An address verification result for a delivery address or buyer location. `suggested_address` may offer a correction.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `role` | Required | string | Values: `"destination_address"`, `"buyer_location"`. |
| `suggested_address` | Optional | [DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableAddressAdvisoriesItemSuggestedAddress](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableAddressAdvisoriesItemSuggestedAddress.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableaddressadvisoriesitemsuggestedaddress) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. An address you supply for delivery quotes, previews, and selections. `suggested_address`: [field definitions](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableAddressAdvisoriesItem.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableaddressadvisoriesitemsuggested_address). |
| `verification_state` | Required | string | Values: `"needs_review"`, `"unverifiable"`. |

### DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableAddressAdvisoriesItem.suggested_address

Omitted for a checkout session credential that doesn't act for the customer the buyer verified. An address you supply for delivery quotes, previews, and selections.

Field definitions: [shared fields](DeliveryAddressRequestInput.md#deliveryaddressrequestinput).

