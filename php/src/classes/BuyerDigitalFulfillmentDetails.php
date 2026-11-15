<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $delivered_at
 * @property-read string|null $delivery_url
 * Presence-aware response; omitted optional fields return null. */
final class BuyerDigitalFulfillmentDetails extends Model {
    /** @param array{'delivered_at'?: string, 'delivery_url'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerDigitalFulfillmentDetails')); }
    /** When the digital goods were delivered, in RFC3339 format. Format: date-time.
     * @return ?string
     */
    public function getDeliveredAt(): ?string { return $this->get('delivered_at'); }
    public function hasDeliveredAt(): bool { return $this->has('delivered_at'); }
    /** URL where the buyer can access the delivered digital goods. Omitted when the merchant hasn't set one. `null` when the buyer no longer has download access, for example after the covered lines are refunded.
     * @return string|null
     */
    public function getDeliveryUrl(): string|null { return $this->get('delivery_url'); }
    public function hasDeliveryUrl(): bool { return $this->has('delivery_url'); }
}
