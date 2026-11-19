import { d8114 as c0, d8112 as c22, d8113 as c23 } from '../descriptors/data/353.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8229 as c1, d8230 as c6, d8223 as c8, d8228 as c17, d8227 as c18, d8217 as c19, d8218 as c20, d8219 as c21, d8220 as c24, d8221 as c25, d8222 as c26 } from '../descriptors/data/359.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8043 as c2, d8044 as c3, d8045 as c4, d8046 as c5, d8047 as c7 } from '../descriptors/data/348.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8232 as c9, d8233 as c10, d8234 as c11, d8235 as c16 } from '../descriptors/data/360.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8050 as c12 } from '../descriptors/data/349.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d249 as c13 } from '../descriptors/data/11.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8014 as c14 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c15 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8067 as c27, d8068 as c28, d8069 as c29 } from '../descriptors/data/350.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8075 as c30, d8076 as c31 } from '../descriptors/data/351.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8093 as c32 } from '../descriptors/data/352.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d249 as d249 } from '../descriptors/data/11.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d249;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutQuickPayItemRequest"]:c7(),["CheckoutRedirectsRequest"]:c8(),["CheckoutTaxCalculationRequest"]:c9(),["CheckoutTaxConfigRequest"]:c10(),["CheckoutTipConfigRequest"]:c11(),["CreateCheckoutSessionDiscount"]:c12(),["CreateCheckoutSessionQuickPay"]:c13(),["MetadataRequest"]:c14(),["MoneyValue"]:c15(),["OrderLineItemTaxRequest"]:c16(),["PlatformFeeMoney"]:c17(),["PlatformFeeRequest"]:c18(),["PromotionRefInputPromotionCode"]:c19(),["PromotionRefInputPromotionID"]:c20(),["PromotionRefRequest"]:c21(),["SharedCodec2"]:c22(),["SharedCodec3"]:c23(),["SharedCodec348"]:c24(),["SharedCodec349"]:c25(),["SharedCodec350"]:c26(),["SharedCodec351"]:c27(),["SharedCodec352"]:c28(),["SharedCodec353"]:c29(),["SharedCodec358"]:c30(),["SharedCodec359"]:c31(),["ThemeConfigRequest"]:c32()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionQuickPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
