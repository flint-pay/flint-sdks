<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $calculation_type
 * @property-read array{'amount': string, 'currency': string}|object $flat_money
 * @property-read OrderTaxJurisdictionRequestInput|array<array-key, mixed>|\stdClass $jurisdiction
 * @property-read int|float $percent
 * @property-read string $tax_type
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderTaxComponentRequestInput extends Model {
    /** @param array{'calculation_type'?: string, 'flat_money': array{'amount': string, 'currency': string}|object, 'jurisdiction': OrderTaxJurisdictionRequestInput|array<array-key, mixed>|\stdClass, 'percent'?: int|float, 'tax_type'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTaxComponentRequestInput')); }
    /** @return string
     * @throws SdkError When calculation_type is omitted; use hasCalculationType() or valueOrDefault().
     */
    public function getCalculationType(): string { return $this->get('calculation_type'); }
    public function hasCalculationType(): bool { return $this->has('calculation_type'); }
    /** @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When flat_money is omitted; use hasFlatMoney() or valueOrDefault().
     */
    public function getFlatMoney(): array|object { return $this->get('flat_money'); }
    public function hasFlatMoney(): bool { return $this->has('flat_money'); }
    /** @return OrderTaxJurisdictionRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When jurisdiction is omitted; use hasJurisdiction() or valueOrDefault().
     */
    public function getJurisdiction(): mixed { return $this->get('jurisdiction'); }
    public function hasJurisdiction(): bool { return $this->has('jurisdiction'); }
    /** @return int|float
     * @throws SdkError When percent is omitted; use hasPercent() or valueOrDefault().
     */
    public function getPercent(): int|float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** @return string
     * @throws SdkError When tax_type is omitted; use hasTaxType() or valueOrDefault().
     */
    public function getTaxType(): string { return $this->get('tax_type'); }
    public function hasTaxType(): bool { return $this->has('tax_type'); }
}
