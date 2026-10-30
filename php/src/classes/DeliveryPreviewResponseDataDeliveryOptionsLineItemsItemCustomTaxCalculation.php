<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomTaxCalculationComponentsItem> $components
 * @property-read string $price_mode
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomTaxCalculation extends Model {
    /** @param array{'components': list<mixed>, 'price_mode': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomTaxCalculation')); }
    /** minItems: 1. [] (Value): {@see DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomTaxCalculationComponentsItem}. One tax component of a draft line item calculation, with its jurisdiction, tax type, and percentage or flat amount.
     * @return list<DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomTaxCalculationComponentsItem>
     */
    public function getComponents(): array { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** Value enum: "additive", "inclusive".
     * @return string
     */
    public function getPriceMode(): string { return $this->get('price_mode'); }
    public function hasPriceMode(): bool { return $this->has('price_mode'); }
}
