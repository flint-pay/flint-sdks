<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?MoneyValue $amount_money
 * @property-read ?string $description
 * @property-read ?string $name
 * @property-read ?float $percent
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceTip extends Model {
    /** @param array{'amount_money'?: mixed, 'description'?: string, 'name'?: string, 'percent'?: float, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceTip')); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getAmountMoney(): ?MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** description
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** name
     * @return ?string
     */
    public function getName(): ?string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** multipleOf: 0.0001.
     * @return ?float
     */
    public function getPercent(): ?float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
}
