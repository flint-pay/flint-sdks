import { d5899 as c0, d5903 as c2 } from '../descriptors/data/270.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1233 as c1 } from '../descriptors/data/58.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1233 as d1233 } from '../descriptors/data/58.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1233;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnEligibilityLineItemRequest"]:c0(),["ReturnEligibilitySelectionAllRemainingFulfilled"]:c1(),["SharedCodec1172"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilitySelectionAllRemainingFulfilled(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
