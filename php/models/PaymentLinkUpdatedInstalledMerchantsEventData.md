[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkUpdatedInstalledMerchantsEventData



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [PaymentLinkUpdatedInstalledMerchantsEventDataObject](../models/PaymentLinkUpdatedInstalledMerchantsEventDataObject.md#paymentlinkupdatedinstalledmerchantseventdataobject) | A reusable link that opens checkout. `object`: [field definitions](../models/PaymentLinkUpdatedInstalledMerchantsEventData.md#paymentlinkupdatedinstalledmerchantseventdataobject-fields-1). |

### PaymentLinkUpdatedInstalledMerchantsEventData.object fields 1

A reusable link that opens checkout.

Field definitions: [shared fields](PaymentLinkResponse.md#paymentlinkresponsedata).

### PaymentLinkUpdatedInstalledMerchantsEventData.object fields 1.line_items[]

Declared alternatives: [PaymentLinkResponse.data.line_items[]](../models/PaymentLinkResponse.md#paymentlinkresponsedataline_items).

### PaymentLinkUpdatedInstalledMerchantsEventData.object fields 1.metadata

Field definitions: [CancelReturnResponse.data.metadata](../models/CancelReturnResponse.md#cancelreturnresponsedatametadata).

### PaymentLinkUpdatedInstalledMerchantsEventData.object fields 1.subscription_plan

Declared alternatives: [OrderResponse.data.subscription_plan](../models/OrderResponse.md#orderresponsedatasubscription_plan).

