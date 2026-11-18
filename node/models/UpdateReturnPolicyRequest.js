import { d8015 as c0 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8111 as c1 } from '../descriptors/data/353.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7782 as c2 } from '../descriptors/data/329.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7782 as d7782 } from '../descriptors/data/329.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7782;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3071"]:c0(),["SharedCodec3074"]:c1(),["UpdateReturnPolicyRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
