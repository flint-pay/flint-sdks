<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLinksGetParams extends Model {
    /** @param array{'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinksGetParams')); }
    /** Supported expansions: sales_summary, subscription_plan. sales_summary requires checkouts.payment_links.read and is also available to dashboard sessions. subscription_plan additionally requires commerce.subscription_plans.read. sales_summary is supported only on this get route. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=sales_summary&expand=subscription_plan, or pass one comma-separated value. [] enum: "sales_summary", "subscription_plan". Value enum: "sales_summary", "subscription_plan". anyOf[1] (Value): Array of string.  [] enum: "sales_summary", "subscription_plan". anyOf[1][] (Value): string.  Value enum: "sales_summary", "subscription_plan". anyOf[2] (Value): string.  Value enum: "sales_summary", "subscription_plan".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
