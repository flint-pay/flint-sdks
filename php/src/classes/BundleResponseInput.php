<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read BundleInput|array<array-key, mixed>|\stdClass $data
 * @property-read ResponseMetaInput|array<array-key, mixed>|\stdClass $meta
 * @property-read string $request_id
 * Presence-aware input; omitted fields throw when accessed. */
final class BundleResponseInput extends Model {
    /** @param array{'data': BundleInput|array<array-key, mixed>|\stdClass, 'meta'?: ResponseMetaInput|array<array-key, mixed>|\stdClass, 'request_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BundleResponseInput')); }
    /** The requested bundle data. Several variants sold as one line at the bundle's price. A bundle line takes its components' shared taxability and tax category; all components must share both stored values. An unset category uses the merchant default and equals only another unset category.
     * @return BundleInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): mixed { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     * @return ResponseMetaInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When meta is omitted; use hasMeta() or valueOrDefault().
     */
    public function getMeta(): mixed { return $this->get('meta'); }
    public function hasMeta(): bool { return $this->has('meta'); }
    /** Identifier of this API request, useful when contacting support. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     * @return string
     * @throws SdkError When request_id is omitted; use hasRequestId() or valueOrDefault().
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
}
