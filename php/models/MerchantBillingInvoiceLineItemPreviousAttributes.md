[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantBillingInvoiceLineItemPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | When Flint added this line to the invoice. `created_at`: [declared alternatives](../models/MerchantBillingInvoiceLineItemPreviousAttributes.md#merchantbillinginvoicelineitempreviousattributescreated_at). |
| `merchant_billing_invoice_line_item_id` | Optional | string or null | Stable identifier of this line item. `merchant_billing_invoice_line_item_id`: [declared alternatives](../models/MerchantBillingInvoiceLineItemPreviousAttributes.md#merchantbillinginvoicelineitempreviousattributesmerchant_billing_invoice_line_item_id). |
| `name` | Optional | string or null | Name of the subscription charge or credit. `name`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1name). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Unsigned line total, calculated as quantity multiplied by unit_price_money. |
| `type` | Optional | string or null | Whether the line adds a subscription charge or applies credit. Values: `"subscription"`, `"credit"`. `type`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1type). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Unsigned price of one unit. total_money is quantity times this amount. |

### MerchantBillingInvoiceLineItemPreviousAttributes.created_at

### MerchantBillingInvoiceLineItemPreviousAttributes.created_at variant 1

anyOf variant 1: When Flint added this line to the invoice..

- Value shape: string. When Flint added this line to the invoice. When Flint added this line to the invoice. Format: `date-time`. 

### MerchantBillingInvoiceLineItemPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When Flint added this line to the invoice. 

### MerchantBillingInvoiceLineItemPreviousAttributes.merchant_billing_invoice_line_item_id

### MerchantBillingInvoiceLineItemPreviousAttributes.merchant_billing_invoice_line_item_id variant 1

anyOf variant 1: Stable identifier of this line item..

- Value shape: string. Stable identifier of this line item. 

### MerchantBillingInvoiceLineItemPreviousAttributes.merchant_billing_invoice_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of this line item. 

### MerchantBillingInvoiceLineItemPreviousAttributes.name

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.name](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1name).

### MerchantBillingInvoiceLineItemPreviousAttributes.quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### MerchantBillingInvoiceLineItemPreviousAttributes.type

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.type](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1type).

