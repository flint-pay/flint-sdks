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
    /** Shape $ (Value): {@see CardDetails}. Card details on a payment method: brand, expiration month and year, last four digits, and the wallet when one was used.
     * @return ?CardDetails
     */
    public function getCard(): ?CardDetails { return $this->get('card'); }
    public function hasCard(): bool { return $this->has('card'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getCustomerId(): ?string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getPaymentMethodId(): string { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
    /** Shape $ (Value): string.  Value enum: "pending", "active", "expired", "archived", "failed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string.  Value enum: "card".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
