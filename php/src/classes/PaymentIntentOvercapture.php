<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $maximum_capturable_money
 * @property-read string $status
 * Presence-aware response; omitted optional fields return null. */
final class PaymentIntentOvercapture extends Model {
    /** @param array{'maximum_capturable_money': mixed, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentIntentOvercapture')); }
    /** The most one capture can collect. Equals capturable_money when status is unavailable. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getMaximumCapturableMoney(): MoneyValue { return $this->get('maximum_capturable_money'); }
    public function hasMaximumCapturableMoney(): bool { return $this->has('maximum_capturable_money'); }
    /** Whether the processor allows overcapturing this authorization. Can gain values; treat an unknown value as unavailable. Value enum: "available", "unavailable".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
