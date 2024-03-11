---
sidebar_label: "Quiz Toolkit"
sidebar_position: 1
---
# Quiz Toolkit

| :trophy: This is a [premium](https://mecsimcalc.com/pricing) feature |
| -------------------------------------------------------------------- |

<div style={{width: "100%", height: "600px", overflow: "hidden"}}><iframe src="https://mecsimcalc.com/app/0554567/test_quiz_demo_google_sheet" width="100%" height="100%" title="MecSimCalc" style={{position:"relative", left:"-45px", top:"-48px"}} frameBorder="0"></iframe></div>


<iframe src="https://docs.google.com/spreadsheets/d/1XX2gWauVwkACsIWUiF7cIpIlrL1eOjS3_Ub30tqet5o/edit?usp=sharing" style={{
width: '100%',
height: '400px',
border: '0',
}}
frameborder="0">
</iframe>

**MecSimCalc** now supports online quizzes.
In this tutorial, we'll learn how to build a Quiz App for educational purposes. The app displays scores 
instantly, saves results to **Google Sheets**, and **sends email** to students or professors.

Seamlessly integrates with **[Google Sheets](https://www.google.ca/sheets/about/)** for straightforward and organized data compilation.
![img alt](/docs/advanced-applications/quiz-toolkit/sheet_ex.png)


Utilizes **[Gmail](https://www.google.com/gmail/about/)** for direct communication and data sharing, ensuring immediate feedback and results dissemination.
![img alt](/docs/advanced-applications/quiz-toolkit/gmail_ex.png)

:::info
You will need to provide additional parameters for these two features. **Don't worry, we will teach you how to obtain them later!**
:::
## Create a general quiz
### Steps 1: Create your quiz App
For example, you can get student's `name` and `id` from the input, and calculate `grade` through code. If you want this information to be exported to your own Google Sheet, you can do it like this:
```python
"""
Assume that inputs['name'] = "Joe", inputs['id'] = "186234", inputs['grade'] = 85
"""
import mecsimcalc as msc

def main(inputs):
    grade = ... #your logic here
    
    #values you want to collect
    values = [
    [ inputs['name'], inputs['id'], grade ],
    ]    

    # For Google Sheet:
    service_account_info = {
        # We will teach you how to get this later, don't worry
    }
    spreadsheet_id = 'your_spreadsheet_id_here'
  
    msc.append_to_google_sheet(service_account_info, spreadsheet_id, values)

    
    # For Gmail:
    sender_email = 'sender@example.com'
    receiver_email = 'receiver@example.com'
    subject = 'Quiz Results'
    app_password = 'your_app_password_here'
    
    msc.send_gmail(sender_email, receiver_email, subject, app_password, values)
    ...
```
### Steps 2: Store results in Google Sheets
MecSimCalc has its own function that can be used.Users can append data to their own Google Sheets by calling [`append_to_google_sheet`](../mecsimcalc-library#append_to_google_sheet).

#### Arguments:

| Argument               | Type     | Description                                                                                                                   |
|------------------------|----------|-------------------------------------------------------------------------------------------------------------------------------|
| **`service_account_info`** | **dict** | The credentials used for Google Sheets API authentication.                                                                    |
| **`spreadsheet_id`**       | **str**  | The unique identifier of your Google Spreadsheet.                                                                             |
| **`values`**               | **list of lists** | The data to append. Each list element represents a row of data.                                                               |
| **`range_name`**           | **str** (optional)  | The A1 notation of the range to start appending data (Defaults to 'Sheet1!A1'). Generally, there is no need to make changes.. |
| **`include_timestamp`**    | **bool** (optional) | If True, appends the current timestamp to each row of data (Defaults to True).                                                |


All you need to do is add:
```python
values = [
    [ inputs['name'], inputs['id'], grade ],
]  
    
msc.append_to_google_sheet(service_account_info, spreadsheet_id, values)

# if you don't want to include timestamp
msc.append_to_google_sheet(service_account_info, spreadsheet_id, values, 
include_timestamp=False)
```

Quiz values will append to your Google Sheet:
![img alt](/docs/advanced-applications/quiz-toolkit/sheet_ex.png)


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


### Steps 3: Send email to someone when they submit.

You can use [`send_gmail`](../mecsimcalc-library#send_gmail) function.
#### Arguments:

| Argument            | Type     | Description                                                                |
|---------------------|----------|----------------------------------------------------------------------------|
| **`sender_email`**      | **str**  | The email address of the sender.                                           |
| **`receiver_email`**    | **str**  | The email address of the receiver.                                         |
| **`subject`**           | **str**  | The subject line of the email.                                             |
| **`app_password`**      | **str**  | The app-specific password for the sender's email account.                  |
| **`values`**            | **list** | A list of lists. Each list contains data to be included in the email body. |

For example, you can retrieve the student's `name` and `id` from the input, calculate the `grade` through code, and this information can be sent to the receiver's email. All you need to do is add :
```python
values = [
        ["Joe", "186234", 85]
]
msc.send_email(sender_email = "sender_email@gmail.com", 
               receiver_email = "receiver_email@example.ca", 
               subject = "Quiz Results", 
               app_password = "xxxx xxxx xxxx xxxx", 
               values = values)
```
Then receiver will get an email like this:

![img alt](/docs/advanced-applications/quiz-toolkit/gmail_ex.png)


## Connect quiz result with Canvas


## Algebraic Expression Comparison
Mecsimcalc allows you to **verify if two algebraic expressions are mathematically equivalent**. 
All you need to do is to install `sympy` library.

Check out this example:
<div style={{width: "100%", height: "600px", overflow: "hidden"}}><iframe src="https://mecsimcalc.com/app/8080021/algebraic_expression_comparison_demo" width="100%" height="100%" title="MecSimCalc" style={{position:"relative", left:"-45px", top:"-48px"}} frameBorder="0"></iframe></div>

#### Code:   
```python
import sympy as sp

def check_expressions_equal(expr1_str, expr2_

str):
"""
Check if two mathematical expressions, given as strings, are equal.
"""# Convert the string representations to SymPy expressions
expr1 = sp.sympify(expr1_str)
expr2 = sp.sympify(expr2_str)

    # Simplify the difference between the two expressions# and check if the result is equal to zeroreturn sp.simplify(expr1 - expr2) == 0, expr1, expr2


def main(inputs):
expr1=inputs['func_1']
expr2=inputs['func_2']

    res, expr1, expr2 = check_expressions_equal(expr1,expr2)


    # convert to latex expression
    latex_expr1 = sp.latex(expr1)
    latex_expr2 = sp.latex(expr2)


    return {"result": res, "String1": latex_expr1, "String2": latex_expr2}
```
#### Output:   
```python
{% if outputs.result %}
These two equations are the same
{% else %}
These two equations are not the same
{% endif %}

Equation 1: {{ outputs.String1 | katex}}
Equation 2: {{ outputs.String2 | katex}}
```
## Multiple vs Single attempts



## Appendix


In this part, we will teach you how to find the `spreadsheet_id` and `service_account_info` parameters for `append_to_google_sheet` function
### How to Get Spreadsheet ID
You need to create a Spreadsheet first.
The Spreadsheet ID is **the last string of characters in the URL for your spreadsheet**.

For example, in the URL https://docs.google.com/spreadsheets/d/1qpyC0XzvTcKT6wQoFDE8p-Bll4hps/edit#gid=0 , the spreadsheet ID is **1qpyC0XzvTcKT6wQoFDE8p-Bll4hps**

### How to Get Service Account Info

**Step 1: Enable the Google Sheets API**

Before integrating Google APIs into your project, you must enable them within a Google Cloud project. This process allows you to activate one or multiple APIs under the same project umbrella.

1. **First**, navigate to the Google Cloud Console and activate the Google Sheets API through the following link: [Enable the Google Sheets API](https://console.cloud.google.com/flows/enableapi?apiid=sheets.googleapis.com).

   ![img alt](/docs/advanced-applications/quiz-toolkit/sheet_step_1.png)

2. **Next**, you'll need to create a Google Cloud Project if you haven't done so already. Detailed instructions can be found here: [Create a Google Cloud Project](https://developers.google.com/workspace/guides/create-project).

   ![img alt](/docs/advanced-applications/quiz-toolkit/sheet_step_2.png)

**Step 2: [Create Service Account](https://developers.google.com/workspace/guides/create-credentials#create_credentials_for_a_service_account) Credentials**

To authenticate your application with Google's APIs, follow these steps to create and obtain service account credentials:

1. In the Google Cloud console, go to Menu  > **IAM & Admin** > **Service Accounts**.

   [Go to Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts)

2. **Choose your service account**. If you don't have one, create a new service account and assign it the Editor role for adequate permissions.

   ![img alt](/docs/advanced-applications/quiz-toolkit/sheet_step_3.png)
3. Navigate to **Keys** > **Add Key** > **Create New Key**, and select the **JSON** option. Upon clicking **Create**, a JSON file containing your new key pair will be downloaded.

   ![img alt](/docs/advanced-applications/quiz-toolkit/sheet_step_4.png)
4. **Save the JSON file** as **`credentials.json`** in your project directory. This file contains your service account's credentials, which you'll use to authenticate your application. Here's what the JSON file looks like:


In this part, we will teach you how to find the `app_password` parameter for `send_gmail` function
### How to Create a Google App Password

Official Google support page: [Create & use App Passwords](https://support.google.com/accounts/answer/185833?hl=en).

An app password is a 16-digit code that allows less secure apps or devices to access your Google Account. This is especially useful if you have 2-Step Verification enabled and the app you're using doesn't support "Sign in with Google." Here’s how to create one:

1. Go to your [Google Account](https://myaccount.google.com/).
2. Select **Security.**
3. Under "Signing in to Google," select **2-Step Verification**.
   ![img alt](/docs/advanced-applications/quiz-toolkit/gmail_step_1.png)
4. At the bottom of the page, select **App passwords**.
5. Enter a name that helps you remember where you’ll use the app password.
6. Click **Generate** to obtain the 16-digit app password.
7. **Make sure to save the app password** (as you won't be able to see it later) and then copy it into your quiz app
