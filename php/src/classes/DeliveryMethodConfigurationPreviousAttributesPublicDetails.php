<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $instructions
 * @property-read string|null $pickup_mode
 * @property-read string|null $service_level
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryMethodConfigurationPreviousAttributesPublicDetails extends Model {
    /** @param array{'instructions'?: mixed, 'pickup_mode'?: mixed, 'service_level'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodConfigurationPreviousAttributesPublicDetails')); }
    /** Buyer-visible instructions for this method. anyOf[1] (Value): string. Buyer-visible instructions for this method. maxLength: 2048. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInstructions(): string|null { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** Required for pickup methods and rejected for other method types. Value enum: "in_store", "curbside", "locker", "other". anyOf[1] (Value): string. Required for pickup methods and rejected for other method types. Value enum: "in_store", "curbside", "locker", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPickupMode(): string|null { return $this->get('pickup_mode'); }
    public function hasPickupMode(): bool { return $this->has('pickup_mode'); }
    /** Buyer-visible service level. Shipment accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum: "economy", "standard", "expedited", "express", "overnight", "same_day", "on_demand", "scheduled". anyOf[1] (Value): string. Buyer-visible service level. Shipment accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum: "economy", "standard", "expedited", "express", "overnight", "same_day", "on_demand", "scheduled". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getServiceLevel(): string|null { return $this->get('service_level'); }
    public function hasServiceLevel(): bool { return $this->has('service_level'); }
}
