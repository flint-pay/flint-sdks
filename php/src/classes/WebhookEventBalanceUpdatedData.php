<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $balance_id
 * Presence-aware response; omitted fields throw when accessed. */
final class WebhookEventBalanceUpdatedData extends Model {
    /** @param array{'balance_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventBalanceUpdatedData')); }
    /** @return string
     * @throws SdkError When balance_id is omitted; use hasBalanceId() or valueOrDefault().
     */
    public function getBalanceId(): string { return $this->get('balance_id'); }
    public function hasBalanceId(): bool { return $this->has('balance_id'); }
}
