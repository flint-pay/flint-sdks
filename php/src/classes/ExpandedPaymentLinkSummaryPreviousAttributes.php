<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $completed_count
 * @property-read string|null $created_at
 * @property-read string|null $description
 * @property-read string|null $name
 * @property-read string|null $payment_link_id
 * @property-read string|null $payment_link_type
 * @property-read string|null $status
 * @property-read string|null $subscription_plan_id
 * @property-read string|null $updated_at
 * @property-read string|null $url
 * Presence-aware response; omitted optional fields return null. */
final class ExpandedPaymentLinkSummaryPreviousAttributes extends Model {
    /** @param array{'completed_count'?: mixed, 'created_at'?: mixed, 'description'?: mixed, 'name'?: mixed, 'payment_link_id'?: mixed, 'payment_link_type'?: mixed, 'status'?: mixed, 'subscription_plan_id'?: mixed, 'updated_at'?: mixed, 'url'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedPaymentLinkSummaryPreviousAttributes')); }
    /** Number of paid checkout sessions started from this link. anyOf[1] (Value): integer. Number of paid checkout sessions started from this link. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getCompletedCount(): int|null { return $this->get('completed_count'); }
    public function hasCompletedCount(): bool { return $this->has('completed_count'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Text about what the link sells, returned to buyers when they open it. anyOf[1] (Value): string. Text about what the link sells, returned to buyers when they open it. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Name of the payment link. anyOf[1] (Value): string. Name of the payment link. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Unique identifier for this payment link, prefixed `pl_`. anyOf[1] (Value): string. Unique identifier for this payment link, prefixed `pl_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentLinkId(): string|null { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
    /** What kind of link this is. Value enum: "standard", "donation", "event". anyOf[1] (Value): string. What kind of link this is. Value enum: "standard", "donation", "event". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentLinkType(): string|null { return $this->get('payment_link_type'); }
    public function hasPaymentLinkType(): bool { return $this->has('payment_link_type'); }
    /** Whether the link can start new checkouts. Value enum: "active", "inactive". anyOf[1] (Value): string. Whether the link can start new checkouts. Value enum: "active", "inactive". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. anyOf[1] (Value): string. ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSubscriptionPlanId(): string|null { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** URL buyers open to use the link. anyOf[1] (Value): string. URL buyers open to use the link. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUrl(): string|null { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
