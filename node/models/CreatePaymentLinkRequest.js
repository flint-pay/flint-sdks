import { d3206 as c0, d3216 as c1, d3218 as c2 } from '../descriptors/data/127.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3298 as c3 } from '../descriptors/data/132.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3224 as c4 } from '../descriptors/data/128.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d189 as c5 } from '../descriptors/data/10.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3069 as c6 } from '../descriptors/data/119.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4070 as c7, d4071 as c22, d4072 as c23, d4073 as c24 } from '../descriptors/data/173.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3000 as c8 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3237 as c9, d3240 as c20, d3236 as c21 } from '../descriptors/data/129.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4636 as c10, d4637 as c11 } from '../descriptors/data/205.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4641 as c12, d4642 as c13, d4646 as c14, d4647 as c15, d4652 as c16 } from '../descriptors/data/206.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4665 as c17, d4666 as c18, d4667 as c19 } from '../descriptors/data/207.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4676 as c25, d4677 as c26 } from '../descriptors/data/208.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d189 as d189 } from '../descriptors/data/10.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d189;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFields"]:c0(),["CheckoutPromotionConfig"]:c1(),["CheckoutRedirectsRequest"]:c2(),["CheckoutTaxConfig"]:c3(),["CheckoutTipConfig"]:c4(),["CreatePaymentLinkRequest"]:c5(),["ImageRequest"]:c6(),["InventoryRoutingSourceRequest"]:c7(),["MoneyValue"]:c8(),["OrderLineItemTax"]:c9(),["PaymentLinkCustomFieldRequest"]:c10(),["PaymentLinkCustomTextConfig"]:c11(),["PaymentLinkEventConfigRequest"]:c12(),["PaymentLinkLegalConfig"]:c13(),["PaymentLinkLineItemRequest"]:c14(),["PaymentLinkPaymentConfig"]:c15(),["PaymentLinkThemeConfig"]:c16(),["SharedCodec1000"]:c17(),["SharedCodec1001"]:c18(),["SharedCodec1002"]:c19(),["SharedCodec33"]:c20(),["SharedCodec34"]:c21(),["SharedCodec854"]:c22(),["SharedCodec855"]:c23(),["SharedCodec856"]:c24(),["SharedCodec998"]:c25(),["SharedCodec999"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
