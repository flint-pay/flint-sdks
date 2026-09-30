<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_types
 * @property-read string $combination_policy
 * @property-read LineItemFulfillmentSizeRequestInput|array<array-key, mixed>|\stdClass $dimensions
 * @property-read LineItemFulfillmentOriginRequestInput|array<array-key, mixed>|\stdClass $origin_policy
 * @property-read string $requirement
 * @property-read string $resolution_mode
 * @property-read string $splitting_policy
 * @property-read LineItemFulfillmentWeightRequestInput|array<array-key, mixed>|\stdClass $weight
 * Presence-aware input; omitted fields throw when accessed. */
final class LineItemFulfillmentRequestInput extends Model {
    /** @param array{'allowed_types'?: list<string>, 'combination_policy'?: string, 'dimensions'?: LineItemFulfillmentSizeRequestInput|array<array-key, mixed>|\stdClass, 'origin_policy'?: LineItemFulfillmentOriginRequestInput|array<array-key, mixed>|\stdClass, 'requirement': string, 'resolution_mode'?: string, 'splitting_policy'?: string, 'weight'?: LineItemFulfillmentWeightRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LineItemFulfillmentRequestInput')); }
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
    /** @return LineItemFulfillmentSizeRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When dimensions is omitted; use hasDimensions() or valueOrDefault().
     */
    public function getDimensions(): mixed { return $this->get('dimensions'); }
    public function hasDimensions(): bool { return $this->has('dimensions'); }
    /** @return LineItemFulfillmentOriginRequestInput|array<array-key, mixed>|\stdClass
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
    /** @return LineItemFulfillmentWeightRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When weight is omitted; use hasWeight() or valueOrDefault().
     */
    public function getWeight(): mixed { return $this->get('weight'); }
    public function hasWeight(): bool { return $this->has('weight'); }
}
