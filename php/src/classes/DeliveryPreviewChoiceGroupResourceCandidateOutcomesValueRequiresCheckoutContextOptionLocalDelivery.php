<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $instructions
 * @property-read ?string $service_level
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContextOptionLocalDelivery extends Model {
    /** @param array{'instructions'?: string, 'service_level'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueRequiresCheckoutContextOptionLocalDelivery')); }
    /** Buyer-facing instructions for this delivery service.
     * @return ?string
     */
    public function getInstructions(): ?string { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** Merchant's service-level label. Flint does not enforce the timing implied by the label.
     * @return ?string
     */
    public function getServiceLevel(): ?string { return $this->get('service_level'); }
    public function hasServiceLevel(): bool { return $this->has('service_level'); }
}
