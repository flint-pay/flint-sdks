<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read string $destination
 * @property-read list<GiftCardPurchaseRefundRecoveryDestination> $destinations
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardPurchaseRefundRecovery extends Model {
    /** @param array{'created_at': string, 'destination': string, 'destinations': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseRefundRecovery')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Value enum: "original", "replacement".
     * @return string
     */
    public function getDestination(): string { return $this->get('destination'); }
    public function hasDestination(): bool { return $this->has('destination'); }
    /**  [] (Value): {@see GiftCardPurchaseRefundRecoveryDestination}. A gift card and load that received recovered value in a gift card purchase refund recovery, with the amount.
     * @return list<GiftCardPurchaseRefundRecoveryDestination>
     */
    public function getDestinations(): array { return $this->get('destinations'); }
    public function hasDestinations(): bool { return $this->has('destinations'); }
}
