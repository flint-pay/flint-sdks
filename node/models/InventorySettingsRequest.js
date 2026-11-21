import { d10844 as c0, d10846 as c5, d10847 as c6 } from '../descriptors/data/515.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d991 as c1 } from '../descriptors/data/52.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8706 as c2, d8707 as c3, d8708 as c4 } from '../descriptors/data/388.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d991 as d991 } from '../descriptors/data/52.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d991;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryOriginPolicyRequest"]:c0(),["InventorySettingsRequest"]:c1(),["SharedCodec1460"]:c2(),["SharedCodec1461"]:c3(),["SharedCodec1462"]:c4(),["SharedCodec1465"]:c5(),["SharedCodec1466"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventorySettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
