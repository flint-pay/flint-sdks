<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read string $destination
 * @property-read list<GiftCardPurchaseRefundRecoveryDestination> $destinations
 * Presence-aware response; omitted fields throw when accessed. */
final class GiftCardPurchaseRefundRecovery extends Model {
    /** @param array{'created_at': string, 'destination': string, 'destinations': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseRefundRecovery')); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When destination is omitted; use hasDestination() or valueOrDefault().
     */
    public function getDestination(): string { return $this->get('destination'); }
    public function hasDestination(): bool { return $this->has('destination'); }
    /** @return list<GiftCardPurchaseRefundRecoveryDestination>
     * @throws SdkError When destinations is omitted; use hasDestinations() or valueOrDefault().
     */
    public function getDestinations(): array { return $this->get('destinations'); }
    public function hasDestinations(): bool { return $this->has('destinations'); }
}
