import  Ajv from 'ajv'


export function Compile(data, schema) {
    const ajv = new Ajv({validateSchema:true,strict:true,ownProperties:true,removeAdditional:true})

    const d = JSON.parse(JSON.stringify(data));
    const validate = ajv.compile(schema);
    validate(d);
    return d;
  }