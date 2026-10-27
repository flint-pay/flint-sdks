<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $collection_strategy
 * @property-read string $future_requirements
 * @property-read string $targeting
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantAccountSessionEffectivePolicyInput extends Model {
    /** @param array{'collection_strategy'?: string, 'future_requirements'?: string, 'targeting': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionEffectivePolicyInput')); }
    /** Shape $ (Value): string.  Value enum: "upfront", "incremental".
     * @return string
     * @throws SdkError When collection_strategy is omitted; use hasCollectionStrategy() or valueOrDefault().
     */
    public function getCollectionStrategy(): string { return $this->get('collection_strategy'); }
    public function hasCollectionStrategy(): bool { return $this->has('collection_strategy'); }
    /** Shape $ (Value): string.  Value enum: "omit", "include".
     * @return string
     * @throws SdkError When future_requirements is omitted; use hasFutureRequirements() or valueOrDefault().
     */
    public function getFutureRequirements(): string { return $this->get('future_requirements'); }
    public function hasFutureRequirements(): bool { return $this->has('future_requirements'); }
    /** Shape $ (Value): string.  Value enum: "none", "all", "all_due", "targeted".
     * @return string
     * @throws SdkError When targeting is omitted; use hasTargeting() or valueOrDefault().
     */
    public function getTargeting(): string { return $this->get('targeting'); }
    public function hasTargeting(): bool { return $this->has('targeting'); }
}
