<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?bool $approval_required
 * Presence-aware response; omitted optional fields return null. */
final class FulfillmentSettings extends Model {
    /** @param array{'approval_required'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentSettings')); }
    /** approval_required
     * @return ?bool
     */
    public function getApprovalRequired(): ?bool { return $this->get('approval_required'); }
    public function hasApprovalRequired(): bool { return $this->has('approval_required'); }
}
