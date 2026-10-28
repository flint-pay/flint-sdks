import { d5353 as c0, d5354 as c1 } from '../descriptors/data/252.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5354 as d5354 } from '../descriptors/data/252.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5354;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryOriginPolicyRequestRequest"]:c0(),["InventorySettingsRequestRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventorySettingsRequestRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
