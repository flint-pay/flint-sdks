<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $payout_id
 * Presence-aware response; omitted fields throw when accessed. */
final class WebhookEventPayoutPaidData extends Model {
    /** @param array{'payout_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventPayoutPaidData')); }
    /** @return string
     * @throws SdkError When payout_id is omitted; use hasPayoutId() or valueOrDefault().
     */
    public function getPayoutId(): string { return $this->get('payout_id'); }
    public function hasPayoutId(): bool { return $this->has('payout_id'); }
}
