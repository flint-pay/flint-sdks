[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BundleUpdatedInstalledMerchantsEventData



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [BundleUpdatedInstalledMerchantsEventDataObject](../models/BundleUpdatedInstalledMerchantsEventDataObject.md#bundleupdatedinstalledmerchantseventdataobject) | Several variants sold as one line at the bundle's price. A bundle line takes its components' shared taxability and tax category; all components must share both stored values. An unset category uses the merchant default and equals only another unset category. |

