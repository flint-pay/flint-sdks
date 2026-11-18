import { d9685 as c0 } from '../descriptors/data/443.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10930 as c1 } from '../descriptors/data/516.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7577 as c2 } from '../descriptors/data/317.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7577 as d7577 } from '../descriptors/data/317.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7577;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec169"]:c0(),["SharedCodec592"]:c1(),["SubscriptionEndAfterRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionEndAfterRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
