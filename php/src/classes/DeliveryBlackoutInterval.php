<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $end_local
 * @property-read string $start_local
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryBlackoutInterval extends Model {
    /** @param array{'end_local': string, 'start_local': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryBlackoutInterval')); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     */
    public function getEndLocal(): string { return $this->get('end_local'); }
    public function hasEndLocal(): bool { return $this->has('end_local'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     */
    public function getStartLocal(): string { return $this->get('start_local'); }
    public function hasStartLocal(): bool { return $this->has('start_local'); }
}
