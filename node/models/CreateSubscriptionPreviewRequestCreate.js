import { d6844 as c0, d6842 as c8, d6843 as c9 } from '../descriptors/data/309.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d380 as c1 } from '../descriptors/data/24.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9552 as c2 } from '../descriptors/data/466.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7534 as c3 } from '../descriptors/data/347.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6744 as c4 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6945 as c5, d6946 as c6, d6947 as c7, d6953 as c11, d6954 as c12, d6963 as c23 } from '../descriptors/data/315.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8371 as c10, d8373 as c34 } from '../descriptors/data/397.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9571 as c13, d9572 as c14, d9573 as c17, d9574 as c18, d9575 as c19, d9576 as c20, d9577 as c21, d9578 as c22, d9579 as c25, d9580 as c26, d9581 as c27, d9582 as c28, d9583 as c29, d9584 as c30, d9585 as c31, d9586 as c32, d9587 as c35, d9588 as c37, d9589 as c38, d9590 as c39 } from '../descriptors/data/468.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8291 as c15, d8292 as c16, d8293 as c33 } from '../descriptors/data/393.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6964 as c24, d6965 as c36 } from '../descriptors/data/316.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9591 as c40 } from '../descriptors/data/469.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d380 as d380 } from '../descriptors/data/24.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d380;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionPreviewRequestCreate"]:c1(),["CreateSubscriptionRequest"]:c2(),["DeliverySelectionRecipientRequest"]:c3(),["MetadataRequest"]:c4(),["PromotionRefInputPromotionCode"]:c5(),["PromotionRefInputPromotionID"]:c6(),["PromotionRefRequest"]:c7(),["SharedCodec0"]:c8(),["SharedCodec1"]:c9(),["SharedCodec136"]:c10(),["SharedCodec188"]:c11(),["SharedCodec189"]:c12(),["SharedCodec2252"]:c13(),["SharedCodec2253"]:c14(),["SharedCodec2267"]:c15(),["SharedCodec2268"]:c16(),["SharedCodec2330"]:c17(),["SharedCodec2331"]:c18(),["SharedCodec2332"]:c19(),["SharedCodec2333"]:c20(),["SharedCodec2334"]:c21(),["SharedCodec2335"]:c22(),["SharedCodec259"]:c23(),["SharedCodec260"]:c24(),["SharedCodec527"]:c25(),["SharedCodec528"]:c26(),["SharedCodec529"]:c27(),["SharedCodec530"]:c28(),["SharedCodec531"]:c29(),["SharedCodec532"]:c30(),["SubscriptionBillingScheduleRequest"]:c31(),["SubscriptionBillingStartRequest"]:c32(),["SubscriptionDeliveryDestinationRequest"]:c33(),["SubscriptionDeliveryRequest"]:c34(),["SubscriptionOfferLineItemRequest"]:c35(),["SubscriptionPlanChangeLineItemRequest"]:c36(),["SubscriptionPromotionRequest"]:c37(),["SubscriptionServiceLocationRequest"]:c38(),["SubscriptionTaxRequest"]:c39(),["SubscriptionTermsRequest"]:c40()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPreviewRequestCreate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
