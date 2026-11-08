<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $return_id
 * @property-read array{'correction_reason'?: string, 'correction_reason_message'?: string, 'external_actor_id'?: string, 'external_reference_id'?: string, 'line_items': list<mixed>, 'received_at': string|\DateTimeInterface, 'receiving_location_id': string, 'shipment_id'?: string, 'source_system'?: mixed, 'supersedes_return_receipt_id'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnsCreateReceiptInput extends Model {
    /** @param array{'return_id': string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string, 'body': array{'correction_reason'?: string, 'correction_reason_message'?: string, 'external_actor_id'?: string, 'external_reference_id'?: string, 'line_items': list<mixed>, 'received_at': string|\DateTimeInterface, 'receiving_location_id': string, 'shipment_id'?: string, 'source_system'?: mixed, 'supersedes_return_receipt_id'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnsCreateReceiptInput')); }
    /** Flint return id. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
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
    /** The request body for: Create return receipt. Example: {"line_items":[{"quantity":1,"return_line_item_id":"retli_01KEZF7C001NHF6JPD83VD0MRK","type":"matched"}],"received_at":"2026-09-08T14:00:00Z","receiving_location_id":"loc_01K1P6G4M7H2N8Q9R3S5T6V7WX","source_system":{"source_system_type":"manual"}}.
     * @return array{'correction_reason'?: string, 'correction_reason_message'?: string, 'external_actor_id'?: string, 'external_reference_id'?: string, 'line_items': list<mixed>, 'received_at': string|\DateTimeInterface, 'receiving_location_id': string, 'shipment_id'?: string, 'source_system'?: mixed, 'supersedes_return_receipt_id'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
