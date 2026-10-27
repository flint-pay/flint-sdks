<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $return_id
 * @property-read array{'expected_version'?: string, 'reason'?: string, 'reason_message'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnsCompleteInput extends Model {
    /** @param array{'return_id': string, 'Idempotency-Key'?: string, 'body': array{'expected_version'?: string, 'reason'?: string, 'reason_message'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnsCompleteInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Complete return.
     * @return array{'expected_version'?: string, 'reason'?: string, 'reason_message'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
