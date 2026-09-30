<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $instructions
 * @property-read string $pickup_mode
 * @property-read string $service_level
 * Presence-aware response; omitted fields throw when accessed. */
final class DeliveryMethodConfigurationPublicDetails extends Model {
    /** @param array{'instructions'?: string, 'pickup_mode'?: string, 'service_level'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodConfigurationPublicDetails')); }
    /** @return string
     * @throws SdkError When instructions is omitted; use hasInstructions() or valueOrDefault().
     */
    public function getInstructions(): string { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** @return string
     * @throws SdkError When pickup_mode is omitted; use hasPickupMode() or valueOrDefault().
     */
    public function getPickupMode(): string { return $this->get('pickup_mode'); }
    public function hasPickupMode(): bool { return $this->has('pickup_mode'); }
    /** @return string
     * @throws SdkError When service_level is omitted; use hasServiceLevel() or valueOrDefault().
     */
    public function getServiceLevel(): string { return $this->get('service_level'); }
    public function hasServiceLevel(): bool { return $this->has('service_level'); }
}
