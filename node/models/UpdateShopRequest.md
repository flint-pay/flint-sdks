[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateShopRequest

Send at least one field to update.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFields](../models/CheckoutBuyerFields.md#checkoutbuyerfields) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout buyer fields. Send null to remove every value you set in this section. `buyer_fields`: [declared alternatives](../models/CreateShopRequest.md#createshoprequestbuyer_fields). |
| `checkout_session_expires_in_seconds` | Optional | integer or null | Checkout lifetime in seconds. Send null to clear it. Format: `int64`. minimum: `60`. maximum: `86400`. |
| `custom_text` | Optional | [CheckoutCustomTextConfig](../models/CheckoutCustomTextConfig.md#checkoutcustomtextconfig) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout text. Send null to remove every value you set in this section. `custom_text`: [declared alternatives](../models/CreateShopRequest.md#createshoprequestcustom_text). |
| `delivery_method_ids` | Optional | Array of string | The complete selection. Send an empty array to follow checkout settings. maxItems: `25`. uniqueItems: `true`. Items: Delivery method ID. minLength: `1`. pattern: `^dmet_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `description` | Optional | string or null | Shop description. Send null to clear it. minLength: `1`. maxLength: `2048`. |
| `expected_version` | Optional | integer | Required when any of these fields is present: listings, delivery_method_ids. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `image` | Optional | [ImageRequest](../models/ImageRequest.md#imagerequest) or null | Replaced as a whole: send every field you want to keep. Cover image. Send null to remove every value you set in this section. |
| `inactive_message` | Optional | string or null | Inactive message. Send null to clear it. minLength: `1`. maxLength: `500`. |
| `inventory_routing_source` | Optional | [InventoryRoutingSourceRequest](../models/InventoryRoutingSourceRequest.md#inventoryroutingsourcerequest) or null | Replaced as a whole: send every field you want to keep. Inventory routing. Send null to remove every value you set in this section. |
| `legal` | Optional | [LegalSettings](../models/LegalSettings.md#legalsettings) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout legal configuration. Send null to remove every value you set in this section. `legal`: [declared alternatives](../models/CreateShopRequest.md#createshoprequestlegal). |
| `listings` | Optional | Array of [ShopListingPatchRequest](../models/ShopListingPatchRequest.md#shoplistingpatchrequest) | The complete ordered collection of owned listings. maxItems: `250`. |
| `metadata` | Optional | [MetadataPatchRequest](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Merged by key. Send null for a key to remove it, or null for the map to clear caller-owned metadata. |
| `name` | Optional | string | Shop name. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: `1`. maxLength: `255`. |
| `payments` | Optional | [CheckoutPaymentConfig](../models/CheckoutPaymentConfig.md#checkoutpaymentconfig) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout payment configuration. Send null to remove every value you set in this section. `payments`: [declared alternatives](../models/CreateShopRequest.md#createshoprequestpayments). |
| `promotion_config` | Optional | [CheckoutPromotionConfig](../models/CheckoutPromotionConfig.md#checkoutpromotionconfig) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout promotion configuration. Send null to remove every value you set in this section. `promotion_config`: [declared alternatives](../models/CreateShopRequest.md#createshoprequestpromotion_config). |
| `redirects` | Optional | [CheckoutRedirects](../models/CheckoutRedirects.md#checkoutredirects) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout redirects. Send null to remove every value you set in this section. `redirects`: [declared alternatives](../models/CreateShopRequest.md#createshoprequestredirects). |
| `status` | Optional | string | Setting inactive closes open, unpaid checkouts. Payments in progress can finish. Values: `"active"`, `"inactive"`. |
| `tax` | Optional | [CheckoutTaxConfig](../models/CheckoutTaxConfig.md#checkouttaxconfig) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout tax configuration. Send null to remove every value you set in this section. `tax`: [declared alternatives](../models/CreateShopRequest.md#createshoprequesttax). |
| `tip` | Optional | [CheckoutTipConfig](../models/CheckoutTipConfig.md#checkouttipconfig) or null | Patch object: fields you send are applied, fields you omit are unchanged. Checkout tipping configuration. Send null to remove every value you set in this section. `tip`: [declared alternatives](../models/CreateShopRequest.md#createshoprequesttip). |

### UpdateShopRequest.buyer_fields

Declared alternatives: [CreateShopRequest.buyer_fields](../models/CreateShopRequest.md#createshoprequestbuyer_fields).

### UpdateShopRequest.custom_text

Declared alternatives: [CreateShopRequest.custom_text](../models/CreateShopRequest.md#createshoprequestcustom_text).

### UpdateShopRequest.legal

Declared alternatives: [CreateShopRequest.legal](../models/CreateShopRequest.md#createshoprequestlegal).

### UpdateShopRequest.payments

Declared alternatives: [CreateShopRequest.payments](../models/CreateShopRequest.md#createshoprequestpayments).

### UpdateShopRequest.promotion_config

Declared alternatives: [CreateShopRequest.promotion_config](../models/CreateShopRequest.md#createshoprequestpromotion_config).

### UpdateShopRequest.redirects

Declared alternatives: [CreateShopRequest.redirects](../models/CreateShopRequest.md#createshoprequestredirects).

### UpdateShopRequest.tax

Declared alternatives: [CreateShopRequest.tax](../models/CreateShopRequest.md#createshoprequesttax).

### UpdateShopRequest.tip

Declared alternatives: [CreateShopRequest.tip](../models/CreateShopRequest.md#createshoprequesttip).

