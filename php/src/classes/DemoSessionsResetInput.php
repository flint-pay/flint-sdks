<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'demo_session_id': string, 'template'?: string, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class DemoSessionsResetInput extends Model {
    /** @param array{'X-Turnstile-Token'?: string, 'Idempotency-Key'?: string, 'body': array{'demo_session_id': string, 'template'?: string, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DemoSessionsResetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When X-Turnstile-Token is omitted; use hasXTurnstileToken() or valueOrDefault().
     */
    public function getXTurnstileToken(): string { return $this->get('X-Turnstile-Token'); }
    public function hasXTurnstileToken(): bool { return $this->has('X-Turnstile-Token'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Reset demo session.
     * @return array{'demo_session_id': string, 'template'?: string, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
