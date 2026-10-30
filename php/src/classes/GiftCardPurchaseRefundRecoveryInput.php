<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $destination
 * @property-read list<GiftCardPurchaseRefundRecoveryDestinationInput|array<array-key, mixed>|\stdClass> $destinations
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardPurchaseRefundRecoveryInput extends Model {
    /** @param array{'created_at': string|\DateTimeInterface, 'destination': string, 'destinations': list<GiftCardPurchaseRefundRecoveryDestinationInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseRefundRecoveryInput')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Value enum: "original", "replacement".
     * @return string
     * @throws SdkError When destination is omitted; use hasDestination() or valueOrDefault().
     */
    public function getDestination(): string { return $this->get('destination'); }
    public function hasDestination(): bool { return $this->has('destination'); }
    /**  [] (Value): {@see GiftCardPurchaseRefundRecoveryDestinationInput}. A gift card and load that received recovered value in a gift card purchase refund recovery, with the amount.
     * @return list<GiftCardPurchaseRefundRecoveryDestinationInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When destinations is omitted; use hasDestinations() or valueOrDefault().
     */
    public function getDestinations(): array { return $this->get('destinations'); }
    public function hasDestinations(): bool { return $this->has('destinations'); }
}
