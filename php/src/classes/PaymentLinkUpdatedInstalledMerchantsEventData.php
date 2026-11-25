<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?ReturnActor $actor
 * @property-read PaymentLinkUpdatedInstalledMerchantsEventDataObject $object
 * @property-read ?PaymentLinkUpdatedInstalledMerchantsEventDataPreviousAttributes $previous_attributes
 * Presence-aware response; omitted optional fields return null. */
final class PaymentLinkUpdatedInstalledMerchantsEventData extends Model {
    /** @param array{'actor'?: mixed, 'object': object{'buyer_fields'?: mixed, 'checkout_session_expires_in_seconds'?: int, 'completed_count': int, 'created_at': string, 'custom_fields'?: list<mixed>, 'custom_text'?: mixed, 'delivery_method_ids': list<string>, 'description'?: string, 'donation_max_amount_money'?: mixed, 'donation_min_amount_money'?: mixed, 'donation_suggested_amount_money_options'?: list<mixed>, 'event_config'?: mixed, 'external_reference_id'?: string, 'image'?: mixed, 'inactive_message'?: string, 'inventory_routing_source'?: mixed, 'legal'?: mixed, 'line_items'?: list<mixed>, 'max_completions'?: int, 'merchant_id': string, 'metadata'?: mixed, 'name': string, 'payment_link_id': string, 'payment_link_type'?: string, 'payments'?: mixed, 'platform_fee_rule'?: mixed, 'promotion_config'?: mixed, 'redirects'?: mixed, 'sales_end_at'?: string, 'sales_start_at'?: string, 'sales_summary'?: mixed, 'status': string, 'subscription_plan'?: mixed, 'subscription_plan_id'?: string, 'tax'?: mixed, 'theme'?: mixed, 'tip'?: mixed, 'total_quantity_sold': int, 'updated_at': string, 'url': string, 'version': int}, 'previous_attributes'?: object{'buyer_fields'?: mixed, 'checkout_session_expires_in_seconds'?: mixed, 'completed_count'?: mixed, 'created_at'?: mixed, 'custom_fields'?: mixed, 'custom_text'?: mixed, 'delivery_method_ids'?: mixed, 'description'?: mixed, 'donation_max_amount_money'?: mixed, 'donation_min_amount_money'?: mixed, 'donation_suggested_amount_money_options'?: mixed, 'event_config'?: mixed, 'external_reference_id'?: mixed, 'image'?: mixed, 'inactive_message'?: mixed, 'inventory_routing_source'?: mixed, 'legal'?: mixed, 'line_items'?: mixed, 'max_completions'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'name'?: mixed, 'payment_link_id'?: mixed, 'payment_link_type'?: mixed, 'payments'?: mixed, 'platform_fee_rule'?: mixed, 'promotion_config'?: mixed, 'redirects'?: mixed, 'sales_end_at'?: mixed, 'sales_start_at'?: mixed, 'sales_summary'?: mixed, 'status'?: mixed, 'subscription_plan'?: mixed, 'subscription_plan_id'?: mixed, 'tax'?: mixed, 'theme'?: mixed, 'tip'?: mixed, 'total_quantity_sold'?: mixed, 'updated_at'?: mixed, 'url'?: mixed, 'version'?: mixed}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkUpdatedInstalledMerchantsEventData')); }
    /** Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getActor(): ?ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.
     * @return PaymentLinkUpdatedInstalledMerchantsEventDataObject
     */
    public function getObject(): PaymentLinkUpdatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
    /** Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return ?PaymentLinkUpdatedInstalledMerchantsEventDataPreviousAttributes
     */
    public function getPreviousAttributes(): ?PaymentLinkUpdatedInstalledMerchantsEventDataPreviousAttributes { return $this->get('previous_attributes'); }
    public function hasPreviousAttributes(): bool { return $this->has('previous_attributes'); }
}
