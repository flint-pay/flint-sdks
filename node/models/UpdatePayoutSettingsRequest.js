import { d5814 as c0 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8116 as c1 } from '../descriptors/data/393.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8117 as c2, d8118 as c3, d8119 as c4, d8120 as c5, d8121 as c6 } from '../descriptors/data/394.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6967 as c7 } from '../descriptors/data/327.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5702 as c8 } from '../descriptors/data/250.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5702 as d5702 } from '../descriptors/data/250.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5702;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SharedCodec1768"]:c1(),["SharedCodec1769"]:c2(),["SharedCodec1770"]:c3(),["SharedCodec1771"]:c4(),["SharedCodec1772"]:c5(),["SharedCodec1773"]:c6(),["SharedCodec79"]:c7(),["UpdatePayoutSettingsRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePayoutSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
