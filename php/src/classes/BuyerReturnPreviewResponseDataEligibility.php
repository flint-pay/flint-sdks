<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BuyerReturnPreviewResponseDataEligibilityEligibility $eligibility
 * @property-read string $mode
 * @property-read ?BuyerReturnPreviewResponseDataEligibilityResolution $resolution
 * Presence-aware response; omitted optional fields return null. */
final class BuyerReturnPreviewResponseDataEligibility extends Model {
    /** @param array{'eligibility': mixed, 'mode': string, 'resolution'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerReturnPreviewResponseDataEligibility')); }
    /** The buyer's Return eligibility preview for an order, including eligible items and policy evaluation results.
     * @return BuyerReturnPreviewResponseDataEligibilityEligibility
     */
    public function getEligibility(): BuyerReturnPreviewResponseDataEligibilityEligibility { return $this->get('eligibility'); }
    public function hasEligibility(): bool { return $this->has('eligibility'); }
    /** Value enum: "eligibility".
     * @return string
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** The buyer's preview of a Return resolution, including returned items, replacements, adjustments, and the amounts to refund or collect.
     * @return ?BuyerReturnPreviewResponseDataEligibilityResolution
     */
    public function getResolution(): ?BuyerReturnPreviewResponseDataEligibilityResolution { return $this->get('resolution'); }
    public function hasResolution(): bool { return $this->has('resolution'); }
}
