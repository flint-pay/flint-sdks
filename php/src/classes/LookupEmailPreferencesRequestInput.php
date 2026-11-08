<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $email
 * Presence-aware input; omitted fields throw when accessed. */
final class LookupEmailPreferencesRequestInput extends Model {
    /** @param array{'email': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LookupEmailPreferencesRequestInput')); }
    /** Email address to look up. Matched after trimming surrounding whitespace and ignoring case, the way Flint matches unsubscribes. minLength: 1. maxLength: 320.
     * @return string
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
}
