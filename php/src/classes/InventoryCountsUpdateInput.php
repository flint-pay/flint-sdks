<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $inventory_count_id
 * @property-read array{'expected_version': int, 'external_actor_id'?: string, 'observations': list<mixed>, 'occurred_at'?: string|\DateTimeInterface, 'source_system'?: mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryCountsUpdateInput extends Model {
    /** @param array{'inventory_count_id': string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string, 'body': array{'expected_version': int, 'external_actor_id'?: string, 'observations': list<mixed>, 'occurred_at'?: string|\DateTimeInterface, 'source_system'?: mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryCountsUpdateInput')); }
    /** Flint inventory count ID. Example: "invc_01KEZF7C00B47NXRE3ET37QQ59".
     * @return string
     * @throws SdkError When inventory_count_id is omitted; use hasInventoryCountId() or valueOrDefault().
     */
    public function getInventoryCountId(): string { return $this->get('inventory_count_id'); }
    public function hasInventoryCountId(): bool { return $this->has('inventory_count_id'); }
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
    /** The request body for: Update inventory count. Example: {"expected_version":2,"observations":[{"counted_damaged_quantity":0,"counted_on_hand_quantity":12,"counted_quality_control_quantity":0,"counted_quarantined_quantity":0,"expected_physical_version":9,"inventory_item_id":"invi_01K0P7W6A4N9F3J2T8Q5R1C6XM"}],"source_system":{"type":"manual"}}.
     * @return array{'expected_version': int, 'external_actor_id'?: string, 'observations': list<mixed>, 'occurred_at'?: string|\DateTimeInterface, 'source_system'?: mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
