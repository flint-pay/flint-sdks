<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $risk_list_id
 * @property-read string $risk_list_item_id
 * Presence-aware input; omitted fields throw when accessed. */
final class RiskListsDeleteItemInput extends Model {
    /** @param array{'risk_list_id': string, 'risk_list_item_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskListsDeleteItemInput')); }
    /** @return string
     * @throws SdkError When risk_list_id is omitted; use hasRiskListId() or valueOrDefault().
     */
    public function getRiskListId(): string { return $this->get('risk_list_id'); }
    public function hasRiskListId(): bool { return $this->has('risk_list_id'); }
    /** @return string
     * @throws SdkError When risk_list_item_id is omitted; use hasRiskListItemId() or valueOrDefault().
     */
    public function getRiskListItemId(): string { return $this->get('risk_list_item_id'); }
    public function hasRiskListItemId(): bool { return $this->has('risk_list_item_id'); }
    /** @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** @return string
     * @throws SdkError When X-Request-Id is omitted; use hasXRequestId() or valueOrDefault().
     */
    public function getXRequestId(): string { return $this->get('X-Request-Id'); }
    public function hasXRequestId(): bool { return $this->has('X-Request-Id'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
}
