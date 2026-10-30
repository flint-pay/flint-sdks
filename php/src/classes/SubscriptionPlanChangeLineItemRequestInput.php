<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $quantity
 * @property-read string $subscription_plan_line_item_id
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionPlanChangeLineItemRequestInput extends Model {
    /** @param array{'quantity': int, 'subscription_plan_line_item_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPlanChangeLineItemRequestInput')); }
    /** Quantity of this target line. Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 9999.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** A line in the target subscription plan. minLength: 1. pattern: ^spli_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When subscription_plan_line_item_id is omitted; use hasSubscriptionPlanLineItemId() or valueOrDefault().
     */
    public function getSubscriptionPlanLineItemId(): string { return $this->get('subscription_plan_line_item_id'); }
    public function hasSubscriptionPlanLineItemId(): bool { return $this->has('subscription_plan_line_item_id'); }
}
