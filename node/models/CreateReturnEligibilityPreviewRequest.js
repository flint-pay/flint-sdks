import { d9644 as c0, d9646 as c1, d9648 as c2, d9652 as c3, d9654 as c4, d9655 as c5, d9656 as c6 } from '../descriptors/data/441.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9644 as d9644 } from '../descriptors/data/441.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9644;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["ReturnEligibilityLineItemRequestModel"]:c1(),["ReturnEligibilitySelectionRequest"]:c2(),["SharedCodec2668"]:c3(),["SharedCodec2670"]:c4(),["SharedCodec2671"]:c5(),["SharedCodec2672"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnEligibilityPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
