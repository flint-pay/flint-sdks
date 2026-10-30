<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $email_change_request_id
 * @property-read array{'current_email_code'?: string, 'new_email_code': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class MeConfirmEmailChangeRequestInput extends Model {
    /** @param array{'email_change_request_id': string, 'body': array{'current_email_code'?: string, 'new_email_code': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeConfirmEmailChangeRequestInput')); }
    /** Flint email change request ID. Example: "cecr_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When email_change_request_id is omitted; use hasEmailChangeRequestId() or valueOrDefault().
     */
    public function getEmailChangeRequestId(): string { return $this->get('email_change_request_id'); }
    public function hasEmailChangeRequestId(): bool { return $this->has('email_change_request_id'); }
    /** The request body for: Confirm an email change.
     * @return array{'current_email_code'?: string, 'new_email_code': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
