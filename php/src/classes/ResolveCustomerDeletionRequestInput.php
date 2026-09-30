<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $decision
 * Presence-aware input; omitted fields throw when accessed. */
final class ResolveCustomerDeletionRequestInput extends Model {
    /** @param array{'decision': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ResolveCustomerDeletionRequestInput')); }
    /** @return string
     * @throws SdkError When decision is omitted; use hasDecision() or valueOrDefault().
     */
    public function getDecision(): string { return $this->get('decision'); }
    public function hasDecision(): bool { return $this->has('decision'); }
}
