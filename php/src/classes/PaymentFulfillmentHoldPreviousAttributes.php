<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $reason
 * @property-read string|null $released_at
 * @property-read string|null $requested_at
 * @property-read string|null $required_action
 * @property-read string|null $status
 * @property-read string|null $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class PaymentFulfillmentHoldPreviousAttributes extends Model {
    /** @param array{'reason'?: mixed, 'released_at'?: mixed, 'requested_at'?: mixed, 'required_action'?: mixed, 'status'?: mixed, 'updated_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentFulfillmentHoldPreviousAttributes')); }
    /** Why the hold exists, which follows its status. Value enum: "external_payment_hold", "external_payment_hold_released". anyOf[1] (Value): string. Why the hold exists, which follows its status. Value enum: "external_payment_hold", "external_payment_hold_released". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReason(): string|null { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReleasedAt(): string|null { return $this->get('released_at'); }
    public function hasReleasedAt(): bool { return $this->has('released_at'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRequestedAt(): string|null { return $this->get('requested_at'); }
    public function hasRequestedAt(): bool { return $this->has('requested_at'); }
    /** What to do with fulfillment for this payment now. It follows the hold's status. Value enum: "pause_fulfillment", "reevaluate_fulfillment". anyOf[1] (Value): string. What to do with fulfillment for this payment now. It follows the hold's status. Value enum: "pause_fulfillment", "reevaluate_fulfillment". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRequiredAction(): string|null { return $this->get('required_action'); }
    public function hasRequiredAction(): bool { return $this->has('required_action'); }
    /** Whether the hold is in force. Value enum: "active", "released". anyOf[1] (Value): string. Whether the hold is in force. Value enum: "active", "released". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
