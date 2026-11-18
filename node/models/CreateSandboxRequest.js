import { d405 as c0 } from '../descriptors/data/25.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7965 as c1, d7966 as c4, d7967 as c5 } from '../descriptors/data/343.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7941 as c2 } from '../descriptors/data/341.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10763 as c3, d10764 as c6, d10765 as c7 } from '../descriptors/data/506.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d405 as d405 } from '../descriptors/data/25.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d405;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSandboxRequest"]:c0(),["SharedCodec338"]:c1(),["SharedCodec5"]:c2(),["SharedCodec570"]:c3(),["SharedCodec571"]:c4(),["SharedCodec572"]:c5(),["SharedCodec573"]:c6(),["SharedCodec574"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSandboxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
