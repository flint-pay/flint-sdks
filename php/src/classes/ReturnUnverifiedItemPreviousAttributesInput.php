<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $description
 * @property-read string|null $name
 * @property-read string|null $sku
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnUnverifiedItemPreviousAttributesInput extends Model {
    /** @param array{'description'?: string|null, 'name'?: string|null, 'sku'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnUnverifiedItemPreviousAttributesInput')); }
    /** Description of the unidentified item. anyOf[1] (Value): string. Description of the unidentified item. minLength: 1. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): mixed { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Name of the unidentified item. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. anyOf[1] (Value): string. Name of the unidentified item. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: 1. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** SKU of the unidentified item. anyOf[1] (Value): string. SKU of the unidentified item. minLength: 1. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): mixed { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
}
