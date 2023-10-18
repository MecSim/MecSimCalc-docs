---
sidebar_label: "App Monetization"
sidebar_position: 8
---

# App Monetization

MecSimCalc allows you, as the app developer, to monetize your app by charging users a monthly subscription for access to your app. You can get started for free by following the steps below.

#### About Stripe

MecSimCalc uses [Stripe](https://stripe.com/) to handle all payments. Stripe is a secure and well trusted payment platform used by many companies around the world. MecSimCalc does not retain any payment data on our servers and cannot access any payment, banking, or credit card details.

## Eligibility

You are eligible to monetize your app if you:

1. Have a free MecSimCalc account.
2. Reside in a country supported by Stripe, found [here](https://stripe.com/global).
3. Are at least 13 years old.
4. Have a valid bank account to receive payouts.
5. Have verification documents, if you are an individual or incorporated documents, if you are a business.

## Step 1: Onboarding

In order to receive payouts, you must first complete the Stripe onboarding by going to https://mecsimcalc.com/account#edit-monetization, and then clicking on **Get Started** under the _Edit Monetization_ section.

<div style={{textAlign: 'center'}}>

![img alt](/docs/monetization/stripe_onboard_1.png)

</div>

Once redirected, create a Stripe account and complete the onboarding process. You will be asked to provide information about your individual or business and bank account details. This information is required by Stripe to verify your identity and to send you payouts.

<div style={{textAlign: 'center'}}>

![img alt](/docs/monetization/stripe_onboard_2.png)

</div>

:::caution
Your Stripe account login is different from your MecSimCalc account login. Make sure to save your Stripe login details!
:::

Once onboarding is complete, you will be redirected to your Stripe dashboard (more about that below).
Your [Edit Monetization](https://mecsimcalc.com/account#edit-monetization) section should now look like this:

<div style={{textAlign: 'center'}}>

![img alt](/docs/monetization/edit_monetization.png)

</div>

## Step 2: Set a price

Next, set a price for each app that you want to monetize. Users will be charged a _monthly subscription fee_ to access your app.

Go to the Info step of your app's editor. Find the **Monthly subscription fee (optional)** field and enter a price in USD
of at least $0.99. Then publish your app to enable the subscription.

You can change the price at any time by editing the price field on the Info step and republishing your app. Existing users will continue to be charged at the old price until they cancel their subscription, even when the price is lowered. New users will be charged at the new price.

All existing subscription will be cancelled immediately if:

- The price of a paid app is changed to $0 (i.e. free)
- The app is unpublished
- The app is deleted

<div style={{textAlign: 'center'}}>

![img alt](/docs/monetization/price_field.png)

</div>

:::tip
This subscription fee does not apply to you as the app developer. You will not be charged a subscription fee to access your own apps.
:::

### Fees

Note that a portion of each subscription will be subtracted in fees to cover transaction fees, currency conversions, and various platform costs. The remaining amount will be paid out to you, in other words, the fees are included in the app price. The fee percentage is as follows:

| Price (USD)   | Fee (%) |
| ------------- | ------- |
| $0.99 - $1.99 | 50%     |
| $2.00+        | 30%     |

## Step 3: Stripe Dashboard

MecSimCalc integrates with Stripe to handle all payments. You can view your Stripe dashboard at https://dashboard.stripe.com/dashboard. From here, you can view your earnings, manage your bank account, and more.

Check out Stripe's documentation for more information on how to use the Stripe dashboard: https://stripe.com/docs/dashboard/basics.

:::caution
In order to receive payouts, you must complete all Stripe requirements and provide all required information.
If you see a red banner at the top of your Stripe dashboard, please complete the required steps to receive payouts.
![img alt](/docs/monetization/payout_error.png)
:::

### Home tab

> Home provides information about the activity on your account. It contains a wide range of analytics and real-time charts that provide insight into the performance of your business. Home also shows recent activity that might require you to take action, such as unanswered disputes or identity verifications.

<div style={{textAlign: 'center'}}>

![img alt](/docs/monetization/stripe_dashboard_home.png)

</div>

### Payments tab

> The Payments tab includes everything you need to manage the flow of money in and out of your account.

<div style={{textAlign: 'center'}}>

![img alt](/docs/monetization/stripe_dashboard_payments.png)

</div>

### Balance tab

> The Balance tab shows your current balance, available balance, and pending balance. It also includes a list of all payouts and transfers that have been made to your bank account. You can also view your payout schedule and change your payout schedule (e.g. daily, weekly, monthly, etc.).

<div style={{textAlign: 'center'}}>

![img alt](/docs/monetization/stripe_dashboard_balance.png)

</div>

:::tip
The Dashboard supports keyboard shortcuts for common actions. Press ? on your keyboard on any page in the Dashboard for a list of available shortcuts.
:::
