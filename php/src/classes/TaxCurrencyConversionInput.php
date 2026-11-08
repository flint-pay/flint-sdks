<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $currency
 * @property-read int|float $exchange_rate
 * @property-read string $rate_date
 * @property-read string $rate_source
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $tax_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $taxable_money
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxCurrencyConversionInput extends Model {
    /** @param array{'currency': string, 'exchange_rate': int|float, 'rate_date': string, 'rate_source': string, 'tax_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'taxable_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxCurrencyConversionInput')); }
    /** ISO 4217 code of the currency the VAT is stated in: the euro or the member state's national currency in the EU, sterling in the UK. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Units of currency for one unit of the invoice currency, rounded half up to at most 10 decimal places. tax_money and taxable_money are calculated from this value. exclusiveMinimum: 0.
     * @return int|float
     * @throws SdkError When exchange_rate is omitted; use hasExchangeRate() or valueOrDefault().
     */
    public function getExchangeRate(): int|float { return $this->get('exchange_rate'); }
    public function hasExchangeRate(): bool { return $this->has('exchange_rate'); }
    /** The ECB reference day, or the first day of the month an HMRC rate covers. Format: date. Example: "2026-08-02".
     * @return string
     * @throws SdkError When rate_date is omitted; use hasRateDate() or valueOrDefault().
     */
    public function getRateDate(): string { return $this->get('rate_date'); }
    public function hasRateDate(): bool { return $this->has('rate_date'); }
    /** Who published the rate. Ignore values you don't recognize. Value enum: "ecb", "hmrc".
     * @return string
     * @throws SdkError When rate_source is omitted; use hasRateSource() or valueOrDefault().
     */
    public function getRateSource(): string { return $this->get('rate_source'); }
    public function hasRateSource(): bool { return $this->has('rate_source'); }
    /** The document's VAT for this currency: VAT summed in the invoice currency, times exchange_rate, rounded half up to the currency's minor units. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax_money is omitted; use hasTaxMoney() or valueOrDefault().
     */
    public function getTaxMoney(): mixed { return $this->get('tax_money'); }
    public function hasTaxMoney(): bool { return $this->has('tax_money'); }
    /** The amount the VAT was charged on, converted the same way. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When taxable_money is omitted; use hasTaxableMoney() or valueOrDefault().
     */
    public function getTaxableMoney(): mixed { return $this->get('taxable_money'); }
    public function hasTaxableMoney(): bool { return $this->has('taxable_money'); }
}
