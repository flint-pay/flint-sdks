<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $sandbox_id
 * @property-read array{'country'?: string, 'profile'?: mixed, 'requested_capabilities'?: list<string>, 'sandbox_id'?: string, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class OnboardingAdvanceInput extends Model {
    /** @param array{'sandbox_id'?: string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'country'?: string, 'profile'?: mixed, 'requested_capabilities'?: list<string>, 'sandbox_id'?: string, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OnboardingAdvanceInput')); }
    /** @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
    /** @return array{'country'?: string, 'profile'?: mixed, 'requested_capabilities'?: list<string>, 'sandbox_id'?: string, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
