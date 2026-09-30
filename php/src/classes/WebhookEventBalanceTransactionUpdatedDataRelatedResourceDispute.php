<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $dispute_id
 * @property-read string $type
 * Presence-aware response; omitted fields throw when accessed. */
final class WebhookEventBalanceTransactionUpdatedDataRelatedResourceDispute extends Model {
    /** @param array{'dispute_id': string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventBalanceTransactionUpdatedDataRelatedResourceDispute')); }
    /** @return string
     * @throws SdkError When dispute_id is omitted; use hasDisputeId() or valueOrDefault().
     */
    public function getDisputeId(): string { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
