<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $resource_id
 * @property-read string $resource_type
 * @property-read list<string> $include
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string|\DateTimeInterface $occurred_after
 * @property-read string|\DateTimeInterface $occurred_before
 * Presence-aware input; omitted fields throw when accessed. */
final class DeveloperGetResourceTimelineInput extends Model {
    /** @param array{'resource_id': string, 'resource_type'?: string, 'include'?: list<string>, 'page_size'?: int, 'page_token'?: string, 'occurred_after'?: string|\DateTimeInterface, 'occurred_before'?: string|\DateTimeInterface}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeveloperGetResourceTimelineInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When resource_id is omitted; use hasResourceId() or valueOrDefault().
     */
    public function getResourceId(): string { return $this->get('resource_id'); }
    public function hasResourceId(): bool { return $this->has('resource_id'); }
    /** Shape $ (Value): string.  Value enum: "balance", "balance_transaction", "bundle", "category", "checkout_session", "credit_note", "credit_note_allocation", "customer", "dispute", "fraud_warning", "inventory_count", "inventory_level", "inventory_receipt", "inventory_reservation", "inventory_reservation_line", "inventory_transfer", "invoice", "invoice_payment_term", "merchant_billing_balance", "merchant_billing_invoice", "modifier", "modifier_group", "modifier_set", "order", "payment_intent", "payment_link", "payment_method", "payment_method_domain", "payment_review", "payout", "payout_destination", "payout_settings", "product", "product_variant", "promotion", "promotion_code", "refund", "return", "return_activity", "return_disposition", "return_inspection", "return_receipt", "return_resolution", "risk_list", "risk_list_item", "risk_rule", "subscription", "subscription_plan".
     * @return string
     * @throws SdkError When resource_type is omitted; use hasResourceType() or valueOrDefault().
     */
    public function getResourceType(): string { return $this->get('resource_type'); }
    public function hasResourceType(): bool { return $this->has('resource_type'); }
    /** Shape $ (Value): Array of string.  [] enum: "requests", "webhooks", "attempts", "image_mutations". Shape $[] (Value): string.  Value enum: "requests", "webhooks", "attempts", "image_mutations".
     * @return list<string>
     * @throws SdkError When include is omitted; use hasInclude() or valueOrDefault().
     */
    public function getInclude(): array { return $this->get('include'); }
    public function hasInclude(): bool { return $this->has('include'); }
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20.
     * @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_after is omitted; use hasOccurredAfter() or valueOrDefault().
     */
    public function getOccurredAfter(): string|\DateTimeInterface { return $this->get('occurred_after'); }
    public function hasOccurredAfter(): bool { return $this->has('occurred_after'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_before is omitted; use hasOccurredBefore() or valueOrDefault().
     */
    public function getOccurredBefore(): string|\DateTimeInterface { return $this->get('occurred_before'); }
    public function hasOccurredBefore(): bool { return $this->has('occurred_before'); }
}
