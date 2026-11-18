import { d8684 as c0, d8685 as c1, d8686 as c4, d8687 as c5, d8688 as c6 } from '../descriptors/data/384.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8014 as c2 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c3 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10660 as c7, d10659 as c33 } from '../descriptors/data/501.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1619 as c8 } from '../descriptors/data/81.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10667 as c9, d10668 as c10, d10669 as c11, d10670 as c12, d10671 as c13 } from '../descriptors/data/502.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10585 as c14, d10586 as c15, d10588 as c23, d10589 as c24, d10590 as c25, d10591 as c26, d10592 as c27, d10593 as c28, d10594 as c29, d10595 as c30, d10596 as c32 } from '../descriptors/data/496.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10518 as c16, d10521 as c18, d10522 as c19 } from '../descriptors/data/491.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8794 as c17 } from '../descriptors/data/390.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10523 as c20 } from '../descriptors/data/492.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10676 as c21, d10677 as c22 } from '../descriptors/data/503.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9111 as c31 } from '../descriptors/data/408.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1619 as d1619 } from '../descriptors/data/81.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1619;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["OrderDraftLineItemTaxCalculationRequestModel"]:c4(),["OrderDraftTaxComponentRequestModel"]:c5(),["OrderDraftTaxJurisdictionRequestModel"]:c6(),["ProcessExistingReturnLineItemRequest"]:c7(),["ProcessExistingReturnRequest"]:c8(),["ReturnProcessDecision"]:c9(),["ReturnProcessDispositionRequest"]:c10(),["ReturnProcessInspectionRequest"]:c11(),["ReturnProcessReceiptRequest"]:c12(),["ReturnProcessResolutionRequest"]:c13(),["ReturnReplacementLineItemRequest"]:c14(),["ReturnReplacementTaxRequest"]:c15(),["ReturnSourceSystemRequest"]:c16(),["SharedCodec190"]:c17(),["SharedCodec2679"]:c18(),["SharedCodec2680"]:c19(),["SharedCodec2681"]:c20(),["SharedCodec2702"]:c21(),["SharedCodec2703"]:c22(),["SharedCodec2776"]:c23(),["SharedCodec2777"]:c24(),["SharedCodec2778"]:c25(),["SharedCodec2779"]:c26(),["SharedCodec2780"]:c27(),["SharedCodec2782"]:c28(),["SharedCodec2783"]:c29(),["SharedCodec2784"]:c30(),["SharedCodec450"]:c31(),["SharedCodec551"]:c32(),["SharedCodec557"]:c33()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
