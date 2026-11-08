<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $reason_code
 * @property-read string|\DateTimeInterface $requested_at
 * @property-read string $requested_by
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerSubscriptionCancellationDetailsInput extends Model {
    /** @param array{'reason_code'?: string, 'requested_at': string|\DateTimeInterface, 'requested_by': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerSubscriptionCancellationDetailsInput')); }
    /** The reason the requester chose. Omitted when none was given. Value enum: "too_expensive", "missing_features", "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     * @return string
     * @throws SdkError When reason_code is omitted; use hasReasonCode() or valueOrDefault().
     */
    public function getReasonCode(): string { return $this->get('reason_code'); }
    public function hasReasonCode(): bool { return $this->has('reason_code'); }
    /** When the cancellation was requested. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When requested_at is omitted; use hasRequestedAt() or valueOrDefault().
     */
    public function getRequestedAt(): string|\DateTimeInterface { return $this->get('requested_at'); }
    public function hasRequestedAt(): bool { return $this->has('requested_at'); }
    /** Who asked to cancel: buyer, merchant, or integration. Merchant credentials can set the attribution with initiated_by; customer sessions always record buyer. Value enum: "buyer", "merchant", "integration".
     * @return string
     * @throws SdkError When requested_by is omitted; use hasRequestedBy() or valueOrDefault().
     */
    public function getRequestedBy(): string { return $this->get('requested_by'); }
    public function hasRequestedBy(): bool { return $this->has('requested_by'); }
}
