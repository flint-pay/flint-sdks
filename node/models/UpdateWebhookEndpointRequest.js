import { d5209 as c0, d5210 as c1, d5211 as c2 } from '../descriptors/data/240.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d2501 as c3 } from '../descriptors/data/102.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d2501 as d2501 } from '../descriptors/data/102.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2501;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1249"]:c0(),["SharedCodec1250"]:c1(),["SharedCodec1251"]:c2(),["UpdateWebhookEndpointRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateWebhookEndpointRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
