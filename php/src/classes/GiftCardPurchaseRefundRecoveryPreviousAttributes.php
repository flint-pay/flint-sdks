<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $created_at
 * @property-read string|null $destination
 * @property-read list<GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes>|null $destinations
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardPurchaseRefundRecoveryPreviousAttributes extends Model {
    /** @param array{'created_at'?: mixed, 'destination'?: mixed, 'destinations'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseRefundRecoveryPreviousAttributes')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Where the restored value went. Value enum: "original", "replacement". anyOf[1] (Value): string. Where the restored value went. Value enum: "original", "replacement". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDestination(): string|null { return $this->get('destination'); }
    public function hasDestination(): bool { return $this->has('destination'); }
    /** The cards and loads that received the restored value. anyOf[1] (Value): Array of {@see GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes}. The cards and loads that received the restored value. anyOf[1][] (Value): {@see GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<GiftCardPurchaseRefundRecoveryDestinationPreviousAttributes>|null
     */
    public function getDestinations(): array|null { return $this->get('destinations'); }
    public function hasDestinations(): bool { return $this->has('destinations'); }
}
