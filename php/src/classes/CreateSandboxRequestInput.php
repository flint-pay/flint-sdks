<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $issue_test_key
 * @property-read string $name
 * @property-read list<string> $scopes
 * @property-read string $test_key_name
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateSandboxRequestInput extends Model {
    /** @param array{'issue_test_key'?: bool, 'name': string, 'scopes'?: list<string>, 'test_key_name'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateSandboxRequestInput')); }
    /** @return bool
     * @throws SdkError When issue_test_key is omitted; use hasIssueTestKey() or valueOrDefault().
     */
    public function getIssueTestKey(): bool { return $this->get('issue_test_key'); }
    public function hasIssueTestKey(): bool { return $this->has('issue_test_key'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return list<string>
     * @throws SdkError When scopes is omitted; use hasScopes() or valueOrDefault().
     */
    public function getScopes(): array { return $this->get('scopes'); }
    public function hasScopes(): bool { return $this->has('scopes'); }
    /** @return string
     * @throws SdkError When test_key_name is omitted; use hasTestKeyName() or valueOrDefault().
     */
    public function getTestKeyName(): string { return $this->get('test_key_name'); }
    public function hasTestKeyName(): bool { return $this->has('test_key_name'); }
}
