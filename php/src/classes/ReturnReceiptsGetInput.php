<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $return_receipt_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnReceiptsGetInput extends Model {
    /** @param array{'return_receipt_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReceiptsGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_receipt_id is omitted; use hasReturnReceiptId() or valueOrDefault().
     */
    public function getReturnReceiptId(): string { return $this->get('return_receipt_id'); }
    public function hasReturnReceiptId(): bool { return $this->has('return_receipt_id'); }
}
