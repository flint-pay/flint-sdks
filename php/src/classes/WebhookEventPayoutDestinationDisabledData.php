<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $payout_destination_id
 * Presence-aware response; omitted fields throw when accessed. */
final class WebhookEventPayoutDestinationDisabledData extends Model {
    /** @param array{'payout_destination_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventPayoutDestinationDisabledData')); }
    /** @return string
     * @throws SdkError When payout_destination_id is omitted; use hasPayoutDestinationId() or valueOrDefault().
     */
    public function getPayoutDestinationId(): string { return $this->get('payout_destination_id'); }
    public function hasPayoutDestinationId(): bool { return $this->has('payout_destination_id'); }
}
