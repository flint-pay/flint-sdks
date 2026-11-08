<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $currency
 * @property-read float $exchange_rate
 * @property-read string $rate_date
 * @property-read string $rate_source
 * @property-read MoneyValue $tax_money
 * @property-read MoneyValue $taxable_money
 * Presence-aware response; omitted optional fields return null. */
final class TaxCurrencyConversion extends Model {
    /** @param array{'currency': string, 'exchange_rate': float, 'rate_date': string, 'rate_source': string, 'tax_money': mixed, 'taxable_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxCurrencyConversion')); }
    /** ISO 4217 code of the currency the VAT is stated in: the euro or the member state's national currency in the EU, sterling in the UK. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return string
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Units of currency for one unit of the invoice currency, rounded half up to at most 10 decimal places. tax_money and taxable_money are calculated from this value. exclusiveMinimum: 0.
     * @return float
     */
    public function getExchangeRate(): float { return $this->get('exchange_rate'); }
    public function hasExchangeRate(): bool { return $this->has('exchange_rate'); }
    /** The ECB reference day, or the first day of the month an HMRC rate covers. Format: date.
     * @return string
     */
    public function getRateDate(): string { return $this->get('rate_date'); }
    public function hasRateDate(): bool { return $this->has('rate_date'); }
    /** Who published the rate. Ignore values you don't recognize. Value enum: "ecb", "hmrc".
     * @return string
     */
    public function getRateSource(): string { return $this->get('rate_source'); }
    public function hasRateSource(): bool { return $this->has('rate_source'); }
    /** The document's VAT for this currency: VAT summed in the invoice currency, times exchange_rate, rounded half up to the currency's minor units. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTaxMoney(): MoneyValue { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** The amount the VAT was charged on, converted the same way. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getTaxableMoney(): MoneyValue { return $this->get('taxable_money'); }
    public function hasTaxableMoney(): bool { return $this->has('taxable_money'); }
}
