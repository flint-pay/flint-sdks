
import type { CreateSubscriptionRequestInput } from './CreateSubscriptionRequestInput.js';
import type { SubscriptionDeliveryDestinationRequestInput } from './SubscriptionDeliveryDestinationRequestInput.js';
import type { UpdateDeliveryMethodRequestInput } from './UpdateDeliveryMethodRequestInput.js';

export type CreateSubscriptionPreviewRequestInput = (({ "destination": SubscriptionDeliveryDestinationRequestInput; "mode": "delivery_options"; /** pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. */ "subscription_id": string; }) | ({ "mode": "create"; "subscription": CreateSubscriptionRequestInput; }) | ({ "delivery_method": UpdateDeliveryMethodRequestInput; /** pattern: ^dmet_[0-9A-HJKMNP-TV-Z]{26}$. */ "delivery_method_id": string; "mode": "delivery_method_update"; }));
