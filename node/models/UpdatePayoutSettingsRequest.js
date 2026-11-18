import { d7885 as c0 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9033 as c1 } from '../descriptors/data/405.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10248 as c2, d10249 as c3, d10250 as c4, d10251 as c5, d10252 as c6, d10253 as c7 } from '../descriptors/data/475.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7770 as c8 } from '../descriptors/data/328.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7770 as d7770 } from '../descriptors/data/328.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7770;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["SharedCodec137"]:c1(),["SharedCodec3152"]:c2(),["SharedCodec3153"]:c3(),["SharedCodec3154"]:c4(),["SharedCodec3155"]:c5(),["SharedCodec3156"]:c6(),["SharedCodec3157"]:c7(),["UpdatePayoutSettingsRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePayoutSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
