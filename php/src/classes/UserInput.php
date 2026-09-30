<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $first_name
 * @property-read string $last_name
 * Presence-aware input; omitted fields throw when accessed. */
final class UserInput extends Model {
    /** @param array{'first_name': string, 'last_name': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UserInput')); }
    /** @return string
     * @throws SdkError When first_name is omitted; use hasFirstName() or valueOrDefault().
     */
    public function getFirstName(): string { return $this->get('first_name'); }
    public function hasFirstName(): bool { return $this->has('first_name'); }
    /** @return string
     * @throws SdkError When last_name is omitted; use hasLastName() or valueOrDefault().
     */
    public function getLastName(): string { return $this->get('last_name'); }
    public function hasLastName(): bool { return $this->has('last_name'); }
}
