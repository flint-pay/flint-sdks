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
    /** Flint email change request ID. Example: "cecr_01KEZF7C00B8VJX4M828K0430H".
     * @return string
     * @throws SdkError When email_change_request_id is omitted; use hasEmailChangeRequestId() or valueOrDefault().
     */
    public function getEmailChangeRequestId(): string { return $this->get('email_change_request_id'); }
    public function hasEmailChangeRequestId(): bool { return $this->has('email_change_request_id'); }
    /** The request body for: Confirm an email change. Example: {"current_email_code":"123456","new_email_code":"654321"}.
     * @return array{'current_email_code'?: string, 'new_email_code': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
