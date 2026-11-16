<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CardDetailsPreviousAttributes|null $card
 * @property-read string|null $created_at
 * @property-read string|null $customer_id
 * @property-read string|null $payment_method_id
 * @property-read string|null $status
 * @property-read string|null $type
 * @property-read string|null $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class ExpandedPaymentMethodSummaryPreviousAttributes extends Model {
    /** @param array{'card'?: mixed, 'created_at'?: mixed, 'customer_id'?: mixed, 'payment_method_id'?: mixed, 'status'?: mixed, 'type'?: mixed, 'updated_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedPaymentMethodSummaryPreviousAttributes')); }
    /** Brand, expiry and last four digits. Present when type is card. anyOf[1] (Value): {@see CardDetailsPreviousAttributes}. anyOf[2] (Value): null.
     * @return CardDetailsPreviousAttributes|null
     */
    public function getCard(): CardDetailsPreviousAttributes|null { return $this->get('card'); }
    public function hasCard(): bool { return $this->has('card'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Customer this payment method belongs to. anyOf[1] (Value): string. Customer this payment method belongs to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Unique identifier for this payment method, prefixed `pm_`. anyOf[1] (Value): string. Unique identifier for this payment method, prefixed `pm_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentMethodId(): string|null { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
    /** Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later. Value enum: "pending", "active", "expired", "archived", "failed". anyOf[1] (Value): string. Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later. Value enum: "pending", "active", "expired", "archived", "failed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Kind of payment method. Value enum: "card". anyOf[1] (Value): string. Kind of payment method. Value enum: "card". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getType(): string|null { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
