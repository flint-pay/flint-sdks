[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantBillingInvoiceLineItemPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | When Flint added this line to the invoice. `created_at`: [declared alternatives](../models/MerchantBillingInvoiceLineItemPreviousAttributes.md#merchantbillinginvoicelineitempreviousattributescreated_at). |
| `merchant_billing_invoice_line_item_id` | Optional | string or null | Stable identifier of this line item. `merchant_billing_invoice_line_item_id`: [declared alternatives](../models/MerchantBillingInvoiceLineItemPreviousAttributes.md#merchantbillinginvoicelineitempreviousattributesmerchant_billing_invoice_line_item_id). |
| `name` | Optional | string or null | Name of the subscription charge or credit. `name`: [declared alternatives](../models/MerchantBillingInvoiceLineItemPreviousAttributes.md#merchantbillinginvoicelineitempreviousattributesname). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Unsigned line total, calculated as quantity multiplied by unit_price_money. `total_money`: [declared alternatives](../models/MerchantBillingInvoiceLineItemPreviousAttributes.md#merchantbillinginvoicelineitempreviousattributestotal_money). |
| `type` | Optional | string or null | Whether the line adds a subscription charge or applies credit. Values: `"subscription"`, `"credit"`. `type`: [declared alternatives](../models/MerchantBillingInvoiceLineItemPreviousAttributes.md#merchantbillinginvoicelineitempreviousattributestype). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Unsigned price of one unit. total_money is quantity times this amount. `unit_price_money`: [declared alternatives](../models/MerchantBillingInvoiceLineItemPreviousAttributes.md#merchantbillinginvoicelineitempreviousattributesunit_price_money). |

### MerchantBillingInvoiceLineItemPreviousAttributes.created_at

### MerchantBillingInvoiceLineItemPreviousAttributes.created_at variant 1

anyOf variant 1: When Flint added this line to the invoice..

- Value shape: string. When Flint added this line to the invoice. When Flint added this line to the invoice. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### MerchantBillingInvoiceLineItemPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When Flint added this line to the invoice. 

### MerchantBillingInvoiceLineItemPreviousAttributes.merchant_billing_invoice_line_item_id

### MerchantBillingInvoiceLineItemPreviousAttributes.merchant_billing_invoice_line_item_id variant 1

anyOf variant 1: Stable identifier of this line item..

- Value shape: string. Stable identifier of this line item. Stable identifier of this line item. Example: `"msinvl_01KEZF7C00YB825JWZ87C5HDF0"`. 

### MerchantBillingInvoiceLineItemPreviousAttributes.merchant_billing_invoice_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of this line item. 

### MerchantBillingInvoiceLineItemPreviousAttributes.name

### MerchantBillingInvoiceLineItemPreviousAttributes.name variant 1

anyOf variant 1: Name of the subscription charge or credit..

- Value shape: string. Name of the subscription charge or credit. 

### MerchantBillingInvoiceLineItemPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name of the subscription charge or credit. 

### MerchantBillingInvoiceLineItemPreviousAttributes.quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

### MerchantBillingInvoiceLineItemPreviousAttributes.total_money

Unsigned line total, calculated as quantity multiplied by unit_price_money.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### MerchantBillingInvoiceLineItemPreviousAttributes.total_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### MerchantBillingInvoiceLineItemPreviousAttributes.total_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Unsigned line total, calculated as quantity multiplied by unit_price_money. 

### MerchantBillingInvoiceLineItemPreviousAttributes.total_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### MerchantBillingInvoiceLineItemPreviousAttributes.total_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### MerchantBillingInvoiceLineItemPreviousAttributes.type

### MerchantBillingInvoiceLineItemPreviousAttributes.type variant 1

anyOf variant 1: Whether the line adds a subscription charge or applies credit..

- Value shape: string. Whether the line adds a subscription charge or applies credit. Values: `"subscription"`, `"credit"`.

### MerchantBillingInvoiceLineItemPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. Whether the line adds a subscription charge or applies credit. 

### MerchantBillingInvoiceLineItemPreviousAttributes.unit_price_money

Unsigned price of one unit. total_money is quantity times this amount.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### MerchantBillingInvoiceLineItemPreviousAttributes.unit_price_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### MerchantBillingInvoiceLineItemPreviousAttributes.unit_price_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Unsigned price of one unit. total_money is quantity times this amount. 

### MerchantBillingInvoiceLineItemPreviousAttributes.unit_price_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### MerchantBillingInvoiceLineItemPreviousAttributes.unit_price_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

