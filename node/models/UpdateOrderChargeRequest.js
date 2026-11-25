import { d8003 as c0 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10001 as c1 } from '../descriptors/data/463.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8132 as c2 } from '../descriptors/data/356.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8234 as c3 } from '../descriptors/data/363.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10099 as c4, d10100 as c5, d10101 as c6 } from '../descriptors/data/468.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d7856 as c7 } from '../descriptors/data/332.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d7856 as d7856 } from '../descriptors/data/332.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7856;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderCalculatedChargeTaxRequest"]:c1(),["SharedCodec3128"]:c2(),["SharedCodec3131"]:c3(),["TaxCalculationRequestRequest"]:c4(),["TaxComponentRequestRequest"]:c5(),["TaxJurisdictionRequest"]:c6(),["UpdateOrderChargeRequest"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateOrderChargeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
