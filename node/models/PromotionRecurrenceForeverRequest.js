import { d1673 as c0 } from '../descriptors/data/83.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9642 as c1 } from '../descriptors/data/441.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1673 as d1673 } from '../descriptors/data/83.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1673;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrenceForeverRequest"]:c0(),["SharedCodec2437"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrenceForeverRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
