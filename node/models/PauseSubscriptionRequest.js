import { d1438 as c0 } from '../descriptors/data/71.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1438 as d1438 } from '../descriptors/data/71.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1438;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PauseSubscriptionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePauseSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
