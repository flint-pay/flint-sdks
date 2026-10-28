<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $enabled
 * @property-read string $label
 * @property-read string $placeholder
 * @property-read bool $required
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerInstructionsConfigRequestRequestInput extends Model {
    /** @param array{'enabled': bool, 'label'?: string, 'placeholder'?: string, 'required': bool}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerInstructionsConfigRequestRequestInput')); }
    /** Shape $ (Value): boolean. Whether checkout collects buyer instructions.
     * @return bool
     * @throws SdkError When enabled is omitted; use hasEnabled() or valueOrDefault().
     */
    public function getEnabled(): bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** Shape $ (Value): string. Checkout field label, without leading or trailing whitespace. Clients use a delivery-type default when omitted. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When label is omitted; use hasLabel() or valueOrDefault().
     */
    public function getLabel(): string { return $this->get('label'); }
    public function hasLabel(): bool { return $this->has('label'); }
    /** Shape $ (Value): string. Checkout field placeholder, without leading or trailing whitespace. Clients use a delivery-type default when omitted. minLength: 1. maxLength: 500.
     * @return string
     * @throws SdkError When placeholder is omitted; use hasPlaceholder() or valueOrDefault().
     */
    public function getPlaceholder(): string { return $this->get('placeholder'); }
    public function hasPlaceholder(): bool { return $this->has('placeholder'); }
    /** Shape $ (Value): boolean. Whether the buyer must enter instructions before selecting the option. Requires enabled=true.
     * @return bool
     * @throws SdkError When required is omitted; use hasRequired() or valueOrDefault().
     */
    public function getRequired(): bool { return $this->get('required'); }
    public function hasRequired(): bool { return $this->has('required'); }
}
