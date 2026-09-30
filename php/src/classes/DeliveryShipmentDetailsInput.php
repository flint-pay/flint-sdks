<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $instructions
 * @property-read string $service_level
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryShipmentDetailsInput extends Model {
    /** @param array{'instructions'?: string, 'service_level'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryShipmentDetailsInput')); }
    /** @return string
     * @throws SdkError When instructions is omitted; use hasInstructions() or valueOrDefault().
     */
    public function getInstructions(): string { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** @return string
     * @throws SdkError When service_level is omitted; use hasServiceLevel() or valueOrDefault().
     */
    public function getServiceLevel(): string { return $this->get('service_level'); }
    public function hasServiceLevel(): bool { return $this->has('service_level'); }
}
