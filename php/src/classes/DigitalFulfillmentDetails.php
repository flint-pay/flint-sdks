<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $delivered_at
 * @property-read ?string $delivery_url
 * Presence-aware response; omitted optional fields return null. */
final class DigitalFulfillmentDetails extends Model {
    /** @param array{'delivered_at'?: string, 'delivery_url'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DigitalFulfillmentDetails')); }
    /** Shape $ (Value): string. When the digital goods were delivered, in RFC3339 format. Format: date-time.
     * @return ?string
     */
    public function getDeliveredAt(): ?string { return $this->get('delivered_at'); }
    public function hasDeliveredAt(): bool { return $this->has('delivered_at'); }
    /** Shape $ (Value): string. URL where the recipient can access the delivered digital goods.
     * @return ?string
     */
    public function getDeliveryUrl(): ?string { return $this->get('delivery_url'); }
    public function hasDeliveryUrl(): bool { return $this->has('delivery_url'); }
}
