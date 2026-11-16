import { d6041 as c0, d6039 as c13, d6040 as c14 } from '../descriptors/data/274.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6153 as c1, d6154 as c6, d6148 as c7, d6158 as c8, d6152 as c12, d6145 as c15, d6146 as c16, d6147 as c17 } from '../descriptors/data/280.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5970 as c2, d5971 as c3, d5972 as c4, d5973 as c5 } from '../descriptors/data/269.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d209 as c9 } from '../descriptors/data/9.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c10 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c11 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5994 as c18, d5995 as c19, d5996 as c20, d5999 as c21, d6000 as c22 } from '../descriptors/data/271.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6020 as c23 } from '../descriptors/data/273.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d209 as d209 } from '../descriptors/data/9.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d209;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutRedirectsRequest"]:c7(),["CheckoutTipConfigRequest"]:c8(),["CreateCheckoutSessionOrder"]:c9(),["MetadataRequest"]:c10(),["MoneyValue"]:c11(),["PlatformFeeRequest"]:c12(),["SharedCodec0"]:c13(),["SharedCodec1"]:c14(),["SharedCodec194"]:c15(),["SharedCodec195"]:c16(),["SharedCodec196"]:c17(),["SharedCodec197"]:c18(),["SharedCodec198"]:c19(),["SharedCodec199"]:c20(),["SharedCodec202"]:c21(),["SharedCodec203"]:c22(),["ThemeConfigRequest"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionOrder(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
