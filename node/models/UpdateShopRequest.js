import { d8358 as c0 } from '../descriptors/data/370.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8141 as c1, d8142 as c2 } from '../descriptors/data/357.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8003 as c3 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d11028 as c4, d11029 as c5 } from '../descriptors/data/524.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8132 as c6 } from '../descriptors/data/356.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8234 as c7 } from '../descriptors/data/363.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10365 as c8 } from '../descriptors/data/486.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d11032 as c9, d11042 as c10, d11043 as c11, d11044 as c12, d11045 as c13, d11046 as c21, d11047 as c22, d11048 as c23, d11049 as c24 } from '../descriptors/data/525.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9859 as c14 } from '../descriptors/data/455.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9860 as c15 } from '../descriptors/data/456.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10972 as c16, d10973 as c17 } from '../descriptors/data/521.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8786 as c18, d8787 as c19, d8788 as c20 } from '../descriptors/data/392.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d11050 as c25, d11051 as c26, d11052 as c27, d11053 as c28, d11054 as c29, d11055 as c30, d11056 as c31, d11057 as c32, d11060 as c33 } from '../descriptors/data/526.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d7893 as c34 } from '../descriptors/data/335.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d7893 as d7893 } from '../descriptors/data/335.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7893;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutTaxCalculationRequest"]:c0(),["ImageInputFile"]:c1(),["ImageInputSourceURL"]:c2(),["MoneyValue"]:c3(),["SharedCodec2880"]:c4(),["SharedCodec2881"]:c5(),["SharedCodec3128"]:c6(),["SharedCodec3131"]:c7(),["SharedCodec3216"]:c8(),["SharedCodec3266"]:c9(),["SharedCodec591"]:c10(),["SharedCodec592"]:c11(),["SharedCodec593"]:c12(),["SharedCodec594"]:c13(),["SharedCodec595"]:c14(),["SharedCodec596"]:c15(),["SharedCodec597"]:c16(),["SharedCodec598"]:c17(),["SharedCodec599"]:c18(),["SharedCodec600"]:c19(),["SharedCodec601"]:c20(),["SharedCodec602"]:c21(),["SharedCodec603"]:c22(),["SharedCodec604"]:c23(),["SharedCodec605"]:c24(),["SharedCodec606"]:c25(),["SharedCodec607"]:c26(),["SharedCodec608"]:c27(),["SharedCodec609"]:c28(),["SharedCodec610"]:c29(),["SharedCodec611"]:c30(),["SharedCodec612"]:c31(),["SharedCodec613"]:c32(),["ShopListingPatchRequest"]:c33(),["UpdateShopRequest"]:c34()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateShopRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
