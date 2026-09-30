<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $approval_required
 * Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentSettingsInput extends Model {
    /** @param array{'approval_required'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentSettingsInput')); }
    /** @return bool
     * @throws SdkError When approval_required is omitted; use hasApprovalRequired() or valueOrDefault().
     */
    public function getApprovalRequired(): bool { return $this->get('approval_required'); }
    public function hasApprovalRequired(): bool { return $this->has('approval_required'); }
}
