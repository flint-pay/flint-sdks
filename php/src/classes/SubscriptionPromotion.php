<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $name
 * @property-read string|null $promotion_code_id
 * @property-read string $promotion_id
 * @property-read SubscriptionPromotionRecurrenceOnce|SubscriptionPromotionRecurrenceRepeating|SubscriptionPromotionRecurrenceForever|\stdClass $recurrence
 * @property-read string|null $remaining_cycles
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionPromotion extends Model {
    /** @param array{'name': string, 'promotion_code_id': string|null, 'promotion_id': string, 'recurrence': mixed, 'remaining_cycles': string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPromotion')); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string or null. The attached promotion code ID; null when no promotion code was used.
     * @return string|null
     */
    public function getPromotionCodeId(): string|null { return $this->get('promotion_code_id'); }
    public function hasPromotionCodeId(): bool { return $this->has('promotion_code_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getPromotionId(): string { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
    /** Shape $ (Value): {@see PromotionRecurrence}. How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever.
     * @return SubscriptionPromotionRecurrenceOnce|SubscriptionPromotionRecurrenceRepeating|SubscriptionPromotionRecurrenceForever|\stdClass
     */
    public function getRecurrence(): SubscriptionPromotionRecurrenceOnce|SubscriptionPromotionRecurrenceRepeating|SubscriptionPromotionRecurrenceForever|\stdClass { return $this->get('recurrence'); }
    public function hasRecurrence(): bool { return $this->has('recurrence'); }
    /** Shape $ (Value): integer string or null. Charged cycles remaining for a repeating promotion, including the next cycle; null for a promotion that lasts forever. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string|null
     */
    public function getRemainingCycles(): string|null { return $this->get('remaining_cycles'); }
    public function hasRemainingCycles(): bool { return $this->has('remaining_cycles'); }
}
