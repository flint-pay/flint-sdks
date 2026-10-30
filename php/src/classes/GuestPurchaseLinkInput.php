<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $customer_id
 * @property-read string $email
 * @property-read string|\DateTimeInterface $linked_at
 * @property-read int $linked_order_count
 * Presence-aware input; omitted fields throw when accessed. */
final class GuestPurchaseLinkInput extends Model {
    /** @param array{'customer_id': string, 'email': string, 'linked_at': string|\DateTimeInterface, 'linked_order_count': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GuestPurchaseLinkInput')); }
    /** customer_id
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** email
     * @return string
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When linked_at is omitted; use hasLinkedAt() or valueOrDefault().
     */
    public function getLinkedAt(): string|\DateTimeInterface { return $this->get('linked_at'); }
    public function hasLinkedAt(): bool { return $this->has('linked_at'); }
    /** Format: int64.
     * @return int
     * @throws SdkError When linked_order_count is omitted; use hasLinkedOrderCount() or valueOrDefault().
     */
    public function getLinkedOrderCount(): int { return $this->get('linked_order_count'); }
    public function hasLinkedOrderCount(): bool { return $this->has('linked_order_count'); }
}
