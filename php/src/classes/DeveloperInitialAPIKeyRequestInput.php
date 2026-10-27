<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $name
 * @property-read string $sandbox_id
 * @property-read list<string> $scopes
 * Presence-aware input; omitted fields throw when accessed. */
final class DeveloperInitialAPIKeyRequestInput extends Model {
    /** @param array{'name': string, 'sandbox_id'?: string, 'scopes'?: list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeveloperInitialAPIKeyRequestInput')); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 100.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When scopes is omitted; use hasScopes() or valueOrDefault().
     */
    public function getScopes(): array { return $this->get('scopes'); }
    public function hasScopes(): bool { return $this->has('scopes'); }
}
