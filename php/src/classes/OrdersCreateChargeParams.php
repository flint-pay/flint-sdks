<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderChargeRequestInput|array<array-key, mixed>|\stdClass $charge
 * @property-read int $expected_order_version
 * Presence-aware input; omitted fields throw when accessed. */
final class OrdersCreateChargeParams extends Model {
    /** @param array{'charge': OrderChargeRequestInput|array<array-key, mixed>|\stdClass, 'expected_order_version'?: int, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersCreateChargeParams')); }
    /** The charge to add. A charge you add to an order, such as a delivery or service fee, set as a fixed amount or a percentage with its tax settings.
     * @return OrderChargeRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When charge is omitted; use hasCharge() or valueOrDefault().
     */
    public function getCharge(): mixed { return $this->get('charge'); }
    public function hasCharge(): bool { return $this->has('charge'); }
    /** Optional order version from the last order read. The mutation fails if the order changed. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_order_version is omitted; use hasExpectedOrderVersion() or valueOrDefault().
     */
    public function getExpectedOrderVersion(): int { return $this->get('expected_order_version'); }
    public function hasExpectedOrderVersion(): bool { return $this->has('expected_order_version'); }
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
