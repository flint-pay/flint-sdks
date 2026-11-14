<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $bundle_id
 * @property-read int $expected_subscription_version
 * @property-read int $quantity
 * @property-read string $type
 * @property-read string $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionsCreateLineItemParams extends Model {
    /** @param array{'bundle_id'?: string, 'expected_subscription_version'?: int, 'quantity': int, 'type': string, 'variant_id': string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object|array{'bundle_id': string, 'expected_subscription_version'?: int, 'quantity': int, 'type': string, 'variant_id'?: string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionsCreateLineItemParams')); }
    /** minLength: 1. pattern: ^bun_[0-9A-HJKMNP-TV-Z]{26}$. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     * @return string
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Subscription version last read. A stale version returns VERSION_CONFLICT. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_subscription_version is omitted; use hasExpectedSubscriptionVersion() or valueOrDefault().
     */
    public function getExpectedSubscriptionVersion(): int { return $this->get('expected_subscription_version'); }
    public function hasExpectedSubscriptionVersion(): bool { return $this->has('expected_subscription_version'); }
    /** Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 9999.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** The catalog source of the new line: variant or bundle. Value enum: "variant", "bundle".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
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
