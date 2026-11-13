[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingStrategyCreateInputCalculated

The `calculated` variant of `DeliveryPricingStrategyCreateInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculated` | Required | [DeliveryCalculatedPricingStrategy](../models/DeliveryCalculatedPricingStrategy.md#deliverycalculatedpricingstrategy) | Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery pricing you supply for a delivery method: base fee, distance and weight rates, per-item handling, and fee limits, by currency. `calculated`: [field definitions](../models/DeliveryPricingStrategyCreateInputCalculated.md#deliverypricingstrategycreateinputcalculatedcalculated). |
| `callback` | Optional | [DeliveryCallbackPricingStrategyRequest](../models/DeliveryCallbackPricingStrategyRequest.md#deliverycallbackpricingstrategyrequest) | Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing you supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and maximum fees by currency. |
| `caller_supplied` | Optional | [DeliveryCallerSuppliedPricingStrategyRequest](../models/DeliveryCallerSuppliedPricingStrategyRequest.md#deliverycallersuppliedpricingstrategyrequest) | Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery pricing where you supply the rate when creating a delivery quote, bounded by minimum and maximum fees by currency. |
| `fixed` | Optional | [DeliveryFixedPricingStrategy](../models/DeliveryFixedPricingStrategy.md#deliveryfixedpricingstrategy) | Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price by currency, supplied for a delivery method. |
| `rate_table` | Optional | [DeliveryRateTablePricingStrategyCreateRequest](../models/DeliveryRateTablePricingStrategyCreateRequest.md#deliveryratetablepricingstrategycreaterequest) | Rate table pricing settings. Set only when `type` is `rate_table`. Rate table pricing strategy you supply when creating a delivery method: a list of prioritized rates, each with a condition and prices. |
| `tiered` | Optional | [DeliveryTieredPricingStrategy](../models/DeliveryTieredPricingStrategy.md#deliverytieredpricingstrategy) | Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the basis is total weight. `tiered`: [declared alternatives](../models/DeliveryPricingStrategyCreateInputCalculated.md#deliverypricingstrategycreateinputcalculatedtiered). |
| `type` | Required | string | How the method sets its price. Set the property named by this value. Values: `"calculated"`. |

### DeliveryPricingStrategyCreateInputCalculated.calculated

Calculated pricing settings. Set only when `type` is `calculated`. Calculated delivery pricing you supply for a delivery method: base fee, distance and weight rates, per-item handling, and fee limits, by currency.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `base_fee_currency_options` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Base delivery fee by ISO currency code. Each key must equal the Money object's currency. `base_fee_currency_options{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `distance` | Optional | [DeliveryDistanceUnitPrice](../models/DeliveryDistanceUnitPrice.md#deliverydistanceunitprice) | Charge per unit of distance between the origin and the destination. A distance rate you supply for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`. `distance`: [field definitions](../models/DeliveryCalculatedPricingStrategy.md#deliverycalculatedpricingstrategy-variant-2distance). |
| `maximum_fee_currency_options` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. `maximum_fee_currency_options{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `minimum_fee_currency_options` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. `minimum_fee_currency_options{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `per_item_handling_fee_currency_options` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Handling fee per item by ISO currency code. Each key must equal the Money object's currency. `per_item_handling_fee_currency_options{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `weight` | Optional | [DeliveryWeightUnitPrice](../models/DeliveryWeightUnitPrice.md#deliveryweightunitprice) | Charge per unit of weight of the items. Price per unit of weight you supply for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`. `weight`: [field definitions](../models/DeliveryCalculatedPricingStrategy.md#deliverycalculatedpricingstrategy-variant-2weight). |

### DeliveryPricingStrategyCreateInputCalculated.calculated.base_fee_currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### DeliveryPricingStrategyCreateInputCalculated.calculated.distance

Field definitions: [DeliveryCalculatedPricingStrategy variant 2.distance](../models/DeliveryCalculatedPricingStrategy.md#deliverycalculatedpricingstrategy-variant-2distance).

### DeliveryPricingStrategyCreateInputCalculated.calculated.maximum_fee_currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### DeliveryPricingStrategyCreateInputCalculated.calculated.minimum_fee_currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### DeliveryPricingStrategyCreateInputCalculated.calculated.per_item_handling_fee_currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### DeliveryPricingStrategyCreateInputCalculated.calculated.weight

Field definitions: [DeliveryCalculatedPricingStrategy variant 2.weight](../models/DeliveryCalculatedPricingStrategy.md#deliverycalculatedpricingstrategy-variant-2weight).

### DeliveryPricingStrategyCreateInputCalculated.tiered

Tiered pricing settings. Set only when `type` is `tiered`. Tiered pricing strategy you supply for a delivery method: a `basis`, a list of bands with prices, and a weight `unit` when the basis is total weight.

Field definitions: [shared fields](DeliveryTieredPricingStrategy.md#deliverytieredpricingstrategy).

### DeliveryPricingStrategyCreateInputCalculated.tiered variant 1: `basis` = `"choice_group.total_weight"`

oneOf with basis: "choice_group.total_weight": The `choice_group.total_weight` variant of `DeliveryTieredPricingStrategyInput`..

- Required: `unit`.
- Constraints for `basis`: Values: `"choice_group.total_weight"`.

### DeliveryPricingStrategyCreateInputCalculated.tiered variant 2

oneOf with basis: "caller.tier_key" | "choice_group.fulfillment_quantity" | "choice_group.merchandise_subtotal_after_line_item_discounts" | "choice_group.merchandise_subtotal_before_discounts" | "order.merchandise_subtotal_after_line_item_discounts" | "order.merchandise_subtotal_before_discounts": The `caller.tier_key` variant of `DeliveryTieredPricingStrategyInput`. The `choice_group.fulfillment_quantity` variant of `DeliveryTieredPricingStrategyInput`. The `choice_group.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategyInput`. The `choice_group.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategyInput`. The `order.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategyInput`. The `order.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategyInput`..

- Condition: not (present(`unit`)).
- Optional: `unit`.
- Constraints for `basis`: Values: `"choice_group.fulfillment_quantity"`, `"choice_group.merchandise_subtotal_before_discounts"`, `"choice_group.merchandise_subtotal_after_line_item_discounts"`, `"order.merchandise_subtotal_before_discounts"`, `"order.merchandise_subtotal_after_line_item_discounts"`, `"caller.tier_key"`.

