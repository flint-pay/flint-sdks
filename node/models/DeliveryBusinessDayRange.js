import { d3547 as c0 } from '../descriptors/data/145.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3547 as d3547 } from '../descriptors/data/145.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3547;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryBusinessDayRange"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryBusinessDayRange(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
