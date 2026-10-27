<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read string $credential_type
 * @property-read string $grant_id
 * @property-read string $recipient_access_token
 * Presence-aware input; omitted fields throw when accessed. */
final class SaveMeGiftCardRequestCodeInput extends Model {
    /** @param array{'code': string, 'credential_type': string, 'grant_id'?: string, 'recipient_access_token'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SaveMeGiftCardRequestCodeInput')); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Shape $ (Value): string.  Value enum: "code".
     * @return string
     * @throws SdkError When credential_type is omitted; use hasCredentialType() or valueOrDefault().
     */
    public function getCredentialType(): string { return $this->get('credential_type'); }
    public function hasCredentialType(): bool { return $this->has('credential_type'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When grant_id is omitted; use hasGrantId() or valueOrDefault().
     */
    public function getGrantId(): string { return $this->get('grant_id'); }
    public function hasGrantId(): bool { return $this->has('grant_id'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When recipient_access_token is omitted; use hasRecipientAccessToken() or valueOrDefault().
     */
    public function getRecipientAccessToken(): string { return $this->get('recipient_access_token'); }
    public function hasRecipientAccessToken(): bool { return $this->has('recipient_access_token'); }
}
