[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxCurrencyConversionInput

VAT on an issued document converted into the currency of the country whose VAT is charged.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Required | string | ISO 4217 code of the currency the VAT is stated in: the euro or the member state's national currency in the EU, sterling in the UK. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `exchange_rate` | Required | number | Units of currency for one unit of the invoice currency, rounded half up to at most 10 decimal places. tax_money and taxable_money are calculated from this value. exclusiveMinimum: `0`. |
| `rate_date` | Required | string | The ECB reference day, or the first day of the month an HMRC rate covers. Format: `date`. Example: `"2026-08-02"`. |
| `rate_source` | Required | string | Who published the rate. Ignore values you don't recognize. Values: `"ecb"`, `"hmrc"`. |
| `tax_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The document's VAT for this currency: VAT summed in the invoice currency, times exchange_rate, rounded half up to the currency's minor units. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `taxable_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The amount the VAT was charged on, converted the same way. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

