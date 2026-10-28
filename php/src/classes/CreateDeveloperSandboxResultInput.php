<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read APIKeyInput|array<array-key, mixed>|\stdClass $api_key
 * @property-read SandboxInput|array<array-key, mixed>|\stdClass $sandbox
 * @property-read string $secret_key
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateDeveloperSandboxResultInput extends Model {
    /** @param array{'api_key'?: APIKeyInput|array<array-key, mixed>|\stdClass, 'sandbox': SandboxInput|array<array-key, mixed>|\stdClass, 'secret_key'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateDeveloperSandboxResultInput')); }
    /** Shape $ (Value): {@see APIKeyInput}. The newly issued test API key. Present exactly when issue_test_key is true. A credential used to authenticate API requests.
     * @return APIKeyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When api_key is omitted; use hasApiKey() or valueOrDefault().
     */
    public function getApiKey(): mixed { return $this->get('api_key'); }
    public function hasApiKey(): bool { return $this->has('api_key'); }
    /** Shape $ (Value): {@see SandboxInput}. An isolated environment for testing an integration.
     * @return SandboxInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When sandbox is omitted; use hasSandbox() or valueOrDefault().
     */
    public function getSandbox(): mixed { return $this->get('sandbox'); }
    public function hasSandbox(): bool { return $this->has('sandbox'); }
    /** Shape $ (Value): string. The one-time secret for api_key. Present exactly when issue_test_key is true.
     * @return string
     * @throws SdkError When secret_key is omitted; use hasSecretKey() or valueOrDefault().
     */
    public function getSecretKey(): string { return $this->get('secret_key'); }
    public function hasSecretKey(): bool { return $this->has('secret_key'); }
}
