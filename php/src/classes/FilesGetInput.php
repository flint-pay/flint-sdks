<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $file_id
 * Presence-aware input; omitted fields throw when accessed. */
final class FilesGetInput extends Model {
    /** @param array{'file_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FilesGetInput')); }
    /** Flint file ID. Example: "file_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When file_id is omitted; use hasFileId() or valueOrDefault().
     */
    public function getFileId(): string { return $this->get('file_id'); }
    public function hasFileId(): bool { return $this->has('file_id'); }
}
