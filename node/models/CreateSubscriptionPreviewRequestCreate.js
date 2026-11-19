import { d8114 as c0, d8112 as c9, d8113 as c22 } from '../descriptors/data/353.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d418 as c1 } from '../descriptors/data/26.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10905 as c2 } from '../descriptors/data/515.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8838 as c3 } from '../descriptors/data/392.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8014 as c4 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8217 as c5, d8218 as c6, d8219 as c7, d8225 as c10, d8226 as c11 } from '../descriptors/data/359.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9688 as c8, d9690 as c34 } from '../descriptors/data/443.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10924 as c12, d10925 as c13, d10926 as c16, d10927 as c17, d10928 as c18, d10929 as c19 } from '../descriptors/data/516.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9596 as c14, d9597 as c15, d9598 as c33 } from '../descriptors/data/437.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10930 as c20, d10931 as c21, d10932 as c25, d10933 as c26, d10934 as c27, d10935 as c28, d10936 as c29, d10937 as c30, d10938 as c31, d10939 as c32, d10940 as c35, d10941 as c37, d10942 as c38, d10943 as c39, d10944 as c40 } from '../descriptors/data/517.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8236 as c23, d8237 as c24, d8238 as c36 } from '../descriptors/data/360.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d418 as d418 } from '../descriptors/data/26.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d418;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionPreviewRequestCreate"]:c1(),["CreateSubscriptionRequest"]:c2(),["DeliverySelectionRecipientRequest"]:c3(),["MetadataRequest"]:c4(),["PromotionRefInputPromotionCode"]:c5(),["PromotionRefInputPromotionID"]:c6(),["PromotionRefRequest"]:c7(),["SharedCodec169"]:c8(),["SharedCodec2"]:c9(),["SharedCodec232"]:c10(),["SharedCodec233"]:c11(),["SharedCodec2875"]:c12(),["SharedCodec2876"]:c13(),["SharedCodec2892"]:c14(),["SharedCodec2893"]:c15(),["SharedCodec2976"]:c16(),["SharedCodec2977"]:c17(),["SharedCodec2979"]:c18(),["SharedCodec2980"]:c19(),["SharedCodec2981"]:c20(),["SharedCodec2982"]:c21(),["SharedCodec3"]:c22(),["SharedCodec314"]:c23(),["SharedCodec315"]:c24(),["SharedCodec592"]:c25(),["SharedCodec593"]:c26(),["SharedCodec594"]:c27(),["SharedCodec595"]:c28(),["SharedCodec596"]:c29(),["SharedCodec597"]:c30(),["SubscriptionBillingScheduleRequest"]:c31(),["SubscriptionBillingStartRequest"]:c32(),["SubscriptionDeliveryDestinationRequest"]:c33(),["SubscriptionDeliveryRequest"]:c34(),["SubscriptionOfferLineItemRequest"]:c35(),["SubscriptionPlanChangeLineItemRequest"]:c36(),["SubscriptionPromotionRequest"]:c37(),["SubscriptionServiceLocationRequest"]:c38(),["SubscriptionTaxRequest"]:c39(),["SubscriptionTermsRequest"]:c40()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPreviewRequestCreate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
