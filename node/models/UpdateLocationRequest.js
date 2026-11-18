import { d8114 as c0, d8112 as c1, d8113 as c2, d8111 as c4 } from '../descriptors/data/353.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8015 as c3 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9407 as c5, d9408 as c6, d9409 as c7, d9410 as c8 } from '../descriptors/data/424.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7754 as c9 } from '../descriptors/data/326.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7754 as d7754 } from '../descriptors/data/326.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7754;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec2"]:c1(),["SharedCodec3"]:c2(),["SharedCodec3071"]:c3(),["SharedCodec3074"]:c4(),["SharedCodec3117"]:c5(),["SharedCodec3118"]:c6(),["SharedCodec3119"]:c7(),["SharedCodec3120"]:c8(),["UpdateLocationRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
