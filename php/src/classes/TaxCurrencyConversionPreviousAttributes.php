<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $currency
 * @property-read float|null $exchange_rate
 * @property-read string|null $rate_date
 * @property-read string|null $rate_source
 * @property-read mixed $tax_money
 * @property-read mixed $taxable_money
 * Presence-aware response; omitted optional fields return null. */
final class TaxCurrencyConversionPreviousAttributes extends Model {
    /** @param array{'currency'?: mixed, 'exchange_rate'?: mixed, 'rate_date'?: mixed, 'rate_source'?: mixed, 'tax_money'?: mixed, 'taxable_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxCurrencyConversionPreviousAttributes')); }
    /** ISO 4217 code of the currency the VAT is stated in: the euro or the member state's national currency in the EU, sterling in the UK. anyOf[1] (Value): string. ISO 4217 code of the currency the VAT is stated in: the euro or the member state's national currency in the EU, sterling in the UK. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCurrency(): string|null { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Units of currency for one unit of the invoice currency, rounded half up to at most 10 decimal places. tax_money and taxable_money are calculated from this value. anyOf[1] (Value): number. Units of currency for one unit of the invoice currency, rounded half up to at most 10 decimal places. tax_money and taxable_money are calculated from this value. exclusiveMinimum: 0. anyOf[2] (Value): null.
     * @return float|null
     */
    public function getExchangeRate(): float|null { return $this->get('exchange_rate'); }
    public function hasExchangeRate(): bool { return $this->has('exchange_rate'); }
    /** The ECB reference day, or the first day of the month an HMRC rate covers. anyOf[1] (Value): string. The ECB reference day, or the first day of the month an HMRC rate covers. Format: date. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRateDate(): string|null { return $this->get('rate_date'); }
    public function hasRateDate(): bool { return $this->has('rate_date'); }
    /** Who published the rate. Ignore values you don't recognize. Value enum: "ecb", "hmrc". anyOf[1] (Value): string. Who published the rate. Ignore values you don't recognize. Value enum: "ecb", "hmrc". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRateSource(): string|null { return $this->get('rate_source'); }
    public function hasRateSource(): bool { return $this->has('rate_source'); }
    /** The document's VAT for this currency: VAT summed in the invoice currency, times exchange_rate, rounded half up to the currency's minor units. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getTaxMoney(): mixed { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** The amount the VAT was charged on, converted the same way. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getTaxableMoney(): mixed { return $this->get('taxable_money'); }
    public function hasTaxableMoney(): bool { return $this->has('taxable_money'); }
}
