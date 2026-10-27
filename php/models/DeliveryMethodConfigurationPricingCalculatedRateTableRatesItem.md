[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem

One rate in a rate table pricing strategy: a `when` condition, a `priority`, and a price per currency. The first matching rate by priority sets the price.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of ([DeliveryMethodConfigurationPricingCalculatedRateTableRatesItemCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItemCurrencyOptionsValue.md#deliverymethodconfigurationpricingcalculatedratetableratesitemcurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) |  |
| `delivery_rate_id` | Required | string |  |
| `priority` | Required | integer | Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0. Format: `int32`. |
| `when` | Required | (object and Alternative shapes (see declared variants) or null) | `when`: [declared alternatives](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen). |

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of (object and Alternative shapes (see declared variants)) | minItems: `1`. maxItems: `100`. `all[]`: [declared alternatives](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all). |
| `any` | Conditional | Array of (object and Alternative shapes (see declared variants)) | minItems: `1`. maxItems: `100`. `any[]`: [declared alternatives](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all). |
| `country` | Conditional | object | A delivery eligibility condition that matches when the address country is one of `values`. `country`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry). |
| `customer_has_email` | Conditional | object | A delivery eligibility condition that tests a true or false fact about the customer against `value`. `customer_has_email`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email). |
| `customer_has_phone` | Conditional | object | A delivery eligibility condition that tests a true or false fact about the customer against `value`. `customer_has_phone`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email). |
| `customer_merchant_verified` | Conditional | object | Matches the is_merchant_verified flag you set on the customer against value. A delivery eligibility condition that tests a true or false fact about the customer against `value`. `customer_merchant_verified`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified). |
| `customer_segment` | Conditional | object | Matches the free-form segment you assign to the customer against values. A delivery eligibility condition that matches customers in one of the listed segments (`values`). `customer_segment`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment). |
| `not` | Conditional | object and Alternative shapes (see declared variants) | A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `not`: [declared alternatives](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all). |
| `postal_code` | Conditional | object | A delivery eligibility condition that matches the address postal code against exact or prefix `values`. `postal_code`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code). |
| `radius` | Conditional | object | Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. `radius`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius). |
| `state` | Conditional | object | Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. `state`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate). |
| `subscription_purchase` | Conditional | object | A delivery eligibility condition that tests a true or false fact about the customer against `value`. `subscription_purchase`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email). |
| `window_time` | Conditional | object | Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on the listed `weekdays`. `window_time`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time). |
| `zone` | Conditional | object | Eligibility condition that matches when the destination or buyer location falls inside the delivery zone `delivery_zone_id`. `zone`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone). |

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 2

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 3

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 4

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 4.

- Required: `zone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 5

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 5.

- Required: `country`.
- Optional: `all`, `any`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 6

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 6.

- Required: `state`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 7

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 7.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 8

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 8.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 9

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 9.

- Required: `window_time`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 10

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 10.

- Required: `customer_segment`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 11

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 11.

- Required: `customer_merchant_verified`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 12

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 12.

- Required: `customer_has_email`.
- Optional: `all`, `any`, `country`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 13

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 13.

- Required: `customer_has_phone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 14

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 14.

- Required: `subscription_purchase`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 15

anyOf variant 2.

- Undeclared: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.
- Value shape: null.  

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]

A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of (object and Alternative shapes (see declared variants)) | minItems: `1`. maxItems: `100`. Items: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `all[]`: [declared alternatives](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allall). |
| `any` | Conditional | Array of (object and Alternative shapes (see declared variants)) | minItems: `1`. maxItems: `100`. Items: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `any[]`: [declared alternatives](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allall). |
| `country` | Conditional | object | A delivery eligibility condition that matches when the address country is one of `values`. `country`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry). |
| `customer_has_email` | Conditional | object | A delivery eligibility condition that tests a true or false fact about the customer against `value`. `customer_has_email`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email). |
| `customer_has_phone` | Conditional | object | A delivery eligibility condition that tests a true or false fact about the customer against `value`. `customer_has_phone`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email). |
| `customer_merchant_verified` | Conditional | object | Matches the is_merchant_verified flag you set on the customer against value. A delivery eligibility condition that tests a true or false fact about the customer against `value`. `customer_merchant_verified`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified). |
| `customer_segment` | Conditional | object | Matches the free-form segment you assign to the customer against values. A delivery eligibility condition that matches customers in one of the listed segments (`values`). `customer_segment`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment). |
| `not` | Conditional | object and Alternative shapes (see declared variants) | A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `not`: [declared alternatives](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allall). |
| `postal_code` | Conditional | object | A delivery eligibility condition that matches the address postal code against exact or prefix `values`. `postal_code`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code). |
| `radius` | Conditional | object | Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. `radius`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius). |
| `state` | Conditional | object | Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. `state`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate). |
| `subscription_purchase` | Conditional | object | A delivery eligibility condition that tests a true or false fact about the customer against `value`. `subscription_purchase`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email). |
| `window_time` | Conditional | object | Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on the listed `weekdays`. `window_time`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time). |
| `zone` | Conditional | object | Eligibility condition that matches when the destination or buyer location falls inside the delivery zone `delivery_zone_id`. `zone`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone). |

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[] variant 1

oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[] variant 2

oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[] variant 3

oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[] variant 4

oneOf variant 4.

- Required: `zone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[] variant 5

oneOf variant 5.

- Required: `country`.
- Optional: `all`, `any`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[] variant 6

oneOf variant 6.

- Required: `state`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[] variant 7

oneOf variant 7.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[] variant 8

oneOf variant 8.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[] variant 9

oneOf variant 9.

- Required: `window_time`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[] variant 10

oneOf variant 10.

- Required: `customer_segment`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[] variant 11

oneOf variant 11.

- Required: `customer_merchant_verified`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[] variant 12

oneOf variant 12.

- Required: `customer_has_email`.
- Optional: `all`, `any`, `country`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[] variant 13

oneOf variant 13.

- Required: `customer_has_phone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[] variant 14

oneOf variant 14.

- Required: `subscription_purchase`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[]

A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of (object and Alternative shapes (see declared variants)) | minItems: `1`. maxItems: `100`. `all[]`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all). |
| `any` | Conditional | Array of (object and Alternative shapes (see declared variants)) | minItems: `1`. maxItems: `100`. `any[]`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all). |
| `country` | Conditional | object | A delivery eligibility condition that matches when the address country is one of `values`. `country`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry). |
| `customer_has_email` | Conditional | object | A delivery eligibility condition that tests a true or false fact about the customer against `value`. `customer_has_email`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email). |
| `customer_has_phone` | Conditional | object | A delivery eligibility condition that tests a true or false fact about the customer against `value`. `customer_has_phone`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email). |
| `customer_merchant_verified` | Conditional | object | Matches the is_merchant_verified flag you set on the customer against value. A delivery eligibility condition that tests a true or false fact about the customer against `value`. `customer_merchant_verified`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified). |
| `customer_segment` | Conditional | object | Matches the free-form segment you assign to the customer against values. A delivery eligibility condition that matches customers in one of the listed segments (`values`). `customer_segment`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment). |
| `not` | Conditional | object and Alternative shapes (see declared variants) | A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `not`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all). |
| `postal_code` | Conditional | object | A delivery eligibility condition that matches the address postal code against exact or prefix `values`. `postal_code`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code). |
| `radius` | Conditional | object | Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. `radius`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius). |
| `state` | Conditional | object | Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. `state`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate). |
| `subscription_purchase` | Conditional | object | A delivery eligibility condition that tests a true or false fact about the customer against `value`. `subscription_purchase`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email). |
| `window_time` | Conditional | object | Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on the listed `weekdays`. `window_time`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time). |
| `zone` | Conditional | object | Eligibility condition that matches when the destination or buyer location falls inside the delivery zone `delivery_zone_id`. `zone`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone). |

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[] variant 1

oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[] variant 2

oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[] variant 3

oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[] variant 4

oneOf variant 4.

- Required: `zone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[] variant 5

oneOf variant 5.

- Required: `country`.
- Optional: `all`, `any`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[] variant 6

oneOf variant 6.

- Required: `state`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[] variant 7

oneOf variant 7.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[] variant 8

oneOf variant 8.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[] variant 9

oneOf variant 9.

- Required: `window_time`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[] variant 10

oneOf variant 10.

- Required: `customer_segment`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[] variant 11

oneOf variant 11.

- Required: `customer_merchant_verified`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[] variant 12

oneOf variant 12.

- Required: `customer_has_email`.
- Optional: `all`, `any`, `country`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[] variant 13

oneOf variant 13.

- Required: `customer_has_phone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[] variant 14

oneOf variant 14.

- Required: `subscription_purchase`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].all[]

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].any[]

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country

A delivery eligibility condition that matches when the address country is one of `values`.

Field definitions: [shared fields](DeliveryCountryConditionInput.md#deliverycountryconditioninput).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email

A delivery eligibility condition that tests a true or false fact about the customer against `value`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `value` | Required | boolean |  |

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified

Matches the is_merchant_verified flag you set on the customer against value. A delivery eligibility condition that tests a true or false fact about the customer against `value`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `value` | Required | boolean |  |

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment

Matches the free-form segment you assign to the customer against values. A delivery eligibility condition that matches customers in one of the listed segments (`values`).

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `values` | Required | Array of string | Items: minLength: `1`. |

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].not

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code

A delivery eligibility condition that matches the address postal code against exact or prefix `values`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subject` | Optional | string | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: `"destination_address"`. Values: `"destination_address"`, `"buyer_location"`. |
| `values` | Required | Array of object | Postal codes, each with its country. Flint compares codes in uppercase without spaces or hyphens. An exact value matches that code, and a prefix value matches every code that starts with it. A five-digit ZIP code in the US or a US territory also matches the ZIP+4 codes within it, so 07030 matches 07030-5788, which address verification returns for a full address. A ZIP+4 value matches only that ZIP+4. `values[]`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_codevalues). |

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code.values[]

A postal code or postal code prefix with its country, used in a postal code condition.

Field definitions: [shared fields](DeliveryPostalCodeValueInput.md#deliverypostalcodevalueinput).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius

Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_distance` | Required | object | A distance as a `value` in meters, kilometers, or miles. `maximum_distance`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradiusmaximum_distance). |
| `measurement` | Optional | string | Default: `"straight_line"`. Values: `"straight_line"`. |
| `origin` | Required | object | The point a radius condition measures from: a specific Location (`location_id`) or the delivery method's own origin (`method_origin`). `origin`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradiusorigin). |
| `subject` | Optional | string | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: `"destination_address"`. Values: `"destination_address"`, `"buyer_location"`. |

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius.maximum_distance

A distance as a `value` in meters, kilometers, or miles.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `unit` | Required | string | Values: `"meter"`, `"kilometer"`, `"mile"`. |
| `value` | Required | number |  |

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius.origin

The point a radius condition measures from: a specific Location (`location_id`) or the delivery method's own origin (`method_origin`).

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Optional | string | minLength: `1`. |
| `method_origin` | Optional | boolean |  |

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state

Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes.

Field definitions: [shared fields](DeliveryStateConditionInput.md#deliverystateconditioninput).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time

Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on the listed `weekdays`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `end_minute` | Optional | integer |  |
| `start_minute` | Optional | integer |  |
| `weekdays` | Optional | Array of string | Items: minLength: `1`. |

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone

Eligibility condition that matches when the destination or buyer location falls inside the delivery zone `delivery_zone_id`.

Field definitions: [shared fields](DeliveryZoneConditionInput.md#deliveryzoneconditioninput).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].all[] fields 1

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].any[] fields 1

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].not fields 1

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].all[] fields 2

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].any[] fields 2

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].not fields 2

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].all[] fields 3

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].any[] fields 3

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].not fields 3

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].all[] fields 4

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].any[] fields 4

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].not fields 4

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].all[] fields 5

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].any[] fields 5

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].not fields 5

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].all[] fields 6

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].any[] fields 6

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].not fields 6

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].all[] fields 7

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].any[] fields 7

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].not fields 7

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].all[] fields 8

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].any[] fields 8

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].not fields 8

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].all[] fields 9

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].any[] fields 9

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].not fields 9

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].all[] fields 10

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].any[] fields 10

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].not fields 10

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].all[] fields 11

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].any[] fields 11

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].not fields 11

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].all[] fields 12

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].any[] fields 12

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].not fields 12

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].all[] fields 13

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].any[] fields 13

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].not fields 13

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].any[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].customer_has_email

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].customer_merchant_verified

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].customer_segment

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].not

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].window_time

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].zone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.any[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.customer_has_email

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.customer_merchant_verified

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.customer_segment

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.not

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.window_time

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.zone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 2.all[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 2.any[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 2.country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 2.customer_has_email

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 2.customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 2.customer_merchant_verified

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 2.customer_segment

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 2.not

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 2.postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 2.radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 2.state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 2.subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 2.window_time

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 2.zone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 3.all[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 3.any[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 3.country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 3.customer_has_email

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 3.customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 3.customer_merchant_verified

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 3.customer_segment

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 3.not

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 3.postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 3.radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 3.state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 3.subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 3.window_time

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 3.zone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 4.all[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 4.any[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 4.country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 4.customer_has_email

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 4.customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 4.customer_merchant_verified

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 4.customer_segment

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 4.not

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 4.postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 4.radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 4.state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 4.subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 4.window_time

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 4.zone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 5.all[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 5.any[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 5.country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 5.customer_has_email

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 5.customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 5.customer_merchant_verified

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 5.customer_segment

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 5.not

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 5.postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 5.radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 5.state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 5.subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 5.window_time

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 5.zone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 6.all[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 6.any[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 6.country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 6.customer_has_email

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 6.customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 6.customer_merchant_verified

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 6.customer_segment

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 6.not

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 6.postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 6.radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 6.state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 6.subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 6.window_time

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 6.zone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 7.all[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 7.any[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 7.country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 7.customer_has_email

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 7.customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 7.customer_merchant_verified

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 7.customer_segment

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 7.not

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 7.postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 7.radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 7.state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 7.subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 7.window_time

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 7.zone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 8.all[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 8.any[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 8.country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 8.customer_has_email

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 8.customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 8.customer_merchant_verified

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 8.customer_segment

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 8.not

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 8.postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 8.radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 8.state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 8.subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 8.window_time

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 8.zone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 9.all[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 9.any[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 9.country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 9.customer_has_email

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 9.customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 9.customer_merchant_verified

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 9.customer_segment

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 9.not

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 9.postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 9.radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 9.state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 9.subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 9.window_time

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 9.zone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 10.all[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 10.any[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 10.country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 10.customer_has_email

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 10.customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 10.customer_merchant_verified

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 10.customer_segment

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 10.not

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 10.postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 10.radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 10.state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 10.subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 10.window_time

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 10.zone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 11.all[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 11.any[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 11.country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 11.customer_has_email

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 11.customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 11.customer_merchant_verified

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 11.customer_segment

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 11.not

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 11.postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 11.radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 11.state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 11.subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 11.window_time

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 11.zone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 12.all[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 12.any[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 12.country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 12.customer_has_email

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 12.customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 12.customer_merchant_verified

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 12.customer_segment

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 12.not

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 12.postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 12.radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 12.state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 12.subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 12.window_time

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 12.zone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 13.all[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 13.any[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 13.country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 13.customer_has_email

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 13.customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 13.customer_merchant_verified

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 13.customer_segment

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 13.not

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 13.postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 13.radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 13.state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 13.subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 13.window_time

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 13.zone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 14.all[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 14.any[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 14.country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 14.customer_has_email

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 14.customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 14.customer_merchant_verified

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 14.customer_segment

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 14.not

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 14.postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 14.radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 14.state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 14.subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 14.window_time

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 14.zone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone).

