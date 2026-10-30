[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkCreatedInstalledMerchantsEventData



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [PaymentLinkCreatedInstalledMerchantsEventDataObject](../models/PaymentLinkCreatedInstalledMerchantsEventDataObject.md#paymentlinkcreatedinstalledmerchantseventdataobject) | A reusable link that opens checkout. `object`: [field definitions](../models/PaymentLinkCreatedInstalledMerchantsEventData.md#paymentlinkcreatedinstalledmerchantseventdataobject-fields-1). |

### PaymentLinkCreatedInstalledMerchantsEventData.object fields 1

A reusable link that opens checkout.

Field definitions: [shared fields](PaymentLinkResponse.md#paymentlinkresponsedata).

### PaymentLinkCreatedInstalledMerchantsEventData.object fields 1.line_items[]

Declared alternatives: [PaymentLinkResponse.data.line_items[]](../models/PaymentLinkResponse.md#paymentlinkresponsedataline_items).

### PaymentLinkCreatedInstalledMerchantsEventData.object fields 1.metadata

Field definitions: [CancelReturnResponse.data.metadata](../models/CancelReturnResponse.md#cancelreturnresponsedatametadata).

### PaymentLinkCreatedInstalledMerchantsEventData.object fields 1.subscription_plan

Declared alternatives: [OrderResponse.data.subscription_plan](../models/OrderResponse.md#orderresponsedatasubscription_plan).

