---
sidebar_label: "App Monetization"
sidebar_position: 8
---

# App Monetization

MecSimCalc allows you as the app developer to monetize your app by charging users a monthly subscription for access to your app. You can get started for free by following the steps below.

MecSimCalc uses the [Stripe](https://stripe.com/) payment platform to handle all payments. Stripe is a secure and well trusted payment platform used by many companies around the world. MecSimCalc does not store any payment information on our servers and does not have access to any payment, bank, or credit card information.

## Eligibility

You are eligible to monetize your app if you meet the following requirements:

1. Have a free MecSimCalc account
2. Reside in a country supported by Stripe (see [here](https://stripe.com/global) for supported countries)
3. At least 13 years old
4. Have a valid bank account to receive payouts

## Step 1: Onboarding

In order to receive payouts, you must complete Stripe onboarding by going to https://mecsimcalc.com/account#edit-monetization, and then clicking on **Get Started** under the Edit Monetization section.

<div style={{textAlign: 'center'}}>

![img alt](/docs/monetization/stripe_onboard_1.png)

</div>

Once redirected to Stripe, create a Stripe account and complete the onboarding process. You will be asked to provide information about your individual/business and bank account. This information is required by Stripe to verify your identity and to send you payouts.

:::tip
Your Stripe account login is different from your MecSimCalc account login. Make sure to save your Stripe login details!
:::

Stripe's onboarding screen should look like this, and you can leave and return to the onboarding process at any time by coming back to the **Edit Monetization** section.

<div style={{textAlign: 'center'}}>

![img alt](/docs/monetization/stripe_onboard_2.png)

</div>

Once onboarding is completed, you will be redirected to your Stripe dashboard: https://dashboard.stripe.com/test/dashboard.
Your Edit monetization section should now look like this:

<div style={{textAlign: 'center'}}>

![img alt](/docs/monetization/stripe_onboard_3.png)

</div>

## Step 2: Set a price

Next, set a price for each app that you want to monetize. Users will be charged a monthly subscription fee to access your app.

Go to the Info step of your app's editor. Find the **Monthly subscription fee (optional)** field and enter a price in USD
of at least $0.99. Then publish your app to enable the subscription.

:::tip
This subscription fee does not apply to you as the app developer. You will not be charged a subscription fee to access your own app.
:::

### Fees

Note that a portion of each user subscription will be subtracted in fees to cover transaction costs, currency conversions, and various platform costs. The remaining amount will be paid out to you. The fee percentage is as follows:

- If the price is less than $2.00, the fee is 50% of the price
- If the price is $2.00 or more, the fee is 30% of the price
