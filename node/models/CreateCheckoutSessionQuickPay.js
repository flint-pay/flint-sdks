import { d6041 as c0, d6039 as c21, d6040 as c22 } from '../descriptors/data/274.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6153 as c1, d6154 as c6, d6148 as c8, d6156 as c9, d6157 as c10, d6158 as c11, d6152 as c17, d6142 as c18, d6143 as c19, d6144 as c20, d6145 as c23, d6146 as c24, d6147 as c25 } from '../descriptors/data/280.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5970 as c2, d5971 as c3, d5972 as c4, d5973 as c5, d5974 as c7 } from '../descriptors/data/269.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5977 as c12 } from '../descriptors/data/270.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d211 as c13 } from '../descriptors/data/9.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c14 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c15 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6159 as c16 } from '../descriptors/data/281.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5994 as c26, d5995 as c27, d5996 as c28, d6001 as c29 } from '../descriptors/data/271.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6002 as c30 } from '../descriptors/data/272.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6020 as c31 } from '../descriptors/data/273.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d211 as d211 } from '../descriptors/data/9.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d211;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutQuickPayItemRequest"]:c7(),["CheckoutRedirectsRequest"]:c8(),["CheckoutTaxCalculationRequest"]:c9(),["CheckoutTaxConfigRequest"]:c10(),["CheckoutTipConfigRequest"]:c11(),["CreateCheckoutSessionDiscount"]:c12(),["CreateCheckoutSessionQuickPay"]:c13(),["MetadataRequest"]:c14(),["MoneyValue"]:c15(),["OrderLineItemTaxRequest"]:c16(),["PlatformFeeRequest"]:c17(),["PromotionRefInputPromotionCode"]:c18(),["PromotionRefInputPromotionID"]:c19(),["PromotionRefRequest"]:c20(),["SharedCodec0"]:c21(),["SharedCodec1"]:c22(),["SharedCodec194"]:c23(),["SharedCodec195"]:c24(),["SharedCodec196"]:c25(),["SharedCodec197"]:c26(),["SharedCodec198"]:c27(),["SharedCodec199"]:c28(),["SharedCodec204"]:c29(),["SharedCodec205"]:c30(),["ThemeConfigRequest"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionQuickPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
