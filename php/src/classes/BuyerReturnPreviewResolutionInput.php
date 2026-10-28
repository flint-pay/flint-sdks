<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BuyerReturnEligibilityPreviewInput|array<array-key, mixed>|\stdClass $eligibility
 * @property-read string $mode
 * @property-read BuyerReturnResolutionPreviewInput|array<array-key, mixed>|\stdClass $resolution
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerReturnPreviewResolutionInput extends Model {
    /** @param array{'eligibility'?: BuyerReturnEligibilityPreviewInput|array<array-key, mixed>|\stdClass, 'mode': string, 'resolution': BuyerReturnResolutionPreviewInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerReturnPreviewResolutionInput')); }
    /** Shape $ (Value): {@see BuyerReturnEligibilityPreviewInput}. The buyer's Return eligibility preview for an order, including eligible items and policy evaluation results.
     * @return BuyerReturnEligibilityPreviewInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When eligibility is omitted; use hasEligibility() or valueOrDefault().
     */
    public function getEligibility(): mixed { return $this->get('eligibility'); }
    public function hasEligibility(): bool { return $this->has('eligibility'); }
    /** Shape $ (Value): string.  Value enum: "resolution".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Shape $ (Value): {@see BuyerReturnResolutionPreviewInput}. The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect.
     * @return BuyerReturnResolutionPreviewInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When resolution is omitted; use hasResolution() or valueOrDefault().
     */
    public function getResolution(): mixed { return $this->get('resolution'); }
    public function hasResolution(): bool { return $this->has('resolution'); }
}
