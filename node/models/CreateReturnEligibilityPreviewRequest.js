import { d7525 as c0, d7527 as c1, d7529 as c2, d7533 as c3, d7535 as c4, d7536 as c5 } from '../descriptors/data/359.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7537 as c6 } from '../descriptors/data/360.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7525 as d7525 } from '../descriptors/data/359.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7525;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["ReturnEligibilityLineItemRequestModel"]:c1(),["ReturnEligibilitySelectionRequest"]:c2(),["SharedCodec1453"]:c3(),["SharedCodec1455"]:c4(),["SharedCodec1456"]:c5(),["SharedCodec1457"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnEligibilityPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
