<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $amount_money
 * @property-read string|null $description
 * @property-read string|null $name
 * @property-read float|null $percent
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceTipPreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'description'?: mixed, 'name'?: mixed, 'percent'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceTipPreviousAttributes')); }
    /** Fixed tip amount, when the tip is set as an amount. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Optional description that stays on the tip for your reporting. anyOf[1] (Value): string. Optional description that stays on the tip for your reporting. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Optional name that stays on the tip for your reporting. anyOf[1] (Value): string. Optional name that stays on the tip for your reporting. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent. anyOf[1] (Value): number. Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent. multipleOf: 0.0001. anyOf[2] (Value): null.
     * @return float|null
     */
    public function getPercent(): float|null { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
}
