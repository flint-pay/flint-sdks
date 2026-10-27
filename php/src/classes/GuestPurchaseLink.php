<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $customer_id
 * @property-read string $email
 * @property-read string $linked_at
 * @property-read string $linked_order_count
 * Presence-aware response; omitted optional fields return null. */
final class GuestPurchaseLink extends Model {
    /** @param array{'customer_id': string, 'email': string, 'linked_at': string, 'linked_order_count': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GuestPurchaseLink')); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getLinkedAt(): string { return $this->get('linked_at'); }
    public function hasLinkedAt(): bool { return $this->has('linked_at'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getLinkedOrderCount(): string { return $this->get('linked_order_count'); }
    public function hasLinkedOrderCount(): bool { return $this->has('linked_order_count'); }
}
