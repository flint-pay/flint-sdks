<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantGetParams extends Model {
    /** @param array{'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantGetParams')); }
    /** Supported expansions: organization. Expansion requires merchants.profile.read plus accounts.organizations.read. Limits: at most 10 unique expand paths per request. Pass expand=organization. [] enum: "organization". Value enum: "organization". anyOf[1] (Value): Array of string.  [] enum: "organization". anyOf[1][] (Value): string.  Value enum: "organization". anyOf[2] (Value): string.  Value enum: "organization".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
