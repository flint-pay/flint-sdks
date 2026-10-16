import { d1818 as c0, d2034 as c1 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1818 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1818;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyMetric"]:c0(),["SignedMoney"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMoneyMetric(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
