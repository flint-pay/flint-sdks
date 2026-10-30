[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkUpdatedMerchantEventData



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [PaymentLinkUpdatedMerchantEventDataObject](../models/PaymentLinkUpdatedMerchantEventDataObject.md#paymentlinkupdatedmerchanteventdataobject) | A reusable link that opens checkout. `object`: [field definitions](../models/PaymentLinkUpdatedMerchantEventData.md#paymentlinkupdatedmerchanteventdataobject-fields-1). |

### PaymentLinkUpdatedMerchantEventData.object fields 1

A reusable link that opens checkout.

Field definitions: [shared fields](PaymentLinkResponse.md#paymentlinkresponsedata).

### PaymentLinkUpdatedMerchantEventData.object fields 1.line_items[]

Declared alternatives: [PaymentLinkResponse.data.line_items[]](../models/PaymentLinkResponse.md#paymentlinkresponsedataline_items).

### PaymentLinkUpdatedMerchantEventData.object fields 1.metadata

Field definitions: [CancelReturnResponse.data.metadata](../models/CancelReturnResponse.md#cancelreturnresponsedatametadata).

### PaymentLinkUpdatedMerchantEventData.object fields 1.subscription_plan

Declared alternatives: [OrderResponse.data.subscription_plan](../models/OrderResponse.md#orderresponsedatasubscription_plan).

