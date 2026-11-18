import { d8014 as c0, d8015 as c4 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c1 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9857 as c2 } from '../descriptors/data/452.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9866 as c3 } from '../descriptors/data/453.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8111 as c5 } from '../descriptors/data/353.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9904 as c6, d9905 as c7, d9906 as c8, d9907 as c9, d9908 as c10, d9909 as c11, d9910 as c12, d9911 as c13, d9912 as c14, d9913 as c16 } from '../descriptors/data/455.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9766 as c15 } from '../descriptors/data/447.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8689 as c17, d8681 as c18, d8690 as c19, d8682 as c20, d8683 as c21 } from '../descriptors/data/384.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9954 as c22, d9955 as c23, d9956 as c24 } from '../descriptors/data/457.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7944 as c25 } from '../descriptors/data/342.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7753 as c26 } from '../descriptors/data/326.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7753 as d7753 } from '../descriptors/data/326.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7753;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedLineItemTaxRequest"]:c2(),["OrderLineItemModifierRequestModel"]:c3(),["SharedCodec3071"]:c4(),["SharedCodec3074"]:c5(),["SharedCodec3106"]:c6(),["SharedCodec3107"]:c7(),["SharedCodec3108"]:c8(),["SharedCodec3109"]:c9(),["SharedCodec3110"]:c10(),["SharedCodec3111"]:c11(),["SharedCodec3112"]:c12(),["SharedCodec3113"]:c13(),["SharedCodec3114"]:c14(),["SharedCodec3115"]:c15(),["SharedCodec3116"]:c16(),["SharedCodec479"]:c17(),["SharedCodec480"]:c18(),["SharedCodec481"]:c19(),["SharedCodec482"]:c20(),["SharedCodec483"]:c21(),["TaxCalculationRequestRequest"]:c22(),["TaxComponentRequestRequest"]:c23(),["TaxJurisdictionRequest"]:c24(),["TextModifierRequest"]:c25(),["UpdateLineItemRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
