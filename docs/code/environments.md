---
sidebar_label: "Environments"
sidebar_position: 3
---

# Code Environments

| :trophy: This is a [premium](https://mecsimcalc.com/pricing) feature |
| -------------------------------------------------------------------- |

## Use case

Consider building a custom environment for your Python code if you need to:

- Install additional **Python packages** and/or **specific package versions**.
- Install a specific **Python version** (e.g. `Python 3.10`).
- Install additional **system packages** (e.g. `apt-get install`).
- Make certain **files** available inside the filesystem.
  - As opposed to downloading necessary files at runtime, which can slow down the code.

## How it works

Using MecSimCalc's custom environment builder, the _**developer**_ can create a custom environment for the _**user**_ to run the app's code in. The environment builder is an easy-to-use interface that allows the developer to specify 2 build files, which are used to build the environment (i.e. a docker image). Once the environment is built, it will be saved and can be used across multiple apps.

Note that each environment is only visible and editable by the developer who created it. Follow the instructions below to create a custom environment.

## Step 1: Open the environment builder

In your app editor, go to the **Code** step and click on **Python 3.x** in the toolbar on the right to open the environment builder:

<div style={{textAlign: 'center'}}>

![img alt](/docs/code/open_env.png)

</div>

Once opened, create a new environment:

1. Click on **NEW** in the bottom left corner.
2. Notice that a new environment has been created in the list on the left.
   - Your custom environments will appear under the **My Environments** header.
   - Default environments available for all users will appear under the **Defaults** header.
3. Edit the "My Env" to give your environment a useful name.
   - The other info shown at the top are:
     - **Updated at**: the last time the environment was updated.
     - **Created on**: the date that the environment was created.
     - **Status**: whether the environment has been _built_ or _not built_. The **Select Environment** button is only available for built environments.
     - **Used by**: the number of apps that are using this environment.
4. Select a Python version from the drop down.

<div style={{textAlign: 'center'}}>

![img alt](/docs/code/new_env.png)

</div>

## Step 2: Add packages

### Option 1: Builder

Add the Python packages to install (i.e. packages to `pip install`). You will need:

- Package name (required).
- Package version (optional): leave blank if any version is acceptable (recommended).
  - Note: by specifying incompatible versions, the build will fail. Whereas, by leaving the version blank, the latest compatible version will be installed with no error.
- Version operator: defaults to `==` (recommended). [Learn more.](https://iscompatible.readthedocs.io/en/latest/)

<div style={{textAlign: 'center'}}>

![img alt](/docs/code/env_pkgs.png)

</div>

### Option 2: requirements.txt

Alternatively, Python packages can be installed by editing the `requirements.txt` file directly. Click on the **requirement.txt** button to open the code editor.

[Read more on requirements.txt files.](https://pip.pypa.io/en/stable/reference/requirements-file-format/)

<div style={{textAlign: 'center'}}>

![img alt](/docs/code/env_reqs.png)

</div>

:::tip
To generate a `requirements.txt` file from your local Python environment, run the following command in your terminal:

```bash
pip freeze > requirements.txt
```

Then open and copy the contents of the `requirements.txt` file into the code editor.
:::

## Step 3: Add files

Upload any files that you want to be available inside the environment's filesystem. This is useful for:

- Files that are too large to download at runtime.
- Files that are not publicly available online.
- Files that the code expects to exist at a specific path.

Upload files by either:

1. A publicly accessible url hosting that file using the **Add File by URL** textfield. This requires:

   - The file to be accessible without a password and with a valid url.
   - The url must be the raw contents of the file and not a webpage. For example, `https://github.com/MecSimCalc/MecSimCalc-docs/blob/main/README.md` will not work, whereas `https://raw.githubusercontent.com/MecSimCalc/MecSimCalc-docs/main/README.md` will.

2. Uploading a local file from your computer using the **Choose File** button.

<div style={{textAlign: 'center'}}>

![img alt](/docs/code/env_files.png)

</div>

All uploaded files are saved in the `/home` folder and can be accessing in the Python code by its file path: `/home/<filename>` (e.g. `/home/hello.png`).

:::caution
The Dockerfile can be edited directly to further configure the code environment, by clicking on the **Dockerfile** button. However, this is strongly discouraged as it may cause the build to fail or the environment to break. [Read more on Dockerfiles](https://docs.docker.com/engine/reference/builder/)
:::

## Step 4: Build the environment

Once you are happy with the environment, click on the **Build Environment** button to start the build. This may take many minutes, so please be patient and do not close the window!

If the build is successful, the environment will be saved and can be used across multiple of your apps. If the build fails, please view the error, make the necessary changes and try again.

:::danger
Updating an environment shared by other apps (both draft and published), will also update the environment for those apps. This may cause the apps to break if the environment is not compatible with the code. It is strongly recommended to create a new environment and then update the apps to use the new environment.
:::

Once the build is successful, close the building window and click on the **Select Environment** to use the environment for your app.
