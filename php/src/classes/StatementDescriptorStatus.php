<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $reason
 * @property-read string $status
 * Presence-aware response; omitted optional fields return null. */
final class StatementDescriptorStatus extends Model {
    /** @param array{'reason': string|null, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('StatementDescriptorStatus')); }
    /** Stripe's refusal reason in plain language. `null` when status is accepted or pending.
     * @return string|null
     */
    public function getReason(): string|null { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** accepted when Stripe has no outstanding descriptor requirement, rejected when Stripe reports a refusal, or pending while a change or review is unresolved. Value enum: "accepted", "rejected", "pending".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
