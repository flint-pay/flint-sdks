<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?BuyerReturnEligibilityPreview $eligibility
 * @property-read string $mode
 * @property-read BuyerReturnResolutionPreview $resolution
 * Presence-aware response; omitted optional fields return null. */
final class MeCreateReturnPreviewResponse200DataResolution extends Model {
    /** @param array{'eligibility'?: mixed, 'mode': string, 'resolution': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCreateReturnPreviewResponse200DataResolution')); }
    /** Shape $ (Value): {@see BuyerReturnEligibilityPreview}. The buyer's Return eligibility preview for an order, including eligible items and policy evaluation results.
     * @return ?BuyerReturnEligibilityPreview
     */
    public function getEligibility(): ?BuyerReturnEligibilityPreview { return $this->get('eligibility'); }
    public function hasEligibility(): bool { return $this->has('eligibility'); }
    /** Shape $ (Value): string.  Value enum: "resolution".
     * @return string
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Shape $ (Value): {@see BuyerReturnResolutionPreview}. The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect.
     * @return BuyerReturnResolutionPreview
     */
    public function getResolution(): BuyerReturnResolutionPreview { return $this->get('resolution'); }
    public function hasResolution(): bool { return $this->has('resolution'); }
}
