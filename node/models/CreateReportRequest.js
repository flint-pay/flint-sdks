import { d200 as c0 } from '../descriptors/data/11.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d200 as d200 } from '../descriptors/data/11.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d200;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReportRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReportRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
