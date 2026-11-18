import { d8114 as c0, d8112 as c8, d8113 as c21 } from '../descriptors/data/352.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10902 as c1 } from '../descriptors/data/513.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8802 as c2 } from '../descriptors/data/389.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8014 as c3 } from '../descriptors/data/346.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8216 as c4, d8217 as c5, d8218 as c6, d8224 as c9, d8225 as c10 } from '../descriptors/data/358.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9686 as c7, d9688 as c33 } from '../descriptors/data/442.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10921 as c11, d10922 as c12, d10923 as c15, d10924 as c16, d10925 as c17, d10926 as c18, d10927 as c19 } from '../descriptors/data/514.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9608 as c13, d9609 as c14, d9610 as c32 } from '../descriptors/data/438.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10928 as c20, d10929 as c24, d10930 as c25, d10931 as c26, d10932 as c27, d10933 as c28, d10934 as c29, d10935 as c30, d10936 as c31, d10937 as c34, d10938 as c36, d10939 as c37, d10940 as c38, d10941 as c39 } from '../descriptors/data/515.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8235 as c22, d8236 as c23, d8237 as c35 } from '../descriptors/data/359.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10902 as d10902 } from '../descriptors/data/513.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10902;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["MetadataRequest"]:c3(),["PromotionRefInputPromotionCode"]:c4(),["PromotionRefInputPromotionID"]:c5(),["PromotionRefRequest"]:c6(),["SharedCodec169"]:c7(),["SharedCodec2"]:c8(),["SharedCodec232"]:c9(),["SharedCodec233"]:c10(),["SharedCodec2875"]:c11(),["SharedCodec2876"]:c12(),["SharedCodec2892"]:c13(),["SharedCodec2893"]:c14(),["SharedCodec2976"]:c15(),["SharedCodec2977"]:c16(),["SharedCodec2979"]:c17(),["SharedCodec2980"]:c18(),["SharedCodec2981"]:c19(),["SharedCodec2982"]:c20(),["SharedCodec3"]:c21(),["SharedCodec313"]:c22(),["SharedCodec314"]:c23(),["SharedCodec590"]:c24(),["SharedCodec591"]:c25(),["SharedCodec592"]:c26(),["SharedCodec593"]:c27(),["SharedCodec594"]:c28(),["SharedCodec595"]:c29(),["SubscriptionBillingScheduleRequest"]:c30(),["SubscriptionBillingStartRequest"]:c31(),["SubscriptionDeliveryDestinationRequest"]:c32(),["SubscriptionDeliveryRequest"]:c33(),["SubscriptionOfferLineItemRequest"]:c34(),["SubscriptionPlanChangeLineItemRequest"]:c35(),["SubscriptionPromotionRequest"]:c36(),["SubscriptionServiceLocationRequest"]:c37(),["SubscriptionTaxRequest"]:c38(),["SubscriptionTermsRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
