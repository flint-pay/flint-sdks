import { d3148 as c0 } from '../descriptors/data/124.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3206 as c1, d3216 as c6, d3218 as c8 } from '../descriptors/data/127.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3089 as c2, d3090 as c3, d3091 as c4, d3092 as c5, d3093 as c7 } from '../descriptors/data/120.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3095 as c9 } from '../descriptors/data/121.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3298 as c10 } from '../descriptors/data/132.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3224 as c11, d3225 as c17, d3226 as c18, d3227 as c19 } from '../descriptors/data/128.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d118 as c12 } from '../descriptors/data/4.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3000 as c13 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3237 as c14 } from '../descriptors/data/129.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3280 as c15, d3281 as c16 } from '../descriptors/data/130.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3120 as c20, d3121 as c21, d3122 as c22, d3123 as c23, d3124 as c24, d3125 as c25, d3126 as c26, d3127 as c27, d3128 as c28, d3129 as c29 } from '../descriptors/data/122.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d118 as d118 } from '../descriptors/data/4.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d118;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFields"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfig"]:c6(),["CheckoutQuickPayItemRequest"]:c7(),["CheckoutRedirectsRequest"]:c8(),["CheckoutSubscriptionTermsRequest"]:c9(),["CheckoutTaxConfig"]:c10(),["CheckoutTipConfig"]:c11(),["CreateCheckoutSessionRequest"]:c12(),["MoneyValue"]:c13(),["OrderLineItemTax"]:c14(),["SharedCodec43"]:c15(),["SharedCodec44"]:c16(),["SharedCodec58"]:c17(),["SharedCodec59"]:c18(),["SharedCodec60"]:c19(),["SharedCodec61"]:c20(),["SharedCodec62"]:c21(),["SharedCodec63"]:c22(),["SharedCodec64"]:c23(),["SharedCodec65"]:c24(),["SharedCodec66"]:c25(),["SharedCodec67"]:c26(),["SharedCodec68"]:c27(),["SharedCodec69"]:c28(),["ThemeConfigRequest"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
