import { d6855 as c0 } from '../descriptors/data/326.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6855 as d6855 } from '../descriptors/data/326.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6855;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRecoveryEmailSettingsRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutRecoveryEmailSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
