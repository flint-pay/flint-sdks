<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $demo_session_id
 * @property-read array{'template'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class DemoSessionsResetInput extends Model {
    /** @param array{'demo_session_id': string, 'Flint-Challenge-Token': string, 'Idempotency-Key'?: string, 'body': array{'template'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DemoSessionsResetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When demo_session_id is omitted; use hasDemoSessionId() or valueOrDefault().
     */
    public function getDemoSessionId(): string { return $this->get('demo_session_id'); }
    public function hasDemoSessionId(): bool { return $this->has('demo_session_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When Flint-Challenge-Token is omitted; use hasFlintChallengeToken() or valueOrDefault().
     */
    public function getFlintChallengeToken(): string { return $this->get('Flint-Challenge-Token'); }
    public function hasFlintChallengeToken(): bool { return $this->has('Flint-Challenge-Token'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Reset demo session.
     * @return array{'template'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
