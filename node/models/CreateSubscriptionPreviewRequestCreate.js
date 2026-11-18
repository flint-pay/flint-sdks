import { d8114 as c0, d8112 as c9, d8113 as c22 } from '../descriptors/data/352.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d418 as c1 } from '../descriptors/data/26.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10902 as c2 } from '../descriptors/data/513.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8802 as c3 } from '../descriptors/data/389.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8014 as c4 } from '../descriptors/data/346.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8216 as c5, d8217 as c6, d8218 as c7, d8224 as c10, d8225 as c11 } from '../descriptors/data/358.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9686 as c8, d9688 as c34 } from '../descriptors/data/442.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10921 as c12, d10922 as c13, d10923 as c16, d10924 as c17, d10925 as c18, d10926 as c19, d10927 as c20 } from '../descriptors/data/514.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9608 as c14, d9609 as c15, d9610 as c33 } from '../descriptors/data/438.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10928 as c21, d10929 as c25, d10930 as c26, d10931 as c27, d10932 as c28, d10933 as c29, d10934 as c30, d10935 as c31, d10936 as c32, d10937 as c35, d10938 as c37, d10939 as c38, d10940 as c39, d10941 as c40 } from '../descriptors/data/515.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8235 as c23, d8236 as c24, d8237 as c36 } from '../descriptors/data/359.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d418 as d418 } from '../descriptors/data/26.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d418;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionPreviewRequestCreate"]:c1(),["CreateSubscriptionRequest"]:c2(),["DeliverySelectionRecipientRequest"]:c3(),["MetadataRequest"]:c4(),["PromotionRefInputPromotionCode"]:c5(),["PromotionRefInputPromotionID"]:c6(),["PromotionRefRequest"]:c7(),["SharedCodec169"]:c8(),["SharedCodec2"]:c9(),["SharedCodec232"]:c10(),["SharedCodec233"]:c11(),["SharedCodec2875"]:c12(),["SharedCodec2876"]:c13(),["SharedCodec2892"]:c14(),["SharedCodec2893"]:c15(),["SharedCodec2976"]:c16(),["SharedCodec2977"]:c17(),["SharedCodec2979"]:c18(),["SharedCodec2980"]:c19(),["SharedCodec2981"]:c20(),["SharedCodec2982"]:c21(),["SharedCodec3"]:c22(),["SharedCodec313"]:c23(),["SharedCodec314"]:c24(),["SharedCodec590"]:c25(),["SharedCodec591"]:c26(),["SharedCodec592"]:c27(),["SharedCodec593"]:c28(),["SharedCodec594"]:c29(),["SharedCodec595"]:c30(),["SubscriptionBillingScheduleRequest"]:c31(),["SubscriptionBillingStartRequest"]:c32(),["SubscriptionDeliveryDestinationRequest"]:c33(),["SubscriptionDeliveryRequest"]:c34(),["SubscriptionOfferLineItemRequest"]:c35(),["SubscriptionPlanChangeLineItemRequest"]:c36(),["SubscriptionPromotionRequest"]:c37(),["SubscriptionServiceLocationRequest"]:c38(),["SubscriptionTaxRequest"]:c39(),["SubscriptionTermsRequest"]:c40()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPreviewRequestCreate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
