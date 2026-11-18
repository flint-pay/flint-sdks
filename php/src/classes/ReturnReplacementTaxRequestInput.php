<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderDraftLineItemTaxCalculationRequestModelInput|array<array-key, mixed>|\stdClass $calculation
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnReplacementTaxRequestInput extends Model {
    /** @param array{'calculation': OrderDraftLineItemTaxCalculationRequestModelInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReplacementTaxRequestInput')); }
    /** External percentage tax components and price mode for this replacement line. A tax calculation you supply for a draft order line item, made of tax components and a price mode.
     * @return OrderDraftLineItemTaxCalculationRequestModelInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When calculation is omitted; use hasCalculation() or valueOrDefault().
     */
    public function getCalculation(): mixed { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
}
