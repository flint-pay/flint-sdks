<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $description
 * @property-read string|null $name
 * @property-read string|null $sku
 * Presence-aware response; omitted optional fields return null. */
final class ReturnUnverifiedItemPreviousAttributes extends Model {
    /** @param array{'description'?: mixed, 'name'?: mixed, 'sku'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnUnverifiedItemPreviousAttributes')); }
    /** Description of the unidentified item. anyOf[1] (Value): string. Description of the unidentified item. minLength: 1. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Name of the unidentified item. anyOf[1] (Value): string. Name of the unidentified item. minLength: 1. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** SKU of the unidentified item. anyOf[1] (Value): string. SKU of the unidentified item. minLength: 1. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSku(): string|null { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
}
