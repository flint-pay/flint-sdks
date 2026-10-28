import { d3162 as c0 } from '../descriptors/data/125.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3220 as c1 } from '../descriptors/data/128.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3102 as c2, d3103 as c3, d3104 as c4, d3105 as c5, d3106 as c7, d3108 as c9 } from '../descriptors/data/122.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3230 as c6, d3232 as c8, d3238 as c11, d3239 as c17, d3240 as c18, d3241 as c19 } from '../descriptors/data/129.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3312 as c10 } from '../descriptors/data/133.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d119 as c12 } from '../descriptors/data/4.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3013 as c13 } from '../descriptors/data/116.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3251 as c14 } from '../descriptors/data/130.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3294 as c15, d3295 as c16 } from '../descriptors/data/131.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3134 as c20 } from '../descriptors/data/123.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3135 as c21, d3136 as c22, d3137 as c23, d3138 as c24, d3139 as c25, d3140 as c26, d3141 as c27, d3142 as c28, d3143 as c29 } from '../descriptors/data/124.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d119 as d119 } from '../descriptors/data/4.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d119;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFields"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfig"]:c6(),["CheckoutQuickPayItemRequest"]:c7(),["CheckoutRedirectsRequest"]:c8(),["CheckoutSubscriptionTermsRequest"]:c9(),["CheckoutTaxConfig"]:c10(),["CheckoutTipConfig"]:c11(),["CreateCheckoutSessionRequest"]:c12(),["MoneyValue"]:c13(),["OrderLineItemTax"]:c14(),["SharedCodec47"]:c15(),["SharedCodec48"]:c16(),["SharedCodec63"]:c17(),["SharedCodec64"]:c18(),["SharedCodec65"]:c19(),["SharedCodec66"]:c20(),["SharedCodec67"]:c21(),["SharedCodec68"]:c22(),["SharedCodec69"]:c23(),["SharedCodec70"]:c24(),["SharedCodec71"]:c25(),["SharedCodec72"]:c26(),["SharedCodec73"]:c27(),["SharedCodec74"]:c28(),["ThemeConfigRequest"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
