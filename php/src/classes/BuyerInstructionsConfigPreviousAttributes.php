<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool|null $enabled
 * @property-read string|null $label
 * @property-read string|null $placeholder
 * @property-read bool|null $required
 * Presence-aware response; omitted optional fields return null. */
final class BuyerInstructionsConfigPreviousAttributes extends Model {
    /** @param array{'enabled'?: mixed, 'label'?: mixed, 'placeholder'?: mixed, 'required'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerInstructionsConfigPreviousAttributes')); }
    /** Whether checkout collects buyer instructions. anyOf[1] (Value): boolean. Whether checkout collects buyer instructions. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getEnabled(): bool|null { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** Checkout field label, without leading or trailing whitespace. Clients use a delivery-type default when omitted. anyOf[1] (Value): string. Checkout field label, without leading or trailing whitespace. Clients use a delivery-type default when omitted. minLength: 1. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLabel(): string|null { return $this->get('label'); }
    public function hasLabel(): bool { return $this->has('label'); }
    /** Checkout field placeholder, without leading or trailing whitespace. Clients use a delivery-type default when omitted. anyOf[1] (Value): string. Checkout field placeholder, without leading or trailing whitespace. Clients use a delivery-type default when omitted. minLength: 1. maxLength: 500. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPlaceholder(): string|null { return $this->get('placeholder'); }
    public function hasPlaceholder(): bool { return $this->has('placeholder'); }
    /** Whether the buyer must enter instructions before selecting the option. Requires enabled=true. anyOf[1] (Value): boolean. Whether the buyer must enter instructions before selecting the option. Requires enabled=true. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getRequired(): bool|null { return $this->get('required'); }
    public function hasRequired(): bool { return $this->has('required'); }
}
