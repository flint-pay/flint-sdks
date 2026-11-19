import { d8114 as c0, d8112 as c8, d8113 as c21 } from '../descriptors/data/353.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10905 as c1 } from '../descriptors/data/515.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8838 as c2 } from '../descriptors/data/392.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8014 as c3 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8217 as c4, d8218 as c5, d8219 as c6, d8225 as c9, d8226 as c10 } from '../descriptors/data/359.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9688 as c7, d9690 as c33 } from '../descriptors/data/443.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10924 as c11, d10925 as c12, d10926 as c15, d10927 as c16, d10928 as c17, d10929 as c18 } from '../descriptors/data/516.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9596 as c13, d9597 as c14, d9598 as c32 } from '../descriptors/data/437.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10930 as c19, d10931 as c20, d10932 as c24, d10933 as c25, d10934 as c26, d10935 as c27, d10936 as c28, d10937 as c29, d10938 as c30, d10939 as c31, d10940 as c34, d10941 as c36, d10942 as c37, d10943 as c38, d10944 as c39 } from '../descriptors/data/517.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8236 as c22, d8237 as c23, d8238 as c35 } from '../descriptors/data/360.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10905 as d10905 } from '../descriptors/data/515.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10905;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["MetadataRequest"]:c3(),["PromotionRefInputPromotionCode"]:c4(),["PromotionRefInputPromotionID"]:c5(),["PromotionRefRequest"]:c6(),["SharedCodec169"]:c7(),["SharedCodec2"]:c8(),["SharedCodec232"]:c9(),["SharedCodec233"]:c10(),["SharedCodec2875"]:c11(),["SharedCodec2876"]:c12(),["SharedCodec2892"]:c13(),["SharedCodec2893"]:c14(),["SharedCodec2976"]:c15(),["SharedCodec2977"]:c16(),["SharedCodec2979"]:c17(),["SharedCodec2980"]:c18(),["SharedCodec2981"]:c19(),["SharedCodec2982"]:c20(),["SharedCodec3"]:c21(),["SharedCodec314"]:c22(),["SharedCodec315"]:c23(),["SharedCodec592"]:c24(),["SharedCodec593"]:c25(),["SharedCodec594"]:c26(),["SharedCodec595"]:c27(),["SharedCodec596"]:c28(),["SharedCodec597"]:c29(),["SubscriptionBillingScheduleRequest"]:c30(),["SubscriptionBillingStartRequest"]:c31(),["SubscriptionDeliveryDestinationRequest"]:c32(),["SubscriptionDeliveryRequest"]:c33(),["SubscriptionOfferLineItemRequest"]:c34(),["SubscriptionPlanChangeLineItemRequest"]:c35(),["SubscriptionPromotionRequest"]:c36(),["SubscriptionServiceLocationRequest"]:c37(),["SubscriptionTaxRequest"]:c38(),["SubscriptionTermsRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
