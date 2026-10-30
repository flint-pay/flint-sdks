<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $reason_message
 * @property-read string $webhook_endpoint_id
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class WebhookDeliveriesCreateParams extends Model {
    /** @param array{'reason_message'?: string, 'webhook_endpoint_id': string, 'webhook_event_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookDeliveriesCreateParams')); }
    /** Your note explaining this action. minLength: 1. maxLength: 500.
     * @return string
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** Active endpoint that currently subscribes to the event. minLength: 1. Example: "whep_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When webhook_endpoint_id is omitted; use hasWebhookEndpointId() or valueOrDefault().
     */
    public function getWebhookEndpointId(): string { return $this->get('webhook_endpoint_id'); }
    public function hasWebhookEndpointId(): bool { return $this->has('webhook_endpoint_id'); }
    /** Retained webhook event to deliver. minLength: 1. Example: "whev_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
