import { d4404 as c0, d4405 as c1, d4406 as c2 } from '../descriptors/data/192.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4408 as c3, d4409 as c4, d4410 as c5, d4411 as c6 } from '../descriptors/data/193.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4404 as d4404 } from '../descriptors/data/192.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4404;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["ReturnEligibilityLineItemRequest"]:c1(),["ReturnEligibilitySelection"]:c2(),["SharedCodec1070"]:c3(),["SharedCodec1071"]:c4(),["SharedCodec1072"]:c5(),["SharedCodec1073"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnEligibilityPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
