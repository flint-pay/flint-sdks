<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $return_receipt_id
 * @property-read string $return_receipt_line_item_id
 * @property-read array{'expected_version'?: string, 'return_line_item_id': string, 'verification_reason': string, 'verification_reason_message'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnReceiptsVerifyLineItemInput extends Model {
    /** @param array{'return_receipt_id': string, 'return_receipt_line_item_id': string, 'Idempotency-Key'?: string, 'Flint-Version'?: string, 'body': array{'expected_version'?: string, 'return_line_item_id': string, 'verification_reason': string, 'verification_reason_message'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReceiptsVerifyLineItemInput')); }
    /** @return string
     * @throws SdkError When return_receipt_id is omitted; use hasReturnReceiptId() or valueOrDefault().
     */
    public function getReturnReceiptId(): string { return $this->get('return_receipt_id'); }
    public function hasReturnReceiptId(): bool { return $this->has('return_receipt_id'); }
    /** @return string
     * @throws SdkError When return_receipt_line_item_id is omitted; use hasReturnReceiptLineItemId() or valueOrDefault().
     */
    public function getReturnReceiptLineItemId(): string { return $this->get('return_receipt_line_item_id'); }
    public function hasReturnReceiptLineItemId(): bool { return $this->has('return_receipt_line_item_id'); }
    /** @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
    /** @return array{'expected_version'?: string, 'return_line_item_id': string, 'verification_reason': string, 'verification_reason_message'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
