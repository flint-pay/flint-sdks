<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $customer_id
 * @property-read string $email
 * @property-read string $linked_at
 * @property-read int $linked_order_count
 * Presence-aware response; omitted optional fields return null. */
final class GuestPurchaseLink extends Model {
    /** @param array{'customer_id': string, 'email': string, 'linked_at': string, 'linked_order_count': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GuestPurchaseLink')); }
    /** customer_id
     * @return string
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** email
     * @return string
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getLinkedAt(): string { return $this->get('linked_at'); }
    public function hasLinkedAt(): bool { return $this->has('linked_at'); }
    /** Format: int64.
     * @return int
     */
    public function getLinkedOrderCount(): int { return $this->get('linked_order_count'); }
    public function hasLinkedOrderCount(): bool { return $this->has('linked_order_count'); }
}
