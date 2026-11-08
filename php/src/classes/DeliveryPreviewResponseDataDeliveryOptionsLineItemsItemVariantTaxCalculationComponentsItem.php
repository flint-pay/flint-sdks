<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $calculation_type
 * @property-read ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItemFlatMoney $flat_money
 * @property-read DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItemJurisdiction $jurisdiction
 * @property-read float $percent
 * @property-read string $tax_type
 * @property-read ?string $taxability_reason
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItem extends Model {
    /** @param array{'calculation_type'?: string, 'flat_money'?: mixed, 'jurisdiction': mixed, 'percent': float, 'tax_type': string, 'taxability_reason'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItem')); }
    /** How the tax is figured: a percentage of the taxable amount, or a fixed amount. Default: "percentage". Value enum: "percentage".
     * @return ?string
     */
    public function getCalculationType(): ?string { return $this->get('calculation_type'); }
    public function hasCalculationType(): bool { return $this->has('calculation_type'); }
    /** Flat tax amount. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItemFlatMoney
     */
    public function getFlatMoney(): ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItemFlatMoney { return $this->get('flat_money'); }
    public function hasFlatMoney(): bool { return $this->has('flat_money'); }
    /** The taxing jurisdiction this component's tax is owed to. The taxing jurisdiction of a draft tax component, identified by code, level, name, state, and country.
     * @return DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItemJurisdiction
     */
    public function getJurisdiction(): DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItemJurisdiction { return $this->get('jurisdiction'); }
    public function hasJurisdiction(): bool { return $this->has('jurisdiction'); }
    /** Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Send it with a `percentage` component; a `flat_amount` component doesn't take it. minimum: 0. maximum: 100. multipleOf: 0.0001.
     * @return float
     */
    public function getPercent(): float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** The kind of tax this component collects. Value enum: "sales_tax", "use_tax", "vat", "gst", "hst", "pst", "qst".
     * @return string
     */
    public function getTaxType(): string { return $this->get('tax_type'); }
    public function hasTaxType(): bool { return $this->has('tax_type'); }
    /** Optional reverse-charge treatment. Requires percent 0 and a non-US jurisdiction. Value enum: "reverse_charge".
     * @return ?string
     */
    public function getTaxabilityReason(): ?string { return $this->get('taxability_reason'); }
    public function hasTaxabilityReason(): bool { return $this->has('taxability_reason'); }
}
