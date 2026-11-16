<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $comment
 * @property-read string|null $reason_code
 * @property-read string|\DateTimeInterface|null $requested_at
 * @property-read string|null $requested_by
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionCancellationDetailsPreviousAttributesInput extends Model {
    /** @param array{'comment'?: string|null, 'reason_code'?: string|null, 'requested_at'?: string|\DateTimeInterface|null, 'requested_by'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionCancellationDetailsPreviousAttributesInput')); }
    /** What the requester wrote. Only merchant credentials read it; buyers never receive it. Omitted when none was given, and cleared when the customer is deleted. anyOf[1] (Value): string. What the requester wrote. Only merchant credentials read it; buyers never receive it. Omitted when none was given, and cleared when the customer is deleted. maxLength: 500. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When comment is omitted; use hasComment() or valueOrDefault().
     */
    public function getComment(): mixed { return $this->get('comment'); }
    public function hasComment(): bool { return $this->has('comment'); }
    /** The reason the requester chose. Omitted when none was given. Value enum: "too_expensive", "missing_features", "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other". anyOf[1] (Value): string. The reason the requester chose. Omitted when none was given. Value enum: "too_expensive", "missing_features", "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When reason_code is omitted; use hasReasonCode() or valueOrDefault().
     */
    public function getReasonCode(): mixed { return $this->get('reason_code'); }
    public function hasReasonCode(): bool { return $this->has('reason_code'); }
    /** When the cancellation was requested. anyOf[1] (Value): string. When the cancellation was requested. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When requested_at is omitted; use hasRequestedAt() or valueOrDefault().
     */
    public function getRequestedAt(): mixed { return $this->get('requested_at'); }
    public function hasRequestedAt(): bool { return $this->has('requested_at'); }
    /** Who asked to cancel: buyer, merchant, or integration. Merchant credentials can set the attribution with initiated_by; customer sessions always record buyer. Value enum: "buyer", "merchant", "integration". anyOf[1] (Value): string. Who asked to cancel: buyer, merchant, or integration. Merchant credentials can set the attribution with initiated_by; customer sessions always record buyer. Value enum: "buyer", "merchant", "integration". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When requested_by is omitted; use hasRequestedBy() or valueOrDefault().
     */
    public function getRequestedBy(): mixed { return $this->get('requested_by'); }
    public function hasRequestedBy(): bool { return $this->has('requested_by'); }
}
