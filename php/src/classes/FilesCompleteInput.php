<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $file_id
 * @property-read array{}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class FilesCompleteInput extends Model {
    /** @param array{'file_id': string, 'body'?: array{}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FilesCompleteInput')); }
    /** Flint file ID. Example: "file_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When file_id is omitted; use hasFileId() or valueOrDefault().
     */
    public function getFileId(): string { return $this->get('file_id'); }
    public function hasFileId(): bool { return $this->has('file_id'); }
    /** maxProperties: 0. Example: {}.
     * @return array{}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
