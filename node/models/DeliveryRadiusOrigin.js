import { d3542 as c0 } from '../descriptors/data/145.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3542 as d3542 } from '../descriptors/data/145.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3542;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRadiusOrigin"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRadiusOrigin(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
