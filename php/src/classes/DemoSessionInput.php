<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DemoSessionAPIKeyInput|array<array-key, mixed>|\stdClass $api_key
 * @property-read string $demo_session_id
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read string $sandbox_id
 * Presence-aware input; omitted fields throw when accessed. */
final class DemoSessionInput extends Model {
    /** @param array{'api_key': DemoSessionAPIKeyInput|array<array-key, mixed>|\stdClass, 'demo_session_id': string, 'expires_at': string|\DateTimeInterface, 'sandbox_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DemoSessionInput')); }
    /** The API key issued for a demo session, with its `secret_key` and the scopes it grants.
     * @return DemoSessionAPIKeyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When api_key is omitted; use hasApiKey() or valueOrDefault().
     */
    public function getApiKey(): mixed { return $this->get('api_key'); }
    public function hasApiKey(): bool { return $this->has('api_key'); }
    /** demo_session_id
     * @return string
     * @throws SdkError When demo_session_id is omitted; use hasDemoSessionId() or valueOrDefault().
     */
    public function getDemoSessionId(): string { return $this->get('demo_session_id'); }
    public function hasDemoSessionId(): bool { return $this->has('demo_session_id'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** sandbox_id
     * @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
}
