<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $instructions
 * @property-read string|null $service_level
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryLocalDeliveryDetailsPreviousAttributesInput extends Model {
    /** @param array{'instructions'?: string|null, 'service_level'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryLocalDeliveryDetailsPreviousAttributesInput')); }
    /** Buyer-facing instructions for this delivery service. anyOf[1] (Value): string. Buyer-facing instructions for this delivery service. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When instructions is omitted; use hasInstructions() or valueOrDefault().
     */
    public function getInstructions(): mixed { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** Merchant's service-level label. Flint does not enforce the timing implied by the label. anyOf[1] (Value): string. Merchant's service-level label. Flint does not enforce the timing implied by the label. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When service_level is omitted; use hasServiceLevel() or valueOrDefault().
     */
    public function getServiceLevel(): mixed { return $this->get('service_level'); }
    public function hasServiceLevel(): bool { return $this->has('service_level'); }
}
