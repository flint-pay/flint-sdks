<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $dispute_id
 * Presence-aware response; omitted fields throw when accessed. */
final class WebhookEventDisputePreventedData extends Model {
    /** @param array{'dispute_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventDisputePreventedData')); }
    /** @return string
     * @throws SdkError When dispute_id is omitted; use hasDisputeId() or valueOrDefault().
     */
    public function getDisputeId(): string { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
}
