import { d7951 as c0, d7952 as c1 } from '../descriptors/data/342.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7965 as c2, d7966 as c4, d7967 as c5 } from '../descriptors/data/343.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7941 as c3 } from '../descriptors/data/341.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7725 as c6 } from '../descriptors/data/324.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7725 as d7725 } from '../descriptors/data/324.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7725;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3067"]:c0(),["SharedCodec3068"]:c1(),["SharedCodec338"]:c2(),["SharedCodec5"]:c3(),["SharedCodec571"]:c4(),["SharedCodec572"]:c5(),["UpdateAPIKeyRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
