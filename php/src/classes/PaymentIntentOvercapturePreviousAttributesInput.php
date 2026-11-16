<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $maximum_capturable_money
 * @property-read string|null $status
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentIntentOvercapturePreviousAttributesInput extends Model {
    /** @param array{'maximum_capturable_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'status'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentIntentOvercapturePreviousAttributesInput')); }
    /** The most one capture can collect. Equals capturable_money when status is unavailable. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When maximum_capturable_money is omitted; use hasMaximumCapturableMoney() or valueOrDefault().
     */
    public function getMaximumCapturableMoney(): mixed { return $this->get('maximum_capturable_money'); }
    public function hasMaximumCapturableMoney(): bool { return $this->has('maximum_capturable_money'); }
    /** Whether the processor allows overcapturing this authorization. Can gain values; treat an unknown value as unavailable. Value enum: "available", "unavailable". anyOf[1] (Value): string. Whether the processor allows overcapturing this authorization. Can gain values; treat an unknown value as unavailable. Value enum: "available", "unavailable". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
