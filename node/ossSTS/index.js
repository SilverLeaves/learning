let OSS = require("ali-oss");
let STS = OSS.STS;

// ossuploader用户
let sts = new STS({
  accessKeyId: "LTAIx4xYSBnwHpnS",
  accessKeySecret: "8tC5DbfFgmmOnsI2trk936H5GmX3zi"
});

async function assumeRole() {
  try {
    // 扮演ossuploader角色
    let token = await sts.assumeRole(
      "acs:ram::1203009356076959:role/ossuploader"
    );
    let client = new OSS({
      region: "oss-cn-hangzhou",
      accessKeyId: token.credentials.AccessKeyId,
      accessKeySecret: token.credentials.AccessKeySecret,
      stsToken: token.credentials.SecurityToken,
      bucket: "officesite"
    });

    console.log(token.credentials);
    console.log(client);
  } catch (e) {
    console.log(e);
  }
}

assumeRole();
