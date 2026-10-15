import { d2656 as c0 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2656 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2656;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["WebhookSecret"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhookSecret(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
