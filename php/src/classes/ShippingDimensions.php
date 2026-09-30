<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read float $height
 * @property-read float $length
 * @property-read string $unit
 * @property-read float $width
 * Presence-aware response; omitted fields throw when accessed. */
final class ShippingDimensions extends Model {
    /** @param array{'height': float, 'length': float, 'unit': string, 'width': float, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShippingDimensions')); }
    /** @return float
     * @throws SdkError When height is omitted; use hasHeight() or valueOrDefault().
     */
    public function getHeight(): float { return $this->get('height'); }
    public function hasHeight(): bool { return $this->has('height'); }
    /** @return float
     * @throws SdkError When length is omitted; use hasLength() or valueOrDefault().
     */
    public function getLength(): float { return $this->get('length'); }
    public function hasLength(): bool { return $this->has('length'); }
    /** @return string
     * @throws SdkError When unit is omitted; use hasUnit() or valueOrDefault().
     */
    public function getUnit(): string { return $this->get('unit'); }
    public function hasUnit(): bool { return $this->has('unit'); }
    /** @return float
     * @throws SdkError When width is omitted; use hasWidth() or valueOrDefault().
     */
    public function getWidth(): float { return $this->get('width'); }
    public function hasWidth(): bool { return $this->has('width'); }
}
