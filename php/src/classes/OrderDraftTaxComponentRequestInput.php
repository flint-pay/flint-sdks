<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $calculation_type
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $flat_money
 * @property-read OrderDraftTaxJurisdictionRequestInput|array<array-key, mixed>|\stdClass $jurisdiction
 * @property-read int|float $percent
 * @property-read string $tax_type
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderDraftTaxComponentRequestInput extends Model {
    /** @param array{'calculation_type'?: string, 'flat_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'jurisdiction': OrderDraftTaxJurisdictionRequestInput|array<array-key, mixed>|\stdClass, 'percent': int|float, 'tax_type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderDraftTaxComponentRequestInput')); }
    /** Default: "percentage". Value enum: "percentage".
     * @return string
     * @throws SdkError When calculation_type is omitted; use hasCalculationType() or valueOrDefault().
     */
    public function getCalculationType(): string { return $this->get('calculation_type'); }
    public function hasCalculationType(): bool { return $this->has('calculation_type'); }
    /** Flat tax amount. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When flat_money is omitted; use hasFlatMoney() or valueOrDefault().
     */
    public function getFlatMoney(): mixed { return $this->get('flat_money'); }
    public function hasFlatMoney(): bool { return $this->has('flat_money'); }
    /** The taxing jurisdiction of a draft tax component, identified by code, level, name, state, and country.
     * @return OrderDraftTaxJurisdictionRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When jurisdiction is omitted; use hasJurisdiction() or valueOrDefault().
     */
    public function getJurisdiction(): mixed { return $this->get('jurisdiction'); }
    public function hasJurisdiction(): bool { return $this->has('jurisdiction'); }
    /** minimum: 0. maximum: 100. multipleOf: 0.0001.
     * @return int|float
     * @throws SdkError When percent is omitted; use hasPercent() or valueOrDefault().
     */
    public function getPercent(): int|float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** Value enum: "sales_tax", "use_tax".
     * @return string
     * @throws SdkError When tax_type is omitted; use hasTaxType() or valueOrDefault().
     */
    public function getTaxType(): string { return $this->get('tax_type'); }
    public function hasTaxType(): bool { return $this->has('tax_type'); }
}
