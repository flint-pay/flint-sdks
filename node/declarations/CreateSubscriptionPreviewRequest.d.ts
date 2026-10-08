
import type { CreateSubscriptionRequest } from './CreateSubscriptionRequest.js';
import type { SubscriptionDeliveryDestinationRequest } from './SubscriptionDeliveryDestinationRequest.js';
import type { UpdateDeliveryMethodRequest } from './UpdateDeliveryMethodRequest.js';

export type CreateSubscriptionPreviewRequest = (({ "destination": SubscriptionDeliveryDestinationRequest; "mode": "delivery_options"; /** pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. */ "subscription_id": string; }) | ({ "mode": "create"; "subscription": CreateSubscriptionRequest; }) | ({ "delivery_method": UpdateDeliveryMethodRequest; /** pattern: ^dmet_[0-9A-HJKMNP-TV-Z]{26}$. */ "delivery_method_id": string; "mode": "delivery_method_update"; }) | (object));
