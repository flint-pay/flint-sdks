<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'content_type': string, 'purpose': string, 'size_bytes': int}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class FilesCreateInput extends Model {
    /** @param array{'body': array{'content_type': string, 'purpose': string, 'size_bytes': int}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FilesCreateInput')); }
    /** The request body for: Create a file. Example: {"content_type":"image/png","purpose":"product","size_bytes":12345}.
     * @return array{'content_type': string, 'purpose': string, 'size_bytes': int}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
