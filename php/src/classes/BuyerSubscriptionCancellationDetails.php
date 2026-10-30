<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $reason_code
 * @property-read string $requested_at
 * @property-read string $requested_by
 * Presence-aware response; omitted optional fields return null. */
final class BuyerSubscriptionCancellationDetails extends Model {
    /** @param array{'reason_code'?: string, 'requested_at': string, 'requested_by': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerSubscriptionCancellationDetails')); }
    /** The reason the requester chose. Omitted when none was given. Value enum: "too_expensive", "missing_features", "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     * @return ?string
     */
    public function getReasonCode(): ?string { return $this->get('reason_code'); }
    public function hasReasonCode(): bool { return $this->has('reason_code'); }
    /** When the cancellation was requested. Format: date-time.
     * @return string
     */
    public function getRequestedAt(): string { return $this->get('requested_at'); }
    public function hasRequestedAt(): bool { return $this->has('requested_at'); }
    /** buyer: the buyer, in Flint's buyer account or with a customer session. merchant: a merchant credential, such as an API key or the dashboard. Value enum: "buyer", "merchant".
     * @return string
     */
    public function getRequestedBy(): string { return $this->get('requested_by'); }
    public function hasRequestedBy(): bool { return $this->has('requested_by'); }
}
