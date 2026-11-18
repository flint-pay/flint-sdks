import { d9 as c0 } from '../descriptors/data/0.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8014 as c1 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c2 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9856 as c3, d9858 as c4 } from '../descriptors/data/452.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9873 as c5, d9874 as c6 } from '../descriptors/data/453.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9358 as c7, d9360 as c8 } from '../descriptors/data/421.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9954 as c9, d9955 as c10, d9956 as c11 } from '../descriptors/data/457.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9 as d9 } from '../descriptors/data/0.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddOrderChargeRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["OrderCalculatedChargeTaxRequest"]:c3(),["OrderChargeRequest"]:c4(),["SharedCodec1871"]:c5(),["SharedCodec1872"]:c6(),["SharedCodec502"]:c7(),["SharedCodec504"]:c8(),["TaxCalculationRequestRequest"]:c9(),["TaxComponentRequestRequest"]:c10(),["TaxJurisdictionRequest"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAddOrderChargeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
