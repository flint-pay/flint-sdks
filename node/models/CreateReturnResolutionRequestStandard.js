import { d397 as c0 } from '../descriptors/data/24.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8684 as c1, d8685 as c2, d8686 as c5, d8687 as c6, d8688 as c7 } from '../descriptors/data/384.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8014 as c3 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c4 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10585 as c8, d10586 as c9, d10581 as c10, d10588 as c13, d10589 as c14, d10590 as c15, d10591 as c16, d10592 as c17, d10593 as c18, d10594 as c19, d10595 as c20, d10596 as c21, d10582 as c22 } from '../descriptors/data/496.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9663 as c11, d9664 as c24 } from '../descriptors/data/441.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8794 as c12 } from '../descriptors/data/390.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10659 as c23 } from '../descriptors/data/501.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d397 as d397 } from '../descriptors/data/24.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d397;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionRequestStandard"]:c0(),["LineItemFulfillmentOriginRequestModel"]:c1(),["LineItemFulfillmentRequestModel"]:c2(),["MetadataRequest"]:c3(),["MoneyValue"]:c4(),["OrderDraftLineItemTaxCalculationRequestModel"]:c5(),["OrderDraftTaxComponentRequestModel"]:c6(),["OrderDraftTaxJurisdictionRequestModel"]:c7(),["ReturnReplacementLineItemRequest"]:c8(),["ReturnReplacementTaxRequest"]:c9(),["ReturnResolutionAdjustmentRequest"]:c10(),["ReturnResolutionLineItemRequest"]:c11(),["SharedCodec190"]:c12(),["SharedCodec2776"]:c13(),["SharedCodec2777"]:c14(),["SharedCodec2778"]:c15(),["SharedCodec2779"]:c16(),["SharedCodec2780"]:c17(),["SharedCodec2782"]:c18(),["SharedCodec2783"]:c19(),["SharedCodec2784"]:c20(),["SharedCodec551"]:c21(),["SharedCodec553"]:c22(),["SharedCodec557"]:c23(),["SharedCodec98"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionRequestStandard(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
