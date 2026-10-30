<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $webhook_delivery_id
 * @property-read int $page_size
 * @property-read string $page_token
 * Presence-aware input; omitted fields throw when accessed. */
final class WebhookDeliveriesListAttemptsInput extends Model {
    /** @param array{'webhook_delivery_id': string, 'page_size'?: int, 'page_token'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookDeliveriesListAttemptsInput')); }
    /** Flint webhook delivery ID. Example: "wdel_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When webhook_delivery_id is omitted; use hasWebhookDeliveryId() or valueOrDefault().
     */
    public function getWebhookDeliveryId(): string { return $this->get('webhook_delivery_id'); }
    public function hasWebhookDeliveryId(): bool { return $this->has('webhook_delivery_id'); }
    /** Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum: 100. Default: 20.
     * @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error.
     * @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
}
