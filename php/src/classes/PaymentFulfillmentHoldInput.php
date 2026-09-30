<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $reason
 * @property-read string|\DateTimeInterface $released_at
 * @property-read string|\DateTimeInterface $requested_at
 * @property-read string $required_action
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentFulfillmentHoldInput extends Model {
    /** @param array{'reason': string, 'released_at'?: string|\DateTimeInterface, 'requested_at': string|\DateTimeInterface, 'required_action': string, 'status': string, 'updated_at': string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentFulfillmentHoldInput')); }
    /** @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When released_at is omitted; use hasReleasedAt() or valueOrDefault().
     */
    public function getReleasedAt(): string|\DateTimeInterface { return $this->get('released_at'); }
    public function hasReleasedAt(): bool { return $this->has('released_at'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When requested_at is omitted; use hasRequestedAt() or valueOrDefault().
     */
    public function getRequestedAt(): string|\DateTimeInterface { return $this->get('requested_at'); }
    public function hasRequestedAt(): bool { return $this->has('requested_at'); }
    /** @return string
     * @throws SdkError When required_action is omitted; use hasRequiredAction() or valueOrDefault().
     */
    public function getRequiredAction(): string { return $this->get('required_action'); }
    public function hasRequiredAction(): bool { return $this->has('required_action'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
