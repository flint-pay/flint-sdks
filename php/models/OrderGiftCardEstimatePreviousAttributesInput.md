[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderGiftCardEstimatePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `can_pay` | Optional | boolean or null | Whether this allocation can be used for payment. False when a selected card needs authorization or the allocation cannot cover the balance while satisfying the processor minimum. `can_pay`: [declared alternatives](../models/OrderGiftCardEstimatePreviousAttributesInput.md#ordergiftcardestimatepreviousattributesinputcan_pay). |
| `gift_card_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Order balance allocated to the selected gift cards. |
| `gift_cards` | Optional | Array of [OrderGiftCardAllocationPreviousAttributesInput](../models/OrderGiftCardAllocationPreviousAttributesInput.md#ordergiftcardallocationpreviousattributesinput) or null | The gift cards the estimate draws from, each with the amount it covers. `gift_cards`: [declared alternatives](../models/OrderGiftCardEstimatePreviousAttributesInput.md#ordergiftcardestimatepreviousattributesinputgift_cards). |
| `is_reserved` | Optional | boolean or null | Whether this estimate reserves gift-card funds. Estimates currently return false. `is_reserved`: [declared alternatives](../models/OrderGiftCardEstimatePreviousAttributesInput.md#ordergiftcardestimatepreviousattributesinputis_reserved). |
| `order_version` | Optional | integer or null | Order version used to calculate this gift card allocation. Read the order again if its version changed. `order_version`: [declared alternatives](../models/OrderGiftCardEstimatePreviousAttributesInput.md#ordergiftcardestimatepreviousattributesinputorder_version). |
| `processor_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Order balance remaining for the payment processor. |

### OrderGiftCardEstimatePreviousAttributesInput.can_pay

### OrderGiftCardEstimatePreviousAttributesInput.can_pay variant 1

anyOf variant 1: Whether this allocation can be used for payment. False when a selected card needs authorization or the allocation cannot cover the balance while satisfying the processor minimum..

- Value shape: boolean. Whether this allocation can be used for payment. False when a selected card needs authorization or the allocation cannot cover the balance while satisfying the processor minimum. 

### OrderGiftCardEstimatePreviousAttributesInput.can_pay variant 2

anyOf variant 2.

- Value shape: null. Whether this allocation can be used for payment. False when a selected card needs authorization or the allocation cannot cover the balance while satisfying the processor minimum. 

### OrderGiftCardEstimatePreviousAttributesInput.gift_cards

### OrderGiftCardEstimatePreviousAttributesInput.gift_cards variant 1

anyOf variant 1: The gift cards the estimate draws from, each with the amount it covers..

- Value shape: Array of [OrderGiftCardAllocationPreviousAttributesInput](../models/OrderGiftCardAllocationPreviousAttributesInput.md#ordergiftcardallocationpreviousattributesinput). The gift cards the estimate draws from, each with the amount it covers. 

### OrderGiftCardEstimatePreviousAttributesInput.gift_cards variant 2

anyOf variant 2.

- Value shape: null. The gift cards the estimate draws from, each with the amount it covers. 

### OrderGiftCardEstimatePreviousAttributesInput.is_reserved

### OrderGiftCardEstimatePreviousAttributesInput.is_reserved variant 1

anyOf variant 1: Whether this estimate reserves gift-card funds. Estimates currently return false..

- Value shape: boolean. Whether this estimate reserves gift-card funds. Estimates currently return false. 

### OrderGiftCardEstimatePreviousAttributesInput.is_reserved variant 2

anyOf variant 2.

- Value shape: null. Whether this estimate reserves gift-card funds. Estimates currently return false. 

### OrderGiftCardEstimatePreviousAttributesInput.order_version

### OrderGiftCardEstimatePreviousAttributesInput.order_version variant 1

anyOf variant 1: Order version used to calculate this gift card allocation. Read the order again if its version changed..

- Value shape: integer. Order version used to calculate this gift card allocation. Read the order again if its version changed. Order version used to calculate this gift card allocation. Read the order again if its version changed. Format: `int64`. 

### OrderGiftCardEstimatePreviousAttributesInput.order_version variant 2

anyOf variant 2.

- Value shape: null. Order version used to calculate this gift card allocation. Read the order again if its version changed. 

