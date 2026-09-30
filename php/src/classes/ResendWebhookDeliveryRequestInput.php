<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $reason
 * Presence-aware input; omitted fields throw when accessed. */
final class ResendWebhookDeliveryRequestInput extends Model {
    /** @param array{'reason'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ResendWebhookDeliveryRequestInput')); }
    /** @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
}
