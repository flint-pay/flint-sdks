import { d3884 as c0 } from '../descriptors/data/164.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3884 as d3884 } from '../descriptors/data/164.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3884;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateDigitalFulfillmentDetails"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDigitalFulfillmentDetails(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
