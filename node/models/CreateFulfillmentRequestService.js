import { d6041 as c0, d6039 as c13, d6040 as c14 } from '../descriptors/data/274.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6856 as c1, d6857 as c2, d6858 as c5, d6859 as c6, d6860 as c8, d6861 as c9 } from '../descriptors/data/320.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d255 as c3 } from '../descriptors/data/13.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6908 as c4, d6909 as c12, d6910 as c17, d6911 as c21, d6912 as c22, d6904 as c23, d6905 as c24, d6906 as c25 } from '../descriptors/data/324.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6580 as c7, d6581 as c26 } from '../descriptors/data/303.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6862 as c10, d6863 as c15, d6864 as c16 } from '../descriptors/data/321.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c11 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6901 as c18, d6902 as c19, d6903 as c20 } from '../descriptors/data/323.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d255 as d255 } from '../descriptors/data/13.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d255;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateDeliveryFulfillmentDetails"]:c1(),["CreateDigitalFulfillmentDetails"]:c2(),["CreateFulfillmentRequestService"]:c3(),["CreatePackageItemRequest"]:c4(),["CreatePickupFulfillmentDetails"]:c5(),["CreateServiceFulfillmentDetails"]:c6(),["DimensionsRequest"]:c7(),["FulfillmentLineItemRequest"]:c8(),["FulfillmentPackagingRequest"]:c9(),["FulfillmentRecipientRequest"]:c10(),["MetadataRequest"]:c11(),["ReturnShipmentLineItemAllocationRequest"]:c12(),["SharedCodec0"]:c13(),["SharedCodec1"]:c14(),["SharedCodec1546"]:c15(),["SharedCodec1547"]:c16(),["SharedCodec354"]:c17(),["SharedCodec746"]:c18(),["SharedCodec747"]:c19(),["SharedCodec748"]:c20(),["SharedCodec749"]:c21(),["SharedCodec750"]:c22(),["SharedCodec751"]:c23(),["SharedCodec752"]:c24(),["SinglePackageCreateRequest"]:c25(),["WeightRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFulfillmentRequestService(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
