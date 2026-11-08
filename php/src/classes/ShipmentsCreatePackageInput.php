<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $shipment_id
 * @property-read array{'buyer_notification_behavior'?: string, 'carrier'?: string, 'dimensions'?: mixed, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'external_reference_id'?: string, 'external_system'?: string, 'items'?: list<mixed>, 'label_url'?: string, 'metadata'?: mixed, 'return_line_items'?: list<mixed>, 'service_code'?: string, 'shipped_at'?: string|\DateTimeInterface, 'status': string, 'status_reason'?: string, 'tracking_number'?: string, 'tracking_url'?: string, 'weight'?: mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ShipmentsCreatePackageInput extends Model {
    /** @param array{'shipment_id': string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string, 'body': array{'buyer_notification_behavior'?: string, 'carrier'?: string, 'dimensions'?: mixed, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'external_reference_id'?: string, 'external_system'?: string, 'items'?: list<mixed>, 'label_url'?: string, 'metadata'?: mixed, 'return_line_items'?: list<mixed>, 'service_code'?: string, 'shipped_at'?: string|\DateTimeInterface, 'status': string, 'status_reason'?: string, 'tracking_number'?: string, 'tracking_url'?: string, 'weight'?: mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShipmentsCreatePackageInput')); }
    /** Flint shipment ID. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     * @return string
     * @throws SdkError When shipment_id is omitted; use hasShipmentId() or valueOrDefault().
     */
    public function getShipmentId(): string { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
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
    /** The request body for: Create package. Example: {"carrier":"ups","dimensions":{"height":4,"length":8,"unit":"inch","width":6},"expected_delivery_at":"2026-05-15T18:00:00Z","external_reference_id":"pkg_789","external_system":"merchant_wms","metadata":{"box":"small"},"service_code":"ground","status":"shipped","tracking_number":"1Z999AA10123456784","tracking_url":"https://track.example.com/1Z999AA10123456784","weight":{"unit":"pound","value":1.2}}.
     * @return array{'buyer_notification_behavior'?: string, 'carrier'?: string, 'dimensions'?: mixed, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'external_reference_id'?: string, 'external_system'?: string, 'items'?: list<mixed>, 'label_url'?: string, 'metadata'?: mixed, 'return_line_items'?: list<mixed>, 'service_code'?: string, 'shipped_at'?: string|\DateTimeInterface, 'status': string, 'status_reason'?: string, 'tracking_number'?: string, 'tracking_url'?: string, 'weight'?: mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
