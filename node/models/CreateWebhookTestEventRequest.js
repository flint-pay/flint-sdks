import { d245 as c0 } from '../descriptors/data/14.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3799 as c1 } from '../descriptors/data/158.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d245 as d245 } from '../descriptors/data/14.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d245;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateWebhookTestEventRequest"]:c0(),["SharedCodec238"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateWebhookTestEventRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
