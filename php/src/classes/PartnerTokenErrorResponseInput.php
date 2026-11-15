<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $error
 * @property-read string $error_description
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerTokenErrorResponseInput extends Model {
    /** @param array{'error': string, 'error_description'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerTokenErrorResponseInput')); }
    /** The OAuth error code, one of invalid_request, invalid_client, invalid_grant, invalid_scope, unauthorized_client, unsupported_grant_type, authorization_pending, slow_down, access_denied, expired_token, invalid_context, context_access_denied, temporarily_unavailable, or server_error. The operation's `x-flint-error-codes` lists the ones it can return.
     * @return string
     * @throws SdkError When error is omitted; use hasError() or valueOrDefault().
     */
    public function getError(): string { return $this->get('error'); }
    public function hasError(): bool { return $this->has('error'); }
    /** A short explanation of the error for developers. The wording can change, so branch on `error` and not on this text.
     * @return string
     * @throws SdkError When error_description is omitted; use hasErrorDescription() or valueOrDefault().
     */
    public function getErrorDescription(): string { return $this->get('error_description'); }
    public function hasErrorDescription(): bool { return $this->has('error_description'); }
}
