<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $reason
 * @property-read ?string $released_at
 * @property-read string $requested_at
 * @property-read string $required_action
 * @property-read string $status
 * @property-read string $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class PaymentFulfillmentHold extends Model {
    /** @param array{'reason': string, 'released_at'?: string, 'requested_at': string, 'required_action': string, 'status': string, 'updated_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentFulfillmentHold')); }
    /** Value enum: "external_payment_hold", "external_payment_hold_released".
     * @return string
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getReleasedAt(): ?string { return $this->get('released_at'); }
    public function hasReleasedAt(): bool { return $this->has('released_at'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getRequestedAt(): string { return $this->get('requested_at'); }
    public function hasRequestedAt(): bool { return $this->has('requested_at'); }
    /** Value enum: "pause_fulfillment", "reevaluate_fulfillment".
     * @return string
     */
    public function getRequiredAction(): string { return $this->get('required_action'); }
    public function hasRequiredAction(): bool { return $this->has('required_action'); }
    /** Value enum: "active", "released".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
