import { d171 as c0 } from '../descriptors/data/8.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8224 as c1, d8225 as c2 } from '../descriptors/data/359.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d171 as d171 } from '../descriptors/data/8.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d171;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ChangeMeSubscriptionPlanRequest"]:c0(),["SharedCodec232"]:c1(),["SharedCodec233"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeChangeMeSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
