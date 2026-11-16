[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantBillingInvoiceLineItemPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | When Flint added this line to the invoice. `created_at`: [declared alternatives](../models/MerchantBillingInvoiceLineItemPreviousAttributesInput.md#merchantbillinginvoicelineitempreviousattributesinputcreated_at). |
| `merchant_billing_invoice_line_item_id` | Optional | string or null | Stable identifier of this line item. `merchant_billing_invoice_line_item_id`: [declared alternatives](../models/MerchantBillingInvoiceLineItemPreviousAttributesInput.md#merchantbillinginvoicelineitempreviousattributesinputmerchant_billing_invoice_line_item_id). |
| `name` | Optional | string or null | Name of the subscription charge or credit. `name`: [declared alternatives](../models/MerchantBillingInvoiceLineItemPreviousAttributesInput.md#merchantbillinginvoicelineitempreviousattributesinputname). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `total_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Unsigned line total, calculated as quantity multiplied by unit_price_money. |
| `type` | Optional | string or null | Whether the line adds a subscription charge or applies credit. Values: `"subscription"`, `"credit"`. `type`: [declared alternatives](../models/MerchantBillingInvoiceLineItemPreviousAttributesInput.md#merchantbillinginvoicelineitempreviousattributesinputtype). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Unsigned price of one unit. total_money is quantity times this amount. |

### MerchantBillingInvoiceLineItemPreviousAttributesInput.created_at

### MerchantBillingInvoiceLineItemPreviousAttributesInput.created_at variant 1

anyOf variant 1: When Flint added this line to the invoice..

- Value shape: string. When Flint added this line to the invoice. When Flint added this line to the invoice. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### MerchantBillingInvoiceLineItemPreviousAttributesInput.created_at variant 2

anyOf variant 2.

- Value shape: null. When Flint added this line to the invoice. 

### MerchantBillingInvoiceLineItemPreviousAttributesInput.merchant_billing_invoice_line_item_id

### MerchantBillingInvoiceLineItemPreviousAttributesInput.merchant_billing_invoice_line_item_id variant 1

anyOf variant 1: Stable identifier of this line item..

- Value shape: string. Stable identifier of this line item. Stable identifier of this line item. Example: `"msinvl_01KEZF7C00YB825JWZ87C5HDF0"`. 

### MerchantBillingInvoiceLineItemPreviousAttributesInput.merchant_billing_invoice_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of this line item. 

### MerchantBillingInvoiceLineItemPreviousAttributesInput.name

### MerchantBillingInvoiceLineItemPreviousAttributesInput.name variant 1

anyOf variant 1: Name of the subscription charge or credit..

- Value shape: string. Name of the subscription charge or credit. 

### MerchantBillingInvoiceLineItemPreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. Name of the subscription charge or credit. 

### MerchantBillingInvoiceLineItemPreviousAttributesInput.quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### MerchantBillingInvoiceLineItemPreviousAttributesInput.type

### MerchantBillingInvoiceLineItemPreviousAttributesInput.type variant 1

anyOf variant 1: Whether the line adds a subscription charge or applies credit..

- Value shape: string. Whether the line adds a subscription charge or applies credit. Values: `"subscription"`, `"credit"`.

### MerchantBillingInvoiceLineItemPreviousAttributesInput.type variant 2

anyOf variant 2.

- Value shape: null. Whether the line adds a subscription charge or applies credit. 

