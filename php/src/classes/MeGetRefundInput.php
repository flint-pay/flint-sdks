<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $refund_id
 * Presence-aware input; omitted fields throw when accessed. */
final class MeGetRefundInput extends Model {
    /** @param array{'refund_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeGetRefundInput')); }
    /** Flint refund ID. Example: "ref_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When refund_id is omitted; use hasRefundId() or valueOrDefault().
     */
    public function getRefundId(): string { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
}
