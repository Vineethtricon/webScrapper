const { test, request } = require('@playwright/test')
//import { test, expect, request } from '@playwright/test';
const { uiCommonUtils } = require('../../utils/uiCommonMethodModule')
const uiMethods = new uiCommonUtils.uiBaseClass.uiBaseClass()


const apiMethods = new uiCommonUtils.apiBaseClass.APIBaseClass()
/*
1. Lounch Triconinfotech URL 
2. Navigate to Menu "Industries", "Solution", "Difference"
3. Validate the Page title 
*/
test('Demo Method for Tricon Module', async ({ request, page }) => {
    const URL = "https://9gc3i32w1h.execute-api.ap-south-1.amazonaws.com/Prod/hello/"
    const payload = "triconWebSiteHomeData.json"
   await uiMethods.uiToJson(page)
   await apiMethods.httpsPOSTCall({request,URL, payload})
  

})