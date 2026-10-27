<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $completed_count
 * @property-read ?string $created_at
 * @property-read ?string $description
 * @property-read string $name
 * @property-read string $payment_link_id
 * @property-read ?string $payment_link_type
 * @property-read string $status
 * @property-read ?string $subscription_plan_id
 * @property-read ?string $updated_at
 * @property-read ?string $url
 * Presence-aware response; omitted optional fields return null. */
final class ExpandedPaymentLinkSummary extends Model {
    /** @param array{'completed_count': int, 'created_at'?: string, 'description'?: string, 'name': string, 'payment_link_id': string, 'payment_link_type'?: string, 'status': string, 'subscription_plan_id'?: string, 'updated_at'?: string, 'url'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedPaymentLinkSummary')); }
    /** Shape $ (Value): integer. Format: int32.
     * @return int
     */
    public function getCompletedCount(): int { return $this->get('completed_count'); }
    public function hasCompletedCount(): bool { return $this->has('completed_count'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getPaymentLinkId(): string { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
    /** Shape $ (Value): string.  Value enum: "standard", "donation", "event".
     * @return ?string
     */
    public function getPaymentLinkType(): ?string { return $this->get('payment_link_type'); }
    public function hasPaymentLinkType(): bool { return $this->has('payment_link_type'); }
    /** Shape $ (Value): string.  Value enum: "active", "inactive".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getSubscriptionPlanId(): ?string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getUrl(): ?string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
