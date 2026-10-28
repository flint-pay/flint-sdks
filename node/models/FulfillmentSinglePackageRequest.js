import { d4131 as c0, d4129 as c4, d4132 as c5, d4133 as c8, d4134 as c11, d4135 as c12 } from '../descriptors/data/180.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3153 as c1 } from '../descriptors/data/125.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d422 as c2 } from '../descriptors/data/25.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3250 as c3 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4806 as c6, d4807 as c7 } from '../descriptors/data/218.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4839 as c9, d4840 as c10, d4843 as c13 } from '../descriptors/data/220.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3211 as c14 } from '../descriptors/data/129.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d422 as d422 } from '../descriptors/data/25.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d422;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["Dimensions"]:c1(),["FulfillmentSinglePackageRequest"]:c2(),["MetadataRequest"]:c3(),["PackageCreateRequest"]:c4(),["ReturnShipmentLineItemAllocationRequestRequest"]:c5(),["SharedCodec1211"]:c6(),["SharedCodec1212"]:c7(),["SharedCodec257"]:c8(),["SharedCodec389"]:c9(),["SharedCodec390"]:c10(),["SharedCodec391"]:c11(),["SharedCodec392"]:c12(),["SinglePackageCreateRequest"]:c13(),["Weight"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentSinglePackageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
