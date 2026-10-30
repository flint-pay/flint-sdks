<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $claim
 * @property-read string $match
 * @property-read string $value
 * Presence-aware response; omitted optional fields return null. */
final class WorkloadIdentityClaimCondition extends Model {
    /** @param array{'claim': string, 'match': string, 'value': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WorkloadIdentityClaimCondition')); }
    /** Literal top-level scalar claim name. Registered JWT claims are reserved.
     * @return string
     */
    public function getClaim(): string { return $this->get('claim'); }
    public function hasClaim(): bool { return $this->has('claim'); }
    /** Default: "exact". Value enum: "exact", "glob".
     * @return string
     */
    public function getMatch(): string { return $this->get('match'); }
    public function hasMatch(): bool { return $this->has('match'); }
    /** value
     * @return string
     */
    public function getValue(): string { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
