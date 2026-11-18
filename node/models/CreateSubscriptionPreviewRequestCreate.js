import { d8114 as c0, d8112 as c9, d8113 as c22 } from '../descriptors/data/353.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d418 as c1 } from '../descriptors/data/26.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10901 as c2 } from '../descriptors/data/514.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8802 as c3 } from '../descriptors/data/390.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8014 as c4 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8216 as c5, d8217 as c6, d8218 as c7, d8224 as c10, d8225 as c11 } from '../descriptors/data/359.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9685 as c8, d9687 as c34 } from '../descriptors/data/443.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10920 as c12, d10921 as c13, d10922 as c16, d10923 as c17, d10924 as c18, d10925 as c19, d10926 as c20 } from '../descriptors/data/515.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9607 as c14, d9608 as c15, d9609 as c33 } from '../descriptors/data/439.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10927 as c21, d10928 as c25, d10929 as c26, d10930 as c27, d10931 as c28, d10932 as c29, d10933 as c30, d10934 as c31, d10935 as c32, d10936 as c35, d10937 as c37, d10938 as c38, d10939 as c39, d10940 as c40 } from '../descriptors/data/516.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8235 as c23, d8236 as c24, d8237 as c36 } from '../descriptors/data/360.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d418 as d418 } from '../descriptors/data/26.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d418;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionPreviewRequestCreate"]:c1(),["CreateSubscriptionRequest"]:c2(),["DeliverySelectionRecipientRequest"]:c3(),["MetadataRequest"]:c4(),["PromotionRefInputPromotionCode"]:c5(),["PromotionRefInputPromotionID"]:c6(),["PromotionRefRequest"]:c7(),["SharedCodec169"]:c8(),["SharedCodec2"]:c9(),["SharedCodec232"]:c10(),["SharedCodec233"]:c11(),["SharedCodec2874"]:c12(),["SharedCodec2875"]:c13(),["SharedCodec2891"]:c14(),["SharedCodec2892"]:c15(),["SharedCodec2975"]:c16(),["SharedCodec2976"]:c17(),["SharedCodec2978"]:c18(),["SharedCodec2979"]:c19(),["SharedCodec2980"]:c20(),["SharedCodec2981"]:c21(),["SharedCodec3"]:c22(),["SharedCodec313"]:c23(),["SharedCodec314"]:c24(),["SharedCodec590"]:c25(),["SharedCodec591"]:c26(),["SharedCodec592"]:c27(),["SharedCodec593"]:c28(),["SharedCodec594"]:c29(),["SharedCodec595"]:c30(),["SubscriptionBillingScheduleRequest"]:c31(),["SubscriptionBillingStartRequest"]:c32(),["SubscriptionDeliveryDestinationRequest"]:c33(),["SubscriptionDeliveryRequest"]:c34(),["SubscriptionOfferLineItemRequest"]:c35(),["SubscriptionPlanChangeLineItemRequest"]:c36(),["SubscriptionPromotionRequest"]:c37(),["SubscriptionServiceLocationRequest"]:c38(),["SubscriptionTaxRequest"]:c39(),["SubscriptionTermsRequest"]:c40()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPreviewRequestCreate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
