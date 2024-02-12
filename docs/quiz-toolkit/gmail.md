---
sidebar_label: "Gmail"
sidebar_position: 3
---
# Gmail Integration

Users can automatically send personalized emails to quiz participants or colleagues, directly from MecSimCalc by calling [`send_gmail`](../mecsimcalc-library#send_gmail). 

In this part, we will teach you how to find the `app_password` parameter for `send_gmail` function
### **How to Create a Google App Password**

Official Google support page: [Create & use App Passwords](https://support.google.com/accounts/answer/185833?hl=en).

An app password is a 16-digit code that allows less secure apps or devices to access your Google Account. This is especially useful if you have 2-Step Verification enabled and the app you're using doesn't support "Sign in with Google." Here’s how to create one:

1. Go to your [Google Account](https://myaccount.google.com/).
2. Select **Security.**
3. Under "Signing in to Google," select **2-Step Verification**.
![img alt](/docs/quiz-toolkit/gmail_step_1.png)

4. At the bottom of the page, select **App passwords**.
5. Enter a name that helps you remember where you’ll use the app password.
6. Select **Generate**.
7. To enter the app password, follow the instructions on your screen. The app password is the 16-character code that generates on your device.
8. Select **Done**.
