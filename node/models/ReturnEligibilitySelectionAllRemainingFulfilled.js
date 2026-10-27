import { d4405 as c0 } from '../descriptors/data/192.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d917 as c1 } from '../descriptors/data/40.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4409 as c2 } from '../descriptors/data/193.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d917 as d917 } from '../descriptors/data/40.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d917;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnEligibilityLineItemRequest"]:c0(),["ReturnEligibilitySelectionAllRemainingFulfilled"]:c1(),["SharedCodec1071"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilitySelectionAllRemainingFulfilled(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
