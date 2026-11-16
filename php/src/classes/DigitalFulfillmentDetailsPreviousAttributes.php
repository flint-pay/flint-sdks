<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $delivered_at
 * @property-read string|null $delivery_url
 * Presence-aware response; omitted optional fields return null. */
final class DigitalFulfillmentDetailsPreviousAttributes extends Model {
    /** @param array{'delivered_at'?: mixed, 'delivery_url'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DigitalFulfillmentDetailsPreviousAttributes')); }
    /** When the digital goods were delivered, in RFC3339 format. anyOf[1] (Value): string. When the digital goods were delivered, in RFC3339 format. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveredAt(): string|null { return $this->get('delivered_at'); }
    public function hasDeliveredAt(): bool { return $this->has('delivered_at'); }
    /** URL where the recipient can access the delivered digital goods. Merchant credentials receive the link when set; checkout session and invoice access credentials don't receive it after the covered lines are fully refunded. anyOf[1] (Value): string. URL where the recipient can access the delivered digital goods. Merchant credentials receive the link when set; checkout session and invoice access credentials don't receive it after the covered lines are fully refunded. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryUrl(): string|null { return $this->get('delivery_url'); }
    public function hasDeliveryUrl(): bool { return $this->has('delivery_url'); }
}
