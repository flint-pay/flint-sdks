<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $instructions
 * @property-read ?string $pickup_mode
 * @property-read ?string $service_level
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryMethodConfigurationPublicDetails extends Model {
    /** @param array{'instructions'?: string, 'pickup_mode'?: string, 'service_level'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodConfigurationPublicDetails')); }
    /** Buyer-visible instructions for this method. maxLength: 2048.
     * @return ?string
     */
    public function getInstructions(): ?string { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** Required for pickup methods and rejected for other method types. Value enum: "in_store", "curbside", "locker", "other".
     * @return ?string
     */
    public function getPickupMode(): ?string { return $this->get('pickup_mode'); }
    public function hasPickupMode(): bool { return $this->has('pickup_mode'); }
    /** Buyer-visible service level. Shipment accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum: "economy", "standard", "expedited", "express", "overnight", "same_day", "on_demand", "scheduled".
     * @return ?string
     */
    public function getServiceLevel(): ?string { return $this->get('service_level'); }
    public function hasServiceLevel(): bool { return $this->has('service_level'); }
}
