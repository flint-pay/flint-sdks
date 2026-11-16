<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $comment
 * @property-read string|null $reason_code
 * @property-read string|null $requested_at
 * @property-read string|null $requested_by
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionCancellationDetailsPreviousAttributes extends Model {
    /** @param array{'comment'?: mixed, 'reason_code'?: mixed, 'requested_at'?: mixed, 'requested_by'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionCancellationDetailsPreviousAttributes')); }
    /** What the requester wrote. Only merchant credentials read it; buyers never receive it. Omitted when none was given, and cleared when the customer is deleted. anyOf[1] (Value): string. What the requester wrote. Only merchant credentials read it; buyers never receive it. Omitted when none was given, and cleared when the customer is deleted. maxLength: 500. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getComment(): string|null { return $this->get('comment'); }
    public function hasComment(): bool { return $this->has('comment'); }
    /** The reason the requester chose. Omitted when none was given. Value enum: "too_expensive", "missing_features", "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other". anyOf[1] (Value): string. The reason the requester chose. Omitted when none was given. Value enum: "too_expensive", "missing_features", "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReasonCode(): string|null { return $this->get('reason_code'); }
    public function hasReasonCode(): bool { return $this->has('reason_code'); }
    /** When the cancellation was requested. anyOf[1] (Value): string. When the cancellation was requested. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRequestedAt(): string|null { return $this->get('requested_at'); }
    public function hasRequestedAt(): bool { return $this->has('requested_at'); }
    /** Who asked to cancel: buyer, merchant, or integration. Merchant credentials can set the attribution with initiated_by; customer sessions always record buyer. Value enum: "buyer", "merchant", "integration". anyOf[1] (Value): string. Who asked to cancel: buyer, merchant, or integration. Merchant credentials can set the attribution with initiated_by; customer sessions always record buyer. Value enum: "buyer", "merchant", "integration". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRequestedBy(): string|null { return $this->get('requested_by'); }
    public function hasRequestedBy(): bool { return $this->has('requested_by'); }
}
