import { d419 as c0 } from '../descriptors/data/26.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8141 as c1, d8142 as c2, d8148 as c3 } from '../descriptors/data/358.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8789 as c4, d8786 as c25, d8787 as c26, d8788 as c27 } from '../descriptors/data/393.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8131 as c5 } from '../descriptors/data/357.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8003 as c6 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8359 as c7 } from '../descriptors/data/371.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8927 as c8, d8923 as c9 } from '../descriptors/data/401.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d11077 as c10, d11078 as c11, d11079 as c12, d11080 as c13, d11081 as c14, d11082 as c15, d11083 as c16, d11076 as c33 } from '../descriptors/data/528.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8816 as c17, d8808 as c18, d8817 as c19, d8809 as c20, d8810 as c21, d8818 as c22, d8819 as c23, d8820 as c24 } from '../descriptors/data/395.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d11092 as c28, d11093 as c29, d11094 as c30, d11095 as c31, d11097 as c32, d11100 as c34, d11101 as c35 } from '../descriptors/data/530.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8061 as c36 } from '../descriptors/data/352.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d419 as d419 } from '../descriptors/data/26.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d419;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPlanRequest"]:c0(),["ImageInputFile"]:c1(),["ImageInputSourceURL"]:c2(),["ImageRequest"]:c3(),["InventoryRoutingSourceRequest"]:c4(),["MetadataRequest"]:c5(),["MoneyValue"]:c6(),["OrderLineItemTaxRequest"]:c7(),["SharedCodec192"]:c8(),["SharedCodec193"]:c9(),["SharedCodec3011"]:c10(),["SharedCodec3012"]:c11(),["SharedCodec3013"]:c12(),["SharedCodec3014"]:c13(),["SharedCodec3016"]:c14(),["SharedCodec3017"]:c15(),["SharedCodec3018"]:c16(),["SharedCodec492"]:c17(),["SharedCodec493"]:c18(),["SharedCodec494"]:c19(),["SharedCodec495"]:c20(),["SharedCodec496"]:c21(),["SharedCodec508"]:c22(),["SharedCodec509"]:c23(),["SharedCodec510"]:c24(),["SharedCodec599"]:c25(),["SharedCodec600"]:c26(),["SharedCodec601"]:c27(),["SharedCodec616"]:c28(),["SharedCodec617"]:c29(),["SharedCodec618"]:c30(),["SharedCodec619"]:c31(),["SubscriptionEndAfterCyclesRequest"]:c32(),["SubscriptionIntervalOptionRequest"]:c33(),["SubscriptionPlanChangeOptionRequest"]:c34(),["SubscriptionPlanLineItemRequest"]:c35(),["TextModifierRequest"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
