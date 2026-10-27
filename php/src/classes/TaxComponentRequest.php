<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $calculation_type
 * @property-read ?MoneyValue $flat_money
 * @property-read TaxJurisdiction $jurisdiction
 * @property-read float $percent
 * @property-read string $tax_type
 * Presence-aware response; omitted optional fields return null. */
final class TaxComponentRequest extends Model {
    /** @param array{'calculation_type'?: string, 'flat_money'?: mixed, 'jurisdiction': mixed, 'percent': float, 'tax_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxComponentRequest')); }
    /** Shape $ (Value): string.  Value enum: "percentage".
     * @return ?string
     */
    public function getCalculationType(): ?string { return $this->get('calculation_type'); }
    public function hasCalculationType(): bool { return $this->has('calculation_type'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getFlatMoney(): ?MoneyValue { return $this->get('flat_money'); }
    public function hasFlatMoney(): bool { return $this->has('flat_money'); }
    /** Shape $ (Value): {@see TaxJurisdiction}. A taxing jurisdiction with its level, such as state or city, name, state, and country.
     * @return TaxJurisdiction
     */
    public function getJurisdiction(): TaxJurisdiction { return $this->get('jurisdiction'); }
    public function hasJurisdiction(): bool { return $this->has('jurisdiction'); }
    /** Shape $ (Value): number. minimum: 0. maximum: 100. multipleOf: 0.0001.
     * @return float
     */
    public function getPercent(): float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** Shape $ (Value): string.  Value enum: "sales_tax", "use_tax".
     * @return string
     */
    public function getTaxType(): string { return $this->get('tax_type'); }
    public function hasTaxType(): bool { return $this->has('tax_type'); }
}
