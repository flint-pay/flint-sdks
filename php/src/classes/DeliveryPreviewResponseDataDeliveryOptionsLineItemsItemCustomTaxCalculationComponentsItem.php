<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $calculation_type
 * @property-read ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomTaxCalculationComponentsItemFlatMoney $flat_money
 * @property-read DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomTaxCalculationComponentsItemJurisdiction $jurisdiction
 * @property-read float $percent
 * @property-read string $tax_type
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomTaxCalculationComponentsItem extends Model {
    /** @param array{'calculation_type'?: string, 'flat_money'?: mixed, 'jurisdiction': mixed, 'percent': float, 'tax_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomTaxCalculationComponentsItem')); }
    /** Default: "percentage". Value enum: "percentage".
     * @return ?string
     */
    public function getCalculationType(): ?string { return $this->get('calculation_type'); }
    public function hasCalculationType(): bool { return $this->has('calculation_type'); }
    /** Flat tax amount. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomTaxCalculationComponentsItemFlatMoney
     */
    public function getFlatMoney(): ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomTaxCalculationComponentsItemFlatMoney { return $this->get('flat_money'); }
    public function hasFlatMoney(): bool { return $this->has('flat_money'); }
    /** The taxing jurisdiction of a draft tax component, identified by code, level, name, state, and country.
     * @return DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomTaxCalculationComponentsItemJurisdiction
     */
    public function getJurisdiction(): DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomTaxCalculationComponentsItemJurisdiction { return $this->get('jurisdiction'); }
    public function hasJurisdiction(): bool { return $this->has('jurisdiction'); }
    /** minimum: 0. maximum: 100. multipleOf: 0.0001.
     * @return float
     */
    public function getPercent(): float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** Value enum: "sales_tax", "use_tax".
     * @return string
     */
    public function getTaxType(): string { return $this->get('tax_type'); }
    public function hasTaxType(): bool { return $this->has('tax_type'); }
}
