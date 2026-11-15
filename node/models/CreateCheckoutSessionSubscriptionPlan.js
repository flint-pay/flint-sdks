import { d6011 as c0, d6009 as c20, d6010 as c21 } from '../descriptors/data/273.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6123 as c1, d6124 as c6, d6118 as c7, d6125 as c8, d6126 as c9, d6127 as c10, d6128 as c11, d6122 as c16, d6112 as c17, d6113 as c18, d6114 as c19, d6120 as c22, d6121 as c23, d6115 as c26, d6116 as c27, d6117 as c28 } from '../descriptors/data/279.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5940 as c2, d5941 as c3, d5942 as c4, d5943 as c5 } from '../descriptors/data/268.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5947 as c12 } from '../descriptors/data/269.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d212 as c13 } from '../descriptors/data/10.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5911 as c14 } from '../descriptors/data/267.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c15 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6130 as c24, d6131 as c25, d6132 as c34 } from '../descriptors/data/280.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5964 as c29, d5965 as c30, d5966 as c31 } from '../descriptors/data/270.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5976 as c32, d5977 as c33 } from '../descriptors/data/271.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5990 as c35 } from '../descriptors/data/272.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d212 as d212 } from '../descriptors/data/10.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d212;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutRedirectsRequest"]:c7(),["CheckoutSubscriptionTermsRequest"]:c8(),["CheckoutTaxCalculationRequest"]:c9(),["CheckoutTaxConfigRequest"]:c10(),["CheckoutTipConfigRequest"]:c11(),["CreateCheckoutSessionDiscount"]:c12(),["CreateCheckoutSessionSubscriptionPlan"]:c13(),["MetadataRequest"]:c14(),["MoneyValue"]:c15(),["PlatformFeeRequest"]:c16(),["PromotionRefInputPromotionCode"]:c17(),["PromotionRefInputPromotionID"]:c18(),["PromotionRefRequest"]:c19(),["SharedCodec0"]:c20(),["SharedCodec1"]:c21(),["SharedCodec145"]:c22(),["SharedCodec146"]:c23(),["SharedCodec169"]:c24(),["SharedCodec170"]:c25(),["SharedCodec194"]:c26(),["SharedCodec195"]:c27(),["SharedCodec196"]:c28(),["SharedCodec197"]:c29(),["SharedCodec198"]:c30(),["SharedCodec199"]:c31(),["SharedCodec209"]:c32(),["SharedCodec210"]:c33(),["SubscriptionPlanChangeLineItemRequest"]:c34(),["ThemeConfigRequest"]:c35()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionSubscriptionPlan(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
