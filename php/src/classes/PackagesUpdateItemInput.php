<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $package_id
 * @property-read string $package_item_id
 * @property-read array{'expected_version'?: int, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'quantity'?: int}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PackagesUpdateItemInput extends Model {
    /** @param array{'package_id': string, 'package_item_id': string, 'body': array{'expected_version'?: int, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'quantity'?: int}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PackagesUpdateItemInput')); }
    /** Flint package ID. Example: "pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When package_id is omitted; use hasPackageId() or valueOrDefault().
     */
    public function getPackageId(): string { return $this->get('package_id'); }
    public function hasPackageId(): bool { return $this->has('package_id'); }
    /** Flint package item ID. Example: "pki_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When package_item_id is omitted; use hasPackageItemId() or valueOrDefault().
     */
    public function getPackageItemId(): string { return $this->get('package_item_id'); }
    public function hasPackageItemId(): bool { return $this->has('package_item_id'); }
    /** The request body for: Update package item. Example: {"metadata":{"slot":"B"},"quantity":1}.
     * @return array{'expected_version'?: int, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'quantity'?: int}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
