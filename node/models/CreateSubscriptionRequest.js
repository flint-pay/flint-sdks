import { d6844 as c0, d6842 as c7, d6843 as c8 } from '../descriptors/data/309.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9552 as c1 } from '../descriptors/data/466.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7534 as c2 } from '../descriptors/data/347.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6744 as c3 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6945 as c4, d6946 as c5, d6947 as c6, d6953 as c10, d6954 as c11, d6963 as c22 } from '../descriptors/data/315.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8371 as c9, d8373 as c33 } from '../descriptors/data/397.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9571 as c12, d9572 as c13, d9573 as c16, d9574 as c17, d9575 as c18, d9576 as c19, d9577 as c20, d9578 as c21, d9579 as c24, d9580 as c25, d9581 as c26, d9582 as c27, d9583 as c28, d9584 as c29, d9585 as c30, d9586 as c31, d9587 as c34, d9588 as c36, d9589 as c37, d9590 as c38 } from '../descriptors/data/468.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8291 as c14, d8292 as c15, d8293 as c32 } from '../descriptors/data/393.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6964 as c23, d6965 as c35 } from '../descriptors/data/316.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9591 as c39 } from '../descriptors/data/469.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9552 as d9552 } from '../descriptors/data/466.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9552;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateSubscriptionRequest"]:c1(),["DeliverySelectionRecipientRequest"]:c2(),["MetadataRequest"]:c3(),["PromotionRefInputPromotionCode"]:c4(),["PromotionRefInputPromotionID"]:c5(),["PromotionRefRequest"]:c6(),["SharedCodec0"]:c7(),["SharedCodec1"]:c8(),["SharedCodec136"]:c9(),["SharedCodec188"]:c10(),["SharedCodec189"]:c11(),["SharedCodec2252"]:c12(),["SharedCodec2253"]:c13(),["SharedCodec2267"]:c14(),["SharedCodec2268"]:c15(),["SharedCodec2330"]:c16(),["SharedCodec2331"]:c17(),["SharedCodec2332"]:c18(),["SharedCodec2333"]:c19(),["SharedCodec2334"]:c20(),["SharedCodec2335"]:c21(),["SharedCodec259"]:c22(),["SharedCodec260"]:c23(),["SharedCodec527"]:c24(),["SharedCodec528"]:c25(),["SharedCodec529"]:c26(),["SharedCodec530"]:c27(),["SharedCodec531"]:c28(),["SharedCodec532"]:c29(),["SubscriptionBillingScheduleRequest"]:c30(),["SubscriptionBillingStartRequest"]:c31(),["SubscriptionDeliveryDestinationRequest"]:c32(),["SubscriptionDeliveryRequest"]:c33(),["SubscriptionOfferLineItemRequest"]:c34(),["SubscriptionPlanChangeLineItemRequest"]:c35(),["SubscriptionPromotionRequest"]:c36(),["SubscriptionServiceLocationRequest"]:c37(),["SubscriptionTaxRequest"]:c38(),["SubscriptionTermsRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
