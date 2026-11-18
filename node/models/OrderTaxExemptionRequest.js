import { d8428 as c0 } from '../descriptors/data/370.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9334 as c1, d9342 as c2, d9343 as c3, d9344 as c4, d9345 as c5, d9346 as c6, d9347 as c7, d9348 as c8 } from '../descriptors/data/420.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8261 as c9, d8262 as c10, d8263 as c11, d8264 as c12 } from '../descriptors/data/361.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9334 as d9334 } from '../descriptors/data/420.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9334;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["OrderTaxExemptionRequest"]:c1(),["SharedCodec1972"]:c2(),["SharedCodec1973"]:c3(),["SharedCodec1974"]:c4(),["SharedCodec1975"]:c5(),["SharedCodec1979"]:c6(),["SharedCodec1980"]:c7(),["SharedCodec1981"]:c8(),["SharedCodec682"]:c9(),["SharedCodec683"]:c10(),["SharedCodec684"]:c11(),["SharedCodec685"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
