<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $maximum_amount
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $minimum_amount
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryCallerSuppliedPricingStrategyRequestInput extends Model {
    /** @param array{'maximum_amount': array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'minimum_amount': array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryCallerSuppliedPricingStrategyRequestInput')); }
    /** @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When maximum_amount is omitted; use hasMaximumAmount() or valueOrDefault().
     */
    public function getMaximumAmount(): array|object { return $this->get('maximum_amount'); }
    public function hasMaximumAmount(): bool { return $this->has('maximum_amount'); }
    /** @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When minimum_amount is omitted; use hasMinimumAmount() or valueOrDefault().
     */
    public function getMinimumAmount(): array|object { return $this->get('minimum_amount'); }
    public function hasMinimumAmount(): bool { return $this->has('minimum_amount'); }
}
