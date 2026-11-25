import { d8141 as c0, d8142 as c1, d8148 as c2 } from '../descriptors/data/357.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8789 as c3, d8786 as c30, d8787 as c31, d8788 as c32 } from '../descriptors/data/392.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8131 as c4, d8133 as c13, d8134 as c14, d8132 as c15 } from '../descriptors/data/356.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8003 as c5 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8359 as c6 } from '../descriptors/data/370.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8927 as c7, d8923 as c8 } from '../descriptors/data/400.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d11077 as c9, d11078 as c10, d11079 as c11, d11080 as c12, d11076 as c38 } from '../descriptors/data/527.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8153 as c16 } from '../descriptors/data/358.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8483 as c17 } from '../descriptors/data/376.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d11084 as c18, d11085 as c19, d11086 as c20, d11087 as c21 } from '../descriptors/data/528.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8816 as c22, d8808 as c23, d8817 as c24, d8809 as c25, d8810 as c26, d8818 as c27, d8819 as c28, d8820 as c29 } from '../descriptors/data/394.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d11092 as c33, d11093 as c34, d11094 as c35, d11095 as c36, d11097 as c37, d11100 as c39, d11102 as c41 } from '../descriptors/data/529.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8061 as c40 } from '../descriptors/data/351.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d7899 as c42 } from '../descriptors/data/335.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d7899 as d7899 } from '../descriptors/data/335.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7899;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageInputFile"]:c0(),["ImageInputSourceURL"]:c1(),["ImageRequest"]:c2(),["InventoryRoutingSourceRequest"]:c3(),["MetadataRequest"]:c4(),["MoneyValue"]:c5(),["OrderLineItemTaxRequest"]:c6(),["SharedCodec192"]:c7(),["SharedCodec193"]:c8(),["SharedCodec3011"]:c9(),["SharedCodec3012"]:c10(),["SharedCodec3013"]:c11(),["SharedCodec3014"]:c12(),["SharedCodec3126"]:c13(),["SharedCodec3127"]:c14(),["SharedCodec3128"]:c15(),["SharedCodec3130"]:c16(),["SharedCodec3132"]:c17(),["SharedCodec3267"]:c18(),["SharedCodec3268"]:c19(),["SharedCodec3269"]:c20(),["SharedCodec3270"]:c21(),["SharedCodec492"]:c22(),["SharedCodec493"]:c23(),["SharedCodec494"]:c24(),["SharedCodec495"]:c25(),["SharedCodec496"]:c26(),["SharedCodec508"]:c27(),["SharedCodec509"]:c28(),["SharedCodec510"]:c29(),["SharedCodec599"]:c30(),["SharedCodec600"]:c31(),["SharedCodec601"]:c32(),["SharedCodec616"]:c33(),["SharedCodec617"]:c34(),["SharedCodec618"]:c35(),["SharedCodec619"]:c36(),["SubscriptionEndAfterCyclesRequest"]:c37(),["SubscriptionIntervalOptionRequest"]:c38(),["SubscriptionPlanChangeOptionRequest"]:c39(),["TextModifierRequest"]:c40(),["UpdateSubscriptionPlanLineItemRequest"]:c41(),["UpdateSubscriptionPlanRequest"]:c42()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
