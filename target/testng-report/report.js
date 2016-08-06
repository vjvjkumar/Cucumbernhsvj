$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("main\\resources\\com\\gktech\\testcases\\login.feature");
formatter.feature({
  "line": 1,
  "name": "Upload resume in JOBS NHS Portal",
  "description": "In order to get the good job\r\nwe have to upload our resume in JOBS NHS.",
  "id": "upload-resume-in-jobs-nhs-portal",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Verify JoBS NHS Login",
  "description": "",
  "id": "upload-resume-in-jobs-nhs-portal;verify-jobs-nhs-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I open firefox \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate \"appurl\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on \"logLink\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter \"logEmail\" as \"\u003cUserName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter \"logPass\" as \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on \"logButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I got the \"\u003cHome\u003e\" page.",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "upload-resume-in-jobs-nhs-portal;verify-jobs-nhs-login;",
  "rows": [
    {
      "cells": [
        "browser",
        "UserName",
        "Password",
        "Home"
      ],
      "line": 15,
      "id": "upload-resume-in-jobs-nhs-portal;verify-jobs-nhs-login;;1"
    },
    {
      "cells": [
        "firefox",
        "neelavijay102",
        "test123",
        "JOBS NHS"
      ],
      "line": 16,
      "id": "upload-resume-in-jobs-nhs-portal;verify-jobs-nhs-login;;2"
    },
    {
      "cells": [
        "firefox",
        "vcvijayk21",
        "selenium123",
        "My Home Page"
      ],
      "line": 17,
      "id": "upload-resume-in-jobs-nhs-portal;verify-jobs-nhs-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Verify JoBS NHS Login",
  "description": "",
  "id": "upload-resume-in-jobs-nhs-portal;verify-jobs-nhs-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I open firefox \"firefox\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate \"appurl\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on \"logLink\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter \"logEmail\" as \"neelavijay102\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter \"logPass\" as \"test123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on \"logButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I got the \"JOBS NHS\" page.",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.I_open(String)"
});
formatter.result({
  "duration": 40379292250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "appurl",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.I_navigate(String)"
});
formatter.result({
  "duration": 4046651293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logLink",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.I_click_on(String)"
});
formatter.result({
  "duration": 417671617,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logEmail",
      "offset": 9
    },
    {
      "val": "neelavijay102",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.I_enter_username(String,String)"
});
formatter.result({
  "duration": 201488661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logPass",
      "offset": 9
    },
    {
      "val": "test123",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.I_enter_username(String,String)"
});
formatter.result({
  "duration": 266066627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logButton",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.I_click_on(String)"
});
formatter.result({
  "duration": 3529194038,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JOBS NHS",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.I_got_the_page(String)"
});
formatter.result({
  "duration": 153051,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify JoBS NHS Login",
  "description": "",
  "id": "upload-resume-in-jobs-nhs-portal;verify-jobs-nhs-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I open firefox \"firefox\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate \"appurl\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on \"logLink\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter \"logEmail\" as \"vcvijayk21\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter \"logPass\" as \"selenium123\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on \"logButton\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I got the \"My Home Page\" page.",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.I_open(String)"
});
formatter.result({
  "duration": 13424050701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "appurl",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.I_navigate(String)"
});
formatter.result({
  "duration": 2384573200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logLink",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.I_click_on(String)"
});
formatter.result({
  "duration": 262060958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logEmail",
      "offset": 9
    },
    {
      "val": "vcvijayk21",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.I_enter_username(String,String)"
});
formatter.result({
  "duration": 118365570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logPass",
      "offset": 9
    },
    {
      "val": "selenium123",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.I_enter_username(String,String)"
});
formatter.result({
  "duration": 136839301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logButton",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.I_click_on(String)"
});
formatter.result({
  "duration": 3651503252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My Home Page",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.I_got_the_page(String)"
});
formatter.result({
  "duration": 330645,
  "status": "passed"
});
formatter.uri("main\\resources\\com\\gktech\\testcases\\registration.feature");
formatter.feature({
  "line": 1,
  "name": "Upload resume in JOBS NHS",
  "description": "In order to upload resume\r\nregister in the JOBS NHS Portal",
  "id": "upload-resume-in-jobs-nhs",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Register JOBS NHS",
  "description": "",
  "id": "upload-resume-in-jobs-nhs;register-jobs-nhs",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I open firefox \"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I navigate \"appurl\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on \"regLink\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter \"regFName\" as \"\u003cRegFName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter \"regSurname\" as \"\u003cRegSurName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I enter \"regCountry\" as \"\u003cRegCountry\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I enter \"regEmail\" as \"\u003cRegEmail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I enter \"regEmailConf\" as \"\u003cRegEmailConf\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I enter \"regPass\" as \"\u003cRegPass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I enter \"regPassConf\" as \"\u003cRegPassConf\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I enter \"regSecuQues\" as \"\u003cRegSecuQues\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I enter \"regSecuAns\" as \"\u003cRegSecuAns\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click on \"regCheckbox\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I click on \"regCreate\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "upload-resume-in-jobs-nhs;register-jobs-nhs;",
  "rows": [
    {
      "cells": [
        "browser",
        "RegFName",
        "RegSurName",
        "RegCountry",
        "RegEmail",
        "RegEmailConf",
        "RegPass",
        "RegPassConf",
        "RegSecuQues",
        "RegSecuAns"
      ],
      "line": 26,
      "id": "upload-resume-in-jobs-nhs;register-jobs-nhs;;1"
    },
    {
      "cells": [
        "firefox",
        "vijay",
        "kumar",
        "United Kingdom",
        "vcvijayk21@gmail.com",
        "vcvijayk21@gmail.com",
        "test123",
        "test123",
        "A memorable place?",
        "swiss"
      ],
      "line": 27,
      "id": "upload-resume-in-jobs-nhs;register-jobs-nhs;;2"
    },
    {
      "cells": [
        "firefox",
        "govardhan",
        "karnati",
        "India",
        "govardhan@gmail.com",
        "govardhan@gmail.com",
        "java123",
        "java123",
        "A memorable place?",
        "singapore"
      ],
      "line": 28,
      "id": "upload-resume-in-jobs-nhs;register-jobs-nhs;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Register JOBS NHS",
  "description": "",
  "id": "upload-resume-in-jobs-nhs;register-jobs-nhs;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I open firefox \"firefox\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I navigate \"appurl\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on \"regLink\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter \"regFName\" as \"vijay\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter \"regSurname\" as \"kumar\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I enter \"regCountry\" as \"United Kingdom\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I enter \"regEmail\" as \"vcvijayk21@gmail.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I enter \"regEmailConf\" as \"vcvijayk21@gmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I enter \"regPass\" as \"test123\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I enter \"regPassConf\" as \"test123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I enter \"regSecuQues\" as \"A memorable place?\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I enter \"regSecuAns\" as \"swiss\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click on \"regCheckbox\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I click on \"regCreate\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.I_open(String)"
});
formatter.result({
  "duration": 14806761401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "appurl",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.I_navigate(String)"
});
formatter.result({
  "duration": 4475526020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regLink",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.I_click_on(String)"
});
formatter.result({
  "duration": 340575546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regFName",
      "offset": 9
    },
    {
      "val": "vijay",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.I_enter_username(String,String)"
});
formatter.result({
  "duration": 12411957392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regSurname",
      "offset": 9
    },
    {
      "val": "kumar",
      "offset": 25
    }
  ],
  "location": "StepDefinitions.I_enter_username(String,String)"
});
formatter.result({
  "duration": 136157039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regCountry",
      "offset": 9
    },
    {
      "val": "United Kingdom",
      "offset": 25
    }
  ],
  "location": "StepDefinitions.I_enter_username(String,String)"
});
formatter.result({
  "duration": 173752406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regEmail",
      "offset": 9
    },
    {
      "val": "vcvijayk21@gmail.com",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.I_enter_username(String,String)"
});
formatter.result({
  "duration": 336387821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regEmailConf",
      "offset": 9
    },
    {
      "val": "vcvijayk21@gmail.com",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.I_enter_username(String,String)"
});
formatter.result({
  "duration": 970588210,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regPass",
      "offset": 9
    },
    {
      "val": "test123",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.I_enter_username(String,String)"
});
formatter.result({
  "duration": 244771926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regPassConf",
      "offset": 9
    },
    {
      "val": "test123",
      "offset": 26
    }
  ],
  "location": "StepDefinitions.I_enter_username(String,String)"
});
formatter.result({
  "duration": 385761023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regSecuQues",
      "offset": 9
    },
    {
      "val": "A memorable place?",
      "offset": 26
    }
  ],
  "location": "StepDefinitions.I_enter_username(String,String)"
});
formatter.result({
  "duration": 1688219577,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regSecuAns",
      "offset": 9
    },
    {
      "val": "swiss",
      "offset": 25
    }
  ],
  "location": "StepDefinitions.I_enter_username(String,String)"
});
formatter.result({
  "duration": 989745988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regCheckbox",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.I_click_on(String)"
});
formatter.result({
  "duration": 330167589,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regCreate",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.I_click_on(String)"
});
formatter.result({
  "duration": 13020290272,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Register JOBS NHS",
  "description": "",
  "id": "upload-resume-in-jobs-nhs;register-jobs-nhs;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I open firefox \"firefox\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I navigate \"appurl\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on \"regLink\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I enter \"regFName\" as \"govardhan\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter \"regSurname\" as \"karnati\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I enter \"regCountry\" as \"India\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I enter \"regEmail\" as \"govardhan@gmail.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I enter \"regEmailConf\" as \"govardhan@gmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I enter \"regPass\" as \"java123\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I enter \"regPassConf\" as \"java123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I enter \"regSecuQues\" as \"A memorable place?\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I enter \"regSecuAns\" as \"singapore\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click on \"regCheckbox\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I click on \"regCreate\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.I_open(String)"
});
formatter.result({
  "duration": 50198066641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "appurl",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.I_navigate(String)"
});
formatter.result({
  "duration": 2259767861,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regLink",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.I_click_on(String)"
});
formatter.result({
  "duration": 494082301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regFName",
      "offset": 9
    },
    {
      "val": "govardhan",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.I_enter_username(String,String)"
});
formatter.result({
  "duration": 2973266389,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regSurname",
      "offset": 9
    },
    {
      "val": "karnati",
      "offset": 25
    }
  ],
  "location": "StepDefinitions.I_enter_username(String,String)"
});
formatter.result({
  "duration": 108814345,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regCountry",
      "offset": 9
    },
    {
      "val": "India",
      "offset": 25
    }
  ],
  "location": "StepDefinitions.I_enter_username(String,String)"
});
formatter.result({
  "duration": 90329904,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regEmail",
      "offset": 9
    },
    {
      "val": "govardhan@gmail.com",
      "offset": 23
    }
  ],
  "location": "StepDefinitions.I_enter_username(String,String)"
});
formatter.result({
  "duration": 188580565,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regEmailConf",
      "offset": 9
    },
    {
      "val": "govardhan@gmail.com",
      "offset": 27
    }
  ],
  "location": "StepDefinitions.I_enter_username(String,String)"
});
formatter.result({
  "duration": 201560948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regPass",
      "offset": 9
    },
    {
      "val": "java123",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.I_enter_username(String,String)"
});
formatter.result({
  "duration": 146273171,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regPassConf",
      "offset": 9
    },
    {
      "val": "java123",
      "offset": 26
    }
  ],
  "location": "StepDefinitions.I_enter_username(String,String)"
});
formatter.result({
  "duration": 174018796,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regSecuQues",
      "offset": 9
    },
    {
      "val": "A memorable place?",
      "offset": 26
    }
  ],
  "location": "StepDefinitions.I_enter_username(String,String)"
});
formatter.result({
  "duration": 207713356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regSecuAns",
      "offset": 9
    },
    {
      "val": "singapore",
      "offset": 25
    }
  ],
  "location": "StepDefinitions.I_enter_username(String,String)"
});
formatter.result({
  "duration": 143026513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regCheckbox",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.I_click_on(String)"
});
formatter.result({
  "duration": 240679246,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "regCreate",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.I_click_on(String)"
});
formatter.result({
  "duration": 2593615383,
  "status": "passed"
});
});