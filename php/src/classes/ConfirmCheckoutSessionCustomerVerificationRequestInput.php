<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * Presence-aware input; omitted fields throw when accessed. */
final class ConfirmCheckoutSessionCustomerVerificationRequestInput extends Model {
    /** @param array{'code': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ConfirmCheckoutSessionCustomerVerificationRequestInput')); }
    /** The six-digit code from the email or the text. minLength: 6. maxLength: 6. pattern: ^[0-9]{6}$.
     * @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
}
