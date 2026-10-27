import { certifies } from './type-certificate.js';
import { DescriptorSource } from './descriptor-source.js';
import { compileRuntimePlan, assertRuntimePlan, isBaseUrlSyntax, } from './runtime-plan.js';
import { compileCodec, ANY_CODEC, exactValue, wireKind } from './codec-plan.js';
export { directionalSchema } from './codec-plan.js';
const inspectCustom = Symbol.for('nodejs.util.inspect.custom');
const errorCauses = new WeakMap();
const publicErrorDetailsCertificate = {"type":{"kind":"union","members":[{"kind":"reference","name":"ErrorObject"},{"kind":"reference","name":"InventoryTransferActionConflictErrorObject"},{"kind":"record","fields":{"code":{"type":{"kind":"string"},"optional":true}}},{"kind":"union","members":[{"kind":"record","fields":{"transportCode":{"type":{"kind":"union","members":[{"kind":"string"},{"kind":"null"}]},"optional":false}}},{"kind":"record","fields":{"eventId":{"type":{"kind":"string"},"optional":false},"position":{"type":{"kind":"number"},"optional":false}}},{"kind":"record","fields":{"reason":{"type":{"kind":"string"},"optional":false},"source":{"type":{"kind":"string"},"optional":false},"workloadIdentityId":{"type":{"kind":"string"},"optional":false},"iss":{"type":{"kind":"string"},"optional":false},"sub":{"type":{"kind":"string"},"optional":false},"aud":{"type":{"kind":"string"},"optional":false},"error_description":{"type":{"kind":"string"},"optional":false}}}]}]},"definitions":{"ErrorObject":{"kind":"record","fields":{"code":{"type":{"kind":"string"},"optional":false},"details":{"type":{"kind":"array","element":{"kind":"reference","name":"ErrorDetail"}},"optional":true},"doc_url":{"type":{"kind":"string"},"optional":false},"error_source":{"type":{"kind":"string"},"optional":false},"message":{"type":{"kind":"string"},"optional":false},"param":{"type":{"kind":"string"},"optional":true},"remediation":{"type":{"kind":"union","members":[{"kind":"reference","name":"ErrorRemediation"},{"kind":"null"}]},"optional":false},"request_id":{"type":{"kind":"string"},"optional":true},"request_log_url":{"type":{"kind":"string"},"optional":true},"type":{"type":{"kind":"string"},"optional":false}}},"ErrorDetail":{"kind":"record","fields":{"allowed_key_modes":{"type":{"kind":"array","element":{"kind":"string"}},"optional":true},"available_by_source_type":{"type":{"kind":"record","fields":{},"extra":{"kind":"reference","name":"MoneyValue"}},"optional":true},"available_quantity":{"type":{"kind":"integer-string"},"optional":true},"blocking_resource_count":{"type":{"kind":"integer-string"},"optional":true},"blocking_resources":{"type":{"kind":"array","element":{"kind":"reference","name":"ErrorResourceReference"}},"optional":true},"capability":{"type":{"kind":"string"},"optional":true},"capturable_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":true},"captured_physical_version":{"type":{"kind":"integer-string"},"optional":true},"closed_reason":{"type":{"kind":"string"},"optional":true},"code":{"type":{"kind":"string"},"optional":false},"collected_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":true},"conflict_type":{"type":{"kind":"string"},"optional":true},"conflicting_fields":{"type":{"kind":"array","element":{"kind":"string"}},"optional":true},"current_api_version":{"type":{"kind":"string"},"optional":true},"current_checkout_session_id":{"type":{"kind":"string"},"optional":true},"current_delivery_selection_id":{"type":{"kind":"union","members":[{"kind":"string"},{"kind":"null"}]},"optional":true},"current_interval":{"type":{"kind":"string"},"optional":true},"current_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":true},"current_physical_version":{"type":{"kind":"integer-string"},"optional":true},"current_resource":{"type":{"kind":"union","members":[{"kind":"reference","name":"ErrorResourceReference"},{"kind":"reference","name":"Fulfillment"},{"kind":"reference","name":"Shipment"},{"kind":"reference","name":"Package"},{"kind":"reference","name":"CustomDomain"},{"kind":"record","fields":{},"extra":{"kind":"unknown"}}]},"optional":true},"current_selection_id":{"type":{"kind":"string"},"optional":true},"current_source_observation_sequence":{"type":{"kind":"integer-string"},"optional":true},"current_status":{"type":{"kind":"string"},"optional":true},"current_version":{"type":{"kind":"integer-string"},"optional":true},"delivery_method_id":{"type":{"kind":"string"},"optional":true},"demand_key":{"type":{"kind":"string"},"optional":true},"demo_session_id":{"type":{"kind":"string"},"optional":true},"dependency_type":{"type":{"kind":"string"},"optional":true},"eligibility_reason":{"type":{"kind":"string"},"optional":true},"existing_checkout_session_id":{"type":{"kind":"string"},"optional":true},"expected_attempt_outstanding_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":true},"failure_category":{"type":{"kind":"string"},"optional":true},"failure_code":{"type":{"kind":"string"},"optional":true},"gap_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":true},"inactive_message":{"type":{"kind":"string"},"optional":true},"inventory_count_line_id":{"type":{"kind":"string"},"optional":true},"inventory_item_id":{"type":{"kind":"string"},"optional":true},"invoice_payment_attempt_id":{"type":{"kind":"string"},"optional":true},"is_resumable":{"type":{"kind":"boolean"},"optional":true},"limit":{"type":{"kind":"integer-string"},"optional":true},"line_item_key":{"type":{"kind":"string"},"optional":true},"location_id":{"type":{"kind":"string"},"optional":true},"location_outcome":{"type":{"kind":"string"},"optional":true},"maximum_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":true},"message":{"type":{"kind":"string"},"optional":false},"missing_scopes":{"type":{"kind":"array","element":{"kind":"string"}},"optional":true},"order_charge_id":{"type":{"kind":"string"},"optional":true},"order_id":{"type":{"kind":"string"},"optional":true},"order_line_item_id":{"type":{"kind":"string"},"optional":true},"order_payment_attempt_id":{"type":{"kind":"string"},"optional":true},"param":{"type":{"kind":"string"},"optional":true},"payment_attempt_status":{"type":{"kind":"string"},"optional":true},"payment_intent_ids":{"type":{"kind":"array","element":{"kind":"string"}},"optional":true},"payment_method_domain_id":{"type":{"kind":"string"},"optional":true},"payment_option":{"type":{"kind":"string"},"optional":true},"payout_terms_expires_at":{"type":{"kind":"string"},"optional":true},"previous_key_expires_at":{"type":{"kind":"string"},"optional":true},"product_id":{"type":{"kind":"string"},"optional":true},"quota":{"type":{"kind":"reference","name":"QuotaDetails"},"optional":true},"reason":{"type":{"kind":"string"},"optional":true},"remediation":{"type":{"kind":"reference","name":"ErrorRemediation"},"optional":true},"requested_key_mode":{"type":{"kind":"string"},"optional":true},"requested_quantity":{"type":{"kind":"integer-string"},"optional":true},"required_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":true},"requoted_shipping_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":true},"requoted_tax_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":true},"resource_id":{"type":{"kind":"string"},"optional":true},"resource_type":{"type":{"kind":"string"},"optional":true},"return_resolution_id":{"type":{"kind":"string"},"optional":true},"risk_rule_ids":{"type":{"kind":"array","element":{"kind":"string"}},"optional":true},"scope":{"type":{"kind":"string"},"optional":true},"scope_requirement":{"type":{"kind":"reference","name":"ScopeRequirement"},"optional":true},"selectable_merchants":{"type":{"kind":"array","element":{"kind":"reference","name":"SelectableMerchant"}},"optional":true},"selectable_payment_intents":{"type":{"kind":"array","element":{"kind":"reference","name":"SelectableOrderPaymentIntent"}},"optional":true},"shipping_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":true},"shortage_quantity":{"type":{"kind":"integer-string"},"optional":true},"submitted_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":true},"submitted_source_observation_sequence":{"type":{"kind":"integer-string"},"optional":true},"subscription_delivery_migration_id":{"type":{"kind":"string"},"optional":true},"subscription_offer_id":{"type":{"kind":"string"},"optional":true},"subscription_plan_line_item_id":{"type":{"kind":"string"},"optional":true},"suggestions":{"type":{"kind":"array","element":{"kind":"string"}},"optional":true},"supported_actions":{"type":{"kind":"array","element":{"kind":"string"}},"optional":true},"supported_api_versions":{"type":{"kind":"array","element":{"kind":"string"}},"optional":true},"surface":{"type":{"kind":"string"},"optional":true},"tax_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":true},"tip_capable_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":true},"unavailable_reason":{"type":{"kind":"string"},"optional":true},"variant_id":{"type":{"kind":"string"},"optional":true}}},"MoneyValue":{"kind":"record","fields":{"amount":{"type":{"kind":"integer-string"},"optional":false},"currency":{"type":{"kind":"string"},"optional":false}}},"ErrorResourceReference":{"kind":"record","fields":{"resource_id":{"type":{"kind":"string"},"optional":false},"resource_type":{"type":{"kind":"string"},"optional":false},"status":{"type":{"kind":"string"},"optional":true}}},"Fulfillment":{"kind":"record","fields":{"active_hold":{"type":{"kind":"reference","name":"FulfillmentHold"},"optional":true},"charges":{"type":{"kind":"array","element":{"kind":"reference","name":"FulfillmentChargeLink"}},"optional":true},"completed_at":{"type":{"kind":"string"},"optional":true},"created_at":{"type":{"kind":"string"},"optional":true},"customer_id":{"type":{"kind":"string"},"optional":true},"device_id":{"type":{"kind":"string"},"optional":true},"digital_details":{"type":{"kind":"reference","name":"DigitalFulfillmentDetails"},"optional":true},"dispatched_at":{"type":{"kind":"string"},"optional":true},"external_reference_id":{"type":{"kind":"string"},"optional":true},"fulfillment_id":{"type":{"kind":"string"},"optional":false},"line_items":{"type":{"kind":"array","element":{"kind":"reference","name":"FulfillmentLineItem"}},"optional":false},"local_delivery_details":{"type":{"kind":"reference","name":"DeliveryFulfillmentDetails"},"optional":true},"location_id":{"type":{"kind":"string"},"optional":true},"metadata":{"type":{"kind":"record","fields":{},"extra":{"kind":"string"}},"optional":true},"order":{"type":{"kind":"union","members":[{"kind":"reference","name":"ExpandedOrderSummary"},{"kind":"null"}]},"optional":true},"order_id":{"type":{"kind":"string"},"optional":false},"order_number":{"type":{"kind":"string"},"optional":true},"outcome":{"type":{"kind":"reference","name":"FulfillmentOutcome"},"optional":true},"packages":{"type":{"kind":"array","element":{"kind":"reference","name":"ExpandedPackageSummary"}},"optional":true},"packed_at":{"type":{"kind":"string"},"optional":true},"picked_at":{"type":{"kind":"string"},"optional":true},"pickup_details":{"type":{"kind":"reference","name":"PickupFulfillmentDetails"},"optional":true},"recipient":{"type":{"kind":"reference","name":"FulfillmentRecipient"},"optional":true},"scheduled_start_at":{"type":{"kind":"union","members":[{"kind":"string"},{"kind":"null"}]},"optional":false},"service_details":{"type":{"kind":"reference","name":"ServiceFulfillmentDetails"},"optional":true},"shipment_details":{"type":{"kind":"reference","name":"ShipmentFulfillmentDetails"},"optional":true},"shipments":{"type":{"kind":"array","element":{"kind":"reference","name":"ExpandedShipmentSummary"}},"optional":true},"status":{"type":{"kind":"string"},"optional":false},"supported_actions":{"type":{"kind":"array","element":{"kind":"string"}},"optional":false},"terminal_at":{"type":{"kind":"string"},"optional":true},"type":{"type":{"kind":"string"},"optional":false},"updated_at":{"type":{"kind":"string"},"optional":true},"version":{"type":{"kind":"integer-string"},"optional":false}}},"FulfillmentHold":{"kind":"record","fields":{"created_at":{"type":{"kind":"string"},"optional":false},"display_reason":{"type":{"kind":"string"},"optional":true},"held_by":{"type":{"kind":"string"},"optional":true},"previous_status":{"type":{"kind":"string"},"optional":false},"reason":{"type":{"kind":"string"},"optional":false},"reason_notes":{"type":{"kind":"string"},"optional":true}}},"FulfillmentChargeLink":{"kind":"record","fields":{"order_charge_id":{"type":{"kind":"string"},"optional":false}}},"DigitalFulfillmentDetails":{"kind":"record","fields":{"delivered_at":{"type":{"kind":"string"},"optional":true},"delivery_url":{"type":{"kind":"string"},"optional":true}}},"FulfillmentLineItem":{"kind":"record","fields":{"modifiers":{"type":{"kind":"array","element":{"kind":"reference","name":"OrderLineItemModifier"}},"optional":true},"order_line_item_id":{"type":{"kind":"string"},"optional":false},"quantity":{"type":{"kind":"integer-string"},"optional":false}}},"OrderLineItemModifier":{"kind":"record","fields":{"metadata":{"type":{"kind":"record","fields":{},"extra":{"kind":"string"}},"optional":true},"modifier_group_name":{"type":{"kind":"string"},"optional":false},"modifier_id":{"type":{"kind":"string"},"optional":true},"name":{"type":{"kind":"string"},"optional":false},"order_line_item_modifier_id":{"type":{"kind":"string"},"optional":false},"quantity":{"type":{"kind":"integer-string"},"optional":false},"show_on_fulfillment":{"type":{"kind":"boolean"},"optional":false},"show_on_receipt":{"type":{"kind":"boolean"},"optional":false},"source_type":{"type":{"kind":"string"},"optional":false},"text":{"type":{"kind":"reference","name":"TextModifierRequest"},"optional":true},"text_value":{"type":{"kind":"string"},"optional":true},"total_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":false},"unit_price_delta_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":false}}},"TextModifierRequest":{"kind":"record","fields":{"modifier_group_id":{"type":{"kind":"string"},"optional":false},"value":{"type":{"kind":"string"},"optional":false}}},"DeliveryFulfillmentDetails":{"kind":"record","fields":{"carrier":{"type":{"kind":"string"},"optional":true},"courier_pickup_at":{"type":{"kind":"string"},"optional":true},"courier_pickup_window_duration_seconds":{"type":{"kind":"integer-string"},"optional":true},"courier_provider_name":{"type":{"kind":"string"},"optional":true},"courier_support_phone":{"type":{"kind":"string"},"optional":true},"delivered_at":{"type":{"kind":"string"},"optional":true},"dispatched_at":{"type":{"kind":"string"},"optional":true},"dropoff_notes":{"type":{"kind":"string"},"optional":true},"expires_at":{"type":{"kind":"string"},"optional":true},"external_delivery_id":{"type":{"kind":"string"},"optional":true},"instructions":{"type":{"kind":"string"},"optional":true},"no_contact":{"type":{"kind":"boolean"},"optional":true},"prep_time_duration_seconds":{"type":{"kind":"integer-string"},"optional":true},"ready_at":{"type":{"kind":"string"},"optional":true},"service_area_id":{"type":{"kind":"string"},"optional":true},"timezone":{"type":{"kind":"string"},"optional":true},"tracking_url":{"type":{"kind":"string"},"optional":true},"window_end_at":{"type":{"kind":"string"},"optional":true},"window_start_at":{"type":{"kind":"string"},"optional":true}}},"ExpandedOrderSummary":{"kind":"record","fields":{"buyer_contact":{"type":{"kind":"reference","name":"CheckoutBuyerContact"},"optional":true},"closed_at":{"type":{"kind":"string"},"optional":true},"closed_reason":{"type":{"kind":"string"},"optional":true},"created_at":{"type":{"kind":"string"},"optional":true},"customer_id":{"type":{"kind":"string"},"optional":true},"fulfillment_status":{"type":{"kind":"string"},"optional":true},"order_id":{"type":{"kind":"string"},"optional":false},"order_number":{"type":{"kind":"string"},"optional":true},"payment_intent_ids":{"type":{"kind":"array","element":{"kind":"string"}},"optional":true},"payment_status":{"type":{"kind":"string"},"optional":false},"pricing_amounts":{"type":{"kind":"reference","name":"PricingAmounts"},"optional":false},"refund_status":{"type":{"kind":"string"},"optional":false},"settlement_amounts":{"type":{"kind":"reference","name":"SettlementAmounts"},"optional":false},"status":{"type":{"kind":"string"},"optional":false},"updated_at":{"type":{"kind":"string"},"optional":true}}},"CheckoutBuyerContact":{"kind":"record","fields":{"email":{"type":{"kind":"union","members":[{"kind":"string"},{"kind":"null"}]},"optional":false},"is_email_cleared":{"type":{"kind":"boolean"},"optional":false},"is_phone_cleared":{"type":{"kind":"boolean"},"optional":false},"phone":{"type":{"kind":"union","members":[{"kind":"string"},{"kind":"null"}]},"optional":false},"updated_at":{"type":{"kind":"string"},"optional":true}}},"PricingAmounts":{"kind":"record","fields":{"additive_tax_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":false},"charge_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":false},"discount_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":false},"inclusive_tax_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":false},"requested_tip_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":false},"subtotal_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":false},"tax_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":false},"total_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":false}}},"SettlementAmounts":{"kind":"record","fields":{"balance_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":false},"credit_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":false},"net_collected_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":false},"outstanding_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":false},"paid_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":false},"refunded_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":false},"settled_tip_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":false},"written_off_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":false}}},"FulfillmentOutcome":{"kind":"record","fields":{"notes":{"type":{"kind":"string"},"optional":true},"occurred_at":{"type":{"kind":"string"},"optional":false},"outcome_type":{"type":{"kind":"string"},"optional":false},"reason":{"type":{"kind":"string"},"optional":false}}},"ExpandedPackageSummary":{"kind":"record","fields":{"carrier":{"type":{"kind":"string"},"optional":true},"created_at":{"type":{"kind":"string"},"optional":true},"delivered_at":{"type":{"kind":"string"},"optional":true},"expected_delivery_at":{"type":{"kind":"union","members":[{"kind":"string"},{"kind":"null"}]},"optional":true},"fulfillment_id":{"type":{"kind":"string"},"optional":false},"package_id":{"type":{"kind":"string"},"optional":false},"service_code":{"type":{"kind":"string"},"optional":true},"shipment_id":{"type":{"kind":"string"},"optional":false},"shipped_at":{"type":{"kind":"string"},"optional":true},"status":{"type":{"kind":"string"},"optional":false},"supported_actions":{"type":{"kind":"array","element":{"kind":"string"}},"optional":false},"tracking_number":{"type":{"kind":"string"},"optional":true},"tracking_url":{"type":{"kind":"string"},"optional":true},"updated_at":{"type":{"kind":"string"},"optional":true},"version":{"type":{"kind":"integer-string"},"optional":false}}},"PickupFulfillmentDetails":{"kind":"record","fields":{"address":{"type":{"kind":"reference","name":"Address"},"optional":true},"curbside_instructions":{"type":{"kind":"string"},"optional":true},"customer_arrived_at":{"type":{"kind":"string"},"optional":true},"expires_at":{"type":{"kind":"string"},"optional":true},"instructions":{"type":{"kind":"string"},"optional":true},"location_name":{"type":{"kind":"string"},"optional":true},"picked_up_at":{"type":{"kind":"string"},"optional":true},"pickup_mode":{"type":{"kind":"string"},"optional":true},"pickup_window_duration_seconds":{"type":{"kind":"integer-string"},"optional":true},"prep_time_duration_seconds":{"type":{"kind":"integer-string"},"optional":true},"ready_at":{"type":{"kind":"string"},"optional":true},"timezone":{"type":{"kind":"string"},"optional":true},"vehicle_description":{"type":{"kind":"string"},"optional":true},"window_end_at":{"type":{"kind":"string"},"optional":true},"window_start_at":{"type":{"kind":"string"},"optional":true}}},"Address":{"kind":"reference","name":"@0"},"@0":{"kind":"record","fields":{"city":{"type":{"kind":"string"},"optional":false},"country":{"type":{"kind":"string"},"optional":false},"line1":{"type":{"kind":"string"},"optional":false},"line2":{"type":{"kind":"string"},"optional":true},"postal_code":{"type":{"kind":"string"},"optional":false},"state":{"type":{"kind":"string"},"optional":false}}},"FulfillmentRecipient":{"kind":"record","fields":{"address":{"type":{"kind":"reference","name":"Address"},"optional":true},"email":{"type":{"kind":"string"},"optional":true},"instructions":{"type":{"kind":"string"},"optional":true},"name":{"type":{"kind":"string"},"optional":true},"phone":{"type":{"kind":"string"},"optional":true}}},"ServiceFulfillmentDetails":{"kind":"record","fields":{"completed_at":{"type":{"kind":"string"},"optional":true},"notes":{"type":{"kind":"string"},"optional":true},"scheduled_end_at":{"type":{"kind":"string"},"optional":true},"scheduled_start_at":{"type":{"kind":"string"},"optional":true},"timezone":{"type":{"kind":"string"},"optional":true}}},"ShipmentFulfillmentDetails":{"kind":"record","fields":{"shipped_at":{"type":{"kind":"string"},"optional":true},"timezone":{"type":{"kind":"string"},"optional":true},"window_end_at":{"type":{"kind":"string"},"optional":true},"window_start_at":{"type":{"kind":"string"},"optional":true}}},"ExpandedShipmentSummary":{"kind":"record","fields":{"created_at":{"type":{"kind":"string"},"optional":true},"delivered_at":{"type":{"kind":"string"},"optional":true},"direction":{"type":{"kind":"string"},"optional":false},"fulfillment_id":{"type":{"kind":"string"},"optional":false},"handed_off_at":{"type":{"kind":"string"},"optional":true},"package_count":{"type":{"kind":"number"},"optional":false},"return_id":{"type":{"kind":"string"},"optional":true},"shipment_id":{"type":{"kind":"string"},"optional":false},"shipped_at":{"type":{"kind":"string"},"optional":true},"status":{"type":{"kind":"string"},"optional":false},"updated_at":{"type":{"kind":"string"},"optional":true}}},"Shipment":{"kind":"record","fields":{"created_at":{"type":{"kind":"string"},"optional":true},"delivered_at":{"type":{"kind":"string"},"optional":true},"direction":{"type":{"kind":"string"},"optional":false},"external_reference_id":{"type":{"kind":"string"},"optional":true},"external_system":{"type":{"kind":"string"},"optional":true},"fulfillment_id":{"type":{"kind":"string"},"optional":false},"handed_off_at":{"type":{"kind":"string"},"optional":true},"metadata":{"type":{"kind":"record","fields":{},"extra":{"kind":"string"}},"optional":true},"order":{"type":{"kind":"union","members":[{"kind":"reference","name":"ExpandedOrderSummary"},{"kind":"null"}]},"optional":true},"order_id":{"type":{"kind":"string"},"optional":false},"package_count":{"type":{"kind":"number"},"optional":false},"return_id":{"type":{"kind":"string"},"optional":true},"return_line_items":{"type":{"kind":"array","element":{"kind":"reference","name":"ReturnResolutionLineItemRequest"}},"optional":true},"shipment_id":{"type":{"kind":"string"},"optional":false},"shipped_at":{"type":{"kind":"string"},"optional":true},"status":{"type":{"kind":"string"},"optional":false},"updated_at":{"type":{"kind":"string"},"optional":true},"version":{"type":{"kind":"integer-string"},"optional":false}}},"ReturnResolutionLineItemRequest":{"kind":"record","fields":{"quantity":{"type":{"kind":"integer-string"},"optional":false},"return_line_item_id":{"type":{"kind":"string"},"optional":false}}},"Package":{"kind":"record","fields":{"carrier":{"type":{"kind":"string"},"optional":true},"created_at":{"type":{"kind":"string"},"optional":true},"delivered_at":{"type":{"kind":"string"},"optional":true},"dimensions":{"type":{"kind":"reference","name":"Dimensions"},"optional":true},"expected_delivery_at":{"type":{"kind":"union","members":[{"kind":"string"},{"kind":"null"}]},"optional":true},"external_reference_id":{"type":{"kind":"string"},"optional":true},"external_system":{"type":{"kind":"string"},"optional":true},"fulfillment_id":{"type":{"kind":"string"},"optional":false},"label_url":{"type":{"kind":"string"},"optional":true},"metadata":{"type":{"kind":"record","fields":{},"extra":{"kind":"string"}},"optional":true},"order":{"type":{"kind":"union","members":[{"kind":"reference","name":"ExpandedOrderSummary"},{"kind":"null"}]},"optional":true},"order_id":{"type":{"kind":"string"},"optional":false},"package_id":{"type":{"kind":"string"},"optional":false},"return_id":{"type":{"kind":"string"},"optional":true},"return_line_items":{"type":{"kind":"array","element":{"kind":"reference","name":"ReturnResolutionLineItemRequest"}},"optional":true},"service_code":{"type":{"kind":"string"},"optional":true},"shipment_id":{"type":{"kind":"string"},"optional":false},"shipped_at":{"type":{"kind":"string"},"optional":true},"status":{"type":{"kind":"string"},"optional":false},"status_reason":{"type":{"kind":"string"},"optional":true},"supported_actions":{"type":{"kind":"array","element":{"kind":"string"}},"optional":false},"tracking_number":{"type":{"kind":"string"},"optional":true},"tracking_url":{"type":{"kind":"string"},"optional":true},"updated_at":{"type":{"kind":"string"},"optional":true},"version":{"type":{"kind":"integer-string"},"optional":false},"weight":{"type":{"kind":"reference","name":"Weight"},"optional":true}}},"Dimensions":{"kind":"record","fields":{"height":{"type":{"kind":"number"},"optional":false},"length":{"type":{"kind":"number"},"optional":false},"unit":{"type":{"kind":"string"},"optional":false},"width":{"type":{"kind":"number"},"optional":false}}},"Weight":{"kind":"record","fields":{"unit":{"type":{"kind":"string"},"optional":false},"value":{"type":{"kind":"number"},"optional":false}}},"CustomDomain":{"kind":"record","fields":{"active_payment_attempt_count":{"type":{"kind":"union","members":[{"kind":"integer-string"},{"kind":"null"}]},"optional":false},"created_at":{"type":{"kind":"string"},"optional":false},"custom_domain_id":{"type":{"kind":"string"},"optional":false},"dns_records":{"type":{"kind":"array","element":{"kind":"reference","name":"CustomDomainDNSRecord"}},"optional":false},"hostname":{"type":{"kind":"string"},"optional":false},"last_checked_at":{"type":{"kind":"union","members":[{"kind":"string"},{"kind":"null"}]},"optional":false},"payment_method_domain_id":{"type":{"kind":"union","members":[{"kind":"string"},{"kind":"null"}]},"optional":false},"redirect_expires_at":{"type":{"kind":"union","members":[{"kind":"string"},{"kind":"null"}]},"optional":false},"status":{"type":{"kind":"string"},"optional":false},"status_reason":{"type":{"kind":"union","members":[{"kind":"literal","value":"dns_record_missing"},{"kind":"literal","value":"dns_record_mismatch"},{"kind":"literal","value":"ownership_record_missing"},{"kind":"literal","value":"ownership_record_mismatch"},{"kind":"literal","value":"caa_record_blocks_certificate"},{"kind":"literal","value":"proxied_by_another_provider"},{"kind":"literal","value":"certificate_pending"},{"kind":"literal","value":"custom_domains_inactive"},{"kind":"literal","value":"other"},{"kind":"null"},{"kind":"string"},{"kind":"null"}]},"optional":false},"type":{"type":{"kind":"string"},"optional":false},"updated_at":{"type":{"kind":"string"},"optional":false}}},"CustomDomainDNSRecord":{"kind":"record","fields":{"name":{"type":{"kind":"string"},"optional":false},"type":{"type":{"kind":"string"},"optional":false},"value":{"type":{"kind":"string"},"optional":false}}},"QuotaDetails":{"kind":"record","fields":{"limit_bytes":{"type":{"kind":"integer-string"},"optional":false},"next_expiration_at":{"type":{"kind":"string"},"optional":true},"ready_unattached_bytes":{"type":{"kind":"integer-string"},"optional":false},"reserved_bytes":{"type":{"kind":"integer-string"},"optional":false},"resource":{"type":{"kind":"string"},"optional":false},"used_bytes":{"type":{"kind":"integer-string"},"optional":false}}},"ErrorRemediation":{"kind":"record","fields":{"next_actions":{"type":{"kind":"array","element":{"kind":"reference","name":"NextAction"}},"optional":true},"next_steps":{"type":{"kind":"string"},"optional":true},"retry":{"type":{"kind":"string"},"optional":false}}},"NextAction":{"kind":"record","fields":{"action_type":{"type":{"kind":"string"},"optional":false},"expires_at":{"type":{"kind":"string"},"optional":true},"merchant_account_session":{"type":{"kind":"reference","name":"NextActionMerchantAccountSession"},"optional":true},"reason_code":{"type":{"kind":"string"},"optional":true},"reason_message":{"type":{"kind":"string"},"optional":true},"required_fields":{"type":{"kind":"array","element":{"kind":"string"}},"optional":true},"required_scope":{"type":{"kind":"string"},"optional":true},"requires_human_confirmation":{"type":{"kind":"boolean"},"optional":true},"suggested_delay_milliseconds":{"type":{"kind":"number"},"optional":true},"url":{"type":{"kind":"string"},"optional":true}}},"NextActionMerchantAccountSession":{"kind":"record","fields":{"collection_strategy":{"type":{"kind":"string"},"optional":true},"component":{"type":{"kind":"string"},"optional":false},"future_requirements":{"type":{"kind":"string"},"optional":true}}},"ScopeRequirement":{"kind":"record","fields":{"mode":{"type":{"kind":"string"},"optional":false},"scopes":{"type":{"kind":"array","element":{"kind":"string"}},"optional":false}}},"SelectableMerchant":{"kind":"record","fields":{"business_name":{"type":{"kind":"string"},"optional":false},"merchant_id":{"type":{"kind":"string"},"optional":false}}},"SelectableOrderPaymentIntent":{"kind":"record","fields":{"amount_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":false},"last_payment_error":{"type":{"kind":"reference","name":"PaymentErrorSummary"},"optional":true},"payment_collection":{"type":{"kind":"reference","name":"PaymentCollection"},"optional":true},"payment_intent_id":{"type":{"kind":"string"},"optional":false},"status":{"type":{"kind":"string"},"optional":false},"tip_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":false}}},"PaymentErrorSummary":{"kind":"record","fields":{"code":{"type":{"kind":"string"},"optional":false},"failed_at":{"type":{"kind":"string"},"optional":false},"message":{"type":{"kind":"string"},"optional":false},"remediation":{"type":{"kind":"union","members":[{"kind":"reference","name":"ErrorRemediation"},{"kind":"null"}]},"optional":false}}},"PaymentCollection":{"kind":"record","fields":{"stripe":{"type":{"kind":"reference","name":"PaymentCollectionStripe"},"optional":true}}},"PaymentCollectionStripe":{"kind":"record","fields":{"account_id":{"type":{"kind":"string"},"optional":true},"elements":{"type":{"kind":"reference","name":"PaymentCollectionStripeElements"},"optional":true},"publishable_key":{"type":{"kind":"string"},"optional":true},"return_url":{"type":{"kind":"string"},"optional":true}}},"PaymentCollectionStripeElements":{"kind":"record","fields":{"amount_money":{"type":{"kind":"reference","name":"MoneyValue"},"optional":true},"digital_wallets":{"type":{"kind":"array","element":{"kind":"string"}},"optional":true},"mode":{"type":{"kind":"string"},"optional":false},"next_step":{"type":{"kind":"string"},"optional":false},"payment_method_creation":{"type":{"kind":"string"},"optional":false},"payment_method_options":{"type":{"kind":"record","fields":{},"extra":{"kind":"unknown"}},"optional":true},"payment_method_types":{"type":{"kind":"array","element":{"kind":"string"}},"optional":false},"selectable_payment_intents":{"type":{"kind":"array","element":{"kind":"reference","name":"SelectableOrderPaymentIntent"}},"optional":true},"submit_to":{"type":{"kind":"string"},"optional":false}}},"InventoryTransferActionConflictErrorObject":{"kind":"intersection","members":[{"kind":"nonarray","value":{"kind":"intersection","members":[{"kind":"reference","name":"ErrorObject"},{"kind":"object"}]}},{"kind":"record","fields":{"code":{"type":{"kind":"string"},"optional":false},"details":{"type":{"kind":"array","element":{"kind":"reference","name":"InventoryTransferActionConflictErrorDetail"}},"optional":false},"param":{"type":{"kind":"string"},"optional":false},"type":{"type":{"kind":"string"},"optional":false},"message":{"type":{"kind":"string"},"optional":false},"doc_url":{"type":{"kind":"string"},"optional":false},"error_source":{"type":{"kind":"string"},"optional":false}}}]},"InventoryTransferActionConflictErrorDetail":{"kind":"intersection","members":[{"kind":"nonarray","value":{"kind":"intersection","members":[{"kind":"reference","name":"ErrorDetail"},{"kind":"object"}]}},{"kind":"record","fields":{"code":{"type":{"kind":"string"},"optional":false},"current_status":{"type":{"kind":"string"},"optional":false},"current_version":{"type":{"kind":"integer-string"},"optional":false},"message":{"type":{"kind":"string"},"optional":false},"param":{"type":{"kind":"string"},"optional":false},"resource_id":{"type":{"kind":"string"},"optional":true},"resource_type":{"type":{"kind":"reference","name":"ResourceType"},"optional":true},"supported_actions":{"type":{"kind":"array","element":{"kind":"string"}},"optional":false},"reason":{"type":{"kind":"string"},"optional":false}}}]},"ResourceType":{"kind":"string"}}};
/** SDK failure with outcome and recovery metadata. See RUNTIME.md#error-reference. */
export class SdkError extends Error {
    kind;
    outcome;
    retryAllowed;
    meta;
    code;
    details;
    raw;
    idempotencyKey;
    retryAfterMs;
    constructor(kind, message, outcome = 'not_sent', retryAllowed = false, meta, code, details, options, raw) {
        super(message);
        this.kind = kind;
        this.outcome = outcome;
        this.retryAllowed = retryAllowed;
        this.meta = meta;
        this.code = code;
        this.details = details;
        this.raw = raw;
        if (publicErrorDetailsCertificate && !certifies(details, publicErrorDetailsCertificate))
            this.details = undefined;
        // Native error formatting bypasses custom inspection. An own accessor keeps recovery
        // access without evaluating the private cause during rendering, including Node 22.
        if (options && 'cause' in options)
            errorCauses.set(this, options.cause);
        Object.defineProperty(this, 'cause', {
            configurable: true,
            get: () => errorCauses.get(this),
            set: (value) => errorCauses.set(this, value),
        });
        Object.defineProperty(this, 'meta', { enumerable: false });
        Object.defineProperty(this, 'raw', { enumerable: false });
        this.name = errorNames.get(new.target) ?? new.target.name;
        if (meta?.idempotencyKey !== undefined)
            this.idempotencyKey = meta.idempotencyKey;
    }
    get status() {
        return this.meta?.status;
    }
    toJSON() {
        return {
            name: this.name,
            kind: this.kind,
            message: this.message,
            outcome: this.outcome,
            retryAllowed: this.retryAllowed,
            requestId: this.meta?.requestId,
            status: this.status,
            code: this.code,
            details: this.details,
            idempotencyKey: this.idempotencyKey,
            retryAfterMs: this.retryAfterMs,
            cause: this.cause instanceof Error
                ? {
                    name: this.cause instanceof TypeError
                        ? 'TypeError'
                        : this.cause instanceof SyntaxError
                            ? 'SyntaxError'
                            : 'Error',
                    code: transportCode(this.cause),
                }
                : undefined,
            stack: this.stack,
        };
    }
    [inspectCustom]() {
        return this.toJSON();
    }
}
// Preserve the root class identity while providing both namespace values and types.
const BaseSdkError = SdkError;
export var errors;
(function (errors) {
    errors.SdkError = BaseSdkError;
    class ConnectionError extends BaseSdkError {
    }
    errors.ConnectionError = ConnectionError;
    class TimeoutError extends BaseSdkError {
    }
    errors.TimeoutError = TimeoutError;
    class AuthenticationError extends BaseSdkError {
    }
    errors.AuthenticationError = AuthenticationError;
    class ValidationError extends BaseSdkError {
    }
    errors.ValidationError = ValidationError;
    class RateLimitError extends BaseSdkError {
    }
    errors.RateLimitError = RateLimitError;
    class NotFoundError extends BaseSdkError {
    }
    errors.NotFoundError = NotFoundError;
    class ConflictError extends BaseSdkError {
    }
    errors.ConflictError = ConflictError;
    class ServerError extends BaseSdkError {
    }
    errors.ServerError = ServerError;
    class ApiError extends BaseSdkError {
    }
    errors.ApiError = ApiError;
    class ProtocolError extends BaseSdkError {
    }
    errors.ProtocolError = ProtocolError;
    class CancelledError extends BaseSdkError {
    }
    errors.CancelledError = CancelledError;
    class DeadlineError extends BaseSdkError {
    }
    errors.DeadlineError = DeadlineError;
    class DestinationError extends BaseSdkError {
    }
    errors.DestinationError = DestinationError;
})(errors || (errors = {}));
// Built-in identities survive minification; consumer subclasses retain their own names.
const errorNames = new Map([
    [SdkError, 'SdkError'],
    [errors.ConnectionError, 'ConnectionError'],
    [errors.TimeoutError, 'TimeoutError'],
    [errors.AuthenticationError, 'AuthenticationError'],
    [errors.ValidationError, 'ValidationError'],
    [errors.RateLimitError, 'RateLimitError'],
    [errors.NotFoundError, 'NotFoundError'],
    [errors.ConflictError, 'ConflictError'],
    [errors.ServerError, 'ServerError'],
    [errors.ApiError, 'ApiError'],
    [errors.ProtocolError, 'ProtocolError'],
    [errors.CancelledError, 'CancelledError'],
    [errors.DeadlineError, 'DeadlineError'],
    [errors.DestinationError, 'DestinationError'],
]);
const errorClasses = {
    transport: errors.ConnectionError,
    timeout: errors.TimeoutError,
    authentication: errors.AuthenticationError,
    validation: errors.ValidationError,
    rate_limit: errors.RateLimitError,
    not_found: errors.NotFoundError,
    conflict: errors.ConflictError,
    server: errors.ServerError,
    api: errors.ApiError,
    protocol: errors.ProtocolError,
    cancelled: errors.CancelledError,
    deadline: errors.DeadlineError,
    destination: errors.DestinationError,
};
/** Internal construction boundary; public constructors keep their existing arguments. */
export function createSdkError(...args) {
    const error = new errorClasses[args[0]](...args);
    if (typeof Error.captureStackTrace === 'function')
        Error.captureStackTrace(error, createSdkError);
    return error;
}
const webhookError = (kind, code, message) => {
    throw createSdkError(kind, message, 'not_sent', false, undefined, 'webhook_' + code);
};
function webhookHeaderValues(headers, name) {
    if (!headers || typeof headers !== 'object' || Array.isArray(headers))
        return webhookError('validation', 'invalid_input', 'Webhook headers must be Headers or a header record');
    const values = [];
    const entries = headers instanceof Headers ? headers.entries() : Object.entries(headers);
    for (const [key, value] of entries) {
        if (key.toLowerCase() !== name.toLowerCase() || value === undefined)
            continue;
        const parts = Array.isArray(value) ? value : [value];
        if (!Array.from(parts).every((part) => typeof part === 'string'))
            return webhookError('validation', 'invalid_input', 'Webhook signing header values must be strings');
        values.push(...parts);
    }
    if (!values.length || values.every((value) => !value.trim()))
        return webhookError('authentication', 'missing_header', 'Missing webhook signing header: ' + name);
    return values;
}
function webhookScalarHeader(headers, name, timestamp = false) {
    const values = webhookHeaderValues(headers, name);
    const value = values[0];
    if (values.length !== 1 || value === undefined || value.includes(','))
        return webhookError('authentication', timestamp ? 'invalid_timestamp' : 'invalid_signature', 'Webhook signing header must have exactly one value: ' + name);
    return value.trim();
}
const identityTokens = new Map();
const identityFlights = new Map();
/** Generated package wrappers supply provider configuration; no provider names live here. */
export function configuredDefaultCredentials(config, baseUrl) {
    return new AmbientCredentialProvider(config, undefined, baseUrl);
}
export function configuredWorkloadIdentityCredentials(config, options, baseUrl) {
    return new AmbientCredentialProvider(config, options, baseUrl);
}
class AmbientCredentialProvider {
    config;
    identity;
    baseUrl;
    #lastCredential;
    #invalidations = new WeakMap();
    constructor(config, identity, baseUrl) {
        this.config = config;
        this.identity = identity;
        this.baseUrl = baseUrl;
    }
    toJSON() {
        return { credentials: '[REDACTED]' };
    }
    [inspectCustom]() {
        return { credentials: '[REDACTED]' };
    }
    canInvalidate(credential = this.#lastCredential) {
        return credential !== undefined && this.#invalidations.has(credential);
    }
    invalidate(credential = this.#lastCredential) {
        if (credential)
            this.#invalidations.get(credential)?.();
    }
    async getCredential(context) {
        const env = this.config.environment;
        const prefix = this.config.workloadIdentity.envPrefix;
        const read = (suffix) => process.env[prefix + '_' + suffix] || undefined;
        const id = this.identity?.workloadIdentityId ?? read('WORKLOAD_IDENTITY_ID');
        let source = this.identity?.source ?? read('OIDC_SOURCE') ?? 'auto';
        let claims = {};
        let subject = '';
        const responseTokens = new Set();
        const clean = (value) => {
            let text = typeof value === 'string' ? value : (JSON.stringify(value) ?? '');
            for (const token of [
                subject,
                ...responseTokens,
                process.env[env.apiKey],
                process.env[env.token],
                process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN,
            ])
                if (token)
                    for (const encoded of [token, encodeURIComponent(token)])
                        text = text.split(encoded).join('[REDACTED]');
            return text
                .replace(/eyJ[A-Za-z0-9_-]*\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/g, '[REDACTED]')
                .slice(0, 2048);
        };
        const fail = (reason, description = '') => {
            const details = {
                reason,
                source: clean(source),
                workloadIdentityId: clean(id ?? ''),
                iss: clean(claims.iss),
                sub: clean(claims.sub),
                aud: clean(claims.aud),
                error_description: clean(description),
            };
            throw createSdkError('authentication', clean(JSON.stringify(details)), 'not_sent', false, undefined, reason, details);
        };
        if (!this.identity) {
            const apiKey = process.env[env.apiKey], token = process.env[env.token];
            if (apiKey && token)
                fail('ambiguous_credentials', `Set only one of ${env.apiKey} and ${env.token}`);
            if (apiKey || token) {
                this.#lastCredential = undefined;
                return { value: apiKey || token || '' };
            }
            if (!id)
                fail('no_credentials', `Set ${env.apiKey}, ${env.token}, or ${prefix}_WORKLOAD_IDENTITY_ID with ${prefix}_OIDC_TOKEN, ${prefix}_OIDC_TOKEN_FILE, or GitHub Actions permissions: id-token: write`);
        }
        if (typeof id !== 'string' || !id || /[\r\n]/.test(id))
            fail('source_unavailable', 'A workload identity ID is required');
        const base = context?.baseUrl ?? this.baseUrl;
        if (!base)
            fail('source_unavailable', 'Pass this provider to a client with a base URL');
        const url = new URL(base ?? fail('source_unavailable'));
        if (url.protocol !== 'https:' &&
            !(url.protocol === 'http:' && ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname)))
            fail('exchange_unavailable', 'Token exchange requires HTTPS or loopback');
        const audience = this.identity?.audience ?? read('OIDC_AUDIENCE') ?? url.origin;
        const scope = this.identity?.scope ?? read('OIDC_SCOPE');
        const file = read('OIDC_TOKEN_FILE');
        if (source === 'auto')
            source = read('OIDC_TOKEN')
                ? 'token'
                : file
                    ? 'token_file'
                    : process.env.GITHUB_ACTIONS === 'true'
                        ? 'github_actions'
                        : 'none';
        if (!['token', 'token_file', 'github_actions'].includes(source))
            fail('source_unavailable', 'Supported sources: token, token_file, github_actions');
        const githubUrl = process.env.ACTIONS_ID_TOKEN_REQUEST_URL;
        const githubToken = process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN;
        if (source === 'github_actions' && (!githubUrl || !githubToken))
            fail('source_unavailable', 'GitHub Actions requires permissions: id-token: write');
        const sourceKey = source === 'token'
            ? process
                .getBuiltinModule('crypto')
                .createHash('sha256')
                .update(read('OIDC_TOKEN') ?? '')
                .digest('hex')
            : source === 'github_actions'
                ? process
                    .getBuiltinModule('crypto')
                    .createHash('sha256')
                    .update(JSON.stringify([githubUrl, githubToken]))
                    .digest('hex')
                : file;
        const key = JSON.stringify([
            url.origin,
            this.config.workloadIdentity.tokenPath,
            this.config.workloadIdentity.credentialParameter,
            prefix,
            id,
            audience,
            scope ?? '',
            source,
            sourceKey,
        ]);
        // Each resolution retains its own partition and rejected-token comparison.
        const credential = (entry) => {
            const result = { value: entry.value, expiresAt: entry.expiresAt };
            this.#invalidations.set(result, () => {
                if (identityTokens.get(key)?.value === entry.value)
                    identityTokens.delete(key);
            });
            this.#lastCredential = result;
            return result;
        };
        const cached = identityTokens.get(key);
        const remaining = cached ? cached.expiresAt.getTime() - Date.now() : 0;
        if (cached && remaining > 30000 && remaining >= Math.max(60000, cached.lifetime * 0.2)) {
            return credential(cached);
        }
        const existing = identityFlights.get(key);
        if (existing) {
            const value = await existing;
            return credential(value);
        }
        const exchange = async () => {
            const deadline = context?.deadline ?? performance.now() + 30000;
            if (source === 'github_actions') {
                let endpoint;
                try {
                    endpoint = new URL(githubUrl ?? '');
                    if (endpoint.username ||
                        endpoint.password ||
                        endpoint.hash ||
                        (endpoint.protocol !== 'https:' &&
                            !(endpoint.protocol === 'http:' &&
                                ['localhost', '127.0.0.1', '[::1]'].includes(endpoint.hostname))))
                        throw new Error();
                    endpoint.searchParams.set('audience', audience);
                }
                catch {
                    return fail('source_unavailable', 'GitHub Actions identity endpoint requires HTTPS or loopback');
                }
                const controller = new AbortController();
                const abort = () => controller.abort();
                context?.signal?.addEventListener('abort', abort, { once: true });
                if (context?.signal?.aborted || deadline <= performance.now())
                    controller.abort();
                const timer = schedule(abort, Math.max(0, deadline - performance.now()));
                try {
                    const response = await abortable((context?.transport ?? fetch)(endpoint, {
                        method: 'GET',
                        headers: { authorization: 'Bearer ' + githubToken, accept: 'application/json' },
                        redirect: 'manual',
                        signal: controller.signal,
                    }), controller.signal);
                    if (response.status !== 200)
                        return fail('subject_token_request_failed', 'GitHub Actions identity request failed; check permissions: id-token: write');
                    const payload = JSON.parse(await abortable(response.text(), controller.signal));
                    if (!payload ||
                        typeof payload !== 'object' ||
                        !('value' in payload) ||
                        typeof payload.value !== 'string')
                        return fail('subject_token_request_failed', 'Invalid GitHub Actions identity response');
                    subject = payload.value;
                }
                catch {
                    return fail('subject_token_request_failed', 'GitHub Actions identity request failed; check permissions: id-token: write');
                }
                finally {
                    timer.cancel();
                    context?.signal?.removeEventListener('abort', abort);
                }
            }
            else
                try {
                    subject =
                        source === 'token'
                            ? (read('OIDC_TOKEN') ?? '')
                            : file
                                ? (await process.getBuiltinModule('fs/promises').readFile(file, 'utf8')).trim()
                                : '';
                }
                catch {
                    fail('subject_token_request_failed', 'Cannot read the configured token file');
                }
            if (!subject)
                fail('source_unavailable', 'The selected token source is empty');
            try {
                const parts = subject.split('.');
                if (parts.length !== 3 ||
                    parts[1] === undefined ||
                    !parts.every((part) => /^[A-Za-z0-9_-]+$/.test(part)))
                    throw new Error();
                const payload = JSON.parse(Buffer.from(parts[1] ?? '', 'base64url').toString('utf8'));
                if (!payload || typeof payload !== 'object' || Array.isArray(payload))
                    throw new Error();
                // The parsed payload has passed the non-array object guard.
                claims = payload;
            }
            catch {
                fail('audience_mismatch', 'Subject token must be a JWT with aud and exp');
            }
            if (!(claims.aud === audience ||
                (Array.isArray(claims.aud) && claims.aud.includes(audience))) ||
                typeof claims.exp !== 'number' ||
                !Number.isFinite(claims.exp) ||
                claims.exp * 1000 <= Date.now())
                fail('audience_mismatch', 'Subject token audience differs or expiry has passed');
            const form = new URLSearchParams({
                grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
                subject_token: subject,
                subject_token_type: 'urn:ietf:params:oauth:token-type:jwt',
                requested_token_type: 'urn:ietf:params:oauth:token-type:access_token',
                [this.config.workloadIdentity.credentialParameter]: id ?? fail('source_unavailable'),
                ...(scope === undefined ? {} : { scope }),
            });
            for (let attempt = 0; attempt < 3; attempt++) {
                const remaining = deadline - performance.now();
                if (remaining <= 0)
                    fail('exchange_unavailable', 'Exchange deadline exceeded');
                const controller = new AbortController();
                const abort = () => controller.abort();
                context?.signal?.addEventListener('abort', abort, { once: true });
                if (context?.signal?.aborted)
                    controller.abort();
                const timer = schedule(abort, remaining);
                let response, body;
                try {
                    response = await abortable((context?.transport ?? fetch)(new URL(this.config.workloadIdentity.tokenPath, url.origin), {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/x-www-form-urlencoded',
                            accept: 'application/json',
                        },
                        body: form.toString(),
                        redirect: 'manual',
                        signal: controller.signal,
                    }), controller.signal);
                    const raw = await abortable(response.text(), controller.signal);
                    try {
                        body = JSON.parse(raw);
                    }
                    catch {
                        body = undefined;
                    }
                }
                catch {
                    return fail('exchange_unavailable', 'Token exchange transport failed');
                }
                finally {
                    timer.cancel();
                    context?.signal?.removeEventListener('abort', abort);
                }
                const data = body && typeof body === 'object' && !Array.isArray(body)
                    ? body
                    : {};
                for (const [name, value] of Object.entries(data))
                    if ((name === 'token' || name.endsWith('_token')) && typeof value === 'string' && value)
                        responseTokens.add(value);
                const description = typeof data.error_description === 'string' ? data.error_description : '';
                if (response.status === 429 || response.status >= 500) {
                    const instruction = response.headers.get('retry-after');
                    const wait = instruction
                        ? /^\d+(\.\d+)?$/.test(instruction)
                            ? Number(instruction) * 1000
                            : Date.parse(instruction) - Date.now()
                        : 100 * 2 ** attempt;
                    const pause = Number.isFinite(wait) ? Math.max(0, wait) : 100 * 2 ** attempt;
                    if (attempt === 2 || performance.now() + pause >= deadline)
                        fail('exchange_unavailable', description);
                    await delay(pause, context?.signal);
                    continue;
                }
                if (response.status !== 200)
                    fail('exchange_rejected', description);
                if (typeof data.access_token !== 'string' ||
                    !data.access_token ||
                    /[\r\n]/.test(data.access_token) ||
                    data.token_type !== 'Bearer' ||
                    data.issued_token_type !== 'urn:ietf:params:oauth:token-type:access_token' ||
                    typeof data.expires_in !== 'number' ||
                    !Number.isFinite(data.expires_in) ||
                    data.expires_in <= 30 ||
                    (data.scope !== undefined && typeof data.scope !== 'string'))
                    fail('exchange_rejected', 'Invalid token exchange response');
                // Subject expiry is an upper bound even if the server or local clock disagrees.
                const lifetime = Math.min(Number(data.expires_in) * 1000, Number(claims.exp) * 1000 - Date.now());
                if (lifetime <= 30000)
                    fail('exchange_rejected', 'Exchanged token has at most 30 seconds remaining');
                const token = {
                    value: String(data.access_token),
                    expiresAt: new Date(Date.now() + lifetime),
                    lifetime,
                };
                identityTokens.set(key, token);
                return token;
            }
            return fail('exchange_unavailable');
        };
        const flight = exchange()
            .catch((error) => {
            if (cached &&
                cached.expiresAt.getTime() - Date.now() > 30000 &&
                error instanceof SdkError &&
                error.code === 'exchange_unavailable')
                return cached;
            throw error;
        })
            .finally(() => {
            if (identityFlights.get(key) === flight)
                identityFlights.delete(key);
        });
        identityFlights.set(key, flight);
        const value = await flight;
        return credential(value);
    }
}
async function resolveCredential(input, message, rejectNewlines = true, context, providers) {
    let value = input;
    if (typeof input === 'object' && input !== null && 'getCredential' in input) {
        try {
            const credential = await (input instanceof AmbientCredentialProvider
                ? input.getCredential(context)
                : input.getCredential());
            if (input instanceof AmbientCredentialProvider) {
                if (typeof credential === 'object' &&
                    credential !== null &&
                    input.canInvalidate(credential))
                    providers?.set(input, () => input.invalidate(credential));
            }
            else {
                const provider = input;
                if (typeof provider.invalidate === 'function')
                    providers?.set(provider, () => provider.invalidate?.());
            }
            value =
                typeof credential === 'object' && credential !== null && 'value' in credential
                    ? credential.value
                    : undefined;
        }
        catch (error) {
            if (input instanceof AmbientCredentialProvider && error instanceof SdkError)
                throw error;
            // Provider exceptions may contain credentials, including in their causes.
            throw createSdkError('authentication', 'Credential provider failed');
        }
    }
    if (typeof value !== 'string' || !value || (rejectNewlines && /[\r\n]/.test(value)))
        throw createSdkError('authentication', message);
    return value;
}
// Node truncates delays above 2^31-1 to one millisecond. Keep the actual
// monotonic deadline and schedule bounded chunks, including for retry waits.
function schedule(callback, duration, unref = false) {
    const deadline = performance.now() + duration;
    let timer;
    const tick = () => {
        const remaining = deadline - performance.now();
        if (remaining <= 0)
            callback();
        else {
            timer = setTimeout(tick, Math.min(2147483647, Math.ceil(remaining)));
            if (unref)
                timer.unref();
        }
    };
    timer = setTimeout(tick, Math.min(2147483647, Math.max(0, Math.ceil(duration))));
    if (unref)
        timer.unref();
    return { cancel: () => clearTimeout(timer) };
}
function inspectedMetadata(meta) {
    return {
        status: meta.status,
        requestId: meta.requestId,
        idempotencyKey: meta.idempotencyKey,
        attempts: meta.attempts,
        durationMs: meta.durationMs,
    };
}
const streamConnections = new WeakMap();
/** Leave an unconsumed default SSE socket unreferenced; iteration retains it. */
async function streamFetch(url, init) {
    const { Readable, pipeline } = process.getBuiltinModule('stream');
    const { createGunzip, createInflate, createBrotliDecompress } = process.getBuiltinModule('zlib');
    const transport = url.protocol === 'https:'
        ? process.getBuiltinModule('https')
        : process.getBuiltinModule('http');
    return new Promise((resolve, reject) => {
        const request = transport.request(url, { method: init.method, headers: init.headers, signal: init.signal }, (incoming) => {
            incoming.socket.unref();
            const headers = new Headers();
            for (const [name, value] of Object.entries(incoming.headers))
                for (const entry of Array.isArray(value) ? value : value === undefined ? [] : [value])
                    headers.append(name, entry);
            const status = incoming.statusCode;
            if (status === undefined || status < 200 || status > 599) {
                incoming.destroy();
                reject(new Error('Invalid HTTP response status'));
                return;
            }
            // Match fetch decompression while retaining direct ownership of the SSE socket.
            const decoders = [];
            for (const encoding of (headers.get('content-encoding') ?? '').split(',').reverse()) {
                switch (encoding.trim().toLowerCase()) {
                    case '':
                    case 'identity':
                        break;
                    case 'gzip':
                    case 'x-gzip':
                        decoders.push(createGunzip());
                        break;
                    case 'deflate':
                        decoders.push(createInflate());
                        break;
                    case 'br':
                        decoders.push(createBrotliDecompress());
                        break;
                    default:
                        incoming.destroy();
                        reject(new Error('Unsupported response content encoding'));
                        return;
                }
            }
            const body = decoders.at(-1) ?? incoming;
            if (decoders.length)
                pipeline([incoming, ...decoders], () => { });
            const response = new Response([204, 205, 304].includes(status)
                ? null
                : Readable.toWeb(body, {
                    strategy: { highWaterMark: 1, size: (chunk) => chunk.byteLength },
                }), { status, headers });
            streamConnections.set(response, () => incoming.socket?.ref());
            resolve(response);
        });
        request.on('error', reject);
        request.end(init.body);
    });
}
/** A single-consumer stream. Breaking iteration releases the response connection. */
export class EventStream {
    reader;
    meta;
    settings;
    decodeEvent;
    released;
    closed = false;
    started = false;
    failure;
    lifetime;
    unconsumed;
    abort = () => {
        this.failure = createSdkError('cancelled', 'Stream cancelled', 'response', false, this.meta);
        void this.close();
    };
    constructor(reader, meta, settings, decodeEvent = (_event, data) => data, released = () => { }) {
        this.reader = reader;
        this.meta = meta;
        this.settings = settings;
        this.decodeEvent = decodeEvent;
        this.released = released;
        this.unconsumed = schedule(() => {
            this.failure = createSdkError('deadline', 'Unconsumed stream idle timeout exceeded', 'response', false, this.meta);
            void this.close();
        }, settings.idleTimeoutMs, true);
        settings.signal?.addEventListener('abort', this.abort, { once: true });
        if (settings.signal?.aborted)
            this.abort();
        if (settings.lifetimeMs)
            this.lifetime = schedule(() => {
                this.failure = createSdkError('deadline', 'Stream lifetime exceeded', 'response', false, this.meta);
                void this.close();
            }, settings.lifetimeMs, true);
    }
    async close() {
        if (this.closed)
            return;
        this.closed = true;
        this.lifetime?.cancel();
        this.unconsumed?.cancel();
        this.settings.signal?.removeEventListener('abort', this.abort);
        this.released();
        await this.reader.cancel().catch(() => { });
    }
    [inspectCustom]() {
        return { meta: inspectedMetadata(this.meta), closed: this.closed };
    }
    async *[Symbol.asyncIterator]() {
        if (this.started)
            throw createSdkError('validation', 'A stream can only be consumed once');
        this.started = true;
        this.unconsumed?.cancel();
        this.settings.retainConnection?.();
        const decoder = new TextDecoder('utf-8', { fatal: true, ignoreBOM: true });
        let firstCharacter = true;
        let line = '', data = '', event = '', id = '', skipLF = false, bytes = 0;
        let retry;
        let position = 0;
        const consumeLine = () => {
            if (line === '') {
                let decoded;
                if (data !== '') {
                    position++;
                    try {
                        decoded = this.decodeEvent(event || 'message', data.slice(0, -1));
                    }
                    catch (cause) {
                        throw createSdkError('protocol', `Invalid SSE event payload at event ${position}; inspect details.eventId and details.position`, 'response', false, this.meta, 'sse_invalid_event', { eventId: id, position }, { cause });
                    }
                }
                const frame = data === ''
                    ? undefined
                    : {
                        event: event || 'message',
                        id,
                        rawData: data.slice(0, -1),
                        data: decoded,
                        ...(retry !== undefined ? { retry } : {}),
                    };
                if (frame)
                    Object.defineProperty(frame, inspectCustom, {
                        value: () => ({ event: frame.event }),
                    });
                data = '';
                event = '';
                bytes = 0;
                return frame;
            }
            if (!line.startsWith(':')) {
                const colon = line.indexOf(':');
                const field = colon < 0 ? line : line.slice(0, colon);
                let value = colon < 0 ? '' : line.slice(colon + 1);
                if (value.startsWith(' '))
                    value = value.slice(1);
                if (field === 'data')
                    data += value + '\n';
                else if (field === 'event')
                    event = value;
                else if (field === 'id' && !value.includes('\0'))
                    id = value;
                else if (field === 'retry' && /^\d+$/.test(value) && Number.isSafeInteger(Number(value)))
                    retry = Number(value);
            }
            line = '';
            return undefined;
        };
        try {
            while (!this.closed) {
                let timer;
                const next = await Promise.race([
                    this.reader.read(),
                    new Promise((_resolve, reject) => {
                        timer = schedule(() => reject(createSdkError('deadline', 'Stream idle timeout exceeded', 'response', false, this.meta)), this.settings.idleTimeoutMs);
                    }),
                ]).finally(() => timer?.cancel());
                if (this.failure)
                    throw this.failure;
                if (next.done) {
                    decoder.decode();
                    break;
                }
                const text = decoder.decode(next.value, { stream: true });
                for (const character of text) {
                    if (this.closed)
                        break;
                    if (firstCharacter) {
                        firstCharacter = false;
                        if (character === '\ufeff') {
                            bytes = 3;
                            if (bytes > this.settings.maxEventBytes)
                                throw createSdkError('protocol', 'SSE event exceeds configured size limit', 'response');
                            continue;
                        }
                    }
                    if (skipLF) {
                        skipLF = false;
                        if (character === '\n')
                            continue;
                    }
                    if (character === '\r' || character === '\n') {
                        if (++bytes > this.settings.maxEventBytes)
                            throw createSdkError('protocol', 'SSE event exceeds configured size limit', 'response', false, this.meta);
                        skipLF = character === '\r';
                        const frame = consumeLine();
                        if (frame)
                            yield frame;
                    }
                    else {
                        bytes += Buffer.byteLength(character);
                        if (bytes > this.settings.maxEventBytes)
                            throw createSdkError('protocol', 'SSE event exceeds configured size limit', 'response', false, this.meta);
                        line += character;
                    }
                }
            }
            if (this.failure)
                throw this.failure;
        }
        catch (cause) {
            if (cause instanceof SdkError && cause.kind !== 'validation')
                throw cause;
            throw createSdkError('protocol', 'Invalid or interrupted SSE stream', 'response', false, this.meta, undefined, undefined, { cause });
        }
        finally {
            await this.close();
        }
    }
}
const validationFailures = new WeakMap();
const bad = (path, reason) => {
    const message = `${path}: ${reason}`;
    const error = createSdkError('validation', message);
    validationFailures.set(error, message);
    throw error;
};
// Unlike $, the lookahead requires the true end, including after line terminators.
const exactInteger = /^-?(?:0|[1-9]\d*)(?![\s\S])/;
const exactDecimal = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;
class RawNumber {
    value;
    constructor(value) {
        this.value = value;
    }
}
// JSON numeric meaning, established by the wire parser or a positive codec declaration.
class ParsedNumber {
    value;
    constructor(value) {
        this.value = value;
    }
}
/** An explicit JSON number for inputs whose schema also permits JSON strings. */
export class ExactNumber extends ParsedNumber {
    constructor(value) {
        if (typeof value !== 'string' || !exactDecimal.test(value))
            bad('ExactNumber', 'expected a JSON number token');
        super(value);
        Object.freeze(this);
    }
}
/** Parse JSON without rounding integers or decimal tokens. Unknown numeric tokens remain exact strings. */
export function parseExact(text) {
    return parseJson(text);
}
function parseJson(text, preserveNumbers = false) {
    let encoded = '';
    let quoted = false;
    let escaped = false;
    for (let i = 0; i < text.length;) {
        const c = text[i];
        if (quoted) {
            encoded += c;
            i++;
            if (escaped)
                escaped = false;
            else if (c === '\\')
                escaped = true;
            else if (c === '"')
                quoted = false;
            continue;
        }
        if (c === '"') {
            quoted = true;
            encoded += c;
            i++;
            continue;
        }
        if (c === '-' || /[0-9]/.test(c)) {
            const match = text.slice(i).match(/^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/);
            if (!match)
                throw new SyntaxError('Invalid JSON number');
            const token = match[0];
            const n = Number(token);
            encoded +=
                exactInteger.test(token) && Number.isSafeInteger(n) ? token : JSON.stringify(token);
            i += token.length;
            continue;
        }
        encoded += c;
        i++;
    }
    // Validate original grammar as well: quoting tokens must not repair malformed JSON.
    const original = JSON.parse(text);
    const parsed = JSON.parse(encoded, (key, value) => {
        if (/[\uD800-\uDFFF]/u.test(key) ||
            (typeof value === 'string' && /[\uD800-\uDFFF]/u.test(value)))
            throw new SyntaxError('JSON strings must contain well-formed Unicode');
        return value;
    });
    // The original tree supplies only token kinds, never rounded numeric values.
    const mark = (value, source) => {
        if (typeof source === 'number' && typeof value === 'string')
            return new ParsedNumber(value);
        if (value && typeof value === 'object')
            for (const key of Object.keys(value))
                value[key] = mark(value[key], source[key]);
        return value;
    };
    return preserveNumbers ? mark(parsed, original) : parsed;
}
function plainNumbers(value) {
    if (value instanceof ParsedNumber)
        return value.value;
    if (value && typeof value === 'object')
        for (const key of Object.keys(value))
            value[key] = plainNumbers(value[key]);
    return value;
}
/** Expand integral decimal/exponent tokens exactly, with bounded exponent expansion. */
function integerToken(token, path) {
    if (exactInteger.test(token))
        return token;
    const [coefficient, exponent = '0'] = token.toLowerCase().split('e');
    const fraction = coefficient.split('.')[1]?.length ?? 0;
    let digits = coefficient.replace(/^-/, '').replace('.', '').replace(/^0+/, '');
    if (!digits)
        return '0';
    const shift = Number(exponent) - fraction;
    if (shift < 0) {
        if (-shift >= digits.length || /[1-9]/.test(digits.slice(shift)))
            return bad(path, 'expected an integral JSON number');
        digits = digits.slice(0, shift);
    }
    else {
        if (shift > 10000)
            return bad(path, 'integer exponent expansion exceeds 10000 digits');
        digits += '0'.repeat(shift);
    }
    return (token.startsWith('-') ? '-' : '') + digits;
}
function denseArray(value, path) {
    for (let i = 0; i < value.length; i++)
        if (!Object.hasOwn(value, i))
            bad(`${path}[${i}]`, 'sparse arrays are unsupported');
}
function encode(value, depth = 0) {
    if (depth > 256)
        bad('value', 'value exceeds the supported nesting depth or contains a cycle');
    if (value instanceof CompiledModel)
        return encode(value.toJSON(), depth + 1);
    if (value instanceof RawNumber)
        return value.value;
    if (value === null)
        return 'null';
    if (typeof value === 'string' || typeof value === 'boolean')
        return JSON.stringify(value);
    if (typeof value === 'number') {
        if (!Number.isFinite(value))
            bad('value', 'expected a finite number');
        return String(value);
    }
    if (Array.isArray(value)) {
        denseArray(value, 'value');
        return '[' + value.map((v) => encode(v, depth + 1)).join(',') + ']';
    }
    if (value && typeof value === 'object')
        return ('{' +
            Object.entries(value)
                .filter(([, v]) => v !== undefined)
                .map(([k, v]) => JSON.stringify(k) + ':' + encode(v, depth + 1))
                .join(',') +
            '}');
    return bad('value', 'unsupported JSON value');
}
/** Merge independently validated representations without discarding typed numeric tokens. */
function combine(left, right, path, source) {
    if (left instanceof ParsedNumber || right instanceof ParsedNumber) {
        const token = left instanceof ParsedNumber ? left : right;
        const other = left instanceof ParsedNumber ? right : left;
        if (typeof other === 'number' && Number.isFinite(other) && other === Number(token.value))
            return other;
        const text = other instanceof ParsedNumber || other instanceof RawNumber ? other.value : String(other);
        if (!exactDecimal.test(text) || compareDecimal(token.value, text) !== 0)
            bad(path, 'alternatives have incompatible numeric representations');
        return other instanceof RawNumber ? new RawNumber(token.value) : other;
    }
    if (left instanceof RawNumber || right instanceof RawNumber) {
        const token = left instanceof RawNumber ? left : right;
        const other = left instanceof RawNumber ? right : left;
        if (source instanceof ParsedNumber &&
            token.value === source.value &&
            typeof other === 'number' &&
            Number.isFinite(other) &&
            other === Number(source.value))
            return token;
        const text = other instanceof RawNumber ? other.value : String(other);
        if (!exactDecimal.test(text) || compareDecimal(token.value, text) !== 0)
            bad(path, 'alternatives have incompatible numeric representations');
        return token;
    }
    // A matching exact branch retains precision when another branch projects
    // this same JSON token to a native number. Independent constraints ran first.
    if (source instanceof ParsedNumber) {
        const exact = typeof left === 'string' ? left : typeof right === 'string' ? right : undefined;
        const native = typeof left === 'number' ? left : typeof right === 'number' ? right : undefined;
        if (exact !== undefined &&
            native !== undefined &&
            Number.isFinite(native) &&
            exactDecimal.test(exact) &&
            compareDecimal(source.value, exact) === 0 &&
            native === Number(source.value))
            return exact;
    }
    // Decoding can unwrap both numeric tokens into SDK strings before a later
    // branch is merged. The shared source view proves these are JSON numbers.
    if (source instanceof ParsedNumber &&
        typeof left === 'string' &&
        typeof right === 'string' &&
        left !== right) {
        if (!exactDecimal.test(left) ||
            !exactDecimal.test(right) ||
            compareDecimal(source.value, left) !== 0 ||
            compareDecimal(source.value, right) !== 0)
            bad(path, 'alternatives have incompatible numeric representations');
        return source.value;
    }
    const childSource = (key) => source && typeof source === 'object' && Object.hasOwn(source, key)
        ? source[key]
        : undefined;
    if (Array.isArray(left) && Array.isArray(right))
        return left.map((v, i) => combine(v, right[i], `${path}[${i}]`, childSource(String(i))));
    if (left && right && typeof left === 'object' && typeof right === 'object')
        return Object.fromEntries([...new Set([...Object.keys(left), ...Object.keys(right)])].map((key) => [
            key,
            Object.hasOwn(left, key) && Object.hasOwn(right, key)
                ? combine(left[key], right[key], `${path}.${key}`, childSource(key))
                : Object.hasOwn(left, key)
                    ? left[key]
                    : right[key],
        ]));
    if (left === right)
        return right;
    if (typeof left === 'number' && typeof right === 'string' && String(left) === right)
        return right;
    if (typeof right === 'number' && typeof left === 'string' && String(right) === left)
        return left;
    return bad(path, 'alternatives have incompatible representations');
}
// Compare finite decimal tokens without floating-point conversion or expanding
// exponents. Bounds originate in the contract; even enormous caller exponents
// can be ordered against them with bounded memory.
function compareDecimal(left, right) {
    const parts = (value) => {
        const [coefficient, exponent = '0'] = value.toLowerCase().split('e');
        const negative = coefficient.startsWith('-');
        const unsigned = coefficient.replace(/^-/, '');
        const fraction = unsigned.split('.')[1]?.length ?? 0;
        const digits = unsigned.replace('.', '').replace(/^0+/, '');
        const power = Math.max(-1e9, Math.min(1e9, Number(exponent))) - fraction + digits.length;
        return { sign: digits ? (negative ? -1 : 1) : 0, digits, power };
    };
    const a = parts(left), b = parts(right);
    if (a.sign !== b.sign)
        return Math.sign(a.sign - b.sign);
    if (!a.sign)
        return 0;
    if (a.power !== b.power)
        return a.sign * Math.sign(a.power - b.power);
    const size = Math.max(a.digits.length, b.digits.length);
    const x = a.digits.padEnd(size, '0'), y = b.digits.padEnd(size, '0');
    return a.sign * (x < y ? -1 : x > y ? 1 : 0);
}
// Collision-free JSON value identity: numeric spellings and object key order
// are immaterial, while arrays and JSON strings retain their own identity.
function jsonIdentity(value, depth = 0) {
    if (depth > 256)
        return bad('value', 'JSON equality exceeds nesting limit or contains a cycle');
    if (value instanceof ParsedNumber || value instanceof RawNumber || typeof value === 'number') {
        const text = typeof value === 'number' ? String(value) : value.value;
        const [coefficient = '', exponent = '0'] = text.toLowerCase().split('e');
        const fraction = coefficient.split('.')[1]?.length ?? 0;
        const digits = coefficient.replace(/[-.]/g, '').replace(/^0+/, '');
        const trimmed = digits.replace(/0+$/, '');
        if (!trimmed)
            return '["number","0"]';
        return JSON.stringify([
            'number',
            coefficient.startsWith('-') ? '-' + trimmed : trimmed,
            String(BigInt(exponent) - BigInt(fraction) + BigInt(digits.length - trimmed.length)),
        ]);
    }
    if (Array.isArray(value))
        return JSON.stringify(['array', value.map((child) => jsonIdentity(child, depth + 1))]);
    if (value && typeof value === 'object')
        return JSON.stringify([
            'object',
            Object.entries(value)
                .filter(([, child]) => child !== undefined)
                .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
                .map(([key, child]) => [key, jsonIdentity(child, depth + 1)]),
        ]);
    return JSON.stringify([typeof value, value]);
}
function decimalMultiple(token, divisor, path) {
    const parts = (text) => {
        const [coefficient = '', exponent = '0'] = text.toLowerCase().split('e');
        const fraction = coefficient.split('.')[1]?.length ?? 0;
        const digits = coefficient.replace(/[-.]/g, '').replace(/^0+/, '');
        const trimmed = digits.replace(/0+$/, '');
        return {
            digits: trimmed,
            power: Math.max(-1e9, Math.min(1e9, Number(exponent))) - fraction + digits.length - trimmed.length,
        };
    };
    const a = parts(token), b = parts(divisor);
    if (!a.digits)
        return true;
    const shift = a.power - b.power;
    if (shift < 0)
        return false;
    if (b.digits === '1')
        return true;
    if (shift > 10000)
        return bad(path, 'multipleOf exponent expansion exceeds 10000 digits');
    return BigInt(a.digits + '0'.repeat(shift)) % BigInt(b.digits) === 0n;
}
function numericConstraints(token, s, path, full = true) {
    const range = s.range;
    if (range && (compareDecimal(token, range[0]) < 0 || compareDecimal(token, range[1]) > 0))
        bad(path, 'value is outside the declared integer format range');
    if (!full)
        return;
    if (s.checks.multipleOf !== undefined &&
        !decimalMultiple(token, String(s.checks.multipleOf), path))
        bad(path, 'value violates multipleOf');
    for (const keyword of ['minimum', 'maximum', 'exclusiveMinimum', 'exclusiveMaximum']) {
        if (s.checks[keyword] === undefined)
            continue;
        const order = compareDecimal(token, String(s.checks[keyword]));
        if ((keyword === 'minimum' && order < 0) ||
            (keyword === 'maximum' && order > 0) ||
            (keyword === 'exclusiveMinimum' && order <= 0) ||
            (keyword === 'exclusiveMaximum' && order >= 0))
            bad(path, 'value violates ' + keyword);
    }
}
export function normalize(value, s, path = 'input', response = false, redactFields = [], matching = false, definitions = {}, depth = 0, validateConstraints = true, allowUnknownResponseFields = false) {
    return executeCodec(value, compileCodec(schemaWithDefinitions(s, definitions)), {
        ...codecMode(response, matching),
        path,
        redactFields,
        depth,
        validateConstraints,
        allowUnknownResponseFields,
    });
}
function schemaWithDefinitions(schema, definitions) {
    return Object.keys(definitions).length && !schema['x-sdk-definitions']
        ? { ...schema, 'x-sdk-definitions': definitions }
        : schema;
}
function codecMode(response, matching) {
    return matching
        ? { mode: 'match', direction: response ? 'response' : 'request' }
        : { mode: response ? 'response' : 'request' };
}
/** Keep branch selection identical during numeric interpretation and validation. */
function selectAlternatives(value, branches, oneOf, tag, nullableAlternative, context, matches) {
    const response = (context.direction ?? context.mode) === 'response';
    const matching = context.mode === 'match';
    const path = context.path ?? 'input';
    let tolerateUnknownFields = context.allowUnknownResponseFields ?? false;
    let selected;
    const failures = new Map();
    const match = (branch, allowUnknownFields) => {
        const result = matches(branch, allowUnknownFields);
        if (typeof result === 'string')
            failures.set(branch, result);
        return result === true;
    };
    if (nullableAlternative !== undefined && response && !matching) {
        const branch = branches[value === null ? 1 - nullableAlternative : nullableAlternative];
        if (!branch)
            throw new Error('Invalid nullable alternative policy');
        return { selected: [branch], tolerateUnknownFields: true };
    }
    if (oneOf && tag) {
        if (!value ||
            typeof value !== 'object' ||
            Array.isArray(value) ||
            !Object.hasOwn(value, tag) ||
            typeof value[tag] !== 'string')
            bad(path, 'expected a string discriminator');
        selected = branches.filter((branch) => (branch.tagValues ?? branch.fields?.[tag]?.members)?.some((member) => member === value[tag]));
    }
    else {
        // anyOf response selection always uses the compatible set. Computing the
        // discarded closed set first doubles work at each recursive anyOf edge.
        selected =
            !oneOf && response && (!matching || tolerateUnknownFields)
                ? []
                : branches.filter((branch) => match(branch, false));
        // Prefer closed oneOf matches before tolerating new response fields. anyOf
        // retains every compatible branch's declared numeric representations.
        if ((!oneOf || !selected.length) && response && (!matching || tolerateUnknownFields)) {
            const compatible = branches.filter((branch) => match(branch, true));
            if (!oneOf || compatible.length === 1) {
                selected = compatible;
                tolerateUnknownFields = true;
            }
        }
    }
    if (!selected.length && response && !matching) {
        if (branches.every((branch) => branch.objectOnlyAlternative) &&
            (!value || typeof value !== 'object' || Array.isArray(value)))
            bad(path, 'expected an object response alternative');
    }
    else if (!selected.length || (oneOf && selected.length !== 1)) {
        bad(path, oneOf
            ? 'value must match exactly one alternative' +
                ': ' +
                branches
                    .slice(0, 8)
                    .map((branch, index) => `alternative ${index + 1}: ${selected.includes(branch) ? 'matched' : (failures.get(branch) ?? 'discriminator did not match').slice(0, 180)}`)
                    .join('; ') +
                (branches.length > 8 ? '; additional alternatives omitted' : '')
            : 'value must match at least one alternative');
    }
    return { selected, tolerateUnknownFields };
}
function conditionalBranch(value, { codec, definitions }, context) {
    if (!codec.when)
        return undefined;
    let matched = true;
    try {
        executeNode(value, codec.when.test, {
            ...codecMode((context.direction ?? context.mode) === 'response', true),
            path: context.path ?? 'input',
            depth: (context.depth ?? 0) + 1,
            definitions,
            allowUnknownResponseFields: false,
        });
    }
    catch (error) {
        if (!(error instanceof SdkError) || error.kind !== 'validation')
            throw error;
        matched = false;
    }
    return matched ? codec.when.then : codec.when.else;
}
const numericSearchLimit = 256;
/** Resolve circular dependencies only after ordinary union selection stalls.
 * A hypothesis contributes numeric meaning only if its branches are selected
 * by the original unions, including their oneOf and response-tolerance policies.
 */
function jointNumericView(value, unions, context) {
    if (unions.length < 2)
        return undefined;
    const convertible = (child, depth = 0) => {
        if (depth > 256)
            bad(context.path ?? 'input', 'value exceeds supported nesting depth or contains a cycle');
        if (typeof child === 'bigint')
            return true;
        if (typeof child === 'string')
            return exactDecimal.test(child);
        if (child instanceof ParsedNumber || child instanceof RawNumber)
            return false;
        if (child instanceof CompiledModel)
            child = modelInputs.get(child) ?? child.toJSON();
        return Boolean(child &&
            typeof child === 'object' &&
            Object.values(child).some((value) => convertible(value, depth + 1)));
    };
    if (!convertible(value))
        return undefined;
    const path = context.path ?? 'input';
    // An explicitly string-valued field cannot change under a numeric hypothesis.
    // Reuse full validation for these fields to prune incompatible literal tags.
    const choices = unions.map(({ codec, definitions, branches }) => branches.filter((branch) => {
        if ((branches === codec.exactlyOne && codec.tag) || !value || typeof value !== 'object')
            return true;
        try {
            for (const [key, field] of Object.entries(branch.fields ?? {}))
                if (field.value.kind === 'string' && Object.hasOwn(value, key))
                    executeNode(value[key], field, {
                        ...codecMode((context.direction ?? context.mode) === 'response', true),
                        definitions: branch.definitions ?? codec.definitions ?? definitions,
                        path: `${path}.${key}`,
                        depth: (context.depth ?? 0) + 1,
                    });
            return true;
        }
        catch (error) {
            if (error instanceof SdkError && error.kind === 'validation')
                return false;
            throw error;
        }
    }));
    function* groups(branches, multiple, start = 0, prefix = []) {
        for (let i = start; i < branches.length; i++) {
            const branch = branches[i];
            if (!branch)
                continue;
            const selected = [...prefix, branch];
            yield selected;
            if (multiple)
                yield* groups(branches, true, i + 1, selected);
        }
    }
    const chosen = [];
    const search = (index) => {
        const scope = unions[index];
        if (scope) {
            for (const branches of groups(choices[index] ?? [], scope.branches === scope.codec.some)) {
                chosen.push({ scope, branches });
                const found = search(index + 1);
                chosen.pop();
                if (found)
                    return found;
            }
            return undefined;
        }
        const remaining = context.search.remaining.get(path) ?? numericSearchLimit;
        context.search.remaining.set(path, remaining - 1);
        if (remaining <= 0) {
            context.search.exhausted = true;
            bad(path, 'numeric interpretation exceeds 256 alternative combinations');
        }
        try {
            const candidate = numericView(value, chosen.flatMap(({ scope, branches }) => branches.map((codec) => ({ codec, definitions: scope.definitions }))), { ...context, depth: (context.depth ?? 0) + 1 });
            if (!numericViewChanged(value, candidate))
                return undefined;
            for (const { scope, branches } of chosen) {
                const branchContext = {
                    ...codecMode((context.direction ?? context.mode) === 'response', true),
                    path: context.path ?? 'input',
                    definitions: scope.definitions,
                    depth: (context.depth ?? 0) + 1,
                };
                const { selected } = selectAlternatives(candidate, scope.branches, scope.branches === scope.codec.exactlyOne, scope.codec.tag, scope.codec.nullableAlternative, context, (branch, allowUnknownResponseFields) => {
                    try {
                        executeNode(candidate, branch, { ...branchContext, allowUnknownResponseFields });
                        return true;
                    }
                    catch (error) {
                        if (error instanceof SdkError && error.kind === 'validation')
                            return error.message;
                        throw error;
                    }
                });
                if (branches.some((branch) => !selected.includes(branch)))
                    return undefined;
                // Untagged selection fully validates its branches. Tagged selection
                // deliberately leaves other constraints to the caller's validation mode.
            }
            return { value: candidate };
        }
        catch (error) {
            if (context.search.exhausted)
                throw error;
            if (error instanceof SdkError && error.kind === 'validation')
                return undefined;
            throw error;
        }
    };
    return search(0);
}
/** Interpretation only adds numeric meaning; unchanged subtrees need no traversal. */
function numericViewChanged(before, after, depth = 0) {
    if (before === after || depth > 256)
        return false;
    if (after instanceof ParsedNumber)
        return !(before instanceof ParsedNumber);
    if (!before || !after || typeof before !== 'object' || typeof after !== 'object')
        return false;
    return Object.entries(after).some(([key, child]) => numericViewChanged(before[key], child, depth + 1));
}
/** Branch views differ only in established numeric meaning, never in JSON data. */
function mergeNumericViews(left, right, depth = 0) {
    if (depth > 256)
        bad('value', 'value exceeds the supported nesting depth (256) or contains a cycle');
    if (left instanceof Date && typeof right === 'string')
        return right;
    if (left === right || left instanceof ParsedNumber)
        return left;
    if (right instanceof ParsedNumber)
        return right;
    if (left instanceof CompiledModel)
        left = left.toJSON();
    if (right instanceof CompiledModel)
        right = right.toJSON();
    if (!left || !right || typeof left !== 'object' || typeof right !== 'object')
        return left;
    if (Array.isArray(left)) {
        const children = left.map((child, index) => mergeNumericViews(child, right[index], depth + 1));
        return children.every((child, index) => child === left[index]) ? left : children;
    }
    const entries = Object.entries(left).map(([key, child]) => [key, mergeNumericViews(child, right[key], depth + 1)]);
    if (entries.every(([key, child]) => child === left[key]))
        return left;
    return Object.fromEntries(entries);
}
/** Follow same-instance declarations with the registry of each reference. */
function codecShapes(scopes, path, depth, alternatives) {
    const shapes = [];
    const collect = ({ codec, definitions }, level) => {
        if (level > 256)
            bad(path, 'value exceeds the supported nesting depth (256) or contains a cycle');
        definitions = codec.definitions ?? definitions;
        if (codec.reference) {
            const target = Object.hasOwn(definitions, codec.reference)
                ? definitions[codec.reference]
                : undefined;
            if (!target)
                bad(path, 'unresolved recursive model ' + codec.reference);
            collect({ codec: target, definitions }, level + 1);
        }
        else {
            shapes.push({ codec, definitions });
            for (const child of [
                ...(codec.every ?? []),
                ...(alternatives?.({ codec, definitions }) ?? []),
            ])
                collect({ codec: child, definitions }, level + 1);
        }
    };
    scopes.forEach((scope) => collect(scope, depth));
    return shapes;
}
/** Every added number must still have a positive declaration in the final selection.
 * Interpretation can invalidate a previously matching branch through negation.
 * Validate provenance before any encoding, including fields accepted as unknown.
 */
function assertNumericSources(source, value, scopes, context) {
    if (source instanceof CompiledModel)
        source = source.toJSON();
    if (!numericViewChanged(source, value))
        return;
    const path = context.path ?? 'input';
    const depth = context.depth ?? 0;
    const shapes = codecShapes(scopes, path, depth, ({ codec, definitions }) => {
        const conditional = conditionalBranch(value, { codec, definitions }, context);
        return [
            ...(conditional ? [conditional] : []),
            ...[codec.exactlyOne, codec.some].flatMap((branches) => {
                if (!branches)
                    return [];
                return selectAlternatives(value, branches, branches === codec.exactlyOne, codec.tag, codec.nullableAlternative, context, (branch, allowUnknownResponseFields) => {
                    try {
                        executeNode(value, branch, {
                            ...codecMode((context.direction ?? context.mode) === 'response', true),
                            path,
                            depth: depth + 1,
                            definitions,
                            allowUnknownResponseFields,
                        });
                        return true;
                    }
                    catch (error) {
                        if (error instanceof SdkError && error.kind === 'validation')
                            return error.message;
                        throw error;
                    }
                }).selected;
            }),
        ];
    });
    if (value instanceof ParsedNumber) {
        if (!shapes.some(({ codec }) => exactValue(codec.value) ||
            (codec.value.kind === 'native-number' && typeof source === 'number')))
            bad(path, 'numeric interpretation depends on an unmatched alternative');
        return;
    }
    if (!value || typeof value !== 'object')
        return;
    const original = source && typeof source === 'object' ? source : {};
    for (const [key, child] of Object.entries(value)) {
        const children = shapes.flatMap(({ codec, definitions }) => {
            const field = Array.isArray(value)
                ? codec.element
                : Object.hasOwn(codec.fields ?? {}, key)
                    ? codec.fields?.[key]
                    : typeof codec.extra === 'object'
                        ? codec.extra
                        : undefined;
            return field ? [{ codec: field, definitions }] : [];
        });
        assertNumericSources(original[key], child, children, {
            ...context,
            path: Array.isArray(value) ? `${path}[${key}]` : `${path}.${key}`,
            depth: depth + 1,
        });
    }
}
/** Give every conjunct the same JSON numeric view of caller-owned SDK values.
 * Walk the finite value, resolving named shapes as needed; never expand a recursive
 * schema or infer a number from a string without a positive numeric declaration.
 * Alternative candidates establish their own view before full branch matching.
 */
function numericView(value, scopes, context, previous) {
    if (!scopes.length)
        return value;
    // Revisit a matched branch only where another branch added numeric meaning.
    // The previous view was computed with these same scopes and direction policy.
    if (previous && !numericViewChanged(previous.value, value))
        return value;
    const previousChild = (key) => previous && previous.value && typeof previous.value === 'object'
        ? { value: previous.value[key] }
        : undefined;
    const depth = context.depth ?? 0;
    const path = context.path ?? 'input';
    if (context.search.exhausted)
        bad(path, 'numeric interpretation exceeds 256 alternative combinations');
    if (depth > 256)
        bad(path, 'value exceeds the supported nesting depth (256) or contains a cycle');
    if (value instanceof CompiledModel)
        value = modelInputs.get(value) ?? value.toJSON();
    const shapes = codecShapes(scopes, path, depth);
    if (typeof value === 'bigint' &&
        (context.direction ?? context.mode) !== 'response' &&
        shapes.some(({ codec }) => codec.value.kind === 'exact-integer'))
        value = new ParsedNumber(value.toString());
    if (value instanceof Date &&
        (context.direction ?? context.mode) !== 'response' &&
        shapes.some(({ codec }) => codec.value.kind === 'date-time')) {
        if (!Number.isFinite(value.getTime()))
            bad(path, 'expected a valid Date');
        value = value.toISOString();
    }
    if (typeof value === 'string' &&
        shapes.some(({ codec }) => exactValue(codec.value) &&
            codec.numberInput !== 'explicit' &&
            (codec.value.kind === 'exact-integer' ? exactInteger : exactDecimal).test(value)))
        value = new ParsedNumber(value);
    if (Array.isArray(value)) {
        const children = shapes.flatMap(({ codec, definitions }) => codec.element ? [{ codec: codec.element, definitions }] : []);
        if (children.length) {
            denseArray(value, path);
            value = value.map((child, i) => numericView(child, children, { ...context, path: `${path}[${i}]`, depth: depth + 1 }, previousChild(String(i))));
        }
    }
    else if (value &&
        typeof value === 'object' &&
        !(value instanceof ParsedNumber) &&
        !(value instanceof Date)) {
        value = Object.fromEntries(Object.entries(value).map(([key, child]) => {
            // Request omission is decided before a property's union is matched.
            // Required fields are still checked by executeNode on the parent.
            if (child === undefined && (context.direction ?? context.mode) !== 'response')
                return [key, child];
            const children = shapes.flatMap(({ codec, definitions }) => {
                const field = Object.hasOwn(codec.fields ?? {}, key)
                    ? codec.fields[key]
                    : typeof codec.extra === 'object'
                        ? codec.extra
                        : undefined;
                return field ? [{ codec: field, definitions }] : [];
            });
            return [
                key,
                numericView(child, children, { ...context, path: `${path}.${key}`, depth: depth + 1 }, previousChild(key)),
            ];
        }));
    }
    const unions = shapes.flatMap(({ codec, definitions }) => [codec.exactlyOne, codec.some].flatMap((branches) => branches ? [{ codec, definitions, branches }] : []));
    let pending = unions;
    // A constraint-only union may need the numeric view supplied by another
    // conjunct. Retry it after successful selections, independent of allOf order.
    // Each productive pass removes a union. If no selection can progress, retain
    // the validation failure rather than returning a partially interpreted value.
    while (pending.length) {
        const before = value;
        const deferred = [];
        let failure;
        for (const scope of pending) {
            const { codec, definitions, branches } = scope;
            try {
                const candidates = new Map();
                const { selected, tolerateUnknownFields } = selectAlternatives(value, branches, branches === codec.exactlyOne, codec.tag, codec.nullableAlternative, context, (branch, allowUnknownFields) => {
                    try {
                        const branchContext = {
                            ...codecMode((context.direction ?? context.mode) === 'response', true),
                            search: context.search,
                            path,
                            definitions,
                            depth: depth + 1,
                            allowUnknownResponseFields: allowUnknownFields,
                        };
                        const candidate = numericView(value, [{ codec: branch, definitions }], branchContext);
                        executeNode(candidate, branch, branchContext);
                        candidates.set(branch, candidate);
                        return true;
                    }
                    catch (error) {
                        if (error instanceof SdkError && error.kind === 'validation')
                            return error.message;
                        throw error;
                    }
                });
                if (!selected.length) {
                    deferred.push(scope);
                    continue;
                }
                // Reuse every matched view. Rewalking all selected branches makes
                // overlapping recursive anyOf schemas exponential even without numbers.
                if (selected.every((branch) => candidates.has(branch))) {
                    for (const branch of selected)
                        value = mergeNumericViews(value, candidates.get(branch));
                    let changed;
                    do {
                        const beforeRefinement = value;
                        for (const branch of selected) {
                            const candidate = candidates.get(branch);
                            if (!numericViewChanged(candidate, value))
                                continue;
                            const refined = numericView(value, [{ codec: branch, definitions }], {
                                ...codecMode((context.direction ?? context.mode) === 'response', true),
                                search: context.search,
                                path,
                                depth: depth + 1,
                                allowUnknownResponseFields: tolerateUnknownFields,
                            }, { value: candidate });
                            candidates.set(branch, refined);
                            value = mergeNumericViews(value, refined);
                        }
                        changed = numericViewChanged(beforeRefinement, value);
                    } while (changed);
                }
                else {
                    value = numericView(value, selected.map((branch) => ({ codec: branch, definitions })), {
                        ...context,
                        depth: depth + 1,
                        allowUnknownResponseFields: tolerateUnknownFields,
                    });
                }
            }
            catch (error) {
                if (!(error instanceof SdkError) || error.kind !== 'validation')
                    throw error;
                failure ??= error;
                deferred.push(scope);
            }
        }
        // An earlier anyOf may gain compatible numeric branches after a later
        // conjunct supplies their required numeric context. Retry all unions only
        // when numeric meaning changed; single recursive unions keep their fast path.
        if (unions.length > 1 && numericViewChanged(before, value)) {
            pending = unions;
            continue;
        }
        if (deferred.length === pending.length) {
            const joint = jointNumericView(value, unions, context);
            if (joint) {
                value = joint.value;
                pending = unions;
                continue;
            }
            if (failure)
                throw failure;
            break;
        }
        pending = deferred;
    }
    if (context.search.exhausted)
        bad(path, 'numeric interpretation exceeds 256 alternative combinations');
    for (const scope of shapes) {
        const branch = conditionalBranch(value, scope, context);
        if (branch)
            value = numericView(value, [{ codec: branch, definitions: scope.definitions }], {
                ...context,
                depth: depth + 1,
            });
    }
    return value;
}
/** Internal descriptor entry point. Raw schemas are accepted only by the adapter above. */
export function executeCodec(value, s, context) {
    if (!['request', 'response', 'match'].includes(context.mode))
        throw new Error('Unknown codec execution mode');
    const scopes = [{ codec: s, definitions: context.definitions ?? {} }];
    const interpreted = numericView(value, scopes, {
        ...context,
        search: { remaining: new Map(), exhausted: false },
    });
    assertNumericSources(value, interpreted, scopes, context);
    return executeNode(interpreted, s, context);
}
function executeNode(value, s, context) {
    const { path = 'input', redactFields = [], depth = 0, allowUnknownResponseFields = false, } = context;
    const response = (context.direction ?? context.mode) === 'response';
    const matching = context.mode === 'match';
    let validateConstraints = s.constraints ?? context.validateConstraints ?? true;
    let definitions = s.definitions ?? context.definitions ?? {};
    if ((!response || matching) &&
        s.literal !== undefined &&
        jsonIdentity(value) !== jsonIdentity(parseJson(s.literal, true)))
        bad(path, 'value is outside the declared const');
    if (depth > 256)
        bad(path, 'value exceeds the supported nesting depth (256) or contains a cycle');
    if (s.reference) {
        const target = Object.hasOwn(definitions, s.reference) ? definitions[s.reference] : undefined;
        if (!target)
            return bad(path, 'unresolved recursive model ' + s.reference);
        return executeNode(value, target, {
            ...codecMode(response, matching),
            path: path,
            redactFields: redactFields,
            definitions: definitions,
            depth: depth + 1,
            validateConstraints: validateConstraints,
            allowUnknownResponseFields: allowUnknownResponseFields,
        });
    }
    if (value instanceof CompiledModel)
        value = modelInputs.get(value) ?? value.toJSON();
    wireKind(s.value); // Exhaustively reject unknown instruction kinds.
    if (s.every || s.some || s.exactlyOne || s.exclude || s.when) {
        const { every: allOf, some: anyOf, exactlyOne: oneOf, exclude: not, tag: discriminator, when, ...base } = s;
        let result = executeNode(value, base, {
            ...codecMode(response, matching),
            path: path,
            redactFields: redactFields,
            definitions: definitions,
            depth: depth + 1,
            validateConstraints: validateConstraints,
            allowUnknownResponseFields: allowUnknownResponseFields,
        });
        // Matching executes the complete branch. Reuse that result when this node
        // is itself matching; re-executing each selected recursive branch doubles
        // the work at every value depth. Ordinary decoding/encoding still runs in
        // its own mode, whose enum, bound and unknown-field policies differ.
        const matched = new Map();
        const matches = (branch, allowUnknownFields) => {
            try {
                const result = executeNode(value, branch, {
                    ...codecMode(response, true),
                    path: path,
                    redactFields: redactFields,
                    definitions: definitions,
                    depth: depth + 1,
                    validateConstraints: validateConstraints,
                    allowUnknownResponseFields: allowUnknownFields,
                });
                const results = matched.get(branch) ?? new Map();
                results.set(allowUnknownFields, result);
                matched.set(branch, results);
                return true;
            }
            catch (error) {
                if (error instanceof SdkError && error.kind === 'validation')
                    return error.message;
                throw error;
            }
        };
        if (not && matches(not, false) === true)
            bad(path, 'value matches a forbidden combination');
        const conditional = conditionalBranch(value, { codec: s, definitions }, context);
        for (const branch of [...(allOf ?? []), ...(conditional ? [conditional] : [])])
            result = combine(result, executeNode(value, branch, {
                ...codecMode(response, matching),
                path: path,
                redactFields: redactFields,
                definitions: definitions,
                depth: depth + 1,
                validateConstraints: validateConstraints,
                allowUnknownResponseFields: allowUnknownResponseFields,
            }), path, value);
        for (const [keyword, branches] of [
            ['oneOf', oneOf],
            ['anyOf', anyOf],
        ]) {
            if (!branches)
                continue;
            const { selected, tolerateUnknownFields } = selectAlternatives(value, branches, keyword === 'oneOf', discriminator, s.nullableAlternative, context, matches);
            for (const branch of selected) {
                const results = matched.get(branch);
                result = combine(result, matching && results?.has(tolerateUnknownFields)
                    ? results.get(tolerateUnknownFields)
                    : executeNode(value, branch, {
                        ...codecMode(response, matching),
                        path: path,
                        redactFields: redactFields,
                        definitions: definitions,
                        depth: depth + 1,
                        validateConstraints: validateConstraints,
                        allowUnknownResponseFields: tolerateUnknownFields,
                    }), path, value);
            }
        }
        if (response &&
            result &&
            typeof result === 'object' &&
            !Array.isArray(result) &&
            !(result instanceof ParsedNumber)) {
            const object = Object.assign(Object.create(null), result);
            Object.defineProperty(object, inspectCustom, {
                value: () => redactCodec(object, s, redactFields, definitions),
            });
            return object;
        }
        return result;
    }
    if (value === null) {
        if ((!response || matching) && s.members && !s.members.includes(null))
            bad(path, 'null is outside the declared enum');
        if (s.nullable)
            return null;
        return bad(path, 'null is not permitted');
    }
    const type = wireKind(s.value);
    // Positive declarations establish numeric meaning in numericView before
    // matching. A remaining string is JSON text, including inside a negation;
    // the numeric branch being tested must not reinterpret it as an SDK number.
    if ((matching || (!response && s.numberInput === 'explicit')) &&
        exactValue(s.value) &&
        typeof value === 'string')
        return bad(path, `expected ${type}; received a JSON string`);
    if (!response &&
        type === 'integer' &&
        value instanceof ExactNumber &&
        !exactInteger.test(value.value))
        return bad(path, 'expected an integer string');
    const numberToken = value instanceof ParsedNumber ? value.value : undefined;
    if (value instanceof ParsedNumber) {
        if (type === undefined) {
            const token = value.value;
            if ((!response || matching) &&
                s.members &&
                !s.members.some((v) => typeof v === 'number' && compareDecimal(token, String(v)) === 0))
                bad(path, 'value is outside the declared enum');
            if (!response || matching)
                numericConstraints(value.value, s, path, validateConstraints || matching);
            return response ? value : new RawNumber(value.value);
        }
        if (type === 'integer') {
            const token = integerToken(value.value, path);
            value = exactValue(s.value) ? token : Number(token);
        }
        else if (type === 'number')
            value = exactValue(s.value) ? value.value : Number(value.value);
        else
            return bad(path, `expected ${type}; received a JSON number`);
    }
    const exactEnum = exactValue(s.value) || s.value.kind === 'native-number';
    if ((!response || matching) &&
        s.members &&
        !(exactEnum
            ? (typeof value === 'string' || typeof value === 'number') &&
                exactDecimal.test(String(value)) &&
                s.members.some((member) => typeof member === 'number' &&
                    compareDecimal(numberToken ?? String(value), String(member)) === 0)
            : s.members.some((member) => member === value)))
        bad(path, 'value is outside the declared enum');
    if (type === 'integer' || type === 'number') {
        const exact = exactValue(s.value);
        if (exact) {
            const token = typeof value === 'number' && Number.isSafeInteger(value) ? String(value) : value;
            if (typeof token !== 'string' ||
                !(type === 'integer' ? exactInteger : exactDecimal).test(token))
                return bad(path, type === 'integer' ? 'expected an integer string' : 'expected an exact numeric string');
            if (!response || matching)
                numericConstraints(token, s, path, validateConstraints || matching);
            return response ? token : new RawNumber(token);
        }
        if (s.value.kind === 'native-number') {
            if (typeof value !== 'number' || !Number.isFinite(value))
                return bad(path, 'expected a finite number');
            if (!response || matching)
                numericConstraints(numberToken ?? String(value), s, path, validateConstraints || matching);
            return value;
        }
        if (typeof value !== 'number' || !Number.isSafeInteger(value))
            return bad(path, 'expected a safe integer; declare int64 for larger values');
        if (!response || matching)
            numericConstraints(String(value), s, path, validateConstraints || matching);
        return value;
    }
    if (type === 'null')
        return bad(path, 'expected null');
    if (type === 'object' ||
        (type === undefined && value && typeof value === 'object' && !Array.isArray(value))) {
        if (!value || typeof value !== 'object' || Array.isArray(value))
            return bad(path, 'expected an object');
        const entries = value;
        for (const k of response ? s.requiredOutput : s.requiredInput)
            if (!Object.hasOwn(entries, k) || entries[k] === undefined)
                bad(`${path}.${k}`, 'required field is missing');
        const out = Object.create(null);
        for (const [k, v] of Object.entries(entries)) {
            if (v === undefined && !response)
                continue;
            if (s.propertyNames)
                executeNode(k, s.propertyNames, {
                    mode: 'match',
                    direction: 'response',
                    path: `${path}[${JSON.stringify(k)}]`,
                    definitions,
                    depth: depth + 1,
                    validateConstraints: true,
                });
            const child = Object.hasOwn(s.fields ?? {}, k) ? s.fields[k] : undefined;
            if (!response && child?.rejectInput)
                bad(`${path}.${k}`, 'readOnly fields cannot be sent');
            if (child)
                out[k] = executeNode(v, child, {
                    ...codecMode(response, matching),
                    path: `${path}.${k}`,
                    redactFields: redactFields,
                    definitions: definitions,
                    depth: depth + 1,
                    validateConstraints: validateConstraints,
                    allowUnknownResponseFields: allowUnknownResponseFields,
                });
            else if ((!response || (matching && !allowUnknownResponseFields)) && s.extra === false)
                bad(`${path}.${k}`, 'unknown request field');
            else if (typeof s.extra === 'object')
                out[k] = executeNode(v, s.extra, {
                    ...codecMode(response, matching),
                    path: `${path}.${k}`,
                    redactFields: redactFields,
                    definitions: definitions,
                    depth: depth + 1,
                    validateConstraints: validateConstraints,
                    allowUnknownResponseFields: allowUnknownResponseFields,
                });
            else
                out[k] = v;
        }
        if ((!response || matching) && (validateConstraints || matching)) {
            const count = Object.keys(out).length;
            if (s.checks.minProperties !== undefined && count < s.checks.minProperties)
                bad(path, 'object violates minProperties');
            if (s.checks.maxProperties !== undefined && count > s.checks.maxProperties)
                bad(path, 'object violates maxProperties');
        }
        if (response)
            Object.defineProperty(out, inspectCustom, {
                value: () => redactCodec(out, s, redactFields, definitions),
                enumerable: false,
            });
        return out;
    }
    if (type === 'array' || (type === undefined && Array.isArray(value))) {
        if (!Array.isArray(value))
            return bad(path, 'expected an array');
        denseArray(value, path);
        if ((!response || matching) && (validateConstraints || matching)) {
            if (s.checks.minItems !== undefined && value.length < s.checks.minItems)
                bad(path, 'array violates minItems');
            if (s.checks.maxItems !== undefined && value.length > s.checks.maxItems)
                bad(path, 'array violates maxItems');
            if (s.checks.uniqueItems &&
                new Set(value.map((child) => jsonIdentity(child, depth + 1))).size !== value.length)
                bad(path, 'array violates uniqueItems');
            if (s.includes &&
                !value.some((child, index) => {
                    try {
                        executeNode(child, s.includes, {
                            ...codecMode(response, true),
                            path: `${path}[${index}]`,
                            definitions,
                            depth: depth + 1,
                            allowUnknownResponseFields: false,
                        });
                        return true;
                    }
                    catch (error) {
                        if (error instanceof SdkError && error.kind === 'validation')
                            return false;
                        throw error;
                    }
                }))
                bad(path, 'array violates contains');
        }
        return value.map((v, i) => executeNode(v, s.element ?? ANY_CODEC, {
            ...codecMode(response, matching),
            path: `${path}[${i}]`,
            redactFields: redactFields,
            definitions: definitions,
            depth: depth + 1,
            validateConstraints: validateConstraints,
            allowUnknownResponseFields: allowUnknownResponseFields,
        }));
    }
    if (type === 'string' && typeof value !== 'string')
        return bad(path, 'expected a string');
    if (typeof value === 'string' && (!response || matching)) {
        if (/[\uD800-\uDFFF]/u.test(value))
            bad(path, 'expected well-formed Unicode');
        if (validateConstraints || matching) {
            const length = [...value].length;
            if (s.checks.minLength !== undefined && length < s.checks.minLength)
                bad(path, 'string violates minLength');
            if (s.checks.maxLength !== undefined && length > s.checks.maxLength)
                bad(path, 'string violates maxLength');
            if (s.checks.pattern !== undefined && !new RegExp(s.checks.pattern, 'u').test(value))
                bad(path, 'string violates pattern');
        }
    }
    if (type === undefined && typeof value === 'number' && (!response || matching))
        numericConstraints(String(value), s, path, validateConstraints || matching);
    if (type === 'boolean' && typeof value !== 'boolean')
        return bad(path, 'expected a boolean');
    return value;
}
export function serialize(value, schema) {
    return encode(normalize(value, schema));
}
export function isKnownVariant(value, schema) {
    return isKnownCodec(value, compileCodec(schema));
}
export function isKnownCodec(value, codec, certificate) {
    if (certificate && !certifies(value, certificate))
        return false;
    try {
        let definitions = codec.definitions ?? {};
        for (let depth = 0; codec.reference; depth++) {
            if (depth > 256)
                bad('response', 'codec reference exceeds nesting limit');
            const target = Object.hasOwn(definitions, codec.reference)
                ? definitions[codec.reference]
                : undefined;
            if (!target)
                return false;
            codec = target;
            definitions = codec.definitions ?? definitions;
        }
        if (!codec.exactlyOne && !codec.some)
            return false;
        const tag = codec.tag;
        if (tag &&
            (!value ||
                typeof value !== 'object' ||
                !Object.hasOwn(value, tag) ||
                !codec.exactlyOne?.some((branch) => (branch.tagValues ?? branch.fields?.[tag]?.members)?.some((member) => member === value[tag]))))
            return false;
        executeCodec(value, codec, {
            mode: 'match',
            direction: 'response',
            path: 'response',
            allowUnknownResponseFields: true,
            definitions,
        });
        return true;
    }
    catch (error) {
        if (error instanceof SdkError && error.kind === 'validation')
            return false;
        throw error;
    }
}
export function redact(value, schema, fields = [], definitions = {}, depth = 0) {
    return redactCodec(value, schema ? compileCodec(schemaWithDefinitions(schema, definitions)) : undefined, fields, {}, depth);
}
export function redactCodec(value, schema, fields = [], definitions = {}, depth = 0) {
    if (depth > 256)
        return '[Nesting limit]';
    definitions = schema?.definitions ?? definitions;
    if (schema?.sensitive)
        return '[REDACTED]';
    if (schema?.reference) {
        const target = definitions[schema.reference];
        return target
            ? redactCodec(value, target, fields, definitions, depth + 1)
            : '[Unresolved model]';
    }
    const shapes = (s) => s?.reference
        ? [s, ...shapes(definitions[s.reference])]
        : s
            ? [
                s,
                ...[
                    ...(s.every ?? []),
                    ...(s.some ?? []),
                    ...(s.exactlyOne ?? []),
                    ...(s.when?.then ? [s.when.then] : []),
                    ...(s.when?.else ? [s.when.else] : []),
                ].flatMap(shapes),
            ]
            : [];
    const schemas = shapes(schema);
    if (schemas.some((s) => s.sensitive))
        return '[REDACTED]';
    if (value instanceof ParsedNumber)
        return value;
    if (Array.isArray(value))
        return value.map((v) => redactCodec(v, { ...ANY_CODEC, every: schemas.flatMap((s) => (s.element ? [s.element] : [])) }, fields, definitions, depth + 1));
    if (value && typeof value === 'object')
        return Object.fromEntries(Object.entries(value).map(([k, v]) => [
            k,
            fields.includes(k) || /authorization|token|secret|password|api.?key/i.test(k)
                ? '[REDACTED]'
                : redactCodec(v, {
                    ...ANY_CODEC,
                    every: schemas.flatMap((s) => Object.hasOwn(s.fields ?? {}, k)
                        ? [s.fields[k]]
                        : typeof s.extra === 'object'
                            ? [s.extra]
                            : []),
                }, fields, definitions, depth + 1),
        ]));
    return value;
}
const modelInputs = new WeakMap();
class CompiledModel {
    dynamicCodec;
    value;
    codec;
    constructor(value, codec, dynamicCodec) {
        this.dynamicCodec = dynamicCodec;
        this.codec = codec;
        const unwrap = (v, depth = 0) => {
            if (depth > 256)
                bad('value', 'value exceeds the supported nesting depth or contains a cycle');
            if (v instanceof CompiledModel)
                return unwrap(v.toJSON(), depth + 1);
            if (v instanceof RawNumber)
                return v.value;
            if (Array.isArray(v))
                return v.map((child) => unwrap(child, depth + 1));
            if (v && typeof v === 'object')
                return Object.assign(Object.create(null), Object.fromEntries(Object.entries(v).map(([key, child]) => [key, unwrap(child, depth + 1)])));
            return v;
        };
        const normalized = executeCodec(value, this.codec, { mode: 'request' });
        modelInputs.set(this, parseJson(encode(normalized), true));
        this.value = unwrap(normalized);
    }
    toJSON() {
        return structuredClone(this.value);
    }
    [inspectCustom]() {
        return redactCodec(this.value, this.dynamicCodec ? this.dynamicCodec() : this.codec);
    }
}
/** Public schema adapter; compiled factories use the same model executor. */
export class Model extends CompiledModel {
    constructor(value, schema, compiled) {
        super(value, compiled ?? compileCodec(schema), compiled ? undefined : () => compileCodec(schema));
    }
    static [Symbol.hasInstance](value) {
        return this === Model
            ? value instanceof CompiledModel
            : Function.prototype[Symbol.hasInstance].call(this, value);
    }
}
export function isModel(value) {
    return value instanceof CompiledModel;
}
/** Internal input copy for argument adapters; not exported by the SDK entrypoint. */
export function modelInputValue(model) {
    // Positional arguments must retain numeric kinds while separating body and
    // parameter fields. The public toJSON representation deliberately uses strings.
    const copy = (value) => {
        if (value instanceof ParsedNumber)
            return new ExactNumber(value.value);
        if (Array.isArray(value))
            return value.map(copy);
        if (value && typeof value === 'object')
            return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, copy(child)]));
        return value;
    };
    return copy(modelInputs.get(model) ?? model.toJSON());
}
/** Internal factory; does not expand the public Model class method surface. */
export function modelFromCodec(value, codec) {
    return new CompiledModel(value, codec);
}
const field = (value, path) => path
    .split('.')
    .reduce((v, key) => v !== null &&
    typeof v === 'object' &&
    !(v instanceof ParsedNumber) &&
    (!Array.isArray(v) || /^(?:0|[1-9]\d*)$/.test(key)) &&
    Object.hasOwn(v, key)
    ? v[key]
    : undefined, value);
const encoded = (s) => encodeURIComponent(s).replace(/[!'()*]/g, (c) => '%' + c.charCodeAt(0).toString(16).toUpperCase());
function scalar(v) {
    return v instanceof RawNumber ? v.value : String(v);
}
function positive(v, label) {
    if (!Number.isFinite(v) || v <= 0)
        bad(label, 'must be a positive finite number');
    return v;
}
function stopped(signal, outcome = 'unknown') {
    if (signal?.aborted)
        throw createSdkError('cancelled', 'Local request cancelled; this does not cancel the remote operation', outcome);
}
function abortable(promise, signal) {
    return new Promise((resolve, reject) => {
        const abort = () => {
            signal.removeEventListener('abort', abort);
            reject(new Error('HTTP attempt aborted'));
        };
        if (signal.aborted)
            abort();
        else
            signal.addEventListener('abort', abort, { once: true });
        promise.then((value) => {
            signal.removeEventListener('abort', abort);
            resolve(value);
        }, (error) => {
            signal.removeEventListener('abort', abort);
            reject(error);
        });
    });
}
async function delay(ms, signal) {
    stopped(signal);
    await new Promise((resolve, reject) => {
        const timer = schedule(() => {
            signal?.removeEventListener('abort', cancel);
            resolve();
        }, ms);
        const cancel = () => {
            timer?.cancel();
            reject(createSdkError('cancelled', 'Local waiting cancelled', 'unknown'));
        };
        signal?.addEventListener('abort', cancel, { once: true });
    });
}
const safeTransportCodes = new Set([
    'ECONNREFUSED',
    'ENOTFOUND',
    'EAI_AGAIN',
    'ECONNRESET',
    'EPIPE',
    'ETIMEDOUT',
    'EHOSTUNREACH',
    'ENETUNREACH',
    'EADDRNOTAVAIL',
    'ABORT_ERR',
    'UND_ERR_CONNECT_TIMEOUT',
    'UND_ERR_HEADERS_TIMEOUT',
    'UND_ERR_BODY_TIMEOUT',
    'UND_ERR_SOCKET',
    'ERR_TLS_CERT_ALTNAME_INVALID',
    'DEPTH_ZERO_SELF_SIGNED_CERT',
    'SELF_SIGNED_CERT_IN_CHAIN',
    'UNABLE_TO_VERIFY_LEAF_SIGNATURE',
    'CERT_HAS_EXPIRED',
    'CERT_NOT_YET_VALID',
]);
function transportCode(cause) {
    const seen = new Set();
    while (cause instanceof Error && !seen.has(cause)) {
        seen.add(cause);
        if ('code' in cause && typeof cause.code === 'string' && safeTransportCodes.has(cause.code))
            return cause.code;
        cause = cause.cause;
    }
    return undefined;
}
function parseRetryAfter(instruction) {
    const value = instruction.replace(/^[ \t]+|[ \t]+$/g, '');
    if (/^\d+(?:\.\d+)?$/.test(value)) {
        const ms = Number(value) * 1000;
        return Number.isFinite(ms) ? ms : undefined;
    }
    if (!/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), \d{2} (?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) [1-9]\d{3} \d{2}:\d{2}:\d{2} GMT$/.test(value))
        return undefined;
    const date = Date.parse(value);
    return Number.isFinite(date) && new Date(date).toUTCString() === value
        ? Math.max(0, date - Date.now())
        : undefined;
}
function clientBaseUrl(baseUrl) {
    if (baseUrl === undefined)
        return bad('baseUrl', 'required: pass baseUrl because this SDK has no default server');
    if (!isBaseUrlSyntax(baseUrl))
        return bad('baseUrl', 'expected an absolute URL without credentials, whitespace, backslash, query or fragment');
    try {
        return new URL(baseUrl.endsWith('/') ? baseUrl : baseUrl + '/');
    }
    catch {
        return bad('baseUrl', 'expected a valid absolute URL');
    }
}
function destinationUrl(value, base) {
    if (/[\\\x00-\x20]/.test(value))
        throw createSdkError('destination', 'Invalid destination URL');
    try {
        return new URL(value, base);
    }
    catch {
        throw createSdkError('destination', 'Invalid destination URL');
    }
}
/** Verify compiled webhook descriptors without constructing an HTTP runtime. */
export function verifyWebhookFromPlan(source, rawBody, headers, secrets, nowSeconds = Date.now() / 1000, redactFields = []) {
    const decode = (value, codec, context) => executeCodec(value, codec, {
        ...context,
        definitions: source instanceof DescriptorSource ? source.definitions() : (source.definitions ?? {}),
    });
    const w = source instanceof DescriptorSource ? source.webhook() : source.webhook;
    if (!w)
        return bad('webhook', 'capability is not declared');
    if (rawBody instanceof ArrayBuffer)
        rawBody = new Uint8Array(rawBody);
    if (!(rawBody instanceof Uint8Array))
        return webhookError('validation', 'invalid_input', 'Webhook body must be original Buffer, Uint8Array or ArrayBuffer bytes; capture it before JSON parsing');
    if (typeof nowSeconds !== 'number' || !Number.isFinite(nowSeconds))
        return webhookError('validation', 'invalid_input', 'Webhook nowSeconds must be a finite Unix timestamp in seconds');
    if (Math.abs(nowSeconds) >= 100_000_000_000)
        return webhookError('validation', 'invalid_input', 'Webhook nowSeconds appears to be milliseconds; divide by 1000 to pass Unix seconds');
    const supplied = typeof secrets === 'string' ? [secrets] : Array.isArray(secrets) ? Array.from(secrets) : [];
    if (!supplied.length || !supplied.every((secret) => typeof secret === 'string'))
        return webhookError('validation', 'invalid_secret', 'Webhook secrets must be a nonempty string or array of strings');
    const format = w.format ?? 'hex';
    const keys = [];
    for (const secret of supplied) {
        if (!secret)
            continue;
        if (format !== 'standard-webhooks')
            keys.push(secret);
        else if (/^whsec_[A-Za-z0-9+/]{43}=$/.test(secret)) {
            const key = Buffer.from(secret.slice(6), 'base64');
            if (key.length === 32 && key.toString('base64') === secret.slice(6))
                keys.push(key);
        }
    }
    if (!keys.length)
        return webhookError('validation', 'invalid_secret', format === 'standard-webhooks'
            ? 'Webhook secret must be whsec_ followed by canonical base64 encoding of 32 bytes'
            : 'Provide at least one nonempty webhook signing secret');
    const signatures = webhookHeaderValues(headers, w.header);
    let timestamp = '';
    let candidates = [];
    let prefix = '';
    if (format === 'timestamped-hex') {
        const parts = signatures.flatMap((signature) => signature.split(',').map((part) => part.trim()));
        const timestamps = parts.filter((part) => part.startsWith('t='));
        const signedTimestamp = timestamps[0];
        if (timestamps.length !== 1 || signedTimestamp === undefined)
            return webhookError('authentication', 'invalid_timestamp', 'Webhook signature must contain exactly one t= timestamp');
        timestamp = signedTimestamp.slice(2);
        candidates = parts.filter((part) => part.startsWith('v1=')).map((part) => part.slice(3));
    }
    else {
        if (!w.timestampHeader)
            return bad('webhook', 'timestamp header is not declared');
        timestamp = webhookScalarHeader(headers, w.timestampHeader, true);
        if (format === 'standard-webhooks') {
            if (!w.idHeader)
                return bad('webhook', 'ID header is not declared');
            prefix = webhookScalarHeader(headers, w.idHeader) + '.';
            // Fetch combines repeated header lines with commas. The comma inside v1,<digest>
            // belongs to the signature token; commas between versioned tokens delimit values.
            candidates = signatures
                .flatMap((signature) => signature.trim().split(/(?:\s+|,\s*(?=v\d+,))/))
                .filter((part) => part.startsWith('v1,'))
                .map((part) => part.slice(3));
        }
        else
            candidates = signatures.flatMap((signature) => signature.split(',').map((part) => part.trim()));
    }
    if (!/^\d+$/.test(timestamp) || !Number.isSafeInteger(Number(timestamp)))
        return webhookError('authentication', 'invalid_timestamp', 'Webhook timestamp must be an integer Unix timestamp in seconds');
    if (Math.abs(nowSeconds - Number(timestamp)) > w.toleranceSeconds)
        return webhookError('authentication', 'timestamp_out_of_tolerance', 'Webhook timestamp is outside the allowed tolerance; check the server clock and delivery age');
    const signed = Buffer.concat([
        Buffer.from(prefix + timestamp + w.separator),
        Buffer.from(rawBody),
    ]);
    const digests = candidates
        .filter((candidate) => format === 'standard-webhooks'
        ? /^[A-Za-z0-9+/]{43}=$/.test(candidate) &&
            Buffer.from(candidate, 'base64').toString('base64') === candidate
        : /^[a-fA-F0-9]{64}$/.test(candidate))
        .map((candidate) => Buffer.from(candidate, format === 'standard-webhooks' ? 'base64' : 'hex'));
    let valid = false;
    const { createHmac, timingSafeEqual } = process.getBuiltinModule('crypto');
    for (const key of keys) {
        const expected = createHmac('sha256', key).update(signed).digest();
        for (const actual of digests)
            valid = timingSafeEqual(expected, actual) || valid;
    }
    if (!valid)
        return webhookError('authentication', 'invalid_signature', 'Invalid webhook signature; check the signing secret and preserve the original request body bytes without reserializing JSON');
    let event;
    try {
        event = parseJson(new TextDecoder('utf-8', { fatal: true, ignoreBOM: true }).decode(Buffer.from(rawBody)), true);
    }
    catch (cause) {
        throw createSdkError('protocol', 'Invalid webhook JSON', 'response', false, undefined, 'webhook_invalid_json', undefined, { cause });
    }
    const eventType = field(event, w.typeField);
    const schema = typeof eventType === 'string' && Object.hasOwn(w.events, eventType)
        ? w.events[eventType]
        : undefined;
    // Decode first: malformed declared payloads remain protocol errors. Matching is
    // a separate predicate over the original exact JSON values, not decoded strings.
    let decoded = event;
    if (schema) {
        try {
            decoded = decode(event, schema, {
                mode: 'response',
                path: 'event',
                redactFields: redactFields,
            });
        }
        catch (cause) {
            if (!(cause instanceof SdkError) || cause.kind !== 'validation')
                throw cause;
            throw createSdkError('protocol', 'Invalid webhook payload' +
                (validationFailures.has(cause) ? ': ' + validationFailures.get(cause) : ''), 'response', false, undefined, undefined, undefined, { cause });
        }
    }
    let known = false;
    if (schema) {
        try {
            decode(event, schema, {
                mode: 'match',
                direction: 'response',
                path: 'event',
                allowUnknownResponseFields: true,
            });
            known = !w.certificate || certifies(plainNumbers(structuredClone(decoded)), w.certificate);
        }
        catch (error) {
            if (!(error instanceof SdkError) || error.kind !== 'validation')
                throw error;
        }
    }
    return known
        ? { event: plainNumbers(decoded), known: true }
        : {
            event: plainNumbers(decoded),
            known: false,
            reason: schema ? 'unmatched_envelope' : 'unknown_event',
        };
}
class CompiledRuntime {
    dynamicPlan;
    streams = new Set();
    async close() {
        await Promise.all([...this.streams].map((stream) => stream.close()));
    }
    options;
    base;
    allowed;
    compiledContract;
    descriptors;
    operation(id) {
        return this.descriptors
            ? this.descriptors.operation(id)
            : this.contract.operations.find((op) => op.id === id);
    }
    definitions() {
        return this.descriptors?.definitions() ?? this.contract.definitions ?? {};
    }
    get contract() {
        // Public source-taking Runtime construction retains caller-owned schemas.
        // Generated clients always supply compiledContract and never enter this adapter.
        return this.dynamicPlan ? this.dynamicPlan() : this.compiledContract;
    }
    constructor(compiled, options, dynamicPlan) {
        this.dynamicPlan = dynamicPlan;
        this.descriptors = compiled instanceof DescriptorSource ? compiled : undefined;
        this.compiledContract = compiled instanceof DescriptorSource ? compiled.settings : compiled;
        if (!this.descriptors)
            assertRuntimePlan(this.compiledContract);
        if (!options || typeof options !== 'object' || Array.isArray(options))
            bad('options', 'expected a client options object');
        const allowedOptions = new Set([
            'ambientCredentials',
            'baseUrl',
            'token',
            'authMode',
            'credentials',
            'allowedOrigins',
            'allowInsecureHttp',
            'timeoutMs',
            'deadlineMs',
            'maxAttempts',
            'transport',
            'diagnostics',
            'redactFields',
            ...Object.keys(this.compiledContract.authShortcuts ?? {}),
        ]);
        for (const key of Object.keys(options))
            if (!allowedOptions.has(key))
                bad(`options.${key}`, `unknown client option${key === 'maxRetries' ? '; use maxAttempts (total attempts, including the first)' : '; see ClientOptions for supported keys'}`);
        this.options = { ...options };
        this.base = clientBaseUrl(options.baseUrl === undefined ? this.compiledContract.defaultBaseUrl : options.baseUrl);
        if (!this.base.hostname || this.base.username || this.base.password)
            bad('baseUrl', 'expected an absolute URL without embedded credentials');
        if (this.compiledContract.authentication &&
            options.token !== undefined &&
            !this.compiledContract.authShortcuts?.token)
            throw createSdkError('authentication', `token is not configured for this SDK; use ${Object.keys(this.compiledContract.authShortcuts ?? {})
                .sort()
                .join(', ') || 'authMode and credentials'}`);
        this.allowed = new Set(options.allowedOrigins ?? [this.base.origin]);
        this.checkUrl(this.base);
        positive(options.timeoutMs ?? 10000, 'timeoutMs');
        positive(options.deadlineMs ?? 30000, 'deadlineMs');
    }
    [inspectCustom]() {
        return { baseUrl: this.base.origin, credentials: '[REDACTED]' };
    }
    decode(value, codec, context) {
        return executeCodec(value, codec, { ...context, definitions: this.definitions() });
    }
    decodeProjection(value, codecs, path) {
        let failure;
        for (const codec of codecs) {
            try {
                const decoded = this.decode(value, codec, {
                    mode: 'response',
                    path,
                    redactFields: this.options.redactFields ?? [],
                });
                return plainNumbers(decoded);
            }
            catch (cause) {
                if (!(cause instanceof SdkError && cause.kind === 'validation'))
                    throw cause;
                failure ??= cause;
            }
        }
        if (!failure)
            throw new Error('Missing compiled projection codecs');
        throw failure;
    }
    decodePayload(id, result, path) {
        const codecs = this.operation(id)?.payloadCodecs;
        const certificate = this.operation(id)?.payloadCertificate;
        let value = codecs?.length && typeof result.raw === 'string' ? parseJson(result.raw, true) : result.data;
        for (const key of path)
            value = field(value, key);
        try {
            const decoded = codecs?.length
                ? this.decodeProjection(value, codecs, 'response.' + path.join('.'))
                : value;
            if (!certificate || !certifies(decoded, certificate))
                bad('response', 'payload does not fit its public type');
            return decoded;
        }
        catch (cause) {
            if (!(cause instanceof SdkError && cause.kind === 'validation'))
                throw cause;
            throw createSdkError('protocol', 'Response payload does not match a declared alternative', 'response', false, result.meta, undefined, undefined, { cause }, typeof result.raw === 'string' ? result.raw : undefined);
        }
    }
    validateHeaderValue(value, codec, path) {
        // Simple headers carry scalars or comma-separated scalar arrays. Validate
        // their possible wire interpretations with the request codec, keeping the
        // original header spelling and exact numeric tokens intact.
        const parseScalar = (text) => text === 'true' || text === 'false'
            ? text === 'true'
            : exactDecimal.test(text)
                ? new ParsedNumber(text)
                : text;
        const parts = value.split(',');
        let failure;
        for (const candidate of [value, parseScalar(value), parts, parts.map(parseScalar)]) {
            try {
                this.decode(candidate, codec, { mode: 'request', path });
                return;
            }
            catch (error) {
                if (!(error instanceof SdkError) || error.kind !== 'validation')
                    throw error;
                failure ??= error;
            }
        }
        if (failure)
            throw failure;
        throw new Error('Header validation did not evaluate a value');
    }
    checkUrl(url) {
        if (!url.hostname || url.username || url.password || url.hash)
            throw createSdkError('destination', 'Invalid destination: embedded credentials and fragments are not allowed');
        if (!['https:', 'http:'].includes(url.protocol))
            throw createSdkError('destination', 'Unsupported destination protocol; use HTTPS');
        if (url.protocol === 'http:' && !this.options.allowInsecureHttp)
            throw createSdkError('destination', 'HTTP is disabled; set allowInsecureHttp: true for deliberate local testing');
        if (!this.allowed.has(url.origin))
            throw createSdkError('destination', 'Destination origin is not in allowedOrigins');
    }
    async request(id, input = {}, options = {}, continuation) {
        const op = this.operation(id);
        const header = op?.idempotency?.header.toLowerCase();
        const key = header
            ? (options?.idempotencyKey ??
                Object.entries(input ?? {}).find(([name]) => name.toLowerCase() === header)?.[1] ??
                Object.entries(options?.headers ?? {}).find(([name]) => name.toLowerCase() === header)?.[1] ??
                (op?.idempotency?.auto
                    ? (op.idempotency.autoKeyPrefix ?? '') + process.getBuiltinModule('crypto').randomUUID()
                    : undefined))
            : undefined;
        try {
            return await this.executeRequest(id, input, typeof key === 'string' && options && typeof options === 'object' && !Array.isArray(options)
                ? { ...options, idempotencyKey: key }
                : options, continuation);
        }
        catch (error) {
            if (error instanceof SdkError && typeof key === 'string')
                error.idempotencyKey = key;
            throw error;
        }
    }
    async executeRequest(id, input = {}, options = {}, continuation) {
        if (!input || typeof input !== 'object' || Array.isArray(input))
            bad('input', 'expected an object');
        if (!options || typeof options !== 'object' || Array.isArray(options))
            bad('options', 'expected an object');
        const { apiVersion } = this.contract;
        const op = this.operation(id);
        if (!op)
            return bad('operation', 'operation is not included in this SDK');
        const start = performance.now();
        const deadline = start + positive(options.deadlineMs ?? this.options.deadlineMs ?? 30000, 'deadlineMs');
        const timeout = positive(options.timeoutMs ?? this.options.timeoutMs ?? 10000, 'timeoutMs');
        if (options.streamIdleTimeoutMs !== undefined)
            positive(options.streamIdleTimeoutMs, 'streamIdleTimeoutMs');
        if (options.streamLifetimeMs !== undefined)
            positive(options.streamLifetimeMs, 'streamLifetimeMs');
        const policy = op.retry;
        const budget = options.maxAttempts ?? this.options.maxAttempts ?? policy.maxAttempts;
        if (!Number.isSafeInteger(budget) || budget < 1)
            bad('maxAttempts', 'must be a positive safe integer');
        let attempts = Math.min(budget, policy.maxAttempts);
        const headers = Object.assign(Object.create(null), {
            accept: [
                ...new Set(Object.values(op.responses)
                    .filter((response) => response.classification === 'success')
                    .map((response) => response.mediaType)
                    .filter(Boolean)),
            ].join(', ') || 'application/json',
            'user-agent': this.contract.userAgent ?? 'PublicSDK (Node.js)',
        });
        const setHeader = (name, value) => {
            if (!/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/.test(name) || /[\r\n]/.test(value))
                bad('headers', 'invalid HTTP header');
            const existing = headers[name.toLowerCase()];
            if (op.idempotency?.header.toLowerCase() === name.toLowerCase() &&
                existing !== undefined &&
                existing !== value)
                bad('idempotencyKey', 'conflicting keys were supplied through input headers or request options');
            headers[name.toLowerCase()] = value;
        };
        const basePath = this.base.pathname.replace(/\/$/, '');
        if (!continuation && basePath && (op.path === basePath || op.path.startsWith(basePath + '/')))
            bad('baseUrl', 'already includes the operation base path; remove that path from baseUrl');
        let path = op.path;
        const query = [];
        for (const p of op.parameters) {
            if (p.source === 'authentication') {
                if (Object.hasOwn(input, p.name))
                    bad(p.name, 'supply this header through authentication options');
                continue;
            }
            if (p.source === 'request-option') {
                if (Object.hasOwn(input, p.name))
                    bad(p.name, 'supply this header through request options');
                continue;
            }
            let value = Object.hasOwn(input, p.name) ? input[p.name] : undefined;
            if (value === undefined &&
                p.in === 'header' &&
                op.idempotency?.header.toLowerCase() === p.name.toLowerCase()) {
                value =
                    options.idempotencyKey ??
                        Object.entries(options.headers ?? {}).find(([name]) => name.toLowerCase() === p.name.toLowerCase())?.[1];
            }
            if (p.in === 'header' &&
                [op.conditional?.header, apiVersion?.header].some((header) => header?.toLowerCase() === p.name.toLowerCase())) {
                // Match the final header precedence before validating the wire value.
                for (const [name, supplied] of Object.entries(options.headers ?? {}))
                    if (name.toLowerCase() === p.name.toLowerCase())
                        value = supplied;
                if (apiVersion?.header.toLowerCase() === p.name.toLowerCase())
                    value = apiVersion.value;
                if (op.conditional?.header.toLowerCase() === p.name.toLowerCase() &&
                    options.ifMatch !== undefined)
                    value = options.ifMatch;
            }
            if (value === undefined) {
                if (p.required)
                    bad(p.name, op.idempotency?.header.toLowerCase() === p.name.toLowerCase()
                        ? `${op.resource}.${op.method} requires idempotencyKey; save and reuse the key on retry`
                        : 'required parameter is missing');
                continue;
            }
            const normalized = this.decode(value, p.codec, { mode: 'request', path: p.name });
            const values = Array.isArray(normalized) ? normalized.map(scalar) : [scalar(normalized)];
            if (p.in === 'path') {
                if (values.some((v) => v === '.' || v === '..'))
                    bad(p.name, 'dot path segments are unsupported');
                path = path.replaceAll(`{${p.name}}`, values.map(encoded).join(','));
            }
            if (p.in === 'query') {
                if (Array.isArray(normalized) && p.explode !== false)
                    for (const v of values)
                        query.push(encoded(p.name) + '=' + encoded(v));
                else
                    query.push(encoded(p.name) + '=' + values.map(encoded).join(','));
            }
            if (p.in === 'header')
                setHeader(p.name, values.join(','));
        }
        const url = continuation
            ? destinationUrl(continuation, this.base)
            : destinationUrl(this.base.href.replace(/\/$/, '') + path + (query.length ? '?' + query.join('&') : ''));
        this.checkUrl(url);
        for (const [k, v] of Object.entries(options.headers ?? {}))
            setHeader(k, v);
        for (const p of op.parameters) {
            if (p.source !== 'request-option' || !p.requestOption)
                continue;
            // The descriptor is validated against the option registry before execution.
            const value = options[p.requestOption.node];
            const supplied = headers[p.name.toLowerCase()];
            if (value !== undefined && supplied !== undefined && value !== supplied)
                bad(p.requestOption.node, 'conflicting request option and header values');
            const effective = value === undefined ? supplied : value;
            if (effective !== undefined) {
                const normalized = this.decode(effective, p.codec, {
                    mode: 'request',
                    path: p.requestOption.node,
                });
                setHeader(p.name, scalar(normalized));
            }
        }
        const suppliedHeaders = { ...headers };
        const ambient = this.contract.defaultCredentials;
        const ambientProvider = ambient && this.options.ambientCredentials !== false
            ? configuredDefaultCredentials(ambient, this.base.href)
            : undefined;
        const credentialContext = {
            baseUrl: this.base.href,
            transport: this.options.transport ?? fetch,
            deadline,
            ...(options.signal ? { signal: options.signal } : {}),
        };
        const providers = new Map();
        const authenticate = async () => {
            providers.clear();
            if (this.contract.authentication) {
                const permitted = op.authModes ?? [];
                const shortcutAuth = (value) => {
                    const supplied = Object.entries(this.contract.authShortcuts ?? {}).filter(([key]) => Object.hasOwn(value, key) &&
                        value[key] !== undefined);
                    if (supplied.length > 1 ||
                        (supplied.length && (value.authMode !== undefined || value.credentials !== undefined)))
                        throw createSdkError('authentication', 'Use one authentication shortcut or explicit authMode/credentials, not both');
                    const entry = supplied[0];
                    return entry
                        ? {
                            mode: entry[1].mode,
                            credentials: {
                                [entry[1].scheme]: value[entry[0]],
                            },
                        }
                        : undefined;
                };
                const authHint = (modes, scheme) => {
                    const shortcuts = Object.entries(this.contract.authShortcuts ?? {})
                        .filter(([, value]) => modes.includes(value.mode) && (scheme === undefined || value.scheme === scheme))
                        .map(([key]) => key);
                    return shortcuts.length
                        ? `pass ${shortcuts.join(' or ')} in client options or request options`
                        : scheme !== undefined
                            ? `pass credentials.${modes[0]}.${scheme} in client options or credentials.${scheme} in request options, with authMode '${modes[0]}'`
                            : `pass authMode (${modes.join(', ')}) and credentials in client options or request options`;
                };
                const clientShortcut = shortcutAuth(this.options);
                const requestShortcut = shortcutAuth(options);
                const defaultMode = this.options.authMode ??
                    clientShortcut?.mode ??
                    (ambientProvider && ambient && permitted.includes(ambient.mode)
                        ? ambient.mode
                        : undefined);
                let modeName = requestShortcut?.mode ?? options.authMode ?? (permitted.length ? defaultMode : undefined);
                if (modeName === undefined && op.authenticated && permitted.length === 1)
                    modeName = permitted[0];
                if (modeName === undefined && op.authenticated)
                    throw createSdkError('authentication', `Authentication is required; ${authHint(permitted)}`);
                const selected = modeName === undefined ? undefined : this.contract.authentication[modeName];
                if (modeName !== undefined && (!selected || !permitted.includes(modeName)))
                    throw createSdkError('authentication', `Authentication mode is not permitted; ${authHint(permitted)}`);
                const expected = Object.create(null);
                if (selected && modeName !== undefined) {
                    const credentials = requestShortcut?.credentials ??
                        options.credentials ??
                        (clientShortcut?.mode === modeName
                            ? clientShortcut.credentials
                            : this.options.credentials?.[modeName]);
                    for (const scheme of selected.schemes) {
                        const source = credentials?.[scheme.name] ??
                            (credentials === undefined &&
                                modeName === ambient?.mode &&
                                scheme.name === ambient.scheme
                                ? ambientProvider
                                : undefined);
                        const credential = await resolveCredential(source, `Missing or invalid credentials; ${authHint([modeName], scheme.name)}`, true, credentialContext, providers);
                        expected[scheme.header.toLowerCase()] =
                            scheme.type === 'bearer' ? 'Bearer ' + credential : credential;
                    }
                }
                for (const mode of Object.values(this.contract.authentication))
                    for (const scheme of mode.schemes) {
                        const name = scheme.header.toLowerCase();
                        if (suppliedHeaders[name] !== undefined && suppliedHeaders[name] !== expected[name])
                            throw createSdkError('authentication', 'Request headers conflict with the selected authentication mode');
                    }
                for (const [name, value] of Object.entries(expected))
                    setHeader(name, value);
            }
            else if (op.authenticated || (op.optionalAuthentication && this.options.token)) {
                if (!this.options.token || !this.contract.auth)
                    throw createSdkError('authentication', 'Explicit API credentials are required');
                const credential = await resolveCredential(this.options.token, 'Explicit API credentials are required', false, // Legacy header validation owns newline rejection for strings and providers.
                credentialContext, providers);
                setHeader(this.contract.auth.header, this.contract.auth.type === 'bearer' ? `Bearer ${credential}` : credential);
            }
            if (apiVersion)
                setHeader(apiVersion.header, apiVersion.value);
            for (const p of op.parameters) {
                if (p.source !== 'authentication')
                    continue;
                const value = headers[p.name.toLowerCase()];
                if (value === undefined) {
                    if (p.required)
                        bad(p.name, op.idempotency?.header.toLowerCase() === p.name.toLowerCase()
                            ? `${op.resource}.${op.method} requires idempotencyKey; save and reuse the key on retry`
                            : 'required parameter is missing');
                }
                else
                    this.validateHeaderValue(value, p.codec, p.name);
            }
        };
        if (options.ifMatch !== undefined) {
            if (!op.conditional)
                bad('ifMatch', 'operation does not declare conditional requests');
            setHeader(op.conditional.header, options.ifMatch);
        }
        const key = options.idempotencyKey ??
            (op.idempotency ? headers[op.idempotency.header.toLowerCase()] : undefined);
        if (key !== undefined) {
            if (!op.idempotency || !key)
                bad('idempotencyKey', 'a nonempty key and declared capability are required');
            if (/^[ \t]|[ \t]$/.test(key))
                bad('idempotencyKey', 'leading or trailing HTTP whitespace would change the key on the wire');
            setHeader(op.idempotency.header, key);
        }
        const safe = op.replay === 'safe' ||
            Boolean(op.idempotency && headers[op.idempotency.header.toLowerCase()]);
        if (!safe)
            attempts = 1;
        let body;
        if (Object.hasOwn(input, 'body') && input.body !== undefined) {
            if (!op.body)
                bad('body', 'operation does not accept a body');
            if (['GET', 'HEAD'].includes(op.verb))
                bad('body', 'GET/HEAD request bodies are unsupported by the Node transport');
            body = encode(this.decode(input.body, op.body, { mode: 'request' }));
            setHeader('content-type', op.mediaType);
        }
        else if (op.bodyRequired)
            bad('body', 'required body is missing');
        for (const key of Object.keys(input))
            if (key !== 'body' && !op.parameters.some((p) => p.name === key))
                bad(key, 'unknown input parameter');
        const transport = this.options.transport ??
            (Object.values(op.responses).some((r) => r.bodyKind === 'sse') ? streamFetch : fetch);
        let credentialRetries = 0;
        let mayHaveBeenSent = false;
        for (let attempt = 1; attempt <= attempts; attempt++) {
            stopped(options.signal, attempt === 1 ? 'not_sent' : 'unknown');
            const remaining = deadline - performance.now();
            if (remaining <= 0)
                throw createSdkError('deadline', 'Overall deadline exceeded', attempt === 1 ? 'not_sent' : 'unknown');
            const controller = new AbortController();
            const abort = () => controller.abort();
            options.signal?.addEventListener('abort', abort, { once: true });
            // Timers truncate fractional durations; rounding up prevents an overall
            // deadline from being reported as an earlier per-attempt transport error.
            const timer = schedule(abort, Math.ceil(Math.min(timeout, remaining)));
            let retryAfter;
            let error;
            let diagnosticMeta;
            let diagnosticError;
            try {
                await abortable(authenticate(), controller.signal);
                const response = await abortable(transport(url, {
                    method: op.verb,
                    headers: { ...headers },
                    ...(body === undefined ? {} : { body }),
                    signal: controller.signal,
                    redirect: 'manual',
                }), controller.signal);
                mayHaveBeenSent = true;
                const responseHeaders = Object.fromEntries(response.headers.entries());
                const meta = {
                    ...(key !== undefined ? { idempotencyKey: key } : {}),
                    status: response.status,
                    headers: responseHeaders,
                    attempts: attempt,
                    durationMs: performance.now() - start,
                    url: url.href,
                    ...(response.headers.get(this.contract.errors?.requestIdHeader ?? 'x-request-id')
                        ? {
                            requestId: response.headers.get(this.contract.errors?.requestIdHeader ?? 'x-request-id'),
                        }
                        : {}),
                };
                diagnosticMeta = meta;
                const instruction = response.headers.get('retry-after');
                if (instruction)
                    retryAfter = parseRetryAfter(instruction);
                if (response.status === 401 && safe && credentialRetries === 0 && providers.size > 0) {
                    diagnosticError = 'authentication';
                    try {
                        await response.body?.cancel();
                    }
                    catch {
                        // The observed 401 remains authoritative if response cleanup fails.
                    }
                    try {
                        for (const invalidate of providers.values())
                            invalidate();
                    }
                    catch {
                        throw createSdkError('authentication', 'Credential provider invalidation failed', 'response', false, meta);
                    }
                    credentialRetries++;
                    attempts++;
                    continue;
                }
                const declaredResponse = op.responses[String(response.status)] ??
                    op.responses.default ??
                    (response.ok && op.successJsonFallback
                        ? op.responses[op.successJsonFallback]
                        : undefined);
                if (response.ok && declaredResponse?.bodyKind === 'sse') {
                    if (response.headers.get('content-type')?.split(';')[0]?.trim().toLowerCase() !==
                        'text/event-stream' ||
                        !response.body) {
                        await response.body?.cancel();
                        throw createSdkError('protocol', 'Expected an SSE response stream', 'response', false, meta);
                    }
                    const idleTimeoutMs = options.streamIdleTimeoutMs ?? op.stream?.idleTimeoutMs ?? 30000;
                    positive(idleTimeoutMs, 'streamIdleTimeoutMs');
                    if (options.streamLifetimeMs !== undefined)
                        positive(options.streamLifetimeMs, 'streamLifetimeMs');
                    const retainConnection = streamConnections.get(response);
                    const stream = new EventStream(response.body.getReader(), meta, {
                        idleTimeoutMs,
                        maxEventBytes: op.stream?.maxEventBytes ?? 1048576,
                        ...(retainConnection ? { retainConnection } : {}),
                        ...(options.streamLifetimeMs !== undefined
                            ? { lifetimeMs: options.streamLifetimeMs }
                            : {}),
                        ...(options.signal ? { signal: options.signal } : {}),
                    }, (event, raw) => {
                        const codec = op.streamEventCodecs && Object.hasOwn(op.streamEventCodecs, event)
                            ? op.streamEventCodecs[event]
                            : undefined;
                        return codec
                            ? plainNumbers(this.decode(parseJson(raw, true), codec, {
                                mode: 'response',
                                path: 'event',
                                redactFields: this.options.redactFields ?? [],
                            }))
                            : raw;
                    }, () => this.streams.delete(stream));
                    this.streams.add(stream);
                    const result = { data: stream, meta, raw: '' };
                    Object.defineProperty(result, inspectCustom, {
                        value: () => ({ data: '[Event stream]', meta: inspectedMetadata(meta) }),
                    });
                    return result;
                }
                const bytes = await abortable(response.arrayBuffer(), controller.signal);
                const redirect = op.responses[String(response.status)]?.classification === 'redirect';
                if (response.ok && declaredResponse?.bodyKind === 'binary') {
                    const contentType = response.headers
                        .get('content-type')
                        ?.split(';')[0]
                        ?.trim()
                        .toLowerCase();
                    if (contentType !== declaredResponse.mediaType)
                        throw createSdkError('protocol', 'Unexpected binary response media type', 'response', false, meta);
                    meta.durationMs = performance.now() - start;
                    if (performance.now() >= deadline)
                        throw createSdkError('deadline', 'Response exceeded the overall deadline', 'response', false, meta);
                    const data = new Uint8Array(bytes);
                    const result = { data, meta, raw: data };
                    Object.defineProperty(result, inspectCustom, {
                        value: () => ({ data: '[Binary response]', meta: inspectedMetadata(meta) }),
                    });
                    return result;
                }
                let raw = Buffer.from(bytes).toString('utf8');
                meta.durationMs = performance.now() - start;
                let data;
                try {
                    raw = new TextDecoder('utf-8', { fatal: true, ignoreBOM: true }).decode(bytes);
                    data = raw && !redirect ? parseJson(raw, true) : undefined;
                }
                catch (cause) {
                    if (response.ok)
                        throw createSdkError('protocol', 'Invalid JSON success response', 'response', false, meta, undefined, undefined, { cause }, raw);
                }
                if (response.status >= 300 && response.status < 400 && response.status !== 304 && !redirect)
                    throw createSdkError('destination', 'Redirects are not followed; explicitly configure an approved endpoint', 'response', false, meta);
                if (response.ok || response.status === 304 || redirect) {
                    const declared = declaredResponse;
                    if (!declared)
                        throw createSdkError('protocol', 'Undeclared success status', 'response', false, meta, undefined, undefined, undefined, raw);
                    try {
                        if (redirect) {
                            const location = response.headers.get('location');
                            if (declared.locationRequired && !location)
                                throw new Error('Missing Location header');
                            if (location !== null && /[\u0000-\u001f\u007f]/.test(location))
                                throw new Error('Invalid Location header');
                            data = location === null ? {} : { location };
                        }
                        else if (declared.codec) {
                            if (data === undefined)
                                throw new Error('Missing body');
                            data = plainNumbers(this.decode(data, declared.codec, {
                                mode: 'response',
                                path: 'response',
                                redactFields: this.options.redactFields ?? [],
                            }));
                        }
                        else if (raw)
                            throw new Error('Unexpected body for an empty response');
                        if (op.outputCertificate && !certifies(data, op.outputCertificate))
                            throw new Error('Response does not fit its public type');
                    }
                    catch (cause) {
                        throw createSdkError('protocol', 'Response cannot be represented by the declared schema' +
                            (cause instanceof Error && validationFailures.has(cause)
                                ? ': ' + validationFailures.get(cause)
                                : ''), 'response', false, meta, undefined, undefined, { cause }, raw);
                    }
                    // Synchronous decoding cannot yield to the abort timer. Check the
                    // overall duration again before reporting a successful response.
                    meta.durationMs = performance.now() - start;
                    if (performance.now() >= deadline)
                        throw createSdkError('deadline', 'Response decoding exceeded the overall deadline', 'response', false, meta, undefined, undefined, undefined, raw);
                    const result = { data: data, meta, raw };
                    Object.defineProperty(result, inspectCustom, {
                        value: () => ({
                            data: redactCodec(data, declared.codec, this.options.redactFields, this.definitions()),
                            meta: inspectedMetadata(meta),
                        }),
                    });
                    return result;
                }
                const kind = [401, 403].includes(response.status)
                    ? 'authentication'
                    : response.status === 429
                        ? 'rate_limit'
                        : [400, 422].includes(response.status)
                            ? 'validation'
                            : [409, 412].includes(response.status)
                                ? 'conflict'
                                : response.status === 404
                                    ? 'not_found'
                                    : response.status >= 500 && response.status < 600
                                        ? 'server'
                                        : 'api';
                const code = field(data, this.contract.errors?.codePath ?? 'code');
                const originalMessage = field(data, this.contract.errors?.messagePath ?? 'message');
                const errorResponse = op.responses[String(response.status)] ?? op.responses.default;
                const codec = errorResponse?.codec;
                const safeBody = redactCodec(data, codec, this.options.redactFields, this.definitions());
                const detailsValue = this.contract.errors?.detailsPath
                    ? field(safeBody, this.contract.errors.detailsPath)
                    : safeBody;
                let details;
                if (this.contract.errorDetailsCertificate) {
                    try {
                        const decodedBody = codec
                            ? this.decode(safeBody, codec, { mode: 'response', path: 'error' })
                            : safeBody;
                        const decoded = plainNumbers(this.contract.errors?.detailsPath
                            ? field(decodedBody, this.contract.errors.detailsPath)
                            : decodedBody);
                        if (certifies(decoded, this.contract.errorDetailsCertificate))
                            details = structuredClone(decoded);
                    }
                    catch (cause) {
                        if (!(cause instanceof SdkError && cause.kind === 'validation'))
                            throw cause;
                    }
                }
                else
                    details = plainNumbers(detailsValue);
                const redacted = plainNumbers(safeBody);
                const publicCode = field(redacted, this.contract.errors?.codePath ?? 'code');
                const message = field(redacted, this.contract.errors?.messagePath ?? 'message');
                const signal = this.contract.errors?.retry;
                const retryValue = signal ? field(data, signal.path) : undefined;
                const eligible = safe &&
                    response.status !== 412 &&
                    (signal
                        ? typeof retryValue === 'string'
                            ? signal.retryValues.includes(retryValue)
                            : policy.statuses.includes(response.status)
                        : policy.statuses.includes(response.status) ||
                            (typeof code === 'string' &&
                                (policy.errors ?? []).some((rule) => rule.status === response.status && rule.codes.includes(code))));
                error = createSdkError(kind, typeof originalMessage === 'string' &&
                    originalMessage.trim() &&
                    typeof message === 'string'
                    ? message
                    : `API returned HTTP ${response.status}`, 'response', response.status !== 401 && eligible, meta, typeof code === 'string' && typeof publicCode === 'string' ? publicCode : undefined, details, undefined, raw);
                diagnosticError = kind;
                if (retryAfter !== undefined)
                    error.retryAfterMs = retryAfter;
            }
            catch (cause) {
                if (cause instanceof SdkError) {
                    diagnosticError = cause.kind;
                    throw cause;
                }
                if (diagnosticMeta?.status === 401) {
                    diagnosticError = 'authentication';
                    throw createSdkError('authentication', 'API returned HTTP 401', 'response', false, diagnosticMeta);
                }
                if (options.signal?.aborted)
                    diagnosticError = 'cancelled';
                stopped(options.signal);
                const code = transportCode(cause);
                const expired = performance.now() >= deadline;
                const timedOut = controller.signal.aborted ||
                    [
                        'ETIMEDOUT',
                        'UND_ERR_CONNECT_TIMEOUT',
                        'UND_ERR_HEADERS_TIMEOUT',
                        'UND_ERR_BODY_TIMEOUT',
                    ].includes(code ?? '');
                const notSent = !mayHaveBeenSent &&
                    diagnosticMeta === undefined &&
                    ['ECONNREFUSED', 'ENOTFOUND', 'EAI_AGAIN'].includes(code ?? '');
                mayHaveBeenSent ||= !notSent;
                diagnosticError = expired ? 'deadline' : timedOut ? 'timeout' : 'transport';
                error = createSdkError(diagnosticError, expired
                    ? 'Overall request deadline exceeded; remote outcome is unknown'
                    : timedOut
                        ? 'Request attempt timed out; remote outcome is unknown'
                        : notSent && code === 'ECONNREFUSED'
                            ? 'Connection refused; request was not sent'
                            : notSent && (code === 'ENOTFOUND' || code === 'EAI_AGAIN')
                                ? 'DNS lookup failed; request was not sent'
                                : 'Transport failed before a usable response; remote outcome is unknown', notSent ? 'not_sent' : 'unknown', !expired && safe && diagnosticMeta?.status !== 412 && policy.transport, diagnosticMeta, expired
                    ? 'deadline_exceeded'
                    : timedOut
                        ? 'request_timeout'
                        : (code ?? 'transport_failure'), { transportCode: code ?? null }, { cause });
                if (retryAfter !== undefined)
                    error.retryAfterMs = retryAfter;
            }
            finally {
                timer?.cancel();
                options.signal?.removeEventListener('abort', abort);
                try {
                    this.options.diagnostics?.({
                        operation: id,
                        attempt,
                        durationMs: performance.now() - start,
                        ...(diagnosticMeta
                            ? {
                                status: diagnosticMeta.status,
                                ...(diagnosticMeta.requestId ? { requestId: diagnosticMeta.requestId } : {}),
                            }
                            : {}),
                        ...(diagnosticError ? { errorKind: diagnosticError } : {}),
                    });
                }
                catch {
                    /* Diagnostics cannot change an operation's outcome. */
                }
            }
            if (!error?.retryAllowed || attempt >= attempts || performance.now() >= deadline)
                throw error;
            const d = Math.min(policy.baseDelayMs * 2 ** (attempt - credentialRetries - 1), policy.maxDelayMs ?? Infinity);
            const wait = Math.max(retryAfter ?? 0, d / 2 + (Math.random() * d) / 2);
            if (performance.now() + wait >= deadline)
                throw error;
            await delay(wait, options.signal);
        }
        throw new Error('Unreachable retry state');
    }
    async *pages(id, input = {}, options = {}) {
        const op = this.operation(id);
        if (!op?.pagination)
            return bad('pagination', 'capability is not declared');
        const p = op.pagination;
        let next;
        const request = { ...input };
        const limit = options.maxPages ?? 1000;
        const seen = new Set();
        let emptyPages = 0;
        if (!Number.isSafeInteger(limit) || limit < 1)
            bad('maxPages', 'must be a positive safe integer');
        for (let page = 0; page < limit; page++) {
            stopped(options.signal);
            // Each page owns its request deadline; time spent consuming yields is unbounded.
            const result = await this.request(id, request, options, p.kind === 'link' && typeof next === 'string' ? next : undefined);
            yield result;
            const sent = p.kind === 'link' ? (next ?? result.meta.url) : request[p.parameter];
            const previous = sent instanceof CompiledModel ? sent.toJSON() : sent;
            next = field(result.data, p.next);
            if (next === undefined || next === null || next === '')
                return;
            const values = field(result.data, p.items);
            emptyPages = Array.isArray(values) && values.length === 0 ? emptyPages + 1 : 0;
            if (emptyPages >= 2)
                throw createSdkError('protocol', 'Pagination returned consecutive empty pages with continuations', 'response', false, result.meta, 'pagination_empty_pages');
            if (p.kind === 'link' && typeof next !== 'string')
                throw createSdkError('protocol', 'Expected a pagination URL', 'response');
            if (p.kind === 'link')
                next = destinationUrl(next, result.meta.url ?? this.base).href;
            if (seen.has(String(next)) ||
                next === previous ||
                (p.kind === 'offset' && previous !== undefined && String(next) === String(previous)) ||
                (p.kind === 'link' && next === result.meta.url))
                throw createSdkError('protocol', 'Pagination returned a repeated continuation (cursor cycle)', 'response');
            if (previous !== undefined)
                seen.add(String(previous));
            seen.add(String(next));
            if (p.kind !== 'link')
                request[p.parameter] = next;
        }
    }
    async *items(id, input = {}, options = {}) {
        const p = this.operation(id)?.pagination;
        if (!p)
            return bad('pagination', 'capability is not declared');
        const limit = options.maxItems ?? Number.MAX_SAFE_INTEGER;
        if (!Number.isSafeInteger(limit) || limit < 1)
            bad('maxItems', 'must be a positive safe integer');
        let count = 0;
        for await (const page of this.pages(id, input, options)) {
            const values = field(page.data, p.items);
            if (!Array.isArray(values))
                throw createSdkError('protocol', 'Pagination items field is not an array', 'response');
            for (const value of values) {
                stopped(options.signal);
                const certificate = this.operation(id)?.itemCertificate;
                if (certificate && !certifies(value, certificate))
                    throw createSdkError('protocol', 'Pagination item does not fit its public type', 'response', false, page.meta, undefined, undefined, undefined, typeof page.raw === 'string' ? page.raw : undefined);
                yield value;
                if (++count >= limit)
                    return;
            }
        }
    }
    async wait(id, input, options = {}) {
        const p = this.operation(id)?.polling;
        if (!p)
            return bad('polling', 'capability is not declared');
        const deadline = performance.now() +
            positive(options.deadlineMs ?? this.options.deadlineMs ?? 30000, 'deadlineMs');
        let interval = p.intervalMs;
        for (;;) {
            const remaining = deadline - performance.now();
            if (remaining <= 0)
                throw createSdkError('deadline', 'Polling deadline exceeded; remote operation may still be running', 'unknown');
            const result = await this.request(id, input, { ...options, deadlineMs: remaining });
            const state = field(result.data, p.state);
            if (p.success.includes(state))
                return result;
            if (p.failure.includes(state))
                throw createSdkError('api', 'Operation reached a declared failure state', 'response', false, result.meta);
            await delay(Math.min(interval, Math.max(0, deadline - performance.now())), options.signal);
            interval = Math.min(interval * 1.5, 10000);
        }
    }
    verifyWebhook(rawBody, headers, secrets, nowSeconds) {
        return verifyWebhookFromPlan(this.descriptors ?? this.contract, rawBody, headers, secrets, nowSeconds, this.options.redactFields ?? []);
    }
    money(currency, major) {
        const currencies = this.contract.money?.currencies;
        const digits = currencies && Object.hasOwn(currencies, currency) ? currencies[currency] : undefined;
        if (digits === undefined)
            return bad('currency', 'currency is not declared by this provider');
        if (!/^-?(0|[1-9]\d*)(\.\d+)?$/.test(major))
            return bad('amount', 'expected an exact decimal string');
        const negative = major.startsWith('-');
        const [whole, fraction = ''] = major.replace(/^-/, '').split('.');
        if (fraction.length > digits)
            return bad('amount', 'unsupported precision; rounding must be explicit in application code');
        const amount = BigInt(whole + fraction.padEnd(digits, '0')) * (negative ? -1n : 1n);
        return { currency, amount: amount.toString() };
    }
}
/** Public dynamic-contract adapter; generated clients never retain this compiler path. */
export class Runtime extends CompiledRuntime {
    static [Symbol.hasInstance](value) {
        return this === Runtime
            ? value instanceof CompiledRuntime
            : Function.prototype[Symbol.hasInstance].call(this, value);
    }
    constructor(contract, options, compiled) {
        super(compiled ?? compileRuntimePlan(contract), options, compiled ? undefined : () => compileRuntimePlan(contract));
    }
}
/** Internal factory for generated clients; public Runtime construction remains schema-based. */
export function runtimeFromPlan(contract, options) {
    return new CompiledRuntime(contract, options);
}
