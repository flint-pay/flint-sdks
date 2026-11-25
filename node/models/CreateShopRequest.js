import { d8358 as c0 } from '../descriptors/data/370.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d411 as c1 } from '../descriptors/data/25.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8141 as c2, d8142 as c3 } from '../descriptors/data/357.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8131 as c4 } from '../descriptors/data/356.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8003 as c5 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d11030 as c6, d11031 as c7, d11042 as c8, d11043 as c9, d11044 as c10, d11045 as c11, d11046 as c19, d11047 as c20, d11048 as c21, d11049 as c22 } from '../descriptors/data/525.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9859 as c12 } from '../descriptors/data/455.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9860 as c13 } from '../descriptors/data/456.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10972 as c14, d10973 as c15 } from '../descriptors/data/521.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8786 as c16, d8787 as c17, d8788 as c18 } from '../descriptors/data/392.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d11050 as c23, d11051 as c24, d11052 as c25, d11053 as c26, d11054 as c27, d11055 as c28, d11056 as c29, d11057 as c30, d11061 as c31 } from '../descriptors/data/526.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d411 as d411 } from '../descriptors/data/25.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d411;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutTaxCalculationRequest"]:c0(),["CreateShopRequest"]:c1(),["ImageInputFile"]:c2(),["ImageInputSourceURL"]:c3(),["MetadataRequest"]:c4(),["MoneyValue"]:c5(),["SharedCodec2882"]:c6(),["SharedCodec2883"]:c7(),["SharedCodec591"]:c8(),["SharedCodec592"]:c9(),["SharedCodec593"]:c10(),["SharedCodec594"]:c11(),["SharedCodec595"]:c12(),["SharedCodec596"]:c13(),["SharedCodec597"]:c14(),["SharedCodec598"]:c15(),["SharedCodec599"]:c16(),["SharedCodec600"]:c17(),["SharedCodec601"]:c18(),["SharedCodec602"]:c19(),["SharedCodec603"]:c20(),["SharedCodec604"]:c21(),["SharedCodec605"]:c22(),["SharedCodec606"]:c23(),["SharedCodec607"]:c24(),["SharedCodec608"]:c25(),["SharedCodec609"]:c26(),["SharedCodec610"]:c27(),["SharedCodec611"]:c28(),["SharedCodec612"]:c29(),["SharedCodec613"]:c30(),["ShopListingRequest"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateShopRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
