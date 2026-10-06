<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $domain_type
 * Presence-aware input; omitted fields throw when accessed. */
final class SettingsValidateCustomDomainInput extends Model {
    /** @param array{'domain_type': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SettingsValidateCustomDomainInput')); }
    /** @return string
     * @throws SdkError When domain_type is omitted; use hasDomainType() or valueOrDefault().
     */
    public function getDomainType(): string { return $this->get('domain_type'); }
    public function hasDomainType(): bool { return $this->has('domain_type'); }
    /** @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** @return string
     * @throws SdkError When X-Request-Id is omitted; use hasXRequestId() or valueOrDefault().
     */
    public function getXRequestId(): string { return $this->get('X-Request-Id'); }
    public function hasXRequestId(): bool { return $this->has('X-Request-Id'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
}
