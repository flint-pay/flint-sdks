import { d1382 as c0 } from '../descriptors/data/69.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9343 as c1, d9344 as c2, d9345 as c3 } from '../descriptors/data/420.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1382 as d1382 } from '../descriptors/data/69.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1382;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxExemptionInputNone"]:c0(),["SharedCodec1973"]:c1(),["SharedCodec1974"]:c2(),["SharedCodec1975"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionInputNone(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
