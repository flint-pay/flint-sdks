<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'customer_id'?: string, 'environment_grant_id': string, 'environment_id'?: string, 'merchant_id': string, 'mode': string, 'order_id': string, 'order_number'?: string, 'partner_app_install_id': string, 'payment_status': string, 'refund_status': string, 'resource_updated_at': string|\DateTimeInterface, 'source_type': mixed, 'status': string}|object $data
 * @property-read string $event_type
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $partner_app_id
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class Webhook_order_updated_installed_merchantsInput extends Model {
    /** @param array{'data': array{'customer_id'?: string, 'environment_grant_id': string, 'environment_id'?: string, 'merchant_id': string, 'mode': string, 'order_id': string, 'order_number'?: string, 'partner_app_install_id': string, 'payment_status': string, 'refund_status': string, 'resource_updated_at': string|\DateTimeInterface, 'source_type': mixed, 'status': string}|object, 'event_type': string, 'api_version': string, 'created_at': string|\DateTimeInterface, 'partner_app_id': string, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Webhook_order_updated_installed_merchantsInput')); }
    /** @return array{'customer_id'?: string, 'environment_grant_id': string, 'environment_id'?: string, 'merchant_id': string, 'mode': string, 'order_id': string, 'order_number'?: string, 'partner_app_install_id': string, 'payment_status': string, 'refund_status': string, 'resource_updated_at': string|\DateTimeInterface, 'source_type': mixed, 'status': string}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
