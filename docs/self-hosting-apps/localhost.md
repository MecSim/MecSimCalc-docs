---
sidebar_label: "Localhost"
sidebar_position: 2
---

# Self hosting on localhost

This tutorial will guide you on how to download your apps and run it locally on your own computer at this url: [http://localhost:3000](http://localhost:3000).

:::caution
This is an **advanced** tutorial and prior experience using the terminal is expected
:::

## Downloading the code

1. Go to https://github.com/MecSim/MecSimCalc-self-hosted and download the source code. You can either:

- Click on **Code** > **Download ZIP** on the Github site, and then extract the ZIP file.
  ![img alt](/docs/self-hosting-apps/download_github_repo.png)
- **OR**
- Execute the `git clone` command in your terminal (if you have `git` installed).

```
git clone https://github.com/MecSim/MecSimCalc-self-hosted
```

## Setting up the back-end server

1. [Download Python](https://www.python.org/downloads/) if you do not have it installed already.
   - This tutorial has been tested on Python 3.8.
2. Open your terminal, and `cd` into the `back-end` folder.

```
cd MecSimCalc-self-hosted/back-end/
```

3. Install all the Python libraries in `requirements.txt` using `pip install`:

```
pip install -r requirements.txt
```

4. Start the server:

```
python server.py
```

:::tip
If `python server.py` does not work, try `python3 server.py`
:::

5. You should see the following printed to your terminal:

```
* Serving Flask app 'server' (lazy loading)
* Environment: production
  WARNING: This is a development server. Do not use it in a production deployment.
  Use a production WSGI server instead.
* Debug mode: on
* Running on http://127.0.0.1:5000 (Press CTRL+C to quit)
* Restarting with stat
* Debugger is active!
* Debugger PIN: 742-486-046
```

## Setting up the front-end client

1. [Download NodeJS](https://nodejs.org/en/download/) if you do not have it installed already.
   - This tutorial has been tested on Node 16.7.
2. Keep the Python server process running from before and open another terminal.
3. `cd` into the `front-end` folder:

```
cd MecSimCalc-self-hosted/front-end/
```

4. Install all the npm packages in `package.json`:

```
npm install
```

5. Start the front end server:

```
npm run build
npm run start
```

The following should be printed to your terminal:

```
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
info  - Loaded env from \MecSimCalc-self-hosted\front-end\.env
```

6. Go to [http://localhost:3000](http://localhost:3000) to check the website is working.

## Adding your apps

1. Go to https://mecsimcalc.com/app and download your apps by clicking the **Download** button.

![img](/docs/self-hosting-apps/download_my_apps.png)

2. Copy the downloaded `.json` files into the `MecSimCalc-self-hosted/apps` folder.

3. Refresh [http://localhost:3000](http://localhost:3000) and voilà, your apps should now show up.

## Starting the application

After the initial installation of the application, you do not need to re-install the `pip` and `npm` packages. To start up your application again, do the following:

1. Open a a terminal, and `cd` into the `front-end` folder.
2. Execute `npm run start`.
3. Open another terminal, and `cd` into the `back-end` folder.
4. Execute `python server.py`.
5. Go to [http://localhost:3000](http://localhost:3000).

To shut down the application, simply close the two terminal windows.

:::tip
If the application is not working, check that both client and server processes are running in the terminals, and that there are no error messages in the terminals.
:::

## Production build

When your self-hosted application is ready to be deployed into production, make the following changes:

1. In `server.py`, set `debug` to `False`:

```
server.run(debug=False)
```

2. In `.env`, change `NEXT_PUBLIC_API` to the url of your Python server, if needed.
3. Start the front-end server in production mode:

```
npm run build
npm run start
```
