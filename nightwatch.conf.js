const chromedriver = require('chromedriver');


const testUrl = 'https://globoesporte.globo.com/'
const defaultTimeout = 15000

module.exports = {
    src_folders: ['tests'],

    page_objects_path: './pages',

    webdriver: {
        start_process: true,
    },

    // test_workers: {
    //     enabled: true,
    //     workers: 2
    // },

    screenshots: {
        enabled: true,
         on_failure: true,
        on_error: true,
         path: 'tests_output/'
    },

    test_settings: {
        default: {
            launch_url: testUrl,
            globals: {
                waitForConditionTimeout: defaultTimeout // As vezes a conexão com a internet/rede fica lenta
            },
            webdriver: {
                server_path: chromedriver.path,
                port: 9515
            },
            desiredCapabilities: {
                browserName: "chrome"
            }
        },

        headless: {
            launch_url: testUrl,
            globals: {
                waitForConditionTimeout: defaultTimeout // As vezes a conexão com a internet/rede fica lenta
            },
            webdriver: {
                server_path: chromedriver.path,
                port: 9515
            },
            desiredCapabilities: {
                browserName: "chrome",
                chromeOptions: {
                    w3c: false,
                    args: ['--headless', '--no-sandbox', '--disable-dev-shm-usage']
                }
            }
        },

        stage: {
            launch_url: "https://globoesporte.globo.com/"
        }
    }


}