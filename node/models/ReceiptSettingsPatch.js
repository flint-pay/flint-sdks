import { d1710 as c0 } from '../descriptors/data/84.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1710 as d1710 } from '../descriptors/data/84.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1710;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReceiptSettingsPatch"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReceiptSettingsPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
