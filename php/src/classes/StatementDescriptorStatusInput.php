<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $reason
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class StatementDescriptorStatusInput extends Model {
    /** @param array{'reason': string|null, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('StatementDescriptorStatusInput')); }
    /** Stripe's refusal reason in plain language. Null when status is accepted or pending.
     * @return string|null
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string|null { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** accepted when Stripe has no outstanding descriptor requirement, rejected when Stripe reports a refusal, or pending while a change or review is unresolved. Value enum: "accepted", "rejected", "pending".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
