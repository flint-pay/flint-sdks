[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxCurrencyConversionPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Optional | string or null | ISO 4217 code of the currency the VAT is stated in: the euro or the member state's national currency in the EU, sterling in the UK. `currency`: [declared alternatives](../models/TaxCurrencyConversionPreviousAttributesInput.md#taxcurrencyconversionpreviousattributesinputcurrency). |
| `exchange_rate` | Optional | number or null | Units of currency for one unit of the invoice currency, rounded half up to at most 10 decimal places. tax_money and taxable_money are calculated from this value. `exchange_rate`: [declared alternatives](../models/TaxCurrencyConversionPreviousAttributesInput.md#taxcurrencyconversionpreviousattributesinputexchange_rate). |
| `rate_date` | Optional | string or null | The ECB reference day, or the first day of the month an HMRC rate covers. `rate_date`: [declared alternatives](../models/TaxCurrencyConversionPreviousAttributesInput.md#taxcurrencyconversionpreviousattributesinputrate_date). |
| `rate_source` | Optional | string or null | Who published the rate. Ignore values you don't recognize. Values: `"ecb"`, `"hmrc"`. `rate_source`: [declared alternatives](../models/TaxCurrencyConversionPreviousAttributesInput.md#taxcurrencyconversionpreviousattributesinputrate_source). |
| `tax_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The document's VAT for this currency: VAT summed in the invoice currency, times exchange_rate, rounded half up to the currency's minor units. |
| `taxable_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The amount the VAT was charged on, converted the same way. |

### TaxCurrencyConversionPreviousAttributesInput.currency

### TaxCurrencyConversionPreviousAttributesInput.currency variant 1

anyOf variant 1: ISO 4217 code of the currency the VAT is stated in: the euro or the member state's national currency in the EU, sterling in the UK..

- Value shape: string. ISO 4217 code of the currency the VAT is stated in: the euro or the member state's national currency in the EU, sterling in the UK. ISO 4217 code of the currency the VAT is stated in: the euro or the member state's national currency in the EU, sterling in the UK. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. 

### TaxCurrencyConversionPreviousAttributesInput.currency variant 2

anyOf variant 2.

- Value shape: null. ISO 4217 code of the currency the VAT is stated in: the euro or the member state's national currency in the EU, sterling in the UK. 

### TaxCurrencyConversionPreviousAttributesInput.exchange_rate

### TaxCurrencyConversionPreviousAttributesInput.exchange_rate variant 1

anyOf variant 1: Units of currency for one unit of the invoice currency, rounded half up to at most 10 decimal places. tax_money and taxable_money are calculated from this value..

- Value shape: number. Units of currency for one unit of the invoice currency, rounded half up to at most 10 decimal places. tax_money and taxable_money are calculated from this value. Units of currency for one unit of the invoice currency, rounded half up to at most 10 decimal places. tax_money and taxable_money are calculated from this value. exclusiveMinimum: `0`. 

### TaxCurrencyConversionPreviousAttributesInput.exchange_rate variant 2

anyOf variant 2.

- Value shape: null. Units of currency for one unit of the invoice currency, rounded half up to at most 10 decimal places. tax_money and taxable_money are calculated from this value. 

### TaxCurrencyConversionPreviousAttributesInput.rate_date

### TaxCurrencyConversionPreviousAttributesInput.rate_date variant 1

anyOf variant 1: The ECB reference day, or the first day of the month an HMRC rate covers..

- Value shape: string. The ECB reference day, or the first day of the month an HMRC rate covers. The ECB reference day, or the first day of the month an HMRC rate covers. Format: `date`. Example: `"2026-08-02"`. 

### TaxCurrencyConversionPreviousAttributesInput.rate_date variant 2

anyOf variant 2.

- Value shape: null. The ECB reference day, or the first day of the month an HMRC rate covers. 

### TaxCurrencyConversionPreviousAttributesInput.rate_source

### TaxCurrencyConversionPreviousAttributesInput.rate_source variant 1

anyOf variant 1: Who published the rate. Ignore values you don't recognize..

- Value shape: string. Who published the rate. Ignore values you don't recognize. Values: `"ecb"`, `"hmrc"`.

### TaxCurrencyConversionPreviousAttributesInput.rate_source variant 2

anyOf variant 2.

- Value shape: null. Who published the rate. Ignore values you don't recognize. 

