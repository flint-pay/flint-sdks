<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $order_id
 * @property-read string $order_charge_id
 * @property-read array{'amount_money'?: mixed, 'calculation_basis'?: string, 'description'?: string|null, 'expected_version'?: int, 'fulfillment_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'percent'?: int|float, 'tax'?: mixed, 'type'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class OrdersUpdateChargeInput extends Model {
    /** @param array{'order_id': string, 'order_charge_id': string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string, 'body': array{'amount_money'?: mixed, 'calculation_basis'?: string, 'description'?: string|null, 'expected_version'?: int, 'fulfillment_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'percent'?: int|float, 'tax'?: mixed, 'type'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersUpdateChargeInput')); }
    /** Flint order ID. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Flint order charge ID. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT".
     * @return string
     * @throws SdkError When order_charge_id is omitted; use hasOrderChargeId() or valueOrDefault().
     */
    public function getOrderChargeId(): string { return $this->get('order_charge_id'); }
    public function hasOrderChargeId(): bool { return $this->has('order_charge_id'); }
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
    /** The request body for: Update order charge.
     * @return array{'amount_money'?: mixed, 'calculation_basis'?: string, 'description'?: string|null, 'expected_version'?: int, 'fulfillment_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'percent'?: int|float, 'tax'?: mixed, 'type'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
