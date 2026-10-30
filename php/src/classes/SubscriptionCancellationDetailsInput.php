<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $comment
 * @property-read string $reason_code
 * @property-read string|\DateTimeInterface $requested_at
 * @property-read string $requested_by
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionCancellationDetailsInput extends Model {
    /** @param array{'comment'?: string, 'reason_code'?: string, 'requested_at': string|\DateTimeInterface, 'requested_by': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionCancellationDetailsInput')); }
    /** What the requester wrote. Only merchant credentials read it; buyers never receive it. Omitted when none was given, and cleared when the customer is deleted. maxLength: 500.
     * @return string
     * @throws SdkError When comment is omitted; use hasComment() or valueOrDefault().
     */
    public function getComment(): string { return $this->get('comment'); }
    public function hasComment(): bool { return $this->has('comment'); }
    /** The reason the requester chose. Omitted when none was given. Value enum: "too_expensive", "missing_features", "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     * @return string
     * @throws SdkError When reason_code is omitted; use hasReasonCode() or valueOrDefault().
     */
    public function getReasonCode(): string { return $this->get('reason_code'); }
    public function hasReasonCode(): bool { return $this->has('reason_code'); }
    /** When the cancellation was requested. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When requested_at is omitted; use hasRequestedAt() or valueOrDefault().
     */
    public function getRequestedAt(): string|\DateTimeInterface { return $this->get('requested_at'); }
    public function hasRequestedAt(): bool { return $this->has('requested_at'); }
    /** buyer: the buyer, in Flint's buyer account or with a customer session. merchant: a merchant credential, such as an API key or the dashboard. Value enum: "buyer", "merchant".
     * @return string
     * @throws SdkError When requested_by is omitted; use hasRequestedBy() or valueOrDefault().
     */
    public function getRequestedBy(): string { return $this->get('requested_by'); }
    public function hasRequestedBy(): bool { return $this->has('requested_by'); }
}
