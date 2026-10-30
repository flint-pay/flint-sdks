<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $category_id
 * @property-read array{'description'?: string|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class CategoriesUpdateInput extends Model {
    /** @param array{'category_id': string, 'body': array{'description'?: string|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CategoriesUpdateInput')); }
    /** Flint category ID. Example: "ctg_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When category_id is omitted; use hasCategoryId() or valueOrDefault().
     */
    public function getCategoryId(): string { return $this->get('category_id'); }
    public function hasCategoryId(): bool { return $this->has('category_id'); }
    /** The request body for: Update category.
     * @return array{'description'?: string|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
