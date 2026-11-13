<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'customer_id'?: string, 'device_id'?: string, 'digital_details'?: mixed, 'external_reference_id'?: string, 'line_items': list<mixed>, 'local_delivery_details'?: mixed, 'location_id'?: string, 'metadata'?: mixed, 'order_id': string, 'pickup_details'?: mixed, 'recipient'?: mixed, 'service_details'?: mixed, 'shipment'?: mixed, 'type': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentsCreateInput extends Model {
    /** @param array{'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string, 'body': array{'customer_id'?: string, 'device_id'?: string, 'digital_details'?: mixed, 'external_reference_id'?: string, 'line_items': list<mixed>, 'local_delivery_details'?: mixed, 'location_id'?: string, 'metadata'?: mixed, 'order_id': string, 'pickup_details'?: mixed, 'recipient'?: mixed, 'service_details'?: mixed, 'shipment'?: mixed, 'type': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentsCreateInput')); }
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
    /** Provide at most one fulfillment details object: pickup_details, local_delivery_details, digital_details, or service_details. Shipment execution details belong to shipments and packages. Example: {"line_items":[{"bundle_component_id":null,"order_line_item_id":"li_01KEZF7C004XP0V220YVMGQ354","quantity":1}],"metadata":{"source":"dispatch"},"order_id":"ord_01KEZF7C006M16GC2D8HRRC30T","shipment":{"package":{"carrier":"ups","status":"created","tracking_number":"1Z999AA10123456784"},"packaging":"single_package"},"type":"shipment"}.
     * @return array{'customer_id'?: string, 'device_id'?: string, 'digital_details'?: mixed, 'external_reference_id'?: string, 'line_items': list<mixed>, 'local_delivery_details'?: mixed, 'location_id'?: string, 'metadata'?: mixed, 'order_id': string, 'pickup_details'?: mixed, 'recipient'?: mixed, 'service_details'?: mixed, 'shipment'?: mixed, 'type': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
