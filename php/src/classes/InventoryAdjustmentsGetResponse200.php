<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InventoryAdjustment $data
 * @property-read ?ResponseMeta $meta
 * @property-read ?string $request_id
 * Presence-aware response; omitted optional fields return null. */
final class InventoryAdjustmentsGetResponse200 extends Model {
    /** @param array{'data': mixed, 'meta'?: mixed, 'request_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryAdjustmentsGetResponse200')); }
    /** Shape $ (Value): {@see InventoryAdjustment}. A recorded stock change with its reason and the quantity changes Flint computed.
     * @return InventoryAdjustment
     */
    public function getData(): InventoryAdjustment { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): {@see ResponseMeta}. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     * @return ?ResponseMeta
     */
    public function getMeta(): ?ResponseMeta { return $this->get('meta'); }
    public function hasMeta(): bool { return $this->has('meta'); }
    /** Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return ?string
     */
    public function getRequestId(): ?string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
}
