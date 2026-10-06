<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $email
 * Presence-aware input; omitted fields throw when accessed. */
final class SendOrderReceiptRequestInput extends Model {
    /** @param array{'email'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SendOrderReceiptRequestInput')); }
    /** @return string
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
}
