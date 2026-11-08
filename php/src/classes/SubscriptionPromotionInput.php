<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $first_cycle
 * @property-read string $name
 * @property-read string|null $promotion_code_id
 * @property-read string $promotion_id
 * @property-read PromotionRecurrenceInput|array<array-key, mixed>|\stdClass $recurrence
 * @property-read int|null $remaining_cycles
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionPromotionInput extends Model {
    /** @param array{'first_cycle': int, 'name': string, 'promotion_code_id': string|null, 'promotion_id': string, 'recurrence': PromotionRecurrenceInput|array<array-key, mixed>|\stdClass, 'remaining_cycles': int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPromotionInput')); }
    /** First charged cycle eligible for this promotion. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When first_cycle is omitted; use hasFirstCycle() or valueOrDefault().
     */
    public function getFirstCycle(): int { return $this->get('first_cycle'); }
    public function hasFirstCycle(): bool { return $this->has('first_cycle'); }
    /** name
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** The attached promotion code ID; null when no promotion code was used. Example: "pcode_01KEZF7C00JCC7QXWC262EF05T".
     * @return string|null
     * @throws SdkError When promotion_code_id is omitted; use hasPromotionCodeId() or valueOrDefault().
     */
    public function getPromotionCodeId(): string|null { return $this->get('promotion_code_id'); }
    public function hasPromotionCodeId(): bool { return $this->has('promotion_code_id'); }
    /** Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     * @return string
     * @throws SdkError When promotion_id is omitted; use hasPromotionId() or valueOrDefault().
     */
    public function getPromotionId(): string { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
    /** How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever.
     * @return PromotionRecurrenceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recurrence is omitted; use hasRecurrence() or valueOrDefault().
     */
    public function getRecurrence(): mixed { return $this->get('recurrence'); }
    public function hasRecurrence(): bool { return $this->has('recurrence'); }
    /** Discounted paid cycles remaining; null for a promotion that lasts forever unless a replacement limits it. With incomplete historical records, remaining cycles may be lower than the unused allowance. If no reliable bound is available, the allowance is treated as used up. Format: int64.
     * @return int|null
     * @throws SdkError When remaining_cycles is omitted; use hasRemainingCycles() or valueOrDefault().
     */
    public function getRemainingCycles(): int|null { return $this->get('remaining_cycles'); }
    public function hasRemainingCycles(): bool { return $this->has('remaining_cycles'); }
}
