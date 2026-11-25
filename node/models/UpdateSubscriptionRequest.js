import { d8237 as c0, d8235 as c4, d8236 as c12 } from '../descriptors/data/363.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8964 as c1 } from '../descriptors/data/402.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8003 as c2 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9829 as c3, d9831 as c32 } from '../descriptors/data/454.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8349 as c5, d8350 as c6 } from '../descriptors/data/369.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8224 as c7 } from '../descriptors/data/362.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d11149 as c8, d11150 as c9 } from '../descriptors/data/532.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9735 as c10, d9736 as c11, d9737 as c31 } from '../descriptors/data/448.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d11126 as c13, d11127 as c14, d11130 as c27, d11131 as c28, d11132 as c29 } from '../descriptors/data/531.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8133 as c15, d8134 as c16, d8132 as c17 } from '../descriptors/data/356.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9499 as c18 } from '../descriptors/data/431.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9500 as c19, d9501 as c20 } from '../descriptors/data/432.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8360 as c21, d8361 as c22 } from '../descriptors/data/370.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d11155 as c23, d11156 as c24, d11157 as c25, d11158 as c26 } from '../descriptors/data/533.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d11184 as c30 } from '../descriptors/data/535.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d7900 as c33 } from '../descriptors/data/336.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d7900 as d7900 } from '../descriptors/data/336.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7900;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec172"]:c3(),["SharedCodec2"]:c4(),["SharedCodec235"]:c5(),["SharedCodec236"]:c6(),["SharedCodec2393"]:c7(),["SharedCodec2929"]:c8(),["SharedCodec2930"]:c9(),["SharedCodec2948"]:c10(),["SharedCodec2949"]:c11(),["SharedCodec3"]:c12(),["SharedCodec3035"]:c13(),["SharedCodec3036"]:c14(),["SharedCodec3126"]:c15(),["SharedCodec3127"]:c16(),["SharedCodec3128"]:c17(),["SharedCodec3166"]:c18(),["SharedCodec3167"]:c19(),["SharedCodec3169"]:c20(),["SharedCodec319"]:c21(),["SharedCodec320"]:c22(),["SharedCodec3271"]:c23(),["SharedCodec3272"]:c24(),["SharedCodec3273"]:c25(),["SharedCodec3274"]:c26(),["SharedCodec627"]:c27(),["SharedCodec628"]:c28(),["SharedCodec629"]:c29(),["SubscriptionBillingScheduleUpdateRequest"]:c30(),["SubscriptionDeliveryDestinationRequest"]:c31(),["SubscriptionDeliveryRequest"]:c32(),["UpdateSubscriptionRequest"]:c33()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
