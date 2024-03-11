---
sidebar_label: "Overview"
sidebar_position: 1
---

# Overview

> Self-hosting is the practice of running and maintaining a website or service using a private web server, instead of using a service outside of someone's own control. - Wikipedia

You must first create your app on [MecSimCalc Create](https://mecsimcalc.com/create).

Once created, you can either:

- Publish directly to the [MecSimCalc platform](https://mecsimcalc.com/explore) for free
- **OR**
- Download the app and host it yourself (eg. on a private server)
  - Follow these instructions on self-hosting

:::tip
We recommend that you publish directly to the MecSimCalc platform for ease-of-use and to get the latest updates, however, self-hosting is available for **_advanced_** users who wish to host their apps on their own servers.
:::

:::info
This self-hosted version only allows for the **viewing** and **running** of existing apps. Creating new apps and editing apps can only be done on [mecsimcalc.com](https://mecsimcalc.com/).
:::

The self-hosted [source code](https://github.com/MecSimCalc/MecSimCalc-self-hosted) is a NextJS website application with ReactJS and Typescript. This application has two pages.

The first page is the explore page, which lists all of the apps:

![img](/docs/self-hosting-apps/home_page.png)

The second page is the app page, where the _**user**_ can run the apps:

![img](/docs/self-hosting-apps/view_app_page.png)

| Hosting                                   | Description               |
| ----------------------------------------- | ------------------------- |
| [localhost](/self-hosting-apps/localhost) | Run on your local machine |

## Architecture

This application uses the [client-server model](https://en.wikipedia.org/wiki/Client%E2%80%93server_model): there are two independent processes that communicate with each over over the network.

The **server** is written in `Python 3` using the [Flask web framework](https://flask.palletsprojects.com/en/2.1.x/). The server is responsible for keeping track of all the apps and will execute the Python code of each app. When requested by the client, the server will return the app details to the client.

The **client** is written in [ReactJS](https://reactjs.org/) and [Typescript](https://www.typescriptlang.org/) (ie. Javascript with types) using the [NextJS](https://nextjs.org/) framework. The client is responsible for displaying the webpage to the user, in other words, the client is everything that a _**user**_ will see in the web browser. The client will request app data from the server and then display it to the user.

## Folders

| Folder        | Description                   |
| ------------- | ----------------------------- |
| **apps**      | `.json` files of all the apps |
| **back-end**  | The server code               |
| **front-end** | The client code               |
