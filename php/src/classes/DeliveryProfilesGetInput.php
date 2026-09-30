<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_profile_id
 * @property-read bool $include_diagnostics
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryProfilesGetInput extends Model {
    /** @param array{'delivery_profile_id': string, 'include_diagnostics'?: bool, 'Flint-Version'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfilesGetInput')); }
    /** @return string
     * @throws SdkError When delivery_profile_id is omitted; use hasDeliveryProfileId() or valueOrDefault().
     */
    public function getDeliveryProfileId(): string { return $this->get('delivery_profile_id'); }
    public function hasDeliveryProfileId(): bool { return $this->has('delivery_profile_id'); }
    /** @return bool
     * @throws SdkError When include_diagnostics is omitted; use hasIncludeDiagnostics() or valueOrDefault().
     */
    public function getIncludeDiagnostics(): bool { return $this->get('include_diagnostics'); }
    public function hasIncludeDiagnostics(): bool { return $this->has('include_diagnostics'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
}
