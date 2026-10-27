import { d3618 as c0 } from '../descriptors/data/149.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3618 as d3618 } from '../descriptors/data/149.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3618;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryPreviewRoutingSource"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPreviewRoutingSource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
