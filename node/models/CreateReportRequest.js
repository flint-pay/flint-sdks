import { d375 as c0 } from '../descriptors/data/23.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10480 as c1, d10481 as c2 } from '../descriptors/data/489.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d375 as d375 } from '../descriptors/data/23.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d375;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReportRequest"]:c0(),["SharedCodec545"]:c1(),["SharedCodec546"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReportRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
