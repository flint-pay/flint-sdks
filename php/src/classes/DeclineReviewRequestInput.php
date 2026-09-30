<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $add_to_block_list
 * Presence-aware input; omitted fields throw when accessed. */
final class DeclineReviewRequestInput extends Model {
    /** @param array{'add_to_block_list'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeclineReviewRequestInput')); }
    /** @return bool
     * @throws SdkError When add_to_block_list is omitted; use hasAddToBlockList() or valueOrDefault().
     */
    public function getAddToBlockList(): bool { return $this->get('add_to_block_list'); }
    public function hasAddToBlockList(): bool { return $this->has('add_to_block_list'); }
}
