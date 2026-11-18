import { d8114 as c0, d8112 as c7, d8113 as c8 } from '../descriptors/data/353.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8385 as c1 } from '../descriptors/data/368.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d260 as c2 } from '../descriptors/data/12.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8435 as c3, d8426 as c5, d8427 as c6, d8423 as c10 } from '../descriptors/data/370.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8014 as c4 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8411 as c9 } from '../descriptors/data/369.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d260 as d260 } from '../descriptors/data/12.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d260;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateCustomerAddressRequest"]:c1(),["CreateCustomerRequest"]:c2(),["DocumentTaxIDRequest"]:c3(),["MetadataRequest"]:c4(),["SharedCodec1715"]:c5(),["SharedCodec1716"]:c6(),["SharedCodec2"]:c7(),["SharedCodec3"]:c8(),["SharedCodec369"]:c9(),["TaxIdentityPatch"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCustomerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
