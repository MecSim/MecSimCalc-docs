---
sidebar_label: "Google Sheets"
sidebar_position: 2
---
# Google Sheets Integration
Users can append data to their own google sheets by calling [`append_to_google_sheet`](../mecsimcalc-library#append_to_google_sheet). By linking MecSimCalc directly to a Google Sheet, all responses from quizzes can be instantly recorded and stored in a structured format, ready for further use.

In this part, we will teach you how to find the `spreadsheet_id` and `service_account_info` parameters for `append_to_google_sheet` function
### How to Get Spreadsheet ID:

The Spreadsheet ID is **the last string of characters in the URL for your spreadsheet**.

For example, in the URL https://docs.google.com/spreadsheets/d/1qpyC0XzvTcKT6wQoFDE8p-Bll4hps/edit#gid=0 , the spreadsheet ID is **1qpyC0XzvTcKT6wQoFDE8p-Bll4hps**

### How to Get Service Account Info:

**Step 1: Enable the Google Sheets API**

Before integrating Google APIs into your project, you must enable them within a Google Cloud project. This process allows you to activate one or multiple APIs under the same project umbrella.

1. **First**, navigate to the Google Cloud Console and activate the Google Sheets API through the following link: [Enable the Google Sheets API](https://console.cloud.google.com/flows/enableapi?apiid=sheets.googleapis.com).

   ![img alt](/docs/quiz-toolkit/sheet_step_1.png)

2. **Next**, you'll need to create a Google Cloud Project if you haven't done so already. Detailed instructions can be found here: [Create a Google Cloud Project](https://developers.google.com/workspace/guides/create-project).

   ![img alt](/docs/quiz-toolkit/sheet_step_2.png)

**Step 2: [Create Service Account](https://developers.google.com/workspace/guides/create-credentials#create_credentials_for_a_service_account) Credentials**

To authenticate your application with Google's APIs, follow these steps to create and obtain service account credentials:

1. In the Google Cloud console, go to Menu  > **IAM & Admin** > **Service Accounts**.

   [Go to Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts)

2. **Choose your service account**. If you don't have one, create a new service account and assign it the Editor role for adequate permissions.

   ![img alt](/docs/quiz-toolkit/sheet_step_3.png)
3. Navigate to **Keys** > **Add Key** > **Create New Key**, and select the **JSON** option. Upon clicking **Create**, a JSON file containing your new key pair will be downloaded.

   ![img alt](/docs/quiz-toolkit/sheet_step_4.png)
4. **Save the JSON file** as **`credentials.json`** in your project directory. This file contains your service account's credentials, which you'll use to authenticate your application. Here's what the JSON file looks like:

```json
{
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "private_key_id",
  "private_key": "-----BEGIN PRIVATE KEY-----…-----END PRIVATE KEY-----\n",
  "client_email": "your-service-account-email",
  "client_id": "your-client-id",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "your-client-x509-cert-url"
}
```

The contents of `credentials.json` will be used as the `service_account_info` parameter. Simply copy this information and pass it to the `append_to_sheet()` function as the `service_account_info` argument.
