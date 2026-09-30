<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_types
 * @property-read string $combination_policy
 * @property-read array{'height': string, 'length': string, 'unit': string, 'width': string, ...}|object $dimensions
 * @property-read mixed $origin_policy
 * @property-read string $requirement
 * @property-read string $resolution_mode
 * @property-read string $splitting_policy
 * @property-read array{'unit': string, 'value': string, ...}|object $weight
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryProfileConfigurationRequestInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfileConfigurationRequestInput')); }
    /** @return list<string>
     * @throws SdkError When allowed_types is omitted; use hasAllowedTypes() or valueOrDefault().
     */
    public function getAllowedTypes(): array { return $this->get('allowed_types'); }
    public function hasAllowedTypes(): bool { return $this->has('allowed_types'); }
    /** @return string
     * @throws SdkError When combination_policy is omitted; use hasCombinationPolicy() or valueOrDefault().
     */
    public function getCombinationPolicy(): string { return $this->get('combination_policy'); }
    public function hasCombinationPolicy(): bool { return $this->has('combination_policy'); }
    /** @return array{'height': string, 'length': string, 'unit': string, 'width': string, ...}|object
     * @throws SdkError When dimensions is omitted; use hasDimensions() or valueOrDefault().
     */
    public function getDimensions(): array|object { return $this->get('dimensions'); }
    public function hasDimensions(): bool { return $this->has('dimensions'); }
    /** @return mixed
     * @throws SdkError When origin_policy is omitted; use hasOriginPolicy() or valueOrDefault().
     */
    public function getOriginPolicy(): mixed { return $this->get('origin_policy'); }
    public function hasOriginPolicy(): bool { return $this->has('origin_policy'); }
    /** @return string
     * @throws SdkError When requirement is omitted; use hasRequirement() or valueOrDefault().
     */
    public function getRequirement(): string { return $this->get('requirement'); }
    public function hasRequirement(): bool { return $this->has('requirement'); }
    /** @return string
     * @throws SdkError When resolution_mode is omitted; use hasResolutionMode() or valueOrDefault().
     */
    public function getResolutionMode(): string { return $this->get('resolution_mode'); }
    public function hasResolutionMode(): bool { return $this->has('resolution_mode'); }
    /** @return string
     * @throws SdkError When splitting_policy is omitted; use hasSplittingPolicy() or valueOrDefault().
     */
    public function getSplittingPolicy(): string { return $this->get('splitting_policy'); }
    public function hasSplittingPolicy(): bool { return $this->has('splitting_policy'); }
    /** @return array{'unit': string, 'value': string, ...}|object
     * @throws SdkError When weight is omitted; use hasWeight() or valueOrDefault().
     */
    public function getWeight(): array|object { return $this->get('weight'); }
    public function hasWeight(): bool { return $this->has('weight'); }
}
