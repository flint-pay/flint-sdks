import { d10920 as c0, d10921 as c1 } from '../descriptors/data/515.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10935 as c2 } from '../descriptors/data/516.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10935 as d10935 } from '../descriptors/data/516.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10935;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2874"]:c0(),["SharedCodec2875"]:c1(),["SubscriptionBillingStartRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionBillingStartRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
