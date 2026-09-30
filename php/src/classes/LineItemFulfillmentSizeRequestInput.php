<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $height
 * @property-read string $length
 * @property-read string $unit
 * @property-read string $width
 * Presence-aware input; omitted fields throw when accessed. */
final class LineItemFulfillmentSizeRequestInput extends Model {
    /** @param array{'height': string, 'length': string, 'unit': string, 'width': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LineItemFulfillmentSizeRequestInput')); }
    /** @return string
     * @throws SdkError When height is omitted; use hasHeight() or valueOrDefault().
     */
    public function getHeight(): string { return $this->get('height'); }
    public function hasHeight(): bool { return $this->has('height'); }
    /** @return string
     * @throws SdkError When length is omitted; use hasLength() or valueOrDefault().
     */
    public function getLength(): string { return $this->get('length'); }
    public function hasLength(): bool { return $this->has('length'); }
    /** @return string
     * @throws SdkError When unit is omitted; use hasUnit() or valueOrDefault().
     */
    public function getUnit(): string { return $this->get('unit'); }
    public function hasUnit(): bool { return $this->has('unit'); }
    /** @return string
     * @throws SdkError When width is omitted; use hasWidth() or valueOrDefault().
     */
    public function getWidth(): string { return $this->get('width'); }
    public function hasWidth(): bool { return $this->has('width'); }
}
