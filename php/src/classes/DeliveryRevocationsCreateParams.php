<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $merchant_note
 * @property-read string $reason
 * @property-read CreateDeliveryRevocationTargetInput|array<array-key, mixed>|\stdClass $target
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRevocationsCreateParams extends Model {
    /** @param array{'merchant_note'?: string, 'reason': string, 'target': CreateDeliveryRevocationTargetInput|array<array-key, mixed>|\stdClass, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRevocationsCreateParams')); }
    /** Optional incident context retained with this revocation. minLength: 1. maxLength: 2048.
     * @return string
     * @throws SdkError When merchant_note is omitted; use hasMerchantNote() or valueOrDefault().
     */
    public function getMerchantNote(): string { return $this->get('merchant_note'); }
    public function hasMerchantNote(): bool { return $this->has('merchant_note'); }
    /** Why this dependency must no longer be used. Value enum: "unsafe_configuration", "location_unavailable", "credential_compromise", "legal_requirement", "other".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** The parent and exact child identity to fence. Each target_type accepts only its own IDs. The parent and exact child identity to fence. Targets never resolve an alias to a current revision.
     * @return CreateDeliveryRevocationTargetInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When target is omitted; use hasTarget() or valueOrDefault().
     */
    public function getTarget(): mixed { return $this->get('target'); }
    public function hasTarget(): bool { return $this->has('target'); }
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
