<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $calculation_type
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $flat_money
 * @property-read TaxJurisdictionRequestInput|array<array-key, mixed>|\stdClass $jurisdiction
 * @property-read int|float $percent
 * @property-read string $tax_type
 * @property-read string $taxability_reason
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxComponentRequestRequestInput extends Model {
    /** @param array{'calculation_type'?: string, 'flat_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'jurisdiction': TaxJurisdictionRequestInput|array<array-key, mixed>|\stdClass, 'percent': int|float, 'tax_type': string, 'taxability_reason'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxComponentRequestRequestInput')); }
    /** How the tax is figured: a percentage of the taxable amount, or a fixed amount. Value enum: "percentage".
     * @return string
     * @throws SdkError When calculation_type is omitted; use hasCalculationType() or valueOrDefault().
     */
    public function getCalculationType(): string { return $this->get('calculation_type'); }
    public function hasCalculationType(): bool { return $this->has('calculation_type'); }
    /** The fixed tax amount in the order currency. Send it with a `flat_amount` component; a `percentage` component doesn't take it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When flat_money is omitted; use hasFlatMoney() or valueOrDefault().
     */
    public function getFlatMoney(): mixed { return $this->get('flat_money'); }
    public function hasFlatMoney(): bool { return $this->has('flat_money'); }
    /** The taxing jurisdiction this component's tax is owed to. A taxing jurisdiction with its level, such as state or city, name, state, and country.
     * @return TaxJurisdictionRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When jurisdiction is omitted; use hasJurisdiction() or valueOrDefault().
     */
    public function getJurisdiction(): mixed { return $this->get('jurisdiction'); }
    public function hasJurisdiction(): bool { return $this->has('jurisdiction'); }
    /** Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Send it with a `percentage` component; a `flat_amount` component doesn't take it. minimum: 0. maximum: 100. multipleOf: 0.0001.
     * @return int|float
     * @throws SdkError When percent is omitted; use hasPercent() or valueOrDefault().
     */
    public function getPercent(): int|float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** The kind of tax this component collects. Value enum: "sales_tax", "use_tax", "vat", "gst", "hst", "pst", "qst".
     * @return string
     * @throws SdkError When tax_type is omitted; use hasTaxType() or valueOrDefault().
     */
    public function getTaxType(): string { return $this->get('tax_type'); }
    public function hasTaxType(): bool { return $this->has('tax_type'); }
    /** Optional reverse-charge treatment. Requires percent 0 and a non-US jurisdiction. Value enum: "reverse_charge".
     * @return string
     * @throws SdkError When taxability_reason is omitted; use hasTaxabilityReason() or valueOrDefault().
     */
    public function getTaxabilityReason(): string { return $this->get('taxability_reason'); }
    public function hasTaxabilityReason(): bool { return $this->has('taxability_reason'); }
}
