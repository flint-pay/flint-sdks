import { d6041 as c0, d6039 as c20, d6040 as c21 } from '../descriptors/data/274.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6153 as c1, d6154 as c6, d6148 as c7, d6155 as c8, d6156 as c9, d6157 as c10, d6158 as c11, d6152 as c16, d6142 as c17, d6143 as c18, d6144 as c19, d6150 as c22, d6151 as c23, d6145 as c26, d6146 as c27, d6147 as c28 } from '../descriptors/data/280.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5970 as c2, d5971 as c3, d5972 as c4, d5973 as c5 } from '../descriptors/data/269.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5977 as c12 } from '../descriptors/data/270.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d215 as c13 } from '../descriptors/data/10.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c14 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c15 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6160 as c24, d6161 as c25, d6162 as c34 } from '../descriptors/data/281.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5994 as c29, d5995 as c30, d5996 as c31 } from '../descriptors/data/271.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6006 as c32, d6007 as c33 } from '../descriptors/data/272.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6020 as c35 } from '../descriptors/data/273.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d215 as d215 } from '../descriptors/data/10.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d215;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutRedirectsRequest"]:c7(),["CheckoutSubscriptionTermsRequest"]:c8(),["CheckoutTaxCalculationRequest"]:c9(),["CheckoutTaxConfigRequest"]:c10(),["CheckoutTipConfigRequest"]:c11(),["CreateCheckoutSessionDiscount"]:c12(),["CreateCheckoutSessionSubscriptionPlan"]:c13(),["MetadataRequest"]:c14(),["MoneyValue"]:c15(),["PlatformFeeRequest"]:c16(),["PromotionRefInputPromotionCode"]:c17(),["PromotionRefInputPromotionID"]:c18(),["PromotionRefRequest"]:c19(),["SharedCodec0"]:c20(),["SharedCodec1"]:c21(),["SharedCodec145"]:c22(),["SharedCodec146"]:c23(),["SharedCodec169"]:c24(),["SharedCodec170"]:c25(),["SharedCodec194"]:c26(),["SharedCodec195"]:c27(),["SharedCodec196"]:c28(),["SharedCodec197"]:c29(),["SharedCodec198"]:c30(),["SharedCodec199"]:c31(),["SharedCodec209"]:c32(),["SharedCodec210"]:c33(),["SubscriptionPlanChangeLineItemRequest"]:c34(),["ThemeConfigRequest"]:c35()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionSubscriptionPlan(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
