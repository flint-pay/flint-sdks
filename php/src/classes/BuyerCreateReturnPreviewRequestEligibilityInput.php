<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CreateReturnEligibilityPreviewRequestInput|array<array-key, mixed>|\stdClass $eligibility
 * @property-read string $mode
 * @property-read BuyerCreateReturnResolutionPreviewRequestInput|array<array-key, mixed>|\stdClass $resolution
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerCreateReturnPreviewRequestEligibilityInput extends Model {
    /** @param array{'eligibility': CreateReturnEligibilityPreviewRequestInput|array<array-key, mixed>|\stdClass, 'mode': string, 'resolution'?: BuyerCreateReturnResolutionPreviewRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerCreateReturnPreviewRequestEligibilityInput')); }
    /** A request to preview which items of an order can be returned, given an order and a selection.
     * @return CreateReturnEligibilityPreviewRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When eligibility is omitted; use hasEligibility() or valueOrDefault().
     */
    public function getEligibility(): mixed { return $this->get('eligibility'); }
    public function hasEligibility(): bool { return $this->has('eligibility'); }
    /** Value enum: "eligibility".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** The buyer's proposed resolution type, returned quantities, and replacement items to preview for a Return.
     * @return BuyerCreateReturnResolutionPreviewRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When resolution is omitted; use hasResolution() or valueOrDefault().
     */
    public function getResolution(): mixed { return $this->get('resolution'); }
    public function hasResolution(): bool { return $this->has('resolution'); }
}
