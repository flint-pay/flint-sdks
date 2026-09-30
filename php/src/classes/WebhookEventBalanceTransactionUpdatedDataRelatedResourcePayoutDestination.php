<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $payout_destination_id
 * @property-read string $type
 * Presence-aware response; omitted fields throw when accessed. */
final class WebhookEventBalanceTransactionUpdatedDataRelatedResourcePayoutDestination extends Model {
    /** @param array{'payout_destination_id': string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventBalanceTransactionUpdatedDataRelatedResourcePayoutDestination')); }
    /** @return string
     * @throws SdkError When payout_destination_id is omitted; use hasPayoutDestinationId() or valueOrDefault().
     */
    public function getPayoutDestinationId(): string { return $this->get('payout_destination_id'); }
    public function hasPayoutDestinationId(): bool { return $this->has('payout_destination_id'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
