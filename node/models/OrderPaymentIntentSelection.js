import { d7679 as c0, d7691 as c2, d7692 as c3, d7693 as c4, d7694 as c5, d7695 as c6 } from '../descriptors/data/366.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7785 as c1 } from '../descriptors/data/370.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7679 as d7679 } from '../descriptors/data/366.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7679;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderPaymentIntentSelection"]:c0(),["ReaderPaymentSourceTip"]:c1(),["SharedCodec1086"]:c2(),["SharedCodec1087"]:c3(),["SharedCodec1088"]:c4(),["SharedCodec1089"]:c5(),["SharedCodec1090"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderPaymentIntentSelection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
