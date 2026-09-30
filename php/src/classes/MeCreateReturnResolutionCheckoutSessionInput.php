<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $resolution_id
 * Presence-aware input; omitted fields throw when accessed. */
final class MeCreateReturnResolutionCheckoutSessionInput extends Model {
    /** @param array{'resolution_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCreateReturnResolutionCheckoutSessionInput')); }
    /** @return string
     * @throws SdkError When resolution_id is omitted; use hasResolutionId() or valueOrDefault().
     */
    public function getResolutionId(): string { return $this->get('resolution_id'); }
    public function hasResolutionId(): bool { return $this->has('resolution_id'); }
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
}
