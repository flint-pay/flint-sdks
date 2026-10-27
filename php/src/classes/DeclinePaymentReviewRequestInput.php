<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $add_to_block_lists
 * Presence-aware input; omitted fields throw when accessed. */
final class DeclinePaymentReviewRequestInput extends Model {
    /** @param array{'add_to_block_lists'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeclinePaymentReviewRequestInput')); }
    /** Shape $ (Value): boolean. Add the payment's card fingerprint, email and IP address to Flint's default block lists, so later payments with any of them are blocked. Values the payment didn't have are skipped. Defaults to false. Default: false.
     * @return bool
     * @throws SdkError When add_to_block_lists is omitted; use hasAddToBlockLists() or valueOrDefault().
     */
    public function getAddToBlockLists(): bool { return $this->get('add_to_block_lists'); }
    public function hasAddToBlockLists(): bool { return $this->has('add_to_block_lists'); }
}
