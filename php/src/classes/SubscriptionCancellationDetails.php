<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $comment
 * @property-read ?string $reason_code
 * @property-read string $requested_at
 * @property-read string $requested_by
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionCancellationDetails extends Model {
    /** @param array{'comment'?: string, 'reason_code'?: string, 'requested_at': string, 'requested_by': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionCancellationDetails')); }
    /** Shape $ (Value): string. What the requester wrote. Only merchant credentials read it; buyers never receive it. Omitted when none was given, and cleared when the customer is deleted. maxLength: 500.
     * @return ?string
     */
    public function getComment(): ?string { return $this->get('comment'); }
    public function hasComment(): bool { return $this->has('comment'); }
    /** Shape $ (Value): string. The reason the requester chose. Omitted when none was given. Value enum: "too_expensive", "missing_features", "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     * @return ?string
     */
    public function getReasonCode(): ?string { return $this->get('reason_code'); }
    public function hasReasonCode(): bool { return $this->has('reason_code'); }
    /** Shape $ (Value): string. When the cancellation was requested. Format: date-time.
     * @return string
     */
    public function getRequestedAt(): string { return $this->get('requested_at'); }
    public function hasRequestedAt(): bool { return $this->has('requested_at'); }
    /** Shape $ (Value): string. buyer: the buyer, in Flint's buyer account or with a customer session. merchant: a merchant credential, such as an API key or the dashboard. Value enum: "buyer", "merchant".
     * @return string
     */
    public function getRequestedBy(): string { return $this->get('requested_by'); }
    public function hasRequestedBy(): bool { return $this->has('requested_by'); }
}
