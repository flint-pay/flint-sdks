<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $calculation_type
 * @property-read MoneyValue $flat_money
 * @property-read TaxJurisdiction $jurisdiction
 * @property-read float $percent
 * @property-read string $tax_type
 * Presence-aware response; omitted fields throw when accessed. */
final class TaxComponentRequest extends Model {
    /** @param array{'calculation_type'?: string, 'flat_money'?: mixed, 'jurisdiction': mixed, 'percent': float, 'tax_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxComponentRequest')); }
    /** @return string
     * @throws SdkError When calculation_type is omitted; use hasCalculationType() or valueOrDefault().
     */
    public function getCalculationType(): string { return $this->get('calculation_type'); }
    public function hasCalculationType(): bool { return $this->has('calculation_type'); }
    /** @return MoneyValue
     * @throws SdkError When flat_money is omitted; use hasFlatMoney() or valueOrDefault().
     */
    public function getFlatMoney(): MoneyValue { return $this->get('flat_money'); }
    public function hasFlatMoney(): bool { return $this->has('flat_money'); }
    /** @return TaxJurisdiction
     * @throws SdkError When jurisdiction is omitted; use hasJurisdiction() or valueOrDefault().
     */
    public function getJurisdiction(): TaxJurisdiction { return $this->get('jurisdiction'); }
    public function hasJurisdiction(): bool { return $this->has('jurisdiction'); }
    /** @return float
     * @throws SdkError When percent is omitted; use hasPercent() or valueOrDefault().
     */
    public function getPercent(): float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** @return string
     * @throws SdkError When tax_type is omitted; use hasTaxType() or valueOrDefault().
     */
    public function getTaxType(): string { return $this->get('tax_type'); }
    public function hasTaxType(): bool { return $this->has('tax_type'); }
}
