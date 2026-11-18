import { d221 as c0 } from '../descriptors/data/10.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9175 as c1, d9176 as c2 } from '../descriptors/data/412.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d221 as d221 } from '../descriptors/data/10.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d221;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CommitInventoryReservationRequest"]:c0(),["SharedCodec325"]:c1(),["SharedCodec326"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCommitInventoryReservationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
