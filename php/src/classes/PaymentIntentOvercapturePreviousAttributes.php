<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $maximum_capturable_money
 * @property-read string|null $status
 * Presence-aware response; omitted optional fields return null. */
final class PaymentIntentOvercapturePreviousAttributes extends Model {
    /** @param array{'maximum_capturable_money'?: mixed, 'status'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentIntentOvercapturePreviousAttributes')); }
    /** The most one capture can collect. Equals capturable_money when status is unavailable. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getMaximumCapturableMoney(): MoneyValuePreviousAttributes|null { return $this->get('maximum_capturable_money'); }
    public function hasMaximumCapturableMoney(): bool { return $this->has('maximum_capturable_money'); }
    /** Whether the processor allows overcapturing this authorization. Can gain values; treat an unknown value as unavailable. Value enum: "available", "unavailable". anyOf[1] (Value): string. Whether the processor allows overcapturing this authorization. Can gain values; treat an unknown value as unavailable. Value enum: "available", "unavailable". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
