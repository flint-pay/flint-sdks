<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $webhook_delivery_id
 * @property-read array{'reason_message'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class WebhookDeliveriesResendInput extends Model {
    /** @param array{'webhook_delivery_id': string, 'body'?: array{'reason_message'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookDeliveriesResendInput')); }
    /** Flint webhook delivery ID. Example: "wdel_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When webhook_delivery_id is omitted; use hasWebhookDeliveryId() or valueOrDefault().
     */
    public function getWebhookDeliveryId(): string { return $this->get('webhook_delivery_id'); }
    public function hasWebhookDeliveryId(): bool { return $this->has('webhook_delivery_id'); }
    /** The request body for: Resend webhook delivery. Example: {"reason_message":"Endpoint was fixed after returning 500s."}.
     * @return array{'reason_message'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
