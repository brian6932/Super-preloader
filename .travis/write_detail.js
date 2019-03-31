const fs = require('fs');
const { gitLog } = require('./git-log');

// get latest update time
const commitInfo = gitLog('../', {fileList: ['mydata.json'], nCommit: 1});
const lastUpdateDate = new Date(commitInfo[0].date);

const info = {
    created_by: "mach6",
    name: "mydata.json",
    updated_at: lastUpdateDate.toJSON(),
    required_keys: "url nextLink pageElement",
    created_at: "2017-09-27T00:00:00.000Z",
    resource_url: "https://machsix.github.io/Super-preloader/mydata.json",
    description: "Rule for Super_preloaderPlus_one_New",
    permit_other_keys: true
};

fs.writeFileSync('../mydata_detail.json', JSON.stringify(info, null, 2), 'utf8');
