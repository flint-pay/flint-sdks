import { d1676 as c0 } from '../descriptors/data/83.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9639 as c1 } from '../descriptors/data/440.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1676 as d1676 } from '../descriptors/data/83.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1676;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrenceOnceRequest"]:c0(),["SharedCodec2434"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrenceOnceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
