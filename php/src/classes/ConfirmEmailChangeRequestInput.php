<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $current_email_code
 * @property-read string $new_email_code
 * Presence-aware input; omitted fields throw when accessed. */
final class ConfirmEmailChangeRequestInput extends Model {
    /** @param array{'current_email_code'?: string, 'new_email_code': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ConfirmEmailChangeRequestInput')); }
    /** @return string
     * @throws SdkError When current_email_code is omitted; use hasCurrentEmailCode() or valueOrDefault().
     */
    public function getCurrentEmailCode(): string { return $this->get('current_email_code'); }
    public function hasCurrentEmailCode(): bool { return $this->has('current_email_code'); }
    /** @return string
     * @throws SdkError When new_email_code is omitted; use hasNewEmailCode() or valueOrDefault().
     */
    public function getNewEmailCode(): string { return $this->get('new_email_code'); }
    public function hasNewEmailCode(): bool { return $this->has('new_email_code'); }
}
