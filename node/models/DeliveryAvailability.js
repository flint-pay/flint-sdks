import { d3545 as c0, d3546 as c1 } from '../descriptors/data/145.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3565 as c2 } from '../descriptors/data/146.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3545 as d3545 } from '../descriptors/data/145.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3545;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAvailability"]:c0(),["DeliveryBlackoutInterval"]:c1(),["DeliveryWeeklyInterval"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryAvailability(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
