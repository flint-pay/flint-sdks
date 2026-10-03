import { d596 as c0, d598 as c1, d723 as c2, d74 as c3, d597 as c4 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d598 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d598;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryInputConstraint"]:c0(),["DeliveryInputRequirement"]:c1(),["DeliveryWindowResource"]:c2(),["MoneyValue"]:c3(),["SharedCodec203"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryInputRequirement(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
