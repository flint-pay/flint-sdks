<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $customer_id
 * @property-read string $email
 * @property-read string $linked_at
 * @property-read string $linked_order_count
 * Presence-aware response; omitted fields throw when accessed. */
final class GuestPurchaseLink extends Model {
    /** @param array{'customer_id': string, 'email': string, 'linked_at': string, 'linked_order_count': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GuestPurchaseLink')); }
    /** @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** @return string
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** @return string
     * @throws SdkError When linked_at is omitted; use hasLinkedAt() or valueOrDefault().
     */
    public function getLinkedAt(): string { return $this->get('linked_at'); }
    public function hasLinkedAt(): bool { return $this->has('linked_at'); }
    /** @return string
     * @throws SdkError When linked_order_count is omitted; use hasLinkedOrderCount() or valueOrDefault().
     */
    public function getLinkedOrderCount(): string { return $this->get('linked_order_count'); }
    public function hasLinkedOrderCount(): bool { return $this->has('linked_order_count'); }
}
