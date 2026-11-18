import { d7653 as c0 } from '../descriptors/data/321.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7653 as d7653 } from '../descriptors/data/321.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7653;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SubscriptionTaxCalculationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionTaxCalculationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
