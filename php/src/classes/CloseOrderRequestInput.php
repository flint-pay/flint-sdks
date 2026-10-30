<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $collected_money_behavior
 * @property-read int $expected_version
 * @property-read string $reason_message
 * Presence-aware input; omitted fields throw when accessed. */
final class CloseOrderRequestInput extends Model {
    /** @param array{'collected_money_behavior'?: string, 'expected_version'?: int, 'reason_message'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CloseOrderRequestInput')); }
    /** Send keep to close while keeping collected money. Required when collected money remains refundable to its original tenders, after pending refunds. Closing does not refund money, and the order remains refundable. Accepted when nothing was collected. Value enum: "keep".
     * @return string
     * @throws SdkError When collected_money_behavior is omitted; use hasCollectedMoneyBehavior() or valueOrDefault().
     */
    public function getCollectedMoneyBehavior(): string { return $this->get('collected_money_behavior'); }
    public function hasCollectedMoneyBehavior(): bool { return $this->has('collected_money_behavior'); }
    /** Optional order version from the last order read. The mutation fails if the order changed. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Your note explaining why you are closing the order. It is not shown to the buyer. minLength: 1. maxLength: 500.
     * @return string
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
}
