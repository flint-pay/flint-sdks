<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $first_cycle
 * @property-read string $name
 * @property-read string|null $promotion_code_id
 * @property-read string $promotion_id
 * @property-read SubscriptionPromotionRecurrenceOnce|SubscriptionPromotionRecurrenceRepeating|SubscriptionPromotionRecurrenceForever|\stdClass $recurrence
 * @property-read int|null $remaining_cycles
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionPromotion extends Model {
    /** @param array{'first_cycle': int, 'name': string, 'promotion_code_id': string|null, 'promotion_id': string, 'recurrence': mixed, 'remaining_cycles': int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPromotion')); }
    /** First charged cycle eligible for this promotion. Format: uint64. minimum: 1.
     * @return int
     */
    public function getFirstCycle(): int { return $this->get('first_cycle'); }
    public function hasFirstCycle(): bool { return $this->has('first_cycle'); }
    /** Name the promotion shows buyers: its display name, or its name when it has no display name. Frozen when the promotion was attached.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** ID of the promotion code used to attach the promotion. Null when no promotion code was used.
     * @return string|null
     */
    public function getPromotionCodeId(): string|null { return $this->get('promotion_code_id'); }
    public function hasPromotionCodeId(): bool { return $this->has('promotion_code_id'); }
    /** ID of the promotion attached to the subscription.
     * @return string
     */
    public function getPromotionId(): string { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
    /** How often the promotion's discount repeats, frozen when the promotion was attached. How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever.
     * @return SubscriptionPromotionRecurrenceOnce|SubscriptionPromotionRecurrenceRepeating|SubscriptionPromotionRecurrenceForever|\stdClass
     */
    public function getRecurrence(): SubscriptionPromotionRecurrenceOnce|SubscriptionPromotionRecurrenceRepeating|SubscriptionPromotionRecurrenceForever|\stdClass { return $this->get('recurrence'); }
    public function hasRecurrence(): bool { return $this->has('recurrence'); }
    /** Discounted paid cycles remaining, capped by any replacement handoff. Null when the promotion lasts forever and no replacement limits it. With incomplete historical records, remaining cycles may be lower than the unused allowance. If no reliable bound is available, the allowance is treated as used up. Format: int64.
     * @return int|null
     */
    public function getRemainingCycles(): int|null { return $this->get('remaining_cycles'); }
    public function hasRemainingCycles(): bool { return $this->has('remaining_cycles'); }
}
