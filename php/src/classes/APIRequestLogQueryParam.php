<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $name
 * @property-read string $value
 * Presence-aware response; omitted optional fields return null. */
final class APIRequestLogQueryParam extends Model {
    /** @param array{'name': string, 'value': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('APIRequestLogQueryParam')); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getValue(): string { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
