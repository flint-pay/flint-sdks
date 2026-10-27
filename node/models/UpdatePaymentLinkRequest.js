import { d3206 as c0, d3216 as c1 } from '../descriptors/data/127.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3298 as c2 } from '../descriptors/data/132.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3224 as c3 } from '../descriptors/data/128.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3069 as c4 } from '../descriptors/data/119.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4070 as c5, d4071 as c26, d4072 as c27, d4073 as c28 } from '../descriptors/data/173.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3000 as c6 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3237 as c7, d3240 as c24, d3236 as c25 } from '../descriptors/data/129.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4635 as c8, d4638 as c9, d4640 as c10 } from '../descriptors/data/205.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4643 as c11, d4645 as c12, d4648 as c13, d4649 as c14, d4653 as c15 } from '../descriptors/data/206.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4665 as c16, d4666 as c17, d4667 as c18 } from '../descriptors/data/207.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3396 as c19 } from '../descriptors/data/137.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4460 as c20 } from '../descriptors/data/195.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4668 as c21, d4669 as c22, d4676 as c29, d4677 as c30 } from '../descriptors/data/208.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3192 as c23 } from '../descriptors/data/126.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2458 as c31 } from '../descriptors/data/98.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d2458 as d2458 } from '../descriptors/data/98.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2458;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFields"]:c0(),["CheckoutPromotionConfig"]:c1(),["CheckoutTaxConfig"]:c2(),["CheckoutTipConfig"]:c3(),["ImageRequest"]:c4(),["InventoryRoutingSourceRequest"]:c5(),["MoneyValue"]:c6(),["OrderLineItemTax"]:c7(),["PaymentLinkCustomFieldPatchRequest"]:c8(),["PaymentLinkCustomTextPatchRequest"]:c9(),["PaymentLinkEventConfigPatchRequest"]:c10(),["PaymentLinkLegalPatchRequest"]:c11(),["PaymentLinkLineItemPatchRequest"]:c12(),["PaymentLinkPaymentPatchRequest"]:c13(),["PaymentLinkRedirectsPatchRequest"]:c14(),["PaymentLinkThemePatchRequest"]:c15(),["SharedCodec1000"]:c16(),["SharedCodec1001"]:c17(),["SharedCodec1002"]:c18(),["SharedCodec1163"]:c19(),["SharedCodec1194"]:c20(),["SharedCodec1204"]:c21(),["SharedCodec1205"]:c22(),["SharedCodec27"]:c23(),["SharedCodec33"]:c24(),["SharedCodec34"]:c25(),["SharedCodec854"]:c26(),["SharedCodec855"]:c27(),["SharedCodec856"]:c28(),["SharedCodec998"]:c29(),["SharedCodec999"]:c30(),["UpdatePaymentLinkRequest"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
