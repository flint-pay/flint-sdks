<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_id
 * Presence-aware response; omitted fields throw when accessed. */
final class WebhookEventOrderInventoryActionRequiredData extends Model {
    /** @param array{'order_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventOrderInventoryActionRequiredData')); }
    /** @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
}
