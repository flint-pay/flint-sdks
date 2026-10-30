<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $calculation_type
 * @property-read ?MoneyValue $flat_money
 * @property-read ?float $percent
 * Presence-aware response; omitted optional fields return null. */
final class ReturnRestockingFeePolicy extends Model {
    /** @param array{'calculation_type': string, 'flat_money'?: mixed, 'percent'?: float, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnRestockingFeePolicy')); }
    /** Value enum: "flat", "percent".
     * @return string
     */
    public function getCalculationType(): string { return $this->get('calculation_type'); }
    public function hasCalculationType(): bool { return $this->has('calculation_type'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getFlatMoney(): ?MoneyValue { return $this->get('flat_money'); }
    public function hasFlatMoney(): bool { return $this->has('flat_money'); }
    /** Format: double. multipleOf: 0.0001.
     * @return ?float
     */
    public function getPercent(): ?float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
}
