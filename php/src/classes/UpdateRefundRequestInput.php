<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateRefundRequestInput extends Model {
    /** @param array{'metadata'?: array<array-key, string|null>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateRefundRequestInput')); }
    /** @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
}
