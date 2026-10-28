import { d3345 as c0, d3346 as c14, d3347 as c15 } from '../descriptors/data/137.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4766 as c1, d4767 as c2, d4768 as c5, d4769 as c6, d4770 as c8, d4771 as c9 } from '../descriptors/data/216.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d168 as c3 } from '../descriptors/data/8.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4131 as c4, d4128 as c10, d4129 as c12, d4132 as c13, d4133 as c23, d4134 as c26, d4135 as c27 } from '../descriptors/data/180.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3153 as c7 } from '../descriptors/data/125.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3250 as c11 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4806 as c16, d4807 as c17, d4815 as c18, d4816 as c19, d4820 as c20 } from '../descriptors/data/218.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4822 as c21, d4823 as c22 } from '../descriptors/data/219.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4839 as c24, d4840 as c25, d4841 as c28, d4842 as c29, d4843 as c30 } from '../descriptors/data/220.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3211 as c31 } from '../descriptors/data/129.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d168 as d168 } from '../descriptors/data/8.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d168;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateDeliveryFulfillmentDetails"]:c1(),["CreateDigitalFulfillmentDetails"]:c2(),["CreateFulfillmentRequest"]:c3(),["CreatePackageItemRequest"]:c4(),["CreatePickupFulfillmentDetails"]:c5(),["CreateServiceFulfillmentDetails"]:c6(),["Dimensions"]:c7(),["FulfillmentLineItemRequest"]:c8(),["FulfillmentPackagingRequest"]:c9(),["FulfillmentRecipientRequest"]:c10(),["MetadataRequest"]:c11(),["PackageCreateRequest"]:c12(),["ReturnShipmentLineItemAllocationRequestRequest"]:c13(),["SharedCodec0"]:c14(),["SharedCodec1"]:c15(),["SharedCodec1211"]:c16(),["SharedCodec1212"]:c17(),["SharedCodec133"]:c18(),["SharedCodec134"]:c19(),["SharedCodec135"]:c20(),["SharedCodec136"]:c21(),["SharedCodec137"]:c22(),["SharedCodec257"]:c23(),["SharedCodec389"]:c24(),["SharedCodec390"]:c25(),["SharedCodec391"]:c26(),["SharedCodec392"]:c27(),["SharedCodec393"]:c28(),["SharedCodec394"]:c29(),["SinglePackageCreateRequest"]:c30(),["Weight"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
