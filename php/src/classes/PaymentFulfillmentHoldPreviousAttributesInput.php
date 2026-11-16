<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $reason
 * @property-read string|\DateTimeInterface|null $released_at
 * @property-read string|\DateTimeInterface|null $requested_at
 * @property-read string|null $required_action
 * @property-read string|null $status
 * @property-read string|\DateTimeInterface|null $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentFulfillmentHoldPreviousAttributesInput extends Model {
    /** @param array{'reason'?: string|null, 'released_at'?: string|\DateTimeInterface|null, 'requested_at'?: string|\DateTimeInterface|null, 'required_action'?: string|null, 'status'?: string|null, 'updated_at'?: string|\DateTimeInterface|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentFulfillmentHoldPreviousAttributesInput')); }
    /** Why the hold exists, which follows its status. Value enum: "external_payment_hold", "external_payment_hold_released". anyOf[1] (Value): string. Why the hold exists, which follows its status. Value enum: "external_payment_hold", "external_payment_hold_released". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): mixed { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When released_at is omitted; use hasReleasedAt() or valueOrDefault().
     */
    public function getReleasedAt(): mixed { return $this->get('released_at'); }
    public function hasReleasedAt(): bool { return $this->has('released_at'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When requested_at is omitted; use hasRequestedAt() or valueOrDefault().
     */
    public function getRequestedAt(): mixed { return $this->get('requested_at'); }
    public function hasRequestedAt(): bool { return $this->has('requested_at'); }
    /** What to do with fulfillment for this payment now. It follows the hold's status. Value enum: "pause_fulfillment", "reevaluate_fulfillment". anyOf[1] (Value): string. What to do with fulfillment for this payment now. It follows the hold's status. Value enum: "pause_fulfillment", "reevaluate_fulfillment". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When required_action is omitted; use hasRequiredAction() or valueOrDefault().
     */
    public function getRequiredAction(): mixed { return $this->get('required_action'); }
    public function hasRequiredAction(): bool { return $this->has('required_action'); }
    /** Whether the hold is in force. Value enum: "active", "released". anyOf[1] (Value): string. Whether the hold is in force. Value enum: "active", "released". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): mixed { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
