<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $claim
 * @property-read string $match
 * @property-read string $value
 * Presence-aware input; omitted fields throw when accessed. */
final class WorkloadIdentityClaimConditionRequestInput extends Model {
    /** @param array{'claim': string, 'match'?: string, 'value': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WorkloadIdentityClaimConditionRequestInput')); }
    /** Literal top-level scalar claim name. Registered JWT claims are reserved. minLength: 1.
     * @return string
     * @throws SdkError When claim is omitted; use hasClaim() or valueOrDefault().
     */
    public function getClaim(): string { return $this->get('claim'); }
    public function hasClaim(): bool { return $this->has('claim'); }
    /** How `value` is compared with the claim. Defaults to exact. Default: "exact". Value enum: "exact", "glob".
     * @return string
     * @throws SdkError When match is omitted; use hasMatch() or valueOrDefault().
     */
    public function getMatch(): string { return $this->get('match'); }
    public function hasMatch(): bool { return $this->has('match'); }
    /** The value the claim must have, not empty. Strings compare as sent, booleans as `true` or `false`, and numbers as canonical decimal text. A claim that is missing, `null`, an array, or an object never matches. minLength: 1.
     * @return string
     * @throws SdkError When value is omitted; use hasValue() or valueOrDefault().
     */
    public function getValue(): string { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
