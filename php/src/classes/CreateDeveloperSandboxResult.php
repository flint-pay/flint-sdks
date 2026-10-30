<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?APIKey $api_key
 * @property-read Sandbox $sandbox
 * @property-read ?string $secret_key
 * Presence-aware response; omitted optional fields return null. */
final class CreateDeveloperSandboxResult extends Model {
    /** @param array{'api_key'?: mixed, 'sandbox': mixed, 'secret_key'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateDeveloperSandboxResult')); }
    /** The newly issued test API key. Present exactly when issue_test_key is true. A credential used to authenticate API requests.
     * @return ?APIKey
     */
    public function getApiKey(): ?APIKey { return $this->get('api_key'); }
    public function hasApiKey(): bool { return $this->has('api_key'); }
    /** An isolated environment for testing an integration.
     * @return Sandbox
     */
    public function getSandbox(): Sandbox { return $this->get('sandbox'); }
    public function hasSandbox(): bool { return $this->has('sandbox'); }
    /** The one-time secret for api_key. Present exactly when issue_test_key is true.
     * @return ?string
     */
    public function getSecretKey(): ?string { return $this->get('secret_key'); }
    public function hasSecretKey(): bool { return $this->has('secret_key'); }
}
