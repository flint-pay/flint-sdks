<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $due_at
 * @property-read bool $is_available
 * @property-read bool $is_required
 * @property-read string $kind
 * @property-read string $unavailable_reason
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerActionInput extends Model {
    /** @param array{'due_at'?: string|\DateTimeInterface, 'is_available': bool, 'is_required': bool, 'kind': string, 'unavailable_reason'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerActionInput')); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When due_at is omitted; use hasDueAt() or valueOrDefault().
     */
    public function getDueAt(): string|\DateTimeInterface { return $this->get('due_at'); }
    public function hasDueAt(): bool { return $this->has('due_at'); }
    /** @return bool
     * @throws SdkError When is_available is omitted; use hasIsAvailable() or valueOrDefault().
     */
    public function getIsAvailable(): bool { return $this->get('is_available'); }
    public function hasIsAvailable(): bool { return $this->has('is_available'); }
    /** @return bool
     * @throws SdkError When is_required is omitted; use hasIsRequired() or valueOrDefault().
     */
    public function getIsRequired(): bool { return $this->get('is_required'); }
    public function hasIsRequired(): bool { return $this->has('is_required'); }
    /** @return string
     * @throws SdkError When kind is omitted; use hasKind() or valueOrDefault().
     */
    public function getKind(): string { return $this->get('kind'); }
    public function hasKind(): bool { return $this->has('kind'); }
    /** @return string
     * @throws SdkError When unavailable_reason is omitted; use hasUnavailableReason() or valueOrDefault().
     */
    public function getUnavailableReason(): string { return $this->get('unavailable_reason'); }
    public function hasUnavailableReason(): bool { return $this->has('unavailable_reason'); }
}
