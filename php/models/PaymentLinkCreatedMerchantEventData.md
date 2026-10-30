[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkCreatedMerchantEventData



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [PaymentLinkCreatedMerchantEventDataObject](../models/PaymentLinkCreatedMerchantEventDataObject.md#paymentlinkcreatedmerchanteventdataobject) | A reusable link that opens checkout. `object`: [field definitions](../models/PaymentLinkCreatedMerchantEventData.md#paymentlinkcreatedmerchanteventdataobject-fields-1). |

### PaymentLinkCreatedMerchantEventData.object fields 1

A reusable link that opens checkout.

Field definitions: [shared fields](PaymentLinkResponse.md#paymentlinkresponsedata).

### PaymentLinkCreatedMerchantEventData.object fields 1.line_items[]

Declared alternatives: [PaymentLinkResponse.data.line_items[]](../models/PaymentLinkResponse.md#paymentlinkresponsedataline_items).

### PaymentLinkCreatedMerchantEventData.object fields 1.metadata

Field definitions: [CancelReturnResponse.data.metadata](../models/CancelReturnResponse.md#cancelreturnresponsedatametadata).

### PaymentLinkCreatedMerchantEventData.object fields 1.subscription_plan

Declared alternatives: [OrderResponse.data.subscription_plan](../models/OrderResponse.md#orderresponsedatasubscription_plan).

