<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read string|null $destination
 * @property-read list<GiftCardPurchaseRefundRecoveryDestinationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $destinations
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardPurchaseRefundRecoveryPreviousAttributesInput extends Model {
    /** @param array{'created_at'?: string|\DateTimeInterface|null, 'destination'?: string|null, 'destinations'?: list<GiftCardPurchaseRefundRecoveryDestinationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseRefundRecoveryPreviousAttributesInput')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Where the restored value went. Value enum: "original", "replacement". anyOf[1] (Value): string. Where the restored value went. Value enum: "original", "replacement". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When destination is omitted; use hasDestination() or valueOrDefault().
     */
    public function getDestination(): mixed { return $this->get('destination'); }
    public function hasDestination(): bool { return $this->has('destination'); }
    /** The cards and loads that received the restored value. anyOf[1] (Value): Array of {@see GiftCardPurchaseRefundRecoveryDestinationPreviousAttributesInput}. The cards and loads that received the restored value. anyOf[1][] (Value): {@see GiftCardPurchaseRefundRecoveryDestinationPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<GiftCardPurchaseRefundRecoveryDestinationPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When destinations is omitted; use hasDestinations() or valueOrDefault().
     */
    public function getDestinations(): mixed { return $this->get('destinations'); }
    public function hasDestinations(): bool { return $this->has('destinations'); }
}
