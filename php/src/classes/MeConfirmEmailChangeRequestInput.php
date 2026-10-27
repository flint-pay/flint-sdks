<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $email_change_request_id
 * @property-read array{'current_email_code'?: string, 'new_email_code': string, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class MeConfirmEmailChangeRequestInput extends Model {
    /** @param array{'email_change_request_id': string, 'Idempotency-Key'?: string, 'body': array{'current_email_code'?: string, 'new_email_code': string, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeConfirmEmailChangeRequestInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When email_change_request_id is omitted; use hasEmailChangeRequestId() or valueOrDefault().
     */
    public function getEmailChangeRequestId(): string { return $this->get('email_change_request_id'); }
    public function hasEmailChangeRequestId(): bool { return $this->has('email_change_request_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Confirm an email change.
     * @return array{'current_email_code'?: string, 'new_email_code': string, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
