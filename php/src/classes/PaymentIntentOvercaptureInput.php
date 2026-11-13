<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $maximum_capturable_money
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentIntentOvercaptureInput extends Model {
    /** @param array{'maximum_capturable_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentIntentOvercaptureInput')); }
    /** The most one capture can collect. Equals capturable_money when status is unavailable. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When maximum_capturable_money is omitted; use hasMaximumCapturableMoney() or valueOrDefault().
     */
    public function getMaximumCapturableMoney(): mixed { return $this->get('maximum_capturable_money'); }
    public function hasMaximumCapturableMoney(): bool { return $this->has('maximum_capturable_money'); }
    /** Whether the processor allows overcapturing this authorization. Can gain values; treat an unknown value as unavailable. Value enum: "available", "unavailable".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
