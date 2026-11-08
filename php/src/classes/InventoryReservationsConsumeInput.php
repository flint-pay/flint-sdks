<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $inventory_reservation_id
 * @property-read array{'expected_version'?: int, 'lines': list<array{'inventory_reservation_line_id': string, 'target_consumed_quantity': int}|object>, 'provenance'?: mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryReservationsConsumeInput extends Model {
    /** @param array{'inventory_reservation_id': string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string, 'body': array{'expected_version'?: int, 'lines': list<array{'inventory_reservation_line_id': string, 'target_consumed_quantity': int}|object>, 'provenance'?: mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationsConsumeInput')); }
    /** Flint inventory reservation ID. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * @return string
     * @throws SdkError When inventory_reservation_id is omitted; use hasInventoryReservationId() or valueOrDefault().
     */
    public function getInventoryReservationId(): string { return $this->get('inventory_reservation_id'); }
    public function hasInventoryReservationId(): bool { return $this->has('inventory_reservation_id'); }
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
    /** Consumes committed quantity when you hand the goods off, removing it from on-hand stock. Accepts provenance describing the handoff. Example: {"expected_version":4,"lines":[{"inventory_reservation_line_id":"invrln_01K0P7W6A4N9F3J2T8Q5R1C6XM","target_consumed_quantity":2}],"provenance":{"source_system":{"type":"manual"}}}.
     * @return array{'expected_version'?: int, 'lines': list<array{'inventory_reservation_line_id': string, 'target_consumed_quantity': int}|object>, 'provenance'?: mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
