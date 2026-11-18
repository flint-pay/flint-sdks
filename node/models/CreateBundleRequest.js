import { d8006 as c0 } from '../descriptors/data/346.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d240 as c1 } from '../descriptors/data/11.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8024 as c2, d8025 as c3, d8014 as c5 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8031 as c4 } from '../descriptors/data/348.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c6 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d240 as d240 } from '../descriptors/data/11.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d240;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateBundleComponentRequest"]:c0(),["CreateBundleRequest"]:c1(),["ImageInputFile"]:c2(),["ImageInputSourceURL"]:c3(),["ImageRequest"]:c4(),["MetadataRequest"]:c5(),["MoneyValue"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateBundleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
