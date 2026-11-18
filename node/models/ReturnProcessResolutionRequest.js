import { d8684 as c0, d8685 as c1, d8686 as c4, d8687 as c5, d8688 as c6 } from '../descriptors/data/384.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8014 as c2 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c3 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10671 as c7 } from '../descriptors/data/502.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10585 as c8, d10586 as c9, d10588 as c11, d10589 as c12, d10590 as c13, d10591 as c14, d10592 as c15, d10593 as c16, d10594 as c17, d10595 as c18, d10596 as c19 } from '../descriptors/data/496.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8794 as c10 } from '../descriptors/data/390.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10659 as c20 } from '../descriptors/data/501.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10671 as d10671 } from '../descriptors/data/502.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10671;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["OrderDraftLineItemTaxCalculationRequestModel"]:c4(),["OrderDraftTaxComponentRequestModel"]:c5(),["OrderDraftTaxJurisdictionRequestModel"]:c6(),["ReturnProcessResolutionRequest"]:c7(),["ReturnReplacementLineItemRequest"]:c8(),["ReturnReplacementTaxRequest"]:c9(),["SharedCodec190"]:c10(),["SharedCodec2776"]:c11(),["SharedCodec2777"]:c12(),["SharedCodec2778"]:c13(),["SharedCodec2779"]:c14(),["SharedCodec2780"]:c15(),["SharedCodec2782"]:c16(),["SharedCodec2783"]:c17(),["SharedCodec2784"]:c18(),["SharedCodec551"]:c19(),["SharedCodec557"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnProcessResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
