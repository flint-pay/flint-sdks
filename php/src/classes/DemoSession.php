<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DemoSessionAPIKey $api_key
 * @property-read string $demo_session_id
 * @property-read string $expires_at
 * @property-read string $sandbox_id
 * Presence-aware response; omitted fields throw when accessed. */
final class DemoSession extends Model {
    /** @param array{'api_key': mixed, 'demo_session_id': string, 'expires_at': string, 'sandbox_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DemoSession')); }
    /** @return DemoSessionAPIKey
     * @throws SdkError When api_key is omitted; use hasApiKey() or valueOrDefault().
     */
    public function getApiKey(): DemoSessionAPIKey { return $this->get('api_key'); }
    public function hasApiKey(): bool { return $this->has('api_key'); }
    /** @return string
     * @throws SdkError When demo_session_id is omitted; use hasDemoSessionId() or valueOrDefault().
     */
    public function getDemoSessionId(): string { return $this->get('demo_session_id'); }
    public function hasDemoSessionId(): bool { return $this->has('demo_session_id'); }
    /** @return string
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
}
