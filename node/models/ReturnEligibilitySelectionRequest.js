import { d9646 as c0, d9648 as c1, d9652 as c2, d9654 as c3, d9655 as c4, d9656 as c5 } from '../descriptors/data/441.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9648 as d9648 } from '../descriptors/data/441.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9648;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnEligibilityLineItemRequestModel"]:c0(),["ReturnEligibilitySelectionRequest"]:c1(),["SharedCodec2668"]:c2(),["SharedCodec2670"]:c3(),["SharedCodec2671"]:c4(),["SharedCodec2672"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilitySelectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
