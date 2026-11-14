<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?CardDetails $card
 * @property-read ?string $created_at
 * @property-read ?string $customer_id
 * @property-read string $payment_method_id
 * @property-read string $status
 * @property-read string $type
 * @property-read ?string $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class ExpandedPaymentMethodSummary extends Model {
    /** @param array{'card'?: mixed, 'created_at'?: string, 'customer_id'?: string, 'payment_method_id': string, 'status': string, 'type': string, 'updated_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedPaymentMethodSummary')); }
    /** Brand, expiry and last four digits. Present when type is card. Card details on a payment method: brand, expiration month and year, last four digits, and the wallet when one was used.
     * @return ?CardDetails
     */
    public function getCard(): ?CardDetails { return $this->get('card'); }
    public function hasCard(): bool { return $this->has('card'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Customer this payment method belongs to.
     * @return ?string
     */
    public function getCustomerId(): ?string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Unique identifier for this payment method, prefixed `pm_`.
     * @return string
     */
    public function getPaymentMethodId(): string { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
    /** Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later. Value enum: "pending", "active", "expired", "archived", "failed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Kind of payment method. Value enum: "card".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
