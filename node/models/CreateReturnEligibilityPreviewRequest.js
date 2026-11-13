import { d7460 as c0, d7462 as c1, d7464 as c2, d7468 as c3, d7470 as c4, d7471 as c5, d7472 as c6 } from '../descriptors/data/354.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7460 as d7460 } from '../descriptors/data/354.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7460;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["ReturnEligibilityLineItemRequestModel"]:c1(),["ReturnEligibilitySelectionRequest"]:c2(),["SharedCodec1461"]:c3(),["SharedCodec1463"]:c4(),["SharedCodec1464"]:c5(),["SharedCodec1465"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnEligibilityPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
