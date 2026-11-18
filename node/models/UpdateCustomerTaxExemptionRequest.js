import { d8428 as c0 } from '../descriptors/data/370.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8015 as c1 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8111 as c2 } from '../descriptors/data/353.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8397 as c3 } from '../descriptors/data/368.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8261 as c4, d8262 as c5, d8263 as c6, d8264 as c7 } from '../descriptors/data/361.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7733 as c8 } from '../descriptors/data/325.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7733 as d7733 } from '../descriptors/data/325.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7733;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["SharedCodec3071"]:c1(),["SharedCodec3074"]:c2(),["SharedCodec3081"]:c3(),["SharedCodec682"]:c4(),["SharedCodec683"]:c5(),["SharedCodec684"]:c6(),["SharedCodec685"]:c7(),["UpdateCustomerTaxExemptionRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCustomerTaxExemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
