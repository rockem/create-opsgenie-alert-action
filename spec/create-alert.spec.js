const {RunOptions, RunTarget} = require('github-action-ts-run-api');

const target = RunTarget.mainJsScript('action.yml');

describe('Create Alert', function() {
    it('define list of tags', async () => {
        const options = RunOptions.create().setInputs({
            api_key: process.env.OPSGENIE_API_KEY,
            alias: 'alert-alias',

        })


        const res = await target.run(options);
    });
});