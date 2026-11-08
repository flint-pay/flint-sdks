<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CreateReturnEligibilityPreviewRequestInput|array<array-key, mixed>|\stdClass $eligibility
 * @property-read string $mode
 * @property-read CreateReturnResolutionPreviewRequestInput|array<array-key, mixed>|\stdClass $resolution
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnPreviewsCreateParams extends Model {
    /** @param array{'eligibility': CreateReturnEligibilityPreviewRequestInput|array<array-key, mixed>|\stdClass, 'mode': string, 'resolution'?: CreateReturnResolutionPreviewRequestInput|array<array-key, mixed>|\stdClass, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object|array{'eligibility'?: CreateReturnEligibilityPreviewRequestInput|array<array-key, mixed>|\stdClass, 'mode': string, 'resolution': CreateReturnResolutionPreviewRequestInput|array<array-key, mixed>|\stdClass, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPreviewsCreateParams')); }
    /** The eligibility check. Present when `mode` is `eligibility`. A request to preview which items of an order can be returned, given an order and a selection.
     * @return CreateReturnEligibilityPreviewRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When eligibility is omitted; use hasEligibility() or valueOrDefault().
     */
    public function getEligibility(): mixed { return $this->get('eligibility'); }
    public function hasEligibility(): bool { return $this->has('eligibility'); }
    /** Which preview to run. Value enum: "eligibility", "resolution".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** The priced resolution. Present when `mode` is `resolution`. A request to preview the amounts of a return resolution for a return, selected by `resolution_type`: refund, exchange, replacement, no monetary action, or correction.
     * @return CreateReturnResolutionPreviewRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When resolution is omitted; use hasResolution() or valueOrDefault().
     */
    public function getResolution(): mixed { return $this->get('resolution'); }
    public function hasResolution(): bool { return $this->has('resolution'); }
    /** Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Merchant-Id is omitted; use hasFlintMerchantId() or valueOrDefault().
     */
    public function getFlintMerchantId(): string { return $this->get('Flint-Merchant-Id'); }
    public function hasFlintMerchantId(): bool { return $this->has('Flint-Merchant-Id'); }
    /** Mode of the request context, live or test. Optional; it must match the credential's mode. Value enum: "test", "live".
     * @return string
     * @throws SdkError When Flint-Mode is omitted; use hasFlintMode() or valueOrDefault().
     */
    public function getFlintMode(): string { return $this->get('Flint-Mode'); }
    public function hasFlintMode(): bool { return $this->has('Flint-Mode'); }
    /** Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Sandbox-Id is omitted; use hasFlintSandboxId() or valueOrDefault().
     */
    public function getFlintSandboxId(): string { return $this->get('Flint-Sandbox-Id'); }
    public function hasFlintSandboxId(): bool { return $this->has('Flint-Sandbox-Id'); }
}
