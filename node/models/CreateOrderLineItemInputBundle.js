import { d255 as c0 } from '../descriptors/data/13.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4299 as c1 } from '../descriptors/data/180.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5064 as c2, d5065 as c3, d5066 as c4, d5067 as c5, d5068 as c6, d5069 as c10, d5070 as c11, d5071 as c12, d5072 as c13, d5082 as c18, d5083 as c20, d5084 as c21, d5074 as c22, d5075 as c23, d5077 as c24, d5078 as c25, d5081 as c27 } from '../descriptors/data/224.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4429 as c7 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c8 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5058 as c9, d5059 as c14, d5060 as c15, d5061 as c16, d5062 as c17, d5063 as c19 } from '../descriptors/data/223.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4578 as c26 } from '../descriptors/data/196.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4361 as c28, d4362 as c29 } from '../descriptors/data/184.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d255 as d255 } from '../descriptors/data/13.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d255;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderLineItemInputBundle"]:c0(),["Dimensions"]:c1(),["GiftCardPurchaseDetailsRequest"]:c2(),["GiftCardPurchaseRecipientRequest"]:c3(),["ImageReferenceRequest"]:c4(),["LineItemFulfillmentOriginRequest"]:c5(),["LineItemFulfillmentRequest"]:c6(),["MetadataRequest"]:c7(),["MoneyValue"]:c8(),["OrderDraftLineItemInventoryDemandRequest"]:c9(),["OrderDraftLineItemTaxCalculationRequest"]:c10(),["OrderDraftLineItemTaxRequest"]:c11(),["OrderDraftTaxComponentRequest"]:c12(),["OrderDraftTaxJurisdictionRequest"]:c13(),["SharedCodec252"]:c14(),["SharedCodec253"]:c15(),["SharedCodec254"]:c16(),["SharedCodec255"]:c17(),["SharedCodec256"]:c18(),["SharedCodec257"]:c19(),["SharedCodec258"]:c20(),["SharedCodec259"]:c21(),["SharedCodec262"]:c22(),["SharedCodec263"]:c23(),["SharedCodec266"]:c24(),["SharedCodec267"]:c25(),["SharedCodec604"]:c26(),["SubscribedLineRequest"]:c27(),["TextModifierRequest"]:c28(),["Weight"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderLineItemInputBundle(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
