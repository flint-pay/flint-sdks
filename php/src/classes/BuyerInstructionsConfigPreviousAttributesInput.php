<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool|null $enabled
 * @property-read string|null $label
 * @property-read string|null $placeholder
 * @property-read bool|null $required
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerInstructionsConfigPreviousAttributesInput extends Model {
    /** @param array{'enabled'?: bool|null, 'label'?: string|null, 'placeholder'?: string|null, 'required'?: bool|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerInstructionsConfigPreviousAttributesInput')); }
    /** Whether checkout collects buyer instructions. anyOf[1] (Value): boolean. Whether checkout collects buyer instructions. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When enabled is omitted; use hasEnabled() or valueOrDefault().
     */
    public function getEnabled(): mixed { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** Checkout field label, without leading or trailing whitespace. Clients use a delivery-type default when omitted. anyOf[1] (Value): string. Checkout field label, without leading or trailing whitespace. Clients use a delivery-type default when omitted. minLength: 1. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When label is omitted; use hasLabel() or valueOrDefault().
     */
    public function getLabel(): mixed { return $this->get('label'); }
    public function hasLabel(): bool { return $this->has('label'); }
    /** Checkout field placeholder, without leading or trailing whitespace. Clients use a delivery-type default when omitted. anyOf[1] (Value): string. Checkout field placeholder, without leading or trailing whitespace. Clients use a delivery-type default when omitted. minLength: 1. maxLength: 500. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When placeholder is omitted; use hasPlaceholder() or valueOrDefault().
     */
    public function getPlaceholder(): mixed { return $this->get('placeholder'); }
    public function hasPlaceholder(): bool { return $this->has('placeholder'); }
    /** Whether the buyer must enter instructions before selecting the option. Requires enabled=true. anyOf[1] (Value): boolean. Whether the buyer must enter instructions before selecting the option. Requires enabled=true. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When required is omitted; use hasRequired() or valueOrDefault().
     */
    public function getRequired(): mixed { return $this->get('required'); }
    public function hasRequired(): bool { return $this->has('required'); }
}
