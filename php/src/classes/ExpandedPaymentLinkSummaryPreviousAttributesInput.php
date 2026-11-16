<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $completed_count
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read string|null $description
 * @property-read string|null $name
 * @property-read string|null $payment_link_id
 * @property-read string|null $payment_link_type
 * @property-read string|null $status
 * @property-read string|null $subscription_plan_id
 * @property-read string|\DateTimeInterface|null $updated_at
 * @property-read string|null $url
 * Presence-aware input; omitted fields throw when accessed. */
final class ExpandedPaymentLinkSummaryPreviousAttributesInput extends Model {
    /** @param array{'completed_count'?: int|null, 'created_at'?: string|\DateTimeInterface|null, 'description'?: string|null, 'name'?: string|null, 'payment_link_id'?: string|null, 'payment_link_type'?: string|null, 'status'?: string|null, 'subscription_plan_id'?: string|null, 'updated_at'?: string|\DateTimeInterface|null, 'url'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedPaymentLinkSummaryPreviousAttributesInput')); }
    /** Number of paid checkout sessions started from this link. anyOf[1] (Value): integer. Number of paid checkout sessions started from this link. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When completed_count is omitted; use hasCompletedCount() or valueOrDefault().
     */
    public function getCompletedCount(): mixed { return $this->get('completed_count'); }
    public function hasCompletedCount(): bool { return $this->has('completed_count'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Text about what the link sells, returned to buyers when they open it. anyOf[1] (Value): string. Text about what the link sells, returned to buyers when they open it. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): mixed { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Name of the payment link. anyOf[1] (Value): string. Name of the payment link. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Unique identifier for this payment link, prefixed `pl_`. anyOf[1] (Value): string. Unique identifier for this payment link, prefixed `pl_`. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When payment_link_id is omitted; use hasPaymentLinkId() or valueOrDefault().
     */
    public function getPaymentLinkId(): mixed { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
    /** What kind of link this is. Value enum: "standard", "donation", "event". anyOf[1] (Value): string. What kind of link this is. Value enum: "standard", "donation", "event". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When payment_link_type is omitted; use hasPaymentLinkType() or valueOrDefault().
     */
    public function getPaymentLinkType(): mixed { return $this->get('payment_link_type'); }
    public function hasPaymentLinkType(): bool { return $this->has('payment_link_type'); }
    /** Whether the link can start new checkouts. Value enum: "active", "inactive". anyOf[1] (Value): string. Whether the link can start new checkouts. Value enum: "active", "inactive". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. anyOf[1] (Value): string. ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): mixed { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): mixed { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** URL buyers open to use the link. anyOf[1] (Value): string. URL buyers open to use the link. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): mixed { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
