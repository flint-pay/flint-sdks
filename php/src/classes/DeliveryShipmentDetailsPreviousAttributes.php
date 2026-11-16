<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $instructions
 * @property-read string|null $service_level
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryShipmentDetailsPreviousAttributes extends Model {
    /** @param array{'instructions'?: mixed, 'service_level'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryShipmentDetailsPreviousAttributes')); }
    /** Buyer-facing instructions for this delivery service. anyOf[1] (Value): string. Buyer-facing instructions for this delivery service. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInstructions(): string|null { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** Merchant's service-level label. Flint does not enforce the timing implied by the label. anyOf[1] (Value): string. Merchant's service-level label. Flint does not enforce the timing implied by the label. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getServiceLevel(): string|null { return $this->get('service_level'); }
    public function hasServiceLevel(): bool { return $this->has('service_level'); }
}
