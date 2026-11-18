[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxCurrencyConversionPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Optional | string or null | ISO 4217 code of the currency the VAT is stated in: the euro or the member state's national currency in the EU, sterling in the UK. `currency`: [declared alternatives](../models/TaxCurrencyConversionPreviousAttributes.md#taxcurrencyconversionpreviousattributescurrency). |
| `exchange_rate` | Optional | number or null | Units of currency for one unit of the invoice currency, rounded half up to at most 10 decimal places. tax_money and taxable_money are calculated from this value. `exchange_rate`: [declared alternatives](../models/TaxCurrencyConversionPreviousAttributes.md#taxcurrencyconversionpreviousattributesexchange_rate). |
| `rate_date` | Optional | string or null | The ECB reference day, or the first day of the month an HMRC rate covers. `rate_date`: [declared alternatives](../models/TaxCurrencyConversionPreviousAttributes.md#taxcurrencyconversionpreviousattributesrate_date). |
| `rate_source` | Optional | string or null | Who published the rate. Ignore values you don't recognize. Values: `"ecb"`, `"hmrc"`. `rate_source`: [declared alternatives](../models/TaxCurrencyConversionPreviousAttributes.md#taxcurrencyconversionpreviousattributesrate_source). |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The document's VAT for this currency: VAT summed in the invoice currency, times exchange_rate, rounded half up to the currency's minor units. `tax_money`: [declared alternatives](../models/TaxCurrencyConversionPreviousAttributes.md#taxcurrencyconversionpreviousattributestax_money). |
| `taxable_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount the VAT was charged on, converted the same way. `taxable_money`: [declared alternatives](../models/TaxCurrencyConversionPreviousAttributes.md#taxcurrencyconversionpreviousattributestaxable_money). |

### TaxCurrencyConversionPreviousAttributes.currency

### TaxCurrencyConversionPreviousAttributes.currency variant 1

anyOf variant 1: ISO 4217 code of the currency the VAT is stated in: the euro or the member state's national currency in the EU, sterling in the UK..

- Value shape: string. ISO 4217 code of the currency the VAT is stated in: the euro or the member state's national currency in the EU, sterling in the UK. ISO 4217 code of the currency the VAT is stated in: the euro or the member state's national currency in the EU, sterling in the UK. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. 

### TaxCurrencyConversionPreviousAttributes.currency variant 2

anyOf variant 2.

- Value shape: null. ISO 4217 code of the currency the VAT is stated in: the euro or the member state's national currency in the EU, sterling in the UK. 

### TaxCurrencyConversionPreviousAttributes.exchange_rate

### TaxCurrencyConversionPreviousAttributes.exchange_rate variant 1

anyOf variant 1: Units of currency for one unit of the invoice currency, rounded half up to at most 10 decimal places. tax_money and taxable_money are calculated from this value..

- Value shape: number. Units of currency for one unit of the invoice currency, rounded half up to at most 10 decimal places. tax_money and taxable_money are calculated from this value. Units of currency for one unit of the invoice currency, rounded half up to at most 10 decimal places. tax_money and taxable_money are calculated from this value. exclusiveMinimum: `0`. 

### TaxCurrencyConversionPreviousAttributes.exchange_rate variant 2

anyOf variant 2.

- Value shape: null. Units of currency for one unit of the invoice currency, rounded half up to at most 10 decimal places. tax_money and taxable_money are calculated from this value. 

### TaxCurrencyConversionPreviousAttributes.rate_date

### TaxCurrencyConversionPreviousAttributes.rate_date variant 1

anyOf variant 1: The ECB reference day, or the first day of the month an HMRC rate covers..

- Value shape: string. The ECB reference day, or the first day of the month an HMRC rate covers. The ECB reference day, or the first day of the month an HMRC rate covers. Format: `date`. Example: `"2026-08-02"`. 

### TaxCurrencyConversionPreviousAttributes.rate_date variant 2

anyOf variant 2.

- Value shape: null. The ECB reference day, or the first day of the month an HMRC rate covers. 

### TaxCurrencyConversionPreviousAttributes.rate_source

### TaxCurrencyConversionPreviousAttributes.rate_source variant 1

anyOf variant 1: Who published the rate. Ignore values you don't recognize..

- Value shape: string. Who published the rate. Ignore values you don't recognize. Values: `"ecb"`, `"hmrc"`.

### TaxCurrencyConversionPreviousAttributes.rate_source variant 2

anyOf variant 2.

- Value shape: null. Who published the rate. Ignore values you don't recognize. 

### TaxCurrencyConversionPreviousAttributes.tax_money

The document's VAT for this currency: VAT summed in the invoice currency, times exchange_rate, rounded half up to the currency's minor units.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### TaxCurrencyConversionPreviousAttributes.tax_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### TaxCurrencyConversionPreviousAttributes.tax_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The document's VAT for this currency: VAT summed in the invoice currency, times exchange_rate, rounded half up to the currency's minor units. 

### TaxCurrencyConversionPreviousAttributes.tax_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### TaxCurrencyConversionPreviousAttributes.tax_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### TaxCurrencyConversionPreviousAttributes.taxable_money

The amount the VAT was charged on, converted the same way.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### TaxCurrencyConversionPreviousAttributes.taxable_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### TaxCurrencyConversionPreviousAttributes.taxable_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The amount the VAT was charged on, converted the same way. 

### TaxCurrencyConversionPreviousAttributes.taxable_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### TaxCurrencyConversionPreviousAttributes.taxable_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

