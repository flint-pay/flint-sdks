import { d10771 as c0 } from '../descriptors/data/507.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10771 as d10771 } from '../descriptors/data/507.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10771;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerAccountRouteTemplatesRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerAccountRouteTemplatesRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
