<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InventoryCountResultInput|array<array-key, mixed>|\stdClass $data
 * @property-read ResponseMetaInput|array<array-key, mixed>|\stdClass $meta
 * @property-read string $request_id
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryCountResultResponseInput extends Model {
    /** @param array{'data': InventoryCountResultInput|array<array-key, mixed>|\stdClass, 'meta'?: ResponseMetaInput|array<array-key, mixed>|\stdClass, 'request_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryCountResultResponseInput')); }
    /** Shape $ (Value): {@see InventoryCountResultInput}. inventory_count is the primary resource and expected_version target. Stock-moving transitions return this result instead of a resource alone.
     * @return InventoryCountResultInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): mixed { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): {@see ResponseMetaInput}. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     * @return ResponseMetaInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When meta is omitted; use hasMeta() or valueOrDefault().
     */
    public function getMeta(): mixed { return $this->get('meta'); }
    public function hasMeta(): bool { return $this->has('meta'); }
    /** Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     * @return string
     * @throws SdkError When request_id is omitted; use hasRequestId() or valueOrDefault().
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
}
