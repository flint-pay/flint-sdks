<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $description
 * @property-read string $name
 * @property-read ?string $sku
 * Presence-aware response; omitted optional fields return null. */
final class ReturnUnverifiedItem extends Model {
    /** @param array{'description'?: string, 'name': string, 'sku'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnUnverifiedItem')); }
    /** Shape $ (Value): string. minLength: 1.
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return ?string
     */
    public function getSku(): ?string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
}
