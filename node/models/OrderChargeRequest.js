import { d8131 as c0 } from '../descriptors/data/356.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d8003 as c1 } from '../descriptors/data/347.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10001 as c2, d10003 as c3 } from '../descriptors/data/463.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10018 as c4 } from '../descriptors/data/464.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10019 as c5 } from '../descriptors/data/465.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9494 as c6, d9496 as c7 } from '../descriptors/data/431.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10099 as c8, d10100 as c9, d10101 as c10 } from '../descriptors/data/468.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d10003 as d10003 } from '../descriptors/data/463.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10003;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedChargeTaxRequest"]:c2(),["OrderChargeRequest"]:c3(),["SharedCodec1903"]:c4(),["SharedCodec1904"]:c5(),["SharedCodec515"]:c6(),["SharedCodec517"]:c7(),["TaxCalculationRequestRequest"]:c8(),["TaxComponentRequestRequest"]:c9(),["TaxJurisdictionRequest"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderChargeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
