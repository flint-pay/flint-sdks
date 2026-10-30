<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DemoSessionAPIKey $api_key
 * @property-read string $demo_session_id
 * @property-read string $expires_at
 * @property-read string $sandbox_id
 * Presence-aware response; omitted optional fields return null. */
final class DemoSession extends Model {
    /** @param array{'api_key': mixed, 'demo_session_id': string, 'expires_at': string, 'sandbox_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DemoSession')); }
    /** The API key issued for a demo session, with its `secret_key` and the scopes it grants.
     * @return DemoSessionAPIKey
     */
    public function getApiKey(): DemoSessionAPIKey { return $this->get('api_key'); }
    public function hasApiKey(): bool { return $this->has('api_key'); }
    /** demo_session_id
     * @return string
     */
    public function getDemoSessionId(): string { return $this->get('demo_session_id'); }
    public function hasDemoSessionId(): bool { return $this->has('demo_session_id'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** sandbox_id
     * @return string
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
}
