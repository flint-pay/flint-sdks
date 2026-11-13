import { d187 as c0 } from '../descriptors/data/8.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7785 as c1 } from '../descriptors/data/370.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7789 as c2 } from '../descriptors/data/371.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7914 as c3 } from '../descriptors/data/378.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d187 as d187 } from '../descriptors/data/8.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d187;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConfirmPaymentIntentRequestReader"]:c0(),["ReaderPaymentSourceTip"]:c1(),["SharedCodec187"]:c2(),["SharedCodec188"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConfirmPaymentIntentRequestReader(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
