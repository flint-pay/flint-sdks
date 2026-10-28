<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItem> $components
 * @property-read string $price_mode
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantTaxCalculation extends Model {
    /** @param array{'components': list<mixed>, 'price_mode': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantTaxCalculation')); }
    /** Shape $ (Value): Array of ({@see DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItem} and {@see OrderDraftTaxComponentRequest}). minItems: 1. Shape $[] (Value): {@see DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItem}. One tax component of a draft line item calculation, with its jurisdiction, tax type, and percentage or flat amount.
     * @return list<DeliveryPreviewsCreateResponse200DataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItem>
     */
    public function getComponents(): array { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** Shape $ (Value): string.  Value enum: "additive", "inclusive".
     * @return string
     */
    public function getPriceMode(): string { return $this->get('price_mode'); }
    public function hasPriceMode(): bool { return $this->has('price_mode'); }
}
