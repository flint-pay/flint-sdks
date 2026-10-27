<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $name
 * @property-read list<string> $scopes
 * Presence-aware input; omitted fields throw when accessed. */
final class DeveloperInitialAPIKeyRequestInput extends Model {
    /** @param array{'name': string, 'scopes'?: list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeveloperInitialAPIKeyRequestInput')); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 100.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When scopes is omitted; use hasScopes() or valueOrDefault().
     */
    public function getScopes(): array { return $this->get('scopes'); }
    public function hasScopes(): bool { return $this->has('scopes'); }
}
