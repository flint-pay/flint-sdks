import { d1302 as c0 } from '../descriptors/data/62.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1302 as d1302 } from '../descriptors/data/62.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1302;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RotateWebhookSecretRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRotateWebhookSecretRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
