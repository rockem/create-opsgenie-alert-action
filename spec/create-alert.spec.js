const { exec } = require('child_process');


describe('Create Alert', function() {
    it('define list of tags', async (done) => {
        const alert = {
            alias: `create-alert-int-test-${Date.now()}`,
            message: 'Test message',
            priority: 'P2'
        }
        const inputs = {
            INPUT_opsgenie_api_key: process.env.OPSGENIE_API_KEY,
            INPUT_alias: alert.alias,
            INPUT_message: alert.message,
            INPUT_priority: alert.priority
        }
        exec('node index.js', {env: inputs}, (err, stdout, stderr) => {
            if(err) {
                throw Error(stdout)
            }
            assert_alert_exists_with(alert)

            )
            done()
        });
    });
});